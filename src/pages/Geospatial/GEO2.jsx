import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Geospatial';

const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  highlight: { background: `${color}12`, border: `1px solid ${color}30`, borderRadius: 8, padding: '0.9rem 1.1rem', marginTop: '0.8rem', fontSize: '0.93rem', color: 'var(--text-primary)', lineHeight: 1.7 },
  note: { background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 8, padding: '0.8rem 1rem', marginTop: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

function MoranSvg() {
  const pts = [
    { x: 80, y: 80, lag: 75, val: 0.8, label: 'HH', c: '#f97316' },
    { x: 180, y: 60, lag: 170, val: 0.7, label: 'HH', c: '#f97316' },
    { x: 300, y: 100, lag: 30, val: 0.2, label: 'LL', c: '#f97316' },
    { x: 400, y: 90, lag: 40, val: 0.15, label: 'LL', c: '#f97316' },
    { x: 140, y: 130, lag: 25, val: 0.1, label: 'LH', c: '#f97316' },
    { x: 350, y: 55, lag: 130, val: 0.85, label: 'HL', c: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 200" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="200" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Moran's I — Diagrama de Dispersão Espacial</text>
      {/* axes */}
      <line x1="50" y1="170" x2="480" y2="170" stroke="var(--card-border)" strokeWidth="1.5" />
      <line x1="50" y1="25" x2="50" y2="170" stroke="var(--card-border)" strokeWidth="1.5" />
      <text x="265" y="188" textAnchor="middle" fill="#fb923c" fontSize="9">Valor observado (z)</text>
      <text x="14" y="100" textAnchor="middle" fill="#fb923c" fontSize="9" transform="rotate(-90,14,100)">Spatial lag (Wz)</text>
      {/* regression line */}
      <line x1="60" y1="160" x2="470" y2="40" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.7" />
      <text x="420" y="38" fill="#f97316" fontSize="9">I = 0.62</text>
      {/* quadrant labels */}
      <text x="88" y="96" fill="#f97316" fontSize="8.5" opacity="0.5">HH</text>
      <text x="350" y="148" fill="#f97316" fontSize="8.5" opacity="0.5">LL</text>
      <text x="88" y="155" fill="#f97316" fontSize="8.5" opacity="0.5">LH</text>
      <text x="355" y="65" fill="#f59e0b" fontSize="8.5" opacity="0.5">HL</text>
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={50 + p.val * 420} cy={170 - (p.lag / 200) * 140} r="7" fill={p.c} opacity="0.8" />
          <text x={50 + p.val * 420 + 9} y={170 - (p.lag / 200) * 140 + 4} fill={p.c} fontSize="7.5">{p.label}</text>
        </g>
      ))}
      <line x1="265" y1="25" x2="265" y2="170" stroke="#fb923c" strokeWidth="0.8" strokeDasharray="3,2" />
      <line x1="50" y1="97" x2="480" y2="97" stroke="#fb923c" strokeWidth="0.8" strokeDasharray="3,2" />
      <text x="280" y="197" textAnchor="middle" fill="#fb923c" fontSize="8.5">HH/LL = clusters; HL/LH = outliers espaciais. I próximo de 1 = forte autocorrelação positiva.</text>
    </svg>
  );
}

function KrigingSvg() {
  return (
    <svg viewBox="0 0 560 175" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="175" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Kriging — Interpolação Geoestatística com Variograma</text>
      {/* Variogram plot */}
      <rect x="12" y="24" width="240" height="130" fill="rgba(249,115,22,0.06)" rx="6" />
      <text x="132" y="40" textAnchor="middle" fill="#f97316" fontSize="9.5" fontWeight="700">Variograma Experimental</text>
      <line x1="25" y1="140" x2="245" y2="140" stroke="var(--card-border)" strokeWidth="1" />
      <line x1="25" y1="50" x2="25" y2="140" stroke="var(--card-border)" strokeWidth="1" />
      <text x="135" y="155" textAnchor="middle" fill="#f97316" fontSize="8">Distância h</text>
      <text x="14" y="100" textAnchor="middle" fill="#f97316" fontSize="7.5" transform="rotate(-90,14,100)">γ(h)</text>
      {/* sill */}
      <line x1="25" y1="70" x2="245" y2="70" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4,2" />
      <text x="250" y="73" fill="#f59e0b" fontSize="7.5">Sill</text>
      {/* range */}
      <line x1="155" y1="68" x2="155" y2="142" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />
      <text x="157" y="155" fill="#f97316" fontSize="7.5">Range</text>
      {/* nugget */}
      <line x1="25" y1="105" x2="70" y2="105" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />
      <text x="28" y="150" fill="#f97316" fontSize="7.5">Nugget</text>
      {/* variogram curve */}
      <path d="M 25,107 Q 60,95 100,82 Q 130,74 155,70 Q 180,69 210,70 Q 230,70 245,70" fill="none" stroke="#f97316" strokeWidth="2" />
      {/* Kriging map */}
      <rect x="270" y="24" width="278" height="130" fill="rgba(249,115,22,0.06)" rx="6" />
      <text x="409" y="40" textAnchor="middle" fill="#f97316" fontSize="9.5" fontWeight="700">Superfície Interpolada (Ordinary Kriging)</text>
      {[0,1,2,3,4,5].map(r => [0,1,2,3,4,5,6,7].map(c => {
        const v = Math.exp(-((r - 2.5)**2 + (c - 3.5)**2) / 8);
        const b = Math.round(v * 180 + 20);
        return <rect key={`${r}-${c}`} x={278 + c * 33} y={48 + r * 17} width="31" height="15" fill={`rgb(${180 + Math.round(v*75)},${80 + Math.round(v*100)},${Math.round(v*22)})`} opacity="0.85" />;
      }))}
      <text x="409" y="162" textAnchor="middle" fill="#f97316" fontSize="8">Maior peso às amostras mais próximas, ponderado pelo variograma ajustado</text>
    </svg>
  );
}

