import React, { useState } from 'react';
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
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0' },
};

/* ── SVG: Scatterplot com linha de regressão e resíduos ── */
function ScatterRegressionSVG() {
  const pts = [
    [40, 160], [60, 140], [80, 125], [100, 110], [115, 100],
    [130, 90], [150, 75], [170, 65], [185, 58], [200, 50],
    [220, 42], [240, 35],
  ];
  // linha: y = 185 - 0.62x  (ajustada visualmente ao viewBox 300x200)
  const lineY = x => 185 - 0.62 * x;
  return (
    <svg viewBox="0 0 300 200" style={{ width: '100%', maxWidth: 420, display: 'block', margin: '0 auto' }}>
      {/* eixos */}
      <line x1="30" y1="10" x2="30" y2="180" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="30" y1="180" x2="290" y2="180" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="150" y="197" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">X</text>
      <text x="12" y="95" textAnchor="middle" fontSize="9" fill="var(--text-secondary)" transform="rotate(-90,12,95)">Y</text>
      {/* linha de regressão */}
      <line x1="35" y1={lineY(35)} x2="280" y2={lineY(280)} stroke={color} strokeWidth="2" />
      {/* resíduos e pontos */}
      {pts.map(([x, y], i) => {
        const fy = lineY(x);
        return (
          <g key={i}>
            <line x1={x} y1={y} x2={x} y2={fy} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,2" />
            <circle cx={x} cy={y} r="3.5" fill={color} fillOpacity="0.8" />
          </g>
        );
      })}
      <text x="250" y="50" fontSize="8" fill={color} fontWeight="700">ŷ = β̂₀ + β̂₁x</text>
      <text x="180" y="130" fontSize="7.5" fill="var(--text-secondary)">εᵢ = yᵢ − ŷᵢ</text>
    </svg>
  );
}

/* ── SVG: Decomposição SST/SSR/SSE ── */
function DecomposicaoSVG() {
  const xi = 160, yi = 60, yhat = 100, ybar = 130;
  return (
    <svg viewBox="0 0 300 200" style={{ width: '100%', maxWidth: 380, display: 'block', margin: '0 auto' }}>
      {/* eixos */}
      <line x1="30" y1="10" x2="30" y2="180" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="30" y1="180" x2="290" y2="180" stroke="var(--text-secondary)" strokeWidth="1.5" />
      {/* ȳ linha horizontal */}
      <line x1="30" y1={ybar} x2="290" y2={ybar} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
      <text x="285" y={ybar - 3} fontSize="8" fill="var(--text-secondary)" textAnchor="end">ȳ</text>
      {/* linha de regressão */}
      <line x1="30" y1="165" x2="290" y2="45" stroke={color} strokeWidth="1.8" />
      {/* ponto observado */}
      <circle cx={xi} cy={yi} r="4" fill={color} />
      {/* ŷᵢ no ponto da linha */}
      <circle cx={xi} cy={yhat} r="3.5" fill="none" stroke={color} strokeWidth="1.5" />
      {/* setas decomposição */}
      {/* SST: yᵢ a ȳ */}
      <line x1={xi - 18} y1={yi} x2={xi - 18} y2={ybar} stroke="#f97316" strokeWidth="2" markerEnd="url(#arr)" />
      <text x={xi - 32} y={(yi + ybar) / 2} fontSize="7.5" fill="#f97316" textAnchor="middle">SST</text>
      {/* SSR: ŷᵢ a ȳ */}
      <line x1={xi + 18} y1={yhat} x2={xi + 18} y2={ybar} stroke="#f97316" strokeWidth="2" />
      <text x={xi + 32} y={(yhat + ybar) / 2} fontSize="7.5" fill="#f97316">SSR</text>
      {/* SSE: yᵢ a ŷᵢ */}
      <line x1={xi} y1={yi} x2={xi} y2={yhat} stroke="#f97316" strokeWidth="2" strokeDasharray="3,2" />
      <text x={xi + 6} y={(yi + yhat) / 2} fontSize="7.5" fill="#f97316">SSE</text>
      {/* labels */}
      <text x={xi + 5} y={yi - 5} fontSize="8" fill={color}>yᵢ</text>
      <text x={xi + 5} y={yhat - 4} fontSize="8" fill={color}>ŷᵢ</text>
    </svg>
  );
}

