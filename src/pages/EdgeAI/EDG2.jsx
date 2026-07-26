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

const m = modules[1];

export default function EDG2() {
  return (
    <div style={S.page}>
      <Link to="/edge-ai" style={S.back}>
        <ArrowLeft size={16} /> Voltar ao curso
      </Link>
      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* ── SECTION 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Pruning — Estruturado e Não-Estruturado</h2>

        <div style={S.diagram}>
          <svg
            width="100%"
            viewBox="0 0 740 310"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
          >
            <rect width="740" height="310" fill="var(--bg-secondary)" rx="8" />

            {/* Dense matrix label */}
            <text
              x="60"
              y="20"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
              fontWeight="700"
              fontFamily="monospace"
            >
              DENSE (8x8)
            </text>

            {/* Dense 8x8 grid */}
            {Array.from({ length: 64 }).map((_, i) => {
              const row = Math.floor(i / 8);
              const col = i % 8;
              return (
                <rect
                  key={i}
                  x={10 + col * 14}
                  y={26 + row * 14}
                  width="12"
                  height="12"
                  rx="1"
                  fill="#4a9eed"
                  opacity={0.7 + Math.random() * 0.3}
                />
              );
            })}

            {/* Arrow to unstructured */}
            <line
              x1="122"
              y1="70"
              x2="155"
              y2="50"
              stroke="#4a9eed"
              strokeWidth="1.5"
              markerEnd="url(#arrO)"
            />
            <line
              x1="122"
              y1="90"
              x2="155"
              y2="150"
              stroke="#4a9eed"
              strokeWidth="1.5"
              markerEnd="url(#arrO)"
            />

            {/* Unstructured pruning label */}
            <text
              x="260"
              y="20"
              textAnchor="middle"
              fill="#4a9eed"
              fontSize="9"
              fontWeight="700"
              fontFamily="monospace"
            >
              UNSTRUCTURED (50% sparse)
            </text>

            {/* Unstructured grid — scattered zeros */}
            {Array.from({ length: 64 }).map((_, i) => {
              const row = Math.floor(i / 8);
              const col = i % 8;
              const isZero = [
                1, 3, 5, 8, 10, 13, 17, 20, 22, 25, 27, 30, 33, 35, 38, 40, 43,
                46, 49, 51, 54, 56, 58, 61,
              ].includes(i);
              return (
                <rect
                  key={i}
                  x={160 + col * 14}
                  y={26 + row * 14}
                  width="12"
                  height="12"
                  rx="1"
                  fill={isZero ? "#1e293b" : "#4a9eed"}
                  stroke={isZero ? "var(--card-border)" : "none"}
                  strokeWidth="0.5"
                  opacity={isZero ? 1 : 0.75}
                />
              );
            })}
            <text
              x="260"
              y="150"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="8"
              fontFamily="monospace"
            >
              Speedup: ~1.1x (requer sparse kernels)
            </text>

            {/* Structured pruning label */}
            <text
              x="260"
              y="175"
              textAnchor="middle"
              fill="#4a9eed"
              fontSize="9"
              fontWeight="700"
              fontFamily="monospace"
            >
              STRUCTURED (5x8 — 3 rows removed)
            </text>

            {/* Structured grid — rows removed */}
            {Array.from({ length: 40 }).map((_, i) => {
              const row = Math.floor(i / 8);
              const col = i % 8;
              return (
                <rect
                  key={i}
                  x={160 + col * 14}
                  y={183 + row * 14}
                  width="12"
                  height="12"
                  rx="1"
                  fill="#4a9eed"
                  opacity="0.75"
                />
              );
            })}
            <text
              x="260"
              y="277"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="8"
              fontFamily="monospace"
            >
              Speedup: ~1.4x em hardware standard
            </text>

            {/* Lottery ticket diagram */}
            <rect
              x="450"
              y="16"
              width="275"
              height="120"
              rx="6"
              fill="rgba(74,158,237,0.06)"
              stroke="#4a9eed"
              strokeWidth="1"
            />
            <text
              x="587"
              y="32"
              textAnchor="middle"
              fill="#4a9eed"
              fontSize="9"
              fontWeight="700"
              fontFamily="monospace"
            >
              LOTTERY TICKET HYPOTHESIS
            </text>
            <text
              x="460"
              y="52"
              fill="#94a3b8"
              fontSize="8.5"
              fontFamily="monospace"
            >
              1. Treinar rede densa
            </text>
            <line
              x1="530"
              y1="58"
              x2="560"
              y2="58"
              stroke="#4a9eed"
              strokeWidth="1"
              markerEnd="url(#arrO)"
            />
            <text
              x="565"
              y="62"
              fill="#94a3b8"
              fontSize="8.5"
              fontFamily="monospace"
            >
              Dense
            </text>
            <text
              x="460"
              y="74"
              fill="#94a3b8"
              fontSize="8.5"
              fontFamily="monospace"
            >
              2. Encontrar sub-rede esparsa
            </text>
            <line
              x1="530"
              y1="80"
              x2="560"
              y2="80"
              stroke="#4a9eed"
              strokeWidth="1"
              markerEnd="url(#arrO)"
            />
            <text
              x="565"
              y="84"
              fill="#4a9eed"
              fontSize="8.5"
              fontFamily="monospace"
            >
              Winning ticket
            </text>
            <text
              x="460"
              y="96"
              fill="#94a3b8"
              fontSize="8.5"
              fontFamily="monospace"
            >
              3. Re-treinar esparsa
            </text>
            <line
              x1="530"
              y1="102"
              x2="560"
              y2="102"
              stroke="#4a9eed"
              strokeWidth="1"
              markerEnd="url(#arrO)"
            />
            <text
              x="565"
              y="106"
              fill="#4a9eed"
              fontSize="8.5"
              fontFamily="monospace"
            >
              = acc. igual
            </text>
            <text
              x="587"
              y="128"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="7.5"
              fontFamily="monospace"
            >
              Frankle &amp; Carlin, 2019
            </text>

            {/* Speedup comparison */}
            <rect
              x="450"
              y="150"
              width="275"
              height="130"
              rx="6"
              fill="rgba(74,158,237,0.06)"
              stroke="var(--card-border)"
              strokeWidth="1"
            />
            <text
              x="587"
              y="166"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
              fontWeight="700"
              fontFamily="monospace"
            >
              PIPELINE DE PRUNING
            </text>
            {[
              "Treinar modelo denso",
              "Calcular importância (L1 / gradiente / Taylor)",
              "Remover menos importantes",
              "Fine-tuning de recuperação",
              "Iterar até sparsity alvo",
            ].map((step, i) => (
              <g key={i}>
                <circle
                  cx="465"
                  cy={180 + i * 20}
                  r="5"
                  fill={color}
                  opacity="0.8"
                />
                <text
                  x="476"
                  y={184 + i * 20}
                  fill="#94a3b8"
                  fontSize="8.5"
                  fontFamily="monospace"
                >
                  {step}
                </text>
              </g>
            ))}

            <defs>
              <marker
                id="arrO"
                markerWidth="6"
                markerHeight="6"
                refX="3"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
              </marker>
            </defs>
          </svg>
        </div>

        <p style={S.p}>
          Pruning não-estruturado remove pesos individuais abaixo de um
          threshold — 80% dos pesos podem ir a zero com menos de 1% de perda de
          accuracy, mas sem acelerar em hardware convencional (GPUs/NPUs
          calculam blocos densos, zeros incluídos) a menos que haja suporte
          sparse dedicado (NVIDIA A100 2:4).
        </p>
        <p style={S.p}>
          Pruning estruturado remove canais/filtros/camadas inteiras — modelos
          mais pequenos e densos, que correm mais rápido em qualquer hardware
          sem suporte especial. Decisão prática: estruturado para MCUs e NPUs
          genéricas; não-estruturado só compensa com hardware sparse dedicado.
        </p>
        <div style={S.highlight}>
          A Lottery Ticket Hypothesis (Frankle e Carlin, 2019): dentro de uma
          rede densa existe sempre uma sub-rede esparsa que, treinada
          isoladamente com os mesmos pesos iniciais, atinge a mesma accuracy.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Quantização — INT8, FP16 e QAT</h2>

        <div style={S.diagram}>
          {/* Row 1: histograms */}
          <svg
            width="100%"
            viewBox="0 0 740 110"
            style={{ display: "block", marginBottom: "1rem" }}
          >
            <defs>
              <marker
                id="arrQ"
                markerWidth="6"
                markerHeight="6"
                refX="3"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
              </marker>
            </defs>
            {/* FP32 bell curve */}
            <text
              x="130"
              y="14"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
              fontWeight="700"
              fontFamily="monospace"
            >
              FP32 — distribuição de pesos
            </text>
            {Array.from({ length: 50 }).map((_, i) => {
              const x = 10 + i * 5;
              const normX = (i - 25) / 8;
              const h = Math.round(60 * Math.exp(-0.5 * normX * normX));
              return (
                <rect
                  key={i}
                  x={x}
                  y={80 - h}
                  width="4"
                  height={h}
                  rx="1"
                  fill="#4a9eed"
                  opacity="0.65"
                />
              );
            })}
            <text
              x="10"
              y="95"
              fill="#94a3b8"
              fontSize="7"
              fontFamily="monospace"
            >
              -3.2
            </text>
            <text
              x="220"
              y="95"
              fill="#94a3b8"
              fontSize="7"
              fontFamily="monospace"
            >
              +3.1
            </text>
            <text
              x="130"
              y="95"
              fill="#4a9eed"
              fontSize="7.5"
              fontFamily="monospace"
              textAnchor="middle"
            >
              32-bit float
            </text>
            {/* Arrow */}
            <line
              x1="262"
              y1="55"
              x2="298"
              y2="55"
              stroke="#4a9eed"
              strokeWidth="2"
              markerEnd="url(#arrQ)"
            />
            <text
              x="280"
              y="48"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="8"
              fontFamily="monospace"
            >
              quantizar
            </text>
            {/* INT8 discrete */}
            <text
              x="430"
              y="14"
              textAnchor="middle"
              fill="#4a9eed"
              fontSize="9"
              fontWeight="700"
              fontFamily="monospace"
            >
              INT8 — níveis discretos
            </text>
            {Array.from({ length: 16 }).map((_, i) => {
              const x = 305 + i * 15;
              const normX = (i - 8) / 2.5;
              const h = Math.round(60 * Math.exp(-0.5 * normX * normX));
              return (
                <rect
                  key={i}
                  x={x}
                  y={80 - h}
                  width="13"
                  height={h}
                  rx="1"
                  fill="#4a9eed"
                  opacity="0.75"
                />
              );
            })}
            <text
              x="305"
              y="95"
              fill="#94a3b8"
              fontSize="7"
              fontFamily="monospace"
            >
              -128
            </text>
            <text
              x="535"
              y="95"
              fill="#94a3b8"
              fontSize="7"
              fontFamily="monospace"
            >
              +127
            </text>
            <text
              x="430"
              y="95"
              fill="#4a9eed"
              fontSize="7.5"
              fontFamily="monospace"
              textAnchor="middle"
            >
              8-bit integer
            </text>
            {/* Formula box */}
            <rect
              x="570"
              y="8"
              width="165"
              height="88"
              rx="6"
              fill="rgba(74,158,237,0.06)"
              stroke="#4a9eed"
              strokeWidth="1"
            />
            <text
              x="652"
              y="24"
              textAnchor="middle"
              fill="#4a9eed"
              fontSize="8.5"
              fontWeight="700"
              fontFamily="monospace"
            >
              Fórmula INT8
            </text>
            <text
              x="580"
              y="42"
              fill="#e2e8f0"
              fontSize="8"
              fontFamily="monospace"
            >
              S = (max - min) / 255
            </text>
            <text
              x="580"
              y="58"
              fill="#e2e8f0"
              fontSize="8"
              fontFamily="monospace"
            >
              Z = round(-min / S)
            </text>
            <text
              x="580"
              y="74"
              fill="#4a9eed"
              fontSize="7.5"
              fontFamily="monospace"
            >
              q = clamp(round(x/S+Z),
            </text>
            <text
              x="580"
              y="88"
              fill="#4a9eed"
              fontSize="7.5"
              fontFamily="monospace"
            >
              {" "}
              -128, 127)
            </text>
          </svg>

          {/* Row 2: memory bars + accuracy table + speedup */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            {/* Memory bars */}
            <div
              style={{
                background: "rgba(74,158,237,0.04)",
                border: "1px solid var(--card-border)",
                borderRadius: 8,
                padding: "0.75rem",
                textAlign: "center",
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
                MEMÓRIA POR PESO
              </div>
              <svg
                viewBox="0 0 200 80"
                style={{ width: "100%", height: "auto" }}
              >
                {[
                  { l: "FP32", b: 4 },
                  { l: "FP16", b: 2 },
                  { l: "INT8", b: 1 },
                  { l: "INT4", b: 0.5 },
                ].map((x, i) => (
                  <g key={i}>
                    <rect
                      x={10 + i * 46}
                      y={60 - x.b * 12}
                      width="36"
                      height={x.b * 12}
                      rx="3"
                      fill="#4a9eed"
                      opacity={0.5 + x.b * 0.1}
                    />
                    <text
                      x={28 + i * 46}
                      y="68"
                      textAnchor="middle"
                      fill="#4a9eed"
                      fontSize="8"
                      fontFamily="monospace"
                    >
                      {x.l}
                    </text>
                    <text
                      x={28 + i * 46}
                      y="78"
                      textAnchor="middle"
                      fill="#94a3b8"
                      fontSize="7"
                      fontFamily="monospace"
                    >
                      {x.b}B
                    </text>
                  </g>
                ))}
              </svg>
            </div>
            {/* Accuracy table */}
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
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#94a3b8",
                  fontFamily: "monospace",
                  marginBottom: "0.5rem",
                }}
              >
                ACCURACY vs COMPRESSÃO
              </div>
              {[
                { fmt: "FP32", acc: "baseline", mem: "—" },
                { fmt: "FP16", acc: "-0.1%", mem: "2× mem" },
                { fmt: "INT8", acc: "-0.5 a -2%", mem: "4× mem" },
                { fmt: "INT4", acc: "-3 a -10%", mem: "8× mem" },
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.78rem",
                    fontFamily: "monospace",
                    padding: "0.2rem 0",
                    borderBottom: "1px solid rgba(74,158,237,0.08)",
                  }}
                >
                  <span style={{ color: "#4a9eed", fontWeight: 700 }}>
                    {r.fmt}
                  </span>
                  <span style={{ color: "var(--text-primary)" }}>{r.acc}</span>
                  <span style={{ color: "#94a3b8" }}>{r.mem}</span>
                </div>
              ))}
            </div>
            {/* Speedup */}
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
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#94a3b8",
                  fontFamily: "monospace",
                  marginBottom: "0.5rem",
                }}
              >
                SPEEDUP DE HARDWARE
              </div>
              {[
                { hw: "NVIDIA GPU FP16", s: "2×" },
                { hw: "NVIDIA GPU INT8", s: "4×" },
                { hw: "NVIDIA GPU INT4", s: "8×" },
                { hw: "ARM Cortex-M INT8", s: "4× FP32" },
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.78rem",
                    fontFamily: "monospace",
                    padding: "0.2rem 0",
                    borderBottom: "1px solid rgba(74,158,237,0.08)",
                  }}
                >
                  <span style={{ color: "#94a3b8" }}>{r.hw}</span>
                  <span style={{ color: "#4a9eed", fontWeight: 700 }}>
                    {r.s}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: PTQ vs QAT */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
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
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "#4a9eed",
                  fontFamily: "monospace",
                  marginBottom: "0.4rem",
                }}
              >
                PTQ — Post-Training Quantization
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                Calibração com 100–1000 amostras após treino. Rápido. Queda de
                accuracy maior em INT4. Não requer re-treino.
              </div>
            </div>
            <div
              style={{
                background: "rgba(74,158,237,0.08)",
                border: "1px solid #4a9eed",
                borderRadius: 8,
                padding: "0.85rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "#4a9eed",
                  fontFamily: "monospace",
                  marginBottom: "0.4rem",
                }}
              >
                QAT — Quantization-Aware Training
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                Simula quantização durante treino (straight-through estimator).
                Recupera 1–3% de accuracy vs PTQ. Melhor para INT4.
              </div>
            </div>
          </div>
        </div>

        <p style={S.p}>
          A quantização reduz a precisão numérica de FP32 para FP16/INT8/INT4.
          INT8 é o sweet spot prático: 4x menos memória, 2–4x mais rápido em
          hardware compatível (ARM SIMD, NPUs, Edge TPU), com menos de 1% de
          perda em visão.
        </p>
        <p style={S.p}>
          Decisão: usar PTQ (calibração rápida com 100-1000 amostras, sem
          re-treino) sempre que a queda de accuracy for aceitável; escalar para
          QAT (simula quantização durante o treino) apenas quando o alvo é INT4
          ou a degradação de PTQ for inaceitável.
        </p>
        <p style={S.p}>
          Para modelos de milhares de milhões de parâmetros, PTQ genérico dá lugar a métodos
          especializados. O <strong>GPTQ</strong> quantiza camada a camada, minimizando o erro quadrático
          entre a saída original e a saída quantizada — <span style={{ fontFamily: 'monospace', color: '#4a9eed' }}>Ŵ_q = argmin ‖WX − W_q X‖²</span>.
          O <strong>AWQ (Activation-Aware Weight Quantization)</strong> identifica os pesos mais
          "salientes" — os que correspondem a activações de maior magnitude — e protege-os com maior
          precisão, por terem impacto desproporcional na qualidade final.
        </p>

        <div style={S.highlight}>
          A quantização INT4 é o estado da arte para LLMs em edge (GPTQ, AWQ,
          llama.cpp/GGUF) — modelos de 7B parâmetros que precisam de 28GB em FP32
          ficam com 3.5GB em INT4, correndo num MacBook Air. O formato GGUF e os
          k-quants específicos para LLMs (Q4_KM, Q5_KM) são aprofundados no
          módulo "Edge LLMs" mais adiante neste curso.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Knowledge Distillation</h2>

        <div style={S.diagram}>
          {/* Row 1: Teacher → Soft Labels | Temperature Effect */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            {/* Teacher → Soft Labels */}
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
                TEACHER → SOFT LABELS (T=4)
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    background: "rgba(74,158,237,0.12)",
                    border: "2px solid #4a9eed",
                    borderRadius: 6,
                    padding: "0.5rem 0.75rem",
                    textAlign: "center",
                    minWidth: 90,
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
                    TEACHER
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "#94a3b8",
                      fontFamily: "monospace",
                      marginTop: 2,
                    }}
                  >
                    ResNet-152
                  </div>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      color: "#94a3b8",
                      fontFamily: "monospace",
                    }}
                  >
                    60M params
                  </div>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      color: "#94a3b8",
                      fontFamily: "monospace",
                    }}
                  >
                    77.5% top-1
                  </div>
                  <div
                    style={{
                      fontSize: "0.62rem",
                      color: "#64748b",
                      fontFamily: "monospace",
                      marginTop: 2,
                    }}
                  >
                    frozen
                  </div>
                </div>
                <div style={{ color: "#4a9eed", fontSize: "1.2rem" }}>→</div>
                <div style={{ flex: 1 }}>
                  {[
                    { label: "gato", val: 0.82 },
                    { label: "leopardo", val: 0.1 },
                    { label: "cão", val: 0.06 },
                    { label: "outros", val: 0.02 },
                  ].map((s, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        marginBottom: "0.3rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.72rem",
                          color: "#94a3b8",
                          fontFamily: "monospace",
                          width: 52,
                        }}
                      >
                        {s.label}
                      </span>
                      <div
                        style={{
                          flex: 1,
                          background: "rgba(74,158,237,0.12)",
                          borderRadius: 3,
                          height: 10,
                        }}
                      >
                        <div
                          style={{
                            width: `${s.val * 100}%`,
                            height: "100%",
                            background: "#4a9eed",
                            borderRadius: 3,
                            opacity: 0.8,
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "#4a9eed",
                          fontFamily: "monospace",
                          width: 30,
                        }}
                      >
                        {s.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Temperature Effect */}
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
                EFEITO DA TEMPERATURA
              </div>
              <svg
                viewBox="0 0 260 90"
                style={{ width: "100%", height: "auto" }}
              >
                <text
                  x="0"
                  y="12"
                  fill="#94a3b8"
                  fontSize="8"
                  fontFamily="monospace"
                >
                  T=1 — sharp (pouco info)
                </text>
                {[0.96, 0.02, 0.01, 0.005, 0.005].map((v, i) => (
                  <rect
                    key={i}
                    x={i * 26}
                    y={35 - Math.round(v * 20)}
                    width="20"
                    height={Math.round(v * 20)}
                    rx="2"
                    fill="#4a9eed"
                    opacity="0.7"
                  />
                ))}
                <text
                  x="0"
                  y="52"
                  fill="#94a3b8"
                  fontSize="8"
                  fontFamily="monospace"
                >
                  T=4 — soft (mais info)
                </text>
                {[0.55, 0.25, 0.12, 0.05, 0.03].map((v, i) => (
                  <rect
                    key={i}
                    x={i * 26}
                    y={80 - Math.round(v * 22)}
                    width="20"
                    height={Math.round(v * 22)}
                    rx="2"
                    fill="#4a9eed"
                    opacity="0.7"
                  />
                ))}
                {["gato", "leo", "cão", "etc", "..."].map((l, i) => (
                  <text
                    key={i}
                    x={i * 26 + 10}
                    y="88"
                    textAnchor="middle"
                    fill="#64748b"
                    fontSize="6.5"
                    fontFamily="monospace"
                  >
                    {l}
                  </text>
                ))}
              </svg>
            </div>
          </div>

          {/* Row 2: Student + Loss Formula | Results */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "1rem",
            }}
          >
            {/* Student + Loss */}
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
                STUDENT + LOSS COMBINADA
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    background: "rgba(7,89,133,0.25)",
                    border: "2px solid #4a9eed",
                    borderRadius: 6,
                    padding: "0.5rem 0.75rem",
                    textAlign: "center",
                    minWidth: 90,
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
                    STUDENT
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "#94a3b8",
                      fontFamily: "monospace",
                      marginTop: 2,
                    }}
                  >
                    MobileNetV3
                  </div>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      color: "#94a3b8",
                      fontFamily: "monospace",
                    }}
                  >
                    5M params
                  </div>
                  <div
                    style={{
                      fontSize: "0.62rem",
                      color: "#64748b",
                      fontFamily: "monospace",
                      marginTop: 2,
                    }}
                  >
                    treino activo
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.8rem",
                      color: "#4a9eed",
                      marginBottom: "0.4rem",
                    }}
                  >
                    L = α·CE(y_hard) + (1-α)·T²·KL(p_T, p_S)
                  </div>
                  {[
                    "α = 0.1–0.5  (peso das hard labels)",
                    "T = temperatura  (3–8 para soft labels)",
                    "T² = factor de escala nos gradientes KL",
                    "one-hot → CE   |   soft probs → KL",
                  ].map((line, i) => (
                    <div
                      key={i}
                      style={{
                        fontSize: "0.75rem",
                        color: "#94a3b8",
                        fontFamily: "monospace",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
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
                RESULTADOS (ImageNet)
              </div>
              {[
                { label: "Teacher (ResNet-152)", val: 77.5 },
                { label: "Student sem distill.", val: 68.3 },
                { label: "Student com distill.", val: 73.1 },
              ].map((r, i) => (
                <div key={i} style={{ marginBottom: "0.6rem" }}>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "#94a3b8",
                      fontFamily: "monospace",
                      marginBottom: "0.2rem",
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
                        background: "rgba(74,158,237,0.12)",
                        borderRadius: 3,
                        height: 10,
                      }}
                    >
                      <div
                        style={{
                          width: `${((r.val - 60) / 25) * 100}%`,
                          height: "100%",
                          background: "#4a9eed",
                          borderRadius: 3,
                          opacity: i === 1 ? 0.5 : 0.85,
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "#4a9eed",
                        fontFamily: "monospace",
                        width: 38,
                      }}
                    >
                      {r.val}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p style={S.p}>
          Knowledge distillation (Hinton et al., 2015) treina um student pequeno
          para imitar as soft labels de um teacher grande, que codificam
          similaridades inter-classe (gato → alguma probabilidade de leopardo)
          que uma label one-hot não captura. A temperatura T (3–8) suaviza a
          distribuição, tornando-a mais informativa.
        </p>
        <div style={S.highlight}>
          TinyBERT usou distillation em 4 camadas de atenção e activações para
          comprimir BERT-base (110M params) para TinyBERT (14M params) com 96%
          da performance em GLUE.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Sparsidade Estruturada e Mixed Precision</h2>

        <div style={S.diagram}>
          {/* Row 1: Sparsidade 2:4 + Channel Pruning */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            {/* 2:4 Sparsity */}
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
                  marginBottom: "0.3rem",
                }}
              >
                SPARSIDADE 2:4 (NVIDIA A100)
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#64748b",
                  fontFamily: "monospace",
                  marginBottom: "0.75rem",
                }}
              >
                exactamente 2 zeros em cada grupo de 4 pesos
              </div>
              <svg
                viewBox="0 0 336 40"
                style={{
                  width: "100%",
                  height: "auto",
                  marginBottom: "0.5rem",
                }}
              >
                {[
                  [1, 0, 1, 0],
                  [0, 1, 0, 1],
                  [1, 1, 0, 0],
                  [0, 0, 1, 1],
                  [1, 0, 0, 1],
                  [0, 1, 1, 0],
                  [1, 0, 1, 0],
                  [0, 1, 0, 1],
                ].map((group, gi) =>
                  group.map((v, j) => (
                    <rect
                      key={`${gi}-${j}`}
                      x={gi * 42 + j * 10}
                      y={4}
                      width="8"
                      height="32"
                      rx="2"
                      fill={v ? "#4a9eed" : "#1e293b"}
                      stroke={v ? "none" : "#334155"}
                      strokeWidth="0.5"
                      opacity={v ? 0.85 : 1}
                    />
                  )),
                )}
              </svg>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "#4a9eed",
                  fontFamily: "monospace",
                  textAlign: "center",
                }}
              >
                2x speedup · 50% menos memória
              </div>
            </div>

            {/* Channel Pruning */}
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
                  marginBottom: "0.3rem",
                }}
              >
                CHANNEL PRUNING (conv 64→45 filtros)
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#64748b",
                  fontFamily: "monospace",
                  marginBottom: "0.75rem",
                }}
              >
                filtros com L1-norm baixa são removidos
              </div>
              <svg
                viewBox="0 0 336 80"
                style={{ width: "100%", height: "auto" }}
              >
                {Array.from({ length: 64 }).map((_, i) => {
                  const removed = [
                    3, 7, 11, 15, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49,
                    52, 55, 58, 61,
                  ].includes(i);
                  return (
                    <rect
                      key={i}
                      x={(i % 16) * 21}
                      y={Math.floor(i / 16) * 18}
                      width="18"
                      height="14"
                      rx="2"
                      fill={removed ? "#1e293b" : "#4a9eed"}
                      stroke={removed ? "#334155" : "none"}
                      strokeWidth="0.5"
                      opacity={removed ? 0.5 : 0.8}
                    />
                  );
                })}
              </svg>
              <div
                style={{ display: "flex", gap: "1rem", marginTop: "0.4rem" }}
              >
                <span
                  style={{
                    fontSize: "0.68rem",
                    color: "#4a9eed",
                    fontFamily: "monospace",
                  }}
                >
                  ■ activo (45)
                </span>
                <span
                  style={{
                    fontSize: "0.68rem",
                    color: "#475569",
                    fontFamily: "monospace",
                  }}
                >
                  ■ removido (19)
                </span>
              </div>
            </div>
          </div>

          {/* Row 2: Mixed Precision Transformer */}
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
              MIXED PRECISION — TRANSFORMER
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0.5rem",
              }}
            >
              {[
                { label: "Embedding", prec: "FP16", note: "normal" },
                { label: "Attention QKV", prec: "FP16", note: "fast" },
                { label: "FFN Layer 1", prec: "INT8", note: "4× faster" },
                {
                  label: "Layer Norm",
                  prec: "FP32",
                  note: "sensível — preservar",
                },
                { label: "FFN Layer 2", prec: "INT8", note: "4× faster" },
                { label: "Final Linear", prec: "INT8", note: "4× faster" },
              ].map((l, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(74,158,237,0.08)",
                    border: "1px solid #4a9eed",
                    borderRadius: 6,
                    padding: "0.5rem 0.65rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "#e2e8f0",
                        fontFamily: "monospace",
                        fontWeight: 600,
                      }}
                    >
                      {l.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.68rem",
                        color: "#94a3b8",
                        fontFamily: "monospace",
                      }}
                    >
                      {l.note}
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#4a9eed",
                      borderRadius: 4,
                      padding: "0.15rem 0.45rem",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "#fff",
                      fontFamily: "monospace",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {l.prec}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                fontSize: "0.72rem",
                color: "#64748b",
                fontFamily: "monospace",
                marginTop: "0.6rem",
                textAlign: "center",
              }}
            >
              Gradientes sempre em FP32 · Loss scaling previne underflow de
              gradientes FP16
            </div>
          </div>
        </div>

        <p style={S.p}>
          A sparsidade 2:4 da NVIDIA exige exactamente 2 zeros em cada 4 pesos
          consecutivos — 2x de speedup em sparse tensor cores dedicados,
          mantendo paralelismo regular. Mixed precision training usa FP16 para a
          maioria das operações mas FP32 para camadas sensíveis (layer norm,
          weight updates), com loss scaling contra underflow.
        </p>
        <div style={S.highlight}>
          GPTQ (2022) aplica quantização post-training a LLMs usando a Hessian
          dos pesos para minimizar erro camada a camada — permite INT4 com
          degradação mínima mesmo acima de 175B parâmetros.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Ferramentas e Benchmarks de Compressão</h2>

        <div style={S.diagram}>
          <svg
            width="100%"
            viewBox="0 0 740 310"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
          >
            <rect width="740" height="300" fill="var(--bg-secondary)" rx="8" />

            {/* Central node */}
            <rect
              x="295"
              y="120"
              width="150"
              height="40"
              rx="6"
              fill="#4a9eed"
              opacity="0.2"
              stroke="#4a9eed"
              strokeWidth="2"
            />
            <text
              x="370"
              y="136"
              textAnchor="middle"
              fill="#4a9eed"
              fontSize="9"
              fontWeight="700"
              fontFamily="monospace"
            >
              Compressed
            </text>
            <text
              x="370"
              y="150"
              textAnchor="middle"
              fill="#4a9eed"
              fontSize="9"
              fontWeight="700"
              fontFamily="monospace"
            >
              Model
            </text>

            {/* Tool nodes */}
            {[
              {
                x: 10,
                y: 16,
                label: "PyTorch 2.0",
                sub: "torch.ao.quantization",
                color: "#4a9eed",
              },
              {
                x: 200,
                y: 16,
                label: "TFLite Converter",
                sub: "PTQ + QAT pipeline",
                color: "#4a9eed",
              },
              {
                x: 400,
                y: 16,
                label: "ONNX Runtime",
                sub: "quantize_static/dynamic",
                color: "#4a9eed",
              },
              {
                x: 590,
                y: 16,
                label: "Intel OpenVINO",
                sub: "NNCF compression",
                color: "#4a9eed",
              },
              {
                x: 10,
                y: 230,
                label: "HF Optimum",
                sub: "hardware-specific opt.",
                color: "#4a9eed",
              },
              {
                x: 200,
                y: 230,
                label: "Apple coremltools",
                sub: "Core ML + quantization",
                color: "#4a9eed",
              },
              {
                x: 400,
                y: 230,
                label: "Apache TVM",
                sub: "auto-tuning compiler",
                color: "#4a9eed",
              },
              {
                x: 590,
                y: 230,
                label: "Intel Neural Comp.",
                sub: "INC — auto mix prec.",
                color: "#4a9eed",
              },
            ].map((t, i) => (
              <g key={i}>
                <rect
                  x={t.x}
                  y={t.y}
                  width="130"
                  height="44"
                  rx="5"
                  fill="rgba(74,158,237,0.06)"
                  stroke={t.color}
                  strokeWidth="1.5"
                />
                <text
                  x={t.x + 65}
                  y={t.y + 17}
                  textAnchor="middle"
                  fill={t.color}
                  fontSize="8.5"
                  fontWeight="700"
                  fontFamily="monospace"
                >
                  {t.label}
                </text>
                <text
                  x={t.x + 65}
                  y={t.y + 31}
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="7.5"
                  fontFamily="monospace"
                >
                  {t.sub}
                </text>
                {/* Lines to center */}
                <line
                  x1={t.x + 65}
                  y1={i < 4 ? t.y + 44 : t.y}
                  x2={370}
                  y2={i < 4 ? 120 : 160}
                  stroke={t.color}
                  strokeWidth="0.75"
                  strokeDasharray="4,3"
                  opacity="0.5"
                />
              </g>
            ))}

            {/* MLPerf table */}
            <rect
              x="10"
              y="288"
              width="720"
              height="16"
              rx="3"
              fill="var(--bg-secondary)"
              stroke="var(--card-border)"
              strokeWidth="1"
            />
            <text
              x="370"
              y="300"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="8"
              fontFamily="monospace"
            >
              MLPerf Edge — ResNet-50 INT8: Edge TPU 130 inf/s | Jetson AGX Orin
              8000 inf/s | RPi 5 45 inf/s | STM32H7 2 inf/s
            </text>
          </svg>
        </div>

        <p style={S.p}>
          PyTorch 2.0 (torch.ao.quantization, torch.nn.utils.prune) e o TFLite
          Converter (pipeline padrão para mobile/MCU) automatizam grande parte
          do processo. O Hugging Face Optimum abstrai optimização
          hardware-específica (ONNX Runtime, OpenVINO, TensorRT). O MLPerf
          Inference Edge é o benchmark neutro de referência para comparar
          throughput e latência p99 entre plataformas.
        </p>
        <div style={S.highlight}>
          A comparação entre plataformas é complexa porque TOPS declarados pelos
          fabricantes usam precisões e operações diferentes — o MLPerf é o único
          benchmark neutro com metodologia reproducível e resultados verificados
          por terceiros.
        </div>
      </div>
    </div>
  );
}
