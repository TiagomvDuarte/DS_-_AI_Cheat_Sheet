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
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', marginTop: '0.75rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.55rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.5rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

function FraudTaxonomySVG() {
  const types = [
    { name: 'Card-Present', items: ['Skimming ATM', 'Shimming chip', 'Lost/stolen physical'], color: '#f97316' },
    { name: 'Card-Not-Present', items: ['E-commerce sem 3DS', 'Account takeover', 'Synthetic identity'], color: '#f97316' },
    { name: 'Account Fraud', items: ['ATO via credential stuffing', 'SIM swap + OTP bypass', 'Social engineering'], color: '#f97316' },
    { name: 'Application Fraud', items: ['Synthetic ID (SSN+real info)', 'NINJA loans bust-out', 'Mule account opening'], color: '#f97316' },
  ];
  const boxW = 120, boxH = 110, gap = 8, marginX = 16;
  const totalW = types.length * boxW + (types.length - 1) * gap + marginX * 2;
  return (
    <svg viewBox={`0 0 ${totalW} 155`} style={{ width: '100%', borderRadius: 8 }}>
      <rect width={totalW} height="155" fill="var(--bg-secondary)" rx="8" />
      <text x={totalW / 2} y={14} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Taxonomia de Fraude Financeira — 4 Categorias</text>
      {types.map((t, i) => {
        const x = marginX + i * (boxW + gap);
        const cx = x + boxW / 2;
        return (
          <g key={i}>
            <rect x={x} y={22} width={boxW} height={boxH} fill={t.color} rx="6" opacity="0.12" />
            <rect x={x} y={22} width={boxW} height={boxH} fill="none" stroke={t.color} strokeWidth="1.5" rx="6" />
            <text x={cx} y={37} textAnchor="middle" fill={t.color} fontSize="9" fontWeight="700">{t.name}</text>
            <line x1={x + 8} y1={43} x2={x + boxW - 8} y2={43} stroke={t.color} strokeWidth="0.8" opacity="0.4" />
            {t.items.map((item, j) => (
              <text key={j} x={cx} y={54 + j * 20} textAnchor="middle" fill="#fb923c" fontSize="7.8">{item}</text>
            ))}
          </g>
        );
      })}
      <text x={totalW / 2} y={146} textAnchor="middle" fill="#fb923c" fontSize="9">ATO = Account Takeover. CNP fraude: 75%+ das perdas em cartao. Synthetic ID: combina dados reais + ficticios — difícil de detectar sem graph analysis.</text>
    </svg>
  );
}

function ImbalanceSVG() {
  const methods = [
    { name: 'Random Over', fraud: 55, legit: 55, note: 'Duplica fraud rows — overfitting' },
    { name: 'SMOTE',       fraud: 55, legit: 55, note: 'Sinteticos via kNN — melhor generalizacao' },
    { name: 'ADASYN',      fraud: 52, legit: 55, note: 'Foco em fronteira decision boundary' },
    { name: 'Random Under',fraud: 20, legit: 20, note: 'Remove legit rows — perde informacao' },
    { name: 'Original',    fraud: 4,  legit: 55, note: 'Ratio 1:590 — accuracy paradox' },
  ];
  const cx = 260; const maxBar = 120;
  return (
    <svg viewBox="0 0 620 220" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="620" height="210" fill="var(--bg-secondary)" rx="8" />
      <text x={310} y={14} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Estrategias de Imbalance — Distribuicao Fraude vs Legítimo (ULB Credit Card)</text>
      <text x={cx - 60} y={28} textAnchor="middle" fill="#f97316" fontSize="8.5" fontWeight="700">Fraude</text>
      <text x={cx + 60} y={28} textAnchor="middle" fill="#fbbf24" fontSize="8.5" fontWeight="700">Legítimo</text>
      <line x1={cx} y1={32} x2={cx} y2={198} stroke="var(--card-border)" strokeWidth="1" />
      {methods.map((m, i) => {
        const y = 38 + i * 32;
        const fraudW = (m.fraud / 55) * maxBar;
        const legitW = (m.legit / 55) * maxBar;
        return (
          <g key={i}>
            <rect x="8" y={y} width="604" height="28" fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'transparent'} rx="2" />
            <text x={cx - fraudW - 4} y={y + 17} textAnchor="end" fill="#f97316" fontSize="9" fontWeight="600">{m.name}</text>
            <rect x={cx - fraudW} y={y + 5} width={fraudW} height={16} fill="#f97316" rx="2" opacity="0.85" />
            <rect x={cx + 2} y={y + 5} width={legitW} height={16} fill="#fbbf24" rx="2" opacity="0.55" />
            <text x={cx + maxBar + 12} y={y + 17} fill="#fb923c" fontSize="8">{m.note}</text>
          </g>
        );
      })}
      <text x={310} y={214} textAnchor="middle" fill="#fb923c" fontSize="8.5">SMOTE: sampling_strategy=0.1 gera fraude ate 10% do treino. Nunca aplicar SMOTE ao validation/test set.</text>
    </svg>
  );
}

