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

const DeltaArchDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Delta Lake — Camadas de Arquitectura</p>
    <svg viewBox="0 0 580 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-dl" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
        </marker>
      </defs>
      {/* Object Storage */}
      <rect x="10" y="130" width="560" height="55" rx="8" fill="rgba(74,158,237,0.06)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="290" y="152" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">Object Storage (S3 / GCS / ADLS)</text>
      <text x="290" y="168" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Ficheiros Parquet imutáveis + _delta_log/ (transaction log JSON)</text>

      {/* Delta Lake Layer */}
      <rect x="10" y="65" width="560" height="55" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="290" y="87" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">Delta Lake — Transaction Log</text>
      <text x="290" y="103" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">ACID commits | Schema enforcement | Time travel | MERGE/UPDATE/DELETE | Z-ordering</text>

      {/* Engines */}
      {[
        { x: 10,  label: 'Apache Spark', c: '#4a9eed' },
        { x: 150, label: 'Databricks SQL', c: '#4a9eed' },
        { x: 290, label: 'Presto / Trino', c: '#4a9eed' },
        { x: 430, label: 'Apache Flink', c: '#4a9eed' },
      ].map(({ x, label, c }) => (
        <g key={label}>
          <rect x={x} y="10" width="130" height="40" rx="7" fill={`${c}12`} stroke={c} strokeWidth="1.5" />
          <text x={x + 65} y="35" textAnchor="middle" fill={c} fontSize="10" fontWeight="700">{label}</text>
          <line x1={x + 65} y1="50" x2={x + 65} y2="65" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr-dl)" />
        </g>
      ))}
      <line x1="290" y1="120" x2="290" y2="130" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr-dl)" />
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Delta Lake é uma camada entre os motores de query e o object storage — adiciona transacções e gestão sem mover os dados.</p>
  </div>
);

