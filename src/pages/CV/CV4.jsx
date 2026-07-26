import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: '#4a9eed', border: '1.5px solid #4a9eed', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: '#4a9eed', borderLeft: '3px solid #4a9eed', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto', fontFamily: 'monospace', fontSize: '0.95rem', color: '#4a9eed', fontWeight: 700 },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.06)', borderLeft: '3px solid #4a9eed', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const ArchDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Arquitectura CNN Típica — Fluxo de Dados</p>
    <svg viewBox="0 0 560 110" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr4" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
      </defs>
      {[
        { x: 5, w: 60, label: 'Input', sub: '224×224×3', color: '#4a9eed', h: 80 },
        { x: 80, w: 65, label: 'Conv+ReLU', sub: '224×224×64', color: '#4a9eed', h: 80 },
        { x: 162, w: 55, label: 'MaxPool', sub: '112×112×64', color: '#4a9eed', h: 55 },
        { x: 232, w: 65, label: 'Conv+ReLU', sub: '112×112×128', color: '#4a9eed', h: 55 },
        { x: 314, w: 55, label: 'MaxPool', sub: '56×56×128', color: '#4a9eed', h: 38 },
        { x: 384, w: 55, label: 'Conv+ReLU', sub: '56×56×256', color: '#4a9eed', h: 38 },
        { x: 455, w: 45, label: 'Flatten', sub: '802.816', color: '#4a9eed', h: 25 },
        { x: 515, w: 35, label: 'FC+Softmax', sub: '1.000 classes', color: '#4a9eed', h: 20 },
      ].map(({ x, w, label, sub, color, h }, i, arr) => (
        <g key={i}>
          <rect x={x} y={(90-h)/2} width={w-5} height={h} rx="4"
            fill={`${color}20`} stroke={color} strokeWidth="1.5"/>
          <text x={x + (w-5)/2} y={93} textAnchor="middle" fill={color} fontSize="6.5" fontWeight="700">{label}</text>
          <text x={x + (w-5)/2} y={102} textAnchor="middle" fill="var(--text-secondary)" fontSize="5.5">{sub}</text>
          {i < arr.length - 1 && (
            <line x1={x+w-5} y1={45} x2={arr[i+1].x} y2={45} stroke="#4a9eed" strokeWidth="1.2" markerEnd="url(#arr4)"/>
          )}
        </g>
      ))}
    </svg>
  </div>
);

const PoolingDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Max Pooling 2×2, Stride 2 — Exemplo</p>
    <svg viewBox="0 0 380 132" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Input 4x4 */}
      <text x="70" y="12" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Input (4×4)</text>
      {[
        [1,3,2,4],[5,6,1,2],[3,2,7,8],[1,0,3,4]
      ].map((row,r) => row.map((v,c) => {
        const q = r < 2 ? (c < 2 ? 0 : 1) : (c < 2 ? 2 : 3);
        const qColors = ['rgba(74,158,237,0.10)','rgba(74,158,237,0.10)','rgba(74,158,237,0.10)','rgba(74,158,237,0.10)'];
        const qStrokes = ['#4a9eed','#4a9eed','#4a9eed','#4a9eed'];
        return (
          <g key={`${r}-${c}`}>
            <rect x={c*30+5} y={r*24+18} width={28} height={22} rx="2"
              fill={qColors[q]} stroke={qStrokes[q]} strokeWidth="1.5"/>
            <text x={c*30+19} y={r*24+33} textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="700">{v}</text>
          </g>
        );
      }))}
      <text x="70" y="126" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">Quadrantes 2×2 coloridos</text>

      <text x="175" y="60" fill="var(--text-secondary)" fontSize="16">→</text>

      {/* Output 2x2 */}
      <text x="280" y="12" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Output (2×2) — máximos</text>
      {[
        [{v:6,c:'#4a9eed'},{v:4,c:'#4a9eed'}],
        [{v:3,c:'#4a9eed'},{v:8,c:'#4a9eed'}]
      ].map((row,r) => row.map(({v,c},col) => (
        <g key={`o-${r}-${col}`}>
          <rect x={col*55+210} y={r*45+28} width={50} height={40} rx="4"
            fill={`${c}25`} stroke={c} strokeWidth="2"/>
          <text x={col*55+235} y={r*45+52} textAnchor="middle" fill={c} fontSize="16" fontWeight="800">{v}</text>
        </g>
      )))}
      <text x="280" y="126" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">max de cada quadrante</text>
    </svg>
  </div>
);

