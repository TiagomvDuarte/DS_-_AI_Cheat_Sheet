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

function EfficientFrontierSVG() {
  const W = 460, H = 150, ox = 50, oy = 20;
  const frontier = [
    [4, 5.2], [5, 6.8], [6, 8.1], [7, 9.2], [8, 10.1], [9, 10.8], [10, 11.3],
    [11, 11.7], [12, 11.9], [13, 12.0], [14, 11.9], [15, 11.7],
  ];
  const minR = 3, maxR = 16, minRet = 4, maxRet = 13;
  const sx = (v) => ox + ((v - minR) / (maxR - minR)) * W;
  const sy = (v) => oy + H - ((v - minRet) / (maxRet - minRet)) * H;
  const path = frontier.map((p, i) => `${i === 0 ? 'M' : 'L'}${sx(p[0]).toFixed(1)},${sy(p[1]).toFixed(1)}`).join(' ');
  const assets = [
    { label: 'Bonds', r: 3.5, ret: 4.8, color: '#f97316' },
    { label: 'SPY', r: 14.5, ret: 10.2, color: '#f97316' },
    { label: 'Gold', r: 13, ret: 7.5, color: '#f97316' },
    { label: 'AAPL', r: 22, ret: 14.5, color: '#f97316' },
  ];
  const mvp = frontier[0];
  const tang = frontier[5];
  return (
    <svg viewBox="0 0 560 205" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="205" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={14} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Markowitz — Efficient Frontier e Capital Market Line</text>
      <line x1={sx(0)} y1={sy(3)} x2={sx(16)} y2={sy(13.2)} stroke="#f97316" strokeWidth="1.2" strokeDasharray="5,3" opacity="0.7" />
      <text x={sx(14)} y={sy(12.8) - 5} fill="#f97316" fontSize="8">CML</text>
      <path d={path} fill="none" stroke="#f97316" strokeWidth="2" />
      {assets.filter(a => a.r < 16).map((a, i) => (
        <g key={i}>
          <circle cx={sx(a.r)} cy={sy(a.ret)} r={5} fill={a.color} opacity="0.8" />
          <text x={sx(a.r) + 7} y={sy(a.ret) + 4} fill={a.color} fontSize="8">{a.label}</text>
        </g>
      ))}
      <circle cx={sx(mvp[0])} cy={sy(mvp[1])} r={6} fill="#f97316" stroke="#fff" strokeWidth="1.5" />
      <text x={sx(mvp[0]) + 8} y={sy(mvp[1]) + 4} fill="#f97316" fontSize="8">MVP</text>
      <circle cx={sx(tang[0])} cy={sy(tang[1])} r={6} fill="#f97316" stroke="#fff" strokeWidth="1.5" />
      <text x={sx(tang[0]) + 8} y={sy(tang[1]) + 4} fill="#f97316" fontSize="8">Tangency</text>
      <line x1={ox} y1={oy} x2={ox} y2={oy + H + 10} stroke="var(--card-border)" strokeWidth="1" />
      <line x1={ox} y1={oy + H} x2={ox + W + 10} y2={oy + H} stroke="var(--card-border)" strokeWidth="1" />
      <text x={ox + W / 2} y={oy + H + 20} textAnchor="middle" fill="#fb923c" fontSize="8">Risco (Volatilidade %)</text>
      <text x={14} y={oy + H / 2} fill="#fb923c" fontSize="8" transform={`rotate(-90,14,${oy + H / 2})`}>Return %</text>
      <text x={280} y={195} textAnchor="middle" fill="#fb923c" fontSize="8.5">MVP = Minimum Variance Portfolio. Tangency = max Sharpe. CML: E[R] = Rf + Sharpe*(sigma). Rf = 3% (10Y Treasury).</text>
    </svg>
  );
}

