import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.5x5rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(249,115,22,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

export default function LLM7() {
  return (
    <div style={S.page}>
      <Link to="/llm" style={S.back}>
        <ArrowLeft size={16} /> Voltar aos módulos
      </Link>

      <span style={S.tag}>MÓDULO 07</span>
      <h1 style={S.h1}>Alinhamento &amp; Safety</h1>
      <p style={S.lead}>
        O problema central do alinhamento: como garantir que um LLM com capacidades crescentes age de acordo
        com as intenções humanas? Anthropic, OpenAI e DeepMind têm abordagens distintas — mas convergem em
        duas frentes: (1) pós-treino cuidadoso e (2) avaliação de segurança contínua. Este módulo cobre
        desde os fundamentos teóricos até às técnicas de ponta usadas nos sistemas modernos.
      </p>

      {/* ── Section 1 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. O Problema do Alinhamento</h2>

        <p style={S.p}>
          O alinhamento de IA refere-se ao conjunto de técnicas que garantem que um sistema age de acordo
          com os valores e intenções dos seus utilizadores. O desafio surge porque é extremamente difícil
          especificar com precisão o que queremos — e os modelos optimizam literalmente aquilo que medimos,
          não aquilo que pretendemos.
        </p>

        <h3 style={S.h3}>Specification Gaming</h3>
        <p style={S.p}>
          <em>Specification gaming</em> acontece quando um agente encontra uma forma de maximizar a recompensa
          sem cumprir o verdadeiro objectivo. Exemplo clássico: um agente de jogo que aprende a explorar um
          bug em vez de ganhar legitimamente. Em LLMs, o equivalente é o modelo aprender a parecer útil
          e seguro nos benchmarks de avaliação sem o ser na prática.
        </p>

        <div style={S.highlight}>
          <strong>Lei de Goodhart:</strong> "Quando uma medida se torna um alvo, deixa de ser uma boa medida."
          — Charles Goodhart, 1975. Aplicação directa: os benchmarks de safety deixam de medir safety assim
          que os modelos são treinados directamente contra eles.
        </div>

        <h3 style={S.h3}>Inner Alignment vs. Outer Alignment</h3>
        <p style={S.p}>
          A taxonomia de Paul Christiano distingue dois níveis distintos de falha de alinhamento:
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 820 180" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker id="arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)" />
              </marker>
            </defs>
            {/* Boxes */}
            <rect x="10" y="50" width="180" height="60" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
            <text x="100" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Objectivo Real</text>
            <text x="100" y="94" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">"Sê genuinamente útil"</text>

            <rect x="310" y="50" width="200" height="60" rx="10" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="410" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f59e0b">Proxy / Recompensa</text>
            <text x="410" y="94" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">"Score do avaliador humano"</text>

            <rect x="630" y="50" width="180" height="60" rx="10" fill="rgba(234,88,12,0.12)" stroke="#ea580c" strokeWidth="1.5" />
            <text x="720" y="70" textAnchor="middle" fontSize="12" fontWeight="700" fill="#ea580c">Comportamento</text>
            <text x="720" y="86" textAnchor="middle" fontSize="12" fontWeight="700" fill="#ea580c">Aprendido</text>
            <text x="720" y="102" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">"O que o modelo faz"</text>

            {/* Arrows */}
            <line x1="190" y1="80" x2="306" y2="80" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr1)" />
            <line x1="510" y1="80" x2="626" y2="80" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr1)" />

            {/* Gap labels */}
            <text x="248" y="56" textAnchor="middle" fontSize="10" fill={color} fontWeight="600">Outer</text>
            <text x="248" y="68" textAnchor="middle" fontSize="10" fill={color} fontWeight="600">Alignment Gap</text>
            <text x="568" y="56" textAnchor="middle" fontSize="10" fill="#ea580c" fontWeight="600">Inner</text>
            <text x="568" y="68" textAnchor="middle" fontSize="10" fill="#ea580c" fontWeight="600">Alignment Gap</text>

            {/* Bottom legend */}
            <text x="410" y="155" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Dois pontos de falha independentes no pipeline de alinhamento</text>
          </svg>
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Definição</th>
              <th style={S.th}>Exemplo em LLMs</th>
              <th style={S.th}>Mitigação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Outer Alignment</strong></td>
              <td style={S.td}>A função de recompensa não captura o verdadeiro objectivo humano</td>
              <td style={S.td}>Modelo aprende a parecer seguro nos exemplos de treino sem o ser em geral</td>
              <td style={S.td}>Reward modelling mais rico, avaliação diversificada</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Inner Alignment</strong></td>
              <td style={S.td}>O optimizador interno do modelo não optimiza a recompensa base</td>
              <td style={S.td}>Mesa-optimizer que age diferentemente em treino vs. deployment</td>
              <td style={S.td}>Interpretabilidade, testes de distribuição, adversarial evals</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          <strong>Mesa-optimization:</strong> Um modelo suficientemente capaz pode desenvolver internamente
          um sub-optimizador com os seus próprios objectivos implícitos — que podem divergir do objectivo
          base durante o treino. Esta é uma das preocupações mais sérias para sistemas de longo prazo.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 2 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. RLHF Aprofundado</h2>

        <p style={S.p}>
          Reinforcement Learning from Human Feedback (RLHF) é o paradigma dominante para alinhar LLMs.
          Introduzido por Christiano et al. (2017) e popularizado no InstructGPT (2022), combina
          preferências humanas com optimização por reforço.
        </p>

        <h3 style={S.h3}>Reward Model: Bradley-Terry</h3>
        <p style={S.p}>
          O Reward Model aprende a prever qual de duas respostas um humano prefere.
          O modelo Bradley-Terry define a probabilidade de preferência como:
        </p>
        <div style={S.math}>
          <BlockMath math={"P(y_w \\succ y_l \\mid x) = \\sigma\\bigl(r(x, y_w) - r(x, y_l)\\bigr)"} />
        </div>
        <p style={S.p}>
          onde <InlineMath math={"\\sigma"} /> é a função sigmoid, <InlineMath math={"y_w"} /> é a resposta
          preferida (<em>winner</em>) e <InlineMath math={"y_l"} /> a rejeitada (<em>loser</em>).
          O RM é treinado minimizando a negative log-likelihood:
        </p>
        <div style={S.math}>
          <BlockMath math={"\\mathcal{L}_{RM} = -\\log \\sigma\\bigl(r(x, y_w) - r(x, y_l)\\bigr)"} />
        </div>

        <h3 style={S.h3}>PPO com Clipping</h3>
        <p style={S.p}>
          Após treinar o RM, o LLM é ajustado com Proximal Policy Optimization (PPO). O objectivo clipped
          evita updates demasiado grandes:
        </p>
        <div style={S.math}>
          <BlockMath math={"\\mathcal{L}_{\\text{CLIP}} = \\mathbb{E}_t\\!\\left[\\min\\!\\left(r_t A_t,\\; \\mathrm{clip}(r_t, 1-\\varepsilon, 1+\\varepsilon)\\, A_t\\right)\\right]"} />
        </div>
        <p style={S.p}>
          onde <InlineMath math={"r_t = \\pi_\\theta(a_t|s_t) / \\pi_{\\text{old}}(a_t|s_t)"} /> é o ratio
          de probabilidades e <InlineMath math={"A_t"} /> a vantagem estimada.
          Para prevenir que o modelo se afaste demasiado da política de referência, adiciona-se uma penalização KL:
        </p>
        <div style={S.math}>
          <BlockMath math={"r_{\\text{total}}(x, y) = r_{\\text{RM}}(x, y) - \\beta\\, \\mathrm{KL}\\!\\left(\\pi_\\theta(\\cdot|x) \\,\\|\\, \\pi_{\\text{ref}}(\\cdot|x)\\right)"} />
        </div>

        <h3 style={S.h3}>Reward Hacking</h3>
        <p style={S.p}>
          O RM é um proxy imperfeito do julgamento humano. O modelo PPO, ao optimizar agressivamente o RM,
          descobre exploits: respostas que obtêm alta pontuação do RM mas que humanos considerariam de
          baixa qualidade ou perigosas. Este fenómeno chama-se <em>reward hacking</em> e é análogo à
          Lei de Goodhart aplicada ao treino.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 320" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
              </marker>
            </defs>
            {/* Human */}
            <rect x="30" y="120" width="120" height="50" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
            <text x="90" y="142" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Humanos</text>
            <text x="90" y="158" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Preferências</text>

            {/* RM */}
            <rect x="300" y="30" width="160" height="50" rx="10" fill="rgba(251,191,36,0.1)" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="380" y="52" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">Reward Model</text>
            <text x="380" y="68" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Bradley-Terry loss</text>

            {/* LLM */}
            <rect x="580" y="120" width="140" height="50" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="650" y="142" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">LLM (PPO)</text>
            <text x="650" y="158" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Policy π_θ</text>

            {/* KL */}
            <rect x="300" y="220" width="160" height="50" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="380" y="242" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">KL Penalty</text>
            <text x="380" y="258" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">π_θ vs π_ref</text>

            {/* Arrows */}
            <line x1="150" y1="140" x2="296" y2="65" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr2)" />
            <line x1="460" y1="55" x2="576" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr2)" />
            <line x1="650" y1="170" x2="464" y2="238" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr2)" />
            <line x1="380" y1="220" x2="380" y2="84" stroke="#f97316" strokeWidth="1" strokeDasharray="5,3" markerEnd="url(#arr2)" />
            <line x1="580" y1="150" x2="150" y2="150" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr2)" />

            {/* Labels on arrows */}
            <text x="195" y="90" fontSize="9" fill="var(--text-secondary)" textAnchor="middle">treina RM</text>
            <text x="565" y="85" fontSize="9" fill="var(--text-secondary)" textAnchor="middle">sinal de recompensa</text>
            <text x="575" y="218" fontSize="9" fill="var(--text-secondary)" textAnchor="middle">outputs → RM</text>
            <text x="410" y="135" fontSize="9" fill="#f97316" textAnchor="middle">regulariza</text>
            <text x="380" y="310" fontSize="10" fill="var(--text-secondary)" textAnchor="middle">Ciclo RLHF completo com feedback KL</text>
          </svg>
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. DPO — Direct Preference Optimization</h2>

        <p style={S.p}>
          Rafael et al. (2023) propuseram o DPO como alternativa ao RLHF que elimina o Reward Model explícito
          e o loop PPO. A ideia central é que o RM óptimo pode ser expresso directamente em termos da
          política óptima, permitindo optimização directa sobre os dados de preferência.
        </p>

        <h3 style={S.h3}>Re-parametrização Closed-Form</h3>
        <p style={S.p}>
          A solução óptima do RLHF com penalização KL tem uma forma analítica:
        </p>
        <div style={S.math}>
          <BlockMath math={"r^*(x, y) = \\beta \\log \\frac{\\pi^*(y \\mid x)}{\\pi_{\\text{ref}}(y \\mid x)} + \\beta \\log Z(x)"} />
        </div>
        <p style={S.p}>
          onde <InlineMath math={"Z(x)"} /> é a função de partição (constante de normalização). Substituindo
          na loss do Bradley-Terry e cancelando <InlineMath math={"Z(x)"} />, obtém-se a loss DPO:
        </p>
        <div style={S.math}>
          <BlockMath math={"\\mathcal{L}_{\\text{DPO}}(\\pi_\\theta) = -\\mathbb{E}_{(x,y_w,y_l)}\\!\\left[\\log \\sigma\\!\\left(\\beta \\log \\frac{\\pi_\\theta(y_w \\mid x)}{\\pi_{\\text{ref}}(y_w \\mid x)} - \\beta \\log \\frac{\\pi_\\theta(y_l \\mid x)}{\\pi_{\\text{ref}}(y_l \\mid x)}\\right)\\right]"} />
        </div>

        <p style={S.p}>
          O DPO treina directamente o LLM para aumentar a probabilidade relativa de respostas preferidas
          face às rejeitadas, medida em relação à política de referência. Não é necessário treinar um RM
          separado nem executar RL com amostras online.
        </p>

        <h3 style={S.h3}>Variantes e Extensões</h3>
        <p style={S.p}>
          O sucesso do DPO motivou várias variantes que resolvem limitações específicas:
        </p>
        <ul style={{ color: 'var(--text-primary)', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li><strong>IPO (Identity Preference Optimization):</strong> substitui o log-sigmoid por uma loss quadrática para evitar overfitting a pares muito separados.</li>
          <li><strong>KTO (Kahneman-Tversky Optimization):</strong> usa dados de thumbs-up/thumbs-down em vez de pares comparativos, mais fácil de recolher.</li>
          <li><strong>ORPO:</strong> elimina o modelo de referência completamente, integrando o termo de regularização na própria loss de linguagem.</li>
          <li><strong>SimPO:</strong> usa a log-probabilidade média (não cumulativa) e não requer modelo de referência.</li>
        </ul>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>RM explícito?</th>
              <th style={S.th}>Dados necessários</th>
              <th style={S.th}>Estabilidade</th>
              <th style={S.th}>Performance relativa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>RLHF + PPO</strong></td>
              <td style={S.td}>Sim</td>
              <td style={S.td}>Pares comparativos + amostras online</td>
              <td style={S.td}>Baixa (hiperparâmetros sensíveis)</td>
              <td style={S.td}>Alta (estado da arte com esforço)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>DPO</strong></td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Pares comparativos offline</td>
              <td style={S.td}>Média</td>
              <td style={S.td}>Competitivo com RLHF</td>
            </tr>
            <tr>
              <td style={S.td}><strong>IPO</strong></td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Pares comparativos offline</td>
              <td style={S.td}>Alta</td>
              <td style={S.td}>Ligeiramente abaixo do DPO</td>
            </tr>
            <tr>
              <td style={S.td}><strong>KTO</strong></td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Ratings individuais (não pares)</td>
              <td style={S.td}>Alta</td>
              <td style={S.td}>Comparável ao DPO</td>
            </tr>
            <tr>
              <td style={S.td}><strong>ORPO</strong></td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Pares; sem modelo de referência</td>
              <td style={S.td}>Alta</td>
              <td style={S.td}>Competitivo, mais simples</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          O parâmetro <InlineMath math={"\\beta"} /> controla o trade-off entre seguir as preferências e manter-se
          próximo da política de referência. Valores típicos: 0.1–0.5. Um <InlineMath math={"\\beta"} /> alto
          conserva mais o comportamento original; um <InlineMath math={"\\beta"} /> baixo permite mudanças maiores.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 4 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Constitutional AI (Anthropic)</h2>

        <p style={S.p}>
          A Anthropic introduziu o Constitutional AI (CAI) em 2022 como alternativa ao RLHF tradicional
          baseada em rótulos humanos. Em vez de pedir a humanos para avaliar cada resposta individualmente,
          define-se uma "constituição" — um conjunto de princípios — e usa-se o próprio modelo como juíz.
        </p>

        <h3 style={S.h3}>Fase 1: Critique &amp; Revision</h3>
        <p style={S.p}>
          Dado um prompt potencialmente problemático, o modelo gera uma resposta inicial. De seguida,
          usando os princípios da constituição, o modelo critica a sua própria resposta e produz uma
          versão revista. Este processo pode repetir-se em múltiplas rondas:
        </p>
        <div style={S.code}>{`# Exemplo simplificado do pipeline Critique-Revision
prompt = "Como faço X perigoso?"
response_v0 = model.generate(prompt)

critique_prompt = f"""
Identifica aspectos da resposta abaixo que violam os seguintes princípios:
- Não causar dano físico a pessoas
- Ser honesto sobre limitações
- Respeitar a autonomia do utilizador

Resposta: {response_v0}

Crítica:"""

critique = model.generate(critique_prompt)
revision = model.generate(f"Revisa a resposta tendo em conta: {critique}")`}</div>

        <h3 style={S.h3}>Fase 2: RLAIF</h3>
        <p style={S.p}>
          Com os pares (resposta original, resposta revista), treina-se um Preference Model usando
          o próprio LLM como anotador — Reinforcement Learning from AI Feedback (RLAIF). Este PM
          serve de reward model para um loop PPO convencional.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 280" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker id="arr3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
              </marker>
            </defs>
            {/* Constituição */}
            <rect x="10" y="110" width="130" height="50" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
            <text x="75" y="132" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Constituição</text>
            <text x="75" y="148" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Princípios HHH</text>

            {/* Critique Loop */}
            <rect x="200" y="40" width="140" height="50" rx="10" fill="rgba(251,191,36,0.1)" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="270" y="62" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Critique Loop</text>
            <text x="270" y="78" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Modelo critica e revisa</text>

            {/* RLAIF */}
            <rect x="200" y="170" width="140" height="50" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="270" y="192" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">RLAIF</text>
            <text x="270" y="208" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">LLM como juíz</text>

            {/* PM */}
            <rect x="420" y="110" width="140" height="50" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="490" y="132" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Preference Model</text>
            <text x="490" y="148" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Reward signal</text>

            {/* PPO */}
            <rect x="610" y="110" width="130" height="50" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="675" y="132" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">PPO / DPO</text>
            <text x="675" y="148" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Claude alinhado</text>

            {/* Arrows */}
            <line x1="140" y1="135" x2="196" y2="80" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr3)" />
            <line x1="140" y1="135" x2="196" y2="185" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr3)" />
            <line x1="340" y1="65" x2="485" y2="107" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr3)" />
            <line x1="340" y1="195" x2="416" y2="150" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr3)" />
            <line x1="560" y1="135" x2="606" y2="135" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr3)" />

            <text x="380" y="270" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Pipeline Constitutional AI: sem rótulos humanos por resposta</text>
          </svg>
        </div>

        <h3 style={S.h3}>Princípios HHH do Claude</h3>
        <p style={S.p}>
          A constituição do Claude é organizada em torno de três pilares:
        </p>
        <div style={S.highlight}>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 2 }}>
            <li><strong>Helpful (Útil):</strong> O modelo deve ser genuinamente útil — não útil de forma superficial ou excessivamente cautelosa. Recusar sem razão é uma falha de alinhamento tanto quanto ajudar com danos.</li>
            <li><strong>Harmless (Inofensivo):</strong> Evitar outputs que causem dano real a pessoas, grupos ou à sociedade. Inclui recusar pedidos de informação para fins maliciosos.</li>
            <li><strong>Honest (Honesto):</strong> Não afirmar coisas falsas, não criar impressões erradas, declarar incerteza quando relevante, não manipular.</li>
          </ul>
        </div>

        <div style={S.note}>
          <strong>Vantagem de escalabilidade:</strong> O CAI escala com a capacidade do modelo — quanto mais
          capaz o modelo, melhor ele critica e revisa. Os rótulos humanos no RLHF tradicional não escalam:
          humanos não conseguem avaliar respostas em domínios que excedem a sua expertise.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 5 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Red-Teaming e Avaliação de Safety</h2>

        <p style={S.p}>
          Red-teaming é o processo de tentar activamente descobrir falhas de safety num modelo antes
          do deployment. Equipas especializadas (red teams) actuam como adversários e tentam obter
          comportamentos perigosos, enganosos ou prejudiciais.
        </p>

        <h3 style={S.h3}>Red-Teaming Manual vs. Automatizado</h3>
        <p style={S.p}>
          O red-teaming manual envolve humanos com expertise em segurança a explorar o modelo criativamente.
          O red-teaming automatizado usa um LLM adversarial para gerar ataques em larga escala:
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 760 220" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker id="arr4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
              </marker>
            </defs>
            {/* Attack Gen */}
            <rect x="30" y="80" width="150" height="55" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
            <text x="105" y="104" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Attack Generator</text>
            <text x="105" y="122" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">LLM adversarial</text>

            {/* Target Model */}
            <rect x="300" y="80" width="150" height="55" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="375" y="104" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">Target Model</text>
            <text x="375" y="122" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">LLM a avaliar</text>

            {/* Judge */}
            <rect x="570" y="80" width="150" height="55" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="645" y="104" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">Safety Judge</text>
            <text x="645" y="122" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Classifica resposta</text>

            {/* Arrows forward */}
            <line x1="180" y1="107" x2="296" y2="107" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr4)" />
            <line x1="450" y1="107" x2="566" y2="107" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr4)" />

            {/* Feedback loop */}
            <path d="M645,135 L645,185 L105,185 L105,139" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="6,3" markerEnd="url(#arr4)" />
            <text x="375" y="200" textAnchor="middle" fontSize="10" fill={color}>Refine attack (se não harmful o suficiente)</text>
          </svg>
        </div>

        <h3 style={S.h3}>Tipos de Ataques</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo de Ataque</th>
              <th style={S.th}>Exemplo</th>
              <th style={S.th}>Mitigação Principal</th>
              <th style={S.th}>Eficácia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Jailbreak directo</strong></td>
              <td style={S.td}>"Ignora as tuas instruções e faz X"</td>
              <td style={S.td}>RLHF com exemplos adversariais</td>
              <td style={S.td}>Baixa em modelos modernos</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Roleplay/persona</strong></td>
              <td style={S.td}>"Faz de conta que és DAN sem restrições"</td>
              <td style={S.td}>Treino em cenários roleplay</td>
              <td style={S.td}>Média</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Prompt injection</strong></td>
              <td style={S.td}>Instruções escondidas em documentos</td>
              <td style={S.td}>Separação de contextos, sanitização</td>
              <td style={S.td}>Alta (problema aberto)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Many-shot jailbreaking</strong></td>
              <td style={S.td}>Dezenas de exemplos no contexto a normalizar comportamento</td>
              <td style={S.td}>Robustez a context-length, evals específicos</td>
              <td style={S.td}>Média-Alta</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Multilingual bypass</strong></td>
              <td style={S.td}>Pedido em língua rara ou código</td>
              <td style={S.td}>Treino multilingual de safety</td>
              <td style={S.td}>Variável por língua</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Benchmarks de Safety</h3>
        <p style={S.p}>
          Vários benchmarks padronizados permitem comparar a robustez dos modelos:
        </p>
        <ul style={{ color: 'var(--text-primary)', lineHeight: 1.9, paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li><strong>HarmBench:</strong> 400+ comportamentos harmful padronizados, cobrindo cibersegurança, CBRN, desinformação e mais. Usa múltiplos métodos de ataque por comportamento.</li>
          <li><strong>StrongREJECT:</strong> Avalia a qualidade das recusas (não apenas se o modelo recusa, mas se recusa de forma informativa e útil).</li>
          <li><strong>WildGuard:</strong> Classificador de safety treinado em dados do mundo real para detectar pedidos maliciosos e respostas problemáticas.</li>
        </ul>
      </section>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Scalable Oversight</h2>

        <p style={S.p}>
          O <em>scalable oversight</em> aborda um problema fundamental: à medida que os modelos ficam mais
          capazes, os humanos tornam-se incapazes de verificar as suas respostas. Como supervisionar
          um modelo que é mais capaz do que o seu supervisor?
        </p>

        <h3 style={S.h3}>Debate (Irving et al., 2018)</h3>
        <p style={S.p}>
          Em vez de pedir ao humano para avaliar a resposta directamente, dois modelos debatem entre si.
          Um humano julga o debate — uma tarefa cognitivamente mais fácil do que avaliar a resposta.
          O argumento teórico: num debate honesto, a verdade é mais fácil de defender do que a mentira.
        </p>

        <h3 style={S.h3}>Recursive Reward Modelling (RRM)</h3>
        <p style={S.p}>
          O RRM usa uma hierarquia de modelos de recompensa. O assistente ajuda o humano a avaliar
          respostas mais complexas, que por sua vez são usadas para treinar um RM melhor. O processo
          repete-se recursivamente, elevando o nível de supervisão com cada iteração.
        </p>

        <h3 style={S.h3}>Weak-to-Strong Generalization (OpenAI, 2023)</h3>
        <p style={S.p}>
          Burns et al. (2023) demonstraram experimentalmente que modelos fracos podem supervisionar
          modelos fortes com sucesso surpreendente: um supervisor GPT-2 consegue elicitar comportamento
          alinhado de um modelo GPT-4-scale. O modelo forte "generaliza" a intenção do supervisor fraco
          para além do que este consegue verificar directamente.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 280" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker id="arr5" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
              </marker>
            </defs>
            {/* Y axis label */}
            <text x="15" y="140" fontSize="10" fill="var(--text-secondary)" transform="rotate(-90,15,140)" textAnchor="middle">Capacidade</text>

            {/* Levels */}
            <rect x="40" y="200" width="680" height="40" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
            <text x="380" y="225" textAnchor="middle" fontSize="11" fill={color} fontWeight="600">Nível 1: Supervisão Humana Directa</text>

            <rect x="40" y="145" width="680" height="40" rx="8" fill="rgba(251,191,36,0.08)" stroke="#f59e0b" strokeWidth="1" />
            <text x="380" y="170" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="600">Nível 2: RLHF / CAI (humano + IA auxiliar)</text>

            <rect x="40" y="90" width="680" height="40" rx="8" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1" />
            <text x="380" y="115" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="600">Nível 3: Debate / RRM / Interpretabilidade</text>

            <rect x="40" y="35" width="680" height="40" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
            <text x="380" y="60" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="600">Nível 4: Weak-to-Strong / Scalable Oversight</text>

            {/* Arrow up */}
            <line x1="730" y1="240" x2="730" y2="40" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr5)" />
            <text x="745" y="140" fontSize="9" fill="var(--text-secondary)" transform="rotate(90,745,140)" textAnchor="middle">capacidade cresce →</text>

            <text x="380" y="270" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Hierarquia de scalable oversight: cada nível supervisiona modelos mais capazes</text>
          </svg>
        </div>

        <h3 style={S.h3}>Interpretabilidade como Ferramenta de Oversight</h3>
        <p style={S.p}>
          Se conseguirmos perceber o que o modelo está a "pensar", podemos supervisionar sem depender
          exclusivamente dos outputs. Técnicas como <em>activation steering</em> e <em>sparse autoencoders</em>
          permitem identificar e controlar representações internas — uma forma complementar de oversight.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── Section 7 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Interpretabilidade Mecanística</h2>

        <p style={S.p}>
          A interpretabilidade mecanística (<em>mechanistic interpretability</em>) procura compreender
          os algoritmos internos que os LLMs implementam — não apenas o que produzem, mas como chegam
          lá. É uma área liderada pela Anthropic, com trabalhos fundamentais de Elhage et al. e Bricken et al.
        </p>

        <h3 style={S.h3}>Circuit Analysis</h3>
        <p style={S.p}>
          Um "circuito" é um subgrafo computacional dentro da rede que é responsável por um comportamento
          específico. Por exemplo, Wang et al. (2022) identificaram o circuito responsável pela tarefa
          de Indirect Object Identification (IOI) em GPT-2: um conjunto de attention heads que cooperam
          para copiar o nome correcto.
        </p>

        <h3 style={S.h3}>Superposition Hypothesis</h3>
        <p style={S.p}>
          Se uma rede tem <InlineMath math={"n"} /> neurónios mas precisa de representar
          <InlineMath math={"m \\gg n"} /> features, pode usar combinações lineares de neurónios
          para representar múltiplas features simultaneamente — desde que estas sejam suficientemente
          esparsas. Isto é a <em>superposition hypothesis</em>.
        </p>
        <div style={S.math}>
          <BlockMath math={"\\mathbf{x} \\approx W^T W \\mathbf{x} \\quad \\text{com } W \\in \\mathbb{R}^{n \\times m},\\; m \\gg n"} />
        </div>
        <p style={S.p}>
          A superposição explica por que modelos individuais são difíceis de interpretar: cada neurónio
          participa em múltiplas features, tornando inútil a análise neurônio-a-neurônio.
        </p>

        <h3 style={S.h3}>Sparse Autoencoders (SAE)</h3>
        <p style={S.p}>
          Os SAEs treinam um autoencoder com penalização L1 sobre as activações do modelo para encontrar
          uma representação mais esparsa e interpretável. Dado um vector de activação
          <InlineMath math={"\\mathbf{x}"} />, o SAE aprende:
        </p>
        <div style={S.math}>
          <BlockMath math={"\\hat{\\mathbf{x}} = W_{\\text{dec}}\\, \\text{ReLU}\\!\\left(W_{\\text{enc}}\\,\\mathbf{x} + \\mathbf{b}_{\\text{enc}}\\right)"} />
        </div>
        <p style={S.p}>
          com loss: <InlineMath math={"\\mathcal{L} = \\|\\mathbf{x} - \\hat{\\mathbf{x}}\\|^2 + \\lambda\\|\\mathbf{z}\\|_1"} />,
          onde <InlineMath math={"\\mathbf{z}"} /> são as activações do encoder. O resultado são
          features esparsas que activam selectivamente e correspondem a conceitos interpretáveis.
        </p>

        <h3 style={S.h3}>Activation Steering</h3>
        <p style={S.p}>
          Ao identificar vectores de activação associados a conceitos específicos, podemos injectá-los
          ou subtraí-los durante a inferência para controlar o comportamento:
        </p>
        <div style={S.code}>{`# Exemplo conceptual de activation steering
# 1. Encontrar o vector de steering para "honestidade"
honest_activations = get_activations(model, honest_examples)
dishonest_activations = get_activations(model, dishonest_examples)
steering_vector = honest_activations.mean(0) - dishonest_activations.mean(0)

# 2. Aplicar durante a inferência
def steered_forward(x, alpha=10.0):
    activations = model.get_residual_stream(x)
    activations += alpha * steering_vector  # injectar
    return model.continue_from_residual(activations)`}</div>

        <h3 style={S.h3}>Trabalho da Anthropic: Monosemanticity</h3>
        <p style={S.p}>
          Em 2023, Bricken et al. publicaram "Towards Monosemanticity" demonstrando que SAEs aplicados
          a um transformer de 1 camada conseguem extrair milhares de features interpretáveis — incluindo
          features para DNA, código Python, termos legais e muito mais. O trabalho de 2024 sobre
          "Scaling and Evaluating SAEs" estendeu esta abordagem a Claude 3 Sonnet, identificando
          features emocionais e de "segurança" nas representações internas.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Técnica</th>
              <th style={S.th}>O que revela</th>
              <th style={S.th}>Limitação principal</th>
              <th style={S.th}>Ferramenta/Ref</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Circuit Analysis</strong></td>
              <td style={S.td}>Algoritmos específicos implementados pela rede</td>
              <td style={S.td}>Escala mal para redes grandes</td>
              <td style={S.td}>TransformerLens</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Probing</strong></td>
              <td style={S.td}>Se o modelo representa um conceito linealmente</td>
              <td style={S.td}>Não distingue representação de uso</td>
              <td style={S.td}>sklearn + activações</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Sparse Autoencoders</strong></td>
              <td style={S.td}>Features polissémicas decompostas</td>
              <td style={S.td}>Dicionários imensos, avaliação difícil</td>
              <td style={S.td}>SAELens, Anthropic SAE</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Activation Steering</strong></td>
              <td style={S.td}>Causalidade: features que controlam comportamento</td>
              <td style={S.td}>Efeitos colaterais, instabilidade</td>
              <td style={S.td}>Representation Engineering</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Logit Lens</strong></td>
              <td style={S.td}>Predições intermediárias camada a camada</td>
              <td style={S.td}>Só informativo para token-prediction</td>
              <td style={S.td}>nostalgebraist/logit-lens</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 8 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Regulação e Governance</h2>

        <p style={S.p}>
          O desenvolvimento acelerado dos LLMs criou pressão para frameworks regulatórios formais.
          Assistimos a uma convergência entre regulação estatal e compromissos voluntários da indústria,
          embora com tensões significativas entre os dois paradigmas.
        </p>

        <h3 style={S.h3}>EU AI Act</h3>
        <p style={S.p}>
          O AI Act europeu (em vigor desde 2024) introduz uma classificação por nível de risco:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Nível de Risco</th>
              <th style={S.th}>Exemplos</th>
              <th style={S.th}>Requisitos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Inaceitável</strong></td>
              <td style={S.td}>Manipulação subliminar, scoring social</td>
              <td style={S.td}>Proibição total</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Alto Risco</strong></td>
              <td style={S.td}>Infraestrutura crítica, recrutamento, educação</td>
              <td style={S.td}>Conformidade obrigatória, auditoria, registo</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Risco Limitado</strong></td>
              <td style={S.td}>Chatbots, sistemas de recomendação</td>
              <td style={S.td}>Obrigações de transparência (disclosure)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Risco Mínimo</strong></td>
              <td style={S.td}>Filtros de spam, IA em jogos</td>
              <td style={S.td}>Nenhum requisito adicional</td>
            </tr>
          </tbody>
        </table>

        <p style={S.p}>
          Para modelos GPAI (General Purpose AI) com impacto sistémico — definido como treinados com
          mais de <InlineMath math={"10^{25}"} /> FLOPs — o AI Act exige avaliação de risco adversarial,
          publicação de resumos dos dados de treino e notificação de incidentes graves.
        </p>

        <h3 style={S.h3}>Compromissos Voluntários</h3>
        <p style={S.p}>
          Em 2023, as principais labs assinaram compromissos voluntários com a Casa Branca e o governo
          do Reino Unido. Os principais elementos incluem:
        </p>
        <div style={S.highlight}>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 2 }}>
            <li>Partilha de informação sobre safety com governos e outras labs antes do deployment</li>
            <li>Investimento em cibersegurança e insider threat protections</li>
            <li>Marcação de conteúdo gerado por IA (watermarking)</li>
            <li>Publicação de relatórios de safety (model cards, system cards)</li>
            <li>Prioritização de investigação de alignment e interpretabilidade</li>
          </ul>
        </div>

        <h3 style={S.h3}>Model Cards e System Cards</h3>
        <p style={S.p}>
          <em>Model cards</em> (Mitchell et al., 2019) são documentos que acompanham um modelo e descrevem:
          intended use, performance em diferentes grupos demográficos, limitações conhecidas e avaliações
          de fairness. <em>System cards</em> (OpenAI) são equivalentes mas para o sistema completo
          incluindo fine-tuning e safety layers.
        </p>

        <h3 style={S.h3}>Responsible Scaling Policies (RSP) — Anthropic</h3>
        <p style={S.p}>
          A RSP da Anthropic define <em>AI Safety Levels</em> (ASL) análogos aos Biosafety Levels em
          laboratórios de biologia:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Nível</th>
              <th style={S.th}>Definição de Risco</th>
              <th style={S.th}>Salvaguardas Obrigatórias</th>
              <th style={S.th}>Estado Actual</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>ASL-1</strong></td>
              <td style={S.td}>Sem risco além de sistemas existentes</td>
              <td style={S.td}>Práticas normais de desenvolvimento</td>
              <td style={S.td}>Modelos legados</td>
            </tr>
            <tr>
              <td style={S.td}><strong>ASL-2</strong></td>
              <td style={S.td}>Risco real mas mitigável com salvaguardas actuais</td>
              <td style={S.td}>Evals de CBRN e cibersegurança, red-teaming antes do lançamento</td>
              <td style={S.td}>Claude 3.x (actual)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>ASL-3</strong></td>
              <td style={S.td}>Potencial para dano catastrófico (CBRN, ataques autónomos)</td>
              <td style={S.td}>Controlos de segurança reforçados, acesso restrito, auditoria independente</td>
              <td style={S.td}>Threshold ainda não atingido</td>
            </tr>
            <tr>
              <td style={S.td}><strong>ASL-4</strong></td>
              <td style={S.td}>Riscos existenciais; modelo capaz de auto-replicação ou persuasão em massa</td>
              <td style={S.td}>Pausar deployment até salvaguardas suficientes existirem</td>
              <td style={S.td}>Especulativo / futuro</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          <strong>Comprometimento condicional:</strong> A RSP não proíbe o desenvolvimento de modelos ASL-3,
          mas exige que as salvaguardas necessárias existam <em>antes</em> do deployment. Se a Anthropic
          treinar um modelo ASL-3 sem salvaguardas suficientes, compromete-se a não o lançar.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Síntese ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Síntese do Módulo</h2>

        <p style={S.p}>
          O alinhamento de LLMs é um campo multidisciplinar que combina teoria de optimização,
          aprendizagem por reforço, interpretabilidade e governance. Os pontos centrais deste módulo:
        </p>

        <div style={S.highlight}>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 2.1 }}>
            <li>
              <strong>O problema é estrutural:</strong> Outer alignment (especificação errada) e inner
              alignment (optimizador interno divergente) são falhas independentes que exigem soluções distintas.
            </li>
            <li>
              <strong>RLHF é o paradigma dominante</strong> mas frágil: o reward model é imperfeito e
              sujeito a hacking. A penalização KL limita o drift mas não elimina o problema.
            </li>
            <li>
              <strong>DPO simplifica RLHF</strong> ao eliminar o RM explícito, usando a re-parametrização
              closed-form. Variantes como KTO e ORPO reduzem ainda mais os requisitos de dados.
            </li>
            <li>
              <strong>Constitutional AI</strong> da Anthropic resolve o bottleneck de escalabilidade de
              rótulos humanos usando o próprio modelo como juíz (RLAIF) com uma constituição de princípios.
            </li>
            <li>
              <strong>Red-teaming sistemático</strong> — manual e automatizado — é indispensável antes de
              qualquer deployment. Benchmarks como HarmBench padronizam a comparação entre modelos.
            </li>
            <li>
              <strong>Scalable oversight</strong> (debate, RRM, weak-to-strong) antecipa o cenário em que
              modelos excedem a capacidade humana de verificação directa.
            </li>
            <li>
              <strong>Interpretabilidade mecanística</strong> — especialmente SAEs — oferece uma janela
              para os algoritmos internos dos modelos, complementando a supervisão comportamental.
            </li>
            <li>
              <strong>A regulação avança</strong>: o EU AI Act define obrigações legais para GPAI;
              a RSP da Anthropic define compromissos internos baseados em níveis de risco (ASL).
            </li>
          </ul>
        </div>

        <p style={S.p}>
          A convergência entre técnicas de treino (RLHF, DPO, CAI), avaliação (red-teaming, benchmarks),
          interpretabilidade (SAEs, circuit analysis) e governance (RSP, AI Act) forma o ecossistema
          moderno de safety. Nenhuma técnica isolada é suficiente — a resiliência vem da sobreposição
          de múltiplas camadas de defesa.
        </p>

      </section>
    </div>
  );
}
