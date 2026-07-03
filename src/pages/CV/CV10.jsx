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
  math: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1rem 1.25rem', margin: '1rem 0', textAlign: 'center', fontFamily: 'monospace', fontSize: '0.95rem', color: '#f97316', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: '3px solid #f97316', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const UNetDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>U-Net — Encoder-Decoder com Skip Connections</p>
    <svg viewBox="0 0 520 145" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr10" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316"/></marker>
        <marker id="arr10s" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316"/></marker>
      </defs>

      {/* Encoder (left) — boxes shrink going down, left-aligned */}
      <text x="55" y="10" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5" fontWeight="700">Encoder (Backbone)</text>
      {[
        { x: 5,  y: 15,  w: 100, h: 24, label: '572×572×3 Input' },
        { x: 15, y: 47,  w: 80,  h: 22, label: '284×284×64' },
        { x: 25, y: 77,  w: 60,  h: 20, label: '142×142×128' },
        { x: 35, y: 105, w: 40,  h: 18, label: '71×71×256' },
      ].map(({ x, y, w, h, label }) => (
        <g key={y}>
          <rect x={x} y={y} width={w} height={h} rx="3" fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="1.5"/>
          <text x={x+w/2} y={y+h/2+3} textAnchor="middle" fill="#f97316" fontSize="6.5" fontWeight="600">{label}</text>
        </g>
      ))}
      {/* Down arrows encoder — in the gaps between boxes */}
      {[[39,45],[69,75],[97,103]].map(([y1,y2]) => (
        <line key={y1} x1={55} y1={y1} x2={55} y2={y2} stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr10)"/>
      ))}

      {/* Bottleneck */}
      <rect x={38} y={128} width={34} height={10} rx="2" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x={55} y={135} textAnchor="middle" fill="#f97316" fontSize="5.5" fontWeight="700">35×35×512</text>
      {/* Encoder to bottleneck */}
      <line x1={55} y1={123} x2={55} y2={126} stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr10)"/>

      {/* Decoder (right) — boxes grow going up, all centered at x=480 */}
      <text x="480" y="10" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5" fontWeight="700">Decoder (Upsampling)</text>
      {[
        { x: 460, y: 105, w: 40,  h: 18, label: '71×71×256' },
        { x: 450, y: 77,  w: 60,  h: 20, label: '142×142×128' },
        { x: 440, y: 47,  w: 80,  h: 22, label: '284×284×64' },
        { x: 447, y: 15,  w: 66,  h: 24, label: '572×572×K' },
      ].map(({ x, y, w, h, label }) => (
        <g key={y}>
          <rect x={x} y={y} width={w} height={h} rx="3" fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="1.5"/>
          <text x={x+w/2} y={y+h/2+3} textAnchor="middle" fill="#f97316" fontSize="6.5" fontWeight="600">{label}</text>
        </g>
      ))}
      {/* Up arrows decoder — in the gaps between boxes, centered at x=480 */}
      {[[103,100],[72,69],[45,39]].map(([y1,y2]) => (
        <line key={y1} x1={480} y1={y1} x2={480} y2={y2} stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr10)"/>
      ))}

      {/* Bottleneck → first decoder box */}
      <line x1={72} y1={133} x2={460} y2={133} stroke="#f97316" strokeWidth="1.2" strokeDasharray="3,2"/>
      <line x1={460} y1={133} x2={460} y2={125} stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr10)"/>

      {/* Skip connections (horizontal dashed) */}
      {[
        { y: 27,  lx: 105, rx: 447 },
        { y: 58,  lx: 95,  rx: 440 },
        { y: 87,  lx: 85,  rx: 450 },
        { y: 114, lx: 75,  rx: 460 },
      ].map(({ y, lx, rx }) => (
        <line key={y} x1={lx} y1={y} x2={rx} y2={y} stroke="#f97316" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arr10s)"/>
      ))}

      {/* Skip label */}
      <text x="262" y="53" textAnchor="middle" fill="#f97316" fontSize="7" fontWeight="700">skip connections</text>
      <text x="262" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="6.5">(concatenar features do encoder)</text>
    </svg>
  </div>
);

const IoUDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>IoU (Jaccard) — Intersecção sobre União</p>
    <svg viewBox="0 0 480 150" style={{ maxWidth: '100%', height: 'auto' }}>
      <circle cx="180" cy="70" r="55" fill="#f97316" opacity="0.25" stroke="#f97316" strokeWidth="2"/>
      <text x="120" y="30" fill="#f97316" fontSize="11" fontWeight="700">Ground Truth</text>
      <circle cx="250" cy="70" r="55" fill="#f97316" opacity="0.25" stroke="#f97316" strokeWidth="2"/>
      <text x="280" y="30" fill="#f97316" fontSize="11" fontWeight="700">Predição</text>
      <text x="215" y="74" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="800">∩</text>

      <text x="400" y="50" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="700">IoU =</text>
      <line x1="370" y1="62" x2="430" y2="62" stroke="var(--text-primary)" strokeWidth="1.2"/>
      <text x="400" y="58" textAnchor="middle" fill="var(--text-primary)" fontSize="10">Área(∩)</text>
      <text x="400" y="76" textAnchor="middle" fill="var(--text-primary)" fontSize="10">Área(∪)</text>

      <text x="240" y="140" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Quanto mais sobrepostos, mais próximo de IoU = 1.0 (predição perfeita)</text>
    </svg>
  </div>
);

const ASPPDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>ASPP — Atrous Spatial Pyramid Pooling</p>
    <svg viewBox="0 0 540 220" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrA" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316"/></marker>
      </defs>

      <rect x="10" y="80" width="70" height="60" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="45" y="105" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Feature</text>
      <text x="45" y="118" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Map</text>
      <text x="45" y="132" textAnchor="middle" fill="#f97316" fontSize="7.5">backbone</text>

      {[20, 65, 110, 155, 200].map((y, i) => (
        <line key={i} x1="80" y1="110" x2="150" y2={y+15} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="2,2"/>
      ))}

      {[
        { y: 5, label: '1×1 conv', sub: 'rate = 1', color: '#f97316' },
        { y: 50, label: '3×3 conv', sub: 'rate = 6', color: '#f97316' },
        { y: 95, label: '3×3 conv', sub: 'rate = 12', color: '#f97316' },
        { y: 140, label: '3×3 conv', sub: 'rate = 18', color: '#f97316' },
        { y: 185, label: 'Image Pooling', sub: 'global context', color: '#f97316' },
      ].map(({ y, label, sub, color }) => (
        <g key={y}>
          <rect x="155" y={y} width="100" height="30" rx="4" fill={`${color}20`} stroke={color} strokeWidth="1.5"/>
          <text x="205" y={y+13} textAnchor="middle" fill={color} fontSize="9" fontWeight="700">{label}</text>
          <text x="205" y={y+25} textAnchor="middle" fill={color} fontSize="7.5">{sub}</text>
          <line x1="255" y1={y+15} x2="320" y2="110" stroke={color} strokeWidth="1" strokeDasharray="2,2" markerEnd="url(#arrA)"/>
        </g>
      ))}

      <rect x="320" y="85" width="70" height="50" rx="4" fill="rgba(120,120,120,0.12)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <text x="355" y="106" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="700">Concat</text>
      <text x="355" y="120" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">5 branches</text>

      <line x1="390" y1="110" x2="430" y2="110" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrA)"/>
      <rect x="430" y="85" width="100" height="50" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="480" y="106" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">1×1 conv</text>
      <text x="480" y="120" textAnchor="middle" fill="#f97316" fontSize="7.5">fusão final</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Cada ramo "vê" o contexto a uma escala diferente sem reduzir a resolução espacial — depois concatenam-se e fundem-se todos os ramos numa única representação multi-escala.</p>
  </div>
);

const DilatedConvDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Convolução Dilatada (Atrous) — Campo Recetivo sem Perder Resolução</p>
    <svg viewBox="0 0 480 130" style={{ maxWidth: '100%', height: 'auto' }}>
      {[
        { cx: 90, rate: 1, color: '#f97316', label: 'rate = 1 (normal)' },
        { cx: 250, rate: 2, color: '#f97316', label: 'rate = 2' },
        { cx: 410, rate: 3, color: '#f97316', label: 'rate = 3' },
      ].map(({ cx, rate, color, label }) => {
        const grid = [];
        const span = 5;
        const cell = 14;
        const startX = cx - (span * cell) / 2;
        const startY = 15;
        for (let r = 0; r < span; r++) {
          for (let c = 0; c < span; c++) {
            const center = Math.floor(span / 2);
            const isKernel = (r - center) % rate === 0 && (c - center) % rate === 0 && Math.abs(r - center) <= rate && Math.abs(c - center) <= rate;
            grid.push(
              <rect key={`${r}-${c}`} x={startX + c * cell} y={startY + r * cell} width={cell - 2} height={cell - 2}
                fill={isKernel ? `${color}55` : 'var(--bg-primary)'} stroke={isKernel ? color : 'var(--card-border)'} strokeWidth={isKernel ? 1.5 : 0.7}/>
            );
          }
        }
        return (
          <g key={cx}>
            {grid}
            <text x={cx} y={startY + span * cell + 18} textAnchor="middle" fill={color} fontSize="10" fontWeight="700">{label}</text>
          </g>
        );
      })}
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Um kernel 3×3 com rate=2 cobre a mesma área que um kernel 5×5 normal, mas com apenas 9 pesos — aumenta o campo recetivo sem aumentar parâmetros nem reduzir resolução com pooling.</p>
  </div>
);

const DiffusionDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Modelo de Difusão — Forward (ruído) e Reverse (denoising)</p>
    <svg viewBox="0 0 540 150" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrD" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="var(--text-secondary)"/></marker>
        <marker id="arrDr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316"/></marker>
      </defs>

      {[0, 1, 2, 3, 4, 5].map(i => {
        const x = 30 + i * 90;
        const noise = i / 5;
        return (
          <g key={i}>
            <rect x={x} y="20" width="60" height="60" rx="6" fill={`rgba(249,115,22,0.10)`} stroke="#f97316" strokeWidth="1.2"/>
            {Array.from({ length: Math.round(noise * 25) }).map((_, di) => (
              <circle key={di} cx={x + 5 + (di * 37) % 50} cy={20 + 5 + (di * 53) % 50} r="1" fill="#f97316" opacity="0.6"/>
            ))}
            <text x={x + 30} y="95" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">{i === 0 ? 'x₀ (imagem)' : i === 5 ? 'x_T (ruído)' : `x${i}`}</text>
          </g>
        );
      })}

      <line x1="30" y1="10" x2="510" y2="10" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrD)"/>
      <text x="270" y="6" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">forward: adicionar ruído gaussiano gradualmente (fixo, sem aprendizagem)</text>

      <line x1="510" y1="115" x2="30" y2="115" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrDr)"/>
      <text x="270" y="130" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">reverse: rede neuronal aprende a remover ruído passo-a-passo (denoising)</text>
    </svg>
  </div>
);

const VideoDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>SAM 2 — Propagação de Prompts ao Longo do Tempo</p>
    <svg viewBox="0 0 540 150" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrV" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316"/></marker>
      </defs>
      {[0, 1, 2, 3, 4].map(i => {
        const x = 20 + i * 105;
        return (
          <g key={i}>
            <rect x={x} y="20" width="80" height="60" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2"/>
            <ellipse cx={x + 25 + i * 6} cy="50" rx="14" ry="14" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2"/>
            <text x={x + 40} y="95" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">frame {i + 1}</text>
            {i === 0 && (
              <>
                <circle cx={x + 25} cy="50" r="3" fill="#f97316"/>
                <text x={x + 40} y="14" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">prompt (clique)</text>
              </>
            )}
            {i < 4 && <line x1={x + 80} y1="50" x2={x + 105} y2="50" stroke="#f97316" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arrV)"/>}
          </g>
        );
      })}
      <text x="270" y="135" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Um único prompt no frame 1 é propagado pela "memory bank" — a máscara segue o objeto nos frames seguintes</text>
    </svg>
  </div>
);

