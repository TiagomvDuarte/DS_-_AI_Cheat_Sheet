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
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(249,115,22,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

export default function LLM8() {
  return (
    <div style={S.page}>
      <Link to="/llm" style={S.back}>
        <ArrowLeft size={16} /> Voltar aos módulos
      </Link>

      <div style={S.tag}>MÓDULO 08</div>
      <h1 style={S.h1}>Pós-treino, Dados Sintéticos &amp; Inferência em Escala</h1>
      <p style={S.lead}>
        O pré-treino dá ao modelo conhecimento do mundo — mas é o pós-treino que determina como ele se comporta.
        E quando os dados humanos se tornam escassos ou caros, dados sintéticos e self-play preenchem o gap.
        Do lado da inferência, técnicas como KV caching, quantização e speculative decoding tornam possível
        servir modelos de 70B+ com latência aceitável.
      </p>

      {/* ── Section 1 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Pipeline de Pós-treino Moderno</h2>

        <p style={S.p}>
          O pós-treino transforma um modelo de linguagem bruto num assistente útil, seguro e alinhado com as
          preferências humanas. O pipeline moderno é iterativo e composto por várias fases distintas.
        </p>

        <h3 style={S.h3}>Fases típicas</h3>
        <div style={S.highlight}>
          <strong>Pré-treino → SFT → Reward Modelling → RLHF/DPO → Evals → Deploy</strong>
          <p style={{ ...S.p, marginBottom: 0, marginTop: '0.5rem' }}>
            Cada fase tem objetivos claros: o SFT ensina o formato de resposta; o RM aprende preferências
            humanas; o RLHF/DPO optimiza o modelo face ao RM; as evals validam regressões antes do deploy.
          </p>
        </div>

        <p style={S.p}>
          O processo é verdadeiramente iterativo: cada versão do modelo em produção recolhe novos dados de
          utilizadores reais, que alimentam um novo ciclo de treino do Reward Model e um novo passo de RLHF.
          Este <em>data flywheel</em> é uma das principais vantagens competitivas dos modelos com grande base
          de utilizadores.
        </p>

        <div style={S.note}>
          <strong>Exemplo concreto — ChatGPT:</strong> os botões de thumbs up/down geram dados de preferência
          em escala massiva. Estes dados actualizam o Reward Model que, por sua vez, melhora o próximo
          checkpoint do modelo via RLHF.
        </div>

        {/* SVG: pipeline iterativo */}
        <div style={S.diagram}>
          {(() => {
            const bw = 110, bh = 52, gap = 22, pad = 10;
            const steps = [
              { label: 'Pré-treino', sub: 'web corpus' },
              { label: 'SFT', sub: 'demos humanas' },
              { label: 'Reward Model', sub: 'comparações' },
              { label: 'RLHF / DPO', sub: 'optimização' },
              { label: 'Evals', sub: 'benchmarks' },
              { label: 'Deploy', sub: 'produção' },
            ];
            const totalW = pad + steps.length * bw + (steps.length - 1) * gap + pad;
            const cy = 56;
            return (
              <svg viewBox={`0 0 ${totalW} 200`} width="100%" style={{ display: 'block' }}>
                <defs>
                  <marker id="arrPipe" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill={color} />
                  </marker>
                  <marker id="arrFly" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="270">
                    <path d="M0,0 L0,6 L8,3 z" fill="#f59e0b" />
                  </marker>
                </defs>
                {steps.map(({ label, sub }, i) => {
                  const x = pad + i * (bw + gap);
                  return (
                    <g key={i}>
                      <rect x={x} y={cy} width={bw} height={bh} rx={8}
                        fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1.5} />
                      <text x={x + bw / 2} y={cy + 20} textAnchor="middle"
                        fontSize={10} fontWeight={700} fill={color}>{label}</text>
                      <text x={x + bw / 2} y={cy + 36} textAnchor="middle"
                        fontSize={9} fill="var(--text-secondary)">{sub}</text>
                      {i < steps.length - 1 && (
                        <line
                          x1={x + bw} y1={cy + bh / 2}
                          x2={x + bw + gap} y2={cy + bh / 2}
                          stroke={color} strokeWidth={1.5} markerEnd="url(#arrPipe)" />
                      )}
                    </g>
                  );
                })}
                {/* Feedback arc */}
                {(() => {
                  const startX = pad + (steps.length - 1) * (bw + gap) + bw / 2;
                  const endX = pad + bw / 2;
                  const arcY = cy + bh + 50;
                  return (
                    <>
                      <path d={`M ${startX} ${cy + bh} Q ${startX} ${arcY} ${(startX + endX) / 2} ${arcY} Q ${endX} ${arcY} ${endX} ${cy + bh}`}
                        fill="none" stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="6,4" markerEnd="url(#arrFly)" />
                      <text x={totalW / 2} y={arcY + 22} textAnchor="middle" fontSize={10} fill="#f59e0b" fontWeight={600}>
                        data flywheel — produção gera novos dados
                      </text>
                    </>
                  );
                })()}
              </svg>
            );
          })()}
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 2 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Dados Sintéticos — Porquê e Como</h2>

        <p style={S.p}>
          Os dados reais da web têm bias, toxicidade e qualidade inconsistente — especialmente em domínios
          especializados como matemática, código ou ciência. Os dados sintéticos gerados por LLMs oferecem
          uma alternativa escalável e controlável.
        </p>

        <h3 style={S.h3}>Self-Instruct e Alpaca</h3>
        <p style={S.p}>
          O paradigma <strong>Self-Instruct</strong> usa o próprio LLM para gerar pares (instrução, resposta)
          a partir de um conjunto pequeno de exemplos seed. O modelo da Stanford Alpaca gerou 52 000 instruções
          a partir de apenas 175 seeds usando GPT-3.5, a um custo inferior a 500 USD.
        </p>

        <h3 style={S.h3}>Destilação de Conhecimento</h3>
        <p style={S.p}>
          Na destilação, um modelo pequeno (student) aprende a imitar a distribuição de probabilidade de um
          modelo grande (teacher), em vez de aprender apenas dos labels hard. A loss de destilação minimiza
          a divergência KL entre as distribuições:
        </p>
        <div style={S.math}>
          <BlockMath math={"\\mathcal{L}_{KD} = KL(p_{teacher} \\| p_{student}) = \\sum_y p_T(y|x)\\log\\frac{p_T(y|x)}{p_S(y|x)}"} />
        </div>
        <p style={S.p}>
          O student aprende não só o token correcto mas toda a distribuição de probabilidade do teacher —
          incluindo informação sobre tokens prováveis mas errados (<em>dark knowledge</em>).
        </p>

        {/* SVG: Self-Instruct loop */}
        <div style={S.diagram}>
          <svg viewBox="0 0 700 200" width="100%" style={{ display: 'block' }}>
            {[
              { x: 30, y: 80, w: 110, h: 44, label: 'Seed Tasks', sub: '175 exemplos', fill: 0.08 },
              { x: 200, y: 80, w: 110, h: 44, label: 'LLM Gera', sub: 'instruções + respostas', fill: 0.14 },
              { x: 370, y: 80, w: 110, h: 44, label: 'Filtragem', sub: 'qualidade & diversidade', fill: 0.20 },
              { x: 540, y: 80, w: 110, h: 44, label: 'Fine-tune', sub: 'novo modelo', fill: 0.26 },
            ].map(({ x, y, w, h, label, sub, fill }, i) => (
              <g key={i}>
                <rect x={x} y={y} width={w} height={h} rx={8}
                  fill={`rgba(249,115,22,0.10)`} stroke={color} strokeWidth={1.5} />
                <text x={x + w / 2} y={y + 17} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>{label}</text>
                <text x={x + w / 2} y={y + 33} textAnchor="middle" fontSize={9} fill="#ffff">{sub}</text>
              </g>
            ))}
            {/* Forward arrows */}
            {[[140, 200], [310, 370], [480, 540]].map(([x1, x2], i) => (
              <g key={i}>
                <line x1={x1} y1={102} x2={x2 - 10} y2={102} stroke={color} strokeWidth={1.5} />
                <polygon points={`${x2 - 10},98 ${x2},102 ${x2 - 10},106`} fill={color} />
              </g>
            ))}
            {/* Feedback loop */}
            <path d="M 595 124 C 595 165, 380 175, 255 165 C 150 158, 85 145, 85 124"
              fill="none" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5,4" />
            <polygon points="85,116 81,128 91,126" fill="#f59e0b" />
            <text x={340} y={188} textAnchor="middle" fontSize={10} fill="#f59e0b" fontWeight={600}>
              iteração: novo modelo gera melhores dados
            </text>
          </svg>
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Raciocínio e Chain-of-Thought Sintético</h2>

        <p style={S.p}>
          Treinar modelos para raciocinar passo a passo requer não só respostas correctas mas recompensas
          sobre o <em>processo</em> de raciocínio. Diferentes abordagens equilibram granularidade do sinal
          de reward com custo de anotação.
        </p>

        <h3 style={S.h3}>ORM vs. PRM</h3>
        <p style={S.p}>
          Os <strong>Outcome Reward Models (ORM)</strong> recompensam apenas a resposta final — mais fáceis
          de treinar mas fornecem sinal esparso. Os <strong>Process Reward Models (PRM)</strong> avaliam
          cada passo intermédio, fornecendo sinal mais denso e capaz de detectar raciocínio errado que
          acidentalmente chega à resposta certa.
        </p>

        <h3 style={S.h3}>STaR — Self-Taught Reasoner</h3>
        <p style={S.p}>
          O STaR (Zelikman et al. 2022) usa um loop bootstrapping: o modelo gera racionais (chain-of-thought)
          para problemas, filtra apenas os racionais que levam à resposta correcta, e usa esses exemplos
          para fine-tuning. O novo modelo é mais capaz de gerar racionais correctos, permitindo novas iterações.
        </p>

        <h3 style={S.h3}>SPIN e DeepSeek-R1</h3>
        <p style={S.p}>
          O <strong>Self-Play Fine-Tuning (SPIN)</strong> trata o fine-tuning como um jogo: o modelo actual
          distingue respostas geradas por si (versão anterior) de respostas humanas reais, melhorando
          progressivamente. O <strong>DeepSeek-R1</strong> usa GRPO (Group Relative Policy Optimization)
          em vez de PPO — mais estável e sem necessidade de um Critic separado.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Abordagem</th>
              <th style={S.th}>Granularidade do Reward</th>
              <th style={S.th}>Custo de Anotação</th>
              <th style={S.th}>Quando Usar</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['ORM', 'Resposta final', 'Baixo', 'Problemas com resposta verificável (ex: matemática)'],
              ['PRM', 'Cada passo', 'Alto (anotação humana)', 'Raciocínio complexo, detecção de erros intermédios'],
              ['GRPO', 'Grupo de respostas', 'Médio (automático)', 'RL escalável sem Critic, ex: DeepSeek-R1'],
            ].map(([a, b, c, d], i) => (
              <tr key={i}>
                <td style={{ ...S.td, fontWeight: 600, color }}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* SVG: STaR loop */}
        <div style={S.diagram}>
          <svg viewBox="0 0 700 210" width="100%" style={{ display: 'block' }}>
            {[
              { x: 20, y: 80, w: 110, h: 50, label: 'Problema', sub: 'dataset Q&A' },
              { x: 190, y: 80, w: 120, h: 50, label: 'Gerar Racionais', sub: 'chain-of-thought' },
              { x: 375, y: 80, w: 110, h: 50, label: 'Filtrar', sub: 'resposta correcta?' },
              { x: 550, y: 80, w: 110, h: 50, label: 'Fine-tune', sub: 'com racionais filtrados' },
            ].map(({ x, y, w, h, label, sub }, i) => (
              <g key={i}>
                <rect x={x} y={y} width={w} height={h} rx={8}
                  fill={`rgba(249,115,22,0.10)`} stroke={color} strokeWidth={1.5} />
                <text x={x + w / 2} y={y + 20} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>{label}</text>
                <text x={x + w / 2} y={y + 37} textAnchor="middle" fontSize={9} fill="#6b7280">{sub}</text>
              </g>
            ))}
            {[[130, 190], [310, 375], [485, 550]].map(([x1, x2], i) => (
              <g key={i}>
                <line x1={x1} y1={105} x2={x2 - 10} y2={105} stroke={color} strokeWidth={1.5} />
                <polygon points={`${x2 - 10},101 ${x2},105 ${x2 - 10},109`} fill={color} />
              </g>
            ))}
            {/* reject path */}
            <path d="M 430 130 C 430 165, 300 175, 250 165 C 210 158, 190 145, 190 130"
              fill="none" stroke="#f97316" strokeWidth={1.5} strokeDasharray="5,3" />
            <text x={312} y={185} textAnchor="middle" fontSize={9} fill="#f97316">descartado (resposta errada)</text>
            {/* feedback */}
            <path d="M 605 130 C 605 185, 350 200, 75 185 C 45 180, 30 165, 30 130"
              fill="none" stroke="#f59e0b" strokeWidth={2} strokeDasharray="6,4" />
            <polygon points="30,122 26,134 36,132" fill="#f59e0b" />
            <text x={320} y={202} textAnchor="middle" fontSize={10} fill="#f59e0b" fontWeight={600}>novo modelo → nova iteração STaR</text>
          </svg>
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 4 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Scaling Laws e Compute-Optimal Training</h2>

        <p style={S.p}>
          As scaling laws descrevem como a perda de um modelo decresce de forma previsível com o aumento
          do número de parâmetros e da quantidade de dados de treino.
        </p>

        <h3 style={S.h3}>Kaplan et al. 2020</h3>
        <p style={S.p}>
          A OpenAI descobriu que a loss segue leis de potência independentes para parâmetros e dados:
        </p>
        <div style={S.math}>
          <BlockMath math={"L(N) \\propto N^{-\\alpha} \\qquad L(D) \\propto D^{-\\beta}"} />
        </div>
        <p style={S.p}>
          Onde <InlineMath math={"N"} /> é o número de parâmetros e <InlineMath math={"D"} /> o número
          de tokens de treino. Os expoentes <InlineMath math={"\\alpha"} /> e <InlineMath math={"\\beta"} /> são
          aproximadamente iguais, sugerindo que parâmetros e dados contribuem de forma semelhante.
        </p>

        <h3 style={S.h3}>Chinchilla — Treino Compute-Optimal</h3>
        <p style={S.p}>
          Hoffmann et al. (2022) corrigiram Kaplan: para um orçamento de compute <InlineMath math={"C"} /> fixo,
          o modelo óptimo deve escalar parâmetros e dados de forma equilibrada:
        </p>
        <div style={S.math}>
          <BlockMath math={"N^* \\propto C^{0.5} \\qquad D^* \\propto C^{0.5}"} />
        </div>

        <div style={S.highlight}>
          <strong>Regra prática Chinchilla:</strong> ~20 tokens por parâmetro para treino óptimo.
          <br />
          <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Exemplo: um modelo de 7B parâmetros deve ser treinado com ~140B tokens. O Gopher (280B)
            foi undertrained com apenas 300B tokens; o Chinchilla (70B, 1.4T tokens) supera-o em
            quase todos os benchmarks.
          </span>
        </div>

        {/* SVG: scaling curves */}
        <div style={S.diagram}>
          <svg viewBox="0 0 700 230" width="100%" style={{ display: 'block' }}>
            {/* Left chart: Loss vs Params */}
            <g>
              <text x={160} y={18} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>Loss vs. Parâmetros</text>
              <line x1={40} y1={30} x2={40} y2={190} stroke="var(--text-secondary)" strokeWidth={1.5} />
              <line x1={40} y1={190} x2={280} y2={190} stroke="var(--text-secondary)" strokeWidth={1.5} />
              <text x={25} y={35} fontSize={9} fill="#6b7280" textAnchor="middle">alta</text>
              <text x={25} y={190} fontSize={9} fill="#6b7280" textAnchor="middle">baixa</text>
              <text x={160} y={210} fontSize={9} fill="#6b7280" textAnchor="middle">N (parâmetros) →</text>
              <path d="M 50 50 Q 100 90 160 130 Q 210 160 270 180"
                fill="none" stroke={color} strokeWidth={2.5} />
              <text x={200} y={145} fontSize={9} fill={color} fontStyle="italic">L ∝ N⁻ᵅ</text>
            </g>
            {/* Right chart: Loss vs Tokens */}
            <g>
              <text x={510} y={18} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>Loss vs. Tokens (Chinchilla)</text>
              <line x1={390} y1={30} x2={390} y2={190} stroke="var(--text-secondary)" strokeWidth={1.5} />
              <line x1={390} y1={190} x2={680} y2={190} stroke="var(--text-secondary)" strokeWidth={1.5} />
              <text x={375} y={35} fontSize={9} fill="#6b7280" textAnchor="middle">alta</text>
              <text x={375} y={190} fontSize={9} fill="#6b7280" textAnchor="middle">baixa</text>
              <text x={535} y={210} fontSize={9} fill="#6b7280" textAnchor="middle">D (tokens) →</text>
              <path d="M 400 45 Q 450 85 510 125 Q 560 155 670 175"
                fill="none" stroke="#f59e0b" strokeWidth={2.5} />
              <text x={560} y={140} fontSize={9} fill="#f59e0b" fontStyle="italic">L ∝ D⁻ᵝ</text>
              {/* Gopher marker */}
              <circle cx={460} cy={100} r={5} fill="#f97316" />
              <text x={478} y={97} fontSize={9} fill="#f97316">Gopher (undertrained)</text>
              {/* Chinchilla marker */}
              <circle cx={560} cy={148} r={5} fill={color} />
              <text x={578} y={150} fontSize={9} fill={color}>Chinchilla ✓</text>
            </g>
          </svg>
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 5 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Paralelismo e Infra de Treino</h2>

        <p style={S.p}>
          Treinar modelos com centenas de biliões de parâmetros requer distribuir o trabalho por centenas
          ou milhares de GPUs. Existem três dimensões de paralelismo que podem ser combinadas.
        </p>

        <h3 style={S.h3}>As três dimensões</h3>
        <p style={S.p}>
          <strong>Data Parallelism:</strong> cada GPU recebe uma cópia completa do modelo e processa
          um sub-batch diferente. Os gradientes são agregados (all-reduce) no final.
        </p>
        <p style={S.p}>
          <strong>Tensor Parallelism (Megatron-LM):</strong> as matrizes de pesos são divididas
          ao longo de uma dimensão por várias GPUs. Cada GPU computa uma fracção da matrix multiplication.
          Requer comunicação all-reduce em cada operação.
        </p>
        <p style={S.p}>
          <strong>Pipeline Parallelism:</strong> layers diferentes residem em GPUs diferentes.
          Micro-batches fluem como numa pipeline de fábrica, reduzindo o "pipeline bubble".
        </p>

        <h3 style={S.h3}>ZeRO — Zero Redundancy Optimizer</h3>
        <p style={S.p}>
          O DeepSpeed ZeRO particiona os optimizer states (Stage 1), gradients (Stage 2) e parâmetros
          (Stage 3) por todas as GPUs, eliminando redundância. O ZeRO-3 permite treinar modelos muito
          maiores do que a VRAM de uma GPU permitiria.
        </p>

        <p style={S.p}>
          <strong>Mixed Precision:</strong> o forward pass e backward são computados em BF16/FP16,
          mas os optimizer states mantêm-se em FP32 para estabilidade numérica.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Estratégia</th>
              <th style={S.th}>O que se divide</th>
              <th style={S.th}>Comunicação</th>
              <th style={S.th}>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Data Parallelism', 'Mini-batches', 'All-reduce de gradientes', 'Modelo cabe numa GPU; escalar throughput'],
              ['Tensor Parallelism', 'Matrizes de pesos', 'All-reduce por camada (alto)', 'Camadas demasiado grandes para uma GPU'],
              ['Pipeline Parallelism', 'Camadas (layers)', 'Point-to-point entre estágios', 'Modelo profundo, micro-batching possível'],
              ['ZeRO Stage 3', 'Params + grads + optim', 'All-gather de params', 'Modelos que não cabem em nenhuma GPU'],
            ].map(([a, b, c, d], i) => (
              <tr key={i}>
                <td style={{ ...S.td, fontWeight: 600, color }}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* SVG: 3D parallelism */}
        <div style={S.diagram}>
          {(() => {
            const cTP = '#f97316', cPP = '#f59e0b', cDP = '#ea580c';
            // box dims
            const bw = 100, bh = 44, tpGap = 20, ppGap = 20;
            const rowH = bh + ppGap;
            const repW = bw * 2 + tpGap;
            const repGap = 60;
            const padX = 72; // left padding for PP stage labels
            const padY = 52; // top padding for title + replica label
            const rx = [padX, padX + repW + repGap];
            const W = rx[1] + repW + 20;
            const H = padY + 3 * rowH - ppGap + 60; // 60 for legend

            const stages = ['PP Stage 1', 'PP Stage 2', 'PP Stage 3'];
            const stageColors = ['rgba(249,115,22,0.08)', 'rgba(245,158,11,0.06)', 'rgba(234,88,12,0.07)'];

            return (
              <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
                <defs>
                  <marker id="mTP" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                    <path d="M0,0 L0,7 L7,3.5 z" fill={cTP} />
                  </marker>
                  <marker id="mPP" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                    <path d="M0,0 L0,7 L7,3.5 z" fill={cPP} />
                  </marker>
                  <marker id="mDP" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                    <path d="M0,0 L0,7 L7,3.5 z" fill={cDP} />
                  </marker>
                </defs>

                {/* Title */}
                <text x={W / 2} y={18} textAnchor="middle" fontSize={13} fontWeight={700} fill={color}>3D Parallelism</text>

                {/* PP stage row backgrounds + labels */}
                {stages.map((lbl, pi) => {
                  const y0 = padY + pi * rowH;
                  return (
                    <g key={pi}>
                      <rect x={padX - 6} y={y0 - 4} width={W - padX + 2} height={bh + 8} rx={6} fill={stageColors[pi]} />
                      <text x={padX - 10} y={y0 + bh / 2 + 4} textAnchor="end" fontSize={8} fontWeight={600} fill={cPP}>{lbl}</text>
                    </g>
                  );
                })}

                {/* Replicas */}
                {rx.map((x0, di) => (
                  <g key={di}>
                    {/* Replica label */}
                    <text x={x0 + repW / 2} y={padY - 8} textAnchor="middle" fontSize={9} fill="var(--text-secondary)" fontWeight={600}>
                      {`Data Parallel Replica ${di + 1}`}
                    </text>

                    {[0, 1, 2].map(pi => {
                      const y0 = padY + pi * rowH;
                      return (
                        <g key={pi}>
                          {/* Two TP boxes per row */}
                          {[0, 1].map(ti => {
                            const bx = x0 + ti * (bw + tpGap);
                            return (
                              <g key={ti}>
                                <rect x={bx} y={y0} width={bw} height={bh} rx={6}
                                  fill="rgba(249,115,22,0.13)" stroke={color} strokeWidth={1.5} />
                                <text x={bx + bw / 2} y={y0 + 17} textAnchor="middle" fontSize={9} fontWeight={700} fill={color}>
                                  {`Layer ${pi * 2 + ti + 1}`}
                                </text>
                                <text x={bx + bw / 2} y={y0 + 32} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">
                                  {`GPU ${di * 6 + pi * 2 + ti + 1}`}
                                </text>
                              </g>
                            );
                          })}

                          {/* TP arrow (horizontal, solid) */}
                          <line x1={x0 + bw + 2} y1={y0 + bh / 2}
                            x2={x0 + bw + tpGap - 2} y2={y0 + bh / 2}
                            stroke={cTP} strokeWidth={2} markerEnd="url(#mTP)" />

                          {/* PP arrows (vertical) per column */}
                          {pi < 2 && [0, 1].map(ti => {
                            const cx = x0 + ti * (bw + tpGap) + bw / 2;
                            return (
                              <line key={ti}
                                x1={cx} y1={y0 + bh + 3}
                                x2={cx} y2={y0 + rowH - 3}
                                stroke={cPP} strokeWidth={1.5} strokeDasharray="4,3" markerEnd="url(#mPP)" />
                            );
                          })}
                        </g>
                      );
                    })}
                  </g>
                ))}

                {/* DP arrow between replicas (middle row) */}
                {(() => {
                  const midY = padY + rowH + bh / 2;
                  const x1 = rx[0] + repW + 5, x2 = rx[1] - 5;
                  return (
                    <>
                      <line x1={x1} y1={midY} x2={x2} y2={midY}
                        stroke={cDP} strokeWidth={2.5} strokeDasharray="7,4" markerEnd="url(#mDP)" />
                      <text x={(x1 + x2) / 2} y={midY - 6} textAnchor="middle" fontSize={8} fontWeight={700} fill={cDP}>DP</text>
                    </>
                  );
                })()}

                {/* Legend */}
                {[
                  [cDP, 'Data Parallel (DP)', '7,4', 2.5, 'horizontal'],
                  [cPP, 'Pipeline Parallel (PP)', '4,3', 1.5, 'vertical'],
                  [cTP, 'Tensor Parallel (TP)', null, 2, 'horizontal'],
                ].map(([c, lbl, dash, sw], i) => {
                  const lx = 20 + i * (W / 3);
                  const ly = H - 22;
                  return (
                    <g key={i}>
                      <line x1={lx} y1={ly} x2={lx + 24} y2={ly}
                        stroke={c} strokeWidth={sw} strokeDasharray={dash || undefined} />
                      <text x={lx + 28} y={ly + 4} fontSize={9} fill="var(--text-secondary)">{lbl}</text>
                    </g>
                  );
                })}
              </svg>
            );
          })()}
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. KV Cache — Inferência Eficiente</h2>

        <p style={S.p}>
          Durante a geração autoregressiva, o modelo processa todos os tokens anteriores em cada step.
          As matrizes K (Key) e V (Value) de cada camada de atenção seriam recalculadas repetidamente —
          um desperdício enorme de compute.
        </p>

        <h3 style={S.h3}>Como funciona o KV Cache</h3>
        <p style={S.p}>
          O KV Cache armazena as matrizes K e V de cada camada para todos os tokens já gerados. A cada
          novo step, apenas o token mais recente precisa de ser processado; os K e V anteriores são
          lidos da cache. O custo de memória cresce com a sequência:
        </p>
        <div style={S.math}>
          <BlockMath math={"\\text{Memória}_{KV} = 2 \\times n_{\\text{layers}} \\times n_{\\text{heads}} \\times d_{\\text{head}} \\times L_{\\text{seq}} \\times \\text{bytes}"} />
        </div>

        <h3 style={S.h3}>MHA vs. MQA vs. GQA</h3>
        <p style={S.p}>
          Para reduzir o tamanho do KV cache, foram propostas variantes da atenção multi-head:
        </p>

        {/* SVG: MHA vs MQA vs GQA */}
        <div style={S.diagram}>
          <svg viewBox="0 0 700 200" width="100%" style={{ display: 'block' }}>
            {/* MHA */}
            <g>
              <text x={100} y={20} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>MHA</text>
              <text x={100} y={35} textAnchor="middle" fontSize={9} fill="#6b7280">Multi-Head Attention</text>
              {[0, 1, 2, 3].map(i => (
                <g key={i}>
                  <rect x={20 + i * 40} y={50} width={30} height={22} rx={4}
                    fill="rgba(249,115,22,0.20)" stroke="#f97316" strokeWidth={1} />
                  <text x={35 + i * 40} y={65} textAnchor="middle" fontSize={8} fill="#f97316">Q{i + 1}</text>
                  <rect x={20 + i * 40} y={90} width={30} height={22} rx={4}
                    fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1} />
                  <text x={35 + i * 40} y={105} textAnchor="middle" fontSize={8} fill="#f97316">K{i + 1}</text>
                  <rect x={20 + i * 40} y={130} width={30} height={22} rx={4}
                    fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth={1} />
                  <text x={35 + i * 40} y={145} textAnchor="middle" fontSize={8} fill="#f59e0b">V{i + 1}</text>
                </g>
              ))}
              <text x={100} y={175} textAnchor="middle" fontSize={9} fill="#6b7280">4 K/V por head</text>
            </g>

            {/* MQA */}
            <g transform="translate(230,0)">
              <text x={100} y={20} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>MQA</text>
              <text x={100} y={35} textAnchor="middle" fontSize={9} fill="#6b7280">Multi-Query Attention</text>
              {[0, 1, 2, 3].map(i => (
                <g key={i}>
                  <rect x={20 + i * 40} y={50} width={30} height={22} rx={4}
                    fill="rgba(249,115,22,0.20)" stroke="#f97316" strokeWidth={1} />
                  <text x={35 + i * 40} y={65} textAnchor="middle" fontSize={8} fill="#f97316">Q{i + 1}</text>
                </g>
              ))}
              {/* Single shared K, V */}
              <rect x={75} y={90} width={50} height={22} rx={4}
                fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
              <text x={100} y={105} textAnchor="middle" fontSize={9} fontWeight={700} fill="#f97316">K (shared)</text>
              <rect x={75} y={130} width={50} height={22} rx={4}
                fill="rgba(245,158,11,0.25)" stroke="#f59e0b" strokeWidth={1.5} />
              <text x={100} y={145} textAnchor="middle" fontSize={9} fontWeight={700} fill="#f59e0b">V (shared)</text>
              {[20, 60, 100, 140].map((x, i) => (
                <g key={i}>
                  <line x1={x + 15} y1={72} x2={100} y2={90} stroke="#f97316" strokeWidth={0.8} strokeDasharray="3,2" />
                </g>
              ))}
              <text x={100} y={175} textAnchor="middle" fontSize={9} fill="#6b7280">1 K/V partilhado</text>
            </g>

            {/* GQA */}
            <g transform="translate(460,0)">
              <text x={110} y={20} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>GQA</text>
              <text x={110} y={35} textAnchor="middle" fontSize={9} fill="#6b7280">Grouped-Query Attention</text>
              {[0, 1, 2, 3].map(i => (
                <g key={i}>
                  <rect x={20 + i * 40} y={50} width={30} height={22} rx={4}
                    fill="rgba(249,115,22,0.20)" stroke="#f97316" strokeWidth={1} />
                  <text x={35 + i * 40} y={65} textAnchor="middle" fontSize={8} fill="#f97316">Q{i + 1}</text>
                </g>
              ))}
              {/* Two group K, V */}
              {[0, 1].map(g => (
                <g key={g}>
                  <rect x={30 + g * 100} y={90} width={60} height={22} rx={4}
                    fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
                  <text x={60 + g * 100} y={105} textAnchor="middle" fontSize={8} fontWeight={700} fill="#f97316">K-G{g + 1}</text>
                  <rect x={30 + g * 100} y={130} width={60} height={22} rx={4}
                    fill="rgba(245,158,11,0.18)" stroke="#f59e0b" strokeWidth={1.5} />
                  <text x={60 + g * 100} y={145} textAnchor="middle" fontSize={8} fontWeight={700} fill="#f59e0b">V-G{g + 1}</text>
                </g>
              ))}
              {[[35, 60], [75, 60], [115, 160], [155, 160]].map(([qx, kx], i) => (
                <line key={i} x1={qx} y1={72} x2={kx} y2={90} stroke="#f97316" strokeWidth={0.8} strokeDasharray="3,2" />
              ))}
              <text x={110} y={175} textAnchor="middle" fontSize={9} fill="#6b7280">2 grupos de K/V</text>
            </g>
          </svg>
        </div>

        <div style={S.note}>
          O GQA é o compromisso adoptado pela maioria dos modelos modernos (LLaMA 3, Mistral, Gemma):
          reduz o KV cache significativamente sem a degradação de qualidade do MQA puro.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 7 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Quantização e Compressão</h2>

        <p style={S.p}>
          A quantização reduz a precisão numérica dos pesos do modelo — de FP16 (16 bits) para INT8 ou
          INT4 — diminuindo drásticamente o uso de VRAM e acelerando a inferência, com perda de qualidade
          controlada.
        </p>

        <h3 style={S.h3}>Post-Training Quantization (PTQ)</h3>
        <p style={S.p}>
          A PTQ converte pesos após o treino sem necessidade de re-treinar. O <strong>GPTQ</strong>
          quantiza camada a camada, minimizando o erro quadrático entre a saída original e quantizada:
        </p>
        <div style={S.math}>
          <BlockMath math={"\\hat{W}_q = \\arg\\min_{W_q} \\|WX - W_q X\\|^2"} />
        </div>
        <p style={S.p}>
          O <strong>AWQ (Activation-Aware Weight Quantization)</strong> identifica os pesos mais
          "salientes" — aqueles que correspondem a activações com maior magnitude — e protege-os com
          maior precisão, pois têm impacto desproporcional na qualidade final.
        </p>

        <h3 style={S.h3}>GGUF e inferência em CPU</h3>
        <p style={S.p}>
          O formato <strong>GGUF</strong> (usado pelo llama.cpp) permite quantizações agressivas
          (Q4, Q5, Q8) e inferência eficiente mesmo em CPU. Isto democratizou o acesso a modelos de
          7B–13B em hardware de consumidor.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Precisão</th>
              <th style={S.th}>Bits/peso</th>
              <th style={S.th}>VRAM (7B)</th>
              <th style={S.th}>Perda de Qualidade</th>
              <th style={S.th}>Velocidade Relativa</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['FP32', '32', '~28 GB', 'Nenhuma (referência)', '1×'],
              ['FP16 / BF16', '16', '~14 GB', 'Negligenciável', '1.5-2×'],
              ['INT8', '8', '~7 GB', 'Muito baixa', '2-3×'],
              ['INT4 (GPTQ/AWQ)', '4', '~3.5 GB', 'Baixa a moderada', '3-5×'],
              ['2-bit', '2', '~1.8 GB', 'Alta', '5-8×'],
            ].map(([a, b, c, d, e], i) => (
              <tr key={i}>
                <td style={{ ...S.td, fontWeight: 600, color: i === 0 ? 'var(--text-secondary)' : color }}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
                <td style={S.td}>{e}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* SVG: FP16 -> INT4 distribution */}
        <div style={S.diagram}>
          <svg viewBox="0 0 700 180" width="100%" style={{ display: 'block' }}>
            <text x={350} y={18} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>
              Distribuição de Pesos: FP16 → INT4
            </text>
            {/* FP16 continuous distribution */}
            <g>
              <text x={170} y={20} textAnchor="middle" fontSize={11} fontWeight={600} fill="#f97316">FP16 (contínuo)</text>
              <path d="M 30 155 C 60 155, 80 130, 100 90 C 120 50, 150 35, 170 35 C 190 35, 220 50, 240 90 C 260 130, 280 155, 310 155"
                fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth={2} />
              <line x1={30} y1={155} x2={310} y2={155} stroke="var(--text-secondary)" strokeWidth={1} />
              <text x={170} y={170} textAnchor="middle" fontSize={9} fill="#6b7280">valores contínuos</text>
            </g>
            {/* Arrow */}
            <g>
              <line x1={330} y1={95} x2={360} y2={95} stroke={color} strokeWidth={2} />
              <polygon points="358,91 368,95 358,99" fill={color} />
              <text x={349} y={88} textAnchor="middle" fontSize={9} fill={color}>quantizar</text>
            </g>
            {/* INT4 histogram */}
            <g>
              <text x={530} y={40} textAnchor="middle" fontSize={11} fontWeight={600} fill="#f59e0b">INT4 (16 bins)</text>
              {[0.05, 0.10, 0.20, 0.45, 1.0, 0.90, 0.50, 0.22, 0.12, 0.08, 0.05, 0.03, 0.02, 0.02, 0.01, 0.01].map((h, i) => (
                <g key={i}>
                  <rect x={385 + i * 18} y={155 - h * 100} width={14} height={h * 100} rx={2}
                    fill={`rgba(245,158,11,${0.3 + h * 0.5})`} stroke="#f59e0b" strokeWidth={0.8} />
                </g>
              ))}
              <line x1={385} y1={155} x2={673} y2={155} stroke="var(--text-secondary)" strokeWidth={1} />
              <text x={530} y={170} textAnchor="middle" fontSize={9} fill="#6b7280">16 valores discretos (4 bits = 2⁴)</text>
            </g>
          </svg>
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 8 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Speculative Decoding</h2>

        <p style={S.p}>
          O principal bottleneck da inferência autoregressiva é a sua natureza sequencial: cada token
          requer um forward pass completo do modelo. O speculative decoding quebra este bottleneck
          usando um modelo auxiliar mais rápido.
        </p>

        <h3 style={S.h3}>Como funciona</h3>
        <p style={S.p}>
          Um modelo pequeno e rápido (<em>draft model</em>) gera <InlineMath math={"k"} /> tokens
          candidatos. O modelo grande (<em>verifier</em>) verifica todos os <InlineMath math={"k"} /> tokens
          em paralelo num único forward pass. Se todos forem aceites, obtemos <InlineMath math={"k+1"} /> tokens
          por forward pass do modelo grande — um speedup substancial.
        </p>

        <div style={S.math}>
          <BlockMath math={"\\mathbb{E}[\\text{tokens/step}] = \\frac{1 - \\alpha^{k+1}}{1 - \\alpha}"} />
        </div>
        <p style={S.p}>
          onde <InlineMath math={"\\alpha"} /> é a <em>acceptance rate</em> — a probabilidade de o verifier
          aceitar cada draft token. Com <InlineMath math={"\\alpha = 0.8"} /> e <InlineMath math={"k = 4"} />,
          o speedup esperado é <InlineMath math={"\\approx 3.4 \\times"} />.
        </p>

        <h3 style={S.h3}>Variantes modernas</h3>
        <p style={S.p}>
          O <strong>Self-Speculative Decoding</strong> usa as próprias layers iniciais do modelo como
          draft. O <strong>Medusa</strong> adiciona múltiplas cabeças de predição ao modelo original
          para gerar vários tokens candidatos em paralelo. O <strong>EAGLE</strong> aprende a imitar
          a distribuição do verifier de forma mais eficiente que um draft model independente.
        </p>

        {/* SVG: speculative decoding flow */}
        <div style={S.diagram}>
          <svg viewBox="0 0 720 230" width="100%" style={{ display: 'block' }}>
            <text x={360} y={18} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>
              Speculative Decoding — Fluxo
            </text>

            {/* Draft model */}
            <rect x={20} y={35} width={140} height={50} rx={8}
              fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth={1.5} />
            <text x={90} y={58} textAnchor="middle" fontSize={11} fontWeight={700} fill="#f97316">Draft Model</text>
            <text x={90} y={75} textAnchor="middle" fontSize={9} fill="#6b7280">(modelo pequeno)</text>

            {/* Draft tokens */}
            {['t₁', 't₂', 't₃', 't₄'].map((t, i) => (
              <g key={i}>
                <rect x={185 + i * 52} y={42} width={40} height={36} rx={6}
                  fill="rgba(249,115,22,0.20)" stroke="#f97316" strokeWidth={1} />
                <text x={205 + i * 52} y={64} textAnchor="middle" fontSize={12} fontWeight={700} fill="#f97316">{t}</text>
              </g>
            ))}
            <text x={370} y={100} textAnchor="middle" fontSize={9} fill="#6b7280">k=4 tokens draft (sequencial)</text>

            {/* Arrow down to verifier */}
            <line x1={360} y1={103} x2={360} y2={118} stroke={color} strokeWidth={1.5} />
            <polygon points="356,118 360,126 364,118" fill={color} />
            <text x={400} y={115} fontSize={9} fill={color}>verificar em paralelo</text>

            {/* Verifier */}
            <rect x={20} y={130} width={140} height={50} rx={8}
              fill={`rgba(249,115,22,0.10)`} stroke={color} strokeWidth={1.5} />
            <text x={90} y={153} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>Verifier</text>
            <text x={90} y={170} textAnchor="middle" fontSize={9} fill="#6b7280">(modelo grande)</text>

            {/* Verification results */}
            {[
              { t: 't₁', ok: true },
              { t: 't₂', ok: true },
              { t: 't₃', ok: true },
              { t: 't₄', ok: false },
            ].map(({ t, ok }, i) => (
              <g key={i}>
                <rect x={185 + i * 52} y={137} width={40} height={36} rx={6}
                  fill={ok ? 'rgba(249,115,22,0.10)' : 'rgba(249,115,22,0.10)'}
                  stroke={ok ? color : '#f97316'} strokeWidth={1.5} />
                <text x={205 + i * 52} y={155} textAnchor="middle" fontSize={11} fontWeight={700}
                  fill={ok ? color : '#f97316'}>{t}</text>
                <text x={205 + i * 52} y={168} textAnchor="middle" fontSize={10}
                  fill={ok ? color : '#f97316'}>{ok ? '✓' : '✗'}</text>
              </g>
            ))}

            {/* Final token from verifier */}
            <rect x={397} y={137} width={40} height={36} rx={6}
              fill={`rgba(249,115,22,0.10)`} stroke={color} strokeWidth={2} />
            <text x={417} y={155} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>t₅</text>
            <text x={417} y={168} textAnchor="middle" fontSize={9} fill={color}>novo</text>

            <text x={360} y={200} textAnchor="middle" fontSize={10} fill={color} fontWeight={600}>
              3 tokens aceites + 1 token novo = 4 tokens num único forward pass do verifier
            </text>
            <text x={360} y={218} textAnchor="middle" fontSize={9} fill="#6b7280">
              (t₄ rejeitado — verifier substitui com a sua própria predição)
            </text>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>Condição de correcção:</strong> o speculative decoding é exactamente equivalente
          à geração pelo modelo grande — não há perda de qualidade. O truque é que o verifier pode
          verificar todos os drafts em paralelo porque processa a sequência completa de uma vez,
          tal como no prefill.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Synthesis ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Síntese do Módulo</h2>

        <p style={S.p}>
          O pós-treino moderno é um ciclo iterativo que combina SFT, Reward Modelling e RLHF/DPO,
          alimentado por um data flywheel de dados de produção. Os dados sintéticos — via Self-Instruct,
          destilação ou STaR — permitem escalar o treino para além do que os anotadores humanos
          conseguem produzir.
        </p>

        <p style={S.p}>
          As scaling laws de Chinchilla estabelecem que o treino óptimo equilibra parâmetros e tokens
          (~20 tokens por parâmetro), uma descoberta que redefiniu como a indústria dimensiona os seus
          modelos. A infra de treino distribui este processo por milhares de GPUs via data, tensor e
          pipeline parallelism, com ZeRO a eliminar redundância de memória.
        </p>

        <p style={S.p}>
          Do lado da inferência, o KV cache elimina cálculos redundantes; GQA e MQA reduzem o seu
          tamanho; a quantização (GPTQ, AWQ, GGUF) comprime pesos para INT4 com impacto mínimo na
          qualidade; e o speculative decoding multiplica o throughput sem qualquer perda de qualidade,
          usando um draft model rápido e um verifier paralelo.
        </p>

        
          <strong>Conceitos-chave deste módulo:</strong>
          <ul style={{ margin: '0.5rem 0 0 1.2rem', paddingLeft: 0, color: 'var(--text-primary)', lineHeight: 2 }}>
            <li>Pipeline SFT → RM → RLHF e o data flywheel iterativo</li>
            <li>Self-Instruct, Alpaca e destilação de conhecimento com loss KL</li>
            <li>ORM vs. PRM vs. GRPO; STaR e SPIN para raciocínio sintético</li>
            <li>Chinchilla scaling: <InlineMath math={"N^* \\propto C^{0.5}"} />, ~20 tokens/parâmetro</li>
            <li>3D Parallelism: data × tensor × pipeline + ZeRO</li>
            <li>KV Cache, MHA/MQA/GQA e custo de memória</li>
            <li>PTQ, GPTQ, AWQ e o espectro FP16 → INT4</li>
            <li>Speculative decoding: <InlineMath math={"\\mathbb{E}[\\text{tokens/step}] = (1-\\alpha^{k+1})/(1-\\alpha)"} /></li>
          </ul>
        
      </section>
    </div>
  );
}
