import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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

const m = modules[4];

export default function EDG5() {
  return (
    <div style={S.page}>
      <Link to="/edge-ai" style={S.back}>
        <ArrowLeft size={16} /> Edge AI
      </Link>
      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. OTA Updates — Gestão de Modelos em Produção</h2>
        <div style={S.diagram}>
          {/* Row 1: Cloud Backend + Network + A/B Canary */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              gap: "1rem",
              marginBottom: "1rem",
              alignItems: "start",
            }}
          >
            {/* Cloud Backend */}
            <div
              style={{
                background: "rgba(74,158,237,0.06)",
                border: "1px solid #4a9eed",
                borderRadius: 8,
                padding: "0.85rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#4a9eed",
                  fontFamily: "monospace",
                  marginBottom: "0.6rem",
                }}
              >
                CLOUD BACKEND
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.35rem",
                }}
              >
                {[
                  "Model Registry (versioned)",
                  "OTA Server",
                  "AWS IoT / Azure / Balena",
                  "Deployment orchestration",
                  "Rollback controller",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      background: "rgba(148,163,184,0.08)",
                      border: "1px solid rgba(148,163,184,0.2)",
                      borderRadius: 4,
                      padding: "0.25rem 0.5rem",
                      fontSize: "0.72rem",
                      color: "#4a9eed",
                      fontFamily: "monospace",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Network */}
            <div
              style={{
                background: "rgba(74,158,237,0.04)",
                border: "1px solid var(--card-border)",
                borderRadius: 8,
                padding: "0.75rem 0.85rem",
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "#94a3b8",
                  fontFamily: "monospace",
                  marginBottom: "0.4rem",
                }}
              >
                REDE
              </div>
              {["MQTT", "HTTPS", "CoAP"].map((p) => (
                <div
                  key={p}
                  style={{
                    fontSize: "0.72rem",
                    color: "#94a3b8",
                    fontFamily: "monospace",
                  }}
                >
                  {p}
                </div>
              ))}
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "#64748b",
                  fontFamily: "monospace",
                  marginTop: "0.25rem",
                }}
              >
                MCU constrained
              </div>
              <div
                style={{
                  color: "#4a9eed",
                  fontSize: "1rem",
                  margin: "0.4rem 0",
                }}
              >
                ⇄
              </div>
            </div>

            {/* A/B Canary */}
            <div
              style={{
                background: "rgba(74,158,237,0.04)",
                border: "1px solid var(--card-border)",
                borderRadius: 8,
                padding: "0.85rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#0284c7",
                  fontFamily: "monospace",
                  marginBottom: "0.65rem",
                }}
              >
                A/B CANARY DEPLOYMENT
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.45rem",
                }}
              >
                {[
                  { pct: "5%", label: "Canary — 24-72h monit.", w: 5 },
                  { pct: "25%", label: "Ring 1 — validação ok", w: 25 },
                  { pct: "50%", label: "Ring 2 — metricas ok", w: 50 },
                  { pct: "100%", label: "Producao total", w: 100 },
                ].map((s) => (
                  <div
                    key={s.pct}
                    style={{
                      background: "rgba(74,158,237,0.06)",
                      border: "1px solid rgba(74,158,237,0.3)",
                      borderRadius: 5,
                      padding: "0.3rem 0.6rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.2rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          color: "#4a9eed",
                          fontFamily: "monospace",
                          width: 38,
                        }}
                      >
                        {s.pct}
                      </span>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "#94a3b8",
                          fontFamily: "monospace",
                        }}
                      >
                        {s.label}
                      </span>
                    </div>
                    <div
                      style={{
                        background: "rgba(74,158,237,0.12)",
                        borderRadius: 2,
                        height: 6,
                      }}
                    >
                      <div
                        style={{
                          width: `${s.w}%`,
                          height: "100%",
                          background: "#4a9eed",
                          borderRadius: 2,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#94a3b8",
                  fontFamily: "monospace",
                  marginTop: "0.5rem",
                }}
              >
                Rollback automatico: acc cai 2%+ ou erro aumenta
              </div>
            </div>
          </div>

          {/* Row 2: Secure Boot Chain */}
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
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "#94a3b8",
                fontFamily: "monospace",
                marginBottom: "0.5rem",
              }}
            >
              SECURE BOOT CHAIN
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                flexWrap: "wrap",
              }}
            >
              {[
                "Bootloader",
                "verifica sig",
                "Firmware verificado",
                "ML model hash",
                "Ed25519 / ECDSA",
              ].map((step, i) => (
                <React.Fragment key={step}>
                  <span
                    style={{
                      background: "rgba(148,163,184,0.08)",
                      border: "1px solid rgba(148,163,184,0.2)",
                      borderRadius: 4,
                      padding: "0.2rem 0.55rem",
                      fontSize: "0.72rem",
                      color: "#4a9eed",
                      fontFamily: "monospace",
                    }}
                  >
                    {step}
                  </span>
                  {i < 4 && (
                    <span style={{ color: "#64748b", fontSize: "0.8rem" }}>
                      ›
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div
            style={{
              fontSize: "0.7rem",
              color: "#64748b",
              fontFamily: "monospace",
            }}
          >
            Delta update: model v1.2 → v1.3 = 15KB diff vs 300KB full model (95%
            reducao de banda)
          </div>
        </div>
        <p style={S.p}>
          Actualizar modelos em milhares de dispositivos distribuídos, sem
          downtime nem corrupção, é o maior desafio operacional do edge.
          Protocolos dominantes: MQTT para telemetria/comandos (baixo overhead,
          MCUs), HTTPS para binários de firmware, CoAP para dispositivos com
          menos de 64KB RAM.
        </p>
        <p style={S.p}>
          O deployment segue canary (5% da frota, 24-72h de monitorização) antes
          do rollout gradual, com rollback automático se accuracy cai mais de
          2%. Segurança: assinatura criptográfica (Ed25519/ECDSA), verificação
          de hash, secure boot. O Balena é a plataforma mais usada para frotas
          Linux embedded (containers Docker por device).
        </p>
        <div style={S.highlight}>
          Delta updates (bsdiff/bspatch) reduzem 90%+ o tamanho do update para
          modelos com pequenas alterações de pesos — crítico em redes com banda
          limitada ou custo por MB (redes celulares 4G/LTE em IoT industrial).
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Monitorização de Modelos no Edge</h2>
        <div style={S.diagram}>
          {/* Row 1: Edge Device + Cloud Analytics + Drift Detection */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            {/* Edge Device */}
            <div
              style={{
                background: "rgba(74,158,237,0.06)",
                border: "1px solid #4a9eed",
                borderRadius: 8,
                padding: "0.85rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#4a9eed",
                  fontFamily: "monospace",
                  marginBottom: "0.65rem",
                }}
              >
                EDGE DEVICE
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                  marginBottom: "0.6rem",
                }}
              >
                {[
                  { label: "Inference Engine", dim: false },
                  { label: "Prediction Logger", dim: true },
                  { label: "Anomaly Detector", dim: false },
                  { label: "Telemetry Buffer", dim: false },
                ].map((b) => (
                  <div
                    key={b.label}
                    style={{
                      background: `rgba(74,158,237,${b.dim ? "0.04" : "0.12"})`,
                      border: `1px solid ${b.dim ? "var(--card-border)" : "#4a9eed"}`,
                      borderRadius: 5,
                      padding: "0.3rem 0.6rem",
                      fontSize: "0.73rem",
                      fontWeight: 700,
                      color: b.dim ? "#64748b" : "#4a9eed",
                      fontFamily: "monospace",
                      textAlign: "center",
                    }}
                  >
                    {b.label}
                  </div>
                ))}
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  color: "#64748b",
                  fontFamily: "monospace",
                }}
              >
                ring buffer 1000 amostras
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  color: "#64748b",
                  fontFamily: "monospace",
                }}
              >
                log selectivo: conf abaixo de 0.7
              </div>
              <div
                style={{
                  textAlign: "center",
                  color: "#4a9eed",
                  fontSize: "0.8rem",
                  marginTop: "0.4rem",
                }}
              >
                → MQTT →
              </div>
            </div>

            {/* Cloud Analytics */}
            <div
              style={{
                background: "rgba(74,158,237,0.04)",
                border: "1px solid var(--card-border)",
                borderRadius: 8,
                padding: "0.85rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#94a3b8",
                  fontFamily: "monospace",
                  marginBottom: "0.65rem",
                }}
              >
                CLOUD ANALYTICS
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                  marginBottom: "0.6rem",
                }}
              >
                {[
                  { label: "Telemetria Aggregation", dim: true },
                  { label: "Drift Detection (PSI / KL)", dim: false },
                  { label: "Performance Dashboard", dim: false },
                  { label: "Alert System", dim: false },
                ].map((b) => (
                  <div
                    key={b.label}
                    style={{
                      background: `rgba(74,158,237,${b.dim ? "0.04" : "0.10"})`,
                      border: `1px solid ${b.dim ? "var(--card-border)" : "#4a9eed"}`,
                      borderRadius: 5,
                      padding: "0.3rem 0.6rem",
                      fontSize: "0.73rem",
                      fontWeight: 700,
                      color: b.dim ? "#64748b" : "#4a9eed",
                      fontFamily: "monospace",
                      textAlign: "center",
                    }}
                  >
                    {b.label}
                  </div>
                ))}
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  color: "#64748b",
                  fontFamily: "monospace",
                }}
              >
                latência p50/p95/p99 · acc proxy · CPU/mem
              </div>
            </div>

            {/* Drift Detection PSI */}
            <div
              style={{
                background: "rgba(74,158,237,0.04)",
                border: "1px solid var(--card-border)",
                borderRadius: 8,
                padding: "0.85rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#0284c7",
                  fontFamily: "monospace",
                  marginBottom: "0.5rem",
                }}
              >
                DRIFT DETECTION — PSI
              </div>
              <svg
                viewBox="0 0 220 80"
                style={{
                  width: "100%",
                  height: "auto",
                  marginBottom: "0.5rem",
                }}
              >
                {[30, 50, 70, 90, 60, 40, 20, 10].map((h, i) => (
                  <rect
                    key={`r-${i}`}
                    x={i * 27}
                    y={75 - h * 0.75}
                    width="20"
                    height={h * 0.75}
                    rx="1"
                    fill="rgba(74,158,237,0.4)"
                    stroke="#4a9eed"
                    strokeWidth="0.8"
                  />
                ))}
                {[10, 30, 40, 70, 90, 60, 30, 20].map((h, i) => (
                  <rect
                    key={`c-${i}`}
                    x={i * 27 + 4}
                    y={75 - h * 0.75}
                    width="13"
                    height={h * 0.75}
                    rx="1"
                    fill="rgba(148,163,184,0.4)"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                ))}
                <line
                  x1="0"
                  y1="75"
                  x2="220"
                  y2="75"
                  stroke="var(--card-border)"
                  strokeWidth="1"
                />
              </svg>
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  marginBottom: "0.4rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.68rem",
                    color: "#4a9eed",
                    fontFamily: "monospace",
                  }}
                >
                  ■ treino (ref.)
                </span>
                <span
                  style={{
                    fontSize: "0.68rem",
                    color: "#94a3b8",
                    fontFamily: "monospace",
                  }}
                >
                  ■ producao actual
                </span>
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#0284c7",
                  fontFamily: "monospace",
                  marginBottom: "0.2rem",
                }}
              >
                PSI &gt; 0.2 = drift significativo
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  color: "#64748b",
                  fontFamily: "monospace",
                }}
              >
                ex: camara exterior verao vs inverno
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  color: "#64748b",
                  fontFamily: "monospace",
                }}
              >
                shadow mode: novo modelo em paralelo
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div
            style={{
              background: "rgba(74,158,237,0.04)",
              border: "1px solid var(--card-border)",
              borderRadius: 6,
              padding: "0.6rem 0.85rem",
              fontSize: "0.72rem",
              color: "#94a3b8",
              fontFamily: "monospace",
              lineHeight: 1.6,
            }}
          >
            Logging selectivo (MCU conectividade limitada): apenas amostras com
            confianca abaixo de 0.7 ou resultados inesperados sao enviados para
            cloud para revisao humana e inclusao no dataset de re-treino —
            minimiza uso de banda
          </div>
        </div>
        <p style={S.p}>
          A monitorização no edge enfrenta constrangimentos que não existem em
          serviços cloud: capacidade de logging limitada, conectividade
          intermitente e ausência de ground truth em tempo real (drift detection
          genérico — PSI, KL — é tratado no curso de MLOps). Numa câmara
          exterior, mudanças de estação causam deriva silenciosa nas features
          sem erros óbvios.
        </p>
        <p style={S.p}>
          Em MCUs com conectividade limitada, o logging selectivo é obrigatório:
          apenas amostras de baixa confiança (menos de 0.7) ou resultados
          inesperados sobem para a cloud, minimizando banda. Shadow mode — novo
          modelo em paralelo, sem afectar decisões — valida antes do switch.
        </p>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Federated Learning no Edge — Princípios</h2>
        <div style={S.diagram}>
          {/* Row 1: Global Model center + devices grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              gap: "1rem",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            {/* Left devices */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.4rem",
              }}
            >
              {["Device 1", "Device 2", "Device 3", "Device 4"].map((d) => (
                <div
                  key={d}
                  style={{
                    background: "rgba(74,158,237,0.10)",
                    border: "1px solid #4a9eed",
                    borderRadius: 6,
                    padding: "0.4rem 0.5rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "#4a9eed",
                      fontFamily: "monospace",
                    }}
                  >
                    {d}
                  </div>
                  <div
                    style={{
                      fontSize: "0.65rem",
                      color: "#64748b",
                      fontFamily: "monospace",
                    }}
                  >
                    dados locais
                  </div>
                  <div
                    style={{
                      fontSize: "0.65rem",
                      color: "#64748b",
                      fontFamily: "monospace",
                    }}
                  >
                    privados
                  </div>
                </div>
              ))}
            </div>
            {/* Global Model center */}
            <div
              style={{
                background: "rgba(74,158,237,0.08)",
                border: "2px solid #4a9eed",
                borderRadius: 10,
                padding: "0.9rem 1.2rem",
                textAlign: "center",
                minWidth: 140,
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#4a9eed",
                  fontFamily: "monospace",
                  marginBottom: "0.3rem",
                }}
              >
                Global Model
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#64748b",
                  fontFamily: "monospace",
                }}
              >
                Cloud Server — FedAvg
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "#64748b",
                  fontFamily: "monospace",
                  marginTop: "0.2rem",
                }}
              >
                agrega actualizacoes
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "#64748b",
                  fontFamily: "monospace",
                }}
              >
                ponderadas
              </div>
            </div>
            {/* Right devices */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.4rem",
              }}
            >
              {["Device 5", "Device 6", "Device 7", "Device 8"].map((d) => (
                <div
                  key={d}
                  style={{
                    background: "rgba(74,158,237,0.10)",
                    border: "1px solid #4a9eed",
                    borderRadius: 6,
                    padding: "0.4rem 0.5rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "#4a9eed",
                      fontFamily: "monospace",
                    }}
                  >
                    {d}
                  </div>
                  <div
                    style={{
                      fontSize: "0.65rem",
                      color: "#64748b",
                      fontFamily: "monospace",
                    }}
                  >
                    dados locais
                  </div>
                  <div
                    style={{
                      fontSize: "0.65rem",
                      color: "#64748b",
                      fontFamily: "monospace",
                    }}
                  >
                    privados
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* FL Round pipeline */}
          <div
            style={{
              background: "rgba(74,158,237,0.04)",
              border: "1px solid var(--card-border)",
              borderRadius: 8,
              padding: "0.75rem 1rem",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                color: "#94a3b8",
                fontFamily: "monospace",
                marginBottom: "0.6rem",
              }}
            >
              FL ROUND:
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
            >
              {[
                { n: "1", label: "Server envia", sub: "modelo global" },
                { n: "2", label: "Device treina", sub: "E epochs local" },
                { n: "3", label: "Envia delta pesos", sub: "NAO dados raw" },
                { n: "4", label: "FedAvg: media", sub: "ponderada por |D|" },
                { n: "5", label: "Modelo global", sub: "actualizado" },
              ].map((step, i) => (
                <React.Fragment key={i}>
                  <div style={{ flex: 1, textAlign: "center" }}>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "rgba(74,158,237,0.15)",
                        border: "1.5px solid #4a9eed",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 0.3rem",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "#4a9eed",
                        fontFamily: "monospace",
                      }}
                    >
                      {step.n}
                    </div>
                    <div
                      style={{
                        fontSize: "0.65rem",
                        color: "#94a3b8",
                        fontFamily: "monospace",
                        lineHeight: 1.4,
                      }}
                    >
                      {step.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.65rem",
                        color: "#64748b",
                        fontFamily: "monospace",
                        lineHeight: 1.4,
                      }}
                    >
                      {step.sub}
                    </div>
                  </div>
                  {i < 4 && (
                    <div
                      style={{
                        color: "#4a9eed",
                        fontSize: "1rem",
                        flexShrink: 0,
                      }}
                    >
                      ›
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <p style={S.p}>
          O Federated Learning (McMahan et al., 2017) treina modelos com dados
          distribuídos e privados — os dados nunca saem do dispositivo, apenas
          actualizações de pesos são enviadas e agregadas (FedAvg). O algoritmo,
          o problema de Non-IID data e as técnicas de privacidade diferencial
          são tratados em profundidade no módulo 7 deste curso; aqui interessa a
          integração operacional com a infraestrutura de frota descrita acima —
          o mesmo canal OTA/MQTT usado para push de modelos serve para upload de
          deltas de gradiente.
        </p>
        <div style={S.highlight}>
          Custo de comunicação: 50MB de modelo completo vs 2MB de gradientes =
          25x menos banda — decisivo para dispositivos em redes celulares com
          custo por MB.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Pipelines de Deployment e CI/CD para Edge</h2>
        <div style={S.diagram}>
          {/* Row 1: steps 1-5 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              marginBottom: "0.5rem",
            }}
          >
            {[
              { n: "1", label: "Code Commit", tool: "Git + DVC", dim: true },
              {
                n: "2",
                label: "GitHub Actions",
                tool: "CI trigger",
                dim: true,
              },
              {
                n: "3",
                label: "Training Cloud GPU",
                tool: "MLflow track",
                dim: false,
              },
              {
                n: "4",
                label: "Auto Evaluation",
                tool: "acc threshold",
                dim: false,
              },
              {
                n: "5",
                label: "Model Conversion",
                tool: "TFLite/ONNX",
                dim: false,
              },
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div
                  style={{
                    flex: 1,
                    background: `rgba(74,158,237,${step.dim ? "0.04" : "0.12"})`,
                    border: `1px solid ${step.dim ? "var(--card-border)" : "#4a9eed"}`,
                    borderRadius: 7,
                    padding: "0.5rem 0.4rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: step.dim ? "#64748b" : "#4a9eed",
                      fontFamily: "monospace",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {step.n}. {step.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.63rem",
                      color: "#64748b",
                      fontFamily: "monospace",
                    }}
                  >
                    {step.tool}
                  </div>
                </div>
                {i < 4 && (
                  <div
                    style={{
                      color: "#4a9eed",
                      fontSize: "1rem",
                      flexShrink: 0,
                    }}
                  >
                    ›
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          {/* Row 2: steps 6-10 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              marginBottom: "0.75rem",
            }}
          >
            {[
              { n: "6", label: "HW-in-loop Test", tool: "QEMU / device" },
              { n: "7", label: "Model Registry", tool: "DVC + MLflow" },
              { n: "8", label: "OTA Staging Fleet", tool: "Balena/AWS IoT" },
              { n: "9", label: "Canary Metrics", tool: "24h monitor" },
              { n: "10", label: "Production Rollout", tool: "100% frota" },
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div
                  style={{
                    flex: 1,
                    background: "rgba(74,158,237,0.12)",
                    border: "1px solid #4a9eed",
                    borderRadius: 7,
                    padding: "0.5rem 0.4rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: "#4a9eed",
                      fontFamily: "monospace",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {step.n}. {step.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.63rem",
                      color: "#64748b",
                      fontFamily: "monospace",
                    }}
                  >
                    {step.tool}
                  </div>
                </div>
                {i < 4 && (
                  <div
                    style={{
                      color: "#4a9eed",
                      fontSize: "1rem",
                      flexShrink: 0,
                    }}
                  >
                    ›
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          {/* Notes */}
          <div
            style={{
              background: "rgba(74,158,237,0.04)",
              border: "1px solid var(--card-border)",
              borderRadius: 6,
              padding: "0.6rem 0.85rem",
              fontSize: "0.71rem",
              color: "#94a3b8",
              fontFamily: "monospace",
              lineHeight: 1.7,
            }}
          >
            <div>
              DIFERENCA vs SW CI/CD: testes incluem metricas de modelo
              (accuracy, F1) alem de testes funcionais | "build" inclui treino
            </div>
            <div style={{ color: "#64748b" }}>
              Hardware-in-the-loop: dispositivo fisico ou QEMU ARM no lab de CI
              executa inferencia real — latencia, memoria, accuracy medidos
            </div>
            <div style={{ color: "#64748b" }}>
              Stack tipico industrial: GitHub + DVC + GitHub Actions + MLflow +
              W&amp;B + Balena ou AWS IoT Greengrass para OTA
            </div>
          </div>
        </div>
        <p style={S.p}>
          Os princípios gerais de CI/CD para ML (DVC, MLflow, model registry)
          são cobertos no curso de MLOps. O elemento verdadeiramente
          diferenciador do edge é o hardware-in-the-loop testing: um dispositivo
          físico (ou QEMU para ARM) no laboratório de CI executa inferência para
          cada modelo candidato, medindo latência real, memória e accuracy no
          alvo — garante que métricas de cloud se traduzem em performance real
          no dispositivo, antes de qualquer OTA.
        </p>
        <div style={S.note}>
          Stack típico: GitHub Actions dispara treino/avaliação na cloud, o
          candidato passa por hardware-in-the-loop, e só então entra em staging
          fleet via Balena/AWS IoT Greengrass para canary rollout.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Gestão de Frota e Ciclo de Vida Operacional</h2>
        <div style={S.diagram}>
          {/* Row 1: device grid + version distribution */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "0.75rem",
            }}
          >
            {/* Fleet grid */}
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
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "#94a3b8",
                  fontFamily: "monospace",
                  marginBottom: "0.6rem",
                }}
              >
                FLEET — 200 DISPOSITIVOS
              </div>
              <svg
                viewBox="0 0 320 110"
                style={{
                  width: "100%",
                  height: "auto",
                  marginBottom: "0.5rem",
                }}
              >
                {Array.from({ length: 10 }).map((_, row) =>
                  Array.from({ length: 20 }).map((_, col) => {
                    const idx = row * 20 + col;
                    const c =
                      idx < 120
                        ? "#4a9eed"
                        : idx < 160
                          ? "#0284c7"
                          : idx < 185
                            ? "#0369a1"
                            : "#475569";
                    return (
                      <rect
                        key={idx}
                        x={col * 16}
                        y={row * 11}
                        width="14"
                        height="9"
                        rx="2"
                        fill={`${c}50`}
                        stroke={c}
                        strokeWidth="0.6"
                      />
                    );
                  }),
                )}
              </svg>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {[
                  ["#4a9eed", "saudavel (120)"],
                  ["#0284c7", "warning drift (40)"],
                  ["#0369a1", "erro (25)"],
                  ["#475569", "offline (15)"],
                ].map(([c, label]) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 2,
                        background: c,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.63rem",
                        color: "#64748b",
                        fontFamily: "monospace",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Version distribution + device detail */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {/* Device detail */}
              <div
                style={{
                  background: "rgba(74,158,237,0.06)",
                  border: "1px solid #4a9eed",
                  borderRadius: 7,
                  padding: "0.6rem 0.75rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#4a9eed",
                    fontFamily: "monospace",
                    marginBottom: "0.3rem",
                  }}
                >
                  Device ID: edge-042 | Lisboa, Portugal
                </div>
                <div
                  style={{
                    fontSize: "0.67rem",
                    color: "#64748b",
                    fontFamily: "monospace",
                    lineHeight: 1.6,
                  }}
                >
                  Model: v2.3.1 | Last seen: 5min | Inf/day: 45,231
                  <br />
                  Lat avg: 12ms | Conf: 0.87 | Uptime: 99.8%
                  <br />
                  Erros: 0.04% | Conectividade loss: 0.3%
                </div>
              </div>
              {/* Version bars */}
              <div
                style={{
                  background: "rgba(74,158,237,0.04)",
                  border: "1px solid var(--card-border)",
                  borderRadius: 7,
                  padding: "0.6rem 0.75rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "#94a3b8",
                    fontFamily: "monospace",
                    marginBottom: "0.5rem",
                  }}
                >
                  Distribuicao versoes de modelo em frota:
                </div>
                {[
                  ["v2.3.1", "60%", "#4a9eed", 60],
                  ["v2.3.0", "30%", "#0284c7", 30],
                  ["v2.2.x (legacy)", "10%", "#94a3b8", 10],
                ].map(([v, pct, c, w]) => (
                  <div
                    key={v}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.3rem",
                    }}
                  >
                    <div
                      style={{
                        width: 52,
                        fontSize: "0.65rem",
                        color: c,
                        fontFamily: "monospace",
                        flexShrink: 0,
                      }}
                    >
                      {v}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        background: "var(--card-border)",
                        borderRadius: 3,
                        height: 10,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${w}%`,
                          height: "100%",
                          background: c,
                          borderRadius: 3,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        width: 30,
                        fontSize: "0.65rem",
                        color: c,
                        fontFamily: "monospace",
                        textAlign: "right",
                        flexShrink: 0,
                      }}
                    >
                      {pct}
                    </div>
                  </div>
                ))}
                <div
                  style={{
                    fontSize: "0.65rem",
                    color: "#64748b",
                    fontFamily: "monospace",
                    marginTop: "0.3rem",
                  }}
                >
                  Egress cloud: -98% vs solucao cloud-only
                </div>
              </div>
            </div>
          </div>
        </div>
        <p style={S.p}>
          Gerir frotas de centenas a milhares de dispositivos exige plataformas
          dedicadas — AWS IoT Greengrass e Azure IoT Edge permitem deployment de
          containers, sincronização de configuração e telemetria centralizada. O
          Device Shadow mantém estado desejado/reportado por dispositivo,
          orquestrando updates mesmo offline (comando aplicado ao reconectar).
        </p>
        <p style={S.p}>
          Versionamento por semver (major/minor/patch); greenfield (fábrica,
          modelo mais recente) vs brownfield (campo, OTA incremental com
          rollback obrigatório). Métricas de saúde de frota: uptime maior que
          99.5%, latência p99 dentro do SLA, erro menor que 0.1%, connectivity
          loss menor que 1%.
        </p>
        <div style={S.highlight}>
          O custo de operação é dominado por banda larga — um sistema de câmera
          que processa localmente e envia apenas metadata reduz 98% os custos de
          egress de dados vs solução cloud-only. A diferença entre processar
          1080p30 na cloud (70 Mbps continuos) vs enviar apenas bounding boxes e
          labels (menos de 10 Kbps) é de 7000x na banda consumida.
        </div>
      </div>
    </div>
  );
}
