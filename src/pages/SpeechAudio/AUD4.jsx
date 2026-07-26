import React from "react";
import { Link } from "react-router-dom";
import { modules } from "./SpeechAudio";

const C = "#4a9eed";
const S = {
  page: { maxWidth: 860, margin: "0 auto", padding: "0 1rem 4rem" },
  back: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "var(--text-secondary)",
    textDecoration: "none",
    fontSize: "0.9rem",
    marginBottom: "2rem",
  },
  badge: {
    display: "inline-block",
    background: "transparent",
    color: C,
    border: `1.5px solid ${C}`,
    fontSize: "0.72rem",
    fontWeight: 700,
    padding: "0.2rem 0.7rem",
    borderRadius: 20,
    marginBottom: "0.75rem",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
  h1: {
    fontSize: "2rem",
    fontWeight: 800,
    color: "var(--text-primary)",
    marginBottom: "0.4rem",
  },
  sub: {
    color: "var(--text-secondary)",
    fontSize: "1rem",
    lineHeight: 1.6,
    marginBottom: "2.5rem",
  },
  section: { marginBottom: "2.5rem" },
  h2: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: C,
    borderLeft: `3px solid ${C}`,
    paddingLeft: "0.85rem",
    marginBottom: "1rem",
  },
  highlight: {
    background: `${C}15`,
    borderLeft: `3px solid ${C}`,
    padding: "0.85rem 1.1rem",
    borderRadius: "0 8px 8px 0",
    marginBottom: "1rem",
  },
  note: {
    background: "var(--bg-secondary)",
    border: "1px solid var(--card-border)",
    padding: "0.85rem 1.1rem",
    borderRadius: 8,
    marginBottom: "1rem",
  },
  p: {
    color: "var(--text-secondary)",
    lineHeight: 1.75,
    marginBottom: "0.85rem",
  },
  diagram: {
    background: "var(--bg-secondary)",
    borderRadius: 12,
    padding: "1.5rem",
    marginBottom: "1rem",
    overflowX: "auto",
  },
  divider: {
    border: "none",
    borderTop: "1px solid var(--card-border)",
    margin: "2rem 0",
  },
};

