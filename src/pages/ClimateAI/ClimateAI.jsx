import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'cli1', num: '01', title: 'IA e Modelação Climática', subtitle: 'GCMs, neural emulators, downscaling estatístico e projecções CMIP6', topics: ['GCMs / CMIP6', 'Neural Emulators', 'Downscaling', 'Projecções'], path: '/climate-ai/lecture1', color: '#f97316' },
  { id: 'cli2', num: '02', title: 'Energias Renováveis & Grid', subtitle: 'Previsão solar/eólica, integração na rede, armazenamento e mercados de energia', topics: ['Solar / Eólica', 'Forecasting', 'Smart Grid', 'Storage'], path: '/climate-ai/lecture2', color: '#f97316' },
  { id: 'cli3', num: '03', title: 'Carbon Footprint & ESG', subtitle: 'Scope 1/2/3, GHG Protocol, taxonomia EU e analytics de sustentabilidade', topics: ['Scope 1/2/3', 'GHG Protocol', 'EU Taxonomy', 'ESG Analytics'], path: '/climate-ai/lecture3', color: '#f97316' },
  { id: 'cli4', num: '04', title: 'Agricultura de Precisão', subtitle: 'Satellite imagery, sensores IoT, yield prediction e deteção de stress hídrico', topics: ['Satellite / NDVI', 'IoT Sensores', 'Yield Prediction', 'Stress Hídrico'], path: '/climate-ai/lecture4', color: '#f97316' },
  { id: 'cli5', num: '05', title: 'Sustainability Reporting & NLP', subtitle: 'GRI, CSRD, TCFD, NLP para relatórios ESG e greenwashing detection', topics: ['GRI / CSRD', 'TCFD', 'NLP ESG', 'Greenwashing'], path: '/climate-ai/lecture5', color: '#f97316' },
  { id: 'cli6', num: '06', title: 'Eventos Extremos & Riscos Climáticos', subtitle: 'Detecção de extremos, wildfire ML, inundações, riscos físicos e de transição', topics: ['Extreme Events', 'Wildfire ML', 'Flood Prediction', 'Climate Risk'], path: '/climate-ai/lecture6', color: '#f97316' },
  { id: 'cli7', num: '07', title: 'Oceanos & Criosfera', subtitle: 'Temperatura oceânica, acidificação, nível do mar, gelo ártico e permafrost', topics: ['Ocean Heat', 'Sea Level Rise', 'Arctic Ice', 'Permafrost'], path: '/climate-ai/lecture7', color: '#f97316' },
  { id: 'cli8', num: '08', title: 'Biodiversidade & Uso da Terra', subtitle: 'Desflorestação com ML, modelos de distribuição de espécies, LULC e REDD+', topics: ['Desflorestação ML', 'Species SDM', 'LULC Change', 'REDD+'], path: '/climate-ai/lecture8', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function ClimateAI() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>CLIMATE &amp; SUSTAINABILITY AI</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Climate AI &amp; Sustainability</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Aplicação de inteligência artificial à modelação climática, energias renováveis, contabilidade de carbono, agricultura de precisão e relatórios de sustentabilidade.</p>
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
