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

function FraudDetectionSVG() {
  const methods = [
    { name: 'Rule Engine', precision: 72, recall: 55, f1: 62, latency: '<1ms', color: '#fb923c' },
    { name: 'Random Forest', precision: 84, recall: 79, f1: 81, latency: '5ms', color: '#f97316' },
    { name: 'XGBoost', precision: 89, recall: 85, f1: 87, latency: '8ms', color: '#f97316' },
    { name: 'LSTM Sequence', precision: 91, recall: 88, f1: 89, latency: '45ms', color: '#f97316' },
    { name: 'GNN (GraphSAGE)', precision: 94, recall: 91, f1: 92, latency: '120ms', color: '#f97316' },
    { name: 'Ensemble (XGB+GNN)', precision: 96, recall: 93, f1: 94, latency: '130ms', color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 215" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="205" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Fraud Detection — Comparacao de Metodos (IEEE-CIS Dataset, 590k transacoes)</text>
      {['Metodo', 'Precision', 'Recall', 'F1', 'Latencia'].map((h, i) => (
        <text key={i} x={[12, 170, 250, 325, 460][i]} y={30} fill="#fb923c" fontSize="9" fontWeight="700">{h}</text>
      ))}
      <line x1="8" y1="35" x2="552" y2="35" stroke="var(--card-border)" strokeWidth="1" />
      {methods.map((m, i) => {
        const y = 40 + i * 26;
        const f1W = (m.f1 / 100) * 80;
        return (
          <g key={i}>
            <rect x="8" y={y} width="544" height="22" fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'transparent'} rx="3" />
            <rect x="8" y={y} width="4" height="22" fill={m.color} rx="2" />
            <text x={16} y={y + 15} fill={m.color} fontSize="9.5" fontWeight="700">{m.name}</text>
            <text x={172} y={y + 15} fill={m.precision > 88 ? '#f97316' : '#fb923c'} fontSize="10">{m.precision}%</text>
            <text x={252} y={y + 15} fill={m.recall > 85 ? '#f97316' : '#fb923c'} fontSize="10">{m.recall}%</text>
            <rect x={323} y={y + 6} width={f1W} height={10} fill={m.color} rx="2" opacity="0.4" />
            <text x={323 + f1W + 3} y={y + 15} fill={m.color} fontSize="9.5" fontWeight="700">{m.f1}%</text>
            <text x={462} y={y + 15} fill="#fb923c" fontSize="9">{m.latency}</text>
          </g>
        );
      })}
      <text x={280} y={208} textAnchor="middle" fill="#fb923c" fontSize="9">Threshold 0.5. Dataset desbalanceado (0.35% fraude) — avaliar via PR-AUC, nao ROC-AUC. Class weight = 290 para minoritaria.</text>
    </svg>
  );
}

