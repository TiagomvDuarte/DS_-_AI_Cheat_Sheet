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

function OrderBookSVG() {
  const bids = [
    { price: 149.95, size: 2400 },
    { price: 149.90, size: 5100 },
    { price: 149.85, size: 8300 },
    { price: 149.80, size: 12000 },
    { price: 149.75, size: 15600 },
  ];
  const asks = [
    { price: 150.00, size: 1800 },
    { price: 150.05, size: 4200 },
    { price: 150.10, size: 7500 },
    { price: 150.15, size: 11200 },
    { price: 150.20, size: 16800 },
  ];
  const maxSize = 16800;
  const barMax = 130;
  const rowH = 28;
  const rowStart = 64;
  return (
    <svg viewBox="0 0 560 230" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="230" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={15} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Limit Order Book (LOB) — AAPL NASDAQ Best 5 Levels</text>
      <text x={100} y={30} textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Qtd. BID</text>
      <text x={239} y={30} textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Preco BID ($)</text>
      <text x={321} y={30} textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Preco ASK ($)</text>
      <text x={460} y={30} textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Qtd. ASK</text>
      <line x1="8" y1="34" x2="552" y2="34" stroke="#f97316" strokeOpacity="0.3" strokeWidth="1" />
      <rect x={210} y={38} width={140} height={20} fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="1" rx="4" />
      <text x={280} y={52} textAnchor="middle" fill="#f97316" fontSize="8.5" fontWeight="700">Spread: $0.05 (3.3 bps)</text>
      {bids.map((b, i) => {
        const y = rowStart + i * rowH;
        const bw = (b.size / maxSize) * barMax;
        return (
          <g key={i}>
            <rect x={8} y={y} width={544} height={rowH - 2} fill={i === 0 ? 'rgba(249,115,22,0.08)' : (i % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-secondary)')} rx="2" />
            <rect x={195 - bw} y={y + 5} width={bw} height={rowH - 12} fill="#f97316" rx="2" opacity={0.15 + i * 0.07} />
            <text x={190} y={y + rowH - 9} textAnchor="end" fill="#e2e8f0" fontSize="9.5" fontWeight={i === 0 ? '700' : '400'}>{b.size.toLocaleString('pt-PT')}</text>
            <text x={272} y={y + rowH - 9} textAnchor="end" fill={i === 0 ? '#f97316' : '#e2e8f0'} fontSize="10" fontWeight={i === 0 ? '700' : '400'}>{b.price.toFixed(2)}</text>
          </g>
        );
      })}
      {asks.map((a, i) => {
        const y = rowStart + i * rowH;
        const bw = (a.size / maxSize) * barMax;
        return (
          <g key={i}>
            <rect x={365} y={y + 5} width={bw} height={rowH - 12} fill="#f97316" rx="2" opacity={0.15 + i * 0.07} />
            <text x={288} y={y + rowH - 9} fill={i === 0 ? '#f97316' : '#e2e8f0'} fontSize="10" fontWeight={i === 0 ? '700' : '400'}>{a.price.toFixed(2)}</text>
            <text x={370} y={y + rowH - 9} fill={i === 0 ? '#e2e8f0' : '#e2e8f0'} fontSize="9.5" fontWeight={i === 0 ? '700' : '400'}>{a.size.toLocaleString('pt-PT')}</text>
          </g>
        );
      })}
      <line x1={280} y1={58} x2={280} y2={218} stroke="#fb923c" strokeOpacity="0.4" strokeWidth="1" />
      <text x={280} y={225} textAnchor="middle" fill="#fb923c" fontSize="9">Mid = (149.95+150.00)/2 = 149.975. Market impact ~sigma*sqrt(Q/ADV). VPIN alto = traders informados presentes.</text>
    </svg>
  );
}

function BacktestMetricsSVG() {
  const strategies = [
    { name: 'Momentum 12-1', sharpe: 0.82, sortino: 1.15, maxDD: -18.4, cagr: 11.2, color: '#f97316' },
    { name: 'Mean Reversion', sharpe: 1.24, sortino: 1.89, maxDD: -9.8, cagr: 14.6, color: '#f97316' },
    { name: 'Pairs Trading', sharpe: 1.51, sortino: 2.24, maxDD: -7.2, cagr: 16.3, color: '#f97316' },
    { name: 'ML Signal (RF)', sharpe: 0.94, sortino: 1.38, maxDD: -14.1, cagr: 13.1, color: '#f97316' },
    { name: 'Buy & Hold SPY', sharpe: 0.61, sortino: 0.88, maxDD: -33.8, cagr: 10.8, color: '#fb923c' },
  ];
  const cols = ['Estrategia', 'Sharpe', 'Sortino', 'Max DD', 'CAGR'];
  const xs = [12, 200, 285, 360, 440];
  return (
    <svg viewBox="0 0 560 200" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="190" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Backtest — Metricas de Performance (2015-2024, S&amp;P 500 Universe)</text>
      {cols.map((c, i) => <text key={i} x={xs[i] + 3} y={30} fill="#fb923c" fontSize="9" fontWeight="700">{c}</text>)}
      <line x1="6" y1="35" x2="554" y2="35" stroke="var(--card-border)" strokeWidth="1" />
      {strategies.map((s, i) => {
        const y = 40 + i * 28;
        return (
          <g key={i}>
            <rect x="6" y={y} width="548" height="24" fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'var(--bg-primary)'} rx="3" />
            <rect x="6" y={y} width="4" height="24" fill={s.color} rx="2" />
            <text x={xs[0] + 10} y={y + 15} fill={s.color} fontSize="9.5" fontWeight="700">{s.name}</text>
            <text x={xs[1] + 3} y={y + 15} fill={s.sharpe >= 1.0 ? '#f97316' : '#f97316'} fontSize="10" fontWeight="700">{s.sharpe.toFixed(2)}</text>
            <text x={xs[2] + 3} y={y + 15} fill={s.sortino >= 1.5 ? '#f97316' : '#f97316'} fontSize="10" fontWeight="700">{s.sortino.toFixed(2)}</text>
            <text x={xs[3] + 3} y={y + 15} fill={Math.abs(s.maxDD) < 15 ? '#f97316' : '#f97316'} fontSize="10" fontWeight="700">{s.maxDD}%</text>
            <text x={xs[4] + 3} y={y + 15} fill="#e2e8f0" fontSize="10" fontWeight="700">{s.cagr}%</text>
          </g>
        );
      })}
      <text x={280} y={193} textAnchor="middle" fill="#fb923c" fontSize="9">Backtest sem transaction costs. Sharpe anualizado. Max DD = drawdown maximo. CAGR = Compound Annual Growth Rate.</text>
    </svg>
  );
}

