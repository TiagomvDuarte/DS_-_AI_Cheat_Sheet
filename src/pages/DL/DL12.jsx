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

// === Diagram: fully-connected Boltzmann Machine ===
const BoltzmannDiagram = () => {
  const units = [
    { x: 90, y: 60, label: 'v₁', type: 'v' },
    { x: 90, y: 150, label: 'v₂', type: 'v' },
    { x: 90, y: 240, label: 'v₃', type: 'v' },
    { x: 280, y: 60, label: 'h₁', type: 'h' },
    { x: 280, y: 150, label: 'h₂', type: 'h' },
    { x: 280, y: 240, label: 'h₃', type: 'h' },
  ];
  const lines = [];
  for (let i = 0; i < units.length; i++) {
    for (let j = i + 1; j < units.length; j++) {
      lines.push([units[i], units[j]]);
    }
  }
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Boltzmann Machine completa — todas as unidades ligadas a todas</p>
      <svg viewBox="0 0 380 300" style={{ maxWidth: '100%', height: 'auto' }}>
        {lines.map(([a, b], i) => (
          <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#ffffff" strokeWidth="1" opacity="0.2" />
        ))}
        {units.map((u, i) => (
          <g key={i}>
            <circle cx={u.x} cy={u.y} r="22" fill="var(--bg-secondary)" />
            <circle cx={u.x} cy={u.y} r="22" fill={u.type === 'v' ? 'rgba(249,115,22,0.10)' : 'rgba(245,158,11,0.28)'} stroke={u.type === 'v' ? color : '#f97316'} strokeWidth="1.5" />
            <text x={u.x} y={u.y + 5} textAnchor="middle" fill={u.type === 'v' ? color : '#f97316'} fontSize="13" fontWeight="700">{u.label}</text>
          </g>
        ))}
        <text x="90" y="285" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">unidades visíveis</text>
        <text x="280" y="285" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="600">unidades ocultas</text>
      </svg>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
        Ligações v–v, h–h e v–h coexistem (linhas cinzentas). Cada par de unidades influencia-se mutuamente —
        calcular a distribuição conjunta exige somar sobre todos os estados possíveis do sistema.
      </p>
    </div>
  );
};

// === Diagram: RBM bipartite ===
const RBMDiagram = () => {
  const visible = [{ x: 100, y: 50, label: 'v₁' }, { x: 100, y: 130, label: 'v₂' }, { x: 100, y: 210, label: 'v₃' }];
  const hidden = [{ x: 300, y: 90, label: 'h₁' }, { x: 300, y: 170, label: 'h₂' }];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>RBM — grafo bipartido (sem ligações intra-camada)</p>
      <svg viewBox="0 0 400 280" style={{ maxWidth: '100%', height: 'auto' }}>
        {visible.map((v, i) => hidden.map((h, j) => (
          <line key={`${i}-${j}`} x1={v.x} y1={v.y} x2={h.x} y2={h.y} stroke={color} strokeWidth="1.2" opacity="0.5" />
        )))}
        {visible.map((u, i) => (
          <g key={`v${i}`}>
            <circle cx={u.x} cy={u.y} r="22" fill="var(--bg-secondary)" />
            <circle cx={u.x} cy={u.y} r="22" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
            <text x={u.x} y={u.y + 5} textAnchor="middle" fill={color} fontSize="13" fontWeight="700">{u.label}</text>
          </g>
        ))}
        {hidden.map((u, i) => (
          <g key={`h${i}`}>
            <circle cx={u.x} cy={u.y} r="22" fill="var(--bg-secondary)" />
            <circle cx={u.x} cy={u.y} r="22" fill="rgba(245,158,11,0.28)" stroke="#f59e0b" strokeWidth="1.5" />
            <text x={u.x} y={u.y + 5} textAnchor="middle" fill="#f59e0b" fontSize="13" fontWeight="700">{u.label}</text>
          </g>
        ))}
        <text x="100" y="255" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">camada visível</text>
        <text x="300" y="255" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="600">camada oculta</text>
        <text x="200" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Sem v–v, sem h–h: só ligações inter-camada (W)</text>
      </svg>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
        Sem ligações dentro da mesma camada, todas as unidades ocultas ficam condicionalmente
        independentes entre si dado v — e vice-versa. Isto torna a inferência <InlineMath math="p(h|v)" /> e <InlineMath math="p(v|h)" /> exacta e instantânea (uma única passagem com sigmoide).
      </p>
    </div>
  );
};

