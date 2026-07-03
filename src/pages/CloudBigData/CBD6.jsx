import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: '#f97316', borderLeft: '3px solid #f97316', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: '3px solid #f97316', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const StreamingDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Spark Structured Streaming — Arquitectura</p>
    <svg viewBox="0 0 580 150" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-st" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316" /></marker>
      </defs>
      {/* Source */}
      <rect x="10" y="35" width="90" height="80" rx="7" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="55" y="58" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Source</text>
      <text x="55" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Kafka</text>
      <text x="55" y="84" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Kinesis</text>
      <text x="55" y="96" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Files / Socket</text>
      {/* Arrow */}
      <line x1="100" y1="75" x2="130" y2="75" stroke="#f97316" strokeWidth="2" markerEnd="url(#arr-st)" />
      {/* Unbounded Table */}
      <rect x="130" y="25" width="130" height="100" rx="7" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="195" y="48" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Unbounded Table</text>
      <text x="195" y="62" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Cada evento novo =</text>
      <text x="195" y="74" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">nova linha na tabela</text>
      <text x="195" y="90" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Spark processa</text>
      <text x="195" y="102" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">em micro-batches</text>
      {/* Arrow */}
      <line x1="260" y1="75" x2="290" y2="75" stroke="#f97316" strokeWidth="2" markerEnd="url(#arr-st)" />
      {/* Query */}
      <rect x="290" y="35" width="120" height="80" rx="7" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="350" y="58" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Query</text>
      <text x="350" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">SELECT, GROUP BY</text>
      <text x="350" y="84" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">JOIN, window()</text>
      <text x="350" y="96" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">watermark()</text>
      {/* Arrow */}
      <line x1="410" y1="75" x2="440" y2="75" stroke="#f97316" strokeWidth="2" markerEnd="url(#arr-st)" />
      {/* Sink */}
      <rect x="440" y="35" width="120" height="80" rx="7" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="500" y="58" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Sink</text>
      <text x="500" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Delta Lake</text>
      <text x="500" y="84" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Kafka (downstream)</text>
      <text x="500" y="96" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Memory / Console</text>
      <text x="290" y="140" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Output modes: Append (só novos), Update (só alterados), Complete (tabela inteira)</text>
    </svg>
  </div>
);

const LambdaKappaDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Lambda vs. Kappa — Arquitectura</p>
    <svg viewBox="0 0 600 280" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-lk" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316" /></marker>
        <marker id="arr-lk-r" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316" /></marker>
      </defs>

      {/* ===== LAMBDA (left) ===== */}
      <text x="145" y="16" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="700">Lambda Architecture</text>
      {/* Source */}
      <rect x="95" y="25" width="100" height="32" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="145" y="45" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Data Source</text>
      {/* arrows down to batch & speed */}
      <line x1="120" y1="57" x2="75" y2="85" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-lk)"/>
      <line x1="170" y1="57" x2="215" y2="85" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-lk)"/>
      {/* Batch layer */}
      <rect x="10" y="88" width="130" height="44" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="75" y="106" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Batch Layer</text>
      <text x="75" y="120" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">recomputa tudo (Spark)</text>
      {/* Speed layer */}
      <rect x="150" y="88" width="130" height="44" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="215" y="106" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Speed Layer</text>
      <text x="215" y="120" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">incremental (Spark/Flink)</text>
      {/* arrows to views */}
      <line x1="75" y1="132" x2="75" y2="158" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-lk)"/>
      <line x1="215" y1="132" x2="215" y2="158" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-lk)"/>
      {/* Views */}
      <rect x="10" y="161" width="130" height="32" rx="6" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <text x="75" y="181" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="700">Batch View</text>
      <rect x="150" y="161" width="130" height="32" rx="6" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <text x="215" y="181" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="700">Realtime View</text>
      {/* arrows to serving */}
      <line x1="90" y1="193" x2="130" y2="220" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-lk)"/>
      <line x1="200" y1="193" x2="160" y2="220" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-lk)"/>
      {/* Serving layer */}
      <rect x="55" y="223" width="180" height="32" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="145" y="243" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Serving Layer (merge)</text>
      <text x="145" y="270" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Dois codebases — lógica duplicada</text>

      {/* divider */}
      <line x1="300" y1="10" x2="300" y2="270" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,3"/>

      {/* ===== KAPPA (right) ===== */}
      <text x="455" y="16" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="700">Kappa Architecture</text>
      {/* Source / Kafka with long retention */}
      <rect x="380" y="25" width="150" height="32" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="455" y="40" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Kafka (log imutável)</text>
      <text x="455" y="52" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">retenção longa / infinita</text>
      {/* arrow down */}
      <line x1="455" y1="57" x2="455" y2="98" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-lk)"/>
      {/* Stream processing */}
      <rect x="380" y="101" width="150" height="44" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="455" y="120" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Stream Processing</text>
      <text x="455" y="134" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Spark Structured Streaming</text>
      {/* arrow down */}
      <line x1="455" y1="145" x2="455" y2="186" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-lk)"/>
      {/* Serving layer */}
      <rect x="380" y="189" width="150" height="32" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="455" y="209" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Serving Layer</text>
      {/* reprocessing loop */}
      <path d="M 380,118 C 350,118 350,30 378,40" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#arr-lk-r)"/>
      <text x="358" y="70" textAnchor="middle" fill="#f97316" fontSize="7.5" transform="rotate(-90,358,80)">novo consumer group</text>
      <text x="455" y="245" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Um único codebase — reprocessa lendo o log desde o início</text>
    </svg>
  </div>
);

