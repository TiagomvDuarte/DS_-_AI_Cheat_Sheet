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

const LifecycleDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>O Ciclo de Vida dos Dados</p>
    <svg viewBox="0 0 620 160" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-de" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
      </defs>
      {[
        { x: 10,  label: 'Ingestão', sub: 'Fivetran, Airbyte, Kafka', c: '#f97316' },
        { x: 165, label: 'Storage', sub: 'Data Lake / Lakehouse', c: '#f97316' },
        { x: 320, label: 'Transformação', sub: 'Spark, dbt, SQL', c: '#f97316' },
        { x: 475, label: 'Serving', sub: 'BI, ML, APIs', c: '#f97316' },
      ].map(({ x, label, sub, c }) => (
        <g key={label}>
          <rect x={x} y={50} width={135} height={56} rx={8} fill={`${c}15`} stroke={c} strokeWidth="1.5" />
          <text x={x + 67} y={75} textAnchor="middle" fill={c} fontSize="11" fontWeight="700">{label}</text>
          <text x={x + 67} y={92} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{sub}</text>
        </g>
      ))}
      {[[145,78,165,78],[300,78,320,78],[455,78,475,78]].map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-de)" />
      ))}
      <text x="310" y="135" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">
        Orquestrado de ponta a ponta por Apache Airflow — cada seta representa dependências geridas por DAGs
      </text>
    </svg>
  </div>
);

const ETLvsELTDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>ETL vs ELT — onde acontece a transformação</p>
    <svg viewBox="0 0 620 220" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-etl" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
      </defs>
      {/* ETL row */}
      <text x="10" y="20" fill="#f97316" fontSize="11" fontWeight="700">ETL (tradicional)</text>
      {[
        { x: 10,  w: 100, label: 'Fontes', c: '#94a3b8' },
        { x: 130, w: 100, label: 'Extract', c: '#f97316' },
        { x: 250, w: 130, label: 'Transform\n(staging server)', c: '#f97316' },
        { x: 400, w: 100, label: 'Load', c: '#f97316' },
        { x: 520, w: 100, label: 'Data\nWarehouse', c: '#f97316' },
      ].map(({ x, w, label, c }, i) => (
        <g key={'etl'+i}>
          <rect x={x} y={30} width={w} height={45} rx={7} fill={`${c}15`} stroke={c} strokeWidth="1.5" />
          {label.split('\n').map((l, j) => (
            <text key={j} x={x + w / 2} y={50 + j*12} textAnchor="middle" fill={c} fontSize="9" fontWeight="700">{l}</text>
          ))}
        </g>
      ))}
      {[[110,52,130,52],[230,52,250,52],[380,52,400,52],[500,52,520,52]].map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-etl)" />
      ))}

      {/* ELT row */}
      <text x="10" y="120" fill="#f97316" fontSize="11" fontWeight="700">ELT (moderno)</text>
      {[
        { x: 10,  w: 100, label: 'Fontes', c: '#94a3b8' },
        { x: 130, w: 130, label: 'Extract +\nLoad (raw)', c: '#f97316' },
        { x: 280, w: 140, label: 'Lakehouse\n(raw zone)', c: '#f97316' },
        { x: 440, w: 130, label: 'Transform\n(Spark / SQL)', c: '#f97316' },
      ].map(({ x, w, label, c }, i) => (
        <g key={'elt'+i}>
          <rect x={x} y={130} width={w} height={50} rx={7} fill={`${c}15`} stroke={c} strokeWidth="1.5" />
          {label.split('\n').map((l, j) => (
            <text key={j} x={x + w / 2} y={150 + j*12} textAnchor="middle" fill={c} fontSize="9" fontWeight="700">{l}</text>
          ))}
        </g>
      ))}
      {[[110,155,130,155],[260,155,280,155],[420,155,440,155]].map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-etl)" />
      ))}
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>ETL transforma antes de carregar (staging dedicado). ELT carrega dados em bruto primeiro e usa o poder de computação do warehouse/lakehouse para transformar.</p>
  </div>
);

const DAGSimpleDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>DAG Simples: Extract → Transform → Load</p>
    <svg viewBox="0 0 500 140" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-dag1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
      </defs>
      {[
        { x: 20,  y: 50, label: 'extract_data', sub: 'PythonOperator', c: '#f97316' },
        { x: 200, y: 50, label: 'transform_data', sub: 'SparkSubmitOperator', c: '#f97316' },
        { x: 380, y: 50, label: 'load_warehouse', sub: 'PythonOperator', c: '#f97316' },
      ].map(({ x, y, label, sub, c }) => (
        <g key={label}>
          <rect x={x} y={y} width={110} height={48} rx={7} fill={`${c}15`} stroke={c} strokeWidth="1.5" />
          <text x={x + 55} y={y + 19} textAnchor="middle" fill={c} fontSize="9" fontWeight="700">{label}</text>
          <text x={x + 55} y={y + 35} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{sub}</text>
        </g>
      ))}
      {[[130,74,200,74],[310,74,380,74]].map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-dag1)" />
      ))}
      <text x="250" y="125" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">
        extract_data &gt;&gt; transform_data &gt;&gt; load_warehouse — sem ciclos, ordem garantida
      </text>
    </svg>
  </div>
);

const ArchitectureDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Arquitectura de Referência — Pipeline de Dados Moderna</p>
    <svg viewBox="0 0 640 250" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-arch" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
      </defs>
      {[
        { x: 10,  y: 70,  w: 90,  label: 'Fontes', sub: 'APIs, DBs, SaaS', c: '#94a3b8' },
        { x: 130, y: 70,  w: 100, label: 'Fivetran /\nAirbyte', sub: 'Ingestão (CDC)', c: '#f97316' },
        { x: 260, y: 30,  w: 100, label: 'Data Lake\n(Raw Zone)', sub: 'S3 / ADLS / GCS', c: '#f97316' },
        { x: 260, y: 120, w: 100, label: 'Lakehouse\n(Delta/Iceberg)', sub: 'Bronze→Silver→Gold', c: '#f97316' },
        { x: 400, y: 120, w: 100, label: 'Spark / dbt', sub: 'Transformação', c: '#f97316' },
        { x: 540, y: 50,  w: 90,  label: 'BI', sub: 'Power BI, Tableau', c: '#f97316' },
        { x: 540, y: 150, w: 90,  label: 'ML', sub: 'Feature Store', c: '#f97316' },
      ].map(({ x, y, w, label, sub, c }) => (
        <g key={label}>
          <rect x={x} y={y} width={w} height={50} rx={7} fill={`${c}15`} stroke={c} strokeWidth="1.5" />
          {label.split('\n').map((l, j) => (
            <text key={j} x={x + w/2} y={y + 18 + j*12} textAnchor="middle" fill={c} fontSize="9" fontWeight="700">{l}</text>
          ))}
          <text x={x + w/2} y={y + (label.includes('\n') ? 44 : 36)} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{sub}</text>
        </g>
      ))}
      {[
        [100,95,130,95],
        [230,95,260,55],[230,95,260,145],
        [360,145,400,145],
        [500,145,540,75],[500,145,540,175],
      ].map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-arch)" opacity="0.8" />
      ))}
      <rect x="130" y="215" width="500" height="24" rx="4" fill="f97316" stroke="#f97316" strokeWidth="1" />
      <text x="380" y="231" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Apache Airflow — orquestra ingestão, transformação e publicação (DAGs agendados)</text>
    </svg>
  </div>
);

