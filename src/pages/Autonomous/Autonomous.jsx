import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'AV1', num: '01', title: 'Arquitectura & Sensores', subtitle: 'SAE levels, LiDAR, câmeras, radar, fusão sensorial e stacks Waymo/Tesla', topics: ['SAE Levels', 'LiDAR', 'Câmeras / Radar', 'Fusão Sensorial'], path: '/autonomous/lecture1', color: '#f97316' },
  { id: 'AV2', num: '02', title: 'Percepção & Computer Vision', subtitle: 'Detecção 3D, BEV perception, segmentação semântica e ocupância', topics: ['3D Detection', 'BEVFusion', 'SegFormer', 'Ocupância'], path: '/autonomous/lecture2', color: '#f97316' },
  { id: 'AV3', num: '03', title: 'Localização & HD Maps', subtitle: 'SLAM, NDT matching, GPS/IMU fusion, HD Maps e OpenDRIVE', topics: ['SLAM', 'HD Maps', 'GPS/IMU EKF', 'NDT Matching'], path: '/autonomous/lecture3', color: '#f97316' },
  { id: 'AV4', num: '04', title: 'Planeamento & Controlo', subtitle: 'A*, Frenet frame, predição de agentes, MPC e imitation learning', topics: ['A* / Lattice', 'Frenet Frame', 'Agent Prediction', 'MPC'], path: '/autonomous/lecture4', color: '#f97316' },
  { id: 'AV5', num: '05', title: 'Safety, Regulação & Deployment', subtitle: 'ISO 26262, SOTIF, simulação CARLA, geo-fencing e modelos de negócio', topics: ['ISO 26262', 'CARLA / LGSVL', 'Deployment ODD', 'Robotaxi'], path: '/autonomous/lecture5', color: '#f97316' },
  { id: 'AV6', num: '06', title: 'V2X & Infraestrutura Inteligente', subtitle: 'C-V2X, DSRC, RSU, cooperação veículo-infraestrutura e smart roads', topics: ['C-V2X / DSRC', 'RSU', 'Cooperative Driving', 'Smart Roads'], path: '/autonomous/lecture6', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function Autonomous() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>AUTONOMOUS VEHICLES</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Autonomous Vehicles</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Mergulha na arquitectura completa dos veículos autónomos, desde a percepção sensorial até ao planeamento de trajectórias e tomada de decisão. Aprende como SLAM, fusão de sensores, simulação e certificação de segurança convergem para tornar a condução autónoma uma realidade.</p>
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
