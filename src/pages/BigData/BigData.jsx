import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const lectures = [
  {
    id: 'lecture1',
    num: '01',
    title: 'Big Data - Fundamentos',
    subtitle: '5Vs, Ecosistema, HDFS & MapReduce',
    topics: ['5 Vs do Big Data', 'Data Lake vs Warehouse vs Lakehouse', 'HDFS — NameNode & DataNodes', 'MapReduce — Word Count'],
    path: '/bigdata/lecture1',
    color: '#f97316',
  },
  {
    id: 'lecture2',
    num: '02',
    title: 'MapReduce & Hadoop Ecosystem',
    subtitle: 'YARN, Hive, Pig & Sqoop',
    topics: ['Map → Shuffle → Reduce em profundidade', 'Combiner, Partitioner & Speculative Execution', 'YARN — ResourceManager & NodeManager', 'Hive, Pig Latin & Sqoop'],
    path: '/bigdata/lecture2',
    color: '#f97316',
  },
  {
    id: 'lecture3',
    num: '03',
    title: 'Apache Spark — Core',
    subtitle: 'RDDs, DataFrames & Catalyst Optimizer',
    topics: ['RDDs — Resilient Distributed Datasets', 'Transformações vs Acções & DAG', 'DataFrames & Spark SQL', 'Catalyst Optimizer & Tungsten Engine'],
    path: '/bigdata/lecture3',
    color: '#f97316',
  },
  {
    id: 'lecture4',
    num: '04',
    title: 'Spark na Cloud & Performance',
    subtitle: 'Databricks, EMR, Dataproc + Tuning',
    topics: ['Databricks, AWS EMR, Google Dataproc', 'Shuffle — o custo oculto', 'Parquet, Partition Pruning & Caching', 'Broadcast Join & Key Salting'],
    path: '/bigdata/lecture4',
    color: '#f97316',
  },
  {
    id: 'lecture5',
    num: '05',
    title: 'NoSQL & Armazenamento',
    subtitle: 'CAP Theorem, Redis, MongoDB, Cassandra, Neo4j',
    topics: ['CAP Theorem & ACID vs BASE', 'Key-Value (Redis) & Document (MongoDB)', 'Wide-Column (Cassandra, HBase)', 'Graph (Neo4j) & DBs Especializados'],
    path: '/bigdata/lecture5',
    color: '#f97316',
  },
  {
    id: 'lecture6',
    num: '06',
    title: 'Machine Learning com Spark',
    subtitle: 'MLlib, Pipelines & MLflow',
    topics: ['Transformer vs Estimator vs Pipeline', 'StringIndexer, VectorAssembler, StandardScaler', 'Cross-Validation & ParamGridBuilder', 'MLflow — Track, Registry & Deploy'],
    path: '/bigdata/lecture6',
    color: '#f97316',
  },
  {
    id: 'lecture7',
    num: '07',
    title: 'Graph Analytics',
    subtitle: 'GraphFrames, PageRank & BFS',
    topics: ['GraphX vs GraphFrames', 'PageRank — PR(v) = (1-d)/N + d·Σ', 'Connected Components & Triangle Counting', 'Motif Finding & BFS'],
    path: '/bigdata/lecture7',
    color: '#f97316',
  },
  {
    id: 'lecture8',
    num: '08',
    title: 'Streaming & Futuro do Big Data',
    subtitle: 'Structured Streaming, Kafka & Tendências',
    topics: ['Structured Streaming — unbounded table', 'Watermarks, Janelas & Exactly-once', 'Kafka → Spark → Parquet pipeline', 'Lakehouse, LLMs & Federated Learning'],
    path: '/bigdata/lecture8',
    color: '#f97316',
  },
  {
    id: 'lecture9',
    num: '09',
    title: 'Orquestração com Apache Airflow',
    subtitle: 'DAGs, Operators, Backfill & Prefect / Dagster',
    topics: ['DAGs — Directed Acyclic Graphs', 'Operators: Python, Spark, Sensor, K8s', 'Backfill, Retries & SLAs', 'Airflow vs Prefect vs Dagster vs dbt'],
    path: '/bigdata/lecture9',
    color: '#f97316',
  },
  {
    id: 'lecture10',
    num: '10',
    title: 'Delta Lake & Qualidade de Dados',
    subtitle: 'ACID, Time Travel, MERGE & Great Expectations',
    topics: ['Transaction Log & ACID Transactions', 'Time Travel, Schema Evolution & MERGE', 'Medallion Architecture (Bronze/Silver/Gold)', 'Great Expectations, dbt tests & Soda'],
    path: '/bigdata/lecture10',
    color: '#f97316',
  },
  {
    id: 'lecture11',
    num: '11',
    title: 'MLflow & ML Experiment Tracking',
    subtitle: 'Experiment Tracking, Model Registry & Serving com MLflow',
    topics: ['MLflow — Tracking, Projects, Registry, Serving', 'MLflow vs W&B vs DVC vs Neptune', 'MLflow em Databricks & Spark', 'AutoML, Feature Store & Unity Catalog'],
    path: '/bigdata/lecture11',
    color: '#f97316',
  },
  {
    id: 'lecture12',
    num: '12',
    title: 'Databricks — Plataforma Unificada',
    subtitle: 'Lakehouse, Unity Catalog, Workflows & Clusters',
    topics: ['Databricks vs Spark open-source — o que acrescenta', 'Unity Catalog — governança e data lineage', 'Workflows & Jobs — orquestração nativa', 'Clusters: All-Purpose vs Job, autoscaling & pools'],
    path: '/bigdata/lecture12',
    color: '#f97316',
  },
];

export default function BigData() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>
          <ArrowLeft size={16} /> Voltar ao Dashboard
        </Link>

        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Data Engineering with Apache Spark</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Do MapReduce ao Spark, do HDFS ao Lakehouse, do MLlib ao Structured Streaming. Arquitecturas, exemplos práticos e casos reais de produção.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {lectures.map((lecture) => (
            <div
              key={lecture.id}
              onClick={() => navigate(lecture.path)}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--card-border)',
                borderLeft: `4px solid ${lecture.color}`,
                borderRadius: 12,
                padding: '1.25rem 1.5rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'grid',
                gridTemplateColumns: '60px 1fr auto',
                gap: '1rem',
                alignItems: 'center',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = `${lecture.color}10`; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.transform = 'translateX(0)'; }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: lecture.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Módulo</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: lecture.color, lineHeight: 1 }}>{lecture.num}</div>
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{lecture.title}</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>{lecture.subtitle}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {lecture.topics.map(topic => (
                    <span key={topic} style={{
                      background: `${lecture.color}12`,
                      border: `1px solid ${lecture.color}30`,
                      color: lecture.color,
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.15rem 0.55rem',
                      borderRadius: 12,
                    }}>{topic}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: lecture.color, fontWeight: 700, fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
                Abrir <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
