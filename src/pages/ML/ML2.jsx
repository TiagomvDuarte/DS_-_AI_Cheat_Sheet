import React from 'react';
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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

// === Diagram: the Master Algorithm wheel ===
const MasterAlgorithmWheel = () => {
  const nodes = [
    { angle: -90, name: 'Simbolistas', sub: 'Dedução Inversa', c: '#4a9eed' },
    { angle: -18, name: 'Conexionistas', sub: 'Backpropagation', c: '#4a9eed' },
    { angle: 54, name: 'Evolucionários', sub: 'Algoritmos Genéticos', c: '#4a9eed' },
    { angle: 126, name: 'Bayesianos', sub: 'Teorema de Bayes', c: '#4a9eed' },
    { angle: 198, name: 'Analogizadores', sub: 'Kernel / kNN', c: '#4a9eed' },
  ];
  const cx = 260, cy = 200, r = 150;
  const toXY = (deg) => {
    const rad = (deg * Math.PI) / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  };
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>O Mapa das 5 Tribos e o "Master Algorithm"</p>
      <svg viewBox="0 0 520 400" style={{ maxWidth: '100%', height: 'auto' }}>
        {nodes.map((n, i) => {
          const rad = (n.angle * Math.PI) / 180;
          const cos = Math.cos(rad), sin = Math.sin(rad);
          // start at edge of center circle (r=55), end at edge of outer circle (r=46 from node center)
          const x1 = cx + 56 * cos, y1 = cy + 56 * sin;
          const [nx, ny] = toXY(n.angle);
          const x2 = nx - 47 * cos, y2 = ny - 47 * sin;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="4,3" />;
        })}
        <circle cx={cx} cy={cy} r="55" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="2" />
        <text x={cx} y={cy - 6} textAnchor="middle" fill={color} fontSize="13" fontWeight="700">Master</text>
        <text x={cx} y={cy + 12} textAnchor="middle" fill={color} fontSize="13" fontWeight="700">Algorithm</text>
        {nodes.map((n, i) => {
          const [x, y] = toXY(n.angle);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="46" fill={`${n.c}1A`} stroke={n.c} strokeWidth="1.5" />
              <text x={x} y={y - 4} textAnchor="middle" fill={n.c} fontSize="12" fontWeight="700">{n.name}</text>
              <text x={x} y={y + 13} textAnchor="middle" fill={n.c} fontSize="9">{n.sub}</text>
            </g>
          );
        })}
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Cada tribo desenvolveu, de forma quase independente, a sua própria "filosofia" sobre o que significa
        aprender e o seu próprio "algoritmo mestre" candidato. O <strong>Master Algorithm</strong> de Pedro
        Domingos é a ideia (ainda especulativa) de que existe — ou pode ser construído — um único algoritmo
        capaz de aprender qualquer coisa que possa ser aprendida a partir de dados, combinando os pontos
        fortes de todas as tribos.
      </p>
    </div>
  );
};

// === Diagram: historical timeline of all tribes ===
const FullTimelineDiagram = () => {
  const events = [
    { year: '1763', label: 'Bayes\n(publicado)', x: 30, c: '#4a9eed' },
    { year: '1943', label: 'McCulloch\n& Pitts', x: 110, c: '#4a9eed' },
    { year: '1950s', label: 'Lógica\nSimbólica IA', x: 190, c: '#4a9eed' },
    { year: '1957', label: 'Perceptron\n(Rosenblatt)', x: 270, c: '#4a9eed' },
    { year: '1967', label: 'kNN\n(Cover & Hart)', x: 350, c: '#4a9eed' },
    { year: '1975', label: 'Algoritmos\nGenéticos (Holland)', x: 430, c: '#4a9eed' },
    { year: '1986', label: 'Backprop\n(Rumelhart)', x: 510, c: '#4a9eed' },
    { year: '1992', label: 'SVMs\n(Vapnik)', x: 590, c: '#4a9eed' },
    { year: '1995', label: 'Random\nForests', x: 670, c: '#4a9eed' },
    { year: '2006', label: 'Deep\nBelief Nets', x: 750, c: '#4a9eed' },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Linha do Tempo — Marcos Históricos de Cada Tribo</p>
      <svg viewBox="0 0 800 110" style={{ maxWidth: '100%', height: 'auto' }}>
        <line x1="20" y1="50" x2="780" y2="50" stroke="var(--text-secondary)" strokeWidth="2" />
        {events.map(({ year, label, x, c }) => (
          <g key={year}>
            <circle cx={x} cy={50} r="6" fill={c} />
            <text x={x} y={30} textAnchor="middle" fill={c} fontSize="9" fontWeight="700">{year}</text>
            {label.split('\n').map((l, i) => (
              <text key={i} x={x} y={70 + i * 11} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{l}</text>
            ))}
          </g>
        ))}
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Note como as tribos não evoluíram em sequência mas em <strong>paralelo</strong>, frequentemente sem
        comunicação entre si — o Teorema de Bayes precede o computador digital em quase dois séculos, enquanto
        SVMs e Random Forests surgem quase ao mesmo tempo nos anos 1990, oriundos de comunidades completamente
        diferentes.
      </p>
    </div>
  );
};

// === Diagram: decision tree ===
const DecisionTreeDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Árvore de Decisão — "Vou jogar ténis hoje?"</p>
    <svg viewBox="0 0 480 230" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrDT" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <rect x="190" y="10" width="100" height="40" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="240" y="35" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">Tempo?</text>

      <line x1="220" y1="50" x2="100" y2="90" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrDT)" />
      <text x="145" y="68" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Chuva</text>
      <line x1="240" y1="50" x2="240" y2="90" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrDT)" />
      <text x="262" y="68" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Nublado</text>
      <line x1="260" y1="50" x2="380" y2="90" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrDT)" />
      <text x="335" y="68" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Sol</text>

      <rect x="55" y="90" width="100" height="40" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="105" y="115" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">Vento?</text>

      <rect x="195" y="90" width="90" height="40" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="240" y="115" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">Joga = SIM</text>

      <rect x="330" y="90" width="100" height="40" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="380" y="115" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">Humidade?</text>

      <line x1="85" y1="130" x2="40" y2="170" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrDT)" />
      <text x="40" y="155" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Forte</text>
      <line x1="125" y1="130" x2="160" y2="170" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrDT)" />
      <text x="165" y="155" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Fraco</text>

      <rect x="5" y="170" width="90" height="40" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="50" y="195" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">Joga = NÃO</text>

      <rect x="115" y="170" width="90" height="40" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="160" y="195" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">Joga = SIM</text>

      <line x1="360" y1="130" x2="330" y2="170" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrDT)" />
      <text x="325" y="155" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Alta</text>
      <line x1="400" y1="130" x2="430" y2="170" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrDT)" />
      <text x="438" y="155" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Normal</text>

      <rect x="285" y="170" width="90" height="40" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="330" y="195" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">Joga = NÃO</text>

      <rect x="390" y="170" width="90" height="40" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="435" y="195" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">Joga = SIM</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Cada nó interno testa um atributo, cada ramo representa um valor possível desse atributo, e cada folha
      atribui uma classe final. Algoritmos como <strong>ID3</strong> e <strong>C4.5</strong> constroem a árvore
      escolhendo, em cada passo, o atributo que mais reduz a <strong>entropia</strong> (ou maximiza o
      <strong> ganho de informação</strong>) do conjunto de exemplos restante.
    </p>
  </div>
);