/* ── SVG: Grafos de diagnóstico 2x2 ── */
function DiagnosticoSVG() {
  return (
    <svg viewBox="0 0 420 290" style={{ width: '100%', maxWidth: 520, display: 'block', margin: '0 auto' }}>
      {/* Painel 1: Resíduos vs Fitted */}
      <rect x="10" y="10" width="185" height="120" rx="6" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="102" y="24" textAnchor="middle" fontSize="8" fontWeight="700" fill="var(--text-primary)">Resíduos vs Fitted</text>
      <line x1="20" y1="80" x2="185" y2="80" stroke="var(--text-secondary)" strokeWidth="0.8" strokeDasharray="3,2" />
      {[[40,65],[60,90],[80,72],[100,85],[120,75],[140,88],[160,70],[175,82]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="2.5" fill={color} fillOpacity="0.7" />
      ))}
      <text x="102" y="122" textAnchor="middle" fontSize="7" fill="#f97316">OK — banda horizontal</text>

      {/* Painel 2: QQ-Plot */}
      <rect x="225" y="10" width="185" height="120" rx="6" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="317" y="24" textAnchor="middle" fontSize="8" fontWeight="700" fill="var(--text-primary)">QQ-Plot dos Resíduos</text>
      <line x1="245" y1="115" x2="395" y2="25" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,2" />
      {[[250,110],[265,98],[280,86],[295,74],[315,62],[335,50],[355,40],[375,30]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="2.5" fill={color} fillOpacity="0.7" />
      ))}
      <text x="317" y="122" textAnchor="middle" fontSize="7" fill="#f97316">OK — pontos na diagonal</text>

      {/* Painel 3: Scale-Location */}
      <rect x="10" y="148" width="185" height="120" rx="6" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="102" y="162" textAnchor="middle" fontSize="8" fontWeight="700" fill="var(--text-primary)">Scale-Location</text>
      <line x1="20" y1="218" x2="185" y2="218" stroke="var(--text-secondary)" strokeWidth="0.8" strokeDasharray="3,2" />
      {[[40,210],[60,215],[80,212],[100,208],[120,214],[140,210],[160,216],[175,211]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="2.5" fill={color} fillOpacity="0.7" />
      ))}
      <text x="102" y="260" textAnchor="middle" fontSize="7" fill="#f97316">OK — variância constante</text>

      {/* Painel 4: Cook's Distance */}
      <rect x="225" y="148" width="185" height="120" rx="6" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="317" y="162" textAnchor="middle" fontSize="8" fontWeight="700" fill="var(--text-primary)">Distância de Cook</text>
      {[[235,255],[250,252],[265,250],[280,252],[295,254],[315,248],[335,253],[375,210]].map(([x,y],i)=>(
        <rect key={i} x={x} y={y} width="8" height={265-y} fill={i===7 ? '#f97316' : color} fillOpacity={i===7 ? 0.9 : 0.5} />
      ))}
      <line x1="225" y1="235" x2="410" y2="235" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />
      <text x="317" y="275" textAnchor="middle" fontSize="7" fill="#f97316">outlier influente (ponto vermelho)</text>
    </svg>
  );
}

/* ── SVG: Grafo de confundimento Z -> X, Z -> Y, X -> Y ── */
function ConfundimentoSVG() {
  return (
    <svg viewBox="0 0 260 160" style={{ width: '100%', maxWidth: 340, display: 'block', margin: '0 auto' }}>
      <defs>
        <marker id="arrowC" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)" />
        </marker>
        <marker id="arrowX" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
        <marker id="arrowZ" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
        </marker>
      </defs>
      {/* nós */}
      <circle cx="130" cy="35" r="22" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="130" y="39" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">Z</text>
      <circle cx="50" cy="120" r="22" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="50" y="124" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>X</text>
      <circle cx="210" cy="120" r="22" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="210" y="124" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Y</text>
      {/* setas */}
      <line x1="115" y1="53" x2="68" y2="100" stroke="#f97316" strokeWidth="1.8" markerEnd="url(#arrowZ)" />
      <line x1="145" y1="53" x2="192" y2="100" stroke="#f97316" strokeWidth="1.8" markerEnd="url(#arrowZ)" />
      <line x1="72" y1="120" x2="186" y2="120" stroke={color} strokeWidth="2" markerEnd="url(#arrowX)" />
      {/* labels */}
      <text x="50" y="78" fontSize="8" fill="#f97316">confunde</text>
      <text x="130" y="113" textAnchor="middle" fontSize="8" fill={color}>correlação observada</text>
      <text x="130" y="150" textAnchor="middle" fontSize="7.5" fill="var(--text-secondary)">Z causa tanto X como Y (variável omitida)</text>
    </svg>
  );
}