function ExecutionAlgoSVG() {
  const algos = [
    { name: 'VWAP', full: 'Volume-Weighted Average Price', use: 'Ordens grandes, impacto minimo', formula: 'VWAP = SUM(P*V) / SUM(V)', color: '#f97316' },
    { name: 'TWAP', full: 'Time-Weighted Average Price', use: 'Execucao uniforme no tempo', formula: 'Divide ordem em N slices iguais', color: '#f97316' },
    { name: 'IS', full: 'Implementation Shortfall', use: 'Minimiza custo vs. decisao', formula: 'IS = Paper P&L - Real P&L', color: '#f97316' },
    { name: 'POV', full: 'Percentage of Volume', use: 'Participar % do volume de mercado', formula: 'Qty[t] = pct * Volume[t]', color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 190" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="180" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Execution Algorithms — Comparacao de Estrategias</text>
      {algos.map((a, i) => {
        const y = 26 + i * 37;
        return (
          <g key={i}>
            <rect x="8" y={y} width="544" height="32" fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'var(--bg-primary)'} rx="4" />
            <rect x="8" y={y} width="5" height="32" fill={a.color} rx="2" />
            <text x={22} y={y + 13} fill={a.color} fontSize="10.5" fontWeight="700">{a.name}</text>
            <text x={22} y={y + 26} fill="#fb923c" fontSize="8.5">{a.full}</text>
            <text x={195} y={y + 13} fill="#fb923c" fontSize="9">{a.use}</text>
            <text x={195} y={y + 26} fill="#fb923c" fontSize="8.5" fontStyle="italic">{a.formula}</text>
          </g>
        );
      })}
      <text x={280} y={184} textAnchor="middle" fill="#fb923c" fontSize="9">Transaction Cost Analysis (TCA): slippage + market impact + spread cost + fees. Tipico: 5-30 bps por trade.</text>
    </svg>
  );
}

