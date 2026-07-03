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

/* ── SVG: PCA geometric diagram ── */
const PCAGeometricDiagram = () => {
  // Points forming an elongated cloud
  const points = [
    [130, 175], [150, 160], [165, 148], [180, 135], [195, 122],
    [210, 112], [225, 100], [240, 90], [140, 165], [158, 152],
    [172, 142], [185, 128], [200, 118], [215, 106], [228, 95],
    [145, 182], [160, 168], [177, 154], [192, 138], [207, 124],
    [220, 113], [235, 102], [155, 158], [170, 145], [183, 132],
    [197, 120], [212, 108], [227, 97],
    // scattered points off-axis
    [148, 170], [163, 157], [178, 143], [193, 130], [208, 118],
    [137, 178], [152, 163], [167, 150], [182, 137], [197, 124],
  ];

  // PC1 runs diagonally bottom-left → top-right (direction of max variance)
  // PC2 runs perpendicular
  // centroid ~(185, 135)
  const cx = 185, cy = 135;

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', textAlign: 'left' }}>
        Interpretação Geométrica do PCA — Nuvem de Pontos 2D
      </p>
      <svg viewBox="0 0 370 270" style={{ maxWidth: '100%', height: 'auto' }}>
        {/* axes */}
        <line x1="30" y1="250" x2="360" y2="250" stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1="30" y1="250" x2="30" y2="20" stroke="var(--text-secondary)" strokeWidth="1" />
        <text x="355" y="265" fill="var(--text-secondary)" fontSize="11">x₁</text>
        <text x="12" y="18" fill="var(--text-secondary)" fontSize="11">x₂</text>

        {/* data points */}
        {points.map(([px, py], i) => (
          <circle key={i} cx={px} cy={py} r={3.5} fill={color} fillOpacity={0.5} />
        ))}

        {/* PC1 arrow — direction (1, -1) normalised, through centroid */}
        {/* PC1: from (cx-100*cos45, cy+100*sin45) to (cx+100*cos45, cy-100*sin45) */}
        <defs>
          <marker id="arrowPC1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L0,8 L8,4 z" fill="#f97316" />
          </marker>
          <marker id="arrowPC2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L0,8 L8,4 z" fill="#f97316" />
          </marker>
        </defs>
        {/* PC1 arrow */}
        <line
          x1={cx - 110} y1={cy + 110}
          x2={cx + 110} y2={cy - 110}
          stroke="#f97316" strokeWidth="2.5"
          markerEnd="url(#arrowPC1)"
        />
        {/* PC2 arrow (perpendicular) */}
        <line
          x1={cx - 50} y1={cy - 50}
          x2={cx + 50} y2={cy + 50}
          stroke="#f97316" strokeWidth="2"
          markerEnd="url(#arrowPC2)"
        />

        {/* centroid */}
        <circle cx={cx} cy={cy} r={5} fill="#f59e0b" stroke="#fff" strokeWidth="1.5" />
        <text x={cx + 8} y={cy - 6} fill="#f59e0b" fontSize="11" fontWeight="700">centróide</text>

        {/* labels */}
        <text x={cx + 115} y={cy - 112} fill="#f97316" fontSize="13" fontWeight="700">PC1</text>
        <text x={cx + 52} y={cy + 55} fill="#f97316" fontSize="13" fontWeight="700">PC2</text>

        {/* legend */}
        <text x="30" y="18" fill="var(--text-secondary)" fontSize="10" textAnchor="start">
          PC1: direção de máxima variância (eigenvector de λ₁)
        </text>
        <text x="30" y="30" fill="var(--text-secondary)" fontSize="10" textAnchor="start">
          PC2: perpendicular a PC1 (eigenvector de λ₂, λ₂ &lt; λ₁)
        </text>
      </svg>
    </div>
  );
};

