import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const modules = [
  {
    id: 'cv1', num: '01',
    title: 'Imagem como Dado',
    subtitle: 'Pixels, canais RGB, tensores e os desafios fundamentais da visão',
    topics: ['Imagem = tensor (H × W × C)', 'Variação de iluminação, oclusão, deformação', 'Por que não usar MLP directamente', 'Datasets: MNIST, CIFAR, ImageNet, COCO'],
    path: '/cv/lecture1', color: '#f97316',
  },
  {
    id: 'cv2', num: '02',
    title: 'Processamento Clássico',
    subtitle: 'Filtros manuais, detecção de edges e descritores locais antes das CNNs',
    topics: ['Blur, sharpen, Sobel, Laplaciano', 'Algoritmo de Canny (4 passos)', 'SIFT, HOG, Harris Corner', 'O legado para as CNNs'],
    path: '/cv/lecture2', color: '#f97316',
  },
  {
    id: 'cv3', num: '03',
    title: 'A Convolução',
    subtitle: 'Filtros learnable, feature maps, padding, stride e receptive field',
    topics: ['Kernel aprendível por backprop', 'Weight sharing — invariância à translação', 'Padding & stride — calculadora interactiva', 'Receptive field cresce com profundidade'],
    path: '/cv/lecture3', color: '#f97316',
  },
  {
    id: 'cv4', num: '04',
    title: 'Arquitectura CNN Completa',
    subtitle: 'Pooling, BatchNorm, activações e camadas fully connected',
    topics: ['Max Pooling, Average Pooling, GAP', 'Batch Normalization — estabilidade no treino', 'ReLU, Leaky ReLU, GELU, Sigmoid', 'Pipeline: Conv → BN → ReLU → Pool → FC'],
    path: '/cv/lecture4', color: '#f97316',
  },
  {
    id: 'cv5', num: '05',
    title: 'Treino de CNNs',
    subtitle: 'Backprop, learning rate schedules, augmentation e regularização',
    topics: ['Gradientes em conv, pool, BN e ReLU', 'Cosine annealing, warmup, 1cycle', 'Augmentation: geometric, color, mixup, auto', 'Dropout, weight decay, label smoothing'],
    path: '/cv/lecture5', color: '#f97316',
  },
  {
    id: 'cv6', num: '06',
    title: 'Evolução das Arquitecturas',
    subtitle: 'LeNet → AlexNet → VGG → ResNet e as skip connections',
    topics: ['LeNet (1998): a prova de conceito', 'AlexNet (2012): o big bang do deep learning', 'VGG (2014): só filtros 3×3, profundidade', 'ResNet (2015): H(x) = F(x) + x'],
    path: '/cv/lecture6', color: '#f97316',
  },
  {
    id: 'cv7', num: '07',
    title: 'Arquitecturas Modernas',
    subtitle: 'EfficientNet, MobileNet, Vision Transformer e ConvNeXt',
    topics: ['EfficientNet: compound scaling (d/w/r)', 'MobileNet: depthwise separable conv', 'ViT: imagem → patches → transformer', 'ConvNeXt (2022): CNN com princípios de ViT'],
    path: '/cv/lecture7', color: '#f97316',
  },
  {
    id: 'cv8', num: '08',
    title: 'Transfer Learning & Fine-tuning',
    subtitle: 'Reutilizar modelos pré-treinados para novas tarefas com poucos dados',
    topics: ['Feature extraction vs fine-tuning parcial vs total', 'LR discriminativa — menor nas primeiras camadas', 'Catastrofic forgetting e domain adaptation', 'CLIP, DINOv2 — pré-treino auto-supervisionado'],
    path: '/cv/lecture8', color: '#f97316',
  },
  {
    id: 'cv9', num: '09',
    title: 'Detecção de Objectos',
    subtitle: 'Anchor boxes, NMS, YOLO, Faster R-CNN e DETR',
    topics: ['Anchor boxes e regressão de offsets', 'IoU, NMS, mAP — métricas de detecção', 'Faster R-CNN (2-stage) vs YOLO (1-stage)', 'DETR: detection transformer sem anchors'],
    path: '/cv/lecture9', color: '#f97316',
  },
  {
    id: 'cv10', num: '10',
    title: 'Segmentação & Foundational Models',
    subtitle: 'U-Net, Mask R-CNN, SAM e DINOv2',
    topics: ['Semântica vs Instance vs Panoptic', 'U-Net: encoder-decoder com skip connections', 'SAM: segment anything zero-shot', 'DINOv2: features universais auto-supervisionados'],
    path: '/cv/lecture10', color: '#f97316',
  },
  {
    id: 'cv11', num: '11',
    title: 'OpenCV — Implementação Prática',
    subtitle: 'Módulo final: código real em Python/OpenCV para tudo o que foi visto',
    topics: ['Leitura/escrita de imagem, BGR vs RGB, transformações afins', 'Thresholding, filtros, morfologia, Canny e contornos', 'Features (ORB/SIFT), Haar cascades e cv2.dnn', 'Vídeo em tempo real e integração com PyTorch/torchvision'],
    path: '/cv/lecture11', color: '#f97316',
  },
];

export default function CV() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>
        <ArrowLeft size={16} /> Voltar ao Dashboard
      </Link>

      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Computer Vision</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Do processamento clássico de imagem às CNNs modernas, arquitecturas de referência, detecção de objectos e modelos fundacionais de visão — culminando num módulo prático de implementação com OpenCV e Python.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {modules.map((lecture) => (
          <div key={lecture.id} onClick={() => navigate(lecture.path)}
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderLeft: `4px solid ${lecture.color}`, borderRadius: 12, padding: '1.25rem 1.5rem', cursor: 'pointer', transition: 'all 0.2s', display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: '1rem', alignItems: 'center' }}
            onMouseEnter={e => { e.currentTarget.style.background = `${lecture.color}10`; e.currentTarget.style.transform = 'translateX(4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.transform = ''; }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: lecture.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Módulo</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: lecture.color, lineHeight: 1 }}>{lecture.num}</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{lecture.title}</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>{lecture.subtitle}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {lecture.topics.map(topic => (
                  <span key={topic} style={{ background: `${lecture.color}12`, border: `1px solid ${lecture.color}30`, color: lecture.color, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 }}>{topic}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: lecture.color, fontWeight: 700, fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
              Abrir <ArrowRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
