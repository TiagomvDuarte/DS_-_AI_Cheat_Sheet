import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'GS1', num: '01', title: 'Fundamentos GIS', subtitle: 'Sistemas de coordenadas, projecções, formatos de dados e GeoPandas', topics: ['CRS / Projecções', 'GeoPandas', 'Shapefiles', 'Geometrias'], path: '/geospatial/lecture1', color: '#f97316' },
  { id: 'GS2', num: '02', title: 'Spatial Analysis', subtitle: 'Autocorrelação espacial, Moran\'s I, kriging e interpolação geoestatística', topics: ['Moran\'s I', 'Kriging', 'Interpolação', 'LISA'], path: '/geospatial/lecture2', color: '#f97316' },
  { id: 'GS3', num: '03', title: 'Remote Sensing', subtitle: 'Bandas espectrais, NDVI, SAR, Sentinel-2 e detecção de mudanças', topics: ['NDVI / Índices', 'SAR', 'Sentinel-2', 'Change Detection'], path: '/geospatial/lecture3', color: '#f97316' },
  { id: 'GS4', num: '04', title: 'Spatial Machine Learning', subtitle: 'H3 hexagons, feature engineering espacial e modelos geoespaciais', topics: ['H3 Hexagons', 'Spatial Joins', 'GWR', 'Feature Engineering'], path: '/geospatial/lecture4', color: '#f97316' },
  { id: 'GS5', num: '05', title: 'Visualização Geoespacial', subtitle: 'kepler.gl, deck.gl, Folium, mapas interactivos e dashboards', topics: ['kepler.gl', 'deck.gl', 'Folium', 'Mapbox'], path: '/geospatial/lecture5', color: '#f97316' },
  { id: 'GS6', num: '06', title: 'Urban Analytics', subtitle: 'OpenStreetMap, mobilidade urbana, heat islands e smart cities', topics: ['OSMnx', 'Mobilidade', 'Urban Heat', 'Smart Cities'], path: '/geospatial/lecture6', color: '#f97316' },
  { id: 'GS7', num: '07', title: 'Deep Learning Geoespacial', subtitle: 'CNNs para imagens de satélite, segmentação semântica e detecção de objectos', topics: ['CNN Satélite', 'Segmentação', 'Object Detection', 'ViT / SAM'], path: '/geospatial/lecture7', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function Geospatial() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>GEOSPATIAL INTELLIGENCE</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Geospatial Intelligence</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Domina a análise e visualização de dados geoespaciais com as ferramentas mais modernas do ecossistema Python e além. Desde fundamentos GIS até remote sensing e deep learning para imagens de satélite, aprende a extrair inteligência a partir de dados com dimensão espacial.</p>
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
