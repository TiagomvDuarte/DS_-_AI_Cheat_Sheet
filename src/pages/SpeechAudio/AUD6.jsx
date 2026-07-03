import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './SpeechAudio';

const C = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: C, border: `1.5px solid ${C}`, fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color: C, marginBottom: '1rem' },
  highlight: { background: `${C}15`, borderLeft: `3px solid ${C}`, padding: '0.85rem 1.1rem', borderRadius: '0 8px 8px 0', marginBottom: '1rem' },
  note: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', padding: '0.85rem 1.1rem', borderRadius: 8, marginBottom: '1rem' },
  p: { color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '0.85rem' },
  diagram: { background: 'var(--bg-secondary)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', overflowX: 'auto' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2rem 0' },
};

export default function AUD6() {
  return (
    <div style={S.page}>
      <Link to="/speech-audio" style={S.back}>← Speech & Audio AI</Link>
      <div style={S.badge}>MÓDULO {modules[0].num}</div>
      <h1 style={S.h1}>{modules[5].title}</h1>
      <p style={S.sub}>{modules[5].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Audio Classification — Fundamentos</h2>
        <p style={S.p}>
          A classificação de audio é um dos problemas mais versáteis do processamento de sinal com aprendizagem profunda. Dado um clip de audio, o objectivo é atribuir uma ou mais categorias: género musical, espécie de pássaro, emoção na voz, ambiente acústico urbano ou rural. O leque de aplicações abrange sistemas de monitorização ambiental, diagnóstico médico, moderação de conteúdo e reconhecimento de contexto em dispositivos móveis.
        </p>
        <p style={S.p}>
          As abordagens clássicas baseavam-se em features manuais como MFCC. As abordagens modernas usam principalmente <strong>mel spectrogramas como imagens 2D</strong> — a frequência no eixo vertical, o tempo no horizontal, a energia em intensidade de cor. Isto permite adaptar directamente arquitecturas CNN de visão computacional: VGG e ResNet foram os primeiros a ser adaptados; o <strong>EfficientNet-B0</strong> tornou-se um baseline eficiente por combinar boa performance com custo computacional reduzido.
        </p>
        <p style={S.p}>
          Para capturar dependências temporais de longo prazo, modelos RNN bidirreccionais e Transformers operam sobre sequências de frames. Os modelos bidireccionais são adequados para classificação offline (todo o clip disponível); para aplicações em tempo real são necessárias arquitecturas causais ou streaming.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Datasets de referência:</strong> ESC-50 (50 classes de sons ambientais, 2000 clips de 5s), UrbanSound8K (10 classes urbanas, validação por fold geográfico), DCASE Challenge (múltiplos tasks anuais, incluindo acoustic scene classification e sound event detection).
          </p>
        </div>

        {/* SVG: audio classification pipeline */}
        <div style={S.diagram}>
          <svg viewBox="0 0 760 130" width="100%" style={{ display: 'block' }}>
            <rect x="10" y="40" width="100" height="44" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="60" y="59" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">WAVEFORM</text>
            <text x="60" y="75" textAnchor="middle" fill="#94a3b8" fontSize="9">raw audio signal</text>

            <line x1="112" y1="62" x2="152" y2="62" stroke={C} strokeWidth="1.5" />
            <polygon points="148,58 156,62 148,66" fill={C} />

            <rect x="156" y="30" width="120" height="64" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="216" y="52" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">MEL SPECTROGRAM</text>
            <text x="216" y="67" textAnchor="middle" fill="#94a3b8" fontSize="9">2D image (freq × time)</text>
            <text x="216" y="82" textAnchor="middle" fill="#64748b" fontSize="8">128 mel bins · 128 frames</text>

            <line x1="278" y1="62" x2="318" y2="62" stroke={C} strokeWidth="1.5" />
            <polygon points="314,58 322,62 314,66" fill={C} />

            <rect x="322" y="30" width="100" height="64" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="372" y="55" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">CNN</text>
            <text x="372" y="70" textAnchor="middle" fill="#94a3b8" fontSize="9">EfficientNet-B0</text>
            <text x="372" y="85" textAnchor="middle" fill="#64748b" fontSize="8">feature maps</text>

            <line x1="424" y1="62" x2="464" y2="62" stroke={C} strokeWidth="1.5" />
            <polygon points="460,58 468,62 460,66" fill={C} />

            <rect x="468" y="40" width="90" height="44" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="513" y="59" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">POOLING</text>
            <text x="513" y="75" textAnchor="middle" fill="#94a3b8" fontSize="9">global avg pool</text>

            <line x1="560" y1="62" x2="600" y2="62" stroke={C} strokeWidth="1.5" />
            <polygon points="596,58 604,62 596,66" fill={C} />

            <rect x="604" y="30" width="140" height="64" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="674" y="52" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">CLASSIFIER</text>
            <text x="674" y="67" textAnchor="middle" fill="#94a3b8" fontSize="9">softmax / sigmoid</text>
            <text x="674" y="82" textAnchor="middle" fill="#64748b" fontSize="8">label probabilities</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Audio Spectrogram Transformer (AST)</h2>
        <p style={S.p}>
          O <strong>AST</strong> (Gong et al., MIT, 2021) aplica a arquitectura Vision Transformer (ViT) a espectrogramas de audio. O espectrograma é dividido em patches sobrepostos de 16×16 pixels — cada patch torna-se um token com um embedding aprendido. A sequência de patch embeddings é processada por um Transformer encoder com self-attention global, capturando dependências entre regiões distantes do espectrograma.
        </p>
        <p style={S.p}>
          Uma das contribuições chave do AST é o <strong>cross-modal transfer</strong>: inicializar os pesos com um ViT pré-treinado no ImageNet. Embora espectrogramas e imagens naturais sejam domínios distintos, a transferência funciona — os filtros de baixo nível de detecção de bordas e texturas são úteis em ambos. O fine-tuning no AudioSet atinge <strong>0.459 mAP</strong>, superando o CNN14 (0.431) e o ResNet-38 (0.434).
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>SSAST</strong> (Self-Supervised AST) elimina a dependência de grandes datasets anotados através de pré-treino self-supervised com dois objectivos: masked patch prediction (reconstruir patches mascarados) e discriminative prediction (distinguir patches reais de distorções). O <strong>PaSST</strong> introduz <em>patchout</em> — eliminar aleatoriamente patches durante o treino — como forma de regularização que também acelera o treino sem custo de performance.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Environmental Sound e Bioacoustics</h2>
        <p style={S.p}>
          A classificação de sons urbanos tem aplicações directas em <strong>smart cities</strong>: monitorizar o nível e tipo de ruído (sirenes de emergência, construção, tráfego, música de rua) permite optimizar rotas, avaliar cumprimento de regulamentos de ruído e detectar anomalias. Sistemas de monitorização contínua com microfones de baixo custo e modelos de classificação em edge computing tornam isto economicamente viável.
        </p>
        <p style={S.p}>
          A <strong>bioacústica computacional</strong> é uma das áreas de crescimento mais rápido. O <strong>BirdNET</strong> (Cornell Lab of Ornithology) identifica mais de 3 000 espécies de aves pelo seu canto, com uma app móvel utilizada por milhões de birdwatchers. O <strong>BirdCLEF challenge</strong> (Kaggle) consiste em identificar espécies em gravações contínuas de 24 horas em florestas tropicais — os melhores modelos são tipicamente ensembles de EfficientNet sobre mel spectrogramas com augmentation agressivo.
        </p>
        <p style={S.p}>
          No domínio médico, a classificação de audio aplica-se à <strong>auscultação pulmonar</strong> (detectar crepitações e sibilos que indicam pneumonia ou asma), análise de choro de recém-nascidos (distinguir padrões de dor, fome, stress) e correlação EEG-audio para interfaces cérebro-computador.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Rainforest Connection</strong> instala dispositivos de escuta em copas de árvores em florestas tropicais. Classificadores de audio em tempo real detectam motosserras e alertam guardas florestais via SMS, permitindo intervenção antes que o abate ilegal avance. Protegem actualmente mais de 3 milhões de hectares em 20 países.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. CLAP e Audio-Language Models</h2>
        <p style={S.p}>
          O <strong>CLAP</strong> (LAION, 2022) é o equivalente ao CLIP para audio. Um encoder de audio (baseado em HTSAT — Hierarchical Token-Semantic Audio Transformer) e um encoder de texto (BERT ou RoBERTa) são treinados conjuntamente com contrastive learning: maximizar a similaridade cosseno entre embeddings de pares (audio, descrição) correctos e minimizá-la para pares incorretos. O resultado é um espaço de embeddings partilhado onde audio e texto semanticamente semelhantes ficam próximos.
        </p>
        <p style={S.p}>
          A <strong>zero-shot classification</strong> com CLAP é directa: para classificar um audio em N classes, calcular a similaridade entre o embedding do audio e os embeddings das descrições textuais de cada classe ("o som de um cão a ladrar", "o som de chuva", etc.) e escolher a classe com maior score. Sem necessidade de re-treino para novas classes.
        </p>
        <p style={S.p}>
          O <strong>audio captioning</strong> — gerar descrições textuais de clips — é treinado em datasets como AudioCaps e Clotho, geralmente com prefix tuning sobre um LLM condicionado em embeddings de audio. O <strong>Pengi</strong> (Microsoft, 2023) unifica classificação, captioning e Audio Question Answering num único modelo multi-task, respondendo a perguntas abertas como "Que instrumento é este?" ou "Quantas pessoas estão a falar?".
        </p>

        {/* SVG: CLAP contrastive training */}
        <div style={S.diagram}>
          <svg viewBox="0 0 760 180" width="100%" style={{ display: 'block' }}>
            {/* Audio batch */}
            <rect x="10" y="20" width="120" height="50" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="70" y="41" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">AUDIO BATCH</text>
            <text x="70" y="58" textAnchor="middle" fill="#94a3b8" fontSize="9">N audio clips</text>

            <line x1="132" y1="45" x2="172" y2="45" stroke={C} strokeWidth="1.5" />
            <polygon points="168,41 176,45 168,49" fill={C} />

            <rect x="176" y="10" width="120" height="70" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="236" y="33" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">AUDIO ENCODER</text>
            <text x="236" y="50" textAnchor="middle" fill="#94a3b8" fontSize="9">HTSAT</text>
            <text x="236" y="67" textAnchor="middle" fill="#64748b" fontSize="8">→ embedding A_i</text>

            {/* Text batch */}
            <rect x="10" y="110" width="120" height="50" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="70" y="131" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">TEXT BATCH</text>
            <text x="70" y="148" textAnchor="middle" fill="#94a3b8" fontSize="9">N descriptions</text>

            <line x1="132" y1="135" x2="172" y2="135" stroke={C} strokeWidth="1.5" />
            <polygon points="168,131 176,135 168,139" fill={C} />

            <rect x="176" y="100" width="120" height="70" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="236" y="123" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">TEXT ENCODER</text>
            <text x="236" y="140" textAnchor="middle" fill="#94a3b8" fontSize="9">BERT / RoBERTa</text>
            <text x="236" y="157" textAnchor="middle" fill="#64748b" fontSize="8">→ embedding T_i</text>

            {/* Dashed lines from encoders to matrix — horizontal */}
            <line x1="298" y1="45" x2="338" y2="45" stroke={C} strokeWidth="1.2" strokeDasharray="4,3" />
            <polygon points="334,41 342,45 334,49" fill={C} />
            <line x1="298" y1="135" x2="338" y2="135" stroke={C} strokeWidth="1.2" strokeDasharray="4,3" />
            <polygon points="334,131 342,135 334,139" fill={C} />

            <rect x="342" y="20" width="130" height="140" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="407" y="45" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">SIMILARITY MATRIX</text>
            <text x="407" y="62" textAnchor="middle" fill="#94a3b8" fontSize="9">N × N cosine scores</text>
            {/* off-diagonal */}
            {[[360,75],[382,75],[404,75],[360,97],[404,97],[360,119],[382,119]].map(([x,y],i) => (
              <rect key={i} x={x} y={y} width="20" height="20" rx="3"
                fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.25)" strokeWidth="0.8" />
            ))}
            {/* diagonal — positive pairs */}
            <rect x="360" y="75" width="20" height="20" rx="3" fill={C} opacity="0.8" />
            <rect x="382" y="97" width="20" height="20" rx="3" fill={C} opacity="0.8" />
            <rect x="404" y="119" width="20" height="20" rx="3" fill={C} opacity="0.5" />
            <text x="407" y="152" textAnchor="middle" fill={C} fontSize="8">diagonal = positive pairs</text>

            <line x1="474" y1="90" x2="514" y2="90" stroke={C} strokeWidth="1.5" />
            <polygon points="510,86 518,90 510,94" fill={C} />

            <rect x="518" y="60" width="130" height="60" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="583" y="83" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">CONTRASTIVE LOSS</text>
            <text x="583" y="100" textAnchor="middle" fill="#94a3b8" fontSize="9">InfoNCE (cross-entropy)</text>
            <text x="583" y="113" textAnchor="middle" fill="#64748b" fontSize="8">maximize diagonal</text>
          </svg>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Audio Classification — Fundamentos</strong> — classificar áudio consiste em atribuir uma ou mais etiquetas a um segmento sonoro; os modelos recebem tipicamente um espectrograma como entrada e são treinados com cross-entropy para reconhecer categorias como géneros musicais, comandos de voz ou sons ambientes.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Audio Spectrogram Transformer (AST)</strong> — o AST adapta a arquitetura Vision Transformer (ViT) para espectrogramas de áudio dividindo-os em patches e aplicando self-attention global; ao ser pré-treinado com ImageNet e depois afinado em áudio, supera as CNNs em vários benchmarks de classificação.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Environmental Sound e Bioacoustics</strong> — a classificação de sons ambientais (chuva, tráfego, aves) tem aplicações em monitorização ecológica e cidades inteligentes; a bioacústica usa modelos de áudio para identificar espécies animais pelo seu canto ou vocalização, apoiando a conservação da biodiversidade.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>CLAP e Audio-Language Models</strong> — o CLAP (Contrastive Language-Audio Pretraining) treina em pares (áudio, texto) com aprendizagem contrastiva, criando um espaço partilhado que permite classificação zero-shot, pesquisa semântica de áudio e geração condicionada em linguagem natural.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