function RTArchSVG() {
  const components = [
    { label: 'Kafka', sub: 'Event stream\n10k TPS', color: '#f97316', x: 20, y: 50 },
    { label: 'Flink', sub: 'Stream proc\nWindow features', color: '#f97316', x: 150, y: 50 },
    { label: 'Feature Store', sub: 'Redis online\nS3 offline', color: '#f97316', x: 290, y: 20 },
    { label: 'Model Server', sub: 'FastAPI/gRPC\np99 < 30ms', color: '#f97316', x: 420, y: 50 },
    { label: 'Decision Engine', sub: 'Rules + Score\nThreshold logic', color: '#f97316', x: 290, y: 110 },
  ];
  return (
    <svg viewBox="0 0 560 225" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="225" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={14} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Arquitectura RT Fraud Detection — Lambda/Kappa Pattern</text>
      {components.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y={c.y} width={120} height={52} fill="var(--bg-secondary)" rx="7" />
          <rect x={c.x} y={c.y} width={120} height={52} fill={c.color} rx="7" opacity="0.14" />
          <rect x={c.x} y={c.y} width={120} height={52} fill="none" stroke={c.color} strokeWidth="1.5" rx="7" />
          <text x={c.x + 60} y={c.y + 18} textAnchor="middle" fill={c.color} fontSize="10" fontWeight="700">{c.label}</text>
          {c.sub.split('\n').map((line, j) => (
            <text key={j} x={c.x + 60} y={c.y + 32 + j * 14} textAnchor="middle" fill="#fb923c" fontSize="8">{line}</text>
          ))}
        </g>
      ))}
      <line x1={140} y1={76} x2={148} y2={76} stroke="#fb923c" strokeWidth="1.5" />
      <polygon points="148,72 158,76 148,80" fill="#fb923c" />
      <line x1={270} y1={65} x2={288} y2={42} stroke="#fb923c" strokeWidth="1.5" />
      <polygon points="284,38 294,38 288,48" fill="#fb923c" />
      <line x1={270} y1={87} x2={288} y2={128} stroke="#fb923c" strokeWidth="1.5" />
      <polygon points="284,132 294,132 288,122" fill="#fb923c" />
      <line x1={410} y1={48} x2={418} y2={65} stroke="#fb923c" strokeWidth="1.5" />
      <polygon points="414,68 424,72 420,60" fill="#fb923c" />
      <line x1={410} y1={134} x2={418} y2={88} stroke="#fb923c" strokeWidth="1.5" />
      <polygon points="414,84 424,80 420,92" fill="#fb923c" />
      <text x={280} y={176} textAnchor="middle" fill="#fb923c" fontSize="8.5">
        <tspan x={280} dy="0">SLA: p99 latencia end-to-end menos de 100ms. Disponibilidade 99.99% (52 min downtime/ano max).</tspan>
        <tspan x={280} dy="13">Feature store dual: Redis online 5ms + S3/BigQuery offline. Training-serving skew: maior causa de degradacao.</tspan>
        <tspan x={280} dy="13">Feature store elimina skew — mesma logica de treino e inference em producao.</tspan>
      </text>
    </svg>
  );
}

