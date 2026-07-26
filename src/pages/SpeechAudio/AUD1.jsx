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

export default function AUD1() {
  return (
    <div style={S.page}>
      <Link to="/speech-audio" style={S.back}>
        ← Speech & Audio AI
      </Link>
      <div style={S.badge}>MÓDULO {modules[0].num}</div>
      <h1 style={S.h1}>{modules[0].title}</h1>
      <p style={S.sub}>{modules[0].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Representação do Sinal de Audio</h2>
        <p style={S.p}>
          Um sinal de audio digital é uma sequência de amostras da pressão do ar
          ao longo do tempo — a <strong>waveform</strong>. O{" "}
          <strong>sample rate</strong> determina quantas amostras/segundo: 44
          100 Hz (CD), 16 000 Hz (ASR), 8 000 Hz (telefonia). O{" "}
          <strong>bit depth</strong> define a resolução de amplitude — 16 bits
          dão 65 536 níveis, suficiente para a dinâmica auditiva humana.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Fourier Transform:</strong> qualquer sinal periódico
            decompõe-se em somas de sinusóides. Para sinais discretos usa-se a
            DFT; a FFT reduz a complexidade de O(n²) para O(n log n), tornando o
            cálculo praticável em tempo real.
          </p>
        </div>
        <p style={S.p}>
          A <strong>Short-Time Fourier Transform (STFT)</strong> aplica a FFT a
          janelas deslizantes (tipicamente 25 ms, hop 10 ms), produzindo um{" "}
          <strong>espectrograma 2D</strong> — eixo X tempo, eixo Y frequência. A
          função de janela (Hann, Hamming) reduz o <em>spectral leakage</em>. O
          espectrograma de magnitude descarta a fase, geralmente irrelevante
          para compreensão de audio.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 200" width="100%" style={{ display: "block" }}>
            {/* Waveform box */}
            <rect
              x="10"
              y="40"
              width="160"
              height="120"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="90"
              y="68"
              textAnchor="middle"
              fill={C}
              fontSize="11"
              fontWeight="700"
            >
              WAVEFORM
            </text>
            <text x="90" y="84" textAnchor="middle" fill="#94a3b8" fontSize="9">
              amplitude × tempo
            </text>
            {/* waveform squiggle */}
            <polyline
              points="30,120 45,100 55,130 65,95 75,125 85,105 95,128 105,98 115,122 125,108 140,118"
              fill="none"
              stroke={C}
              strokeWidth="1.5"
            />

            {/* Arrow */}
            <line
              x1="172"
              y1="100"
              x2="208"
              y2="100"
              stroke="#475569"
              strokeWidth="1.5"
            />
            <polygon points="208,96 216,100 208,104" fill="#475569" />
            <text
              x="192"
              y="93"
              textAnchor="middle"
              fill="#64748b"
              fontSize="9"
            >
              FFT
            </text>

            {/* FFT box */}
            <rect
              x="218"
              y="40"
              width="160"
              height="120"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="298"
              y="68"
              textAnchor="middle"
              fill={C}
              fontSize="11"
              fontWeight="700"
            >
              ESPECTRO
            </text>
            <text
              x="298"
              y="84"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              frequência × amplitude
            </text>
            {/* spectrum bars */}
            <rect
              x="238"
              y="118"
              width="8"
              height="20"
              fill={C}
              opacity="0.9"
            />
            <rect
              x="250"
              y="108"
              width="8"
              height="30"
              fill={C}
              opacity="0.8"
            />
            <rect
              x="262"
              y="100"
              width="8"
              height="38"
              fill={C}
              opacity="0.7"
            />
            <rect
              x="274"
              y="112"
              width="8"
              height="26"
              fill={C}
              opacity="0.6"
            />
            <rect
              x="286"
              y="120"
              width="8"
              height="18"
              fill={C}
              opacity="0.5"
            />
            <rect
              x="298"
              y="124"
              width="8"
              height="14"
              fill={C}
              opacity="0.4"
            />
            <rect
              x="310"
              y="126"
              width="8"
              height="12"
              fill={C}
              opacity="0.3"
            />
            <rect
              x="322"
              y="128"
              width="8"
              height="10"
              fill={C}
              opacity="0.2"
            />
            <rect
              x="334"
              y="129"
              width="8"
              height="9"
              fill={C}
              opacity="0.15"
            />

            {/* Arrow */}
            <line
              x1="380"
              y1="100"
              x2="416"
              y2="100"
              stroke="#475569"
              strokeWidth="1.5"
            />
            <polygon points="416,96 424,100 416,104" fill="#475569" />
            <text
              x="400"
              y="93"
              textAnchor="middle"
              fill="#64748b"
              fontSize="9"
            >
              STFT
            </text>

            {/* Spectrogram box */}
            <rect
              x="426"
              y="40"
              width="330"
              height="120"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="591"
              y="62"
              textAnchor="middle"
              fill={C}
              fontSize="11"
              fontWeight="700"
            >
              ESPECTROGRAMA 2D
            </text>
            {/* grid */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((col) =>
              [0, 1, 2, 3, 4, 5, 6, 7].map((row) => {
                const intensity = Math.random();
                return (
                  <rect
                    key={`${col}-${row}`}
                    x={446 + col * 18}
                    y={70 + row * 10}
                    width="17"
                    height="9"
                    fill={`rgba(74,158,237,${0.1 + intensity * 0.85})`}
                    rx="1"
                  />
                );
              }),
            )}
            <text
              x="591"
              y="155"
              textAnchor="middle"
              fill="#64748b"
              fontSize="9"
            >
              tempo →
            </text>
            <text
              x="436"
              y="110"
              textAnchor="middle"
              fill="#64748b"
              fontSize="9"
              transform="rotate(-90,436,110)"
            >
              freq →
            </text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Mel Filterbanks e MFCC</h2>
        <p style={S.p}>
          O ouvido humano não percebe as frequências de forma linear — é mais
          sensível a baixas frequências. A <strong>escala Mel</strong> modela
          isto: mel = 2595 × log₁₀(1 + f/700). Um banco de filtros triangulares
          espaçados na escala Mel (40–80 filtros) é aplicado ao espectrograma de
          potência, produzindo o <strong>mel filterbank output</strong>.
        </p>
        <p style={S.p}>
          Os <strong>MFCC</strong> aplicam log ao filterbank, depois DCT para
          decorrelacionar os coeficientes, retendo os primeiros 13. Com deltas e
          delta-deltas obtêm-se 39 features por frame.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Razão do DCT:</strong> os coeficientes do filterbank são
            correlacionados entre bandas adjacentes; a DCT comprime a informação
            relevante nos primeiros coeficientes e remove essa correlação.
          </p>
        </div>
        <p style={S.p}>
          <strong>Limitações dos MFCC:</strong> descartam fase, são sensíveis a
          ruído e exigem feature engineering manual. Modelos end-to-end modernos
          (wav2vec 2.0, Whisper) aprendem directamente da waveform, superando os
          MFCC em ASR.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Pré-processamento e Data Augmentation</h2>
        <p style={S.p}>
          Antes do treino, a waveform é normalizada por amplitude de pico ou
          nível RMS. Em ambientes ruidosos a qualidade das features degrada,
          tornando o data augmentation essencial.
        </p>
        <p style={S.p}>
          <strong>Noise augmentation:</strong> adicionar ruído real do dataset
          MUSAN; convolução com Room Impulse Responses simula reverberação em
          diferentes espaços.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>SpecAugment (Park et al., 2019):</strong> augmentation no
            próprio espectrograma — <em>frequency masking</em> e{" "}
            <em>time masking</em>. Técnica padrão em treino ASR, com ganhos
            significativos sem dados adicionais.
          </p>
        </div>
        <p style={S.p}>
          A <strong>speed perturbation</strong> altera a velocidade por factores
          0.9/1.0/1.1, expandindo o dataset 3× sem novas gravações.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Modelos de Audio — Evolução</h2>
        <p style={S.p}>
          Os <strong>HMMs</strong> dominaram o reconhecimento de fala durante
          três décadas: cada fonema é um HMM de 3–5 estados, com Viterbi a
          encontrar o caminho mais provável. HMM-GMM foi o estado da arte até
          2012.
        </p>
        <p style={S.p}>
          Em 2012, Hinton et al. substituíram os GMM por DNNs (
          <strong>HMM-DNN híbrido</strong>), reduzindo o WER ~30% no TIMIT.
          RNN/LSTM capturaram dependências temporais longas; CNNs trataram
          espectrogramas como imagens.
        </p>
        <p style={S.p}>
          A era dos <strong>Transformers</strong> trouxe o AST, wav2vec 2.0 e
          Whisper — self-attention sobre frames de audio, capturando
          dependências de longo alcance sem as limitações dos LSTM.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 130" width="100%" style={{ display: "block" }}>
            {/* Timeline line */}
            <line
              x1="40"
              y1="65"
              x2="720"
              y2="65"
              stroke="var(--card-border)"
              strokeWidth="2"
            />
            {/* Nodes */}
            {[
              { x: 60, label: "HMM", year: "1970s", wer: "" },
              { x: 190, label: "HMM-GMM", year: "1980s", wer: "" },
              { x: 340, label: "HMM-DNN", year: "2012", wer: "WER −30%" },
              { x: 490, label: "End-to-end", year: "2015", wer: "CTC/Attn" },
              { x: 640, label: "Transformers", year: "2020+", wer: "SOTA" },
            ].map(({ x, label, year, wer }) => (
              <g key={x}>
                <circle cx={x} cy="65" r="8" fill={C} />
                <text
                  x={x}
                  y="45"
                  textAnchor="middle"
                  fill="#e2e8f0"
                  fontSize="10"
                  fontWeight="700"
                >
                  {label}
                </text>
                <text
                  x={x}
                  y="90"
                  textAnchor="middle"
                  fill="#64748b"
                  fontSize="9"
                >
                  {year}
                </text>
                {wer && (
                  <text x={x} y="108" textAnchor="middle" fill={C} fontSize="9">
                    {wer}
                  </text>
                )}
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
