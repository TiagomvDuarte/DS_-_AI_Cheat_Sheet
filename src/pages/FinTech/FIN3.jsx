import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './FinTech';

const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  card: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.25rem' },
  highlight: { background: `${color}12`, border: `1px solid ${color}30`, borderRadius: 8, padding: '0.9rem 1.1rem', marginTop: '0.8rem', fontSize: '0.93rem', color: 'var(--text-primary)', lineHeight: 1.7 },
  note: { background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 8, padding: '0.8rem 1rem', marginTop: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 },
  code: { background: '#0f172a', color: '#e2e8f0', borderRadius: 8, padding: '1rem 1.2rem', fontFamily: 'monospace', fontSize: '0.82rem', lineHeight: 1.7, marginTop: '0.75rem', overflowX: 'auto' },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  grid3: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.85rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

function ScorecardSVG() {
  const features = [
    { name: 'Historico Pagamento', woe: 2.34, iv: 0.42, points: 120, color: '#f97316' },
    { name: 'Utilizacao Credito', woe: -1.87, iv: 0.31, points: -85, color: '#f97316' },
    { name: 'Antiguidade Credito', woe: 1.56, iv: 0.22, points: 78, color: '#f97316' },
    { name: 'Novos Creditos', woe: -1.23, iv: 0.18, points: -55, color: '#f97316' },
    { name: 'Mix de Credito', woe: 0.89, iv: 0.09, points: 35, color: '#f97316' },
  ];
  const maxAbs = 130;
  return (
    <svg viewBox="0 0 560 210" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="200" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Credit Scorecard — Weight of Evidence e Pontuacao por Variavel</text>
      {['Variavel', 'WoE', 'IV', 'Score Points', 'Contribuição'].map((h, i) => (
        <text key={i} x={[12, 170, 230, 295, 410][i]} y={30} fill="#fb923c" fontSize="9" fontWeight="700">{h}</text>
      ))}
      <line x1="8" y1="35" x2="552" y2="35" stroke="var(--card-border)" strokeWidth="1" />
      {features.map((f, i) => {
        const y = 40 + i * 30;
        const bw = Math.abs(f.points) / maxAbs * 110;
        return (
          <g key={i}>
            <rect x="8" y={y} width="544" height="26" fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'var(--bg-primary)'} rx="3" />
            <text x={14} y={y + 17} fill="#e2e8f0" fontSize="9">{f.name}</text>
            <text x={172} y={y + 17} fill="#f97316" fontSize="10" fontWeight="700">{f.woe.toFixed(2)}</text>
            <text x={232} y={y + 17} fill="#fb923c" fontSize="10">{f.iv.toFixed(2)}</text>
            <text x={295} y={y + 17} fill={f.color} fontSize="10" fontWeight="700">{f.points > 0 ? '+' : ''}{f.points}</text>
            <rect x={410} y={y + 8} width={bw} height={10} fill={f.color} rx="2" opacity="0.7" />
          </g>
        );
      })}
      <text x={280} y={202} textAnchor="middle" fill="#fb923c" fontSize="9">Score final = 600 + SUM(pontos). IV total = 1.22 (Muito Forte). Gini = 0.68. KS = 54.2.</text>
    </svg>
  );
}

