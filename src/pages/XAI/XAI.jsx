import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'xai1', num: '01', title: 'Introdução ao XAI',                   subtitle: 'Black Box vs. White Box, Taxonomia e Necessidade de Explicabilidade',  topics: ['Black box vs. white box models', 'Ante-hoc vs. post-hoc explainability', 'Local vs. global explanations', 'Model-agnostic vs. model-specific methods'], path: '/xai/lecture1', color: '#4a9eed' },
  { id: 'xai2', num: '02', title: 'Feature Importance Global',            subtitle: 'Permutation Importance, MDI e Partial Dependence Plots',                topics: ['Permutation Feature Importance', 'Mean Decrease in Impurity (MDI)', 'Partial Dependence Plots (PDP)', 'Individual Conditional Expectation (ICE)'], path: '/xai/lecture2', color: '#4a9eed' },
  { id: 'xai3', num: '03', title: 'LIME',                                 subtitle: 'Local Interpretable Model-agnostic Explanations',                       topics: ['Perturbação local de instâncias', 'Modelo substituto linear local', 'Fidelidade vs. interpretabilidade', 'LIME para texto, imagem e tabular'], path: '/xai/lecture3', color: '#4a9eed' },
  { id: 'xai4', num: '04', title: 'SHAP',                                 subtitle: 'Shapley Values, TreeSHAP, DeepSHAP e Visualizações',                   topics: ['Shapley values — teoria dos jogos', 'SHAP = Shapley Additive exPlanations', 'TreeSHAP (eficiente) e DeepSHAP', 'Force plots, summary plots, waterfall'], path: '/xai/lecture4', color: '#4a9eed' },
  { id: 'xai5', num: '05', title: 'Métodos Visuais & Model-Specific',      subtitle: 'Grad-CAM, Saliency Maps, Attention e TCAV',                           topics: ['Grad-CAM e Score-CAM para CNNs', 'Saliency maps e Integrated Gradients', 'Attention weights em Transformers', 'TCAV — explicações por conceitos'], path: '/xai/lecture5', color: '#4a9eed' },
  { id: 'xai6', num: '06', title: 'Responsible AI',                       subtitle: 'Fairness, Bias, EU AI Act e XAI em Produção',                           topics: ['Métricas de fairness (demographic parity, equalized odds)', 'Bias: fontes e deteção', 'EU AI Act — obrigações de transparência', 'XAI em produção: challenges e boas práticas'], path: '/xai/lecture6', color: '#4a9eed' },
  { id: 'xai7', num: '07', title: 'Counterfactuals & Algorithmic Recourse', subtitle: 'DiCE, FACE, Influence Functions e Explicações Accionáveis',            topics: ['Counterfactual explanations — o mínimo a mudar', 'DiCE — Diverse Counterfactual Explanations', 'Influence functions — atribuição aos dados de treino', 'Algorithmic recourse e accionabilidade'], path: '/xai/lecture7', color: '#4a9eed' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function XAI() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#4a9eed', border: '1.5px solid #4a9eed', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>EXPLAINABLE AI</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Explainable AI</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>De black boxes a modelos interpretáveis — LIME, SHAP, feature importance global e métodos model-specific para explicar qualquer modelo de ML, com aplicações em responsible AI e regulação.</p>
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
