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
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  grid3: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.85rem' },
};

function BlockchainLayersSVG() {
  const layers = [
    { label: 'Application Layer', items: ['DeFi (Uniswap, Aave, Compound)', 'NFTs (ERC-721)', 'DAOs (Governance tokens)'], color: '#f97316', y: 18 },
    { label: 'Smart Contract Layer', items: ['Solidity / Vyper', 'EVM bytecode', 'ABI (Application Binary Interface)'], color: '#f97316', y: 82 },
    { label: 'Consensus Layer', items: ['Ethereum PoS (Beacon Chain)', 'Validators (32 ETH stake)', 'Finality: ~12.8 min'], color: '#f97316', y: 146 },
    { label: 'Network / P2P Layer', items: ['devp2p protocol', 'ENode discovery', 'State sync (snap protocol)'], color: '#f97316', y: 210 },
  ];
  return (
    <svg viewBox="0 0 560 290" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="290" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={14} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Ethereum Stack — Camadas do Protocolo</text>
      {layers.map((l, i) => (
        <g key={i}>
          <rect x={20} y={l.y} width={520} height={52} fill={l.color} rx="6" opacity="0.15" />
          <rect x={20} y={l.y} width={520} height={52} fill="none" stroke={l.color} strokeWidth="1.5" rx="6" />
          <text x={40} y={l.y + 16} fill={l.color} fontSize="10" fontWeight="700">{l.label}</text>
          {l.items.map((item, j) => (
            <text key={j} x={40 + j * 175} y={l.y + 36} fill="#fb923c" fontSize="8.5">{item}</text>
          ))}
          {i < layers.length - 1 && (
            <g>
              <line x1={280} y1={l.y + 52} x2={280} y2={l.y + 60} stroke={l.color} strokeWidth="1.5" opacity="0.6" />
              <polygon points={`274,${l.y + 58} 280,${l.y + 66} 286,${l.y + 58}`} fill={l.color} opacity="0.6" />
            </g>
          )}
        </g>
      ))}
      <text x={280} y={282} textAnchor="middle" fill="#fb923c" fontSize="9">Ethereum mainnet: 12s block time, ~1M tx/dia. Layer 2 (Arbitrum/Optimism): 10x-100x throughput via rollups.</text>
    </svg>
  );
}

