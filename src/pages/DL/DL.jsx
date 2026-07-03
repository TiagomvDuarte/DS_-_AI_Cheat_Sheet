import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'dl1',  num: '01', title: 'O Que É Uma Rede Neuronal?',                subtitle: 'Neurónios, Camadas, Pesos e Forward Pass — os Fundamentos',         topics: ['Neurónio artificial — pesos, bias e activação', 'Perceptron, MLP e arquitectura em camadas', 'Funções de activação — sigmoid, ReLU, tanh, softmax', 'Forward pass passo-a-passo & intuição do treino'],                  path: '/dl/lecture1',  color: '#f97316' },
  { id: 'dl2',  num: '02', title: 'Backpropagation',    subtitle: 'Chain Rule, Forward/Backward Pass e Autograd',                      topics: ['Computation graphs — nós e arestas de gradiente', 'Chain rule aplicada a redes profundas', 'Forward pass vs backward pass', 'Autograd — grafos dinâmicos e acumulação de gradiente'],                               path: '/dl/lecture2',  color: '#f97316' },
  { id: 'dl3',  num: '03', title: 'Optimização & Loss Landscapes',            subtitle: 'SGD, Adam, AdamW, LR Schedulers e Saddle Points',                   topics: ['SGD com Momentum — acumulação de gradientes', 'Adam e AdamW — adaptive learning rates', 'Cosine annealing, warmup e OneCycleLR', 'Loss landscape — saddle points, sharp vs flat minima'],                   path: '/dl/lecture3',  color: '#f97316' },
  { id: 'dl4',  num: '04', title: 'Regularização & Normalização',             subtitle: 'Dropout, BatchNorm, LayerNorm e Weight Decay',                      topics: ['Dropout — taxa p, train vs inference mode', 'BatchNorm — normalização por batch, γ e β', 'LayerNorm e GroupNorm — quando usar cada um', 'Weight decay, L2 e early stopping'],                                   path: '/dl/lecture4',  color: '#f97316' },
  { id: 'dl5',  num: '05', title: 'Autoencoders & VAEs',                      subtitle: 'Representação Latente, ELBO e Reparametrization Trick',             topics: ['Autoencoders: encoder, bottleneck, decoder', 'Denoising e Sparse Autoencoders', 'VAE — Evidence Lower Bound (ELBO)', 'Reparametrization trick — μ + σ·ε'],                                                path: '/dl/lecture5',  color: '#f97316' },
  { id: 'dl6',  num: '06', title: 'Graph Neural Networks (GNNs)',              subtitle: 'Message Passing, GCN, GAT e GraphSAGE',                            topics: ['Grafos como input — nós, arestas, adjacência', 'Message passing framework — aggregate + update', 'GCN (Graph Convolutional Network)', 'GAT (Graph Attention) e GraphSAGE'],                                      path: '/dl/lecture6',  color: '#f97316' },
  { id: 'dl7',  num: '07', title: 'Self-Supervised & Contrastive Learning',   subtitle: 'SimCLR, MoCo, BYOL, DINO e Masked Autoencoders',                   topics: ['Aprender sem labels — pretext tasks', 'Contrastive learning — SimCLR, MoCo, NT-Xent loss', 'BYOL e DINO — sem pares negativos', 'MAE (Masked Autoencoders) — reconstrução mascarada'],                     path: '/dl/lecture7',  color: '#f97316' },
  { id: 'dl8',  num: '08', title: 'Multimodal Learning',                      subtitle: 'CLIP, DALL-E, LLaVA e Embeddings Multimodais',                      topics: ['CLIP — contrastive image-text pretraining', 'Zero-shot transfer entre modalidades', 'LLaVA e modelos visão-linguagem (VLMs)', 'Embeddings partilhados e fusão de modalidades'],                               path: '/dl/lecture8',  color: '#f97316' },
  { id: 'dl9',  num: '09', title: 'Scaling Laws & Neural Architecture Search', subtitle: 'Chinchilla, Emergent Capabilities e NAS',                          topics: ['Chinchilla scaling laws — tokens vs parâmetros', 'Emergent capabilities — phase transitions', 'NAS — DARTS, EfficientNet, AutoML', 'Hyperparameter tuning — Bayesian optimization, Optuna'],                  path: '/dl/lecture9',  color: '#f97316' },
  { id: 'dl10', num: '10', title: 'Efficient Deep Learning',                  subtitle: 'Quantização, Pruning, Distilação e TinyML',                         topics: ['Quantização — INT8, INT4, post-training vs QAT', 'Pruning — structured vs unstructured', 'Knowledge distillation — teacher/student', 'TinyML — MobileNet, EfficientNet, deploy em edge'],                    path: '/dl/lecture10',  color: '#f97316' },
  { id: 'dl11', num: '11', title: 'Federated Learning & Privacy',             subtitle: 'FedAvg, Differential Privacy e Split Learning',                     topics: ['Federated Learning — treino sem partilhar dados', 'FedAvg — agregação de modelos locais', 'Differential Privacy — ε-DP, Gaussian mechanism', 'Split Learning e aplicações em saúde & mobile'],               path: '/dl/lecture11', color: '#f97316' },
  { id: 'dl12', num: '12', title: 'Deep Belief Networks & Boltzmann Machines', subtitle: 'RBM, DBN, Contrastive Divergence e Geração Profunda',              topics: ['Boltzmann Machine — energia e distribuição de Boltzmann', 'Restricted Boltzmann Machine (RBM) — camada visível e oculta', 'Contrastive Divergence — aprendizagem eficiente', 'Deep Belief Network (DBN) — empilhar RBMs como pré-treino'], path: '/dl/lecture12', color: '#f97316' },
  { id: 'dl13', num: '13', title: 'TensorFlow & PyTorch',                      subtitle: 'Implementação Prática — Tensors, Autograd, Modelos e Treino',       topics: ['Tensors, devices (CPU/GPU) e operações', 'Autograd vs GradientTape', 'nn.Module / Sequential vs Keras API', 'Training loops, datasets, save/load de modelos'],                          path: '/dl/lecture13', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function DL() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>DEEP LEARNING</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Deep Learning</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Do que é uma rede neuronal, passando por backpropagation, optimização e regularização — os fundamentos. Depois: autoencoders, VAEs, Graph Neural Networks, contrastive learning, multimodal, scaling laws, efficient DL, federated learning e Boltzmann machines. No final, a implementação prática em TensorFlow e PyTorch.</p>
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
