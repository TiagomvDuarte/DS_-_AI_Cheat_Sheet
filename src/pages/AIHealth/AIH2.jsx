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

function ModelPerformanceSVG() {
  const models = [
    { name: 'CheXNet (ResNet-121)', auc: 0.841, task: 'Pneumonia', color: '#f97316' },
    { name: 'EfficientNet-B4', auc: 0.912, task: 'Melanoma', color: '#f97316' },
    { name: 'ViT-L (fine-tuned)', auc: 0.934, task: 'CT Nódulos', color: '#f97316' },
    { name: 'Med-SAM', auc: 0.961, task: 'Segmentação (IoU)', color: '#f97316' },
    { name: 'BioViL-T', auc: 0.947, task: 'Radiografia + texto', color: '#f97316' },
    { name: 'Radiologista médio', auc: 0.876, task: 'Referência humana', color: '#f97316' },
  ];
  const maxW = 380;
  const barH = 28, gap = 14, leftPad = 185, baseY = 45;

  return (
    <svg viewBox="0 0 760 320" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="380" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Comparação de Modelos — AUC / IoU em Imagem Médica</text>
      {[0.7, 0.8, 0.9, 1.0].map(v => {
        const x = leftPad + (v - 0.7) / 0.3 * maxW;
        return (
          <g key={v}>
            <line x1={x} y1={36} x2={x} y2={baseY + models.length * (barH + gap) + 10} stroke="var(--text-secondary)" strokeWidth="0.8" strokeDasharray="3 3" />
            <text x={x} y={32} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{v.toFixed(1)}</text>
          </g>
        );
      })}
      {/* Radiologist reference */}
      {(() => {
        const refX = leftPad + (0.876 - 0.7) / 0.3 * maxW;
        return <line x1={refX} y1={36} x2={refX} y2={baseY + models.length * (barH + gap)} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 3" />;
      })()}
      {models.map((m, i) => {
        const w = ((m.auc - 0.7) / 0.3) * maxW;
        const y = baseY + i * (barH + gap);
        return (
          <g key={m.name}>
            <text x={leftPad - 8} y={y + barH / 2 + 4} textAnchor="end" fontSize="10" fontWeight="600" fill={m.color}>{m.name}</text>
            <rect x={leftPad} y={y} width={w} height={barH} rx="4" fill={m.color} fillOpacity="0.75" stroke={m.name.includes('Radiolog') ? m.color : 'none'} strokeWidth={m.name.includes('Radiolog') ? 1.5 : 0} strokeDasharray={m.name.includes('Radiolog') ? '5 3' : undefined} />
            <text x={leftPad + w + 6} y={y + barH / 2 + 4} fontSize="11" fontWeight="700" fill={m.color}>{m.auc.toFixed(3)}</text>
            <text x={leftPad + w + 65} y={y + barH / 2 + 4} fontSize="9" fill="var(--text-secondary)">{m.task}</text>
          </g>
        );
      })}
      <text x="380" y="312" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">AUC = Area Under ROC Curve | IoU = Intersection over Union | Valores representativos de literatura 2022-2024</text>
    </svg>
  );
}

