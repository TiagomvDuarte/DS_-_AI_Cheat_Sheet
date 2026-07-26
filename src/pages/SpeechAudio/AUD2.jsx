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

export default function AUD2() {
  return (
    <div style={S.page}>
      <Link to="/speech-audio" style={S.back}>
        ← Speech & Audio AI
      </Link>
      <div style={S.badge}>MÓDULO {modules[1].num}</div>
      <h1 style={S.h1}>{modules[1].title}</h1>
      <p style={S.sub}>{modules[1].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Fundamentos de ASR</h2>
        <p style={S.p}>
          O pipeline clássico de ASR tem três componentes:{" "}
          <strong>acoustic model</strong> (frames → probabilidades de fonemas),{" "}
          <strong>pronunciation lexicon</strong> (fonemas → palavras) e{" "}
          <strong>language model</strong> (probabilidade de sequências de
          palavras), combinados via Viterbi search.
        </p>
        <p style={S.p}>
          A abordagem <strong>end-to-end</strong> aprende directamente audio →
          texto, eliminando estes componentes separados. As três famílias
          principais são CTC, atenção e Transducer (RNN-T).
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>CTC (Graves et al., 2006):</strong> alinha um output de
            comprimento variável com o input sem alinhamento explícito, usando
            um token <em>blank</em> para gaps. A loss soma logaritmicamente
            sobre todos os alinhamentos válidos. Decodificação: greedy (argmax +
            colapso) ou beam search com LM externo.
          </p>
        </div>
        <p style={S.p}>
          A métrica standard é o <strong>Word Error Rate (WER)</strong> = (S + D
          + I) / N (substituições, deleções, inserções sobre total de palavras).
          Humanos ficam tipicamente entre 4–6% em condições limpas.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 740 220" width="100%" style={{ display: "block" }}>
            {/* Row 1: Audio frames */}
            <text x="20" y="18" fill="#94a3b8" fontSize="9.5" fontWeight="700">
              FRAMES DE ÁUDIO
            </text>
            {[
              "F1",
              "F2",
              "F3",
              "F4",
              "F5",
              "F6",
              "F7",
              "F8",
              "F9",
              "F10",
              "F11",
              "F12",
            ].map((f, i) => (
              <g key={f}>
                <rect
                  x={20 + i * 56}
                  y="24"
                  width="50"
                  height="26"
                  rx="4"
                  fill="rgba(74,158,237,0.06)"
                  stroke="var(--card-border)"
                  strokeWidth="1"
                />
                <text
                  x={45 + i * 56}
                  y="41"
                  textAnchor="middle"
                  fill="#64748b"
                  fontSize="8.5"
                >
                  {f}
                </text>
              </g>
            ))}

            {/* Down arrow */}
            <line
              x1="370"
              y1="54"
              x2="370"
              y2="72"
              stroke="#475569"
              strokeWidth="1.5"
            />
            <polygon points="366,72 370,80 374,72" fill="#475569" />
            <text x="390" y="70" fill="#64748b" fontSize="8.5">
              modelo ASR
            </text>

            {/* Row 2: Raw CTC output */}
            <text x="20" y="96" fill="#94a3b8" fontSize="9.5" fontWeight="700">
              OUTPUT CTC (raw)
            </text>
            {[
              { ch: "H", blank: false },
              { ch: "H", blank: false },
              { ch: "_", blank: true },
              { ch: "E", blank: false },
              { ch: "E", blank: false },
              { ch: "_", blank: true },
              { ch: "L", blank: false },
              { ch: "L", blank: false },
              { ch: "L", blank: false },
              { ch: "_", blank: true },
              { ch: "O", blank: false },
              { ch: "O", blank: false },
            ].map(({ ch, blank }, i) => (
              <g key={i}>
                <rect
                  x={20 + i * 56}
                  y="102"
                  width="50"
                  height="32"
                  rx="4"
                  fill={
                    blank ? "rgba(71,85,105,0.15)" : "rgba(74,158,237,0.18)"
                  }
                  stroke={blank ? "#334155" : C}
                  strokeWidth="1.2"
                />
                <text
                  x={45 + i * 56}
                  y="123"
                  textAnchor="middle"
                  fill={blank ? "#475569" : C}
                  fontSize="12"
                  fontWeight="700"
                >
                  {ch}
                </text>
              </g>
            ))}

            {/* Collapse step label */}
            <text x="20" y="158" fill="#94a3b8" fontSize="9.5" fontWeight="700">
              COLAPSO CTC
            </text>
            <text x="20" y="172" fill="#64748b" fontSize="8.5">
              1) remover blanks (_) 2) juntar repetições
            </text>

            {/* Result boxes */}
            {["H", "E", "L", "O"].map((ch, i) => (
              <g key={ch}>
                <rect
                  x={20 + i * 58}
                  y="180"
                  width="50"
                  height="26"
                  rx="4"
                  fill="rgba(74,158,237,0.25)"
                  stroke={C}
                  strokeWidth="1.8"
                />
                <text
                  x={45 + i * 58}
                  y="198"
                  textAnchor="middle"
                  fill={C}
                  fontSize="13"
                  fontWeight="800"
                >
                  {ch}
                </text>
              </g>
            ))}

            {/* Arrow to final */}
            <line
              x1="258"
              y1="193"
              x2="298"
              y2="193"
              stroke="#475569"
              strokeWidth="1.5"
            />
            <polygon points="298,189 306,193 298,197" fill="#475569" />

            {/* Final output */}
            <rect
              x="308"
              y="178"
              width="110"
              height="32"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="2"
            />
            <text
              x="363"
              y="199"
              textAnchor="middle"
              fill={C}
              fontSize="14"
              fontWeight="800"
            >
              "HELLO"
            </text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Whisper — OpenAI</h2>
        <p style={S.p}>
          O <strong>Whisper</strong> (Radford et al., OpenAI, 2022) é um
          encoder-decoder Transformer treinado em 680 000 horas de audio
          multilingue da internet. O encoder processa um mel espectrograma de 80
          bins; o decoder gera texto auto-regressivamente.
        </p>
        <p style={S.p}>
          Cinco variantes, de <em>tiny</em> (39M) a <em>large-v3</em> (1.5B). É{" "}
          <strong>multitask</strong>: ASR, tradução para inglês, identificação
          de língua e VAD — controlado por tokens especiais no input do decoder.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Performance:</strong> WER de 2.7% no LibriSpeech clean
            (humano ~5.8%), zero-shot em 99 línguas.{" "}
            <strong>Limitações:</strong> lento em tempo real com large-v3,
            alucina em silêncio prolongado, degrada com sotaques fortes.
          </p>
        </div>
        <p style={S.p}>
          Para deployment: <strong>Whisper.cpp</strong> (C++, quantização
          INT4/INT8, corre em CPU) e <strong>Faster-Whisper</strong>{" "}
          (CTranslate2, ~4× mais rápido, menos memória).
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. wav2vec 2.0 e Self-Supervised ASR</h2>
        <p style={S.p}>
          O <strong>wav2vec 2.0</strong> (Baevski et al., Meta, 2020) aprende
          representações de audio sem transcrições. Três componentes: encoder
          CNN (waveform → latentes), Transformer de contexto, e quantização com
          codebook.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Pré-treino por masked prediction:</strong> partes das
            representações latentes são maskadas; o modelo prevê a representação
            quantizada correcta entre distractores negativos, com loss
            contrastiva mais um termo de diversidade.
          </p>
        </div>
        <p style={S.p}>
          Com apenas <strong>10 minutos de dados anotados</strong> em
          fine-tuning, wav2vec 2.0 supera modelos supervisionados treinados em
          100 horas. O <strong>MMS</strong> (Meta, 2023) estende isto a 1 162
          línguas.
        </p>
        <p style={S.p}>
          O <strong>Conformer</strong> combina convoluções locais com
          self-attention global — arquitectura híbrida estado da arte em vários
          benchmarks de ASR.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Desafios e Produção</h2>
        <p style={S.p}>
          O <strong>ruído ambiental</strong> é o principal factor de degradação.
          Soluções: beamforming com arrays de microfones, spectral subtraction e
          treino com dados ruidosos aumentados.
        </p>
        <p style={S.p}>
          Modelos treinados predominantemente em inglês americano degradam com
          outros sotaques; mitiga-se com dados de treino diversificados ou
          fine-tuning no sotaque alvo.
        </p>
        <p style={S.p}>
          <strong>Streaming ASR</strong> requer latência inferior a 300 ms — via
          Streaming Conformer (chunks com atenção causal) ou RNN-T/Transducer
          (emissão incremental de tokens).
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 740 140" width="100%" style={{ display: "block" }}>
            {/* Audio chunks */}
            <text x="20" y="20" fill="#94a3b8" fontSize="10" fontWeight="700">
              CHUNKS DE AUDIO (streaming)
            </text>
            {[0, 1, 2, 3].map((i) => (
              <rect
                key={i}
                x={20 + i * 55}
                y="28"
                width="48"
                height="36"
                rx="6"
                fill="rgba(74,158,237,0.06)"
                stroke={C}
                strokeWidth="1.2"
              />
            ))}
            {["t=0", "t=1", "t=2", "t=3"].map((t, i) => (
              <text
                key={t}
                x={44 + i * 55}
                y="51"
                textAnchor="middle"
                fill={C}
                fontSize="9"
              >
                {t}
              </text>
            ))}

            {/* Arrow to encoder */}
            <line
              x1="246"
              y1="46"
              x2="282"
              y2="46"
              stroke="#475569"
              strokeWidth="1.5"
            />
            <polygon points="282,42 290,46 282,50" fill="#475569" />

            {/* Encoder box */}
            <rect
              x="292"
              y="28"
              width="110"
              height="36"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="347"
              y="51"
              textAnchor="middle"
              fill={C}
              fontSize="11"
              fontWeight="700"
            >
              ENCODER
            </text>

            {/* Arrow to transducer */}
            <line
              x1="402"
              y1="46"
              x2="438"
              y2="46"
              stroke="#475569"
              strokeWidth="1.5"
            />
            <polygon points="438,42 446,46 438,50" fill="#475569" />

            {/* Transducer box */}
            <rect
              x="448"
              y="28"
              width="120"
              height="36"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="508"
              y="51"
              textAnchor="middle"
              fill={C}
              fontSize="11"
              fontWeight="700"
            >
              TRANSDUCER
            </text>

            {/* Incremental output */}
            <line
              x1="568"
              y1="46"
              x2="604"
              y2="46"
              stroke="#475569"
              strokeWidth="1.5"
            />
            <polygon points="604,42 612,46 604,50" fill="#475569" />
            <rect
              x="614"
              y="28"
              width="110"
              height="36"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="669"
              y="48"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              "Bom dia..."
            </text>

            {/* Latency label */}
            <line
              x1="20"
              y1="100"
              x2="724"
              y2="100"
              stroke="var(--card-border)"
              strokeWidth="1"
              strokeDasharray="4,3"
            />
            <rect
              x="290"
              y="110"
              width="160"
              height="22"
              rx="6"
              fill="rgba(74,158,237,0.06)"
            />
            <text x="370" y="125" textAnchor="middle" fill={C} fontSize="10">
              latência &lt; 300 ms
            </text>
          </svg>
        </div>

        <p style={S.p}>
          Plataformas de produção: <strong>NVIDIA Riva</strong> (GPU
          enterprise), <strong>WhisperKit</strong> (iOS/Core ML) e{" "}
          <strong>Kaldi</strong> (framework legacy ainda usado em
          telecomunicações).
        </p>
      </div>
    </div>
  );
}
