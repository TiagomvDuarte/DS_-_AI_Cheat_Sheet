import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Logic';

const C = '#4a9eed';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: C, border: `1.5px solid ${C}`, fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: C, borderLeft: `3px solid ${C}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  highlight: { background: `${C}15`, borderLeft: `3px solid ${C}`, padding: '0.85rem 1.1rem', borderRadius: '0 8px 8px 0', marginBottom: '1rem' },
  note: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', padding: '0.85rem 1.1rem', borderRadius: 8, marginBottom: '1rem' },
  p: { color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '0.85rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', overflowX: 'auto' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2rem 0' },
};

export default function LOG4() {
  return (
    <div style={S.page}>
      <Link to="/logic" style={S.back}>← Logic</Link>
      <div style={S.badge}>MÓDULO {modules[3].num}</div>
      <h1 style={S.h1}>{modules[3].title}</h1>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Knowledge Representation e Description Logic</h2>
        <p style={S.p}>
          A <strong>representação do conhecimento</strong> (KR) estuda como codificar conhecimento do mundo de forma que sistemas computacionais possam raciocinar sobre ele. Três problemas clássicos definem os desafios: o <em>frame problem</em> (o que muda e o que não muda quando uma acção ocorre — qualificação implícita de efeitos), o <em>qualification problem</em> (impossibilidade de listar todas as precondições de uma acção) e o <em>ramification problem</em> (consequências indirectas de acções em estados com restrições).
        </p>
        <p style={S.p}>
          As <strong>Lógicas de Descrição (DL)</strong> são subfamílias decidíveis da FOL especialmente desenhadas para KR. Operam com <em>conceitos</em> (conjuntos de indivíduos), <em>roles</em> (relações binárias) e <em>indivíduos</em>. A DL <strong>ALC</strong> (Attributive Language with Complements) oferece: conjunção C ⊓ D, disjunção C ⊔ D, complemento ¬C, restrição existencial ∃r.C (existe role r para algum membro de C), e restrição universal ∀r.C. ALC é PSPACE-completa.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 680 250" width="100%" style={{ display: 'block' }}>
            <rect width="680" height="250" fill="var(--bg-secondary)" rx="10" />
            <text x="340" y="20" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">Description Logic — TBox e ABox</text>
            {/* TBox panel */}
            <rect x="15" y="32" width="310" height="160" fill="#111827" stroke="var(--card-border)" rx="8" />
            <text x="170" y="52" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif" fontWeight="700">TBox (Terminológico — classes)</text>
            {[
              'Researcher ⊑ Person',
              'Researcher ⊑ ∃worksOn.Project',
              'Professor ≡ Person ⊓ ∃teaches.Course',
              'SeniorResearcher ≡ Researcher',
              '   ⊓ (≥3 worksOn.Project)',
              'Project ⊑ ¬Person',
              'teaches ⊑ worksOn',
            ].map((line, i) => (
              <text key={i} x="25" y={70 + i * 17} fill={C} fontSize="11" fontFamily="monospace">{line}</text>
            ))}
            {/* ABox panel */}
            <rect x="355" y="32" width="310" height="160" fill="#111827" stroke="var(--card-border)" rx="8" />
            <text x="510" y="52" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif" fontWeight="700">ABox (Assertivo — instâncias)</text>
            {[
              'Person(alice)',
              'Researcher(alice)',
              'Project(kgproject)',
              'worksOn(alice, kgproject)',
              'Course(ml_course)',
              'teaches(alice, ml_course)',
              '→ Professor(alice)  [inferido]',
            ].map((line, i) => (
              <text key={i} x="365" y={70 + i * 17}
                fill={i === 6 ? '#bae6fd' : '#4a9eed'}
                fontSize="11" fontFamily="monospace">{line}</text>
            ))}
            {/* Raciocínio */}
            <rect x="15" y="205" width="655" height="36" fill="#111827" rx="6" />
            <text x="340" y="220" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Tarefas de raciocínio: subsumção (C ⊑ D?), instance checking (a:C?), consistência (KB sat?), realização</text>
            <text x="340" y="235" textAnchor="middle" fill={C} fontSize="10" fontFamily="sans-serif">Complexidades: ALC PSPACE — SROIQ (base OWL 2 DL) 2-EXPTIME — EL (OWL 2 EL) PTIME</text>
          </svg>
        </div>

        <p style={S.p}>
          A base de conhecimento DL divide-se em <strong>TBox</strong> (Terminological Box — axiomas sobre classes e relações, e.g., subsumções e equivalências de conceitos) e <strong>ABox</strong> (Assertional Box — factos sobre indivíduos concretos, e.g., apartenças a classes e relações entre indivíduos). O <em>Open World Assumption (OWA)</em> — ao contrário da CWA do Prolog — é adoptado: o que não é afirmado não é necessariamente falso, pode simplesmente ser desconhecido.
        </p>
        <p style={S.p}>
          DLs mais expressivas adicionam: <em>número de restrições</em> (≥n r.C — pelo menos n filhos via r em C); <em>roles inversos</em> (r⁻); <em>propriedades transitivas</em> (Trans(r)); <em>role hierarquias</em> (r ⊑ s). A DL <strong>SROIQ</strong> é a base formal de OWL 2 DL — a linguagem de ontologias da Web Semântica. Reasoners baseados em tableaux (HermiT, Pellet) decidem satisfatibilidade em SROIQ, embora a complexidade teórica seja 2-EXPTIME.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Raciocínio DL — algoritmos tableaux:</strong> para verificar satisfatibilidade de um conceito C numa TBox T, o algoritmo tableaux expande regras de decomposição (⊓, ⊔, ∃, ∀, ¬) num grafo de completude, aplicando regras de bloqueio para garantir terminação com TBoxes recursivas. Se o grafo for construído sem clashes (contradições), C é satisfatível. HermiT (Oxford) implementa tableau com hypertableau — mais eficiente para TBoxes densas.
          </p>
        </div>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Lógica de Defeito e Raciocínio Não-Monótono:</strong> raciocínio onde novas informações podem invalidar conclusões anteriores. Default Logic (Reiter 1980): regras <em>α : β / γ</em> (se α é provável e β é consistente com o que se sabe, inferir γ). Circumscription (McCarthy): minimizar a extensão dos predicados de anomalia. Autoepistemic Logic (Moore): raciocínio sobre o próprio conhecimento. Estas teorias formam a base dos sistemas de raciocínio com incerteza e excepções na IA clássica.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. RDF e Web Semântica</h2>
        <p style={S.p}>
          O <strong>Resource Description Framework (RDF)</strong> é o modelo de dados fundamental da Web Semântica, proposto pelo W3C em 1999 e padronizado em 2004/2014. Os dados RDF organizam-se em <em>triplos</em> (sujeito, predicado, objecto) onde cada componente é identificado por URIs (Uniform Resource Identifiers) ou literais tipados. Esta estrutura de grafo dirigido e rotulado permite interligar dados de fontes heterogéneas sem esquema central.
        </p>
        <p style={S.p}>
          <strong>Serializações RDF:</strong> <em>Turtle</em> (legível por humanos, prefixos compactos) é a mais usada para edição; <em>N-Triples</em> (um triplo por linha, simples de processar em streaming); <em>JSON-LD</em> (JSON com contexto de mapeamento para URIs, compatível com APIs REST); <em>RDF/XML</em> (o original, verboso, ainda dominante em sistemas legados como DBpedia); <em>HDT</em> (Header-Dictionary-Triples, binário comprimido para datasets de centenas de biliões de triplos).
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 680 220" width="100%" style={{ display: 'block' }}>
            <rect width="680" height="220" fill="var(--bg-secondary)" rx="10" />
            <text x="340" y="20" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">Grafo RDF — entidade pessoa com propriedades</text>
            {/* central node: person */}
            <ellipse cx="340" cy="110" rx="60" ry="30" fill="rgba(74,158,237,0.06)" stroke={C} strokeWidth="2" />
            <text x="340" y="106" textAnchor="middle" fill={C} fontSize="11" fontFamily="monospace" fontWeight="700">:alice</text>
            <text x="340" y="122" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">foaf:Person</text>
            {/* name */}
            <rect x="15" y="48" width="160" height="28" fill="#111827" stroke="#4a9eed" strokeWidth="1.5" rx="6" />
            <text x="95" y="67" textAnchor="middle" fill="#4a9eed" fontSize="12" fontFamily="monospace">"Alice Silva"</text>
            <line x1="280" y1="95" x2="175" y2="68" stroke="#475569" strokeWidth="1.5" />
            <polygon points="175,68 185.7,66.6 183.7,74.4" fill="#475569" />
            <text x="230" y="82" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">foaf:name</text>
            {/* birthdate */}
            <rect x="0" y="150" width="205" height="28" fill="#111827" stroke="#4a9eed" strokeWidth="1.5" rx="6" />
            <text x="102" y="169" textAnchor="middle" fill="#4a9eed" fontSize="11" fontFamily="monospace">"1990-03-15"^^xsd:date</text>
            <line x1="280" y1="125" x2="205" y2="164" stroke="#475569" strokeWidth="1.5" />
            <polygon points="205,164 215.7,162.9 212,155.8" fill="#475569" />
            <text x="225" y="185" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">schema:birthDate</text>
            {/* worksAt org */}
            <ellipse cx="560" cy="80" rx="80" ry="25" fill="rgba(74,158,237,0.06)" stroke="#bae6fd" strokeWidth="1.5" />
            <text x="560" y="76" textAnchor="middle" fill="#bae6fd" fontSize="11" fontFamily="monospace">:universidade_x</text>
            <text x="560" y="92" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">org:Organization</text>
            <line x1="400" y1="95" x2="480" y2="83" stroke="#475569" strokeWidth="1.5" />
            <polygon points="476,78 486,84 477,90" fill="#475569" />
            <text x="405" y="82" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">org:memberOf</text>
            {/* knows */}
            <ellipse cx="560" cy="160" rx="60" ry="25" fill="rgba(74,158,237,0.06)" stroke="#bae6fd" strokeWidth="1.5" />
            <text x="560" y="156" textAnchor="middle" fill="#bae6fd" fontSize="11" fontFamily="monospace">:bob</text>
            <text x="560" y="171" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">foaf:Person</text>
            <line x1="400" y1="118" x2="500" y2="155" stroke="#475569" strokeWidth="1.5" />
            <polygon points="496,150 506,156 497,162" fill="#475569" />
            <text x="405" y="145" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">foaf:knows</text>
            <text x="340" y="208" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="sans-serif">Cada aresta é um triplo RDF. URIs permitem desreferenciação e interligação entre datasets distintos.</text>
          </svg>
        </div>

        <p style={S.p}>
          <strong>SPARQL 1.1</strong> é a linguagem de consulta para grafos RDF (W3C 2013). As quatro formas de consulta: <em>SELECT</em> (devolve tabela de variáveis ligadas); <em>CONSTRUCT</em> (devolve novo grafo RDF); <em>ASK</em> (booleano: existe solução?); <em>DESCRIBE</em> (devolve subgrafo associado a recurso). Funcionalidades avançadas: OPTIONAL (LEFT OUTER JOIN), UNION (alternativas de padrões), FILTER (predicados em valores), GROUP BY + HAVING + aggregação (COUNT/SUM/AVG), sub-queries, property paths (caminho de comprimento variável: ?a foaf:knows+ ?b).
        </p>
        <p style={S.p}>
          Os <strong>princípios de Linked Data</strong> (Berners-Lee, 2006): (1) usar URIs como nomes de coisas; (2) URIs HTTP — desreferenciáveis (GETs devolvem informação útil); (3) devolver informação RDF útil ao desreferenciar; (4) incluir links para outros URIs. A <strong>LOD Cloud</strong> (Linked Open Data) interliga DBpedia (a Wikipedia em RDF, ~18 biliões de triplos), Wikidata (~15 biliões), GeoNames (10M locais), Freebase (arquivo), UniProt (proteínas), ChEMBL (compostos), e centenas de outros datasets através de owl:sameAs e skos:closeMatch.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>SPARQL federado e endpoints públicos.</strong> O protocolo SPARQL permite federated queries: consultas que integram múltiplos endpoints em tempo real via SERVICE keyword. Exemplos de endpoints públicos: DBpedia (dbpedia.org/sparql), Wikidata Query Service (query.wikidata.org — suporta consultas complexas em tempo real sobre 100M+ items), UniProt SPARQL (para proteínas e genes). Jena (Apache), Virtuoso (OpenLink), Stardog, GraphDB e Oxigraph são os principais triple stores.
          </p>
        </div>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>JSON-LD e Schema.org:</strong> JSON-LD (JSON Linked Data) usa um contexto @context para mapear chaves JSON a URIs RDF, permitindo que dados JSON correntes sejam também dados semânticos. Schema.org (Google/Bing/Yahoo/Yandex) define um vocabulário partilhado para markup semântico de páginas web — mais de 30 milhões de sites usam schema.org para enriquecer os resultados de pesquisa (rich snippets, knowledge panels). O Google Knowledge Graph é parcialmente alimentado por schema.org markup.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. OWL 2 — Ontologias Formais</h2>
        <p style={S.p}>
          <strong>OWL 2</strong> (Web Ontology Language, W3C 2009/2012) é a linguagem de ontologias padrão, construída sobre RDF/RDFS e fundamentada em Lógicas de Descrição. Uma <em>ontologia OWL</em> especifica o vocabulário de um domínio com precisão formal suficiente para raciocínio automático. OWL 2 define vários <em>perfis</em> com diferentes trade-offs entre expressividade e complexidade computacional.
        </p>
        <p style={S.p}>
          <strong>Perfis OWL 2:</strong> <em>EL</em> (Existential Language) — polynomial time, ideal para ontologias de grande escala como Gene Ontology e SNOMED CT, reasoner ELK; <em>QL</em> (Query Language) — consultas reescrevíveis para SQL, ideal para linked data com bases de dados relacionais; <em>RL</em> (Rule Language) — implementável via regras forward-chaining, compatível com rule engines; <em>DL</em> — expressivo completo baseado em SROIQ, reasoners HermiT e Pellet; <em>Full</em> — inclui metaclasses e auto-referência, indecidível.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 680 250" width="100%" style={{ display: 'block' }}>
            <rect width="680" height="250" fill="var(--bg-secondary)" rx="10" />
            <text x="340" y="20" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">Ontologia Universitária em OWL 2</text>
            {/* Classes hierarquia */}
            <ellipse cx="120" cy="80" rx="55" ry="22" fill="rgba(74,158,237,0.06)" stroke={C} strokeWidth="2" />
            <text x="120" y="85" textAnchor="middle" fill={C} fontSize="12" fontFamily="monospace" fontWeight="700">Person</text>
            <ellipse cx="120" cy="155" rx="60" ry="22" fill="rgba(74,158,237,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="120" y="160" textAnchor="middle" fill={C} fontSize="11" fontFamily="monospace">Professor</text>
            <line x1="120" y1="102" x2="120" y2="133" stroke="#475569" strokeWidth="1.5" />
            <text x="128" y="122" fill="#64748b" fontSize="9" fontFamily="sans-serif">⊑</text>
            <ellipse cx="340" cy="155" rx="65" ry="22" fill="rgba(74,158,237,0.06)" stroke="#4a9eed" strokeWidth="1.5" />
            <text x="340" y="160" textAnchor="middle" fill="#4a9eed" fontSize="11" fontFamily="monospace">Course</text>
            <ellipse cx="570" cy="155" rx="70" ry="22" fill="rgba(74,158,237,0.06)" stroke="#bae6fd" strokeWidth="1.5" />
            <text x="570" y="160" textAnchor="middle" fill="#bae6fd" fontSize="11" fontFamily="monospace">Department</text>
            {/* teaches arrow */}
            <line x1="180" y1="155" x2="271" y2="155" stroke="#bae6fd" strokeWidth="1.5" />
            <polygon points="267,150 277,155 267,160" fill="#bae6fd" />
            <text x="218" y="148" textAnchor="middle" fill="#bae6fd" fontSize="9" fontFamily="sans-serif">teaches</text>
            {/* belongsTo */}
            <line x1="405" y1="155" x2="496" y2="155" stroke="#bae6fd" strokeWidth="1.5" />
            <polygon points="492,150 502,155 492,160" fill="#bae6fd" />
            <text x="450" y="148" textAnchor="middle" fill="#bae6fd" fontSize="9" fontFamily="sans-serif">belongsTo</text>
            {/* Axiomas OWL */}
            <rect x="20" y="195" width="640" height="48" fill="#111827" rx="6" />
            <text x="30" y="212" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Axiomas OWL 2:</text>
            <text x="30" y="228" fill={C} fontSize="11" fontFamily="monospace">Professor ≡ Person ⊓ ∃teaches.Course ⊓ (≥1 belongsTo.Department)</text>
            <text x="30" y="244" fill="#4a9eed" fontSize="11" fontFamily="monospace">teaches  Functional: cada professor ensina exactamente 1 curso por semana (FunctionalProperty)</text>
          </svg>
        </div>

        <p style={S.p}>
          <strong>Características de propriedades OWL 2:</strong> <em>Transitive</em> (parentOf é transitivo → antepassados acessíveis via raciocínio); <em>Symmetric</em> (siblingOf — se A é irmão de B, B é irmão de A); <em>Functional</em> (hasBiologicalMother — cada pessoa tem no máximo uma mãe biológica); <em>InverseFunctional</em> (hasSSN — cada NIF identifica no máximo uma pessoa); <em>Asymmetric</em>; <em>Reflexive/Irreflexive</em>. Estas propriedades permitem derivar novas relações automaticamente via raciocínio ontológico.
        </p>
        <p style={S.p}>
          <strong>Ontologias de referência.</strong> <em>Gene Ontology (GO)</em>: 43,000+ termos para funções moleculares, processos biológicos e componentes celulares — padrão universal em bioinformática, anotando &gt;800,000 proteínas em UniProt. <em>SNOMED CT</em>: 350,000+ conceitos clínicos para medicina — obrigatório nos registos de saúde electrónicos do NHS (UK) e adotado em Portugal. <em>DOLCE</em>: ontologia de topo filosófica. <em>schema.org</em>: ontologia leve para web markup. <em>FIBO</em>: Financial Industry Business Ontology (regulação financeira).
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Reasoners e benchmarks.</strong> <em>HermiT</em> (Oxford) implementa hypertableau para OWL 2 DL — provably correct, usado como referência. <em>ELK</em> (KIT) implementa completamento para OWL 2 EL em tempo polinomial — consegue classificar Gene Ontology em segundos. <em>Pellet</em> suporta SWRL (Semantic Web Rule Language). <em>FaCT++</em> usa tableau optimizado. O benchmark LUBM (Lehigh University Benchmark) e o OWL API são os standards para avaliação. SPARQL sobre ontologias OWL via materialização (RDF stores) ou raciocínio on-the-fly (ontop para OWL 2 QL sobre BD relacional).
          </p>
        </div>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>SWRL e regras na Web Semântica:</strong> SWRL (Semantic Web Rule Language) combina OWL com RuleML para regras Horn: <em>Person(?x) ∧ hasAge(?x,?a) ∧ swrlb:greaterThan(?a,17) → Adult(?x)</em>. SPIN (SPARQL Inferencing Notation) codifica regras como templates SPARQL reutilizáveis. SHACL (Shapes Constraint Language, W3C 2017) valida grafos RDF contra shapes — complementar a OWL (validação vs. raciocínio). RDF* e SPARQL* (2022) estendem RDF com triplos sobre triplos para provenance e reificação eficiente.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Knowledge Graphs Modernos</h2>
        <p style={S.p}>
          Um <strong>Knowledge Graph (KG)</strong> é um grafo de conhecimento em larga escala que integra dados estruturados de múltiplas fontes com semântica formal. O termo foi popularizado pelo Google KG (2012, Singhal), que alimenta os <em>knowledge panels</em> da pesquisa Google com &gt;500 biliões de factos. Outros KGs de referência: Wikidata (base de conhecimento livre da Wikimedia, 100M+ itens, editado colaborativamente), Freebase (Google, encerrado 2015), Microsoft Satori, Amazon Product KG, e KGs específicos de domínio (biomedicina, finanças, direito).
        </p>
        <p style={S.p}>
          A <strong>construção de KGs</strong> segue um pipeline: (1) <em>Named Entity Recognition (NER)</em> — identificar menções de entidades em texto; (2) <em>Relation Extraction (RE)</em> — classificar relações entre pares de entidades mencionadas; (3) <em>Entity Linking</em> — desambiguar menções para URIs canónicas no KG; (4) <em>Triple Store</em> — persistência e indexação para SPARQL. Ferramentas: OpenIE (extracção não-supervisionada), REBEL (seq2seq para RE), BLINK (entity linking via BERT), Neo4j (property graph), Weaviate (KG + vector search).
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 680 240" width="100%" style={{ display: 'block' }}>
            <rect width="680" height="240" fill="var(--bg-secondary)" rx="10" />
            <text x="340" y="8" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">TransE: embedding h + r ≈ t  (Paris, capitalOf, France)</text>
            {/* axes */}
            <line x1="60" y1="200" x2="60" y2="40" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="60" y1="200" x2="320" y2="200" stroke="var(--card-border)" strokeWidth="1" />
            <text x="190" y="215" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="sans-serif">dimensão 1</text>
            <text x="45" y="120" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="sans-serif" transform="rotate(-90, 45, 120)">dim 2</text>
            {/* vectors */}
            {/* h = Paris */}
            <circle cx="110" cy="160" r="8" fill="#4a9eed" />
            <text x="110" y="148" textAnchor="middle" fill="#4a9eed" fontSize="11" fontFamily="sans-serif">Paris (h)</text>
            {/* t = France */}
            <circle cx="240" cy="90" r="8" fill="#bae6fd" />
            <text x="240" y="78" textAnchor="middle" fill="#bae6fd" fontSize="11" fontFamily="sans-serif">France (t)</text>
            {/* h + r → t */}
            <line x1="118" y1="155" x2="228" y2="98" stroke={C} strokeWidth="2" strokeDasharray="6,3" />
            <polygon points="222,93 234,95 226,105" fill={C} />
            <text x="220" y="117" fill={C} fontSize="11" fontFamily="sans-serif" fontWeight="700">r = capitalOf</text>
            <text x="180" y="130" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">h + r ≈ t</text>
            {/* analogia */}
            <circle cx="130" cy="90" r="6" fill="#bae6fd" />
            <text x="130" y="78" textAnchor="middle" fill="#bae6fd" fontSize="10" fontFamily="sans-serif">Berlin (h')</text>
            <circle cx="260" cy="40" r="6" fill="#bae6fd" />
            <text x="260" y="30" textAnchor="middle" fill="#bae6fd" fontSize="10" fontFamily="sans-serif">Germany (t')</text>
            <line x1="136" y1="86" x2="250" y2="47" stroke="#bae6fd" strokeWidth="1.5" strokeDasharray="4,3" />
            <polygon points="244,42 256,44 248,54" fill="#bae6fd" />
            <text x="150" y="62" fill="#bae6fd" fontSize="9" fontFamily="sans-serif">mesmo r</text>
            {/* right panel: other models */}
            <rect x="360" y="35" width="300" height="185" fill="#111827" rx="6" />
            <text x="510" y="55" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif" fontWeight="700">Modelos de Embedding KG</text>
            {[
              { name: 'TransE', desc: 'h + r ≈ t  (simples, eficaz)' },
              { name: 'RotatE', desc: 'h ∘ r ≈ t  (rotação complexa)' },
              { name: 'ComplEx', desc: 'Re(h ∘ r ∘ t̄)  (assimétrico)' },
              { name: 'DistMult', desc: 'h⊤ diag(r) t  (simétrico)' },
              { name: 'RESCAL', desc: 'h⊤ Rₖ t  (bilinear matricial)' },
              { name: 'NodePiece', desc: 'tokenização de entidades' },
            ].map(({ name, desc }, i) => (
              <g key={i}>
                <text x="370" y={76 + i * 24} fill={C} fontSize="11" fontFamily="monospace" fontWeight="700">{name}</text>
                <text x="445" y={76 + i * 24} fill="#94a3b8" fontSize="10" fontFamily="sans-serif">{desc}</text>
              </g>
            ))}
          </svg>
        </div>

        <p style={S.p}>
          <strong>Property graphs vs. RDF:</strong> Neo4j usa <em>property graphs</em> onde nós e arestas têm propriedades directas (key-value), consultados via Cypher. RDF usa triplos puros com URIs, mais interoperável mas mais verboso. A linguagem <em>GQL</em> (Graph Query Language, ISO 2023) está a unificar os padrões de consulta a grafos de propriedades. O Apache TinkerPop (Gremlin) é a framework de referência para traversal de property graphs (usado pela Amazon Neptune, JanusGraph, CosmosDB).
        </p>
        <p style={S.p}>
          <strong>Entity embeddings e link prediction.</strong> O modelo <strong>TransE</strong> (Bordes et al., 2013) representa entidades e relações como vectores em ℝᵈ e aprende embeddings tais que h + r ≈ t para triplos válidos (h, r, t). <strong>RotatE</strong> (Sun et al., 2019) usa rotações no espaço complexo ℂᵈ para capturar simetria, antisimetria, inversão e composição de relações. <strong>ComplEx</strong> (Trouillon et al., 2016) usa espaço complexo para relações assimétricas. <strong>KGBERT</strong> e <strong>SimKGC</strong> usam PLMs como encoders de entidades para link prediction de zero-shot.
        </p>
        <p style={S.p}>
          <strong>KGQA — Knowledge Graph Question Answering</strong> permite responder a perguntas em linguagem natural sobre KGs. Abordagens: SPARQL gerado por LLM (Text-to-SPARQL), embedding-based (procura semântica no espaço de embeddings), e hybrid (GNN + LLM). Benchmarks: WebQuestions, FreebaseQA, KGQA (Wikidata), ComplexWebQuestions. Modelos como FLAN-T5 fine-tuned em SPARQL templates atingem &gt;70% em FreebaseQA.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>KGs Biomédicos e descoberta científica.</strong> <em>PrimeKG</em> (Chandak et al., 2022) é um KG de precisão biomédica com 129,375 nós e 4,050,249 relações cobrindo doenças, genes, fármacos, proteínas, vias biológicas, efeitos adversos e exposomas. Integra 20 bases de dados (DrugBank, STRING, OMIM, etc.). Com GNNs treinadas sobre PrimeKG para drug repurposing, identificou candidatos para COVID-19 confirmados experimentalmente. Semelhante: Hetionet, SPOKE (UCSF), BioKG (GSK). O raciocínio sobre KGs biomédicos é hoje uma das aplicações mais impactantes de representação do conhecimento.
          </p>
        </div>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Neurosymbolic KGs:</strong> integração de KGs com LLMs cria sistemas que combinam o raciocínio estruturado dos KGs com a compreensão de linguagem natural dos LLMs. KGRAG (KG-augmented RAG) enriquece LLMs com factos do KG para reduzir alucinações. THINK-ON-GRAPH (2024) faz beam search sobre o grafo de conhecimento guiado por LLMs. UniKGQA unifica embedding e SPARQL. Estas abordagens são a fronteira entre raciocínio simbólico e aprendizagem profunda em sistemas de QA de alto desempenho.
          </p>
        </div>
      </div>
    </div>
  );
}
