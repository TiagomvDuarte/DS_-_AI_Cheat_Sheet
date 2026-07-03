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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

// === Diagram: Pretext tasks on a sample image ===
const PretextTasksDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Exemplos de Pretext Tasks sobre a mesma imagem</p>
    <svg viewBox="0 0 680 290" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrPT" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
        </marker>
      </defs>

      {/* original image */}
      <rect x="20" y="95" width="80" height="80" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <circle cx="60" cy="122" r="12" fill={color} opacity="0.6" />
      <rect x="40" y="138" width="40" height="22" rx="3" fill={color} opacity="0.4" />
      <text x="60" y="190" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">imagem original</text>

      {/* arrows */}
      <line x1="100" y1="110" x2="158" y2="55" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#arrPT)" />
      <line x1="100" y1="135" x2="158" y2="143" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#arrPT)" />
      <line x1="100" y1="160" x2="158" y2="228" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#arrPT)" />
      <line x1="100" y1="135" x2="398" y2="135" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arrPT)" />

      {/* Task 1: Rotation */}
      <g transform="translate(160,20)">
        <text x="40" y="-12" textAnchor="middle" fill="#f59e0b" fontSize="9">prever ângulo (0/90/180/270)</text>
        <rect x="0" y="8" width="80" height="60" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth="1.5" transform="rotate(10 40 38)" />
        <circle cx="40" cy="30" r="9" fill="#f59e0b" opacity="0.6" transform="rotate(10 40 38)" />
        <text x="50" y="0" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">Rotação 90°</text>
      </g>

      {/* Task 2: Jigsaw */}
      <g transform="translate(160,110)">
        <text x="30" y="0" textAnchor="middle" fill="#f97316" fontSize="9">prever ordem correta dos patches</text>
        <rect x="-2" y="6" width="68" height="68" rx="4" fill="var(--bg-secondary)" />
        {[0,1,2,3].map(i => {
          const order = [3,0,2,1];
          const bx = (i % 2) * 32;
          const by = Math.floor(i / 2) * 32 + 8;
          return (
            <g key={i}>
              <rect x={bx} y={by} width="29" height="29" rx="3" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
              <text x={bx+14} y={by+19} textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">{order[i]}</text>
            </g>
          );
        })}
        <text x="30" y="84" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Jigsaw puzzle</text>
      </g>

      {/* Task 3: Colorization */}
      <g transform="translate(160,210)">
        <text x="55" y="0" textAnchor="middle" fill="#fb923c" fontSize="9">Colorização (grayscale → cor)</text>
        <rect x="0" y="8" width="80" height="50" rx="6" fill="var(--bg-primary)" stroke="#fb923c" strokeWidth="1.5" />
        <circle cx="40" cy="26" r="9" fill="#888" opacity="0.6" />
        <rect x="20" y="38" width="40" height="12" rx="2" fill="#aaa" opacity="0.5" />
      </g>

      {/* Task 4: Masked patch prediction */}
      <g transform="translate(400,10)">
        <text x="62" y="10" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Masked Patch Prediction</text>
        {[0,1,2,3,4,5,6,7,8].map(i => {
          const masked = [1,3,5,7];
          const bx = (i % 3) * 43;
          const by = Math.floor(i / 3) * 43 + 20;
          return (
            <rect key={i} x={bx} y={by} width="40" height="40" rx="3"
              fill={masked.includes(i) ? 'rgba(249,115,22,0.10)' : 'rgba(249,115,22,0.10)'}
              stroke={masked.includes(i) ? '#f97316' : color} strokeWidth="1"
              strokeDasharray={masked.includes(i) ? '3,2' : '0'} />
          );
        })}
        <text x="62" y="158" textAnchor="middle" fill="#f97316" fontSize="9">tracejado = patch mascarado a reconstruir</text>
      </g>
    </svg>
  </div>
);

// === Diagram: Embedding space pull/push ===
const PullPushDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Espaço de embeddings: pares positivos atraem-se, negativos repelem-se</p>
    <svg viewBox="0 0 480 220" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrPull" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
        <marker id="arrPush" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
      </defs>
      <ellipse cx="240" cy="110" rx="220" ry="100" fill="none" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
      <text x="240" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">espaço de representação (embedding space)</text>

      {/* positive pair: two augmented views of image A */}
      <circle cx="140" cy="100" r="10" fill="#f97316" opacity="0.8" />
      <text x="110" y="95" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">A — view 1</text>
      <circle cx="195" cy="130" r="10" fill="#f97316" opacity="0.8" />
      <text x="195" y="155" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">A — view 2</text>
      <line x1="150" y1="106" x2="185" y2="124" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrPull)" markerStart="url(#arrPull)" />
      <text x="155" y="128" textAnchor="middle" fill="#f97316" fontSize="9">atrair</text>

      {/* negatives: views of B, C, D pushed away */}
      <circle cx="330" cy="60" r="10" fill="#f97316" opacity="0.7" />
      <text x="330" y="48" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">imagem B</text>
      <circle cx="350" cy="160" r="10" fill="#f59e0b" opacity="0.7" />
      <text x="350" y="180" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">imagem C</text>
      <circle cx="280" cy="190" r="10" fill="#fb923c" opacity="0.7" />
      <text x="280" y="205" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="700">imagem D</text>

      <line x1="200" y1="118" x2="320" y2="65" stroke="#f97316" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arrPush)" />
      <line x1="200" y1="130" x2="340" y2="155" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arrPush)" />
      <line x1="195" y1="135" x2="275" y2="183" stroke="#fb923c" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arrPush)" />
      <text x="265" y="125" textAnchor="middle" fill="#f97316" fontSize="9">repelir</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      Duas augmentações da mesma imagem A formam um <strong>par positivo</strong> — o modelo aprende a aproximar
      as suas representações. Vistas de qualquer outra imagem do batch (B, C, D) são <strong>negativos</strong> —
      o modelo aprende a afastá-las.
    </p>
  </div>
);