function PnLCurveSVG() {
  const returns = [0, 2.1, 1.8, -0.9, 3.2, 2.8, -1.5, 4.1, 3.7, -2.2, 5.0, 4.6, -0.8, 6.2, 5.8, -3.1, 7.4, 6.9, -1.2, 8.8, 8.3, -4.5, 10.1, 9.6, 8.9];
  const benchmark = [0, 1.5, 1.2, -1.8, 2.0, 1.6, -2.5, 2.8, 2.3, -4.1, 3.2, 2.8, -3.5, 4.0, 3.5, -6.2, 4.8, 4.2, -5.0, 5.5, 4.8, -8.3, 6.2, 5.6, 4.8];
  const W = 500, H = 130, ox = 28, oy = 20, chartH = H - 30;
  const scaleX = (i) => ox + (i / (returns.length - 1)) * W;
  const minV = -10, maxV = 12;
  const scaleY = (v) => oy + chartH - ((v - minV) / (maxV - minV)) * chartH;
  const pathStrategy = returns.map((v, i) => `${i === 0 ? 'M' : 'L'}${scaleX(i).toFixed(1)},${scaleY(v).toFixed(1)}`).join(' ');
  const pathBenchmark = benchmark.map((v, i) => `${i === 0 ? 'M' : 'L'}${scaleX(i).toFixed(1)},${scaleY(v).toFixed(1)}`).join(' ');
  return (
    <svg viewBox="0 0 560 165" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="155" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">P&amp;L Curva — Pairs Trading vs. S&amp;P 500 (25 meses)</text>
      <line x1={ox} y1={oy} x2={ox} y2={oy + chartH} stroke="var(--card-border)" strokeWidth="1" />
      <line x1={ox} y1={oy + chartH} x2={ox + W} y2={oy + chartH} stroke="var(--card-border)" strokeWidth="1" />
      <line x1={ox} y1={scaleY(0)} x2={ox + W} y2={scaleY(0)} stroke="#f97316" strokeDasharray="4,3" strokeWidth="0.8" strokeOpacity="0.4" />
      <path d={pathBenchmark} fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="6,3" />
      <path d={pathStrategy} fill="none" stroke="#f97316" strokeWidth="2.5" />
      <text x={ox + W - 5} y={scaleY(returns[returns.length - 1]) - 5} textAnchor="end" fill="#f97316" fontSize="9" fontWeight="700">+{returns[returns.length - 1].toFixed(1)}%</text>
      <text x={ox + W - 5} y={scaleY(benchmark[benchmark.length - 1]) + 14} textAnchor="end" fill="#fbbf24" fontSize="9">+{benchmark[benchmark.length - 1].toFixed(1)}%</text>
      <text x={ox + 5} y={oy + chartH + 14} fill="var(--text-secondary)" fontSize="8">T=0</text>
      <text x={ox + W} y={oy + chartH + 14} textAnchor="end" fill="var(--text-secondary)" fontSize="8">T=24m</text>
      <rect x={200} y={135} width={14} height={3} fill="#f97316" />
      <text x={218} y={142} fill="#f97316" fontSize="8" fontWeight="700">Pairs Strategy</text>
      <line x1={295} y1={137} x2={309} y2={137} stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4,2" />
      <text x={313} y={142} fill="#fbbf24" fontSize="8">S&amp;P 500</text>
      <text x={280} y={160} textAnchor="middle" fill="#fb923c" fontSize="8">Sharpe 1.51 | Max DD -7.2% | Alpha 5.5% anualizado | Beta 0.18 (market neutral)</text>
    </svg>
  );
}

