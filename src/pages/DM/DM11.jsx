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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(249,115,22,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0' },
};

// === Diagram: SOM architecture — input fully connected to 2D grid ===
const SOMArchitectureDiagram = () => {
  const gridCols = 5, gridRows = 4, cell = 36, gx0 = 280, gy0 = 30;
  const inputs = ['x₁', 'x₂', 'x₃', 'x₄'];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Arquitetura SOM — Input Totalmente Ligado a uma Grelha 2D</p>
      <svg viewBox="0 0 520 220" style={{ maxWidth: '100%', height: 'auto' }}>
        {inputs.map((label, i) => {
          const y = 25 + i * 50;
          return (
            <g key={label}>
              <circle cx="40" cy={y} r="16" fill={`${color}15`} stroke={color} strokeWidth="1.5" />
              <text x="40" y={y + 4} textAnchor="middle" fill={color} fontSize="11" fontWeight="700">{label}</text>
              {Array.from({ length: gridRows }, (_, r) => Array.from({ length: gridCols }, (_, c) => (
                <line key={`${i}-${r}-${c}`} x1={56} y1={y} x2={gx0 + c * cell + cell / 2} y2={gy0 + r * cell + cell / 2} stroke="var(--text-secondary)" strokeWidth="0.4" opacity="0.35" />
              )))}
            </g>
          );
        })}
        {Array.from({ length: gridRows }, (_, r) => Array.from({ length: gridCols }, (_, c) => {
          const cx = gx0 + c * cell, cy = gy0 + r * cell;
          const isBMU = r === 1 && c === 3;
          return (
            <g key={`${r}-${c}`}>
              <rect x={cx} y={cy} width={cell} height={cell} fill={isBMU ? '#f9731625' : 'var(--bg-primary)'} stroke={isBMU ? '#f97316' : 'var(--card-border)'} strokeWidth={isBMU ? 2.5 : 1} />
              <circle cx={cx + cell / 2} cy={cy + cell / 2} r="3" fill={isBMU ? '#f97316' : color} opacity={isBMU ? 1 : 0.6} />
            </g>
          );
        }))}
        <text x={gx0 + (gridCols * cell) / 2} y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="700">Grelha 2D de neurónios (mapa)</text>
        <text x="40" y="200" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="700">Vetor de input x</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Cada vetor de input <InlineMath math="x \in \mathbb{R}^d" /> está <strong>totalmente ligado</strong> a todos
        os neurónios da grelha 2D. Cada neurónio <InlineMath math="i" /> da grelha possui o seu próprio
        <strong> vetor de pesos</strong> <InlineMath math="w_i \in \mathbb{R}^d" />, com a <strong>mesma dimensão</strong> que
        o vetor de input — não há camadas intermédias. O neurónio cujo vetor de pesos está mais próximo de
        <InlineMath math="x" /> (destacado em verde) é a <strong>Best Matching Unit (BMU)</strong> para esse input.
      </p>
    </div>
  );
};

// === Diagram: training over iterations — BMU + shrinking neighborhood ===
const SOMTrainingDiagram = () => {
  const cell = 30, cols = 7, rows = 5, x0 = 10, y0 = 10;
  const bmuC = 3, bmuR = 2;
  const iterations = [
    { label: 't = 0 (início)', radius: 2.6, eta: 'η alto' },
    { label: 't = T/2 (meio)', radius: 1.5, eta: 'η médio' },
    { label: 't = T (fim)', radius: 0.6, eta: 'η baixo' },
  ];
  const gridW = cols * cell, gridH = rows * cell;
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Evolução da Vizinhança do BMU ao Longo do Treino</p>
      <svg viewBox={`0 0 ${(gridW + 30) * 3} ${gridH + 50}`} style={{ maxWidth: '100%', height: 'auto' }}>
        {iterations.map(({ label, radius, eta }, gi) => {
          const ox = gi * (gridW + 30) + 10;
          const cx = ox + bmuC * cell + cell / 2;
          const cy = y0 + bmuR * cell + cell / 2;
          return (
            <g key={gi}>
              {Array.from({ length: rows }, (_, r) => Array.from({ length: cols }, (_, c) => {
                const px = ox + c * cell, py = y0 + r * cell;
                const dist = Math.sqrt((c - bmuC) ** 2 + (r - bmuR) ** 2);
                const isBMU = c === bmuC && r === bmuR;
                const inNeighborhood = dist <= radius;
                return (
                  <rect key={`${r}-${c}`} x={px} y={py} width={cell} height={cell}
                    fill={isBMU ? '#f9731635' : inNeighborhood ? `${color}20` : 'var(--bg-primary)'}
                    stroke="var(--text-secondary)" strokeWidth="0.6" />
                );
              }))}
              <circle cx={cx} cy={cy} r={radius * cell} fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4,3" />
              <circle cx={cx} cy={cy} r="4" fill="#f97316" />
              <text x={ox + gridW / 2} y={y0 + gridH + 16} textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="700">{label}</text>
              <text x={ox + gridW / 2} y={y0 + gridH + 30} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">{eta}, raio σ(t) = {radius.toFixed(1)}</text>
            </g>
          );
        })}
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        No início do treino, o <strong>raio de vizinhança</strong> <InlineMath math="\sigma(t)" /> é grande — a BMU
        (em verde) e uma vasta região em torno dela são atualizadas em direção ao input. À medida que o tempo
        avança, <InlineMath math="\sigma(t)" /> e a <strong>taxa de aprendizagem</strong> <InlineMath math="\eta(t)" />
        decaem (tipicamente de forma exponencial), até que apenas a BMU (e talvez os vizinhos imediatos) são
        ajustados com passos muito pequenos. Esta redução progressiva é o que permite ao mapa primeiro
        "desenrolar-se" globalmente e depois afinar-se localmente.
      </p>
    </div>
  );
};

