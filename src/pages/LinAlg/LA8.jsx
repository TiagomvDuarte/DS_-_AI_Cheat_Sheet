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

function TensorHierarchySVG() {
  return (
    <svg width="820" height="210" viewBox="0 0 820 210" style={{ display: 'block', margin: '1rem auto', maxWidth: '100%' }}>
      {/* Escalar */}
      <rect x="10" y="90" width="130" height="60" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5"/>
      <text x="75" y="112" textAnchor="middle" fontSize="13" fill={color} fontWeight="700">Escalar</text>
      <text x="75" y="130" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">rank 0 — shape ()</text>
      <text x="75" y="145" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">ex: 3.14</text>

      {/* Vetor */}
      <rect x="160" y="65" width="140" height="80" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5"/>
      <text x="230" y="88" textAnchor="middle" fontSize="13" fill={color} fontWeight="700">Vetor</text>
      <text x="230" y="107" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">rank 1 — shape (n,)</text>
      <text x="230" y="124" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">ex: [1, 2, 3]</text>

      {/* Matriz */}
      <rect x="322" y="42" width="155" height="100" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5"/>
      <text x="400" y="65" textAnchor="middle" fontSize="13" fill={color} fontWeight="700">Matriz</text>
      <text x="400" y="84" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">rank 2 — shape (m, n)</text>
      <text x="400" y="102" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">ex: [[1,2],[3,4]]</text>
      <text x="400" y="120" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">imagem em escala cinza</text>
      <text x="400" y="137" textAnchor="middle" fontSize="9" fill="var(--text-secondary)"> </text>

      {/* Tensor 3D */}
      <rect x="500" y="20" width="155" height="125" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5"/>
      <text x="578" y="44" textAnchor="middle" fontSize="13" fill={color} fontWeight="700">Tensor 3D</text>
      <text x="578" y="63" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">rank 3 — shape (C,H,W)</text>
      <text x="578" y="82" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">imagem RGB</text>
      <text x="578" y="101" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">3 × 224 × 224</text>
      <text x="578" y="120" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">(canais × altura × largura)</text>

      {/* Tensor 4D */}
      <rect x="678" y="8" width="135" height="135" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5"/>
      <text x="745" y="32" textAnchor="middle" fontSize="13" fill={color} fontWeight="700">Tensor 4D</text>
      <text x="745" y="52" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">rank 4 — NCHW</text>
      <text x="745" y="72" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">(batch, C, H, W)</text>
      <text x="745" y="92" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">32 × 3 × 224 × 224</text>
      <text x="745" y="112" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">batch de imagens</text>

      <line x1="140" y1="120" x2="160" y2="110" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <line x1="300" y1="105" x2="322" y2="95" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <line x1="477" y1="90" x2="500" y2="80" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <line x1="655" y1="72" x2="678" y2="68" stroke="var(--text-secondary)" strokeWidth="1.5"/>

      <text x="410" y="200" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Hierarquia de tensores — cada dimensão adicional representa um novo eixo de variação</text>
    </svg>
  );
}

function NeuralLayerSVG() {
  return (
    <svg width="760" height="235" viewBox="0 0 760 235" style={{ display: 'block', margin: '1rem auto', maxWidth: '100%' }}>
      <rect x="10" y="40" width="90" height="150" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <text x="55" y="30" textAnchor="middle" fontSize="12" fill="var(--text-secondary)" fontWeight="600">Input X</text>
      <text x="55" y="60" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">(B × d_in)</text>
      {[80, 110, 140, 170].map((y, i) => (
        <circle key={i} cx="55" cy={y} r="13" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5"/>
      ))}
      <text x="55" y="175" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">d_in</text>

      <rect x="160" y="20" width="110" height="175" rx="8" fill="var(--bg-secondary)" stroke={color} strokeWidth="2"/>
      <text x="215" y="15" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">Peso W</text>
      <text x="215" y="45" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">(d_out × d_in)</text>
      <text x="215" y="80" textAnchor="middle" fontSize="24" fill={color} fontWeight="700">W</text>
      <text x="215" y="110" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">cada linha = um</text>
      <text x="215" y="126" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">neurónio de saída</text>
      <text x="215" y="160" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">d_out × d_in</text>
      <text x="215" y="176" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">parâmetros</text>

      <text x="290" y="115" textAnchor="middle" fontSize="22" fill="var(--text-secondary)">·</text>
      <text x="320" y="115" textAnchor="middle" fontSize="18" fill="var(--text-secondary)">X</text>
      <text x="345" y="115" textAnchor="middle" fontSize="22" fill="var(--text-secondary)">+</text>
      <text x="370" y="115" textAnchor="middle" fontSize="18" fill="var(--text-secondary)">b</text>

      <text x="415" y="115" textAnchor="middle" fontSize="18" fill="var(--text-secondary)">= Z</text>
      <text x="415" y="132" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">(B × d_out)</text>

      <text x="460" y="115" textAnchor="middle" fontSize="20" fill={color} fontWeight="700">→ σ →</text>

      <rect x="520" y="40" width="90" height="160" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <text x="565" y="30" textAnchor="middle" fontSize="12" fill="var(--text-secondary)" fontWeight="600">Output H</text>
      {[80, 110, 140, 170].map((y, i) => (
        <circle key={i} cx="565" cy={y} r="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5"/>
      ))}
      <text x="565" y="193" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">(B × d_out)</text>

      <text x="380" y="224" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">H = σ(X · Wᵀ + b)  —  B exemplos processados em paralelo por multiplicação de matrizes</text>
    </svg>
  );
}

function LossSurfaceSVG() {
  return (
    <svg width="420" height="280" viewBox="0 0 420 280" style={{ display: 'block', margin: '1rem auto', maxWidth: '100%' }}>
      <defs>
        <radialGradient id="lossSurface" cx="55%" cy="45%" r="50%">
          <stop offset="0%" stopColor="rgba(249,115,22,0.10)"/>
          <stop offset="100%" stopColor="rgba(249,115,22,0.10)"/>
        </radialGradient>
      </defs>
      <ellipse cx="210" cy="140" rx="180" ry="110" fill="url(#lossSurface)" stroke={color} strokeWidth="1" strokeDasharray="4 3"/>
      <ellipse cx="210" cy="140" rx="120" ry="73" fill="none" stroke={color} strokeWidth="1" strokeDasharray="4 3" fillOpacity="0.3"/>
      <ellipse cx="210" cy="140" rx="65" ry="40" fill="none" stroke={color} strokeWidth="1" strokeDasharray="4 3"/>
      <ellipse cx="210" cy="140" rx="28" ry="17" fill="none" stroke={color} strokeWidth="1.5"/>

      <circle cx="310" cy="100" r="7" fill={color}/>
      <text x="322" y="97" fontSize="11" fill="var(--text-primary)" fontWeight="600">w atual</text>

      <line x1="310" y1="100" x2="255" y2="118" stroke="#f97316" strokeWidth="2.5" markerEnd="url(#arrow)"/>
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#f97316"/>
        </marker>
      </defs>
      <text x="273" y="125" fontSize="10" fill="#f97316" fontWeight="600">-∇L</text>
      <text x="268" y="135" fontSize="10" fill="#f97316">(gradiente)</text>

      <circle cx="210" cy="140" r="5" fill={color}/>
      <text x="218" y="137" fontSize="11" fill={color} fontWeight="700">mínimo</text>

      <text x="10" y="20" fontSize="12" fill="var(--text-secondary)">L(w) — superfície de perda</text>
      <text x="10" y="38" fontSize="11" fill="var(--text-secondary)">curvas de nível = perda constante</text>

      <text x="10" y="260" fontSize="11" fill="var(--text-secondary)">dL/dW tem a mesma forma que W — é um elemento do espaço dual</text>
    </svg>
  );
}

