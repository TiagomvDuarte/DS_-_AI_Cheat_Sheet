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

export default function LLM9() {
  return (
    <div style={S.page}>
      <Link to="/llm" style={S.back}>
        <ArrowLeft size={16} /> Voltar aos módulos
      </Link>

      <span style={S.tag}>MÓDULO 09</span>
      <h1 style={S.h1}>Avaliação de LLMs</h1>

      {/* ── Section 1 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Taxonomia de Avaliação</h2>

        <p style={S.p}>
          A avaliação de LLMs organiza-se em três paradigmas fundamentais, cada
          um com vantagens e limitações distintas. A escolha depende do
          objectivo — medir capacidades brutas, alinhar com preferências humanas
          ou escalar a avaliação sem custo humano.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 290" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker
                id="arr9a"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
              </marker>
            </defs>
            {/* Column 1: Automated */}
            <rect
              x="20"
              y="20"
              width="210"
              height="240"
              rx="12"
              fill="rgba(74,158,237,0.08)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text
              x="125"
              y="48"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fill="#4a9eed"
            >
              Automatizado
            </text>
            <text
              x="125"
              y="68"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              Benchmarks padronizados
            </text>
            <line
              x1="40"
              y1="78"
              x2="210"
              y2="78"
              stroke="#4a9eed"
              strokeWidth="0.8"
              strokeOpacity="0.4"
            />
            <text x="35" y="100" fontSize="10" fill="#4a9eed">
              ✓ Reprodutível
            </text>
            <text x="35" y="118" fontSize="10" fill="#4a9eed">
              ✓ Escalável / barato
            </text>
            <text x="35" y="136" fontSize="10" fill="#4a9eed">
              ✓ Comparável entre modelos
            </text>
            <text x="35" y="162" fontSize="10" fill="#4a9eed">
              ✗ Saturação de benchmarks
            </text>
            <text x="35" y="180" fontSize="10" fill="#4a9eed">
              ✗ Não mede alinhamento
            </text>
            <text x="35" y="198" fontSize="10" fill="#4a9eed">
              ✗ Contamination do treino
            </text>

            {/* Column 2: Human */}
            <rect
              x="275"
              y="20"
              width="210"
              height="240"
              rx="12"
              fill="rgba(74,158,237,0.10)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text
              x="380"
              y="48"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fill="#4a9eed"
            >
              Humana
            </text>
            <text
              x="380"
              y="68"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              Anotadores e utilizadores reais
            </text>
            <line
              x1="295"
              y1="78"
              x2="465"
              y2="78"
              stroke="#4a9eed"
              strokeWidth="0.8"
              strokeOpacity="0.4"
            />
            <text x="290" y="100" fontSize="10" fill="#4a9eed">
              ✓ Captura nuances reais
            </text>
            <text x="290" y="118" fontSize="10" fill="#4a9eed">
              ✓ Reflecte preferências
            </text>
            <text x="290" y="136" fontSize="10" fill="#4a9eed">
              ✓ Detecta falhas subtis
            </text>
            <text x="290" y="162" fontSize="10" fill="#4a9eed">
              ✗ Caro e lento
            </text>
            <text x="290" y="180" fontSize="10" fill="#4a9eed">
              ✗ Alta variância entre anotadores
            </text>
            <text x="290" y="198" fontSize="10" fill="#4a9eed">
              ✗ Não escala
            </text>

            {/* Column 3: LLM-as-Judge */}
            <rect
              x="530"
              y="20"
              width="210"
              height="240"
              rx="12"
              fill="rgba(74,158,237,0.10)"
              stroke={color}
              strokeWidth="1.5"
            />
            <text
              x="635"
              y="48"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fill={color}
            >
              LLM-as-Judge
            </text>
            <text
              x="635"
              y="68"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              Modelo avalia modelo
            </text>
            <line
              x1="550"
              y1="78"
              x2="720"
              y2="78"
              stroke={color}
              strokeWidth="0.8"
              strokeOpacity="0.4"
            />
            <text x="545" y="100" fontSize="10" fill="#4a9eed">
              ✓ Escalável como automático
            </text>
            <text x="545" y="118" fontSize="10" fill="#4a9eed">
              ✓ Captura qualidade aberta
            </text>
            <text x="545" y="136" fontSize="10" fill="#4a9eed">
              ✓ Feedback detalhado
            </text>
            <text x="545" y="162" fontSize="10" fill="#4a9eed">
              ✗ Viés de posição / verbosidade
            </text>
            <text x="545" y="180" fontSize="10" fill="#4a9eed">
              ✗ Auto-enhancement bias
            </text>
            <text x="545" y="198" fontSize="10" fill="#4a9eed">
              ✗ Dependente do juíz
            </text>

            <text
              x="380"
              y="282"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              Os três paradigmas são complementares — nenhum é suficiente
              isolado
            </text>
          </svg>
        </div>

        <h3 style={S.h3}>Tipos de Avaliação por Objectivo</h3>
        <p style={S.p}>
          Além do paradigma (como se avalia), importa distinguir o que se
          avalia:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Pergunta Central</th>
              <th style={S.th}>Exemplos de Métrica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>
                <strong>Capability Eval</strong>
              </td>
              <td style={S.td}>O modelo consegue fazer X?</td>
              <td style={S.td}>MMLU accuracy, HumanEval pass@1, GSM8K</td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Alignment Eval</strong>
              </td>
              <td style={S.td}>
                O modelo age de acordo com intenções humanas?
              </td>
              <td style={S.td}>
                MT-Bench, Chatbot Arena ELO, preferências par-a-par
              </td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Safety Eval</strong>
              </td>
              <td style={S.td}>
                O modelo recusa pedidos perigosos e evita danos?
              </td>
              <td style={S.td}>HarmBench, ToxiGen, BBQ, refusal rate</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          <strong>Data contamination:</strong> Quando os dados de benchmark
          aparecem no pré-treino do modelo, os resultados inflacionam
          artificialmente. Modelos modernos são avaliados em benchmarks mantidos
          privados ou gerados dinamicamente para mitigar este problema.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 2 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Benchmarks de Capacidade</h2>

        <p style={S.p}>
          Os benchmarks de capacidade testam se o modelo domina tarefas bem
          definidas com respostas verificáveis automaticamente. São a espinha
          dorsal das comparações públicas entre modelos, mas sofrem de saturação
          progressiva à medida que modelos melhores os dominam.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Benchmark</th>
              <th style={S.th}>Domínio</th>
              <th style={S.th}>Métrica</th>
              <th style={S.th}>Limitação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>
                <strong>MMLU</strong>
              </td>
              <td style={S.td}>57 disciplinas académicas (4-choice)</td>
              <td style={S.td}>Accuracy</td>
              <td style={S.td}>
                Contamination elevada; modelos próximos do tecto
              </td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>HumanEval</strong>
              </td>
              <td style={S.td}>164 problemas de programação Python</td>
              <td style={S.td}>pass@k</td>
              <td style={S.td}>
                Pequeno; apenas Python; sem testes de integração
              </td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>GSM8K</strong>
              </td>
              <td style={S.td}>Raciocínio matemático (ensino básico)</td>
              <td style={S.td}>Accuracy</td>
              <td style={S.td}>Saturado por modelos recentes (&gt;95%)</td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>HellaSwag</strong>
              </td>
              <td style={S.td}>Senso comum / continuação de texto</td>
              <td style={S.td}>Accuracy</td>
              <td style={S.td}>Saturado; não distingue modelos de topo</td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>TruthfulQA</strong>
              </td>
              <td style={S.td}>Resistência a afirmações falsas populares</td>
              <td style={S.td}>% respostas verídicas</td>
              <td style={S.td}>Subjectivo; depende do julgador</td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>ARC</strong>
              </td>
              <td style={S.td}>Raciocínio científico (múltipla escolha)</td>
              <td style={S.td}>Accuracy (Easy/Challenge)</td>
              <td style={S.td}>Domínio restrito; sem raciocínio aberto</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Fórmula pass@k (HumanEval)</h3>
        <p style={S.p}>
          O HumanEval usa a métrica pass@k: dado que geramos{' '}
          <InlineMath math={'n'} /> soluções e <InlineMath math={'c'} /> passam
          nos testes, qual a probabilidade de pelo menos uma das{' '}
          <InlineMath math={'k'} /> amostras escolhidas ser correcta?
        </p>
        <div style={S.math}>
          <BlockMath
            math={'\\text{pass@}k = 1 - \\frac{\\binom{n-c}{k}}{\\binom{n}{k}}'}
          />
        </div>
        <p style={S.p}>
          Esta formulação é numericamente estável e não requer amostragem
          aleatória de <InlineMath math={'k'} /> soluções. Tipicamente usa-se{' '}
          <InlineMath math={'n=200'} /> e reporta-se pass@1, pass@10 e pass@100.
        </p>

        <h3 style={S.h3}>Comparação Visual entre Modelos</h3>
        <div style={S.diagram}>
          <svg viewBox="0 0 560 340" width="100%" style={{ display: 'block' }}>
            {/* Radar chart mockup — hexagonal */}
            {/* Centre */}
            {(() => {
              const cx = 280,
                cy = 170,
                r = 120;
              const labels = [
                'MMLU',
                'HumanEval',
                'GSM8K',
                'HellaSwag',
                'TruthfulQA',
              ];
              const angles = labels.map(
                (_, i) => (Math.PI * 2 * i) / labels.length - Math.PI / 2,
              );
              const modelA = [0.86, 0.72, 0.91, 0.95, 0.6];
              const modelB = [0.75, 0.55, 0.78, 0.88, 0.52];

              const pt = (val, ai) => ({
                x: cx + val * r * Math.cos(angles[ai]),
                y: cy + val * r * Math.sin(angles[ai]),
              });

              const gridLevels = [0.25, 0.5, 0.75, 1.0];

              return (
                <>
                  {/* Grid circles */}
                  {gridLevels.map((lv, gi) => (
                    <polygon
                      key={gi}
                      points={angles
                        .map(
                          (a) =>
                            `${cx + lv * r * Math.cos(a)},${cy + lv * r * Math.sin(a)}`,
                        )
                        .join(' ')}
                      fill="none"
                      stroke="var(--text-secondary)"
                      strokeWidth="1"
                    />
                  ))}
                  {/* Spokes */}
                  {angles.map((a, i) => (
                    <line
                      key={i}
                      x1={cx}
                      y1={cy}
                      x2={cx + r * Math.cos(a)}
                      y2={cy + r * Math.sin(a)}
                      stroke="var(--text-secondary)"
                      strokeWidth="1"
                    />
                  ))}
                  {/* Model A fill — orange */}
                  <polygon
                    points={modelA
                      .map((v, i) => `${pt(v, i).x},${pt(v, i).y}`)
                      .join(' ')}
                    fill="rgba(74,158,237,0.18)"
                    stroke="#4a9eed"
                    strokeWidth="2.5"
                  />
                  {/* Model B fill — amber */}
                  <polygon
                    points={modelB
                      .map((v, i) => `${pt(v, i).x},${pt(v, i).y}`)
                      .join(' ')}
                    fill="rgba(2,132,199,0.18)"
                    stroke="#0284c7"
                    strokeWidth="2.5"
                  />
                  {/* Labels */}
                  {labels.map((lb, i) => {
                    const lx = cx + (r + 22) * Math.cos(angles[i]);
                    const ly = cy + (r + 22) * Math.sin(angles[i]);
                    return (
                      <text
                        key={i}
                        x={lx}
                        y={ly + 4}
                        textAnchor="middle"
                        fontSize="11"
                        fontWeight="600"
                        fill="var(--text-primary)"
                      >
                        {lb}
                      </text>
                    );
                  })}
                  {/* Legend */}
                  <rect
                    x="30"
                    y="290"
                    width="12"
                    height="12"
                    fill="rgba(74,158,237,0.18)"
                    stroke="#4a9eed"
                    strokeWidth="1.5"
                    rx="2"
                  />
                  <text x="48" y="301" fontSize="11" fill="var(--text-primary)">
                    Modelo A
                  </text>
                  <rect
                    x="120"
                    y="290"
                    width="12"
                    height="12"
                    fill="rgba(2,132,199,0.18)"
                    stroke="#0284c7"
                    strokeWidth="1.5"
                    rx="2"
                  />
                  <text
                    x="138"
                    y="301"
                    fontSize="11"
                    fill="var(--text-primary)"
                  >
                    Modelo B
                  </text>
                  <text
                    x="280"
                    y="325"
                    textAnchor="middle"
                    fontSize="10"
                    fill="var(--text-secondary)"
                  >
                    Perfil de desempenho relativo em 5 benchmarks
                  </text>
                </>
              );
            })()}
          </svg>
        </div>

        <div style={S.note}>
          <strong>Saturação de benchmarks:</strong> O MMLU ultrapassou 90% de
          accuracy em vários modelos de topo — bem acima do desempenho humano
          médio. Benchmarks mais difíceis como GPQA (graduate-level science) e
          FrontierMath foram criados para manter a discriminação entre gerações
          de modelos.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. LLM-as-Judge</h2>

        <p style={S.p}>
          O paradigma LLM-as-Judge usa um modelo de linguagem capaz (tipicamente
          GPT-4 ou equivalente) para avaliar as respostas de outro modelo.
          Permite avaliação em escala de respostas abertas, algo impossível com
          métricas automáticas clássicas como BLEU ou ROUGE.
        </p>

        <h3 style={S.h3}>MT-Bench e Chatbot Arena</h3>
        <p style={S.p}>
          O <strong>MT-Bench</strong> (Zheng et al., 2023) consiste em 80
          perguntas de multi-turn em 8 categorias, avaliadas por GPT-4 numa
          escala de 1 a 10. O <strong>Chatbot Arena</strong>
          recolhe preferências humanas em pares anónimos de modelos e calcula
          ratings ELO.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 200" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker
                id="arr9b"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
              </marker>
            </defs>
            {/* Prompt */}
            <rect
              x="20"
              y="70"
              width="140"
              height="55"
              rx="10"
              fill="rgba(74,158,237,0.10)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text
              x="90"
              y="94"
              textAnchor="middle"
              fontSize="12"
              fontWeight="700"
              fill="#4a9eed"
            >
              Prompt
            </text>
            <text
              x="90"
              y="112"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              Pergunta / tarefa
            </text>

            {/* LLM Judge */}
            <rect
              x="300"
              y="70"
              width="160"
              height="55"
              rx="10"
              fill="rgba(74,158,237,0.10)"
              stroke={color}
              strokeWidth="1.5"
            />
            <text
              x="380"
              y="94"
              textAnchor="middle"
              fontSize="12"
              fontWeight="700"
              fill={color}
            >
              LLM Judge
            </text>
            <text
              x="380"
              y="112"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              GPT-4 / Claude
            </text>

            {/* Score */}
            <rect
              x="590"
              y="40"
              width="150"
              height="50"
              rx="10"
              fill="rgba(2,132,199,0.10)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text
              x="665"
              y="61"
              textAnchor="middle"
              fontSize="12"
              fontWeight="700"
              fill="#4a9eed"
            >
              Score 1–10
            </text>
            <text
              x="665"
              y="79"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              Classificação numérica
            </text>

            {/* Critique */}
            <rect
              x="590"
              y="110"
              width="150"
              height="50"
              rx="10"
              fill="rgba(125,211,252,0.1)"
              stroke="#0284c7"
              strokeWidth="1.5"
            />
            <text
              x="665"
              y="131"
              textAnchor="middle"
              fontSize="12"
              fontWeight="700"
              fill="#4a9eed"
            >
              Crítica
            </text>
            <text
              x="665"
              y="149"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              Justificação textual
            </text>

            {/* Arrows */}
            <line
              x1="160"
              y1="97"
              x2="296"
              y2="97"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr9b)"
            />
            <line
              x1="460"
              y1="82"
              x2="586"
              y2="65"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr9b)"
            />
            <line
              x1="460"
              y1="112"
              x2="586"
              y2="132"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr9b)"
            />

            {/* Bias warnings */}
            <text
              x="90"
              y="155"
              textAnchor="middle"
              fontSize="9"
              fill="#4a9eed"
              fontWeight="600"
            >
              {' '}
              Position Bias
            </text>
            <text
              x="90"
              y="168"
              textAnchor="middle"
              fontSize="9"
              fill="#4a9eed"
            >
              1ª resposta favorecida
            </text>
            <text
              x="380"
              y="155"
              textAnchor="middle"
              fontSize="9"
              fill="#0284c7"
              fontWeight="600"
            >
              {' '}
              Verbosity Bias
            </text>
            <text
              x="380"
              y="168"
              textAnchor="middle"
              fontSize="9"
              fill="#0284c7"
            >
              respostas longas pontuam mais
            </text>
          </svg>
        </div>

        <h3 style={S.h3}>Vieses do LLM-as-Judge</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Viés</th>
              <th style={S.th}>Descrição</th>
              <th style={S.th}>Mitigação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>
                <strong>Position Bias</strong>
              </td>
              <td style={S.td}>
                O juíz favorece consistentemente a primeira (ou última) resposta
                apresentada no par
              </td>
              <td style={S.td}>
                Apresentar as duas ordens e fazer média; usar avaliação absoluta
                em vez de pairwise
              </td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Verbosity Bias</strong>
              </td>
              <td style={S.td}>
                Respostas mais longas recebem scores mais altos mesmo sem ser
                melhores
              </td>
              <td style={S.td}>
                Instruções explícitas no prompt do juíz; normalizar por tamanho
              </td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Self-Enhancement Bias</strong>
              </td>
              <td style={S.td}>
                Um modelo favorece respostas geradas por si próprio ou por
                modelos semelhantes
              </td>
              <td style={S.td}>
                Usar juíz diferente do modelo avaliado; validar com avaliação
                humana cruzada
              </td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Sistema ELO no Chatbot Arena</h3>
        <p style={S.p}>
          O Chatbot Arena calcula ratings ELO a partir de milhões de comparações
          par-a-par. A probabilidade esperada de vitória do modelo A contra B é:
        </p>
        <div style={S.math}>
          <BlockMath math={'E_A = \\frac{1}{1+10^{(R_B-R_A)/400}}'} />
        </div>
        <p style={S.p}>
          Após cada duelo, os ratings actualizam-se com factor K:{' '}
          <InlineMath math={"R_A' = R_A + K(S_A - E_A)"} />, onde{' '}
          <InlineMath math={'S_A = 1'} /> em vitória,{' '}
          <InlineMath math={'0.5'} /> em empate e <InlineMath math={'0'} /> em
          derrota. O sistema converge para um ranking estável com milhares de
          comparações.
        </p>

        <div style={S.note}>
          <strong>Meta-avaliação:</strong> A correlação entre LLM judges e
          anotadores humanos é tipicamente 0.8–0.9 para GPT-4, mas cai
          significativamente em domínios especializados como código ou
          matemática avançada, onde o juíz pode não ter expertise suficiente.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 4 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Avaliação de RAG — RAGAS</h2>

        <p style={S.p}>
          O framework RAGAS (Retrieval-Augmented Generation Assessment) avalia
          sistemas RAG decompondo a qualidade em quatro métricas ortogonais que
          cobrem tanto o retriever como o gerador. Cada métrica é calculada
          usando um LLM como juíz, sem necessitar de respostas de referência
          para todas as métricas.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 280" width="100%" style={{ display: 'block' }}>
            {/* 2x2 grid */}
            {/* Cell 1: Faithfulness */}
            <rect
              x="20"
              y="20"
              width="350"
              height="120"
              rx="12"
              fill="rgba(74,158,237,0.10)"
              stroke={color}
              strokeWidth="1.5"
            />
            <text
              x="195"
              y="48"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fill={color}
            >
              Faithfulness
            </text>
            <text
              x="195"
              y="68"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              Fidelidade ao contexto recuperado
            </text>
            <text x="35" y="90" fontSize="10" fill="var(--text-primary)">
              Fórmula: afirmações suportadas pelo contexto
            </text>
            <text x="35" y="108" fontSize="10" fill="var(--text-primary)">
              ÷ total de afirmações na resposta
            </text>
            <text x="35" y="124" fontSize="10" fill="var(--text-secondary)">
              Detecta alucinações em relação ao contexto
            </text>

            {/* Cell 2: Answer Relevancy */}
            <rect
              x="390"
              y="20"
              width="350"
              height="120"
              rx="12"
              fill="rgba(74,158,237,0.10)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text
              x="565"
              y="48"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fill="#4a9eed"
            >
              Answer Relevancy
            </text>
            <text
              x="565"
              y="68"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              Relevância da resposta face à pergunta
            </text>
            <text x="405" y="90" fontSize="10" fill="var(--text-primary)">
              Fórmula: similaridade cosseno entre perguntas
            </text>
            <text x="405" y="108" fontSize="10" fill="var(--text-primary)">
              geradas a partir da resposta e a pergunta original
            </text>
            <text x="405" y="124" fontSize="10" fill="var(--text-secondary)">
              Penaliza respostas incompletas ou tangenciais
            </text>

            {/* Cell 3: Context Precision */}
            <rect
              x="20"
              y="150"
              width="350"
              height="120"
              rx="12"
              fill="rgba(2,132,199,0.10)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text
              x="195"
              y="178"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fill="#4a9eed"
            >
              Context Precision
            </text>
            <text
              x="195"
              y="198"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              Precisão do contexto recuperado
            </text>
            <text x="35" y="220" fontSize="10" fill="var(--text-primary)">
              Fórmula: chunks relevantes recuperados
            </text>
            <text x="35" y="238" fontSize="10" fill="var(--text-primary)">
              ÷ total de chunks recuperados
            </text>
            <text x="35" y="254" fontSize="10" fill="var(--text-secondary)">
              Avalia o sinal-ruído do retriever
            </text>

            {/* Cell 4: Context Recall */}
            <rect
              x="390"
              y="150"
              width="350"
              height="120"
              rx="12"
              fill="rgba(125,211,252,0.10)"
              stroke="#0284c7"
              strokeWidth="1.5"
            />
            <text
              x="565"
              y="178"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fill="#4a9eed"
            >
              Context Recall
            </text>
            <text
              x="565"
              y="198"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              Cobertura do contexto necessário
            </text>
            <text x="405" y="220" fontSize="10" fill="var(--text-primary)">
              Fórmula: sentenças da resposta de referência
            </text>
            <text x="405" y="238" fontSize="10" fill="var(--text-primary)">
              atribuíveis ao contexto ÷ total de sentenças
            </text>
            <text x="405" y="254" fontSize="10" fill="var(--text-secondary)">
              Requer ground-truth; detecta gaps de retrieval
            </text>
          </svg>
        </div>

        <h3 style={S.h3}>Avaliação End-to-End vs. Componente</h3>
        <p style={S.p}>A avaliação de RAG pode ser feita a dois níveis:</p>
        <ul
          style={{
            color: 'var(--text-primary)',
            lineHeight: 1.9,
            paddingLeft: '1.5rem',
            marginBottom: '1rem',
          }}
        >
          <li>
            <strong>End-to-end:</strong> mede a qualidade da resposta final face
            à pergunta original. Simples, mas não indica qual componente falhou
            (retriever ou gerador).
          </li>
          <li>
            <strong>Componente:</strong> avalia retriever e gerador
            separadamente. Context Precision/Recall avaliam o retriever;
            Faithfulness/Answer Relevancy avaliam o gerador dado o contexto.
          </li>
        </ul>

        <div style={S.note}>
          Context Precision e Context Recall não requerem respostas de
          referência — usam um LLM juíz. Context Recall requer uma resposta
          ground-truth para comparação, tornando-a dependente de conjuntos de
          teste anotados.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 5 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Avaliação de Safety &amp; Alignment</h2>

        <p style={S.p}>
          A avaliação de safety mede se um modelo evita danos reais, recusa
          pedidos maliciosos e não amplifica vieses sociais. É uma área em
          rápida evolução, com benchmarks específicos para diferentes tipos de
          risco.
        </p>

        <h3 style={S.h3}>Benchmarks de Bias e Toxicidade</h3>
        <p style={S.p}>
          Os principais benchmarks de bias e toxicidade cobrem riscos distintos:
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
            <strong>BBQ (Bias Benchmark for QA):</strong> 58 880 perguntas de
            múltipla escolha que testam viés social em 11 categorias (raça,
            género, religião, etc.) em contextos ambíguos e não-ambíguos.
          </li>
          <li>
            <strong>ToxiGen:</strong> 274 000 frases sobre 13 grupos
            minoritários, metade implicitamente tóxicas, geradas por GPT-3.
            Testa a capacidade de classificar toxicidade subtil.
          </li>
          <li>
            <strong>WinoBias:</strong> Pares de frases que testam associações de
            género com profissões (e.g., "O médico... ela" vs "A enfermeira...
            ele"). Mede co-reference resolution com viés de género.
          </li>
        </ul>

        <h3 style={S.h3}>Pipeline de Red-Team Automatizado</h3>
        <div style={S.diagram}>
          <svg viewBox="0 0 760 200" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker
                id="arr9c"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
              </marker>
            </defs>
            {/* Step boxes */}
            <rect
              x="10"
              y="70"
              width="110"
              height="55"
              rx="8"
              fill="rgba(74,158,237,0.10)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text
              x="65"
              y="94"
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              fill="#4a9eed"
            >
              Human
            </text>
            <text
              x="65"
              y="108"
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              fill="#4a9eed"
            >
              Red-Teamers
            </text>

            <rect
              x="150"
              y="70"
              width="110"
              height="55"
              rx="8"
              fill="rgba(125,211,252,0.10)"
              stroke="#0284c7"
              strokeWidth="1.5"
            />
            <text
              x="205"
              y="94"
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              fill="#4a9eed"
            >
              Attack
            </text>
            <text
              x="205"
              y="108"
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              fill="#4a9eed"
            >
              Prompts
            </text>

            <rect
              x="290"
              y="70"
              width="110"
              height="55"
              rx="8"
              fill="rgba(74,158,237,0.10)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text
              x="345"
              y="94"
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              fill="#4a9eed"
            >
              Model
            </text>
            <text
              x="345"
              y="108"
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              fill="#4a9eed"
            >
              Response
            </text>

            <rect
              x="430"
              y="70"
              width="110"
              height="55"
              rx="8"
              fill="rgba(74,158,237,0.10)"
              stroke={color}
              strokeWidth="1.5"
            />
            <text
              x="485"
              y="94"
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              fill={color}
            >
              Classifier
            </text>
            <text
              x="485"
              y="108"
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              fill={color}
            >
              (LLM / rule)
            </text>

            <rect
              x="570"
              y="70"
              width="110"
              height="55"
              rx="8"
              fill="rgba(2,132,199,0.10)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text
              x="625"
              y="94"
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              fill="#4a9eed"
            >
              Harm Score
            </text>
            <text
              x="625"
              y="108"
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              fill="#4a9eed"
            >
              + Aggregate
            </text>

            {/* Arrows */}
            <line
              x1="120"
              y1="97"
              x2="146"
              y2="97"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr9c)"
            />
            <line
              x1="260"
              y1="97"
              x2="286"
              y2="97"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr9c)"
            />
            <line
              x1="400"
              y1="97"
              x2="426"
              y2="97"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr9c)"
            />
            <line
              x1="540"
              y1="97"
              x2="566"
              y2="97"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr9c)"
            />

            {/* Feedback loop */}
            <path
              d="M625,125 L625,170 L205,170 L205,129"
              fill="none"
              stroke="#4a9eed"
              strokeWidth="1.5"
              strokeDasharray="5,3"
              markerEnd="url(#arr9c)"
            />
            <text
              x="415"
              y="186"
              textAnchor="middle"
              fontSize="9"
              fill="#4a9eed"
            >
              Refinar ataques com base nos resultados
            </text>
          </svg>
        </div>

        <h3 style={S.h3}>Trade-off: Safety vs. Utilidade</h3>
        <p style={S.p}>
          A avaliação de safety envolve um trade-off fundamental: um modelo
          demasiado conservador recusa pedidos legítimos (over-refusal),
          enquanto um modelo permissivo permite danos. As três métricas chave
          são:
        </p>
        <div style={S.highlight}>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 2 }}>
            <li>
              <strong>Refusal Rate:</strong> percentagem de pedidos
              (potencialmente) maliciosos recusados. Alta é bom para safety.
            </li>
            <li>
              <strong>Jailbreak Success Rate:</strong> percentagem de ataques
              adversariais que contornam as salvaguardas. Baixa é melhor.
            </li>
            <li>
              <strong>Over-Refusal Rate:</strong> percentagem de pedidos
              legítimos incorrectamente recusados. Alta degrada utilidade.
            </li>
          </ul>
        </div>

        <div style={S.diagram}>
          <svg viewBox="0 0 500 280" width="100%" style={{ display: 'block' }}>
            {/* Axes */}
            <line
              x1="60"
              y1="220"
              x2="440"
              y2="220"
              stroke="var(--text-secondary)"
              strokeWidth="1.5"
            />
            <line
              x1="60"
              y1="220"
              x2="60"
              y2="30"
              stroke="var(--text-secondary)"
              strokeWidth="1.5"
            />

            {/* Curve: safety-helpfulness tradeoff */}
            <path
              d="M80,60 C120,62 160,75 200,100 C240,125 280,160 340,195 C370,210 400,218 430,220"
              fill="none"
              stroke={color}
              strokeWidth="2.5"
            />

            {/* Ideal point */}
            <circle cx="220" cy="113" r="6" fill={color} />
            <text x="232" y="109" fontSize="10" fill={color} fontWeight="600">
              Ponto ideal
            </text>

            {/* Axis labels */}
            <text
              x="250"
              y="240"
              textAnchor="middle"
              fontSize="11"
              fill="var(--text-secondary)"
            >
              Utilidade / Helpfulness →
            </text>
            <text
              x="20"
              y="130"
              fontSize="11"
              fill="var(--text-secondary)"
              transform="rotate(-90,20,130)"
              textAnchor="middle"
            >
              Safety →
            </text>

            {/* Corner labels */}
            <text x="75" y="38" fontSize="10" fill="#4a9eed">
              Over-safe
            </text>
            <text x="75" y="50" fontSize="10" fill="#4a9eed">
              (over-refusal)
            </text>
            <text x="360" y="185" fontSize="10" fill="#4a9eed">
              Over-permissive
            </text>
            <text x="360" y="197" fontSize="10" fill="#4a9eed">
              (jailbreaks)
            </text>

            <text
              x="250"
              y="265"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              Trade-off entre safety e helpfulness — a curva define o Pareto
              óptimo
            </text>
          </svg>
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Avaliação em Produção</h2>

        <p style={S.p}>
          A avaliação em produção complementa os benchmarks offline com sinais
          reais de utilização. É a única forma de medir se o modelo funciona bem
          no contexto específico de uma aplicação, com utilizadores reais e
          inputs não antecipados.
        </p>

        <h3 style={S.h3}>Métricas de Sistema</h3>
        <p style={S.p}>
          As métricas operacionais são monitoradas continuamente em produção:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Métrica</th>
              <th style={S.th}>Definição</th>
              <th style={S.th}>Alvo Típico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>
                <strong>Latência p50</strong>
              </td>
              <td style={S.td}>Mediana do tempo até primeiro token (TTFT)</td>
              <td style={S.td}>&lt; 500 ms</td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Latência p99</strong>
              </td>
              <td style={S.td}>Percentil 99 — cauda de latência</td>
              <td style={S.td}>&lt; 3 s</td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Tokens/segundo</strong>
              </td>
              <td style={S.td}>Taxa de geração de tokens de output</td>
              <td style={S.td}>30–100 tok/s (depende do modelo)</td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Custo por 1k tokens</strong>
              </td>
              <td style={S.td}>
                Custo total (input + output) por 1 000 tokens
              </td>
              <td style={S.td}>Varia por modelo e fornecedor</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Sinais de Utilizador</h3>
        <p style={S.p}>
          Os utilizadores fornecem feedback implícito e explícito que serve como
          proxy de qualidade:
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
            <strong>Thumbs up/down rate:</strong> feedback explícito, mas taxa
            de resposta tipicamente baixa (1–5%).
          </li>
          <li>
            <strong>Regeneration rate:</strong> percentagem de respostas em que
            o utilizador clica "regenerar" — sinal forte de insatisfação.
          </li>
          <li>
            <strong>Conversation length:</strong> conversas mais longas indicam
            engagement; abandono precoce indica falha.
          </li>
          <li>
            <strong>Task completion rate:</strong> em assistentes orientados a
            tarefas, se o utilizador completa o objectivo sem escalar para
            suporte humano.
          </li>
        </ul>

        <h3 style={S.h3}>A/B Testing de LLMs</h3>
        <p style={S.p}>
          O A/B testing permite comparar dois modelos (ou versões) em produção
          com significância estatística. O tráfego é dividido aleatoriamente
          entre as variantes e os sinais de utilizador são comparados:
        </p>
        <div style={S.highlight}>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 2 }}>
            <li>
              <strong>Split de tráfego:</strong> tipicamente 90/10 ou 95/5 para
              minimizar exposição de utilizadores à variante experimental.
            </li>
            <li>
              <strong>Significância estatística:</strong> testar com p &lt; 0.05
              e poder estatístico ≥ 0.8. Com taxas de evento baixas (e.g.,
              thumbs-up ~2%), são necessários centenas de milhares de
              impressões.
            </li>
            <li>
              <strong>Métricas guardrail:</strong> além da métrica primária,
              monitorar métricas de safety e latência para não degradá-las.
            </li>
          </ul>
        </div>

        <h3 style={S.h3}>Loop de Avaliação em Produção</h3>
        <div style={S.diagram}>
          <svg viewBox="0 0 760 230" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker
                id="arr9d"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
              </marker>
            </defs>
            {/* Nodes */}
            <rect
              x="20"
              y="80"
              width="120"
              height="50"
              rx="10"
              fill="rgba(74,158,237,0.10)"
              stroke={color}
              strokeWidth="1.5"
            />
            <text
              x="80"
              y="101"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill={color}
            >
              Deploy
            </text>
            <text
              x="80"
              y="118"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              Novo modelo/versão
            </text>

            <rect
              x="185"
              y="80"
              width="130"
              height="50"
              rx="10"
              fill="rgba(74,158,237,0.10)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text
              x="250"
              y="101"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="#4a9eed"
            >
              Traffic Split
            </text>
            <text
              x="250"
              y="118"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              A/B routing
            </text>

            <rect
              x="365"
              y="80"
              width="130"
              height="50"
              rx="10"
              fill="rgba(2,132,199,0.10)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text
              x="430"
              y="101"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="#4a9eed"
            >
              Collect Signals
            </text>
            <text
              x="430"
              y="118"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              Logs, feedback, métricas
            </text>

            <rect
              x="545"
              y="80"
              width="120"
              height="50"
              rx="10"
              fill="rgba(125,211,252,0.10)"
              stroke="#0284c7"
              strokeWidth="1.5"
            />
            <text
              x="605"
              y="101"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="#4a9eed"
            >
              Analyse
            </text>
            <text
              x="605"
              y="118"
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              Significância estatística
            </text>

            {/* Iterate loop below */}
            <rect
              x="300"
              y="175"
              width="120"
              height="35"
              rx="8"
              fill="rgba(74,158,237,0.10)"
              stroke="#4a9eed"
              strokeWidth="1.5"
            />
            <text
              x="360"
              y="197"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="#4a9eed"
            >
              Iterate
            </text>

            {/* Arrows */}
            <line
              x1="140"
              y1="105"
              x2="181"
              y2="105"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr9d)"
            />
            <line
              x1="315"
              y1="105"
              x2="361"
              y2="105"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr9d)"
            />
            <line
              x1="495"
              y1="105"
              x2="541"
              y2="105"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr9d)"
            />
            <path
              d="M605,130 L605,192 L424,192"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr9d)"
            />
            <path
              d="M300,192 L80,192 L80,134"
              fill="none"
              stroke="#4a9eed"
              strokeWidth="1.5"
              strokeDasharray="5,3"
              markerEnd="url(#arr9d)"
            />

            <text
              x="380"
              y="225"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              Loop de melhoria contínua baseado em sinais de produção
            </text>
          </svg>
        </div>
      </section>
    </div>
  );
}
