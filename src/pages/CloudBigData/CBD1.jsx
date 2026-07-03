import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

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

const FiveVsDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>Os 5 Vs do Big Data</p>
    <svg viewBox="0 0 560 200" style={{ maxWidth: '100%', height: 'auto' }}>
      {[
        { label: 'Volume', sub: 'Terabytes → Petabytes', x: 56, color: '#f97316' },
        { label: 'Velocity', sub: 'Batch → Real-time', x: 168, color: '#f97316' },
        { label: 'Variety', sub: 'Structured / Semi / Unstructured', x: 280, color: '#f97316' },
        { label: 'Veracity', sub: 'Ruído, Bias, Incerteza', x: 392, color: '#f97316' },
        { label: 'Value', sub: 'Insights accionáveis', x: 504, color: '#f97316' },
      ].map(({ label, sub, x, color }) => (
        <g key={label}>
          <circle cx={x} cy={80} r={46} fill={`${color}18`} stroke={color} strokeWidth="2" />
          <text x={x} y={75} textAnchor="middle" fill={color} fontSize="13" fontWeight="800">{label}</text>
          <text x={x} y={91} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{sub.split('/')[0]}</text>
          {sub.includes('/') && <text x={x} y={101} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{sub.split('/').slice(1).join('/')}</text>}
          <line x1={x} y1="128" x2={x} y2="145" stroke={color} strokeWidth="1.5" />
        </g>
      ))}
      <rect x="20" y="145" width="520" height="40" rx="8" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="280" y="169" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Big Data = dados demasiado grandes, rápidos ou variados para ferramentas tradicionais</text>
    </svg>
  </div>
);

const ScalingDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Escala Vertical vs. Escala Horizontal</p>
    <svg viewBox="0 0 560 160" style={{ maxWidth: '100%', height: 'auto' }}>
      <text x="130" y="18" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Escala Vertical (Scale Up)</text>
      <rect x="105" y="25" width="50" height="35" rx="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="130" y="47" textAnchor="middle" fill="#f97316" fontSize="9">Server</text>
      <text x="130" y="75" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">→ CPU mais potente</text>
      <text x="130" y="87" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">→ Limite físico</text>
      <text x="130" y="99" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">→ Downtime</text>
      <rect x="75" y="110" width="110" height="22" rx="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="130" y="125" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600">Mainframe tradicional</text>
      <line x1="260" y1="10" x2="260" y2="150" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
      <text x="410" y="18" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Escala Horizontal (Scale Out)</text>
      {[300, 360, 420, 480].map((x, i) => (
        <g key={x}>
          <rect x={x - 22} y="25" width="44" height="28" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
          <text x={x} y="43" textAnchor="middle" fill="#f97316" fontSize="8">Node {i + 1}</text>
        </g>
      ))}
      <text x="410" y="75" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">→ Commodity hardware</text>
      <text x="410" y="87" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">→ Escala linear</text>
      <text x="410" y="99" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">→ Tolerante a falhas</text>
      <rect x="310" y="110" width="200" height="22" rx="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="410" y="125" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600">Hadoop / Spark Cluster</text>
    </svg>
  </div>
);

const HDFSDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Arquitectura HDFS — NameNode + DataNodes</p>
    <svg viewBox="0 0 560 225" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-hdfs" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <rect x="200" y="20" width="160" height="50" rx="8" fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="2" />
      <text x="280" y="42" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">NameNode</text>
      <text x="280" y="58" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Metadata — onde está cada bloco</text>
      {[70, 210, 350, 490].map((x, i) => (
        <g key={x}>
          <rect x={x - 42} y="120" width="84" height="60" rx="7" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
          <text x={x} y="142" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="600">DataNode {i + 1}</text>
          <text x={x} y="157" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Bloco A</text>
          <text x={x} y="169" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Bloco B / C</text>
          <line x1={x} y1="120" x2={i < 2 ? 260 : 300} y2="70" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#arr-hdfs)" />
        </g>
      ))}
      <rect x="180" y="190" width="200" height="22" rx="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="280" y="205" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600">Replicação = 3 (por omissão)</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Ficheiros divididos em blocos de 128 MB. O NameNode guarda o mapa; os DataNodes guardam os dados.</p>
  </div>
);

