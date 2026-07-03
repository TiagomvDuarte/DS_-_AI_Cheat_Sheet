import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

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
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
};

// ---- Diagram: Quantization scale/zero-point mapping ----
const QuantizationDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Mapear FP32 → INT8 (afim, com zero-point)</p>
    <svg viewBox="0 0 560 170" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="qarr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      {/* FP32 line */}
      <line x1="40" y1="40" x2="520" y2="40" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="20" y="44" textAnchor="end" fill="var(--text-secondary)" fontSize="11">FP32</text>
      {[
        [40, '-2.40'],
        [180, '-0.80'],
        [320, '0.60'],
        [460, '2.00'],
      ].map(([x, label], i) => (
        <g key={i}>
          <circle cx={x} cy="40" r="4" fill={color} />
          <text x={x} y="28" textAnchor="middle" fill={color} fontSize="10">{label}</text>
        </g>
      ))}

      {/* Mapping arrows */}
      {[40, 180, 320, 460].map((x, i) => (
        <line key={i} x1={x} y1="48" x2={x} y2="100" stroke={color} strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#qarr)" opacity="0.6" />
      ))}

      {/* INT8 line */}
      <line x1="40" y1="130" x2="520" y2="130" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="20" y="134" textAnchor="end" fill="var(--text-secondary)" fontSize="11">INT8</text>
      {[
        [40, '-128'],
        [180, '-43'],
        [320, '32'],
        [460, '107'],
      ].map(([x, label], i) => (
        <g key={i}>
          <circle cx={x} cy="130" r="4" fill="#f97316" />
          <text x={x} y="150" textAnchor="middle" fill="#f97316" fontSize="10">{label}</text>
        </g>
      ))}
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      O intervalo contínuo de valores FP32 [min, max] é mapeado linearmente para o intervalo discreto
      de inteiros INT8 [-128, 127], usando uma <strong>escala</strong> (tamanho do "degrau") e um
      {' '}<strong>zero-point</strong> (o inteiro que representa exactamente o valor 0.0).
    </p>
  </div>
);

// ---- Diagram: PTQ vs QAT workflow ----
const PTQvsQATDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>PTQ vs QAT — fluxos de trabalho</p>
    <svg viewBox="0 0 600 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="parrG" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
        <marker id="parrP" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
      </defs>

      {/* PTQ row */}
      <text x="8" y="42" fill="#f97316" fontSize="12" fontWeight="700">PTQ</text>
      {[
        [100, 'Modelo\ntreinado (FP32)'],
        [240, 'Calibração\n(pequeno dataset)'],
        [380, 'Quantizar\npesos/activações'],
        [520, 'Modelo\nINT8 pronto'],
      ].map(([cx, label], i) => (
        <g key={i}>
          <rect x={cx - 60} y="10" width="120" height="50" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
          {label.split('\n').map((l, li) => (
            <text key={li} x={cx} y={32 + li * 14} textAnchor="middle" fill="#f97316" fontSize="10" fontWeight={li === 0 ? '700' : '400'}>{l}</text>
          ))}
        </g>
      ))}
      {[160, 300, 440].map((x, i) => (
        <line key={i} x1={x} y1="35" x2={x + 20} y2="35" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#parrG)" />
      ))}

      {/* QAT row */}
      <text x="8" y="142" fill="#f97316" fontSize="12" fontWeight="700">QAT</text>
      {[
        [100, 'Modelo\ntreinado (FP32)'],
        [240, 'Inserir "fake\nquant" nodes'],
        [380, 'Re-treinar /\nfine-tune'],
        [520, 'Converter para\nINT8 real'],
      ].map(([cx, label], i) => (
        <g key={i}>
          <rect x={cx - 60} y="110" width="120" height="50" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
          {label.split('\n').map((l, li) => (
            <text key={li} x={cx} y={132 + li * 14} textAnchor="middle" fill="#f97316" fontSize="10" fontWeight={li === 0 ? '700' : '400'}>{l}</text>
          ))}
        </g>
      ))}
      {[160, 300, 440].map((x, i) => (
        <line key={i} x1={x} y1="135" x2={x + 20} y2="135" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#parrP)" />
      ))}

      <text x="280" y="190" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">
        QAT simula o erro de quantização durante o treino → maior accuracy em baixa precisão, mas custa tempo de treino
      </text>
    </svg>
  </div>
);

