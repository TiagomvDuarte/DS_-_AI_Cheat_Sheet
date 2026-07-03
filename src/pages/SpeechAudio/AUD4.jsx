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

export default function AUD4() {
  return (
    <div style={S.page}>
      <Link to="/speech-audio" style={S.back}>← Speech & Audio AI</Link>
      <div style={S.badge}>MÓDULO {modules[0].num}</div>
      <h1 style={S.h1}>{modules[3].title}</h1>
      <p style={S.sub}>{modules[3].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Speaker Recognition — Verificação e Identificação</h2>
        <p style={S.p}>
          O reconhecimento de locutor divide-se em dois tasks: <strong>Speaker Verification (SV)</strong> — dado um utterance de teste e uma claim de identidade, determinar se o utterance pertence à pessoa declarada (comparação 1:1 com threshold); e <strong>Speaker Identification (SI)</strong> — dado um utterance, identificar de entre N speakers conhecidos qual é o locutor (ranking 1:N).
        </p>
        <p style={S.p}>
          A abordagem clássica usa <strong>MFCC + GMM-UBM</strong>: um Universal Background Model (UBM) é treinado com audio de muitos locutores e depois adaptado por MAP (Maximum A Posteriori) para cada speaker alvo. Os <strong>i-vectors</strong> (Dehak et al., 2011) aplicam factor analysis para extrair um vector de identidade de dimensão fixa (~400D) a partir de qualquer utterance, representando o espaço de variabilidade de locutor e canal.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Métricas de avaliação:</strong> EER (Equal Error Rate) — ponto em que a False Acceptance Rate iguala a False Rejection Rate; DCF (Detection Cost Function) — custo ponderado de erros de acordo com custos de aplicação; minDCF — o mínimo alcançável do DCF. Valores típicos de EER em sistemas modernos: 0.5–2% em condições limpas.
          </p>
        </div>

        <div style={S.diagram}>
          <svg viewBox="0 0 740 130" width="100%" style={{ display: 'block' }}>
            {/* Enrollment */}
            <rect x="10" y="20" width="130" height="40" rx="7" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="75" y="38" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">ENROLLMENT</text>
            <text x="75" y="52" textAnchor="middle" fill="#64748b" fontSize="8">audio de registo</text>

            <line x1="142" y1="40" x2="178" y2="40" stroke="#475569" strokeWidth="1.2" />
            <polygon points="178,36 186,40 178,44" fill="#475569" />

            {/* Speaker model */}
            <rect x="188" y="20" width="130" height="40" rx="7" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.8" />
            <text x="253" y="38" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">SPEAKER MODEL</text>
            <text x="253" y="52" textAnchor="middle" fill="#64748b" fontSize="8">embedding / GMM</text>

            {/* Test audio */}
            <rect x="10" y="78" width="130" height="40" rx="7" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="75" y="96" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">TESTE</text>
            <text x="75" y="110" textAnchor="middle" fill="#64748b" fontSize="8">audio de verificação</text>

            {/* Lines converging to SCORE — merge at (348,68) */}
            <line x1="320" y1="40" x2="348" y2="68" stroke="#475569" strokeWidth="1.2" />
            <line x1="142" y1="98" x2="348" y2="68" stroke="#475569" strokeWidth="1.2" />
            <line x1="348" y1="68" x2="356" y2="68" stroke="#475569" strokeWidth="1.5" />
            <polygon points="352,64 360,68 352,72" fill="#475569" />

            {/* Score box */}
            <rect x="362" y="48" width="110" height="40" rx="7" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="417" y="66" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">SCORE</text>
            <text x="417" y="80" textAnchor="middle" fill="#64748b" fontSize="8">similaridade coseno</text>

            <line x1="474" y1="68" x2="506" y2="68" stroke="#475569" strokeWidth="1.2" />
            <polygon points="506,64 514,68 506,72" fill="#475569" />

            {/* Threshold */}
            <rect x="516" y="48" width="110" height="40" rx="7" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="571" y="64" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">THRESHOLD</text>
            <text x="571" y="78" textAnchor="middle" fill="#64748b" fontSize="8">aceitar / rejeitar</text>

            <line x1="628" y1="68" x2="664" y2="68" stroke="#475569" strokeWidth="1.2" />
            <polygon points="664,64 672,68 664,72" fill="#475569" />

            <rect x="674" y="50" width="58" height="18" rx="5" fill={`${C}25`} stroke={C} strokeWidth="1" />
            <text x="703" y="63" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">ACEITE</text>
            <rect x="674" y="72" width="58" height="18" rx="5" fill="rgba(249,115,22,0.06)" stroke="#475569" strokeWidth="1" />
            <text x="703" y="85" textAnchor="middle" fill="#64748b" fontSize="9">REJEITADO</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. x-vectors e ECAPA-TDNN</h2>
        <p style={S.p}>
          Os <strong>x-vectors</strong> (Snyder et al., 2018) substituíram os i-vectors como representação standard. Uma TDNN (Time Delay Neural Network) processa frames de audio com receptive fields temporais alargados; uma camada de <strong>statistical pooling</strong> (média + desvio padrão) agrega a sequência de duração variável num embedding fixo de 512D. O scoring é feito com PLDA (Probabilistic LDA) no espaço dos embeddings.
        </p>
        <p style={S.p}>
          O <strong>ECAPA-TDNN</strong> (Emphasized Channel Attention, Propagation and Aggregation TDNN, Desplanques et al., 2020) introduz atenção por canal, conexões residuais multi-escala e channel-dependent aggregation. É estado da arte no benchmark VoxCeleb. A arquitectura ResNet-34/50 com utterance-level pooling é igualmente competitiva.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Self-supervised speaker embeddings:</strong> o benchmark SUPERB avalia modelos como wav2vec 2.0 e HuBERT em tarefas de speaker sem dados anotados. Fine-tuning de representações pré-treinadas reduz significativamente a necessidade de dados de speaker rotulados. O dataset <strong>VoxCeleb2</strong> (6 112 speakers, 1.1M utterances, extraído do YouTube em condições reais) é o benchmark de referência.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Speaker Diarization</h2>
        <p style={S.p}>
          A <strong>diarização</strong> responde à questão "quem falou quando?" — segmentar o audio em regiões temporais e atribuir cada segmento a um speaker, sem conhecer a identidade dos locutores. Não é necessário enrollment prévio.
        </p>
        <p style={S.p}>
          O pipeline clássico encadeia: <strong>VAD</strong> (Voice Activity Detection, separar fala de silêncio/ruído) → segmentação → extracção de embeddings por segmento → clustering (agglomerative ou spectral) → refinamento de fronteiras. A biblioteca <strong>pyannote.audio</strong> (Bredin et al.) oferece modelos pré-treinados no HuggingFace com DER inferior a 10% no AMI meeting corpus.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>EEND (End-to-End Neural Diarization, Fujita et al., 2019):</strong> infere máscaras de actividade por speaker directamente a partir do audio, sem clustering explícito. Lida com <em>overlapping speech</em> (dois locutores em simultâneo) que os pipelines clássicos não conseguem resolver. EEND-VC estende o modelo a número variável de speakers.
          </p>
        </div>

        <div style={S.diagram}>
          <svg viewBox="0 0 740 130" width="100%" style={{ display: 'block' }}>
            {/* Time axis */}
            <text x="20" y="20" fill="#94a3b8" fontSize="10" fontWeight="700">DIARIZATION — LINHA DO TEMPO</text>
            <line x1="20" y1="110" x2="720" y2="110" stroke="var(--card-border)" strokeWidth="1.5" />
            <text x="20" y="125" fill="#64748b" fontSize="8">0s</text>
            <text x="370" y="125" fill="#64748b" fontSize="8">30s</text>
            <text x="710" y="125" fill="#64748b" fontSize="8">60s</text>

            {/* Speaker 1 — blue */}
            <rect x="20" y="35" width="180" height="18" rx="4" fill="#f97316" opacity="0.85" />
            <rect x="260" y="35" width="120" height="18" rx="4" fill="#f97316" opacity="0.85" />
            <rect x="480" y="35" width="200" height="18" rx="4" fill="#f97316" opacity="0.85" />
            <text x="110" y="48" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">Speaker 1</text>
            <text x="320" y="48" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">Speaker 1</text>
            <text x="580" y="48" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">Speaker 1</text>

            {/* Speaker 2 — green */}
            <rect x="200" y="60" width="160" height="18" rx="4" fill={C} opacity="0.85" />
            <rect x="390" y="60" width="180" height="18" rx="4" fill={C} opacity="0.85" />
            <text x="280" y="73" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">Speaker 2</text>
            <text x="480" y="73" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">Speaker 2</text>

            {/* Speaker 3 — amber */}
            <rect x="570" y="35" width="0" height="0" />
            <rect x="690" y="60" width="30" height="18" rx="4" fill="#f59e0b" opacity="0.85" />
            <text x="705" y="73" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700">S3</text>

            {/* Overlap label */}
            <rect x="200" y="35" width="60" height="43" rx="4" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3,2" />
            <text x="230" y="90" textAnchor="middle" fill="#fbbf24" fontSize="8">overlap</text>

            <rect x="390" y="35" width="90" height="43" rx="4" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3,2" />
            <text x="435" y="90" textAnchor="middle" fill="#fbbf24" fontSize="8">overlap</text>
          </svg>
        </div>

        <p style={S.p}>
          As aplicações práticas incluem transcrição de reuniões (Zoom AI, Microsoft Teams, Otter.ai), legendagem automática com atribuição de locutor, e análise forense de audio para identificação de intervenientes.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Aplicações e Deployment</h2>
        <p style={S.p}>
          A <strong>biometria vocal em produção</strong> é usada para autenticação bancária telefónica (Nuance, Pindrop), autenticação em IVR (Interactive Voice Response) e detecção de fraude em call centers — comparando a voz de clientes contra perfis biométricos registados.
        </p>
        <p style={S.p}>
          O <strong>anti-spoofing</strong> é crítico para a segurança: detectar ataques de replay (reprodução de gravações), TTS sintético e voice conversion. O <strong>ASVspoof Challenge</strong> é o benchmark de referência. Os artefactos de síntese incluem inconsistências espectrais e ausência de ruído de fundo natural.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Edge deployment:</strong> sistemas de verificação em dispositivo (smartphone, smart speaker) usam TensorFlow Lite ou CoreML com modelos abaixo de 5 MB. <strong>Privacy:</strong> embeddings de speaker são dados biométricos — categoria especial sob o GDPR. A voice anonymization (conversão de voz que preserva o conteúdo mas altera a identidade do locutor) permite cumprir requisitos de privacidade.
          </p>
        </div>
        <p style={S.p}>
          <strong>Fairness:</strong> os modelos de speaker recognition apresentam desempenho diferenciado por género, faixa etária e sotaque. As avaliações NIST SRE (Speaker Recognition Evaluation) documentam sistematicamente estas disparidades. Modelos treinados predominantemente em voz masculina adulta degradam para voz feminina, crianças e falantes não-nativos. A mitigação requer datasets de treino diversificados e avaliação explícita por grupos demográficos.
        </p>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Speaker Recognition — Verificação e Identificação</strong> — a verificação do locutor confirma se um utilizador é quem diz ser (1:1), enquanto a identificação determina quem está a falar de entre um conjunto de locutores conhecidos (1:N); ambas recorrem a embeddings de voz comparados por distância cosseno ou PLDA.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>x-vectors e ECAPA-TDNN</strong> — os x-vectors são embeddings de locutor extraídos por redes TDNN treinadas com softmax aumentado; o ECAPA-TDNN adiciona mecanismos de atenção e agregação de contexto multi-escala, alcançando estado da arte em tarefas de verificação de locutor.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Speaker Diarization</strong> — processo de segmentar e etiquetar um áudio com a informação de "quem fala quando", combinando deteção de atividade de voz, segmentação, extração de embeddings e clustering hierárquico ou espetral dos segmentos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Aplicações e Deployment</strong> — sistemas de reconhecimento de locutor são usados em autenticação por voz, transcrição de reuniões, call centers e legendagem automática; em produção importa gerir a atualização de modelos de voz e a resistência a ataques de spoofing.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
