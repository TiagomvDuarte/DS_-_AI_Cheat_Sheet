import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

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

const SparkArchDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Arquitectura Spark — Driver, Cluster Manager & Executors</p>
    <svg viewBox="0 0 580 240" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-sp" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      {/* Cluster Manager — top center */}
      <rect x="225" y="15" width="130" height="44" rx="7" fill="rgba(234,179,8,0.15)" stroke="#eab308" strokeWidth="1.5" />
      <text x="290" y="34" textAnchor="middle" fill="#eab308" fontSize="11" fontWeight="700">Cluster Manager</text>
      <text x="290" y="48" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">YARN / K8s / Standalone</text>

      {/* Driver — left middle */}
      <rect x="20" y="95" width="140" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
      <text x="90" y="118" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">Driver</text>
      <text x="90" y="134" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">SparkContext / SparkSession</text>
      <text x="90" y="146" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Plano DAG + Schedule</text>

      {/* Executors — right column */}
      {[60, 150].map((y, i) => (
        <g key={y}>
          <rect x="420" y={y} width="140" height="55" rx="7" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="1.5" />
          <text x="490" y={y + 22} textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="600">Executor {i + 1}</text>
          <text x="490" y={y + 38} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Tasks + Cache (RAM)</text>
        </g>
      ))}

      {/* Driver <-> Cluster Manager (bidirectional) */}
      <line x1="160" y1="105" x2="225" y2="40" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-sp)" />
      <line x1="225" y1="48" x2="160" y2="113" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-sp)" />

      {/* Driver -> Executors (task scheduling) */}
      <line x1="160" y1="125" x2="420" y2="85" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arr-sp)" />
      <line x1="160" y1="140" x2="420" y2="178" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arr-sp)" />

      {/* Cluster Manager -> Executors (allocation) */}
      <line x1="355" y1="45" x2="420" y2="75" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#arr-sp)" />
      <line x1="355" y1="55" x2="420" y2="170" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#arr-sp)" />

      <text x="290" y="225" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">Linhas sólidas: comunicação directa Driver ↔ Cluster Manager. Tracejadas: scheduling de tasks e alocação de Executors.</text>
    </svg>
  </div>
);

