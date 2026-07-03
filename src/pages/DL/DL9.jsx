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

// ---- Diagram: Power-law scaling (log-log) ----
const ScalingLawDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Loss vs Compute — escala log-log</p>
    <svg viewBox="0 0 520 220" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="slarr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      {/* Axes */}
      <line x1="50" y1="20" x2="50" y2="180" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#slarr)" />
      <line x1="50" y1="180" x2="500" y2="180" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#slarr)" />
      <text x="30" y="100" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" transform="rotate(-90 30 100)">log(Loss)</text>
      <text x="480" y="200" textAnchor="middle" fill="var(--text-secondary)" fontSize="11">log(Compute)</text>

      {/* Power-law line: straight in log-log */}
      <line x1="60" y1="40" x2="480" y2="160" stroke={color} strokeWidth="2.5" />
      {[
        [60, 40, '10²'],
        [180, 73, '10⁴'],
        [300, 106, '10⁶'],
        [420, 140, '10⁸'],
      ].map(([x, y, label], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="4" fill={color} />
          <text x={x} y={y - 10} textAnchor="middle" fill={color} fontSize="10">{label} FLOPs</text>
        </g>
      ))}
      <text x="290" y="195" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">cada salto de 100× em compute → queda constante na loss</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      Quando representada em escala logarítmica em ambos os eixos, a relação entre loss e compute (ou parâmetros, ou tokens)
      é aproximadamente uma <strong>linha recta</strong> — sinal de uma <strong>power law</strong>. A inclinação da recta é o
      expoente de escala: quanto mais negativa (mais inclinada), mais rapidamente a loss melhora com mais recursos.
    </p>
  </div>
);

// ---- Diagram: Compute-optimal allocation (Chinchilla vs GPT-3-style) ----
const AllocationDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Mesmo budget de compute, alocações diferentes</p>
    <svg viewBox="0 0 520 200" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* GPT-3 style bar */}
      <text x="30" y="50" fill="var(--text-secondary)" fontSize="11" fontWeight="700">"GPT-3-style"</text>
      <rect x="140" y="30" width="320" height="34" rx="6" fill="#f97316" opacity="0.75" />
      <text x="300" y="52" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">N grande (175B parâmetros)</text>
      <rect x="140" y="68" width="160" height="20" rx="4" fill="#f59e0b" opacity="0.8" />
      <text x="220" y="83" textAnchor="middle" fill="white" fontSize="9">D pequeno (300B tokens)</text>

      {/* Chinchilla style bar */}
      <text x="30" y="140" fill="var(--text-secondary)" fontSize="11" fontWeight="700">"Chinchilla-optimal"</text>
      <rect x="140" y="120" width="120" height="34" rx="6" fill="#f97316" opacity="0.75" />
      <text x="200" y="142" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">N menor (70B)</text>
      <rect x="140" y="158" width="320" height="20" rx="4" fill="#f97316" opacity="0.45" />
      <text x="300" y="173" textAnchor="middle" fill="var(--text-primary)" fontSize="9">D muito maior (1.4T tokens)</text>

      <text x="270" y="15" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">mesma área total ≈ mesmo compute (FLOPs ≈ 6·N·D)</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      Para o mesmo orçamento de FLOPs, é possível treinar um modelo enorme com poucos dados (undertrained)
      ou um modelo mais pequeno com muito mais dados — a segunda opção atinge melhor loss para o mesmo compute.
    </p>
  </div>
);

