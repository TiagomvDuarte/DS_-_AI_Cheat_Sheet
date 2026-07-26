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

const CAPDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Teorema CAP — só 2 de 3 em simultâneo</p>
    <svg viewBox="0 0 400 240" style={{ maxWidth: '100%', height: 'auto' }}>
      <polygon points="200,35 40,200 360,200" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <circle cx="200" cy="35" r="30" fill="var(--bg-secondary)" stroke="#4a9eed" strokeWidth="2" />
      <text x="200" y="30" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="800">C</text>
      <text x="200" y="44" textAnchor="middle" fill="#4a9eed" fontSize="9">Consistency</text>
      <circle cx="40" cy="200" r="30" fill="var(--bg-secondary)" stroke="#4a9eed" strokeWidth="2" />
      <text x="40" y="195" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="800">A</text>
      <text x="40" y="209" textAnchor="middle" fill="#4a9eed" fontSize="9">Availability</text>
      <circle cx="360" cy="200" r="30" fill="var(--bg-secondary)" stroke="#4a9eed" strokeWidth="2" />
      <text x="360" y="195" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="800">P</text>
      <text x="360" y="209" textAnchor="middle" fill="#4a9eed" fontSize="9">Partition Tol.</text>
      <text x="100" y="105" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="600">CA</text>
      <text x="70" y="117" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">PostgreSQL, MySQL</text>
      <text x="60" y="127" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">(sem partições de rede)</text>
      <text x="300" y="105" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="600">CP</text>
      <text x="320" y="117" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">MongoDB, HBase</text>
      <text x="320" y="127" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">ZooKeeper</text>
      <text x="200" y="210" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="600">AP</text>
      <text x="200" y="220" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">DynamoDB, Cassandra</text>
      <text x="200" y="230" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">CouchDB</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>P (Partition Tolerance) é obrigatório em sistemas distribuídos reais — a escolha real é entre C e A quando ocorre uma partição de rede.</p>
  </div>
);

