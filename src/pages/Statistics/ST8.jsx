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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

/* ── SVG: Homoskedasticidade vs Heteroskedasticidade ── */
function HeteroSVG() {
  const homoPts = [
    [30,95],[45,85],[60,90],[75,80],[90,88],[105,82],[120,86],[135,78],[150,84],[165,80],
    [30,75],[50,70],[70,72],[90,68],[110,74],[130,69],[150,73],[165,67],
    [40,60],[65,65],[85,62],[105,58],[125,63],[145,60],[160,55],
  ];
  const heteroPts = [
    [30,90],[35,85],[40,88],[45,80],[55,92],[55,75],[65,95],[65,68],[75,100],[75,62],
    [90,105],[90,55],[105,108],[105,50],[120,112],[120,46],[135,118],[135,42],
    [150,122],[150,38],[165,128],[165,32],
  ];
  return (
    <svg viewBox="0 0 400 140" style={{ width: '100%', maxWidth: 700 }}>
      {/* Panel 1: Homoskedastic */}
      <text x="10" y="12" fontSize="9" fill={color} fontWeight="700">HOMOSKEDÁSTICO</text>
      <line x1="20" y1="120" x2="180" y2="120" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="20" y1="20" x2="20" y2="120" stroke="var(--text-secondary)" strokeWidth="1" />
      {/* trend line */}
      <line x1="20" y1="100" x2="175" y2="60" stroke={color} strokeWidth="1.5" strokeDasharray="4,2" />
      {/* band */}
      <polygon points="20,95 175,55 175,65 20,105" fill={color} fillOpacity="0.07" />
      {homoPts.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.2" fill={color} fillOpacity="0.6" />
      ))}
      <text x="95" y="134" fontSize="8" fill="var(--text-secondary)" textAnchor="middle">X</text>
      <text x="10" y="72" fontSize="8" fill="var(--text-secondary)" textAnchor="middle">e</text>

      {/* Panel 2: Heteroskedastic */}
      <text x="210" y="12" fontSize="9" fill="#4a9eed" fontWeight="700">HETEROSKEDÁSTICO</text>
      <line x1="220" y1="120" x2="380" y2="120" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="220" y1="20" x2="220" y2="120" stroke="var(--text-secondary)" strokeWidth="1" />
      {/* trend line */}
      <line x1="220" y1="100" x2="375" y2="60" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,2" />
      {/* funnel */}
      <polygon points="220,90 375,20 375,100 220,110" fill="#4a9eed" fillOpacity="0.07" />
      {heteroPts.map(([cx, cy], i) => (
        <circle key={i} cx={cx + 200} cy={cy} r="2.2" fill="#4a9eed" fillOpacity="0.6" />
      ))}
      <text x="295" y="134" fontSize="8" fill="var(--text-secondary)" textAnchor="middle">X</text>
      <text x="210" y="72" fontSize="8" fill="var(--text-secondary)" textAnchor="middle">e</text>
    </svg>
  );
}

/* ── SVG: Heatmap de Correlação 4×4 ── */
function CorrelationHeatmap() {
  const vars = ['X1', 'X2', 'X3', 'X4'];
  const corr = [
    [1.00, 0.87, 0.12, 0.34],
    [0.87, 1.00, 0.09, 0.28],
    [0.12, 0.09, 1.00, 0.61],
    [0.34, 0.28, 0.61, 1.00],
  ];
  const cellSize = 52;
  const offset = 28;
  function cellColor(v) {
    const abs = Math.abs(v);
    if (abs > 0.8) return '#4a9eed';
    if (abs > 0.5) return '#4a9eed';
    if (abs > 0.3) return '#4a9eed';
    return color;
  }
  function cellOpacity(v) {
    return 0.15 + Math.abs(v) * 0.6;
  }
  return (
    <svg viewBox={`0 0 ${offset + 4 * cellSize + 10} ${offset + 4 * cellSize + 20}`} style={{ width: '100%', maxWidth: 360, display: 'block', margin: '0 auto' }}>
      {vars.map((v, i) => (
        <text key={i} x={offset + i * cellSize + cellSize / 2} y={offset - 6} fontSize="10" fill="var(--text-secondary)" textAnchor="middle" fontWeight="600">{v}</text>
      ))}
      {vars.map((v, i) => (
        <text key={i} x={offset - 4} y={offset + i * cellSize + cellSize / 2 + 4} fontSize="10" fill="var(--text-secondary)" textAnchor="end" fontWeight="600">{v}</text>
      ))}
      {corr.map((row, r) =>
        row.map((val, c) => (
          <g key={`${r}-${c}`}>
            <rect
              x={offset + c * cellSize + 1}
              y={offset + r * cellSize + 1}
              width={cellSize - 2}
              height={cellSize - 2}
              fill={cellColor(val)}
              fillOpacity={cellOpacity(val)}
              rx="3"
            />
            <text
              x={offset + c * cellSize + cellSize / 2}
              y={offset + r * cellSize + cellSize / 2 + 4}
              fontSize="9"
              fill="var(--text-primary)"
              textAnchor="middle"
              fontWeight={Math.abs(val) > 0.8 && r !== c ? '700' : '400'}
            >
              {val.toFixed(2)}
            </text>
          </g>
        ))
      )}
      <text x={(offset + 4 * cellSize) / 2} y={offset + 4 * cellSize + 15} fontSize="8" fill="var(--text-secondary)" textAnchor="middle">
        Valores altos fora da diagonal indicam multicolinearidade
      </text>
    </svg>
  );
}

