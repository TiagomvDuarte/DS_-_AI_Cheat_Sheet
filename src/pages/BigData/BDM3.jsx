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

const DocumentModelDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Hierarquia MongoDB — Instância {'>'} Database {'>'} Collection {'>'} Document</p>
    <svg viewBox="0 0 480 200" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Instance */}
      <rect x="10" y="80" width="90" height="40" rx="8" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="1.5" />
      <text x="55" y="97" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">MongoDB</text>
      <text x="55" y="111" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Instância</text>
      {/* Arrow */}
      <line x1="100" y1="100" x2="120" y2="100" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#a1)" />
      <defs><marker id="a1" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#f97316" /></marker></defs>
      {/* Database */}
      <rect x="120" y="70" width="90" height="60" rx="8" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="1.5" />
      <text x="165" y="92" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Database</text>
      <text x="165" y="107" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">myapp_db</text>
      <text x="165" y="120" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">N databases</text>
      {/* Arrow */}
      <line x1="210" y1="100" x2="230" y2="100" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#a2)" />
      <defs><marker id="a2" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#f97316" /></marker></defs>
      {/* Collection */}
      <rect x="230" y="65" width="90" height="70" rx="8" fill="rgba(251,146,60,0.12)" stroke="#fb923c" strokeWidth="1.5" />
      <text x="275" y="87" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">Collection</text>
      <text x="275" y="102" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">users</text>
      <text x="275" y="115" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">orders</text>
      <text x="275" y="127" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">N collections</text>
      {/* Arrow */}
      <line x1="320" y1="100" x2="340" y2="100" stroke="#fb923c" strokeWidth="1.5" markerEnd="url(#a3)" />
      <defs><marker id="a3" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#fb923c" /></marker></defs>
      {/* Document */}
      <rect x="340" y="30" width="130" height="140" rx="8" fill="rgba(245,158,11,0.10)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="405" y="52" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">Document (BSON)</text>
      <text x="360" y="72" fill="var(--text-secondary)" fontSize="8">_id: ObjectID("abc123")</text>
      <text x="360" y="87" fill="var(--text-secondary)" fontSize="8">name: "Alice Smith"</text>
      <text x="360" y="102" fill="var(--text-secondary)" fontSize="8">age: 30</text>
      <text x="360" y="117" fill="var(--text-secondary)" fontSize="8">address: {"{"}</text>
      <text x="370" y="132" fill="var(--text-secondary)" fontSize="8">  city: "Lisboa"</text>
      <text x="360" y="147" fill="var(--text-secondary)" fontSize="8">{"}"}</text>
      <text x="360" y="162" fill="var(--text-secondary)" fontSize="8">orders: [...]</text>
    </svg>
    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Cada documento tem obrigatoriamente um campo _id com ObjectID() único. Documentos dentro da mesma collection podem ter campos diferentes (schema flexível). BSON é a representação interna binária do JSON.</p>
  </div>
);

