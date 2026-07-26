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

export default function AUD5() {
  return (
    <div style={S.page}>
      <Link to="/speech-audio" style={S.back}>
        ← Speech & Audio AI
      </Link>
      <div style={S.badge}>MÓDULO {modules[4].num}</div>
      <h1 style={S.h1}>{modules[4].title}</h1>
      <p style={S.sub}>{modules[4].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Síntese de Música com IA</h2>
        <p style={S.p}>
          A geração automática de música remonta a 1957, com o{" "}
          <strong>ILLIAC Suite</strong> de Hiller e Isaacson (cadeias de
          Markov). Décadas depois, o sistema <strong>EMI</strong> de David Cope
          imitava o estilo de Bach ou Mozart por análise estatística.
        </p>
        <p style={S.p}>
          Os modelos modernos dividem-se em duas famílias. Os{" "}
          <strong>simbólicos</strong> operam sobre MIDI — sequências de eventos
          (nota, velocidade, duração). O <strong>Music Transformer</strong>{" "}
          (Google Magenta, 2018) aplica Transformer com{" "}
          <em>relative attention</em> sobre tokens MIDI, gerando piano music
          coerente ao longo de minutos.
        </p>
        <p style={S.p}>
          Os <strong>modelos de audio</strong> geram waveforms directamente ou
          via espectrogramas, capturando timbre e expressividade reais. Três
          paradigmas: <em>autoregressivo</em> (qualidade alta, lento),{" "}
          <em>diffusion</em> (equilíbrio qualidade-velocidade) e <em>GAN</em>{" "}
          (rápido, menos estável).
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Os modelos simbólicos têm estrutura harmónica explícita, mais fáceis
            de editar; os modelos de audio são mais realistas mas caixas negras.
          </p>
        </div>

        {/* SVG: music generation paradigms */}
        <div style={S.diagram}>
          <svg viewBox="0 0 760 265" width="100%" style={{ display: "block" }}>
            {/* MIDI symbolic path */}
            <rect
              x="10"
              y="30"
              width="120"
              height="44"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="70"
              y="49"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              MIDI SYMBOLIC
            </text>
            <text x="70" y="66" textAnchor="middle" fill="#94a3b8" fontSize="9">
              note sequence
            </text>

            <line
              x1="132"
              y1="52"
              x2="174"
              y2="52"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="170,48 178,52 170,56" fill={C} />

            <rect
              x="178"
              y="30"
              width="120"
              height="44"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="238"
              y="49"
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="700"
            >
              Music Transformer
            </text>
            <text
              x="238"
              y="66"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              relative attention
            </text>

            <line
              x1="300"
              y1="52"
              x2="342"
              y2="52"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="338,48 346,52 338,56" fill={C} />

            <rect
              x="346"
              y="30"
              width="100"
              height="44"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="396"
              y="55"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              MIDI output
            </text>

            <text x="30" y="20" fill="#64748b" fontSize="9">
              via simbólica
            </text>

            {/* Audio path */}
            <rect
              x="10"
              y="120"
              width="120"
              height="44"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke="#94a3b8"
              strokeWidth="1.5"
            />
            <text
              x="70"
              y="139"
              textAnchor="middle"
              fill="#e2e8f0"
              fontSize="10"
              fontWeight="700"
            >
              TEXT PROMPT
            </text>
            <text
              x="70"
              y="156"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              "jazz piano solo"
            </text>

            <line
              x1="132"
              y1="142"
              x2="174"
              y2="142"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="170,138 178,142 170,146" fill={C} />

            <rect
              x="178"
              y="120"
              width="120"
              height="44"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="238"
              y="139"
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="700"
            >
              Diffusion Model
            </text>
            <text
              x="238"
              y="156"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              latent audio space
            </text>

            <line
              x1="238"
              y1="164"
              x2="238"
              y2="178"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="234,174 242,174 238,182" fill={C} />

            <rect
              x="178"
              y="182"
              width="120"
              height="30"
              rx="6"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1"
            />
            <text
              x="238"
              y="201"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              spectrogram
            </text>

            <line
              x1="238"
              y1="212"
              x2="238"
              y2="224"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="234,220 242,220 238,228" fill={C} />

            <rect
              x="178"
              y="228"
              width="120"
              height="28"
              rx="6"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="238"
              y="246"
              textAnchor="middle"
              fill={C}
              fontSize="9"
              fontWeight="700"
            >
              waveform
            </text>

            <text x="30" y="112" fill="#64748b" fontSize="9">
              via audio
            </text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. MusicGen e AudioCraft</h2>
        <p style={S.p}>
          A Meta lançou em 2023 o <strong>AudioCraft</strong>, framework
          open-source com três modelos: <strong>MusicGen</strong> (música),{" "}
          <strong>AudioGen</strong> (efeitos sonoros) e <strong>EnCodec</strong>{" "}
          (codec neural), partilhando arquitectura entre domínios.
        </p>
        <p style={S.p}>
          O <strong>MusicGen</strong> é um language model sobre tokens EnCodec
          (RVQ), prevendo o próximo token condicionado em texto e opcionalmente
          numa melodia de referência. Variantes de <em>small</em> (300M) a{" "}
          <em>large</em> (3.3B), treinado em 20 000 horas de música licenciada.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Pipeline:</strong> texto → MusicGen LM → tokens EnCodec →
            decoder → waveform. O modelo large gera 30s de audio em ~10s numa
            GPU moderna.
          </p>
        </div>
        <p style={S.p}>
          A avaliação usa <strong>FAD</strong> (Fréchet Audio Distance),{" "}
          <strong>KL divergence</strong> e <strong>CLAP score</strong>{" "}
          (alinhamento semântico texto-audio).
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. AudioLDM e Diffusion para Audio</h2>
        <p style={S.p}>
          O <strong>AudioLDM</strong> (Liu et al., 2023) trouxe latent diffusion
          ao audio: comprime audio para um espaço latente via VAE, executa
          diffusion nesse espaço (mais eficiente do que na waveform) e
          descodifica o resultado.
        </p>
        <p style={S.p}>
          O conditioning textual usa <strong>CLAP</strong> — o equivalente ao
          CLIP para audio, aprendendo um espaço de embeddings partilhado
          texto-audio por contrastive learning.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>AudioLDM 2</strong> unifica música, fala e sound effects
            numa arquitectura única. O <strong>Stable Audio</strong> (Stability
            AI, 2024) acrescenta controlo explícito de duração e timing.
          </p>
        </div>
        <p style={S.p}>
          No mercado comercial, <strong>Suno</strong> e <strong>Udio</strong>{" "}
          geram faixas completas com letra e vocals a partir de prompts — mas
          ambos enfrentam processos judiciais da RIAA por uso de gravações
          protegidas no treino.
        </p>

        {/* SVG: AudioLDM pipeline */}
        <div style={S.diagram}>
          <svg viewBox="0 0 760 130" width="100%" style={{ display: "block" }}>
            <rect
              x="10"
              y="40"
              width="110"
              height="44"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="65"
              y="59"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              TEXT PROMPT
            </text>
            <text x="65" y="75" textAnchor="middle" fill="#94a3b8" fontSize="9">
              "relaxing jazz"
            </text>

            <line
              x1="122"
              y1="62"
              x2="162"
              y2="62"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="158,58 166,62 158,66" fill={C} />

            <rect
              x="166"
              y="30"
              width="120"
              height="64"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="226"
              y="52"
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="700"
            >
              CLAP
            </text>
            <text
              x="226"
              y="67"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              text encoder
            </text>
            <text
              x="226"
              y="82"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              audio-text joint space
            </text>

            <line
              x1="288"
              y1="62"
              x2="328"
              y2="62"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="324,58 332,62 324,66" fill={C} />

            <rect
              x="332"
              y="30"
              width="120"
              height="64"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="392"
              y="52"
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="700"
            >
              Diffusion
            </text>
            <text
              x="392"
              y="67"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              latent space · T steps
            </text>
            <text
              x="392"
              y="82"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              U-Net denoiser
            </text>

            <line
              x1="454"
              y1="62"
              x2="494"
              y2="62"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="490,58 498,62 490,66" fill={C} />

            <rect
              x="498"
              y="40"
              width="90"
              height="44"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="543"
              y="59"
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="700"
            >
              VAE
            </text>
            <text
              x="543"
              y="75"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              decoder
            </text>

            <line
              x1="590"
              y1="62"
              x2="630"
              y2="62"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="626,58 634,62 626,66" fill={C} />

            <rect
              x="634"
              y="30"
              width="110"
              height="64"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="689"
              y="52"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              MEL → AUDIO
            </text>
            <text
              x="689"
              y="67"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              mel spectrogram
            </text>
            <text
              x="689"
              y="82"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              → vocoder → wav
            </text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Sound Event Detection e Foley</h2>
        <p style={S.p}>
          O <strong>Foley</strong> é a arte de criar efeitos sonoros em
          pós-produção. A IA para Foley automatiza isto: dado um vídeo, gera
          audio sincronizado com os eventos visuais — o{" "}
          <strong>FoleyCrafter</strong> combina conditioning textual com análise
          de vídeo.
        </p>
        <p style={S.p}>
          O <strong>Sound Event Detection (SED)</strong> detecta e localiza
          eventos sonoros no tempo (onset/offset), como sequence labeling sobre
          frames. Dataset de referência: <strong>AudioSet</strong> (Google,
          2017) — 2M clips do YouTube, 527 classes.
        </p>
        <p style={S.p}>
          Em <strong>Music Source Separation</strong>, o objectivo é isolar
          stems (vocals, bateria, baixo) de uma faixa mixada.{" "}
          <strong>Demucs</strong> (Meta) e <strong>Open-Unmix</strong> são os
          modelos open-source mais usados, com aplicações em remixagem e
          karaoke.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Eco-acoustic monitoring:</strong> a Rainforest Connection
            usa classificadores de audio em tempo real para detectar motosserras
            em florestas tropicais e alertar guardas antes do abate ilegal.
          </p>
        </div>
      </div>
    </div>
  );
}
