import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#4a9eed';
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
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
};

// === Diagram 1: Computation graph for z = (x + y) * w, forward + backward ===
const ComputationGraphDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
      Grafo de computação de um neurónio: <InlineMath math="a = \sigma(x \cdot w + b)" />
    </p>
    <svg viewBox="0 0 700 320" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="fwdArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
        <marker id="bwdArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
        </marker>
      </defs>

      {/* Input nodes */}
      <circle cx="50" cy="55" r="22" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="50" y="51" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">x</text>
      <text x="50" y="67" textAnchor="middle" fill={color} fontSize="10">= 2</text>

      <circle cx="50" cy="190" r="22" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="50" y="186" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">w</text>
      <text x="50" y="202" textAnchor="middle" fill={color} fontSize="10">= 3</text>

      <circle cx="290" cy="270" r="22" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="290" y="266" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">b</text>
      <text x="290" y="282" textAnchor="middle" fill={color} fontSize="10">= -1</text>

      {/* × node: p = x·w */}
      <rect x="140" y="98" width="60" height="48" rx="10" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="170" y="128" textAnchor="middle" fill="var(--text-primary)" fontSize="16" fontWeight="700">×</text>
      <text x="280" y="100" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700">p = 6</text>

      {/* + node: z = p + b */}
      <rect x="380" y="98" width="60" height="48" rx="10" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="410" y="128" textAnchor="middle" fill="var(--text-primary)" fontSize="16" fontWeight="700">+</text>
      <text x="490" y="100" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700">z = 5</text>

      {/* σ node: a = ReLU(z) */}
      <rect x="520" y="98" width="60" height="48" rx="10" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="550" y="128" textAnchor="middle" fill="var(--text-primary)" fontSize="16" fontWeight="700">σ</text>

      {/* a output */}
      <circle cx="650" cy="122" r="26" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="650" y="118" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">a</text>
      <text x="650" y="134" textAnchor="middle" fill="var(--text-primary)" fontSize="10">= 5</text>

      {/* Forward arrows (solid, indigo) */}
      <line x1="71" y1="62" x2="143" y2="108" stroke="var(--text-primary)" strokeWidth="1.5" markerEnd="url(#fwdArrow)" />
      <line x1="71" y1="183" x2="143" y2="137" stroke={color} strokeWidth="1.5" markerEnd="url(#fwdArrow)" />
      <line x1="200" y1="122" x2="378" y2="122" stroke={color} strokeWidth="1.5" markerEnd="url(#fwdArrow)" />
      <line x1="302" y1="254" x2="397" y2="144" stroke={color} strokeWidth="1.5" markerEnd="url(#fwdArrow)" />
      <line x1="440" y1="122" x2="518" y2="122" stroke={color} strokeWidth="1.5" markerEnd="url(#fwdArrow)" />
      <line x1="580" y1="122" x2="622" y2="122" stroke={color} strokeWidth="1.5" markerEnd="url(#fwdArrow)" />

      {/* Backward arrows (dashed, red) — offset from the forward lines so labels don't overlap */}
      <line x1="624" y1="138" x2="582" y2="138" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#bwdArrow)" />
      <line x1="518" y1="138" x2="442" y2="138" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#bwdArrow)" />
      <line x1="378" y1="138" x2="202" y2="138" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#bwdArrow)" />
      <line x1="397" y1="160" x2="312" y2="262" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#bwdArrow)" />
      <line x1="143" y1="124" x2="73" y2="78" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#bwdArrow)" />
      <line x1="143" y1="153" x2="73" y2="198" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#bwdArrow)" />

      {/* Backward gradient labels — each placed clear of every line */}
      <text x="603" y="156" textAnchor="middle" fill="#4a9eed" fontSize="10">∂a/∂a = 1</text>
      <text x="480" y="156" textAnchor="middle" fill="#4a9eed" fontSize="10">∂a/∂z = σ'(z) = 1</text>
      <text x="290" y="156" textAnchor="middle" fill="#4a9eed" fontSize="10">∂a/∂p = ∂a/∂z·∂z/∂p = 1</text>
      <text x="430" y="218" textAnchor="middle" fill="#4a9eed" fontSize="10">∂a/∂b = ∂a/∂z·∂z/∂b = 1</text>
      <text x="180" y="80" textAnchor="middle" fill="#4a9eed" fontSize="10">∂a/∂x = ∂a/∂p·∂p/∂x = 1·w = 3</text>
      <text x="170" y="200" textAnchor="middle" fill="#4a9eed" fontSize="10">∂a/∂w = ∂a/∂p·∂p/∂w = 1·x = 2</text>

      {/* Legend */}
      <line x1="20" y1="305" x2="50" y2="305" stroke={color} strokeWidth="1.5" markerEnd="url(#fwdArrow)" />
      <text x="56" y="309" fill="var(--text-secondary)" fontSize="10">forward (valores)</text>
      <line x1="200" y1="305" x2="230" y2="305" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#bwdArrow)" />
      <text x="236" y="309" fill="var(--text-secondary)" fontSize="10">backward (gradientes)</text>
    </svg>
    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      Este é o grafo de computação de <strong>um único neurónio</strong>: a entrada <InlineMath math="x" /> é
      multiplicada pelo peso <InlineMath math="w" /> (dando <InlineMath math="p = x \cdot w" />), soma-se o
      bias <InlineMath math="b" /> (dando a pré-activação <InlineMath math="z = p+b" />), e aplica-se a função de
      activação <InlineMath math="\sigma" /> (aqui ReLU) para obter a saída <InlineMath math="a" />. No <strong>forward
      pass</strong> (setas a roxo) calculamos e guardamos cada valor intermédio: <InlineMath math="p=2\cdot3=6" />,{' '}
      <InlineMath math="z=6+(-1)=5" />, <InlineMath math="a=\text{ReLU}(5)=5" />. No <strong>backward pass</strong> (setas
      a vermelho, tracejadas) percorremos o grafo ao contrário a partir de <InlineMath math="\partial a/\partial a = 1" />,
      multiplicando em cada nó pelo <em>gradiente local</em> calculado a partir dos valores guardados no
      forward — exactamente o mesmo princípio usado para calcular <InlineMath math="\partial L/\partial W" /> numa
      rede completa.
    </p>
  </div>
);