// === Diagram: Genetic Algorithm cycle ===
const GeneticAlgorithmDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>O Ciclo de um Algoritmo Genético</p>
    <svg viewBox="0 0 480 260" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrGA" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
        </marker>
      </defs>
      {[
        { x: 240, y: 30, label: 'População\nInicial (aleatória)' },
        { x: 410, y: 100, label: 'Avaliar\nFitness' },
        { x: 350, y: 220, label: 'Seleção\n(roleta/torneio)' },
        { x: 130, y: 220, label: 'Crossover\n(recombinação)' },
        { x: 70, y: 100, label: 'Mutação' },
      ].map((n, i) => (
        <g key={i}>
          <rect x={n.x - 55} y={n.y - 25} width="110" height="50" rx="10" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
          {n.label.split('\n').map((l, li) => (
            <text key={li} x={n.x} y={n.y - 2 + li * 13} textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight={li === 0 ? '700' : '400'}>{l}</text>
          ))}
        </g>
      ))}
      <path d="M 290 45 Q 380 60 405 75" fill="none" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrGA)" />
      <path d="M 405 125 Q 390 175 380 200" fill="none" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrGA)" />
      <path d="M 295 225 Q 230 230 185 225" fill="none" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrGA)" />
      <path d="M 100 200 Q 80 165 72 130" fill="none" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrGA)" />
      <path d="M 95 80 Q 150 45 190 35" fill="none" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrGA)" />
      <text x="240" y="135" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontStyle="italic">repete até critério de paragem</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Um Algoritmo Genético (AG) mantém uma <strong>população</strong> de soluções candidatas (cromossomas).
      Em cada geração: (1) avalia-se a <strong>fitness</strong> de cada indivíduo, (2) seleccionam-se os
      "pais" com probabilidade proporcional à sua fitness, (3) aplica-se <strong>crossover</strong> para
      combinar genes de dois pais num filho, e (4) aplica-se <strong>mutação</strong> — uma pequena alteração
      aleatória — para manter diversidade. O ciclo repete-se até a fitness convergir ou se atingir um número
      máximo de gerações.
    </p>
  </div>
);

// === Diagram: Naive Bayes structure ===
const NaiveBayesDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Estrutura do Naive Bayes — Independência Condicional</p>
    <svg viewBox="0 0 400 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrNB" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#0284c7" />
        </marker>
      </defs>
      <circle cx="200" cy="35" r="32" fill="rgba(2,132,199,0.15)" stroke="#0284c7" strokeWidth="1.5" />
      <text x="200" y="40" textAnchor="middle" fill="#0284c7" fontSize="12" fontWeight="700">Classe Y</text>
      {[
        [50, 'x₁'],
        [150, 'x₂'],
        [250, 'x₃'],
        [350, 'x₄'],
      ].map(([x, label], i) => (
        <g key={i}>
          <line x1="200" y1="67" x2={x} y2="114" stroke="#0284c7" strokeWidth="1.5" markerEnd="url(#arrNB)" />
          <circle cx={x} cy="140" r="24" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
          <text x={x} y="145" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">{label}</text>
        </g>
      ))}
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      A suposição "naive" (ingénua) é que, <strong>dada a classe Y</strong>, todas as features
      <InlineMath math="\ x_1, \dots, x_n" /> são <strong>condicionalmente independentes</strong> entre si.
      Esta hipótese raramente é verdadeira na prática (ex.: em texto, a presença de "Lisboa" e "Porto" não é
      independente dada a classe "viagens") — mas, surpreendentemente, o classificador funciona muito bem
      mesmo assim, porque para classificação só importa <em>qual</em> classe tem maior probabilidade, não o
      valor exacto dessa probabilidade.
    </p>
  </div>
);

// === Diagram: kNN / SVM analogy ===
const AnalogyDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>kNN vs. SVM — Duas Formas de "Raciocinar por Analogia"</p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div>
        <svg viewBox="0 0 180 180" width="180" height="180">
          {[
            [40, 40, '#4a9eed'], [55, 70, '#4a9eed'], [70, 50, '#4a9eed'], [50, 100, '#4a9eed'],
            [130, 130, '#4a9eed'], [140, 100, '#4a9eed'], [110, 140, '#4a9eed'], [150, 150, '#4a9eed'],
            [90, 90, '#4a9eed'],
          ].map(([cx, cy, c], i) => (
            <circle key={i} cx={cx} cy={cy} r={c === '#4a9eed' ? 8 : 6} fill={c} stroke={c === '#4a9eed' ? 'var(--text-primary)' : 'none'} strokeWidth="1.5" />
          ))}
          <circle cx="90" cy="90" r="42" fill="none" stroke="#4a9eed" strokeWidth="1.2" strokeDasharray="4,3" />
          <text x="90" y="20" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">k = 3 vizinhos</text>
        </svg>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>kNN: a classe do ponto novo (centro) é decidida pelos k vizinhos mais próximos (maioria)</p>
      </div>
      <div>
        <svg viewBox="0 0 180 180" width="180" height="180">
          {[
            [30, 40, '#4a9eed'], [45, 70, '#4a9eed'], [25, 100, '#4a9eed'], [60, 30, '#4a9eed'],
            [150, 130, '#4a9eed'], [160, 100, '#4a9eed'], [140, 160, '#4a9eed'], [170, 60, '#4a9eed'],
          ].map(([cx, cy, c], i) => (
            <circle key={i} cx={cx} cy={cy} r="6" fill={c} />
          ))}
          <line x1="10" y1="170" x2="170" y2="10" stroke="#4a9eed" strokeWidth="2" />
          <line x1="10" y1="150" x2="150" y2="10" stroke="#4a9eed" strokeWidth="1" strokeDasharray="3,2" />
          <line x1="30" y1="170" x2="170" y2="30" stroke="#4a9eed" strokeWidth="1" strokeDasharray="3,2" />
          <text x="90" y="190" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">margem máxima</text>
        </svg>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>SVM: encontra o hiperplano que maximiza a margem entre as classes</p>
      </div>
    </div>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
      Ambos os algoritmos partilham a filosofia "Analogizadora": a previsão para um novo ponto depende da sua
      <strong> relação geométrica</strong> com pontos já conhecidos. O kNN compara directamente com os vizinhos
      mais próximos; o SVM, em vez disso, foca-se nos poucos pontos mais "difíceis" (os <strong>vectores de
      suporte</strong>, na fronteira entre classes) e usa-os para definir uma fronteira de decisão óptima.
    </p>
  </div>
);

// === NEW Diagram: how each tribe solves the same problem ===
const SameProblemDiagram = () => {
  const approaches = [
    { name: 'Simbolista', c: '#4a9eed', repr: 'SE idade<30 E saldo<0\nENTÃO risco=ALTO', desc: 'regra lógica explícita' },
    { name: 'Conexionista', c: '#4a9eed', repr: 'rede neuronal\nw₁·idade + w₂·saldo + ...\n→ P(risco)', desc: 'pesos aprendidos por gradiente' },
    { name: 'Evolucionário', c: '#4a9eed', repr: 'população de regras/árvores\nevolui por gerações', desc: 'selecção + crossover + mutação' },
    { name: 'Bayesiano', c: '#4a9eed', repr: 'P(risco | idade,saldo)\n∝ P(idade,saldo|risco)·P(risco)', desc: 'actualização probabilística' },
    { name: 'Analogizador', c: '#4a9eed', repr: 'clientes parecidos\ntiveram risco=ALTO', desc: 'comparação com casos vizinhos' },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>O Mesmo Problema, Cinco Soluções — "Este cliente vai entrar em incumprimento?"</p>
      <svg viewBox="0 0 560 380" style={{ maxWidth: '100%', height: 'auto' }}>
        <rect x="180" y="10" width="200" height="40" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
        <text x="280" y="35" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Dados: idade, saldo, histórico...</text>
        {approaches.map((a, i) => {
          const y = 80 + i * 60;
          return (
            <g key={a.name}>
              <line x1="280" y1="50" x2="120" y2={y} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,2" />
              <rect x="10" y={y - 22} width="105" height="44" rx="8" fill={`${a.c}1A`} stroke={a.c} strokeWidth="1.5" />
              <text x="62" y={y + 3} textAnchor="middle" fill={a.c} fontSize="11" fontWeight="700">{a.name}</text>
              <rect x="125" y={y - 22} width="320" height="44" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />
              {a.repr.split('\n').map((l, li, arr) => (
                <text key={li} x="285" y={y - 6 + li * 12 + (3 - arr.length) * 3} textAnchor="middle" fill="var(--text-primary)" fontSize="9.5" fontFamily="monospace">{l}</text>
              ))}
              <text x="535" y={y + 3} textAnchor="end" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">{a.desc}</text>
            </g>
          );
        })}
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Perante o mesmo conjunto de dados — idade, saldo bancário, histórico de crédito — cada tribo
        constrói uma <strong>representação de conhecimento</strong> radicalmente diferente: regras simbólicas
        explícitas, uma função paramétrica (rede neuronal), uma população de soluções a evoluir, uma
        distribuição de probabilidade condicional, ou uma simples comparação com vizinhos. Todas podem
        chegar à <em>mesma previsão final</em> ("risco alto") — mas a forma como representam e justificam
        essa previsão, e o esforço computacional para a obter, são completamente diferentes.
      </p>
    </div>
  );
};

