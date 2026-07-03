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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(249,115,22,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

// ─── SVG: Pipeline BI ────────────────────────────────────────────────────────
const PipelineSVG = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Pipeline: Do Dado ao Dashboard</p>
    <svg viewBox="0 0 670 100" style={{ maxWidth: '100%', height: 'auto' }}>
      {[
        { x: 5,   label: 'Data Sources', sub: 'BD, APIs, Logs', c: '#f97316' },
        { x: 119, label: 'ETL / ELT',    sub: 'dbt, Airbyte',  c: '#f97316' },
        { x: 233, label: 'Data Warehouse', sub: 'BQ, Redshift', c: '#f97316' },
        { x: 347, label: 'Semantic Layer', sub: 'LookML, dbt',  c: '#f97316' },
        { x: 461, label: 'BI Tool',       sub: 'Tableau, PBI', c: '#f97316' },
        { x: 575, label: 'Dashboard',     sub: 'Utilizador',   c: '#f97316' },
      ].map(({ x, label, sub, c }, i) => (
        <g key={label}>
          <rect x={x} y={18} width={90} height={44} rx={8} fill={`${c}22`} stroke={c} strokeWidth={1.5} />
          <text x={x + 45} y={37} textAnchor="middle" fill={c} fontSize={8} fontWeight="700">{label}</text>
          <text x={x + 45} y={50} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>{sub}</text>
          {i < 5 && (
            <path d={`M${x + 92},40 L${x + 117},40`} stroke="var(--text-secondary)" strokeWidth={1.5} markerEnd="url(#arr)" fill="none" />
          )}
        </g>
      ))}
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
    </svg>
  </div>
);

// ─── SVG: Arquitectura Power BI ──────────────────────────────────────────────
const PowerBISVG = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Arquitectura Power BI</p>
    <svg viewBox="0 0 560 140" style={{ maxWidth: '100%', height: 'auto' }}>
      {[
        { x: 20,  label: 'Power Query', sub: 'ETL (M Language)', c: '#f97316' },
        { x: 155, label: 'Data Model',  sub: 'Relações + Schema', c: '#f97316' },
        { x: 290, label: 'DAX Engine',  sub: 'Métricas calculadas', c: '#f97316' },
        { x: 425, label: 'Report',      sub: 'Visuals + Filtros', c: '#f97316' },
      ].map(({ x, label, sub, c }, i) => (
        <g key={label}>
          <rect x={x} y={40} width={118} height={56} rx={10} fill={`${c}20`} stroke={c} strokeWidth={1.5} />
          <text x={x + 59} y={65} textAnchor="middle" fill={c} fontSize={9} fontWeight="700">{label}</text>
          <text x={x + 59} y={81} textAnchor="middle" fill="var(--text-secondary)" fontSize={7.5}>{sub}</text>
          {i < 3 && (
            <path d={`M${x + 120},68 L${x + 134},68`} stroke="var(--text-secondary)" strokeWidth={1.5} markerEnd="url(#arr2)" fill="none" />
          )}
        </g>
      ))}
      <defs>
        <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <text x={280} y={18} textAnchor="middle" fill="var(--text-secondary)" fontSize={8}>Power BI Desktop → Power BI Service (cloud)</text>
    </svg>
  </div>
);

// ─── SVG: Star Schema ────────────────────────────────────────────────────────
const StarSchemaSVG = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Star Schema no Power BI</p>
    <svg viewBox="0 0 400 300" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Centro - Fact Table */}
      <rect x={140} y={110} width={120} height={60} rx={10} fill={`${color}22`} stroke={color} strokeWidth={2} />
      <text x={200} y={136} textAnchor="middle" fill={color} fontSize={9} fontWeight="700">Fact_Vendas</text>
      <text x={200} y={150} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>id_data, id_produto</text>
      <text x={200} y={162} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>id_cliente, valor</text>
      {/* Dim_Data - topo */}
      <rect x={140} y={10} width={120} height={50} rx={8} fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth={1.5} />
      <text x={200} y={32} textAnchor="middle" fill="#f97316" fontSize={8.5} fontWeight="700">Dim_Data</text>
      <text x={200} y={48} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>ano, mês, dia</text>
      <line x1={200} y1={60} x2={200} y2={110} stroke="var(--text-secondary)" strokeWidth={1.5} strokeDasharray="4,2" />
      {/* Dim_Produto - direita */}
      <rect x={275} y={110} width={115} height={50} rx={8} fill="rgba(249,115,22,0.08)" stroke="#fb923c" strokeWidth={1.5} />
      <text x={332} y={132} textAnchor="middle" fill="#fb923c" fontSize={8.5} fontWeight="700">Dim_Produto</text>
      <text x={332} y={148} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>nome, categoria</text>
      <line x1={260} y1={140} x2={275} y2={140} stroke="var(--text-secondary)" strokeWidth={1.5} strokeDasharray="4,2" />
      {/* Dim_Cliente - esquerda */}
      <rect x={10} y={110} width={115} height={50} rx={8} fill="rgba(249,115,22,0.08)" stroke="#fbbf24" strokeWidth={1.5} />
      <text x={67} y={132} textAnchor="middle" fill="#fbbf24" fontSize={8.5} fontWeight="700">Dim_Cliente</text>
      <text x={67} y={148} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>nome, segmento</text>
      <line x1={125} y1={140} x2={140} y2={140} stroke="var(--text-secondary)" strokeWidth={1.5} strokeDasharray="4,2" />
      {/* Dim_Loja - baixo */}
      <rect x={140} y={240} width={120} height={50} rx={8} fill="rgba(249,115,22,0.08)" stroke="#f59e0b" strokeWidth={1.5} />
      <text x={200} y={262} textAnchor="middle" fill="#f59e0b" fontSize={8.5} fontWeight="700">Dim_Loja</text>
      <text x={200} y={278} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>cidade, região</text>
      <line x1={200} y1={170} x2={200} y2={240} stroke="var(--text-secondary)" strokeWidth={1.5} strokeDasharray="4,2" />
    </svg>
  </div>
);