const AggregationExplorer = () => {
  const [stage, setStage] = useState(0);
  const stages = [
    {
      name: '$match',
      syntax: '{ $match: { author: "dave" } }',
      desc: 'Filtra documentos — equivalente ao WHERE do SQL. Deve ser o primeiro estágio sempre que possível: reduz o volume de dados que os estágios seguintes têm de processar.',
      tip: 'Regra de ouro: colocar $match o mais cedo possível. Reduz o volume de dados por ordens de magnitude.',
      type: 'Streaming',
    },
    {
      name: '$project',
      syntax: '{ $project: { title: 1, "author.first": 1 } }',
      desc: 'Seleciona ou calcula campos — equivalente ao SELECT do SQL. 1 inclui o campo, 0 exclui. Pode criar campos calculados com expressões.',
      tip: 'Usar $project para reduzir o tamanho dos documentos antes de estágios pesados como $sort.',
      type: 'Streaming',
    },
    {
      name: '$group',
      syntax: '{ $group: { _id: "$customer", total: { $sum: "$total" } } }',
      desc: 'Agrupa documentos por uma chave e aplica acumuladores ($sum, $avg, $first, $last, etc.). Equivalente ao GROUP BY do SQL. Não garante ordem no output.',
      tip: 'Estágio BLOCKING — espera por todos os documentos antes de processar. Combinar com $match anterior.',
      type: 'Blocking',
    },
    {
      name: '$sort',
      syntax: '{ $sort: { total: -1 } }',
      desc: 'Ordena os documentos. 1 para ascendente, -1 para descendente. Equivalente ao ORDER BY do SQL.',
      tip: 'Estágio BLOCKING. Usar $limit + $sort juntos — o motor colapsa ambos e processa apenas os N documentos necessários.',
      type: 'Blocking',
    },
    {
      name: '$lookup',
      syntax: '{ $lookup: { from: "orders", localField: "_id", foreignField: "customer_id", as: "orders" } }',
      desc: 'Join entre collections (left outer join). Adiciona um array com os documentos correspondentes da collection externa. Equivalente ao LEFT JOIN do SQL.',
      tip: 'Joins são caros em MongoDB — usar o Extended Reference Pattern para evitar $lookup nas queries críticas.',
      type: 'Blocking',
    },
    {
      name: '$unwind',
      syntax: '{ $unwind: "$orders" }',
      desc: 'Expande um array: um documento com N elementos torna-se N documentos. Necessário antes de $group se quiser agregar por elementos do array.',
      tip: 'Usar com cuidado: pode explodir o número de documentos no pipeline.',
      type: 'Streaming',
    },
  ];
  const s = stages[stage];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Aggregation Pipeline — Estágios Principais</p>
      <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {stages.map((st, i) => (
          <button key={i} onClick={() => setStage(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 700, fontSize: '0.82rem', background: stage === i ? '#f97316' : 'var(--bg-primary)', color: stage === i ? '#000' : 'var(--text-primary)', border: `1.5px solid ${stage === i ? '#f97316' : 'var(--card-border)'}`, transition: 'all 0.2s', fontFamily: 'monospace' }}>{st.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: '1.5px solid rgba(249,115,22,0.25)' }}>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', alignItems: 'center' }}>
          <code style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)', color: '#f97316', fontSize: '0.8rem', padding: '0.3rem 0.7rem', borderRadius: 6, fontFamily: 'monospace', flex: 1 }}>{s.syntax}</code>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: 12, background: s.type === 'Blocking' ? 'rgba(234,88,12,0.15)' : 'rgba(249,115,22,0.1)', color: s.type === 'Blocking' ? '#ea580c' : '#f97316', border: `1px solid ${s.type === 'Blocking' ? '#ea580c40' : '#f9731640'}`, whiteSpace: 'nowrap' }}>{s.type}</span>
        </div>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{s.desc}</p>
        <div style={{ background: 'rgba(249,115,22,0.06)', borderLeft: '3px solid #f97316', borderRadius: '0 6px 6px 0', padding: '0.5rem 0.75rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Boas práticas: {s.tip}</div>
      </div>
    </div>
  );
};

const DesignPatternExplorer = () => {
  const [pat, setPat] = useState(0);
  const patterns = [
    { name: 'Polimórfico', prob: 'Documentos com estrutura semelhante mas não idêntica numa collection.', sol: 'Um campo adicional indica o tipo de documento e a aplicação tem code paths diferentes para cada tipo.', use: 'Catálogo de produtos com livros, electrónica e vestuário na mesma collection — cada categoria tem campos únicos.' },
    { name: 'Extended Reference', prob: 'Joins ($lookup) são caros. Aceder a campos de outro documento em cada query.', sol: 'Embeber no documento os campos mais usados do documento referenciado. Só trazer campos que mudam raramente.', use: 'Encomenda que guarda nome e foto do cliente além do customer_id — evita $lookup para mostrar a lista de encomendas.' },
    { name: 'Attribute Pattern', prob: 'Muitos campos semelhantes mas não partilhados por todos os documentos (ex: datas de lançamento de filmes por país), dificultando indexação.', sol: 'Transformar esse subconjunto de campos num array de pares chave-valor. Ex: [{location: "US", date: "2020-01-01"}].', use: 'Filmes com datas de lançamento diferentes por país — em vez de release_us, release_pt, usa array releases.' },
    { name: 'Bucket Pattern', prob: 'Dados com alta velocidade de inserção (IoT, time series) criam demasiados documentos pequenos.', sol: 'Agrupar eventos em "baldes" por período — um documento por dispositivo por dia, com array de medições.', use: 'Sensores IoT com 1.000 medições/hora — em vez de 1.000 documentos, um documento diário com array de medições.' },
    { name: 'Computed Pattern', prob: 'Cálculos pesados repetidos em tempo de leitura (ex: total de receitas) com 1M reads/hora e apenas 1K writes/hora.', sol: 'Pré-calcular e armazenar o resultado em cada escrita. Fan out on writes em vez de fan out on reads.', use: 'Total de receitas calculado em cada nova encomenda em vez de recalculado em cada visualização do dashboard.' },
    { name: 'Subset Pattern', prob: 'MongoDB mantém dados em RAM; documentos grandes (com muitos reviews, comentários) pressionam a memória.', sol: 'Separar a entidade em duas collections — hot data (frequentemente acedida) e cold data (raramente consultada).', use: 'Produto com os 10 reviews mais recentes no documento principal; todos os reviews numa collection separada.' },
  ];
  const p = patterns[pat];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Padrões de Design MongoDB</p>
      <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {patterns.map((pt, i) => (
          <button key={i} onClick={() => setPat(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: pat === i ? '#f97316' : 'var(--bg-primary)', color: pat === i ? '#000' : 'var(--text-primary)', border: `1.5px solid ${pat === i ? '#f97316' : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{pt.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: '1.5px solid rgba(249,115,22,0.25)' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ea580c', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Problema:</span>
          <p style={{ fontSize: '0.87rem', color: 'var(--text-primary)', margin: '0.2rem 0 0.75rem' }}>{p.prob}</p>
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Solução:</span>
          <p style={{ fontSize: '0.87rem', color: 'var(--text-primary)', margin: '0.2rem 0 0.75rem' }}>{p.sol}</p>
        </div>
        <div style={{ background: 'rgba(249,115,22,0.06)', borderLeft: '3px solid #f97316', borderRadius: '0 6px 6px 0', padding: '0.5rem 0.75rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Exemplo real: {p.use}</div>
      </div>
    </div>
  );
};

export default function BDM3() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/bigdata-mgmt" style={S.back}><ArrowLeft size={16} /> Voltar a Big Data Mgmt</Link>
        <div style={S.tag}>Module 3</div>
        <h1 style={S.h1}>Document Databases — MongoDB</h1>
        <p style={S.lead}>O modelo de documento JSON/BSON, CRUD, Aggregation Pipeline e modelação de dados. Embedding vs. referências, padrões de design e estratégias de escalabilidade com Replica Sets e Sharding. A regra fundamental: data that is used together should be stored together.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. O Modelo de Documento</h2>
          <p style={S.p}>MongoDB é a base de dados de documentos mais usada — o seu apelido interno é "the humongous database", desenhada para escala. O formato central é <strong>JSON</strong> (JavaScript Object Notation) — pares chave-valor organizados de forma hierárquica, legíveis por humanos e fáceis de integrar com aplicações web. Por baixo, o MongoDB usa <strong>BSON</strong> (Binary JSON) com quatro vantagens: Lightweight (overhead mínimo), Traversable (percorrível eficientemente pelo motor de queries), Efficient (codificação/descodificação rápida com tipos C) e suporte a mais tipos de dados (datas, binários).</p>

          <DocumentModelDiagram />

          <h3 style={S.h3}>Collections e Documentos</h3>
          <p style={S.p}>A unidade de armazenamento é o documento; o contentor é a collection. Collections não impõem estrutura — é possível guardar documentos de tipos diferentes na mesma collection. Regra prática: <em>Data that is used together should be stored together</em>. Cada documento tem obrigatoriamente um campo <code style={{ color: '#f97316' }}>_id</code> com ObjectID() único.</p>
          <div style={S.note}>
            Ao contrário das BD relacionais, o schema evolui com o sistema — adicionar novos campos não exige migrações. Mas isso não significa ausência de design: as regras de validação substituem o DDL relacional como mecanismo de controlo de qualidade.
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. CRUD e Queries</h2>
          <p style={S.p}>As quatro operações fundamentais em MongoDB: <code style={{ color: '#f97316' }}>insertOne/insertMany</code>, <code style={{ color: '#f97316' }}>find/findOne</code>, <code style={{ color: '#f97316' }}>updateOne/updateMany</code>, <code style={{ color: '#f97316' }}>deleteOne/deleteMany</code>. Atomicidade ao nível do documento: uma operação de escrita é sempre atómica num documento único.</p>

          <h3 style={S.h3}>Operadores de Comparação e Lógicos</h3>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>SQL</th><th style={S.th}>MongoDB Query</th><th style={S.th}>Descrição</th></tr></thead>
              <tbody>
                {[
                  ['WHERE status = \'D\'', '{ status: "D" }', 'Igualdade (operador implícito)'],
                  ['WHERE status IN (\'A\',\'D\')', '{ status: { $in: ["A","D"] } }', 'Pertence a conjunto'],
                  ['WHERE qty < 30', '{ qty: { $lt: 30 } }', 'Menor que'],
                  ['WHERE status=\'A\' AND qty&lt;30', '{ status:"A", qty:{$lt:30} }', 'AND implícito (objeto JSON)'],
                  ['WHERE status=\'A\' OR qty&lt;30', '{ $or: [{status:"A"}, {qty:{$lt:30}}] }', 'OR explícito com $or'],
                  ['Campo dentro de subdocumento', '{ "size.uom": "in" }', 'Notação de ponto para campos embebidos'],
                ].map(([sq, mq, d]) => (
                  <tr key={sq}><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{sq}</td><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem', color: '#f97316' }}>{mq}</td><td style={S.td}>{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.note}>
            O find() não devolve documentos diretamente — devolve um cursor, um ponteiro para os documentos da collection. Na shell, itera automaticamente os primeiros 20. Em JavaScript, é necessário lidar com o cursor explicitamente. Usar explain("executionStats") para diagnosticar se a query usa COLLSCAN ou IXSCAN.
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Aggregation Pipeline</h2>
          <p style={S.p}>A pipeline de agregação é o mecanismo de análise do MongoDB — equivalente ao GROUP BY, HAVING, JOIN e funções de janela do SQL, mas composto por estágios sequenciais. Conceito central: documentos entram no pipeline, são transformados estágio a estágio, e saem como resultado. Cada estágio recebe o output do anterior.</p>
          <p style={S.p}>Dois tipos de estágios: <strong>Streaming</strong> — documentos passam pelo estágio em lotes, sem esperar (ex: $match, $project, $unwind); <strong>Blocking</strong> — o estágio espera por todos os documentos antes de processar (ex: $sort, $group, $count).</p>

          <AggregationExplorer />

          <h3 style={S.h3}>Exemplo Real — Zipcodes DB</h3>
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            <div style={{ color: '#f97316', marginBottom: '0.5rem', fontFamily: 'sans-serif', fontWeight: 700, fontSize: '0.85rem' }}>Estados com população acima de 10 milhões:</div>
            <div>db.zips.aggregate( [</div>
            <div style={{ paddingLeft: '1rem' }}>{'{ $group: { _id: "$state", totalPop: { $sum: "$pop" } } },'}</div>
            <div style={{ paddingLeft: '1rem' }}>{'{ $match: { totalPop: { $gte: 10000000 } } }'}</div>
            <div>] )</div>
            <div style={{ marginTop: '0.5rem', color: 'var(--text-secondary)', opacity: 0.7 }}>{'// SQL equiv: SELECT state, SUM(pop) AS totalPop FROM zipcodes GROUP BY state HAVING totalPop >= 10000000'}</div>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Modelação — Embedding vs. Referências e Padrões</h2>
          <p style={S.p}>O modelo de dados é a decisão mais importante num sistema MongoDB. Ao contrário dos RDBMS, não existe uma forma "correta" normalizada — a estrutura ideal depende dos padrões de acesso. O processo de design tem 3 fases: (1) Workload — caracterizar dados e operações; (2) Relacionamentos — decidir embedding ou referência; (3) Padrões — aplicar padrões de design conhecidos.</p>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>Embedding (desnormalização)</th><th style={S.th}>Referências (chave estrangeira)</th></tr></thead>
              <tbody>
                {[
                  ['Analogia relacional', 'Desnormalização', 'Chave estrangeira'],
                  ['Quando usar', 'Dados sempre lidos juntos; relações 1:1 ou 1:poucos', 'Relações 1:muitos ou N:M; dados partilhados'],
                  ['Vantagem', 'Uma leitura; atomicidade garantida (mesmo documento)', 'Evita duplicação; documentos mais leves'],
                  ['Desvantagem', 'Documentos podem crescer demasiado (limite 16MB)', 'Requer $lookup (join) — mais lento'],
                  ['Regra prática', 'Embed on the most queried side', 'Minimizar o número de queries por operação'],
                ].map(([a, e, r]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 600 }}>{a}</td><td style={S.td}>{e}</td><td style={{ ...S.td, color: '#f97316' }}>{r}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <DesignPatternExplorer />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, lineHeight: 1.9 }}>
              <li style={{ marginBottom: '0.4rem' }}><strong>BSON e schema flexível</strong> — BSON (Binary JSON) suporta tipos Date, ObjectId, Decimal128 e binário que JSON não tem; schema flexível permite que documentos na mesma collection tenham campos diferentes — ideal para dados semi-estruturados e iteração rápida; mas sem schema validation (jsonSchema validator), dados inconsistentes acumulam-se silenciosamente — usar sempre `$jsonSchema` em produção.</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>Aggregation Pipeline</strong> — o aggregation pipeline encadeia estágios de transformação: `$match` (filtrar, usa índices), `$group` (agregar com acumuladores como $sum, $avg, $push), `$lookup` (LEFT OUTER JOIN com outra collection), `$unwind` (explode arrays), `$project` (reshape), `$sort`+`$limit` (top-N); o planner optimiza a ordem dos estágios — `$match` e `$limit` cedo reduzem drasticamente os documentos processados.</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>Embedding vs. Referências</strong> — embedding (subdocumento aninhado) é óptimo quando os dados são sempre acedidos juntos e a relação é 1:poucos (ex: endereços de um cliente); referências (ObjectId) são necessárias quando os dados são partilhados entre documentos, quando o subdocumento cresce sem limite (arrays ilimitados) ou quando é acedido independentemente; a regra: "se queries juntas, guardar juntas" — anti-padrão: arrays ilimitados que crescem para além de 16MB (limite de documento BSON).</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>Padrões de design</strong> — padrões MongoDB avançados: Bucket (agrupa medições temporais em documentos por janela de tempo — de 1 doc/medição para 1 doc/hora); Outlier (separa casos extremos num documento extra — evita arrays ilimitados); Computed (pré-calcula e armazena resultados de aggregations frequentes — trading writes por reads baratos); Extended Reference (desnormaliza campos frequentemente acedidos de documentos referenciados — evita $lookup em hot paths).</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>Replica Sets + Sharding</strong> — Replica Set: 1 primary + N secondaries (tipicamente 3 nós); writes vão ao primary, reads podem ir a secondaries com read preference; elecção automática em &lt;10s se o primary cair; Sharding distribui dados horizontalmente por shards via shard key — escolher shard key com alta cardinalidade e distribuição uniforme é crítico; chunk migration automática equilibra a carga entre shards.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
