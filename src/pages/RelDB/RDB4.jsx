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
  note: { background: 'rgba(14,116,144,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

export default function RDB4() {
  return (
    <div style={S.page}>
      <Link to="/reldb" style={S.back}><ArrowLeft size={16} /> Voltar a Relational Databases</Link>

      <div style={S.tag}>MÓDULO 4</div>
      <h1 style={S.h1}>SQL — Análise e Optimização</h1>
      <p style={S.lead}>
        Agregações, window functions, CTEs recursivas, operações de conjunto e índices completam o arsenal SQL necessário para análise de dados avançada e queries de alto desempenho.
      </p>

      <div style={S.section}>
        <h2 style={S.h2}>1. GROUP BY e HAVING</h2>
        <p style={S.p}>
          GROUP BY agrupa linhas com os mesmos valores numa ou mais colunas, permitindo aplicar funções de agregação a cada grupo. HAVING filtra os grupos resultantes (equivalente ao WHERE mas aplicado após a agregação).
        </p>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Função</th><th style={S.th}>Descrição</th><th style={S.th}>Nota</th></tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>COUNT(*)</td><td style={S.td}>Número de linhas no grupo</td><td style={S.td}>Inclui NULLs</td></tr>
            <tr><td style={S.td}>COUNT(col)</td><td style={S.td}>Número de valores não-NULL na coluna</td><td style={S.td}>Ignora NULLs</td></tr>
            <tr><td style={S.td}>SUM(col)</td><td style={S.td}>Soma dos valores</td><td style={S.td}>Ignora NULLs</td></tr>
            <tr><td style={S.td}>AVG(col)</td><td style={S.td}>Média aritmética</td><td style={S.td}>Ignora NULLs</td></tr>
            <tr><td style={S.td}>MIN / MAX</td><td style={S.td}>Valor mínimo / máximo</td><td style={S.td}>Funciona com strings e datas</td></tr>
          </tbody>
        </table>
        <div style={S.code}>{`-- Vendas por categoria com filtro de grupos
SELECT categoria, COUNT(*) AS total, AVG(preco) AS preco_medio, SUM(stock) AS stock_total
FROM Produto
GROUP BY categoria
HAVING COUNT(*) > 5 AND AVG(preco) > 50
ORDER BY preco_medio DESC;

-- ROLLUP: subtotais e total geral
SELECT categoria, subcategoria, SUM(preco) AS total
FROM Produto
GROUP BY ROLLUP(categoria, subcategoria);`}</div>
        <div style={S.note}>
          Apenas colunas presentes no GROUP BY (ou expressões determinísticas dessas colunas) podem aparecer no SELECT fora de funções de agregação. Violar esta regra é um erro em SQL standard.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Window Functions</h2>
        <p style={S.p}>
          Window functions calculam um valor para cada linha com base num conjunto de linhas relacionadas (a "janela"), sem colapsar as linhas como o GROUP BY. São aplicadas após WHERE, GROUP BY e HAVING.
        </p>
        <div style={S.highlight}>
          <strong>Sintaxe:</strong> <code style={{ fontFamily: 'monospace' }}>função() OVER ([PARTITION BY ...] [ORDER BY ...] [frame])</code>
        </div>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Função</th><th style={S.th}>Descrição</th></tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>ROW_NUMBER()</td><td style={S.td}>Número sequencial único por partição (sem empates)</td></tr>
            <tr><td style={S.td}>RANK()</td><td style={S.td}>Ranking com lacunas em caso de empate (1, 1, 3, ...)</td></tr>
            <tr><td style={S.td}>DENSE_RANK()</td><td style={S.td}>Ranking sem lacunas (1, 1, 2, ...)</td></tr>
            <tr><td style={S.td}>LAG(col, n)</td><td style={S.td}>Valor da linha n posições atrás na partição</td></tr>
            <tr><td style={S.td}>LEAD(col, n)</td><td style={S.td}>Valor da linha n posições à frente na partição</td></tr>
            <tr><td style={S.td}>SUM() OVER</td><td style={S.td}>Soma acumulada ou parcial dentro da janela</td></tr>
            <tr><td style={S.td}>NTILE(n)</td><td style={S.td}>Divide linhas em n grupos iguais (quartis, percentis)</td></tr>
          </tbody>
        </table>
        <div style={S.code}>{`-- Ranking de produtos por preço dentro de cada categoria
SELECT nome, categoria, preco,
  RANK() OVER (PARTITION BY categoria ORDER BY preco DESC) AS rank_preco,
  DENSE_RANK() OVER (PARTITION BY categoria ORDER BY preco DESC) AS dense_rank
FROM Produto;

-- Variação de vendas mês a mês (LAG)
SELECT mes, total_vendas,
  LAG(total_vendas, 1) OVER (ORDER BY mes) AS mes_anterior,
  total_vendas - LAG(total_vendas, 1) OVER (ORDER BY mes) AS variacao
FROM VendasMensais;

-- Soma acumulada
SELECT data, valor,
  SUM(valor) OVER (ORDER BY data ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS acumulado
FROM Transaccao;`}</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. CTEs — Common Table Expressions</h2>
        <p style={S.p}>
          Uma CTE (cláusula WITH) define um resultado temporário com nome que pode ser referenciado na mesma query. Melhoram a legibilidade e permitem reutilizar subqueries.
        </p>
        <div style={S.code}>{`-- CTE simples: produtos caros por categoria
WITH ProdutosCaros AS (
  SELECT categoria, nome, preco
  FROM Produto
  WHERE preco > 100
),
ContaPorCategoria AS (
  SELECT categoria, COUNT(*) AS total
  FROM ProdutosCaros
  GROUP BY categoria
)
SELECT * FROM ContaPorCategoria WHERE total > 2;`}</div>
        <p style={S.p}><strong>CTEs Recursivas</strong> — permitem percorrer estruturas hierárquicas (árvores, grafos) que seriam impossíveis com SQL não-recursivo.</p>
        <div style={S.highlight}>
          Uma CTE recursiva tem dois ramos unidos por UNION ALL: o <strong>anchor</strong> (caso base) e o <strong>passo recursivo</strong> (referencia a própria CTE). A recursão termina quando o passo recursivo não produz mais linhas.
        </div>
        <div style={S.code}>{`-- Hierarquia de funcionários (árvore organizacional)
WITH RECURSIVE Hierarquia AS (
  -- Anchor: CEO (sem gestor)
  SELECT id, nome, gestor_id, 0 AS nivel
  FROM Funcionario
  WHERE gestor_id IS NULL

  UNION ALL

  -- Passo recursivo: subordinados directos
  SELECT f.id, f.nome, f.gestor_id, h.nivel + 1
  FROM Funcionario f
  INNER JOIN Hierarquia h ON f.gestor_id = h.id
)
SELECT nivel, nome FROM Hierarquia ORDER BY nivel, nome;

-- Série numérica com CTE recursiva
WITH RECURSIVE Serie(n) AS (
  SELECT 1
  UNION ALL
  SELECT n + 1 FROM Serie WHERE n < 10
)
SELECT * FROM Serie;`}</div>
        <div style={S.note}>
          Use LIMIT ou uma condição de profundidade máxima (ex.: nivel &lt; 10) para evitar recursões infinitas em grafos com ciclos.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Operações de Conjunto</h2>
        <p style={S.p}>
          As operações de conjunto combinam os resultados de dois ou mais SELECTs. As queries devem ter o mesmo número de colunas e tipos compatíveis.
        </p>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Operação</th><th style={S.th}>Resultado</th><th style={S.th}>Duplicados</th></tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>UNION</td><td style={S.td}>Linhas de A ou B</td><td style={S.td}>Eliminados (como DISTINCT)</td></tr>
            <tr><td style={S.td}>UNION ALL</td><td style={S.td}>Linhas de A ou B</td><td style={S.td}>Preservados (mais rápido)</td></tr>
            <tr><td style={S.td}>INTERSECT</td><td style={S.td}>Linhas presentes em A e em B</td><td style={S.td}>Eliminados</td></tr>
            <tr><td style={S.td}>EXCEPT</td><td style={S.td}>Linhas em A mas não em B</td><td style={S.td}>Eliminados</td></tr>
          </tbody>
        </table>
        <div style={S.code}>{`-- Clientes que compraram produto A OU produto B
SELECT cliente_id FROM Encomenda WHERE produto_id = 1
UNION
SELECT cliente_id FROM Encomenda WHERE produto_id = 2;

-- Clientes que compraram A E B (intersecção)
SELECT cliente_id FROM Encomenda WHERE produto_id = 1
INTERSECT
SELECT cliente_id FROM Encomenda WHERE produto_id = 2;

-- Clientes que compraram A mas NÃO B
SELECT cliente_id FROM Encomenda WHERE produto_id = 1
EXCEPT
SELECT cliente_id FROM Encomenda WHERE produto_id = 2;`}</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Índices</h2>
        <p style={S.p}>
          Um índice é uma estrutura de dados auxiliar que acelera a recuperação de linhas sem ter de percorrer toda a tabela (full table scan). Têm custo de espaço e abrandam escritas (INSERT/UPDATE/DELETE).
        </p>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Tipo</th><th style={S.th}>Estrutura</th><th style={S.th}>Ideal para</th></tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>B-Tree</td><td style={S.td}>Árvore balanceada ordenada</td><td style={S.td}>Igualdade, intervalos, ORDER BY, LIKE 'prefix%'</td></tr>
            <tr><td style={S.td}>Hash</td><td style={S.td}>Tabela de dispersão</td><td style={S.td}>Apenas igualdade exacta; não suporta ranges</td></tr>
            <tr><td style={S.td}>GiST / GIN</td><td style={S.td}>Estruturas generalizadas</td><td style={S.td}>Texto full-text, arrays, dados geoespaciais (PostgreSQL)</td></tr>
            <tr><td style={S.td}>Partial Index</td><td style={S.td}>B-Tree com cláusula WHERE</td><td style={S.td}>Indexar apenas subconjuntos da tabela</td></tr>
            <tr><td style={S.td}>Covering Index</td><td style={S.td}>Inclui colunas extra (INCLUDE)</td><td style={S.td}>Index-only scans sem aceder à tabela</td></tr>
          </tbody>
        </table>
        <div style={S.code}>{`-- Índice simples
CREATE INDEX idx_produto_categoria ON Produto(categoria);

-- Índice composto (ordem importa: queries filtram por cat depois por preco)
CREATE INDEX idx_cat_preco ON Produto(categoria, preco DESC);

-- Covering index: inclui colunas extra para index-only scan
CREATE INDEX idx_covering ON Produto(categoria) INCLUDE (nome, preco);

-- Índice parcial: apenas produtos activos
CREATE INDEX idx_produto_activo ON Produto(nome) WHERE activo = TRUE;

-- Ver plano de execução
EXPLAIN ANALYZE SELECT * FROM Produto WHERE categoria = 'Periféricos';`}</div>
        <div style={S.highlight}>
          <strong>Selectividade</strong> — um índice é útil quando a coluna tem alta cardinalidade (muitos valores distintos). Uma coluna booleana ou de género tem baixa selectividade e raramente beneficia de um índice B-Tree.
        </div>
        <p style={S.p}>
          <strong>Quando criar índices:</strong> colunas usadas frequentemente em WHERE, JOIN ON, ORDER BY e GROUP BY. Evitar índices em tabelas muito pequenas, colunas actualizadas com frequência elevada ou colunas com muitos valores repetidos.
        </p>
        <div style={S.note}>
          Regra prática: um índice é contraproducente quando a query retorna mais de 10-15% das linhas da tabela — o optimizador optará provavelmente por um full scan de qualquer forma.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. Síntese do Módulo</h2>
        <div style={{ ...S.highlight, borderColor: color }}>
          <ul style={{ margin: '0 0 0 1.2rem', color: 'var(--text-primary)', lineHeight: 2 }}>
            <li>GROUP BY agrega linhas; HAVING filtra grupos. Apenas colunas agrupadas ou agregadas podem aparecer no SELECT.</li>
            <li>Window functions (RANK, DENSE_RANK, LAG, LEAD, SUM OVER) calculam por linha sem colapsar o resultado.</li>
            <li>CTEs (WITH) melhoram legibilidade; CTEs recursivas percorrem hierarquias e grafos com anchor + passo recursivo.</li>
            <li>UNION elimina duplicados; UNION ALL preserva-os e é mais rápido. INTERSECT e EXCEPT operam como operações de conjuntos matemáticos.</li>
            <li>B-Tree é o índice universal; Hash só serve para igualdade. Covering indexes permitem index-only scans. A selectividade determina a utilidade de um índice.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
