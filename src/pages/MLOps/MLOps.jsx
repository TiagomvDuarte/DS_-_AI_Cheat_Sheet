import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const modules = [
  {
    id: 'mlops1', num: '01',
    title: 'Fundamentos de MLOps',
    subtitle: 'Por que falham os modelos em produção? MLOps = ML + DEV + OPS',
    topics: ['Porque falha o ML em produção', 'MLOps framework — 5 fases', 'Reprodutibilidade, modularidade, versionamento', 'Risk matrix & DevOps principles'],
    path: '/mlops/lecture1', color: '#f97316',
  },
  {
    id: 'mlops2', num: '02',
    title: 'Model Development & Validação de Dados',
    subtitle: 'Great Expectations, feature store e boas práticas de desenvolvimento',
    topics: ['Great Expectations — data validation', 'Feature store & engenharia de features', 'Unit tests para dados e modelos', 'Modularidade e reprodutibilidade'],
    path: '/mlops/lecture2', color: '#f97316',
  },
  {
    id: 'mlops3', num: '03',
    title: 'Produção & Deployment',
    subtitle: 'Pipeline de produção, ML artifacts e CI/CD para Machine Learning',
    topics: ['Pipeline de produção ML', 'ML artifacts — modelos, transformers, configs', 'CI/CD pipelines para ML', 'Testes de integração e regressão'],
    path: '/mlops/lecture3', color: '#f97316',
  },
  {
    id: 'mlops4', num: '04',
    title: 'Containerização & Model Serving',
    subtitle: 'Docker, APIs de inferência e estratégias de deployment',
    topics: ['Traditional vs VM vs Containers', 'Docker — images, containers, Dockerfile', 'REST APIs para serving (FastAPI, BentoML)', 'Blue-green, canary & shadow deployments'],
    path: '/mlops/lecture4', color: '#f97316',
  },
  {
    id: 'mlops5', num: '05',
    title: 'Model Monitoring & Feedback Loop',
    subtitle: 'Monitorização em produção, degradação e ciclo de retraining',
    topics: ['3 níveis de monitorização: recurso, performance, predições', 'Feedback loop — Model logs & Ground truth', 'Degradação temporal do modelo', 'Triggers de retraining'],
    path: '/mlops/lecture5', color: '#f97316',
  },
  {
    id: 'mlops6', num: '06',
    title: 'Data Drift & Concept Drift',
    subtitle: 'Tipos de drift, detecção e reacção a mudanças na distribuição dos dados',
    topics: ['Sudden, Gradual, Incremental & Recurring drift', 'Data drift / Covariate shift', 'Label drift & Concept drift', 'Algoritmos de detecção: ADWIN, DDM, KSWIN'],
    path: '/mlops/lecture6', color: '#f97316',
  },
  {
    id: 'mlops7', num: '07',
    title: 'Model Governance & Responsible AI',
    subtitle: 'GDPR, ética em IA, explicabilidade e framework de governance',
    topics: ['GDPR — princípios e obrigações', 'Responsible AI: Intentionality & Accountability', 'SHAP, LIME, PDP, EBM — XAI methods', 'Framework de governance — 8 passos'],
    path: '/mlops/lecture7', color: '#f97316',
  },
];

export default function MLOps() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>
          <ArrowLeft size={16} /> Voltar ao Dashboard
        </Link>

        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>MLOps</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>De ML proof-of-concept a sistema em produção. Desenvolvimento, deployment, monitorização de drift e governance de modelos de Machine Learning.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {modules.map((lecture) => (
            <div
              key={lecture.id}
              onClick={() => navigate(lecture.path)}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--card-border)',
                borderLeft: `4px solid ${lecture.color}`,
                borderRadius: 12,
                padding: '1.25rem 1.5rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'grid',
                gridTemplateColumns: '60px 1fr auto',
                gap: '1rem',
                alignItems: 'center',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = `${lecture.color}10`; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.transform = 'translateX(0)'; }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: lecture.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Módulo</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: lecture.color, lineHeight: 1 }}>{lecture.num}</div>
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{lecture.title}</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>{lecture.subtitle}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {lecture.topics.map(topic => (
                    <span key={topic} style={{
                      background: `${lecture.color}12`,
                      border: `1px solid ${lecture.color}30`,
                      color: lecture.color,
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.15rem 0.55rem',
                      borderRadius: 12,
                    }}>{topic}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: lecture.color, fontWeight: 700, fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
                Abrir <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
