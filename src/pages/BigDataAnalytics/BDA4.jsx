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

const DAGDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Pipeline ETL como DAG no Airflow</p>
    <svg viewBox="0 0 620 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-af" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
      </defs>
      {/* Tasks */}
      {[
        { x: 10,  y: 80,  w: 100, label: 'extract_postgres', sub: 'PythonOperator', c: '#f97316' },
        { x: 160, y: 30,  w: 110, label: 'validate_schema',  sub: 'PythonOperator', c: '#f97316' },
        { x: 160, y: 115, w: 110, label: 'extract_api',      sub: 'HttpOperator',   c: '#f97316' },
        { x: 330, y: 72,  w: 110, label: 'transform_spark',  sub: 'SparkSubmitOp.', c: '#f97316' },
        { x: 500, y: 50,  w: 110, label: 'load_delta_lake',  sub: 'PythonOperator', c: '#f97316' },
        { x: 500, y: 120, w: 110, label: 'update_catalog',   sub: 'PythonOperator', c: '#f97316' },
      ].map(({ x, y, w, label, sub, c }) => (
        <g key={label}>
          <rect x={x} y={y} width={w} height={46} rx={7} fill={`${c}15`} stroke={c} strokeWidth="1.5" />
          <text x={x + w / 2} y={y + 18} textAnchor="middle" fill={c} fontSize="9" fontWeight="700">{label}</text>
          <text x={x + w / 2} y={y + 33} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{sub}</text>
        </g>
      ))}
      {/* Edges */}
      {[
        [110,103, 160,53],
        [110,103, 160,138],
        [270,53,  330,95],
        [270,138, 330,95],
        [440,95,  500,73],
        [440,95,  500,143],
      ].map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-af)" opacity="0.8" />
      ))}
      <text x="310" y="190" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">
        Dependências explícitas — extract_postgres termina antes de validate_schema e extract_api começarem
      </text>
    </svg>
  </div>
);

