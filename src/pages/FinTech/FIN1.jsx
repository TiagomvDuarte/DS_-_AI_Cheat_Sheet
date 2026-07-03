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

function PaymentRailsSVG() {
  const rails = [
    { name: 'SWIFT MT/MX', speed: '1-5 dias', cost: '25-50€', reach: '200 paises', color: '#f97316', x: 60 },
    { name: 'SEPA SCT', speed: '1 dia util', cost: '<0.50€', reach: '36 paises', color: '#f97316', x: 175 },
    { name: 'SCT Inst', speed: '<10 seg', cost: '<0.20€', reach: '36 paises', color: '#f97316', x: 290 },
    { name: 'PIX (BR)', speed: '<3 seg', cost: 'Gratis', reach: 'Brasil', color: '#f97316', x: 405 },
    { name: 'FedNow (US)', speed: '<1 seg', cost: '<0.045$', reach: 'EUA', color: '#f97316', x: 520 },
  ];
  return (
    <svg viewBox="0 0 620 220" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="620" height="210" fill="var(--bg-secondary)" rx="8" />
      <text x={310} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Payment Rails — Velocidade, Custo e Alcance (2024)</text>
      {rails.map((r, i) => (
        <g key={i}>
          <rect x={r.x - 45} y={28} width={90} height={148} fill={r.color} rx="6" opacity="0.1" />
          <rect x={r.x - 45} y={28} width={90} height={148} fill="none" stroke={r.color} strokeWidth="1.5" rx="6" />
          <text x={r.x} y={46} textAnchor="middle" fill={r.color} fontSize="9" fontWeight="700">{r.name}</text>
          <line x1={r.x - 35} y1={52} x2={r.x + 35} y2={52} stroke={r.color} strokeWidth="0.8" opacity="0.4" />
          <text x={r.x} y={70} textAnchor="middle" fill="#fb923c" fontSize="8">Velocidade</text>
          <text x={r.x} y={84} textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="700">{r.speed}</text>
          <text x={r.x} y={104} textAnchor="middle" fill="#fb923c" fontSize="8">Custo medio</text>
          <text x={r.x} y={118} textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="700">{r.cost}</text>
          <text x={r.x} y={138} textAnchor="middle" fill="#fb923c" fontSize="8">Cobertura</text>
          <text x={r.x} y={152} textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="700">{r.reach}</text>
          <rect x={r.x - 25} y={163} width={50} height={8} fill={r.color} rx="3" opacity="0.3" />
        </g>
      ))}
      <text x={310} y={202} textAnchor="middle" fill="#fb923c" fontSize="9">SCT Inst obrigatorio na UE a partir de 2025 (Reg. EU 2024/886). FedNow lancado Jul 2023 (Federal Reserve).</text>
    </svg>
  );
}