// ─── SVG: LookML Semantic Layer ──────────────────────────────────────────────
const LookMLSVG = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>LookML — Camada Semântica entre SQL e o Utilizador</p>
    <svg viewBox="0 0 480 180" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* DW */}
      <rect x={10} y={65} width={100} height={50} rx={8} fill="rgba(249,115,22,0.08)" stroke="#fb923c" strokeWidth={1.5} />
      <text x={60} y={87} textAnchor="middle" fill="#fb923c" fontSize={8.5} fontWeight="700">Data Warehouse</text>
      <text x={60} y={102} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>BigQuery / Redshift</text>
      {/* LookML */}
      <rect x={175} y={50} width={130} height={80} rx={10} fill={`${color}22`} stroke={color} strokeWidth={2} />
      <text x={240} y={80} textAnchor="middle" fill={color} fontSize={9} fontWeight="700">LookML</text>
      <text x={240} y={96} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>views, dimensions</text>
      <text x={240} y={110} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>measures, explores</text>
      <text x={240} y={124} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>single source of truth</text>
      {/* Utilizador */}
      <rect x={370} y={65} width={100} height={50} rx={8} fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth={1.5} />
      <text x={420} y={87} textAnchor="middle" fill="#f97316" fontSize={8.5} fontWeight="700">Utilizador</text>
      <text x={420} y={102} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>Explore / Dashboard</text>
      {/* Setas */}
      <path d="M112,90 L173,90" stroke="var(--text-secondary)" strokeWidth={1.5} markerEnd="url(#arr3)" fill="none" />
      <path d="M307,90 L368,90" stroke="var(--text-secondary)" strokeWidth={1.5} markerEnd="url(#arr3)" fill="none" />
      <defs>
        <marker id="arr3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <text x={240} y={158} textAnchor="middle" fill="var(--text-secondary)" fontSize={7.5}>SQL gerado automaticamente pelo Looker com base no LookML</text>
    </svg>
  </div>
);

// ─── SVG: Grafana Dashboard Mockup ───────────────────────────────────────────
const GrafanaSVG = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Mockup de Dashboard Grafana — Observabilidade</p>
    <svg viewBox="0 0 560 300" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Fundo do painel */}
      <rect x={0} y={0} width={560} height={300} rx={12} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={1} />
      {/* Título */}
      <text x={16} y={22} fill="#F46800" fontSize={10} fontWeight="700">Grafana — Infrastructure Overview</text>
      <line x1={0} y1={30} x2={560} y2={30} stroke="var(--text-secondary)" strokeWidth={1} />

      {/* Gauge CPU */}
      <rect x={10} y={38} width={155} height={100} rx={8} fill="#1a1a2e" stroke="#F4680033" strokeWidth={1} />
      <text x={87} y={56} textAnchor="middle" fill="#aaa" fontSize={7}>CPU %</text>
      <circle cx={87} cy={96} r={32} fill="none" stroke="#333" strokeWidth={8} />
      <circle cx={87} cy={96} r={32} fill="none" stroke="#F46800" strokeWidth={8} strokeDasharray="100 101" strokeLinecap="round" transform="rotate(-90 87 96)" />
      <text x={87} y={100} textAnchor="middle" fill="#F46800" fontSize={11} fontWeight="700">62%</text>
      <text x={87} y={122} textAnchor="middle" fill="#aaa" fontSize={6.5}>threshold: 80%</text>

      {/* Gauge Memória */}
      <rect x={172} y={38} width={155} height={100} rx={8} fill="#1a1a2e" stroke="#f9731633" strokeWidth={1} />
      <text x={249} y={56} textAnchor="middle" fill="#aaa" fontSize={7}>Memória %</text>
      <circle cx={249} cy={96} r={32} fill="none" stroke="#333" strokeWidth={8} />
      <circle cx={249} cy={96} r={32} fill="none" stroke="#94a3b8" strokeWidth={8} strokeDasharray="78 101" strokeLinecap="round" transform="rotate(-90 249 96)" />
      <text x={249} y={100} textAnchor="middle" fill="#94a3b8" fontSize={11} fontWeight="700">78%</text>
      <text x={249} y={122} textAnchor="middle" fill="#aaa" fontSize={6.5}>threshold: 85%</text>

      {/* Gauge Latência */}
      <rect x={334} y={38} width={216} height={100} rx={8} fill="#1a1a2e" stroke="#f9731633" strokeWidth={1} />
      <text x={442} y={56} textAnchor="middle" fill="#aaa" fontSize={7}>Latência p99 (ms)</text>
      <circle cx={442} cy={96} r={32} fill="none" stroke="#333" strokeWidth={8} />
      <circle cx={442} cy={96} r={32} fill="none" stroke="#f97316" strokeWidth={8} strokeDasharray="40 101" strokeLinecap="round" transform="rotate(-90 442 96)" />
      <text x={442} y={100} textAnchor="middle" fill="#f97316" fontSize={11} fontWeight="700">120ms</text>
      <text x={442} y={122} textAnchor="middle" fill="#aaa" fontSize={6.5}>threshold: 300ms</text>

      {/* Time series */}
      <rect x={10} y={148} width={540} height={148} rx={8} fill="#1a1a2e" stroke="#F4680033" strokeWidth={1} />
      <text x={40} y={165} fill="#aaa" fontSize={7}>Requests / segundo — últimas 3 horas</text>

      {/* Zona de alerta */}
      <rect x={390} y={160} width={150} height={80} fill="#ef444420" />
      <text x={485} y={175} textAnchor="middle" fill="#f97316" fontSize={6.5}>ALERTA: spike</text>

      {/* Linha de série temporal */}
      <polyline
        points="20,240 60,220 100,215 140,210 180,218 220,205 260,200 300,212 340,208 370,205 390,190 410,165 430,168 450,172 480,195 520,210 545,215"
        fill="none" stroke="#F46800" strokeWidth={2} />

      {/* Linha de threshold */}
      <line x1={20} y1={180} x2={545} y2={180} stroke="#f97316" strokeWidth={1} strokeDasharray="4,3" />
      <text x={528} y={193} fill="#f97316" fontSize={6}>SLO</text>

      {/* Eixo Y */}
      <line x1={20} y1={160} x2={20} y2={275} stroke="#444" strokeWidth={1} />
      <text x={18} y={165} textAnchor="end" fill="#666" fontSize={6}>1000</text>
      <text x={18} y={220} textAnchor="end" fill="#666" fontSize={6}>500</text>
      <text x={18} y={275} textAnchor="end" fill="#666" fontSize={6}>0</text>
    </svg>
  </div>
);