export default function AUD4() {
  return (
    <div style={S.page}>
      <Link to="/speech-audio" style={S.back}>
        ← Speech & Audio AI
      </Link>
      <div style={S.badge}>MÓDULO {modules[3].num}</div>
      <h1 style={S.h1}>{modules[3].title}</h1>
      <p style={S.sub}>{modules[3].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>
          1. Speaker Recognition — Verificação e Identificação
        </h2>
        <p style={S.p}>
          O reconhecimento de locutor tem dois tasks:{" "}
          <strong>Speaker Verification (SV)</strong> — dado um utterance e uma
          claim de identidade, comparação 1:1 com threshold; e{" "}
          <strong>Speaker Identification (SI)</strong> — identificar o locutor
          de entre N speakers conhecidos (ranking 1:N).
        </p>
        <p style={S.p}>
          A abordagem clássica usa <strong>MFCC + GMM-UBM</strong>, adaptado por
          MAP para cada speaker alvo. Os <strong>i-vectors</strong> (Dehak et
          al., 2011) aplicam factor analysis para extrair um vector de
          identidade de dimensão fixa (~400D), representando o espaço de
          variabilidade de locutor e canal.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Métricas:</strong> EER (ponto em que False Acceptance =
            False Rejection) e minDCF (custo mínimo ponderado de erros).
            Sistemas modernos atingem EER de 0.5–2% em condições limpas.
          </p>
        </div>

        <div style={S.diagram}>
          <svg viewBox="0 0 740 130" width="100%" style={{ display: "block" }}>
            {/* Enrollment */}
            <rect
              x="10"
              y="20"
              width="130"
              height="40"
              rx="7"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="75"
              y="38"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              ENROLLMENT
            </text>
            <text x="75" y="52" textAnchor="middle" fill="#64748b" fontSize="8">
              audio de registo
            </text>

            <line
              x1="142"
              y1="40"
              x2="178"
              y2="40"
              stroke="#475569"
              strokeWidth="1.2"
            />
            <polygon points="178,36 186,40 178,44" fill="#475569" />

            {/* Speaker model */}
            <rect
              x="188"
              y="20"
              width="130"
              height="40"
              rx="7"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.8"
            />
            <text
              x="253"
              y="38"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              SPEAKER MODEL
            </text>
            <text
              x="253"
              y="52"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              embedding / GMM
            </text>

            {/* Test audio */}
            <rect
              x="10"
              y="78"
              width="130"
              height="40"
              rx="7"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="75"
              y="96"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              TESTE
            </text>
            <text
              x="75"
              y="110"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              audio de verificação
            </text>

            {/* Lines converging to SCORE — merge at (348,68) */}
            <line
              x1="320"
              y1="40"
              x2="348"
              y2="68"
              stroke="#475569"
              strokeWidth="1.2"
            />
            <line
              x1="142"
              y1="98"
              x2="348"
              y2="68"
              stroke="#475569"
              strokeWidth="1.2"
            />
            <line
              x1="348"
              y1="68"
              x2="356"
              y2="68"
              stroke="#475569"
              strokeWidth="1.5"
            />
            <polygon points="352,64 360,68 352,72" fill="#475569" />

            {/* Score box */}
            <rect
              x="362"
              y="48"
              width="110"
              height="40"
              rx="7"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="417"
              y="66"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              SCORE
            </text>
            <text
              x="417"
              y="80"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              similaridade coseno
            </text>

            <line
              x1="474"
              y1="68"
              x2="506"
              y2="68"
              stroke="#475569"
              strokeWidth="1.2"
            />
            <polygon points="506,64 514,68 506,72" fill="#475569" />

            {/* Threshold */}
            <rect
              x="516"
              y="48"
              width="110"
              height="40"
              rx="7"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="571"
              y="64"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              THRESHOLD
            </text>
            <text
              x="571"
              y="78"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              aceitar / rejeitar
            </text>

            <line
              x1="628"
              y1="68"
              x2="664"
              y2="68"
              stroke="#475569"
              strokeWidth="1.2"
            />
            <polygon points="664,64 672,68 664,72" fill="#475569" />

            <rect
              x="674"
              y="50"
              width="58"
              height="18"
              rx="5"
              fill={`${C}25`}
              stroke={C}
              strokeWidth="1"
            />
            <text
              x="703"
              y="63"
              textAnchor="middle"
              fill={C}
              fontSize="9"
              fontWeight="700"
            >
              ACEITE
            </text>
            <rect
              x="674"
              y="72"
              width="58"
              height="18"
              rx="5"
              fill="rgba(74,158,237,0.06)"
              stroke="#475569"
              strokeWidth="1"
            />
            <text
              x="703"
              y="85"
              textAnchor="middle"
              fill="#64748b"
              fontSize="9"
            >
              REJEITADO
            </text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. x-vectors e ECAPA-TDNN</h2>
        <p style={S.p}>
          Os <strong>x-vectors</strong> (Snyder et al., 2018) substituíram os
          i-vectors como representação standard: uma TDNN processa frames de
          audio, e uma camada de <strong>statistical pooling</strong> (média +
          desvio padrão) agrega a sequência num embedding fixo de 512D. Scoring
          com PLDA no espaço dos embeddings.
        </p>
        <p style={S.p}>
          O <strong>ECAPA-TDNN</strong> (Desplanques et al., 2020) introduz
          atenção por canal e conexões residuais multi-escala, sendo estado da
          arte no benchmark VoxCeleb.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Self-supervised speaker embeddings:</strong> o benchmark
            SUPERB avalia modelos como wav2vec 2.0 e HuBERT sem dados anotados.
            O dataset <strong>VoxCeleb2</strong> (6 112 speakers, 1.1M
            utterances, do YouTube) é a referência.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Speaker Diarization</h2>
        <p style={S.p}>
          A <strong>diarização</strong> responde a "quem falou quando?" —
          segmentar o audio e atribuir cada segmento a um speaker, sem conhecer
          a identidade nem exigir enrollment.
        </p>
        <p style={S.p}>
          O pipeline clássico encadeia: <strong>VAD</strong> → segmentação →
          embeddings por segmento → clustering → refinamento de fronteiras. A
          biblioteca <strong>pyannote.audio</strong> oferece modelos
          pré-treinados com DER inferior a 10% no AMI meeting corpus.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>EEND (Fujita et al., 2019):</strong> infere máscaras de
            actividade por speaker directamente do audio, sem clustering
            explícito, lidando com <em>overlapping speech</em> que os pipelines
            clássicos não resolvem.
          </p>
        </div>

        <div style={S.diagram}>
          <svg viewBox="0 0 740 130" width="100%" style={{ display: "block" }}>
            {/* Time axis */}
            <text x="20" y="20" fill="#94a3b8" fontSize="10" fontWeight="700">
              DIARIZATION — LINHA DO TEMPO
            </text>
            <line
              x1="20"
              y1="110"
              x2="720"
              y2="110"
              stroke="var(--card-border)"
              strokeWidth="1.5"
            />
            <text x="20" y="125" fill="#64748b" fontSize="8">
              0s
            </text>
            <text x="370" y="125" fill="#64748b" fontSize="8">
              30s
            </text>
            <text x="710" y="125" fill="#64748b" fontSize="8">
              60s
            </text>

            {/* Speaker 1 — blue */}
            <rect
              x="20"
              y="35"
              width="180"
              height="18"
              rx="4"
              fill="#4a9eed"
              opacity="0.85"
            />
            <rect
              x="260"
              y="35"
              width="120"
              height="18"
              rx="4"
              fill="#4a9eed"
              opacity="0.85"
            />
            <rect
              x="480"
              y="35"
              width="200"
              height="18"
              rx="4"
              fill="#4a9eed"
              opacity="0.85"
            />
            <text
              x="110"
              y="48"
              textAnchor="middle"
              fill="#fff"
              fontSize="8"
              fontWeight="700"
            >
              Speaker 1
            </text>
            <text
              x="320"
              y="48"
              textAnchor="middle"
              fill="#fff"
              fontSize="8"
              fontWeight="700"
            >
              Speaker 1
            </text>
            <text
              x="580"
              y="48"
              textAnchor="middle"
              fill="#fff"
              fontSize="8"
              fontWeight="700"
            >
              Speaker 1
            </text>

            {/* Speaker 2 — green */}
            <rect
              x="200"
              y="60"
              width="160"
              height="18"
              rx="4"
              fill={C}
              opacity="0.85"
            />
            <rect
              x="390"
              y="60"
              width="180"
              height="18"
              rx="4"
              fill={C}
              opacity="0.85"
            />
            <text
              x="280"
              y="73"
              textAnchor="middle"
              fill="#fff"
              fontSize="8"
              fontWeight="700"
            >
              Speaker 2
            </text>
            <text
              x="480"
              y="73"
              textAnchor="middle"
              fill="#fff"
              fontSize="8"
              fontWeight="700"
            >
              Speaker 2
            </text>

            {/* Speaker 3 — amber */}
            <rect x="570" y="35" width="0" height="0" />
            <rect
              x="690"
              y="60"
              width="30"
              height="18"
              rx="4"
              fill="#0284c7"
              opacity="0.85"
            />
            <text
              x="705"
              y="73"
              textAnchor="middle"
              fill="#fff"
              fontSize="7"
              fontWeight="700"
            >
              S3
            </text>

            {/* Overlap label */}
            <rect
              x="200"
              y="35"
              width="60"
              height="43"
              rx="4"
              fill="none"
              stroke="#7dd3fc"
              strokeWidth="1.5"
              strokeDasharray="3,2"
            />
            <text
              x="230"
              y="90"
              textAnchor="middle"
              fill="#7dd3fc"
              fontSize="8"
            >
              overlap
            </text>

            <rect
              x="390"
              y="35"
              width="90"
              height="43"
              rx="4"
              fill="none"
              stroke="#7dd3fc"
              strokeWidth="1.5"
              strokeDasharray="3,2"
            />
            <text
              x="435"
              y="90"
              textAnchor="middle"
              fill="#7dd3fc"
              fontSize="8"
            >
              overlap
            </text>
          </svg>
        </div>

        <p style={S.p}>
          Aplicações: transcrição de reuniões (Zoom AI, Teams, Otter.ai),
          legendagem com atribuição de locutor, e análise forense de audio.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Aplicações e Deployment</h2>
        <p style={S.p}>
          A <strong>biometria vocal em produção</strong> é usada para
          autenticação bancária telefónica, IVR e detecção de fraude em call
          centers — comparando a voz de clientes contra perfis biométricos
          registados.
        </p>
        <p style={S.p}>
          O <strong>anti-spoofing</strong> detecta ataques de replay, TTS
          sintético e voice conversion; o <strong>ASVspoof Challenge</strong> é
          o benchmark de referência.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Edge deployment:</strong> verificação em dispositivo usa
            TensorFlow Lite ou CoreML com modelos abaixo de 5 MB.{" "}
            <strong>Privacy:</strong> embeddings de speaker são dados
            biométricos sob o GDPR; a voice anonymization ajuda a cumprir
            requisitos de privacidade.
          </p>
        </div>
        <p style={S.p}>
          <strong>Fairness:</strong> modelos treinados predominantemente em voz
          masculina adulta degradam para voz feminina, crianças e falantes
          não-nativos — as avaliações NIST SRE documentam estas disparidades
          sistematicamente.
        </p>
      </div>
    </div>
  );
}
