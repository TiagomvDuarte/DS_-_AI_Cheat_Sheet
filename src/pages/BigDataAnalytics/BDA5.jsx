import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
};

const DAGDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>DAG de Dependências — resolvido a partir de source() e ref()</p>
    <svg viewBox="0 0 620 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-dag" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316" /></marker>
      </defs>
      {[
        { x1: 100, y1: 35, x2: 175, y2: 35 },
        { x1: 100, y1: 145, x2: 175, y2: 145 },
        { x1: 270, y1: 145, x2: 345, y2: 110 },
        { x1: 270, y1: 35, x2: 460, y2: 75 },
        { x1: 440, y1: 90, x2: 460, y2: 90 },
      ].map((e, i) => <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-dag)" opacity="0.6" />)}
      {[
        { x: 10, y: 15, w: 90, h: 40, label: 'raw.orders', sub: 'source()', color: '#94a3b8' },
        { x: 10, y: 125, w: 90, h: 40, label: 'raw.customers', sub: 'source()', color: '#94a3b8' },
        { x: 175, y: 15, w: 95, h: 40, label: 'stg_orders', sub: 'staging', color: '#f97316' },
        { x: 175, y: 125, w: 95, h: 40, label: 'stg_customers', sub: 'staging', color: '#f97316' },
        { x: 345, y: 90, w: 95, h: 40, label: 'dim_customers', sub: 'mart', color: '#f97316' },
        { x: 460, y: 60, w: 95, h: 40, label: 'fct_orders', sub: 'mart', color: '#f97316' },
      ].map((n, i) => (
        <g key={i}>
          <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="6" fill={`${n.color}15`} stroke={n.color} strokeWidth="1.5" />
          <text x={n.x + n.w / 2} y={n.y + 18} textAnchor="middle" fill={n.color} fontSize="9" fontWeight="700">{n.label}</text>
          <text x={n.x + n.w / 2} y={n.y + 31} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{n.sub}</text>
        </g>
      ))}
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      O dbt lê todos os <code>ref()</code>/<code>source()</code> do projecto e constrói este grafo automaticamente — <code>dbt run</code> executa os modelos pela ordem topológica correcta (stg_* antes de dim_/fct_*).
    </p>
  </div>
);

const LayersDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Staging &rarr; Intermediate &rarr; Marts</p>
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'stretch', justifyContent: 'center' }}>
      {[
        {
          name: 'Staging Layer', sub: 'stg_*', color: '#f97316', materializacao: 'view',
          desc: 'Relação 1:1 com a fonte: stg_orders ↔ raw.orders. Renomeia colunas (id → order_id), normaliza tipos, filtra lixo/testes. Não junta nada com outras tabelas — é a fronteira entre dados crus e dados que o dbt entende.',
        },
        {
          name: 'Intermediate', sub: 'int_*', color: '#f97316', materializacao: 'ephemeral / view',
          desc: 'Combina e enriquece: faz JOINs entre vários stg_*, calcula campos derivados (margem, idade do cliente, etc.). Lógica reutilizável por vários marts. Normalmente não é exposta directamente ao BI.',
        },
        {
          name: 'Marts', sub: 'dim_*, fct_*', color: '#f97316', materializacao: 'table / incremental',
          desc: 'O produto final, consumido pelo negócio. dim_* = dimensões (atributos descritivos para JOIN/filtrar). fct_* = factos (métricas numéricas, com grain bem definido). Documentadas e testadas.',
        },
      ].map(({ name, sub, color, materializacao, desc }, i, arr) => (
        <React.Fragment key={name}>
          <div style={{ flex: 1, minWidth: 0, background: `${color}10`, border: `1.5px solid ${color}`, borderRadius: 8, padding: '0.85rem', textAlign: 'left' }}>
            <div style={{ fontWeight: 700, color, fontSize: '0.9rem' }}>{name}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontFamily: 'monospace', marginBottom: '0.4rem' }}>{sub} · materialização: {materializacao}</div>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>{desc}</div>
          </div>
          {i < arr.length - 1 && <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.3rem', color: 'var(--text-secondary)', flexShrink: 0 }}>&rarr;</div>}
        </React.Fragment>
      ))}
    </div>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
      Fluxo: <code>raw</code> (dados crus) &rarr; <code>stg_*</code> (limpo, 1:1) &rarr; <code>int_*</code> (combinado/enriquecido) &rarr; <code>dim_*</code>/<code>fct_*</code> (pronto para BI).
    </p>
  </div>
);

const GrainDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Grain — o que é "uma linha" nesta tabela?</p>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'left' }}>
      <div style={{ background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.10)', borderRadius: 8, padding: '0.85rem', minWidth: 220 }}>
        <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.4rem', fontSize: '0.85rem' }}>fct_orders — grain: 1 linha por encomenda</div>
        <table style={{ ...S.table, marginBottom: 0, fontSize: '0.78rem' }}>
          <thead><tr><th style={S.th}>order_id</th><th style={S.th}>amount</th></tr></thead>
          <tbody>
            <tr><td style={S.td}>101</td><td style={S.td}>50</td></tr>
            <tr><td style={S.td}>102</td><td style={S.td}>30</td></tr>
          </tbody>
        </table>
        <div style={{ fontSize: '0.75rem', color: '#f97316', marginTop: '0.4rem' }}>SUM(amount) = 80 ✅ — total correcto de vendas</div>
      </div>
      <div style={{ background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.10)', borderRadius: 8, padding: '0.85rem', minWidth: 240 }}>
        <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.4rem', fontSize: '0.85rem' }}>fct_order_items — grain: 1 linha por item por encomenda</div>
        <table style={{ ...S.table, marginBottom: 0, fontSize: '0.78rem' }}>
          <thead><tr><th style={S.th}>order_id</th><th style={S.th}>item</th><th style={S.th}>amount</th></tr></thead>
          <tbody>
            <tr><td style={S.td}>101</td><td style={S.td}>livro</td><td style={S.td}>50</td></tr>
            <tr><td style={S.td}>102</td><td style={S.td}>caneta</td><td style={S.td}>10</td></tr>
            <tr><td style={S.td}>102</td><td style={S.td}>caderno</td><td style={S.td}>20</td></tr>
          </tbody>
        </table>
        <div style={{ fontSize: '0.75rem', color: '#f97316', marginTop: '0.4rem' }}>SUM(amount) = 80, mas se fizeres JOIN desta tabela com fct_orders e somares "amount" de fct_orders, cada encomenda é contada uma vez por item — 102 conta o dobro ❌</div>
      </div>
    </div>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
      Misturar tabelas com grains diferentes num JOIN sem agregar primeiro é a causa nº1 de "os números não batem certo" em dashboards.
    </p>
  </div>
);

const SCDDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>SCD — Maria muda-se de Lisboa para o Porto em 2024-06-01</p>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'left' }}>
      <div style={{ background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.10)', borderRadius: 8, padding: '0.85rem', minWidth: 240 }}>
        <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.4rem', fontSize: '0.85rem' }}>Type 1 — sobrescreve (sem histórico)</div>
        <table style={{ ...S.table, marginBottom: 0, fontSize: '0.78rem' }}>
          <thead><tr><th style={S.th}>customer_id</th><th style={S.th}>name</th><th style={S.th}>city</th></tr></thead>
          <tbody><tr><td style={S.td}>1</td><td style={S.td}>Maria</td><td style={S.td}>Porto</td></tr></tbody>
        </table>
        <div style={{ fontSize: '0.75rem', color: '#f97316', marginTop: '0.4rem' }}>O valor "Lisboa" desaparece — encomendas antigas ficam associadas (incorrectamente) a "Porto" se fizeres JOIN agora.</div>
      </div>
      <div style={{ background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.10)', borderRadius: 8, padding: '0.85rem', minWidth: 320 }}>
        <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.4rem', fontSize: '0.85rem' }}>Type 2 — nova linha com validade (histórico completo)</div>
        <table style={{ ...S.table, marginBottom: 0, fontSize: '0.78rem' }}>
          <thead><tr><th style={S.th}>customer_id</th><th style={S.th}>city</th><th style={S.th}>valid_from</th><th style={S.th}>valid_to</th><th style={S.th}>is_current</th></tr></thead>
          <tbody>
            <tr><td style={S.td}>1</td><td style={S.td}>Lisboa</td><td style={S.td}>2023-01-01</td><td style={S.td}>2024-06-01</td><td style={S.td}>false</td></tr>
            <tr><td style={S.td}>1</td><td style={S.td}>Porto</td><td style={S.td}>2024-06-01</td><td style={S.td}>NULL</td><td style={S.td}>true</td></tr>
          </tbody>
        </table>
        <div style={{ fontSize: '0.75rem', color: '#f97316', marginTop: '0.4rem' }}>JOIN por <code>order_date BETWEEN valid_from AND valid_to</code> dá a cidade correcta para cada encomenda no momento em que foi feita.</div>
      </div>
    </div>
  </div>
);

const SemanticLayerDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Sem vs. com Semantic Layer</p>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'left' }}>
      <div style={{ background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.10)', borderRadius: 8, padding: '0.85rem', minWidth: 240 }}>
        <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.5rem', fontSize: '0.85rem' }}>Sem semantic layer — cada ferramenta define "Revenue" à sua maneira</div>
        {[
          ['Power BI (Vendas)', 'SUM(amount)', '€120.000'],
          ['Tableau (Finanças)', "SUM(amount) WHERE status != 'cancelled'", '€112.000'],
          ['SQL ad-hoc (Exec)', "SUM(amount) WHERE status = 'delivered'", '€98.000'],
        ].map(([tool, def, val]) => (
          <div key={tool} style={{ marginBottom: '0.5rem', fontSize: '0.78rem' }}>
            <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{tool}</div>
            <div style={{ color: 'var(--text-secondary)', fontFamily: 'monospace', fontSize: '0.72rem' }}>{def}</div>
            <div style={{ color: '#f97316', fontWeight: 700 }}>{val}</div>
          </div>
        ))}
        <div style={{ fontSize: '0.75rem', color: '#f97316', marginTop: '0.4rem' }}>3 números diferentes para "a mesma" métrica — ninguém sabe qual está certo.</div>
      </div>
      <div style={{ background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.10)', borderRadius: 8, padding: '0.85rem', minWidth: 260 }}>
        <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.5rem', fontSize: '0.85rem' }}>Com semantic layer — definição única, consumida por todos</div>
        <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--card-border)', borderRadius: 6, padding: '0.5rem 0.75rem', fontFamily: 'monospace', fontSize: '0.75rem', color: '#f97316', marginBottom: '0.6rem' }}>
{`metric "revenue":
  expr: SUM(amount)
  filter: status != 'cancelled'`}
        </div>
        {['Power BI', 'Tableau', 'SQL ad-hoc (via API)'].map(tool => (
          <div key={tool} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: '0.25rem' }}>
            <span style={{ color: 'var(--text-primary)' }}>{tool}</span>
            <span style={{ color: '#f97316', fontWeight: 700 }}>€112.000</span>
          </div>
        ))}
        <div style={{ fontSize: '0.75rem', color: '#f97316', marginTop: '0.4rem' }}>Todas as ferramentas pedem "revenue" à semantic layer (ex: MetricFlow) e recebem sempre o mesmo número, calculado da mesma forma.</div>
      </div>
    </div>
  </div>
);

const LayerStackDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Stack Moderno de Camadas</p>
    <svg viewBox="0 0 610 90" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-layers" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316" /></marker>
      </defs>
      {[
        { x: 10,  label: 'Source Systems', sub: 'CRM, ERP', color: '#f97316' },
        { x: 130, label: 'Raw Layer', sub: 'bronze', color: '#f97316' },
        { x: 250, label: 'Staging Layer', sub: 'stg_*', color: '#f97316' },
        { x: 370, label: 'Intermediate', sub: 'int_*', color: '#f97316' },
        { x: 490, label: 'Marts', sub: 'dim_*, fct_*', color: '#f97316' },
      ].map(({ x, label, sub, color }, i, arr) => (
        <g key={i}>
          <rect x={x} y="15" width="100" height="55" rx="7" fill={`${color}15`} stroke={color} strokeWidth="1.5" />
          <text x={x + 50} y="40" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">{label}</text>
          <text x={x + 50} y="56" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontFamily="monospace">{sub}</text>
          {i < arr.length - 1 && <line x1={x + 100} y1="42" x2={x + 120} y2="42" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-layers)" />}
        </g>
      ))}
    </svg>
  </div>
);

const ModernStackDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Modern Data Stack — Fluxo End-to-End</p>
    <svg viewBox="0 0 600 110" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-stack" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316" /></marker>
      </defs>
      {[
        { x: 5, label: 'Fivetran / Airbyte', sub: 'ingestão gerida', color: '#f97316' },
        { x: 160, label: 'Snowflake / BigQuery / Databricks', sub: 'storage + compute', color: '#f97316' },
        { x: 380, label: 'dbt', sub: 'transformação (SQL)', color: '#f97316' },
        { x: 480, label: 'Looker / Power BI', sub: 'visualização', color: '#f97316' },
      ].map(({ x, label, sub, color }, i, arr) => {
        const w = i === 1 ? 210 : i === 0 ? 145 : i === 2 ? 90 : 115;
        return (
          <g key={i}>
            <rect x={x} y="15" width={w} height="55" rx="7" fill={`${color}15`} stroke={color} strokeWidth="1.5" />
            <text x={x + w / 2} y="38" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">{label}</text>
            <text x={x + w / 2} y="53" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{sub}</text>
            {i < arr.length - 1 && <line x1={x + w} y1="42" x2={x + w + 10} y2="42" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-stack)" />}
          </g>
        );
      })}
    </svg>
  </div>
);