// === Diagram: Filter vs Wrapper vs Embedded pipelines ===
const PipelinesDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Filter vs. Wrapper vs. Embedded — Fluxos de Dados</p>
    <svg viewBox="0 0 560 280" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrPL2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* FILTER row */}
      <text x="20" y="22" fill={color} fontSize="12" fontWeight="800">FILTER</text>
      <rect x="90" y="6" width="100" height="32" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.2" />
      <text x="140" y="26" textAnchor="middle" fill={color} fontSize="10">Dados (todas features)</text>
      <line x1="190" y1="22" x2="240" y2="22" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrPL2)" />
      <rect x="240" y="6" width="110" height="32" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.2" />
      <text x="295" y="26" textAnchor="middle" fill={color} fontSize="10">Score estatístico</text>
      <line x1="350" y1="22" x2="400" y2="22" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrPL2)" />
      <rect x="400" y="6" width="100" height="32" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.2" />
      <text x="450" y="26" textAnchor="middle" fill={color} fontSize="10">Top-k features</text>
      <line x1="450" y1="38" x2="450" y2="58" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrPL2)" />
      <rect x="400" y="58" width="100" height="28" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="450" y="76" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">Modelo final</text>

      {/* WRAPPER row */}
      <text x="20" y="122" fill="#4a9eed" fontSize="12" fontWeight="800">WRAPPER</text>
      <rect x="90" y="106" width="100" height="32" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="140" y="126" textAnchor="middle" fill="#4a9eed" fontSize="10">Subset candidato</text>
      <line x1="190" y1="122" x2="240" y2="122" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrPL2)" />
      <rect x="240" y="106" width="110" height="32" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="295" y="126" textAnchor="middle" fill="#4a9eed" fontSize="10">Treina + avalia modelo</text>
      <path d="M 295 138 C 295 165, 140 165, 140 138" fill="none" stroke="#4a9eed" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arrPL2)" />
      <text x="218" y="178" textAnchor="middle" fill="#4a9eed" fontSize="9">repete (loop de busca)</text>
      <line x1="350" y1="122" x2="400" y2="122" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrPL2)" />
      <rect x="400" y="106" width="100" height="32" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="450" y="126" textAnchor="middle" fill="#4a9eed" fontSize="10">Melhor subset</text>
      <line x1="450" y1="138" x2="450" y2="158" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrPL2)" />
      <rect x="400" y="158" width="100" height="28" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="450" y="176" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">Modelo final</text>

      {/* EMBEDDED row */}
      <text x="10" y="222" fill="#4a9eed" fontSize="12" fontWeight="800">EMBEDDED</text>
      <rect x="90" y="206" width="100" height="32" rx="6" fill="rgba(16,185,129,0.12)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="140" y="226" textAnchor="middle" fill="#4a9eed" fontSize="10">Dados (todas features)</text>
      <line x1="190" y1="222" x2="240" y2="222" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrPL2)" />
      <rect x="240" y="206" width="110" height="32" rx="6" fill="rgba(16,185,129,0.12)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="295" y="223" textAnchor="middle" fill="#4a9eed" fontSize="10">Treino com</text>
      <text x="295" y="235" textAnchor="middle" fill="#4a9eed" fontSize="10">regularização (L1/L2)</text>
      <line x1="350" y1="222" x2="400" y2="222" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrPL2)" />
      <rect x="400" y="206" width="100" height="32" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="450" y="223" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">Modelo final</text>
      <text x="450" y="235" textAnchor="middle" fill="#4a9eed" fontSize="9">(já com features seleccionadas)</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Nos métodos <strong>Filter</strong>, a selecção é feita uma única vez, antes de qualquer modelo, usando
      apenas estatísticas dos dados. Nos métodos <strong>Wrapper</strong>, o modelo é treinado repetidamente
      dentro de um loop de busca, e cada subset de features é avaliado pelo desempenho real do modelo — muito
      mais caro, mas potencialmente mais preciso. Nos métodos <strong>Embedded</strong>, a selecção acontece
      "dentro" do próprio algoritmo de treino — por exemplo, a regularização L1 do LASSO zera coeficientes
      automaticamente enquanto o modelo é ajustado.
    </p>
  </div>
);

// === Diagram: Curse of dimensionality — sparsity growth ===
const CurseDiagram = () => {
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Curse of Dimensionality — Esparsidade Cresce com a Dimensão</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        {/* 1D: line with 5 points */}
        <div>
          <svg viewBox="0 0 140 140" width="140" height="140">
            <line x1="15" y1="70" x2="125" y2="70" stroke="var(--text-secondary)" strokeWidth="1.5" />
            {[25, 45, 65, 85, 105].map((x, i) => (
              <circle key={i} cx={x} cy="70" r="4" fill={color} />
            ))}
          </svg>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>1D: 5 pontos cobrem bem a recta</p>
        </div>
        {/* 2D: grid with 5 points scattered */}
        <div>
          <svg viewBox="0 0 140 140" width="140" height="140">
            <rect x="15" y="15" width="110" height="110" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" />
            {[[30, 30], [95, 50], [55, 100], [105, 110], [25, 105]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="4" fill="#0284c7" />
            ))}
          </svg>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>2D: 5 pontos já cobrem mal o quadrado</p>
        </div>
        {/* 3D: cube wireframe with sparse points */}
        <div>
          <svg viewBox="0 0 140 140" width="140" height="140">
            <polygon points="25,30 95,30 110,50 40,50" fill="none" stroke="var(--text-secondary)" strokeWidth="1.2" />
            <polygon points="25,30 25,110 95,110 95,30" fill="none" stroke="var(--text-secondary)" strokeWidth="1.2" />
            <polygon points="40,50 110,50 110,130 40,130" fill="none" stroke="var(--text-secondary)" strokeWidth="1.2" />
            <line x1="25" y1="110" x2="40" y2="130" stroke="var(--text-secondary)" strokeWidth="1.2" />
            <line x1="95" y1="110" x2="110" y2="130" stroke="var(--text-secondary)" strokeWidth="1.2" />
            <line x1="95" y1="30" x2="110" y2="50" stroke="var(--text-secondary)" strokeWidth="1.2" />
            {[[45, 60], [85, 95]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="4" fill="#4a9eed" />
            ))}
          </svg>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>3D: apenas 2 pontos "perdidos" no cubo</p>
        </div>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
        Com o mesmo número de pontos (5), à medida que aumentamos o número de dimensões, o <strong>volume do
        espaço cresce exponencialmente</strong> (<InlineMath math="10^d" /> para uma grelha com 10 divisões por
        eixo), enquanto o número de exemplos permanece constante. Os dados tornam-se cada vez mais
        <strong> esparsos</strong> — qualquer ponto está, em média, longe de todos os outros, o que torna
        noções como "vizinhança" (essenciais em KNN, kernels, etc.) cada vez menos informativas. Reduzir o
        número de features (ou de dimensões) é uma forma directa de combater este efeito.
      </p>
    </div>
  );
};