// === Diagram 2: Vanishing/exploding gradients across layers ===
const VanishingExplodingDiagram = () => {
  const layers = 8;
  const factorVanish = 0.5;
  const factorExplode = 1.5;
  const vanishVals = Array.from({ length: layers }, (_, i) => Math.pow(factorVanish, i + 1));
  const explodeVals = Array.from({ length: layers }, (_, i) => Math.pow(factorExplode, i + 1));
  const w = 560, h = 200, padL = 40, padB = 30, padT = 20;
  const plotW = w - padL - 20, plotH = h - padB - padT;
  const maxV = Math.max(...explodeVals);

  const points = (vals) => vals.map((v, i) => {
    const x = padL + (i / (layers - 1)) * plotW;
    const ratio = v / maxV;
    const y = padT + plotH - Math.max(0, Math.min(1, ratio)) * plotH;
    return [x, y];
  });

  const vanishPts = points(vanishVals);
  const explodePts = points(explodeVals.map(v => Math.min(v, maxV)));

  const toPath = pts => pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
        Como o gradiente evolui ao atravessar 8 camadas (escala relativa)
      </p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%', height: 'auto' }}>
        {/* Axes */}
        <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={padL} y1={padT + plotH} x2={w - 20} y2={padT + plotH} stroke="var(--text-secondary)" strokeWidth="1" />
        <text x={padL - 8} y={padT + 6} textAnchor="end" fill="var(--text-secondary)" fontSize="9">alto</text>
        <text x={padL - 8} y={padT + plotH} textAnchor="end" fill="var(--text-secondary)" fontSize="9">~0</text>
        <text x={(w) / 2} y={h - 4} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">camada (1 → 8, sentido do backward)</text>

        {/* Vanishing line */}
        <path d={toPath(vanishPts)} fill="none" stroke="#4a9eed" strokeWidth="2" />
        {vanishPts.map((p, i) => <circle key={'v'+i} cx={p[0]} cy={p[1]} r="2.5" fill="#4a9eed" />)}

        {/* Exploding line */}
        <path d={toPath(explodePts)} fill="none" stroke="#4a9eed" strokeWidth="2" />
        {explodePts.map((p, i) => <circle key={'e'+i} cx={p[0]} cy={p[1]} r="2.5" fill="#4a9eed" />)}

        {/* Labels */}
        <text x={vanishPts[layers-1][0] - 60} y={vanishPts[layers-1][1] + 15} fill="#4a9eed" fontSize="10" fontWeight="700">vanishing (factor 0.5)</text>
        <text x={explodePts[2][0]} y={explodePts[3][1] - 12} fill="#4a9eed" fontSize="10" fontWeight="700">exploding (factor 1.5)</text>
      </svg>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        <strong>Como ler este gráfico:</strong> o eixo horizontal representa as 8 camadas da rede, mas no
        <em> sentido do backward pass</em> — ou seja, da saída (camada 8, perto do <InlineMath math="L" />) para a
        entrada (camada 1). O eixo vertical mostra a magnitude do gradiente <em>relativa</em> ao valor que saiu da
        última camada (que começa sempre em 1, antes do primeiro factor ser aplicado). Cada ponto da linha
        é o resultado de <strong>multiplicar, sucessivamente, mais um gradiente local</strong> — exactamente a
        mesma operação "gradiente acumulado × gradiente local" que vimos passo a passo no exemplo das 3 camadas
        acima, repetida agora 8 vezes seguidas.
      </p>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        A linha <strong style={{ color: '#4a9eed' }}>azul</strong> simula uma rede em que, em média, cada camada
        contribui com um gradiente local de magnitude <InlineMath math="0.5" /> (factor <InlineMath math="< 1" />).
        Após 8 camadas, o gradiente fica em <InlineMath math="0.5^8 \approx 0.0039" /> — menos de
        meio porcento do valor original. As camadas mais próximas da entrada recebem, na prática, um sinal
        de gradiente quase nulo: os seus pesos deixam de ser actualizados de forma significativa
        (<strong>vanishing gradients</strong>).
      </p>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        A linha <strong style={{ color: '#4a9eed' }}>vermelha</strong> mostra o cenário oposto: cada camada
        amplifica o gradiente por um factor médio de <InlineMath math="1.5" /> (factor <InlineMath math="> 1" />).
        Após 8 camadas, o gradiente cresce para <InlineMath math="1.5^8 \approx 25.6" /> vezes o valor original —
        e este crescimento é <em>exponencial</em>, não linear: numa rede com 20 ou 30 camadas, o mesmo factor
        produziria valores astronomicamente grandes, levando a actualizações de peso instáveis e, frequentemente,
        a perdas que se tornam <InlineMath math="\text{NaN}" /> (<strong>exploding gradients</strong>).
      </p>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        O ponto crucial é que <strong>o mesmo mecanismo</strong> — a regra da cadeia, multiplicando um gradiente
        local por camada — produz comportamentos radicalmente diferentes consoante a magnitude típica desses
        factores está ligeiramente abaixo ou acima de 1. Não há "factor neutro" estável por defeito: é precisamente
        para manter este produto próximo de 1, camada após camada, que existem as técnicas de inicialização,
        normalização e activação discutidas a seguir.
      </p>
    </div>
  );
};

// === Diagram 3: Dynamic computation graph / autograd ===
const AutogradDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
      Autograd: construir o grafo "ao correr" e percorrê-lo ao contrário
    </p>
    <svg viewBox="0 0 560 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="autoArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      {/* Step 1 */}
      <rect x="20" y="20" width="150" height="64" rx="10" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="95" y="45" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">1. Forward pass</text>
      <text x="95" y="62" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">cada operação cria um</text>
      <text x="95" y="74" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">nó com referência ao "pai"</text>

      {/* Step 2 */}
      <rect x="205" y="20" width="150" height="64" rx="10" fill="rgba(2,132,199,0.1)" stroke="#0284c7" strokeWidth="1.5" />
      <text x="280" y="45" textAnchor="middle" fill="#0284c7" fontSize="12" fontWeight="700">2. Grafo dinâmico</text>
      <text x="280" y="62" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">tape regista a ordem das</text>
      <text x="280" y="74" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">operações (define-by-run)</text>

      {/* Step 3 */}
      <rect x="390" y="20" width="150" height="64" rx="10" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="465" y="45" textAnchor="middle" fill="#4a9eed" fontSize="12" fontWeight="700">3. Backward pass</text>
      <text x="465" y="62" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">percorre a tape ao contrário,</text>
      <text x="465" y="74" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">acumula gradientes em cada nó</text>

      <line x1="170" y1="52" x2="200" y2="52" stroke={color} strokeWidth="1.5" markerEnd="url(#autoArrow)" />
      <line x1="355" y1="52" x2="385" y2="52" stroke={color} strokeWidth="1.5" markerEnd="url(#autoArrow)" />

      {/* Batch accumulation */}
      <rect x="100" y="115" width="360" height="55" rx="10" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.2" />
      <text x="280" y="135" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="700">Acumulação de gradientes num batch</text>
      <text x="280" y="152" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">grad(W) = Σᵢ ∂Lᵢ/∂W   (soma sobre cada exemplo i do batch antes de actualizar W)</text>
    </svg>
    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      Um motor de <strong>autograd</strong> não exige que escrevamos manualmente as derivadas. Em vez disso,
      cada operação aritmética (soma, produto, função de activação, convolução...) é uma "peça" que sabe
      calcular o seu próprio gradiente local. Durante o forward pass, à medida que os dados fluem, o motor
      vai construindo um grafo — uma "fita" (tape) com a sequência exacta de operações e os valores que
      produziram. No backward pass, o motor percorre essa fita do fim para o início, aplicando a regra da
      cadeia automaticamente: gradiente local × gradiente recebido de cima. Como o grafo é construído
      <em> a cada execução</em> (define-by-run), é trivial usar loops, condicionais ou comprimentos de
      sequência variáveis — a estrutura do grafo simplesmente reflecte o caminho que o código realmente seguiu.
      Quando processamos um <strong>batch</strong> de exemplos, os gradientes de cada exemplo individual são
      somados (acumulados) no mesmo parâmetro antes de o optimizador actualizar os pesos — é por isso que,
      entre passos de optimização, é preciso "limpar" os gradientes acumulados antes do próximo batch.
    </p>
  </div>
);

// === Helper: button style for stepper controls ===
const stepBtnStyle = (disabled) => ({
  padding: '0.5rem 1.1rem',
  borderRadius: 8,
  border: `1px solid ${color}`,
  background: disabled ? 'transparent' : color,
  color: disabled ? color : '#fff',
  fontWeight: 600,
  fontSize: '0.85rem',
  cursor: disabled ? 'default' : 'pointer',
  opacity: disabled ? 0.4 : 1,
  transition: 'opacity 0.15s',
});

// Numeric example used throughout: x = (1, 0.5), y_alvo = 1, η = 0.1, ReLU nas escondidas, saída linear.
const nnLayers = [
  { id: 'in', x: 60, y: [120, 200], labels: ['x₁', 'x₂'], values: ['1', '0.5'] },
  { id: 'h1', x: 250, y: [60, 160, 260], labels: ['a¹₁', 'a¹₂', 'a¹₃'], values: ['0.60', '0.05', '0.40'] },
  { id: 'h2', x: 440, y: [60, 160, 260], labels: ['a²₁', 'a²₂', 'a²₃'], values: ['0.26', '0.045', '0.035'] },
  { id: 'out', x: 600, y: [160], labels: ['ŷ'], values: ['0.2615'] },
];
const nnLossNode = { id: 'L', x: 670, y: 160, label: 'L', value: '0.545' };

const nnNodes = nnLayers.flatMap(layer =>
  layer.y.map((y, i) => ({ id: `${layer.id}${i}`, x: layer.x, y, label: layer.labels[i], value: layer.values[i] }))
);

const nnEdgeGroups = [
  { from: 'in', to: 'h1' },
  { from: 'h1', to: 'h2' },
  { from: 'h2', to: 'out' },
];
const nnEdges = (groupFrom, groupTo) => {
  const fromLayer = nnLayers.find(l => l.id === groupFrom);
  const toLayer = nnLayers.find(l => l.id === groupTo);
  const edges = [];
  fromLayer.y.forEach((_, i) => toLayer.y.forEach((_, j) => edges.push([`${groupFrom}${i}`, `${groupTo}${j}`])));
  return edges;
};
const nnAllEdges = [...nnEdgeGroups.flatMap(g => nnEdges(g.from, g.to)), ['out0', 'L']];