const MapReduceDemo = () => {
  const [step, setStep] = useState(0);
  const steps = [
    { label: 'Input', color: '#f97316', content: ['"big data is big"', '"data is everywhere"'], desc: 'Texto distribuído pelos mappers. Cada linha é processada independentemente pelo seu mapper local — os dados não saem do nó onde residem.' },
    { label: 'Map', color: '#f97316', content: ['(big,1) (data,1) (is,1) (big,1)', '(data,1) (is,1) (everywhere,1)'], desc: 'Cada palavra → par (palavra, 1). A função Map é pura — não tem estado partilhado com outros mappers. Pode correr em paralelo total.' },
    { label: 'Shuffle & Sort', color: '#f97316', content: ['big: [1,1]', 'data: [1,1]', 'everywhere: [1]', 'is: [1,1]'], desc: 'Framework agrupa os pares por chave e redistribui pela rede — cada reducer recebe todas as ocorrências da sua chave. Esta é a fase mais lenta (I/O de disco + rede).' },
    { label: 'Reduce', color: '#f97316', content: ['(big, 2)', '(data, 2)', '(everywhere, 1)', '(is, 2)'], desc: 'Soma todos os valores de cada chave. O resultado final é escrito de volta no HDFS, distribuído pelos reducers.' },
  ];
  const s = steps[step];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Word Count — MapReduce passo a passo</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {steps.map((st, i) => (
          <button key={i} onClick={() => setStep(i)} style={{ padding: '0.35rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: step === i ? st.color : 'var(--bg-primary)', color: step === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${step === i ? st.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{st.label}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${s.color}40` }}>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{s.desc}</p>
        <div>
          {s.content.map((line, i) => (
            <div key={i} style={{ background: `${s.color}10`, border: `1px solid ${s.color}30`, borderRadius: 6, padding: '0.4rem 0.8rem', marginBottom: '0.4rem', color: s.color, fontWeight: 600, fontFamily: 'monospace', fontSize: '0.88rem' }}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GenTimeline = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Evolução Histórica do Big Data</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
      {[
        { year: '2001', event: 'Gartner define 3Vs', color: '#94a3b8' },
        { year: '2003', event: 'Google GFS paper', color: '#f97316' },
        { year: '2004', event: 'Google MapReduce paper', color: '#f97316' },
        { year: '2006', event: 'Yahoo! lança Hadoop', color: '#f97316' },
        { year: '2008', event: 'Hadoop Yahoo: 1000 nós', color: '#f97316' },
        { year: '2009', event: 'Spark — UC Berkeley AMPLab', color: '#f97316' },
        { year: '2011', event: 'McKinsey Big Data Report', color: '#f97316' },
        { year: '2014', event: 'Spark supera MapReduce (sort)', color: '#f97316' },
        { year: '2019', event: 'Cloud-native Spark (K8s)', color: '#f97316' },
        { year: '2022', event: 'Lakehouse + LLM Data', color: '#f97316' },
      ].map(({ year, event, color }) => (
        <div key={year} style={{ background: `${color}08`, border: `1px solid ${color}25`, borderRadius: 8, padding: '0.6rem 0.9rem', textAlign: 'center', minWidth: 120 }}>
          <div style={{ fontWeight: 800, color, fontSize: '0.9rem' }}>{year}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>{event}</div>
        </div>
      ))}
    </div>
  </div>
);

export default function CBD1() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cloud-bigdata" style={S.back}><ArrowLeft size={16} /> Voltar a Cloud &amp; Big Data</Link>
        <div style={S.tag}>Module 1</div>
        <h1 style={S.h1}>Big Data Fundamentals</h1>
        <p style={S.lead}>O que é Big Data, a mudança de paradigma que obrigou a repensar toda a arquitectura de software, como o HDFS resolve o armazenamento distribuído em commodity hardware, e porque o MapReduce foi a primeira resposta industrial ao problema de processar petabytes.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. A Origem do Problema</h2>
          <p style={S.p}>Em 2001, o analista Doug Laney publicou um relatório na Gartner chamado "3D Data Management: Controlling Data Volume, Velocity, and Variety". Nesse documento estava a raiz do que hoje chamamos Big Data. A definição é deceptivamente simples: dados que ultrapassam a capacidade das ferramentas tradicionais de capturar, armazenar, gerir e analisar em tempo útil.</p>
          <p style={S.p}>A explosão começou com a web. Em 2004, o Google processava mais de 3 mil milhões de pesquisas por dia — cada uma deixando um rasto de dados. Em 2006, o Facebook tinha 12 milhões de utilizadores a criar conteúdo continuamente. Em 2008, o Large Hadron Collider do CERN começou a produzir 15 petabytes por ano. O Twitter, em 2013, gerava 500 milhões de tweets por dia. Os instrumentos médicos, sensores industriais e dispositivos móveis multiplicaram o volume por ordens de grandeza.</p>
          <p style={S.p}>O problema não era apenas de tamanho. Era também de velocidade: dados de mercados financeiros têm de ser processados em microssegundos para ter valor. E de variedade: logs de servidores, imagens, vídeos, JSON de APIs, registos de sensores — tudo junto, sem schema comum. As bases de dados relacionais construídas nos anos 70 e 80 simplesmente não foram concebidas para este cenário.</p>

          <FiveVsDiagram />

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>V</th><th style={S.th}>Descrição</th><th style={S.th}>Exemplo concreto</th><th style={S.th}>Ferramenta Big Data</th></tr></thead>
              <tbody>
                {[
                  ['Volume', 'Quantidade de dados gerados', 'Facebook: 500 TB/dia; NYSE: 1 TB/sessão; LHC: 15 PB/ano', 'HDFS, S3, GCS'],
                  ['Velocity', 'Rapidez de geração e necessidade de processamento', 'Twitter: 500K tweets/min; IoT: ms entre leituras; mercados financeiros: microssegundos', 'Kafka, Spark Streaming'],
                  ['Variety', 'Diversidade de formatos e fontes', 'Texto, imagem, vídeo, JSON, CSV, logs, dados de sensores, XML, Parquet', 'Schema-on-Read, NoSQL'],
                  ['Veracity', 'Qualidade, ruído, bias e incerteza nos dados', '80% do tempo de um Data Scientist = limpeza de dados (Forbes 2020)', 'Data quality tools, lineage'],
                  ['Value', 'Valor de negócio extraível dos dados', 'Recomendações Amazon: 35% das receitas; Uber surge pricing: optimização em tempo real', 'ML, analytics, dashboards'],
                ].map(([v, d, ex, t]) => (
                  <tr key={v}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{v}</td><td style={S.td}>{d}</td><td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{ex}</td><td style={{ ...S.td, fontSize: '0.82rem', fontFamily: 'monospace', color: '#f97316' }}>{t}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Além dos 5 Vs originais, alguns autores acrescentam Variability (dados que mudam de significado ao longo do tempo) e Visualization (a dificuldade de representar dados de alta dimensionalidade). O modelo foi expandido porque a definição de 3 Vs era demasiado simples para capturar a riqueza do problema.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. A Mudança de Paradigma — Scale Out</h2>
          <p style={S.p}>A resposta tradicional a mais dados era comprar hardware mais potente: mais RAM, mais CPUs, discos mais rápidos. Esta estratégia — chamada scale up ou escalonamento vertical — funciona até ao limite físico do que existe no mercado. Um servidor de alto desempenho de 2024 tem tipicamente 8 TB de RAM e 128 núcleos. Mais do que isso não é possível numa única máquina.</p>
          <p style={S.p}>A alternativa disruptiva surgiu com a constatação de que commodity hardware — servidores baratos de prateleira, cada um com 16-32 GB de RAM e 4-8 núcleos — podia ser combinado em clusters de centenas ou milhares de máquinas. O desafio era fazer estes servidores trabalharem em conjunto de forma eficiente e tolerante a falhas. Se um servidor falha a cada 3 anos, num cluster de 1.000 servidores um falha a cada dia. O sistema tem de ser desenhado para isso.</p>

          <ScalingDiagram />

          <h3 style={S.h3}>Comparação Económica</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>Scale Up (Vertical)</th><th style={S.th}>Scale Out (Horizontal)</th></tr></thead>
              <tbody>
                {[
                  ['Custo de hardware', 'Exponencial com a capacidade', 'Linear — adicionar mais nodes'],
                  ['Tolerância a falhas', 'RAID, HA caro e complexo', 'Nativa — replicação de dados pelo cluster'],
                  ['Elasticidade', 'Downtime para adicionar RAM/CPU', 'Adicionar nós a quente, sem downtime'],
                  ['Limite', 'Limite físico do hardware disponível', 'Teórico sem limite — Google tem milhões de servidores'],
                  ['Complexidade operacional', 'Baixa — um servidor', 'Alta — network, partitioning, consensus'],
                  ['Exemplo prático', 'Oracle Exadata, IBM POWER', 'Hadoop cluster, Spark on K8s'],
                ].map(([a, v, h]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 600 }}>{a}</td><td style={S.td}>{v}</td><td style={{ ...S.td, color: '#f97316' }}>{h}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.highlight}>
            <strong>O insight central:</strong> Mover a computação para onde os dados estão é muito mais barato do que mover os dados para onde a computação está. Se um ficheiro de 1 TB está distribuído por 10 nós a 100 GB cada, é muito mais eficiente executar 10 processos localmente do que transferir 1 TB pela rede para um único servidor.
          </div>

          <GenTimeline />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Ecosistema Big Data</h2>
          <p style={S.p}>O ecosistema Big Data cresceu organicamente ao longo de 20 anos. Cada tecnologia foi criada para resolver uma limitação específica da anterior. O Hadoop resolveu storage e processamento básico; o Hive adicionou SQL; o Spark resolveu velocidade e iteratividade; o Kafka resolveu ingestão de streams; o Flink melhorou a latência do streaming.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Camada</th><th style={S.th}>Função</th><th style={S.th}>Tecnologias principais</th><th style={S.th}>Quando usar</th></tr></thead>
              <tbody>
                {[
                  ['Ingestão', 'Trazer dados de diversas fontes para o sistema', 'Apache Kafka, Flume, Sqoop, NiFi, Flink CDC', 'Dados de sistemas externos, RDBMS, APIs, IoT'],
                  ['Storage', 'Guardar dados de forma distribuída e persistente', 'HDFS, Amazon S3, Azure Blob, Google GCS, Delta Lake', 'Todo o dado que precise persistir'],
                  ['Processing', 'Executar computação distribuída em escala', 'Apache Spark, Flink, MapReduce, Hive/Tez', 'Transformações, agregações, ML, ETL'],
                  ['Serving / Catalog', 'Organizar, catalogar e servir resultados', 'Hive Metastore, Apache Atlas, Unity Catalog, Iceberg', 'Governance, lineage, discovery'],
                  ['Analytics & ML', 'Extrair insights e construir modelos', 'Spark MLlib, MLflow, TensorFlow, Jupyter, Tableau', 'DS, BI, recomendações, anomalias'],
                ].map(([c, f, t, w]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{c}</td><td style={S.td}>{f}</td><td style={{ ...S.td, fontSize: '0.82rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>{t}</td><td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{w}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Data Lake vs. Data Warehouse vs. Lakehouse</h3>
          <p style={S.p}>A arquitectura de dados evoluiu em três gerações. O Data Warehouse (anos 90) impõe um schema rígido antes da escrita — ideal para relatórios mas inflexível para dados não-estruturados. O Data Lake (anos 2010) armazena tudo em bruto mas tornou-se um "data swamp" sem governança. O Lakehouse (anos 2020) combina os dois: storage barato do Lake com as garantias ACID e schema do Warehouse.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}></th><th style={S.th}>Data Lake</th><th style={S.th}>Data Warehouse</th><th style={S.th}>Lakehouse ✅</th></tr></thead>
              <tbody>
                {[
                  ['Schema', 'Schema-on-Read (qualquer formato)', 'Schema-on-Write (rígido)', 'Schema-on-Read + Evolution + Gov.'],
                  ['Tipos de dados', 'Raw, qualquer formato, não estruturado', 'Estruturado, curado, normalizado', 'Todos os formatos + ACID'],
                  ['Custo de storage', 'Muito baixo (object storage, ~$0.02/GB/mês)', 'Alto (columnar DB, ~$0.20/GB/mês)', 'Baixo (Parquet no object storage)'],
                  ['Transacções ACID', 'Não suportado nativamente', 'Suportado', 'Sim (Delta Lake, Iceberg, Hudi)'],
                  ['Workloads', 'DS/ML, exploração ad-hoc', 'BI, relatórios estruturados', 'BI + DS + ML + Streaming'],
                  ['Time Travel', 'Não', 'Limitado', 'Sim — consultar versões anteriores'],
                  ['Exemplos', 'HDFS raw, S3 raw', 'Redshift, BigQuery, Snowflake', 'Databricks, Apache Iceberg, Delta Lake'],
                ].map(([f, l, w, lh]) => (
                  <tr key={f}><td style={{ ...S.td, fontWeight: 600 }}>{f}</td><td style={S.td}>{l}</td><td style={S.td}>{w}</td><td style={{ ...S.td, color: '#f97316', fontWeight: 600 }}>{lh}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. HDFS — Hadoop Distributed File System</h2>
          <p style={S.p}>O HDFS surgiu em 2006 como implementação open-source do Google File System (GFS), descrito no paper seminal de 2003. O design é deliberadamente simples e opinionado: assume que os ficheiros são grandes (gigabytes a terabytes), raramente modificados após escrita, e lidos sequencialmente em modo streaming. Estas assunções permitem optimizações que seriam impossíveis num sistema de ficheiros de uso geral.</p>
          <p style={S.p}>A arquitectura master-slave do HDFS divide as responsabilidades de forma clara. O NameNode é o cérebro: guarda apenas o namespace (directórios, ficheiros, permissões) e o mapeamento bloco→DataNodes em memória RAM. Nunca guarda dados. Os DataNodes são os músculos: armazenam os blocos de dados, reportam periodicamente ao NameNode quais blocos têm, e servem os dados directamente aos clientes após autorização do NameNode.</p>

          <HDFSDiagram />

          <h3 style={S.h3}>Princípios de Design</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              ['Write-once, Read-many (WORM)', 'Ficheiros HDFS não são editáveis após escrita (apenas append). Elimina a complexidade de locks e conflitos de escrita concorrente em sistemas distribuídos.', '#f97316'],
              ['Move code to data', 'Em vez de mover terabytes pela rede para um servidor central, o framework leva o programa de computação ao nó onde os dados já estão — reduzindo drasticamente o tráfego de rede.', '#f97316'],
              ['Replicação por defeito = 3', 'Cada bloco tem 3 réplicas: 2 no mesmo rack (acesso rápido), 1 noutro rack (tolerância a falha de rack inteiro). Sem RAID, sem hardware especializado.', '#f97316'],
              ['Blocos de 128 MB', 'Blocos grandes minimizam o metadata no NameNode e maximizam a eficiência de leituras sequenciais. Um ficheiro de 1 GB = apenas 8 entradas no NameNode. Um ficheiro de 1 KB = 1 bloco desperdiçado.', '#f97316'],
            ].map(([t, d, c]) => (
              <div key={t} style={{ background: `${c}08`, border: `1px solid ${c}25`, borderRadius: 8, padding: '0.9rem' }}>
                <div style={{ fontWeight: 700, color: c, fontSize: '0.9rem', marginBottom: '0.35rem' }}>{t}</div>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>

          <h3 style={S.h3}>Rack Awareness — Tolerância a Falhas em Profundidade</h3>
          <p style={S.p}>A política de rack awareness é uma das decisões de design mais elegantes do HDFS. Um rack é um armário físico com 20-40 servidores ligados a um switch comum. A largura de banda intra-rack (dentro do mesmo rack) é tipicamente 10 Gbps. A largura de banda inter-rack (entre racks, através do switch de topo) é muito mais limitada.</p>
          <p style={S.p}>O HDFS aproveita esta topologia: a primeira réplica fica no nó onde o cliente está a escrever. A segunda réplica fica num nó diferente do mesmo rack — acesso rápido e sem consumir largura de banda inter-rack. A terceira réplica fica num nó de um rack diferente — garante sobrevivência mesmo que um rack inteiro falhe (corte de energia, switch avariado).</p>

          <h3 style={S.h3}>O Problema do NameNode — SPOF e Soluções</h3>
          <p style={S.p}>O NameNode é um ponto único de falha crítico (SPOF — Single Point of Failure). Se falhar, o cluster inteiro fica inacessível — os DataNodes continuam a armazenar dados mas ninguém sabe onde está nada. O Hadoop 1.x resolveu isto apenas parcialmente com o Secondary NameNode — que não é um backup do NameNode (apesar do nome confuso) mas sim um processo que periodicamente faz merge das edições ao filesystem namespace, reduzindo o tempo de recuperação.</p>
          <p style={S.p}>O Hadoop 2.x introduziu NameNode HA (High Availability) com dois NameNodes: Active e Standby, sincronizados em tempo real através de um sistema de Journal Nodes quórum. O Apache ZooKeeper monitoriza a saúde do Active NameNode e promove o Standby automaticamente em caso de falha, com failover tipicamente em 30-60 segundos.</p>

          <div style={S.note}>O HDFS é optimizado para workloads de analytics batch — leituras sequenciais de ficheiros grandes. É uma má escolha para: ficheiros pequenos (milha de ficheiros de 1 KB esgota a memória do NameNode), random writes, latência baixa (acesso em milissegundos), ou múltiplos writers simultâneos num mesmo ficheiro.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. MapReduce — O Paradigma</h2>
          <p style={S.p}>Em 2004, os engenheiros Jeffrey Dean e Sanjay Ghemawat do Google publicaram o paper "MapReduce: Simplified Data Processing on Large Clusters". O insight fundamental era usar conceitos da programação funcional — map e reduce — como primitivas de paralelização automática. O programador define apenas a lógica (o que fazer), e o framework trata da distribuição (como e onde fazer).</p>
          <p style={S.p}>A abstracção é poderosa: qualquer problema que se possa expressar como "transformar elementos independentemente" (Map) seguido de "agregar por chave" (Reduce) pode escalar para qualquer volume de dados sem modificar o código. O mesmo programa que processa 1 GB num nó processa 1 PB em 1.000 nós — o framework adapta a paralelização automaticamente.</p>

          <div style={S.highlight}>
            <strong>Princípio fundamental:</strong> Separar "o quê" (lógica de negócio) de "como" (distribuição, paralelização, tolerância a falhas). O programador não sabe nem precisa saber quantos nós existem no cluster.
          </div>

          <MapReduceDemo />

          <h3 style={S.h3}>Anatomia de um Job MapReduce</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Fase</th><th style={S.th}>O que acontece</th><th style={S.th}>Responsável</th><th style={S.th}>Custo</th></tr></thead>
              <tbody>
                {[
                  ['Input Split', 'O InputFormat divide o ficheiro em splits (tipicamente = blocos HDFS). Cada split vai para um mapper.', 'Framework', 'Baixo — metadata apenas'],
                  ['Map', 'Cada mapper processa um split de forma independente. Transforma dados brutos em pares (chave, valor).', 'Código do programador', 'CPU + leitura de disco local'],
                  ['Combiner (opcional)', 'Mini-reduce local no mapper. Agrega parcialmente antes de enviar para a rede. Só funciona com operações associativas e comutativas.', 'Framework + código', 'CPU — reduz dados de rede drasticamente'],
                  ['Shuffle & Sort', 'O framework transfere pares de rede, agrupando pela chave. É a fase mais lenta: I/O disco + rede + ordenação.', 'Framework', 'Alto — I/O disco + rede + CPU sort'],
                  ['Reduce', 'Cada reducer recebe todas as ocorrências de um subconjunto de chaves e agrega com a função Reduce.', 'Código do programador', 'CPU + escrita disco (HDFS)'],
                  ['Output', 'Resultado escrito de volta no HDFS, distribuído por N ficheiros (um por reducer).', 'Framework', 'I/O de escrita disco'],
                ].map(([f, w, r, c]) => (
                  <tr key={f}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{f}</td><td style={S.td}>{w}</td><td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{r}</td><td style={{ ...S.td, fontSize: '0.83rem', color: c.includes('Alto') ? '#f97316' : 'var(--text-secondary)' }}>{c}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Tolerância a Falhas no MapReduce</h3>
          <p style={S.p}>A tolerância a falhas no MapReduce é elegante mas conservadora. O JobTracker monitoriza o progresso de cada task. Se um task não reportar progresso durante o timeout configurado (por defeito 10 minutos), é considerado morto e relançado noutro nó. Como os mappers lêem dados locais do HDFS, o task pode ser relançado em qualquer nó que tenha a réplica do bloco correspondente.</p>
          <p style={S.p}>O mecanismo de Speculative Execution resolve o problema dos "stragglers" — nós que demoram muito mais que os outros (por CPU degradada, disco lento, etc.). Quando um task demora mais que 4 vezes a mediana dos outros tasks da mesma fase, o framework lança uma cópia duplicada noutro nó. Ambas correm em paralelo; quando uma termina, a outra é cancelada. Isto elimina o efeito do elo mais fraco na performance global.</p>

          <h3 style={S.h3}>Limitações do MapReduce que motivaram o Spark</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Limitação</th><th style={S.th}>Causa raiz</th><th style={S.th}>Impacto</th><th style={S.th}>Solução no Spark</th></tr></thead>
              <tbody>
                {[
                  ['Alto disk I/O', 'Cada fase Map e Reduce escreve para disco. Entre fases, leitura de disco obrigatória.', 'Algoritmo iterativo com 10 passos = 20 leituras/escritas de disco', 'RDDs in-memory — 1 leitura, 10 operações em RAM'],
                  ['Batch-only', 'Sem suporte nativo para streaming ou queries interactivas', 'Latência mínima = minutos (tempo de um job)', 'Structured Streaming — latência de segundos'],
                  ['Ineficiente para ML iterativo', 'Algoritmos como k-means, SGD precisam de múltiplas passagens. Cada passagem = novo job com leitura de disco.', 'k-means com 100 iterações = 100 jobs = 200 operações de disco', 'RDD.cache() — dados em memória para todas as iterações'],
                  ['API verbosa', 'Java verboso: mapper, reducer, job config, inputformat, outputformat — centenas de linhas para Word Count', 'Curva de aprendizagem íngreme, código difícil de manter', 'DataFrames com API Python concisa — 5-10 linhas'],
                  ['DAG fixo (2 fases)', 'MapReduce só tem Map→Shuffle→Reduce. Pipelines complexos = cadeia de jobs dependentes', 'Cada job = nova leitura de disco do output do job anterior', 'DAG arbitrário multi-stage — stages encadeados em memória'],
                ].map(([l, c, i, s]) => (
                  <tr key={l}><td style={{ ...S.td, color: '#f97316', fontWeight: 600 }}>{l}</td><td style={S.td}>{c}</td><td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{i}</td><td style={{ ...S.td, color: '#f97316', fontSize: '0.83rem' }}>{s}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Em 2014, uma equipa do Databricks/Spark ganhou o Sortbenchmark, ordenando 100 TB em 23 minutos com Spark — 3× mais rápido que o recorde anterior do MapReduce usando 10× menos nós. Este resultado prático consolidou a transição do ecossistema para Spark.</div>
        </div>

        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.4rem"}}><strong>A Origem do Problema</strong> — o crescimento exponencial de dados tornou as arquitecturas scale-up inviáveis; escala horizontal em commodity hardware é a resposta — os 5 Vs (Volume, Velocity, Variety, Veracity, Value) definem o desafio.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>HDFS</strong> — distribui dados em blocos de 128 MB com replicação tripla (rack-aware); o NameNode só guarda metadata; DataNodes guardam os blocos — a localidade dos dados é explorada pelo MapReduce para minimizar tráfego de rede.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>MapReduce</strong> — separa lógica de negócio da distribuição: o programador define Map e Reduce, o framework trata scheduling, tolerância a falhas e shuffle; o gargalo é o Shuffle &amp; Sort (disco + rede) — motivou a criação do Spark.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Ecosistema Big Data</strong> — o ecossistema Hadoop (HDFS, YARN, MapReduce, Hive, Pig, Sqoop, HBase) cobre ingestão, armazenamento distribuído e processamento batch; evoluiu de batch → interactivo (Spark SQL) → stream → Lakehouse.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
