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
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto', fontFamily: 'monospace', fontSize: '0.95rem', color: 'var(--text-primary)' },
};

const ConvDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Convolução: Input → Feature Map</p>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Input 5×5 × 1 canal, Kernel 3×3, stride=1, padding=0 → Output 3×3</p>
    <svg viewBox="0 0 520 140" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr3" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
      </defs>
      {/* Input 5x5 */}
      <text x="65" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Input (5×5)</text>
      {Array.from({length:5}).map((_,r) => Array.from({length:5}).map((_,c) => {
        const highlighted = r < 3 && c < 3;
        return (
          <rect key={`${r}-${c}`} x={c*24+5} y={r*24+18} width={22} height={22} rx="2"
            fill={highlighted ? 'rgba(74,158,237,0.10)' : 'var(--bg-primary)'}
            stroke={highlighted ? '#4a9eed' : 'var(--card-border)'} strokeWidth={highlighted ? 2 : 1}/>
        );
      }))}

      {/* Arrow */}
      <line x1={137} y1={73} x2={173} y2={73} stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr3)"/>

      {/* Kernel 3x3 */}
      <text x="224" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Kernel (3×3)</text>
      {[[-1,0,1],[-2,0,2],[-1,0,1]].map((row,r) => row.map((v,c) => (
        <g key={`k-${r}-${c}`}>
          <rect x={c*32+180} y={r*32+18} width={30} height={30} rx="3"
            fill={v > 0 ? 'rgba(74,158,237,0.10)' : v < 0 ? 'rgba(74,158,237,0.10)' : 'var(--bg-primary)'}
            stroke={v !== 0 ? (v > 0 ? '#4a9eed' : '#4a9eed') : 'var(--card-border)'} strokeWidth="1.5"/>
          <text x={c*32+195} y={r*32+37} textAnchor="middle" fill={v > 0 ? '#4a9eed' : v < 0 ? '#4a9eed' : 'var(--text-secondary)'} fontSize="10" fontWeight="700">{v}</text>
        </g>
      )))}

      {/* Arrow */}
      <line x1={283} y1={73} x2={313} y2={73} stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr3)"/>

      {/* Output 3x3 */}
      <text x="375" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Feature Map (3×3)</text>
      {Array.from({length:3}).map((_,r) => Array.from({length:3}).map((_,c) => {
        const vals = [[255,0,-255],[128,0,-128],[64,0,-64]];
        const v = vals[r][c];
        const intensity = Math.abs(v)/255;
        return (
          <g key={`o-${r}-${c}`}>
            <rect x={c*36+320} y={r*36+18} width={34} height={34} rx="3"
              fill={v > 0 ? `rgba(74,158,237,0.10)` : v < 0 ? `rgba(74,158,237,0.10)` : 'var(--bg-primary)'}
              stroke="#4a9eed" strokeWidth="1.5"/>
            <text x={c*36+337} y={r*36+39} textAnchor="middle" fill="var(--text-primary)" fontSize="8" fontWeight="700">{v}</text>
          </g>
        );
      }))}

      {/* Annotation */}
      <text x="260" y="137" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Output size = ⌊(Input − Kernel) / Stride⌋ + 1 = ⌊(5−3)/1⌋+1 = 3</text>
    </svg>
  </div>
);

const PaddingStrideExplorer = () => {
  const [config, setConfig] = useState({ padding: 0, stride: 1 });
  const inputSize = 6;
  const kernelSize = 3;
  const outputSize = Math.floor((inputSize - kernelSize + 2 * config.padding) / config.stride) + 1;
  const isValid = outputSize > 0;

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Calculadora: Padding & Stride</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', alignItems: 'start' }}>
        <div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Padding: {config.padding}</label>
            <input type="range" min="0" max="3" value={config.padding} onChange={e => setConfig(c => ({ ...c, padding: +e.target.value }))} style={{ width: '100%', accentColor: '#4a9eed' }}/>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-secondary)' }}><span>0 (valid)</span><span>1 (same p/ k=3,s=1)</span><span>2</span><span>3</span></div>
          </div>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Stride: {config.stride}</label>
            <input type="range" min="1" max="3" value={config.stride} onChange={e => setConfig(c => ({ ...c, stride: +e.target.value }))} style={{ width: '100%', accentColor: '#4a9eed' }}/>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-secondary)' }}><span>1</span><span>2</span><span>3</span></div>
          </div>
        </div>
        <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: '1.5px solid rgba(74,158,237,0.10)' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Input: {inputSize}×{inputSize} &nbsp;|&nbsp; Kernel: {kernelSize}×{kernelSize}</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Fórmula: ⌊(I − K + 2P) / S⌋ + 1</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>= ⌊({inputSize} − {kernelSize} + {2*config.padding}) / {config.stride}⌋ + 1</p>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: isValid ? '#4a9eed' : '#4a9eed', textAlign: 'center', margin: '0.75rem 0' }}>
            {isValid ? `Output: ${outputSize}×${outputSize}` : 'Inválido'}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
            {config.padding === 1 && config.stride === 1 ? ' "Same" padding — output = input size' : ''}
            {config.padding === 0 && config.stride === 1 ? ' "Valid" convolution — output encolhe' : ''}
            {config.stride === 2 ? '↓ Stride 2 divide o spatial size por ~2 (como pooling)' : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

const ReceptiveFieldExplorer = () => {
  const [layers, setLayers] = useState(2);
  const rf = 1 + layers * 2;
  const gridSize = Math.min(rf + 4, 17);
  const center = Math.floor(gridSize / 2);
  const half = Math.floor(rf / 2);

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Explorador: Crescimento do Receptive Field</p>
      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Número de camadas convolucionais 3×3, stride 1: {layers}</label>
      <input type="range" min="1" max="6" value={layers} onChange={e => setLayers(+e.target.value)} style={{ width: '100%', accentColor: '#4a9eed', marginBottom: '1rem' }}/>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <svg viewBox={`0 0 ${gridSize*20} ${gridSize*20}`} style={{ maxWidth: 320, width: '100%', height: 'auto' }}>
          {Array.from({length: gridSize}).map((_, r) => Array.from({length: gridSize}).map((_, c) => {
            const inField = Math.abs(r - center) <= half && Math.abs(c - center) <= half;
            const isCenter = r === center && c === center;
            return (
              <rect key={`${r}-${c}`} x={c*20} y={r*20} width={19} height={19} rx="2"
                fill={isCenter ? '#4a9eed' : inField ? 'rgba(74,158,237,0.10)' : 'var(--bg-primary)'}
                stroke={inField ? '#4a9eed' : 'var(--card-border)'} strokeWidth={isCenter ? 2 : 1}/>
            );
          }))}
        </svg>
      </div>
      <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
        Receptive field do neurónio (a roxo escuro) na camada {layers}: <strong style={{ color: '#4a9eed' }}>{rf}×{rf}</strong> píxeis do input original.
        &nbsp;Fórmula: RF = 1 + L×(K−1) com K=3 → RF = 1 + {layers}×2 = {rf}
      </p>
    </div>
  );
};

const TransposedConvDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Convolução Transposta: Upsampling Aprendível</p>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Input 2×2, Kernel 3×3, stride=2 → Output 5×5 (cada valor de input "espalha" o kernel sobre o output, com sobreposições somadas)</p>
    <svg viewBox="0 0 480 210" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrT" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
      </defs>

      {/* Input 2x2 */}
      <text x="55" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Input (2×2)</text>
      {[[1,2],[3,4]].map((row,r) => row.map((v,c) => (
        <g key={`in-${r}-${c}`}>
          <rect x={c*45+10} y={r*45+25} width={42} height={42} rx="3" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2"/>
          <text x={c*45+31} y={r*45+51} textAnchor="middle" fill="#4a9eed" fontSize="14" fontWeight="700">{v}</text>
        </g>
      )))}

      {/* Arrow */}
      <line x1={108} y1={92} x2={148} y2={92} stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrT)"/>
      <text x="128" y="84" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">kernel 3×3</text>
      <text x="128" y="108" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">stride 2</text>

      {/* Output 5x5: showing overlapping contributions via opacity layers */}
      <text x="320" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Output (5×5) — sobreposições somadas</text>
      {Array.from({length:5}).map((_,r) => Array.from({length:5}).map((_,c) => {
        const overlapMap = [
          [1,1,2,1,1],
          [1,2,3,2,1],
          [2,3,4,3,2],
          [1,2,3,2,1],
          [1,1,2,1,1],
        ];
        const v = overlapMap[r][c];
        const intensity = 0.12 + v * 0.18;
        return (
          <g key={`out-${r}-${c}`}>
            <rect x={c*34+165} y={r*34+25} width={32} height={32} rx="3"
              fill={`rgba(74,158,237,0.10)`} stroke="#4a9eed" strokeWidth="1"/>
            <text x={c*34+181} y={r*34+45} textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="700">{v}×</text>
          </g>
        );
      }))}

      <text x="265" y="205" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Output size = (Input−1)×Stride − 2×Padding + Kernel = (2−1)×2 − 0 + 3 = 5</text>
    </svg>
  </div>
);

const DilatedConvDiagram = () => {
  const [dilation, setDilation] = useState(1);
  const span = (3 - 1) * dilation + 1;
  const gridSize = 9;
  const center = Math.floor(gridSize / 2);
  const offsets = [-dilation, 0, dilation];

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)', textAlign: 'center' }}>Convolução Dilatada (Atrous)</p>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem', textAlign: 'center' }}>Um kernel 3×3 com "buracos" entre os pesos — o dilation rate controla o espaçamento</p>
      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Dilation rate: {dilation}</label>
      <input type="range" min="1" max="3" value={dilation} onChange={e => setDilation(+e.target.value)} style={{ width: '100%', accentColor: '#4a9eed', marginBottom: '1rem' }}/>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <svg viewBox={`0 0 ${gridSize*28} ${gridSize*28}`} style={{ maxWidth: 320, width: '100%', height: 'auto' }}>
          {Array.from({length: gridSize}).map((_, r) => Array.from({length: gridSize}).map((_, c) => {
            const dr = r - center, dc = c - center;
            const isKernelCell = offsets.includes(dr) && offsets.includes(dc);
            return (
              <rect key={`${r}-${c}`} x={c*28} y={r*28} width={26} height={26} rx="3"
                fill={isKernelCell ? 'rgba(74,158,237,0.10)' : 'var(--bg-primary)'}
                stroke={isKernelCell ? '#4a9eed' : 'var(--card-border)'} strokeWidth={isKernelCell ? 2 : 1}/>
            );
          }))}
        </svg>
      </div>
      <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
        Os 9 pesos do kernel mantêm-se, mas cobrem uma área de <strong style={{ color: '#4a9eed' }}>{span}×{span}</strong> píxeis. Fórmula: campo efectivo = (K−1)×D + 1 = (3−1)×{dilation}+1 = {span}.
        &nbsp;{dilation === 1 ? 'Convolução normal (sem dilatação).' : 'Mesmo número de parâmetros e custo computacional, mas vê uma área muito maior.'}
      </p>
    </div>
  );
};

const DepthwiseSeparableDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Convolução Separável em Profundidade</p>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Decomposição em duas etapas: Depthwise (espacial, por canal) + Pointwise (1×1, combina canais)</p>
    <svg viewBox="0 0 520 170" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrD" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
      </defs>

      {/* Input: 3 channels stacked */}
      <text x="55" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Input (H×W×3)</text>
      {[0,1,2].map(i => (
        <rect key={`in-${i}`} x={20+i*8} y={25+i*8} width={60} height={60} rx="4" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.2" opacity={0.9 - i*0.15}/>
      ))}

      <line x1={100} y1={75} x2={150} y2={75} stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrD)"/>
      <text x="125" y="65" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">Depthwise</text>
      <text x="125" y="100" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">3×3 por canal</text>

      {/* Depthwise output: 3 separate channels each filtered independently */}
      <text x="195" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Depthwise out (H×W×3)</text>
      {[0,1,2].map(i => (
        <g key={`dw-${i}`}>
          <rect x={160+i*8} y={25+i*8} width={60} height={60} rx="4" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" opacity={0.95 - i*0.1}/>
        </g>
      ))}
      <text x="195" y="110" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">cada canal filtrado</text>
      <text x="195" y="120" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">com o seu próprio 3×3</text>

      <line x1={240} y1={75} x2={270} y2={75} stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrD)"/>
      <text x="255" y="65" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">Pointwise</text>
      <text x="255" y="100" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">1×1×3 → N</text>

      {/* Pointwise kernel */}
      <rect x="278" y="50" width="26" height="50" rx="3" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="291" y="78" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">1×1</text>

      <line x1={308} y1={75} x2={338} y2={75} stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrD)"/>

      {/* Final output: N channels */}
      <text x="430" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Output (H×W×N)</text>
      {[0,1,2,3,4].map(i => (
        <rect key={`out-${i}`} x={350+i*15} y={25+i*8} width={60} height={60} rx="4" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1" opacity={0.95 - i*0.08}/>
      ))}
      <text x="430" y="135" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">N feature maps combinando</text>
      <text x="430" y="146" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">informação de todos os canais</text>
    </svg>
  </div>
);

const GroupedConvDiagram = () => {
  const [groups, setGroups] = useState(1);
  const cIn = 8, cOut = 8;
  const inPerGroup = cIn / groups;
  const outPerGroup = cOut / groups;
  const paramsPerGroup = inPerGroup * outPerGroup * 9;
  const totalParams = paramsPerGroup * groups;
  const fullParams = cIn * cOut * 9;

  const groupColors = ['#4a9eed','#38bdf8','#0284c7','#0369a1','#7dd3fc','#075985','#e0f2fe','#bae6fd'];
  const chanW = 30, chanH = 28, gap = 4;
  const totalW = 8 * chanW + 7 * gap;

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)', textAlign: 'center' }}>Convoluções Agrupadas (Grouped Convolutions)</p>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem', textAlign: 'center' }}>8 canais de entrada → 8 canais de saída, kernel 3×3, divididos em grupos independentes</p>
      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Número de grupos (g): {groups}</label>
      <input type="range" min="0" max="2" step="1" value={[1,2,8].indexOf(groups)}
        onChange={e => setGroups([1,2,8][+e.target.value])} style={{ width: '100%', accentColor: '#4a9eed', marginBottom: '0.25rem' }}/>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
        <span>g=1 (normal)</span><span>g=2</span><span>g=8 (= depthwise)</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        {/* Input channels */}
        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Input (8 canais)</div>
        <div style={{ display: 'flex', gap: gap }}>
          {Array.from({length:8}).map((_,i) => {
            const g = Math.floor(i / inPerGroup);
            const col = groupColors[g % groupColors.length];
            return <div key={i} style={{ width: chanW, height: chanH, borderRadius: 4, background: col + '55', border: `2px solid ${col}`, boxSizing: 'border-box' }}/>;
          })}
        </div>

        {/* Group labels */}
        <div style={{ display: 'flex', gap: gap }}>
          {Array.from({length: groups}).map((_, g) => {
            const col = groupColors[g % groupColors.length];
            const w = inPerGroup * chanW + (inPerGroup - 1) * gap;
            return (
              <div key={g} style={{ width: w, textAlign: 'center', fontSize: '0.72rem', fontWeight: 700, color: col,
                background: col + '18', border: `1px solid ${col}55`, borderRadius: 4, padding: '2px 0' }}>
                {groups === 1 ? 'um único grupo' : `grupo ${g+1}`}
              </div>
            );
          })}
        </div>

        {/* Arrow */}
        <div style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>↓ Conv 3×3 independente por grupo ↓</div>

        {/* Output channels */}
        <div style={{ display: 'flex', gap: gap }}>
          {Array.from({length:8}).map((_,i) => {
            const g = Math.floor(i / outPerGroup);
            const col = groupColors[g % groupColors.length];
            return <div key={i} style={{ width: chanW, height: chanH, borderRadius: 4, background: col + '55', border: `2px solid ${col}`, boxSizing: 'border-box' }}/>;
          })}
        </div>
        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Output (8 canais)</div>
      </div>

      <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
        Cada grupo processa <strong style={{ color: '#4a9eed' }}>{inPerGroup}</strong> canais de entrada → <strong style={{ color: '#4a9eed' }}>{outPerGroup}</strong> canais de saída, de forma independente.{' '}
        Parâmetros totais: <strong style={{ color: '#4a9eed' }}>{totalParams}</strong> (vs. {fullParams} normal — redução de {(fullParams/totalParams).toFixed(0)}×).
        {groups === 8 && ' g = C_in = C_out → convolução depthwise.'}
      </p>
    </div>
  );
};