const ActivationExplorer = () => {
  const [sel, setSel] = useState(0);
  const acts = [
    {
      name: 'ReLU', color: '#4a9eed',
      formula: 'f(x) = \\max(0, x)',
      what: 'Zero para valores negativos, identidade para positivos. Introduz não-linearidade de forma computacionalmente barata.',
      pros: 'Muito rápido. Não sofre de vanishing gradient para x>0. Promove sparsidade (muitos neurónios a zero).',
      cons: '"Dying ReLU": neurónios com activação sempre negativa ficam bloqueados em gradiente zero para sempre.',
    },
    {
      name: 'Leaky ReLU', color: '#4a9eed',
      formula: 'f(x) = \\max(0.01x,\\, x)',
      what: 'Como ReLU mas com um pequeno gradiente (0.01) para valores negativos. Evita o problema do dying ReLU.',
      pros: 'Resolve o dying ReLU. Ainda muito rápido. Gradiente nunca é zero.',
      cons: 'O hiperparâmetro 0.01 é fixo. PReLU aprende este valor — mas adiciona parâmetros.',
    },
    {
      name: 'GELU', color: '#4a9eed',
      formula: 'f(x) = x \\cdot \\Phi(x)',
      what: 'Gaussian Error Linear Unit. Aproximação suave do ReLU baseada na CDF normal. Usado em Transformers (BERT, GPT).',
      pros: 'Suave e diferenciável em todo o lado. Empiricamente melhor que ReLU em transformers e redes muito profundas.',
      cons: 'Mais caro computacionalmente que ReLU. Não tem interpretação tão intuitiva.',
    },
    {
      name: 'Sigmoid / Tanh', color: '#4a9eed',
      formula: '\\sigma(x)=\\dfrac{1}{1+e^{-x}},\\quad \\tanh(x)=\\dfrac{e^x - e^{-x}}{e^x + e^{-x}}',
      what: 'Funções saturantes clássicas. Mapeiam qualquer valor para [0,1] (sigmoid) ou [-1,1] (tanh).',
      pros: 'Sigmoid: útil na saída para probabilidades binárias. Tanh: centrada em zero — melhor que sigmoid em camadas ocultas.',
      cons: 'Vanishing gradient para |x| grande (derivada ≈ 0). Praticamente não usadas em camadas ocultas de CNNs modernas.',
    },
  ];
  const a = acts[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Funções de Activação</p>
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {acts.map((ac, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: sel === i ? ac.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? ac.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{ac.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${a.color}30` }}>
        <div style={{ color: a.color, marginBottom: '0.75rem', textAlign: 'center' }}><BlockMath math={a.formula} /></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', fontSize: '0.85rem' }}>
          <div><strong style={{ color: 'var(--text-secondary)' }}>O que faz:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>{a.what}</p></div>
          <div><strong style={{ color: '#4a9eed' }}>Vantagem:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>{a.pros}</p></div>
          <div><strong style={{ color: '#4a9eed' }}>Limitação:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>{a.cons}</p></div>
        </div>
      </div>
    </div>
  );
};

const InitExplorer = () => {
  const [sel, setSel] = useState(0);
  const inits = [
    {
      name: 'Zero / Constante', color: '#4a9eed',
      formula: '\\text{W} = 0 \\text{ (ou constante)}',
      what: 'Todos os pesos começam com o mesmo valor.',
      effect: 'Todos os neurónios da mesma camada calculam exactamente o mesmo output e recebem exactamente o mesmo gradiente — "symmetry problem". A rede nunca aprende representações diferentes por neurónio.',
      use: 'Nunca usar para pesos. (Biases a zero é normal e seguro.)',
    },
    {
      name: 'Gaussiana Ingénua', color: '#4a9eed',
      formula: '\\text{W} \\sim \\mathcal{N}(0, \\sigma^2) \\text{ com } \\sigma \\text{ fixo (e.g. 0.01)}',
      what: 'Pesos aleatórios pequenos, com a mesma variância em todas as camadas, independentemente do tamanho da camada.',
      effect: 'Em redes profundas, a variância das activações encolhe (ou explode) exponencialmente camada a camada — vanishing/exploding activations e gradientes. Redes com muitas camadas tornam-se impossíveis de treinar.',
      use: 'Funciona em redes muito rasas (1–2 camadas), mas não escala.',
    },
    {
      name: 'Xavier / Glorot', color: '#4a9eed',
      formula: '\\text{Var}(W) = \\dfrac{2}{n_{in} + n_{out}}',
      what: 'Escolhe a variância dos pesos com base no número de inputs (n_in) e outputs (n_out) da camada, de modo a manter a variância das activações aproximadamente constante ao longo da rede, tanto no forward como no backward pass.',
      effect: 'Derivado assumindo activações lineares ou aproximadamente lineares perto de zero (sigmoid, tanh). Mantém o sinal e o gradiente numa escala razoável através de muitas camadas.',
      use: 'Camadas com activação tanh/sigmoid. Standard antes do ReLU dominar.',
    },
    {
      name: 'Kaiming / He', color: '#4a9eed',
      formula: '\\text{Var}(W) = \\dfrac{2}{n_{in}}',
      what: 'Variante de Xavier ajustada para ReLU: como ReLU "mata" metade das activações (todas as negativas ficam a zero), a variância tem de ser o dobro para compensar essa perda de energia do sinal.',
      effect: 'Mantém a variância das activações constante camada a camada em redes com ReLU/Leaky ReLU, mesmo com dezenas ou centenas de camadas — essencial para treinar CNNs profundas (ResNet, VGG, etc.) do zero.',
      use: 'Standard para qualquer camada Conv/Linear seguida de ReLU ou variantes (é o default em frameworks modernos para Conv2d).',
    },
  ];
  const a = inits[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Estratégias de Inicialização de Pesos</p>
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {inits.map((ac, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: sel === i ? ac.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? ac.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{ac.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${a.color}30` }}>
        <p style={{ fontWeight: 700, color: a.color, fontSize: '1.05rem', marginBottom: '0.75rem', textAlign: 'center' }}><InlineMath math={a.formula} /></p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', fontSize: '0.85rem' }}>
          <div><strong style={{ color: 'var(--text-secondary)' }}>O que é:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>{a.what}</p></div>
          <div><strong style={{ color: '#4a9eed' }}>Efeito na rede:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>{a.effect}</p></div>
          <div><strong style={{ color: '#4a9eed' }}>Quando usar:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>{a.use}</p></div>
        </div>
      </div>
    </div>
  );
};

const NormDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Sobre que eixos cada normalização calcula média/variância</p>
    <svg viewBox="0 0 560 170" style={{ maxWidth: '100%', height: 'auto' }}>
      {[
        { x: 10, label: 'Batch Norm', sub: '(N, todas H,W) por canal C', color: '#4a9eed', cells: [[1,1,1,1],[0,0,0,0],[0,0,0,0],[0,0,0,0]] },
        { x: 150, label: 'Layer Norm', sub: '(C,H,W) por amostra N', color: '#4a9eed', cells: [[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]] },
        { x: 290, label: 'Instance Norm', sub: '(H,W) por amostra e canal', color: '#4a9eed', cells: [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]] },
        { x: 430, label: 'Group Norm', sub: '(H,W,grupo de canais)', color: '#4a9eed', cells: [[1,1,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]] },
      ].map(({ x, label, sub, color, cells }) => (
        <g key={label}>
          <text x={x+50} y="14" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">{label}</text>
          {/* axes labels */}
          <text x={x-2} y="40" fill="var(--text-secondary)" fontSize="7">N</text>
          <text x={x+105} y="40" fill="var(--text-secondary)" fontSize="7">C</text>
          {cells.map((row, r) => row.map((v, c) => (
            <rect key={`${r}-${c}`} x={x + c*22 + 10} y={r*22 + 30} width="20" height="20" rx="2"
              fill={v ? `${color}55` : 'var(--bg-primary)'} stroke={color} strokeWidth="1"/>
          )))}
          <text x={x+50} y="160" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">{sub}</text>
        </g>
      ))}
    </svg>
    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Cada grelha 4×4 representa um tensor simplificado (linhas = exemplos do batch N, colunas = canais C). As células destacadas mostram sobre que conjunto de valores a média/variância é calculada — o resto (H×W espacial) está sempre incluído no cálculo dentro de cada célula destacada.</p>
  </div>
);

const BottleneckDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Bottleneck Residual Block (ResNet-50/101/152)</p>
    <svg viewBox="0 0 560 150" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrbn" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
      </defs>
      {/* Skip connection arc */}
      <path d="M 30 75 C 30 20, 530 20, 530 75" fill="none" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#arrbn)"/>
      <text x="280" y="18" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">skip connection (identidade, x)</text>

      {/* Main path nodes */}
      {[
        { x: 10, w: 50, label: 'Input', sub: '256 canais', color: '#4a9eed', h: 70 },
        { x: 95, w: 80, label: 'Conv 1×1', sub: '256→64 canais', color: '#4a9eed', h: 50 },
        { x: 210, w: 80, label: 'Conv 3×3', sub: '64→64 canais', color: '#4a9eed', h: 50 },
        { x: 325, w: 80, label: 'Conv 1×1', sub: '64→256 canais', color: '#4a9eed', h: 70 },
        { x: 440, w: 50, label: '+ Soma', sub: 'F(x) + x', color: '#4a9eed', h: 70 },
        { x: 510, w: 45, label: 'ReLU', sub: 'output', color: '#4a9eed', h: 70 },
      ].map(({ x, w, label, sub, color, h }, i, arr) => (
        <g key={i}>
          <rect x={x} y={(140-h)/2} width={w-5} height={h} rx="4"
            fill={`${color}20`} stroke={color} strokeWidth="1.5"/>
          <text x={x + (w-5)/2} y={75} textAnchor="middle" fill={color} fontSize="9" fontWeight="700">{label}</text>
          <text x={x + (w-5)/2} y={88} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">{sub}</text>
          {i < arr.length - 1 && (
            <line x1={x+w-5} y1={75} x2={arr[i+1].x} y2={75} stroke="#4a9eed" strokeWidth="1.2" markerEnd="url(#arrbn)"/>
          )}
        </g>
      ))}
      <text x="280" y="142" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">cada Conv é seguida de BN + ReLU (excepto o último, antes da soma)</text>
    </svg>
  </div>
);

const SEDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Squeeze-and-Excitation Block — atenção de canal</p>
    <svg viewBox="0 0 560 130" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrse" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
      </defs>
      {[
        { x: 10,  w: 90, label: 'Feature map', sub1: 'H×W×C',              sub2: '',                  color: '#4a9eed', h: 70 },
        { x: 130, w: 80, label: 'Squeeze',      sub1: 'Global Avg Pool',    sub2: '→ 1×1×C',           color: '#4a9eed', h: 50 },
        { x: 240, w: 90, label: 'Excitation',   sub1: 'FC→ReLU→FC',        sub2: '→Sigmoid',           color: '#4a9eed', h: 50 },
        { x: 360, w: 70, label: 'Pesos s',      sub1: '1×1×C',             sub2: 'em [0,1]',           color: '#4a9eed', h: 45 },
        { x: 460, w: 90, label: 'Reescalar',    sub1: 'feature map × s',   sub2: '(canal a canal)',    color: '#4a9eed', h: 70 },
      ].map(({ x, w, label, sub1, sub2, color, h }, i, arr) => (
        <g key={i}>
          <rect x={x} y={(95-h)/2} width={w-5} height={h} rx="4"
            fill={`${color}20`} stroke={color} strokeWidth="1.5"/>
          <text x={x + (w-5)/2} y={47} textAnchor="middle" fill={color} fontSize="8.5" fontWeight="700">{label}</text>
          <text x={x + (w-5)/2} y={58} textAnchor="middle" fill="var(--text-secondary)" fontSize="6.5">{sub1}</text>
          {sub2 && <text x={x + (w-5)/2} y={67} textAnchor="middle" fill="var(--text-secondary)" fontSize="6.5">{sub2}</text>}
          {i < arr.length - 1 && (
            <line x1={x+w-5} y1={47} x2={arr[i+1].x} y2={47} stroke="#4a9eed" strokeWidth="1.2" markerEnd="url(#arrse)"/>
          )}
        </g>
      ))}
      <path d="M 10 88 L 10 108 L 540 108 L 540 88" fill="none" stroke="#4a9eed" strokeWidth="1.2" strokeDasharray="4,2" markerEnd="url(#arrse)"/>
      <text x="280" y="122" textAnchor="middle" fill="#4a9eed" fontSize="8">o feature map original também segue para a multiplicação final</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>O bloco aprende a "importância" relativa de cada canal e reescala-os — uma forma simples e barata de atenção que melhora redes como ResNet, EfficientNet e MobileNetV3 com um custo computacional mínimo.</p>
  </div>
);

