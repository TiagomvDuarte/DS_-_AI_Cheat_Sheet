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

const AttentionDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Self-Attention em ViT — Patches como Tokens</p>
    <svg viewBox="0 0 540 145" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr7v" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
      </defs>

      {/* Image divided into patches */}
      <text x="55" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Imagem → Patches</text>
      {Array.from({length:4}).map((_,r) => Array.from({length:4}).map((_,c) => {
        const colors = [
          ['#e74c3c','#e67e22','#2ecc71','#3498db'],
          ['#9b59b6','#f1c40f','#1abc9c','#e91e63'],
          ['#e74c3c','#27ae60','#2980b9','#8e44ad'],
          ['#c0392b','#f39c12','#16a085','#2c3e50'],
        ];
        return <rect key={`p-${r}-${c}`} x={c*25+5} y={r*25+20} width={23} height={23} rx="2" fill={colors[r][c]} stroke="var(--bg-primary)" strokeWidth="1.5"/>;
      }))}
      <text x="55" y="130" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">16 patches de 16×16px</text>

      {/* Arrow */}
      <line x1="112" y1="75" x2="138" y2="75" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr7v)"/>

      {/* Patch embeddings */}
      <text x="190" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Embeddings lineares</text>
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={148} y={22+i*20} width={80} height={16} rx="3" fill={`rgba(74,158,237,0.10)`} stroke="#4a9eed" strokeWidth="1"/>
      ))}
      <text x="188" y="127" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">+ [CLS] token + pos embedding</text>

      {/* Arrow */}
      <line x1="234" y1="75" x2="258" y2="75" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr7v)"/>

      {/* Transformer block */}
      <rect x="262" y="20" width="110" height="110" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2"/>
      <text x="317" y="38" textAnchor="middle" fill="#4a9eed" fontSize="8.5" fontWeight="700">Transformer Block</text>
      {[
        { y: 50, label: 'Layer Norm' },
        { y: 65, label: 'Multi-Head Attention' },
        { y: 80, label: 'Layer Norm' },
        { y: 95, label: 'MLP (Feed-Forward)' },
      ].map(({ y, label }) => (
        <g key={y}>
          <rect x="272" y={y-8} width="90" height="14" rx="3" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="0.8"/>
          <text x="317" y={y+2} textAnchor="middle" fill="var(--text-primary)" fontSize="6.5">{label}</text>
        </g>
      ))}
      <text x="317" y="122" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">× 12 blocos (ViT-Base)</text>

      {/* Arrow */}
      <line x1="374" y1="75" x2="398" y2="75" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr7v)"/>

      {/* Output */}
      <rect x="402" y="45" width="70" height="80" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="437" y="65" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">[CLS]</text>
      <text x="437" y="78" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">token de</text>
      <text x="437" y="88" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">classificação</text>
      <rect x="412" y="98" width="50" height="14" rx="3" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1"/>
      <text x="437" y="108" textAnchor="middle" fill="#4a9eed" fontSize="6.5">MLP head</text>
    </svg>
  </div>
);

const PatchEmbedDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Patch Embedding — de Imagem 224×224×3 a 196 Tokens</p>
    <svg viewBox="0 0 560 185" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrpe" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
      </defs>

      {/* Original image */}
      <rect x="10" y="20" width="100" height="100" rx="4" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      {Array.from({length:7}).map((_,i) => (
        <g key={`g-${i}`}>
          <line x1={10+i*14.3} y1="20" x2={10+i*14.3} y2="120" stroke="#4a9eed" strokeWidth="0.4" opacity="0.4"/>
          <line x1="10" y1={20+i*14.3} x2="110" y2={20+i*14.3} stroke="#4a9eed" strokeWidth="0.4" opacity="0.4"/>
        </g>
      ))}
      <text x="60" y="14" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">224 × 224 × 3</text>
      <text x="60" y="135" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">grelha 14×14 de patches 16×16</text>
      <rect x="10" y="20" width="14.3" height="14.3" fill="#4a9eed" opacity="0.5"/>

      {/* Arrow */}
      <line x1="118" y1="70" x2="148" y2="70" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrpe)"/>
      <text x="133" y="60" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">conv k=16,s=16</text>

      {/* Single patch flattened */}
      <rect x="155" y="40" width="46" height="46" rx="3" fill="#4a9eed" opacity="0.5" stroke="#4a9eed" strokeWidth="1"/>
      <text x="178" y="38" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">1 patch 16×16×3</text>
      <text x="178" y="100" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">= 768 valores</text>

      {/* Arrow to flatten vector */}
      <line x1="206" y1="63" x2="232" y2="63" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrpe)"/>
      <text x="219" y="53" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">flatten</text>

      {/* Flattened vector */}
      <rect x="238" y="50" width="14" height="80" rx="2" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1"/>
      <text x="245" y="142" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">vector 768-d</text>

      {/* Arrow */}
      <line x1="258" y1="90" x2="284" y2="90" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrpe)"/>
      <text x="271" y="80" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">W·x</text>

      {/* Linear projection box */}
      <rect x="290" y="50" width="70" height="80" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="325" y="75" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Projeção</text>
      <text x="325" y="88" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Linear</text>
      <text x="325" y="105" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">768 → D</text>
      <text x="325" y="118" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">(D=768 base)</text>

      {/* Arrow */}
      <line x1="364" y1="90" x2="390" y2="90" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrpe)"/>

      {/* Token embedding */}
      <rect x="396" y="75" width="60" height="20" rx="3" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2"/>
      <text x="426" y="89" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">token (D)</text>

      {/* Final sequence */}
      <text x="490" y="50" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Sequência final</text>
      {Array.from({length:6}).map((_,i) => (
        <rect key={`tok-${i}`} x={465} y={58+i*12} width={55} height={10} rx="2" fill={i===0 ? 'rgba(74,158,237,0.10)' : `rgba(74,158,237,0.10)`} stroke={i===0 ? '#4a9eed' : '#4a9eed'} strokeWidth="0.8"/>
      ))}
      <text x="492" y="65" textAnchor="middle" fill="#4a9eed" fontSize="6">[CLS]</text>
      <text x="492" y="77" textAnchor="middle" fill="var(--text-secondary)" fontSize="6">patch 1</text>
      <text x="492" y="89" textAnchor="middle" fill="var(--text-secondary)" fontSize="6">patch 2</text>
      <text x="492" y="101" textAnchor="middle" fill="var(--text-secondary)" fontSize="6">patch 3</text>
      <text x="492" y="113" textAnchor="middle" fill="var(--text-secondary)" fontSize="6">patch 4</text>
      <text x="492" y="125" textAnchor="middle" fill="var(--text-secondary)" fontSize="6">... (196)</text>
      <line x1="426" y1="95" x2="490" y2="95" stroke="#4a9eed" strokeWidth="1" strokeDasharray="2,2"/>

      <text x="280" y="160" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">A "convolução" com kernel=stride=16 não tem sobreposição → cada patch é processado uma única vez,</text>
      <text x="280" y="172" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">equivalente a achatar o patch e multiplicar por uma matriz de pesos partilhada W (768×D)</text>
    </svg>
  </div>
);

const SwinDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Swin Transformer — Windowed Attention vs Shifted Windows</p>
    <svg viewBox="0 0 540 200" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Layer L: regular windows */}
      <text x="120" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">Camada L — janelas regulares (W-MSA)</text>
      {Array.from({length:8}).map((_,r) => Array.from({length:8}).map((_,c) => (
        <rect key={`l-${r}-${c}`} x={20+c*15} y={22+r*15} width={14} height={14} fill="rgba(74,158,237,0.10)" stroke="var(--text-secondary)" strokeWidth="0.4"/>
      )))}
      {/* window borders for layer L: 2x2 grid of 4x4 windows */}
      {[0,1].map(wr => [0,1].map(wc => (
        <rect key={`wl-${wr}-${wc}`} x={20+wc*60} y={22+wr*60} width="60" height="60" fill="none" stroke="#4a9eed" strokeWidth="2"/>
      )))}
      <text x="120" y="160" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Self-attention calculada apenas DENTRO de</text>
      <text x="120" y="172" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">cada janela 4×4 — não entre janelas</text>

      {/* Arrow */}
      <text x="270" y="100" textAnchor="middle" fill="#4a9eed" fontSize="20" fontWeight="700">→</text>
      <text x="270" y="118" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">shift de</text>
      <text x="270" y="128" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">(⌊M/2⌋,⌊M/2⌋)</text>

      {/* Layer L+1: shifted windows */}
      <text x="420" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">Camada L+1 — janelas deslocadas (SW-MSA)</text>
      {Array.from({length:8}).map((_,r) => Array.from({length:8}).map((_,c) => (
        <rect key={`s-${r}-${c}`} x={320+c*15} y={22+r*15} width={14} height={14} fill="rgba(74,158,237,0.10)" stroke="var(--text-secondary)" strokeWidth="0.4"/>
      )))}
      {/* shifted window borders - offset by 2 cells (half of 4) */}
      <rect x="320" y="22" width="30" height="30" fill="none" stroke="#4a9eed" strokeWidth="2" strokeDasharray="3,2"/>
      <rect x="350" y="22" width="60" height="30" fill="none" stroke="#4a9eed" strokeWidth="2"/>
      <rect x="410" y="22" width="30" height="30" fill="none" stroke="#4a9eed" strokeWidth="2" strokeDasharray="3,2"/>
      <rect x="320" y="52" width="30" height="60" fill="none" stroke="#4a9eed" strokeWidth="2"/>
      <rect x="350" y="52" width="60" height="60" fill="none" stroke="#4a9eed" strokeWidth="2"/>
      <rect x="410" y="52" width="30" height="60" fill="none" stroke="#4a9eed" strokeWidth="2"/>
      <rect x="320" y="112" width="30" height="30" fill="none" stroke="#4a9eed" strokeWidth="2" strokeDasharray="3,2"/>
      <rect x="350" y="112" width="60" height="30" fill="none" stroke="#4a9eed" strokeWidth="2"/>
      <rect x="410" y="112" width="30" height="30" fill="none" stroke="#4a9eed" strokeWidth="2" strokeDasharray="3,2"/>
      <text x="380" y="160" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Novas janelas cruzam as fronteiras anteriores</text>
      <text x="380" y="172" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">→ tokens de janelas vizinhas trocam informação</text>
    </svg>
  </div>
);

const SwinHierarchyDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Hierarquia tipo CNN — resolução diminui, canais aumentam</p>
    <svg viewBox="0 0 560 150" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrsh" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
      </defs>
      {[
        { x: 20, size: 96, label: 'Stage 1', res: '56×56', dim: 'C', grid: 8 },
        { x: 150, size: 70, label: 'Stage 2', res: '28×28', dim: '2C', grid: 6 },
        { x: 260, size: 50, label: 'Stage 3', res: '14×14', dim: '4C', grid: 4 },
        { x: 350, size: 34, label: 'Stage 4', res: '7×7', dim: '8C', grid: 3 },
      ].map((st, i) => (
        <g key={st.label}>
          {Array.from({length: st.grid}).map((_,r) => Array.from({length: st.grid}).map((_,c) => (
            <rect key={`${i}-${r}-${c}`} x={st.x + c*(st.size/st.grid)} y={20 + r*(st.size/st.grid)} width={st.size/st.grid - 1} height={st.size/st.grid - 1} fill={`rgba(74,158,237,0.10)`} stroke="#4a9eed" strokeWidth="0.4"/>
          )))}
          <text x={st.x + st.size/2} y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">{st.label}</text>
          <text x={st.x + st.size/2} y={20 + st.size + 14} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">{st.res}, dim {st.dim}</text>
          {i < 3 && <line x1={st.x + st.size + 5} y1={20 + st.size/2} x2={st.x + st.size + 25} y2={20 + st.size/2} stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrsh)"/>}
        </g>
      ))}
      <text x="450" y="50" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700">Patch Merging</text>
      <text x="450" y="64" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">concatena 2×2 patches</text>
      <text x="450" y="76" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">vizinhos → projeção linear</text>
      <text x="450" y="88" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">resolução ÷2, canais ×2</text>
      <text x="450" y="105" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">(análogo a stride-2 pooling)</text>
      <text x="280" y="140" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Ao contrário do ViT (resolução constante em todas as camadas), o Swin produz mapas multi-escala — útil para detecção/segmentação como FPN</text>
    </svg>
  </div>
);

const PositionalEncodingDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Sem Posição vs Com Posição — Porque a Attention é Permutation-Invariant</p>
    <svg viewBox="0 0 540 160" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Without position */}
      <text x="120" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">Sem embedding posicional</text>
      <g>
        {[0,1,2,3].map(i => (
          <g key={`np-${i}`}>
            <rect x={20+i*60} y="30" width="50" height="36" rx="4" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1"/>
            <text x={45+i*60} y="52" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">P{i+1}</text>
          </g>
        ))}
      </g>
      <text x="120" y="92" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Self-attention vê o conjunto {'{P1,P2,P3,P4}'}</text>
      <text x="120" y="106" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">— qualquer permutação destes patches</text>
      <text x="120" y="120" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">produz exactamente o mesmo resultado</text>
      <text x="120" y="142" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">→ "imagem com céu em cima" = "céu em baixo"</text>

      {/* divider */}
      <line x1="270" y1="20" x2="270" y2="150" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,3"/>

      {/* With position */}
      <text x="410" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">Com embedding posicional</text>
      <g>
        {[0,1,2,3].map(i => (
          <g key={`wp-${i}`}>
            <rect x={310+i*60} y="30" width="50" height="36" rx="4" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1"/>
            <text x={335+i*60} y="46" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">P{i+1}</text>
            <text x={335+i*60} y="58" textAnchor="middle" fill="#4a9eed" fontSize="6">+ pos{i+1}</text>
          </g>
        ))}
      </g>
      <text x="410" y="92" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Cada token recebe um vector adicional</text>
      <text x="410" y="106" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">codificando a sua posição (linha, coluna)</text>
      <text x="410" y="120" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">na grelha original 14×14</text>
      <text x="410" y="142" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">→ ordem espacial preservada</text>
    </svg>
  </div>
);

const HybridDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Arquitectura Híbrida — Convolução em Profundidade Inicial, Attention no Topo</p>
    <svg viewBox="0 0 540 130" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrhy" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
      </defs>
      {/* Input */}
      <rect x="10" y="45" width="50" height="40" rx="4" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="35" y="68" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Imagem</text>

      <line x1="62" y1="65" x2="84" y2="65" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrhy)"/>

      {/* Conv stages */}
      <rect x="90" y="30" width="130" height="70" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="155" y="46" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Camadas Convolucionais</text>
      <text x="155" y="62" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">resolução alta</text>
      <text x="155" y="74" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">features locais</text>
      <text x="155" y="86" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">eficientes (custo linear)</text>

      <line x1="222" y1="65" x2="244" y2="65" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrhy)"/>

      {/* Downsample to tokens */}
      <text x="265" y="58" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">downsample</text>
      <text x="265" y="70" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">→ tokens</text>

      <line x1="288" y1="65" x2="310" y2="65" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrhy)"/>

      {/* Attention stages */}
      <rect x="316" y="30" width="130" height="70" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="381" y="46" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Blocos de Self-Attention</text>
      <text x="381" y="62" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">resolução baixa (poucos tokens)</text>
      <text x="381" y="74" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">contexto global</text>
      <text x="381" y="86" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">custo quadrático controlado</text>

      <line x1="448" y1="65" x2="470" y2="65" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrhy)"/>

      {/* Output */}
      <rect x="476" y="45" width="55" height="40" rx="4" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="503" y="68" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Output</text>

      <text x="270" y="118" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Ideia chave: attention é O(N²) no nº de tokens — aplicar só depois de reduzir N via convolução torna-a viável</text>
    </svg>
  </div>
);

