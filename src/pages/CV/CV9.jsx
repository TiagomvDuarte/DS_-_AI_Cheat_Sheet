import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: '#f97316', borderLeft: '3px solid #f97316', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: '3px solid #f97316', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  math: { background: 'var(--bg-primary)', borderRadius: 8, padding: '0.75rem 1rem', fontFamily: 'monospace', fontSize: '0.88rem', color: 'var(--text-primary)', textAlign: 'center', margin: '0.75rem 0' },
};

const AnchorDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Anchor Boxes — Detecção por Regressão de Offsets</p>
    <svg viewBox="0 0 480 130" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Image grid */}
      <rect x={5} y={15} width={130} height={110} rx="4" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1"/>
      {/* Grid lines */}
      {[48,91].map(x => <line key={`v${x}`} x1={x} y1={15} x2={x} y2={125} stroke="var(--text-secondary)" strokeWidth="0.5"/>)}
      {[57,99].map(y => <line key={`h${y}`} x1={5} y1={y} x2={135} y2={y} stroke="var(--text-secondary)" strokeWidth="0.5"/>)}
      <text x="70" y="11" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5" fontWeight="700">Feature map com grid</text>

      {/* Cell com anchors */}
      <rect x={48} y={57} width={43} height={42} rx="2" fill="rgba(249,115,22,0.20)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="69" y="54" textAnchor="middle" fill="#f97316" fontSize="6.5">célula (i,j)</text>

      {/* Anchors em destaque */}
      <rect x={52} y={61} width={14} height={14} rx="1" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="2,1"/>
      <rect x={56} y={59} width={20} height={34} rx="1" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="2,1"/>
      <rect x={50} y={63} width={38} height={24} rx="1" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="2,1"/>

      <text x="70" y="136" fill="#f97316" fontSize="6.5"> square</text>
      <text x="100" y="136" fill="#f97316" fontSize="6.5"> tall</text>
      <text x="125" y="136" fill="#f97316" fontSize="6.5"> wide</text>

      {/* Arrow */}
      <line x1="148" y1="70" x2="175" y2="70" stroke="#f97316" strokeWidth="1.5"/>
      <polygon points="175,66 183,70 175,74" fill="#f97316"/>

      {/* Per anchor predictions */}
      <rect x="185" y="20" width="120" height="100" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="245" y="36" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">Por anchor:</text>
      {[
        { y: 50, label: 'objectness score', color: '#f97316' },
        { y: 65, label: 'Δx, Δy (offset centro)', color: '#f97316' },
        { y: 80, label: 'Δw, Δh (escala box)', color: '#f97316' },
        { y: 95, label: 'class probs (K classes)', color: '#f97316' },
      ].map(({ y, label, color }) => (
        <g key={y}>
          <circle cx={198} cy={y} r={3} fill={color}/>
          <text x={205} y={y+4} fill="var(--text-primary)" fontSize="7">{label}</text>
        </g>
      ))}
      <text x="245" y="113" textAnchor="middle" fill="var(--text-secondary)" fontSize="6.5">A anchors por célula</text>

      {/* Arrow */}
      <line x1="318" y1="70" x2="345" y2="70" stroke="#f97316" strokeWidth="1.5"/>
      <polygon points="345,66 353,70 345,74" fill="#f97316"/>

      {/* NMS */}
      <rect x="355" y="30" width="115" height="80" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="412" y="48" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">NMS</text>
      <text x="412" y="60" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">1. Ordenar por score</text>
      <text x="412" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">2. Manter a melhor box</text>
      <text x="412" y="84" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">3. Suprimir boxes com</text>
      <text x="412" y="95" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">IoU &gt; threshold (0.5)</text>
      <text x="412" y="106" textAnchor="middle" fill="#f97316" fontSize="7.5" fontWeight="700">→ detecções finais</text>
    </svg>
  </div>
);

const AnchorFreeDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Anchor-Based vs. Anchor-Free</p>
    <svg viewBox="0 0 480 175" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Anchor-based panel */}
      <rect x={10} y={15} width={210} height={150} rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1"/>
      <text x="115" y="30" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Anchor-Based (Faster R-CNN, YOLOv3)</text>
      {/* object box */}
      <rect x={70} y={55} width={90} height={75} rx="2" fill="none" stroke="#f97316" strokeWidth="1.5"/>
      <text x={115} y={50} textAnchor="middle" fill="#f97316" fontSize="7">objecto real</text>
      {/* multiple anchors at center cell */}
      {[
        { x: 95, y: 75, w: 30, h: 30, c: '#f97316' },
        { x: 85, y: 65, w: 50, h: 50, c: '#f97316' },
        { x: 100, y: 80, w: 22, h: 44, c: '#f97316' },
      ].map((a, i) => (
        <rect key={i} x={a.x} y={a.y} width={a.w} height={a.h} rx="1" fill="none" stroke={a.c} strokeWidth="1" strokeDasharray="2,1"/>
      ))}
      <circle cx={115} cy={92} r={2} fill="var(--text-primary)"/>
      <text x="115" y="148" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">Várias anchors candidatas/célula</text>
      <text x="115" y="158" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">→ regride Δ relativo à melhor anchor</text>

      {/* Anchor-free panel */}
      <rect x={260} y={15} width={210} height={150} rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1"/>
      <text x="365" y="30" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Anchor-Free (FCOS, CenterNet)</text>
      <rect x={320} y={55} width={90} height={75} rx="2" fill="none" stroke="#f97316" strokeWidth="1.5"/>
      {/* center point */}
      <circle cx={365} cy={92} r={3} fill="#f97316"/>
      <text x={365} y="50" textAnchor="middle" fill="#f97316" fontSize="7">objecto real</text>
      {/* distances l,t,r,b */}
      <line x1="365" y1="92" x2="320" y2="92" stroke="#f97316" strokeWidth="1" strokeDasharray="2,1"/>
      <line x1="365" y1="92" x2="410" y2="92" stroke="#f97316" strokeWidth="1" strokeDasharray="2,1"/>
      <line x1="365" y1="92" x2="365" y2="55" stroke="#f97316" strokeWidth="1" strokeDasharray="2,1"/>
      <line x1="365" y1="92" x2="365" y2="130" stroke="#f97316" strokeWidth="1" strokeDasharray="2,1"/>
      <text x="340" y="88" textAnchor="middle" fill="#f97316" fontSize="6.5">l</text>
      <text x="390" y="88" textAnchor="middle" fill="#f97316" fontSize="6.5">r</text>
      <text x="370" y="68" textAnchor="middle" fill="#f97316" fontSize="6.5">t</text>
      <text x="370" y="115" textAnchor="middle" fill="#f97316" fontSize="6.5">b</text>
      <text x="365" y="148" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">Cada ponto prediz directamente</text>
      <text x="365" y="158" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">(l,t,r,b) + classe + "centerness"</text>
    </svg>
  </div>
);

const FPNDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Feature Pyramid Network — Top-Down Pathway + Lateral Connections</p>
    <svg viewBox="0 0 460 230" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="fpnArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
        <marker id="fpnArrowD" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      {/* Bottom-up pathway (backbone) - left column, decreasing size going up */}
      <text x="60" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Bottom-up (backbone)</text>
      {[
        { y: 170, w: 90, h: 30, label: 'C2 (1/4) — alta res.' },
        { y: 125, w: 70, h: 26, label: 'C3 (1/8)' },
        { y: 82, w: 50, h: 22, label: 'C4 (1/16)' },
        { y: 42, w: 32, h: 18, label: 'C5 (1/32) — baixa res.' },
      ].map((b, i) => (
        <g key={i}>
          <rect x={60 - b.w/2} y={b.y} width={b.w} height={b.h} rx="3" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2"/>
          <text x={60} y={b.y + b.h/2 + 3} textAnchor="middle" fill="#f97316" fontSize="7" fontWeight="700">{b.label.split(' ')[0]}</text>
        </g>
      ))}
      {/* arrows up the backbone — between boxes, not inside them */}
      {[[168,153],[123,106],[80,62]].map(([y1,y2], i) => (
        <line key={i} x1="60" y1={y1} x2="60" y2={y2} stroke="#f97316" strokeWidth="1.2" markerEnd="url(#fpnArrow)"/>
      ))}

      {/* Top-down pathway - right column */}
      <text x="340" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Top-down + lateral (FPN)</text>
      {[
        { y: 170, w: 90, h: 30, label: 'P2' },
        { y: 125, w: 70, h: 26, label: 'P3' },
        { y: 82, w: 50, h: 22, label: 'P4' },
        { y: 42, w: 32, h: 18, label: 'P5' },
      ].map((b, i) => (
        <g key={i}>
          <rect x={340 - b.w/2} y={b.y} width={b.w} height={b.h} rx="3" fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="1.5"/>
          <text x={340} y={b.y + b.h/2 + 3} textAnchor="middle" fill="#f97316" fontSize="7" fontWeight="700">{b.label}</text>
        </g>
      ))}
      {/* arrows down top-down (upsample) — strictly between P boxes */}
      {[[62,80],[106,123],[153,168]].map(([y1,y2], i) => (
        <line key={i} x1="340" y1={y1} x2="340" y2={y2} stroke="#f97316" strokeWidth="1.2" markerEnd="url(#fpnArrow)"/>
      ))}
      <text x="390" y="100" fill="var(--text-secondary)" fontSize="6.5" textAnchor="middle">2x upsample</text>

      {/* lateral connections (1x1 conv) C->P at same scale */}
      {[
        [60, 51, 315, 51],
        [60, 93, 315, 93],
        [60, 138, 315, 138],
        [60, 185, 315, 185],
      ].map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1+18} y1={y1} x2={x2-15} y2={y2} stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#fpnArrowD)"/>
      ))}
      <text x="200" y="220" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">conexões laterais (1×1 conv) — soma elemento-a-elemento</text>

      {/* heads on each Pi */}
      {[42,82,125,170].map((y,i) => (
        <text key={i} x="430" y={y+(i===0?9:i===1?11:i===2?13:15)} textAnchor="middle" fill="#f97316" fontSize="6.5">→ head</text>
      ))}
    </svg>
  </div>
);

const LossDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>IoU vs. GIoU — o problema das boxes não sobrepostas</p>
    <svg viewBox="0 0 460 150" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Case A: overlapping */}
      <text x="115" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Caso A: boxes sobrepostas</text>
      <rect x="40" y="30" width="90" height="70" rx="2" fill="none" stroke="#f97316" strokeWidth="1.5"/>
      <rect x="75" y="55" width="90" height="70" rx="2" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3,2"/>
      <text x="115" y="138" textAnchor="middle" fill="var(--text-primary)" fontSize="7.5">IoU &gt; 0 → gradiente útil</text>

      {/* Case B: disjoint */}
      <text x="345" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Caso B: boxes disjuntas</text>
      <rect x="270" y="30" width="60" height="60" rx="2" fill="none" stroke="#f97316" strokeWidth="1.5"/>
      <rect x="370" y="65" width="60" height="60" rx="2" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3,2"/>
      {/* enclosing box for GIoU */}
      <rect x="270" y="30" width="160" height="95" rx="2" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="1,2"/>
      <text x="345" y="138" textAnchor="middle" fill="var(--text-primary)" fontSize="7.5">IoU = 0 → sem gradiente</text>
      <text x="345" y="148" textAnchor="middle" fill="#f97316" fontSize="7.5">GIoU usa a "enclosing box" (roxo) → ainda dá gradiente</text>
    </svg>
  </div>
);

const TrackingDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Tracking-by-Detection — pipeline frame a frame</p>
    <svg viewBox="0 0 540 150" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="trkArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
      </defs>
      {/* Frame t */}
      <rect x="10" y="15" width="120" height="110" rx="6" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1"/>
      <text x="70" y="10" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Frame t</text>
      <rect x="25" y="30" width="40" height="50" rx="2" fill="none" stroke="#f97316" strokeWidth="1.5"/>
      <text x="45" y="27" textAnchor="middle" fill="#f97316" fontSize="6.5">ID 1</text>
      <rect x="75" y="55" width="35" height="55" rx="2" fill="none" stroke="#f97316" strokeWidth="1.5"/>
      <text x="92" y="52" textAnchor="middle" fill="#f97316" fontSize="6.5">ID 2</text>

      {/* Arrow + detector */}
      <line x1="135" y1="70" x2="158" y2="70" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#trkArrow)"/>
      <text x="147" y="63" textAnchor="middle" fill="var(--text-secondary)" fontSize="6.5">detector</text>

      {/* Frame t+1 raw detections (no IDs) */}
      <rect x="163" y="15" width="120" height="110" rx="6" fill="rgba(249,115,22,0.04)" stroke="var(--text-secondary)" strokeWidth="1"/>
      <text x="223" y="10" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Frame t+1 (detecções)</text>
      <rect x="180" y="35" width="40" height="50" rx="2" fill="none" stroke="#9ca3af" strokeWidth="1.5"/>
      <text x="200" y="32" textAnchor="middle" fill="#9ca3af" fontSize="6.5">?</text>
      <rect x="230" y="58" width="35" height="55" rx="2" fill="none" stroke="#9ca3af" strokeWidth="1.5"/>
      <text x="247" y="55" textAnchor="middle" fill="#9ca3af" fontSize="6.5">?</text>

      {/* Arrow + association — wider gap for label */}
      <line x1="288" y1="70" x2="358" y2="70" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#trkArrow)"/>
      <text x="323" y="58" textAnchor="middle" fill="var(--text-secondary)" fontSize="6.5">associação</text>
      <text x="323" y="82" textAnchor="middle" fill="var(--text-secondary)" fontSize="6.5">(IoU / Kalman / aparência)</text>

      {/* Frame t+1 with IDs assigned */}
      <rect x="363" y="15" width="165" height="110" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1"/>
      <text x="445" y="10" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Frame t+1 (tracks)</text>
      <rect x="380" y="35" width="40" height="50" rx="2" fill="none" stroke="#f97316" strokeWidth="1.5"/>
      <text x="400" y="32" textAnchor="middle" fill="#f97316" fontSize="6.5">ID 1</text>
      <rect x="435" y="58" width="35" height="55" rx="2" fill="none" stroke="#f97316" strokeWidth="1.5"/>
      <text x="452" y="55" textAnchor="middle" fill="#f97316" fontSize="6.5">ID 2</text>
      <text x="445" y="132" textAnchor="middle" fill="#f97316" fontSize="6.5" fontWeight="700">identidades preservadas</text>
    </svg>
  </div>
);