// === Diagram: U-Matrix heatmap ===
const UMatrixDiagram = () => {
  const cols = 6, rows = 5, cell = 22, x0 = 10, y0 = 10;
  const values = [
    [0.1, 0.15, 0.2, 0.8, 0.2, 0.15],
    [0.12, 0.1, 0.25, 0.85, 0.18, 0.1],
    [0.3, 0.35, 0.4, 0.9, 0.3, 0.25],
    [0.15, 0.2, 0.22, 0.75, 0.15, 0.12],
    [0.1, 0.18, 0.2, 0.8, 0.22, 0.1],
  ];
  const colorFor = (v) => {
    // low distance = light orange, high distance = deep orange/brown
    const r = Math.round(249 - v * 60);
    const g = Math.round(115 - v * 90);
    const b = Math.round(22 - v * 10);
    return `rgba(${r},${g},${b},${0.15 + v * 0.85})`;
  };
  return (
    <div style={{ ...S.diagram, display: 'inline-block', width: 'auto' }}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>U-Matrix — Distâncias entre Pesos de Neurónios Adjacentes</p>
      <svg viewBox={`0 0 ${cols * cell + 20} ${rows * cell + 36}`} style={{ maxWidth: 200, height: 'auto', display: 'block', margin: '0 auto' }}>
        {values.map((row, r) => row.map((v, c) => (
          <g key={`${r}-${c}`}>
            <rect x={x0 + c * cell} y={y0 + r * cell} width={cell} height={cell} fill={colorFor(v)} stroke="var(--bg-primary)" strokeWidth="1" />
          </g>
        )))}
        <text x={x0 + cols * cell / 2} y={y0 + rows * cell + 20} textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontStyle="italic">
          coluna escura = fronteira entre dois clusters
        </text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        A <strong>U-Matrix</strong> (Unified Distance Matrix) atribui a cada par de neurónios adjacentes na grelha
        um valor igual à <strong>distância entre os seus vetores de pesos</strong> no espaço original
        <InlineMath math="\mathbb{R}^d" />: <InlineMath math="u_{i,j} = \lVert w_i - w_j \rVert" />. Células
        <strong> claras</strong> indicam neurónios vizinhos com pesos muito semelhantes — tipicamente o
        <strong> interior de um cluster</strong>, onde o mapa varia suavemente. Células <strong>escuras</strong>
        (valores altos de distância) indicam <strong>saltos abruptos</strong> nos pesos — fronteiras entre
        clusters distintos, como a coluna escura no exemplo acima, que separa duas regiões "planas" (claras) à
        esquerda e à direita.
      </p>
    </div>
  );
};