function CompGraphSVG() {
  return (
    <svg width="760" height="265" viewBox="0 0 760 265" style={{ display: 'block', margin: '1rem auto', maxWidth: '100%' }}>
      <defs>
        <marker id="arr2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="var(--text-secondary)"/>
        </marker>
        <marker id="arr3" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#f97316"/>
        </marker>
      </defs>

      <text x="380" y="22" textAnchor="middle" fontSize="13" fill="var(--text-primary)" fontWeight="700">Grafo computacional — forward (→) e backward (← vermelho)</text>

      {/* x */}
      <rect x="10" y="70" width="70" height="70" rx="6" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <text x="45" y="110" textAnchor="middle" fontSize="14" fill="var(--text-primary)" fontWeight="700">x</text>
      <text x="45" y="128" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">(d,)</text>

      {/* W1·x+b1 */}
      <rect x="112" y="58" width="96" height="94" rx="6" fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5"/>
      <text x="160" y="82" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">W₁ · x + b₁</text>
      <line x1="120" y1="90" x2="200" y2="90" stroke="var(--text-secondary)" strokeWidth="0.5" strokeOpacity="0.4"/>
      <text x="160" y="108" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">(h,) ← (h×d)·(d,)</text>
      <text x="160" y="122" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">dL/dW₁ = dL/dz₁ · xᵀ</text>
      <text x="160" y="136" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">dL/dx = W₁ᵀ · dL/dz₁</text>

      {/* σ(z1) */}
      <rect x="240" y="70" width="82" height="70" rx="6" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <text x="281" y="95" textAnchor="middle" fontSize="12" fill="var(--text-primary)" fontWeight="600">σ(z₁)</text>
      <line x1="248" y1="102" x2="314" y2="102" stroke="var(--text-secondary)" strokeWidth="0.5" strokeOpacity="0.4"/>
      <text x="281" y="116" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">h₁ = relu(z₁)</text>
      <text x="281" y="130" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">(h,)</text>

      {/* W2·h1+b2 */}
      <rect x="354" y="58" width="96" height="94" rx="6" fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5"/>
      <text x="402" y="82" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">W₂ · h₁ + b₂</text>
      <line x1="362" y1="90" x2="442" y2="90" stroke="var(--text-secondary)" strokeWidth="0.5" strokeOpacity="0.4"/>
      <text x="402" y="108" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">(k,) ← (k×h)·(h,)</text>
      <text x="402" y="122" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">dL/dW₂ = dL/dz₂ · h₁ᵀ</text>
      <text x="402" y="136" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">dL/dh₁ = W₂ᵀ · dL/dz₂</text>

      {/* softmax */}
      <rect x="482" y="70" width="88" height="70" rx="6" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <text x="526" y="95" textAnchor="middle" fontSize="12" fill="var(--text-primary)" fontWeight="600">softmax</text>
      <line x1="490" y1="102" x2="562" y2="102" stroke="var(--text-secondary)" strokeWidth="0.5" strokeOpacity="0.4"/>
      <text x="526" y="116" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">ŷ = softmax(z₂)</text>
      <text x="526" y="130" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">(k,)</text>

      {/* L */}
      <rect x="602" y="70" width="80" height="70" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2"/>
      <text x="642" y="110" textAnchor="middle" fontSize="13" fill={color} fontWeight="700">L(ŷ, y)</text>

      {/* Forward arrows */}
      <line x1="80" y1="105" x2="112" y2="105" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr2)"/>
      <line x1="208" y1="105" x2="240" y2="105" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr2)"/>
      <line x1="322" y1="105" x2="354" y2="105" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr2)"/>
      <line x1="450" y1="105" x2="482" y2="105" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr2)"/>
      <line x1="570" y1="105" x2="602" y2="105" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr2)"/>

      {/* Backward arc */}
      <path d="M642 140 Q642 200 402 200 Q281 200 160 175" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arr3)"/>
      <text x="400" y="240" textAnchor="middle" fontSize="11" fill="#f97316">backpropagation — regra da cadeia com transposta de matrizes</text>
    </svg>
  );
}

function AttentionSVG() {
  return (
    <svg width="760" height="260" viewBox="0 0 760 260" style={{ display: 'block', margin: '1rem auto', maxWidth: '100%' }}>
      <rect x="10" y="50" width="80" height="190" rx="6" fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5"/>
      <text x="50" y="35" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">Q</text>
      <text x="50" y="75" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">(n × d_k)</text>
      {[90, 120, 150, 180, 210].map((y, i) => (
        <rect key={i} x="18" y={y} width="64" height="14" rx="2" fill={`rgba(249,115,22,0.10)`}/>
      ))}
      <text x="50" y="255" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">queries</text>

      <rect x="115" y="50" width="80" height="190" rx="6" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <text x="155" y="35" textAnchor="middle" fontSize="12" fill="var(--text-primary)" fontWeight="700">K</text>
      <text x="155" y="75" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">(m × d_k)</text>
      {[90, 120, 150, 180, 210].map((y, i) => (
        <rect key={i} x="123" y={y} width="64" height="14" rx="2" fill="rgba(249,115,22,0.10)"/>
      ))}
      <text x="155" y="255" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">keys</text>

      <text x="215" y="135" textAnchor="middle" fontSize="16" fill="var(--text-secondary)">·</text>

      <rect x="240" y="50" width="80" height="190" rx="6" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <text x="280" y="35" textAnchor="middle" fontSize="12" fill="var(--text-primary)" fontWeight="700">Kᵀ</text>
      <text x="280" y="75" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">(d_k × m)</text>
      {[90, 120, 150, 180, 210].map((y, i) => (
        <rect key={i} x="248" y={y} width="64" height="14" rx="2" fill="rgba(249,115,22,0.10)"/>
      ))}

      <text x="345" y="135" textAnchor="middle" fontSize="14" fill="var(--text-secondary)">/ √d_k</text>

      <text x="405" y="135" textAnchor="middle" fontSize="14" fill="var(--text-secondary)">→ softmax →</text>

      <rect x="465" y="50" width="120" height="190" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2"/>
      <text x="525" y="35" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">Scores (A)</text>
      <text x="525" y="75" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">(n × m)</text>
      {[90, 110, 130, 150, 170, 190, 210].map((y, i) => (
        [0, 1, 2, 3].map((j) => (
          <rect key={j} x={473 + j * 26} y={y} width="22" height="14" rx="2" fill={`rgba(249,115,22,0.10) * 0.4 + 0.05})`}/>
        ))
      ))}
      <text x="525" y="255" textAnchor="middle" fontSize="10" fill={color}>matriz de atenção</text>

      <text x="605" y="135" textAnchor="middle" fontSize="14" fill="var(--text-secondary)">·</text>

      <rect x="620" y="50" width="80" height="190" rx="6" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <text x="660" y="35" textAnchor="middle" fontSize="12" fill="var(--text-primary)" fontWeight="700">V</text>
      <text x="660" y="75" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">(m × d_v)</text>
      {[90, 120, 150, 180, 210].map((y, i) => (
        <rect key={i} x="628" y={y} width="64" height="14" rx="2" fill="rgba(249,115,22,0.10)"/>
      ))}
      <text x="660" y="255" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">values</text>

      <text x="720" y="120" textAnchor="middle" fontSize="14" fill={color} fontWeight="700">= Out</text>
      <text x="720" y="140" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">(n × d_v)</text>
    </svg>
  );
}

function WeightInitSVG() {
  const bars = [
    { x: 30, h: 8, label: 'zeros init', color: '#64748b' },
    { x: 150, h: 55, label: 'Xavier', color: color },
    { x: 270, h: 45, label: 'Kaiming/He', color: '#f97316' },
    { x: 390, h: 70, label: 'sem init', color: '#f97316' },
  ];
  return (
    <svg width="580" height="230" viewBox="0 0 580 230" style={{ display: 'block', margin: '1rem auto', maxWidth: '100%' }}>
      <text x="290" y="18" textAnchor="middle" fontSize="13" fill="var(--text-primary)" fontWeight="700">Distribuição das activações após inicialização</text>
      {bars.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={190 - b.h * 2} width="100" height={b.h * 2} rx="4" fill={b.color} fillOpacity="0.7"/>
          <text x={b.x + 50} y={184 - b.h * 2} textAnchor="middle" fontSize="10" fill={b.color} fontWeight="600">{b.h === 8 ? 'colapso' : b.h === 70 ? 'explosão' : 'bom'}</text>
          <text x={b.x + 50} y="208" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">{b.label}</text>
          <line x1={b.x} y1="192" x2={b.x + 100} y2="192" stroke="var(--text-secondary)" strokeWidth="1"/>
        </g>
      ))}
      <text x="290" y="226" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Altura da barra = variância das activações após 10 camadas</text>
    </svg>
  );
}