/* ── SVG: Scree plot ── */
const ScreePlot = () => {
  const eigenvals = [3.8, 1.5, 0.6, 0.35, 0.2, 0.12, 0.07, 0.06];
  const total = eigenvals.reduce((a, b) => a + b, 0);
  const varPct = eigenvals.map(v => (v / total) * 100);
  const cumPct = varPct.map((_, i) => varPct.slice(0, i + 1).reduce((a, b) => a + b, 0));

  const W = 380, H = 200;
  const padL = 45, padR = 20, padT = 20, padB = 40;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const barW = chartW / eigenvals.length - 6;

  const scaleY = (pct) => padT + chartH - (pct / 100) * chartH;
  const barX = (i) => padL + i * (chartW / eigenvals.length) + 3;

  // 95% threshold line
  const thresh95Y = scaleY(95);

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', textAlign: 'left' }}>
        Scree Plot — Variância Explicada por Componente
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%', height: 'auto' }}>
        {/* Y axis */}
        <line x1={padL} y1={padT} x2={padL} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="1" />
        {/* X axis */}
        <line x1={padL} y1={padT + chartH} x2={padL + chartW} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="1" />

        {/* Y grid labels */}
        {[0, 25, 50, 75, 100].map(pct => (
          <g key={pct}>
            <line x1={padL - 4} y1={scaleY(pct)} x2={padL + chartW} y2={scaleY(pct)} stroke="var(--text-secondary)" strokeWidth="0.5" strokeDasharray="4,3" />
            <text x={padL - 7} y={scaleY(pct) + 4} fontSize="9" fill="var(--text-secondary)" textAnchor="end">{pct}%</text>
          </g>
        ))}

        {/* Bars */}
        {varPct.map((pct, i) => (
          <rect
            key={i}
            x={barX(i)} y={scaleY(pct)}
            width={barW} height={(pct / 100) * chartH}
            fill={color} fillOpacity={0.7} rx="2"
          />
        ))}

        {/* X labels */}
        {eigenvals.map((_, i) => (
          <text key={i} x={barX(i) + barW / 2} y={padT + chartH + 14} fontSize="9" fill="var(--text-secondary)" textAnchor="middle">PC{i + 1}</text>
        ))}

        {/* Cumulative line */}
        {cumPct.map((pct, i) => {
          if (i === 0) return null;
          const x1 = barX(i - 1) + barW / 2;
          const y1 = scaleY(cumPct[i - 1]);
          const x2 = barX(i) + barW / 2;
          const y2 = scaleY(pct);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f59e0b" strokeWidth="2" />;
        })}
        {cumPct.map((pct, i) => (
          <circle key={i} cx={barX(i) + barW / 2} cy={scaleY(pct)} r={3} fill="#f59e0b" />
        ))}

        {/* 95% threshold */}
        <line x1={padL} y1={thresh95Y} x2={padL + chartW} y2={thresh95Y} stroke="#f97316" strokeWidth="1.5" strokeDasharray="6,3" />
        <text x={padL + chartW - 2} y={thresh95Y - 4} fontSize="9" fill="#f97316" textAnchor="end">95%</text>

        {/* Legend */}
        <rect x={padL + 4} y={padT + 4} width={10} height={10} fill={color} fillOpacity={0.7} rx="2" />
        <text x={padL + 18} y={padT + 13} fontSize="9" fill="var(--text-secondary)">Variância por PC</text>
        <circle cx={padL + 90} cy={padT + 9} r={3} fill="#f59e0b" />
        <text x={padL + 96} y={padT + 13} fontSize="9" fill="var(--text-secondary)">Variância acumulada</text>
      </svg>
    </div>
  );
};

/* ── SVG: t-SNE cluster separation diagram ── */
const TSNEClusterDiagram = () => {
  // Left panel: PCA space — two clusters overlapping
  // Right panel: t-SNE space — two clusters separated
  const rng = (seed) => {
    let s = seed;
    return () => { s = (s * 16807 + 0) % 2147483647; return (s - 1) / 2147483646; };
  };

  const rand1 = rng(42);
  const rand2 = rng(99);

  // Class A: 18 points, Class B: 18 points
  const clsA_pca = Array.from({ length: 18 }, () => [80 + rand1() * 60, 50 + rand1() * 80]);
  const clsB_pca = Array.from({ length: 18 }, () => [90 + rand2() * 60, 60 + rand2() * 80]);

  // t-SNE: well separated
  const clsA_tsne = Array.from({ length: 18 }, (_, i) => {
    const r = rng(i * 7 + 3);
    return [310 + r() * 50, 50 + r() * 55];
  });
  const clsB_tsne = Array.from({ length: 18 }, (_, i) => {
    const r = rng(i * 13 + 11);
    return [390 + r() * 50, 110 + r() * 55];
  });

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', textAlign: 'left' }}>
        t-SNE separa estrutura não-linear que o PCA não consegue
      </p>
      <svg viewBox="0 0 500 200" style={{ maxWidth: '100%', height: 'auto' }}>
        {/* left panel border */}
        <rect x="10" y="10" width="220" height="175" rx="8" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
        <text x="120" y="28" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-secondary)">Espaço PCA (2D) — sobreposição</text>

        {/* right panel border */}
        <rect x="270" y="10" width="220" height="175" rx="8" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
        <text x="380" y="28" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-secondary)">Espaço t-SNE — clusters separados</text>

        {/* left: overlapping points */}
        {clsA_pca.map(([px, py], i) => (
          <circle key={`a${i}`} cx={px} cy={py + 20} r={4} fill={color} fillOpacity={0.65} />
        ))}
        {clsB_pca.map(([px, py], i) => (
          <circle key={`b${i}`} cx={px} cy={py + 20} r={4} fill="#f97316" fillOpacity={0.65} />
        ))}

        {/* right: separated */}
        {clsA_tsne.map(([px, py], i) => (
          <circle key={`ta${i}`} cx={px - 20} cy={py + 10} r={4} fill={color} fillOpacity={0.75} />
        ))}
        {clsB_tsne.map(([px, py], i) => (
          <circle key={`tb${i}`} cx={px - 20} cy={py + 10} r={4} fill="#f97316" fillOpacity={0.75} />
        ))}

        {/* legend */}
        <circle cx="30" cy="190" r="4" fill={color} />
        <text x="38" y="194" fontSize="10" fill="var(--text-secondary)">Classe A</text>
        <circle cx="100" cy="190" r="4" fill="#f97316" />
        <text x="108" y="194" fontSize="10" fill="var(--text-secondary)">Classe B</text>
      </svg>
    </div>
  );
};

