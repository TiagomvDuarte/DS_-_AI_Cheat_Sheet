import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const color = '#4a9eed';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

export default function CBD8() {
  return (
    <div style={S.page}>
      <Link to="/cloud-bigdata" style={S.back}><ArrowLeft size={16} /> Voltar a Cloud &amp; Big Data</Link>
      <div style={S.tag}>MÓDULO 08</div>
      <h1 style={S.h1}>Databricks</h1>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Databricks vs Apache Spark Open-Source</h2>
        <p style={S.p}>
          Apache Spark é o motor de processamento distribuído de código aberto. O Databricks, criado pelos próprios
          autores do Spark, oferece uma camada gerida que elimina a complexidade operacional e acrescenta ferramentas
          de colaboração, governança e optimização que não existem no Spark puro.
        </p>
        <p style={S.p}>
          Em vez de configurar manualmente clusters YARN ou Kubernetes, o Databricks gere toda a infra-estrutura,
          permitindo que as equipas se foquem nos dados e não na operação do sistema.
        </p>
        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Feature</th>
                <th style={S.th}>Apache Spark OSS</th>
                <th style={S.th}>Databricks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}>Gestão de clusters</td>
                <td style={S.td}>Manual (YARN, K8s, standalone)</td>
                <td style={S.td}>Totalmente gerida, autoscaling nativo</td>
              </tr>
              <tr>
                <td style={S.td}>Notebooks colaborativos</td>
                <td style={S.td}>Jupyter (sem colaboração real-time)</td>
                <td style={S.td}>Co-edição em tempo real, comentários, versionamento</td>
              </tr>
              <tr>
                <td style={S.td}>Storage layer</td>
                <td style={S.td}>Parquet, ORC, CSV (sem ACID)</td>
                <td style={S.td}>Delta Lake integrado — ACID, time travel</td>
              </tr>
              <tr>
                <td style={S.td}>Governança de dados</td>
                <td style={S.td}>Sem solução nativa</td>
                <td style={S.td}>Unity Catalog — lineage, RBAC granular</td>
              </tr>
              <tr>
                <td style={S.td}>Orquestração</td>
                <td style={S.td}>Ferramentas externas (Airflow, etc.)</td>
                <td style={S.td}>Workflows nativos — DAGs, triggers, monitorização</td>
              </tr>
              <tr>
                <td style={S.td}>Optimização SQL</td>
                <td style={S.td}>Catalyst optimizer padrão</td>
                <td style={S.td}>Photon engine — vectorized C++ runtime</td>
              </tr>
              <tr>
                <td style={S.td}>MLOps</td>
                <td style={S.td}>Sem integração nativa</td>
                <td style={S.td}>MLflow, Feature Store, AutoML, Model Serving</td>
              </tr>
              <tr>
                <td style={S.td}>Custo</td>
                <td style={S.td}>Gratuito (infra paga à parte)</td>
                <td style={S.td}>DBUs (Databricks Units) + custo de cloud</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          O Databricks Runtime (DBR) é uma versão optimizada do Spark com patches de performance, Delta Lake pré-instalado
          e bibliotecas de ML integradas — tipicamente 2-5x mais rápido do que Spark OSS equivalente.
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Arquitectura Lakehouse — Medallion Architecture</h2>
        <p style={S.p}>
          O conceito Lakehouse combina a flexibilidade e o baixo custo de um Data Lake com as garantias transaccionais
          e a performance de um Data Warehouse. O pilar tecnológico é o Delta Lake — uma camada de storage open-source
          que adiciona ACID transactions a ficheiros Parquet no object storage (S3, ADLS, GCS).
        </p>
        <div style={S.diagram}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 200, background: 'rgba(180,83,9,0.08)', border: '1px solid rgba(180,83,9,0.35)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#b45309', marginBottom: '0.5rem' }}>Bronze (Raw)</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Dados brutos ingeridos tal como chegam. Sem transformações. Schema-on-read. Serve como fonte de verdade imutável.
                Retenção longa. Formatos: JSON, CSV, Avro, logs.
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 200, background: 'rgba(148,163,184,0.08)', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#94a3b8', marginBottom: '0.5rem' }}>Silver (Cleansed)</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Dados limpos, deduplicados e validados. Schema enforced. Joins entre domínios. Base para análises e ML.
                Delta tables com ACID e Z-ordering.
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 200, background: 'rgba(212,160,23,0.08)', border: '1px solid rgba(212,160,23,0.35)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#d4a017', marginBottom: '0.5rem' }}>Gold (Aggregated)</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Agregações de negócio prontas a consumir. KPIs, métricas, feature tables. Optimizadas para dashboards,
                relatórios e serving de modelos ML.
              </div>
            </div>
          </div>
        </div>
        <p style={S.p}>
          O Delta Lake adiciona um transaction log (ficheiro JSON) que regista cada operação — INSERT, UPDATE, DELETE, MERGE.
          Isto permite ACID completo mesmo em ambientes distribuídos com múltiplos writers concorrentes.
        </p>
        <div style={S.highlight}>
          <strong>Time Travel:</strong> cada versão da tabela fica preservada no transaction log. É possível consultar
          dados históricos com <code>VERSION AS OF</code> ou <code>TIMESTAMP AS OF</code>, fazer rollback e auditar
          quem alterou o quê e quando.
        </div>
        <div style={S.code}>{`-- Consultar versão anterior da tabela
SELECT * FROM vendas VERSION AS OF 42;

-- Ou por timestamp
SELECT * FROM vendas TIMESTAMP AS OF '2024-01-15 09:00:00';

-- Restaurar para versão anterior
RESTORE TABLE vendas TO VERSION AS OF 42;

-- Ver histórico completo
DESCRIBE HISTORY vendas;`}</div>
        <p style={S.p}>
          Outras funcionalidades Delta Lake relevantes: <strong>OPTIMIZE</strong> (compacta small files),{' '}
          <strong>ZORDER BY</strong> (co-localiza dados para queries selectivas), <strong>VACUUM</strong>{' '}
          (remove ficheiros antigos respeitando o retention period), e <strong>Change Data Feed</strong>{' '}
          (captura CDC nativo para pipelines incrementais).
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Unity Catalog — Governança Centralizada</h2>
        <p style={S.p}>
          O Unity Catalog é a solução de governança de dados do Databricks. Centraliza metadados, permissões e auditoria
          num único plano de controlo partilhado por todos os workspaces da organização. Elimina silos de governança
          entre equipas e ambientes.
        </p>
        <p style={S.p}>
          A hierarquia de objectos no Unity Catalog segue três níveis: <strong>Catalog &gt; Schema &gt; Table/View/Function</strong>.
          Esta estrutura permite organizar dados por domínio de negócio, equipa ou ambiente (dev/prod).
        </p>
        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Capacidade</th>
                <th style={S.th}>Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}><strong>Data Lineage</strong></td>
                <td style={S.td}>Rastreio automático de origem-destino ao nível de coluna. Visualização gráfica de dependências entre tabelas, notebooks e jobs.</td>
              </tr>
              <tr>
                <td style={S.td}><strong>RBAC Granular</strong></td>
                <td style={S.td}>Permissões por catalog, schema, tabela, coluna e até row-level security. Suporta grupos AD/IdP via SCIM.</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Row-Level Security</strong></td>
                <td style={S.td}>Row filters dinâmicos baseados em atributos do utilizador. Ex: cada regional só vê os dados da sua região.</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Column Masking</strong></td>
                <td style={S.td}>Mascaramento de colunas sensíveis (PII) com funções SQL. Utilizadores sem permissão vêem valores nulos ou hash.</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Audit Logs</strong></td>
                <td style={S.td}>Registo de todos os acessos e operações em Delta tables. Exportável para SIEM ou para análise de compliance.</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Data Discovery</strong></td>
                <td style={S.td}>Catálogo pesquisável com tags, descrições, owners e quality metrics. Integrado com o Databricks Marketplace.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={S.code}>{`-- Criar catalog e schema
CREATE CATALOG producao;
CREATE SCHEMA producao.vendas;

-- Conceder permissões granulares
GRANT SELECT ON TABLE producao.vendas.transacoes TO 'analistas';
GRANT MODIFY ON SCHEMA producao.vendas TO 'engenheiros';

-- Row-level filter (apenas dados da região do utilizador)
CREATE ROW FILTER filtro_regiao ON producao.vendas.transacoes
  USING (regiao = current_user_attribute('regiao'));

-- Column masking para PII
ALTER TABLE producao.clientes ALTER COLUMN nif
  SET MASK mascara_pii;`}</div>
        <div style={S.note}>
          Unity Catalog suporta dados externos (External Tables) em S3/ADLS sem necessidade de mover dados para o
          Databricks managed storage. A governança aplica-se igualmente a ambos os tipos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Clusters: Tipos e Configuração</h2>
        <p style={S.p}>
          Um cluster Databricks é um conjunto de VMs que executa o Apache Spark. A escolha do tipo de cluster e
          a sua configuração têm impacto directo no custo e na performance dos workloads.
        </p>
        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Tipo</th>
                <th style={S.th}>Uso</th>
                <th style={S.th}>Características</th>
                <th style={S.th}>Custo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}><strong>All-Purpose</strong></td>
                <td style={S.td}>Desenvolvimento, exploração interactiva, notebooks</td>
                <td style={S.td}>Partilhado entre utilizadores, persiste entre sessões</td>
                <td style={S.td}>Mais caro (DBUs All-Purpose)</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Job Cluster</strong></td>
                <td style={S.td}>Execução de jobs em produção via Workflows</td>
                <td style={S.td}>Criado e destruído automaticamente por job run</td>
                <td style={S.td}>Mais barato (DBUs Jobs)</td>
              </tr>
              <tr>
                <td style={S.td}><strong>SQL Warehouse</strong></td>
                <td style={S.td}>Databricks SQL, dashboards, queries analíticas</td>
                <td style={S.td}>Serverless ou Classic, Photon engine activado</td>
                <td style={S.td}>DBUs SQL (intermediário)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          <strong>Autoscaling</strong> permite que o cluster ajuste dinamicamente o número de workers entre um mínimo
          e máximo configurado com base na carga. Útil para workloads variáveis, mas pode introduzir latência de
          scale-up. Para pipelines de produção com SLA rígido, considerar cluster de tamanho fixo.
        </p>
        <div style={S.highlight}>
          <strong>Cluster Pools</strong> mantêm um conjunto de VMs pre-alocadas (idle) prontas a ser atribuídas a
          novos clusters. Reduz o tempo de arranque de minutos para segundos. Ideal quando há muitos job clusters
          curtos a serem criados frequentemente.
        </div>
        <p style={S.p}>
          <strong>Photon Engine</strong> é o runtime vectorizado em C++ do Databricks que substitui o executor
          Java/JVM do Spark para operações SQL e DataFrame. Oferece acelerações de 2-12x em cargas analíticas,
          especialmente em queries com filtros, agregações e joins sobre Delta tables. Activado por default nos
          SQL Warehouses e disponível opcionalmente nos clusters All-Purpose e Job.
        </p>
        <div style={S.code}>{`# Configuração de cluster via Databricks SDK (Python)
from databricks.sdk import WorkspaceClient
from databricks.sdk.service.compute import ClusterSpec

w = WorkspaceClient()

cluster = w.clusters.create(
    cluster_name="pipeline-producao",
    spark_version="14.3.x-scala2.12",
    node_type_id="m5.2xlarge",
    num_workers=4,                  # fixo (sem autoscaling)
    autotermination_minutes=30,     # terminar após 30min idle
    instance_pool_id="pool-xyz",    # usar pool pre-alocada
    spark_conf={
        "spark.databricks.photon.enabled": "true",
        "spark.sql.adaptive.enabled": "true",
    }
)`}</div>
      </div>

      <hr style={S.divider} />

      {/* Section 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Workflows &amp; Jobs — Orquestração Nativa</h2>
        <p style={S.p}>
          O Databricks Workflows é o sistema de orquestração nativo da plataforma. Permite criar pipelines de dados
          complexos como DAGs (Directed Acyclic Graphs) de tasks, sem depender de ferramentas externas como o Airflow.
        </p>
        <p style={S.p}>
          Um Job pode conter múltiplas tasks de tipos diferentes: notebooks, scripts Python, JARs Scala, SQL queries,
          pipelines DLT, ou chamadas a outros jobs. As dependências entre tasks definem a ordem de execução e o
          paralelismo possível.
        </p>
        <div style={S.diagram}>
          <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 2 }}>
            <div>Job: pipeline_vendas_diario</div>
            <div style={{ paddingLeft: '1rem' }}>&#9500;&#9472;&#9472; Task: ingestao_raw (Bronze) ────────────────────&#9488;</div>
            <div style={{ paddingLeft: '1rem' }}>&#9474;                                                  &#8595;</div>
            <div style={{ paddingLeft: '1rem' }}>&#9500;&#9472;&#9472; Task: limpeza_silver &#9668;&#9472;&#9472; depends_on: ingestao_raw</div>
            <div style={{ paddingLeft: '1rem' }}>&#9474;         &#8595;</div>
            <div style={{ paddingLeft: '1rem' }}>&#9500;&#9472;&#9472; Task: agregacao_gold &#9668;&#9472;&#9472; depends_on: limpeza_silver</div>
            <div style={{ paddingLeft: '1rem' }}>&#9474;         &#8595;</div>
            <div style={{ paddingLeft: '1rem' }}>&#9492;&#9472;&#9472; Task: notificacao_slack &#9668;&#9472;&#9472; depends_on: agregacao_gold</div>
          </div>
        </div>
        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Feature</th>
                <th style={S.th}>Detalhe</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}><strong>Triggers</strong></td>
                <td style={S.td}>Scheduled (cron), Manual, File arrival (chegada de ficheiro no storage), Continuous</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Retry policies</strong></td>
                <td style={S.td}>Configurável por task — max retries, retry interval, on-failure behaviour</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Task parameters</strong></td>
                <td style={S.td}>Passagem de valores entre tasks via job parameters e task values (taskValues API)</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Run conditions</strong></td>
                <td style={S.td}>ALL_SUCCESS, AT_LEAST_ONE_SUCCESS, NONE_FAILED, ALL_DONE — controlo de branching</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Monitorização</strong></td>
                <td style={S.td}>UI com timeline de runs, logs por task, alertas email/Slack/PagerDuty, métricas de duração</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Reparar e re-executar</strong></td>
                <td style={S.td}>Re-run only failed tasks de uma run anterior sem executar novamente as que passaram</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={S.code}>{`# Definir job multi-task via Databricks SDK
job = w.jobs.create(
    name="pipeline_vendas_diario",
    tasks=[
        Task(
            task_key="ingestao_raw",
            notebook_task=NotebookTask(notebook_path="/pipelines/bronze/ingestao"),
            new_cluster=ClusterSpec(num_workers=2, spark_version="14.3.x-scala2.12"),
            max_retries=2,
        ),
        Task(
            task_key="limpeza_silver",
            depends_on=[TaskDependency(task_key="ingestao_raw")],
            python_wheel_task=PythonWheelTask(package_name="pipeline_pkg", entry_point="silver"),
            job_cluster_key="shared_job_cluster",
        ),
        Task(
            task_key="agregacao_gold",
            depends_on=[TaskDependency(task_key="limpeza_silver")],
            sql_task=SqlTask(query=SqlTaskQuery(query_id="query-abc123")),
        ),
    ],
    schedule=CronSchedule(quartz_cron_expression="0 0 6 * * ?", timezone_id="Europe/Lisbon"),
    email_notifications=JobEmailNotifications(on_failure=["data-team@empresa.pt"]),
)`}</div>
      </div>

      <hr style={S.divider} />

      {/* Section 6 */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Databricks em Produção — MLOps e DLT</h2>
        <p style={S.p}>
          O Databricks integra nativamente um ecossistema completo de MLOps que cobre todo o ciclo de vida de modelos
          de Machine Learning, desde a experimentação até ao serving em produção, sem necessidade de ferramentas externas.
        </p>
        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Componente</th>
                <th style={S.th}>Função</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}><strong>MLflow</strong></td>
                <td style={S.td}>Tracking de experimentos (métricas, parâmetros, artefactos), Model Registry com versionamento e stage transitions (Staging &rarr; Production)</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Feature Store</strong></td>
                <td style={S.td}>Repositório centralizado de features reutilizáveis. Garante consistência entre treino e inferência. Suporta point-in-time lookups.</td>
              </tr>
              <tr>
                <td style={S.td}><strong>AutoML</strong></td>
                <td style={S.td}>Treino automático de modelos baseline (classificação, regressão, forecasting). Gera notebooks editáveis com o melhor trial.</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Model Serving</strong></td>
                <td style={S.td}>Serving REST API serverless com auto-scaling. Suporta A/B testing, shadow mode e canary deployments. Latência p50 &lt; 10ms.</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Delta Live Tables (DLT)</strong></td>
                <td style={S.td}>Framework declarativa para pipelines ETL com qualidade de dados integrada, retry automático e lineage visual.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          <strong>Delta Live Tables</strong> permite definir pipelines como código Python ou SQL declarativo.
          O Databricks gere automaticamente a ordem de execução, dependências, recovery de falhas e optimização
          de recursos. As tabelas DLT têm expectativas de qualidade (expectations) que bloqueiam ou quarentenam
          registos inválidos.
        </p>
        <div style={S.code}>{`# Pipeline DLT declarativo
import dlt
from pyspark.sql.functions import col, to_timestamp

@dlt.table(comment="Raw events from S3")
def bronze_events():
    return spark.readStream.format("cloudFiles") \\
        .option("cloudFiles.format", "json") \\
        .load("s3://bucket/raw/events/")

@dlt.table(comment="Cleaned events — Silver layer")
@dlt.expect_or_drop("event_id válido", "event_id IS NOT NULL")
@dlt.expect_or_drop("timestamp válido", "event_ts > '2020-01-01'")
def silver_events():
    return dlt.read_stream("bronze_events") \\
        .withColumn("event_ts", to_timestamp(col("timestamp"))) \\
        .dropDuplicates(["event_id"])

@dlt.table(comment="Daily event counts — Gold layer")
def gold_event_counts():
    return dlt.read("silver_events") \\
        .groupBy("event_date", "event_type") \\
        .count()`}</div>
        <div style={S.note}>
          DLT suporta dois modos: <strong>Triggered</strong> (executa e termina, como um batch job) e{' '}
          <strong>Continuous</strong> (executa em streaming contínuo). A escolha depende do SLA de latência
          e do custo aceitável.
        </div>
        <div style={S.highlight}>
          <strong>Lakehouse Monitoring</strong> (disponível desde DBR 13+): monitorização automática de data drift,
          quality metrics e model performance directamente sobre Delta tables, sem código adicional.
          Integra com MLflow e gera alertas automáticos quando as métricas degradam.
        </div>
      </div>

      <hr style={S.divider} />

      {/* Summary */}
    </div>
  );
}