const nnForwardSteps = [
  {
    label: 'Camada de entrada',
    activeNodes: ['in0', 'in1'], activeEdges: [],
    math: `x = (x_1, x_2)`,
    desc: 'O forward pass começa com o vector de entrada. Cada componente é um número que vai fluir através da rede, multiplicado por pesos e somado em cada neurónio das camadas seguintes.',
  },
  {
    label: '1ª camada escondida',
    activeNodes: ['h10', 'h11', 'h12'], activeEdges: nnEdges('in', 'h1'),
    math: `z^{(1)} = W^{(1)} x + b^{(1)} \\quad\\quad a^{(1)} = \\sigma(z^{(1)})`,
    desc: 'Cada um dos 3 neurónios desta camada recebe uma combinação linear das 2 entradas (uma soma ponderada, definida pela matriz de pesos W⁽¹⁾ de tamanho 3×2, mais um vector de bias b⁽¹⁾), seguida de uma activação não-linear σ (ex.: ReLU). O resultado, a⁽¹⁾, é um vector com 3 valores.',
  },
  {
    label: '2ª camada escondida',
    activeNodes: ['h20', 'h21', 'h22'], activeEdges: nnEdges('h1', 'h2'),
    math: `z^{(2)} = W^{(2)} a^{(1)} + b^{(2)} \\quad\\quad a^{(2)} = \\sigma(z^{(2)})`,
    desc: 'O mesmo padrão repete-se: W⁽²⁾ (3×3) combina os 3 valores de a⁽¹⁾ para produzir 3 novos valores pré-activação z⁽²⁾, aos quais se aplica novamente σ. Cada camada aprende a recombinar as features da camada anterior.',
  },
  {
    label: 'Camada de saída',
    activeNodes: ['out0'], activeEdges: nnEdges('h2', 'out'),
    math: `z^{(3)} = W^{(3)} a^{(2)} + b^{(3)} \\quad\\quad \\hat{y} = z^{(3)}`,
    desc: 'A camada de saída combina os 3 valores de a⁽²⁾ com pesos W⁽³⁾ (1×3) num único número, ŷ — aqui sem activação não-linear (saída linear), apropriado para um problema de regressão.',
  },
  {
    label: 'Função de perda',
    activeNodes: ['L'], activeEdges: [['out0', 'L']],
    math: `L = (\\hat{y} - y)^2`,
    desc: 'Por fim, comparamos a previsão ŷ com o valor-alvo y através da função de perda. Este é o número escalar que o backward pass vai diferenciar em relação a cada peso e bias da rede.',
  },
];

const nnBackwardSteps = [
  {
    label: '∂L/∂ŷ — saída da rede',
    activeNodes: ['L', 'out0'], activeEdges: [['out0', 'L']],
    math: `\\frac{\\partial L}{\\partial \\hat{y}} = 2(\\hat{y}-y) = 2(0.2615 - 1) = -1.477`,
    desc: 'Tal como nos exemplos anteriores, o backward pass começa pela derivada da perda em relação à saída da rede. Este escalar é o ponto de partida para todos os gradientes seguintes.',
  },
  {
    label: '∂L/∂W⁽³⁾, ∂L/∂b⁽³⁾, ∂L/∂a⁽²⁾',
    activeNodes: ['out0', 'h20', 'h21', 'h22'], activeEdges: nnEdges('h2', 'out'),
    formulas: [
      { expr: `\\frac{\\partial L}{\\partial W^{(3)}} = \\underbrace{\\frac{\\partial L}{\\partial \\hat y}}_{L \\to \\hat y \\,=\\, 2(\\hat y - y)} \\cdot \\underbrace{\\frac{\\partial \\hat y}{\\partial z^{(3)}}}_{=1 \\text{ (linear)}} \\cdot \\underbrace{\\frac{\\partial z^{(3)}}{\\partial W^{(3)}}}_{=(a^{(2)})^T} = 2(\\hat y - y)(a^{(2)})^T`, note: 'regra da cadeia: L depende de ŷ, que depende de z⁽³⁾, que depende de W⁽³⁾. Como L=(ŷ-y)², a primeira derivada é 2(ŷ-y); como a saída é linear (ŷ=z⁽³⁾), o termo do meio é 1 — ao produto dos dois primeiros termos chamamos ∂L/∂z⁽³⁾.' },
    ],
    update: `W^{(3)} \\leftarrow W^{(3)} - \\eta \\, \\frac{\\partial L}{\\partial W^{(3)}} \\quad\\quad b^{(3)} \\leftarrow b^{(3)} - \\eta \\, \\frac{\\partial L}{\\partial b^{(3)}}`,
    desc: 'O gradiente é usado de duas formas: (1) multiplicado pelas activações a⁽²⁾ que entraram em cada peso, dá os gradientes dos parâmetros W⁽³⁾ e b⁽³⁾ — estes são guardados e, no fim, usados para actualizar os pesos (ver caixa de actualização abaixo); (2) multiplicado pelos próprios pesos W⁽³⁾, dá o gradiente que continua a propagar-se para trás, para a 2ª camada escondida.',
    weightExample: {
      title: 'Exemplo numérico — peso W⁽³⁾₁,₁ (liga a²₁ → ŷ, valor actual: 0.6)',
      focusEdge: ['h20', 'out0'],
      weightLabel: 'W⁽³⁾₁,₁ = 0.6',
      rows: [
        `\\frac{\\partial L}{\\partial z^{(3)}} = \\frac{\\partial L}{\\partial \\hat{y}} = -1.477`,
        `\\frac{\\partial L}{\\partial W^{(3)}_{1,1}} = \\frac{\\partial L}{\\partial z^{(3)}} \\cdot a^{(2)}_{1} = (-1.477)(0.26) \\approx -0.384`,
      ],
      update: `W^{(3)}_{1,1} \\leftarrow 0.6 - 0.1 \\times (-0.384) = 0.6384`,
      biasUpdate: `\\frac{\\partial L}{\\partial b^{(3)}} = \\frac{\\partial L}{\\partial z^{(3)}} = -1.477 \\quad\\Rightarrow\\quad b^{(3)} \\leftarrow 0.1 - 0.1 \\times (-1.477) = 0.2477`,
    },
  },
  {
    label: '∂L/∂W⁽²⁾, ∂L/∂b⁽²⁾, ∂L/∂a⁽¹⁾',
    activeNodes: ['h20', 'h21', 'h22', 'h10', 'h11', 'h12'], activeEdges: nnEdges('h1', 'h2'),
    formulas: [
      { expr: `\\frac{\\partial L}{\\partial W^{(2)}} = \\underbrace{\\frac{\\partial L}{\\partial a^{(2)}}}_{L \\to a^{(2)}} \\cdot \\underbrace{\\frac{\\partial a^{(2)}}{\\partial z^{(2)}}}_{=\\sigma'(z^{(2)})} \\cdot \\underbrace{\\frac{\\partial z^{(2)}}{\\partial W^{(2)}}}_{=(a^{(1)})^T} = \\Big(\\frac{\\partial L}{\\partial a^{(2)}} \\odot \\sigma'(z^{(2)})\\Big)(a^{(1)})^T`, note: 'regra da cadeia: L depende de a⁽²⁾, que depende de z⁽²⁾, que depende de W⁽²⁾. O produto entre parênteses (gradiente vezes derivada da activação) chamamos ∂L/∂z⁽²⁾.' },
      { expr: `\\frac{\\partial L}{\\partial a^{(1)}} = (W^{(2)})^T \\frac{\\partial L}{\\partial z^{(2)}}`, note: 'gradiente que continua a propagar-se para a 1ª camada escondida' },
    ],
    update: `W^{(2)} \\leftarrow W^{(2)} - \\eta \\, \\frac{\\partial L}{\\partial W^{(2)}} \\quad\\quad b^{(2)} \\leftarrow b^{(2)} - \\eta \\, \\frac{\\partial L}{\\partial b^{(2)}}`,
    desc: 'Antes de continuar, multiplicamos pela derivada da activação σ\'(z⁽²⁾) (elemento a elemento, ⊙) — exactamente como o factor ReLU\'(z₁) no exemplo anterior, mas agora aplicado a um vector de 3 valores em simultâneo. Depois, o mesmo padrão: gradientes dos pesos W⁽²⁾/b⁽²⁾ (guardados), e gradiente que continua para a 1ª camada escondida.',
    weightExample: {
      title: 'Exemplo numérico — peso W⁽²⁾₁,₁ (liga a¹₁ → a²₁, valor actual: 0.3)',
      focusEdge: ['h10', 'h20'],
      weightLabel: 'W⁽²⁾₁,₁ = 0.3',
      rows: [
        `\\frac{\\partial L}{\\partial a^{(2)}_{1}} = W^{(3)}_{1,1} \\cdot \\frac{\\partial L}{\\partial z^{(3)}} = (0.6)(-1.477) \\approx -0.886`,
        `\\frac{\\partial L}{\\partial z^{(2)}_{1}} = \\frac{\\partial L}{\\partial a^{(2)}_{1}} \\cdot \\sigma'(z^{(2)}_{1}) = (-0.886)(1) = -0.886 \\quad (z^{(2)}_1 = 0.26 > 0)`,
        `\\frac{\\partial L}{\\partial W^{(2)}_{1,1}} = \\frac{\\partial L}{\\partial z^{(2)}_{1}} \\cdot a^{(1)}_{1} = (-0.886)(0.6) \\approx -0.532`,
      ],
      update: `W^{(2)}_{1,1} \\leftarrow 0.3 - 0.1 \\times (-0.532) = 0.3532`,
    },
  },
  {
    label: '∂L/∂W⁽¹⁾, ∂L/∂b⁽¹⁾',
    activeNodes: ['h10', 'h11', 'h12', 'in0', 'in1'], activeEdges: nnEdges('in', 'h1'),
    formulas: [
      { expr: `\\frac{\\partial L}{\\partial W^{(1)}} = \\underbrace{\\frac{\\partial L}{\\partial a^{(1)}}}_{L \\to a^{(1)}} \\cdot \\underbrace{\\frac{\\partial a^{(1)}}{\\partial z^{(1)}}}_{=\\sigma'(z^{(1)})} \\cdot \\underbrace{\\frac{\\partial z^{(1)}}{\\partial W^{(1)}}}_{=x^T} = \\Big(\\frac{\\partial L}{\\partial a^{(1)}} \\odot \\sigma'(z^{(1)})\\Big) x^T`, note: 'regra da cadeia: L depende de a⁽¹⁾, que depende de z⁽¹⁾, que depende de W⁽¹⁾. O produto entre parênteses chamamos ∂L/∂z⁽¹⁾ — x é a entrada da rede, não há mais nada para onde propagar.' },
    ],
    update: `W^{(1)} \\leftarrow W^{(1)} - \\eta \\, \\frac{\\partial L}{\\partial W^{(1)}} \\quad\\quad b^{(1)} \\leftarrow b^{(1)} - \\eta \\, \\frac{\\partial L}{\\partial b^{(1)}}`,
    desc: 'Último passo: aplicamos novamente σ\'(z⁽¹⁾) e multiplicamos pelas entradas x para obter os gradientes de W⁽¹⁾ e b⁽¹⁾. Como x é a entrada da rede, não há mais nada para onde propagar — o backward pass termina aqui.',
    weightExample: {
      title: 'Exemplo numérico — peso W⁽¹⁾₁,₁ (liga x₁ → a¹₁, valor actual: 0.4)',
      focusEdge: ['in0', 'h10'],
      weightLabel: 'W⁽¹⁾₁,₁ = 0.4',
      rows: [
        `\\frac{\\partial L}{\\partial a^{(1)}_{1}} = \\sum_j W^{(2)}_{j,1} \\cdot \\frac{\\partial L}{\\partial z^{(2)}_{j}} = (0.3)(-0.886) + (0.5)(0.7385) + (-0.1)(-1.1816) \\approx 0.2216`,
        `\\frac{\\partial L}{\\partial z^{(1)}_{1}} = \\frac{\\partial L}{\\partial a^{(1)}_{1}} \\cdot \\sigma'(z^{(1)}_{1}) = (0.2216)(1) = 0.2216 \\quad (z^{(1)}_1 = 0.6 > 0)`,
        `\\frac{\\partial L}{\\partial W^{(1)}_{1,1}} = \\frac{\\partial L}{\\partial z^{(1)}_{1}} \\cdot x_{1} = (0.2216)(1) = 0.2216`,
      ],
      update: `W^{(1)}_{1,1} \\leftarrow 0.4 - 0.1 \\times 0.2216 \\approx 0.3778`,
    },
  },
];

