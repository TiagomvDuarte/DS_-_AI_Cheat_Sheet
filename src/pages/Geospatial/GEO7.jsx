import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Geospatial';

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

function CNNArchSvg() {
  const layers = [
    { name: 'Input', desc: '256×256×13', w: 50, c: '#f97316' },
    { name: 'Conv+BN+ReLU', desc: '128×128×64', w: 60, c: '#f97316' },
    { name: 'Conv+BN+ReLU', desc: '64×64×128', w: 70, c: '#f97316' },
    { name: 'Conv+BN+ReLU', desc: '32×32×256', w: 80, c: '#f97316' },
    { name: 'Bottleneck', desc: '16×16×512', w: 90, c: '#f97316' },
    { name: 'Decoder ×3', desc: '32→128×128', w: 80, c: '#f97316' },
    { name: 'Output', desc: '256×256×C', w: 50, c: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 165" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="165" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">U-Net para Segmentação Semântica de Imagens de Satélite</text>
      {layers.map((l, i) => {
        const totalW = 560;
        const spacing = totalW / layers.length;
        const cx = spacing * i + spacing / 2;
        const barH = l.w;
        const y = 90 - barH / 2;
        return (
          <g key={i}>
            <rect x={cx - 30} y={y} width="60" height={barH} fill={l.c} rx="4" opacity="0.7" />
            <text x={cx} y={y - 5} textAnchor="middle" fill={l.c} fontSize="7.5" fontWeight="700">{l.name}</text>
            <text x={cx} y={y + barH + 12} textAnchor="middle" fill="#fb923c" fontSize="7">{l.desc}</text>
            {i < layers.length - 1 && <line x1={cx + 30} y1="90" x2={cx + spacing - 30} y2="90" stroke="var(--card-border)" strokeWidth="1.5" strokeDasharray={i === 3 ? '4,2' : '0'} />}
          </g>
        );
      })}
      {/* skip connections */}
      <path d="M 120,52 Q 280,20 440,52" fill="none" stroke="#fb923c" strokeWidth="1" strokeDasharray="3,2" opacity="0.4" />
      <path d="M 200,64 Q 280,35 360,64" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" opacity="0.4" />
      <text x="280" y="155" textAnchor="middle" fill="#fb923c" fontSize="8.5">Skip connections ligam encoder ao decoder — preservam detalhes espaciais perdidos no downsampling.</text>
    </svg>
  );
}

function DatasetsSvg() {
  const datasets = [
    { name: 'SpaceNet', task: 'Building footprint, road extraction', size: '30k+ imagens', res: '30cm', c: '#f97316' },
    { name: 'DeepGlobe', task: 'Land cover, road, building', size: '1M+ patches', res: '50cm', c: '#f97316' },
    { name: 'BigEarthNet', task: 'Multi-label land cover (Sentinel-2)', size: '590k patches', res: '10m', c: '#f97316' },
    { name: 'xView', task: 'Object detection (60 classes)', size: '60k+ objects', res: '30cm', c: '#f97316' },
    { name: 'iSAID', task: 'Instance segmentation', size: '655k instances', res: '30-50cm', c: '#f97316' },
    { name: 'EuroSAT', task: 'Land use classification', size: '27k patches', res: '10m', c: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 230" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="230" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Datasets de Referência para Deep Learning Geoespacial</text>
      {['Dataset','Task','Tamanho','Resolução'].map((h, i) => {
        const xs = [12, 130, 355, 460];
        return <text key={i} x={xs[i]} y="30" fill="#f97316" fontSize="9" fontWeight="700">{h}</text>;
      })}
      <line x1="8" y1="35" x2="552" y2="35" stroke="var(--card-border)" strokeWidth="1" />
      {datasets.map((d, i) => {
        const y = 40 + i * 28;
        const xs = [12, 130, 355, 460];
        return (
          <g key={i}>
            <rect x="8" y={y} width="544" height="22" fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'transparent'} rx="3" />
            <rect x="8" y={y} width="5" height="22" fill={d.c} rx="1" />
            <text x={xs[0]+8} y={y+15} fill={d.c} fontSize="9.5" fontWeight="700">{d.name}</text>
            <text x={xs[1]} y={y+15} fill="#fb923c" fontSize="8.5">{d.task}</text>
            <text x={xs[2]} y={y+15} fill="#fb923c" fontSize="8.5">{d.size}</text>
            <text x={xs[3]} y={y+15} fill="#f97316" fontSize="8.5">{d.res}</text>
          </g>
        );
      })}
      <text x="280" y="216" textAnchor="middle" fill="#fb923c" fontSize="8.5">Foundation Models: SatMAE, Scale-MAE, DeCUR — pre-treinados em petabytes de imagens de satélite.</text>
      <text x="280" y="228" textAnchor="middle" fill="#fb923c" fontSize="8.5">Fine-tuning com poucos dados rotulados.</text>
    </svg>
  );
}

function ViTSvg() {
  return (
    <svg viewBox="0 0 560 185" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="185" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="12" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Vision Transformer (ViT) para Imagens de Satélite</text>
      {/* image patches */}
      <rect x="10" y="28" width="120" height="120" fill="rgba(249,115,22,0.06)" rx="4" />
      <text x="70" y="24" textAnchor="middle" fill="#fb923c" fontSize="8.5">Imagem satélite</text>
      {[0,1,2,3].map(r => [0,1,2,3].map(c => {
        const v = Math.sin(r * 1.1 + c * 0.8) * 0.5 + 0.5;
        return <rect key={`${r}-${c}`} x={12 + c * 29} y={30 + r * 29} width="27" height="27" fill={`rgb(${Math.round(180+v*75)},${Math.round(80+v*80)},${Math.round(v*22)})`} stroke="var(--bg-secondary)" strokeWidth="1" opacity="0.85" rx="1" />;
      }))}
      {/* arrow */}
      <text x="150" y="93" fill="#fb923c" fontSize="20" fontWeight="300">›</text>
      {/* patch embeddings */}
      <rect x="165" y="28" width="80" height="120" fill="rgba(249,115,22,0.06)" rx="4" />
      <text x="205" y="24" textAnchor="middle" fill="#f97316" fontSize="8.5">Patch Embeddings</text>
      {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(i => (
        <rect key={i} x="173" y={32 + i * 7} width="64" height="5" fill="#f97316" rx="1" opacity={0.3 + (i % 4) * 0.15} />
      ))}
      {/* arrow */}
      <text x="258" y="93" fill="#fb923c" fontSize="20" fontWeight="300">›</text>
      {/* transformer blocks */}
      <rect x="275" y="28" width="100" height="120" fill="rgba(249,115,22,0.06)" rx="4" />
      <text x="325" y="24" textAnchor="middle" fill="#f97316" fontSize="8.5">Transformer ×12</text>
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="283" y={35 + i * 27} width="84" height="22" fill="#f97316" rx="3" opacity="0.15" />
          <text x="325" y={50 + i * 27} textAnchor="middle" fill="#f97316" fontSize="7.5">Multi-Head Attention</text>
        </g>
      ))}
      {/* arrow */}
      <text x="388" y="93" fill="#fb923c" fontSize="20" fontWeight="300">›</text>
      {/* output */}
      <rect x="403" y="28" width="145" height="120" fill="rgba(249,115,22,0.06)" rx="4" />
      <text x="475" y="24" textAnchor="middle" fill="#fb923c" fontSize="8.5">Output</text>
      {[
        { label: 'Classificação', desc: 'CLS token → label', c: '#f97316' },
        { label: 'Detecção', desc: 'DETR-style queries', c: '#f97316' },
        { label: 'Segmentação', desc: 'ViT + decoder head', c: '#f97316' },
      ].map((o, i) => (
        <g key={i}>
          <rect x="411" y={38 + i * 35} width="129" height="28" fill={o.c} rx="4" opacity="0.15" />
          <text x="475" y={52 + i * 35} textAnchor="middle" fill={o.c} fontSize="9" fontWeight="700">{o.label}</text>
          <text x="475" y={64 + i * 35} textAnchor="middle" fill="#fb923c" fontSize="7.5">{o.desc}</text>
        </g>
      ))}
      <text x="280" y="162" textAnchor="middle" fill="#fb923c" fontSize="8.5">ViT para satélite: patches de 16×16 pixels. Atenção global captura dependências de longa distância</text>
      <text x="280" y="174" textAnchor="middle" fill="#fb923c" fontSize="8.5">— vantagem sobre CNNs em imagens de alta resolução.</text>
    </svg>
  );
}

