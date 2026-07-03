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
  note: { background: 'rgba(14,116,144,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

// ── Diagrama: Dual Encoder + matriz contrastiva do CLIP ──
const CLIPDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Arquitectura Dual-Encoder do CLIP</p>
    <svg viewBox="0 0 560 248" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="clipArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>

      {/* Imagens de entrada */}
      {[0, 1, 2].map(i => (
        <rect key={`img${i}`} x={20} y={10 + i * 38} width="46" height="30" rx="4" fill="rgba(14,116,144,0.12)" stroke={color} strokeWidth="1" />
      ))}
      <text x="43" y="135" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Imagens</text>

      {/* Image Encoder */}
      <rect x="110" y="20" width="100" height="80" rx="10" fill="rgba(14,116,144,0.15)" stroke={color} strokeWidth="1.5" />
      <text x="160" y="55" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Image</text>
      <text x="160" y="70" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Encoder</text>
      <text x="160" y="86" textAnchor="middle" fill={color} fontSize="9">(ViT / ResNet)</text>
      {[0, 1, 2].map(i => (
        <line key={`a${i}`} x1="66" y1={25 + i * 38} x2="106" y2={60} stroke={color} strokeWidth="1" strokeDasharray="3,2" />
      ))}

      {/* Setas para o espaço partilhado */}
      <line x1="210" y1="60" x2="248" y2="60" stroke={color} strokeWidth="1.5" markerEnd="url(#clipArrow)" />

      {/* Embeddings de imagem */}
      {[0, 1, 2].map(i => (
        <g key={`ie${i}`}>
          <rect x="252" y={20 + i * 30} width="56" height="22" rx="4" fill={color} opacity="0.25" />
          <text x="280" y={35 + i * 30} textAnchor="middle" fill={color} fontSize="10" fontWeight="700">I{i + 1}</text>
        </g>
      ))}

      {/* Espaço de embedding partilhado (rótulo central) */}
      <text x="280" y="118" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">espaço de embedding</text>
      <text x="280" y="130" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">partilhado (dim d)</text>

      {/* Embeddings de texto */}
      {[0, 1, 2].map(i => (
        <g key={`te${i}`}>
          <rect x="252" y={150 + i * 30} width="56" height="22" rx="4" fill="#f59e0b" opacity="0.25" />
          <text x="280" y={165 + i * 30} textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">T{i + 1}</text>
        </g>
      ))}

      {/* Setas de Text Encoder */}
      <line x1="350" y1="170" x2="312" y2="170" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#clipArrow)" />

      {/* Text Encoder */}
      <rect x="350" y="130" width="100" height="80" rx="10" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="400" y="165" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">Text</text>
      <text x="400" y="180" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">Encoder</text>
      <text x="400" y="196" textAnchor="middle" fill="#f59e0b" fontSize="9">(Transformer)</text>

      {/* Textos de entrada */}
      {[0, 1, 2].map(i => (
        <rect key={`txt${i}`} x={494} y={140 + i * 28} width="46" height="22" rx="4" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="1" />
      ))}
      <text x="517" y="232" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">"a photo of a dog"...</text>
      {[0, 1, 2].map(i => (
        <line key={`b${i}`} x1="494" y1={151 + i * 28} x2="454" y2="170" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,2" />
      ))}
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      O encoder visual e o encoder de texto são redes independentes que produzem vectores da mesma dimensão d.
      O treino aproxima I<sub>k</sub> de T<sub>k</sub> (par correcto) e afasta de todos os outros pares no batch.
    </p>
  </div>
);

