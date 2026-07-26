import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: '#4a9eed', border: '1.5px solid #4a9eed', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: '#4a9eed', borderLeft: '3px solid #4a9eed', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.06)', borderLeft: '3px solid #4a9eed', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const CloudComparison = () => {
  const [active, setActive] = useState(0);
  const platforms = [
    {
      name: 'Databricks', color: '#4a9eed',
      desc: 'Plataforma unificada Data + AI criada pelos autores do Apache Spark em 2013. Adiciona ao Spark open-source o Photon Engine (re-implementação do Spark em C++ — 2-5× mais rápido), Delta Lake com ACID, Unity Catalog para governance, e MLflow integrado para MLOps. O "premium" do ecossistema Spark.',
      stack: ['Delta Lake (ACID + Time Travel)', 'Unity Catalog (governance)', 'MLflow integrado nativamente', 'Photon Engine (C++, 2-5× mais rápido)', 'Notebooks colaborativos em tempo real', 'Auto-scaling inteligente'],
      usecase: 'Pipelines complexos de Data Engineering + ML numa plataforma unificada. Especialmente vantajoso quando os dados e modelos precisam de governança centralizada.',
      cost: 'DBU (Databricks Unit) + cloud infra. Mais caro que open-source mas mais produtivo.',
    },
    {
      name: 'AWS EMR', color: '#4a9eed',
      desc: 'Elastic MapReduce — serviço gerido da AWS para clusters Hadoop/Spark desde 2009. O EMRFS (EMR File System) permite aceder a S3 de forma transparente como se fosse HDFS. Spot Instances reduzem custo até 90% para workloads tolerantes a interrupção. Integra nativamente com o ecossistema AWS.',
      stack: ['EMRFS (S3 como HDFS)', 'Spot Instances (até 90% desconto)', 'Auto-scaling baseado em métricas', 'AWS Glue Catalog (metastore)', 'Integração Redshift, Athena, SageMaker', 'EMR Serverless (sem gerir clusters)'],
      usecase: 'Organizações AWS-first com workloads batch e streaming variáveis. Ideal quando já existe investimento em S3, IAM, e outros serviços AWS.',
      cost: 'EC2 + EMR surcharge (~$0.015/hora por nó). Spot Instances tornam EMR muito competitivo em custo.',
    },
    {
      name: 'Google Dataproc', color: '#4a9eed', 
      desc: 'Clusters Spark/Hadoop geridos no Google Cloud Platform. Diferencia-se pelo startup extremamente rápido (< 90 segundos), facturação por segundo, e clusters efémeros — criar um cluster por job e destruir no fim elimina o custo de clusters idle. Integração nativa com BigQuery e Vertex AI.',
      stack: ['Startup < 90 segundos', 'Facturação por segundo', 'Clusters efémeros por job', 'BigQuery Storage connector', 'Vertex AI (MLOps) integrado', 'Dataproc Serverless disponível'],
      usecase: 'GCP-first com pipelines episódicos onde pagar apenas durante a execução é crítico. Integração bigquery + vertex AI nativa.',
      cost: 'GCE VMs + Dataproc surcharge (~$0.01/hora). Clusters efémeros eliminam custo idle.',
    },
    {
      name: 'Spark em K8s', color: '#4a9eed',
      desc: 'Spark 2.3+ suporta submeter jobs directamente ao Kubernetes API. O Driver e os Executors correm como Pods efémeros. Cloud-agnostic — corre em GKE, EKS, AKS, ou Kubernetes on-premises. Sem vendor lock-in mas requer maturidade em DevOps/Kubernetes.',
      stack: ['Cloud-agnostic (qualquer K8s)', 'Driver + Executor como Pods K8s', 'spark-submit com --master k8s://', 'Sem vendor lock-in', 'Integração com Helm charts', 'Suporte multi-cloud nativo'],
      usecase: 'Multi-cloud, on-premises, ou equipas DevOps maduras que precisam de portabilidade total e controlo sobre scheduling.',
      cost: 'Apenas custo de infraestrutura (VMs/nós K8s). Zero overhead de serviço gerido.',
    },
  ];
  const p = platforms[active];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Plataformas Cloud para Spark</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {platforms.map((pl, i) => (
          <button key={i} onClick={() => setActive(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: active === i ? pl.color : 'var(--bg-primary)', color: active === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${active === i ? pl.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{pl.icon} {pl.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${p.color}40` }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{p.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}>
          {p.stack.map(s => (<span key={s} style={{ background: `${p.color}12`, border: `1px solid ${p.color}30`, color: p.color, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 }}>{s}</span>))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.83rem' }}>
          <div style={{ color: 'var(--text-secondary)' }}><strong style={{ color: p.color }}>Usar quando:</strong> {p.usecase}</div>
          <div style={{ color: 'var(--text-secondary)' }}><strong style={{ color: p.color }}>Custo:</strong> {p.cost}</div>
        </div>
      </div>
    </div>
  );
};

const ShuffleDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Shuffle — O Custo Oculto do Spark</p>
    <svg viewBox="0 0 560 160" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-sh" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" /></marker>
      </defs>
      <rect x="10" y="30" width="110" height="100" rx="7" fill="rgba(74,158,237,0.08)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="65" y="50" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="600">Executor 1</text>
      <rect x="20" y="58" width="90" height="20" rx="4" fill="rgba(74,158,237,0.20)" />
      <text x="65" y="72" textAnchor="middle" fill="#4a9eed" fontSize="8">Partition A (USA, EU)</text>
      <rect x="20" y="82" width="90" height="20" rx="4" fill="rgba(74,158,237,0.13)" />
      <text x="65" y="96" textAnchor="middle" fill="#4a9eed" fontSize="8">Partition B (USA, AS)</text>
      <text x="65" y="118" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">1. Escreve para disco</text>
      <line x1="120" y1="68" x2="440" y2="68" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#arr-sh)" />
      <line x1="120" y1="92" x2="440" y2="108" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#arr-sh)" />
      <text x="280" y="52" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">2. Transferência de rede (LENTO)</text>
      <text x="280" y="125" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">hash("USA") → Executor 2 | hash("EU") → Executor 3</text>
      <rect x="442" y="30" width="110" height="100" rx="7" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="497" y="50" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="600">Executor 2</text>
      <rect x="452" y="58" width="90" height="20" rx="4" fill="rgba(74,158,237,0.10)" />
      <text x="497" y="72" textAnchor="middle" fill="#4a9eed" fontSize="8">USA: [1000, 2000, ...]</text>
      <rect x="452" y="82" width="90" height="20" rx="4" fill="rgba(74,158,237,0.10)" />
      <text x="497" y="96" textAnchor="middle" fill="#4a9eed" fontSize="8">EU: [500, 800, ...]</text>
      <text x="497" y="118" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">3. Lê e processa por chave</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Shuffle = escrita em disco + transferência de rede + leitura em disco. Operações que causam shuffle: groupBy, join, orderBy, distinct, repartition.</p>
  </div>
);

const JoinExplainer = () => {
  const [join, setJoin] = useState(0);
  const joins = [
    {
      name: 'Broadcast Hash Join', color: '#4a9eed',
      quando: 'Uma das tabelas é suficientemente pequena para caber em memória de cada executor (por defeito < 10 MB, configurável).',
      como: 'A tabela pequena é serializada e enviada (broadcast) para cada executor via P2P directo. Cada executor junta localmente sem qualquer shuffle. Zero movimentação da tabela grande.',
      vantagens: ['Sem shuffle da tabela grande', 'Paralelismo total', 'Latência muito baixa', 'Catalyst escolhe automaticamente'],
      limitacoes: ['Tabela pequena tem de caber em memória do driver (para serialização) e de cada executor', 'Broadcast tem overhead de rede para cada executor'],
      perf: 'O join mais rápido possível — único custo é o broadcast inicial da tabela pequena.',
    },
    {
      name: 'Sort Merge Join', color: '#4a9eed',
      quando: 'Ambas as tabelas são grandes — nenhuma cabe em memória para broadcast. É o join default do Spark para tabelas grandes.',
      como: 'Ambas as tabelas são shuffled pela chave de join (todos os registos com a mesma chave vão para o mesmo executor). Depois são sorted dentro de cada executor. Finalmente, um merge linear combina os registos ordenados.',
      vantagens: ['Correcto para qualquer tamanho', 'Memória eficiente (streaming merge)', 'Suporta todos os tipos de join (inner, outer, left, right)'],
      limitacoes: ['Shuffle de ambas as tabelas — O(N log N)', 'Requer ordenação de ambos os lados', 'Lento para tabelas com data skew'],
      perf: 'Mais lento que Broadcast mas o único correcto para dois datasets grandes.',
    },
    {
      name: 'Salting (Skew Join)', color: '#4a9eed',
      quando: 'Uma chave domina os dados — ex: "USA" tem 80% dos registos. Um único executor fica sobrecarregado enquanto os outros ficam idle (straggler problem).',
      como: 'Adiciona um sufixo aleatório 0-N à chave skewed: "USA_0", "USA_1", ..., "USA_N". Distribui os registos "USA" por N partições artificiais. A tabela pequena é replicada N vezes para corresponder ao salting.',
      vantagens: ['Elimina o straggler problem', 'Distribui carga uniformemente', 'Sem mudança de lógica de negócio'],
      limitacoes: ['Requer identificar previamente as chaves skewed', 'A tabela pequena é replicada N vezes em memória', 'Mais complexo de implementar e manter'],
      perf: 'Pode reduzir tempo de job de horas para minutos quando o skew é severo.',
    },
  ];
  const j = joins[join];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Estratégias de Join — Quando Usar Cada Uma</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {joins.map((jn, i) => (<button key={i} onClick={() => setJoin(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: join === i ? jn.color : 'var(--bg-primary)', color: join === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${join === i ? jn.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{jn.name}</button>))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${j.color}40` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <div><span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quando usar</span><p style={{ fontSize: '0.87rem', color: 'var(--text-primary)', margin: '0.25rem 0 0' }}>{j.quando}</p></div>
          <div><span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Como funciona</span><p style={{ fontSize: '0.87rem', color: 'var(--text-primary)', margin: '0.25rem 0 0' }}>{j.como}</p></div>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
          <div><div style={{ fontSize: '0.72rem', color: '#4a9eed', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Vantagens</div>{j.vantagens.map(v => <div key={v} style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>✓ {v}</div>)}</div>
          <div><div style={{ fontSize: '0.72rem', color: '#4a9eed', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Limitações</div>{j.limitacoes.map(l => <div key={l} style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>✗ {l}</div>)}</div>
        </div>
        <div style={{ fontSize: '0.83rem', color: j.color, fontWeight: 600, marginTop: '0.5rem' }}> {j.perf}</div>
      </div>
    </div>
  );
};

export default function CBD5() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cloud-bigdata" style={S.back}><ArrowLeft size={16} /> Voltar a Cloud &amp; Big Data</Link>
        <div style={S.tag}>Module 5</div>
        <h1 style={S.h1}>Spark na Cloud & Optimização de Performance</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. O Problema do On-Premise</h2>
          <p style={S.p}>Clusters Hadoop/Spark on-premise têm um dilema inevitável: dimensionar para o pico de carga desperdiça 70-80% dos recursos durante o restante tempo. Dimensionar para a carga média cria gargalos nos picos. Em 2014, o Netflix publicou que o custo de manter clusters Hadoop on-premise era 3× superior ao de usar a AWS, considerando apenas os custos operacionais — sem contar com a equipa de infraestrutura necessária.</p>
          <p style={S.p}>A cloud resolve este problema com elasticidade: clusters crescem e encolhem automaticamente com a carga. Paga-se apenas pelos recursos efectivamente usados. Para workloads batch que correm 2 horas por dia, o custo numa cloud gerida pode ser 10-50× inferior a um cluster dedicado.</p>

          <CloudComparison />

          <h3 style={S.h3}>Guia de Selecção de Plataforma</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Situação</th><th style={S.th}>Plataforma recomendada</th><th style={S.th}>Razão principal</th></tr></thead>
              <tbody>
                {[
                  ['Educação / Protótipos rápidos', 'Google Colab ou Databricks Community Edition', 'Gratuito, zero configuração'],
                  ['Organização AWS-first', 'Amazon EMR + S3 + Glue Catalog', 'Integração nativa AWS, Spot Instances reduzem custo'],
                  ['Organização GCP-first', 'Google Dataproc + GCS + BigQuery', 'Clusters efémeros por job, startup < 90s'],
                  ['Organização Azure-first', 'Azure Databricks ou HDInsight', 'Integração Azure AD, ADLS Gen2, Synapse'],
                  ['Multi-cloud / On-prem', 'Spark em Kubernetes', 'Portabilidade total, zero vendor lock-in'],
                  ['Data + AI unificado', 'Databricks (Photon + Delta + MLflow)', 'Plataforma unificada engenharia + ciência de dados'],
                  ['Queries ad-hoc sobre S3/GCS', 'AWS Athena ou BigQuery (Serverless)', 'Pay-per-query, zero clusters, SQL directo sobre object storage'],
                ].map(([s, r, ra]) => (
                  <tr key={s}><td style={S.td}>{s}</td><td style={{ ...S.td, color: '#4a9eed', fontWeight: 600 }}>{r}</td><td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{ra}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>O código PySpark é <strong>idêntico</strong> em todas as plataformas. A única diferença é o prefixo do path de storage (s3://, gs://, abfs://) e a criação do cluster. Migrar de EMR para Dataproc requer apenas mudar o storage path e o cluster setup — o código de processamento não muda.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Os 3 Custos Dominantes no Spark</h2>
          <p style={S.p}>Optimizar Spark é fundamentalmente sobre reduzir três tipos de custo, por esta ordem de impacto: (1) Disk I/O — quanto se lê e escreve em disco, (2) Network — quanto se transfere entre executors durante shuffles, (3) CPU — quanto se processa. A regra de ouro: <strong>reduzir dados + reduzir movimento</strong>.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { n: '1. Disk I/O', c: '#4a9eed', desc: 'Ler ficheiros CSV de 1 TB vs. Parquet equivalente de 100 GB. Usar formatos columnar com compressão é a optimização mais impactante e mais fácil de implementar.', tip: 'Converter CSV→Parquet uma vez poupa 10× em cada query futura.' },
              { n: '2. Network (Shuffle)', c: '#4a9eed', desc: 'Dados transferidos entre executors durante groupBy, join, orderBy. O custo mais variável — pode ser zero (broadcast join) ou dominar completamente o tempo do job.', tip: 'Filtrar e seleccionar colunas antes de qualquer operação que cause shuffle.' },
              { n: '3. CPU', c: '#4a9eed', desc: 'Computação de expressões, sort, hash. Geralmente não é o bottleneck — Tungsten + vectorized processing tornam o CPU muito eficiente. Excepção: UDFs Python (serialização Python↔JVM).', tip: 'Substituir UDFs Python por funções nativas do Spark SQL quando possível.' },
            ].map(({ n, c, desc, tip }) => (
              <div key={n} style={{ background: `${c}08`, border: `1px solid ${c}25`, borderRadius: 8, padding: '0.9rem' }}>
                <div style={{ fontWeight: 700, color: c, marginBottom: '0.35rem' }}>{n}</div>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{desc}</p>
                <p style={{ fontSize: '0.78rem', color: c, margin: 0 }}>{tip}</p>
              </div>
            ))}
          </div>

          <ShuffleDiagram />

          <h3 style={S.h3}>Parquet vs. CSV — Porquê o Formato Importa</h3>
          <p style={S.p}>A diferença entre CSV e Parquet não é apenas de espaço em disco — é de como os dados são lidos durante uma query. Parquet é um formato orientado a colunas: os valores de cada coluna são armazenados juntos, comprimidos com codificações específicas para cada tipo. Uma query que lê 5 de 50 colunas apenas desserializa 10% dos dados — as outras 45 colunas nunca são lidas do disco.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.5rem' }}>CSV — Row-based</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                <li>Lê TODAS as colunas mesmo que query use só 2</li>
                <li>Schema inferido em cada leitura (lento)</li>
                <li>Sem compressão por defeito — 10× mais espaço</li>
                <li>Sem estatísticas — Spark não pode pular dados</li>
                <li>SELECT name FROM table (50 cols) → lê 100% dos dados</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.5rem' }}>Parquet — Columnar</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                <li>Lê APENAS as colunas pedidas (column pruning)</li>
                <li>Schema embebido — zero inferência</li>
                <li>Snappy/Gzip integrado — 5-10× menos espaço</li>
                <li>Estatísticas por row group (min, max) → row group pruning</li>
                <li>SELECT name FROM table (50 cols) → lê 2% dos dados</li>
              </ul>
            </div>
          </div>

          <h3 style={S.h3}>Partition Pruning — Saltar Dados que Não Interessam</h3>
          <p style={S.p}>Quando um DataFrame é escrito com particionamento por coluna (ex: year, country), os dados são organizados em sub-directorias. Uma query com filtro nessa coluna pode pular completamente as directorias irrelevantes — nem sequer são listadas no plano de execução. Isto é chamado partition pruning e pode reduzir os dados lidos de 100% para 0.1% numa query típica com filtro temporal.</p>
          <p style={S.p}>A escolha das colunas de partição é crítica. Boas colunas: cardinalidade baixa a média (year, month, country, status — 10-1.000 valores distintos), frequentemente usadas em filtros. Más colunas: cardinalidade alta (user_id, order_id) cria milhões de sub-directorias, anulando o benefício e degradando a performance do listing de ficheiros.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Joins, Data Skew e AQE</h2>

          <JoinExplainer />

          <h3 style={S.h3}>Diagnosticar Data Skew</h3>
          <p style={S.p}>Data skew é quando a distribuição de dados entre partições é muito desigual — uma ou poucas partições têm muito mais dados que as outras. O sintoma clássico no Spark UI: o job fica a 99% completado por muito tempo, com uma ou poucas tasks a correr enquanto todas as outras terminaram. Estas tasks dominantes são os stragglers.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Sintoma</th><th style={S.th}>Diagnóstico</th><th style={S.th}>Solução</th></tr></thead>
              <tbody>
                {[
                  ['Job fica 99% por minutos/horas', 'Ver Spark UI → Tasks: 1-2 tasks muito maiores que as outras', 'Key salting, repartition pela chave skewed, AQE Skew Join'],
                  ['Uma task usa 10× mais memória', 'Ver Spark UI → Executors: 1 executor com OOM enquanto os outros têm memória livre', 'Repartition para mais partições; reduzir tamanho de partição'],
                  ['GroupBy lento com resultado pequeno', 'Muitas chaves com poucos valores vs. poucas chaves com muitos valores', 'Filtrar antes do groupBy; pre-aggregate com Combiner/mapPartitions'],
                  ['Join lento com tabela grande × pequena', 'Não está a usar Broadcast Join', 'Forçar broadcast: broadcast(small_df) ou aumentar threshold'],
                ].map(([s, d, sol]) => (
                  <tr key={s}><td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{s}</td><td style={S.td}>{d}</td><td style={{ ...S.td, color: '#4a9eed' }}>{sol}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Adaptive Query Execution (AQE) — Spark 3.0+</h3>
          <p style={S.p}>Antes do Spark 3.0, o plano de execução era fixo — o Catalyst optimizava com base em estatísticas estáticas antes da execução. O problema: estatísticas de tabela podem estar desactualizadas, e o volume real de dados após filtros é muitas vezes imprevisível. O AQE (Adaptive Query Execution) resolve isto re-optimizando o plano durante a execução, usando estatísticas reais dos stages já concluídos.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              { n: 'Coalescing Shuffle Partitions', c: '#4a9eed', desc: 'Depois do shuffle, se as partições forem pequenas, o AQE combina-as automaticamente. Evita overhead de muitas tasks pequenas sem configuração manual de spark.sql.shuffle.partitions.' },
              { n: 'Converting Sort-Merge to Broadcast', c: '#4a9eed', desc: 'Se depois do shuffle um lado do join for suficientemente pequeno, o AQE converte automaticamente o Sort-Merge Join num Broadcast Hash Join — sem necessidade de hints no código.' },
              { n: 'Skew Join Optimization', c: '#4a9eed', desc: 'Detecta partições skewed automaticamente e divide-as em sub-partições, duplicando as partições do outro lado para corresponder. Resolve skew sem key salting manual.' },
            ].map(({ n, c, desc }) => (
              <div key={n} style={{ background: `${c}08`, border: `1px solid ${c}25`, borderRadius: 8, padding: '0.9rem' }}>
                <div style={{ fontWeight: 700, color: c, marginBottom: '0.35rem', fontSize: '0.88rem' }}>{n}</div>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <h3 style={S.h3}>Configurações de Performance Essenciais</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Configuração</th><th style={S.th}>Default</th><th style={S.th}>Impacto</th><th style={S.th}>Recomendação</th></tr></thead>
              <tbody>
                {[
                  ['spark.sql.shuffle.partitions', '200', 'Número de partições após shuffle', 'Reduzir para datasets pequenos (20-50); aumentar para grandes (500-2000)'],
                  ['spark.sql.autoBroadcastJoinThreshold', '10 MB', 'Threshold para Broadcast Join automático', 'Aumentar para 50-100 MB se executors tiverem memória suficiente'],
                  ['spark.executor.memory', '1g', 'Memória por executor', 'Típico: 4-8 GB. Aumentar se OOM em shuffles ou sorts grandes'],
                  ['spark.executor.cores', '1', 'Cores por executor', 'Recomendar 4-5 cores por executor — equilíbrio paralelismo vs. GC'],
                  ['spark.sql.adaptive.enabled', 'true (Spark 3.2+)', 'AQE activo', 'Manter true — optimizações automáticas sem custo'],
                  ['spark.sql.files.maxPartitionBytes', '128 MB', 'Tamanho máximo de partição ao ler ficheiros', 'Aumentar para 256 MB se tasks são demasiado pequenas e rápidas'],
                ].map(([c, d, i, r]) => (
                  <tr key={c}><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem', color: '#4a9eed' }}>{c}</td><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{d}</td><td style={S.td}>{i}</td><td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{r}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Anti-patterns e Checklist de Performance</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Anti-pattern</th><th style={S.th}>Problema</th><th style={S.th}>Solução</th></tr></thead>
              <tbody>
                {[
                  ['SELECT * FROM tabela', 'Lê todas as colunas mesmo com Parquet — mata column pruning', 'SELECT apenas as colunas necessárias'],
                  ['collect() em dados grandes', 'Traz todos os dados para o Driver RAM → OOM imediato', 'take(100), show(20), ou write() para storage'],
                  ['groupBy sem filter antes', 'Shuffle de dados que seriam filtrados depois — trabalho desnecessário', 'filter() → select() → groupBy() — filtrar sempre primeiro'],
                  ['UDFs Python desnecessárias', 'Cada UDF Python requer serialização JVM↔Python — 10-100× mais lento', 'Usar funções nativas Spark SQL (regexp_extract, when, coalesce, etc.)'],
                  ['Sem particionamento em tabelas grandes', 'Toda a query lê todos os dados — sem partition pruning', 'partitionBy("year", "country") nas colunas de filtro mais usadas'],
                  ['Cache de tudo', 'Pressão de memória constante — evicções e recálculos', 'Cache apenas DataFrames usados múltiplas vezes no mesmo job'],
                  ['Muitas partições pequenas', 'Overhead de scheduling e GC domina o tempo de execução', 'coalesce() ou repartition() para reduzir antes de escrever'],
                  ['Ignorar o Spark UI', 'Não ver gargalos — optimizar às cegas', 'Analisar Stage Details: task times, shuffle read/write, GC time'],
                ].map(([a, p, s]) => (
                  <tr key={a}><td style={{ ...S.td, color: '#4a9eed', fontWeight: 600, fontSize: '0.85rem' }}>{a}</td><td style={S.td}>{p}</td><td style={{ ...S.td, color: '#4a9eed' }}>{s}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={S.highlight}>
          <strong>Checklist de Performance:</strong>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
            <li>Usar Parquet ou ORC com compressão Snappy — 5-10× menos dados para ler</li>
            <li>Filtrar e seleccionar colunas o mais cedo possível no pipeline</li>
            <li>Broadcast Join para tabelas pequenas (&lt; 50 MB no executor)</li>
            <li>Particionar por colunas de baixa cardinalidade usadas em filtros frequentes</li>
            <li>Activar AQE (spark.sql.adaptive.enabled=true) — optimiza automaticamente shuffle e joins</li>
            <li>Cache apenas DataFrames reutilizados múltiplas vezes; unpersist() quando terminado</li>
            <li>Verificar Spark UI após cada job — identificar tasks lentas e shuffles grandes</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