// === Diagram: PCA projection onto principal axis ===
const PCADiagram = () => {
  // synthetic 2D point cloud roughly along a diagonal
  const points = [
    [40, 110], [55, 95], [60, 105], [75, 80], [85, 88],
    [95, 65], [105, 72], [115, 50], [125, 58], [135, 35],
    [70, 100], [100, 60], [50, 102], [120, 45], [90, 75],
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>PCA — Projecção num Eixo Principal</p>
      <svg viewBox="0 0 220 160" style={{ maxWidth: '100%', height: 'auto' }}>
        <line x1="15" y1="140" x2="200" y2="140" stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1="15" y1="140" x2="15" y2="15" stroke="var(--text-secondary)" strokeWidth="1" />
        <text x="205" y="144" fontSize="9" fill="var(--text-secondary)">x₁</text>
        <text x="8" y="14" fontSize="9" fill="var(--text-secondary)">x₂</text>

        {/* principal component axis (PC1) */}
        <line x1="25" y1="125" x2="150" y2="30" stroke="#0284c7" strokeWidth="2" />
        <text x="155" y="28" fontSize="9" fill="#0284c7" fontWeight="700">PC1</text>
        {/* secondary axis (PC2), perpendicular, much shorter */}
        <line x1="80" y1="60" x2="100" y2="80" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="3,2" />
        <text x="103" y="85" fontSize="9" fill="#4a9eed" fontWeight="700">PC2</text>

        {points.map(([x, y], i) => {
          const x0 = 25, y0 = 125, dx = 150 - 25, dy = 30 - 125;
          const len2 = dx * dx + dy * dy;
          const t = ((x - x0) * dx + (y - y0) * dy) / len2;
          const px = x0 + t * dx, py = y0 + t * dy;
          return (
            <g key={i}>
              <line x1={x} y1={y} x2={px} y2={py} stroke="var(--text-secondary)" strokeWidth="0.6" strokeDasharray="2,2" />
              <circle cx={x} cy={y} r="2.6" fill={color} />
              <circle cx={px} cy={py} r="2" fill="#0284c7" opacity="0.7" />
            </g>
          );
        })}
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Os pontos azuis (roxos) representam observações em 2 dimensões (<InlineMath math="x_1, x_2" />). A
        <strong> primeira componente principal (PC1)</strong>, em laranja, é a direcção ao longo da qual os
        dados têm <strong>maior variância</strong> — projectando cada ponto nessa recta (pontos laranja
        pequenos, ligados por linhas tracejadas), perde-se relativamente pouca informação. A
        <strong> segunda componente principal (PC2)</strong>, perpendicular à primeira, capta a variância
        restante — normalmente muito menor. Em PCA com muitas dimensões, mantemos apenas as primeiras
        componentes (que concentram a maior parte da variância) e descartamos as restantes, reduzindo a
        dimensionalidade com perda mínima de informação.
      </p>
    </div>
  );
};

// === NEW Diagram: explained variance ratio (scree plot) ===
const ExplainedVarianceDiagram = () => {
  const eigvals = [4.83, 1.97, 0.61, 0.34, 0.15, 0.10];
  const total = eigvals.reduce((a, b) => a + b, 0);
  const ratios = eigvals.map(v => v / total);
  let cum = 0;
  const cums = ratios.map(r => (cum += r));
  const W = 480, H = 220, padL = 45, padB = 30, padT = 20, padR = 20;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const barW = plotW / eigvals.length * 0.55;
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Scree Plot — Variância Explicada por Componente</p>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%', height: 'auto' }}>
        <line x1={padL} y1={padT} x2={padL} y2={H - padB} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={padL} y1={H - padB} x2={W - padR} y2={H - padB} stroke="var(--text-secondary)" strokeWidth="1" />
        <text x={12} y={padT + 6} fontSize="9" fill="var(--text-secondary)">100%</text>
        <text x={20} y={H - padB + 4} fontSize="9" fill="var(--text-secondary)">0%</text>
        {eigvals.map((v, i) => {
          const x = padL + (i + 0.225) * (plotW / eigvals.length);
          const h = ratios[i] * plotH;
          const y = H - padB - h;
          const cy = H - padB - cums[i] * plotH;
          return (
            <g key={i}>
              <rect x={x} y={y} width={barW} height={h} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.2" />
              <text x={x + barW / 2} y={y - 6} textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{(ratios[i] * 100).toFixed(0)}%</text>
              <text x={x + barW / 2} y={H - padB + 16} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">PC{i + 1}</text>
              <circle cx={x + barW / 2} cy={cy} r="3" fill="#0284c7" />
              {i > 0 && (
                <line
                  x1={padL + (i - 1 + 0.225) * (plotW / eigvals.length) + barW / 2}
                  y1={H - padB - cums[i - 1] * plotH}
                  x2={x + barW / 2}
                  y2={cy}
                  stroke="#0284c7" strokeWidth="1.5"
                />
              )}
            </g>
          );
        })}
        <line x1={padL} y1={H - padB - 0.95 * plotH} x2={W - padR} y2={H - padB - 0.95 * plotH} stroke="#4a9eed" strokeWidth="1" strokeDasharray="4,3" />
        <text x={W - padR} y={H - padB - 0.95 * plotH - 4} textAnchor="end" fontSize="9" fill="#4a9eed" fontWeight="700">limiar 95% (acumulado)</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        As barras (roxo) mostram a <strong>proporção de variância</strong> explicada por cada componente
        principal individualmente — <InlineMath math="\lambda_k / \sum_i \lambda_i" />. A linha laranja mostra
        a <strong>variância acumulada</strong>. Neste exemplo com 6 features originais, PC1+PC2 já explicam
        cerca de 78% da variância total, e seriam necessárias as primeiras 4 componentes para atingir o
        limiar de 95% (linha verde tracejada) — permitindo reduzir de 6 para 4 dimensões com perda mínima de
        informação.
      </p>
    </div>
  );
};