function LisaSvg() {
  const cells = [
    [0.8,0.7,0.3,0.2],[0.85,0.75,0.4,0.15],[0.3,0.9,0.25,0.1],[0.2,0.35,0.05,0.08]
  ];
  const getColor = v => v > 0.6 ? '#f97316' : v > 0.4 ? '#f97316' : v > 0.2 ? '#f97316' : '#f97316';
  return (
    <svg viewBox="0 0 560 165" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="165" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">LISA — Local Indicators of Spatial Association</text>
      <rect x="12" y="24" width="260" height="120" fill="rgba(249,115,22,0.06)" rx="6" />
      <text x="142" y="40" textAnchor="middle" fill="#fb923c" fontSize="9.5" fontWeight="700">Mapa de Valores</text>
      {cells.map((row, r) => row.map((v, c) => (
        <rect key={`${r}-${c}`} x={20 + c * 60} y={48 + r * 24} width="56" height="20" fill={getColor(v)} opacity={0.5 + v * 0.5} rx="2" />
      )))}
      <rect x="290" y="24" width="260" height="120" fill="rgba(249,115,22,0.06)" rx="6" />
      <text x="420" y="40" textAnchor="middle" fill="#fb923c" fontSize="9.5" fontWeight="700">Mapa LISA (clusters)</text>
      {[['HH','HH','NS','NS'],['HH','HH','LH','NS'],['NS','HH','LL','LL'],['NS','NS','LL','LL']].map((row, r) => row.map((v, c) => {
        const fc = v === 'HH' ? '#f97316' : v === 'LL' ? '#f97316' : v === 'LH' ? '#f97316' : 'var(--card-border)';
        return (
          <g key={`${r}-${c}`}>
            <rect x={298 + c * 60} y={48 + r * 24} width="56" height="20" fill={fc} opacity={v === 'NS' ? 0.15 : 0.6} rx="2" />
            <text x={298 + c * 60 + 28} y={48 + r * 24 + 14} textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="700" opacity={v === 'NS' ? 0.4 : 1}>{v}</text>
          </g>
        );
      }))}
      {[['HH','#f97316'],['LL','#f97316'],['LH/HL','#f97316'],['NS','#fb923c']].map(([l,c],i) => (
        <g key={i}>
          <rect x={30 + i * 130} y="148" width="12" height="10" fill={c} rx="2" />
          <text x={46 + i * 130} y="157" fill="#fb923c" fontSize="8">{l}</text>
        </g>
      ))}
    </svg>
  );
}

