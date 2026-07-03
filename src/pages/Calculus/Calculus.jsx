import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'calc1', num: '01', title: 'Limites & Continuidade',               subtitle: 'Definição de Limite, Continuidade e Regras de L\'Hôpital',           topics: ['Limite — definição ε-δ e intuição', 'Continuidade — tipos de descontinuidade', 'Regra de L\'Hôpital — indeterminações 0/0 e ∞/∞', 'Séries e convergência — relevância em ML'],           path: '/calculus/lecture1', color: '#f97316' },
  { id: 'calc2', num: '02', title: 'Derivadas & Diferenciação',            subtitle: 'Regras de Derivação, Interpretação Geométrica e Taxa de Variação',   topics: ['Definição de derivada — taxa de variação instantânea', 'Regras: produto, quociente, cadeia', 'Derivadas de funções comuns (exp, log, sin, cos)', 'Derivadas de activações — ReLU, sigmoid, tanh'],   path: '/calculus/lecture2', color: '#f97316' },
  { id: 'calc3', num: '03', title: 'Derivadas Parciais & Gradiente',       subtitle: 'Gradiente, Jacobiana e Interpretação em Optimização',                 topics: ['Derivada parcial — fixar todas menos uma variável', 'Gradiente ∇f — direcção de maior crescimento', 'Regras de notação: ∂f/∂x, ∇f, df', 'Gradient descent — mover contra o gradiente'],             path: '/calculus/lecture3', color: '#f97316' },
  { id: 'calc4', num: '04', title: 'Chain Rule & Backpropagation',         subtitle: 'Regra da Cadeia Multivariável, Grafos de Computação e Autograd',      topics: ['Chain rule — df/dx = df/du · du/dx', 'Chain rule para funções compostas multivariável', 'Grafos de computação — derivação automática', 'Backpropagation como aplicação da chain rule'],            path: '/calculus/lecture4', color: '#f97316' },
  { id: 'calc5', num: '05', title: 'Optimização — Mínimos e Máximos',     subtitle: 'Condições de 1ª e 2ª Ordem, Hessiana e Pontos de Sela',              topics: ['Condição de 1ª ordem: ∇f = 0', 'Hessiana — matriz de derivadas de 2ª ordem', 'Condição de 2ª ordem: definida positiva/negativa', 'Pontos de sela — problema em deep learning'],               path: '/calculus/lecture5', color: '#f97316' },
  { id: 'calc6', num: '06', title: 'Integrais & Probabilidade',            subtitle: 'Integral de Riemann, PDFs, CDFs e Valor Esperado',                   topics: ['Integral definido — área sob a curva', 'Teorema fundamental do cálculo', 'PDFs e CDFs — como se relacionam', 'Valor esperado E[X] e variância Var[X] como integrais'],                    path: '/calculus/lecture6', color: '#f97316' },
  { id: 'calc7', num: '07', title: 'Cálculo em Machine Learning',          subtitle: 'Gradient Descent, Adam, Regularização e Funções de Perda',           topics: ['Gradient descent — derivação matemática completa', 'Adam — momentos de 1ª e 2ª ordem como derivadas', 'L1 vs L2 — subgradientes e derivadas de normas', 'Cross-entropy e MSE — derivação das loss functions'],  path: '/calculus/lecture7', color: '#f97316' },
  { id: 'calc8', num: '08', title: 'Séries de Taylor & Aproximações',      subtitle: 'Expansões de Taylor, Raio de Convergência, Aproximações em ML',       topics: ['Série de Taylor — eˣ, sin, cos, log, sigmoid', 'Raio de convergência e resto de Lagrange', 'Aproximação quadrática — passo de Newton', 'GELU, log-sum-exp e perturbation analysis'],              path: '/calculus/lecture8', color: '#f97316' },
  { id: 'calc9', num: '09', title: 'Cálculo Vetorial',                      subtitle: 'Gradiente, Divergência, Rotacional, Laplaciano e Normalizing Flows',  topics: ['Operador nabla — gradiente, divergência, rotacional', 'Laplaciano e campos conservativos', 'Jacobiano em mudança de variáveis', 'Normalizing flows e cálculo em grafos (GNNs)'],              path: '/calculus/lecture9', color: '#f97316' },
  { id: 'calc10', num: '10', title: 'Equações Diferenciais Ordinárias',    subtitle: 'EDOs, Métodos Numéricos, Neural ODEs e Difusão',                      topics: ['EDOs separáveis, lineares e sistemas', 'Euler, RK4 e scipy.integrate.solve_ivp', 'ResNets como discretização de Euler — Neural ODEs', 'Adjoint method, SDEs e modelos de difusão'],            path: '/calculus/lecture10', color: '#f97316' },
  { id: 'calc11', num: '11', title: 'Transformada de Fourier',              subtitle: 'Série de Fourier, DFT, FFT, Wavelets e Fourier Neural Operators',     topics: ['Série de Fourier e fenómeno de Gibbs', 'DFT e FFT — O(N²) vs O(N log N)', 'Positional encodings e análise espectral', 'Wavelets e Fourier Neural Operators (FNO)'],                    path: '/calculus/lecture11', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function Calculus() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>CALCULUS FOR DATA SCIENCE</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Calculus for Data Science</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Limites, derivadas, gradientes, chain rule, optimização e integrais — o cálculo que está por baixo do gradient descent, backpropagation, funções de perda e probabilidade. Teoria com aplicação directa a ML.</p>
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