function MoneyLaunderingGraphSVG() {
  const nodes = [
    { id: 'A', label: 'Conta A\n(Origem)', x: 80, y: 100, color: '#f97316', suspicious: true },
    { id: 'B', label: 'Shell\nCo. 1', x: 200, y: 60, color: '#f97316', suspicious: true },
    { id: 'C', label: 'Shell\nCo. 2', x: 200, y: 140, color: '#f97316', suspicious: true },
    { id: 'D', label: 'Conta D\n(Camada)', x: 340, y: 65, color: '#f97316', suspicious: false },
    { id: 'E', label: 'Conta E\n(Camada)', x: 340, y: 140, color: '#f97316', suspicious: false },
    { id: 'F', label: 'Conta F\n(Destino)', x: 470, y: 100, color: '#f97316', suspicious: false },
  ];
  const edges = [
    { from: 'A', to: 'B', amount: '€45k', x1: 80, y1: 100, x2: 200, y2: 60 },
    { from: 'A', to: 'C', amount: '€38k', x1: 80, y1: 100, x2: 200, y2: 140 },
    { from: 'B', to: 'D', amount: '€44k', x1: 200, y1: 60, x2: 340, y2: 65 },
    { from: 'C', to: 'E', amount: '€37k', x1: 200, y1: 140, x2: 340, y2: 140 },
    { from: 'D', to: 'F', amount: '€80k', x1: 340, y1: 65, x2: 470, y2: 100 },
    { from: 'E', to: 'F', amount: '', x1: 340, y1: 140, x2: 470, y2: 100 },
  ];
  return (
    <svg viewBox="0 0 560 240" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="240" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">AML — Grafo de Transacoes: Layering Pattern (Typology FATF)</text>
      {edges.map((e, i) => (
        <g key={i}>
          <line x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} stroke="#fb923c" strokeWidth="2" markerEnd="url(#arrowAML)" />
          {e.amount && <text x={(e.x1 + e.x2) / 2} y={(e.y1 + e.y2) / 2 - 5} textAnchor="middle" fill="#fb923c" fontSize="8">{e.amount}</text>}
        </g>
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={28} fill="var(--bg-secondary)" />
          <circle cx={n.x} cy={n.y} r={28} fill={n.color} opacity="0.15" />
          <circle cx={n.x} cy={n.y} r={28} fill="none" stroke={n.color} strokeWidth={n.suspicious ? '2.5' : '1.5'} strokeDasharray={n.suspicious ? '0' : '4,3'} />
          {n.suspicious && <circle cx={n.x} cy={n.y} r={32} fill="none" stroke="#f97316" strokeWidth="1" opacity="0.4" />}
          <text x={n.x} y={n.y + 3} textAnchor="middle" fill={n.color} fontSize="8.5" fontWeight="700">{n.label.split('\n')[0]}</text>
          <text x={n.x} y={n.y + 14} textAnchor="middle" fill="#fb923c" fontSize="7.5">{n.label.split('\n')[1]}</text>
        </g>
      ))}
      <circle cx={40} cy={205} r={8} fill="none" stroke="#f97316" strokeWidth="2" />
      <text x={52} y={209} fill="#f97316" fontSize="8">Suspeito (GNN score alto)</text>
      <circle cx={200} cy={205} r={8} fill="none" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="4,3" />
      <text x={212} y={209} fill="#fb923c" fontSize="8">Normal</text>
      <text x={280} y={228} textAnchor="middle" fill="#fb923c" fontSize="9">Padroes: Smurfing (multiplas transferencias pequenas), Layering (camadas de shell cos), Integration (reintroducao limpa).</text>
    </svg>
  );
}

function AMLRulesSVG() {
  const rules = [
    { id: 'STR-001', trigger: 'Transacao > €10.000 em cash', risk: 'HIGH', action: 'CTR obrigatorio (FinCEN)', color: '#f97316' },
    { id: 'STR-002', trigger: 'Estruturacao: 3+ transacoes <€9.999/24h', risk: 'HIGH', action: 'SAR filing + congelamento', color: '#f97316' },
    { id: 'STR-003', trigger: 'Pais de alto risco FATF lista negra', risk: 'HIGH', action: 'Enhanced Due Diligence (EDD)', color: '#f97316' },
    { id: 'STR-004', trigger: 'Mudanca de comportamento: 5x media 90 dias', risk: 'MED', action: 'Revisao manual + questionar cliente', color: '#f97316' },
    { id: 'STR-005', trigger: 'PEP (Politically Exposed Person) detectado', risk: 'MED', action: 'EDD + aprovacao senior', color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 190" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="180" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Transaction Monitoring — Regras AML (4AMLD / 5AMLD / FATF)</text>
      {['Regra', 'Trigger', 'Risco', 'Acao'].map((h, i) => (
        <text key={i} x={[12, 90, 390, 440][i]} y={30} fill="#fb923c" fontSize="9" fontWeight="700">{h}</text>
      ))}
      <line x1="8" y1="35" x2="552" y2="35" stroke="var(--card-border)" strokeWidth="1" />
      {rules.map((r, i) => {
        const y = 40 + i * 27;
        return (
          <g key={i}>
            <rect x="8" y={y} width="544" height="23" fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'transparent'} rx="3" />
            <text x={14} y={y + 15} fill={r.color} fontSize="9" fontWeight="700">{r.id}</text>
            <text x={92} y={y + 15} fill="#e2e8f0" fontSize="8.5">{r.trigger}</text>
            <rect x={387} y={y + 5} width={45} height={13} fill={r.color} rx="6" opacity="0.25" />
            <text x={410} y={y + 15} textAnchor="middle" fill={r.color} fontSize="8" fontWeight="700">{r.risk}</text>
            <text x={442} y={y + 15} fill="#fb923c" fontSize="8">{r.action}</text>
          </g>
        );
      })}
      <text x={280} y={182} textAnchor="middle" fill="#fb923c" fontSize="9">4AMLD (EU 2017): due diligence obrigatoria. 5AMLD (2020): cripto, beneficial ownership publico, paises de alto risco.</text>
    </svg>
  );
}