function SpatialRegSvg() {
  const rows = [
    { model: 'OLS', assume: 'Independência espacial', diag: 'Moran residuals', bias: 'Sim (se lag)', c: '#fb923c' },
    { model: 'Spatial Lag (SAR)', assume: 'Dependência no Y', diag: 'LM-lag test', bias: 'Não', c: '#f97316' },
    { model: 'Spatial Error (SEM)', assume: 'Dependência no erro', diag: 'LM-error test', bias: 'Não', c: '#f97316' },
    { model: 'GWR', assume: 'Coeficientes variam no espaço', diag: 'Bandwidth CV', bias: 'Local', c: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 175" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="175" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Modelos de Regressão Espacial — Comparação</text>
      {['Modelo','Assunção','Diagnóstico','Viés sem?'].map((h, i) => {
        const xs = [12, 170, 340, 460];
        return <text key={i} x={xs[i]} y="30" fill="#f97316" fontSize="9" fontWeight="700">{h}</text>;
      })}
      <line x1="8" y1="35" x2="552" y2="35" stroke="var(--card-border)" strokeWidth="1" />
      {rows.map((r, i) => {
        const y = 40 + i * 32;
        const xs = [12, 170, 340, 460];
        return (
          <g key={i}>
            <rect x="8" y={y} width="544" height="26" fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'transparent'} rx="3" />
            <rect x="8" y={y} width="5" height="26" fill={r.c} rx="1" />
            <text x={xs[0]+8} y={y+17} fill={r.c} fontSize="9.5" fontWeight="700">{r.model}</text>
            <text x={xs[1]} y={y+17} fill="#fb923c" fontSize="8.5">{r.assume}</text>
            <text x={xs[2]} y={y+17} fill="#fb923c" fontSize="8.5">{r.diag}</text>
            <text x={xs[3]} y={y+17} fill={r.bias === 'Não' ? '#f97316' : '#f97316'} fontSize="8.5" fontWeight="600">{r.bias}</text>
          </g>
        );
      })}
      <text x="280" y="170" textAnchor="middle" fill="#fb923c" fontSize="8.5">Decisão: usar LM-lag e LM-error tests sobre resíduos OLS para escolher SAR vs SEM. GWR quando coeficientes variam geograficamente.</text>
    </svg>
  );
}

