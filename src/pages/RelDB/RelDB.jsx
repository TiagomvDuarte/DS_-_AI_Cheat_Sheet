import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'rdb1', num: '01', title: 'Introdução e Normalização',              subtitle: 'DBMS, Modelo Relacional, Dependências Funcionais e Formas Normais',  topics: ['O que é uma Base de Dados e DBMS', 'Modelo relacional — tabelas, tuplos, atributos', 'Dependências funcionais (1NF, 2NF, 3NF, BCNF)', 'Decomposição sem perda e preservação de dependências'], path: '/reldb/lecture1', color: '#f97316' },
  { id: 'rdb2', num: '02', title: 'Arquitectura DBMS e Modelo ER',          subtitle: 'Componentes do DBMS, Entidades, Relações e Diagramas ER',           topics: ['Connection Manager, Query Parser, Optimizer', 'DDL e DML Compilers', 'Entidades, atributos e relações', 'Cardinalidade: 1:1, 1:N, M:N e participação'], path: '/reldb/lecture2', color: '#f97316' },
  { id: 'rdb3', num: '03', title: 'SQL — Fundamentos',                          subtitle: 'DDL, CREATE TABLE, Tipos de Dados, Constraints e SELECT Básico',     topics: ['CREATE/DROP DATABASE e TABLE', 'Tipos de dados: INT, VARCHAR, DATE, FLOAT', 'PRIMARY KEY, FOREIGN KEY, NOT NULL, DEFAULT', 'SELECT, WHERE, ORDER BY, LIMIT'], path: '/reldb/lecture3', color: '#f97316' },
  { id: 'rdb4', num: '04', title: 'SQL — Análise e Optimização',                          subtitle: 'CRUD Completo, JOINs, Subqueries e GROUP BY',                        topics: ['INSERT, UPDATE, DELETE — sintaxe e cuidados', 'INNER JOIN, LEFT/RIGHT JOIN, FULL JOIN', 'Subqueries correlacionadas e não correlacionadas', 'GROUP BY, HAVING, funções de janela (OVER, PARTITION BY)'], path: '/reldb/lecture4', color: '#f97316' },
  { id: 'rdb5', num: '05', title: 'Funções Agregadas, Views e Triggers',    subtitle: 'AVG/COUNT/SUM, GROUP BY/HAVING, Views e Automação',                 topics: ['AVG, MAX, MIN, COUNT, SUM, STDEV', 'GROUP BY e filtragem com HAVING', 'CREATE VIEW — views simples e complexas', 'BEFORE/AFTER TRIGGERS — automação de lógica de negócio'], path: '/reldb/lecture5', color: '#f97316' },
  { id: 'rdb6', num: '06', title: 'Otimização de Queries',                  subtitle: 'EXPLAIN, Planos de Execução, Índices e Query Tuning',                topics: ['Query Execution Plan (QEP) e EXPLAIN', 'B-Tree, Hash e Covering Index', 'Quando e como criar índices', 'Reescrita de queries — optimização manual'], path: '/reldb/lecture6', color: '#f97316' },
  { id: 'rdb7', num: '07', title: 'ACID, Transações e NoSQL',               subtitle: 'Propriedades ACID, Níveis de Isolamento e CAP Theorem',              topics: ['BEGIN, COMMIT, ROLLBACK e SAVEPOINT', 'ACID: Atomicidade, Consistência, Isolamento, Durabilidade', 'Níveis de isolamento: Read Uncommitted → Serializable', 'CAP Theorem — transição para NoSQL'], path: '/reldb/lecture7', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function RelDB() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>RELATIONAL DATABASES</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Relational Databases</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Do modelo relacional e normalização à optimização de queries — SQL completo, arquitectura DBMS, transações ACID, índices e a transição para NoSQL com o teorema CAP.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {modules.map(m => (
          <div key={m.id} onClick={() => navigate(m.path)}
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderLeft: `4px solid ${m.color}`, borderRadius: 12, padding: '1.25rem 1.5rem', cursor: 'pointer', transition: 'all 0.2s', display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: '1rem', alignItems: 'center' }}
            onMouseEnter={e => { e.currentTarget.style.background = `${m.color}10`; e.currentTarget.style.transform = 'translateX(4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.transform = 'translateX(0)'; }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: m.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Módulo</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: m.color, lineHeight: 1 }}>{m.num}</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{m.title}</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>{m.subtitle}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>{m.topics.map(t => <span key={t} style={topicStyle(m.color)}>{t}</span>)}</div>
            </div>
            <ArrowRight size={18} color={m.color} />
          </div>
        ))}
      </div>
    </div>
  );
}