// === Data: fully-computed 2-3-3-1 network for the click-a-weight gradient explorer ===
const wgX = [1, 0.5];
const wgYTarget = 1;
const wgEta = 0.1;
const wgW1 = [[0.4, 0.2], [0.1, -0.3], [0.3, 0.5]];
const wgB1 = [0.1, 0, -0.1];
const wgW2 = [[0.3, 0.4, 0.1], [0.5, -0.2, 0.3], [-0.1, 0.2, 0.4]];
const wgB2 = [0.02, -0.05, 0.1];
const wgW3 = [[0.6, -0.5, 0.8]];
const wgB3 = [0.1];

const wgRelu = (x) => Math.max(0, x);
const wgReluPrime = (x) => (x > 0 ? 1 : 0);

// Forward pass
const wgZ1 = wgW1.map((row, j) => row[0] * wgX[0] + row[1] * wgX[1] + wgB1[j]);
const wgA1 = wgZ1.map(wgRelu);
const wgZ2 = wgW2.map((row, j) => row[0] * wgA1[0] + row[1] * wgA1[1] + row[2] * wgA1[2] + wgB2[j]);
const wgA2 = wgZ2.map(wgRelu);
const wgZ3 = wgW3[0][0] * wgA2[0] + wgW3[0][1] * wgA2[1] + wgW3[0][2] * wgA2[2] + wgB3[0];
const wgYhat = wgZ3;
const wgL = (wgYhat - wgYTarget) ** 2;

// Backward pass
const wgDz3 = 2 * (wgYhat - wgYTarget);
const wgDw3 = wgA2.map((a) => wgDz3 * a);
const wgDb3 = [wgDz3];
const wgDa2 = wgW3[0].map((w) => w * wgDz3);
const wgDz2 = wgDa2.map((d, j) => d * wgReluPrime(wgZ2[j]));
const wgDw2 = wgDz2.map((dz) => wgA1.map((a) => dz * a));
const wgDb2 = wgDz2;
const wgDa1 = [0, 1, 2].map((k) => wgDz2.reduce((sum, dz, j) => sum + wgW2[j][k] * dz, 0));
const wgDz1 = wgDa1.map((d, k) => d * wgReluPrime(wgZ1[k]));
const wgDw1 = wgDz1.map((dz) => wgX.map((x) => dz * x));
const wgDb1 = wgDz1;

// Lookup: edge "from-to" -> { tex, grad, chain } — chain is the symbolic chain rule for that weight
const wgEdgeData = {};
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 3; j++) {
    wgEdgeData[`in${i}-h1${j}`] = {
      tex: `W^{(1)}_{${j + 1},${i + 1}}`, grad: wgDw1[j][i],
      chain: `\\frac{\\partial L}{\\partial W^{(1)}_{${j + 1},${i + 1}}} = \\underbrace{\\frac{\\partial L}{\\partial a^{(1)}_${j + 1}}}_{=\\sum_k W^{(2)}_{k,${j + 1}} \\cdot \\frac{\\partial L}{\\partial z^{(2)}_k}} \\cdot \\underbrace{\\frac{\\partial a^{(1)}_${j + 1}}{\\partial z^{(1)}_${j + 1}}}_{=\\sigma'(z^{(1)}_${j + 1})} \\cdot \\underbrace{\\frac{\\partial z^{(1)}_${j + 1}}{\\partial W^{(1)}_{${j + 1},${i + 1}}}}_{=x_${i + 1}}`,
    };
  }
}
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    wgEdgeData[`h1${i}-h2${j}`] = {
      tex: `W^{(2)}_{${j + 1},${i + 1}}`, grad: wgDw2[j][i],
      chain: `\\frac{\\partial L}{\\partial W^{(2)}_{${j + 1},${i + 1}}} = \\underbrace{\\frac{\\partial L}{\\partial a^{(2)}_${j + 1}}}_{=W^{(3)}_{1,${j + 1}} \\cdot \\frac{\\partial L}{\\partial z^{(3)}}} \\cdot \\underbrace{\\frac{\\partial a^{(2)}_${j + 1}}{\\partial z^{(2)}_${j + 1}}}_{=\\sigma'(z^{(2)}_${j + 1})} \\cdot \\underbrace{\\frac{\\partial z^{(2)}_${j + 1}}{\\partial W^{(2)}_{${j + 1},${i + 1}}}}_{=a^{(1)}_${i + 1}}`,
    };
  }
}
for (let i = 0; i < 3; i++) {
  wgEdgeData[`h2${i}-out0`] = {
    tex: `W^{(3)}_{1,${i + 1}}`, grad: wgDw3[i],
    chain: `\\frac{\\partial L}{\\partial W^{(3)}_{1,${i + 1}}} = \\underbrace{\\frac{\\partial L}{\\partial \\hat y}}_{=2(\\hat y - y)} \\cdot \\underbrace{\\frac{\\partial \\hat y}{\\partial z^{(3)}}}_{=1} \\cdot \\underbrace{\\frac{\\partial z^{(3)}}{\\partial W^{(3)}_{1,${i + 1}}}}_{=a^{(2)}_${i + 1}}`,
  };
}

