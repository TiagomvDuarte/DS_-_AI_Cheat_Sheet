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

export default function AUD3() {
  return (
    <div style={S.page}>
      <Link to="/speech-audio" style={S.back}>
        ← Speech & Audio AI
      </Link>
      <div style={S.badge}>MÓDULO {modules[2].num}</div>
      <h1 style={S.h1}>{modules[2].title}</h1>
      <p style={S.sub}>{modules[2].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Text-to-Speech — Pipeline Clássico</h2>
        <p style={S.p}>
          O pipeline TTS clássico tem quatro etapas:{" "}
          <strong>text analysis</strong> (normalização e conversão
          grafema-fonema), <strong>modelação de prosódia</strong> (pitch,
          duração, energia), <strong>acoustic model</strong> (geração de
          espectrograma) e <strong>vocoder</strong> (espectrograma → waveform).
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Vocoders clássicos:</strong> Griffin-Lim recupera a fase por
            iteração a partir da magnitude. WORLD e STRAIGHT modelam
            explicitamente F0 e envelope espectral — mais rápidos mas com
            qualidade inferior aos vocoders neurais modernos.
          </p>
        </div>

        <div style={S.diagram}>
          <svg viewBox="0 0 824 90" width="100%" style={{ display: "block" }}>
            {[
              { x: 10, label: "TEXTO", sub: "input" },
              { x: 126, label: "NORMALIZ.", sub: "G2P" },
              { x: 242, label: "FONEMAS", sub: "prosódia" },
              { x: 358, label: "DUR./PITCH", sub: "model" },
              { x: 474, label: "ESPECTROG.", sub: "acoustic" },
              { x: 590, label: "VOCODER", sub: "síntese" },
              { x: 706, label: "WAVEFORM", sub: "output" },
            ].map(({ x, label, sub }, i, arr) => (
              <g key={x}>
                <rect
                  x={x}
                  y="20"
                  width="108"
                  height="48"
                  rx="7"
                  fill="rgba(74,158,237,0.06)"
                  stroke={
                    i === 0 || i === arr.length - 1 ? C : "var(--card-border)"
                  }
                  strokeWidth={i === 0 || i === arr.length - 1 ? 1.8 : 1}
                />
                <text
                  x={x + 54}
                  y="42"
                  textAnchor="middle"
                  fill={C}
                  fontSize="9.5"
                  fontWeight="700"
                >
                  {label}
                </text>
                <text
                  x={x + 54}
                  y="57"
                  textAnchor="middle"
                  fill="#64748b"
                  fontSize="8"
                >
                  {sub}
                </text>
                {i < arr.length - 1 && (
                  <>
                    <line
                      x1={x + 110}
                      y1="44"
                      x2={x + 122}
                      y2="44"
                      stroke="#475569"
                      strokeWidth="1.2"
                    />
                    <polygon
                      points={`${x + 122},40 ${x + 128},44 ${x + 122},48`}
                      fill="#475569"
                    />
                  </>
                )}
              </g>
            ))}
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Modelos Neurais — Tacotron e VITS</h2>
        <p style={S.p}>
          O <strong>Tacotron 2</strong> (Google, 2018) é um seq2seq com atenção:
          o encoder converte fonemas em representações contextuais e o decoder
          auto-regressivo gera o mel espectrograma frame a frame, seguido de um
          vocoder WaveNet (MOS 4.53 vs. 4.58 humano).
        </p>
        <p style={S.p}>
          O <strong>FastSpeech 2</strong> (Microsoft, 2020) elimina a geração
          auto-regressiva — prediz o espectrograma completo em paralelo (38×
          mais rápido) usando predictores explícitos de duração, pitch e
          energia.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>VITS (2021):</strong> end-to-end, elimina o espectrograma
            intermédio — combina VAE, normalizing flows e GAN para mapear texto
            → waveform num único modelo.
          </p>
        </div>
        <p style={S.p}>
          Os <strong>vocoders neurais</strong> evoluíram do WaveNet
          (auto-regressivo, excelente mas lento) para o{" "}
          <strong>HiFi-GAN</strong> (paralelo, viável em produção). Avaliação
          via MOS subjectivo e UTMOS (métrica automática correlacionada com MOS
          humano).
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. VALL-E e Síntese Zero-Shot</h2>
        <p style={S.p}>
          O <strong>VALL-E</strong> (Microsoft, 2023) reformula a síntese de voz
          como language modelling sobre tokens de audio discretos, comprimidos
          pelo <strong>EnCodec</strong> (RVQ com 8 codebooks de 1024 tokens).
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Arquitectura:</strong> dado texto + 3 segundos de voz-alvo
            como prompt, um modelo auto-regressivo gera os tokens coarse
            (codebook 1) e um modelo não auto-regressivo preenche os restantes
            (fine); o EnCodec decoder converte tudo em waveform, preservando
            timbre e estilo da amostra.
          </p>
        </div>
        <p style={S.p}>
          O <strong>VALL-E X</strong> estende a abordagem cross-lingual (clonar
          voz noutra língua). Alternativa competitiva: modelos de{" "}
          <strong>flow matching</strong> (Voicebox, F5-TTS) usam continuous
          normalizing flows em vez de tokens discretos, com síntese mais
          eficiente.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 740 150" width="100%" style={{ display: "block" }}>
            {/* Input tokens */}
            <rect
              x="10"
              y="20"
              width="120"
              height="40"
              rx="7"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="70"
              y="38"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              TEXTO
            </text>
            <text x="70" y="52" textAnchor="middle" fill="#64748b" fontSize="8">
              tokens
            </text>

            <rect
              x="10"
              y="75"
              width="120"
              height="40"
              rx="7"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="70"
              y="93"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              AUDIO PROMPT
            </text>
            <text
              x="70"
              y="107"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              3 segundos
            </text>

            {/* Arrow to AR LM — two lines converge at merge point then arrow */}
            <line
              x1="132"
              y1="40"
              x2="158"
              y2="72"
              stroke="#475569"
              strokeWidth="1.2"
            />
            <line
              x1="132"
              y1="95"
              x2="158"
              y2="72"
              stroke="#475569"
              strokeWidth="1.2"
            />
            <line
              x1="158"
              y1="72"
              x2="170"
              y2="72"
              stroke="#475569"
              strokeWidth="1.5"
            />
            <polygon points="165,68 174,72 165,76" fill="#475569" />

            {/* AR LM */}
            <rect
              x="174"
              y="52"
              width="140"
              height="40"
              rx="7"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.8"
            />
            <text
              x="244"
              y="70"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              AR CODEC LM
            </text>
            <text
              x="244"
              y="84"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              coarse tokens (CB1)
            </text>

            {/* Arrow */}
            <line
              x1="316"
              y1="72"
              x2="352"
              y2="72"
              stroke="#475569"
              strokeWidth="1.5"
            />
            <polygon points="352,68 360,72 352,76" fill="#475569" />

            {/* NAR LM */}
            <rect
              x="362"
              y="52"
              width="140"
              height="40"
              rx="7"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="432"
              y="70"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              NAR LM
            </text>
            <text
              x="432"
              y="84"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              fine tokens (CB2-8)
            </text>

            {/* Arrow */}
            <line
              x1="504"
              y1="72"
              x2="540"
              y2="72"
              stroke="#475569"
              strokeWidth="1.5"
            />
            <polygon points="540,68 548,72 540,76" fill="#475569" />

            {/* EnCodec decoder */}
            <rect
              x="550"
              y="52"
              width="130"
              height="40"
              rx="7"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.8"
            />
            <text
              x="615"
              y="69"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              ENCODEC
            </text>
            <text
              x="615"
              y="83"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              decoder → waveform
            </text>

            {/* Output label */}
            <text
              x="615"
              y="115"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              voz clonada
            </text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Prosódia e Expressividade</h2>
        <p style={S.p}>
          A <strong>prosódia</strong> — pitch (F0), duração e intensidade —
          transmite emoção, ênfase e estrutura discursiva. A naturalidade
          percepcionada depende fortemente da prosódia, mesmo com qualidade
          acústica elevada.
        </p>
        <p style={S.p}>
          O <strong>Emotional TTS</strong> condiciona a síntese numa
          representação de emoção como embedding adicional. Os{" "}
          <strong>Global Style Tokens (GST)</strong> usam um audio de referência
          para transferir estilo prosódico sem classificação explícita de
          emoção.
        </p>
        <p style={S.p}>
          O standard <strong>SSML</strong> (W3C) controla prosódia via markup
          declarativo — taxa de elocução, pitch, volume, pausas — suportado
          pelas principais APIs cloud (Google, Amazon Polly, Azure).
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>TTS multilíngue:</strong> XTTS (Coqui TTS) suporta síntese
            em 17+ línguas com zero-shot voice cloning cross-lingual — clonar
            voz de uma língua para sintetizar noutra.
          </p>
        </div>
      </div>
    </div>
  );
}