export default function GEO2() {
  const mod = modules[1];
  return (
    <div style={S.page}>
      <Link to="/geospatial" style={S.back}>← Geospatial Intelligence</Link>
      <div style={S.badge}>MÓDULO 02</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Autocorrelação Espacial e Moran's I</h2>
        <div style={S.diagram}><MoranSvg /></div>
        <div style={S.highlight}>
          A <strong>autocorrelação espacial</strong> mede o grau em que valores similares tendem a ocorrer próximos uns dos outros no espaço — a formulação quantitativa da Lei de Tobler: "tudo está relacionado com tudo o resto, mas coisas próximas estão mais relacionadas". O <strong>Moran's I global</strong> varia de -1 (dispersão perfeita) a +1 (clustering perfeito), sendo 0 a distribuição aleatória esperada. Um I de 0.6 indica que zonas com valores altos estão rodeadas por outras zonas com valores altos.
        </div>
        <p style={S.p}>
          O <strong>diagrama de Moran</strong> divide o espaço em 4 quadrantes: <em>HH (High-High)</em> — clusters de valores altos; <em>LL (Low-Low)</em> — clusters de valores baixos; <em>HL (High-Low)</em> — outlier alto rodeado de baixos; <em>LH (Low-High)</em> — outlier baixo rodeado de altos. A inclinação da linha de regressão nesse diagrama é exactamente o valor de Moran's I. A significância estatística é avaliada por permutação de Monte Carlo (999 permutações aleatorias).
        </p>
        <div style={S.note}>A <strong>matriz de pesos espaciais W</strong> é central em toda a análise espacial. As opções incluem: vizinhança de rainha (queen — partilhar lado ou canto), vizinhança de torre (rook — só lado), K nearest neighbors, distância inversa e distância dentro de banda. A escolha da matriz afecta todos os resultados — deve reflectir o processo físico em análise.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. LISA — Indicadores Locais de Associação Espacial</h2>
        <div style={S.diagram}><LisaSvg /></div>
        <div style={S.highlight}>
          O <strong>Moran's I local (LISA)</strong> decompõe a autocorrelação global em contribuições individuais de cada unidade, permitindo identificar onde existem clusters e outliers espaciais significativos. Cada localização recebe um valor I local e um p-value (calculado por permutação). As localizações com p menor que 0.05 são classificadas em HH, LL, HL ou LH — formando o mapa de clusters LISA. O Moran global é a média dos valores locais.
        </div>
        <div style={S.note}>PySAL (Python Spatial Analysis Library): biblioteca Python de referência para autocorrelação espacial, regressão espacial e econometria espacial. Módulos: libpysal (pesos), esda (análise espacial descritiva), spreg (regressão), splot (visualização). Alternativa: R com o pacote spdep.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Interpolação e Kriging Geoestatístico</h2>
        <div style={S.diagram}><KrigingSvg /></div>
        <div style={S.highlight}>
          O <strong>Kriging</strong> é o método de interpolação óptimo para dados com estrutura espacial conhecida — fornece estimativas não enviesadas com variância mínima. O processo tem duas etapas: (1) ajustar um <strong>variograma</strong> experimental aos dados — o variograma γ(h) mede como a variância aumenta com a distância h; (2) usar os parâmetros do variograma (nugget, sill, range) para calcular pesos ótimos de interpolação via sistema de equações lineares (sistema kriging).
        </div>
        <p style={S.p}>
          Os três parâmetros do variograma: <strong>nugget</strong> — variância a distância zero (erros de medição, variabilidade micro-escala); <strong>sill</strong> — patamar onde a variância estabiliza (variância total do fenómeno); <strong>range</strong> — distância a que a autocorrelação espacial deixa de existir (além desta, as observações são independentes). O modelo teórico ajustado pode ser esférico, exponencial, gaussiano ou linear.
        </p>
        <div style={S.note}>Variantes: <em>Ordinary Kriging</em> — média estacionária desconhecida; <em>Universal Kriging</em> — inclui tendência espacial polinomial; <em>Indicator Kriging</em> — para variáveis categóricas. Implementação em Python: scikit-learn (sem kriging nativo), PyKrige, ou GeostatsPy.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Regressão Espacial</h2>
        <div style={S.diagram}><SpatialRegSvg /></div>
        <div style={S.highlight}>
          A <strong>regressão OLS padrão</strong> assume que os resíduos são independentes e identicamente distribuídos (i.i.d.) — um pressuposto frequentemente violado com dados espaciais. Se existir autocorrelação espacial nos resíduos, as estimativas OLS são não enviesadas mas ineficientes, e os erros standard são subestimados. O diagnóstico: calcular o Moran's I dos resíduos OLS — se significativo, usar modelo espacial.
        </div>
        <p style={S.p}>
          O <strong>Spatial Lag Model (SAR)</strong> adiciona o valor espacialmente desfasado do Y como variável explicativa: Y = ρWY + Xβ + ε. O parâmetro ρ mede a força da dependência espacial na variável dependente — positivo indica que zonas vizinhas com Y alto tendem a ter Y alto. O <strong>Spatial Error Model (SEM)</strong> modela a dependência nos resíduos: Y = Xβ + u, u = λWu + ε. Adequado quando a autocorrelação resulta de variáveis omitidas com estrutura espacial.
        </p>
        <p style={S.p}>
          A <strong>Geographically Weighted Regression (GWR)</strong> estima coeficientes locais para cada observação, permitindo que a relação entre X e Y varie no espaço. O bandwidth (raio do kernel) é seleccionado por cross-validation. O resultado é um mapa de coeficientes — revela onde as relações são mais fortes ou mudam de sinal. Implementação: mgwr (Python), GWR4 (standalone) ou spgwr (R).
        </p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Point Pattern Analysis</h2>
        <div style={S.highlight}>
          A <strong>análise de padrões de pontos</strong> estuda a distribuição espacial de eventos discretos (crimes, acidentes, árvores, casos de doença). A questão fundamental: o padrão é aleatório (processo de Poisson homogéneo), clustered (agrupado) ou regular (repulsão)? A <strong>Kernel Density Estimation (KDE)</strong> transforma pontos num campo de densidade contínuo — escolher o bandwidth é crítico (regra de Scott ou validação cruzada).
        </div>
        <p style={S.p}>
          A função <strong>K de Ripley</strong> (e variante L normalizada) analisa a estrutura de clustering a múltiplas escalas de distância, em contraste com o Moran's I que é um único resumo global. O <strong>G function</strong> (nearest neighbour distance) e <strong>F function</strong> (empty space distance) completam o toolkit de análise de padrões de pontos. Implementação: pointpats (PySAL), spatstat (R).
        </p>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Autocorrelação Espacial e Moran's I</strong> — autocorrelação espacial mede se valores semelhantes se agrupam espacialmente; Moran's I ∈ [−1,1]: valores positivos indicam clustering (ricos perto de ricos), negativos indicam dispersão; a hipótese de independência espacial de modelos OLS é frequentemente violada em dados geográficos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>LISA — Indicadores Locais de Associação Espacial</strong> — LISA (Moran Local) decompõe o Moran's I global em contribuições locais, identificando clusters (High-High, Low-Low) e outliers espaciais (High-Low, Low-High); essencial para detectar hotspots geográficos de crime, doença ou actividade económica.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Interpolação e Kriging Geoestatístico</strong> — interpolação estima valores em locais não amostrados; Kriging (geoestatística) é o BLUP (Best Linear Unbiased Predictor) que usa o variograma para modelar a estrutura de autocorrelação espacial — superior a IDW e splines por fornecer variância de estimação.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Regressão Espacial</strong> — OLS em dados espaciais viola a independência dos erros; Spatial Lag Model (Moran's I no Y) e Spatial Error Model (Moran's I nos resíduos) corrigem isto; GWR (Geographically Weighted Regression) permite coeficientes variáveis no espaço — para relações não-estacionárias.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Point Pattern Analysis</strong> — analisa a distribuição espacial de eventos pontuais (acidentes, crimes, ocorrências de espécies); teste de Clark-Evans e função K de Ripley distinguem padrões aleatórios, clustering e dispersão regular — base de epidemiologia espacial e ecologia de paisagem.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
