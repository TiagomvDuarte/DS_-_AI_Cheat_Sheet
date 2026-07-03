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

const MRFlowDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>MapReduce — Fluxo Completo com Combiner</p>
    <svg viewBox="0 0 560 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-mr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      {[40, 100].map((y, i) => (
        <g key={y}>
          <rect x="10" y={y} width="70" height="26" rx="5" fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="1.5" />
          <text x="45" y={y + 17} textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600">Split {i + 1}</text>
        </g>
      ))}
      <text x="45" y="148" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Input</text>
      {[40, 100].map((y, i) => (
        <g key={y}>
          <line x1="80" y1={y + 13} x2="110" y2={y + 13} stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-mr)" />
          <rect x="112" y={y} width="70" height="26" rx="5" fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="1.5" />
          <text x="147" y={y + 17} textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600">Mapper {i + 1}</text>
        </g>
      ))}
      <text x="147" y="148" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Map phase</text>
      {[40, 100].map((y, i) => (
        <g key={y}>
          <line x1="182" y1={y + 13} x2="212" y2={y + 13} stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-mr)" />
          <rect x="214" y={y} width="70" height="26" rx="5" fill="rgba(234,179,8,0.15)" stroke="#eab308" strokeWidth="1.5" />
          <text x="249" y={y + 17} textAnchor="middle" fill="#eab308" fontSize="9" fontWeight="600">Combiner</text>
        </g>
      ))}
      <text x="249" y="148" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Mini-Reduce</text>
      <line x1="284" y1="53" x2="350" y2="80" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arr-mr)" />
      <line x1="284" y1="113" x2="350" y2="90" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arr-mr)" />
      <text x="300" y="75" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Shuffle</text>
      <text x="300" y="85" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">& Sort</text>
      <rect x="352" y="65" width="80" height="40" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
      <text x="392" y="82" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Reducer</text>
      <text x="392" y="97" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">por chave</text>
      <text x="392" y="148" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Reduce phase</text>
      <line x1="432" y1="85" x2="462" y2="85" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-mr)" />
      <rect x="464" y="65" width="80" height="40" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="504" y="82" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600">HDFS</text>
      <text x="504" y="97" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Output</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>O Combiner é um mini-Reduce local — reduz tráfego de rede antes do Shuffle. Só funciona com operações associativas e comutativas (soma, max, min).</p>
  </div>
);

const YARNDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>YARN — Arquitectura de Gestão de Recursos</p>
    <svg viewBox="0 0 600 170" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-yarn" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <rect x="220" y="10" width="160" height="45" rx="8" fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="2" />
      <text x="300" y="30" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">ResourceManager</text>
      <text x="300" y="46" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Arbitra recursos de todo o cluster</text>
      {[{ x: 65, label: 'Node 1', am: true }, { x: 205, label: 'Node 2', am: false }, { x: 395, label: 'Node 3', am: false }, { x: 535, label: 'Node 4', am: false }].map(({ x, label, am }) => (
        <g key={x}>
          <rect x={x - 58} y="90" width="116" height="70" rx="6" fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="1" />
          <text x={x} y="107" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{label}</text>
          <text x={x} y="119" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="600">NodeManager</text>
          {am && <rect x={x - 38} y="124" width="76" height="22" rx="4" fill="rgba(234,179,8,0.2)" stroke="#eab308" strokeWidth="1" />}
          {am && <text x={x} y="138" textAnchor="middle" fill="#eab308" fontSize="8" fontWeight="600">AppMaster</text>}
          {!am && (<><rect x={x - 38} y="124" width="33" height="18" rx="3" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" /><text x={x - 21} y="136" textAnchor="middle" fill="#f97316" fontSize="7">Task</text><rect x={x + 5} y="124" width="33" height="18" rx="3" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" /><text x={x + 21} y="136" textAnchor="middle" fill="#f97316" fontSize="7">Task</text></>)}
          <line x1={x} y1="90" x2={x < 300 ? 255 : 345} y2="55" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,2" />
        </g>
      ))}
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>O ApplicationMaster corre num container do Node 1 e negoceia recursos com o ResourceManager para lançar os restantes containers.</p>
  </div>
);

export default function CBD3() {
  const [scheduler, setScheduler] = useState(0);
  const [hiveFeature, setHiveFeature] = useState(0);
  const schedulers = [
    { name: 'FIFO', color: '#f97316', desc: 'Uma única fila de espera. Os jobs são processados pela ordem de chegada — o primeiro a entrar é o primeiro a ser servido. Simples mas sem partilha de recursos: um job grande que chega primeiro bloqueia todos os outros, mesmo que sejam triviais.', pro: 'Simples, zero overhead de scheduling', con: 'Sem fairness, sem SLAs, sem isolamento entre equipas', ideal: 'Clusters de desenvolvimento e teste onde apenas corre uma job de cada vez.' },
    { name: 'Capacity', color: '#f97316', desc: 'Múltiplas filas com capacidade garantida em percentagem do cluster. Cada departamento ou equipa tem a sua fila com quota mínima de recursos. Jobs podem usar capacidade ociosa de outras filas (elastic capacity), mas a fila proprietária tem prioridade para reclamar os seus recursos quando necessário.', pro: 'Isolamento por equipa, SLAs garantidos, sem starvation', con: 'Configuração complexa, pode fragmentar recursos', ideal: 'Clusters partilhados entre várias equipas com SLAs distintos (ex: equipa de BI tem prioridade de manhã, DS de tarde).' },
    { name: 'Fair', color: '#f97316', desc: 'Todos os jobs activos partilham os recursos equitativamente ao longo do tempo. Um job que chega quando o cluster está ocupado recebe imediatamente uma fatia dos recursos — não espera que os jobs anteriores terminem. Usa preemption configurável para rebalancear recursos quando novos jobs chegam.', pro: 'Alta utilização, latência baixa para jobs curtos, sem starvation', con: 'Overhead de rebalancing contínuo, preemption pode matar tasks a meio', ideal: 'Workloads mistos com jobs curtos e longos, onde latência de início importa.' },
  ];
  const hiveFeatures = [
    { name: 'Particionamento', color: '#f97316', desc: 'Divide uma tabela em sub-directorias por valor de coluna. Uma query com filtro na coluna de partição lê apenas as sub-directorias relevantes (partition pruning), saltando 99% dos dados em casos típicos. Exige colunas de baixa cardinalidade — nunca particionar por ID único.', ex: 'Tabela de vendas particionada por year/month: query de Março de 2024 lê apenas /year=2024/month=03/ ignorando todos os outros dados.' },
    { name: 'Bucketing', color: '#f97316', desc: 'Divide os dados de cada partição em N ficheiros (buckets) por hash de uma coluna. Diferente do particionamento, bucketing é útil para colunas de alta cardinalidade. Bucket joins (entre tabelas com mesmo número de buckets na mesma coluna) evitam o shuffle — cada bucket de A join com o bucket correspondente de B.', ex: 'Tabela de utilizadores com 32 buckets por user_id: join com tabela de transacções (também 32 buckets por user_id) é um bucket join sem shuffle — 32× mais rápido.' },
    { name: 'Metastore', color: '#f97316', desc: 'Base de dados central (tipicamente MySQL ou PostgreSQL) que guarda o schema de todas as tabelas Hive: nomes de colunas, tipos, localização HDFS, formato de ficheiro, estatísticas. É partilhado entre Hive, Spark SQL, Presto e outros motores — o contrato comum do ecosistema.', ex: 'O mesmo Metastore do Hive é usado pelo Spark SQL (spark.sql("SELECT...")), pelo Presto/Trino, e pelo AWS Glue Catalog — queries de SQL cross-engine sobre os mesmos dados.' },
    { name: 'SerDe', color: '#f97316', desc: 'Serializer/Deserializer — define como o Hive lê e escreve ficheiros. O SerDe JSON lê ficheiros JSON linha a linha. O SerDe CSV trata vírgulas como delimitadores. SerDes customizados permitem suporte a qualquer formato. O OpenCSVSerde, LazySimpleSerDe, AvroSerDe e RegexSerDe são os mais comuns.', ex: 'Uma tabela Hive sobre logs de servidor usando RegexSerDe pode fazer queries SQL sobre ficheiros de log brutos sem os converter — o SerDe aplica o regex na leitura.' },
  ];

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cloud-bigdata" style={S.back}><ArrowLeft size={16} /> Voltar a Cloud &amp; Big Data</Link>
        <div style={S.tag}>Module 3</div>
        <h1 style={S.h1}>MapReduce Avançado & Ecosistema Hadoop</h1>
        <p style={S.lead}>MapReduce em profundidade — Combiner, Partitioner e Speculative Execution. YARN como orquestrador universal de recursos. Hive com particionamento, bucketing e o Metastore. Pig Latin para ETL e Sqoop para mover dados entre RDBMS e HDFS.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. MapReduce em Profundidade</h2>
          <p style={S.p}>Processar 1 PB a 100 MB/s num único servidor levaria 115 dias. Com um cluster de 1.000 nós a 100 MB/s cada: menos de 3 horas. Esta aceleração só é possível se o trabalho for divisível em partes independentes — a premissa central do MapReduce.</p>
          <p style={S.p}>O que o MapReduce automatiza é exactamente o trabalho que seria impossível fazer manualmente: dividir os dados, distribuí-los pelos nós, coordenar a execução, recuperar de falhas, e agregar resultados parciais. O programador vê apenas dados de entrada e dados de saída — toda a infra-estrutura de distribuição está escondida.</p>

          <MRFlowDiagram />

          <h3 style={S.h3}>O Papel do Combiner — Optimização Crítica</h3>
          <p style={S.p}>O Combiner é um dos componentes mais importantes para performance em MapReduce, mas frequentemente negligenciado. Funciona como um mini-Reduce que corre localmente no nó do Mapper antes do Shuffle. O seu efeito é reduzir drasticamente o volume de dados transferido pela rede durante o Shuffle.</p>
          <p style={S.p}>Considere o exemplo do Word Count: sem Combiner, se um mapper processar 10.000 ocorrências da palavra "the", envia 10.000 pares (the, 1) para o reducer via rede. Com Combiner, agrega localmente para (the, 10000) e envia apenas 1 par. A redução pode ser de ordens de grandeza. A restrição crítica: a função do Combiner deve ser idêntica à do Reducer e só pode ser usada com operações matematicamente associativas e comutativas — soma, máximo, mínimo funcionam. Média, mediana e percentis não funcionam (pois a média de médias não é a média global).</p>

          <h3 style={S.h3}>Partitioner — Controlo de Balanceamento</h3>
          <p style={S.p}>O Partitioner decide qual reducer recebe qual chave. O partitioner por defeito calcula o hash da chave e faz módulo com o número de reducers: reducer_index = hash(key) % numReducers. Esta distribuição é geralmente uniforme, mas pode criar data skew em casos reais — por exemplo, se 80% dos dados têm a chave "USA" e existem 100 chaves no total, o reducer de "USA" recebe 80× mais trabalho que os outros.</p>
          <p style={S.p}>Partitioners customizados resolvem este problema. Um TotalOrderPartitioner usa uma amostra dos dados para criar intervalos equidistribuídos — útil para ordenação global. Um KeyFieldBasedPartitioner permite particionar por um campo específico de uma chave composta.</p>

          <h3 style={S.h3}>Componentes Avançados</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Componente</th><th style={S.th}>Função</th><th style={S.th}>Condição de uso</th><th style={S.th}>Impacto de performance</th></tr></thead>
              <tbody>
                {[
                  ['Combiner', 'Mini-Reduce local antes do Shuffle', 'Operações associativas + comutativas (sum, max, min)', 'Reduz dados de rede em 10-100×'],
                  ['Partitioner', 'Decide qual reducer recebe qual chave', 'Sempre activo (default: hash(key) % reducers)', 'Critico para balanceamento — skew = job lento'],
                  ['Speculative Execution', 'Duplica tasks lentos em outros nós', 'Task demora &gt;4× a mediana da fase', 'Elimina o efeito do nó mais lento no job total'],
                  ['Reduce-side Join', 'Join entre dois datasets sem pré-processo', 'Ambos os datasets mapeiam para a mesma chave de join', 'Eficiente mas shuffle de ambos — Broadcast Join é melhor se um for pequeno'],
                  ['InputFormat', 'Define como dividir e ler ficheiros de input', 'Configurado por tipo de ficheiro (TextInputFormat, SequenceFileInputFormat)', 'Má divisão = mappers com tamanhos muito desiguais'],
                ].map(([c, f, d, p]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{c}</td><td style={S.td}>{f}</td><td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{d}</td><td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Padrões de Design MapReduce</h3>
          <p style={S.p}>Tal como em programação orientada a objectos existem design patterns (Singleton, Observer, Factory), em MapReduce existem padrões recorrentes para resolver classes de problemas comuns:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              { name: 'Inverted Index', color: '#f97316', desc: 'Map emite (palavra, documento). Reduce agrega a lista de documentos por palavra. Base de qualquer motor de pesquisa full-text — o Elasticsearch usa este princípio internamente.' },
              { name: 'Top-N Items', color: '#f97316', desc: 'Cada mapper mantém um heap local dos N maiores. Combiner mantém top-N local. Reducer faz merge final dos heaps parciais. Muito mais eficiente que ordenar tudo e truncar.' },
              { name: 'Distributed Join', color: '#f97316', desc: 'Map-side join: tabela pequena carregada em memória de cada mapper (DistributedCache), join local sem shuffle. Reduce-side join: ambos mapeiam para chave comum, reducer faz o join.' },
              { name: 'Secondary Sort', color: '#f97316', desc: 'Ordenar por chave primária E secundária. Usa chave composta (k1, k2) no mapper, Partitioner ignora k2, natural sort do shuffle ordena por (k1, k2). Útil para sessões de utilizadores por timestamp.' },
            ].map(({ name, color, desc }) => (
              <div key={name} style={{ background: `${color}08`, border: `1px solid ${color}25`, borderRadius: 8, padding: '0.9rem' }}>
                <div style={{ fontWeight: 700, color, marginBottom: '0.35rem' }}>{name}</div>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. YARN — Gestão Universal de Recursos</h2>
          <p style={S.p}>O Hadoop 1.x tinha um problema arquitectural fundamental: o JobTracker combinava duas responsabilidades incompatíveis — gestão de recursos do cluster E monitorização de todos os jobs. Num cluster de 4.000 nós, o JobTracker tornava-se um bottleneck e um ponto único de falha. Além disso, só suportava MapReduce — outros frameworks (Spark, Tez) não podiam correr no mesmo cluster Hadoop.</p>
          <p style={S.p}>O YARN (Yet Another Resource Negotiator), introduzido no Hadoop 2.0 em 2012, separa completamente estas responsabilidades. O ResourceManager gere apenas recursos. O ApplicationMaster (um por aplicação) gere o ciclo de vida da sua aplicação. Esta separação transformou o Hadoop num sistema operativo genérico para processamento distribuído — qualquer framework que implemente o protocolo YARN pode correr no mesmo cluster.</p>

          <YARNDiagram />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              ['ResourceManager', 'O árbitro global. Aceita pedidos de recursos (containers), aloca-os com base na disponibilidade e política do scheduler. Não sabe o que os containers estão a fazer — só sabe quantos CPU e RAM estão a usar.', '#f97316'],
              ['NodeManager', 'Agente em cada nó do cluster. Reporta recursos disponíveis ao RM a cada heartbeat. Lança containers quando o RM os aloca. Monitoriza o uso de CPU/RAM e mata containers que excedam os limites.', '#f97316'],
              ['ApplicationMaster', 'Um por aplicação (job). Corre num container alocado pelo RM. Negoceia com o RM os containers necessários para as tasks da aplicação. É específico do framework — o Spark tem o seu SparkAM, o MapReduce tem o MRAppMaster.', '#f97316'],
              ['Container', 'A unidade de execução: CPU cores + RAM alocados a uma task específica. O NodeManager lança um processo (JVM) dentro dos limites do container e mata-o se exceder os recursos. Isolation via cgroups.', '#f97316'],
            ].map(([t, d, c]) => (
              <div key={t} style={{ background: `${c}08`, border: `1px solid ${c}25`, borderRadius: 8, padding: '0.9rem' }}>
                <div style={{ fontWeight: 700, color: c, marginBottom: '0.3rem', fontSize: '0.9rem' }}>{t}</div>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>

          <h3 style={S.h3}>Schedulers do YARN</h3>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            {schedulers.map((sc, i) => (
              <button key={i} onClick={() => setScheduler(i)} style={{ padding: '0.35rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: scheduler === i ? sc.color : 'var(--bg-primary)', color: scheduler === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${scheduler === i ? sc.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{sc.name}</button>
            ))}
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.1rem', border: `1.5px solid ${schedulers[scheduler].color}40` }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{schedulers[scheduler].desc}</p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.83rem', color: '#f97316' }}>✓ {schedulers[scheduler].pro}</span>
              <span style={{ fontSize: '0.83rem', color: '#f97316' }}>✗ {schedulers[scheduler].con}</span>
            </div>
            <div style={{ fontSize: '0.83rem', color: 'var(--text-secondary)' }}><strong style={{ color: schedulers[scheduler].color }}>Ideal para:</strong> {schedulers[scheduler].ideal}</div>
          </div>

          <div style={S.note}>Localidade de dados: YARN tenta correr o container no nó onde o bloco HDFS existe (node-local, preferido). Se não for possível, tenta o mesmo rack (rack-local). Só em último caso usa outro rack (off-switch — o mais lento). O Spark reporta as preferências de localidade ao AM, que as comunica ao RM — maximizando "move code to data".</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Apache Hive — SQL sobre Big Data</h2>
          <p style={S.p}>O Apache Hive foi criado no Facebook em 2007 para permitir que analistas de SQL trabalhassem com dados no HDFS sem aprender MapReduce. O conceito central é o HiveQL — um dialecto de SQL que o compilador Hive traduz em jobs MapReduce (ou Tez ou Spark). Esta tradução automática democratizou o acesso ao Big Data.</p>
          <p style={S.p}>O design do Hive assenta em Schema-on-Read: o schema é definido na criação da tabela mas aplicado apenas na leitura dos dados. O ficheiro HDFS subjacente pode ser CSV, Parquet, ORC, ou qualquer formato com SerDe adequado. Isto permite criar múltiplas views com schemas diferentes sobre os mesmos dados — sem mover ou transformar nada.</p>

          <h3 style={S.h3}>Funcionalidades Essenciais do Hive</h3>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            {hiveFeatures.map((hf, i) => (
              <button key={i} onClick={() => setHiveFeature(i)} style={{ padding: '0.35rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: hiveFeature === i ? hf.color : 'var(--bg-primary)', color: hiveFeature === i ? (hf.color === '#f97316' ? '#000' : 'white') : 'var(--text-primary)', border: `1.5px solid ${hiveFeature === i ? hf.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{hf.name}</button>
            ))}
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.1rem', border: `1.5px solid ${hiveFeatures[hiveFeature].color}40` }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.6rem' }}>{hiveFeatures[hiveFeature].desc}</p>
            <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', background: `${hiveFeatures[hiveFeature].color}08`, borderLeft: `3px solid ${hiveFeatures[hiveFeature].color}`, padding: '0.6rem 0.9rem', borderRadius: '0 6px 6px 0' }}><strong style={{ color: hiveFeatures[hiveFeature].color }}>Exemplo prático:</strong> {hiveFeatures[hiveFeature].ex}</div>
          </div>

          <h3 style={S.h3}>Formatos de Ficheiro — A Escolha Certa Muda Tudo</h3>
          <p style={S.p}>A escolha do formato de armazenamento tem um impacto enorme na performance das queries. Formatos orientados a colunas permitem que queries que lêem apenas algumas colunas de uma tabela wide ignorem completamente as colunas não pedidas — em disco, em rede, e em CPU. A diferença pode ser de 10-50× em queries de analytics.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Formato</th><th style={S.th}>Orientação</th><th style={S.th}>Compressão</th><th style={S.th}>Caso de uso ideal</th><th style={S.th}>Vantagem chave</th></tr></thead>
              <tbody>
                {[
                  ['ORC', 'Columnar', 'Zlib / Snappy / LZO', 'Analytics intensivos no Hive, batch', 'Índices built-in, bloom filters, estatísticas de coluna'],
                  ['Parquet', 'Columnar', 'Snappy / Gzip / Brotli', 'Cross-platform: Spark, Hive, Presto, Pandas', 'Universal — suportado em todo o ecosistema Big Data'],
                  ['Avro', 'Row-based', 'Snappy / Deflate', 'Ingestão via Kafka, schema evolution, Debezium CDC', 'Schema embebido — evolução de schema sem reprocessar dados'],
                  ['Delta Lake', 'Columnar (Parquet+log)', 'Snappy', 'ACID transactions, upserts, time travel', 'Único formato com ACID garantido sobre object storage'],
                  ['CSV / JSON', 'Row-based', 'Nenhuma (raw)', 'Ingestão inicial, debugging, compatibilidade universal', 'Legível por humanos — sem overhead de configuração'],
                ].map(([f, o, comp, c, v]) => (
                  <tr key={f}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{f}</td><td style={S.td}>{o}</td><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.83rem' }}>{comp}</td><td style={S.td}>{c}</td><td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Motores de Execução do Hive</h3>
          <p style={S.p}>O Hive não está ligado a um único motor de execução. O mesmo HiveQL pode ser executado com MapReduce (lento mas estável), Tez (DAG optimizado, 2-3× mais rápido), ou Spark (in-memory, 5-10× mais rápido para workloads iterativos). A configuração é transparente para o analista SQL — só muda o parâmetro hive.execution.engine.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Motor</th><th style={S.th}>Modelo</th><th style={S.th}>Latência</th><th style={S.th}>Quando usar</th></tr></thead>
              <tbody>
                {[
                  ['MapReduce', 'Batch, disk-based', 'Minutos–horas', 'Legacy; clusters sem Tez/Spark; máxima estabilidade'],
                  ['Apache Tez', 'DAG, semi-memory', 'Segundos–minutos', 'Substituto directo do MR no Hive — 2-3× mais rápido, sem mudar queries'],
                  ['Spark', 'DAG, in-memory', 'Segundos', 'Workloads iterativos, ML, quando latência importa'],
                  ['LLAP (Hive 2+)', 'In-memory persistent', 'Sub-segundo', 'BI interactivo com dados quentes em cache — concorrência alta'],
                ].map(([m, mo, l, w]) => (
                  <tr key={m}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{m}</td><td style={S.td}>{mo}</td><td style={{ ...S.td, color: '#f97316', fontWeight: 600 }}>{l}</td><td style={S.td}>{w}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Apache Pig — ETL Programático</h2>
          <p style={S.p}>O Apache Pig foi criado no Yahoo! em 2006 para preencher o gap entre MapReduce de baixo nível (código Java) e HiveQL (SQL puro). O Pig Latin é uma linguagem de fluxo de dados — um script descreve uma sequência de transformações, e o compilador Pig gera automaticamente um plano de execução MapReduce ou Tez optimizado.</p>
          <p style={S.p}>A abstracção central do Pig é a relação — similar a uma tabela em SQL mas sem schema obrigatório. Cada operação Pig retorna uma nova relação. A execução é lazy: nenhuma operação é executada até que um STORE ou DUMP seja encontrado, permitindo ao optimizador Pig reordenar e combinar operações.</p>

          <h3 style={S.h3}>Operadores Pig Latin</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {[
              { op: 'LOAD', color: '#f97316', desc: 'Lê dados do HDFS usando um LoadFunc (TextLoader, PigStorage, AvroStorage, ParquetLoader). Define o schema opcional.' },
              { op: 'FILTER', color: '#f97316', desc: 'Selecciona tuplos que satisfazem uma condição. Equivalente ao WHERE do SQL. O optimizador faz pushdown automático.' },
              { op: 'FOREACH … GENERATE', color: '#f97316', desc: 'Projecciona e transforma campos. Equivalente ao SELECT do SQL com capacidade de cálculos complexos por coluna.' },
              { op: 'GROUP BY', color: '#f97316', desc: 'Agrupa tuplos por chave. Depois de GROUP, usa FOREACH com funções de agregação (SUM, MAX, AVG, COUNT).' },
              { op: 'JOIN', color: '#f97316', desc: 'Inner join entre duas ou mais relações. Pig suporta join, outer join e fragment-replicate join (para tabelas pequenas).' },
              { op: 'ORDER BY', color: '#f97316', desc: 'Ordena os dados globalmente. Requer um sampling pass para determinar os intervalos de ordenação — muito mais eficiente que sort full em MR.' },
            ].map(({ op, color, desc }) => (
              <div key={op} style={{ background: `${color}08`, border: `1px solid ${color}25`, borderRadius: 8, padding: '0.75rem' }}>
                <div style={{ fontWeight: 700, color, fontFamily: 'monospace', fontSize: '0.88rem', marginBottom: '0.3rem' }}>{op}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={S.note}>Pig tem duas grandes vantagens face ao Hive: suporta dados sem schema (útil para exploração de logs brutos) e permite UDFs (User Defined Functions) em Java, Python ou JavaScript para lógica que não cabe em SQL. A desvantagem é a menor adopção e o menor suporte de ferramentas de BI modernas.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Apache Sqoop — RDBMS ↔ HDFS</h2>
          <p style={S.p}>O Apache Sqoop (SQL + Hadoop) resolve um problema prático crítico: como mover dados das bases de dados relacionais operacionais (Oracle, MySQL, PostgreSQL, SQL Server) para o HDFS ou Hive para analytics, e vice-versa. Sem o Sqoop, esta transferência exigiria escrever scripts ETL customizados e lidar com JDBC, paralelismo e encoding de dados.</p>
          <p style={S.p}>A arquitectura do Sqoop é elegante: usa JDBC para conectar à BD fonte, detecta automaticamente o schema das tabelas, e lança N jobs MapReduce em paralelo (tipicamente 4). Cada mapper lê um intervalo da chave primária da tabela — distribuindo uniformemente o trabalho. O resultado é importado directamente para HDFS em Parquet, Avro, ou texto.</p>

          <h3 style={S.h3}>Modos de Importação</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Modo</th><th style={S.th}>Descrição</th><th style={S.th}>Quando usar</th><th style={S.th}>Configuração chave</th></tr></thead>
              <tbody>
                {[
                  ['Full Import', 'Importa toda a tabela de uma vez. Divide por intervalo de chave primária entre N mappers.', 'Carga inicial ou tabelas que são substituídas integralmente', '--num-mappers N'],
                  ['Incremental Append', 'Importa apenas linhas com ID maior que o último import. Usa coluna de incremento (tipicamente PK autoincrementada).', 'Tabelas que só crescem (append-only): logs, events, transactions', '--incremental append --check-column id --last-value 12345'],
                  ['Incremental Last Modified', 'Importa linhas com timestamp de modificação mais recente que o último import.', 'Tabelas com updates frequentes onde a última versão é a correcta', '--incremental lastmodified --check-column updated_at'],
                  ['Import-all-tables', 'Importa todas as tabelas de uma base de dados de uma vez.', 'Migração inicial de uma BD inteira para HDFS/Hive', '--warehouse-dir /data/db_name/'],
                  ['Export', 'Lê Parquet/CSV do HDFS e insere/actualiza na BD relacional.', 'Servir resultados de analytics de volta para sistemas operacionais', '--table target_table --update-mode allowinsert'],
                ].map(([m, d, w, c]) => (
                  <tr key={m}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{m}</td><td style={S.td}>{d}</td><td style={S.td}>{w}</td><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{c}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.4rem"}}><strong>MapReduce em Profundidade</strong> — o ciclo completo envolve InputSplit → Map → Combiner (mini-reduce local) → Partitioner → Shuffle &amp; Sort → Reduce → Output; o Combiner reduz tráfego de rede ao pré-agregar localmente e só funciona com operações associativas e comutativas (soma, max, min).</li>
              <li style={{marginBottom:"0.4rem"}}><strong>YARN</strong> — separou gestão de recursos (ResourceManager + NodeManager) de execução (ApplicationMaster) — eliminou o bottleneck do JobTracker e tornou o Hadoop multi-framework, permitindo que Spark, Flink e outros coexistam no mesmo cluster.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Apache Hive</strong> — traduz HiveQL em jobs MapReduce/Tez/Spark; Parquet e ORC são os formatos columnar recomendados para analytics; o Hive Metastore é o contrato comum entre todos os motores do ecosistema — Spark SQL, Presto e Athena lêem o mesmo metastore.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Apache Pig</strong> — linguagem Pig Latin para transformações ETL com suporte nativo a UDFs em Java/Python; compila para MapReduce; mais expressivo que MapReduce directo mas substituído em grande parte pelo Spark.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Apache Sqoop</strong> — importação e exportação eficiente entre RDBMS e HDFS usando JDBC; paraleliza a transferência por splits na chave primária; importações incrementais ({'"--check-column"'}) evitam reprocessar tudo.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
