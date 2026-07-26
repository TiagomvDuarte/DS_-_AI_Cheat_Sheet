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

export default function RDB2() {
  return (
    <div style={S.page}>
      <Link to="/reldb" style={S.back}><ArrowLeft size={16} /> Voltar a Relational Databases</Link>

      <div style={S.tag}>MÓDULO 2</div>
      <h1 style={S.h1}>Arquitectura DBMS e Modelo Entidade-Relacionamento</h1>

      <div style={S.section}>
        <h2 style={S.h2}>1. Arquitectura DBMS</h2>
        <p style={S.p}>
          Um Sistema de Gestão de Base de Dados (SGBD) é composto por vários subsistemas que colaboram para oferecer armazenamento persistente, processamento de queries e gestão de transacções.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Componente</th>
              <th style={S.th}>Responsabilidade</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Storage Engine</td><td style={S.td}>Organiza dados em páginas no disco; gere ficheiros, segmentos e extensões</td></tr>
            <tr><td style={S.td}>Query Processor</td><td style={S.td}>Analisa, valida e optimiza queries SQL; gera planos de execução</td></tr>
            <tr><td style={S.td}>Transaction Manager</td><td style={S.td}>Garante as propriedades ACID; controla concorrência com locks e MVCC</td></tr>
            <tr><td style={S.td}>Buffer Pool</td><td style={S.td}>Cache em memória de páginas de disco; reduz I/O com políticas de substituição (LRU)</td></tr>
            <tr><td style={S.td}>Log Manager</td><td style={S.td}>Write-Ahead Log (WAL) para recuperação após falhas</td></tr>
            <tr><td style={S.td}>Catalog / Metadata</td><td style={S.td}>Dicionário de dados: esquemas, estatísticas, permissões</td></tr>
          </tbody>
        </table>
        <p style={S.p}>
          O <strong>Query Processor</strong> segue o pipeline: Parser → Validator → Rewriter → Optimiser → Executor. O optimizador usa estatísticas do catálogo para estimar cardinalidades e escolher o plano de menor custo.
        </p>
        <div style={S.note}>
          O Buffer Pool é frequentemente o maior consumidor de memória RAM de um SGBD. Dimensioná-lo correctamente (tipicamente 70-80% da RAM disponível) é crítico para a performance.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Modelo Entidade-Relacionamento</h2>
        <p style={S.p}>
          O modelo E-R é uma notação conceptual para representar a estrutura de informação de um domínio antes de a mapear para um SGBD concreto.
        </p>
        <div style={S.highlight}>
          <strong>Entidades</strong> — objectos do mundo real distinguíveis entre si (ex.: Aluno, Curso). Um <em>tipo de entidade</em> define os atributos comuns; uma <em>instância</em> é um registo concreto. Entidades fracas dependem de outra entidade para a sua identificação.
        </div>
        <div style={S.highlight}>
          <strong>Atributos</strong> — propriedades das entidades. Tipos: simples vs compostos, mono-valorados vs multi-valorados, derivados (calculados) e atributos-chave (sublinhados na notação E-R).
        </div>
        <div style={S.highlight}>
          <strong>Relacionamentos</strong> — associações entre entidades (ex.: Aluno inscreve-se em Curso). Podem ter atributos próprios (ex.: a Nota da inscrição) e grau (binário, ternário, etc.).
        </div>
        <p style={S.p}><strong>Cardinalidades:</strong></p>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Tipo</th><th style={S.th}>Descrição</th><th style={S.th}>Exemplo</th></tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>1:1</td><td style={S.td}>Cada entidade de A associa-se a no máximo uma de B</td><td style={S.td}>Pessoa ↔ Passaporte</td></tr>
            <tr><td style={S.td}>1:N</td><td style={S.td}>Uma entidade de A associa-se a várias de B</td><td style={S.td}>Departamento → Funcionários</td></tr>
            <tr><td style={S.td}>N:M</td><td style={S.td}>Várias de A associam-se a várias de B</td><td style={S.td}>Alunos ↔ Cursos</td></tr>
          </tbody>
        </table>
        <p style={S.p}>
          A <strong>participação total</strong> (linha dupla) indica que todas as instâncias devem participar no relacionamento. A <strong>participação parcial</strong> (linha simples) indica que a participação é opcional.
        </p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Do Modelo E-R para o Modelo Relacional</h2>
        <p style={S.p}>O mapeamento do diagrama E-R para tabelas relacionais segue regras bem definidas:</p>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Construto E-R</th><th style={S.th}>Mapeamento Relacional</th></tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Entidade forte</td><td style={S.td}>Uma tabela com a chave primária e os seus atributos</td></tr>
            <tr><td style={S.td}>Entidade fraca</td><td style={S.td}>Tabela com a chave parcial + FK para a entidade forte (chave composta)</td></tr>
            <tr><td style={S.td}>Relacionamento 1:N</td><td style={S.td}>FK no lado N referenciando a PK do lado 1</td></tr>
            <tr><td style={S.td}>Relacionamento N:M</td><td style={S.td}>Tabela de associação com FKs de ambas as entidades + atributos do relacionamento</td></tr>
            <tr><td style={S.td}>Relacionamento 1:1</td><td style={S.td}>FK numa das tabelas (preferencialmente no lado de participação total)</td></tr>
            <tr><td style={S.td}>Atributo multi-valorado</td><td style={S.td}>Tabela separada com FK para a entidade pai</td></tr>
          </tbody>
        </table>
        <div style={S.code}>{`-- Relacionamento N:M: Aluno inscreve-se em Curso
CREATE TABLE Inscricao (
  aluno_id  INT REFERENCES Aluno(id),
  curso_id  INT REFERENCES Curso(id),
  nota      DECIMAL(4,2),
  PRIMARY KEY (aluno_id, curso_id)
);`}</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Chaves</h2>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Tipo</th><th style={S.th}>Definição</th></tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Superchave</td><td style={S.td}>Qualquer conjunto de atributos que identifica unicamente uma linha</td></tr>
            <tr><td style={S.td}>Chave Candidata</td><td style={S.td}>Superchave mínima (sem atributos desnecessários)</td></tr>
            <tr><td style={S.td}>Chave Primária (PK)</td><td style={S.td}>Chave candidata escolhida como identificador principal; NOT NULL + UNIQUE</td></tr>
            <tr><td style={S.td}>Chave Estrangeira (FK)</td><td style={S.td}>Atributo(s) que referenciam a PK de outra tabela; garante integridade referencial</td></tr>
            <tr><td style={S.td}>Chave Surrogate</td><td style={S.td}>Identificador sintético gerado pelo sistema (ex.: SERIAL, UUID); sem significado de negócio</td></tr>
            <tr><td style={S.td}>Chave Natural</td><td style={S.td}>Identificador com significado no domínio (ex.: NIF, ISBN)</td></tr>
          </tbody>
        </table>
        <div style={S.note}>
          Chaves surrogates são geralmente preferíveis: não mudam com alterações de negócio, são compactas e eficientes em joins. Chaves naturais têm valor semântico mas podem mudar ao longo do tempo.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Integridade</h2>
        <p style={S.p}>A integridade dos dados é garantida por vários tipos de restrições que o SGBD aplica automaticamente:</p>
        <div style={S.highlight}>
          <strong>Integridade de Entidade</strong> — nenhuma componente da chave primária pode ser NULL. Garante que todas as linhas são identificáveis de forma única.
        </div>
        <div style={S.highlight}>
          <strong>Integridade Referencial</strong> — o valor de uma FK deve existir na tabela referenciada ou ser NULL. Acções configuráveis: CASCADE, SET NULL, SET DEFAULT, RESTRICT, NO ACTION.
        </div>
        <div style={S.highlight}>
          <strong>Restrições de Domínio</strong> — o valor de um atributo deve pertencer ao domínio definido pelo seu tipo de dados e constraints (CHECK, NOT NULL, UNIQUE, DEFAULT).
        </div>
        <div style={S.code}>{`-- Integridade referencial com acções em cascata
ALTER TABLE Inscricao
  ADD CONSTRAINT fk_aluno
    FOREIGN KEY (aluno_id) REFERENCES Aluno(id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT;

-- Restrição de domínio com CHECK
ALTER TABLE Produto
  ADD CONSTRAINT chk_preco CHECK (preco > 0);`}</div>
      </div>

    </div>
  );
}
