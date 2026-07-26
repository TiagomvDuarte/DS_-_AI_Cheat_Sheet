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

export default function AUD8() {
  return (
    <div style={S.page}>
      <Link to="/speech-audio" style={S.back}>
        ← Speech & Audio AI
      </Link>
      <div style={S.badge}>MÓDULO {modules[7].num}</div>
      <h1 style={S.h1}>{modules[7].title}</h1>
      <p style={S.sub}>{modules[7].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Voice Cloning — Técnica</h2>
        <p style={S.p}>
          A clonagem de voz sintetiza fala com a identidade vocal de uma pessoa
          a partir de uma amostra de referência. A abordagem clássica de{" "}
          <strong>speaker adaptation</strong> faz fine-tune de um TTS em horas
          de dados do speaker — eficaz mas impraticável em escala. A revolução
          moderna é o <strong>zero-shot voice cloning</strong>: generalizar com
          apenas 3–10 segundos de audio, sem re-treino.
        </p>
        <p style={S.p}>
          O <strong>VALL-E</strong> (Microsoft, 2023) trata a clonagem como
          in-context learning: dado um prompt de 3 segundos, o modelo continua a
          "frase" de audio mantendo a identidade vocal. O{" "}
          <strong>XTTS v2</strong> (Coqui, 2024) é open-source, suporta 17
          línguas e requer apenas 6 segundos de referência.
        </p>
        <p style={S.p}>
          O <strong>ElevenLabs</strong> democratizou o voice cloning comercial,
          com <em>Instant Voice Cloning</em> (15s de audio, via API) usado em
          audiobooks, content creation e locução publicitária.
        </p>

        {/* SVG: voice cloning pipeline */}
        <div style={S.diagram}>
          <svg viewBox="0 0 760 140" width="100%" style={{ display: "block" }}>
            <rect
              x="10"
              y="40"
              width="120"
              height="44"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="70"
              y="58"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              REFERENCE AUDIO
            </text>
            <text x="70" y="75" textAnchor="middle" fill="#94a3b8" fontSize="9">
              3–10 segundos
            </text>

            <line
              x1="132"
              y1="62"
              x2="172"
              y2="62"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="168,58 176,62 168,66" fill={C} />

            <rect
              x="176"
              y="30"
              width="120"
              height="64"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="236"
              y="52"
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="700"
            >
              SPEAKER ENCODER
            </text>
            <text
              x="236"
              y="67"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              d-vector / x-vector
            </text>
            <text
              x="236"
              y="82"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              → speaker embedding
            </text>

            <line
              x1="298"
              y1="62"
              x2="338"
              y2="62"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="334,58 342,62 334,66" fill={C} />

            {/* TTS model with text input */}
            <rect
              x="10"
              y="108"
              width="120"
              height="28"
              rx="6"
              fill="rgba(74,158,237,0.06)"
              stroke="#64748b"
              strokeWidth="1"
            />
            <text
              x="70"
              y="126"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              TEXT INPUT
            </text>

            <line
              x1="70"
              y1="108"
              x2="70"
              y2="97"
              stroke="#94a3b8"
              strokeWidth="1.2"
              strokeDasharray="4,3"
            />
            <line
              x1="70"
              y1="97"
              x2="402"
              y2="97"
              stroke="#94a3b8"
              strokeWidth="1.2"
              strokeDasharray="4,3"
            />
            <line
              x1="402"
              y1="97"
              x2="402"
              y2="94"
              stroke="#94a3b8"
              strokeWidth="1.2"
            />
            <polygon points="398,98 406,98 402,94" fill="#94a3b8" />

            <rect
              x="342"
              y="30"
              width="120"
              height="64"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="2"
            />
            <text
              x="402"
              y="55"
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="700"
            >
              TTS MODEL
            </text>
            <text
              x="402"
              y="70"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              VITS / VALL-E
            </text>
            <text
              x="402"
              y="85"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              condicionado em emb.
            </text>

            <line
              x1="464"
              y1="62"
              x2="504"
              y2="62"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="500,58 508,62 500,66" fill={C} />

            <rect
              x="508"
              y="30"
              width="130"
              height="64"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="573"
              y="52"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              SYNTHESIZED VOICE
            </text>
            <text
              x="573"
              y="67"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              waveform output
            </text>
            <text
              x="573"
              y="82"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              identidade clonada
            </text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Voice Conversion</h2>
        <p style={S.p}>
          A <strong>voice conversion</strong> não requer texto — transforma
          directamente o audio de uma voz para outra, preservando o conteúdo
          linguístico. O pipeline separa representações de conteúdo (fonemas,
          prosódia) e identidade (timbre), substituindo a segunda.
        </p>
        <p style={S.p}>
          Arquitecturas como <strong>FreeVC</strong> usam encoders de conteúdo
          self-supervised (HuBERT). O <strong>kNN-VC</strong> (Baas et al.,
          2023) é simples mas eficaz: extrai unidades com HuBERT, faz matching
          k-nearest neighbours com unidades do speaker alvo, e sintetiza com
          vocoder — sem treino end-to-end adicional.
        </p>
        <p style={S.p}>
          O <strong>RVC</strong> tornou-se o preferido da comunidade
          open-source. Além de usos recreativos controversos, tem aplicações
          legítimas: preservação de voz para pessoas com ALS/Parkinson,
          privacidade em chamadas e dubbing automático.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Real-time voice conversion:</strong> latências inferiores a
            50ms permitem conversão em chamadas ao vivo, com modelos optimizados
            em GPU consumer.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Detecção de Deepfakes de Voz</h2>
        <p style={S.p}>
          O <strong>ASVspoof challenge</strong> é a principal competição de
          anti-spoofing de voz, desde 2015. O ASVspoof 2019 definiu o benchmark
          moderno (17 ataques TTS, 13 de voice conversion); o 2021 adicionou
          condições de transmissão realistas.
        </p>
        <p style={S.p}>
          Features eficazes incluem <strong>LFCC</strong> e{" "}
          <strong>CQCC</strong> — capturam artefactos como periodicidade
          excessiva e transições demasiado suaves. Os modelos state-of-the-art
          são o <strong>RawNet2</strong> (end-to-end) e o{" "}
          <strong>AASIST</strong> (graph attention espectro-temporal).
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Fraude por voice cloning:</strong> em 2019 (Hong Kong),
            criminosos usaram deepfake de voz para imitar um CEO e convencer um
            director financeiro a transferir $243k; em 2021 (EAU), uma fraude
            semelhante resultou em $35M.
          </p>
        </div>
        <p style={S.p}>
          Em resposta, a <strong>Meta</strong> lançou o{" "}
          <strong>AudioSeal</strong> (2024) — watermarking imperceptível
          inserido na waveform durante a síntese, resistente a re-encoding e
          ruído. O <strong>SynthID Audio</strong> (Google DeepMind) segue
          abordagem semelhante.
        </p>

        {/* SVG: deepfake detection pipeline */}
        <div style={S.diagram}>
          <svg viewBox="0 0 760 140" width="100%" style={{ display: "block" }}>
            <rect
              x="10"
              y="48"
              width="110"
              height="44"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="65"
              y="66"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              INPUT AUDIO
            </text>
            <text x="65" y="82" textAnchor="middle" fill="#94a3b8" fontSize="9">
              unknown origin
            </text>

            <line
              x1="122"
              y1="70"
              x2="162"
              y2="70"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="158,66 166,70 158,74" fill={C} />

            <rect
              x="166"
              y="28"
              width="140"
              height="84"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="236"
              y="52"
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="700"
            >
              FEATURE EXTRACTION
            </text>
            <text x="236" y="70" textAnchor="middle" fill={C} fontSize="9">
              LFCC · CQCC
            </text>
            <text
              x="236"
              y="85"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              artefactos: periodicidade,
            </text>
            <text
              x="236"
              y="98"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              transições fonemas, ruído
            </text>

            <line
              x1="308"
              y1="70"
              x2="348"
              y2="70"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="344,66 352,70 344,74" fill={C} />

            <rect
              x="352"
              y="38"
              width="120"
              height="64"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="412"
              y="62"
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="700"
            >
              CLASSIFIER
            </text>
            <text
              x="412"
              y="78"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              RawNet2 / AASIST
            </text>
            <text
              x="412"
              y="93"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              end-to-end
            </text>

            <line
              x1="474"
              y1="70"
              x2="514"
              y2="70"
              stroke={C}
              strokeWidth="1.5"
            />
            <polygon points="510,66 518,70 510,74" fill={C} />

            {/* Score output */}
            <rect
              x="518"
              y="28"
              width="100"
              height="44"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text
              x="568"
              y="47"
              textAnchor="middle"
              fill="#4a9eed"
              fontSize="10"
              fontWeight="700"
            >
              REAL
            </text>
            <text
              x="568"
              y="63"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              score: 0.92
            </text>

            <rect
              x="518"
              y="82"
              width="100"
              height="44"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text
              x="568"
              y="101"
              textAnchor="middle"
              fill="#4a9eed"
              fontSize="10"
              fontWeight="700"
            >
              FAKE
            </text>
            <text
              x="568"
              y="117"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              score: 0.08
            </text>

            <line
              x1="512"
              y1="70"
              x2="518"
              y2="50"
              stroke="#4a9eed"
              strokeWidth="1"
              strokeDasharray="3,2"
            />
            <line
              x1="512"
              y1="70"
              x2="518"
              y2="104"
              stroke="#4a9eed"
              strokeWidth="1"
              strokeDasharray="3,2"
            />

            <text x="640" y="55" fill="#94a3b8" fontSize="8">
              → trusted
            </text>
            <text x="640" y="107" fill="#94a3b8" fontSize="8">
              → flagged
            </text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Regulação e Ética</h2>
        <p style={S.p}>
          O <strong>EU AI Act</strong> (2024) classifica sistemas de voice
          cloning como alto risco em certos contextos e exige transparência: voz
          sintética que imite pessoas reais deve ser declarada (Artigo 50).
          Deepfakes usados para fraude ou manipulação política são ilegais na
          maioria das jurisdições europeias.
        </p>
        <p style={S.p}>
          A questão do <strong>consentimento</strong> é central: usar a voz de
          alguém sem autorização viola direitos de personalidade. Os contratos{" "}
          <strong>SAG-AFTRA</strong> de 2023 incluem, pela primeira vez,
          protecção contra replicação de vozes de actores por IA, resultado das
          greves em Hollywood.
        </p>
        <p style={S.p}>
          O standard <strong>C2PA</strong> — adoptado por Adobe, Microsoft, BBC
          e Sony — define metadados assinados para estabelecer a proveniência de
          conteúdo audio e vídeo, criando uma cadeia de custódia verificável.
        </p>
        <p style={S.p}>
          O <strong>bias</strong> em TTS/ASR é documentado: modelos treinados em
          falantes jovens, masculinos e de variedades standard degradam para
          vozes femininas, idosas ou de sotaques regionais. A voz como{" "}
          <strong>dado biométrico</strong> protegido é a direcção em que a
          regulação se move.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Futuro:</strong> watermarking obrigatório, proveniência
            verificável (C2PA) e regulação de consentimento deverão tornar os
            deepfakes de voz rastreáveis mesmo que não detectáveis pelo ouvido
            humano.
          </p>
        </div>
      </div>
    </div>
  );
}
