import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const color = '#4a9eed';
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
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

export default function RDB7() {
  return (
    <div style={S.page}>
      <Link to="/reldb" style={S.back}><ArrowLeft size={16} /> Bases de Dados Relacionais</Link>

      <span style={S.tag}>MÓDULO 7</span>
      <h1 style={S.h1}>ACID, Transacções &amp; Introdução ao NoSQL</h1>

      <div style={S.section}>
        <h2 style={S.h2}>1. Transacções ACID</h2>
        <p style={S.p}>
          Uma <strong>transacção</strong> é uma sequência de operações tratada como uma unidade indivisível.
          As propriedades ACID garantem comportamento correcto mesmo perante falhas ou acesso concorrente.
        </p>

        <div style={S.highlight}>
          <strong>A — Atomicity (Atomicidade):</strong> ou todas as operações da transacção são aplicadas,
          ou nenhuma é. Se a transacção falhar a meio, o DBMS faz rollback de tudo.
          <br /><br />
          <em>Exemplo:</em> transferência bancária — o débito e o crédito são atómicos. Nunca pode existir
          débito sem crédito correspondente.
        </div>

        <div style={S.highlight}>
          <strong>C — Consistency (Consistência):</strong> uma transacção leva a base de dados de um estado
          válido para outro estado válido, respeitando todas as restrições de integridade (chaves, checks, triggers).
        </div>

        <div style={S.highlight}>
          <strong>I — Isolation (Isolamento):</strong> transacções concorrentes executam como se fossem
          serializadas — os efeitos intermédios de uma transacção não são visíveis a outras.
        </div>

        <div style={S.highlight}>
          <strong>D — Durability (Durabilidade):</strong> após um COMMIT, os dados estão persistidos mesmo
          que o sistema falhe imediatamente a seguir. Garantido por Write-Ahead Logging (WAL).
        </div>

        <div style={S.code}>{`BEGIN;
  UPDATE contas SET saldo = saldo - 500 WHERE id = 1;
  UPDATE contas SET saldo = saldo + 500 WHERE id = 2;
  -- Só é persistido se ambas as operações OK
COMMIT;

-- Se algo correr mal:
ROLLBACK;`}</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Isolation Levels</h2>
        <p style={S.p}>
          O isolamento perfeito (SERIALIZABLE) tem custo de performance. O SQL standard define quatro níveis,
          cada um tolerando diferentes anomalias:
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Nível</th>
              <th style={S.th}>Dirty Read</th>
              <th style={S.th}>Non-Repeatable Read</th>
              <th style={S.th}>Phantom Read</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>READ UNCOMMITTED</td>
              <td style={S.td}>Possível</td>
              <td style={S.td}>Possível</td>
              <td style={S.td}>Possível</td>
            </tr>
            <tr>
              <td style={S.td}>READ COMMITTED</td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Possível</td>
              <td style={S.td}>Possível</td>
            </tr>
            <tr>
              <td style={S.td}>REPEATABLE READ</td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Possível</td>
            </tr>
            <tr>
              <td style={S.td}>SERIALIZABLE</td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Não</td>
            </tr>
          </tbody>
        </table>

        <p style={S.p}><strong>Anomalias explicadas:</strong></p>
        <ul style={{ paddingLeft: '1.25rem', lineHeight: 2, color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
          <li><strong>Dirty Read:</strong> ler dados de uma transacção que ainda não fez commit (dados que podem ser revertidos).</li>
          <li><strong>Non-Repeatable Read:</strong> ler a mesma linha duas vezes dentro da mesma transacção e obter valores diferentes (outra transacção fez commit entretanto).</li>
          <li><strong>Phantom Read:</strong> executar a mesma query duas vezes e obter linhas diferentes (outra transacção inseriu/eliminou linhas que satisfazem a condição).</li>
        </ul>

        <div style={S.code}>{`-- Definir nível de isolamento para uma transacção
BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;
  SELECT saldo FROM contas WHERE id = 1;
  -- ... lógica de negócio ...
  SELECT saldo FROM contas WHERE id = 1; -- garante mesmo valor
COMMIT;`}</div>

        <div style={S.note}>
          PostgreSQL implementa REPEATABLE READ via MVCC — na prática previne também phantom reads para
          DML (mas não para SELECT). O nível padrão é READ COMMITTED.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Concorrência — Locks, Deadlocks e MVCC</h2>
        <p style={S.p}>
          O DBMS controla o acesso concorrente através de <strong>locks</strong> (bloqueios) e/ou
          <strong> MVCC</strong> (Multi-Version Concurrency Control).
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo de Lock</th>
              <th style={S.th}>Compatível com</th>
              <th style={S.th}>Usado em</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Shared (S)</td>
              <td style={S.td}>Shared</td>
              <td style={S.td}>SELECT (leitura)</td>
            </tr>
            <tr>
              <td style={S.td}>Exclusive (X)</td>
              <td style={S.td}>Nenhum</td>
              <td style={S.td}>INSERT / UPDATE / DELETE</td>
            </tr>
          </tbody>
        </table>

        <p style={S.p}>
          <strong>Deadlock</strong> ocorre quando a transacção A espera pela transacção B e B espera por A,
          criando um ciclo. O DBMS detecta o ciclo no grafo de espera e aborta uma das transacções (a "vítima").
          Para minimizar deadlocks: adquira locks sempre na mesma ordem e mantenha transacções curtas.
        </p>

        <p style={S.p}>
          <strong>MVCC</strong> mantém múltiplas versões de cada linha. Cada transacção vê um snapshot
          consistente do momento em que começou, sem precisar de bloquear leituras. Os escritores não bloqueiam
          leitores e vice-versa — aumenta significativamente o throughput em cargas mistas.
        </p>

        <div style={S.highlight}>
          No PostgreSQL, linhas antigas (dead tuples) acumulam-se com MVCC. O processo <strong>VACUUM</strong>
          limpa estas versões antigas e devolve espaço. O AUTOVACUUM faz isto automaticamente, mas em tabelas
          de alta carga pode ser necessário ajustar a sua configuração.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Recovery — WAL, Checkpoints e Redo/Undo Logs</h2>
        <p style={S.p}>
          O <strong>Write-Ahead Logging (WAL)</strong> é o mecanismo fundamental de durabilidade: antes
          de qualquer alteração ser escrita nos ficheiros de dados, o registo correspondente é escrito no
          log (WAL). Em caso de falha, o DBMS replica o log para recuperar o estado consistente.
        </p>

        <div style={S.code}>{`-- PostgreSQL: verificar posição do WAL
SELECT pg_current_wal_lsn();

-- Localização dos ficheiros WAL
-- pg_wal/ dentro do data directory`}</div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Conceito</th>
              <th style={S.th}>Função</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>WAL (Write-Ahead Log)</td>
              <td style={S.td}>Registo sequencial de todas as alterações; escrito antes dos dados</td>
            </tr>
            <tr>
              <td style={S.td}>Checkpoint</td>
              <td style={S.td}>Momento em que todas as dirty pages são escritas para disco; reduz tempo de recovery</td>
            </tr>
            <tr>
              <td style={S.td}>Redo log</td>
              <td style={S.td}>Replay de operações committed que ainda não estavam em disco (REDO após crash)</td>
            </tr>
            <tr>
              <td style={S.td}>Undo log</td>
              <td style={S.td}>Reverter operações de transacções que não fizeram commit antes do crash</td>
            </tr>
          </tbody>
        </table>

        <p style={S.p}>
          O processo de recovery após crash: o DBMS encontra o último checkpoint, faz REDO de todas as
          operações do WAL posteriores ao checkpoint (incluindo as de transacções abortadas), e depois faz
          UNDO das transacções que não tinham commit no momento da falha.
        </p>

        <div style={S.note}>
          O WAL também é a base da replicação em streaming (PostgreSQL streaming replication) — o servidor
          secundário aplica os registos WAL do primário para se manter sincronizado.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. RDBMS vs NoSQL</h2>
        <p style={S.p}>
          Os sistemas NoSQL surgiram para endereçar casos de uso onde os RDBMS tradicionais apresentavam
          limitações — especialmente em escalabilidade horizontal, esquemas flexíveis e volume massivo de dados.
        </p>

        <p style={S.p}>
          O <strong>teorema CAP</strong> (Brewer, 2000) afirma que um sistema distribuído só pode garantir
          simultaneamente duas das três propriedades: <strong>Consistency</strong> (todos os nós vêem os
          mesmos dados), <strong>Availability</strong> (todas as operações devolvem resposta), e
          <strong> Partition tolerance</strong> (o sistema funciona mesmo com falhas de rede entre nós).
          Como partições de rede são inevitáveis em sistemas distribuídos, a escolha real é entre CP e AP.
        </p>

        <p style={S.p}>
          Os sistemas NoSQL tipicamente adoptam <strong>BASE</strong> em vez de ACID:
          <em> Basically Available, Soft-state, Eventually consistent</em> — aceitam inconsistência temporária
          em troca de maior disponibilidade e escalabilidade.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Critério</th>
              <th style={S.th}>RDBMS</th>
              <th style={S.th}>NoSQL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Modelo de dados</td>
              <td style={S.td}>Tabelas relacionais, esquema fixo</td>
              <td style={S.td}>Documentos, grafos, colunar, chave-valor</td>
            </tr>
            <tr>
              <td style={S.td}>Consistência</td>
              <td style={S.td}>ACID (forte)</td>
              <td style={S.td}>BASE (eventual)</td>
            </tr>
            <tr>
              <td style={S.td}>Escalabilidade</td>
              <td style={S.td}>Vertical (scale up) + replicação leitura</td>
              <td style={S.td}>Horizontal (sharding nativo)</td>
            </tr>
            <tr>
              <td style={S.td}>Queries</td>
              <td style={S.td}>SQL declarativo, JOINs complexos</td>
              <td style={S.td}>APIs próprias; JOINs limitados ou inexistentes</td>
            </tr>
            <tr>
              <td style={S.td}>Schema</td>
              <td style={S.td}>Rígido (migrations)</td>
              <td style={S.td}>Flexível (schema-on-read)</td>
            </tr>
            <tr>
              <td style={S.td}>Quando usar</td>
              <td style={S.td}>Dados estruturados, transacções financeiras, integridade crítica</td>
              <td style={S.td}>Dados semi-estruturados, alta escala, latência baixa, esquema variável</td>
            </tr>
          </tbody>
        </table>

        <div style={S.highlight}>
          <strong>Exemplos de sistemas NoSQL por categoria:</strong>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.25rem', lineHeight: 1.9 }}>
            <li><strong>Documentos:</strong> MongoDB, CouchDB — dados JSON/BSON flexíveis</li>
            <li><strong>Chave-Valor:</strong> Redis, DynamoDB — latência ultra-baixa, cache</li>
            <li><strong>Colunar:</strong> Cassandra, HBase — séries temporais, analytics de larga escala</li>
            <li><strong>Grafos:</strong> Neo4j, Amazon Neptune — redes sociais, grafos de conhecimento</li>
          </ul>
        </div>

        <div style={S.note}>
          Hoje em dia a fronteira esbate-se: PostgreSQL suporta JSONB e full-text search; sistemas como
          CockroachDB e Spanner oferecem SQL distribuído com garantias ACID. A escolha deve ser guiada
          pelos requisitos do problema, não por modas tecnológicas.
        </div>
      </div>

    </div>
  );
}