const DeformableConvDiagram = () => {
  const [deform, setDeform] = useState(false);
  const base = [];
  for (let r = -1; r <= 1; r++) for (let c = -1; c <= 1; c++) base.push([r, c]);
  const offsets = [
    [0.3,-0.2],[0.1,0.4],[-0.2,0.3],
    [0.5,0.1],[0,0],[-0.4,-0.3],
    [0.2,0.5],[-0.3,0.2],[0.4,-0.4],
  ];
  const cell = 32;
  const center = 4;
  const gridSize = 9;

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)', textAlign: 'center' }}>Convolução Deformável: grelha regular vs. amostragem aprendida</p>
      <div style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
        <button onClick={() => setDeform(false)} style={{ padding: '0.4rem 1rem', marginRight: '0.5rem', borderRadius: 6, border: deform ? '1px solid var(--card-border)' : '2px solid #4a9eed', background: deform ? 'var(--bg-primary)' : 'rgba(74,158,237,0.10)', color: 'var(--text-primary)', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}>Convolução normal</button>
        <button onClick={() => setDeform(true)} style={{ padding: '0.4rem 1rem', borderRadius: 6, border: deform ? '2px solid #4a9eed' : '1px solid var(--card-border)', background: deform ? 'rgba(74,158,237,0.10)' : 'var(--bg-primary)', color: 'var(--text-primary)', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}>Convolução deformável</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <svg viewBox={`0 0 ${gridSize*cell} ${gridSize*cell}`} style={{ maxWidth: 320, width: '100%', height: 'auto' }}>
          {Array.from({length: gridSize}).map((_, r) => Array.from({length: gridSize}).map((_, c) => (
            <rect key={`bg-${r}-${c}`} x={c*cell} y={r*cell} width={cell-1} height={cell-1} rx="2" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1"/>
          )))}
          {base.map(([dr,dc], i) => {
            const r0 = center + dr, c0 = center + dc;
            const [or_, oc_] = deform ? offsets[i] : [0,0];
            const cx = (c0 + 0.5 + oc_) * cell;
            const cy = (r0 + 0.5 + or_) * cell;
            const baseCx = (c0 + 0.5) * cell;
            const baseCy = (r0 + 0.5) * cell;
            return (
              <g key={`pt-${i}`}>
                {deform && <line x1={baseCx} y1={baseCy} x2={cx} y2={cy} stroke="#0284c7" strokeWidth="1" strokeDasharray="2,2"/>}
                {deform && <circle cx={baseCx} cy={baseCy} r="3" fill="none" stroke="var(--text-secondary)" strokeWidth="1"/>}
                <circle cx={cx} cy={cy} r="5" fill={i===4 ? '#4a9eed' : 'rgba(74,158,237,0.10)'} stroke="#4a9eed" strokeWidth="1.5"/>
              </g>
            );
          })}
        </svg>
      </div>
      <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
        {deform
          ? 'Os pontos de amostragem (roxo) afastam-se da grelha regular (contornos cinzentos) — offsets (Δx, Δy) aprendidos por uma sub-rede convolucional, adaptando o receptive field à forma do objecto.'
          : 'Grelha 3×3 fixa e regular — todas as posições são amostradas exactamente nos mesmos deslocamentos relativos, independentemente do conteúdo da imagem.'}
      </p>
    </div>
  );
};