function PDLGDSvg() {
  const ratings = [
    { rating: 'AAA', pd: 0.02, lgd: 25, color: '#f97316' },
    { rating: 'AA', pd: 0.05, lgd: 30, color: '#fb923c' },
    { rating: 'A', pd: 0.12, lgd: 35, color: '#fb923c' },
    { rating: 'BBB', pd: 0.28, lgd: 40, color: '#f97316' },
    { rating: 'BB', pd: 0.95, lgd: 45, color: '#f97316' },
    { rating: 'B', pd: 3.20, lgd: 55, color: '#f97316' },
    { rating: 'CCC', pd: 12.5, lgd: 75, color: '#f97316' },
  ];
  const maxPD = 13;
  return (
    <svg viewBox="0 0 560 205" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="195" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">PD / LGD por Rating — Basel III EAD-Based Capital (S&amp;P Tabela)</text>
      {['Rating', 'PD 1yr (%)', 'LGD (%)', 'EL = PD*LGD (%)', 'RWA Weight'].map((h, i) => (
        <text key={i} x={[12, 108, 270, 370, 470][i]} y={30} fill="#fb923c" fontSize="9" fontWeight="700">{h}</text>
      ))}
      <line x1="8" y1="35" x2="552" y2="35" stroke="var(--card-border)" strokeWidth="1" />
      {ratings.map((r, i) => {
        const y = 40 + i * 21;
        const el = (r.pd / 100) * (r.lgd / 100);
        const pdBarW = (r.pd / maxPD) * 70;
        const rwa = Math.min(12.5 * el * 12.5 * 100, 150);
        return (
          <g key={i}>
            <rect x="8" y={y} width="544" height="18" fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'rgba(249,115,22,0.02)'} rx="2" />
            <text x={14} y={y + 13} fill={r.color} fontSize="10" fontWeight="700">{r.rating}</text>
            <rect x={108} y={y + 4} width={pdBarW} height={10} fill={r.color} rx="2" opacity="0.5" />
            <text x={184} y={y + 13} fill={r.color} fontSize="9.5" fontWeight="700">{r.pd}%</text>
            <text x={272} y={y + 13} fill="#fb923c" fontSize="9.5">{r.lgd}%</text>
            <text x={372} y={y + 13} fill="#e2e8f0" fontSize="9.5">{(el * 100).toFixed(3)}%</text>
            <text x={472} y={y + 13} fill={rwa > 50 ? '#f97316' : '#fb923c'} fontSize="9.5">{rwa.toFixed(0)}%</text>
          </g>
        );
      })}
      <text x={280} y={198} textAnchor="middle" fill="#fb923c" fontSize="9">EL = Expected Loss = PD * LGD * EAD. Capital minimo Basel III = max(EL, UL) * 8%. IRB: bancos usam PD/LGD proprios.</text>
    </svg>
  );
}

function StressTestSVG() {
  const scenarios = [
    { name: 'Baseline', gdp: 2.1, unemp: 4.2, hpi: 3.5, npl: 2.8, cet1: 14.2, color: '#f97316' },
    { name: 'Adverse', gdp: -1.5, unemp: 7.8, hpi: -8.2, npl: 5.6, cet1: 11.8, color: '#f97316' },
    { name: 'Severely Adverse', gdp: -4.8, unemp: 10.1, hpi: -15.3, npl: 9.2, cet1: 9.1, color: '#f97316' },
  ];
  const cols = ['Cenario', 'GDP', 'Desemprego', 'Preco Casas', 'NPL Ratio', 'CET1'];
  const xs = [12, 165, 240, 315, 395, 468];
  return (
    <svg viewBox="0 0 560 150" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="140" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">EBA Stress Test 2024 — Cenarios Macroeconomicos (3 anos)</text>
      {cols.map((c, i) => <text key={i} x={xs[i]} y={30} fill="#fb923c" fontSize="9" fontWeight="700">{c}</text>)}
      <line x1="8" y1="35" x2="552" y2="35" stroke="var(--card-border)" strokeWidth="1" />
      {scenarios.map((s, i) => {
        const y = 40 + i * 30;
        return (
          <g key={i}>
            <rect x="8" y={y} width="544" height="26" fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'var(--bg-primary)'} rx="3" />
            <rect x="8" y={y} width="5" height="26" fill={s.color} rx="2" />
            <text x={16} y={y + 17} fill={s.color} fontSize="9.5" fontWeight="700">{s.name}</text>
            <text x={xs[1]} y={y + 17} fill={s.gdp < 0 ? '#f97316' : '#f97316'} fontSize="9.5" fontWeight="700">{s.gdp > 0 ? '+' : ''}{s.gdp}%</text>
            <text x={xs[2]} y={y + 17} fill={s.unemp > 7 ? '#f97316' : '#fb923c'} fontSize="9.5">{s.unemp}%</text>
            <text x={xs[3]} y={y + 17} fill={s.hpi < 0 ? '#f97316' : '#f97316'} fontSize="9.5">{s.hpi > 0 ? '+' : ''}{s.hpi}%</text>
            <text x={xs[4]} y={y + 17} fill={s.npl > 5 ? '#f97316' : '#f97316'} fontSize="9.5">{s.npl}%</text>
            <text x={xs[5]} y={y + 17} fill={s.cet1 < 10.5 ? '#f97316' : '#f97316'} fontSize="9.5" fontWeight="700">{s.cet1}%</text>
          </g>
        );
      })}
      <text x={280} y={143} textAnchor="middle" fill="#fb923c" fontSize="9">CET1 minimo regulatorio: 4.5% (Pilar 1) + 2.5% conservation buffer = 7%. Abaixo 10.5%: restricao de dividendos (BCE).</text>
    </svg>
  );
}

