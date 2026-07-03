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

// === Diagram: Bayes' Theorem derivation ===
const BayesDerivationDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Derivação do Teorema de Bayes</p>
    <svg viewBox="0 0 580 250" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrB1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <rect x="20" y="15" width="260" height="40" rx="6" fill={`${color}15`} stroke="#f97316" strokeWidth="1.2" />
      <text x="150" y="39" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">P(A ∩ B) = P(A) · P(B|A)</text>

      <rect x="300" y="15" width="260" height="40" rx="6" fill={`${color}15`} stroke="#f97316" strokeWidth="1.2" />
      <text x="430" y="39" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">P(A ∩ B) = P(B) · P(A|B)</text>

      <line x1="170" y1="55" x2="270" y2="92" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrB1)" />
      <line x1="410" y1="55" x2="310" y2="92" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrB1)" />
      <text x="290" y="75" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">mesma intersecção P(A ∩ B)</text>

      <rect x="90" y="95" width="400" height="40" rx="6" fill={`${color}15`} stroke="#f97316" strokeWidth="1.2" />
      <text x="290" y="119" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">P(A) · P(B|A) = P(B) · P(A|B)</text>

      <line x1="290" y1="135" x2="290" y2="172" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrB1)" />
      <text x="370" y="158" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">isolar P(A|B)</text>

      <rect x="70" y="175" width="440" height="42" rx="6" fill={`${color}15`} stroke={color} strokeWidth="1.5" />
      <text x="290" y="201" textAnchor="middle" fill={color} fontSize="13" fontWeight="800">P(A|B) = P(B|A) · P(A) / P(B)</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      O Teorema de Bayes não é um axioma adicional — é uma <strong>consequência directa</strong> da definição
      de probabilidade condicional. A probabilidade da intersecção <InlineMath math="P(A \cap B)" /> pode ser
      escrita de duas formas equivalentes (a partir de <InlineMath math="A" /> ou a partir de <InlineMath math="B" />).
      Igualando as duas expressões e isolando <InlineMath math="P(A|B)" />, obtemos a fórmula que permite
      "inverter" o sentido do condicionamento: passar de <InlineMath math="P(B|A)" /> (fácil de medir, ex.: probabilidade
      de sintomas dada uma doença) para <InlineMath math="P(A|B)" /> (o que queremos saber, ex.: probabilidade
      da doença dados os sintomas).
    </p>
  </div>
);

// === Diagram: Naive Bayes graphical model (star) ===
const NaiveBayesGraphDiagram = () => {
  const attrs = ['Tempo', 'Temperatura', 'Humidade', 'Vento'];
  const cx = 280, cy = 40;
  const boxY = 140, boxW = 110, boxH = 36;
  const xs = [90, 210, 330, 450];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Estrutura Gráfica do Naive Bayes</p>
      <svg viewBox="0 0 560 220" style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="arrNB" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={color} />
          </marker>
        </defs>
        <circle cx={cx} cy={cy} r="26" fill={`${color}1A`} stroke={color} strokeWidth="1.5" />
        <text x={cx} y={cy + 4} textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Classe C</text>
        {attrs.map((a, i) => {
          const x = xs[i];
          return (
            <g key={a}>
              <line x1={cx} y1={cy + 26} x2={x} y2={boxY - 4} stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrNB)" />
              <rect x={x - boxW / 2} y={boxY} width={boxW} height={boxH} rx="6" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.2" />
              <text x={x} y={boxY + boxH / 2 + 4} textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="600">{a}</text>
            </g>
          );
        })}
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        O nó <strong>Classe</strong> é o "pai" de todos os atributos. A assunção "ingénua" (naive) é que, dado
        o valor da classe, todos os atributos são <strong>condicionalmente independentes entre si</strong> —
        não existem arestas directas entre eles. Isto simplifica drasticamente o cálculo de
        <InlineMath math="\ P(X|C)" />, reduzindo-o a um simples produto de probabilidades individuais.
      </p>
    </div>
  );
};

// === Diagram: Gaussian distributions per class ===
const GaussianDiagram = () => {
  const w = 480, h = 160, pad = 30;
  const xToPx = (x) => pad + ((x - 60) / (90 - 60)) * (w - 2 * pad);
  const gauss = (x, mu, sigma) => Math.exp(-((x - mu) ** 2) / (2 * sigma * sigma)) / (sigma * Math.sqrt(2 * Math.PI));
  const makePath = (mu, sigma, scale) => {
    let d = '';
    for (let i = 0; i <= 80; i++) {
      const x = 60 + (30 * i) / 80;
      const y = gauss(x, mu, sigma) * scale;
      const px = xToPx(x);
      const py = h - pad - y;
      d += (i === 0 ? 'M' : 'L') + px.toFixed(1) + ',' + py.toFixed(1) + ' ';
    }
    return d;
  };
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Distribuições Gaussianas por Classe (atributo "Temperatura")</p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%', height: 'auto' }}>
        <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <path d={makePath(70, 5, 900)} fill="none" stroke="#f97316" strokeWidth="2.5" />
        <path d={makePath(80, 6, 900)} fill="none" stroke={color} strokeWidth="2.5" />
        <line x1={xToPx(70)} y1={h - pad} x2={xToPx(70)} y2={h - pad + 6} stroke="#f97316" strokeWidth="2" />
        <line x1={xToPx(80)} y1={h - pad} x2={xToPx(80)} y2={h - pad + 6} stroke={color} strokeWidth="2" />
        <text x={xToPx(70)} y={h - 6} textAnchor="middle" fill="#f97316" fontSize="10">μ=70 (Joga)</text>
        <text x={xToPx(80)} y={h - 6} textAnchor="middle" fill={color} fontSize="10">μ=80 (Não Joga)</text>
        <text x={xToPx(74)} y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">x=74°F (instância nova)</text>
        <line x1={xToPx(74)} y1="26" x2={xToPx(74)} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="3,2" />
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Em vez de contar frequências de valores discretos, o Gaussian Naive Bayes assume que cada atributo
        contínuo segue, dentro de cada classe, uma <strong>distribuição normal</strong> com média e desvio-padrão
        próprios. A "verosimilhança" (likelihood) de um valor observado é simplesmente a <strong>altura da curva</strong>
        nesse ponto.
      </p>
    </div>
  );
};