function BatchNormSVG() {
  return (
    <svg width="640" height="200" viewBox="0 0 640 200" style={{ display: 'block', margin: '1rem auto', maxWidth: '100%' }}>
      <text x="160" y="20" textAnchor="middle" fontSize="12" fill="var(--text-secondary)" fontWeight="600">Antes de BN</text>
      {[-30, -10, 5, 25, 60, 90, 120].map((dx, i) => (
        <ellipse key={i} cx={160 + dx} cy={110 + (i % 3) * 20 - 20} rx={12 + i * 3} ry="8" fill={`rgba(249,115,22,0.10)`} stroke={color} strokeWidth="1"/>
      ))}
      <text x="160" y="185" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">features com escalas muito diferentes</text>

      <text x="320" y="100" textAnchor="middle" fontSize="28" fill={color} fontWeight="700">→</text>
      <text x="320" y="125" textAnchor="middle" fontSize="11" fill={color}>BN</text>

      <text x="500" y="20" textAnchor="middle" fontSize="12" fill="var(--text-secondary)" fontWeight="600">Depois de BN</text>
      {[-30, -15, 0, 15, 30].map((dx, i) => (
        <ellipse key={i} cx={500 + dx} cy={100 + (i % 2) * 18 - 10} rx="22" ry="9" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1"/>
      ))}
      <text x="500" y="185" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">média ≈ 0, variância ≈ 1 por feature</text>

      <line x1="20" y1="155" x2="300" y2="155" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3 3"/>
      <line x1="340" y1="155" x2="620" y2="155" stroke="#f97316" strokeWidth="1" strokeDasharray="3 3"/>
      <text x="160" y="168" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">eixo: média de cada feature</text>
      <text x="500" y="168" textAnchor="middle" fontSize="10" fill="#f97316">normalizado</text>
    </svg>
  );
}

function ToeplitzSVG() {
  const vals = [
    [1, 2, 3, 0, 0, 0],
    [0, 1, 2, 3, 0, 0],
    [0, 0, 1, 2, 3, 0],
    [0, 0, 0, 1, 2, 3],
  ];
  return (
    <svg width="600" height="200" viewBox="0 0 600 200" style={{ display: 'block', margin: '1rem auto', maxWidth: '100%' }}>
      <text x="100" y="20" textAnchor="middle" fontSize="12" fill="var(--text-primary)" fontWeight="700">Matriz de Toeplitz (filtro [1,2,3])</text>
      {vals.map((row, i) =>
        row.map((val, j) => (
          <rect key={j} x={10 + j * 32} y={30 + i * 32} width="30" height="30" rx="3"
            fill={val !== 0 ? `rgba(249,115,22,0.10)` : 'var(--bg-secondary)'}
            stroke="var(--text-secondary)" strokeWidth="1"/>
        ))
      )}
      {vals.map((row, i) =>
        row.map((val, j) => (
          <text key={j} x={25 + j * 32} y={50 + i * 32} textAnchor="middle" fontSize="12"
            fill={val !== 0 ? color : 'var(--text-secondary)'} fontWeight={val !== 0 ? '700' : '400'}>
            {val !== 0 ? val : '0'}
          </text>
        ))
      )}
      <text x="120" y="175" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">conv 1D ≡ multiplicar por esta matriz esparsa</text>
      <text x="167" y="185" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">partilha de pesos = mesmos valores deslocados em cada linha</text>

      <text x="380" y="20" textAnchor="middle" fontSize="12" fill="var(--text-primary)" fontWeight="700">Equivalência com DFT</text>
      <rect x="290" y="30" width="180" height="110" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <text x="380" y="60" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Matriz circulante:</text>
      <text x="380" y="80" textAnchor="middle" fontSize="11" fill={color}>C = F⁻¹ · diag(F·c) · F</text>
      <text x="380" y="100" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">F = matriz DFT</text>
      <text x="380" y="118" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">eigenvalores = DFT do filtro</text>
      <text x="380" y="160" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">FFT: O(n log n) vs O(n · k) directo</text>
    </svg>
  );
}

function EmbeddingSVG() {
  const points = [
    { x: 80, y: 60, label: 'rei', color: '#f97316' },
    { x: 130, y: 80, label: 'rainha', color: '#f97316' },
    { x: 85, y: 110, label: 'homem', color: '#f97316' },
    { x: 135, y: 130, label: 'mulher', color: '#f97316' },
    { x: 260, y: 70, label: 'gato', color: '#f97316' },
    { x: 310, y: 90, label: 'cão', color: '#f97316' },
    { x: 265, y: 120, label: 'peixe', color: '#f97316' },
    { x: 80, y: 200, label: 'correr', color: '#f97316' },
    { x: 140, y: 210, label: 'saltar', color: '#f97316' },
  ];
  return (
    <svg width="420" height="280" viewBox="0 0 420 280" style={{ display: 'block', margin: '1rem auto', maxWidth: '100%' }}>
      <text x="210" y="20" textAnchor="middle" fontSize="13" fill="var(--text-primary)" fontWeight="700">Espaço de Embeddings 2D (t-SNE)</text>
      <rect x="20" y="35" width="370" height="220" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>

      <ellipse cx="108" cy="90" rx="55" ry="45" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" strokeDasharray="4 3"/>
      <text x="108" y="170" textAnchor="middle" fontSize="10" fill="#f97316">realeza</text>

      <ellipse cx="285" cy="95" rx="55" ry="40" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" strokeDasharray="4 3"/>
      <text x="285" y="175" textAnchor="middle" fontSize="10" fill="#f97316">animais</text>

      <ellipse cx="110" cy="205" rx="55" ry="25" fill="rgba(249,115,22,0.07)" stroke="#f97316" strokeWidth="1" strokeDasharray="4 3"/>
      <text x="110" y="245" textAnchor="middle" fontSize="10" fill="#f97316">acções</text>

      {points.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="5" fill={p.color} fillOpacity="0.8"/>
          <text x={p.x + 8} y={p.y + 4} fontSize="10" fill="var(--text-primary)">{p.label}</text>
        </g>
      ))}

      <line x1="80" y1="60" x2="135" y2="80" stroke="#f97316" strokeWidth="1" strokeDasharray="3 2"/>
      <text x="200" y="270" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">rei - homem + mulher ≈ rainha</text>
    </svg>
  );
}

function LoRASVG() {
  return (
    <svg width="680" height="200" viewBox="0 0 680 200" style={{ display: 'block', margin: '1rem auto', maxWidth: '100%' }}>
      <text x="90" y="20" textAnchor="middle" fontSize="12" fill="var(--text-primary)" fontWeight="700">Peso original W</text>
      <rect x="10" y="30" width="160" height="120" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2"/>
      {Array.from({ length: 8 }).map((_, i) =>
        Array.from({ length: 6 }).map((__, j) => (
          <rect key={j} x={18 + j * 24} y={38 + i * 14} width="20" height="11" rx="1" fill={`rgba(249,115,22,0.10) * 0.2})`}/>
        ))
      )}
      <text x="90" y="165" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">m × n parâmetros</text>
      <text x="90" y="180" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">(ex: 4096 × 4096 = 16M)</text>

      <text x="200" y="95" textAnchor="middle" fontSize="20" fill="var(--text-secondary)">=</text>

      <text x="270" y="20" textAnchor="middle" fontSize="12" fill="var(--text-secondary)" fontWeight="600">W₀ (congelado)</text>
      <rect x="220" y="30" width="100" height="120" rx="6" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <text x="270" y="98" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">pré-treino</text>

      <text x="335" y="95" textAnchor="middle" fontSize="18" fill="var(--text-secondary)">+</text>

      <text x="420" y="20" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">A · B (treinar)</text>
      <rect x="355" y="30" width="40" height="120" rx="4" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2"/>
      <text x="375" y="98" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">A</text>
      <text x="375" y="112" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">m×r</text>
      <rect x="405" y="65" width="70" height="35" rx="4" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2"/>
      <text x="440" y="86" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">B</text>
      <text x="440" y="98" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">r×n</text>

      <text x="420" y="165" textAnchor="middle" fontSize="11" fill={color}>rank r muito menor que n</text>
      <text x="420" y="180" textAnchor="middle" fontSize="11" fill={color}>(ex: r=8 → apenas 64K params)</text>

      <rect x="510" y="30" width="160" height="140" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <text x="590" y="55" textAnchor="middle" fontSize="12" fill="var(--text-primary)" fontWeight="700">Eficiência LoRA</text>
      <text x="590" y="80" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Full fine-tune: m·n</text>
      <text x="590" y="100" textAnchor="middle" fontSize="11" fill={color}>LoRA: r·(m+n)</text>
      <text x="590" y="120" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">com r=8, m=n=4096:</text>
      <text x="590" y="140" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">16M → 65K params</text>
      <text x="590" y="158" textAnchor="middle" fontSize="11" fill={color}>redução de ~250×</text>
    </svg>
  );
}

