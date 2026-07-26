import React from "react";
import { Link } from "react-router-dom";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { modules } from "./EdgeAI";

const color = "#4a9eed";
const m = modules[5];

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

function MobileNetSVG() {
  const toMath = (line) =>
    line
      .replace(/C_in/g, "C_{in}")
      .replace(/C_out/g, "C_{out}")
      .replace(/×/g, " \\times ")
      .replace(/→/g, " \\to ");

  const card = (label, sub, color) => (
    <div
      style={{
        background: "rgba(74,158,237,0.08)",
        border: `1.5px solid ${color}`,
        borderRadius: 7,
        padding: "0.45rem 0.55rem",
        textAlign: "center",
        minWidth: 0,
      }}
    >
      <div
        style={{
          fontSize: "0.7rem",
          fontWeight: 700,
          color,
          lineHeight: 1.4,
        }}
      >
        {label.split("\n").map((line, i) =>
          /[×_→]/.test(line) ? (
            <div key={i}>
              <InlineMath math={toMath(line)} />
            </div>
          ) : (
            <div key={i}>{line}</div>
          )
        )}
      </div>
      {sub && (
        <div
          style={{
            fontSize: "0.62rem",
            color: "#64748b",
            fontFamily: "monospace",
            marginTop: "0.15rem",
          }}
        >
          {sub}
        </div>
      )}
    </div>
  );
  const arrow = (
    <div
      style={{
        color: "#4a9eed",
        fontSize: "1rem",
        flexShrink: 0,
        alignSelf: "center",
      }}
    >
      ›
    </div>
  );
  return (
    <div>
      {/* Row 1: Standard vs Depthwise side by side */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginBottom: "0.75rem",
        }}
      >
        {/* Standard Conv */}
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
            CONVOLUCAO STANDARD
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.35rem",
              marginBottom: "0.55rem",
            }}
          >
            {card("C_in\n×H×W", "Input", "#4a9eed")}
            {arrow}
            {card("3×3×C_in\n×C_out", "filtros", "#0284c7")}
            {arrow}
            {card("C_out\n×H×W", "Output", "#7dd3fc")}
          </div>
          <div style={{ fontSize: "0.75rem", color: "#4a9eed" }}>
            <InlineMath math="\text{MACs: } H \times W \times K^2 \times C_{in} \times C_{out}" />
          </div>
        </div>
        {/* Depthwise Separable */}
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
            DEPTHWISE SEPARABLE
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.25rem",
              marginBottom: "0.55rem",
            }}
          >
            {card("C_in\n×H×W", "Input", "#4a9eed")}
            {arrow}
            {card("Depthwise\n3×3×1\n×C_in", null, "#0284c7")}
            {arrow}
            {card("Pointwise\n1×1×C_in\n×C_out", null, "#38bdf8")}
            {arrow}
            {card("C_out\n×H×W", "Output", "#7dd3fc")}
          </div>
          <div style={{ fontSize: "0.75rem", color: "#4a9eed" }}>
            <InlineMath math="\text{MACs: } H \times W \times K^2 \times C_{in} + H \times W \times C_{in} \times C_{out} \approx 8\text{–}9\times \text{ menos}" />
          </div>
        </div>
      </div>

      {/* Row 2: MobileNetV2 Inverted Residual */}
      <div
        style={{
          background: "rgba(74,158,237,0.04)",
          border: "1px dashed #0284c7",
          borderRadius: 8,
          padding: "0.75rem",
          marginBottom: "0.75rem",
        }}
      >
        <div
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            color: "#0284c7",
            fontFamily: "monospace",
            marginBottom: "0.5rem",
            textAlign: "center",
          }}
        >
          MobileNetV2 — Inverted Residual Block
        </div>
        <div
          style={{
            fontSize: "0.65rem",
            color: "#4a9eed",
            fontFamily: "monospace",
            textAlign: "center",
            marginBottom: "0.4rem",
          }}
        >
          residual (dimensao baixa)
          ···················································
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.3rem" }}>
          {card("Input\nd dims", null, "#4a9eed")}
          {arrow}
          {card("Expand 1×1\nd → 6d", "ReLU6", "#0284c7")}
          {arrow}
          {card("Depthwise\n3×3, 6d", "ReLU6", "#38bdf8")}
          {arrow}
          {card("Project 1×1\n6d → d", "Linear", "#0284c7")}
          {arrow}
          {card("Output\nd dims", null, "#7dd3fc")}
          <div
            style={{
              color: "#4a9eed",
              fontSize: "1.2rem",
              flexShrink: 0,
              alignSelf: "center",
            }}
          >
            ⊕
          </div>
          {card("+ Input\n(skip)", null, "#7dd3fc")}
        </div>
      </div>

      {/* Row 3: Comparison table */}
      <div
        style={{
          background: "rgba(74,158,237,0.04)",
          border: "1px solid var(--card-border)",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            color: "#0284c7",
            fontFamily: "monospace",
            padding: "0.55rem 0.85rem",
            borderBottom: "1px solid var(--card-border)",
          }}
        >
          Comparacao de Arquitecturas
        </div>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.72rem",
            fontFamily: "monospace",
          }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid var(--card-border)" }}>
              {["Modelo", "Parametros", "MACs", "Top-1 ImageNet"].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: "0.4rem 0.75rem",
                    color: "#94a3b8",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["MobileNetV1", "4.2M", "569M", "70.6%", "#0284c7", "#4a9eed"],
              ["MobileNetV3", "5.4M", "219M", "75.2%", "#0284c7", "#4a9eed"],
              ["ResNet-50", "25M", "4100M", "76.1%", "#94a3b8", "#94a3b8"],
            ].map(([model, params, macs, acc, mc, ac]) => (
              <tr
                key={model}
                style={{ borderBottom: "1px solid var(--card-border)" }}
              >
                <td
                  style={{
                    padding: "0.4rem 0.75rem",
                    color: mc,
                    textAlign: "center",
                  }}
                >
                  {model}
                </td>
                <td
                  style={{
                    padding: "0.4rem 0.75rem",
                    color: "#e2e8f0",
                    textAlign: "center",
                  }}
                >
                  {params}
                </td>
                <td
                  style={{
                    padding: "0.4rem 0.75rem",
                    color: "#e2e8f0",
                    textAlign: "center",
                  }}
                >
                  {macs}
                </td>
                <td
                  style={{
                    padding: "0.4rem 0.75rem",
                    color: ac,
                    textAlign: "center",
                    fontWeight: 700,
                  }}
                >
                  {acc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EfficientNetSVG() {
  return (
    <div>
      {/* Row 1: Scaling Individual + Compound + B0-B7 chart */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto 1fr",
          gap: "1rem",
          marginBottom: "0.75rem",
          alignItems: "start",
        }}
      >
        {/* Scaling Individual */}
        <div
          style={{
            background: "rgba(74,158,237,0.04)",
            border: "1px solid var(--card-border)",
            borderRadius: 8,
            padding: "0.75rem",
            minWidth: 160,
          }}
        >
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "#94a3b8",
              fontFamily: "monospace",
              marginBottom: "0.6rem",
              textAlign: "center",
            }}
          >
            SCALING INDIVIDUAL
          </div>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              justifyContent: "center",
              alignItems: "flex-end",
              height: 90,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                alignItems: "center",
              }}
            >
              {[1, 1, 1].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 22,
                    height: i === 2 ? 28 : 18,
                    background:
                      i === 2
                        ? "rgba(74,158,237,0.45)"
                        : "rgba(74,158,237,0.12)",
                    border: "1.5px solid #4a9eed",
                    borderRadius: 3,
                  }}
                />
              ))}
              <div
                style={{
                  fontSize: "0.63rem",
                  color: "#4a9eed",
                  fontFamily: "monospace",
                  marginTop: 4,
                }}
              >
                Depth
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 28,
                  background: "rgba(74,158,237,0.45)",
                  border: "1.5px solid #38bdf8",
                  borderRadius: 3,
                }}
              />
              <div
                style={{
                  width: 44,
                  height: 18,
                  background: "rgba(74,158,237,0.12)",
                  border: "1.5px solid #38bdf8",
                  borderRadius: 3,
                }}
              />
              <div
                style={{
                  width: 44,
                  height: 8,
                  background: "rgba(74,158,237,0.12)",
                  border: "1.5px solid #38bdf8",
                  borderRadius: 3,
                }}
              />
              <div
                style={{
                  fontSize: "0.63rem",
                  color: "#38bdf8",
                  fontFamily: "monospace",
                  marginTop: 4,
                }}
              >
                Width
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "rgba(74,158,237,0.45)",
                  border: "1.5px solid #7dd3fc",
                  borderRadius: 3,
                }}
              />
              <div
                style={{
                  width: 24,
                  height: 16,
                  background: "rgba(74,158,237,0.12)",
                  border: "1.5px solid #7dd3fc",
                  borderRadius: 3,
                }}
              />
              <div
                style={{
                  fontSize: "0.63rem",
                  color: "#7dd3fc",
                  fontFamily: "monospace",
                  marginTop: 4,
                }}
              >
                Resolution
              </div>
            </div>
          </div>
        </div>
        {/* Compound scaling */}
        <div
          style={{
            background: "rgba(74,158,237,0.04)",
            border: "1px solid var(--card-border)",
            borderRadius: 8,
            padding: "0.75rem",
            minWidth: 140,
          }}
        >
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "#0284c7",
              fontFamily: "monospace",
              marginBottom: "0.6rem",
              textAlign: "center",
            }}
          >
            COMPOUND (phi)
          </div>
          <div
            style={{
              display: "flex",
              gap: "0.4rem",
              justifyContent: "center",
              alignItems: "flex-end",
              height: 90,
            }}
          >
            {[
              { label: "depth", h: 36, w: 20, c: "#4a9eed" },
              { label: "width", h: 36, w: 36, c: "#38bdf8" },
              { label: "res", h: 36, w: 28, c: "#7dd3fc" },
            ].map((d) => (
              <div
                key={d.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <div
                  style={{
                    width: d.w,
                    height: d.h,
                    background: "rgba(74,158,237,0.40)",
                    border: `1.5px solid ${d.c}`,
                    borderRadius: 3,
                  }}
                />
                <div
                  style={{
                    fontSize: "0.58rem",
                    color: d.c,
                    fontFamily: "monospace",
                  }}
                >
                  {d.label}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: "0.65rem",
              color: "#0284c7",
              fontFamily: "monospace",
              textAlign: "center",
              marginTop: "0.5rem",
            }}
          >
            todos em proporcao
          </div>
        </div>
        {/* B0-B7 chart */}
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
              marginBottom: "0.5rem",
            }}
          >
            B0 to B7: Accuracy vs MACs
          </div>
          <svg viewBox="0 0 220 100" style={{ width: "100%", height: "auto" }}>
            <line
              x1="20"
              y1="90"
              x2="215"
              y2="90"
              stroke="var(--card-border)"
              strokeWidth="1"
            />
            <line
              x1="20"
              y1="10"
              x2="20"
              y2="90"
              stroke="var(--card-border)"
              strokeWidth="1"
            />
            <text x="15" y="14" textAnchor="end" fill="#94a3b8" fontSize="7">
              84%
            </text>
            <text x="15" y="50" textAnchor="end" fill="#94a3b8" fontSize="7">
              80%
            </text>
            <text x="15" y="90" textAnchor="end" fill="#94a3b8" fontSize="7">
              77%
            </text>
            <text x="20" y="99" fill="#64748b" fontSize="6">
              400M
            </text>
            <text x="185" y="99" fill="#64748b" fontSize="6">
              37B MACs
            </text>
            {[
              [22, 82, "B0"],
              [42, 74, "B1"],
              [62, 65, ""],
              [85, 56, ""],
              [110, 46, ""],
              [138, 34, ""],
              [165, 22, ""],
              [198, 10, "B7"],
            ].map(([x, y, label]) => (
              <g key={x}>
                <circle cx={x} cy={y} r="3" fill="#0284c7" />
                {label && (
                  <text
                    x={x}
                    y={y - 4}
                    textAnchor="middle"
                    fill="#0284c7"
                    fontSize="6"
                  >
                    {label}
                  </text>
                )}
              </g>
            ))}
            <polyline
              points="22,82 42,74 62,65 85,56 110,46 138,34 165,22 198,10"
              fill="none"
              stroke="#0284c7"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
      {/* Row 2: MBConv block */}
      <div
        style={{
          background: "rgba(74,158,237,0.04)",
          border: "1px solid var(--card-border)",
          borderRadius: 8,
          padding: "0.6rem 0.85rem",
        }}
      >
        <div
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            color: "#0284c7",
            fontFamily: "monospace",
            marginBottom: "0.5rem",
          }}
        >
          MBConv Block
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
          {[
            ["expand 1x1", "#4a9eed"],
            ["BN+Swish", "#4a9eed"],
            ["DW 3x3", "#0284c7"],
            ["SE module", "#4a9eed"],
            ["project 1x1", "#4a9eed"],
          ].map(([label, c]) => (
            <div
              key={label}
              style={{
                background: `${c}55`,
                border: `1px solid ${c}`,
                borderRadius: 5,
                padding: "0.25rem 0.5rem",
                fontSize: "0.65rem",
                color: "#fff",
                fontFamily: "monospace",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </div>
          ))}
          <div
            style={{
              color: "#4a9eed",
              fontSize: "0.85rem",
              fontFamily: "monospace",
              marginLeft: "0.2rem",
            }}
          >
            + skip
          </div>
        </div>
      </div>
    </div>
  );
}

