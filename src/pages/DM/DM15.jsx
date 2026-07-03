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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', marginTop: '1.25rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  math: { margin: '1rem 0', overflowX: 'auto' },
};

/* Normal points for the scatter SVG */
const NORMAL_PTS = [
  [120,100],[135,88],[140,115],[150,95],[155,108],[160,85],[165,120],[170,100],
  [175,90],[180,110],[185,98],[190,82],[195,115],[200,105],[205,92],[210,118],
  [145,130],[155,140],[165,135],[175,128],[185,138],[195,130],
];
const OUTLIER = [400, 75];

export default function DM15() {
  return (
    <div style={S.page}>
      <Link to="/dm" style={S.back}><ArrowLeft size={16} /> Voltar a Data Mining</Link>
      <div style={S.tag}>MÓDULO 11</div>
      <h1 style={S.h1}>Isolation Forest e Deteção de Anomalias</h1>
      <p style={S.lead}>
        Isolation Forest é um algoritmo de anomaly detection baseado num insight elegante: anomalias são
        "poucas e diferentes" — ficam em regiões esparsas do espaço de features e isolam-se com muito
        menos splits aleatórios do que pontos normais. Sem pressupostos de distribuição, sem cálculo de
        densidade, linear em tempo e memória — e surpreendentemente eficaz em alta dimensão.
      </p>

      {/* ── SECTION 1: Paisagem de Anomaly Detection ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Anomaly Detection — Paisagem</h2>
        <p style={S.p}>
          Anomaly detection (ou outlier detection) identifica observações que se desviam significativamente
          do padrão geral. É transversal a domínios: fraude financeira, intrusão em redes, falhas industriais,
          qualidade de dados, diagnóstico médico.
        </p>

        <h3 style={S.h3}>Abordagens por Paradigma de Aprendizagem</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Paradigma</th>
              <th style={S.th}>Como funciona</th>
              <th style={S.th}>Exemplos</th>
              <th style={S.th}>Limitação principal</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Supervisionado', 'Treina classificador com labels de anomalia', 'Random Forest, XGBoost com labels de fraude', 'Labels raras e caras; desbalanceamento extremo'],
              ['Não supervisionado', 'Detecta outliers sem qualquer label', 'Isolation Forest, LOF, z-score, autoencoders', 'Pode confundir raridade com anomalia real'],
              ['Semi-supervisionado', 'Treina apenas em dados normais; inferir anomalias como desvios', 'One-Class SVM, SVDD, autoencoders normais-only', 'Pressupõe que dados de treino são "limpos"'],
            ].map(([a, b, c, d]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{a}</td>
                <td style={{ ...S.td, fontSize: '0.88rem' }}>{b}</td>
                <td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{c}</td>
                <td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Tipos de Anomalia</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Descrição</th>
              <th style={S.th}>Exemplo real</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Point anomaly', 'Observação individual fora do padrão', 'Transação de €50 000 numa conta que gasta €200/mês'],
              ['Contextual anomaly', 'Normal globalmente, anómala no contexto', '25 °C normal em Agosto, anómalo em Janeiro (série temporal)'],
              ['Collective anomaly', 'Grupo de pontos anómalo em conjunto', 'Sequência de transferências pequenas sucessivas (structuring fraud)'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.highlight}>
          <strong>Desbalanceamento extremo:</strong> anomalias são raras por definição (&lt;1–5% dos dados).
          Accuracy é enganosa — um modelo que classifica tudo como normal tem 99%+ de accuracy.
          Usar <strong>AUPRC</strong> (Area Under Precision-Recall Curve), F1, ROC-AUC sobre os scores de anomalia.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 2: Insight Central ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Insight Central do Isolation Forest</h2>
        <p style={S.p}>
          A maioria dos algoritmos de anomaly detection começa por modelar o que é "normal" (densidade,
          distância, fronteira de decisão) e depois detecta desvios. Isolation Forest inverte esta lógica:
        </p>
        <div style={S.highlight}>
          <strong>Insight fundamental:</strong> anomalias são <em>poucas</em> (raras) e <em>diferentes</em>
          (ocupam regiões esparsas). Por isso, são mais fáceis de <em>isolar</em> através de splits
          aleatórios — precisam de muito menos cortes para ficarem sozinhas numa partição.
          Pontos normais, em regiões densas, requerem muitos splits para serem isolados.
        </div>

        {/* SVG: 2D scatter with partitions */}
        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            Isolamento por splits aleatórios — ponto normal vs anomalia
          </p>
          <svg viewBox="0 0 500 250" style={{ width: '100%', maxWidth: 500, display: 'block', margin: '0 auto' }}>
            {/* Background */}
            <rect x="0" y="0" width="500" height="250" rx="8" fill="var(--bg-secondary)" />
            {/* Axis-aligned partition lines */}
            <line x1="320" y1="20" x2="320" y2="230" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.8" />
            <line x1="320" y1="60" x2="500" y2="60" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.8" />
            <line x1="100" y1="75" x2="240" y2="75" stroke="#f97316" strokeWidth="1" strokeDasharray="4,3" opacity="0.5" />
            <line x1="170" y1="75" x2="170" y2="150" stroke="#f97316" strokeWidth="1" strokeDasharray="4,3" opacity="0.5" />
            {/* Normal points (blue) */}
            {NORMAL_PTS.map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="5" fill="#f97316" opacity="0.75" />
            ))}
            {/* Outlier (red) */}
            <circle cx={OUTLIER[0]} cy={OUTLIER[1]} r="7" fill={color} opacity="0.9" />
            {/* Labels */}
            <text x="160" y="175" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="600">pontos normais</text>
            <text x="160" y="189" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">(região densa — muitos splits)</text>
            <text x="435" y="75" textAnchor="middle" fontSize="11" fill={color} fontWeight="600">anomalia</text>
            <text x="415" y="89" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">(isolada com 2 splits)</text>
            {/* Arrow annotation for outlier */}
            <line x1="395" y1="75" x2="370" y2="75" stroke={color} strokeWidth="1.5" markerEnd="url(#arr)" />
            <defs>
              <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill={color} />
              </marker>
            </defs>
            <text x="10" y="245" fontSize="9" fill="var(--text-secondary)">linhas amarelas = splits que isolam a anomalia; linhas roxas = splits na região densa (mais necessários)</text>
          </svg>
        </div>

        <p style={S.p}>
          A anomalia (ponto vermelho) está numa região esparsa: com apenas 2 splits aleatórios (linha vertical
          em x=320, linha horizontal em y=60) já fica sozinha numa partição. Os pontos normais (azuis)
          estão numa região densa e requerem muitos mais splits para serem isolados individualmente.
          Esta assimetria de profundidade é o sinal que o Isolation Forest usa.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 3: Isolation Tree — Construção ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Isolation Tree — Construção</h2>
        <p style={S.p}>
          Uma Isolation Tree é construída de forma totalmente aleatória sobre uma sub-amostra de
          <InlineMath math="\psi" /> pontos (tipicamente <InlineMath math="\psi = 256" />):
        </p>

        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Passos de construção</p>
          {[
            ['1', 'Sub-amostragem', `Seleccionar ψ pontos aleatoriamente do dataset (sem reposição)`],
            ['2', 'Escolher feature', 'Seleccionar aleatoriamente uma das d features — q ∈ {1, …, d}'],
            ['3', 'Escolher threshold', `Escolher t aleatoriamente em [min(q), max(q)] na sub-amostra actual`],
            ['4', 'Particionar', 'Nó esquerdo: pontos com x_q < t; Nó direito: pontos com x_q ≥ t'],
            ['5', 'Recursão', 'Repetir os passos 2–4 em cada partição'],
            ['6', 'Parar', `Quando um nó tem apenas 1 ponto (isolado) ou profundidade máxima atingida (log₂ψ)`],
          ].map(([n, t, d]) => (
            <div key={n} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.6rem', alignItems: 'flex-start' }}>
              <div style={{ background: color, color: 'white', borderRadius: '50%', minWidth: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>{n}</div>
              <div>
                <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.88rem' }}>{t}: </span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{d}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 style={S.h3}>Exemplo: Comparação de Comprimentos de Caminho</h3>
        <p style={S.p}>
          Considera 8 pontos: 7 pontos normais agrupados (N1–N7) e 1 anomalia (A). Ao construir uma
          Isolation Tree, o comprimento de caminho — número de arestas da raiz até ao nó folha — difere drasticamente:
        </p>

        {/* Tree SVG */}
        <div style={S.diagram}>
          <svg viewBox="0 0 560 270" style={{ width: '100%', maxWidth: 560, display: 'block', margin: '0 auto' }}>
            {/* ── Anomaly path (left side, short) ── */}
            {/* Nodes */}
            <circle cx="130" cy="30" r="18" fill={color} opacity="0.15" stroke={color} strokeWidth="1.5" />
            <text x="130" y="35" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">Raiz</text>

            <circle cx="60" cy="100" r="18" fill={color} opacity="0.15" stroke={color} strokeWidth="1.5" />
            <text x="60" y="105" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">Nó 2</text>

            <circle cx="30" cy="175" r="18" fill={color} opacity="0.9" />
            <text x="30" y="180" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">A</text>

            <circle cx="95" cy="175" r="14" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
            <text x="95" y="180" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">N1–N6</text>

            <circle cx="200" cy="100" r="14" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
            <text x="200" y="105" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">N7</text>

            {/* Edges (anomaly tree) */}
            <line x1="113" y1="42" x2="77" y2="88" stroke={color} strokeWidth="1.8" />
            <line x1="147" y1="42" x2="186" y2="88" stroke="var(--text-secondary)" strokeWidth="1.2" />
            <line x1="43" y1="112" x2="33" y2="157" stroke={color} strokeWidth="1.8" />
            <line x1="72" y1="112" x2="88" y2="161" stroke="var(--text-secondary)" strokeWidth="1.2" />

            {/* Path length annotation */}
            <text x="18" y="220" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">h(A) = 2</text>
            <text x="130" y="250" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Anomalia — isolada com 2 splits</text>

            {/* ── Normal point path (right side, deep) ── */}
            <circle cx="420" cy="30" r="18" fill="#f97316" opacity="0.15" stroke="#f97316" strokeWidth="1.5" />
            <text x="420" y="35" textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="700">Raiz</text>

            <circle cx="360" cy="90" r="14" fill="#f97316" opacity="0.12" stroke="#f97316" strokeWidth="1" />
            <circle cx="420" cy="90" r="14" fill="#f97316" opacity="0.12" stroke="#f97316" strokeWidth="1" />
            <circle cx="480" cy="90" r="14" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />

            <circle cx="390" cy="155" r="14" fill="#f97316" opacity="0.12" stroke="#f97316" strokeWidth="1" />
            <circle cx="450" cy="155" r="14" fill="#f97316" opacity="0.12" stroke="#f97316" strokeWidth="1" />

            <circle cx="375" cy="215" r="14" fill="#f97316" opacity="0.9" />
            <text x="375" y="220" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">N3</text>
            <circle cx="415" cy="215" r="14" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
            <text x="415" y="220" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">…</text>

            {/* Edges (normal tree) */}
            <line x1="405" y1="42" x2="370" y2="78" stroke="#f97316" strokeWidth="1.5" />
            <line x1="420" y1="48" x2="420" y2="78" stroke="#f97316" strokeWidth="1.5" />
            <line x1="435" y1="42" x2="470" y2="78" stroke="var(--text-secondary)" strokeWidth="1" />
            <line x1="405" y1="101" x2="393" y2="141" stroke="#f97316" strokeWidth="1.5" />
            <line x1="427" y1="101" x2="442" y2="141" stroke="#f97316" strokeWidth="1.5" />
            <line x1="383" y1="168" x2="376" y2="201" stroke="#f97316" strokeWidth="1.5" />
            <line x1="398" y1="168" x2="408" y2="201" stroke="var(--text-secondary)" strokeWidth="1" />

            <text x="375" y="248" textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="700">h(N3) = 4</text>
            <text x="420" y="265" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Ponto normal — precisa de mais splits</text>
          </svg>
        </div>

        <div style={S.note}>
          O Isolation Forest constrói t=100 árvores (tipicamente) e calcula a profundidade média de
          isolamento <InlineMath math="E[h(x)]" /> ao longo de todas as árvores. Anomalias têm
          <InlineMath math="E[h(x)]" /> baixo; pontos normais têm <InlineMath math="E[h(x)]" /> elevado.
          Sub-amostras de tamanho <InlineMath math="\psi=256" /> são suficientes — anomalias isolam-se
          rapidamente antes das árvores ficarem profundas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 4: Anomaly Score ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Anomaly Score — Fórmula e Interpretação</h2>
        <p style={S.p}>
          O score de anomalia normaliza a profundidade média de isolamento pelo comprimento médio esperado
          numa Binary Search Tree com n pontos, tornando os scores comparáveis entre datasets de
          diferentes tamanhos:
        </p>
        <div style={S.math}>
          <BlockMath math={String.raw`s(x, n) = 2^{-\,E[h(x)]\,/\,c(n)}`} />
        </div>
        <p style={S.p}>
          Onde <InlineMath math="c(n)" /> é o comprimento médio de busca esperado numa BST com n nós:
        </p>
        <div style={S.math}>
          <BlockMath math={String.raw`c(n) = 2\,H(n-1) - \frac{2(n-1)}{n}, \quad H(i) = \ln(i) + \gamma_{\text{EM}}`} />
        </div>
        <p style={S.p}>
          com <InlineMath math="\gamma_{\text{EM}} \approx 0.5772" /> (constante de Euler-Mascheroni).
          A normalização por <InlineMath math="c(n)" /> garante que <InlineMath math="s \in (0, 1)" />.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Valor de s(x, n)</th>
              <th style={S.th}>Interpretação</th>
              <th style={S.th}>Acção típica</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['s → 1', 'Anomalia clara — isolado muito rapidamente (E[h(x)] ≪ c(n))', 'Sinalizar para investigação imediata'],
              ['s ≈ 0.5', 'Score ambíguo — sem discriminação clara', 'Analisar manualmente ou ajustar threshold'],
              ['s → 0', 'Ponto muito normal — difícil de isolar (E[h(x)] ≫ c(n))', 'Ignorar / baixa prioridade'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 700, color, fontFamily: 'monospace', fontSize: '0.9rem' }}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        
          <strong>Intuição da fórmula:</strong> se <InlineMath math="E[h(x)] = c(n)" />, o ponto tem
          comportamento "médio" e <InlineMath math="s = 2^{-1} = 0.5" />. Se <InlineMath math="E[h(x)] \to 0" />,
          isola imediatamente e <InlineMath math="s \to 1" />. Se <InlineMath math="E[h(x)] \gg c(n)" />,
          muito difícil de isolar e <InlineMath math="s \to 0" />. A forma exponencial comprime a escala
          de forma que scores extremos se destacam claramente.
        
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 5: Extended Isolation Forest ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Extended Isolation Forest</h2>
        <p style={S.p}>
          O Isolation Forest padrão usa sempre splits paralelos aos eixos: escolhe-se uma feature e
          um threshold. Isto cria um artefacto conhecido: "fantasmas de anomalia" — regiões sem dados
          que recebem score elevado ao longo das extensões das fronteiras dos clusters normais.
        </p>

        {/* SVG comparing axis-aligned vs Extended IF */}
        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            Splits axis-aligned (IF padrão) vs hiperplanos oblíquos (Extended IF)
          </p>
          <svg viewBox="0 0 540 220" style={{ width: '100%', maxWidth: 540, display: 'block', margin: '0 auto' }}>
            {/* ── Left panel: Standard IF ── */}
            <rect x="5" y="5" width="255" height="210" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
            <text x="132" y="22" textAnchor="middle" fontSize="11" fill="var(--text-secondary)" fontWeight="600">IF padrão — axis-aligned</text>
            {/* Cluster */}
            {[[80,100],[95,85],[95,115],[110,90],[110,110],[125,80],[125,120],[140,90],[140,110],[155,100]].map(([x,y],i) => (
              <circle key={`l${i}`} cx={x} cy={y} r="5" fill="#f97316" opacity="0.7" />
            ))}
            {/* Axis-aligned splits */}
            <line x1="165" y1="20" x2="165" y2="205" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,3" />
            <line x1="20" y1="65" x2="165" y2="65" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,3" />
            {/* Ghost region highlight */}
            <rect x="165" y="65" width="80" height="140" fill={color} opacity="0.07" />
            <text x="205" y="148" textAnchor="middle" fontSize="9" fill={color}>"fantasma"</text>
            <text x="205" y="160" textAnchor="middle" fontSize="9" fill={color}>score alto</text>
            <text x="205" y="172" textAnchor="middle" fontSize="9" fill={color}>sem dados</text>
            <text x="132" y="205" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">artefactos em extensões dos eixos</text>

            {/* ── Right panel: Extended IF ── */}
            <rect x="280" y="5" width="255" height="210" rx="8" fill="var(--bg-secondary)" stroke={color} strokeWidth="1" />
            <text x="407" y="22" textAnchor="middle" fontSize="11" fill={color} fontWeight="600">Extended IF — hiperplanos oblíquos</text>
            {/* Cluster (same positions offset by 275) */}
            {[[80,100],[95,85],[95,115],[110,90],[110,110],[125,80],[125,120],[140,90],[140,110],[155,100]].map(([x,y],i) => (
              <circle key={`r${i}`} cx={x+275} cy={y} r="5" fill="#f97316" opacity="0.7" />
            ))}
            {/* Oblique splits */}
            <line x1="310" y1="55" x2="500" y2="170" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" />
            <line x1="290" y1="150" x2="470" y2="55" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" />
            <text x="407" y="205" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">sem artefactos — scores uniformes fora do cluster</text>
          </svg>
        </div>

        <p style={S.p}>
          No Extended Isolation Forest (Hariri et al., 2018), cada split usa um <strong>hiperplano aleatório</strong>:
          escolhe-se um vector de direcção <InlineMath math="\mathbf{n} \sim \mathcal{N}(0, I_d)" /> e um
          ponto de intercepção <InlineMath math="\mathbf{p}" /> aleatório dentro dos dados actuais.
          O split é <InlineMath math="(\mathbf{x} - \mathbf{p}) \cdot \mathbf{n} < 0" /> (esquerda)
          vs <InlineMath math="\geq 0" /> (direita).
        </p>
        <div style={S.note}>
          Hiperplanos oblíquos eliminam os artefactos e produzem scores mais suaves e uniformes em regiões
          sem dados. Em alta dimensão (d grande), o EIF oferece vantagens adicionais pois explora
          naturalmente direcções que o IF padrão nunca consideraria.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 6: Comparação de Métodos ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Comparação de Métodos de Anomaly Detection</h2>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Pressuposto</th>
              <th style={S.th}>Alta dimensão</th>
              <th style={S.th}>Grande N</th>
              <th style={S.th}>Interpretabilidade</th>
              <th style={S.th}>Densidade</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['z-score / IQR (Módulo 02)', 'Distribuição conhecida (Normal / box)', 'Mau — univariado', 'Excelente', 'Alta', 'Sim (Gaussiana)'],
              ['LOF (Módulo 06)', 'Anomalias têm densidade local baixa', 'Razoável', 'Mau O(n²)', 'Média', 'Sim (local)'],
              ['One-Class SVM', 'Fronteira de hipersuperfície em torno do normal', 'Razoável (kernel)', 'Mau O(n²–n³)', 'Baixa', 'Não'],
              ['Isolation Forest', 'Anomalias isolam-se com menos splits', 'Bom', 'Excelente O(nψt)', 'Média', 'Não'],
              ['Extended IF', 'Mesmo que IF + hiperplanos oblíquos', 'Muito bom', 'Excelente', 'Média', 'Não'],
              ['Autoencoder', 'Anomalias têm erro de reconstrução alto', 'Muito bom', 'Bom (GPU)', 'Baixa', 'Não'],
            ].map(([a, ...rest]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 700, color, fontSize: '0.85rem' }}>{a}</td>
                {rest.map((v, i) => (
                  <td key={i} style={{ ...S.td, fontSize: '0.83rem' }}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        
          <strong>Complexidade do Isolation Forest:</strong> treinar t árvores numa sub-amostra de
          tamanho <InlineMath math="\psi" /> é <InlineMath math="O(t \cdot \psi \cdot \log \psi)" />.
          A inferência num novo ponto é <InlineMath math="O(t \cdot \log \psi)" />.
          Com <InlineMath math="\psi = 256" /> e <InlineMath math="t = 100" />, treino e inferência
          são praticamente instantâneos mesmo em datasets com milhões de pontos.
        
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 7: Guia de Decisão ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Guia de Decisão</h2>
        <p style={S.p}>
          A escolha do método de anomaly detection depende do volume de dados, dimensionalidade,
          disponibilidade de labels e requisitos de velocidade:
        </p>
        <div style={S.highlight}>
          <strong>Quando usar z-score / IQR:</strong>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', lineHeight: 1.9, color: 'var(--text-primary)' }}>
            <li>Análise univariada ou bivariada simples</li>
            <li>Dados aproximadamente gaussianos ou com outliers óbvios</li>
            <li>Necessidade de explicação imediata ("o valor está a N desvios padrão da média")</li>
            <li>Pipeline ETL de qualidade de dados onde velocidade é crítica</li>
          </ul>
        </div>
        <div style={S.note}>
          <strong>Quando usar LOF (Módulo 06):</strong> anomalias definidas por <em>densidade local</em>
          (grupos com densidades muito diferentes, como ilhas de pontos em regiões de densidade variável).
          Funciona bem com N &lt; 100 000 e baixa a média dimensionalidade. Parâmetro k (vizinhos)
          requer tuning cuidadoso.
        </div>
        <div style={S.note}>
          <strong>Quando usar Isolation Forest:</strong> o método de eleição para a maioria dos cenários
          práticos — large N (milhões de pontos), alta dimensionalidade (dezenas a centenas de features),
          velocidade de treino/inferência necessária, sem pressupostos de distribuição.
          Casos de uso típicos: fraud detection em tempo real, anomalias em logs de sistema,
          controlo de qualidade industrial (sensores IoT), detecção de intrusão em redes.
        </div>
        <div style={S.note}>
          <strong>Quando usar Autoencoders:</strong> relações não-lineares complexas entre features,
          dados de alta dimensão com estrutura rica (imagens, séries temporais longas), disponibilidade
          de GPU e dados suficientes para treinar a rede.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 8: Fecho do Curso ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Fecho do Curso — O Ciclo CRISP-DM Completo</h2>
        <p style={S.p}>
          Ao longo deste curso percorremos todo o espectro do Data Mining, sempre ancorados no framework
          CRISP-DM introduzido no Módulo 01: <em>Business Understanding → Data Understanding →
          Data Preparation → Modeling → Evaluation → Deployment</em>.
        </p>
        <p style={S.p}>
          A deteção de anomalias — o tema deste último módulo — encaixa naturalmente em múltiplas fases
          do ciclo: na fase de <strong>Data Understanding</strong> e <strong>Data Preparation</strong>,
          o Isolation Forest e o LOF (Módulo 06) identificam outliers que corrompem os dados antes do
          treino de qualquer modelo. Na fase de <strong>Modeling</strong>, a deteção de anomalias
          <em>é</em> a tarefa de negócio (fraud detection, fault detection, intrusão em redes) —
          o modelo final a deployar em produção.
        </p>
        <p style={S.p}>
          Os algoritmos vistos neste curso formam um ecossistema complementar: estatísticas descritivas
          (Módulo 02) para entender os dados, clustering K-Means e DBSCAN (Módulos 04–05) para descobrir
          estrutura, LOF (Módulo 06) para anomalias locais, Decision Trees e Random Forests (Módulos 07–08)
          para classificação e regressão supervisionadas, Gradient Boosting (Módulo 09) para performance
          de topo em dados tabulares, ALS (Módulo 10) para recomendação colaborativa, e Isolation Forest
          (este módulo) para deteção de raridades sem pressupostos de distribuição.
        </p>
        <div style={S.highlight}>
          O CRISP-DM não é um processo linear — é iterativo. Os resultados do Isolation Forest em
          produção alimentam de volta o Business Understanding (o que é realmente uma anomalia no
          contexto de negócio?) e o Data Preparation (devo remover estes outliers antes de treinar
          o próximo modelo?). O fim de um ciclo é o início do seguinte.
        </div>
      </div>

      <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>9. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.4rem"}}><strong>Anomaly Detection — Paisagem</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Insight Central do Isolation Forest</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Isolation Tree — Construção</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Anomaly Score — Fórmula e Interpretação</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Extended Isolation Forest</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Comparação de Métodos de Anomaly Detection</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Guia de Decisão</strong> — conceito central desta lecture.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