// ─── SVG: Arquitectura Superset ──────────────────────────────────────────────
const SupersetSVG = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Arquitectura Apache Superset</p>
    <svg viewBox="0 0 570 120" style={{ maxWidth: '100%', height: 'auto' }}>
      {[
        { x: 10,  label: 'Browser', sub: 'React UI', c: '#f97316' },
        { x: 153, label: 'Flask API', sub: 'Superset Backend', c: '#f97316' },
        { x: 296, label: 'SQLAlchemy', sub: 'ORM / Dialects', c: '#f97316' },
        { x: 439, label: 'Database', sub: 'BQ, Trino, DuckDB...', c: '#f97316' },
      ].map(({ x, label, sub, c }, i) => (
        <g key={label}>
          <rect x={x} y={30} width={120} height={56} rx={8} fill={`${c}20`} stroke={c} strokeWidth={1.5} />
          <text x={x + 60} y={56} textAnchor="middle" fill={c} fontSize={9} fontWeight="700">{label}</text>
          <text x={x + 60} y={73} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>{sub}</text>
          {i < 3 && (
            <path d={`M${x + 122},58 L${x + 151},58`} stroke="var(--text-secondary)" strokeWidth={1.5} markerEnd="url(#arr4)" fill="none" />
          )}
        </g>
      ))}
      <defs>
        <marker id="arr4" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <text x={290} y={108} textAnchor="middle" fill="var(--text-secondary)" fontSize={7.5}>Cache: Redis · Workers: Celery · Auth: OAuth / LDAP / SAML</text>
    </svg>
  </div>
);

// ─── SVG: Embedded Analytics ─────────────────────────────────────────────────
const EmbeddedSVG = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Embedded Analytics — Dashboard dentro de uma Aplicação Web</p>
    <svg viewBox="0 0 480 220" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Outer app */}
      <rect x={5} y={5} width={470} height={210} rx={12} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={1.5} />
      <text x={20} y={26} fill="var(--text-secondary)" fontSize={8.5} fontWeight="700">Aplicação Web (cliente)</text>
      {/* Navbar */}
      <rect x={5} y={5} width={470} height={30} rx={12} fill={`${color}18`} stroke="none" />

      {/* Sidebar */}
      <rect x={5} y={35} width={80} height={180} rx={0} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={1} />
      <text x={45} y={60} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>Dashboard</text>
      <text x={45} y={76} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>Relatórios</text>
      <text x={45} y={92} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>Definições</text>

      {/* iframe container */}
      <rect x={95} y={42} width={375} height={165} rx={8} fill="#00000010" stroke={color} strokeWidth={1.5} strokeDasharray="5,3" />
      <text x={283} y={60} textAnchor="middle" fill={color} fontSize={7.5} fontWeight="700">{'<iframe> — Dashboard Embebido'}</text>

      {/* Mini dashboard inside */}
      <rect x={105} y={66} width={170} height={130} rx={6} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={1} />
      <text x={190} y={84} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>Gráfico 1</text>
      <polyline points="115,140 135,120 155,130 175,110 195,125 215,108 255,115" fill="none" stroke={color} strokeWidth={1.5} />

      <rect x={285} y={66} width={175} height={60} rx={6} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={1} />
      <text x={372} y={84} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>KPI Cards</text>
      <rect x={295} y={92} width={50} height={24} rx={4} fill={`${color}20`} stroke={color} strokeWidth={1} />
      <text x={320} y={107} textAnchor="middle" fill={color} fontSize={8} fontWeight="700">1.2M</text>
      <rect x={355} y={92} width={50} height={24} rx={4} fill={`${color}20`}  stroke="#f97316" strokeWidth={1} />
      <text x={380} y={107} textAnchor="middle" fill="#f97316" fontSize={8} fontWeight="700">94%</text>

      <rect x={285} y={136} width={175} height={60} rx={6} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={1} />
      <text x={372} y={154} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>Tabela (RLS: só dados do user)</text>
      <line x1={295} y1={165} x2={450} y2={165} stroke="var(--text-secondary)" strokeWidth={1} />
      <text x={320} y={178} textAnchor="middle" fill="var(--text-secondary)" fontSize={6.5}>Utilizador A — 3 linhas</text>
    </svg>
  </div>
);

