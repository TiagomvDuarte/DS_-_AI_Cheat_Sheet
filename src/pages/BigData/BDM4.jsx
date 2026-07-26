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

const DataStructureExplorer = () => {
  const [ds, setDs] = useState(0);
  const structures = [
    {
      name: 'String',
      subtitle: 'chave → valor simples',
      commands: ['SET user:1 "Ana"', 'GET user:1', 'INCR contador', 'SETEX sessao:xyz 3600 "dados"'],
      desc: 'O tipo mais básico. Pode guardar texto, números inteiros ou binários até 512MB. Operações atómicas como INCR permitem contadores sem race conditions. SETEX define TTL ao mesmo tempo que o valor.',
      usecases: ['Cache de resultados de API', 'Contadores de visitas (INCR)', 'Sessões com TTL (SETEX)', 'Flags de feature toggles'],
    },
    {
      name: 'Hash',
      subtitle: 'chave → objeto',
      commands: ['HSET user:1 nome "Ana" idade 30', 'HGET user:1 nome', 'HMGET user:1 nome idade', 'HGETALL user:1'],
      desc: 'Mapeamento de campos para valores num único key. Ideal para representar objetos com múltiplos atributos. Com poucos campos, o Redis usa ziplist internamente — muito compacto em memória.',
      usecases: ['Perfis de utilizadores', 'Configurações de sessão', 'Contadores por campo', 'Carrinho de compras'],
    },
    {
      name: 'List',
      subtitle: 'lista ordenada (linked list)',
      commands: ['LPUSH fila "tarefa1"', 'RPUSH fila "tarefa2"', 'LPOP fila', 'LRANGE fila 0 -1'],
      desc: 'Lista ligada ordenada. LPUSH/RPUSH adicionam nas pontas; LPOP/RPOP removem. O(1) para push e pop nas pontas. LRANGE permite ler segmentos sem remover. Ideal para filas (FIFO) ou stacks (LIFO).',
      usecases: ['Fila de tarefas assíncronas', 'Log de últimas N acções', 'Chat histórico recente', 'Pipeline de processamento'],
    },
    {
      name: 'Set',
      subtitle: 'conjunto único (sem duplicados)',
      commands: ['SADD tags "redis" "nosql"', 'SMEMBERS tags', 'SISMEMBER tags "redis"', 'SUNION tags1 tags2'],
      desc: 'Conjunto não ordenado de strings únicas. SADD adiciona; SISMEMBER verifica pertença em O(1). Operações de conjuntos nativas: SUNION, SINTER, SDIFF. Ideal para tags, segmentos de utilizadores.',
      usecases: ['Tags de artigos', 'Segmentos de utilizadores', 'Amigos em comum (SINTER)', 'Tracking de IPs únicos'],
    },
    {
      name: 'Sorted Set',
      subtitle: 'set com pontuação (skip list)',
      commands: ['ZADD ranking 9800 "Ana"', 'ZADD ranking 7400 "Rui"', 'ZRANK ranking "Rui"', 'ZRANGE ranking 0 9 WITHSCORES'],
      desc: 'Conjunto ordenado por pontuação (score). Internamente usa skip lists — O(log N) para insert e query por rank. ZRANK devolve a posição; ZRANGE devolve por ordem. Scores podem ser atualizados com ZINCRBY.',
      usecases: ['Leaderboards em tempo real', 'Rate limiting (score = timestamp)', 'Sugestões ordenadas por relevância', 'Timeline de eventos'],
    },
    {
      name: 'Stream',
      subtitle: 'log de eventos ordenado',
      commands: ['XADD eventos * action "login" user "1"', 'XREAD COUNT 10 STREAMS eventos 0', 'XGROUP CREATE eventos grp $', 'XACK eventos grp "1609..."'],
      desc: 'Coleção ordenada de eventos com ID baseado em timestamp. Semelhante ao Kafka mas em memória. Suporta consumer groups para processamento paralelo. XACK confirma processamento de uma mensagem.',
      usecases: ['Event sourcing', 'Fila de mensagens resiliente', 'Streaming de actividade de utilizadores', 'Integração de microserviços'],
    },
  ];
  const d = structures[ds];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Estruturas de Dados Redis — Cada Uma Optimizada para um Padrão de Acesso</p>
      <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {structures.map((s, i) => (
          <button key={i} onClick={() => setDs(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: ds === i ? '#4a9eed' : 'var(--bg-primary)', color: ds === i ? '#000' : 'var(--text-primary)', border: `1.5px solid ${ds === i ? '#4a9eed' : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{s.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: '1.5px solid rgba(74,158,237,0.25)' }}>
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.75rem', fontStyle: 'italic' }}>{d.subtitle}</div>
        <p style={{ fontSize: '0.87rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{d.desc}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <div>
            <div style={{ fontSize: '0.72rem', color: '#4a9eed', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem', fontWeight: 700 }}>Comandos</div>
            {d.commands.map(c => <div key={c} style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: '#bae6fd', marginBottom: '0.2rem', background: 'rgba(74,158,237,0.07)', padding: '0.15rem 0.4rem', borderRadius: 4 }}>{c}</div>)}
          </div>
          <div>
            <div style={{ fontSize: '0.72rem', color: '#4a9eed', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem', fontWeight: 700 }}>Casos de uso</div>
            {d.usecases.map(u => <div key={u} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>• {u}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

const CacheFlowDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Fluxo Cache Redis — HIT vs. MISS</p>
    <svg viewBox="0 0 500 220" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Application */}
      <rect x="180" y="10" width="120" height="40" rx="8" fill="rgba(74,158,237,0.12)" stroke="#4a9eed" strokeWidth="2" />
      <text x="240" y="27" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">Aplicação</text>
      <text x="240" y="42" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">faz pedido</text>
      {/* Arrow down to Redis */}
      <line x1="240" y1="50" x2="240" y2="75" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#ra1)" />
      <defs><marker id="ra1" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#4a9eed" /></marker></defs>
      {/* Redis */}
      <rect x="160" y="75" width="160" height="45" rx="8" fill="rgba(74,158,237,0.18)" stroke="#4a9eed" strokeWidth="2" />
      <text x="240" y="95" textAnchor="middle" fill="#4a9eed" fontSize="12" fontWeight="800">Redis (RAM)</text>
      <text x="240" y="112" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">chave existe?</text>
      {/* HIT arrow left */}
      <line x1="160" y1="97" x2="80" y2="97" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#ra2)" />
      <defs><marker id="ra2" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#4a9eed" /></marker></defs>
      <text x="120" y="90" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">HIT</text>
      {/* HIT box */}
      <rect x="10" y="75" width="70" height="45" rx="8" fill="rgba(74,158,237,0.12)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="45" y="95" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">HIT</text>
      <text x="45" y="110" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">devolve logo</text>
      {/* HIT response arrow back up */}
      <path d="M45,75 Q45,40 180,30" fill="none" stroke="#4a9eed" strokeWidth="1" strokeDasharray="4,3" markerEnd="url(#ra3)" />
      <defs><marker id="ra3" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#4a9eed" /></marker></defs>
      <rect x="55" y="36" width="38" height="12" rx="2" fill="var(--bg-secondary)" />
      <text x="74" y="46" textAnchor="middle" fill="#4a9eed" fontSize="8">guarda</text>
      {/* MISS arrow right */}
      <line x1="320" y1="97" x2="390" y2="97" stroke="#1d4ed8" strokeWidth="1.5" markerEnd="url(#ra4)" />
      <defs><marker id="ra4" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#1d4ed8" /></marker></defs>
      <text x="355" y="90" textAnchor="middle" fill="#1d4ed8" fontSize="9" fontWeight="700">MISS</text>
      {/* DB box */}
      <rect x="390" y="75" width="85" height="45" rx="8" fill="rgba(29,78,216,0.10)" stroke="#1d4ed8" strokeWidth="1.5" />
      <text x="432" y="95" textAnchor="middle" fill="#1d4ed8" fontSize="10" fontWeight="700">Base de Dados</text>
      <text x="432" y="110" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">query SQL (lento)</text>
      {/* DB to store */}
      <line x1="432" y1="120" x2="432" y2="155" stroke="#1d4ed8" strokeWidth="1.5" markerEnd="url(#ra5)" />
      <defs><marker id="ra5" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#1d4ed8" /></marker></defs>
      {/* Store box */}
      <rect x="370" y="155" width="125" height="40" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="432" y="172" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Guarda no Redis</text>
      <text x="432" y="186" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">próximo pedido HIT</text>
      {/* Response back to app */}
      <path d="M432,155 Q432,130 320,110" fill="none" stroke="#1d4ed8" strokeWidth="1" strokeDasharray="4,3" markerEnd="url(#ra6)" />
      <defs><marker id="ra6" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#1d4ed8" /></marker></defs>
      <rect x="375" y="121" width="40" height="12" rx="2" fill="var(--bg-secondary)" />
      <text x="395" y="131" textAnchor="middle" fill="#1d4ed8" fontSize="8">resposta</text>
    </svg>
    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>HIT: Redis devolve o valor em microsegundos sem tocar na base de dados. MISS: consulta a base de dados, guarda o resultado no Redis com TTL e devolve — o próximo pedido idêntico será HIT.</p>
  </div>
);

export default function BDM4() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/bigdata-mgmt" style={S.back}><ArrowLeft size={16} /> Voltar a Big Data Mgmt</Link>
        <div style={S.tag}>Module 4</div>
        <h1 style={S.h1}>Key-Value Databases — Redis</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. O Conceito Base e Persistência</h2>
          <p style={S.p}>Chave-valor generaliza o conceito de arrays associativos (dicionários Python) para bases de dados, com três objetivos: <strong>Simplicidade</strong> (simples de operar e configurar), <strong>Velocidade</strong> (base de dados em memória — mais de 100.000 reads/writes por segundo) e <strong>Escalabilidade</strong> (pode operar em cluster).</p>
          <p style={S.p}>O Redis opera a partir da RAM — os dados têm de caber em memória para ter a performance que o caracteriza. O disco é usado para persistência e recuperação em caso de falha, não para servir dados em tempo real. Se os dados não couberem em RAM, a performance degrada drasticamente porque o sistema começa a fazer swap para disco.</p>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>RDB (snapshots)</th><th style={S.th}>AOF (Append Only File)</th></tr></thead>
              <tbody>
                {[
                  ['Mecanismo', 'Snapshot periódico do dataset para ficheiro .rdb', 'Regista cada operação de escrita em ficheiro de log'],
                  ['Vantagem', 'Ficheiro compacto; recuperação rápida; backup portátil', 'Boa performance de escrita; sem corrupções; fsync configurável'],
                  ['Desvantagem', 'Maior perda de dados (entre snapshots); snapshot pode ser lento com datasets grandes', 'Ficheiro maior que RDB; mais lento a recarregar após falha'],
                  ['Recomendação', 'Usar quando tolera perda de alguns minutos de dados', 'Usar quando quer durabilidade máxima; combinar com RDB'],
                ].map(([a, r, f]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 600 }}>{a}</td><td style={S.td}>{r}</td><td style={{ ...S.td, color: '#4a9eed' }}>{f}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Gestão de Memória — Eviction Policies</h3>
          <p style={S.p}>Quando a memória se esgota, o Redis aplica uma política de evicção:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
            {[
              { name: 'No eviction', desc: 'Recusa novas escritas quando cheio. Retorna erro OOM.' },
              { name: 'LRU', desc: 'Least Recently Used — elimina os dados menos usados recentemente.' },
              { name: 'LFU', desc: 'Least Frequently Used — elimina os dados usados com menos frequência.' },
              { name: 'Random', desc: 'Elimina chaves aleatoriamente. Mais rápido mas menos inteligente.' },
              { name: 'TTL', desc: 'Elimina preferencialmente os dados com expiração mais próxima.' },
              { name: 'allkeys-lru', desc: 'LRU sobre todas as chaves (com e sem TTL). O mais comum em cache.' },
            ].map(({ name, desc }) => (
              <div key={name} style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(74,158,237,0.2)', borderRadius: 8, padding: '0.75rem' }}>
                <div style={{ fontWeight: 700, color: '#4a9eed', fontSize: '0.85rem', marginBottom: '0.3rem' }}>{name}</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={S.note}>
            As políticas podem ser aplicadas a todas as chaves ou apenas às voláteis (com TTL definido). Se as evicções são um problema recorrente, é sinal de que chegou a hora de escalar — adicionar memória ou distribuir por mais nós.
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Estruturas de Dados Nativas</h2>
          <p style={S.p}>O Redis não é apenas um simples key-value store — suporta 6 tipos de estruturas de dados nativos, cada uma optimizada para um padrão de acesso diferente. Qualquer chave pode ter TTL (Time to Live) — expira automaticamente após N segundos.</p>

          <DataStructureExplorer />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Redis como Cache e Design de Chaves</h2>
          <p style={S.p}>O caso de uso mais comum: Redis como camada de cache para bases de dados relacionais. 40.000 chamadas por segundo sem pressionar a base de dados principal. O fluxo de cache tem dois caminhos: HIT (a chave existe no Redis — devolve imediatamente sem tocar na BD) e MISS (a chave não existe — executa a query na BD, guarda no Redis com TTL e devolve).</p>

          <CacheFlowDiagram />

          <h3 style={S.h3}>Design de Chaves</h3>
          <p style={S.p}>A decisão de design de chaves é tão importante como o schema numa base de dados relacional. Duas opções principais:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(74,158,237,0.2)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.4rem' }}>Opção 1 — Hash da query</div>
              <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', margin: 0 }}>Usar uma função de hash para criar uma chave curta e única a partir da query completa. Compacto mas opaco — difícil de debugar.</p>
            </div>
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(74,158,237,0.2)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.4rem' }}>Opção 2 — Schema legível</div>
              <div style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: '#bae6fd' }}>
                <div>customer:1982737:firstName</div>
                <div>customer:1982737:shippingAddress</div>
              </div>
              <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', marginTop: '0.4rem', marginBottom: 0 }}>Padrão: &lt;objectType&gt;:&lt;id&gt;:&lt;feature&gt;. Legível e fácil de debugar.</p>
            </div>
          </div>

          <h3 style={S.h3}>Problema de Staleness — Como Evitar Dessincronização</h3>
          <div style={S.highlight}>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, lineHeight: 2, fontSize: '0.9rem' }}>
              <li><strong>TTL</strong> — expirar a chave automaticamente após um período. A solução mais simples e mais usada.</li>
              <li><strong>Tracking</strong> — rastrear quem fez a query e invalidar o cache quando os dados mudam na BD.</li>
              <li><strong>Pub-Sub</strong> — subscrever a eventos de alteração dos dados relevantes e invalidar proativamente.</li>
            </ul>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Escalabilidade e Ecossistema Moderno</h2>
          <p style={S.p}><strong>Replicação:</strong> Redis usa arquitectura source/replica (anteriormente master/slave). Replicação assíncrona — mais rápida mas pode perder dados recentes em caso de falha. <strong>Cluster:</strong> distribui dados por múltiplos nós usando hashing das chaves em 16.384 slots. Hash Tags permitem co-localizar chaves relacionadas: chaves com <code style={{ color: '#4a9eed' }}>{'{customer}'}</code> ficam sempre no mesmo nó.</p>

          <h3 style={S.h3}>Redis no Ecossistema Moderno</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { name: 'Redis Search', desc: 'Permite usar o Redis como base de dados de documentos, base de dados vetorial, índice secundário e motor de busca. Suporta vector search, full-text search (com stemming, sinónimos, fuzzy matching) e queries geoespaciais.' },
              { name: 'Redis em RAG', desc: 'Vector database para armazenar embeddings vetoriais; Semantic cache para FAQs de pipelines RAG (reduz custos de inferência de LLMs); LLM session manager para guardar histórico de conversação.' },
              { name: 'Bloom Filters', desc: 'Estrutura probabilística que responde rapidamente a "este elemento está no conjunto?" com memória muito superior a um set convencional. Nunca há falsos negativos; podem existir falsos positivos.' },
              { name: 'Valkey (fork)', desc: 'Em Março de 2024, o Redis mudou de BSD-3 para licenciamento dual source-available. Em resposta, a Linux Foundation lançou Valkey como fork open-source, com Valkey 8.0 em Setembro de 2024 e Valkey 9.0 em Outubro de 2025.' },
            ].map(({ name, desc }) => (
              <div key={name} style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(74,158,237,0.2)', borderRadius: 10, padding: '1rem' }}>
                <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.4rem' }}>{name}</div>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Caso de Uso</th><th style={S.th}>Estrutura Redis</th><th style={S.th}>Padrão</th></tr></thead>
              <tbody>
                {[
                  ['Cache de API/DB', 'String + TTL', 'Guardar resultado com expiração automática'],
                  ['Sessões de utilizador', 'Hash + TTL', 'Guardar múltiplos campos de sessão; expirar após inactividade'],
                  ['Leaderboard em tempo real', 'Sorted Set', 'ZADD para actualizar score; ZRANGE para top-N'],
                  ['Rate limiting', 'String (INCR) + TTL', 'INCR por IP por segundo; recusar se > limite'],
                  ['Fila de tarefas', 'List (LPUSH/RPOP)', 'Producer: LPUSH; Consumer: RPOP ou BLPOP (bloqueante)'],
                  ['Pub/Sub de eventos', 'Stream ou Pub/Sub', 'PUBLISH canal mensagem; SUBSCRIBE canal'],
                  ['Locks distribuídos', 'String atómica + TTL', 'SET lock:recurso 1 NX EX 30 — adquire apenas se não existe'],
                ].map(([uc, st, p]) => (
                  <tr key={uc}><td style={{ ...S.td, fontWeight: 600 }}>{uc}</td><td style={{ ...S.td, color: '#4a9eed', fontFamily: 'monospace', fontSize: '0.85rem' }}>{st}</td><td style={S.td}>{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
