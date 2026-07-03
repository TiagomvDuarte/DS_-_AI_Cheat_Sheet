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
};

const PixelDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Imagem como Tensor 3D</p>
    <svg viewBox="0 0 540 160" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Grid de pixels */}
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 6 }).map((_, col) => {
          const colors = [
            ['#ea580c','#f97316','#fbbf24','#fbbf24','#f97316','#f97316'],
            ['#c2410c','#ea580c','#f59e0b','#fb923c','#f59e0b','#fb923c'],
            ['#ea580c','#f97316','#fbbf24','#ea580c','#fbbf24','#f59e0b'],
            ['#e91e63','#ff5722','#ffc107','#4caf50','#03a9f4','#673ab7'],
            ['#c62828','#bf360c','#f9a825','#1b5e20','#0277bd','#4a148c'],
            ['#ad1457','#e64a19','#f57f17','#2e7d32','#01579b','#4527a0'],
          ];
          return (
            <rect key={`${row}-${col}`} x={col * 22 + 10} y={row * 22 + 10} width={20} height={20}
              fill={colors[row][col]} stroke="var(--bg-primary)" strokeWidth="0.5" rx="1"/>
          );
        })
      )}
      <text x="76" y="158" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">H pixels</text>
      <text x="5" y="82" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" transform="rotate(-90 5 82)">W pixels</text>

      {/* Arrow */}
      <text x="160" y="82" fill="var(--text-secondary)" fontSize="18">→</text>

      {/* 3 channel layers */}
      {[
        { x: 195, label: 'R', color: '#e74c3c' },
        { x: 265, label: 'G', color: '#27ae60' },
        { x: 335, label: 'B', color: '#3498db' },
      ].map(({ x, label, color }) => (
        <g key={label}>
          <rect x={x} y={20} width={60} height={120} rx="4" fill={`${color}20`} stroke={color} strokeWidth="1.5"/>
          <text x={x + 30} y={87} textAnchor="middle" fill={color} fontSize="22" fontWeight="800">{label}</text>
          <text x={x + 30} y={152} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">canal {label}</text>
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={i} x1={x + 5} y1={30 + i * 20} x2={x + 55} y2={30 + i * 20} stroke={color} strokeWidth="0.4" opacity="0.3"/>
          ))}
          {Array.from({ length: 3 }).map((_, i) => (
            <line key={i} x1={x + 15 + i * 15} y1={22} x2={x + 15 + i * 15} y2={138} stroke={color} strokeWidth="0.4" opacity="0.3"/>
          ))}
        </g>
      ))}

      {/* Tensor label */}
      <text x="415" y="70" fill="var(--text-primary)" fontSize="11" fontWeight="700">Tensor:</text>
      <text x="415" y="88" fill="#f97316" fontSize="11" fontWeight="700">(H × W × 3)</text>
      <text x="415" y="106" fill="var(--text-secondary)" fontSize="8.5">altura × largura</text>
      <text x="415" y="118" fill="var(--text-secondary)" fontSize="8.5">× canais de cor</text>
      <text x="415" y="136" fill="var(--text-secondary)" fontSize="8">ex: 224×224×3</text>
      <text x="415" y="148" fill="var(--text-secondary)" fontSize="8">= 150.528 valores</text>
    </svg>
  </div>
);

