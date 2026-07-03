import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'SC1', num: '01', title: 'Introdução às Smart Cities', subtitle: 'IoT urbano, sensores e plataformas CityOS', topics: ['IoT Urbano', 'Sensores', 'CityOS', 'Infra-estrutura'], path: '/smart-cities/lecture1', color: '#f97316' },
  { id: 'SC2', num: '02', title: 'Mobilidade & Tráfego', subtitle: 'Traffic prediction, routing, V2X e estacionamento inteligente', topics: ['Traffic Prediction', 'Routing', 'V2X', 'Estacionamento'], path: '/smart-cities/lecture2', color: '#f97316' },
  { id: 'SC3', num: '03', title: 'Energia & Ambiente', subtitle: 'Smart grids, consumo preditivo e qualidade do ar', topics: ['Smart Grids', 'Consumo Preditivo', 'Qualidade do Ar', 'Sustentabilidade'], path: '/smart-cities/lecture3', color: '#f97316' },
  { id: 'SC4', num: '04', title: 'Segurança & Vigilância', subtitle: 'Detecção de anomalias, privacidade vs segurança urbana', topics: ['Detecção Anomalias', 'Videovigilância', 'Privacidade', 'Resposta a Incidentes'], path: '/smart-cities/lecture4', color: '#f97316' },
  { id: 'SC5', num: '05', title: 'Plataformas & Governança', subtitle: 'FIWARE, dados abertos e interoperabilidade entre sistemas', topics: ['FIWARE', 'Open Data', 'Interoperabilidade', 'Governança'], path: '/smart-cities/lecture5', color: '#f97316' },
  { id: 'SC6', num: '06', title: 'Água & Resíduos', subtitle: 'Detecção de fugas, smart bins e optimização de rotas de recolha', topics: ['Smart Water', 'Leak Detection', 'Smart Bins', 'Route Optimisation'], path: '/smart-cities/lecture6', color: '#f97316' },
  { id: 'SC7', num: '07', title: 'Smart Buildings & BMS', subtitle: 'Gémeos digitais de edifícios, HVAC com RL e BIM/IFC', topics: ['BMS', 'Digital Twin', 'HVAC RL', 'BIM/IFC'], path: '/smart-cities/lecture7', color: '#f97316' },
  { id: 'SC8', num: '08', title: 'Urban Planning & GIS', subtitle: 'ML geoespacial, cidade dos 15 minutos e análise de acessibilidade', topics: ['GIS/ML', '15-min City', 'Isócronas', 'Zoning Preditivo'], path: '/smart-cities/lecture8', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function SmartCities() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>SMART CITIES</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Smart Cities</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Explora como tecnologia, dados e IoT estão a transformar os espaços urbanos em cidades mais eficientes, sustentáveis e seguras. Desde a mobilidade inteligente à governança de dados abertos, percebe o ecossistema das cidades do futuro.</p>
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