// === Diagram: SimCLR pipeline ===
const SimCLRDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Pipeline SimCLR</p>
    <svg viewBox="0 0 600 260" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrSC" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>

      {/* original image */}
      <rect x="10" y="100" width="60" height="60" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="40" y="135" textAnchor="middle" fill={color} fontSize="20">🖼</text>
      <text x="40" y="178" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">imagem x</text>

      {/* split into two augmentations */}
      <line x1="70" y1="120" x2="120" y2="60" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrSC)" />
      <line x1="70" y1="140" x2="120" y2="200" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrSC)" />

      {/* view 1 */}
      <rect x="120" y="30" width="70" height="60" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="155" y="65" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">view x̃ᵢ</text>
      <text x="155" y="20" textAnchor="middle" fill="#f97316" fontSize="8">augment t~T</text>

      {/* view 2 */}
      <rect x="120" y="170" width="70" height="60" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="155" y="205" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">view x̃ⱼ</text>
      <text x="155" y="245" textAnchor="middle" fill="#f59e0b" fontSize="8">augment t'~T</text>

      {/* encoder */}
      <line x1="190" y1="60" x2="240" y2="60" stroke="#f97316" strokeWidth="1.2" markerEnd="url(#arrSC)" />
      <line x1="190" y1="200" x2="240" y2="200" stroke="#f59e0b" strokeWidth="1.2" markerEnd="url(#arrSC)" />
      <rect x="240" y="35" width="80" height="50" rx="6" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="280" y="65" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="700">Encoder f(·)</text>
      <rect x="240" y="175" width="80" height="50" rx="6" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="280" y="205" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="700">Encoder f(·)</text>
      <text x="280" y="120" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">pesos partilhados (siamese)</text>
      <line x1="320" y1="60" x2="320" y2="195" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="2,2" />
      <line x1="320" y1="200" x2="320" y2="65" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="2,2" />

      {/* representations h */}
      <line x1="320" y1="60" x2="360" y2="60" stroke="#f97316" strokeWidth="1.2" markerEnd="url(#arrSC)" />
      <line x1="320" y1="200" x2="360" y2="200" stroke="#f59e0b" strokeWidth="1.2" markerEnd="url(#arrSC)" />
      <text x="370" y="55" fill="var(--text-secondary)" fontSize="9">hᵢ</text>
      <text x="370" y="195" fill="var(--text-secondary)" fontSize="9">hⱼ</text>

      {/* projection head */}
      <line x1="385" y1="60" x2="430" y2="60" stroke="#f97316" strokeWidth="1.2" markerEnd="url(#arrSC)" />
      <line x1="385" y1="200" x2="430" y2="200" stroke="#f59e0b" strokeWidth="1.2" markerEnd="url(#arrSC)" />
      <rect x="430" y="35" width="90" height="50" rx="6" fill="rgba(249,115,22,0.10)" stroke="#fb923c" strokeWidth="1.5" />
      <text x="475" y="58" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">Projection</text>
      <text x="475" y="72" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">head g(·)</text>
      <rect x="430" y="175" width="90" height="50" rx="6" fill="rgba(249,115,22,0.10)" stroke="#fb923c" strokeWidth="1.5" />
      <text x="475" y="198" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">Projection</text>
      <text x="475" y="212" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">head g(·)</text>

      {/* zi zj -> loss */}
      <line x1="520" y1="60" x2="560" y2="110" stroke="#f97316" strokeWidth="1.2" markerEnd="url(#arrSC)" />
      <line x1="520" y1="200" x2="560" y2="150" stroke="#f59e0b" strokeWidth="1.2" markerEnd="url(#arrSC)" />
      <circle cx="575" cy="130" r="22" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="575" y="130" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">NT-Xent</text>
      <text x="575" y="138" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">loss</text>
      <text x="555" y="92" fill="var(--text-secondary)" fontSize="9">zᵢ</text>
      <text x="555" y="170" fill="var(--text-secondary)" fontSize="9">zⱼ</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      Cada imagem do batch gera 2 views via augmentação. Ambas passam pelo mesmo encoder (pesos partilhados)
      e por uma projection head g(·) — um pequeno MLP usado apenas no pré-treino. A loss NT-Xent compara as
      projeções normalizadas zᵢ, zⱼ de todas as views do batch.
    </p>
  </div>
);

// === Diagram: SimCLR batch negatives vs MoCo queue ===
const SimCLRvsMoCoDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Negativos: batch do SimCLR vs. fila (queue) do MoCo</p>
    <svg viewBox="0 0 600 220" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* SimCLR side */}
      <text x="150" y="20" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">SimCLR — negativos do batch</text>
      <rect x="30" y="35" width="240" height="90" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.2" />
      {Array.from({length: 8}).map((_, i) => (
        <circle key={i} cx={50 + (i % 4) * 55} cy={i < 4 ? 60 : 100} r="11" fill={i < 2 ? '#f97316' : 'rgba(249,115,22,0.10)'} opacity="0.85" />
      ))}
      <text x="150" y="142" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">batch size N → 2(N-1) negativos. Para muitos negativos, N tem de ser enorme (4096+)</text>

      {/* MoCo side */}
      <text x="450" y="20" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="700">MoCo — fila (queue) dinâmica</text>
      <rect x="330" y="35" width="240" height="40" rx="8" fill="rgba(245,158,11,0.06)" stroke="#f59e0b" strokeWidth="1.2" />
      <text x="340" y="60" fill="#f59e0b" fontSize="9">Query encoder (θq)</text>
      <rect x="330" y="85" width="240" height="40" rx="8" fill="rgba(249,115,22,0.08)" stroke="#fb923c" strokeWidth="1.2" strokeDasharray="3,2" />
      <text x="340" y="110" fill="#fb923c" fontSize="9">Key encoder (θk) — momentum (EMA)</text>

      {/* queue */}
      <text x="450" y="148" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">fila FIFO de keys (até 65536)</text>
      {Array.from({length: 10}).map((_, i) => (
        <rect key={i} x={335 + i * 23} y="155" width="20" height="20" rx="3" fill="rgba(249,115,22,0.20)" stroke="#fb923c" strokeWidth="1" opacity={1 - i*0.07} />
      ))}
      <text x="565" y="170" fill="var(--text-secondary)" fontSize="14">→</text>
      <text x="450" y="195" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">novas keys entram, antigas saem — independente do batch size</text>
    </svg>
  </div>
);