// === Diagram: Bayesian Network DAG (Burglary/Earthquake/Alarm) ===
const BayesNetDAGDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Rede Bayesiana — Exemplo "Alarme"</p>
    <svg viewBox="0 0 480 260" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrBN" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
        </marker>
      </defs>
      {/* lines before circles */}
      <line x1="138" y1="68" x2="222" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#arrBN)" />
      <line x1="345" y1="68" x2="262" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#arrBN)" />
      <line x1="225" y1="160" x2="155" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#arrBN)" />
      <line x1="258" y1="160" x2="330" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#arrBN)" />
      <circle cx="120" cy="40" r="34" fill={`${color}1A`} stroke="#f97316" strokeWidth="1.5" />
      <text x="120" y="44" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Assalto (B)</text>

      <circle cx="360" cy="40" r="34" fill={`${color}1A`} stroke="#f97316" strokeWidth="1.5" />
      <text x="360" y="44" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Sismo (E)</text>

      <circle cx="240" cy="130" r="34" fill={`${color}1A`} stroke={color} strokeWidth="1.5" />
      <text x="240" y="134" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Alarme (A)</text>

      <circle cx="130" cy="215" r="34" fill={`${color}1A`} stroke="#f97316" strokeWidth="1.5" />
      <text x="130" y="219" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">João Liga (J)</text>

      <circle cx="350" cy="215" r="34" fill={`${color}1A`} stroke="#f97316" strokeWidth="1.5" />
      <text x="350" y="219" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Maria Liga (M)</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Este é o exemplo clássico (Pearl): um <strong>Assalto</strong> ou um <strong>Sismo</strong> podem fazer
      disparar o <strong>Alarme</strong>; se o alarme dispara, tanto o <strong>João</strong> como a <strong>Maria</strong> podem
      telefonar a avisar (mas cada um pode também não ligar, ou ligar por engano). As arestas representam
      relações causais directas — e cada nó tem associada uma <strong>Tabela de Probabilidade Condicional
      (CPT)</strong> que quantifica essa influência.
    </p>
  </div>
);

// === Diagram: Markov Chain transition diagram ===
const MarkovChainDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Cadeia de Markov — Estados do Tempo</p>
    <svg viewBox="0 0 480 220" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrMC" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      <circle cx="100" cy="100" r="42" fill={`${color}1A`} stroke="#f97316" strokeWidth="1.5" />
      <text x="100" y="104" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">Sol</text>

      <circle cx="380" cy="100" r="42" fill={`${color}1A`} stroke="#f97316" strokeWidth="1.5" />
      <text x="380" y="104" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">Chuva</text>

      <path d="M 140 85 Q 240 30 340 85" fill="none" stroke={color} strokeWidth="1.5" markerEnd="url(#arrMC)" />
      <text x="240" y="40" textAnchor="middle" fill={color} fontSize="11">0.3</text>

      <path d="M 340 115 Q 240 170 140 115" fill="none" stroke={color} strokeWidth="1.5" markerEnd="url(#arrMC)" />
      <text x="240" y="178" textAnchor="middle" fill={color} fontSize="11">0.4</text>

      <path d="M 70 130 Q 15 100 70 70" fill="none" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrMC)" />
      <text x="22" y="104" textAnchor="middle" fill="#f97316" fontSize="11">0.7</text>

      <path d="M 410 130 Q 465 100 410 70" fill="none" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrMC)" />
      <text x="450" y="104" textAnchor="middle" fill="#f97316" fontSize="11">0.6</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Numa <strong>Cadeia de Markov</strong>, o estado seguinte depende apenas do estado actual (propriedade de
      Markov: <InlineMath math="P(X_{t+1}|X_t, X_{t-1}, \dots) = P(X_{t+1}|X_t)" />). Cada seta representa uma
      <strong> probabilidade de transição</strong>. Numa <strong>Hidden Markov Model (HMM)</strong>, os estados
      ("Sol"/"Chuva") não são observados directamente — observamos apenas "emissões" (ex.: "guarda-chuva sim/não")
      e queremos inferir a sequência de estados ocultos mais provável, dado a sequência de observações.
    </p>
  </div>
);