// === Diagram: CD-1 walkthrough ===
const CDDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Contrastive Divergence (CD-1) — um ciclo completo</p>
    <svg viewBox="0 0 600 230" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrcd" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      {/* v0 */}
      <rect x="20" y="30" width="110" height="50" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="75" y="50" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">v⁽⁰⁾</text>
      <text x="75" y="66" textAnchor="middle" fill={color} fontSize="9">dado real</text>

      {/* h0 */}
      <rect x="20" y="150" width="110" height="50" rx="8" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="75" y="170" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">h⁽⁰⁾</text>
      <text x="75" y="186" textAnchor="middle" fill="#f59e0b" fontSize="9">amostra p(h|v⁽⁰⁾)</text>

      {/* v1 */}
      <rect x="245" y="30" width="110" height="50" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="300" y="50" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">v⁽¹⁾</text>
      <text x="300" y="66" textAnchor="middle" fill="#f97316" fontSize="9">reconstrução, p(v|h⁽⁰⁾)</text>

      {/* h1 */}
      <rect x="245" y="150" width="110" height="50" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="300" y="170" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">h⁽¹⁾</text>
      <text x="300" y="186" textAnchor="middle" fill="#f97316" fontSize="9">amostra p(h|v⁽¹⁾)</text>

      {/* update box */}
      <rect x="430" y="80" width="150" height="80" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="505" y="105" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="700">Update de W</text>
      <text x="505" y="123" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">⟨v⁽⁰⁾h⁽⁰⁾ᵀ⟩ - ⟨v⁽¹⁾h⁽¹⁾ᵀ⟩</text>
      <text x="505" y="140" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">fase positiva − fase negativa</text>

      {/* arrows */}
      <line x1="75" y1="80" x2="75" y2="145" stroke={color} strokeWidth="1.5" markerEnd="url(#arrcd)" />
      <line x1="130" y1="175" x2="240" y2="60" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrcd)" />
      <line x1="300" y1="80" x2="300" y2="145" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrcd)" />
      <line x1="355" y1="55" x2="425" y2="100" stroke={color} strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arrcd)" />
      <line x1="355" y1="175" x2="425" y2="135" stroke="#f97316" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arrcd)" />

      <text x="180" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Gibbs sampling: v⁽⁰⁾ → h⁽⁰⁾ → v⁽¹⁾ → h⁽¹⁾</text>
    </svg>
  </div>
);

// === Diagram: greedy layer-wise pretraining ===
const DBNPretrainDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Pré-treino greedy de uma DBN (3 RBMs empilhadas)</p>
    <svg viewBox="0 0 560 230" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrdbn" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
        </marker>
      </defs>
      {/* Layer x */}
      <rect x="20" y="170" width="100" height="40" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="70" y="195" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">x (dados)</text>

      {/* h1 */}
      <rect x="20" y="100" width="100" height="40" rx="6" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="70" y="125" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">h₁</text>

      {/* h2 */}
      <rect x="20" y="30" width="100" height="40" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="70" y="55" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">h₂</text>

      {/* arrows up x->h1, h1->h2 */}
      <line x1="70" y1="170" x2="70" y2="143" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrdbn)" />
      <line x1="70" y1="100" x2="70" y2="73" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrdbn)" />

      {/* RBM1 box */}
      <rect x="160" y="135" width="170" height="80" rx="8" fill="none" stroke={color} strokeWidth="1.2" strokeDasharray="4,3" />
      <text x="245" y="155" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Passo 1: RBM₁</text>
      <text x="245" y="172" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">treina em x</text>
      <text x="245" y="188" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">aprende W₁</text>
      <text x="245" y="204" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">h₁ = p(h|x;W₁)</text>

      {/* RBM2 box */}
      <rect x="160" y="20" width="170" height="80" rx="8" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="4,3" />
      <text x="245" y="40" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">Passo 2: RBM₂</text>
      <text x="245" y="57" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">trata h₁ como "dados"</text>
      <text x="245" y="73" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">aprende W₂</text>
      <text x="245" y="89" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">h₂ = p(h|h₁;W₂)</text>

      {/* arrow to fine-tune */}
      <line x1="330" y1="100" x2="400" y2="60" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrdbn)" />
      <line x1="330" y1="160" x2="400" y2="160" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrdbn)" />

      {/* fine-tune box */}
      <rect x="400" y="50" width="140" height="130" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="470" y="75" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Passo 3</text>
      <text x="470" y="93" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Fine-tuning</text>
      <text x="470" y="115" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">backprop end-to-end</text>
      <text x="470" y="131" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">com labels (opcional)</text>
      <text x="470" y="150" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">ajusta W₁ e W₂</text>
      <text x="470" y="166" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">ligados ao Módulo 02</text>
    </svg>
  </div>
);

