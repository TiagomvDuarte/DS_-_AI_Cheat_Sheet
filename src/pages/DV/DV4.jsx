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

export default function DV4() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/dv" style={S.back}><ArrowLeft size={16} /> Visualização de Dados</Link>

        <div style={S.tag}>MÓDULO 04</div>
        <h1 style={S.h1}>Matplotlib &amp; Seaborn</h1>

        {/* ── Secção 1 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>1. Arquitectura Matplotlib — Figure, Axes, Artist</h2>
          <p style={S.p}>
            O Matplotlib organiza tudo numa hierarquia de três níveis: a <strong>Figure</strong> é o contentor de topo
            — a "janela" ou o ficheiro de saída. Dentro da Figure existem um ou mais <strong>Axes</strong> (subplots),
            que são os gráficos propriamente ditos com os seus eixos X e Y. Dentro de cada Axes residem os
            <strong> Artists</strong>: Lines2D, Rectangle, Text, Legend, e todos os outros elementos visuais.
          </p>
          <p style={S.p}>
            Existem duas APIs para interagir com o Matplotlib. A <strong>API pyplot</strong> (plt.plot, plt.xlabel)
            mantém um estado global implícito — conveniente para scripts rápidos mas propensa a erros em notebooks
            com múltiplos gráficos. A <strong>API orientada a objectos (OO)</strong> opera directamente sobre
            instâncias de Figure e Axes, sendo mais explícita, mais testável e a escolha recomendada para qualquer
            código de produção.
          </p>

          {/* SVG hierarquia */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              Hierarquia de objectos Matplotlib
            </p>
            <svg viewBox="0 0 400 260" style={{ width: '100%', maxWidth: 400 }}>
              {/* Figure */}
              <rect x="10" y="10" width="380" height="240" rx="10" fill="none" stroke={color} strokeWidth="2" />
              <text x="20" y="30" fontSize="13" fontWeight="700" fill={color}>Figure</text>
              {/* Axes */}
              <rect x="30" y="40" width="340" height="195" rx="8" fill="none" stroke="#4a9eed" strokeWidth="1.5" />
              <text x="40" y="58" fontSize="12" fontWeight="700" fill="#4a9eed">Axes (subplot)</text>
              {/* Title */}
              <rect x="50" y="65" width="100" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke="rgba(74,158,237,0.10)" strokeWidth="1" />
              <text x="100" y="84" fontSize="10" textAnchor="middle" fill="var(--text-primary)">Title</text>
              {/* XLabel */}
              <rect x="165" y="65" width="100" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke="rgba(74,158,237,0.10)" strokeWidth="1" />
              <text x="215" y="84" fontSize="10" textAnchor="middle" fill="var(--text-primary)">XLabel / YLabel</text>
              {/* Line */}
              <rect x="50" y="115" width="100" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke="rgba(74,158,237,0.10)" strokeWidth="1" />
              <text x="100" y="134" fontSize="10" textAnchor="middle" fill="var(--text-primary)">Line2D</text>
              {/* Patch */}
              <rect x="165" y="115" width="100" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke="rgba(74,158,237,0.10)" strokeWidth="1" />
              <text x="215" y="134" fontSize="10" textAnchor="middle" fill="var(--text-primary)">Patch (rect/circle)</text>
              {/* Legend */}
              <rect x="280" y="115" width="75" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke="rgba(74,158,237,0.10)" strokeWidth="1" />
              <text x="317" y="134" fontSize="10" textAnchor="middle" fill="var(--text-primary)">Legend</text>
              {/* Artist label */}
              <text x="100" y="175" fontSize="10" fill="var(--text-secondary)" textAnchor="middle">Artists</text>
              <line x1="50" y1="178" x2="355" y2="178" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
              <text x="215" y="210" fontSize="10" fill="var(--text-secondary)" textAnchor="middle">Ticks · Spines · Text · Annotations</text>
            </svg>
          </div>

          <h3 style={S.h3}>Exemplo mínimo com a API OO</h3>

          <div style={S.note}>
            Usar sempre <code>fig, ax = plt.subplots()</code> como ponto de partida. A variável <code>ax</code> dá
            acesso directo ao Axes e evita a confusão da API pyplot global.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 2 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>2. Subplots e Layouts</h2>
          <p style={S.p}>
            A função <code>plt.subplots(nrows, ncols)</code> cria uma grelha de Axes e devolve a Figure e um array
            de Axes. Para layouts mais complexos com painéis de tamanhos diferentes existe o <code>GridSpec</code>,
            e o método <code>plt.subplot_mosaic</code> (introduzido no Matplotlib 3.3) permite descrever layouts
            com letras ASCII — muito mais legível.
          </p>
          <p style={S.p}>
            O parâmetro <code>constrained_layout=True</code> (ou <code>tight_layout()</code>) ajusta automaticamente
            espaçamentos para que títulos e labels não se sobreponham. É boa prática activá-lo sempre.
          </p>

          {/* SVG mockup 2x2 */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              Layout 2×2 de subplots
            </p>
            <svg viewBox="0 0 420 300" style={{ width: '100%', maxWidth: 420 }}>
              {[
                { x: 20, y: 20, label: 'Vendas', linePoints: '30,90 60,70 90,80 110,55 140,60 170,45' },
                { x: 220, y: 20, label: 'Lucro', linePoints: '230,85 260,75 290,60 320,65 350,50 380,40' },
                { x: 20, y: 160, label: 'Clientes', linePoints: '30,230 60,220 90,235 110,210 140,200 170,215' },
                { x: 220, y: 160, label: 'CAC', linePoints: '230,240 260,235 290,220 320,215 350,230 380,205' },
              ].map(({ x, y, label, linePoints }) => (
                <g key={label}>
                  <rect x={x} y={y} width="185" height="125" rx="6" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" />
                  <text x={x + 92} y={y + 18} fontSize="11" fontWeight="700" textAnchor="middle" fill="var(--text-primary)">{label}</text>
                  <line x1={x + 8} y1={y + 115} x2={x + 177} y2={y + 115} stroke="var(--text-secondary)" strokeWidth="1" />
                  <line x1={x + 8} y1={y + 25} x2={x + 8} y2={y + 115} stroke="var(--text-secondary)" strokeWidth="1" />
                  <polyline points={linePoints} fill="none" stroke={color} strokeWidth="2" />
                </g>
              ))}
            </svg>
          </div>
          <div style={S.note}>
            <code>axes.flat</code> itera sobre todos os Axes em ordem de leitura (linha a linha) —
            útil para aplicar o mesmo formatação a todos os subplots num ciclo.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 3 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>3. Personalização — Estilos, Temas e rcParams</h2>
          <p style={S.p}>
            O Matplotlib inclui uma biblioteca de estilos predefinidos acessíveis via <code>plt.style.use()</code>.
            O estilo <code>'ggplot'</code> imita o visual do pacote ggplot2 do R (fundo cinzento, grid branco).
            O <code>'dark_background'</code> é útil para apresentações com fundo escuro. A família
            <code>'seaborn-v0_8-*'</code> oferece vários sub-estilos mais modernos.
          </p>
          <p style={S.p}>
            Para personalizações mais finas, o dicionário <code>plt.rcParams</code> (runtime configuration parameters)
            controla todos os defaults globais: tamanho de fonte, cores, espessura de linhas, formato de exportação,
            entre muitos outros. As alterações ao <code>rcParams</code> persistem para todos os gráficos
            subsequentes na sessão.
          </p>

          {/* SVG 3 estilos */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              O mesmo gráfico em 3 estilos visuais
            </p>
            <svg viewBox="0 0 600 200" style={{ width: '100%', maxWidth: 600 }}>
              {/* Default */}
              <rect x="10" y="10" width="175" height="175" rx="6" fill="#f8f8f8" stroke="#ccc" strokeWidth="1" />
              <text x="97" y="28" fontSize="10" fontWeight="700" textAnchor="middle" fill="#555">Default</text>
              <rect x="28" y="130" width="22" height="40" fill="#1f77b4" />
              <rect x="58" y="110" width="22" height="60" fill="#ff7f0e" />
              <rect x="88" y="90" width="22" height="80" fill="#2ca02c" />
              <rect x="118" y="120" width="22" height="50" fill="#d62728" />
              <rect x="148" y="100" width="22" height="70" fill="#9467bd" />
              <line x1="28" y1="170" x2="172" y2="170" stroke="#888" strokeWidth="1" />
              {/* ggplot */}
              <rect x="212" y="10" width="175" height="175" rx="6" fill="#e5e5e5" stroke="#ccc" strokeWidth="1" />
              <text x="299" y="28" fontSize="10" fontWeight="700" textAnchor="middle" fill="#555">ggplot</text>
              <line x1="230" y1="50" x2="380" y2="50" stroke="white" strokeWidth="1" />
              <line x1="230" y1="80" x2="380" y2="80" stroke="white" strokeWidth="1" />
              <line x1="230" y1="110" x2="380" y2="110" stroke="white" strokeWidth="1" />
              <line x1="230" y1="140" x2="380" y2="140" stroke="white" strokeWidth="1" />
              <rect x="230" y="130" width="22" height="40" fill="#E41A1C" />
              <rect x="260" y="110" width="22" height="60" fill="#377EB8" />
              <rect x="290" y="90" width="22" height="80" fill="#4DAF4A" />
              <rect x="320" y="120" width="22" height="50" fill="#984EA3" />
              <rect x="350" y="100" width="22" height="70" fill="#FF7F00" />
              <line x1="230" y1="170" x2="375" y2="170" stroke="#888" strokeWidth="1" />
              {/* dark */}
              <rect x="414" y="10" width="175" height="175" rx="6" fill="#1a1a1a" stroke="#444" strokeWidth="1" />
              <text x="501" y="28" fontSize="10" fontWeight="700" textAnchor="middle" fill="#aaa">dark_background</text>
              <line x1="432" y1="50" x2="582" y2="50" stroke="#333" strokeWidth="1" />
              <line x1="432" y1="80" x2="582" y2="80" stroke="#333" strokeWidth="1" />
              <line x1="432" y1="110" x2="582" y2="110" stroke="#333" strokeWidth="1" />
              <line x1="432" y1="140" x2="582" y2="140" stroke="#333" strokeWidth="1" />
              <rect x="432" y="130" width="22" height="40" fill="#00BFFF" />
              <rect x="462" y="110" width="22" height="60" fill="#FF69B4" />
              <rect x="492" y="90" width="22" height="80" fill="#7CFC00" />
              <rect x="522" y="120" width="22" height="50" fill="#FFD700" />
              <rect x="552" y="100" width="22" height="70" fill="#FF6347" />
              <line x1="432" y1="170" x2="577" y2="170" stroke="#555" strokeWidth="1" />
            </svg>
          </div>

        </div>

        <hr style={S.divider} />

        {/* ── Secção 4 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>4. Gráficos Avançados com Matplotlib</h2>
          <p style={S.p}>
            Para além dos gráficos habituais (linhas, barras, scatter), o Matplotlib oferece tipos especializados
            que revelam padrões que seriam invisíveis em representações simples.
          </p>

          <h3 style={S.h3}>Violin plot</h3>
          <p style={S.p}>
            O violin plot combina a informação do box plot (mediana, quartis, outliers) com uma estimativa de
            densidade de kernel (KDE) que mostra a forma completa da distribuição. É particularmente útil para
            revelar distribuições bimodais que um box plot esconderia.
          </p>

          {/* SVG violin */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              Violin plot — 3 grupos com distribuições diferentes
            </p>
            <svg viewBox="0 0 400 280" style={{ width: '100%', maxWidth: 400 }}>
              {/* Eixos */}
              <line x1="50" y1="20" x2="50" y2="240" stroke="var(--text-secondary)" strokeWidth="1.5" />
              <line x1="50" y1="240" x2="380" y2="240" stroke="var(--text-secondary)" strokeWidth="1.5" />
              {/* Labels eixo Y */}
              {[0, 2, 4, 6, 8, 10].map((v, i) => (
                <g key={v}>
                  <text x="45" y={240 - i * 36} fontSize="9" textAnchor="end" fill="var(--text-secondary)">{v}</text>
                  <line x1="48" y1={240 - i * 36} x2="380" y2={240 - i * 36} stroke="var(--text-secondary)" strokeWidth="0.5" strokeDasharray="3,3" />
                </g>
              ))}

              {/* Violino A — distribuição estreita, centrada */}
              <path d="M90,240 C90,200 70,160 80,130 C85,115 95,100 100,90 C105,100 115,115 120,130 C130,160 110,200 110,240 Z"
                fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth="1.5" />
              <line x1="90" y1="155" x2="110" y2="155" stroke={color} strokeWidth="2" />
              <text x="100" y="258" fontSize="10" textAnchor="middle" fill="var(--text-secondary)">A</text>

              {/* Violino B — distribuição larga */}
              <path d="M190,240 C185,210 160,170 165,130 C170,105 180,85 200,75 C220,85 230,105 235,130 C240,170 215,210 210,240 Z"
                fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
              <line x1="175" y1="145" x2="225" y2="145" stroke="#4a9eed" strokeWidth="2" />
              <text x="200" y="258" fontSize="10" textAnchor="middle" fill="var(--text-secondary)">B</text>

              {/* Violino C — bimodal */}
              <path d="M290,240 C290,220 275,195 278,170 C281,150 290,142 300,140 C310,142 319,150 322,170 C325,195 310,220 310,240 Z"
                fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
              <path d="M282,140 C279,120 282,95 290,80 C298,68 305,65 300,65 C295,65 292,68 300,80 C308,95 311,120 308,140 Z"
                fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1" />
              <line x1="286" y1="168" x2="314" y2="168" stroke="#4a9eed" strokeWidth="2" />
              <text x="300" y="258" fontSize="10" textAnchor="middle" fill="var(--text-secondary)">C</text>

              <text x="215" y="272" fontSize="9" textAnchor="middle" fill="var(--text-secondary)">— mediana</text>
            </svg>
          </div>

          <h3 style={S.h3}>Stem, Step e Broken Barh</h3>
          <p style={S.p}>
            O <strong>stem plot</strong> representa valores discretos como "paus" verticais a partir de uma linha base
            — ideal para sinais discretos ou séries temporais esparsas. O <strong>step plot</strong> (degrau) é perfeito
            para representar funções constantes por partes, como tarifas ou estados de um sistema. O
            <strong> broken barh</strong> representa intervalos de tempo com interrupções, muito usado em diagramas
            de Gantt e análise de disponibilidade.
          </p>

    
          <div style={S.note}>
            O violin plot do Matplotlib aceita os parâmetros <code>showmedians=True</code>,
            <code>showmeans=True</code> e <code>showextrema=True</code> para controlar os elementos sobrepostos.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 5 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>5. Seaborn — Visualização Estatística</h2>
          <p style={S.p}>
            O Seaborn é uma biblioteca de visualização estatística construída sobre o Matplotlib. A diferença
            fundamental: o Seaborn aceita um DataFrame do pandas e nomes de colunas como strings, eliminando a
            necessidade de extrair arrays manualmente. Integra o conceito de <code>hue</code> para colorir por
            uma terceira variável categórica em praticamente todas as funções.
          </p>
          <p style={S.p}>
            As funções do Seaborn organizam-se em categorias: <strong>relational</strong> (scatterplot, lineplot),
            <strong> distribution</strong> (histplot, kdeplot, ecdfplot), <strong>categorical</strong> (boxplot,
            violinplot, barplot, stripplot), <strong>regression</strong> (lmplot, regplot),
            <strong> matrix</strong> (heatmap, clustermap) e <strong>grid</strong> (FacetGrid, PairGrid, pairplot).
          </p>

          {/* SVG pair plot */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              Pair plot simplificado — matriz 3×3 (scatter + histogramas na diagonal)
            </p>
            <svg viewBox="0 0 360 360" style={{ width: '100%', maxWidth: 360 }}>
              {/* Labels */}
              {['Peso', 'Altura', 'Idade'].map((label, i) => (
                <g key={label}>
                  <text x={60 + i * 100} y="15" fontSize="10" fontWeight="700" textAnchor="middle" fill="var(--text-secondary)">{label}</text>
                  <text x="18" y={65 + i * 100} fontSize="10" fontWeight="700" textAnchor="middle" fill="var(--text-secondary)" transform={`rotate(-90, 18, ${65 + i * 100})`}>{label}</text>
                </g>
              ))}
              {/* Células da matriz */}
              {[0, 1, 2].map(row =>
                [0, 1, 2].map(col => {
                  const x = 30 + col * 100;
                  const y = 25 + row * 100;
                  const isDiag = row === col;
                  // pontos dispersos
                  const pts = [[12,72],[25,55],[38,63],[50,45],[62,58],[72,40],[82,52],[90,35],[55,68],[30,80]];
                  return (
                    <g key={`${row}-${col}`}>
                      <rect x={x} y={y} width="88" height="88" rx="4" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />
                      {isDiag ? (
                        // Histograma simplificado na diagonal
                        [8, 22, 38, 56, 72].map((bx, bi) => (
                          <rect key={bi} x={x + bx} y={y + 88 - [30,55,75,50,35][bi]} width="12"
                            height={[30,55,75,50,35][bi]} fill={`rgba(74,158,237,0.10)`} />
                        ))
                      ) : (
                        // Scatter
                        pts.map(([px, py], pi) => (
                          <circle key={pi} cx={x + px * 0.88} cy={y + py * 0.88} r="2.5"
                            fill={row < col ? color : '#4a9eed'} opacity="0.7" />
                        ))
                      )}
                    </g>
                  );
                })
              )}
            </svg>
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 6 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>6. Seaborn — Distribuições</h2>
          <p style={S.p}>
            O Seaborn oferece três representações complementares da mesma distribuição. O
            <strong> histplot</strong> divide os dados em intervalos (bins) e conta frequências — fácil de
            interpretar mas sensível ao número de bins. O <strong>kdeplot</strong> estima a função de densidade
            de probabilidade com um kernel gaussiano, produzindo uma curva contínua e suave. O
            <strong> ecdfplot</strong> (Empirical CDF) representa a proporção acumulada de dados abaixo de cada
            valor — não tem parâmetros a ajustar e é especialmente útil para comparar distribuições.
          </p>

          {/* SVG 3 representações */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              Três representações da mesma distribuição
            </p>
            <svg viewBox="0 0 600 200" style={{ width: '100%', maxWidth: 600 }}>
              {/* Histograma */}
              <rect x="10" y="10" width="180" height="175" rx="5" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
              <text x="100" y="25" fontSize="10" fontWeight="700" textAnchor="middle" fill="var(--text-secondary)">histplot</text>
              {[2,5,10,18,25,22,12,5,2,1].map((h, i) => (
                <rect key={i} x={18 + i * 15} y={170 - h * 4} width="13" height={h * 4}
                  fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth="0.5" />
              ))}
              <line x1="16" y1="170" x2="174" y2="170" stroke="var(--text-secondary)" strokeWidth="1" />

              {/* KDE */}
              <rect x="210" y="10" width="180" height="175" rx="5" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
              <text x="300" y="25" fontSize="10" fontWeight="700" textAnchor="middle" fill="var(--text-secondary)">kdeplot</text>
              <path d="M218,170 C225,168 235,160 250,140 C265,118 275,90 290,72 C305,55 315,50 320,52 C330,55 340,75 350,100 C360,125 368,150 375,165 L380,170 Z"
                fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth="2" />
              <line x1="216" y1="170" x2="384" y2="170" stroke="var(--text-secondary)" strokeWidth="1" />

              {/* ECDF */}
              <rect x="410" y="10" width="180" height="175" rx="5" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
              <text x="500" y="25" fontSize="10" fontWeight="700" textAnchor="middle" fill="var(--text-secondary)">ecdfplot</text>
              <polyline points="418,168 435,165 445,160 458,150 470,135 480,115 492,92 505,70 518,52 530,38 545,30 560,26 575,25 582,25"
                fill="none" stroke={color} strokeWidth="2" />
              {/* linha guias */}
              <line x1="416" y1="97" x2="580" y2="97" stroke="var(--text-secondary)" strokeWidth="0.5" strokeDasharray="3,3" />
              <text x="418" y="95" fontSize="8" fill="var(--text-secondary)">50%</text>
              <line x1="416" y1="168" x2="580" y2="168" stroke="var(--text-secondary)" strokeWidth="1" />
            </svg>
          </div>


          <div style={S.note}>
            O <code>ecdfplot</code> é particularmente poderoso com <code>hue</code>: mostra imediatamente
            se uma distribuição está deslocada ou tem uma cauda diferente sem qualquer escolha de parâmetros.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 7 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>7. Seaborn — Gráficos Categóricos</h2>
          <p style={S.p}>
            Quando uma das variáveis é categórica, o Seaborn disponibiliza várias representações com diferentes
            níveis de detalhe. A escolha depende do tamanho da amostra e do que se pretende comunicar:
            resumo estatístico, distribuição completa, ou pontos individuais.
          </p>

          {/* SVG 4 mini gráficos */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              Os mesmos dados, quatro representações
            </p>
            <svg viewBox="0 0 560 200" style={{ width: '100%', maxWidth: 560 }}>
              {/* boxplot */}
              <rect x="5" y="5" width="125" height="185" rx="5" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
              <text x="67" y="20" fontSize="9" fontWeight="700" textAnchor="middle" fill="var(--text-secondary)">boxplot</text>
              {/* box A */}
              <line x1="40" y1="40" x2="40" y2="170" stroke={color} strokeWidth="1" strokeDasharray="2,2" />
              <rect x="25" y="80" width="30" height="55" fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth="1.5" />
              <line x1="25" y1="110" x2="55" y2="110" stroke={color} strokeWidth="2" />
              <line x1="40" y1="40" x2="55" y2="40" stroke={color} strokeWidth="1" />
              <line x1="40" y1="170" x2="55" y2="170" stroke={color} strokeWidth="1" />
              {/* box B */}
              <line x1="85" y1="50" x2="85" y2="160" stroke="#4a9eed" strokeWidth="1" strokeDasharray="2,2" />
              <rect x="70" y="90" width="30" height="45" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
              <line x1="70" y1="105" x2="100" y2="105" stroke="#4a9eed" strokeWidth="2" />

              {/* violinplot */}
              <rect x="143" y="5" width="125" height="185" rx="5" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
              <text x="205" y="20" fontSize="9" fontWeight="700" textAnchor="middle" fill="var(--text-secondary)">violinplot</text>
              <path d="M175,175 C172,155 165,130 168,105 C171,88 178,78 183,72 C188,78 195,88 198,105 C201,130 194,155 191,175 Z"
                fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth="1.5" />
              <line x1="172" y1="118" x2="194" y2="118" stroke={color} strokeWidth="1.5" />
              <path d="M220,175 C218,160 212,140 214,115 C216,98 222,85 228,80 C234,85 240,98 242,115 C244,140 238,160 236,175 Z"
                fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
              <line x1="216" y1="125" x2="240" y2="125" stroke="#4a9eed" strokeWidth="1.5" />

              {/* stripplot */}
              <rect x="281" y="5" width="125" height="185" rx="5" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
              <text x="343" y="20" fontSize="9" fontWeight="700" textAnchor="middle" fill="var(--text-secondary)">stripplot</text>
              {[45,55,62,70,80,90,100,115,130,145,160].map((y, i) => (
                <circle key={i} cx={320 + (i % 3) * 8} cy={y} r="3" fill={color} opacity="0.6" />
              ))}
              {[50,60,68,78,88,98,108,120,135,148].map((y, i) => (
                <circle key={i} cx={358 + (i % 3) * 8} cy={y} r="3" fill="#4a9eed" opacity="0.6" />
              ))}

              {/* swarmplot */}
              <rect x="419" y="5" width="130" height="185" rx="5" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
              <text x="484" y="20" fontSize="9" fontWeight="700" textAnchor="middle" fill="var(--text-secondary)">swarmplot</text>
              {[40,50,58,68,75,82,90,105,118,132,150].map((y, i) => {
                const offsets = [-8,-4,0,4,8,-6,2,-2,6,-4,0];
                return <circle key={i} cx={455 + offsets[i]} cy={y} r="3.5" fill={color} opacity="0.65" />;
              })}
              {[45,55,63,72,80,88,96,110,125,140].map((y, i) => {
                const offsets = [8,4,0,-4,8,-6,2,6,-2,4];
                return <circle key={i} cx={505 + offsets[i]} cy={y} r="3.5" fill="#4a9eed" opacity="0.65" />;
              })}
            </svg>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Gráfico</th>
                  <th style={S.th}>O que mostra</th>
                  <th style={S.th}>Vantagem</th>
                  <th style={S.th}>Limitação</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['sns.boxplot', 'Mediana, Q1, Q3, IQR, outliers', 'Comparação rápida de grupos', 'Esconde a forma da distribuição'],
                  ['sns.violinplot', 'Distribuição completa via KDE + quartis', 'Revela bimodalidade e forma', 'Difícil de ler com amostras pequenas (&lt;20)'],
                  ['sns.stripplot', 'Todos os pontos individuais (com jitter)', 'Transparência total nos dados', 'Sobreposição com amostras grandes'],
                  ['sns.swarmplot', 'Pontos sem sobreposição (bee swarm)', 'Mostra tamanho da amostra e distribuição', 'Lento com n > 500'],
                ].map(([g, o, v, l]) => (
                  <tr key={g}>
                    <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700, color }}>{g}</td>
                    <td style={S.td}>{o}</td>
                    <td style={S.td}>{v}</td>
                    <td style={S.td}>{l}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        
        </div>

        <hr style={S.divider} />

        {/* ── Secção 8 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>8. FacetGrid e Pequenos Múltiplos</h2>
          <p style={S.p}>
            Edward Tufte cunhou o conceito de <em>small multiples</em> (pequenos múltiplos): uma série de gráficos
            idênticos em escala e formato que diferem apenas numa variável. Esta técnica permite comparar padrões
            entre grupos com muito mais eficiência do que sobrepor todas as linhas num único gráfico.
          </p>
          <p style={S.p}>
            O <code>sns.FacetGrid</code> implementa este princípio directamente. Especifica-se o DataFrame e as
            variáveis que definem as colunas (<code>col</code>) e linhas (<code>row</code>) da grelha. De seguida,
            usa-se <code>g.map()</code> ou <code>g.map_dataframe()</code> para aplicar qualquer função de plot
            a cada célula. Os eixos são automaticamente partilhados para facilitar a comparação.
          </p>

          {/* SVG FacetGrid 2x3 */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              FacetGrid 2×3 — 6 painéis com títulos de grupo
            </p>
            <svg viewBox="0 0 500 320" style={{ width: '100%', maxWidth: 500 }}>
              {/* Labels colunas */}
              {['Norte', 'Centro', 'Sul'].map((label, i) => (
                <text key={label} x={85 + i * 140} y="18" fontSize="10" fontWeight="700" textAnchor="middle" fill={color}>{label}</text>
              ))}
              {/* Labels linhas */}
              {['2023', '2024'].map((label, i) => (
                <text key={label} x="8" y={80 + i * 135} fontSize="10" fontWeight="700" textAnchor="middle" fill={color}
                  transform={`rotate(-90, 8, ${80 + i * 135})`}>{label}</text>
              ))}
              {/* Painéis */}
              {[0, 1].map(row =>
                [0, 1, 2].map(col => {
                  const x = 22 + col * 157;
                  const y = 25 + row * 143;
                  const pts = [
                    [10,80],[22,65],[35,72],[48,55],[60,60],[72,45],[85,52],[98,38],[110,42],[120,30],
                  ];
                  const clrs = [color, '#4a9eed', '#4a9eed'];
                  return (
                    <g key={`${row}-${col}`}>
                      <rect x={x} y={y} width="150" height="128" rx="5" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />
                      <polyline
                        points={pts.map(([px, py]) => `${x + px * 1.15},${y + py}`).join(' ')}
                        fill="none" stroke={clrs[col]} strokeWidth="1.8" />
                      {pts.map(([px, py], pi) => (
                        <circle key={pi} cx={x + px * 1.15} cy={y + py} r="2" fill={clrs[col]} />
                      ))}
                    </g>
                  );
                })
              )}
            </svg>
          </div>

      

          <h3 style={S.h3}>Funções de alto nível: relplot e displot</h3>
          <p style={S.p}>
            As funções <code>sns.relplot</code> e <code>sns.displot</code> são atalhos que criam um
            FacetGrid internamente e aceitam directamente os parâmetros <code>col</code> e <code>row</code>,
            sem necessidade de instanciar o FacetGrid manualmente.
          </p>
          <div style={S.note}>
            <code>margin_titles=True</code> no FacetGrid coloca os títulos das linhas na margem direita
            em vez de dentro de cada painel — muito mais limpo quando há muitas células.
          </div>
        </div>
</div>
    </div>
  );
}