function UNetArchitectureSVG() {
  const c = '#f97316';
  // Encoder: left column, top to bottom
  const enc = [
    { label: 'Input 572×572',         y: 50  },
    { label: 'Conv + MaxPool ÷2',     y: 110 },
    { label: 'Conv + MaxPool ÷2',     y: 170 },
    { label: 'Bottleneck 28×28',      y: 230 },
  ];
  // Decoder: right column, bottom to top (mirror)
  const dec = [
    { label: 'UpConv + Skip',         y: 230 },
    { label: 'UpConv + Skip',         y: 170 },
    { label: 'Output 388×388',        y: 110 },
  ];
  const eX = 60, eW = 180, dX = 480, dW = 180, bH = 36;

  return (
    <svg viewBox="0 0 720 330" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <defs>
        <marker id="arrowU2" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#6b7280" />
        </marker>
        <marker id="arrowSkip2" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill={c} />
        </marker>
      </defs>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={c}>Arquitectura U-Net — Encoder-Decoder com Skip Connections</text>
      <text x={eX + eW / 2} y="42" textAnchor="middle" fontSize="11" fontWeight="700" fill={c}>Encoder</text>
      <text x={dX + dW / 2} y="42" textAnchor="middle" fontSize="11" fontWeight="700" fill={c}>Decoder</text>

      {/* Encoder boxes + arrows down */}
      {enc.map((l, i) => (
        <g key={i}>
          <rect x={eX} y={l.y} width={eW} height={bH} rx="6" fill={c} fillOpacity="0.13" stroke={c} strokeWidth="1.5" />
          <text x={eX + eW / 2} y={l.y + 22} textAnchor="middle" fontSize="10" fill={c}>{l.label}</text>
          {i < enc.length - 1 && (
            <line x1={eX + eW / 2} y1={l.y + bH} x2={eX + eW / 2} y2={enc[i+1].y} stroke={c} strokeWidth="1.5" markerEnd="url(#arrowU2)" />
          )}
        </g>
      ))}

      {/* Decoder boxes + arrows up */}
      {dec.map((l, i) => (
        <g key={i}>
          <rect x={dX} y={l.y} width={dW} height={bH} rx="6" fill={c} fillOpacity="0.13" stroke={c} strokeWidth="1.5" />
          <text x={dX + dW / 2} y={l.y + 22} textAnchor="middle" fontSize="10" fill={c}>{l.label}</text>
          {i < dec.length - 1 && (
            <line x1={dX + dW / 2} y1={l.y} x2={dX + dW / 2} y2={dec[i+1].y + bH} stroke={c} strokeWidth="1.5" markerEnd="url(#arrowU2)" />
          )}
        </g>
      ))}

      {/* Bottleneck → first decoder (horizontal) */}
      <line x1={eX + eW} y1={230 + bH / 2} x2={dX} y2={230 + bH / 2} stroke={c} strokeWidth="1.5" markerEnd="url(#arrowU2)" />

      {/* Skip connections: curved lines from encoder right edge to decoder left edge */}
      {[0, 1, 2].map(i => {
        const ey = enc[i].y + bH / 2;
        const dy = dec[2 - i].y + bH / 2;
        const midX = 360;
        return (
          <path key={i}
            d={`M${eX + eW} ${ey} C${midX} ${ey}, ${midX} ${dy}, ${dX} ${dy}`}
            stroke={c} strokeWidth="1.2" fill="none" strokeDasharray="5 3" markerEnd="url(#arrowSkip2)"
          />
        );
      })}

      <rect x="200" y="285" width="14" height="12" rx="2" fill={c} />
      <text x="218" y="296" fontSize="11" fill={c}>Skip Connections — preservam resolução espacial alta do encoder no decoder</text>
      <text x="360" y="318" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">U-Net (Ronneberger 2015) — padrão de facto em segmentação médica | nnU-Net auto-configura hiperparâmetros por dataset</text>
    </svg>
  );
}