/* ── SVG: Curva Logística ── */
function LogisticSVG() {
  function logistic(x) { return 1 / (1 + Math.exp(-x)); }
  const width = 340;
  const height = 140;
  const xMin = -5;
  const xMax = 5;
  const padL = 35;
  const padB = 25;
  const padT = 15;
  const plotW = width - padL - 28;
  const plotH = height - padB - padT;

  function toSVG(x, y) {
    const sx = padL + ((x - xMin) / (xMax - xMin)) * plotW;
    const sy = padT + (1 - y) * plotH;
    return [sx, sy];
  }

  const points = [];
  for (let i = 0; i <= 100; i++) {
    const x = xMin + (i / 100) * (xMax - xMin);
    points.push(toSVG(x, logistic(x)));
  }
  const d = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');

  const [thx, thy] = toSVG(0, 0.5);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', maxWidth: 520, display: 'block', margin: '0 auto' }}>
      {/* axes */}
      <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={padL} y1={padT + plotH} x2={padL + plotW} y2={padT + plotH} stroke="var(--text-secondary)" strokeWidth="1" />
      {/* y=0 and y=1 guides */}
      <line x1={padL} y1={padT} x2={padL + plotW} y2={padT} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,3" />
      <text x={padL - 4} y={padT + 4} fontSize="8" fill="var(--text-secondary)" textAnchor="end">1</text>
      <text x={padL - 4} y={padT + plotH + 4} fontSize="8" fill="var(--text-secondary)" textAnchor="end">0</text>
      {/* threshold line */}
      <line x1={padL} y1={thy} x2={padL + plotW} y2={thy} stroke="#4a9eed" strokeWidth="1" strokeDasharray="4,3" />
      <text x={padL + plotW + 2} y={thy + 3} fontSize="7" fill="#4a9eed">0.5</text>
      {/* vertical at x=0 */}
      <line x1={thx} y1={padT} x2={thx} y2={padT + plotH} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="2,3" />
      {/* curve */}
      <path d={d} fill="none" stroke={color} strokeWidth="2.2" />
      <text x={padL + plotW / 2} y={height - 4} fontSize="8" fill="var(--text-secondary)" textAnchor="middle">Preditor Linear (X&#946;)</text>
      <text x={padL - 14} y={padT + plotH / 2} fontSize="8" fill="var(--text-secondary)" textAnchor="middle" transform={`rotate(-90,${padL - 14},${padT + plotH / 2})`}>P(Y=1)</text>
      <text x={thx + 4} y={padT + 8} fontSize="7" fill={color}>limiar 0.5</text>
    </svg>
  );
}