export default function CV7() {
  const [sel, setSel] = useState(0);
  const archs = [
    {
      name: 'EfficientNet', year: '2019', color: '#4a9eed',
      what: 'Escala profundidade, largura e resolução simultaneamente (compound scaling) em vez de arbitrariamente uma só dimensão, com a base B0 encontrada por Neural Architecture Search.',
      key: 'A derivação completa do compound scaling, o bloco MBConv e os números de eficiência (MACs, latência em hardware móvel) são aprofundados no curso de Edge AI, módulo "Efficient Neural Architectures" — aqui interessa sobretudo a posição desta arquitectura na linha temporal.',
      params: 'B0: 5.3M → B7: 66M',
      top1: 'B0: 77.1% → B7: 84.4%',
      block: 'MBConv (Mobile Inverted Bottleneck) + Squeeze-and-Excitation',
    },
    {
      name: 'MobileNet V1-V3', year: '2017-2019', color: '#4a9eed',
      what: 'Desenhado para mobile/edge devices: introduz depthwise separable convolutions (um filtro 3×3 por canal + um filtro 1×1 para combinar canais) em vez de uma convolução standard.',
      key: 'A derivação do custo computacional das depthwise separable convolutions e a evolução V1→V3 (inverted residuals, SE blocks, hard-swish) são aprofundadas no curso de Edge AI, módulo "Efficient Neural Architectures".',
      params: 'V1: 4.2M (α=1.0)',
      top1: 'V3-Large: 75.2%',
      block: 'Depthwise Separable Conv + Linear Bottleneck + SE',
    },
    {
      name: 'Vision Transformer (ViT)', year: '2020', color: '#4a9eed',
      what: 'Aplica o Transformer (originalmente para NLP) directamente a imagens. A imagem é dividida em patches de 16×16 píxeis, cada patch é linearmente embebido num vector, e a sequência de embeddings é processada por blocos de self-attention. Sem nenhuma convolução.',
      key: 'Self-attention permite a cada patch "ver" todos os outros — receptive field global desde a primeira camada, ao contrário das CNNs que constroem contexto progressivamente. Para dados limitados, ViT fica atrás das CNNs; com pré-treino massivo (JFT-300M), supera tudo.',
      params: 'ViT-Base: 86M (patches 16×16)',
      top1: 'ViT-L/16 (JFT): 88.1%',
      block: 'Patch Embedding + Multi-Head Self-Attention + MLP',
    },
    {
      name: 'Swin Transformer', year: '2021', color: '#4a9eed',
      what: 'Reintroduz hierarquia e localidade no transformer: a self-attention é calculada apenas dentro de janelas locais (window self-attention), e as janelas alternam posição entre camadas (shifted windows) para permitir troca de informação entre janelas vizinhas. A resolução é reduzida progressivamente via patch merging, tal como numa CNN.',
      key: 'Custo computacional linear na resolução da imagem (em vez de quadrático como ViT), permitindo aplicar a inputs de alta resolução e usar como backbone genérico para detecção e segmentação. Tornou-se o backbone dominante em muitas tasks densas até ConvNeXt aparecer.',
      params: 'Swin-B: 88M',
      top1: 'Swin-L: 87.3%',
      block: 'Window MSA + Shifted Window MSA + Patch Merging',
    },
    {
      name: 'ConvNeXt', year: '2022', color: '#4a9eed',
      what: '"A ConvNet for the 2020s". Liu et al. tomaram uma ResNet-50 e aplicaram progressivamente cada inovação dos ViTs (patchify stem, depthwise conv, inverted bottleneck, GELU, LayerNorm, etc.) e obtiveram uma CNN que iguala ou supera Swin Transformer em todos os benchmarks.',
      key: 'Prova que as CNNs não estão ultrapassadas — as melhorias dos ViTs são transferíveis para CNNs. O design space moderno é partilhado. ConvNeXt usa kernel 7×7 depthwise (contexto largo) e inverted bottleneck.',
      params: 'ConvNeXt-B: 89M',
      top1: 'ConvNeXt-XL: 87.8%',
      block: '7×7 Depthwise Conv + Inverted Bottleneck + LayerNorm + GELU',
    },
  ];
  const a = archs[sel];

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cv" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>MÓDULO 7</div>
        <h1 style={S.h1}>Arquitecturas Modernas</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. Explorador de Arquitecturas</h2>
          <p style={S.p}>Cinco arquitecturas marcaram a última década de visão computacional, cada uma resolvendo um problema diferente: eficiência (EfficientNet, MobileNet), contexto global (ViT), eficiência de contexto global (Swin), e a reconciliação entre CNNs e transformers (ConvNeXt). Explora cada uma abaixo.</p>
          <div style={S.diagram}>
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              {archs.map((ar, i) => (
                <button key={i} onClick={() => setSel(i)} style={{ padding: '0.35rem 0.85rem', borderRadius: 20, cursor: 'pointer', fontWeight: 700, fontSize: '0.82rem', background: sel === i ? ar.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? ar.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{ar.name} <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>({ar.year})</span></button>
              ))}
            </div>
            <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${a.color}30` }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.82rem' }}>
                {[['Parâmetros', a.params], ['Top-1 ImageNet', a.top1], ['Bloco base', a.block]].map(([k, v]) => (
                  <div key={k} style={{ background: 'var(--bg-secondary)', borderRadius: 6, padding: '0.5rem 0.75rem' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>{k}</div>
                    <div style={{ fontWeight: 600, color: a.color, fontSize: '0.8rem' }}>{v}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.87rem', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '0.75rem' }}><strong style={{ color: a.color }}>Como funciona:</strong> {a.what}</p>
              <p style={{ fontSize: '0.87rem', color: 'var(--text-primary)', lineHeight: 1.7 }}><strong style={{ color: '#4a9eed' }}>Contribuição chave:</strong> {a.key}</p>
            </div>
          </div>

          <h3 style={S.h3}>Linha Temporal — Convergência de Ideias</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Ano</th><th style={S.th}>Modelo</th><th style={S.th}>Ideia Principal</th><th style={S.th}>Origem da Ideia</th></tr></thead>
              <tbody>
                {[
                  ['2017', 'MobileNetV1', 'Depthwise separable convolutions', 'CNN'],
                  ['2019', 'EfficientNet', 'Compound scaling + NAS', 'CNN'],
                  ['2020', 'ViT', 'Self-attention global sobre patches', 'NLP → CV'],
                  ['2020', 'DeiT', 'Knowledge distillation para treinar ViT em ImageNet', 'NLP → CV'],
                  ['2021', 'Swin Transformer', 'Window attention + shifted windows + hierarquia', 'CNN → Transformer'],
                  ['2022', 'ConvNeXt', 'Princípios de design ViT aplicados a CNN pura', 'Transformer → CNN'],
                  ['2022-23', 'CoAtNet / LeViT', 'Conv nas camadas iniciais + attention nas finais', 'Híbrido'],
                  ['2023-25', 'CLIP ViT / SigLIP', 'Vision encoders para modelos multimodais', 'CV → Multimodal'],
                ].map(([y, m, i, o]) => (
                  <tr key={m}><td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>{y}</td><td style={{ ...S.td, fontWeight: 600 }}>{m}</td><td style={S.td}>{i}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontStyle: 'italic' }}>{o}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Vision Transformer (ViT) em Detalhe</h2>
          <p style={S.p}>O ViT (Dosovitskiy et al., 2020) é conceptualmente simples: tratar a imagem como uma sequência de patches e aplicar o transformer padrão de NLP. Uma imagem 224×224 com patches de 16×16 produz 196 tokens (14×14 patches). Um token [CLS] especial é adicionado — o seu estado final é usado para classificação.</p>
          <p style={S.p}>A diferença fundamental face às CNNs é a self-attention: cada token pode atender a todos os outros tokens em cada camada — receptive field global desde a primeira camada. As CNNs constroem contexto progressivamente através da profundidade. Isto torna o ViT melhor em capturar dependências globais, mas pior em generalização com poucos dados (sem o inductive bias da localidade).</p>

          <AttentionDiagram />

          <h3 style={S.h3}>Variantes e Escalas do ViT</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Modelo</th><th style={S.th}>Camadas</th><th style={S.th}>Dim. (D)</th><th style={S.th}>Heads</th><th style={S.th}>Parâmetros</th></tr></thead>
              <tbody>
                {[
                  ['ViT-Tiny', '12', '192', '3', '5.7M'],
                  ['ViT-Small', '12', '384', '6', '22M'],
                  ['ViT-Base', '12', '768', '12', '86M'],
                  ['ViT-Large', '24', '1024', '16', '307M'],
                  ['ViT-Huge', '32', '1280', '16', '632M'],
                ].map(([m, l, d, h, p]) => (
                  <tr key={m}><td style={{ ...S.td, fontWeight: 600 }}>{m}</td><td style={S.td}>{l}</td><td style={S.td}>{d}</td><td style={S.td}>{h}</td><td style={{ ...S.td, color: '#4a9eed', fontWeight: 600 }}>{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>O ViT requer grandes quantidades de dados para superar as CNNs. Com JFT-300M (300 milhões de imagens do Google), ViT-L supera ResNet-152 em tudo. Com apenas ImageNet (1.2M), uma ResNet bem treinada ainda é competitiva. DeiT (2020) treina ViT eficientemente em ImageNet com knowledge distillation — usando um "distillation token" adicional que aprende a imitar as previsões de uma CNN professor.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Patch Embedding em Detalhe</h2>
          <p style={S.p}>O primeiro passo do ViT é converter uma imagem em tokens. Embora a literatura descreva isto como uma "convolução com kernel=stride=16", na prática é uma operação muito mais simples do que parece — vale a pena seguir o processo passo-a-passo.</p>

          <PatchEmbedDiagram />

          <h3 style={S.h3}>Passo a passo</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Passo</th><th style={S.th}>Operação</th><th style={S.th}>Dimensões</th></tr></thead>
              <tbody>
                {[
                  ['1. Input', 'Imagem RGB original', '224 × 224 × 3'],
                  ['2. Divisão em patches', 'Grelha não-sobreposta de patches 16×16', '14 × 14 = 196 patches'],
                  ['3. Achatamento (flatten)', 'Cada patch 16×16×3 é achatado num vector', '196 vectores de 16×16×3 = 768'],
                  ['4. Projeção linear', 'Multiplicação por matriz de pesos partilhada W (mesma para todos os patches)', '768 → D (D=768 no ViT-Base)'],
                  ['5. Adicionar [CLS]', 'Token aprendível adicionado ao início da sequência', '197 tokens × D'],
                  ['6. Somar pos. embedding', 'Vector posicional aprendível somado a cada token', '197 × D (inalterado)'],
                ].map(([s, op, dim]) => (
                  <tr key={s}><td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>{s}</td><td style={S.td}>{op}</td><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.85rem' }}>{dim}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={S.p}>Porque é descrita como "convolução"? Porque implementar isto numa framework de deep learning como uma <em>conv2d com kernel_size=16 e stride=16</em> é matematicamente idêntico mas computacionalmente mais eficiente e directo do que fazer o flatten manual + matriz densa — a convolução com stride igual ao kernel não tem sobreposição, pelo que cada output corresponde exactamente a um patch transformado pela mesma matriz de pesos (W é partilhada — os mesmos 768×D parâmetros aplicam-se a todos os 196 patches).</p>

          <div style={S.note}>O total de tokens cresce com o quadrado do inverso do tamanho do patch: patches de 32×32 → 49 tokens (mais barato, menos detalhe); patches de 8×8 → 784 tokens (mais caro — custo quadrático na attention — mas mais detalhe espacial). O ViT-B/16 usa patches de 16, o ViT-B/32 usa 32.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Posições e Embeddings Posicionais em Visão</h2>
          <p style={S.p}>A operação de self-attention é <strong>permutation-invariant</strong>: se trocarmos a ordem dos tokens de input, o conjunto de outputs é o mesmo (apenas reordenado). Para o transformer, a sequência de patches é, por defeito, um <em>conjunto</em> sem qualquer noção de "em cima", "em baixo", "esquerda" ou "direita". Sem informação adicional, uma imagem e a mesma imagem com os patches embaralhados produziriam exactamente a mesma representação interna.</p>

          <PositionalEncodingDiagram />

          <h3 style={S.h3}>Tipos de Embeddings Posicionais</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Tipo</th><th style={S.th}>Como funciona</th><th style={S.th}>Vantagens / Limitações</th></tr></thead>
              <tbody>
                {[
                  ['Absolute (aprendido)', 'Um vector aprendível por posição (1 por cada uma das 196+1 posições), somado ao embedding do token. Usado no ViT original.', 'Simples e eficaz; mas não generaliza directamente para resoluções diferentes (nº de patches muda)'],
                  ['Absolute (sinusoidal)', 'Funções seno/cosseno de frequências diferentes, como no Transformer original de NLP — não aprendido.', 'Não requer parâmetros extra; pode extrapolar para sequências mais longas, mas perde desempenho em CV vs aprendido'],
                  ['2D positional encoding', 'Em vez de um índice 1D (posição 1...196), codifica separadamente a linha e a coluna do patch na grelha 14×14 — preserva melhor a estrutura espacial bidimensional.', 'Mais natural para imagens; usado em variantes do ViT e em modelos de detecção'],
                  ['Relative position bias', 'Em vez de codificar a posição absoluta de cada token, adiciona um bias à attention score baseado na distância relativa entre os dois tokens (query e key). Usado no Swin Transformer.', 'Generaliza melhor entre resoluções/janelas; mais alinhado com a noção de "vizinhança" local'],
                ].map(([t, h, v]) => (
                  <tr key={t}><td style={{ ...S.td, fontWeight: 600 }}>{t}</td><td style={S.td}>{h}</td><td style={S.td}>{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Interpolação de posições: ao avaliar um ViT pré-treinado a 224×224 numa imagem maior (ex: 384×384), o número de patches muda (de 196 para 576), mas a tabela de embeddings posicionais aprendidos tem o tamanho original. A solução comum é fazer interpolação bicúbica da grelha 14×14 de embeddings posicionais para 24×24 — funciona surpreendentemente bem na prática.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Swin Transformer — Attention Local e Hierárquica</h2>
          <p style={S.p}>O ViT tem dois problemas práticos: (1) custo de attention quadrático no número de tokens — torna-se impraticável para imagens de alta resolução ou tasks densas como detecção/segmentação; (2) produz representações de resolução constante, ao contrário das CNNs que geram pirâmides multi-escala (úteis para FPN em detecção). O Swin Transformer (Liu et al., 2021) resolve ambos.</p>

          <h3 style={S.h3}>Window Self-Attention (W-MSA)</h3>
          <p style={S.p}>Em vez de cada token atender a todos os outros 196 tokens, a imagem é dividida em janelas não-sobrepostas (tipicamente 7×7 patches), e a self-attention é calculada <strong>apenas dentro de cada janela</strong>. Isto reduz o custo de O(N²) para O(N·M²), onde M é o tamanho fixo da janela — linear no número total de tokens N.</p>

          <h3 style={S.h3}>Shifted Windows (SW-MSA)</h3>
          <p style={S.p}>Janelas fixas têm um problema óbvio: tokens em janelas diferentes nunca interagem directamente. O Swin alterna entre duas configurações de janelas em camadas consecutivas — na camada L usa-se a partição regular, na camada L+1 desloca-se a grelha de janelas por (⌊M/2⌋, ⌊M/2⌋) patches. As novas janelas sobrepõem-se às fronteiras das janelas anteriores, permitindo que informação flua entre regiões que antes estavam isoladas.</p>

          <SwinDiagram />

          <h3 style={S.h3}>Hierarquia tipo CNN — Patch Merging</h3>
          <p style={S.p}>Tal como uma CNN reduz a resolução espacial e aumenta o número de canais à medida que a profundidade aumenta (via pooling/stride), o Swin usa <strong>patch merging</strong>: a cada nova stage, concatena-se cada grupo de 2×2 patches vizinhos (juntando os seus embeddings) e aplica-se uma projeção linear que reduz a dimensão para 2× o original — efectivamente metade da resolução, dobro dos canais.</p>

          <SwinHierarchyDiagram />

          <div style={S.note}>O Swin tornou-se o backbone dominante para detecção (Mask R-CNN) e segmentação (UperNet) entre 2021-2022, precisamente por produzir features multi-escala compatíveis com as cabeças de detecção desenhadas para CNNs — algo que o ViT "vanilla" não oferece nativamente.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>6. Arquitecturas Híbridas — Convolução + Attention</h2>
          <p style={S.p}>Se as convoluções são eficientes para extrair features locais (bordas, texturas) e a self-attention é poderosa para modelar relações globais (mas cara), porque não combinar as duas? Os modelos híbridos usam camadas convolucionais nas etapas iniciais — onde a resolução espacial é alta e o custo quadrático da attention seria proibitivo — e blocos de self-attention nas etapas finais, onde a resolução já foi reduzida e o número de tokens é gerível.</p>

          <HybridDiagram />

          <h3 style={S.h3}>Exemplos</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Modelo (ano)</th><th style={S.th}>Ideia distintiva</th></tr></thead>
              <tbody>
                {[
                  ['CoAtNet (2022)', 'MBConv (depthwise conv) nas primeiras stages + Transformer blocks nas últimas, unificados sob um framework comum de "relative attention" que generaliza convolução e attention'],
                  ['LeViT (2021)', 'Pipeline convolucional para reduzir resolução rapidamente (4 stages de conv simples) seguido de blocos de attention optimizados para inferência rápida em CPU/edge — foco em latência'],
                  ['MobileViT (2022)', 'Combina blocos MobileNet (eficientes, locais) com blocos de transformer leves intercalados — pensado para mobile, mantém o tamanho reduzido típico de MobileNets'],
                  ['BoTNet (2021)', 'Substitui apenas as convoluções 3×3 nos últimos blocos de uma ResNet por Multi-Head Self-Attention, mantendo o resto da arquitectura ResNet inalterado'],
                ].map(([m, d]) => (
                  <tr key={m}><td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>{m}</td><td style={S.td}>{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Trade-offs: Pura Conv vs Pura Attention vs Híbrido</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Critério</th><th style={S.th}>CNN pura</th><th style={S.th}>ViT puro</th><th style={S.th}>Híbrido</th></tr></thead>
              <tbody>
                {[
                  ['Custo computacional em alta resolução', 'Baixo (linear)', 'Muito alto (quadrático)', 'Médio — conv absorve a alta resolução'],
                  ['Contexto global', 'Fraco (cresce com profundidade)', 'Forte desde o início', 'Forte, mas só nas camadas finais'],
                  ['Dados necessários para treino', 'Poucos', 'Muitos (sem truques)', 'Moderados'],
                  ['Latência em edge/mobile', 'Boa', 'Fraca', 'Boa a moderada (depende do design)'],
                  ['Facilidade de implementação', 'Madura, muitas optimizações', 'Madura', 'Mais complexa — duas "linguagens" arquitecturais'],
                ].map(([c, cn, vt, hy]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)' }}>{c}</td><td style={S.td}>{cn}</td><td style={{ ...S.td, color: '#4a9eed' }}>{vt}</td><td style={{ ...S.td, color: '#4a9eed' }}>{hy}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>7. CNN vs ViT vs ConvNeXt — Comparação</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>CNNs (ResNet/EfficientNet)</th><th style={S.th}>ViT</th><th style={S.th}>ConvNeXt</th></tr></thead>
              <tbody>
                {[
                  ['Operação base', 'Convolução local', 'Self-attention global', 'Convolução (com inspirações ViT)'],
                  ['Receptive field', 'Cresce com profundidade', 'Global desde camada 1', 'Cresce com profundidade (kernel 7×7)'],
                  ['Inductive biases', 'Localidade + invariância à translação', 'Nenhum — aprende tudo dos dados', 'Localidade (mais fraca que ResNet)'],
                  ['Dados necessários', 'Eficiente com poucos dados', 'Precisa de pré-treino massivo', 'Eficiente com poucos dados'],
                  ['Escalabilidade', 'Boa mas limitada', 'Excelente — escala com dados e parâmetros', 'Boa'],
                  ['Eficiência compute', 'Muito boa', 'Quadrática no número de patches', 'Muito boa'],
                  ['Transfer learning', 'Excelente', 'Excelente (com pré-treino adequado)', 'Excelente'],
                  ['Mapas multi-escala', 'Nativo', 'Não (resolução constante)', 'Nativo'],
                  ['Normalização típica', 'BatchNorm', 'LayerNorm', 'LayerNorm'],
                  ['Activação típica', 'ReLU', 'GELU', 'GELU'],
                ].map(([a, c, v, n]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)' }}>{a}</td><td style={S.td}>{c}</td><td style={{ ...S.td, color: '#4a9eed' }}>{v}</td><td style={{ ...S.td, color: '#4a9eed' }}>{n}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Nenhuma destas três famílias é estritamente superior — a escolha depende do orçamento de dados, do hardware alvo (mobile vs servidor), e da task (classificação vs detecção/segmentação, que beneficia de mapas multi-escala).</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>8. Tendências Actuais (2023-2025)</h2>
          <p style={S.p}>O debate "CNN vs Transformer" tornou-se menos central nos últimos anos — três tendências dominam agora a investigação e a produção em visão computacional.</p>

          <h3 style={S.h3}>Vision Encoders para Modelos Multimodais</h3>
          <p style={S.p}>A maior aplicação de ViTs hoje não é classificação standalone, mas sim como o "olho" de modelos multimodais (LLMs que processam imagem + texto). O CLIP (Contrastive Language-Image Pre-training) treina um ViT e um text encoder em conjunto, contrastando pares (imagem, legenda) — o ViT resultante produz embeddings de imagem que partilham o espaço semântico com texto, permitindo zero-shot classification e servindo de input para modelos como GPT-4V, LLaVA, Gemini. SigLIP (2023) substitui a loss contrastiva softmax do CLIP por uma loss sigmoid pairwise, mais eficiente e estável a treinar em larga escala — usado em modelos como PaliGemma.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Modelo</th><th style={S.th}>Ano</th><th style={S.th}>Ideia</th><th style={S.th}>Uso típico</th></tr></thead>
              <tbody>
                {[
                  ['CLIP ViT', '2021', 'Contraste imagem-texto via embeddings partilhados', 'Zero-shot classification, vision encoder p/ LLMs'],
                  ['SigLIP', '2023', 'Loss sigmoid pairwise em vez de softmax contrastiva', 'Vision encoder mais eficiente (PaliGemma, etc.)'],
                  ['DINOv2', '2023', 'Self-supervised, sem labels, features universais', 'Features genéricas para múltiplas tasks downstream'],
                  ['EVA / EVA-CLIP', '2023', 'Escala massiva de pré-treino + distillation', 'Vision encoders de topo para multimodal'],
                ].map(([m, y, i, u]) => (
                  <tr key={m}><td style={{ ...S.td, fontWeight: 700 }}>{m}</td><td style={S.td}>{y}</td><td style={S.td}>{i}</td><td style={{ ...S.td, color: 'var(--text-secondary)' }}>{u}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Eficiência: Token Pruning e Token Merging</h3>
          <p style={S.p}>Um dos custos dominantes do ViT é a quantidade de tokens processados em cada camada (196 para 224×224). Muitos tokens correspondem a regiões redundantes (fundo uniforme, céu, etc.). Duas famílias de técnicas reduzem este custo dinamicamente, durante a inferência:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: '1px solid var(--card-border)' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.4rem' }}>Token Pruning</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>Tokens considerados pouco informativos (baixa attention para o [CLS], por exemplo) são <strong>descartados</strong> progressivamente em camadas mais profundas. Reduz o número de tokens processados — e portanto o custo — sem retreinar a arquitectura de raiz.</p>
            </div>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: '1px solid var(--card-border)' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.4rem' }}>Token Merging (ToMe)</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>Em vez de descartar, tokens semanticamente semelhantes são <strong>fundidos</strong> (ex: via similaridade de cosseno entre embeddings) — preserva mais informação do que pruning puro, geralmente com menor perda de accuracy para o mesmo speedup.</p>
            </div>
          </div>

          <h3 style={S.h3}>O Estado do Debate CNN vs Transformer em Produção</h3>
          <p style={S.p}>Em produção (2024-2025), a escolha raramente é ideológica — depende do contexto de deployment:</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Cenário</th><th style={S.th}>Escolha típica</th><th style={S.th}>Razão</th></tr></thead>
              <tbody>
                {[
                  ['Mobile / edge devices', 'CNN (MobileNet, EfficientNet) ou híbridos leves', 'Latência, consumo energético, suporte de hardware maduro'],
                  ['Vision encoder para LLM multimodal', 'ViT (CLIP/SigLIP)', 'Pré-treino contrastivo em larga escala, alinhamento com texto'],
                  ['Detecção/segmentação em servidor', 'Swin / ConvNeXt como backbone', 'Mapas multi-escala nativos, bom equilíbrio accuracy/custo'],
                  ['Classificação com poucos dados', 'CNN ou ConvNeXt', 'Inductive bias de localidade ajuda com datasets pequenos'],
                  ['Investigação / SOTA em benchmarks', 'ViT de grande escala + pré-treino massivo', 'Escalabilidade superior com dados/parâmetros suficientes'],
                ].map(([c, e, r]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 600 }}>{c}</td><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{e}</td><td style={{ ...S.td, color: 'var(--text-secondary)' }}>{r}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Resumo prático: a "guerra" CNN vs Transformer terminou num empate técnico — ambas as famílias convergiram em design (LayerNorm, GELU, kernels grandes, hierarquia). A escolha real é sobre <em>onde</em> o modelo vai correr e <em>quanto</em> dado de pré-treino está disponível, não sobre qual operação é "melhor" em abstracto.</div>
        </div>

        
      </div>

        </div>
      </div>
      );
}
