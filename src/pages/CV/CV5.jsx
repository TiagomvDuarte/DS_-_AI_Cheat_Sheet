import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: '#f97316', borderLeft: '3px solid #f97316', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: '3px solid #f97316', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const AugmentationExplorer = () => {
  const [sel, setSel] = useState(0);
  const augs = [
    {
      name: 'Geometric', color: '#f97316',
      transforms: ['Random Horizontal Flip', 'Random Rotation (±15°)', 'Random Crop / Resize', 'Random Affine', 'Perspective Warp'],
      what: 'Transformações que alteram a posição, orientação ou geometria da imagem. O label não muda — uma maçã virada ao contrário continua a ser uma maçã.',
      when: 'Quase sempre. Horizontal flip é universal. Rotação depende da tarefa — para dígitos, rotações grandes podem mudar o significado (6 vs 9).',
    },
    {
      name: 'Color / Photometric', color: '#f97316',
      transforms: ['Color Jitter (brightness, contrast, saturation, hue)', 'Grayscale aleatório', 'Gaussian Blur', 'Random Erasing'],
      what: 'Alterações nas propriedades fotométricas da imagem. Fazem o modelo robusto a variações de iluminação, câmara e condições de captura.',
      when: 'Muito útil para imagens naturais e médicas. Cuidado com tarefas onde a cor é discriminativa (e.g., classificar frutas por maturação).',
    },
    {
      name: 'Mixing', color: '#f97316',
      transforms: ['Mixup: x = λx₁ + (1-λ)x₂, y = λy₁ + (1-λ)y₂', 'CutMix: substituir região rectangular por outra imagem', 'CutOut: mascarar região rectangular com zeros'],
      what: 'Combinam múltiplas imagens (ou mascaram regiões). Mixup cria imagens "híbridas" com labels interpoladas. CutMix é mais natural — a região cortada tem pixels reais.',
      when: 'Muito eficaz em ImageNet e datasets grandes. Especialmente útil com transformers (ViT). CutMix normalmente supera Mixup em classificação de imagem.',
    },
    {
      name: 'Auto Augment', color: '#f97316',
      transforms: ['AutoAugment (Google)', 'RandAugment', 'TrivialAugment', 'AugMix'],
      what: 'Em vez de escolher manualmente as augmentations, estas abordagens aprendem ou amostram automaticamente políticas de augmentation. RandAugment simplifica: aplica N transforms aleatórias com magnitude M.',
      when: 'Estado da arte em ImageNet. RandAugment é o mais usado por ser simples (só 2 hiperparâmetros: N e M). TrivialAugment é ainda mais simples e competitivo.',
    },
  ];
  const a = augs[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Data Augmentation — Tipos e Estratégias</p>
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {augs.map((au, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: sel === i ? au.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? au.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{au.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${a.color}30` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.85rem' }}>
          <div>
            <strong style={{ color: a.color }}>Transforms incluídas:</strong>
            <ul style={{ margin: '0.4rem 0 0', paddingLeft: '1.1rem', lineHeight: 1.8, color: 'var(--text-primary)' }}>
              {a.transforms.map(t => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <div>
            <div style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#f97316' }}>O que faz:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>{a.what}</p></div>
            <div><strong style={{ color: '#f97316' }}>Quando usar:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>{a.when}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RegularizationExplorer = () => {
  const [sel, setSel] = useState(0);
  const regs = [
    {
      name: 'Dropout', color: '#f97316',
      what: 'Durante o treino, cada neurónio é desactivado aleatoriamente com probabilidade p (tipicamente 0.5 em FC, 0.1-0.2 em conv). Durante inferência, todos os neurónios estão activos mas os pesos são multiplicados por (1-p).',
      why: 'Força a rede a aprender representações redundantes — cada neurónio não pode depender de outros específicos. Equivale a treinar um ensemble de 2ⁿ redes diferentes com pesos partilhados.',
      note: 'Muito eficaz em camadas FC. Em camadas conv profundas com BN, o efeito é menor — muitas redes modernas não usam dropout nas convoluções.',
    },
    {
      name: 'Weight Decay (L2)', color: '#f97316',
      what: 'Adiciona um termo de penalização à loss: L_total = L_task + λ·Σwᵢ². Penaliza pesos grandes, mantendo os pesos próximos de zero.',
      why: 'Pesos grandes podem memorizar dados de treino. L2 mantém pesos pequenos e suaves — bias para soluções mais simples (Occam\'s Razor).',
      note: 'λ típico: 1e-4 a 5e-4. Muito importante — treinar sem weight decay em ImageNet normalmente dá resultados muito piores.',
    },
    {
      name: 'Label Smoothing', color: '#f97316',
      what: 'Em vez de treinar com labels one-hot (y=1 para a classe correcta), usa labels suavizadas: y = 1-ε para a classe correcta e ε/(K-1) para as restantes (tipicamente ε=0.1).',
      why: 'Evita que o modelo fique demasiado confiante. Modelos muito confiantes (logits extremos) tendem a generalizar pior e a ser menos calibrados.',
      note: 'Usado em quase todos os modelos estado-da-arte em ImageNet. Melhora a calibração das probabilidades de saída.',
    },
    {
      name: 'Early Stopping', color: '#f97316',
      what: 'Monitorizar a loss de validação durante o treino e parar quando começa a aumentar (overfitting). Guardar o melhor checkpoint antes do overfitting.',
      why: 'Simples e muito eficaz. A capacidade do modelo é implicitamente limitada pelo número de épocas de treino.',
      note: 'Requer um conjunto de validação separado. Cuidado com a paciência (patience): parar demasiado cedo pode perder melhorias tardias.',
    },
    {
      name: 'Stochastic Depth', color: '#f97316',
      what: 'Em redes muito profundas (ResNets com 100+ camadas), descarta aleatoriamente blocos residuais inteiros durante o treino, mantendo apenas a skip connection. Durante inferência, todos os blocos estão activos com escala ajustada.',
      why: 'Reduz o tempo de treino (menos camadas activas por passo) e tem um efeito regularizador semelhante ao dropout, mas a nível de blocos em vez de neurónios individuais.',
      note: 'Usado em redes profundas como ResNet-1001 e EfficientNet. A probabilidade de drop normalmente aumenta linearmente com a profundidade da camada.',
    },
  ];
  const r = regs[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Técnicas de Regularização</p>
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {regs.map((re, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: sel === i ? re.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? re.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{re.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${r.color}30`, fontSize: '0.85rem' }}>
        <p><strong style={{ color: r.color }}>Como funciona:</strong> {r.what}</p>
        <p style={{ marginTop: '0.6rem' }}><strong style={{ color: '#f97316' }}>Porquê funciona:</strong> {r.why}</p>
        <p style={{ marginTop: '0.6rem' }}><strong style={{ color: '#f97316' }}>Nota prática:</strong> {r.note}</p>
      </div>
    </div>
  );
};

const PrecisionExplorer = () => {
  const [sel, setSel] = useState(0);
  const formats = [
    {
      name: 'FP32', color: '#f97316',
      bits: '1 sinal + 8 expoente + 23 mantissa = 32 bits',
      range: '~±3.4 × 10³⁸, precisão ~7 dígitos decimais',
      desc: 'Formato "tradicional" usado em CPUs e nas primeiras gerações de treino de redes neuronais. Cada peso, activação e gradiente ocupa 4 bytes.',
      tradeoff: 'Máxima precisão, mas o dobro (ou mais) da memória e largura de banda comparado com formatos de 16 bits — e operações mais lentas em GPUs com Tensor Cores.',
    },
    {
      name: 'FP16', color: '#f97316',
      bits: '1 sinal + 5 expoente + 10 mantissa = 16 bits',
      range: '~±65.504, precisão ~3 dígitos decimais',
      desc: 'Metade da memória do FP32. As Tensor Cores das GPUs NVIDIA (desde Volta/V100) fazem multiplicações de matrizes em FP16 a um throughput muito superior ao FP32.',
      tradeoff: 'O expoente pequeno (5 bits) faz com que valores muito pequenos (gradientes) façam underflow para zero, e valores muito grandes façam overflow para infinito. Por isso é necessário loss scaling.',
    },
    {
      name: 'BF16', color: '#f97316',
      bits: '1 sinal + 8 expoente + 7 mantissa = 16 bits',
      range: '~±3.4 × 10³⁸ (mesmo range do FP32!), precisão ~2 dígitos decimais',
      desc: 'Bfloat16 mantém o mesmo número de bits de expoente do FP32 (8 bits), sacrificando mantissa. Resultado: mesmo "alcance dinâmico" do FP32, mas com metade da memória.',
      tradeoff: 'Como o range é igual ao FP32, raramente precisa de loss scaling — mais simples de usar. Disponível em GPUs mais recentes (Ampere+) e TPUs. Menos precisão por valor que FP16, mas isso raramente é o factor limitante no treino.',
    },
  ];
  const f = formats[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Formatos Numéricos para Treino</p>
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {formats.map((fm, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: sel === i ? fm.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? fm.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{fm.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${f.color}30`, fontSize: '0.85rem' }}>
        <svg viewBox="0 0 320 50" style={{ maxWidth: 320, height: 'auto', marginBottom: '0.75rem' }}>
          {f.name === 'FP32' && (
            <>
              <rect x="0" y="10" width="10" height="30" fill="#f97316" opacity="0.7" />
              <rect x="10" y="10" width="80" height="30" fill="#f59e0b" opacity="0.7" />
              <rect x="90" y="10" width="230" height="30" fill="#f97316" opacity="0.5" />
              <text x="5" y="30" textAnchor="middle" fontSize="8" fill="white">S</text>
              <text x="50" y="30" textAnchor="middle" fontSize="9" fill="white">expoente (8 bits)</text>
              <text x="205" y="30" textAnchor="middle" fontSize="9" fill="white">mantissa (23 bits)</text>
            </>
          )}
          {f.name === 'FP16' && (
            <>
              <rect x="0" y="10" width="20" height="30" fill="#f97316" opacity="0.7" />
              <rect x="20" y="10" width="100" height="30" fill="#f59e0b" opacity="0.7" />
              <rect x="120" y="10" width="200" height="30" fill="#f97316" opacity="0.5" />
              <text x="10" y="30" textAnchor="middle" fontSize="8" fill="white">S</text>
              <text x="70" y="30" textAnchor="middle" fontSize="9" fill="white">exp (5 bits)</text>
              <text x="220" y="30" textAnchor="middle" fontSize="9" fill="white">mantissa (10 bits)</text>
            </>
          )}
          {f.name === 'BF16' && (
            <>
              <rect x="0" y="10" width="20" height="30" fill="#f97316" opacity="0.7" />
              <rect x="20" y="10" width="160" height="30" fill="#f59e0b" opacity="0.7" />
              <rect x="180" y="10" width="140" height="30" fill="#f97316" opacity="0.5" />
              <text x="10" y="30" textAnchor="middle" fontSize="8" fill="white">S</text>
              <text x="100" y="30" textAnchor="middle" fontSize="9" fill="white">expoente (8 bits)</text>
              <text x="250" y="30" textAnchor="middle" fontSize="9" fill="white">mantissa (7 bits)</text>
            </>
          )}
        </svg>
        <p><strong style={{ color: f.color }}>Estrutura:</strong> {f.bits}</p>
        <p style={{ marginTop: '0.4rem' }}><strong style={{ color: '#f97316' }}>Alcance / precisão:</strong> {f.range}</p>
        <p style={{ marginTop: '0.6rem' }}>{f.desc}</p>
        <p style={{ marginTop: '0.6rem' }}><strong style={{ color: '#f97316' }}>Trade-off:</strong> {f.tradeoff}</p>
      </div>
    </div>
  );
};

const BatchSizeExplorer = () => {
  const [batch, setBatch] = useState(32);
  const baseLR = 0.1;
  const baseBatch = 32;
  const scaledLR = (baseLR * (batch / baseBatch)).toFixed(3);
  const accumSteps = Math.max(1, Math.round(batch / 32));
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Linear Scaling Rule e Gradient Accumulation</p>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginRight: '0.75rem' }}>Batch size efectivo = <strong style={{ color: '#f97316' }}>{batch}</strong></label>
        <input type="range" min="32" max="1024" step="32" value={batch}
          onChange={e => setBatch(parseInt(e.target.value))}
          style={{ width: 220, accentColor: '#f97316' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1rem', border: '1.5px solid #b4530930' }}>
          <strong style={{ color: '#f97316' }}>Linear Scaling Rule</strong>
          <p style={{ fontSize: '0.85rem', marginTop: '0.4rem', lineHeight: 1.6 }}>Se batch base = {baseBatch} usa LR = {baseLR}, então para batch = {batch}:</p>
          <p style={{ fontSize: '1rem', fontFamily: 'monospace', color: '#f97316', fontWeight: 700, marginTop: '0.5rem' }}>LR ≈ {scaledLR}</p>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>LR_novo = LR_base × (batch_novo / batch_base)</p>
        </div>
        <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1rem', border: '1.5px solid #ea580c30' }}>
          <strong style={{ color: '#f97316' }}>Gradient Accumulation</strong>
          <p style={{ fontSize: '0.85rem', marginTop: '0.4rem', lineHeight: 1.6 }}>Com mini-batch físico de 32 (limite de memória GPU), para simular batch={batch}:</p>
          <p style={{ fontSize: '1rem', fontFamily: 'monospace', color: '#f97316', fontWeight: 700, marginTop: '0.5rem' }}>{accumSteps} passo{accumSteps > 1 ? 's' : ''} de acumulação</p>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>Acumular gradientes de {accumSteps} mini-batches antes de actualizar os pesos (optimizer.step()).</p>
        </div>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <svg viewBox="0 0 540 90" style={{ maxWidth: '100%', height: 'auto' }}>
          {Array.from({ length: Math.min(accumSteps, 8) }).map((_, i) => {
            const w = 540 / Math.min(accumSteps, 8) - 8;
            const x = i * (540 / Math.min(accumSteps, 8)) + 4;
            return (
              <g key={i}>
                <rect x={x} y="10" width={w} height="40" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
                <text x={x + w / 2} y="34" textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="700">mini-batch {i + 1}</text>
              </g>
            );
          })}
          <line x1="270" y1="55" x2="270" y2="68" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrAcc)" />
          <defs>
            <marker id="arrAcc" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
            </marker>
          </defs>
          <rect x="170" y="68" width="200" height="20" rx="6" fill="rgba(180,83,9,0.15)" stroke="#b45309" strokeWidth="1.2" />
          <text x="270" y="82" textAnchor="middle" fontSize="10" fill="#b45309" fontWeight="700">optimizer.step() — 1 actualização</text>
        </svg>
      </div>
    </div>
  );
};

const TrainingCurvesDiagram = () => {
  const [sel, setSel] = useState(0);
  const cases = [
    {
      name: 'Treino saudável', color: '#f97316',
      train: [0.95, 0.6, 0.4, 0.28, 0.2, 0.15, 0.12, 0.1, 0.09, 0.085],
      val: [0.97, 0.65, 0.45, 0.32, 0.25, 0.21, 0.19, 0.18, 0.175, 0.17],
      desc: 'Ambas as curvas descem e convergem para valores próximos. Pequeno gap entre treino e validação é normal e saudável.',
    },
    {
      name: 'Overfitting', color: '#f97316',
      train: [0.95, 0.55, 0.32, 0.18, 0.1, 0.06, 0.035, 0.02, 0.012, 0.008],
      val: [0.97, 0.62, 0.42, 0.32, 0.28, 0.27, 0.29, 0.32, 0.36, 0.41],
      desc: 'A loss de treino continua a descer, mas a validação atinge um mínimo e depois sobe. O modelo está a memorizar o conjunto de treino. Sinal para early stopping, mais regularização ou mais dados/augmentation.',
    },
    {
      name: 'Underfitting', color: '#f97316',
      train: [0.95, 0.85, 0.78, 0.74, 0.71, 0.69, 0.68, 0.67, 0.665, 0.66],
      val: [0.97, 0.87, 0.80, 0.76, 0.74, 0.72, 0.71, 0.70, 0.695, 0.69],
      desc: 'Ambas as curvas ficam "presas" num valor alto, com pouca melhoria. O modelo não tem capacidade suficiente, foi treinado por poucas épocas, ou a LR é demasiado baixa / regularização demasiado forte.',
    },
    {
      name: 'LR demasiado alta', color: '#f97316',
      train: [0.95, 0.7, 1.1, 0.6, 1.4, 0.5, 0.9, 0.45, 1.2, 0.55],
      val: [0.97, 0.75, 1.15, 0.65, 1.45, 0.55, 0.95, 0.5, 1.25, 0.6],
      desc: 'A loss oscila violentamente ou explode (NaN) em vez de descer suavemente. A actualização dos pesos "ultrapassa" o mínimo a cada passo. Solução: reduzir a LR, adicionar warmup, ou usar gradient clipping.',
    },
  ];
  const c = cases[sel];
  const W = 480, H = 160, pad = 30;
  const maxY = Math.max(...c.train, ...c.val) * 1.1;
  const toPoints = (arr) => arr.map((v, i) => {
    const x = pad + (i / (arr.length - 1)) * (W - 2 * pad);
    const y = H - pad - (v / maxY) * (H - 2 * pad);
    return `${x},${y}`;
  }).join(' ');
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Curvas de Treino — Diagnóstico Visual</p>
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {cases.map((cs, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: sel === i ? cs.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? cs.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{cs.name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%', height: 'auto', background: 'var(--bg-primary)', borderRadius: 10, border: `1.5px solid ${c.color}30` }}>
        <line x1={pad} y1={H - pad} x2={W - pad} y2={H - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={pad} y1={pad / 2} x2={pad} y2={H - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <text x={W / 2} y={H - 6} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">épocas</text>
        <text x="10" y={H / 2} textAnchor="middle" fontSize="9" fill="var(--text-secondary)" transform={`rotate(-90 10 ${H / 2})`}>loss</text>
        <polyline points={toPoints(c.train)} fill="none" stroke={c.color} strokeWidth="2" />
        <polyline points={toPoints(c.val)} fill="none" stroke={c.color} strokeWidth="2" strokeDasharray="5,3" opacity="0.6" />
        <line x1={W - 150} y1="14" x2={W - 130} y2="14" stroke={c.color} strokeWidth="2" />
        <text x={W - 125} y="18" fontSize="9" fill="var(--text-secondary)">treino</text>
        <line x1={W - 80} y1="14" x2={W - 60} y2="14" stroke={c.color} strokeWidth="2" strokeDasharray="5,3" opacity="0.6" />
        <text x={W - 55} y="18" fontSize="9" fill="var(--text-secondary)">validação</text>
      </svg>
      <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', lineHeight: 1.6 }}>{c.desc}</p>
    </div>
  );
};

export default function CV5() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cv" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>MÓDULO 5</div>
        <h1 style={S.h1}>Treino de CNNs</h1>
        <p style={S.lead}>Uma arquitectura bem desenhada é necessária mas não suficiente. O treino de CNNs envolve dezenas de decisões críticas: como aumentar artificialmente os dados, como evitar overfitting, como ajustar a learning rate ao longo do treino, como tirar partido do hardware moderno (mixed precision, múltiplas GPUs) e como diagnosticar problemas a partir das curvas de treino.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. Backpropagation em CNNs</h2>
          <p style={S.p}>O treino de uma CNN usa o mesmo algoritmo de backpropagation que um MLP — a regra da cadeia aplicada camada a camada, do output para o input. A diferença é que o gradiente tem de fluir através das operações específicas de uma CNN: convoluções, pooling, normalização. Cada uma destas operações tem a sua própria "regra" de backward.</p>
          <p style={S.p}>Para uma camada conv, o gradiente em relação aos pesos do kernel é obtido por uma correlação cruzada entre o input (forward) e o gradiente que chega do output (∂L/∂output). O gradiente em relação ao input — necessário para continuar a propagar o erro para a camada anterior — é uma convolução transposta entre o gradiente do output e o kernel rodado 180°. Intuitivamente: o forward "espalha" informação do input para o output através do kernel; o backward faz o caminho inverso, espalhando o erro do output de volta para o input.</p>
          <p style={S.p}>O problema do <strong>vanishing gradient</strong> é mais severo em redes profundas: se cada camada multiplica o gradiente por um valor médio &lt; 1 (por exemplo, devido à derivada da sigmoid ou tanh, que satura perto de 0 ou 1), após 50 camadas o gradiente acumulado pode ser astronomicamente pequeno nas camadas iniciais — essas camadas praticamente não aprendem. O problema inverso, <strong>exploding gradient</strong>, acontece quando o factor multiplicativo é &gt; 1 e o gradiente cresce exponencialmente, levando a actualizações instáveis ou a NaN.</p>
          <p style={S.p}>As soluções modernas atacam este problema em várias frentes: ReLU (derivada constante = 1 para x&gt;0, sem saturação), Batch Normalization (mantém as activações numa escala controlada em cada camada), inicialização cuidadosa dos pesos (He/Kaiming init para ReLU, Xavier/Glorot para tanh) e, sobretudo, as <strong>skip connections</strong> das ResNets — o gradiente pode fluir directamente através da soma identidade, "saltando" camadas e evitando a multiplicação repetida por factores &lt; 1.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Componente</th><th style={S.th}>Gradiente em relação a...</th><th style={S.th}>Operação no backward</th></tr></thead>
              <tbody>
                {[
                  ['Conv layer', 'Kernel weights', 'Correlação entre input e gradiente do output'],
                  ['Conv layer', 'Input (para propagar)', 'Convolução transposta do gradiente com o kernel (rotação 180°)'],
                  ['MaxPool', 'Input', 'Gradiente flui só para o píxel máximo (switch units)'],
                  ['AvgPool', 'Input', 'Gradiente distribuído uniformemente por todos os píxeis da janela'],
                  ['ReLU', 'Input', 'Gradiente = 1 onde x&gt;0, = 0 onde x≤0 (subgradiente)'],
                  ['Batch Norm', 'γ, β e input', 'Normalização diferenciável com termos adicionais para média e variância'],
                  ['Skip connection', 'Input do bloco', 'Gradiente soma-se directamente (derivada da identidade = 1) — "auto-estrada" para o gradiente'],
                ].map(([c, g, o]) => (
                  <tr key={`${c}-${g}`}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{c}</td><td style={S.td}>{g}</td><td style={S.td}>{o}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Inicialização dos Pesos</h3>
          <p style={S.p}>A inicialização determina a escala inicial das activações e gradientes — uma má inicialização pode fazer com que o vanishing/exploding gradient aconteça logo no primeiro passo, antes de qualquer treino útil ocorrer.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Esquema</th><th style={S.th}>Ideia</th><th style={S.th}>Usar com</th></tr></thead>
              <tbody>
                {[
                  ['Xavier / Glorot', 'Variância dos pesos escalada com 1/(fan_in + fan_out), para manter a variância das activações constante entre camadas.', 'Tanh, sigmoid'],
                  ['He / Kaiming', 'Variância escalada com 2/fan_in — compensa o facto de a ReLU "matar" metade das activações (as negativas).', 'ReLU, GELU, Leaky ReLU (default em CNNs modernas)'],
                  ['Zero-init da última camada de cada bloco residual', 'Inicializar γ=0 na BN final de cada bloco, fazendo o bloco começar como identidade pura.', 'ResNets muito profundas — estabiliza o início do treino'],
                ].map(([s, i, w]) => (
                  <tr key={s}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{s}</td><td style={S.td}>{i}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{w}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.note}>Gradient Clipping: quando o gradiente explode, uma técnica simples é "cortar" a sua norma (gradient norm clipping) para um valor máximo (e.g., 1.0 ou 5.0) antes da actualização. Muito comum em RNNs, mas também usado em CNNs muito profundas e em transformers de visão.</div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Learning Rate e Schedules</h2>
          <p style={S.p}>A learning rate (LR) é o hiperparâmetro mais crítico no treino de CNNs — controla o tamanho do "passo" dado na direcção oposta ao gradiente em cada actualização. Demasiado alta: o treino diverge ou oscila violentamente (loss explode ou nunca estabiliza). Demasiado baixa: convergência extremamente lenta, e o optimizador pode ficar preso em mínimos locais ou platôs ruidosos. A prática moderna quase nunca usa uma LR fixa — usa-se um <strong>schedule</strong> que varia a LR ao longo do treino.</p>
          <p style={S.p}>A intuição geral é: começar com uma LR razoavelmente alta para explorar rapidamente o espaço de parâmetros e sair de regiões iniciais ruidosas; depois, reduzir gradualmente a LR para permitir um ajuste fino e uma convergência estável perto de um bom mínimo. Reduzir a LR demasiado cedo pode prender o modelo num mínimo subóptimo; reduzir tarde demais desperdiça tempo de computação numa fase em que o modelo já não está a melhorar de forma estável.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Schedule</th><th style={S.th}>Como funciona</th><th style={S.th}>Quando usar</th></tr></thead>
              <tbody>
                {[
                  ['Step Decay', 'Reduz LR por factor (e.g., 0.1) a cada N épocas.', 'Simples e eficaz. Baseline clássico (ResNet original usa step decay).'],
                  ['Cosine Annealing', 'LR segue metade de um cosseno: alta no início, desce suavemente até zero.', 'Estado da arte em muitas tasks. Sem escolher pontos de redução. Muito usado com ViT.'],
                  ['Warmup + Cosine', 'LR começa muito baixa, aumenta linearmente (warmup), depois cosseno.', 'Essencial para transformers e redes muito grandes. Evita instabilidade inicial.'],
                  ['Cyclic LR (1cycle)', 'LR e momentum oscilam entre mínimo e máximo em ciclos. Pode treinar em muito menos épocas.', 'Treino muito rápido (fastai). 1 ciclo completo normalmente suficiente.'],
                  ['ReduceLROnPlateau', 'Reduz LR quando a métrica de validação estagna.', 'Simples, não requer agendar à mão. Bom para fine-tuning.'],
                  ['Cosine with Warm Restarts (SGDR)', 'Cosine annealing repetido em ciclos, voltando à LR inicial no início de cada ciclo.', 'Pode escapar de mínimos locais. Permite obter "snapshots" para ensembles.'],
                ].map(([s, h, w]) => (
                  <tr key={s}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{s}</td><td style={S.td}>{h}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{w}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.note}>Warmup é essencial para transformers: começar com LR alta pode destruir os pesos pré-treinados ou causar instabilidade nas primeiras iterações (estatísticas de Adam ainda não "aqueceram"). Tipicamente 5-10% das épocas/passos totais são warmup, depois cosine decay até zero ou um valor residual pequeno.</div>

          <h3 style={S.h3}>LR Range Test</h3>
          <p style={S.p}>Em vez de adivinhar a LR óptima, o "LR Range Test" (popularizado pelo fastai) treina o modelo durante uma fracção de época, aumentando a LR exponencialmente desde um valor muito baixo (e.g., 1e-7) até um valor muito alto (e.g., 10), registando a loss a cada passo. A LR óptima encontra-se geralmente onde a loss desce mais rapidamente, pouco antes de começar a divergir — esse ponto é frequentemente usado como LR máxima num schedule 1cycle.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Data Augmentation</h2>
          <p style={S.p}>A data augmentation é a técnica de regularização mais eficaz para imagens: aplica transformações aleatórias às imagens durante o treino, aumentando artificialmente a diversidade do dataset sem necessitar de mais dados rotulados. As transformações são aplicadas on-the-fly em cada época — a rede nunca vê exactamente a mesma imagem duas vezes, o que reduz drasticamente o overfitting, especialmente quando o dataset é pequeno.</p>
          <p style={S.p}>Um princípio fundamental: a augmentation deve preservar a relação entre a imagem e o label. Se uma transformação muda o significado semântico da imagem (por exemplo, espelhar uma imagem com texto, ou rodar 180° um dígito "6" transformando-o num "9"), ela introduz ruído nos labels e pode prejudicar o treino em vez de ajudar. Por isso, a escolha das augmentations deve ser sempre informada pelo domínio da tarefa.</p>

          <AugmentationExplorer />

          <h3 style={S.h3}>Test-Time Augmentation (TTA)</h3>
          <p style={S.p}>A augmentation não precisa de ficar confinada ao treino. Em <strong>Test-Time Augmentation</strong>, durante a inferência geram-se várias versões aumentadas da mesma imagem de teste (e.g., flip horizontal, vários crops), faz-se a previsão para cada uma, e combina-se (normalmente por média) as previsões finais. Isto melhora tipicamente a accuracy em 0.5-1% à custa de inferência mais lenta (várias passagens forward por imagem) — um trade-off comum em competições e em aplicações onde a precisão é mais crítica que a latência.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Regularização</h2>
          <p style={S.p}>Além da data augmentation, existem outras técnicas de regularização que reduzem o overfitting em CNNs — todas partilham o objectivo de impedir que o modelo memorize particularidades do conjunto de treino que não generalizam para dados novos.</p>

          <RegularizationExplorer />

          <h3 style={S.h3}>Como Combinar Técnicas</h3>
          <p style={S.p}>Na prática, as técnicas de regularização não são mutuamente exclusivas — são tipicamente combinadas. Um "recipe" moderno comum para treinar uma CNN em ImageNet do zero pode incluir: data augmentation forte (RandAugment + Mixup/CutMix), label smoothing (ε=0.1), weight decay (AdamW com λ≈0.05), e por vezes stochastic depth em redes muito profundas. O efeito combinado destas técnicas é normalmente maior do que a soma dos efeitos individuais — mas também aumenta o número de épocas necessárias para convergir, porque o sinal de gradiente é mais "ruidoso" em cada passo.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Optimizadores</h2>
          <p style={S.p}>O optimizador determina como os gradientes calculados pelo backpropagation são usados para actualizar os pesos. A escolha do optimizador interage fortemente com a learning rate, o batch size e o schedule — não existe uma combinação universalmente óptima, mas há padrões bem estabelecidos consoante a arquitectura.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Optimizador</th><th style={S.th}>Mecanismo</th><th style={S.th}>Uso em CV</th></tr></thead>
              <tbody>
                {[
                  ['SGD + Momentum', 'Gradiente com acumulação de momento (tipicamente 0.9). Simples mas muito eficaz.', 'Estado da arte para ResNet em ImageNet. Requer warmup e tuning cuidadoso.'],
                  ['Adam', 'Momento adaptativo por parâmetro (m₁, m₂). LR efectiva normalizada pela variância do gradiente.', 'Convergência rápida. Muito usado em fine-tuning e transformers. Generalização ligeiramente pior que SGD em CNNs.'],
                  ['AdamW', 'Adam com weight decay separado (não acoplado ao gradiente adaptativo).', 'Padrão para ViT e modelos grandes. Corrige o bug de weight decay do Adam original.'],
                  ['RMSprop', 'Média móvel exponencial dos quadrados dos gradientes para normalizar a LR por parâmetro.', 'Antecessor do Adam. Ainda usado nalgumas arquitecturas legacy (e.g., Inception).'],
                  ['LARS / LAMB', 'Learning rate adaptativa por camada (escala com a norma dos pesos / norma do gradiente).', 'Treino distribuído em larga escala (ImageNet em minutos com 1000+ GPUs, batches de 32k+).'],
                ].map(([o, m, u]) => (
                  <tr key={o}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{o}</td><td style={S.td}>{m}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{u}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.note}>Adam vs SGD em CNNs: o Adam converge mais rápido e é mais robusto à escolha inicial da LR, mas tende a generalizar pior em redes convolucionais clássicas — o "gap" de generalização entre treino e validação costuma ser maior. Para ResNets/EfficientNets, SGD+momentum continua a ser a escolha mais comum em treino do zero. Para ViT e modelos baseados em attention, AdamW é praticamente universal.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>6. Mixed Precision Training</h2>
          <p style={S.p}>O treino tradicional representa todos os números (pesos, activações, gradientes) em FP32 (32 bits). O <strong>mixed precision training</strong> usa formatos de 16 bits (FP16 ou BF16) para a maioria das operações — especialmente as multiplicações de matrizes nas convoluções e camadas lineares — mantendo certas operações sensíveis (como a acumulação de gradientes e a actualização dos pesos) em FP32. O resultado: treino até 2-3× mais rápido e até metade da memória GPU usada, com perda de accuracy mínima ou nula.</p>

          <PrecisionExplorer />

          <h3 style={S.h3}>Porque Acelera nas GPUs Modernas</h3>
          <p style={S.p}>As GPUs NVIDIA desde a arquitectura Volta (V100, 2017) incluem unidades de hardware dedicadas chamadas <strong>Tensor Cores</strong>, que executam multiplicações de matrizes pequenas (e.g., 4×4) em FP16/BF16 a um throughput muitas vezes superior ao das unidades CUDA "normais" em FP32. Como as convoluções e as camadas fully-connected são, no fundo, sequências de multiplicações de matrizes, usar FP16/BF16 permite tirar partido directo destas unidades — o ganho de velocidade tipicamente situa-se entre 1.5× e 3×, dependendo da arquitectura e do tamanho do modelo. Além disso, tensores de 16 bits ocupam metade do espaço em memória, permitindo batches maiores ou modelos maiores na mesma GPU, e reduzindo o tempo gasto a mover dados entre a memória e os núcleos de computação (bandwidth-bound operations).</p>

          <h3 style={S.h3}>Loss Scaling</h3>
          <p style={S.p}>O problema do FP16 é o seu expoente pequeno (5 bits): muitos gradientes em redes profundas têm magnitudes muito pequenas (e.g., 1e-7) que, em FP16, fazem <strong>underflow</strong> e tornam-se zero — perdendo-se completamente a informação do gradiente. A solução é o <strong>loss scaling</strong>: multiplica-se a loss por um factor grande (e.g., 1024 ou 65536) antes do backward, o que escala todos os gradientes proporcionalmente para uma gama representável em FP16. Antes da actualização dos pesos, os gradientes são divididos de volta pelo mesmo factor (e os pesos mestre permanecem em FP32).</p>
          <p style={S.p}>O <strong>dynamic loss scaling</strong> automatiza este processo: começa com um factor de escala alto, e se em algum passo aparecerem valores Inf/NaN nos gradientes (overflow), reduz o factor para metade e salta essa actualização; se muitos passos consecutivos correrem bem, aumenta o factor gradualmente. Frameworks modernos (PyTorch AMP, NVIDIA Apex) implementam isto automaticamente — o utilizador raramente precisa de gerir o factor manualmente.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>FP32</th><th style={S.th}>FP16 (com loss scaling)</th><th style={S.th}>BF16</th></tr></thead>
              <tbody>
                {[
                  ['Memória por valor', '4 bytes', '2 bytes', '2 bytes'],
                  ['Velocidade (Tensor Cores)', 'Baseline', '~2-3× mais rápido', '~2-3× mais rápido'],
                  ['Range dinâmico', 'Muito grande', 'Pequeno — risco de overflow/underflow', 'Igual ao FP32 — sem loss scaling necessário'],
                  ['Precisão por valor', 'Alta (~7 dígitos)', 'Baixa (~3 dígitos)', 'Muito baixa (~2 dígitos)'],
                  ['Hardware necessário', 'Qualquer GPU', 'Volta+ (Tensor Cores)', 'Ampere+ / TPU'],
                ].map(([a, f32, f16, bf16]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{a}</td><td style={S.td}>{f32}</td><td style={S.td}>{f16}</td><td style={S.td}>{bf16}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.note}>Na prática, "mixed precision" é hoje quase um default — basta activar uma flag (e.g., <em>autocast</em> em PyTorch) e o framework escolhe automaticamente quais operações correr em 16 bits e quais manter em 32 bits (e.g., somas/reduções de muitos termos, que são mais sensíveis a erros de arredondamento, ficam em FP32).</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>7. Gradient Accumulation e Efeitos do Batch Size</h2>
          <p style={S.p}>O batch size — o número de exemplos usados para calcular cada gradiente antes de uma actualização dos pesos — não é apenas um detalhe de implementação. Afecta directamente a estabilidade do gradiente (batches maiores dão estimativas menos ruidosas da direcção de descida), a quantidade de memória GPU necessária, e — crucialmente — a learning rate apropriada.</p>

          <h3 style={S.h3}>Linear Scaling Rule</h3>
          <p style={S.p}>Quando se aumenta o batch size por um factor k, o gradiente médio calculado sobre o batch tem variância k× menor — ou seja, é uma estimativa mais "limpa" da direcção verdadeira do gradiente. Isto significa que se pode dar um passo k× maior sem comprometer a estabilidade. A <strong>linear scaling rule</strong> (popularizada pelo paper "Accurate, Large Minibatch SGD" do Facebook) propõe: ao multiplicar o batch size por k, multiplicar também a learning rate por k, mantendo todos os outros hiperparâmetros fixos. Esta regra funciona bem para batches até alguns milhares de exemplos; para batches muito maiores (dezenas de milhares), são necessárias técnicas adicionais como warmup mais longo e optimizadores especializados (LARS/LAMB).</p>

          <h3 style={S.h3}>Gradient Accumulation</h3>
          <p style={S.p}>Nem sempre é possível caber o batch size desejado na memória da GPU — modelos grandes ou imagens de alta resolução consomem muita memória por exemplo. O <strong>gradient accumulation</strong> resolve isto: em vez de actualizar os pesos a cada mini-batch, acumulam-se (somam-se) os gradientes de vários mini-batches consecutivos, e só se chama o passo do optimizador (e se zeram os gradientes) após N mini-batches. O efeito é matematicamente equivalente a treinar com um batch size N× maior, mas usando apenas a memória de um mini-batch de cada vez — ao custo de N× mais passos forward/backward para a mesma actualização (ou seja, é mais lento em tempo de relógio, mas permite simular batches que não caberiam na GPU).</p>

          <BatchSizeExplorer />

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Batch size</th><th style={S.th}>Vantagens</th><th style={S.th}>Desvantagens</th></tr></thead>
              <tbody>
                {[
                  ['Pequeno (8-32)', 'Gradiente mais "ruidoso" pode ajudar a escapar de mínimos locais; menos memória; mais actualizações por época.', 'Treino mais lento em GPUs modernas (subutiliza paralelismo); estimativa de gradiente mais instável.'],
                  ['Médio (64-256)', 'Bom equilíbrio entre estabilidade do gradiente e utilização da GPU. Range mais comum em prática.', '—'],
                  ['Grande (512+)', 'Estimativa de gradiente muito estável; tira pleno partido de GPUs/clusters; menos passos por época.', 'Pode generalizar pior ("generalization gap") se a LR não for ajustada; requer warmup mais cuidadoso e optimizadores especiais (LARS/LAMB) em escalas extremas.'],
                ].map(([b, v, d]) => (
                  <tr key={b}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{b}</td><td style={S.td}>{v}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>8. Curriculum Learning e Progressive Resizing</h2>
          <p style={S.p}>Tal como um aluno aprende melhor quando os conceitos são apresentados por ordem crescente de dificuldade, redes neuronais podem treinar de forma mais eficaz e estável quando expostas a exemplos "fáceis" antes dos "difíceis", ou a versões simplificadas do problema antes da versão completa. Esta família de técnicas chama-se <strong>curriculum learning</strong>.</p>

          <h3 style={S.h3}>Progressive Resizing</h3>
          <p style={S.p}>Uma aplicação muito prática em visão por computador é o <strong>progressive resizing</strong> (popularizado pela biblioteca fastai e usado também na família EfficientNet): começar o treino com imagens de resolução pequena (e.g., 128×128), e ir aumentando gradualmente a resolução ao longo do treino (e.g., para 224×224, depois 320×320), normalmente mantendo o mesmo modelo e os mesmos pesos entre fases.</p>
          <p style={S.p}>As vantagens são múltiplas: (1) com imagens pequenas, cada batch processa-se muito mais rápido e cabe mais exemplos por batch — as primeiras épocas de treino, que servem para aprender features de baixo nível (bordas, texturas, cores), tornam-se muito mais baratas; (2) o modelo aprende uma representação inicial razoável que serve de boa inicialização para a fase de alta resolução, reduzindo o número total de épocas necessárias; (3) treinar inicialmente em baixa resolução tem um efeito regularizador semelhante a uma forma de augmentation, porque o modelo é forçado a generalizar a partir de menos detalhe.</p>

          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Progressive Resizing — Fases de Treino</p>
            <svg viewBox="0 0 540 110" style={{ maxWidth: '100%', height: 'auto' }}>
              {[
                [30, 'Fase 1\n128×128\nmais épocas, batch grande', '#f97316'],
                [220, 'Fase 2\n192×192\nmenos épocas', '#f97316'],
                [400, 'Fase 3\n224-320px\nfine-tuning final', '#f97316'],
              ].map(([x, label, color], i) => (
                <g key={i}>
                  <rect x={x} y="10" width="140" height="80" rx="10" fill={`${color}20`} stroke={color} strokeWidth="1.5" />
                  {label.split('\n').map((l, li) => (
                    <text key={li} x={x + 70} y={32 + li * 16} textAnchor="middle" fontSize={li === 0 ? 11 : 9} fontWeight={li === 0 ? 700 : 500} fill={color}>{l}</text>
                  ))}
                </g>
              ))}
              <line x1="170" y1="50" x2="218" y2="50" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrPR)" />
              <line x1="360" y1="50" x2="398" y2="50" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrPR)" />
              <defs>
                <marker id="arrPR" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
                </marker>
              </defs>
              <text x="270" y="105" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">tempo de treino →</text>
            </svg>
          </div>

          <h3 style={S.h3}>Outras Formas de Curriculum</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Estratégia</th><th style={S.th}>Como funciona</th></tr></thead>
              <tbody>
                {[
                  ['Sample difficulty ordering', 'Ordenar os exemplos de treino por uma medida de "dificuldade" (e.g., loss inicial alta = difícil) e apresentá-los do mais fácil ao mais difícil ao longo das épocas.'],
                  ['Augmentation curriculum', 'Aumentar progressivamente a intensidade/magnitude das augmentations ao longo do treino (começar com transformações suaves, terminar com RandAugment de magnitude alta).'],
                  ['Self-paced learning', 'O próprio modelo, durante o treino, decide quais exemplos incluir no próximo batch com base na sua confiança actual — exemplos com loss muito alta são temporariamente ignorados.'],
                ].map(([s, h]) => (
                  <tr key={s}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{s}</td><td style={S.td}>{h}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>9. Monitorização e Debugging do Treino</h2>
          <p style={S.p}>Treinar uma CNN sem monitorizar as métricas certas é como conduzir de olhos fechados. As curvas de loss de treino e validação ao longo das épocas são a ferramenta de diagnóstico mais importante — diferentes "formas" destas curvas indicam problemas muito diferentes, e exigem soluções diferentes.</p>

          <TrainingCurvesDiagram />

          <h3 style={S.h3}>Outras Métricas a Observar</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Métrica</th><th style={S.th}>O que indica</th><th style={S.th}>Sinal de alerta</th></tr></thead>
              <tbody>
                {[
                  ['Norma do gradiente (por camada)', 'Magnitude do "sinal de aprendizagem" que chega a cada camada.', 'Se for ~0 nas primeiras camadas, há vanishing gradient. Se explodir (>>1), há exploding gradient — considerar gradient clipping.'],
                  ['Learning rate vs loss (LR range test)', 'Sensibilidade da loss à LR — usado para escolher a LR óptima antes do treino completo.', 'Loss explode muito antes do esperado → modelo/inicialização instável.'],
                  ['Distribuição das activações por camada', 'Se as activações estão "vivas" (não saturadas em 0 ou em valores extremos).', 'Muitas activações ReLU sempre a zero → "dying ReLU". Activações com variância crescente entre camadas → possível instabilidade.'],
                  ['Accuracy/F1 de treino vs validação', 'Desempenho real na tarefa, complementa a loss (que pode não ser directamente interpretável).', 'Gap grande entre treino e validação → overfitting, mesmo que as losses pareçam "ok".'],
                  ['Tempo por época / utilização da GPU', 'Eficiência computacional — se a GPU está subutilizada, o treino é "data loading bound" não "compute bound".', 'GPU a &lt;50% de utilização → o data loader é o gargalo (aumentar num_workers, usar formatos de imagem mais leves).'],
                ].map(([m, o, w]) => (
                  <tr key={m}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{m}</td><td style={S.td}>{o}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{w}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Checklist de Debugging</h3>
          <p style={S.p}>Quando um modelo não treina como esperado, é útil seguir uma sequência sistemática de verificações: (1) confirmar que o modelo consegue fazer <em>overfit</em> a um batch muito pequeno (e.g., 10 imagens) — se não conseguir atingir loss ≈ 0 num conjunto trivial, há um bug de implementação, não um problema de hiperparâmetros; (2) verificar se a loss inicial é consistente com a esperada (e.g., para classificação com K classes e inicialização aleatória, a loss inicial deve ser ≈ ln(K)); (3) verificar a normalização dos inputs (média/desvio-padrão correctos); (4) verificar se os gradientes estão a fluir (norma &gt; 0 em todas as camadas); (5) só depois ajustar hiperparâmetros como LR, batch size e regularização.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>10. Treino Distribuído</h2>
          <p style={S.p}>Modelos modernos e datasets grandes frequentemente excedem a capacidade de uma única GPU — seja em memória, seja em tempo de treino aceitável. O treino distribuído divide o trabalho por múltiplas GPUs (ou múltiplas máquinas, cada uma com várias GPUs), permitindo treinar modelos maiores e/ou mais rapidamente.</p>

          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Data Parallelism — Gradient All-Reduce</p>
            <svg viewBox="0 0 540 190" style={{ maxWidth: '100%', height: 'auto' }}>
              {[0, 1, 2, 3].map(i => {
                const x = 30 + i * 130;
                return (
                  <g key={i}>
                    <rect x={x} y="10" width="100" height="60" rx="10" fill="rgba(180,83,9,0.12)" stroke="#b45309" strokeWidth="1.5" />
                    <text x={x + 50} y="32" textAnchor="middle" fontSize="11" fontWeight="700" fill="#b45309">GPU {i}</text>
                    <text x={x + 50} y="48" textAnchor="middle" fontSize="9" fill="#b45309">cópia do modelo</text>
                    <text x={x + 50} y="62" textAnchor="middle" fontSize="9" fill="#b45309">mini-batch {i + 1}/4</text>
                    <line x1={x + 50} y1="70" x2={x + 50} y2="100" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrDist)" />
                    <text x={x + 50} y="115" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">grad ∇{i}</text>
                  </g>
                );
              })}
              <defs>
                <marker id="arrDist" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
                </marker>
              </defs>
              <rect x="120" y="135" width="300" height="35" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
              <text x="270" y="157" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">All-Reduce: ∇_médio = (∇0+∇1+∇2+∇3)/4</text>
              {[0, 1, 2, 3].map(i => {
                const x = 30 + i * 130 + 50;
                return <line key={i} x1={x} y1="120" x2={x} y2="130" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrDist)" />;
              })}
              <text x="270" y="185" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">cada GPU actualiza a sua cópia com ∇_médio — todas ficam sincronizadas</text>
            </svg>
          </div>

          <h3 style={S.h3}>Data Parallelism vs Model Parallelism</h3>
          <p style={S.p}>Existem duas estratégias fundamentalmente diferentes para distribuir o treino, que podem também ser combinadas.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Estratégia</th><th style={S.th}>Como funciona</th><th style={S.th}>Quando usar</th></tr></thead>
              <tbody>
                {[
                  ['Data Parallelism', 'Cada GPU mantém uma cópia completa do modelo, mas processa um sub-conjunto diferente do batch (mini-batch). Após o backward, os gradientes de todas as GPUs são combinados (média) via all-reduce, e cada GPU actualiza a sua cópia de forma idêntica — todas ficam sincronizadas.', 'Caso mais comum. Funciona bem quando o modelo cabe na memória de uma GPU mas o dataset/batch desejado é grande. PyTorch DistributedDataParallel (DDP) é a implementação padrão.'],
                  ['Model Parallelism', 'O próprio modelo é dividido entre GPUs — diferentes camadas (ou diferentes partes de uma camada) ficam em GPUs diferentes. Cada GPU processa o mesmo batch, mas só uma parte do modelo.', 'Necessário quando o modelo é tão grande que nem cabe numa única GPU (modelos com milhares de milhões de parâmetros). Mais complexo de implementar; comunicação entre GPUs ocorre dentro do forward/backward.'],
                  ['Pipeline Parallelism', 'Variante do model parallelism: divide o modelo em "estágios" sequenciais entre GPUs, processando vários micro-batches em pipeline para manter todas as GPUs ocupadas.', 'Combina-se frequentemente com data e model parallelism em treinos de modelos muito grandes (3D parallelism).'],
                ].map(([s, h, w]) => (
                  <tr key={s}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{s}</td><td style={S.td}>{h}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{w}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Batch Size Efectivo Cresce com o Número de GPUs</h3>
          <p style={S.p}>Em data parallelism, se cada GPU processa um mini-batch de tamanho B e existem N GPUs, o <strong>batch size efectivo</strong> é N×B — o gradiente all-reduce é, na prática, equivalente a calcular o gradiente sobre um batch de tamanho N×B numa única GPU (assumindo all-reduce com média). Isto significa que treinar com mais GPUs não é "grátis" do ponto de vista dos hiperparâmetros: a linear scaling rule (secção 7) aplica-se directamente — ao duplicar o número de GPUs, duplica-se o batch size efectivo, e a learning rate deve ser ajustada proporcionalmente (com warmup adequado). É também por isto que treinos em escala massiva (centenas ou milhares de GPUs) recorrem a optimizadores como LARS/LAMB, desenhados especificamente para permanecerem estáveis com batch sizes efectivos muito grandes (dezenas de milhares de exemplos).</p>

          <div style={S.note}>Comunicação é o gargalo: à medida que o número de GPUs aumenta, o tempo gasto a sincronizar gradientes (all-reduce) pode dominar o tempo total — especialmente se as GPUs estão em máquinas diferentes ligadas por rede (em vez de NVLink dentro da mesma máquina). Técnicas como gradient compression, comunicação assíncrona, e sobreposição de comunicação com computação (overlap) são usadas para mitigar este efeito em clusters grandes.</div>
        </div>

        
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>11. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
            <li>Backprop em CNNs: gradiente flui por conv (convolução transposta), maxpool (só para o máximo), ReLU (máscara binária); skip connections evitam vanishing gradient em redes profundas.</li>
            <li>Learning rate schedule: cosine annealing é o padrão. Para transformers, sempre warmup antes do decay. LR range test ajuda a escolher a LR máxima.</li>
            <li>Data augmentation: a técnica de regularização mais eficaz. Random flip + crop + color jitter é o mínimo; RandAugment + Mixup/CutMix para estado da arte. TTA melhora a inferência.</li>
            <li>Regularização combinada (dropout, weight decay, label smoothing, stochastic depth) tem efeito superior à soma das partes — mas exige mais épocas para convergir.</li>
            <li>Optimizador: SGD+momentum para CNNs clássicas; AdamW para transformers e fine-tuning.</li>
            <li>Mixed precision (FP16/BF16) acelera 1.5-3× e poupa memória ao usar Tensor Cores; FP16 precisa de loss scaling, BF16 normalmente não.</li>
            <li>Linear scaling rule: LR ∝ batch size. Gradient accumulation simula batches grandes com memória limitada.</li>
            <li>Progressive resizing: treinar em baixa resolução primeiro acelera o treino e melhora a generalização.</li>
            <li>Diagnóstico pelas curvas de loss: overfitting (gap treino/val cresce), underfitting (ambas estagnam alto), LR alta (oscilação/divergência).</li>
            <li>Treino distribuído: data parallelism (cópias do modelo + gradient all-reduce) é o caso comum; model/pipeline parallelism para modelos que não cabem numa GPU. Batch size efectivo cresce com o nº de GPUs.</li>
          </ul>
          </div>
        </div>
        </div>
      </div>
      );
}
