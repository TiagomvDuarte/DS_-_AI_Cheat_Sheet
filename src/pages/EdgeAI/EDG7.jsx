import React from "react";
import { Link } from "react-router-dom";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { modules } from "./EdgeAI";

const color = "#4a9eed";
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
    color: color,
    border: `1.5px solid ${color}`,
    fontSize: "0.75rem",
    fontWeight: 700,
    padding: "0.25rem 0.75rem",
    borderRadius: 20,
    marginBottom: "0.75rem",
    letterSpacing: "0.05em",
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
    marginBottom: "2.5rem",
  },
  section: { marginBottom: "2.5rem" },
  h2: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color,
    borderLeft: `3px solid ${color}`,
    paddingLeft: "0.85rem",
    marginBottom: "1.2rem",
  },
  highlight: {
    background: `${color}12`,
    border: `1px solid ${color}30`,
    borderRadius: 8,
    padding: "0.9rem 1.1rem",
    marginTop: "0.8rem",
    fontSize: "0.93rem",
    color: "var(--text-primary)",
    lineHeight: 1.7,
  },
  note: {
    background: `${color}08`,
    border: `1px solid ${color}20`,
    borderRadius: 8,
    padding: "0.8rem 1rem",
    marginTop: "0.75rem",
    fontSize: "0.88rem",
    color: "var(--text-secondary)",
    lineHeight: 1.65,
  },
  p: {
    fontSize: "1rem",
    color: "var(--text-primary)",
    lineHeight: 1.8,
    marginBottom: "1rem",
  },
  diagram: {
    background: "var(--bg-secondary)",
    border: "1px solid var(--card-border)",
    borderRadius: 12,
    padding: "1.5rem",
    margin: "1.5rem 0",
  },
  divider: {
    border: "none",
    borderTop: "1px solid var(--card-border)",
    margin: "2.5rem 0",
  },
};

const m = modules[6];