/* ── SVG: 4 painéis de padrões de resíduos ── */
function PadroesResiduosSVG() {
  return (
    <svg viewBox="0 0 420 280" style={{ width: '100%', maxWidth: 520, display: 'block', margin: '0 auto' }}>
      {/* Painel 1: OK */}
      <rect x="10" y="10" width="185" height="120" rx="6" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="102" y="24" textAnchor="middle" fontSize="8" fontWeight="700" fill="#f97316">Dispersão Aleatória (OK)</text>
      <line x1="20" y1="70" x2="185" y2="70" stroke="var(--text-secondary)" strokeWidth="0.8" strokeDasharray="3,2" />
      {[[35,55],[50,82],[65,60],[80,75],[95,63],[110,80],[130,58],[150,74],[165,61],[178,78]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="2.5" fill="#f97316" fillOpacity="0.8" />
      ))}

      {/* Painel 2: Heterocedasticidade */}
      <rect x="225" y="10" width="185" height="120" rx="6" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="317" y="24" textAnchor="middle" fontSize="8" fontWeight="700" fill="#f97316">Heterocedasticidade</text>
      <line x1="235" y1="70" x2="400" y2="70" stroke="var(--text-secondary)" strokeWidth="0.8" strokeDasharray="3,2" />
      {[[245,68],[260,72],[275,64],[290,78],[305,55],[320,88],[340,45],[360,95],[380,35],[395,100]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="2.5" fill="#f97316" fillOpacity="0.8" />
      ))}
      <text x="317" y="122" textAnchor="middle" fontSize="7" fill="#f97316">padrão em funil</text>

      {/* Painel 3: Não-linearidade */}
      <rect x="10" y="148" width="185" height="120" rx="6" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="102" y="162" textAnchor="middle" fontSize="8" fontWeight="700" fill="#f97316">Não-linearidade</text>
      <line x1="20" y1="208" x2="185" y2="208" stroke="var(--text-secondary)" strokeWidth="0.8" strokeDasharray="3,2" />
      {[[35,225],[55,215],[75,200],[95,192],[115,192],[135,198],[155,210],[175,222]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="2.5" fill="#f97316" fillOpacity="0.8" />
      ))}
      <text x="102" y="260" textAnchor="middle" fontSize="7" fill="#f97316">padrão em U — modelo mal especificado</text>

      {/* Painel 4: Outlier */}
      <rect x="225" y="148" width="185" height="120" rx="6" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="317" y="162" textAnchor="middle" fontSize="8" fontWeight="700" fill="#f97316">Outlier / Alta Alavancagem</text>
      <line x1="235" y1="208" x2="400" y2="208" stroke="var(--text-secondary)" strokeWidth="0.8" strokeDasharray="3,2" />
      {[[245,210],[265,205],[285,212],[305,207],[325,209],[345,204],[365,211],[390,165]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={i===7?5:2.5} fill={i===7?"#f97316":color} fillOpacity="0.8" />
      ))}
      <text x="317" y="260" textAnchor="middle" fontSize="7" fill="#f97316">ponto afastado com alta influência</text>
    </svg>
  );
}