export default function ML6() {
  return (
    <div style={S.page}>
      <Link to="/ml" style={S.back}><ArrowLeft size={16} /> Voltar a Machine Learning</Link>

      <div style={S.tag}>Module 06</div>
      <h1 style={S.h1}>Modelos Bayesianos</h1>
      <p style={S.lead}>
        Os classificadores probabilísticos abordam a aprendizagem supervisionada de um ângulo diferente dos
        modelos geométricos ou baseados em árvores: em vez de procurar fronteiras de decisão explícitas, modelam
        directamente a <strong>distribuição de probabilidade</strong> dos dados e usam o <strong>Teorema de Bayes</strong> para
        "inverter" essa distribuição e responder à pergunta "qual é a classe mais provável, dados estes atributos?".
        Neste módulo vamos derivar o Teorema de Bayes do zero, construir o classificador <strong>Naive Bayes</strong> passo
        a passo (incluindo as suas variantes Gaussiana, Multinomial e Bernoulli), resolver o problema da
        frequência zero com o <strong>estimador de Laplace</strong>, comparar <strong>MLE vs. MAP</strong> com um exemplo de
        lançamentos de moeda, e terminar com <strong>Redes Bayesianas</strong> e uma breve introdução a
        <strong> Cadeias de Markov / HMMs</strong> — preparando o terreno para o Módulo 07 (Instance-Based Learning & KNN).
      </p>

      {/* === SECTION 1: Teorema de Bayes === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. O Teorema de Bayes — Derivação Completa</h2>
        <p style={S.p}>
          Tudo começa com a definição de <strong>probabilidade condicional</strong>: a probabilidade de
          <InlineMath math="\ A" /> ocorrer, sabendo que <InlineMath math="B" /> já ocorreu, é a fracção do
          "mundo de B" que também é "mundo de A":
        </p>
        <div style={S.math}>
          <BlockMath math="P(A|B) = \frac{P(A \cap B)}{P(B)} \qquad P(B|A) = \frac{P(A \cap B)}{P(A)}" />
        </div>
        <p style={S.p}>
          Destas duas definições, podemos isolar <InlineMath math="P(A \cap B)" /> de duas formas equivalentes:
        </p>
        <div style={S.math}>
          <BlockMath math="P(A \cap B) = P(A) \cdot P(B|A) = P(B) \cdot P(A|B)" />
        </div>
        <BayesDerivationDiagram />
        <p style={S.p}>
          Isolando <InlineMath math="P(A|B)" /> na igualdade anterior, chegamos ao <strong>Teorema de Bayes</strong>:
        </p>
        <div style={S.math}>
          <BlockMath math="P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}" />
        </div>
        <p style={S.p}>
          Em aprendizagem automática, substituímos <InlineMath math="A" /> por uma <strong>hipótese</strong> (ou
          classe <InlineMath math="C" />) e <InlineMath math="B" /> pelos <strong>dados observados</strong> (ou
          atributos <InlineMath math="X" />), obtendo a forma mais usada em classificação:
        </p>
        
          <BlockMath math="P(C|X) = \frac{P(X|C) \cdot P(C)}{P(X)}" />
          <p style={{ ...S.p, marginBottom: 0, marginTop: '0.75rem' }}>
            <InlineMath math="P(C|X)" /> é a <strong>posterior</strong> (o que queremos calcular: probabilidade
            da classe dados os atributos); <InlineMath math="P(X|C)" /> é a <strong>likelihood</strong> (verosimilhança
            — quão prováveis são estes atributos, assumindo a classe); <InlineMath math="P(C)" /> é a <strong>prior</strong> (a
            probabilidade da classe antes de observarmos qualquer atributo); e <InlineMath math="P(X)" /> é a
            <strong> evidência</strong> (a probabilidade marginal dos atributos, igual para todas as classes).
          </p>
        
        <p style={S.p}>
          Quando <InlineMath math="P(X)" /> não pode ser calculada directamente, recorremos ao <strong>Teorema da
          Probabilidade Total</strong>, somando sobre todas as hipóteses possíveis <InlineMath math="H_i" />:
        </p>
        <div style={S.math}>
          <BlockMath math="P(X) = \sum_{i} P(X|H_i) \cdot P(H_i)" />
        </div>
        <div style={S.note}>
          Para efeitos de <strong>classificação</strong>, não precisamos do valor exacto de <InlineMath math="P(X)" /> —
          ele é o mesmo para todas as classes candidatas, por isso podemos ignorá-lo e escrever simplesmente
          <InlineMath math="\ P(C|X) \propto P(X|C) \cdot P(C)" />. Escolhemos a classe que maximiza este produto.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Naive Bayes — independência condicional === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Naive Bayes — A Assunção de Independência Condicional</h2>
        <p style={S.p}>
          Se um exemplo tem <InlineMath math="n" /> atributos <InlineMath math="X = (x_1, x_2, \dots, x_n)" />,
          calcular <InlineMath math="P(X|C)" /> exactamente exigiria conhecer a distribuição conjunta de todos
          os atributos para cada classe — com <InlineMath math="k" /> valores possíveis por atributo e
          <InlineMath math="m" /> classes, isso são até <InlineMath math="m \cdot k^n" /> probabilidades a estimar.
          Para datasets pequenos, isto é completamente impraticável.
        </p>
        <p style={S.p}>
          O Naive Bayes resolve este problema com uma assunção forte (e "ingénua"): <strong>dado o valor da
          classe, todos os atributos são condicionalmente independentes entre si</strong>:
        </p>
        <div style={S.math}>
          <BlockMath math="P(X|C) = P(x_1, x_2, \dots, x_n|C) = \prod_{k=1}^{n} P(x_k|C)" />
        </div>
        <NaiveBayesGraphDiagram />
        <p style={S.p}>
          A regra de classificação final — escolher a classe <InlineMath math="C_i" /> que maximiza a posterior —
          torna-se então:
        </p>
        
          <BlockMath math="\hat{C} = \underset{C_i}{\arg\max} \; P(C_i) \prod_{k=1}^{n} P(x_k|C_i)" />
        
        <p style={S.p}>
          O número de probabilidades a estimar cai de <InlineMath math="m \cdot k^n" /> para
          <InlineMath math="\ m \cdot n \cdot k" /> — de <strong>biliões</strong> para <strong>milhares</strong>, num
          dataset típico. É esta troca — uma assunção provavelmente falsa, em troca de uma redução brutal na
          complexidade — que torna o Naive Bayes prático, e que explica porque funciona surpreendentemente bem
          na prática, mesmo quando os atributos não são realmente independentes.
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Exemplo numérico completo — Play Tennis === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Exemplo Numérico Completo — "Jogar Tênis?"</h2>
        <p style={S.p}>
          Vamos aplicar Naive Bayes ao clássico dataset "Play Tennis" (10 dias de observações), com 4 atributos
          categóricos: <strong>Tempo</strong> (Outlook), <strong>Temperatura</strong>, <strong>Humidade</strong> e
          <strong> Vento</strong>, e a classe <strong>Joga</strong> (Sim/Não).
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Dia</th><th style={S.th}>Tempo</th><th style={S.th}>Temperatura</th>
                <th style={S.th}>Humidade</th><th style={S.th}>Vento</th><th style={S.th}>Joga?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1', 'Sol', 'Quente', 'Alta', 'Fraco', 'Não'],
                ['2', 'Sol', 'Quente', 'Alta', 'Forte', 'Não'],
                ['3', 'Nublado', 'Quente', 'Alta', 'Fraco', 'Sim'],
                ['4', 'Chuva', 'Amena', 'Alta', 'Fraco', 'Sim'],
                ['5', 'Chuva', 'Fria', 'Normal', 'Fraco', 'Sim'],
                ['6', 'Chuva', 'Fria', 'Normal', 'Forte', 'Não'],
                ['7', 'Nublado', 'Fria', 'Normal', 'Forte', 'Sim'],
                ['8', 'Sol', 'Amena', 'Alta', 'Fraco', 'Não'],
                ['9', 'Sol', 'Fria', 'Normal', 'Fraco', 'Sim'],
                ['10', 'Chuva', 'Amena', 'Normal', 'Fraco', 'Sim'],
              ].map(([d, o, t, h, w, p]) => (
                <tr key={d}>
                  <td style={S.td}>{d}</td><td style={S.td}>{o}</td><td style={S.td}>{t}</td>
                  <td style={S.td}>{h}</td><td style={S.td}>{w}</td>
                  <td style={{ ...S.td, fontWeight: 700, color: p === 'Sim' ? '#f97316' : '#f97316' }}>{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          Queremos prever a classe para uma <strong>nova instância</strong>:
          <InlineMath math="\ X = (\text{Tempo}=\text{Sol}, \text{Temperatura}=\text{Fria}, \text{Humidade}=\text{Alta}, \text{Vento}=\text{Forte})" />.
        </p>

        <h3 style={S.h3}>Passo 1 — Priors</h3>
        <p style={S.p}>Das 10 observações, 6 são "Sim" e 4 são "Não":</p>
        <div style={S.math}>
          <BlockMath math="P(\text{Sim}) = \frac{6}{10} = 0.6 \qquad P(\text{Não}) = \frac{4}{10} = 0.4" />
        </div>

        <h3 style={S.h3}>Passo 2 — Likelihoods para cada atributo</h3>
        <p style={S.p}>
          Para cada atributo, contamos quantas vezes o valor observado em <InlineMath math="X" /> ocorre dentro
          de cada classe:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Atributo = valor</th><th style={S.th}>P(·|Sim)</th><th style={S.th}>P(·|Não)</th></tr></thead>
            <tbody>
              {[
                ['Tempo = Sol', '1/6 = 0.167', '3/4 = 0.75'],
                ['Temperatura = Fria', '2/6 = 0.333', '1/4 = 0.25'],
                ['Humidade = Alta', '2/6 = 0.333', '3/4 = 0.75'],
                ['Vento = Forte', '1/6 = 0.167', '2/4 = 0.5'],
              ].map(([k, s, n]) => (
                <tr key={k}><td style={S.td}><strong>{k}</strong></td><td style={{ ...S.td, fontFamily: 'monospace' }}>{s}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{n}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>Passo 3 — Combinar (likelihood conjunta × prior)</h3>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Classe "Sim":</strong></p>
          <BlockMath math="P(\text{Sim}) \times P(\text{Sol}|\text{Sim}) \times P(\text{Fria}|\text{Sim}) \times P(\text{Alta}|\text{Sim}) \times P(\text{Forte}|\text{Sim})" />
          <BlockMath math="= 0.6 \times 0.167 \times 0.333 \times 0.333 \times 0.167 \approx 0.00185" />
          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1rem' }}><strong>Classe "Não":</strong></p>
          <BlockMath math="P(\text{Não}) \times P(\text{Sol}|\text{Não}) \times P(\text{Fria}|\text{Não}) \times P(\text{Alta}|\text{Não}) \times P(\text{Forte}|\text{Não})" />
          <BlockMath math="= 0.4 \times 0.75 \times 0.25 \times 0.75 \times 0.5 \approx 0.02813" />
        

        <h3 style={S.h3}>Passo 4 — Normalizar e decidir</h3>
        <p style={S.p}>
          Para obter probabilidades que somem 1, dividimos cada valor pela soma de ambos
          (<InlineMath math="0.00185 + 0.02813 = 0.02998" />):
        </p>
        <div style={S.math}>
          <BlockMath math="P(\text{Sim}|X) \approx \frac{0.00185}{0.02998} \approx 6.2\% \qquad P(\text{Não}|X) \approx \frac{0.02813}{0.02998} \approx 93.8\%" />
        </div>
        <div style={S.note}>
          <strong>Decisão final:</strong> dado <InlineMath math="X" /> = (Sol, Fria, Alta, Forte), o Naive Bayes
          classifica esta instância como <strong style={{ color: '#f97316' }}>"Não joga"</strong> — com cerca de 94%
          de confiança posterior, baseando-se essencialmente na forte associação entre "Tempo=Sol" / "Humidade=Alta"
          e "Não".
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: Zero-frequency / Laplace === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. O Problema da Frequência Zero e o Estimador de Laplace</h2>
        <p style={S.p}>
          Suponha agora que a nova instância tem <InlineMath math="\text{Tempo} = \text{Nublado}" /> e que, no
          conjunto de treino, <strong>nenhum</strong> dos 4 dias com "Não joga" teve Tempo = Nublado (de facto,
          olhando para a tabela, todos os dias "Nublado" resultaram em "Sim"). Então:
        </p>
        <div style={S.math}>
          <BlockMath math="P(\text{Nublado}|\text{Não}) = \frac{0}{4} = 0" />
        </div>
        <p style={S.p}>
          Como o Naive Bayes <strong>multiplica</strong> todas as likelihoods, uma única probabilidade igual a
          zero faz com que <strong>toda</strong> a posterior da classe "Não" colapse para zero — independentemente
          de quão fortes sejam as evidências de todos os outros atributos:
        </p>
        
          <BlockMath math="P(\text{Não}) \times 0 \times P(\dots|\text{Não}) \times \dots = 0" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            Isto é claramente excessivo: o facto de não termos observado "Nublado + Não" nos (poucos) dados de
            treino não significa que essa combinação seja <strong>impossível</strong> — apenas que não a vimos.
          </p>
        
        <p style={S.p}>
          A solução é o <strong>estimador de Laplace</strong> (Laplace smoothing, ou <em>add-one smoothing</em>):
          adicionamos uma pequena contagem fictícia a cada combinação atributo–valor possível, antes de calcular
          a proporção:
        </p>
        <div style={S.math}>
          <BlockMath math="P(x_k = v|C_i) = \frac{\text{count}(x_k = v, C_i) + 1}{|C_i| + n_k}" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="n_k" /> é o <strong>número de valores possíveis</strong> do atributo
          <InlineMath math="\ x_k" /> (para "Tempo", <InlineMath math="n_k = 3" />: Sol, Nublado, Chuva).
        </p>

        <h3 style={S.h3}>Exemplo Numérico — Antes vs. Depois de Laplace</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Cálculo</th><th style={S.th}>Sem Laplace</th><th style={S.th}>Com Laplace (+1, n=3)</th></tr></thead>
            <tbody>
              <tr>
                <td style={S.td}><strong>P(Nublado|Não)</strong></td>
                <td style={{ ...S.td, fontFamily: 'monospace', color: '#f97316' }}>0 / 4 = 0</td>
                <td style={{ ...S.td, fontFamily: 'monospace', color: '#f97316' }}>(0+1) / (4+3) = 1/7 ≈ 0.143</td>
              </tr>
              <tr>
                <td style={S.td}><strong>P(Sol|Não)</strong></td>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>3/4 = 0.75</td>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>(3+1)/(4+3) = 4/7 ≈ 0.571</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Note que com Laplace, <strong>todas</strong> as probabilidades — incluindo as que já eram diferentes de
          zero — são ligeiramente ajustadas, porque o denominador também aumenta. O efeito é mais forte quando há
          poucos dados (datasets pequenos) e diminui à medida que o número de exemplos cresce. Algumas
          implementações usam um parâmetro <InlineMath math="\alpha" /> em vez de "+1" fixo (Laplace generalizado /
          Lidstone smoothing): <InlineMath math="P(x_k=v|C_i) = \frac{\text{count}+\alpha}{|C_i|+\alpha n_k}" />.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: Gaussian Naive Bayes === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Naive Bayes Gaussiano — Atributos Contínuos</h2>
        <p style={S.p}>
          Os exemplos anteriores assumem atributos <strong>categóricos</strong>, onde contar frequências faz
          sentido. Para atributos <strong>contínuos</strong> (ex.: temperatura em graus, idade, peso), contar
          frequências exactas seria inútil — quase nunca duas observações têm exactamente o mesmo valor real.
        </p>
        <p style={S.p}>
          A solução mais comum é o <strong>Gaussian Naive Bayes</strong>: assumir que, dentro de cada classe, o
          atributo segue uma <strong>distribuição normal (Gaussiana)</strong>, caracterizada pela sua média
          <InlineMath math="\ \mu_{C}" /> e desvio-padrão <InlineMath math="\sigma_{C}" />. A likelihood de um
          valor observado <InlineMath math="x" /> é dada pela <strong>função densidade de probabilidade</strong> da
          normal:
        </p>
        <div style={S.math}>
          <BlockMath math="P(x_k = v|C) = \frac{1}{\sqrt{2\pi\sigma_{C}^2}} \exp\left(-\frac{(v - \mu_{C})^2}{2\sigma_{C}^2}\right)" />
        </div>
        <GaussianDiagram />

        <h3 style={S.h3}>Exemplo Numérico</h3>
        <p style={S.p}>
          Suponha que, para o atributo "Temperatura" (em °F), estimámos os seguintes parâmetros a partir dos
          dados de treino:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Classe</th><th style={S.th}>μ (média)</th><th style={S.th}>σ (desvio-padrão)</th></tr></thead>
            <tbody>
              <tr><td style={S.td}>Joga = Sim</td><td style={{ ...S.td, fontFamily: 'monospace' }}>70</td><td style={{ ...S.td, fontFamily: 'monospace' }}>5</td></tr>
              <tr><td style={S.td}>Joga = Não</td><td style={{ ...S.td, fontFamily: 'monospace' }}>80</td><td style={{ ...S.td, fontFamily: 'monospace' }}>6</td></tr>
            </tbody>
          </table>
        </div>
        <p style={S.p}>Para uma nova instância com Temperatura = 74°F, calculamos:</p>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Likelihood dado "Sim" (μ=70, σ=5):</strong></p>
          <BlockMath math="P(74|\text{Sim}) = \frac{1}{\sqrt{2\pi (5)^2}} \exp\left(-\frac{(74-70)^2}{2(5)^2}\right) = \frac{1}{12.53}\exp(-0.64) \approx 0.0633" />
          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1rem' }}><strong>Likelihood dado "Não" (μ=80, σ=6):</strong></p>
          <BlockMath math="P(74|\text{Não}) = \frac{1}{\sqrt{2\pi (6)^2}} \exp\left(-\frac{(74-80)^2}{2(6)^2}\right) = \frac{1}{15.04}\exp(-0.5) \approx 0.0403" />
          <p style={{ ...S.p, marginBottom: 0, marginTop: '1rem' }}>
            Estes valores de densidade entram depois no produto com a prior e com as likelihoods dos outros
            atributos, exactamente como no caso categórico — apenas a forma de calcular <InlineMath math="P(x_k|C)" /> muda.
          </p>
        
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Multinomial & Bernoulli NB === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Naive Bayes Multinomial e Bernoulli — Classificação de Texto</h2>
        <p style={S.p}>
          Para tarefas de <strong>classificação de texto</strong> (ex.: filtros de spam, análise de sentimento),
          os atributos são tipicamente contagens ou presenças de <strong>palavras</strong> num documento. Duas
          variantes do Naive Bayes são especialmente populares para este caso:
        </p>

        <h3 style={S.h3}>Multinomial Naive Bayes</h3>
        <p style={S.p}>
          Modela cada documento como um vector de <strong>contagens de palavras</strong> (frequência de cada
          termo). A likelihood de uma classe gerar um documento é proporcional ao produto das probabilidades de
          cada palavra ocorrer, elevadas ao número de vezes que ocorrem:
        </p>
        <div style={S.math}>
          <BlockMath math="P(d|C) \propto \prod_{w \in d} P(w|C)^{\text{count}(w,d)}" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="P(w|C)" /> é estimado (com Laplace smoothing) como a fracção de todas as
          palavras nos documentos da classe <InlineMath math="C" /> que são a palavra <InlineMath math="w" />:
        </p>
        <div style={S.math}>
          <BlockMath math="P(w|C) = \frac{\text{count}(w, C) + 1}{\sum_{w' \in V} \text{count}(w', C) + |V|}" />
        </div>

        <h3 style={S.h3}>Bernoulli Naive Bayes</h3>
        <p style={S.p}>
          Em vez de contar quantas vezes uma palavra aparece, modela apenas a <strong>presença/ausência</strong> de
          cada palavra do vocabulário (1 ou 0), independentemente da frequência. A likelihood é um produto de
          Bernoullis:
        </p>
        <div style={S.math}>
          <BlockMath math="P(d|C) \propto \prod_{w \in V} P(w|C)^{b_w} \cdot (1-P(w|C))^{1-b_w}" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="b_w \in \{0,1\}" /> indica se a palavra <InlineMath math="w" /> aparece no
          documento. Note que, ao contrário do Multinomial, o Bernoulli <strong>penaliza explicitamente</strong> a
          ausência de palavras que seriam esperadas numa dada classe.
        </p>

        <h3 style={S.h3}>Comparação das Variantes</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Variante</th><th style={S.th}>Tipo de atributo</th><th style={S.th}>Likelihood</th><th style={S.th}>Uso típico</th></tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}><strong>Gaussian NB</strong></td>
                <td style={S.td}>Contínuo (real)</td>
                <td style={S.td}>Densidade Normal</td>
                <td style={S.td}>Dados numéricos (sensores, medidas físicas)</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Multinomial NB</strong></td>
                <td style={S.td}>Contagens discretas</td>
                <td style={S.td}>Distribuição Multinomial</td>
                <td style={S.td}>Classificação de texto (bag-of-words com frequências)</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Bernoulli NB</strong></td>
                <td style={S.td}>Binário (presença/ausência)</td>
                <td style={S.td}>Distribuição de Bernoulli</td>
                <td style={S.td}>Texto curto, vocabulários pequenos, presença de features</td>
              </tr>
              <tr>
                <td style={S.td}><strong>NB Categórico</strong></td>
                <td style={S.td}>Categórico (nominal)</td>
                <td style={S.td}>Frequências relativas + Laplace</td>
                <td style={S.td}>Atributos simbólicos (ex.: Tempo, Vento)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Todas estas variantes partilham a <strong>mesma estrutura</strong> — prior × produto de likelihoods,
          escolhido via <InlineMath math="\arg\max" /> — diferindo apenas na distribuição assumida para
          <InlineMath math="\ P(x_k|C)" />. Escolher a variante certa é, essencialmente, escolher a distribuição
          que melhor descreve a natureza dos seus atributos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 7: MLE vs MAP === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Estimação de Parâmetros: MLE vs. MAP</h2>
        <p style={S.p}>
          Quando estimamos probabilidades (priors, likelihoods) a partir de dados, estamos implicitamente a
          fazer <strong>estimação de parâmetros</strong>. Existem duas filosofias principais:
        </p>

        <h3 style={S.h3}>Maximum Likelihood Estimation (MLE)</h3>
        <p style={S.p}>
          A MLE escolhe o valor do parâmetro <InlineMath math="\theta" /> que torna os <strong>dados observados
          mais prováveis</strong> — sem qualquer crença prévia sobre <InlineMath math="\theta" />:
        </p>
        <div style={S.math}>
          <BlockMath math="\hat{\theta}_{MLE} = \underset{\theta}{\arg\max} \; P(D|\theta)" />
        </div>

        <h3 style={S.h3}>Maximum A Posteriori (MAP)</h3>
        <p style={S.p}>
          A MAP incorpora uma <strong>distribuição prior</strong> sobre <InlineMath math="\theta" />, escolhendo o
          valor que maximiza a probabilidade posterior — combinando os dados com crenças anteriores (via Bayes):
        </p>
        <div style={S.math}>
          <BlockMath math="\hat{\theta}_{MAP} = \underset{\theta}{\arg\max} \; P(\theta|D) = \underset{\theta}{\arg\max} \; P(D|\theta) \cdot P(\theta)" />
        </div>
        <div style={S.note}>
          Quando o prior <InlineMath math="P(\theta)" /> é <strong>uniforme</strong> (não favorece nenhum valor de
          <InlineMath math="\ \theta" />), MAP e MLE coincidem. O estimador de Laplace, visto na secção 4, é na
          realidade um caso especial de MAP com um prior específico (Dirichlet) sobre as probabilidades — é por
          isso que "adicionar contagens fictícias" tem uma justificação Bayesiana rigorosa.
        </div>

        <h3 style={S.h3}>Exemplo Numérico — Lançamentos de Moeda</h3>
        <p style={S.p}>
          Suponha que lançamos uma moeda 10 vezes e observamos 8 caras e 2 coroas. Seja
          <InlineMath math="\ \theta = P(\text{cara})" />.
        </p>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>MLE — sem qualquer prior:</strong></p>
          <BlockMath math="\hat{\theta}_{MLE} = \frac{\text{nº caras}}{\text{nº lançamentos}} = \frac{8}{10} = 0.8" />
          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1rem' }}>
            <strong>MAP — com prior "a moeda é provavelmente justa" (equivalente a Laplace, 1 cara e 1 coroa fictícias):</strong>
          </p>
          <BlockMath math="\hat{\theta}_{MAP} = \frac{\text{nº caras} + 1}{\text{nº lançamentos} + 2} = \frac{8+1}{10+2} = \frac{9}{12} = 0.75" />
          <p style={{ ...S.p, marginBottom: 0, marginTop: '1rem' }}>
            O MLE confia inteiramente nos 10 lançamentos observados e conclui <InlineMath math="\theta = 0.8" />. O
            MAP "puxa" a estimativa ligeiramente para 0.5 (a crença prior de uma moeda justa), resultando em
            <InlineMath math="\ \theta \approx 0.75" />. Com <strong>mais dados</strong> (ex.: 800 caras em 1000
            lançamentos), o efeito do prior torna-se negligível e MLE ≈ MAP — o prior só importa quando os dados
            são escassos, exactamente como vimos com Laplace smoothing em datasets pequenos.
          </p>
        
      </div>

      <hr style={S.divider} />

      {/* === SECTION 8: Bayesian Belief Networks === */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Redes Bayesianas (Bayesian Belief Networks)</h2>
        <p style={S.p}>
          O Naive Bayes assume que <strong>todos</strong> os atributos são independentes dado a classe — uma
          simplificação útil, mas frequentemente irrealista. As <strong>Redes Bayesianas</strong> (Bayesian Belief
          Networks, BBN) generalizam esta ideia: em vez de assumir independência total, representamos
          explicitamente <strong>quais</strong> variáveis dependem de quais, através de um <strong>grafo acíclico
          dirigido (DAG)</strong>.
        </p>
        <p style={S.p}>
          Cada nó do grafo é uma variável aleatória, e cada nó tem associada uma <strong>Tabela de Probabilidade
          Condicional (CPT)</strong> que especifica <InlineMath math="P(X_i | \text{pais}(X_i))" />. A "condição de
          Markov" garante que cada variável é condicionalmente independente dos seus não-descendentes, dados os
          seus pais — o que permite factorizar a distribuição conjunta completa como um produto de termos locais:
        </p>
        <div style={S.math}>
          <BlockMath math="P(X_1, X_2, \dots, X_m) = \prod_{i=1}^{m} P(X_i | \text{pais}(X_i))" />
        </div>
        <BayesNetDAGDiagram />

        <h3 style={S.h3}>Tabelas de Probabilidade Condicional (CPTs)</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Variável</th><th style={S.th}>CPT</th></tr></thead>
            <tbody>
              <tr><td style={S.td}><strong>P(B)</strong></td><td style={{ ...S.td, fontFamily: 'monospace' }}>P(B=true) = 0.001</td></tr>
              <tr><td style={S.td}><strong>P(E)</strong></td><td style={{ ...S.td, fontFamily: 'monospace' }}>P(E=true) = 0.002</td></tr>
              <tr>
                <td style={S.td}><strong>P(A|B,E)</strong></td>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>
                  P(A|B=T,E=T)=0.95 &nbsp; P(A|B=T,E=F)=0.94<br />
                  P(A|B=F,E=T)=0.29 &nbsp; P(A|B=F,E=F)=0.001
                </td>
              </tr>
              <tr><td style={S.td}><strong>P(J|A)</strong></td><td style={{ ...S.td, fontFamily: 'monospace' }}>P(J=T|A=T)=0.90 &nbsp; P(J=T|A=F)=0.05</td></tr>
              <tr><td style={S.td}><strong>P(M|A)</strong></td><td style={{ ...S.td, fontFamily: 'monospace' }}>P(M=T|A=T)=0.70 &nbsp; P(M=T|A=F)=0.01</td></tr>
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>Calcular uma Probabilidade Conjunta — Regra da Cadeia</h3>
        <p style={S.p}>
          Suponha que queremos a probabilidade de: não há assalto, não há sismo, o alarme dispara, o João liga e
          a Maria <strong>não</strong> liga. Usando a factorização da rede (regra da cadeia ao longo do DAG):
        </p>
        <div style={S.math}>
          <BlockMath math="P(\neg B, \neg E, A, J, \neg M) = P(\neg B) \cdot P(\neg E) \cdot P(A|\neg B, \neg E) \cdot P(J|A) \cdot P(\neg M|A)" />
        </div>
        
          <BlockMath math="= 0.999 \times 0.998 \times 0.001 \times 0.90 \times (1-0.70)" />
          <BlockMath math="= 0.999 \times 0.998 \times 0.001 \times 0.90 \times 0.30 \approx 0.000269" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            Sem a estrutura da rede, calcular esta probabilidade conjunta exigiria conhecer directamente uma
            tabela com <InlineMath math="2^5 = 32" /> entradas. Com a rede, precisámos apenas de <strong>5
            multiplicações</strong> usando CPTs locais, muito mais pequenas.
          </p>
        
        <div style={S.note}>
          <strong>Naive Bayes vs. Redes Bayesianas:</strong> o Naive Bayes é, na realidade, um caso especial de BBN —
          uma estrutura "estrela" em que o nó Classe é pai de todos os atributos, e os atributos não têm arestas
          entre si (ver diagrama da secção 2). As BBNs gerais permitem qualquer estrutura de dependências, sendo
          mais expressivas — mas aprender a <strong>estrutura</strong> do grafo a partir de dados é, em geral, um
          problema computacionalmente difícil.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 9: Markov Chains / HMMs === */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Extensão: Cadeias de Markov e Hidden Markov Models</h2>
        <p style={S.p}>
          As Redes Bayesianas que vimos modelam relações entre variáveis <strong>num único instante</strong>. Quando
          os dados têm uma estrutura <strong>sequencial</strong> (séries temporais, texto, sequências biológicas),
          uma extensão natural é a <strong>Cadeia de Markov</strong>: uma sequência de variáveis aleatórias
          <InlineMath math="\ X_1, X_2, \dots, X_T" /> onde cada estado depende apenas do estado imediatamente
          anterior (propriedade de Markov de 1ª ordem):
        </p>
        <div style={S.math}>
          <BlockMath math="P(X_{t+1} = x | X_1, \dots, X_t) = P(X_{t+1} = x | X_t)" />
        </div>
        <MarkovChainDiagram />
        <p style={S.p}>
          Uma <strong>Hidden Markov Model (HMM)</strong> adiciona uma camada de complexidade: os estados
          <InlineMath math="\ X_t" /> são <strong>ocultos</strong> (não observamos directamente "Sol"/"Chuva"), mas
          em cada instante observamos uma <strong>emissão</strong> <InlineMath math="O_t" /> cuja distribuição
          depende do estado oculto, <InlineMath math="P(O_t|X_t)" />. Um HMM é definido por três componentes:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Componente</th><th style={S.th}>Descrição</th></tr></thead>
            <tbody>
              <tr><td style={S.td}><strong>Distribuição inicial</strong></td><td style={S.td}><InlineMath math="\pi" /> — probabilidade de cada estado no instante 1</td></tr>
              <tr><td style={S.td}><strong>Matriz de transição</strong></td><td style={S.td}><InlineMath math="A" /> — <InlineMath math="P(X_{t+1}|X_t)" />, como na cadeia de Markov</td></tr>
              <tr><td style={S.td}><strong>Matriz de emissão</strong></td><td style={S.td}><InlineMath math="B" /> — <InlineMath math="P(O_t|X_t)" />, probabilidade de cada observação dado o estado</td></tr>
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          HMMs são, na prática, "Redes Bayesianas desenroladas no tempo": cada "fatia temporal" repete a mesma
          estrutura local (estado → emissão, estado → estado seguinte). São a base de aplicações clássicas como
          reconhecimento de fala, anotação gramatical (part-of-speech tagging) e análise de sequências de ADN —
          e, embora hoje sejam frequentemente substituídos por redes neuronais recorrentes ou transformers, os
          conceitos de estado latente e transição probabilística continuam centrais em modelação sequencial.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 10: Vantagens / Desvantagens === */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Naive Bayes — Vantagens e Desvantagens</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Vantagens</th><th style={S.th}>Desvantagens</th></tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 2 }}>
                    <li>Fácil de implementar e extremamente rápido (treino e inferência)</li>
                    <li>Funciona bem mesmo com poucos dados de treino</li>
                    <li>Lida bem com muitos atributos (alta dimensionalidade)</li>
                    <li>Robusto a atributos irrelevantes</li>
                    <li>Produz probabilidades, não apenas classes</li>
                    <li>Incremental — pode ser actualizado com novos dados</li>
                  </ul>
                </td>
                <td style={S.td}>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 2 }}>
                    <li>A assunção de independência condicional raramente é verdadeira</li>
                    <li>Frequência zero exige Laplace smoothing</li>
                    <li>As probabilidades de saída podem ser mal calibradas</li>
                    <li>Atributos contínuos requerem uma assunção de distribuição (ex.: Gaussiana)</li>
                    <li>Redes Bayesianas gerais são caras de aprender (estrutura + CPTs)</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* === SYNTHESIS === */}
      <div style={S.section}>
        <h2 style={S.h2}>11. Síntese do Módulo</h2>
        <p style={S.p}>
          Os classificadores probabilísticos partem de uma ideia simples — o Teorema de Bayes — e constroem em
          torno dela uma família inteira de modelos, desde o extremamente simples (Naive Bayes) até ao
          extremamente expressivo (Redes Bayesianas e HMMs).
        </p>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Pontos-chave a reter:</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li>Teorema de Bayes: <InlineMath math="P(C|X) = \frac{P(X|C) \cdot P(C)}{P(X)}" /> — Posterior ∝ Likelihood × Prior</li>
            <li>Naive Bayes assume independência condicional: <InlineMath math="P(X|C) = \prod_k P(x_k|C)" />, reduzindo de <InlineMath math="m k^n" /> para <InlineMath math="mnk" /> parâmetros</li>
            <li>Frequência zero → Estimador de Laplace: <InlineMath math="\frac{\text{count}+1}{|C|+n_k}" /> — caso especial de MAP</li>
            <li>Gaussian NB usa a densidade Normal para atributos contínuos; Multinomial/Bernoulli NB são standard em classificação de texto</li>
            <li>MLE maximiza <InlineMath math="P(D|\theta)" />; MAP maximiza <InlineMath math="P(D|\theta)P(\theta)" /> — convergem com mais dados</li>
            <li>Redes Bayesianas (DAG + CPTs) generalizam o Naive Bayes, permitindo qualquer estrutura de dependências, factorizando <InlineMath math="P(X_1,\dots,X_m) = \prod_i P(X_i|\text{pais}(X_i))" /></li>
            <li>Cadeias de Markov / HMMs estendem a ideia de dependência probabilística ao longo do tempo, com estados (latentes) e emissões observadas</li>
          </ul>
        
      </div>
    </div>
  );
}
