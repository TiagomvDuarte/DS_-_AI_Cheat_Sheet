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

const WideColumnDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Modelo Wide-Column — Dados de Sensores IoT com Column Families</p>
    <svg viewBox="0 0 660 240" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Header row */}
      <rect x="10" y="10" width="110" height="32" rx="5" fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="1.5" />
      <text x="65" y="30" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">row key</text>

      {/* sensor_data CF */}
      <rect x="130" y="10" width="220" height="32" rx="5" fill="rgba(251,146,60,0.15)" stroke="#fb923c" strokeWidth="1.5" />
      <text x="240" y="30" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">sensor_data (CF1)</text>

      {/* metadata CF */}
      <rect x="360" y="10" width="290" height="32" rx="5" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="505" y="30" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">metadata (CF2)</text>

      {/* Sub-headers */}
      {[
        { x: 130, w: 105, label: 'temp',     stroke: '#fb923c', fill: 'rgba(251,146,60,0.08)' },
        { x: 245, w: 105, label: 'humidity', stroke: '#fb923c', fill: 'rgba(251,146,60,0.08)' },
        { x: 360, w: 100, label: 'location', stroke: '#f59e0b', fill: 'rgba(245,158,11,0.08)' },
        { x: 470, w: 100, label: 'model',    stroke: '#f59e0b', fill: 'rgba(245,158,11,0.08)' },
        { x: 580, w:  70, label: 'ts',       stroke: '#f59e0b', fill: 'rgba(245,158,11,0.08)' },
      ].map(({ x, w, label, stroke, fill }) => (
        <g key={label}>
          <rect x={x} y="42" width={w} height="25" rx="2" fill={fill} stroke={stroke} strokeWidth="0.8" />
          <text x={x + w / 2} y="58" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">{label}</text>
        </g>
      ))}

      {/* Data rows */}
      {[
        { rowKey: 'sensor:A1', keyColor: '#f97316', y: 67,
          cells: ['22.4°C', '68%', 'Lisboa', 'SensorX2', '09:00'],
          empty: [] },
        { rowKey: 'sensor:A1', keyColor: '#fb923c', y: 102,
          cells: ['23.1°C', null, 'Lisboa', 'SensorX2', '10:00'],
          empty: [1] },
        { rowKey: 'sensor:B5', keyColor: '#f97316', y: 137,
          cells: ['19.8°C', '72%', 'Porto', null, '09:30'],
          empty: [3] },
      ].map(({ rowKey, keyColor, y, cells, empty }) => (
        <g key={y}>
          <rect x="10" y={y} width="110" height="30" rx="2" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.3)" strokeWidth="0.8" />
          <text x="65" y={y + 19} textAnchor="middle" fill={keyColor} fontSize="9" fontWeight="700">{rowKey}</text>
          {[
            { x: 130, w: 105 }, { x: 245, w: 105 }, { x: 360, w: 100 }, { x: 470, w: 100 }, { x: 580, w: 70 },
          ].map(({ x, w }, i) => (
            empty.includes(i) ? (
              <g key={i}>
                <rect x={x} y={y} width={w} height="30" rx="2" fill="rgba(249,115,22,0.03)" stroke="rgba(249,115,22,0.15)" strokeWidth="0.8" strokeDasharray="4,3" />
                <text x={x + w / 2} y={y + 19} textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontStyle="italic">— vazio —</text>
              </g>
            ) : (
              <g key={i}>
                <rect x={x} y={y} width={w} height="30" rx="2" fill="var(--bg-primary)" stroke="var(--card-border)" strokeWidth="0.8" />
                <text x={x + w / 2} y={y + 19} textAnchor="middle" fill="var(--text-primary)" fontSize="9">{cells[i]}</text>
              </g>
            )
          ))}
        </g>
      ))}

      {/* Legend */}
      <rect x="10" y="182" width="14" height="14" rx="2" fill="rgba(249,115,22,0.03)" stroke="rgba(249,115,22,0.2)" strokeWidth="0.8" strokeDasharray="4,3" />
      <text x="30" y="193" fill="var(--text-secondary)" fontSize="9">célula vazia — não existe fisicamente no disco</text>
      <rect x="320" y="182" width="14" height="14" rx="2" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.3)" strokeWidth="0.8" />
      <text x="340" y="193" fill="var(--text-secondary)" fontSize="9">mesmo row key + timestamp diferente = nova versão</text>
    </svg>
    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Células vazias não existem fisicamente — não ocupam espaço. Column families armazenadas juntas em disco. A chave interna no HFile: row key | column family | column qualifier | timestamp | tipo | valor.</p>
  </div>
);

