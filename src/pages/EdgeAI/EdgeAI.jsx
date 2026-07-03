import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'edg1', num: '01', title: 'Introdução ao Edge AI', subtitle: 'Cloud vs edge vs fog, latência, privacidade, casos de uso industriais e arquitectura de sistemas', topics: ['Cloud vs Edge', 'Latência', 'Privacidade', 'Fog Computing'], path: '/edge-ai/lecture1', color: '#f97316' },
  { id: 'edg2', num: '02', title: 'Model Compression', subtitle: 'Pruning, quantização INT8/FP16, knowledge distillation e sparsidade estruturada', topics: ['Pruning', 'Quantização', 'Distillation', 'Sparsidade'], path: '/edge-ai/lecture2', color: '#f97316' },
  { id: 'edg3', num: '03', title: 'TinyML & Microcontrollers', subtitle: 'TensorFlow Lite Micro, Arduino Nano 33, STM32, ciclo de vida de modelos embebidos', topics: ['TFLite Micro', 'Arduino', 'STM32', 'Ciclo de Vida'], path: '/edge-ai/lecture3', color: '#f97316' },
  { id: 'edg4', num: '04', title: 'Hardware para Edge AI', subtitle: 'NPUs, Google Coral, NVIDIA Jetson, Apple Neural Engine, comparação de plataformas', topics: ['NPUs', 'Coral', 'Jetson', 'Apple ANE'], path: '/edge-ai/lecture4', color: '#f97316' },
  { id: 'edg5', num: '05', title: 'MLOps para Edge', subtitle: 'OTA updates, monitorização em produção, pipelines de deployment e gestão de frota', topics: ['OTA Updates', 'Monitorização', 'Deployment', 'Frota'], path: '/edge-ai/lecture5', color: '#f97316' },
  { id: 'edg6', num: '06', title: 'Efficient Neural Architectures', subtitle: 'MobileNet, EfficientNet, NAS, ViT-tiny, YOLO-nano e design para restrições de hardware', topics: ['MobileNet', 'EfficientNet', 'NAS', 'YOLO-nano'], path: '/edge-ai/lecture6', color: '#f97316' },
  { id: 'edg7', num: '07', title: 'Federated Learning', subtitle: 'Treino distribuído sem partilha de dados, FedAvg, privacidade diferencial e comunicação eficiente', topics: ['FedAvg', 'Privacidade Diferencial', 'Comunicação', 'Cross-device'], path: '/edge-ai/lecture7', color: '#f97316' },
  { id: 'edg8', num: '08', title: 'On-device Training & Continual Learning', subtitle: 'Edge fine-tuning, catastrophic forgetting, EWC, replay buffers e adaptação contínua', topics: ['Edge Fine-tuning', 'EWC', 'Replay Buffers', 'Adaptação'], path: '/edge-ai/lecture8', color: '#f97316' },
  { id: 'edg9', num: '09', title: 'Edge LLMs & On-device NLP', subtitle: 'Phi-3, Gemma 2B, Llama 3.2, llama.cpp, quantização INT4, whisper tiny e aplicações de linguagem no edge', topics: ['Phi-3 / Gemma', 'llama.cpp', 'INT4 / GGUF', 'On-device ASR'], path: '/edge-ai/lecture9', color: '#f97316' },
  { id: 'edg10', num: '10', title: 'Segurança em Edge AI', subtitle: 'Model extraction attacks, adversarial examples em edge, TrustZone/TEE, model encryption e secure boot', topics: ['Model Extraction', 'Adversarial Edge', 'TrustZone / TEE', 'Secure Boot'], path: '/edge-ai/lecture10', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function EdgeAI() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>EDGE AI &amp; TINYML</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Edge AI &amp; TinyML</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Inferência de modelos de ML em dispositivos edge e microcontroladores, compressão de modelos, hardware especializado e operações de ML distribuídas.</p>
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