// === Diagram: top-down generation in DBN ===
const DBNGenerationDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>DBN como modelo generativo — propagação top-down</p>
    <svg viewBox="0 0 380 260" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrgen" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
      </defs>
      {/* h2 - associative memory (RBM at top, undirected) */}
      <rect x="120" y="15" width="140" height="50" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="190" y="36" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">h₂ — RBM topo</text>
      <text x="190" y="53" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">amostra via Gibbs (↔)</text>

      {/* h1 */}
      <rect x="130" y="115" width="120" height="45" rx="8" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="190" y="143" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">h₁</text>

      {/* v */}
      <rect x="130" y="205" width="120" height="45" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="190" y="233" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">v — amostra gerada</text>

      {/* arrows top-down (directed, generative weights) */}
      <line x1="190" y1="65" x2="190" y2="110" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrgen)" />
      <text x="225" y="92" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">W₂ᵀ</text>

      <line x1="190" y1="160" x2="190" y2="200" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrgen)" />
      <text x="225" y="184" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">W₁ᵀ</text>

      <text x="190" y="10" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">1. Gibbs sampling no topo (h₂ ↔ h₁ associativo)</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      A camada de topo é uma RBM completa (ligações bidireccionais via Gibbs sampling). As camadas
      inferiores funcionam como uma rede de crença <em>directed</em>: dado um padrão amostrado em h₂,
      propaga-se determinística/estocasticamente para baixo via <InlineMath math="p(v|h)" /> até gerar v.
    </p>
  </div>
);

