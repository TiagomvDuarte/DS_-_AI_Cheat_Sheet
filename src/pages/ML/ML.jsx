import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'ml1',  num: '01', title: 'Introdução ao Machine Learning',          subtitle: 'Novo Paradigma, Representação, Avaliação & Otimização',                    topics: ['Dados + Resultado → Programa', '3 componentes: Representação, Avaliação, Otimização', 'Tipos: Supervised, Unsupervised, Semi-supervised, RL', 'Hypothesis space, version space, target function'], path: '/ml/lecture1',  color: '#4a9eed' },
  { id: 'ml2',  num: '02', title: 'As 5 Tribos de Machine Learning',         subtitle: 'Simbolistas, Conexionistas, Evolucionários, Bayesianos, Analogizadores',   topics: ['Simbolistas: Decision Trees, dedução inversa', 'Conexionistas: Backprop, MLP, Deep Learning', 'Evolucionários: GAs, Genetic Programming', 'Bayesianos & Analogizadores: NB, SVM, kNN'], path: '/ml/lecture2',  color: '#4a9eed' },
  { id: 'ml3',  num: '03', title: 'Seleção de Features',                     subtitle: 'Filter, Wrapper e Embedded Methods',                                        topics: ['Pearson, Spearman & Kendall correlations', 'ANOVA e Teste Qui-Quadrado', 'Informação Mútua', 'Wrapper & Embedded (LASSO, Ridge, Elastic Net)'], path: '/ml/lecture3',  color: '#4a9eed' },
  { id: 'ml5',  num: '04', title: 'Seleção e Validação de Modelos',            subtitle: 'Overfitting, Cross-Validation & Métricas',                                  topics: ['No Free Lunch Theorem, Overfitting', 'Hold-out, K-Fold CV, LOOCV', 'Confusion Matrix: Accuracy, Precision, Recall, F1', 'ROC Curve, AUC, MAE, MSE, RMSE, R²'], path: '/ml/lecture5',  color: '#4a9eed' },
  { id: 'ml4',  num: '05', title: 'Regressão Linear & Logística',            subtitle: 'OLS, R², Significância Estatística e Logit',                                topics: ['Regressão Linear Simples & Múltipla — OLS', 'SST = SSR + SSE, R² e R² Ajustado', 'Erro Padrão, t-student e p-value', 'Regressão Logística: função sigmoide e odds ratio'], path: '/ml/lecture4',  color: '#4a9eed' },
  { id: 'ml6',  num: '06', title: 'Modelos Bayesianos',         subtitle: 'Teorema de Bayes, Naive Bayes & Redes Bayesianas',                          topics: ['Teorema de Bayes — derivação passo a passo', 'Naive Bayes: assunção de independência condicional', 'Problema de frequência zero — Estimador de Laplace', 'Bayesian Belief Networks (DAG, CPTs)'], path: '/ml/lecture6',  color: '#4a9eed' },
  { id: 'ml7',  num: '07', title: 'K-Nearest Neighbors & Aprendizagem Baseada em Instâncias',                     subtitle: 'Lazy Learning, K-Nearest Neighbors & K-d Trees',                          topics: ['Lazy learning — conhecimento nas instâncias', 'Distâncias: Euclidiana, Manhattan, Minkowski', 'KNN: escolha de k, ponderação por distância', 'K-d Tree, similaridade Cosseno, Jaccard'], path: '/ml/lecture7',  color: '#4a9eed' },
  { id: 'ml8',  num: '08', title: 'Redes Neuronais & Perceptron',            subtitle: 'História, Neurónios Artificiais & Funções de Ativação',                    topics: ['História: 1957 Perceptron → 1986 Backprop → 2017 AlphaGo', 'Neurónio artificial: pesos, bias, agregação, ativação', 'Funções: Step, Sigmoid, Tanh, ReLU, Softmax', 'Perceptron: AND, OR mas não XOR — separabilidade linear'], path: '/ml/lecture8',  color: '#4a9eed' },
  { id: 'ml9',  num: '09', title: 'Árvores de Decisão',                      subtitle: 'ID3, C4.5, CART, Ganho de Informação & Poda',                              topics: ['Algoritmo DDT — construção top-down greedy', 'Entropia & Ganho de Informação (ID3)', 'Índice de Gini (CART), Chi-Quadrado (CHAID)', 'Poda: Pré-poda vs Pós-poda'], path: '/ml/lecture9',  color: '#4a9eed' },
  { id: 'ml11', num: '10', title: 'Support Vector Machines',                 subtitle: 'Hiperplanos, Margem Máxima, Soft Margin & Kernel Trick',                   topics: ['Hiperplano separador — "widest street" approach', 'Support vectors, margem = 2/||w||, Lagrangianos', 'Soft Margin: parâmetro C (tradeoff accuracy vs. margin)', 'Kernel Trick: Polinomial, RBF (Gaussiano), Sigmoide'], path: '/ml/lecture11', color: '#4a9eed' },
  { id: 'ml10', num: '11', title: 'Ensemble Learning',                       subtitle: 'Bagging, Boosting, Random Forests & Stacking',                              topics: ['Bias-Variância: Bagging↓variância, Boosting↓viés', 'Bootstrapping & Bagging — Breiman 1994', 'AdaBoost, Gradient Boosting, XGBoost', 'Random Forests, Stacking & meta-classificadores'], path: '/ml/lecture10', color: '#4a9eed' },
];

const topicStyle = (c) => ({
  background: `${c}12`, border: `1px solid ${c}30`, color: c,
  fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12,
});

export default function ML() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>
        ← Dashboard
      </Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#4a9eed', border: '1.5px solid #4a9eed', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>SUPERVISED LEARNING</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Supervised Learning</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>De regressão linear a SVMs, redes neuronais e ensembles — os fundamentos matemáticos e algoritmos essenciais de ML, com exemplos detalhados e visualizações interativas.</p>
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
