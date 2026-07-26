import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#4a9eed';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    marginBottom: '2.5rem',
  },
  tag: {
    display: 'inline-block',
    background: 'transparent',
    color: color,
    border: `1.5px solid ${color}`,
    fontSize: '0.75rem',
    fontWeight: 700,
    padding: '0.25rem 0.75rem',
    borderRadius: 20,
    marginBottom: '0.75rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  h1: {
    fontSize: '2.1rem',
    fontWeight: 800,
    lineHeight: 1.2,
    marginBottom: '0.5rem',
    color: 'var(--text-primary)',
  },
  lead: {
    fontSize: '1.05rem',
    color: 'var(--text-secondary)',
    marginBottom: '3rem',
    lineHeight: 1.7,
  },
  section: { marginBottom: '3.5rem' },
  h2: {
    fontSize: '1.4rem',
    fontWeight: 700,
    color,
    borderLeft: `3px solid ${color}`,
    paddingLeft: '0.85rem',
    marginBottom: '1.2rem',
  },
  h3: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '0.8rem',
    marginTop: '1.6rem',
  },
  p: {
    fontSize: '1rem',
    color: 'var(--text-primary)',
    lineHeight: 1.8,
    marginBottom: '1rem',
  },
  diagram: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--card-border)',
    borderRadius: 12,
    padding: '1.5rem',
    margin: '1.5rem 0',
  },
  math: {
    background: 'var(--bg-secondary)',
    borderRadius: 10,
    padding: '1.25rem',
    textAlign: 'center',
    margin: '1.5rem 0',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '0.9rem',
    marginBottom: '1rem',
  },
  th: {
    background: 'var(--bg-secondary)',
    padding: '0.6rem 0.8rem',
    textAlign: 'left',
    fontWeight: 600,
    color: 'var(--text-secondary)',
    borderBottom: '2px solid var(--card-border)',
  },
  td: {
    padding: '0.55rem 0.8rem',
    borderBottom: '1px solid var(--card-border)',
    color: 'var(--text-primary)',
  },
  highlight: {
    background: 'rgba(74,158,237,0.10)',
    border: '1px solid #4a9eed',
    borderRadius: 8,
    padding: '1rem 1.25rem',
    marginBottom: '1.2rem',
  },
  note: {
    background: `rgba(74,158,237,0.10)`,
    borderLeft: `3px solid ${color}`,
    borderRadius: '0 8px 8px 0',
    padding: '0.75rem 1rem',
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    margin: '1rem 0',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid var(--card-border)',
    margin: '2.5rem 0',
  },
  code: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--card-border)',
    borderRadius: 8,
    padding: '1rem',
    fontFamily: 'monospace',
    fontSize: '0.85rem',
    color: 'var(--text-primary)',
    overflowX: 'auto',
    margin: '1rem 0',
    whiteSpace: 'pre',
  },
};

