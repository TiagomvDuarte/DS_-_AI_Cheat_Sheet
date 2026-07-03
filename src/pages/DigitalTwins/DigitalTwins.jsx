import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'DT1', num: '01', title: 'O que são Digital Twins', subtitle: 'Conceito, história e casos de uso industriais', topics: ['Conceito', 'História', 'Manufatura', 'Cidades & Saúde'], path: '/digital-twins/lecture1', color: '#f97316' },
  { id: 'DT2', num: '02', title: 'Arquitectura & IoT', subtitle: 'Sensores, telemetria e sincronização real-time', topics: ['Sensores', 'Telemetria', 'Sincronização RT', 'Azure DT / AWS IoT'], path: '/digital-twins/lecture2', color: '#f97316' },
  { id: 'DT3', num: '03', title: 'Modelação & Simulação', subtitle: 'Modelos físicos e baseados em ML com co-simulação', topics: ['Physics-based Models', 'ML-based Models', 'Co-simulation', 'Validação'], path: '/digital-twins/lecture3', color: '#f97316' },
  { id: 'DT4', num: '04', title: 'Digital Twins em Manufatura', subtitle: 'Manutenção preditiva, PLM e sistemas SCADA', topics: ['Predictive Maintenance', 'PLM', 'SCADA', 'OEE'], path: '/digital-twins/lecture4', color: '#f97316' },
  { id: 'DT5', num: '05', title: 'Plataformas & Ferramentas', subtitle: 'Azure DT, AWS IoT TwinMaker, NVIDIA Omniverse e Eclipse Ditto', topics: ['Azure DT', 'AWS TwinMaker', 'NVIDIA Omniverse', 'Eclipse Ditto'], path: '/digital-twins/lecture5', color: '#f97316' },
  { id: 'DT6', num: '06', title: 'Digital Twins em Cidades & Energia', subtitle: 'City DTs, redes eléctricas, edifícios e infraestrutura urbana', topics: ['City Digital Twin', 'Energia & Grid', 'BEM', 'Wind Farm DT'], path: '/digital-twins/lecture6', color: '#f97316' },
  { id: 'DT7', num: '07', title: 'Digital Twins em Saúde', subtitle: 'Patient DT, organ simulation, hospital DT e descoberta de fármacos', topics: ['Patient DT', 'Cardiovascular DT', 'Hospital DT', 'Drug Discovery'], path: '/digital-twins/lecture7', color: '#f97316' },
  { id: 'DT8', num: '08', title: 'ML & AI em Digital Twins', subtitle: 'Anomaly detection, RUL, RL, Generative AI e Federated Learning', topics: ['Anomaly Detection', 'RUL Prediction', 'Reinforcement Learning', 'Federated Learning'], path: '/digital-twins/lecture8', color: '#f97316' },
  { id: 'DT9', num: '09', title: 'Futuro & Tendências', subtitle: 'Autonomous DTs, Generative DTs, Quantum, metaverso industrial e carreiras', topics: ['Autonomous DTs', 'Generative DTs', 'Quantum Computing', 'Carreira em DTs'], path: '/digital-twins/lecture9', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function DigitalTwins() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>DIGITAL TWINS</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Digital Twins</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Explore como réplicas digitais de sistemas físicos estão a transformar a indústria, cidades e saúde. Desde a arquitectura IoT até às plataformas cloud mais avançadas, aprende a construir e gerir Digital Twins de forma eficaz.</p>
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
