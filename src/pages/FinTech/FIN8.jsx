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
  code: { background: '#0f172a', color: '#e2e8f0', borderRadius: 8, padding: '1rem 1.2rem', fontFamily: 'monospace', fontSize: '0.82rem', lineHeight: 1.7, marginTop: '0.75rem', overflowX: 'auto', whiteSpace: 'pre' },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

function GreeksSVG() {
  const greeks = [
    { name: 'Delta (Δ)', symbol: '∂V/∂S', range: '0 a 1 (call) / -1 a 0 (put)', meaning: 'Sensibilidade ao preco subjacente', color: '#f97316' },
    { name: 'Gamma (Γ)', symbol: '∂²V/∂S²', range: 'Sempre positivo', meaning: 'Variacao do Delta com S (convexidade)', color: '#f97316' },
    { name: 'Theta (Θ)', symbol: '∂V/∂t', range: 'Negativo (time decay)', meaning: 'Perda de valor temporal por dia', color: '#f97316' },
    { name: 'Vega (ν)', symbol: '∂V/∂σ', range: 'Sempre positivo', meaning: 'Sensibilidade a volatilidade implicita', color: '#f97316' },
    { name: 'Rho (ρ)', symbol: '∂V/∂r', range: '+call / -put', meaning: 'Sensibilidade a taxa de juro risk-free', color: '#f97316' },
  ];
  const rowH = 26;
  return (
    <svg viewBox="0 0 560 196" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="196" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={14} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Option Greeks — Sensibilidades de Derivados</text>
      {['Greek', 'Formula', 'Range', 'Significado'].map((h, i) => (
        <text key={i} x={[10, 110, 240, 355][i]} y={28} fill="#fb923c" fontSize="9" fontWeight="700">{h}</text>
      ))}
      <line x1="6" y1="33" x2="554" y2="33" stroke="var(--card-border)" strokeWidth="1" />
      {greeks.map((g, i) => {
        const y = 37 + i * rowH;
        return (
          <g key={i}>
            <rect x="6" y={y} width="548" height={rowH - 2} fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'transparent'} rx="2" />
            <rect x="6" y={y} width="4" height={rowH - 2} fill={g.color} rx="1" />
            <text x={14} y={y + 15} fill={g.color} fontSize="9.5" fontWeight="700">{g.name}</text>
            <text x={112} y={y + 15} fill="#e2e8f0" fontSize="9" fontFamily="monospace">{g.symbol}</text>
            <text x={242} y={y + 15} fill="#fb923c" fontSize="8.5">{g.range}</text>
            <text x={357} y={y + 15} fill="#fb923c" fontSize="8.5">{g.meaning}</text>
          </g>
        );
      })}
      <text x={280} y={178} textAnchor="middle" fill="#fb923c" fontSize="9">
        <tspan x={280} dy="0">Delta-neutral hedging: manter Delta portfolio = 0 dinamicamente. Gamma scalping: compra opcoes ATM, hedge delta.</tspan>
        <tspan x={280} dy="12">Lucra com moves grandes. Vega trading: straddle antes de earnings.</tspan>
      </text>
    </svg>
  );
}

