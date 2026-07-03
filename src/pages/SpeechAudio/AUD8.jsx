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

export default function AUD8() {
  return (
    <div style={S.page}>
      <Link to="/speech-audio" style={S.back}>← Speech & Audio AI</Link>
      <div style={S.badge}>MÓDULO {modules[0].num}</div>
      <h1 style={S.h1}>{modules[7].title}</h1>
      <p style={S.sub}>{modules[7].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Voice Cloning — Técnica</h2>
        <p style={S.p}>
          A clonagem de voz é a capacidade de sintetizar fala com a identidade vocal de uma pessoa específica a partir de uma pequena amostra de audio de referência. A abordagem clássica de <strong>speaker adaptation</strong> consiste em fazer fine-tune de um modelo TTS pré-treinado em horas de dados do speaker alvo — eficaz mas impraticável para uso generalizado. A revolução moderna é o <strong>zero-shot voice cloning</strong>: generalizar para um novo speaker com apenas 3 a 10 segundos de audio, sem qualquer re-treino.
        </p>
        <p style={S.p}>
          O <strong>VALL-E</strong> (Microsoft, 2023) modelou a clonagem de voz como um problema de in-context learning: dado um prompt de audio de 3 segundos, o modelo (um language model sobre tokens EnCodec) continua a "frase" de audio de forma coerente com a identidade vocal. O <strong>XTTS v2</strong> (Coqui, 2024) é open-source, suporta 17 línguas e requer apenas 6 segundos de audio de referência, baseando-se numa arquitectura VITS com speaker conditioning via embeddings extraídos por um speaker encoder.
        </p>
        <p style={S.p}>
          O <strong>ElevenLabs</strong> democratizou o voice cloning comercial: o <em>Instant Voice Cloning</em> requer 15 segundos de audio e está disponível via API; o <em>Professional Voice Cloning</em> utiliza 30 minutos de dados para máxima qualidade e é usado em produções de audiobooks, content creation e locução publicitária.
        </p>

        {/* SVG: voice cloning pipeline */}
        <div style={S.diagram}>
          <svg viewBox="0 0 760 140" width="100%" style={{ display: 'block' }}>
            <rect x="10" y="40" width="120" height="44" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="70" y="58" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">REFERENCE AUDIO</text>
            <text x="70" y="75" textAnchor="middle" fill="#94a3b8" fontSize="9">3–10 segundos</text>

            <line x1="132" y1="62" x2="172" y2="62" stroke={C} strokeWidth="1.5" />
            <polygon points="168,58 176,62 168,66" fill={C} />

            <rect x="176" y="30" width="120" height="64" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="236" y="52" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">SPEAKER ENCODER</text>
            <text x="236" y="67" textAnchor="middle" fill="#94a3b8" fontSize="9">d-vector / x-vector</text>
            <text x="236" y="82" textAnchor="middle" fill="#64748b" fontSize="8">→ speaker embedding</text>

            <line x1="298" y1="62" x2="338" y2="62" stroke={C} strokeWidth="1.5" />
            <polygon points="334,58 342,62 334,66" fill={C} />

            {/* TTS model with text input */}
            <rect x="10" y="108" width="120" height="28" rx="6" fill="rgba(249,115,22,0.06)" stroke="#64748b" strokeWidth="1" />
            <text x="70" y="126" textAnchor="middle" fill="#94a3b8" fontSize="9">TEXT INPUT</text>

            <line x1="70" y1="108" x2="70" y2="97" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4,3" />
            <line x1="70" y1="97" x2="402" y2="97" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4,3" />
            <line x1="402" y1="97" x2="402" y2="94" stroke="#94a3b8" strokeWidth="1.2" />
            <polygon points="398,98 406,98 402,94" fill="#94a3b8" />

            <rect x="342" y="30" width="120" height="64" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="2" />
            <text x="402" y="55" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">TTS MODEL</text>
            <text x="402" y="70" textAnchor="middle" fill="#94a3b8" fontSize="9">VITS / VALL-E</text>
            <text x="402" y="85" textAnchor="middle" fill="#64748b" fontSize="8">condicionado em emb.</text>

            <line x1="464" y1="62" x2="504" y2="62" stroke={C} strokeWidth="1.5" />
            <polygon points="500,58 508,62 500,66" fill={C} />

            <rect x="508" y="30" width="130" height="64" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="573" y="52" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">SYNTHESIZED VOICE</text>
            <text x="573" y="67" textAnchor="middle" fill="#94a3b8" fontSize="9">waveform output</text>
            <text x="573" y="82" textAnchor="middle" fill="#64748b" fontSize="8">identidade clonada</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Voice Conversion</h2>
        <p style={S.p}>
          A <strong>voice conversion</strong> difere da clonagem de voz num aspecto fundamental: não requer texto — transforma directamente o audio de uma voz para outra, preservando o conteúdo linguístico mas alterando a identidade do speaker. O pipeline típico separa as representações de conteúdo (fonemas, prosódia) e identidade (timbre, características espectrais do speaker), substituindo a segunda.
        </p>
        <p style={S.p}>
          Arquitecturas recentes como o <strong>FreeVC</strong> e o <strong>AGAIN-VC</strong> usam encoders de conteúdo baseados em self-supervised speech representations (HuBERT) e speaker encoders treinados contrastivamente. O <strong>kNN-VC</strong> (Baas et al., 2023) adopta uma abordagem surpreendentemente simples mas eficaz: extrai unidades de fala com HuBERT, faz matching por k-nearest neighbours com unidades do speaker alvo, e sintetiza com um vocoder — sem treino end-to-end adicional.
        </p>
        <p style={S.p}>
          O <strong>RVC</strong> (Retrieval-based Voice Conversion) tornou-se o modelo preferido da comunidade open-source, com uma ecosistema activo de modelos treinados em vozes de artistas e personagens. Além dos usos recreativos controversos, a voice conversion tem aplicações legítimas importantes: preservação da voz para pessoas com ALS ou Parkinson antes da perda progressiva da fala, privacidade em chamadas telefónicas e dubbing automático de conteúdo audiovisual.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Real-time voice conversion:</strong> latências inferiores a 50ms permitem conversão em chamadas ao vivo. Hardware como GPU RTX 3060 processa audio em tempo real com modelos optimizados. Aplicações de privacidade como o Cloak (Discord) usam VC para anonimizar a voz em comunicações online.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Detecção de Deepfakes de Voz</h2>
        <p style={S.p}>
          O <strong>ASVspoof challenge</strong> é a principal competição internacional de anti-spoofing de voz, realizada bianualmente desde 2015. O ASVspoof 2019 definiu o benchmark moderno com 17 tipos de ataques TTS e 13 de voice conversion; o ASVspoof 2021 adicionou condições de transmissão realistas (codec degradation, channel noise) para simular deepfakes distribuídos via telefone ou redes sociais.
        </p>
        <p style={S.p}>
          As features mais eficazes para detectar fala sintética incluem <strong>LFCC</strong> (Linear Frequency Cepstral Coefficients) e <strong>CQCC</strong> (Constant-Q Cepstral Coefficients) — capturam artefactos de síntese como periodicidade excessiva, ausência de ruído de fundo natural e transições entre fonemas demasiado suaves. Os modelos state-of-the-art são o <strong>RawNet2</strong> (end-to-end, processa waveform directamente) e o <strong>AASIST</strong> (Audio Anti-Spoofing using Integrated Spectro-Temporal Graph Attention Networks), que modela relações entre domínios espectral e temporal via graph attention.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Fraude por voice cloning:</strong> o CEO fraud baseado em deepfake de voz é uma ameaça crescente. Em 2019 (Hong Kong), criminosos usaram audio deepfake para imitar a voz de um CEO e convencer um director financeiro a transferir $243k. Em 2021 (EAU), uma fraude semelhante resultou em $35M transferidos. Em 2024, os ataques multiplicaram-se com o acesso democratizado a ferramentas de clonagem.
          </p>
        </div>
        <p style={S.p}>
          Em resposta, a <strong>Meta</strong> lançou o <strong>AudioSeal</strong> (2024) — um sistema de watermarking que insere um sinal imperceptível ao ouvido humano directamente na waveform durante a síntese. O watermark é resistente a re-encoding, compressão e ruído. O <strong>SynthID Audio</strong> (Google DeepMind) adopta abordagem semelhante para conteúdo gerado por modelos Google.
        </p>

        {/* SVG: deepfake detection pipeline */}
        <div style={S.diagram}>
          <svg viewBox="0 0 760 140" width="100%" style={{ display: 'block' }}>
            <rect x="10" y="48" width="110" height="44" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="65" y="66" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">INPUT AUDIO</text>
            <text x="65" y="82" textAnchor="middle" fill="#94a3b8" fontSize="9">unknown origin</text>

            <line x1="122" y1="70" x2="162" y2="70" stroke={C} strokeWidth="1.5" />
            <polygon points="158,66 166,70 158,74" fill={C} />

            <rect x="166" y="28" width="140" height="84" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="236" y="52" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">FEATURE EXTRACTION</text>
            <text x="236" y="70" textAnchor="middle" fill={C} fontSize="9">LFCC · CQCC</text>
            <text x="236" y="85" textAnchor="middle" fill="#64748b" fontSize="8">artefactos: periodicidade,</text>
            <text x="236" y="98" textAnchor="middle" fill="#64748b" fontSize="8">transições fonemas, ruído</text>

            <line x1="308" y1="70" x2="348" y2="70" stroke={C} strokeWidth="1.5" />
            <polygon points="344,66 352,70 344,74" fill={C} />

            <rect x="352" y="38" width="120" height="64" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="412" y="62" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">CLASSIFIER</text>
            <text x="412" y="78" textAnchor="middle" fill="#94a3b8" fontSize="9">RawNet2 / AASIST</text>
            <text x="412" y="93" textAnchor="middle" fill="#64748b" fontSize="8">end-to-end</text>

            <line x1="474" y1="70" x2="514" y2="70" stroke={C} strokeWidth="1.5" />
            <polygon points="510,66 518,70 510,74" fill={C} />

            {/* Score output */}
            <rect x="518" y="28" width="100" height="44" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="568" y="47" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">REAL</text>
            <text x="568" y="63" textAnchor="middle" fill="#64748b" fontSize="8">score: 0.92</text>

            <rect x="518" y="82" width="100" height="44" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="568" y="101" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">FAKE</text>
            <text x="568" y="117" textAnchor="middle" fill="#64748b" fontSize="8">score: 0.08</text>

            <line x1="512" y1="70" x2="518" y2="50" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />
            <line x1="512" y1="70" x2="518" y2="104" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />

            <text x="640" y="55" fill="#94a3b8" fontSize="8">→ trusted</text>
            <text x="640" y="107" fill="#94a3b8" fontSize="8">→ flagged</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Regulação e Ética</h2>
        <p style={S.p}>
          O quadro regulatório para deepfakes de voz está a emergir rapidamente. O <strong>EU AI Act</strong> (2024) classifica os sistemas de voice cloning como sistemas de alto risco em determinados contextos e impõe obrigações de transparência: o conteúdo de voz sintética que imite pessoas reais deve ser declarado como tal (Artigo 50). Deepfakes de voz usados para fins enganosos — nomeadamente fraude, manipulação política ou difamação — são ilegais na maioria dos enquadramentos jurisdicionais europeus.
        </p>
        <p style={S.p}>
          A questão do <strong>consentimento</strong> é central: usar a voz de alguém sem autorização viola direitos de personalidade reconhecidos na maioria das jurisdições. No sector do entretenimento, os contratos <strong>SAG-AFTRA</strong> de 2023 incluem pela primeira vez cláusulas explícitas de protecção contra replicação de vozes de actores por IA — resultado de greves que duraram meses em Hollywood. Músicos e locutores enfrentam desafios semelhantes à medida que serviços de clonagem proliferam.
        </p>
        <p style={S.p}>
          O standard <strong>C2PA</strong> (Coalition for Content Provenance and Authenticity) — adoptado pela Adobe, Microsoft, BBC e Sony — define metadados criptograficamente assinados para estabelecer a proveniência de conteúdo audio e vídeo. Cada clip gerado por IA pode carregar um manifesto que indica o modelo usado, a data e o operador — criando uma cadeia de custódia verificável.
        </p>
        <p style={S.p}>
          O problema do <strong>bias</strong> nos sistemas de TTS e ASR é documentado mas sub-discutido: modelos treinados em dados dominados por falantes jovens, masculinos e de variedades standard de inglês têm performance inferior em vozes femininas, idosas, com sotaques regionais fortes ou de línguas sub-representadas. Vozes sintetizadas de comunidades minoritárias têm qualidade auditiva inferior. A voz como <strong>dado biométrico</strong> — protegida ao mesmo nível que impressões digitais ou reconhecimento facial — é a direcção em que a regulação se move, com implicações profundas para o que as plataformas de clonagem podem armazenar e processar.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Futuro:</strong> a combinação de watermarking obrigatório (AudioSeal, SynthID), proveniência verificável (C2PA) e regulação de consentimento informado (EU AI Act, legislação estatal nos EUA) deverá criar um ecossistema onde a origem de qualquer audio pode ser verificada — tornando os deepfakes de voz rastreáveis mesmo que não imediatamente detectáveis pelo ouvido humano.
          </p>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Voice Cloning — Técnica</strong> — clonagem de voz cria um modelo TTS personalizado a partir de poucos segundos a minutos de áudio de um locutor-alvo; sistemas como XTTS ou Bark usam speaker embeddings para condicionar a síntese, replicando timbre, sotaque e cadência sem retreinar o modelo completo.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Voice Conversion</strong> — conversão de voz transforma as características do locutor (timbre, entoação) mantendo o conteúdo linguístico intacto; é usada em anonimização de voz, pós-produção e acessibilidade, recorrendo a arquiteturas como AutoVC ou StarGANv2 para o mapeamento entre locutores.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Detecção de Deepfakes de Voz</strong> — sistemas anti-spoofing como os avaliados na competição ASVspoof treinam classificadores binários sobre características de baixo nível (LFCC, CQT) ou representações aprendidas para distinguir voz humana autêntica de voz sintética ou reproduzida.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Regulação e Ética</strong> — a clonagem de voz sem consentimento levanta questões legais de direito à imagem sonora e pode ser usada para burla, desinformação ou manipulação; a União Europeia e várias jurisdições estão a desenvolver legislação específica que exige consentimento e marcação de conteúdo sintético.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
