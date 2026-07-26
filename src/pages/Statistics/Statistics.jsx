import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'st1',  num: '01', title: 'Estatística Descritiva & Visualização',      subtitle: 'Tipos de Variáveis, Medidas de Tendência Central, Dispersão e Gráficos', topics: ['Variáveis categóricas vs. quantitativas', 'Média, mediana, moda, variância, desvio padrão', 'Quartis, IQR, box plots, histogramas', 'Correlação de Pearson e Spearman'], path: '/statistics/lecture1',  color: '#4a9eed' },
  { id: 'st2',  num: '02', title: 'Distribuições Discretas',                     subtitle: 'PMF, CDF, Bernoulli, Binomial e Poisson',                                topics: ['PMF e CDF — definição e relação', 'Distribuição de Bernoulli e Binomial', 'Distribuição de Poisson', 'Função geradora de probabilidade'], path: '/statistics/lecture2',  color: '#4a9eed' },
  { id: 'st3',  num: '03', title: 'Distribuições Contínuas',                     subtitle: 'Normal, Chi-Quadrado, t-Student, F e Teorema do Limite Central',         topics: ['Distribuição Normal e Normal Padrão', 'Teorema do Limite Central', 'Chi-Quadrado, t-Student, F', 'Quantis, P-values e QQ-plots'], path: '/statistics/lecture3',  color: '#4a9eed' },
  { id: 'st4',  num: '04', title: 'Estimação Pontual & Intervalos de Confiança', subtitle: 'MLE, Método dos Momentos, Cramér-Rao e Bootstrap',                       topics: ['Método dos Momentos e MLE', 'Viés, Variância, MSE e Consistência', 'Bound de Cramér-Rao', 'Intervalos de confiança e Bootstrap'], path: '/statistics/lecture4',  color: '#4a9eed' },
  { id: 'st5',  num: '05', title: 'Testes de Hipóteses',                         subtitle: 'Procedimento Geral, Erros Tipo I/II, Potência e Testes Paramétricos',    topics: ['H₀ vs. H₁ — formulação e lógica', 'p-value, região crítica, nível α', 'Erros Tipo I e II — trade-off e potência', 'Testes t, z, qui-quadrado, ANOVA'], path: '/statistics/lecture5',  color: '#4a9eed' },
  { id: 'st6',  num: '06', title: 'Regressão Linear Simples & Múltipla',         subtitle: 'OLS, R², Assunções CLRM e Diagnóstico',                                  topics: ['OLS — derivação e geometria', 'R² e decomposição da variância (SST=SSR+SSE)', 'Assunções CLRM — violações e consequências', 'Análise de resíduos e gráficos de diagnóstico'], path: '/statistics/lecture6',  color: '#4a9eed' },
  { id: 'st7',  num: '07', title: 'Inferência em Regressão',                     subtitle: 'Testes t e F, Intervalos de Previsão e Combinações Lineares',            topics: ['Teste t para coeficientes individuais', 'Teste F para restrições conjuntas', 'Intervalos de confiança e previsão', 'Combinações lineares e teste de Wald'], path: '/statistics/lecture7',  color: '#4a9eed' },
  { id: 'st8',  num: '08', title: 'Problemas de Especificação & Modelos Alternativos', subtitle: 'Heteroskedasticidade, Multicolinearidade, Variáveis Dummy e RESET',      topics: ['Heteroskedasticidade — Breusch-Pagan e White', 'Multicolinearidade — VIF e consequências', 'Variáveis dummy e efeitos de interação', 'Teste RESET e especificação funcional'], path: '/statistics/lecture8',  color: '#4a9eed' },
  { id: 'st9',  num: '09', title: 'Panel Data',                                  subtitle: 'Pooled OLS, Fixed Effects, Random Effects e Teste de Hausman',           topics: ['Motivação e vantagens dos dados em painel', 'Fixed Effects — transformação within', 'Random Effects — GLS e assunções', 'Teste de Hausman — FE vs. RE'], path: '/statistics/lecture9',  color: '#4a9eed' },
  { id: 'st10', num: '10', title: 'Inferência Causal',                           subtitle: 'Potential Outcomes, DAGs, IV e Difference-in-Differences',              topics: ['Potential Outcomes Framework (Rubin)', 'DAGs — d-separation e backdoor criterion', 'Variáveis Instrumentais (IV / 2SLS)', 'Difference-in-Differences e Regression Discontinuity'], path: '/statistics/lecture10', color: '#4a9eed' },
  { id: 'st11', num: '11', title: 'Séries Temporais — Fundamentos & ARMA',       subtitle: 'Componentes, Estacionariedade, ACF/PACF, Processos AR/MA/ARMA e Raiz Unitária', topics: ['Tendência, sazonalidade, ciclo e ruído', 'ACF e PACF — identificação da ordem', 'Processos AR(p), MA(q) e ARMA(p,q)', 'Testes ADF, KPSS e Ljung-Box'], path: '/statistics/lecture11', color: '#4a9eed' },
  { id: 'st12', num: '12', title: 'Modelos ARIMA, SARIMA & Suavização',         subtitle: 'Integração, Sazonalidade, Box-Jenkins, Decomposição e Holt-Winters',    topics: ['Diferenciação e integração I(d)', 'SARIMA(p,d,q)(P,D,Q)m e Metodologia Box-Jenkins', 'Decomposição STL e ETS', 'Suavização exponencial simples, dupla e tripla'], path: '/statistics/lecture12', color: '#4a9eed' },
  { id: 'st13', num: '13', title: 'Modelos de Volatilidade',                     subtitle: 'ARCH, GARCH, EGARCH e Cluster de Volatilidade',                          topics: ['Efeito de cluster de volatilidade', 'Processo ARCH(q) e teste de Engle', 'Modelo GARCH(p,q) — estimação e previsão', 'EGARCH e GJR-GARCH — assimetria'], path: '/statistics/lecture13', color: '#4a9eed' },
  { id: 'st14', num: '14', title: 'Estatística Bayesiana',                       subtitle: 'Teorema de Bayes, Priori/Posteriori, MCMC e PyMC',                         topics: ['Frequentista vs Bayesiano — filosofia e prática', 'Prior, Likelihood, Posterior — Teorema de Bayes', 'MCMC — Metropolis-Hastings e Gibbs sampling', 'PyMC, modelos hierárquicos e workflow Bayesiano'], path: '/statistics/lecture14', color: '#4a9eed' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function Statistics() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#4a9eed', border: '1.5px solid #4a9eed', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>STATISTICS</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Statistics</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>De estatística descritiva a inferência causal, e de distribuições clássicas a séries temporais com modelos GARCH e Transformers — fundamentos estatísticos completos para Data Science.</p>
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