function FactorModelSVG() {
  const factors = [
    { name: 'Market (Mkt-RF)', desc: 'Excesso retorno mercado vs risk-free', premium: '+6.2% /ano', color: '#f97316' },
    { name: 'Size (SMB)', desc: 'Small minus Big — small caps outperform', premium: '+2.3% /ano', color: '#f97316' },
    { name: 'Value (HML)', desc: 'High minus Low — value vs growth stocks', premium: '+4.1% /ano', color: '#f97316' },
    { name: 'Profitability (RMW)', desc: 'Robust minus Weak operating profitability', premium: '+3.5% /ano', color: '#f97316' },
    { name: 'Investment (CMA)', desc: 'Conservative minus Aggressive investment', premium: '+2.9% /ano', color: '#f97316' },
    { name: 'Momentum (UMD)', desc: '12-1 month return momentum (Carhart 4th)', premium: '+5.4% /ano', color: '#f97316' },
  ];
  const rowH = 24;
  return (
    <svg viewBox="0 0 560 212" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="212" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={14} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Fama-French 5 Fatores + Momentum (Carhart) — Fontes de Alpha</text>
      {['Fator', 'Descricao', 'Premio Historico'].map((h, i) => (
        <text key={i} x={[10, 140, 430][i]} y={28} fill="#fb923c" fontSize="9" fontWeight="700">{h}</text>
      ))}
      <line x1="6" y1="33" x2="554" y2="33" stroke="var(--card-border)" strokeWidth="1" />
      {factors.map((f, i) => {
        const y = 37 + i * rowH;
        return (
          <g key={i}>
            <rect x="6" y={y} width="548" height={rowH - 2} fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'transparent'} rx="2" />
            <rect x="6" y={y} width="4" height={rowH - 2} fill={f.color} rx="1" />
            <text x={14} y={y + 14} fill={f.color} fontSize="9" fontWeight="700">{f.name}</text>
            <text x={142} y={y + 14} fill="#fb923c" fontSize="8.5">{f.desc}</text>
            <text x={432} y={y + 14} fill="#f97316" fontSize="9" fontWeight="700">{f.premium}</text>
          </g>
        );
      })}
      <text x={280} y={196} textAnchor="middle" fill="#fb923c" fontSize="9">
        <tspan x={280} dy="0">Dados: French Data Library (1926-2024). Premios nao sao garantidos no futuro.</tspan>
        <tspan x={280} dy="12">Crowding pode comprimir premios (QI-algotrading efeito).</tspan>
      </text>
    </svg>
  );
}

function RoboAdvisorSVG() {
  const steps = [
    { label: 'Onboarding', lines: ['Risk questionnaire', 'Time horizon', 'Tax bracket', 'ESG prefs'], color: '#f97316' },
    { label: 'Allocation', lines: ['BL model', 'Risk parity', 'Factor tilt', 'ESG screen'], color: '#f97316' },
    { label: 'Execution', lines: ['ETF selection', 'Fractional', 'Smart order', 'T+0 settle'], color: '#f97316' },
    { label: 'Monitor', lines: ['Daily drift', 'Threshold 5%', 'Tax harvest', 'Rebalance'], color: '#f97316' },
    { label: 'Report', lines: ['Net-of-fee', 'vs benchmark', 'ESG score', 'Tax report'], color: '#f97316' },
  ];
  const boxW = 96, boxH = 120, gap = 16, marginX = 16;
  const totalW = steps.length * boxW + (steps.length - 1) * gap + marginX * 2;
  return (
    <svg viewBox={`0 0 ${totalW} 178`} style={{ width: '100%', borderRadius: 8 }}>
      <rect width={totalW} height="178" fill="var(--bg-secondary)" rx="8" />
      <text x={totalW / 2} y={14} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Robo-Advisor — Pipeline de Gestao Automatizada de Portfolio</text>
      {steps.map((s, i) => {
        const x = marginX + i * (boxW + gap);
        const cx = x + boxW / 2;
        const arrowMid = 22 + boxH / 2;
        return (
          <g key={i}>
            <rect x={x} y={22} width={boxW} height={boxH} fill={s.color} rx="6" opacity="0.12" />
            <rect x={x} y={22} width={boxW} height={boxH} fill="none" stroke={s.color} strokeWidth="1.5" rx="6" />
            <text x={cx} y={37} textAnchor="middle" fill={s.color} fontSize="9.5" fontWeight="700">{s.label}</text>
            <line x1={x + 8} y1={43} x2={x + boxW - 8} y2={43} stroke={s.color} strokeWidth="0.8" opacity="0.4" />
            {s.lines.map((ln, j) => (
              <text key={j} x={cx} y={54 + j * 16} textAnchor="middle" fill="#fb923c" fontSize="8">{ln}</text>
            ))}
            {i < steps.length - 1 && (
              <g>
                <line x1={x + boxW} y1={arrowMid} x2={x + boxW + gap - 5} y2={arrowMid} stroke={s.color} strokeWidth="1.5" opacity="0.7" />
                <polygon points={`${x + boxW + gap - 6},${arrowMid - 4} ${x + boxW + gap},${arrowMid} ${x + boxW + gap - 6},${arrowMid + 4}`} fill={s.color} opacity="0.7" />
              </g>
            )}
          </g>
        );
      })}
      <text x={totalW / 2} y={156} textAnchor="middle" fill="#fb923c" fontSize="9">
        <tspan x={totalW / 2} dy="0">Betterment/Wealthfront: 0.25% AUM/ano vs advisor 1%+. AUM total robo-advisors: $2.5T+ (2024).</tspan>
        <tspan x={totalW / 2} dy="12">MiFID II: suitability assessment obrigatorio.</tspan>
      </text>
    </svg>
  );
}

