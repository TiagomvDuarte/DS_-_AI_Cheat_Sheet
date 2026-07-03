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

export default function RDB3() {
  return (
    <div style={S.page}>
      <Link to="/reldb" style={S.back}><ArrowLeft size={16} /> Voltar a Relational Databases</Link>

      <div style={S.tag}>MÓDULO 3</div>
      <h1 style={S.h1}>SQL — Fundamentos</h1>
      <p style={S.lead}>
        SQL (Structured Query Language) é a linguagem padrão para interagir com bases de dados relacionais. Divide-se em DDL (definição de esquemas), DML (manipulação de dados) e consultas complexas com JOINs e subqueries.
      </p>

      <div style={S.section}>
        <h2 style={S.h2}>1. DDL — Data Definition Language</h2>
        <p style={S.p}>
          DDL define a estrutura da base de dados: tabelas, colunas, tipos de dados e restrições. As operações DDL são transaccionais na maioria dos SGBDs modernos.
        </p>
        <div style={S.code}>{`-- Criar tabela com constraints
CREATE TABLE Produto (
  id          SERIAL PRIMARY KEY,
  nome        VARCHAR(100) NOT NULL,
  preco       DECIMAL(10,2) NOT NULL CHECK (preco > 0),
  categoria   VARCHAR(50) DEFAULT 'Geral',
  sku         VARCHAR(20) UNIQUE,
  criado_em   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Adicionar coluna
ALTER TABLE Produto ADD COLUMN stock INT NOT NULL DEFAULT 0;

-- Modificar tipo
ALTER TABLE Produto ALTER COLUMN nome TYPE VARCHAR(200);

-- Adicionar constraint
ALTER TABLE Produto ADD CONSTRAINT chk_stock CHECK (stock >= 0);

-- Remover tabela
DROP TABLE IF EXISTS Produto CASCADE;`}</div>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Constraint</th><th style={S.th}>Efeito</th></tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>NOT NULL</td><td style={S.td}>Proibe valores nulos na coluna</td></tr>
            <tr><td style={S.td}>UNIQUE</td><td style={S.td}>Garante que todos os valores na coluna são distintos</td></tr>
            <tr><td style={S.td}>CHECK</td><td style={S.td}>Valida uma expressão booleana para cada linha</td></tr>
            <tr><td style={S.td}>DEFAULT</td><td style={S.td}>Valor usado quando a coluna não é fornecida no INSERT</td></tr>
            <tr><td style={S.td}>PRIMARY KEY</td><td style={S.td}>NOT NULL + UNIQUE; identifica cada linha</td></tr>
            <tr><td style={S.td}>FOREIGN KEY</td><td style={S.td}>Referencia a PK de outra tabela; garante integridade referencial</td></tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. DML Básico — INSERT, UPDATE, DELETE, SELECT</h2>
        <p style={S.p}>DML manipula os dados armazenados. Todas as operações DML podem ser revertidas dentro de uma transacção.</p>
        <div style={S.code}>{`-- INSERT
INSERT INTO Produto (nome, preco, categoria) VALUES ('Teclado', 49.99, 'Periféricos');
-- INSERT múltiplo
INSERT INTO Produto (nome, preco) VALUES ('Rato', 29.99), ('Monitor', 299.99);
-- INSERT com SELECT
INSERT INTO ArquivoProduto SELECT * FROM Produto WHERE stock = 0;

-- UPDATE
UPDATE Produto SET preco = preco * 1.05 WHERE categoria = 'Periféricos';
-- UPDATE com subconsulta
UPDATE Produto SET stock = 0 WHERE id IN (SELECT produto_id FROM Descontinuado);

-- DELETE
DELETE FROM Produto WHERE stock = 0 AND preco < 10;
-- TRUNCATE (mais rápido, sem WHERE, não activa triggers linha a linha)
TRUNCATE TABLE LogTemporario;

-- SELECT básico
SELECT nome, preco FROM Produto WHERE categoria = 'Periféricos';`}</div>
        <div style={S.note}>
          TRUNCATE é muito mais rápido que DELETE sem WHERE mas não pode ser filtrado e, em alguns SGBDs, não dispara triggers de linha. Use DELETE quando precisar de filtrar ou de activar triggers.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. SELECT Avançado</h2>
        <p style={S.p}>O SELECT é a instrução mais rica do SQL. A sua ordem de avaliação lógica difere da ordem de escrita:</p>
        <div style={S.highlight}>
          <strong>Ordem lógica de avaliação:</strong> FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT/OFFSET
        </div>
        <div style={S.code}>{`-- WHERE com múltiplas condições e operadores
SELECT nome, preco
FROM Produto
WHERE categoria IN ('Periféricos', 'Audio')
  AND preco BETWEEN 20 AND 200
  AND nome ILIKE '%tec%';

-- DISTINCT e ORDER BY
SELECT DISTINCT categoria
FROM Produto
ORDER BY categoria ASC;

-- LIMIT e OFFSET (paginação)
SELECT * FROM Produto
ORDER BY preco DESC
LIMIT 10 OFFSET 20;   -- página 3 (0-indexed, 10 por página)

-- Aliases de coluna e tabela
SELECT p.nome AS produto, p.preco * 1.23 AS preco_iva
FROM Produto AS p
WHERE p.preco > 50;`}</div>
        <div style={S.note}>
          Aliases definidos no SELECT não podem ser usados no WHERE (avaliado antes). Podem ser usados no ORDER BY em muitos SGBDs, mas não em HAVING — use a expressão completa ou uma CTE.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. JOINs</h2>
        <p style={S.p}>JOINs combinam linhas de duas ou mais tabelas com base numa condição de junção.</p>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Tipo</th><th style={S.th}>Resultado</th></tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>INNER JOIN</td><td style={S.td}>Apenas linhas com correspondência em ambas as tabelas</td></tr>
            <tr><td style={S.td}>LEFT JOIN</td><td style={S.td}>Todas as linhas da esquerda + correspondências da direita (NULL se sem par)</td></tr>
            <tr><td style={S.td}>RIGHT JOIN</td><td style={S.td}>Todas as linhas da direita + correspondências da esquerda</td></tr>
            <tr><td style={S.td}>FULL OUTER JOIN</td><td style={S.td}>Todas as linhas de ambas as tabelas; NULL onde não há correspondência</td></tr>
            <tr><td style={S.td}>CROSS JOIN</td><td style={S.td}>Produto cartesiano: todas as combinações possíveis</td></tr>
            <tr><td style={S.td}>Self-Join</td><td style={S.td}>Join de uma tabela consigo própria (ex.: hierarquias de funcionários)</td></tr>
          </tbody>
        </table>
        <div style={S.code}>{`-- INNER JOIN
SELECT p.nome, c.nome AS categoria_nome
FROM Produto p
INNER JOIN Categoria c ON p.categoria_id = c.id;

-- LEFT JOIN (inclui produtos sem categoria)
SELECT p.nome, c.nome AS categoria_nome
FROM Produto p
LEFT JOIN Categoria c ON p.categoria_id = c.id;

-- FULL OUTER JOIN
SELECT p.nome, c.nome
FROM Produto p
FULL OUTER JOIN Categoria c ON p.categoria_id = c.id;

-- Self-Join: hierarquia de funcionários
SELECT e.nome AS funcionario, m.nome AS gestor
FROM Funcionario e
LEFT JOIN Funcionario m ON e.gestor_id = m.id;`}</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Subqueries</h2>
        <p style={S.p}>Uma subquery é uma instrução SELECT embutida dentro de outra instrução SQL. Podem aparecer no SELECT, FROM, WHERE e HAVING.</p>
        <div style={S.highlight}>
          <strong>Non-Correlated</strong> — executada uma vez independentemente da query exterior. O resultado é reutilizado. Mais eficiente.
        </div>
        <div style={S.highlight}>
          <strong>Correlated</strong> — referencia colunas da query exterior. Executada uma vez por linha da query exterior. Pode ser lenta em grandes conjuntos.
        </div>
        <div style={S.code}>{`-- Non-correlated: produtos mais caros que a média
SELECT nome, preco
FROM Produto
WHERE preco > (SELECT AVG(preco) FROM Produto);

-- IN com subquery
SELECT nome FROM Produto
WHERE categoria_id IN (SELECT id FROM Categoria WHERE activa = TRUE);

-- EXISTS (correlated) — mais eficiente que IN para grandes conjuntos
SELECT c.nome
FROM Cliente c
WHERE EXISTS (
  SELECT 1 FROM Encomenda e WHERE e.cliente_id = c.id AND e.total > 1000
);

-- ANY / ALL
SELECT nome, preco FROM Produto
WHERE preco > ALL (SELECT preco FROM Produto WHERE categoria = 'Básico');

-- Subquery no FROM (derived table)
SELECT cat, total
FROM (
  SELECT categoria AS cat, COUNT(*) AS total
  FROM Produto
  GROUP BY categoria
) sub
WHERE total > 5;`}</div>
        <div style={S.note}>
          EXISTS termina assim que encontra a primeira correspondência (short-circuit), tornando-o geralmente mais eficiente que IN quando a subquery retorna muitas linhas.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. Síntese do Módulo</h2>
        <div style={{ ...S.highlight, borderColor: color }}>
          <ul style={{ margin: '0 0 0 1.2rem', color: 'var(--text-primary)', lineHeight: 2 }}>
            <li>DDL (CREATE, ALTER, DROP) define esquemas e constraints; DML (INSERT, UPDATE, DELETE) manipula dados.</li>
            <li>A ordem lógica de avaliação do SELECT é FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT.</li>
            <li>INNER JOIN retorna apenas correspondências; LEFT/RIGHT/FULL OUTER JOIN preservam linhas sem par com NULLs.</li>
            <li>Self-joins permitem modelar hierarquias; CROSS JOIN produz o produto cartesiano.</li>
            <li>Subqueries non-correlated executam uma vez; correlated executam por linha — EXISTS é geralmente mais eficiente que IN.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