const OperatorExplorer = () => {
  const [op, setOp] = useState(0);
  const operators = [
    {
      name: 'PythonOperator', color: '#f97316', category: 'Execução',
      desc: 'Executa qualquer função Python arbitrária como uma task. É o operador mais flexível e versátil — qualquer lógica que se possa escrever em Python pode tornar-se uma task Airflow. O contexto de execução (execution_date, dag_run_id, etc.) pode ser injectado via parâmetro context=True.',
      quando: 'Lógica de negócio customizada, transformações simples, chamadas a APIs, validação de dados, qualquer coisa que não tenha um operador dedicado.',
      params: 'python_callable (função a executar), op_args (argumentos posicionais), op_kwargs (argumentos nomeados), templates_dict (Jinja templates)',
      exemplo: 'Validar schema de um ficheiro CSV, chamar a API do Stripe para extrair transacções, enviar email de notificação com relatório.',
      cuidados: 'A função executa no worker do Airflow, não num cluster separado. Para operações pesadas de dados, usar SparkSubmitOperator ou KubernetesPodOperator.',
    },
    {
      name: 'SparkSubmitOperator', color: '#f97316', category: 'Spark',
      desc: 'Submete um job Spark a um cluster existente (YARN, Kubernetes, Spark Standalone, ou Databricks via DatabricksSubmitRunOperator). O Airflow aguarda a conclusão do job e captura o status de saída. Se o job Spark falhar, a task Airflow falha e o retry logic é activado.',
      quando: 'Processar grandes volumes de dados com Spark — transformações complexas, joins distribuídos, ML training. Qualquer operação que precise de um cluster Spark dedicado.',
      params: 'application (path do .py ou .jar), conf (configurações Spark como dicionário), executor_cores, executor_memory, num_executors, name (nome do job)',
      exemplo: 'Processar logs do dia anterior (500 GB) com Spark, agregar por utilizador, escrever resultado em Parquet particionado para S3.',
      cuidados: 'Requer SPARK_HOME configurado no worker Airflow ou uso de uma connection Airflow. Para Databricks, preferir DatabricksRunNowOperator.',
    },
    {
      name: 'BashOperator', color: '#f97316', category: 'Execução',
      desc: 'Executa um comando bash no worker do Airflow. Simples mas poderoso — permite integrar ferramentas de linha de comandos, scripts shell, dbt run, rsync, e qualquer utilitário do sistema operativo. O exit code determina sucesso (0) ou falha (não-0).',
      quando: 'Executar scripts shell existentes, comandos dbt (dbt run, dbt test), rsync de ficheiros, compressão/descompressão, executar migração de base de dados.',
      params: 'bash_command (string com o comando, suporta Jinja templates), env (variáveis de ambiente), cwd (directório de trabalho)',
      exemplo: 'dbt run --models staging.+, rsync de ficheiros de servidor SFTP para S3, executar script de cleanup de ficheiros temporários.',
      cuidados: 'Não usar para operações longas de dados — o processo corre no worker Airflow, consumindo recursos do scheduler. Para jobs longos, preferir operadores que delegam para sistemas externos.',
    },
    {
      name: 'SqlSensor / ExternalTaskSensor', color: '#f97316', category: 'Sensors',
      desc: 'Sensors são um tipo especial de operador que aguarda uma condição externa antes de prosseguir. SqlSensor aguarda que uma query SQL retorne True (ex: tabela tem dados para a data de hoje). ExternalTaskSensor aguarda que uma task de outro DAG complete com sucesso — permite coordenar DAGs independentes.',
      quando: 'Aguardar que dados cheguem antes de processar (feed de terceiros, upload manual), sincronizar DAGs que têm dependências entre si, aguardar que uma janela de ingestão feche.',
      params: 'poke_interval (frequência de verificação em segundos, default 60), timeout (tempo máximo de espera), mode (poke vs reschedule)',
      exemplo: 'SqlSensor verifica se a tabela de vendas tem dados de ontem (WHERE date = "{{ds}}"). ExternalTaskSensor aguarda que o DAG de ingestão complete antes de iniciar a transformação.',
      cuidados: 'mode="poke" mantém o worker ocupado durante a espera. mode="reschedule" liberta o worker e reagenda — usar reschedule para waits longos (horas).',
    },
    {
      name: 'KubernetesPodOperator', color: '#f97316', category: 'Cloud-native',
      desc: 'Lança um Pod Kubernetes para cada execução de task. A lógica da task é empacotada numa imagem Docker. O Pod corre, termina, e os logs são capturados. Totalmente isolado — cada task tem o seu próprio ambiente, dependências, e recursos. O padrão em arquitecturas cloud-native modernas.',
      quando: 'Tasks com dependências Python conflituosas entre DAGs, tasks que precisam de muitos recursos (GPU para ML), isolamento total, ambientes reproducíveis via Docker.',
      params: 'image (imagem Docker), cmds, arguments, env_vars, resources (cpu/memory limits), namespace, is_delete_operator_pod (limpar Pod após execução)',
      exemplo: 'Treinar modelo ML numa imagem PyTorch com GPU, executar teste de integração isolado, processar imagens com bibliotecas C++ complexas.',
      cuidados: 'Overhead de startup do Pod (10-30s). Requer cluster Kubernetes acessível do Airflow. Mais complexo de debugar que PythonOperator.',
    },
  ];
  const o = operators[op];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Operadores Airflow — Guia de Escolha</p>
      <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {operators.map((op2, i) => (
          <button key={i} onClick={() => setOp(i)} style={{
            padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem',
            background: op === i ? op2.color : 'var(--bg-primary)',
            color: op === i ? 'white' : 'var(--text-primary)',
            border: `1.5px solid ${op === i ? op2.color : 'var(--card-border)'}`,
            transition: 'all 0.2s',
          }}>{op2.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${o.color}40` }}>
        <span style={{ background: `${o.color}15`, border: `1px solid ${o.color}30`, color: o.color, fontSize: '0.72rem', fontWeight: 700, padding: '0.15rem 0.55rem', borderRadius: 12, marginBottom: '0.75rem', display: 'inline-block' }}>{o.category}</span>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', margin: '0.5rem 0 0.75rem' }}>{o.desc}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.6rem' }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quando usar</span>
            <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', margin: '0.2rem 0 0' }}>{o.quando}</p>
          </div>
          <div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Parâmetros principais</span>
            <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', margin: '0.2rem 0 0' }}>{o.params}</p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: o.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Exemplo prático</span>
            <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', margin: '0.2rem 0 0' }}>{o.exemplo}</p>
          </div>
          <div>
            <span style={{ fontSize: '0.72rem', color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Cuidados</span>
            <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', margin: '0.2rem 0 0' }}>{o.cuidados}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SchedulerExplorer = () => {
  const [tab, setTab] = useState(0);
  const tools = [
    {
      name: 'Apache Airflow', color: '#f97316',
      modelo: 'DAGs definidos em Python puro. O scheduler lê os ficheiros de DAG periodicamente, determina quais tasks devem correr com base nas dependências e no schedule, e coloca-as na fila. Os workers executam as tasks via Celery, Kubernetes, ou LocalExecutor.',
      pontos_fortes: ['Ecossistema maduro com 800+ providers (AWS, GCP, Databricks, dbt, Slack...)', 'Backfill nativo — re-executar o pipeline para datas passadas trivialmente', 'UI detalhado com Gantt chart, logs por task, e history', 'Airflow 2.x com TaskFlow API — decoradores Python em vez de boilerplate', 'Padrão de facto em Data Engineering desde 2015'],
      limitacoes: ['Overhead operacional: scheduler, webserver, metadata DB, workers', 'Dynamic DAGs (gerados em runtime) são complexos', 'Latência de scheduling de ~segundos — não é real-time', 'Debugging de dependências entre muitos DAGs pode ser difícil'],
      quando: 'Pipelines batch complexos com muitas dependências. Equipas grandes com muitos DAGs. Quando backfill e histórico são importantes.',
    },
    {
      name: 'Prefect', color: '#f97316',
      modelo: 'Flows e Tasks definidos com decoradores Python (@flow, @task). O servidor Prefect rastreia execuções mas o código corre onde tu quiseres (localmente, Kubernetes, cloud). Versão 2.x (Orion) adoptou um modelo serverless onde não é necessário um scheduler dedicado.',
      pontos_fortes: ['Setup muito mais simples que Airflow — menos infraestrutura', 'Native async e paralelismo', 'Dynamic mapping — criar tasks dinamicamente em runtime', 'Prefect Cloud como hosted solution (free tier generoso)', 'UI moderno e intuitivo'],
      limitacoes: ['Ecossistema de providers mais pequeno que Airflow', 'Prefect Cloud é necessário para funcionalidades avançadas', 'Menos adoptado em produção que Airflow — menos Stack Overflow/community'],
      quando: 'Equipas pequenas que querem produtividade rápida. Pipelines com paralelismo dinâmico. Quando se quer evitar a complexidade operacional do Airflow.',
    },
    {
      name: 'Dagster', color: '#f97316',
      modelo: 'Centrado em Assets de dados em vez de tasks. Define o que os dados são (um Asset = tabela, ficheiro, modelo ML) e como produzi-los (op). O scheduler determina automaticamente a ordem de execução baseado nas dependências entre Assets. Paradigma declarativo vs. imperativo do Airflow.',
      pontos_fortes: ['Asset-centric: observabilidade nativa dos dados produzidos', 'Type system para inputs/outputs de cada op', 'Dagster Cloud com lineage visual dos Assets', 'Testing nativo — cada op é testável unitariamente', 'Software-defined assets resolvem o problema de observabilidade de dados'],
      limitacoes: ['Curva de aprendizagem diferente — pensar em Assets, não em tasks', 'Ecossistema mais pequeno', 'Migrar pipelines Airflow existentes requer reescrita'],
      quando: 'Quando observabilidade de dados é prioridade. Equipas que querem testar pipelines facilmente. Novos projectos sem dívida técnica de Airflow.',
    },
    {
      name: 'dbt (data build tool)', color: '#f97316',
      modelo: 'Ferramenta de transformação SQL com versionamento Git. Não é um orquestrador completo — foca exclusivamente em transformações SQL dentro de um warehouse/lakehouse. Define modelos SQL, testa qualidade, e gera documentação automática. Frequentemente orquestrado pelo Airflow/Prefect.',
      pontos_fortes: ['SQL como linguagem de transformação — sem PySpark necessário para analistas', 'Tests nativos: not_null, unique, accepted_values, relationships', 'Documentação automática com lineage visual', 'Incremental models — processar apenas dados novos eficientemente', 'Ecossistema enorme: 100+ packages no dbt Hub'],
      limitacoes: ['Apenas transformações SQL — não pode fazer ingestão ou ML training', 'Requer SQL warehouse (Databricks SQL, Snowflake, BigQuery, Redshift)', 'Não substitui Airflow — precisa de ser orquestrado'],
      quando: 'Transformações SQL no Data Warehouse/Lakehouse. Quando a equipa de Analytics é forte em SQL. Como camada de transformação no stack Airflow + dbt + Spark.',
    },
  ];
  const t = tools[tab];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Ferramentas de Orquestração — Comparação</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {tools.map((tool, i) => (
          <button key={i} onClick={() => setTab(i)} style={{
            padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem',
            background: tab === i ? tool.color : 'var(--bg-primary)',
            color: tab === i ? 'white' : 'var(--text-primary)',
            border: `1.5px solid ${tab === i ? tool.color : 'var(--card-border)'}`,
            transition: 'all 0.2s',
          }}>{tool.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${t.color}40` }}>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{t.modelo}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.6rem' }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pontos fortes</span>
            {t.pontos_fortes.map(p => <div key={p} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>✓ {p}</div>)}
          </div>
          <div>
            <span style={{ fontSize: '0.72rem', color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Limitações</span>
            {t.limitacoes.map(l => <div key={l} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>✗ {l}</div>)}
          </div>
        </div>
        <div style={{ fontSize: '0.83rem', color: t.color, fontWeight: 600, borderTop: `1px solid ${t.color}20`, paddingTop: '0.5rem', marginTop: '0.25rem' }}>
          Usar quando: {t.quando}
        </div>
      </div>
    </div>
  );
};

export default function BDA4() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/bigdata-analytics" style={S.back}><ArrowLeft size={16} /> Voltar a Big Data Analytics</Link>
        <div style={S.tag}>MÓDULO 04</div>
        <h1 style={S.h1}>Orquestração de Pipelines com Airflow</h1>
        <p style={S.lead}>Em produção, nenhum pipeline corre manualmente. Apache Airflow, Prefect e Dagster automatizam a execução, tratam falhas com retries, e garantem que os dados chegam ao destino certo na hora certa. Este módulo cobre os conceitos fundamentais de orquestração e como construir pipelines robustos e observáveis.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. O Problema da Orquestração</h2>
          <p style={S.p}>Imagina um pipeline de Data Engineering típico: extrair dados de uma base de dados PostgreSQL, validar o schema, chamar uma API externa, juntar os dados, processar com Spark, escrever em Delta Lake, e actualizar o catálogo de metadados. Se qualquer passo falhar — rede instável, API em baixo, cluster Spark a ser provisionado — o que acontece? Sem orquestração, a resposta é: não sabes.</p>
          <p style={S.p}>Orquestração resolve três problemas fundamentais em Data Engineering: (1) <strong>Dependências</strong> — garantir que a etapa B só começa quando A termina com sucesso, (2) <strong>Resiliência</strong> — retries automáticos com backoff exponencial quando uma task falha, (3) <strong>Observabilidade</strong> — saber exactamente o que correu, quando, quanto tempo demorou, e o que falhou, com logs centralizados e alertas.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { n: 'Sem Orquestração', c: '#f97316', items: ['Cron jobs isolados sem dependências', 'Falhas silenciosas sem alertas', 'Sem histórico de execuções', 'Debugging manual via SSH', 'Impossível fazer backfill', 'Scripts duplicados por falta de reutilização'] },
              { n: 'Com Orquestração', c: '#f97316', items: ['Dependências explícitas entre tasks', 'Retries automáticos com alertas email/Slack', 'Histórico completo de todas as execuções', 'Logs centralizados acessíveis via UI', 'Backfill com um clique para datas passadas', 'Operators reutilizáveis entre pipelines'] },
              { n: 'Maturidade em produção', c: '#f97316', items: ['SLAs configuráveis por pipeline', 'Branching condicional por resultado de task', 'Pools para limitar concorrência em recursos', 'XCom para passar dados entre tasks', 'Variáveis e Connections centralizadas', 'RBAC para controlo de acessos por equipa'] },
            ].map(({ n, c, items }) => (
              <div key={n} style={{ background: `${c}08`, border: `1px solid ${c}25`, borderRadius: 8, padding: '0.9rem' }}>
                <div style={{ fontWeight: 700, color: c, marginBottom: '0.5rem', fontSize: '0.88rem' }}>{n}</div>
                {items.map(item => <div key={item} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.15rem' }}>{n === 'Sem Orquestração' ? '✗' : '✓'} {item}</div>)}
              </div>
            ))}
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Apache Airflow — Conceitos Fundamentais</h2>
          <p style={S.p}>Apache Airflow, criado pelo Airbnb em 2014 e open-sourced em 2015, tornou-se o standard de facto para orquestração de pipelines de dados. A abstração central é o DAG — Directed Acyclic Graph: um grafo de tasks onde as arestas representam dependências e a ausência de ciclos garante que o pipeline sempre termina.</p>

          <DAGDiagram />

          <h3 style={S.h3}>Os 5 Componentes do Airflow</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Componente</th>
                  <th style={S.th}>Responsabilidade</th>
                  <th style={S.th}>Detalhe interno</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Scheduler', 'Lê ficheiros de DAG, determina que tasks devem ser executadas, coloca-as na queue', 'Corre em loop contínuo. Compara execution_date + schedule_interval com o estado actual na metadata DB. Alta disponibilidade possível com múltiplas instâncias (Airflow 2.x)'],
                  ['Webserver', 'Interface gráfica para monitorização, debugging, e gestão manual de runs', 'Flask application com acesso à metadata DB. Mostra Gantt charts, logs por task, graph view do DAG, e permite trigger manual, pause, e backfill'],
                  ['Metadata DB', 'Persiste estado de todos os DAG Runs, Task Instances, Variables, Connections', 'PostgreSQL (produção) ou SQLite (dev only). Contém o histórico completo de execuções. É o coração do Airflow — sem ele, nada funciona'],
                  ['Executor', 'Determina onde e como as tasks são executadas fisicamente', 'LocalExecutor (dev, tasks em paralelo no mesmo servidor), CeleryExecutor (cluster de workers via Redis/RabbitMQ), KubernetesExecutor (Pod por task — cloud-native)'],
                  ['Worker', 'Processo que executa efectivamente o código de uma task', 'Recebe tasks da queue, executa o operador, reporta resultado (success/failed) à metadata DB, e envia logs para o log store configurado (S3, GCS, etc.)'],
                ].map(([c, r, d]) => (
                  <tr key={c}>
                    <td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{c}</td>
                    <td style={S.td}>{r}</td>
                    <td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>DAGs, Tasks e Dependências</h3>
          <p style={S.p}>Um DAG é definido em Python como um ficheiro na pasta dags/ do Airflow. O scheduler lê esta pasta periodicamente (por defeito a cada 30 segundos) e actualiza os metadados. Cada ficheiro de DAG pode definir um ou mais DAGs, e cada DAG contém tasks conectadas por dependências.</p>
          <p style={S.p}>As dependências são definidas com o operador bitshift (task_a &gt;&gt; task_b significa "task_b depende de task_a") ou com os métodos set_upstream/set_downstream. Dependências em diamante (A precisa de B e C; D precisa de A) são completamente suportadas — o scheduler aguarda que todas as dependências upstream estejam no estado success antes de enfileirar a task downstream.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.5rem' }}>Estados de uma Task Instance</div>
              {[
                { s: 'none', c: '#94a3b8', d: 'Task criada mas ainda não qualificada para execução' },
                { s: 'scheduled', c: '#f97316', d: 'Dependências cumpridas, aguarda worker disponível' },
                { s: 'queued', c: '#f97316', d: 'No executor, aguarda worker livre' },
                { s: 'running', c: '#f97316', d: 'A ser executada num worker' },
                { s: 'success', c: '#f97316', d: 'Terminou com exit code 0' },
                { s: 'failed', c: '#f97316', d: 'Terminou com erro — trigger retries se configurados' },
                { s: 'up_for_retry', c: '#f97316', d: 'Aguarda o próximo retry (com backoff)' },
                { s: 'skipped', c: '#94a3b8', d: 'Ignorada via BranchOperator ou condicional' },
              ].map(({ s, c, d }) => (
                <div key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.3rem' }}>
                  <span style={{ background: c, color: 'white', fontSize: '0.68rem', fontWeight: 700, padding: '0.1rem 0.4rem', borderRadius: 8, width: 108, flexShrink: 0, textAlign: 'center', marginTop: 2, display: 'inline-block' }}>{s}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{d}</span>
                </div>
              ))}
            </div>
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.5rem' }}>Parâmetros Essenciais de um DAG</div>
              {[
                ['schedule_interval', '"@daily", "@hourly", "0 6 * * *" (cron), ou timedelta(hours=4)'],
                ['start_date', 'Data de início do pipeline. Airflow faz catchup de runs passadas automaticamente se catchup=True'],
                ['catchup', 'True: cria runs para todos os intervalos desde start_date. False: apenas o próximo intervalo futuro'],
                ['max_active_runs', 'Quantos DAG Runs podem estar activos simultaneamente (evita sobrecarregar recursos)'],
                ['default_args', 'Defaults para todas as tasks: owner, retries, retry_delay, email_on_failure, execution_timeout'],
                ['tags', 'Labels para filtrar DAGs na UI — essencial com dezenas de DAGs'],
              ].map(([p, d]) => (
                <div key={p} style={{ marginBottom: '0.4rem' }}>
                  <div style={{ fontSize: '0.78rem', color: '#f97316', fontWeight: 700 }}>{p}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Operadores — Os Blocos de Construção</h2>
          <p style={S.p}>Um operador define o que uma task faz. Airflow tem mais de 800 operadores via providers oficiais — AWS, GCP, Azure, Databricks, dbt, Slack, HTTP, SQL, Email, e muitos mais. Escolher o operador certo é mais importante do que escrever código custom.</p>

          <OperatorExplorer />

          <h3 style={S.h3}>TaskFlow API — Airflow 2.x</h3>
          <p style={S.p}>O Airflow 2.0 introduziu a TaskFlow API que elimina grande parte do boilerplate. Com o decorador @task, qualquer função Python torna-se uma task automaticamente, e os valores de retorno são automaticamente passados como inputs de tasks downstream via XCom — sem configuração explícita. O @dag decorator transforma uma função num DAG. O resultado é código muito mais limpo e Pythónico.</p>
          <p style={S.p}>XCom (Cross-Communication) é o mecanismo do Airflow para passar dados pequenos entre tasks. Uma task pode fazer xcom_push de um valor (string, dict, número) e outra task pode fazer xcom_pull para ler esse valor. Importante: XComs são armazenados na metadata DB — usar apenas para metadados pequenos (IDs, contagens, paths de ficheiros), nunca para DataFrames ou dados grandes.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Padrões Avançados de DAG Design</h2>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Padrão</th>
                  <th style={S.th}>Descrição</th>
                  <th style={S.th}>Implementação no Airflow</th>
                  <th style={S.th}>Caso de uso</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Fan-out / Fan-in', 'Uma task upstream gera múltiplas tasks paralelas que depois convergem numa task final', 'Uma task >> [task_a, task_b, task_c] >> task_final. Airflow aguarda todas as branches.', 'Processar múltiplas regiões geográficas em paralelo, depois agregar resultados'],
                  ['Branching', 'Escolher dinamicamente qual caminho de execução seguir baseado em condições em runtime', 'BranchPythonOperator devolve o task_id da branch a seguir. Branches não seleccionadas ficam "skipped".', 'Processar dados diferentemente conforme o dia da semana ou se é um reprocessamento'],
                  ['Dynamic Task Mapping', 'Criar N tasks em runtime baseado no tamanho de uma lista (Airflow 2.3+)', 'task.expand(input=[1, 2, 3, ...]) cria uma task por elemento. Número de tasks determinado em runtime.', 'Processar uma lista de ficheiros S3 onde o número varia diariamente'],
                  ['DAG Dependencies', 'Um DAG só começa quando outro DAG completa com sucesso', 'ExternalTaskSensor ou TriggerDagRunOperator para orquestrar inter-DAG dependencies', 'DAG de transformação só começa quando DAG de ingestão completa'],
                  ['SLA Misses', 'Alertar quando um DAG não completa dentro do tempo esperado', 'sla parâmetro no DAG ou na task — email/callback quando SLA é violado', 'Alertar equipa se o relatório de fim de dia não estiver pronto antes das 8h'],
                  ['Pools', 'Limitar o número de tasks a correr em paralelo para um recurso partilhado', 'Pool criado na UI ou CLI com N slots. Tasks atribuídas a pool aguardam slot disponível.', 'Limitar a 3 jobs Spark simultâneos para não sobrecarregar o cluster'],
                ].map(([p, d, impl, uc]) => (
                  <tr key={p}>
                    <td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{p}</td>
                    <td style={S.td}>{d}</td>
                    <td style={{ ...S.td, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{impl}</td>
                    <td style={{ ...S.td, fontSize: '0.82rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>{uc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Backfill — O Super-poder do Airflow</h3>
          <p style={S.p}>Uma das funcionalidades mais valiosas do Airflow é o backfill: re-executar um pipeline para datas passadas. Se o pipeline de transformação de vendas estava com um bug nas últimas 2 semanas, e depois de corrigir o código precisas de reprocessar os últimos 14 dias, o Airflow faz isso com um único comando: airflow dags backfill --start-date 2024-01-01 --end-date 2024-01-14 meu_dag.</p>
          <p style={S.p}>O backfill cria um DAG Run para cada intervalo do schedule entre as datas especificadas, respeita todas as dependências, e usa o mesmo código que corre em produção. O parâmetro execution_date disponível em cada task representa a data lógica do run — o código pode usar esse valor para saber qual partição de dados processar, tornando o pipeline idempotente (correr múltiplas vezes para a mesma data produz o mesmo resultado).</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Ferramentas de Orquestração — Landscape</h2>

          <SchedulerExplorer />

          <h3 style={S.h3}>O Stack Moderno em Produção</h3>
          <p style={S.p}>Em 2025, o stack mais comum em empresas de média e grande dimensão combina múltiplas ferramentas: Airflow orquestra o pipeline completo de ponta a ponta, dbt transforma dados SQL dentro do warehouse, Spark processa dados em larga escala, e MLflow governa modelos. A separação de responsabilidades é clara: cada ferramenta faz o que faz melhor.</p>

          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', fontSize: '0.87rem', lineHeight: 2.1, marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Stack típico de uma empresa de dados em 2025:</div>
            <div>1. <span style={{ color: '#f97316', fontWeight: 600 }}>Airbyte / Fivetran</span> — ingestão de fontes externas (SaaS APIs, bases de dados) para o Data Lake (S3/GCS)</div>
            <div>2. <span style={{ color: '#f97316', fontWeight: 600 }}>Apache Kafka</span> — streaming de eventos em tempo real (clickstream, transacções)</div>
            <div>3. <span style={{ color: '#f97316', fontWeight: 600 }}>Apache Spark (via Databricks/EMR)</span> — transformações complexas, ML, processamento em larga escala</div>
            <div>4. <span style={{ color: '#f97316', fontWeight: 600 }}>dbt</span> — transformações SQL modeladas, testadas e documentadas sobre o warehouse</div>
            <div>5. <span style={{ color: '#f97316', fontWeight: 600 }}>Delta Lake / Iceberg</span> — camada de storage com ACID, time travel, e schema evolution</div>
            <div>6. <span style={{ color: '#f97316', fontWeight: 600 }}>Apache Airflow</span> — orquestra todos os passos anteriores, garante dependências e retries</div>
            <div>7. <span style={{ color: '#f97316', fontWeight: 600 }}>Great Expectations / dbt tests</span> — validação da qualidade dos dados em cada etapa</div>
            <div>8. <span style={{ color: '#f97316', fontWeight: 600 }}>MLflow</span> — rastreabilidade de modelos ML dentro do pipeline</div>
          </div>

          <h3 style={S.h3}>Best Practices de Airflow em Produção</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr><th style={S.th}>Prática</th><th style={S.th}>Porquê</th></tr>
              </thead>
              <tbody>
                {[
                  ['Pipelines idempotentes', 'Correr a mesma task múltiplas vezes para a mesma execution_date deve produzir o mesmo resultado. Usar INSERT OVERWRITE ou MERGE em vez de INSERT.'],
                  ['Não passar DataFrames via XCom', 'XCom usa a metadata DB (PostgreSQL). Passar dados grandes causa OOM no scheduler. Usar S3/GCS paths como strings para comunicar localização de dados.'],
                  ['execution_date em vez de datetime.now()', 'datetime.now() é o tempo actual do worker — diferente em backfills. execution_date é a data lógica do run — consistente e correcta para processar a partição certa.'],
                  ['Configurar retries e timeouts', 'retries=3, retry_delay=timedelta(minutes=5), execution_timeout=timedelta(hours=2) em default_args. Sem timeout, tasks stuck podem bloquear o cluster indefinidamente.'],
                  ['DAGs pequenos e focados', 'Um DAG por pipeline de negócio. Não criar um DAG com 50 tasks — difícil de debugar, observar e gerir. Preferir múltiplos DAGs orquestrados com ExternalTaskSensor.'],
                  ['Usar Connections e Variables', 'Nunca hardcodar credenciais ou endpoints no código do DAG. Usar Airflow Connections (cifradas) para conexões de BD, e Variables para configurações. Permite alterar sem código.'],
                  ['Testar DAGs localmente', 'airflow tasks test dag_id task_id execution_date permite testar uma task individualmente sem submeter ao scheduler. Essencial antes de deploy em produção.'],
                ].map(([p, r]) => (
                  <tr key={p}>
                    <td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{p}</td>
                    <td style={S.td}>{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
              <li>DAG (Directed Acyclic Graph) = grafo de tasks com dependências explícitas e sem ciclos — garante ordem de execução e que o pipeline sempre termina</li>
              <li>Scheduler, Webserver, Metadata DB, Executor e Workers são os 5 componentes — a Metadata DB é o coração do sistema</li>
              <li>Operadores certos poupam código: SparkSubmitOperator para Spark, BashOperator para scripts, Sensors para aguardar condições, KubernetesPodOperator para isolamento total</li>
              <li>Backfill é o super-poder do Airflow — re-executar pipelines para datas passadas com um comando, usando o mesmo código de produção</li>
              <li>Pipelines idempotentes + execution_date em vez de datetime.now() = correctos em backfills e reruns</li>
              <li>Stack moderno: Airflow orquestra tudo; dbt transforma SQL; Spark processa em escala; Kafka faz streaming; Delta Lake armazena com ACID</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
