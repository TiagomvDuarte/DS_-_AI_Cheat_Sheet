import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { modules } from './Cybersecurity';

const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  highlight: { background: `${color}12`, border: `1px solid ${color}30`, borderRadius: 8, padding: '0.9rem 1.1rem', marginTop: '0.8rem', fontSize: '0.93rem', color: 'var(--text-primary)', lineHeight: 1.7 },
  note: { background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 8, padding: '0.8rem 1rem', marginTop: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const mod = modules[3];

export default function CYB4() {
  return (
    <div style={S.page}>
      <Link to="/cybersecurity" style={S.back}><ArrowLeft size={16} /> Voltar ao curso</Link>
      <span style={S.badge}>MÓDULO {mod.num}</span>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Síntese de Faces com GANs</h2>
        <p style={S.p}>Deepfakes utilizam GANs (Generative Adversarial Networks) para sintetizar faces hiperrealistas. O processo de face swapping codifica a face alvo num espaço latente e descodifica-a sobre cada fotograma do vídeo fonte. O resultado mantém as expressões e movimentos do vídeo original com a identidade da pessoa alvo.</p>
        <p style={S.p}>StyleGAN2 (NVIDIA, 2020) separou os atributos de alto nível — idade, pose, género — das texturas finas como poros da pele e cabelo, usando uma arquitectura style-based com redes de mapeamento. Gera faces fotorrealistas a 1024×1024 px com coerência global e local sem precedente. FaceSwap e DeepFaceLab são ferramentas open-source acessíveis a não-especialistas que automatizam o pipeline completo de treino e swap.</p>
        <p style={S.p}>O benchmark FaceForensics++ contém 1000 vídeos originais com manipulações geradas por quatro métodos — Deepfakes, Face2Face, FaceShifter e NeuralTextures — em três níveis de compressão (raw, c23, c40), sendo o standard de avaliação de detectores mais utilizado na literatura.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 320" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="320" fill="var(--bg-secondary)" rx="10" />

            {/* Generator box */}
            <rect x="30" y="60" width="160" height="200" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="110" y="85" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">GENERATOR</text>

            {/* Noise z input */}
            <rect x="45" y="100" width="130" height="28" rx="5" fill="rgba(249,115,22,0.18)" />
            <text x="110" y="118" textAnchor="middle" fill="#fb923c" fontSize="10">ruído latente z</text>

            {/* StyleGAN2 layers */}
            <rect x="45" y="142" width="130" height="20" rx="4" fill="rgba(249,115,22,0.12)" />
            <text x="110" y="155" textAnchor="middle" fill="#fb923c" fontSize="9">Mapping Network</text>
            <rect x="45" y="168" width="130" height="20" rx="4" fill="rgba(249,115,22,0.12)" />
            <text x="110" y="181" textAnchor="middle" fill="#fb923c" fontSize="9">Synthesis 4×4</text>
            <rect x="45" y="194" width="130" height="20" rx="4" fill="rgba(249,115,22,0.12)" />
            <text x="110" y="207" textAnchor="middle" fill="#fb923c" fontSize="9">Progressive 1024×1024</text>

            {/* Fake face output */}
            <rect x="55" y="222" width="110" height="24" rx="5" fill="#ea580c" />
            <text x="110" y="237" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="600">face sintética</text>

            {/* Arrow G → D */}
            <line x1="190" y1="160" x2="270" y2="160" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrowPurple)" />
            <text x="230" y="152" textAnchor="middle" fill="#fb923c" fontSize="9">fake</text>

            {/* Real face input */}
            <rect x="270" y="60" width="100" height="40" rx="6" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="1" />
            <text x="320" y="83" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="600">face real</text>
            <line x1="320" y1="100" x2="320" y2="130" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
            <text x="300" y="118" textAnchor="middle" fill="#fb923c" fontSize="9">real</text>

            {/* Discriminator box */}
            <rect x="270" y="130" width="160" height="120" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="350" y="152" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">DISCRIMINATOR</text>
            <rect x="285" y="162" width="130" height="20" rx="4" fill="rgba(249,115,22,0.15)" />
            <text x="350" y="175" textAnchor="middle" fill="#fb923c" fontSize="9">feature extraction CNN</text>
            <rect x="285" y="188" width="130" height="20" rx="4" fill="rgba(249,115,22,0.15)" />
            <text x="350" y="201" textAnchor="middle" fill="#fb923c" fontSize="9">binary classifier</text>
            <rect x="310" y="214" width="80" height="24" rx="5" fill="#ea580c" />
            <text x="350" y="229" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="600">P(real/fake)</text>

            {/* Output arrows */}
            <line x1="430" y1="226" x2="510" y2="226" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrowCyan)" />

            {/* Loss feedback */}
            <rect x="510" y="60" width="150" height="200" rx="8" fill="#f59e0b10" stroke="#f59e0b" strokeWidth="1" />
            <text x="585" y="82" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">TRAINING LOOP</text>
            <text x="585" y="102" textAnchor="middle" fill="#fbbf24" fontSize="9">Loss Discriminador:</text>
            <text x="585" y="118" textAnchor="middle" fill="#fbbf24" fontSize="9">-log D(real) - log(1-D(G(z)))</text>
            <text x="585" y="142" textAnchor="middle" fill="#fbbf24" fontSize="9">Loss Gerador:</text>
            <text x="585" y="158" textAnchor="middle" fill="#fbbf24" fontSize="9">-log D(G(z))</text>

            <rect x="525" y="174" width="120" height="22" rx="4" fill="rgba(249,115,22,0.15)" />
            <text x="585" y="188" textAnchor="middle" fill="#fb923c" fontSize="9">StyleGAN2 módulo W+</text>
            <rect x="525" y="202" width="120" height="22" rx="4" fill="rgba(249,115,22,0.15)" />
            <text x="585" y="216" textAnchor="middle" fill="#fb923c" fontSize="9">alta frequência separada</text>
            <rect x="525" y="230" width="120" height="22" rx="4" fill="rgba(249,115,22,0.15)" />
            <text x="585" y="244" textAnchor="middle" fill="#fb923c" fontSize="9">1024×1024 px output</text>

            {/* Feedback arrow from loss back to G */}
            <path d="M510 160 Q480 300 190 220" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="5,3" markerEnd="url(#arrowOrange)" />
            <text x="380" y="275" textAnchor="middle" fill="#fbbf24" fontSize="9">backpropagation gradiente</text>

            <defs>
              <marker id="arrowPurple" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
              </marker>
              <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
              </marker>
              <marker id="arrowCyan" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
              </marker>
              <marker id="arrowOrange" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.highlight}>
          O StyleGAN2 introduziu a <strong>perceptual path length regularization</strong> que força o espaço latente a ser localmente linear — permitindo interpolações suaves entre identidades. A separação de atributos de alto nível (pose, idade) e detalhes finos (textura de pele) numa arquitectura de estilos em cascata é o avanço técnico central que produziu faces fotorrealistas indistinguíveis de fotografia real a olho nu.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Diffusion Models para Síntese</h2>
        <p style={S.p}>Os diffusion models (DDPM, 2020; Stable Diffusion, 2022) ultrapassaram as GANs em qualidade de síntese e diversidade. O processo forward adiciona ruído Gaussiano progressivamente à imagem em T=1000 passos até obter ruído puro. O processo reverse aprende a denoising step-by-step guiado por um text prompt, convergindo para uma imagem coerente com a descrição.</p>
        <p style={S.p}>Midjourney, DALL-E 3 e Stable Diffusion XL são usados para criar perfis fotográficos sintéticos em contas falsas de redes sociais a escala industrial. A síntese de voz evoluiu igualmente — ElevenLabs e VALL-E (Microsoft) clonam uma voz a partir de apenas 3 segundos de áudio, reproduzindo timbre, prosódia e sotaque com fidelidade suficiente para fraudes telefónicas.</p>
        <p style={S.p}>A síntese de vídeo atinge agora qualidade cinematográfica: Sora (OpenAI) e Runway Gen-3 geram vídeo completo a partir de texto, abrindo vectores de deepfakes políticos e desinformação a uma escala sem precedente — qualquer utilizador pode criar um vídeo de um político a fazer declarações falsas sem qualquer conhecimento técnico.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 260" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="260" fill="var(--bg-secondary)" rx="10" />

            {/* Title rows */}
            <text x="20" y="30" fill="#fb923c" fontSize="11" fontWeight="600">PROCESSO FORWARD — adição progressiva de ruído Gaussiano</text>
            <text x="20" y="155" fill="#fb923c" fontSize="11" fontWeight="600">PROCESSO REVERSE — denoising guiado por text prompt</text>

            {/* Forward process: image → noise */}
            {[0,1,2,3,4,5].map((i) => {
              const baseGreen = Math.round(180 - i * 28);
              const alpha = Math.round(255 - i * 38);
              const grayVal = Math.round(30 + i * 36);
              const noiseOpacity = i * 0.16;
              const x = 30 + i * 115;
              return (
                <g key={`fwd-${i}`}>
                  <rect x={x} y="40" width="90" height="70" rx="6"
                    fill={`rgb(${grayVal+10},${Math.round(grayVal*0.4)},${Math.round(grayVal*0.05)})`}
                    stroke="#f97316" strokeWidth="1" />
                  {/* noise overlay */}
                  {i > 0 && Array.from({ length: i * 4 }).map((_, d) => (
                    <rect key={d} x={x + 5 + (d * 17) % 75} y={45 + (d * 13) % 55}
                      width="6" height="6" rx="1" fill="#fbbf24" opacity={noiseOpacity + 0.05} />
                  ))}
                  <text x={x + 45} y="123" textAnchor="middle" fill="#fb923c" fontSize="9">
                    {i === 0 ? 'x₀ (face)' : i === 5 ? 'x_T (ruído)' : `x_${i}`}
                  </text>
                  {i < 5 && (
                    <>
                      <line x1={x + 95} y1="75" x2={x + 108} y2="75" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrFwd)" />
                      <text x={x + 101} y="70" textAnchor="middle" fill="#f97316" fontSize="8">+ε</text>
                    </>
                  )}
                </g>
              );
            })}

            {/* Reverse process: noise → face */}
            {[0,1,2,3,4,5].map((i) => {
              const ri = 5 - i;
              const grayVal = Math.round(30 + ri * 36);
              const x = 30 + i * 115;
              return (
                <g key={`rev-${i}`}>
                  <rect x={x} y="165" width="90" height="70" rx="6"
                    fill={`rgb(${grayVal+10},${Math.round(grayVal*0.4)},${Math.round(grayVal*0.05)})`}
                    stroke="#f97316" strokeWidth="1" />
                  <text x={x + 45} y="247" textAnchor="middle" fill="#fb923c" fontSize="9">
                    {i === 0 ? 'x_T (ruído)' : i === 5 ? 'x₀ (face)' : `passo ${i}`}
                  </text>
                  {i < 5 && (
                    <line x1={x + 95} y1="200" x2={x + 108} y2="200" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrRev)" />
                  )}
                </g>
              );
            })}

            {/* Text prompt label */}
            <rect x="308" y="155" width="166" height="22" rx="5" fill="#ea580c" />
            <text x="391" y="170" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">condicionado em text prompt</text>

            <defs>
              <marker id="arrFwd" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
              <marker id="arrRev" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.note}>
          A capacidade de síntese de vídeo realista tornou o custo de produção de deepfakes políticos essencialmente nulo. Qualquer campanha de desinformação pode agora gerar vídeo convincente de qualquer figura pública a fazer qualquer declaração — sem necessidade de actores, câmaras ou edição especializada.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Detecção de Deepfakes</h2>
        <p style={S.p}>A detecção de deepfakes explora artefactos que os modelos generativos introduzem e que são invisíveis ao olho humano mas detectáveis computacionalmente. Artefactos espaciais incluem inconsistências nas bordas da face ao rodar a cabeça, detalhes errados em cabelo, dentes e olhos, e textura de pele sem poros naturais. Artefactos temporais incluem blinking rate anormal (modelos treinados em imagens estáticas não aprendem piscar naturalmente) e micro-movimentos de cabeça inconsistentes.</p>
        <p style={S.p}>A análise no domínio da frequência é particularmente eficaz: faces GAN mostram picos espectrais a intervalos regulares no espaço DCT/FFT, resultado dos artefactos de upsampling das redes convolucionais geradoras. Uma face real tem distribuição DCT natural e suave; uma face GAN tem grid artefacts nas altas frequências. Modelos de detecção como XceptionNet e EfficientNetB4 atingem 94% de accuracy no FaceForensics++ benchmark.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 290" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="280" fill="var(--bg-secondary)" rx="10" />

            {/* Pipeline */}
            {/* Step 1: video frame */}
            <rect x="20" y="90" width="100" height="60" rx="7" fill="rgba(249,115,22,0.08)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="70" y="116" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="600">fotograma</text>
            <text x="70" y="130" textAnchor="middle" fill="#f97316" fontSize="9">vídeo</text>

            {/* Arrow */}
            <line x1="120" y1="120" x2="145" y2="120" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrPipe)" />

            {/* Step 2: face crop */}
            <rect x="145" y="90" width="100" height="60" rx="7" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1" />
            <text x="195" y="116" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="600">crop face</text>
            <text x="195" y="130" textAnchor="middle" fill="#fb923c" fontSize="9">alinhamento</text>

            {/* Arrow */}
            <line x1="245" y1="120" x2="270" y2="120" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrPipe)" />

            {/* Step 3: feature extraction */}
            <rect x="270" y="70" width="130" height="100" rx="7" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1.5" />
            <text x="335" y="92" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">extracção features</text>
            <rect x="282" y="100" width="106" height="18" rx="3" fill="rgba(249,115,22,0.15)" />
            <text x="335" y="112" textAnchor="middle" fill="#fb923c" fontSize="8">artefactos frequência DCT</text>
            <rect x="282" y="123" width="106" height="18" rx="3" fill="rgba(249,115,22,0.15)" />
            <text x="335" y="135" textAnchor="middle" fill="#fb923c" fontSize="8">inconsistência eye blink</text>
            <rect x="282" y="146" width="106" height="18" rx="3" fill="rgba(249,115,22,0.15)" />
            <text x="335" y="158" textAnchor="middle" fill="#fb923c" fontSize="8">bordas face boundary</text>

            {/* Arrow */}
            <line x1="400" y1="120" x2="425" y2="120" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrPipe)" />

            {/* Step 4: classifier */}
            <rect x="425" y="90" width="110" height="60" rx="7" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1.5" />
            <text x="480" y="111" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">classificador</text>
            <text x="480" y="126" textAnchor="middle" fill="#fb923c" fontSize="9">XceptionNet</text>
            <text x="480" y="140" textAnchor="middle" fill="#fb923c" fontSize="9">EfficientNetB4</text>

            {/* Arrow */}
            <line x1="535" y1="120" x2="560" y2="120" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrPipe)" />

            {/* Output */}
            <rect x="560" y="90" width="90" height="30" rx="6" fill="#c2410c" />
            <text x="605" y="108" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="600">REAL</text>
            <rect x="560" y="130" width="90" height="30" rx="6" fill="#ea580c" />
            <text x="605" y="148" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="600">FAKE</text>

            {/* Frequency domain */}
            <text x="20" y="195" fill="#fb923c" fontSize="10" fontWeight="600">Domínio de Frequência (DCT)</text>
            <rect x="20" y="205" width="120" height="60" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
            <text x="80" y="222" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600">face REAL</text>
            {[0,1,2,3,4].map(i => (
              <rect key={i} x={28 + i * 22} y={230 + Math.sin(i) * 5} width="14" height={25 - i * 3} rx="2"
                fill="#f97316" opacity={0.7 - i * 0.1} />
            ))}
            <text x="80" y="280" textAnchor="middle" fill="#fb923c" fontSize="8">distribuição suave natural</text>

            <rect x="160" y="205" width="120" height="60" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
            <text x="220" y="222" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600">face GAN</text>
            {[0,1,2,3,4].map(i => (
              <rect key={i} x={168 + i * 22} y={i % 2 === 0 ? 225 : 238} width="14" height={i % 2 === 0 ? 30 : 10} rx="2"
                fill="#f97316" opacity={0.8} />
            ))}
            <text x="220" y="280" textAnchor="middle" fill="#fb923c" fontSize="8">grid artefacts upsampling</text>

            {/* Confusion matrix */}
            <text x="330" y="195" fill="#fb923c" fontSize="10" fontWeight="600">Matriz de Confusão</text>
            <rect x="330" y="205" width="200" height="70" rx="6" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="380" y="220" textAnchor="middle" fill="#fb923c" fontSize="8">Pred REAL</text>
            <text x="490" y="220" textAnchor="middle" fill="#fb923c" fontSize="8">Pred FAKE</text>
            <text x="340" y="238" fill="#fb923c" fontSize="8">Real REAL</text>
            <rect x="390" y="227" width="60" height="18" rx="3" fill="#c2410c" />
            <text x="420" y="239" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">94% TP</text>
            <rect x="460" y="227" width="60" height="18" rx="3" fill="rgba(249,115,22,0.20)" />
            <text x="490" y="239" textAnchor="middle" fill="#fb923c" fontSize="9">6% FNR</text>
            <text x="340" y="257" fill="#fb923c" fontSize="8">Real FAKE</text>
            <rect x="390" y="248" width="60" height="18" rx="3" fill="rgba(249,115,22,0.20)" />
            <text x="420" y="260" textAnchor="middle" fill="#fb923c" fontSize="9">8% FPR</text>
            <rect x="460" y="248" width="60" height="18" rx="3" fill="#c2410c" />
            <text x="490" y="260" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">92% TN</text>

            <defs>
              <marker id="arrPipe" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.highlight}>
          O problema central da detecção de deepfakes é a <strong>generalização cross-manipulation</strong>: um detector treinado no método Deepfakes do FaceForensics++ generaliza mal para Face2Face ou para novos modelos de difusão. Esta corrida armamentista adversarial significa que os detectores ficam perpetuamente atrás dos geradores. A abordagem de proveniência C2PA visa contornar este problema autenticando a origem em vez de detectar manipulação.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Desinformação e Impacto Social</h2>
        <p style={S.p}>Operações de desinformação patrocinadas por estados utilizam media sintético a escala. A Internet Research Agency (Rússia) publicou mais de 80.000 posts que atingiram 126 milhões de utilizadores no Facebook durante as eleições americanas de 2016. O termo Coordinated Inauthentic Behaviour (CIB), cunhado pelo Meta, descreve redes de contas falsas que amplificam conteúdo de forma coordenada sem revelar a sua origem real.</p>
        <p style={S.p}>Os casos documentados de deepfakes com impacto real são variados: fraude CEO com voz sintética — um CFO em Hong Kong transferiu 35 milhões de dólares após uma chamada de vídeo com um "CEO" deepfake em 2021; imagens íntimas não-consensuais (NCII) — 96% de todos os deepfakes são pornográficos, maioritariamente visando mulheres; manipulação política — vídeos fabricados de políticos a fazer declarações falsas distribuídos em períodos eleitorais.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 300" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="300" fill="var(--bg-secondary)" rx="10" />

            {/* Title */}
            <text x="390" y="25" textAnchor="middle" fill="#fb923c" fontSize="12" fontWeight="700">ECOSSISTEMA DE DESINFORMAÇÃO</text>

            {/* Stage 1: Creation */}
            <rect x="20" y="45" width="150" height="90" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="95" y="65" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">CRIAÇÃO</text>
            <text x="95" y="82" textAnchor="middle" fill="#fb923c" fontSize="9">laboratórios deepfake</text>
            <text x="95" y="96" textAnchor="middle" fill="#fb923c" fontSize="9">bot farms automatizadas</text>
            <text x="95" y="110" textAnchor="middle" fill="#fb923c" fontSize="9">LLM text generation</text>
            <text x="95" y="124" textAnchor="middle" fill="#fb923c" fontSize="9">contas falsas compradas</text>

            {/* Arrow 1→2 */}
            <line x1="170" y1="90" x2="195" y2="90" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrDisinfo)" />

            {/* Stage 2: Amplification */}
            <rect x="195" y="45" width="150" height="90" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="270" y="65" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">AMPLIFICAÇÃO</text>
            <text x="270" y="82" textAnchor="middle" fill="#fb923c" fontSize="9">algoritmos redes sociais</text>
            <text x="270" y="96" textAnchor="middle" fill="#fb923c" fontSize="9">coordinated inauthentic</text>
            <text x="270" y="110" textAnchor="middle" fill="#fb923c" fontSize="9">behaviour (CIB)</text>
            <text x="270" y="124" textAnchor="middle" fill="#fb923c" fontSize="9">trending topic injection</text>

            {/* Arrow 2→3 */}
            <line x1="345" y1="90" x2="370" y2="90" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrDisinfo2)" />

            {/* Stage 3: Targeting */}
            <rect x="370" y="45" width="150" height="90" rx="8" fill="#f59e0b15" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="445" y="65" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">SEGMENTAÇÃO</text>
            <text x="445" y="82" textAnchor="middle" fill="#fbbf24" fontSize="9">micro-targeting</text>
            <text x="445" y="96" textAnchor="middle" fill="#fbbf24" fontSize="9">por grupo demográfico</text>
            <text x="445" y="110" textAnchor="middle" fill="#fbbf24" fontSize="9">psicográfico e político</text>
            <text x="445" y="124" textAnchor="middle" fill="#fbbf24" fontSize="9">echo chambers</text>

            {/* Arrow 3→4 */}
            <line x1="520" y1="90" x2="545" y2="90" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrDisinfo3)" />

            {/* Stage 4: Impact */}
            <rect x="545" y="45" width="215" height="90" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="652" y="65" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">IMPACTO</text>
            <text x="652" y="82" textAnchor="middle" fill="#fb923c" fontSize="9">mudança de opinião eleitoral</text>
            <text x="652" y="96" textAnchor="middle" fill="#fb923c" fontSize="9">interferência em eleições</text>
            <text x="652" y="110" textAnchor="middle" fill="#fb923c" fontSize="9">manipulação de mercados</text>
            <text x="652" y="124" textAnchor="middle" fill="#fb923c" fontSize="9">erosão de confiança institucional</text>

            {/* Feedback loop */}
            <path d="M652 135 Q652 185 445 185 Q270 185 95 185 Q95 160 95 135" fill="none" stroke="#f9731650" strokeWidth="1.5" strokeDasharray="6,3" markerEnd="url(#arrFeedback)" />
            <text x="390" y="180" textAnchor="middle" fill="#fb923c" fontSize="9" opacity="0.7">feedback loop — impacto alimenta nova criação de conteúdo</text>

            {/* Detection tools */}
            <text x="20" y="215" fill="#fb923c" fontSize="10" fontWeight="600">Ferramentas de Detecção</text>
            <rect x="20" y="225" width="110" height="30" rx="5" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="1" />
            <text x="75" y="243" textAnchor="middle" fill="#fb923c" fontSize="9">PimEyes (face search)</text>
            <rect x="140" y="225" width="130" height="30" rx="5" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="1" />
            <text x="205" y="243" textAnchor="middle" fill="#fb923c" fontSize="9">Microsoft Video Authenticator</text>
            <rect x="280" y="225" width="110" height="30" rx="5" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="1" />
            <text x="335" y="243" textAnchor="middle" fill="#fb923c" fontSize="9">deepware.ai detector</text>

            {/* Regulation */}
            <text x="430" y="215" fill="#fb923c" fontSize="10" fontWeight="600">Resposta Regulatória</text>
            <rect x="430" y="225" width="160" height="30" rx="5" fill="#c2410c" />
            <text x="510" y="243" textAnchor="middle" fill="#fff" fontSize="9">EU AI Act — label obrigatório</text>
            <rect x="600" y="225" width="160" height="30" rx="5" fill="#c2410c" />
            <text x="680" y="243" textAnchor="middle" fill="#fff" fontSize="9">EU DSA — remoção conteúdo</text>

            <defs>
              <marker id="arrDisinfo" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
              <marker id="arrDisinfo2" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
              <marker id="arrDisinfo3" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f59e0b" />
              </marker>
              <marker id="arrFeedback" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.note}>
          O EU AI Act proíbe vigilância biométrica em tempo real e obriga a rotulagem de media gerado por IA. O DEFIANCE Act (EUA, 2024) criminaliza a criação e distribuição não-consensual de deepfakes íntimos a nível federal. A regulação está a convergir mas continua atrás da capacidade tecnológica.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Defesa e Autenticação de Media</h2>
        <p style={S.p}>O C2PA (Coalition for Content Provenance and Authenticity) é um standard aberto para metadados criptograficamente assinados que documentam a origem e o histórico de edições de um ficheiro de media. Suportado por Adobe, Microsoft, Google, Sony e Nikon, o "Content Credentials" é um ícone que aparece junto ao conteúdo e permite verificar quem criou o ficheiro, quando, com que ferramenta e que edições foram feitas — sem requerer acesso ao criador original.</p>
        <p style={S.p}>O watermarking invisível embute uma assinatura imperceptível nos píxeis da imagem que sobrevive a compressão JPEG, redimensionamento e captura de ecrã. O SynthID (Google DeepMind) marca imagens e áudio gerados por IA ao nível dos píxeis e espectrograma respectivamente. Tree-Ring Watermarks embute padrões no espaço de Fourier da imagem gerada por diffusion — detectável mesmo após edições agressivas.</p>
        <p style={S.p}>A detecção de liveness para chamadas de vídeo inclui pedidos de movimentos aleatórios de cabeça, piscar ao comando e análise de textura facial em tempo real — dificulta deepfakes em tempo real mesmo com modelos avançados. As principais plataformas — YouTube, TikTok e Meta — exigem rotulagem de conteúdo eleitoral gerado por IA desde 2024.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 270" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="270" fill="var(--bg-secondary)" rx="10" />

            <text x="390" y="25" textAnchor="middle" fill="#fb923c" fontSize="12" fontWeight="700">FLUXO C2PA — Content Authenticity Initiative</text>

            {/* Step 1: Camera capture */}
            <rect x="20" y="45" width="130" height="80" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="85" y="67" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">CAPTURA</text>
            <text x="85" y="84" textAnchor="middle" fill="#fb923c" fontSize="9">câmara / dispositivo</text>
            <text x="85" y="98" textAnchor="middle" fill="#fb923c" fontSize="9">assina media na captura</text>
            <text x="85" y="112" textAnchor="middle" fill="#fb923c" fontSize="9">chave privada device</text>

            <line x1="150" y1="85" x2="175" y2="85" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrC2PA)" />

            {/* Step 2: Metadata */}
            <rect x="175" y="45" width="160" height="80" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="255" y="67" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">METADADOS C2PA</text>
            <text x="255" y="84" textAnchor="middle" fill="#fb923c" fontSize="9">quem criou (identidade)</text>
            <text x="255" y="98" textAnchor="middle" fill="#fb923c" fontSize="9">quando e com que tool</text>
            <text x="255" y="112" textAnchor="middle" fill="#fb923c" fontSize="9">histórico de edições</text>

            <line x1="335" y1="85" x2="360" y2="85" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrC2PA)" />

            {/* Step 3: Verifier */}
            <rect x="360" y="45" width="150" height="80" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="435" y="67" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">VERIFICAÇÃO</text>
            <text x="435" y="84" textAnchor="middle" fill="#fb923c" fontSize="9">verifica cadeia de assinaturas</text>
            <text x="435" y="98" textAnchor="middle" fill="#fb923c" fontSize="9">valida certificados</text>
            <text x="435" y="112" textAnchor="middle" fill="#fb923c" fontSize="9">detecta modificações</text>

            <line x1="510" y1="85" x2="535" y2="85" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrC2PA2)" />

            {/* Step 4: Badge */}
            <rect x="535" y="45" width="220" height="80" rx="8" fill="#c2410c" />
            <text x="645" y="67" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">CONTENT CREDENTIALS</text>
            <text x="645" y="84" textAnchor="middle" fill="#fff" fontSize="9">badge "cr" exibido no conteúdo</text>
            <text x="645" y="98" textAnchor="middle" fill="#fff" fontSize="9">utilizador acede ao histórico</text>
            <text x="645" y="112" textAnchor="middle" fill="#fff" fontSize="9">proveniência verificada</text>

            {/* Watermarking section */}
            <text x="20" y="155" fill="#fb923c" fontSize="11" fontWeight="600">Watermarking Invisível</text>

            <rect x="20" y="165" width="340" height="85" rx="8" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />

            {/* Original pixels — centred in left half (box x=20..360, left half centre=95) */}
            <text x="95" y="183" textAnchor="middle" fill="#fb923c" fontSize="9">imagem original</text>
            {[0,1,2,3,4,5].map(i => (
              <rect key={i} x={39 + i * 19} y={188} width="16" height="18" rx="2"
                fill={i % 2 === 0 ? '#ea580c' : '#f97316'} opacity="0.85" />
            ))}
            <text x="95" y="222" textAnchor="middle" fill="#f97316" fontSize="9">+ watermark imperceptível</text>
            <text x="95" y="237" textAnchor="middle" fill="#fb923c" fontSize="9">sobrevive JPEG / resize</text>

            {/* Divider */}
            <line x1="190" y1="170" x2="190" y2="245" stroke="var(--card-border)" strokeWidth="1" />

            {/* Watermarked pixels — centred in right half (right half centre=275) */}
            <text x="275" y="183" textAnchor="middle" fill="#fb923c" fontSize="9">imagem com watermark</text>
            {[0,1,2,3,4,5].map(i => (
              <rect key={i} x={219 + i * 19} y={188} width="16" height="18" rx="2"
                fill={i % 2 === 0 ? '#c2410c' : '#f59e0b'} opacity="0.85" />
            ))}
            {[1,3].map(i => (
              <rect key={i} x={220 + i * 19} y={189} width="3" height="3" rx="1"
                fill="#fff" opacity="0.7" />
            ))}
            <text x="275" y="222" textAnchor="middle" fill="#f97316" fontSize="9">SynthID / Tree-Ring</text>
            <text x="275" y="237" textAnchor="middle" fill="#fb923c" fontSize="9">detectável com chave</text>

            {/* Liveness detection */}
            <text x="390" y="155" fill="#fb923c" fontSize="11" fontWeight="600">Liveness Detection (Vídeo Chamadas)</text>
            <rect x="390" y="165" width="365" height="85" rx="8" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <rect x="398" y="175" width="108" height="28" rx="5" fill="rgba(249,115,22,0.18)" stroke="#f97316" strokeWidth="1" />
            <text x="452" y="192" textAnchor="middle" fill="#fb923c" fontSize="9">piscar ao comando</text>
            <rect x="514" y="175" width="140" height="28" rx="5" fill="rgba(249,115,22,0.18)" stroke="#f97316" strokeWidth="1" />
            <text x="584" y="192" textAnchor="middle" fill="#fb923c" fontSize="9">rotação cabeça aleatória</text>
            <rect x="662" y="175" width="85" height="28" rx="5" fill="rgba(249,115,22,0.18)" stroke="#f97316" strokeWidth="1" />
            <text x="704" y="192" textAnchor="middle" fill="#fb923c" fontSize="9">análise textura RT</text>
            <text x="572" y="230" textAnchor="middle" fill="#fb923c" fontSize="9">dificulta deepfakes em tempo real — latência de geração &gt; 100ms</text>
            <text x="572" y="245" textAnchor="middle" fill="#fb923c" fontSize="9">YouTube / TikTok / Meta: label obrigatório em conteúdo eleitoral IA</text>

            <defs>
              <marker id="arrC2PA" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
              <marker id="arrC2PA2" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.highlight}>
          A defesa eficaz contra deepfakes e desinformação requer uma abordagem em camadas: detecção técnica (modelos de classificação, análise de frequência), proveniência criptográfica (C2PA), watermarking robusto (SynthID), regulação (EU AI Act, DEFIANCE Act) e literacia mediática. Nenhuma solução isolada é suficiente — a combinação de todas é o único caminho realista face à democratização acelerada das ferramentas de síntese.
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Detecção de Deepfakes</strong> — modelos discriminativos detectam inconsistências em vídeos e imagens gerados por GAN ou diffusion — artefactos em piscadas de olhos, texturas de pele ou compressão de JPEG; é uma corrida armamentista entre geradores e detectores.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Desinformação e Impacto Social</strong> — LLMs tornaram a geração de desinformação escalável e convincente; técnicas de detecção incluem watermarking de texto gerado por IA, análise de estilo e fact-checking automatizado com RAG.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Defesa e Autenticação de Media</strong> — C2PA (Content Credentials) e watermarking digital assinam criptograficamente o provenance de imagens e vídeos; Perceptual Hashing (pHash) detecta variantes de imagens conhecidas apesar de transformações.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
