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

const TIMELINE = [
  { year: '1998', name: 'LeNet-5', color: '#4a9eed', params: '60K', top1: '~1% (MNIST)', desc: 'A primeira CNN moderna. 2 camadas conv + 3 FC. Tanh como activação. Leitura de cheques em bancos. Prova de conceito que ficou esquecida por 14 anos.' },
  { year: '2012', name: 'AlexNet', color: '#4a9eed', params: '60M', top1: '63.3% (ImageNet)', desc: 'O "big bang" do deep learning. Ganhou o ImageNet Challenge com margem enorme (~10pp). Introduziu: ReLU, dropout, data augmentation, GPUs para treino, Local Response Normalization.' },
  { year: '2014', name: 'VGGNet', color: '#4a9eed', params: '138M', top1: '74.4%', desc: 'Princípio da simplicidade: só filtros 3×3 empilhados em vez de filtros grandes. Profundidade (16-19 camadas) é o que importa. Muito usado como feature extractor até hoje.' },
  { year: '2014', name: 'GoogLeNet (Inception v1)', color: '#4a9eed', params: '6.8M', top1: '74.8%', desc: 'Inception module: aplicar filtros 1×1, 3×3, 5×5 e max pool em paralelo e concatenar. Muito mais eficiente que VGG. 138M → 6.8M parâmetros com melhor accuracy.' },
  { year: '2015', name: 'ResNet', color: '#4a9eed', params: '25M (ResNet-50)', top1: '80.3% (ResNet-152)', desc: 'Skip connections resolvem o problema do vanishing gradient. Permite treinar redes de 50, 101, 152 camadas. Ganhou ImageNet 2015 com desempenho sobre-humano (5.0% vs 5.1% humano).' },
  { year: '2017', name: 'DenseNet', color: '#4a9eed', params: '8M (DenseNet-121)', top1: '79.2%', desc: 'Cada camada recebe como input a concatenação de TODAS as camadas anteriores no bloco (dense connections). Reuso máximo de features, gradientes fluem directamente para qualquer camada anterior, muito eficiente em parâmetros.' },
  { year: '2018', name: 'SENet (Squeeze-and-Excitation)', color: '#4a9eed', params: '+0.5M sobre o backbone', top1: '82.7% (top-1, ganhou ILSVRC 2017)', desc: 'Introduz "channel attention": cada bloco aprende a recalibrar a importância de cada canal de feature maps. Pequeno custo computacional extra, ganho consistente de accuracy em qualquer backbone (ResNet, Inception, etc.).' },
];

const TimelineDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', textAlign: 'center' }}>A Evolução das Arquitecturas CNN</p>
    <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
      <div style={{ position: 'absolute', left: '1.5rem', top: 0, bottom: 0, width: '2px', background: 'var(--card-border)', zIndex: 0 }}/>
      {TIMELINE.map(({ year, name, color, params, top1, desc }, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem', paddingLeft: '0.5rem', position: 'relative', zIndex: 1 }}>
          <div style={{ minWidth: 36, height: 36, borderRadius: '50%', background: `${color}`, border: `2px solid ${color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, position: 'relative', marginLeft: '-1.7rem', flexShrink: 0 }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#fff' }}>{year.slice(2)}</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 800, color, fontSize: '1rem' }}>{name}</span>
              <span style={{ fontSize: '0.75rem', background: `${color}15`, color, padding: '0.1rem 0.5rem', borderRadius: 10 }}>{params} params</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Top-1: {top1}</span>
            </div>
            <p style={{ margin: '0.3rem 0 0', fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ResNetDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>ResNet — Skip Connection (Residual Block)</p>
    <svg viewBox="0 0 480 130" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr6r" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
        <marker id="arr6g" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
      </defs>

      {/* Plain path */}
      <text x="10" y="28" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Rede Comum (plain)</text>
      <rect x="10" y="35" width="50" height="30" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="35" y="54" textAnchor="middle" fill="#4a9eed" fontSize="7.5" fontWeight="700">x</text>
      <line x1="60" y1="50" x2="90" y2="50" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr6r)"/>
      <rect x="93" y="35" width="80" height="30" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="133" y="47" textAnchor="middle" fill="#4a9eed" fontSize="7">Conv3×3 BN ReLU</text>
      <text x="133" y="58" textAnchor="middle" fill="#4a9eed" fontSize="7">Conv3×3 BN</text>
      <line x1="173" y1="50" x2="203" y2="50" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr6r)"/>
      <rect x="206" y="35" width="50" height="30" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2"/>
      <text x="231" y="54" textAnchor="middle" fill="#4a9eed" fontSize="7.5" fontWeight="700">F(x)</text>
      <text x="133" y="80" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">aprende F(x) directamente</text>

      {/* ResNet path */}
      <text x="10" y="105" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Bloco Residual (ResNet)</text>

      <rect x="260" y="35" width="50" height="30" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="285" y="54" textAnchor="middle" fill="#4a9eed" fontSize="7.5" fontWeight="700">x</text>

      {/* Skip connection (arc) */}
      <path d="M 285 35 Q 380 5 448 50" fill="none" stroke="#4a9eed" strokeWidth="2" strokeDasharray="4,2" markerEnd="url(#arr6g)"/>
      <text x="340" y="12" fill="#4a9eed" fontSize="7.5" fontWeight="700">skip: +x</text>

      <line x1="310" y1="50" x2="338" y2="50" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr6r)"/>
      <rect x="341" y="35" width="80" height="30" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="381" y="47" textAnchor="middle" fill="#4a9eed" fontSize="7">Conv3×3 BN ReLU</text>
      <text x="381" y="58" textAnchor="middle" fill="#4a9eed" fontSize="7">Conv3×3 BN</text>
      <line x1="421" y1="50" x2="445" y2="50" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr6r)"/>

      <rect x="448" y="35" width="24" height="30" rx="4" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2"/>
      <text x="460" y="48" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">⊕</text>
      <text x="460" y="59" textAnchor="middle" fill="#4a9eed" fontSize="6">ReLU</text>

      <text x="385" y="80" textAnchor="middle" fill="#4a9eed" fontSize="7.5">aprende F(x)+x = residual H(x)−x</text>
      <text x="385" y="92" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">se F(x)≈0, a camada é a identidade — gradiente flui directamente</text>
    </svg>
  </div>
);

const InceptionDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Inception Module — quatro caminhos em paralelo</p>
    <svg viewBox="0 0 520 230" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrInc" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#4a9eed"/></marker>
      </defs>

      {/* Input */}
      <rect x="200" y="5" width="120" height="28" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="260" y="23" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Input (camada anterior)</text>

      {/* Branch lines down */}
      {[60, 180, 300, 420].map((cx, i) => (
        <line key={i} x1="260" y1="33" x2={cx} y2="55" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrInc)"/>
      ))}

      {/* Branch 1: 1x1 conv */}
      <rect x="20" y="58" width="80" height="26" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="60" y="75" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Conv 1×1</text>
      <line x1="60" y1="84" x2="60" y2="180" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrInc)"/>

      {/* Branch 2: 1x1 -> 3x3 */}
      <rect x="140" y="58" width="80" height="26" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="180" y="75" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Conv 1×1</text>
      <line x1="180" y1="84" x2="180" y2="105" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrInc)"/>
      <rect x="140" y="108" width="80" height="26" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="180" y="125" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Conv 3×3</text>
      <line x1="180" y1="134" x2="180" y2="180" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrInc)"/>

      {/* Branch 3: 1x1 -> 5x5 */}
      <rect x="260" y="58" width="80" height="26" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="300" y="75" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Conv 1×1</text>
      <line x1="300" y1="84" x2="300" y2="105" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrInc)"/>
      <rect x="260" y="108" width="80" height="26" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="300" y="125" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Conv 5×5</text>
      <line x1="300" y1="134" x2="300" y2="180" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrInc)"/>

      {/* Branch 4: maxpool -> 1x1 */}
      <rect x="380" y="58" width="80" height="26" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="420" y="75" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">MaxPool 3×3</text>
      <line x1="420" y1="84" x2="420" y2="105" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrInc)"/>
      <rect x="380" y="108" width="80" height="26" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="420" y="125" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Conv 1×1</text>
      <line x1="420" y1="134" x2="420" y2="180" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrInc)"/>

      {/* Concat */}
      <rect x="50" y="183" width="400" height="30" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="260" y="202" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Concatenação (filter concat) — empilha os 4 outputs em profundidade</text>

      <line x1="260" y1="213" x2="260" y2="225" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrInc)"/>
    </svg>
    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>As convoluções 1×1 nos ramos do meio reduzem o número de canais ANTES do 3×3/5×5 — "bottleneck" que poupa muito cálculo. No ramo do max pool, o 1×1 reduz canais DEPOIS do pooling.</p>
  </div>
);

const DenseNetDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>DenseNet — Dense Block (cada camada vê tudo o que veio antes)</p>
    <svg viewBox="0 0 480 170" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrDense" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
      </defs>

      {/* 4 layer nodes */}
      {[
        { cx: 60, label: 'x₀\n(input)' },
        { cx: 180, label: 'H₁\nLayer 1' },
        { cx: 300, label: 'H₂\nLayer 2' },
        { cx: 420, label: 'H₃\nLayer 3' },
      ].map(({ cx, label }, i) => (
        <g key={i}>
          <rect x={cx - 40} y="20" width="80" height="40" rx="8" fill={i === 0 ? 'rgba(74,158,237,0.10)' : 'rgba(74,158,237,0.10)'} stroke={i === 0 ? '#4a9eed' : '#4a9eed'} strokeWidth="1.5"/>
          {label.split('\n').map((l, li) => (
            <text key={li} x={cx} y={36 + li * 13} textAnchor="middle" fill={i === 0 ? '#4a9eed' : '#4a9eed'} fontSize="9" fontWeight="700">{l}</text>
          ))}
        </g>
      ))}

      {/* Direct sequential arrows */}
      <line x1="100" y1="40" x2="138" y2="40" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrDense)"/>
      <line x1="220" y1="40" x2="258" y2="40" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrDense)"/>
      <line x1="340" y1="40" x2="378" y2="40" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrDense)"/>

      {/* Skip arcs: x0 -> H2, x0 -> H3, H1 -> H3 */}
      <path d="M 60 60 Q 180 110 300 60" fill="none" stroke="#4a9eed" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arrDense)"/>
      <path d="M 60 60 Q 240 150 420 60" fill="none" stroke="#4a9eed" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arrDense)"/>
      <path d="M 180 60 Q 300 130 420 60" fill="none" stroke="#4a9eed" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arrDense)"/>

      <text x="240" y="160" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">cada Hₗ recebe concat(x₀, x₁, ..., x_(l-1)) — não soma, CONCATENA os feature maps</text>
    </svg>
    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Com L camadas no bloco, há L(L+1)/2 ligações directas (em vez de L). Cada camada produz apenas um pequeno número k de novos feature maps — o "growth rate".</p>
  </div>
);

const SEDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Squeeze-and-Excitation (SE) Block</p>
    <svg viewBox="0 0 520 150" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrSE" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
      </defs>

      {/* Input feature map */}
      <rect x="10" y="40" width="70" height="60" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="45" y="65" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Feature</text>
      <text x="45" y="78" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">maps</text>
      <text x="45" y="92" textAnchor="middle" fill="#4a9eed" fontSize="7">H×W×C</text>

      <line x1="80" y1="70" x2="118" y2="70" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrSE)"/>

      {/* Squeeze: global avg pool */}
      <rect x="121" y="50" width="90" height="40" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="166" y="66" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Squeeze</text>
      <text x="166" y="78" textAnchor="middle" fill="#4a9eed" fontSize="7">Global Avg Pool</text>
      <text x="166" y="105" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">→ vector 1×1×C</text>

      <line x1="211" y1="70" x2="249" y2="70" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrSE)"/>

      {/* Excitation: FC -> ReLU -> FC -> Sigmoid */}
      <rect x="252" y="50" width="120" height="40" rx="6" fill="rgba(74,158,237,0.14)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="312" y="64" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Excitation</text>
      <text x="312" y="76" textAnchor="middle" fill="#4a9eed" fontSize="7">FC→ReLU→FC→Sigmoid</text>
      <text x="312" y="105" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">→ pesos s ∈ (0,1) por canal</text>

      <line x1="372" y1="70" x2="410" y2="70" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrSE)"/>

      {/* Scale */}
      <rect x="413" y="40" width="34" height="60" rx="4" fill="rgba(74,158,237,0.18)" stroke="#4a9eed" strokeWidth="2"/>
      <text x="430" y="73" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">⊗</text>
      <text x="430" y="113" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">Scale</text>

      {/* skip from input to scale */}
      <path d="M 45 40 Q 45 5 430 5 Q 470 5 470 40" fill="none" stroke="#4a9eed" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arrSE)"/>
      <text x="280" y="20" textAnchor="middle" fill="#4a9eed" fontSize="7.5">feature maps originais (H×W×C)</text>

      <line x1="447" y1="70" x2="480" y2="70" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrSE)"/>
      <rect x="483" y="40" width="30" height="60" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="498" y="65" textAnchor="middle" fill="#4a9eed" fontSize="7" fontWeight="700">Output</text>
      <text x="498" y="80" textAnchor="middle" fill="#4a9eed" fontSize="7">recali-</text>
      <text x="498" y="92" textAnchor="middle" fill="#4a9eed" fontSize="7">brado</text>

      <text x="260" y="135" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">cada canal c é multiplicado pelo seu peso sₐ — canais úteis amplificados, irrelevantes atenuados</text>
    </svg>
  </div>
);

export default function CV6() {
  const [sel, setSel] = useState(0);
  const archs = [
    { name: 'LeNet-5', year: '1998', color: '#4a9eed', layers: '5 camadas (2 conv + 3 FC)', params: '60K', input: '32×32 greyscale', activations: 'Tanh / Sigmoid', pooling: 'Average pooling', key: 'Primeira CNN moderna. Prova de conceito para reconhecimento de escrita. Usada em produção em leitores de cheques nos EUA nos anos 90.', limit: 'Sem ReLU, sem GPU, sem grandes datasets. Ficou irrelevante até 2012.' },
    { name: 'AlexNet', year: '2012', color: '#4a9eed', layers: '8 camadas (5 conv + 3 FC)', params: '60M', input: '227×227 RGB', activations: 'ReLU (novidade!)', pooling: 'Max pooling com overlap', key: 'Treinou em 2 GPUs GTX 580. Introduziu ReLU, dropout (0.5 nas FC), augmentation (crops + flips), LRN. Ganhou ImageNet com 63.3% vs 74.3% do 2º lugar.', limit: 'Muito parâmetros nas FC (43M de 60M). Arquitectura ad hoc — não há princípio de design claro.' },
    { name: 'VGGNet', year: '2014', color: '#4a9eed', layers: '16 ou 19 camadas', params: '138M (VGG-16)', input: '224×224 RGB', activations: 'ReLU', pooling: 'Max pooling 2×2', key: 'Princípio: só filtros 3×3, profundidade é o que conta. 2 filtros 3×3 = receptive field de 5×5 mas com menos parâmetros e mais não-linearidade. Ainda muito usado como backbone.', limit: '138M parâmetros — maioria nas FC (102M). Treinar do zero é muito caro. Inferência lenta.' },
    { name: 'GoogLeNet', year: '2014', color: '#4a9eed', layers: '22 camadas (9 Inception modules)', params: '6.8M', input: '224×224 RGB', activations: 'ReLU', pooling: 'Global Average Pooling + max pool nos módulos', key: 'Inception modules: ramos paralelos de 1×1, 3×3, 5×5 e max pool, concatenados. Convoluções 1×1 como "bottleneck" reduzem custo computacional drasticamente. Classificadores auxiliares ajudam o gradiente a propagar em redes profundas.', limit: 'Arquitectura complexa e heterogénea — muitos hiperparâmetros desenhados manualmente. Difícil de modificar/escalar de forma sistemática.' },
    { name: 'ResNet', year: '2015', color: '#4a9eed', layers: '50, 101 ou 152 camadas', params: '25M (ResNet-50)', input: '224×224 RGB', activations: 'ReLU + Identity', pooling: 'Global Average Pooling', key: 'Skip connections resolvem vanishing gradient. H(x) = F(x) + x — aprender o residual é mais fácil que aprender a função completa. Desempenho sobre-humano em ImageNet.', limit: 'Bottleneck blocks necessários para redes profundas. Largura fixa por estágio — menos flexível que EfficientNet.' },
    { name: 'DenseNet', year: '2017', color: '#4a9eed', layers: '121, 169, 201 ou 264 camadas', params: '8M (DenseNet-121)', input: '224×224 RGB', activations: 'ReLU + BN', pooling: 'Average pooling entre dense blocks (transition layers)', key: 'Dense connections: cada camada recebe a concatenação de TODOS os feature maps anteriores no bloco. Reuso extremo de features, gradientes chegam directamente a qualquer camada, muito eficiente em parâmetros face à accuracy.', limit: 'Concatenar tudo cresce a memória rapidamente — feature maps acumulam-se e precisam ficar em memória durante o forward/backward. Mais lento na prática que ResNet apesar de menos parâmetros.' },
    { name: 'SENet', year: '2018', color: '#4a9eed', layers: 'Módulo plugável (ex.: SE-ResNet-50)', params: '+0.5M sobre o backbone (~+10%)', input: '224×224 RGB', activations: 'ReLU + Sigmoid (no SE block)', pooling: 'Global Average Pooling (squeeze) + pooling normal do backbone', key: 'Channel attention: "squeeze" (global average pooling) resume cada canal a um escalar; "excitation" (MLP pequeno) aprende pesos por canal que recalibram os feature maps. Ganho de accuracy quase grátis em qualquer arquitectura existente.', limit: 'Atenção apenas ao nível de canal — não captura relações espaciais (resolvido depois por CBAM e mecanismos de self-attention/Vision Transformers).' },
  ];
  const a = archs[sel];

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cv" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>MÓDULO 6</div>
        <h1 style={S.h1}>Evolução das Arquitecturas CNN</h1>

        <TimelineDiagram />

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>1. Comparação Detalhada</h2>
          <p style={S.p}>Cada arquitectura representa uma resposta a uma limitação concreta da anterior. Usa o explorador abaixo para comparar camadas, número de parâmetros, escolhas de design e limitações de cada uma — desde o LeNet de 1998 até ao SENet de 2018.</p>
          <div style={S.diagram}>
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              {archs.map((ar, i) => (
                <button key={i} onClick={() => setSel(i)} style={{ padding: '0.35rem 0.85rem', borderRadius: 20, cursor: 'pointer', fontWeight: 700, fontSize: '0.82rem', background: sel === i ? ar.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? ar.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{ar.name}</button>
              ))}
            </div>
            <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${a.color}30` }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.82rem' }}>
                {[['Camadas', a.layers], ['Parâmetros', a.params], ['Input', a.input], ['Activação', a.activations], ['Pooling', a.pooling], ['Ano', a.year]].map(([k, v]) => (
                  <div key={k} style={{ background: 'var(--bg-secondary)', borderRadius: 6, padding: '0.5rem 0.75rem' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>{k}</div>
                    <div style={{ fontWeight: 600, color: a.color }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.85rem' }}>
                <div><strong style={{ color: '#4a9eed' }}>Contribuição chave:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>{a.key}</p></div>
                <div><strong style={{ color: '#4a9eed' }}>Limitação:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>{a.limit}</p></div>
              </div>
            </div>
          </div>

          <h3 style={S.h3}>Receptive field: porque 3×3 empilhados &gt; filtros grandes</h3>
          <p style={S.p}>Uma das ideias mais influentes da VGGNet é simples mas poderosa: empilhar duas convoluções 3×3 produz o mesmo receptive field que uma convolução 5×5, e três 3×3 equivalem a um 7×7 — mas com menos parâmetros e mais não-linearidades intermédias (mais ReLUs).</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Configuração</th><th style={S.th}>Receptive field</th><th style={S.th}>Parâmetros (C canais)</th><th style={S.th}>Não-linearidades</th></tr></thead>
              <tbody>
                {[
                  ['1× Conv 7×7', '7×7', '49·C²', '1 ReLU'],
                  ['3× Conv 3×3', '7×7', '27·C²', '3 ReLUs'],
                  ['1× Conv 5×5', '5×5', '25·C²', '1 ReLU'],
                  ['2× Conv 3×3', '5×5', '18·C²', '2 ReLUs'],
                ].map(([cfg, rf, pcount, nl]) => (
                  <tr key={cfg}><td style={S.td}><strong>{cfg}</strong></td><td style={S.td}>{rf}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{pcount}</td><td style={S.td}>{nl}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.note}>Menos parâmetros para o mesmo receptive field = menos overfitting e mais capacidade representacional por não-linearidade extra. Este princípio (filtros pequenos empilhados) foi adoptado por praticamente todas as arquitecturas seguintes.</div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Inception / GoogLeNet em Detalhe</h2>
          <p style={S.p}>Antes do GoogLeNet (2014), a tendência era simplesmente aumentar profundidade e largura (mais camadas, mais filtros) — como fez a VGGNet. Mas isto traz dois problemas: (1) explosão do número de parâmetros e risco de overfitting, e (2) custo computacional que cresce quadraticamente com o número de filtros.</p>
          <p style={S.p}>A pergunta dos autores (Szegedy et al.) foi: porquê escolher entre um filtro 1×1, 3×3 ou 5×5 numa camada, se diferentes escalas capturam informação diferente (detalhes finos vs. padrões mais largos)? A resposta: aplicar todos em paralelo, e deixar a rede aprender a combinar a informação.</p>

          <InceptionDiagram />

          <h3 style={S.h3}>Porque é que as convoluções 1×1 são tão importantes</h3>
          <p style={S.p}>Uma convolução 1×1 não olha para vizinhança espacial — opera apenas na dimensão dos canais. Pode ser vista como uma pequena rede totalmente ligada aplicada a cada posição (pixel) do feature map, projectando C canais de input em C' canais de output. Isto tem dois efeitos cruciais:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={S.highlight}>
              <strong>Redução dimensional ("bottleneck")</strong>
              <p style={{ fontSize: '0.88rem', margin: '0.4rem 0 0', color: 'var(--text-secondary)' }}>Antes de aplicar um 3×3 ou 5×5 caro, um 1×1 reduz o número de canais (ex.: de 256 para 64). O 3×3/5×5 caro opera depois sobre muito menos canais — o custo computacional cai drasticamente.</p>
            </div>
            <div style={{ ...S.highlight, borderColor: '#4a9eed', background: 'rgba(74,158,237,0.10)' }}>
              <strong style={{ color: '#4a9eed' }}>Não-linearidade extra</strong>
              <p style={{ fontSize: '0.88rem', margin: '0.4rem 0 0', color: 'var(--text-secondary)' }}>Cada 1×1 vem seguido de ReLU. A rede ganha capacidade representacional adicional praticamente "de graça" em termos de custo computacional.</p>
            </div>
          </div>

          <h3 style={S.h3}>Exemplo numérico do ganho de eficiência</h3>
          <p style={S.p}>Considera um input de 28×28×192 e queremos aplicar 32 filtros 5×5. Sem bottleneck, o custo (multiplicações) é aproximadamente:</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Abordagem</th><th style={S.th}>Operações (aprox.)</th><th style={S.th}>Nota</th></tr></thead>
              <tbody>
                {[
                  ['Conv 5×5 directa (192 → 32)', '≈ 120 milhões', '28×28×32×5×5×192'],
                  ['Conv 1×1 (192 → 16) + Conv 5×5 (16 → 32)', '≈ 12.4 milhões', '≈ 10× menos cálculo, accuracy preservada'],
                ].map(([m, ops, note]) => (
                  <tr key={m}><td style={S.td}><strong>{m}</strong></td><td style={{ ...S.td, fontFamily: 'monospace', color: '#4a9eed', fontWeight: 700 }}>{ops}</td><td style={S.td}>{note}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Classificadores auxiliares</h3>
          <p style={S.p}>Em 2014, redes com 22 camadas eram consideradas extremamente profundas e o vanishing gradient era um problema sério (ResNet ainda não existia). O GoogLeNet adicionou dois "mini-classificadores" ligados a camadas intermédias durante o treino — cada um produz uma loss extra que é somada (com peso reduzido, ~0.3) à loss final. Isto injecta sinal de gradiente directamente em camadas intermédias. Estes classificadores auxiliares são removidos na inferência.</p>

          <h3 style={S.h3}>Da Inception v1 à v4</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Versão</th><th style={S.th}>Ano</th><th style={S.th}>Principais mudanças</th></tr></thead>
              <tbody>
                {[
                  ['Inception v1 (GoogLeNet)', '2014', 'Módulo Inception original com 1×1/3×3/5×5/maxpool em paralelo + classificadores auxiliares.'],
                  ['Inception v2 / v3', '2015-2016', 'Factorização de convoluções: 5×5 → dois 3×3; n×n → 1×n seguido de n×1 (factorização assimétrica). Batch Normalization generalizado. Label smoothing.'],
                  ['Inception v4', '2016', 'Arquitectura mais uniforme e mais profunda, módulos especializados para diferentes resoluções (Stem, Inception-A/B/C, Reduction).'],
                  ['Inception-ResNet', '2016', 'Combina módulos Inception com skip connections estilo ResNet — convergência mais rápida durante o treino.'],
                ].map(([v, y, d]) => (
                  <tr key={v}><td style={S.td}><strong>{v}</strong></td><td style={S.td}>{y}</td><td style={S.td}>{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.note}>Princípio central que sobrevive até hoje: fundir informação multi-escala (diferentes tamanhos de filtro/receptive field) e usar 1×1 como mecanismo de controlo de custo computacional — usado em MobileNet, EfficientNet e em muitos blocos modernos.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. ResNet em Detalhe — Skip Connections</h2>
          <p style={S.p}>O problema da degradação era paradoxal: redes de 56 camadas tinham erro de treino maior que redes de 20 camadas. Não era overfitting (seria erro de validação maior) — as redes mais profundas simplesmente eram mais difíceis de optimizar.</p>
          <p style={S.p}>A hipótese de He et al. (2015): em vez de aprender H(x) directamente, aprender o residual F(x) = H(x) − x. A soma com a identidade é feita através de uma skip connection. Se a transformação óptima for a identidade, F(x) → 0 é trivial de aprender. Na prática, as camadas focam-se em pequenas correcções à identidade.</p>

          <ResNetDiagram />

          <p style={S.p}>O efeito nos gradientes é crucial: o gradiente pode fluir directamente pela skip connection sem passar pelas camadas convolucionais, evitando o vanishing gradient. Com skip connections, treinar redes de 1000 camadas é possível — algo impensável com plain networks.</p>

          <h3 style={S.h3}>Bloco básico vs. bloco bottleneck</h3>
          <p style={S.p}>Para redes muito profundas (50, 101, 152 camadas), o ResNet usa um "bottleneck block" em vez do bloco básico de duas convoluções 3×3 — exactamente a mesma ideia de redução dimensional vista no Inception, mas aplicada a um bloco residual.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Tipo de bloco</th><th style={S.th}>Estrutura</th><th style={S.th}>Usado em</th><th style={S.th}>Custo relativo</th></tr></thead>
              <tbody>
                {[
                  ['Basic block', 'Conv3×3 → BN → ReLU → Conv3×3 → BN, soma com skip', 'ResNet-18, ResNet-34', 'baixo (redes pouco profundas)'],
                  ['Bottleneck block', 'Conv1×1 (reduz canais) → Conv3×3 → Conv1×1 (restaura canais), soma com skip', 'ResNet-50, ResNet-101, ResNet-152', 'permite redes muito mais profundas ao mesmo custo'],
                ].map(([t, s, u, c]) => (
                  <tr key={t}><td style={S.td}><strong>{t}</strong></td><td style={S.td}>{s}</td><td style={S.td}>{u}</td><td style={S.td}>{c}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Skip connections com mudança de dimensão</h3>
          <p style={S.p}>Quando o número de canais ou a resolução espacial muda entre o input x e o output F(x) (típico no início de cada "estágio" da rede), a soma directa x + F(x) não é possível. O ResNet usa uma "projection shortcut": uma convolução 1×1 com stride aplicada a x para ajustar dimensões antes da soma. Esta variante chama-se identity mapping quando as dimensões coincidem (caso mais comum dentro de um estágio) e projection shortcut quando há mudança de dimensão (entre estágios).</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. DenseNet — Conectividade Densa</h2>
          <p style={S.p}>O ResNet liga a camada l ao seu output através de uma soma: x_l = H_l(x_(l-1)) + x_(l-1). O DenseNet (Huang et al., 2017) leva esta ideia ao extremo: cada camada recebe como input a <strong>concatenação</strong> (não a soma) de todos os feature maps produzidos por todas as camadas anteriores dentro do mesmo "dense block".</p>

          <DenseNetDiagram />

          <h3 style={S.h3}>Concatenação vs. soma — porque importa</h3>
          <p style={S.p}>No ResNet, a soma x + F(x) mistura informação — o output tem o mesmo número de canais que o input, e a informação original "diluiu-se" através das somas sucessivas. No DenseNet, a concatenação preserva os feature maps originais intactos e acessíveis directamente a qualquer camada posterior. Isto significa que features de baixo nível (bordas, texturas) ficam disponíveis até às últimas camadas sem terem de "sobreviver" a múltiplas transformações.</p>

          <h3 style={S.h3}>Growth rate (k)</h3>
          <p style={S.p}>Se cada camada produzisse, digamos, 256 novos feature maps, a concatenação cresceria explosivamente. Por isso cada camada num dense block produz apenas k feature maps novos — o "growth rate", tipicamente k=12 ou k=32. Após L camadas, o número total de canais à entrada da última camada é: canais_input + k×(L−1). Pequenos valores de k são suficientes porque cada camada tem acesso a todo o "conhecimento colectivo" do bloco — não precisa de re-aprender as mesmas features.</p>

          <h3 style={S.h3}>Transition layers</h3>
          <p style={S.p}>Entre dense blocks, "transition layers" (Conv 1×1 + Average Pooling 2×2) reduzem o número de canais e a resolução espacial — necessário porque a concatenação dentro de um bloco faz o número de canais crescer continuamente, e a rede precisa de fazer downsampling espacial em algum momento.</p>

          <h3 style={S.h3}>Vantagens vs. desvantagens</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ ...S.highlight, borderColor: '#4a9eed', background: 'rgba(74,158,237,0.10)' }}>
              <strong style={{ color: '#4a9eed' }}>Vantagens</strong>
              <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.1rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                <li>Reuso máximo de features — menos redundância entre camadas</li>
                <li>Muito eficiente em parâmetros (DenseNet-121 tem ~8M vs 25M do ResNet-50, com accuracy comparável)</li>
                <li>Fluxo de gradiente directo para qualquer camada anterior — mitiga vanishing gradient ainda melhor que ResNet</li>
                <li>Efeito implícito de "deep supervision" — camadas finais recebem sinal directo de camadas iniciais</li>
              </ul>
            </div>
            <div style={S.highlight}>
              <strong>Desvantagens</strong>
              <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.1rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                <li>Concatenações requerem manter todos os feature maps anteriores em memória durante forward/backward — consumo de memória elevado (mitigável com "memory-efficient implementations")</li>
                <li>Mais lento em wall-clock time que ResNet apesar de menos FLOPs/parâmetros, devido ao padrão de acesso a memória das concatenações</li>
                <li>Menos amigável para hardware optimizado para operações densas/sequenciais simples</li>
              </ul>
            </div>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. SENet — Squeeze-and-Excitation (Channel Attention)</h2>
          <p style={S.p}>Todas as arquitecturas anteriores tratam todos os canais de um feature map de forma igual — cada filtro contribui com o seu output, e a rede combina-os linearmente nas camadas seguintes. O SENet (Hu et al., 2018, vencedor do ILSVRC 2017) introduz a ideia de que nem todos os canais são igualmente importantes para uma dada imagem, e que a rede deveria aprender a "prestar mais atenção" a uns canais do que a outros — dinamicamente, dependendo do input.</p>

          <SEDiagram />

          <h3 style={S.h3}>Squeeze: comprimir informação espacial</h3>
          <p style={S.p}>Dado um feature map de dimensões H×W×C, o passo "squeeze" aplica Global Average Pooling sobre cada canal, produzindo um vector de dimensão 1×1×C — um único número por canal que resume "quanto" desse canal está presente, em média, na imagem inteira.</p>

          <h3 style={S.h3}>Excitation: aprender a importância de cada canal</h3>
          <p style={S.p}>Este vector de tamanho C passa por um pequeno MLP (gargalo): uma camada totalmente ligada que reduz de C para C/r (r é o "reduction ratio", tipicamente 16), uma ReLU, depois outra camada totalmente ligada que volta a C, seguida de uma Sigmoid. O resultado é um vector de C valores entre 0 e 1 — um peso (gate) por canal.</p>

          <h3 style={S.h3}>Scale: recalibração dos feature maps</h3>
          <p style={S.p}>Cada canal do feature map original é multiplicado (element-wise) pelo seu peso correspondente. Canais que a rede considera "úteis" para esta imagem específica são amplificados (peso perto de 1); canais menos relevantes são atenuados (peso perto de 0). O resultado é um feature map "recalibrado" que segue para a camada seguinte.</p>

          <h3 style={S.h3}>SE block como módulo plugável</h3>
          <p style={S.p}>A grande força do SE block é ser um módulo genérico, leve, que se pode inserir em qualquer arquitectura existente (ResNet → SE-ResNet, Inception → SE-Inception, etc.) sem mudar a estrutura geral. O custo computacional adicional é mínimo (tipicamente menos de 1% de FLOPs extra), mas o ganho de accuracy é consistente — SE-ResNet-50 supera ResNet-50 com quase o mesmo custo, e SENet-154 (ResNeXt + SE blocks) venceu o ILSVRC 2017.</p>

          <div style={S.note}>Channel attention foi o primeiro passo de uma tendência maior: dar aos modelos a capacidade de decidir dinamicamente "onde olhar" — espacialmente (CBAM, depois), entre canais (SE), e eventualmente entre todas as posições de uma imagem simultaneamente (self-attention nos Vision Transformers).</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>6. Lições de Design — o que persiste até hoje</h2>
          <p style={S.p}>Cada geração de arquitecturas introduziu pelo menos um princípio de design que continua presente — em forma adaptada — nas redes modernas, incluindo nos Vision Transformers e em arquitecturas híbridas CNN-Transformer.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Arquitectura</th><th style={S.th}>Princípio introduzido</th><th style={S.th}>Onde se vê hoje</th></tr></thead>
              <tbody>
                {[
                  ['LeNet', 'Weight sharing via convoluções — o mesmo filtro desliza por toda a imagem, explorando invariância translacional.', 'Base de toda a CNN; também inspira ideias de "patch embeddings" partilhados nos ViTs.'],
                  ['AlexNet', 'ReLU em vez de sigmoid/tanh; dropout para regularização; data augmentation; treino em GPU.', 'Activações tipo ReLU/GELU, dropout/droppath, augmentation agressiva — standard em qualquer rede moderna.'],
                  ['VGGNet', 'Filtros pequenos (3×3) empilhados; profundidade > largura para o mesmo receptive field; arquitectura modular e repetitiva.', 'Blocos repetidos com config simples (3×3) em quase todos os backbones, incl. ConvNeXt.'],
                  ['GoogLeNet / Inception', 'Processamento multi-escala em paralelo; convoluções 1×1 como bottleneck para controlar custo computacional.', 'MobileNet, EfficientNet, blocos MBConv, módulos multi-branch em geral.'],
                  ['ResNet', 'Skip connections / conexões residuais — aprender F(x)=H(x)-x facilita optimização e permite redes muito profundas.', 'Omnipresente: Transformers (residual em cada bloco de atenção/MLP), U-Net, praticamente toda a rede profunda moderna.'],
                  ['DenseNet', 'Conectividade densa — maximizar reuso de features através de concatenação directa entre camadas não-adjacentes.', 'U-Net (skip connections encoder-decoder), feature pyramid networks, arquitecturas de segmentação.'],
                  ['SENet', 'Attention de canal — recalibração dinâmica e dependente do input da importância relativa de cada canal/feature.', 'CBAM, mecanismos de gating, e conceptualmente precursor da self-attention dos Transformers.'],
                ].map(([arch, principle, today]) => (
                  <tr key={arch}><td style={S.td}><strong>{arch}</strong></td><td style={S.td}>{principle}</td><td style={S.td}>{today}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.note}>Padrão geral: cada avanço resolve uma limitação concreta (capacidade, custo computacional, optimização/gradientes, ou eficiência de parâmetros) sem abandonar os princípios anteriores — antes combinando-os. Arquitecturas modernas (EfficientNet, ConvNeXt, ViT híbridos) são, em larga medida, recombinações cuidadosas destes mesmos ingredientes.</div>
        </div>

        </div>
        </div>
      </div>
  );
}