function SAMSvg() {
  return (
    <svg viewBox="0 0 560 160" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="160" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">SAM — Segment Anything Model para Geoespacial</text>
      {/* workflow */}
      {[
        { step: '1. Imagem satélite', detail: 'GeoTIFF multi-banda', c: '#f97316', x: 10 },
        { step: '2. Image Encoder', detail: 'ViT-H (MAE pre-train)', c: '#f97316', x: 145 },
        { step: '3. Prompts', detail: 'Ponto / caixa / máscara', c: '#f97316', x: 280 },
        { step: '4. Mask Decoder', detail: '3 masks + IoU scores', c: '#f97316', x: 415 },
      ].map(d => (
        <g key={d.x}>
          <rect x={d.x} y="24" width="127" height="85" fill={d.c} rx="6" opacity="0.09" />
          <rect x={d.x} y="24" width="127" height="85" fill="none" stroke={d.c} strokeWidth="1.2" rx="6" />
          <text x={d.x + 63} y="45" textAnchor="middle" fill={d.c} fontSize="9" fontWeight="700">{d.step}</text>
          <text x={d.x + 63} y="64" textAnchor="middle" fill="#fb923c" fontSize="8.5">{d.detail}</text>
          {d.x < 415 && <text x={d.x + 128} y="70" fill="#fb923c" fontSize="16">›</text>}
        </g>
      ))}
      <text x="280" y="128" textAnchor="middle" fill="#fb923c" fontSize="9.5" fontWeight="700">Segment Geospatial (samgeo): wrapper do SAM para GeoTIFFs georeferenciados</text>
      <text x="280" y="143" textAnchor="middle" fill="#f97316" fontSize="8.5">Permite segmentar edifícios, campos agrícolas, corpos de água com um único clique — saída como GeoJSON/shapefile</text>
      <text x="280" y="155" textAnchor="middle" fill="#fb923c" fontSize="8">GeoSAM 2024: fine-tuning específico para satélite com SA-1B + BigEarthNet. Significativamente melhor que SAM base em imagens remotas.</text>
    </svg>
  );
}