function NASSvg() {
  return (
    <svg
      viewBox="0 0 780 420"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <rect width="780" height="420" fill="var(--bg-secondary)" rx="10" />

      <text
        x="390"
        y="26"
        textAnchor="middle"
        fill="#0284c7"
        fontSize="13"
        fontWeight="700"
      >
        Neural Architecture Search para Edge
      </text>

      {/* DARTS */}
      <text
        x="190"
        y="50"
        textAnchor="middle"
        fill="#94a3b8"
        fontSize="11"
        fontWeight="600"
      >
        DARTS — Relaxação Contínua
      </text>

      {/* Input node */}
      <circle
        cx="60"
        cy="180"
        r="18"
        fill="rgba(74,158,237,0.06)"
        stroke="#4a9eed"
        strokeWidth="2"
      />
      <text x="60" y="184" textAnchor="middle" fill="#4a9eed" fontSize="9">
        in
      </text>

      {/* Operations in parallel */}
      <line
        x1="78"
        y1="180"
        x2="120"
        y2="100"
        stroke="var(--card-border)"
        strokeWidth="1"
        strokeDasharray="3,2"
      />
      <line
        x1="78"
        y1="180"
        x2="120"
        y2="140"
        stroke="var(--card-border)"
        strokeWidth="1"
        strokeDasharray="3,2"
      />
      <line
        x1="78"
        y1="180"
        x2="120"
        y2="180"
        stroke="#0284c7"
        strokeWidth="2"
      />
      <line
        x1="78"
        y1="180"
        x2="120"
        y2="220"
        stroke="var(--card-border)"
        strokeWidth="1"
        strokeDasharray="3,2"
      />
      <line
        x1="78"
        y1="180"
        x2="120"
        y2="260"
        stroke="var(--card-border)"
        strokeWidth="1"
        strokeDasharray="3,2"
      />

      <rect
        x="120"
        y="85"
        width="90"
        height="28"
        fill="rgba(74,158,237,0.06)"
        stroke="var(--card-border)"
        strokeWidth="1"
        rx="4"
      />
      <text x="165" y="103" textAnchor="middle" fill="#64748b" fontSize="9">
        3×3 conv (α=0.1)
      </text>

      <rect
        x="120"
        y="123"
        width="90"
        height="28"
        fill="rgba(74,158,237,0.06)"
        stroke="var(--card-border)"
        strokeWidth="1"
        rx="4"
      />
      <text x="165" y="141" textAnchor="middle" fill="#64748b" fontSize="9">
        5×5 conv (α=0.2)
      </text>

      <rect
        x="120"
        y="161"
        width="90"
        height="28"
        fill="rgba(74,158,237,0.06)"
        stroke="#0284c7"
        strokeWidth="1.5"
        rx="4"
      />
      <text x="165" y="179" textAnchor="middle" fill="#0284c7" fontSize="9">
        skip (α=0.6){" "}
      </text>

      <rect
        x="120"
        y="199"
        width="90"
        height="28"
        fill="rgba(74,158,237,0.06)"
        stroke="var(--card-border)"
        strokeWidth="1"
        rx="4"
      />
      <text x="165" y="217" textAnchor="middle" fill="#64748b" fontSize="9">
        max pool (α=0.05)
      </text>

      <rect
        x="120"
        y="237"
        width="90"
        height="28"
        fill="rgba(74,158,237,0.06)"
        stroke="var(--card-border)"
        strokeWidth="1"
        rx="4"
      />
      <text x="165" y="255" textAnchor="middle" fill="#64748b" fontSize="9">
        avg pool (α=0.05)
      </text>

      <line
        x1="210"
        y1="100"
        x2="260"
        y2="180"
        stroke="var(--card-border)"
        strokeWidth="1"
        strokeDasharray="3,2"
      />
      <line
        x1="210"
        y1="140"
        x2="260"
        y2="180"
        stroke="var(--card-border)"
        strokeWidth="1"
        strokeDasharray="3,2"
      />
      <line
        x1="210"
        y1="175"
        x2="260"
        y2="180"
        stroke="#0284c7"
        strokeWidth="2"
      />
      <line
        x1="210"
        y1="215"
        x2="260"
        y2="180"
        stroke="var(--card-border)"
        strokeWidth="1"
        strokeDasharray="3,2"
      />
      <line
        x1="210"
        y1="251"
        x2="260"
        y2="180"
        stroke="var(--card-border)"
        strokeWidth="1"
        strokeDasharray="3,2"
      />

      <circle
        cx="275"
        cy="180"
        r="18"
        fill="rgba(74,158,237,0.06)"
        stroke="#4a9eed"
        strokeWidth="2"
      />
      <text x="275" y="184" textAnchor="middle" fill="#7dd3fc" fontSize="9">
        out
      </text>

      <text x="165" y="295" textAnchor="middle" fill="#94a3b8" fontSize="9">
        gradiente flui por alpha (alpha learnable)
      </text>

      {/* Hardware-aware NAS */}
      <text
        x="530"
        y="50"
        textAnchor="middle"
        fill="#94a3b8"
        fontSize="11"
        fontWeight="600"
      >
        Hardware-Aware NAS
      </text>

      <rect
        x="370"
        y="65"
        width="320"
        height="55"
        fill="rgba(74,158,237,0.06)"
        stroke="#0284c7"
        strokeWidth="1.5"
        rx="6"
      />
      <text
        x="530"
        y="87"
        textAnchor="middle"
        fill="#0284c7"
        fontSize="10"
        fontWeight="600"
      >
        Objectivo Multi-critério
      </text>
      <text x="530" y="107" textAnchor="middle" fill="#e2e8f0" fontSize="10">
        Accuracy × (Latência / Target)^(-w)
      </text>

      <rect
        x="370"
        y="135"
        width="150"
        height="55"
        fill="rgba(74,158,237,0.06)"
        stroke="#4a9eed"
        strokeWidth="1"
        rx="6"
      />
      <text
        x="445"
        y="155"
        textAnchor="middle"
        fill="#4a9eed"
        fontSize="10"
        fontWeight="600"
      >
        MnasNet
      </text>
      <text x="445" y="170" textAnchor="middle" fill="#64748b" fontSize="9">
        busca evolutiva
      </text>
      <text x="445" y="182" textAnchor="middle" fill="#64748b" fontSize="9">
        avaliação real Pixel
      </text>

      <rect
        x="540"
        y="135"
        width="150"
        height="55"
        fill="rgba(74,158,237,0.06)"
        stroke="#4a9eed"
        strokeWidth="1"
        rx="6"
      />
      <text
        x="615"
        y="155"
        textAnchor="middle"
        fill="#38bdf8"
        fontSize="10"
        fontWeight="600"
      >
        DARTS edge
      </text>
      <text x="615" y="170" textAnchor="middle" fill="#64748b" fontSize="9">
        gradient-based
      </text>
      <text x="615" y="182" textAnchor="middle" fill="#64748b" fontSize="9">
        latência proxy
      </text>

      {/* MCUNet */}
      <text
        x="530"
        y="215"
        textAnchor="middle"
        fill="#0284c7"
        fontSize="11"
        fontWeight="600"
      >
        MCUNet — Co-Design Sistema + Arquitectura
      </text>
      <rect
        x="370"
        y="225"
        width="320"
        height="90"
        fill="rgba(74,158,237,0.06)"
        stroke="#4a9eed"
        strokeWidth="1.5"
        rx="6"
      />

      <rect
        x="385"
        y="240"
        width="85"
        height="60"
        fill="var(--bg-secondary)"
        stroke="#4a9eed"
        strokeWidth="1"
        rx="4"
      />
      <text
        x="427"
        y="260"
        textAnchor="middle"
        fill="#7dd3fc"
        fontSize="9"
        fontWeight="600"
      >
        TinyEngine
      </text>
      <text x="427" y="273" textAnchor="middle" fill="#64748b" fontSize="8">
        inferência
      </text>
      <text x="427" y="285" textAnchor="middle" fill="#64748b" fontSize="8">
        256KB SRAM
      </text>

      <text x="485" y="273" textAnchor="middle" fill="#0284c7" fontSize="14">
        ⟷
      </text>

      <rect
        x="498"
        y="240"
        width="85"
        height="60"
        fill="var(--bg-secondary)"
        stroke="#0284c7"
        strokeWidth="1"
        rx="4"
      />
      <text
        x="540"
        y="260"
        textAnchor="middle"
        fill="#0284c7"
        fontSize="9"
        fontWeight="600"
      >
        NAS
      </text>
      <text x="540" y="273" textAnchor="middle" fill="#64748b" fontSize="8">
        arquitectura
      </text>
      <text x="540" y="285" textAnchor="middle" fill="#64748b" fontSize="8">
        optimizada
      </text>

      <text x="600" y="265" fill="#4a9eed" fontSize="9">
        → 70.7%
      </text>
      <text x="600" y="278" fill="#4a9eed" fontSize="9">
        ImageNet
      </text>
      <text x="600" y="291" fill="#4a9eed" fontSize="9">
        Cortex-M7
      </text>

      {/* Once-for-All */}
      <text
        x="530"
        y="340"
        textAnchor="middle"
        fill="#0284c7"
        fontSize="11"
        fontWeight="600"
      >
        Once-for-All Supernet
      </text>
      <rect
        x="370"
        y="350"
        width="320"
        height="55"
        fill="rgba(74,158,237,0.06)"
        stroke="#4a9eed"
        strokeWidth="1.5"
        rx="6"
      />
      <rect
        x="385"
        y="362"
        width="90"
        height="34"
        fill="var(--bg-secondary)"
        stroke="#4a9eed"
        strokeWidth="1"
        rx="3"
      />
      <text x="430" y="378" textAnchor="middle" fill="#38bdf8" fontSize="9">
        Supernet
      </text>
      <text x="430" y="390" textAnchor="middle" fill="#64748b" fontSize="8">
        treino único
      </text>
      <text x="480" y="382" fill="#0284c7" fontSize="11">
        →
      </text>
      <rect
        x="500"
        y="362"
        width="50"
        height="34"
        fill="var(--bg-secondary)"
        stroke="#4a9eed"
        strokeWidth="1"
        rx="3"
      />
      <text x="525" y="378" textAnchor="middle" fill="#4a9eed" fontSize="8">
        Mobile
      </text>
      <text x="525" y="390" textAnchor="middle" fill="#4a9eed" fontSize="8">
        subnet
      </text>
      <text x="555" y="382" fill="#0284c7" fontSize="11">
        →
      </text>
      <rect
        x="570"
        y="362"
        width="50"
        height="34"
        fill="var(--bg-secondary)"
        stroke="#4a9eed"
        strokeWidth="1"
        rx="3"
      />
      <text x="595" y="378" textAnchor="middle" fill="#38bdf8" fontSize="8">
        IoT
      </text>
      <text x="595" y="390" textAnchor="middle" fill="#38bdf8" fontSize="8">
        subnet
      </text>
      <text x="625" y="382" fill="#0284c7" fontSize="11">
        →
      </text>
      <rect
        x="640"
        y="362"
        width="42"
        height="34"
        fill="var(--bg-secondary)"
        stroke="#4a9eed"
        strokeWidth="1"
        rx="3"
      />
      <text x="661" y="378" textAnchor="middle" fill="#7dd3fc" fontSize="8">
        Cloud
      </text>
      <text x="661" y="390" textAnchor="middle" fill="#7dd3fc" fontSize="8">
        net
      </text>
    </svg>
  );
}