export default function FIN3() {
  const mod = modules[2];
  return (
    <div style={S.page}>
      <Link to="/fintech" style={S.back}>← FinTech & Finance</Link>
      <div style={S.badge}>MÓDULO 03</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Credit Scorecard — Weight of Evidence e Information Value</h2>
        <div style={S.diagram}><ScorecardSVG /></div>
        <div style={S.highlight}>
          O <strong>scorecard tradicional</strong> (Basel IRB, FICO) usa regressao logistica com transformacao WoE. O Weight of Evidence de uma categoria i calcula-se como o logaritmo natural do quociente entre a proporcao de defaults (Events) nessa categoria e a proporcao de nao-defaults (Non-Events): WoE[i] = ln(Distribuicao_Events[i] / Distribuicao_NonEvents[i]). O <strong>Information Value</strong> agrega o poder discriminante de toda a variavel: IV = soma de (proporcao_events[i] menos proporcao_non_events[i]) vezes WoE[i] para todas as categorias. A regra pratica de interpretacao e: IV abaixo de 0.02 indica variavel inutil, entre 0.02 e 0.1 e fraca, entre 0.1 e 0.3 e media, e acima de 0.3 e forte preditora de default.
        </div>
        <p style={S.p}><strong>FICO Score (300-850):</strong> O modelo FICO classico combina 5 categorias com pesos fixos: Historico de Pagamento representa 35% do score total, Utilizacao de Credito (racio entre saldo usado e limite disponivel) representa 30%, Antiguidade do Credito 15%, Novos Creditos 10%, e Mix de Credito 10%. A conversao dos coeficientes logisticos em pontos de score usa o metodo PDO (Points to Double Odds): Points = -(beta vezes WoE mais alpha dividido por N) vezes Factor, onde Factor e igual a PDO dividido por ln(2). Um PDO de 20 significa que cada 20 pontos de score correspondem a duplicar os odds de bom pagador. Score acima de 800 e considerado Exceptional; entre 740 e 799 e Very Good. A diferenca de 100 pontos no score hipotecario corresponde tipicamente a uma diferenca de 1.5 a 2 pontos percentuais na taxa de juro.</p>
        <div style={S.note}>
          <strong>Alternativas ML ao scorecard:</strong> XGBoost supera regressao logistica em 3 a 5 pontos de Gini nos datasets benchmark Kaggle Give Me Some Credit e Home Credit. No entanto, o GDPR Artigo 22 e o EU AI Act exigem explicabilidade para decisoes automatizadas de credito. Os SHAP values (SHapley Additive exPlanations) permitem gerar explicacoes individuais — "o seu score desceu 45 pontos devido a utilizacao de credito de 85%" — mantendo a performance de um modelo ensemble. A tendencia do setor e XGBoost mais SHAP para combinar performance e compliance regulatorio.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. PD / LGD / EAD — Componentes de Risco Basel III</h2>
        <div style={S.diagram}><PDLGDSvg /></div>
        <div style={S.highlight}>
          <strong>Tres componentes de risco de credito (IRB Advanced):</strong> PD (Probability of Default) e a probabilidade de o devedor entrar em incumprimento num horizonte de 12 meses; LGD (Loss Given Default) e a percentagem do valor exposto que se perde em caso de default, tipicamente entre 25% para exposicoes colateralizadas e 75% para credito sem garantia; EAD (Exposure at Default) e o valor monetario total exposto no momento do incumprimento, incluindo utilizacoes de linhas de credito nao sacadas. A <strong>Expected Loss</strong> resulta do produto dos tres componentes: EL = PD vezes LGD vezes EAD. A Unexpected Loss (UL) representa as perdas que excedem a EL ao nivel de confianca de 99.9% ao longo de um ano — e para esta UL que se exige capital regulatorio segundo Basel III.
        </div>
        <p style={S.p}><strong>IFRS 9 — 3 Stages ECL (Expected Credit Loss):</strong> A norma IFRS 9 substituiu o modelo de perdas incorridas (IAS 39) pelo modelo de perdas esperadas, organizado em tres estadios. O Stage 1 inclui credito performing sem deterioracao desde a originacao; a provisao e calculada com base na ECL de 12 meses — o produto da PD de 12 meses pelo LGD pelo EAD. O Stage 2 e ativado quando ocorre uma deterioracao significativa do risco de credito (SICR) desde a originacao; os criterios tipicos incluem aumento da PD para mais do dobro do valor inicial, atraso superior a 30 dias, ou triggers qualitativos como quebra de covenants ou concessao de forbearance; a provisao passa a ser calculada com ECL lifetime ao longo de toda a maturidade esperada da exposicao. O Stage 3 corresponde ao credito impaired (default formal ou imparidade individual reconhecida), com ECL lifetime e juros calculados sobre o valor liquido de imparidade.</p>
        <div style={S.note}>
          <strong>Point-in-Time vs. Through-the-Cycle PD:</strong> A PD Point-in-Time (PIT) varia com o ciclo economico — sobe substancialmente em recessao e desce em expansao — sendo a metodologia exigida pelo IFRS 9 por ser mais sensivel as condicoes correntes. A PD Through-the-Cycle (TTC) representa a media longa do ciclo completo e e mais estavel, sendo usada para o calculo de capital regulatorio Basel IRB. A diferenca entre as duas pode atingir um fator de 2 a 5 vezes em fases opostas do ciclo economico. Os bancos mantem modelos separados para IFRS 9 (PIT) e para Basel (TTC), criando complexidade operacional mas tambem permitindo uma visao mais completa do risco.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Stress Testing — EBA e Fed DFAST</h2>
        <div style={S.diagram}><StressTestSVG /></div>
        <div style={S.highlight}>
          <strong>EBA Stress Test (bienal):</strong> Metodologia bottom-up: cada banco calcula o impacto dos cenarios macroeconomicos nos seus portfolios. Cenario adverso definido pela ESRB com probabilidade de ocorrencia de cerca de 1% em 3 anos. Publicacao de resultados por banco promove disciplina de mercado. 2023: todos os 70 bancos europeus passaram o threshold de 5.5% CET1.
        </div>
        <p style={S.p}><strong>Fed DFAST (Dodd-Frank Act Stress Testing):</strong> Obrigatorio para bancos com ativos acima de $100B. 3 cenarios: Baseline, Adverse, Severely Adverse. Variavel critica: PPNR (Pre-Provision Net Revenue) = Net Interest Income mais Non-Interest Income menos Non-Interest Expense. Perdas projetadas incluem: loan losses (cartao, hipoteca, credito comercial, imobiliario comercial), mark-to-market losses em trading, e outros comprehensive income (OCI).</p>
        <div style={S.note}>
          <strong>CCAR (Comprehensive Capital Analysis and Review):</strong> Alem do stress test quantitativo, inclui avaliacao qualitativa da governance de capital. O Fed pode reprovar um banco em CCAR por razoes qualitativas mesmo que o CET1 estressado seja acima do minimo. Consequencia: restricao de buybacks e dividendos.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Como Funciona o Credit Scoring com WoE, XGBoost e SHAP</h2>
        <div style={S.highlight}>
          A construcao de um scorecard com WoE comeca pela <strong>binagem das variaveis continuas</strong>: cada variavel numerica — como o racio de utilizacao de credito ou o numero de meses com historico — e dividida em intervalos (bins) de forma a maximizar o poder preditivo. A tecnica mais comum e o binning supervisionado por arvore de decisao ou por otimizacao monotona do WoE. Para cada bin calcula-se a proporcao de defaults (Events) e de nao-defaults (Non-Events) em relacao ao total de cada classe, e o WoE e o logaritmo natural do quociente dessas proporcoes. Um WoE positivo indica que o bin tem mais defaults do que esperado; negativo indica menos defaults. O encoder mapeia cada observacao ao WoE do seu bin, transformando variaveis de diferentes escalas numa escala comum interpretavel pela regressao logistica.
        </div>
        <p style={S.p}>O modelo de <strong>XGBoost para credit scoring</strong> opera de forma fundamentalmente diferente: usa um ensemble de arvores de decisao treinadas sequencialmente, onde cada arvore nova corrige os erros residuais da anterior (gradient boosting). Os hiperparametros criticos incluem o numero de arvores (tipicamente 200 a 500), a profundidade maxima de cada arvore (3 a 5 para evitar overfitting), a taxa de aprendizagem (0.01 a 0.1), e as taxas de subsampling de observacoes e variaveis por arvore para regularizacao. Como os datasets de credito sao tipicamente muito desequilibrados — 2 a 5% de defaults versus 95 a 98% de bons pagadores — o parametro scale_pos_weight ajusta o peso dos defaults para compensar o desequilibrio, sendo calculado como o racio entre o numero de bons pagadores e o numero de defaults. A metrica de avaliacao primaria e a AUC-ROC (area sob a curva ROC), com o Gini correspondente igual a 2 vezes AUC menos 1; o KS (Kolmogorov-Smirnov) mede a maxima separacao entre as distribuicoes cumulativas de defaults e nao-defaults.</p>
        <p style={S.p}>O calculo da <strong>ECL IFRS 9</strong> varia consoante o estadio do credito. Para Stage 1, a ECL de 12 meses e simplesmente o produto da PD annual pelo LGD pelo EAD — por exemplo, um credito com PD de 5%, LGD de 45% e EAD de 100.000 euros tem uma ECL de 2.250 euros. Para Stage 2 e 3, a ECL lifetime exige projetar a curva de PD marginal ao longo de toda a vida esperada do contrato: a PD mensal e calculada como 1 menos a raiz do periodo da complementar da PD anual (ou seja, 1 menos (1 menos PD_anual) elevado a 1/12); a ECL lifetime e a soma ponderada por periodo de (PD_mensal vezes (1 menos PD_mensal) elevado ao periodo t vezes LGD vezes EAD), somada para todos os meses t do horizonte. Este calculo implica que um credito com PD de 5% em Stage 2 com horizonte de 36 meses tem uma ECL de aproximadamente 6.800 euros — cerca de 3 vezes a ECL de 12 meses — reflectindo a maior incerteza e tempo de exposicao.</p>
        <div style={S.note}>
          <strong>Validacao de modelos de credito:</strong> Os reguladores (BCE, Banco de Portugal) exigem validacao independente dos modelos IRB com frequencia minima anual. Os testes obrigatorios incluem backtesting da PD (comparar PD estimada com default rate observada), teste de estabilidade populacional (PSI menor que 0.1 e estavel, entre 0.1 e 0.2 monitorizar, acima de 0.2 rever o modelo), e analise de discriminacao por Gini e KS. Um modelo com Gini abaixo de 40% em retail e considerado fraco; acima de 60% e excelente. Os modelos ML como XGBoost atingem regularmente Gini de 65 a 75% em dados com variaveis comportamentais, enquanto modelos de aplicacao (sem historico de comportamento) ficam tipicamente entre 45 e 55%.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Benchmarks Credit Risk</h2>
        <div style={S.grid3}>
          {[
            { title: 'FICO — US Credit', stat: 'Gini 68%+', detail: 'Modelo usado por 90% dos US lenders. 850M+ scores calculados. XGBoost FICO Open Scale: supera modelo tradicional em 3-5 Gini pontos.' },
            { title: 'Kabbage (AmEx)', stat: '7 min aprovacao', detail: 'SME lending: 250+ variaveis (faturamento, reviews, social). Default rate 2x menor que scoring tradicional em thin-file. $9B em emprestimos desde 2009.' },
            { title: 'Upstart — AI Lending', stat: 'AUC 0.79 vs 0.65', detail: 'ML com 1600 variaveis vs. FICO. Aprovacao 27% maior, default 16% menor. Parceria com 100+ bancos comunitarios EUA.' },
            { title: "Moody's Analytics", stat: 'EDF KMV Model', detail: 'Expected Default Frequency: Distance to Default = (Assets - Debt) / (sigma * Assets). Cobre 40.000+ empresas publicas globalmente.' },
            { title: 'ING Bank — DCRM', stat: 'ECL automacao 98%', detail: 'IFRS 9 staging automatico com ML. Stage migrations 98% automatico vs. 60% anterior. Reducao de 40% no custo de compliance.' },
            { title: 'Ant Group — ZhimaCredit', stat: '700M+ utilizadores', detail: 'ML em dados Alipay/Taobao. Acesso a credito para 350M+ sem historial bancario. Default rate menos de 1% em micro-emprestimos ate 7 dias.' },
          ].map((b, i) => (
            <div key={i} style={{ ...S.card, borderLeft: `3px solid ${color}` }}>
              <div style={{ fontWeight: 700, color, marginBottom: '0.25rem', fontSize: '0.85rem' }}>{b.title}</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{b.stat}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{b.detail}</div>
            </div>
          ))}
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Credit Scorecard — Weight of Evidence e Information Value</strong> — WoE transforma variáveis categóricas e contínuas em log(odds); IV (Information Value) mede o poder preditivo de cada variável (IV&gt;0.3 é forte); scorecards com WoE são intrinsecamente interpretáveis e cumprem requisitos regulatórios de explicabilidade em crédito.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>PD / LGD / EAD — Componentes de Risco Basel III</strong> — Basel III exige que bancos calculem capital de crédito como f(PD, LGD, EAD, M); PD é a probabilidade de default em 12 meses; LGD é a perda dado o default; EAD é a exposição no momento do default — IRB Avançado permite modelos internos com validação supervisora.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Stress Testing — EBA e Fed DFAST</strong> — stress tests avaliam a resiliência de bancos a cenários adversos (recessão severa, crash imobiliário); EBA (Europa) e Fed DFAST (EUA) publicam cenários anuais; bancos modelam impacto em P&L e capital — resultados determinam dividendos e buybacks permitidos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Como Funciona o Credit Scoring com WoE, XGBoost e SHAP</strong> — pipeline: dados de applicant → WoE encoding → XGBoost → SHAP values para explicação individual → score calibrado para PD → decisão com cutoff optimizado no ROC — SHAP garante explicação por variável exigida por GDPR e regulação de crédito.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Benchmarks Credit Risk</strong> — Kaggle Home Credit Competition (ROC-AUC ~0.80 para modelos top); Basel IRB Avançado exige backtesting anual com Hosmer-Lemeshow e Gini coefficient; discriminação mínima aceitável pela regulação é Gini &gt;30% em carteiras retail.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