export default function LLM10() {
  return (
    <div style={S.page}>
      <Link to="/llm" style={S.back}>
        <ArrowLeft size={16} /> Voltar aos módulos
      </Link>

      <span style={S.tag}>MÓDULO 10</span>
      <h1 style={S.h1}>LLMs Multimodais</h1>

      {/* ── Section 1 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Da Linguagem à Multimodalidade</h2>

        <p style={S.p}>
          Os LLMs puramente textuais operam sobre sequências de tokens de texto
          e não têm qualquer mecanismo para processar informação visual,
          auditiva ou estruturada de outras modalidades. Esta limitação é
          fundamental: o mundo real é multimodal e uma enorme quantidade de
          conhecimento existe exclusivamente em imagens, diagramas, gráficos,
          vídeos e áudio.
        </p>

        <p style={S.p}>
          A solução é criar um <em>espaço latente partilhado</em> onde
          representações de diferentes modalidades coexistem e são comparáveis.
          Um modelo que mapeia imagens e texto para o mesmo espaço vectorial
          pode raciocinar sobre ambos em conjunto — a imagem de um gato e a
          palavra "gato" ficam próximas no espaço.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 260" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker
                id="arr1"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
              </marker>
            </defs>
            {/* Left column: Text-only */}
            <rect
              x="20"
              y="20"
              width="320"
              height="220"
              rx="12"
              fill="rgba(148,163,184,0.06)"
              stroke="#94a3b8"
              strokeWidth="1.5"
            />
            <text
              x="180"
              y="48"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fill="var(--text-secondary)"
            >
              Apenas Texto
            </text>

            <rect
              x="60"
              y="65"
              width="240"
              height="40"
              rx="8"
              fill="rgba(148,163,184,0.15)"
              stroke="#94a3b8"
              strokeWidth="1"
            />
            <text
              x="180"
              y="88"
              textAnchor="middle"
              fontSize="11"
              fill="var(--text-primary)"
            >
              Text Encoder (único)
            </text>

            <line
              x1="180"
              y1="105"
              x2="180"
              y2="130"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr1)"
            />

            <rect
              x="60"
              y="130"
              width="240"
              height="40"
              rx="8"
              fill="rgba(148,163,184,0.15)"
              stroke="#94a3b8"
              strokeWidth="1"
            />
            <text
              x="180"
              y="153"
              textAnchor="middle"
              fontSize="11"
              fill="var(--text-primary)"
            >
              Espaço Latente Textual
            </text>

            <line
              x1="180"
              y1="170"
              x2="180"
              y2="195"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr1)"
            />
            <text
              x="180"
              y="215"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              Texto → Texto
            </text>

            {/* Right column: Multimodal */}
            <rect
              x="420"
              y="20"
              width="320"
              height="220"
              rx="12"
              fill="rgba(74,158,237,0.10)"
              stroke={color}
              strokeWidth="1.5"
            />
            <text
              x="580"
              y="48"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fill={color}
            >
              Multimodal
            </text>

            <rect
              x="430"
              y="65"
              width="130"
              height="38"
              rx="8"
              fill="rgba(74,158,237,0.10)"
              stroke={color}
              strokeWidth="1"
            />
            <text
              x="495"
              y="82"
              textAnchor="middle"
              fontSize="10"
              fontWeight="600"
              fill={color}
            >
              Vision Encoder
            </text>
            <text
              x="495"
              y="96"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              (ViT)
            </text>

            <rect
              x="600"
              y="65"
              width="130"
              height="38"
              rx="8"
              fill="rgba(74,158,237,0.10)"
              stroke={color}
              strokeWidth="1"
            />
            <text
              x="665"
              y="82"
              textAnchor="middle"
              fontSize="10"
              fontWeight="600"
              fill={color}
            >
              Text Encoder
            </text>
            <text
              x="665"
              y="96"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              (Transformer)
            </text>

            <line
              x1="495"
              y1="103"
              x2="560"
              y2="128"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr1)"
            />
            <line
              x1="665"
              y1="103"
              x2="600"
              y2="128"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr1)"
            />

            <rect
              x="480"
              y="130"
              width="200"
              height="40"
              rx="8"
              fill="rgba(74,158,237,0.10)"
              stroke={color}
              strokeWidth="1.5"
            />
            <text
              x="580"
              y="154"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill={color}
            >
              Espaço Latente Partilhado
            </text>

            <line
              x1="580"
              y1="170"
              x2="580"
              y2="195"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr1)"
            />
            <text
              x="580"
              y="215"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              Imagem + Texto → Texto
            </text>
          </svg>
        </div>

        <h3 style={S.h3}>Modalidades Suportadas</h3>
        <p style={S.p}>
          Os modelos modernos processam um conjunto crescente de modalidades,
          cada uma com os seus próprios encoders especializados que mapeiam para
          o espaço latente partilhado:
        </p>
        <ul
          style={{
            color: 'var(--text-primary)',
            lineHeight: 1.9,
            paddingLeft: '1.5rem',
            marginBottom: '1rem',
          }}
        >
          <li>
            <strong>Imagem:</strong> fotografias, diagramas, gráficos,
            documentos digitalizados — encoders ViT ou CNN.
          </li>
          <li>
            <strong>Áudio:</strong> fala, música, sons ambientes — encoders tipo
            Whisper (spectrogramas + transformer).
          </li>
          <li>
            <strong>Vídeo:</strong> sequências de frames com informação temporal
            — encoders 3D-CNN ou frame-sampling.
          </li>
          <li>
            <strong>Dados estruturados:</strong> tabelas, código, fórmulas
            matemáticas — tratados como texto especializado.
          </li>
          <li>
            <strong>Código:</strong> linguagens de programação com semântica
            precisa — frequentemente misturado com texto.
          </li>
        </ul>

        <div style={S.note}>
          <strong>Intuição central:</strong> se um modelo aprender que a
          representação de "uma maçã vermelha" (texto) e a representação de uma
          fotografia de maçã vermelha (imagem) são próximas no mesmo espaço
          vectorial, pode responder perguntas sobre imagens usando o raciocínio
          linguístico que já domina.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 2 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>
          2. CLIP — Contrastive Language-Image Pretraining (OpenAI)
        </h2>

        <p style={S.p}>
          O CLIP (Radford et al., 2021) foi um marco seminal na multimodalidade.
          Treinado em 400 milhões de pares imagem-texto recolhidos da Internet,
          aprendeu um espaço latente onde imagens e as suas descrições textuais
          ficam próximas — sem supervisão manual por classe.
        </p>

        <div style={S.note}>
          A arquitectura dual-encoder, a derivação completa da loss contrastiva (InfoNCE/NT-Xent) e
          o exemplo numérico de zero-shot classification são cobertos em profundidade no curso de
          Deep Learning, módulo "Multimodal Learning" — aqui o que importa é uma coisa: o CLIP
          produz um <strong>encoder visual</strong> cujos embeddings de imagem já estão alinhados
          com texto, e é exactamente esse encoder que serve de "olho" aos VLMs (LLaVA, GPT-4V,
          Gemini) discutidos a seguir.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. LLaVA — Large Language and Vision Assistant</h2>

        <p style={S.p}>
          O LLaVA (Liu et al., 2023) demonstrou que é possível criar um
          assistente visual poderoso com uma arquitectura surpreendentemente
          simples: ligar um encoder de visão CLIP a um LLM através de uma
          projecção linear, e fazer fine-tuning em dados de instrução visual
          gerados com GPT-4.
        </p>

        <h3 style={S.h3}>Arquitectura</h3>
        <p style={S.p}>
          A pipeline do LLaVA tem três componentes: o encoder visual CLIP
          ViT-L/14, uma projecção linear treinável, e o LLM (LLaMA ou Vicuna).
          As imagens são convertidas em tokens visuais que o LLM processa em
          conjunto com os tokens de texto:
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 200" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker
                id="arr3"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
              </marker>
            </defs>
            {/* Image input */}
            <rect
              x="10"
              y="75"
              width="80"
              height="50"
              rx="8"
              fill="rgba(74,158,237,0.10)"
              stroke={color}
              strokeWidth="1.5"
            />
            <text
              x="50"
              y="97"
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              fill={color}
            >
              Imagem
            </text>
            <text
              x="50"
              y="112"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              224×224
            </text>

            <line
              x1="90"
              y1="100"
              x2="125"
              y2="100"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr3)"
            />

            {/* ViT */}
            <rect
              x="125"
              y="70"
              width="110"
              height="60"
              rx="8"
              fill="rgba(2,132,199,0.10)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text
              x="180"
              y="97"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="#4a9eed"
            >
              CLIP ViT
            </text>
            <text
              x="180"
              y="113"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              ViT-L/14
            </text>

            <line
              x1="235"
              y1="100"
              x2="270"
              y2="100"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr3)"
            />

            {/* Linear Projection */}
            <rect
              x="270"
              y="70"
              width="110"
              height="60"
              rx="8"
              fill="rgba(125,211,252,0.10)"
              stroke="#0284c7"
              strokeWidth="1.5"
            />
            <text
              x="325"
              y="97"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="#4a9eed"
            >
              Projecção
            </text>
            <text
              x="325"
              y="113"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              Linear / MLP
            </text>

            <line
              x1="380"
              y1="100"
              x2="415"
              y2="100"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr3)"
            />

            {/* Token sequence */}
            <rect
              x="415"
              y="70"
              width="110"
              height="60"
              rx="8"
              fill="rgba(74,158,237,0.10)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text
              x="470"
              y="94"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="#4a9eed"
            >
              Tokens
            </text>
            <text
              x="470"
              y="108"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              Visuais
            </text>
            <text
              x="470"
              y="122"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              [v₁…v₂₅₆]
            </text>

            <line
              x1="525"
              y1="100"
              x2="560"
              y2="100"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr3)"
            />

            {/* Text tokens entering from top */}
            <rect
              x="560"
              y="20"
              width="110"
              height="40"
              rx="8"
              fill="rgba(74,158,237,0.10)"
              stroke={color}
              strokeWidth="1"
            />
            <text
              x="615"
              y="38"
              textAnchor="middle"
              fontSize="10"
              fontWeight="600"
              fill={color}
            >
              Tokens de Texto
            </text>
            <text
              x="615"
              y="52"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              [t₁…tₙ]
            </text>
            <line
              x1="615"
              y1="60"
              x2="615"
              y2="70"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr3)"
            />

            {/* LLM Decoder */}
            <rect
              x="560"
              y="70"
              width="110"
              height="60"
              rx="8"
              fill="rgba(74,158,237,0.10)"
              stroke={color}
              strokeWidth="1.8"
            />
            <text
              x="615"
              y="97"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill={color}
            >
              LLM Decoder
            </text>
            <text
              x="615"
              y="113"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              Vicuna / LLaMA
            </text>

            <line
              x1="670"
              y1="100"
              x2="705"
              y2="100"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr3)"
            />

            {/* Output */}
            <rect
              x="705"
              y="75"
              width="50"
              height="50"
              rx="8"
              fill="rgba(2,132,199,0.12)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text
              x="730"
              y="97"
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              fill="#4a9eed"
            >
              Texto
            </text>
            <text
              x="730"
              y="112"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              Output
            </text>
          </svg>
        </div>

        <h3 style={S.h3}>Fases de Treino</h3>
        <p style={S.p}>
          O LLaVA é treinado em duas fases distintas para separar o alinhamento
          visual do fine-tuning de instrução:
        </p>
        <ul
          style={{
            color: 'var(--text-primary)',
            lineHeight: 1.9,
            paddingLeft: '1.5rem',
            marginBottom: '1rem',
          }}
        >
          <li>
            <strong>Fase 1 — Pré-treino da projecção:</strong> O encoder ViT e o
            LLM ficam congelados. Apenas a camada de projecção linear é treinada
            em 595K pares imagem-texto (CC3M filtrado) para alinhar o espaço
            visual com o espaço do LLM.
          </li>
          <li>
            <strong>Fase 2 — Fine-tuning de instrução:</strong> O encoder ViT
            continua congelado, mas a projecção e o LLM são treinados em
            conjunto em 158K exemplos de conversação visual gerados pelo GPT-4 a
            partir de captions e bounding boxes.
          </li>
        </ul>

        <h3 style={S.h3}>LLaVA-1.5 e Evolução</h3>
        <p style={S.p}>
          O LLaVA-1.5 (Liu et al., 2023b) melhorou o modelo original com três
          mudanças chave: substituição da projecção linear por um MLP de duas
          camadas, uso do CLIP-ViT-L/14 a resolução 336×336px (em vez de
          224×224px), e o backbone Vicuna-13B. Com apenas 1.2M de dados de
          instrução visual, superou modelos treinados com muito mais dados em
          benchmarks como ScienceQA, TextVQA e MMBench.
        </p>

        <div style={S.note}>
          <strong>Eficiência notável:</strong> O LLaVA-1.5 treinou em menos de
          um dia numa única máquina com 8 GPUs A100. A simplicidade da
          arquitectura (encoder + projecção + LLM) provou que grandes
          quantidades de dados multimodais proprietários não são necessárias
          para performance competitiva.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 4 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. GPT-4V e Gemini</h2>

        <p style={S.p}>
          Enquanto o LLaVA demonstra que arquitecturas simples funcionam, os
          modelos frontier como GPT-4V e Gemini adoptam uma abordagem diferente:
          treino multimodal nativo desde o início, em vez de adaptar um LLM
          existente com um encoder de visão adicionado posteriormente.
        </p>

        <h3 style={S.h3}>GPT-4V</h3>
        <p style={S.p}>
          O GPT-4V (OpenAI, 2023) é uma versão do GPT-4 com capacidades visuais
          integradas nativamente durante o treino — não é uma extensão bolt-on.
          Aceita entradas onde imagens e texto se intercalam livremente na mesma
          sequência. Demonstra capacidades notáveis em raciocínio visual,
          leitura de código de gráficos complexos e interpretação de imagens
          médicas.
        </p>

        <h3 style={S.h3}>Gemini 1.5 Pro</h3>
        <p style={S.p}>
          O Gemini 1.5 Pro (Google DeepMind, 2024) foi concebido como multimodal
          nativo desde a primeira iteração. A sua característica mais distintiva
          é uma janela de contexto de 1 milhão de tokens, suficiente para
          processar vídeos de uma hora inteira, documentos extensos com imagens
          intercaladas, ou grandes bases de código. Suporta nativamente texto,
          imagem, vídeo e áudio.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>Empresa</th>
              <th style={S.th}>Modalidades</th>
              <th style={S.th}>Contexto</th>
              <th style={S.th}>Diferencial</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>
                <strong>GPT-4V</strong>
              </td>
              <td style={S.td}>OpenAI</td>
              <td style={S.td}>Texto, Imagem</td>
              <td style={S.td}>128K tokens</td>
              <td style={S.td}>
                Raciocínio visual avançado, interleaved image+text
              </td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>GPT-4o</strong>
              </td>
              <td style={S.td}>OpenAI</td>
              <td style={S.td}>Texto, Imagem, Áudio</td>
              <td style={S.td}>128K tokens</td>
              <td style={S.td}>
                Multimodal nativo, latência baixa, áudio end-to-end
              </td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Gemini 1.5 Pro</strong>
              </td>
              <td style={S.td}>Google DeepMind</td>
              <td style={S.td}>Texto, Imagem, Vídeo, Áudio</td>
              <td style={S.td}>1M tokens</td>
              <td style={S.td}>
                Contexto ultra-longo, compreensão de vídeo nativa
              </td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Claude 3.5 Sonnet</strong>
              </td>
              <td style={S.td}>Anthropic</td>
              <td style={S.td}>Texto, Imagem</td>
              <td style={S.td}>200K tokens</td>
              <td style={S.td}>
                Análise de documentos, diagramas, OCR preciso
              </td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>LLaVA-1.5-13B</strong>
              </td>
              <td style={S.td}>Aberto</td>
              <td style={S.td}>Texto, Imagem</td>
              <td style={S.td}>4K tokens</td>
              <td style={S.td}>Open-source, eficiente, treinável localmente</td>
            </tr>
          </tbody>
        </table>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 200" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker
                id="arr4"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
              </marker>
            </defs>
            {/* Interleaved tokens */}
            <text
              x="380"
              y="22"
              textAnchor="middle"
              fontSize="12"
              fontWeight="700"
              fill="var(--text-secondary)"
            >
              Entrada Intercalada: Imagem + Texto
            </text>

            {/* Token sequence */}
            {[
              { x: 20, type: 'img', label: 'IMG' },
              { x: 70, type: 'img', label: 'IMG' },
              { x: 120, type: 'img', label: 'IMG' },
              { x: 170, type: 'txt', label: 'txt' },
              { x: 220, type: 'txt', label: 'txt' },
              { x: 270, type: 'txt', label: 'txt' },
              { x: 320, type: 'img', label: 'IMG' },
              { x: 370, type: 'img', label: 'IMG' },
              { x: 420, type: 'txt', label: 'txt' },
              { x: 470, type: 'txt', label: 'txt' },
              { x: 520, type: 'txt', label: 'txt' },
              { x: 570, type: 'txt', label: 'txt' },
            ].map((tok, i) => (
              <g key={i}>
                <rect
                  x={tok.x}
                  y="40"
                  width="42"
                  height="44"
                  rx="6"
                  fill={
                    tok.type === 'img'
                      ? 'rgba(74,158,237,0.10)'
                      : 'rgba(148,163,184,0.15)'
                  }
                  stroke={tok.type === 'img' ? color : '#94a3b8'}
                  strokeWidth="1.5"
                />
                <text
                  x={tok.x + 21}
                  y="67"
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight={tok.type === 'img' ? '700' : '400'}
                  fill={tok.type === 'img' ? color : 'var(--text-secondary)'}
                >
                  {tok.label}
                </text>
              </g>
            ))}

            <line
              x1="620"
              y1="62"
              x2="660"
              y2="62"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr4)"
            />

            {/* Transformer block */}
            <rect
              x="665"
              y="30"
              width="85"
              height="64"
              rx="10"
              fill="rgba(74,158,237,0.10)"
              stroke={color}
              strokeWidth="1.8"
            />
            <text
              x="707"
              y="58"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill={color}
            >
              Transformer
            </text>
            <text
              x="707"
              y="74"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              Blocks
            </text>

            <text
              x="380"
              y="120"
              textAnchor="middle"
              fontSize="10"
              fill={color}
              fontWeight="600"
            >
              Tokens de imagem (azul) e texto (cinzento) processados na mesma
              sequência
            </text>
            <text
              x="380"
              y="138"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              O attention cross-modal emerge do treino conjunto — não é
              programado explicitamente
            </text>
          </svg>
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 5 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Vision Tokens e Patch Embeddings</h2>

        <p style={S.p}>
          Para que um LLM processe imagens, estas têm de ser convertidas numa
          sequência de tokens — o mesmo formato que o modelo usa para texto. O
          mecanismo padrão é o <em>patch splitting</em>
          do Vision Transformer (ViT): a imagem é dividida em patches de tamanho
          fixo, cada um convertido num vector de embedding.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 220" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker
                id="arr5"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
              </marker>
            </defs>
            {/* Image 224x224 represented as grid */}
            <rect
              x="20"
              y="30"
              width="120"
              height="120"
              rx="6"
              fill="rgba(74,158,237,0.10)"
              stroke={color}
              strokeWidth="2"
            />
            <text
              x="80"
              y="18"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill={color}
            >
              224×224 px
            </text>
            {/* Grid lines 4x4 to represent patches */}
            {[1, 2, 3].map((i) => (
              <line
                key={`h${i}`}
                x1="20"
                y1={30 + i * 30}
                x2="140"
                y2={30 + i * 30}
                stroke={color}
                strokeWidth="0.8"
                strokeDasharray="3,2"
              />
            ))}
            {[1, 2, 3].map((i) => (
              <line
                key={`v${i}`}
                x1={20 + i * 30}
                y1="30"
                x2={20 + i * 30}
                y2="150"
                stroke={color}
                strokeWidth="0.8"
                strokeDasharray="3,2"
              />
            ))}
            <text
              x="80"
              y="168"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              Imagem original
            </text>

            <line
              x1="145"
              y1="90"
              x2="185"
              y2="90"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr5)"
            />
            <text
              x="165"
              y="82"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              patches
            </text>
            <text
              x="165"
              y="106"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              16×16
            </text>

            {/* Grid of patches 14x14 (simplified as 5x5) */}
            <text
              x="270"
              y="18"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="var(--text-secondary)"
            >
              14×14 = 196 patches
            </text>
            {[0, 1, 2, 3, 4].map((row) =>
              [0, 1, 2, 3, 4].map((col) => (
                <rect
                  key={`${row}-${col}`}
                  x={190 + col * 22}
                  y={30 + row * 22}
                  width="20"
                  height="20"
                  rx="2"
                  fill="rgba(74,158,237,0.12)"
                  stroke={color}
                  strokeWidth="0.8"
                />
              )),
            )}
            <text
              x="270"
              y="148"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              grelha de patches
            </text>

            <line
              x1="305"
              y1="90"
              x2="345"
              y2="90"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr5)"
            />
            <text
              x="325"
              y="82"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              linear
            </text>
            <text
              x="325"
              y="106"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              embed
            </text>

            {/* Token sequence — 5 boxes + ellipsis + 1 last box */}
            <text
              x="570"
              y="18"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="var(--text-secondary)"
            >
              Sequência de 196 tokens
            </text>
            {[0, 1, 2, 3, 4].map((i) => (
              <rect
                key={i}
                x={355 + i * 38}
                y="55"
                width="28"
                height="65"
                rx="4"
                fill="rgba(74,158,237,0.10)"
                stroke={color}
                strokeWidth="1.2"
              />
            ))}
            <text
              x="555"
              y="92"
              textAnchor="middle"
              fontSize="11"
              fill="var(--text-secondary)"
            >
              …
            </text>
            <rect
              x="573"
              y="55"
              width="28"
              height="65"
              rx="4"
              fill="rgba(74,158,237,0.10)"
              stroke={color}
              strokeWidth="1.2"
            />
            <text
              x="645"
              y="92"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              → 196 total
            </text>
            <text
              x="490"
              y="140"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              cada token: vector d-dim
            </text>

            <text
              x="380"
              y="175"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              ViT-L/14@224px: 196 tokens por imagem · ViT-L/14@336px: 576 tokens
              por imagem
            </text>
          </svg>
        </div>

        <h3 style={S.h3}>Trade-off: Resolução vs. Comprimento de Contexto</h3>
        <p style={S.p}>
          O número de tokens visuais cresce quadraticamente com a resolução.
          Para uma imagem de largura <InlineMath math={'H'} /> com patches de
          tamanho <InlineMath math={'p'} />, o número de tokens é:
        </p>
        <div style={S.math}>
          <BlockMath
            math={'N_{\\text{tokens}} = \\left(\\frac{H}{p}\\right)^2'}
          />
        </div>
        <p style={S.p}>
          Uma imagem 224×224 com patches 16×16 gera 196 tokens. A mesma imagem a
          448×448 gera 784 tokens. Isto aumenta o custo de atenção
          quadraticamente no comprimento total da sequência. A escolha da
          resolução é sempre um trade-off entre detalhe visual e custo
          computacional.
        </p>

        <h3 style={S.h3}>Dynamic Resolution: LLaVA-HD e InternVL</h3>
        <p style={S.p}>
          Para resolver este trade-off, modelos como LLaVA-HD e InternVL
          utilizam resolução dinâmica: dividem a imagem em sub-imagens
          sobrepostas (tiles) processadas independentemente e depois
          concatenadas. Uma imagem de alta resolução pode ser partilhada em 4 ou
          9 tiles de 336×336px, mantendo os patches pequenos mas preservando o
          detalhe. O thumbnail global é sempre incluído para contexto de
          composição.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>Resolução</th>
              <th style={S.th}>Tokens por imagem</th>
              <th style={S.th}>Estratégia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>CLIP ViT-B/32</td>
              <td style={S.td}>224×224</td>
              <td style={S.td}>49</td>
              <td style={S.td}>Patch 32×32, resolução fixa</td>
            </tr>
            <tr>
              <td style={S.td}>CLIP ViT-L/14</td>
              <td style={S.td}>224×224</td>
              <td style={S.td}>196</td>
              <td style={S.td}>Patch 14×14, resolução fixa</td>
            </tr>
            <tr>
              <td style={S.td}>LLaVA-1.5</td>
              <td style={S.td}>336×336</td>
              <td style={S.td}>576</td>
              <td style={S.td}>Patch 14×14, resolução aumentada</td>
            </tr>
            <tr>
              <td style={S.td}>LLaVA-HD / InternVL</td>
              <td style={S.td}>até 1344×1344</td>
              <td style={S.td}>até 2304+</td>
              <td style={S.td}>Tiling dinâmico, sub-imagens independentes</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Aplicações e Casos de Uso</h2>

        <p style={S.p}>
          Os LLMs multimodais desbloquearam aplicações que eram impossíveis para
          modelos puramente textuais. Desde a análise de documentos complexos
          até à medicina, estas capacidades têm impacto prático imediato em
          vários sectores.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 320" width="100%" style={{ display: 'block' }}>
            {/* 2x2 grid */}
            {/* Top-left: Document understanding */}
            <rect
              x="20"
              y="20"
              width="340"
              height="130"
              rx="10"
              fill="rgba(74,158,237,0.10)"
              stroke={color}
              strokeWidth="1.5"
            />
            <text x="40" y="48" fontSize="13" fontWeight="700" fill={color}>
              Compreensão de Documentos
            </text>
            <text x="40" y="68" fontSize="10" fill="var(--text-secondary)">
              GPT-4V lê tabelas financeiras, PDFs com
            </text>
            <text x="40" y="84" fontSize="10" fill="var(--text-secondary)">
              gráficos e formulários digitalizados.
            </text>
            <text x="40" y="104" fontSize="10" fill="var(--text-secondary)">
              Extracção de dados estruturados de
            </text>
            <text x="40" y="120" fontSize="10" fill="var(--text-secondary)">
              imagens de documentos históricos.
            </text>
            <rect
              x="280"
              y="35"
              width="60"
              height="60"
              rx="8"
              fill="rgba(74,158,237,0.10)"
              stroke={color}
              strokeWidth="1"
            />
            <text x="310" y="72" textAnchor="middle" fontSize="22"></text>

            {/* Top-right: Medical imaging */}
            <rect
              x="400"
              y="20"
              width="340"
              height="130"
              rx="10"
              fill="rgba(2,132,199,0.07)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text x="420" y="48" fontSize="13" fontWeight="700" fill="#4a9eed">
              Imagem Médica
            </text>
            <text x="420" y="68" fontSize="10" fill="var(--text-secondary)">
              Geração de relatórios de radiologia a
            </text>
            <text x="420" y="84" fontSize="10" fill="var(--text-secondary)">
              partir de radiografias e tomografias.
            </text>
            <text x="420" y="104" fontSize="10" fill="var(--text-secondary)">
              Detecção de anomalias em dermatologia
            </text>
            <text x="420" y="120" fontSize="10" fill="var(--text-secondary)">
              e oftalmologia assistida por IA.
            </text>
            <rect
              x="660"
              y="35"
              width="60"
              height="60"
              rx="8"
              fill="rgba(2,132,199,0.15)"
              stroke="#4a9eed"
              strokeWidth="1"
            />
            <text x="690" y="72" textAnchor="middle" fontSize="22"></text>

            {/* Bottom-left: Code from screenshots */}
            <rect
              x="20"
              y="175"
              width="340"
              height="130"
              rx="10"
              fill="rgba(74,158,237,0.10)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text x="40" y="203" fontSize="13" fontWeight="700" fill="#4a9eed">
              Código a Partir de UI
            </text>
            <text x="40" y="223" fontSize="10" fill="var(--text-secondary)">
              GPT-4V converte mockups de interface
            </text>
            <text x="40" y="239" fontSize="10" fill="var(--text-secondary)">
              em componentes React funcionais.
            </text>
            <text x="40" y="259" fontSize="10" fill="var(--text-secondary)">
              Screenshot-to-code: design → HTML/CSS
            </text>
            <text x="40" y="275" fontSize="10" fill="var(--text-secondary)">
              sem intervenção humana.
            </text>
            <rect
              x="280"
              y="190"
              width="60"
              height="60"
              rx="8"
              fill="rgba(74,158,237,0.10)"
              stroke="#4a9eed"
              strokeWidth="1"
            />
            <text x="310" y="227" textAnchor="middle" fontSize="22"></text>

            {/* Bottom-right: Video Q&A */}
            <rect
              x="400"
              y="175"
              width="340"
              height="130"
              rx="10"
              fill="rgba(125,211,252,0.07)"
              stroke="#0284c7"
              strokeWidth="1.5"
            />
            <text x="420" y="203" fontSize="13" fontWeight="700" fill="#4a9eed">
              Análise de Vídeo
            </text>
            <text x="420" y="223" fontSize="10" fill="var(--text-secondary)">
              Gemini 1.5 responde perguntas sobre
            </text>
            <text x="420" y="239" fontSize="10" fill="var(--text-secondary)">
              vídeos de 1 hora sem transcrição.
            </text>
            <text x="420" y="259" fontSize="10" fill="var(--text-secondary)">
              Resumo automático, detecção de eventos
            </text>
            <text x="420" y="275" fontSize="10" fill="var(--text-secondary)">
              e análise de reuniões gravadas.
            </text>
            <rect
              x="660"
              y="190"
              width="60"
              height="60"
              rx="8"
              fill="rgba(125,211,252,0.15)"
              stroke="#0284c7"
              strokeWidth="1"
            />
            <text x="690" y="227" textAnchor="middle" fontSize="22"></text>
          </svg>
        </div>

        <h3 style={S.h3}>Exemplos Concretos</h3>
        <ul
          style={{
            color: 'var(--text-primary)',
            lineHeight: 1.9,
            paddingLeft: '1.5rem',
            marginBottom: '1rem',
          }}
        >
          <li>
            <strong>Compreensão de documentos:</strong> O GPT-4V consegue ler
            uma tabela de resultados financeiros numa imagem e responder a
            perguntas de análise — sem OCR explícito.
          </li>
          <li>
            <strong>Radiologia:</strong> Modelos fine-tuned em datasets como
            CheXpert geram relatórios de radiografia torácica com sensibilidade
            diagnóstica comparável a radiologistas júnior.
          </li>
          <li>
            <strong>Screenshot-to-code:</strong> Ferramentas como o Claude (com
            visão) e o GPT-4V convertem capturas de ecrã de interfaces em
            HTML/CSS/React em segundos.
          </li>
          <li>
            <strong>Análise de vídeo:</strong> O Gemini 1.5 Pro pode ser
            questionado sobre eventos específicos num vídeo de 45 minutos sem
            necessidade de transcrição prévia.
          </li>
        </ul>
      </section>

      <hr style={S.divider} />

      {/* ── Section 7 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Limitações e Desafios</h2>

        <p style={S.p}>
          Apesar dos progressos impressionantes, os LLMs multimodais têm
          limitações estruturais que é importante compreender antes de os
          deploiar em aplicações críticas. Muitas destas limitações são
          distintas das dos LLMs textuais e requerem benchmarks e avaliações
          específicas.
        </p>

        <h3 style={S.h3}>Alucinação em Visual Grounding</h3>
        <p style={S.p}>
          Os modelos multimodais "alucinam" objectos visuais — descrevem
          elementos que não existem na imagem. O benchmark POPE (Polling-based
          Object Probing Evaluation) mede este fenómeno através de perguntas
          binárias ("existe um cão nesta imagem?"). Modelos como LLaVA-1.5-13B
          atingem ~85-87% de accuracy no POPE, mas ainda falham em ~13-15% das
          perguntas com objectos ausentes.
        </p>

        <h3 style={S.h3}>Raciocínio Espacial e Posicional</h3>
        <p style={S.p}>
          Perguntas sobre relações espaciais ("o copo está à esquerda ou à
          direita da garrafa?") são surpreendentemente difíceis para modelos
          baseados em ViT. A representação em patches não preserva de forma
          explícita a geometria relativa entre objectos afastados na imagem.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Desafio</th>
              <th style={S.th}>Exemplo</th>
              <th style={S.th}>Estado da Arte</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>
                <strong>Alucinação visual</strong>
              </td>
              <td style={S.td}>
                Modelo descreve um objecto ausente com confiança
              </td>
              <td style={S.td}>POPE benchmark; mitigação por RLHF visual</td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Raciocínio espacial</strong>
              </td>
              <td style={S.td}>
                "Qual o elemento no canto superior esquerdo?"
              </td>
              <td style={S.td}>
                CV-Bench; arquitecturas com coordenadas explícitas
              </td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>OCR a baixa resolução</strong>
              </td>
              <td style={S.td}>Texto em imagens comprimidas ou manuscrito</td>
              <td style={S.td}>TextVQA; resolução dinâmica (tiling)</td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Inferência cara</strong>
              </td>
              <td style={S.td}>
                Uma imagem 1080p gera 1000+ tokens adicionais
              </td>
              <td style={S.td}>
                Token compression (LLaVA-PruMerge), token merging
              </td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Contagem de objectos</strong>
              </td>
              <td style={S.td}>"Quantas pessoas há nesta imagem?"</td>
              <td style={S.td}>CountBench; ainda limitado em cenas densas</td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Composição de atributos</strong>
              </td>
              <td style={S.td}>"O cubo azul à esquerda da esfera vermelha"</td>
              <td style={S.td}>Winoground; CLIP tem limitações conhecidas</td>
            </tr>
          </tbody>
        </table>

        <div style={S.highlight}>
          <strong>Problema de avaliação:</strong> Muitos benchmarks visuais são
          resolvíveis com raciocínio puramente textual (a resposta está no texto
          da pergunta). Benchmarks como o Winoground e o MMVP foram concebidos
          para exigir compreensão visual genuína — e revelam limitações
          significativas mesmo nos modelos mais avançados.
        </div>
      </section>
    </div>
  );
}