// ---- Diagram: structured vs unstructured pruning ----
const PruningDiagram = () => {
  const grid = [
    [1, 1, 0, 1],
    [0, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
  ];
  const cell = 28;
  const renderGrid = (matrix, removedCols = []) => (
    <svg viewBox={`0 0 ${cell * 4 + 10} ${cell * 4 + 10}`} style={{ width: 130, height: 130 }}>
      {matrix.map((row, r) => row.map((v, c) => {
        const colRemoved = removedCols.includes(c);
        const active = v === 1 && !colRemoved;
        return (
          <rect
            key={`${r}-${c}`}
            x={c * cell + 5}
            y={r * cell + 5}
            width={cell - 3}
            height={cell - 3}
            rx="3"
            fill={active ? color : colRemoved ? 'rgba(249,115,22,0.08)' : 'rgba(255,255,255,0.06)'}
            stroke={colRemoved ? '#f97316' : active ? 'none' : 'rgba(255,255,255,0.15)'}
            strokeWidth={colRemoved ? 1.5 : 1}
            strokeDasharray={colRemoved ? '3,2' : 'none'}
            opacity={1}
          />
        );
      }))}
    </svg>
  );
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Pruning não-estruturado vs estruturado</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', alignItems: 'start' }}>
        <div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Original</div>
          {renderGrid(grid)}
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>Matriz de pesos densa (16 valores)</p>
        </div>
        <div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f97316', marginBottom: '0.5rem' }}>Não-estruturado</div>
          {renderGrid([
            [1, 0, 0, 1],
            [0, 1, 1, 0],
            [1, 0, 0, 1],
            [1, 1, 0, 0],
          ])}
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>Pesos individuais a zero — esparsidade irregular, requer hardware sparse</p>
        </div>
        <div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f97316', marginBottom: '0.5rem' }}>Estruturado</div>
          {renderGrid(grid, [2])}
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>Coluna inteira (canal/neurónio) removida — matriz menor, denso, hardware-friendly</p>
        </div>
      </div>
    </div>
  );
};

// ---- Diagram: teacher-student distillation ----
const DistillationDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Knowledge Distillation — Teacher → Student</p>
    <svg viewBox="0 0 560 220" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="darr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>

      {/* Input */}
      <rect x="10" y="85" width="80" height="40" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.2" />
      <text x="50" y="109" textAnchor="middle" fill="var(--text-secondary)" fontSize="11">Input x</text>

      {/* Teacher */}
      <rect x="140" y="20" width="160" height="60" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="220" y="45" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">Teacher (grande)</text>
      <text x="220" y="62" textAnchor="middle" fill="#f97316" fontSize="9">já treinado, congelado</text>

      {/* Student */}
      <rect x="140" y="140" width="160" height="60" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="220" y="165" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Student (pequeno)</text>
      <text x="220" y="182" textAnchor="middle" fill={color} fontSize="9">a treinar</text>

      <line x1="90" y1="100" x2="135" y2="60" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#darr)" />
      <line x1="90" y1="110" x2="135" y2="165" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#darr)" />

      {/* Soft labels output */}
      <rect x="350" y="20" width="190" height="60" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />
      <text x="445" y="42" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Soft labels (T&gt;1)</text>
      <text x="445" y="58" textAnchor="middle" fill="#f97316" fontSize="9">gato:0.7 leopardo:0.2 cão:0.1</text>
      <line x1="300" y1="50" x2="345" y2="50" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#darr)" />

      {/* Hard labels */}
      <rect x="350" y="140" width="190" height="60" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" strokeDasharray="3,2" />
      <text x="445" y="162" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Hard labels (ground truth)</text>
      <text x="445" y="178" textAnchor="middle" fill={color} fontSize="9">gato:1 leopardo:0 cão:0</text>

      {/* Loss combining */}
      <line x1="445" y1="80" x2="445" y2="105" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="2,2" />
      <line x1="445" y1="140" x2="445" y2="115" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="2,2" />
      <ellipse cx="445" cy="110" rx="46" ry="14" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="445" y="114" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="700">Loss combinada</text>
      <line x1="399" y1="110" x2="305" y2="160" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="2,2" markerEnd="url(#darr)" />
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      O student recebe o mesmo input que o teacher e é treinado para se aproximar simultaneamente das
      soft labels (distribuição suavizada do teacher) e das hard labels (verdade-terreno).
    </p>
  </div>
);

// ---- Diagram: standard conv vs depthwise separable conv ----
const ConvDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Convolução standard vs depthwise separable</p>
    <svg viewBox="0 0 660 190" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="carr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
        </marker>
      </defs>

      {/* Standard conv */}
      <text x="10" y="22" fill="#f97316" fontSize="12" fontWeight="700">Standard 3×3 conv</text>
      <rect x="20" y="35" width="60" height="60" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="50" y="62" textAnchor="middle" fill="#f97316" fontSize="10">Input</text>
      <text x="50" y="78" textAnchor="middle" fill="#f97316" fontSize="9">C_in canais</text>
      <line x1="80" y1="65" x2="115" y2="65" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#carr)" />
      <rect x="120" y="35" width="80" height="60" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="160" y="58" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Filtro 3×3×C_in</text>
      <text x="160" y="74" textAnchor="middle" fill="#f97316" fontSize="9">×C_out filtros</text>
      <line x1="200" y1="65" x2="235" y2="65" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#carr)" />
      <rect x="240" y="35" width="60" height="60" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="270" y="62" textAnchor="middle" fill="#f97316" fontSize="10">Output</text>
      <text x="270" y="78" textAnchor="middle" fill="#f97316" fontSize="9">C_out canais</text>
      <text x="430" y="65" fill="var(--text-secondary)" fontSize="10">Custo ∝ C_in × C_out × 9</text>

      {/* Depthwise separable */}
      <text x="10" y="125" fill="#f97316" fontSize="12" fontWeight="700">Depthwise separable</text>
      <rect x="20" y="138" width="60" height="42" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="50" y="162" textAnchor="middle" fill="#f97316" fontSize="10">Input</text>
      <line x1="80" y1="159" x2="110" y2="159" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#carr)" />
      <rect x="115" y="138" width="75" height="42" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="152" y="156" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Depthwise 3×3</text>
      <text x="152" y="170" textAnchor="middle" fill="#f97316" fontSize="8">1 filtro/canal</text>
      <line x1="190" y1="159" x2="220" y2="159" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#carr)" />
      <rect x="225" y="138" width="75" height="42" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="262" y="156" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Pointwise 1×1</text>
      <text x="262" y="170" textAnchor="middle" fill="#f97316" fontSize="8">combina canais</text>
      <line x1="300" y1="159" x2="330" y2="159" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#carr)" />
      <rect x="335" y="138" width="60" height="42" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="365" y="162" textAnchor="middle" fill="#f97316" fontSize="10">Output</text>
      <text x="430" y="159" fill="var(--text-secondary)" fontSize="10">Custo ∝ C_in×9 + C_in×C_out</text>
    </svg>
  </div>
);