export default function BDA5() {
  return (
    <div style={S.page}>
      <Link to="/bigdata-analytics" style={S.back}><ArrowLeft size={16} /> Voltar a Big Data Analytics</Link>

      <span style={S.tag}>MÓDULO 05</span>
      <h1 style={S.h1}>Analytics Engineering &amp; dbt</h1>
      <p style={S.lead}>
        dbt, Semantic Layer, BI Moderno e Analytical Patterns — como o papel de Analytics Engineer
        une engenharia de dados e análise de negócio através de SQL versionado, modelos testáveis
        e uma camada semântica consistente para toda a organização.
      </p>

      {/* SECTION 1 */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Analytics Engineering — O Novo Papel</h2>
        <p style={S.p}>
          O <strong>Analytics Engineer</strong> surgiu para preencher a lacuna entre o Data Engineer
          — focado em pipelines, infra e ingestão — e o Data Analyst — focado em relatórios e
          exploração ad-hoc. O Analytics Engineer é responsável por transformar dados brutos em
          modelos analíticos limpos, documentados e testados, usando SQL como linguagem principal.
        </p>
        <LayerStackDiagram />
        <p style={S.p}>
          A mudança de paradigma de <strong>ETL para ELT</strong> foi central nesta evolução: em vez
          de transformar antes de carregar, os dados chegam em bruto ao warehouse e as transformações
          ocorrem dentro da plataforma (Snowflake, BigQuery, Databricks), tirando partido da sua
          capacidade de computação. O Analytics Engineer gere precisamente essa camada de
          transformação — versionada em Git, executada no warehouse, visível como código.
        </p>
        <div style={S.note}>
          ETL: transforma fora do warehouse (pesado, frágil, difícil de versionar). ELT: carrega primeiro,
          transforma dentro do warehouse com SQL — mais ágil, auditável e escalável.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <section style={S.section}>
        <h2 style={S.h2}>2. dbt — data build tool</h2>
        <p style={S.p}>
          O <strong>dbt</strong> (data build tool) é a ferramenta de referência do Analytics Engineer.
          Cada modelo é um simples ficheiro <code>.sql</code> com um <code>SELECT</code> — o dbt
          trata de criar a tabela ou view correspondente no warehouse. A lógica de transformação
          fica em SQL puro, versionada em Git como qualquer outro código.
        </p>
        <p style={S.p}><strong>Materializações disponíveis:</strong></p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Materialização</th>
              <th style={S.th}>Comportamento</th>
              <th style={S.th}>Caso de uso</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>view</td><td style={S.td}>Cria uma VIEW (sem dados fisicamente armazenados)</td><td style={S.td}>Staging, camadas intermédias leves</td></tr>
            <tr><td style={S.td}>table</td><td style={S.td}>Recria a tabela completa a cada run</td><td style={S.td}>Marts de dimensão pequenos</td></tr>
            <tr><td style={S.td}>incremental</td><td style={S.td}>Apenas processa registos novos/alterados</td><td style={S.td}>Tabelas de factos grandes, eventos</td></tr>
            <tr><td style={S.td}>ephemeral</td><td style={S.td}>CTE inline, não materializa no warehouse</td><td style={S.td}>Lógica reutilizável sem overhead</td></tr>
          </tbody>
        </table>
        <p style={S.p}>
          As funções <code>ref()</code> e <code>source()</code> são o coração do dbt: <code>ref('stg_orders')</code>
          cria uma dependência declarativa entre modelos, permitindo ao dbt construir automaticamente
          o <strong>DAG</strong> (Directed Acyclic Graph) de execução. O <code>source()</code> referencia
          tabelas brutas de ingestão, separando claramente a fronteira entre raw e transformado.
        </p>
        <div style={S.code}>
{`-- models/staging/stg_orders.sql
-- source('raw', 'orders') = a tabela bruta "orders" no schema "raw"
-- (carregada por um Fivetran/Airbyte, fora do controlo do dbt)
select
    id as order_id,
    customer_id,
    status,
    amount,
    created_at
from {{ source('raw', 'orders') }}

-- models/marts/fct_orders.sql
-- ref('stg_orders') = depende do modelo acima; ref('dim_customers') = de outro mart
select
    o.order_id,
    o.customer_id,
    c.customer_name,
    o.amount,
    o.created_at
from {{ ref('stg_orders') }} o
left join {{ ref('dim_customers') }} c
    on o.customer_id = c.customer_id`}
        </div>
        <p style={S.p}>
          Comandos principais: <code>dbt run</code> executa os modelos; <code>dbt test</code> corre
          os testes de qualidade; <code>dbt docs generate</code> + <code>dbt docs serve</code> gera
          documentação interativa com o DAG visual e descrições de cada coluna.
        </p>

        <DAGDiagram />
      </section>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Testes e Qualidade com dbt</h2>
        <p style={S.p}>
          O dbt trata testes como cidadãos de primeira classe. Declaram-se em ficheiros
          <code> schema.yml</code> ao lado dos modelos — sem código extra, apenas configuração YAML.
        </p>
        <p style={S.p}><strong>Testes genéricos built-in:</strong></p>
        <div style={S.code}>
{`# models/schema.yml
models:
  - name: fct_orders          # nome do modelo = nome da tabela/view no warehouse
    columns:
      - name: order_id
        tests:
          - unique             # não pode haver order_id repetido
          - not_null           # order_id nunca pode ser NULL
      - name: status
        tests:
          - accepted_values:    # status só pode conter um destes valores
              values: ['pending', 'shipped', 'delivered', 'cancelled']
      - name: customer_id
        tests:
          - relationships:      # cada customer_id tem de existir em dim_customers
              to: ref('dim_customers')
              field: customer_id`}
        </div>
        <p style={S.p}>
          Por trás dos panos, o dbt <strong>traduz cada um destes testes numa query SQL</strong> que
          procura violações. Por exemplo, o teste <code>unique</code> em <code>order_id</code> vira
          algo como <code>select order_id from fct_orders group by order_id having count(*) &gt; 1</code>.
          Se a query devolver <strong>0 linhas</strong>, o teste passa ✅; se devolver alguma linha,
          o teste falha ❌ e o dbt aponta exactamente os registos problemáticos.
        </p>
        <p style={S.p}>
          Para além dos testes genéricos, é possível criar <strong>testes customizados</strong> como
          modelos SQL que devolvem linhas quando falham. Integra-se com ferramentas como
          <strong> Great Expectations</strong> ou <strong>Elementary</strong> para observabilidade
          avançada. Em <strong>dbt Cloud</strong>, os testes correm automaticamente em CI/CD — um
          Pull Request que quebre um teste <code>not_null</code> numa coluna de chave é bloqueado
          antes de chegar a produção.
        </p>
        <div style={S.note}>
          Boa prática: todos os modelos de mart devem ter pelo menos <code>unique</code> e <code>not_null</code>
          na chave primária. Isso previne duplicados silenciosos que corrompem métricas de negócio.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Padrões de Modelação Analítica</h2>
        <p style={S.p}>
          A escolha do padrão de modelação tem impacto direto na performance das queries, na
          facilidade de manutenção e na compreensão pelos utilizadores de negócio.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Padrão</th>
              <th style={S.th}>Estrutura</th>
              <th style={S.th}>Vantagens</th>
              <th style={S.th}>Desvantagens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Star Schema (Kimball)</strong></td>
              <td style={S.td}>Tabelas de facto + dimensões normalizadas</td>
              <td style={S.td}>Performance em BI, semântica clara</td>
              <td style={S.td}>Múltiplos JOINs, mais modelos a manter</td>
            </tr>
            <tr>
              <td style={S.td}><strong>OBT (One Big Table)</strong></td>
              <td style={S.td}>Tudo desnormalizado numa tabela wide</td>
              <td style={S.td}>Queries simples, menos JOINs</td>
              <td style={S.td}>Duplicação de dados, custo de storage</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Data Vault</strong></td>
              <td style={S.td}>Hubs, Links, Satellites</td>
              <td style={S.td}>Auditabilidade, historização completa</td>
              <td style={S.td}>Complexidade alta, curva de aprendizagem</td>
            </tr>
          </tbody>
        </table>
        <p style={S.p}>
          A arquitetura recomendada com dbt segue <strong>staging &rarr; intermediate &rarr; marts</strong>:
          staging normaliza nomes e tipos; intermediate combina e enriquece; marts expõem ao negócio.
        </p>

        <LayersDiagram />

        <p style={S.p}>
          É fundamental declarar o <strong>grain</strong> de cada tabela de factos — ou seja, o que
          representa exactamente <em>uma linha</em> dessa tabela (ex: "uma linha por encomenda" vs.
          "uma linha por item de encomenda"). Se não souberes o grain, é fácil fazer um JOIN ou SUM
          que conta a mesma encomenda várias vezes:
        </p>

        <GrainDiagram />

        <p style={S.p}>
          As <strong>Slowly Changing Dimensions (SCD)</strong> são um padrão para gerir mudanças nos
          atributos de uma dimensão (ex: o cliente muda de morada) ao longo do tempo:
        </p>
        <ul style={{ color: 'var(--text-primary)', lineHeight: 2, paddingLeft: '1.25rem', marginBottom: '1rem' }}>
          <li><strong>Type 1</strong> — actualiza a linha existente. Simples, mas perde o valor antigo para sempre.</li>
          <li><strong>Type 2</strong> — em vez de UPDATE, insere uma <em>nova linha</em> com <code>valid_from</code>/<code>valid_to</code> (e opcionalmente <code>is_current</code>), fechando a linha anterior. O histórico fica todo na tabela.</li>
        </ul>

        <SCDDiagram />

        <p style={S.p}>
          Com dbt, isto implementa-se com a materialização <code>incremental</code> + a snapshot
          feature (<code>dbt snapshot</code>): o dbt compara o estado actual da fonte com o snapshot
          anterior e gera automaticamente as linhas Type 2 (fecha a antiga, abre a nova).
        </p>
      </section>

      <hr style={S.divider} />

      {/* SECTION 5 */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Semantic Layer &amp; BI Moderno</h2>
        <p style={S.p}>
          O problema central do BI tradicional: a métrica "receita" está definida de forma diferente
          no dashboard de vendas, no de finanças e no relatório executivo. Cada equipa calcula o seu
          próprio número — inconsistências inevitáveis e perda de confiança nos dados.
        </p>
        <div style={S.highlight}>
          <strong>Semantic Layer</strong> — uma camada centralizada onde as métricas, dimensões e
          relações são definidas <em>uma única vez</em> e consumidas por qualquer ferramenta de BI.
          Define "o que é receita" de forma canónica, e todos os dashboards herdam essa definição.
        </div>

        <SemanticLayerDiagram />

        <p style={S.p}>Ferramentas e abordagens principais:</p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Ferramenta</th>
              <th style={S.th}>Abordagem</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}><strong>MetricFlow / dbt Metrics</strong></td><td style={S.td}>Define métricas no dbt, expostas via API semântica</td></tr>
            <tr><td style={S.td}><strong>Cube.dev</strong></td><td style={S.td}>Semantic layer standalone com cache e API REST/GraphQL</td></tr>
            <tr><td style={S.td}><strong>LookML (Looker)</strong></td><td style={S.td}>Precursor do conceito — modelo semântico em YAML/LookML</td></tr>
            <tr><td style={S.td}><strong>Power BI Dataset</strong></td><td style={S.td}>Modelo semântico partilhado via workspace do Power BI</td></tr>
          </tbody>
        </table>
        <p style={S.p}>
          No contexto Databricks/Spark SQL, o Power BI e Tableau ligam via <strong>DirectQuery</strong>
          — queries executadas em tempo real no engine distribuído, sem importar dados — ou via
          <strong> Import Mode</strong> — snapshot dos dados na memória do BI para máxima performance
          de navegação. A escolha depende do volume, latência aceitável e frequência de atualização.
        </p>
        <div style={S.note}>
          Looker e LookML foram pioneiros: ao forçar toda a lógica de negócio para o modelo LookML,
          garantiam que "revenue" significava sempre a mesma coisa em qualquer exploração — o conceito
          que MetricFlow e Cube.dev generalizaram para todo o ecossistema.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 6 */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Stack Moderno de Analytics</h2>
        <p style={S.p}>
          O <strong>Modern Data Stack</strong> end-to-end tipicamente combina ingestão gerida,
          warehouse cloud-native, transformação com dbt e visualização conectada à semantic layer.
        </p>
        <ModernStackDiagram />
        <p style={S.p}><strong>Comparação de ferramentas de transformação:</strong></p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Ferramenta</th>
              <th style={S.th}>Paradigma</th>
              <th style={S.th}>Diferencial</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}><strong>dbt</strong></td><td style={S.td}>SQL + Jinja, open source</td><td style={S.td}>Ecossistema vasto, dbt Cloud, padrão da indústria</td></tr>
            <tr><td style={S.td}><strong>Dataform</strong></td><td style={S.td}>SQL + SQLX, integrado no GCP</td><td style={S.td}>Nativo no BigQuery, sem infra extra</td></tr>
            <tr><td style={S.td}><strong>SQLMesh</strong></td><td style={S.td}>SQL com planeamento de mudanças</td><td style={S.td}>Migrações incrementais seguras, virtual environments</td></tr>
          </tbody>
        </table>
        <p style={S.p}><strong>Comparação de ferramentas de BI:</strong></p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Ferramenta</th>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Melhor para</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}><strong>Power BI</strong></td><td style={S.td}>Comercial (Microsoft)</td><td style={S.td}>Enterprise, integração Office 365, DAX avançado</td></tr>
            <tr><td style={S.td}><strong>Tableau</strong></td><td style={S.td}>Comercial (Salesforce)</td><td style={S.td}>Exploração visual rica, adoção por analistas</td></tr>
            <tr><td style={S.td}><strong>Metabase</strong></td><td style={S.td}>Open source / cloud</td><td style={S.td}>Self-service rápido, equipas técnicas pequenas</td></tr>
            <tr><td style={S.td}><strong>Apache Superset</strong></td><td style={S.td}>Open source</td><td style={S.td}>Customização total, integração com Spark/Trino</td></tr>
            <tr><td style={S.td}><strong>Grafana</strong></td><td style={S.td}>Open source</td><td style={S.td}>Métricas operacionais, time-series, alertas</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* SYNTHESIS */}
      <section style={S.section}>
                  <h2 style={{ ...S.h2, border: 'none', paddingLeft: 0, marginBottom: '1rem' }}>Síntese do Módulo</h2>