// === Diagram: Component Planes ===
const ComponentPlanesDiagram = () => {
  const cols = 6, rows = 5, cell = 30, gap = 14;
  const planes = [
    { label: 'Idade', c: '#f97316', pattern: (r, c) => (c / 5) },
    { label: 'Rendimento', c: '#f97316', pattern: (r, c) => (r / 4) },
    { label: 'Nº Compras', c: '#f97316', pattern: (r, c) => Math.abs((c - 2.5) / 2.5) },
  ];
  const colorFor = (v, base) => `color-mix(in srgb, ${base} ${20 + v * 60}%, var(--bg-primary))`;
  const planeW = cols * cell;
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Component Planes — Um Heatmap por Feature</p>
      <svg viewBox={`0 0 ${planes.length * (planeW + gap) + gap} ${rows * cell + 40}`} style={{ maxWidth: '100%', height: 'auto' }}>
        {planes.map((plane, pi) => {
          const ox = pi * (planeW + gap) + gap / 2;
          return (
            <g key={plane.label}>
              {Array.from({ length: rows }, (_, r) => Array.from({ length: cols }, (_, c) => (
                <rect key={`${r}-${c}`} x={ox + c * cell} y={20 + r * cell} width={cell} height={cell}
                  fill={colorFor(plane.pattern(r, c), plane.c)} stroke="var(--bg-primary)" strokeWidth="1.2" />
              )))}
              <text x={ox + planeW / 2} y="12" textAnchor="middle" fill={plane.c} fontSize="10.5" fontWeight="700">{plane.label}</text>
            </g>
          );
        })}
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Enquanto a U-Matrix mostra a <strong>distância global</strong> entre neurónios, os <strong>component
        planes</strong> mostram, para a <strong>mesma grelha</strong> (todos os planos partilham a mesma
        topologia), como varia o valor de <strong>uma única feature</strong> do vetor de pesos em cada neurónio
        — um plano por feature. Sobrepondo visualmente os planos, é possível identificar quais features variam
        em conjunto (regiões claras/escuras coincidentes) — por exemplo, se "Idade" e "Rendimento" tiverem padrões
        semelhantes na grelha, isso sugere que estas duas variáveis estão correlacionadas e que certas regiões do
        mapa correspondem a clientes mais velhos <em>e</em> com rendimentos mais altos.
      </p>
    </div>
  );
};