// ---- Diagram: Emergent capability (step) vs smooth loss ----
const EmergenceDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Loss suave vs capacidade "emergente"</p>
    <svg viewBox="0 0 520 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="emarr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <line x1="50" y1="20" x2="50" y2="180" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#emarr)" />
      <line x1="50" y1="180" x2="500" y2="180" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#emarr)" />
      <text x="270" y="198" textAnchor="middle" fill="var(--text-secondary)" fontSize="11">escala do modelo (parâmetros) →</text>

      {/* Smooth loss curve */}
      <path d="M 55 60 Q 200 90 300 130 T 495 165" fill="none" stroke={color} strokeWidth="2.5" />
      <text x="430" y="155" fill={color} fontSize="11" fontWeight="700">Loss / perplexidade (suave)</text>

      {/* Emergent step curve */}
      <path d="M 55 175 L 280 173 L 300 60 L 495 55" fill="none" stroke="#f97316" strokeWidth="2.5" />
      <text x="330" y="40" fill="#f97316" fontSize="11" fontWeight="700">Acurácia numa tarefa específica (degrau)</text>
      <line x1="290" y1="20" x2="290" y2="180" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" opacity="0.5" />
      <text x="290" y="14" textAnchor="middle" fill="#f97316" fontSize="9">"phase transition"</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      A loss global melhora suavemente com a escala — mas o desempenho em tarefas discretas e específicas
      (ex: aritmética de vários dígitos, resolução de problemas em vários passos) pode permanecer perto do acaso
      até um certo limiar de escala, e depois subir abruptamente.
    </p>
  </div>
);

// ---- Diagram: DARTS supernet ----
const DartsDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>DARTS — supernet com operações mistas</p>
    <svg viewBox="0 0 540 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="darr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
      </defs>
      {/* Nodes */}
      {[[60, 100, 'A', '#f97316'], [270, 100, 'B', '#fb923c'], [480, 100, 'C', '#fdba74']].map(([cx, cy, label, nc], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="22" fill={`${nc}22`} stroke={nc} strokeWidth="1.5" />
          <text x={cx} y={cy + 5} textAnchor="middle" fill={nc} fontSize="13" fontWeight="700">{label}</text>
        </g>
      ))}
      {/* Mixed edges A->B with multiple candidate ops */}
      {[
        [40, 'conv 3x3', '#f97316', 0.85],
        [70, 'conv 5x5', '#fb923c', 0.45],
        [100, 'max-pool', '#fdba74', 0.15],
        [130, 'identidade', '#fed7aa', 0.05],
      ].map(([dy, label, c, op], i) => (
        <g key={i}>
          <line x1="85" y1={100 + (dy - 85)} x2="245" y2={100 + (dy - 85)} stroke={c} strokeWidth={1 + op * 4} opacity={0.4 + op * 0.6} markerEnd="url(#darr)" />
          <text x="165" y={100 + (dy - 85) - 5} textAnchor="middle" fill={c} fontSize="9">{label} (α={op.toFixed(2)})</text>
        </g>
      ))}
      <line x1="295" y1="100" x2="455" y2="100" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#darr)" />
      <text x="375" y="92" textAnchor="middle" fill="#f97316" fontSize="9">argmax(α) após convergência</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      Cada aresta entre dois nós (camadas) começa como uma <strong>combinação ponderada</strong> de várias operações candidatas
      (conv 3×3, conv 5×5, max-pool, identidade), com pesos α treináveis por gradiente. No final, mantém-se apenas a
      operação com maior α — discretizando a arquitectura.
    </p>
  </div>
);

// ---- Diagram: EfficientNet compound scaling ----
const CompoundScalingDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Compound Scaling — três dimensões em conjunto</p>
    <svg viewBox="0 0 520 180" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Baseline cube */}
      <g>
        <rect x="40" y="100" width="60" height="50" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
        <text x="70" y="165" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">baseline</text>
      </g>
      {/* Width only */}
      <g>
        <rect x="160" y="90" width="100" height="60" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
        <text x="210" y="165" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">+ largura (w)</text>
      </g>
      {/* Depth only */}
      <g>
        <rect x="320" y="60" width="60" height="90" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="350" y="165" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">+ profundidade (d)</text>
      </g>
      {/* Compound */}
      <g>
        <rect x="430" y="40" width="80" height="110" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
        <text x="470" y="165" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">compound (w·d·r)</text>
      </g>
      <text x="260" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">resolução (r) da imagem de entrada também escala em conjunto</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      Em vez de aumentar apenas a largura (mais canais), a profundidade (mais camadas) ou a resolução de entrada
      isoladamente, o EfficientNet escala as três dimensões em conjunto segundo um coeficiente φ fixo,
      mantendo um equilíbrio óptimo entre elas.
    </p>
  </div>
);

