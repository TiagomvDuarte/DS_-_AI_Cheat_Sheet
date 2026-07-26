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

export default function RDB1() {
  return (
    <div style={S.page}>
      <Link to="/reldb" style={S.back}><ArrowLeft size={16} /> Voltar a Relational Databases</Link>

      <div style={S.tag}>MÓDULO 1</div>
      <h1 style={S.h1}>Normalização</h1>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Por que Normalizar?</h2>
        <p style={S.p}>
          Quando os dados são armazenados de forma não normalizada, surgem três tipos clássicos de anomalias que comprometem a consistência da base de dados:
        </p>
        <div style={S.highlight}>
          <strong>Anomalia de Inserção</strong>
          <p style={{ ...S.p, marginBottom: 0 }}>Não é possível inserir um facto sem inserir outro relacionado. Ex.: para registar um novo curso, é obrigado a existir pelo menos um aluno inscrito se os dados estiverem na mesma tabela.</p>
        </div>
        <div style={S.highlight}>
          <strong>Anomalia de Eliminação</strong>
          <p style={{ ...S.p, marginBottom: 0 }}>Ao apagar uma linha, perde-se informação não intencionalmente. Ex.: ao remover o único aluno de um curso, o curso desaparece da base de dados.</p>
        </div>
        <div style={S.highlight}>
          <strong>Anomalia de Actualização</strong>
          <p style={{ ...S.p, marginBottom: 0 }}>Um mesmo facto está armazenado em múltiplas linhas. Ao actualizar apenas algumas, os dados ficam inconsistentes. Ex.: o nome de um departamento repetido em cada funcionário.</p>
        </div>
        <p style={S.p}>
          A <strong>redundância</strong> é a causa raiz destas anomalias. Dados repetidos desperdiçam espaço e tornam as actualizações propensas a erros. A normalização elimina a redundância ao decompor tabelas em relações mais pequenas e coesas.
        </p>
        <div style={S.note}>
          Regra prática: cada tabela deve representar exatamente um assunto (entidade ou relacionamento). Se uma tabela mistura dois assuntos, provavelmente precisa de ser decomposta.
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Formas Normais</h2>
        <p style={S.p}>As formas normais são critérios progressivos. Uma relação na 3NF satisfaz automaticamente a 2NF e a 1NF.</p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Forma Normal</th>
              <th style={S.th}>Requisito</th>
              <th style={S.th}>Problema Eliminado</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>1NF</td><td style={S.td}>Todos os atributos são atómicos; sem grupos repetidos</td><td style={S.td}>Valores multi-valorados e compostos</td></tr>
            <tr><td style={S.td}>2NF</td><td style={S.td}>Está em 1NF + todos os não-chave dependem da chave inteira</td><td style={S.td}>Dependências parciais</td></tr>
            <tr><td style={S.td}>3NF</td><td style={S.td}>Está em 2NF + sem dependências transitivas entre não-chave</td><td style={S.td}>Dependências transitivas</td></tr>
            <tr><td style={S.td}>BCNF</td><td style={S.td}>Para toda DF X → Y, X é superchave</td><td style={S.td}>Anomalias residuais da 3NF</td></tr>
          </tbody>
        </table>

        <p style={S.p}><strong>1NF — Atributos Atómicos:</strong> Cada célula contém um único valor indivisível. Uma coluna "telefones" com valores "912345678, 934567890" viola a 1NF. Solução: criar uma tabela separada para telefones.</p>
        <p style={S.p}><strong>2NF — Dependência Total da Chave:</strong> Só é relevante quando a chave primária é composta. Se um atributo não-chave depende apenas de parte da chave, existe uma dependência parcial que viola a 2NF.</p>
        <div style={S.code}>{`-- Viola 2NF: NomeAluno depende só de AlunoID, não de (AlunoID, CursoID)
Inscricao(AlunoID, CursoID, NomeAluno, Nota)

-- Correcto:
Aluno(AlunoID, NomeAluno)
Inscricao(AlunoID, CursoID, Nota)`}</div>
        <p style={S.p}><strong>3NF — Sem Dependências Transitivas:</strong> Um atributo não-chave não pode depender de outro atributo não-chave. Se A → B e B → C (com B não sendo chave), então A → C é uma dependência transitiva.</p>
        <p style={S.p}><strong>BCNF:</strong> Versão mais forte da 3NF. Toda determinante deve ser uma superchave. Existem relações na 3NF que não estão na BCNF quando há múltiplas chaves candidatas sobrepostas.</p>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Decomposição</h2>
        <p style={S.p}>
          Normalizar implica decompor relações. Uma boa decomposição deve respeitar duas propriedades fundamentais:
        </p>
        <div style={S.highlight}>
          <strong>Lossless Join (Reunião Sem Perda)</strong>
          <p style={{ ...S.p, marginBottom: 0 }}>Ao fazer o natural join das tabelas decompostas, deve-se recuperar exactamente a relação original — sem linhas espúrias nem perda de dados. A condição é que o atributo de junção seja chave em pelo menos uma das tabelas resultantes.</p>
        </div>
        <div style={S.highlight}>
          <strong>Preservação de Dependências Funcionais</strong>
          <p style={{ ...S.p, marginBottom: 0 }}>Todas as DFs originais devem poder ser verificadas localmente numa das tabelas decompostas, sem necessidade de fazer joins. Se uma DF cruza duas tabelas, a verificação torna-se dispendiosa.</p>
        </div>
        <div style={S.note}>
          Atenção: nem sempre é possível satisfazer simultaneamente a BCNF e a preservação de dependências. Nesse caso, 3NF é preferível à BCNF.
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Desnormalização</h2>
        <p style={S.p}>
          Apesar dos benefícios da normalização, há cenários onde a desnormalização intencional é justificada por razões de performance:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Cenário</th>
              <th style={S.th}>Justificação</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Data Warehouses / OLAP</td><td style={S.td}>Consultas analíticas beneficiam de tabelas largas (esquema em estrela) que evitam joins custosos</td></tr>
            <tr><td style={S.td}>Relatórios com agregações frequentes</td><td style={S.td}>Guardar totais pré-calculados evita recalcular em tempo real</td></tr>
            <tr><td style={S.td}>Sistemas de leitura intensiva</td><td style={S.td}>Joins reduzidos diminuem a latência de leitura</td></tr>
          </tbody>
        </table>
        <p style={S.p}>
          A desnormalização deve ser uma decisão informada e documentada, aplicada após medir o impacto real de performance — nunca como ponto de partida do design.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Dependências Funcionais</h2>
        <p style={S.p}>
          Uma <strong>Dependência Funcional (DF)</strong> X → Y significa que o valor de X determina univocamente o valor de Y. São a base teórica de toda a normalização.
        </p>
        <p style={S.p}><strong>Axiomas de Armstrong</strong> — conjunto completo e correcto de regras de inferência:</p>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Axioma</th><th style={S.th}>Regra</th></tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Reflexividade</td><td style={S.td}>Se Y ⊆ X, então X → Y</td></tr>
            <tr><td style={S.td}>Aumentação</td><td style={S.td}>Se X → Y, então XZ → YZ</td></tr>
            <tr><td style={S.td}>Transitividade</td><td style={S.td}>Se X → Y e Y → Z, então X → Z</td></tr>
          </tbody>
        </table>
        <p style={S.p}>
          O <strong>fecho de X</strong> (X<sup>+</sup>) é o conjunto de todos os atributos que X determina funcionalmente. Para verificar se X é chave candidata, calcule X<sup>+</sup> e verifique se inclui todos os atributos da relação.
        </p>
        <p style={S.p}>
          A <strong>cobertura mínima</strong> (minimal cover) de um conjunto F de DFs é um conjunto equivalente F<sub>c</sub> sem DFs redundantes, com partes direitas singleton e partes esquerdas irredutíveis. É usada para sintetizar relações na 3NF.
        </p>
        <div style={S.code}>{`-- Exemplo: calcular fecho de {A} dado F = {A→B, B→C, A→D}
-- Início: {A}
-- A→B: adiciona B → {A,B}
-- B→C: adiciona C → {A,B,C}
-- A→D: adiciona D → {A,B,C,D}
-- Fecho de A: {A,B,C,D} — A é chave candidata se estes são todos os atributos`}</div>
      </div>


    </div>
  );
}