function ImagingModalitiesSVG() {
  const modalities = [
    { name: 'X-ray', dim: '2D', res: '2048²', apps: ['Pneumonia', 'Fraturas', 'Pneumotórax'], color: '#f97316' },
    { name: 'CT', dim: '3D', res: '512²×500', apps: ['Nódulos', 'COVID', 'AVC'], color: '#f97316' },
    { name: 'MRI', dim: '3D multi', res: '256²×150', apps: ['Tumores', 'EM', 'Demência'], color: '#f97316' },
    { name: 'US', dim: '2D/3D', res: 'variável', apps: ['Cardio fetal', 'Tiróide'], color: '#f97316' },
    { name: 'Histol.', dim: '2D gigapx', res: '100k²', apps: ['Grau tumoral', 'Mutações'], color: '#f97316' },
  ];

  return (
    <svg viewBox="0 0 720 250" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Modalidades de Imagem Médica — Características e Aplicações IA</text>
      {modalities.map((m, i) => {
        const x = 30 + i * 138;
        return (
          <g key={m.name}>
            <rect x={x} y={35} width={120} height={185} rx="8" fill={m.color} fillOpacity="0.08" stroke={m.color} strokeWidth="1.5" />
            <rect x={x} y={35} width={120} height={34} rx="8" fill={m.color} fillOpacity="0.3" />
            <text x={x + 60} y={57} textAnchor="middle" fontSize="13" fontWeight="800" fill={m.color}>{m.name}</text>
            <text x={x + 60} y={84} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{m.dim}</text>
            <text x={x + 60} y={100} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{m.res}</text>
            <rect x={x + 22} y={110} width={76} height={16} rx="4" fill={m.color} fillOpacity="0.15" />
            <text x={x + 60} y={122} textAnchor="middle" fontSize="9" fontWeight="600" fill={m.color}>DICOM</text>
            {m.apps.map((a, ai) => (
              <g key={ai}>
                <circle cx={x + 14} cy={144 + ai * 20} r="3" fill={m.color} />
                <text x={x + 22} y={148 + ai * 20} fontSize="9" fill="var(--text-primary)">{a}</text>
              </g>
            ))}
          </g>
        );
      })}
      <text x="360" y="236" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Todas as modalidades partilham o formato DICOM | PACS = Picture Archiving and Communication System</text>
    </svg>
  );
}

function FoundationModelsSVG() {
  const models = [
    { name: 'Med-SAM', base: 'SAM (Meta)', trained: '1.5M máscaras, 10 modal.', cap: 'Segmentação zero-shot', color: '#f97316' },
    { name: 'BioViL-T', base: 'ViT + BERT', trained: 'MIMIC-CXR pares imagem-texto', cap: 'Localização por texto', color: '#f97316' },
    { name: 'BioMedCLIP', base: 'CLIP (OpenAI)', trained: '15M pares PubMed + imagem', cap: 'Few-shot, retrieval', color: '#f97316' },
    { name: 'Med-PaLM M', base: 'PaLM 2 (Google)', trained: 'MultiMedBench 14 tarefas', cap: 'QA, VQA, relatórios', color: '#f97316' },
  ];

  return (
    <svg viewBox="0 0 720 260" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Foundation Models em Imagem Médica — 2023–2025</text>
      {models.map((m, i) => {
        const x = 20 + i * 174;
        return (
          <g key={m.name}>
            <rect x={x} y={38} width={155} height={185} rx="8" fill={m.color} fillOpacity="0.08" stroke={m.color} strokeWidth="1.5" />
            <rect x={x} y={38} width={155} height={30} rx="8" fill={m.color} fillOpacity="0.3" />
            <text x={x + 78} y={58} textAnchor="middle" fontSize="12" fontWeight="800" fill={m.color}>{m.name}</text>
            <text x={x + 12} y={86} fontSize="10" fontWeight="600" fill="var(--text-secondary)">Base:</text>
            <text x={x + 12} y={102} fontSize="9" fill="var(--text-primary)">{m.base}</text>
            <text x={x + 12} y={124} fontSize="10" fontWeight="600" fill="var(--text-secondary)">Treino:</text>
            <text x={x + 12} y={140} fontSize="9" fill="var(--text-primary)">{m.trained}</text>
            <text x={x + 12} y={162} fontSize="10" fontWeight="600" fill="var(--text-secondary)">Capacidade:</text>
            <text x={x + 12} y={178} fontSize="9" fill={m.color} fontWeight="600">{m.cap}</text>
          </g>
        );
      })}
      <text x="360" y="246" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Foundation Models generalizam entre modalidades com poucos exemplos de fine-tuning — paradigma dominante 2024+</text>
    </svg>
  );
}