const LossExplorer = () => {
  const [sel, setSel] = useState(0);
  const losses = [
    {
      name: 'Cross-Entropy', color: '#4a9eed',
      formula: 'L = -\\sum_i y_i \\log(p_i)',
      what: 'A loss padrão para classificação multi-classe. Como yᵢ é one-hot (1 na classe correcta, 0 nas restantes), simplifica para L = −log(p_correcta). Penaliza fortemente previsões confiantes mas erradas.',
      use: 'Default para classificação balanceada com softmax na última camada.',
    },
    {
      name: 'Focal Loss', color: '#4a9eed',
      formula: 'L = -(1-p_i)^\\gamma \\log(p_i)',
      what: 'Extensão da cross-entropy que multiplica o termo da loss por (1−pᵢ)^γ. Para exemplos já bem classificados (pᵢ alto), este factor ≈ 0 e a loss é "desligada"; para exemplos difíceis (pᵢ baixo), o factor ≈ 1 e a loss mantém-se forte.',
      use: 'Datasets fortemente desbalanceados (e.g. detecção de objectos com muito mais background que objecto). γ=2 é um valor típico. Foi proposta no paper RetinaNet.',
    },
    {
      name: 'Cross-Entropy + Label Smoothing', color: '#4a9eed',
      formula: "y'_i = (1-\\varepsilon)y_i + \\varepsilon/K",
      what: 'Em vez de usar labels one-hot puros (1 e 0), distribui-se uma pequena massa de probabilidade ε pelas K classes. A loss deixa de empurrar pᵢ para exactamente 1, evitando confiança excessiva (overconfidence) do modelo.',
      use: 'Regularização barata e eficaz em quase qualquer classificador. ε=0.1 é típico. Melhora a calibração das probabilidades de saída.',
    },
    {
      name: 'Binary Cross-Entropy', color: '#4a9eed',
      formula: 'L = -[y\\log(p) + (1-y)\\log(1-p)]',
      what: 'Versão para classificação binária ou multi-label (várias classes podem estar presentes simultaneamente). Aplica-se a cada classe independentemente após uma sigmoid (não softmax), em vez de uma distribuição conjunta.',
      use: 'Classificação multi-label (uma imagem pode ter várias tags), ou como componente da Focal Loss em detecção de objectos.',
    },
  ];
  const a = losses[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Loss Functions para Classificação</p>
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {losses.map((ac, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: sel === i ? ac.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? ac.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{ac.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${a.color}30` }}>
        <div style={{ color: a.color, marginBottom: '0.75rem', textAlign: 'center' }}><BlockMath math={a.formula} /></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.85rem' }}>
          <div><strong style={{ color: 'var(--text-secondary)' }}>O que faz:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>{a.what}</p></div>
          <div><strong style={{ color: '#4a9eed' }}>Quando usar:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>{a.use}</p></div>
        </div>
      </div>
    </div>
  );
};

const FlopsTable = () => {
  const rows = [
    { layer: 'Input', shape: '32×32×3', params: '—', flops: '—' },
    { layer: 'Conv1: 3×3, 3→16, stride 1, pad 1', shape: '32×32×16', params: '(3·3·3+1)·16 = 448', flops: '32·32·16·(3·3·3+1) ≈ 458k' },
    { layer: 'MaxPool 2×2', shape: '16×16×16', params: '0', flops: '≈ 4k (comparações)' },
    { layer: 'Conv2: 3×3, 16→32, stride 1, pad 1', shape: '16×16×32', params: '(3·3·16+1)·32 = 4.640', flops: '16·16·32·(3·3·16+1) ≈ 1,19M' },
    { layer: 'MaxPool 2×2', shape: '8×8×32', params: '0', flops: '≈ 2k' },
    { layer: 'Conv3: 3×3, 32→64, stride 1, pad 1', shape: '8×8×64', params: '(3·3·32+1)·64 = 18.496', flops: '8·8·64·(3·3·32+1) ≈ 1,18M' },
    { layer: 'Global Average Pooling', shape: '1×1×64', params: '0', flops: '≈ 4k (somas)' },
    { layer: 'FC: 64→10', shape: '10', params: '(64+1)·10 = 650', flops: '64·10 = 640 (mult.) ≈ 1,3k' },
    { layer: 'Softmax', shape: '10', params: '0', flops: '≈ 30' },
  ];
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={S.table}>
        <thead><tr><th style={S.th}>Camada</th><th style={S.th}>Output shape</th><th style={S.th}>Parâmetros</th><th style={S.th}>FLOPs (aprox.)</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.layer}>
              <td style={{ ...S.td, fontWeight: 600, color: '#4a9eed', fontSize: '0.83rem' }}>{r.layer}</td>
              <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.83rem' }}>{r.shape}</td>
              <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.8rem' }}>{r.params}</td>
              <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.8rem' }}>{r.flops}</td>
            </tr>
          ))}
          <tr>
            <td style={{ ...S.td, fontWeight: 700 }}>Total</td>
            <td style={S.td}>—</td>
            <td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>≈ 24.234</td>
            <td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>≈ 2,84M FLOPs</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default function CV4() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cv" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>MÓDULO 4</div>
        <h1 style={S.h1}>Arquitectura CNN Completa</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. O Pipeline Completo</h2>
          <p style={S.p}>Uma CNN típica de classificação tem dois blocos distintos: o backbone (extractor de features) e o head (classificador). O backbone é uma sequência de camadas convolucionais intercaladas com pooling, que progressivamente aumenta o número de canais e diminui o tamanho espacial. O head é um MLP que recebe o feature map final (após flatten ou global average pooling) e produz probabilidades de classe.</p>
          <p style={S.p}>Esta estrutura — reduzir resolução espacial enquanto se aumenta a profundidade (número de canais) — reflecte uma hierarquia de representações: as primeiras camadas detectam padrões simples e localizados (bordas, texturas, cores), as camadas intermédias combinam-nos em padrões mais complexos (formas, partes de objectos), e as camadas finais representam conceitos semânticos de alto nível (objectos completos, categorias).</p>

          <ArchDiagram />

          <div style={S.note}>Cada bloco "Conv+ReLU" representado no diagrama esconde, na prática, uma sequência típica: Conv → BatchNorm → ReLU. Os três operadores trabalham em conjunto e raramente aparecem isolados em arquitecturas modernas.</div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Pooling — Redução Espacial</h2>
          <p style={S.p}>O max pooling desliza uma janela (tipicamente 2×2 com stride=2) sobre o feature map e mantém apenas o valor máximo de cada janela. Reduz o tamanho espacial por um factor de 2 em cada dimensão (4× menos posições), tornando as representações mais compactas e invariantes a pequenos shifts.</p>
          <p style={S.p}>O average pooling calcula a média em vez do máximo. O Global Average Pooling (GAP) é um caso especial: calcula a média de todo o feature map, produzindo um único valor por canal. Redes modernas (ResNet, etc.) usam GAP antes da camada FC final em vez de flatten — muito menos parâmetros e melhor regularização.</p>

          <PoolingDiagram />

          <p style={S.p}>Vale a pena notar que o pooling não tem parâmetros aprendíveis — é uma operação puramente determinística. Por isso, embora reduza drasticamente o número de activações a propagar, não contribui para a contagem de parâmetros do modelo (mas conta para o número de FLOPs, ainda que de forma marginal face às convoluções).</p>

          <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Tipo de Pooling</th><th style={S.th}>Operação</th><th style={S.th}>Uso típico</th></tr></thead>
              <tbody>
                {[
                  ['Max Pooling 2×2', 'Máximo de cada janela 2×2. Preserva as activações mais fortes.', 'Redução espacial nas camadas intermédias (AlexNet, VGG)'],
                  ['Average Pooling 2×2', 'Média de cada janela 2×2. Sinal mais suave.', 'Menos usado — max pooling é geralmente melhor em classificação'],
                  ['Global Average Pooling', 'Uma média por canal sobre todo o feature map. Output: vector de tamanho C.', 'Antes da camada FC final. Elimina parâmetros e reduz overfitting (ResNet, EfficientNet)'],
                  ['Adaptive Pooling', 'Ajusta o stride para produzir um output de tamanho fixo independentemente do input.', 'Permite tratar imagens de tamanhos diferentes na mesma rede'],
                ].map(([t, o, u]) => (
                  <tr key={t}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{t}</td><td style={S.td}>{o}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{u}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Inicialização de Pesos</h2>
          <p style={S.p}>Antes do primeiro forward pass, todos os pesos da rede precisam de um valor inicial. Esta escolha parece um detalhe menor, mas é frequentemente a diferença entre uma rede que treina e uma que nunca sai do lugar.</p>

          <h3 style={S.h3}>Por que a inicialização importa</h3>
          <p style={S.p}>Considera uma rede muito profunda em que cada camada multiplica o sinal de entrada por uma matriz de pesos. Se cada multiplicação, em média, aumentar ligeiramente a variância do sinal, esse efeito é amplificado exponencialmente ao longo de dezenas de camadas — as activações "explodem" para valores enormes (exploding activations). Se cada multiplicação reduzir ligeiramente a variância, o sinal "desaparece" para perto de zero (vanishing activations). O mesmo acontece, de forma simétrica, com os gradientes durante o backward pass: pequenas razões de amplificação/atenuação compostas ao longo de muitas camadas tornam-se factores multiplicativos enormes ou minúsculos.</p>
          <p style={S.p}>Concretamente: se as activações ficarem demasiado grandes, funções saturantes como sigmoid/tanh entram na zona plana (derivada ≈ 0) e o gradiente desaparece. Se ficarem demasiado pequenas, as actualizações de pesos tornam-se insignificantes e o treino estagna. Em ambos os casos, as primeiras camadas da rede praticamente não aprendem — é o problema do <strong>vanishing/exploding gradient</strong>, agravado por uma má inicialização.</p>

          <div style={S.math}><BlockMath math="\text{Var}(\text{activação camada } L) \approx \text{Var}(\text{input}) \cdot \prod_{l=1}^{L} \text{Var}(W_l) \cdot n_l" /></div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '-0.5rem', marginBottom: '1rem' }}>onde <InlineMath math="n_l" /> é o número de inputs (fan-in) de cada camada <InlineMath math="l" />. Se cada termo <InlineMath math="\text{Var}(W_l) \cdot n_l" /> não for <InlineMath math="\approx 1" />, o produto cresce ou decresce exponencialmente com a profundidade.</p>

          <h3 style={S.h3}>A intuição central: preservar a variância</h3>
          <p style={S.p}>A ideia comum a Xavier e Kaiming é simples: escolher a variância inicial dos pesos de cada camada de forma a que a variância das activações (forward) e dos gradientes (backward) se mantenha aproximadamente constante à medida que o sinal atravessa a rede. Isto garante que nem as activações nem os gradientes crescem ou encolhem descontroladamente com a profundidade — independentemente de a rede ter 5 ou 150 camadas.</p>

          <InitExplorer />

          <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Método</th><th style={S.th}>Fórmula da variância</th><th style={S.th}>Activação alvo</th><th style={S.th}>Ideia</th></tr></thead>
              <tbody>
                {[
                  ['Xavier / Glorot (2010)', '\\dfrac{2}{n_{in} + n_{out}}', 'Sigmoid, Tanh, linear', 'Equilibra a variância no forward e no backward simultaneamente'],
                  ['Kaiming / He (2015)', '\\dfrac{2}{n_{in}}', 'ReLU, Leaky ReLU', 'Compensa o facto de ReLU anular ~metade do sinal (variância "perdida")'],
                  ['Kaiming (modo fan_out)', '\\dfrac{2}{n_{out}}', 'ReLU (foco no backward)', 'Preserva a variância dos gradientes em vez das activações'],
                ].map(([m, f, a, i]) => (
                  <tr key={m}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{m}</td><td style={S.td}><InlineMath math={f} /></td><td style={S.td}>{a}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{i}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Hoje em dia, frameworks modernos já usam Kaiming init por defeito em camadas Conv2d/Linear. Mas isto não substitui o Batch Normalization — são complementares: a inicialização garante um bom ponto de partida, o BN mantém a distribuição das activações estável durante todo o treino, mesmo à medida que os pesos mudam.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Batch Normalization e Outras Normalizações</h2>
          <p style={S.p}>O Batch Normalization (Ioffe & Szegedy, 2015) normaliza as activações de cada camada: para cada feature map, calcula a média e variância do mini-batch actual e normaliza para média=0, variância=1. Depois aplica parâmetros aprendíveis γ (escala) e β (shift) que permitem à rede desfazer a normalização se necessário.</p>
          <p style={S.p}>O efeito prático é dramático: permite usar learning rates muito mais altas, reduz drasticamente o número de épocas necessárias para convergir, e actua como regularizador (reduzindo a necessidade de dropout em muitos casos). É colocado tipicamente entre a convolução e a função de activação: Conv → BN → ReLU.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>Sem BN</th><th style={S.th}>Com BN</th></tr></thead>
              <tbody>
                {[
                  ['Learning rate', 'Tem de ser baixa (0.001) para não divergir', 'Pode ser 10× mais alta — convergência muito mais rápida'],
                  ['Inicialização', 'Muito sensível — má inicialização = treino instável', 'Muito mais robusta — BN compensa más inicializações'],
                  ['Internal Covariate Shift', 'Distribuição das activações muda a cada actualização de pesos', 'Normalização mantém a distribuição estável'],
                  ['Regularização', 'Precisamos de dropout e weight decay fortes', 'BN actua como regularizador — menos dropout necessário'],
                ].map(([a, s, c]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)' }}>{a}</td><td style={{ ...S.td, color: '#4a9eed' }}>{s}</td><td style={{ ...S.td, color: '#4a9eed' }}>{c}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Durante o treino, BN usa a média/variância do mini-batch. Durante inferência, usa estatísticas acumuladas (running mean/var) do treino. É crucial pôr o modelo em modo eval() antes de inferência em PyTorch — caso contrário, BN usa o mini-batch actual.</div>

          <h3 style={S.h3}>Para além do Batch Norm</h3>
          <p style={S.p}>O Batch Normalization tem uma fraqueza importante: depende de estatísticas calculadas sobre o batch. Se o batch size for muito pequeno (ou 1), essas estatísticas tornam-se ruidosas e pouco fiáveis, degradando o desempenho. Surgiram alternativas que normalizam sobre eixos diferentes do tensor.</p>

          <NormDiagram />

          <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Normalização</th><th style={S.th}>Calcula estatísticas sobre</th><th style={S.th}>Depende do batch size?</th><th style={S.th}>Uso típico</th></tr></thead>
              <tbody>
                {[
                  ['Batch Norm (BN)', 'Todo o batch + dimensões espaciais, por canal', 'Sim — degrada com batches pequenos', 'CNNs de classificação/detecção com batches grandes (≥16-32)'],
                  ['Layer Norm (LN)', 'Todos os canais + dimensões espaciais, por amostra', 'Não', 'Transformers (ViT, BERT, GPT) — batch size pode ser pequeno ou variável'],
                  ['Instance Norm (IN)', 'Apenas dimensões espaciais, por amostra e por canal', 'Não', 'Transferência de estilo e modelos generativos — remove informação de "estilo" específica da imagem'],
                  ['Group Norm (GN)', 'Dimensões espaciais + um grupo de canais, por amostra', 'Não', 'Detecção/segmentação com batch size pequeno (e.g. imagens de alta resolução, 1-2 por GPU)'],
                ].map(([n, s, b, u]) => (
                  <tr key={n}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{n}</td><td style={S.td}>{s}</td><td style={S.td}>{b}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{u}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={S.p}>Group Norm pode ser visto como um meio-termo configurável entre Layer Norm e Instance Norm: divide os C canais em G grupos e normaliza dentro de cada grupo (por amostra). Com G=1, GN reduz-se a LN; com G=C, reduz-se a IN. Na prática, GN com G=32 é uma escolha robusta quando o batch size é demasiado pequeno para BN funcionar bem (e.g. detecção de objectos em imagens grandes, onde só cabem 1-2 imagens por GPU).</p>

          <div style={S.note}>Regra prática: batch size grande e tarefa de classificação → Batch Norm. Transformers e sequências → Layer Norm. Modelos generativos/estilo → Instance Norm. Segmentação/detecção com batch pequeno → Group Norm.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Skip Connections e Blocos Residuais</h2>
          <p style={S.p}>Redes muito profundas (50, 100, 150+ camadas) sofrem de degradação: para além de um certo número de camadas, adicionar mais camadas piora o desempenho — não por overfitting, mas porque se torna mais difícil optimizar a rede (os gradientes têm de atravessar muitas camadas). A solução do ResNet (He et al., 2015) é a skip connection (ou residual connection): em vez de uma camada aprender directamente a transformação desejada H(x), aprende apenas o "resíduo" F(x) = H(x) − x, e o output final é F(x) + x.</p>
          <p style={S.p}>Isto cria um caminho directo (a soma com x) por onde o gradiente pode fluir sem ser atenuado por múltiplas multiplicações de pesos — resolvendo o vanishing gradient em redes profundas. Se a transformação ideal for próxima da identidade, basta a rede aprender F(x) ≈ 0, o que é mais fácil do que aprender a identidade exacta a partir de pesos aleatórios.</p>

          <h3 style={S.h3}>Bottleneck Blocks</h3>
          <p style={S.p}>Em redes muito profundas (ResNet-50 e maiores), usar blocos residuais "simples" com duas convoluções 3×3 torna-se computacionalmente caro quando o número de canais é elevado. O bottleneck block resolve isto com uma sequência de três convoluções: uma 1×1 que reduz o número de canais (e.g. 256→64), uma 3×3 que processa a informação espacial nesse espaço reduzido, e uma 1×1 final que expande de novo para o número de canais original (64→256).</p>

          <BottleneckDiagram />

          <p style={S.p}>O resultado é um bloco com muito menos parâmetros e FLOPs do que duas convoluções 3×3 directas sobre 256 canais, mas com capacidade representacional semelhante — as convoluções 1×1 funcionam como "compressão" e "descompressão" de canais em torno do trabalho espacial pesado feito pela 3×3.</p>

          <h3 style={S.h3}>Pre-activation ResNet</h3>
          <p style={S.p}>A versão original do ResNet aplica BN e ReLU depois de cada convolução: Conv → BN → ReLU. A versão "pre-activation" (He et al., 2016) inverte a ordem para BN → ReLU → Conv. Esta reordenação faz com que o caminho da skip connection (a soma F(x) + x) seja uma operação puramente de adição, sem nenhuma transformação não-linear a seguir — o que melhora ainda mais o fluxo de gradiente em redes muito profundas (ResNet com 200+ camadas) e facilita a optimização.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Variante</th><th style={S.th}>Ordem das operações</th><th style={S.th}>Vantagem</th></tr></thead>
              <tbody>
                {[
                  ['ResNet original (post-activation)', 'Conv → BN → ReLU', 'Simples, funciona bem até ~100 camadas'],
                  ['Pre-activation ResNet', 'BN → ReLU → Conv', 'Caminho residual sem não-linearidades — melhor para redes muito profundas (200+ camadas)'],
                  ['Bottleneck (qualquer variante)', '1×1 (reduz) → 3×3 → 1×1 (expande)', 'Reduz parâmetros/FLOPs mantendo profundidade e capacidade'],
                ].map(([v, o, a]) => (
                  <tr key={v}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{v}</td><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.85rem' }}>{o}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{a}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Squeeze-and-Excitation (SE) Blocks</h3>
          <p style={S.p}>Nem todos os canais de um feature map são igualmente úteis para uma dada imagem — alguns codificam informação muito relevante, outros quase irrelevante. Os blocos SE (Hu et al., 2018) introduzem um mecanismo leve de atenção de canal: primeiro "espremem" (squeeze) o feature map espacial num único valor por canal via Global Average Pooling, depois passam esse vector por duas camadas FC pequenas (com um "gargalo" intermédio) terminando em sigmoid, produzindo um peso entre 0 e 1 por canal. Estes pesos reescalam (excitation) o feature map original, canal a canal.</p>

          <SEDiagram />

          <p style={S.p}>O custo computacional adicional é mínimo (a parte FC opera sobre vectores muito pequenos), mas o ganho em precisão é consistente — SE blocks tornaram-se um componente comum em arquitecturas eficientes modernas (SE-ResNet, EfficientNet, MobileNetV3).</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>6. Funções de Activação</h2>
          <p style={S.p}>Sem funções de activação, uma CNN com N camadas seria equivalente a uma única transformação linear — independentemente da profundidade. As activações introduzem não-linearidade, permitindo aprender funções arbitrariamente complexas.</p>

          <ActivationExplorer />

          <p style={S.p}>A escolha da função de activação interage directamente com a inicialização de pesos: Kaiming init foi desenhada especificamente para ReLU (e variantes), enquanto Xavier init assume activações aproximadamente lineares perto de zero, como tanh. Usar a combinação errada (e.g. Xavier com ReLU em redes muito profundas) pode reintroduzir problemas de variância das activações que a inicialização deveria resolver.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>7. Loss Functions para Classificação de Imagem</h2>
          <p style={S.p}>A loss function define o que significa "estar certo" durante o treino — é o sinal que o optimizador minimiza. Para classificação de imagem, a escolha da loss tem impacto directo em como o modelo lida com classes desbalanceadas e quão bem calibradas ficam as suas previsões.</p>

          <LossExplorer />

          <p style={S.p}>Na prática, cross-entropy com label smoothing é hoje a escolha mais comum para classificação balanceada — um ajuste de uma linha que melhora consistentemente a generalização e a calibração com custo computacional nulo. Focal loss é reservada para situações de desbalanceamento severo, onde a maioria dos exemplos é "fácil" (e.g. fundo numa tarefa de detecção) e domina a loss se não for atenuada.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>8. Camadas Fully Connected e Softmax</h2>
          <p style={S.p}>No final do backbone, o feature map é reduzido a um vector (por flatten ou GAP). Uma ou mais camadas FC (densas) processam este vector. A camada final tem tantos neurónios quantas as classes e aplica softmax para converter logits em probabilidades.</p>
          <p style={S.p}>Softmax: pᵢ = exp(zᵢ) / Σ exp(z), onde zᵢ são os logits. O output é um vector de probabilidades que soma 1. A classe prevista é a de maior probabilidade. O treino minimiza a cross-entropy loss: L = −Σᵢ yᵢ·log(pᵢ), onde yᵢ é o one-hot label.</p>
          <p style={S.p}>Note-se que, na prática, softmax e cross-entropy são quase sempre combinadas numa única operação numericamente estável (e.g. <em>log-softmax</em> seguido de <em>negative log-likelihood</em>), evitando calcular exponenciais de números muito grandes ou muito pequenos directamente.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>9. Cálculo de Parâmetros e FLOPs — Exemplo Completo</h2>
          <p style={S.p}>Saber quantificar o custo de uma arquitectura é uma competência prática essencial: determina se um modelo cabe em memória, quão rápido treina/infere, e ajuda a comparar arquitecturas de forma objectiva. Para uma camada convolucional com kernel <InlineMath math="k \times k" />, <InlineMath math="C_{in}" /> canais de entrada e <InlineMath math="C_{out}" /> canais de saída (com bias):</p>

          <div style={S.math}><BlockMath math="\text{Parâmetros} = (k \times k \times C_{in} + 1) \times C_{out}" /></div>
          <div style={S.math}><BlockMath math="\text{FLOPs} \approx H_{out} \times W_{out} \times C_{out} \times (k \times k \times C_{in} + 1)" /></div>

          <p style={S.p}>O "+1" representa o bias de cada filtro. FLOPs aqui conta multiplicações-e-somas (cada posição do output requer <InlineMath math="k \times k \times C_{in}" /> multiplicações + soma, mais a soma do bias). Para uma camada FC com <InlineMath math="n_{in}" /> entradas e <InlineMath math="n_{out}" /> saídas: <InlineMath math="\text{Parâmetros} = (n_{in} + 1) \times n_{out}" />, e <InlineMath math="\text{FLOPs} \approx n_{in} \times n_{out}" />.</p>

          <p style={S.p}>Vamos aplicar isto a uma mini-CNN para CIFAR-10 (imagens 32×32×3, 10 classes), com a arquitectura: Conv(3→16, 3×3) → MaxPool(2×2) → Conv(16→32, 3×3) → MaxPool(2×2) → Conv(32→64, 3×3) → Global Average Pooling → FC(64→10) → Softmax. Todas as convoluções usam stride=1 e padding=1 (preservam o tamanho espacial antes do pooling).</p>

          <FlopsTable />

          <p style={S.p}>Algumas observações importantes deste exemplo: (1) as camadas convolucionais dominam o número de FLOPs (~99%) mas não o número de parâmetros — a Conv3 sozinha tem 18.496 parâmetros (76% do total), porque o número de parâmetros de uma conv cresce com C_in × C_out × k², independentemente da resolução espacial; (2) o pooling não adiciona parâmetros, apenas FLOPs marginais; (3) graças ao Global Average Pooling, a camada FC final tem apenas 650 parâmetros — se em vez disso fizéssemos flatten directo do feature map 8×8×64 (4.096 valores), a FC teria (4.096+1)×10 ≈ 41.000 parâmetros, mais que toda a rede convolucional junta.</p>

          <div style={S.note}>Regra prática para estimar custo: o número de FLOPs de uma CNN cresce aproximadamente com a área espacial dos feature maps × número de canais² (porque tanto C_in como C_out entram na fórmula). Reduzir resolução espacial via pooling/stride é, por isso, a forma mais eficaz de controlar o custo computacional à medida que se aumenta a profundidade/largura da rede.</div>
        </div>

        
      </div>

        </div>
      </div>
      );
}