// ---- Diagram: edge deployment pipeline ----
const PipelineDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Pipeline de deployment para edge</p>
    <svg viewBox="0 0 600 130" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="earr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      {[
        [75, 'Modelo\ntreinado (FP32)', 'rgba(249,115,22,0.10)', '#f97316'],
        [225, 'Compressão\n(quant + pruning + distil)', 'rgba(249,115,22,0.10)', color],
        [375, 'Exportar\nformato optimizado', 'rgba(249,115,22,0.10)', '#f97316'],
        [525, 'Deploy\nno edge device', 'rgba(249,115,22,0.10)', '#f97316'],
      ].map(([cx, label, bg, col], i) => (
        <g key={i}>
          <rect x={cx - 65} y="35" width="130" height="60" rx="10" fill={bg} stroke={col} strokeWidth="1.2" />
          {label.split('\n').map((l, li) => (
            <text key={li} x={cx} y={60 + li * 16} textAnchor="middle" fill={col} fontSize="11" fontWeight={li === 0 ? '700' : '400'}>{l}</text>
          ))}
        </g>
      ))}
      <line x1="140" y1="65" x2="160" y2="65" stroke={color} strokeWidth="1.5" markerEnd="url(#earr)" />
      <line x1="290" y1="65" x2="310" y2="65" stroke={color} strokeWidth="1.5" markerEnd="url(#earr)" />
      <line x1="440" y1="65" x2="460" y2="65" stroke={color} strokeWidth="1.5" markerEnd="url(#earr)" />
      <text x="300" y="118" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">
        Cada etapa pode introduzir perda de accuracy — validar sempre no hardware-alvo
      </text>
    </svg>
  </div>
);