export default function DL12() {
  return (
    <div style={S.page}>
      <Link to="/dl" style={S.back}><ArrowLeft size={16} /> Voltar a Deep Learning</Link>

      <div style={S.tag}>Module 12</div>
      <h1 style={S.h1}>Deep Belief Networks &amp; Boltzmann Machines</h1>
      <p style={S.lead}>
        Antes do ReLU, do Batch Normalization e dos datasets massivamente rotulados, treinar redes
        com mais de duas ou três camadas era praticamente impossível — os gradientes desapareciam
        e a optimização ficava presa em mínimos pobres. Em 2006, Geoffrey Hinton e colegas mostraram
        que era possível "pré-treinar" uma rede profunda camada a camada usando um modelo probabilístico
        baseado em energia: a Restricted Boltzmann Machine. Este módulo percorre a teoria destes modelos
        — Boltzmann Machines, RBMs, Contrastive Divergence e Deep Belief Networks — não como receituário
        a aplicar hoje, mas como a génese conceptual de ideias que ainda ecoam em modelos modernos
        baseados em energia e em diffusion models.
      </p>

      {/* === SECTION 1: Historical context === */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Contexto histórico — a era pré-deep-learning-moderno</h2>
        <p style={S.p}>
          Em meados dos anos 2000, as redes neuronais tinham má reputação na comunidade científica.
          Empilhar mais do que 2-3 camadas com inicialização aleatória e sigmoides/tanh produzia
          gradientes que desapareciam exponencialmente à medida que se propagavam para trás —
          o problema do <strong>vanishing gradient</strong>, já discutido no Módulo 01. Sem ReLU,
          sem Batch Normalization, sem Adam, e sem os datasets massivos de hoje, treinar uma rede
          profunda do zero raramente convergia para algo útil.
        </p>
        <p style={S.p}>
          A solução proposta por Hinton et al. (2006) foi engenhosa: em vez de inicializar os pesos
          aleatoriamente, <strong>pré-treinar cada camada de forma não-supervisionada</strong>,
          uma de cada vez, usando um modelo gerador chamado Restricted Boltzmann Machine (RBM).
          Cada RBM aprende a "reconstruir" a sua entrada, capturando regularidades estatísticas dos
          dados. Empilhando várias RBMs treinadas desta forma obtém-se uma <strong>Deep Belief Network
          (DBN)</strong> — uma inicialização muito melhor do que pesos aleatórios, a partir da qual
          o fine-tuning com backpropagation finalmente conseguia convergir.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 4 }}><strong>Por que é que isto importa hoje?</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Embora o pré-treino greedy com RBMs tenha sido largamente abandonado depois de 2010-2012
            (quando ReLU, melhores inicializações e datasets como ImageNet tornaram-no desnecessário),
            os <strong>modelos baseados em energia</strong> (Energy-Based Models, EBMs) que as Boltzmann
            Machines introduziram são o antepassado conceptual directo de ideias modernas: os
            <strong> diffusion models</strong> (que aprendem a "desfazer" ruído seguindo gradientes de
            energia) e os EBMs contemporâneos partilham a mesma ideia central — definir um modelo
            através de uma função de energia escalar, em vez de uma probabilidade explícita.
          </p>
        </div>
      </section>

      <hr style={S.divider} />

      {/* === SECTION 2: Boltzmann Machine === */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Boltzmann Machine — o modelo completo</h2>
        <p style={S.p}>
          Uma Boltzmann Machine é uma rede de <strong>unidades binárias estocásticas</strong> (cada
          unidade vale 0 ou 1, e o seu valor é amostrado com uma certa probabilidade, não calculado
          deterministicamente) ligadas por <strong>pesos simétricos</strong>: o peso de i para j é
          igual ao peso de j para i. A rede divide-se conceptualmente em unidades <strong>visíveis</strong> v
          (onde os dados entram/saem) e unidades <strong>ocultas</strong> h (que capturam factores
          latentes). Na versão completa, <em>todas</em> as unidades — visíveis e ocultas — podem
          estar ligadas entre si, incluindo ligações dentro da mesma camada.
        </p>

        <BoltzmannDiagram />

        <p style={S.p}>
          O comportamento do sistema é definido por uma <strong>função de energia</strong>: cada
          configuração conjunta (v, h) tem um valor de energia escalar. Configurações de baixa
          energia são mais prováveis, configurações de alta energia são raras — exactamente como
          em sistemas físicos (daí o nome "Boltzmann", emprestado da física estatística).
        </p>

        <div style={S.math}>
          <BlockMath math={`E(\\mathbf{v}, \\mathbf{h}) = -\\mathbf{v}^\\top W \\mathbf{h} - \\mathbf{b}^\\top \\mathbf{v} - \\mathbf{c}^\\top \\mathbf{h} - \\mathbf{v}^\\top V \\mathbf{v} - \\mathbf{h}^\\top U \\mathbf{h}`} />
        </div>

        <p style={S.p}>
          Onde <InlineMath math="W" /> são os pesos visível–oculto, <InlineMath math="b" /> e
          <InlineMath math="c" /> são os bias das unidades visíveis e ocultas, e <InlineMath math="V" />,
          <InlineMath math="U" /> são os pesos das ligações <em>laterais</em> (dentro da mesma
          camada — visível-visível e oculta-oculta respectivamente). A probabilidade conjunta de
          uma configuração segue a <strong>distribuição de Boltzmann</strong>:
        </p>

        <div style={S.math}>
          <BlockMath math={`p(\\mathbf{v}, \\mathbf{h}) = \\frac{e^{-E(\\mathbf{v},\\mathbf{h})}}{Z}, \\qquad Z = \\sum_{\\mathbf{v}, \\mathbf{h}} e^{-E(\\mathbf{v},\\mathbf{h})}`} />
        </div>

        <p style={S.p}>
          O termo <InlineMath math="Z" />, chamado <strong>função de partição</strong>, normaliza a
          distribuição somando sobre todas as <InlineMath math="2^{|v|+|h|}" /> configurações
          binárias possíveis. Para uma rede com apenas 100 unidades isto já é
          <InlineMath math="2^{100}" /> termos — astronomicamente intractável. As ligações laterais
          (<InlineMath math="V" /> e <InlineMath math="U" />) tornam ainda pior a situação de
          inferência: para saber o estado de uma unidade oculta, é preciso conhecer o estado de
          <em> todas</em> as outras unidades ocultas, que por sua vez dependem de todas as visíveis,
          e assim por diante — um emaranhado circular de dependências.
        </p>

        <div style={S.note}>
          A "Boltzmann" do nome refere-se directamente à física estatística: a distribuição
          <InlineMath math="\\;p \\propto e^{-E/kT}\\;" /> descreve o equilíbrio térmico de um sistema
          físico à temperatura T. Nas Boltzmann Machines assume-se T = 1 e "energia" passa a ser uma
          quantidade puramente matemática que o modelo aprende a moldar.
        </div>
      </section>

      <hr style={S.divider} />

      {/* === SECTION 3: RBM === */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Restricted Boltzmann Machine (RBM) — a "restrição" que muda tudo</h2>
        <p style={S.p}>
          A ideia-chave da RBM é simples mas poderosa: <strong>eliminar todas as ligações dentro
          da mesma camada</strong>. Não há ligações v–v nem h–h — apenas ligações entre a camada
          visível e a camada oculta. O grafo resultante é <strong>bipartido</strong>: pode
          desenhar-se como dois grupos de nós, com arestas só entre grupos, nunca dentro do mesmo grupo.
        </p>

        <RBMDiagram />

        <p style={S.p}>
          Esta restrição elimina os termos <InlineMath math="V" /> e <InlineMath math="U" /> da
          função de energia, que fica muito mais simples:
        </p>

        <div style={S.math}>
          <BlockMath math={`E(\\mathbf{v}, \\mathbf{h}) = -\\mathbf{v}^\\top W \\mathbf{h} - \\mathbf{b}^\\top \\mathbf{v} - \\mathbf{c}^\\top \\mathbf{h} = -\\sum_{i,j} v_i W_{ij} h_j - \\sum_i b_i v_i - \\sum_j c_j h_j`} />
        </div>

        <h3 style={S.h3}>Por que é que isto torna a inferência tractável?</h3>
        <p style={S.p}>
          Sem ligações h–h, cada unidade oculta <InlineMath math="h_j" /> só "vê" as unidades
          visíveis através de <InlineMath math="W" /> — e não vê as outras unidades ocultas
          directamente. Isto significa que, <strong>dado v</strong>, todas as unidades ocultas
          tornam-se <strong>condicionalmente independentes</strong> entre si. Simetricamente,
          <strong> dado h</strong>, todas as unidades visíveis são condicionalmente independentes.
          A inferência reduz-se a uma única passagem com sigmoides:
        </p>

        <div style={S.math}>
          <BlockMath math={`p(h_j = 1 \\mid \\mathbf{v}) = \\sigma\\!\\left(c_j + \\sum_i v_i W_{ij}\\right), \\qquad p(v_i = 1 \\mid \\mathbf{h}) = \\sigma\\!\\left(b_i + \\sum_j h_j W_{ij}\\right)`} />
        </div>

        <p style={S.p}>
          onde <InlineMath math="\\sigma" /> é a função sigmoide. Compare com a Boltzmann Machine
          completa: lá, calcular <InlineMath math="p(h_j|\\,\\text{resto})" /> exigiria conhecer
          o estado de todas as outras unidades ocultas — um sistema de equações acopladas sem
          solução fechada. Na RBM, basta uma soma ponderada das visíveis seguida de sigmoide.
          Esta é a razão pela qual a RBM "venceu" a Boltzmann Machine completa como modelo prático.
        </p>

        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 4 }}><strong>O que uma RBM consegue fazer:</strong></p>
          <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-primary)', lineHeight: 1.9, marginBottom: 0 }}>
            <li>Aprender uma representação comprimida e distribuída dos dados (feature learning não-supervisionado)</li>
            <li>Reconstruir/"completar" dados parcialmente observados</li>
            <li>Servir de bloco de construção para Deep Belief Networks</li>
            <li>Modelar collaborative filtering — famosa aplicação no Netflix Prize (2007)</li>
          </ul>
        </div>
      </section>

      <hr style={S.divider} />

      {/* === SECTION 4: Contrastive Divergence === */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Treino de uma RBM — Contrastive Divergence (CD-k)</h2>
        <p style={S.p}>
          Treinar uma RBM significa ajustar <InlineMath math="W, b, c" /> de forma a maximizar a
          probabilidade que o modelo atribui aos dados de treino — maximizar
          <InlineMath math="\\;\\log p(\\mathbf{v})" />. O gradiente desse objectivo tem uma forma
          elegante mas problemática:
        </p>

        <div style={S.math}>
          <BlockMath math={`\\frac{\\partial \\log p(\\mathbf{v})}{\\partial W_{ij}} = \\underbrace{\\langle v_i h_j \\rangle_{\\text{data}}}_{\\text{fase positiva}} - \\underbrace{\\langle v_i h_j \\rangle_{\\text{model}}}_{\\text{fase negativa}}`} />
        </div>

        <p style={S.p}>
          A <strong>fase positiva</strong> <InlineMath math="\\langle v_i h_j\\rangle_{\\text{data}}" />
          é fácil: basta apresentar um exemplo real v e calcular <InlineMath math="p(h|v)" /> com a
          fórmula da secção anterior. A <strong>fase negativa</strong>
          <InlineMath math="\\;\\langle v_i h_j\\rangle_{\\text{model}}" /> é o problema: requer
          amostrar pares (v, h) da distribuição completa do modelo, o que exigiria correr Gibbs
          sampling até convergência (potencialmente milhares de passos).
        </p>

        <p style={S.p}>
          A solução de Hinton (2002), <strong>Contrastive Divergence</strong>, é uma aproximação
          pragmática: em vez de esperar pela convergência, corre-se apenas <InlineMath math="k" />
          passos de Gibbs sampling a partir do próprio dado real — tipicamente <InlineMath math="k=1" />
          (CD-1), que funciona surpreendentemente bem na prática.
        </p>

        <h3 style={S.h3}>Walkthrough numérico — CD-1 com 3 unidades visíveis e 2 ocultas</h3>
        <p style={S.p}>
          Considere uma RBM minúscula com 3 unidades visíveis (representando, por exemplo, "gosta de
          ficção científica", "gosta de comédia", "gosta de drama") e 2 unidades ocultas (factores
          latentes não rotulados). Um utilizador real fornece o vector
          <InlineMath math="\\;\\mathbf{v}^{(0)} = (1, 0, 1)" /> — gosta de ficção científica e drama,
          não gosta de comédia.
        </p>

        <CDDiagram />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Passo</th>
              <th style={S.th}>O que acontece</th>
              <th style={S.th}>Resultado de exemplo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1. Fase positiva', 'Calcular p(h|v⁽⁰⁾) com sigmoide e amostrar h⁽⁰⁾ binário', 'h⁽⁰⁾ = (1, 0)'],
              ['2. Reconstrução', 'Calcular p(v|h⁽⁰⁾) e amostrar v⁽¹⁾', 'v⁽¹⁾ = (1, 0, 0)  ← drama "perdido" na reconstrução'],
              ['3. Fase negativa', 'Calcular p(h|v⁽¹⁾) e amostrar h⁽¹⁾', 'h⁽¹⁾ = (1, 1)'],
              ['4. Update', 'Comparar produtos exteriores v⊗h da fase positiva vs negativa', 'ΔW = η · (v⁽⁰⁾h⁽⁰⁾ᵀ − v⁽¹⁾h⁽¹⁾ᵀ)'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.math}>
          <BlockMath math={`\\Delta W_{ij} = \\eta \\left( v_i^{(0)} h_j^{(0)} - v_i^{(1)} h_j^{(1)} \\right), \\quad \\Delta b_i = \\eta\\left(v_i^{(0)} - v_i^{(1)}\\right), \\quad \\Delta c_j = \\eta\\left(h_j^{(0)} - h_j^{(1)}\\right)`} />
        </div>

        <p style={S.p}>
          A intuição é a de um "jogo de tira-e-empurra": a fase positiva <strong>aumenta</strong> a
          probabilidade da combinação (v, h) observada com dados reais; a fase negativa
          <strong> diminui</strong> a probabilidade da combinação que o modelo "imaginou" ao
          reconstruir. Repetindo isto milhares de vezes, o modelo aprende a distribuir massa de
          probabilidade de forma a que reconstruções fiquem cada vez mais próximas dos dados
          originais — ou seja, aprende a "imaginar" dados plausíveis da mesma distribuição.
        </p>

        <div style={S.note}>
          CD-1 não optimiza exactamente <InlineMath math="\\log p(v)" /> — optimiza uma aproximação
          chamada "divergência contrastiva". Na prática funciona bem o suficiente para inicializar
          pesos. PCD (Persistent Contrastive Divergence) mantém uma cadeia de Gibbs persistente entre
          updates, dando amostras de fase negativa de melhor qualidade ao custo de mais memória.
        </div>
      </section>

      <hr style={S.divider} />

      {/* === SECTION 5: DBN stacking === */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Deep Belief Network — empilhar RBMs</h2>
        <p style={S.p}>
          Uma Deep Belief Network constrói-se empilhando várias RBMs e treinando-as
          <strong> uma de cada vez, de forma greedy</strong> (gulosa — cada camada é optimizada
          isoladamente, sem olhar para o objectivo global). O processo:
        </p>

        <DBNPretrainDiagram />

        <p style={S.p}>
          Hinton et al. (2006) demonstraram um resultado teórico notável: cada RBM adicionada ao topo
          da pilha melhora um <strong>limite inferior (lower bound)</strong> sobre a log-verosimilhança
          dos dados — desde que cada nova RBM seja treinada sobre as activações ocultas da anterior.
          Por outras palavras, empilhar RBMs nunca piora (em teoria) o modelo generativo global, e
          tipicamente melhora-o, capturando estruturas cada vez mais abstractas em camadas mais altas.
        </p>

        <p style={S.p}>
          Depois do pré-treino greedy, a rede pode opcionalmente passar por
          <strong> fine-tuning discriminativo</strong>: adiciona-se uma camada de saída (por exemplo
          softmax para classificação) e treina-se toda a pilha end-to-end com backpropagation —
          exactamente o algoritmo do Módulo 01, mas agora a partir de uma inicialização muito mais
          informativa do que pesos aleatórios.
        </p>

        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 4 }}><strong>Impacto histórico</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            O artigo de Hinton &amp; Salakhutdinov (2006), publicado na revista <em>Science</em>, é
            frequentemente apontado como o ponto de viragem que reacendeu o interesse em redes
            neuronais profundas após décadas de cepticismo ("AI winter"). Foi a primeira demonstração
            convincente de que redes com várias camadas escondidas podiam ser treinadas eficazmente —
            abrindo caminho conceptual para o ressurgimento que culminaria no AlexNet (2012).
          </p>
        </div>
      </section>

      <hr style={S.divider} />

      {/* === SECTION 6: Generation === */}
      <section style={S.section}>
        <h2 style={S.h2}>6. DBN como modelo generativo — geração top-down</h2>
        <p style={S.p}>
          Uma das propriedades mais interessantes de uma DBN é que, depois de treinada, pode ser
          usada para <strong>gerar</strong> novos exemplos sintéticos — não apenas para extrair
          features. O processo inverte a direcção do treino: em vez de propagar dados para cima
          (bottom-up) para obter representações, propaga-se uma amostra do topo para baixo
          (top-down) para produzir um vector visível novo.
        </p>

        <DBNGenerationDiagram />

        <p style={S.p}>
          O processo de geração tem duas fases distintas:
        </p>
        <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-primary)', lineHeight: 1.9, marginBottom: '1rem' }}>
          <li>
            <strong>1. Amostragem no topo:</strong> a camada de topo é tratada como uma RBM completa
            (com ligações bidireccionais). Corre-se Gibbs sampling entre <InlineMath math="h_2" /> e
            a camada imediatamente abaixo até obter uma amostra "de equilíbrio" — um padrão de
            activação plausível segundo o modelo aprendido.
          </li>
          <li>
            <strong>2. Propagação descendente:</strong> a partir dessa amostra, as camadas inferiores
            funcionam como uma rede de crença <em>directed</em> (um sentido só): aplica-se
            <InlineMath math="\\;p(v|h) = \\sigma(b + W^\\top h)" /> sucessivamente até chegar à
            camada visível, produzindo um exemplo sintético — por exemplo, uma imagem de um dígito
            manuscrito gerado "do zero" pelo modelo.
          </li>
        </ul>

        <div style={S.note}>
          Esta arquitectura híbrida — RBM não-direccionada no topo + camadas direccionadas por baixo —
          é o que dá à DBN o seu nome "belief network": as camadas inferiores codificam crenças
          (probabilidades condicionais) sobre como os dados visíveis surgem a partir de causas latentes,
          um conceito directamente herdado das redes Bayesianas clássicas.
        </div>
      </section>

      <hr style={S.divider} />

      {/* === SECTION 7: Why fell out of favor === */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Por que caíram em desuso</h2>
        <p style={S.p}>
          Entre 2006 e cerca de 2011, o pré-treino greedy com RBMs era o método de facto para treinar
          redes profundas. A partir de 2011-2012, uma combinação de avanços tornou-o praticamente
          obsoleto para a esmagadora maioria das aplicações:
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Dimensão</th>
              <th style={S.th}>Era DBN/RBM (≈2006-2011)</th>
              <th style={S.th}>Deep Learning moderno</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Inicialização', 'Pré-treino greedy não-supervisionado camada-a-camada (semanas de computação)', 'Inicialização aleatória calibrada (He, Xavier) — instantânea'],
              ['Função de activação', 'Sigmoide / tanh — saturam, gradientes pequenos', 'ReLU e variantes — gradiente constante para x&gt;0'],
              ['Estabilização do treino', 'Sem normalização entre camadas', 'Batch Normalization, Layer Normalization, residual connections'],
              ['Dados rotulados', 'Escassos e caros — daí a necessidade de aproveitar dados não-rotulados via RBM', 'Datasets massivos rotulados (ImageNet) e, mais recentemente, self-supervised pretraining em escala'],
              ['Hardware', 'CPUs, GPUs incipientes — treino lento favorecia atalhos como pré-treino', 'GPUs/TPUs maciçamente paralelas tornam treino end-to-end viável directamente'],
              ['Relevância actual', 'Nicho: collaborative filtering esparso, investigação em EBMs, quantum annealing', 'Praticamente todas as arquitecturas de produção (CNNs, Transformers, etc.)'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p style={S.p}>
          Em resumo: o pré-treino greedy resolvia o problema do <em>vanishing gradient</em> dando
          aos pesos um "ponto de partida" razoável. Mas se o problema de origem (sigmoides que
          saturam, falta de normalização, inicialização ingénua) for resolvido directamente, deixa
          de ser necessário um truque indirecto e caro para o contornar. Foi exactamente isso que
          ReLU + He initialization + BatchNorm + datasets grandes fizeram.
        </p>
      </section>

      <hr style={S.divider} />

      {/* === SECTION 8: Modern echoes === */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Ecos modernos — Energy-Based Models e Diffusion</h2>
        <p style={S.p}>
          Embora a arquitectura específica das RBMs/DBNs tenha sido abandonada, a <strong>ideia
          central</strong> — definir um modelo através de uma função de energia escalar e aprender
          a moldar essa energia para que dados reais tenham energia baixa e dados "errados" tenham
          energia alta — continua viva e activa em duas linhas de investigação modernas:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: `1px solid ${color}30` }}>
            <div style={{ fontWeight: 700, color, marginBottom: '0.5rem' }}>Energy-Based Models (EBMs)</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 0 }}>
              Generalização directa das Boltzmann Machines: uma rede neuronal aprende uma função
              <InlineMath math="\\;E_\\theta(x)" /> de baixa energia para dados reais e alta energia
              para dados sintéticos/corrompidos. Yann LeCun argumenta que aprender energias é mais
              fundamental do que aprender probabilidades explícitas, e propõe EBMs como caminho para
              raciocínio e planeamento em sistemas de IA além dos LLMs actuais.
            </p>
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: '1px solid #fb923c30' }}>
            <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.5rem' }}>Diffusion Models</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 0 }}>
              Modelos como Stable Diffusion ou DALL-E 2 aprendem, em essência, o <em>gradiente</em> da
              energia (chamado "score function") em torno dos dados. Gerar uma imagem é um processo
              iterativo de "descer" essa paisagem de energia a partir de ruído puro — conceitualmente
              o sucessor directo do Gibbs sampling usado para amostrar de uma Boltzmann Machine, mas
              parametrizado por redes neuronais profundas e guiado por gradientes em vez de amostragem
              estocástica simples.
            </p>
          </div>
        </div>

        <div style={S.note}>
          A ligação histórica é mais conceptual do que algorítmica directa: ninguém implementa
          diffusion models como Boltzmann Machines. Mas a "linguagem" — energia, amostragem,
          equilíbrio, paisagens de probabilidade — é a mesma. Compreender RBMs dá uma base intuitiva
          sólida para entender por que os diffusion models "funcionam" matematicamente.
        </div>
      </section>

      <hr style={S.divider} />

      {/* === SYNTHESIS === */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Síntese do Módulo</h2>
        <p style={S.p}>
          As Boltzmann Machines e as Deep Belief Networks representam um capítulo fundamental —
          embora hoje largamente histórico — na evolução do deep learning. Surgiram para resolver
          um problema muito real (treinar redes profundas quando as ferramentas de optimização eram
          limitadas) e fizeram-no através de uma abordagem probabilística elegante baseada em energia.
          As ferramentas modernas tornaram a sua aplicação directa rara, mas os conceitos que
          introduziram — modelação por energia, pré-treino não-supervisionado, representações
          hierárquicas aprendidas camada-a-camada — continuam profundamente entranhados no
          pensamento da área.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 4 }}><strong>Pontos-chave a reter:</strong></p>
          <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-primary)', lineHeight: 1.9, marginBottom: 0 }}>
            <li>Boltzmann Machine: rede totalmente ligada de unidades binárias estocásticas, definida por uma função de energia E(v,h); inferência exacta é intractável devido às ligações laterais e à função de partição Z</li>
            <li>RBM: remove as ligações intra-camada, criando um grafo bipartido — torna p(h|v) e p(v|h) exactas e calculáveis numa única passagem com sigmoide</li>
            <li>Contrastive Divergence (CD-k): aproxima o gradiente da log-verosimilhança comparando uma fase positiva (dados reais) com uma fase negativa (reconstrução após k passos de Gibbs); CD-1 é suficiente na prática</li>
            <li>DBN: pilha de RBMs treinadas greedy, camada-a-camada — cada camada melhora um lower bound na log-verosimilhança, seguida de fine-tuning opcional com backpropagation</li>
            <li>Geração top-down: a camada de topo (RBM) amostra via Gibbs sampling; a propagação descendente pelas camadas seguintes gera novas amostras visíveis</li>
            <li>O pré-treino greedy tornou-se largamente desnecessário com ReLU, inicialização He/Xavier, BatchNorm e datasets grandes — mas a herança conceptual sobrevive em Energy-Based Models e Diffusion Models</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