export default function EDG7() {
  return (
    <div style={S.page}>
      <Link to="/edge-ai" style={S.back}>
        ← Edge AI &amp; TinyML
      </Link>

      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* ── Secção 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. FedAvg — Algoritmo e Convergência</h2>
        <p style={S.p}>
          FedAvg (McMahan et al., 2017; teoria e derivação completa no curso de
          Deep Learning, módulo 11) é o algoritmo fundacional: o servidor
          transmite o modelo global, cada cliente treina localmente e o servidor
          agrega por média ponderada pelo tamanho do dataset. No edge o problema
          muda de foco — os dispositivos são MCUs/smartphones com bateria e
          rádio limitados, não servidores com GPU.
        </p>
        <p style={S.p}>
          Non-IID data ainda causa client drift; FedProx e SCAFFOLD corrigem-no
          com termos de regularização. No edge, este problema agrava-se porque
          cada dispositivo só participa esporadicamente (janelas de
          carregamento/WiFi), tornando a heterogeneidade de participação um
          segundo eixo de non-IID.
        </p>
        <div style={S.diagram}>
          {/* Row 1: Server + clients grid + convergence chart */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "1rem",
              marginBottom: "0.75rem",
            }}
          >
            {/* Server + clients */}
            <div>
              {/* Server */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "0.75rem",
                }}
              >
                <div
                  style={{
                    background: "rgba(74,158,237,0.12)",
                    border: "1.5px solid #4a9eed",
                    borderRadius: 8,
                    padding: "0.4rem 1.5rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#4a9eed",
                      fontFamily: "monospace",
                    }}
                  >
                    SERVIDOR
                  </div>
                  <div
                    style={{
                      fontSize: "0.65rem",
                      color: "#94a3b8",
                      fontFamily: "monospace",
                    }}
                  >
                    modelo global W_t
                  </div>
                </div>
              </div>
              {/* Clients 4+4 grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  gap: "0.4rem",
                }}
              >
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                  const dotColors = [
                    "#4a9eed",
                    "#0284c7",
                    "#38bdf8",
                    "#7dd3fc",
                    "#0369a1",
                    "#4a9eed",
                    "#0284c7",
                    "#38bdf8",
                  ];
                  const dc = dotColors[i];
                  return (
                    <div
                      key={i}
                      style={{
                        background: "rgba(74,158,237,0.08)",
                        border: `1px solid #4a9eed`,
                        borderRadius: "50%",
                        aspectRatio: "1",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0.4rem",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          color: "#4a9eed",
                          fontFamily: "monospace",
                        }}
                      >
                        C{i + 1}
                      </div>
                      <div
                        style={{
                          fontSize: "0.55rem",
                          color: "#94a3b8",
                          fontFamily: "monospace",
                        }}
                      >
                        E epochs
                      </div>
                      <div
                        style={{
                          fontSize: "0.52rem",
                          color: "#64748b",
                          fontFamily: "monospace",
                        }}
                      >
                        n={200 + i * 150}
                      </div>
                      <div style={{ display: "flex", gap: 3, marginTop: 3 }}>
                        {[0, 1, 2].map((d) => (
                          <div
                            key={d}
                            style={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              background: dc,
                              opacity: 0.8,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Legend */}
              <div
                style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                  }}
                >
                  <div
                    style={{
                      width: 16,
                      height: 0,
                      borderTop: "2px dashed #4a9eed",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.65rem",
                      color: "#94a3b8",
                      fontFamily: "monospace",
                    }}
                  >
                    broadcast W_t
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                  }}
                >
                  <div
                    style={{
                      width: 16,
                      height: 2,
                      background: "#7dd3fc",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.65rem",
                      color: "#94a3b8",
                      fontFamily: "monospace",
                    }}
                  >
                    delta W upload
                  </span>
                </div>
              </div>
            </div>
            {/* Convergence chart */}
            <div
              style={{
                background: "rgba(74,158,237,0.04)",
                border: "1px solid var(--card-border)",
                borderRadius: 8,
                padding: "0.65rem",
                minWidth: 180,
              }}
            >
              <div
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  color: "#94a3b8",
                  fontFamily: "monospace",
                  marginBottom: "0.5rem",
                  textAlign: "center",
                }}
              >
                CONVERGENCIA
              </div>
              <svg
                viewBox="0 0 185 110"
                style={{ width: "100%", height: "auto", overflow: "visible" }}
              >
                <line
                  x1="20"
                  y1="100"
                  x2="155"
                  y2="100"
                  stroke="var(--card-border)"
                  strokeWidth="1"
                />
                <line
                  x1="20"
                  y1="10"
                  x2="20"
                  y2="100"
                  stroke="var(--card-border)"
                  strokeWidth="1"
                />
                <text
                  x="155"
                  y="108"
                  textAnchor="middle"
                  fill="#475569"
                  fontSize="7"
                >
                  rounds
                </text>
                <polyline
                  points="20,95 40,72 60,52 80,40 100,36 120,34 140,33"
                  fill="none"
                  stroke="#4a9eed"
                  strokeWidth="2"
                />
                <text x="142" y="32" fill="#4a9eed" fontSize="7">
                  IID
                </text>
                <polyline
                  points="20,95 40,78 60,68 75,72 90,60 105,63 120,54 140,50"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeDasharray="5,3"
                />
                <text x="142" y="50" fill="#94a3b8" fontSize="7">
                  non-IID
                </text>
              </svg>
            </div>
          </div>
        </div>
        <div style={S.highlight}>
          <strong>FedAvg:</strong>{" "}
          <InlineMath math="W_{global} = \sum_k \frac{n_k}{N} \times W_k" />
          {" "}— média ponderada pelo número de amostras locais. Com E=1 e
          dados IID é equivalente a mini-batch SGD distribuído. Com dados
          non-IID e E grande, o client drift pode impedir convergência.{" "}
          <strong>FedProx</strong> adiciona{" "}
          <InlineMath math="\frac{\mu}{2} \times \lVert w - w_t \rVert^2" />
          {" "}à loss local. <strong>SCAFFOLD</strong> usa variáveis de
          controlo <InlineMath math="c_k" /> e <InlineMath math="c" /> para
          corrigir o viés por cliente: gradiente efectivo{" "}
          <InlineMath math="= g_k - c_k + c" />.
        </div>
        <div style={S.note}>
          Comunicação é o bottleneck: 1000 clientes com modelo de 100MB = 100GB
          de uplink por round. Com redes móveis de 10 Mbps por cliente, cada
          round demora 80 segundos só de upload — e são necessários centenas de
          rounds para convergir.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Privacidade Diferencial e Segurança</h2>
        <p style={S.p}>
          FL protege dados brutos mas gradientes podem vazar informação —
          gradient inversion reconstrói imagens de treino a partir de
          gradientes. DP-SGD adiciona ruído com garantias formais (ε, δ). No
          dispositivo edge, o custo computacional do clipping e ruído por
          amostra soma-se ao orçamento já apertado de energia — é preciso
          escolher ε considerando não só privacidade mas o hit de bateria por
          round de treino.
        </p>
        <p style={S.p}>
          Ataques: <em>model poisoning</em> (updates manipulados) e{" "}
          <em>backdoor attacks</em> (trigger oculto). Defesas: Krum rejeita
          outliers pela mediana geométrica; Secure Aggregation deixa o servidor
          agregar sem ver updates individuais.
        </p>
        <div style={S.diagram}>
          <div>
            {/* DP-SGD pipeline */}
            <div
              style={{
                background: "rgba(74,158,237,0.04)",
                border: "1px solid var(--card-border)",
                borderRadius: 8,
                padding: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "#4a9eed",
                  fontFamily: "monospace",
                  marginBottom: "0.6rem",
                }}
              >
                DP-SGD
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  marginBottom: "0.6rem",
                }}
              >
                {[
                  {
                    label: "Gradiente",
                    sub: "raw ∇L(w)",
                    c: "var(--card-border)",
                    tc: "#e2e8f0",
                  },
                  {
                    label: "Clip L2",
                    sub: "‖g‖ ≤ C",
                    c: "#4a9eed",
                    tc: "#4a9eed",
                  },
                  {
                    label: "+ Ruido Gaussiano",
                    sub: "N(0, σ²C²)",
                    c: "#4a9eed",
                    tc: "#4a9eed",
                  },
                  {
                    label: "Grad. Ruidoso",
                    sub: "(ε, δ)-DP",
                    c: "var(--card-border)",
                    tc: "#e2e8f0",
                  },
                ].map((s, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && (
                      <div
                        style={{
                          color: "#0284c7",
                          fontSize: "1rem",
                          flexShrink: 0,
                        }}
                      >
                        ›
                      </div>
                    )}
                    <div
                      style={{
                        flex: 1,
                        background: `rgba(74,158,237,${i === 0 || i === 3 ? "0.04" : "0.12"})`,
                        border: `1px solid ${s.c}`,
                        borderRadius: 6,
                        padding: "0.4rem 0.5rem",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          color: s.tc,
                          fontFamily: "monospace",
                        }}
                      >
                        {s.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.62rem",
                          color: "#94a3b8",
                          fontFamily: "monospace",
                        }}
                      >
                        {s.sub}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
              {/* Privacy budget */}
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "#94a3b8",
                  fontFamily: "monospace",
                  marginBottom: "0.35rem",
                }}
              >
                PRIVACY BUDGET ε
              </div>
              {[
                { label: "ε=0.1 (forte)", w: 15 },
                { label: "ε=1", w: 50 },
                { label: "ε=10 (fraco)", w: 90 },
              ].map((b, i) => (
                <div
                  key={b.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  <div
                    style={{
                      width: 80,
                      fontSize: "0.62rem",
                      color: "#94a3b8",
                      fontFamily: "monospace",
                      flexShrink: 0,
                    }}
                  >
                    {b.label}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: "rgba(74,158,237,0.08)",
                      borderRadius: 3,
                      height: 10,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${b.w}%`,
                        height: "100%",
                        background: "#4a9eed",
                        opacity: 1 - i * 0.25,
                        borderRadius: 3,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Threat models */}
            <div style={{ marginBottom: "0.6rem" }}>
              <div
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  color: "#94a3b8",
                  fontFamily: "monospace",
                  marginBottom: "0.4rem",
                }}
              >
                MODELOS DE AMEACA
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  gap: "0.4rem",
                  marginBottom: "0.5rem",
                }}
              >
                {[
                  "Servidor curioso|honest-but-curious",
                  "Envenenamento|model poisoning",
                  "Inversao grad.|reconstroi dados",
                  "Backdoor|trigger oculto",
                ].map((s) => {
                  const [label, desc] = s.split("|");
                  return (
                    <div
                      key={label}
                      style={{
                        background: "rgba(74,158,237,0.08)",
                        border: "1px solid rgba(74,158,237,0.25)",
                        borderRadius: 6,
                        padding: "0.4rem",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          color: "#4a9eed",
                          fontFamily: "monospace",
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.6rem",
                          color: "#94a3b8",
                          fontFamily: "monospace",
                        }}
                      >
                        {desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Defences */}
            <div
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                color: "#94a3b8",
                fontFamily: "monospace",
                marginBottom: "0.4rem",
              }}
            >
              DEFESAS
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "0.4rem",
              }}
            >
              {[
                "Krum — rejeita updates outliers",
                "Secure Aggregation — criptografia homomórfica",
                "DP-SGD — garantia matematica formal",
              ].map((d) => (
                <div
                  key={d}
                  style={{
                    background: "rgba(74,158,237,0.06)",
                    border: "1px solid rgba(74,158,237,0.2)",
                    borderRadius: 6,
                    padding: "0.4rem 0.6rem",
                    fontSize: "0.65rem",
                    color: "#4a9eed",
                    fontFamily: "monospace",
                    textAlign: "center",
                  }}
                >
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={S.highlight}>
          <strong>DP-SGD:</strong> garante (ε, δ)-DP — com probabilidade 1−δ,
          nenhum adversário distingue modelos treinados com ou sem qualquer
          exemplo individual. O budget ε é consumido de forma aditiva por round
          (composição adaptativa). <strong>Secure Aggregation</strong> usa
          máscaras criptográficas pareadas: o servidor recebe apenas a soma
          agregada, nunca os updates individuais.
        </div>
        <div style={S.note}>
          Gradient inversion (Zhu et al., 2019) demonstrou que imagens 224×224
          podem ser reconstruídas de gradientes em menos de 1 minuto numa GPU,
          com qualidade visual suficiente para identificar pessoas. DP-SGD com ε
          &lt; 1 bloqueia estes ataques mas reduz accuracy em 2–5%.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Comunicação Eficiente e Selecção de Clientes</h2>
        <p style={S.p}>
          Sparsificação Top-K: envia apenas os K maiores gradientes em magnitude
          com os seus índices (K=1% → 100× compressão) com{" "}
          <em>error feedback</em> — o gradiente não enviado acumula localmente
          para o próximo round, evitando viés. Quantização de gradientes: FP32 →
          INT8 (4×) ou 1-bit SGD (32×).
        </p>
        <p style={S.p}>
          O problema dos <em>stragglers</em>: em FL síncrono, o round aguarda
          todos os clientes seleccionados — um dispositivo lento bloqueia todo o
          progresso. Solução: timeout e abandono dos lentos (usar os 80% mais
          rápidos) ou FedAsync (actualiza ao receber qualquer update). Selecção
          de clientes além de aleatória: Power-of-Choice (selecciona clientes
          com maior heterogeneidade) acelera convergência; disponibilidade
          temporal (Google Gboard: carregamento nocturno + WiFi) é o constraint
          real.
        </p>
        <div style={S.diagram}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {/* Compression bars */}
            <div
              style={{
                background: "rgba(74,158,237,0.04)",
                border: "1px solid var(--card-border)",
                borderRadius: 8,
                padding: "0.75rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "#94a3b8",
                  fontFamily: "monospace",
                  marginBottom: "0.6rem",
                }}
              >
                COMPRESSAO DE COMUNICACAO (modelo 100MB)
              </div>
              {[
                { label: "Baseline FP32", desc: "100 MB", w: 100 },
                { label: "INT8 Quantizacao", desc: "25 MB (4x)", w: 25 },
                { label: "Local SGD E=10", desc: "15 MB (amortizado)", w: 15 },
                { label: "Top-K 1%", desc: "1 MB (100x)", w: 1 },
                { label: "FedPAQ combo", desc: "250 KB (400x)", w: 0.5 },
              ].map((b, i) => (
                <div
                  key={b.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  <div
                    style={{
                      width: 110,
                      fontSize: "0.62rem",
                      color: "#94a3b8",
                      fontFamily: "monospace",
                      flexShrink: 0,
                      textAlign: "right",
                    }}
                  >
                    {b.label}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: "rgba(74,158,237,0.08)",
                      borderRadius: 3,
                      height: 14,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${Math.max(b.w, 0.5)}%`,
                        height: "100%",
                        background: "#4a9eed",
                        borderRadius: 3,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "0.62rem",
                      color: "#4a9eed",
                      fontFamily: "monospace",
                      flexShrink: 0,
                      width: 90,
                    }}
                  >
                    {b.desc}
                  </div>
                </div>
              ))}
            </div>
            {/* Straggler */}
            <div
              style={{
                background: "rgba(74,158,237,0.04)",
                border: "1px solid var(--card-border)",
                borderRadius: 8,
                padding: "0.75rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "#94a3b8",
                  fontFamily: "monospace",
                  marginBottom: "0.6rem",
                }}
              >
                PROBLEMA STRAGGLER
              </div>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
                const slow = i === 8;
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    <div
                      style={{
                        width: 20,
                        fontSize: "0.6rem",
                        color: "#475569",
                        fontFamily: "monospace",
                        flexShrink: 0,
                      }}
                    >
                      C{i + 1}
                    </div>
                    <div
                      style={{
                        width: slow ? "100%" : "40%",
                        height: 12,
                        background: slow
                          ? "rgba(74,158,237,0.5)"
                          : "rgba(74,158,237,0.25)",
                        border: `1px solid ${slow ? "#4a9eed" : "transparent"}`,
                        borderRadius: 3,
                      }}
                    />
                    <div
                      style={{
                        fontSize: "0.58rem",
                        color: slow ? "#4a9eed" : "#64748b",
                        fontFamily: "monospace",
                        flexShrink: 0,
                      }}
                    >
                      {slow ? "5 min — bloqueia!" : "1 min"}
                    </div>
                  </div>
                );
              })}
              <div
                style={{
                  fontSize: "0.62rem",
                  color: "#4a9eed",
                  fontFamily: "monospace",
                  marginTop: "0.4rem",
                  borderTop: "1px dashed rgba(74,158,237,0.4)",
                  paddingTop: "0.3rem",
                }}
              >
                timeout: descarta C9 apos 1 min
              </div>
            </div>
          </div>
        </div>
        <div style={S.highlight}>
          <strong>Power-of-Choice:</strong> em vez de seleccionar clientes
          aleatoriamente, selecciona os d candidatos com maior loss local
          estimada — força o modelo a focar nos clientes mais difíceis. Melhora
          convergência em cenários non-IID em 30–50% menos rounds.{" "}
          <strong>FedAsync</strong> elimina o problema do straggler: o servidor
          actualiza o modelo global ao receber qualquer update, com factor de
          staleness 1/(1 + delay_rounds).
        </div>
        <div style={S.note}>
          Google Gboard: o sistema só activa FL em dispositivos com bateria
          acima de 80%, ligados a carregador, em WiFi, e com ecrã desligado —
          reduz o pool de clientes elegíveis para &lt;5% em qualquer momento,
          mas garante que o treino não interfere com o uso normal.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Aplicações Reais de Federated Learning</h2>
        <p style={S.p}>
          Saúde: FeTS envolveu 71 instituições e 6000 casos de segmentação de
          tumores cerebrais em MRI — o modelo federado supera qualquer modelo
          single-institution sem dados a sair dos hospitais. Google Gboard
          (500M+ dispositivos) treina next-word prediction sem enviar texto
          digitado; Apple usa o mesmo princípio com DP para QuickType e Siri.
        </p>
        <div style={S.diagram}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {/* FeTS case */}
            <div
              style={{
                background: "rgba(74,158,237,0.04)",
                border: "1px solid var(--card-border)",
                borderRadius: 8,
                padding: "0.75rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "#4a9eed",
                  fontFamily: "monospace",
                  marginBottom: "0.6rem",
                }}
              >
                CASO: FL EM SAUDE — FeTS
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "0.4rem",
                  marginBottom: "0.6rem",
                }}
              >
                {[
                  ["Hospital A", "5k pacientes"],
                  ["Hospital B", "8k pacientes"],
                  ["Hospital C", "12k pacientes"],
                ].map(([label, n]) => (
                  <div
                    key={label}
                    style={{
                      flex: 1,
                      background: "rgba(74,158,237,0.08)",
                      border: "1px solid rgba(74,158,237,0.35)",
                      borderRadius: 7,
                      padding: "0.4rem",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        color: "#4a9eed",
                        fontFamily: "monospace",
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.6rem",
                        color: "#94a3b8",
                        fontFamily: "monospace",
                      }}
                    >
                      {n}
                    </div>
                    <div
                      style={{
                        fontSize: "0.55rem",
                        color: "#475569",
                        fontFamily: "monospace",
                      }}
                    >
                      dados privados GDPR
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  textAlign: "center",
                  color: "#4a9eed",
                  fontSize: "0.8rem",
                  marginBottom: "0.4rem",
                }}
              >
                ↓ delta W (sem dados brutos)
              </div>
              <div
                style={{
                  background: "rgba(74,158,237,0.12)",
                  border: "1.5px solid #4a9eed",
                  borderRadius: 7,
                  padding: "0.4rem",
                  textAlign: "center",
                  marginBottom: "0.6rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: "#4a9eed",
                    fontFamily: "monospace",
                  }}
                >
                  FL — FedAvg
                </div>
                <div
                  style={{
                    fontSize: "0.62rem",
                    color: "#94a3b8",
                    fontFamily: "monospace",
                  }}
                >
                  25k amostras efectivas · GDPR compliant
                </div>
              </div>
              {[
                { label: "Melhor hospital único (12k)", acc: 72, dim: true },
                { label: "FL federado (25k efectivos)", acc: 89, dim: false },
              ].map((r) => (
                <div key={r.label} style={{ marginBottom: "0.35rem" }}>
                  <div
                    style={{
                      fontSize: "0.62rem",
                      color: "#94a3b8",
                      fontFamily: "monospace",
                      marginBottom: 2,
                    }}
                  >
                    {r.label}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        background: "rgba(74,158,237,0.08)",
                        borderRadius: 3,
                        height: 14,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${r.acc}%`,
                          height: "100%",
                          background: r.dim ? "#94a3b8" : "#4a9eed",
                          borderRadius: 3,
                          opacity: r.dim ? 0.5 : 0.85,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        color: r.dim ? "#94a3b8" : "#4a9eed",
                        fontFamily: "monospace",
                        width: 32,
                      }}
                    >
                      {r.acc}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Real applications */}
            <div
              style={{
                background: "rgba(74,158,237,0.04)",
                border: "1px solid var(--card-border)",
                borderRadius: 8,
                padding: "0.75rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "#94a3b8",
                  fontFamily: "monospace",
                  marginBottom: "0.6rem",
                }}
              >
                APLICACOES REAIS
              </div>
              {[
                {
                  org: "Google Gboard",
                  detail:
                    "500M+ dispositivos · next-word prediction · texto nunca sai do dispositivo",
                },
                {
                  org: "Apple",
                  detail: "QuickType + Siri + spam detection com DP-SGD",
                },
                {
                  org: "Waymo / Tesla",
                  detail: "percepcao partilhada sem revelar dados de routing",
                },
                {
                  org: "Industrial IoT",
                  detail:
                    "anomaly detection entre fabricantes concorrentes sem revelar eficiencias",
                },
              ].map((a) => (
                <div
                  key={a.org}
                  style={{
                    borderLeft: "2px solid #4a9eed",
                    paddingLeft: "0.6rem",
                    marginBottom: "0.55rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: "#4a9eed",
                      fontFamily: "monospace",
                    }}
                  >
                    {a.org}
                  </div>
                  <div
                    style={{
                      fontSize: "0.63rem",
                      color: "#64748b",
                      fontFamily: "monospace",
                      lineHeight: 1.4,
                    }}
                  >
                    {a.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={S.highlight}>
          <strong>FeTS Challenge (2022):</strong> maior estudo de FL em saúde —
          71 instituições de 6 países, dados de MRI de glioblastoma e glioma de
          baixo grau. O modelo federado melhorou o Dice score em 10–15%
          comparado com o melhor modelo single-site, sem partilha de imagens de
          doentes entre instituições.
        </div>
        <div style={S.note}>
          Industrial IoT: empresas concorrentes no mesmo sector (ex: fabricantes
          de turbinas eólicas) beneficiam de um modelo de anomaly detection
          treinado com dados de toda a indústria, sem revelar os dados de
          operação que poderiam indicar ineficiências ou segredos industriais.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. FL Personalizado e Estado da Arte</h2>
        <p style={S.p}>
          Um único modelo global raramente serve todas as distribuições de
          clientes. No edge, personalização com custo mínimo é o que importa:{" "}
          <em>fine-tuning</em> local pós-FL (few-shot, mais de 100 amostras) ou{" "}
          <em>per-layer</em> — camadas iniciais globais, classificador final
          local — evitam re-treinar a rede inteira no dispositivo.
        </p>
        <div style={S.diagram}>
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "0.5rem",
                marginBottom: "0.75rem",
              }}
            >
              {[
                {
                  title: "FedAvg Padrao",
                  desc: "um modelo global",
                  acc: 45,
                  dim: true,
                  note: "non-IID: baixo",
                },
                {
                  title: "Fine-tuning Local",
                  desc: "global → adaptar local",
                  acc: 78,
                  dim: false,
                  note: "≥100 amostras",
                },
                {
                  title: "Per-Layer Pers.",
                  desc: "early=global / late=local",
                  acc: 81,
                  dim: false,
                  note: "equilibrio optimo",
                },
                {
                  title: "Clustered FL",
                  desc: "um modelo por cluster",
                  acc: 84,
                  dim: false,
                  note: "grupos similares",
                },
              ].map((s) => (
                <div
                  key={s.title}
                  style={{
                    background: `rgba(74,158,237,${s.dim ? "0.04" : "0.08"})`,
                    border: `1px solid ${s.dim ? "var(--card-border)" : "rgba(74,158,237,0.35)"}`,
                    borderRadius: 8,
                    padding: "0.6rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.67rem",
                      fontWeight: 700,
                      color: s.dim ? "#64748b" : "#4a9eed",
                      fontFamily: "monospace",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {s.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.6rem",
                      color: "#94a3b8",
                      fontFamily: "monospace",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {s.desc}
                  </div>
                  <div
                    style={{
                      fontSize: "0.58rem",
                      color: "#475569",
                      fontFamily: "monospace",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {s.note}
                  </div>
                  <div
                    style={{
                      background: "rgba(74,158,237,0.08)",
                      borderRadius: 3,
                      height: 12,
                      overflow: "hidden",
                      marginBottom: "0.2rem",
                    }}
                  >
                    <div
                      style={{
                        width: `${s.acc}%`,
                        height: "100%",
                        background: s.dim ? "#475569" : "#4a9eed",
                        borderRadius: 3,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      color: s.dim ? "#64748b" : "#4a9eed",
                      fontFamily: "monospace",
                      textAlign: "center",
                    }}
                  >
                    {s.acc}%
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                fontSize: "0.63rem",
                color: "#475569",
                fontFamily: "monospace",
                textAlign: "center",
                marginBottom: "0.75rem",
              }}
            >
              accuracy em dados non-IID heterogeneos
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  background: "rgba(74,158,237,0.04)",
                  border: "1px solid var(--card-border)",
                  borderRadius: 8,
                  padding: "0.65rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: "#94a3b8",
                    fontFamily: "monospace",
                    marginBottom: "0.4rem",
                  }}
                >
                  pFedMe — Formulacao Bi-Nivel
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#4a9eed",
                    marginBottom: "0.3rem",
                  }}
                >
                  <InlineMath math="\min_w F(w) = \sum_k f_k(\theta_k^*; w)" />
                </div>
                <div style={{ fontSize: "0.7rem", color: "#94a3b8" }}>
                  onde{" "}
                  <InlineMath math="\theta_k^* = \arg\min_\theta L_k(\theta) + \frac{\lambda}{2} \lVert \theta - w \rVert^2" />
                </div>
              </div>
              <div
                style={{
                  background: "rgba(74,158,237,0.04)",
                  border: "1px solid var(--card-border)",
                  borderRadius: 8,
                  padding: "0.65rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: "#94a3b8",
                    fontFamily: "monospace",
                    marginBottom: "0.4rem",
                  }}
                >
                  Per-FedAvg (MAML para FL)
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#4a9eed",
                    marginBottom: "0.3rem",
                  }}
                >
                  pre-treina <InlineMath math="W^*" /> optimo para 1–5 grad.
                  steps
                </div>
                <div
                  style={{
                    fontSize: "0.62rem",
                    color: "#94a3b8",
                    fontFamily: "monospace",
                  }}
                >
                  fine-tune rapido com poucas amostras locais
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={S.note}>
          A Apple usa per-layer com DP no QuickType — embeddings globais
          (vocabulário partilhado), camadas de predição locais (padrões
          individuais) — o padrão prático mais comum em produção no edge.
        </div>
      </div>
    </div>
  );
}
