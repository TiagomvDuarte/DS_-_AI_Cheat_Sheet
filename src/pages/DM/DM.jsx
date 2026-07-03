import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'dm2',  num: '01', title: 'Introdução ao Data Mining & Definição do Problema', subtitle: 'CRISP-DM, Tarefas Canónicas, Bias, Causalidade e Dimensionalidade',    topics: ['Data Science vs. Data Mining vs. ML', 'Tarefas canónicas: classificação, clustering, anomaly detection', 'CRISP-DM — 6 fases iterativas', 'Selection Bias, Confounders e Maldição da Dimensionalidade'], path: '/dm/lecture2',  color: '#f97316' },
  { id: 'dm5',  num: '02', title: 'Preparação de Dados & Feature Engineering',          subtitle: 'Missing Values, Outliers, Feature Selection, PCA introdução',           topics: ['MCAR/MAR/MNAR — estratégias de imputação', 'Outliers: z-score, IQR, capping', 'Feature Selection: Filter, Wrapper, Embedded', 'Feature Engineering e Normalização'], path: '/dm/lecture5',  color: '#f97316' },
  { id: 'dm7',  num: '03', title: 'Cluster Analysis — Introdução',                      subtitle: 'Medidas de Distância, Taxonomia de Algoritmos e Cohort Analysis',       topics: ['Clustering vs. Classification', 'Distância Euclidiana, Manhattan, Cosine, Jaccard', 'Taxonomia: partitional, hierarchical, density, model-based', 'Cohort Analysis e Migration Matrix'], path: '/dm/lecture7',  color: '#f97316' },
  { id: 'dm8',  num: '04', title: 'Hierarchical Clustering',                             subtitle: 'Linkage, Dendrograma, Cophenetic Distance e Exemplo Numérico',          topics: ['Single, Complete, Average, Ward linkage — fórmulas', 'Algoritmo aglomerativo (bottom-up) com exemplo numérico', 'Dendrograma — corte e escolha de k', 'Cophenetic distance e validação'], path: '/dm/lecture8',  color: '#f97316' },
  { id: 'dm9',  num: '05', title: 'k-Means, Variantes e GMM',                           subtitle: 'k-Means++, Elbow, Silhouette, Davies-Bouldin e Gaussian Mixture Models', topics: ['k-Means — algoritmo de Lloyd e visualização', 'k-Means++ e k-medoids', 'Elbow, Silhouette e Davies-Bouldin', 'GMM — EM algorithm, covariance types, BIC/AIC'], path: '/dm/lecture9',  color: '#f97316' },
  { id: 'dm10', num: '06', title: 'Clustering por Densidade, HDBSCAN e LOF',            subtitle: 'DBSCAN, HDBSCAN, Local Outlier Factor e Anomaly Detection',             topics: ['Core/border/noise points, vizinhança ε e MinPts', 'HDBSCAN — mutual reachability, condensed tree', 'LOF — k-distance, lrd e LOF score', 'Exemplo numérico passo-a-passo'], path: '/dm/lecture10', color: '#f97316' },
  { id: 'dm11', num: '07', title: 'Self-Organizing Maps (SOM)',                          subtitle: 'BMU, Atualização de Vizinhança, U-Matrix e Component Planes',           topics: ['SOM — BMU, atualização de pesos, vizinhança gaussiana', 'U-Matrix — fronteiras de clusters', 'Component Planes — interpretação por feature', 'SOM vs. k-Means vs. PCA'], path: '/dm/lecture11', color: '#f97316' },
  { id: 'dm16', num: '08', title: 'Association Rules: Apriori & FP-Growth',             subtitle: 'Support, Confidence, Lift, Algoritmo Apriori e FP-Growth',             topics: ['Support, Confidence, Lift — fórmulas e exemplo numérico', 'Propriedade anti-monotónica e poda de candidatos', 'Algoritmo Apriori — geração nível a nível', 'FP-Growth — FP-tree e mineração sem candidatos'], path: '/dm/lecture16', color: '#f97316' },
  { id: 'dm12', num: '09', title: 'Redução de Dimensionalidade — PCA, t-SNE e UMAP',    subtitle: 'Eigendecomposição, Scree Plot, Crowding Problem e Manifold Learning',    topics: ['PCA — eigendecomposição, loading scores, variância explicada', 'Exemplo numérico PCA em 2D', 't-SNE — KL divergence, perplexity, caveats', 'UMAP — n_neighbors, min_dist, comparação PCA/t-SNE/UMAP'], path: '/dm/lecture12', color: '#f97316' },
  { id: 'dm13', num: '10', title: 'LDA — Latent Dirichlet Allocation',                  subtitle: 'Topic Modelling, Dirichlet, Gibbs Sampling e Variational Inference',     topics: ['Modelo generativo — θ, φ, z, w com plate notation', 'Distribuição de Dirichlet — prior sobre simplexo', 'Inferência: Gibbs Sampling vs. Variational Inference', 'Escolha de K — perplexidade e coerência'], path: '/dm/lecture13', color: '#f97316' },
  { id: 'dm14', num: '11', title: 'ALS — Alternating Least Squares',                    subtitle: 'Collaborative Filtering, Matrix Factorization e Implicit Feedback',      topics: ['User-based vs. item-based collaborative filtering', 'Matrix factorization R ≈ UVᵀ — latent factors', 'ALS — ridge regression alternada, convergência', 'Implicit feedback, cold start e métricas de ranking'], path: '/dm/lecture14', color: '#f97316' },
  { id: 'dm15', num: '12', title: 'Isolation Forest e Deteção de Anomalias',            subtitle: 'Isolation Trees, Anomaly Score, Extended IF e Síntese do Curso',         topics: ['Anomaly detection — supervised vs. unsupervised vs. semi-supervised', 'Isolation Tree — path length e anomaly score s(x,n)', 'Extended Isolation Forest — hyperplane splits', 'Comparação: z-score, LOF, Isolation Forest'], path: '/dm/lecture15', color: '#f97316' },
];

const topicStyle = (c) => ({
  background: `${c}12`, border: `1px solid ${c}30`, color: c,
  fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12,
});

export default function DM() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>
        ← Dashboard
      </Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>DATA MINING</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Data Mining</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>De CRISP-DM e preparação de dados a clustering (k-Means, GMM, DBSCAN, HDBSCAN, LOF), dimensionality reduction (PCA, t-SNE, UMAP), topic modelling (LDA), recommender systems (ALS) e anomaly detection (Isolation Forest) — tratamento aprofundado com diagramas, fórmulas e exemplos numéricos.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {modules.map(m => (
          <div
            key={m.id}
            onClick={() => navigate(m.path)}
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderLeft: `4px solid ${m.color}`, borderRadius: 12, padding: '1.25rem 1.5rem', cursor: 'pointer', transition: 'all 0.2s', display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: '1rem', alignItems: 'center' }}
            onMouseEnter={e => { e.currentTarget.style.background = `${m.color}10`; e.currentTarget.style.transform = 'translateX(4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.transform = 'translateX(0)'; }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: m.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Módulo</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: m.color, lineHeight: 1 }}>{m.num}</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{m.title}</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>{m.subtitle}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {m.topics.map(t => <span key={t} style={topicStyle(m.color)}>{t}</span>)}
              </div>
            </div>
            <ArrowRight size={18} color={m.color} />
          </div>
        ))}
      </div>
    </div>
  );
}