// ─── SVG: Pipeline Real-Time ─────────────────────────────────────────────────
const RealTimeSVG = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Pipeline Real-Time: Kafka → Flink → ClickHouse → Grafana</p>
    <svg viewBox="0 0 640 120" style={{ maxWidth: '100%', height: 'auto' }}>
      {[
        { x: 8,   label: 'Kafka',      sub: 'Event Stream',      c: '#f97316' },
        { x: 136, label: 'Flink',      sub: 'Stream Processing', c: '#fb923c' },
        { x: 264, label: 'ClickHouse', sub: 'OLAP Store',        c: '#fbbf24' },
        { x: 392, label: 'Grafana',    sub: 'Dashboards',        c: '#F46800' },
        { x: 520, label: 'Browser',    sub: 'Utilizador',        c: '#f97316' },
      ].map(({ x, label, sub, c }, i) => (
        <g key={label}>
          <rect x={x} y={30} width={108} height={52} rx={8} fill={`${c}22`} stroke={c} strokeWidth={1.5} />
          <text x={x + 54} y={53} textAnchor="middle" fill={c} fontSize={8.5} fontWeight="700">{label}</text>
          <text x={x + 54} y={68} textAnchor="middle" fill="var(--text-secondary)" fontSize={7}>{sub}</text>
          {i < 4 && (
            <path d={`M${x + 110},56 L${x + 126},56`} stroke="var(--text-secondary)" strokeWidth={1.5} markerEnd="url(#arr5)" fill="none" />
          )}
        </g>
      ))}
      <defs>
        <marker id="arr5" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <text x={300} y={108} textAnchor="middle" fill="var(--text-secondary)" fontSize={7.5}>Latência end-to-end: sub-segundo a segundos, conforme o SLA</text>
    </svg>
  </div>
);