const FeatureExplorer = () => {
  const [feat, setFeat] = useState(0);
  const features = [
    {
      name: 'ACID Transactions', color: '#4a9eed',
      problema: 'Object storage (S3, GCS) é eventually consistent e não tem transacções. Se um job Spark escreve 1.000 ficheiros Parquet e falha a meio, ficam 500 ficheiros inconsistentes no storage — metade da tabela está corrompida e outras queries podem ler dados inválidos.',
      solucao: 'Delta Lake mantém um Transaction Log (_delta_log/) — uma sequência de ficheiros JSON que registam cada operação como um commit atómico. Uma escrita ou completa (todos os ficheiros registados) ou não existe. O leitor vê sempre um estado consistente. Dois jobs a escrever simultaneamente não interferem — o segundo detecta o conflito e retenta.',
      exemplo: 'Um job de ETL diário escreve 500 GB de dados novos e falha a 80%. Sem Delta: tabela corrompida, leitura de dados inconsistentes. Com Delta: o commit nunca é registado no log — a tabela permanece no estado anterior, intacta.',
      beneficio: 'Eliminação de corrupção de dados, pipelines que podem ser interrompidos e retomados, operações concorrentes seguras.',
    },
    {
      name: 'Time Travel', color: '#4a9eed',
      problema: 'Datasets históricos em Parquet são imutáveis mas não versionados. Se um bug no pipeline sobrescreve dados incorrectamente ou se precisas de comparar o estado da tabela ontem vs. hoje, não há forma nativa de o fazer — os dados anteriores estão perdidos.',
      solucao: 'O Transaction Log regista cada versão da tabela com um número de versão e timestamp. Qualquer leitura pode especificar VERSION AS OF N ou TIMESTAMP AS OF "2024-01-15" para ler exactamente aquela versão. Os ficheiros Parquet das versões anteriores são mantidos até ao VACUUM (cleanup configurable).',
      exemplo: 'Pipeline de ML treina um modelo com dados de ontem. Hoje os dados foram actualizados. Para reproduzir o treino, fazemos leitura com TIMESTAMP AS OF "2024-01-14T00:00:00" e obtemos exactamente os dados que existiam nessa altura.',
      beneficio: 'Reprodutibilidade de experimentos ML, auditoria de dados, rollback fácil de erros de pipeline, comparação temporal.',
    },
    {
      name: 'Schema Evolution', color: '#4a9eed',
      problema: 'Em Parquet puro, se o schema muda entre escritas (nova coluna adicionada, tipo alterado), as leituras falham com erros de schema mismatch. Cada schema change requer migração manual de todos os ficheiros históricos ou criação de nova tabela.',
      solucao: 'Delta Lake suporta schema evolution: novas colunas podem ser adicionadas automaticamente (mergeSchema=True) ou explicitamente com ALTER TABLE ADD COLUMN. O Transaction Log regista cada evolução de schema com a versão do commit. Leituras de dados antigos retornam null nas novas colunas — backward compatible.',
      exemplo: 'A tabela de eventos começa com 5 colunas. Seis meses depois, o produto adiciona o campo "device_type". Com Delta e mergeSchema=True, a escrita adiciona a coluna automaticamente e dados históricos mostram null em device_type — sem migrações manuais.',
      beneficio: 'Evolução do schema sem downtime ou migrations, compatibilidade backward/forward, dados históricos preservados.',
    },
    {
      name: 'MERGE (Upsert)', color: '#4a9eed',
      problema: 'Parquet é append-only — não suporta UPDATE ou DELETE nativos. Para actualizar um registo, é necessário reescrever toda a partição, o que é lento e caro. Change Data Capture (CDC) de bases de dados relacionais envia inserts, updates, e deletes — impossíveis de aplicar eficientemente em Parquet.',
      solucao: 'Delta Lake implementa MERGE INTO com semântica SQL completa: quando um registo existe, actualiza (WHEN MATCHED); quando não existe, insere (WHEN NOT MATCHED). Internamente, Delta reescreve apenas os ficheiros Parquet afectados pelo merge, não a tabela toda. Ideal para aplicar CDC de bases de dados OLTP.',
      exemplo: 'Stream Kafka com eventos de change data capture (INSERT/UPDATE/DELETE) de PostgreSQL. MERGE INTO delta_table USING kafka_batch ON id WHEN MATCHED AND op="D" THEN DELETE WHEN MATCHED THEN UPDATE WHEN NOT MATCHED THEN INSERT aplica todas as mudanças eficientemente.',
      beneficio: 'CDC nativo, upserts eficientes, sincronização com bases de dados OLTP, SCD (Slowly Changing Dimensions) sem reescrita total.',
    },
    {
      name: 'Z-Ordering', color: '#4a9eed',
      problema: 'Numa tabela particionada por data com dados de muitos países, uma query que filtra por country="Portugal" ainda precisa de ler todos os ficheiros Parquet dentro de cada partição de data — mesmo que só 1% dos dados seja Portugal. Sem co-localização de dados relacionados, o file pruning é limitado.',
      solucao: 'OPTIMIZE table ZORDER BY (country) reorganiza os dados dentro de cada partição para co-localizar valores do mesmo country no mesmo conjunto de ficheiros Parquet. Delta Lake mantém estatísticas de min/max por ficheiro — uma query com WHERE country="Portugal" pode saltar 99% dos ficheiros que não contêm Portugal.',
      exemplo: 'Tabela de logs particionada por dia com 10.000 ficheiros por partição. Query filtra WHERE country="PT" AND user_id=12345. Sem Z-order: lê 10.000 ficheiros. Com ZORDER BY (country, user_id): lê ~50 ficheiros com os dados co-localizados.',
      beneficio: 'Queries de filtro 10-100× mais rápidas, redução dramática de dados lidos, complementa partition pruning para alta cardinalidade.',
    },
  ];
  const f = features[feat];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Funcionalidades Delta Lake — Problema, Solução e Exemplo</p>
      <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {features.map((f2, i) => (
          <button key={i} onClick={() => setFeat(i)} style={{
            padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem',
            background: feat === i ? f2.color : 'var(--bg-primary)',
            color: feat === i ? 'white' : 'var(--text-primary)',
            border: `1.5px solid ${feat === i ? f2.color : 'var(--card-border)'}`,
            transition: 'all 0.2s',
          }}>{f2.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${f.color}40` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.6rem' }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: '#4a9eed', textTransform: 'uppercase', letterSpacing: '0.05em' }}>O problema sem Delta Lake</span>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', margin: '0.2rem 0 0' }}>{f.problema}</p>
          </div>
          <div>
            <span style={{ fontSize: '0.72rem', color: f.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Como Delta Lake resolve</span>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', margin: '0.2rem 0 0' }}>{f.solucao}</p>
          </div>
        </div>
        <div style={{ background: `${f.color}08`, border: `1px solid ${f.color}20`, borderRadius: 6, padding: '0.6rem 0.75rem', marginBottom: '0.5rem', fontSize: '0.83rem', color: 'var(--text-secondary)' }}>
          <strong style={{ color: f.color }}>Exemplo concreto:</strong> {f.exemplo}
        </div>
        <div style={{ fontSize: '0.82rem', color: f.color, fontWeight: 600 }}>Benefício: {f.beneficio}</div>
      </div>
    </div>
  );
};

const DQExplorer = () => {
  const [tool, setTool] = useState(0);
  const tools = [
    {
      name: 'Great Expectations', color: '#4a9eed',
      desc: 'Framework Python open-source para validação de dados. Define "Expectations" — asserções sobre os dados (ex: "a coluna age nunca tem valores negativos", "email é sempre único"). Corre estas validações e produz um Data Docs report HTML com o resultado de cada Expectation.',
      quando: 'Validar dados na entrada de um pipeline (raw data do S3), validar dados após transformação antes de escrever, testes de regressão para detectar quando dados mudam de distribuição.',
      conceitos: ['Expectation Suite — conjunto nomeado de validações para uma tabela/dataset', 'Checkpoint — une um dataset a uma Suite e define onde reportar resultados', 'Data Docs — documentação automática gerada com resultados de cada validação', 'Profiler automático — analisa dados e sugere Expectations baseado no histórico'],
      exemplo: 'Após ingestão de dados de vendas do dia: expect_column_values_to_not_be_null("order_id"), expect_column_values_to_be_between("amount", 0, 100000), expect_column_pair_values_A_to_be_greater_than_B("created_at", "updated_at").',
    },
    {
      name: 'dbt Tests', color: '#4a9eed',
      desc: 'dbt tem um sistema de testes built-in para modelos SQL. Dois tipos: testes genéricos (not_null, unique, accepted_values, relationships — configurados em YAML) e testes singulares (queries SQL custom que retornam linhas quando falham). Correm com dbt test após dbt run.',
      quando: 'Validar modelos SQL dbt dentro do Data Warehouse. Garantir integridade referencial entre tabelas. Testar invariantes de negócio (ex: receita nunca é negativa). Integrar em CI/CD para bloquear deploys com dados inválidos.',
      conceitos: ['not_null — coluna não tem NULLs', 'unique — coluna tem valores únicos', 'accepted_values — coluna só tem valores de uma lista definida', 'relationships — chave estrangeira existe na tabela referenciada', 'custom SQL tests — qualquer query que retorna linhas = falha'],
      exemplo: 'Em schema.yml: tests: [not_null] em order_id, [unique] em order_id, [accepted_values: [pending, confirmed, shipped, cancelled]] em status, [relationships: to: ref("customers"), field: id] em customer_id.',
    },
    {
      name: 'Soda Core', color: '#4a9eed',
      desc: 'Framework de data quality com configuração YAML declarativa. Define checks em YAML human-readable sem escrever Python ou SQL. Suporta múltiplos data sources (Spark, BigQuery, Snowflake, Redshift, Postgres). Soda Cloud é a versão gerida com alertas, histórico de checks, e dashboards de qualidade.',
      quando: 'Equipas que preferem configuração YAML a código Python (Great Expectations). Monitorização contínua de qualidade de dados em produção. Alertas automáticos quando métricas de qualidade degradam.',
      conceitos: ['Check — asserção sobre uma coluna ou tabela ("row_count > 0")', 'Scan — execução de um conjunto de checks sobre uma tabela', 'Metric — valor calculado (row_count, missing_count, min, max, avg, percentile)', 'Freshness check — verificar que dados são recentes (última actualização < 2 horas)'],
      exemplo: 'check for orders: row_count > 0, missing_count(order_id) = 0, duplicate_count(order_id) = 0, min(amount) >= 0, freshness(created_at) < 2h.',
    },
    {
      name: 'Spark Built-in', color: '#4a9eed',
      desc: 'Spark tem capacidades nativas de validação sem bibliotecas externas: schema enforcement no Delta Lake rejeita dados com schema errado, constraints em tabelas Delta (ALTER TABLE ADD CONSTRAINT) definem regras a nível de storage, e DataFrame assertions com quando(condição).otherwise(). Para validações simples, não é necessário uma ferramenta separada.',
      quando: 'Validações simples que não justificam uma ferramenta completa. Schema enforcement na escrita. Constraints de negócio directamente na tabela Delta. Equipas que querem menos dependências externas.',
      conceitos: ['Delta constraints — NOT NULL, CHECK constraints a nível de tabela', 'Schema enforcement — Delta rejeita escritas com schema diferente do definido', 'DataFrame .filter().count() — contar violações de uma regra', 'Column statistics via describe() — min, max, mean, stddev, count para deteção de anomalias'],
      exemplo: 'ALTER TABLE orders ADD CONSTRAINT valid_amount CHECK (amount > 0). ALTER TABLE orders ADD CONSTRAINT valid_status CHECK (status IN ("pending","confirmed","shipped","cancelled")). Escrita com valor inválido lança DeltaInvariantViolationException.',
    },
  ];
  const t = tools[tool];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Ferramentas de Data Quality</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {tools.map((tl, i) => (
          <button key={i} onClick={() => setTool(i)} style={{
            padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem',
            background: tool === i ? tl.color : 'var(--bg-primary)',
            color: tool === i ? (tl.color === '#4a9eed' ? '#000' : 'white') : 'var(--text-primary)',
            border: `1.5px solid ${tool === i ? tl.color : 'var(--card-border)'}`,
            transition: 'all 0.2s',
          }}>{tl.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${t.color}40` }}>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.6rem' }}>{t.desc}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.6rem' }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quando usar</span>
            <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', margin: '0.2rem 0 0' }}>{t.quando}</p>
          </div>
          <div>
            <span style={{ fontSize: '0.72rem', color: t.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Conceitos chave</span>
            {t.conceitos.map(c => <div key={c} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>• {c}</div>)}
          </div>
        </div>
        <div style={{ background: `${t.color}08`, border: `1px solid ${t.color}20`, borderRadius: 6, padding: '0.6rem 0.75rem', fontSize: '0.83rem', color: 'var(--text-secondary)' }}>
          <strong style={{ color: t.color }}>Exemplo:</strong> {t.exemplo}
        </div>
      </div>
    </div>
  );
};

export default function BDM7() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/bigdata-mgmt" style={S.back}><ArrowLeft size={16} /> Voltar a Big Data Mgmt</Link>
        <div style={S.tag}>Module 7</div>
        <h1 style={S.h1}>Data Warehouses, Data Lakes & Lakehouses</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. Data Warehouses</h2>
          <p style={S.p}>Um Data Warehouse (DW) é um repositório centralizado de dados estruturados, optimizado para análise e reporting (OLAP), em contraste com os sistemas operacionais (OLTP) que suportam as aplicações do dia-a-dia. Os dados são extraídos de múltiplas fontes operacionais, transformados, e carregados num modelo dimensional desenhado especificamente para queries analíticas rápidas.</p>

          <h3 style={S.h3}>OLTP vs. OLAP</h3>
          <p style={S.p}>OLTP (Online Transaction Processing) refere-se aos sistemas que suportam operações do negócio em tempo real — uma base de dados de e-commerce que regista encomendas, um sistema bancário que processa transferências. OLAP (Online Analytical Processing) refere-se aos sistemas optimizados para consultas analíticas complexas sobre grandes volumes de dados históricos — "qual foi a receita por região e categoria de produto nos últimos 3 anos?". Misturar as duas cargas de trabalho na mesma base de dados degrada a performance de ambas: queries analíticas pesadas bloqueiam transacções, e o modelo normalizado de OLTP é ineficiente para agregações.</p>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Característica</th>
                  <th style={S.th}>OLTP</th>
                  <th style={S.th}>OLAP</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Objectivo', 'Processar transacções do negócio', 'Análise e reporting sobre dados históricos'],
                  ['Operações típicas', 'INSERT, UPDATE, DELETE de registos individuais', 'SELECT com agregações (SUM, AVG, GROUP BY) sobre milhões de linhas'],
                  ['Modelo de dados', 'Normalizado (3NF) — minimiza redundância', 'Dimensional (star/snowflake) — optimizado para leitura'],
                  ['Volume por operação', 'Poucas linhas por transacção', 'Milhões de linhas por query'],
                  ['Utilizadores', 'Aplicações, sistemas operacionais', 'Analistas de dados, dashboards de BI, data scientists'],
                  ['Exemplos', 'PostgreSQL, MySQL, Oracle (modo transaccional)', 'Snowflake, BigQuery, Redshift, Teradata'],
                ].map(([c, oltp, olap]) => (
                  <tr key={c}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{c}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{oltp}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{olap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Modelação Dimensional — Star Schema vs. Snowflake Schema</h3>
          <p style={S.p}>A modelação dimensional organiza os dados em dois tipos de tabelas: tabelas de factos (fact tables), que contêm métricas numéricas e quantificáveis de eventos de negócio (ex: valor de uma venda, quantidade vendida), e tabelas de dimensões (dimension tables), que contêm os atributos descritivos usados para filtrar e agrupar esses factos (ex: produto, cliente, data, loja). Cada linha de uma fact table liga-se a uma linha em cada dimensão através de chaves estrangeiras.</p>
          <p style={S.p}>No Star Schema, cada dimensão é uma única tabela desnormalizada — todos os atributos de "produto" (nome, categoria, subcategoria, marca) ficam na mesma tabela dim_product, mesmo que isso introduza redundância. O resultado é um esquema simples, com poucos joins, fácil de entender e rápido de consultar — daí o nome "estrela", com a fact table no centro rodeada pelas dimensões. No Snowflake Schema, as dimensões são normalizadas em sub-tabelas (ex: dim_product liga-se a dim_category, que se liga a dim_department), reduzindo redundância à custa de mais joins nas queries.</p>

          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Star Schema — Fact Table no centro, Dimensões à volta</p>
            <svg viewBox="0 0 580 280" style={{ maxWidth: '100%', height: 'auto' }}>
              <rect x="220" y="110" width="140" height="60" rx="8" fill="rgba(74,158,237,0.08)" stroke="#4a9eed" strokeWidth="2" />
              <text x="290" y="135" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">fact_sales</text>
              <text x="290" y="150" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">qty, amount, discount, FKs</text>
              {[
                { x: 230, y: 10, label: 'dim_date', c: '#4a9eed' },
                { x: 430, y: 10, label: 'dim_product', c: '#4a9eed' },
                { x: 30, y: 110, label: 'dim_customer', c: '#4a9eed' },
                { x: 430, y: 210, label: 'dim_store', c: '#4a9eed' },
                { x: 230, y: 210, label: 'dim_promotion', c: '#4a9eed' },
              ].map(({ x, y, label, c }) => (
                <g key={label}>
                  <rect x={x} y={y} width="120" height="50" rx="8" fill={`${c}12`} stroke={c} strokeWidth="1.5" />
                  <text x={x + 60} y={y + 30} textAnchor="middle" fill={c} fontSize="10" fontWeight="700">{label}</text>
                  <line x1={y === 110 ? x + 120 : x + 60} y1={y < 110 ? y + 50 : (y > 110 ? y : y + 25)} x2={y === 110 ? 220 : 290} y2={y < 110 ? 110 : (y > 110 ? 170 : 140)} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,2" />
                </g>
              ))}
            </svg>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Cada dimensão é uma tabela desnormalizada ligada directamente à fact table — poucos joins, queries rápidas e simples de escrever.</p>
          </div>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Aspecto</th>
                  <th style={S.th}>Star Schema</th>
                  <th style={S.th}>Snowflake Schema</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Estrutura das dimensões', 'Desnormalizadas — uma tabela por dimensão', 'Normalizadas — divididas em sub-tabelas hierárquicas'],
                  ['Número de joins', 'Poucos (fact → cada dimensão)', 'Mais joins (fact → dimensão → sub-dimensão)'],
                  ['Redundância de dados', 'Maior (atributos repetidos)', 'Menor (cada atributo armazenado uma vez)'],
                  ['Performance de queries', 'Geralmente mais rápida — menos joins', 'Pode ser mais lenta — joins adicionais'],
                  ['Facilidade de manutenção', 'Updates podem afectar muitas linhas', 'Updates isolados nas sub-tabelas normalizadas'],
                  ['Quando usar', 'BI tools, dashboards, simplicidade para analistas', 'Dimensões muito grandes/hierárquicas, poupança de storage'],
                ].map(([a, star, snow]) => (
                  <tr key={a}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{a}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{star}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{snow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Exemplos de Data Warehouses no Mercado</h3>
          <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Plataforma</th>
                  <th style={S.th}>Modelo</th>
                  <th style={S.th}>Características distintivas</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Teradata', 'On-premise / cloud, MPP clássico', 'Pioneiro em MPP (Massively Parallel Processing) para EDW corporativos, forte em workloads críticos legacy'],
                  ['Snowflake', 'Cloud-native, separação compute/storage', 'Compute (virtual warehouses) e storage totalmente separados e elásticos, multi-cloud (AWS/Azure/GCP)'],
                  ['Google BigQuery', 'Serverless, cloud-native', 'Sem gestão de infraestrutura — paga-se por query (bytes processados) ou por capacidade reservada'],
                  ['Amazon Redshift', 'Cloud, baseado em PostgreSQL', 'Integração nativa com o ecossistema AWS, RA3 nodes separam compute de storage (S3)'],
                ].map(([p, m, c]) => (
                  <tr key={p}>
                    <td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>{p}</td>
                    <td style={S.td}>{m}</td>
                    <td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Resumo: um Data Warehouse organiza dados estruturados num modelo dimensional (star/snowflake) optimizado para OLAP, separando tabelas de factos (métricas) de tabelas de dimensões (atributos descritivos) para permitir queries analíticas rápidas com poucos joins.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Data Lakes</h2>
          <p style={S.p}>Um Data Lake é um repositório centralizado que permite armazenar dados estruturados, semi-estruturados, e não estruturados (logs, JSON, imagens, vídeo, Parquet, CSV) em qualquer escala, a um custo de armazenamento muito inferior ao de um Data Warehouse. Em vez de modelar os dados antes de os carregar (como num DW), um Data Lake armazena os dados no seu formato original — "armazenar primeiro, estruturar depois".</p>
          <p style={S.p}>Tecnicamente, um Data Lake assenta sobre sistemas de armazenamento distribuído de baixo custo: historicamente HDFS (Hadoop Distributed File System) em clusters on-premise, e hoje predominantemente object storage cloud — Amazon S3, Azure Data Lake Storage (ADLS Gen2), e Google Cloud Storage (GCS). Estes sistemas armazenam ficheiros (objects) de forma durável e escalável, desacoplados do poder computacional que os processa — qualquer motor (Spark, Presto, Flink) pode ler os mesmos ficheiros.</p>

          <h3 style={S.h3}>Schema-on-Read vs. Schema-on-Write</h3>
          <p style={S.p}>Um Data Warehouse tradicional é schema-on-write: o schema é definido antes dos dados serem carregados, e qualquer dado que não respeite esse schema é rejeitado na escrita. Isto garante qualidade desde o início, mas exige um esforço de modelação e ETL significativo antes de qualquer dado estar disponível para análise.</p>
          <p style={S.p}>Um Data Lake é schema-on-read: os dados são armazenados no formato em que chegam (raw), e o schema só é aplicado no momento em que são lidos — cada consumidor pode interpretar os mesmos dados brutos de forma diferente, conforme a sua necessidade. Isto dá enorme flexibilidade e permite ingestão rápida de dados de qualquer fonte sem modelação prévia, mas desloca a responsabilidade de garantir consistência para o momento da leitura — e sem disciplina, isso é onde os problemas começam.</p>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Aspecto</th>
                  <th style={S.th}>Schema-on-Write (Data Warehouse)</th>
                  <th style={S.th}>Schema-on-Read (Data Lake)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Quando o schema é definido', 'Antes da escrita — ETL transforma os dados para o schema alvo', 'No momento da leitura — cada consumidor aplica o schema que precisa'],
                  ['Velocidade de ingestão', 'Lenta — requer modelação e transformação prévias', 'Rápida — dados são guardados como chegam'],
                  ['Flexibilidade', 'Baixa — alterar o schema requer migrações', 'Alta — múltiplas interpretações dos mesmos dados raw'],
                  ['Garantia de qualidade', 'Alta na escrita — dados inválidos são rejeitados', 'Baixa por defeito — requer validação adicional na leitura'],
                  ['Risco principal', 'Rigidez, ETL caro e lento de manter', '"Data Swamp" — dados acumulados sem governança nem documentação'],
                ].map(([a, dw, dl]) => (
                  <tr key={a}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{a}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{dw}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{dl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>O Problema do "Data Swamp"</h3>
          <p style={S.p}>O conceito de Data Lake surgiu por volta de 2010 como a solução para armazenar dados brutos em qualquer formato, em grande escala, a baixo custo. Na prática, sem governança adequada, muitos Data Lakes transformaram-se em "Data Swamps" — pântanos de dados onde ninguém sabe o que existe, o que está correcto, ou quando foi actualizado pela última vez.</p>
          <p style={S.p}>Os problemas fundamentais de um Data Lake "puro" (ex: Parquet/CSV em S3 sem nenhuma camada adicional) são bem documentados: (1) Sem transacções — uma escrita a meio deixa dados inconsistentes; (2) Sem updates — actualizar um registo requer reescrever toda a partição; (3) Sem schema enforcement — qualquer dado pode ser escrito mesmo que viole o formato esperado pelos consumidores; (4) Sem versioning — não é possível saber o que existia ontem; (5) Small files problem — pipelines de streaming criam milhões de ficheiros pequenos que degradam performance de leitura; (6) Falta de catálogo/metadata — sem um data catalog, ninguém sabe que datasets existem nem o que significam.</p>
          <p style={S.p}>Evitar o "Data Swamp" passa por: aplicar um data catalog (ex: AWS Glue Data Catalog, Unity Catalog, Hive Metastore) que documenta schemas, owners, e linhagem; organizar os dados em camadas de qualidade crescente (Bronze/Silver/Gold — ver secção seguinte); aplicar políticas de governança e controlo de acesso; e adoptar uma camada transaccional sobre o object storage que traga de volta as garantias ACID que faltam ao Data Lake puro — é precisamente esta camada que dá origem ao Lakehouse.</p>

          <div style={S.note}>Resumo: um Data Lake armazena dados em qualquer formato a baixo custo sobre object storage (S3/ADLS/GCS), com schema-on-read em vez de schema-on-write. A flexibilidade é o seu maior trunfo e o seu maior risco — sem catálogo, governança, e camadas de qualidade, transforma-se num "Data Swamp".</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Lakehouse — Combinando o Melhor dos Dois Mundos</h2>
          <p style={S.p}>O paradigma Lakehouse propõe trazer para cima do object storage barato e flexível dos Data Lakes as garantias que tradicionalmente só existiam em Data Warehouses: transacções ACID, schema enforcement, indexação, e performance de query competitiva. Em vez de manter dados duplicados num Lake (raw) e num Warehouse (modelado), o Lakehouse adiciona uma camada de metadados transaccional directamente sobre os ficheiros no Lake — eliminando a necessidade de mover dados entre sistemas.</p>
          <p style={S.p}>Delta Lake (Databricks), Apache Iceberg (Netflix), e Apache Hudi (Uber) são os três "open table formats" que implementam este conceito. Todos resolvem os mesmos problemas fundamentais do Data Lake puro identificados na secção anterior — falta de transacções, impossibilidade de updates, ausência de versioning, sem schema enforcement, small files problem — mantendo os dados em formatos abertos (tipicamente Parquet) em object storage.</p>

          <DeltaArchDiagram />

          <p style={S.p}>O Transaction Log (_delta_log/) é a inovação central do Delta Lake. É uma sequência de ficheiros JSON numerados (0000000000000000000.json, 0000000000000000001.json, ...) onde cada ficheiro representa um commit — uma operação atómica que pode adicionar ficheiros, remover ficheiros, e registar estatísticas. Cada leitor constrói o estado actual da tabela lendo os commits do log em ordem.</p>
          <p style={S.p}>Para eficiência, Delta Lake cria periodicamente ficheiros de Checkpoint (formato Parquet) que condensam o estado completo da tabela até aquele momento. Novos leitores começam pelo checkpoint mais recente e aplicam apenas os commits subsequentes — em vez de ler todos os commits desde o início. Por defeito, um checkpoint é criado a cada 10 commits.</p>

          <h3 style={S.h3}>Medallion Architecture — Bronze, Silver, Gold</h3>
          <p style={S.p}>A Medallion Architecture é o padrão de organização de dados mais adoptado em Data Lakehouses modernos. Define três camadas com níveis crescentes de qualidade e transformação, cada uma implementada como tabelas Delta Lake.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              {
                n: 'Bronze (Raw)', c: '#b45309', bg: 'rgba(180,83,9,0.08)', border: 'rgba(180,83,9,0.35)',
                desc: 'Dados brutos ingeridos directamente das fontes, sem transformação. Preserva exactamente o que chegou — incluindo erros, duplicados, e schema original. Serve como fonte da verdade imutável para reprocessamento futuro.',
                props: ['Schema conforme fonte original (pode ser nested JSON, CSV)', 'Append-only — nunca modificar dados Bronze', 'Partition por data de ingestão (não data de evento)', 'Retenção longa (meses a anos) — é o backup de última instância', 'Exemplos: raw Kafka events, API responses completas, dumps de tabelas OLTP'],
              },
              {
                n: 'Silver (Cleaned)', c: '#94a3b8', bg: 'rgba(148,163,184,0.08)', border: 'rgba(148,163,184,0.35)',
                desc: 'Dados limpos, validados, e deduplicados. Schema normalizado e consistente. Aplicação de regras de qualidade e enriquecimento com lookups. É a camada "single source of truth" para equipas de analytics e ciência de dados.',
                props: ['Deduplicação por chave de negócio (order_id, user_id)', 'Normalização de tipos (strings de data → TimestampType)', 'Enriquecimento: join com tabelas de referência (country codes, product catalogue)', 'Validação: NULLs eliminados, valores out-of-range filtrados ou corrigidos', 'Partition por data de evento (não de ingestão) — para queries temporais'],
              },
              {
                n: 'Gold (Business)', c: '#d4a017', bg: 'rgba(212,160,23,0.08)', border: 'rgba(212,160,23,0.35)',
                desc: 'Agregações e métricas prontas para consumo por dashboards, APIs, e modelos ML. Optimizadas para performance de leitura — Z-ordered pelas dimensões mais consultadas. Schema desenhado para o consumidor final, não para normalização.',
                props: ['Aggregações diárias/semanais/mensais de métricas de negócio', 'Tabelas wide (desnormalizadas) para BI tools (Tableau, Power BI)', 'Features computadas para modelos ML (avg_purchase_30d, churn_score)', 'SCD Tipo 2 para histórico de dimensões (clientes, produtos)', 'ZORDER BY dimensões de filtro mais comuns (country, product_category)'],
              },
            ].map(({ n, c, bg, border, desc, props }) => (
              <div key={n} style={{ background: bg, border: `1px solid ${border}`, borderRadius: 8, padding: '1rem' }}>
                <div style={{ fontWeight: 800, color: c, marginBottom: '0.4rem', fontSize: '1rem' }}>{n}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', lineHeight: 1.6 }}>{desc}</p>
                {props.map(p => <div key={p} style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.15rem' }}>• {p}</div>)}
              </div>
            ))}
          </div>

          <FeatureExplorer />

          <h3 style={S.h3}>Delta Lake vs. Apache Iceberg vs. Apache Hudi</h3>
          <p style={S.p}>Os três formatos open table format competem pelo mesmo espaço. Todos resolvem os mesmos problemas fundamentais (ACID, time travel, schema evolution) mas com arquitecturas e pontos fortes diferentes. A escolha depende do vendor e do caso de uso.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Dimensão</th>
                  <th style={S.th}>Delta Lake</th>
                  <th style={S.th}>Apache Iceberg</th>
                  <th style={S.th}>Apache Hudi</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Origem', 'Databricks (2019), open-sourced', 'Netflix (2018), Apache top-level', 'Uber (2019), Apache top-level'],
                  ['Melhor com', 'Spark + Databricks', 'Múltiplos engines (Spark, Flink, Trino, Hive)', 'Streaming / CDC de alta frequência'],
                  ['Transaction Log', 'JSON + Parquet checkpoints', 'Metadata tree (manifests + snapshot)', 'Timeline com index files'],
                  ['Time Travel', 'VERSION AS OF + TIMESTAMP AS OF', 'TIMESTAMP AS OF + snapshot ID', 'Point-in-time queries via commit time'],
                  ['Compaction', 'OPTIMIZE + VACUUM manual ou auto (Databricks)', 'Compaction via procedures (Spark) ou serviços geridos', 'Inline e async clustering automático'],
                  ['Multi-engine support', 'Bom (Spark-first, Trino/Presto experimental)', 'Excelente — desenhado para multi-engine', 'Bom (Spark-first, Flink nativo)'],
                  ['CDC / Upserts', 'MERGE INTO eficiente', 'MERGE INTO (Spark 3.x)', 'Nativo e optimizado — core use case'],
                  ['Quando escolher', 'Stack Databricks, equipa Spark-first', 'Multi-cloud, múltiplos engines, AWS/GCP managed (Glue, BigLake)', 'Alta frequência de updates/deletes, streaming CDC'],
                ].map(([d, dl, ic, hu]) => (
                  <tr key={d}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{d}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{dl}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{ic}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{hu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Na prática: Delta Lake se o stack é Databricks; Iceberg se usas múltiplos engines ou clouds (AWS Glue, Google BigLake, ou Snowflake suportam Iceberg nativamente); Hudi se o caso de uso principal é CDC de alta frequência com muitos updates. Os três estão a convergir em funcionalidades — a diferença principal é o ecossistema e o vendor support.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Data Warehouse vs. Data Lake vs. Lakehouse</h2>
          <p style={S.p}>Com os três paradigmas definidos, vale a pena compará-los directamente nas dimensões que mais influenciam a escolha de arquitectura: custo de armazenamento, flexibilidade de schema, suporte a transacções ACID, performance de query, perfis de utilizadores típicos, e ferramentas/vendors associados.</p>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Dimensão</th>
                  <th style={S.th}>Data Warehouse</th>
                  <th style={S.th}>Data Lake</th>
                  <th style={S.th}>Lakehouse</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Custo de armazenamento', 'Alto — storage proprietário optimizado e acoplado ao compute', 'Baixo — object storage genérico (S3/ADLS/GCS)', 'Baixo — mesmo object storage do Data Lake'],
                  ['Flexibilidade de schema', 'Baixa — schema-on-write, modelo dimensional rígido', 'Alta — schema-on-read, qualquer formato', 'Alta, com schema enforcement opcional — schema evolution controlada'],
                  ['Suporte ACID', 'Nativo e maduro', 'Inexistente nativamente', 'Nativo via transaction log (Delta/Iceberg/Hudi)'],
                  ['Performance de query', 'Excelente para SQL analítico — indexação e optimizadores maduros', 'Variável — depende do motor e formato dos ficheiros', 'Boa a excelente — Z-ordering, compaction, caching'],
                  ['Utilizadores típicos', 'Analistas de negócio, equipas de BI', 'Data engineers, data scientists, ML engineers', 'Data engineers, data scientists, analistas — audiência unificada'],
                  ['Tooling / vendors típicos', 'Snowflake, BigQuery, Redshift, Teradata + dbt + Tableau/Power BI', 'S3/ADLS/GCS + Spark/Presto/Hive + Glue Catalog', 'Databricks (Delta Lake), Snowflake/AWS (Iceberg), Spark + Trino'],
                  ['Casos de uso ideais', 'BI estruturado, relatórios financeiros, dashboards executivos', 'Dados não estruturados, ML/data science exploratório, ingestão raw', 'Plataforma analítica unificada — BI + ML sobre os mesmos dados'],
                ].map(([d, dw, dl, lh]) => (
                  <tr key={d}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{d}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{dw}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{dl}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{lh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Não existe um vencedor absoluto — a escolha depende da maturidade dos dados, do orçamento, e do perfil dos consumidores. Muitas organizações operam os três em simultâneo: Data Lake para ingestão raw e ML, Lakehouse como camada unificada de processamento, e Data Warehouse (ou um warehouse cloud que também funciona como lakehouse, como Snowflake/BigQuery) para os dashboards de BI mais críticos.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Qualidade de Dados — Governar Warehouses, Lakes e Lakehouses</h2>
          <p style={S.p}>Independentemente do paradigma escolhido — Data Warehouse, Data Lake, ou Lakehouse — os dados só geram valor se forem fiáveis. Dados incorrectos são mais perigosos que dados em falta. Dados em falta são visíveis — causam erros imediatos. Dados incorrectos passam despercebidos e chegam a dashboards, modelos ML, e decisões de negócio. Um estudo da IBM estima que dados de má qualidade custam às empresas americanas 3.1 triliões de dólares por ano em decisões erradas, retrabalho, e perda de confiança.</p>
          <p style={S.p}>Data Quality tem cinco dimensões fundamentais que devem ser medidas e monitoradas em cada pipeline: Completeness (ausência de NULLs onde não deveriam existir), Uniqueness (ausência de duplicados em chaves primárias), Validity (valores dentro de domínios esperados), Consistency (relações entre tabelas mantidas), e Timeliness (dados são suficientemente recentes para o uso pretendido).</p>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Dimensão</th>
                  <th style={S.th}>Definição</th>
                  <th style={S.th}>Exemplos de validação</th>
                  <th style={S.th}>Consequência de falha</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Completeness', 'Dados obrigatórios existem — sem NULLs onde não é permitido', 'order_id NOT NULL, customer_id NOT NULL, amount NOT NULL', 'Agregações incorrectas (SUM ignora NULLs), joins que perdem registos'],
                  ['Uniqueness', 'Chaves primárias e naturais são únicas — sem duplicados', 'COUNT(*) = COUNT(DISTINCT order_id), email único por utilizador', 'Dupla contagem em relatórios, modelos ML com dados de treino duplicados'],
                  ['Validity', 'Valores dentro de domínios esperados — tipos correctos, ranges válidos', 'amount > 0, status IN ("pending","paid","cancelled"), email matches regex', 'Cálculos errados, erros em produção quando código assume valores válidos'],
                  ['Consistency', 'Relações entre tabelas mantidas — referential integrity', 'Todo order.customer_id existe em customers.id, datas de início < fim', 'Joins que perdem dados, relatórios incoerentes entre tabelas'],
                  ['Timeliness', 'Dados suficientemente recentes para o uso pretendido', 'max(event_time) < now - 2h, row_count(today) > row_count(yesterday) * 0.5', 'Dashboards a mostrar dados de ontem como "hoje", alertas com atraso'],
                ].map(([d, def, ex, cons]) => (
                  <tr key={d}>
                    <td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>{d}</td>
                    <td style={S.td}>{def}</td>
                    <td style={{ ...S.td, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{ex}</td>
                    <td style={{ ...S.td, fontSize: '0.82rem', color: '#4a9eed' }}>{cons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <DQExplorer />

          <h3 style={S.h3}>Data Quality no Pipeline — Onde Colocar as Validações</h3>
          <p style={S.p}>As validações devem existir em múltiplas camadas do pipeline — não apenas no final. Quanto mais tarde se detecta um problema de qualidade, mais caro é corrigir (dados incorrectos podem já ter chegado a dashboards, modelos, e decisões de negócio).</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr><th style={S.th}>Ponto do pipeline</th><th style={S.th}>O que validar</th><th style={S.th}>Acção em caso de falha</th><th style={S.th}>Ferramenta</th></tr>
              </thead>
              <tbody>
                {[
                  ['Ingestão (Bronze)', 'Schema da fonte (novos campos, tipos alterados), volume de registos dentro de range esperado, freshness dos dados (chegaram a tempo?)', 'Quarentena — mover dados suspeitos para pasta separada, alertar e não processar', 'Great Expectations Checkpoint, Soda freshness check'],
                  ['Após transformação (Silver)', 'Completeness de campos obrigatórios, ausência de duplicados, validez de valores, integridade referencial', 'Falhar o job Airflow — não escrever Silver com dados inválidos. Alertar equipa de dados.', 'dbt test, Great Expectations, Delta constraints'],
                  ['Antes de servir (Gold)', 'Métricas de negócio dentro de ranges históricos (Z-score anomaly detection), row counts consistentes com dias anteriores', 'Bloquear actualização do Gold até investigação. Dashboard mostra dados do dia anterior.', 'Soda Cloud anomaly detection, custom Spark assertions'],
                  ['Em produção (contínuo)', 'Data drift — distribuição de valores muda ao longo do tempo (features de ML), completeness e uniqueness diários', 'Alertas automáticos (email/Slack/PagerDuty), trigger re-treino de modelos ML', 'Databricks Lakehouse Monitoring, Great Expectations + Airflow scheduling'],
                ].map(([p, v, a, f]) => (
                  <tr key={p}>
                    <td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{p}</td>
                    <td style={S.td}>{v}</td>
                    <td style={{ ...S.td, fontSize: '0.83rem', color: '#4a9eed' }}>{a}</td>
                    <td style={{ ...S.td, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