// ---- Diagram: HPO search strategies ----
const HPODiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Grid vs Random vs Bayesian — exploração do espaço de hiperparâmetros</p>
    <svg viewBox="0 0 540 180" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Grid */}
      <g>
        <rect x="20" y="20" width="140" height="140" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
        {[0, 1, 2, 3, 4].map(i => (
          <g key={i}>
            <line x1={20 + i * 35} y1="20" x2={20 + i * 35} y2="160" stroke="var(--text-secondary)" strokeWidth="0.5" />
            <line x1="20" y1={20 + i * 35} x2="160" y2={20 + i * 35} stroke="var(--text-secondary)" strokeWidth="0.5" />
          </g>
        ))}
        {[0, 1, 2, 3, 4].flatMap(i => [0, 1, 2, 3, 4].map(j => (
          <circle key={`${i}-${j}`} cx={20 + i * 35} cy={20 + j * 35} r="3" fill="#f97316" />
        )))}
        <text x="90" y="178" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Grid Search</text>
      </g>
      {/* Random */}
      <g>
        <rect x="200" y="20" width="140" height="140" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
        {Array.from({ length: 25 }).map((_, i) => (
          <circle key={i} cx={210 + (i * 53) % 130} cy={25 + ((i * 91) % 130)} r="3" fill="#f59e0b" />
        ))}
        <text x="270" y="178" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Random Search</text>
      </g>
      {/* Bayesian */}
      <g>
        <rect x="380" y="20" width="140" height="140" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
        {/* sparse early points */}
        {[[395, 35], [500, 145], [410, 140], [495, 35]].map(([x, y], i) => (
          <circle key={`s-${i}`} cx={x} cy={y} r="3" fill="var(--text-secondary)" opacity="0.5" />
        ))}
        {/* concentrated around promising region */}
        {[[450, 80], [460, 90], [445, 95], [455, 75], [465, 85], [448, 88]].map(([x, y], i) => (
          <circle key={`c-${i}`} cx={x} cy={y} r="3" fill="#f97316" />
        ))}
        <circle cx="455" cy="85" r="14" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />
        <text x="450" y="178" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Bayesian Optimization</text>
      </g>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      Grid search cobre uma grelha fixa (exponencial no nº de hiperparâmetros). Random search amostra
      pontos aleatórios — em geral, mais eficiente que grid para o mesmo orçamento. Bayesian optimization
      usa um modelo surrogate para concentrar as próximas amostras em regiões promissoras, aprendendo com cada avaliação.
    </p>
  </div>
);

