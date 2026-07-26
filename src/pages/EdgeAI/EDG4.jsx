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

const m = modules[3];

export default function EDG4() {
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
        <h2 style={S.h2}>1. NPUs — Neural Processing Units</h2>
        <div style={S.diagram}>
          {/* Row 1: CPU vs NPU + TOPS/W */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            {/* CPU */}
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
                CPU (propósito geral)
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.35rem",
                  marginBottom: "0.65rem",
                }}
              >
                {[
                  "Core 0\nbranch pred",
                  "Core 1\nout-of-order",
                  "Core 2\nlarge cache",
                  "Core 3\ncomplex ctrl",
                ].map((c, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(74,158,237,0.25)",
                      border: "1px solid #4a9eed",
                      borderRadius: 5,
                      padding: "0.35rem 0.4rem",
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
                      {c.split("\n")[0]}
                    </div>
                    <div
                      style={{
                        fontSize: "0.6rem",
                        color: "#94a3b8",
                        fontFamily: "monospace",
                      }}
                    >
                      {c.split("\n")[1]}
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#94a3b8",
                  fontFamily: "monospace",
                  marginBottom: "0.15rem",
                }}
              >
                Bom: sequential · Mau: matrix mul
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "#94a3b8",
                  fontFamily: "monospace",
                }}
              >
                1024×1024 INT8:
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#4a9eed",
                  fontFamily: "monospace",
                }}
              >
                50ms | 500mJ
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  color: "#64748b",
                  fontFamily: "monospace",
                  marginTop: "0.35rem",
                }}
              >
                GPU (ref.): 0.5ms | 5mJ — flexível mas ineficiente
              </div>
            </div>

            {/* NPU */}
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
                  marginBottom: "0.5rem",
                }}
              >
                NPU — Systolic Array
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "#64748b",
                  fontFamily: "monospace",
                  marginBottom: "0.5rem",
                }}
              >
                6×6 MAC array (TPU: 256×256)
              </div>
              <svg
                viewBox="0 0 132 132"
                style={{
                  width: "100%",
                  height: "auto",
                  marginBottom: "0.5rem",
                }}
              >
                {Array.from({ length: 6 }).map((_, row) =>
                  Array.from({ length: 6 }).map((_, col) => (
                    <rect
                      key={`${row}-${col}`}
                      x={col * 22}
                      y={row * 18}
                      width="18"
                      height="14"
                      rx="2"
                      fill="rgba(74,158,237,0.2)"
                      stroke="#4a9eed"
                      strokeWidth="0.8"
                    />
                  )),
                )}
                <text
                  x="0"
                  y="118"
                  fill="#0284c7"
                  fontSize="8"
                  fontFamily="monospace"
                >
                  pesos →
                </text>
                <text
                  x="0"
                  y="129"
                  fill="#4a9eed"
                  fontSize="8"
                  fontFamily="monospace"
                >
                  activações ↓
                </text>
              </svg>
              <div
                style={{
                  background: "rgba(74,158,237,0.08)",
                  border: "1px solid #4a9eed",
                  borderRadius: 5,
                  padding: "0.3rem 0.5rem",
                  marginBottom: "0.5rem",
                  fontSize: "0.7rem",
                  color: "#4a9eed",
                  fontFamily: "monospace",
                }}
              >
                On-chip SRAM · varios MB · evita DRAM bw
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "#94a3b8",
                  fontFamily: "monospace",
                }}
              >
                1024×1024 INT8:
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#4a9eed",
                  fontFamily: "monospace",
                }}
              >
                0.1ms | 0.5mJ
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  color: "#94a3b8",
                  fontFamily: "monospace",
                  marginTop: "0.2rem",
                }}
              >
                500× speedup · 1000× eficiência vs CPU
              </div>
            </div>

            {/* TOPS/W */}
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
                  marginBottom: "0.75rem",
                }}
              >
                TOPS/W POR PLATAFORMA
              </div>
              {[
                { label: "CPU x86", tops: 0.03, pct: 2 },
                { label: "GPU A100", tops: 0.78, pct: 10 },
                { label: "Edge TPU", tops: 2.0, pct: 20 },
                { label: "Hexagon NPU", tops: 15, pct: 55 },
                { label: "Apple ANE", tops: 34, pct: 100 },
              ].map((r) => (
                <div key={r.label} style={{ marginBottom: "0.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.15rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.7rem",
                        color: "#94a3b8",
                        fontFamily: "monospace",
                      }}
                    >
                      {r.label}
                    </span>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        color: "#4a9eed",
                        fontFamily: "monospace",
                        fontWeight: 700,
                      }}
                    >
                      {r.tops} T/W
                    </span>
                  </div>
                  <div
                    style={{
                      background: "rgba(74,158,237,0.12)",
                      borderRadius: 3,
                      height: 8,
                    }}
                  >
                    <div
                      style={{
                        width: `${r.pct}%`,
                        height: "100%",
                        background: "#4a9eed",
                        borderRadius: 3,
                        opacity: r.pct < 15 ? 0.5 : 0.85,
                      }}
                    />
                  </div>
                </div>
              ))}
              <div
                style={{
                  fontSize: "0.68rem",
                  color: "#64748b",
                  fontFamily: "monospace",
                  marginTop: "0.5rem",
                  borderTop: "1px solid var(--card-border)",
                  paddingTop: "0.5rem",
                }}
              >
                Apple ANE · Qualcomm Hexagon · Google Tensor · Samsung NPU ·
                MediaTek APU · Tesla FSD · NVIDIA Drive Orin
              </div>
            </div>
          </div>
        </div>
        <p style={S.p}>
          As NPUs são aceleradores dedicados a multiply-accumulate (MAC) em
          arrays de pesos inteiros. A arquitectura fundamental é o systolic
          array: uma grelha de N x N processadores onde pesos e activações fluem
          ortogonalmente, acumulando produtos parciais sem acesso a memória
          externa por ciclo — o Google TPU usa 256x256 (65536 MACs em paralelo).
        </p>
        <p style={S.p}>
          A largura de banda DRAM, não os FLOPS, é o bottleneck real — por isso
          NPUs têm SRAM on-chip de vários MB. Eficiência energética 10-100x
          superior a GPU: Apple ANE atinge 34 TOPS/W vs A100 com 0.78 TOPS/W.
          Presente em quase todos os SoCs modernos (Apple, Qualcomm, Google,
          Samsung, MediaTek, e chips automóvel).
        </p>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Google Coral — Edge TPU</h2>
        <div style={S.diagram}>
          {/* Row 1: Products grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            {[
              {
                name: "USB Accelerator",
                sub: "Edge TPU chip",
                lines: ["USB-C / USB 3.0", "plug em Pi ou laptop"],
                price: "~60 USD",
              },
              {
                name: "Dev Board",
                sub: "NXP i.MX 8M Mini (Cortex-A53) + Edge TPU",
                lines: [
                  "4GB LPDDR4 | 8GB eMMC",
                  "WiFi/BT | 40-pin GPIO | CSI cam",
                  "Mendel Linux (Debian-based)",
                  "prototipagem IoT / câmera",
                ],
                price: "~150 USD",
              },
              {
                name: "Mini PCIe Module",
                sub: "M.2 / PCIe",
                lines: ["integração em produto", "industrial / embedded"],
                price: "~25 USD",
              },
              {
                name: "Edge TPU Chip",
                sub: "4 TOPS @ 2W · 2 TOPS/W",
                lines: [
                  "8MB SRAM on-chip cache",
                  "TFLite INT8 apenas",
                  "ops não suportados → CPU",
                  "modelo > 8MB → partição",
                  "EdgeTPU Compiler obrigatório",
                ],
                highlight: "EfficientDet-Lite · MobileNet SSD · PoseNet",
              },
            ].map((p, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(74,158,237,0.06)",
                  border: `1px solid ${i === 3 ? "var(--card-border)" : "#4a9eed"}`,
                  borderRadius: 8,
                  padding: "0.75rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#4a9eed",
                    fontFamily: "monospace",
                    marginBottom: "0.25rem",
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    background: "rgba(74,158,237,0.15)",
                    border: "1px solid #4a9eed",
                    borderRadius: 4,
                    padding: "0.2rem 0.4rem",
                    marginBottom: "0.5rem",
                    fontSize: "0.65rem",
                    color: "#4a9eed",
                    fontFamily: "monospace",
                  }}
                >
                  {p.sub}
                </div>
                {p.lines.map((l) => (
                  <div
                    key={l}
                    style={{
                      fontSize: "0.67rem",
                      color: "#94a3b8",
                      fontFamily: "monospace",
                      marginBottom: "0.15rem",
                    }}
                  >
                    {l}
                  </div>
                ))}
                {p.price && (
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "#4a9eed",
                      fontFamily: "monospace",
                      marginTop: "0.4rem",
                      fontWeight: 700,
                    }}
                  >
                    {p.price}
                  </div>
                )}
                {p.highlight && (
                  <div
                    style={{
                      fontSize: "0.67rem",
                      color: "#4a9eed",
                      fontFamily: "monospace",
                      marginTop: "0.4rem",
                    }}
                  >
                    {p.highlight}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Row 2: Performance bars */}
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
              PERFORMANCE MobileNetV2 — inferências/segundo
            </div>
            {[
              { label: "RPi 4 CPU", val: 25, pct: 6 },
              { label: "Pi 4 + Coral USB", val: 100, pct: 25 },
              { label: "Dev Board Edge TPU", val: 400, pct: 100 },
            ].map((r) => (
              <div
                key={r.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.45rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "#94a3b8",
                    fontFamily: "monospace",
                    width: 140,
                  }}
                >
                  {r.label}
                </span>
                <div
                  style={{
                    flex: 1,
                    background: "rgba(74,158,237,0.12)",
                    borderRadius: 3,
                    height: 12,
                  }}
                >
                  <div
                    style={{
                      width: `${r.pct}%`,
                      height: "100%",
                      background: "#4a9eed",
                      borderRadius: 3,
                      opacity: r.pct < 20 ? 0.45 : 0.85,
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "#4a9eed",
                    fontFamily: "monospace",
                    width: 60,
                  }}
                >
                  {r.val} inf/s
                </span>
              </div>
            ))}
            <div
              style={{
                fontSize: "0.7rem",
                color: "#64748b",
                fontFamily: "monospace",
                marginTop: "0.4rem",
              }}
            >
              Latência: RPi 4 CPU = 40ms vs Edge TPU = 5ms (8× speedup, 10×
              menos energia)
            </div>
          </div>
        </div>
        <p style={S.p}>
          O Google Coral é uma família de produtos baseados no Edge TPU — 4 TOPS
          a 2W, 8MB SRAM on-chip. Optimizado para modelos TFLite INT8 compilados
          com o EdgeTPU Compiler, que particiona operações entre Edge TPU e CPU
          host. Regra fundamental: o modelo deve caber nos 8MB de SRAM para
          performance máxima — senão é particionado, com penalidade de latência
          da DRAM.
        </p>
        <p style={S.p}>
          MobileNetV2: 40ms no CPU Raspberry Pi 4 vs 5ms no Edge TPU — 8x mais
          rápido, 10x menos energia. O Coral Dev Board (NXP i.MX 8M Mini + Edge
          TPU, 4GB RAM) é a solução completa para prototipagem IoT/câmera.
        </p>
        <div style={S.note}>
          Para máxima performance, compilar o modelo com o EdgeTPU Compiler e
          garantir que todas as operações são suportadas (CONV_2D,
          DEPTHWISE_CONV, FULLY_CONNECTED, BatchNorm fundido). Operações não
          suportadas criam "partições" que correm na CPU com penalidade.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>
          3. NVIDIA Jetson — Edge AI para Aplicações Exigentes
        </h2>
        <div style={S.diagram}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "1rem",
            }}
          >
            {/* Products */}
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
                  marginBottom: "0.75rem",
                }}
              >
                POSICIONAMENTO — TOPS vs POTÊNCIA
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {[
                  {
                    label: "Orin Nano",
                    tops: 40,
                    w: "5-10W",
                    price: "99 USD",
                    pct: 15,
                  },
                  {
                    label: "Orin NX",
                    tops: 100,
                    w: "10-25W",
                    price: "299 USD",
                    pct: 36,
                  },
                  {
                    label: "AGX Orin",
                    tops: 275,
                    w: "15-60W",
                    price: "899 USD",
                    pct: 100,
                  },
                ].map((p) => (
                  <div key={p.label}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.2rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.73rem",
                          fontWeight: 700,
                          color: "#4a9eed",
                          fontFamily: "monospace",
                        }}
                      >
                        {p.label}
                      </span>
                      <span
                        style={{
                          fontSize: "0.68rem",
                          color: "#4a9eed",
                          fontFamily: "monospace",
                        }}
                      >
                        {p.price}
                      </span>
                    </div>
                    <div
                      style={{
                        background: "rgba(74,158,237,0.12)",
                        borderRadius: 3,
                        height: 10,
                        marginBottom: "0.15rem",
                      }}
                    >
                      <div
                        style={{
                          width: `${p.pct}%`,
                          height: "100%",
                          background: "#4a9eed",
                          borderRadius: 3,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: "0.67rem",
                        color: "#94a3b8",
                        fontFamily: "monospace",
                      }}
                    >
                      {p.tops} TOPS · {p.w}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* JetPack SDK Stack */}
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
                  marginBottom: "0.75rem",
                }}
              >
                JETPACK SDK STACK
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                {[
                  { label: "DeepStream", note: "20 streams 1080p30" },
                  { label: "TensorRT", note: "2-5x speedup vs PyTorch" },
                  { label: "cuDNN", note: "optimized kernels" },
                  { label: "CUDA", note: "GPU compute" },
                  { label: "L4T Linux", note: "Ubuntu-based OS", dim: true },
                ].map((l) => (
                  <div
                    key={l.label}
                    style={{
                      background: `rgba(74,158,237,${l.dim ? "0.04" : "0.10"})`,
                      border: `1px solid ${l.dim ? "var(--card-border)" : "#4a9eed"}`,
                      borderRadius: 5,
                      padding: "0.35rem 0.6rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: l.dim ? "#64748b" : "#4a9eed",
                        fontFamily: "monospace",
                      }}
                    >
                      {l.label}
                    </span>
                    <span
                      style={{
                        fontSize: "0.65rem",
                        color: "#94a3b8",
                        fontFamily: "monospace",
                      }}
                    >
                      {l.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* AGX Orin blocks */}
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
                  marginBottom: "0.75rem",
                }}
              >
                JETSON AGX ORIN — BLOCOS
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.35rem",
                }}
              >
                {[
                  { label: "CPU: 12x Cortex-A78AE" },
                  { label: "GPU: Ampere 2048 CUDA + 64 Tensor Cores" },
                  { label: "DLA #1 — 64 TOPS" },
                  { label: "DLA #2 — 64 TOPS" },
                  { label: "Video Codec 8K30 encode/decode" },
                  {
                    label: "ISP — multiplas cameras | 275 TOPS total",
                    dim: true,
                  },
                ].map((b, i) => (
                  <div
                    key={i}
                    style={{
                      background: `rgba(74,158,237,${b.dim ? "0.04" : "0.12"})`,
                      border: `1px solid ${b.dim ? "var(--card-border)" : "#4a9eed"}`,
                      borderRadius: 4,
                      padding: "0.25rem 0.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.7rem",
                        color: b.dim ? "#64748b" : "#4a9eed",
                        fontFamily: "monospace",
                      }}
                    >
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p style={S.p}>
          A família Jetson é a plataforma de referência para Edge AI de alta
          performance — veículos autónomos, robótica, câmeras inteligentes. O
          AGX Orin é o topo: CPU 12-core, GPU Ampere 2048 CUDA cores, dois DLA
          de 64 TOPS cada, codec 8K — 275 TOPS a 15-60W.
        </p>
        <p style={S.p}>
          O TensorRT constrói um engine optimizado (fusão de layers, calibração
          INT8) com 2-5x speedup sobre PyTorch/TF base. O DeepStream SDK
          processa múltiplos streams de vídeo com inferência TensorRT — um AGX
          Orin suporta 20 streams 1080p30. O Orin Nano é o entry-level (40 TOPS,
          5-10W, 99 USD).
        </p>
        <div style={S.highlight}>
          O NVIDIA Isaac ROS integra ROS 2 com aceleração Jetson — SLAM,
          perception e manipulação com modelos Foundation a correr localmente.
          Para pipelines de visão computacional com múltiplas câmeras e detecção
          de objectos em tempo real, o Jetson AGX Orin é a escolha padrão da
          indústria.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Apple Neural Engine e Silicon Mobile</h2>
        <div style={S.diagram}>
          <svg viewBox="0 0 780 280" width="100%" style={{ display: "block" }}>
            <rect width="780" height="280" fill="var(--bg-secondary)" rx="8" />
            <text
              x="390"
              y="22"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="11"
              fontFamily="monospace"
            >
              Apple A17 Pro — Die Layout e Core ML Pipeline
            </text>

            {/* Die photo style */}
            <rect
              x="20"
              y="36"
              width="280"
              height="220"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text
              x="160"
              y="56"
              textAnchor="middle"
              fill="#4a9eed"
              fontSize="10"
              fontFamily="monospace"
              fontWeight="700"
            >
              Apple A17 Pro SoC
            </text>

            {[
              {
                x: 30,
                y: 64,
                w: 120,
                h: 50,
                label: "6-core CPU",
                sub: "2P + 4E cores",
                col: "#4a9eed",
              },
              {
                x: 160,
                y: 64,
                w: 130,
                h: 50,
                label: "6-core GPU",
                sub: "Metal / Core ML GPU",
                col: "#4a9eed",
              },
              {
                x: 30,
                y: 124,
                w: 260,
                h: 60,
                label: "16-core Neural Engine — 35 TOPS",
                sub: "matrix multiply | activation | pooling per core",
                col: "#4a9eed",
              },
              {
                x: 30,
                y: 194,
                w: 120,
                h: 40,
                label: "ISP",
                sub: "image signal",
                col: "#64748b",
              },
              {
                x: 160,
                y: 194,
                w: 130,
                h: 40,
                label: "Memory Controller",
                sub: "LPDDR5 unified",
                col: "#64748b",
              },
            ].map((b) => (
              <g key={b.label}>
                <rect
                  x={b.x}
                  y={b.y}
                  width={b.w}
                  height={b.h}
                  rx="4"
                  fill={`${b.col}15`}
                  stroke={b.col}
                  strokeWidth="1"
                />
                <text
                  x={b.x + b.w / 2}
                  y={b.y + b.h / 2 - 5}
                  textAnchor="middle"
                  fill={b.col}
                  fontSize="9"
                  fontFamily="monospace"
                  fontWeight="700"
                >
                  {b.label}
                </text>
                <text
                  x={b.x + b.w / 2}
                  y={b.y + b.h / 2 + 8}
                  textAnchor="middle"
                  fill="#64748b"
                  fontSize="7.5"
                  fontFamily="monospace"
                >
                  {b.sub}
                </text>
              </g>
            ))}

            {/* Core ML pipeline */}
            <rect
              x="320"
              y="36"
              width="260"
              height="230"
              rx="6"
              fill="rgba(74,158,237,0.06)"
              stroke="var(--card-border)"
              strokeWidth="1"
            />
            <text
              x="450"
              y="54"
              textAnchor="middle"
              fill="#0284c7"
              fontSize="9.5"
              fontFamily="monospace"
              fontWeight="700"
            >
              Core ML Pipeline
            </text>

            {[
              { y: 68, label: "Core ML Model (.mlpackage)", col: "#4a9eed" },
              { y: 106, label: "Core ML Compiler", col: "#94a3b8" },
              { y: 144, label: "Auto: ANE / GPU / CPU", col: "#4a9eed" },
              { y: 182, label: "Fused kernel execution", col: "#4a9eed" },
            ].map((step, i) => (
              <g key={step.y}>
                <rect
                  x="330"
                  y={step.y}
                  width="240"
                  height="28"
                  rx="4"
                  fill={`${step.col}15`}
                  stroke={step.col}
                  strokeWidth="0.8"
                />
                <text
                  x="450"
                  y={step.y + 18}
                  textAnchor="middle"
                  fill={step.col}
                  fontSize="8.5"
                  fontFamily="monospace"
                  fontWeight="700"
                >
                  {step.label}
                </text>
                {i < 3 && (
                  <text
                    x="450"
                    y={step.y + 36}
                    textAnchor="middle"
                    fill="#64748b"
                    fontSize="12"
                  >
                    ↓
                  </text>
                )}
              </g>
            ))}
            <text
              x="330"
              y="228"
              fill="#64748b"
              fontSize="8"
              fontFamily="monospace"
            >
              {" "}
              Developer não escolhe o executor
            </text>
            <text
              x="330"
              y="242"
              fill="#64748b"
              fontSize="8"
              fontFamily="monospace"
            >
              {" "}
              Runtime decide por op baseado em
            </text>
            <text
              x="330"
              y="254"
              fill="#64748b"
              fontSize="8"
              fontFamily="monospace"
            >
              {" "}
              suporte + temp + bateria + prioridade
            </text>

            {/* Competitors */}
            <rect
              x="600"
              y="36"
              width="165"
              height="230"
              rx="6"
              fill="rgba(74,158,237,0.06)"
              stroke="var(--card-border)"
              strokeWidth="1"
            />
            <text
              x="682"
              y="54"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="700"
            >
              Mobile NPU Landscape
            </text>
            {[
              {
                name: "A17 Pro ANE",
                tops: "35 TOPS",
                power: "~1W",
                col: "#4a9eed",
              },
              {
                name: "Snapdragon 8 Gen3",
                tops: "75 TOPS",
                power: "~3W",
                col: "#4a9eed",
              },
              {
                name: "Dimensity 9300",
                tops: "40 TOPS",
                power: "~2W",
                col: "#4a9eed",
              },
              {
                name: "Google Tensor G3",
                tops: "15 TOPS",
                power: "~1.5W",
                col: "#4a9eed",
              },
            ].map((item, i) => (
              <g key={item.name}>
                <rect
                  x="610"
                  y={68 + i * 46}
                  width="145"
                  height="36"
                  rx="4"
                  fill={`${item.col}10`}
                  stroke={`${item.col}40`}
                  strokeWidth="1"
                />
                <text
                  x="682"
                  y={84 + i * 46}
                  textAnchor="middle"
                  fill={item.col}
                  fontSize="8.5"
                  fontFamily="monospace"
                  fontWeight="700"
                >
                  {item.name}
                </text>
                <text
                  x="682"
                  y={98 + i * 46}
                  textAnchor="middle"
                  fill="#64748b"
                  fontSize="8"
                  fontFamily="monospace"
                >
                  {item.tops} | {item.power}
                </text>
              </g>
            ))}
            <text
              x="610"
              y="257"
              fill="#64748b"
              fontSize="7.5"
              fontFamily="monospace"
            >
              Android: NNAPI / QNN / Core ML
            </text>
          </svg>
        </div>
        <p style={S.p}>
          O Apple Neural Engine é o acelerador mais optimizado para eficiência
          energética em consumo — integrado desde o A11 Bionic. O ANE do A17 Pro
          atinge 35 TOPS a 1-2W (17-35 TOPS/W). O Core ML abstrai o hardware
          automaticamente: o compilador selecciona ANE, GPU ou CPU por operação
          — o developer não escolhe.
        </p>
        <p style={S.p}>
          O Core ML Tools converte de PyTorch, TensorFlow e ONNX, com
          quantização FP16/INT8 e palletization. Apple Intelligence (iOS 18)
          processa localmente no ANE, sem dados a sair do dispositivo. O
          Qualcomm Hexagon NPU (até 75 TOPS) é o principal competidor em
          Android.
        </p>
      </div>

      <hr style={S.divider} />

      {/* SECTION 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Comparação de Plataformas e Selecção</h2>
        <div style={S.diagram}>
          <svg viewBox="0 0 790 310" width="100%" style={{ display: "block" }}>
            <rect width="780" height="310" fill="var(--bg-secondary)" rx="8" />
            <text
              x="390"
              y="22"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="11"
              fontFamily="monospace"
            >
              Decision Tree — Selecção de Plataforma Edge AI
            </text>

            {/* Decision tree */}
            {/* Root */}
            <rect
              x="295"
              y="36"
              width="190"
              height="28"
              rx="5"
              fill="#4a9eed20"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text
              x="390"
              y="54"
              textAnchor="middle"
              fill="#4a9eed"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="700"
            >
              Latência abaixo de 10ms?
            </text>

            {/* Yes branch → MCU */}
            <line
              x1="320"
              y1="64"
              x2="160"
              y2="104"
              stroke="#4a9eed"
              strokeWidth="1.2"
            />
            <text
              x="190"
              y="90"
              fill="#4a9eed"
              fontSize="8"
              fontFamily="monospace"
            >
              Sim
            </text>
            <rect
              x="80"
              y="104"
              width="160"
              height="24"
              rx="4"
              fill="#4a9eed20"
              stroke="#4a9eed"
              strokeWidth="1"
            />
            <text
              x="160"
              y="120"
              textAnchor="middle"
              fill="#4a9eed"
              fontSize="8.5"
              fontFamily="monospace"
              fontWeight="700"
            >
              MCU — STM32 / nRF5340
            </text>

            {/* No branch → Power */}
            <line
              x1="460"
              y1="64"
              x2="600"
              y2="104"
              stroke="#4a9eed"
              strokeWidth="1.2"
            />
            <text
              x="570"
              y="90"
              fill="#4a9eed"
              fontSize="8"
              fontFamily="monospace"
            >
              Não
            </text>
            <rect
              x="510"
              y="104"
              width="180"
              height="24"
              rx="4"
              fill="rgba(74,158,237,0.06)"
              stroke="#4a9eed"
              strokeWidth="1"
            />
            <text
              x="600"
              y="120"
              textAnchor="middle"
              fill="#4a9eed"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="700"
            >
              Potência abaixo de 1W?
            </text>

            <line
              x1="540"
              y1="128"
              x2="440"
              y2="164"
              stroke="#4a9eed"
              strokeWidth="1.2"
            />
            <text
              x="447"
              y="152"
              fill="#4a9eed"
              fontSize="8"
              fontFamily="monospace"
            >
              Sim
            </text>
            <rect
              x="340"
              y="164"
              width="200"
              height="24"
              rx="4"
              fill="#4a9eed20"
              stroke="#4a9eed"
              strokeWidth="1"
            />
            <text
              x="440"
              y="180"
              textAnchor="middle"
              fill="#4a9eed"
              fontSize="8.5"
              fontFamily="monospace"
              fontWeight="700"
            >
              MCU ou Coral Edge TPU
            </text>

            <line
              x1="660"
              y1="128"
              x2="700"
              y2="164"
              stroke="#4a9eed"
              strokeWidth="1.2"
            />
            <text
              x="700"
              y="152"
              fill="#4a9eed"
              fontSize="8"
              fontFamily="monospace"
            >
              Não
            </text>
            <rect
              x="620"
              y="164"
              width="140"
              height="24"
              rx="4"
              fill="rgba(74,158,237,0.06)"
              stroke="#4a9eed"
              strokeWidth="1"
            />
            <text
              x="690"
              y="180"
              textAnchor="middle"
              fill="#4a9eed"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="700"
            >
              Vision 30fps+?
            </text>

            <line
              x1="650"
              y1="188"
              x2="580"
              y2="224"
              stroke="#4a9eed"
              strokeWidth="1.2"
            />
            <text
              x="575"
              y="212"
              fill="#4a9eed"
              fontSize="8"
              fontFamily="monospace"
            >
              Sim
            </text>
            <rect
              x="490"
              y="224"
              width="160"
              height="24"
              rx="4"
              fill="#4a9eed20"
              stroke="#4a9eed"
              strokeWidth="1"
            />
            <text
              x="570"
              y="240"
              textAnchor="middle"
              fill="#4a9eed"
              fontSize="8.5"
              fontFamily="monospace"
              fontWeight="700"
            >
              Jetson Nano / AGX Orin
            </text>

            <line
              x1="730"
              y1="188"
              x2="730"
              y2="224"
              stroke="#4a9eed"
              strokeWidth="1.2"
            />
            <text
              x="735"
              y="212"
              fill="#4a9eed"
              fontSize="8"
              fontFamily="monospace"
            >
              Não
            </text>
            <rect
              x="660"
              y="224"
              width="120"
              height="24"
              rx="4"
              fill="#0284c720"
              stroke="#0284c7"
              strokeWidth="1"
            />
            <text
              x="720"
              y="240"
              textAnchor="middle"
              fill="#0284c7"
              fontSize="8.5"
              fontFamily="monospace"
              fontWeight="700"
            >
              Apple / Android NPU
            </text>

            {/* Summary matrix header */}
            <text
              x="20"
              y="264"
              fill="#94a3b8"
              fontSize="9"
              fontFamily="monospace"
            >
              RESUMO — Custo unitário produção:
            </text>
            {[
              ["STM32", "2-10 EUR"],
              ["RPi CM4", "35 EUR"],
              ["Coral SOM", "75 EUR"],
              ["Jetson Orin Nano", "150 EUR"],
            ].map(([name, price], i) => (
              <g key={name}>
                <text
                  x={20 + i * 180}
                  y="280"
                  fill="#4a9eed"
                  fontSize="8.5"
                  fontFamily="monospace"
                  fontWeight="700"
                >
                  {name}
                </text>
                <text
                  x={20 + i * 180}
                  y="293"
                  fill="#64748b"
                  fontSize="8"
                  fontFamily="monospace"
                >
                  {price}
                </text>
              </g>
            ))}
            <text
              x="740"
              y="280"
              textAnchor="end"
              fill="#64748b"
              fontSize="8"
              fontFamily="monospace"
            >
              MLPerf Edge v3.0
            </text>
            <text
              x="740"
              y="293"
              textAnchor="end"
              fill="#64748b"
              fontSize="8"
              fontFamily="monospace"
            >
              = benchmark referência
            </text>
          </svg>
        </div>
        <p style={S.p}>
          A selecção de plataforma é a decisão mais crítica de um projecto Edge
          AI — determina orçamento de modelo, consumo, custo e time-to-market.
          Decisão por requisitos: latência (MCU menos de 10ms; Jetson 10-100ms),
          potência (MCU menos de 1W; AGX 15-60W), throughput de vídeo, e custo
          unitário em produção.
        </p>
        <p style={S.p}>
          O Raspberry Pi 5 com Coral USB é a plataforma mais versátil para
          prototipagem. Em produção industrial de baixo volume, o Jetson AGX
          Orin com certificação -40°C a 85°C; em volumes altos, o custom SoC com
          NPU integrada é economicamente superior.
        </p>
        <div style={S.note}>
          O MLCommons MLPerf Edge v3.0 é a referência de benchmark para
          comparação objectiva — não confiar em TOPS do fabricante (metodologias
          inconsistentes). Usar sempre o benchmark na tarefa mais próxima do
          caso de uso real.
        </div>
      </div>
    </div>
  );
}