export default function DM11() {
  return (
    <div style={S.page}>
      <Link to="/dm" style={S.back}><ArrowLeft size={16} /> Voltar a Data Mining</Link>
      <div style={S.tag}>MÓDULO 07</div>
      <h1 style={S.h1}>Self-Organizing Maps (SOM)</h1>
      <p style={S.lead}>
        Self-Organizing Maps são redes neuronais não supervisionadas que projetam dados de alta dimensão
        numa grelha 2D, preservando a topologia (relações de vizinhança) do espaço original — funcionando
        simultaneamente como técnica de <strong>clustering</strong> e de <strong>visualização</strong>.
        Neste módulo cobrimos a arquitetura, o algoritmo de treino (BMU, atualização de vizinhança),
        e as ferramentas de interpretação: U-Matrix (fronteiras de clusters) e component planes (papel de cada feature).
      </p>

      {/* === SECTION 1: Arquitetura do SOM === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Arquitetura do SOM</h2>
        <p style={S.p}>
          Um Self-Organizing Map é composto por duas camadas: uma <strong>camada de input</strong>, com tantos
          nós quanto o número de features <InlineMath math="d" /> de cada exemplo, e uma <strong>grelha 2D de
          neurónios</strong> (tipicamente retangular ou hexagonal), onde cada neurónio <InlineMath math="i" />
          tem associado um <strong>vetor de pesos</strong> <InlineMath math="w_i \in \mathbb{R}^d" /> — com a
          mesma dimensionalidade que os dados de entrada.
        </p>
        <SOMArchitectureDiagram />
        <p style={S.p}>
          Note a diferença fundamental em relação a uma rede neuronal feedforward "clássica": não há funções de
          ativação não-lineares nem retropropagação de erro. A "aprendizagem" do SOM consiste, simplesmente,
          em ajustar iterativamente os vetores de pesos <InlineMath math="w_i" /> de forma a que a grelha, no
          seu conjunto, passe a representar bem a <strong>distribuição</strong> dos dados de treino — e que
          neurónios <strong>próximos na grelha</strong> tenham vetores de pesos <strong>próximos no espaço
          original</strong>. Esta segunda propriedade — <strong>preservação de topologia</strong> — é o que
          distingue o SOM de um simples clustering.
        </p>
        <div style={S.note}>
          Antes do treino, os vetores de pesos <InlineMath math="w_i" /> são inicializados — aleatoriamente, ou
          (preferível, para convergência mais rápida) ao longo dos dois primeiros componentes principais (PCA)
          dos dados, distribuindo a grelha inicial pela direção de maior variância.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Algoritmo de treino === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Algoritmo de Treino: BMU e Atualização de Vizinhança</h2>
        <p style={S.p}>
          O treino do SOM é <strong>competitivo e iterativo</strong>. Em cada iteração, é selecionado
          (aleatoriamente, ou em sequência) um vetor de input <InlineMath math="x" /> do conjunto de treino, e
          os neurónios da grelha "competem" para ver qual representa melhor esse input.
        </p>
        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Algoritmo SOM — passo a passo</p>
          {[
            ['1', 'Inicializar', 'Vetores de pesos wᵢ de cada neurónio inicializados aleatoriamente (ou por PCA)'],
            ['2', 'Selecionar amostra', 'Escolher (aleatoriamente) um vetor x do dataset'],
            ['3', 'Best Matching Unit (BMU)', 'Encontrar o neurónio cujo vetor de pesos está mais próximo de x'],
            ['4', 'Atualizar vizinhança', 'Mover o BMU e os seus vizinhos (dentro do raio σ(t)) em direção a x'],
            ['5', 'Decair parâmetros', 'Reduzir a taxa de aprendizagem η(t) e o raio de vizinhança σ(t)'],
            ['6', 'Repetir', 'Até convergência ou número máximo de iterações T'],
          ].map(([n, t, d]) => (
            <div key={n} style={{ display: 'flex', gap: '1rem', marginBottom: '0.6rem', alignItems: 'flex-start' }}>
              <div style={{ background: color, color: 'white', borderRadius: '50%', width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>{n}</div>
              <div><span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.88rem' }}>{t}: </span><span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{d}</span></div>
            </div>
          ))}
        </div>

        <h3 style={S.h3}>2.1 Encontrar a BMU</h3>
        <p style={S.p}>
          A Best Matching Unit é o neurónio cujo vetor de pesos minimiza a distância euclidiana ao input atual:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{BMU}(x) = \arg\min_i \lVert x - w_i \rVert" />
        </div>

        <h3 style={S.h3}>2.2 Atualizar os pesos</h3>
        <p style={S.p}>
          A BMU e os neurónios na sua vizinhança são "puxados" em direção a <InlineMath math="x" />, com uma
          intensidade que depende da taxa de aprendizagem e da distância (na grelha) ao BMU:
        </p>
        <div style={S.math}>
          <BlockMath math="w_i(t+1) = w_i(t) + \eta(t) \cdot h(\text{BMU}, i, t) \cdot \big(x - w_i(t)\big)" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="\eta(t)" /> é a <strong>taxa de aprendizagem</strong> (decrescente no tempo) e
          <InlineMath math="h(\text{BMU}, i, t)" /> é a <strong>função de vizinhança</strong> — tipicamente
          gaussiana, decaindo com a distância na grelha entre o neurónio <InlineMath math="i" /> e a BMU:
        </p>
        <div style={S.math}>
          <BlockMath math="h(\text{BMU}, i, t) = \exp\left(-\frac{d_{grid}(\text{BMU}, i)^2}{2\sigma(t)^2}\right)" />
        </div>
        <p style={S.p}>
          Tanto <InlineMath math="\eta(t)" /> como o raio de vizinhança <InlineMath math="\sigma(t)" /> decaem ao
          longo do treino — frequentemente de forma exponencial,
          <InlineMath math="\;\sigma(t) = \sigma_0 \exp(-t/\tau)" />.
        </p>
        <SOMTrainingDiagram />
        <div style={S.note}>
          <strong>Intuição:</strong> nas iterações iniciais (raio grande), o mapa comporta-se de forma quase
          "elástica" — grandes regiões movem-se em conjunto, o que permite à grelha "desenrolar-se" e cobrir
          globalmente a distribuição dos dados. Nas iterações finais (raio pequeno), apenas a BMU (e talvez 1-2
          vizinhos) se ajusta, refinando localmente cada região do mapa. Sem este decaimento, o mapa nunca
          estabilizaria — ou nunca preservaria topologia global.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: U-Matrix === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. U-Matrix: Visualizando Fronteiras de Clusters</h2>
        <p style={S.p}>
          Após o treino, cada neurónio da grelha tem um vetor de pesos <InlineMath math="w_i" /> "ajustado" a uma
          região da distribuição dos dados. Mas como interpretar visualmente os resultados, se
          <InlineMath math="w_i" /> vive num espaço de <InlineMath math="d" /> dimensões (potencialmente muito
          maior que 2)? A <strong>U-Matrix</strong> (Unified Distance Matrix) resolve este problema reduzindo
          cada vizinhança da grelha a um único número: a <strong>distância entre vetores de pesos de neurónios
          adjacentes</strong>.
        </p>
        <UMatrixDiagram />
        <p style={S.p}>
          A leitura da U-Matrix é direta: <strong>regiões claras</strong> (distâncias pequenas) correspondem a
          zonas onde os pesos variam suavemente — o <strong>interior</strong> de um cluster, onde neurónios
          vizinhos "representam" exemplos semelhantes. <strong>Regiões escuras</strong> (distâncias grandes)
          indicam <strong>saltos abruptos</strong> nos vetores de pesos — uma <strong>fronteira entre
          clusters</strong>. Ao identificar visualmente os "vales" (regiões claras conectadas) separados por
          "cumes" (linhas escuras), é possível segmentar o mapa em clusters sem precisar de correr um algoritmo
          de clustering adicional sobre a grelha — embora, na prática, seja comum aplicar um clustering
          hierárquico ou k-means sobre os próprios vetores <InlineMath math="w_i" /> para obter fronteiras mais
          objetivas.
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: Component Planes === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Component Planes: Interpretando Cada Feature</h2>
        <p style={S.p}>
          A U-Matrix responde a "onde estão as fronteiras?", mas não a "<strong>porquê</strong> esta região é
          diferente daquela?". Para isso, usamos <strong>component planes</strong>: para cada feature
          <InlineMath math="j \in \{1, \dots, d\}" />, desenha-se um heatmap da grelha onde a cor de cada
          neurónio <InlineMath math="i" /> reflete o valor da componente <InlineMath math="j" /> do seu vetor de
          pesos, <InlineMath math="w_{i,j}" />.
        </p>
        <ComponentPlanesDiagram />
        <p style={S.p}>
          Como todos os component planes partilham a <strong>mesma grelha (topologia)</strong>, é possível
          comparar diretamente os padrões espaciais de diferentes features. Se duas features apresentarem
          padrões de cor semelhantes ao longo da grelha, isso sugere que estão <strong>correlacionadas</strong>
          nos dados originais. Combinando a U-Matrix (onde estão as fronteiras) com os component planes (que
          features caracterizam cada região), é possível dar uma <strong>interpretação semântica</strong> a cada
          cluster identificado — por exemplo, "o cluster no canto superior direito corresponde a clientes
          jovens, com rendimento baixo e elevada frequência de compras".
        </p>
        <div style={S.note}>
          <strong>SOM vs. k-means / PCA:</strong> o k-means produz apenas centróides (clusters), sem qualquer
          noção de "vizinhança" entre eles; o PCA produz uma projeção linear de baixa dimensão, mas não
          clusters. O SOM faz <strong>as duas coisas ao mesmo tempo</strong>: agrupa os dados (cada neurónio é,
          essencialmente, um "centróide") <strong>e</strong> organiza esses agrupamentos numa grelha 2D que
          preserva relações de vizinhança (<em>topology-preserving embedding</em>), tornando-se uma ferramenta
          particularmente poderosa para <strong>explorar visualmente</strong> dados de alta dimensão.
        </div>
      </div>

      <hr style={S.divider} />
      <div style={S.section}>
        <h2 style={S.h2}>5. Síntese do Módulo</h2>
        <div style={S.highlight}>
          <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>SOM: rede competitiva onde cada neurónio da grelha 2D tem um <strong>vetor de pesos</strong> da mesma dimensão que o input — sem camadas ocultas, sem retropropagação.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>BMU</strong> = neurónio mais próximo de x; o treino actualiza a BMU e a sua vizinhança em direcção a x, com raio σ(t) e taxa η(t) que decaem ao longo do tempo.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>U-Matrix</strong>: distâncias entre pesos de neurónios adjacentes — regiões claras = interior de clusters, regiões escuras = fronteiras.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Component planes</strong>: um heatmap por feature sobre a mesma grelha — permite interpretar quais variáveis caracterizam cada região/cluster.</li>
            <li style={{ marginBottom: '0.5rem' }}>SOM vs. k-means/PCA: SOM faz <strong>clustering E embedding 2D topology-preserving</strong> ao mesmo tempo — único entre os três.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
