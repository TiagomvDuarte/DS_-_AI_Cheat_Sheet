import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'cyb1', num: '01', title: 'Fundamentos de Cybersecurity', subtitle: 'CIA triad, MITRE ATT&CK, kill chain e superfície de ataque', topics: ['CIA Triad', 'MITRE ATT&CK', 'Kill Chain', 'Attack Surface'], path: '/cybersecurity/lecture1', color: '#f97316' },
  { id: 'cyb2', num: '02', title: 'Detecção de Intrusões com ML', subtitle: 'IDS/IPS, network traffic analysis, anomaly detection e UEBA', topics: ['IDS/IPS', 'Network Analysis', 'Anomaly Detection', 'UEBA'], path: '/cybersecurity/lecture2', color: '#f97316' },
  { id: 'cyb3', num: '03', title: 'Adversarial Machine Learning', subtitle: 'Evasion attacks, poisoning, FGSM, defesas robustas e certificação', topics: ['Evasion', 'Poisoning', 'FGSM / PGD', 'Defesas Robustas'], path: '/cybersecurity/lecture3', color: '#f97316' },
  { id: 'cyb4', num: '04', title: 'Deepfakes & Desinformação', subtitle: 'GANs, diffusion models para síntese, detecção multimodal', topics: ['GAN / Diffusion', 'Face Swap', 'Detecção', 'Desinformação'], path: '/cybersecurity/lecture4', color: '#f97316' },
  { id: 'cyb5', num: '05', title: 'Threat Intelligence & SOC', subtitle: 'SIEM, SOAR, CTI, threat hunting e automação com ML', topics: ['SIEM / SOAR', 'CTI', 'Threat Hunting', 'ML no SOC'], path: '/cybersecurity/lecture5', color: '#f97316' },
  { id: 'cyb6', num: '06', title: 'Criptografia & PKI', subtitle: 'Criptografia simétrica/assimétrica, TLS 1.3, PKI e criptografia pós-quântica', topics: ['AES / RSA / ECC', 'TLS 1.3', 'PKI & CA', 'Post-Quantum'], path: '/cybersecurity/lecture6', color: '#f97316' },
  { id: 'cyb7', num: '07', title: 'Cloud Security & Zero Trust', subtitle: 'Zero Trust Architecture, IAM, CSPM, DevSecOps e segurança de containers', topics: ['Zero Trust', 'IAM / RBAC', 'CSPM', 'DevSecOps'], path: '/cybersecurity/lecture7', color: '#f97316' },
  { id: 'cyb8', num: '08', title: 'Web & Application Security', subtitle: 'OWASP Top 10, SQLi, XSS, CSRF, segurança de APIs e bug bounty methodology', topics: ['OWASP Top 10', 'SQLi / XSS', 'API Security', 'Bug Bounty'], path: '/cybersecurity/lecture8', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function Cybersecurity() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>CYBERSECURITY &amp; AI</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Cybersecurity &amp; AI</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Fundamentos de cibersegurança, detecção de intrusões com machine learning, adversarial ML, deepfakes, operações de segurança inteligentes, criptografia moderna e cloud security. Do kill chain ao Zero Trust.</p>
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