// === NEW Diagram: eigendecomposition of covariance matrix (worked 2x2 example) ===
const EigenDecompositionDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Eigendecomposição da Matriz de Covariância (caso 2×2)</p>
    <svg viewBox="0 0 540 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <rect x="10" y="20" width="140" height="80" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.2" />
      <text x="80" y="40" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Σ (covariância)</text>
      <text x="80" y="65" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontFamily="monospace">[ 4.0  1.8 ]</text>
      <text x="80" y="85" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontFamily="monospace">[ 1.8  2.8 ]</text>

      <text x="175" y="65" textAnchor="middle" fill="var(--text-secondary)" fontSize="16">=</text>

      <rect x="195" y="20" width="100" height="80" rx="8" fill="rgba(2,132,199,0.1)" stroke="#0284c7" strokeWidth="1.2" />
      <text x="245" y="40" textAnchor="middle" fill="#0284c7" fontSize="11" fontWeight="700">V</text>
      <text x="245" y="60" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">(eigenvectors</text>
      <text x="245" y="73" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">em colunas)</text>
      <text x="245" y="90" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontFamily="monospace">[0.83 -0.55]</text>

      <text x="310" y="65" textAnchor="middle" fill="var(--text-secondary)" fontSize="16">·</text>

      <rect x="330" y="20" width="100" height="80" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="380" y="40" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">Λ (diagonal)</text>
      <text x="380" y="65" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontFamily="monospace">[ 4.83  0  ]</text>
      <text x="380" y="85" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontFamily="monospace">[  0  1.97]</text>

      <text x="445" y="65" textAnchor="middle" fill="var(--text-secondary)" fontSize="16">·</text>

      <rect x="460" y="20" width="75" height="80" rx="8" fill="rgba(2,132,199,0.1)" stroke="#0284c7" strokeWidth="1.2" />
      <text x="497" y="40" textAnchor="middle" fill="#0284c7" fontSize="11" fontWeight="700">Vᵗ</text>
      <text x="497" y="65" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">(transposta</text>
      <text x="497" y="78" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">de V)</text>

      <text x="270" y="135" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontStyle="italic">
        λ₁ = 4.83 (PC1, ~71% da variância) &#160;&#160; λ₂ = 1.97 (PC2, ~29% da variância)
      </text>
      <text x="270" y="158" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontStyle="italic">
        traço(Σ) = 4.0 + 2.8 = 6.8 = λ₁ + λ₂ = 4.83 + 1.97  ✓
      </text>
      <text x="270" y="181" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontStyle="italic">
        v₁ = (0.83, 0.55) é a direcção PC1 — aponta para onde os dados mais variam
      </text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Decompor <InlineMath math="\Sigma = V \Lambda V^\top" /> separa a matriz de covariância nas suas
      <strong> direcções de variância</strong> (colunas de <InlineMath math="V" />, os eigenvectors,
      ortogonais entre si) e na <strong>magnitude da variância</strong> em cada direcção (a diagonal de
      <InlineMath math="\Lambda" />, os eigenvalues). Uma propriedade útil para verificação: a soma dos
      eigenvalues é sempre igual ao <strong>traço</strong> (soma da diagonal) da matriz de covariância
      original — a variância total dos dados não se perde, apenas é redistribuída entre as novas direcções.
    </p>
  </div>
);

// === Diagram: L1 (diamond) vs L2 (circle) constraint regions ===
const RegularizationGeometryDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Geometria da Regularização — L1 (LASSO) vs. L2 (Ridge)</p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
      <div>
        <svg viewBox="0 0 160 160" width="160" height="160">
          <line x1="15" y1="80" x2="145" y2="80" stroke="var(--text-secondary)" strokeWidth="1" />
          <line x1="80" y1="15" x2="80" y2="145" stroke="var(--text-secondary)" strokeWidth="1" />
          <text x="148" y="84" fontSize="9" fill="var(--text-secondary)">β₁</text>
          <text x="84" y="14" fontSize="9" fill="var(--text-secondary)">β₂</text>
          {/* L1 diamond */}
          <polygon points="80,30 130,80 80,130 30,80" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
          {/* elliptical contours of loss, off-center, intersecting a corner */}
          {[1, 2, 3].map((s, i) => (
            <ellipse key={i} cx="110" cy="55" rx={20 + s * 14} ry={14 + s * 9} fill="none" stroke={color} strokeWidth="1" opacity={0.5} />
          ))}
          <circle cx="80" cy="30" r="4" fill="#4a9eed" />
          <text x="80" y="22" textAnchor="middle" fontSize="8" fill="#4a9eed" fontWeight="700">solução (β₁=0)</text>
        </svg>
        <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4a9eed', margin: 0 }}>L1 — região em diamante</p>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0 }}>vértices nos eixos → coeficientes exactamente 0</p>
      </div>
      <div>
        <svg viewBox="0 0 160 160" width="160" height="160">
          <line x1="15" y1="80" x2="145" y2="80" stroke="var(--text-secondary)" strokeWidth="1" />
          <line x1="80" y1="15" x2="80" y2="145" stroke="var(--text-secondary)" strokeWidth="1" />
          <text x="148" y="84" fontSize="9" fill="var(--text-secondary)">β₁</text>
          <text x="84" y="14" fontSize="9" fill="var(--text-secondary)">β₂</text>
          {/* L2 circle */}
          <circle cx="80" cy="80" r="50" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
          {[1, 2, 3].map((s, i) => (
            <ellipse key={i} cx="110" cy="55" rx={20 + s * 14} ry={14 + s * 9} fill="none" stroke={color} strokeWidth="1" opacity={0.5} />
          ))}
          <circle cx="100" cy="48" r="4" fill="#4a9eed" />
          <text x="100" y="40" textAnchor="middle" fontSize="8" fill="#4a9eed" fontWeight="700">solução (β≠0)</text>
        </svg>
        <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4a9eed', margin: 0 }}>L2 — região circular</p>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0 }}>fronteira suave → coeficientes pequenos, raramente 0</p>
      </div>
    </div>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
      A solução óptima de um problema regularizado é o ponto onde os <strong>contornos elípticos da função de
      perda</strong> (representando combinações de coeficientes com o mesmo erro) tocam pela primeira
      vez a <strong>região de restrição</strong> definida pela penalização. A região L1 (diamante) tem
      <strong> vértices alinhados com os eixos</strong> — é nesses vértices que a intersecção tende a ocorrer,
      forçando alguns coeficientes a ficarem exactamente em <InlineMath math="0" /> (selecção de features). A
      região L2 (círculo) não tem vértices — a intersecção tipicamente ocorre num ponto onde todos os
      coeficientes são pequenos mas diferentes de zero (shrinkage, sem selecção explícita).
    </p>
  </div>
);

// === Diagram: Wrapper search tree (forward/backward) ===
const WrapperSearchDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Forward Selection vs. Backward Elimination vs. RFE</p>
    <svg viewBox="0 0 560 170" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrWS2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      {/* Forward */}
      <text x="10" y="20" fill={color} fontSize="11" fontWeight="800">Forward</text>
      {['{}', '{x₂}', '{x₂,x₅}', '{x₂,x₅,x₁}'].map((label, i) => (
        <g key={i}>
          <rect x={10 + i * 135} y="30" width="120" height="28" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.2" />
          <text x={70 + i * 135} y="48" textAnchor="middle" fill={color} fontSize="11" fontFamily="monospace">{label}</text>
          {i < 3 && <line x1={130 + i * 135} y1="44" x2={145 + i * 135} y2="44" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrWS2)" />}
        </g>
      ))}
      {/* Backward */}
      <text x="10" y="85" fill="#4a9eed" fontSize="11" fontWeight="800">Backward</text>
      {['{x₁..x₅}', '{x₁,x₂,x₃,x₅}', '{x₁,x₂,x₅}', '{x₂,x₅}'].map((label, i) => (
        <g key={i}>
          <rect x={10 + i * 135} y="95" width="120" height="28" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
          <text x={70 + i * 135} y="113" textAnchor="middle" fill="#4a9eed" fontSize="11" fontFamily="monospace">{label}</text>
          {i < 3 && <line x1={130 + i * 135} y1="109" x2={145 + i * 135} y2="109" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrWS2)" />}
        </g>
      ))}
      <text x="10" y="150" fill="var(--text-secondary)" fontSize="10">
        RFE = Backward Elimination usando a importância/peso atribuído pelo próprio modelo para escolher quem remover em cada passo
      </text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Em <strong>Forward Selection</strong> começamos com o conjunto vazio e, em cada passo, adicionamos a
      feature que mais melhora o desempenho do modelo (treinado e avaliado de novo a cada tentativa). Em
      <strong> Backward Elimination</strong> fazemos o inverso: começamos com todas as features e removemos,
      em cada passo, a que menos contribui. <strong>RFE (Recursive Feature Elimination)</strong> é uma forma
      eficiente de backward elimination: treina o modelo uma vez, usa os coeficientes/importâncias para
      ordenar as features, remove a menos importante, e repete — evitando reavaliar todas as combinações
      possíveis.
    </p>
  </div>
);

