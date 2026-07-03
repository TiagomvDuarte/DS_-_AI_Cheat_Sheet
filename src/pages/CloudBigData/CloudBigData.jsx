import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'cbd1', num: '01', title: 'Big Data',             subtitle: '5Vs, Ecosistema, HDFS & MapReduce',                                   topics: ['5 Vs do Big Data', 'Data Lake vs Warehouse vs Lakehouse', 'HDFS — NameNode & DataNodes', 'MapReduce — Word Count'],                                                                                     path: '/cloud-bigdata/lecture1',  color: '#f97316' },
  { id: 'cbd7', num: '02', title: 'Cloud Computing',       subtitle: 'IaaS/PaaS/SaaS, Compute, Storage & Elasticidade',                    topics: ['IaaS, PaaS, SaaS & FaaS', 'Public, Private, Hybrid & Multi-Cloud', 'VMs, Contentores & Serverless', 'Regions, AZs, Auto-scaling & Modelos de Custo'],                                                  path: '/cloud-bigdata/lecture2', color: '#f97316' },
  { id: 'cbd2', num: '03', title: 'MapReduce & Hadoop Ecosystem',        subtitle: 'YARN, Hive, Pig & Sqoop',                                            topics: ['Map → Shuffle → Reduce em profundidade', 'Combiner, Partitioner & Speculative Execution', 'YARN — ResourceManager & NodeManager', 'Hive, Pig Latin & Sqoop'],                                          path: '/cloud-bigdata/lecture3',  color: '#f97316' },
  { id: 'cbd3', num: '04', title: 'Apache Spark',                 subtitle: 'RDDs, DataFrames & Catalyst Optimizer',                              topics: ['RDDs — Resilient Distributed Datasets', 'Transformações vs Acções & DAG', 'DataFrames & Spark SQL', 'Catalyst Optimizer & Tungsten Engine'],                                                             path: '/cloud-bigdata/lecture4',  color: '#f97316' },
  { id: 'cbd4', num: '05', title: 'Spark na Cloud',        subtitle: 'Databricks, EMR, Dataproc + Tuning',                                 topics: ['Databricks, AWS EMR, Google Dataproc', 'Shuffle — o custo oculto', 'Parquet, Partition Pruning & Caching', 'Broadcast Join & Key Salting'],                                                              path: '/cloud-bigdata/lecture5',  color: '#f97316' },
  { id: 'cbd5', num: '06', title: 'Streaming & Processamento em Tempo Real', subtitle: 'Structured Streaming, Kafka & Lambda vs Kappa',                  topics: ['Structured Streaming — unbounded table', 'Watermarks, Janelas & Exactly-once', 'Kafka → Spark → Parquet pipeline', 'Lambda vs Kappa Architecture'],                                                          path: '/cloud-bigdata/lecture6',  color: '#f97316' },
  { id: 'cbd8', num: '07', title: 'Docker & Kubernetes',                 subtitle: 'Containers, Orquestração & Escalabilidade',                          topics: ['Imagens, Containers & Dockerfile', 'Arquitectura Kubernetes — Control Plane & Nodes', 'Pods, ReplicaSets, Deployments & Services', 'Autoscaling, Rolling Updates & ConfigMaps'],                                       path: '/cloud-bigdata/lecture7', color: '#f97316' },
  { id: 'cbd6', num: '08', title: 'Databricks',                          subtitle: 'Lakehouse, Unity Catalog, Workflows & Clusters',                    topics: ['Databricks vs Spark open-source', 'Unity Catalog — governança e data lineage', 'Workflows & Jobs — orquestração nativa', 'Clusters: All-Purpose vs Job, autoscaling & pools'],                           path: '/cloud-bigdata/lecture8', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function CloudBigData() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>CLOUD & BIG DATA</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Cloud & Big Data</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>De HDFS e MapReduce ao Apache Spark, Structured Streaming e Databricks na cloud. Arquitecturas distribuídas, performance tuning e deployment em AWS EMR, Google Dataproc e Azure.</p>
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