function DriftSVG() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const auc = days.map(d => d < 20 ? 0.94 - d * 0.002 + Math.random() * 0.01
                                   : 0.88 - (d - 20) * 0.012 + Math.random() * 0.01);
  const W = 460, H = 110, ox = 50, oy = 20;
  const scaleX = (d) => ox + ((d - 1) / 29) * W;
  const minAUC = 0.78, maxAUC = 0.96;
  const scaleY = (v) => oy + H - ((v - minAUC) / (maxAUC - minAUC)) * H;
  const path = auc.map((v, i) => `${i === 0 ? 'M' : 'L'}${scaleX(i + 1).toFixed(1)},${scaleY(v).toFixed(1)}`).join(' ');
  const threshold = scaleY(0.88);
  return (
    <svg viewBox="0 0 560 180" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="180" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={8} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Concept Drift — Degradacao AUC-PR em Producao (30 dias)</text>
      <line x1={ox} y1={threshold} x2={ox + W} y2={threshold} stroke="#f97316" strokeWidth="1" strokeDasharray="6,3" opacity="0.85" />
      <text x={ox + W - 60} y={threshold + 10} fill="#f97316" fontSize="8">AUC=0.88 (retrain trigger)</text>
      <line x1={scaleX(20)} y1={oy} x2={scaleX(20)} y2={oy + H} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3" />
      <text x={scaleX(20)} y={oy - 4} textAnchor="middle" fill="#f59e0b" fontSize="8">Novo ataque D20</text>
      <path d={path} fill="none" stroke="#f97316" strokeWidth="2" />
      <line x1={ox} y1={oy} x2={ox} y2={oy + H + 8} stroke="var(--card-border)" strokeWidth="1" />
      <line x1={ox} y1={oy + H} x2={ox + W + 5} y2={oy + H} stroke="var(--card-border)" strokeWidth="1" />
      <text x={ox - 5} y={oy + 4} textAnchor="end" fill="#fb923c" fontSize="7.5">{maxAUC}</text>
      <text x={ox - 5} y={oy + H + 4} textAnchor="end" fill="#fb923c" fontSize="7.5">{minAUC}</text>
      <text x={280} y={155} textAnchor="middle" fill="#fb923c" fontSize="9">PSI (Population Stability Index): PSI maior que 0.2 numa feature = data drift significativo = retraining necessario.</text>
      <text x={280} y={168} textAnchor="middle" fill="#fb923c" fontSize="9">Tipos: Data drift (distribuicao features muda), Concept drift (relacao feature-target muda), Label drift (proporcao fraude muda).</text>
    </svg>
  );
}