/* ── Main Component ── */
export default function ST8() {
  return (
    <div style={S.page}>
      {/* Back */}
      <Link to="/statistics" style={S.back}>
        <ArrowLeft size={16} />
        Voltar a Statistics
      </Link>

      {/* Header */}
      <div style={S.tag}>MÓDULO 08</div>
      <h1 style={S.h1}>Problemas de Especificação &amp; Modelos Alternativos</h1>

      {/* ── 1. Heteroskedasticidade ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Heteroskedasticidade</h2>
        <p style={S.p}>
          O pressuposto de homoskedasticidade exige que a variância dos erros seja constante:
          <InlineMath math="\mathrm{Var}(\varepsilon_i) = \sigma^2" /> para todo o <em>i</em>. A heteroskedasticidade ocorre quando essa variância
          depende dos regressores: <InlineMath math="\mathrm{Var}(\varepsilon_i) = \sigma_i^2" />. É frequente em dados de secção
          cruzada — por exemplo, o consumo das famílias tende a ter maior dispersão para rendimentos mais elevados.
        </p>
        <div style={S.highlight}>
          <strong>Consequência principal:</strong> o OLS permanece não enviesado e consistente, mas os
          erros-padrão estimados são incorretos, tornando os testes t, F e os intervalos de confiança inválidos.
          O estimador deixa de ser BLUE (Gauss-Markov falha).
        </div>
        <div style={S.diagram}>
          <HeteroSVG />
        </div>
        <h3 style={S.h3}>Testes de Detecção</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Teste</th>
              <th style={S.th}>Hipótese Nula</th>
              <th style={S.th}>Procedimento</th>
              <th style={S.th}>R</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Breusch-Pagan</strong></td>
              <td style={S.td}>σ<sub>i</sub>² = σ² (homoskedasticidade)</td>
              <td style={S.td}>Regredir e<sub>i</sub>² nos regressores originais; estatística LM</td>
              <td style={S.td}><code>bptest(modelo)</code></td>
            </tr>
            <tr>
              <td style={S.td}><strong>White</strong></td>
              <td style={S.td}>Homoskedasticidade</td>
              <td style={S.td}>Incluir termos quadráticos e cruzados; mais geral que BP</td>
              <td style={S.td}><code>bptest(modelo, ~ fitted + I(fitted²))</code></td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          O gráfico de resíduos vs. valores ajustados (padrão em R) é o primeiro diagnóstico visual:
          uma forma de funil sugere heteroskedasticidade.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 2. Correcção ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Correcção da Heteroskedasticidade</h2>
        <p style={S.p}>
          Existem três abordagens principais, que diferem na quantidade de informação disponível
          sobre a estrutura da variância.
        </p>
        <h3 style={S.h3}>Erros-Padrão Robustos (HC)</h3>
        <p style={S.p}>
          A abordagem de Huber-White mantém os coeficientes OLS mas corrige a estimação da variância
          sem assumir nenhuma forma funcional para σ<sub>i</sub>². A matriz de variância-covariância
          robusta é:
        </p>
        
          <BlockMath math="\hat{V}_{HC} = (X'X)^{-1}\!\left(\sum e_i^2\, x_i x_i'\right)(X'X)^{-1}" />
          <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Variantes: HC0, HC1, HC2, HC3 — a HC3 é preferida em amostras pequenas.
          </span>
        
        <h3 style={S.h3}>Mínimos Quadrados Ponderados (WLS)</h3>
        <p style={S.p}>
          Quando a estrutura da variância é conhecida (<InlineMath math="\sigma_i^2 = \sigma^2/w_i" />), ponderar
          cada observação por <InlineMath math="w_i" /> restaura a homoskedasticidade e devolve a eficiência ao
          estimador. Minimiza <InlineMath math="\sum w_i(y_i - x_i'\beta)^2" />.
        </p>
        <h3 style={S.h3}>Mínimos Quadrados Generalizados (GLS)</h3>
        <p style={S.p}>
          Generalização que acomoda também correlação entre erros (autocorrelação).
          <InlineMath math="\hat{\beta}_{GLS} = (X'\Omega^{-1}X)^{-1} X'\Omega^{-1}y" />, onde <InlineMath math="\Omega" /> é a matriz de variância dos erros.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 3. Multicolinearidade ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Multicolinearidade</h2>
        <p style={S.p}>
          A multicolinearidade surge quando dois ou mais regressores estão altamente correlacionados.
          A forma extrema — colinearidade perfeita — torna X'X singular e o OLS é impossível de calcular.
          Na prática, a forma imperfeita é mais comum e cria problemas de inferência.
        </p>
        <div style={S.highlight}>
          <strong>Consequências:</strong>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', lineHeight: 1.9 }}>
            <li>Erros-padrão muito elevados — difícil rejeitar H₀ mesmo com efeitos reais</li>
            <li>Estimativas instáveis — pequenas alterações nos dados mudam muito os coeficientes</li>
            <li>Sinais dos coeficientes podem ser contra-intuitivos</li>
            <li>R² pode ser alto mas nenhum t é significativo</li>
          </ul>
        </div>
        <h3 style={S.h3}>Factor de Inflação da Variância (VIF)</h3>
        <p style={S.p}>
          Para cada regressor j, regride X<sub>j</sub> em todos os outros regressores e obtém
          R<sub>j</sub>². O VIF mede quanto a variância do coeficiente é inflacionada:
        </p>
        
          <BlockMath math="\mathrm{VIF}_j = \frac{1}{1 - R_j^2}" />
          <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            VIF = 1: sem colinearidade. VIF entre 1-5: aceitável. VIF &gt; 10: problema grave.
          </span>
        
        <h3 style={S.h3}>Mapa de Correlação</h3>
        <p style={S.p}>
          O heatmap abaixo ilustra uma matriz de correlação onde X1 e X2 têm correlação 0.87
          — valor problemático que inflacionaria os VIFs correspondentes.
        </p>
        <div style={S.diagram}>
          <CorrelationHeatmap />
        </div>
        <h3 style={S.h3}>Soluções</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Abordagem</th>
              <th style={S.th}>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Remover variável</td>
              <td style={S.td}>Eliminar um dos regressores redundantes (atenção ao viés de variável omitida)</td>
            </tr>
            <tr>
              <td style={S.td}>Análise em Componentes Principais</td>
              <td style={S.td}>Construir índices ortogonais a partir das variáveis correlacionadas</td>
            </tr>
            <tr>
              <td style={S.td}>Ridge Regression</td>
              <td style={S.td}>Regularização L2: penaliza a norma dos coeficientes, reduz variância</td>
            </tr>
            <tr>
              <td style={S.td}>Mais dados</td>
              <td style={S.td}>A multicolinearidade é menos severa com amostras maiores</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 4. Variáveis Dummy ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Variáveis Dummy</h2>
        <p style={S.p}>
          Variáveis categóricas não podem entrar directamente numa regressão. Codificam-se com
          variáveis indicadoras (dummy): D<sub>k</sub> = 1 se a observação pertence à categoria k,
          e 0 caso contrário. Para uma variável com <em>k</em> categorias, incluem-se apenas
          <em> k − 1</em> dummies — a categoria omitida é a <strong>categoria de base</strong>.
        </p>
        <div style={S.highlight}>
          <strong>Armadilha da Dummy (Dummy Trap):</strong> incluir <em>k</em> dummies para
          <em> k</em> categorias cria colinearidade perfeita com a constante (soma = 1 para todo i).
          Omitir sempre uma categoria.
        </div>
        <h3 style={S.h3}>Interpretação dos Coeficientes</h3>
        <p style={S.p}>
          Com base = "Norte" e dummies "Sul" e "Centro":
        </p>
        <div style={S.code}>
{`y = β₀ + β₁·Sul + β₂·Centro + β₃·x + ε

# β₀  → intercepto para Norte (base)
# β₁  → diferença média Sul vs Norte (ceteris paribus)
# β₂  → diferença média Centro vs Norte (ceteris paribus)
# β₃  → efeito de x (igual em todas as regiões)`}
        </div>
        <h3 style={S.h3}>Termos de Interacção com Dummy</h3>
        <p style={S.p}>
          Interagir a dummy com um regressor contínuo permite que o declive de X varie entre grupos:
          y = β₀ + β₁D + β₂X + β₃(D×X) + ε. O declive de X é β₂ para D=0 e β₂+β₃ para D=1.
        </p>
        <div style={S.note}>
          Em R, as dummies são criadas automaticamente via <code>factor()</code> — o primeiro
          nível alfabético torna-se base, alterável com <code>relevel()</code>.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 5. Teste RESET ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Teste RESET de Ramsey</h2>
        <p style={S.p}>
          O teste RESET (Regression Specification Error Test) de Ramsey verifica má especificação
          funcional: avalia se a inclusão de potências dos valores ajustados (ŷ², ŷ³) melhora
          significativamente o ajustamento.
        </p>
        <div style={S.highlight}>
          <strong>Procedimento:</strong>
          <ol style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', lineHeight: 2 }}>
            <li>Estimar o modelo restrito: y = Xβ + ε, obter ŷ</li>
            <li>Estimar modelo aumentado: y = Xβ + γ₁ŷ² + γ₂ŷ³ + ε</li>
            <li>Testar H₀: γ₁ = γ₂ = 0 com teste F</li>
          </ol>
        </div>
        <p style={S.p}>
          Se H₀ for rejeitada, o modelo sofre de má especificação funcional: pode indicar
          não-linearidade omitida, variáveis em falta ou transformação incorreta de Y. Note que
          o teste não indica qual é a especificação correcta — apenas sinaliza o problema.
        </p>
        <div style={S.note}>
          O RESET tem baixo poder contra algumas formas de má especificação e elevado poder
          contra outras. Deve complementar-se com diagnósticos gráficos e raciocínio económico.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 8. Regressão Logística ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Regressão Logística</h2>
        <p style={S.p}>
          Quando Y ∈ {'{0, 1}'}, o Modelo de Probabilidade Linear (OLS com Y binário) produz
          probabilidades previstas fora do intervalo [0,1] e erros heteroskedásticos por construção.
          A regressão logística modela directamente a probabilidade via a função logit:
        </p>
        
          <BlockMath math="\mathrm{logit}(p_i) = \log\!\left(\frac{p_i}{1-p_i}\right) = X\beta" />
          <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Equivalente a: <InlineMath math="p_i = \frac{e^{X\beta}}{1+e^{X\beta}} = \frac{1}{1+e^{-X\beta}}" />
          </span>
        
        <h3 style={S.h3}>Curva Logística</h3>
        <div style={S.diagram}>
          <LogisticSVG />
        </div>
        <h3 style={S.h3}>Interpretação: Odds Ratios</h3>
        <p style={S.p}>
          Os coeficientes β<sub>j</sub> não se interpretam directamente como variações em p.
          O expoencial e<sup>β<sub>j</sub></sup> é o <strong>odds ratio</strong>: um aumento de
          uma unidade em X<sub>j</sub> multiplica as odds de Y=1 por e<sup>β<sub>j</sub></sup>.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Métrica</th>
              <th style={S.th}>Definição</th>
              <th style={S.th}>Obter em R</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Log-odds</td>
              <td style={S.td}><InlineMath math="X\beta" /> (saída directa)</td>
              <td style={S.td}><code>coef(modelo)</code></td>
            </tr>
            <tr>
              <td style={S.td}>Odds Ratio</td>
              <td style={S.td}><InlineMath math="e^{\beta}" /></td>
              <td style={S.td}><code>exp(coef(modelo))</code></td>
            </tr>
            <tr>
              <td style={S.td}>Efeito Marginal</td>
              <td style={S.td}><InlineMath math="\beta \cdot p(1-p)" /> (varia com X)</td>
              <td style={S.td}><code>margins(modelo)</code></td>
            </tr>
            <tr>
              <td style={S.td}>Probabilidade Prevista</td>
              <td style={S.td}><InlineMath math="1/(1+e^{-X\hat{\beta}})" /></td>
              <td style={S.td}><code>predict(modelo, type="response")</code></td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Goodness-of-fit: pseudo-R² de McFadden = 1 − ℓ(β̂)/ℓ(β₀). Avaliar também com
          matriz de confusão, curva ROC e AUC.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 9. Selecção de Variáveis ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Selecção de Variáveis</h2>
        <p style={S.p}>
          Adicionar regressores aumenta sempre o R², mas pode piorar o ajustamento fora da amostra
          (overfitting). Os critérios de selecção penalizam a complexidade do modelo.
        </p>
        <h3 style={S.h3}>Critérios de Informação</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Critério</th>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Penalização</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>AIC</strong></td>
              <td style={S.td}><InlineMath math="-2\ell + 2k" /></td>
              <td style={S.td}>Leve; prefere modelos maiores; bom para previsão</td>
            </tr>
            <tr>
              <td style={S.td}><strong>BIC</strong></td>
              <td style={S.td}><InlineMath math="-2\ell + k\cdot\log(n)" /></td>
              <td style={S.td}>Mais severa para n grande; consistente para selecção</td>
            </tr>
            <tr>
              <td style={S.td}><strong>R² Ajustado</strong></td>
              <td style={S.td}><InlineMath math="1 - \frac{RSS/(n-k-1)}{TSS/(n-1)}" /></td>
              <td style={S.td}>Penaliza k; pode diminuir ao adicionar variáveis inúteis</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Mallows Cp</strong></td>
              <td style={S.td}><InlineMath math="RSS/s^2 - n + 2k" /></td>
              <td style={S.td}>Próximo de k: bom modelo; muito maior: viés de variável omitida</td>
            </tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Stepwise e Regularização</h3>
        <p style={S.p}>
          Os métodos stepwise (forward, backward, both) avaliam sequencialmente a adição ou
          remoção de variáveis com base no AIC/BIC. São heurísticos e sensíveis à ordem.
        </p>
        
          <strong>LASSO (Least Absolute Shrinkage and Selection Operator)</strong> minimiza:
          <BlockMath math="RSS + \lambda \sum_j |\beta_j|" />
          <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            A penalização L1 força coeficientes de variáveis irrelevantes exactamente a zero,
            realizando selecção automática. λ escolhido por validação cruzada.
          </span>
        
      </section>
</div>
  );
}
