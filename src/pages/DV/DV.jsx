import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const modules = [
  {
    id: 'dv1', num: '01',
    title: 'Princípios de Visualização',
    subtitle: 'Tufte, data-ink ratio, chart junk e os fundamentos da boa visualização',
    topics: ['Data-ink ratio — maximizar informação por pixel', 'Chart junk — o que remover', 'Lie factor e distorção de dados', 'Os 5 princípios de Tufte'],
    path: '/dv/lecture1', color: '#f97316',
  },
  {
    id: 'dv2', num: '02',
    title: 'Tipos de Gráficos',
    subtitle: 'Taxonomia completa — quando usar cada tipo e porque',
    topics: ['Comparação, distribuição, composição, relação', 'Bar, line, scatter, pie — regras de uso', 'Heatmap, boxplot, violin, histogram', 'Armadilhas comuns: pie charts, dual axes'],
    path: '/dv/lecture2', color: '#f97316',
  },
  {
    id: 'dv3', num: '03',
    title: 'Escalas, Cores e Percepção Visual',
    subtitle: 'Como o cérebro interpreta gráficos — e como tirar partido disso',
    topics: ['Escalas linear, logarítmica e divergente', 'Paletas: sequencial, divergente, qualitativa', 'Acessibilidade — daltonismo e contraste', 'Preattentive attributes — cor, forma, tamanho'],
    path: '/dv/lecture3', color: '#f97316',
  },
  {
    id: 'dv4', num: '04',
    title: 'Matplotlib & Seaborn',
    subtitle: 'Visualização estática em Python — do básico ao publicável',
    topics: ['Matplotlib: Figure, Axes, Artist model', 'Subplots, layouts e anotações', 'Seaborn: statistical plots com 1 linha', 'Temas, paletas e exportação'],
    path: '/dv/lecture4', color: '#f97316',
  },
  {
    id: 'dv5', num: '05',
    title: 'Plotly & Interactividade',
    subtitle: 'Gráficos interactivos, animações e dashboards com Dash',
    topics: ['Plotly Express vs Graph Objects', 'Interactividade: hover, zoom, filtros', 'Animações com frames e sliders', 'Dash: layouts, callbacks e deployment'],
    path: '/dv/lecture5', color: '#f97316',
  },
  {
    id: 'dv6', num: '06',
    title: 'Gramática dos Gráficos & Altair',
    subtitle: 'A teoria por detrás do ggplot e Vega-Altair',
    topics: ['Gramática dos gráficos — Wilkinson', 'Marks, channels e encodings', 'Altair: declarativo e conciso', 'Composição, faceting e interactividade'],
    path: '/dv/lecture6', color: '#f97316',
  },
  {
    id: 'dv7', num: '07',
    title: 'Visualização de ML',
    subtitle: 'SHAP, embeddings, métricas e diagnóstico de modelos',
    topics: ['Confusion matrix, ROC, PR curves', 'SHAP values — explicabilidade visual', 'Embeddings: t-SNE, UMAP', 'Validation curves, learning curves, residuals'],
    path: '/dv/lecture7', color: '#f97316',
  },
  {
    id: 'dv8', num: '08',
    title: 'Storytelling & Dashboards',
    subtitle: 'Narrativa com dados, audiência e boas práticas finais',
    topics: ['Estrutura narrativa: contexto → tensão → resolução', 'Audiência técnica vs. executiva', 'Design de dashboards — hierarquia visual', 'Checklist de boas práticas'],
    path: '/dv/lecture8', color: '#f97316',
  },
  {
    id: 'dv9', num: '09',
    title: 'Plataformas de BI & Visualização Enterprise',
    subtitle: 'Tableau, Power BI, Metabase, Superset, Grafana & Looker',
    topics: ['Tableau, Power BI & Looker — enterprise BI', 'Metabase, Superset & Grafana — open-source', 'Escolher a plataforma certa para cada contexto', 'Self-service analytics vs. observabilidade'],
    path: '/dv/lecture9', color: '#f97316',
  },
];

export default function DV() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>
        <ArrowLeft size={16} /> Voltar ao Dashboard
      </Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Data Visualization</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Dos princípios de Tufte às ferramentas modernas, da percepção visual ao storytelling com dados e à explicabilidade de modelos de ML.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {modules.map((lecture) => (
          <div key={lecture.id} onClick={() => navigate(lecture.path)}
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderLeft: `4px solid ${lecture.color}`, borderRadius: 12, padding: '1.25rem 1.5rem', cursor: 'pointer', transition: 'all 0.2s', display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: '1rem', alignItems: 'center' }}
            onMouseEnter={e => { e.currentTarget.style.background = `${lecture.color}10`; e.currentTarget.style.transform = 'translateX(4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.transform = ''; }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: lecture.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Módulo</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: lecture.color, lineHeight: 1 }}>{lecture.num}</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{lecture.title}</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>{lecture.subtitle}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {lecture.topics.map(topic => (
                  <span key={topic} style={{ background: `${lecture.color}12`, border: `1px solid ${lecture.color}30`, color: lecture.color, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 }}>{topic}</span>
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
  );
}