// === Diagram: BYOL/DINO online-target with stop-gradient ===
const BYOLDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>BYOL / DINO — rede online vs. rede target (sem negativos)</p>
    <svg viewBox="0 0 560 220" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrBY" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
        </marker>
        <marker id="arrBYg" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
        <marker id="arrBYp" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#fb923c" />
        </marker>
      </defs>

      {/* image splitting into two views */}
      <rect x="10" y="90" width="50" height="50" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.2" />
      <text x="35" y="120" textAnchor="middle" fill={color} fontSize="9">x</text>
      <line x1="60" y1="105" x2="98" y2="60" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#arrBY)" />
      <line x1="60" y1="125" x2="98" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#arrBY)" />

      {/* Online network (top) */}
      <rect x="100" y="20" width="100" height="70" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="150" y="45" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Rede Online</text>
      <text x="150" y="60" textAnchor="middle" fill="#f97316" fontSize="8">encoder + projector</text>
      <text x="150" y="74" textAnchor="middle" fill="#f97316" fontSize="8">+ predictor q(·)</text>
      <text x="150" y="14" textAnchor="middle" fill="#f97316" fontSize="8">view 1 (augment forte)</text>

      {/* Target network (bottom) */}
      <rect x="100" y="155" width="100" height="55" rx="8" fill="rgba(249,115,22,0.08)" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="3,2" />
      <text x="150" y="178" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">Rede Target</text>
      <text x="150" y="193" textAnchor="middle" fill="#fb923c" fontSize="8">encoder + projector</text>
      <text x="150" y="148" textAnchor="middle" fill="#fb923c" fontSize="8">view 2 (augment forte)</text>

      {/* EMA arrow from online to target */}
      <path d="M 155 90 Q 85 125 105 155" fill="none" stroke="#fb923c" strokeWidth="1.2" strokeDasharray="4,2" markerEnd="url(#arrBYp)" />
      <text x="112" y="128" fill="#fb923c" fontSize="8">EMA (momentum)</text>

      {/* Outputs */}
      <line x1="200" y1="55" x2="258" y2="70" stroke="#f97316" strokeWidth="1.2" markerEnd="url(#arrBYg)" />
      <text x="228" y="50" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">qθ(zᵢ)</text>
      <line x1="200" y1="182" x2="258" y2="100" stroke="#fb923c" strokeWidth="1.2" markerEnd="url(#arrBYp)" />
      <text x="238" y="175" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">sg(zⱼ)</text>

      {/* Loss / comparison */}
      <circle cx="290" cy="85" r="28" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="290" y="80" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">erro de</text>
      <text x="290" y="93" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">predição</text>

      {/* stop-gradient note */}
      <rect x="340" y="55" width="200" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="440" y="78" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">stop-gradient (sg)</text>
      <text x="440" y="95" textAnchor="middle" fill="#f97316" fontSize="8">o gradiente NUNCA flui</text>
      <text x="440" y="108" textAnchor="middle" fill="#f97316" fontSize="8">de volta pela rede target</text>
      <line x1="318" y1="85" x2="340" y2="85" stroke="#f97316" strokeWidth="1.2" strokeDasharray="3,2" />
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      A rede online é treinada por gradiente para prever a saída da rede target dada a outra view.
      A rede target é uma cópia EMA (lenta) da rede online — nunca recebe gradientes diretamente.
      Esta combinação <strong>predictor assimétrico + stop-gradient + target momentum</strong> é o que
      previne o colapso (todas as representações a convergirem para um vetor constante).
      O DINO usa ainda <em>centering</em> (subtrair a média do batch) e <em>sharpening</em> (temperatura
      baixa no teacher) para reforçar a anti-colapso.
    </p>
  </div>
);

