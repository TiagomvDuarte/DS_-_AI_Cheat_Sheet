import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.06)', borderLeft: '3px solid #4a9eed', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const FilterDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Convolução Manual — Filtro de Blur 3×3</p>
    <svg viewBox="0 0 540 150" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
      </defs>
      {/* Input patch */}
      <text x="65" y="16" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5" fontWeight="700">Patch da imagem</text>
      {[
        [100,120,140],[80,200,180],[90,150,130]
      ].map((row, r) => row.map((val, c) => (
        <g key={`${r}-${c}`}>
          <rect x={c*38+10} y={r*38+22} width={36} height={36} rx="3"
            fill={`rgb(${val},${val},${val})`} stroke="var(--bg-primary)" strokeWidth="1"/>
          <text x={c*38+28} y={r*38+44} textAnchor="middle" fill={val > 140 ? '#000' : '#fff'} fontSize="9" fontWeight="600">{val}</text>
        </g>
      )))}

      {/* Multiply symbol */}
      <text x="152" y="80" fill="var(--text-secondary)" fontSize="20">×</text>

      {/* Kernel */}
      <text x="220" y="16" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5" fontWeight="700">Kernel (1/9 cada)</text>
      {[
        [1,1,1],[1,1,1],[1,1,1]
      ].map((row, r) => row.map((val, c) => (
        <g key={`k-${r}-${c}`}>
          <rect x={c*38+168} y={r*38+22} width={36} height={36} rx="3"
            fill="rgba(74,158,237,0.2)" stroke="#4a9eed" strokeWidth="1.5"/>
          <text x={c*38+186} y={r*38+44} textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">1/9</text>
        </g>
      )))}

      {/* Equal */}
      <text x="320" y="80" fill="var(--text-secondary)" fontSize="20">=</text>

      {/* Result */}
      <text x="410" y="16" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5" fontWeight="700">Pixel de saída</text>
      <rect x={370} y={52} width={80} height={56} rx="6" fill="rgba(74,158,237,0.15)" stroke="#4a9eed" strokeWidth="2"/>
      <text x={410} y={83} textAnchor="middle" fill="#4a9eed" fontSize="13" fontWeight="800">~134</text>
      <text x={410} y={97} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">média dos 9 píxeis</text>

      {/* Formula */}
      <text x="280" y="148" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">saída = Σ(patch × kernel) = (100+120+140+80+200+180+90+150+130)/9 ≈ 132</text>
    </svg>
  </div>
);

const FilterExplorer = () => {
  const [sel, setSel] = useState(0);
  const filters = [
    {
      name: 'Blur (suavização)', color: '#4a9eed',
      kernel: [[1,1,1],[1,1,1],[1,1,1]], norm: '÷9',
      what: 'Cada píxel é substituído pela média dos seus 9 vizinhos. Remove ruído de alta frequência — suaviza a imagem.',
      use: 'Pré-processamento para remover ruído antes de detectar edges. Também usado como "anti-aliasing".',
      effect: 'Imagem mais "desfocada". Edges tornam-se menos nítidas. Ruído tipo "sal e pimenta" desaparece.',
    },
    {
      name: 'Sharpen (nitidez)', color: '#4a9eed',
      kernel: [[0,-1,0],[-1,5,-1],[0,-1,0]], norm: '',
      what: 'Amplifica as diferenças locais. O píxel central é multiplicado por 5 e subtraem-se os vizinhos — enfatiza contrastes.',
      use: 'Aumentar a nitidez percebida de imagens ligeiramente desfocadas. Usado em pós-processamento de fotografia.',
      effect: 'Edges ficam mais pronunciadas. Zonas planas mantêm-se. Pode amplificar ruído se a imagem já tiver.',
    },
    {
      name: 'Sobel X (gradiente horizontal)', color: '#4a9eed',
      kernel: [[-1,0,1],[-2,0,2],[-1,0,1]], norm: '',
      what: 'Aproxima a derivada parcial ∂I/∂x. Detecta mudanças de intensidade na direcção horizontal — edges verticais.',
      use: 'Detector de edges vertical. Combinado com Sobel Y (derivada vertical) para calcular magnitude do gradiente.',
      effect: 'Edges verticais aparecem como linhas claras. Edges horizontais são ignoradas. Zonas planas ficam a zero.',
    },
    {
      name: 'Laplaciano (2ª derivada)', color: '#4a9eed',
      kernel: [[0,1,0],[1,-4,1],[0,1,0]], norm: '',
      what: 'A segunda derivada da imagem. Detecta qualquer edge independentemente da orientação. Passa por zero nas edges.',
      use: 'Detector de edges isotrópico (sem preferência de direcção). Base do LoG (Laplacian of Gaussian).',
      effect: 'Todas as edges aparecem. Muito sensível a ruído — normalmente usa-se após blur gaussiano (LoG).',
    },
  ];
  const f = filters[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Filtros Clássicos e os seus Efeitos</p>
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {filters.map((fi, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: sel === i ? fi.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? fi.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{fi.name}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.25rem', alignItems: 'start' }}>
        <div style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '0.75rem', textAlign: 'center', minWidth: 120 }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Kernel {f.norm}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 36px)', gap: '2px', justifyContent: 'center' }}>
            {f.kernel.flat().map((v, i) => (
              <div key={i} style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4, background: v > 0 ? `rgba(74,158,237,0.10)*0.4+0.1})` : v < 0 ? `rgba(74,158,237,0.10)*0.4+0.1})` : 'var(--bg-secondary)', border: '1px solid var(--card-border)', fontSize: '0.75rem', fontWeight: 700, color: v > 0 ? '#4a9eed' : v < 0 ? '#4a9eed' : 'var(--text-secondary)' }}>{v}</div>
            ))}
          </div>
        </div>
        <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1rem', border: `1.5px solid ${f.color}30`, fontSize: '0.85rem' }}>
          <p><strong style={{ color: f.color }}>O que faz:</strong> {f.what}</p>
          <p style={{ marginTop: '0.5rem' }}><strong style={{ color: '#4a9eed' }}>Uso típico:</strong> {f.use}</p>
          <p style={{ marginTop: '0.5rem' }}><strong style={{ color: '#4a9eed' }}>Efeito visual:</strong> {f.effect}</p>
        </div>
      </div>
    </div>
  );
};

const OtsuDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Histograma Bimodal e o Threshold de Otsu</p>
    <svg viewBox="0 0 520 200" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Axes */}
      <line x1="40" y1="160" x2="490" y2="160" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="40" y1="20" x2="40" y2="160" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="265" y="190" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Intensidade do píxel (0–255)</text>
      <text x="20" y="95" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" transform="rotate(-90 20 95)">Frequência</text>

      {/* Bimodal histogram bars - left peak (background, dark) */}
      {[8,15,28,45,62,72,65,48,30,16,8,4].map((h, i) => (
        <rect key={`l-${i}`} x={50 + i*15} y={160 - h} width="13" height={h} fill="rgba(100,116,139,0.5)" />
      ))}
      {/* Bimodal histogram bars - right peak (foreground, light) */}
      {[3,6,12,22,40,60,75,68,50,32,18,9].map((h, i) => (
        <rect key={`r-${i}`} x={250 + i*16} y={160 - h} width="14" height={h} fill="rgba(74,158,237,0.5)" />
      ))}

      {/* Otsu threshold line */}
      <line x1="240" y1="15" x2="240" y2="160" stroke="#4a9eed" strokeWidth="2" strokeDasharray="6,3" />
      <text x="240" y="12" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">T* (Otsu)</text>

      {/* Labels for the two classes */}
      <text x="120" y="35" textAnchor="middle" fill="rgba(100,116,139,1)" fontSize="10" fontWeight="700">Fundo (escuro)</text>
      <text x="370" y="35" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">Objecto (claro)</text>
      <text x="265" y="178" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">0</text>
      <text x="40" y="178" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">0</text>
      <text x="480" y="178" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">255</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Otsu procura o valor T* que maximiza a variância entre as duas classes (separação máxima entre os dois "montes" do histograma) — equivalente a minimizar a variância dentro de cada classe.</p>
  </div>
);

const MorphologyExplorer = () => {
  const [sel, setSel] = useState(0);
  // 7x7 binary grid representing a noisy blob
  const original = [
    [0,0,0,0,0,0,0],
    [0,1,1,1,1,0,0],
    [0,1,1,1,1,1,0],
    [1,0,1,1,1,1,0],
    [0,1,1,1,1,0,0],
    [0,0,1,1,0,1,0],
    [0,0,0,0,0,0,0],
  ];
  const eroded = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,1,1,1,0,0],
    [0,0,1,1,1,0,0],
    [0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
  ];
  const dilated = [
    [0,1,1,1,1,1,0],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1],
    [0,0,1,1,1,1,0],
  ];
  const opened = [
    [0,0,0,0,0,0,0],
    [0,0,1,1,1,0,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0],
  ];
  const closed = [
    [0,0,0,0,0,0,0],
    [0,1,1,1,1,0,0],
    [0,1,1,1,1,1,0],
    [1,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,0,0,0,0,0,0],
  ];
  const ops = [
    {
      name: 'Original (binária + ruído)', color: '#0369a1', grid: original,
      what: 'Imagem binária resultante de um threshold. Tem um "buraco" (píxel 0 dentro do objecto, linha 4) e um pequeno "ruído" (píxel 1 isolado, canto inferior direito).',
      use: 'Ponto de partida — saída de um threshold ainda imperfeita.',
      effect: 'Forma irregular: um buraco interior e um ponto solto fora da forma principal.',
    },
    {
      name: 'Erosão', color: '#4a9eed', grid: eroded,
      what: 'Um elemento estruturante (ex: 3×3) desliza sobre a imagem; um píxel só fica branco se TODOS os píxeis sob o elemento forem brancos. "Come" as bordas do objecto.',
      use: 'Remover pequenos pontos de ruído e separar objectos que se tocam por uma fina ligação.',
      effect: 'O objecto encolhe, o ruído isolado e as ligações finas desaparecem por completo.',
    },
    {
      name: 'Dilatação', color: '#4a9eed', grid: dilated,
      what: 'Um píxel fica branco se PELO MENOS UM píxel sob o elemento estruturante for branco. "Engorda" o objecto.',
      use: 'Preencher pequenos buracos e juntar fragmentos próximos do mesmo objecto.',
      effect: 'O objecto cresce em todas as direcções; buracos pequenos ficam preenchidos; ruído também cresce.',
    },
    {
      name: 'Abertura (erosão→dilatação)', color: '#4a9eed', grid: opened,
      what: 'Aplica-se erosão seguida de dilatação com o mesmo elemento. A erosão remove o ruído; a dilatação repõe o tamanho do objecto principal.',
      use: 'Remover ruído tipo "sal" (pequenos pontos brancos isolados) sem alterar significativamente o tamanho dos objectos grandes.',
      effect: 'O ruído desaparece definitivamente; a forma principal regressa perto do tamanho original, mas mais suave.',
    },
    {
      name: 'Fecho (dilatação→erosão)', color: '#4a9eed', grid: closed,
      what: 'Aplica-se dilatação seguida de erosão com o mesmo elemento. A dilatação fecha buracos e liga fragmentos; a erosão repõe o tamanho.',
      use: 'Fechar pequenos buracos dentro de objectos e ligar partes de um objecto que ficaram separadas pelo threshold.',
      effect: 'Buracos internos pequenos desaparecem; o contorno fica mais suave; o tamanho geral mantém-se aproximadamente.',
    },
  ];
  const o = ops[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Operações Morfológicas numa Forma Binária</p>
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {ops.map((oi, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: sel === i ? oi.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? oi.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{oi.name}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.25rem', alignItems: 'start' }}>
        <div style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '0.75rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Resultado (7×7)</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 18px)', gap: '1px', justifyContent: 'center' }}>
            {o.grid.flat().map((v, i) => (
              <div key={i} style={{ width: 18, height: 18, background: v ? o.color : 'var(--bg-secondary)', border: '1px solid var(--card-border)', opacity: v ? 0.85 : 1 }} />
            ))}
          </div>
        </div>
        <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1rem', border: `1.5px solid ${o.color}30`, fontSize: '0.85rem' }}>
          <p><strong style={{ color: o.color }}>O que faz:</strong> {o.what}</p>
          <p style={{ marginTop: '0.5rem' }}><strong style={{ color: '#4a9eed' }}>Uso típico:</strong> {o.use}</p>
          <p style={{ marginTop: '0.5rem' }}><strong style={{ color: '#4a9eed' }}>Efeito:</strong> {o.effect}</p>
        </div>
      </div>
    </div>
  );
};

const FrequencyDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Domínio Espacial vs. Domínio da Frequência</p>
    <svg viewBox="0 0 540 170" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrf" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
      </defs>

      {/* Spatial image */}
      <text x="90" y="16" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">Imagem (espaço)</text>
      <rect x="20" y="25" width="140" height="100" rx="6" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      {/* simple pattern: gradient + edge */}
      {Array.from({length: 7}).map((_, r) => Array.from({length: 7}).map((_, c) => {
        const v = (r < 3 ? 60 : 200) + (c % 2 === 0 ? 10 : -10);
        return <rect key={`${r}-${c}`} x={20 + c*20} y={25 + r*14.3} width="20" height="14.3" fill={`rgb(${v},${v},${v})`} />;
      }))}

      {/* FFT arrow */}
      <line x1="170" y1="75" x2="225" y2="75" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#arrf)" />
      <text x="197" y="68" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">FFT</text>

      {/* Frequency spectrum */}
      <text x="320" y="16" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">Espectro (frequência)</text>
      <rect x="240" y="25" width="160" height="100" rx="6" fill="#0a0a0a" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      {/* center bright = low freq, edges dimmer = high freq */}
      <circle cx="320" cy="75" r="45" fill="rgba(255,255,255,0.05)" />
      <circle cx="320" cy="75" r="28" fill="rgba(255,255,255,0.18)" />
      <circle cx="320" cy="75" r="13" fill="rgba(255,255,255,0.55)" />
      <circle cx="320" cy="75" r="8" fill="rgba(255,255,255,0.95)" />
      <text x="320" y="78" textAnchor="middle" fill="#1a1a1a" fontSize="8" fontWeight="800">DC</text>

      {/* IFFT arrow */}
      <line x1="400" y1="75" x2="455" y2="75" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#arrf)" />
      <text x="427" y="68" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">IFFT</text>

      {/* Reconstructed */}
      <text x="495" y="16" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">Reconstrução</text>
      <rect x="460" y="25" width="70" height="100" rx="6" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <text x="495" y="80" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">imagem ≈</text>
      <text x="495" y="92" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">original</text>

      {/* Legend */}
      <text x="270" y="150" fill="var(--text-secondary)" fontSize="8">centro brilhante = baixas frequências (formas, regiões suaves)</text>
      <text x="270" y="163" fill="var(--text-secondary)" fontSize="8">periferia = altas frequências (edges, texturas, ruído)</text>
    </svg>
  </div>
);