const IngestionToolExplorer = () => {
  const [tab, setTab] = useState(0);
  const tools = [
    {
      name: 'Fivetran', color: '#f97316',
      modelo: 'Plataforma SaaS totalmente gerida com mais de 500 conectores pré-construídos (Salesforce, Stripe, Postgres, Google Ads, etc.). Configuração no-code: autenticar a fonte, escolher o destino (warehouse), e o Fivetran trata da extracção, normalização de schema e sincronização incremental automaticamente.',
      pontos_fortes: ['Conectores extremamente fiáveis e mantidos pela equipa Fivetran', 'Schema drift tratado automaticamente — novas colunas na fonte aparecem no destino', 'CDC (Change Data Capture) nativo para bases de dados transacionais via log-based replication', 'Setup em minutos, zero manutenção de código', 'SLA de qualidade e suporte enterprise'],
      limitacoes: ['Preço baseado em MAR (Monthly Active Rows) pode escalar rapidamente e tornar-se caro', 'Menos controlo sobre lógica de extracção customizada', 'Conectores fechados — não é possível modificar o código internamente', 'Dependência de fornecedor (vendor lock-in)'],
      quando: 'Empresas que valorizam velocidade de implementação e fiabilidade sobre custo marginal, e que usam fontes de dados comuns (SaaS populares, bases de dados standard).',
    },
    {
      name: 'Airbyte', color: '#f97316',
      modelo: 'Plataforma open-source (com versão Cloud gerida) com mais de 350 conectores mantidos pela comunidade e pela Airbyte. Pode ser self-hosted (Docker/Kubernetes) ou usado via Airbyte Cloud. Conectores definidos com um protocolo aberto (Airbyte Protocol) — qualquer pessoa pode construir ou modificar conectores em Python/baixo-código.',
      pontos_fortes: ['Open-source — self-hosted é gratuito (paga-se apenas infraestrutura)', 'Connector Development Kit (CDK) para criar conectores customizados rapidamente', 'CDC suportado para Postgres, MySQL, MongoDB via Debezium', 'Sem vendor lock-in — protocolo aberto e portável', 'Comunidade activa adiciona novos conectores constantemente'],
      limitacoes: ['Self-hosted requer gestão de infraestrutura (Kubernetes recomendado em produção)', 'Conectores da comunidade variam em qualidade/maturidade comparado a Fivetran', 'Airbyte Cloud também cobra por volume, embora geralmente mais barato'],
      quando: 'Equipas com capacidade de engenharia para self-host, que querem evitar vendor lock-in, ou precisam de conectores customizados/nicho não disponíveis noutras plataformas.',
    },
    {
      name: 'Stitch', color: '#f97316',
      modelo: 'Plataforma SaaS de ingestão (adquirida pela Talend), pioneira no modelo "ELT gerido". Oferece cerca de 140 conectores, focada em simplicidade e preço acessível para equipas pequenas/médias. Modelo de pricing também baseado em volume de linhas replicadas.',
      pontos_fortes: ['Pricing geralmente mais acessível que Fivetran para volumes pequenos', 'Interface simples, rápida configuração', 'Boa integração com warehouses standard (Snowflake, BigQuery, Redshift)'],
      limitacoes: ['Catálogo de conectores menor que Fivetran/Airbyte', 'Menos funcionalidades avançadas de transformação/orquestração', 'Crescimento e inovação mais lentos desde a aquisição'],
      quando: 'Startups e equipas pequenas com orçamento limitado e fontes de dados comuns/simples.',
    },
    {
      name: 'Meltano', color: '#f97316',
      modelo: 'Ferramenta open-source "code-first" construída sobre o standard Singer (taps = extractors, targets = loaders). Configuração declarativa em YAML, versionada em Git, executável via CLI. Pensado para equipas de engenharia que querem ELT como código (DataOps).',
      pontos_fortes: ['100% open-source e self-hosted, sem custos de licença', 'Configuração como código — versionamento Git, CI/CD, testes', 'Ecossistema Singer com centenas de taps/targets reutilizáveis', 'Integra nativamente com dbt para a camada de transformação'],
      limitacoes: ['Requer mais expertise técnica que soluções totalmente geridas', 'Conectores Singer têm qualidade muito variável', 'Sem suporte enterprise oficial — depende da comunidade'],
      quando: 'Equipas de Data Engineering maduras que praticam DataOps/GitOps e preferem controlo total via código a uma UI gerida.',
    },
    {
      name: 'Custom (Python/Spark)', color: '#f97316',
      modelo: 'Scripts de extracção escritos à medida — chamadas a APIs com requests/SDKs, leitura de bases de dados com SQLAlchemy/JDBC, processamento com Pandas ou Spark, escrita directa no destino. Totalmente sob controlo da equipa de engenharia.',
      pontos_fortes: ['Controlo total sobre lógica, performance e custos de infraestrutura', 'Sem custos de licenciamento por volume de dados', 'Pode implementar lógica de negócio complexa não suportada por ferramentas genéricas', 'Integração nativa com o resto do stack (Airflow, Spark)'],
      limitacoes: ['Custo de desenvolvimento e manutenção contínua (schema drift, rate limits, paginação, retries — tudo manual)', 'Tempo de implementação muito maior para cada nova fonte', 'Risco de "reinventar a roda" para problemas já resolvidos por ferramentas managed'],
      quando: 'Fontes muito específicas/proprietárias sem conector disponível, requisitos de transformação durante a extracção, ou volumes que tornam o pricing por MAR proibitivo.',
    },
  ];
  const t = tools[tab];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Ferramentas de Ingestão — Comparação</p>
      <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {tools.map((tool, i) => (
          <button key={i} onClick={() => setTab(i)} style={{
            padding: '0.35rem 0.8rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem',
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

export default function BDA1() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/bigdata-analytics" style={S.back}><ArrowLeft size={16} /> Voltar a Big Data Analytics</Link>
        <div style={S.tag}>MÓDULO 01</div>
        <h1 style={S.h1}>Data Engineering: ETL, ELT &amp; Orquestração de Pipelines</h1>
        <p style={S.lead}>Antes de qualquer modelo de Machine Learning, dashboard de BI, ou query analítica, alguém teve de extrair dados de dezenas de sistemas, garantir que chegam limpos e a tempo, e organizá-los de forma que sejam utilizáveis. Esse é o trabalho de Data Engineering — a fundação invisível que alimenta todos os outros módulos deste curso. Este módulo introduz os conceitos, padrões e ferramentas que tornam essa fundação sólida, fiável e escalável.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. O Papel do Data Engineer</h2>
          <p style={S.p}>Um Data Engineer constrói e mantém os sistemas que movem e transformam dados desde as fontes (bases de dados operacionais, APIs de terceiros, eventos de aplicações, ficheiros) até aos destinos onde são consumidos por outros — analistas, cientistas de dados, engenheiros de ML, e sistemas de BI. Sem este trabalho, os dados ficam presos, dispersos, inconsistentes ou simplesmente inacessíveis.</p>
          <p style={S.p}>O ciclo de vida dos dados pode ser resumido em quatro fases: <strong>Ingestão</strong> (trazer dados das fontes para um local centralizado), <strong>Storage</strong> (armazenar de forma duradoura, escalável e organizada — data lakes, lakehouses, warehouses), <strong>Transformação</strong> (limpar, juntar, agregar e modelar os dados em formatos úteis), e <strong>Serving</strong> (disponibilizar os dados transformados para consumo — dashboards, APIs, modelos de ML, exports).</p>

          <LifecycleDiagram />

          <h3 style={S.h3}>Data Engineer vs. Data Analyst vs. Data Scientist vs. ML Engineer</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Papel</th><th style={S.th}>Foco principal</th><th style={S.th}>Ferramentas típicas</th></tr></thead>
              <tbody>
                {[
                  ['Data Engineer', 'Construir pipelines fiáveis de ingestão, transformação e orquestração; garantir qualidade e disponibilidade dos dados', 'Python, SQL, Spark, Airflow, Fivetran/Airbyte, Kafka, Delta Lake/Iceberg'],
                  ['Analytics Engineer', 'Modelar dados transformados em métricas e tabelas analíticas reutilizáveis dentro do warehouse', 'dbt, SQL, semantic layers (coberto no Módulo 5)'],
                  ['Data Analyst', 'Explorar dados já modelados para responder a perguntas de negócio e construir dashboards', 'SQL, Power BI, Tableau, Excel'],
                  ['Data Scientist', 'Construir modelos estatísticos/ML para prever ou explicar fenómenos a partir de dados já preparados', 'Python (pandas, scikit-learn), Spark MLlib (Módulo 2), notebooks'],
                  ['ML Engineer', 'Colocar modelos em produção, gerir o ciclo de vida e infraestrutura de ML', 'MLflow, Spark, Kubernetes, feature stores'],
                ].map(([role, focus, tools]) => (
                  <tr key={role}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{role}</td><td style={S.td}>{focus}</td><td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{tools}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>
            <strong>Como este módulo se encaixa no curso:</strong> tudo o que vais aprender nos próximos módulos — Machine Learning com Spark MLlib, Graph Analytics com GraphFrames, orquestração avançada com Airflow, e Analytics Engineering com dbt — pressupõe que os dados já chegaram a um lakehouse limpo e bem organizado. Este módulo cobre exactamente como isso acontece: como os dados entram no sistema (ingestão), como são transformados (ETL/ELT), e como o processo todo é automatizado e mantido fiável (orquestração).
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. ETL vs ELT</h2>
          <p style={S.p}>ETL (Extract, Transform, Load) é o paradigma clássico, dominante desde os anos 1990 com data warehouses on-premise. Os dados são extraídos das fontes, transformados num servidor de staging dedicado (limpeza, joins, agregações, aplicação de regras de negócio), e só depois carregados — já no formato final — no data warehouse. A razão histórica era simples: armazenamento e computação no warehouse eram caros e limitados, por isso só dados já "prontos a consumir" entravam lá.</p>
          <p style={S.p}>ELT (Extract, Load, Transform) inverte a ordem das duas últimas etapas. Os dados em bruto (raw) são extraídos e carregados directamente no data lake ou lakehouse, sem transformação prévia. A transformação acontece depois, dentro do próprio sistema de destino, aproveitando o poder de computação massivamente paralelo de plataformas como Spark, Snowflake, BigQuery ou Databricks SQL. Este paradigma só se tornou dominante na última década, à medida que armazenamento em cloud ficou barato e os motores de query ficaram suficientemente poderosos para processar dados em bruto a qualquer escala.</p>

          <ETLvsELTDiagram />

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>ETL (tradicional)</th><th style={S.th}>ELT (moderno)</th></tr></thead>
              <tbody>
                {[
                  ['Onde transforma', 'Servidor de staging dedicado, antes do load', 'Dentro do warehouse/lakehouse, depois do load'],
                  ['Dados em bruto preservados?', 'Não — apenas o resultado transformado é guardado', 'Sim — raw data fica disponível para reprocessamento ou auditoria'],
                  ['Escalabilidade da transformação', 'Limitada pelo servidor de staging', 'Escala horizontalmente com o motor (Spark, BigQuery, Snowflake)'],
                  ['Flexibilidade para mudanças de requisitos', 'Baixa — mudar a lógica requer reprocessar desde a extracção', 'Alta — reaplicar transformações sobre os dados raw já armazenados'],
                  ['Latência até dados "prontos"', 'Mais lenta — transformação é um gargalo antes do load', 'Dados raw disponíveis quase imediatamente; transformação corre em paralelo/depois'],
                  ['Tooling típico', 'Informatica, Talend, SSIS, scripts custom', 'Fivetran/Airbyte (load) + dbt/Spark (transform)'],
                  ['Quando faz sentido', 'Compliance estrita exige que dados sensíveis nunca cheguem em bruto ao destino; sistemas legados on-prem com warehouses pequenos', 'Lakehouses/cloud warehouses modernos; equipas que querem agilidade e reprocessamento; volumes grandes e variados'],
                ].map(([a, etl, elt]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 600 }}>{a}</td><td style={S.td}>{etl}</td><td style={{ ...S.td, color: '#f97316' }}>{elt}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>
            Na prática, a maioria das empresas usa um híbrido: ELT para a maior parte dos dados (carregar raw, transformar com dbt/Spark), mas ETL pontual para fontes sensíveis onde mascarar/anonimizar dados antes do load é um requisito legal (ex: dados de saúde, dados financeiros com PII).
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Ingestão de Dados — Ferramentas Modernas (Fivetran, Airbyte, etc.)</h2>
          <p style={S.p}>A primeira etapa de qualquer pipeline ELT é trazer os dados das fontes — bases de dados transacionais (PostgreSQL, MySQL), APIs de SaaS (Salesforce, HubSpot, Stripe, Google Ads), ficheiros (CSV, Parquet em S3), ou streams de eventos (Kafka) — para o data lake/warehouse. Construir e manter conectores para dezenas de fontes diferentes manualmente é um trabalho repetitivo, propenso a erros, e que não gera valor diferenciador para o negócio. É aqui que entram as ferramentas de ingestão gerida.</p>

          <h3 style={S.h3}>Como funcionam: conectores, schema drift e CDC</h3>
          <p style={S.p}>Estas plataformas oferecem <strong>conectores pré-construídos</strong> ("connectors" ou "taps/targets" no ecossistema Singer) que sabem autenticar-se, paginar resultados, respeitar rate limits, e mapear o schema da fonte para o destino — tudo configurável através de uma UI ou ficheiro de configuração, sem escrever código.</p>
          <p style={S.p}><strong>Schema drift</strong> refere-se a mudanças no schema da fonte ao longo do tempo (uma nova coluna é adicionada numa tabela, um campo muda de tipo). Ferramentas modernas detectam estas mudanças automaticamente e propagam-nas para o destino — adicionando a nova coluna, ou alertando se uma mudança é incompatível — sem que o pipeline quebre silenciosamente.</p>
          <p style={S.p}><strong>CDC (Change Data Capture)</strong> é a técnica que permite sincronização incremental eficiente de bases de dados transacionais. Em vez de fazer um full scan da tabela a cada sincronização (caro e lento para tabelas grandes), CDC lê o transaction log da base de dados (ex: WAL do PostgreSQL, binlog do MySQL) e captura apenas as linhas que foram inseridas, actualizadas ou apagadas desde a última sincronização. Isto permite latências de minutos em vez de horas, com impacto mínimo na base de dados de produção.</p>

          <h3 style={S.h3}>Pricing: o modelo MAR (Monthly Active Rows)</h3>
          <p style={S.p}>A maioria destas plataformas (Fivetran, Stitch) cobra com base em <strong>MAR — Monthly Active Rows</strong>: o número de linhas únicas que foram inseridas, actualizadas ou apagadas (e portanto sincronizadas) num mês, por conector. Uma tabela com 10 milhões de linhas mas apenas 50.000 alterações por mês conta como 50.000 MAR, não 10 milhões. Isto recompensa CDC eficiente, mas pode tornar-se caro rapidamente para tabelas com alta taxa de mudança (ex: tabelas de eventos, logs).</p>

          <IngestionToolExplorer />

          <h3 style={S.h3}>Build vs Buy</h3>
          <p style={S.p}>A decisão entre usar uma ferramenta gerida (buy) ou escrever scripts de ingestão customizados (build) depende de três factores: <strong>disponibilidade de conector</strong> (se Fivetran/Airbyte já tem um conector maduro para a fonte, raramente compensa reescrever), <strong>custo a escala</strong> (para volumes muito grandes com alta taxa de mudança, o pricing por MAR pode ultrapassar o custo de manter uma equipa a escrever e operar pipelines Spark/Python), e <strong>complexidade de lógica de negócio na extracção</strong> (se a extracção exige lógica específica — ex: combinar múltiplos endpoints de uma API numa única chamada lógica — ferramentas genéricas podem não suportar isso facilmente).</p>
          <p style={S.p}>Uma estratégia comum: usar Fivetran/Airbyte para as 80% das fontes "standard" (Salesforce, Postgres, Google Analytics), e investir engenharia customizada apenas nos 20% de fontes proprietárias ou de alto volume onde o ROI de uma solução à medida é claro.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Orquestração com Apache Airflow — Conceitos Fundamentais</h2>
          <p style={S.p}>Uma vez que os dados chegam (ingestão) e sabemos como transformá-los (ETL/ELT), falta uma peça crítica: <strong>quando e como</strong> cada etapa corre, e o que fazer quando algo falha. Sem orquestração, pipelines tornam-se uma colecção de cron jobs isolados, sem garantias sobre ordem, dependências ou recuperação de falhas.</p>
          <p style={S.p}>Apache Airflow resolve isto modelando um pipeline como um <strong>DAG — Directed Acyclic Graph</strong> (Grafo Acíclico Dirigido). Cada nó do grafo é uma <strong>task</strong> (uma unidade de trabalho — extrair dados, correr uma transformação, carregar uma tabela), e cada aresta representa uma <strong>dependência</strong>: "esta task só corre depois daquela terminar com sucesso". "Acíclico" garante que não há loops — o pipeline tem sempre um início e um fim bem definidos.</p>

          <DAGSimpleDiagram />

          <h3 style={S.h3}>Tasks, Operators e Scheduling</h3>
          <p style={S.p}>Cada task é definida usando um <strong>operator</strong> — uma classe Python que encapsula um tipo de trabalho. Por exemplo, <code>PythonOperator</code> executa uma função Python, <code>BashOperator</code> corre um comando shell, e <code>SparkSubmitOperator</code> submete um job Spark a um cluster. O Airflow tem mais de 800 operators via "providers" oficiais para integrar com praticamente qualquer sistema (AWS, GCP, Snowflake, dbt, Slack, etc.).</p>
          <p style={S.p}>Um DAG tem também um <strong>schedule</strong> — quando deve correr (ex: diariamente às 6h, "@hourly", ou uma expressão cron). O Airflow scheduler verifica continuamente que DAGs estão prontos para correr com base no schedule e nas dependências, e enfileira as respectivas tasks para execução pelos workers.</p>

          <div style={S.note}>
            Este módulo cobre apenas os fundamentos de orquestração — DAGs, tasks, operators e scheduling — para que percebas porque é que toda a pipeline ELT precisa de um orquestrador. Tópicos avançados como o catálogo completo de operators (PythonOperator, SparkSubmitOperator, KubernetesPodOperator, Sensors), TaskFlow API, padrões de DAG design (fan-out/fan-in, branching, dynamic task mapping), backfill, SLAs, e a comparação Airflow vs Prefect vs Dagster vs dbt são explorados em profundidade no <strong>MÓDULO 4 — Orquestração com Apache Airflow</strong>.
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Arquitectura de uma Pipeline de Dados Moderna</h2>
          <p style={S.p}>Juntando todas as peças: uma pipeline de dados moderna típica começa nas <strong>fontes</strong> (bases de dados operacionais, APIs SaaS, eventos de aplicação). Uma ferramenta de <strong>ingestão</strong> como Fivetran ou Airbyte sincroniza estes dados — usando CDC quando possível — para uma <strong>landing zone</strong> em bruto no data lake ou lakehouse (a "raw zone" ou camada "bronze").</p>
          <p style={S.p}>A partir daí, ferramentas de <strong>transformação</strong> — Spark para processamento em larga escala e lógica complexa, dbt para modelação SQL declarativa e testada — limpam, juntam e agregam os dados em camadas progressivamente mais refinadas (bronze → silver → gold, ou staging → intermediate → marts no vocabulário dbt). O resultado final são tabelas analíticas prontas para consumo.</p>
          <p style={S.p}>Todo este processo — desde o trigger da sincronização de ingestão até à execução dos modelos dbt/Spark — é <strong>orquestrado pelo Airflow</strong>, que garante a ordem correcta (não faz sentido transformar dados que ainda não chegaram), trata falhas com retries, e disponibiliza observabilidade sobre o estado de cada etapa. Finalmente, os dados são <strong>servidos</strong> a quem precisa: dashboards de BI (Power BI, Tableau), feature stores e pipelines de ML (Módulo 2), ou APIs internas.</p>

          <ArchitectureDiagram />
        </div>

        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
              <li>Data Engineering é a fundação do ciclo de vida dos dados: ingestão → storage → transformação → serving — sem ela, nenhum dos outros módulos deste curso tem dados para trabalhar</li>
              <li>ETL transforma antes de carregar (paradigma legado, staging dedicado); ELT carrega dados em bruto e transforma depois usando o poder do warehouse/lakehouse — ELT é o padrão dominante hoje</li>
              <li>Ferramentas como Fivetran e Airbyte automatizam ingestão com conectores pré-construídos, tratam schema drift, e usam CDC para sincronização incremental eficiente — pricing tipicamente baseado em MAR</li>
              <li>Build vs buy: usar ferramentas geridas para fontes standard, reservar engenharia customizada para casos de alto volume ou lógica proprietária</li>
              <li>Apache Airflow orquestra tudo via DAGs — grafos acíclicos de tasks com dependências explícitas, scheduling e tratamento de falhas (aprofundado no Módulo 4)</li>
              <li>A arquitectura de referência — fontes → ingestão → lakehouse (bronze/silver/gold) → transformação (Spark/dbt) → orquestração (Airflow) → serving (BI/ML) — é o fio condutor que liga todos os módulos deste curso</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
