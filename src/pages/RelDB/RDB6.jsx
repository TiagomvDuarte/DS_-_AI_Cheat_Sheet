import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

export default function RDB6() {
  return (
    <div style={S.page}>
      <Link to="/reldb" style={S.back}><ArrowLeft size={16} /> Bases de Dados Relacionais</Link>

      <span style={S.tag}>MÓDULO 6</span>
      <h1 style={S.h1}>Query Optimization</h1>
      <p style={S.lead}>
        Compreender como o DBMS executa e optimiza queries é essencial para escrever SQL eficiente. Neste
        módulo analisamos o pipeline interno do DBMS, lemos planos de execução, estudamos estatísticas e
        aprendemos técnicas concretas para acelerar queries em tabelas de grande dimensão.
      </p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Como o DBMS Executa Queries</h2>
        <p style={S.p}>
          Quando uma query SQL é submetida, o DBMS passa por quatro fases principais antes de devolver resultados:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Fase</th>
              <th style={S.th}>O que acontece</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Parsing</strong></td>
              <td style={S.td}>Análise léxica e sintáctica; construção da árvore de parse</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Rewriting</strong></td>
              <td style={S.td}>Aplicação de regras algébricas (ex: push predicates, unnesting subqueries)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Planning / Optimization</strong></td>
              <td style={S.td}>Geração de planos candidatos; escolha do plano de menor custo estimado</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Execution</strong></td>
              <td style={S.td}>Execução do plano escolhido pelo executor; devolução de resultados</td>
            </tr>
          </tbody>
        </table>
        <p style={S.p}>
          O <strong>query planner</strong> é o componente mais crítico: usa estatísticas sobre os dados
          (distribuição de valores, cardinalidades, correlações) para estimar o custo de cada plano e escolher
          o mais eficiente — sem garantia de ser o óptimo global (problema NP-hard para muitos JOINs).
        </p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Query Execution Plans — EXPLAIN &amp; EXPLAIN ANALYZE</h2>
        <p style={S.p}>
          O comando <strong>EXPLAIN</strong> mostra o plano de execução estimado sem executar a query.
          <strong> EXPLAIN ANALYZE</strong> executa a query e mostra tempos reais — imprescindível para
          diagnosticar discrepâncias entre estimativas e realidade.
        </p>
        <div style={S.code}>{`EXPLAIN ANALYZE
SELECT c.nome, COUNT(p.id) AS num_pedidos
FROM clientes c
JOIN pedidos p ON p.cliente_id = c.id
WHERE c.pais = 'PT'
GROUP BY c.nome;`}</div>

        <p style={S.p}>Operadores mais comuns no plano de execução:</p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Operador</th>
              <th style={S.th}>Descrição</th>
              <th style={S.th}>Quando aparece</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Seq Scan</td>
              <td style={S.td}>Leitura sequencial de toda a tabela</td>
              <td style={S.td}>Sem índice útil ou tabela pequena</td>
            </tr>
            <tr>
              <td style={S.td}>Index Scan</td>
              <td style={S.td}>Navegação pelo índice + fetch de heap</td>
              <td style={S.td}>Predicado selectivo com índice</td>
            </tr>
            <tr>
              <td style={S.td}>Index Only Scan</td>
              <td style={S.td}>Leitura apenas do índice (covering index)</td>
              <td style={S.td}>Todas as colunas estão no índice</td>
            </tr>
            <tr>
              <td style={S.td}>Hash Join</td>
              <td style={S.td}>Constrói hash table de uma relação e proba a outra</td>
              <td style={S.td}>JOINs de grande dimensão sem ordenação</td>
            </tr>
            <tr>
              <td style={S.td}>Merge Join</td>
              <td style={S.td}>Merge de dois inputs já ordenados</td>
              <td style={S.td}>Ambas as relações ordenadas pelo join key</td>
            </tr>
            <tr>
              <td style={S.td}>Nested Loop</td>
              <td style={S.td}>Para cada linha exterior, percorre a relação interior</td>
              <td style={S.td}>Relação interior pequena ou indexada</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          No output do EXPLAIN ANALYZE, compare <em>rows=X</em> (estimativa) com <em>actual rows=Y</em>
          (real). Diferenças grandes indicam estatísticas desactualizadas — execute ANALYZE na tabela.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Selectividade e Estatísticas</h2>
        <p style={S.p}>
          O optimizador usa <strong>estatísticas</strong> para estimar a selectividade de predicados — ou seja,
          a fracção de linhas que satisfazem uma condição. Em PostgreSQL, estas estatísticas são recolhidas pelo
          comando <strong>ANALYZE</strong> e armazenadas em <code>pg_statistic</code>.
        </p>
        <div style={S.code}>{`-- Forçar actualização das estatísticas de uma tabela
ANALYZE pedidos;

-- Ver estatísticas de uma coluna
SELECT * FROM pg_stats
WHERE tablename = 'pedidos' AND attname = 'estado';`}</div>

        <p style={S.p}>
          O DBMS mantém <strong>histogramas</strong> de distribuição de valores, listas dos valores mais
          frequentes (MCV — Most Common Values) e estimativas de cardinalidade (número de valores distintos).
          Predicados sobre colunas altamente correlacionadas entre si podem enganar o optimizador — use
          estatísticas de expressão ou extended statistics (<code>CREATE STATISTICS</code>) nesses casos.
        </p>

        <div style={S.highlight}>
          <strong>Cardinality estimation:</strong> o optimizador assume independência entre predicados por defeito.
          Se WHERE a = 1 AND b = 2 tiver alta correlação entre a e b, a estimativa pode estar ordens de
          magnitude errada. <code>CREATE STATISTICS (dependencies) ON a, b FROM tabela;</code> resolve isto.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Optimização de Índices</h2>
        <p style={S.p}>
          Índices bem desenhados são a forma mais impactante de melhorar a performance de queries de leitura.
          Existem vários tipos além do B-Tree clássico:
        </p>

        <p style={S.p}>
          <strong>Índices compostos:</strong> a ordem das colunas importa. O índice (a, b) é útil para queries
          sobre a ou sobre (a, b), mas não para queries que filtrem apenas b. Coloque primeiro a coluna com
          maior selectividade ou a que aparece em mais queries.
        </p>
        <div style={S.code}>{`-- Índice composto
CREATE INDEX idx_pedidos_cliente_data ON pedidos(cliente_id, data_criacao);

-- Índice parcial — cobre apenas linhas relevantes
CREATE INDEX idx_pedidos_pendentes ON pedidos(data_criacao)
WHERE estado = 'pendente';

-- Índice de expressão
CREATE INDEX idx_email_lower ON utilizadores(LOWER(email));
-- Útil para: WHERE LOWER(email) = 'user@example.com'`}</div>

        <div style={S.note}>
          Um índice que não é utilizado pelo optimizador tem custo: ocupa espaço em disco e abranda INSERT/UPDATE/DELETE
          porque precisa de ser mantido. Monitore índices não utilizados com <code>pg_stat_user_indexes</code>.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Query Rewriting Tips</h2>
        <p style={S.p}>
          Pequenas mudanças na forma como se escreve SQL podem ter impacto enorme na performance:
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Anti-padrão</th>
              <th style={S.th}>Alternativa eficiente</th>
              <th style={S.th}>Motivo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><code>SELECT *</code></td>
              <td style={S.td}>Listar colunas explicitamente</td>
              <td style={S.td}>Menos dados transferidos; possibilita covering index</td>
            </tr>
            <tr>
              <td style={S.td}><code>WHERE id IN (SELECT id FROM ...)</code></td>
              <td style={S.td}><code>WHERE EXISTS (SELECT 1 FROM ... WHERE ...)</code></td>
              <td style={S.td}>EXISTS para quando só se quer saber se existe; evita materializar subquery</td>
            </tr>
            <tr>
              <td style={S.td}><code>WHERE YEAR(data) = 2024</code></td>
              <td style={S.td}><code>WHERE data &gt;= '2024-01-01' AND data &lt; '2025-01-01'</code></td>
              <td style={S.td}>Função em coluna indexada impede uso do índice</td>
            </tr>
            <tr>
              <td style={S.td}><code>WHERE nome LIKE '%texto%'</code></td>
              <td style={S.td}>Full-text search (GIN index + tsvector)</td>
              <td style={S.td}>Leading wildcard impede uso de índice B-Tree</td>
            </tr>
          </tbody>
        </table>

        <p style={S.p}>
          <strong>Partitioning:</strong> tabelas muito grandes (milhões/biliões de linhas) beneficiam de
          particionamento por range, list ou hash. Queries que filtrem pela chave de partição fazem
          <em> partition pruning</em> — o DBMS ignora partições irrelevantes.
        </p>
        <div style={S.code}>{`CREATE TABLE pedidos (
  id SERIAL,
  data_criacao DATE NOT NULL,
  valor NUMERIC
) PARTITION BY RANGE (data_criacao);

CREATE TABLE pedidos_2024
PARTITION OF pedidos
FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');`}</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. Síntese do Módulo</h2>
        <div style={{ ...S.highlight, borderRadius: 10 }}>
          <ul style={{ margin: '0 0 0 1.2rem', lineHeight: 2, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
            <li>O DBMS passa por parsing → rewriting → planning → execution; o planner escolhe o plano de menor custo estimado.</li>
            <li>EXPLAIN ANALYZE é a ferramenta essencial: compara estimativas com tempos reais e revela gargalos.</li>
            <li>Estatísticas desactualizadas causam planos sub-óptimos — execute ANALYZE regularmente e use extended statistics para colunas correlacionadas.</li>
            <li>Índices compostos, parciais e de expressão permitem cobrir padrões de acesso específicos sem overhead desnecessário.</li>
            <li>Evite funções em colunas indexadas, SELECT *, e subqueries IN quando EXISTS chega; considere particionamento para tabelas muito grandes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
