import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'bdm1', num: '01', title: 'Bases de Dados NOSQL',                 subtitle: 'História, CAP Theorem, ACID vs BASE e as 4 Famílias NoSQL',       topics: ['Evolução: flat files → RDBMS → NoSQL', 'Teorema CAP — Consistência, Disponibilidade, Partição', 'ACID vs BASE', 'Key-Value, Document, Wide-Column & Graph'],                                                                                                                                                            path: '/bigdata-mgmt/lecture1', color: '#4a9eed' },
  { id: 'bdm2', num: '02', title: 'Bases de Dados em Grafo',              subtitle: 'Neo4j, Cypher e Algoritmos de Grafo',                             topics: ['Grafos: nós, arestas, propriedades e labels', 'Neo4j — property graph model', 'Linguagem Cypher — MATCH, WHERE, RETURN', 'PageRank, BFS/DFS, community detection'],                                          path: '/bigdata-mgmt/lecture2',    color: '#4a9eed' },
  { id: 'bdm3', num: '03', title: 'Bases de Dados de Documentos',         subtitle: 'MongoDB — BSON, Coleções, Queries e Indexação',                   topics: ['MongoDB e BSON vs JSON', 'Coleções, documentos e schema flexível', 'CRUD e operadores de query', 'Índices, aggregation pipeline e sharding'],                                                            path: '/bigdata-mgmt/lecture3',    color: '#4a9eed' },
  { id: 'bdm4', num: '04', title: 'Bases de Dados Chave-Valor',           subtitle: 'Redis — Estruturas, Persistência e Casos de Uso',                 topics: ['Redis — in-memory, velocidade extrema', 'Estruturas: strings, hashes, lists, sets, sorted sets', 'Persistência: RDB vs AOF', 'Pub/Sub, TTL, clustering'],                                                  path: '/bigdata-mgmt/lecture4',    color: '#4a9eed' },
  { id: 'bdm5', num: '05', title: 'Bases de Dados Wide-Column',           subtitle: 'HBase e Cassandra — Column Families e Distribuição',              topics: ['Column families e dados esparsos', 'HBase — integração com HDFS', 'Cassandra — ring, vnodes e eventual consistency', 'CQL, partitioning key e clustering columns'],                                           path: '/bigdata-mgmt/lecture5',    color: '#4a9eed' },
  { id: 'bdm6', num: '06', title: 'Blockchain',                           subtitle: 'Bitcoin, Estrutura da Blockchain e Mecanismos de Consenso',        topics: ['Bitcoin e o problema dos generais bizantinos', 'Estrutura: blocos, hashes, Merkle trees', 'Proof of Work vs Proof of Stake', 'Smart contracts, Ethereum e limitações'],                                        path: '/bigdata-mgmt/lecture6',    color: '#4a9eed' },
  { id: 'bdm7', num: '07', title: 'Data Warehouses, Data Lakes & Lakehouses', subtitle: 'OLAP, Star Schema, Delta Lake, Medallion & Qualidade de Dados', topics: ['Data Warehouse — OLAP, Star/Snowflake Schema, ETL vs ELT', 'Data Lake — schema-on-read, HDFS/Object Storage', 'Lakehouse — Delta Lake, Iceberg, Hudi & Medallion', 'Qualidade de Dados — Great Expectations, dbt tests & Soda'], path: '/bigdata-mgmt/lecture7', color: '#4a9eed' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function BigDataMgmt() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#4a9eed', border: '1.5px solid #4a9eed', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>BIG DATA MODELLING & MANAGEMENT</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Big Data Modelling & Management</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Do teorema CAP aos modelos NoSQL — Key-Value, Document, Wide-Column, Graph e Blockchain. Data Warehouses, Data Lakes e Lakehouses (Delta Lake, Medallion Architecture) e qualidade de dados. Como modelar, armazenar e gerir dados a grande escala.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {modules.map(m => (
          <div key={m.id} onClick={() => navigate(m.path)}
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderLeft: `4px solid ${m.color}`, borderRadius: 12, padding: '1.25rem 1.5rem', cursor: 'pointer', transition: 'all 0.2s', display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: '1rem', alignItems: 'center' }}
            onMouseEnter={e => { e.currentTarget.style.background = `${m.color}10`; e.currentTarget.style.transform = 'translateX(4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.transform = 'translateX(0)'; }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: m.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Módulo</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: m.color, lineHeight: 1 }}>{m.num}</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{m.title}</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>{m.subtitle}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>{m.topics.map(t => <span key={t} style={topicStyle(m.color)}>{t}</span>)}</div>
            </div>
            <ArrowRight size={18} color={m.color} />
          </div>
        ))}
      </div>
    </div>
  );
}
