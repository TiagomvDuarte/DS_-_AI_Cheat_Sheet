import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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
  note: { background: `rgba(74,158,237,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

export default function DV5() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/dv" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>MÓDULO 05</div>
        <h1 style={S.h1}>Plotly &amp; Interactividade</h1>

        {/* SECTION 1 */}
        <div style={S.section}>
          <h2 style={S.h2}>1. Plotly — Arquitectura e Filosofia</h2>
          <p style={S.p}>
            O ecossistema Plotly divide-se em três camadas distintas. No topo encontramos o <strong>Plotly Express</strong> (px), uma API de alto nível que permite criar gráficos completos com uma única linha de código. Por baixo está o <strong>plotly.graph_objects</strong> (go), a API de baixo nível que oferece controlo total sobre cada trace, eixo e anotação. Na base, o motor de renderização é o <strong>Plotly.js</strong>, uma biblioteca JavaScript que converte a especificação JSON da figura em SVG ou WebGL no browser.
          </p>
          <p style={S.p}>
            Uma figura Plotly é sempre descrita por um objecto JSON com três chaves principais: <strong>data</strong> (lista de traces — cada trace é um tipo de gráfico com os seus dados), <strong>layout</strong> (título, eixos, legenda, fundo, margens, anotações) e <strong>config</strong> (comportamentos da barra de ferramentas, se o gráfico é editável, modo scroll, etc.). Esta separação clara entre dados e apresentação torna os gráficos facilmente serializáveis e transferíveis entre Python, JavaScript e outras linguagens.
          </p>

          {/* SVG: arquitectura em camadas */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>Arquitectura em Camadas do Plotly</p>
            <svg viewBox="0 0 400 200" style={{ width: '100%', maxWidth: 400, display: 'block', margin: '0 auto' }}>
              {/* Layer 4 - top */}
              <rect x="100" y="10" width="200" height="36" rx="8" fill={color} />
              <text x="200" y="33" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">Plotly Express (px)</text>
              {/* arrow */}
              <path d="M200 46 L200 62" stroke="#aaa" strokeWidth="2" fill="none" markerEnd="url(#arr)" />
              {/* Layer 3 */}
              <rect x="80" y="62" width="240" height="36" rx="8" fill={`rgba(74,158,237,0.10)`} />
              <text x="200" y="85" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">plotly.graph_objects (go)</text>
              {/* arrow */}
              <path d="M200 98 L200 114" stroke="#aaa" strokeWidth="2" fill="none" markerEnd="url(#arr)" />
              {/* Layer 2 */}
              <rect x="60" y="114" width="280" height="36" rx="8" fill={`rgba(74,158,237,0.10)`} />
              <text x="200" y="137" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">Plotly.js (JavaScript)</text>
              {/* arrow */}
              <path d="M200 150 L200 166" stroke="#aaa" strokeWidth="2" fill="none" markerEnd="url(#arr)" />
              {/* Layer 1 - bottom */}
              <rect x="40" y="166" width="140" height="28" rx="6" fill={`rgba(74,158,237,0.15)`} stroke={color} strokeWidth="1" />
              <text x="110" y="184" textAnchor="middle" fill={color} fontSize="12" fontWeight="600">SVG</text>
              <rect x="220" y="166" width="140" height="28" rx="6" fill={`rgba(74,158,237,0.15)`} stroke={color} strokeWidth="1" />
              <text x="290" y="184" textAnchor="middle" fill={color} fontSize="12" fontWeight="600">WebGL</text>
              <defs>
                <marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill="#aaa" />
                </marker>
              </defs>
            </svg>
          </div>

          <h3 style={S.h3}>Quando usar Plotly vs. Matplotlib</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Contexto</th>
                  <th style={S.th}>Matplotlib / Seaborn</th>
                  <th style={S.th}>Plotly</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Exploração de dados', 'Adequado mas sem hover', 'Excelente — hover revela outliers rapidamente'],
                  ['Publicação / papers', 'Ideal — controlo de fontes e layout ao píxel', 'Possível com kaleido, mas menos flexível'],
                  ['Dashboards web', 'Não adequado', 'Ideal — integra directamente com Dash'],
                  ['Apresentações', 'PNG embutido em slides', 'HTML interactivo ou iframe'],
                  ['Gráficos 3D', 'mpl_toolkits.mplot3d — limitado', 'go.Scatter3d, go.Surface — completo'],
                  ['Animações', 'FuncAnimation — trabalhoso', 'animation_frame= — trivial'],
                ].map(([ctx, mpl, pl]) => (
                  <tr key={ctx}>
                    <td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)' }}>{ctx}</td>
                    <td style={S.td}>{mpl}</td>
                    <td style={{ ...S.td, color }}>{pl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.note}>
            A regra prática: se o resultado final vai para um PDF ou paper, use Matplotlib/Seaborn. Se vai para o browser, uma apresentação interactiva ou um dashboard, use Plotly.
          </div>
        </div>

        <hr style={S.divider} />

        {/* SECTION 2 */}
        <div style={S.section}>
          <h2 style={S.h2}>2. Plotly Express — API de Alto Nível</h2>
          <p style={S.p}>
            O Plotly Express foi concebido para ser tão simples quanto o Seaborn mas produzir gráficos interactivos. A função recebe sempre um DataFrame e os nomes das colunas como strings — não os dados em si. O resultado é um objecto <code>go.Figure</code> totalmente customizável.
          </p>
          <p style={S.p}>
            As funções mais utilizadas são: <strong>px.scatter</strong> (dispersão), <strong>px.bar</strong> (barras), <strong>px.line</strong> (linhas temporais), <strong>px.box</strong> (bigodes), <strong>px.histogram</strong> (histograma), <strong>px.violin</strong> (violino) e <strong>px.pie</strong> (sectores). Todas partilham os mesmos parâmetros de mapeamento: <code>color</code>, <code>size</code>, <code>symbol</code>, <code>facet_col</code>, <code>facet_row</code>, <code>hover_name</code>, <code>hover_data</code>.
          </p>


          <p style={S.p}>
            O parâmetro <code>facet_col</code> cria automaticamente sub-gráficos lado a lado para cada valor único da coluna indicada — equivalente ao <code>FacetGrid</code> do Seaborn mas com uma única linha. Os eixos são partilhados por defeito, garantindo comparabilidade visual.
          </p>

          {/* SVG: mockup scatter interactivo com tooltip */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>Mockup — Scatter Interactivo com Tooltip</p>
            <svg viewBox="0 0 420 260" style={{ width: '100%', maxWidth: 420, display: 'block', margin: '0 auto' }}>
              {/* fundo */}
              <rect x="0" y="0" width="420" height="260" rx="10" fill="var(--bg-primary, #f8f8fc)" />
              {/* eixos */}
              <line x1="50" y1="20" x2="50" y2="210" stroke="#ccc" strokeWidth="1.5" />
              <line x1="50" y1="210" x2="390" y2="210" stroke="#ccc" strokeWidth="1.5" />
              {/* labels eixos */}
              <text x="220" y="228" textAnchor="middle" fill="#999" fontSize="11">PIB per capita</text>
              <text x="18" y="115" textAnchor="middle" fill="#999" fontSize="11" transform="rotate(-90,18,115)">Esp. Vida</text>
              {/* pontos scatter */}
              <circle cx="90" cy="80" r="8" fill="#4a9eed" opacity="0.85" />
              <circle cx="150" cy="100" r="14" fill="#7dd3fc" opacity="0.85" />
              <circle cx="300" cy="70" r="22" fill="#4a9eed" opacity="0.85" />
              <circle cx="260" cy="90" r="7" fill="#4a9eed" opacity="0.85" />
              <circle cx="80" cy="150" r="18" fill="#0284c7" opacity="0.85" />
              <circle cx="110" cy="130" r="20" fill="#0284c7" opacity="0.85" />
              <circle cx="340" cy="60" r="8" fill="#4a9eed" opacity="0.85" />
              <circle cx="200" cy="110" r="9" fill="#7dd3fc" opacity="0.85" />
              {/* tooltip fantasma */}
              <rect x="155" y="48" width="130" height="58" rx="6" fill={color} opacity="0.93" />
              <text x="220" y="67" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">EUA</text>
              <text x="220" y="82" textAnchor="middle" fill="#fde8d8" fontSize="10">PIB: 65 000 USD</text>
              <text x="220" y="95" textAnchor="middle" fill="#fde8d8" fontSize="10">Esp. Vida: 79 anos</text>
              <text x="220" y="108" textAnchor="middle" fill="#fde8d8" fontSize="10">Pop: 330 M</text>
              {/* linha de ligação tooltip */}
              <line x1="300" y1="70" x2="285" y2="75" stroke={color} strokeWidth="1.5" strokeDasharray="3,2" />
              {/* legenda */}
              <circle cx="62" cy="240" r="5" fill="#4a9eed" />
              <text x="72" y="244" fill="#888" fontSize="10">Europa/América Norte</text>
              <circle cx="190" cy="240" r="5" fill="#0284c7" />
              <text x="200" y="244" fill="#888" fontSize="10">América Sul</text>
              <circle cx="290" cy="240" r="5" fill="#7dd3fc" />
              <text x="300" y="244" fill="#888" fontSize="10">Ásia</text>
            </svg>
          </div>
          <div style={S.note}>
            O tooltip é activado automaticamente ao passar o rato sobre qualquer ponto. O conteúdo é controlado pelos parâmetros <code>hover_name</code> e <code>hover_data</code> — sem configuração adicional.
          </div>
        </div>

        <hr style={S.divider} />

        {/* SECTION 3 */}
        <div style={S.section}>
          <h2 style={S.h2}>3. Bubble Chart e Scatter 3D</h2>
          <p style={S.p}>
            O <strong>bubble chart</strong> é uma extensão do scatter em que uma terceira variável numérica é codificada no tamanho de cada ponto (bolha). Esta técnica permite visualizar simultaneamente quatro dimensões: x, y, tamanho e cor (tipicamente uma variável categórica como continente ou grupo). É particularmente eficaz para dados socioeconómicos e demográficos.
          </p>
          <p style={S.p}>
            No Plotly Express basta passar a coluna ao parâmetro <code>size</code>. O parâmetro <code>size_max</code> controla o raio máximo das bolhas para evitar sobreposição excessiva. O parâmetro <code>log_x=True</code> é frequentemente útil quando o PIB ou outras variáveis económicas têm distribuição muito assimétrica.
          </p>

          {/* SVG: Bubble chart com 8 países */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>Bubble Chart — PIB vs Esperança de Vida (tamanho = população)</p>
            <svg viewBox="0 0 480 300" style={{ width: '100%', maxWidth: 480, display: 'block', margin: '0 auto' }}>
              <rect x="0" y="0" width="480" height="300" rx="10" fill="var(--bg-primary, #f9f9fd)" />
              {/* eixos */}
              <line x1="60" y1="20" x2="60" y2="240" stroke="#ddd" strokeWidth="1.5" />
              <line x1="60" y1="240" x2="450" y2="240" stroke="#ddd" strokeWidth="1.5" />
              {/* grid lines */}
              {[60,120,180,240].map(y => (
                <line key={y} x1="60" y1={y} x2="450" y2={y} stroke="#eee" strokeWidth="1" strokeDasharray="4,3" />
              ))}
              {/* labels eixo y */}
              <text x="52" y="244" textAnchor="end" fill="#bbb" fontSize="9">50</text>
              <text x="52" y="184" textAnchor="end" fill="#bbb" fontSize="9">65</text>
              <text x="52" y="124" textAnchor="end" fill="#bbb" fontSize="9">75</text>
              <text x="52" y="64" textAnchor="end" fill="#bbb" fontSize="9">85</text>
              {/* labels eixo x */}
              <text x="80" y="256" textAnchor="middle" fill="#bbb" fontSize="9">5k</text>
              <text x="160" y="256" textAnchor="middle" fill="#bbb" fontSize="9">12k</text>
              <text x="250" y="256" textAnchor="middle" fill="#bbb" fontSize="9">22k</text>
              <text x="340" y="256" textAnchor="middle" fill="#bbb" fontSize="9">55k</text>
              <text x="420" y="256" textAnchor="middle" fill="#bbb" fontSize="9">65k</text>
              {/* título eixos */}
              <text x="255" y="270" textAnchor="middle" fill="#aaa" fontSize="10">PIB per capita (USD)</text>
              <text x="16" y="130" textAnchor="middle" fill="#aaa" fontSize="10" transform="rotate(-90,16,130)">Esp. Vida</text>

              {/* países: x mapeado 60-450, y mapeado 240 (50) a 20 (85) */}
              {/* Portugal: gdp=22k→x=250, life=81→y=68, pop=10M→r=12, azul */}
              <circle cx="250" cy="68" r="12" fill="#4a9eed" opacity="0.82" />
              <text x="250" y="52" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">PT</text>

              {/* Brasil: gdp=15k→x=190, life=75→y=120, pop=215M→r=28, América Sul */}
              <circle cx="190" cy="120" r="28" fill="#0284c7" opacity="0.75" />
              <text x="190" y="116" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">BR</text>

              {/* EUA: gdp=65k→x=420, life=79→y=88, pop=330M→r=34, Europa/Am. Norte */}
              <circle cx="420" cy="88" r="34" fill="#4a9eed" opacity="0.72" />
              <text x="420" y="84" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">EUA</text>

              {/* China: gdp=12k→x=160, life=77→y=104, pop=1400M→r=52, Ásia */}
              <circle cx="160" cy="104" r="52" fill="#7dd3fc" opacity="0.55" />
              <text x="160" y="100" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">CN</text>

              {/* Nigéria: gdp=5k→x=80, life=55→y=202, pop=220M→r=29, África */}
              <circle cx="80" cy="202" r="29" fill="#1e40af" opacity="0.75" />
              <text x="80" y="198" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">NG</text>

              {/* Suécia: gdp=55k→x=340, life=83→y=56, pop=10M→r=12, Europa/Am. Norte */}
              <circle cx="340" cy="56" r="12" fill="#4a9eed" opacity="0.82" />
              <text x="340" y="40" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">SE</text>

              {/* India: gdp=8k→x=110, life=70→y=152, pop=1400M→r=52, Ásia */}
              <circle cx="110" cy="152" r="52" fill="#7dd3fc" opacity="0.45" />
              <text x="110" y="148" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">IN</text>

              {/* Argentina: gdp=11k→x=148, life=76→y=112, pop=45M→r=16, América Sul */}
              <circle cx="148" cy="112" r="16" fill="#0284c7" opacity="0.82" />
              <text x="148" y="96" textAnchor="middle" fill="#0284c7" fontSize="9" fontWeight="700">AR</text>

              {/* legenda */}
              <circle cx="70" cy="278" r="5" fill="#4a9eed" />
              <text x="80" y="282" fill="#888" fontSize="9">Europa/Am. Norte</text>
              <circle cx="170" cy="278" r="5" fill="#0284c7" />
              <text x="180" y="282" fill="#888" fontSize="9">América Sul</text>
              <circle cx="265" cy="278" r="5" fill="#7dd3fc" />
              <text x="275" y="282" fill="#888" fontSize="9">Ásia</text>
              <circle cx="345" cy="278" r="5" fill="#1e40af" />
              <text x="355" y="282" fill="#888" fontSize="9">África</text>
            </svg>
          </div>


          <h3 style={S.h3}>Scatter 3D</h3>
          <p style={S.p}>
            Para três variáveis numéricas contínuas, o <strong>px.scatter_3d</strong> permite explorar relações tridimensionais. O gráfico resultante é rotacionável com o rato. Útil para clustering visual e análise de componentes principais (PCA). O parâmetro <code>color</code> adiciona uma quarta dimensão.
          </p>
        </div>

        <hr style={S.divider} />

        {/* SECTION 4 */}
        <div style={S.section}>
          <h2 style={S.h2}>4. Treemap e Sunburst</h2>
          <p style={S.p}>
            O <strong>treemap</strong> é uma das formas mais eficazes de visualizar dados hierárquicos com valores proporcionais. Cada categoria é representada por um rectângulo cuja área é proporcional ao seu valor. As subcategorias são rectângulos aninhados dentro da categoria pai. O olho humano é muito bom a comparar áreas relativas quando dispostas lado a lado, tornando o treemap ideal para distribuições orçamentais, market share e estruturas organizacionais.
          </p>
          <p style={S.p}>
            O <strong>sunburst</strong> aplica o mesmo princípio mas em coordenadas polares: cada nível da hierarquia é um anel concêntrico, com os filhos a expandirem o arco do pai. É mais legível para hierarquias profundas e permite navegação por clique (drill-down) no Plotly.
          </p>

          {/* SVG: Treemap */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>Treemap — Despesas de Empresa</p>
            <svg viewBox="0 0 480 280" style={{ width: '100%', maxWidth: 480, display: 'block', margin: '0 auto' }}>
              <rect x="0" y="0" width="480" height="280" rx="10" fill="var(--bg-primary, #f9f9fd)" />

              {/* Pessoal 60% → largura ~288 */}
              <rect x="8" y="30" width="288" height="238" rx="6" fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth="1.5" />
              <text x="152" y="50" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Pessoal — 60%</text>

              {/* Salários 45% dentro de Pessoal → 45/60 = 75% de altura */}
              <rect x="12" y="56" width="280" height="130" rx="4" fill={`rgba(74,158,237,0.10)`} />
              <text x="152" y="120" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">Salários</text>
              <text x="152" y="136" textAnchor="middle" fill="#fde8d8" fontSize="11">45%</text>

              {/* Seguros 15% */}
              <rect x="12" y="192" width="280" height="72" rx="4" fill={`rgba(74,158,237,0.10)`} />
              <text x="152" y="231" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">Seguros — 15%</text>

              {/* Operações 25% → ~120px largura */}
              <rect x="304" y="30" width="170" height="148" rx="6" fill="rgba(74,158,237,0.15)" stroke="#4a9eed" strokeWidth="1.5" />
              <text x="389" y="50" textAnchor="middle" fill="#0369a1" fontSize="12" fontWeight="700">Operações — 25%</text>

              {/* Infra 15% */}
              <rect x="308" y="56" width="162" height="66" rx="4" fill="rgba(74,158,237,0.38)" />
              <text x="389" y="93" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">Infra — 15%</text>

              {/* Marketing 10% */}
              <rect x="308" y="128" width="162" height="46" rx="4" fill="rgba(74,158,237,0.55)" />
              <text x="389" y="155" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">Marketing — 10%</text>

              {/* Outros 15% */}
              <rect x="304" y="184" width="170" height="84" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
              <text x="389" y="205" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">Outros</text>
              <text x="389" y="222" textAnchor="middle" fill="#fff" fontSize="11">15%</text>

              {/* título topo */}
              <text x="240" y="18" textAnchor="middle" fill="#aaa" fontSize="10">Estrutura de Despesas — Empresa XYZ</text>
            </svg>
          </div>


          <div style={S.note}>
            O parâmetro <code>path</code> aceita uma lista de colunas que definem a hierarquia do exterior para o interior (treemap/sunburst). O Plotly calcula automaticamente os valores agregados para os nós pai.
          </div>
        </div>

        <hr style={S.divider} />

        {/* SECTION 5 */}
        <div style={S.section}>
          <h2 style={S.h2}>5. Mapas com Plotly — Choropleth e Scatter Geo</h2>
          <p style={S.p}>
            O Plotly suporta dois paradigmas principais de visualização geográfica. O <strong>choropleth</strong> colore regiões (países, estados, concelhos) com base num valor numérico — ideal para mostrar densidade, taxas ou índices por região. O <strong>scatter mapbox</strong> (ou scatter geo) coloca pontos georreferenciados sobre um mapa, útil para localização de eventos, lojas, sensores ou cidades.
          </p>
          <p style={S.p}>
            Para choropléticos, cada país é identificado pelo seu código ISO 3166-1 alpha-3 (ex: PRT, BRA, USA). O Plotly mapeia automaticamente esses códigos para a geometria correspondente. Não é necessário importar shapefiles.
          </p>

          {/* SVG: Mapa Europa simplificado */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>Choropleth Europa — Índice de Inovação (fictício)</p>
            <svg viewBox="0 0 420 300" style={{ width: '100%', maxWidth: 420, display: 'block', margin: '0 auto' }}>
              <rect x="0" y="0" width="420" height="300" rx="10" fill="var(--bg-secondary)" />
              {/* países: intensidade diferente por país — encode do valor */}
              {[
                { id:'FI', x:278, y:44,  w:38, h:60, v:0.92 },
                { id:'SE', x:232, y:50,  w:40, h:70, v:0.88 },
                { id:'NO', x:196, y:44,  w:32, h:48, v:0.85 },
                { id:'DK', x:196, y:96,  w:32, h:20, v:0.80 },
                { id:'NL', x:176, y:96,  w:32, h:20, v:0.78 },
                { id:'DE', x:176, y:120, w:52, h:60, v:0.75 },
                { id:'UK', x:116, y:96,  w:42, h:46, v:0.70 },
                { id:'PL', x:232, y:124, w:46, h:46, v:0.55 },
                { id:'FR', x:116, y:148, w:56, h:56, v:0.60 },
                { id:'IT', x:176, y:184, w:46, h:56, v:0.50 },
                { id:'ES', x:62,  y:174, w:50, h:50, v:0.45 },
                { id:'GR', x:232, y:214, w:40, h:38, v:0.38 },
                { id:'PT', x:30,  y:180, w:28, h:44, v:0.40 },
              ].map(({ id, x, y, w, h, v }) => {
                const fill = `rgba(74,158,237,${(0.12 + v * 0.88).toFixed(2)})`;
                const textFill = v > 0.5 ? '#fff' : '#e2e8f0';
                return (
                  <g key={id}>
                    <rect x={x} y={y} width={w} height={h} rx="3" fill={fill} stroke="var(--bg-secondary)" strokeWidth="1.5" />
                    <text x={x + w/2} y={y + h/2 + 3} textAnchor="middle" fill={textFill} fontSize={w < 34 ? 7 : 8} fontWeight="700">{id}</text>
                  </g>
                );
              })}
              {/* Legenda gradiente */}
              <defs>
                <linearGradient id="legendGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(74,158,237,0.12)" />
                  <stop offset="100%" stopColor="rgba(74,158,237,1)" />
                </linearGradient>
              </defs>
              <text x="360" y="152" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Inovação</text>
              <rect x="320" y="158" width="80" height="10" rx="3" fill="url(#legendGrad)" />
              <text x="320" y="180" fill="#64748b" fontSize="8">Baixo</text>
              <text x="400" y="180" textAnchor="end" fill="#64748b" fontSize="8">Alto</text>
              <text x="210" y="292" textAnchor="middle" fill="#475569" fontSize="9">Dados fictícios para fins ilustrativos</text>
            </svg>
          </div>


          <div style={S.note}>
            Para mapas mais detalhados com tiles (fundo de mapa real), use <code>px.scatter_mapbox</code> com um token Mapbox, ou <code>px.choropleth_mapbox</code> com um GeoJSON personalizado. O Plotly Express suporta nativamente geometrias de países, estados dos EUA e concelhos de vários países.
          </div>
        </div>

        <hr style={S.divider} />

        {/* SECTION 6 */}
        <div style={S.section}>
          <h2 style={S.h2}>6. Animações e Sliders</h2>
          <p style={S.p}>
            Uma das funcionalidades mais impressionantes do Plotly Express é a criação de animações temporais com um único parâmetro: <code>animation_frame</code>. Ao passar o nome de uma coluna (tipicamente o ano ou outra dimensão temporal), o Plotly gera automaticamente um slider e um botão de play. Cada valor único da coluna torna-se um frame da animação.
          </p>
          <p style={S.p}>
            Para controlo mais fino, a API de baixo nível (<code>go.Figure</code>) permite definir frames individuais, botões de updatemenus (dropdown animado), e sliders com steps personalizados. O parâmetro <code>transition</code> controla a duração e o easing da transição entre frames.
          </p>

          {/* SVG: mockup com slider temporal */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>Mockup — Gráfico com Slider Temporal</p>
            <svg viewBox="0 0 520 280" style={{ width: '100%', maxWidth: 520, display: 'block', margin: '0 auto' }}>
              <rect x="0" y="0" width="520" height="280" rx="10" fill="var(--bg-primary, #f9f9fd)" />
              {/* área do gráfico */}
              <rect x="40" y="20" width="440" height="180" rx="6" fill="var(--bg-secondary, #f0effe)" stroke="#ddd" strokeWidth="1" />
              {/* eixos */}
              <line x1="60" y1="30" x2="60" y2="185" stroke="#ccc" strokeWidth="1" />
              <line x1="60" y1="185" x2="465" y2="185" stroke="#ccc" strokeWidth="1" />
              {/* linha de dados */}
              <polyline points="80,160 130,140 180,120 230,100 280,88 330,76 380,65 430,58" stroke={color} strokeWidth="2.5" fill="none" />
              <polyline points="80,170 130,165 180,155 230,148 280,138 330,125 380,112 430,100" stroke="#4a9eed" strokeWidth="2.5" fill="none" strokeDasharray="5,3" />
              {/* pontos */}
              {[[80,160],[130,140],[180,120],[230,100],[280,88],[330,76],[380,65],[430,58]].map(([cx,cy]) => (
                <circle key={cx} cx={cx} cy={cy} r="3.5" fill={color} />
              ))}
              {/* legenda interna */}
              <line x1="310" y1="40" x2="330" y2="40" stroke={color} strokeWidth="2.5" />
              <text x="335" y="44" fill="#fff" fontSize="10">Série A</text>
              <line x1="310" y1="55" x2="330" y2="55" stroke="#4a9eed" strokeWidth="2.5" strokeDasharray="5,3" />
              <text x="335" y="59" fill="#fff" fontSize="10">Série B</text>
              {/* label ano activo */}
              <rect x="195" y="25" width="50" height="22" rx="4" fill={color} />
              <text x="220" y="40" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">2019</text>

              {/* controlo: botão play + slider */}
              <rect x="40" y="214" width="32" height="28" rx="6" fill={color} />
              <polygon points="52,222 52,234 62,228" fill="#fff" />
              {/* barra slider */}
              <rect x="84" y="224" width="396" height="6" rx="3" fill="#e2e8f0" />
              <rect x="84" y="224" width="200" height="6" rx="3" fill={`rgba(74,158,237,0.10)`} />
              {/* handle */}
              <circle cx="284" cy="227" r="9" fill={color} />
              {/* anos */}
              {['2015','2016','2017','2018','2019','2020','2021','2022','2023'].map((yr, i) => (
                <text key={yr} x={84 + i * 49.5} y="248" textAnchor="middle" fill={yr === '2019' ? color : '#aaa'} fontSize="9" fontWeight={yr === '2019' ? 700 : 400}>{yr}</text>
              ))}
            </svg>
          </div>

        </div>

        <hr style={S.divider} />

        {/* SECTION 7 */}
        <div style={S.section}>
          <h2 style={S.h2}>7. Dash — Dashboards Interactivos</h2>
          <p style={S.p}>
            <strong>Dash</strong> é o framework open-source da Plotly para construir aplicações web de análise de dados em Python puro. Internamente combina Flask (servidor HTTP), Plotly (visualizações) e React (componentes de interface). O programador nunca escreve JavaScript — tudo é definido em Python.
          </p>
          <p style={S.p}>
            A arquitectura assenta em dois pilares: o <strong>Layout</strong> define a estrutura da página usando componentes HTML (<code>html.Div</code>, <code>html.H1</code>) e componentes Dash Core (<code>dcc.Dropdown</code>, <code>dcc.Graph</code>, <code>dcc.Slider</code>). Os <strong>Callbacks</strong> são funções Python decoradas com <code>@app.callback</code> que ligam propriedades de componentes: quando um Input muda (ex: valor do dropdown), a função é invocada e o seu retorno actualiza um Output (ex: a figura do gráfico).
          </p>

          {/* SVG: diagrama arquitectura Dash */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>Arquitectura Dash — Fluxo de Reactitividade</p>
            <svg viewBox="0 0 680 180" style={{ width: '100%', display: 'block', margin: '0 auto' }}>
              {/* Browser */}
              <rect x="10" y="60" width="110" height="55" rx="8" fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth="1.5" />
              <text x="65" y="83" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Browser</text>
              <text x="65" y="100" textAnchor="middle" fill="#888" fontSize="9">React UI</text>
              {/* seta → */}
              <line x1="122" y1="88" x2="157" y2="88" stroke={color} strokeWidth="2" markerEnd="url(#a2)" />
              <text x="140" y="81" textAnchor="middle" fill="#999" fontSize="8">HTTP POST</text>
              {/* Callback */}
              <rect x="160" y="48" width="130" height="75" rx="8" fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth="1.5" />
              <text x="225" y="75" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">@callback</text>
              <text x="225" y="93" textAnchor="middle" fill="#888" fontSize="9">Input(s)</text>
              <text x="225" y="108" textAnchor="middle" fill="#888" fontSize="9">Output(s)</text>
              {/* seta → */}
              <line x1="292" y1="88" x2="327" y2="88" stroke={color} strokeWidth="2" markerEnd="url(#a2)" />
              <text x="310" y="81" textAnchor="middle" fill="#999" fontSize="8">invoca</text>
              {/* Python fn */}
              <rect x="330" y="55" width="120" height="65" rx="8" fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth="1.5" />
              <text x="390" y="79" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Python</text>
              <text x="390" y="96" textAnchor="middle" fill="#888" fontSize="9">função</text>
              <text x="390" y="111" textAnchor="middle" fill="#888" fontSize="9">retorna fig</text>
              {/* seta → */}
              <line x1="452" y1="88" x2="487" y2="88" stroke={color} strokeWidth="2" markerEnd="url(#a2)" />
              <text x="470" y="81" textAnchor="middle" fill="#999" fontSize="8">JSON</text>
              {/* Plotly */}
              <rect x="490" y="60" width="110" height="55" rx="8" fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth="1.5" />
              <text x="545" y="83" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Plotly</text>
              <text x="545" y="100" textAnchor="middle" fill="#888" fontSize="9">figura</text>
              {/* seta de volta */}
              <path d="M545 117 L545 155 L65 155 L65 117" stroke="#64748b" strokeWidth="1.5" fill="none" markerEnd="url(#a3)" strokeDasharray="5,3" />
              <text x="305" y="170" textAnchor="middle" fill="#64748b" fontSize="8">actualiza componente no browser</text>
              <defs>
                <marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L8,3 L0,6 Z" fill={color} />
                </marker>
                <marker id="a3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L8,3 L0,6 Z" fill="#64748b" />
                </marker>
              </defs>
            </svg>
          </div>

          <h3 style={S.h3}>App Mínima com Callback</h3>

          <div style={S.note}>
            Em produção, o <code>app.run(debug=True)</code> deve ser substituído por um servidor WSGI como Gunicorn: <code>gunicorn app:server</code>. O objecto <code>server = app.server</code> expõe a instância Flask subjacente.
          </div>
        </div>

        <hr style={S.divider} />

        {/* SECTION 8 */}
        <div style={S.section}>
          <h2 style={S.h2}>8. Widgets e Ipywidgets</h2>
          <p style={S.p}>
            Para contextos de notebook (Jupyter Lab, Jupyter Notebook, VS Code notebooks), os <strong>ipywidgets</strong> oferecem uma alternativa mais leve ao Dash para criar interactividade. O decorador <code>@interact</code> gera automaticamente controlos (sliders, dropdowns, checkboxes) a partir dos parâmetros da função anotada — sem nenhuma configuração adicional.
          </p>
          <p style={S.p}>
            O <strong>plotly.FigureWidget</strong> é uma versão do <code>go.Figure</code> optimizada para notebooks: em vez de gerar um novo gráfico a cada interacção, actualiza o gráfico existente in-place. Isto resulta em transições mais suaves e sem cintilação, sendo ideal para exploração interactiva de dados.
          </p>


          <h3 style={S.h3}>Comparação das Abordagens de Interactividade</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Ferramenta</th>
                  <th style={S.th}>Contexto ideal</th>
                  <th style={S.th}>Complexidade</th>
                  <th style={S.th}>Deploy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Plotly Express (px)', 'EDA rápida, notebooks, relatórios', 'Baixa — 1 linha', 'HTML estático / notebook'],
                  ['graph_objects (go)', 'Customização fina, subplots complexos', 'Média — API detalhada', 'HTML / notebook'],
                  ['Dash (@callback)', 'Dashboards web para equipas, produção', 'Alta — arquitectura cliente-servidor', 'Servidor (Flask/Gunicorn)'],
                  ['ipywidgets + FigureWidget', 'Exploração interactiva em notebook', 'Baixa-Média', 'Apenas em notebook (Jupyter)'],
                ].map(([tool, ctx, cmpl, dep]) => (
                  <tr key={tool}>
                    <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700, color }}>{tool}</td>
                    <td style={S.td}>{ctx}</td>
                    <td style={S.td}>{cmpl}</td>
                    <td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{dep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.note}>
            A escolha entre Dash e ipywidgets depende do destinatário final. Se o dashboard vai ser partilhado com não-programadores através de um URL, use Dash. Se é para uso interno de análise num notebook, ipywidgets é mais simples e não requer servidor.
          </div>
        </div>
</div>
    </div>
  );
}