// ── Matriz de similaridade contrastiva ──
const SimilarityMatrix = () => {
  const labels = ['gato', 'cão', 'carro'];
  // matriz de similaridades cosseno simuladas (diagonal alta = pares correctos)
  const matrix = [
    [0.31, -0.05, 0.02],
    [-0.02, 0.27, 0.04],
    [0.01, 0.06, 0.29],
  ];
  const cell = (v, isDiag) => ({
    background: isDiag ? 'rgba(14,116,144,0.30)' : 'rgba(148,163,184,0.10)',
    border: isDiag ? `2px solid ${color}` : '1px solid var(--card-border)',
    color: isDiag ? color : 'var(--text-secondary)',
    fontWeight: isDiag ? 800 : 500,
    padding: '0.6rem',
    textAlign: 'center',
    borderRadius: 6,
    fontFamily: 'monospace',
    fontSize: '0.85rem',
  });
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
        Matriz de similaridade num batch de N = 3 pares (imagem × texto)
      </p>
      <div style={{ display: 'inline-block' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '70px repeat(3, 80px)', gap: '0.4rem', alignItems: 'center' }}>
          <div />
          {labels.map(l => (
            <div key={`top-${l}`} style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', textAlign: 'center' }}>T: "{l}"</div>
          ))}
          {matrix.map((row, i) => (
            <React.Fragment key={`row-${i}`}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', textAlign: 'right', paddingRight: '0.5rem' }}>I: {labels[i]}</div>
              {row.map((v, j) => (
                <div key={`c-${i}-${j}`} style={cell(v, i === j)}>{v.toFixed(2)}</div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: 520, margin: '1rem auto 0' }}>
        As entradas são produtos internos cosseno entre embeddings normalizados, multiplicados por um factor de
        temperatura aprendível. A diagonal (pares correctos imagem-texto) é maximizada; as restantes N²−N
        entradas são minimizadas via cross-entropy ao longo de cada linha e de cada coluna.
      </p>
    </div>
  );
};

// ── Diagrama: Zero-shot classification com CLIP ──
const ZeroShotDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Classificação Zero-Shot com CLIP</p>
    <svg viewBox="0 0 560 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="zsArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>

      {/* Imagem de entrada */}
      <rect x="20" y="70" width="80" height="60" rx="8" fill="rgba(14,116,144,0.12)" stroke={color} strokeWidth="1.5" />
      <text x="60" y="105" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Imagem</text>
      <line x1="100" y1="100" x2="146" y2="100" stroke={color} strokeWidth="1.5" markerEnd="url(#zsArrow)" />

      {/* Image embedding */}
      <rect x="150" y="80" width="70" height="40" rx="6" fill={color} opacity="0.25" />
      <text x="185" y="104" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">I_emb</text>

      {/* Comparações com prompts de texto */}
      {[
        ['"a photo of a dog"', 30, 0.92, '#f97316'],
        ['"a photo of a cat"', 90, 0.41, 'var(--text-secondary)'],
        ['"a photo of a car"', 150, 0.12, 'var(--text-secondary)'],
      ].map(([label, y, sim, c]) => (
        <g key={label}>
          <rect x="320" y={y} width="150" height="34" rx="6" fill={c === '#f97316' ? 'rgba(249,115,22,0.10)' : 'rgba(148,163,184,0.08)'} stroke={c} strokeWidth="1.2" />
          <text x="395" y={y + 21} textAnchor="middle" fill={c} fontSize="10" fontWeight={c === '#f97316' ? 700 : 500}>{label}</text>
          <line x1="220" y1="100" x2="316" y2={y + 17} stroke={c} strokeWidth={c === '#f97316' ? 2 : 1} strokeDasharray={c === '#f97316' ? 'none' : '3,2'} markerEnd="url(#zsArrow)" />
          <text x="500" y={y + 21} textAnchor="middle" fill={c} fontSize="11" fontWeight="700">{sim.toFixed(2)}</text>
        </g>
      ))}
      <text x="500" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">cos sim</text>
      <text x="395" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">prompts candidatos (Text Encoder)</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      A imagem é codificada uma única vez. Para cada classe candidata constrói-se um prompt de texto
      (template "a photo of a {'{classe}'}"), codifica-se, e compara-se por similaridade cosseno. A classe com
      maior similaridade vence — sem qualquer fine-tuning para a tarefa específica.
    </p>
  </div>
);

// ── Diagrama: pipeline texto → imagem (DALL-E / diffusion) ──
const TextToImageDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Pipeline Conceptual de Geração Texto → Imagem</p>
    <svg viewBox="0 0 600 170" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="t2iArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>

      <rect x="10" y="60" width="110" height="50" rx="8" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="65" y="80" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">Prompt de</text>
      <text x="65" y="96" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">texto</text>
      <line x1="120" y1="85" x2="156" y2="85" stroke={color} strokeWidth="1.5" markerEnd="url(#t2iArrow)" />

      <rect x="160" y="60" width="110" height="50" rx="8" fill="rgba(14,116,144,0.12)" stroke={color} strokeWidth="1.5" />
      <text x="215" y="80" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Text Encoder</text>
      <text x="215" y="96" textAnchor="middle" fill={color} fontSize="9">(embedding condicional)</text>
      <line x1="270" y1="85" x2="306" y2="85" stroke={color} strokeWidth="1.5" markerEnd="url(#t2iArrow)" />

      <rect x="310" y="50" width="130" height="70" rx="8" fill="rgba(167,139,250,0.12)" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="375" y="75" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="700">Modelo gerador</text>
      <text x="375" y="92" textAnchor="middle" fill="#fbbf24" fontSize="9">diffusion / autoregressive</text>
      <text x="375" y="107" textAnchor="middle" fill="#fbbf24" fontSize="9">condicionado por cross-attn</text>
      <line x1="440" y1="85" x2="476" y2="85" stroke={color} strokeWidth="1.5" markerEnd="url(#t2iArrow)" />

      <rect x="480" y="55" width="100" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="530" y="80" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Imagem</text>
      <text x="530" y="96" textAnchor="middle" fill="#f97316" fontSize="9">final (pixels)</text>

      {/* iterações de denoising */}
      <text x="375" y="148" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">T passos de "denoising" iterativo (no caso difusivo)</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      O texto é convertido num embedding condicional que guia o processo gerador através de mecanismos de
      cross-attention. Modelos de difusão partem de ruído puro e refinam-no iterativamente; modelos
      autoregressivos geram a imagem token-a-token (como um modelo de linguagem, mas sobre tokens visuais).
    </p>
  </div>
);

// ── Diagrama: VLM (LLaVA-style) ──
const VLMDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Arquitectura de um Vision-Language Model (estilo LLaVA)</p>
    <svg viewBox="0 0 600 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="vlmArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>

      <rect x="10" y="20" width="100" height="50" rx="8" fill="rgba(14,116,144,0.12)" stroke={color} strokeWidth="1.5" />
      <text x="60" y="40" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Imagem</text>
      <text x="60" y="56" textAnchor="middle" fill={color} fontSize="9">de entrada</text>
      <line x1="110" y1="45" x2="146" y2="45" stroke={color} strokeWidth="1.5" markerEnd="url(#vlmArrow)" />

      <rect x="150" y="15" width="120" height="60" rx="8" fill="rgba(14,116,144,0.12)" stroke={color} strokeWidth="1.5" />
      <text x="210" y="40" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Visual Encoder</text>
      <text x="210" y="56" textAnchor="middle" fill={color} fontSize="9">(ViT pré-treinado, ex. CLIP)</text>
      <line x1="270" y1="45" x2="306" y2="45" stroke={color} strokeWidth="1.5" markerEnd="url(#vlmArrow)" />

      <rect x="310" y="15" width="110" height="60" rx="8" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="365" y="40" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">Projector</text>
      <text x="365" y="56" textAnchor="middle" fill="#f59e0b" fontSize="9">MLP → espaço do LLM</text>
      <line x1="365" y1="75" x2="365" y2="111" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#vlmArrow)" />

      {/* Visual tokens */}
      {[0, 1, 2, 3].map(i => (
        <rect key={`vt${i}`} x={290 + i * 30} y="116" width="24" height="22" rx="4" fill="#f59e0b" opacity="0.3" />
      ))}
      <text x="365" y="155" textAnchor="middle" fill="#f59e0b" fontSize="9">visual tokens</text>

      {/* Text tokens */}
      <rect x="20" y="116" width="180" height="22" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="110" y="131" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="600">"What is in this image?" (text tokens)</text>
      <text x="110" y="155" textAnchor="middle" fill="#f97316" fontSize="9">prompt do utilizador</text>

      {/* Concatenação para o LLM */}
      <line x1="110" y1="138" x2="200" y2="172" stroke="#f97316" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#vlmArrow)" />
      <line x1="365" y1="138" x2="280" y2="172" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#vlmArrow)" />

      <rect x="170" y="170" width="260" height="26" rx="6" fill="rgba(167,139,250,0.15)" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="300" y="187" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="700">LLM (ex. LLaMA, Mistral) — sequência mista</text>
      <line x1="430" y1="183" x2="466" y2="183" stroke="#fbbf24" strokeWidth="1.5" markerEnd="url(#vlmArrow)" />

      <rect x="470" y="168" width="120" height="30" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="530" y="187" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Resposta gerada</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      Os "visual tokens" (saída do projector) são tratados pelo LLM exactamente como tokens de texto —
      ocupam posições na sequência de entrada e participam na self-attention. O LLM nunca "vê" pixels
      directamente; vê apenas vectores na mesma dimensão dos seus embeddings de texto.
    </p>
  </div>
);