export default function FIN7() {
  const mod = modules[6];
  return (
    <div style={S.page}>
      <Link to="/fintech" style={S.back}>← FinTech & Finance</Link>
      <div style={S.badge}>MÓDULO 07</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Markowitz MVO — Efficient Frontier</h2>
        <div style={S.diagram}><EfficientFrontierSVG /></div>
        <div style={S.highlight}>
          <strong>Modern Portfolio Theory (Markowitz 1952):</strong> Para N ativos, o portfolio otimo minimiza variancia dado um nivel de retorno esperado. A formula central é minimizar w transposto multiplicado pela matriz de covariancia Sigma multiplicado por w, sujeito a que w transposto multiplicado por mu seja igual ao retorno alvo e que a soma dos pesos seja igual a 1. <strong>Problema pratico:</strong> a matriz de covariancia N por N é estimada com erro — para 500 ativos sao 125.250 parametros a estimar com apenas alguns anos de dados historicos.
        </div>
        <p style={S.p}><strong>Solucoes para instabilidade numerica:</strong> O metodo de Ledoit-Wolf shrinkage regulariza a matriz de covariancia contraindo-a em direcao a uma estrutura mais simples (por exemplo, a identidade ou um modelo de factor unico), reduzindo drasticamente o erro de estimacao. Os modelos de factor (como o modelo de mercado CAPM ou os factores de Fama-French) reduzem a dimensao do problema de N por N para K por K, onde K é o numero de factores sistematicos, tipicamente 5 a 10. O modelo Black-Litterman, descrito na proxima seccao, vai ainda mais longe ao combinar o equilibrio de mercado com as views subjetivas do gestor.</p>
        <p style={S.p}><strong>Portfolios chave da fronteira:</strong> O Minimum Variance Portfolio (MVP) é o ponto de menor risco absoluto — util para investidores extremamente aversos ao risco. O portfolio de Tangency é o ponto onde a Capital Market Line (CML) toca a fronteira eficiente, maximizando o racio de Sharpe (retorno em excesso dividido pela volatilidade). A CML tem equacao E[R] igual a Rf mais Sharpe multiplicado por sigma, onde Rf é a taxa sem risco (tipicamente 3% para a treasury americana a 10 anos). Qualquer portfolio na CML acima do ponto de tangencia envolve alavancagem.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Black-Litterman — Combining Views with Equilibrium</h2>
        <div style={S.highlight}>
          <strong>Black-Litterman resolve 2 problemas fundamentais do MVO:</strong> Primeiro, portfolios MVO puro sao altamente concentrados e instáveis — pequenas mudancas nos inputs de retorno esperado geram grandes mudancas nos pesos otimos, o que é operacionalmente inviavel. Segundo, o gestor raramente tem views robustas sobre todos os N*(N-1)/2 pares de correlacoes entre ativos. O modelo BL parte do <strong>equilibrio CAPM</strong> — os pesos de mercado (market cap weights) implicam retornos esperados via reverse optimization: pi igual a delta multiplicado por Sigma multiplicado por w_mkt, onde delta é a aversao ao risco agregada do mercado (tipicamente 2.5).
        </div>
        <p style={S.p}><strong>Como funciona a mistura Bayesiana:</strong> O gestor exprime views através de uma matriz P (K linhas por N colunas, onde K é o numero de views), um vector Q com os retornos esperados de cada view, e uma matriz diagonal Omega que representa a incerteza em cada view. A formula posterior de BL combina o prior (retornos de equilibrio com incerteza tau vezes Sigma, onde tau tipicamente é 0.05) com a verosimilhanca das views. O resultado sao retornos posteriores mu_BL e uma covariancia posterior sigma_BL que incorpora a incerteza adicional das views.</p>
        <p style={S.p}><strong>Exemplo pratico:</strong> Um gestor com 4 ativos (Bonds, SPY, Tech, Value) pode exprimir apenas duas views — "acredito que SPY supera Bonds em 3% ao ano" e "Tech supera Value em 2%" — sem precisar de opiniao sobre todos os outros pares. Com alta confianca nas views (Omega pequeno), os pesos resultantes vao inclinar-se fortemente para SPY e Tech. Com baixa confianca, os pesos ficam proximos dos pesos de mercado. Esta propriedade torna BL o modelo de referencia em gestoras como Goldman Sachs Asset Management e Blackrock.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Factor Investing — Fama-French &amp; Smart Beta</h2>
        <div style={S.diagram}><FactorModelSVG /></div>
        <div style={S.highlight}>
          <strong>Factor decomposition:</strong> O retorno de qualquer portfolio pode ser decomposto como alpha mais a soma de betas multiplicados pelos premios de risco sistematicos. No modelo de 5 factores de Fama-French mais Momentum de Carhart, os seis factores sao: Mkt-RF (premio de mercado sobre a taxa sem risco, historicamente +6.2%/ano), SMB (Small Minus Big — small caps superam large caps em +2.3%/ano), HML (High Minus Low book-to-market — value supera growth em +4.1%/ano), RMW (Robust Minus Weak — empresas lucrativas superam +3.5%/ano), CMA (Conservative Minus Aggressive — empresas que investem menos superam +2.9%/ano) e UMD (Up Minus Down — momentum de 12 meses menos 1 mês, +5.4%/ano).
        </div>
        <p style={S.p}><strong>Smart Beta ETFs</strong> implementam exposicao sistematica a estes factores: o iShares MSCI Value ETF tita para HML, o Invesco S&P 500 Momentum ETF para UMD, e o Vanguard Small-Cap ETF para SMB. O AUM global em Smart Beta ultrapassou $1.7 trilioes em 2024. O principal risco é o <strong>factor crowding</strong> — quando demasiados investidores compram o mesmo fator simultaneamente, o premio comprime e a correlacao entre estrategias aumenta, gerando drawdowns sincronizados. A regressao de Fama-French permite calcular o alpha genuino de um gestor (o intercepto estatisticamente significativo apos controlar todos os factores) e o Information Ratio (alpha dividido pelo tracking error dos residuos).</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Robo-Advisors — Arquitetura e Regulamentacao</h2>
        <div style={S.diagram}><RoboAdvisorSVG /></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.9rem' }}>
          <div style={S.highlight}>
            <strong>Tax-Loss Harvesting (TLH):</strong> O robo-advisor vende automaticamente ativos em perda nao realizada para realizar a perda fiscal, substituindo imediatamente por um ativo altamente correlacionado (mas nao identico, para evitar a wash-sale rule americana que proibe recomprar o mesmo ativo em 30 dias). A Betterment estima +0.77% de retorno after-tax por ano para clientes em escaloes fiscais elevados. A tecnica mais sofisticada é direct indexing — replicar um index como o S&P 500 com as 500 acoes individualmente, permitindo TLH granular ao nivel de cada titulo.
          </div>
          <div style={S.highlight}>
            <strong>Rebalancing threshold:</strong> O sistema rebalanceia automaticamente quando algum ativo desvia mais de 5% do peso alvo, em vez de rebalancear por calendario fixo. Esta abordagem baseada em threshold reduz o turnover (e portanto custos e impostos) mantendo a exposicao de risco proxima do target. Sob MiFID II na Europa, os robo-advisors sao obrigados a emitir um KID (Key Information Document) por produto, realizar um suitability test ao cliente, e documentar best execution em cada ordem. O custo tipico de 0.25% AUM/ano compara com 1%+ de um advisor humano tradicional.
          </div>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Portfolio Construction — Risk Parity e HRP</h2>
        <div style={S.highlight}>
          <strong>Hierarchical Risk Parity (HRP, Lopez de Prado 2016):</strong> O HRP é uma alternativa ao MVO classico que evita completamente a inversao da matriz de covariancia — operacao numericamente instavel para portfolios grandes com N superior a 100 ativos. O algoritmo tem tres passos: primeiro, calcula uma matriz de distancia baseada em correlacao (distancia igual a raiz quadrada de (1 menos correlacao) dividido por 2); segundo, agrupa os ativos por hierarquia usando Ward linkage clustering, identificando clusters de ativos com comportamento similar; terceiro, aplica recursive bisection — divide recursivamente o portfolio em dois sub-clusters e aloca entre eles na proporcao inversa da sua variancia, de modo que cada cluster contribui igual em risco.
        </div>
        <p style={S.p}><strong>Comparacao com outras abordagens:</strong> O portfolio All Weather de Ray Dalio é um exemplo classico de risk parity: aproximadamente 30% em acoes, 40% em obrigacoes de longa duracao, 15% em obrigacoes intermedias, 7.5% em ouro e 7.5% em commodities. Esta alocacao é concebida para que cada classe de ativos contribua igualmente para o risco total em qualquer regime economico (crescimento ou recessao, inflacao ou deflacao). Em 2023, durante o rally de acoes, o All Weather retornou cerca de +18% versus +22% do MVO; mas em crises como 2020, o risk parity limitou as perdas a -21% contra -34% de um portfolio 100% acoes. O HRP supera sistematicamente o MVO em backtests out-of-sample porque nao sobre-ajusta os pesos a estimativas de retorno esperado ruidosas.</p>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Markowitz MVO — Efficient Frontier</strong> — MVO (Mean-Variance Optimization) encontra o portfólio de menor variância para cada nível de retorno esperado; a Efficient Frontier é o conjunto destes portfólios óptimos; na prática, a sensibilidade a pequenas mudanças nas estimativas de retorno torna MVO instável — motiva extensões robustas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Black-Litterman — Combining Views with Equilibrium</strong> — Black-Litterman parte dos retornos de equilíbrio (implícitos nos pesos de mercado) e combina-os com as views do gestor usando Bayes; produz retornos esperados mais estáveis e portfólios mais diversificados que MVO puro — standard em gestão de activos quantitativa.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Factor Investing — Fama-French &amp; Smart Beta</strong> — Fama-French 3-factor (mercado, tamanho, valor) explica 90%+ da variação de retornos cross-sectional; extensões com momentum (Carhart) e quality/profitability (FF5) melhoram o poder explicativo; Smart Beta ETFs implementam estes factores de forma transparente e baixo custo.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Robo-Advisors — Arquitetura e Regulamentacao</strong> — robo-advisors (Betterment, Wealthfront, N26 Wealth) recolhem perfil de risco via questionário, alocam em ETFs com MVO/Black-Litterman, rebalanceiam automaticamente e implementam tax-loss harvesting; regulados como investment advisors com fiduciary duty — MiFID II/IDD na Europa.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Portfolio Construction — Risk Parity e HRP</strong> — Risk Parity aloca peso inversamente proporcional à volatilidade de cada activo (todos contribuem igualmente para o risco); HRP (Hierarchical Risk Parity, López de Prado) usa clustering hierárquico para construir portfólios mais robustos a erros de estimação que MVO.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
