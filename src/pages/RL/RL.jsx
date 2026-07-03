import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'rl1', num: '01', title: 'Introdução ao Reinforcement Learning',   subtitle: 'Reward Hypothesis, Agente, Ambiente e Componentes',             topics: ['RL vs. Supervised vs. Unsupervised', 'Reward signal e cumulative reward', 'Policy, value function e model', 'Exploração vs. Exploração'], path: '/rl/lecture1', color: '#f97316' },
  { id: 'rl2', num: '02', title: 'MDPs e Value-Based RL Tabular',          subtitle: 'Markov Decision Processes, Equações de Bellman',                topics: ['Markov Property e MDP formal', 'Equações de Bellman para V e Q', 'State value function V(s) e Q(s,a)', 'Policy evaluation e Bellman optimality'], path: '/rl/lecture2', color: '#f97316' },
  { id: 'rl3', num: '03', title: 'Programação Dinâmica',                   subtitle: 'Value Iteration, Policy Iteration e Policy Improvement',        topics: ['Prediction (policy evaluation)', 'Value Iteration — garantia de convergência', 'Policy Iteration — policy improvement theorem', 'Limitações: requer modelo completo do ambiente'], path: '/rl/lecture3', color: '#f97316' },
  { id: 'rl4', num: '04', title: 'Métodos Model-Free',                     subtitle: 'Monte Carlo, TD Learning, SARSA e Q-Learning',                  topics: ['Monte Carlo: first-visit vs every-visit', 'Temporal Difference (TD) — bootstrapping', 'SARSA — on-policy control', 'Q-Learning — off-policy, convergência garantida'], path: '/rl/lecture4', color: '#f97316' },
  { id: 'rl5', num: '05', title: 'Model-Free Control',                     subtitle: 'ε-Greedy, GLIE, On/Off Policy e Double Q-Learning',             topics: ['ε-greedy e GLIE — exploração decrescente', 'On-policy vs off-policy learning', 'Q-Learning overestimation bias', 'Double Q-Learning — solução ao overestimation'], path: '/rl/lecture5', color: '#f97316' },
  { id: 'rl6', num: '06', title: 'Value Function Approximation',           subtitle: 'Deep RL, DQN, Experience Replay e Target Networks',            topics: ['De tabular a aproximação de funções', 'Redes neuronais como aproximadores', 'DQN — Deep Q-Network (DeepMind 2015)', 'Experience replay e target networks'], path: '/rl/lecture6', color: '#f97316' },
  { id: 'rl7', num: '07', title: 'Policy-Based RL',                        subtitle: 'Policy Gradient, REINFORCE e Actor-Critic',                     topics: ['Value-based vs policy-based vs actor-critic', 'Policy gradient theorem', 'REINFORCE — Monte Carlo policy gradient', 'Actor-Critic — redução de variância com baseline'], path: '/rl/lecture7', color: '#f97316' },
  { id: 'rl8', num: '08', title: 'Model-Based RL & Controlo Contínuo',     subtitle: 'Dyna-Q, World Models, DDPG, TD3 e SAC',                         topics: ['Model-Based vs Model-Free — tradeoffs', 'Dyna-Q — planning com modelo simulado', 'DDPG, TD3 — actor-critic determinístico', 'SAC — entropia máxima e exploração automática'], path: '/rl/lecture8', color: '#f97316' },
];

const topicStyle = (c) => ({
  background: `${c}12`, border: `1px solid ${c}30`, color: c,
  fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12,
});

export default function RL() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>
        ← Dashboard
      </Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>REINFORCEMENT LEARNING</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Reinforcement Learning</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>De MDPs e equações de Bellman a Deep Q-Networks e Policy Gradient — os fundamentos matemáticos e algoritmos de RL, da programação dinâmica ao aprendizado por reforço profundo.</p>
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