const ChallengeExplorer = () => {
  const [sel, setSel] = useState(0);
  const challenges = [
    {
      name: 'Variação de Iluminação', icon: '', color: '#f97316',
      desc: 'O mesmo objecto parece completamente diferente sob iluminações distintas. Uma maçã vermelha em luz azul parece preta. O mesmo rosto em sombra vs. luz directa pode enganar um sistema ingénuo. Mesmo pequenas mudanças — uma nuvem a passar, uma lâmpada a ligar — alteram drasticamente os valores RGB de cada píxel, sem que o conteúdo semântico da cena tenha mudado.',
      human: 'Humanos reconhecem facilmente — o sistema visual compensa automaticamente a temperatura de cor (constância de cor). O cérebro "normaliza" a iluminação ambiente e foca-se na reflectância relativa dos objectos, não no valor absoluto da luz.',
      cv: 'Os pixels mudam drasticamente. Um modelo que memoriza cores fixas falha completamente. CNNs aprendem invariância à iluminação implicitamente durante o treino com dados variados — e técnicas de data augmentation (variar brilho, contraste, saturação) ajudam a forçar essa robustez.',
    },
    {
      name: 'Deformação', icon: '', color: '#f97316',
      desc: 'Um gato pode estar sentado, deitado, a saltar, a esticar. A categoria é a mesma mas a configuração dos pixels é radicalmente diferente. A silhueta, a posição relativa das partes (cabeça, patas, cauda) e até a área ocupada na imagem variam enormemente.',
      human: 'Reconhecemos "gato" independentemente da pose — usamos forma global e partes características (bigodes, orelhas, olhos), e construímos mentalmente um modelo 3D do objecto que se mantém estável sob transformações.',
      cv: 'Modelos baseados em pixels fixos falham. CNNs aprendem detectores de partes locais (bordas, texturas, depois formas, depois partes de objecto) que são combinados hierarquicamente — podem reconhecer um gato independentemente da pose porque a presença das partes certas, mesmo reorganizadas, activa os detectores certos.',
    },
    {
      name: 'Oclusão', icon: '', color: '#f97316',
      desc: 'Quando parte do objecto está escondida por outro (e.g., uma pessoa atrás de uma árvore, um carro parcialmente tapado por outro carro), os humanos completam mentalmente o que falta. Para um sistema de CV, faltam literalmente pixels — não há "informação em falta" explícita, apenas a ausência de evidência.',
      human: 'Usamos contexto e expectativa — sabemos que as pernas continuam atrás da parede, porque temos um modelo mental de como pessoas e objectos normalmente se apresentam (amodal completion).',
      cv: 'As CNNs profundas aprendem representações de alto nível suficientemente ricas para inferir objectos parcialmente visíveis a partir de fragmentos, mas é um dos problemas mais difíceis — especialmente em detecção de objectos densamente sobrepostos (ex: multidões).',
    },
    {
      name: 'Variação Intra-classe', icon: '', color: '#f97316',
      desc: 'Todos são cadeiras: um banco de madeira, uma poltrona de couro, um banco de parque, uma cadeira de escritório giratória. A diversidade dentro de uma classe pode ser maior que a diferença entre classes (uma cadeira de escritório pode parecer-se mais com um banco do que com outra cadeira).',
      human: 'Classificamos por função ("serve para sentar uma pessoa") não por aparência — usamos conhecimento abstracto e contexto de uso, não apenas forma.',
      cv: 'Os modelos precisam de ver exemplos suficientemente diversos de cada classe durante o treino para que a fronteira de decisão capture a variabilidade real. Transfer learning de modelos pré-treinados em datasets massivos (ImageNet) ajuda muito, porque as features de baixo/médio nível já generalizam bem.',
    },
    {
      name: 'Invariância de Fundo', icon: '', color: '#f97316',
      desc: 'O mesmo elefante pode aparecer na savana, num circo, numa floresta, num zoo. O fundo muda completamente mas o objecto — e a categoria correcta — é o mesmo. Em alguns datasets, o fundo está fortemente correlacionado com a classe (ex: "barco" quase sempre aparece com água), o que pode levar o modelo a aprender atalhos errados.',
      human: 'Separamos figura do fundo instintivamente (segmentação figura-fundo é uma das primeiras operações do sistema visual).',
      cv: 'Modelos treinados apenas em elefantes na savana podem falhar em elefantes em contextos diferentes — overfitting ao fundo, um exemplo de "shortcut learning". CNNs modernas com data augmentation (recortes aleatórios, mistura de fundos) e treino em dados diversos são mais robustas a esta correlação espúria.',
    },
  ];
  const c = challenges[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Os Desafios da Visão Computacional</p>
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {challenges.map((ch, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: sel === i ? ch.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? ch.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>
            {ch.icon} {ch.name}
          </button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${c.color}30` }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '0.75rem' }}>{c.desc}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.85rem' }}>
          <div style={{ background: 'rgba(249,115,22,0.10)', borderRadius: 8, padding: '0.75rem' }}><strong style={{ color: '#f97316' }}> Visão humana:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>{c.human}</p></div>
          <div style={{ background: `${c.color}08`, borderRadius: 8, padding: '0.75rem' }}><strong style={{ color: c.color }}> Computer Vision:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>{c.cv}</p></div>
        </div>
      </div>
    </div>
  );
};

// === Color spaces diagram: RGB cube vs HSV cylinder ===
const ColorSpaceDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>RGB (cubo) vs. HSV (cilindro)</p>
    <svg viewBox="0 0 540 220" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* RGB cube (isometric-ish) */}
      <g>
        <text x="120" y="20" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">Espaço RGB</text>
        {/* back face */}
        <polygon points="60,60 160,60 190,90 90,90" fill="none" stroke="var(--text-secondary)" strokeWidth="1"/>
        {/* front face */}
        <polygon points="60,140 160,140 160,200 60,200" fill="#33333310" stroke="var(--text-secondary)" strokeWidth="1"/>
        {/* connecting edges */}
        <line x1="60" y1="60" x2="60" y2="140" stroke="var(--text-secondary)" strokeWidth="1"/>
        <line x1="160" y1="60" x2="160" y2="140" stroke="var(--text-secondary)" strokeWidth="1"/>
        <line x1="90" y1="90" x2="90" y2="170" stroke="var(--text-secondary)" strokeWidth="1"/>
        <line x1="190" y1="90" x2="190" y2="170" stroke="var(--text-secondary)" strokeWidth="1"/>
        <polygon points="90,170 190,170 160,200 60,200" fill="#33333308" stroke="var(--text-secondary)" strokeWidth="1"/>
        <line x1="160" y1="60" x2="190" y2="90" stroke="var(--text-secondary)" strokeWidth="1"/>
        <line x1="160" y1="140" x2="190" y2="170" stroke="var(--text-secondary)" strokeWidth="1"/>

        {/* Axis labels */}
        <text x="45" y="175" fill="#3498db" fontSize="11" fontWeight="700">B</text>
        <text x="45" y="50" fill="#27ae60" fontSize="11" fontWeight="700">G</text>
        <text x="195" y="185" fill="#e74c3c" fontSize="11" fontWeight="700">R</text>

        {/* corner colors */}
        <circle cx="60" cy="200" r="6" fill="#000"/>
        <text x="60" y="216" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">preto (0,0,0)</text>
        <circle cx="190" cy="170" r="6" fill="#fff" stroke="var(--text-secondary)"/>
        <circle cx="60" cy="60" r="6" fill="#27ae60"/>
        <circle cx="160" cy="200" r="6" fill="#e74c3c"/>
        <circle cx="160" cy="60" r="6" fill="#f1c40f"/>
        <circle cx="90" cy="90" r="6" fill="#3498db"/>
        <circle cx="190" cy="90" r="6" fill="#fff" stroke="var(--text-secondary)"/>
        <text x="90" y="110" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">branco (1,1,1)</text>
      </g>

      {/* arrow */}
      <text x="265" y="115" fill="var(--text-secondary)" fontSize="18">→</text>

      {/* HSV cylinder */}
      <g>
        <text x="420" y="20" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">Espaço HSV</text>
        {/* top ellipse - hue wheel */}
        <ellipse cx="420" cy="60" rx="70" ry="22" fill="url(#hueGrad)" stroke="var(--text-secondary)" strokeWidth="1"/>
        <defs>
          <linearGradient id="hueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff0000"/>
            <stop offset="17%" stopColor="#ffff00"/>
            <stop offset="33%" stopColor="#00ff00"/>
            <stop offset="50%" stopColor="#00ffff"/>
            <stop offset="67%" stopColor="#0000ff"/>
            <stop offset="83%" stopColor="#ff00ff"/>
            <stop offset="100%" stopColor="#ff0000"/>
          </linearGradient>
        </defs>
        {/* cylinder body */}
        <path d="M 350 60 L 350 160 A 70 22 0 0 0 490 160 L 490 60" fill="#88888810" stroke="var(--text-secondary)" strokeWidth="1"/>
        <ellipse cx="420" cy="160" rx="70" ry="22" fill="#000" stroke="var(--text-secondary)" strokeWidth="1"/>
        {/* central axis */}
        <line x1="420" y1="38" x2="420" y2="182" stroke="var(--text-secondary)" strokeWidth="0.7" strokeDasharray="3,2"/>

        {/* Labels */}
        <text x="500" y="55" fill="#f97316" fontSize="10" fontWeight="700">H (matiz)</text>
        <text x="500" y="68" fill="var(--text-secondary)" fontSize="8">ângulo 0–360°</text>
        <text x="500" y="115" fill="#f97316" fontSize="10" fontWeight="700">S (saturação)</text>
        <text x="500" y="128" fill="var(--text-secondary)" fontSize="8">distância ao eixo</text>
        <text x="500" y="178" fill="#f97316" fontSize="10" fontWeight="700">V (valor)</text>
        <text x="500" y="191" fill="var(--text-secondary)" fontSize="8">altura (brilho)</text>
        <text x="345" y="100" textAnchor="end" fill="var(--text-secondary)" fontSize="8">eixo central =</text>
        <text x="345" y="111" textAnchor="end" fill="var(--text-secondary)" fontSize="8">cinzentos</text>
      </g>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>No RGB, cor e brilho estão misturados nos 3 eixos. No HSV, o matiz (cor "pura") é separado da saturação e do brilho — o que facilita filtrar "tudo o que é vermelho" independentemente de quão claro ou escuro está.</p>
  </div>
);

// === Channel decomposition explorer (RGB / Grayscale / HSV / YCbCr) ===
const ChannelExplorer = () => {
  const [space, setSpace] = useState('rgb');
  const spaces = {
    rgb: {
      label: 'RGB', color: '#e74c3c',
      channels: [
        { name: 'R', color: '#e74c3c', desc: 'Intensidade de vermelho' },
        { name: 'G', color: '#27ae60', desc: 'Intensidade de verde' },
        { name: 'B', color: '#3498db', desc: 'Intensidade de azul' },
      ],
      explanation: 'O modelo mais comum para ecrãs e câmaras. Cada canal regista a intensidade de luz emitida/captada nessa banda. Aditivo: misturar os três no máximo dá branco. Problema: cor e iluminação estão acoplados — escurecer uma cena muda os 3 canais simultaneamente, o que dificulta tarefas como "encontrar todos os píxeis vermelhos" sob iluminação variável.',
    },
    gray: {
      label: 'Grayscale', color: '#94a3b8',
      channels: [
        { name: 'Y', color: '#94a3b8', desc: 'Luminância (intensidade)' },
      ],
      explanation: 'Um único canal que representa apenas brilho/intensidade, tipicamente calculado como combinação ponderada dos canais RGB (ex: 0.299·R + 0.587·G + 0.114·B, que reflecte a sensibilidade do olho humano à luz verde). Reduz drasticamente o volume de dados (1 canal em vez de 3) — útil quando a cor não é informativa para a tarefa (ex: detecção de bordas, OCR clássico).',
    },
    hsv: {
      label: 'HSV', color: '#f97316',
      channels: [
        { name: 'H', color: '#f97316', desc: 'Hue — matiz / "cor pura" (0–360°)' },
        { name: 'S', color: '#f97316', desc: 'Saturation — pureza/intensidade da cor' },
        { name: 'V', color: '#f97316', desc: 'Value — brilho/luminosidade' },
      ],
      explanation: 'Separa a "cor" (Hue) do "brilho" (Value) e da "intensidade da cor" (Saturation). É extremamente útil para segmentação por cor: para encontrar "tudo o que é laranja", basta filtrar um intervalo de Hue, sem te preocupares com sombras ou reflexos que mudam o brilho mas não a cor base. Muito usado em visão clássica para detecção de objectos por cor (ex: bolas de desporto, sinais de trânsito, pele).',
    },
    ycbcr: {
      label: 'YCbCr', color: '#f97316',
      channels: [
        { name: 'Y', color: '#94a3b8', desc: 'Luma — luminância (brilho)' },
        { name: 'Cb', color: '#f97316', desc: 'Crominância azul-amarelo' },
        { name: 'Cr', color: '#f97316', desc: 'Crominância vermelho-verde' },
      ],
      explanation: 'Separa luminância (Y) de crominância (Cb, Cr) — a base da compressão JPEG e do vídeo digital. O olho humano é muito mais sensível a variações de brilho do que de cor, por isso os canais de crominância podem ser sub-amostrados (chroma subsampling, ex: 4:2:0) com perda quase imperceptível, reduzindo o tamanho do ficheiro a metade ou mais.',
    },
  };
  const sp = spaces[space];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Decomposição em Canais por Espaço de Cor</p>
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {Object.entries(spaces).map(([key, s]) => (
          <button key={key} onClick={() => setSpace(key)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: space === key ? s.color : 'var(--bg-primary)', color: space === key ? 'white' : 'var(--text-primary)', border: `1.5px solid ${space === key ? s.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>
            {s.label}
          </button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${sp.color}30` }}>
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {sp.channels.map(ch => (
            <div key={ch.name} style={{ textAlign: 'center', minWidth: 90 }}>
              <div style={{ width: 70, height: 70, margin: '0 auto 0.4rem', borderRadius: 8, background: `${ch.color}25`, border: `2px solid ${ch.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 800, color: ch.color }}>
                {ch.name}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{ch.desc}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.8, margin: 0 }}>{sp.explanation}</p>
      </div>
    </div>
  );
};

// === Bit depth & normalization explorer ===
const BitDepthExplorer = () => {
  const [mode, setMode] = useState('uint8');
  const modes = {
    uint8: {
      label: '8-bit (uint8)', color: '#f97316',
      range: '0 a 255 (256 níveis por canal)', total: '256³ ≈ 16,7 milhões de cores possíveis por píxel RGB',
      desc: 'O formato mais comum para imagens "de consumo" (JPEG, PNG standard, fotos de telemóvel). Cada canal usa 1 byte. É suficiente para a percepção humana — mas em zonas de gradiente suave (céu, sombras) pode causar "banding" (faixas visíveis em vez de transição suave), porque só há 256 valores discretos.',
    },
    uint16: {
      label: '16-bit (uint16)', color: '#f97316',
      range: '0 a 65.535 (65.536 níveis por canal)', total: 'Usado em imagem médica (raio-X, ressonância), fotografia RAW, e imagem científica/satélite',
      desc: 'Maior precisão — captura diferenças subtis de intensidade que se perderiam em 8-bit. Essencial quando há processamento posterior intensivo (ex: ajustar exposição numa foto RAW) que amplificaria erros de quantização. Custa o dobro do espaço de armazenamento.',
    },
    float: {
      label: 'Float (32-bit)', color: '#f97316',
      range: 'Tipicamente normalizado para [0,1] ou [-1,1]', total: 'Formato interno de qualquer rede neuronal — não é "armazenamento", é representação de cálculo',
      desc: 'Antes de entrar numa rede neuronal, os valores inteiros são convertidos para vírgula flutuante. Isto não acrescenta informação (continuam a vir de 8 ou 16 bits), mas é o formato exigido pelas operações matriciais da rede e permite normalização — essencial para que o gradiente desça de forma estável durante o treino.',
    },
  };
  const m = modes[mode];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Profundidade de Bit (Bit Depth)</p>
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {Object.entries(modes).map(([key, s]) => (
          <button key={key} onClick={() => setMode(key)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: mode === key ? s.color : 'var(--bg-primary)', color: mode === key ? 'white' : 'var(--text-primary)', border: `1.5px solid ${mode === key ? s.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>
            {s.label}
          </button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${m.color}30` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.85rem', fontSize: '0.85rem' }}>
          <div style={{ background: `${m.color}10`, borderRadius: 8, padding: '0.6rem 0.85rem' }}>
            <strong style={{ color: m.color }}>Intervalo:</strong> {m.range}
          </div>
          <div style={{ background: `${m.color}10`, borderRadius: 8, padding: '0.6rem 0.85rem' }}>
            <strong style={{ color: m.color }}>Contexto:</strong> {m.total}
          </div>
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.8, margin: 0 }}>{m.desc}</p>
      </div>
    </div>
  );
};

// === Tensor layout explorer (NCHW vs NHWC) ===
const TensorLayoutExplorer = () => {
  const [layout, setLayout] = useState('nchw');
  const layouts = {
    nchw: {
      label: 'NCHW (channels-first)', color: '#f97316',
      order: ['N', 'C', 'H', 'W'],
      desc: 'Convenção usada por PyTorch (por defeito) e pela maioria dos kernels GPU optimizados (cuDNN). Os valores de um mesmo canal ficam contíguos em memória — favorável para convoluções, que processam um canal de cada vez sobre toda a imagem.',
      example: 'Um batch de 32 imagens RGB de 224×224 → tensor de forma (32, 3, 224, 224)',
    },
    nhwc: {
      label: 'NHWC (channels-last)', color: '#f97316',
      order: ['N', 'H', 'W', 'C'],
      desc: 'Convenção usada por TensorFlow/Keras (histórico) e que corresponde ao formato "natural" em que as imagens são lidas de ficheiro (cada píxel com os seus 3 valores RGB consecutivos). Pode ser mais eficiente em certas TPUs/CPUs modernas devido a melhor localidade de cache para operações por píxel.',
      example: 'O mesmo batch → tensor de forma (32, 224, 224, 3)',
    },
  };
  const l = layouts[layout];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Disposição de um Tensor de Imagens (Batch)</p>
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {Object.entries(layouts).map(([key, s]) => (
          <button key={key} onClick={() => setLayout(key)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: layout === key ? s.color : 'var(--bg-primary)', color: layout === key ? 'white' : 'var(--text-primary)', border: `1.5px solid ${layout === key ? s.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>
            {s.label}
          </button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${l.color}30` }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          {l.order.map((dim, i) => (
            <React.Fragment key={dim}>
              <div style={{ width: 56, height: 56, borderRadius: 8, background: `${l.color}20`, border: `2px solid ${l.color}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.3rem', fontWeight: 800, color: l.color }}>{dim}</span>
              </div>
              {i < l.order.length - 1 && <span style={{ alignSelf: 'center', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>×</span>}
            </React.Fragment>
          ))}
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '0.85rem' }}>
          N = batch size · C = canais · H = altura · W = largura
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '0.6rem' }}>{l.desc}</p>
        <div style={{ background: `${l.color}10`, borderRadius: 8, padding: '0.6rem 0.85rem', fontSize: '0.85rem', fontFamily: 'monospace', color: l.color, fontWeight: 600 }}>{l.example}</div>
      </div>
    </div>
  );
};

// === Interpolation explorer ===
const InterpolationExplorer = () => {
  const [method, setMethod] = useState('nearest');
  const methods = {
    nearest: {
      label: 'Nearest Neighbour', color: '#f97316',
      desc: 'Cada novo píxel copia o valor do píxel original mais próximo. É o método mais rápido e mais simples — mas produz resultados em "blocos", visivelmente pixelados quando se amplia a imagem, e pode introduzir artefactos serrilhados (aliasing) em bordas diagonais.',
      cost: 'Muito baixo', quality: 'Baixa',
    },
    bilinear: {
      label: 'Bilinear', color: '#f97316',
      desc: 'Cada novo píxel é uma média ponderada dos 4 píxeis vizinhos mais próximos na imagem original, ponderada pela distância. Produz transições suaves e é o método mais usado por defeito em pipelines de deep learning (ex: redimensionar para 224×224) — bom equilíbrio entre qualidade e custo.',
      cost: 'Baixo', quality: 'Média',
    },
    bicubic: {
      label: 'Bicubic', color: '#f97316',
      desc: 'Usa uma vizinhança maior (16 píxeis, 4×4) e ajusta uma função cúbica suave através deles. Produz resultados mais nítidos e com menos artefactos do que o bilinear, especialmente úteis ao ampliar imagens — mas é computacionalmente mais caro e pode introduzir leve "overshoot" (halos) em bordas de alto contraste.',
      cost: 'Médio', quality: 'Alta',
    },
  };
  const m = methods[method];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Métodos de Interpolação ao Redimensionar</p>
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {Object.entries(methods).map(([key, s]) => (
          <button key={key} onClick={() => setMethod(key)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: method === key ? s.color : 'var(--bg-primary)', color: method === key ? 'white' : 'var(--text-primary)', border: `1.5px solid ${method === key ? s.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>
            {s.label}
          </button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${m.color}30` }}>
        {/* Visual representation */}
        <div style={{ textAlign: 'center', marginBottom: '0.85rem' }}>
          <svg viewBox="0 0 320 80" style={{ maxWidth: 320, width: '100%', height: 'auto' }}>
            {/* original coarse pixels */}
            {Array.from({ length: 4 }).map((_, i) => (
              <rect key={i} x={10 + i * 35} y={10} width={32} height={32}
                fill={['#f97316','#f97316','#f97316','#f97316'][i]} opacity="0.6" stroke="var(--text-secondary)" strokeWidth="0.5"/>
            ))}
            <text x="80" y="58" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">original (baixa resolução)</text>
            <text x="155" y="30" fill="var(--text-secondary)" fontSize="16">→</text>
            {/* upsampled - rendering depends on method */}
            {method === 'nearest' && Array.from({ length: 8 }).map((_, i) => (
              <rect key={i} x={185 + (i % 4) * 16} y={10 + Math.floor(i / 4) * 16} width={16} height={16}
                fill={['#f97316','#f97316','#f97316','#f97316','#f97316','#f97316','#f97316','#f97316'][i]} opacity="0.6" stroke="var(--text-secondary)" strokeWidth="0.3"/>
            ))}
            {method === 'bilinear' && (
              <rect x="185" y="10" width="64" height="32" fill="url(#bilinGrad)" rx="2"/>
            )}
            {method === 'bicubic' && (
              <rect x="185" y="10" width="64" height="32" fill="url(#bilinGrad)" rx="2" stroke={m.color} strokeWidth="1.5"/>
            )}
            <defs>
              <linearGradient id="bilinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.6"/>
                <stop offset="35%" stopColor="#f97316" stopOpacity="0.6"/>
                <stop offset="65%" stopColor="#fb923c" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.6"/>
              </linearGradient>
            </defs>
            <text x="217" y="58" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">ampliada</text>
          </svg>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.85rem', fontSize: '0.85rem' }}>
          <div style={{ background: `${m.color}10`, borderRadius: 8, padding: '0.6rem 0.85rem' }}>
            <strong style={{ color: m.color }}>Custo computacional:</strong> {m.cost}
          </div>
          <div style={{ background: `${m.color}10`, borderRadius: 8, padding: '0.6rem 0.85rem' }}>
            <strong style={{ color: m.color }}>Qualidade visual:</strong> {m.quality}
          </div>
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.8, margin: 0 }}>{m.desc}</p>
      </div>
    </div>
  );
};

// === JPEG vs PNG diagram ===
const CompressionDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>JPEG (com perdas) vs. PNG (sem perdas)</p>
    <svg viewBox="0 0 540 180" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* JPEG side */}
      <text x="135" y="20" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="700">JPEG</text>
      <rect x="40" y="35" width="190" height="120" rx="6" fill="#f59e0b10" stroke="#f59e0b" strokeWidth="1.2"/>
      {/* 8x8 blocks grid */}
      {Array.from({ length: 4 }).map((_, r) =>
        Array.from({ length: 4 }).map((_, c) => (
          <rect key={`${r}-${c}`} x={50 + c * 42} y={45 + r * 25} width={38} height={21}
            fill={`hsl(${(r*4+c)*23 % 360}, 55%, 65%)`} opacity="0.55" stroke="#f59e0b" strokeWidth="0.6"/>
        ))
      )}
      <text x="135" y="172" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">blocos 8×8 → DCT → quantização</text>

      {/* arrow */}
      <text x="270" y="100" textAnchor="middle" fill="var(--text-secondary)" fontSize="14">vs</text>

      {/* PNG side */}
      <text x="405" y="20" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">PNG</text>
      <rect x="310" y="35" width="190" height="120" rx="6" fill="#f9731610" stroke="#f97316" strokeWidth="1.2"/>
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 6 }).map((_, col) => (
          <rect key={`${row}-${col}`} x={320 + col * 28} y={45 + row * 18} width={26} height={16}
            fill={`hsl(${(row*6+col)*11 % 360}, 50%, 60%)`} opacity="0.5" stroke="#f97316" strokeWidth="0.3"/>
        ))
      )}
      <text x="405" y="172" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">cada píxel preservado exactamente</text>
    </svg>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.5rem', textAlign: 'left' }}>
      <div style={{ background: 'rgba(245,158,11,0.08)', borderRadius: 8, padding: '0.75rem', fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
        <strong style={{ color: '#f97316' }}>JPEG (lossy):</strong> divide a imagem em blocos de 8×8 píxeis, aplica a Transformada Discreta de Cosseno (DCT) a cada bloco, e descarta as componentes de alta frequência (detalhe fino) que o olho percebe menos. Quanto maior a compressão, mais detalhe é descartado — visível como "blocos" e artefactos em torno de bordas nítidas (ringing).
      </div>
      <div style={{ background: 'rgba(249,115,22,0.10)', borderRadius: 8, padding: '0.75rem', fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
        <strong style={{ color: '#f97316' }}>PNG (lossless):</strong> usa compressão sem perdas (DEFLATE) — cada píxel é reconstruído exactamente como no original. Ficheiros maiores, mas sem artefactos. Preferido para máscaras de segmentação, anotações e qualquer dado onde a precisão exacta dos valores importa.
      </div>
    </div>
  </div>
);

export default function CV1() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cv" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>MÓDULO 1</div>
        <h1 style={S.h1}>Imagem como Dado</h1>
        <p style={S.lead}>Antes de qualquer rede neuronal, é preciso perceber o que é uma imagem do ponto de vista computacional: um tensor de números, com diferentes representações de cor, formatos de armazenamento, e desafios de variabilidade que tornam a visão uma das tarefas mais difíceis em ML.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. O que é uma Imagem Digitalmente</h2>
          <p style={S.p}>Uma imagem digital é uma grelha rectangular de píxeis. Cada píxel é um ponto de cor representado por um ou mais valores numéricos. Para imagens a cores no espaço mais comum (RGB), cada píxel tem 3 valores: um para o canal vermelho (Red), um para o verde (Green) e um para o azul (Blue), tipicamente entre 0 e 255. A combinação dos três canais produz qualquer cor visível ao olho humano — por exemplo, (255, 0, 0) é vermelho puro, (0, 0, 0) é preto, (255, 255, 255) é branco e (128, 128, 128) é cinzento médio.</p>
          <p style={S.p}>Do ponto de vista de machine learning, uma imagem é simplesmente um tensor tridimensional de forma (H, W, C) onde H é a altura em píxeis, W é a largura em píxeis, e C é o número de canais (3 para RGB, 1 para escala de cinzentos, 4 se incluir um canal de transparência alpha). Para um mini-batch de N imagens, o tensor é (N, H, W, C) — ou (N, C, H, W) na convenção PyTorch. Esta ideia — "imagem = array de números" — é a base de tudo o que se segue: qualquer operação de visão computacional, da mais simples (inverter cores) à mais complexa (uma rede neuronal de centenas de milhões de parâmetros), é, no fundo, uma transformação matemática aplicada a este array.</p>
          <p style={S.p}>É importante notar a diferença entre <strong>resolução espacial</strong> (quantos píxeis existem — H × W) e <strong>profundidade de cor</strong> (quantos valores distintos cada píxel pode tomar por canal). Uma imagem pode ter alta resolução espacial mas baixa profundidade de cor (poucos tons), ou vice-versa. Ambos os factores determinam o tamanho total do tensor e, consequentemente, o custo computacional de o processar.</p>

          <PixelDiagram />

          <div style={S.note}>Antes de entrar numa rede neuronal, os valores dos píxeis são normalizados: dividir por 255 coloca os valores no intervalo [0,1]. É também comum subtrair a média e dividir pelo desvio padrão do dataset (normalização ImageNet: mean=[0.485,0.456,0.406], std=[0.229,0.224,0.225]). A secção 3 deste módulo aprofunda porquê.</div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Espaços de Cor: RGB, Grayscale, HSV, YCbCr</h2>
          <p style={S.p}>RGB não é a única forma de representar cor — é apenas a mais conveniente para ecrãs, porque corresponde directamente aos três tipos de fotorreceptores (cones) do olho humano e aos sub-píxeis vermelho/verde/azul de um monitor. Mas para muitas tarefas de visão computacional, outras representações tornam o problema mais fácil.</p>

          <ColorSpaceDiagram />

          <h3 style={S.h3}>Os quatro espaços mais usados</h3>
          <ChannelExplorer />

          <h3 style={S.h3}>Porque é que isto importa na prática</h3>
          <p style={S.p}>A escolha do espaço de cor não muda a informação total contida na imagem (é sempre possível converter entre eles, ainda que com pequenas perdas de arredondamento) — mas muda a <em>facilidade</em> de extrair determinada informação. Um exemplo clássico é a segmentação por cor: detectar uma bola de ténis amarela numa imagem. Em RGB, "amarelo sob sol forte" e "amarelo na sombra" têm valores R, G, B muito diferentes — seria preciso definir várias regiões complexas no espaço RGB. Em HSV, ambos têm um Hue muito semelhante (a cor "amarela" em si não muda), apenas o V (brilho) varia — um único intervalo de Hue resolve o problema.</p>
          <p style={S.p}>Outro exemplo: detecção de pele em imagens (usado em filtros de realidade aumentada, controlo gestual). Tons de pele de diferentes pessoas, sob diferentes iluminações, ocupam uma região relativamente compacta no espaço HSV ou YCbCr, mas estão espalhados de forma menos previsível em RGB.</p>
          <p style={S.p}>Em deep learning moderno, a maioria das CNNs trabalha directamente em RGB — a rede aprende a extrair as representações de que precisa a partir dos 3 canais durante o treino, incluindo equivalentes implícitos de Hue ou luminância nas suas camadas internas. No entanto, conhecer estes espaços continua a ser essencial para pré-processamento, augmentação de dados (ex: jitter de Hue/Saturação para simular diferentes condições de iluminação) e para tarefas de visão clássica que ainda hoje são usadas como blocos auxiliares em pipelines híbridos.</p>

          <div style={S.note}>Conversão RGB → Grayscale típica: <strong>Y = 0.299·R + 0.587·G + 0.114·B</strong>. Os pesos não são iguais porque o olho humano é mais sensível a variações no verde do que no vermelho ou no azul — esta fórmula aproxima a percepção de luminância humana.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Representação Digital: Bit Depth e Normalização</h2>
          <p style={S.p}>Cada valor de píxel não é apenas "um número" — é um número armazenado com uma precisão específica, chamada profundidade de bit (bit depth). A profundidade de bit determina quantos níveis distintos de intensidade são possíveis por canal, o que tem implicações directas tanto na qualidade visual como no comportamento de redes neuronais.</p>

          <BitDepthExplorer />

          <h3 style={S.h3}>Porque normalizar para [0,1] ou [-1,1]?</h3>
          <p style={S.p}>Redes neuronais são treinadas com algoritmos de optimização baseados em gradiente (gradient descent). Estes algoritmos são sensíveis à escala dos valores de entrada: se os inputs forem números grandes (0–255), as activações iniciais e os gradientes podem ter magnitudes muito diferentes entre camadas, tornando o treino instável ou exigindo taxas de aprendizagem (learning rates) muito pequenas e cuidadosamente ajustadas.</p>
          <p style={S.p}>Ao normalizar os píxeis para um intervalo pequeno e centrado — [0,1] (dividindo por 255) ou [-1,1] (fazendo (x/127.5) - 1) — garantimos que todas as features de entrada começam numa escala comparável, o que:</p>
          <ul style={{ paddingLeft: '1.4rem', color: 'var(--text-primary)', lineHeight: 1.9, fontSize: '1rem', marginBottom: '1rem' }}>
            <li>Acelera a convergência do treino, porque os gradientes têm magnitudes mais consistentes através das camadas.</li>
            <li>Evita saturação de funções de activação como sigmoid ou tanh, que "achatam" valores muito grandes ou muito pequenos, fazendo os gradientes desaparecerem (vanishing gradients).</li>
            <li>Torna os hiperparâmetros (learning rate, inicialização de pesos) mais transferíveis entre datasets diferentes — um learning rate ajustado para inputs em [0,1] não precisa de ser reajustado se mudarmos de dataset, desde que ambos sejam normalizados da mesma forma.</li>
          </ul>
          <p style={S.p}>A normalização "ImageNet" (subtrair a média e dividir pelo desvio-padrão por canal, calculados sobre o dataset ImageNet) vai um passo além: centra os dados em torno de zero e escala-os de forma a que a distribuição dos valores de entrada se assemelhe ao que a rede "espera" ver, especialmente relevante quando se usa transfer learning — um modelo pré-treinado foi optimizado para uma certa distribuição de inputs, e alimentá-lo com dados normalizados de forma diferente degrada o desempenho.</p>

          <div style={S.note}>Regra prática: se estás a usar um modelo pré-treinado (ResNet, ViT, CLIP, etc.), usa sempre a mesma normalização que foi usada no pré-treino desse modelo — caso contrário, as features extraídas serão sistematicamente diferentes das que a rede "aprendeu" a interpretar.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Compressão e Formatos: JPEG vs. PNG</h2>
          <p style={S.p}>O formato em que uma imagem é guardada em disco afecta directamente a qualidade dos dados que chegam ao modelo. Os dois formatos mais comuns — JPEG e PNG — representam duas filosofias opostas de compressão.</p>

          <CompressionDiagram />

          <h3 style={S.h3}>Porque é que isto importa para datasets de treino</h3>
          <p style={S.p}>Os artefactos de compressão JPEG não são apenas um problema estético — têm consequências reais para modelos de visão:</p>
          <ul style={{ paddingLeft: '1.4rem', color: 'var(--text-primary)', lineHeight: 1.9, fontSize: '1rem', marginBottom: '1rem' }}>
            <li><strong>Padrões de blocos como atalho espúrio:</strong> se todas as imagens de uma classe vierem comprimidas a uma certa qualidade JPEG e as de outra classe a uma qualidade diferente (situação comum quando se combinam datasets de fontes diferentes), a rede pode aprender a distinguir classes pelos artefactos de compressão em vez do conteúdo semântico — um modelo "perfeito" no dataset de treino mas inútil no mundo real.</li>
            <li><strong>Re-compressão em cascata:</strong> se uma imagem é gravada, redimensionada e re-gravada várias vezes em JPEG (comum em pipelines de scraping de dados da web), os artefactos acumulam-se, degradando progressivamente a qualidade.</li>
            <li><strong>Máscaras e anotações exigem lossless:</strong> uma máscara de segmentação onde cada valor de píxel codifica uma classe (ex: 0=fundo, 1=carro, 2=pessoa) NÃO pode ser guardada em JPEG — a compressão com perdas alteraria ligeiramente os valores, corrompendo os labels. Por isso máscaras são sempre PNG (ou outro formato lossless).</li>
            <li><strong>Augmentation e compressão:</strong> algumas técnicas de data augmentation aplicam deliberadamente compressão JPEG simulada como forma de tornar o modelo robusto a imagens de baixa qualidade que possa encontrar em produção (ex: fotos enviadas por utilizadores, comprimidas pelo telemóvel ou rede social).</li>
          </ul>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Característica</th><th style={S.th}>JPEG</th><th style={S.th}>PNG</th></tr></thead>
              <tbody>
                {[
                  ['Tipo de compressão', 'Com perdas (lossy)', 'Sem perdas (lossless)'],
                  ['Tamanho típico', 'Pequeno (5–20× menor)', 'Maior'],
                  ['Suporta transparência', 'Não', 'Sim (canal alpha)'],
                  ['Uso recomendado', 'Fotos naturais, datasets grandes onde espaço importa', 'Máscaras, anotações, gráficos, qualquer dado onde o valor exacto do píxel importa'],
                  ['Re-compressão', 'Degrada a cada gravação', 'Sem perda, mesmo após múltiplas gravações'],
                ].map(([f, j, p]) => (
                  <tr key={f}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{f}</td><td style={S.td}>{j}</td><td style={S.td}>{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Tensores e Batches</h2>
          <p style={S.p}>Quando uma imagem é carregada por uma biblioteca como PIL ou OpenCV, é tipicamente representada como um array 3D (H, W, C). Mas redes neuronais não processam uma imagem de cada vez de forma eficiente — processam <strong>batches</strong> (lotes) de várias imagens em simultâneo, explorando o paralelismo massivo das GPUs. Isto acrescenta uma quarta dimensão, N (número de imagens no batch), criando um tensor 4D.</p>

          <TensorLayoutExplorer />

          <h3 style={S.h3}>Porque processar em batches?</h3>
          <p style={S.p}>Processar imagens uma a uma seria computacionalmente ineficiente — uma GPU tem milhares de núcleos e processar uma única imagem pequena deixaria a maioria deles ociosos. Ao agrupar N imagens num único tensor, a mesma operação (ex: uma convolução) é aplicada a todas em paralelo, amortizando o overhead de transferência de dados e maximizando a utilização do hardware. Além disso, o cálculo do gradiente durante o treino é feito sobre a média (ou soma) das perdas de todo o batch, o que produz estimativas de gradiente mais estáveis do que usar uma única imagem (stochastic gradient descent puro) — este é o compromisso central do mini-batch gradient descent.</p>
          <p style={S.p}>Uma restrição prática importante: todas as imagens num mesmo batch devem ter exactamente a mesma forma (H, W, C), porque um tensor é uma estrutura rectangular regular — não pode ter "linhas" de tamanhos diferentes. Isto é uma das razões pelas quais o redimensionamento (próxima secção) é uma etapa de pré-processamento quase universal: imagens de um dataset raramente têm todas a mesma resolução original, mas precisam de ser uniformizadas antes de formar um batch.</p>

          <div style={S.note}>Channels-first (NCHW) vs. channels-last (NHWC) não é apenas uma questão de convenção — pode ter impacto real de performance dependendo do hardware e da biblioteca. Misturar convenções (ex: carregar dados em NHWC mas alimentar um modelo PyTorch que espera NCHW) é um erro comum que produz tensores com a forma "tecnicamente válida" mas semanticamente errada — por exemplo, uma imagem de 3×224×224 interpretada como se tivesse 3 píxeis de altura, 224 de largura e 224 canais.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>6. Amostragem, Resolução e Interpolação</h2>
          <p style={S.p}>A resolução de uma imagem — o número de píxeis em altura e largura — não é apenas um detalhe de armazenamento. É uma decisão de design que afecta tanto a qualidade da informação disponível como a arquitectura e o custo computacional do modelo que a vai processar.</p>

          <h3 style={S.h3}>Redimensionamento (resize)</h3>
          <p style={S.p}>Quase todos os pipelines de visão computacional incluem uma etapa de redimensionamento: as imagens originais de um dataset podem ter resoluções muito variadas (uma foto de telemóvel moderna pode ter 4000×3000 píxeis; uma imagem da web pode ter 300×200), mas a rede neuronal espera um tamanho de entrada fixo (ex: 224×224, 384×384, 512×512). Redimensionar significa criar uma nova grelha de píxeis com dimensões diferentes — o que implica <em>inventar</em> valores para posições que não existiam exactamente na imagem original (ao ampliar) ou <em>combinar</em> múltiplos píxeis originais num só (ao reduzir). É aqui que entra a interpolação.</p>

          <InterpolationExplorer />

          <h3 style={S.h3}>Aliasing</h3>
          <p style={S.p}>Quando se reduz drasticamente a resolução de uma imagem (downsampling) sem cuidado, pode ocorrer <strong>aliasing</strong>: padrões de alta frequência na imagem original (ex: textura fina de tecido, padrões repetitivos como persianas ou grades) podem produzir padrões falsos — efeitos moiré, ondulações que não existiam na cena real — porque a nova grelha de píxeis, mais grosseira, não consegue "amostrar" correctamente essas frequências altas (este é o fenómeno descrito pelo teorema de Nyquist-Shannon: para representar correctamente uma frequência, é preciso amostrar a uma taxa pelo menos duas vezes superior). A solução clássica é aplicar um leve desfoque (anti-aliasing) antes de reduzir a resolução, removendo as frequências que a nova resolução não conseguiria representar correctamente — muitas bibliotecas de redimensionamento fazem isto automaticamente.</p>

          <h3 style={S.h3}>Como a resolução de input afecta a arquitectura</h3>
          <p style={S.p}>A escolha da resolução de entrada não é arbitrária — propaga-se por toda a arquitectura da rede:</p>
          <ul style={{ paddingLeft: '1.4rem', color: 'var(--text-primary)', lineHeight: 1.9, fontSize: '1rem', marginBottom: '1rem' }}>
            <li><strong>Custo computacional:</strong> numa CNN, dobrar a resolução (ex: de 224×224 para 448×448) quadruplica o número de píxeis — e, em muitas camadas, quadruplica também o número de operações. Em arquitecturas baseadas em Transformer (ViT), o custo cresce ainda mais rapidamente, porque a imagem é dividida em patches e o custo da auto-atenção escala quadraticamente com o número de patches.</li>
            <li><strong>Tamanho do "campo receptivo" relativo:</strong> um filtro convolucional de 3×3 "vê" uma fracção diferente da imagem consoante a resolução de input — a mesma arquitectura pode precisar de mais camadas (maior profundidade) para que o campo receptivo final cubra objectos grandes em imagens de alta resolução.</li>
            <li><strong>Detalhe disponível para objectos pequenos:</strong> reduzir demasiado a resolução pode fazer desaparecer objectos pequenos (ex: um sinal de trânsito distante numa imagem de condução autónoma) — em tarefas de detecção, a resolução de input é frequentemente um compromisso explícito entre velocidade de inferência e capacidade de detectar objectos pequenos.</li>
            <li><strong>Compatibilidade com pesos pré-treinados:</strong> muitos modelos pré-treinados (ex: ResNet, ViT) foram treinados a uma resolução específica. Usar uma resolução muito diferente sem ajustes pode degradar o desempenho — embora algumas arquitecturas (totalmente convolucionais, ou com positional encodings interpoláveis) sejam mais flexíveis a este respeito.</li>
          </ul>

          <div style={S.note}>Regra prática: a resolução de input é tipicamente escolhida como o menor valor que ainda preserva a informação necessária para a tarefa — porque cada aumento de resolução tem um custo computacional não-trivial, multiplicado por todas as imagens do dataset, todas as épocas de treino, e todas as inferências em produção.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>7. Por que é que a Visão é Difícil</h2>
          <p style={S.p}>Uma imagem de 224×224×3 tem 150.528 valores. A questão central é: como mapear estes 150 mil números para uma categoria semântica como "gato" ou "cadeira"? O problema é que o mesmo conceito semântico pode produzir padrões de píxeis completamente diferentes — e padrões de píxeis muito semelhantes podem corresponder a conceitos diferentes. Esta diferença entre a representação de baixo nível (valores numéricos de píxeis) e o significado de alto nível (categorias, relações, intenções) é frequentemente chamada de "semantic gap" — e é o problema central que toda a visão computacional tenta resolver.</p>
          <p style={S.p}>Os exemplos abaixo ilustram as principais fontes de variabilidade que um sistema de visão precisa de "ignorar" para chegar à mesma conclusão semântica que um humano chegaria — chamamos a isto procurar <strong>invariâncias</strong>: o objectivo não é que a representação interna do modelo seja sensível a estas variações, mas sim que permaneça estável (invariante, ou pelo menos robusta) perante elas, enquanto continua sensível às diferenças que de facto distinguem uma classe de outra.</p>

          <ChallengeExplorer />

          <div style={S.note}>Nota importante: muitas destas variações podem (e devem) ser simuladas durante o treino através de <strong>data augmentation</strong> — aplicar transformações aleatórias (rotação, recorte, variação de brilho/contraste, flips horizontais, etc.) às imagens de treino, expondo o modelo artificialmente a uma maior diversidade do que aquela presente no dataset original.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>8. Por que Não Usar uma MLP Directamente</h2>
          <p style={S.p}>A abordagem mais ingénua seria fazer flatten da imagem (transformar o tensor (H,W,C) num vector 1D de 150.528 valores) e usar uma rede totalmente ligada (Multi-Layer Perceptron, MLP), tal como se faria com dados tabulares. Esta abordagem tem três problemas fundamentais que motivaram o desenho das Redes Neuronais Convolucionais (CNNs).</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Problema</th><th style={S.th}>MLP (flatten)</th><th style={S.th}>CNN</th></tr></thead>
              <tbody>
                {[
                  ['Número de parâmetros', '150.528 entradas × N neurónios = enorme. Para a 1ª camada com 1000 neurónios: 150M parâmetros — só nessa camada. Risco severo de overfitting e custo de memória proibitivo.', 'Filtros de 3×3×3 = 27 parâmetros partilhados por toda a imagem. Drasticamente menos parâmetros, independentemente da resolução de input.'],
                  ['Invariância espacial', 'Um gato no canto superior esquerdo e o mesmo gato no canto inferior direito correspondem a vectores de input completamente diferentes — a MLP teria de aprender separadamente a reconhecer "gato" em cada posição possível.', 'A mesma convolução (mesmos pesos) é aplicada em todas as posições da imagem — um detector de "orelha de gato" aprendido numa posição funciona automaticamente em qualquer outra posição (translation equivariance).'],
                  ['Estrutura local', 'Trata todos os píxeis como entradas independentes, ignorando que píxeis vizinhos estão fortemente correlacionados (formam bordas, texturas, formas).', 'Os filtros operam sobre pequenas regiões locais — exploram directamente o facto de que a informação relevante (bordas, texturas, padrões) está concentrada em vizinhanças espaciais.'],
                ].map(([p, mlp, cnn]) => (
                  <tr key={p}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{p}</td><td style={{ ...S.td, color: '#f97316' }}>{mlp}</td><td style={{ ...S.td, color: '#f97316' }}>{cnn}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={S.p}>Há ainda um quarto argumento, mais subtil: ao fazer flatten, perde-se explicitamente a informação sobre a topologia 2D da imagem — a MLP não tem qualquer noção de que o píxel na posição (i,j) está espacialmente próximo dos píxeis (i+1,j) e (i,j+1). Toda essa informação geométrica teria de ser re-aprendida do zero a partir dos dados, em vez de ser incorporada como um "prior" estrutural na própria arquitectura — o que as CNNs (e, de outra forma, os Vision Transformers com positional encodings) fazem.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>9. Datasets de Referência</h2>
          <p style={S.p}>Datasets de referência (benchmarks) desempenharam um papel central na evolução da visão computacional — não só como medidas de progresso, mas como motores de inovação: avanços arquitectónicos importantes (AlexNet, ResNet, ViT) foram validados e popularizados precisamente por melhorarem o estado-da-arte nestes datasets.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Dataset</th><th style={S.th}>Imagens</th><th style={S.th}>Classes</th><th style={S.th}>Resolução</th><th style={S.th}>Impacto</th></tr></thead>
              <tbody>
                {[
                  ['MNIST', '70.000', '10 (dígitos)', '28×28 (cinzento)', 'Benchmark introdutório — baseline de qualquer modelo de classificação. Hoje considerado "demasiado fácil" para investigação séria, mas continua útil para ensino e prototipagem rápida.'],
                  ['CIFAR-10/100', '60.000 / 60.000', '10 / 100', '32×32 RGB', 'Primeiro benchmark popular com objectos naturais a cores, ainda que a baixa resolução. Continua a ser usado para testar ideias rapidamente devido ao seu tamanho reduzido.'],
                  ['ImageNet (ILSVRC)', '1.2 milhões', '1.000', '~256×256 RGB', 'O benchmark que desencadeou a revolução do deep learning em 2012 (AlexNet). Modelos pré-treinados em ImageNet são a base de transfer learning em praticamente toda a visão computacional moderna.'],
                  ['COCO', '330.000', '80 (detecção)', 'Variável', 'Detecção de objectos, segmentação de instâncias, captioning de imagens — benchmark moderno de referência para tarefas além da simples classificação, com cenas complexas e múltiplos objectos por imagem.'],
                ].map(([d, n, c, r, i]) => (
                  <tr key={d}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{d}</td><td style={S.td}>{n}</td><td style={S.td}>{c}</td><td style={S.td}>{r}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{i}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}>Vale a pena notar uma tendência: ao longo do tempo, os datasets evoluíram de tarefas simples (classificação de um único objecto centrado, baixa resolução) para tarefas cada vez mais ricas e próximas de cenários reais (múltiplos objectos, oclusões, fundos complexos, várias tarefas simultâneas no mesmo dataset). Esta evolução reflecte directamente os desafios discutidos na secção 7 — à medida que os modelos foram resolvendo um nível de dificuldade, novos datasets foram desenhados para expor as limitações seguintes.</p>
        </div>

        
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>10. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
            <li>Imagem = tensor (H, W, C). Para RGB: cada píxel tem 3 valores em [0,255] → normalizar para [0,1] (ou [-1,1], ou normalização ImageNet) antes de entrar na rede.</li>
            <li>RGB não é o único espaço de cor: HSV separa matiz (cor), saturação e brilho — útil para segmentação por cor robusta a iluminação. YCbCr separa luminância de crominância — base da compressão JPEG. Grayscale reduz a 1 canal quando a cor não é informativa.</li>
            <li>Bit depth (8-bit, 16-bit, float) determina a precisão dos valores de píxel; a conversão para float normalizado é obrigatória antes de qualquer operação de rede neuronal, por estabilidade do treino.</li>
            <li>JPEG (com perdas, blocos DCT 8×8) introduz artefactos que podem virar atalhos espúrios para o modelo; PNG (sem perdas) é obrigatório para máscaras e anotações.</li>
            <li>Imagens tornam-se tensores 4D em batches: (N,C,H,W) channels-first (PyTorch) vs. (N,H,W,C) channels-last (TensorFlow/Keras). Todas as imagens de um batch precisam da mesma forma — daí a necessidade de redimensionamento.</li>
            <li>Resize usa interpolação (nearest, bilinear, bicubic) — cada uma com diferentes compromissos entre custo e qualidade; downsampling sem cuidado causa aliasing. A resolução de input propaga-se ao custo computacional e ao desenho da arquitectura.</li>
            <li>Os desafios fundamentais da visão: iluminação, deformação, oclusão, variação intra-classe, fundo variável — todos exigem que o modelo aprenda invariâncias, frequentemente reforçadas por data augmentation.</li>
            <li>MLP em flatten é impraticável: demasiados parâmetros, sem invariância espacial, ignora estrutura local e perde a topologia 2D. CNNs resolvem os 3 problemas: partilha de pesos, invariância à translação e exploração de estrutura local.</li>
          </ul>
          </div>
        </div>
        </div>
      </div>
      );
}