<div style={{ background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.10)', borderRadius: 12, padding: '1.5rem 1.75rem' }}>
          <p style={S.p}>
            O <strong>Analytics Engineer</strong> opera na intersecção entre engenharia e análise —
            produz modelos SQL versionados, testados e documentados que toda a organização pode
            confiar. O <strong>dbt</strong> é a ferramenta central: modelos como ficheiros
            <code> .sql</code>, dependências via <code>ref()</code>/<code>source()</code>, DAG
            automático e testes declarativos em YAML.
          </p>
          <p style={S.p}>
            A qualidade de dados é garantida por testes genéricos (<code>unique</code>,{' '}
            <code>not_null</code>, <code>accepted_values</code>, <code>relationships</code>) e
            customizados, integrados em pipelines de CI/CD. Os padrões de modelação — Star Schema,
            OBT, Data Vault — cada um com trade-offs claros — estruturam os dados de staging até
            marts consumíveis pelo negócio, com declaração explícita de grain e suporte a SCD Type 2.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            A <strong>Semantic Layer</strong> resolve a fragmentação de métricas: uma definição
            canónica de "receita" ou "churn" propagada a todos os dashboards via MetricFlow, Cube.dev
            ou LookML. O Modern Data Stack — Fivetran &rarr; Snowflake/Databricks &rarr; dbt &rarr;
            Power BI/Looker — representa a arquitectura de referência para organizações que tratam
            dados como produto.
          </p>
        </div>
      </section>
    </div>
  );
}
