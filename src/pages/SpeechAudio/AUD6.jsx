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

export default function AUD6() {
  return (
    <div style={S.page}>
      <Link to="/speech-audio" style={S.back}>
        ← Speech & Audio AI
      </Link>
      <div style={S.badge}>MÓDULO {modules[5].num}</div>
      <h1 style={S.h1}>{modules[5].title}</h1>
      <p style={S.sub}>{modules[5].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Audio Classification — Fundamentos</h2>
        <p style={S.p}>
          A classificação de audio atribui a um clip uma ou mais categorias —
          género musical, espécie de pássaro, emoção, ambiente acústico.
          Aplicações incluem monitorização ambiental, diagnóstico médico e
          moderação de conteúdo.
        </p>
        <p style={S.p}>
          As abordagens modernas tratam{" "}
          <strong>mel spectrogramas como imagens 2D</strong> (frequência × tempo
          × intensidade), adaptando CNNs de visão computacional — VGG, ResNet e
          sobretudo o <strong>EfficientNet-B0</strong>, um baseline eficiente.
        </p>
        <p style={S.p}>
          Para dependências temporais longas, RNNs bidireccionais e Transformers
          operam sobre sequências de frames; aplicações em tempo real exigem
          arquitecturas causais ou streaming.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Datasets:</strong> ESC-50 (50 classes ambientais),
            UrbanSound8K (10 classes urbanas), DCASE Challenge (acoustic scene
            classification, sound event detection).
          </p>
        </div>

        {/* SVG: audio classification pipeline */}
        <div style={S.diagram}>
          <svg viewBox="0 0 760 130" width="100%" style={{ display: "block" }}>
            <rect
              x="10"
              y="40"
              width="100"
              height="44"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="60"
              y="59"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              WAVEFORM
            </text>
            <text x="60" y="75" textAnchor="middle" fill="#94a3b8" fontSize="9">
              raw audio signal
            </text>

            <line
              x1="112"
              y1="62"
              x2="152"
              y2="62"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="148,58 156,62 148,66" fill={C} />

            <rect
              x="156"
              y="30"
              width="120"
              height="64"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="216"
              y="52"
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="700"
            >
              MEL SPECTROGRAM
            </text>
            <text
              x="216"
              y="67"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              2D image (freq × time)
            </text>
            <text
              x="216"
              y="82"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              128 mel bins · 128 frames
            </text>

            <line
              x1="278"
              y1="62"
              x2="318"
              y2="62"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="314,58 322,62 314,66" fill={C} />

            <rect
              x="322"
              y="30"
              width="100"
              height="64"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="372"
              y="55"
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="700"
            >
              CNN
            </text>
            <text
              x="372"
              y="70"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              EfficientNet-B0
            </text>
            <text
              x="372"
              y="85"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              feature maps
            </text>

            <line
              x1="424"
              y1="62"
              x2="464"
              y2="62"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="460,58 468,62 460,66" fill={C} />

            <rect
              x="468"
              y="40"
              width="90"
              height="44"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="513"
              y="59"
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="700"
            >
              POOLING
            </text>
            <text
              x="513"
              y="75"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              global avg pool
            </text>

            <line
              x1="560"
              y1="62"
              x2="600"
              y2="62"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="596,58 604,62 596,66" fill={C} />

            <rect
              x="604"
              y="30"
              width="140"
              height="64"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="674"
              y="52"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              CLASSIFIER
            </text>
            <text
              x="674"
              y="67"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              softmax / sigmoid
            </text>
            <text
              x="674"
              y="82"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              label probabilities
            </text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Audio Spectrogram Transformer (AST)</h2>
        <p style={S.p}>
          O <strong>AST</strong> (Gong et al., MIT, 2021) aplica o Vision
          Transformer a espectrogramas: divide-os em patches 16×16, cada um um
          token, processados por um Transformer encoder com self-attention
          global.
        </p>
        <p style={S.p}>
          A contribuição chave é o <strong>cross-modal transfer</strong>:
          inicializar com um ViT pré-treinado no ImageNet — filtros de bordas e
          texturas transferem-se bem. Fine-tuning no AudioSet atinge{" "}
          <strong>0.459 mAP</strong>, superando CNN14 (0.431).
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>SSAST</strong> pré-treina self-supervised (masked patch
            prediction). O <strong>PaSST</strong> introduz <em>patchout</em> —
            eliminar patches aleatoriamente no treino — como regularização que
            também acelera o treino.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Environmental Sound e Bioacoustics</h2>
        <p style={S.p}>
          A classificação de sons urbanos serve <strong>smart cities</strong>:
          monitorizar ruído (sirenes, construção, tráfego) permite optimizar
          rotas e detectar anomalias, viável com microfones de baixo custo e
          edge computing.
        </p>
        <p style={S.p}>
          A <strong>bioacústica computacional</strong> cresce rapidamente. O{" "}
          <strong>BirdNET</strong> (Cornell) identifica mais de 3 000 espécies
          de aves pelo canto. O <strong>BirdCLEF challenge</strong> identifica
          espécies em gravações de 24h em florestas tropicais, com ensembles de
          EfficientNet sobre mel spectrogramas.
        </p>
        <p style={S.p}>
          No domínio médico, aplica-se à <strong>auscultação pulmonar</strong>{" "}
          (crepitações e sibilos indicando pneumonia ou asma) e análise de choro
          de recém-nascidos.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Rainforest Connection</strong> instala dispositivos de
            escuta em florestas tropicais; classificadores em tempo real
            detectam motosserras e alertam guardas via SMS, protegendo mais de 3
            milhões de hectares em 20 países.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. CLAP e Audio-Language Models</h2>
        <p style={S.p}>
          O <strong>CLAP</strong> (LAION, 2022) é o equivalente ao CLIP para
          audio: um encoder de audio (HTSAT) e um de texto (BERT/RoBERTa)
          treinados com contrastive learning, maximizando a similaridade entre
          pares (audio, descrição) correctos.
        </p>
        <p style={S.p}>
          A <strong>zero-shot classification</strong> compara o embedding do
          audio com embeddings de descrições textuais de cada classe, sem
          necessidade de re-treino.
        </p>
        <p style={S.p}>
          O <strong>audio captioning</strong> gera descrições textuais de clips
          (datasets AudioCaps, Clotho). O <strong>Pengi</strong> (Microsoft,
          2023) unifica classificação, captioning e Audio QA num único modelo
          multi-task.
        </p>

        {/* SVG: CLAP contrastive training */}
        <div style={S.diagram}>
          <svg viewBox="0 0 760 180" width="100%" style={{ display: "block" }}>
            {/* Audio batch */}
            <rect
              x="10"
              y="20"
              width="120"
              height="50"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="70"
              y="41"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              AUDIO BATCH
            </text>
            <text x="70" y="58" textAnchor="middle" fill="#94a3b8" fontSize="9">
              N audio clips
            </text>

            <line
              x1="132"
              y1="45"
              x2="172"
              y2="45"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="168,41 176,45 168,49" fill={C} />

            <rect
              x="176"
              y="10"
              width="120"
              height="70"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="236"
              y="33"
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="700"
            >
              AUDIO ENCODER
            </text>
            <text
              x="236"
              y="50"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              HTSAT
            </text>
            <text
              x="236"
              y="67"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              → embedding A_i
            </text>

            {/* Text batch */}
            <rect
              x="10"
              y="110"
              width="120"
              height="50"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="70"
              y="131"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              TEXT BATCH
            </text>
            <text
              x="70"
              y="148"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              N descriptions
            </text>

            <line
              x1="132"
              y1="135"
              x2="172"
              y2="135"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="168,131 176,135 168,139" fill={C} />

            <rect
              x="176"
              y="100"
              width="120"
              height="70"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="236"
              y="123"
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="700"
            >
              TEXT ENCODER
            </text>
            <text
              x="236"
              y="140"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              BERT / RoBERTa
            </text>
            <text
              x="236"
              y="157"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              → embedding T_i
            </text>

            {/* Dashed lines from encoders to matrix — horizontal */}
            <line
              x1="298"
              y1="45"
              x2="338"
              y2="45"
              stroke={C}
              strokeWidth="1.2"
              strokeDasharray="4,3"
            />
            <polygon points="334,41 342,45 334,49" fill={C} />
            <line
              x1="298"
              y1="135"
              x2="338"
              y2="135"
              stroke={C}
              strokeWidth="1.2"
              strokeDasharray="4,3"
            />
            <polygon points="334,131 342,135 334,139" fill={C} />

            <rect
              x="342"
              y="20"
              width="130"
              height="140"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="407"
              y="45"
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="700"
            >
              SIMILARITY MATRIX
            </text>
            <text
              x="407"
              y="62"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              N × N cosine scores
            </text>
            {/* off-diagonal */}
            {[
              [360, 75],
              [382, 75],
              [404, 75],
              [360, 97],
              [404, 97],
              [360, 119],
              [382, 119],
            ].map(([x, y], i) => (
              <rect
                key={i}
                x={x}
                y={y}
                width="20"
                height="20"
                rx="3"
                fill="rgba(74,158,237,0.08)"
                stroke="rgba(74,158,237,0.25)"
                strokeWidth="0.8"
              />
            ))}
            {/* diagonal — positive pairs */}
            <rect
              x="360"
              y="75"
              width="20"
              height="20"
              rx="3"
              fill={C}
              opacity="0.8"
            />
            <rect
              x="382"
              y="97"
              width="20"
              height="20"
              rx="3"
              fill={C}
              opacity="0.8"
            />
            <rect
              x="404"
              y="119"
              width="20"
              height="20"
              rx="3"
              fill={C}
              opacity="0.5"
            />
            <text x="407" y="152" textAnchor="middle" fill={C} fontSize="8">
              diagonal = positive pairs
            </text>

            <line
              x1="474"
              y1="90"
              x2="514"
              y2="90"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="510,86 518,90 510,94" fill={C} />

            <rect
              x="518"
              y="60"
              width="130"
              height="60"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="583"
              y="83"
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="700"
            >
              CONTRASTIVE LOSS
            </text>
            <text
              x="583"
              y="100"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              InfoNCE (cross-entropy)
            </text>
            <text
              x="583"
              y="113"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              maximize diagonal
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
