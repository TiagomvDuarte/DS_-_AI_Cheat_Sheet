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

export default function LLM2() {
  return (
    <div style={S.page}>
      <Link to="/llm" style={S.back}><ArrowLeft size={16} /> Voltar a LLMs &amp; Agents</Link>

      <div style={S.tag}>MÓDULO 02</div>
      <h1 style={S.h1}>Pré-treino e Fine-tuning</h1>
      <p style={S.lead}>
        Os grandes modelos de linguagem são construídos em duas fases distintas: um pré-treino massivo em corpora não supervisionados que produz representações genéricas da linguagem, seguido de fine-tuning orientado para alinhar o modelo com tarefas específicas e preferências humanas. Compreender estas fases — e as técnicas eficientes que as acompanham — é essencial para escolher, adaptar e avaliar LLMs em contextos reais.
      </p>

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
            <rect x="10" y="55" width="130" height="65" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="75" y="76" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Corpus Massivo</text>
            <text x="75" y="93" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">CommonCrawl, livros,</text>
            <text x="75" y="108" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Wikipedia, código</text>

            {/* Arrow 1 */}
            <path d="M 140 87 L 190 87" stroke="#f97316" strokeWidth="2" fill="none" markerEnd="url(#arr2a)" />
            <defs>
              <marker id="arr2a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
              </marker>
            </defs>
            <text x="165" y="79" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">auto-sup.</text>

            {/* Box 2: Pré-treino */}
            <rect x="190" y="55" width="140" height="65" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="260" y="76" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Pré-treino</text>
            <text x="260" y="93" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">CLM / MLM em</text>
            <text x="260" y="108" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">triliões de tokens</text>

            {/* Arrow 2 */}
            <path d="M 330 87 L 385 87" stroke="#f97316" strokeWidth="2" fill="none" markerEnd="url(#arr2b)" />
            <defs>
              <marker id="arr2b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
              </marker>
            </defs>
            <text x="357" y="79" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">SFT / RLHF</text>

            {/* Box 3: Fine-tuning */}
            <rect x="385" y="55" width="140" height="65" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
            <text x="455" y="76" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Fine-tuning</text>
            <text x="455" y="93" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">instrução–resposta,</text>
            <text x="455" y="108" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">RLHF, PEFT</text>

            {/* Arrow 3 */}
            <path d="M 525 87 L 580 87" stroke="#f97316" strokeWidth="2" fill="none" markerEnd="url(#arr2c)" />
            <defs>
              <marker id="arr2c" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
              </marker>
            </defs>
            <text x="552" y="79" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">deploy</text>

            {/* Box 4: Deployment */}
            <rect x="580" y="55" width="160" height="65" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="660" y="76" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Deployment</text>
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
        <h2 style={S.h2}>2. BERT — Bidirectional Encoder</h2>

        <p style={S.p}>
          O <strong>BERT</strong> (Bidirectional Encoder Representations from Transformers, Devlin et al. 2018) revolucionou o NLP ao introduzir um encoder bidirecional pré-treinado com dois objectivos simultâneos: <em>Masked Language Modelling</em> e <em>Next Sentence Prediction</em>.
        </p>

        <h3 style={S.h3}>Masked Language Modelling (MLM)</h3>
        <p style={S.p}>
          Em cada sequência de treino, <strong>15% dos tokens</strong> são seleccionados aleatoriamente. Desses, 80% são substituídos por <code>[MASK]</code>, 10% por um token aleatório, e 10% mantidos inalterados. O modelo deve prever os tokens originais usando contexto bidirecional — tanto à esquerda como à direita.
        </p>

        <div style={S.math}>
          <BlockMath math={"\\mathcal{L}_{\\text{MLM}} = -\\sum_{i \\in \\mathcal{M}} \\log P(x_i \\mid x_{\\text{context}})"} />
        </div>

        <p style={S.p}>
          onde <InlineMath math={"\\mathcal{M}"} /> é o conjunto de posições mascaradas e <InlineMath math={"x_{\\text{context}}"} /> representa todos os outros tokens da sequência.
        </p>

        {/* SVG: BERT tokens com [MASK] */}
        <div style={S.diagram}>
          <svg viewBox="0 0 720 180" width="100%" style={{ display: 'block' }}>
            <text x="360" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">BERT — Masked Language Modelling</text>

            {/* Input tokens */}
            {[
              { label: '[CLS]', x: 30, masked: false },
              { label: 'O', x: 115, masked: false },
              { label: 'gato', x: 195, masked: false },
              { label: '[MASK]', x: 290, masked: true },
              { label: 'no', x: 390, masked: false },
              { label: '[MASK]', x: 475, masked: true },
              { label: '[SEP]', x: 570, masked: false },
            ].map(({ label, x, masked }) => (
              <g key={x}>
                <rect x={x} y="40" width={label === '[MASK]' ? 72 : label === '[CLS]' || label === '[SEP]' ? 58 : 48} height="32" rx="6"
                  fill={masked ? 'rgba(249,115,22,0.10)' : 'rgba(249,115,22,0.10)'}
                  stroke={masked ? '#f97316' : 'rgba(249,115,22,0.10)'} strokeWidth={masked ? 2 : 1} />
                <text x={x + (label === '[MASK]' ? 36 : label === '[CLS]' || label === '[SEP]' ? 29 : 24)} y="61"
                  textAnchor="middle" fontSize={label === '[MASK]' ? 9 : 10} fontWeight={masked ? 700 : 500}
                  fill={masked ? '#f97316' : 'var(--text-primary)'}>{label}</text>
              </g>
            ))}

            {/* Bidirectional arrows */}
            <defs>
              <marker id="arrL" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
                <path d="M6,0 L0,3 L6,6 Z" fill="#f97316" />
              </marker>
              <marker id="arrR" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
              </marker>
            </defs>
            <path d="M 65 100 Q 360 132 618 100" stroke="#f97316" strokeWidth="1.5" fill="none" strokeDasharray="4 3" markerEnd="url(#arrR)" />
            <path d="M 618 114 Q 360 146 65 114" stroke="#f97316" strokeWidth="1.5" fill="none" strokeDasharray="4 3" markerEnd="url(#arrR)" />
            <text x="360" y="148" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Atenção bidirecional — contexto completo disponível em ambas as direcções</text>

            {/* Output heads */}
            <text x="326" y="38" textAnchor="middle" fontSize="9" fill="#f97316">→ "senta"</text>
            <text x="511" y="38" textAnchor="middle" fontSize="9" fill="#f97316">→ "tapete"</text>
          </svg>
        </div>

        <h3 style={S.h3}>Next Sentence Prediction (NSP)</h3>
        <p style={S.p}>
          O segundo objectivo de pré-treino do BERT consiste em determinar se duas frases são consecutivas no texto original. O par é formatado como <code>[CLS] frase A [SEP] frase B [SEP]</code> e o token <code>[CLS]</code> é usado para classificação binária (<em>IsNext</em> / <em>NotNext</em>).
        </p>

        <p style={S.p}>
          O objectivo total combina os dois termos:
        </p>

        <div style={S.math}>
          <BlockMath math={"\\mathcal{L} = \\mathcal{L}_{\\text{MLM}} + \\mathcal{L}_{\\text{NSP}}"} />
        </div>

        <h3 style={S.h3}>Variantes do BERT</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>Diferença principal</th>
              <th style={S.th}>Impacto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>RoBERTa</strong> (Meta, 2019)</td>
              <td style={S.td}>Remove NSP; treina mais tempo com mais dados e batches maiores</td>
              <td style={S.td}>Melhora consistentemente BERT em todos os benchmarks</td>
            </tr>
            <tr>
              <td style={S.td}><strong>DistilBERT</strong> (HuggingFace, 2019)</td>
              <td style={S.td}>Destilação de conhecimento: 6 camadas em vez de 12</td>
              <td style={S.td}>40% menos parâmetros, 60% mais rápido, 97% da performance</td>
            </tr>
            <tr>
              <td style={S.td}><strong>ALBERT</strong> (Google, 2019)</td>
              <td style={S.td}>Partilha de parâmetros entre camadas; embeddings factorizados</td>
              <td style={S.td}>Muito menos parâmetros com performance competitiva</td>
            </tr>
            <tr>
              <td style={S.td}><strong>DeBERTa</strong> (Microsoft, 2020)</td>
              <td style={S.td}>Atenção disentangled; posição relativa explícita</td>
              <td style={S.td}>State-of-the-art em tarefas de compreensão linguística</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          A remoção do NSP no RoBERTa sugeriu que o NSP original do BERT é uma tarefa demasiado simples — o modelo aprende a distinguir frases de documentos diferentes por diferenças estilísticas superficiais, não por compreensão semântica real.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 3 ────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. GPT — Causal Language Model</h2>

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
                    fill={isNext ? 'rgba(249,115,22,0.10)' : 'rgba(249,115,22,0.10)'}
                    stroke={isNext ? '#f97316' : 'rgba(249,115,22,0.10)'} strokeWidth={isNext ? 2 : 1} />
                  <text x={x + 45} y="62" textAnchor="middle" fontSize="11"
                    fontWeight={isNext ? 700 : 500} fill={isNext ? '#f97316' : 'var(--text-primary)'}>{tok}</text>
                </g>
              );
            })}

            {/* Causal attention lines — only attend to previous */}
            {[1, 2, 3, 4].map(i => (
              Array.from({ length: i }, (_, j) => (
                <line key={`${i}-${j}`}
                  x1={85 + j * 110} y1="90"
                  x2={85 + i * 110} y2="90"
                  stroke="rgba(249,115,22,0.10)" strokeWidth="1" />
              ))
            ))}

            {/* Main causal arrow flow */}
            <path d="M 85 90 L 195 90 L 305 90 L 415 90 L 525 90 L 635 90"
              stroke="#f97316" strokeWidth="2" fill="none" markerEnd="url(#arrGPT)" strokeDasharray="6 3" />
            <defs>
              <marker id="arrGPT" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
              </marker>
            </defs>
            <text x="360" y="112" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Cada posição só atende a posições anteriores (causal mask)</text>

            {/* Output probabilities */}
            <text x="85" y="140" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">P(·|O)</text>
            <text x="195" y="140" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">P(·|O,gato)</text>
            <text x="305" y="140" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">P(·|...)</text>
            <text x="415" y="140" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">P(·|...)</text>
            <text x="525" y="140" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">P(·|...)</text>
            <text x="635" y="140" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">sample/argmax</text>

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

      {/* ── SECTION 4 ────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Instruction Tuning e SFT</h2>

        <p style={S.p}>
          Um modelo pré-treinado aprende a completar texto, não a seguir instruções. Se pedir "Traduz esta frase para francês:", o modelo pode continuar com mais exemplos de traduções em vez de traduzir. O <strong>Supervised Fine-Tuning (SFT)</strong> — também chamado <em>instruction tuning</em> — resolve este problema treinando o modelo em pares (instrução, resposta desejada).
        </p>

        <h3 style={S.h3}>Porque é que o pré-treino sozinho não basta</h3>
        <p style={S.p}>
          O pré-treino optimiza <InlineMath math={"P(\\text{próximo token} \\mid \\text{contexto})"} /> sem distinção entre tokens "bons" e "maus". A internet contém texto de baixa qualidade, desinformação e conteúdo nocivo — um modelo que aprende a imitar tudo isso não é um assistente útil. O SFT reorienta o modelo para o formato pergunta–resposta com demonstrações de alta qualidade.
        </p>

        <div style={S.highlight}>
          <strong>InstructGPT / ChatGPT:</strong> o trabalho seminal de Ouyang et al. (2022) mostrou que um modelo GPT-3 de 1.3B fine-tunado com SFT é preferido pelos utilizadores a um GPT-3 de 175B sem SFT — demonstrando que alinhamento supera escala bruta para utilidade prática.
        </div>

        <h3 style={S.h3}>Formato e dados de SFT</h3>
        <p style={S.p}>
          O dataset de SFT consiste em exemplos no formato instrução–resposta. O objectivo de treino é a log-verosimilhança da resposta dado o prompt (a perda sobre os tokens da instrução é tipicamente mascarada):
        </p>

        <div style={S.math}>
          <BlockMath math={"\\mathcal{L}_{\\text{SFT}} = -\\sum_{i} \\log P_{\\theta}(y_i \\mid x, y_{<i})"} />
        </div>

        <div style={S.code}>{`# Pseudocódigo — Loop de SFT

dataset = load_instruction_dataset("alpaca_52k.jsonl")
model = load_pretrained("llama-2-7b")
optimizer = AdamW(model.parameters(), lr=2e-5)

for epoch in range(3):
    for batch in dataloader(dataset, batch_size=4):
        # Formatar como: [INST] instrução [/INST] resposta
        input_ids  = tokenize(batch["instruction"])
        labels     = tokenize(batch["output"])

        # Máscara: só calcular loss nos tokens de resposta
        loss_mask  = build_response_mask(input_ids, labels)

        logits = model(input_ids).logits
        loss   = cross_entropy(logits, labels, mask=loss_mask)

        loss.backward()
        optimizer.step()
        optimizer.zero_grad()

# Resultado: modelo que segue instruções no formato chat`}</div>

        <p style={S.p}>
          Datasets populares: <strong>FLAN</strong> (Google, 1 800+ tarefas diversas), <strong>Alpaca</strong> (Stanford, 52K exemplos gerados com GPT-3.5), <strong>OpenHermes</strong>, <strong>ShareGPT</strong>. A pesquisa converge num ponto crítico: <em>qualidade supera quantidade</em> — 1 000 exemplos cuidadosamente seleccionados superam 100K exemplos ruidosos.
        </p>

        <div style={S.note}>
          O trabalho LIMA (Zhou et al., 2023) demonstrou que apenas 1 000 exemplos de altíssima qualidade são suficientes para SFT competitivo — desafiando a premissa de que se precisam de dezenas de milhares de demonstrações.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 5 ────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. RLHF — Reinforcement Learning from Human Feedback</h2>

        <p style={S.p}>
          O SFT melhora o seguimento de instruções mas não resolve preferências subjectivas humanas: criatividade, tom, segurança, equilíbrio de informação. O <strong>RLHF</strong> (Reinforcement Learning from Human Feedback) usa feedback humano directo para alinhar o modelo com preferências reais, num processo de três fases.
        </p>

        <h3 style={S.h3}>Fase 1 — SFT</h3>
        <p style={S.p}>
          Como descrito na secção anterior: fine-tuning supervisionado com demonstrações humanas para obter um modelo base alinhado <InlineMath math={"\\pi_{\\text{SFT}}"} />.
        </p>

        <h3 style={S.h3}>Fase 2 — Reward Model</h3>
        <p style={S.p}>
          Para cada prompt, geram-se múltiplas respostas. Anotadores humanos ordenam-nas por qualidade. Treina-se um <strong>Reward Model</strong> <InlineMath math={"r_{\\phi}(x, y)"} /> que aprende a atribuir scores consistentes com as preferências humanas:
        </p>

        <div style={S.math}>
          <BlockMath math={"\\mathcal{L}_{\\text{RM}} = -\\mathbb{E}_{(x, y_w, y_l)} \\left[ \\log \\sigma\\left( r_{\\phi}(x, y_w) - r_{\\phi}(x, y_l) \\right) \\right]"} />
        </div>

        <p style={S.p}>
          onde <InlineMath math={"y_w"} /> é a resposta preferida (<em>winner</em>) e <InlineMath math={"y_l"} /> a rejeitada (<em>loser</em>).
        </p>

        <h3 style={S.h3}>Fase 3 — PPO (Proximal Policy Optimization)</h3>
        <p style={S.p}>
          O modelo de linguagem <InlineMath math={"\\pi_{\\theta}"} /> é optimizado com PPO para maximizar o reward esperado, com uma penalidade KL que impede que o modelo se desvie demasiado do <InlineMath math={"\\pi_{\\text{SFT}}"} />:
        </p>

        <div style={S.math}>
          <BlockMath math={"\\max_{\\pi_{\\theta}} \\; \\mathbb{E}_{x \\sim \\mathcal{D},\\, y \\sim \\pi_{\\theta}(\\cdot|x)} \\left[ r_{\\phi}(x, y) - \\beta \\cdot \\text{KL}\\left(\\pi_{\\theta}(\\cdot|x) \\,\\|\\, \\pi_{\\text{SFT}}(\\cdot|x)\\right) \\right]"} />
        </div>

        <p style={S.p}>
          O coeficiente <InlineMath math={"\\beta"} /> controla o trade-off: valores altos preservam o comportamento SFT; valores baixos permitem mais optimização em direcção ao reward.
        </p>

        {/* SVG: Pipeline RLHF */}
        <div style={S.diagram}>
          <svg viewBox="0 0 720 215" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker id="rA" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#f97316" /></marker>
            </defs>

            <text x="360" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">Pipeline RLHF — Três Fases</text>

            {/* FASE 1 */}
            <text x="90" y="42" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">FASE 1</text>
            <rect x="20" y="52" width="140" height="44" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="90" y="71" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-primary)">SFT Base</text>
            <text x="90" y="86" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">π_SFT demonstrações</text>

            {/* Arrow 1→2 */}
            <path d="M 160 74 L 200 74" stroke="#f97316" strokeWidth="1.5" fill="none" markerEnd="url(#rA)" />

            {/* FASE 2 */}
            <text x="310" y="42" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">FASE 2</text>
            <rect x="202" y="52" width="216" height="44" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="310" y="71" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-primary)">Humano compara</text>
            <text x="310" y="86" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">y_w &gt; y_l rankings</text>

            <path d="M 310 96 L 310 126" stroke="#f97316" strokeWidth="1.5" fill="none" markerEnd="url(#rA)" />

            <rect x="202" y="128" width="216" height="44" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="310" y="147" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-primary)">Reward Model</text>
            <text x="310" y="162" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">r_φ(x, y) → score</text>

            {/* Arrow 2→3 */}
            <path d="M 418 150 L 458 150" stroke="#f97316" strokeWidth="1.5" fill="none" markerEnd="url(#rA)" />

            {/* FASE 3 */}
            <text x="570" y="42" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">FASE 3</text>
            <rect x="460" y="52" width="220" height="44" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="570" y="71" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-primary)">PPO Update</text>
            <text x="570" y="86" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">max E[r] − β·KL  |  KL penalty vs π_SFT</text>

            <path d="M 570 96 L 570 126" stroke="#f97316" strokeWidth="1.5" fill="none" markerEnd="url(#rA)" />

            <rect x="460" y="128" width="220" height="44" rx="8" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="2" />
            <text x="570" y="147" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">π_RL Alinhado</text>
            <text x="570" y="162" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">ChatGPT / Claude</text>

            <text x="360" y="205" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">O loop PPO itera até convergência — tipicamente centenas de passos de optimização</text>
          </svg>
        </div>

        <h3 style={S.h3}>DPO — Alternativa ao PPO</h3>
        <p style={S.p}>
          O <strong>Direct Preference Optimization</strong> (Rafailov et al., 2023) demonstrou que o objectivo RLHF tem uma solução de forma fechada que pode ser optimizada directamente com supervised learning sobre pares preferência–rejeição, sem Reward Model nem PPO explícito:
        </p>

        <div style={S.math}>
          <BlockMath math={"\\mathcal{L}_{\\text{DPO}} = -\\mathbb{E} \\left[ \\log \\sigma \\left( \\beta \\log \\frac{\\pi_{\\theta}(y_w|x)}{\\pi_{\\text{SFT}}(y_w|x)} - \\beta \\log \\frac{\\pi_{\\theta}(y_l|x)}{\\pi_{\\text{SFT}}(y_l|x)} \\right) \\right]"} />
        </div>

        <div style={S.note}>
          DPO simplifica muito o pipeline RLHF, eliminando a necessidade de treinar um Reward Model separado e de implementar PPO. Tornou-se o método preferido para alinhamento de modelos open-source como Llama, Mistral e Qwen.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 6 ────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. PEFT — Parameter-Efficient Fine-Tuning</h2>

        <p style={S.p}>
          Fine-tuning completo de um modelo de 70B parâmetros requer dezenas de GPUs de alto custo e semanas de compute — proibitivo para a maioria das organizações. O <strong>Parameter-Efficient Fine-Tuning (PEFT)</strong> adapta apenas uma pequena fracção dos parâmetros, atingindo performance próxima do full fine-tuning com uma fracção dos recursos.
        </p>

        <h3 style={S.h3}>LoRA — Low-Rank Adaptation</h3>
        <p style={S.p}>
          A intuição do <strong>LoRA</strong> (Hu et al., 2021) é que as actualizações de pesos durante o fine-tuning têm posto intrínseco baixo — são aproximáveis por matrizes de baixo rank. Em vez de actualizar <InlineMath math={"W \\in \\mathbb{R}^{d \\times k}"} /> directamente, congela-se <InlineMath math={"W"} /> e aprende-se a decomposição:
        </p>

        <div style={S.math}>
          <BlockMath math={"W' = W + \\Delta W = W + A \\cdot B"} />
        </div>

        <p style={S.p}>
          onde <InlineMath math={"A \\in \\mathbb{R}^{d \\times r}"} />, <InlineMath math={"B \\in \\mathbb{R}^{r \\times k}"} />, e o rank <InlineMath math={"r \\ll \\min(d, k)"} />. Apenas <InlineMath math={"A"} /> e <InlineMath math={"B"} /> são treinados. O número de parâmetros treináveis é <InlineMath math={"r(d + k)"} /> em vez de <InlineMath math={"dk"} />.
        </p>

        {/* SVG: LoRA low-rank decomposition */}
        <div style={S.diagram}>
          <svg viewBox="0 0 700 210" width="100%" style={{ display: 'block' }}>
            <text x="350" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">LoRA — Decomposição Low-Rank</text>

            {/* Input */}
            <rect x="10" y="85" width="70" height="40" rx="6" fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.10)" strokeWidth="1" />
            <text x="45" y="110" textAnchor="middle" fontSize="10" fill="var(--text-primary)">x ∈ ℝᵈ</text>

            {/* Arrow to W */}
            <path d="M 80 105 L 120 105" stroke="#f97316" strokeWidth="1.5" fill="none" markerEnd="url(#lA)" />
            <defs><marker id="lA" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#f97316" /></marker></defs>

            {/* W frozen */}
            <rect x="120" y="65" width="100" height="80" rx="8" fill="rgba(100,100,100,0.10)" stroke="#888" strokeWidth="1.5" strokeDasharray="5 3" />
            <text x="170" y="100" textAnchor="middle" fontSize="11" fontWeight="700" fill="#888">W</text>
            <text x="170" y="116" textAnchor="middle" fontSize="9" fill="#888">d × k</text>
            <text x="170" y="130" textAnchor="middle" fontSize="8" fill="#888">(congelado)</text>

            {/* Arrow W to sum */}
            <path d="M 220 105 L 360 105" stroke="#888" strokeWidth="1.5" fill="none" markerEnd="url(#lB)" strokeDasharray="4 3" />
            <defs><marker id="lB" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#888" /></marker></defs>

            {/* LoRA path: A then B */}
            <path d="M 80 105 L 100 105 L 100 170 L 145 170" stroke="#f97316" strokeWidth="1.5" fill="none" />
            <rect x="145" y="150" width="75" height="40" rx="7" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="182" y="167" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">A</text>
            <text x="182" y="181" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">d × r</text>

            <path d="M 220 170 L 260 170" stroke="#f97316" strokeWidth="1.5" fill="none" markerEnd="url(#lC)" />
            <defs><marker id="lC" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#f97316" /></marker></defs>

            <rect x="260" y="150" width="75" height="40" rx="7" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="297" y="167" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">B</text>
            <text x="297" y="181" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">r × k</text>

            <path d="M 335 170 L 380 170 L 380 120" stroke="#f97316" strokeWidth="1.5" fill="none" markerEnd="url(#lD)" />
            <defs><marker id="lD" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#f97316" /></marker></defs>

            {/* Sum circle */}
            <circle cx="380" cy="105" r="18" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="380" y="110" textAnchor="middle" fontSize="14" fontWeight="700" fill="#f97316">+</text>

            {/* Arrow to output */}
            <path d="M 398 105 L 450 105" stroke="#f97316" strokeWidth="1.5" fill="none" markerEnd="url(#lE)" />
            <defs><marker id="lE" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#f97316" /></marker></defs>

            <rect x="450" y="82" width="110" height="46" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
            <text x="505" y="101" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">W·x + AB·x</text>
            <text x="505" y="118" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">output ∈ ℝᵏ</text>

            {/* rank annotation */}
            <text x="182" y="205" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">r ≪ min(d,k)  — tipicamente r ∈ {"{4, 8, 16, 32}"}</text>
          </svg>
        </div>

        <h3 style={S.h3}>Adapter Layers</h3>
        <p style={S.p}>
          Os <strong>Adapters</strong> (Houlsby et al., 2019) inserem pequenas MLPs entre as sub-camadas do Transformer (após atenção e após FFN). Cada adapter tem uma projecção de baixa dimensão (<em>bottleneck</em>), uma activação não-linear, e uma projecção de saída — com uma ligação residual que garante identidade aproximada no início do treino.
        </p>

        <h3 style={S.h3}>Prefix Tuning</h3>
        <p style={S.p}>
          O <strong>Prefix Tuning</strong> (Li &amp; Liang, 2021) não modifica os pesos do modelo. Em vez disso, adiciona vectores "soft" aprendíveis (<em>virtual tokens</em>) no início do contexto de cada camada. O modelo aprende estes prefixos; todos os pesos originais permanecem congelados.
        </p>

        <h3 style={S.h3}>Comparação de métodos PEFT</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Parâm. treináveis</th>
              <th style={S.th}>VRAM extra</th>
              <th style={S.th}>Latência inferência</th>
              <th style={S.th}>Performance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Full Fine-tuning</strong></td>
              <td style={S.td}>100%</td>
              <td style={S.td}>~80 GB (7B)</td>
              <td style={S.td}>Nenhuma</td>
              <td style={S.td}>Máxima (referência)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>LoRA</strong> (r=16)</td>
              <td style={S.td}>~0.5%</td>
              <td style={S.td}>~16 GB (7B)</td>
              <td style={S.td}>Nenhuma (merge)</td>
              <td style={S.td}>≈ Full FT</td>
            </tr>
            <tr>
              <td style={S.td}><strong>QLoRA</strong> (4-bit)</td>
              <td style={S.td}>~0.5%</td>
              <td style={S.td}>~6 GB (7B)</td>
              <td style={S.td}>Mínima</td>
              <td style={S.td}>Ligeiramente inferior</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Adapters</strong></td>
              <td style={S.td}>1–4%</td>
              <td style={S.td}>~20 GB (7B)</td>
              <td style={S.td}>+5–10% latência</td>
              <td style={S.td}>Próxima de Full FT</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Prefix Tuning</strong></td>
              <td style={S.td}>0.1–1%</td>
              <td style={S.td}>Mínima</td>
              <td style={S.td}>+tokens de contexto</td>
              <td style={S.td}>Inferior em tarefas complexas</td>
            </tr>
          </tbody>
        </table>

        <div style={S.highlight}>
          <strong>QLoRA</strong> combina LoRA com quantização 4-bit (formato NF4 — Normal Float 4) do modelo base e double quantization. Permite fine-tuning de modelos de 65B num único GPU de 48 GB, democratizando o acesso ao fine-tuning de LLMs grandes.
        </div>

        <div style={S.note}>
          Após treino com LoRA, as matrizes <InlineMath math={"A"} /> e <InlineMath math={"B"} /> podem ser <em>merged</em> nos pesos originais: <InlineMath math={"W' = W + AB"} />. O resultado é um modelo com exactamente os mesmos parâmetros do original, sem overhead de latência em inferência.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 7 ────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Avaliação de LLMs</h2>

        <p style={S.p}>
          Avaliar LLMs é notoriamente difícil: as capacidades emergentes, a natureza aberta das respostas, e a dependência do prompt tornam métricas únicas insuficientes. A comunidade converge num conjunto de benchmarks standardizados, métricas probabilísticas, e análise crítica das suas limitações.
        </p>

        <h3 style={S.h3}>Benchmarks principais</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Benchmark</th>
              <th style={S.th}>Foco</th>
              <th style={S.th}>Formato</th>
              <th style={S.th}>Nota</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>MMLU</strong></td>
              <td style={S.td}>Conhecimento multi-domínio (57 matérias)</td>
              <td style={S.td}>4-choice MCQ</td>
              <td style={S.td}>Medicina, direito, matemática, ciências</td>
            </tr>
            <tr>
              <td style={S.td}><strong>HellaSwag</strong></td>
              <td style={S.td}>Raciocínio de senso comum</td>
              <td style={S.td}>4-choice MCQ</td>
              <td style={S.td}>Completar descrições de actividades</td>
            </tr>
            <tr>
              <td style={S.td}><strong>HumanEval</strong></td>
              <td style={S.td}>Geração de código Python</td>
              <td style={S.td}>Pass@k funcional</td>
              <td style={S.td}>164 problemas de programação</td>
            </tr>
            <tr>
              <td style={S.td}><strong>GSM8K</strong></td>
              <td style={S.td}>Raciocínio matemático</td>
              <td style={S.td}>Resposta exacta</td>
              <td style={S.td}>8 500 problemas de matemática escolar</td>
            </tr>
            <tr>
              <td style={S.td}><strong>TruthfulQA</strong></td>
              <td style={S.td}>Veracidade factual</td>
              <td style={S.td}>MCQ + geração</td>
              <td style={S.td}>Questões onde humanos têm crenças erradas</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Perplexidade</h3>
        <p style={S.p}>
          A <strong>perplexidade</strong> é a métrica probabilística fundamental para LLMs — mede quão bem o modelo prediz uma sequência de texto. Valores mais baixos indicam melhor modelação:
        </p>

        <div style={S.math}>
          <BlockMath math={"PP(W) = P(w_1, w_2, \\ldots, w_n)^{-1/n} = \\exp\\!\\left(-\\frac{1}{n} \\sum_{i=1}^{n} \\log P(w_i \\mid w_1, \\ldots, w_{i-1})\\right)"} />
        </div>

        <p style={S.p}>
          Intuitivamente, a perplexidade é o número médio de opções que o modelo considera plausíveis em cada posição. Um modelo com perplexidade 10 está, em média, "indeciso entre 10 tokens" em cada passo.
        </p>

        <h3 style={S.h3}>Limitações dos benchmarks</h3>

        <div style={S.highlight}>
          <strong>Data contamination:</strong> se o dataset de avaliação esteve presente no corpus de pré-treino, as métricas inflacionam artificialmente. Detectar contaminação é difícil quando o corpus de treino tem trilhões de tokens e não é totalmente auditável.
        </div>

        <div style={S.highlight}>
          <strong>Teaching to the test:</strong> modelos fine-tunados especificamente para benchmarks (via SFT nos dados de treino dos benchmarks) atingem scores altos sem generalização real. O <em>Goodhart's Law</em> aplica-se: quando uma métrica se torna um objectivo, deixa de ser uma boa métrica.
        </div>

        <div style={S.highlight}>
          <strong>Format sensitivity:</strong> a performance em MCQ pode variar 10–20 pontos percentuais apenas com diferentes formatos de prompt, ordem das opções, ou uso de few-shot vs zero-shot. Um benchmark reporta um número; o que conta é a avaliação com múltiplas configurações.
        </div>

        <p style={S.p}>
          A tendência actual é complementar benchmarks estáticos com <strong>avaliação humana directa</strong> (ex.: Chatbot Arena / LMSYS), que compara modelos em pares com utilizadores reais — mais ruidosa mas mais representativa de utilidade real.
        </p>

        <div style={S.note}>
          O benchmarking de LLMs é uma área activa: novos benchmarks (GPQA, MATH-500, LiveCodeBench, SWE-bench) tentam resolver as limitações de MMLU e HellaSwag, que muitos modelos de topo já "saturaram" — atingindo performance próxima do tecto.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SÍNTESE ──────────────────────────────────────────────────── */}
      <h2 style={S.h2}>Síntese do Módulo 02</h2>
      <div style={{ ...S.highlight, padding: '1.75rem' }}>
        <p style={{ ...S.p, marginTop: 0, marginBottom: '0.6rem' }}>
          Os LLMs modernos são construídos em camadas progressivas de especialização. O <strong>transfer learning</strong> é o princípio unificador: pré-treino massivo (CLM para decoder-only como GPT; MLM para encoders como BERT) produz representações genéricas que depois são especializadas de forma eficiente.
        </p>
        <p style={{ ...S.p, marginBottom: '0.6rem' }}>
          O alinhamento com preferências humanas requer ir além do pré-treino: <strong>SFT</strong> ensina o modelo a seguir instruções; <strong>RLHF</strong> (com PPO ou DPO) optimiza explicitamente para preferências humanas com um reward model treinado em comparações. BERT introduziu bidireccionalidade com MLM + NSP; RoBERTa removeu NSP mostrando que era desnecessário; GPT escalou CLM até emergência de capacidades few-shot.
        </p>
        <p style={{ ...S.p, marginBottom: '0.6rem' }}>
          Para adaptar modelos grandes sem recursos de datacenter, o <strong>PEFT</strong> — especialmente <strong>LoRA</strong> e <strong>QLoRA</strong> — reduz os parâmetros treináveis para menos de 1% com performance próxima do full fine-tuning, democratizando o acesso à especialização de LLMs.
        </p>
        <p style={{ ...S.p, marginBottom: 0 }}>
          A <strong>avaliação</strong> de LLMs exige cautela: benchmarks como MMLU e HumanEval são úteis mas susceptíveis a contaminação, saturação e sensitivity ao formato. A combinação de benchmarks diversificados, perplexidade em corpora heldout, e avaliação humana directa é a abordagem mais robusta.
        </p>
      </div>
    </div>
  );
}
