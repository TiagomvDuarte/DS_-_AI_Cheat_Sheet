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

export default function AUD5() {
  return (
    <div style={S.page}>
      <Link to="/speech-audio" style={S.back}>← Speech & Audio AI</Link>
      <div style={S.badge}>MÓDULO {modules[0].num}</div>
      <h1 style={S.h1}>{modules[4].title}</h1>
      <p style={S.sub}>{modules[4].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Síntese de Música com IA</h2>
        <p style={S.p}>
          A geração automática de música tem raízes surpreendentemente antigas. Em 1957, Lejaren Hiller e Leonard Isaacson compuseram o <strong>ILLIAC Suite</strong> — o primeiro quarteto de cordas escrito por computador — usando cadeias de Markov para gerar sequências de notas segundo regras de harmonia clássica. Três décadas depois, David Cope criou o sistema <strong>EMI (Experiments in Musical Intelligence)</strong>, capaz de imitar o estilo de Bach, Mozart ou Beethoven a partir da análise estatística das suas obras.
        </p>
        <p style={S.p}>
          Os modelos modernos dividem-se em duas grandes famílias. Os <strong>modelos simbólicos</strong> operam sobre representações como MIDI — sequências de eventos (nota, velocidade, duração, instrumento). O <strong>Music Transformer</strong> (Huang et al., Google Magenta, 2018) aplica uma arquitectura Transformer sobre tokens MIDI com <em>relative attention</em>, capturando dependências de longa distância e gerando piano music estruturalmente coerente ao longo de minutos.
        </p>
        <p style={S.p}>
          Os <strong>modelos de audio</strong> geram waveforms directamente ou via espectrogramas — abordagem mais difícil computacionalmente mas capaz de capturar timbre, dinâmica e expressividade reais. Em termos de arquitecturas, existem três paradigmas principais: <em>autoregressivo</em> (gera token por token, alta qualidade mas lento), <em>diffusion</em> (itera sobre representação latente de todo o audio, equilíbrio qualidade-velocidade) e <em>GAN</em> (geração num único passo, menos estável mas muito rápido).
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Paradigmas de geração:</strong> os modelos simbólicos têm acesso explícito a estrutura harmónica e rítmica, tornando a edição mais fácil; os modelos de audio produzem resultados mais realistas mas são caixas negras — difícil editar uma nota específica no output.
          </p>
        </div>

        {/* SVG: music generation paradigms */}
        <div style={S.diagram}>
          <svg viewBox="0 0 760 265" width="100%" style={{ display: 'block' }}>
            {/* MIDI symbolic path */}
            <rect x="10" y="30" width="120" height="44" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="70" y="49" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">MIDI SYMBOLIC</text>
            <text x="70" y="66" textAnchor="middle" fill="#94a3b8" fontSize="9">note sequence</text>

            <line x1="132" y1="52" x2="174" y2="52" stroke={C} strokeWidth="1.5" />
            <polygon points="170,48 178,52 170,56" fill={C} />

            <rect x="178" y="30" width="120" height="44" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="238" y="49" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">Music Transformer</text>
            <text x="238" y="66" textAnchor="middle" fill="#94a3b8" fontSize="9">relative attention</text>

            <line x1="300" y1="52" x2="342" y2="52" stroke={C} strokeWidth="1.5" />
            <polygon points="338,48 346,52 338,56" fill={C} />

            <rect x="346" y="30" width="100" height="44" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="396" y="55" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">MIDI output</text>

            <text x="30" y="20" fill="#64748b" fontSize="9">via simbólica</text>

            {/* Audio path */}
            <rect x="10" y="120" width="120" height="44" rx="8" fill="rgba(249,115,22,0.06)" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="70" y="139" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="700">TEXT PROMPT</text>
            <text x="70" y="156" textAnchor="middle" fill="#94a3b8" fontSize="9">"jazz piano solo"</text>

            <line x1="132" y1="142" x2="174" y2="142" stroke={C} strokeWidth="1.5" />
            <polygon points="170,138 178,142 170,146" fill={C} />

            <rect x="178" y="120" width="120" height="44" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="238" y="139" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">Diffusion Model</text>
            <text x="238" y="156" textAnchor="middle" fill="#94a3b8" fontSize="9">latent audio space</text>

            <line x1="238" y1="164" x2="238" y2="178" stroke={C} strokeWidth="1.5" />
            <polygon points="234,174 242,174 238,182" fill={C} />

            <rect x="178" y="182" width="120" height="30" rx="6" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1" />
            <text x="238" y="201" textAnchor="middle" fill="#94a3b8" fontSize="9">spectrogram</text>

            <line x1="238" y1="212" x2="238" y2="224" stroke={C} strokeWidth="1.5" />
            <polygon points="234,220 242,220 238,228" fill={C} />

            <rect x="178" y="228" width="120" height="28" rx="6" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="238" y="246" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">waveform</text>

            <text x="30" y="112" fill="#64748b" fontSize="9">via audio</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. MusicGen e AudioCraft</h2>
        <p style={S.p}>
          A Meta lançou em 2023 o <strong>AudioCraft</strong>, um framework open-source que engloba três modelos complementares: <strong>MusicGen</strong> (geração de música), <strong>AudioGen</strong> (efeitos sonoros) e <strong>EnCodec</strong> (codec de audio neural). Esta abordagem unificada permite reutilizar o mesmo codec e arquitectura de language model em domínios distintos.
        </p>
        <p style={S.p}>
          O <strong>MusicGen</strong> funciona como um language model sobre tokens EnCodec. O EnCodec comprime audio em sequências discretas de tokens usando Residual Vector Quantization (RVQ); o MusicGen aprende a prever o próximo token condicionado em embeddings de texto (e opcionalmente numa melodia de referência). Existem quatro variantes: <em>small</em> (300M parâmetros), <em>medium</em> (1.5B), <em>large</em> (3.3B) e <em>melody</em> (1.5B com conditioning melódico). O treino utilizou 20 000 horas de música licenciada mais 390 000 faixas instrumentais.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Pipeline de geração:</strong> texto → MusicGen LM → tokens EnCodec → EnCodec decoder → waveform. O modelo large gera 30 segundos de audio em cerca de 10 segundos numa GPU moderna.
          </p>
        </div>
        <p style={S.p}>
          O <strong>AudioGen</strong> usa a mesma arquitectura mas foi treinado em sound effects. Aceita prompts como "cão a ladrar no parque enquanto crianças brincam" e gera o audio correspondente com realismo notável. O <strong>melody conditioning</strong> do MusicGen extrai <em>chroma features</em> de uma melodia de referência e condiciona a geração para manter a estrutura melódica, permitindo variações estilísticas sobre um tema existente.
        </p>
        <p style={S.p}>
          A avaliação de qualidade utiliza métricas específicas: <strong>FAD</strong> (Fréchet Audio Distance — distância estatística entre distribuições de embeddings de audio real vs. gerado), <strong>KL divergence</strong> sobre distribuições de classes e <strong>CLAP score</strong> que mede o alinhamento semântico entre o prompt de texto e o audio gerado.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. AudioLDM e Diffusion para Audio</h2>
        <p style={S.p}>
          O <strong>AudioLDM</strong> (Liu et al., 2023) trouxe os latent diffusion models ao domínio do audio. O pipeline comprime audio para um espaço latente compacto via VAE, executa o processo de diffusion nesse espaço (muito mais eficiente do que operar directamente na waveform) e depois descodifica o latente resultante para audio.
        </p>
        <p style={S.p}>
          O conditioning textual baseia-se no <strong>CLAP</strong> (Contrastive Language-Audio Pretraining) — o equivalente ao CLIP para audio. O CLAP aprende um espaço de embeddings partilhado entre texto e audio através de contrastive learning sobre milhões de pares (clip, descrição), permitindo usar descrições textuais arbitrárias para guiar a geração.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>AudioLDM 2</strong> unifica música, fala e sound effects numa arquitectura única, usando representações intermediárias de linguagem (AudioMAE) como ponte entre modalidades. O <strong>Stable Audio</strong> (Stability AI, 2024) acrescenta controlo explícito de duração e timing, permitindo gerar clips de duração precisa.
          </p>
        </div>
        <p style={S.p}>
          No mercado comercial, <strong>Suno</strong> e <strong>Udio</strong> popularizaram a geração de música com letra e vocals a partir de prompts simples, gerando faixas completas com estrutura verso-refrão em estilos específicos. Contudo, ambos enfrentam processos judiciais da RIAA por alegada utilização de gravações protegidas no treino — um debate em aberto sobre copyright e IA generativa.
        </p>

        {/* SVG: AudioLDM pipeline */}
        <div style={S.diagram}>
          <svg viewBox="0 0 760 130" width="100%" style={{ display: 'block' }}>
            <rect x="10" y="40" width="110" height="44" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="65" y="59" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">TEXT PROMPT</text>
            <text x="65" y="75" textAnchor="middle" fill="#94a3b8" fontSize="9">"relaxing jazz"</text>

            <line x1="122" y1="62" x2="162" y2="62" stroke={C} strokeWidth="1.5" />
            <polygon points="158,58 166,62 158,66" fill={C} />

            <rect x="166" y="30" width="120" height="64" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="226" y="52" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">CLAP</text>
            <text x="226" y="67" textAnchor="middle" fill="#94a3b8" fontSize="9">text encoder</text>
            <text x="226" y="82" textAnchor="middle" fill="#64748b" fontSize="8">audio-text joint space</text>

            <line x1="288" y1="62" x2="328" y2="62" stroke={C} strokeWidth="1.5" />
            <polygon points="324,58 332,62 324,66" fill={C} />

            <rect x="332" y="30" width="120" height="64" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="392" y="52" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">Diffusion</text>
            <text x="392" y="67" textAnchor="middle" fill="#94a3b8" fontSize="9">latent space · T steps</text>
            <text x="392" y="82" textAnchor="middle" fill="#64748b" fontSize="8">U-Net denoiser</text>

            <line x1="454" y1="62" x2="494" y2="62" stroke={C} strokeWidth="1.5" />
            <polygon points="490,58 498,62 490,66" fill={C} />

            <rect x="498" y="40" width="90" height="44" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="543" y="59" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">VAE</text>
            <text x="543" y="75" textAnchor="middle" fill="#94a3b8" fontSize="9">decoder</text>

            <line x1="590" y1="62" x2="630" y2="62" stroke={C} strokeWidth="1.5" />
            <polygon points="626,58 634,62 626,66" fill={C} />

            <rect x="634" y="30" width="110" height="64" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="689" y="52" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">MEL → AUDIO</text>
            <text x="689" y="67" textAnchor="middle" fill="#94a3b8" fontSize="9">mel spectrogram</text>
            <text x="689" y="82" textAnchor="middle" fill="#64748b" fontSize="8">→ vocoder → wav</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Sound Event Detection e Foley</h2>
        <p style={S.p}>
          O <strong>Foley</strong> é a arte de criar efeitos sonoros para cinema e vídeo em pós-produção. A IA para Foley visa automatizar este processo: dado um vídeo, gerar o audio sincronizado temporalmente com os eventos visuais. O modelo <strong>FoleyCrafter</strong> combina conditioning textual com análise de features de vídeo para produzir efeitos sonoros semanticamente coerentes e temporalmente alinhados.
        </p>
        <p style={S.p}>
          O <strong>Sound Event Detection (SED)</strong> é o problema de detectar e localizar eventos sonoros no tempo, produzindo timestamps de onset e offset para cada evento. É essencialmente um problema de sequence labeling sobre frames de audio. O dataset de referência é o <strong>AudioSet</strong> (Google, 2017): 2 milhões de clips do YouTube, 527 classes de sons, aproximadamente 5 800 horas de audio.
        </p>
        <p style={S.p}>
          Na área de <strong>Music Source Separation</strong>, o objectivo é isolar stems individuais (vocals, bateria, baixo, outros instrumentos) de uma faixa mixada. O <strong>Demucs</strong> (Meta) e o <strong>Open-Unmix</strong> são os modelos open-source mais utilizados, com aplicações em remixagem, karaoke e análise musical. O <strong>VideoLDM</strong> e o projecto <em>Seeing-and-Hearing</em> exploram geração audio-visual conjunta, condicionando a geração de audio em features extraídas de frames de vídeo para maior coerência multimodal.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Eco-acoustic monitoring:</strong> a detecção automática de eventos sonoros tem aplicações em conservação — a organização Rainforest Connection usa classificadores de audio em tempo real para detectar motosserras em florestas tropicais e alertar guardas florestais antes que o abate ilegal avance.
          </p>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>MusicGen e AudioCraft</strong> — o MusicGen da Meta é um modelo autorregressivo baseado em transformer que gera música condicionada em texto e, opcionalmente, numa melodia de referência; o AudioCraft é o ecossistema open-source que o envolve, incluindo também modelos de efeitos sonoros e compressão de áudio.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>AudioLDM e Diffusion para Audio</strong> — o AudioLDM aplica o paradigma dos modelos de difusão latente (semelhante ao Stable Diffusion) à geração de áudio a partir de descrições em linguagem natural, operando num espaço latente de mel-espectrogramas para produzir sons e efeitos de elevada qualidade.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Sound Event Detection e Foley</strong> — a deteção de eventos sonoros identifica e localiza temporalmente sons específicos num áudio (passos, porta a fechar, etc.); o Foley generativo usa IA para sintetizar automaticamente efeitos sonoros sincronizados com vídeo, substituindo o processo manual em produção audiovisual.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