// === NEW Diagram: Mutual Information as overlapping uncertainty (Venn-like) ===
const MIGridDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Informação Mútua — Entropia Partilhada entre X e Y</p>
    <svg viewBox="0 0 420 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <circle cx="160" cy="100" r="80" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <circle cx="260" cy="100" r="80" fill="rgba(2,132,199,0.15)" stroke="#0284c7" strokeWidth="1.5" />
      <text x="105" y="60" fill={color} fontSize="13" fontWeight="700">H(X)</text>
      <text x="305" y="60" fill="#0284c7" fontSize="13" fontWeight="700">H(Y)</text>
      <text x="210" y="104" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">I(X;Y)</text>
      <text x="210" y="120" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">informação</text>
      <text x="210" y="132" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">partilhada</text>
      <text x="120" y="170" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">H(X|Y)</text>
      <text x="300" y="170" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">H(Y|X)</text>
    </svg>
    <div style={S.math}>
      <BlockMath math="I(X;Y) = H(X) + H(Y) - H(X,Y) = H(X) - H(X \mid Y)" />
    </div>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      A entropia <InlineMath math="H(X)" /> mede a incerteza total sobre <InlineMath math="X" />; a entropia
      condicional <InlineMath math="H(X \mid Y)" /> mede quanta incerteza sobre <InlineMath math="X" /> ainda
      resta depois de conhecermos <InlineMath math="Y" />. A diferença entre as duas — a área de
      <strong> sobreposição</strong> no diagrama — é exactamente a Informação Mútua: a quantidade de incerteza
      sobre <InlineMath math="X" /> que <InlineMath math="Y" /> "explica". Se <InlineMath math="X" /> e
      <InlineMath math="Y" /> forem independentes, os círculos não se sobrepõem e <InlineMath math="I(X;Y)=0" />;
      se <InlineMath math="Y" /> determinar <InlineMath math="X" /> completamente, os círculos coincidem e
      <InlineMath math="\ I(X;Y) = H(X) = H(Y)" />.
    </p>
  </div>
);

const tribes = [
  { name: 'Simbolistas', color: '#4a9eed', master: 'Inverse Deduction', algo: 'Decision Trees / Rule Induction', strengths: 'Interpretável, regras explícitas, raciocínio lógico', weaknesses: 'Frágil a ruído, dificuldade em alta dimensão' },
  { name: 'Conexionistas', color: '#4a9eed', master: 'Backpropagation', algo: 'MLP, CNN, RNN, Transformers', strengths: 'Aprende features automaticamente, estado da arte', weaknesses: 'Caixa negra, exige muitos dados/computação' },
  { name: 'Evolucionários', color: '#4a9eed', master: 'Genetic Programming', algo: 'Algoritmos/Programação Genética', strengths: 'Sem gradiente, optimiza qualquer função', weaknesses: 'Lento, custoso, muitos hiperparâmetros' },
  { name: 'Bayesianos', color: '#4a9eed', master: 'Probabilistic Inference', algo: 'Naive Bayes, Redes Bayesianas, HMMs', strengths: 'Incerteza explícita, funciona com poucos dados', weaknesses: 'Priors difíceis, intratável em alta dimensão' },
  { name: 'Analogizadores', color: '#4a9eed', master: 'Kernel Machines', algo: 'SVM, kNN, LWR, Case-Based Reasoning', strengths: 'Versátil, garantias teóricas (SVM)', weaknesses: 'Lento na inferência, escolha do kernel/métrica' },
];