function AMMCurveSVG() {
  const W = 460, H = 140, ox = 50, oy = 20;
  const k = 10000;
  const points = [];
  for (let x = 20; x <= 500; x += 5) {
    const y = k / x;
    if (y <= 500) points.push({ x, y });
  }
  const scaleX = (v) => ox + ((v - 20) / (500 - 20)) * W;
  const scaleY = (v) => oy + H - ((v - 0) / 500) * H;
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${scaleX(p.x).toFixed(1)},${scaleY(p.y).toFixed(1)}`).join(' ');
  const x0 = 100, y0 = k / x0;
  const x1 = 150, y1 = k / x1;
  return (
    <svg viewBox="0 0 560 195" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="195" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={14} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Uniswap v2 AMM — Constant Product Market Maker (x·y = k)</text>
      <path d={path} fill="none" stroke="#f97316" strokeWidth="2" />
      <line x1={scaleX(x0)} y1={oy} x2={scaleX(x0)} y2={scaleY(y0)} stroke="#f97316" strokeWidth="1" strokeDasharray="4,3" />
      <line x1={ox} y1={scaleY(y0)} x2={scaleX(x0)} y2={scaleY(y0)} stroke="#f97316" strokeWidth="1" strokeDasharray="4,3" />
      <line x1={scaleX(x1)} y1={oy} x2={scaleX(x1)} y2={scaleY(y1)} stroke="#f97316" strokeWidth="1" strokeDasharray="4,3" />
      <line x1={ox} y1={scaleY(y1)} x2={scaleX(x1)} y2={scaleY(y1)} stroke="#f97316" strokeWidth="1" strokeDasharray="4,3" />
      <circle cx={scaleX(x0)} cy={scaleY(y0)} r={4} fill="#f97316" />
      <circle cx={scaleX(x1)} cy={scaleY(y1)} r={4} fill="#f97316" />
      <text x={scaleX(x0) + 4} y={scaleY(y0) - 4} fill="#f97316" fontSize="8">Antes (ETH=100, DAI=100)</text>
      <text x={scaleX(x1) - 50} y={scaleY(y1) + 10} fill="#f97316" fontSize="8">Apos trade: +50 ETH in</text>
      <text x={scaleX(x1) - 50} y={scaleY(y1) + 20} fill="#f97316" fontSize="8">ETH=150, DAI=66.7</text>
      <line x1={ox} y1={oy} x2={ox} y2={oy + H + 10} stroke="var(--card-border)" strokeWidth="1" />
      <line x1={ox} y1={oy + H} x2={ox + W + 10} y2={oy + H} stroke="var(--card-border)" strokeWidth="1" />
      <text x={ox - 5} y={oy + 5} textAnchor="end" fill="#fb923c" fontSize="7.5">DAI</text>
      <text x={ox + W + 15} y={oy + H + 5} fill="#fb923c" fontSize="7.5">ETH</text>
      <text x={280} y={180} textAnchor="middle" fill="#fb923c" fontSize="9">Price impact = (y0-y1)/y0. Slippage aumenta com tamanho do trade. LP recebe fees (0.3% em v2).</text>
      <text x={280} y={191} textAnchor="middle" fill="#fb923c" fontSize="8.5">Uniswap v3: concentrated liquidity — LPs definem range [pa, pb], capital efficiency 4000x vs v2.</text>
    </svg>
  );
}

function DeFiProtocolsSVG() {
  const protocols = [
    { name: 'Uniswap v3', category: 'DEX / AMM', tvl: '$3.2B', apy: '2-15%', risk: 'Medio', token: 'UNI', color: '#f97316' },
    { name: 'Aave v3', category: 'Lending', tvl: '$8.1B', apy: '3-12%', risk: 'Medio', token: 'AAVE', color: '#f97316' },
    { name: 'Compound III', category: 'Lending', tvl: '$1.9B', apy: '4-8%', risk: 'Baixo', token: 'COMP', color: '#f97316' },
    { name: 'Lido Finance', category: 'Liquid Staking', tvl: '$21B', apy: '~3.8%', risk: 'Baixo', token: 'stETH', color: '#f97316' },
    { name: 'MakerDAO', category: 'Stablecoin', tvl: '$7.8B', apy: '5-8%', risk: 'Medio', token: 'DAI', color: '#f97316' },
  ];
  const cols = ['Protocolo', 'Categoria', 'TVL', 'APY', 'Risco', 'Token'];
  const xs = [10, 118, 230, 305, 370, 440];
  return (
    <svg viewBox="0 0 560 195" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="195" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={14} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">DeFi Protocols — Top 5 por TVL (Total Value Locked) — 2024</text>
      {cols.map((c, i) => <text key={i} x={xs[i] + 2} y={28} fill="#fb923c" fontSize="9" fontWeight="700">{c}</text>)}
      <line x1="6" y1="33" x2="554" y2="33" stroke="var(--card-border)" strokeWidth="1" />
      {protocols.map((p, i) => {
        const y = 38 + i * 28;
        return (
          <g key={i}>
            <rect x="6" y={y} width="548" height="24" fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'transparent'} rx="3" />
            <rect x="6" y={y} width="4" height="24" fill={p.color} rx="2" />
            <text x={xs[0] + 8} y={y + 15} fill={p.color} fontSize="9.5" fontWeight="700">{p.name}</text>
            <text x={xs[1] + 2} y={y + 15} fill="#fb923c" fontSize="9">{p.category}</text>
            <text x={xs[2] + 2} y={y + 15} fill="#f97316" fontSize="9" fontWeight="700">{p.tvl}</text>
            <text x={xs[3] + 2} y={y + 15} fill="#f59e0b" fontSize="9" fontWeight="700">{p.apy}</text>
            <text x={xs[4] + 2} y={y + 15} fill={p.risk === 'Baixo' ? '#f97316' : '#f97316'} fontSize="9">{p.risk}</text>
            <text x={xs[5] + 2} y={y + 15} fill="#e2e8f0" fontSize="9">{p.token}</text>
          </g>
        );
      })}
      <text x={280} y={188} textAnchor="middle" fill="#fb923c" fontSize="9">TVL = Total Value Locked. APY inclui trading fees + incentivos token. Risco inclui smart contract bugs, oracle manipulation, liquidation cascades.</text>
    </svg>
  );
}

function CBDCSvg() {
  const models = [
    { name: 'Wholesale CBDC', desc: 'Interbancario. Liquidacao RTGS. Projeto Helvetia (SNB+BIS).', color: '#f97316', x: 30 },
    { name: 'Retail CBDC', desc: 'Cidadaos diretamente. Digital Euro (BCE). e-CNY (China). FedNow (USD).', color: '#f97316', x: 200 },
    { name: 'Hybrid CBDC', desc: 'BC emite, bancos distribuem. Sem disintermediation. modelo preferido EU.', color: '#f97316', x: 370 },
  ];
  return (
    <svg viewBox="0 0 560 165" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="165" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={14} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">CBDC — Central Bank Digital Currency: 3 Modelos de Emissao</text>
      {models.map((m, i) => (
        <g key={i}>
          <rect x={m.x} y={24} width={155} height={105} fill={m.color} rx="8" opacity="0.12" />
          <rect x={m.x} y={24} width={155} height={105} fill="none" stroke={m.color} strokeWidth="1.5" rx="8" />
          <text x={m.x + 77} y={42} textAnchor="middle" fill={m.color} fontSize="9.5" fontWeight="700">{m.name}</text>
          <line x1={m.x + 12} y1={48} x2={m.x + 143} y2={48} stroke={m.color} strokeWidth="0.7" opacity="0.4" />
          {m.desc.split('. ').filter(Boolean).map((line, j) => (
            <text key={j} x={m.x + 77} y={62 + j * 16} textAnchor="middle" fill="#fb923c" fontSize="7.8">{line}</text>
          ))}
        </g>
      ))}
      <text x={280} y={142} textAnchor="middle" fill="#fb923c" fontSize="9">130+ paises em pilot/research fase (BIS 2024). Digital Euro previsto 2026-2028. e-CNY: 250M+ users.</text>
      <text x={280} y={157} textAnchor="middle" fill="#fb923c" fontSize="8.5">Riscos: bank run digital (0 friction), privacidade dados, programmable money (expiracoes, restricoes de uso).</text>
    </svg>
  );
}

export default function FIN6() {
  const mod = modules[5];
  return (
    <div style={S.page}>
      <Link to="/fintech" style={S.back}>← FinTech &amp; Finance</Link>
      <div style={S.badge}>MÓDULO 06</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Ethereum — Stack e Protocolo</h2>
        <div style={S.diagram}><BlockchainLayersSVG /></div>
        <div style={S.highlight}>
          <strong>Ethereum</strong> e a plataforma de smart contracts dominante: 60%+ do TVL DeFi. Pos-merge (Set 2022), passou de PoW para <strong>Proof-of-Stake</strong> com validators que fazem stake de 32 ETH (slash por misbehavior). O EVM (Ethereum Virtual Machine) e uma maquina de estados deterministica — qualquer no pode verificar qualquer computacao. <strong>Gas</strong> = unidade de custo computacional; EIP-1559 introduziu base fee burnt + priority fee para validators.
        </div>
        <div style={S.note}>EIP-4844 (Dencun, Mar 2024): blobs de dados para Layer 2 rollups — reduz fees L2 em ~10x. Ethereum roadmap: The Surge (128k TPS via sharding), The Scourge (MEV mitigacao), The Splurge (EVM improvements).</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Smart Contracts — Solidity e Seguranca</h2>
        <div style={S.highlight}>
          <strong>Estrutura de um lending pool em Solidity:</strong> Um contrato de lending basico inspira-se na arquitetura do Aave v3. Cada utilizador deposita um token ERC-20 como colateral e pode pedir emprestado ate um maximo determinado pelo Collateral Factor — tipicamente 75%, o que significa que por cada 100 unidades depositadas pode-se pedir 75. O estado do protocolo e mantido em dois mappings: um que regista os depositos e outro que regista as dividas. O Total Liquidity disponivel e atualizado a cada deposit e borrow. O modificador nonReentrant da biblioteca ReentrancyGuard e obrigatorio em todas as funcoes que movem fundos para prevenir o vetor de ataque mais classico do ecosistema.
        </div>
        <p style={S.p}><strong>Health Factor e mecanismo de liquidacao:</strong> O Health Factor de uma posicao e calculado como (valor do deposito vezes o Liquidation Threshold) dividido pela divida total, multiplicado por 100. Quando o Health Factor cai abaixo de 1.0 — o que acontece quando o preco do colateral desce ou a divida aumenta via juros — a posicao torna-se liquidavel. Qualquer endereco externo pode entao reembolsar a divida em nome do mutuario e receber o colateral com um bonus de liquidacao, tipicamente 5% a 10%. Este mecanismo assegura a solvencia do protocolo sem necessidade de terceiros de confianca como bancos ou tribunais.</p>
        <p style={S.p}><strong>Vulnerabilidades criticas em Solidity:</strong> (1) <strong>Reentrancy</strong> — o ataque ao DAO em 2016 resultou em $60M roubados porque um contrato externo conseguia chamar a funcao de withdraw recursivamente antes do estado ser atualizado. A correcao passa pelo padrao checks-effects-interactions: primeiro verificar condicoes, depois atualizar o estado, finalmente fazer transferencias. (2) <strong>Integer overflow</strong> — antes da versao 0.8 do compilador, operacoes aritmeticas podiam transbordar silenciosamente (ex: 255 + 1 = 0 num uint8). A partir de Solidity 0.8 o comportamento e revert automatico. (3) <strong>Flash loan attacks</strong> — um atacante toma um emprestimo enorme no inicio de um bloco, manipula um oracle de preco, executa um ataque lucrativo, e devolve o emprestimo tudo na mesma transacao. (4) <strong>Access control</strong> — funcoes administrativas sem o modificador onlyOwner podem ser chamadas por qualquer endereco. Auditorias por empresas como Certik, Trail of Bits e OpenZeppelin Defender sao essenciais antes de qualquer deployment com fundos reais.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. AMM — Automated Market Makers</h2>
        <div style={S.diagram}><AMMCurveSVG /></div>
        <div style={S.highlight}>
          <strong>Constant Product AMM</strong> (Uniswap v2): a formula central e x multiplicado por y igual a k, onde x e y sao as reservas dos dois tokens e k e uma constante invariante. O preco implicito de x em termos de y e simplesmente y dividido por x. Quando um trader compra x tokens, y aumenta para manter k constante, fazendo o preco de x subir automaticamente. O <strong>price impact</strong> — a degradacao do preco causada pelo proprio trade — e igual a (y0 menos y1) dividido por y0, e cresce de forma nao-linear com o tamanho relativo do trade vs. a liquidez do pool.
        </div>
        <p style={S.p}><strong>Impermanent Loss (IL):</strong> Um liquidity provider (LP) que deposita os dois tokens num pool AMM sofre impermanent loss quando o preco relativo dos tokens se altera. A formula e: IL = 2 vezes raiz quadrada de p dividido por (1 mais p), menos 1, onde p e o racio entre o preco atual e o preco inicial. Se o ETH duplicar de preco (p = 2), o LP perde aproximadamente 5.72% comparado com simplesmente manter os tokens fora do pool (hodl). As fees de 0.3% por transacao compensam este risco, mas so em pools com elevado volume. O <strong>Uniswap v3</strong> introduziu liquidez concentrada: LPs definem um intervalo de preco [pa, pb] e so fornecem liquidez dentro desse range. Num range estreito de 10%, o capital e ate 4000 vezes mais eficiente que no v2, mas o LP fica completamente fora do mercado se o preco sair do seu intervalo.</p>
        <p style={S.p}><strong>Simulacao de swap e impermanent loss:</strong> Para simular um pool Uniswap v2 com 1000 ETH e 1.5 milhoes de DAI (preco inicial de 1500 DAI/ETH e k igual a 1.5 mil milhoes), um swap de entrada de 50 ETH resulta na saida de aproximadamente 71.400 DAI — um preco efetivo de 1428 DAI/ETH vs. 1500 spot, correspondendo a um slippage de 4.8%. Apos o swap, as reservas passam a 1050 ETH e 1.428M DAI, e o novo preco implicito e 1360 DAI/ETH. Se o preco de ETH duplicar para 3000 DAI, o impermanent loss e -5.72%: o LP teria mais valor simplesmente mantendo os tokens sem os depositar no pool.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Ecossistema DeFi — Principais Protocolos</h2>
        <div style={S.diagram}><DeFiProtocolsSVG /></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.9rem' }}>
          <div style={S.highlight}>
            <strong>Lending Protocols (Aave/Compound):</strong> Depositas colateral (ex: ETH), podes pedir emprestado ate ao LTV (Loan-to-Value). Health Factor = (colateral vezes liquidation_threshold) dividido pela divida. Se HF cair abaixo de 1.0, qualquer utilizador pode liquidar com bonus de 5-10%. Taxas variam dinamicamente com utilization rate: U = borrows dividido por deposits.
          </div>
          <div style={S.highlight}>
            <strong>Yield Farming / Liquidity Mining:</strong> Protocolos emitem tokens proprios (governance) para atrair liquidez. APY alto inicial (100%+) converge para taxa de mercado. Risco: rug pulls, token inflation, smart contract exploits. TVL total DeFi: pico $180B (Nov 2021), consolidacao $60-80B (2024).
          </div>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Tokenizacao de Ativos Reais (RWA)</h2>
        <div style={S.highlight}>
          <strong>O padrao ERC-3643 (T-REX) para security tokens:</strong> Ao contrario dos tokens ERC-20 que qualquer carteira pode receber, um security token (acao, obrigacao ou fundo tokenizado) so pode ser transferido entre enderecos que passaram por verificacao KYC e estao registados num Identity Registry — uma lista branca on-chain gerida pelo emissor. O padrao ERC-3643, desenvolvido pela Tokeny Solutions, codifica esta logica diretamente no contrato: qualquer tentativa de transferencia para um endereco nao verificado e revertida automaticamente pela blockchain. Adicionalmente, enderecos de paises sancionados (como os listados no OFAC — Iran, Coreia do Norte, Cuba) sao bloqueados ao nivel do contrato, nao apenas por politica interna.
        </div>
        <p style={S.p}><strong>Freeze regulatorio e compliance programatico:</strong> Uma das capacidades mais importantes de um security token e o freeze regulatorio: o emissor ou um agente autorizado pode bloquear enderecos especificos por ordem judicial, investigacao AML ou requisito regulatorio. Em tokens ERC-20 tradicionais isto nao existe — uma vez emitido, o token e completamente autonomo. No ERC-3643, remover um endereco da whitelist impede imediatamente qualquer nova transferencia de ou para esse endereco. O contrato pode ainda ser pausado globalmente — por exemplo, durante uma suspensao de negociacao ordenada pelo regulador — bloqueando todas as transferencias ate levantamento da suspensao.</p>
        <p style={S.p}><strong>Mercado RWA 2024 e exemplos reais:</strong> O mercado de Real World Assets tokenizados ultrapassou $8 mil milhoes em ativos on-chain. A categoria mais expressiva sao os US Treasuries e obrigacoes de curto prazo: a Franklin Templeton tem o fundo BENJI na blockchain Polygon com mais de $400 milhoes em ativos, a BlackRock lancou o BUIDL na Ethereum para fundos do mercado monetario, e a Ondo Finance oferece o OUSG com rendimento proximo de 5% em Treasuries de curto prazo. As principais vantagens face aos instrumentos tradicionais sao liquidez continua (24/7 vs. horario de bolsa), fracionamento (possibilidade de investir com $1), e settlement em T+0 vs. T+2 em mercados tradicionais. O quadro regulatorio em desenvolvimento inclui a MiCA na UE (2024), orientacoes da SEC nos EUA, e o projeto Guardian do MAS em Singapura.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. CBDC — Central Bank Digital Currency</h2>
        <div style={S.diagram}><CBDCSvg /></div>
        <div style={S.highlight}>
          <strong>Digital Euro (BCE):</strong> Fase de preparacao 2023-2025, potencial launch 2026-2028. Limite individual: 3.000 euros para evitar bank runs digitais — acima deste montante o detentor teria de mover fundos para depositos bancarios convencionais. Privacidade: transacoes offline sem registo central ate limite diario. <strong>e-CNY (China):</strong> 250M+ carteiras, $250B+ em transacoes piloto. Programmable money: vouchers que expiram, restricted spending categories. <strong>FedNow (EUA):</strong> nao e CBDC mas instant payment rail — base para futura digital dollar.
        </div>
        <div style={S.note}>MEV (Maximal Extractable Value): validators extraem valor reordenando/inserindo transacoes. Em 2023: $500M+ extraido. Impacto regulatorio: DeFi protocols cada vez mais sob escrutinio FATF Travel Rule (informacao sender/receiver em crypto transfers acima de $1000).</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>7. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Ethereum — Stack e Protocolo</strong> — Ethereum é a blockchain de smart contracts dominante; Proof-of-Stake (The Merge, 2022) reduziu consumo de energia 99.95%; EVM (Ethereum Virtual Machine) executa bytecode de Solidity de forma determinista em todos os nós da rede.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Smart Contracts — Solidity e Seguranca</strong> — smart contracts são programas imutáveis na blockchain que executam automaticamente; vulnerabilidades como reentrancy (DAO hack, $60M), integer overflow e access control falhos custaram &gt;$5B em perdas — auditorias de Certik e Trail of Bits são standard.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>AMM — Automated Market Makers</strong> — AMMs (Uniswap, Curve) substituem order books por pool de liquidez com fórmula x·y=k; qualquer utilizador pode ser liquidity provider e ganhar fees; impermanent loss ocorre quando o preço diverge do momento de depósito — trade-off central de DeFi.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Ecossistema DeFi — Principais Protocolos</strong> — Aave e Compound (lending/borrowing com colateral); MakerDAO (stablecoin DAI colateralizada); Uniswap (DEX); Lido (liquid staking); total TVL (Total Value Locked) em DeFi atingiu $200B em 2021, consolidou em $50–100B em 2024.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Tokenizacao de Ativos Reais (RWA)</strong> — tokenização converte activos reais (imóveis, bonds, commodities) em tokens on-chain com representação fraccionária e liquidez 24/7; BlackRock BUIDL (tokenized US Treasuries, $500M+) e Franklin Templeton on Polygon marcam a entrada institucional em RWA.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>CBDC — Central Bank Digital Currency</strong> — CBDCs são moedas digitais emitidas por bancos centrais; Digital Euro (BCE), e-CNY (China, 260M wallets) e FedNow/Digital Dollar (EUA) exploram diferentes modelos (token vs. account-based, retail vs. wholesale); implicações para política monetária e estabilidade financeira são profundas.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
