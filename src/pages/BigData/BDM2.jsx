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

const GraphDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Modelo de Grafo Neo4j — Nós, Relações e Propriedades</p>
    <svg viewBox="0 0 480 260" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Alice node */}
      <circle cx="100" cy="130" r="38" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="2" />
      <text x="100" y="125" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="800">Pessoa</text>
      <text x="100" y="140" textAnchor="middle" fill="var(--text-primary)" fontSize="10">Alice</text>
      <text x="100" y="153" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">age: 30</text>
      {/* Bob node */}
      <circle cx="250" cy="60" r="38" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="2" />
      <text x="250" y="55" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="800">Pessoa</text>
      <text x="250" y="70" textAnchor="middle" fill="var(--text-primary)" fontSize="10">Bob</text>
      <text x="250" y="83" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">age: 25</text>
      {/* Company node */}
      <circle cx="380" cy="130" r="38" fill="rgba(251,146,60,0.12)" stroke="#fb923c" strokeWidth="2" />
      <text x="380" y="125" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="800">Empresa</text>
      <text x="380" y="140" textAnchor="middle" fill="var(--text-primary)" fontSize="10">Acme Corp</text>
      <text x="380" y="153" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">city: Lisboa</text>
      {/* Movie node */}
      <circle cx="250" cy="210" r="38" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="2" />
      <text x="250" y="205" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="800">Filme</text>
      <text x="250" y="220" textAnchor="middle" fill="var(--text-primary)" fontSize="10">Inception</text>
      <text x="250" y="233" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">year: 2010</text>
      {/* Edges */}
      <line x1="136" y1="110" x2="214" y2="76" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <text x="160" y="87" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">CONHECE</text>
      <line x1="286" y1="76" x2="344" y2="110" stroke="#fb923c" strokeWidth="1.5" markerEnd="url(#arrow2)" />
      <text x="343" y="87" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="700">TRABALHA_EM</text>
      <line x1="136" y1="150" x2="214" y2="194" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow3)" />
      <text x="165" y="183" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">VIU</text>
      <line x1="286" y1="194" x2="344" y2="150" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow4)" />
      <text x="343" y="183" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">PRODUZIU</text>
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f97316" /></marker>
        <marker id="arrow2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#fb923c" /></marker>
        <marker id="arrow3" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f59e0b" /></marker>
        <marker id="arrow4" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f59e0b" /></marker>
      </defs>
    </svg>
    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Nós (círculos) têm labels e propriedades. Relações (setas) têm tipo, direção e também podem ter propriedades (ex: since: 2020). Index-free adjacency: cada nó guarda ponteiros directos para os seus vizinhos.</p>
  </div>
);

