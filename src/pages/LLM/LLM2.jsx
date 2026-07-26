import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#4a9eed';
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
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(74,158,237,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

export default function LLM2() {
  return (
    <div style={S.page}>
      <Link to="/llm" style={S.back}><ArrowLeft size={16} /> Voltar a LLMs &amp; Agents</Link>

      <div style={S.tag}>MÓDULO 01</div>
      <h1 style={S.h1}>Pré-treino de LLMs</h1>

      {/* ── SECTION 1 ────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Filosofia do Transfer Learning</h2>

        <p style={S.p}>
          O <strong>transfer learning</strong> é a ideia central por trás dos LLMs modernos: em vez de treinar um modelo do zero para cada tarefa, treina-se primeiro um modelo muito grande num corpus massivo e genérico. Esse modelo aprende representações ricas da linguagem — sintaxe, semântica, factos do mundo, raciocínio básico — que depois são transferidas e especializadas para tarefas concretas com muito menos dados e compute.
        </p>

        <div style={S.highlight}>
          <strong>Analogia linguística:</strong> aprender uma língua estrangeira (pré-treino) é diferente de aprender as regras de gramática para um exame específico (fine-tuning). A língua é o conhecimento geral; o exame é a especialização. Um falante fluente adapta-se a qualquer registo com poucos exemplos — é exactamente o que acontece com LLMs.
        </div>

        <p style={S.p}>
          O pipeline tem três fases sequenciais: <strong>Pré-treino</strong> em corpus massivo com objectivo auto-supervisionado, <strong>Fine-tuning</strong> em dados de tarefa específica (ou pares instrução–resposta), e <strong>Deployment</strong> em produção com possível adaptação contínua.
        </p>

        {/* SVG: Pipeline Pré-treino → Fine-tuning → Deployment */}
        <div style={S.diagram}>
          <svg viewBox="0 0 760 175" width="100%" style={{ display: 'block' }}>
            {/* Box 1: Corpus */}
            <rect x="10" y="55" width="130" height="65" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
            <text x="75" y="76" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">Corpus Massivo</text>
            <text x="75" y="93" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">CommonCrawl, livros,</text>
            <text x="75" y="108" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Wikipedia, código</text>

            {/* Arrow 1 */}
            <path d="M 140 87 L 190 87" stroke="#4a9eed" strokeWidth="2" fill="none" markerEnd="url(#arr2a)" />
            <defs>
              <marker id="arr2a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
              </marker>
            </defs>
            <text x="165" y="79" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">auto-sup.</text>

            {/* Box 2: Pré-treino */}
            <rect x="190" y="55" width="140" height="65" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
            <text x="260" y="76" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">Pré-treino</text>
            <text x="260" y="93" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">CLM / MLM em</text>
            <text x="260" y="108" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">triliões de tokens</text>

            {/* Arrow 2 */}
            <path d="M 330 87 L 385 87" stroke="#4a9eed" strokeWidth="2" fill="none" markerEnd="url(#arr2b)" />
            <defs>
              <marker id="arr2b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
              </marker>
            </defs>
            <text x="357" y="79" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">SFT / RLHF</text>

            {/* Box 3: Fine-tuning */}
            <rect x="385" y="55" width="140" height="65" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
            <text x="455" y="76" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">Fine-tuning</text>
            <text x="455" y="93" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">instrução–resposta,</text>
            <text x="455" y="108" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">RLHF, PEFT</text>

            {/* Arrow 3 */}
            <path d="M 525 87 L 580 87" stroke="#4a9eed" strokeWidth="2" fill="none" markerEnd="url(#arr2c)" />
            <defs>
              <marker id="arr2c" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
              </marker>
            </defs>
            <text x="552" y="79" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">deploy</text>

            {/* Box 4: Deployment */}
            <rect x="580" y="55" width="160" height="65" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
            <text x="660" y="76" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">Deployment</text>
            <text x="660" y="93" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">API, produto,</text>
            <text x="660" y="108" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">adaptação contínua</text>

            {/* Label top */}
            <text x="380" y="25" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">Pipeline Transfer Learning</text>
          </svg>
        </div>

        <p style={S.p}>
          Esta abordagem é drasticamente mais eficiente do que treinar modelos especializados do zero: o conhecimento geral adquirido no pré-treino reduz os dados necessários para fine-tuning em ordens de magnitude.
        </p>

        <div style={S.note}>
          A <strong>lei de escala de Kaplan et al. (2020)</strong> mostrou que a perda de pré-treino segue uma lei de potência em relação ao número de parâmetros, tokens e compute. O trabalho Chinchilla (Hoffmann et al., 2022) refinou: o óptimo é aproximadamente 20 tokens de treino por parâmetro.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 2 ────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. GPT — Causal Language Model</h2>

        <p style={S.p}>
          A família <strong>GPT</strong> (Generative Pre-trained Transformer, OpenAI) utiliza arquitectura decoder-only com <em>causal language modelling</em>: o modelo aprende a distribuição conjunta de uma sequência de tokens factorizada auto-regressivamente.
        </p>

        <div style={S.math}>
          <BlockMath math={"P(x_1, \\ldots, x_n) = \\prod_{i=1}^{n} P(x_i \\mid x_1, \\ldots, x_{i-1})"} />
        </div>

        <p style={S.p}>
          O objectivo de treino é minimizar a entropia cruzada negativa (equivalente a maximizar a log-verosimilhança):
        </p>

        <div style={S.math}>
          <BlockMath math={"\\mathcal{L}_{\\text{CLM}} = -\\sum_{i=1}^{n} \\log P(x_i \\mid x_1, \\ldots, x_{i-1})"} />
        </div>

        <h3 style={S.h3}>Inputs, Outputs e Erro Durante o Treino</h3>
        <p style={S.p}>
          Na prática, o pré-treino não usa pares (pergunta, resposta) — usa apenas <strong>texto contínuo</strong>. O truque que transforma "prever o próximo token" num problema de treino supervisionado chama-se <strong>teacher forcing</strong>: a partir de uma única sequência de tokens, cria-se o input e o target simplesmente <em>desalinhando-os em uma posição</em>.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Posição</th>
              <th style={S.th}>1</th>
              <th style={S.th}>2</th>
              <th style={S.th}>3</th>
              <th style={S.th}>4</th>
              <th style={S.th}>5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...S.td, fontWeight: 700 }}>Input (x)</td>
              <td style={S.td}>O</td>
              <td style={S.td}>gato</td>
              <td style={S.td}>senta</td>
              <td style={S.td}>no</td>
              <td style={S.td}>tapete</td>
            </tr>
            <tr>
              <td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>Target (y)</td>
              <td style={S.td}>gato</td>
              <td style={S.td}>senta</td>
              <td style={S.td}>no</td>
              <td style={S.td}>tapete</td>
              <td style={S.td}>[EOS]</td>
            </tr>
          </tbody>
        </table>

        <p style={S.p}>
          O <strong>target é o próprio input, deslocado uma posição para a esquerda</strong> (<InlineMath math={"y_i = x_{i+1}"} />). Isto significa que uma única frase de <InlineMath math={"n"} /> tokens gera <InlineMath math={"n"} /> exemplos de treino simultaneamente — um por posição — sem qualquer anotação humana. É por isto que se chama <em>auto-supervisionado</em>: o próprio texto fornece o "label" a cada passo.
        </p>

        <div style={S.highlight}>
          <strong>Não são frases aleatórias.</strong> O corpus de pré-treino (secção 3) é composto por texto real e coerente — artigos, livros, código, páginas web — cortado em blocos do tamanho do contexto do modelo (ex.: 2 048, 8 192 ou mais tokens seguidos, tal como aparecem no documento original). O modelo nunca vê palavras baralhadas ao acaso: vê linguagem genuína, com toda a sua estrutura gramatical, factual e lógica intacta. É precisamente <em>porque</em> o texto é coerente que prever o próximo token obriga o modelo a aprender sintaxe, semântica e conhecimento do mundo — prever a continuação de texto aleatório não ensinaria nada de útil.
        </div>

        <h3 style={S.h3}>Aprende a repetir frases, ou aprende um padrão geral?</h3>
        <p style={S.p}>
          A pergunta natural é: se o modelo vê sempre a mesma frase durante o treino, não estará simplesmente a <strong>memorizá-la e a repeti-la</strong>, sem realmente "aprender" nada? A resposta tem duas partes.
        </p>
        <p style={S.p}>
          Primeiro, cada frase individual é vista <strong>muito poucas vezes</strong> — tipicamente 1 a 4 vezes em todo o treino, espalhadas por triliões de tokens de texto totalmente diferente entre cada visualização. Um único ajuste de pesos, com uma <em>learning rate</em> pequena, não é suficiente para o modelo "decorar" essa frase especificamente — o gradiente de uma frase é uma correcção minúscula, imediatamente sobreposta por milhões de outras correcções de frases completamente distintas antes de a mesma frase voltar a aparecer (se voltar).
        </p>
        <p style={S.p}>
          Segundo, e mais importante: como o mesmo mecanismo de previsão (as mesmas matrizes de pesos) tem de funcionar para <strong>milhares de milhões de frases diferentes</strong>, os pesos só conseguem reduzir o erro médio se aprenderem <em>regularidades reutilizáveis</em> — que "de" é frequentemente seguido de um substantivo, que "Paris" está associado a "França", que código Python tem indentação consistente, que uma pergunta costuma ser seguida de uma resposta relevante. Memorizar frase a frase não reduziria o erro global; generalizar sim. O treino por gradiente descendente favorece naturalmente a solução que funciona bem <em>em média</em> sobre todo o corpus, não a solução que decora exemplos individuais.
        </p>

        <h3 style={S.h3}>O que o modelo produz e como se mede o erro</h3>
        <p style={S.p}>
          Em cada posição <InlineMath math={"i"} />, o modelo não produz um token — produz um <strong>vector de logits</strong> do tamanho do vocabulário (tipicamente 30 000–150 000 dimensões), que a softmax converte numa distribuição de probabilidade <InlineMath math={"P(\\cdot \\mid x_1, \\ldots, x_i)"} /> sobre <em>todos</em> os tokens possíveis para a posição seguinte.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 700 240" width="100%" style={{ display: 'block' }}>
            <text x="350" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">De um Token de Input a um Valor de Erro</text>

            <text x="55" y="48" textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">token de input</text>
            <rect x="10" y="55" width="90" height="34" rx="7" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
            <text x="55" y="76" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4a9eed">"no"</text>

            <path d="M 100 72 L 145 72" stroke="#4a9eed" strokeWidth="2" fill="none" markerEnd="url(#arrIO1)" />
            <defs><marker id="arrIO1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" /></marker></defs>

            <rect x="147" y="50" width="110" height="44" rx="7" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
            <text x="202" y="68" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#4a9eed">Transformer</text>
            <text x="202" y="81" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">(todas as camadas)</text>

            <path d="M 257 72 L 300 72" stroke="#4a9eed" strokeWidth="2" fill="none" markerEnd="url(#arrIO2)" />
            <defs><marker id="arrIO2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" /></marker></defs>

            <rect x="302" y="40" width="130" height="64" rx="7" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
            <text x="367" y="60" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#4a9eed">Logits → Softmax</text>
            <text x="367" y="75" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">P(tapete)=0.62</text>
            <text x="367" y="87" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">P(chão)=0.15 ...</text>
            <text x="367" y="99" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">(sobre todo o vocabulário)</text>

            <path d="M 432 72 L 475 72" stroke="#4a9eed" strokeWidth="2" fill="none" markerEnd="url(#arrIO3)" />
            <defs><marker id="arrIO3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" /></marker></defs>

            <rect x="477" y="40" width="90" height="64" rx="7" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
            <text x="522" y="62" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#4a9eed">Target real</text>
            <text x="522" y="78" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-primary)">"tapete"</text>
            <text x="522" y="92" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">(y verdadeiro)</text>

            <path d="M 367 104 L 367 125 L 522 125 L 522 104" stroke="#4a9eed" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
            <path d="M 445 125 L 445 152" stroke="#4a9eed" strokeWidth="2" fill="none" markerEnd="url(#arrIO4)" />
            <defs><marker id="arrIO4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" /></marker></defs>

            <rect x="355" y="154" width="180" height="34" rx="7" fill="rgba(74,158,237,0.12)" stroke="#4a9eed" strokeWidth="2" />
            <text x="445" y="175" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4a9eed">erro = −log(0.62) ≈ 0.48</text>

            <text x="350" y="220" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Este erro, e o seu gradiente, é o único sinal que actualiza os pesos do modelo</text>
          </svg>
        </div>

        <p style={S.p}>
          O <strong>erro</strong> (loss) nessa posição é simplesmente <InlineMath math={"-\\log P(\\text{tapete})"} /> — a log-probabilidade negativa que o modelo atribuiu ao token que <em>realmente</em> apareceu a seguir. Se o modelo tivesse atribuído probabilidade quase 1 ao token correcto, o erro seria próximo de 0; se tivesse atribuído probabilidade quase 0, o erro tende para infinito — uma penalização muito mais severa para erros "confiantes" do que para incerteza.
        </p>

        <p style={S.p}>
          A perda final de um batch é a <strong>média</strong> deste erro por token, sobre todas as posições de todas as sequências do batch — exactamente o somatório <InlineMath math={"\\mathcal{L}_{\\text{CLM}}"} /> mostrado acima, normalizado pelo número total de tokens. É este valor escalar, e o seu gradiente em relação a cada peso do modelo, que a backpropagation usa para actualizar os parâmetros a cada passo de optimização.
        </p>

        <div style={S.note}>
          Nada disto exige anotação humana: o "correcto" em cada posição é sempre o token seguinte real do corpus. É por esta razão que se pode pré-treinar em triliões de tokens de texto bruto — o próprio texto gera, de forma automática, tanto o input como o target em cada exemplo.
        </div>

        <h3 style={S.h3}>Geração auto-regressiva com causal mask</h3>
        <p style={S.p}>
          Durante o pré-treino, a <strong>causal mask</strong> (máscara triangular inferior) garante que a atenção na posição <InlineMath math={"i"} /> só pode atender a posições <InlineMath math={"j \\leq i"} />. Durante a inferência, os tokens são gerados um a um, sendo cada token novo concatenado ao contexto para gerar o seguinte.
        </p>

        {/* SVG: GPT unfolded generation com causal mask */}
        <div style={S.diagram}>
          <svg viewBox="0 0 720 200" width="100%" style={{ display: 'block' }}>
            <text x="360" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">GPT — Geração Auto-regressiva com Causal Mask</text>

            {/* Tokens */}
            {['O', 'gato', 'senta', 'no', 'tapete', '↓next'].map((tok, i) => {
              const x = 40 + i * 110;
              const isNext = tok === '↓next';
              return (
                <g key={i}>
                  <rect x={x} y="40" width="90" height="34" rx="7"
                    fill={isNext ? 'rgba(74,158,237,0.10)' : 'rgba(74,158,237,0.10)'}
                    stroke={isNext ? '#4a9eed' : 'rgba(74,158,237,0.10)'} strokeWidth={isNext ? 2 : 1} />
                  <text x={x + 45} y="62" textAnchor="middle" fontSize="11"
                    fontWeight={isNext ? 700 : 500} fill={isNext ? '#4a9eed' : 'var(--text-primary)'}>{tok}</text>
                </g>
              );
            })}

            {/* Causal attention lines — only attend to previous */}
            {[1, 2, 3, 4].map(i => (
              Array.from({ length: i }, (_, j) => (
                <line key={`${i}-${j}`}
                  x1={85 + j * 110} y1="90"
                  x2={85 + i * 110} y2="90"
                  stroke="rgba(74,158,237,0.10)" strokeWidth="1" />
              ))
            ))}

            {/* Main causal arrow flow */}
            <path d="M 85 90 L 195 90 L 305 90 L 415 90 L 525 90 L 635 90"
              stroke="#4a9eed" strokeWidth="2" fill="none" markerEnd="url(#arrGPT)" strokeDasharray="6 3" />
            <defs>
              <marker id="arrGPT" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
              </marker>
            </defs>
            <text x="360" y="112" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Cada posição só atende a posições anteriores (causal mask)</text>

            {/* Output probabilities */}
            <text x="85" y="140" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">P(·|O)</text>
            <text x="195" y="140" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">P(·|O,gato)</text>
            <text x="305" y="140" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">P(·|...)</text>
            <text x="415" y="140" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">P(·|...)</text>
            <text x="525" y="140" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">P(·|...)</text>
            <text x="635" y="140" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4a9eed">sample/argmax</text>

            <text x="360" y="175" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Token gerado é concatenado ao contexto → próxima iteração</text>
          </svg>
        </div>

        <h3 style={S.h3}>Evolução GPT-1 → GPT-2 → GPT-3</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>Parâmetros</th>
              <th style={S.th}>Tokens de treino</th>
              <th style={S.th}>Contexto (tokens)</th>
              <th style={S.th}>Destaque</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>GPT-1</strong> (2018)</td>
              <td style={S.td}>117M</td>
              <td style={S.td}>~1B (BooksCorpus)</td>
              <td style={S.td}>512</td>
              <td style={S.td}>Provou transfer learning em NLP</td>
            </tr>
            <tr>
              <td style={S.td}><strong>GPT-2</strong> (2019)</td>
              <td style={S.td}>1.5B</td>
              <td style={S.td}>~10B (WebText)</td>
              <td style={S.td}>1 024</td>
              <td style={S.td}>Zero-shot surpreendente; inicialmente restrito</td>
            </tr>
            <tr>
              <td style={S.td}><strong>GPT-3</strong> (2020)</td>
              <td style={S.td}>175B</td>
              <td style={S.td}>300B</td>
              <td style={S.td}>2 048</td>
              <td style={S.td}>Few-shot learning emergente; base do ChatGPT</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          A diferença qualitativa entre GPT-2 e GPT-3 ilustra a <strong>emergência</strong>: capacidades de few-shot e raciocínio em cadeia (chain-of-thought) surgem de forma não-linear com a escala — não são extrapoláveis linearmente de modelos menores.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 3 ────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Dados de Pré-treino — Corpus, Limpeza e Deduplicação</h2>

        <p style={S.p}>
          A qualidade e composição do corpus de pré-treino determinam, mais do que qualquer escolha arquitectónica, o comportamento final do modelo. Um LLM não "sabe" nada que não esteja, directa ou indirectamente, representado no seu corpus de treino — e dados mal filtrados propagam-se em enviesamentos, erros factuais e vulnerabilidades que nenhum fine-tuning posterior remove por completo.
        </p>

        <h3 style={S.h3}>Fontes e mistura (data mixture)</h3>
        <p style={S.p}>
          O corpus típico de um LLM moderno combina várias fontes, cada uma com uma proporção (peso de amostragem) escolhida deliberadamente — não simplesmente proporcional ao tamanho bruto de cada fonte:
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Fonte</th>
              <th style={S.th}>Contributo típico</th>
              <th style={S.th}>Porquê</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>CommonCrawl (filtrado)</strong></td>
              <td style={S.td}>~60–80% dos tokens</td>
              <td style={S.td}>Maior volume disponível; cobre a diversidade natural da linguagem, mas exige filtragem agressiva</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Código (GitHub, etc.)</strong></td>
              <td style={S.td}>~5–10%</td>
              <td style={S.td}>Melhora raciocínio estruturado e desempenho em tarefas lógicas, mesmo fora de programação</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Livros e artigos científicos</strong></td>
              <td style={S.td}>~5–10%</td>
              <td style={S.td}>Texto longo, coerente e bem editado — contraste útil ao ruído da web</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Wikipedia</strong></td>
              <td style={S.td}>~1–3%</td>
              <td style={S.td}>Densidade factual alta; sobre-amostrada relativamente ao seu peso natural</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Fóruns e diálogo (Reddit, etc.)</strong></td>
              <td style={S.td}>~2–5%</td>
              <td style={S.td}>Regista estrutura conversacional, útil como precursor do comportamento de chat</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          Fontes de maior qualidade (Wikipedia, livros) são tipicamente <strong>sobre-amostradas</strong> — repetidas mais vezes durante o treino do que o seu peso natural no corpus bruto sugeriria — porque a densidade de sinal por token é mais alta. Isto é uma decisão explícita de curriculum, não um acidente.
        </div>

        <h3 style={S.h3}>Pipeline de limpeza</h3>
        <p style={S.p}>
          O texto bruto de crawls da web contém uma proporção enorme de ruído: boilerplate HTML, texto duplicado, spam, e conteúdo de baixa qualidade linguística. Um pipeline típico de limpeza aplica, em sequência:
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 740 130" width="100%" style={{ display: 'block' }}>
            {[
              { label: 'Extracção', sub: 'HTML → texto' },
              { label: 'Filtragem de qualidade', sub: 'classificador / heurísticas' },
              { label: 'Deduplicação', sub: 'exacta + near-dup (MinHash)' },
              { label: 'Filtragem de conteúdo', sub: 'PII, tóxico, NSFW' },
              { label: 'Tokenização', sub: 'BPE / corpus final' },
            ].map(({ label, sub }, i) => {
              const x = 10 + i * 148;
              return (
                <g key={i}>
                  <rect x={x} y="30" width="130" height="60" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
                  <text x={x + 65} y="55" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4a9eed">{label}</text>
                  <text x={x + 65} y="72" textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">{sub}</text>
                  {i < 4 && (
                    <path d={`M ${x + 140} 60 L ${x + 148} 60`} stroke="#4a9eed" strokeWidth="2" fill="none" markerEnd="url(#arrData)" />
                  )}
                </g>
              );
            })}
            <defs>
              <marker id="arrData" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
              </marker>
            </defs>
            <text x="370" y="115" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Cada etapa remove tipicamente 30–70% do volume de entrada</text>
          </svg>
        </div>

        <h3 style={S.h3}>Deduplicação</h3>
        <p style={S.p}>
          Documentos duplicados ou quase-duplicados (near-duplicates) são extremamente comuns em crawls da web — o mesmo artigo republicado em dezenas de sites, por exemplo. Sem deduplicação, o modelo memoriza esses trechos desproporcionalmente, o que piora a generalização e aumenta o risco de <em>regurgitação</em> verbatim de texto de treino.
        </p>
        <p style={S.p}>
          A deduplicação exacta (hash do documento completo) é insuficiente porque não apanha duplicados com pequenas variações. Por isso usa-se tipicamente <strong>MinHash + Locality-Sensitive Hashing (LSH)</strong>: uma técnica de hashing aproximado que agrupa documentos com alta sobreposição de n-gramas sem comparar todos os pares (o que seria <InlineMath math={"O(n^2)"} /> e inviável à escala de triliões de tokens).
        </p>

        <div style={S.highlight}>
          <strong>Contaminação de benchmarks:</strong> se o corpus de pré-treino contém, mesmo que acidentalmente, os dados de teste de um benchmark popular, os resultados desse benchmark deixam de ser uma medida válida de generalização. A deduplicação entre o corpus de treino e os conjuntos de avaliação conhecidos é uma etapa standard — e ainda assim imperfeita, dado o tamanho dos corpora modernos.
        </div>

        <div style={S.note}>
          O trabalho <strong>The Pile</strong> (EleutherAI) e <strong>FineWeb</strong> (HuggingFace) documentam publicamente estas decisões de curadoria, e são hoje referências de facto para entender a composição de corpora de pré-treino em detalhe.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 4 ────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Leis de Escala — Kaplan e Chinchilla</h2>

        <p style={S.p}>
          Uma das descobertas mais influentes em LLMs é que a perda de pré-treino segue relações previsíveis — <strong>leis de potência</strong> — em função do número de parâmetros do modelo, do número de tokens de treino, e do compute total. Isto permite prever o desempenho de um modelo maior <em>antes</em> de o treinar, algo raro em deep learning.
        </p>

        <h3 style={S.h3}>A lei de Kaplan et al. (2020)</h3>
        <p style={S.p}>
          Kaplan et al. mostraram que a perda de teste <InlineMath math={"L"} /> decresce como uma lei de potência em relação a cada um dos três factores, mantendo os outros suficientemente grandes para não serem o gargalo:
        </p>

        <div style={S.math}>
          <BlockMath math={"L(N) = \\left(\\frac{N_c}{N}\\right)^{\\alpha_N}, \\quad L(D) = \\left(\\frac{D_c}{D}\\right)^{\\alpha_D}, \\quad L(C) = \\left(\\frac{C_c}{C}\\right)^{\\alpha_C}"} />
        </div>

        <p style={S.p}>
          onde <InlineMath math={"N"} /> é o número de parâmetros, <InlineMath math={"D"} /> o número de tokens de treino, <InlineMath math={"C"} /> o compute total, e <InlineMath math={"N_c, D_c, C_c, \\alpha_N, \\alpha_D, \\alpha_C"} /> são constantes empíricas ajustadas a partir de centenas de treinos a diferentes escalas.
        </p>

        <div style={S.note}>
          A conclusão prática de Kaplan et al. foi que, dado um orçamento de compute fixo, é mais eficiente treinar modelos <strong>maiores</strong> com <strong>menos tokens</strong> do que modelos pequenos exaustivamente treinados. Esta conclusão viria a ser corrigida por Hoffmann et al. (Chinchilla) três anos depois.
        </div>

        <h3 style={S.h3}>A correcção Chinchilla (Hoffmann et al., 2022)</h3>
        <p style={S.p}>
          O trabalho Chinchilla repetiu a análise com uma grelha de treinos mais ampla e uma metodologia de ajuste diferente, e chegou a uma conclusão que contradiz directamente a prática da época: os modelos GPT-3 e semelhantes estavam <strong>substancialmente subtreinados</strong> — grandes demais para o número de tokens que tinham visto.
        </p>

        <p style={S.p}>
          Para um orçamento de compute fixo <InlineMath math={"C \\approx 6ND"} /> (aproximação padrão de FLOPs por token num Transformer), a alocação óptima entre parâmetros e tokens satisfaz:
        </p>

        <div style={S.math}>
          <BlockMath math={"N_{\\text{opt}} \\propto C^{0.5}, \\qquad D_{\\text{opt}} \\propto C^{0.5}"} />
        </div>

        <p style={S.p}>
          Ou seja, parâmetros e tokens devem escalar <strong>na mesma proporção</strong> — ao contrário da recomendação de Kaplan, que favorecia escalar parâmetros mais rapidamente que dados. Na prática, isto traduz-se na regra popularizada de <strong>≈20 tokens de treino por parâmetro</strong>.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>Parâmetros</th>
              <th style={S.th}>Tokens de treino</th>
              <th style={S.th}>Tokens/parâmetro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>GPT-3</strong> (2020, pré-Chinchilla)</td>
              <td style={S.td}>175B</td>
              <td style={S.td}>300B</td>
              <td style={S.td}>≈1.7×  (subtreinado)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Chinchilla</strong> (2022)</td>
              <td style={S.td}>70B</td>
              <td style={S.td}>1.4T</td>
              <td style={S.td}>≈20×  (compute-óptimo)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Llama 2/3</strong> e sucessores</td>
              <td style={S.td}>7–70B</td>
              <td style={S.td}>2–15T</td>
              <td style={S.td}>&gt;20×  (além do óptimo — ver nota)</td>
            </tr>
          </tbody>
        </table>

        <div style={S.highlight}>
          Chinchilla (70B) supera GPT-3 (175B) em benchmarks, apesar de ter menos de metade dos parâmetros — porque foi treinado com muito mais tokens para o mesmo orçamento de compute. É a demonstração empírica mais citada de que "mais parâmetros" não é sinónimo de "melhor modelo" sem dados suficientes para os acompanhar.
        </div>

        <div style={S.note}>
          Modelos mais recentes (Llama 3, por exemplo) treinam deliberadamente <em>além</em> do ponto compute-óptimo de Chinchilla — aceitando um treino mais caro em troca de um modelo final mais pequeno e barato de <strong>inferir</strong> em produção. A óptica de Chinchilla optimiza o custo de treino; na prática, o custo de inferência acumulado ao longo da vida do modelo pesa cada vez mais nesta decisão.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 5 ────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Codificação de Posição Moderna — RoPE e ALiBi</h2>

        <p style={S.p}>
          O positional encoding sinusoidal original do Transformer (Vaswani et al., 2017) funciona bem para os comprimentos de contexto vistos durante o treino, mas generaliza mal para sequências mais longas do que as usadas no pré-treino. LLMs modernos precisam de suportar contextos de dezenas ou centenas de milhares de tokens, o que motivou duas alternativas amplamente adoptadas.
        </p>

        <h3 style={S.h3}>O que é o Context Window, e porque é limitado?</h3>
        <p style={S.p}>
          O <strong>context window</strong> é o número máximo de tokens (prompt + histórico + resposta gerada até ao momento) que o modelo consegue processar de uma só vez. Os LLMs são <strong>stateless</strong>: entre chamadas à API não existe memória nenhuma — tudo o que o modelo "sabe" sobre a conversa tem de estar, literalmente, dentro dessa janela de tokens a cada chamada.
        </p>
        <p style={S.p}>
          O limite não é arbitrário: o self-attention calcula interacções entre <strong>todos os pares</strong> de tokens da sequência, um custo que cresce com <InlineMath math={"O(n^2)"} /> em tempo e memória, onde <InlineMath math={"n"} /> é o número de tokens. Duplicar o contexto quadruplica o custo do mecanismo de atenção — é por isso que aumentar o context window não é apenas "mudar um número", mas um problema de eficiência que motivou, entre outras coisas, o desenvolvimento do RoPE e do ALiBi abaixo (que permitem generalizar para contextos mais longos do que os vistos em treino) e de mecanismos de atenção mais eficientes (FlashAttention, atenção esparsa).
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Modelo</th><th style={S.th}>Ano</th><th style={S.th}>Context Window</th></tr></thead>
            <tbody>
              {[['GPT-3', '2020', '4.096 tokens'], ['GPT-4', '2023', '8k / 32k tokens'], ['Claude 3', '2024', '200k tokens'], ['Gemini 2.5', '2025', '1M tokens']].map(([m, y, c]) => (
                <tr key={m}><td style={S.td}><strong>{m}</strong></td><td style={S.td}>{y}</td><td style={{ ...S.td, fontFamily: 'monospace', color, fontWeight: 600 }}>{c}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Um context window maior não resolve tudo: modelos com janelas enormes ainda sofrem de{' '}
          <em>"lost in the middle"</em> — informação colocada no meio de um contexto muito longo é
          recuperada com menos fiabilidade do que informação no início ou no fim. Um contexto grande
          aumenta o que <em>cabe</em>, mas não garante que o modelo use bem tudo o que lá está — daí a
          relevância de técnicas de RAG (Módulo 04) para trazer só a informação relevante, em vez de
          despejar tudo no prompt.
        </div>

        <h3 style={S.h3}>RoPE — Rotary Position Embedding</h3>
        <p style={S.p}>
          O <strong>RoPE</strong> (Su et al., 2021), usado em LLaMA, Mistral, Qwen e a maioria dos LLMs open-source actuais, codifica a posição rodando os vectores de query e key num espaço complexo, em vez de os somar a um vector de posição fixo:
        </p>

        <div style={S.math}>
          <BlockMath math={"f(x, m) = \\left(x_1 \\cos m\\theta - x_2 \\sin m\\theta,\\; x_1 \\sin m\\theta + x_2 \\cos m\\theta\\right)"} />
        </div>

        <p style={S.p}>
          onde <InlineMath math={"m"} /> é a posição do token e <InlineMath math={"\\theta"} /> uma frequência base. A propriedade chave é que o produto interno entre uma query na posição <InlineMath math={"m"} /> e uma key na posição <InlineMath math={"n"} /> depende apenas da <strong>distância relativa</strong> <InlineMath math={"m - n"} />, não das posições absolutas — o que generaliza naturalmente melhor para posições nunca vistas durante o treino.
        </p>

        <div style={S.note}>
          Técnicas como <strong>Position Interpolation</strong> e <strong>NTK-aware scaling</strong> permitem estender um modelo treinado com RoPE para contextos muito mais longos do que o original, ajustando a frequência base <InlineMath math={"\\theta"} /> sem re-treinar do zero — a base técnica por trás de extensões de contexto como as usadas em versões "128K" ou "1M tokens" de modelos existentes.
        </div>

        <h3 style={S.h3}>ALiBi — Attention with Linear Biases</h3>
        <p style={S.p}>
          O <strong>ALiBi</strong> (Press et al., 2021) elimina qualquer embedding de posição explícito. Em vez disso, adiciona um <em>bias</em> linear negativo aos scores de atenção, proporcional à distância entre as posições:
        </p>

        <div style={S.math}>
          <BlockMath math={"\\text{score}(q_i, k_j) = q_i \\cdot k_j - \\lambda \\, |i - j|"} />
        </div>

        <p style={S.p}>
          onde <InlineMath math={"\\lambda"} /> é uma constante específica de cada cabeça de atenção. Quanto mais distantes dois tokens estão, maior a penalização — um enviesamento simples que favorece atenção local sem impedir atenção a longa distância quando necessário.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Mecanismo</th>
              <th style={S.th}>Extrapolação além do contexto de treino</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Sinusoidal</strong> (original)</td>
              <td style={S.td}>Soma vector fixo de seno/cosseno ao embedding</td>
              <td style={S.td}>Fraca</td>
            </tr>
            <tr>
              <td style={S.td}><strong>RoPE</strong></td>
              <td style={S.td}>Rotação de Q/K dependente da posição relativa</td>
              <td style={S.td}>Boa, especialmente com scaling (NTK/interpolation)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>ALiBi</strong></td>
              <td style={S.td}>Bias linear no score de atenção, sem embedding</td>
              <td style={S.td}>Muito boa, por construção</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          A escolha entre RoPE e ALiBi é hoje sobretudo uma questão de ecossistema: RoPE domina os LLMs open-source mais recentes (LLaMA, Mistral, Qwen, DeepSeek), enquanto ALiBi teve maior adopção em alguns modelos focados especificamente em extrapolação de contexto (ex.: BLOOM, MPT).
        </div>
      </div>
    </div>
  );
}