const FrequencyFilterExplorer = () => {
  const [sel, setSel] = useState(0);
  const opts = [
    {
      name: 'Passa-baixo (low-pass)', color: '#4a9eed', radius: 14, keep: 'centro',
      what: 'Mantém apenas as frequências baixas (perto do centro do espectro) e elimina/atenua as altas (periferia).',
      spatial: 'Equivalente a aplicar um filtro de blur/gaussiano no domínio espacial — convolução = multiplicação no domínio da frequência.',
      effect: 'A imagem reconstruída fica desfocada: formas gerais mantêm-se, mas detalhes finos, texturas e edges desaparecem.',
    },
    {
      name: 'Passa-alto (high-pass)', color: '#4a9eed', radius: 14, keep: 'periferia',
      what: 'Mantém apenas as frequências altas (periferia do espectro) e elimina/atenua as baixas (centro).',
      spatial: 'Equivalente a um filtro de sharpen/detector de edges no domínio espacial — realça transições rápidas de intensidade.',
      effect: 'A imagem reconstruída mostra essencialmente os contornos e texturas finas; regiões planas ficam pretas (perto de zero).',
    },
  ];
  const f = opts[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Filtragem no Domínio da Frequência</p>
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {opts.map((fi, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: sel === i ? fi.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? fi.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{fi.name}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.25rem', alignItems: 'start' }}>
        <div style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '0.75rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Máscara aplicada ao espectro</p>
          <svg viewBox="0 0 100 100" width="110" height="110">
            <rect x="0" y="0" width="100" height="100" fill="#0a0a0a" />
            {f.keep === 'centro' ? (
              <circle cx="50" cy="50" r={f.radius * 1.6} fill={f.color} opacity="0.55" />
            ) : (
              <>
                <rect x="0" y="0" width="100" height="100" fill={f.color} opacity="0.35" />
                <circle cx="50" cy="50" r={f.radius * 1.6} fill="#0a0a0a" />
              </>
            )}
            <text x="50" y="53" textAnchor="middle" fill={f.color} fontSize="7" fontWeight="700">DC</text>
          </svg>
        </div>
        <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1rem', border: `1.5px solid ${f.color}30`, fontSize: '0.85rem' }}>
          <p><strong style={{ color: f.color }}>O que faz:</strong> {f.what}</p>
          <p style={{ marginTop: '0.5rem' }}><strong style={{ color: '#4a9eed' }}>Equivalência espacial:</strong> {f.spatial}</p>
          <p style={{ marginTop: '0.5rem' }}><strong style={{ color: '#4a9eed' }}>Efeito:</strong> {f.effect}</p>
        </div>
      </div>
    </div>
  );
};

const TemplateMatchingDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Template Matching por Correlação Cruzada</p>
    <svg viewBox="0 0 540 180" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Source image */}
      <text x="120" y="16" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">Imagem de procura</text>
      <rect x="20" y="25" width="200" height="120" rx="6" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      {/* sliding template highlighted */}
      <rect x="60" y="55" width="50" height="50" rx="4" fill="none" stroke="#4a9eed" strokeWidth="2" strokeDasharray="4,2"/>
      <rect x="130" y="75" width="50" height="50" rx="4" fill="rgba(74,158,237,0.25)" stroke="#4a9eed" strokeWidth="2.5"/>
      <text x="155" y="103" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">melhor match</text>
      <text x="85" y="83" textAnchor="middle" fill="#4a9eed" fontSize="8">a testar...</text>

      {/* Arrow */}
      <text x="265" y="90" fill="var(--text-secondary)" fontSize="20" textAnchor="middle">→</text>

      {/* Template */}
      <text x="320" y="16" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">Template</text>
      <rect x="290" y="40" width="60" height="60" rx="4" fill="rgba(74,158,237,0.25)" stroke="#4a9eed" strokeWidth="2.5"/>
      <text x="320" y="74" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">T</text>

      {/* Correlation map */}
      <text x="470" y="16" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">Mapa de correlação</text>
      <rect x="400" y="25" width="140" height="120" rx="6" fill="#0a0a0a" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <circle cx="455" cy="75" r="10" fill="#4a9eed" />
      <text x="455" y="100" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">pico = posição</text>
      <text x="455" y="111" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">do template</text>

      <text x="270" y="170" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Desliza o template sobre a imagem; em cada posição calcula NCC. O pico do mapa indica a melhor correspondência.</text>
    </svg>
  </div>
);

const OpticalFlowDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Optical Flow — Vectores de Movimento entre Frames</p>
    <svg viewBox="0 0 520 170" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrg" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
      </defs>

      <text x="110" y="16" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">Frame t</text>
      <rect x="10" y="25" width="200" height="120" rx="6" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <circle cx="70" cy="85" r="18" fill="rgba(74,158,237,0.3)" stroke="#4a9eed" strokeWidth="2"/>
      <text x="70" y="90" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">obj</text>

      <text x="410" y="16" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">Frame t+1</text>
      <rect x="310" y="25" width="200" height="120" rx="6" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <circle cx="450" cy="105" r="18" fill="rgba(74,158,237,0.3)" stroke="#4a9eed" strokeWidth="2"/>
      <text x="450" y="110" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">obj</text>

      {/* Flow vector field overlay in middle showing arrows */}
      <text x="260" y="80" textAnchor="middle" fill="var(--text-secondary)" fontSize="20"></text>
      <text x="260" y="98" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">campo de vectores</text>
      <text x="260" y="110" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">(u, v) por píxel</text>

      {/* small grid of arrows on frame t to suggest flow */}
      {[[60,60],[100,60],[140,60],[60,100],[100,100],[140,100]].map(([x,y], i) => (
        <line key={i} x1={x} y1={y} x2={x+24} y2={y+8} stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrg)" opacity="0.85"/>
      ))}

      <text x="260" y="160" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Para cada píxel/ponto, o optical flow estima o deslocamento (u,v) entre frames consecutivos.</text>
    </svg>
  </div>
);