// === Diagram: MAE masked image grid + asymmetric encoder/decoder ===
const MAEDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>MAE — Masked Autoencoder</p>
    <svg viewBox="0 0 600 230" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrMAE" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* masked grid */}
      <text x="80" y="18" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="700">Imagem (grid 4×4 patches)</text>
      {Array.from({length: 16}).map((_, i) => {
        const masked = [1,2,4,5,7,8,9,11,12,14]; // ~75% masked (10/16)
        const bx = 10 + (i % 4) * 35;
        const by = 30 + Math.floor(i / 4) * 35;
        return (
          <rect key={i} x={bx} y={by} width="32" height="32" rx="3"
            fill={masked.includes(i) ? 'rgba(249,115,22,0.10)' : 'rgba(249,115,22,0.10)'}
            stroke={masked.includes(i) ? '#f97316' : '#f97316'} strokeWidth="1"
            strokeDasharray={masked.includes(i) ? '3,2' : '0'} />
        );
      })}
      <text x="80" y="180" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">■ visíveis (~25%)</text>
      <text x="80" y="195" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">▢ mascarados (~75%, descartados)</text>

      {/* arrow to encoder */}
      <line x1="155" y1="100" x2="200" y2="100" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrMAE)" />

      {/* big encoder */}
      <rect x="200" y="40" width="110" height="120" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.8" />
      <text x="255" y="95" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">Encoder</text>
      <text x="255" y="112" textAnchor="middle" fill="#f97316" fontSize="9">ViT grande</text>
      <text x="255" y="126" textAnchor="middle" fill="#f97316" fontSize="9">(só patches</text>
      <text x="255" y="139" textAnchor="middle" fill="#f97316" fontSize="9">visíveis)</text>

      {/* arrow to decoder with mask tokens inserted */}
      <line x1="310" y1="100" x2="345" y2="100" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrMAE)" />
      <text x="328" y="90" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">+ mask tokens</text>

      {/* small decoder */}
      <rect x="345" y="75" width="70" height="50" rx="8" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="380" y="98" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">Decoder</text>
      <text x="380" y="112" textAnchor="middle" fill="#f59e0b" fontSize="8">leve (~10%)</text>

      {/* arrow to reconstruction */}
      <line x1="415" y1="100" x2="455" y2="100" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrMAE)" />

      {/* reconstructed grid */}
      <text x="525" y="18" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="700">Reconstrução</text>
      {Array.from({length: 16}).map((_, i) => {
        const masked = [1,2,4,5,7,8,9,11,12,14];
        const bx = 460 + (i % 4) * 35;
        const by = 30 + Math.floor(i / 4) * 35;
        return (
          <rect key={i} x={bx} y={by} width="32" height="32" rx="3"
            fill={masked.includes(i) ? 'rgba(249,115,22,0.10)' : 'rgba(249,115,22,0.10)'}
            stroke={masked.includes(i) ? color : '#f97316'} strokeWidth="1" />
        );
      })}
      <text x="525" y="180" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">pixels reconstruídos</text>
      <text x="525" y="195" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">loss = MSE só nos patches mascarados</text>

      <text x="300" y="215" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Decoder descartado após o pré-treino — só o encoder é usado downstream</text>
    </svg>
  </div>
);