const NoSQLExplorer = () => {
  const [db, setDb] = useState(0);
  const dbs = [
    {
      name: 'Redis', family: 'Key-Value', color: '#4a9eed', cap: 'AP (por omissão)',
      usecase: 'Caching, sessões, leaderboards, pub/sub, rate limiting',
      desc: 'In-memory data store com persistência opcional. Opera inteiramente em RAM — latência de microsegundos a milissegundo. A estrutura de dados mais simples (key → value) mas suporta tipos ricos: strings, hashes, listas, sets, sorted sets, bitmaps, HyperLogLog, Streams.',
      internals: 'Sorted Sets usam skip lists (O(log N) para insert/query). Hashes com poucos campos usam ziplist (compacto em memória). Replicação assíncrona master→slaves. Cluster via consistent hashing com 16384 slots.',
      pros: ['Latência sub-milissegundo', 'Estruturas de dados ricas e atómicas', 'TTL automático por chave', 'Pub/Sub nativo', 'Lua scripting para operações atómicas complexas'],
      cons: ['Dados em RAM = custo elevado por GB', 'Persistência (RDB/AOF) tem overhead', 'Clustering complexo para dados grandes'],
      examples: ['Cache de resultados de API (TTL=60s)', 'Sessões de utilizadores (TTL=24h)', 'Leaderboard de jogo (Sorted Set ZADD/ZRANK)', 'Rate limiting (INCR + EXPIRE)', 'Pub/Sub para notificações em tempo real'],
    },
    {
      name: 'MongoDB', family: 'Document', color: '#4a9eed', cap: 'CP (com Replica Sets)',
      usecase: 'CMS, e-commerce, user profiles, analytics, aplicações com schema variável',
      desc: 'Base de dados orientada a documentos JSON/BSON. Hierarquia: instância → databases → collections → documents. Cada documento é um objecto JSON hierárquico com schema flexível — campos diferentes por documento são permitidos. A Aggregation Pipeline é equivalente a SQL GROUP BY + JOIN + transformações, mas com sintaxe expressiva orientada a documentos.',
      internals: 'Storage engine WiredTiger usa B-trees com compressão Snappy/Zlib. Journaling para durabilidade. Replica Sets com eleição automática via Raft. Sharding por shard key com balancing automático.',
      pros: ['Schema flexível — evolução sem migrations', 'Queries ricas sobre documentos hierárquicos', 'Aggregation Pipeline poderosa', 'Replica Sets automáticos com failover', 'Atlas Cloud com free tier generoso'],
      cons: ['Joins limitados (lookup — mais lentos que SQL)', 'Transacções multi-documento têm overhead', 'Crescimento de documentos pode causar fragmentation'],
      examples: ['Perfis de utilizadores com campos variáveis', 'Catálogo de produtos com atributos por categoria', 'Logs de aplicação com campos dinâmicos', 'Dados de IoT com schema semi-estruturado', 'CMS com tipos de conteúdo variáveis'],
    },
    {
      name: 'Cassandra', family: 'Wide-Column', color: '#4a9eed', cap: 'AP (tunable consistency)',
      usecase: 'IoT, time series, logs, redes sociais com escrita intensiva, dados temporais',
      desc: 'Base de dados distribuída peer-to-peer (sem master/slave — todos os nós são iguais). Modelo de dados Wide-Column: cada linha tem a sua chave primária e pode ter colunas diferentes. Optimizado para escritas de alta velocidade e leituras por primary key. Consistência configurável por operação: ONE (fastest), QUORUM (balanced), ALL (strongest).',
      internals: 'Consistent hashing ring para distribuição de dados. Virtual nodes (vnodes) para balanceamento. LSM-tree storage: escritas vão para memtable (RAM) + commitlog (disco), depois compactadas para SSTables. Gossip protocol para detecção de falhas.',
      pros: ['Escrita O(1) independente do volume', 'Sem ponto único de falha — todas os nós são iguais', 'Escala linear — dobrar nós = dobrar throughput', 'Consistência tunable por operação', 'Multi-datacenter nativo'],
      cons: ['Queries fortemente limitadas ao primary key', 'Sem JOINs — modelação orientada a queries', 'Schema design complexo — precisa conhecer queries antes', 'Compaction pode degradar performance'],
      examples: ['Histórico de actividade de utilizadores (Netflix, Instagram)', 'Dados de sensores IoT por device_id + timestamp', 'Logs de auditoria com alta taxa de escrita', 'Leaderboards em tempo real', 'Mensagens de chat com histórico por conversa'],
    },
    {
      name: 'Neo4j', family: 'Graph', color: '#4a9eed', cap: 'CA (single node) / CP (cluster)',
      usecase: 'Detecção de fraude, redes sociais, recomendações, knowledge graphs, supply chains',
      desc: 'Base de dados de grafo nativa — nós (entidades), relações (conexões tipadas), e propriedades em ambos. A característica distintiva é "index-free adjacency": cada nó tem um ponteiro directo para os seus vizinhos. Uma traversal de 1 hop é O(1) — independente do tamanho do grafo. SQL com JOINs recursivos para o mesmo problema seria O(n³) ou pior.',
      internals: 'Store files separados para nós, relações e propriedades. Cada nó guarda lista ligada de relações adjacentes — pointer arithmetic directa sem índices. Cypher é compilado para planos físicos com análise de selectividade. Bloom filters para verificação rápida de existência.',
      pros: ['Traversals O(1) por hop — indep. do tamanho do grafo', 'Cypher declarativo e intuitivo', 'Visualização nativa com Neo4j Browser', 'ACID completo em single node', 'Algoritmos de grafo integrados (GDS Library)'],
      cons: ['Não escala horizontalmente para grafos > 1B nós', 'OLAP sobre grafos muito grandes é lento', 'Não é ideal para dados não-relacionais', 'Curva de aprendizagem do modelo de grafo'],
      examples: ['Detecção de fraude por transacções triangulares', 'Recomendações "pessoas que conheces"', 'Knowledge graph de produtos/categorias', 'Compliance e lineage de dados', 'Mapeamento de redes de supply chain'],
    },
  ];
  const d = dbs[db];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>As 4 Famílias NoSQL — Arquitectura e Trade-offs</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {dbs.map((dbItem, i) => (
          <button key={i} onClick={() => setDb(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: db === i ? dbItem.color : 'var(--bg-primary)', color: db === i ? (dbItem.color === '#4a9eed' ? '#000' : 'white') : 'var(--text-primary)', border: `1.5px solid ${db === i ? dbItem.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{dbItem.name} <span style={{ fontSize: '0.72rem', opacity: 0.85 }}>({dbItem.family})</span></button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${d.color}40` }}>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
          <span style={{ background: `${d.color}15`, border: `1px solid ${d.color}30`, color: d.color, fontSize: '0.75rem', fontWeight: 700, padding: '0.15rem 0.6rem', borderRadius: 12 }}>CAP: {d.cap}</span>
          <span style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', color: '#4a9eed', fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.6rem', borderRadius: 12 }}>{d.usecase}</span>
        </div>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.6rem' }}>{d.desc}</p>
        <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}><strong style={{ color: d.color }}>Internos:</strong> {d.internals}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
          <div>
            <div style={{ fontSize: '0.72rem', color: '#4a9eed', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>Vantagens</div>
            {d.pros.map(p => <div key={p} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.15rem' }}>✓ {p}</div>)}
          </div>
          <div>
            <div style={{ fontSize: '0.72rem', color: '#4a9eed', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>Limitações</div>
            {d.cons.map(c => <div key={c} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.15rem' }}>✗ {c}</div>)}
          </div>
          <div>
            <div style={{ fontSize: '0.72rem', color: d.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>Exemplos reais</div>
            {d.examples.map(e => <div key={e} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.15rem' }}>• {e}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BDM1() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/bigdata-mgmt" style={S.back}><ArrowLeft size={16} /> Voltar a Big Data Mgmt</Link>
        <div style={S.tag}>Module 1</div>
        <h1 style={S.h1}>Bases de Dados NOSQL</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. Evolução das Bases de Dados</h2>
          <p style={S.p}>
            Uma base de dados é uma coleção organizada de dados persistentes, gerida por um Sistema de Gestão de Bases de Dados (SGBD).
            Três propriedades fundamentais distinguem uma BD de um simples ficheiro de dados:
          </p>
          <div style={S.highlight}>
            <p style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.5rem' }}>Propriedades essenciais de uma Base de Dados</p>
            <ul style={{ color: 'var(--text-primary)', lineHeight: 2, paddingLeft: '1.25rem', margin: 0 }}>
              <li><strong>Auto-descritiva</strong> — o catálogo (metadados) está integrado na própria BD; o SGBD pode ler a sua estrutura sem documentação externa.</li>
              <li><strong>Integrada</strong> — os dados são armazenados uma única vez e partilhados por múltiplos utilizadores e aplicações, eliminando redundância.</li>
              <li><strong>Baseada em registos</strong> — a informação é organizada em unidades lógicas (registos, documentos, nós) que podem ser acedidas e manipuladas individualmente.</li>
            </ul>
          </div>
          <p style={S.p}>
            O SGBD actua como intermediário entre as aplicações e os dados físicos, fornecendo controlo de concorrência, recuperação de falhas, segurança e uma linguagem de consulta de alto nível. A gestão de dados evoluiu em resposta a limitações sucessivas, cada geração resolvendo os problemas da anterior mas introduzindo novos desafios:
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Era</th>
                  <th style={S.th}>Modelo</th>
                  <th style={S.th}>Problema principal</th>
                  <th style={S.th}>Solução introduzida</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1950–60s', 'Ficheiros planos (Flat Files)', 'Duplicação de dados, sem partilha, dependência de programa', 'Separação física de dados e programas'],
                  ['1960–70s', 'Modelo Hierárquico (IMS IBM)', 'Estrutura em árvore rígida; relações many-to-many impossíveis', 'Navegação por ponteiros; acesso directo a registos'],
                  ['1970s', 'Modelo em Rede (CODASYL)', 'Complexidade de programação; acesso em modo navegacional', 'Relações many-to-many via conjuntos (sets)'],
                  ['1980–2000s', 'Modelo Relacional (SQL)', 'Escalabilidade horizontal; dados não estruturados; Big Data', 'Álgebra relacional, ACID, linguagem declarativa (SQL)'],
                  ['2000s–hoje', 'NoSQL / NewSQL', 'Modelos de dados rígidos; consistência vs disponibilidade', 'Escalabilidade horizontal, flexibilidade de esquema, BASE'],
                ].map(([era, modelo, problema, solucao]) => (
                  <tr key={era}>
                    <td style={S.td}>{era}</td>
                    <td style={S.td}>{modelo}</td>
                    <td style={S.td}>{problema}</td>
                    <td style={S.td}>{solucao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.note}>
            O modelo relacional, proposto por Edgar F. Codd em 1970, dominou durante mais de 30 anos. O surgimento da Web 2.0 e do Big Data expôs as suas limitações de escalabilidade — explorámos isso na próxima secção.
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Porque o RDBMS Não Escala para Big Data</h2>
          <p style={S.p}>As bases de dados relacionais foram concebidas nos anos 70 por Edgar Codd, num contexto onde os dados cabiam num único servidor e a consistência era absoluta. O modelo ACID (Atomicity, Consistency, Isolation, Durability) garante exactamente as propriedades necessárias para transacções bancárias e sistemas de inventário — mas a um custo: escalonamento horizontal é extremamente difícil.</p>
          <p style={S.p}>O problema fundamental é o distributed coordination overhead. Para garantir ACID numa transacção distribuída (que envolve múltiplos servidores), é necessário um protocolo de two-phase commit: fase 1 de preparação (todos os nós confirmam que podem commitar), fase 2 de commit (todos os nós aplicam). Este protocolo é bloqueante e lento — para N servidores, a latência cresce com N. Para 1.000 servidores, torna-se impraticável.</p>
          <p style={S.p}>Além disso, bases de dados relacionais usam índices B-tree que são eficientes em disco rotativo mas não estão optimizados para escritas de alta velocidade. Uma inserção num índice B-tree pode causar múltiplas reescritas de páginas (page splits). Para cargas de escrita de 100.000 operações/segundo, isto cria I/O intensivo que nenhum SSD consegue sustentar indefinidamente.</p>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>RDBMS</th><th style={S.th}>NoSQL</th></tr></thead>
              <tbody>
                {[
                  ['Modelo de dados', 'Tabelas com schema rígido, relações via JOINs', 'Documentos, key-value, wide-column, grafos — schema flexível'],
                  ['Escalonamento', 'Vertical (scale up) — servidor mais potente', 'Horizontal (scale out) — mais servidores commodity'],
                  ['Consistência', 'ACID forte — garantias de transacções completas', 'BASE — eventual consistency (mais flexível)'],
                  ['Queries', 'SQL completo, JOINs arbitrários, subqueries', 'API específica da família, JOINs limitados ou ausentes'],
                  ['Schema', 'Schema-on-Write — rígido, migrations necessárias', 'Schema-on-Read — flexível, evolução sem downtime'],
                  ['Particionamento', 'Particionamento nativo limitado, sharding manual', 'Sharding automático, consistent hashing, vnodes'],
                  ['Replicação', 'Master-Slave com failover manual', 'Multi-master ou peer-to-peer com failover automático'],
                ].map(([f, r, n]) => (
                  <tr key={f}><td style={{ ...S.td, fontWeight: 600 }}>{f}</td><td style={S.td}>{r}</td><td style={{ ...S.td, color: '#4a9eed' }}>{n}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <CAPDiagram />

          <h3 style={S.h3}>Entender o Teorema CAP em Profundidade</h3>
          <p style={S.p}>O Teorema CAP, provado formalmente por Eric Brewer e Seth Gilbert em 2002, afirma que um sistema distribuído não pode garantir simultaneamente Consistency, Availability e Partition Tolerance. Em sistemas distribuídos reais, partições de rede (P) são inevitáveis — switches falham, cabos são cortados, latências picos. Por isso, a escolha real é entre C e A quando uma partição ocorre.</p>
          <p style={S.p}>Um sistema CP (Consistency + Partition Tolerance) escolhe parar de responder (timeout, erro) quando não consegue garantir consistência durante uma partição. MongoDB com Replica Sets é CP: o nó primário pode ficar inacessível durante uma partição, mas o sistema recusa responder a escritas para evitar dados desactualizados. Um sistema AP (Availability + Partition Tolerance) escolhe continuar a responder mesmo com dados potencialmente desactualizados. Cassandra é AP: durante uma partição, cada nó serve os seus dados locais mesmo que não sejam os mais recentes — consistência eventual depois da resolução da partição.</p>

          <h3 style={S.h3}>ACID vs. BASE</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(74,158,237,0.06)', border: '1px solid rgba(74,158,237,0.2)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.5rem' }}>ACID (RDBMS)</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                <li><strong>Atomicity:</strong> transacção é tudo ou nada — nunca parcialmente aplicada</li>
                <li><strong>Consistency:</strong> a BD passa de um estado válido para outro — todas as constraints satisfeitas</li>
                <li><strong>Isolation:</strong> transacções concorrentes não se vêem — como se fossem sequenciais</li>
                <li><strong>Durability:</strong> após commit, os dados persistem mesmo após falha de hardware</li>
              </ul>
              <div style={{ fontSize: '0.82rem', color: '#4a9eed', marginTop: '0.5rem' }}>✓ Banca, pagamentos, sistemas críticos, inventário</div>
            </div>
            <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.5rem' }}>BASE (NoSQL)</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                <li><strong>Basically Available:</strong> o sistema responde sempre — mesmo que dados sejam desactualizados</li>
                <li><strong>Soft state:</strong> o estado do sistema pode mudar ao longo do tempo mesmo sem inputs</li>
                <li><strong>Eventually consistent:</strong> se parar de receber updates, o sistema converge para consistência</li>
              </ul>
              <div style={{ fontSize: '0.82rem', color: '#4a9eed', marginTop: '0.5rem' }}>✓ Redes sociais, IoT, analytics, caching, profiles</div>
            </div>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. As 4 Famílias NoSQL</h2>
          <NoSQLExplorer />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Bases de Dados Especializadas</h2>
          <p style={S.p}>Além das 4 famílias clássicas, surgiram bases de dados optimizadas para workloads específicos que explodiram com Big Data e AI:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { name: 'Elasticsearch', tag: 'Search', color: '#4a9eed', desc: 'Motor de pesquisa distribuído baseado em Apache Lucene. Usa índices invertidos — mapeia palavras para documentos que as contêm. Suporta full-text search com relevância (TF-IDF/BM25), faceting, geo-search, e aggregações. A Stack ELK (Elasticsearch + Logstash + Kibana) é o padrão para análise de logs em tempo real.', usecase: 'Pesquisa de produtos em e-commerce, análise de logs de aplicações, monitoring de infraestrutura.' },
              { name: 'InfluxDB', tag: 'Time-Series', color: '#4a9eed', desc: 'Base de dados construída especificamente para dados sequenciais com timestamp. Optimizações específicas: compressão temporal (delta encoding), TTL automático por "retention policy", window aggregations nativas (MEAN por 5min), e queries de time-range extremamente eficientes.', usecase: 'Métricas de sistemas (CPU, memória, rede), dados de sensores IoT, dados financeiros tick-by-tick.' },
              { name: 'Pinecone / Weaviate', tag: 'Vector DB', color: '#4a9eed', desc: 'Armazena vectores de alta dimensionalidade (embeddings) de modelos ML (BERT, OpenAI, etc.). Permite queries de similaridade aproximada (ANN — Approximate Nearest Neighbors): dado um embedding de query, encontrar os K vectores mais similares. É o backbone de sistemas RAG com LLMs.', usecase: 'Busca semântica, RAG com LLMs, sistemas de recomendação baseados em embeddings, detecção de duplicados.' },
              { name: 'Delta Lake / Iceberg', tag: 'Lakehouse', color: '#4a9eed', desc: 'Formatos de tabela que adicionam ACID a ficheiros Parquet no object storage. Delta Lake (Databricks) e Apache Iceberg (Netflix/Apple) oferecem: transacções ACID, schema evolution, time travel (consultar versões anteriores), MERGE/UPDATE/DELETE sobre Parquet, e Z-ordering para otimização de queries.', usecase: 'Data Lakehouse architecture — unir a escala do Data Lake com as garantias do Data Warehouse.' },
            ].map(({ name, tag, color, desc, usecase }) => (
              <div key={name} style={{ background: 'var(--bg-secondary)', border: `1px solid ${color}30`, borderRadius: 10, padding: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 700, color, fontSize: '0.95rem' }}>{name}</span>
                  <span style={{ background: `${color}15`, border: `1px solid ${color}30`, color, fontSize: '0.7rem', fontWeight: 700, padding: '0.1rem 0.5rem', borderRadius: 10 }}>{tag}</span>
                </div>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{desc}</p>
                <p style={{ fontSize: '0.8rem', color, margin: 0, fontWeight: 600 }}>Uso: {usecase}</p>
              </div>
            ))}
          </div>

          <h3 style={S.h3}>Polyglot Persistence — A Norma em Produção</h3>
          <p style={S.p}>Nenhuma base de dados é a melhor escolha para todos os casos de uso. Sistemas de produção modernos usam múltiplas bases de dados em conjunto — cada uma optimizada para o seu workload específico. Este padrão chama-se polyglot persistence.</p>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', fontSize: '0.87rem', lineHeight: 2, marginBottom: '1.5rem' }}>
            <div style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem' }}>Arquitectura Netflix (simplificada):</div>
            <div>• <span style={{ color: '#4a9eed', fontWeight: 600 }}>Apache Cassandra</span> — histórico de visualizações de 200M+ utilizadores (escrita massiva, alta disponibilidade, multi-region)</div>
            <div>• <span style={{ color: '#4a9eed', fontWeight: 600 }}>Amazon S3 + Parquet</span> — dados brutos para analytics batch com Spark</div>
            <div>• <span style={{ color: '#4a9eed', fontWeight: 600 }}>Elasticsearch</span> — pesquisa de títulos e catálogo de 15.000+ títulos</div>
            <div>• <span style={{ color: '#4a9eed', fontWeight: 600 }}>Redis</span> — cache de recomendações personalizadas e sessões ativas</div>
            <div>• <span style={{ color: '#4a9eed', fontWeight: 600 }}>MySQL (Aurora)</span> — dados de billing, subscrições e contratos (ACID obrigatório)</div>
            <div>• <span style={{ color: '#4a9eed', fontWeight: 600 }}>InfluxDB</span> — métricas de performance dos servidores e CDN</div>
          </div>

          <h3 style={S.h3}>Guia de Selecção — Perguntas para Escolher</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Pergunta chave</th><th style={S.th}>Resposta sim → considerar</th></tr></thead>
              <tbody>
                {[
                  ['Os dados têm relações complexas e precisas de traversal eficiente?', 'Neo4j, JanusGraph, Amazon Neptune'],
                  ['Documentos JSON hierárquicos com schema variável por item?', 'MongoDB, Couchbase, DynamoDB (document mode)'],
                  ['Escrita de 10.000+ eventos/segundo com alta disponibilidade?', 'Cassandra, HBase, ScyllaDB'],
                  ['Cache de alta velocidade com latência < 1 ms?', 'Redis, Memcached'],
                  ['Full-text search com relevância e faceting?', 'Elasticsearch, OpenSearch, Solr'],
                  ['Dados com timestamps sequenciais (IoT, métricas)?', 'InfluxDB, TimescaleDB, QuestDB'],
                  ['Embeddings vectoriais para AI/RAG/recomendação?', 'Pinecone, Weaviate, Milvus, pgvector (PostgreSQL)'],
                  ['Transacções ACID com JOINs relacionais obrigatórios?', 'PostgreSQL, MySQL, CockroachDB (distributed SQL)'],
                  ['Data Lakehouse com ACID sobre object storage?', 'Delta Lake, Apache Iceberg, Apache Hudi'],
                ].map(([q, r]) => (
                  <tr key={q}><td style={S.td}>{q}</td><td style={{ ...S.td, color: '#4a9eed', fontWeight: 600, fontSize: '0.85rem' }}>{r}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