export default function CV2() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cv" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>MÓDULO 2</div>
        <h1 style={S.h1}>Processamento Clássico de Imagem</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. Filtros e Convolução Manual</h2>
          <p style={S.p}>Um filtro (ou kernel) é uma pequena matriz (tipicamente 3×3 ou 5×5) que desliza sobre a imagem. Em cada posição, o filtro é multiplicado elemento-a-elemento pelo patch correspondente da imagem e os resultados são somados — produzindo um único valor de saída. Este processo chama-se convolução (ou tecnicamente cross-correlation, já que a convolução "verdadeira" implica inverter o kernel 180°, mas na prática raramente importa porque os kernels usados são simétricos ou são aprendidos/desenhados já na orientação correcta).</p>
          <p style={S.p}>O insight fundamental: diferentes kernels detectam diferentes padrões. Um kernel com todos os valores iguais faz blur. Um kernel com valores positivos no centro e negativos à volta detecta edges. Estas propriedades eram conhecidas de processamento de sinal — a CV clássica usava-as directamente, desenhadas à mão por engenheiros com base em teoria de filtros e experimentação.</p>
          <p style={S.p}>Dois parâmetros adicionais controlam o comportamento da convolução: o <strong>padding</strong> (o que fazer nas bordas da imagem, onde o kernel "sai fora" — normalmente preenche-se com zeros, replica-se o píxel da borda, ou espelha-se a imagem) e o <strong>stride</strong> (de quantos em quantos píxeis o kernel se desloca — stride 1 produz uma saída do mesmo tamanho, stride 2 reduz a resolução a metade). Estes mesmos conceitos reaparecem, sem alterações, nas camadas convolucionais das CNNs.</p>

          <FilterDiagram />
          <FilterExplorer />

          <div style={S.note}>Nota sobre normalização: kernels que representam uma média (como o blur) são normalizados (divididos pela soma dos seus valores) para que a intensidade global da imagem não mude. Kernels de detecção de edges normalmente somam zero — em regiões planas a saída é zero, e só há resposta onde há variação de intensidade.</div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Thresholding e Segmentação Clássica</h2>
          <p style={S.p}>Segmentação é o processo de dividir uma imagem em regiões — tipicamente "objecto" vs. "fundo". A técnica mais simples é o <strong>thresholding binário</strong>: escolhe-se um valor T e cada píxel torna-se branco (255) se a sua intensidade for maior que T, ou preto (0) caso contrário. O resultado é uma imagem binária, base para muitas operações posteriores (contagem de objectos, operações morfológicas, extracção de contornos).</p>
          <p style={S.p}>O problema óbvio: como escolher T? Um valor fixo funciona mal se a iluminação variar entre imagens, ou mesmo dentro da mesma imagem. Surgem então métodos automáticos.</p>

          <h3 style={S.h3}>Método de Otsu — selecção automática do threshold</h3>
          <p style={S.p}>O método de Otsu (1979) assume que a imagem tem um histograma de intensidades aproximadamente <strong>bimodal</strong> — dois "montes", um correspondente ao fundo e outro ao objecto. O algoritmo testa todos os valores possíveis de T (0 a 255) e, para cada um, divide os píxeis em duas classes (abaixo e acima de T). Calcula a <strong>variância intra-classe</strong> (quão dispersos estão os valores dentro de cada classe) e escolhe o T que a minimiza — o que é matematicamente equivalente a maximizar a variância entre as duas classes.</p>

          <OtsuDiagram />

          <p style={S.p}>Otsu é totalmente automático e não requer parâmetros manuais — apenas o histograma da imagem. Funciona muito bem quando as duas classes têm distribuições de intensidade claramente separadas (ex: documento de texto sobre fundo branco, célula sobre fundo de microscópio).</p>

          <h3 style={S.h3}>Thresholding adaptativo</h3>
          <p style={S.p}>Quando a iluminação varia através da imagem (ex: uma sombra a atravessar um documento fotografado), um único T global falha — partes da imagem ficam todas brancas ou todas pretas. O <strong>thresholding adaptativo</strong> resolve isto calculando um threshold diferente para cada píxel, com base na vizinhança local: tipicamente T(x,y) = média (ou média ponderada gaussiana) dos píxeis numa janela à volta de (x,y), menos uma constante C.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Método</th><th style={S.th}>Threshold</th><th style={S.th}>Quando usar</th><th style={S.th}>Limitação</th></tr></thead>
              <tbody>
                {[
                  ['Threshold global fixo', 'Valor único escolhido manualmente', 'Condições de captura controladas e consistentes', 'Falha se a iluminação mudar entre/dentro de imagens'],
                  ['Otsu', 'Valor único, calculado automaticamente do histograma', 'Histograma bimodal claro, iluminação uniforme', 'Falha se as classes não forem bem separadas ou houver gradiente de luz'],
                  ['Adaptativo (local)', 'Um valor por píxel, baseado na vizinhança local', 'Iluminação não-uniforme, sombras, scans de documentos', 'Mais lento; sensível ao tamanho da janela escolhida'],
                ].map(([m, t, w, l]) => (
                  <tr key={m}><td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>{m}</td><td style={S.td}>{t}</td><td style={{ ...S.td, color: '#4a9eed' }}>{w}</td><td style={{ ...S.td, color: '#4a9eed', fontSize: '0.83rem' }}>{l}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>O thresholding é frequentemente o primeiro passo de um pipeline clássico: threshold → operações morfológicas (limpar a máscara) → extracção de contornos → cálculo de propriedades (área, perímetro, centroide) de cada objecto.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Operações Morfológicas</h2>
          <p style={S.p}>As operações morfológicas trabalham sobre imagens binárias (ou em escala de cinzentos, com adaptações) e usam um <strong>elemento estruturante</strong> — uma pequena máscara (ex: quadrado 3×3, cruz, círculo) que define a vizinhança considerada em cada píxel. As duas operações fundamentais são erosão e dilatação; abertura e fecho são combinações destas duas.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Operação</th><th style={S.th}>Regra</th><th style={S.th}>Efeito geral</th><th style={S.th}>Uso típico</th></tr></thead>
              <tbody>
                {[
                  ['Erosão', 'Píxel fica branco só se TODOS os píxeis sob o elemento estruturante forem brancos', 'Encolhe objectos brancos', 'Remover pequenos pontos de ruído; separar objectos ligados por uma fina ponte'],
                  ['Dilatação', 'Píxel fica branco se PELO MENOS UM píxel sob o elemento for branco', 'Engorda objectos brancos', 'Preencher pequenos buracos; juntar fragmentos próximos'],
                  ['Abertura', 'Erosão seguida de dilatação', 'Remove ruído mantendo o tamanho geral', 'Limpar "sal" (pontos brancos isolados) sem deformar objectos grandes'],
                  ['Fecho', 'Dilatação seguida de erosão', 'Fecha buracos mantendo o tamanho geral', 'Preencher "buracos" pretos dentro de objectos; ligar partes próximas do mesmo objecto'],
                ].map(([op, rule, eff, use]) => (
                  <tr key={op}><td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>{op}</td><td style={S.td}>{rule}</td><td style={S.td}>{eff}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{use}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <MorphologyExplorer />

          <p style={S.p}>Erosão e dilatação não são inversas exactas uma da outra — por isso abertura ≠ fecho, e aplicar abertura seguida de fecho (ou vice-versa) é uma operação muito comum para limpar máscaras binárias ruidosas antes de extrair contornos ou contar objectos. O tamanho e forma do elemento estruturante controlam quão "agressiva" é cada operação: um elemento maior remove ruído maior mas também pode destruir detalhes finos do objecto de interesse.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Detecção de Edges — Canny</h2>
          <p style={S.p}>O algoritmo de Canny (1986) é o detector de edges clássico mais usado. É um pipeline de 4 passos que produz edges finas, precisas e com boa supressão de ruído — desenhado com três objectivos explícitos: boa detecção (encontrar edges reais, não ruído), boa localização (a edge marcada deve estar perto da edge real) e resposta única (cada edge real deve gerar apenas uma marcação).</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Passo</th><th style={S.th}>Operação</th><th style={S.th}>Porquê</th></tr></thead>
              <tbody>
                {[
                  ['1. Blur Gaussiano', 'Aplicar filtro gaussiano à imagem', 'Remover ruído antes de calcular gradientes — ruído cria falsos edges'],
                  ['2. Gradiente', 'Calcular magnitude |G| = √(Gx²+Gy²) e direcção θ = atan2(Gy,Gx)', 'Pixels com gradiente alto estão em zonas de mudança intensa — candidatos a edge'],
                  ['3. Non-maximum suppression', 'Para cada pixel, manter só se for máximo local na direcção do gradiente', 'Afinar edges de largura múltipla para edges de 1 píxel de espessura'],
                  ['4. Double thresholding', 'Threshold alto: edge forte. Threshold baixo: edge fraca. Edges fracas ligadas a fortes são mantidas', 'Eliminar falsos edges fracos mas manter edges reais que passam por zonas de baixo contraste'],
                ].map(([s, o, p]) => (
                  <tr key={s}><td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>{s}</td><td style={S.td}>{o}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Hysteresis — o "double thresholding" em detalhe</h3>
          <p style={S.p}>O último passo, chamado <strong>hysteresis thresholding</strong>, usa dois limiares: um alto (T_alto) e um baixo (T_baixo). Píxeis com gradiente acima de T_alto são imediatamente marcados como edge ("forte"). Píxeis entre T_baixo e T_alto só são marcados como edge se estiverem ligados (8-conectividade) a um píxel já marcado como edge forte. Píxeis abaixo de T_baixo são descartados. Isto permite que edges com contraste variável (parte forte, parte fraca, mas contínua) sejam detectadas na totalidade, sem deixar passar ruído isolado de baixo contraste.</p>

          <div style={S.note}>A escolha de T_alto e T_baixo é o principal "hiperparâmetro manual" do Canny. Uma regra prática comum é definir T_baixo ≈ 0.4 × T_alto, e ajustar T_alto consoante o contraste típico das imagens do domínio.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Domínio da Frequência</h2>
          <p style={S.p}>Até agora pensámos numa imagem como uma grelha de intensidades — o <strong>domínio espacial</strong>. A Transformada de Fourier (FFT, Fast Fourier Transform, na sua versão computacional) reescreve essa mesma imagem como uma soma de ondas sinusoidais 2D de diferentes frequências, amplitudes e orientações — o <strong>domínio da frequência</strong>. É uma representação matematicamente equivalente: nenhuma informação é perdida, apenas reorganizada.</p>

          <FrequencyDiagram />

          <p style={S.p}>No espectro de frequência, o centro representa as <strong>frequências baixas</strong> — variações lentas de intensidade, correspondentes às formas grandes, gradientes suaves e iluminação geral da imagem. A periferia representa as <strong>frequências altas</strong> — variações rápidas de intensidade, correspondentes a edges nítidas, texturas finas, detalhes pequenos e também ruído.</p>

          <h3 style={S.h3}>A relação com filtros espaciais</h3>
          <p style={S.p}>O <strong>teorema da convolução</strong> diz que convolução no domínio espacial equivale a multiplicação no domínio da frequência. Isto significa que filtros que já conhecemos (blur, sharpen) podem ser vistos, de forma equivalente, como máscaras aplicadas directamente ao espectro de frequência:</p>

          <FrequencyFilterExplorer />

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Domínio espacial</th><th style={S.th}>Domínio da frequência</th><th style={S.th}>Efeito</th></tr></thead>
              <tbody>
                {[
                  ['Blur gaussiano (kernel grande)', 'Filtro passa-baixo (mantém centro, atenua periferia)', 'Suaviza a imagem; remove ruído e detalhes finos'],
                  ['Sharpen / detector de edges', 'Filtro passa-alto (mantém periferia, atenua centro)', 'Realça contornos e texturas; pode amplificar ruído'],
                  ['Filtro passa-banda', 'Mantém um anel de frequências intermédias', 'Realça texturas de uma escala específica (ex: padrões periódicos)'],
                ].map(([sp, fr, ef]) => (
                  <tr key={sp}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{sp}</td><td style={S.td}>{fr}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{ef}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Aplicação prática: ruído periódico (ex: padrões de scanline, interferência electromagnética numa câmara) aparece no espectro de frequência como picos isolados e bem localizados — fáceis de identificar e remover com uma máscara, algo quase impossível de fazer de forma limpa apenas no domínio espacial.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>6. Template Matching e Correlação</h2>
          <p style={S.p}>Template matching é a técnica mais directa para encontrar uma instância de um padrão conhecido (o "template", uma pequena imagem) dentro de uma imagem maior. O template desliza sobre a imagem, posição a posição, e em cada posição calcula-se uma medida de semelhança entre o template e o patch da imagem por baixo dele.</p>

          <TemplateMatchingDiagram />

          <h3 style={S.h3}>Correlação cruzada normalizada (NCC)</h3>
          <p style={S.p}>A medida de semelhança mais usada é a <strong>correlação cruzada normalizada</strong> (Normalized Cross-Correlation, NCC). "Normalizada" significa que se subtrai a média e se divide pelo desvio-padrão tanto do template como do patch antes de comparar — isto torna a medida invariante a mudanças globais de brilho e contraste entre o template e a imagem. O resultado é um valor entre -1 e 1: próximo de 1 indica correspondência muito forte, próximo de 0 indica nenhuma relação, e próximo de -1 indica padrão "invertido" (onde o template é claro, a imagem é escura, e vice-versa).</p>
          <p style={S.p}>O resultado de deslizar o template sobre toda a imagem é um <strong>mapa de correlação</strong> — uma imagem onde cada posição indica o quão bem o template se ajustou ali. O pico (ou picos) deste mapa indica onde o padrão foi encontrado.</p>

          <h3 style={S.h3}>Limitações</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Limitação</th><th style={S.th}>Porquê acontece</th><th style={S.th}>Mitigação parcial</th></tr></thead>
              <tbody>
                {[
                  ['Sensível à escala', 'O template tem um tamanho fixo; se o objecto na imagem aparecer maior/menor, a correlação cai drasticamente', 'Pirâmide de escalas: testar o template a múltiplos tamanhos'],
                  ['Sensível à rotação', 'O padrão de píxeis muda completamente quando o objecto roda', 'Testar múltiplas rotações do template (custo computacional alto)'],
                  ['Sensível a oclusão', 'Se parte do objecto estiver tapada, a correlação com o template completo diminui', 'Usar templates parciais ou métodos baseados em features locais (SIFT, ORB)'],
                  ['Custo computacional', 'Deslizar o template sobre toda a imagem, em todas as escalas/rotações, é caro', 'Usar FFT para calcular correlação eficientemente (teorema da convolução)'],
                ].map(([l, w, m]) => (
                  <tr key={l}><td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>{l}</td><td style={S.td}>{w}</td><td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{m}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Estas limitações são exactamente a motivação histórica para os descritores invariantes (SIFT, etc.) e, mais tarde, para as CNNs — que aprendem representações robustas a estas variações em vez de comparar píxeis directamente.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>7. Optical Flow Clássico — Lucas-Kanade</h2>
          <p style={S.p}>Optical flow estima o <strong>movimento aparente</strong> de cada píxel (ou de um conjunto de pontos) entre dois frames consecutivos de um vídeo. O resultado é um campo de vectores (u, v) — para cada ponto, quanto se deslocou horizontal e verticalmente entre os dois frames.</p>

          <OpticalFlowDiagram />

          <p style={S.p}>O método de <strong>Lucas-Kanade</strong> (1981) assume duas coisas: (1) a intensidade de um ponto não muda entre frames (assumpção de constância de brilho) — apenas a sua posição muda; e (2) o movimento é aproximadamente constante numa pequena vizinhança à volta de cada ponto. Com estas duas assumpções, e usando as derivadas espaciais e temporais da imagem, é possível resolver um pequeno sistema de equações lineares para cada ponto e obter directamente (u, v).</p>

          <h3 style={S.h3}>Aplicações</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aplicação</th><th style={S.th}>Como o optical flow ajuda</th></tr></thead>
              <tbody>
                {[
                  ['Tracking de objectos', 'Segue um conjunto de pontos de interesse (ex: cantos detectados por Harris/Shi-Tomasi) frame a frame, sem precisar de re-detectar o objecto'],
                  ['Estabilização de vídeo', 'Estima o movimento global da câmara (panning, vibração) para o compensar e produzir vídeo mais suave'],
                  ['Estimativa de movimento próprio (ego-motion)', 'Em robótica/condução autónoma, o padrão global do fluxo indica se a câmara avança, recua ou roda'],
                  ['Compressão de vídeo', 'Codecs usam vectores de movimento semelhantes para evitar re-codificar regiões que apenas se deslocaram'],
                  ['Detecção de acções', 'Padrões característicos de fluxo (ex: membros em movimento) ajudam a reconhecer acções humanas'],
                ].map(([a, h]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>{a}</td><td style={S.td}>{h}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Limitações do Lucas-Kanade clássico: falha com movimentos grandes (a assumpção de "vizinhança com movimento constante" deixa de ser válida), com mudanças bruscas de iluminação (viola a constância de brilho), e em zonas sem textura (o "problema da abertura" — não é possível determinar o movimento numa região completamente lisa). Versões modernas usam pirâmides multi-escala para lidar com movimentos grandes, e os métodos baseados em deep learning (ex: FlowNet, RAFT) ultrapassam praticamente todas estas limitações ao aprender directamente de dados.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>8. Descritores de Features Locais</h2>
          <p style={S.p}>Detectar edges é útil mas não suficiente para reconhecer objectos. A CV clássica usava descritores locais: detectar pontos de interesse (keypoints) e descrever a vizinhança de cada ponto de forma robusta à rotação, escala e iluminação — exactamente as variações que fazem o template matching falhar.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Descritor</th><th style={S.th}>Como funciona</th><th style={S.th}>Invariâncias</th><th style={S.th}>Limitação</th></tr></thead>
              <tbody>
                {[
                  ['Harris Corner', 'Detecta zonas com gradiente em duas direcções (cantos). Matriz de autocorrelação com eigenvalues altos.', 'Rotação', 'Não é invariante à escala'],
                  ['SIFT', 'Detecta keypoints em múltiplas escalas (DoG). Descreve com histogramas de gradientes orientados — vector de 128 dimensões.', 'Rotação, escala, iluminação parcial', 'Lento; 128 floats por keypoint'],
                  ['HOG', 'Divide a imagem em células, calcula histograma de gradientes em cada célula, normaliza por blocos.', 'Iluminação local', 'Não invariante à rotação ou escala'],
                  ['ORB', 'FAST keypoints + BRIEF descriptor binarizado. Muito rápido.', 'Rotação (parcial)', 'Menos robusto que SIFT em condições difíceis'],
                ].map(([d, h, i, l]) => (
                  <tr key={d}><td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>{d}</td><td style={S.td}>{h}</td><td style={{ ...S.td, color: '#4a9eed' }}>{i}</td><td style={{ ...S.td, color: '#4a9eed', fontSize: '0.83rem' }}>{l}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Do keypoint ao matching entre imagens</h3>
          <p style={S.p}>Um pipeline clássico de "encontrar correspondências entre duas imagens" (usado em panoramas, reconstrução 3D, SLAM) tem três passos: (1) detectar keypoints em ambas as imagens; (2) calcular o descritor de cada keypoint; (3) emparelhar descritores entre as duas imagens (ex: nearest neighbour na distância euclidiana ou de Hamming, conforme o descritor seja real ou binário), normalmente seguido de RANSAC para descartar correspondências erradas e estimar a transformação geométrica entre as imagens.</p>

          <div style={S.note}>O HOG (Histogram of Oriented Gradients) era o feature de referência para detecção de pessoas antes das CNNs. Em 2005, Dalal & Triggs mostraram que HOG + SVM batia todos os métodos anteriores. Em 2012, AlexNet destroçou HOG em ImageNet — e o paradigma mudou para sempre.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>9. O Legado da CV Clássica para as CNNs</h2>
          <p style={S.p}>A CV clássica descobriu empiricamente o que as CNNs aprendem automaticamente: as primeiras camadas de uma CNN treinada em ImageNet aprendem filtros que se parecem exactamente com filtros de Gabor (detectores de orientação), detectores de edges e blobs — os mesmos padrões que os engenheiros desenhavam à mão.</p>
          <p style={S.p}>A diferença crucial é que as CNNs aprendem estes filtros a partir dos dados em vez de os ter desenhados à mão — e depois continuam a aprender representações progressivamente mais abstractas nas camadas seguintes (texturas, partes, objectos) que a CV clássica nunca conseguiu capturar adequadamente. Mas note-se: os blocos fundamentais — convolução, kernels deslizantes, pirâmides multi-escala, pooling (semelhante a downsampling de frequências baixas) — são todos conceitos que já existiam na CV clássica. As CNNs não inventaram a convolução; automatizaram a escolha dos kernels.</p>
          <p style={S.p}>Mesmo a segmentação por thresholding/Otsu, as operações morfológicas e o template matching continuam vivos hoje — não como alternativas às CNNs, mas como passos de pré- e pós-processamento: gerar máscaras candidatas rapidamente, limpar outputs de redes de segmentação, ou fazer matching rápido em aplicações com restrições severas de tempo/recursos onde uma CNN seria demasiado pesada.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>CV Clássica</th><th style={S.th}>CNNs</th></tr></thead>
              <tbody>
                {[
                  ['Features', 'Desenhadas à mão por especialistas (SIFT, HOG)', 'Aprendidas automaticamente dos dados'],
                  ['Generalização', 'Boa para tarefas específicas, má fora do domínio', 'Generalização muito melhor com dados suficientes'],
                  ['Pipeline', 'Detector → Descritor → Classificador (SVM, etc.)', 'End-to-end: pixels → classe directamente'],
                  ['Interpretabilidade', 'Cada passo é compreensível matematicamente', 'Representações intermédias são difíceis de interpretar'],
                  ['Dados necessários', 'Pouco — features manuais não precisam de treino', 'Muito — beneficia enormemente de milhões de imagens'],
                  ['Custo computacional', 'Geralmente baixo, executável em CPU em tempo real', 'Alto, normalmente requer GPU para treino e às vezes inferência'],
                  ['Robustez a variações', 'Limitada — cada técnica cobre um tipo de invariância', 'Robustez aprendida implicitamente, cobre múltiplas variações em simultâneo'],
                ].map(([a, c, n]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)' }}>{a}</td><td style={{ ...S.td, color: '#4a9eed' }}>{c}</td><td style={{ ...S.td, color: '#4a9eed' }}>{n}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        
      </div>

        </div>
      </div>
      );
}