function FlashAttentionSVG() {
  return (
    <svg width="680" height="200" viewBox="0 0 680 200" style={{ display: 'block', margin: '1rem auto', maxWidth: '100%' }}>
      <text x="150" y="18" textAnchor="middle" fontSize="12" fill="var(--text-primary)" fontWeight="700">Atenção Padrão</text>
      <rect x="10" y="25" width="280" height="90" rx="6" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <rect x="20" y="35" width="60" height="70" rx="4" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5"/>
      <text x="50" y="58" textAnchor="middle" fontSize="10" fill={color}>Q,K,V</text>
      <text x="50" y="73" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">HBM</text>
      <line x1="80" y1="70" x2="110" y2="70" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="3 2"/>
      <rect x="110" y="40" width="80" height="60" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="150" y="64" textAnchor="middle" fontSize="10" fill="#f97316">S = QKᵀ</text>
      <text x="150" y="80" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">n²×d — HBM</text>
      <line x1="190" y1="70" x2="220" y2="70" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="3 2"/>
      <rect x="220" y="40" width="60" height="60" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="250" y="64" textAnchor="middle" fontSize="9" fill="#f97316">softmax</text>
      <text x="250" y="80" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">·V → Out</text>
      <text x="150" y="128" textAnchor="middle" fontSize="10" fill="#f97316">lê/escreve S de HBM (lento!)</text>

      <text x="400" y="18" textAnchor="middle" fontSize="12" fill="var(--text-primary)" fontWeight="700">FlashAttention</text>
      <rect x="300" y="25" width="370" height="90" rx="6" fill="var(--bg-secondary)" stroke={color} strokeWidth="2"/>
      <rect x="310" y="35" width="60" height="70" rx="4" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5"/>
      <text x="340" y="58" textAnchor="middle" fontSize="10" fill={color}>Q,K,V</text>
      <text x="340" y="73" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">HBM</text>
      <line x1="370" y1="70" x2="400" y2="70" stroke={color} strokeWidth="1.5" strokeDasharray="3 2"/>
      <rect x="400" y="35" width="120" height="70" rx="4" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5"/>
      <text x="460" y="58" textAnchor="middle" fontSize="10" fill={color}>tiles em SRAM</text>
      <text x="460" y="73" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">softmax online</text>
      <text x="460" y="86" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">sem S em HBM</text>
      <line x1="520" y1="70" x2="550" y2="70" stroke={color} strokeWidth="1.5" strokeDasharray="3 2"/>
      <rect x="550" y="40" width="60" height="60" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="580" y="68" textAnchor="middle" fontSize="10" fill="#f97316">Out</text>
      <text x="400" y="128" textAnchor="middle" fontSize="10" fill={color}>O(n) memória — 2-4× mais rápido</text>

      <text x="340" y="175" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Bottleneck: não é computação mas bandwidth de memória (HBM ↔ SRAM)</text>
    </svg>
  );
}

function SynthesisSVG() {
  return (
    <svg width="700" height="160" viewBox="0 0 700 160" style={{ display: 'block', margin: '1rem auto', maxWidth: '100%' }}>
      <text x="350" y="18" textAnchor="middle" fontSize="13" fill="var(--text-primary)" fontWeight="700">Deep Learning = mapas lineares compostos + não-linearidades</text>
      {[
        { x: 10, label: 'x ∈ ℝᵈ', sub: 'input' },
        { x: 120, label: 'W₁x+b₁', sub: 'linear' },
        { x: 240, label: 'σ(·)', sub: 'não-linear' },
        { x: 360, label: 'W₂·+b₂', sub: 'linear' },
        { x: 480, label: 'σ(·)', sub: 'não-linear' },
        { x: 590, label: 'ŷ', sub: 'output' },
      ].map((n, i) => (
        <g key={i}>
          <rect x={n.x} y="35" width="100" height="55" rx="8"
            fill={n.sub === 'linear' ? 'rgba(249,115,22,0.10)' : n.sub === 'não-linear' ? 'rgba(249,115,22,0.10)' : 'var(--bg-secondary)'}
            stroke={n.sub === 'linear' ? color : n.sub === 'não-linear' ? '#f97316' : 'var(--card-border)'}
            strokeWidth="1.5"/>
          <text x={n.x + 50} y="62" textAnchor="middle" fontSize="12"
            fill={n.sub === 'linear' ? color : n.sub === 'não-linear' ? '#f97316' : 'var(--text-primary)'}
            fontWeight="600">{n.label}</text>
          <text x={n.x + 50} y="80" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{n.sub}</text>
          {i < 5 && <line x1={n.x + 100} y1="62" x2={n.x + 120} y2="62" stroke="var(--text-secondary)" strokeWidth="1.5"/>}
        </g>
      ))}
      <text x="350" y="125" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Sem as não-linearidades, qualquer profundidade colapsa a uma única transformação linear</text>
      <text x="350" y="145" textAnchor="middle" fontSize="11" fill={color} fontWeight="600">As matrizes de peso são o instrumento — a álgebra linear é a linguagem de toda a IA moderna</text>
    </svg>
  );
}