export default function FIN9() {
  const mod = modules[8];
  return (
    <div style={S.page}>
      <Link to="/fintech" style={S.back}>← FinTech & Finance</Link>
      <div style={S.badge}>MÓDULO 09</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Taxonomia de Fraude — Para alem de AML</h2>
        <div style={S.diagram}><FraudTaxonomySVG /></div>
        <div style={S.highlight}>
          <strong>Account Takeover (ATO)</strong> é o tipo de fraude com crescimento mais rapido: +72% YoY em 2023 segundo a Javelin Research. Os vectores principais sao o credential stuffing (listas de passwords vazadas — o HaveIBeenPwned tem mais de 12 mil milhoes de credenciais comprometidas), o SIM swapping (o atacante convence o operador de telecomunicacoes a transferir o numero de telefone para um SIM controlado pelo fraudador, interceptando os OTPs de autenticacao) e o phishing via SMS denominado smishing. Os sinais de deteccao tipicos incluem um device fingerprint novo combinado com localizacao geografica anomala e elevada velocidade de tentativas de login.
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Sinal chave</th>
              <th style={S.th}>Dataset</th>
              <th style={S.th}>Benchmark AUC</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>CNP Card Fraud</td><td style={S.td}>Merchant category + pais</td><td style={S.td}>ULB (284k tx)</td><td style={S.td}>0.98 (LightGBM)</td></tr>
            <tr><td style={S.td}>Account Takeover</td><td style={S.td}>Device ID + IP velocity</td><td style={S.td}>APATE (simulado)</td><td style={S.td}>0.92</td></tr>
            <tr><td style={S.td}>Synthetic Identity</td><td style={S.td}>Bust-out pattern + graph</td><td style={S.td}>Proprietary</td><td style={S.td}>0.85</td></tr>
            <tr><td style={S.td}>Insurance Fraud</td><td style={S.td}>Claim frequency + ICD codes</td><td style={S.td}>Medicare (CMS)</td><td style={S.td}>0.89</td></tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Class Imbalance — SMOTE e Cost-Sensitive Learning</h2>
        <div style={S.diagram}><ImbalanceSVG /></div>
        <div style={S.highlight}>
          <strong>O problema do desequilibrio de classes</strong> é central em deteccao de fraude: no dataset ULB Credit Card, apenas 492 transacoes em 284.807 sao fraudulentas — um racio de 1:590. Um modelo naive que prevê sempre "legítimo" atingiria 99.8% de accuracy mas seria completamente inutil. O SMOTE (Synthetic Minority Oversampling Technique) resolve isto gerando exemplos sinteticos de fraude interpolando entre exemplos reais no espaco de features — para cada exemplo de fraude, os k vizinhos mais proximos (tipicamente k igual a 5) sao identificados e novos exemplos sinteticos sao criados em pontos aleatorios ao longo dos segmentos que os ligam. O parametro sampling_strategy controla o racio final — 0.1 significa gerar fraude ate atingir 10% do treino.
        </div>
        <p style={S.p}><strong>Cost-sensitive learning</strong> é uma alternativa ao resampling: em vez de alterar a distribuicao dos dados, penaliza-se o modelo por erros em fraude mais do que em transacoes legitimas. No XGBoost, o parametro scale_pos_weight define o peso dos positivos — para o dataset ULB seria 590 (numero de negativos dividido por numero de positivos). A escolha do threshold de classificacao é igualmente critica: o threshold otimo nao é 0.5 mas sim aquele que maximiza o F-beta score, onde beta superior a 1 atribui mais peso ao recall (minimizar fraude nao detectada) do que a precision. Para operacoes de alto risco, um beta de 2 é comum — significa que um falso negativo (fraude que passou) é duas vezes mais custoso que um falso positivo (cliente bloqueado incorretamente).</p>
        <p style={S.p}><strong>Regra critica sobre data leakage:</strong> SMOTE e outras tecnicas de resampling devem ser aplicadas exclusivamente ao training set — nunca ao validation ou test set. Aplicar ao test set causa data leakage e produz metricas irrealisticamente optimistas que nao se replicam em producao. A forma correta é usar uma pipeline que encadeia o resampler e o modelo, garantindo que o resampling é executado dentro de cada fold de cross-validation sem contaminar os dados de avaliacao.</p>
        <div style={S.note}>AUC-ROC é enganosa em imbalanced datasets: um modelo que prevê sempre "legítimo" tem AUC-ROC de 0.5 mas AUC-PR proxima de 0 (a taxa de fraude). Use sempre AUC-PR (Precision-Recall AUC) como metrica primaria em fraude.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Feature Engineering para Fraude em Tempo Real</h2>
        <div style={S.highlight}>
          <strong>Features de velocidade</strong> sao as mais preditivas em fraude e devem ser calculadas em tempo real com latencia inferior a 5 milissegundos. A arquitectura tipica usa Redis Sorted Sets onde o score de cada membro é o timestamp da transacao — isto permite remover automaticamente transacoes expiradas (fora da janela temporal) e calcular agregados de forma extremamente eficiente. Para cada cartao calcula-se o numero de transacoes nas ultimas janelas de 5 minutos, 1 hora e 24 horas, bem como o valor total transacionado, o valor maximo e o numero de merchants distintos em cada janela. Um burst de 4 transacoes em 5 minutos num cartao que normalmente faz 1 por dia é um sinal de fraude extremamente forte.
        </div>
        <p style={S.p}><strong>Device fingerprinting</strong> constroi um identificador unico do dispositivo a partir de atributos do browser e hardware sem armazenar cookies: User-Agent, resolucao de ecra, timezone, hash WebGL (que depende da GPU especifica), canvas fingerprint (renderizacao ligeiramente diferente em cada combinacao hardware/driver/OS) e lista de fonts instaladas. Este conjunto de atributos é resistente a simples uso de VPN ou proxy. A anomalia de device é calculada como a fracao de transacoes historicas do cartao provenientes de um device diferente do atual — um cartao com 200 transacoes sempre do mesmo dispositivo e que de repente usa um device novo tem anomalia de 0.99. Complementarmente, o geolocation velocity check deteta "impossible travel": uma transacao em Lisboa seguida de outra em Nova Iorque 30 minutos depois é fisicamente impossivel e deve gerar score de fraude maximo.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Arquitectura de Decisao em Tempo Real</h2>
        <div style={S.diagram}><RTArchSVG /></div>
        <div style={S.highlight}>
          <strong>A arquitectura Lambda/Kappa</strong> divide o processamento em duas camadas: a camada de streaming (Kafka + Apache Flink) processa eventos em tempo real calculando features de janela temporal (window features), e a feature store dual mantém os valores mais recentes em Redis para inferencia online (latencia de 5ms) e os dados historicos completos em S3 ou BigQuery para treino offline. O Model Server expoe a inferencia via FastAPI ou gRPC com SLA de p99 inferior a 30ms. O Decision Engine combina o score do modelo com regras hard deterministas — por exemplo, uma transacao acima de 5.000 euros com mais de 3 transacoes nos ultimos 5 minutos recebe score forcado a 0.95 independentemente do modelo, porque o risco operacional de uma perda elevada justifica revisao humana obrigatoria.
        </div>
        <p style={S.p}><strong>Zonas de decisao e thresholds:</strong> O sistema define tipicamente tres zonas — aprovacao automatica (score inferior a 0.30), revisao humana (score entre 0.30 e 0.80) e bloqueio automatico (score superior a 0.80). A calibracao destes thresholds é feita minimizando o custo total de negocio: cada falso negativo (fraude aprovada) tem um custo de aproximadamente 50 dolares em custos operacionais de chargeback, e cada falso positivo (cliente legítimo bloqueado) tem um custo de 5 dolares em custos de suporte e risco de perda do cliente. O threshold otimo minimiza a soma ponderada destes custos sobre toda a distribuicao de scores do validation set. A disponibilidade do sistema deve ser de 99.99%, equivalente a no maximo 52 minutos de downtime por ano, dado que qualquer interrupcao bloqueia transacoes legitimas em tempo real.</p>
        <div style={S.note}>Champion/Challenger A/B testing: 95% traffic para champion, 5% para challenger. Promover challenger quando AUC-PR melhora mais de 1pp e chargeback rate reduz. Blue/green deployment: zero-downtime model updates via load balancer swap.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Concept Drift e Retraining Automatico</h2>
        <div style={S.diagram}><DriftSVG /></div>
        <div style={S.highlight}>
          <strong>Concept drift em deteccao de fraude</strong> é inevitavel e acelerado: os fraudadores adaptam continuamente os seus metodos em resposta aos modelos de deteccao, criando uma corrida armamentista dinamica. O PSI (Population Stability Index) é o indicador quantitativo de referencia para data drift — calcula a divergencia KL simetrica entre a distribuicao de uma feature no treino e em producao. Um PSI inferior a 0.1 indica distribuicao estavel, entre 0.1 e 0.2 indica mudanca moderada que requer monitorizacao, e superior a 0.2 indica drift significativo que justifica retraining imediato. O trigger de retraining por performance é activado quando o AUC-PR em rolling window cai mais de 3 pontos percentuais abaixo da baseline — no grafico acima, o novo ataque no dia 20 causou uma queda abrupta que activaria o trigger automaticamente.
        </div>
        <p style={S.p}><strong>Active learning</strong> optimiza o processo de anotacao humana que alimenta o retraining: em vez de anotar transacoes aleatorias, o sistema selecciona os casos de maior incerteza para o modelo — aqueles com score proximo de 0.5, onde a decisao é mais ambigua. A incerteza é calculada como 1 menos 2 vezes o valor absoluto de (probabilidade de fraude menos 0.5), sendo maxima em 0.5 e minima em 0 e 1. Ao focar a anotacao humana nos casos mais informativos, é possivel melhorar significativamente o modelo com 100 novos exemplos anotados em vez de 1.000 aleatorios. <strong>Human-in-the-Loop:</strong> os analistas de fraude que reveem transacoes na fila veem os SHAP values de cada feature (quais contribuiram mais para o score), o historico do cliente e casos similares — as suas decisoes (fraude confirmada ou falso positivo) alimentam o ciclo de retraining continuo.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. Metricas e Custo de Negocio</h2>
        <div style={S.highlight}>
          <strong>Metricas de negocio vs metricas ML:</strong> AUC-PR e F1-score sao metricas de modelo, mas o negocio opera com KPIs financeiros: o chargeback rate (percentagem do volume total de transacoes que resulta em chargeback — target inferior a 0.1%, equivalente a 10 basis points), o false positive rate (percentagem de transacoes legitimas incorretamente bloqueadas — target inferior a 1%, acima disto o impacto na experiencia do cliente é significativo) e o fraud detection rate (percentagem do valor total de fraude capturado pelo modelo — target superior a 85%). A relacao entre estes KPIs é governada pelo threshold de classificacao: diminuir o threshold aumenta o recall (mais fraude detectada) mas aumenta os falsos positivos; aumentar o threshold reduz falsos positivos mas deixa passar mais fraude.
        </div>
        <p style={S.p}><strong>Calculo do custo total otimo:</strong> Para cada threshold t, o custo total é igual a (numero de falsos negativos multiplicado pelo custo de falso negativo) mais (numero de falsos positivos multiplicado pelo custo de falso positivo). O custo de falso negativo inclui o valor da transacao fraudulenta, as taxas de chargeback (tipicamente 15 a 50 dolares por ocorrencia) e os custos operacionais de investigacao. O custo de falso positivo inclui o custo de suporte ao cliente, o risco de abandono do cliente e a perda de receita da transacao bloqueada. Variando o threshold entre 0.1 e 0.9 e calculando o custo total para cada valor, identifica-se o threshold que minimiza o custo esperado — este processo deve ser repetido periodicamente pois a distribuicao de scores evolui com concept drift.</p>
        <div style={S.note}>KPIs de negocio: chargeback rate (target menos de 0.1% do volume), false positive rate (target menos de 1% das transacoes legítimas — experiencia do cliente), fraud detection rate (mais de 85% do valor de fraude capturado). Regulatorio: PSD2 Strong Customer Authentication (SCA) — 2FA obrigatorio exceto em transacoes de baixo risco (menos de 30€ ou merchant de confianca).</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>7. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Taxonomia de Fraude — Para alem de AML</strong> — fraude financeira abrange: fraude de identidade, fraude de cartão presente/não-presente, fraude de crédito, fraude de seguros e BEC (Business Email Compromise); cada tipo tem features e modelos óptimos diferentes — um sistema de fraude generalista é raramente óptimo.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Class Imbalance — SMOTE e Cost-Sensitive Learning</strong> — fraude representa 0.01–0.1% das transacções; SMOTE gera sintéticos de minoria via interpolação de k-vizinhos; cost-sensitive learning atribui custo maior a falsos negativos no treino — na prática, combinar SMOTE com custo assimétrico supera qualquer método individualmente.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Feature Engineering para Fraude em Tempo Real</strong> — features de janela deslizante (montante médio 7d, nº transacções 1h, velocidade de geolocalização), device fingerprint (IP, user-agent, hardware hash), relação com rede de contas e padrão de horário são as features mais preditivas em fraud detection em pagamentos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Arquitectura de Decisao em Tempo Real</strong> — a decisão de fraude deve ocorrer em &lt;100ms no checkout; arquitectura: feature store pré-calculada (Redis) + feature vector em tempo real → modelo no edge ou API de scoring → decision engine com regras + threshold → resposta à gateway de pagamento.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Concept Drift e Retraining Automatico</strong> — padrões de fraude evoluem continuamente (concept drift) pois fraudadores adaptam-se; monitorização de PSI (Population Stability Index) e métricas de performance por cohort detectam drift; retraining automático com dados dos últimos 30 dias é o padrão industrial.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Metricas e Custo de Negocio</strong> — em fraude, recall (detectar fraude) e precision (não bloquear bons clientes) estão em trade-off; o ponto óptimo maximiza expected value = TP·savings − FP·custo_de_revisão; chargeback rate (&lt;0.1% para Visa) e false decline rate são KPIs de negócio complementares a AUC.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