export default function AIH2() {
  return (
    <div style={S.page}>
      <Link to="/ai-health" style={S.back}><ArrowLeft size={16} /> IA em Saúde</Link>
      <div style={S.tag}>Module 02</div>
      <h1 style={S.h1}>Medical Imaging</h1>
      <p style={S.lead}>
        O diagnóstico por imagem é a área onde a IA em saúde alcançou os avanços mais visíveis. Neste
        módulo estudamos as modalidades de imagem médica, as arquitecturas CNN para classificação,
        os modelos de segmentação semântica, os detectores de objectos e os foundation models que
        estão a redefinir o estado da arte.
      </p>

      <section style={S.section}>
        <h2 style={S.h2}>1. Modalidades de Imagem Médica</h2>
        <ImagingModalitiesSVG />
        <p style={S.p}>
          Cada modalidade captura informação fisiológica distinta e impõe desafios técnicos próprios
          para os modelos de IA. O formato universal é o DICOM (Digital Imaging and Communications
          in Medicine), que encapsula a imagem e metadados clínicos num único ficheiro estruturado.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modalidade</th><th style={S.th}>Dimensão</th>
              <th style={S.th}>Resolução típica</th><th style={S.th}>Aplicação IA</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Radiografia (X-ray)', '2D', '2048 × 2048 px', 'Pneumonia, pneumotórax, fracturas'],
              ['Tomografia (CT)', '3D (volumes)', '512 × 512 × 300–600 slices', 'Nódulos pulmonares, COVID-19'],
              ['Ressonância (MRI)', '3D multi-contrast', '256 × 256 × 150 slices', 'Tumores cerebrais, esclerose múltipla'],
              ['Ultrassom', '2D/3D, real-time', 'Variável, baixa SNR', 'Cardiopatia fetal, nódulos tiróide'],
              ['Histopatologia (WSI)', '2D gigapixel', '100 000 × 100 000 px', 'Grau tumoral, mutações'],
            ].map(([a, b, c, d]) => (
              <tr key={a}><td style={S.td}>{a}</td><td style={S.td}>{b}</td><td style={S.td}>{c}</td><td style={S.td}>{d}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>2. CNNs para Classificação</h2>
        <ModelPerformanceSVG />
        <h3 style={S.h3}>Transfer Learning e Arquitecturas</h3>
        <p style={S.p}>
          As Convolutional Neural Networks (CNNs) são a arquitectura dominante para classificação de
          imagem médica. A abordagem padrão usa transfer learning a partir de modelos pré-treinados no
          ImageNet, fine-tuned em datasets clínicos tipicamente pequenos (1 000–100 000 imagens).
        </p>
        <div style={S.highlight}>
          <strong>CheXNet</strong> (Stanford, 2017): ResNet-121 treinado no dataset ChestX-ray14 da NIH
          (112 000 radiografias). Superou a performance média de radiologistas em 14 patologias torácicas.
          Iniciou a corrida ao desenvolvimento de IA para diagnóstico radiológico. Limitação: avaliado
          num único dataset; performance degradou-se em datasets externos.
        </div>
        <p style={S.p}>
          <strong>EfficientNet</strong> usa compound scaling para balancear profundidade, largura e
          resolução. Em dermatologia, modelos baseados em EfficientNet atingem performance de especialista
          na classificação de lesões cutâneas (HAM10000 dataset).
        </p>
        <p style={S.p}>
          <strong>Vision Transformers (ViT)</strong> estão a substituir CNNs em tarefas com grandes
          datasets. A arquitectura de atenção global captura relações de longo alcance na imagem —
          útil para detectar padrões difusos em TC torácica ou lesões dispersas em MRI cerebral.
        </p>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>3. Segmentação</h2>
        <UNetArchitectureSVG />
        <h3 style={S.h3}>U-Net, nnU-Net e Mask R-CNN</h3>
        <p style={S.p}>
          A segmentação semântica delimita estruturas anatómicas ou lesões ao nível do pixel/voxel —
          essencial para planeamento cirúrgico, radioterapia e quantificação de volume tumoral.
        </p>
        <div style={S.highlight}>
          <strong>U-Net</strong> (Ronneberger et al., 2015): arquitectura encoder-decoder com skip
          connections que preservam informação espacial de alta resolução. Tornou-se o padrão de facto
          para segmentação médica 2D. Adaptações 3D (V-Net, 3D U-Net) para volumes CT/MRI.
        </div>
        <div style={S.highlight}>
          <strong>nnU-Net</strong>: framework auto-configurável que adapta automaticamente a arquitectura,
          pré-processamento e estratégia de treino. Dominou o Medical Segmentation Decathlon (10 tarefas)
          e tornou-se a baseline de referência.
        </div>
        <div style={S.highlight}>
          <strong>Mask R-CNN</strong>: útil quando múltiplas instâncias da mesma classe estão presentes
          — ex.: segmentação de células individuais em histopatologia ou de múltiplos pólipos em colonoscopia.
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>4. Detecção de Lesões</h2>
        <p style={S.p}>
          A detecção de objectos localiza e classifica lesões com bounding boxes, sendo adequada quando
          a forma exacta da lesão não é necessária mas a sua localização e presença/ausência são críticas.
        </p>
        <p style={S.p}>
          <strong>YOLO (You Only Look Once)</strong> processa a imagem numa única passagem forward,
          adequado para inferência em tempo real. YOLOv8 e RT-DETR são usados para detecção de pólipos
          em colonoscopia em tempo real durante o exame.
        </p>
        <p style={S.p}>
          <strong>Faster R-CNN</strong> usa uma Region Proposal Network (RPN) para gerar candidatos
          de lesão. Mais lento que YOLO mas tipicamente mais preciso em cenários com lesões pequenas
          — nódulos pulmonares de 3–6 mm em TC, microaneurismas retinianos em fundo ocular.
        </p>
        <div style={S.note}>
          Métricas chave em detecção médica: sensibilidade (recall) tem prioridade sobre especificidade
          em rastreio. False Negatives têm custos clínicos muito superiores a False Positives.
          Free-Response ROC (FROC) é a métrica padrão em detecção de nódulos.
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>5. Foundation Models em Imagem Médica</h2>
        <FoundationModelsSVG />
        <h3 style={S.h3}>Med-SAM, BioViL e CLIP Médico</h3>
        <p style={S.p}>
          Os foundation models pré-treinados em grandes corpora de imagem + texto estão a redefinir
          o que é possível com dados limitados de fine-tuning.
        </p>
        <div style={S.highlight}>
          <strong>Med-SAM:</strong> adaptação do Segment Anything Model (SAM) da Meta para imagem médica.
          Treinado em 1.5 M pares imagem-máscara de 10 modalidades médicas. Permite segmentação
          interactiva zero-shot usando prompts de pontos ou bounding boxes.
        </div>
        <div style={S.highlight}>
          <strong>BioViL / BioViL-T:</strong> modelos visão-linguagem da Microsoft Research treinados
          em pares (radiografia, relatório) do MIMIC-CXR. Dado o texto "opacidade no lobo inferior direito",
          o modelo localiza a região na radiografia sem supervisão de segmentação explícita.
        </div>
        <div style={S.highlight}>
          <strong>CLIP em imagem médica:</strong> BioMedCLIP e PMC-CLIP aprendem representações conjuntas
          de imagem e texto clínico. Utilizado em pesquisa por similaridade, few-shot classification e
          geração de relatórios radiológicos automáticos.
        </div>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>6. Síntese do Módulo</h2>
        <div style={S.note}>
          A imagem médica percorreu o caminho de modelos específicos (CheXNet, EfficientNet)
          para architecturas especializadas (U-Net, nnU-Net) e foundation models (Med-SAM, BioViL) que
          generalizam entre modalidades. O desafio central permanece: validação externa rigorosa em
          populações sub-representadas nos dados de treino.
        </div>
      </section>
    </div>
  );
}