function OpenBankingFlowSVG() {
  const entities = [
    { label: 'Utilizador', x: 65 },
    { label: 'TPP / FinTech', x: 215 },
    { label: 'Auth Server', x: 365 },
    { label: 'Banco/ASPSP', x: 505 },
  ];
  const bw = 100, bh = 38, by = 28;
  const arrowY = by + bh + 16;
  const fwdArrows = [
    { x1: 115, x2: 165, y: arrowY,      label: '1. Inicia' },
    { x1: 265, x2: 315, y: arrowY,      label: '2. Redirect OAuth2' },
    { x1: 415, x2: 455, y: arrowY,      label: '3. Auth Code' },
    { x1: 455, x2: 415, y: arrowY + 28, label: '4. Token Exchange' },
    { x1: 315, x2: 265, y: arrowY + 28, label: '5. Token' },
    { x1: 265, x2: 315, y: arrowY + 56, label: '6. API Call + Bearer Token', dash: true },
    { x1: 415, x2: 455, y: arrowY + 56, label: '7. Dados de conta/transaccoes', dash: true },
  ];
  return (
    <svg viewBox="0 0 580 230" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="580" height="230" fill="var(--bg-secondary)" rx="8" />
      <text x={290} y={18} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Open Banking PSD2 — Fluxo de Autorizacao e Dados</text>
      {entities.map((e, i) => (
        <g key={i}>
          <rect x={e.x - bw / 2} y={by} width={bw} height={bh} fill="#f97316" rx="6" fillOpacity="0.14" />
          <rect x={e.x - bw / 2} y={by} width={bw} height={bh} fill="none" stroke="#f97316" strokeWidth="1.8" rx="6" />
          <text x={e.x} y={by + bh / 2 + 4} textAnchor="middle" fill="#f97316" fontSize="9.5" fontWeight="700">{e.label}</text>
        </g>
      ))}
      {fwdArrows.map((a, i) => {
        const dir = a.x2 > a.x1 ? 1 : -1;
        return (
          <g key={i}>
            <line x1={a.x1} y1={a.y} x2={a.x2} y2={a.y} stroke="#f97316" strokeWidth="1.4"
              strokeDasharray={a.dash ? '5,3' : '0'} />
            <polygon points={`${a.x2},${a.y} ${a.x2 - dir * 6},${a.y - 4} ${a.x2 - dir * 6},${a.y + 4}`} fill="#f97316" />
            <text x={(a.x1 + a.x2) / 2} y={a.y - 5} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">{a.label}</text>
          </g>
        );
      })}
      <rect x={8} y={204} width={564} height={20} fill="var(--bg-primary)" rx="4" />
      <text x={290} y={217} textAnchor="middle" fill="#fb923c" fontSize="8">Padrao: OAuth 2.0 + PKCE | FAPI 1.0 Advanced | Berlin Group NextGenPSD2 | UK Open Banking Standard v3.1</text>
    </svg>
  );
}

function FinTechSegmentsSVG() {
  const segs = [
    { name: 'Pagamentos', val: 1820, color: '#f97316', desc: '$1.82T volume Stripe 2023' },
    { name: 'Alternative Lending', val: 630, color: '#f97316', desc: '$630B originacao global' },
    { name: 'WealthTech', val: 580, color: '#f97316', desc: '$580B AUM robo-advisors' },
    { name: 'InsurTech', val: 420, color: '#f97316', desc: '$42B premios digitais' },
    { name: 'RegTech', val: 215, color: '#ea580c', desc: '$21.5B mercado global' },
    { name: 'Cripto/DeFi', val: 180, color: '#c2410c', desc: '$180B TVL pico DeFi' },
  ];
  const maxVal = 1820;
  return (
    <svg viewBox="0 0 560 220" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="210" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Mercado FinTech Global — Segmentos por Volume (2023-2024)</text>
      {segs.map((s, i) => {
        const y = 26 + i * 29;
        const barW = (s.val / maxVal) * 320;
        return (
          <g key={i}>
            <text x={118} y={y + 16} textAnchor="end" fill={s.color} fontSize="9.5" fontWeight="700">{s.name}</text>
            <rect x={124} y={y + 4} width={barW} height={18} fill={s.color} rx="3" opacity="0.75" />
            <text x={130 + barW} y={y + 16} fill="#fb923c" fontSize="8.5">{s.desc}</text>
          </g>
        );
      })}
      <text x={280} y={212} textAnchor="middle" fill="#fb923c" fontSize="9">Fontes: McKinsey Global Payments Report 2023, Statista FinTech Market Insights 2024, DeFi Llama TVL.</text>
    </svg>
  );
}

