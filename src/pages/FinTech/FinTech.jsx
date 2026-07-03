import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'FT1', num: '01', title: 'FinTech Landscape', subtitle: 'Pagamentos, lending, insurtech e regulamentação PSD2/MiFID', topics: ['Pagamentos', 'Lending', 'Insurtech', 'PSD2 / MiFID'], path: '/fintech/lecture1', color: '#f97316' },
  { id: 'FT2', num: '02', title: 'Algorithmic Trading', subtitle: 'Market microstructure, estratégias quant e backtesting', topics: ['Market Microstructure', 'Estratégias Quant', 'Backtesting', 'Execução'], path: '/fintech/lecture2', color: '#f97316' },
  { id: 'FT3', num: '03', title: 'Credit Scoring & Risk', subtitle: 'Modelos de risco, scorecard, stress testing e Basel III', topics: ['Scorecard', 'Stress Testing', 'Basel III', 'PD / LGD'], path: '/fintech/lecture3', color: '#f97316' },
  { id: 'FT4', num: '04', title: 'NLP em Finanças', subtitle: 'Sentiment de notícias, earnings calls e FinBERT', topics: ['Sentiment Analysis', 'Earnings Calls', 'SEC Filings', 'FinBERT'], path: '/fintech/lecture4', color: '#f97316' },
  { id: 'FT5', num: '05', title: 'Compliance & AML', subtitle: 'Transaction monitoring, KYC, AML e GDPR financeiro', topics: ['Transaction Monitoring', 'KYC', 'AML', 'GDPR Financeiro'], path: '/fintech/lecture5', color: '#f97316' },
  { id: 'FT6', num: '06', title: 'DeFi & Blockchain', subtitle: 'Smart contracts, AMM, tokenização de ativos e CBDC', topics: ['Smart Contracts', 'AMM / DeFi', 'Tokenização', 'CBDC'], path: '/fintech/lecture6', color: '#f97316' },
  { id: 'FT7', num: '07', title: 'WealthTech & Portfolio', subtitle: 'Markowitz, Black-Litterman, robo-advisors e factor investing', topics: ['Markowitz MVO', 'Black-Litterman', 'Robo-Advisors', 'Factor Investing'], path: '/fintech/lecture7', color: '#f97316' },
  { id: 'FT8', num: '08', title: 'Derivados & Risk Management', subtitle: 'Black-Scholes, Greeks, VaR/CVaR Monte Carlo e FRTB Basel IV', topics: ['Black-Scholes', 'Greeks', 'VaR / CVaR', 'FRTB Basel IV'], path: '/fintech/lecture8', color: '#f97316' },
  { id: 'FT9', num: '09', title: 'Fraud Detection em Tempo Real', subtitle: 'Class imbalance, SMOTE, feature stores e sistemas de decisão RT', topics: ['SMOTE / Imbalance', 'Feature Stores', 'Streaming ML', 'Concept Drift'], path: '/fintech/lecture9', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function FinTech() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>FINTECH & FINANCE</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>FinTech & Finance</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Explora a intersecção entre finanças, tecnologia e inteligência artificial no ecossistema FinTech actual. Do algorithmic trading ao compliance regulatório, aprende a construir soluções financeiras inteligentes e conformes.</p>
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