// ─── Componente principal ────────────────────────────────────────────────────
export default function DV9() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/dv" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>MÓDULO 09</div>
        <h1 style={S.h1}>Plataformas de BI &amp; Visualização Enterprise</h1>
        <p style={S.lead}>
          Além de Python e Jupyter, existe um ecossistema rico de plataformas que democratizam o acesso a dados para
          equipas não-técnicas, automatizam relatórios e monitorizam sistemas em produção em tempo real. Tableau,
          Power BI, Looker, Grafana, Superset e Metabase servem audiências e casos de uso distintos — compreender
          onde cada um se encaixa é essencial para qualquer engenheiro ou analista de dados moderno.
        </p>

        {/* ── Secção 1 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>1. Ecossistema BI — Do Dado ao Dashboard</h2>
          <p style={S.p}>
            A jornada de um dado bruto até aparecer num dashboard percorre vários estágios. Os dados chegam de fontes
            diversas (bases de dados transaccionais, APIs externas, ficheiros de log, streams de eventos), são
            transformados por pipelines ETL/ELT, carregados num Data Warehouse analítico, expostos através de uma
            camada semântica e finalmente visualizados numa ferramenta de BI.
          </p>
          <PipelineSVG />
          <p style={S.p}>
            A <strong>camada semântica</strong> é frequentemente ignorada por equipas jovens, mas é crítica em
            organizações maiores: define métricas de forma centralizada (o que é "receita"? o que é "cliente activo"?)
            para que diferentes dashboards usem sempre a mesma definição.
          </p>

          <h3 style={S.h3}>Self-Service BI vs. Embedded Analytics vs. Operational Dashboards</h3>
          <p style={S.p}>
            <strong>Self-service BI</strong> permite a analistas de negócio explorar dados sem depender de engenheiros
            — ferramentas como Tableau, Power BI e Metabase são desenhadas para este caso. <strong>Embedded
            analytics</strong> integra dashboards directamente numa aplicação web ou produto SaaS que os clientes
            usam — a marca da ferramenta de BI fica invisível. <strong>Operational dashboards</strong> monitorizam
            sistemas em tempo real (Grafana, Datadog) e estão mais próximos da engenharia de software que do BI
            tradicional.
          </p>

          <h3 style={S.h3}>Posicionamento no Mercado</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Ferramenta</th>
                  <th style={S.th}>Segmento</th>
                  <th style={S.th}>Modelo</th>
                  <th style={S.th}>Ponto diferenciador</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Tableau',   'Enterprise BI',      'Pago',         'Melhor UX de arrastar-e-largar'],
                  ['Power BI',  'BI Microsoft',       'Pago (barato)','Integração Azure/Office 365'],
                  ['Looker',    'Semantic Layer',     'Pago (caro)',  'LookML — métricas em código'],
                  ['Metabase',  'Self-service PME',   'Open-source',  'Setup em minutos com Docker'],
                  ['Superset',  'SQL-first BI',       'Open-source',  '40+ databases, SQL Lab integrado'],
                  ['Grafana',   'Observabilidade',    'Open-source',  'Séries temporais, alertas, ops'],
                ].map(([f, s, m, d]) => (
                  <tr key={f}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{f}</td>
                    <td style={S.td}>{s}</td>
                    <td style={S.td}>{m}</td>
                    <td style={S.td}>{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 2 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>2. Power BI — Arquitectura e DAX</h2>
          <p style={S.p}>
            Power BI é a plataforma de BI da Microsoft e uma das mais utilizadas no mundo. A sua arquitectura
            divide-se em quatro componentes principais que formam uma pipeline dentro do próprio produto.
          </p>
          <PowerBISVG />

          <p style={S.p}>
            O <strong>Power Query</strong> é a camada de ETL visual do Power BI, baseada na linguagem M. Permite
            importar dados de centenas de fontes, fazer limpeza, pivotagem e junções sem escrever SQL. O
            <strong> Data Model</strong> define as relações entre tabelas — idealmente num star schema com uma tabela
            de factos central e dimensões satélite. O <strong>DAX (Data Analysis Expressions)</strong> é a linguagem
            de fórmulas para calcular métricas derivadas sobre o modelo.
          </p>

          <h3 style={S.h3}>DAX — Exemplos de Fórmulas</h3>
          <p style={S.p}>
            DAX parece Excel mas avalia no contexto do modelo relacional. As funções mais importantes são
            <code style={{ background: 'var(--bg-secondary)', padding: '0.1rem 0.4rem', borderRadius: 4, fontSize: '0.85rem' }}> CALCULATE</code>,
            <code style={{ background: 'var(--bg-secondary)', padding: '0.1rem 0.4rem', borderRadius: 4, fontSize: '0.85rem' }}> FILTER</code>,
            <code style={{ background: 'var(--bg-secondary)', padding: '0.1rem 0.4rem', borderRadius: 4, fontSize: '0.85rem' }}> RELATED</code> e
            <code style={{ background: 'var(--bg-secondary)', padding: '0.1rem 0.4rem', borderRadius: 4, fontSize: '0.85rem' }}> SUMX</code>.
          </p>

          <div style={S.note}>
            DAX avalia em dois contextos: <strong>filter context</strong> (os filtros activos no relatório) e
            <strong> row context</strong> (a linha actual numa iteração). A confusão entre os dois é a fonte de
            maioria dos bugs DAX.
          </div>

          <h3 style={S.h3}>Star Schema no Power BI</h3>
          <p style={S.p}>
            O star schema é o padrão recomendado pela Microsoft para modelos Power BI. A tabela de factos contém
            métricas numéricas e chaves estrangeiras; as dimensões contêm atributos descritivos. Este modelo maximiza
            a performance do motor VertiPaq (coluna comprimida) e simplifica a escrita de DAX.
          </p>
          <StarSchemaSVG />
        </div>

        <hr style={S.divider} />

        {/* ── Secção 3 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>3. Looker e LookML — Semantic Layer</h2>
          <p style={S.p}>
            O Looker (adquirido pela Google em 2020) diferencia-se fundamentalmente de todas as outras ferramentas de
            BI por uma razão: as métricas são definidas em <strong>código (LookML)</strong>, não arrastadas
            graficamente em cada dashboard. Isto elimina o problema clássico em que dois dashboards mostram valores
            diferentes para "receita total" porque foram construídos com lógicas ligeiramente diferentes.
          </p>
          <LookMLSVG />

          <h3 style={S.h3}>Conceitos LookML</h3>
          <p style={S.p}>
            LookML organiza-se em <strong>views</strong> (mapeiam para tabelas ou queries SQL), <strong>dimensions</strong>
            (atributos/colunas), <strong>measures</strong> (métricas agregadas) e <strong>explores</strong>
            (pontos de entrada para análise, com joins pré-configurados).
          </p>

          <div style={S.highlight}>
            <strong>Vantagem chave:</strong> Quando a definição de "cliente activo" muda, actualiza-se o LookML uma
            vez. Todos os explores e dashboards que usam essa measure ficam automaticamente correctos. Sem LookML,
            seria necessário actualizar dezenas de dashboards manualmente.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 4 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>4. Grafana — Observabilidade e Métricas Técnicas</h2>
          <p style={S.p}>
            Grafana não é uma ferramenta de BI — é uma plataforma de observabilidade. O seu foco são <strong>séries
            temporais</strong>: métricas de infraestrutura, performance de aplicações, qualidade de dados em
            pipelines e comportamento de modelos de machine learning em produção. É a escolha padrão em equipas de
            engenharia para monitorização operacional.
          </p>

          <h3 style={S.h3}>Data Sources Suportados</h3>
          <p style={S.p}>
            Grafana não armazena dados — liga-se a sources externas. As mais comuns são <strong>Prometheus</strong>
            (métricas de infra e aplicação), <strong>InfluxDB</strong> (séries temporais de alta ingestão),
            <strong> Loki</strong> (logs), <strong>Elasticsearch</strong> (pesquisa e analytics) e bases de dados
            SQL (PostgreSQL, MySQL). O ecossistema de plugins da comunidade adiciona dezenas de outros.
          </p>

          <h3 style={S.h3}>Tipos de Painéis</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Painel</th>
                  <th style={S.th}>Quando usar</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Time series', 'Evolução de uma métrica ao longo do tempo (CPU, requests/s, latência)'],
                  ['Gauge',       'Valor actual vs. threshold (percentagem, temperatura, score de saúde)'],
                  ['Stat',        'KPI único com comparação ao período anterior'],
                  ['Table',       'Listagens com múltiplas colunas e ordenação'],
                  ['Heatmap',     'Distribuição de latências ou erros por hora do dia'],
                  ['Logs',        'Stream de logs em tempo real via Loki'],
                  ['Bar chart',   'Comparação entre categorias numa janela temporal'],
                ].map(([p, u]) => (
                  <tr key={p}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{p}</td>
                    <td style={S.td}>{u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <GrafanaSVG />

          <h3 style={S.h3}>Alertas no Grafana</h3>
          <p style={S.p}>
            Grafana tem um sistema de alertas nativo que avalia queries periodicamente e envia notificações quando
            thresholds são ultrapassados. Suporta routing para <strong>PagerDuty, Slack, OpsGenie, email e
            webhooks</strong>. O <strong>Alertmanager</strong> (de Prometheus) pode ser integrado para silenciamento
            e agrupamento de alertas. Em cenários de produção de ML, alertas de Grafana detectam degradação de
            métricas de modelo (accuracy drop, drift de features) antes de impactar utilizadores.
          </p>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 5 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>5. Apache Superset — Open Source BI</h2>
          <p style={S.p}>
            Apache Superset foi criado originalmente pelo Airbnb e doado à Apache Software Foundation. É a
            alternativa open-source mais completa ao Tableau: <strong>SQL-first</strong>, liga-se a mais de
            40 bases de dados (incluindo Trino, DuckDB, BigQuery, Spark SQL, ClickHouse, Redshift, PostgreSQL),
            e inclui um SQL Lab integrado para análise ad-hoc.
          </p>

          <SupersetSVG />

          <h3 style={S.h3}>Funcionalidades Principais</h3>
          <p style={S.p}>
            O Superset suporta uma vasta gama de tipos de gráfico através da biblioteca ECharts: barras, linhas,
            scatter, treemap, funnel, mapas coropléticos, sunburst e mais. Os dashboards suportam
            <strong> filtros nativos</strong> e <strong>cross-filtering</strong> (clicar num gráfico filtra
            automaticamente os outros no mesmo dashboard). A autenticação é flexível: suporta OAuth, LDAP, SAML
            e integração com plataformas como Okta e Azure AD.
          </p>

          <h3 style={S.h3}>Comparação: Superset vs. Metabase vs. Redash</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Critério</th>
                  <th style={S.th}>Apache Superset</th>
                  <th style={S.th}>Metabase</th>
                  <th style={S.th}>Redash</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Foco principal',     'BI SQL-first, análise',         'Self-service sem SQL',       'Queries SQL e dashboards'],
                  ['Facilidade de setup','Moderada (Docker recomendado)', 'Alta (Docker simples)',      'Alta'],
                  ['SQL obrigatório',    'Não (mas recomendado)',          'Não (GUI-first)',            'Sim'],
                  ['Tipos de gráfico',   'Muito vasto (ECharts)',          'Médio',                     'Básico'],
                  ['Bases de dados',     '40+ (Trino, DuckDB, Spark)',     '20+ principais',            '35+'],
                  ['Embedding',          'Sim (JWT token)',                'Sim (Enterprise pago)',     'Limitado'],
                  ['Manutenção',         'Mais complexa',                  'Simples',                   'Simples'],
                  ['Comunidade',         'Grande (Apache)',                'Grande',                    'Menor'],
                ].map(([c, s, m, r]) => (
                  <tr key={c}>
                    <td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)' }}>{c}</td>
                    <td style={S.td}>{s}</td>
                    <td style={S.td}>{m}</td>
                    <td style={S.td}>{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.note}>
            Para uma equipa técnica que quer controlo total e boa integração com Spark/Trino, Superset é a melhor
            escolha open-source. Para uma startup que precisa de BI rápido sem overhead de manutenção, Metabase é
            mais simples de operar.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 6 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>6. Embedded Analytics</h2>
          <p style={S.p}>
            Embedded analytics consiste em integrar dashboards e visualizações directamente numa aplicação web,
            de forma a que os utilizadores finais nunca saiam do produto para consultar dados. A ferramenta de BI
            fica invisível — o utilizador experiencia os gráficos como parte natural da aplicação.
          </p>
          <EmbeddedSVG />

          <h3 style={S.h3}>Métodos de Embedding</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Método</th>
                  <th style={S.th}>Como funciona</th>
                  <th style={S.th}>Vantagens</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['iframe + URL token',  'URL assinado com JWT, embebido em iframe',     'Simples, sem SDK'],
                  ['SDK JavaScript',      'Biblioteca JS controla o iframe e eventos',    'Mais controlo, eventos bidirecionais'],
                  ['API + render próprio','Query via API, render com D3/Echarts próprio', 'Máximo controlo visual'],
                ].map(([m, h, v]) => (
                  <tr key={m}><td style={{ ...S.td, fontWeight: 600 }}>{m}</td><td style={S.td}>{h}</td><td style={S.td}>{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Row-Level Security (RLS)</h3>
          <p style={S.p}>
            Em cenários de embedding multi-tenant, cada utilizador deve ver <strong>apenas os seus próprios
            dados</strong>. O RLS implementa isto adicionando filtros automaticamente às queries com base na
            identidade do utilizador (passada no token JWT). Por exemplo, um gestor de conta vê apenas os clientes
            da sua carteira, mesmo que o dashboard seja partilhado entre todos.
          </p>

          <h3 style={S.h3}>Ferramentas e Modelo de Preços</h3>
          <p style={S.p}>
            As principais ferramentas para embedded analytics são <strong>Looker Embed</strong> (Google Cloud),
            <strong> Power BI Embedded</strong> (Azure), <strong>Sigma Computing</strong> e
            <strong> Lightdash</strong> (open-source). O modelo de preços varia significativamente:
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Modelo</th>
                  <th style={S.th}>Descrição</th>
                  <th style={S.th}>Ideal para</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Por seat (criador)',   'Paga por utilizador que cria conteúdo',    'Equipas internas de BI'],
                  ['Por viewer',          'Paga por utilizador que vê dashboards',    'Distribuição interna larga'],
                  ['Por embed (capacidade)','Paga por capacidade de compute, não por user', 'Produtos SaaS com muitos clientes finais'],
                ].map(([m, d, i]) => (
                  <tr key={m}><td style={{ ...S.td, fontWeight: 600 }}>{m}</td><td style={S.td}>{d}</td><td style={S.td}>{i}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 7 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>7. Real-Time Dashboards</h2>
          <p style={S.p}>
            Dashboards em tempo real exigem um mecanismo para entregar novos dados ao browser sem que o utilizador
            recarregue a página. Há três padrões principais, cada um com trade-offs diferentes.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Padrão</th>
                  <th style={S.th}>Como funciona</th>
                  <th style={S.th}>Latência</th>
                  <th style={S.th}>Complexidade</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Polling',   'Browser faz pedido HTTP a cada N segundos',    '5s–60s',    'Baixa'],
                  ['SSE',       'Servidor envia eventos push via HTTP stream',   '1s–5s',     'Média'],
                  ['WebSocket', 'Ligação bidirecional persistente TCP',          'sub-segundo','Alta'],
                ].map(([p, h, l, c]) => (
                  <tr key={p}><td style={{ ...S.td, fontWeight: 600 }}>{p}</td><td style={S.td}>{h}</td><td style={S.td}>{l}</td><td style={S.td}>{c}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <RealTimeSVG />

          <h3 style={S.h3}>Stacks Real-Time em Produção</h3>
          <p style={S.p}>
            O stack mais comum para dashboards operacionais em tempo real combina <strong>Kafka ou Redpanda</strong>
            como barramento de eventos, <strong>Apache Flink ou Spark Structured Streaming</strong> para
            processamento, <strong>ClickHouse</strong> como store OLAP de baixa latência (queries em
            milissegundos mesmo com biliões de linhas), e <strong>Grafana</strong> para visualização com refresh
            automático.
          </p>

          <div style={S.highlight}>
            <strong>Trade-offs fundamentais:</strong>
            <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
              <li><strong>Latência vs. custo:</strong> ClickHouse + Flink são caros de operar; polling simples a uma réplica de leitura cobre 90% dos casos.</li>
              <li><strong>Latência vs. complexidade:</strong> WebSockets requerem gestão de estado de ligação; SSE é mais simples e suficiente para a maioria dos cenários.</li>
              <li><strong>Real-time vs. freshness:</strong> Na prática, dados com 30 segundos de atraso são "real-time" para a maioria dos dashboards de negócio.</li>
            </ul>
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 8 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>8. Governança e Documentação de Dashboards</h2>
          <p style={S.p}>
            A proliferação de dashboards sem governança cria o fenómeno do <em>"dashboard graveyard"</em>: dezenas
            de dashboards desactualizados, com definições contraditórias, sem dono claro. Governança de BI não é
            burocracia — é o que permite que os dados sejam efectivamente confiáveis e usados.
          </p>

          <h3 style={S.h3}>Data Catalog</h3>
          <p style={S.p}>
            Um data catalog documenta automaticamente os datasets disponíveis, as suas colunas, o linhamento
            (de onde vieram os dados), as métricas definidas e quem os usa. As principais ferramentas são:
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Ferramenta</th>
                  <th style={S.th}>Função principal</th>
                  <th style={S.th}>Open-source</th>
                  <th style={S.th}>Quando usar</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['dbt docs',   'Documentar modelos dbt + linhamento SQL',         'Sim',   'Equipas que já usam dbt'],
                  ['DataHub',    'Catálogo enterprise com linhamento cross-sistema', 'Sim',   'Organizações com múltiplos sistemas de dados'],
                  ['Atlan',      'Catálogo SaaS com colaboração e glossário',        'Não',   'Empresas que querem SaaS sem infra própria'],
                  ['OpenMetadata','Catálogo open-source com qualidade de dados',     'Sim',   'Alternativa open-source ao Atlan'],
                  ['Alation',    'Catálogo enterprise com AI assistente',            'Não',   'Grandes empresas com orçamento elevado'],
                ].map(([f, fn, o, q]) => (
                  <tr key={f}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{f}</td>
                    <td style={S.td}>{fn}</td>
                    <td style={S.td}>{o}</td>
                    <td style={S.td}>{q}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Versionamento de Dashboards</h3>
          <p style={S.p}>
            O grande problema de ferramentas de BI tradicionais é que dashboards são objectos visuais armazenados
            numa base de dados proprietária — não há git diff, não há revisão de código, não há rollback. As
            abordagens modernas para resolver isto incluem:
          </p>
          <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, color: 'var(--text-primary)', fontSize: '1rem' }}>
            <li><strong>Terraform para BI:</strong> ferramentas como Lightdash, Looker e algumas versões de Grafana suportam configuração-como-código. Dashboards definem-se em YAML/HCL e são geridos com Terraform ou Pulumi.</li>
            <li><strong>dbt + Superset:</strong> os modelos dbt são versionados em git; os dashboards Superset podem ser exportados como JSON e comitados.</li>
            <li><strong>Grafana Provisioning:</strong> dashboards Grafana podem ser definidos em ficheiros JSON e provisionados automaticamente — integra com GitOps.</li>
          </ul>

          <h3 style={S.h3}>O Problema das Definições: "O Que é um Cliente Activo?"</h3>
          <p style={S.p}>
            Sem governança, cada analista cria a sua própria definição no dashboard. O resultado: o CEO recebe
            três números diferentes de três dashboards diferentes para a mesma pergunta. A solução passa por:
          </p>
          <div style={S.highlight}>
            <ol style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 2 }}>
              <li>Definir as métricas de negócio em <strong>código</strong> (LookML, dbt metrics, Cube.dev) — uma única fonte de verdade.</li>
              <li>Documentar as definições no <strong>data catalog</strong> com exemplos e edge cases.</li>
              <li>Rever e aprovar alterações a métricas core como se fossem código de produção (pull request + review).</li>
              <li>Deprecar métricas antigas explicitamente — nunca deixar definições contraditórias coexistir silenciosamente.</li>
            </ol>
          </div>

          <div style={S.note}>
            O stack de governança mais adoptado em 2024–2025: <strong>dbt</strong> para transformações e métricas
            + <strong>DataHub ou dbt docs</strong> para catálogo + <strong>Superset ou Lightdash</strong> para
            dashboards versionados em git. Este stack é 100% open-source e cover a maioria dos casos.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Síntese ── */}
        <div style={S.section}>
          <h2 style={S.h2}> 9. Síntese do Módulo</h2>
          <p style={S.p}>
            Este módulo fechou o percurso do curso DV com uma visão do ecossistema de plataformas que complementam
            as competências de programação. Saber construir visualizações em Python/D3 é poderoso, mas na prática
            profissional é igualmente importante saber integrar essas competências com as plataformas que as
            organizações já usam.
          </p>

          <div style={S.highlight}>
            <strong>Pontos essenciais do Módulo 09:</strong>
            <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 2 }}>
              <li><strong>Pipeline BI:</strong> todo o dado percorre Data Sources → ETL → Warehouse → Semantic Layer → BI Tool → Dashboard. Cada etapa tem ferramentas especializadas.</li>
              <li><strong>Power BI + DAX:</strong> o stack Microsoft dominante em corporações; DAX é poderoso mas requer compreensão de filter context vs. row context.</li>
              <li><strong>Looker + LookML:</strong> a única abordagem verdadeiramente code-first para métricas; elimina inconsistências de definições a nível organizacional.</li>
              <li><strong>Grafana:</strong> não é BI — é observabilidade. Usar para monitorizar pipelines, APIs, modelos em produção e infraestrutura, não para relatórios de negócio.</li>
              <li><strong>Superset:</strong> a melhor alternativa open-source ao Tableau para equipas técnicas com SQL forte; suporta DuckDB, Trino e ClickHouse nativamente.</li>
              <li><strong>Embedded analytics:</strong> dashboards dentro de produtos SaaS requerem RLS, JWT e modelo de preços por capacidade — não por seat.</li>
              <li><strong>Real-time:</strong> Kafka + Flink + ClickHouse + Grafana é o stack de referência; mas polling simples serve 90% dos casos a uma fracção do custo.</li>
              <li><strong>Governança:</strong> definir métricas em código (LookML, dbt), versionar dashboards em git e documentar no catálogo é o que separa equipas maduras de dados das restantes.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
