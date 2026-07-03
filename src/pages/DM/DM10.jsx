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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(249,115,22,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

export default function DM10() {
  return (
    <div style={S.page}>
      <Link to="/dm" style={S.back}><ArrowLeft size={16} /> Voltar a Data Mining</Link>
      <div style={S.tag}>MÓDULO 06</div>
      <h1 style={S.h1}>Clustering Baseado em Densidade, HDBSCAN e Local Outlier Factor (LOF)</h1>
      <p style={S.lead}>
        Os métodos baseados em densidade descobrem clusters como regiões de alta concentração de pontos separadas por regiões esparsas.
        Ao contrário do k-Means, não impõem formas esféricas nem requerem especificar o número de clusters. O DBSCAN e o HDBSCAN identificam
        automaticamente outliers, e o LOF quantifica o grau de anomalia de cada ponto com base na sua densidade local relativa aos vizinhos.
      </p>

      {/* ─────────────────────────────────────────────────────────── DBSCAN DEFINIÇÃO */}
      <div style={S.section}>
        <h2 style={S.h2}>1. DBSCAN — Definição e Parâmetros</h2>
        <p style={S.p}>
          <strong>DBSCAN</strong> (Density-Based Spatial Clustering of Applications with Noise, Ester et al. 1996) define clusters como
          regiões do espaço de atributos onde os pontos estão suficientemente próximos uns dos outros. Dois parâmetros controlam o que
          se entende por "suficientemente próximo" e "suficientemente denso":
        </p>
        <div style={S.highlight}>
          <strong style={{ color }}>ε (epsilon)</strong> — raio da vizinhança. Define uma bola de raio ε em torno de cada ponto.
          Todos os pontos dentro dessa bola são considerados vizinhos diretos. Um valor demasiado pequeno leva a muitos noise points;
          um valor demasiado grande funde clusters distintos.<br /><br />
          <strong style={{ color }}>MinPts</strong> — número mínimo de pontos (incluindo o próprio ponto) que a bola de raio ε deve conter
          para que o ponto seja considerado "core". Controla a densidade mínima aceite. Tipicamente, MinPts ≥ dimensão + 1; na prática usa-se 5.
        </div>
        <h3 style={S.h3}>Tipos de Pontos</h3>
        <p style={S.p}>
          Com base em ε e MinPts, cada ponto é classificado numa de três categorias mutuamente exclusivas (em termos de papel no algoritmo):
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Definição formal</th>
              <th style={S.th}>Papel no cluster</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Core Point', '|N_ε(p)| ≥ MinPts, onde N_ε(p) são os vizinhos de p no raio ε', 'Interior do cluster; expande o cluster para os seus vizinhos'],
              ['Border Point', '|N_ε(p)| < MinPts mas p ∈ N_ε(q) para algum core q', 'Fronteira do cluster; atribuído ao cluster do core mais próximo'],
              ['Noise Point', 'Não é core nem border — não é diretamente atingível por nenhum core', 'Outlier; etiquetado como −1'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{a}</td>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.85rem' }}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Relações de Densidade</h3>
        <p style={S.p}>
          O DBSCAN propaga clusters através de cadeias de pontos denses. As relações de acessibilidade são:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Relação</th>
              <th style={S.th}>Definição</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Directly Density-Reachable', 'p está dentro de N_ε(q) e q é core point'],
              ['Density-Reachable', 'Existe cadeia p₁ = q, p₂, …, pₙ = p onde cada pᵢ₊₁ é directly density-reachable de pᵢ'],
              ['Density-Connected', 'Existem um ponto o tal que p e q são ambos density-reachable a partir de o'],
            ].map(([a, b]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 700, color, fontSize: '0.85rem' }}>{a}</td>
                <td style={S.td}>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          Um cluster DBSCAN é o conjunto máximo de pontos density-connected entre si. A relação de density-reachability não é simétrica
          (um border point pode ser atingível a partir de um core, mas não o contrário), enquanto a density-connection é simétrica.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ─────────────────────────────────────────────────────────── DBSCAN DIAGRAMA */}
      <div style={S.section}>
        <h2 style={S.h2}>2. DBSCAN — Diagrama Ilustrativo</h2>
        <p style={S.p}>
          O diagrama abaixo mostra um conjunto de pontos 2D com MinPts = 3. Os círculos tracejados representam a vizinhança ε de cada core point.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 500 300" width="100%" style={{ display: 'block' }}>
            {/* Background */}
            <rect x="0" y="0" width="500" height="300" fill="none" />

            {/* ε circles around core points */}
            <circle cx="150" cy="140" r="55" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" strokeDasharray="6 3" />
            <circle cx="210" cy="170" r="55" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" strokeDasharray="6 3" />
            <circle cx="180" cy="110" r="55" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" strokeDasharray="6 3" />

            {/* ε circle for second cluster core */}
            <circle cx="360" cy="130" r="50" fill="rgba(14,165,233,0.07)" stroke="#f97316" strokeWidth="1.5" strokeDasharray="6 3" />

            {/* ── CLUSTER 1 — Core Points (filled dark circles) */}
            <circle cx="150" cy="140" r="9" fill="#f97316" stroke="#fff" strokeWidth="2" />
            <text x="150" y="125" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="700">C1</text>

            <circle cx="210" cy="170" r="9" fill="#f97316" stroke="#fff" strokeWidth="2" />
            <text x="210" y="155" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="700">C2</text>

            <circle cx="180" cy="110" r="9" fill="#f97316" stroke="#fff" strokeWidth="2" />
            <text x="180" y="96" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="700">C3</text>

            {/* ── CLUSTER 1 — Border Points (half-filled: outer ring different) */}
            <circle cx="110" cy="125" r="8" fill="#fff" stroke={color} strokeWidth="2.5" />
            <path d="M110,117 A8,8,0,0,1,110,133 Z" fill={color} />
            <text x="95" y="115" textAnchor="middle" fontSize="10" fill={color}>B1</text>

            <circle cx="230" cy="215" r="8" fill="#fff" stroke={color} strokeWidth="2.5" />
            <path d="M230,207 A8,8,0,0,1,230,223 Z" fill={color} />
            <text x="247" y="222" textAnchor="middle" fontSize="10" fill={color}>B2</text>

            {/* ── CLUSTER 2 — Core Point (blue cluster) */}
            <circle cx="360" cy="130" r="9" fill="#fb923c" stroke="#fff" strokeWidth="2" />
            <text x="360" y="116" textAnchor="middle" fontSize="11" fill="#fb923c" fontWeight="700">C4</text>

            {/* ── Extra nearby points in cluster 2 */}
            <circle cx="330" cy="155" r="6" fill="#f97316" stroke="#fff" strokeWidth="1.5" />
            <circle cx="385" cy="110" r="6" fill="#f97316" stroke="#fff" strokeWidth="1.5" />
            <circle cx="350" cy="105" r="6" fill="#f97316" stroke="#fff" strokeWidth="1.5" />

            {/* ── NOISE POINT — X mark */}
            <line x1="418" y1="230" x2="434" y2="246" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
            <line x1="434" y1="230" x2="418" y2="246" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
            <text x="426" y="260" textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="700">Ruído</text>

            {/* ε label */}
            <text x="150" y="200" textAnchor="middle" fontSize="10" fill={color}>ε</text>
            <line x1="150" y1="140" x2="150" y2="193" stroke={color} strokeWidth="1" strokeDasharray="3 2" />

            {/* Legend */}
            <rect x="10" y="240" width="480" height="50" rx="6" fill="rgba(0,0,0,0.04)" stroke="var(--text-secondary)" strokeWidth="1" />
            {/* Core legend */}
            <circle cx="35" cy="265" r="7" fill="#f97316" stroke="#fff" strokeWidth="1.5" />
            <text x="48" y="269" fontSize="11" fill="var(--text-primary)">Core point</text>
            {/* Border legend */}
            <circle cx="135" cy="265" r="7" fill="#fff" stroke={color} strokeWidth="2" />
            <path d="M135,258 A7,7,0,0,1,135,272 Z" fill={color} />
            <text x="148" y="269" fontSize="11" fill="var(--text-primary)">Border point</text>
            {/* Noise legend */}
            <line x1="252" y1="261" x2="262" y2="271" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="262" y1="261" x2="252" y2="271" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
            <text x="270" y="269" fontSize="11" fill="var(--text-primary)">Noise point</text>
            {/* ε circle legend */}
            <circle cx="355" cy="265" r="7" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4 2" />
            <text x="368" y="269" fontSize="11" fill="var(--text-primary)">Vizinhança ε</text>
          </svg>
        </div>
        <p style={{ ...S.p, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          C1, C2, C3 (escuro) são core points do Cluster 1: cada um tem ≥ MinPts pontos no seu raio ε.
          B1 e B2 são border points — estão dentro do ε de um core mas não têm vizinhos suficientes para serem core eles próprios.
          O X vermelho é um noise point isolado, sem core point a menos de ε. C4 pertence a um segundo cluster independente.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ─────────────────────────────────────────────────────────── DBSCAN ALGORITMO */}
      <div style={S.section}>
        <h2 style={S.h2}>3. DBSCAN — Algoritmo Passo-a-Passo</h2>
        <h3 style={S.h3}>Pseudocódigo</h3>
        <pre style={{ ...S.code, lineHeight: 1.9 }}>{`DBSCAN(D, ε, MinPts):
  label todos os pontos como "não visitado"
  cluster_id = 0

  para cada ponto p em D não visitado:
    marcar p como visitado
    N = vizinhos(p, ε)          // todos os pontos a ≤ ε de p

    se |N| < MinPts:
      marcar p como RUÍDO       // provisório; pode ser border depois
    senão:
      cluster_id += 1
      expandirCluster(p, N, cluster_id, ε, MinPts)

expandirCluster(p, N, id, ε, MinPts):
  atribuir p ao cluster id
  fila = N

  enquanto fila não vazia:
    q = retirar da fila
    se q não foi visitado:
      marcar q como visitado
      N' = vizinhos(q, ε)
      se |N'| ≥ MinPts:         // q também é core → expande
        fila += N'
    se q não pertence a nenhum cluster:
      atribuir q ao cluster id  // border point`}</pre>

        <h3 style={S.h3}>Complexidade</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Caso</th>
              <th style={S.th}>Tempo</th>
              <th style={S.th}>Nota</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Sem indexação espacial', 'O(n²)', 'Calcular distâncias entre todos os pares'],
              ['Com índice (k-d tree / ball tree)', 'O(n log n)', 'Dados de baixa dimensão; recomendado'],
              ['Alta dimensionalidade', 'O(n²)', 'Índices espaciais ineficazes ≥ ~20 dim.'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700, color }}>{b}</td>
                <td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Escolha de Parâmetros: k-distance Plot</h3>
        <p style={S.p}>
          O método mais usado para escolher ε é o <strong>k-distance plot</strong>. Fixa-se k = MinPts − 1 e para cada ponto calcula-se
          a distância ao seu k-ésimo vizinho mais próximo. Ordenam-se esses valores por ordem decrescente e traça-se o gráfico.
          O valor ε ideal corresponde ao "cotovelo" (knee/elbow) da curva — ponto de máxima curvatura.
        </p>
        <div style={S.highlight}>
          <strong>Regras práticas:</strong><br />
          • MinPts = 2 × dimensão (mínimo 3; típico 4–6 em 2D, 10–20 em alta dimensão)<br />
          • ε = distância no cotovelo do k-distance plot com k = MinPts − 1<br />
          • Normalizar os dados (StandardScaler) antes de aplicar DBSCAN<br />
          • Em dados geoespaciais, usar distância de Haversine em vez de Euclideana
        </div>
      </div>

      <hr style={S.divider} />

      {/* ─────────────────────────────────────────────────────────── HDBSCAN */}
      <div style={S.section}>
        <h2 style={S.h2}>4. HDBSCAN — Hierarchical DBSCAN</h2>
        <p style={S.p}>
          A principal limitação do DBSCAN é que um único ε não consegue capturar clusters com densidades muito diferentes: se ε é
          pequeno, os clusters esparsos ficam fragmentados; se é grande, os clusters densos fundem-se indevidamente. O <strong>HDBSCAN</strong>
          (Campello et al. 2013) resolve isto generalizando o DBSCAN para todos os valores de ε em simultâneo e construindo uma
          hierarquia de clusters, de onde extrai os mais estáveis.
        </p>

        <h3 style={S.h3}>Passo 1 — Distância de Alcançabilidade Mútua</h3>
        <p style={S.p}>
          Define-se primeiro a <em>core distance</em> de um ponto p com parâmetro MinPts:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{core}_k(p) = d(p,\, o_k)" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="o_k" /> é o k-ésimo vizinho mais próximo de p. A <strong>mutual reachability distance</strong> entre p e q é:
        </p>
        <div style={S.math}>
          <BlockMath math="d_{\text{mreach},k}(p, q) = \max\bigl(\text{core}_k(p),\; \text{core}_k(q),\; d(p,q)\bigr)" />
        </div>
        <p style={S.p}>
          Esta distância suaviza o espaço: pontos em regiões esparsas ficam mais afastados entre si, enquanto pontos densos mantêm
          as suas distâncias reais. Elimina o efeito de "pontes" entre clusters de densidades muito diferentes.
        </p>

        <h3 style={S.h3}>Passo 2 — Minimum Spanning Tree e Hierarquia</h3>
        <p style={S.p}>
          Constrói-se a <strong>Minimum Spanning Tree (MST)</strong> usando as distâncias de mutual reachability. A MST é depois
          convertida numa hierarquia de clusters (dendrograma) removendo as arestas por ordem decrescente de peso: cada remoção
          fragmenta um cluster em dois sub-clusters ou isola um noise point.
        </p>

        <h3 style={S.h3}>Passo 3 — Condensed Cluster Tree e Seleção de Clusters</h3>
        <p style={S.p}>
          A hierarquia completa é "condensada" eliminando os nós que correspondem à queda de um único ponto (que se torna noise).
          Cada nó restante na <strong>condensed tree</strong> representa um cluster genuíno a uma dada escala λ = 1/ε.
          A <em>estabilidade</em> de um cluster é:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{stability}(C) = \sum_{p \in C} \bigl(\lambda_p - \lambda_{\text{birth}}(C)\bigr)" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="\lambda_{\text{birth}}(C)" /> é o valor de λ em que o cluster nasce e <InlineMath math="\lambda_p" /> é
          o valor de λ em que o ponto p sai do cluster (por noise ou por divisão em sub-clusters). São selecionados os clusters com
          maior estabilidade acumulada, garantindo clusters persistentes ao longo de uma gama de densidades.
        </p>

        <h3 style={S.h3}>Comparação DBSCAN vs HDBSCAN</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Aspeto</th>
              <th style={S.th}>DBSCAN</th>
              <th style={S.th}>HDBSCAN</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Parâmetros obrigatórios', 'ε e MinPts', 'min_cluster_size (e min_samples opcional)'],
              ['Clusters de densidades variáveis', 'Difícil — ε único', 'Nativo — gere automaticamente'],
              ['Resultado hierárquico', 'Não', 'Sim — condensed tree de clusters'],
              ['Soft clustering', 'Não', 'Sim — probabilidade de pertença a cada cluster'],
              ['Determinismo', 'Determinístico (exceto border points)', 'Determinístico'],
              ['Complexidade temporal', 'O(n log n) com índice', 'O(n log n) aproximado'],
              ['Sensibilidade a ε', 'Alta', 'Não existe ε (eliminado)'],
              ['Estabilidade de clusters', 'Não modelada', 'Quantificada — base da seleção'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)' }}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={{ ...S.td, color }}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ─────────────────────────────────────────────────────────── LOF MOTIVAÇÃO */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Local Outlier Factor — Motivação</h2>
        <p style={S.p}>
          Os métodos globais de deteção de anomalias (como a distância ao centróide ou a distância média aos k vizinhos) assumem que
          todos os pontos "normais" têm uma densidade semelhante. No entanto, em dados reais existem frequentemente <strong>clusters de
          densidades muito diferentes</strong>: um ponto que seria completamente normal num cluster esparso pode parecer um outlier
          se comparado com um cluster denso.
        </p>
        <div style={S.highlight}>
          <strong>Problema:</strong> O ponto A está na periferia de um cluster esparso. A sua distância ao vizinho mais próximo é 2.0.
          O ponto B está na periferia de um cluster denso. A sua distância ao vizinho mais próximo é 0.1.
          Se usarmos um limiar global de distância, A seria classificado como outlier mesmo sendo um membro legítimo do seu cluster esparso.
          <br /><br />
          <strong>Solução LOF:</strong> Comparar a densidade de cada ponto com a dos seus <em>vizinhos locais</em>, não com uma referência global.
          Um ponto é outlier se a sua densidade local é muito menor que a dos seus vizinhos.
        </div>
        <p style={S.p}>
          O <strong>Local Outlier Factor</strong> (Breunig et al. 2000) atribui a cada ponto um score que mede o grau de anomalia
          relativo à sua vizinhança. Um LOF ≈ 1 indica que o ponto tem densidade similar à dos seus vizinhos (inlier). Um LOF ≫ 1
          indica que o ponto está numa região muito menos densa que os seus vizinhos (outlier).
        </p>
      </div>

      <hr style={S.divider} />

      {/* ─────────────────────────────────────────────────────────── LOF FÓRMULAS */}
      <div style={S.section}>
        <h2 style={S.h2}>6. LOF — Definições e Fórmulas</h2>
        <p style={S.p}>
          O cálculo do LOF passa por quatro definições encadeadas. Fixamos o parâmetro k (número de vizinhos).
        </p>

        <h3 style={S.h3}>6.1 k-distance(p)</h3>
        <p style={S.p}>
          A k-distance de p é a distância ao seu k-ésimo vizinho mais próximo:
        </p>
        <div style={S.math}>
          <BlockMath math="k\text{-distance}(p) = d(p,\, o_k)" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="o_k" /> é o k-ésimo vizinho mais próximo de p. <InlineMath math="N_k(p)" /> denota o conjunto dos
          k vizinhos mais próximos (pode conter mais de k pontos em caso de empate na distância).
        </p>

        <h3 style={S.h3}>6.2 Reachability Distance</h3>
        <p style={S.p}>
          A distância de alcançabilidade de p em relação a o é definida como:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{reach-dist}_k(p, o) = \max\!\bigl(k\text{-distance}(o),\; d(p, o)\bigr)" />
        </div>
        <p style={S.p}>
          Esta definição "suaviza" distâncias muito pequenas: se p está muito perto de o, a distância efetiva usada é pelo menos a
          k-distance de o. Isto reduz a variância estatística em regiões densas e torna o LOF mais estável.
        </p>

        <h3 style={S.h3}>6.3 Local Reachability Density</h3>
        <p style={S.p}>
          A densidade de alcançabilidade local de p é o inverso da média das reachability distances de p em relação aos seus k vizinhos:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{lrd}_k(p) = \frac{1}{\dfrac{\displaystyle\sum_{o \in N_k(p)} \text{reach-dist}_k(p,\, o)}{|N_k(p)|}}" />
        </div>
        <p style={S.p}>
          Um lrd alto significa que p está numa região densa (distâncias de alcançabilidade pequenas). Um lrd baixo significa que p
          está numa região esparsa.
        </p>

        <h3 style={S.h3}>6.4 Local Outlier Factor</h3>
        <p style={S.p}>
          O LOF de p é a média dos rácios entre a lrd dos vizinhos de p e a lrd de p:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{LOF}_k(p) = \frac{\displaystyle\sum_{o \in N_k(p)} \frac{\text{lrd}_k(o)}{\text{lrd}_k(p)}}{|N_k(p)|}" />
        </div>
        <p style={S.p}>
          Interpretação: se os vizinhos de p têm lrd muito maior que a de p, então p está numa região muito menos densa — LOF ≫ 1, outlier.
          Se as densidades são semelhantes, LOF ≈ 1 — inlier. Valores LOF &lt; 1 são raros e indicam que p está numa região mais densa
          que os seus vizinhos (interior de um cluster muito compacto).
        </p>
        <div style={S.note}>
          Tipicamente, classifica-se como outlier qualquer ponto com LOF &gt; 1.5 ou LOF &gt; 2, dependendo da aplicação.
          Não existe um limiar universal — deve ser calibrado com dados de validação.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ─────────────────────────────────────────────────────────── LOF DIAGRAMA */}
      <div style={S.section}>
        <h2 style={S.h2}>7. LOF — Diagrama Ilustrativo</h2>
        <p style={S.p}>
          O diagrama mostra dois clusters com densidades muito diferentes e um outlier próximo do cluster esparso. Um método global
          classificaria o outlier como inlier (distância ao cluster esparso é pequena), mas o LOF deteta-o porque a sua densidade
          local é muito menor que a dos seus vizinhos.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 500 280" width="100%" style={{ display: 'block' }}>
            {/* ── Dense cluster (left) */}
            <text x="110" y="30" textAnchor="middle" fontSize="11" fill="#fb923c" fontWeight="700">Cluster Denso</text>
            {[
              [95, 60], [105, 75], [115, 60], [100, 85], [120, 80],
              [90, 72], [110, 65], [125, 70], [100, 55], [118, 88],
              [92, 90], [130, 62], [108, 95], [85, 80],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="5" fill="#f97316" opacity="0.85" stroke="#fff" strokeWidth="1" />
            ))}

            {/* ── Sparse cluster (right-center) */}
            <text x="310" y="30" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="700">Cluster Esparso</text>
            {[
              [260, 100], [310, 80], [360, 120], [290, 155], [350, 170],
              [320, 130], [270, 175],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="5" fill="#f97316" opacity="0.85" stroke="#fff" strokeWidth="1" />
            ))}

            {/* ── Outlier point */}
            <circle cx="400" cy="200" r="8" fill={color} stroke="#fff" strokeWidth="2" />
            <text x="400" y="220" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">Outlier</text>
            <text x="400" y="233" textAnchor="middle" fontSize="10" fill={color}>LOF = 3.8</text>

            {/* ── k-NN lines from outlier to nearest sparse cluster members */}
            <line x1="400" y1="200" x2="350" y2="170" stroke={color} strokeWidth="1.2" strokeDasharray="5 3" opacity="0.6" />
            <line x1="400" y1="200" x2="360" y2="120" stroke={color} strokeWidth="1.2" strokeDasharray="5 3" opacity="0.6" />

            {/* ── lrd annotation */}
            <rect x="155" y="110" width="90" height="36" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
            <text x="200" y="128" textAnchor="middle" fontSize="10" fill="#f97316">lrd(vizinhos) alto</text>
            <text x="200" y="141" textAnchor="middle" fontSize="10" fill="#f97316">(região esparsa)</text>

            <rect x="155" y="155" width="90" height="36" rx="6" fill={`rgba(249,115,22,0.10)`} stroke={color} strokeWidth="1" />
            <text x="200" y="173" textAnchor="middle" fontSize="10" fill={color}>lrd(outlier) baixo</text>
            <text x="200" y="186" textAnchor="middle" fontSize="10" fill={color}>→ LOF ≫ 1</text>

            {/* ── LOF scores annotation for dense cluster */}
            <rect x="20" y="108" width="60" height="22" rx="5" fill="rgba(14,165,233,0.1)" stroke="#f97316" strokeWidth="1" />
            <text x="50" y="123" textAnchor="middle" fontSize="10" fill="#fb923c">LOF ≈ 1.0</text>

            {/* Legend */}
            <rect x="10" y="245" width="480" height="28" rx="5" fill="rgba(0,0,0,0.03)" stroke="var(--text-secondary)" strokeWidth="1" />
            <circle cx="35" cy="259" r="5" fill="#f97316" />
            <text x="46" y="263" fontSize="10" fill="var(--text-primary)">Cluster denso (LOF≈1)</text>
            <circle cx="180" cy="259" r="5" fill="#f97316" />
            <text x="191" y="263" fontSize="10" fill="var(--text-primary)">Cluster esparso (LOF≈1)</text>
            <circle cx="335" cy="259" r="6" fill={color} />
            <text x="347" y="263" fontSize="10" fill="var(--text-primary)">Outlier (LOF≫1)</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ─────────────────────────────────────────────────────────── LOF EXEMPLO NUMÉRICO */}
      <div style={S.section}>
        <h2 style={S.h2}>8. LOF — Exemplo Numérico (k = 2)</h2>
        <p style={S.p}>
          Consideremos 6 pontos numa linha (1D) com as seguintes posições. Vamos calcular o LOF do ponto P com k = 2.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Ponto</th>
              <th style={S.th}>Posição (x)</th>
              <th style={S.th}>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['A', '1.0', 'Cluster denso'],
              ['B', '1.5', 'Cluster denso'],
              ['C', '2.0', 'Cluster denso'],
              ['D', '8.0', 'Cluster esparso'],
              ['E', '9.5', 'Cluster esparso'],
              ['P', '11.5', 'Ponto a avaliar (possível outlier)'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{a}</td>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Passo 1 — k-distances (k = 2)</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Ponto</th>
              <th style={S.th}>2-NN</th>
              <th style={S.th}>2-distance</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['D', 'E, P', '|9.5−8| = 1.5'],
              ['E', 'D, P', '|11.5−9.5| = 2.0'],
              ['P', 'E, D', '|11.5−9.5| = 2.0'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{a}</td>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>{b}</td>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Passo 2 — Reachability Distances de P</h3>
        <div style={S.math}>
          <BlockMath math="\text{reach-dist}_2(P, E) = \max(2\text{-dist}(E),\; d(P,E)) = \max(2.0,\; 2.0) = 2.0" />
        </div>
        <div style={S.math}>
          <BlockMath math="\text{reach-dist}_2(P, D) = \max(2\text{-dist}(D),\; d(P,D)) = \max(1.5,\; 3.5) = 3.5" />
        </div>

        <h3 style={S.h3}>Passo 3 — lrd de P e dos seus vizinhos</h3>
        <div style={S.math}>
          <BlockMath math="\text{lrd}_2(P) = \frac{1}{\frac{2.0 + 3.5}{2}} = \frac{1}{2.75} \approx 0.364" />
        </div>
        <p style={S.p}>Para D (vizinhos: E a 1.5, P a 3.5):</p>
        <div style={S.math}>
          <BlockMath math="\text{reach-dist}_2(D,E) = \max(2.0, 1.5) = 2.0,\quad \text{reach-dist}_2(D,P) = \max(2.0, 3.5) = 3.5" />
        </div>
        <div style={S.math}>
          <BlockMath math="\text{lrd}_2(D) = \frac{1}{(2.0+3.5)/2} = \frac{1}{2.75} \approx 0.364" />
        </div>
        <p style={S.p}>Para E (vizinhos: D a 1.5, P a 2.0):</p>
        <div style={S.math}>
          <BlockMath math="\text{lrd}_2(E) = \frac{1}{(\max(1.5,1.5)+\max(2.0,2.0))/2} = \frac{1}{(1.5+2.0)/2} = \frac{1}{1.75} \approx 0.571" />
        </div>

        <h3 style={S.h3}>Passo 4 — LOF de P</h3>
        <div style={S.math}>
          <BlockMath math="\text{LOF}_2(P) = \frac{1}{|N_2(P)|} \sum_{o \in \{E,D\}} \frac{\text{lrd}_2(o)}{\text{lrd}_2(P)} = \frac{1}{2}\left(\frac{0.571}{0.364} + \frac{0.364}{0.364}\right) \approx \frac{1}{2}(1.57 + 1.00) = 1.28" />
        </div>
        <div style={S.note}>
          LOF(P) ≈ 1.28 — ligeiramente acima de 1, indicando que P está numa região um pouco menos densa que os seus vizinhos, mas
          não drasticamente. Com k maior e um cluster mais denso como referência, o LOF de P seria substancialmente maior.
        </div>

        <h3 style={S.h3}>Implementação em Python</h3>
      </div>

      <hr style={S.divider} />

      {/* ─────────────────────────────────────────────────────────── COMPARAÇÃO */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Comparação de Métodos de Clustering e Anomalia</h2>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Formas de clusters</th>
              <th style={S.th}>Ruído / Outliers</th>
              <th style={S.th}>Requer k?</th>
              <th style={S.th}>Assunção de densidade</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['k-Means', 'Esféricas / convexas', 'Não — atribui todos os pontos', 'Sim — k fixo', 'Uniforme dentro do cluster'],
              ['Hierarchical (Ward)', 'Variadas (depende do linkage)', 'Não (pode cortar depois)', 'Não (corte no dendrograma)', 'Não assume'],
              ['DBSCAN', 'Arbitrárias', 'Sim — pontos noise como −1', 'Não — usa ε e MinPts', 'Uniforme (ε único)'],
              ['HDBSCAN', 'Arbitrárias', 'Sim — mais robusto', 'Não — min_cluster_size', 'Variável — nativo'],
              ['LOF', 'N/A (deteção anomalia)', 'Sim — score contínuo LOF', 'Sim — k vizinhos', 'Local — relativo à vizinhança'],
            ].map(([a, b, c, d, e]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
                <td style={S.td}>{e}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          LOF não é um algoritmo de clustering — é um algoritmo de deteção de anomalias (anomaly detection). Pode ser combinado
          com DBSCAN/HDBSCAN: usar DBSCAN para identificar clusters e LOF para pontuar os pontos noise ou border.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ─────────────────────────────────────────────────────────── SÍNTESE */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Síntese do Módulo</h2>
        <div style={S.highlight}>
          <strong style={{ color }}>Conceitos fundamentais a reter:</strong>
          <ul style={{ color: 'var(--text-primary)', lineHeight: 2.2, paddingLeft: '1.25rem', margin: '0.75rem 0 0' }}>
            <li><strong>DBSCAN:</strong> clusters = regiões densas (≥ MinPts pontos em raio ε); core / border / noise</li>
            <li><strong>Escolha de ε:</strong> k-distance plot — cotovelo da curva com k = MinPts − 1</li>
            <li><strong>Density-reachable:</strong> cadeia de core points; density-connected: base da definição de cluster DBSCAN</li>
            <li><strong>HDBSCAN:</strong> mutual reachability distance → MST → condensed tree → clusters mais estáveis</li>
            <li><strong>HDBSCAN vs DBSCAN:</strong> sem ε, suporta densidades variáveis, soft clustering, hierarquia</li>
            <li><strong>LOF:</strong> compara lrd(p) com lrd dos vizinhos; LOF ≈ 1 = inlier, LOF ≫ 1 = outlier</li>
            <li><strong>reach-dist:</strong> suaviza distâncias em regiões densas, tornando o LOF mais estável</li>
            <li><strong>lrd(p):</strong> inverso da média das reach-dist de p aos seus k vizinhos</li>
            <li><strong>Quando usar LOF:</strong> dados com clusters de densidades muito diferentes onde métodos globais falham</li>
            <li><strong>Todos:</strong> clusters de forma arbitrária; DBSCAN/HDBSCAN identificam outliers automaticamente</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