// Node values (formatted) for the explorer's diagram
const wgNodeValues = {
  in0: wgX[0].toFixed(2), in1: wgX[1].toFixed(2),
  h10: wgA1[0].toFixed(2), h11: wgA1[1].toFixed(2), h12: wgA1[2].toFixed(2),
  h20: wgA2[0].toFixed(3), h21: wgA2[1].toFixed(3), h22: wgA2[2].toFixed(3),
  out0: wgYhat.toFixed(4), L: wgL.toFixed(4),
};

const NeuralNetStepper = () => {
  const [mode, setMode] = useState('forward');
  const [step, setStep] = useState(0);
  const steps = mode === 'forward' ? nnForwardSteps : nnBackwardSteps;
  const cur = steps[step];
  const accentColor = mode === 'forward' ? color : '#4a9eed';

  const switchMode = (m) => { setMode(m); setStep(0); };

  const isNodeActive = (id) => cur.activeNodes.includes(id);
  const isEdgeActive = (from, to) => cur.activeEdges.some(([f, t]) => f === from && t === to);
  const nodeById = (id) => (id === 'L' ? nnLossNode : nnNodes.find(n => n.id === id));

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
        Rede 2-3-3-1: forward e backward pass interactivos
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <button onClick={() => switchMode('forward')} style={{ ...stepBtnStyle(false), background: mode === 'forward' ? color : 'transparent', color: mode === 'forward' ? '#fff' : color }}>Forward pass</button>
        <button onClick={() => switchMode('backward')} style={{ ...stepBtnStyle(false), background: mode === 'backward' ? '#4a9eed' : 'transparent', borderColor: '#4a9eed', color: mode === 'backward' ? '#fff' : '#4a9eed' }}>Backward pass</button>
      </div>

      <p style={{ fontSize: '0.85rem', color: accentColor, fontWeight: 700, marginBottom: '1rem' }}>
        Passo {step + 1} de {steps.length} — {cur.label}
      </p>

      <svg viewBox="0 0 720 320" style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="nnFwd" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={color} />
          </marker>
          <marker id="nnBwd" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
          </marker>
        </defs>

        {/* All edges, faint */}
        {nnAllEdges.map(([from, to], i) => {
          const a = nodeById(from), b = nodeById(to);
          const active = isEdgeActive(from, to);
          const isFocus = cur.weightExample && cur.weightExample.focusEdge[0] === from && cur.weightExample.focusEdge[1] === to;
          // In backward mode the gradient flows from `to` back to `from`, so the arrowhead
          // must point at the `from` node — swap the line endpoints for active edges.
          const reverse = active && mode === 'backward';
          const x1 = reverse ? b.x : a.x, y1 = reverse ? b.y : a.y;
          const x2 = reverse ? a.x : b.x, y2 = reverse ? a.y : b.y;
          return (
            <line
              key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={isFocus ? '#4a9eed' : (active ? accentColor : 'var(--card-border)')}
              strokeWidth={isFocus ? 3.5 : (active ? 2.25 : 1)}
              opacity={isFocus ? 1 : (active ? 1 : 0.35)}
              markerEnd={active ? (mode === 'forward' ? 'url(#nnFwd)' : 'url(#nnBwd)') : undefined}
            />
          );
        })}

        {/* Focus-weight label */}
        {cur.weightExample && (() => {
          const [from, to] = cur.weightExample.focusEdge;
          const a = nodeById(from), b = nodeById(to);
          const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
          return (
            <g>
              <rect x={mx - 38} y={my - 28} width="76" height="18" rx="4" fill="#0284c7" />
              <text x={mx} y={my - 15} textAnchor="middle" fill="#1c1917" fontSize="10" fontWeight="700">{cur.weightExample.weightLabel}</text>
            </g>
          );
        })()}

        {/* Nodes */}
        {[...nnNodes, nnLossNode].map(n => {
          const active = isNodeActive(n.id);
          const isLoss = n.id === 'L';
          return (
            <g key={n.id}>
              <circle
                cx={n.x} cy={n.y} r={isLoss ? 24 : 22}
                fill={active ? `${accentColor}26` : 'var(--bg-primary)'}
                stroke={active ? accentColor : (isLoss ? '#4a9eed' : color)}
                strokeWidth={active ? 2.5 : 1.5}
              />
              <text x={n.x} y={n.y - 1} textAnchor="middle" fill={active ? accentColor : (isLoss ? '#4a9eed' : 'var(--text-primary)')} fontSize="12" fontWeight="700">{n.label}</text>
              <text x={n.x} y={n.y + 12} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{n.value}</text>
            </g>
          );
        })}

        {/* Target value next to L */}
        <text x="670" y="200" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">(y_alvo = 1)</text>

        {/* Layer captions */}
        <text x="60" y="300" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">entrada (2)</text>
        <text x="250" y="300" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">escondida 1 (3)</text>
        <text x="440" y="300" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">escondida 2 (3)</text>
        <text x="600" y="300" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">saída (1)</text>
        <text x="670" y="300" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">perda</text>
      </svg>

      <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
        Valores de exemplo (forward pass já calculado): <InlineMath math="x=(1, 0.5)" />,{' '}
        <InlineMath math="y_{\text{alvo}}=1" />, taxa de aprendizagem <InlineMath math="\eta = 0.1" />. Os números
        sob cada nó são os valores de activação calculados com pesos iniciais arbitrários.
      </p>

      {cur.formulas ? (
        cur.formulas.map((f, i) => (
          <div key={i} style={{ ...S.math, margin: '0.75rem 0', padding: '1rem 1.25rem' }}>
            <BlockMath math={f.expr} />
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0.4rem 0 0', fontStyle: 'italic' }}>{f.note}</p>
          </div>
        ))
      ) : (
        <div style={{ ...S.math, margin: '1rem 0' }}>
          <BlockMath math={cur.math} />
        </div>
      )}

      {cur.update && (
        <div style={{ ...S.highlight, textAlign: 'left', marginTop: '0.5rem' }}>
          <p style={{ ...S.p, marginBottom: '0.5rem', fontWeight: 700 }}>Como actualizamos os pesos:</p>
          <div style={{ ...S.math, margin: '0 0 0.5rem' }}>
            <BlockMath math={cur.update} />
          </div>
          <p style={{ ...S.p, marginBottom: 0, fontSize: '0.85rem' }}>
            <InlineMath math="\eta" /> é a taxa de aprendizagem (<em>learning rate</em>). Cada gradiente diz "para
            que lado e com que intensidade mexer"; o sinal de menos garante que o passo é dado no sentido que
            faz a loss <strong>descer</strong> — exactamente a ideia da loss landscape vista mais acima.
          </p>
        </div>
      )}

      {cur.weightExample && (
        <div style={{ ...S.highlight, textAlign: 'left', marginTop: '0.5rem', borderColor: '#4a9eed' }}>
          <p style={{ ...S.p, marginBottom: '0.5rem', fontWeight: 700 }}>{cur.weightExample.title}</p>
          <p style={{ ...S.p, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            Destacado a <strong style={{ color: '#4a9eed' }}>laranja</strong> no diagrama. Substituindo os valores
            numéricos deste exemplo na fórmula geral acima:
          </p>
          {cur.weightExample.rows.map((r, i) => (
            <div key={i} style={{ ...S.math, margin: '0.5rem 0', padding: '0.75rem 1rem' }}>
              <BlockMath math={r} />
            </div>
          ))}
          <p style={{ ...S.p, fontWeight: 700, marginTop: '0.75rem', marginBottom: '0.25rem' }}>Actualização deste peso:</p>
          <div style={{ ...S.math, margin: '0 0 0.25rem' }}>
            <BlockMath math={cur.weightExample.update} />
          </div>
        </div>
      )}

      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'left', marginBottom: '1rem' }}>{cur.desc}</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <button onClick={() => setStep(s => Math.max(0, s - 1))} disabled={step === 0} style={stepBtnStyle(step === 0)}>← Anterior</button>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Passo {step + 1} de {steps.length}</span>
        <button onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))} disabled={step === steps.length - 1} style={stepBtnStyle(step === steps.length - 1)}>Seguinte →</button>
      </div>

    </div>
  );
};