function YOLOSvg() {
  return (
    <div>
      {/* Row 1: YOLOv8n pipeline + FOMO */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "1rem",
          marginBottom: "0.75rem",
        }}
      >
        {/* YOLOv8n pipeline */}
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
            YOLOv8n PIPELINE
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
            {[
              {
                label: "Backbone",
                lines: ["CSPDarknet", "C2f blocks", "640x640 feats"],
                c: "#4a9eed",
              },
              {
                label: "Neck",
                lines: ["FPN + PAN", "multi-scale", "feature fusion"],
                c: "#38bdf8",
              },
              {
                label: "Decoupled Head",
                lines: null,
                c: "#0284c7",
                head: true,
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
                    &#8250;
                  </div>
                )}
                {s.head ? (
                  <div
                    style={{
                      background: "rgba(74,158,237,0.08)",
                      border: "1.5px solid #0284c7",
                      borderRadius: 7,
                      padding: "0.4rem 0.5rem",
                      minWidth: 0,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        color: "#0284c7",
                        fontFamily: "monospace",
                        marginBottom: "0.3rem",
                        textAlign: "center",
                      }}
                    >
                      Decoupled Head
                    </div>
                    <div style={{ display: "flex", gap: "0.25rem" }}>
                      <div
                        style={{
                          background: "rgba(74,158,237,0.15)",
                          border: "1px solid #4a9eed",
                          borderRadius: 4,
                          padding: "0.2rem 0.35rem",
                          fontSize: "0.6rem",
                          color: "#7dd3fc",
                          fontFamily: "monospace",
                          textAlign: "center",
                        }}
                      >
                        Class
                        <br />
                        branch
                      </div>
                      <div
                        style={{
                          background: "rgba(74,158,237,0.15)",
                          border: "1px solid #4a9eed",
                          borderRadius: 4,
                          padding: "0.2rem 0.35rem",
                          fontSize: "0.6rem",
                          color: "#38bdf8",
                          fontFamily: "monospace",
                          textAlign: "center",
                        }}
                      >
                        BBox
                        <br />
                        regression
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "0.58rem",
                        color: "#64748b",
                        fontFamily: "monospace",
                        textAlign: "center",
                        marginTop: "0.2rem",
                      }}
                    >
                      separados melhor acc
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      flex: 1,
                      background: "rgba(74,158,237,0.08)",
                      border: `1.5px solid ${s.c}`,
                      borderRadius: 7,
                      padding: "0.4rem 0.5rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        color: s.c,
                        fontFamily: "monospace",
                        textAlign: "center",
                      }}
                    >
                      {s.label}
                    </div>
                    {s.lines &&
                      s.lines.map((l) => (
                        <div
                          key={l}
                          style={{
                            fontSize: "0.6rem",
                            color: "#64748b",
                            fontFamily: "monospace",
                            textAlign: "center",
                          }}
                        >
                          {l}
                        </div>
                      ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* FOMO */}
        <div
          style={{
            background: "rgba(74,158,237,0.04)",
            border: "1px solid var(--card-border)",
            borderRadius: 8,
            padding: "0.75rem",
            minWidth: 200,
          }}
        >
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "#94a3b8",
              fontFamily: "monospace",
              marginBottom: "0.5rem",
            }}
          >
            FOMO — MCU DETECTION
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              marginBottom: "0.5rem",
            }}
          >
            {[
              { label: "96x96 input", sub: "grayscale", c: "#4a9eed" },
              {
                label: "MobileNetV2 0.35x",
                sub: "backbone leve",
                c: "#0284c7",
              },
              {
                label: "1x1 conv grid output",
                sub: "classe/celula",
                c: "#7dd3fc",
              },
            ].map((s, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <div
                    style={{
                      color: "#0284c7",
                      fontSize: "0.85rem",
                      flexShrink: 0,
                    }}
                  >
                    ›
                  </div>
                )}
                <div
                  style={{
                    background: "rgba(74,158,237,0.08)",
                    border: `1.5px solid ${s.c}`,
                    borderRadius: 6,
                    padding: "0.3rem 0.4rem",
                    textAlign: "center",
                  }}
                >
                  {s.label.split("\n").map((l) => (
                    <div
                      key={l}
                      style={{
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        color: s.c,
                        fontFamily: "monospace",
                      }}
                    >
                      {l}
                    </div>
                  ))}
                  <div
                    style={{
                      fontSize: "0.58rem",
                      color: "#64748b",
                      fontFamily: "monospace",
                    }}
                  >
                    {s.sub}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div
            style={{
              fontSize: "0.67rem",
              fontWeight: 700,
              color: "#4a9eed",
              fontFamily: "monospace",
              marginBottom: "0.2rem",
            }}
          >
            Sem anchor boxes, sem NMS
          </div>
          <div
            style={{
              fontSize: "0.63rem",
              color: "#94a3b8",
              fontFamily: "monospace",
            }}
          >
            30x mais rapido que SSD
          </div>
          <div
            style={{
              fontSize: "0.63rem",
              color: "#94a3b8",
              fontFamily: "monospace",
              marginBottom: "0.4rem",
            }}
          >
            30fps Arduino Portenta H7
          </div>
          <div
            style={{
              fontSize: "0.63rem",
              color: "#94a3b8",
              fontFamily: "monospace",
              marginBottom: "0.3rem",
            }}
          >
            Grelha de saida FOMO
          </div>
          <svg viewBox="0 0 144 144" style={{ width: 90, height: 90 }}>
            {[0, 1, 2, 3, 4, 5].map((row) =>
              [0, 1, 2, 3, 4, 5].map((col) => {
                const highlight =
                  (row === 2 && col === 3) || (row === 4 && col === 1);
                return (
                  <rect
                    key={`${row}-${col}`}
                    x={col * 24}
                    y={row * 24}
                    width="22"
                    height="22"
                    fill={highlight ? "rgba(74,158,237,0.6)" : "#1e293b"}
                    stroke={highlight ? "#4a9eed" : "var(--card-border)"}
                    strokeWidth="1"
                    rx="2"
                  />
                );
              }),
            )}
          </svg>
          <div
            style={{
              fontSize: "0.6rem",
              color: "#0284c7",
              fontFamily: "monospace",
              marginTop: "0.2rem",
            }}
          >
            celula laranja = objecto detectado
          </div>
        </div>
      </div>

      {/* Row 2: Performance tables side by side */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        {/* YOLOv8n performance */}
        <div
          style={{
            background: "rgba(74,158,237,0.04)",
            border: "1px solid var(--card-border)",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "#0284c7",
              fontFamily: "monospace",
              padding: "0.5rem 0.75rem",
              borderBottom: "1px solid var(--card-border)",
            }}
          >
            YOLOv8n — Performance por Plataforma
          </div>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.7rem",
              fontFamily: "monospace",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid var(--card-border)" }}>
                {["Plataforma", "Latencia", "mAP50 COCO"].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "0.35rem 0.6rem",
                      color: "#94a3b8",
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Raspberry Pi 5", "7.5ms (133fps)", "37.3%"],
                ["Jetson Orin Nano", "2.1ms (476fps)", "37.3%"],
                ["Jetson AGX Orin", "0.8ms (1250fps)", "37.3%"],
              ].map(([p, l, m]) => (
                <tr
                  key={p}
                  style={{ borderBottom: "1px solid var(--card-border)" }}
                >
                  <td
                    style={{
                      padding: "0.35rem 0.6rem",
                      color: "#e2e8f0",
                      textAlign: "center",
                    }}
                  >
                    {p}
                  </td>
                  <td
                    style={{
                      padding: "0.35rem 0.6rem",
                      color: "#4a9eed",
                      textAlign: "center",
                    }}
                  >
                    {l}
                  </td>
                  <td
                    style={{
                      padding: "0.35rem 0.6rem",
                      color: "#0284c7",
                      textAlign: "center",
                      fontWeight: 700,
                    }}
                  >
                    {m}
                  </td>
                </tr>
              ))}
              <tr>
                <td
                  colSpan={3}
                  style={{
                    padding: "0.3rem 0.6rem",
                    color: "#64748b",
                    fontSize: "0.62rem",
                    textAlign: "center",
                  }}
                >
                  3.2M params, 8.7B FLOPs
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* YOLO-NAS comparison */}
        <div
          style={{
            background: "rgba(74,158,237,0.04)",
            border: "1px solid var(--card-border)",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "#0284c7",
              fontFamily: "monospace",
              padding: "0.5rem 0.75rem",
              borderBottom: "1px solid var(--card-border)",
            }}
          >
            YOLO-NAS vs YOLOv8 (Jetson Nano)
          </div>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.7rem",
              fontFamily: "monospace",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid var(--card-border)" }}>
                {["Modelo", "Params", "mAP50", "Latencia"].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "0.35rem 0.6rem",
                      color: "#94a3b8",
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid var(--card-border)" }}>
                <td
                  style={{
                    padding: "0.35rem 0.6rem",
                    color: "#0284c7",
                    textAlign: "center",
                  }}
                >
                  YOLO-NAS-S
                </td>
                <td
                  style={{
                    padding: "0.35rem 0.6rem",
                    color: "#e2e8f0",
                    textAlign: "center",
                  }}
                >
                  12.9M
                </td>
                <td
                  style={{
                    padding: "0.35rem 0.6rem",
                    color: "#4a9eed",
                    textAlign: "center",
                    fontWeight: 700,
                  }}
                >
                  47.5%
                </td>
                <td
                  style={{
                    padding: "0.35rem 0.6rem",
                    color: "#e2e8f0",
                    textAlign: "center",
                  }}
                >
                  3.25ms
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--card-border)" }}>
                <td
                  style={{
                    padding: "0.35rem 0.6rem",
                    color: "#94a3b8",
                    textAlign: "center",
                  }}
                >
                  YOLOv8s
                </td>
                <td
                  style={{
                    padding: "0.35rem 0.6rem",
                    color: "#e2e8f0",
                    textAlign: "center",
                  }}
                >
                  11.2M
                </td>
                <td
                  style={{
                    padding: "0.35rem 0.6rem",
                    color: "#94a3b8",
                    textAlign: "center",
                  }}
                >
                  44.9%
                </td>
                <td
                  style={{
                    padding: "0.35rem 0.6rem",
                    color: "#e2e8f0",
                    textAlign: "center",
                  }}
                >
                  3.40ms
                </td>
              </tr>
              <tr>
                <td
                  colSpan={4}
                  style={{
                    padding: "0.3rem 0.6rem",
                    color: "#64748b",
                    fontSize: "0.62rem",
                    textAlign: "center",
                  }}
                >
                  YOLO-NAS usa NAS com restricoes de latencia reais
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ViTSvg() {
  return (
    <div>
      {/* Row 1: ViT architectures (left) + VLM table (right) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginBottom: "0.75rem",
        }}
      >
        {/* Left: 3 architecture cards */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}
        >
          {/* ViT Standard */}
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
                marginBottom: "0.45rem",
              }}
            >
              ViT STANDARD (proibitivo)
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                marginBottom: "0.35rem",
              }}
            >
              {[
                { label: "224x224 image", sub: "input", c: "#4a9eed" },
                { label: "16x16 patches", sub: "linear proj", c: "#0284c7" },
              ].map((s, i) => (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <div
                      style={{
                        color: "#0284c7",
                        fontSize: "0.9rem",
                        flexShrink: 0,
                      }}
                    >
                      ›
                    </div>
                  )}
                  <div
                    style={{
                      background: "rgba(74,158,237,0.08)",
                      border: `1px solid ${s.c}`,
                      borderRadius: 5,
                      padding: "0.25rem 0.4rem",
                      textAlign: "center",
                    }}
                  >
                    {s.label.split("\n").map((l) => (
                      <div
                        key={l}
                        style={{
                          fontSize: "0.63rem",
                          fontWeight: 700,
                          color: s.c,
                          fontFamily: "monospace",
                        }}
                      >
                        {l}
                      </div>
                    ))}
                    <div
                      style={{
                        fontSize: "0.58rem",
                        color: "#64748b",
                        fontFamily: "monospace",
                      }}
                    >
                      {s.sub}
                    </div>
                  </div>
                </React.Fragment>
              ))}
              <div
                style={{ color: "#0284c7", fontSize: "0.9rem", flexShrink: 0 }}
              >
                ›
              </div>
              {[0, 1, 2].map((i) => (
                <React.Fragment key={i}>
                  <div
                    style={{
                      background: "rgba(74,158,237,0.08)",
                      border: "1px solid #4a9eed",
                      borderRadius: 4,
                      padding: "0.2rem 0.3rem",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.58rem",
                        fontWeight: 700,
                        color: "#38bdf8",
                        fontFamily: "monospace",
                      }}
                    >
                      MHA
                    </div>
                    <div
                      style={{
                        fontSize: "0.55rem",
                        color: "#38bdf8",
                        fontFamily: "monospace",
                      }}
                    >
                      O(n²)
                    </div>
                    <div
                      style={{
                        fontSize: "0.52rem",
                        color: "#64748b",
                        fontFamily: "monospace",
                      }}
                    >
                      FFN
                    </div>
                  </div>
                  {i < 2 && (
                    <div style={{ color: "#64748b", fontSize: "0.7rem" }}>
                      ·
                    </div>
                  )}
                </React.Fragment>
              ))}
              <div style={{ color: "#64748b", fontSize: "0.9rem" }}>…</div>
            </div>
            <div
              style={{
                fontSize: "0.65rem",
                color: "#4a9eed",
                fontFamily: "monospace",
              }}
            >
              86M params, atencao O(n²) — proibitivo em edge
            </div>
          </div>

          {/* MobileViT */}
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
                marginBottom: "0.45rem",
              }}
            >
              MobileViT (Apple, 2021)
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
            >
              {[
                { label: "CNN", sub: "local feats", c: "#4a9eed" },
                { label: "ViT leve", sub: "global feats", c: "#0284c7" },
                { label: "78.4% 5.6M", sub: "params", c: "#7dd3fc" },
              ].map((s, i) => (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <div
                      style={{
                        color: "#0284c7",
                        fontSize: "0.9rem",
                        flexShrink: 0,
                      }}
                    >
                      ›
                    </div>
                  )}
                  <div
                    style={{
                      flex: 1,
                      background: "rgba(74,158,237,0.08)",
                      border: `1px solid ${s.c}`,
                      borderRadius: 5,
                      padding: "0.25rem 0.4rem",
                      textAlign: "center",
                    }}
                  >
                    {s.label.split("\n").map((l) => (
                      <div
                        key={l}
                        style={{
                          fontSize: "0.63rem",
                          fontWeight: 700,
                          color: s.c,
                          fontFamily: "monospace",
                        }}
                      >
                        {l}
                      </div>
                    ))}
                    <div
                      style={{
                        fontSize: "0.58rem",
                        color: "#64748b",
                        fontFamily: "monospace",
                      }}
                    >
                      {s.sub}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* EfficientViT */}
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
                marginBottom: "0.45rem",
              }}
            >
              EfficientViT (MIT, 2023)
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                marginBottom: "0.4rem",
              }}
            >
              {[
                { label: "Linear Attn", sub: "O(n)", c: "#38bdf8" },
                { label: "DW Conv", sub: "local", c: "#0284c7" },
                { label: "4x mais rapido", sub: "que ViT-B/16", c: "#7dd3fc" },
              ].map((s, i) => (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <div
                      style={{
                        color: "#0284c7",
                        fontSize: "0.9rem",
                        flexShrink: 0,
                      }}
                    >
                      ›
                    </div>
                  )}
                  <div
                    style={{
                      flex: 1,
                      background: "rgba(74,158,237,0.08)",
                      border: `1px solid ${s.c}`,
                      borderRadius: 5,
                      padding: "0.25rem 0.4rem",
                      textAlign: "center",
                    }}
                  >
                    {s.label.split("\n").map((l) => (
                      <div
                        key={l}
                        style={{
                          fontSize: "0.63rem",
                          fontWeight: 700,
                          color: s.c,
                          fontFamily: "monospace",
                        }}
                      >
                        {l}
                      </div>
                    ))}
                    <div
                      style={{
                        fontSize: "0.58rem",
                        color: "#64748b",
                        fontFamily: "monospace",
                      }}
                    >
                      {s.sub}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
            {/* Width multiplier bars */}
            <div
              style={{
                fontSize: "0.63rem",
                color: "#94a3b8",
                fontFamily: "monospace",
                marginBottom: "0.35rem",
              }}
            >
              MobileNet Width Multiplier
            </div>
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "flex-end" }}
            >
              {[
                { label: "0.25x", macs: "47M", h: 14, acc: "51%" },
                { label: "0.5x", macs: "150M", h: 22, acc: "63%" },
                { label: "0.75x", macs: "325M", h: 34, acc: "68%" },
                { label: "1.0x", macs: "569M", h: 46, acc: "70.6%" },
              ].map((d, i) => (
                <div
                  key={d.label}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.58rem",
                      color: "#4a9eed",
                      fontFamily: "monospace",
                      marginBottom: 2,
                    }}
                  >
                    {d.acc}
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: d.h,
                      background: `rgba(2,132,199,${0.25 + i * 0.18})`,
                      border: "1px solid #0284c7",
                      borderRadius: 2,
                      marginBottom: 3,
                    }}
                  />
                  <div
                    style={{
                      fontSize: "0.58rem",
                      color: "#0284c7",
                      fontFamily: "monospace",
                    }}
                  >
                    {d.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.55rem",
                      color: "#64748b",
                      fontFamily: "monospace",
                    }}
                  >
                    {d.macs}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: VLM table + ViT comparison chart */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}
        >
          {/* VLM table */}
          <div
            style={{
              background: "rgba(74,158,237,0.04)",
              border: "1px solid var(--card-border)",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "#0284c7",
                fontFamily: "monospace",
                padding: "0.5rem 0.75rem",
                borderBottom: "1px solid var(--card-border)",
              }}
            >
              Vision-Language Models no Edge
            </div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.68rem",
                fontFamily: "monospace",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid var(--card-border)" }}>
                  {["Modelo", "Params", "Precisao", "Plataforma"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "0.35rem 0.5rem",
                        color: "#94a3b8",
                        fontWeight: 700,
                        textAlign: "center",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "LLaVA-Phi-3",
                    "3.8B INT4",
                    "5 tok/s",
                    "Jetson AGX Orin",
                    "#0284c7",
                    "#4a9eed",
                  ],
                  [
                    "Florence-2",
                    "0.77B",
                    "multi-task",
                    "Jetson Orin Nano",
                    "#0284c7",
                    "#4a9eed",
                  ],
                  [
                    "LLaVA 1.5",
                    "7B INT4",
                    "2 tok/s",
                    "Jetson AGX Orin",
                    "#94a3b8",
                    "#94a3b8",
                  ],
                ].map(([model, p, prec, plat, mc, pc]) => (
                  <tr
                    key={model}
                    style={{ borderBottom: "1px solid var(--card-border)" }}
                  >
                    <td
                      style={{
                        padding: "0.3rem 0.5rem",
                        color: mc,
                        textAlign: "center",
                      }}
                    >
                      {model}
                    </td>
                    <td
                      style={{
                        padding: "0.3rem 0.5rem",
                        color: "#e2e8f0",
                        textAlign: "center",
                      }}
                    >
                      {p}
                    </td>
                    <td
                      style={{
                        padding: "0.3rem 0.5rem",
                        color: pc,
                        textAlign: "center",
                        fontWeight: 700,
                      }}
                    >
                      {prec}
                    </td>
                    <td
                      style={{
                        padding: "0.3rem 0.5rem",
                        color: "#94a3b8",
                        textAlign: "center",
                      }}
                    >
                      {plat}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ViT comparison chart */}
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
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "#0284c7",
                fontFamily: "monospace",
                marginBottom: "0.5rem",
              }}
            >
              Comparacao de ViT Eficientes
            </div>
            <svg
              viewBox="0 0 300 140"
              style={{ width: "100%", height: "auto" }}
            >
              <line
                x1="40"
                y1="130"
                x2="295"
                y2="130"
                stroke="var(--card-border)"
                strokeWidth="1"
              />
              <line
                x1="40"
                y1="10"
                x2="40"
                y2="130"
                stroke="var(--card-border)"
                strokeWidth="1"
              />
              <text x="35" y="14" textAnchor="end" fill="#94a3b8" fontSize="7">
                84%
              </text>
              <text x="35" y="70" textAnchor="end" fill="#94a3b8" fontSize="7">
                79%
              </text>
              <text x="35" y="130" textAnchor="end" fill="#94a3b8" fontSize="7">
                74%
              </text>
              <text
                x="170"
                y="142"
                textAnchor="middle"
                fill="#94a3b8"
                fontSize="7"
              >
                MACs
              </text>
              {[
                {
                  cx: 60,
                  cy: 112,
                  label: "MobileViT",
                  sub: "5.6M",
                  c: "#0284c7",
                },
                {
                  cx: 110,
                  cy: 86,
                  label: "EfficientViT",
                  sub: "",
                  c: "#4a9eed",
                },
                { cx: 185, cy: 58, label: "DeiT-S", sub: "", c: "#4a9eed" },
                {
                  cx: 265,
                  cy: 24,
                  label: "ViT-B/16",
                  sub: "86M",
                  c: "#38bdf8",
                },
              ].map((p) => (
                <g key={p.label}>
                  <circle cx={p.cx} cy={p.cy} r="5" fill={p.c} />
                  <text
                    x={p.cx}
                    y={p.cy - 8}
                    textAnchor="middle"
                    fill={p.c}
                    fontSize="7"
                  >
                    {p.label}
                  </text>
                  {p.sub && (
                    <text
                      x={p.cx}
                      y={p.cy - 16}
                      textAnchor="middle"
                      fill="#64748b"
                      fontSize="6"
                    >
                      {p.sub}
                    </text>
                  )}
                </g>
              ))}
              <polyline
                points="60,112 110,86 185,58 265,24"
                fill="none"
                stroke="#64748b"
                strokeWidth="1"
                strokeDasharray="3,2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EDG6() {
  return (
    <div style={S.page}>
      <Link to="/edge-ai" style={S.back}>
        &#8592; Edge AI &amp; TinyML
      </Link>

      <div style={{ marginBottom: "2rem" }}>
        <span style={S.badge}>MÓDULO {m.num}</span>
        <h1 style={S.h1}>{m.title}</h1>
        <p style={S.sub}>{m.subtitle}</p>
      </div>

      {/* Section 1 */}
      <section style={S.section}>
        <h2 style={S.h2}>
          1. MobileNet &#8212; Depthwise Separable Convolutions
        </h2>
        <p style={S.p}>
          O MobileNet introduziu depthwise separable convolutions &#8212;
          factoriza uma convolução 3&#215;3 em depthwise (padrões espaciais por
          canal) seguida de pointwise 1&#215;1 (combina canais) &#8212; redução
          de ~8-9x em MACs. MobileNetV2 com inverted residuals: expande
          dimensionalidade (factor 6), aplica depthwise, projecta de volta
          &#8212; residual nas dimensões baixas. MobileNetV3 (2019) combina NAS
          + hard-swish + Squeeze-Excite: 75.2% top-1 ImageNet com 219M MACs.
        </p>
        <p style={S.p}>
          Width multiplier permite trade-off contínuo: MobileNetV1 0.25x tem 47M
          MACs e 51% top-1, enquanto 1.0x atinge 70.6% com 569M MACs.
        </p>
        <div style={S.diagram}>
          <MobileNetSVG />
        </div>
        <div style={S.highlight}>
          Fórmula de redução:{" "}
          <InlineMath math="\text{MACs}_{standard} = H \times W \times K^2 \times C_{in} \times C_{out}" />
          {" "}vs{" "}
          <InlineMath math="\text{MACs}_{DSC} = H \times W \times K^2 \times C_{in} + H \times W \times C_{in} \times C_{out}" />
          . A razão{" "}
          <InlineMath math="\frac{1}{C_{out}} + \frac{1}{K^2} \approx \frac{1}{8}" />
          {" "}para K=3.
        </div>
        <div style={S.note}>
          MobileNetV3-Large: 5.4M params, 219M MACs, 75.2% top-1 &#8212; 2&#215;
          mais eficiente que MobileNetV2 para a mesma accuracy. Hard-swish
          (x&#215;ReLU6(x+3)/6) é mais rápido a quantizar do que swish original.
        </div>
      </section>

      <hr style={S.divider} />

      {/* Section 2 */}
      <section style={S.section}>
        <h2 style={S.h2}>2. EfficientNet e Compound Scaling</h2>
        <p style={S.p}>
          EfficientNet (Tan e Le, 2019) resolve scaling com compound coefficient
          phi &#8212; escalar depth, width e resolution simultaneamente com
          rácio fixo é mais eficiente que escalar individualmente. B0 encontrado
          por NAS: 5.3M params, 77.1% top-1; B7: 84.3% top-1, 66M params.
        </p>
        <p style={S.p}>
          EfficientNetV2 (2021): Fused-MBConv nas camadas iniciais (substitui
          expand+depthwise por conv standard para GPU/TPU mais eficiente) +
          progressive training (imagens pequenas no início com regularização
          fraca, imagens grandes no final) &#8212; 11x mais rápido a treinar que
          EfficientNetB7 original.
        </p>
        <div style={S.diagram}>
          <EfficientNetSVG />
        </div>
        <div style={S.highlight}>
          Compound scaling: depth = alpha^phi, width = beta^phi, resolution =
          gamma^phi, com alpha&#215;beta&#178;&#215;gamma&#178; &#8776; 2. Para
          EfficientNet B0&#8594;B7, phi varia de 0 a 7, escalando os recursos de
          forma balanceada.
        </div>
        <div style={S.note}>
          MBConv block: expand 1&#215;1 (BN+Swish) &#8594; depthwise 3&#215;3
          (BN+Swish) &#8594; Squeeze-Excite (reduz para C/4, depois expande)
          &#8594; project 1&#215;1 (linear). SE modula os canais com atenção
          global, custando apenas 0.3% MACs extra.
        </div>
      </section>

      <hr style={S.divider} />

      {/* Section 3 */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Neural Architecture Search para Edge</h2>
        <p style={S.p}>
          NAS automatiza design de arquitecturas com restrições de hardware.
          DARTS usa relaxação contínua &#8212; todas as operações em paralelo
          com peso learnable alpha, gradiente flui por escolhas de arquitectura
          (evita busca discreta custosa). MnasNet (Google) usa busca evolutiva
          com avaliação real no Pixel: accuracy &#215; (latência/target)^w.
        </p>
        <p style={S.p}>
          MCUNet (MIT, 2020): co-design de sistema de inferência + arquitectura
          para menos de 256KB SRAM &#8212; 70.7% ImageNet no Cortex-M7.
          Once-for-All (MIT, 2020): treina supernet uma vez, extrai subnets para
          qualquer target (mobile, IoT, cloud) sem retraining &#8212; suporta
          depth, width, kernel size e resolution variáveis ao longo de um espaço
          contínuo.
        </p>
        <div style={S.diagram}>
          <NASSvg />
        </div>
        <div style={S.highlight}>
          DARTS: custo = N forward passes por iteração vs busca discreta com
          N&#215;M avaliações. Cada edge tem mistura softmax de operações; no
          final da busca, mantém a operação com maior alpha. ProxylessNAS
          binariza as escolhas para reduzir memória de O(N) para O(1).
        </div>
        <div style={S.note}>
          Hardware-aware NAS: o objectivo multi-critério penaliza arquitecturas
          lentas. Peso w controla trade-off: w=0 ignora latência, w=1 equilibra.
          MnasNet usa w=-0.07 obtendo boa accuracy com latência &#60;75ms no
          Pixel.
        </div>
      </section>

      <hr style={S.divider} />

      {/* Section 4 */}
      <section style={S.section}>
        <h2 style={S.h2}>4. YOLO-nano e Detecção de Objectos Eficiente</h2>
        <p style={S.p}>
          YOLO é a família dominante para detecção de objectos em edge por
          equilíbrio accuracy/velocidade. YOLOv8n (Ultralytics): 3.2M params,
          8.7B FLOPs, 37.3% mAP50 COCO &#8212; 7.5ms Raspberry Pi 5 (133fps).
          Inovação: decoupled head (classificação e regressão separadas melhoram
          convergência e accuracy em relação ao coupled head anterior).
        </p>
        <p style={S.p}>
          YOLO-NAS (Deci.ai, 2023): NAS com restrições de latência &#8212;
          supera YOLOv8 em mAP para mesma latência no Jetson. FOMO (Edge
          Impulse): remove anchor boxes e NMS, grelha de saída com classe por
          célula &#8212; 30x mais rápido, corre a 30fps no Arduino Portenta H7
          em imagens 96&#215;96. Ideal para contagem e localização em MCUs com
          &#60;256KB SRAM.
        </p>
        <div style={S.diagram}>
          <YOLOSvg />
        </div>
        <div style={S.highlight}>
          YOLOv8n no Jetson AGX Orin: 0.8ms por frame (1250fps) com TensorRT
          FP16. Decoupled head resulta em +1.4% mAP50 face ao coupled head com
          custo computacional negligenciável.
        </div>
        <div style={S.note}>
          FOMO (Faster Objects, More Objects): a grelha de saída é directamente
          proporcional ao input dividido pelo stride. Para 96&#215;96 com
          stride=8: grelha 12&#215;12. Cada célula prediz probabilidade de
          classe &#8212; sem bounding boxes, centróide do objecto mapeado à
          célula correspondente.
        </div>
      </section>

      <hr style={S.divider} />

      {/* Section 5 */}
      <section style={S.section}>
        <h2 style={S.h2}>
          5. Vision Transformers Eficientes e Edge LLMs Vision
        </h2>
        <p style={S.p}>
          ViT standard (86M params, atenção O(n&#178;)) é proibitivo para edge.
          MobileViT (Apple, 2021): CNN para features locais + Transformer leve
          para globais &#8212; 78.4% ImageNet com 5.6M params, 2x mais eficiente
          que MobileNetV3. EfficientViT (MIT, 2023): linear attention O(n) +
          depthwise conv &#8212; 4x mais rápido que ViT-B/16 com accuracy
          similar.
        </p>
        <p style={S.p}>
          Vision-language models no edge: LLaVA-Phi-3 (3.8B INT4) corre no
          Jetson AGX Orin a 5 tokens/s; Florence-2 (0.77B, multi-task) corre no
          Jetson Orin Nano — demonstrando que VLMs de linguagem rica chegam ao
          edge com quantização agressiva.
        </p>
        <div style={S.diagram}>
          <ViTSvg />
        </div>
        <div style={S.highlight}>
          MobileViT: CNN-as-Transformer &#8212; divide feature map em patches
          não-sobrepostos, aplica Transformer dentro de cada patch (local),
          depois combina (global). Sem positional embeddings &#8212; invariante
          à ordem dos patches por design.
        </div>
        <div style={S.note}>
          Linear attention (EfficientViT): Attn(Q,K,V) = phi(Q)(phi(K)&#7488;V)
          onde phi é uma função de feature map. Reduz complexidade de
          O(n&#178;d) para O(nd&#178;). Combinado com DW conv para captar
          inducao de localidade que a atenção linear perde.
        </div>
      </section>
    </div>
  );
}