export default function DL7() {
  return (
    <div style={S.page}>
      <Link to="/dl" style={S.back}><ArrowLeft size={16} /> Voltar a Deep Learning</Link>

      <div style={S.tag}>Module 07</div>
      <h1 style={S.h1}>Self-Supervised &amp; Contrastive Learning</h1>
      <p style={S.lead}>
        Anotar a ImageNet custou milhões de dólares e milhares de horas de trabalho humano — e mesmo assim
        cobre apenas uma fração ínfima da diversidade visual do mundo real. O <strong>self-supervised
        learning (SSL)</strong> resolve este gargalo: em vez de depender de labels, o próprio modelo gera
        as suas tarefas de treino a partir da estrutura interna dos dados não-rotulados. Neste módulo
        percorremos a evolução do campo — das pretext tasks simples ao contrastive learning (SimCLR, MoCo),
        passando pelos métodos sem negativos (BYOL, DINO) até aos Masked Autoencoders (MAE), que hoje
        dominam o pré-treino de visão em larga escala.
      </p>

      {/* === SECTION 1: Why SSL + Pretext Tasks === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Porquê Self-Supervised? Labels são Caros, Dados são Abundantes</h2>
        <p style={S.p}>
          O paradigma supervisionado clássico exige pares (imagem, label) — um recurso escasso e caro.
          Para domínios especializados (imagens médicas, satélite, microscopia), só especialistas podem
          rotular, e fazem-no lentamente. Por outro lado, existem milhares de milhões de imagens, vídeos
          e textos não-rotulados disponíveis online, gerados continuamente.
        </p>
        <p style={S.p}>
          O SSL explora esta abundância criando <strong>pretext tasks</strong> (tarefas-pretexto): problemas
          artificiais cuja "resposta certa" é derivada automaticamente da própria amostra — sem intervenção
          humana. Para resolver bem a pretext task, o modelo é forçado a aprender representações que
          capturam estrutura semântica real (formas, objetos, texturas, relações espaciais).
        </p>

        <PretextTasksDiagram />

        <h3 style={S.h3}>Catálogo de Pretext Tasks Clássicas</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Pretext task</th><th style={S.th}>O que o modelo prevê</th><th style={S.th}>Que estrutura aprende</th></tr>
            </thead>
            <tbody>
              {[
                ['Predição de rotação', 'Ângulo aplicado (0°, 90°, 180°, 270°) — classificação em 4 classes', 'Orientação canónica de objetos, conceito de "cima/baixo"'],
                ['Jigsaw puzzle', 'Permutação correta de 9 patches embaralhados', 'Relações espaciais e estrutura local-global'],
                ['Colorização', 'Canais de cor (a,b) a partir do canal de luminância (L)', 'Semântica de objetos (céu é azul, relva é verde)'],
                ['Posição relativa de patches', 'Posição (1 de 8 direções) de um patch em relação a outro', 'Contexto espacial e composição de cenas'],
                ['Inpainting / masked patch prediction', 'Conteúdo de regiões mascaradas da imagem', 'Compreensão global da cena para preencher lacunas'],
              ].map(([task, pred, learn]) => (
                <tr key={task}>
                  <td style={{ ...S.td, fontWeight: 600 }}>{task}</td>
                  <td style={S.td}>{pred}</td>
                  <td style={S.td}>{learn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={S.note}>
          Intuição central: um modelo que consegue acertar de forma fiável "esta imagem foi rodada 90°"
          já teve de aprender a reconhecer o objeto e a sua orientação típica — esse conhecimento
          transfere-se diretamente para tarefas downstream como classificação ou deteção.
        </div>

        <h3 style={S.h3}>Do Pré-treino à Tarefa Final</h3>
        <p style={S.p}>
          Depois de o encoder aprender boas representações na pretext task, há duas formas comuns de o
          aproveitar para a tarefa real (downstream):
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: `1px solid ${color}30` }}>
            <div style={{ fontWeight: 700, color, marginBottom: '0.4rem' }}>Linear Probing</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Os pesos do encoder ficam <strong>congelados</strong>; treina-se apenas um classificador
              linear simples sobre as representações extraídas. Mede diretamente a qualidade das
              features aprendidas no pré-treino.
            </p>
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: `1px solid ${color}30` }}>
            <div style={{ fontWeight: 700, color, marginBottom: '0.4rem' }}>Fine-tuning Completo</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Todos os pesos do encoder são ajustados (normalmente com learning rate baixa) na tarefa
              downstream. Tipicamente atinge melhor performance, mas exige mais dados rotulados e compute.
            </p>
          </div>
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Contrastive Learning core idea === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. A Ideia Central do Contrastive Learning</h2>
        <p style={S.p}>
          O contrastive learning aborda o SSL de forma diferente: em vez de resolver um puzzle artificial,
          o modelo aprende diretamente um <strong>espaço de embeddings</strong> onde a noção de "semelhança"
          reflete identidade semântica. A receita é simples de enunciar:
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>1.</strong> Gerar duas (ou mais) <em>views</em> da mesma imagem através de augmentações
            aleatórias (crop, color jitter, blur, flip). Estas duas views formam um <strong>par positivo</strong>.<br/><br/>
            <strong>2.</strong> Quaisquer views provenientes de imagens diferentes do batch são tratadas
            como <strong>pares negativos</strong>.<br/><br/>
            <strong>3.</strong> Treinar o encoder para que pares positivos fiquem próximos no espaço de
            embeddings, e pares negativos fiquem afastados.
          </p>
        </div>

        <PullPushDiagram />

        <p style={S.p}>
          A premissa subjacente é a <strong>invariância a augmentações</strong>: duas crops diferentes,
          com cores ligeiramente alteradas, da mesma fotografia de um cão continuam a representar "o mesmo
          cão" — logo o modelo deve mapeá-las para pontos próximos. Ao mesmo tempo, ao ser forçado a
          distinguir essa imagem de todas as outras no batch, o modelo aprende características
          discriminativas e não triviais (não pode simplesmente colapsar tudo para o mesmo ponto, porque
          isso tornaria positivos e negativos indistinguíveis).
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: SimCLR === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. SimCLR — Simple Framework for Contrastive Learning</h2>
        <p style={S.p}>
          O SimCLR (Chen et al., 2020) é a formalização mais influente da ideia anterior. O pipeline
          tem quatro componentes principais: augmentação de dados, encoder, projection head, e a
          função de perda NT-Xent.
        </p>

        <SimCLRDiagram />

        <h3 style={S.h3}>Augmentações: o "motor" do SimCLR</h3>
        <p style={S.p}>
          A escolha e composição das augmentações é o fator que mais influencia a qualidade final das
          representações — mais até do que a arquitetura do encoder.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Augmentação</th><th style={S.th}>Efeito no modelo</th><th style={S.th}>Importância</th></tr>
            </thead>
            <tbody>
              {[
                ['Random crop + resize', 'Força invariância a escala e posição do objeto na imagem', 'Muito alta'],
                ['Color jitter (brilho/contraste/saturação/matiz)', 'Impede que o modelo use cor como atalho ("shortcut")', 'Alta'],
                ['Gaussian blur', 'Reduz dependência de detalhes finos/texturas', 'Média'],
                ['Flip horizontal', 'Invariância à orientação esquerda-direita', 'Média'],
                ['Conversão para grayscale (ocasional)', 'Reforça que cor não é a única pista discriminativa', 'Baixa-Média'],
              ].map(([a, b, c]) => (
                <tr key={a}>
                  <td style={{ ...S.td, fontWeight: 600 }}>{a}</td>
                  <td style={S.td}>{b}</td>
                  <td style={S.td}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          A combinação <strong>random crop + color jitter</strong> é, isoladamente, a mais decisiva. Sem
          color jitter, os modelos aprendem a "fazer batota": detetam que duas crops vêm da mesma imagem
          apenas pela distribuição de cores, sem aprender forma ou semântica.
        </div>

        <h3 style={S.h3}>O Projection Head</h3>
        <p style={S.p}>
          Em vez de aplicar a loss diretamente sobre as representações h do encoder, o SimCLR adiciona um
          pequeno MLP (tipicamente 2 camadas) — o <strong>projection head</strong> g(·) — que mapeia h para
          um espaço z onde a loss contrastiva é calculada. Surpreendentemente, usar h (saída do encoder,
          antes da projeção) para tarefas downstream funciona <em>melhor</em> do que usar z. A explicação:
          g(·) aprende a remover informação que é útil para a tarefa de invariância contrastiva mas
          prejudicial para tarefas gerais (ex: informação de cor e orientação que a contrastive loss
          tenta apagar). O projection head é descartado após o pré-treino.
        </p>

        <h3 style={S.h3}>A Loss NT-Xent (Normalized Temperature-scaled Cross Entropy)</h3>
        <p style={S.p}>
          Para um par positivo (i, j), a similaridade entre embeddings normalizados é o cosseno:
        </p>
        <div style={S.math}>
          <BlockMath math={`\\text{sim}(u, v) = \\frac{u \\cdot v}{\\|u\\| \\, \\|v\\|}`} />
        </div>
        <p style={S.p}>
          A loss para o par (i, j) é então:
        </p>
        <div style={S.math}>
          <BlockMath math={`\\ell_{i,j} = -\\log \\frac{\\exp(\\text{sim}(z_i, z_j) / \\tau)}{\\sum_{k=1}^{2N} \\mathbb{1}_{[k \\neq i]} \\exp(\\text{sim}(z_i, z_k) / \\tau)}`} />
        </div>
        <p style={S.p}>
          Onde N é o número de imagens no batch (logo 2N views no total), e τ é a <strong>temperatura</strong>
          — um hiperparâmetro que controla quão "duramente" o modelo penaliza negativos próximos do positivo.
        </p>

        <h3 style={S.h3}>Exemplo Numérico: NT-Xent com 4 Views</h3>
        <p style={S.p}>
          Considere um mini-batch com N=2 imagens (A e B), gerando 4 views: A₁, A₂ (positivos entre si)
          e B₁, B₂ (positivos entre si). Suponha que, após normalização L2, as similaridades cosseno
          entre A₁ e as restantes views são:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Par</th><th style={S.th}>sim(A₁, ·)</th><th style={S.th}>Tipo</th></tr>
            </thead>
            <tbody>
              {[
                ['A₁ ↔ A₂', '0.80', 'positivo'],
                ['A₁ ↔ B₁', '0.10', 'negativo'],
                ['A₁ ↔ B₂', '0.05', 'negativo'],
              ].map(([p, s, t]) => (
                <tr key={p}>
                  <td style={S.td}>{p}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>{s}</td>
                  <td style={{ ...S.td, color: t === 'positivo' ? '#f97316' : '#f97316', fontWeight: 600 }}>{t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          Com temperatura τ = 0.5, dividimos cada similaridade por τ e exponenciamos:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Par</th><th style={S.th}>sim / τ</th><th style={S.th}>exp(sim / τ)</th></tr>
            </thead>
            <tbody>
              {[
                ['A₁ ↔ A₂ (positivo)', '1.60', '4.953'],
                ['A₁ ↔ B₁', '0.20', '1.221'],
                ['A₁ ↔ B₂', '0.10', '1.105'],
              ].map(([p, s, e]) => (
                <tr key={p}>
                  <td style={S.td}>{p}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>{s}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>{e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          A soma do denominador é 4.953 + 1.221 + 1.105 = 7.279. A loss para A₁ é:
        </p>
        <div style={S.math}>
          <BlockMath math={`\\ell_{A_1} = -\\log \\frac{4.953}{7.279} = -\\log(0.6804) \\approx 0.385`} />
        </div>
        <p style={S.p}>
          Uma loss baixa (próxima de 0) significa que o positivo domina largamente o denominador — o
          modelo está a colocar A₁ muito mais próximo de A₂ do que de qualquer negativo. Se, em vez disso,
          sim(A₁,A₂) fosse igual a sim(A₁,B₁), o numerador seria uma fração pequena do total e a loss
          seria muito maior — o gradiente empurraria A₁ e A₂ a aproximarem-se ainda mais.
        </p>
        <div style={S.note}>
          Temperatura baixa (ex: τ=0.1) torna a distribuição mais "afiada" — penaliza fortemente até
          pequenas semelhanças com negativos, o que ajuda a separar <em>hard negatives</em> (negativos
          que são visualmente parecidos ao positivo) mas pode tornar o treino instável. Temperatura
          alta suaviza a loss mas pode não distinguir bem entre negativos fáceis e difíceis.
        </div>
        <div style={S.note}>
          Limitação prática do SimCLR: como todos os negativos vêm do próprio mini-batch, batches pequenos
          fornecem poucos negativos e a tarefa contrastiva torna-se demasiado fácil. Daí a necessidade de
          batches gigantes (4096–8192), o que exige hardware TPU/GPU de larga escala.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: MoCo === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. MoCo — Momentum Contrast e a Fila de Negativos</h2>
        <p style={S.p}>
          O MoCo (He et al., 2020) ataca diretamente a limitação do SimCLR: como obter muitos negativos
          sem precisar de batches enormes? A resposta é desacoplar o "dicionário de negativos" do
          tamanho do batch, mantendo-o como uma <strong>fila (queue)</strong> externa que persiste
          entre iterações.
        </p>

        <SimCLRvsMoCoDiagram />

        <h3 style={S.h3}>Os Dois Encoders do MoCo</h3>
        <p style={S.p}>
          O MoCo usa dois encoders com papéis distintos:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: '1px solid #f59e0b30' }}>
            <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.4rem' }}>Query Encoder (θ_q)</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Codifica a view "de consulta" (query). É atualizado normalmente, por backpropagation +
              gradient descent, a cada passo de treino.
            </p>
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: '1px solid #fb923c30' }}>
            <div style={{ fontWeight: 700, color: '#fb923c', marginBottom: '0.4rem' }}>Key Encoder (θ_k) — momentum</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Codifica as keys que entram na fila. <strong>Não recebe gradientes diretamente</strong> —
              os seus pesos são uma média móvel exponencial (EMA) dos pesos do query encoder.
            </p>
          </div>
        </div>

        <div style={S.math}>
          <BlockMath math={`\\theta_k \\leftarrow m \\cdot \\theta_k + (1-m) \\cdot \\theta_q, \\qquad m \\approx 0.999`} />
        </div>
        <p style={S.p}>
          Com m ≈ 0.999, o key encoder muda muito lentamente — a cada iteração apenas 0.1% dos novos
          pesos do query encoder são incorporados. Isto garante que as keys armazenadas na fila, mesmo
          vindas de iterações muito anteriores, foram geradas por um encoder "quase igual" ao atual,
          mantendo a fila <strong>consistente</strong>.
        </p>

        <h3 style={S.h3}>A Fila como Dicionário de Negativos</h3>
        <p style={S.p}>
          A cada iteração, as keys do batch atual são adicionadas ao fim da fila (enqueue), e as keys
          mais antigas são removidas do início (dequeue) — comportamento FIFO. A fila pode conter dezenas
          de milhares de negativos (tipicamente K=65536), independentemente de o batch de treino ter
          apenas 256 imagens.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Resultado prático:</strong> MoCo atinge qualidade de representações comparável (e
            por vezes superior) ao SimCLR, mas com batches normais de GPU (256), em vez de necessitar
            de TPU pods com batches de milhares. MoCo v2 incorpora o projection head e o conjunto de
            augmentações fortes do SimCLR; MoCo v3 adapta o framework a Vision Transformers, eliminando
            a fila e usando apenas batches grandes com o momentum encoder.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: BYOL & DINO === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. BYOL &amp; DINO — Aprender sem Negativos</h2>
        <p style={S.p}>
          Tanto o SimCLR como o MoCo dependem criticamente de negativos: sem eles, a forma mais fácil de
          minimizar a loss de "aproximar positivos" é o modelo aprender uma função constante — todas as
          imagens mapeadas para o mesmo ponto (<strong>colapso de representação</strong>, ou
          <em> mode collapse</em>). O BYOL (Bootstrap Your Own Latent, 2020) mostrou — surpreendentemente
          — que é possível evitar este colapso sem qualquer negativo.
        </p>

        <BYOLDiagram />

        <h3 style={S.h3}>Os Três Ingredientes Anti-Colapso</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Ingrediente</th><th style={S.th}>Como funciona</th><th style={S.th}>Porque previne colapso</th></tr>
            </thead>
            <tbody>
              {[
                ['Predictor assimétrico q(·)', 'Só a rede online tem este MLP extra que tenta prever a saída da rede target', 'Quebra a simetria: as duas redes deixam de ter exatamente a mesma função, eliminando a solução trivial óbvia'],
                ['Stop-gradient (sg)', 'Os gradientes nunca fluem de volta através da rede target', 'A rede target não é otimizada para "ser fácil de prever" — só a online se adapta'],
                ['Target momentum (EMA)', 'Pesos da rede target = EMA lenta dos pesos da rede online', 'Fornece um alvo estável e que evolui suavemente, em vez de um alvo que muda bruscamente a cada passo'],
              ].map(([ing, how, why]) => (
                <tr key={ing}>
                  <td style={{ ...S.td, fontWeight: 600 }}>{ing}</td>
                  <td style={S.td}>{how}</td>
                  <td style={S.td}>{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>DINO — Self-Distillation com Vision Transformers</h3>
        <p style={S.p}>
          O DINO (Caron et al., 2021) aplica o mesmo princípio online/target a Vision Transformers,
          enquadrando o problema como <strong>self-distillation</strong>: uma rede "student" (online)
          aprende a imitar a saída de uma rede "teacher" (target/EMA), sem qualquer label.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: '1px solid #fb923c30' }}>
            <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.4rem' }}>Multi-crop: views locais e globais</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              O student recebe vários crops <strong>locais</strong> (pequenos, ~96×96px), enquanto o
              teacher recebe apenas crops <strong>globais</strong> (maiores, ~224×224px). O student é
              forçado a inferir o "todo" a partir de "partes" — uma tarefa de generalização espacial
              muito mais rica que duas crops do mesmo tamanho.
            </p>
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: '1px solid #fb923c30' }}>
            <div style={{ fontWeight: 700, color: '#fb923c', marginBottom: '0.4rem' }}>Centering + Sharpening</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Em vez de stop-gradient apenas, o DINO subtrai uma média móvel ao output do teacher
              (<em>centering</em> — evita que uma dimensão domine) e usa uma temperatura mais baixa no
              softmax do teacher (<em>sharpening</em> — torna a distribuição-alvo mais "decisiva").
              Juntos, substituem a necessidade de negativos ou de batch normalization.
            </p>
          </div>
        </div>

        <div style={S.note}>
          Resultado emergente notável do DINO: os mapas de atenção do token [CLS] em ViTs treinados
          com DINO segmentam objetos da cena de forma quase perfeita — sem qualquer supervisão de
          segmentação. Isto sugere que o objetivo de self-distillation, por si só, força o modelo a
          desenvolver uma noção de "figura vs. fundo".
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: MAE === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Masked Autoencoders (MAE)</h2>
        <p style={S.p}>
          O MAE (He et al., 2021) abandona completamente o paradigma contrastivo e regressa à ideia de
          autoencoder — mas com uma taxa de mascaramento extrema e uma arquitetura assimétrica que o
          tornam, simultaneamente, mais simples, mais escalável e mais eficiente que os métodos anteriores.
        </p>

        <MAEDiagram />

        <h3 style={S.h3}>Porquê 75% e não os 15% do BERT?</h3>
        <p style={S.p}>
          No BERT, mascarar 15% dos tokens de texto já é uma tarefa difícil, porque o texto é
          <strong> denso em informação</strong> — cada palavra carrega muita semântica e há fortes
          dependências de longo alcance entre tokens distantes. As imagens são diferentes:
          são <strong>altamente redundantes espacialmente</strong> — um patch em falta pode frequentemente
          ser "adivinhado" a partir dos patches vizinhos por simples interpolação, sem entender a cena.
        </p>
        <p style={S.p}>
          Ao mascarar 75% dos patches (deixando apenas ~25% visíveis, tipicamente espalhados de forma
          aleatória pela imagem), a interpolação local deixa de ser suficiente — o modelo é forçado a
          desenvolver uma compreensão <strong>holística</strong> da cena para reconstruir regiões
          inteiras a partir de fragmentos esparsos.
        </p>

        <h3 style={S.h3}>A Assimetria Encoder-Decoder</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Componente</th><th style={S.th}>Tamanho</th><th style={S.th}>Recebe</th><th style={S.th}>Papel</th></tr>
            </thead>
            <tbody>
              {[
                ['Encoder', 'Grande (ex: ViT-Large/Huge)', 'Apenas os ~25% patches visíveis (sem mask tokens)', 'Aprende representações ricas; é o único componente usado downstream'],
                ['Decoder', 'Leve (~10% dos parâmetros do encoder)', 'Tokens codificados + mask tokens (placeholders) nas posições mascaradas', 'Reconstrói os pixels originais dos patches mascarados; descartado após pré-treino'],
              ].map(([comp, size, inp, role]) => (
                <tr key={comp}>
                  <td style={{ ...S.td, fontWeight: 600 }}>{comp}</td>
                  <td style={S.td}>{size}</td>
                  <td style={S.td}>{inp}</td>
                  <td style={S.td}>{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          Esta assimetria traz um ganho de eficiência enorme: como o encoder (a parte cara, com mais
          camadas e mais dimensões) só processa 25% dos patches, o custo computacional do pré-treino
          cai drasticamente — permitindo treinar ViTs muito maiores com o mesmo orçamento de compute.
          O decoder leve garante ainda que o encoder não pode "delegar" a reconstrução de baixo nível
          para uma rede expressiva — toda a representação semântica útil tem de estar concentrada no
          encoder.
        </p>

        <h3 style={S.h3}>A Loss de Reconstrução</h3>
        <p style={S.p}>
          A loss é simplesmente o erro quadrático médio (MSE) entre os pixels originais e os
          reconstruídos, calculado <strong>apenas sobre os patches mascarados</strong>:
        </p>
        <div style={S.math}>
          <BlockMath math={`\\mathcal{L} = \\frac{1}{|\\mathcal{M}|} \\sum_{i \\in \\mathcal{M}} \\| \\hat{x}_i - x_i \\|_2^2`} />
        </div>
        <p style={S.p}>
          onde <InlineMath math={"\\mathcal{M}"} /> é o conjunto de índices de patches mascarados,
          x_i são os pixels (normalizados) do patch original e x̂_i a reconstrução do decoder. Não
          calcular a loss sobre os patches visíveis evita que o modelo se foque em "copiar" o que já
          recebeu como input.
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 7: Comparison table === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Comparação dos Métodos</h2>
        <p style={S.p}>
          Os cinco métodos cobertos representam três famílias distintas: contrastivos com negativos
          (SimCLR, MoCo), sem negativos com pares assimétricos (BYOL, DINO), e generativos por
          reconstrução (MAE). A tabela seguinte resume as suas diferenças-chave.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Método</th>
                <th style={S.th}>Precisa de negativos?</th>
                <th style={S.th}>Augmentação intensiva?</th>
                <th style={S.th}>Truque-chave</th>
                <th style={S.th}>Uso típico downstream</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['SimCLR', 'Sim (do batch)', 'Sim — crítica', 'Projection head + NT-Xent, batches enormes', 'Linear probing / fine-tuning'],
                ['MoCo (v1/v2/v3)', 'Sim (fila externa)', 'Sim', 'Momentum encoder + queue FIFO de negativos', 'Linear probing / fine-tuning, batches normais'],
                ['BYOL', 'Não', 'Sim', 'Predictor assimétrico + stop-gradient + EMA target', 'Linear probing / fine-tuning'],
                ['DINO', 'Não', 'Sim (multi-crop)', 'Self-distillation + centering & sharpening', 'k-NN classification, segmentação emergente'],
                ['MAE', 'Não', 'Mínima (só crop)', 'Mascaramento extremo (75%) + decoder leve assimétrico', 'Fine-tuning completo (ViT grandes)'],
              ].map(([m, neg, aug, trick, use]) => (
                <tr key={m}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{m}</td>
                  <td style={S.td}>{neg}</td>
                  <td style={S.td}>{aug}</td>
                  <td style={S.td}>{trick}</td>
                  <td style={S.td}>{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={S.note}>
          Tendência histórica: SimCLR (2020) → MoCo (2020) eliminam a dependência de batches gigantes;
          BYOL/DINO (2020-2021) eliminam negativos por completo; MAE (2021) elimina até a necessidade de
          augmentações elaboradas, dependendo apenas de mascaramento. Cada geração reduziu uma fonte de
          complexidade e custo computacional, mantendo ou melhorando a qualidade das representações.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === Synthesis === */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Síntese do Módulo</h2>
        <p style={S.p}>
          O self-supervised learning transformou a forma como a visão computacional é pré-treinada.
          A jornada — de pretext tasks artificiais, passando pelo contrastive learning com e sem
          negativos, até à reconstrução mascarada — mostra uma procura constante por sinais de
          supervisão "gratuitos" cada vez mais ricos e escaláveis.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Pontos-chave a reter:</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li>Pretext tasks (rotação, jigsaw, colorização, masked patches) extraem sinal de supervisão dos próprios dados</li>
            <li>Contrastive learning aproxima pares positivos (views da mesma imagem) e afasta negativos (views de outras imagens)</li>
            <li>SimCLR depende de batches grandes; MoCo desacopla negativos do batch via momentum encoder + fila FIFO</li>
            <li>BYOL e DINO eliminam negativos com predictor assimétrico, stop-gradient e target via EMA, evitando colapso</li>
            <li>MAE mascara 75% dos patches e usa um decoder leve — extremamente eficiente e escalável para ViTs grandes</li>
            <li>Linear probing avalia a qualidade pura das representações; fine-tuning completo maximiza a performance final</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