export default function GEO7() {
  const mod = modules[6];
  return (
    <div style={S.page}>
      <Link to="/geospatial" style={S.back}>← Geospatial Intelligence</Link>
      <div style={S.badge}>MÓDULO 07</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. CNNs para Imagens de Satélite</h2>
        <div style={S.diagram}><CNNArchSvg /></div>
        <div style={S.highlight}>
          As <strong>Convolutional Neural Networks (CNNs)</strong> foram a arquitectura dominante para análise de imagens de satélite durante a última década. Para imagens de satélite multi-espectrais (ex: Sentinel-2 com 13 bandas), a camada de entrada tem 13 canais em vez dos 3 (RGB) de imagens convencionais. O modelo aprende filtros que detectam padrões espectrais-espaciais relevantes: texturas de vegetação, geometrias de edifícios, padrões de rede viária.
        </div>
        <p style={S.p}>A arquitectura <strong>U-Net</strong> é o standard para segmentação semântica de imagens de satélite. O encoder extrai features progressivamente mais abstractas e de menor resolução espacial. O decoder recupera a resolução original usando upsampling. As <strong>skip connections</strong> ligam directamente camadas do encoder ao decoder na mesma resolução, preservando detalhes espaciais finos perdidos durante o downsampling — cruciais para detecção de fronteiras precisas em edifícios e campos agrícolas.</p>
        <div style={S.note}>Transfer learning: inicializar com pesos ImageNet (pré-treinados em 1M imagens naturais) e fazer fine-tuning com imagens de satélite. Para os primeiros 3 canais (RGB), os pesos ImageNet são válidos directamente. Para bandas adicionais (NIR, SWIR), inicializar com pesos da camada verde ou aleatoriamente. Reduz dados de treino necessários 10-100x.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Datasets de Referência</h2>
        <div style={S.diagram}><DatasetsSvg /></div>
        <div style={S.highlight}>
          O <strong>BigEarthNet</strong> é o maior dataset público para classificação multi-label de patches Sentinel-2 — 590,000 patches de 120×120 pixels com 43 classes de uso do solo segundo a nomenclatura Corine Land Cover. É o benchmark standard para transfer learning de imagens de satélite europeias. O <strong>SpaceNet</strong> (Amazon/DigitalGlobe) inclui imagens de altíssima resolução (30cm) de 7 cidades com anotações detalhadas de edifícios e estradas.
        </div>
        <p style={S.p}>Os <strong>Foundation Models geoespaciais</strong> são modelos pré-treinados em grandes quantidades de imagens de satélite não rotuladas usando self-supervised learning (MAE — Masked AutoEncoder). O <strong>SatMAE</strong> e <strong>Scale-MAE</strong> foram pré-treinados em milhões de imagens Sentinel-2 e Landsat. Permitem fine-tuning eficiente com poucos dados rotulados em tasks downstream — classificação, detecção, segmentação. Disponíveis no Hugging Face Hub.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Vision Transformers para Satélite</h2>
        <div style={S.diagram}><ViTSvg /></div>
        <div style={S.highlight}>
          Os <strong>Vision Transformers (ViT)</strong> dividem a imagem em patches regulares (16×16 pixels), convertem cada patch num vector (embedding), e aplicam atenção multi-cabeça sobre a sequência de patches. A vantagem sobre as CNNs é a <strong>atenção global</strong>: o modelo pode relacionar directamente patches distantes na imagem sem depender de receptive fields progressivamente maiores. Para imagens de satélite grandes (2000×2000+), os transformers capturem melhor contexto de longa distância — relações entre campos agrícolas distantes, padrões de drenagem, etc.
        </div>
        <p style={S.p}>O <strong>DINO (self-DIstillation with NO labels)</strong> é um método de self-supervised learning que produz representações de patches com propriedades notáveis de segmentação semântica mesmo sem labels. Quando aplicado a imagens de satélite, os mapas de atenção do DINO delineiam naturalmente edifícios, vegetação e corpos de água. O <strong>DINOv2</strong> (Meta) com fine-tuning em imagens de satélite é actualmente o melhor backbone para features geoespaciais.</p>
        <div style={S.note}>Remote Sensing Foundation Models 2024: GFM (Geospatial Foundation Model, IBM + NASA), SoftCon (contrastive multi-season), CROMA (cross-modal SAR+Optical). O GFM foi pré-treinado em 5M de imagens Sentinel-2 e está disponível no Hugging Face. Supera ResNet e ViT-ImageNet em todos os benchmarks de segmentação de uso do solo.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. SAM — Segment Anything Model</h2>
        <div style={S.diagram}><SAMSvg /></div>
        <div style={S.highlight}>
          O <strong>Segment Anything Model (SAM)</strong> da Meta (2023) é um modelo de segmentação promptable treinado em 1 bilhão de máscaras — pode segmentar qualquer objecto numa imagem dado um ponto, caixa ou máscara como prompt. A biblioteca <strong>samgeo</strong> (Segment Geospatial) adapta o SAM para trabalhar com GeoTIFFs georeferenciados, permitindo segmentar edifícios, campos agrícolas, corpos de água em imagens de satélite com um clique — saída directamente como shapefile ou GeoJSON georeferenciado.
        </div>
        <p style={S.p}>O SAM funciona em modo <strong>automático</strong> (segmenta tudo na imagem) ou <strong>interactivo</strong> (recebe prompts do utilizador). Para imagens de satélite, o modo automático gera demasiados segmentos — o modo interactivo com prompts de caixas (geradas por um detector de objectos) é mais efectivo. O <strong>SAM 2</strong> (2024) estende o SAM para vídeo e séries temporais — relevante para rastreamento de mudanças em séries temporais de satélite (desflorestação, expansão urbana, inundações).</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Object Detection e Detecção de Mudanças com DL</h2>
        <div style={S.highlight}>
          A <strong>detecção de objectos</strong> em imagens de satélite tem desafios únicos: objectos são vistos do topo (perspectiva nadir), têm escalas muito variáveis, e podem estar rotacionados em qualquer ângulo. Arquitecturas como <strong>RoI Transformer</strong> e <strong>Oriented R-CNN</strong> foram desenvolvidas especificamente para objectos orientados em imagens aéreas/satélite. Os benchmarks standard são DOTA (Detection in Optical Remote Sensing Images) e FAIR1M.
        </div>
        <p style={S.p}>A <strong>detecção de mudanças com Deep Learning</strong> usa pares de imagens do mesmo local em datas diferentes para identificar alterações pixel a pixel. As arquitecturas Siamese (dois encoders partilhando pesos) são o standard — os dois ramos processam imagens T1 e T2, e a diferença dos feature maps é classificada em mudança/sem mudança. O dataset ChangeDetection.NET (LEVIR-CD, WHU-CD) é o benchmark. Aplicações: monitorização de desflorestação, expansão urbana ilegal, danos pós-catástrofe.</p>
        <div style={S.note}>Pipeline completo de produção: imagem satélite → pré-processamento (correcção atmosférica, reprojecção) → inferência modelo (ONNX ou TorchScript para portabilidade) → pós-processamento (CRF para refinamento de bordas) → vectorização (gdal_polygonize) → georeferenciação → PostGIS. Inferência em GPU cloud (AWS, GCP) para imagens country-scale.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>CNNs para Imagens de Satélite</strong> — CNNs (ResNet, EfficientNet) treinadas em imagens de satélite detectam objectos (veículos, edifícios, painéis solares), classificam uso do solo e estimam variáveis contínuas (rendimento, população); fine-tuning de modelos pré-treinados em ImageNet supera modelos treinados do zero com dados limitados.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Datasets de Referência</strong> — BigEarthNet (590K Sentinel-2 patches multi-label), SpaceNet (detecção de edifícios e estradas), xView (detecção de objectos aéreos) e DeepGlobe são benchmarks de referência para modelos de visão em imagens de satélite — permitem comparação justa de arquitecturas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Vision Transformers para Satélite</strong> — ViT e Swin Transformer superaram CNNs em classificação de imagens de satélite de alta resolução; SatMAE e Scale-MAE aplicam masked autoencoders a imagens de satélite multi-escala e multi-temporal para aprender representações transferíveis sem supervisionamento.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>SAM — Segment Anything Model</strong> — SAM (Meta, 2023) segmenta qualquer objecto em imagens com prompts de ponto, caixa ou máscara; Segment Geospatial (segment-geospatial) adapta SAM a imagens de satélite de alta resolução — permite segmentar edifícios, campos agrícolas e massas de água sem treino específico.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Object Detection e Detecção de Mudanças com DL</strong> — YOLOv8 e RT-DETR detectam objectos em imagens aéreas de alta resolução (aviões, navios, veículos); redes siamesas e transformers bi-temporais (ChangeFormer) detectam mudanças entre pares de imagens — aplicações em dano pós-desastre, expansão urbana e compliance ambiental.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