export default function CV3() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cv" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>MÓDULO 3</div>
        <h1 style={S.h1}>A Convolução nas CNNs</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. Convolução com Filtros Aprendíveis</h2>
          <p style={S.p}>Numa camada convolucional, os pesos são os valores dos kernels. Em vez de o engenheiro escolher "quero um detector de edges de Sobel", a rede aprende durante o treino quais filtros minimizam a função de perda. Na prática, as primeiras camadas aprendem detectores de edges e cores; as camadas intermédias aprendem texturas; as camadas profundas aprendem partes de objectos e conceitos de alto nível.</p>
          <p style={S.p}>Um kernel 3×3×C_in tem 9×C_in parâmetros (mais um bias). Este kernel é aplicado em convolution a toda a imagem — um único conjunto de pesos processa todas as posições. A isto chama-se partilha de pesos (weight sharing) e é o que torna as CNNs tão eficientes em parâmetros: uma camada densa equivalente ligaria cada píxel de input a cada neurónio de output, com milhões de pesos independentes.</p>
          <p style={S.p}>O processo de treino ajusta estes pesos via backpropagation: o gradiente da loss em relação a cada peso do kernel é calculado e propagado através de todas as posições onde esse peso foi usado — os gradientes de todas essas posições são somados, porque o mesmo peso contribuiu para múltiplas saídas.</p>

          <ConvDiagram />

          <div style={S.note}>Cada camada convolucional tem tipicamente uma activação não-linear (ReLU, GELU, etc.) aplicada após a convolução, e frequentemente normalização (BatchNorm, LayerNorm). A sequência típica é: Conv → Norm → Activation. Sem a não-linearidade, empilhar várias convoluções seria matematicamente equivalente a uma única convolução linear.</div>

          <h3 style={S.h3}>Convolução vs. Correlação Cruzada</h3>
          <p style={S.p}>Tecnicamente, a operação que as bibliotecas de deep learning chamam "convolução" é, em termos matemáticos, uma <strong>correlação cruzada</strong> — o kernel não é invertido (rodado 180°) antes de ser aplicado. Como os pesos são aprendidos, esta distinção não tem impacto prático: a rede aprende os pesos na orientação que precisar. Mas é importante saber que o termo "convolução" em deep learning é usado de forma livre.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Padding e Stride</h2>
          <p style={S.p}>Sem padding, cada convolução reduz o tamanho espacial. Após várias camadas, a imagem seria demasiado pequena. O padding acrescenta zeros (ou outros valores) à volta da imagem antes da convolução. Com padding=1 e kernel=3×3, o output tem o mesmo tamanho espacial do input ("same" padding).</p>
          <p style={S.p}>O stride controla o passo do kernel. Com stride=1, o kernel avança 1 píxel de cada vez — máxima sobreposição. Com stride=2, avança 2 píxeis — reduz o spatial size por ~2, de forma similar ao pooling. Stride=2 é frequentemente preferido ao max-pooling em arquitecturas modernas porque é aprendível: a rede decide o que reter ao reduzir a resolução, em vez de uma regra fixa (máximo ou média).</p>

          <PaddingStrideExplorer />

          <h3 style={S.h3}>Tipos de Padding</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Tipo</th><th style={S.th}>Como funciona</th><th style={S.th}>Quando usar</th></tr></thead>
              <tbody>
                {[
                  ['Zero padding', 'Acrescenta zeros à volta da imagem', 'O mais comum — "same" padding em CNNs'],
                  ['Reflect padding', 'Espelha os píxeis da borda', 'Evita artefactos de borda em tarefas de geração/restauro'],
                  ['Replicate padding', 'Repete o píxel da borda', 'Alternativa ao reflect, mais simples'],
                  ['Valid (sem padding)', 'Output reduz consoante o kernel', 'Quando a redução de tamanho é desejada'],
                ].map(([t, h, w]) => (
                  <tr key={t}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{t}</td><td style={S.td}>{h}</td><td style={S.td}>{w}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Stride aplica-se igualmente em ambas as dimensões espaciais por defeito, mas pode ser assimétrico (ex.: stride=(2,1)) para reduzir mais numa dimensão do que noutra — útil, por exemplo, em espectrogramas de áudio onde a dimensão temporal e a de frequência têm semânticas diferentes.</div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Canais de Entrada e Saída</h2>
          <p style={S.p}>Para uma imagem RGB (3 canais de entrada), um filtro 3×3 na realidade tem dimensão 3×3×3 = 27 pesos. Cada canal de entrada tem o seu próprio plano do filtro; os resultados são somados (mais um bias) para produzir um único feature map. Para produzir N feature maps, usam-se N filtros diferentes — a camada tem N×(K×K×C_in + 1) parâmetros.</p>
          <p style={S.p}>É importante distinguir <strong>profundidade do tensor</strong> (número de canais) de <strong>dimensão espacial</strong> (altura × largura). Uma convolução standard sempre processa todos os canais de entrada em conjunto para cada filtro — não há separação entre canais a não ser que se use explicitamente grouped ou depthwise convolutions (ver secções 8 e 7).</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Configuração</th><th style={S.th}>Dimensão do filtro</th><th style={S.th}>Parâmetros por filtro</th><th style={S.th}>Output</th></tr></thead>
              <tbody>
                {[
                  ['Input RGB, 1 filtro 3×3', '3×3×3', '27 + 1 bias = 28', '1 feature map (H×W×1)'],
                  ['Input RGB, 64 filtros 3×3', '3×3×3 cada', '64 × 28 = 1.792', '64 feature maps (H×W×64)'],
                  ['64 canais, 128 filtros 3×3', '3×3×64 cada', '128 × (576+1) = 73.856', '128 feature maps (H×W×128)'],
                  ['Filtro 1×1 (pointwise)', '1×1×C_in', 'C_in + 1', 'Combina canais sem contexto espacial'],
                ].map(([c, d, p, o]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{c}</td><td style={S.td}>{d}</td><td style={{ ...S.td, color: '#4a9eed' }}>{p}</td><td style={S.td}>{o}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>A convolução 1×1 (pointwise) não tem contexto espacial — apenas combina linearmente os canais em cada posição. É muito usada para reduzir ou expandir o número de canais a baixo custo computacional (bottleneck em ResNet, separable convolutions em MobileNet). Esta ideia será aprofundada na secção 7.</div>

          <h3 style={S.h3}>Custo Computacional (FLOPs)</h3>
          <p style={S.p}>O custo de uma convolução standard, em multiplicações-adições (MACs), é aproximadamente:</p>
          <div style={S.math}>
            FLOPs ≈ H_out × W_out × C_out × (K × K × C_in)
          </div>
          <p style={S.p}>Esta fórmula mostra que o custo cresce <strong>linearmente</strong> com C_in, C_out, e <strong>quadraticamente</strong> com o tamanho do kernel K. É por isso que kernels grandes (5×5, 7×7) são caros e foram em grande parte substituídos por pilhas de kernels 3×3 (duas convoluções 3×3 têm o mesmo receptive field que uma 5×5, mas menos parâmetros: 2×9=18 vs 25, por canal).</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Receptive Field</h2>
          <p style={S.p}>O receptive field de um neurónio numa camada profunda é a região da imagem original que influencia o seu valor. Um neurónio na primeira camada (kernel 3×3) "vê" apenas 3×3 píxeis. Após duas convoluções 3×3, o neurónio "vê" 5×5 píxeis. Após três, 7×7. O receptive field cresce linearmente com a profundidade quando stride=1.</p>
          <p style={S.p}>Este crescimento é fundamental: as camadas iniciais detectam padrões locais simples (edges, cores); as camadas profundas têm receptive field grande o suficiente para ver partes de objectos e contexto global — o que lhes permite aprender conceitos de alto nível.</p>

          <ReceptiveFieldExplorer />

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Após N camadas (kernel 3×3, stride 1)</th><th style={S.th}>Receptive Field</th><th style={S.th}>O que "vê"</th></tr></thead>
              <tbody>
                {[
                  ['1 camada', '3×3', 'Edges, gradientes locais'],
                  ['2 camadas', '5×5', 'Texturas simples, cantos'],
                  ['4 camadas', '9×9', 'Texturas complexas, padrões'],
                  ['8 camadas', '17×17', 'Partes de objectos'],
                  ['16 camadas', '33×33', 'Objectos completos (em imagem 224×224)'],
                  ['Com stride 2 em 3 camadas', '~50×50', 'Contexto global — mas menos detalhe local'],
                ].map(([n, r, v]) => (
                  <tr key={n}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{n}</td><td style={{ ...S.td, color: '#4a9eed' }}>{r}</td><td style={S.td}>{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>O receptive field <em>teórico</em> (calculado pela fórmula) nem sempre corresponde ao receptive field <em>efectivo</em> — na prática, os píxeis no centro do receptive field têm muito mais influência (peso) do que os píxeis na periferia, que aproximadamente seguem uma distribuição gaussiana. Este fenómeno é conhecido como "effective receptive field" e motiva técnicas como dilatação para distribuir melhor a influência espacial.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Convolução Transposta (Deconvolution)</h2>
          <p style={S.p}>Enquanto uma convolução normal tipicamente reduz o tamanho espacial (downsampling), muitas tarefas precisam do oposto: gerar uma imagem maior a partir de uma representação mais pequena. Exemplos incluem decoders de autoencoders, segmentação semântica (recuperar a resolução original após o encoder), e geradores em GANs.</p>
          <p style={S.p}>A <strong>convolução transposta</strong> (também chamada deconvolution, embora o nome seja tecnicamente impreciso, ou "fractionally-strided convolution") realiza upsampling de forma <em>aprendível</em>. Em vez de o kernel deslizar sobre o input para produzir um único valor de output (como na convolução normal), cada valor do input é multiplicado pelo kernel inteiro e o resultado é "espalhado" (e somado onde há sobreposição) sobre uma região maior do output.</p>

          <TransposedConvDiagram />

          <p style={S.p}>A fórmula do tamanho de output é, intuitivamente, o inverso da fórmula da convolução normal:</p>
          <div style={S.math}>
            Output = (Input − 1) × Stride − 2 × Padding + Kernel + output_padding
          </div>

          <h3 style={S.h3}>Alternativas ao Upsampling</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Método</th><th style={S.th}>Como funciona</th><th style={S.th}>Vantagens / Desvantagens</th></tr></thead>
              <tbody>
                {[
                  ['Convolução transposta', 'Kernel aprendível espalha valores sobre output maior', 'Aprendível, mas pode produzir artefactos "checkerboard" (padrão de tabuleiro)'],
                  ['Interpolação + Conv', 'Resize (nearest/bilinear) seguido de convolução normal', 'Evita checkerboard; muito usado em decoders modernos (ex.: U-Net)'],
                  ['Pixel Shuffle (sub-pixel conv)', 'Convolução normal produz C×r² canais, depois rearranjados em espaço (H×r, W×r)', 'Eficiente, sem artefactos típicos da transposta; usado em super-resolução'],
                  ['Unpooling', 'Inverte max-pooling usando índices guardados do encoder', 'Requer arquitectura simétrica encoder-decoder com partilha de índices'],
                ].map(([m, h, v]) => (
                  <tr key={m}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{m}</td><td style={S.td}>{h}</td><td style={S.td}>{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>O artefacto "checkerboard" surge quando o stride não divide o kernel de forma uniforme (ex.: kernel=3, stride=2), causando sobreposições desiguais — algumas zonas do output recebem contribuições de mais posições do input do que outras, criando um padrão visível em grelha. É um problema bem documentado em GANs geradoras de imagens.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>6. Convoluções Dilatadas (Atrous / Dilated)</h2>
          <p style={S.p}>Como vimos na secção 4, aumentar o receptive field normalmente requer mais camadas (mais profundidade) ou pooling/stride (que reduz a resolução espacial). Mas em segmentação semântica, queremos <strong>contexto global</strong> (receptive field grande) <em>e</em> <strong>resolução espacial alta</strong> (para produzir uma máscara densa, píxel a píxel) — objectivos aparentemente contraditórios.</p>
          <p style={S.p}>A convolução dilatada (também chamada "atrous", do francês "à trous" — "com buracos") resolve isto introduzindo espaçamento entre os pesos do kernel. Um kernel 3×3 com dilation rate=2 ainda tem apenas 9 pesos e o mesmo custo computacional de um 3×3 normal, mas cobre uma área de 5×5 píxeis no input — os píxeis "saltados" simplesmente não são amostrados.</p>

          <DilatedConvDiagram />

          <div style={S.math}>
            Campo receptivo efectivo do kernel = (K − 1) × D + 1
          </div>

          <p style={S.p}>Esta técnica é a base da arquitectura <strong>DeepLab</strong> (v1-v3+), que usa "Atrous Spatial Pyramid Pooling" (ASPP) — várias convoluções dilatadas em paralelo, com diferentes dilation rates, capturando contexto a múltiplas escalas sem perder resolução. É também usada em redes de áudio (WaveNet) para capturar dependências temporais longas com poucas camadas.</p>

          <h3 style={S.h3}>Dilatação Combinada com Stacking</h3>
          <p style={S.p}>Uma prática comum em segmentação é remover os últimos strides/poolings de uma rede pré-treinada (ex.: ResNet) e substituí-los por convoluções dilatadas — isto mantém o receptive field equivalente (e os pesos pré-treinados continuam compatíveis), mas o feature map final tem resolução muito maior (ex.: 1/8 em vez de 1/32 do input), o que é crucial para máscaras de segmentação detalhadas.</p>

          <div style={S.note}>Atenção ao "gridding artifact": quando se empilham várias convoluções dilatadas com a mesma taxa, alguns píxeis nunca são amostrados em conjunto, criando padrões periódicos no feature map. A solução típica é variar o dilation rate entre camadas consecutivas (ex.: 1, 2, 5, 1, 2, 5...).</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>7. Convoluções Separáveis em Profundidade (Depthwise Separable)</h2>
          <p style={S.p}>Uma convolução standard mistura simultaneamente informação <strong>espacial</strong> (dentro do kernel K×K) e <strong>entre canais</strong> (somando sobre todos os C_in canais). A convolução separável em profundidade decompõe esta operação em duas etapas independentes, muito mais baratas:</p>

          <DepthwiseSeparableDiagram />

          <h3 style={S.h3}>Etapa 1 — Depthwise Convolution</h3>
          <p style={S.p}>Aplica-se um único filtro K×K a <em>cada canal de entrada separadamente</em> (sem somar entre canais). Se o input tem C_in canais, há C_in filtros, cada um com K×K parâmetros — não K×K×C_in. O output tem o mesmo número de canais que o input (cada canal foi apenas filtrado espacialmente).</p>

          <h3 style={S.h3}>Etapa 2 — Pointwise Convolution (1×1)</h3>
          <p style={S.p}>Aplica-se uma convolução 1×1 standard (C_in → C_out) para misturar a informação entre canais. Esta etapa tem C_out filtros, cada um com 1×1×C_in parâmetros.</p>

          <h3 style={S.h3}>Comparação de FLOPs e Parâmetros</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Operação</th><th style={S.th}>Parâmetros</th><th style={S.th}>Exemplo (C_in=128, C_out=256, K=3)</th></tr></thead>
              <tbody>
                {[
                  ['Convolução standard', 'K² × C_in × C_out', '9 × 128 × 256 = 294.912'],
                  ['Depthwise (etapa 1)', 'K² × C_in', '9 × 128 = 1.152'],
                  ['Pointwise (etapa 2)', '1² × C_in × C_out', '1 × 128 × 256 = 32.768'],
                  ['Total separável', 'K² × C_in + C_in × C_out', '1.152 + 32.768 = 33.920'],
                ].map(([o, p, ex]) => (
                  <tr key={o}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{o}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{p}</td><td style={S.td}>{ex}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.math}>
            Redução = (K² × C_in × C_out) / (K² × C_in + C_in × C_out) ≈ 294.912 / 33.920 ≈ 8.7×
          </div>

          <p style={S.p}>A redução geral aproxima-se de <strong>1/K² + 1/C_out</strong> — para kernels 3×3 e C_out grande, a redução tende a 1/9, ou seja, quase 9× menos cálculo. Esta é a base de arquitecturas eficientes para dispositivos móveis: <strong>MobileNet</strong> (v1, v2, v3) e <strong>Xception</strong> usam depthwise separable convolutions de forma extensiva, atingindo precisão próxima de redes muito maiores com uma fracção do custo.</p>

          <div style={S.note}>O preço a pagar é uma ligeira perda de capacidade representacional — a separação espacial/canal é uma restrição (assumption) que nem sempre é óptima. Por isso, MobileNetV2 introduziu "inverted residuals": expande o número de canais antes da depthwise conv (com uma 1×1) e comprime depois (com outra 1×1), dando à depthwise conv mais canais para trabalhar sem aumentar muito o custo total.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>8. Convoluções Agrupadas (Grouped Convolutions)</h2>
          <p style={S.p}>As convoluções agrupadas generalizam tanto a convolução standard como a depthwise: dividem os C_in canais de entrada e C_out canais de saída em <strong>g grupos</strong>. Cada grupo processa C_in/g canais de entrada e produz C_out/g canais de saída, de forma totalmente independente dos outros grupos — não há mistura de informação entre grupos dentro dessa camada.</p>

          <GroupedConvDiagram />

          <p style={S.p}>Historicamente, as convoluções agrupadas surgiram no <strong>AlexNet</strong> (2012) por uma razão prática: a rede era demasiado grande para caber numa única GPU da época, pelo que os autores dividiram os filtros em dois grupos, cada um numa GPU diferente, comunicando apenas em certas camadas.</p>
          <p style={S.p}>Mais tarde, o <strong>ResNeXt</strong> (2017) reaproveitou a ideia não por limitações de hardware, mas como princípio de design — "cardinality" (número de grupos/caminhos paralelos) tornou-se uma terceira dimensão de escala além de profundidade e largura. Aumentar a cardinalidade melhora a precisão a um custo computacional menor do que aumentar a largura (número de canais) de forma equivalente.</p>

          <h3 style={S.h3}>Relação entre os Três Tipos</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Tipo</th><th style={S.th}>Número de grupos (g)</th><th style={S.th}>Comportamento</th></tr></thead>
              <tbody>
                {[
                  ['Convolução standard', 'g = 1', 'Todos os canais de entrada contribuem para cada filtro de saída'],
                  ['Convolução agrupada', '1 < g < C_in', 'Cada grupo é uma convolução standard menor, independente'],
                  ['Convolução depthwise', 'g = C_in (= C_out)', 'Cada canal processado isoladamente — caso extremo de agrupamento'],
                ].map(([t, g, b]) => (
                  <tr key={t}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{t}</td><td style={{ ...S.td, fontFamily: 'monospace', color: '#4a9eed' }}>{g}</td><td style={S.td}>{b}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Os parâmetros de uma convolução agrupada são g vezes menores do que os de uma convolução standard equivalente: g × (K² × (C_in/g) × (C_out/g)) = K² × C_in × C_out / g. O "preço" é a ausência de mistura inter-grupo — por isso, em arquitecturas profundas, é comum intercalar convoluções agrupadas com convoluções 1×1 (sem agrupamento) que misturam informação entre grupos, restaurando alguma da capacidade perdida (a mesma ideia da separação depthwise + pointwise).</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>9. Convoluções Deformáveis (Deformable Convolutions)</h2>
          <p style={S.p}>Todas as variantes vistas até agora — standard, dilatada, agrupada — partilham uma característica: a <strong>geometria de amostragem é fixa e regular</strong>, definida pela grelha do kernel (com ou sem espaçamento uniforme). Mas objectos do mundo real têm formas, escalas e orientações muito variadas — um kernel rígido pode não ser a forma ideal de amostrar a informação relevante para cada posição.</p>
          <p style={S.p}>As <strong>convoluções deformáveis</strong> (Deformable Convolutions, introduzidas em 2017 e refinadas em DCNv2) resolvem isto adicionando, para cada posição do kernel, um <strong>offset 2D aprendido</strong> (Δx, Δy). Em vez de amostrar sempre nas 9 posições fixas de uma grelha 3×3, o kernel amostra em 9 posições deslocadas — que podem variar de píxel para píxel, e são calculadas dinamicamente por uma sub-rede convolucional auxiliar.</p>

          <DeformableConvDiagram />

          <h3 style={S.h3}>Como Funciona na Prática</h3>
          <p style={S.p}>Para cada posição p₀ do output, a convolução deformável calcula:</p>
          <div style={S.math}>
            y(p₀) = Σ_k w(p_k) · x(p₀ + p_k + Δp_k)
          </div>
          <p style={S.p}>onde p_k são as posições da grelha regular (como antes) e Δp_k são os offsets aprendidos para essa posição específica. Como Δp_k pode ser fraccionário (não-inteiro), o valor de x nessa posição é obtido por <strong>interpolação bilinear</strong> dos píxeis vizinhos — o que torna toda a operação diferenciável e treinável end-to-end via backpropagation.</p>
          <p style={S.p}>Os offsets são produzidos por uma camada convolucional adicional, paralela à convolução principal, que recebe o mesmo input e produz 2×K×K canais de output (um Δx e um Δy por posição do kernel). Esta camada de offsets é inicializada a zero, pelo que no início do treino a convolução deformável comporta-se exactamente como uma convolução normal — os offsets emergem gradualmente conforme o treino progride.</p>

          <h3 style={S.h3}>Aplicações e Trade-offs</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>Detalhe</th></tr></thead>
              <tbody>
                {[
                  ['Aplicações típicas', 'Detecção de objectos (ex.: variantes de Faster R-CNN, FPN), segmentação de instâncias, pose estimation — tarefas onde a forma/escala do objecto varia muito'],
                  ['Custo extra', 'Pequena sub-rede de offsets (poucos parâmetros extra) + interpolação bilinear; overhead computacional moderado comparado ao ganho de flexibilidade'],
                  ['Comparação com dilatação', 'Dilatação usa um padrão de amostragem fixo mas espaçado; deformável usa um padrão aprendido e dinâmico, específico para cada posição/imagem'],
                  ['DCNv2', 'Adiciona também um peso de modulação por posição (além do offset), permitindo à rede "ignorar" amostras irrelevantes atribuindo-lhes peso próximo de zero'],
                ].map(([a, d]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed', whiteSpace: 'nowrap' }}>{a}</td><td style={S.td}>{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Intuitivamente: numa convolução normal, a "forma" do receptive field é sempre um quadrado (ou rectângulo). Numa convolução deformável, a "forma" pode adaptar-se — por exemplo, esticar-se ao longo do contorno de um objecto alongado, ou concentrar-se numa região de interesse e ignorar o fundo circundante.</div>
        </div>

        
      </div>

        </div>
      </div>
      );
}