const RDDExplorer = () => {
  const [active, setActive] = useState(null);
  const ops = [
    { type: 'N', name: 'map(f)', desc: 'Narrow transformation. Aplica função f a cada elemento de forma independente. Cada partição de output depende de exactamente uma partição de input — sem shuffle, sem comunicação entre executors.', detail: 'Exemplo: converter strings para maiúsculas, multiplicar valores por 2, extrair campos de JSON. O paralelismo é total.', color: '#f97316' },
    { type: 'N', name: 'filter(f)', desc: 'Narrow transformation. Mantém apenas elementos onde f retorna True. Reduz o volume de dados sem alterar o número de partições.', detail: 'Fundamental para aplicar filtros cedo no pipeline — reduz dados antes de operações caras (joins, shuffles).', color: '#f97316' },
    { type: 'N', name: 'flatMap(f)', desc: 'Narrow transformation. Como map mas "achata" o resultado — f retorna uma lista e todos os elementos são incluídos no RDD resultado.', detail: 'Muito usado em processamento de texto: cada linha → lista de palavras. Uma frase de 10 palavras contribui com 10 elementos.', color: '#f97316' },
    { type: 'N', name: 'union(rdd)', desc: 'Narrow transformation. Combina dois RDDs sem remover duplicados. Não há shuffle — as partições de ambos os RDDs são simplesmente concatenadas.', detail: 'Útil para combinar dados de múltiplas fontes antes de uma operação unificada.', color: '#f97316' },
    { type: 'W', name: 'reduceByKey(f)', desc: 'Wide transformation. Causa shuffle — todas as tuplas com a mesma chave têm de ir para o mesmo executor para serem agregadas. Spark usa a função f para combinar parcialmente antes do shuffle (como um Combiner automático).', detail: 'Preferido a groupByKey porque o pré-agrupamento local reduz drasticamente o volume de dados no shuffle.', color: '#f97316' },
    { type: 'W', name: 'groupByKey()', desc: 'Wide transformation. Causa shuffle. Agrupa todos os valores por chave sem agregação prévia. Envia TODOS os valores pela rede — muito mais caro que reduceByKey quando a agregação é possível.', detail: 'Evitar quando reduceByKey ou aggregateByKey são aplicáveis. Só usar quando precisar de todos os valores sem agregação.', color: '#f97316' },
    { type: 'W', name: 'join(other)', desc: 'Wide transformation. Faz o shuffle de ambos os RDDs pela chave de join para garantir que todos os pares (k, v1, v2) ficam no mesmo executor.', detail: 'Se um dos RDDs for pequeno, usar broadcast join (ver Módulo 4) para evitar o shuffle completamente.', color: '#f97316' },
    { type: 'A', name: 'count()', desc: 'Acção. Materializa e executa todo o plano DAG acumulado. Conta o número total de elementos. Retorna um único Long ao Driver.', detail: 'Trigger de execução: ao chamar count(), o Spark compila todo o plano lazy, optimiza, e distribui tasks pelos executors.', color: '#f97316' },
    { type: 'A', name: 'collect()', desc: 'Acção. Traz TODOS os dados para a memória do Driver. Perigoso para RDDs grandes — pode causar OutOfMemoryError no Driver.', detail: 'Usar apenas para datasets pequenos (após filter/take) ou para testes. Em produção, usar write() para persistir.', color: '#f97316' },
    { type: 'A', name: 'saveAsTextFile(path)', desc: 'Acção. Escreve o RDD para HDFS/S3 como ficheiros de texto. Cada partição produz um ficheiro parte-NNNNN.', detail: 'Persiste o resultado sem trazer dados para o Driver. Para formatos columnar (Parquet, ORC), usar DataFrame .write().', color: '#f97316' },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>RDD — Transformações (lazy) vs. Acções (trigger de execução)</p>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Clica em cada operação para ver descrição, comportamento de particionamento e exemplos de uso.</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
        <span style={{ background: 'rgba(249,115,22,0.10)', border: '1px solid #fb923c', color: '#f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.15rem 0.6rem', borderRadius: 12 }}>N — Narrow (sem shuffle)</span>
        <span style={{ background: 'rgba(234,179,8,0.15)', border: '1px solid #eab308', color: '#f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.15rem 0.6rem', borderRadius: 12 }}>W — Wide (com shuffle)</span>
        <span style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid #f97316', color: '#f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.15rem 0.6rem', borderRadius: 12 }}>A — Action (executa DAG)</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center', marginBottom: '1rem' }}>
        {ops.map((op, i) => (
          <button key={i} onClick={() => setActive(active === i ? null : i)} style={{ padding: '0.3rem 0.7rem', borderRadius: 16, cursor: 'pointer', fontFamily: 'monospace', fontSize: '0.82rem', fontWeight: 600, background: active === i ? op.color : `${op.color}15`, color: active === i ? 'white' : op.color, border: `1.5px solid ${op.color}`, transition: 'all 0.15s' }}>{op.name}</button>
        ))}
      </div>
      {active !== null && (
        <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1rem', textAlign: 'left', border: `1.5px solid ${ops[active].color}40` }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{ops[active].desc}</p>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: 0 }}>{ops[active].detail}</p>
        </div>
      )}
    </div>
  );
};

const DAGDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>DAG — Directed Acyclic Graph (Stages e Shuffle Barriers)</p>
    <svg viewBox="0 0 560 160" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-dag" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <rect x="10" y="5" width="230" height="150" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" strokeDasharray="5,3" />
      <text x="125" y="20" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">STAGE 1 — Narrow (no shuffle)</text>
      <rect x="20" y="30" width="80" height="28" rx="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="60" y="48" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600">textFile()</text>
      <line x1="100" y1="44" x2="120" y2="44" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-dag)" />
      <rect x="122" y="30" width="80" height="28" rx="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="162" y="48" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600">flatMap()</text>
      <line x1="202" y1="44" x2="222" y2="44" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-dag)" />
      <rect x="122" y="90" width="80" height="28" rx="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="162" y="108" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600">map(w&#8594;(w,1))</text>
      <line x1="202" y1="104" x2="222" y2="64" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-dag)" />
      <line x1="250" y1="10" x2="250" y2="150" stroke="#eab308" strokeWidth="2" strokeDasharray="4,3" />
      <text x="250" y="7" textAnchor="middle" fill="#eab308" fontSize="8" fontWeight="700">SHUFFLE</text>
      <rect x="260" y="5" width="290" height="150" rx="8" fill="rgba(249,115,22,0.04)" stroke="#f97316" strokeWidth="1" strokeDasharray="5,3" />
      <text x="405" y="20" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">STAGE 2 — Wide (após shuffle)</text>
      <rect x="270" y="30" width="100" height="28" rx="5" fill="rgba(234,179,8,0.15)" stroke="#eab308" strokeWidth="1.5" />
      <text x="320" y="48" textAnchor="middle" fill="#eab308" fontSize="9" fontWeight="600">reduceByKey()</text>
      <line x1="370" y1="44" x2="390" y2="44" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-dag)" />
      <rect x="392" y="30" width="80" height="28" rx="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="432" y="48" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600">collect()</text>
      <text x="432" y="80" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">ACTION</text>
      <text x="432" y="92" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">executa o DAG</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Transformações narrow no mesmo stage (sem dados a cruzar a rede). Wide transformations criam um novo stage — os dados de todas as partições têm de ser redistribuídos pelos executors antes de continuar.</p>
  </div>
);

const CatalystDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Catalyst Optimizer — 4 Fases de Optimização</p>
    <svg viewBox="0 0 580 70" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-cat" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      {[
        { label: 'Analysis', sub: 'Resolve nomes\ne tipos', x: 65, color: '#f97316' },
        { label: 'Logical Opt.', sub: 'Predicate pushdown\nColumn pruning', x: 205, color: '#f97316' },
        { label: 'Physical Plan', sub: 'BroadcastJoin vs\nSortMergeJoin', x: 345, color: '#f97316' },
        { label: 'Code Gen', sub: 'Bytecode JVM\noptimizado (Tungsten)', x: 485, color: '#f97316' },
      ].map(({ label, sub, x, color }) => (
        <g key={label}>
          <rect x={x - 55} y="10" width="110" height="50" rx="7" fill={`${color}15`} stroke={color} strokeWidth="1.5" />
          <text x={x} y="30" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">{label}</text>
          {sub.split('\n').map((line, li) => (
            <text key={li} x={x} y={43 + li * 11} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">{line}</text>
          ))}
          {x < 485 && <line x1={x + 55} y1="35" x2={x + 85} y2="35" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-cat)" />}
        </g>
      ))}
    </svg>
  </div>
);