export default function FIN5() {
  const mod = modules[4];
  return (
    <div style={S.page}>
      <Link to="/fintech" style={S.back}>← FinTech &amp; Finance</Link>
      <div style={S.badge}>MÓDULO 05</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Fraud Detection — Comparacao de Metodos ML</h2>
        <div style={S.diagram}><FraudDetectionSVG /></div>
        <div style={S.highlight}>
          O <strong>dataset IEEE-CIS Fraud Detection</strong> (Kaggle 2019) tem 590.540 transacoes com 0.35% de fraude — altamente desbalanceado. Usar <strong>PR-AUC (Precision-Recall)</strong> como metrica principal, nao ROC-AUC (que e enganosamente alto quando a classe negativa e dominante). <strong>Class imbalance strategies:</strong> SMOTE (Synthetic Minority Oversampling), class_weight='balanced', focal loss para redes neurais. Threshold tuning: em fraude, o custo de um falso negativo (fraude nao detetada: $200 tipico) e muito maior que um falso positivo (cartao bloqueado indevido: $3 custo de atendimento).
        </div>
        <p style={S.p}><strong>Feature engineering para fraude:</strong> Velocity features (N transacoes nas ultimas 1h, 24h, 7d), transacoes em paises distintos nas ultimas 24h, distancia geografica da ultima transacao vs. tempo decorrido, desvio do valor medio historico, hora do dia e dia da semana (fraude concentra-se em 2h-6h), device fingerprint e IP geolocation. Embedding de merchant category code (MCC) via word2vec para capturar similaridade de categorias.</p>
        <div style={S.note}>
          <strong>Concept drift em fraude:</strong> Fraudadores adaptam-se aos modelos. Retraining mensal minimo. Monitorizar: PSI (Population Stability Index) por feature, distribuicao de scores, taxa de fraude rolling. Champion-Challenger: testar novo modelo em 5-10% do trafego antes de promover. Feedback loop: resultados de investigacoes humanas devem alimentar labels de treino.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Anti-Money Laundering — Graph Neural Networks</h2>
        <div style={S.diagram}><MoneyLaunderingGraphSVG /></div>
        <div style={S.highlight}>
          O <strong>AML via GNN</strong> trata a rede de transacoes como grafo: nodes = contas, edges = transferencias com atributos (montante, timestamp, moeda). <strong>GraphSAGE</strong> (Hamilton et al. 2017) agrega features de vizinhos de k-hops para classificar nodes (contas suspeitas). <strong>GATv2</strong> (attention) pondera a importancia de cada vizinho. Benchmark: <strong>IBM AMLSim</strong> dataset — 30M nodes, 150M edges. GNN supera metodos baseados em regras em 15-20 pontos F1 em detection de layering e smurfing patterns.
        </div>
        <p style={S.p}><strong>Typologies FATF (Financial Action Task Force):</strong> Placement (introducao de dinheiro sujo no sistema — cash deposits estruturados), Layering (complexificar o rasto — wire transfers entre shell companies em jurisdicoes distintas), Integration (reintroducao aparentemente legitima — real estate, luxury goods). Trade-based money laundering (TBML): facturacao excessiva/deficiente em comercio internacional.</p>
        <div style={S.note}>
          <strong>Beneficial Ownership (5AMLD):</strong> Obrigatorio identificar UBOs (Ultimate Beneficial Owners) com participacao acima de 25%. Registo publico de UBOs na UE desde 2020. KYC corporativo: verificar estrutura de propriedade ate ao individuo fisico. Documentos: certidao de registo comercial, estatutos, declaracao UBO assinada.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Transaction Monitoring — Regras AML + ML Hibrido</h2>
        <div style={S.diagram}><AMLRulesSVG /></div>
        <div style={S.highlight}>
          O modelo hibrido <strong>Rules + ML</strong> e o estado da arte em producao: regras para compliance obrigatorio (CTR, SAR) e ML para detetar padroes anomalos. O ratio de <strong>false positive AML</strong> e um problema industrial critico: sistemas baseados apenas em regras tem 95-99% de false positive rate — cada alerta custa entre $15 e $50 em revisao manual. ML reduz false positives em 50-70% mantendo recall. O <strong>SAR (Suspicious Activity Report)</strong> e obrigatorio dentro de 30 dias de detetar atividade suspeita (FinCEN nos EUA, Banco de Portugal em Portugal).
        </div>
        <div style={S.note}>
          <strong>KYC (Know Your Customer):</strong> Tres niveis de diligencia: SDD (Simplified — risco baixo, ex: contas poupanca limitadas), CDD (Customer Due Diligence — verificacao de identidade, source of funds), EDD (Enhanced — PEPs, high-risk countries, CBRs). eKYC digital: verificacao de documento via OCR + liveness detection (ISO 30107-3 PAD level 1/2). Reduz onboarding de 5 dias para 5 minutos.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Regulacao — GDPR, PSD2 e AI Act em Contexto Financeiro</h2>
        <div style={S.grid2}>
          {[
            { title: 'GDPR + Decisoes Automatizadas', color: '#f97316', points: ['Art. 22: direito a nao ser sujeito a decisao automatizada', 'Explicacao obrigatoria em scoring de credito', 'Direito a intervencao humana', 'Dados pessoais: minimizacao e finalidade', 'DPIA obrigatoria para sistemas de alto risco'] },
            { title: 'EU AI Act (2024) — FinTech', color: '#f97316', points: ['Credit scoring = Alto Risco (Anexo III)', 'Registo obrigatorio na base EU AI', 'Human oversight mandatorio', 'Explicabilidade e rastreabilidade', 'Proibido: social scoring por autoridades publicas'] },
            { title: '4AMLD / 5AMLD / 6AMLD', color: '#f97316', points: ['CDD/EDD obrigatoria para todos os clientes', 'Registo UBO publico (25%+ participacao)', 'Cripto: VASPs sujeitos a KYC completo', '6AMLD: 22 predicates para ML (2021)', 'Penas: ate 10 anos prisao por AML'] },
            { title: 'PCI-DSS v4.0 (2024)', color: '#f97316', points: ['12 requisitos de seguranca para dados de cartao', 'Tokenizacao obrigatoria de PAN', 'MFA obrigatoria para acesso administrativo', 'Pen testing anual da infraestrutura', 'Log retention: 12 meses minimo'] },
          ].map((r, i) => (
            <div key={i} style={{ ...S.card, borderLeft: `3px solid ${r.color}` }}>
              <div style={{ fontWeight: 700, color: r.color, marginBottom: '0.5rem', fontSize: '0.9rem' }}>{r.title}</div>
              {r.points.map((p, j) => <div key={j} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>• {p}</div>)}
            </div>
          ))}
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Sistema de Deteção de Fraude em Tempo Real — Como Funciona</h2>
        <div style={S.highlight}>
          <strong>Feature engineering com janelas temporais (velocity features):</strong> Para cada transacao que entra no sistema, o motor de features consulta um store em memoria (tipicamente Redis com sorted sets indexados por timestamp) e calcula, em tempo real, quantas transacoes ocorreram na mesma conta nas ultimas 1 hora, 24 horas e 7 dias. Cada janela temporal gera o seu proprio contador. Um spike de velocidade — por exemplo, mais de 5 transacoes na ultima hora numa conta que normalmente faz 1 por dia — e automaticamente sinalizado como feature binaria. Este padrao e caracteristico de cartoes comprometidos usados em compras rapidas antes de serem bloqueados.
        </div>
        <p style={S.p}><strong>Features de comportamento e z-score de montante:</strong> Para cada conta existe um perfil historico guardado que inclui o montante medio das ultimas transacoes e o respetivo desvio padrao. Quando uma nova transacao chega, o sistema calcula o z-score do montante: (valor_atual menos media_historica) dividido pelo desvio_padrao. Um z-score acima de 3 indica que o montante e incomum para aquela conta. Outras features comportamentais incluem a ratio entre o montante atual e a media historica, se a categoria de comerciante e nova para o utilizador, e se o montante ultrapassa 3 vezes a media — um limiar empiricamente associado a fraude.</p>
        <p style={S.p}><strong>Modelo XGBoost e threshold de decisao:</strong> O classificador XGBoost e treinado com scale_pos_weight aproximadamente igual a 285 — o inverso da taxa de fraude (1 menos 0.0035 dividido por 0.0035) — para compensar o forte desbalanceamento de classes. A metrica de avaliacao usada e PR-AUC (area sob a curva Precision-Recall), muito mais informativa que ROC-AUC em datasets desbalanceados. O threshold de decisao e tipicamente calibrado em 0.15 (em vez de 0.5 padrao): em fraude, e preferivel bloquear uma transacao legitima ocasionalmente (falso positivo barato) do que deixar passar fraude real (falso negativo caro). O sistema tambem calcula um nivel de risco (LOW, MEDIUM, HIGH) baseado em intervalos de probabilidade para priorizar revisoes humanas.</p>
        <p style={S.p}><strong>Motor de regras AML e integracao com o pipeline ML:</strong> Em paralelo com o modelo de ML, um motor de regras deterministas verifica obrigacoes regulatorias especificas. Por exemplo: qualquer transacao em cash acima de 10.000 euros obriga a filing de um CTR (Currency Transaction Report) junto ao FinCEN nos EUA, independentemente do score de ML. O padrao de estruturacao — tres ou mais transacoes entre 8.000 e 9.999 euros nas ultimas 24 horas, desenhado para contornar o limiar de reporte — dispara automaticamente um SAR (Suspicious Activity Report) e potencial congelamento da conta. Transacoes com contrapartes em paises da lista negra FATF (como o Irao, Coreia do Norte ou Myanmar) ativam Enhanced Due Diligence obrigatoria. Em producao, o fluxo tipico e: consumidor Kafka recebe a transacao, motor de features corre em paralelo, resultado ML e resultado de regras sao combinados numa decisao final antes de 100ms.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. Benchmarks Fraud &amp; AML</h2>
        <div style={S.grid3}>
          {[
            { title: 'Visa Advanced AI', stat: '$40B fraude prevenida/ano', detail: 'Deep learning em 500+ features. Latencia <100ms. 500M+ transacoes/dia. False positive rate 30% abaixo da industria. Adaptive AI: retraining continuo.' },
            { title: 'Mastercard Decision Intelligence', stat: '300% melhoria FP', detail: 'ML em tempo real. Reduz falsos positivos em 300% vs. regras. Rede neural com dados de 150+ paises. Behavioral biometrics: padrao de digitacao e scroll.' },
            { title: 'Stripe Radar', stat: '99.97% accuracy', detail: 'ML treinado em $1T+ transacoes. Radar Rules: regras personalizadas por merchant. Chargeback rate <0.1%. Radar Score 0-100: probabilidade de fraude em tempo real.' },
            { title: 'SWIFT Customer Security', stat: '98% SAR auto', detail: 'Transaction screening em 42M mensagens/dia. AML automatico: 98% de SARs gerados automaticamente. Cooperacao com 200+ FIUs (Financial Intelligence Units).' },
            { title: 'Quantexa — GNN AML', stat: '+64% deteção', detail: 'Graph analytics: deteta padroes AML invisiveis em silos. +64% de alertas de qualidade vs. sistemas baseados em regras. Deployment: 30+ bancos globais tier-1.' },
            { title: 'ComplyAdvantage', stat: '1M+ entidades PEP', detail: 'Real-time AML data: 1M+ PEPs, 200k+ sanctions. API KYC screening em <200ms. Cobertura: OFAC, EU, UN, HMT, INTERPOL. Falsos positivos -50% vs. listas estaticas.' },
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
          <h2 style={S.h2}>7. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Fraud Detection — Comparacao de Metodos ML</strong> — Isolation Forest e DBSCAN detectam anomalias não supervisionadas; XGBoost com class weights e SMOTE aborda o extreme class imbalance (fraude: 0.1–1% de transacções); Graph Neural Networks exploram padrões de rede entre contas — ensemble de métodos supera qualquer método individual.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Anti-Money Laundering — Graph Neural Networks</strong> — GNNs modelam a rede de transacções entre contas como grafo; propagam mensagens para detectar padrões de layering e smurfing invisíveis em análise transação-a-transacção; IBM AMLSim e Elliptic Dataset são benchmarks públicos para treino e avaliação.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Transaction Monitoring — Regras AML + ML Hibrido</strong> — sistemas de TM combinam regras baseadas em thresholds (transacções &gt;€10K, jurisdições de alto risco) com ML para reduzir falsos positivos — sistemas legados têm taxas de FP &gt;95%; hybrid approach reduz FP em 60–80% mantendo recall regulatório.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Regulacao — GDPR, PSD2 e AI Act em Contexto Financeiro</strong> — GDPR limita uso de dados pessoais em scoring e marketing; PSD2 regula consentimento de dados de pagamento; AI Act classifica fraud detection e credit scoring como alto risco com requisitos de transparência, robustez e supervisão humana explícita.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Sistema de Deteção de Fraude em Tempo Real — Como Funciona</strong> — arquitectura: transacção chega via API → feature engineering em &lt;10ms (histórico de 90 dias, device fingerprint, localização) → XGBoost + GNN ensemble → score de risco → decisão approve/decline/3DS → logging para retraining — latência total &lt;50ms.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Benchmarks Fraud &amp; AML</strong> — IEEE-CIS Fraud Detection Dataset (Kaggle) tem ROC-AUC state-of-the-art de ~0.93; Elliptic Bitcoin Dataset para AML com F1 &gt;0.85 com GNN; custo de fraude em pagamentos globais foi $32.4B em 2023 (Nilson Report) — cada 1% de melhoria de F1 vale centenas de milhões.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