// === Interactive component: click a weight, see its gradient ===
const wgNodes = [...nnNodes, nnLossNode].map(n => ({ ...n, value: wgNodeValues[n.id] ?? n.value }));

const WeightGradientExplorer = () => {
  const [selected, setSelected] = useState('h10-h20');
  const cur = wgEdgeData[selected];
  const nodeById = (id) => wgNodes.find(n => n.id === id);

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
        Explorador: clique num peso para ver o seu gradiente
      </p>

      <svg viewBox="0 0 720 320" style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="wgArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
          </marker>
        </defs>

        {/* All edges; weight edges are clickable */}
        {nnAllEdges.map(([from, to], i) => {
          const key = `${from}-${to}`;
          const isWeight = !!wgEdgeData[key];
          const isSelected = key === selected;
          const a = nodeById(from), b = nodeById(to);
          return (
            <g key={i}>
              {isWeight && (
                <line
                  x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                  stroke="#000" strokeOpacity="0" strokeWidth="14"
                  pointerEvents="stroke"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelected(key)}
                />
              )}
              <line
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke={isSelected ? '#4a9eed' : (isWeight ? color : 'var(--card-border)')}
                strokeWidth={isSelected ? 3.5 : (isWeight ? 1.5 : 1)}
                opacity={isWeight ? 1 : 0.35}
                markerEnd="url(#wgArrow)"
                pointerEvents="none"
              />
            </g>
          );
        })}

        {/* Nodes */}
        {wgNodes.map(n => {
          const isLoss = n.id === 'L';
          return (
            <g key={n.id}>
              <circle cx={n.x} cy={n.y} r={isLoss ? 24 : 22} fill="var(--bg-primary)" stroke={isLoss ? '#4a9eed' : color} strokeWidth="1.5" />
              <text x={n.x} y={n.y - 1} textAnchor="middle" fill={isLoss ? '#4a9eed' : 'var(--text-primary)'} fontSize="12" fontWeight="700">{n.label}</text>
              <text x={n.x} y={n.y + 12} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{n.value}</text>
            </g>
          );
        })}

        {/* Target value next to L */}
        <text x="670" y="200" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">(y_alvo = 1)</text>

        {/* Layer captions */}
        <text x="60" y="300" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">entrada (2)</text>
        <text x="250" y="300" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">escondida 1 (3)</text>
        <text x="440" y="300" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">escondida 2 (3)</text>
        <text x="600" y="300" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">saída (1)</text>
        <text x="670" y="300" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">perda</text>
      </svg>

      <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
        Clique em qualquer linha a {' '}<strong style={{ color }}>azul</strong> (um peso) — fica a {' '}
        <strong style={{ color: '#4a9eed' }}>laranja</strong> e a caixa abaixo mostra a <strong>regra da
        cadeia</strong> que dá o gradiente desse peso, decompondo <InlineMath math="\partial L/\partial w" /> nos
        gradientes locais de cada operação que está entre esse peso e a perda.
      </p>

      <div style={{ ...S.highlight, textAlign: 'left', marginTop: '0.75rem', borderColor: '#4a9eed' }}>
        <p style={{ ...S.p, marginBottom: '0.5rem', fontWeight: 700 }}>
          Peso seleccionado: <InlineMath math={cur.tex} />
        </p>
        <div style={{ ...S.math, margin: '0.5rem 0' }}>
          <BlockMath math={cur.chain} />
        </div>
      </div>
    </div>
  );
};

// === Diagram: loss landscape & gradient descent direction ===
const LossLandscapeDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
      Da derivada à actualização: o gradiente como "bússola" na loss landscape
    </p>
    <svg viewBox="0 0 480 240" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="llArrowUp" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
        </marker>
        <marker id="llArrowDown" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
        </marker>
      </defs>

      {/* Loss curve: a valley */}
      <path d="M 30 60 C 110 30, 160 170, 240 175 C 320 170, 370 30, 450 60"
        fill="none" stroke={color} strokeWidth="2.5" />

      {/* Minimum marker */}
      <circle cx="240" cy="175" r="5" fill="#4a9eed" />
      <text x="240" y="202" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">mínimo (loss baixa)</text>

      {/* Left point: negative slope (loss decreasing to the right) */}
      <circle cx="120" cy="100" r="6" fill="#0284c7" />
      <line x1="120" y1="100" x2="92" y2="58" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#llArrowUp)" />
      <text x="60" y="50" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">∇L aponta p/ cima</text>
      <line x1="120" y1="100" x2="158" y2="142" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#llArrowDown)" />
      <text x="180" y="118" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">passo: -η∇L</text>

      {/* Right point: positive slope (loss increasing to the right) */}
      <circle cx="360" cy="100" r="6" fill="#0284c7" />
      <line x1="360" y1="100" x2="392" y2="56" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#llArrowUp)" />
      <text x="412" y="48" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">∇L aponta p/ cima</text>
      <line x1="360" y1="100" x2="320" y2="144" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#llArrowDown)" />
      <text x="300" y="118" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">passo: -η∇L</text>

      <text x="35" y="75" fill="var(--text-secondary)" fontSize="10">loss alta</text>
      <text x="445" y="75" textAnchor="end" fill="var(--text-secondary)" fontSize="10">loss alta</text>

      {/* Axis labels, explicit about what each axis is */}
      <line x1="15" y1="205" x2="15" y2="15" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#llArrowDown)" />
      <text x="10" y="12" textAnchor="start" fill="var(--text-secondary)" fontSize="10" fontWeight="700">eixo vertical: L (loss)</text>
      <line x1="15" y1="215" x2="465" y2="215" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="240" y="233" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="700">eixo horizontal: valor de UM peso wᵢ (todos os outros pesos mantidos fixos)</text>

      {/* Dimensionality note box */}
      <rect x="280" y="10" width="190" height="40" rx="6" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="375" y="25" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="700">Se a rede tem n pesos:</text>
      <text x="375" y="38" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">espaço real tem n+1 eixos.</text>
      <text x="375" y="48" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Este gráfico é só 1 corte (n=1).</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      Cada gradiente que calculámos nos exemplos acima (<InlineMath math="\partial L/\partial w" />) é, geometricamente,
      a <strong>inclinação da loss landscape</strong> na direcção desse peso: indica para que lado a perda <em>aumenta</em>
      mais depressa se aumentarmos ligeiramente esse peso. No ponto laranja à esquerda do mínimo, a inclinação aponta
      "para cima" no sentido de <InlineMath math="w" /> crescente — ou seja, <InlineMath math="\partial L/\partial w < 0" /> significaria
      que <em>diminuir</em> w aumenta a loss, e aumentar w a diminui. No ponto à direita do mínimo acontece o oposto.
      Em ambos os casos, o algoritmo de <strong>gradiente descendente</strong> dá um passo na direcção <em>oposta</em> ao
      gradiente — <InlineMath math="w \leftarrow w - \eta \cdot \partial L/\partial w" /> — porque é essa a direcção que
      faz a loss <em>descer</em>. É exactamente este sinal (positivo ou negativo) e esta magnitude que o backward pass
      calcula para cada parâmetro: o gradiente não diz "qual é o valor certo do peso", diz apenas "para que lado, e com
      que intensidade, mexer agora".
    </p>
    <div style={S.note}>
      <strong>Sobre os eixos:</strong> se a rede tem <InlineMath math="n" /> pesos, a loss landscape "real" vive
      num espaço de <InlineMath math="n+1" /> dimensões — um eixo por peso, mais um eixo para <InlineMath math="L" />.
      O gráfico acima mostra apenas um <strong>corte 1D</strong>: fixa todos os pesos excepto um (<InlineMath math="w_i" />)
      e desenha como <InlineMath math="L" /> varia só com esse peso. O <strong>gradiente completo</strong>
      <InlineMath math="\ \nabla L = \left(\frac{\partial L}{\partial w_1}, \dots, \frac{\partial L}{\partial w_n}\right)" />
      é um vector com uma componente por peso — o gradient descent dá um passo nesse espaço de
      <InlineMath math="n" /> dimensões de uma só vez, não um eixo de cada vez. Imagens de "paisagens" com vários
      vales que vês frequentemente para redes grandes são cortes 2D (dois pesos fixos variáveis, todos os outros
      constantes) ou projecções ao longo de direcções escolhidas (ex.: PCA sobre a trajectória do treino) —
      nunca o espaço completo, que é demasiado grande para visualizar.
    </div>
  </div>
);