function VaRDistributionSVG() {
  const W = 460, H = 120, ox = 50, oy = 20;
  const mu = 0, sigma_d = 1;
  const normalPDF = (x) => Math.exp(-0.5 * ((x - mu) / sigma_d) ** 2) / (sigma_d * Math.sqrt(2 * Math.PI));
  const xs = [];
  for (let x = -4; x <= 4; x += 0.08) xs.push(x);
  const maxPDF = normalPDF(0);
  const scaleX = (v) => ox + ((v + 4) / 8) * W;
  const scaleY = (v) => oy + H - (v / maxPDF) * H * 0.9;
  const path = xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${scaleX(x).toFixed(1)},${scaleY(normalPDF(x)).toFixed(1)}`).join(' ');
  const var95_x = -1.645, var99_x = -2.326;
  const tail95 = xs.filter(x => x <= var95_x);
  const tailPath95 = tail95.map((x, i) => `${i === 0 ? 'M' : 'L'}${scaleX(x).toFixed(1)},${scaleY(normalPDF(x)).toFixed(1)}`).join(' ') +
    ` L${scaleX(var95_x).toFixed(1)},${scaleY(0)} L${scaleX(tail95[0])},${scaleY(0)} Z`;
  return (
    <svg viewBox="0 0 560 195" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="195" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={8} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Value-at-Risk (VaR) — Distribuicao de Perdas e Cauda</text>
      <path d={tailPath95} fill="#f97316" opacity="0.35" />
      <path d={path} fill="none" stroke="#f97316" strokeWidth="2" />
      <line x1={ox} y1={oy} x2={ox} y2={oy + H + 10} stroke="var(--card-border)" strokeWidth="1" />
      <line x1={ox} y1={oy + H} x2={ox + W + 10} y2={oy + H} stroke="var(--card-border)" strokeWidth="1" />
      <line x1={scaleX(var95_x)} y1={oy} x2={scaleX(var95_x)} y2={oy + H} stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" />
      <line x1={scaleX(var99_x)} y1={oy} x2={scaleX(var99_x)} y2={oy + H} stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x={scaleX(var95_x)} y={oy - 4} textAnchor="middle" fill="#f97316" fontSize="8">VaR 95%</text>
      <text x={scaleX(var95_x)} y={oy + H + 12} textAnchor="middle" fill="#f97316" fontSize="7.5">-1.645σ</text>
      <text x={scaleX(var99_x)} y={oy - 4} textAnchor="middle" fill="#f97316" fontSize="8">VaR 99%</text>
      <text x={scaleX(var99_x)} y={oy + H + 12} textAnchor="middle" fill="#f97316" fontSize="7.5">-2.326σ</text>
      <text x={scaleX(0)} y={oy + H + 12} textAnchor="middle" fill="#fb923c" fontSize="7.5">0</text>
      <rect x={380} y={25} width={155} height={50} fill="var(--bg-primary)" rx="5" />
      <text x={388} y={40} fill="#fb923c" fontSize="8.5" fontWeight="700">VaR vs CVaR (ES)</text>
      <text x={388} y={54} fill="#f97316" fontSize="8">VaR 95%: -1.65% /dia</text>
      <text x={388} y={66} fill="#f97316" fontSize="8">CVaR 95%: -2.06% /dia</text>
      <text x={388} y={78} fill="#fb923c" fontSize="7.5">(media da cauda)</text>
      <text x={280} y={165} textAnchor="middle" fill="#fb923c" fontSize="9">CVaR (Expected Shortfall) = media das perdas alem do VaR. FRTB Basel IV: CVaR 97.5% substitui VaR 99% no IMCC.</text>
      <text x={280} y={175} textAnchor="middle" fill="#fb923c" fontSize="9">VaR historico: simula P&L com retornos passados (250 dias). VaR Monte Carlo: simula 100k cenarios de preco.</text>
      <text x={280} y={185} textAnchor="middle" fill="#fb923c" fontSize="8.5">Backtesting: exceeding VaR 99% mais de 4x em 250 dias = "red zone" BIS = capital surcharge adicional.</text>
    </svg>
  );
}

function FRTBSvg() {
  const books = [
    { name: 'Banking Book (IRRBB)', items: ['Loans e deposits', 'HTM securities', 'IFRS 9 impairment', 'NII sensitivity'], color: '#f97316', x: 28 },
    { name: 'Trading Book (FRTB)', items: ['Mark-to-market daily', 'IMA: ES 97.5% 10d', 'SA: sensitivities-based', 'DRC + RRAO charges'], color: '#f97316', x: 200 },
    { name: 'P&L Attribution', items: ['Hypothetical PnL', 'Risk-theoretical PnL', 'Unexplained PnL', 'IMA approval criteria'], color: '#f97316', x: 372 },
  ];
  return (
    <svg viewBox="0 0 560 175" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="175" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={14} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">FRTB Basel IV — Fundamental Review of the Trading Book (2025)</text>
      {books.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={22} width={155} height={118} fill={b.color} rx="7" opacity="0.12" />
          <rect x={b.x} y={22} width={155} height={118} fill="none" stroke={b.color} strokeWidth="1.5" rx="7" />
          <text x={b.x + 77} y={38} textAnchor="middle" fill={b.color} fontSize="9" fontWeight="700">{b.name}</text>
          <line x1={b.x + 10} y1={44} x2={b.x + 145} y2={44} stroke={b.color} strokeWidth="0.7" opacity="0.4" />
          {b.items.map((item, j) => (
            <text key={j} x={b.x + 77} y={57 + j * 18} textAnchor="middle" fill="#fb923c" fontSize="8">{item}</text>
          ))}
        </g>
      ))}
      <text x={280} y={152} textAnchor="middle" fill="#fb923c" fontSize="9">FRTB implementacao: Jan 2025 (EU CRR3). IMA = Internal Models Approach (aprovacao regulatoria necessaria).</text>
      <text x={280} y={165} textAnchor="middle" fill="#fb923c" fontSize="8.5">SA = Standardised Approach: obrigatorio como floor (72.5% output floor Basel IV). XVA: CVA/DVA/FVA/MVA para OTC derivatives.</text>
    </svg>
  );
}

export default function FIN8() {
  const mod = modules[7];
  return (
    <div style={S.page}>
      <Link to="/fintech" style={S.back}>← FinTech & Finance</Link>
      <div style={S.badge}>MÓDULO 08</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Black-Scholes — Pricing de Opcoes</h2>
        <div style={S.highlight}>
          <strong>A formula de Black-Scholes (1973)</strong> permite calcular o preco teorico de uma opcao europeia a partir de cinco parametros: S (preco spot do ativo subjacente), K (strike price), T (tempo ate expirar em anos), r (taxa sem risco) e sigma (volatilidade implicita). Os valores intermedios d1 e d2 sao calculados como: d1 igual a (logaritmo natural de S dividido por K, mais (r mais metade de sigma ao quadrado) multiplicado por T) dividido por (sigma multiplicado pela raiz quadrada de T); d2 igual a d1 menos sigma multiplicado pela raiz quadrada de T. O preco de uma call é S multiplicado por N(d1) menos K multiplicado por e elevado a menos r vezes T, multiplicado por N(d2), onde N é a funcao de distribuicao acumulada normal.
        </div>
        <p style={S.p}><strong>Limitacoes criticas do modelo:</strong> Black-Scholes assume distribuicao log-normal dos retornos com volatilidade constante — uma simplificacao que o mercado real viola consistentemente. O <strong>volatility smile ou skew</strong> mostra que a volatilidade implicita (IV) extraida dos precos de mercado varia com o strike e com a maturidade, formando uma superficie tridimensional em vez de uma constante. Eventos extremos (crashes) ocorrem com frequencia muito superior ao previsto pela distribuicao normal — o modelo de Merton adiciona um processo de Poisson para capturar jumps descontinuos. Na pratica profissional, Black-Scholes funciona como uma <strong>lingua comum</strong> para comunicar precos em unidades de IV, nao como modelo de preco verdadeiro.</p>
        <p style={S.p}><strong>Volatilidade implicita e o processo inverso:</strong> Dado o preco de mercado de uma opcao, é possivel inverter numericamente a formula Black-Scholes para obter a volatilidade implicita (IV) correspondente — o processo é denominado implied volatility extraction e usa metodos de root-finding como Brent ou Newton-Raphson. Este processo é executado em tempo real por market makers para construir a IV surface completa. Um exemplo pratico: para uma call AAPL com S igual a 150, K igual a 155, 30 dias para expirar e taxa sem risco de 5%, com sigma de 25%, o preco teorico seria aproximadamente $3.20, com Delta de 0.41 e Theta de -$0.05 por dia.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Greeks — Gestao de Risco de Opcoes</h2>
        <div style={S.diagram}><GreeksSVG /></div>
        <div style={S.highlight}>
          <strong>Delta-neutral hedging:</strong> Um market maker que vende 100 calls com Delta de 0.41 fica long 41 deltas — para neutralizar, compra 41 acoes do subjacente. Este hedge é dinamico: à medida que o preco do subjacente muda, o Delta da opcao muda (devido ao Gamma), exigindo rebalanceamento continuo. <strong>Gamma scalping</strong> é a estrategia de comprar opcoes ATM (onde Gamma é maximo), manter o portfolio delta-neutral via hedge dinamico, e lucrar com movimentos grandes do subjacente — o P&L de um move de 1% é aproximadamente metade do Gamma multiplicado pelo quadrado do move absoluto multiplicado pelo notional.
        </div>
        <p style={S.p}><strong>Gestao de um book de opcoes</strong> requer monitorizar o perfil global de greeks do portfolio. Uma posicao long em 100 calls e short em 50 puts pode ter Delta positivo (exposicao direccional ao subjacente), Gamma positivo (lucra com grandes moves), Theta negativo (perde valor com o passar do tempo) e Vega positivo (beneficia com aumento de volatilidade implicita). O objetivo do desk é manter os greeks dentro de limites de risco predefinidos — por exemplo, Vega nao pode exceder 1 milhao de dolares por ponto de IV, Delta nao pode exceder 500k dolares de exposicao. <strong>Vega trading</strong> é comprar straddles (call + put ATM) antes de resultados trimestrais, apostando em que a IV sobe (earning play) independentemente da direccao do preco.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. VaR e CVaR — Medicao de Risco de Mercado</h2>
        <div style={S.diagram}><VaRDistributionSVG /></div>
        <div style={S.highlight}>
          <strong>Value-at-Risk (VaR)</strong> responde à pergunta: qual a perda maxima esperada com 99% de confianca num horizonte de 1 dia? Para uma distribuicao normal com media diaria de 0.05% e desvio padrao de 1%, o VaR 99% é aproximadamente 2.27% (calculado como media menos 2.326 desvios padrao). Existem tres metodologias principais: VaR historico (usa os retornos dos ultimos 250 dias diretamente, sem assumir distribuicao), VaR parametrico (assume normalidade, mais rapido mas subestima caudas) e VaR Monte Carlo (simula 100.000 cenarios de preco, mais preciso mas computacionalmente intensivo).
        </div>
        <p style={S.p}><strong>CVaR (Expected Shortfall)</strong> é a media das perdas que excedem o VaR — responde a "quando as coisas correm mal para alem do VaR, quao mau fica?". Para VaR 95% de -1.65%/dia, o CVaR 95% tipico é cerca de -2.06%/dia. O CVaR é considerado uma medida de risco coerente (satisfaz as propriedades de sub-aditividade, homogeneidade, monotonicidade e invariancia a translacao), enquanto o VaR nao é sub-aditivo em geral. <strong>Basel FRTB</strong> substituiu o VaR 99% pelo Expected Shortfall 97.5% com horizontes de liquidez diferenciados: 10 dias para equities liquidas, 20 dias para credito investment grade, e 60 dias para credito high yield.</p>
        <p style={S.p}><strong>Backtesting obrigatorio:</strong> O teste de Kupiec verifica se o numero de excecoes observadas é estatisticamente consistente com o nivel de confianca declarado. Para VaR 99% num horizonte de 250 dias, esperam-se 2 a 3 excecoes. O BIS (Bank for International Settlements) define tres zonas: verde (0 a 4 excecoes — modelo adequado), amarela (5 a 9 excecoes — investigacao necessaria) e vermelha (10 ou mais excecoes — surcharge de capital adicional). O stressed VaR, exigido por Basel II.5, é calculado usando um periodo de stress historico como a crise de 2008 ou o crash de COVID em marco de 2020.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. FRTB Basel IV — Regulatory Capital</h2>
        <div style={S.diagram}><FRTBSvg /></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.9rem' }}>
          <div style={S.highlight}>
            <strong>Internal Models Approach (IMA):</strong> Exige aprovacao regulatoria por mesa de trading. A metrica central é o Expected Shortfall a 97.5% (substituindo o VaR 99% de Basel II). Os horizontes de liquidez variam por classe de ativo: 10 dias para equities, 20 dias para credito IG, 60 dias para credito HY. O P&L Attribution test exige que a correlacao entre o Hypothetical P&L (baseado em posicoes reais) e o Risk-Theoretical P&L (calculado pelo modelo de risco) seja superior a 0.80 — caso contrario, a mesa perde a aprovacao IMA e recorre ao Standardised Approach, que é tipicamente mais conservador.
          </div>
          <div style={S.highlight}>
            <strong>XVA — Valuation Adjustments:</strong> O CVA (Credit Valuation Adjustment) é o ajustamento ao mark-to-market de um derivado OTC pelo risco de default da contraparte — calculado como o valor esperado da perda em caso de default, pesado pela probabilidade de default. O DVA é o beneficio simetrico do proprio risco de default do banco. O FVA captura o custo de financiar colateral nao postado (uncollateralized trades). O MVA é o custo do Initial Margin que os bancos passaram a ter de postar sob SIMM/ISDA apos as reformas pos-2008. Um desk XVA tipico de banco europeu gere ajustamentos entre 50 e 500 milhoes de dolares em carteira.
          </div>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Stress Testing e Cenarios</h2>
        <div style={S.highlight}>
          <strong>Stress testing historico</strong> aplica choques de cenarios reais ao portfolio atual para estimar perdas potenciais. Os tres cenarios de referencia da industria sao: GFC 2008 (colapso Lehman Brothers — equities -45%, credit spreads +500bp, rates -200bp, VIX +40 pontos), COVID 2020 (crash de marco — equities -34%, rates -150bp, VIX +55 pontos em dois dias) e Rate Shock 2022 (ciclo de subidas Fed — equities -20%, credit spreads +200bp, rates +400bp em 12 meses, crise SVB). Para um portfolio de $380M tipico, o cenario GFC geraria perdas de aproximadamente $80M a $100M dependendo da composicao.
        </div>
        <p style={S.p}><strong>Reverse stress testing</strong> inverte a logica: em vez de aplicar cenarios predefinidos, procura qual o cenario que causaria uma perda que tornaria o banco inviavel (por exemplo, perda superior a 15% do capital). Este exercicio, obrigatorio sob ICAAP, forca os gestores a pensar em riscos idiossincraticos que os cenarios historicos nao capturam. O Adverse Scenario do EBA Stress Test 2023 (70 bancos europeus) previa queda de GDP de -6%, subida do desemprego em +6.1 pontos percentuais, e queda de real estate de -21%. O racio CET1 agregado caiu de 15% para 10.4% neste cenario adverso, demonstrando resiliencia do sistema europeu.</p>
        <div style={S.note}>ICAAP (Internal Capital Adequacy Assessment Process): bancos devem demonstrar que tem capital suficiente sob cenarios de stress proprios. EBA 2023 stress test: 70 bancos EU. Adverse scenario: GDP -6%, desemprego +6.1%, real estate -21%. CET1 ratio agregado caiu de 15% para 10.4% no adverse.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Black-Scholes — Pricing de Opcoes</strong> — Black-Scholes assume log-normal returns e volatilidade constante para derivar o preço de opções europeias: C = S·N(d₁) - K·e^(-rT)·N(d₂); em prática, o volatility smile viola a hipótese de volatilidade constante — modelos de vol estocástica (Heston, SABR) corrigem isto.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Greeks — Gestao de Risco de Opcoes</strong> — Delta (sensibilidade ao preço do activo), Gamma (convexidade), Vega (sensibilidade à volatilidade), Theta (decaimento temporal) e Rho (sensibilidade à taxa de juro) quantificam exposições; delta-hedging dinâmico neutraliza exposição ao preço rebalanceando o activo subjacente.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>VaR e CVaR — Medicao de Risco de Mercado</strong> — VaR (Value at Risk) estima a perda máxima com 95% ou 99% de confiança num horizonte dado; CVaR (Expected Shortfall) é a perda esperada além do VaR — mais sensível a caudas e exigido por Basel III para capital de mercado pois penaliza distribuições fat-tailed.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>FRTB Basel IV — Regulatory Capital</strong> — FRTB (Fundamental Review of the Trading Book) substituiu VaR por ES (Expected Shortfall) a 97.5%; introduziu Sensitivities Based Method (SBM) e Internal Model Approach (IMA) com P&L attribution tests rigorosos — aumentou capital regulatório de trading em 40–100% para grandes bancos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Stress Testing e Cenarios</strong> — stress testing aplica cenários históricos (2008, COVID) e hipotéticos (crash cripto, subida de 300bp de taxas) ao portfólio para estimar perdas em cauda; reverse stress testing identifica que cenário causaria falência — exigido por reguladores para planos de recuperação.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