export default function LA8() {
  return (
    <div style={S.page}>
      <Link to="/linalg" style={S.back}><ArrowLeft size={16}/> Voltar a Álgebra Linear</Link>

      <div style={S.tag}>MÓDULO 08</div>
      <h1 style={S.h1}>Álgebra Linear em Machine Learning</h1>
      <p style={S.lead}>
        Toda a aprendizagem profunda moderna é, no seu núcleo, álgebra linear: multiplicações de matrizes,
        decomposições, gradientes como vectores e transformações compostas. Este módulo conecta os conceitos
        abstractos às operações concretas que treinam modelos de linguagem, visão e agentes inteligentes.
      </p>

      {/* ── SECTION 1: TENSORES ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Tensores — a Estrutura de Dados do Deep Learning</h2>
        <p style={S.p}>
          Um tensor é uma generalização de escalares, vectores e matrizes a um número arbitrário de dimensões (eixos).
          O rank (ou ordem) de um tensor é o número dos seus eixos. Em PyTorch e NumPy, todos os dados são tensores.
        </p>
        <TensorHierarchySVG/>
        <h3 style={S.h3}>Convenções de Layout</h3>
        <p style={S.p}>
          Para imagens existem duas convenções principais. <strong>NCHW</strong> (batch, canais, altura, largura) é
          usada por PyTorch por defeito e é eficiente em GPUs NVIDIA. <strong>NHWC</strong> (batch, altura, largura, canais)
          é preferida pelo TensorFlow e pelo hardware Google TPU. A ordem dos eixos afecta a localidade de memória e,
          portanto, a velocidade real das operações.
        </p>
        <div style={S.highlight}>
          <strong>Dimensão de batch:</strong> a primeira dimensão N agrupa exemplos independentes. Graças ao broadcasting
          e ao paralelismo de GPU, processar N exemplos em simultâneo é quase tão rápido como processar um só.
          Nunca percorra um batch com um loop Python — use operações matriciais.
        </div>
        <h3 style={S.h3}>Einstein Summation (einsum)</h3>
        <p style={S.p}>
          A notação einsum descreve contrações tensoriais de forma geral: os índices que aparecem nos dois lados
          são preservados; os que desaparecem são somados. É a forma mais expressiva de escrever multiplicações
          de matrizes, produtos internos, externos, transposes e atenção multi-cabeça num único símbolo.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Operação</th>
              <th style={S.th}>einsum string</th>
              <th style={S.th}>Equivalente</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Produto interno</td><td style={S.td}>{'\'i,i->\''}</td><td style={S.td}>dot(a, b)</td></tr>
            <tr><td style={S.td}>Produto externo</td><td style={S.td}>{'\'i,j->ij\''}</td><td style={S.td}>outer(a, b)</td></tr>
            <tr><td style={S.td}>Matmul</td><td style={S.td}>{'\'ij,jk->ik\''}</td><td style={S.td}>A @ B</td></tr>
            <tr><td style={S.td}>Batch matmul</td><td style={S.td}>{'\'bij,bjk->bik\''}</td><td style={S.td}>bmm(A, B)</td></tr>
            <tr><td style={S.td}>Trace</td><td style={S.td}>{'\'ii->\''}</td><td style={S.td}>trace(A)</td></tr>
            <tr><td style={S.td}>Atenção batch</td><td style={S.td}>{'\'bik,bjk->bij\''}</td><td style={S.td}>Q @ Kᵀ por batch</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider}/>

      {/* ── SECTION 2: REDES NEURONAIS ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Redes Neuronais como Álgebra Linear</h2>
        <p style={S.p}>
          Uma camada totalmente ligada (fully-connected ou dense) aplica uma transformação afim seguida de uma
          não-linearidade. Para um único exemplo: <strong>h = σ(Wx + b)</strong> onde W ∈ ℝ^(d_out × d_in),
          x ∈ ℝ^(d_in), b ∈ ℝ^(d_out). Para um batch de B exemplos empilhados em linhas: <strong>H = σ(XWᵀ + b)</strong>,
          onde X ∈ ℝ^(B × d_in).
        </p>
        <NeuralLayerSVG/>
        <h3 style={S.h3}>Por que a Multiplicação de Matrizes é o Bottleneck?</h3>
        <p style={S.p}>
          Uma matmul de dimensões (B, d_in) × (d_in, d_out) requer 2 · B · d_in · d_out operações de ponto
          flutuante (FLOPs). Para uma camada típica de transformer com B=512, d_in=d_out=4096 isso é ~17 GFLOPs
          — só nessa camada. GPUs modernas como a H100 atingem ~2000 TFLOPs em FP16, mas memória e sincronização
          limitam o throughput real. Minimizar o número e tamanho das matmul é a forma mais directa de acelerar treino.
        </p>
        <div style={S.note}>
          Note que <code>nn.Linear</code> armazena W com shape (d_out, d_in) mas faz internamente X @ W.T.
          Isto porque a convenção de vectores-coluna (Wx+b) é matematicamente mais limpa, mas vectores-linha
          (xWᵀ+b) são mais eficientes em memória para batches em formato (B, d).
        </div>
        <h3 style={S.h3}>Contagem de FLOPs</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Operação</th>
              <th style={S.th}>Shapes</th>
              <th style={S.th}>FLOPs</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Linear (batch B)</td><td style={S.td}>(B,m)×(m,n)</td><td style={S.td}>2Bmn</td></tr>
            <tr><td style={S.td}>Produto interno</td><td style={S.td}>(n,)×(n,)</td><td style={S.td}>2n</td></tr>
            <tr><td style={S.td}>Atenção QKᵀ</td><td style={S.td}>(B,n,d)×(B,d,n)</td><td style={S.td}>2Bn²d</td></tr>
            <tr><td style={S.td}>Scores·V</td><td style={S.td}>(B,n,n)×(B,n,d)</td><td style={S.td}>2Bn²d</td></tr>
            <tr><td style={S.td}>Conv2D 1×1</td><td style={S.td}>(C_out,C_in,1,1)</td><td style={S.td}>≡ linear por pixel</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider}/>

      {/* ── SECTION 3: GRADIENTES COMO VECTORES ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Gradientes como Vectores e Espaço Dual</h2>
        <p style={S.p}>
          O gradiente de uma função escalar L em relação a um tensor W tem exactamente a mesma shape que W.
          Se W ∈ ℝ^(m×n), então ∂L/∂W ∈ ℝ^(m×n). Isto não é coincidência — é consequência de dL/∂W ser
          um elemento do espaço dual: a função linear que mapeia perturbações δW ao correspondente δL.
        </p>
        <LossSurfaceSVG/>
        <h3 style={S.h3}>Gradiente de uma Camada Linear — Regras Fundamentais</h3>
        <p style={S.p}>
          Para uma camada h = Wx, as derivadas parciais da perda L em relação a cada quantidade são:
        </p>
        <div style={S.highlight}>
          <strong>∂L/∂W = (∂L/∂h) · xᵀ</strong> — produto externo: gradiente de saída × input transposto<br/>
          <strong>∂L/∂x = Wᵀ · (∂L/∂h)</strong> — transposta da matriz × gradiente de saída<br/>
          <strong>∂L/∂b = ∂L/∂h</strong> — soma sobre o batch (broadcasting reverso)
        </div>
        <p style={S.p}>
          Repare que <strong>∂L/∂x = Wᵀ · g</strong> onde g = ∂L/∂h. Isto é uma multiplicação matriz-vector
          com a transposta de W. O backpropagation é, literalmente, propagar gradientes com transposta de matrizes
          na direcção inversa do forward pass.
        </p>
        <div style={S.note}>
          A simetria entre forward e backward é bela: se o forward propaga com W, o backward propaga com Wᵀ.
          Esta dualidade é a razão pela qual redes residuais (skip connections) facilitam o fluxo de gradientes —
          a derivada da identidade é 1, nunca diminui.
        </div>
      </section>

      <hr style={S.divider}/>

      {/* ── SECTION 4: BACKPROP MATRICIAL ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Backpropagation Matricial</h2>
        <p style={S.p}>
          Considere uma rede de 2 camadas: z₁ = W₁x, h₁ = σ(z₁), z₂ = W₂h₁, ŷ = softmax(z₂), L = cross_entropy(ŷ, y).
          A derivação sistemática usando a regra da cadeia produz gradientes para cada parâmetro.
        </p>
        <CompGraphSVG/>
        <h3 style={S.h3}>Derivação Completa para 2 Camadas</h3>
        <div style={S.highlight}>
          <strong>Passo 1 (última camada):</strong><br/>
          δ₂ = ∂L/∂z₂ = ŷ - y  (para cross-entropy + softmax)<br/>
          ∂L/∂W₂ = δ₂ · h₁ᵀ  (produto externo, shape = shape de W₂)<br/>
          ∂L/∂b₂ = δ₂<br/><br/>
          <strong>Passo 2 (propagar para a 1.ª camada):</strong><br/>
          ∂L/∂h₁ = W₂ᵀ · δ₂<br/>
          δ₁ = ∂L/∂z₁ = (∂L/∂h₁) ⊙ σ'(z₁)  (hadamard com derivada de σ)<br/>
          ∂L/∂W₁ = δ₁ · xᵀ  (produto externo)<br/>
          ∂L/∂b₁ = δ₁
        </div>
        <p style={S.p}>
          O padrão é sempre o mesmo: o gradiente de um peso é um produto externo (gradiente de saída ⊗ activação de entrada).
          Para um batch de B exemplos, soma-se sobre o batch: ∂L/∂W = (1/B) Σ δᵢ · xᵢᵀ = (1/B) ΔᵀX.
        </p>
        <div style={S.code}>{`# Backprop manual para rede 2 camadas
import numpy as np

def relu(z): return np.maximum(0, z)
def relu_grad(z): return (z > 0).astype(float)

def forward(X, W1, b1, W2, b2):
    z1 = X @ W1.T + b1   # (B, h)
    h1 = relu(z1)
    z2 = h1 @ W2.T + b2  # (B, k)
    return z1, h1, z2

def softmax_cross_entropy_grad(z2, y_true):
    # delta2 = softmax(z2) - y_onehot, shape (B, k)
    e = np.exp(z2 - z2.max(axis=1, keepdims=True))
    p = e / e.sum(axis=1, keepdims=True)
    p[range(len(y_true)), y_true] -= 1
    return p / len(y_true)

def backward(X, z1, h1, W2, delta2):
    dW2 = delta2.T @ h1              # (k, h)
    db2 = delta2.sum(axis=0)
    dh1 = delta2 @ W2                # (B, h)
    delta1 = dh1 * relu_grad(z1)     # (B, h)
    dW1 = delta1.T @ X               # (h, d)
    db1 = delta1.sum(axis=0)
    return dW1, db1, dW2, db2
`}</div>
        <div style={S.note}>
          Para cada parâmetro, o gradiente é ∂L/∂W = δᵀX onde δ é o sinal de erro que chega à camada e X é
          a activação de entrada. Esta estrutura de produto externo (rank-1 por exemplo, somado sobre o batch)
          é universal em redes neuronais e explica por que os gradientes tendem a ser de baixo rank.
        </div>
      </section>

      <hr style={S.divider}/>

      {/* ── SECTION 5: ATENÇÃO ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Mecanismo de Atenção — Álgebra Linear de Transformers</h2>
        <p style={S.p}>
          O mecanismo de atenção scaled dot-product é puramente álgebra linear. Dadas as matrizes Q (queries),
          K (keys) e V (values) — cada uma com n tokens e d_k dimensões — a saída é:
        </p>
        <div style={S.highlight}>
          <strong>Attention(Q, K, V) = softmax(QKᵀ / √d_k) · V</strong><br/>
          Scores = QKᵀ ∈ ℝ^(n×n) — similaridade entre cada par de tokens<br/>
          A = softmax_rowwise(Scores / √d_k) — pesos de atenção, cada linha soma 1<br/>
          Out = A · V ∈ ℝ^(n × d_v) — média ponderada dos values
        </div>
        <AttentionSVG/>
        <h3 style={S.h3}>Multi-Head Attention</h3>
        <p style={S.p}>
          Em vez de uma única atenção de dimensão d_model, divide-se em H cabeças de dimensão d_k = d_model/H.
          Cada cabeça tem as suas próprias projecções lineares W_Q, W_K, W_V ∈ ℝ^(d_model × d_k).
          As saídas são concatenadas e projectadas: MultiHead(Q, K, V) = Concat(head₁, ..., headH) · W_O.
        </p>
        <p style={S.p}>
          <strong>Interpretação geométrica:</strong> cada cabeça aprende a prestar atenção segundo um
          subespaço diferente de ℝ^d_model. Uma cabeça pode focar em relações sintácticas, outra em
          co-referência, outra em relações semânticas. A concatenação reúne todas estas perspectivas.
        </p>
        <h3 style={S.h3}>Atenção de Baixo Rank</h3>
        <p style={S.p}>
          A matriz de atenção A ∈ ℝ^(n×n) tem complexidade quadrática em n. Para sequências longas
          (n = 32k tokens), isto é proibitivo. Diversas aproximações exploram a estrutura de baixo rank
          de A: Linformer projecta K,V para ℝ^(n × r) com r muito menor que n. Performer usa funções de
          kernel para factorizar A sem computá-la explicitamente.
        </p>
      </section>

      <hr style={S.divider}/>

      {/* ── SECTION 6: INICIALIZAÇÃO ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Inicialização de Pesos — Álgebra Linear da Estabilidade</h2>
        <p style={S.p}>
          Inicializar todos os pesos a zero cria simetria: todos os neurónios calculam a mesma função e
          recebem gradientes idênticos — nunca se diferenciam. É necessário quebrar esta simetria com
          inicialização aleatória. Mas qual a variância correcta?
        </p>
        <WeightInitSVG/>
        <h3 style={S.h3}>Xavier / Glorot Initialization</h3>
        <p style={S.p}>
          Para manter a variância das activações constante ao longo das camadas (com activações lineares
          ou tanh/sigmoid), usa-se:
        </p>
        <div style={S.highlight}>
          <strong>σ² = 2 / (n_in + n_out)</strong><br/>
          Uniforme: W ~ U(-√(6/(n_in+n_out)), +√(6/(n_in+n_out)))<br/>
          Normal: W ~ N(0, 2/(n_in+n_out))<br/>
          Derivação: Var[h] = n_in · Var[W] · Var[x]; para manter Var[h] = Var[x]: Var[W] = 1/n_in (ou 2/(n_in+n_out) como compromisso)
        </div>
        <h3 style={S.h3}>Kaiming / He Initialization (para ReLU)</h3>
        <p style={S.p}>
          ReLU elimina metade das activações (as negativas), reduzindo a variância por um factor de 2.
          Para compensar, usa-se variância dobrada:
        </p>
        <div style={S.highlight}>
          <strong>σ² = 2 / n_in</strong>  (Kaiming Normal para ReLU)<br/>
          <strong>σ² = 2 / n_out</strong> (para a backward pass)<br/>
          Generalização: σ² = 2 / ((1 + a²) · n_in) onde a é o declive negativo (leaky ReLU)
        </div>
        <h3 style={S.h3}>Inicialização Ortogonal</h3>
        <p style={S.p}>
          Para RNNs e transformers profundos, inicializar com matrizes ortogonais (W · Wᵀ = I) garante
          que o produto de n matrizes não explode nem colapsa: ||Wⁿ||₂ = 1 para qualquer n.
          Gera-se via QR decomposition de uma matriz aleatória gaussiana.
        </p>

      </section>

      <hr style={S.divider}/>

      {/* ── SECTION 7: BATCH NORM ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Batch Normalization — Whitening por Camada</h2>
        <p style={S.p}>
          Batch Normalization normaliza as activações de cada feature ao longo do batch, mantendo média ≈ 0
          e variância ≈ 1. Depois aplica parâmetros aprendidos γ (escala) e β (translação) para que a rede
          possa desfazer a normalização se necessário.
        </p>
        <BatchNormSVG/>
        <h3 style={S.h3}>Algoritmo BN</h3>
        <div style={S.highlight}>
          Para um batch X ∈ ℝ^(B×d):<br/>
          1. μ = (1/B) · 1ᵀX ∈ ℝ^d  — média por feature<br/>
          2. σ² = (1/B) · 1ᵀ(X - μ)² ∈ ℝ^d  — variância por feature<br/>
          3. X̂ = (X - μ) / √(σ² + ε)  — normalizar (ε = 1e-5 para estabilidade)<br/>
          4. Y = γ ⊙ X̂ + β  — escalar e transladar com parâmetros aprendidos
        </div>
        <p style={S.p}>
          <strong>Interpretação matricial:</strong> BN é uma forma de whitening parcial — transforma as
          activações para ter covariância diagonal com variância unitária. O whitening completo exigiria
          calcular a covariância d×d e invertê-la (caro), mas BN faz apenas a variância marginal de cada feature.
        </p>
        <h3 style={S.h3}>Gradiente de BN</h3>
        <p style={S.p}>
          O gradiente de BN envolve termos cruzados dentro do batch (porque μ e σ² dependem de todos os
          exemplos). Isto é ineficiente para batch size pequeno e impossível para amostras individuais.
        </p>
        <h3 style={S.h3}>LayerNorm — Alternativa para Transformers</h3>
        <p style={S.p}>
          LayerNorm normaliza ao longo das features de cada exemplo (não ao longo do batch). Para x ∈ ℝ^d:
          y = γ ⊙ (x - μ(x)) / σ(x) + β. É preferida em transformers porque funciona com batch size 1
          e em sequências de comprimento variável.
        </p>

        <div style={S.note}>
          Em transformers modernos, LayerNorm é aplicada <em>antes</em> da sub-camada (Pre-LN), não depois (Post-LN
          como no paper original). Pre-LN estabiliza o treino de redes muito profundas sem warmup agressivo.
        </div>
      </section>

      <hr style={S.divider}/>

      {/* ── SECTION 8: CONVOLUÇÃO ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Convolução como Álgebra Linear</h2>
        <p style={S.p}>
          A convolução discreta 1D entre sinal x ∈ ℝⁿ e filtro w ∈ ℝᵏ é equivalente a multiplicar x
          por uma matriz de Toeplitz W_toeplitz ∈ ℝ^((n-k+1) × n) cujas linhas são versões deslocadas do filtro.
        </p>
        <ToeplitzSVG/>
        <h3 style={S.h3}>Partilha de Pesos como Restrição Estrutural</h3>
        <p style={S.p}>
          A estrutura de Toeplitz impõe que os mesmos coeficientes (os pesos do filtro) apareçam em cada
          linha — apenas deslocados. Isto reduz dramaticamente o número de parâmetros: em vez de n×n para
          uma camada densa, apenas k pesos (tamanho do filtro). Esta restrição codifica a invariância à
          translação: o mesmo padrão detectado em qualquer posição do sinal.
        </p>
        <h3 style={S.h3}>Eigenvalores de Matrizes Circulantes = DFT</h3>
        <p style={S.p}>
          Para matrizes circulantes (em que o sinal é circular/periódico), os eigenvalores são exactamente
          a DFT do filtro. Isto significa que a convolução circular pode ser calculada como:
        </p>
        <div style={S.highlight}>
          y = IFFT(FFT(x) ⊙ FFT(w))<br/>
          Complexidade: O(n log n) vs O(n·k) para convolução directa<br/>
          Para filtros grandes (k próximo de n), FFT é muito mais eficiente<br/>
          Para filtros pequenos (k=3,5), a convolução directa pode ser mais rápida por razões de cache
        </div>
        <h3 style={S.h3}>Convolução 2D como Camada Densa com Restrições</h3>
        <p style={S.p}>
          Uma Conv2D de tamanho k×k com C_in canais de entrada e C_out de saída tem C_out × C_in × k × k
          parâmetros. Uma camada densa equivalente (que processa cada posição independentemente) teria
          (H × W × C_in) × (H × W × C_out) parâmetros — muitas ordens de grandeza maior.
          A restrição de Toeplitz (partilha de pesos) é o que torna as CNNs escaláveis.
        </p>
      </section>

      <hr style={S.divider}/>

      {/* ── SECTION 9: EMBEDDINGS ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Embeddings e Espaços Latentes</h2>
        <p style={S.p}>
          Um embedding é simplesmente uma consulta numa matriz de pesos E ∈ ℝ^(V × d), onde V é o
          tamanho do vocabulário e d é a dimensão do embedding. E(token_id) = E[token_id, :] — seleccionar
          a linha correspondente. Esta operação é equivalente a multiplicar um vector one-hot por E.
        </p>
        <EmbeddingSVG/>
        <h3 style={S.h3}>Geometria Semântica</h3>
        <p style={S.p}>
          Embeddings treinados com grandes corpora capturam relações semânticas como estrutura geométrica.
          A famosa relação <strong>E(rei) - E(homem) + E(mulher) ≈ E(rainha)</strong> emerge porque
          o vector de diferença "realeza masculina → feminina" é consistente no espaço aprendido.
          Analogias de palavra são resolvidas por aritmética de vectores.
        </p>
        <div style={S.note}>
          Esta geometria não é programada explicitamente — emerge da distribuição estatística do texto.
          A hipótese distribucional de Harris (1954): palavras com contextos similares têm significados
          similares. Embeddings operacionalizam esta ideia como proximidade em ℝ^d.
        </div>
        <h3 style={S.h3}>Espaço Latente como Representação Comprimida</h3>
        <p style={S.p}>
          Num autoencoder, o espaço latente z = Encoder(x) é uma compressão de baixa dimensão de x.
          O decoder reconstrói x̂ = Decoder(z). O espaço latente é aprendido de forma a que as dimensões
          mais informativas do input sejam preservadas, o que corresponde aproximadamente à PCA para
          autoencoders lineares (o teorema de Baldi-Hornik, 1989).
        </p>
        <h3 style={S.h3}>Embeddings Posicionais</h3>
        <p style={S.p}>
          Transformers não têm noção de ordem por si só (atenção é invariante à permutação). Para injectar
          informação posicional, somam-se embeddings posicionais ao token embedding. Os originais (Vaswani 2017)
          usam senos e cossenos: PE(pos, 2i) = sin(pos/10000^(2i/d)), PE(pos, 2i+1) = cos(pos/10000^(2i/d)).
          Alternativas aprendidas (BERT, GPT) treinam uma matriz posicional E_pos ∈ ℝ^(max_len × d).
        </p>
      </section>

      <hr style={S.divider}/>

      {/* ── SECTION 10: DECOMPOSIÇÃO ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Decomposição de Modelos — LoRA e Quantização</h2>
        <p style={S.p}>
          Modelos de linguagem modernos têm dezenas de biliões de parâmetros. Fine-tuning completo é caro.
          Técnicas de decomposição matricial permitem adaptar estes modelos com muito menos memória e computação.
        </p>
        <LoRASVG/>
        <h3 style={S.h3}>LoRA — Low-Rank Adaptation</h3>
        <p style={S.p}>
          LoRA (Hu et al. 2021) congela os pesos pré-treinados W₀ e adiciona uma perturbação de baixo rank:
          W = W₀ + AB, onde A ∈ ℝ^(m×r) e B ∈ ℝ^(r×n) com r muito menor que min(m,n). Apenas A e B são
          treinados. Durante inferência, AB é fundido em W para zero overhead.
        </p>
        <div style={S.highlight}>
          <strong>Motivação teórica:</strong> Aghajanyan et al. (2020) mostraram que a adaptação de modelos
          pré-treinados tem rank intrínseco baixo — as actualizações de peso importantes vivem num subespaço
          de baixa dimensão. LoRA exploita esta observação directamente.<br/><br/>
          <strong>Eficiência:</strong> Para m=n=4096 e r=8: W₀ tem 16M params, LoRA adiciona apenas 2×8×4096=65K.
          Redução de ~250× nos parâmetros treináveis.
        </div>
        <h3 style={S.h3}>Quantização — Redução de Precisão Numérica</h3>
        <p style={S.p}>
          Quantização representa pesos com menos bits (8, 4 ou até 2 bits) em vez de 32 bits (FP32) ou
          16 bits (FP16). Um modelo de 70B parâmetros em FP16 ocupa ~140GB; em 4 bits, apenas ~35GB.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Formato</th>
              <th style={S.th}>Bits</th>
              <th style={S.th}>Gama dinâmica</th>
              <th style={S.th}>Uso</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>FP32</td><td style={S.td}>32</td><td style={S.td}>±3.4×10³⁸</td><td style={S.td}>treino, acumulação</td></tr>
            <tr><td style={S.td}>BF16</td><td style={S.td}>16</td><td style={S.td}>±3.4×10³⁸</td><td style={S.td}>treino misto (TPU/GPU)</td></tr>
            <tr><td style={S.td}>FP16</td><td style={S.td}>16</td><td style={S.td}>±65504</td><td style={S.td}>inferência, treino misto</td></tr>
            <tr><td style={S.td}>INT8</td><td style={S.td}>8</td><td style={S.td}>-128 a 127</td><td style={S.td}>inferência quantizada</td></tr>
            <tr><td style={S.td}>INT4 / NF4</td><td style={S.td}>4</td><td style={S.td}>16 valores</td><td style={S.td}>QLoRA, modelos grandes</td></tr>
          </tbody>
        </table>
        <p style={S.p}>
          <strong>SVD para compressão:</strong> dado W ∈ ℝ^(m×n), a sua SVD W = UΣVᵀ permite aproximar W
          com rank-k: W_k = U_k Σ_k V_kᵀ. Mantendo apenas os k maiores valores singulares, captura-se
          a maior parte da "energia" da matriz com muito menos parâmetros.
        </p>
      </section>

      <hr style={S.divider}/>

      {/* ── SECTION 11: HARDWARE ── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Hardware e Eficiência — Por que GPUs e Como Optimizar</h2>
        <p style={S.p}>
          GPUs modernas têm milhares de cores paralelos especializados em multiplicações de matrizes.
          Uma H100 tem 16896 CUDA cores e unidades Tensor Core dedicadas que executam matmul 4×4 em hardware.
          A questão não é computação mas sim <em>bandwidth de memória</em>.
        </p>
        <FlashAttentionSVG/>
        <h3 style={S.h3}>Hierarquia de Memória</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Nível</th>
              <th style={S.th}>Tamanho</th>
              <th style={S.th}>Bandwidth</th>
              <th style={S.th}>Latência</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Registos</td><td style={S.td}>~256KB por SM</td><td style={S.td}>~20 TB/s</td><td style={S.td}>1 ciclo</td></tr>
            <tr><td style={S.td}>Shared mem / SRAM</td><td style={S.td}>~50MB (H100)</td><td style={S.td}>~20 TB/s</td><td style={S.td}>~5 ciclos</td></tr>
            <tr><td style={S.td}>L2 cache</td><td style={S.td}>50MB</td><td style={S.td}>~5 TB/s</td><td style={S.td}>~50 ciclos</td></tr>
            <tr><td style={S.td}>HBM (VRAM)</td><td style={S.td}>80GB</td><td style={S.td}>~3.35 TB/s</td><td style={S.td}>~300 ciclos</td></tr>
            <tr><td style={S.td}>CPU RAM (via NVLink)</td><td style={S.td}>TBs</td><td style={S.td}>~600 GB/s</td><td style={S.td}>~1000 ciclos</td></tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Tiling para Cache</h3>
        <p style={S.p}>
          Para uma matmul C = A × B de dimensão n×n, a quantidade de dados a ler é O(n²) mas o número
          de operações é O(n³). A razão operações/bytes = O(n) cresce com n — a matmul é compute-bound
          para matrizes grandes. Para matrizes pequenas, é memory-bound.
        </p>
        <p style={S.p}>
          <strong>Tiling:</strong> dividir as matrizes em blocos (tiles) que cabem na SRAM. Cada tile de
          A e B é carregado uma vez e reutilizado para calcular um tile de C. Sem tiling, cada elemento
          de A seria lido O(n) vezes da HBM. Com tiling de tamanho t, cada elemento é lido n/t vezes.
        </p>
        <h3 style={S.h3}>FlashAttention — Optimização de Memória</h3>
        <p style={S.p}>
          A atenção standard materializa a matriz S = QKᵀ ∈ ℝ^(n×n) na HBM — O(n²) bytes para sequências
          de comprimento n. Para n=32768, isso são ~4GB só para os scores. FlashAttention (Dao et al. 2022)
          calcula a atenção em tiles que cabem na SRAM, nunca materializando S completo. O resultado é
          matematicamente idêntico mas 2-4× mais rápido e usa O(n) memória.
        </p>
        <div style={S.note}>
          O bottleneck da atenção não é a computação (FLOPs) mas o bandwidth de memória: ler e escrever
          S de e para a HBM é o que torna a atenção lenta. FlashAttention elimina este IO.
        </div>
      </section>

      <hr style={S.divider}/>

      {/* ── SECTION 12: SÍNTESE ── */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo </h2>
        <SynthesisSVG/>
        <h3 style={S.h3}>Tabela de Operações — Forward, Backward, FLOPs</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Operação</th>
              <th style={S.th}>Forward</th>
              <th style={S.th}>Backward (dL/dW)</th>
              <th style={S.th}>NumPy / PyTorch</th>
              <th style={S.th}>FLOPs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Linear layer</td>
              <td style={S.td}>H = XWᵀ + b</td>
              <td style={S.td}>dW = δᵀX, dx = δW</td>
              <td style={S.td}>nn.Linear(d,h)</td>
              <td style={S.td}>2Bdh</td>
            </tr>
            <tr>
              <td style={S.td}>Matmul</td>
              <td style={S.td}>C = AB</td>
              <td style={S.td}>dA = dC Bᵀ, dB = Aᵀ dC</td>
              <td style={S.td}>A @ B</td>
              <td style={S.td}>2mnk</td>
            </tr>
            <tr>
              <td style={S.td}>Softmax (row)</td>
              <td style={S.td}>s = exp(x)/sum(exp(x))</td>
              <td style={S.td}>dx = s ⊙ (ds - s·ds·1)</td>
              <td style={S.td}>F.softmax(x, -1)</td>
              <td style={S.td}>O(n)</td>
            </tr>
            <tr>
              <td style={S.td}>ReLU</td>
              <td style={S.td}>h = max(0, x)</td>
              <td style={S.td}>dx = dh ⊙ (x {'>'} 0)</td>
              <td style={S.td}>F.relu(x)</td>
              <td style={S.td}>O(n)</td>
            </tr>
            <tr>
              <td style={S.td}>Atenção</td>
              <td style={S.td}>A·V, A=softmax(QKᵀ/√d)</td>
              <td style={S.td}>dQ, dK via dA; dV = Aᵀ dOut</td>
              <td style={S.td}>F.scaled_dot_product_attention</td>
              <td style={S.td}>4Bn²d</td>
            </tr>
            <tr>
              <td style={S.td}>BatchNorm</td>
              <td style={S.td}>γ·(x-μ)/σ + β</td>
              <td style={S.td}>dγ=sum(δ⊙x̂), dx (cruzado)</td>
              <td style={S.td}>nn.BatchNorm1d(d)</td>
              <td style={S.td}>O(Bd)</td>
            </tr>
            <tr>
              <td style={S.td}>Conv1D</td>
              <td style={S.td}>y = Toeplitz(w)·x</td>
              <td style={S.td}>dw = cross-corr(x, dy)</td>
              <td style={S.td}>nn.Conv1d(c_in, c_out, k)</td>
              <td style={S.td}>2Bnk</td>
            </tr>
            <tr>
              <td style={S.td}>Embedding</td>
              <td style={S.td}>E[token_id]</td>
              <td style={S.td}>sparse update em E[token_id]</td>
              <td style={S.td}>nn.Embedding(V, d)</td>
              <td style={S.td}>O(d)</td>
            </tr>
            <tr>
              <td style={S.td}>LayerNorm</td>
              <td style={S.td}>γ·(x-μ)/σ + β (sobre features)</td>
              <td style={S.td}>similar ao BN mas por exemplo</td>
              <td style={S.td}>nn.LayerNorm(d)</td>
              <td style={S.td}>O(Bd)</td>
            </tr>
            <tr>
              <td style={S.td}>LoRA</td>
              <td style={S.td}>W₀x + (AB)x</td>
              <td style={S.td}>dA = dOut · Bᵀ · xᵀ, dB = Aᵀ dOut · xᵀ</td>
              <td style={S.td}>custom LoRALinear</td>
              <td style={S.td}>2(mr+rn)</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Shapes Cheat Sheet</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Componente</th>
              <th style={S.th}>Shape</th>
              <th style={S.th}>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Input batch</td><td style={S.td}>(B, d_in)</td><td style={S.td}>B exemplos, cada um com d_in features</td></tr>
            <tr><td style={S.td}>Peso linear</td><td style={S.td}>(d_out, d_in)</td><td style={S.td}>d_out neurónios, d_in entradas</td></tr>
            <tr><td style={S.td}>Gradiente de W</td><td style={S.td}>(d_out, d_in)</td><td style={S.td}>mesma shape que W</td></tr>
            <tr><td style={S.td}>Imagem RGB</td><td style={S.td}>(B, 3, H, W)</td><td style={S.td}>NCHW: batch, canais, altura, largura</td></tr>
            <tr><td style={S.td}>Q/K/V (atenção)</td><td style={S.td}>(B, H, n, d_k)</td><td style={S.td}>batch, heads, tokens, dim por head</td></tr>
            <tr><td style={S.td}>Scores atenção</td><td style={S.td}>(B, H, n, n)</td><td style={S.td}>quadrática em n — o bottleneck</td></tr>
            <tr><td style={S.td}>Embedding table</td><td style={S.td}>(V, d)</td><td style={S.td}>V tokens no vocabulário, dim d</td></tr>
            <tr><td style={S.td}>LoRA A</td><td style={S.td}>(m, r)</td><td style={S.td}>r é o rank, r muito menor que m</td></tr>
            <tr><td style={S.td}>LoRA B</td><td style={S.td}>(r, n)</td><td style={S.td}>AB tem shape (m, n) = shape de W</td></tr>
            <tr><td style={S.td}>Conv filter</td><td style={S.td}>(C_out, C_in, k, k)</td><td style={S.td}>C_out filtros, C_in canais, k×k espacial</td></tr>
          </tbody>
        </table>

        <h3 style={S.h3}>FLOPs de um Transformer Block</h3>
        <div style={S.code}>{`# Contagem de FLOPs por transformer block (sequência n, dimensão d, heads H)
# Assumindo d_k = d_v = d/H

# 1. Projecções Q, K, V:  3 × 2Bnd² = 6Bnd²
# 2. QK^T:                2Bn²d (por head × H = 2Bn²d total)
# 3. Softmax:             ~Bn²H
# 4. AV:                  2Bn²d
# 5. Projecção de saída:  2Bnd²
# 6. FFN (2 camadas × 4d): 2 × 2Bnd × 4d = 16Bnd²

# Total por bloco:  ~24Bnd² + 4Bn²d
# Termo dominante depende de n vs d:
#   n << d (textos curtos): matmul Q,K,V,O,FFN dominam — compute-bound
#   n >> d (contextos longos): atenção QK^T domina — quadrático em n

# Para GPT-3 (L=96 layers, d=12288, n=2048, H=96):
L, d, n, H = 96, 12288, 2048, 96
B = 1
flops_per_block = 24 * B * n * d**2 + 4 * B * n**2 * d
total_flops = L * flops_per_block
print(f"FLOPs por token no forward: {total_flops / n / 1e12:.1f} TFLOPs")
# ~0.35 TFLOPs por token — ~350 billion flops para o full forward pass
`}</div>

        <h3 style={S.h3}>Princípio Unificador</h3>
        <div style={S.highlight}>
          <strong>Todo o deep learning é uma composição de transformações lineares e não-linearidades pontuais.</strong><br/><br/>
          As transformações lineares (camadas, atenção, convolução) são onde os parâmetros vivem e onde
          a maior parte da computação acontece. As não-linearidades (ReLU, sigmoid, softmax, LayerNorm)
          quebram a linearidade e permitem que redes profundas aproximem funções arbitrárias.
          Sem as não-linearidades, toda a profundidade colapsaria a uma única transformação afim.<br/><br/>
          O backward pass é a transposição do forward: onde o forward multiplica por W, o backward multiplica
          por Wᵀ. Esta dualidade é a regra da cadeia em forma matricial, e é o fundamento matemático
          que torna o treino de redes neuronais possível.
        </div>

        <h3 style={S.h3}>Conceitos-Chave Revistos</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Conceito</th>
              <th style={S.th}>Formalização Linear</th>
              <th style={S.th}>Importância Prática</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Forward pass</td>
              <td style={S.td}>composição de mapas afins</td>
              <td style={S.td}>O que o modelo computa — inferência</td>
            </tr>
            <tr>
              <td style={S.td}>Backprop</td>
              <td style={S.td}>regra da cadeia com Wᵀ</td>
              <td style={S.td}>Como os parâmetros são actualizados</td>
            </tr>
            <tr>
              <td style={S.td}>Gradiente</td>
              <td style={S.td}>elemento do espaço dual</td>
              <td style={S.td}>Mesma shape que parâmetro, indica direcção de descida</td>
            </tr>
            <tr>
              <td style={S.td}>Atenção</td>
              <td style={S.td}>média ponderada (softmax(QKᵀ)·V)</td>
              <td style={S.td}>Mecanismo de routing dinâmico de informação</td>
            </tr>
            <tr>
              <td style={S.td}>Convolução</td>
              <td style={S.td}>Toeplitz matrix × input</td>
              <td style={S.td}>Partilha de pesos = invariância à translação</td>
            </tr>
            <tr>
              <td style={S.td}>Embedding</td>
              <td style={S.td}>lookup de linha em E ∈ ℝ^(V×d)</td>
              <td style={S.td}>Geometria semântica emerge de estatística</td>
            </tr>
            <tr>
              <td style={S.td}>LoRA</td>
              <td style={S.td}>W = W₀ + AB, rank(AB) = r</td>
              <td style={S.td}>Fine-tuning eficiente em parâmetros</td>
            </tr>
            <tr>
              <td style={S.td}>BatchNorm</td>
              <td style={S.td}>whitening diagonal por batch</td>
              <td style={S.td}>Estabiliza distribuição de activações</td>
            </tr>
            <tr>
              <td style={S.td}>FlashAttention</td>
              <td style={S.td}>atenção por tiles em SRAM</td>
              <td style={S.td}>O(n) memória em vez de O(n²)</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