const WindowExplorer = () => {
  const [mode, setMode] = useState(0);
  const windows = [
    {
      name: 'Tumbling Window', color: '#f97316',
      desc: 'Janelas de tamanho fixo, sem sobreposição. Cada evento pertence exactamente a uma janela. A janela fecha no fim do intervalo e o resultado é emitido. Simples e eficiente — não há dados partilhados entre janelas.',
      exemplo: 'window("5 minutes"): eventos das 10:00-10:05 formam uma janela, eventos das 10:05-10:10 formam outra. Um evento às 10:07 pertence APENAS à janela 10:05-10:10.',
      usecase: 'Estatísticas por hora, relatórios periódicos, billing por período, alertas de rate (N erros por 5 minutos)',
      memoria: 'Baixa — apenas uma janela activa por key em cada momento',
    },
    {
      name: 'Sliding Window', color: '#f97316',
      desc: 'Janelas de tamanho fixo que deslizam com um passo (slide) menor que o tamanho. Eventos podem pertencer a múltiplas janelas sobrepostas. Mais informativo que tumbling mas mais custoso em memória e computação.',
      exemplo: 'window("10 minutes", "5 minutes"): janelas 10:00-10:10, 10:05-10:15, 10:10-10:20. Um evento às 10:07 aparece nas janelas 10:00-10:10 E 10:05-10:15.',
      usecase: 'Moving averages (média móvel de 10 min com update a cada 5 min), detecção de anomalias com suavização, trending topics em redes sociais',
      memoria: 'Maior — N/slide janelas activas por key simultaneamente',
    },
    {
      name: 'Session Window', color: '#f97316',
      desc: 'Janelas de tamanho dinâmico definidas por inactividade. Uma sessão começa com o primeiro evento e termina quando não chegam eventos durante um gap timeout. Eventos do mesmo utilizador são agrupados enquanto estiver activo.',
      exemplo: 'session gap "30 minutes": se utilizador tem eventos às 10:00, 10:15, 10:25 e nada até às 11:10, a sessão é 10:00-10:25. O próximo evento às 11:10 inicia nova sessão.',
      usecase: 'Análise de sessões de utilizadores (web analytics, mobile apps), agrupamento de log events por incidente, conversas de chatbot',
      memoria: 'Variável — proporcional ao número de sessões activas, que depende do padrão de actividade dos utilizadores',
    },
  ];
  const w = windows[mode];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Tipos de Window — Semântica e Trade-offs</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {windows.map((wn, i) => (<button key={i} onClick={() => setMode(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: mode === i ? wn.color : 'var(--bg-primary)', color: mode === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${mode === i ? wn.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{wn.name}</button>))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${w.color}40` }}>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.6rem' }}>{w.desc}</p>
        <div style={{ background: `${w.color}08`, border: `1px solid ${w.color}20`, borderRadius: 6, padding: '0.6rem 0.75rem', marginBottom: '0.6rem', fontSize: '0.83rem', color: 'var(--text-secondary)' }}><strong style={{ color: w.color }}>Exemplo:</strong> {w.exemplo}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.83rem' }}>
          <div><strong style={{ color: w.color }}>Usar quando:</strong> <span style={{ color: 'var(--text-secondary)' }}>{w.usecase}</span></div>
          <div><strong style={{ color: w.color }}>Memória:</strong> <span style={{ color: 'var(--text-secondary)' }}>{w.memoria}</span></div>
        </div>
      </div>
    </div>
  );
};

export default function CBD6() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cloud-bigdata" style={S.back}><ArrowLeft size={16} /> Voltar a Cloud &amp; Big Data</Link>
        <div style={S.tag}>Module 6</div>
        <h1 style={S.h1}>Streaming & Processamento em Tempo Real</h1>
        <p style={S.lead}>Spark Structured Streaming para processamento de dados em tempo real. Kafka como backbone de eventos. Event time vs. processing time, watermarks, output modes, semântica exactly-once, e os padrões de arquitectura Lambda vs. Kappa.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. Batch vs. Streaming — Quando Cada Um é Certo</h2>
          <p style={S.p}>Processamento batch processa dados acumulados durante um período (hora, dia, semana) num único job. É simples, eficiente, e adequado para a maioria dos casos de uso analíticos. O custo é a latência: os resultados reflectem dados de horas ou dias atrás.</p>
          <p style={S.p}>Streaming processa eventos individuais (ou micro-batches de segundos) à medida que chegam. Latência de milissegundos a segundos. Essencial para casos onde a acção deve acontecer rapidamente: alertas de fraude em tempo real, preços dinâmicos, recomendações durante a sessão activa do utilizador.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.25)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.5rem' }}>Batch — Quando usar</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                <li>Relatórios end-of-day / end-of-month</li>
                <li>ML training em dados históricos</li>
                <li>ETL para Data Warehouse</li>
                <li>Backfill e reprocessamento histórico</li>
                <li>Analytics exploratório e ad-hoc</li>
                <li>Latência de horas é aceitável</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.25)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.5rem' }}>Streaming — Quando usar</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                <li>Detecção de fraude em transacções (segundos importam)</li>
                <li>Preços dinâmicos em e-commerce / ridesharing</li>
                <li>Alertas de monitoring de infraestrutura</li>
                <li>Live dashboards de métricas de negócio</li>
                <li>Recomendações durante sessão activa do utilizador</li>
                <li>Latência de minutos já é tarde demais</li>
              </ul>
            </div>
          </div>

          <StreamingDiagram />

          <h3 style={S.h3}>Apache Kafka — O Backbone do Streaming Moderno</h3>
          <p style={S.p}>Apache Kafka, criado pelo LinkedIn em 2011 e open-sourced em 2012, é o sistema de mensagens distribuído que se tornou o backbone da maioria das arquitecturas de streaming modernas. A sua arquitectura baseia-se em três conceitos fundamentais: producers que publicam eventos, topics que organizam e persistem os eventos em ordem, e consumers que lêem os eventos à velocidade que conseguem.</p>
          <p style={S.p}>O que distingue Kafka de sistemas de mensagens tradicionais é a durabilidade: os eventos são persistidos em disco (com replicação configurável) e mantidos por um período configurável (horas, dias, semanas, ou indefinidamente). Isto permite replay de eventos históricos — crucial para reprocessamento, debugging, e alimentar novos consumidores com histórico. Um broker Kafka pode processar milhões de eventos por segundo com latências na ordem dos milissegundos.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Conceito Kafka</th><th style={S.th}>Definição</th><th style={S.th}>Analogia</th></tr></thead>
              <tbody>
                {[
                  ['Topic', 'Canal nomeado onde producers enviam eventos. Persistente e imutável — eventos são sempre append-only', 'Log de auditoria ordenado por tempo. Como um ficheiro de log mas distribuído e replicado'],
                  ['Partition', 'Subdivisão de um topic em N partições paralelas. Cada partição é uma sequência ordenada de eventos com um offset numérico', 'Como dividir um ficheiro de log em N partes para processamento paralelo'],
                  ['Offset', 'Posição de um evento dentro de uma partição. Monotonicamente crescente. Cada consumer group rastreia o seu próprio offset', 'Número de linha num ficheiro — permite retomar do ponto exacto onde ficou'],
                  ['Consumer Group', 'Conjunto de consumers que partilham o trabalho de ler um topic. Cada partição é lida por exactamente um consumer do grupo', 'N trabalhadores a dividir as páginas de um livro — cada um lê as suas páginas, sem repetição'],
                  ['Replication Factor', 'Quantas cópias de cada partição existem em brokers diferentes', 'Factor de redundância — rf=3 significa que 2 brokers podem falhar sem perda de dados'],
                  ['Retention', 'Período durante o qual os eventos são mantidos (por tempo ou por tamanho). Depois de expirado, os eventos mais antigos são eliminados', 'Política de retenção de ficheiros de log — manter 7 dias, depois apagar'],
                ].map(([c, d, a]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{c}</td><td style={S.td}>{d}</td><td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>{a}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Spark Structured Streaming</h2>
          <p style={S.p}>Spark Structured Streaming, introduzido no Spark 2.0 (2016), unifica batch e streaming com a mesma API de DataFrames. O modelo conceptual é elegante: um stream de dados é tratado como uma tabela ilimitada (unbounded table) que cresce continuamente à medida que chegam novos eventos. A query é escrita exactamente como seria para batch — Spark trata da execução incremental automaticamente.</p>
          <p style={S.p}>Internamente, Structured Streaming usa um modelo de micro-batch: cada trigger (configurável — 100ms a vários minutos) processa os novos dados que chegaram desde o trigger anterior. O estado entre triggers é mantido automaticamente pelo Spark (checkpointing no storage). O resultado é a simplicidade semântica de batch com a latência (quase) de streaming.</p>

          <h3 style={S.h3}>Event Time vs. Processing Time — Uma Distinção Crítica</h3>
          <p style={S.p}>Event time é quando o evento ocorreu no mundo real. Processing time é quando o evento chegou ao Spark para processamento. Em sistemas distribuídos, estes dois tempos podem diferir significativamente — redes instáveis, dispositivos offline, e filas cheias podem causar atrasos de segundos a horas.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.10)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.5rem' }}>Processing Time (problemático)</div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Agregar por "quando chegou ao Spark". Simples mas incorrecto para a maioria dos use cases: eventos atrasados da rede podem aparecer na janela errada, distorcendo os resultados.</p>
              <p style={{ fontSize: '0.82rem', color: '#f97316' }}>Exemplo: sensor envia dados cada 5 minutos mas a rede falha por 20 minutos — os eventos chegam ao Spark em batch e são incorrectamente atribuídos ao momento de chegada, não ao momento de medição.</p>
            </div>
            <div style={{ background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.10)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.5rem' }}>Event Time (correcto)</div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Agregar pela coluna de timestamp do evento — quando realmente aconteceu. Requer definir um watermark para saber quando uma janela está "completa" e pode ser fechada.</p>
              <p style={{ fontSize: '0.82rem', color: '#f97316' }}>O mesmo sensor: os dados são correctamente agregados pela hora de medição, independentemente de quando chegaram ao Spark. A janela só fecha quando se sabe que não chegam mais eventos tardios.</p>
            </div>
          </div>

          <h3 style={S.h3}>Watermarks — Gerir Late Data</h3>
          <p style={S.p}>Um watermark é a promessa de que "não aceitamos eventos com timestamp anterior a (tempo actual - watermark_delay)". Define o trade-off entre latência e completude: um watermark grande aceita mais eventos tardios mas fecha janelas mais tarde (maior latência dos resultados). Um watermark pequeno fecha janelas mais rapidamente mas pode perder eventos atrasados.</p>
          <p style={S.p}>O Spark calcula o watermark como: max(event_time_seen) - watermark_delay. Quando o watermark avança além do fim de uma janela, essa janela é finalizada e o estado em memória pode ser limpo. Sem watermarks, o estado cresceria indefinidamente (memory leak em streaming de longa duração).</p>

          <WindowExplorer />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Output Modes e Semântica de Entrega</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Output Mode</th><th style={S.th}>O que escreve</th><th style={S.th}>Quando usar</th><th style={S.th}>Compatibilidade</th></tr></thead>
              <tbody>
                {[
                  ['Append', 'Apenas novas linhas desde o trigger anterior', 'Queries sem aggregations, ou com aggregations + watermark onde o resultado é final', 'SELECT sem groupBy; SELECT com groupBy + watermark'],
                  ['Update', 'Apenas linhas que mudaram desde o trigger anterior (linhas novas + actualizações)', 'Aggregations onde o resultado pode actualizar — emite deltas eficientemente', 'SELECT com groupBy (sem ordenação)'],
                  ['Complete', 'A tabela de resultado completa a cada trigger', 'Aggregations onde se quer sempre o estado completo — dashboards, leaderboards', 'SELECT com groupBy (sem watermark — mantém estado para sempre)'],
                ].map(([m, o, u, c]) => (
                  <tr key={m}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{m}</td><td style={S.td}>{o}</td><td style={S.td}>{u}</td><td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{c}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Semântica de Entrega — At-Most-Once, At-Least-Once, Exactly-Once</h3>
          <p style={S.p}>Em sistemas de streaming distribuídos, a semântica de entrega é crucial — define o que acontece quando um executor falha durante o processamento de um evento.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              { n: 'At-Most-Once', c: '#f97316', desc: 'Cada evento é processado zero ou uma vez. Se o executor falha após ler mas antes de persistir, o evento é perdido. Nunca duplica, mas pode perder dados.', uso: 'Métricas onde perder alguns pontos é aceitável. Logging de alta frequência.' },
              { n: 'At-Least-Once', c: '#f97316', desc: 'Cada evento é processado uma ou mais vezes. Se o executor falha, o evento é reprocessado do offset guardado. Garante que não se perde eventos, mas pode duplicar.', uso: 'Pipelines onde deduplicação downstream é possível. Mais fácil de implementar.' },
              { n: 'Exactly-Once', c: '#f97316', desc: 'Cada evento é processado exactamente uma vez, mesmo com falhas. Requer sinks idempotentes ou transacções distribuídas. Spark Structured Streaming + Delta Lake garante isto nativamente.', uso: 'Sistemas financeiros, billing, qualquer situação onde duplicados causam danos.' },
            ].map(({ n, c, desc, uso }) => (
              <div key={n} style={{ background: `${c}08`, border: `1px solid ${c}25`, borderRadius: 8, padding: '0.9rem' }}>
                <div style={{ fontWeight: 700, color: c, marginBottom: '0.35rem' }}>{n}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>{desc}</p>
                <p style={{ fontSize: '0.79rem', color: c, margin: 0, fontWeight: 600 }}>Usar: {uso}</p>
              </div>
            ))}
          </div>

          <div style={S.note}>Spark Structured Streaming + Delta Lake como sink fornece exactly-once semantics nativamente: Delta Lake usa transacções ACID, e Spark usa checkpointing de offsets. Juntos eliminam duplicados mesmo com falhas de executor.</div>

          <h3 style={S.h3}>Lambda vs. Kappa Architecture</h3>
          <p style={S.p}>Lambda e Kappa são dois padrões arquitecturais para combinar processamento batch (correcto, mas lento) com processamento streaming (rápido, mas com risco de inconsistências temporárias) — independentemente da tecnologia concreta usada para cada camada.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Lambda Architecture (Nathan Marz, 2011)</div>
              <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Dois layers paralelos: Batch Layer (reprocessa toda a história, produz views batch) + Speed Layer (processa dados recentes, produz views em tempo real). Query layer combina os dois. Correcto mas complexo — dois sistemas de código a manter.</p>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Problema: dois codebase diferentes (batch Spark + streaming Spark/Flink) com lógica duplicada.</div>
            </div>
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Kappa Architecture (Jay Kreps, 2014)</div>
              <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Apenas um sistema de streaming. O Kafka guarda o histórico completo com retenção longa. Para reprocessar o histórico, basta criar um novo consumer group e ler desde o início. Um só codebase, simplicidade operacional.</p>
              <div style={{ fontSize: '0.8rem', color: '#f97316', fontWeight: 600 }}>Tendência actual: Kappa com Spark Structured Streaming + Delta Lake. Spark Structured Streaming pode fazer backfill batch e streaming com o mesmo código.</div>
            </div>
          </div>

          <LambdaKappaDiagram />

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Critério</th><th style={S.th}>Lambda</th><th style={S.th}>Kappa</th></tr></thead>
              <tbody>
                {[
                  ['Codebases', 'Dois — lógica de batch e de streaming implementadas separadamente (e têm de produzir o mesmo resultado)', 'Um só — a mesma lógica de streaming serve para dados em tempo real e para reprocessamento histórico'],
                  ['Reprocessamento', 'Corre o job batch sobre todo o histórico guardado (HDFS/S3)', 'Cria-se um novo consumer group que lê o log do Kafka desde o offset 0'],
                  ['Armazenamento de histórico', 'Data Lake / Warehouse separado do sistema de mensagens', 'O próprio log do Kafka funciona como fonte de verdade (retenção longa/infinita)'],
                  ['Consistência', 'Risco de divergência entre Batch View e Realtime View (lógica duplicada pode ter bugs diferentes)', 'Uma só lógica → resultados consistentes entre tempo real e reprocessamento, por construção'],
                  ['Complexidade operacional', 'Maior — dois clusters/jobs a monitorizar, agendar e manter', 'Menor — um único pipeline de streaming'],
                  ['Quando faz sentido', 'Quando o processamento batch precisa de algoritmos que não são (ainda) viáveis em streaming, ou de motores diferentes para cada caso', 'Quando o motor de streaming consegue lidar tanto com latência baixa como com throughput de reprocessamento em massa (ex: Spark Structured Streaming)'],
                ].map(([c, l, k]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 600 }}>{c}</td><td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{l}</td><td style={{ ...S.td, fontSize: '0.85rem', color: '#f97316' }}>{k}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>4. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.4rem"}}><strong>Batch vs. Streaming</strong> — Batch processa dados acumulados com alta throughput e latência de minutos a horas; Streaming processa eventos em tempo real com latência de milissegundos — a escolha depende do SLA de latência; Lambda (batch+speed) vs. Kappa (streaming único para ambos).</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Spark Structured Streaming</strong> — trata streams como tabelas ilimitadas com a mesma API DataFrame/SQL do batch; Kafka persiste eventos com retenção configurável permitindo replay; event time com watermarks é preferível a processing time para dados com late arrival.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Output Modes e Exactly-Once</strong> — Append (novas linhas), Complete (resultado completo para agregações), Update (linhas modificadas); exactly-once com Spark Structured Streaming + Delta Lake: checkpointing de offsets + ACID do Delta eliminam duplicados.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