export default function ML2() {
  return (
    <div style={S.page}>
      <Link to="/ml" style={S.back}><ArrowLeft size={16} /> Voltar a Machine Learning</Link>

      <div style={S.tag}>Módulo 02</div>
      <h1 style={S.h1}>As 5 Tribos de Machine Learning &amp; Seleção de Features</h1>

      {/* === SECTION 1: O Mapa === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. O Mapa das 5 Tribos</h2>
        <p style={S.p}>
          Cada tribo nasceu para resolver um problema diferente, num contexto científico diferente: os
          Simbolistas vêm da lógica e da filosofia, os Conexionistas da neurociência, os Evolucionários da
          biologia, os Bayesianos da estatística, e os Analogizadores da psicologia cognitiva. Apesar de
          partirem de pontos de vista tão diferentes, todas tentam responder à mesma pergunta fundamental:
          <strong> como generalizar conhecimento a partir de exemplos?</strong>
        </p>
        <MasterAlgorithmWheel />
        <FullTimelineDiagram />
        <div style={S.note}>
          Não é por acaso que diferentes algoritmos "redescobrem" ideias semelhantes em décadas diferentes —
          a falta de comunicação entre comunidades científicas levou a redundância, mas também a perspectivas
          muito ricas sobre o mesmo problema fundamental: aprender a partir de dados.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Simbolistas === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Simbolistas — Aprender é Inverter a Dedução</h2>
        <p style={S.p}>
          Para os Simbolistas, todo o conhecimento pode ser representado por <strong>símbolos e regras
          lógicas</strong> — exactamente como na programação tradicional ou na lógica de primeira ordem.
          A grande ideia desta tribo é a <strong>dedução inversa</strong> (inverse deduction): se a dedução
          normal vai de regras gerais + factos → conclusões específicas, a aprendizagem faz o caminho
          inverso — parte de exemplos (factos + conclusões observadas) e tenta inferir as <strong>regras
          gerais</strong> que os explicam.
        </p>
        <div style={S.math}>
          <BlockMath math="\text{Dedução: } \quad \text{Regra} \wedge \text{Factos} \;\Rightarrow\; \text{Conclusão}" />
          <BlockMath math="\text{Dedução Inversa: } \quad \text{Factos} \wedge \text{Conclusão} \;\Rightarrow\; \text{Regra}" />
        </div>
        <p style={S.p}>
          Por exemplo, se observarmos repetidamente que "Sócrates é homem" + "Sócrates é mortal", e o mesmo
          padrão para Platão, Aristóteles, etc., a dedução inversa permite-nos induzir a regra geral
          <InlineMath math="\ \forall x: \text{homem}(x) \Rightarrow \text{mortal}(x)" />.
        </p>

        <h3 style={S.h3}>Decision Trees (Árvores de Decisão)</h3>
        <p style={S.p}>
          O algoritmo simbolista mais popular constrói uma <strong>árvore de decisão</strong> recursivamente:
          em cada nó, escolhe o atributo que melhor separa os exemplos por classe, divide os dados de acordo
          com os valores desse atributo, e repete o processo em cada sub-conjunto. A "qualidade" de uma
          divisão é normalmente medida pela <strong>entropia</strong> — uma medida de "desordem" ou incerteza:
        </p>
        <div style={S.math}>
          <BlockMath math="H(S) = -\sum_{i=1}^{c} p_i \log_2 p_i" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="p_i" /> é a proporção de exemplos do conjunto <InlineMath math="S" /> que
          pertencem à classe <InlineMath math="i" />. O <strong>ganho de informação</strong> de dividir
          <InlineMath math="\ S" /> pelo atributo <InlineMath math="A" /> é a redução de entropia esperada:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{Gain}(S, A) = H(S) - \sum_{v \in \text{valores}(A)} \frac{|S_v|}{|S|} H(S_v)" />
        </div>
        <DecisionTreeDiagram />

        <h3 style={S.h3}>Rule Induction — RIPPER e Sistemas Baseados em Regras</h3>
        <p style={S.p}>
          Em vez de uma árvore, outros algoritmos simbolistas aprendem directamente um conjunto de
          <strong> regras "SE...ENTÃO"</strong>. O algoritmo <strong>RIPPER</strong> (Repeated Incremental
          Pruning to Produce Error Reduction) constrói regras uma a uma: para cada regra, vai adicionando
          condições (greedily) até que a regra cubra apenas exemplos da classe alvo, depois "podra"
          (pruning) condições que não generalizam bem, e remove os exemplos já cobertos antes de aprender a
          regra seguinte. O resultado é uma lista de regras do tipo:
        </p>
        <div style={S.highlight}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', margin: '0.3rem 0' }}>SE (Tempo = Chuva) E (Vento = Forte) ENTÃO Joga = NÃO</p>
          <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', margin: '0.3rem 0' }}>SE (Tempo = Sol) E (Humidade = Normal) ENTÃO Joga = SIM</p>
          <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', margin: '0.3rem 0 0' }}>SENÃO Joga = SIM (regra default)</p>
        </div>
        <p style={S.p}>
          A grande vantagem dos sistemas baseados em regras é a <strong>interpretabilidade</strong> directa —
          cada decisão pode ser explicada em linguagem quase natural, o que é crucial em domínios regulados
          (medicina, crédito, justiça).
        </p>
        <div style={S.note}>
          O slogan dos Simbolistas poderia ser: "se conseguires explicar porque é que algo é verdade, então
          aprendeste algo." A fragilidade desta abordagem surge quando os dados são ruidosos ou contêm
          relações que não se reduzem facilmente a regras discretas — é aí que outras tribos entram em jogo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Conexionistas === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Conexionistas — Aprender é Ajustar Pesos numa Rede</h2>
        <p style={S.p}>
          Os Conexionistas acreditam que a inteligência emerge de redes massivas de unidades simples
          interligadas — inspiradas (de forma muito simplificada) no cérebro biológico. O algoritmo mestre
          desta tribo é a <strong>backpropagation</strong>: um método eficiente para calcular como cada peso
          de uma rede neuronal contribui para o erro final, permitindo ajustá-lo via gradiente descendente.
        </p>
        <div style={S.math}>
          <BlockMath math="w_{ij} \leftarrow w_{ij} - \eta \frac{\partial L}{\partial w_{ij}}" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="\eta" /> é a taxa de aprendizagem (learning rate) e
          <InlineMath math="\ \frac{\partial L}{\partial w_{ij}}" /> é o gradiente da função de perda em
          relação ao peso <InlineMath math="w_{ij}" />, calculado eficientemente via a regra da cadeia ao
          longo de toda a rede.
        </p>

        <h3 style={S.h3}>O Problema da Atribuição de Crédito (Credit Assignment Problem)</h3>
        <p style={S.p}>
          Numa rede com muitas camadas, quando a previsão final está errada, surge uma pergunta difícil:
          <strong> qual dos milhares (ou milhões) de pesos é "culpado" por esse erro, e em que medida?</strong>
          Este é o <strong>problema da atribuição de crédito</strong>. A backpropagation resolve-o
          propagando o erro "para trás" através da rede, camada a camada, distribuindo a "culpa" (gradiente)
          proporcionalmente à contribuição de cada peso para o erro — exactamente o tema do módulo de Deep
          Learning sobre backpropagation.
        </p>

        <h3 style={S.h3}>Da MLP às Arquitecturas Modernas</h3>
        <p style={S.p}>
          O <strong>Multi-Layer Perceptron (MLP)</strong>, treinado com backpropagation a partir de 1986, foi
          o ponto de partida — mas a tribo conexionista deu origem a famílias de arquitecturas especializadas:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Arquitectura</th><th style={S.th}>Especialização</th><th style={S.th}>Ideia-chave</th></tr></thead>
            <tbody>
              {[
                ['MLP', 'Dados tabulares genéricos', 'Camadas densas (fully-connected)'],
                ['CNN (Convolutional)', 'Imagens, sinais espaciais', 'Filtros convolucionais partilhados, invariância translacional'],
                ['RNN / LSTM', 'Sequências, séries temporais', 'Estado interno (memória) que persiste ao longo do tempo'],
                ['Transformer', 'Linguagem, sequências longas', 'Mecanismo de atenção — pesa a relevância de cada elemento da sequência'],
              ].map(([a, b, c2]) => (
                <tr key={a}><td style={{ ...S.td, fontWeight: 700 }}>{a}</td><td style={S.td}>{b}</td><td style={{ ...S.td, color: 'var(--text-secondary)' }}>{c2}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          Todas estas arquitecturas partilham o mesmo "ADN" conexionista: unidades simples, conectadas em
          grande escala, com pesos ajustados por backpropagation e gradiente descendente — apenas a
          <strong> topologia das conexões</strong> muda para se adequar à estrutura dos dados.
        </p>
        <div style={S.note}>
          Esta tribo é explorada em profundidade nos módulos de Deep Learning — aqui o objectivo é situar a
          MLP/backprop como uma das cinco grandes filosofias de aprendizagem, não repetir esse conteúdo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: Evolucionários === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Evolucionários — Aprender é Sobreviver e Reproduzir</h2>
        <p style={S.p}>
          Os Evolucionários aplicam à aprendizagem de máquina a mesma lógica que a selecção natural aplica
          aos seres vivos: uma <strong>população</strong> de soluções candidatas compete, as melhores
          (mais "aptas") têm maior probabilidade de "reproduzir", e através de <strong>crossover</strong> e
          <strong> mutação</strong> surgem novas soluções, geração após geração.
        </p>

        <h3 style={S.h3}>Função de Fitness</h3>
        <p style={S.p}>
          O coração de qualquer algoritmo evolucionário é a <strong>função de fitness</strong>
          <InlineMath math="\ f(\text{indivíduo})" />, que atribui um valor numérico a cada solução candidata
          — quanto maior, "melhor" a solução. A probabilidade de um indivíduo ser seleccionado para
          reprodução é normalmente proporcional à sua fitness relativa (selecção por roleta):
        </p>
        <div style={S.math}>
          <BlockMath math="P(\text{seleccionar } i) = \frac{f(i)}{\sum_{j=1}^{N} f(j)}" />
        </div>

        <GeneticAlgorithmDiagram />

        <h3 style={S.h3}>Genetic Programming (GP)</h3>
        <p style={S.p}>
          Em vez de evoluir strings de bits, a <strong>Programação Genética</strong> evolui directamente
          <strong> programas</strong> ou <strong>expressões matemáticas</strong>, representados como árvores
          (ex.: uma árvore de expressão para <InlineMath math="(x + 2) \times y" />). Crossover troca
          sub-árvores entre dois programas-pai, e mutação substitui aleatoriamente um nó por outro. A GP foi
          usada para "descobrir" automaticamente fórmulas físicas, estratégias de trading e até circuitos
          electrónicos.
        </p>
        <div style={S.note}>
          Algoritmos evolucionários não usam gradientes — funcionam mesmo quando a função objectivo é
          descontínua, não-diferenciável, ou definida por uma simulação complexa (ex.: "quão bem este robô
          anda?"). O preço a pagar é a eficiência: muitas avaliações de fitness são normalmente necessárias.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: Bayesianos === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Bayesianos — Aprender é Actualizar Crenças</h2>
        <p style={S.p}>
          Para os Bayesianos, a aprendizagem é, fundamentalmente, <strong>inferência probabilística</strong>:
          partimos de uma crença inicial (prior) sobre o mundo e, à medida que observamos dados, actualizamos
          essa crença usando o <strong>Teorema de Bayes</strong>.
        </p>
        <div style={S.math}>
          <BlockMath math="P(H \mid D) = \frac{P(D \mid H)\, P(H)}{P(D)}" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="H" /> é uma hipótese (ex.: "este email é spam"), <InlineMath math="D" /> são
          os dados observados (ex.: as palavras do email), <InlineMath math="P(H)" /> é o <strong>prior</strong> (crença
          inicial), <InlineMath math="P(D \mid H)" /> é a <strong>verosimilhança</strong> (likelihood), e
          <InlineMath math="\ P(H \mid D)" /> é o <strong>posterior</strong> — a crença actualizada após ver os dados.
        </p>

        <h3 style={S.h3}>Naive Bayes</h3>
        <NaiveBayesDiagram />
        <p style={S.p}>
          Aplicando o Teorema de Bayes à classificação, com features <InlineMath math="x_1, \dots, x_n" /> e
          assumindo independência condicional dada a classe <InlineMath math="y" />:
        </p>
        <div style={S.math}>
          <BlockMath math="P(y \mid x_1,\dots,x_n) \propto P(y) \prod_{i=1}^{n} P(x_i \mid y)" />
        </div>
        <p style={S.p}>
          A classe prevista é simplesmente aquela que maximiza este produto — <InlineMath math="\hat{y} = \arg\max_y P(y) \prod_i P(x_i \mid y)" />.

        </p>

        <h3 style={S.h3}>MAP vs. MLE</h3>
        <p style={S.p}>
          Dois critérios fundamentais para escolher parâmetros de um modelo a partir de dados:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Critério</th><th style={S.th}>Fórmula</th><th style={S.th}>Interpretação</th></tr></thead>
            <tbody>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}>MLE<br /><span style={{ fontSize: '0.8rem', fontWeight: 400 }}>(Maximum Likelihood)</span></td>
                <td style={S.td}><InlineMath math="\hat{\theta}_{MLE} = \arg\max_\theta P(D \mid \theta)" /></td>
                <td style={{ ...S.td, color: 'var(--text-secondary)' }}>Escolhe os parâmetros que tornam os dados observados mais "prováveis" — ignora qualquer crença prévia</td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}>MAP<br /><span style={{ fontSize: '0.8rem', fontWeight: 400 }}>(Maximum A Posteriori)</span></td>
                <td style={S.td}><InlineMath math="\hat{\theta}_{MAP} = \arg\max_\theta P(D \mid \theta)\, P(\theta)" /></td>
                <td style={{ ...S.td, color: 'var(--text-secondary)' }}>Igual ao MLE, mas pondera também um prior <InlineMath math="P(\theta)" /> — incorpora crenças prévias sobre os parâmetros</td>
              </tr>
            </tbody>
          </table>
        </div>
        
          <p style={{ ...S.p, marginBottom: 0 }}>
            Quando o prior <InlineMath math="P(\theta)" /> é <strong>uniforme</strong> (todos os valores de
            <InlineMath math="\theta" /> igualmente prováveis a priori), MAP e MLE coincidem. Na prática,
            usar MAP com um prior bem escolhido é uma forma elegante de <strong>regularização</strong> —
            por exemplo, um prior Gaussiano centrado em zero sobre os pesos de um modelo corresponde
            exactamente à regularização L2 (Ridge).
          </p>
        

        <h3 style={S.h3}>Markov Chains e Hidden Markov Models (HMMs)</h3>
        <p style={S.p}>
          A família Bayesiana estende-se naturalmente a dados <strong>sequenciais</strong> através das
          <strong> Cadeias de Markov</strong>: o estado seguinte depende apenas do estado actual (propriedade
          de Markov), <InlineMath math="\ P(s_{t+1} \mid s_t, s_{t-1}, \dots) = P(s_{t+1} \mid s_t)" />. Um
          <strong> Hidden Markov Model (HMM)</strong> adiciona uma camada extra: os estados reais
          <InlineMath math="\ s_t" /> são <strong>não observáveis</strong> (escondidos) — apenas observamos
          "emissões" <InlineMath math="o_t" /> que dependem probabilisticamente do estado escondido. HMMs
          foram durante décadas a base de sistemas de reconhecimento de voz e de anotação gramatical
          (part-of-speech tagging), e são uma <strong>Rede Bayesiana especial</strong> com estrutura temporal.
        </p>
        <div style={S.note}>
          Redes Bayesianas (Bayesian Belief Networks) generalizam ainda mais esta ideia: um grafo acíclico
          dirigido onde cada nó representa uma variável aleatória, e as arestas codificam dependências
          condicionais directas — permitindo representar conhecimento causal complexo de forma compacta.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Analogizadores === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Analogizadores — Aprender é Raciocinar por Semelhança</h2>
        <p style={S.p}>
          Para os Analogizadores, a aprendizagem não passa por extrair regras, ajustar pesos, evoluir populações
          ou actualizar crenças — passa por <strong>comparar</strong>. A previsão para um caso novo é feita com
          base na sua semelhança com casos já conhecidos. É o método mais próximo da forma como os humanos
          raciocinam no dia-a-dia: "este caso parece-se com aquele outro, por isso deve ter um resultado
          semelhante".
        </p>

        <h3 style={S.h3}>k-Nearest Neighbors (kNN)</h3>
        <p style={S.p}>
          O kNN é o algoritmo Analogizador mais simples: para classificar um ponto novo, encontram-se os{' '}
          <InlineMath math="k" /> pontos de treino mais próximos (segundo uma métrica de distância, tipicamente
          euclidiana) e atribui-se a classe mais comum entre eles (ou, em regressão, a média dos seus valores).
          Não há fase de "treino" no sentido tradicional — todo o conjunto de dados é o modelo, e o trabalho
          computacional acontece no momento da previsão (<em>lazy learning</em>).
        </p>
        <div style={S.math}>
          <BlockMath math="\hat{y}(x) = \text{moda}\left(\{y_i : x_i \in N_k(x)\}\right)" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="N_k(x)" /> é o conjunto dos <InlineMath math="k" /> vizinhos mais próximos de{' '}
          <InlineMath math="x" />. A escolha de <InlineMath math="k" /> controla o trade-off bias-variância: k
          pequeno é sensível a ruído (alta variância), k grande suaviza demasiado a fronteira de decisão (alto
          bias).
        </p>

        <h3 style={S.h3}>Support Vector Machines (SVM) e o Kernel Trick</h3>
        <p style={S.p}>
          O SVM leva a analogia mais longe: em vez de comparar com todos os vizinhos, foca-se apenas nos pontos
          mais difíceis de classificar — os <strong>vectores de suporte</strong>, situados na fronteira entre
          classes — e encontra o hiperplano que <strong>maximiza a margem</strong> entre eles. Quando os dados
          não são linearmente separáveis, o <strong>kernel trick</strong> permite projectar implicitamente os
          dados para um espaço de maior dimensão onde já são separáveis, sem nunca calcular essa projecção
          explicitamente.
        </p>

        <AnalogyDiagram />

        <h3 style={S.h3}>Locally Weighted Regression (LWR) e Case-Based Reasoning</h3>
        <p style={S.p}>
          A <strong>Locally Weighted Regression</strong> ajusta um modelo de regressão simples (ex.: linear)
          apenas na vizinhança local do ponto a prever, ponderando cada exemplo de treino pela sua proximidade —
          combinando a flexibilidade do kNN com a suavidade de um modelo paramétrico. O{' '}
          <strong>Case-Based Reasoning</strong> generaliza a ideia a domínios não numéricos (ex.: sistemas
          jurídicos ou de diagnóstico médico): resolve-se um problema novo adaptando a solução do caso mais
          semelhante já resolvido no passado.
        </p>
        <div style={S.note}>
          O maior desafio dos Analogizadores é a <strong>escolha da métrica de distância</strong>: em espaços de
          alta dimensão, a noção de "proximidade" degrada-se (a chamada <em>maldição da dimensionalidade</em>) —
          todos os pontos tendem a ficar equidistantes. Escolher ou aprender uma boa métrica (ex.: via kernel) é
          tão importante quanto o próprio algoritmo de comparação.
        </div>
      </div>
</div>
  );
}