const CentralityExplorer = () => {
  const [metric, setMetric] = useState(0);
  const metrics = [
    {
      name: 'Degree Centrality',
      formula: 'dᵢ = kᵢ (grau do nó)',
      desc: 'Conta o número de ligações directas de cada nó. Nós com mais ligações são mais centrais. É a medida mais simples — identifica hubs de influência directa.',
      use: 'Marketing viral: identificar os utilizadores com mais conexões para maximizar difusão de mensagens.',
      example: 'Numa rede social, um utilizador com 1.000 seguidores tem degree centrality maior que um com 100.',
    },
    {
      name: 'Closeness Centrality',
      formula: 'cᵢ = 1 / Σⱼ dᵢⱼ',
      desc: 'Mede quão próximo um nó está de todos os outros. Nós com closeness alta conseguem alcançar qualquer outro nó rapidamente — estão bem posicionados para difundir informação.',
      use: 'Logística e epidemiologia: encontrar locais óptimos para centros de distribuição ou onde uma doença se propaga mais rápido.',
      example: 'Numa rede de cidades, a cidade com menor soma de distâncias a todas as outras tem maior closeness.',
    },
    {
      name: 'Betweenness Centrality',
      formula: 'Bᵢ = Σⱼ≠ₖ σⱼₖ(i) / σⱼₖ',
      desc: 'Conta quantos caminhos mais curtos entre pares de nós passam por um dado nó. Nós com betweenness alta são "mediadores" — controlam o fluxo de informação entre grupos.',
      use: 'Detecção de fraude: nós com betweenness anormalmente alta podem ser pontos de controlo de redes criminosas.',
      example: 'Um gestor que liga dois departamentos tem alta betweenness — a sua saída isolaria as duas equipas.',
    },
    {
      name: 'Eigenvector Centrality',
      formula: 'Iterativo — base do PageRank',
      desc: 'Não basta ter muitas conexões — importa estar ligado a nós centrais. Um nó ligado a muitos nós importantes tem eigenvector centrality alta, mesmo que tenha poucas conexões directas.',
      use: 'Base do algoritmo PageRank da Google: uma página com poucos links de sites muito importantes vale mais que muitos links de sites irrelevantes.',
      example: 'Um académico citado por Nobel laureates tem eigenvector centrality alta mesmo com poucas citações.',
    },
  ];
  const m = metrics[metric];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Medidas de Centralidade — Quem é o Mais Importante na Rede?</p>
      <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {metrics.map((mt, i) => (
          <button key={i} onClick={() => setMetric(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: metric === i ? '#f97316' : 'var(--bg-primary)', color: metric === i ? '#000' : 'var(--text-primary)', border: `1.5px solid ${metric === i ? '#f97316' : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{mt.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: '1.5px solid rgba(249,115,22,0.25)' }}>
        <div style={{ display: 'inline-block', background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.3)', color: '#f97316', fontSize: '0.8rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: 12, marginBottom: '0.75rem', fontFamily: 'monospace' }}>{m.formula}</div>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.6rem' }}>{m.desc}</p>
        <p style={{ fontSize: '0.83rem', color: '#f97316', fontWeight: 600, marginBottom: '0.3rem' }}>Caso de uso: <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>{m.use}</span></p>
        <p style={{ fontSize: '0.83rem', color: '#fb923c', fontWeight: 600, marginBottom: 0 }}>Exemplo: <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>{m.example}</span></p>
      </div>
    </div>
  );
};

export default function BDM2() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/bigdata-mgmt" style={S.back}><ArrowLeft size={16} /> Voltar a Big Data Mgmt</Link>
        <div style={S.tag}>Module 2</div>
        <h1 style={S.h1}>Graph Databases — Neo4j</h1>
        <p style={S.lead}>Grafos como modelo natural para relações complexas entre entidades. Da estrutura matemática ao Neo4j e Cypher, passando por métricas de centralidade, deteção de comunidades e Knowledge Graphs integrados com LLMs. Quando as relações são tão importantes quanto os dados em si.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. O Que É um Grafo e Porquê Usá-lo?</h2>
          <p style={S.p}>Um grafo é uma estrutura matemática composta por vértices (nós) e arestas (ligações). Em ciência de redes chamam-se nós e ligações; em matemática, vértices e arestas; em redes sociais, atores e relações. Exemplos práticos: cidades e estradas, proteínas e interações, estações de comboio e carris.</p>
          <p style={S.p}>Existem três tipos de arestas: <strong>não-dirigidas</strong> (ligação bidirecional entre dois nós), <strong>dirigidas</strong> (ligação com direção específica A → B) e <strong>pesadas</strong> (ligação com valor numérico associado, como distância ou custo). O Neo4j requer direção nas arestas — para relações sem direção, usam-se queries sem direção.</p>

          <div style={S.note}>
            Redes estão em todo o lado: estradas entre cidades, hierarquias organizacionais, propagação de doenças em sistemas sociais. Grafos são o modelo natural para qualquer problema onde as relações entre entidades são tão importantes quanto as entidades em si.
          </div>

          <h3 style={S.h3}>Grafos vs. Tabelas Relacionais</h3>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Problema</th>
                  <th style={S.th}>Base de Dados Relacional</th>
                  <th style={S.th}>Base de Dados em Grafo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Relação muitos-para-muitos', 'Tabela intermédia + joins', 'Aresta directa'],
                  ['Múltiplos tipos de relação', 'Múltiplas tabelas/colunas', 'Múltiplas labels de arestas'],
                  ['Velocidade de travessia', 'Degradação com profundidade', 'Constante (index-free adjacency)'],
                  ['Queries de caminho', 'Recursividade SQL complexa', 'Travessia nativa'],
                  ['Relações com propriedades', 'Coluna extra na tabela intermédia', 'Propriedade na aresta directamente'],
                ].map(([p, r, g]) => (
                  <tr key={p}><td style={{ ...S.td, fontWeight: 600 }}>{p}</td><td style={S.td}>{r}</td><td style={{ ...S.td, color: '#f97316' }}>{g}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <GraphDiagram />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Neo4j e Cypher</h2>
          <p style={S.p}>Neo4j é a base de dados em grafo mais usada. Usa a linguagem de query <strong>Cypher</strong> — equivalente ao SQL mas para grafos. A sintaxe central é: <code style={{ background: 'rgba(249,115,22,0.1)', padding: '0.1rem 0.4rem', borderRadius: 4, fontSize: '0.9rem', color: '#f97316' }}>(nodes)-[:RELACAO]-{'>'} (otherNodes)</code></p>
          <p style={S.p}>Parênteses redondos identificam nós; setas identificam relações com label. Escrever uma query é como desenhar um padrão no grafo — declara-se a forma que se quer encontrar.</p>

          <h3 style={S.h3}>Cypher — Operações Fundamentais</h3>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Operação</th><th style={S.th}>Cypher</th><th style={S.th}>Equivalente SQL</th></tr></thead>
              <tbody>
                {[
                  ['Criar nó', 'CREATE (p:Person {name: "Alice", age: 30})', 'INSERT INTO persons VALUES (...)'],
                  ['Criar relação', 'MATCH (a:Person {name:"Alice"}), (b:Person {name:"Bob"}) CREATE (a)-[:CONHECE]->(b)', 'INSERT INTO friendships VALUES (...)'],
                  ['Encontrar vizinhos', 'MATCH (p:Person {name:"Alice"})-[:CONHECE]->(friend) RETURN friend', 'SELECT * FROM persons JOIN friendships ...'],
                  ['Caminho mais curto', 'MATCH p=shortestPath((a:Person)-[*]-(b:Person)) RETURN p', 'Recursão SQL complexa (CTE)'],
                  ['Vizinhos a 2 hops', 'MATCH (p)-[:CONHECE*2]->(fof) RETURN fof', 'JOIN duplo com subconsultas'],
                ].map(([op, cy, sq]) => (
                  <tr key={op}><td style={{ ...S.td, fontWeight: 600, fontSize: '0.85rem' }}>{op}</td><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.78rem', color: '#f97316' }}>{cy}</td><td style={{ ...S.td, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{sq}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Schema em Neo4j</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            {[
              { title: 'Índices', desc: 'Identificam o ponto de partida de uma travessia. Índices full-text permitem pesquisa por conteúdo de strings. Sem índice, a query faz um scan de todos os nós.' },
              { title: 'Constraints', desc: 'Garantem que os dados respeitam as regras do domínio — ex: unicidade de um campo como email ou ID de produto.' },
              { title: 'Data Sharding', desc: 'Divisão de dados em partições horizontais distribuídas por vários servidores: requisitos legais/privacidade, latência por região, ou grafos com dezenas de milhares de milhões de nós.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: 10, padding: '1rem' }}>
                <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.4rem', fontSize: '0.9rem' }}>{title}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={S.note}>
            Exemplo real — Panama Papers: a query <code style={{ color: '#f97316' }}>MATCH path=(regula:Officer)--{'>'} () WHERE toUpper(regula.name) CONTAINS "REGULA LIMITED" RETURN path</code> devolve todas as relações de entidades financeiras offshore em segundos, sobre milhões de registos — o que em SQL relacional seria impraticável.
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Análise de Grafos — Centralidade e Comunidades</h2>
          <p style={S.p}>Propriedades estruturais básicas: <strong>Grau</strong> (degree) de um vértice — número de arestas ligadas; <strong>Caminho</strong> (path) — sequência de nós conectados; <strong>Caminho mais curto</strong> (shortest path) — minimiza o número de arestas; <strong>Ciclo</strong> — caminho que começa e termina no mesmo nó; <strong>Diâmetro</strong> — o maior dos caminhos mais curtos da rede.</p>
          <p style={S.p}>Uma <strong>rede bipartida</strong> tem nós divididos em dois grupos disjuntos U e V, onde cada aresta liga sempre um nó de U a um de V. Exemplo clássico: receitas e ingredientes, utilizadores e filmes, alunos e disciplinas.</p>

          <CentralityExplorer />

          <h3 style={S.h3}>PageRank — O Algoritmo da Google</h3>
          <p style={S.p}>PageRank é semelhante à centralidade de eigenvector. Algoritmo popularizado pela Google:</p>
          <div style={S.highlight}>
            <ol style={{ paddingLeft: '1.2rem', margin: 0, lineHeight: 2, color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              <li>Atribuir a todos os nós PageRank = 1/N.</li>
              <li>Cada nó distribui igualmente o seu PageRank pelos nós para os quais aponta.</li>
              <li>O novo PageRank de cada nó é a soma do PageRank recebido.</li>
              <li>Repetir até convergência.</li>
            </ol>
          </div>

          <h3 style={S.h3}>Deteção de Comunidades — Modularidade e Louvain</h3>
          <p style={S.p}>Algumas redes têm estrutura modular — grupos de nós mais densamente conectados entre si do que com o resto da rede. Encontrar estas comunidades pode revelar insights ocultos. A <strong>Modularidade (Q)</strong> mede a diferença entre a densidade de conectividade intra-módulo de uma partição proposta e o número esperado de ligações numa rede aleatória com a mesma distribuição de graus.</p>
          <p style={S.p}>O <strong>Método de Louvain</strong> é o algoritmo mais popular para deteção de comunidades em grandes redes. Aplicação real: identificação de comunidades regionais a partir de padrões de telecomunicações na Bélgica, com resultados que espelham as regiões geográficas do país. A deteção de comunidades é clustering não supervisionado baseado nas relações entre elementos, não nas suas características intrínsecas.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Knowledge Graphs e IA Generativa</h2>
          <p style={S.p}>Um knowledge graph armazena e unifica dados de forma a permitir raciocínio sobre eles. Não altera os dados subjacentes — fornece orientação sobre como esses dados podem ser compreendidos, independentemente da tecnologia de origem. Três propriedades essenciais: são conjuntos interligados de factos legíveis por humanos e máquinas; usam um princípio organizador que permite raciocinar sobre os dados; são flexíveis, fáceis de manter e rápidos.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: 10, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.5rem' }}>Taxonomia</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Esquema de classificação hierárquico (mais-amplo / mais-estreito). Permite calcular similaridade semântica sem conhecer o domínio. Exemplo: Mamífero {'>'} Canídeo {'>'} Cão {'>'} Labrador.</p>
            </div>
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: 10, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.5rem' }}>Ontologia</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Tal como as taxonomias, mas não restrita a relações hierárquicas. Inclui relações como <code style={{ color: '#f97316' }}>part_of</code>, <code style={{ color: '#f97316' }}>compatible_with</code>, <code style={{ color: '#f97316' }}>depends_on</code>. Permite explorar categorias vertical e horizontalmente.</p>
            </div>
          </div>

          <h3 style={S.h3}>RAG com Knowledge Graphs</h3>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>Vector DB (RAG)</th><th style={S.th}>Knowledge Graph (RAG)</th></tr></thead>
              <tbody>
                {[
                  ['Tipo de resposta', 'Implícita, semântica', 'Explícita, factual'],
                  ['Raciocínio multi-hop', 'Limitado', 'Nativo (travessia de ligações)'],
                  ['Rastreabilidade', 'Difícil', 'Fontes identificáveis'],
                  ['Exemplo de query', '"impacto genérico da pandemia"', '"impacto no Mac e Wearables, menos no iPhone"'],
                ].map(([a, v, k]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 600 }}>{a}</td><td style={S.td}>{v}</td><td style={{ ...S.td, color: '#f97316' }}>{k}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.note}>
            Exemplo real — LinkedIn Knowledge Graph: construído sobre entidades como membros, empregos, competências, empresas e localizações geográficas. Usado para sistemas de recomendação, pesquisa, monetização e análise de mercado de trabalho (ex: calcular skill gaps entre oferta e procura por região).
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, lineHeight: 1.9 }}>
              <li style={{ marginBottom: '0.4rem' }}><strong>Index-free adjacency</strong> — grafos nativos como Neo4j armazenam ponteiros directos entre nós adjacentes — cada travessia de relação é O(1) independentemente do tamanho do grafo, ao contrário de JOINs SQL que crescem com o tamanho das tabelas; esta propriedade torna consultas de caminho e vizinhança ordens de magnitude mais rápidas que bases de dados relacionais em grafos densos.</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>Cypher</strong> — linguagem declarativa de query para grafos com sintaxe ASCII-art intuitiva: `(n:Person)-[:KNOWS]-&gt;(m:Person)` representa um padrão de subgrafo; `MATCH`, `WHERE`, `RETURN` são os operadores base; `CREATE`, `MERGE`, `SET` para escrita; queries de vizinhança k-hop, shortest path e detecção de ciclos são expressas em poucas linhas vs. CTEs recursivas em SQL.</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>Centralidade</strong> — métricas de centralidade quantificam a importância de nós na rede: PageRank (importância por vizinhos importantes), Betweenness (controlo de fluxo — nós-ponte), Closeness (acesso rápido a toda a rede), Degree (conectividade directa); Neo4j GDS (Graph Data Science) implementa todas em Java optimizado e aplica-as em grafos com biliões de arestas.</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>Deteção de comunidades (Louvain)</strong> — algoritmo Louvain maximiza modularidade (Q) — a fracção de arestas intra-comunidade vs. expectativa aleatória; complexidade O(n log n) em grafos esparsos; detecta hierarquias de comunidades iterativamente; aplica-se a detecção de fraude (clusters suspeitos), segmentação de clientes e análise de redes sociais em Neo4j GDS.</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>Knowledge Graphs + LLMs</strong> — KGs estruturam conhecimento em triplos (sujeito, predicado, objecto) com semântica formal (RDF/OWL); combinados com LLMs via RAG sobre grafo (Graph RAG): o LLM formula queries Cypher/SPARQL para recuperar subgrafos relevantes — reduce alucinação ao ancorar respostas em factos estruturados verificáveis; Microsoft GraphRAG (2024) demonstrou ganhos de 40% em coerência temática.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