export default function CV10() {
  const [sel, setSel] = useState(0);
  const [metricSel, setMetricSel] = useState(0);
  const models = [
    {
      name: 'U-Net', color: '#f97316', year: '2015',
      task: 'Segmentação semântica (especialmente médica)',
      what: 'Arquitectura encoder-decoder simétrica em forma de U. O encoder (contraction path) reduz a resolução e aumenta canais como num classificador. O decoder (expansion path) recupera a resolução original usando transposed convolutions (upsampling). As skip connections copiam features do encoder para o decoder.',
      key: 'As skip connections fornecem ao decoder informação de alta resolução (detalhe local) que se perderia no bottleneck — o decoder usa contexto global do bottleneck + detalhe local das skips. Permite segmentação precisa mesmo com poucos dados de treino.',
      output: 'Mapa de classes pixel-a-pixel: mesma resolução que o input, com K canais (K classes).',
    },
    {
      name: 'Mask R-CNN', color: '#f97316', year: '2017',
      task: 'Instance segmentation (máscara por instância)',
      what: 'Extensão do Faster R-CNN que, além da bounding box e classe, prevê uma máscara binária para cada instância detectada. Adiciona um terceiro "head" paralelo ao de classificação/regressão: para cada RoI, um FCN pequeno produz uma máscara de 28×28 pixels.',
      key: 'RoIAlign (em vez de RoI Pooling) elimina o misalignment causado pela quantização, dando masks muito mais precisas. A diferença para segmentação semântica: Mask R-CNN separa instâncias diferentes da mesma classe (2 pessoas = 2 máscaras diferentes).',
      output: 'Bounding box + classe + máscara binária 28×28 por instância detectada.',
    },
    {
      name: 'SAM', color: '#f97316', year: '2023',
      task: 'Segmentação zero-shot (qualquer coisa)',
      what: 'Segment Anything Model (Meta AI). Treinado em 11 milhões de imagens com 1 bilião de máscaras. Aceita prompts: pontos, bounding boxes, texto ou sem prompt (segmenta tudo). Backbone ViT grande, Prompt Encoder, e um Mask Decoder leve.',
      key: 'O primeiro modelo fundacional de segmentação. Generaliza para objectos nunca vistos sem fine-tuning. Pode ser usado como componente em pipelines mais complexos: detetor → SAM para obter máscaras de qualquer detecção.',
      output: 'Máscara binária (ou múltiplas alternativas com score) por prompt. SAM 2 (2024) estende para vídeo.',
    },
    {
      name: 'DINOv2', color: '#f97316', year: '2023',
      task: 'Features visuais universais (sem labels)',
      what: 'Pré-treino auto-supervisionado de ViTs com self-distillation. Treina um student e um teacher ViT; o student aprende a prever as activações do teacher em crops diferentes da mesma imagem. Sem labels — aprende representações puramente dos dados visuais.',
      key: 'As features do DINOv2 são excepcionalmente transferíveis: segmentação, estimativa de profundidade, correspondências, classificação — tudo com o mesmo backbone frozen. Visualizações de atenção mostram que o modelo aprende a segmentar objectos sem qualquer supervisão.',
      output: 'Features densas de alta qualidade. Attention maps que mostram o que o modelo "vê".',
    },
  ];
  const m = models[sel];

  const metrics = [
    {
      name: 'Pixel Accuracy', color: '#f97316',
      formula: 'Acc = (pixels corretos) / (total de pixels)',
      desc: 'A métrica mais simples: percentagem de pixels classificados corretamente, ignorando completamente a classe.',
      problem: 'Em datasets desbalanceados (ex: 95% "fundo", 5% "tumor"), um modelo que prevê sempre "fundo" obtém 95% de accuracy mas é completamente inútil. Por isso raramente é usada sozinha.',
    },
    {
      name: 'IoU / Jaccard', color: '#f97316',
      formula: 'IoU = |Pred ∩ GT| / |Pred ∪ GT|',
      desc: 'Razão entre a área de sobreposição (interseção) e a área total combinada (união) entre a predição e o ground truth, por classe. Varia entre 0 (sem sobreposição) e 1 (perfeito).',
      problem: 'É a métrica standard em benchmarks (PASCAL VOC, Cityscapes, COCO). Penaliza tanto falsos positivos como falsos negativos de forma simétrica.',
    },
    {
      name: 'mIoU (mean IoU)', color: '#f97316',
      formula: 'mIoU = (1/K) Σ IoU_k  (para k=1..K classes)',
      desc: 'Calcula-se o IoU para cada classe separadamente e depois faz-se a média. Cada classe pesa igualmente, independentemente de quantos pixels tem.',
      problem: 'Mais informativo que pixel accuracy em datasets desbalanceados — uma classe rara mas mal segmentada (ex: "peão") puxa a média para baixo mesmo que represente poucos pixels do dataset.',
    },
    {
      name: 'Dice Coefficient (F1)', color: '#f97316',
      formula: 'Dice = 2|Pred ∩ GT| / (|Pred| + |GT|)',
      desc: 'Equivalente ao F1-score: dá o dobro do peso à interseção em relação ao IoU. Matematicamente relaciona-se com IoU por: Dice = 2·IoU / (1+IoU).',
      problem: 'É a métrica preferida em imagem médica, onde a estrutura de interesse (tumor, órgão) ocupa uma fração minúscula da imagem — o Dice é mais sensível a pequenas regiões corretamente identificadas e é a base de funções de loss (Dice Loss) que lidam bem com desequilíbrio de classes.',
    },
  ];
  const met = metrics[metricSel];

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cv" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>MÓDULO 10</div>
        <h1 style={S.h1}>Segmentação & Foundational Models</h1>
        <p style={S.lead}>A segmentação é o problema mais difícil em CV: atribuir uma classe (ou identidade) a cada pixel. U-Net criou o paradigma encoder-decoder. Mask R-CNN separou instâncias. DeepLab introduziu convoluções dilatadas para capturar contexto multi-escala. SAM e DINOv2 mudaram o paradigma completamente — modelos treinados em dados massivos que generalizam para qualquer coisa sem fine-tuning. Este módulo termina com um olhar sobre tarefas relacionadas: profundidade monocular, modelos de difusão e segmentação de vídeo.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. Tipos de Segmentação</h2>
          <p style={S.p}>Antes de mergulhar nas arquiteturas, é essencial distinguir os três níveis de granularidade da segmentação — cada um responde a uma pergunta diferente sobre a imagem.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Tipo</th><th style={S.th}>O que produz</th><th style={S.th}>Exemplo</th><th style={S.th}>Modelos</th></tr></thead>
              <tbody>
                {[
                  ['Semântica', 'Classe por pixel. Todas as instâncias da mesma classe = mesma cor.', '2 pessoas → 2 regiões "pessoa" mas não separadas', 'U-Net, DeepLab, FCN'],
                  ['Instance', 'Máscara individual por instância detectada.', '2 pessoas → 2 máscaras separadas (pessoa 1 e pessoa 2)', 'Mask R-CNN, YOLACT'],
                  ['Panoptic', 'Combina semântica + instance: stuff (céu, estrada) em semântica, things (pessoas, carros) em instance.', 'Mapa completo com cada píxel classificado e instâncias separadas', 'Panoptic-FPN, Mask2Former'],
                ].map(([t, o, e, mm]) => (
                  <tr key={t}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{t}</td><td style={S.td}>{o}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{e}</td><td style={S.td}>{mm}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>"Stuff" vs. "Things"</h3>
          <p style={S.p}>Esta distinção é fundamental para a segmentação panóptica. <strong>"Stuff"</strong> são regiões amorfas e contáveis apenas como massa — céu, estrada, relva, água. Não faz sentido falar em "instância de céu". <strong>"Things"</strong> são objetos discretos e contáveis — pessoas, carros, animais. A segmentação panóptica trata "stuff" com rótulos semânticos simples e "things" com instâncias separadas, produzindo uma única representação coerente da cena completa.</p>

          <div style={S.note}>Nota histórica: o FCN (Fully Convolutional Network, Long et al. 2015) foi o primeiro a mostrar que uma rede totalmente convolucional — sem camadas densas — pode produzir um output denso (mapa de classes) a partir de qualquer input de tamanho variável, abrindo caminho para todas as arquiteturas seguintes.</div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. U-Net — O Paradigma Encoder-Decoder</h2>
          <p style={S.p}>O FCN substituiu as camadas FC por convoluções 1×1, permitindo processar imagens de qualquer tamanho, mas o seu output era de baixa resolução (resultado direto do bottleneck, apenas com upsampling simples). O U-Net (Ronneberger et al., 2015) melhorou drasticamente este resultado adicionando skip connections simétricas entre encoder e decoder, permitindo ao decoder recuperar detalhes finos que o encoder comprimiu progressivamente.</p>

          <UNetDiagram />

          <h3 style={S.h3}>Anatomia em detalhe</h3>
          <p style={S.p}>O <strong>encoder</strong> (contraction path) é tipicamente uma sequência de blocos "duas convoluções 3×3 + ReLU + max pooling 2×2". Cada bloco reduz a resolução espacial para metade e duplica o número de canais — a rede vai trocando "onde" por "o quê": perde resolução espacial mas ganha abstração semântica.</p>
          <p style={S.p}>O <strong>bottleneck</strong> é o ponto de menor resolução espacial e maior número de canais — contém a representação mais comprimida e semanticamente rica da imagem, mas perdeu quase toda a informação de localização precisa.</p>
          <p style={S.p}>O <strong>decoder</strong> (expansion path) inverte o processo: cada bloco faz upsampling (transposed convolution ou interpolação seguida de convolução) que duplica a resolução espacial e reduz o número de canais para metade.</p>
          <p style={S.p}>As <strong>skip connections</strong> ligam diretamente cada nível do encoder ao nível correspondente do decoder, concatenando os feature maps antes de cada convolução do decoder. Sem elas, o decoder teria de "reconstruir" detalhes finos (bordas, texturas) apenas a partir da representação comprimida do bottleneck — uma tarefa quase impossível. Com elas, o decoder combina contexto global (bottleneck) com detalhe local de alta resolução (skip), produzindo fronteiras de segmentação muito mais nítidas.</p>

          <div style={S.note}>U-Net foi originalmente desenvolvido para segmentação de imagens biomédicas, onde dados são escassos. Com data augmentation agressiva (elastic deformations), treina bem com apenas dezenas de imagens. Continua a ser o baseline de referência para segmentação médica, e a sua estrutura encoder-decoder com skip connections inspirou diretamente a arquitetura dos modelos de difusão modernos (ver secção 7).</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Métricas de Segmentação</h2>
          <p style={S.p}>Avaliar um modelo de segmentação não é tão simples como em classificação — a métrica certa depende do equilíbrio de classes do dataset e do que realmente importa para a aplicação. Explora as quatro métricas mais usadas:</p>

          <div style={S.diagram}>
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              {metrics.map((mo, i) => (
                <button key={i} onClick={() => setMetricSel(i)} style={{ padding: '0.35rem 0.85rem', borderRadius: 20, cursor: 'pointer', fontWeight: 700, fontSize: '0.82rem', background: metricSel === i ? mo.color : 'var(--bg-primary)', color: metricSel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${metricSel === i ? mo.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{mo.name}</button>
              ))}
            </div>
            <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${met.color}30` }}>
              <div style={{ ...S.math, marginTop: 0, color: met.color, borderColor: `${met.color}40` }}>{met.formula}</div>
              <p style={{ fontSize: '0.87rem', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '0.75rem' }}><strong style={{ color: met.color }}>O que mede:</strong> {met.desc}</p>
              <p style={{ fontSize: '0.87rem', color: 'var(--text-primary)', lineHeight: 1.7 }}><strong style={{ color: '#f97316' }}>Quando usar / limitações:</strong> {met.problem}</p>
            </div>
          </div>

          <IoUDiagram />

          <h3 style={S.h3}>Por que o Dice é preferido em imagem médica</h3>
          <p style={S.p}>Imagina um dataset onde um tumor ocupa 1% dos pixels de cada slice de ressonância magnética. A pixel accuracy de um modelo que nunca prevê "tumor" seria 99% — completamente enganadora. O IoU já é mais robusto, mas o Dice ainda é mais sensível: para a mesma sobreposição, o Dice é sempre ≥ ao IoU (a relação exata é Dice = 2·IoU/(1+IoU)), e a sua derivada perto de zero é mais "informativa" para gradientes durante o treino — por isso a Dice Loss (1 − Dice) é amplamente usada como função de perda em segmentação médica, frequentemente combinada com cross-entropy.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Cenário</th><th style={S.th}>Métrica recomendada</th><th style={S.th}>Porquê</th></tr></thead>
              <tbody>
                {[
                  ['Benchmark geral (Cityscapes, VOC)', 'mIoU', 'Padrão da literatura, comparável entre papers, trata todas as classes igualmente'],
                  ['Segmentação médica (tumores, órgãos)', 'Dice / F1', 'Mais sensível a pequenas regiões positivas, base de funções de loss robustas a desequilíbrio'],
                  ['Visão geral rápida / debugging', 'Pixel Accuracy', 'Simples e rápida, mas sempre complementar a outra métrica — nunca usar isolada'],
                  ['Comparar várias classes raras vs. comuns', 'mIoU por classe (tabela)', 'Identifica em que classes específicas o modelo falha, escondido pela média global'],
                ].map(([c, mtr, why]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 600 }}>{c}</td><td style={{ ...S.td, color: '#f97316', fontWeight: 700 }}>{mtr}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{why}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. DeepLab e Atrous Spatial Pyramid Pooling</h2>
          <p style={S.p}>Um dos grandes desafios da segmentação semântica é o trade-off entre <strong>resolução</strong> e <strong>campo recetivo</strong>. CNNs clássicas usam pooling/stride para aumentar o campo recetivo (ver mais contexto), mas isso reduz a resolução espacial — más notícias quando o output final precisa de ser denso e preciso. A família DeepLab (Chen et al., 2017-2018) resolveu isto com duas ideias-chave: <strong>convoluções dilatadas (atrous)</strong> e <strong>ASPP</strong>.</p>

          <h3 style={S.h3}>Convolução Dilatada (Atrous)</h3>
          <p style={S.p}>Uma convolução normal 3×3 examina 9 pixels contíguos. Uma convolução dilatada com "rate" r insere r-1 "buracos" entre cada par de pesos do kernel, fazendo com que o mesmo kernel 3×3 cubra uma área muito maior (efetivamente um kernel (2r+1)×(2r+1)) — sem aumentar o número de parâmetros e sem reduzir a resolução do feature map através de pooling.</p>

          <DilatedConvDiagram />

          <h3 style={S.h3}>ASPP — Capturar Múltiplas Escalas em Paralelo</h3>
          <p style={S.p}>Objetos numa cena têm tamanhos muito diferentes — um carro próximo pode ocupar metade da imagem, um carro distante pode ter poucos pixels. Uma única taxa de dilatação não é ideal para ambos. O ASPP aplica <strong>várias convoluções dilatadas em paralelo, com taxas diferentes</strong>, sobre o mesmo feature map de entrada, mais um ramo de "global average pooling" que captura contexto de imagem inteira. Os outputs de todos os ramos são concatenados e fundidos com uma convolução 1×1 final.</p>

          <ASPPDiagram />

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Versão</th><th style={S.th}>Inovação principal</th><th style={S.th}>Notas</th></tr></thead>
              <tbody>
                {[
                  ['DeepLabv1', 'Convoluções atrous + CRF (Conditional Random Field) como pós-processamento', 'CRF refina fronteiras mas é lento e separado da rede'],
                  ['DeepLabv2', 'Introduz o ASPP com taxas 6/12/18/24', 'Primeira versão a capturar contexto multi-escala dentro da rede'],
                  ['DeepLabv3', 'ASPP melhorado + batch normalization, remove o CRF', 'Mais simples e end-to-end treinável'],
                  ['DeepLabv3+', 'Adiciona um decoder simples (estilo encoder-decoder) para refinar fronteiras', 'Combina o melhor do ASPP (contexto) com skip connections (detalhe local)'],
                ].map(([v, i, n]) => (
                  <tr key={v}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{v}</td><td style={S.td}>{i}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{n}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>DeepLabv3+ combina essencialmente as duas grandes ideias deste módulo: o contexto multi-escala do ASPP (resolve o problema do "quão grande é o objeto?") e a filosofia encoder-decoder do U-Net (resolve o problema "onde está exatamente a fronteira?").</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Modelos Fundacionais de Segmentação</h2>
          <p style={S.p}>A partir de 2017, surgiram arquiteturas que resolveram problemas distintos da segmentação clássica: separar instâncias individuais (Mask R-CNN), generalizar para qualquer objeto sem treino específico (SAM), e aprender representações visuais universais sem qualquer rótulo (DINOv2). Explora cada modelo:</p>
          <div style={S.diagram}>
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              {models.map((mo, i) => (
                <button key={i} onClick={() => setSel(i)} style={{ padding: '0.35rem 0.85rem', borderRadius: 20, cursor: 'pointer', fontWeight: 700, fontSize: '0.82rem', background: sel === i ? mo.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? mo.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{mo.name} <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>({mo.year})</span></button>
              ))}
            </div>
            <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${m.color}30` }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.82rem' }}>
                {[['Task', m.task], ['Output', m.output]].map(([k, v]) => (
                  <div key={k} style={{ background: 'var(--bg-secondary)', borderRadius: 6, padding: '0.5rem 0.75rem' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>{k}</div>
                    <div style={{ fontWeight: 600, color: m.color, fontSize: '0.8rem' }}>{v}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.87rem', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '0.75rem' }}><strong style={{ color: m.color }}>Como funciona:</strong> {m.what}</p>
              <p style={{ fontSize: '0.87rem', color: 'var(--text-primary)', lineHeight: 1.7 }}><strong style={{ color: '#f97316' }}>Contribuição chave:</strong> {m.key}</p>
            </div>
          </div>

          <h3 style={S.h3}>SAM em detalhe — os três componentes</h3>
          <p style={S.p}>O SAM divide o problema em três partes desacopladas, o que o torna eficiente para uso interativo: o <strong>Image Encoder</strong> (um ViT pesado) processa a imagem uma única vez, produzindo um embedding denso. O <strong>Prompt Encoder</strong> converte pontos, caixas ou texto num embedding leve — esta parte é muito rápida. O <strong>Mask Decoder</strong> (também leve) combina os dois embeddings e produz a máscara em milissegundos. Resultado: podes mover o rato sobre a imagem e ver a máscara a atualizar em tempo real, porque só o Prompt Encoder + Mask Decoder recalculam a cada interação.</p>

          <h3 style={S.h3}>DINOv2 — aprendizagem sem nenhum rótulo</h3>
          <p style={S.p}>DINOv2 usa uma estratégia chamada self-distillation: duas cópias da mesma rede (student e teacher) recebem crops diferentes da mesma imagem (um crop maior/global, outro menor/local). O student tem de prever a saída do teacher para esses crops, mesmo vendo partes diferentes da imagem. O teacher é uma média móvel (EMA) dos pesos do student — nunca recebe gradientes diretamente. Este processo, repetido sobre milhões de imagens sem qualquer anotação, produz representações tão ricas que um simples classificador linear treinado sobre features DINOv2 frozen rivaliza com redes totalmente supervisionadas em muitas tarefas.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>6. Estimativa de Profundidade Monocular</h2>
          <p style={S.p}>A estimativa de profundidade tradicional usa visão estéreo (duas câmaras, triangulação geométrica) ou sensores ativos (LiDAR, sensores de tempo-de-voo). A <strong>profundidade monocular</strong> tenta prever um mapa de profundidade — um valor por pixel indicando "quão longe está este ponto da câmara" — a partir de <strong>uma única imagem RGB</strong>, sem qualquer informação geométrica explícita.</p>

          <p style={S.p}>À primeira vista isto parece impossível: uma única imagem 2D não contém informação 3D explícita (o mesmo pixel poderia corresponder a um objeto pequeno e próximo ou grande e distante). Mas humanos conseguem estimar profundidade numa única foto usando pistas (cues) monoculares — e redes neuronais profundas conseguem aprender a explorar essas mesmas pistas a partir de grandes quantidades de dados.</p>

          <h3 style={S.h3}>Pistas monoculares que a rede aprende a explorar</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Pista</th><th style={S.th}>Exemplo</th></tr></thead>
              <tbody>
                {[
                  ['Tamanho relativo', 'Objetos da mesma classe (carros, pessoas) que aparecem mais pequenos estão mais longe'],
                  ['Oclusão', 'Um objeto que tapa parte de outro está mais próximo da câmara'],
                  ['Perspetiva linear', 'Linhas paralelas (estrada, edifícios) convergem em direção ao horizonte'],
                  ['Gradiente de textura', 'Texturas (relva, tijolos) ficam mais densas/comprimidas com a distância'],
                  ['Posição vertical na imagem', 'Em cenas com chão, objetos mais acima na imagem tendem a estar mais longe'],
                  ['Desfoque / profundidade de campo', 'Objetos fora de foco em fotos com pouca profundidade de campo estão a distâncias diferentes do plano focal'],
                ].map(([c, e]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{c}</td><td style={{ ...S.td, color: 'var(--text-secondary)' }}>{e}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Relação com segmentação — ambas são "dense prediction"</h3>
          <p style={S.p}>A profundidade monocular partilha quase toda a arquitetura com a segmentação semântica: ambas são tarefas de <strong>dense prediction</strong> — produzir um valor por pixel a partir de uma imagem de entrada. A diferença está apenas no que esse valor representa e na função de loss: em segmentação, o output é uma distribuição categórica (classe) e usa-se cross-entropy/Dice; em profundidade, o output é um valor contínuo (distância) e usa-se uma loss de regressão (ex: erro absoluto/relativo, ou losses específicas como scale-invariant log loss). É comum ver a mesma arquitetura encoder-decoder (estilo U-Net/DeepLab) usada para ambas as tarefas, e até modelos multi-task que produzem segmentação E profundidade a partir do mesmo backbone partilhado.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Modelo</th><th style={S.th}>Ano</th><th style={S.th}>Caraterística principal</th></tr></thead>
              <tbody>
                {[
                  ['MiDaS', '2019-2021', 'Treinado em múltiplos datasets de profundidade com diferentes escalas/unidades, usando uma loss invariante à escala — produz profundidade relativa generalizável a qualquer imagem "do mundo real"'],
                  ['DPT (Dense Prediction Transformer)', '2021', 'Substitui o backbone CNN por um Vision Transformer, melhorando a consistência global do mapa de profundidade'],
                  ['Depth Anything', '2024', 'Modelo fundacional para profundidade monocular: combina dados rotulados com milhões de imagens não rotuladas via pseudo-labelling, generaliza extremamente bem (zero-shot) a cenas e domínios nunca vistos'],
                ].map(([n, y, d]) => (
                  <tr key={n}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{n}</td><td style={S.td}>{y}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Profundidade absoluta vs. relativa: muitos destes modelos produzem profundidade <em>relativa</em> (a relação de distâncias entre pixels está correta, mas não a escala métrica real em metros). Para profundidade <em>métrica</em> (em metros), é necessário calibração com a câmara ou fine-tuning num dataset com ground truth métrico (ex: a partir de LiDAR).</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>7. Modelos de Difusão em Visão</h2>
          <p style={S.p}>Os modelos de difusão tornaram-se a abordagem dominante para geração de imagens (Stable Diffusion, DALL-E, Midjourney) e têm também aplicações diretas em segmentação e restauração de imagem. A intuição central é surpreendentemente simples.</p>

          <h3 style={S.h3}>A intuição: destruir e reconstruir</h3>
          <p style={S.p}>O treino tem dois processos: o <strong>processo forward</strong> (fixo, sem aprendizagem) pega numa imagem real e adiciona-lhe ruído gaussiano gradualmente, em centenas de pequenos passos, até a imagem se tornar ruído puro indistinguível de estática aleatória. O <strong>processo reverse</strong> é onde está a aprendizagem: treina-se uma rede neuronal (tipicamente uma U-Net!) para, dado uma imagem ruidosa num passo t, prever o ruído que foi adicionado — e portanto conseguir "limpar" um pouco a imagem, passo a passo.</p>

          <DiffusionDiagram />

          <p style={S.p}>Depois de treinada, a geração funciona ao contrário do treino: começa-se com ruído puro aleatório e aplica-se repetidamente a rede de denoising, removendo um pouco de ruído em cada passo, até obter uma imagem limpa e coerente — uma imagem que a rede "imaginou" a partir de ruído.</p>

          <h3 style={S.h3}>Por que é uma U-Net?</h3>
          <p style={S.p}>A rede de denoising precisa de receber uma imagem (com ruído) e produzir um output da mesma resolução (a estimativa do ruído ou da imagem limpa) — exatamente o mesmo requisito de "dense prediction" da segmentação. A arquitetura U-Net, com o seu encoder-decoder e skip connections, é a escolha natural: o encoder extrai contexto semântico (que objeto/cena é esta?), o decoder reconstrói os detalhes espaciais, e as skip connections preservam informação de alta frequência necessária para imagens nítidas.</p>

          <h3 style={S.h3}>Aplicações além da geração de imagens</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aplicação</th><th style={S.th}>Como a difusão é usada</th></tr></thead>
              <tbody>
                {[
                  ['Geração de imagens (Stable Diffusion, DALL-E)', 'Texto (via embedding de um modelo de linguagem) condiciona o processo de denoising — guia a "imaginação" da rede para o conteúdo descrito'],
                  ['Inpainting / restauração', 'A região a restaurar é tratada como "ruído" a remover, condicionado nas regiões válidas em redor'],
                  ['Super-resolução', 'O modelo aprende a fazer denoising condicionado numa versão de baixa resolução, "alucinando" detalhe de alta frequência plausível'],
                  ['Segmentação e estimativa de profundidade', 'Modelos experimentais tratam o mapa de segmentação/profundidade como a "imagem" a gerar, condicionado na imagem RGB de entrada — explorando a robustez do processo de denoising'],
                ].map(([a, b]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{a}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{b}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Stable Diffusion, em particular, não aplica difusão diretamente nos pixels: usa um autoencoder para comprimir a imagem num "latent space" muito mais pequeno, e a difusão acontece nesse espaço latente — daí o nome "Latent Diffusion Model". Isto reduz drasticamente o custo computacional.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>8. Vídeo — A Dimensão Temporal</h2>
          <p style={S.p}>Tudo o que vimos até agora processa uma imagem isolada. Vídeo introduz uma quarta dimensão — o tempo — e com ela, novos desafios e oportunidades: a redundância entre frames consecutivos, a necessidade de consistência temporal (a máscara de um objeto não pode "saltar" de frame para frame) e o movimento como fonte adicional de informação.</p>

          <h3 style={S.h3}>Duas estratégias para processar vídeo</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Abordagem</th><th style={S.th}>Como funciona</th><th style={S.th}>Vantagens / Desvantagens</th></tr></thead>
              <tbody>
                {[
                  ['3D-CNN / convoluções espácio-temporais', 'Os kernels de convolução ganham uma terceira dimensão (tempo): em vez de 3×3, são 3×3×3, processando vários frames em simultâneo e aprendendo padrões de movimento diretamente.', 'Captura movimento de forma nativa, mas é muito mais pesado computacionalmente e exige clips de vídeo curtos como input (não conseguem processar streams arbitrariamente longos)'],
                  ['Frame-a-frame + tracking temporal', 'Cada frame é processado individualmente por uma rede 2D (a mesma usada em imagens), e um módulo separado de tracking liga as deteções/máscaras entre frames consecutivos.', 'Reaproveita modelos de imagem já treinados, escala para vídeos longos, mas pode sofrer de inconsistências (flickering) entre frames se o tracking falhar'],
                ].map(([a, b, c]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{a}</td><td style={S.td}>{b}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{c}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>SAM 2 — Segmentação de Vídeo com Prompts Propagados</h3>
          <p style={S.p}>SAM 2 (Meta AI, 2024) estende o SAM original de imagens para vídeo, seguindo a filosofia "frame-a-frame + tracking", mas de forma muito mais sofisticada. O utilizador dá um prompt (clique, caixa) num único frame — o modelo segmenta o objeto nesse frame e depois <strong>propaga</strong> a máscara automaticamente para os frames seguintes (e anteriores), mantendo a identidade do objeto mesmo que ele mude de aparência, seja parcialmente ocluído, ou saia e volte a entrar no enquadramento.</p>

          <VideoDiagram />

          <p style={S.p}>O componente chave é a <strong>memory bank</strong>: à medida que o modelo processa frames sucessivos, vai armazenando representações ("memórias") do objeto segmentado em frames anteriores. Para cada novo frame, o modelo usa attention sobre essa memória para decidir onde está o objeto agora — é essencialmente o mesmo Mask Decoder leve do SAM, mas agora condicionado também na história recente, não só no prompt original e na imagem atual.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>SAM (imagem)</th><th style={S.th}>SAM 2 (vídeo)</th></tr></thead>
              <tbody>
                {[
                  ['Input', 'Uma imagem + prompt', 'Um vídeo (sequência de frames) + prompt num frame qualquer'],
                  ['Output', 'Máscara para essa imagem', 'Máscaras consistentes ao longo de todos os frames (masklet)'],
                  ['Componente novo', '—', 'Memory bank + memory attention para propagação temporal'],
                  ['Lida com oclusão', 'N/A', 'Sim — mantém a identidade do objeto mesmo quando temporariamente invisível'],
                ].map(([a, b, c]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 600 }}>{a}</td><td style={{ ...S.td, color: 'var(--text-secondary)' }}>{b}</td><td style={{ ...S.td, color: '#f97316', fontWeight: 600 }}>{c}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>O paralelo com NLP é direto: tal como um LLM mantém um "contexto" das palavras anteriores para gerar a próxima palavra de forma coerente, o SAM 2 mantém um "contexto visual" dos frames anteriores para segmentar o frame atual de forma coerente.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>9. A Mudança de Paradigma — Foundational Models</h2>
          <p style={S.p}>O paradigma tradicional era: pré-treinar backbone em ImageNet, fine-tunar para segmentação com labels de segmentação. Cada nova tarefa requeria novos dados de anotação (caros — anotar máscaras leva 60-90 minutos por imagem).</p>
          <p style={S.p}>Os modelos fundacionais inverteram isto: treinar em quantidades imensas de dados (com anotações automáticas ou semi-automáticas) para criar um modelo universal que funciona zero-shot em novas tarefas. SAM foi treinado com um motor de anotação semi-automático que gerou 1 bilião de máscaras. DINOv2 não precisa de qualquer anotação — usa apenas a estrutura visual dos dados. Depth Anything segue a mesma filosofia para profundidade: usa um modelo treinado em dados rotulados para gerar pseudo-labels em milhões de imagens não rotuladas, e treina o modelo final nessa mistura massiva.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>Paradigma clássico</th><th style={S.th}>Foundational models</th></tr></thead>
              <tbody>
                {[
                  ['Dados necessários', 'Milhares de máscaras anotadas manualmente por task', 'Pré-treino massivo (bilhões de imagens/máscaras) uma vez'],
                  ['Generalização', 'Boa no domínio de treino; má fora', 'Excelente zero-shot para tasks não vistas'],
                  ['Custo de adaptação', 'Fine-tuning completo para cada nova task', 'Prompts simples ou probe linear no backbone frozen'],
                  ['Flexibilidade', 'Modelo fixo para uma task específica', 'Um modelo para múltiplas tasks (segmentação, classificação, depth, vídeo, etc.)'],
                  ['Exemplo de evolução', 'U-Net (2015) treinado de raiz por dataset médico', 'SAM/SAM 2/DINOv2/Depth Anything: um backbone, prompts ou fine-tuning leve'],
                ].map(([a, c, f]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)' }}>{a}</td><td style={{ ...S.td, color: '#f97316' }}>{c}</td><td style={{ ...S.td, color: '#f97316' }}>{f}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={S.p}>Esta tendência reflete uma mudança mais ampla em toda a IA: em vez de "um modelo, uma tarefa, um dataset", o objetivo passa a ser "um modelo (ou família de modelos) com representações suficientemente ricas para servir de base a qualquer tarefa visual" — segmentação, deteção, profundidade, vídeo, geração — através de prompts, probes leves ou fine-tuning mínimo.</p>
        </div>

        
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>10. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
            <li>Semântica vs. Instance vs. Panoptic: nível de granularidade crescente na segmentação ("stuff" vs. "things").</li>
            <li>U-Net: encoder-decoder simétrico com skip connections. Features do encoder fornecem detalhe local ao decoder.</li>
            <li>Métricas: Pixel Accuracy é enganadora em datasets desbalanceados; IoU/mIoU são o standard; Dice é preferido em imagem médica e como função de loss.</li>
            <li>DeepLab/ASPP: convoluções dilatadas aumentam o campo recetivo sem perder resolução; ASPP combina várias taxas em paralelo para contexto multi-escala.</li>
            <li>Mask R-CNN: Faster R-CNN + head de máscara. RoIAlign para masks precisas. Instance segmentation.</li>
            <li>SAM (2023): foundational model de segmentação. 11M imagens, 1B máscaras. Zero-shot com prompts (Image Encoder + Prompt Encoder + Mask Decoder).</li>
            <li>DINOv2: auto-supervisionado, sem labels (self-distillation). Features universais — um backbone para todas as tasks densas.</li>
            <li>Profundidade monocular: tarefa de dense prediction como segmentação, mas com output contínuo. MiDaS/DPT/Depth Anything generalizam zero-shot.</li>
            <li>Modelos de difusão: aprendem a remover ruído gradualmente (forward = adicionar ruído fixo, reverse = denoising aprendido por uma U-Net). Base do Stable Diffusion e com aplicações em segmentação/restauração.</li>
            <li>Vídeo: dimensão temporal extra. SAM 2 propaga prompts ao longo do tempo via memory bank, mantendo identidade de objetos mesmo com oclusão.</li>
          </ul>
          </div>
        </div>
        </div>
      </div>
      );
}