export default function DL9() {
  return (
    <div style={S.page}>
      <Link to="/dl" style={S.back}><ArrowLeft size={16} /> Voltar a Deep Learning</Link>

      <div style={S.tag}>Module 09</div>
      <h1 style={S.h1}>Scaling Laws &amp; Neural Architecture Search</h1>
      <p style={S.lead}>
        Quanto maior, melhor? A resposta não é tão simples. Scaling laws estabelecem relações
        quantitativas e previsíveis entre o tamanho do modelo, o volume de dados e o compute disponível.
        Complementarmente, NAS e HPO automatizam o design de arquitecturas e a escolha de hiperparâmetros.
        Juntos, estes campos respondem à pergunta central: dado um orçamento de compute, como alocá-lo
        de forma óptima?
      </p>

      {/* Section 1 */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Scaling Laws — a Loss como Power Law</h2>
        <p style={S.p}>
          O trabalho seminal de Kaplan et al. (OpenAI, 2020) mostrou que a loss de modelos de linguagem
          segue <strong>power laws</strong> suaves e previsíveis em função de três variáveis independentes:
          o número de parâmetros <InlineMath math="N" />, o volume de dados de treino <InlineMath math="D" />
          {' '}(em tokens) e o compute total <InlineMath math="C" /> (em FLOPs).
        </p>

        <ScalingLawDiagram />

        <div style={S.math}>
          <BlockMath math={`L(N) \\propto N^{-\\alpha_N}, \\qquad L(D) \\propto D^{-\\alpha_D}, \\qquad L(C) \\propto C^{-\\alpha_C}`} />
        </div>

        <p style={S.p}>
          Os expoentes <InlineMath math="\alpha_N, \alpha_D, \alpha_C" /> são pequenos (tipicamente entre 0.05 e 0.1),
          o que significa <strong>retornos decrescentes</strong>: cada salto de 100× em compute melhora a loss
          por um factor aproximadamente constante — não existe um "ponto de saturação" abrupto, apenas uma
          curva que achata cada vez mais devagar.
        </p>

        <div style={S.note}>
          A consequência prática mais poderosa: corridas experimentais pequenas e baratas (poucos milhões de
          parâmetros) permitem <strong>extrapolar</strong> com razoável confiança a performance de modelos
          ordens de magnitude maiores — antes de gastar milhões de dólares no treino real.
        </div>
      </section>

      <hr style={S.divider} />

      {/* Section 2 */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Chinchilla — Como Alocar o Budget de Compute</h2>
        <p style={S.p}>
          Hoffmann et al. (DeepMind, 2022) revisitaram as scaling laws com um estudo muito mais rigoroso —
          treinando mais de 400 modelos com diferentes combinações de <InlineMath math="N" /> e <InlineMath math="D" /> —
          e chegaram a uma conclusão com enorme impacto prático: os modelos da época (GPT-3, Gopher, MT-NLG)
          estavam drasticamente <strong>undertrained</strong>. Tinham demasiados parâmetros para os tokens com que foram treinados.
        </p>

        <AllocationDiagram />

        
          <p style={{ ...S.p, marginBottom: 4 }}><strong>Regra de ouro Chinchilla (treino compute-optimal):</strong></p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Para um dado orçamento de compute <InlineMath math="C \approx 6ND" />, a loss é minimizada quando
            o número de tokens de treino é aproximadamente <strong>20× o número de parâmetros</strong>:
          </p>
          <div style={S.math}>
            <BlockMath math={`D_{opt} \\approx 20 \\times N_{opt}`} />
          </div>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Chinchilla (70B parâmetros, 1.4T tokens) superou Gopher (280B parâmetros, 300B tokens) em
            praticamente todas as benchmarks — usando o <em>mesmo</em> compute total de treino.
          </p>
        

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>Parâmetros</th>
              <th style={S.th}>Tokens de treino</th>
              <th style={S.th}>Tokens / Parâmetro</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['GPT-3', '175B', '300B', '1.7×'],
              ['Gopher', '280B', '300B', '1.1×'],
              ['Chinchilla', '70B', '1.4T', '20×'],
              ['Llama 3 8B', '8B', '15T', '1875×'],
              ['Mistral 7B', '7B', '~8T', '~1140×'],
            ].map(([a, b, c, d]) => (
              <tr key={a}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p style={S.p}>
          Llama e Mistral foram além do "compute-optimal" de Chinchilla: treinaram modelos relativamente
          pequenos com <em>muito mais</em> tokens do que o ponto óptimo de treino sugeriria. Porquê? Porque
          o custo de <strong>inferência</strong> ao longo da vida do modelo (milhões de pedidos) supera de
          longe o custo de treino — vale a pena gastar mais compute a treinar para obter um modelo mais
          pequeno e barato de servir.
        </p>
      </section>

      <hr style={S.divider} />

      {/* Section 3 */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Capacidades Emergentes — Phase Transitions</h2>
        <p style={S.p}>
          À medida que os modelos escalam, certas capacidades parecem aparecer abruptamente — quase do nada —
          a partir de uma determinada escala. Wei et al. (2022) documentaram dezenas destes fenómenos:
          few-shot learning eficaz, chain-of-thought reasoning, aritmética multi-dígito, desambiguação de
          instruções complexas.
        </p>

        <EmergenceDiagram />

        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 4 }}><strong>Exemplos de "phase transitions" reportadas:</strong></p>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Capacidade</th>
                <th style={S.th}>Escala aproximada de emergência</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Few-shot learning útil', '~10B parâmetros (era GPT-3)'],
                ['Chain-of-thought reasoning', '~100B parâmetros'],
                ['Seguir instruções complexas (pós-RLHF)', '> 10B parâmetros, com fine-tuning adequado'],
              ].map(([a, b]) => (
                <tr key={a}>
                  <td style={S.td}>{a}</td>
                  <td style={S.td}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={S.p}>
          Existe debate científico activo sobre se estas capacidades são <em>verdadeiramente</em> emergentes
          ou são, em grande parte, artefactos da forma como as métricas são definidas. Schaeffer et al. (2023)
          argumentam que, ao usar métricas <strong>contínuas</strong> (em vez de "tudo ou nada", como exact-match),
          as curvas de melhoria tendem a ser suaves — as "transições de fase" surgiriam então da binarização
          das métricas de avaliação, não de uma mudança qualitativa repentina no modelo.
        </p>

        <div style={S.note}>
          Independentemente da explicação, o efeito prático é real: chain-of-thought prompting, por exemplo,
          tipicamente só melhora resultados em modelos suficientemente grandes — modelos pequenos não têm
          "espaço" interno suficiente para manter estados intermédios de raciocínio coerentes.
        </div>
      </section>

      <hr style={S.divider} />

      {/* Section 4 */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Neural Architecture Search (NAS)</h2>
        <p style={S.p}>
          NAS automatiza o design da arquitectura de uma rede — quantas camadas, que tipo de operação em
          cada camada (convolução 3×3? 5×5? pooling? identidade?), quantos canais. Abordagens iniciais
          (busca por reinforcement learning ou algoritmos evolutivos) treinavam milhares de arquitecturas
          candidatas do zero — exigindo milhares de "GPU-days". DARTS tornou NAS prático ao reformular a
          busca como um problema <strong>diferenciável</strong>, treinável por gradiente descendente.
        </p>

        <DartsDiagram />

        <h3 style={S.h3}>EfficientNet — Compound Scaling</h3>
        <p style={S.p}>
          O EfficientNet (Tan &amp; Le, 2019) combinou NAS com uma ideia simples mas poderosa: em vez de
          escalar isoladamente a profundidade (mais camadas), a largura (mais canais por camada) ou a
          resolução da imagem de entrada, escala as <strong>três dimensões em conjunto</strong>, segundo
          um coeficiente único <InlineMath math="\phi" />.
        </p>

        <CompoundScalingDiagram />

        <div style={S.math}>
          <BlockMath math={`\\text{profundidade} = \\alpha^{\\phi}, \\quad \\text{largura} = \\beta^{\\phi}, \\quad \\text{resolução} = \\gamma^{\\phi}`} />
        </div>

        <p style={S.p}>
          Os coeficientes base <InlineMath math="\alpha, \beta, \gamma" /> são encontrados por uma pequena
          busca em grelha numa rede pequena, e depois reaplicados a <InlineMath math="\phi" /> crescente para
          gerar a família EfficientNet-B0 a B7. O resultado: EfficientNet-B7 atingiu estado da arte em
          ImageNet com cerca de 8.4× menos FLOPs que arquitecturas anteriores de precisão comparável.
        </p>

        <div style={S.note}>
          NAS "hardware-aware" (Once-for-All, ProxylessNAS, MobileNetV3) leva isto mais longe: em vez de
          optimizar apenas FLOPs teóricos, mede a <strong>latência real</strong> num dispositivo-alvo
          (iPhone, Raspberry Pi, TPU) e procura arquitecturas óptimas especificamente para esse hardware —
          ligando directamente a este módulo o tema de "Efficient Deep Learning" do módulo seguinte.
        </div>
      </section>

      <hr style={S.divider} />

      {/* Section 5 */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Hyperparameter Optimization (HPO)</h2>
        <p style={S.p}>
          HPO é o problema de encontrar a configuração de hiperparâmetros (learning rate, dropout,
          número de camadas, batch size, ...) que maximiza a performance num conjunto de validação.
          O espaço de busca cresce exponencialmente com o número de hiperparâmetros, pelo que a
          estratégia de busca importa muito.
        </p>

        <HPODiagram />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Estratégia</th>
              <th style={S.th}>Vantagens</th>
              <th style={S.th}>Limitações</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Grid Search', 'Avalia exaustivamente todas as combinações numa grelha fixa', 'Simples, totalmente reproduzível', 'Cresce exponencialmente com o nº de hiperparâmetros'],
              ['Random Search', 'Amostra combinações aleatórias do espaço', 'Melhor cobertura que grid para o mesmo orçamento', 'Não aprende com avaliações anteriores'],
              ['Bayesian Optimization', 'Modelo surrogate prevê regiões promissoras a partir de avaliações passadas', 'Muito eficiente — poucas avaliações necessárias', 'Sequencial por natureza; overhead do modelo surrogate'],
              ['Hyperband / ASHA', 'Successive halving — mata cedo configurações com mau desempenho parcial', 'Poupa enormemente compute em buscas grandes', 'Assume que desempenho parcial prevê desempenho final'],
              ['Population-Based Training (PBT)', 'População de modelos evolui hiperparâmetros + pesos em paralelo', 'Encontra schedules dinâmicos (LR que muda ao longo do treino)', 'Requer muitos workers em paralelo'],
            ].map(([a, b, c, d]) => (
              <tr key={a}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.note}>
          Na prática, a combinação mais usada é <strong>Bayesian Optimization + Hyperband</strong>
          (ex.: Optuna com pruning): o modelo surrogate sugere a próxima configuração a testar, e o
          Hyperband interrompe cedo as runs que claramente não são competitivas — concentrando o
          orçamento de compute nas configurações mais promissoras.
        </div>
      </section>

      <hr style={S.divider} />

      {/* Synthesis */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Síntese do Módulo</h2>
        <p style={S.p}>
          As scaling laws transformaram deep learning de uma arte largamente empírica numa disciplina de
          engenharia previsível: é possível prever a performance de um modelo grande a partir de runs
          pequenas, planear orçamentos de compute com meses de antecedência, e evitar arquitecturas
          subóptimas antes de gastar recursos significativos. Chinchilla corrigiu anos de modelos
          sistematicamente undertrained. NAS e HPO fecham o ciclo, automatizando decisões de design que
          antes dependiam quase inteiramente de intuição especializada.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 4 }}><strong>Ideias-chave a reter:</strong></p>
          <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
            <li>A loss segue power laws suaves em N (parâmetros), D (tokens) e C (compute) — extrapole runs pequenas para prever runs grandes.</li>
            <li>Regra Chinchilla: ~20 tokens por parâmetro é compute-optimal para minimizar a loss de treino.</li>
            <li>Para inferência barata, vale a pena "over-treinar" modelos pequenos com muito mais dados (Llama, Mistral).</li>
            <li>Capacidades emergentes existem na prática, mas o seu timing exacto é difícil de prever — e parcialmente um artefacto de métricas.</li>
            <li>DARTS tornou NAS diferenciável e prático; EfficientNet's compound scaling equilibra profundidade, largura e resolução.</li>
            <li>Bayesian Optimization + Hyperband é hoje a combinação de referência para HPO com recursos limitados.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