// ── Diagrama: estratégias de fusão ──
const FusionDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Estratégias de Fusão Multimodal</p>
    <svg viewBox="0 0 600 220" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="fuArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* Early Fusion */}
      <text x="100" y="18" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Early Fusion</text>
      <rect x="40" y="28" width="50" height="24" rx="4" fill="rgba(14,116,144,0.15)" stroke={color} strokeWidth="1" />
      <text x="65" y="44" textAnchor="middle" fill={color} fontSize="9">Imagem</text>
      <rect x="110" y="28" width="50" height="24" rx="4" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth="1" />
      <text x="135" y="44" textAnchor="middle" fill="#f59e0b" fontSize="9">Texto</text>
      <line x1="65" y1="52" x2="100" y2="78" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#fuArrow)" />
      <line x1="135" y1="52" x2="100" y2="78" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#fuArrow)" />
      <rect x="50" y="82" width="100" height="36" rx="6" fill="rgba(167,139,250,0.12)" stroke="#fbbf24" strokeWidth="1.2" />
      <text x="100" y="98" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="700">Concatenação</text>
      <text x="100" y="111" textAnchor="middle" fill="#fbbf24" fontSize="9">de features cruas</text>
      <line x1="100" y1="118" x2="100" y2="138" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#fuArrow)" />
      <rect x="50" y="142" width="100" height="30" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="100" y="161" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Modelo único</text>
      <text x="100" y="195" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">Interações ricas, mas</text>
      <text x="100" y="207" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">sensível a escala/ruído</text>

      {/* Late Fusion */}
      <text x="300" y="18" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Late Fusion</text>
      <rect x="240" y="28" width="50" height="24" rx="4" fill="rgba(14,116,144,0.15)" stroke={color} strokeWidth="1" />
      <text x="265" y="44" textAnchor="middle" fill={color} fontSize="9">Imagem</text>
      <rect x="310" y="28" width="50" height="24" rx="4" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth="1" />
      <text x="335" y="44" textAnchor="middle" fill="#f59e0b" fontSize="9">Texto</text>
      <line x1="265" y1="52" x2="265" y2="78" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#fuArrow)" />
      <line x1="335" y1="52" x2="335" y2="78" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#fuArrow)" />
      <rect x="240" y="82" width="50" height="36" rx="6" fill="rgba(14,116,144,0.1)" stroke={color} strokeWidth="1.2" />
      <text x="265" y="103" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Modelo A</text>
      <rect x="310" y="82" width="50" height="36" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth="1.2" />
      <text x="335" y="103" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">Modelo B</text>
      <line x1="265" y1="118" x2="295" y2="142" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#fuArrow)" />
      <line x1="335" y1="118" x2="305" y2="142" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#fuArrow)" />
      <rect x="250" y="142" width="100" height="30" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="300" y="161" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Combina predições</text>
      <text x="300" y="195" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">Robusto, simples, mas</text>
      <text x="300" y="207" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">perde interações finas</text>

      {/* Cross-attention Fusion */}
      <text x="500" y="18" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Cross-Attention Fusion</text>
      <rect x="440" y="28" width="50" height="24" rx="4" fill="rgba(14,116,144,0.15)" stroke={color} strokeWidth="1" />
      <text x="465" y="44" textAnchor="middle" fill={color} fontSize="9">Imagem</text>
      <rect x="510" y="28" width="50" height="24" rx="4" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth="1" />
      <text x="535" y="44" textAnchor="middle" fill="#f59e0b" fontSize="9">Texto</text>
      <line x1="465" y1="52" x2="465" y2="78" stroke={color} strokeWidth="1" markerEnd="url(#fuArrow)" />
      <line x1="535" y1="52" x2="535" y2="78" stroke="#f59e0b" strokeWidth="1" markerEnd="url(#fuArrow)" />
      <rect x="440" y="82" width="50" height="36" rx="6" fill="rgba(14,116,144,0.1)" stroke={color} strokeWidth="1.2" />
      <text x="465" y="98" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Keys/</text>
      <text x="465" y="110" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Values</text>
      <rect x="510" y="82" width="50" height="36" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth="1.2" />
      <text x="535" y="103" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">Queries</text>
      <line x1="465" y1="118" x2="495" y2="142" stroke={color} strokeWidth="1" markerEnd="url(#fuArrow)" />
      <line x1="535" y1="118" x2="505" y2="142" stroke="#f59e0b" strokeWidth="1" markerEnd="url(#fuArrow)" />
      <rect x="450" y="142" width="100" height="30" rx="6" fill="rgba(167,139,250,0.12)" stroke="#fbbf24" strokeWidth="1.2" />
      <text x="500" y="161" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="700">Attention(Q,K,V)</text>
      <text x="500" y="195" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">Cada modalidade "consulta"</text>
      <text x="500" y="207" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">a outra dinamicamente</text>
    </svg>
  </div>
);