export default function DL10() {
  return (
    <div style={S.page}>
      <Link to="/dl" style={S.back}><ArrowLeft size={16} /> Voltar a Deep Learning</Link>

      <div style={S.tag}>Module 10</div>
      <h1 style={S.h1}>Efficient Deep Learning</h1>
      <p style={S.lead}>
        Os modelos de deep learning mais capazes são também os mais pesados — centenas de milhões a
        milhares de milhões de parâmetros, gigabytes de memória, segundos de latência por inferência.
        Mas a maior parte do mundo real não corre em data centers: corre em telemóveis, sensores,
        carros e microcontroladores com orçamentos de memória, energia e latência muito apertados.
        Este módulo explora as quatro grandes famílias de técnicas que tornam modelos mais pequenos,
        rápidos e baratos sem sacrificar (muito) a sua capacidade: <strong>quantização</strong>,
        {' '}<strong>pruning</strong>, <strong>knowledge distillation</strong> e <strong>arquitecturas
        eficientes (TinyML)</strong> — e como combiná-las num pipeline de deployment para edge.
      </p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Porquê a Eficiência Importa</h2>
        <p style={S.p}>
          Um modelo treinado num cluster de GPUs com dezenas de gigabytes de VRAM raramente pode ser
          usado tal e qual num telemóvel ou num dispositivo embebido. As restrições de deployment
          mudam radicalmente o que é "bom o suficiente": já não importa apenas a accuracy no
          benchmark, mas também o tamanho do ficheiro do modelo, a latência por inferência, o
          consumo de energia (crítico em dispositivos com bateria) e o espaço em RAM disponível
          durante a execução.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Característica</th>
                <th style={S.th}>Modelo de servidor (ex: ResNet-152, BERT-large)</th>
                <th style={S.th}>Modelo edge/mobile (ex: MobileNetV3, DistilBERT INT8)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={S.td}>Tamanho em disco</td><td style={S.td}>~230 MB – 1.3 GB</td><td style={S.td}>1 – 20 MB</td></tr>
              <tr><td style={S.td}>Memória RAM durante inferência</td><td style={S.td}>vários GB</td><td style={S.td}>&lt; 50 MB</td></tr>
              <tr><td style={S.td}>Latência por inferência</td><td style={S.td}>10–100 ms (GPU dedicada)</td><td style={S.td}>1–30 ms (CPU/NPU móvel)</td></tr>
              <tr><td style={S.td}>Consumo energético</td><td style={S.td}>centenas de watts (GPU)</td><td style={S.td}>miliwatts a poucos watts</td></tr>
              <tr><td style={S.td}>Hardware típico</td><td style={S.td}>NVIDIA A100/H100, TPU pods</td><td style={S.td}>SoC móvel, NPU, microcontrolador</td></tr>
              <tr><td style={S.td}>Conectividade necessária</td><td style={S.td}>Sempre online (cloud)</td><td style={S.td}>Pode correr offline</td></tr>
            </tbody>
          </table>
        </div>
        <div style={S.highlight}>
          <strong>Quatro restrições, quatro famílias de técnicas:</strong> quando um destes recursos
          — memória, computação, energia ou largura de banda — é o gargalo, recorremos a
          <strong> quantização</strong> (menos bits por número), <strong>pruning</strong> (menos
          parâmetros), <strong>distillation</strong> (modelo mais pequeno desde o início, treinado
          por imitação) e <strong>arquitecturas eficientes</strong> (operações desenhadas para
          serem baratas). Na prática, estas técnicas combinam-se.
        </div>
        <p style={S.p}>
          Para além dos benefícios técnicos, há um argumento de <strong>democratização e
          privacidade</strong>: modelos eficientes correm localmente, sem enviar dados sensíveis
          para servidores externos, funcionam em zonas sem internet e reduzem drasticamente o custo
          operacional de servir milhões de utilizadores.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Quantização — Menos Bits por Número</h2>
        <p style={S.p}>
          Por defeito, os pesos e activações de uma rede neuronal são guardados como números de
          vírgula flutuante de 32 bits (FP32) — 4 bytes por valor. A quantização representa estes
          valores com menos bits: INT8 usa 1 byte (4× menos memória), INT4 usa apenas meio byte
          (8× menos memória). Para além da poupança de memória, operações com inteiros são
          tipicamente mais rápidas e consomem menos energia em CPUs, NPUs e aceleradores móveis.
        </p>

        <h3 style={S.h3}>2.1 Quantização afim: escala e zero-point</h3>
        <p style={S.p}>
          A forma mais comum de quantização é a <strong>quantização afim (linear)</strong>: um
          intervalo contínuo de valores reais <InlineMath math="[\beta_{min}, \beta_{max}]" /> é
          mapeado para um intervalo discreto de inteiros (ex: <InlineMath math="[-128, 127]" /> em
          INT8). A relação é dada por uma <strong>escala</strong> <InlineMath math="s" /> e um
          {' '}<strong>zero-point</strong> <InlineMath math="z" />:
        </p>
        <div style={S.math}>
          <BlockMath math={`q = \\text{round}\\left(\\frac{r}{s}\\right) + z \\qquad\\qquad s = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}`} />
        </div>
        <p style={S.p}>
          onde <InlineMath math="r" /> é o valor real (FP32) e <InlineMath math="q" /> é o valor
          inteiro quantizado. Para reconstruir uma aproximação do valor original
          (<strong>dequantização</strong>):
        </p>
        <div style={S.math}>
          <BlockMath math={`\\hat{r} = (q - z) \\times s`} />
        </div>

        <QuantizationDiagram />

        <h3 style={S.h3}>2.2 Exemplo numérico — quantizar e dequantizar</h3>
        <p style={S.p}>
          Considere um vector de pesos FP32: <InlineMath math="[-2.40, -0.80, 0.60, 2.00]" />.
          O valor mínimo é -2.40 e o máximo é 2.00. Para INT8 simétrico em torno de zero usamos
          o intervalo <InlineMath math="[-128, 127]" />. Calculamos a escala:
        </p>
        <div style={S.math}>
          <BlockMath math={`s = \\frac{2.00 - (-2.40)}{127 - (-128)} = \\frac{4.40}{255} \\approx 0.01725`} />
        </div>
        <p style={S.p}>
          Com zero-point <InlineMath math="z \approx -19" /> (de forma a que 0.0 caia exactamente
          num inteiro), obtemos a seguinte tabela de quantização/dequantização:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Peso original (FP32)</th>
                <th style={S.th}>q = round(r/s) + z (INT8)</th>
                <th style={S.th}>r̂ = (q − z) × s (dequantizado)</th>
                <th style={S.th}>Erro absoluto</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={S.td}>-2.40</td><td style={S.td}>-128</td><td style={S.td}>-2.4015</td><td style={S.td}>0.0015</td></tr>
              <tr><td style={S.td}>-0.80</td><td style={S.td}>-65</td><td style={S.td}>-0.7935</td><td style={S.td}>0.0065</td></tr>
              <tr><td style={S.td}>0.60</td><td style={S.td}>16</td><td style={S.td}>0.6038</td><td style={S.td}>0.0038</td></tr>
              <tr><td style={S.td}>2.00</td><td style={S.td}>97</td><td style={S.td}>2.0010</td><td style={S.td}>0.0010</td></tr>
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          O erro de quantização por peso é pequeno (na ordem de <InlineMath math="s/2 \approx 0.0086" />),
          mas multiplica-se ao longo de milhões de parâmetros e camadas. Por isso, o intervalo
          [r_min, r_max] usado na calibração é crucial: outliers extremos alargam o intervalo,
          aumentam <InlineMath math="s" /> e degradam a precisão de todos os outros valores.
        </div>

        <h3 style={S.h3}>2.3 Post-Training Quantization (PTQ) vs Quantization-Aware Training (QAT)</h3>
        <p style={S.p}>
          Existem duas estratégias principais para obter um modelo quantizado:
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>PTQ (Post-Training Quantization):</strong> o modelo já está treinado em FP32.
            Passa-se um pequeno conjunto de dados de <em>calibração</em> pelo modelo para medir os
            intervalos típicos de activações e pesos, calculam-se escalas/zero-points, e o modelo
            é convertido — sem qualquer retreino. Rápido (minutos) e simples, funciona bem em INT8.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>QAT (Quantization-Aware Training):</strong> durante o treino (ou fine-tuning),
            insere-se "fake quantization" — simula-se o arredondamento de quantização no forward
            pass, mas os gradientes continuam a fluir em precisão total. O modelo aprende pesos
            que são robustos ao erro de arredondamento. Mais lento (requer (re)treino), mas produz
            resultados muito superiores em precisões agressivas (INT4 e abaixo).
          </li>
        </ul>

        <PTQvsQATDiagram />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Formato</th>
              <th style={S.th}>Bits/parâmetro</th>
              <th style={S.th}>Redução memória vs FP32</th>
              <th style={S.th}>Impacto típico na accuracy</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>FP32</td><td style={S.td}>32</td><td style={S.td}>—</td><td style={S.td}>baseline</td></tr>
            <tr><td style={S.td}>FP16 / BF16</td><td style={S.td}>16</td><td style={S.td}>2×</td><td style={S.td}>negligenciável</td></tr>
            <tr><td style={S.td}>INT8 (PTQ)</td><td style={S.td}>8</td><td style={S.td}>4×</td><td style={S.td}>baixo (&lt; 1%)</td></tr>
            <tr><td style={S.td}>INT4 (QAT)</td><td style={S.td}>4</td><td style={S.td}>8×</td><td style={S.td}>moderado (1–3%)</td></tr>
            <tr><td style={S.td}>INT2 / binário</td><td style={S.td}>1–2</td><td style={S.td}>16–32×</td><td style={S.td}>elevado, depende muito da tarefa</td></tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Pruning — Remover Pesos Redundantes</h2>
        <p style={S.p}>
          Redes neuronais treinadas tendem a ter muita redundância: muitos pesos têm valores
          próximos de zero e contribuem pouco para a saída final. <strong>Pruning</strong> identifica
          e remove estes pesos (ou unidades inteiras), reduzindo o número de parâmetros e,
          potencialmente, a computação necessária.
        </p>

        <PruningDiagram />

        <h3 style={S.h3}>3.1 Pruning não-estruturado</h3>
        <p style={S.p}>
          Remove pesos individuais, independentemente da sua posição na matriz, criando um padrão
          de esparsidade irregular. Pode atingir taxas de esparsidade muito elevadas (90% ou mais)
          com pouca perda de accuracy, mas para obter ganhos reais de velocidade é preciso hardware
          ou bibliotecas com suporte a tensores esparsos — caso contrário a matriz "esparsa" continua
          a ocupar o mesmo espaço e a mesma computação que a densa, apenas com zeros.
        </p>

        <h3 style={S.h3}>3.2 Pruning estruturado</h3>
        <p style={S.p}>
          Remove unidades completas — neurónios inteiros, canais de convolução, cabeças de atenção
          ou camadas. O resultado é uma rede mais pequena mas ainda <em>densa</em>, que corre
          eficientemente em qualquer hardware convencional sem suporte especial. A desvantagem é
          que, para a mesma taxa de compressão, a perda de accuracy tende a ser maior — porque
          remover uma coluna/canal inteiro é uma decisão "tudo ou nada" muito menos granular do
          que remover pesos individuais.
        </p>

        <h3 style={S.h3}>3.3 Exemplo numérico — magnitude pruning</h3>
        <p style={S.p}>
          A heurística de pruning mais simples e surpreendentemente eficaz é remover os pesos com
          menor valor absoluto ("magnitude pruning"). Considere o vector de pesos de um neurónio:
        </p>
        <div style={S.math}>
          <BlockMath math={`w = [\\,0.85,\\ -0.02,\\ 0.41,\\ 0.05,\\ -0.93,\\ 0.11,\\ -0.07,\\ 0.62\\,]`} />
        </div>
        <p style={S.p}>
          Para atingir 50% de esparsidade, ordenamos por valor absoluto e removemos os 4 pesos
          mais próximos de zero:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Peso</th>
                <th style={S.th}>|valor|</th>
                <th style={S.th}>Decisão (50% sparsity)</th>
                <th style={S.th}>Valor após pruning</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={S.td}>w₁ = 0.85</td><td style={S.td}>0.85</td><td style={S.td}>manter</td><td style={S.td}>0.85</td></tr>
              <tr><td style={S.td}>w₂ = -0.02</td><td style={S.td}>0.02</td><td style={S.td}><strong>remover</strong></td><td style={S.td}>0</td></tr>
              <tr><td style={S.td}>w₃ = 0.41</td><td style={S.td}>0.41</td><td style={S.td}>manter</td><td style={S.td}>0.41</td></tr>
              <tr><td style={S.td}>w₄ = 0.05</td><td style={S.td}>0.05</td><td style={S.td}><strong>remover</strong></td><td style={S.td}>0</td></tr>
              <tr><td style={S.td}>w₅ = -0.93</td><td style={S.td}>0.93</td><td style={S.td}>manter</td><td style={S.td}>-0.93</td></tr>
              <tr><td style={S.td}>w₆ = 0.11</td><td style={S.td}>0.11</td><td style={S.td}><strong>remover</strong></td><td style={S.td}>0</td></tr>
              <tr><td style={S.td}>w₇ = -0.07</td><td style={S.td}>0.07</td><td style={S.td}><strong>remover</strong></td><td style={S.td}>0</td></tr>
              <tr><td style={S.td}>w₈ = 0.62</td><td style={S.td}>0.62</td><td style={S.td}>manter</td><td style={S.td}>0.62</td></tr>
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          Os 4 pesos com menor magnitude (-0.02, 0.05, 0.11, -0.07) são zerados, mantendo os 4
          pesos "fortes" (0.85, 0.41, -0.93, 0.62) — uma esparsidade de 50% com impacto mínimo na
          saída do neurónio, já que os pesos removidos contribuíam pouco.
        </p>

        <div style={S.highlight}>
          <strong>Lottery Ticket Hypothesis</strong> (Frankle &amp; Carlin, 2019): dentro de uma rede
          densa inicializada aleatoriamente existe uma sub-rede esparsa ("winning ticket") que,
          treinada isoladamente a partir da mesma inicialização, atinge accuracy comparável à rede
          completa. Isto sugere que grande parte da capacidade de uma rede grande é, de facto,
          redundante mesmo antes do treino.
        </div>

        <p style={S.p}>
          Na prática, o <strong>pruning gradual</strong> (aumentar a esparsidade progressivamente
          ao longo do treino, em vez de cortar tudo de uma vez) seguido de <strong>fine-tuning</strong>
          tende a recuperar a maior parte da accuracy perdida. O ciclo típico é: treinar → podar
          uma fracção dos pesos → fine-tune → repetir até atingir a esparsidade alvo.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Knowledge Distillation — Aprender com um Professor</h2>
        <p style={S.p}>
          A <strong>Knowledge Distillation</strong> (Hinton et al., 2015) treina um modelo pequeno
          (<em>student</em>) para imitar o comportamento de um modelo grande já treinado
          (<em>teacher</em>). Em vez de aprender apenas com as labels duras (0 ou 1), o student
          aprende também com as <strong>soft labels</strong> — a distribuição de probabilidades
          completa que o teacher atribui a cada classe.
        </p>

        <DistillationDiagram />

        <h3 style={S.h3}>4.1 Hard labels vs soft labels — exemplo numérico</h3>
        <p style={S.p}>
          Imagine um classificador de imagens com três classes: <em>gato</em>, <em>leopardo</em> e
          {' '}<em>cão</em>. Para uma imagem de um gato:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Tipo de label</th>
                <th style={S.th}>gato</th>
                <th style={S.th}>leopardo</th>
                <th style={S.th}>cão</th>
                <th style={S.th}>Informação transmitida</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}><strong>Hard label</strong></td>
                <td style={S.td}>1.0</td><td style={S.td}>0.0</td><td style={S.td}>0.0</td>
                <td style={S.td}>"é um gato" — nada mais</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Soft label (teacher)</strong></td>
                <td style={S.td}>0.70</td><td style={S.td}>0.20</td><td style={S.td}>0.10</td>
                <td style={S.td}>"é um gato, mas parece-se mais com um leopardo do que com um cão"</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          As soft labels codificam <strong>relações de similaridade entre classes</strong> que as
          labels duras não conseguem expressar — informação valiosa que o student pode aproveitar
          para aprender uma representação mais rica do espaço das classes.
        </p>

        <h3 style={S.h3}>4.2 Temperatura e a loss de distilação</h3>
        <p style={S.p}>
          A <strong>temperatura T</strong> controla quão "suave" é a distribuição de saída do
          softmax. Com <InlineMath math="T = 1" /> obtemos o softmax habitual; com
          {' '}<InlineMath math="T > 1" />, a distribuição torna-se mais uniforme, revelando mais
          informação sobre as classes "secundárias":
        </p>
        <div style={S.math}>
          <BlockMath math={`p_i(T) = \\frac{\\exp(z_i / T)}{\\sum_j \\exp(z_j / T)}`} />
        </div>
        <p style={S.p}>
          A loss total combina duas componentes: a <strong>distillation loss</strong> (divergência
          entre as distribuições suavizadas do student e do teacher) e a <strong>cross-entropy
          habitual</strong> com as labels reais, ponderadas por <InlineMath math="\alpha" />:
        </p>
        <div style={S.math}>
          <BlockMath math={`\\mathcal{L} = \\alpha \\cdot T^2 \\cdot \\text{KL}\\big(p^{teacher}(T) \\,\\|\\, p^{student}(T)\\big) + (1-\\alpha) \\cdot \\text{CE}\\big(y, p^{student}(T{=}1)\\big)`} />
        </div>
        <p style={S.p}>
          O factor <InlineMath math="T^2" /> compensa a redução de magnitude dos gradientes que
          resulta de dividir os logits por <InlineMath math="T" />. Valores típicos:
          {' '}<InlineMath math="T \in [2, 10]" /> e <InlineMath math="\alpha \in [0.5, 0.9]" />.
        </p>

        <div style={S.highlight}>
          <strong>Exemplos notáveis:</strong> <strong>DistilBERT</strong> (Sanh et al., 2019) é 40%
          mais pequeno e 60% mais rápido que o BERT, mantendo 97% da sua performance no GLUE.
          {' '}<strong>TinyBERT</strong> vai mais longe — distila não apenas as probabilidades de
          saída, mas também as representações internas de camadas intermédias e os padrões de
          atenção do teacher.
        </div>

        <p style={S.p}>
          Na era dos LLMs, a distilação assume novas formas: modelos pequenos são treinados com
          outputs gerados por modelos grandes (instruction tuning a partir de respostas de um LLM
          maior); o <em>speculative decoding</em> usa um modelo "draft" pequeno para propor tokens
          que um modelo grande verifica em batch, acelerando a geração sem alterar a qualidade do
          output final.
        </p>
        <div style={S.note}>
          A distilação não requer acesso aos pesos do teacher — basta ter acesso às suas
          predições (mesmo via API). Isto permite usar modelos proprietários como "professores"
          para treinar modelos open-source mais pequenos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. TinyML &amp; Arquitecturas Eficientes</h2>
        <p style={S.p}>
          Em vez de comprimir um modelo já existente, podemos desenhar arquitecturas que são
          <strong> intrinsecamente baratas</strong> — operações que produzem resultados
          equivalentes com muito menos parâmetros e FLOPs.
        </p>

        <h3 style={S.h3}>5.1 Convoluções separáveis em profundidade (MobileNet)</h3>
        <p style={S.p}>
          Uma convolução standard 3×3 aplica, para cada posição da imagem, um filtro que combina
          {' '}<em>todos</em> os canais de entrada para produzir <em>todos</em> os canais de saída.
          A <strong>convolução separável em profundidade</strong> (depthwise separable convolution),
          usada no MobileNet, divide esta operação em dois passos muito mais baratos:
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Depthwise:</strong> aplica um único filtro 3×3 a cada canal de entrada separadamente (sem combinar canais)</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Pointwise (1×1):</strong> combina os canais com uma convolução 1×1, que é essencialmente uma combinação linear por posição</li>
        </ul>

        <ConvDiagram />

        <h3 style={S.h3}>5.2 Exemplo numérico — comparação de FLOPs</h3>
        <p style={S.p}>
          Considere uma camada com <InlineMath math="C_{in} = 64" /> canais de entrada,
          {' '}<InlineMath math="C_{out} = 128" /> canais de saída, filtros 3×3, aplicados a um
          mapa de características de <InlineMath math="14 \times 14" /> posições:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Operação</th>
                <th style={S.th}>Fórmula de custo (por posição)</th>
                <th style={S.th}>Multiplicações por posição</th>
                <th style={S.th}>Total (×196 posições)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}>Convolução standard 3×3</td>
                <td style={S.td}><InlineMath math="C_{in} \times C_{out} \times 3^2" /></td>
                <td style={S.td}>64 × 128 × 9 = 73.728</td>
                <td style={S.td}>≈ 14,4M</td>
              </tr>
              <tr>
                <td style={S.td}>Depthwise 3×3</td>
                <td style={S.td}><InlineMath math="C_{in} \times 3^2" /></td>
                <td style={S.td}>64 × 9 = 576</td>
                <td style={S.td}>≈ 0,11M</td>
              </tr>
              <tr>
                <td style={S.td}>Pointwise 1×1</td>
                <td style={S.td}><InlineMath math="C_{in} \times C_{out}" /></td>
                <td style={S.td}>64 × 128 = 8.192</td>
                <td style={S.td}>≈ 1,61M</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Depthwise separable (total)</strong></td>
                <td style={S.td}>576 + 8.192</td>
                <td style={S.td}><strong>8.768</strong></td>
                <td style={S.td}><strong>≈ 1,72M</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          A convolução separável usa <InlineMath math="73.728 / 8.768 \approx 8.4\times" /> menos
          multiplicações por posição do que a convolução standard equivalente — uma redução de
          ~8-9× nos FLOPs, que se traduz directamente em modelos mais rápidos e mais pequenos,
          mantendo praticamente a mesma capacidade representacional.
        </p>

        <h3 style={S.h3}>5.3 EfficientNet e compound scaling</h3>
        <p style={S.p}>
          O <strong>EfficientNet</strong> (Tan &amp; Le, 2019) observa que escalar redes
          aumentando apenas a profundidade, ou apenas a largura, ou apenas a resolução das imagens,
          produz ganhos decrescentes. O <em>compound scaling</em> escala os três factores em
          conjunto, de forma coordenada, segundo um único coeficiente <InlineMath math="\phi" />.
          A família EfficientNet-B0 a B7 oferece um espectro de modelos: o B0 é cerca de 8× mais
          pequeno e 6× mais rápido que o ResNet-50, com accuracy semelhante no ImageNet.
        </p>

        <div style={S.highlight}>
          <strong>TinyML</strong> é o campo de aplicar todas estas técnicas ao extremo, para correr
          modelos em microcontroladores com apenas algumas centenas de kilobytes de memória flash
          (ex: Arduino Nano, 256 KB). Os requisitos típicos são: modelos quantizados em INT8, com
          menos de 100 KB, inferência em poucos milissegundos, sem sistema operativo, com consumo
          na ordem dos miliwatts — viabilizando IA embebida em dispositivos alimentados por baterias
          de célula de botão durante meses ou anos.
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Formato / Runtime</th>
              <th style={S.th}>Alvo</th>
              <th style={S.th}>Características</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>TensorFlow Lite</td><td style={S.td}>Mobile / microcontrolador</td><td style={S.td}>Conversão de modelo TF, suporte a quantização INT8</td></tr>
            <tr><td style={S.td}>ONNX Runtime</td><td style={S.td}>Cross-platform CPU/GPU</td><td style={S.td}>Formato intermédio universal entre frameworks</td></tr>
            <tr><td style={S.td}>Core ML</td><td style={S.td}>Apple (iPhone, Mac, Watch)</td><td style={S.td}>Optimizado para Neural Engine da Apple</td></tr>
            <tr><td style={S.td}>TFLite Micro</td><td style={S.td}>Cortex-M, Arduino</td><td style={S.td}>Sem sistema operativo, footprint &lt;20 KB</td></tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* Section 6 */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Pipeline de Deployment para Edge</h2>
        <p style={S.p}>
          Na prática, a melhor abordagem combina várias técnicas. O fluxo típico desde um modelo
          treinado até um dispositivo edge envolve várias etapas de compressão e conversão, cada
          uma das quais deve ser validada para garantir que a accuracy se mantém aceitável:
        </p>

        <PipelineDiagram />

        <p style={S.p}>
          Um exemplo de pipeline real: um modelo de classificação de imagens treinado em FP32 é
          primeiro <strong>destilado</strong> para uma arquitectura mais pequena (ex: de
          ResNet-50 para MobileNetV3); o student resultante é então sujeito a
          {' '}<strong>pruning estruturado</strong> dos canais menos importantes (reduzindo FLOPs);
          finalmente, o modelo podado é <strong>quantizado para INT8</strong> via PTQ com um
          dataset de calibração representativo, exportado para um formato como TFLite, e
          implantado no dispositivo alvo. Cada etapa é validada num conjunto de teste para garantir
          que a queda de accuracy acumulada permanece dentro do orçamento aceitável (tipicamente
          &lt; 2-3 pontos percentuais).
        </p>
      </div>

      <hr style={S.divider} />

      {/* Synthesis */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Síntese do Módulo</h2>
        <p style={S.p}>
          Efficient Deep Learning não é uma técnica única, mas um conjunto de abordagens
          complementares, cada uma actuando sobre uma dimensão diferente do problema: memória,
          computação ou ambas.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Técnica</th>
              <th style={S.th}>O que reduz</th>
              <th style={S.th}>Impacto na accuracy</th>
              <th style={S.th}>Complexidade de implementação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Quantização (PTQ INT8)</td>
              <td style={S.td}>Memória (4×) e algum compute</td>
              <td style={S.td}>Baixo</td>
              <td style={S.td}>Baixa — sem retreino</td>
            </tr>
            <tr>
              <td style={S.td}>Quantização (QAT INT4)</td>
              <td style={S.td}>Memória (8×) e compute</td>
              <td style={S.td}>Moderado</td>
              <td style={S.td}>Alta — requer retreino</td>
            </tr>
            <tr>
              <td style={S.td}>Pruning não-estruturado</td>
              <td style={S.td}>Memória (parâmetros)</td>
              <td style={S.td}>Baixo a moderado</td>
              <td style={S.td}>Moderada — requer hardware sparse para ganhos reais</td>
            </tr>
            <tr>
              <td style={S.td}>Pruning estruturado</td>
              <td style={S.td}>Memória e compute (FLOPs)</td>
              <td style={S.td}>Moderado</td>
              <td style={S.td}>Moderada — requer fine-tuning</td>
            </tr>
            <tr>
              <td style={S.td}>Knowledge Distillation</td>
              <td style={S.td}>Memória e compute (modelo todo)</td>
              <td style={S.td}>Baixo (com bom teacher)</td>
              <td style={S.td}>Alta — requer treino completo do student</td>
            </tr>
            <tr>
              <td style={S.td}>Arquitecturas eficientes</td>
              <td style={S.td}>Memória e compute (por design)</td>
              <td style={S.td}>Variável</td>
              <td style={S.td}>Alta — treino do zero</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Não existe uma técnica "vencedora" universal. Se há tempo e dados para retreino, QAT e
          distilação tendem a oferecer os melhores resultados em precisões agressivas. Para
          deployment rápido de um modelo já existente, PTQ é o ponto de partida natural. Para
          hardware extremamente limitado (microcontroladores), arquitecturas TinyML desenhadas de
          raiz, combinadas com quantização agressiva, são a abordagem correcta. Na prática, os
          melhores resultados surgem da combinação: distilação + pruning estruturado + quantização
          INT8 pode reduzir um modelo em 20–50× com perda de accuracy inferior a 5%.
        </div>
      </div>
    </div>
  );
}
