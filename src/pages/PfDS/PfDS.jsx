import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'pfds1',  num: '01', title: 'Python Foundations',                    subtitle: 'Por que Python, IPython, Shell e Como Funcionam os Computadores',   topics: ['Por que Python para Data Science', 'Interpretador vs compilador', 'IPython — REPL interactivo', 'Shell básico: navegação, pipes, scripts'],                                                             path: '/pfds/lecture1',  color: '#4a9eed' },
  { id: 'pfds2',  num: '02', title: 'Python Data Structures & Control Flow', subtitle: 'Tipos, Operadores, Loops, Comprehensions e Slices',                  topics: ['int, float, str, bool, None — tipos básicos', 'list, dict, tuple, set — estruturas', 'if/elif/else, for, while, break, continue', 'Comprehensions e slicing [i:j:k]'],                                path: '/pfds/lecture2',  color: '#4a9eed' },
  { id: 'pfds3',  num: '03', title: 'Functions, Modules & Namespace',        subtitle: 'Definição, Scope, Import e Python Standard Library',                 topics: ['def, return, *args, **kwargs', 'Scope — LEGB rule (Local, Enclosing, Global, Built-in)', 'import, from, as — módulos e packages', 'Python STL: os, sys, re, datetime, collections'],               path: '/pfds/lecture3',  color: '#4a9eed' },
  { id: 'pfds10', num: '04', title: 'Python Avançado',       subtitle: 'Generators, Type Hints, Error Handling e Packaging',                topics: ['Generators e iterators — yield, lazy evaluation', 'Type hints — mypy, Protocol, TypeVar', 'try/except/finally — error handling robusto', 'Packaging — pyproject.toml, virtual envs, pip'],              path: '/pfds/lecture10', color: '#4a9eed' },
  { id: 'pfds4',  num: '05', title: 'OOP — Programação Orientada a Objectos', subtitle: 'Classes, Herança, Encapsulamento e Polimorfismo',                   topics: ['class, __init__, self — estrutura básica', 'Herança e override de métodos', 'Encapsulamento — _private, __dunder', 'Polimorfismo, ABCs e duck typing'],                                             path: '/pfds/lecture4',  color: '#4a9eed' },
  { id: 'pfds5',  num: '06', title: 'Functional Programming',                subtitle: 'Lambda, Map, Filter, Reduce, Closures e Decorators',                 topics: ['Funções como first-class objects', 'lambda, map(), filter(), reduce()', 'Closures — capturar variáveis do scope exterior', 'Decorators — @wrapper, @functools.lru_cache'],                          path: '/pfds/lecture5',  color: '#4a9eed' },
  { id: 'pfds6',  num: '07', title: 'Pandas para Data Science',              subtitle: 'DataFrames, Series, Indexação, Merge e GroupBy',                    topics: ['DataFrame e Series — estruturas fundamentais', 'Indexação: .loc, .iloc, boolean indexing', 'merge, join, concat — combinação de dados', 'groupby, agg, pivot_table — análise agregada'],               path: '/pfds/lecture6',  color: '#4a9eed' },
  { id: 'pfds7',  num: '08', title: 'NumPy & SciPy',                         subtitle: 'Arrays, Vectorização, Broadcasting e Computação Científica',        topics: ['ndarray — criação e operações básicas', 'Indexing, slicing e reshaping', 'Vectorização e broadcasting — operações sem loops', 'SciPy — stats, signal, optimize, linalg'],                              path: '/pfds/lecture7',  color: '#4a9eed' },
  { id: 'pfds11', num: '09', title: 'Git & Version Control',                  subtitle: 'Branches, Merges, Remotes, GitHub Workflow e Git para Data Science', topics: ['Three-tree architecture: Working Dir, Staging, Repo', 'Branches, merge vs rebase, resolução de conflitos', 'GitHub: Pull Requests, code review, GitFlow', 'Git para DS: .gitignore, DVC, commits atómicos'],        path: '/pfds/lecture11', color: '#4a9eed' },
  { id: 'pfds12', num: '10', title: 'APIs, Web Scraping & Data Acquisition',  subtitle: 'requests, BeautifulSoup, Scrapy, Selenium e Pipelines de Dados',   topics: ['HTTP/REST: métodos, status codes, headers', 'requests: GET/POST, autenticação, rate limiting', 'BeautifulSoup, Scrapy e Selenium para scraping', 'Paginação, armazenamento e pipelines de dados'],          path: '/pfds/lecture12', color: '#4a9eed' },
  { id: 'pfds13', num: '11', title: 'FastAPI — APIs para Data Science',       subtitle: 'REST APIs com Python, validação Pydantic, autenticação JWT e deploy', topics: ['Path/Query params, Pydantic models', 'Async endpoints e background tasks', 'JWT Authentication e segurança', 'Docker + deploy na cloud'],                                                                   path: '/pfds/lecture13', color: '#4a9eed' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function PfDS() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#4a9eed', border: '1.5px solid #4a9eed', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>PROGRAMMING</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Programming</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Python do zero ao avançado — estruturas de dados, OOP, programação funcional, Pandas, NumPy e SciPy. Mais boas práticas de engenharia de software.</p>
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
