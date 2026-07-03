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

/* ── Ratings matrix data ── */
const MATRIX = [
  ['', 'Filme A', 'Filme B', 'Filme C', 'Filme D'],
  ['Ana',    '5', '3', '—', '1'],
  ['Bruno',  '4', '—', '4', '1'],
  ['Carla',  '1', '1', '—', '5'],
  ['Diogo',  '—', '2', '5', '4'],
];

export default function DM14() {
  return (
    <div style={S.page}>
      <Link to="/dm" style={S.back}><ArrowLeft size={16} /> Voltar a Data Mining</Link>
      <div style={S.tag}>MÓDULO 10</div>
      <h1 style={S.h1}>ALS — Alternating Least Squares</h1>
      <p style={S.lead}>
        ALS é o algoritmo de matrix factorization que alimenta sistemas de recomendação de escala industrial
        (Netflix, Spotify, Amazon). Decompõe a matriz esparsa de ratings em dois conjuntos de factores latentes —
        um para utilizadores, outro para itens — alternando entre optimizações com solução fechada.
        Cada passo é um problema de ridge regression, o que garante convergência e paralelização natural.
      </p>

      {/* ── SECTION 1: Collaborative Filtering ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Collaborative Filtering — User-based vs Item-based</h2>
        <p style={S.p}>
          Collaborative filtering (CF) baseia-se na ideia de que utilizadores com gostos semelhantes no passado
          tendem a ter gostos semelhantes no futuro. Não precisa de conhecer as características dos itens —
          apenas o padrão colectivo de ratings.
        </p>

        <h3 style={S.h3}>Matriz de Ratings (exemplo 4×4)</h3>
        <p style={S.p}>
          As linhas são utilizadores, as colunas são itens, cada célula é um rating (1–5). A maioria das
          células está em falta (—) — tipicamente mais de 99% num sistema real.
        </p>
        <div style={S.diagram}>
          <table style={{ ...S.table, textAlign: 'center' }}>
            <thead>
              <tr>
                {MATRIX[0].map((h, i) => (
                  <th key={i} style={{ ...S.th, textAlign: 'center', fontWeight: i === 0 ? 400 : 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MATRIX.slice(1).map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      style={{
                        ...S.td,
                        textAlign: 'center',
                        fontWeight: i === 0 ? 700 : 400,
                        color: cell === '—' ? 'var(--text-secondary)' : i === 0 ? color : 'var(--text-primary)',
                        fontSize: cell === '—' ? '1.1rem' : '1rem',
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '0.5rem 0 0' }}>
            Objetivo: prever os ratings em falta (—) para recomendar itens relevantes a cada utilizador.
          </p>
        </div>

        <h3 style={S.h3}>User-based CF</h3>
        <p style={S.p}>
          Encontra utilizadores similares ao utilizador-alvo (vizinhos) e agrega os seus ratings. A similidade
          mais comum é o cosine similarity sobre os ratings em comum:
        </p>
        <div style={S.math}>
          <BlockMath math={String.raw`\text{sim}(u, v) = \frac{\sum_{i \in I_{uv}} r_{ui} \cdot r_{vi}}{\sqrt{\sum_{i \in I_{uv}} r_{ui}^2} \cdot \sqrt{\sum_{i \in I_{uv}} r_{vi}^2}}`} />
        </div>
        <p style={S.p}>
          Onde <InlineMath math="I_{uv}" /> é o conjunto de itens avaliados por ambos os utilizadores u e v.
          O rating previsto para o utilizador u no item j é uma média ponderada dos ratings dos vizinhos:
        </p>
        <div style={S.math}>
          <BlockMath math={String.raw`\hat{r}_{uj} = \bar{r}_u + \frac{\sum_{v \in N(u)} \text{sim}(u,v)\,(r_{vj} - \bar{r}_v)}{\sum_{v \in N(u)} |\text{sim}(u,v)|}`} />
        </div>

        <h3 style={S.h3}>Item-based CF</h3>
        <p style={S.p}>
          Em vez de encontrar utilizadores similares, encontra itens similares aos que o utilizador já avaliou
          e usa esses ratings como previsão. Mais estável do que user-based porque os perfis de itens mudam
          menos frequentemente do que os perfis de utilizadores.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Abordagem</th>
              <th style={S.th}>Como funciona</th>
              <th style={S.th}>Escalabilidade</th>
              <th style={S.th}>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['User-based CF', 'Vizinhos similares entre utilizadores', 'Mau — O(m²) com m utilizadores', 'Poucos utilizadores, muitos itens'],
              ['Item-based CF', 'Vizinhos similares entre itens', 'Melhor — itens mudam menos', 'Catálogo estável (e.g. filmes)'],
              ['Matrix Factorization', 'Factores latentes globais', 'Excelente — O(k·n) por previsão', 'Escala industrial'],
            ].map(([a, b, c, d]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={{ ...S.td, fontSize: '0.85rem' }}>{c}</td>
                <td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          <strong>Limitação do CF puro:</strong> a esparsidade extrema torna difícil encontrar vizinhos com
          ratings em comum. Matrix factorization resolve este problema ao criar representações densas
          num espaço latente de dimensão k.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 2: Matrix Factorization ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Matrix Factorization — R ≈ U Vᵀ</h2>
        <p style={S.p}>
          A ideia central é aproximar a matriz de ratings esparsa <InlineMath math="R \in \mathbb{R}^{m \times n}" /> pelo
          produto de duas matrizes densas de dimensão reduzida:
        </p>
        <div style={S.math}>
          <BlockMath math={String.raw`R \approx U \cdot V^\top \quad \text{com } U \in \mathbb{R}^{m \times k},\; V \in \mathbb{R}^{n \times k},\; k \ll \min(m,n)`} />
        </div>

        {/* SVG: R ≈ U Vᵀ diagram */}
        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
            Decomposição matricial R ≈ U × Vᵀ
          </p>
          <svg viewBox="0 0 620 200" style={{ width: '100%', maxWidth: 620, display: 'block', margin: '0 auto' }}>
            {/* R matrix — sparse */}
            <rect x="10" y="30" width="130" height="140" rx="6" fill="none" stroke={color} strokeWidth="2" />
            <text x="75" y="18" textAnchor="middle" fontSize="13" fill={color} fontWeight="700">R (m × n)</text>
            <text x="75" y="112" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">esparsa</text>
            {/* Dots inside R */}
            {[40,60,80,100,120,140,160].map((y, yi) =>
              [25,45,65,85,105,125].map((x, xi) => (
                <circle key={`${yi}-${xi}`} cx={x} cy={y+2} r="4"
                  fill={(yi + xi) % 3 === 0 ? color : 'var(--card-border)'} opacity="0.7" />
              ))
            )}
            {/* ≈ */}
            <text x="165" y="108" textAnchor="middle" fontSize="22" fill="var(--text-secondary)" fontWeight="300">≈</text>
            {/* U matrix */}
            <rect x="190" y="50" width="60" height="140" rx="6" fill="none" stroke="#f97316" strokeWidth="2" />
            <text x="220" y="38" textAnchor="middle" fontSize="13" fill="#f97316" fontWeight="700">U (m × k)</text>
            <text x="220" y="128" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">densa</text>
            {[60,82,104,126,148,170].map((y, yi) =>
              [200,220,240].map((x, xi) => (
                <circle key={`u-${yi}-${xi}`} cx={x} cy={y} r="4" fill="#f97316" opacity="0.6" />
              ))
            )}
            {/* × */}
            <text x="270" y="128" textAnchor="middle" fontSize="18" fill="var(--text-secondary)">×</text>
            {/* Vt matrix */}
            <rect x="285" y="50" width="130" height="50" rx="6" fill="none" stroke="#f59e0b" strokeWidth="2" />
            <text x="350" y="38" textAnchor="middle" fontSize="13" fill="#f59e0b" fontWeight="700">Vᵀ (k × n)</text>
            <text x="350" y="80" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">densa</text>
            {[62,76,90].map((y, yi) =>
              [296,318,340,362,384,406].map((x, xi) => (
                <circle key={`v-${yi}-${xi}`} cx={x} cy={y} r="4" fill="#f59e0b" opacity="0.6" />
              ))
            )}
            {/* Legend */}
            <text x="10" y="192" fontSize="10" fill="var(--text-secondary)">cinza = missing; azul = observado</text>
            <text x="285" y="192" fontSize="10" fill="var(--text-secondary)">k = factores latentes (e.g. k=50)</text>
          </svg>
        </div>

        <h3 style={S.h3}>Intuição dos Factores Latentes</h3>
        <p style={S.p}>
          Os k factores latentes são dimensões ocultas que o modelo descobre automaticamente. Num contexto de
          filmes, podem corresponder a géneros (acção, drama, comédia), período (clássico vs contemporâneo),
          ou estilos cinematográficos. Cada utilizador tem um vector <InlineMath math="\mathbf{u}_i \in \mathbb{R}^k" /> que
          codifica as suas preferências nessas dimensões; cada item tem um vector <InlineMath math="\mathbf{v}_j \in \mathbb{R}^k" />.
          O rating previsto é simplesmente:
        </p>
        <div style={S.math}>
          <BlockMath math={String.raw`\hat{r}_{ij} = \mathbf{u}_i^\top \mathbf{v}_j = \sum_{l=1}^{k} u_{il} \cdot v_{jl}`} />
        </div>
        <div style={S.note}>
          Os factores latentes <em>não têm interpretação semântica garantida</em> — o modelo optimiza para
          minimizar o erro de reconstrução, não para criar factores interpretáveis. Mesmo assim, estudos
          empíricos mostram que dimensões com significado emergem naturalmente (e.g. no MovieLens).
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 3: Loss Function ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Função de Perda e Regularização</h2>
        <p style={S.p}>
          Optimizar U e V para minimizar o erro de reconstrução apenas nos ratings observados
          (<InlineMath math="\mathcal{O}" /> = conjunto de pares observados):
        </p>
        <div style={S.math}>
          <BlockMath math={String.raw`J(U, V) = \sum_{(i,j)\in\mathcal{O}} \bigl(r_{ij} - \mathbf{u}_i^\top \mathbf{v}_j\bigr)^2 + \lambda\!\left(\|U\|_F^2 + \|V\|_F^2\right)`} />
        </div>
        <p style={S.p}>
          Onde <InlineMath math="\|\cdot\|_F" /> é a norma de Frobenius: a raiz da soma dos quadrados de todos os elementos.
          O termo de regularização <InlineMath math="\lambda(\|U\|_F^2 + \|V\|_F^2)" /> penaliza factores com magnitude elevada,
          prevenindo overfitting nos ratings observados.
        </p>

        
          <strong>Porque só os ratings observados?</strong><br />
          Se minimizássemos o erro em toda a matriz (incluindo as entradas em falta), o modelo aprenderia
          a prever 0 para tudo — o que minimiza o erro nos 99%+ de zeros. Em vez disso, focamo-nos só nos
          pares <InlineMath math="(i,j)" /> com rating conhecido, e deixamos o modelo generalizar para os restantes.
        

        <h3 style={S.h3}>Problema de Optimização</h3>
        <p style={S.p}>
          J é <strong>não-convexo em (U, V) simultaneamente</strong> — tem mínimos locais, pelo que
          gradient descent não garante convergência ao mínimo global. Mas se fixarmos U, J torna-se
          convexo em V (e vice-versa). É exactamente este insight que o ALS explora.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 4: ALS Algorithm ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Algoritmo ALS — Derivação e Convergência</h2>
        <p style={S.p}>
          ALS (Alternating Least Squares) fixa uma das matrizes e optimiza a outra — cada sub-problema
          é agora convexo e tem solução analítica via ridge regression.
        </p>

        <h3 style={S.h3}>Passo 1 — Fixar V, resolver u_i</h3>
        <p style={S.p}>
          Com V fixo, o problema para o utilizador i envolve apenas os itens que ele avaliou
          (<InlineMath math="I_i" />). Seja <InlineMath math="V_{I_i}" /> a submatriz das linhas de V correspondentes a esses itens
          e <InlineMath math="\mathbf{r}_i" /> o vector dos seus ratings. A solução de ridge regression é:
        </p>
        <div style={S.math}>
          <BlockMath math={String.raw`\mathbf{u}_i = \left(V_{I_i}^\top V_{I_i} + \lambda I_k\right)^{-1} V_{I_i}^\top \mathbf{r}_i`} />
        </div>

        <h3 style={S.h3}>Passo 2 — Fixar U, resolver v_j</h3>
        <p style={S.p}>
          Simetricamente, com U fixo, para cada item j com utilizadores avaliadores <InlineMath math="U_j" />:
        </p>
        <div style={S.math}>
          <BlockMath math={String.raw`\mathbf{v}_j = \left(U_{U_j}^\top U_{U_j} + \lambda I_k\right)^{-1} U_{U_j}^\top \mathbf{r}_j`} />
        </div>

        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Ciclo ALS</p>
          {[
            ['1', 'Inicializar', 'U e V com valores aleatórios pequenos (ou SVD truncado)'],
            ['2', 'Fixar V → optimizar U', 'Resolver k×k sistema linear para cada utilizador i em paralelo'],
            ['3', 'Fixar U → optimizar V', 'Resolver k×k sistema linear para cada item j em paralelo'],
            ['4', 'Verificar convergência', 'Calcular J; parar se ΔJ < ε ou após maxIter (tipicamente 10–20)'],
            ['5', 'Prever', 'r̂ᵢⱼ = uᵢᵀ vⱼ para qualquer par (i, j)'],
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

        <h3 style={S.h3}>Porque ALS é Tractável e Paralelizável</h3>
        <p style={S.p}>
          Cada actualização de <InlineMath math="\mathbf{u}_i" /> envolve inverter uma matriz <InlineMath math="k \times k" /> —
          com k tipicamente 10–200, isto é barato. Crucialmente, todos os utilizadores podem ser actualizados
          <strong> em paralelo</strong> pois são independentes dado V. O mesmo se aplica aos itens dado U.
          Esta propriedade torna ALS ideal para frameworks distribuídos como Apache Spark MLlib.
        </p>
        <div style={S.note}>
          <strong>Convergência garantida:</strong> cada passo de ALS não aumenta a função de perda J
          (cada sub-problema encontra o mínimo exacto do seu subproblema). Portanto J é monotonamente
          não-crescente — ao contrário de SGD, que pode oscilar. ALS converge a um mínimo local em poucas
          iterações (10–20 é geralmente suficiente).
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 5: Implicit Feedback ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Implicit Feedback — Modelo de Confiança</h2>
        <p style={S.p}>
          Na prática, ratings explícitos (1–5 estrelas) são raros. O mais comum é o <strong>implicit feedback</strong>:
          cliques, visualizações, compras, reproduções. Estes dados são mais abundantes mas mais ambíguos —
          a ausência não significa desgosto (o utilizador pode simplesmente não ter visto o item).
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}></th>
              <th style={S.th}>Explicit Feedback</th>
              <th style={S.th}>Implicit Feedback</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Exemplos', 'Estrelas, thumbs up/down, reviews', 'Cliques, streams, compras, tempo de visualização'],
              ['Abundância', 'Escasso — requer esforço activo', 'Abundante — gerado automaticamente'],
              ['Sinal negativo', 'Claro — rating 1 = não gostou', 'Ambíguo — ausência ≠ desgosto'],
              ['Modelação', 'Minimizar erro nos ratings observados', 'Modelo de confiança c_{ui} (ver abaixo)'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)' }}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={{ ...S.td, color }}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Modelo Hu-Koren-Volinsky (2008)</h3>
        <p style={S.p}>
          Trata <em>todas</em> as entradas como observações, mas com confiança variável. Define-se uma variável
          binária de preferência e um peso de confiança proporcional ao número de interacções:
        </p>
        <div style={S.math}>
          <BlockMath math={String.raw`p_{ui} = \begin{cases} 1 & \text{se } r_{ui} > 0 \\ 0 & \text{caso contrário} \end{cases}`} />
        </div>
        <div style={S.math}>
          <BlockMath math={String.raw`c_{ui} = 1 + \alpha \cdot r_{ui} \quad (\text{e.g. } \alpha = 40)`} />
        </div>
        <p style={S.p}>
          A função de perda pondera cada observação pela sua confiança:
        </p>
        <div style={S.math}>
          <BlockMath math={String.raw`J = \sum_{u,i} c_{ui}\!\left(p_{ui} - \mathbf{u}_u^\top \mathbf{v}_i\right)^2 + \lambda\!\left(\|U\|_F^2 + \|V\|_F^2\right)`} />
        </div>
        
          <strong>Intuição:</strong> um utilizador que ouviu uma música 50 vezes (<InlineMath math="r_{ui}=50" />, <InlineMath math="c_{ui}=2001" />)
          dá muito mais sinal do que uma música que ouviu uma vez (<InlineMath math="r_{ui}=1" />, <InlineMath math="c_{ui}=41" />).
          Entradas com zero interacções têm confiança base 1 — são observadas mas com peso mínimo.
          A solução ALS por utilizador adapta-se: <InlineMath math="\mathbf{u}_u = (V^\top C^u V + \lambda I)^{-1} V^\top C^u \mathbf{p}_u" /> onde
          {' '}<InlineMath math="C^u" /> é a matriz diagonal de confianças do utilizador u.
        
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 6: Cold Start ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Cold Start — Novos Utilizadores e Itens</h2>
        <p style={S.p}>
          O cold start é o principal talão de Aquiles de qualquer sistema de CF: um utilizador ou item novo
          sem histórico não tem vectores U/V treinados, logo não é possível fazer previsões directas.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Cenário</th>
              <th style={S.th}>Problema</th>
              <th style={S.th}>Estratégias</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Novo utilizador', 'Sem ratings históricos — u_i desconhecido', 'Onboarding (pedir ratings iniciais); usar perfil demográfico; fallback para popularidade global'],
              ['Novo item', 'Sem utilizadores que o avaliaram — v_j desconhecido', 'Content-based fallback (características do item); inicializar v_j com média dos itens similares'],
              ['Sistema novo', 'Sem dados de nenhum utilizador ou item', 'Arrancar com content-based puro; acumular dados para depois activar CF'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{a}</td>
                <td style={{ ...S.td, fontSize: '0.88rem' }}>{b}</td>
                <td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          <strong>Abordagem híbrida:</strong> sistemas de produção combinam CF com content-based.
          O modelo SVD++ incorpora feedback implícito (quais itens o utilizador avaliou, independentemente
          do valor) para mitigar o cold start. O LightFM combina embeddings de features de utilizadores/itens
          com CF num único modelo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 7: ALS vs SGD ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. ALS vs SGD — Quando Usar Cada Um</h2>
        <p style={S.p}>
          SGD (Stochastic Gradient Descent) é a alternativa mais comum à optimização ALS para matrix
          factorization. Cada abordagem tem vantagens distintas:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Critério</th>
              <th style={S.th}>ALS</th>
              <th style={S.th}>SGD</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Paralelização', 'Natural — cada u_i / v_j independente', 'Difícil — actualizações com conflitos'],
              ['Escalabilidade', 'Excelente — Spark MLlib, distribuído', 'Razoável — Hogwild! para sparse updates'],
              ['Convergência', 'Garantida (J monotonamente não-cresce)', 'Não garantida — pode oscilar (learning rate)'],
              ['Implicit feedback', 'Resolve exactamente com C^u diagonal', 'Pode ser adaptado mas menos eficiente'],
              ['Online learning', 'Recalcula todo o batch por iteração', 'Ideal — actualiza com cada novo rating'],
              ['Memória', 'Requer V_{I_i} em memória por utilizador', 'Leve — processa um exemplo de cada vez'],
              ['Implementações', 'Spark MLlib, Implicit (Python), ALS-WR', 'SVD, FunkSVD, LightFM, PyTorch'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)' }}>{a}</td>
                <td style={{ ...S.td, color }}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.highlight}>
          <strong>Regra prática:</strong> use ALS quando o dataset cabe em memória distribuída e a
          paralelização é prioritária (dados de e-commerce, streaming em larga escala). Use SGD quando
          os dados chegam em stream contínuo (online learning) ou quando a memória é limitada.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 8: Métricas de Avaliação ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Métricas de Avaliação</h2>
        <p style={S.p}>
          A escolha da métrica depende criticamente do tipo de feedback: para ratings explícitos medem-se
          erros de previsão; para implicit feedback (ranking) medem-se a qualidade das listas de recomendação.
        </p>

        <h3 style={S.h3}>Explicit Feedback — Erro de Previsão</h3>
        <div style={S.math}>
          <BlockMath math={String.raw`\text{RMSE} = \sqrt{\frac{1}{|\mathcal{T}|}\sum_{(i,j)\in\mathcal{T}} (r_{ij} - \hat{r}_{ij})^2}`} />
        </div>
        <div style={S.math}>
          <BlockMath math={String.raw`\text{MAE} = \frac{1}{|\mathcal{T}|}\sum_{(i,j)\in\mathcal{T}} |r_{ij} - \hat{r}_{ij}|`} />
        </div>
        <p style={S.p}>
          RMSE penaliza mais os erros grandes (quadrático); MAE é mais robusto a outliers. Ambos medem
          o quão bem o modelo prevê ratings — mas <em>baixo RMSE não implica boas recomendações</em>:
          o modelo pode errar pouco nos ratings mas recomendar itens que o utilizador já conhece.
        </p>

        <h3 style={S.h3}>Implicit Feedback — Métricas de Ranking</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Métrica</th>
              <th style={S.th}>Fórmula / Intuição</th>
              <th style={S.th}>O que mede</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Precision@k', 'Fracção dos top-k recomendados que são relevantes', 'Qualidade da lista top-k'],
              ['Recall@k', 'Fracção dos itens relevantes que aparecem no top-k', 'Cobertura dos itens relevantes'],
              ['NDCG@k', 'Normalized Discounted Cumulative Gain — pondera posição', 'Ordem dos itens relevantes importa'],
              ['MAP', 'Mean Average Precision — média de AP por utilizador', 'Qualidade global do ranking'],
              ['MRR', 'Mean Reciprocal Rank — posição do 1º item relevante', 'Rapidez em encontrar algo relevante'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 700, color, fontFamily: 'monospace', fontSize: '0.85rem' }}>{a}</td>
                <td style={{ ...S.td, fontSize: '0.88rem' }}>{b}</td>
                <td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.math}>
          <BlockMath math={String.raw`\text{NDCG@k} = \frac{\text{DCG@k}}{\text{IDCG@k}}, \quad \text{DCG@k} = \sum_{i=1}^{k} \frac{2^{rel_i} - 1}{\log_2(i+1)}`} />
        </div>
        <div style={S.note}>
          <strong>Divisão treino/teste em recomendação:</strong> o split deve ser temporal (treinar em
          ratings antigos, testar em ratings novos) para simular o cenário real. Split aleatório vaza
          informação futura para o treino e produz estimativas optimistas.
        </div>
      </div>


      <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>9. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.4rem"}}><strong>Collaborative Filtering — User-based vs Item-based</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Matrix Factorization — R ≈ U Vᵀ</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Função de Perda e Regularização</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Algoritmo ALS — Derivação e Convergência</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Implicit Feedback — Modelo de Confiança</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Cold Start — Novos Utilizadores e Itens</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>ALS vs SGD — Quando Usar Cada Um</strong> — conceito central desta lecture.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