export default function CV9() {
  const [sel, setSel] = useState(0);
  const [afSel, setAfSel] = useState(0);
  const [trkSel, setTrkSel] = useState(0);

  const detectors = [
    {
      name: 'Faster R-CNN', stage: '2-stage', color: '#f97316',
      year: '2015',
      how: 'Stage 1: Region Proposal Network (RPN) — uma CNN propõe regiões onde pode haver objectos (Region of Interest, RoI), usando anchors numa única feature map. Stage 2: RoI Pooling/RoIAlign extrai um vector de tamanho fixo por proposta, seguido de classificação e refinamento das bounding boxes.',
      speed: '~5 FPS (VGG backbone)',
      map: '73.2% mAP PASCAL VOC 2007',
      pros: 'Alta accuracy. Pipeline end-to-end (RPN e detector partilham backbone, treino conjunto). Muito usado em aplicações onde accuracy > speed (ex: imagiologia médica, inspecção industrial).',
      cons: 'Lento para real-time — duas passagens pela rede (RPN + head). 2 stages = mais complexidade de implementação e mais hiperparâmetros. RoI Pooling introduz quantização espacial (Mask R-CNN usa RoIAlign com interpolação bilinear para resolver).',
    },
    {
      name: 'YOLO v1-v3', stage: '1-stage', color: '#f97316',
      year: '2016-2018',
      how: 'Divide a imagem em grid S×S. Cada célula prediz B bounding boxes (cada uma com offsets + objectness) e K probabilidades de classe — tudo num único forward pass, sem proposals. YOLOv3 introduz multi-scale predictions: três feature maps de resoluções diferentes (com uma estrutura semelhante a uma FPN) detectam objectos pequenos, médios e grandes.',
      speed: 'v1: 45 FPS, v3: ~30 FPS',
      map: 'v3: 55.3% mAP COCO (menor que Faster R-CNN mas muito mais rápido)',
      pros: 'Muito rápido — adequado para real-time em vídeo. Boa generalização (vê a imagem inteira durante o treino, não janelas isoladas). Arquitectura simples de implementar e treinar.',
      cons: 'Dificuldade com objectos pequenos e muito próximos (uma célula só pode "ser responsável" por um número limitado de objectos). Accuracy inferior à dos 2-stage detectors em datasets exigentes como COCO.',
    },
    {
      name: 'YOLOv5-v9 / YOLO NAS', stage: '1-stage', color: '#f97316',
      year: '2020-2024',
      how: 'Sucessores modernos do YOLO com melhorias incrementais: CSP (Cross Stage Partial) backbone para reduzir custo computacional (YOLOv5), detecção anchor-free com decoupled head (classificação e regressão em ramos separados, YOLOv6+), task-aligned learning para alinhar a métrica de classificação com a qualidade da localização (YOLOv8), e reparametrização estrutural (YOLOv9 com PGI/GELAN). YOLO NAS usa Neural Architecture Search para encontrar a arquitectura óptima automaticamente.',
      speed: 'YOLOv8: 80-160+ FPS em GPU',
      map: 'YOLOv9: 55.6% mAP COCO — paridade com Faster R-CNN ao mesmo speed de um detector 1-stage',
      pros: 'Estado da arte em speed/accuracy tradeoff. Muito bem suportado (ecossistema Ultralytics — treino, export, deployment integrados). Fácil de fine-tunar em datasets custom com poucos exemplos.',
      cons: 'Multiplicidade de versões confusa para quem está a começar. Nem todas as "versões" são do mesmo grupo de investigação — YOLOv5/v8/v11 são da Ultralytics, YOLOv6 da Meituan, YOLOv7/v9 de outro grupo académico — comparações directas nem sempre são justas.',
    },
    {
      name: 'DETR', stage: 'Transformer', color: '#f97316',
      year: '2020',
      how: 'Detection Transformer. Um backbone CNN extrai features, um encoder transformer processa a sequência de tokens espaciais (com positional encodings), e um decoder transformer com N "object queries" aprendidas produz directamente N detecções (box + classe) em paralelo. O treino usa bipartite matching (algoritmo húngaro) para associar cada predição a um ground truth (ou a "no object") — sem anchors, sem NMS.',
      speed: '~10-28 FPS',
      map: '42.0% mAP COCO (AP equivalente ao Faster R-CNN)',
      pros: 'Arquitectura elegante e simples — sem anchors, sem NMS, sem FPN manual (embora variantes a usem). Verdadeiramente fim-a-fim: o set de detecções é o output directo da rede.',
      cons: 'Treino muito lento para convergir (500 épocas vs ~12 de Faster R-CNN) devido à dificuldade do matching húngaro em estabilizar. Dificuldade inicial com objectos pequenos. Deformable DETR (atenção esparsa/deformável) resolve grande parte destas limitações e acelera a convergência.',
    },
  ];
  const d = detectors[sel];

  const anchorFree = [
    {
      name: 'FCOS', color: '#f97316',
      desc: 'Fully Convolutional One-Stage Object Detection. Para cada pixel (i,j) do feature map que cai dentro de um objecto, a rede prediz directamente 4 distâncias (l, t, r, b) — esquerda, topo, direita, baixo — até aos limites da bounding box, mais a classe. Um ramo extra de "centerness" prediz o quão perto o ponto está do centro do objecto, e é usado para reduzir o score de detecções de baixa qualidade longe do centro (substituindo parte do papel do objectness).',
      pros: 'Sem hiperparâmetros de anchors (escalas, ratios, número por célula) — menos tuning. Mais simples de adaptar a novas categorias com formas pouco comuns. Centerness ajuda a suprimir falsos positivos sem NMS agressivo.',
    },
    {
      name: 'CenterNet', color: '#f97316',
      desc: 'Modela um objecto como um único ponto: o centro da sua bounding box. A rede produz um heatmap de keypoints (um pico de probabilidade no centro de cada objecto, por classe) e, para cada pico detectado, regride directamente a largura e altura da box a partir desse ponto, mais um pequeno offset para corrigir a perda de resolução do downsampling.',
      pros: 'Elimina completamente NMS na sua forma mais simples — picos do heatmap já são esparsos. Extensível trivialmente a outras tarefas (pose estimation = keypoints do corpo, 3D detection = profundidade extra por ponto).',
    },
  ];
  const af = anchorFree[afSel];

  const trackers = [
    {
      name: 'SORT', color: '#f97316',
      desc: 'Simple Online and Realtime Tracking. Usa um filtro de Kalman para prever a posição de cada track no frame seguinte, e associa as novas detecções aos tracks previstos via IoU + algoritmo húngaro. Extremamente rápido (centenas de FPS), mas baseia-se apenas em movimento — perde a identidade facilmente em oclusões.',
    },
    {
      name: 'DeepSORT', color: '#f97316',
      desc: 'Extensão do SORT que adiciona um embedding de aparência (uma rede treinada para re-identificação, "re-ID") a cada detecção. A associação combina distância de Kalman/IoU com similaridade de aparência — muito mais robusto a oclusões curtas e cruzamentos de trajectórias.',
    },
    {
      name: 'ByteTrack', color: '#f97316',
      desc: 'Observa que muitas detecções com score baixo são na verdade objectos parcialmente ocluídos, não falsos positivos. Em vez de as descartar, associa primeiro as detecções de score alto, e depois tenta associar as de score baixo aos tracks ainda não correspondidos — recupera muitas trajectórias que outros métodos perderiam.',
    },
  ];
  const trk = trackers[trkSel];

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cv" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>MÓDULO 9</div>
        <h1 style={S.h1}>Detecção de Objectos</h1>
        <p style={S.lead}>A classificação diz "o que está na imagem". A detecção diz "o que está e onde está" — produz bounding boxes com classes e confidence scores. É uma task muito mais difícil que requer anchor boxes (ou alternativas anchor-free), non-maximum suppression, pirâmides de features multi-escala, funções de loss especializadas e métricas como mAP. Quando estendemos a detecção ao longo do tempo, chegamos ao tracking de múltiplos objectos.</p>

        {/* === SECTION 1 === */}
        <div style={S.section}>
          <h2 style={S.h2}>1. Formulação do Problema</h2>
          <p style={S.p}>Dada uma imagem, o objectivo é produzir um conjunto de tuplos (classe, x_min, y_min, x_max, y_max, confidence) — um por objecto detectado. O número de objectos na imagem é variável e desconhecido à priori, o que torna o problema fundamentalmente diferente da classificação: o output não tem um tamanho fixo.</p>
          <p style={S.p}>A abordagem dominante (durante anos) foi a de anchor boxes: colocar uma grelha sobre a imagem e, em cada ponto da grelha, pré-definir caixas de referência (anchors) de diferentes escalas e proporções (aspect ratios). A rede aprende a ajustar estas anchors para coincidir com os objectos reais — regredindo offsets (Δx, Δy, Δw, Δh) relativamente à anchor mais próxima do ground truth, em vez de prever coordenadas absolutas do zero.</p>

          <AnchorDiagram />

          <p style={S.p}>Porquê regredir offsets e não coordenadas absolutas? Porque os offsets têm uma escala muito menor e mais consistente (tipicamente próximos de zero), o que facilita a optimização — é o mesmo princípio das "skip connections": aprender a diferença/correcção é mais fácil do que aprender a quantidade total.</p>
          <p style={S.p}>A métrica padrão é mAP (mean Average Precision). Para cada classe, calcula-se a AP (área sob a curva Precision-Recall, obtida variando o threshold de confidence). A mAP é a média das APs sobre todas as classes. PASCAL VOC usa um único threshold de IoU = 0.5 para considerar uma detecção "correcta"; COCO usa mAP@[0.5:0.95] — média de mAP para IoU thresholds de 0.5 a 0.95 em passos de 0.05 — uma métrica muito mais rigorosa que penaliza boxes mal alinhadas mesmo que a classe esteja correcta.</p>

          <div style={S.note}>Um detector pode ter classificação perfeita mas mAP baixa se as bounding boxes estiverem sistematicamente mal posicionadas — a localização conta tanto como a classificação.</div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 2 === */}
        <div style={S.section}>
          <h2 style={S.h2}>2. Principais Detectores</h2>
          <p style={S.p}>Os detectores modernos dividem-se essencialmente em três famílias: 2-stage (proposta + refinamento), 1-stage densos (grid + regressão directa), e baseados em transformers (set prediction). Explora abaixo as características de cada um.</p>
          <div style={S.diagram}>
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              {detectors.map((de, i) => (
                <button key={i} onClick={() => setSel(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: sel === i ? de.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? de.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>
                  {de.name} <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>({de.stage})</span>
                </button>
              ))}
            </div>
            <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${d.color}30` }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.82rem' }}>
                {[['Paradigma', d.stage], ['Speed', d.speed], ['mAP', d.map]].map(([k, v]) => (
                  <div key={k} style={{ background: 'var(--bg-secondary)', borderRadius: 6, padding: '0.5rem 0.75rem' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>{k}</div>
                    <div style={{ fontWeight: 600, color: d.color, fontSize: '0.8rem' }}>{v}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.87rem', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '0.75rem' }}><strong style={{ color: d.color }}>Como funciona:</strong> {d.how}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.85rem' }}>
                <div><strong style={{ color: '#f97316' }}>Vantagens:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>{d.pros}</p></div>
                <div><strong style={{ color: '#f97316' }}>Limitações:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>{d.cons}</p></div>
              </div>
            </div>
          </div>

          <h3 style={S.h3}>Resumo comparativo</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Família</th><th style={S.th}>Filosofia</th><th style={S.th}>Quando usar</th></tr></thead>
              <tbody>
                {[
                  ['2-stage (Faster R-CNN, Mask R-CNN)', 'Propor regiões candidatas, depois classificar/refinar cada uma.', 'Accuracy é prioritária; latência não é crítica (análise offline, imagiologia médica).'],
                  ['1-stage denso (YOLO, RetinaNet, SSD)', 'Prever directamente em cada célula da grid, num único pass.', 'Real-time em vídeo, edge devices, robótica.'],
                  ['Transformer / set prediction (DETR e variantes)', 'Tratar a detecção como previsão de um conjunto fixo de objectos via atenção.', 'Quando se quer evitar heurísticas manuais (anchors, NMS) e há orçamento de treino.'],
                ].map(([f, p, w]) => (
                  <tr key={f}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{f}</td><td style={S.td}>{p}</td><td style={S.td}>{w}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 3 === */}
        <div style={S.section}>
          <h2 style={S.h2}>3. Detectores Anchor-Free</h2>
          <p style={S.p}>As anchors trazem um problema incómodo: são hiperparâmetros de design escolhidos manualmente (tipicamente via k-means sobre as boxes do dataset de treino). Diferentes datasets — objectos muito alongados (texto), muito pequenos (drones), ou de proporções pouco comuns — exigem retuning das anchors. Além disso, cada célula tem de avaliar todas as anchors, a maioria das quais corresponde a "background", criando um desbalanceamento extremo entre exemplos positivos e negativos.</p>
          <p style={S.p}>Os detectores <strong>anchor-free</strong> eliminam esta camada de design: em vez de "ajustar uma caixa pré-definida", cada localização do feature map prediz directamente as propriedades geométricas do objecto (distâncias aos limites, ou um ponto-chave + dimensões). Isto simplifica o pipeline e generaliza melhor a formas de objectos atípicas.</p>

          <AnchorFreeDiagram />

          <div style={S.diagram}>
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              {anchorFree.map((a, i) => (
                <button key={i} onClick={() => setAfSel(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: afSel === i ? a.color : 'var(--bg-primary)', color: afSel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${afSel === i ? a.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>
                  {a.name}
                </button>
              ))}
            </div>
            <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${af.color}30` }}>
              <p style={{ fontSize: '0.87rem', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>{af.desc}</p>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.6 }}><strong style={{ color: '#f97316' }}>Vantagens:</strong> {af.pros}</p>
            </div>
          </div>

          <div style={S.note}>YOLOv6, YOLOv8 e YOLOv9 abandonaram as anchors em favor de uma cabeça anchor-free inspirada em FCOS/CenterNet — uma indicação de que a comunidade considera o trade-off favorável: simplicidade e generalização superam o ganho marginal de accuracy de anchors bem afinadas.</div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 4 === */}
        <div style={S.section}>
          <h2 style={S.h2}>4. Feature Pyramid Networks (FPN) em Detalhe</h2>
          <p style={S.p}>Um problema central da detecção é a escala: a mesma imagem pode conter um peão a 2 metros (ocupando metade do frame) e um sinal de trânsito ao longe (poucos pixels). Um único feature map de uma CNN não serve bem ambos — camadas profundas (baixa resolução espacial) têm semântica forte mas perdem detalhe de objectos pequenos; camadas iniciais (alta resolução) têm detalhe mas semântica fraca.</p>
          <p style={S.p}>A FPN resolve isto combinando informação de múltiplas resoluções. Tem duas pathways:</p>
          <ul style={{ paddingLeft: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
            <li><strong>Bottom-up (o backbone normal)</strong>: à medida que a imagem atravessa a CNN, a resolução espacial diminui (C2→C3→C4→C5) e a riqueza semântica aumenta.</li>
            <li><strong>Top-down + lateral connections</strong>: começando no mapa mais profundo (C5/P5), faz-se upsampling (×2) e soma-se elemento-a-elemento com o mapa correspondente do bottom-up (após uma convolução 1×1 para igualar o número de canais — a "lateral connection"). Isto produz P4, depois P3, depois P2 — cada um combinando a semântica forte vinda de cima com o detalhe espacial vindo do lateral.</li>
          </ul>

          <FPNDiagram />

          <p style={S.p}>O resultado é uma pirâmide P2-P5 onde <em>todos</em> os níveis têm semântica rica, mas resoluções diferentes. Um detector com FPN coloca uma cabeça de predição (classificação + regressão) em cada nível Pi, e atribui cada objecto de ground truth ao nível cuja resolução é mais apropriada ao seu tamanho — objectos pequenos vão para P2 (alta resolução), objectos grandes para P5 (baixa resolução, mas campo receptivo grande).</p>

          <div style={S.note}>A FPN custa relativamente pouco computacionalmente (apenas convoluções 1×1 e upsampling) mas traz ganhos muito significativos em mAP para objectos pequenos — por isso tornou-se praticamente universal: está em RetinaNet, Faster R-CNN moderno, YOLOv3+, FCOS, e até nos encoders de DETR-like models (ex: Deformable DETR usa multi-scale features).</div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 5 === */}
        <div style={S.section}>
          <h2 style={S.h2}>5. Funções de Loss para Detecção</h2>
          <p style={S.p}>A loss total de um detector é sempre uma soma de (pelo menos) duas componentes: uma loss de <strong>classificação</strong> (que classe está em cada localização/anchor) e uma loss de <strong>localização</strong> (quão bem a box predita coincide com o ground truth). O desenho cuidadoso de ambas é crucial para a convergência.</p>

          <h3 style={S.h3}>5.1 Classificação: o problema do desbalanceamento e a Focal Loss</h3>
          <p style={S.p}>Em detectores 1-stage densos, cada imagem gera dezenas de milhares de candidatos (anchors ou pontos), mas tipicamente apenas dezenas correspondem a objectos reais. A esmagadora maioria são "background" fácil. Com cross-entropy padrão, estes exemplos fáceis — apesar de individualmente terem loss baixa — dominam o gradiente total simplesmente pela sua quantidade, afogando o sinal de aprendizagem dos exemplos positivos raros.</p>
          <p style={S.p}>A <strong>Focal Loss</strong> (usada na RetinaNet) resolve isto adicionando um factor de modulação (1-p_t)^γ à cross-entropy, que reduz drasticamente a contribuição de exemplos bem classificados (p_t alto) e mantém a contribuição de exemplos difíceis (p_t baixo):</p>
          <div style={S.math}>FL(p_t) = −α (1 − p_t)^γ · log(p_t)&nbsp;&nbsp;&nbsp;&nbsp;(tipicamente γ = 2, α = 0.25)</div>
          <p style={S.p}>Quando p_t → 1 (exemplo fácil, bem classificado), (1-p_t)^γ → 0 e a sua contribuição para a loss desaparece quase totalmente. Quando p_t é baixo (exemplo difícil ou raro), o factor permanece próximo de 1, preservando o gradiente. Isto permite treinar 1-stage detectors directamente sobre todos os anchors, sem precisar de hard negative mining explícito.</p>

          <h3 style={S.h3}>5.2 Localização: de Smooth L1 a IoU-based losses</h3>
          <p style={S.p}>A forma mais simples de penalizar erro de localização é a distância L1 ou L2 entre os 4 valores (x, y, w, h ou l, t, r, b) preditos e o ground truth. A <strong>Smooth L1</strong> (usada em Faster R-CNN/Fast R-CNN) combina L2 perto de zero (gradiente suave, evita oscilação) com L1 para erros grandes (menos sensível a outliers que L2 puro).</p>
          <p style={S.p}>O problema: estas losses tratam (x,y,w,h) como 4 valores independentes — não há garantia de que minimizar a soma destes erros corresponda a maximizar o IoU, que é a métrica que realmente importa. Duas boxes com a mesma soma de erros L1 podem ter IoUs muito diferentes consoante a direcção do erro.</p>
          <p style={S.p}>As <strong>IoU-based losses</strong> optimizam directamente a sobreposição:</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Loss</th><th style={S.th}>Ideia</th><th style={S.th}>Limitação que resolve</th></tr></thead>
              <tbody>
                {[
                  ['IoU Loss', 'L = 1 − IoU(pred, gt). Optimiza directamente a métrica de avaliação.', 'Quando IoU = 0 (boxes disjuntas), o gradiente é zero/indefinido — não dá informação sobre a direcção a corrigir.'],
                  ['GIoU (Generalized IoU)', 'Subtrai a área da "enclosing box" (menor box que contém ambas) não coberta pela união: GIoU = IoU − (Área_C − União)/Área_C.', 'Continua a dar gradiente útil mesmo quando as boxes não se sobrepõem — a enclosing box "puxa" as boxes uma para a outra.'],
                  ['DIoU (Distance IoU)', 'Penaliza directamente a distância entre os centros das duas boxes, normalizada pela diagonal da enclosing box.', 'GIoU converge lentamente quando uma box está totalmente dentro da outra (caso degenerado); DIoU converge mais rápido ao focar no centro.'],
                  ['CIoU (Complete IoU)', 'Adiciona ao DIoU um termo que penaliza a diferença de aspect ratio (w/h) entre as boxes.', 'DIoU pode ignorar a forma — duas boxes com centros coincidentes mas formas muito diferentes têm DIoU loss baixa; CIoU corrige isto.'],
                ].map(([l, i, lim]) => (
                  <tr key={l}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{l}</td><td style={S.td}>{i}</td><td style={S.td}>{lim}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <LossDiagram />

          <p style={S.p}>Na prática, detectores modernos (YOLOv5+, FCOS) usam CIoU ou DIoU loss para regressão de boxes combinada com Focal Loss (ou variantes como Quality Focal Loss) para classificação, e os pesos relativos das duas componentes são hiperparâmetros importantes a afinar.</p>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 6 === */}
        <div style={S.section}>
          <h2 style={S.h2}>6. Tracking — Multi-Object Tracking (MOT)</h2>
          <p style={S.p}>Detectar objectos numa única imagem é apenas metade do problema em vídeo: também precisamos de saber que o "carro A" no frame 10 é o mesmo "carro A" no frame 11, mesmo que se tenha movido, mudado de tamanho aparente, ou ficado parcialmente ocluído. Isto chama-se <strong>Multi-Object Tracking (MOT)</strong>, e o paradigma dominante é o <strong>tracking-by-detection</strong>.</p>

          <TrackingDiagram />

          <p style={S.p}>O paradigma de tracking-by-detection separa o problema em dois passos independentes, executados a cada frame:</p>
          <ul style={{ paddingLeft: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
            <li><strong>1. Detecção</strong>: corre-se um detector de objectos (qualquer um dos vistos acima — YOLO é popular pela velocidade) em cada frame, obtendo um conjunto de bounding boxes sem identidade.</li>
            <li><strong>2. Associação (data association)</strong>: liga-se cada nova detecção a um track existente (ou cria-se um novo track, ou termina-se um track que desapareceu). A associação baseia-se tipicamente em: (a) <strong>movimento</strong> — prever onde o objecto deveria estar (filtro de Kalman) e medir IoU entre a previsão e as novas detecções; (b) <strong>aparência</strong> — comparar embeddings visuais (re-identificação) para distinguir objectos semelhantes que se cruzam.</li>
          </ul>

          <div style={S.diagram}>
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              {trackers.map((t, i) => (
                <button key={i} onClick={() => setTrkSel(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: trkSel === i ? t.color : 'var(--bg-primary)', color: trkSel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${trkSel === i ? t.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>
                  {t.name}
                </button>
              ))}
            </div>
            <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${trk.color}30` }}>
              <p style={{ fontSize: '0.87rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>{trk.desc}</p>
            </div>
          </div>

          <h3 style={S.h3}>Métricas de tracking</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Métrica</th><th style={S.th}>O que mede</th></tr></thead>
              <tbody>
                {[
                  ['MOTA (Multi-Object Tracking Accuracy)', 'Combina falsos positivos, falsos negativos e trocas de identidade (ID switches) numa única pontuação. Penaliza fortemente perdas de identidade.'],
                  ['IDF1', 'F1-score sobre identidades correctamente atribuídas ao longo de toda a trajectória — mede a consistência das identidades, não só a detecção frame-a-frame.'],
                  ['ID Switches', 'Número de vezes que a identidade atribuída a um objecto muda incorrectamente durante o seu tracking (ex: depois de uma oclusão).'],
                ].map(([m, desc]) => (
                  <tr key={m}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{m}</td><td style={S.td}>{desc}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Existe também o paradigma "joint detection and tracking" (ex: FairMOT, ByteTrack mais recente integra parte disto) onde a mesma rede produz detecções e embeddings de re-ID num único forward pass — mais eficiente que correr dois modelos separados, mas mais complexo de treinar.</div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 7 === */}
        <div style={S.section}>
          <h2 style={S.h2}>7. Datasets e Benchmarks de Detecção</h2>
          <p style={S.p}>O progresso em detecção foi impulsionado por datasets de referência cuidadosamente anotados, que servem tanto para treino como para comparação justa entre métodos.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Dataset</th><th style={S.th}>Escala</th><th style={S.th}>Características</th></tr></thead>
              <tbody>
                {[
                  ['PASCAL VOC', '~20k imagens, 20 classes', 'Pioneiro (2005-2012). Métrica mAP@0.5. Hoje considerado pequeno demais para treinar de raiz, mas ainda usado para benchmarks rápidos.'],
                  ['MS COCO', '~330k imagens, 80 classes, ~1.5M instâncias', 'Standard actual. Imagens "in context" (objectos em cenas naturais, muitas vezes pequenos e ocluídos). Métrica mAP@[0.5:0.95], com breakdowns por tamanho (AP_S, AP_M, AP_L) — penaliza fortemente quem ignora objectos pequenos.'],
                  ['Open Images', '~9M imagens, ~600 classes de detecção', 'Muito maior e mais diverso que COCO, mas anotações de qualidade mais variável (semi-automáticas em parte). Inclui hierarquia de classes e relações entre objectos.'],
                ].map(([n, scale, ch]) => (
                  <tr key={n}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{n}</td><td style={S.td}>{scale}</td><td style={S.td}>{ch}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Treinar um detector num dataset próprio</h3>
          <p style={S.p}>Adaptar um detector pré-treinado (transfer learning a partir de COCO) a um problema específico — por exemplo, detectar defeitos numa linha de produção, ou espécies de animais numa câmara de vida selvagem — exige cuidados práticos que vão além de "correr o treino":</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Consideração</th><th style={S.th}>Porquê importa</th></tr></thead>
              <tbody>
                {[
                  ['Formato das anotações', 'Cada framework espera um formato diferente: COCO JSON (bounding boxes em [x,y,w,h] absolutos + categorias num ficheiro central), Pascal VOC XML (um ficheiro por imagem), ou YOLO TXT (coordenadas normalizadas [0,1] por linha, um ficheiro por imagem). Conversão incorrecta entre formatos é uma fonte comum de bugs silenciosos.'],
                  ['Balanceamento de classes', 'Se uma classe tem 10x mais instâncias que outra, o detector tende a ignorar a classe rara. Estratégias: oversampling de imagens com classes raras, focal loss (já lida parcialmente com isto), ou ajustar pesos por classe na loss.'],
                  ['Tamanho mínimo dos objectos', 'Objectos com poucos pixels (ex: &lt;16×16) são extremamente difíceis de detectar após vários downsamplings do backbone. Pode ser necessário usar resoluções de input maiores, FPN com mais níveis (P2), ou tiling da imagem (cortar em patches de alta resolução).'],
                  ['Qualidade vs. quantidade de anotações', 'Bounding boxes inconsistentes (ex: anotadores diferentes incluem/excluem sombras, partes ocluídas) introduzem ruído na loss de localização. Vale a pena gastar tempo num guia de anotação claro e numa amostra de controlo de qualidade.'],
                  ['Augmentation específico do domínio', 'Mosaic e MixUp (usados no YOLO) ajudam com poucos dados, mas augmentations geométricos agressivos podem ser inapropriados para certos domínios (ex: rotação extrema em imagens médicas com orientação clinicamente significativa).'],
                  ['Split treino/validação/teste', 'Se o dataset tem vídeo (frames consecutivos muito semelhantes), um split aleatório por imagem causa data leakage — frames quase idênticos no treino e na validação. Deve-se separar por vídeo/sequência de origem.'],
                ].map(([c, desc]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{c}</td><td style={S.td}>{desc}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Regra prática: antes de treinar, visualiza uma amostra das anotações sobrepostas nas imagens. Erros de formato (ex: trocar x/y, ou usar [x,y,w,h] quando o framework espera [x_min,y_min,x_max,y_max]) são extremamente comuns e o modelo "treina" na mesma — só que aprende a tarefa errada, e os sintomas (mAP baixa, boxes desalinhadas) só aparecem depois de horas de treino.</div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 8 === */}
        <div style={S.section}>
          <h2 style={S.h2}>8. Conceitos Essenciais</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Conceito</th><th style={S.th}>Definição</th><th style={S.th}>Valor típico</th></tr></thead>
              <tbody>
                {[
                  ['IoU (Intersection over Union)', 'Área da intersecção / área da união entre box predita e ground truth. Mede o quão bem a box predita cobre o objecto real.', 'Threshold: 0.5 para "correcta"; COCO usa 0.5:0.95'],
                  ['NMS (Non-Maximum Suppression)', 'Eliminar detecções redundantes: ordenar por score, manter a melhor, suprimir as que têm IoU &gt; threshold com a mantida.', 'IoU threshold: 0.5 para NMS'],
                  ['mAP (mean Average Precision)', 'Média da AP (área sob Precision-Recall curve) sobre todas as classes. Métrica padrão para comparar detectores.', 'PASCAL VOC: mAP@0.5; COCO: mAP@[0.5:0.95]'],
                  ['Anchor boxes', 'Boxes de referência de escalas/ratios predefinidas colocadas em cada ponto da grid. A rede regride offsets relativamente a estas anchors.', 'YOLOv3: 9 anchors (3 escalas × 3 ratios) determinadas por k-means no dataset'],
                  ['FPN (Feature Pyramid Network)', 'Combina features de múltiplas escalas do backbone (top-down + lateral connections) para detectar objectos de diferentes tamanhos.', 'Padrão em Faster R-CNN, YOLOv3+, FCOS, DETR'],
                  ['Focal Loss', 'Modula a cross-entropy para reduzir o peso de exemplos fáceis (background), resolvendo o desbalanceamento extremo em 1-stage detectors.', 'γ = 2, α = 0.25 (RetinaNet)'],
                  ['GIoU / DIoU / CIoU', 'Variantes da loss de IoU que continuam a dar gradiente útil quando as boxes não se sobrepõem (GIoU), e que penalizam distância de centros (DIoU) e aspect ratio (CIoU).', 'Standard em YOLOv5+, FCOS'],
                  ['Centerness (FCOS)', 'Score auxiliar que mede a proximidade de um ponto ao centro do objecto, usado para suprimir predições de baixa qualidade longe do centro.', 'Multiplicado pelo classification score antes do NMS'],
                  ['Tracking-by-detection', 'Paradigma de MOT: detectar em cada frame independentemente, depois associar identidades entre frames via movimento e/ou aparência.', 'SORT (Kalman+IoU), DeepSORT (+re-ID), ByteTrack (+low-score boxes)'],
                ].map(([c, d, v]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{c}</td><td style={S.td}>{d}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>9. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
            <li>Detecção = classificação + localização. Output: (classe, box, confidence) por objecto, em número variável.</li>
            <li>Anchor-based: pré-definir caixas de referência em cada célula da grid. Rede aprende offsets relativamente às anchors. NMS elimina redundâncias.</li>
            <li>2-stage (Faster R-CNN): mais preciso mas lento. 1-stage (YOLO): mais rápido, real-time. DETR: sem anchors/NMS, treino mais lento.</li>
            <li>Anchor-free (FCOS, CenterNet): cada ponto prediz directamente distâncias aos limites (FCOS) ou é um keypoint central com regressão de tamanho (CenterNet) — elimina o hiperparâmetro de design das anchors.</li>
            <li>FPN combina features de múltiplas resoluções (top-down + lateral connections) — essencial para detectar objectos pequenos e grandes na mesma imagem.</li>
            <li>Loss = classificação (Focal Loss para desbalanceamento background/foreground) + localização (Smooth L1 ou IoU-based: GIoU/DIoU/CIoU, que dão gradiente útil mesmo sem sobreposição).</li>
            <li>Tracking-by-detection: detectar em cada frame + associar identidades via IoU/Kalman (SORT) e/ou aparência (DeepSORT, ByteTrack).</li>
            <li>COCO (80 classes, mAP@[0.5:0.95]) é o benchmark de referência. Em datasets próprios: cuidado com formato de anotações, balanceamento de classes, objectos pequenos e data leakage no split.</li>
          </ul>
          </div>
        </div>
        </div>
      </div>
      );
}