function ISO20022SVG() {
  const fields = [
    { name: 'GrpHdr', desc: 'MessageId, CreDtTm, NbOfTxs, CtrlSum', color: '#f97316' },
    { name: 'PmtInf', desc: 'PmtMtd, PmtTpInf (SEPA/CORE), ReqdExctnDt', color: '#f97316' },
    { name: 'CdtTrfTxInf', desc: 'PmtId, Amt, Cdtr.Nm, CdtrAcct.IBAN', color: '#f97316' },
    { name: 'RmtInf', desc: 'Ustrd (140 chars) ou Strd (structured remittance)', color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 175" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="165" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">ISO 20022 pain.001 — Estrutura da Mensagem SCT</text>
      <text x={280} y={28} textAnchor="middle" fill="#fb923c" fontSize="9">Substitui SWIFT MT103 ate 2025. Rich data: IBAN, LEI, proposta de valor dados estruturados.</text>
      {fields.map((f, i) => {
        const y = 36 + i * 30;
        return (
          <g key={i}>
            <rect x={8} y={y} width={120} height={24} fill={f.color} rx="4" opacity="0.2" />
            <rect x={8} y={y} width={120} height={24} fill="none" stroke={f.color} strokeWidth="1.5" rx="4" />
            <text x={68} y={y + 15} textAnchor="middle" fill={f.color} fontSize="10" fontWeight="700">{f.name}</text>
            <line x1={128} y1={y + 12} x2={145} y2={y + 12} stroke={f.color} strokeWidth="1.5" />
            <text x={150} y={y + 15} fill="#fb923c" fontSize="9">{f.desc}</text>
          </g>
        );
      })}
      <text x={280} y={168} textAnchor="middle" fill="#fb923c" fontSize="9">SWIFT coexistencia MT+MX ate Nov 2025. ISO 20022 obrigatorio para TARGET2 (ECB) desde Mar 2023.</text>
    </svg>
  );
}

export default function FIN1() {
  const mod = modules[0];
  return (
    <div style={S.page}>
      <Link to="/fintech" style={S.back}>← FinTech & Finance</Link>
      <div style={S.badge}>MÓDULO 01</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Segmentos FinTech — Dimensao de Mercado</h2>
        <div style={S.diagram}><FinTechSegmentsSVG /></div>
        <div style={S.highlight}>
          O mercado FinTech global ultrapassou os <strong>$340B de receitas em 2023</strong> (McKinsey). Os pagamentos digitais lideram em volume mas as margens mais elevadas estao no lending (spread de risco) e no WealthTech (fee AUM). A Stripe processa mais de <strong>$1 triliao/ano</strong> com margens operacionais negativas — o modelo FinTech e frequentemente de captura de quota de mercado antes de rentabilidade.
        </div>
        <div style={S.note}>
          <strong>Unit Economics FinTech:</strong> CAC (Customer Acquisition Cost) tipicamente 3-5x superior ao banking tradicional. LTV/CAC ratio saudavel e superior a 3x. Nubank: CAC ~$5 vs. bancos brasileiros ~$150. Escala digital elimina custo marginal de servir clientes adicionais.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Payment Rails — Infraestrutura Global</h2>
        <div style={S.diagram}><PaymentRailsSVG /></div>
        <div style={S.highlight}>
          A <strong>ISO 8583</strong> e o protocolo de mensagens de autorizacao de cartoes (Visa/Mastercard). Uma transacao de cartao percorre: POS Terminal, Acquirer, Card Network (Visa/Mastercard), Issuer Bank, e volta em sentido inverso em menos de 2 segundos. A mensagem contem 128 campos bit-map com dados do cartao, terminal, montante e codigo de autorizacao. O <strong>clearing</strong> (reconciliacao) ocorre em D+0/D+1 e a <strong>liquidacao</strong> em D+1/D+2.
        </div>
        <div style={S.note}>
          <strong>Interchange Fee:</strong> O issuer cobra ao acquirer entre 0.2% (debito UE, cap regulatorio) e 2%+ (premium credit EUA). A EU Card Fee Regulation (2015) limitou a 0.2% debito e 0.3% credito no espaco SEPA. Nos EUA sem cap regulatorio, as fees sao substancialmente superiores — dai o modelo de negocio de cartoes premium com cashback/milhas.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Open Banking — Arquitetura PSD2 e OAuth2</h2>
        <div style={S.diagram}><OpenBankingFlowSVG /></div>
        <div style={S.highlight}>
          O fluxo PSD2 usa <strong>OAuth 2.0 Authorization Code Grant</strong> com PKCE obrigatorio. O TPP (Third Party Provider) nunca ve as credenciais bancarias do utilizador. O <strong>Strong Customer Authentication (SCA)</strong> e obrigatorio: 2 de 3 factores — Conhecimento (PIN), Posse (smartphone/token), Inerencia (biometria). Excecoes SCA: transacoes abaixo de 30 euros, trusted beneficiaries, corporate payments. O padrao <strong>Berlin Group NextGenPSD2</strong> define os endpoints REST: GET /accounts, GET /transactions, POST /payments.
        </div>
        <p style={S.p}><strong>FAPI (Financial-grade API) 1.0 Advanced</strong>: Profile do OAuth2 com requisitos adicionais de seguranca: mTLS (mutual TLS) para autenticacao do TPP, JARM (JWT Secured Authorization Response Mode), PAR (Pushed Authorization Requests). Obrigatorio para Open Finance de alta seguranca (pagamentos, emprestimos).</p>
        <div style={S.note}>
          UK Open Banking (OBIE) — pioneiro mundial (2018): 7 maiores bancos UK obrigados a abrir APIs. Em 2024: 11M+ utilizadores ativos, 1B+ API calls/mes. Portugal (Banco de Portugal): portal de sandbox e sandbox FinTech disponivel para TPPs registados no Registo Nacional de PSPs.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. ISO 20022 — O Novo Padrao de Mensagens Financeiras</h2>
        <div style={S.diagram}><ISO20022SVG /></div>
        <div style={S.highlight}>
          O <strong>ISO 20022</strong> substitui os formatos SWIFT MT (telegraphic) e os formatos nacionais por XML estruturado rico em dados. A mensagem <strong>pain.001</strong> (Payment Initiation) e o formato standard para instrucoes SCT/SEPA. A migracao SWIFT de MT103 para MX (ISO 20022) e obrigatoria ate novembro 2025 — afeta 11.000 instituicoes em 200 paises. Os beneficios: dados estruturados de remessa, LEI de contraparte, compliance AML melhorado, STP (Straight-Through Processing) superior a 99%.
        </div>
        <div style={S.note}>
          <strong>CBPR+ (Cross-Border Payments and Reporting Plus):</strong> O subset SWIFT de ISO 20022 para pagamentos transfronteiriços. Campos criticos: InstrPrty (urgencia), ChrgBr (charges: OUR/SHA/BEN), Purp (proposito do pagamento). Dados de remessa estruturados reduzem investigacoes de pagamento em 70% (SWIFT).
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Regulacao — PSD2, MiFID II e AI Act</h2>
        <div style={S.grid2}>
          {[
            { title: 'PSD2 / PSD3', points: ['AISP: agregacao de contas', 'PISP: iniciacao de pagamentos', 'SCA obrigatorio (2FA)', 'Open Banking APIs', 'PSD3: proposto 2024, reforco fraude'], color: '#f97316' },
            { title: 'MiFID II / MiFIR', points: ['Best execution obrigatoria', 'Transparencia pre/pos trade', 'Transaction reporting (ARM)', 'Product governance (POG)', 'Research unbundling'], color: '#f97316' },
            { title: 'Basel III / IV', points: ['CET1 minimo 4.5% RWA', 'Leverage Ratio 3%', 'LCR (liquidez 30 dias)', 'NSFR (liquidez 1 ano)', 'Output floor 72.5% (Basel IV)'], color: '#f97316' },
            { title: 'EU AI Act (2024)', points: ['Credit scoring = Alto Risco', 'Explicabilidade obrigatoria', 'Registo EU de IA alto risco', 'Supervisao humana mandatoria', 'Entrada vigor 2026'], color: '#f97316' },
          ].map((r, i) => (
            <div key={i} style={{ ...S.card, borderLeft: `3px solid ${r.color}` }}>
              <div style={{ fontWeight: 700, color: r.color, marginBottom: '0.5rem', fontSize: '0.95rem' }}>{r.title}</div>
              {r.points.map((p, j) => <div key={j} style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>• {p}</div>)}
            </div>
          ))}
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. Como Funciona um Cliente Open Banking PSD2</h2>
        <div style={S.highlight}>
          Um cliente PSD2 conforme o padrao Berlin Group NextGenPSD2 assenta em duas camadas de seguranca combinadas: o protocolo <strong>OAuth 2.0 com PKCE</strong> (Proof Key for Code Exchange) para a autorizacao do utilizador, e o <strong>mTLS</strong> (mutual TLS) para autenticar o proprio TPP perante o banco usando um certificado eIDAS QSEAL emitido por uma autoridade de certificacao qualificada. O PKCE e um mecanismo de protecao contra ataques de intercecao do authorization code: o TPP gera um code verifier aleatorio, calcula o seu hash SHA-256 (chamado code challenge), e envia apenas o hash no pedido inicial de autorizacao. Quando troca o codigo por um token, envia o valor original — o servidor de autorizacao valida que o hash corresponde, garantindo que so quem iniciou o fluxo pode completar a troca.
        </div>
        <p style={S.p}>Apos obter o access token, o TPP pode chamar os endpoints de dados do banco incluindo sempre tres cabecalhos obrigatorios: o <strong>Authorization: Bearer</strong> com o token, o <strong>Consent-ID</strong> que identifica o consentimento especifico previamente aprovado pelo utilizador (com scope, contas autorizadas e validade), e o <strong>X-Request-ID</strong> com um UUID unico por pedido para rastreabilidade e idempotencia. Em Portugal, os ASPSPs (bancos) disponibilizam sandbox no portal do Banco de Portugal onde os TPPs registados no Registo Nacional de PSPs podem testar os fluxos antes de ir para producao. O consentimento tem uma validade maxima de 90 dias renovavel, e o utilizador pode revogar o acesso a qualquer momento atraves do banco.</p>
        <p style={S.p}>A geracao de mensagens <strong>ISO 20022 pain.001</strong> para instrucoes de pagamento SEPA segue uma hierarquia fixa de elementos XML: o GrpHdr contem o identificador unico da mensagem (MessageId), a data e hora de criacao, o numero de transacoes e a soma de controlo (CtrlSum); o PmtInf especifica o metodo de pagamento (TRF = transferencia), o nivel de servico (SEPA), e a data de execucao pretendida; e o CdtTrfTxInf contem os dados do beneficiario — nome, IBAN — e o campo RmtInf para informacao de remessa em texto livre ate 140 caracteres ou em formato estruturado com referencias. A validade do IBAN e verificada pelo algoritmo de Luhn antes de submeter a mensagem ao banco, eliminando erros de digitacao que causariam rejeicao ou pagamentos errados.</p>
        <div style={S.note}>
          <strong>Pratica recomendada:</strong> Armazenar os refresh tokens de forma encriptada (AES-256) e nunca persistir access tokens em bases de dados — sao de curta duracao (tipicamente 1 hora). Implementar retry com backoff exponencial para os endpoints bancarios, que podem ter rate limits de 4 pedidos por segundo por TPP. Registar o X-Request-ID de cada chamada para facilitar a resolucao de disputas com o banco em caso de transacoes duplicadas ou perdidas.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>7. Benchmarks FinTech Landscape</h2>
        <div style={S.grid3}>
          {[
            { title: 'Stripe — Processing', stat: '>$1T volume/ano', detail: 'API uptime 99.999%. Latencia de autorizacao <200ms. 135+ moedas. Radar ML: 99.97% accuracy fraude. Revenue: $15B+ (2024 est.).' },
            { title: 'Revolut — Neobank', stat: '45M+ clientes', detail: '38 paises, $45B valorizacao (2021). CAGR 100%+ de 2017-2022. Modelo freemium: 80% free, 20% premium (£10-45/mes). Lucro pela primeira vez em 2023.' },
            { title: 'Nubank — LATAM', stat: '100M+ clientes', detail: 'Maior neobank do mundo por clientes. CAC $5 vs $150 bancos tradicionais. NPS 87 vs. 20 bancos. Valorizacao $8B em IPO NYSE 2021.' },
            { title: 'Wise — Cross-border', stat: '£118B transferidos/ano', detail: 'Taxa real de cambio, fee transparente ~0.4%. 70% mais barato que bancos. CAGR 30%+. Processamento T+0 em 60% dos corredores.' },
            { title: 'Klarna — BNPL', stat: '$90B GMV 2023', detail: 'Buy Now Pay Later. 150M consumidores, 500k comerciantes. Perdas em 2022 ($1B) revelam risco de credito BNPL. Rentavel em 2023 Q4.' },
            { title: 'Plaid — Infrastructure', stat: '12.000+ instituicoes', detail: 'Conecta 8.000+ apps FinTech a dados bancarios. $500M ARR. Aquisicao por Visa ($5.3B) bloqueada DOJ. Base de dados de 200M+ contas.' },
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
                            <li style={{marginBottom:"0.4rem"}}><strong>Segmentos FinTech — Dimensao de Mercado</strong> — FinTech abrange pagamentos, crédito, wealth management, seguros (InsurTech), infraestrutura e criptoativos; mercado global &gt;$300B em 2024 e a crescer a 16% CAGR — cada segmento tem regulação, margens e dinâmicas competitivas distintas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Payment Rails — Infraestrutura Global</strong> — SWIFT (cross-border), SEPA (Europa), PIX (Brasil) e FedNow (EUA) são as infra-estruturas de liquidação; cartões (Visa/Mastercard) processam &gt;700B transacções/ano via 4-party model — a latência e o custo por transacção diferenciam os rails.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Open Banking — Arquitetura PSD2 e OAuth2</strong> — PSD2 (2018) obriga bancos europeus a expor APIs a TPPs (Third Party Providers) autorizados; OAuth2 com PKCE é o protocolo de autorização; consentimento granular do utilizador é central — abre mercado de agregação de contas e pagamentos iniciados por terceiros.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>ISO 20022 — O Novo Padrao de Mensagens Financeiras</strong> — ISO 20022 substitui MT (SWIFT legacy) com mensagens XML ricas em dados estruturados; SEPA já migrou, SWIFT migra 2025–2027; dados estruturados melhoram reconciliação automática, compliance AML e velocidade de liquidação.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Regulacao — PSD2, MiFID II e AI Act</strong> — PSD2 regula pagamentos; MiFID II impõe transparência em mercados de capitais (best execution, relatórios de transacção); AI Act (2024) classifica sistemas de credit scoring como alto risco com requisitos de explicabilidade, robustez e supervisão humana.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Como Funciona um Cliente Open Banking PSD2</strong> — fluxo: utilizador autoriza TPP via redirect ao banco → banco valida no Authorization Server → emite access token OAuth2 → TPP chama Account Information API com token → banco retorna saldo e movimentos — tudo em &lt;3 segundos com mutual TLS.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Benchmarks FinTech Landscape</strong> — Stripe processa &gt;$1T/ano; Revolut tem 45M clientes; TransferWise (Wise) reduziu custo de transferência internacional de 5% para &lt;0.5%; Ant Group (Alipay) é o maior processador de pagamentos do mundo com 1.3B utilizadores activos.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
