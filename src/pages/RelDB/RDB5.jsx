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
  note: { background: 'rgba(21,94,117,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

export default function RDB5() {
  return (
    <div style={S.page}>
      <Link to="/reldb" style={S.back}><ArrowLeft size={16} /> Bases de Dados Relacionais</Link>

      <span style={S.tag}>MÓDULO 5</span>
      <h1 style={S.h1}>Aggregate Functions, Views &amp; Triggers</h1>
      <p style={S.lead}>
        Neste módulo exploramos as ferramentas que permitem sumarizar, abstrair e automatizar comportamentos
        dentro de uma base de dados relacional — desde funções de agregação avançadas até triggers que reagem
        a eventos de modificação de dados.
      </p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Aggregate Functions &amp; GROUP BY Avançado</h2>
        <p style={S.p}>
          As funções de agregação (COUNT, SUM, AVG, MIN, MAX) operam sobre conjuntos de linhas e produzem
          um único valor. A cláusula <strong>GROUP BY</strong> divide o resultado em grupos antes da agregação.
        </p>
        <div style={S.code}>{`-- GROUP BY multi-nível
SELECT departamento, cargo, COUNT(*) AS total, AVG(salario) AS media
FROM funcionarios
GROUP BY departamento, cargo
ORDER BY departamento, cargo;`}</div>

        <p style={S.p}>
          <strong>ROLLUP</strong> gera subtotais hierárquicos. Com GROUP BY ROLLUP(a, b) obtem-se subtotais
          por (a, b), por (a) e o total geral.
        </p>
        <div style={S.code}>{`SELECT departamento, cargo, SUM(salario)
FROM funcionarios
GROUP BY ROLLUP(departamento, cargo);`}</div>

        <p style={S.p}>
          <strong>CUBE</strong> gera subtotais para todas as combinações possíveis das colunas listadas.
        </p>
        <div style={S.code}>{`SELECT departamento, ano, SUM(vendas)
FROM relatorio
GROUP BY CUBE(departamento, ano);`}</div>

        <p style={S.p}>
          <strong>GROUPING SETS</strong> permite especificar exactamente quais agrupamentos se quer, sem gerar
          todos os subconjuntos como o CUBE faz.
        </p>
        <div style={S.code}>{`SELECT departamento, cargo, SUM(salario)
FROM funcionarios
GROUP BY GROUPING SETS (
  (departamento, cargo),
  (departamento),
  ()
);`}</div>

        <div style={S.note}>
          A função <code>GROUPING(coluna)</code> retorna 1 quando a coluna está NULL por ser um subtotal
          de ROLLUP/CUBE, e 0 quando é um valor real — útil para distinguir NULLs reais de NULLs de agregação.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Views</h2>
        <p style={S.p}>
          Uma <strong>view</strong> é uma query armazenada com nome que se comporta como uma tabela virtual.
          Não armazena dados (salvo views materializadas) — a query subjacente é executada cada vez que a view
          é referenciada.
        </p>
        <div style={S.code}>{`CREATE VIEW vendas_resumo AS
SELECT p.nome AS produto, SUM(v.quantidade) AS total_vendido
FROM vendas v
JOIN produtos p ON p.id = v.produto_id
GROUP BY p.nome;

SELECT * FROM vendas_resumo WHERE total_vendido > 100;`}</div>

        <p style={S.p}>
          <strong>Views actualizáveis:</strong> uma view é actualizável quando mapeia exactamente para uma
          tabela base sem GROUP BY, DISTINCT, funções de agregação ou JOINs complexos. O INSERT/UPDATE/DELETE
          propaga-se para a tabela subjacente.
        </p>

        <p style={S.p}>
          <strong>Views materializadas</strong> armazenam fisicamente o resultado da query. São refrescadas
          manualmente (REFRESH MATERIALIZED VIEW) ou configuradas para refrescar automaticamente.
        </p>
        <div style={S.code}>{`CREATE MATERIALIZED VIEW mv_vendas_mensais AS
SELECT DATE_TRUNC('month', data) AS mes, SUM(valor) AS total
FROM vendas
GROUP BY 1;

REFRESH MATERIALIZED VIEW mv_vendas_mensais;`}</div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Armazena dados?</th>
              <th style={S.th}>Performance</th>
              <th style={S.th}>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>View simples</td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Depende da query base</td>
              <td style={S.td}>Abstracção e segurança de acesso</td>
            </tr>
            <tr>
              <td style={S.td}>View materializada</td>
              <td style={S.td}>Sim</td>
              <td style={S.td}>Rápida (pré-computada)</td>
              <td style={S.td}>Relatórios, dados quasi-estáticos</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Stored Procedures &amp; Functions</h2>
        <p style={S.p}>
          <strong>Stored procedures</strong> são blocos de código SQL/PL executados no servidor da base de dados.
          Permitem encapsular lógica de negócio, reduzir tráfego de rede e reutilizar código entre aplicações.
        </p>
        <div style={S.code}>{`-- Função com parâmetro IN e valor de retorno
CREATE OR REPLACE FUNCTION calcular_desconto(
  preco IN NUMERIC,
  percentagem IN NUMERIC
) RETURNS NUMERIC AS $$
BEGIN
  RETURN preco * (1 - percentagem / 100);
END;
$$ LANGUAGE plpgsql;

-- Procedure com parâmetro OUT e tratamento de excepção
CREATE OR REPLACE PROCEDURE transferir_saldo(
  origem_id IN INT,
  destino_id IN INT,
  montante IN NUMERIC,
  resultado OUT TEXT
) AS $$
BEGIN
  UPDATE contas SET saldo = saldo - montante WHERE id = origem_id;
  UPDATE contas SET saldo = saldo + montante WHERE id = destino_id;
  resultado := 'OK';
EXCEPTION
  WHEN OTHERS THEN
    ROLLBACK;
    resultado := 'ERRO: ' || SQLERRM;
END;
$$ LANGUAGE plpgsql;`}</div>

        <div style={S.highlight}>
          <strong>Controlo de fluxo em PL/pgSQL:</strong> IF/ELSIF/ELSE, CASE, LOOP, WHILE, FOR (sobre ranges
          ou cursores). Excepções são apanhadas com o bloco EXCEPTION — podem ser relançadas com RAISE ou
          tratadas silenciosamente, registando o erro em tabela de log.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Triggers</h2>
        <p style={S.p}>
          Um <strong>trigger</strong> é uma acção automática executada antes ou depois de um evento DML
          (INSERT, UPDATE, DELETE) numa tabela. Definem-se em duas partes: a função de trigger (retorna TRIGGER)
          e o trigger que a associa à tabela e ao evento.
        </p>
        <div style={S.code}>{`-- Função de trigger para auditoria
CREATE OR REPLACE FUNCTION audit_log()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'DELETE' THEN
    INSERT INTO audit(tabela, operacao, dados_antigos, momento)
    VALUES (TG_TABLE_NAME, TG_OP, row_to_json(OLD), NOW());
  ELSE
    INSERT INTO audit(tabela, operacao, dados_novos, momento)
    VALUES (TG_TABLE_NAME, TG_OP, row_to_json(NEW), NOW());
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_audit_funcionarios
AFTER INSERT OR UPDATE OR DELETE ON funcionarios
FOR EACH ROW EXECUTE FUNCTION audit_log();

-- BEFORE INSERT — validação
CREATE OR REPLACE FUNCTION validar_salario()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.salario < 0 THEN
    RAISE EXCEPTION 'Salário não pode ser negativo';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_check_salario
BEFORE INSERT OR UPDATE ON funcionarios
FOR EACH ROW EXECUTE FUNCTION validar_salario();`}</div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Timing</th>
              <th style={S.th}>Uso típico</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>BEFORE</td><td style={S.td}>Validação, modificação de NEW antes de persistir</td></tr>
            <tr><td style={S.td}>AFTER</td><td style={S.td}>Auditoria, propagação para outras tabelas</td></tr>
            <tr><td style={S.td}>INSTEAD OF</td><td style={S.td}>Views não actualizáveis — interceptar DML</td></tr>
          </tbody>
        </table>

        <div style={S.note}>
          <strong>Triggers recursivos:</strong> um trigger que faz UPDATE na mesma tabela pode disparar
          outro trigger, criando um loop infinito. Use variáveis de sessão ou condições de guarda (ex: verificar
          se já está dentro do trigger) para evitar recursão.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Cursores</h2>
        <p style={S.p}>
          Um <strong>cursor</strong> permite iterar linha a linha sobre o resultado de uma query dentro de
          código procedural. São úteis quando a lógica de processamento não se expressa facilmente em SQL puro.
        </p>
        <div style={S.code}>{`DO $$
DECLARE
  cur CURSOR FOR SELECT id, salario FROM funcionarios;
  rec RECORD;
BEGIN
  OPEN cur;
  LOOP
    FETCH cur INTO rec;
    EXIT WHEN NOT FOUND;
    RAISE NOTICE 'ID: %, Salário: %', rec.id, rec.salario;
  END LOOP;
  CLOSE cur;
END;
$$;`}</div>

        <div style={S.highlight}>
          <strong>Cursores vs operações set-based:</strong> sempre que possível, prefira SQL declarativo.
          Cursores são mais lentos porque processam uma linha de cada vez e impedem optimizações do optimizador.
          Use cursores apenas quando a lógica por linha é inevitável — por exemplo, processamento com estado
          acumulado que depende de linhas anteriores.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. Síntese do Módulo</h2>
        <div style={{ ...S.highlight, borderRadius: 10 }}>
          <ul style={{ margin: '0 0 0 1.2rem', lineHeight: 2, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
            <li>ROLLUP e CUBE geram subtotais hierárquicos; GROUPING SETS dá controlo granular sobre agrupamentos.</li>
            <li>Views simplificam queries complexas e protegem a estrutura interna; views materializadas melhoram performance à custa de dados potencialmente desactualizados.</li>
            <li>Stored procedures encapsulam lógica de negócio no servidor, suportando parâmetros IN/OUT e tratamento de excepções com ROLLBACK.</li>
            <li>Triggers automatizam reacções a eventos DML — usar com parcimónia para evitar efeitos secundários, debugging difícil e recursão infinita.</li>
            <li>Cursores são a alternativa procedural quando operações de conjunto não chegam, mas têm custo de performance significativo.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