export default function CBD4() {
  const [perfIdx, setPerfIdx] = useState(0);
  const [memTab, setMemTab] = useState(0);
  const perfData = [
    { label: 'Filter + Count', rdd: '2.3s', df: '0.7s', speedup: '3.3×', reason: 'Catalyst faz predicate pushdown; Tungsten gera bytecode sem overhead de serialização' },
    { label: 'GroupBy + Agg', rdd: '5.1s', df: '1.2s', speedup: '4.3×', reason: 'Catalyst escolhe hash-agg vs sort-agg; columnar processing vectorizado' },
    { label: 'Join (2 tabelas)', rdd: '6.8s', df: '1.8s', speedup: '3.8×', reason: 'Catalyst escolhe BroadcastHashJoin automaticamente para a tabela menor; RDD usa sempre shuffle join' },
  ];
  const memTabs = [
    { name: 'Execution Memory', color: '#f97316', desc: 'Memória usada durante o processamento de operações: sorting, hashing, joins, aggregations. É dinâmica — pode crescer usando memória do pool de Storage se necessário.', detail: 'Se insuficiente, o Spark faz spill para disco automaticamente — degradando performance mas sem falhar. Aumentar executor memory resolve OOM errors em shuffles e sorts.' },
    { name: 'Storage Memory', color: '#f97316', desc: 'Memória usada para cache de RDDs/DataFrames (.cache() e .persist()). Partilhada com Execution Memory no Unified Memory Model (Spark 1.6+).', detail: 'Quando Execution Memory precisa de crescer, pode evictar blocos de Storage para disco (LRU). Um RDD em cache pode ser recalculado se evictado — sem erro, mas com lentidão.' },
    { name: 'Off-Heap Memory', color: '#f97316', desc: 'Memória fora da JVM heap, gerida directamente pelo Tungsten (Project Tungsten). Evita o overhead do Garbage Collector da JVM para objectos de longa duração.', detail: 'Ativado com spark.memory.offHeap.enabled=true. Especialmente útil para DataFrames com dados binários grandes ou quando o GC é um bottleneck de performance.' },
    { name: 'User Memory', color: '#f97316', desc: 'Memória reservada para estruturas de dados do utilizador: UDFs, acumuladores, dados em broadcast variables. Não é gerida pelo Spark — responsabilidade do programador.', detail: 'Broadcast variables grandes (> 500 MB) consomem esta área. Manter UDFs stateless e broadcast variables concisas.' },
  ];

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cloud-bigdata" style={S.back}><ArrowLeft size={16} /> Voltar a Cloud &amp; Big Data</Link>
        <div style={S.tag}>Module 4</div>
        <h1 style={S.h1}>Apache Spark — Core</h1>
        <p style={S.lead}>Do MapReduce ao Spark: a filosofia in-memory, o modelo de programação RDD, lazy evaluation e o DAG optimizer, DataFrames com schema, e o Catalyst + Tungsten que transformam queries em código JVM de alta performance.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. A Origem do Spark</h2>
          <p style={S.p}>O Apache Spark nasceu em 2009 no AMPLab da Universidade de Berkeley, criado por Matei Zaharia como tema de doutoramento. O problema motivador era concreto: os algoritmos de Machine Learning iterativos (k-means, gradient descent, PageRank) corriam de forma extremamente ineficiente no MapReduce porque cada iteração exigia uma nova passagem pelo disco.</p>
          <p style={S.p}>A solução de Zaharia foi permitir que os dados ficassem em memória entre iterações, mas de forma tolerante a falhas. O desafio era: como manter dados em memória sem perder a garantia de recuperação de falhas que o MapReduce obtinha via replicação no HDFS? A resposta foi o RDD — Resilient Distributed Dataset — onde a tolerância a falhas vem não de copiar dados mas de lembrar como recalculá-los (lineage).</p>
          <p style={S.p}>Em 2014, o Spark tornou-se o projecto Apache de maior crescimento da história. Em 2015, os autores fundaram o Databricks. Hoje, o Spark é o motor de processamento distribuído dominante — adoptado pela Netflix, Uber, Airbnb, e praticamente todas as organizações com dados em escala.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.10)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.5rem' }}>MapReduce — Limitações</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                <li>Disco I/O entre cada fase Map e Reduce</li>
                <li>Apenas batch — sem streaming interactivo</li>
                <li>ML iterativo: N iterações = 2N I/Os de disco</li>
                <li>API Java verbosa: centenas de linhas por job</li>
                <li>DAG fixo: apenas Map→Shuffle→Reduce</li>
                <li>Sem suporte SQL nativo</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.10)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.5rem' }}>Apache Spark — Melhorias</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                <li>In-memory: até 100× mais rápido em algoritmos iterativos</li>
                <li>Batch + Streaming + SQL unificados na mesma API</li>
                <li>ML iterativo: 1 leitura de disco, N iterações em RAM</li>
                <li>API concisa em Python, Scala, Java, R</li>
                <li>DAG arbitrário multi-stage com optimização global</li>
                <li>Spark SQL sobre qualquer fonte de dados</li>
              </ul>
            </div>
          </div>

          <SparkArchDiagram />

          <div style={S.note}>O <strong>Driver</strong> corre o código do utilizador, constrói o plano DAG e distribui tasks. Os <strong>Executors</strong> executam as tasks e guardam cache. O <strong>Cluster Manager</strong> (YARN, K8s) aloca os Executors. O Driver e os Executors comunicam directamente — o Cluster Manager só está envolvido na alocação inicial.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. RDDs — Resilient Distributed Datasets</h2>
          <p style={S.p}>O RDD é a abstracção fundamental do Spark, definida em 2011 no paper "Resilient Distributed Datasets: A Fault-Tolerant Abstraction for In-Memory Cluster Computing". É uma colecção imutável, particionada e distribuída de registos que pode ser processada em paralelo. Quatro propriedades são essenciais para entender o modelo de execução do Spark.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              ['Resilient — Tolerância a Falhas via Lineage', 'Cada RDD conhece a sequência de transformações (lineage) que o criou a partir do RDD original. Se uma partição for perdida (nó que falhou), o Spark não precisa de replicar os dados — recalcula apenas a partição perdida aplicando a lineage ao dado original. Recuperação granular sem overhead de replicação.', '#f97316'],
              ['Distributed — Partições em Paralelo', 'Um RDD é dividido em N partições, cada uma processada por um executor em paralelo. O número de partições determina o grau de paralelismo. Por defeito, 2 partições por CPU do cluster. Partições demasiado poucas subaproveitam o cluster; demasiadas criam overhead de scheduling.', '#f97316'],
              ['Immutable — Sem Race Conditions', 'Transformações sobre um RDD nunca modificam o original — criam sempre um novo RDD. A imutabilidade elimina a necessidade de locks e sincronização entre executors. Permite também reproduzir qualquer estado da computação recalculando a lineage desde o início.', '#f97316'],
              ['Lazy Evaluation — Optimização Global', 'Quando se chama map(), filter(), ou join(), o Spark não executa nada — regista a transformação no plano DAG. Apenas quando uma Action (count, collect, save) é invocada é que o Spark compila e optimiza o plano completo. Isto permite optimizações impossíveis com execução eager (ex: fusão de múltiplos filtros num único passo).', '#f97316'],
            ].map(([t, d, c]) => (
              <div key={t} style={{ background: `${c}08`, border: `1px solid ${c}25`, borderRadius: 8, padding: '0.9rem' }}>
                <div style={{ fontWeight: 700, color: c, marginBottom: '0.35rem', fontSize: '0.88rem' }}>{t}</div>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>

          <RDDExplorer />

          <DAGDiagram />

          <h3 style={S.h3}>Narrow vs. Wide Transformations — A Distinção Central</h3>
          <p style={S.p}>Esta distinção determina a estrutura de stages do DAG e o custo de cada transformação. Transformações narrow são aquelas onde cada partição de output depende de no máximo uma partição de input — o processamento é completamente local a cada executor. Transformações wide (também chamadas shuffle dependencies) requerem dados de múltiplas partições de input para produzir uma partição de output — implicam mover dados pela rede.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Tipo</th><th style={S.th}>Operações</th><th style={S.th}>Comportamento</th><th style={S.th}>Custo</th></tr></thead>
              <tbody>
                {[
                  ['Narrow', 'map, filter, flatMap, union, mapPartitions, coalesce (reduce partitions)', 'Sem shuffle — processa localmente em cada executor. Múltiplas transformações narrow são "pipelined" no mesmo stage.', 'Baixo — apenas CPU local'],
                  ['Wide (Shuffle)', 'groupByKey, reduceByKey, join, sortBy, distinct, repartition, groupBy, orderBy', 'Requer shuffle — dados redistribuídos pela rede. Cria um boundary de stage no DAG. Implica escrita e leitura de disco (shuffle files).', 'Alto — I/O disco + rede + CPU sort'],
                ].map(([t, o, b, c]) => (
                  <tr key={t}><td style={{ ...S.td, fontWeight: 700, color: t === 'Narrow' ? '#f97316' : '#f97316' }}>{t}</td><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{o}</td><td style={S.td}>{b}</td><td style={{ ...S.td, color: t === 'Narrow' ? '#f97316' : '#f97316', fontWeight: 600 }}>{c}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Caching e Níveis de Persistência</h3>
          <p style={S.p}>O caching é o mecanismo mais poderoso do Spark para workloads iterativos. Quando um RDD ou DataFrame é marcado para cache, na primeira Action que o materializa, as partições são guardadas em memória nos executors. Nas Actions seguintes, as partições são lidas da memória — saltando completamente a recalculação ou releitura de disco.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Nível de Persistência</th><th style={S.th}>Armazenamento</th><th style={S.th}>Velocidade</th><th style={S.th}>Quando usar</th></tr></thead>
              <tbody>
                {[
                  ['MEMORY_ONLY', 'RAM dos executors (objectos JVM)', 'Mais rápido', 'Dados que cabem em RAM; computação cara de recalcular'],
                  ['MEMORY_AND_DISK', 'RAM → Disco (fallback)', 'Rápido com fallback', 'Dados grandes; preferível a deixar o Spark recalcular'],
                  ['MEMORY_ONLY_SER', 'RAM serializado (byte array)', 'Rápido, menos espaço', 'RAM limitada; objectos JVM têm overhead de 3-5× vs dados raw'],
                  ['DISK_ONLY', 'Apenas disco local', 'Lento (disk I/O)', 'Checkpointing; dados raramente acedidos mas caros de recalcular'],
                  ['OFF_HEAP', 'Memória fora da JVM heap', 'Rápido, sem GC', 'Grandes DataFrames; quando GC é um bottleneck'],
                ].map(([n, s, v, w]) => (
                  <tr key={n}><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.85rem', color: '#f97316', fontWeight: 700 }}>{n}</td><td style={S.td}>{s}</td><td style={S.td}>{v}</td><td style={S.td}>{w}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. DataFrames, Spark SQL & Catalyst</h2>
          <p style={S.p}>RDDs são poderosos mas de baixo nível: sem schema, sem optimização automática, API verbosa, e a performance depende inteiramente de como o programador escreve o código. DataFrames introduzem schema (nomes e tipos de colunas), uma API declarativa expressiva, e delegam a optimização ao Catalyst Optimizer.</p>
          <p style={S.p}>A mudança conceptual é importante: com RDDs, o programador diz ao Spark como fazer as operações. Com DataFrames, o programador diz o que quer — o Catalyst decide como fazê-lo de forma óptima. Esta diferença é a mesma que existe entre programação imperativa (for loops) e declarativa (SQL).</p>

          <h3 style={S.h3}>Benchmarks RDD vs. DataFrame</h3>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            {perfData.map((p, i) => (
              <button key={i} onClick={() => setPerfIdx(i)} style={{ padding: '0.35rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: perfIdx === i ? '#f97316' : 'var(--bg-primary)', color: perfIdx === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${perfIdx === i ? '#f97316' : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{p.label}</button>
            ))}
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.1rem', border: '1.5px solid rgba(249,115,22,0.10)' }}>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>RDD</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f97316' }}>{perfData[perfIdx].rdd}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>DataFrame</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f97316' }}>{perfData[perfIdx].df}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Speedup</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f97316' }}>{perfData[perfIdx].speedup}</div>
              </div>
            </div>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: 0, textAlign: 'center' }}><strong style={{ color: '#f97316' }}>Porquê:</strong> {perfData[perfIdx].reason}</p>
          </div>

          <CatalystDiagram />

          <h3 style={S.h3}>As 4 Fases do Catalyst</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              ['1. Analysis', '#f97316', 'Resolve nomes de colunas e tipos de dados usando o Catalog (metastore). Detecta erros de schema antes de qualquer execução. Valida que todas as colunas referenciadas existem e têm tipos compatíveis.'],
              ['2. Logical Optimization', '#f97316', 'Aplica regras algébricas independentes do hardware: predicate pushdown (filtrar antes de joins), column pruning (eliminar colunas não usadas), constant folding (calcular expressões constantes uma única vez), e fusão de projecções.'],
              ['3. Physical Planning', '#f97316', 'Gera múltiplos planos físicos alternativos e escolhe o mais barato via modelo de custo. Decide entre BroadcastHashJoin (tabela pequena em broadcast) vs SortMergeJoin (ambas grandes). Escolhe entre HashAgg e SortAgg para aggregations.'],
              ['4. Code Generation (Tungsten)', '#f97316', 'Gera bytecode JVM específico para o plano físico escolhido. Elimina o overhead de interpretação do Volcano model. Usa processamento vectorizado (columnar batches) e memória off-heap gerida manualmente para evitar overhead do GC.'],
            ].map(([t, c, d]) => (
              <div key={t} style={{ background: `${c}08`, border: `1px solid ${c}25`, borderRadius: 8, padding: '0.9rem' }}>
                <div style={{ fontWeight: 700, color: c, marginBottom: '0.35rem' }}>{t}</div>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>

          <h3 style={S.h3}>Gestão de Memória — Modelo Unificado</h3>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            {memTabs.map((m, i) => (
              <button key={i} onClick={() => setMemTab(i)} style={{ padding: '0.35rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: memTab === i ? m.color : 'var(--bg-primary)', color: memTab === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${memTab === i ? m.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{m.name}</button>
            ))}
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.1rem', border: `1.5px solid ${memTabs[memTab].color}40` }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{memTabs[memTab].desc}</p>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: 0 }}>{memTabs[memTab].detail}</p>
          </div>

          <div style={S.note}>A regra prática: <strong>executor memory = execution + storage + overhead</strong>. Para workloads de ML iterativos, aumentar a proporção de storage memory (spark.memory.storageFraction=0.5 ou mais). Para workloads com shuffles grandes, aumentar execution memory. O Unified Memory Model do Spark 1.6+ permite que estas pools partilhem memória dinamicamente.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. RDD vs. DataFrame vs. Dataset — Quando Usar Cada Um</h2>
          <p style={S.p}>O Spark expõe três APIs de nível crescente de abstracção. A escolha certa depende do caso de uso e das garantias que se precisam:</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>API</th><th style={S.th}>Linguagem</th><th style={S.th}>Schema</th><th style={S.th}>Optimização</th><th style={S.th}>Quando usar</th></tr></thead>
              <tbody>
                {[
                  ['RDD', 'Python, Scala, Java', 'Sem schema (objectos arbitrários)', 'Manual (depende do programador)', 'Processamento de dados não-estruturados, UDFs complexas, controlo total de particionamento'],
                  ['DataFrame', 'Python, Scala, Java, R, SQL', 'Schema com nomes e tipos', 'Catalyst automático + Tungsten', 'Analytics, ETL, ML feature engineering — 95% dos casos de uso'],
                  ['Dataset[T]', 'Scala, Java (type-safe)', 'Schema + type safety em compile time', 'Catalyst automático + Tungsten', 'Aplicações Scala empresariais onde erros de tipo em tempo de compilação são críticos'],
                ].map(([a, l, s, o, w]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{a}</td><td style={S.td}>{l}</td><td style={S.td}>{s}</td><td style={S.td}>{o}</td><td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{w}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.4rem"}}><strong>A Origem do Spark</strong> — até 100× mais rápido que MapReduce em workloads iterativos graças ao processamento in-memory e à eliminação do disco entre fases; suporta streaming, ML e grafos numa única API unificada.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>RDDs</strong> — tolerância a falhas via lineage (recalcular partições perdidas), não via replicação — mais eficiente em memória; lazy evaluation permite ao Catalyst optimizar o plano completo antes de executar.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>DataFrames e Spark SQL</strong> — DataFrames + Catalyst + Tungsten são 3-5× mais rápidos que RDDs para a maioria dos workloads; narrow transformations são gratuitas (pipeline local); wide transformations (shuffle) são o custo dominante.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>RDD vs DataFrame vs Dataset</strong> — RDDs para controlo total ou dados não estruturados; DataFrames para SQL e analytics (preferir sempre em Python/SQL); Datasets para type-safety em Scala/Java com as optimizações de DataFrame.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