export default function DM12() {
  return (
    <div style={S.page}>
      <Link to="/dm" style={S.back}><ArrowLeft size={16} /> Voltar a Data Mining</Link>
      <div style={S.tag}>MÓDULO 08</div>
      <h1 style={S.h1}>Redução de Dimensionalidade — PCA, t-SNE e UMAP</h1>
      <p style={S.lead}>
        Em datasets com dezenas ou centenas de features, a Curse of Dimensionality torna os algoritmos de aprendizagem menos eficazes e a visualização impossível.
        A redução de dimensionalidade aborda este problema através de duas estratégias distintas — <em>Feature Selection</em> e <em>Feature Extraction</em> — e de três métodos fundamentais: PCA (linear), t-SNE (não-linear para visualização) e UMAP (não-linear, mais rápido e versátil).
      </p>

      {/* ── Section 1: Feature Selection vs Feature Extraction ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Feature Selection vs. Feature Extraction</h2>
        <p style={S.p}>
          Ambas as estratégias reduzem o número de dimensões, mas com filosofias opostas.
          <strong> Feature selection</strong> mantém um subconjunto das features originais — não as transforma, apenas decide quais manter.
          <strong> Feature extraction</strong> cria um novo espaço de menor dimensão combinando matematicamente as features originais.
        </p>

        <h3 style={S.h3}>Feature Selection — Exemplos concretos</h3>
        <p style={S.p}>
          Imagine um dataset médico com 200 variáveis clínicas. Feature selection escolheria, por exemplo, {'"'}idade, tensão arterial, colesterol, IMC{'"'} e descartaria variáveis redundantes ou irrelevantes.
          Métodos incluem: filtros estatísticos (correlação, mutual information), métodos wrapper (RFE — Recursive Feature Elimination), e métodos embedded (LASSO, Random Forest importance).
        </p>
        <div style={S.highlight}>
          <strong>Vantagem principal:</strong> as features selecionadas mantêm o seu significado original — um médico sabe exatamente o que é {'"'}tensão arterial{'"'}.
          Ideal para modelos que precisam de interpretabilidade e para datasets onde as features têm semântica clara.
        </div>

        <h3 style={S.h3}>Feature Extraction — Exemplos concretos</h3>
        <p style={S.p}>
          Em visão computacional, uma imagem 28×28 pixels tem 784 features. PCA pode comprimir isso para 50 componentes principais que capturam 95% da variância — mas cada componente é uma combinação linear de todos os 784 pixels.
          Em NLP, embeddings word2vec ou TF-IDF com SVD criam representações compactas de documentos.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}></th>
              <th style={S.th}>Feature Selection</th>
              <th style={S.th}>Feature Extraction</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['O que faz', 'Escolhe subconjunto das features originais', 'Cria novas features combinando as originais'],
              ['Interpretabilidade', 'Alta — features originais mantêm significado', 'Baixa — componentes são combinações abstratas'],
              ['Informação perdida', 'Descarta features potencialmente úteis', 'Comprime informação de todas as features'],
              ['Exemplos', 'LASSO, RFE, mutual info, RF importance', 'PCA, ICA, t-SNE, UMAP, Autoencoders'],
              ['Dimensão resultante', 'Subconjunto de p (≥1)', 'Qualquer k ≤ p (tipicamente muito menor)'],
              ['Uso típico', 'Modelos interpretáveis, clínica, finanças', 'Visualização, clustering, deep learning preprocessing'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 700, color: 'var(--text-secondary)' }}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={{ ...S.td, color }}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.note}>
          PCA, t-SNE e UMAP são todos métodos de <strong>feature extraction</strong> — criam um novo espaço de menor dimensão. PCA é linear; t-SNE e UMAP capturam estrutura não-linear.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 2: PCA Geometric ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. PCA — Interpretação Geométrica</h2>
        <p style={S.p}>
          Geometricamente, PCA encontra o <strong>sistema de eixos que melhor descreve a forma da nuvem de pontos</strong>.
          Se os dados formam uma nuvem alongada num espaço 2D, o primeiro componente principal (PC1) é uma seta que aponta na direção do maior alongamento.
          O segundo (PC2) é perpendicular a PC1 e captura a variância residual.
        </p>

        <PCAGeometricDiagram />

        <p style={S.p}>
          A <strong>direção de máxima variância</strong> é aquela em que os dados estão mais espalhados quando projetados. Matematicamente, procuramos o vetor unitário <InlineMath math="w" /> que maximiza a variância das projeções <InlineMath math="Xw" />:
        </p>
        <div style={S.math}>
          <BlockMath math="w_1 = \arg\max_{\|w\|=1} \operatorname{Var}(Xw) = \arg\max_{\|w\|=1} w^\top \Sigma w" />
        </div>
        <p style={S.p}>
          A solução é o eigenvector de <InlineMath math="\Sigma" /> correspondente ao maior eigenvalue <InlineMath math="\lambda_1" />.
          Cada componente subsequente é o eigenvector do próximo eigenvalue — sempre perpendicular aos anteriores.
          Esta ortogonalidade garante que os componentes são <strong>não correlacionados</strong> entre si.
        </p>
        
          A projeção de um ponto <InlineMath math="x_i" /> em PC1 é simplesmente o produto interno <InlineMath math="z_{i1} = x_i \cdot w_1" />.
          O valor resultante (score) diz-nos onde o ponto cai ao longo do eixo PC1.
          Pontos próximos no espaço original com estrutura semelhante terão scores semelhantes.
        
      </div>

      <hr style={S.divider} />

      {/* ── Section 3: PCA Algorithm ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. PCA — Algoritmo Completo</h2>
        <p style={S.p}>
          O algoritmo PCA segue seis passos bem definidos. A padronização inicial é <strong>crítica</strong>: features em diferentes escalas (por exemplo, idade em anos e rendimento em milhares de euros) dominam a matriz de covariância se não forem normalizadas.
        </p>

        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', textAlign: 'left' }}>Passos do Algoritmo PCA</p>
          {[
            ['1', 'Centrar e Padronizar', 'Para cada feature j: subtrair a média e dividir pelo desvio padrão — garante média zero e variância unitária.'],
            ['2', 'Calcular Matriz de Covariância', 'Σ = (1/n) XᵀX — dimensão p×p. Cada entrada Σ_jk é a covariância entre a feature j e a feature k.'],
            ['3', 'Eigendecomposição', 'Decompor Σ = VΛVᵀ — V: matriz de eigenvectors (direções), Λ: diagonal de eigenvalues (variâncias).'],
            ['4', 'Ordenar por Eigenvalue', 'Reordenar eigenvectors por eigenvalue descendente: λ₁ ≥ λ₂ ≥ ... ≥ λ_p.'],
            ['5', 'Selecionar k Componentes', 'Escolher k tal que a variância acumulada ≥ 95%: (λ₁+...+λ_k)/(λ₁+...+λ_p) ≥ 0.95.'],
            ['6', 'Projetar os Dados', 'Z = X · V_k — transforma n×p em n×k. Cada linha de Z são os scores do respetivo ponto.'],
          ].map(([n, t, d]) => (
            <div key={n} style={{ display: 'flex', gap: '1rem', marginBottom: '0.8rem', alignItems: 'flex-start' }}>
              <div style={{ background: color, color: 'white', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0, marginTop: 2 }}>{n}</div>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9rem' }}>{t}: </span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{d}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 style={S.h3}>Formalização Matemática</h3>
        <p style={S.p}>A matriz de covariância amostral (após centrar os dados) é:</p>
        <div style={S.math}>
          <BlockMath math="\Sigma = \frac{1}{n} X^\top X \quad \in \mathbb{R}^{p \times p}" />
        </div>
        <p style={S.p}>A eigendecomposição da matriz de covariância (que é simétrica e semi-definida positiva) é:</p>
        <div style={S.math}>
          <BlockMath math="\Sigma = V \Lambda V^\top, \quad \Lambda = \operatorname{diag}(\lambda_1, \lambda_2, \ldots, \lambda_p), \quad V = [v_1 \mid v_2 \mid \cdots \mid v_p]" />
        </div>
        <p style={S.p}>
          Onde cada coluna <InlineMath math="v_i" /> de <InlineMath math="V" /> é um eigenvector (componente principal) e <InlineMath math="\lambda_i" /> é o eigenvalue correspondente, igual à variância dos dados projetados nessa direção.
        </p>

        <h3 style={S.h3}>Exemplo Numérico Simplificado</h3>
        <p style={S.p}>
          Considere 4 pontos em 2D (já centrados: média = 0): <InlineMath math="x_1=(2,1),\; x_2=(-2,-1),\; x_3=(1,0.5),\; x_4=(-1,-0.5)" />.
          Notar que todos os pontos seguem a relação <InlineMath math="x_2 \approx 0.5\, x_1" />, logo há correlação perfeita e a nuvem é estritamente 1D.
        </p>
        <p style={S.p}>A matriz de covariância é:</p>
        <div style={S.math}>
          <BlockMath math="\Sigma = \frac{1}{4}\begin{pmatrix}2&1\\-2&-1\\1&0.5\\-1&-0.5\end{pmatrix}^\top \begin{pmatrix}2&1\\-2&-1\\1&0.5\\-1&-0.5\end{pmatrix} = \begin{pmatrix} 2.5 & 1.25 \\ 1.25 & 0.625 \end{pmatrix}" />
        </div>
        <p style={S.p}>
          Os eigenvalues são <InlineMath math="\lambda_1 = 3.125,\; \lambda_2 = 0" /> e o eigenvector principal (PC1) é:
        </p>
        <div style={S.math}>
          <BlockMath math="v_1 = \frac{1}{\sqrt{5}}\begin{pmatrix}2 \\ 1\end{pmatrix} \approx \begin{pmatrix}0.894 \\ 0.447\end{pmatrix}" />
        </div>
        <p style={S.p}>
          Projetando os 4 pontos em PC1 (<InlineMath math="z_i = x_i \cdot v_1" />):
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Ponto</th>
              <th style={S.th}>Coordenadas (x₁, x₂)</th>
              <th style={S.th}>Score em PC1</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['x₁', '(2, 1)', '2×0.894 + 1×0.447 = 2.236'],
              ['x₂', '(−2, −1)', '−2.236'],
              ['x₃', '(1, 0.5)', '1.118'],
              ['x₄', '(−1, −0.5)', '−1.118'],
            ].map(([pt, coords, score]) => (
              <tr key={pt}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{pt}</td>
                <td style={S.td}>{coords}</td>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>{score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Neste exemplo, PC1 captura 100% da variância (λ₂=0). Em dados reais, a variância raramente se concentra assim, mas frequentemente 2–3 componentes bastam para capturar ≥95% da informação.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 4: Loading Scores & Scree Plot ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Loading Scores e Variância Explicada</h2>
        <p style={S.p}>
          Os <strong>loading scores</strong> são as componentes de cada eigenvector — descrevem quanto cada feature original contribui para cada componente principal.
          Um loading de +0.85 em PC1 para a feature "rendimento" significa que esta feature tem uma contribuição forte e positiva para esse componente.
          Loadings próximos de zero indicam features que pouco contribuem para aquela direção.
        </p>
        <p style={S.p}>
          A <strong>variância explicada</strong> pela componente <InlineMath math="k" /> é proporcional ao seu eigenvalue:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{VE}_k = \frac{\lambda_k}{\sum_{j=1}^{p} \lambda_j}" />
        </div>
        <p style={S.p}>
          O <strong>scree plot</strong> representa graficamente os eigenvalues por ordem decrescente. O ponto de "cotovelo" (elbow) onde a curva estabiliza indica o número ótimo de componentes a reter.
          A linha de variância acumulada permite identificar visualmente o ponto em que se ultrapassa o limiar de 95%.
        </p>

        <ScreePlot />

        <div style={{ ...S.diagram, textAlign: 'left' }}>
          <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Exemplo: Loading Scores — Dados de Clientes</p>
          <table style={{ ...S.table, marginBottom: 0 }}>
            <thead>
              <tr>
                <th style={S.th}>Feature</th>
                <th style={S.th}>PC1 (loading)</th>
                <th style={S.th}>PC2 (loading)</th>
                <th style={S.th}>Interpretação</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Rendimento anual', '0.82', '0.12', 'PC1: "poder de compra"'],
                ['Valor de compra médio', '0.78', '0.25', 'PC1: "poder de compra"'],
                ['Frequência de compras', '0.35', '0.88', 'PC2: "fidelização"'],
                ['Recência (dias)', '−0.15', '−0.81', 'PC2: "fidelização"'],
              ].map(([f, p1, p2, interp]) => {
                const h1 = Math.abs(parseFloat(p1)) > 0.5;
                const h2 = Math.abs(parseFloat(p2)) > 0.5;
                return (
                  <tr key={f}>
                    <td style={S.td}>{f}</td>
                    <td style={{ ...S.td, color: h1 ? color : 'var(--text-primary)', fontWeight: h1 ? 700 : 400 }}>{p1}</td>
                    <td style={{ ...S.td, color: h2 ? color : 'var(--text-primary)', fontWeight: h2 ? 700 : 400 }}>{p2}</td>
                    <td style={{ ...S.td, fontSize: '0.82rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>{interp}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Loadings altos em módulo (tipicamente |loading| {'>'} 0.6) indicam que a feature é {'"'}importante{'"'} para aquela componente.
          Dois features com loadings elevados no mesmo PC têm alta correlação entre si no dataset original.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 5: t-SNE Concept ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. t-SNE — Motivação e Conceito</h2>
        <p style={S.p}>
          PCA é um método <strong>linear</strong> — a projeção é sempre uma combinação linear das features originais.
          Quando os dados têm estrutura não-linear (por exemplo, clusters curvos, espirais interlaçadas ou variedades de baixa dimensão embebidas em alta dimensão), PCA não consegue separar esses clusters — projeta-os sobrepostos.
        </p>
        <p style={S.p}>
          <strong>t-SNE (t-Distributed Stochastic Neighbor Embedding)</strong>, proposto por van der Maaten e Hinton (2008), resolve este problema modelando <em>semelhanças probabilísticas</em> entre pontos e minimizando a diferença entre as distribuições de semelhança no espaço de alta e baixa dimensão.
        </p>

        <h3 style={S.h3}>Semelhança em Alta Dimensão — Probabilidades Gaussianas</h3>
        <p style={S.p}>
          Para cada par de pontos <InlineMath math="i, j" /> no espaço original, a semelhança é modelada por uma Gaussiana centrada em <InlineMath math="x_i" />:
        </p>
        <div style={S.math}>
          <BlockMath math="p_{j|i} = \frac{\exp\!\left(-\|x_i - x_j\|^2 \,/\, 2\sigma_i^2\right)}{\sum_{k \neq i} \exp\!\left(-\|x_i - x_k\|^2 \,/\, 2\sigma_i^2\right)}" />
        </div>
        <p style={S.p}>
          A semelhança simétrica é <InlineMath math="p_{ij} = (p_{j|i} + p_{i|j}) / 2n" />.
          O parâmetro <InlineMath math="\sigma_i" /> é ajustado por ponto de modo a atingir uma <strong>perplexidade</strong> alvo (ver abaixo).
        </p>

        <h3 style={S.h3}>Semelhança em Baixa Dimensão — Distribuição t de Student</h3>
        <p style={S.p}>
          No espaço de baixa dimensão (tipicamente 2D), a semelhança entre os pontos embebidos <InlineMath math="y_i, y_j" /> usa uma distribuição <strong>t de Student com 1 grau de liberdade</strong> (= distribuição de Cauchy):
        </p>
        <div style={S.math}>
          <BlockMath math="q_{ij} = \frac{\left(1 + \|y_i - y_j\|^2\right)^{-1}}{\sum_{k \neq l} \left(1 + \|y_k - y_l\|^2\right)^{-1}}" />
        </div>

        <h3 style={S.h3}>Função Objetivo — Divergência KL</h3>
        <p style={S.p}>
          O algoritmo otimiza as posições <InlineMath math="\{y_i\}" /> minimizando a divergência de Kullback-Leibler entre a distribuição de alta dimensão P e a de baixa dimensão Q:
        </p>
        <div style={S.math}>
          <BlockMath math="\mathcal{L} = \mathrm{KL}(P \| Q) = \sum_{i \neq j} p_{ij} \log \frac{p_{ij}}{q_{ij}}" />
        </div>
        <p style={S.p}>
          Quando <InlineMath math="p_{ij}" /> é grande (pontos próximos no original) mas <InlineMath math="q_{ij}" /> é pequeno (distantes no embedding), o custo é elevado.
          Isto força t-SNE a colocar vizinhos próximos no original como vizinhos próximos também no embedding.
        </p>

        <h3 style={S.h3}>Parâmetro de Perplexidade</h3>
        <div style={S.highlight}>
          A <strong>perplexidade</strong> controla o número efetivo de vizinhos considerados por ponto.
          Tipicamente entre 5 e 50 (padrão: 30). Perplexidade baixa foca em vizinhança muito local; alta considera contexto mais global.
          É o hiperparâmetro mais importante do t-SNE — diferentes valores podem revelar estruturas diferentes nos mesmos dados.
          Valores típicos a testar: 5, 10, 30, 50.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 6: t-SNE Caveats ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. t-SNE — Crowding Problem e Caveats</h2>

        <h3 style={S.h3}>Porquê a Distribuição t de Student em Baixa Dimensão?</h3>
        <p style={S.p}>
          O <strong>crowding problem</strong> é a observação de que ao tentar comprimir um espaço de alta dimensão para 2D, existe simplesmente pouco espaço para acomodar todos os vizinhos de médio alcance de cada ponto.
          Se usássemos uma Gaussiana em baixa dimensão, os pontos seriam comprimidos no centro do mapa — tudo ficaria aglomerado.
        </p>
        <p style={S.p}>
          A distribuição t de Student tem <strong>caudas pesadas</strong> (heavy tails): permite que pontos moderadamente semelhantes sejam colocados a distâncias maiores sem incorrer em grande custo.
          Isto cria clusters bem separados visualmente, mesmo quando a separação original não era tão abrupta.
        </p>
        <div style={S.math}>
          <BlockMath math="\underbrace{\text{Gaussiana: } e^{-d^2}}_{\text{cauda leve}} \quad \text{vs} \quad \underbrace{\text{t-Student: } (1+d^2)^{-1}}_{\text{cauda pesada — mais lenta a decair}}" />
        </div>

        <h3 style={S.h3}>Caveats Críticos do t-SNE</h3>
        <div style={S.highlight}>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 2 }}>
            <li>
              <strong>Distâncias no embedding NÃO são significativas:</strong> a distância entre dois clusters no plot t-SNE não reflete a sua distância real no espaço original. Dois clusters visualmente afastados podem não ser mais diferentes do que dois clusters próximos.
            </li>
            <li>
              <strong>Tamanhos dos clusters NÃO refletem a realidade:</strong> t-SNE expande clusters pequenos e comprime clusters grandes para preenchimento uniforme do espaço 2D.
            </li>
            <li>
              <strong>Estocástico:</strong> resultados diferentes em cada execução (inicialização aleatória). Usar <code>random_state</code> para reprodutibilidade.
            </li>
            <li>
              <strong>Apenas visualização:</strong> t-SNE NÃO deve ser usado como preprocessing para modelos downstream. A estrutura gerada depende da perplexidade e não preserva geometria global.
            </li>
            <li>
              <strong>Computacionalmente caro:</strong> complexidade O(n²) — para n {'>'} 10 000 usar variante BH-t-SNE (Barnes-Hut) ou preferir UMAP.
            </li>
          </ul>
        </div>
        <div style={S.note}>
          <strong>Regra prática:</strong> use t-SNE para exploração visual e comunicação. Para preprocessing antes de classificação/clustering, use PCA ou UMAP.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 7: t-SNE Diagram ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. t-SNE — Diagrama Ilustrativo</h2>
        <p style={S.p}>
          O diagrama seguinte ilustra o cenário clássico em que PCA falha mas t-SNE tem sucesso: dois clusters que se sobrepõem na projeção linear (PC1 vs PC2), mas que t-SNE separa claramente no embedding 2D.
        </p>

        <TSNEClusterDiagram />

        <p style={S.p}>
          Este fenómeno ocorre porque PCA procura direções de máxima variância — se dois clusters tiverem variância semelhante mas estrutura separada em dimensões que não são de máxima variância, PCA não os distingue.
          t-SNE, ao modelar semelhanças locais, consegue "dobrar" o espaço para separar grupos naturais.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Section 8: UMAP ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. UMAP — Conceito e Vantagens</h2>
        <p style={S.p}>
          <strong>UMAP (Uniform Manifold Approximation and Projection)</strong>, proposto por McInnes et al. (2018), é uma alternativa moderna ao t-SNE com fundamentos teóricos mais sólidos em topologia e geometria de variedades (manifold learning).
        </p>
        <p style={S.p}>
          A ideia central é que os dados de alta dimensão frequentemente residem numa <strong>variedade de baixa dimensão</strong> — uma superfície suave encurvada embebida no espaço de alta dimensão.
          UMAP constrói um grafo ponderado de vizinhança no espaço original e tenta encontrar uma representação de baixa dimensão que preserve a estrutura topológica desse grafo.
        </p>

        <h3 style={S.h3}>Processo Conceptual do UMAP</h3>
        <div style={S.diagram}>
          {[
            ['1', 'Grafo de vizinhança', 'Para cada ponto, encontrar os k vizinhos mais próximos e calcular pesos baseados em distâncias (exponencial decrescente). Resultado: grafo ponderado não-dirigido.'],
            ['2', 'União fuzzy', 'Combinar os grafos de cada ponto numa representação fuzzy da topologia local do manifold.'],
            ['3', 'Otimização no espaço baixo', 'Inicializar embedding (spectral initialization) e otimizar por SGD minimizando cross-entropy entre o grafo original e o grafo do embedding.'],
            ['4', 'Resultado', 'Embedding 2D (ou 3D) que preserva estrutura local E alguma estrutura global.'],
          ].map(([n, t, d]) => (
            <div key={n} style={{ display: 'flex', gap: '1rem', marginBottom: '0.8rem', alignItems: 'flex-start', textAlign: 'left' }}>
              <div style={{ background: color, color: 'white', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0, marginTop: 2 }}>{n}</div>
              <div>
                <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9rem' }}>{t}: </span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{d}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 style={S.h3}>Parâmetros Principais do UMAP</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Parâmetro</th>
              <th style={S.th}>Valor típico</th>
              <th style={S.th}>Efeito</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['n_neighbors', '5–50 (padrão: 15)', 'Baixo → foco local, micro-clusters; Alto → estrutura global mais preservada'],
              ['min_dist', '0.0–1.0 (padrão: 0.1)', 'Baixo → pontos compactos, clusters densos; Alto → pontos espalhados, topologia mais suave'],
              ['n_components', '2 ou 3', 'Dimensão do espaço de saída'],
              ['metric', "'euclidean', 'cosine', 'manhattan'", 'Métrica de distância no espaço original'],
              ['random_state', 'qualquer inteiro', 'Para reprodutibilidade (UMAP é determinístico com random_state fixo)'],
            ].map(([p, v, e]) => (
              <tr key={p}>
                <td style={{ ...S.td, fontFamily: 'monospace', color, fontWeight: 700, fontSize: '0.85rem' }}>{p}</td>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{v}</td>
                <td style={S.td}>{e}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>UMAP como Passo de Preprocessing</h3>
        <div style={S.highlight}>
          Ao contrário do t-SNE, UMAP <strong>pode ser usado como preprocessing</strong> antes de outros algoritmos de ML.
          A transformação UMAP é estável e pode ser aplicada a novos dados com <code>umap_model.transform(X_new)</code>.
          Estudos mostram que UMAP como preprocessing antes de clustering (HDBSCAN) ou classificação produz resultados competitivos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 9: Comparative Table ── */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Tabela Comparativa — PCA vs. t-SNE vs. UMAP</h2>
        <p style={S.p}>
          A escolha entre os três métodos depende do objetivo: interpretabilidade e preprocessing (PCA), visualização exploratória de clusters (t-SNE), ou uma solução intermédia mais rápida e versátil (UMAP).
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Critério</th>
                <th style={{ ...S.th, color }}>PCA</th>
                <th style={{ ...S.th, color: '#f97316' }}>t-SNE</th>
                <th style={{ ...S.th, color: '#f97316' }}>UMAP</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Tipo', 'Linear', 'Não-linear', 'Não-linear'],
                ['Estrutura preservada', 'Global (variância)', 'Local (vizinhança)', 'Local + alguma global'],
                ['Velocidade (n=50k)', '★★★★★ Rápido', '★★ Lento O(n²)', '★★★★ Rápido O(n log n)'],
                ['Estocástico?', 'Não (determinístico)', 'Sim (init aleatória)', 'Quasi (c/ random_state fixo)'],
                ['Preprocessing ML', '✓ Excelente', '✗ Não recomendado', '✓ Funciona bem'],
                ['transform() novos dados', '✓ Sim', '✗ Não (só fit_transform)', '✓ Sim'],
                ['Distâncias significativas', '✓ Relativas', '✗ NÃO', '⚠ Estrutura local apenas'],
                ['Escalabilidade', 'Milhões de pontos', 'Até ~10k–50k', 'Centenas de milhares'],
                ['Uso típico', 'Preprocessing, compressão, interpretação', 'Visualização de clusters', 'Visualização + preprocessing'],
                ['Parâmetros chave', 'n_components', 'perplexity, n_iter', 'n_neighbors, min_dist'],
              ].map(([crit, pca, tsne, umap]) => (
                <tr key={crit}>
                  <td style={{ ...S.td, fontWeight: 700, color: 'var(--text-secondary)' }}>{crit}</td>
                  <td style={{ ...S.td, fontSize: '0.88rem' }}>{pca}</td>
                  <td style={{ ...S.td, fontSize: '0.88rem' }}>{tsne}</td>
                  <td style={{ ...S.td, fontSize: '0.88rem' }}>{umap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={S.note}>
          <strong>Quando usar qual?</strong> PCA primeiro sempre — para baseline, preprocessing e interpretação de loadings.
          Se PCA não revela clusters ou estrutura interessante e n {'<'} 50k, t-SNE para visualização exploratória.
          Para datasets maiores ou quando precisa de preprocessing, UMAP é a escolha moderna.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 10: Código Python Completo ── */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Implementação Python — Pipeline Completo</h2>
      </div>

      <hr style={S.divider} />

      {/* ── Section 11: Síntese ── */}
      <div style={S.section}>
        <h2 style={S.h2}>11. Síntese do Módulo</h2>
        <div style={S.highlight}>
          <p style={{ fontWeight: 700, color, marginBottom: '0.75rem', margin: '0 0 0.75rem 0' }}>Pontos-chave a reter</p>
          <ul style={{ color: 'var(--text-primary)', lineHeight: 2.1, paddingLeft: '1.25rem', margin: 0 }}>
            <li><strong>Feature Selection</strong> mantém features originais (interpretável); <strong>Feature Extraction</strong> cria novas features combinadas (mais compacto)</li>
            <li><strong>PCA</strong> maximiza variância via eigendecomposição de Σ — linear, determinístico, escalável, interpretável via loadings</li>
            <li>Padronizar <em>sempre</em> antes do PCA — features em escalas diferentes distorcem a covariância</li>
            <li>Loading scores revelam a contribuição de cada feature original para cada PC — permitem nomear os componentes</li>
            <li>Scree plot + 95% de variância acumulada = critérios padrão para escolher k</li>
            <li><strong>t-SNE</strong> minimiza KL(P‖Q) entre similaridades Gaussianas (alta-dim) e t-Student (baixa-dim) — captura estrutura não-linear para visualização</li>
            <li>Cuidado com t-SNE: distâncias e tamanhos de clusters NO embedding NÃO são interpretáveis; apenas para visualização</li>
            <li>Perplexidade do t-SNE controla o número de vizinhos efetivos — testar vários valores (5, 30, 50)</li>
            <li><strong>UMAP</strong> é mais rápido que t-SNE, preserva melhor a estrutura global, e pode ser usado como preprocessing com <code>transform()</code></li>
            <li>Workflow recomendado: PCA → t-SNE/UMAP (visualização) → UMAP (se preprocessing) → modelo downstream</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