export default function FIN2() {
  const mod = modules[1];
  return (
    <div style={S.page}>
      <Link to="/fintech" style={S.back}>← FinTech & Finance</Link>
      <div style={S.badge}>MÓDULO 02</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Market Microstructure — Limit Order Book</h2>
        <div style={S.diagram}><OrderBookSVG /></div>
        <div style={S.highlight}>
          O <strong>Limit Order Book (LOB)</strong> e a estrutura de dados central dos mercados eletronicos. Contem todas as ordens limite pendentes organizadas por preco. O <strong>bid-ask spread</strong> (diferenca entre melhor compra e melhor venda) e o custo minimo de uma transacao imediata. Para AAPL no NASDAQ, o spread tipico e 1 cent ($0.01 = 0.007%). O <strong>market impact</strong> de uma ordem grande e proporcional a raiz quadrada da quantidade: MI aprox. sigma vezes raiz quadrada de Q dividido pelo ADV, com o sinal da ordem (modelo de Almgren-Chriss).
        </div>
        <p style={S.p}><strong>Tipos de ordens:</strong> Market Order (execucao imediata ao melhor preco disponivel), Limit Order (execucao apenas ao preco especificado ou melhor), Stop Order (torna-se market quando preco atinge trigger), Iceberg Order (quantidade total escondida, apenas "peak" visivel no LOB). <strong>Order flow toxicity</strong> medida pelo VPIN (Volume-synchronized Probability of Informed Trading): VPIN alto significa presenca de traders informados e maior risco de adverse selection para os market makers.</p>
        <div style={S.note}>
          <strong>Microstructure noise:</strong> Em alta frequencia, os precos observados diferem do "preco eficiente" pela presenca de bounce bid-ask, inventory risk dos market makers, e latencia. A decomposicao de Roll (1984) estima o spread implicito a partir da autocovariancia das variacoes de preco: spread igual a 2 vezes a raiz quadrada do negativo da covariancia entre delta_p[t] e delta_p[t-1]. O modelo de Glosten-Milgrom (1985) decompoe o spread em componente de selecao adversa e custo de inventario.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Estrategias Quantitativas — Formulas e Logica</h2>
        <div style={S.grid2}>
          {[
            { title: 'Momentum (12-1)', color: '#f97316', content: 'Compra os top-decile performers dos ultimos 12 meses excluindo o ultimo mes (reversao de curto prazo). Fama-French (1996): fator momentum explica retornos cross-sectionais. Formula: r[t-12, t-1]. Implementacao: sort mensalmente por retorno acumulado.' },
            { title: 'Mean Reversion', color: '#f97316', content: 'Acao que desviou k sigma da media historica tende a reverter. Ornstein-Uhlenbeck process: dX = theta*(mu - X)*dt + sigma*dW. Half-life = ln(2)/theta. Sinal: z-score = (P - SMA) / std > 2 => short; < -2 => long.' },
            { title: 'Statistical Arbitrage', color: '#f97316', content: 'Explorar desalinhamentos de preco entre ativos relacionados. Pairs: residual = log(P_A) - beta*log(P_B) deve ser estacionario (teste ADF). Engle-Granger cointegration: p-value < 0.05. Trade o spread quando z-score > 2 sigma.' },
            { title: 'Factor Investing', color: '#f97316', content: 'Fama-French 5-Factor: r = alpha + beta_mkt*MKT + beta_smb*SMB + beta_hml*HML + beta_rmw*RMW + beta_cma*CMA + eps. Cada fator e zero-cost portfolio. AQR: fator Quality (QMJ) adiciona ~2% alpha anualizado.' },
          ].map((s, i) => (
            <div key={i} style={{ ...S.card, borderLeft: `3px solid ${s.color}` }}>
              <div style={{ fontWeight: 700, color: s.color, marginBottom: '0.5rem' }}>{s.title}</div>
              <div style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{s.content}</div>
            </div>
          ))}
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Execution Algorithms — VWAP, TWAP, IS</h2>
        <div style={S.diagram}><ExecutionAlgoSVG /></div>
        <div style={S.highlight}>
          <strong>VWAP Benchmark:</strong> O VWAP acumulado ate um instante t calcula-se como a soma de preco vezes volume de cada transacao dividida pelo volume total ate esse momento. Um algoritmo VWAP divide a ordem total em child orders proporcionais ao volume historico por intervalo. Se o volume historico da hora 10h-11h representa 8% do dia, o algo envia 8% da ordem nesse periodo. O <strong>slippage vs. VWAP</strong> e a metrica de TCA (Transaction Cost Analysis) mais usada em buy-side para avaliar a qualidade de execucao.
        </div>
        <p style={S.p}><strong>Implementation Shortfall (Almgren-Chriss 2000):</strong> O IS mede a diferenca entre o preco de decisao e o preco medio de execucao multiplicado pela quantidade total. Decompoe-se em tres componentes: Timing Risk (o preco move-se enquanto se executa a ordem ao longo do tempo), Market Impact (o proprio trading da ordem move o preco de mercado de forma permanente e temporaria), e Opportunity Cost (parte da ordem que nao chega a ser executada). O modelo parametrizado expressa o IS esperado como a soma de um termo linear proporcional a Q dividido pelo ADV (impacto permanente, controlado pelo parametro eta) e um termo quadratico (impacto temporario, controlado pelo parametro lambda), ambos escalados pela volatilidade diaria sigma.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Pairs Trading — Resultados de Backtest</h2>
        <div style={S.diagram}><PnLCurveSVG /></div>
        <div style={S.highlight}>
          <strong>Metricas de performance obrigatorias:</strong> O Sharpe Ratio calcula-se dividindo o retorno em excesso da estrategia (retorno da carteira menos a taxa isenta de risco) pelo desvio padrao dos retornos, anualizado multiplicando por raiz quadrada de 252 (dias de trading). O Sortino Ratio e similar mas penaliza apenas a volatilidade negativa (downside deviation), sendo mais adequado para estrategias assimericas. O Calmar Ratio divide o CAGR pelo valor absoluto do Maximum Drawdown. O Maximum Drawdown mede a queda maxima de pico a vale em termos percentuais. O Profit Factor e o quociente entre lucro bruto total e perda bruta total. A Hit Rate e a percentagem de trades com resultado positivo.
        </div>
        <div style={S.note}>
          <strong>Overfitting em backtesting:</strong> Bailey et al. (2016) demonstraram que com N trials independentes, a probabilidade de selecionar a melhor estrategia por acaso (Probability of Backtest Overfitting, PBO) aumenta rapidamente. A solucao passa por Walk-Forward Analysis, Out-of-Sample Testing reservando pelo menos 30% dos dados, e pelo Deflated Sharpe Ratio que ajusta para multiplas comparacoes. Uma regra pratica frequentemente citada: se o Sharpe in-sample for mais do dobro do Sharpe out-of-sample, a estrategia esta provavelmente sobreajustada aos dados historicos.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Execution Algorithms — Comparacao por Objetivo</h2>
        <div style={S.diagram}><BacktestMetricsSVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. Como Funciona o Pairs Trading com Cointegracao</h2>
        <div style={S.highlight}>
          O pairs trading estatistico assenta no conceito de <strong>cointegracao</strong>: dois ativos sao cointegrados se existir uma combinacao linear dos seus logaritmos de preco que seja estacionaria, ou seja, que reverta para uma media ao longo do tempo. O teste de Engle-Granger verifica esta propriedade em duas fases: primeiro estima o hedge ratio beta por regressao OLS do logaritmo do preco A sobre o logaritmo do preco B; depois testa se o residuo (spread = log(P_A) - beta * log(P_B)) e estacionario com o teste ADF (Augmented Dickey-Fuller). Um p-value abaixo de 0.05 no teste ADF confirma cointegracao. A <strong>half-life</strong> da reversao — o tempo esperado para o spread percorrer metade do caminho de volta a media — calcula-se como ln(2) dividido pelo negativo do coeficiente da regressao do spread sobre o seu valor defasado um periodo.
        </div>
        <p style={S.p}>O gerador de sinais calcula o <strong>z-score</strong> do spread numa janela rolante: subtrai a media movel do spread e divide pelo desvio padrao movel, tipicamente com lookback de 60 dias. Quando o z-score supera um threshold de entrada (normalmente 2.0 sigma), o trader abre uma posicao — short no spread se o z-score for positivo (spread acima da media, espera-se reversao para baixo), long no spread se for negativo. A posicao fecha quando o z-score reverte para um threshold de saida (normalmente 0.5 sigma), ou e cortada por stop-loss quando o z-score atinge um nivel extremo (normalmente 3.5 sigma), sinalizando que a relacao de cointegracao pode ter quebrado. Pares classicos com forte historico de cointegracao incluem bancos de investimento do mesmo segmento (Goldman Sachs e Morgan Stanley), petrolíferas integradas, ou ETFs que replicam indices similares.</p>
        <p style={S.p}>O motor de backtest calcula os retornos diarios da estrategia combinando o retorno do ativo A com o retorno do ativo B ponderado pelo hedge ratio beta, aplicado com um dia de delay (posicao do dia anterior determina o retorno de hoje). Os custos de transacao — tipicamente 5 basis points por lado em acoes liquidas dos EUA — sao subtraidos cada vez que a posicao muda, calculados como a variacao absoluta da posicao multiplicada pela taxa. As metricas finais incluem o retorno anualizado (media diaria vezes 252), a volatilidade anualizada (desvio padrao diario vezes raiz de 252), o Sharpe Ratio, o Sortino Ratio, o Maximum Drawdown e o numero total de trades. Um par como Goldman Sachs e Morgan Stanley com dados de 5 anos tipicamente apresenta p-value de cointegracao inferior a 0.01 e half-life de 8 a 15 dias de negociacao.</p>
        <div style={S.note}>
          <strong>Riscos do pairs trading:</strong> O maior risco e a quebra da relacao de cointegracao por um evento estrutural — fusao, mudanca de negocio, diferente exposicao a uma crise setorial. Por isso e importante retestar a cointegracao periodicamente (mensalmente ou trimestralmente) e ter stop-losses baseados no z-score extremo. O regime de alta correlacao pos-2020 em acoes tecnologicas reduziu oportunidades de pairs trading estatistico em favor de estrategias de momentum setorial.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>7. Benchmarks Algorithmic Trading</h2>
        <div style={S.grid3}>
          {[
            { title: 'Renaissance Medallion', stat: 'Sharpe ~2.5+', detail: 'Fundo mais rentavel da historia. 66% retorno bruto, 39% liquido (1988-2018). $10B AUM, fechado a externos. Baseado em sinais de curto prazo e ML proprietario.' },
            { title: 'Two Sigma', stat: '$60B AUM', detail: 'ML-driven: NLP em news, dados alternativos (satelite, credito, geolocaliz.). Sharpe ~1.5-2.0 historico. 2000+ data scientists e engenheiros.' },
            { title: 'Citadel Securities', stat: '27% vol EUA', detail: 'Market maker responsavel por ~27% do volume de retail equity EUA. HFT com latencia sub-microsegundo. $7B de receitas em 2022.' },
            { title: 'AQR Capital', stat: '$100B+ AUM', detail: 'Factor investing sistematico: Momentum, Value, Quality, Carry. Fama-French aplicado em escala global (40+ paises). CAGR 8-12% historico.' },
            { title: 'D.E. Shaw', stat: '$60B AUM', detail: 'Pioneiro em quant desde 1988. Estrategias: market neutral, statistical arb, macro sistematico. Sharpe historico ~1.8. Primeiro a usar ML em financas sistematicamente.' },
            { title: 'IBKR Smart Routing', stat: 'Price improvement 94%', detail: 'IEX, EDGX, NYSE, NASDAQ. Smart order routing com otimizacao de execution quality. 94% das ordens recebem price improvement vs. NBBO.' },
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
          <h2 style={S.h2}>8. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Market Microstructure — Limit Order Book</strong> — o Limit Order Book (LOB) agrega ordens de compra (bids) e venda (asks) por preço; o spread bid-ask é a remuneração do market maker; imbalance entre bids e asks é um sinal preditivo de movimento de preço a curto prazo.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Estrategias Quantitativas — Formulas e Logica</strong> — mean reversion explora desvios de um preço de equilíbrio histórico; momentum segue tendências persistentes; statistical arbitrage explora co-integração entre pares ou cestas de activos — cada estratégia tem diferentes perfis de risco, Sharpe e drawdown.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Execution Algorithms — VWAP, TWAP, IS</strong> — VWAP (Volume Weighted Average Price) executa proporcionalmente ao volume histórico intra-dia; TWAP divide a ordem em parcelas iguais no tempo; IS (Implementation Shortfall) minimiza o custo de execução vs. o preço de decisão — escolha depende do objectivo e do tamanho da ordem.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Pairs Trading — Resultados de Backtest</strong> — pairs trading testa co-integração (teste Engle-Granger) entre dois activos e entra quando o z-score do spread excede ±2σ; backtests em pares sector-específicos (GS vs. MS) mostram Sharpe &gt;1.5 em períodos de baixa volatilidade mas é sensível a structural breaks.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Execution Algorithms — Comparacao por Objetivo</strong> — TWAP minimiza market impact temporal; VWAP reduz slippage vs. benchmark de mercado; IS optimiza entre urgência e custo — algoritmos adaptativos (Almgren-Chriss) ajustam dinamicamente a taxa de execução em função da volatilidade e liquidez em tempo real.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Como Funciona o Pairs Trading com Cointegracao</strong> — passo 1: testar co-integração com Engle-Granger ou Johansen; passo 2: estimar relação de longo prazo (β); passo 3: calcular spread e z-score; passo 4: abrir posição long/short quando |z| &gt; 2; passo 5: fechar quando |z| &lt; 0.5 — simples mas altamente sensível à estacionariedade.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Benchmarks Algorithmic Trading</strong> — HFT (High Frequency Trading) representa 50–70% do volume das bolsas americanas; latência de execução em co-location é &lt;1μs; Sharpe anual de estratégias quant de referência (Renaissance Medallion) estima-se &gt;3 — dificilmente replicável por retail.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