const HBaseVsCassandra = () => {
  const [tab, setTab] = useState(0);
  const tabs = [
    {
      label: 'HBase',
      arch: 'Master-Slave; usa Hadoop HDFS para armazenamento',
      persist: 'Hadoop HDFS — fault-tolerant, replicado',
      origin: 'Open-source do Google Bigtable (2006)',
      strong: ['ACID ao nível da linha/partição', 'Integração nativa com Hadoop/Spark', 'Linhas ordenadas lexicograficamente pelo row key', 'Versões por timestamp de cada cell', 'Coprocessors para lógica no servidor'],
      weak: ['Depende do Hadoop — complexo de operar', 'Master único pode ser ponto de falha', 'Não adequado para escritas ultra-rápidas', 'Operações de range ineficientes sem row key design'],
      use: ['Hadoop analytics em lote', 'Armazenamento de mensagens (Facebook Messenger)', 'Dados históricos com versões por timestamp', 'Integração com MapReduce e Spark'],
    },
    {
      label: 'Cassandra',
      arch: 'Peer-to-peer; todos os nós são iguais — sem master',
      persist: 'Armazenamento próprio (LSM-tree + SSTables)',
      origin: 'Desenvolvida pelo Facebook para Inbox; open-source 2008',
      strong: ['Sem ponto único de falha', 'Escala linear — dobrar nós = dobrar throughput', 'Escrita O(1) — sempre vai para memtable', 'Consistência tunable por operação (ONE/QUORUM/ALL)', 'Multi-datacenter nativo (rack-aware replication)'],
      weak: ['Queries limitadas ao primary key', 'Sem JOINs — modelação orientada a queries', 'Schema design complexo — precisa conhecer queries antes', 'Compaction pode degradar performance temporariamente'],
      use: ['IoT e time series (Netflix, Instagram)', 'Histórico de visualizações de 200M+ utilizadores', 'Mensagens de chat com histórico por conversa', 'Logs de auditoria com alta taxa de escrita'],
    },
  ];
  const t = tabs[tab];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>HBase vs. Cassandra — As Duas Implementações Wide-Column</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem' }}>
        {tabs.map((tb, i) => (
          <button key={i} onClick={() => setTab(i)} style={{ padding: '0.4rem 1.5rem', borderRadius: 20, cursor: 'pointer', fontWeight: 700, fontSize: '0.88rem', background: tab === i ? '#f97316' : 'var(--bg-primary)', color: tab === i ? '#000' : 'var(--text-primary)', border: `1.5px solid ${tab === i ? '#f97316' : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{tb.label}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: '1.5px solid rgba(249,115,22,0.25)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
          <div style={{ background: 'rgba(249,115,22,0.06)', borderRadius: 8, padding: '0.6rem 0.85rem' }}>
            <div style={{ fontSize: '0.72rem', color: '#f97316', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Arquitectura</div>
            <div style={{ fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{t.arch}</div>
          </div>
          <div style={{ background: 'rgba(249,115,22,0.06)', borderRadius: 8, padding: '0.6rem 0.85rem' }}>
            <div style={{ fontSize: '0.72rem', color: '#f97316', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Persistência</div>
            <div style={{ fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{t.persist}</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
          <div>
            <div style={{ fontSize: '0.72rem', color: '#f97316', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem' }}>Pontos fortes</div>
            {t.strong.map(s => <div key={s} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.18rem' }}>+ {s}</div>)}
          </div>
          <div>
            <div style={{ fontSize: '0.72rem', color: '#ea580c', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem' }}>Limitações</div>
            {t.weak.map(w => <div key={w} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.18rem' }}>- {w}</div>)}
          </div>
          <div>
            <div style={{ fontSize: '0.72rem', color: '#fb923c', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem' }}>Casos de uso</div>
            {t.use.map(u => <div key={u} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.18rem' }}>• {u}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BDM5() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/bigdata-mgmt" style={S.back}><ArrowLeft size={16} /> Voltar a Big Data Mgmt</Link>
        <div style={S.tag}>Module 5</div>
        <h1 style={S.h1}>Wide-Column Databases — Apache HBase</h1>
        <p style={S.lead}>Wide-column databases (ou column-family databases) são a terceira grande família NoSQL. Armazenam dados indexados por (row id, column name, timestamp) — sem desperdiçar espaço em células vazias. HBase e Cassandra são os exemplos mais relevantes, com arquitecturas opostas mas modelo de dados semelhante.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. O Modelo de Dados Wide-Column</h2>
          <p style={S.p}>Numa base de dados relacional, uma tabela esparsa (com muitas células vazias) desperdiça espaço e é lenta a pesquisar. A solução wide-column: armazenar apenas as células com valores, indexadas por <strong>(row id, column name, timestamp)</strong>. Células vazias não existem fisicamente — não ocupam espaço.</p>
          <p style={S.p}><strong>Conceito-chave: Column Families.</strong> Colunas relacionadas são agrupadas em famílias e armazenadas juntas em disco — aumenta a probabilidade de uma leitura satisfazer a query sem aceder a múltiplos blocos. As column families são definidas no schema; os column qualifiers (colunas dentro da família) são dinâmicos.</p>

          <WideColumnDiagram />

          <h3 style={S.h3}>Características Principais</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            {[
              { title: 'Controlo dinâmico de colunas', desc: 'Developers adicionam colunas sem migração de schema; column families são mais estáticas e definidas no schema.' },
              { title: 'Indexação tripla', desc: 'Cada valor indexado por row id, column name e timestamp. Permite manter múltiplas versões de um valor ao longo do tempo.' },
              { title: 'Atomicidade row-level', desc: 'Operações de leitura e escrita numa linha são atómicas (ACID ao nível da linha/partição), mesmo sem ACID global.' },
              { title: 'Linhas ordenadas', desc: 'Rows mantidas em ordem lexicográfica pelo row key — permite range scans eficientes sobre row keys ordenadas.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: 8, padding: '0.9rem' }}>
                <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.35rem', fontSize: '0.88rem' }}>{title}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={S.note}>
            Exemplo de chave interna no HFile (formato de armazenamento do HBase): <code style={{ color: '#f97316' }}>K: row-550/colfam1:50/1309812287166/Put/vlen=3 V: 501</code> — row key | column family | column qualifier | timestamp | tipo | valor.
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. HBase vs. Cassandra</h2>
          <p style={S.p}>HBase e Cassandra partilham o modelo wide-column mas têm arquitecturas opostas. HBase usa arquitectura Master-Slave sobre Hadoop HDFS — depende de ZooKeeper para coordenação e HDFS para persistência. Cassandra usa arquitectura peer-to-peer (sem master) — todos os nós são iguais e o dados são distribuídos via consistent hashing ring.</p>

          <HBaseVsCassandra />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Wide-Column vs. Relacional e Guidelines de Design</h2>
          <p style={S.p}>Wide-column databases partilham semelhanças com o modelo relacional: ambos têm IDs únicos por linha e armazenam dados em formato tabular. Mas as diferenças críticas mudam a forma como se modela:</p>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>Base de Dados Relacional</th><th style={S.th}>Wide-Column (HBase/Cassandra)</th></tr></thead>
              <tbody>
                {[
                  ['Dados esparsos', 'Células NULL ocupam espaço', 'Células vazias não existem fisicamente'],
                  ['Colunas dinâmicas', 'ALTER TABLE para novas colunas', 'Adicionar colunas a qualquer momento'],
                  ['Joins', 'JOINs nativos entre tabelas', 'Sem JOINs — dados desnormalizados'],
                  ['Padrão de escrita', 'B-tree index — escritas com page splits', 'LSM-tree — escritas sempre O(1) em memtable'],
                  ['Escalabilidade', 'Vertical (scale up)', 'Horizontal (scale out) — linear'],
                  ['Consistência', 'ACID global', 'ACID ao nível da linha; BASE global'],
                ].map(([a, r, w]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 600 }}>{a}</td><td style={S.td}>{r}</td><td style={{ ...S.td, color: '#f97316' }}>{w}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Guidelines de Design Críticas</h3>
          <div style={S.highlight}>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, lineHeight: 2, fontSize: '0.9rem' }}>
              <li><strong>Desnormalizar em vez de fazer joins</strong> — joins e índices não são directos; duplicar dados é esperado e correcto.</li>
              <li><strong>Usar nomes de colunas como dados</strong> — o nome da coluna pode ser o valor relevante (ex: <code style={{ color: '#f97316' }}>messages:20240324T1000_msg001</code>).</li>
              <li><strong>Modelar uma entidade com uma única linha</strong> — tudo sobre uma entidade num único row key.</li>
              <li><strong>Evitar hotspotting no row key</strong> — operações concentradas num pequeno número de servidores degradam performance; usar prefixos aleatórios ou hash.</li>
              <li><strong>Evitar estruturas de dados complexas</strong> nos valores das colunas — manter valores simples e planos.</li>
            </ul>
          </div>

          <h3 style={S.h3}>Exemplo — Muitos-para-muitos Desnormalizado</h3>
          <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Row Key</th><th style={S.th}>Column Family</th><th style={S.th}>Column Qualifier</th><th style={S.th}>Value</th></tr></thead>
              <tbody>
                {[
                  ['user123', 'data', 'messages:msg001:sender', 'user123'],
                  ['user123', 'data', 'messages:msg001:content', '"Hey!"'],
                  ['user123', 'data', 'messages:msg001:status', 'sent'],
                ].map(([rk, cf, cq, v]) => (
                  <tr key={cq}><td style={{ ...S.td, fontFamily: 'monospace', color: '#f97316' }}>{rk}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{cf}</td><td style={{ ...S.td, fontFamily: 'monospace', color: '#fb923c' }}>{cq}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. LSM-Tree — A Arquitectura de Escrita</h2>
          <p style={S.p}>Wide-column databases, especialmente Cassandra, usam <strong>LSM-tree (Log-Structured Merge-tree)</strong> como engine de armazenamento — optimizado para escritas de alta velocidade.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { step: '1', title: 'MemTable (RAM)', desc: 'Escritas vão primeiro para a MemTable em memória. Muito rápido — O(1). Também são escritas no CommitLog (disco) para durabilidade.' },
              { step: '2', title: 'Flush para SSTable', desc: 'Quando a MemTable fica cheia, é flushed para disco como SSTable (Sorted String Table) — imutável e ordenada por chave.' },
              { step: '3', title: 'Compaction', desc: 'SSTables antigas são periodicamente compactadas (merge sort) — remove duplicados e versões antigas. Pode temporariamente degradar performance.' },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: 10, padding: '1rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-10px', left: '1rem', background: '#f97316', color: '#000', fontWeight: 800, fontSize: '0.75rem', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{step}</div>
                <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.4rem', marginTop: '0.3rem' }}>{title}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={S.note}>
            Wide-column databases são a escolha natural para dados de alta escala com padrões de acesso bem definidos e previsíveis — analytics, time series, logs. O row key é a decisão de design mais crítica: determina onde os dados ficam fisicamente e que queries são eficientes.
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, lineHeight: 1.9 }}>
              <li style={{ marginBottom: '0.4rem' }}><strong>Modelo wide-column</strong> — wide-column stores organizam dados em famílias de colunas (column families): cada row tem uma row key e pode ter um número arbitrário de colunas dentro de cada CF; armazenamento é por coluna (column-oriented) — leituras de colunas específicas são eficientes sem ler colunas desnecessárias; ideal para IoT (row key = deviceId+timestamp), séries temporais e dados esparsos onde a maioria das "células" seria NULL num modelo relacional.</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>HBase vs. Cassandra</strong> — HBase é fortemente consistente (CP no CAP) e roda sobre HDFS — ideal para ML features stores e integrações com ecossistema Hadoop/Spark; Cassandra é altamente disponível e tolerante a partições (AP no CAP) com tunable consistency (ONE/QUORUM/ALL) — ideal para alta disponibilidade global, sem single point of failure; HBase usa ZooKeeper para coordenação, Cassandra usa gossip protocol peer-to-peer; Cassandra tem write throughput superior, HBase tem suporte a transacções mais forte.</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>LSM-tree</strong> — Log-Structured Merge-tree optimiza writes ao sequencializar-los: writes vão ao MemTable (in-memory) → WAL (durabilidade) → quando MemTable está cheia, flush para SSTable (Sorted String Table) no disco; SSTables são imutáveis — compaction merge periódico elimina dados obsoletos; resultado: writes são sempre sequenciais (I/O máximo), reads precisam de verificar múltiplos SSTables (mitigado por Bloom filters que descartam SSTables sem a chave em O(1)).</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>Row key design é crítico</strong> — a row key determina particionamento, ordenação e performance em wide-column stores; anti-padrões: monotonically increasing keys (timestamps, auto-increment) causam hotspots no último servidor; soluções: salting (prefixo de hash módulo N), reversão de timestamp (MAX_LONG - timestamp), bucket por device+hora; regra: projectar row keys para as queries mais frequentes — não existe índice secundário eficiente sem custo de tabelas auxiliares.</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>Desnormalização obrigatória</strong> — wide-column stores não têm JOINs — a modelação é query-first: para cada query frequente, criar uma tabela/CF optimizada para essa access pattern; duplicação de dados é aceite e esperada; Cassandra recomenda explicitamente "one table per query"; o custo é maior uso de armazenamento e complexidade de manter múltiplas tabelas sincronizadas em writes — trade-off explícito de write amplification por read performance garantida.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
