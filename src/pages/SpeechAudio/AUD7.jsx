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

export default function AUD7() {
  return (
    <div style={S.page}>
      <Link to="/speech-audio" style={S.back}>
        ← Speech & Audio AI
      </Link>
      <div style={S.badge}>MÓDULO {modules[6].num}</div>
      <h1 style={S.h1}>{modules[6].title}</h1>
      <p style={S.sub}>{modules[6].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Speech Translation — Fundamentos</h2>
        <p style={S.p}>
          A tradução automática de fala (ST) converte audio numa língua para
          texto noutra. A abordagem <strong>cascade</strong> encadeia ASR +
          Machine Translation — robusta mas os erros de ASR propagam-se e a
          latência soma as duas componentes.
        </p>
        <p style={S.p}>
          Os modelos <strong>end-to-end</strong> aprendem audio → texto alvo
          directamente, mais compactos e sem propagação de erros — mas o treino
          é mais difícil porque dados paralelos (audio, tradução) são escassos.
        </p>
        <p style={S.p}>
          Datasets principais: <strong>MuST-C</strong> (~180h/par, TED Talks),{" "}
          <strong>CoVoST 2</strong> (2 880h, Common Voice) e{" "}
          <strong>FLEURS</strong> (102 línguas). Qualidade medida por{" "}
          <strong>BLEU</strong> e <strong>COMET</strong> (correlação mais alta
          com julgamento humano).
        </p>

        {/* SVG: cascade vs E2E comparison */}
        <div style={S.diagram}>
          <svg viewBox="0 0 760 200" width="100%" style={{ display: "block" }}>
            <text x="20" y="18" fill="#64748b" fontSize="10" fontWeight="700">
              CASCADE
            </text>

            <rect
              x="10"
              y="28"
              width="80"
              height="36"
              rx="6"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="50"
              y="50"
              textAnchor="middle"
              fill={C}
              fontSize="9"
              fontWeight="700"
            >
              AUDIO
            </text>

            <line x1="96" y1="46" x2="112" y2="46" stroke={C} strokeWidth="1.5" />
            <polygon
              points="112,42 124,46 112,50"
              fill={C}
            />

            <rect
              x="130"
              y="28"
              width="80"
              height="36"
              rx="6"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="170"
              y="44"
              textAnchor="middle"
              fill="#fff"
              fontSize="9"
              fontWeight="700"
            >
              ASR
            </text>
            <text
              x="170"
              y="57"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="8"
            >
              → texto fonte
            </text>

            {/* error arrow */}
            <path
              d="M 170 64 Q 170 80 230 80 Q 290 80 290 64"
              fill="none"
              stroke="#4a9eed"
              strokeWidth="1.2"
              strokeDasharray="3,2"
            />
            <text
              x="230"
              y="74"
              textAnchor="middle"
              fill="#4a9eed"
              fontSize="8"
            >
              erros propagam-se
            </text>

            <line x1="216" y1="46" x2="232" y2="46" stroke={C} strokeWidth="1.5" />
            <polygon
              points="232,42 244,46 232,50"
              fill={C}
            />

            <rect
              x="250"
              y="28"
              width="80"
              height="36"
              rx="6"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="290"
              y="44"
              textAnchor="middle"
              fill="#fff"
              fontSize="9"
              fontWeight="700"
            >
              MT
            </text>
            <text
              x="290"
              y="57"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="8"
            >
              → texto alvo
            </text>

            <line x1="336" y1="46" x2="352" y2="46" stroke={C} strokeWidth="1.5" />
            <polygon
              points="352,42 364,46 352,50"
              fill={C}
            />

            <rect
              x="370"
              y="28"
              width="90"
              height="36"
              rx="6"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="415"
              y="50"
              textAnchor="middle"
              fill={C}
              fontSize="9"
              fontWeight="700"
            >
              TRADUÇÃO
            </text>

            {/* E2E */}
            <text x="20" y="118" fill="#64748b" fontSize="10" fontWeight="700">
              END-TO-END
            </text>

            <rect
              x="10"
              y="128"
              width="80"
              height="36"
              rx="6"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="50"
              y="150"
              textAnchor="middle"
              fill={C}
              fontSize="9"
              fontWeight="700"
            >
              AUDIO
            </text>

            <line x1="96" y1="146" x2="112" y2="146" stroke={C} strokeWidth="1.5" />
            <polygon
              points="112,142 124,146 112,150"
              fill={C}
            />

            <rect
              x="130"
              y="118"
              width="200"
              height="56"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="2"
            />
            <text
              x="230"
              y="142"
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="700"
            >
              DIRECT MODEL
            </text>
            <text
              x="230"
              y="158"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              SeamlessM4T · Whisper
            </text>
            <text
              x="230"
              y="170"
              textAnchor="middle"
              fill="#64748b"
              fontSize="8"
            >
              gradientes end-to-end
            </text>

            <line x1="336" y1="146" x2="352" y2="146" stroke={C} strokeWidth="1.5" />
            <polygon
              points="352,142 364,146 352,150"
              fill={C}
            />

            <rect
              x="370"
              y="128"
              width="90"
              height="36"
              rx="6"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="415"
              y="150"
              textAnchor="middle"
              fill={C}
              fontSize="9"
              fontWeight="700"
            >
              TRADUÇÃO
            </text>

            {/* latency labels */}
            <text x="490" y="50" fill="#94a3b8" fontSize="9">
              alta latência
            </text>
            <text x="490" y="62" fill="#94a3b8" fontSize="8">
              (ASR + MT em série)
            </text>
            <text x="490" y="150" fill="#94a3b8" fontSize="9">
              menor latência
            </text>
            <text x="490" y="162" fill="#94a3b8" fontSize="8">
              (modelo único)
            </text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. SeamlessM4T — Meta AI</h2>
        <p style={S.p}>
          O <strong>SeamlessM4T</strong> (Meta AI, 2023) realiza speech-to-text,
          speech-to-speech, text-to-speech e text-to-text em mais de 100 línguas
          numa única arquitectura.
        </p>
        <p style={S.p}>
          Combina um encoder <strong>w2v-BERT</strong> com um decoder{" "}
          <strong>mBART</strong> e um vocoder neural, sobre um espaço semântico
          partilhado entre modalidades que permite transferência cross-modal
          eficiente.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>SeamlessStreaming</strong> é a versão para tradução
            simultânea (latência inferior a 2s, via monotonic attention). O{" "}
            <strong>SeamlessExpressive</strong> preserva ritmo e prosódia do
            speaker original — crucial para dubbing automático.
          </p>
        </div>
        <p style={S.p}>
          Aplicações: tradução em conferências, dubbing automático,
          acessibilidade para surdos e comunicação de emergência cross-lingual.
          Modelo open-source no Hugging Face.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Low-Resource ASR e Multilingual</h2>
        <p style={S.p}>
          O maior desafio no ASR multilíngue é a assimetria de recursos: das
          mais de 7 000 línguas faladas no mundo, só cerca de 100 têm dados
          suficientes para ASR competitivo; a maioria tem menos de 1 hora de
          audio anotado.
        </p>
        <p style={S.p}>
          O <strong>MMS</strong> (Meta, 2023) usa uma fonte inesperada:
          gravações do Novo Testamento em mais de 1 100 línguas, textos
          paralelos gravados por missões religiosas. Com wav2vec 2.0, suporta
          ASR em 1 162 línguas.
        </p>
        <p style={S.p}>
          O <strong>Whisper multilíngue</strong> (97 línguas) demonstra
          zero-shot ASR em línguas nunca vistas em fine-tuning. O{" "}
          <strong>code-switching</strong> — alternar línguas numa mesma frase —
          é comum em comunidades multilingues mas desafiante para modelos
          monolingues.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Common Voice</strong> (Mozilla): crowdsourcing de gravações
            validadas, 90+ línguas, 20 000+ horas — a maior fonte pública de
            dados de fala diversificados.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Tradução Simultânea e Streaming</h2>
        <p style={S.p}>
          A tradução simultânea exige decisões de output com informação
          incompleta, comprometendo entre <strong>latência</strong> e{" "}
          <strong>qualidade</strong> — esperar mais audio melhora a qualidade
          mas aumenta o delay percebido.
        </p>
        <p style={S.p}>
          A política <strong>Wait-k</strong>: esperar k tokens ASR antes do
          primeiro token de tradução, depois um token por cada token ASR. k
          baixo minimiza latência mas prejudica qualidade; k alto aproxima-se da
          tradução offline. O <strong>CIF</strong> (Continuous
          Integrate-and-Fire) integra continuamente o encoder e dispara output
          quando acumula informação suficiente, com alinhamento aprendido sem
          supervisão explícita.
        </p>
        <p style={S.p}>
          A avaliação combina latência e qualidade via{" "}
          <strong>Average Lagging (AL)</strong> — atraso médio entre token fonte
          e alvo correspondente.
        </p>

        {/* SVG: simultaneous translation timeline */}
        <div style={S.diagram}>
          <svg viewBox="0 0 760 160" width="100%" style={{ display: "block" }}>
            {/* Timeline axis */}
            <line
              x1="40"
              y1="140"
              x2="720"
              y2="140"
              stroke="var(--card-border)"
              strokeWidth="1"
            />
            <text
              x="380"
              y="157"
              textAnchor="middle"
              fill="#64748b"
              fontSize="9"
            >
              tempo →
            </text>

            {/* ASR chunks */}
            <text x="40" y="30" fill={C} fontSize="10" fontWeight="700">
              ASR output
            </text>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <React.Fragment key={i}>
                <rect
                  x={60 + i * 100}
                  y="38"
                  width="80"
                  height="28"
                  rx="5"
                  fill="rgba(74,158,237,0.06)"
                  stroke={C}
                  strokeWidth="1.2"
                />
                <text
                  x={100 + i * 100}
                  y="57"
                  textAnchor="middle"
                  fill="#e2e8f0"
                  fontSize="9"
                >
                  chunk {i + 1}
                </text>
              </React.Fragment>
            ))}

            {/* MT output — offset by latency */}
            <text x="40" y="95" fill="#94a3b8" fontSize="10" fontWeight="700">
              ST output
            </text>
            {[0, 1, 2, 3, 4].map((i) => (
              <React.Fragment key={i}>
                <rect
                  x={160 + i * 100}
                  y="100"
                  width="80"
                  height="28"
                  rx="5"
                  fill="rgba(74,158,237,0.06)"
                  stroke="#94a3b8"
                  strokeWidth="1.2"
                />
                <text
                  x={200 + i * 100}
                  y="119"
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="9"
                >
                  trad. {i + 1}
                </text>
              </React.Fragment>
            ))}

            {/* Latency brace */}
            <line
              x1="100"
              y1="72"
              x2="100"
              y2="98"
              stroke="#4a9eed"
              strokeWidth="1"
              strokeDasharray="3,2"
            />
            <line
              x1="200"
              y1="72"
              x2="200"
              y2="98"
              stroke="#4a9eed"
              strokeWidth="1"
              strokeDasharray="3,2"
            />
            <line
              x1="100"
              y1="85"
              x2="200"
              y2="85"
              stroke="#4a9eed"
              strokeWidth="1"
            />
            <polygon points="100,83 100,87 94,85" fill="#4a9eed" />
            <polygon points="200,83 200,87 206,85" fill="#4a9eed" />
            <text
              x="150"
              y="80"
              textAnchor="middle"
              fill="#4a9eed"
              fontSize="8"
            >
              latência
            </text>
          </svg>
        </div>

        <p style={S.p}>
          Na prática: <strong>Google Translate</strong> (modo conversa em tempo
          real), <strong>Microsoft Translator</strong> (sessões multi-pessoa) e{" "}
          <strong>Zoom</strong> (transcrição ASR, com tradução chegando como
          feature premium).
        </p>
      </div>
    </div>
  );
}