export default function DL8() {
  return (
    <div style={S.page}>
      <Link to="/dl" style={S.back}><ArrowLeft size={16} /> Voltar a Deep Learning</Link>

      <div style={S.tag}>Module 08</div>
      <h1 style={S.h1}>Multimodal Learning</h1>
      <p style={S.lead}>
        Os modelos mais marcantes da última década deixaram de operar numa única modalidade. Texto,
        imagem, áudio e vídeo são hoje processados em conjunto, num espaço de representação comum,
        abrindo caminho a sistemas capazes de "ver", "ler" e gerar conteúdo entre modalidades —
        descrever uma fotografia, gerar uma imagem a partir de uma frase, ou responder a perguntas
        sobre um gráfico. Neste módulo exploramos o CLIP, a geração texto→imagem, os Vision-Language
        Models e as estratégias de fusão que tornam tudo isto possível.
      </p>

      {/* ── 1. O que é Multimodal Learning ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. O que é Multimodal Learning e porquê combinar modalidades</h2>
        <p style={S.p}>
          <strong>Multimodal Learning</strong> refere-se ao treino de modelos que consomem ou
          produzem mais do que uma modalidade de dados — texto, imagem, áudio, vídeo, ou dados
          estruturados. O objectivo central não é apenas processar várias modalidades em paralelo,
          mas construir um <em>espaço de representação partilhado</em> onde conceitos
          semanticamente equivalentes ficam próximos, independentemente de como foram expressos.
        </p>
        <p style={S.p}>
          Por exemplo, a frase "um cão dourado a correr na praia ao pôr-do-sol" e uma fotografia
          correspondente devem mapear para vectores próximos nesse espaço conjunto. É esta
          propriedade — alinhamento semântico cross-modal — que sustenta pesquisa de imagens por
          texto, classificação zero-shot e geração condicional.
        </p>
        <div style={S.highlight}>
          <strong>Tarefas que exigem aprendizagem multimodal:</strong>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', lineHeight: 2 }}>
            <li><strong>Image Captioning</strong> — gerar uma descrição textual a partir de uma imagem</li>
            <li><strong>Visual Question Answering (VQA)</strong> — responder em texto a perguntas sobre o conteúdo de uma imagem</li>
            <li><strong>Text-to-Image Generation</strong> — sintetizar uma imagem a partir de uma descrição textual</li>
            <li><strong>Cross-modal Retrieval</strong> — encontrar a imagem mais relevante para uma query de texto (ou vice-versa)</li>
            <li><strong>Audio-Visual Speech Recognition</strong> — combinar áudio e movimento labial para melhorar transcrição</li>
          </ul>
        </div>
        <p style={S.p}>
          O desafio de alinhamento surge porque cada modalidade tem estrutura estatística muito
          diferente: o texto é discreto, sequencial e de baixa dimensão por token; a imagem é
          contínua, espacial e de alta dimensão; o áudio é contínuo e temporal a uma taxa de
          amostragem muito superior à da linguagem. Fundir estas representações sem perder
          informação específica de cada modalidade requer arquitecturas e estratégias de fusão
          desenhadas com cuidado — tema que retomamos na secção 6.
        </p>
        <div style={S.note}>
          <strong>Ideia-chave:</strong> em vez de treinar um modelo monolítico do zero para cada
          combinação de modalidades, a abordagem dominante hoje é treinar (ou reutilizar) encoders
          fortes por modalidade e depois aprender a <em>alinhar</em> ou <em>fundir</em> os seus
          espaços de representação — é exactamente isto que o CLIP faz para imagem e texto.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 2. CLIP ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. CLIP — Contrastive Language-Image Pretraining</h2>
        <p style={S.p}>
          O <strong>CLIP</strong> (Radford et al., OpenAI, 2021) é o modelo que popularizou o
          alinhamento imagem-texto em larga escala. Foi treinado em cerca de 400 milhões de pares
          (imagem, legenda) recolhidos da internet — sem qualquer anotação manual de classes.
        </p>

        <h3 style={S.h3}>Arquitectura dual-encoder</h3>
        <p style={S.p}>
          O CLIP é composto por dois encoders independentes: um <strong>encoder visual</strong>
          (uma ResNet ou um Vision Transformer) que transforma uma imagem num vector de dimensão d,
          e um <strong>encoder de texto</strong> (um Transformer) que transforma uma legenda no
          mesmo espaço de dimensão d. Ambos os vectores são normalizados (norma unitária) antes de
          serem comparados.
        </p>
        <CLIPDiagram />

        <h3 style={S.h3}>Aprendizagem contrastiva</h3>
        <p style={S.p}>
          Dado um batch de N pares (imagem, texto), calcula-se a matriz N×N de similaridades
          cosseno entre todos os embeddings de imagem e todos os embeddings de texto. Os N pares na
          diagonal são os pares <em>correctos</em> (positivos); as restantes N²−N entradas são
          pares <em>incorrectos</em> (negativos), formados aleatoriamente apenas por estarem no
          mesmo batch.
        </p>
        <div style={S.math}>
          <BlockMath math={`\\text{sim}(I_i, T_j) = \\frac{I_i \\cdot T_j}{\\lVert I_i \\rVert \\, \\lVert T_j \\rVert}`} />
        </div>
        <p style={S.p}>
          A função de perda — conhecida como <strong>InfoNCE</strong> ou NT-Xent — trata cada linha
          da matriz como um problema de classificação: dado I<sub>i</sub>, qual dos N textos é o
          correcto? Aplica-se cross-entropy ao longo das linhas (imagem→texto) e ao longo das
          colunas (texto→imagem), e a perda final é a média das duas:
        </p>
        <div style={S.math}>
          <BlockMath math={`\\mathcal{L} = \\frac{1}{2}\\left[ \\underbrace{-\\frac{1}{N}\\sum_{i=1}^{N}\\log \\frac{e^{\\,\\text{sim}(I_i,T_i)/\\tau}}{\\sum_{j=1}^{N} e^{\\,\\text{sim}(I_i,T_j)/\\tau}}}_{\\mathcal{L}_{img\\to txt}} \\;+\\; \\underbrace{-\\frac{1}{N}\\sum_{i=1}^{N}\\log \\frac{e^{\\,\\text{sim}(I_i,T_i)/\\tau}}{\\sum_{j=1}^{N} e^{\\,\\text{sim}(I_j,T_i)/\\tau}}}_{\\mathcal{L}_{txt\\to img}} \\right]`} />
        </div>
        <p style={S.p}>
          O parâmetro <InlineMath math="\tau" /> ("temperatura") é aprendido durante o treino e
          controla quão "afiada" é a distribuição de similaridades — valores baixos de
          <InlineMath math="\tau" /> tornam a matriz mais polarizada (os pares correctos dominam
          claramente).
        </p>

        <SimilarityMatrix />

        <div style={S.highlight}>
          <strong>Porque funciona com batches grandes:</strong> quanto maior o batch, mais
          negativos "difíceis" o modelo vê em simultâneo — uma imagem de um gato compete contra
          centenas de outras legendas no mesmo passo de treino. Os modelos CLIP originais foram
          treinados com batches de 32.768 pares, o que ajuda a aprender representações muito
          discriminativas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 3. Zero-shot transfer ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Zero-Shot Transfer com CLIP</h2>
        <p style={S.p}>
          Uma vez treinado, o CLIP pode ser usado para classificar imagens em <em>qualquer</em>
          conjunto de classes — sem fine-tuning — através de um truque simples: transformar o
          problema de classificação num problema de recuperação (retrieval) imagem-texto.
        </p>
        <p style={S.p}>
          Para classificar uma imagem em K classes, constrói-se K prompts de texto seguindo um
          template, por exemplo <em>"a photo of a {'{classe}'}"</em>. Cada prompt é codificado pelo
          encoder de texto, produzindo K embeddings de texto. A imagem é codificada uma única vez
          pelo encoder visual. Calcula-se a similaridade cosseno entre o embedding da imagem e cada
          um dos K embeddings de texto, e a classe com maior similaridade é a predição final.
        </p>

        <ZeroShotDiagram />

        <h3 style={S.h3}>Exemplo numérico passo-a-passo</h3>
        <p style={S.p}>
          Suponhamos que temos uma fotografia de um cão e três classes candidatas. Após codificar a
          imagem e os três prompts, e normalizar os vectores, obtemos as seguintes similaridades
          cosseno:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Prompt de texto</th>
              <th style={S.th}>Similaridade cosseno</th>
              <th style={S.th}>Após softmax (T=0.01)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>"a photo of a dog"</td>
              <td style={S.td}>0.31</td>
              <td style={{ ...S.td, fontWeight: 700, color }}>≈ 99.9%</td>
            </tr>
            <tr>
              <td style={S.td}>"a photo of a cat"</td>
              <td style={S.td}>0.18</td>
              <td style={S.td}>≈ 0.1%</td>
            </tr>
            <tr>
              <td style={S.td}>"a photo of a wolf"</td>
              <td style={S.td}>0.22</td>
              <td style={S.td}>≈ 0.0%</td>
            </tr>
          </tbody>
        </table>
        <p style={S.p}>
          Note-se como uma diferença pequena na similaridade cosseno (0.31 vs 0.22) se transforma
          numa diferença enorme na probabilidade depois de dividir pela temperatura — o
          <InlineMath math="\tau" /> aprendido durante o pré-treino é tipicamente muito pequeno
          (≈0.01), o que torna a distribuição final quase determinística.
        </p>
        <div style={S.highlight}>
          <strong>Resultado notável:</strong> em zero-shot no ImageNet, o CLIP atinge cerca de 76%
          de top-1 accuracy — comparável a uma ResNet-50 treinada de forma supervisionada nesse
          mesmo dataset, mas sem nunca ter visto um único exemplo rotulado de ImageNet durante o
          treino.
        </div>
        <div style={S.note}>
          <strong>Prompt engineering em CLIP:</strong> a escolha do template afecta a precisão.
          Usar múltiplos templates ("a photo of a {'{classe}'}", "a drawing of a {'{classe}'}",
          "a close-up photo of a {'{classe}'}") e fazer a média dos embeddings de texto resultantes
          ("prompt ensembling") melhora consistentemente os resultados.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 4. DALL-E e geração texto-imagem ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. DALL-E e Geração Texto → Imagem</h2>
        <p style={S.p}>
          Se o CLIP aprende a <em>alinhar</em> imagem e texto, os modelos generativos multimodais
          aprendem a <em>sintetizar</em> uma modalidade a partir da outra. A geração texto→imagem é
          o caso mais estudado e o que mais impacto público teve.
        </p>

        <TextToImageDiagram />

        <h3 style={S.h3}>Duas grandes famílias de abordagens</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: `1px solid ${color}30` }}>
            <div style={{ fontWeight: 700, color, marginBottom: '0.5rem' }}>Autoregressivo (DALL-E 1)</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              A imagem é primeiro discretizada num conjunto de "tokens visuais" (por um autoencoder
              discreto). Um Transformer gera esses tokens sequencialmente, condicionado pelos
              tokens de texto — exactamente como um modelo de linguagem gera palavras, mas sobre um
              vocabulário de "patches" visuais.
            </p>
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: '1px solid #fbbf2430' }}>
            <div style={{ fontWeight: 700, color: '#fbbf24', marginBottom: '0.5rem' }}>Difusivo (DALL-E 2, Stable Diffusion, Imagen)</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              Parte-se de ruído aleatório e aplica-se iterativamente um modelo que prevê e remove
              ruído, condicionado pelo embedding do texto via cross-attention. Após dezenas de
              passos, o ruído converge numa imagem coerente com o prompt.
            </p>
          </div>
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>Abordagem</th>
              <th style={S.th}>Organização</th>
              <th style={S.th}>Ano</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>DALL-E 1</td>
              <td style={S.td}>Transformer autoregressivo sobre tokens de imagem discretos</td>
              <td style={S.td}>OpenAI</td>
              <td style={S.td}>2021</td>
            </tr>
            <tr>
              <td style={S.td}>DALL-E 2</td>
              <td style={S.td}>Embedding tipo CLIP + decoder de difusão</td>
              <td style={S.td}>OpenAI</td>
              <td style={S.td}>2022</td>
            </tr>
            <tr>
              <td style={S.td}>Stable Diffusion</td>
              <td style={S.td}>Difusão num espaço latente comprimido (VAE), condicionada por cross-attention</td>
              <td style={S.td}>Stability AI</td>
              <td style={S.td}>2022</td>
            </tr>
            <tr>
              <td style={S.td}>Imagen</td>
              <td style={S.td}>Cascata de modelos de difusão condicionados por um text encoder de larga escala</td>
              <td style={S.td}>Google Brain</td>
              <td style={S.td}>2022</td>
            </tr>
          </tbody>
        </table>
        <p style={S.p}>
          O <strong>Stable Diffusion</strong> é particularmente influente por ser open-weight e
          eficiente: em vez de fazer difusão directamente sobre os pixels (computacionalmente muito
          caro), comprime primeiro a imagem para um espaço latente de dimensão muito menor através
          de um autoencoder. Todo o processo iterativo de denoising ocorre nesse espaço latente
          comprimido, e só no final a imagem é descomprimida para o espaço de pixels.
        </p>
        <div style={S.note}>
          <strong>Diffusion vs Autoregressive — trade-off prático:</strong> modelos difusivos
          produzem geralmente imagens de maior qualidade e fidelidade ao prompt, mas requerem
          muitos passos iterativos (mais lentos por amostra). Modelos autoregressivos são
          conceptualmente mais simples e reutilizam infraestrutura de LLMs, mas a geração
          token-a-token de centenas de tokens visuais também é lenta e o resultado tende a ser
          menos nítido.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 5. LLaVA e VLMs ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. LLaVA e Vision-Language Models (VLMs)</h2>
        <p style={S.p}>
          Os <strong>Vision-Language Models (VLMs)</strong> combinam um encoder visual com um Large
          Language Model, permitindo ao modelo "ver" imagens e raciocinar sobre elas em linguagem
          natural — descrever, responder a perguntas, extrair texto de gráficos, comparar imagens,
          etc.
        </p>

        <VLMDiagram />

        <h3 style={S.h3}>Os três componentes (estilo LLaVA)</h3>
        <div style={S.highlight}>
          <ol style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 2.2 }}>
            <li><strong>Visual Encoder (ex. ViT-L/14 do CLIP)</strong> — divide a imagem em patches e produz um embedding por patch; geralmente este encoder fica congelado durante grande parte do treino</li>
            <li><strong>Projector</strong> — uma rede pequena (linear ou MLP de 2 camadas) que mapeia os embeddings visuais para a mesma dimensão dos embeddings de texto do LLM</li>
            <li><strong>LLM (ex. LLaMA, Vicuna, Mistral)</strong> — recebe a sequência combinada de "visual tokens" + "text tokens" e gera a resposta token-a-token, autoregressivamente</li>
          </ol>
        </div>

        <h3 style={S.h3}>Treino em duas fases</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Fase</th>
              <th style={S.th}>O que é treinado</th>
              <th style={S.th}>Dados</th>
              <th style={S.th}>Objectivo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>1 — Alinhamento (pré-treino)</td>
              <td style={S.td}>Apenas o projector (encoder e LLM congelados)</td>
              <td style={S.td}>Pares imagem-legenda</td>
              <td style={S.td}>Mapear visual tokens para o espaço do LLM</td>
            </tr>
            <tr>
              <td style={S.td}>2 — Instruction tuning</td>
              <td style={S.td}>Projector + LLM (fine-tuning)</td>
              <td style={S.td}>Imagem + instrução + resposta desejada</td>
              <td style={S.td}>Capacidades conversacionais e de raciocínio</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Comparação de VLMs populares</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>Visual Encoder</th>
              <th style={S.th}>LLM Base</th>
              <th style={S.th}>Capacidade distintiva</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>LLaVA-1.5</td>
              <td style={S.td}>CLIP ViT-L/14</td>
              <td style={S.td}>LLaMA-2 13B</td>
              <td style={S.td}>Open-source, eficiente de treinar</td>
            </tr>
            <tr>
              <td style={S.td}>GPT-4V / GPT-4o</td>
              <td style={S.td}>Proprietário</td>
              <td style={S.td}>GPT-4 / GPT-4o</td>
              <td style={S.td}>Raciocínio visual avançado, multimodal nativo</td>
            </tr>
            <tr>
              <td style={S.td}>Gemini 1.5/2.x</td>
              <td style={S.td}>Proprietário</td>
              <td style={S.td}>Gemini</td>
              <td style={S.td}>Contexto muito longo, vídeo nativo</td>
            </tr>
            <tr>
              <td style={S.td}>Claude (Vision)</td>
              <td style={S.td}>Proprietário</td>
              <td style={S.td}>Claude 3+</td>
              <td style={S.td}>Análise de documentos, gráficos e diagramas</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          A diferença essencial face a modelos como o DALL-E é a direcção do fluxo: os VLMs
          consomem imagem e produzem texto (compreensão), enquanto modelos como o DALL-E consomem
          texto e produzem imagem (geração). Modelos "any-to-any" mais recentes procuram fazer
          ambos no mesmo modelo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 6. Espaços partilhados e fusão ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Espaços de Embedding Partilhados e Estratégias de Fusão</h2>
        <p style={S.p}>
          Independentemente da tarefa — alinhamento (CLIP), geração (DALL-E) ou compreensão (LLaVA)
          — todas as arquitecturas multimodais precisam de decidir <em>onde</em> e <em>como</em> as
          modalidades se encontram. Existem três estratégias principais de fusão.
        </p>

        <FusionDiagram />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Estratégia</th>
              <th style={S.th}>Onde ocorre a fusão</th>
              <th style={S.th}>Vantagens</th>
              <th style={S.th}>Desvantagens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Early Fusion</strong></td>
              <td style={S.td}>Logo na entrada — features cruas concatenadas antes de qualquer processamento profundo</td>
              <td style={S.td}>Permite interações de baixo nível muito ricas entre modalidades</td>
              <td style={S.td}>Sensível a diferenças de escala/ruído; modalidades raramente alinhadas naturalmente</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Late Fusion</strong></td>
              <td style={S.td}>No fim — cada modalidade processada por um modelo independente, combinam-se as predições/scores finais</td>
              <td style={S.td}>Modular, robusto, fácil de treinar e depurar cada ramo separadamente</td>
              <td style={S.td}>Perde-se a possibilidade de interações entre modalidades durante o processamento</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Cross-Attention Fusion</strong></td>
              <td style={S.td}>Em camadas intermédias — uma modalidade gera queries, a outra gera keys/values (ou vice-versa)</td>
              <td style={S.td}>Interações dinâmicas e contextuais; cada modalidade "consulta" a outra de forma aprendida</td>
              <td style={S.td}>Mais complexo e custoso computacionalmente; requer mais dados de treino</td>
            </tr>
          </tbody>
        </table>
        <p style={S.p}>
          O CLIP usa essencialmente uma forma de late fusion ao nível dos embeddings: cada
          modalidade é processada independentemente e a "fusão" é apenas o produto interno final no
          espaço partilhado. Os VLMs como o LLaVA usam fusão via concatenação de tokens — os visual
          tokens entram na mesma sequência que os text tokens e a self-attention do LLM funciona
          como uma forma de cross-attention implícita. Modelos de difusão condicionados por texto
          (Stable Diffusion, Imagen) usam cross-attention explícita entre o U-Net e o embedding de
          texto em múltiplas camadas.
        </p>
        <div style={S.highlight}>
          <strong>Regra prática:</strong> quanto mais cedo e mais vezes as modalidades interagem na
          rede, maior o potencial de capturar correlações finas — mas também maior o custo
          computacional e o risco de uma modalidade "dominar" a outra durante o treino. A escolha da
          estratégia de fusão é, em larga medida, um trade-off entre expressividade e estabilidade
          de treino.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 7. Comparação final ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. CLIP vs LLaVA vs Modelos tipo DALL-E — Visão de Conjunto</h2>
        <p style={S.p}>
          As três famílias de modelos discutidas neste módulo respondem a perguntas diferentes mas
          complementares: CLIP responde "quão semelhantes são esta imagem e este texto?", LLaVA
          responde "o que posso dizer sobre esta imagem em linguagem natural?", e DALL-E responde
          "que imagem corresponde a este texto?".
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>Modalidade de entrada</th>
              <th style={S.th}>Modalidade de saída</th>
              <th style={S.th}>Objectivo de treino</th>
              <th style={S.th}>Casos de uso típicos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>CLIP</strong></td>
              <td style={S.td}>Imagem + Texto</td>
              <td style={S.td}>Score de similaridade (embedding)</td>
              <td style={S.td}>Contrastive loss (InfoNCE) sobre pares imagem-texto</td>
              <td style={S.td}>Zero-shot classification, retrieval cross-modal, base para outros modelos</td>
            </tr>
            <tr>
              <td style={S.td}><strong>LLaVA / VLMs</strong></td>
              <td style={S.td}>Imagem + Texto (instrução)</td>
              <td style={S.td}>Texto</td>
              <td style={S.td}>Alinhamento do projector + instruction tuning autoregressivo</td>
              <td style={S.td}>VQA, descrição de imagens, leitura de documentos/gráficos, assistentes visuais</td>
            </tr>
            <tr>
              <td style={S.td}><strong>DALL-E / Stable Diffusion</strong></td>
              <td style={S.td}>Texto (prompt)</td>
              <td style={S.td}>Imagem</td>
              <td style={S.td}>Diffusion denoising / geração autoregressiva de tokens visuais</td>
              <td style={S.td}>Geração de arte, design, prototipagem visual, edição de imagens</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── Síntese ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Síntese do Módulo</h2>
        <p style={S.p}>
          O Multimodal Learning constrói pontes entre representações de natureza muito diferente —
          discretas e sequenciais (texto), contínuas e espaciais (imagem), contínuas e temporais
          (áudio). O CLIP demonstrou que um espaço de embedding partilhado pode ser aprendido apenas
          com aprendizagem contrastiva sobre pares (imagem, texto) recolhidos da web, sem anotação
          manual, e que esse espaço suporta classificação zero-shot competitiva com modelos
          supervisionados.
        </p>
        <p style={S.p}>
          Os modelos generativos (DALL-E, Stable Diffusion, Imagen) usam embeddings de texto para
          condicionar processos generativos — autoregressivos ou difusivos — capazes de sintetizar
          imagens fiéis ao prompt. Os VLMs (LLaVA, GPT-4V, Gemini, Claude) invertem a direção:
          tratam representações visuais como "tokens" adicionais que um LLM consegue ler e sobre os
          quais consegue raciocinar em linguagem natural.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Pontos-chave a reter:</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li>Multimodal learning constrói espaços de embedding onde conceitos equivalentes em modalidades diferentes ficam próximos</li>
            <li>CLIP usa um dual-encoder + contrastive loss (InfoNCE) para alinhar imagem e texto à escala da web</li>
            <li>Zero-shot transfer transforma classificação em retrieval: comparar a imagem com embeddings de prompts de texto candidatos</li>
            <li>Modelos texto→imagem dividem-se em autoregressivos (tokens visuais sequenciais) e difusivos (denoising iterativo condicionado)</li>
            <li>VLMs como o LLaVA injetam visual tokens (via projector) na sequência de entrada de um LLM</li>
            <li>A fusão multimodal pode ocorrer cedo (early), tarde (late) ou através de cross-attention dinâmica</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
