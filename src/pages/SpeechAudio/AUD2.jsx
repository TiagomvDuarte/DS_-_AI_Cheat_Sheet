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

export default function AUD2() {
  return (
    <div style={S.page}>
      <Link to="/speech-audio" style={S.back}>← Speech & Audio AI</Link>
      <div style={S.badge}>MÓDULO {modules[0].num}</div>
      <h1 style={S.h1}>{modules[1].title}</h1>
      <p style={S.sub}>{modules[1].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Fundamentos de ASR</h2>
        <p style={S.p}>
          O pipeline clássico de ASR divide-se em três componentes independentes: o <strong>acoustic model</strong> converte frames de audio em probabilidades de fonemas; o <strong>pronunciation lexicon</strong> mapeia sequências de fonemas em palavras; o <strong>language model</strong> atribui probabilidades a sequências de palavras. A decodificação combina os três via Viterbi search num espaço de hipóteses.
        </p>
        <p style={S.p}>
          A abordagem <strong>end-to-end</strong> elimina estes componentes separados, aprendendo directamente a mapeação audio → texto. As três famílias principais são CTC, modelos com atenção e Transducer (RNN-T).
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>CTC — Connectionist Temporal Classification (Graves et al., 2006):</strong> permite alinhar uma sequência de output de comprimento variável com o input sem requerer alinhamento explícito. Introduz um token especial <em>blank</em> para representar gaps. A loss é calculada como a soma logarítmica sobre todos os alinhamentos válidos. Decodificação: greedy (argmax por frame + colapso de repetições) ou beam search com language model externo.
          </p>
        </div>
        <p style={S.p}>
          A métrica standard de ASR é o <strong>Word Error Rate (WER)</strong>: WER = (S + D + I) / N, onde S são substituições, D deleções, I inserções e N o número total de palavras na transcrição de referência. Valores humanos situam-se tipicamente entre 4–6% em condições limpas.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 740 220" width="100%" style={{ display: 'block' }}>
            {/* Row 1: Audio frames */}
            <text x="20" y="18" fill="#94a3b8" fontSize="9.5" fontWeight="700">FRAMES DE ÁUDIO</text>
            {['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12'].map((f, i) => (
              <g key={f}>
                <rect x={20 + i * 56} y="24" width="50" height="26" rx="4"
                  fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
                <text x={45 + i * 56} y="41" textAnchor="middle" fill="#64748b" fontSize="8.5">{f}</text>
              </g>
            ))}

            {/* Down arrow */}
            <line x1="370" y1="54" x2="370" y2="72" stroke="#475569" strokeWidth="1.5" />
            <polygon points="366,72 370,80 374,72" fill="#475569" />
            <text x="390" y="70" fill="#64748b" fontSize="8.5">modelo ASR</text>

            {/* Row 2: Raw CTC output */}
            <text x="20" y="96" fill="#94a3b8" fontSize="9.5" fontWeight="700">OUTPUT CTC (raw)</text>
            {[
              {ch:'H', blank:false},
              {ch:'H', blank:false},
              {ch:'_', blank:true},
              {ch:'E', blank:false},
              {ch:'E', blank:false},
              {ch:'_', blank:true},
              {ch:'L', blank:false},
              {ch:'L', blank:false},
              {ch:'L', blank:false},
              {ch:'_', blank:true},
              {ch:'O', blank:false},
              {ch:'O', blank:false},
            ].map(({ch, blank}, i) => (
              <g key={i}>
                <rect x={20 + i * 56} y="102" width="50" height="32" rx="4"
                  fill={blank ? 'rgba(71,85,105,0.15)' : 'rgba(249,115,22,0.18)'}
                  stroke={blank ? '#334155' : C} strokeWidth="1.2" />
                <text x={45 + i * 56} y="123" textAnchor="middle"
                  fill={blank ? '#475569' : C} fontSize="12" fontWeight="700">{ch}</text>
              </g>
            ))}

            {/* Collapse step label */}
            <text x="20" y="158" fill="#94a3b8" fontSize="9.5" fontWeight="700">COLAPSO CTC</text>
            <text x="20" y="172" fill="#64748b" fontSize="8.5">1) remover blanks (_)   2) juntar repetições</text>

            {/* Result boxes */}
            {['H','E','L','O'].map((ch, i) => (
              <g key={ch}>
                <rect x={20 + i * 58} y="180" width="50" height="26" rx="4"
                  fill="rgba(249,115,22,0.25)" stroke={C} strokeWidth="1.8" />
                <text x={45 + i * 58} y="198" textAnchor="middle" fill={C} fontSize="13" fontWeight="800">{ch}</text>
              </g>
            ))}

            {/* Arrow to final */}
            <line x1="258" y1="193" x2="298" y2="193" stroke="#475569" strokeWidth="1.5" />
            <polygon points="298,189 306,193 298,197" fill="#475569" />

            {/* Final output */}
            <rect x="308" y="178" width="110" height="32" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="2" />
            <text x="363" y="199" textAnchor="middle" fill={C} fontSize="14" fontWeight="800">"HELLO"</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Whisper — OpenAI</h2>
        <p style={S.p}>
          O <strong>Whisper</strong> (Radford et al., OpenAI, 2022) é um modelo encoder-decoder baseado em Transformer, treinado em 680 000 horas de audio multilingue recolhido da internet. O encoder processa um mel espectrograma de 80 bins após extracção com CNN, e o decoder gera texto auto-regressivamente.
        </p>
        <p style={S.p}>
          Existem cinco variantes: <em>tiny</em> (39M parâmetros), <em>base</em> (74M), <em>small</em> (244M), <em>medium</em> (769M) e <em>large-v3</em> (1.5B). O modelo é <strong>multitask</strong>: ASR, tradução de fala (qualquer língua para inglês), identificação de língua e voice activity detection — tudo controlado por tokens especiais na sequência de input do decoder.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Performance:</strong> WER de 2.7% no LibriSpeech clean (desempenho humano ~5.8%). Zero-shot em 99 línguas. <strong>Limitações:</strong> lentidão em tempo real com large-v3, alucinação em silêncio prolongado, degradação com sotaques fortes.
          </p>
        </div>
        <p style={S.p}>
          Para deployment eficiente existem dois projectos principais: <strong>Whisper.cpp</strong> (implementação em C++ com suporte a quantização INT4/INT8, corre em CPU sem GPU) e <strong>Faster-Whisper</strong> (backend CTranslate2, tipicamente 4× mais rápido que a implementação original com menor uso de memória).
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. wav2vec 2.0 e Self-Supervised ASR</h2>
        <p style={S.p}>
          O <strong>wav2vec 2.0</strong> (Baevski et al., Meta, 2020) introduziu self-supervised learning para ASR: aprender representações de audio de alta qualidade sem necessidade de transcrições. A arquitectura tem três componentes: um encoder CNN que converte a waveform bruta em representações latentes, uma rede Transformer de contexto, e um módulo de quantização com codebook.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Pré-treino por masked prediction:</strong> porções das representações latentes são maskadas; o modelo aprende a prever a representação quantizada correcta entre um conjunto de distractores negativos. A loss é contrastiva (softmax sobre distractores) mais um termo de diversidade que incentiva uso uniforme do codebook.
          </p>
        </div>
        <p style={S.p}>
          Com apenas <strong>10 minutos de dados anotados</strong> em fine-tuning (CTC loss + linear layer), wav2vec 2.0 supera modelos supervisionados treinados em 100 horas. O projecto <strong>MMS</strong> (Massively Multilingual Speech, Meta, 2023) estende esta abordagem a 1 162 línguas, incluindo línguas com apenas 1 hora de dados disponíveis.
        </p>
        <p style={S.p}>
          O <strong>Conformer</strong> combina convoluções locais (CNN captura features de curto alcance) com self-attention global (captura dependências de longo alcance). Esta arquitectura híbrida CNN-Transformer é estado da arte em vários benchmarks de ASR.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Desafios e Produção</h2>
        <p style={S.p}>
          O <strong>ruído ambiental</strong> é o principal factor de degradação de ASR. As soluções incluem beamforming com arrays de microfones (filtragem espacial), spectral subtraction (estimar e remover espectro de ruído estacionário) e treino com dados ruidosos aumentados (noise-robust training).
        </p>
        <p style={S.p}>
          Os modelos treinados predominantemente em inglês americano standard degradam significativamente com sotaques africanos, asiáticos ou europeus. As abordagens de mitigação incluem accent-robust training com dados diversificados e accent adaptation por fine-tuning em pequenas amostras do sotaque alvo.
        </p>
        <p style={S.p}>
          <strong>Streaming ASR</strong> requere latência inferior a 300 ms. As arquitecturas adequadas são: Streaming Conformer (processamento por chunks com atenção causal), RNN-T/Transducer (emite tokens incrementalmente) e chunk-based attention. As disfluências ("uh", "um", repetições) podem ser modeladas explicitamente ou filtradas no pós-processamento.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 740 140" width="100%" style={{ display: 'block' }}>
            {/* Audio chunks */}
            <text x="20" y="20" fill="#94a3b8" fontSize="10" fontWeight="700">CHUNKS DE AUDIO (streaming)</text>
            {[0,1,2,3].map(i => (
              <rect key={i} x={20 + i * 55} y="28" width="48" height="36" rx="6"
                fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.2" />
            ))}
            {['t=0', 't=1', 't=2', 't=3'].map((t, i) => (
              <text key={t} x={44 + i * 55} y="51" textAnchor="middle" fill={C} fontSize="9">{t}</text>
            ))}

            {/* Arrow to encoder */}
            <line x1="246" y1="46" x2="282" y2="46" stroke="#475569" strokeWidth="1.5" />
            <polygon points="282,42 290,46 282,50" fill="#475569" />

            {/* Encoder box */}
            <rect x="292" y="28" width="110" height="36" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="347" y="51" textAnchor="middle" fill={C} fontSize="11" fontWeight="700">ENCODER</text>

            {/* Arrow to transducer */}
            <line x1="402" y1="46" x2="438" y2="46" stroke="#475569" strokeWidth="1.5" />
            <polygon points="438,42 446,46 438,50" fill="#475569" />

            {/* Transducer box */}
            <rect x="448" y="28" width="120" height="36" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="508" y="51" textAnchor="middle" fill={C} fontSize="11" fontWeight="700">TRANSDUCER</text>

            {/* Incremental output */}
            <line x1="568" y1="46" x2="604" y2="46" stroke="#475569" strokeWidth="1.5" />
            <polygon points="604,42 612,46 604,50" fill="#475569" />
            <rect x="614" y="28" width="110" height="36" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="669" y="48" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">"Bom dia..."</text>

            {/* Latency label */}
            <line x1="20" y1="100" x2="724" y2="100" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="4,3" />
            <rect x="290" y="110" width="160" height="22" rx="6" fill="rgba(249,115,22,0.06)" />
            <text x="370" y="125" textAnchor="middle" fill={C} fontSize="10">latência &lt; 300 ms</text>
          </svg>
        </div>

        <p style={S.p}>
          Para deployment em produção, as principais plataformas são: <strong>NVIDIA Riva</strong> (servidor GPU enterprise), <strong>WhisperKit</strong> (iOS optimizado com Core ML), <strong>Whisper.cpp</strong> (CPU offline sem dependências) e <strong>Kaldi</strong> (framework legacy ainda usado em produção em telecomunicações).
        </p>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Fundamentos de ASR</strong> — o reconhecimento automático de voz converte áudio em texto usando modelos acústicos (que relacionam sons a fonemas) e modelos de linguagem (que determinam sequências de palavras prováveis); a métrica principal é a Word Error Rate (WER).</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Whisper — OpenAI</strong> — modelo de ASR da OpenAI treinado com 680 000 horas de áudio multilingue supervisionado retirado da internet; suporta transcrição e tradução em mais de 90 línguas com elevada robustez a sotaques e ruído de fundo.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>wav2vec 2.0 e Self-Supervised ASR</strong> — aprende representações de áudio por auto-supervisão através de uma tarefa de contrastiva sobre o sinal mascarado, necessitando de muito menos dados rotulados para fine-tuning; serve de base para sistemas ASR de baixo recurso.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Desafios e Produção</strong> — em produção é necessário gerir latência (streaming vs. batch), normalização de texto (números, pontuação), adaptação a domínio específico e robustez a canais de áudio de baixa qualidade como telefonia ou microfones distantes.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