export default function ST6() {
  const [activeTab, setActiveTab] = useState('simples');

  return (
    <div style={S.page}>
      {/* Voltar */}
      <Link to="/statistics" style={S.back}>
        <ArrowLeft size={16} />
        Voltar a Statistics
      </Link>

      {/* Cabeçalho */}
      <div style={S.tag}>MÓDULO ST6</div>
      <h1 style={S.h1}>Regressão Linear Simples &amp; Múltipla</h1>
      <p style={S.lead}>
        A regressão linear é uma das ferramentas mais poderosas e amplamente utilizadas em econometria e ciência de dados.
        Permite modelar relações entre variáveis, fazer previsões e, com as devidas cautelas, inferir relações causais.
        Neste módulo abordamos os fundamentos teóricos, as assunções do CLRM, a extensão para múltiplas variáveis e os
        principais cuidados na interpretação dos resultados.
      </p>

      <hr style={S.divider} />

      {/* ── Secção 1: Modelo de Regressão Linear Simples ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. O Modelo de Regressão Linear Simples</h2>
        <p style={S.p}>
          O modelo de regressão linear simples descreve a relação entre uma variável dependente Y e uma única variável
          independente X através de uma equação linear. A forma <strong>populacional</strong> do modelo é:
        </p>
        <BlockMath math="Y = \beta_0 + \beta_1 X + \varepsilon" />
        <p style={S.p}>
          onde β₀ é o <em>intercepto</em> (valor esperado de Y quando X = 0), β₁ é o <em>declive</em> (variação esperada
          em Y por unidade de variação em X), e ε é o <em>termo de erro</em> que capta todos os factores não observados
          que influenciam Y.
        </p>
        <p style={S.p}>
          Como β₀ e β₁ são parâmetros populacionais desconhecidos, estimamo-los a partir de uma amostra. A <strong>linha
          de regressão ajustada</strong> (fitted) é:
        </p>
        <BlockMath math="\hat{y} = \hat{\beta}_0 + \hat{\beta}_1 x" />
        <p style={S.p}>
          O <strong>resíduo</strong> para a observação i é a diferença entre o valor observado e o valor ajustado:
          <InlineMath math="\varepsilon_i = y_i - \hat{y}_i" />. No gráfico abaixo, os segmentos a tracejado representam esses resíduos.
        </p>
        <div style={S.diagram}>
          <ScatterRegressionSVG />
        </div>
        <div style={S.note}>
          Nota: a linha de regressão passa sempre pelo ponto <InlineMath math="(\bar{x}, \bar{y})" />. O sinal de <InlineMath math="\hat{\beta}_1" /> indica a direcção da relação: positivo
          significa que Y aumenta com X, negativo que Y diminui com X.
        </div>

        <h3 style={S.h3}>Interpretação dos parâmetros</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Parâmetro</th>
              <th style={S.th}>Interpretação</th>
              <th style={S.th}>Unidades</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>β̂₀</td>
              <td style={S.td}>Valor esperado de Y quando X = 0 (pode ser extrapolação)</td>
              <td style={S.td}>Unidades de Y</td>
            </tr>
            <tr>
              <td style={S.td}>β̂₁</td>
              <td style={S.td}>Variação média em Y por unidade de aumento em X</td>
              <td style={S.td}>Unidades de Y / Unidades de X</td>
            </tr>
            <tr>
              <td style={S.td}>ε</td>
              <td style={S.td}>Factores não observados; assume-se E[ε|X] = 0</td>
              <td style={S.td}>Unidades de Y</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Secção 2: OLS ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Mínimos Quadrados Ordinários (OLS)</h2>
        <p style={S.p}>
          O método dos <strong>Mínimos Quadrados Ordinários</strong> (Ordinary Least Squares — OLS) obtém estimativas β̂₀ e β̂₁
          que minimizam a <em>soma dos quadrados dos resíduos</em>:
        </p>
        <BlockMath math="\min \sum_i \varepsilon_i^2 = \sum_i (y_i - \hat{\beta}_0 - \hat{\beta}_1 x_i)^2" />
        <p style={S.p}>
          Derivando em ordem a β̂₀ e β̂₁ e igualando a zero, obtemos as soluções em forma fechada:
        </p>
        <BlockMath math="\hat{\beta}_1 = \frac{S_{xy}}{S_{xx}} = \frac{\sum(x_i - \bar{x})(y_i - \bar{y})}{\sum(x_i - \bar{x})^2}" />
          <BlockMath math="\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \cdot \bar{x}" />
        <p style={S.p}>
          onde Sxy é a covariância amostral (não normalizada) entre X e Y, e Sxx é a variância amostral (não normalizada) de X.
          Geometricamente, o OLS minimiza a soma dos quadrados das <em>distâncias verticais</em> de cada ponto à linha ajustada.
        </p>

        <h3 style={S.h3}>Decomposição da Variância</h3>
        <p style={S.p}>
          Cada desvio de yᵢ em relação à média ȳ pode ser decomposto em duas partes: a parte explicada pelo modelo (SSR)
          e a parte não explicada (SSE):
        </p>
        <div style={S.diagram}>
          <DecomposicaoSVG />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Componente</th>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Significado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>SST (Total)</td>
              <td style={S.td}><InlineMath math="\sum(y_i - \bar{y})^2" /></td>
              <td style={S.td}>Variação total em Y</td>
            </tr>
            <tr>
              <td style={S.td}>SSR (Regressão)</td>
              <td style={S.td}><InlineMath math="\sum(\hat{y}_i - \bar{y})^2" /></td>
              <td style={S.td}>Variação explicada pelo modelo</td>
            </tr>
            <tr>
              <td style={S.td}>SSE (Erro)</td>
              <td style={S.td}><InlineMath math="\sum(y_i - \hat{y}_i)^2" /></td>
              <td style={S.td}>Variação não explicada (resídual)</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Identidade fundamental: SST = SSR + SSE. Esta decomposição é válida quando o modelo inclui intercepto.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Secção 3: R² ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Coeficiente de Determinação R²</h2>
        <p style={S.p}>
          O <strong>R²</strong> (R-quadrado) mede a proporção da variância total de Y que é explicada pelo modelo de regressão:
        </p>
        <BlockMath math="R^2 = \frac{SSR}{SST} = 1 - \frac{SSE}{SST} \quad R^2 \in [0,\, 1]" />
        <p style={S.p}>
          Um R² = 0 significa que o modelo não explica nada da variação de Y; R² = 1 significa ajustamento perfeito.
          Na regressão simples, R² é igual ao quadrado do coeficiente de correlação de Pearson entre X e Y: <InlineMath math="R^2 = r^2(X,Y)" />.
        </p>

        <h3 style={S.h3}>R² Ajustado</h3>
        <p style={S.p}>
          Na regressão <em>múltipla</em>, adicionar mais variáveis aumenta sempre o R², mesmo que essas variáveis não
          sejam relevantes. O <strong>R² ajustado</strong> penaliza a inclusão de variáveis adicionais:
        </p>
        <BlockMath math="R^2_{adj} = 1 - (1 - R^2) \cdot \frac{n-1}{n-k-1}" />
        <p style={S.p}>
          onde <InlineMath math="n" /> é o número de observações e <InlineMath math="k" /> é o número de variáveis independentes. O <InlineMath math="R^2_{adj}" /> só aumenta se uma nova
          variável melhorar o ajustamento mais do que seria esperado por acaso.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Valor de R²</th>
              <th style={S.th}>Interpretação (orientativa)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>0.00 – 0.19</td><td style={S.td}>Ajustamento muito fraco</td></tr>
            <tr><td style={S.td}>0.20 – 0.39</td><td style={S.td}>Ajustamento fraco</td></tr>
            <tr><td style={S.td}>0.40 – 0.59</td><td style={S.td}>Ajustamento moderado</td></tr>
            <tr><td style={S.td}>0.60 – 0.79</td><td style={S.td}>Ajustamento bom</td></tr>
            <tr><td style={S.td}>0.80 – 1.00</td><td style={S.td}>Ajustamento muito bom</td></tr>
          </tbody>
        </table>
        <div style={S.note}>
          Atenção: um R² elevado não implica causalidade nem ausência de problemas no modelo. Um R² baixo pode ser perfeitamente
          aceitável em dados de corte transversal com muita variação individual.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Secção 4: Assunções CLRM / Gauss-Markov ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Assunções do CLRM — Teorema de Gauss-Markov</h2>
        <p style={S.p}>
          O <strong>Modelo de Regressão Linear Clássico</strong> (CLRM) assenta em cinco assunções fundamentais. Quando
          cumpridas, o Teorema de Gauss-Markov garante que os estimadores OLS são <em>BLUE</em> — Best Linear Unbiased
          Estimators (estimadores lineares não-enviesados de variância mínima).
        </p>

        
          <div style={{ fontWeight: 700, color, marginBottom: '0.5rem' }}>As 5 Assunções (LIHN-E)</div>
          <ol style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 2, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
            <li><strong>L</strong>inearidade nos parâmetros: o modelo é linear em β</li>
            <li><strong>I</strong>ndependência: as observações são independentes entre si (sem autocorrelação)</li>
            <li><strong>H</strong>omoscedasticidade: <InlineMath math="\text{Var}(\varepsilon_i) = \sigma^2" /> constante para todos i</li>
            <li><strong>N</strong>ormalidade dos erros: <InlineMath math="\varepsilon \sim N(0, \sigma^2)" /> — necessária para inferência exacta em amostras pequenas</li>
            <li><strong>E</strong>xogeneidade: <InlineMath math="E[\varepsilon|X] = 0" /> — os erros não estão correlacionados com os regressores</li>
          </ol>
        

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Assunção</th>
              <th style={S.th}>Violação</th>
              <th style={S.th}>Consequência</th>
              <th style={S.th}>Diagnóstico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Linearidade</td>
              <td style={S.td}>Relação não-linear</td>
              <td style={S.td}>Enviesamento do modelo</td>
              <td style={S.td}>Gráfico Resíduos vs Fitted</td>
            </tr>
            <tr>
              <td style={S.td}>Independência</td>
              <td style={S.td}>Autocorrelação (séries temporais)</td>
              <td style={S.td}>Erros-padrão incorrectos</td>
              <td style={S.td}>Teste Durbin-Watson</td>
            </tr>
            <tr>
              <td style={S.td}>Homoscedasticidade</td>
              <td style={S.td}>Heterocedasticidade</td>
              <td style={S.td}>Inferência ineficiente</td>
              <td style={S.td}>Teste Breusch-Pagan</td>
            </tr>
            <tr>
              <td style={S.td}>Normalidade</td>
              <td style={S.td}>Distribuição assimétrica / caudas pesadas</td>
              <td style={S.td}>Intervalos de confiança imprecisos (n pequeno)</td>
              <td style={S.td}>QQ-Plot, teste Shapiro-Wilk</td>
            </tr>
            <tr>
              <td style={S.td}>Exogeneidade</td>
              <td style={S.td}>Endogeneidade (variável omitida, simultaneidade)</td>
              <td style={S.td}>Estimadores enviesados e inconsistentes</td>
              <td style={S.td}>Teste de Hausman, instrumentos</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Gráficos de Diagnóstico</h3>
        <p style={S.p}>
          Em R, o comando <code>plot(modelo)</code> gera automaticamente quatro gráficos de diagnóstico que permitem
          avaliar visualmente as assunções do modelo:
        </p>
        <div style={S.diagram}>
          <DiagnosticoSVG />
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Secção 5: Regressão Múltipla ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Regressão Linear Múltipla</h2>
        <p style={S.p}>
          A regressão linear múltipla estende o modelo simples a k variáveis independentes:
        </p>
        <BlockMath math="Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \cdots + \beta_k X_k + \varepsilon" />

        <h3 style={S.h3}>Forma Matricial</h3>
        <p style={S.p}>
          Com n observações e k regressores, o modelo escreve-se de forma compacta em notação matricial:
        </p>
        <BlockMath math="\mathbf{Y} = \mathbf{X}\boldsymbol{\beta} + \boldsymbol{\varepsilon}" />
          <BlockMath math="\hat{\boldsymbol{\beta}} = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}" />
        <p style={S.p}>
          onde Y é o vector (n×1) da variável dependente, X é a matriz (n×(k+1)) dos regressores (com uma coluna de
          uns para o intercepto), β é o vector (k+1)×1 de parâmetros, e ε é o vector (n×1) de erros.
        </p>

        <h3 style={S.h3}>Interpretação Ceteris Paribus</h3>
        <p style={S.p}>
          Na regressão múltipla, <InlineMath math="\hat{\beta}_j" /> representa a variação esperada em Y associada a um aumento de uma unidade em <InlineMath math="X_j" />,
          <strong> mantendo todas as outras variáveis constantes</strong> (ceteris paribus). Este é o grande poder da
          regressão múltipla: isolar o efeito parcial de cada variável.
        </p>
        <div style={S.note}>
          Exemplo: num modelo salarial com educação (X₁) e experiência (X₂), β̂₁ mede o retorno da educação
          controlando para a experiência — i.e., comparando pessoas com a mesma experiência mas diferente educação.
        </div>

        <h3 style={S.h3}>Multicolinearidade</h3>
        <p style={S.p}>
          Quando duas ou mais variáveis independentes estão fortemente correlacionadas entre si, diz-se que existe
          <strong> multicolinearidade</strong>. Os seus efeitos:
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li>Os estimadores OLS continuam não-enviesados, mas os erros-padrão inflacionam</li>
          <li>Os coeficientes individuais tornam-se imprecisos e instáveis</li>
          <li>O R² pode ser elevado mesmo com t-statistics baixos</li>
        </ul>
        <p style={S.p}>
          O <strong>VIF (Variance Inflation Factor)</strong> quantifica a multicolinearidade: VIF &gt; 10 é frequentemente
          considerado problemático.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── Secção 6: Transformações ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Transformações e Modelos Não-Lineares</h2>
        <p style={S.p}>
          Muitas relações económicas não são lineares em nível, mas tornam-se lineares após transformação logarítmica ou
          polinomial. A escolha do modelo deve ser guiada pela teoria económica e pelos dados.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>Especificação</th>
              <th style={S.th}>Interpretação de β₁</th>
              <th style={S.th}>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Level-Level</strong></td>
              <td style={S.td}><InlineMath math="Y = \beta_0 + \beta_1 X" /></td>
              <td style={S.td}><InlineMath math="\Delta Y = \beta_1 \cdot \Delta X" /> (efeito absoluto)</td>
              <td style={S.td}>Relação linear directa</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Log-Log</strong></td>
              <td style={S.td}><InlineMath math="\ln Y = \beta_0 + \beta_1 \ln X" /></td>
              <td style={S.td}><InlineMath math="\%\Delta Y \approx \beta_1 \cdot \%\Delta X" /> (elasticidade constante)</td>
              <td style={S.td}>Relação de potência, dados positivos</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Log-Level</strong></td>
              <td style={S.td}><InlineMath math="\ln Y = \beta_0 + \beta_1 X" /></td>
              <td style={S.td}><InlineMath math="\%\Delta Y \approx 100 \cdot \beta_1 \cdot \Delta X" /> (taxa de crescimento)</td>
              <td style={S.td}>Y cresce exponencialmente com X</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Level-Log</strong></td>
              <td style={S.td}><InlineMath math="Y = \beta_0 + \beta_1 \ln X" /></td>
              <td style={S.td}><InlineMath math="\Delta Y \approx (\beta_1/100) \cdot \%\Delta X" /> (retornos decrescentes)</td>
              <td style={S.td}>X tem retornos decrescentes em Y</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Polinomial</strong></td>
              <td style={S.td}><InlineMath math="Y = \beta_0 + \beta_1 X + \beta_2 X^2" /></td>
              <td style={S.td}>Efeito de X depende do valor de X</td>
              <td style={S.td}>Relação em U ou curva de Laffer</td>
            </tr>
          </tbody>
        </table>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ ...S.highlight, flex: 1, minWidth: 200 }}>
            <div style={{ fontWeight: 700, color, marginBottom: '0.4rem' }}>Elasticidade</div>
            <BlockMath math="\varepsilon = \frac{\Delta Y / Y}{\Delta X / X} = \beta_1 \cdot \frac{X}{Y}" />
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
              No modelo log-log, <InlineMath math="\beta_1" /> é directamente a elasticidade.
            </div>
          </div>
          <div style={{ ...S.highlight, flex: 1, minWidth: 200 }}>
            <div style={{ fontWeight: 700, color, marginBottom: '0.4rem' }}>Ponto de máximo/mínimo</div>
            <BlockMath math="X^* = -\frac{\beta_1}{2\beta_2}" />
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
              No modelo quadrático <InlineMath math="Y = \beta_0 + \beta_1 X + \beta_2 X^2" />.
            </div>
          </div>
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Secção 7: Causalidade vs Correlação ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Causalidade vs. Correlação</h2>
        <p style={S.p}>
          Uma das armadilhas mais comuns na análise de regressão é confundir <strong>correlação</strong> com
          <strong> causalidade</strong>. A regressão OLS estima a associação linear entre variáveis, mas não estabelece
          automaticamente causalidade.
        </p>

        <div style={S.highlight}>
          <div style={{ fontWeight: 700, color, textAlign: 'center', fontSize: '1.1rem' }}>
            Correlação ≠ Causalidade
          </div>
        </div>

        <h3 style={S.h3}>Variável Omitida (OVB) e Confundimento</h3>
        <p style={S.p}>
          O <strong>Omitted Variable Bias (OVB)</strong> ocorre quando uma variável Z influencia tanto X como Y, mas não
          é incluída no modelo. Isto leva a estimadores enviesados e inconsistentes para β₁.
        </p>
        <div style={S.diagram}>
          <ConfundimentoSVG />
        </div>
        <p style={S.p}>
          No gráfico acima, observamos uma correlação entre X e Y, mas a verdadeira causa comum é Z (variável omitida /
          confundidora). Por exemplo: o número de igrejas (X) está correlacionado com a criminalidade (Y), mas ambos são
          causados pelo tamanho da população (Z).
        </p>

        <h3 style={S.h3}>Fórmula do OVB</h3>
        <p style={S.p}>
          Se o verdadeiro modelo é <InlineMath math="Y = \beta_0 + \beta_1 X + \beta_2 Z + \varepsilon" /> mas estimamos <InlineMath math="Y = \alpha_0 + \alpha_1 X + u" /> (omitindo Z):
        </p>
        <BlockMath math="E[\hat{\alpha}_1] = \beta_1 + \beta_2 \cdot \delta_1" />
        <p style={S.p}>
          onde δ₁ é o coeficiente da regressão de Z em X. O enviesamento é β₂ · δ₁: existe quando Z afecta Y (β₂ ≠ 0)
          e está correlacionado com X (δ₁ ≠ 0).
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Sinal de β₂</th>
              <th style={S.th}>Sinal de δ₁</th>
              <th style={S.th}>Enviesamento</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>+</td><td style={S.td}>+</td><td style={S.td}>Positivo (sobrestimação)</td></tr>
            <tr><td style={S.td}>+</td><td style={S.td}>−</td><td style={S.td}>Negativo (subestimação)</td></tr>
            <tr><td style={S.td}>−</td><td style={S.td}>+</td><td style={S.td}>Negativo (subestimação)</td></tr>
            <tr><td style={S.td}>−</td><td style={S.td}>−</td><td style={S.td}>Positivo (sobrestimação)</td></tr>
          </tbody>
        </table>

        <div style={S.note}>
          Estratégias para estabelecer causalidade: variáveis instrumentais (IV), diferenças-em-diferenças (DiD),
          regressão com descontinuidade (RD), e experiências naturais ou randomizadas (RCT).
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Secção 8: Análise de Resíduos ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Análise de Resíduos</h2>
        <p style={S.p}>
          Os resíduos são a "impressão digital" do modelo. A sua inspecção visual é o primeiro passo para diagnosticar
          violações das assunções do CLRM. Abaixo ilustram-se quatro padrões típicos:
        </p>
        <div style={S.diagram}>
          <PadroesResiduosSVG />
        </div>

        <h3 style={S.h3}>Checklist de Diagnóstico</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Padrão</th>
              <th style={S.th}>Problema</th>
              <th style={S.th}>Solução</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Dispersão aleatória em torno de zero</td>
              <td style={S.td}>Nenhum — modelo adequado</td>
              <td style={S.td}>—</td>
            </tr>
            <tr>
              <td style={S.td}>Padrão em funil (variância cresce)</td>
              <td style={S.td}>Heterocedasticidade</td>
              <td style={S.td}>Transformação log(Y), erros robustos, WLS</td>
            </tr>
            <tr>
              <td style={S.td}>Padrão em U ou curva</td>
              <td style={S.td}>Não-linearidade</td>
              <td style={S.td}>Adicionar X², transformação logarítmica</td>
            </tr>
            <tr>
              <td style={S.td}>Ponto muito afastado</td>
              <td style={S.td}>Outlier / alta alavancagem</td>
              <td style={S.td}>Verificar erro de dados, modelos robustos</td>
            </tr>
            <tr>
              <td style={S.td}>Padrão ondulatório (séries temporais)</td>
              <td style={S.td}>Autocorrelação</td>
              <td style={S.td}>Modelo ARMA, erros de Newey-West</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Medidas de Influência</h3>
        <p style={S.p}>
          Nem todos os outliers são problemáticos. O que importa é a <em>alavancagem</em> (leverage) — o quanto o ponto
          afasta-se do centro dos X — e a <em>influência</em> — o quanto a estimativa muda ao remover a observação.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ ...S.highlight, flex: 1, minWidth: 200 }}>
            <div style={{ fontWeight: 700, color }}>Distância de Cook</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
              Mede a influência total de uma observação. Regra: D &gt; 4/n é sinal de alerta.
            </div>
          </div>
          <div style={{ ...S.highlight, flex: 1, minWidth: 200 }}>
            <div style={{ fontWeight: 700, color }}>Hat Values (hᵢᵢ)</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
              Medem a alavancagem. Alto quando hᵢᵢ &gt; 2(k+1)/n.
            </div>
          </div>
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Secção 9: Síntese ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Síntese do Módulo</h2>
        <p style={S.p}>
          A regressão linear é muito mais do que uma fórmula — é um quadro conceptual que estrutura a forma como
          pensamos sobre relações entre variáveis. Dominar este módulo implica compreender:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          {[
            { titulo: 'Modelo e Estimação', texto: 'OLS minimiza a soma dos quadrados dos resíduos. As fórmulas fechadas para β̂ dependem apenas de médias, variâncias e covariâncias amostrais.' },
            { titulo: 'Qualidade do Ajustamento', texto: 'R² mede a fracção da variância explicada. O R² ajustado penaliza regressores adicionais e é preferível na regressão múltipla.' },
            { titulo: 'Assunções e Diagnóstico', texto: 'O Teorema de Gauss-Markov garante BLUE quando as 5 assunções se verificam. Os resíduos são o principal instrumento de diagnóstico.' },
            { titulo: 'Regressão Múltipla', texto: 'Permite isolar efeitos ceteris paribus. Atenção à multicolinearidade (VIF) e à selecção de variáveis (AIC, BIC, teoria económica).' },
            { titulo: 'Transformações', texto: 'Modelos log-log, log-level, level-log e polinomiais permitem capturar relações não-lineares mantendo a estimação por OLS.' },
            { titulo: 'Causalidade', texto: 'OLS estima associações, não causas. OVB, endogeneidade e confundimento requerem estratégias de identificação (IV, DiD, RD, RCT).' },
          ].map((item, i) => (
            <div key={i} style={{ ...S.highlight, margin: 0 }}>
              <div style={{ fontWeight: 700, color, marginBottom: '0.4rem', fontSize: '0.95rem' }}>{item.titulo}</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.texto}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
