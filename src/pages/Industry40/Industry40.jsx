import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'I41', num: '01', title: 'Revolução Industrial 4.0', subtitle: 'IIoT, OPC-UA, Purdue Model e tecnologias habilitadoras', topics: ['IIoT', 'OPC-UA', 'Purdue Model', 'CPS'], path: '/industry40/lecture1', color: '#f97316' },
  { id: 'I42', num: '02', title: 'Predictive Maintenance', subtitle: 'FFT, vibração, RUL estimation e ML para manutenção', topics: ['Vibração / FFT', 'RUL Estimation', 'LSTM Séries', 'NASA C-MAPSS'], path: '/industry40/lecture2', color: '#f97316' },
  { id: 'I43', num: '03', title: 'Robótica & Automação', subtitle: 'Cobots ISO/TS 15066, AGV/AMR, CV e RPA inteligente', topics: ['Cobots', 'AGV / AMR', 'Vision Defeitos', 'RPA / IPA'], path: '/industry40/lecture3', color: '#f97316' },
  { id: 'I44', num: '04', title: 'Supply Chain Inteligente', subtitle: 'Demand forecasting, VRP, bullwhip effect e blockchain', topics: ['Demand Forecast', 'Bullwhip Effect', 'VRP Logistica', 'Hyperledger'], path: '/industry40/lecture4', color: '#f97316' },
  { id: 'I45', num: '05', title: 'Digital Manufacturing', subtitle: 'MES/ISA-95, SPC, quality control com CV e digital thread', topics: ['MES / ISA-95', 'SPC / Cpk', 'Vision Quality', 'Digital Thread'], path: '/industry40/lecture5', color: '#f97316' },
  { id: 'I46', num: '06', title: 'Industrial Cybersecurity (OT/IT)', subtitle: 'ICS/SCADA threats, ISA-62443, Zero Trust OT e incident response', topics: ['ICS/SCADA Attacks', 'ISA-62443 Zones', 'Zero Trust OT', 'Dragos / Nozomi'], path: '/industry40/lecture6', color: '#f97316' },
  { id: 'I47', num: '07', title: 'Sustentabilidade & Green Manufacturing', subtitle: 'GHG Protocol, ISO 50001, LCA, RL para energia e Digital Product Passport', topics: ['GHG Scope 1/2/3', 'ISO 50001 EnPI', 'LCA ISO 14040', 'DPP EU 2024'], path: '/industry40/lecture7', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function Industry40() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>INDUSTRY 4.0</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Industry 4.0</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Compreende a quarta revolução industrial e como IIoT, robótica, IA e sistemas cyber-físicos estão a redefinir a manufatura global. Da manutenção preditiva ao digital manufacturing, aprende as tecnologias que moldam as fábricas do futuro.</p>
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