export default function DL2() {
  return (
    <div style={S.page}>
      <Link to="/dl" style={S.back}><ArrowLeft size={16} /> Voltar a Deep Learning</Link>

      <div style={S.tag}>MÓDULO 02</div>
      <h1 style={S.h1}>Backpropagation</h1>

      {/* === SECTION 1: Backpropagation summary === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Backpropagation</h2>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>O que é, afinal, o backpropagation?</strong> É o algoritmo que calcula, para cada peso da
            rede, o gradiente da perda em relação a esse peso — <InlineMath math="\partial L/\partial w" /> —
            ou seja, "se eu aumentar este peso um bocadinho, a perda sobe ou desce, e com que intensidade?".
            Sem esses gradientes não há como saber em que direcção ajustar cada um dos milhares (ou milhões)
            de pesos da rede para que ela erre menos. O que torna o backpropagation eficiente — em vez de
            calcular cada uma destas derivadas do zero — é <strong>reaproveitar trabalho</strong>: percorre-se
            a rede uma vez da entrada para a saída (forward pass), guardando os valores intermédios, e depois
            uma vez da saída para a entrada (backward pass), aplicando repetidamente a regra da cadeia e
            reutilizando os gradientes já calculados nas camadas mais próximas da saída para obter os das
            camadas anteriores. É essa "uma única passagem para trás calcula tudo" que torna o treino de redes
            profundas computacionalmente viável.
          </p>
        <p style={S.p}>
          O treino de uma rede, para cada exemplo (ou batch), repete duas fases complementares:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: `1px solid ${color}30` }}>
            <div style={{ fontWeight: 700, color, marginBottom: '0.4rem' }}>Forward pass</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Percorre a rede da entrada para a saída, calculando o valor de cada neurónio. Crucialmente,
              <strong> guarda esses valores intermédios em memória</strong> — vão ser precisos no backward pass.
            </p>
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: '1px solid #ef444430' }}>
            <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.4rem' }}>Backward pass</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Percorre a rede da saída para a entrada, aplicando a regra da cadeia repetidamente para calcular
              quanto cada peso contribuiu para a perda — ou seja, os <strong>gradientes</strong>.
            </p>
          </div>
        </div>

      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Chain Rule === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. A Regra da Cadeia ao Longo de Camadas</h2>
        <p style={S.p}>
          A regra da cadeia diz-nos como diferenciar uma função composta:
        </p>
        <div style={S.math}>
          <BlockMath math={`\\frac{\\partial L}{\\partial x} = \\frac{\\partial L}{\\partial y} \\cdot \\frac{\\partial y}{\\partial x}`} />
        </div>
        <p style={S.p}>
          Numa rede com várias camadas, a perda <InlineMath math="L" /> depende de <InlineMath math="x" /> através
          de uma longa cadeia de transformações intermédias. A derivada total é simplesmente o <strong>produto
          de todas as derivadas locais</strong> ao longo do caminho:
        </p>
        <div style={S.math}>
          <BlockMath math={`\\frac{\\partial L}{\\partial x} = \\frac{\\partial L}{\\partial h_3} \\cdot \\frac{\\partial h_3}{\\partial h_2} \\cdot \\frac{\\partial h_2}{\\partial h_1} \\cdot \\frac{\\partial h_1}{\\partial x}`} />
        </div>
        <p style={S.p}>
          Cada nó do grafo só precisa de saber calcular o seu próprio <strong>gradiente local</strong> — a derivada
          da sua saída em relação às suas entradas, dado o valor que recebeu no forward pass. O algoritmo de
          backpropagation multiplica este gradiente local pelo <strong>gradiente upstream</strong> (o que chega
          de "cima", da direcção da saída) e passa o resultado para trás.
        </p>

        <h3 style={S.h3}>Para que servem estes gradientes? A loss landscape</h3>
        <p style={S.p}>
          Calcular <InlineMath math="\partial L/\partial x" /> é só metade da história. Na prática, o que mais
          interessa são os gradientes em relação aos <strong>pesos</strong> da rede — porque são esses que o
          optimizador vai ajustar. O diagrama seguinte liga este cálculo a uma intuição geométrica que vamos reutilizar
          ao longo do curso:
        </p>
        <LossLandscapeDiagram />

        <h3 style={S.h3}>Derivadas locais das activações mais comuns</h3>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Activação</th><th style={S.th}>Fórmula</th><th style={S.th}>Derivada</th><th style={S.th}>Comportamento do gradiente local</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>ReLU</td>
              <td style={S.td}><InlineMath math="\max(0,x)" /></td>
              <td style={S.td}><InlineMath math="1 \text{ se } x&gt;0,\ 0 \text{ caso contrário}" /></td>
              <td style={S.td}>Ou passa o gradiente integralmente, ou bloqueia-o por completo ("neurónio morto")</td>
            </tr>
            <tr>
              <td style={S.td}>Sigmoid</td>
              <td style={S.td}><InlineMath math="\sigma(x)=\frac{1}{1+e^{-x}}" /></td>
              <td style={S.td}><InlineMath math="\sigma(x)(1-\sigma(x))" /></td>
              <td style={S.td}>Máximo de 0.25 em <InlineMath math="x=0" />; satura perto de 0 nos extremos</td>
            </tr>
            <tr>
              <td style={S.td}>Tanh</td>
              <td style={S.td}><InlineMath math="\tanh(x)" /></td>
              <td style={S.td}><InlineMath math="1-\tanh^2(x)" /></td>
              <td style={S.td}>Máximo de 1 em <InlineMath math="x=0" />, mas ainda satura nos extremos</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Vanishing/Exploding === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Vanishing &amp; Exploding Gradients</h2>
        <p style={S.p}>
          A secção anterior mostrou que o gradiente que chega a uma camada inicial é o <strong>produto de
          muitos factores</strong> — um por cada camada entre essa camada e a saída. Esta multiplicação em
          cadeia tem uma consequência directa e quase inevitável em redes profundas:
        </p>
        <div style={S.math}>
          <BlockMath math={`\\frac{\\partial L}{\\partial h_0} = \\underbrace{g_n \\cdot g_{n-1} \\cdots g_2 \\cdot g_1}_{n \\text{ factores}}`} />
        </div>
        <p style={S.p}>
          Se cada factor <InlineMath math="g_i" /> tiver, em média, magnitude inferior a 1, o produto encolhe
          exponencialmente com <InlineMath math="n" /> — o gradiente <strong>desaparece</strong> (vanishing).
          As camadas mais próximas da entrada recebem um sinal de gradiente quase nulo e, na prática,
          deixam de aprender. Se cada factor tiver magnitude superior a 1, o produto cresce exponencialmente —
          o gradiente <strong>explode</strong>, e as actualizações de peso tornam-se instáveis (perdas a "NaN",
          oscilações violentas).
        </p>

        <VanishingExplodingDiagram />

        <h3 style={S.h3}>Porque a sigmoid é especialmente problemática</h3>
        <p style={S.p}>
          A derivada da sigmoid tem um máximo de <InlineMath math="0.25" /> (atingido apenas em
          <InlineMath math=" x=0" />; nos extremos tende para 0). Numa rede com 10 camadas sigmoid, mesmo no
          melhor caso o gradiente é multiplicado por <InlineMath math="0.25" /> dez vezes:
        </p>
        <div style={S.math}>
          <BlockMath math={`0.25^{10} \\approx 0.00000095`} />
        </div>
        <p style={S.p}>
          Ou seja, o gradiente que chega à primeira camada é cerca de um milhão de vezes menor do que o que
          saiu da última — efectivamente zero. Esta foi uma das razões históricas que travou o treino de redes
          muito profundas até meados dos anos 2010.
        </p>

        <h3 style={S.h3}>Soluções — uma ponte para módulos seguintes</h3>
        <p style={S.p}>
          Este fenómeno não se resolve com "um truque" isolado, mas sim com um conjunto de técnicas que actuam
          em pontos diferentes do problema — e que serão aprofundadas em módulos dedicados a inicialização,
          normalização e arquitecturas:
        </p>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Técnica</th><th style={S.th}>Onde actua</th><th style={S.th}>Ideia central</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Escolha de activação</strong></td>
              <td style={S.td}>Gradiente local de cada nó</td>
              <td style={S.td}>ReLU tem derivada 1 (não satura) na região activa, evitando o factor &lt; 1 da sigmoid/tanh</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Inicialização cuidada dos pesos</strong></td>
              <td style={S.td}>Magnitude inicial dos factores <InlineMath math="g_i" /></td>
              <td style={S.td}>Escolher a escala dos pesos de forma a que a variância das activações (e gradientes) se mantenha estável camada a camada</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Normalização (Batch/Layer Norm)</strong></td>
              <td style={S.td}>Distribuição das activações entre camadas</td>
              <td style={S.td}>Re-centra e re-escala as activações em cada camada, mantendo os gradientes numa gama saudável</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Conexões residuais (skip connections)</strong></td>
              <td style={S.td}>Estrutura do grafo de computação</td>
              <td style={S.td}>Criam um "atalho" de gradiente com factor 1, garantindo que o produto nunca colapsa totalmente a zero</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Gradient clipping</strong></td>
              <td style={S.td}>Magnitude do gradiente após o backward</td>
              <td style={S.td}>Limita a norma do gradiente a um valor máximo antes da actualização — trata sobretudo a explosão</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Repare como todas estas soluções atacam o mesmo produto de factores da regra da cadeia — apenas em
          pontos diferentes da cadeia. Esta lente unificadora (a cadeia de multiplicações) vai reaparecer
          sempre que estudarmos por que uma arquitectura "treina bem" ou "não treina".
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: Worked example, full 2-layer network === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Exemplo Completo: Rede de 2 Camadas</h2>
        <p style={S.p}>
          Vamos agora juntar tudo num único exemplo numérico completo: uma rede com 2 entradas, duas camadas
          escondidas de 3 neurónios cada e 1 saída (notação <InlineMath math="2 \to 3 \to 3 \to 1" />). Explore
          o forward e o backward pass camada a camada, com valores numéricos reais — repare como cada gradiente
          de peso é o produto da <strong>activação que entrou</strong> nesse peso pelo <strong>gradiente que sai</strong>
          dessa camada, e como esse gradiente se propaga para a camada anterior:
        </p>
        <NeuralNetStepper />
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: Click-a-weight gradient explorer === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Explorador de Pesos e Gradientes</h2>
        <p style={S.p}>
          Uma rede com a mesma arquitectura <InlineMath math="2 \to 3 \to 3 \to 1" />, onde pode
          clicar em qualquer peso individual e ver a <strong>regra da cadeia</strong> que dá o gradiente
          desse peso — a sequência de gradientes locais, desde a perda até ao peso, que o backward pass
          multiplica entre si.
        </p>
        <WeightGradientExplorer />
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Computation Graphs === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Grafos de Computação</h2>
        <p style={S.p}>
          Para fechar o módulo, formalizamos a ideia que tem estado por trás de tudo: qualquer expressão
          matemática — por mais complexa — pode ser decomposta numa sequência de operações elementares (somas,
          produtos, funções não-lineares). Um <strong>grafo de computação</strong> torna essa decomposição
          explícita: cada <em>nó</em> representa uma operação, e cada <em>aresta</em> transporta o valor
          (tensor) que flui de um nó para o seguinte. Esta representação é o que permite a uma rede neuronal —
          uma cadeia gigantesca de multiplicações de matrizes e activações — ser diferenciada de forma
          sistemática e automática.
        </p>

        <ComputationGraphDiagram />

        <h3 style={S.h3}>Por que guardar valores intermédios?</h3>
        <p style={S.p}>
          No exemplo acima, para calcular <InlineMath math="\partial z/\partial w = a" /> precisamos do valor
          de <InlineMath math="a" /> que foi calculado no forward pass. Sem o guardar, teríamos de recalcular
          todo o sub-grafo que o produz — desperdiçando trabalho. Esta troca (memória por velocidade) é uma
          das razões pelas quais o treino de redes profundas consome tanta memória de GPU: cada activação
          intermédia de cada camada tem de permanecer acessível até o backward pass terminar.
        </p>
        <div style={S.note}>
          Técnicas como <strong>gradient checkpointing</strong> (recompute em vez de armazenar) trocam memória
          por tempo de computação extra — útil quando o modelo é tão grande que nem todas as activações cabem
          em memória.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 7: Autograd === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Autograd: Diferenciação Automática</h2>
        <p style={S.p}>
          Calcular gradientes manualmente para uma rede com milhões de parâmetros seria impraticável. Os
          frameworks modernos de deep learning resolvem isto com motores de <strong>diferenciação automática
          (autograd)</strong>. A ideia central, independente da framework concreta, assenta em três princípios:
        </p>

        <AutogradDiagram />

        <h3 style={S.h3}>Grafo dinâmico vs. estático</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: `1px solid ${color}30` }}>
            <div style={{ fontWeight: 700, color, marginBottom: '0.4rem' }}>Define-by-run (dinâmico)</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              O grafo é construído operação a operação, à medida que o código corre. Permite usar estruturas
              de controlo normais (loops com número de iterações variável, condicionais dependentes dos dados).
              Mais intuitivo para depurar — o grafo "é" simplesmente o caminho que o programa seguiu.
            </p>
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: '1px solid var(--card-border)' }}>
            <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>Define-and-run (estático)</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              O grafo completo é definido antes de qualquer execução, depois "compilado" e executado
              repetidamente com dados diferentes. Pode ser optimizado globalmente antes de correr, mas é
              menos flexível e mais difícil de depurar.
            </p>
          </div>
        </div>

        <h3 style={S.h3}>Gradient accumulation: porque "limpar gradientes" importa</h3>
        <p style={S.p}>
          Quando processamos um lote (batch) de exemplos, cada exemplo gera o seu próprio conjunto de
          gradientes locais para os mesmos parâmetros partilhados. O motor de autograd <strong>soma</strong> (acumula)
          esses gradientes no mesmo "depósito" associado a cada parâmetro:
        </p>
        <div style={S.math}>
          <BlockMath math={`\\nabla_W L_{\\text{batch}} = \\sum_{i=1}^{N} \\nabla_W L_i`} />
        </div>
        <p style={S.p}>
          Este comportamento por defeito tem duas implicações práticas importantes:
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li>
            Antes de processar um novo batch, é necessário <strong>esvaziar o depósito</strong> de gradientes —
            caso contrário, os gradientes do batch anterior continuam a somar-se aos novos, distorcendo a
            actualização.
          </li>
          <li>
            Por outro lado, esta acumulação pode ser usada <strong>deliberadamente</strong>: ao processar vários
            mini-batches pequenos sem limpar o depósito entre eles, e só depois actualizar os pesos, simula-se
            o efeito de um batch maior — útil quando a memória da GPU não permite batches grandes de uma vez
            (técnica conhecida como <em>gradient accumulation</em>).
          </li>
        </ul>

        <h3 style={S.h3}>"Desligar" partes do grafo</h3>
        <p style={S.p}>
          Nem todos os tensores precisam de gradiente. Targets/labels, dados de validação, ou ramos do modelo
          que queremos manter fixos (ex.: uma rede pré-treinada usada apenas como extractor de features) podem
          ser explicitamente excluídos do grafo de computação. Isto poupa memória (não há valores intermédios
          para guardar) e tempo (não há backward pass a calcular para esses ramos) — um detalhe simples mas
          com grande impacto no consumo de recursos durante inferência ou fine-tuning parcial.
        </p>
      </div>

      <hr style={S.divider} />

      {/* === Synthesis === */}
      

    </div>
  );
}
