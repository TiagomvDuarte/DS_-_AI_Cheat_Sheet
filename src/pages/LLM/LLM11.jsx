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

export default function LLM11() {
  return (
    <div style={S.page}>
      <Link to="/llm" style={S.back}><ArrowLeft size={16} /> Voltar a LLMs &amp; Agents</Link>

      <div style={S.tag}>MÓDULO 02</div>
      <h1 style={S.h1}>Pós-treino: SFT, RLHF e Chain of Thought</h1>

      {/* ── SECTION 1 ────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Pipeline de Pós-treino Moderno</h2>

        <p style={S.p}>
          O pós-treino transforma um modelo de linguagem bruto num assistente útil, seguro e alinhado com as
          preferências humanas. O pipeline moderno é iterativo e composto por várias fases distintas — as
          próximas secções deste módulo aprofundam cada uma delas.
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
                    <path d="M0,0 L0,6 L8,3 z" fill="#0284c7" />
                  </marker>
                </defs>
                {steps.map(({ label, sub }, i) => {
                  const x = pad + i * (bw + gap);
                  return (
                    <g key={i}>
                      <rect x={x} y={cy} width={bw} height={bh} rx={8}
                        fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={1.5} />
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
                        fill="none" stroke="#0284c7" strokeWidth={1.5} strokeDasharray="6,4" markerEnd="url(#arrFly)" />
                      <text x={totalW / 2} y={arcY + 22} textAnchor="middle" fontSize={10} fill="#0284c7" fontWeight={600}>
                        data flywheel — produção gera novos dados
                      </text>
                    </>
                  );
                })()}
              </svg>
            );
          })()}
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 2 ────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Instruction Tuning e SFT</h2>

        <p style={S.p}>
          Um modelo pré-treinado aprende a completar texto, não a seguir instruções: optimiza <InlineMath math={"P(\\text{próximo token} \\mid \\text{contexto})"} /> sobre texto da internet, sem distinguir tokens "bons" de "maus". Se pedir "Traduz esta frase para inglês:", pode simplesmente continuar com mais exemplos de traduções em vez de traduzir. O <strong>Supervised Fine-Tuning (SFT)</strong> resolve isto treinando o modelo em pares (instrução, resposta desejada) escritos ou aprovados por humanos — reorientando-o para o formato pergunta–resposta com demonstrações de alta qualidade.
        </p>

        <div style={S.note}>
          <strong>SFT e "instruction tuning" são o mesmo?</strong> Na prática, sim. Tecnicamente, <em>SFT</em> é o nome da <strong>técnica</strong> (fine-tuning supervisionado com pares input–output, perda calculada só sobre o output); <em>instruction tuning</em> é o nome da <strong>aplicação</strong> mais comum dessa técnica, quando os pares são especificamente (instrução, resposta que a cumpre). Quando se fala de SFT num LLM, está quase sempre implícito que se trata de instruction tuning.
        </div>

        <div style={S.highlight}>
          <strong>InstructGPT / ChatGPT:</strong> o trabalho seminal de Ouyang et al. (2022) mostrou que um modelo GPT-3 de 1.3B fine-tunado com SFT é preferido pelos utilizadores a um GPT-3 de 175B sem SFT — demonstrando que alinhamento supera escala bruta para utilidade prática.
        </div>

        <h3 style={S.h3}>Formato: instrução e resposta concatenadas</h3>
        <p style={S.p}>
          Ao contrário do pré-treino — onde input e target são o mesmo texto contínuo, apenas desalinhado uma posição — no SFT cada exemplo de treino parte de um <strong>par explícito</strong>: uma instrução e a resposta desejada correspondente. Os dois são concatenados num único formato de "conversa" e tokenizados como <strong>uma só sequência</strong>, exactamente como no pré-treino:
        </p>

        <div style={{ overflowX: 'auto' }}>
          <div style={{ display: 'flex', gap: '0.4rem', minWidth: 'max-content', marginBottom: '0.5rem' }}>
            {['[INST]', 'Traduz', ':', "'Bom", "dia'", '[/INST]', 'Good', 'morning', '[EOS]'].map((tok, i) => {
              const isResponse = i >= 6;
              return (
                <div key={i} style={{
                  minWidth: 62, padding: '0.5rem 0.4rem', borderRadius: 7, textAlign: 'center',
                  background: isResponse ? 'rgba(74,158,237,0.15)' : 'rgba(148,163,184,0.08)',
                  border: `1.5px solid ${isResponse ? '#4a9eed' : 'var(--card-border)'}`,
                }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: isResponse ? '#4a9eed' : 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{tok}</div>
                </div>
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: '0.4rem', minWidth: 'max-content' }}>
            {['—', '—', '—', '—', '—', '—', 'perda', 'perda', 'perda'].map((label, i) => {
              const isResponse = i >= 6;
              return (
                <div key={i} style={{ minWidth: 62, textAlign: 'center', fontSize: '0.75rem', color: isResponse ? '#4a9eed' : 'var(--text-secondary)', fontWeight: isResponse ? 700 : 400 }}>
                  {label}
                </div>
              );
            })}
          </div>
        </div>
        <p style={{ ...S.p, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Instrução "Traduz: 'Bom dia'" seguida da resposta "Good morning". Os 6 primeiros tokens (cinzento) são a instrução; os 3 últimos (azul), a resposta.
        </p>

        <div style={S.note}>
          Esta sequência de 9 tokens é <strong>toda</strong> passada ao decoder de uma vez, numa única passagem para a frente — não se dá ao modelo só a instrução à espera que ele "invente" o resto. A <strong>causal mask</strong> (Módulo 1) garante apenas que, ao prever a posição <InlineMath math={"i"} />, o modelo só pode olhar para posições <InlineMath math={"\\leq i"} />, nunca para a resposta ainda por vir.
        </div>

        <h3 style={S.h3}>O que se prevê em cada posição, e o que conta para a perda</h3>
        <p style={S.p}>
          O mecanismo de previsão é sempre o mesmo "prever o próximo token" do pré-treino: em cada posição, o modelo produz uma distribuição de probabilidade sobre todo o vocabulário. A única coisa que muda no SFT é <strong>que parte</strong> dessas previsões conta para o erro:
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Input nessa posição</th>
                <th style={S.th}>Target real (o que devia prever)</th>
                <th style={S.th}>Conta para a perda?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['[INST]', 'Traduz', 'Não'],
                ['[INST] Traduz', ':', 'Não'],
                ["[INST] Traduz :", "'Bom", 'Não'],
                ["... 'Bom", "dia'", 'Não'],
                ["... dia'", '[/INST]', 'Não'],
                ['... [/INST]', 'Good', 'Sim ✓'],
                ['... Good', 'morning', 'Sim ✓'],
                ['... morning', '[EOS]', 'Sim ✓'],
              ].map(([inp, pred, counts], i) => (
                <tr key={i}>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{inp}</td>
                  <td style={{ ...S.td, fontWeight: 700, color: counts.startsWith('Sim') ? '#4a9eed' : 'var(--text-primary)' }}>{pred}</td>
                  <td style={{ ...S.td, color: counts.startsWith('Sim') ? '#4a9eed' : 'var(--text-secondary)', fontWeight: counts.startsWith('Sim') ? 700 : 400 }}>{counts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={S.p}>
          O modelo produz uma previsão em <strong>todas</strong> as 8 primeiras posições, mesmo dentro da instrução — isso nunca deixa de acontecer, é sempre calculável. A diferença é que essas previsões "dentro da instrução" são <strong>multiplicadas por zero</strong> pela loss mask antes de entrarem na soma final <InlineMath math={"\\mathcal{L}_{\\text{SFT}}"} />: o erro existe, é só descartado de propósito, porque não interessa ensinar o modelo a gerar instruções — só a gerar a resposta certa <em>dada</em> uma instrução já fixa no contexto.
        </p>

        <div style={S.math}>
          <BlockMath math={"\\mathcal{L}_{\\text{SFT}} = -\\sum_{i} \\log P_{\\theta}(y_i \\mid x, y_{<i})"} />
        </div>

        <div style={S.highlight}>
          <strong>Importante — target ≠ previsão real.</strong> "Good" na tabela acima é o <em>target</em> (o que a resposta de referência diz que devia vir a seguir), não o que o modelo efectivamente prevê. Antes do treino (ou a meio dele), o modelo pode atribuir mais probabilidade a "Bonjour" ou "Hi" do que a "Good" — e é exactamente aí que há erro real: quanto menor a probabilidade atribuída ao token certo, maior o <InlineMath math={"-\\log P"} />, e é esse valor (e o seu gradiente) que ajusta os pesos a cada passo. Só depois de muitos exemplos semelhantes é que o modelo converge para atribuir alta probabilidade ao token certo nessa posição.
        </div>

      </div>

      <hr style={S.divider} />

      {/* ── SECTION 2 ────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. RLHF — Reinforcement Learning from Human Feedback</h2>

        <p style={S.p}>
          O SFT melhora o seguimento de instruções mas não resolve preferências subjectivas humanas: criatividade, tom, segurança, equilíbrio de informação. O <strong>RLHF</strong> usa feedback humano directo para alinhar o modelo com essas preferências, através de dois modelos distintos que entram em jogo em sequência: primeiro treina-se um <strong>Reward Model</strong> que aprende a pontuar respostas; depois esse Reward Model é usado, já congelado, para guiar o treino do <strong>decoder</strong> via PPO.
        </p>

        <h3 style={S.h3}>De onde vêm os dados: gerar, depois anotar</h3>
        <p style={S.p}>
          Antes de treinar seja o que for, é preciso construir o dataset de preferências, em três passos: (1) pega-se num conjunto de prompts reais (perguntas de utilizadores, pedidos típicos); (2) para cada prompt, o <strong>próprio decoder já treinado com SFT</strong> (<InlineMath math={"\\pi_{\\text{SFT}}"} />) gera <em>várias</em> respostas diferentes — normalmente amostrando com alguma aleatoriedade, para obter respostas genuinamente distintas em vez da mesma resposta repetida; (3) essas respostas (sem serem geradas ou alteradas por nenhum humano) são mostradas a anotadores humanos, que as ordenam por qualidade. É <em>esse</em> ranking humano — não os pesos, nem o texto em si — que se torna o dado de treino do Reward Model.
        </p>

        <h3 style={S.h3}>Como se treina o Reward Model</h3>
        <p style={S.p}>
          Para construir o <strong>Reward Model</strong> <InlineMath math={"r_\\phi"} />, copiam-se os pesos de <InlineMath math={"\\pi_{\\text{SFT}}"} />, remove-se a camada final de "prever o próximo token" (que produzia uma distribuição sobre o vocabulário) e substitui-se por uma única camada linear nova, que lê a representação do último token e produz <strong>um número</strong>. A partir daqui, os dois modelos seguem caminhos separados: o decoder continua a gerar texto; o Reward Model aprende só a pontuá-lo, usando exactamente os pares (prompt, respostas, ranking humano) recolhidos no passo anterior. Na tabela abaixo, a coluna "Anotador escolheu" é o <strong>label</strong> (o dado de treino, fixo, vindo do passo anterior); a coluna "Score do RM" é o <strong>output</strong> que o Reward Model produz para cada resposta — é isso que o treino ajusta, precisamente para que a resposta com label "escolhida" acabe por receber sempre um score mais alto:
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Prompt</th>
                <th style={S.th}>Resposta</th>
                <th style={S.th}>Score do RM (output)</th>
                <th style={S.th}>Anotador escolheu (label)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }} rowSpan={2}>"Como lido com um colega difícil?"</td>
                <td style={S.td}>"Ignora-o e evita conflito a todo o custo."</td>
                <td style={S.td}><InlineMath math={"r_\\phi=0.9"} /></td>
                <td style={S.td}>Não (<InlineMath math={"y_l"} />)</td>
              </tr>
              <tr>
                <td style={S.td}>"Conversa em privado, com exemplos concretos e foco em soluções."</td>
                <td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}><InlineMath math={"r_\\phi=2.4"} /></td>
                <td style={{ ...S.td, color: '#4a9eed', fontWeight: 700 }}>Sim (<InlineMath math={"y_w"} />)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={S.note}>
          <strong>O input do Reward Model é sempre o prompt + a resposta, concatenados</strong> — nunca só a resposta sozinha (a coluna "Prompt" na tabela está repetida/agrupada visualmente para as duas linhas, mas faz parte do input de <em>ambas</em>). Isto importa porque a mesma resposta pode ser óptima para um prompt e péssima para outro — o score tem de depender do contexto, não só do texto da resposta isolado. Formalmente, <InlineMath math={"r_\\phi(x, y)"} /> recebe sempre o par <InlineMath math={"(x, y)"} /> como uma única sequência de tokens (prompt seguido da resposta), exactamente como no SFT.
        </div>

        <p style={S.p}>
          A perda compara directamente os dois scores — quanto maior a diferença a favor da resposta preferida, menor o erro:
        </p>

        <div style={S.math}>
          <BlockMath math={"\\mathcal{L}_{\\text{RM}} = -\\log \\sigma\\big(r_\\phi(x,y_w) - r_\\phi(x,y_l)\\big) = -\\log\\sigma(2.4-0.9) \\approx 0.20"} />
        </div>

        <p style={S.p}>
          Se o Reward Model desse, por engano, mais pontos à resposta rejeitada, a diferença seria negativa e o erro dispararia — é esse gradiente que empurra os pesos do RM a concordar cada vez mais com as preferências humanas.
        </p>

        <div style={S.note}>
          <strong>Sim — durante este treino, o decoder não muda nada.</strong> O decoder (<InlineMath math={"\\pi_{\\text{SFT}}"} />) só serviu, mais atrás, para gerar as respostas que foram anotadas; a partir daí fica parado. Todo o gradiente de <InlineMath math={"\\mathcal{L}_{\\text{RM}}"} /> flui apenas para os pesos do Reward Model (incluindo o corpo do Transformer copiado, não só a camada linear nova). No final há <strong>dois modelos separados e congelados um em relação ao outro</strong>: o decoder (inalterado desde o SFT) e o Reward Model (agora treinado a pontuar).
        </div>

        <h3 style={S.h3}>Como os dois funcionam depois, em conjunto (PPO)</h3>
        <p style={S.p}>
          "Integrar" o Reward Model não significa juntar os pesos dos dois modelos nem meter o RM dentro da arquitectura do decoder — os dois continuam completamente separados, cada um com os seus pesos próprios. A integração acontece só ao nível do <strong>sinal de treino</strong>: em cada iteração, o decoder gera uma resposta <em>para um prompt</em>, e é o <strong>par (prompt, resposta) outra vez</strong> — nunca só a resposta sozinha, exactamente como no treino do RM — que é passado como input ao Reward Model. O número que sai — o score — é usado, de fora, para calcular o gradiente que actualiza os pesos <em>do decoder</em>. O Reward Model continua <strong>congelado</strong> durante toda esta fase; funciona só como uma função externa que dá um número a cada par (prompt, resposta), como se fosse uma métrica de avaliação, só que diferenciável através da resposta gerada. O objectivo que o decoder passa a maximizar é:
        </p>

        <div style={S.math}>
          <BlockMath math={"\\max_{\\pi_{\\theta}} \\; \\mathbb{E}_{x,\\, y \\sim \\pi_{\\theta}} \\left[ r_{\\phi}(x, y) - \\beta \\cdot \\text{KL}\\left(\\pi_{\\theta} \\,\\|\\, \\pi_{\\text{SFT}}\\right) \\right]"} />
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Símbolo</th>
                <th style={S.th}>O que significa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}><InlineMath math={"\\pi_\\theta"} /></td>
                <td style={S.td}>O decoder que está a ser treinado nesta fase — a política que gera respostas. É o único cujos pesos mudam.</td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}><InlineMath math={"\\max_{\\pi_\\theta}"} /></td>
                <td style={S.td}>"Ajustar os pesos de <InlineMath math={"\\pi_\\theta"} /> para tornar o valor entre parêntesis o maior possível" — ao contrário de uma perda, que se minimiza, este é um objectivo que se maximiza directamente.</td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}><InlineMath math={"\\mathbb{E}_{x,\\,y\\sim\\pi_\\theta}"} /></td>
                <td style={S.td}>Uma média sobre muitos prompts <InlineMath math={"x"} /> do dataset e respostas <InlineMath math={"y"} /> que o próprio <InlineMath math={"\\pi_\\theta"} /> gera para eles — não é um único exemplo, é a média esperada sobre todo o processo de amostragem.</td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}><InlineMath math={"r_\\phi(x,y)"} /></td>
                <td style={S.td}>O score que o Reward Model (já treinado, congelado) dá ao par prompt+resposta. Quanto maior, melhor — é o termo que "puxa" a política a gerar respostas que o RM aprova.</td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}><InlineMath math={"\\text{KL}(\\pi_\\theta \\| \\pi_{\\text{SFT}})"} /></td>
                <td style={S.td}>Uma medida de "quão diferente" a política actual está a ficar, nas suas previsões, em relação ao modelo SFT original. Cresce quanto mais a política se afasta do seu ponto de partida.</td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}><InlineMath math={"\\beta"} /></td>
                <td style={S.td}>Um número fixo (ex.: 0.1) que decide o peso da penalidade KL — <InlineMath math={"\\beta"} /> alto trava mais a política perto de <InlineMath math={"\\pi_{\\text{SFT}}"} />; <InlineMath math={"\\beta"} /> baixo dá-lhe mais liberdade para perseguir reward alto.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={S.p}>
          Lendo a fórmula por inteiro: <em>"ajusta os pesos do decoder para que, em média sobre muitos prompts e respostas que ele próprio gera, o score do Reward Model seja o mais alto possível, mas subtraindo uma penalidade proporcional a quanto o decoder se afastou do comportamento original do SFT."</em> O termo <InlineMath math={"r_\\phi(x,y)"} /> empurra o decoder a gerar respostas com score alto; o termo KL trava-o, penalizando-o por se afastar demasiado de <InlineMath math={"\\pi_{\\text{SFT}}"} /> — sem isto, o decoder podia aprender a "enganar" o Reward Model com texto que pontua bem mas deixa de fazer sentido. Continuando o exemplo: o decoder gera "Conversa em privado...", o Reward Model (já treinado, já congelado) pontua-a com <InlineMath math={"r_\\phi=2.4"} />; subtraindo uma pequena penalidade KL obtém-se um reward líquido de <InlineMath math={"\\approx 2.39"} />, que é o sinal que o PPO usa para aumentar a probabilidade de o decoder gerar respostas semelhantes no futuro.
        </p>

        <div style={S.note}>
          Repara na assimetria: o Reward Model é treinado <strong>uma vez</strong> (fase anterior) e depois fica fixo; o decoder é que continua a ser actualizado, repetidamente, usando o Reward Model apenas como "juiz" — nunca ao contrário. É por isto que os dois são sempre descritos como modelos separados, com fases de treino distintas e propósitos diferentes: um gera, o outro avalia.
        </div>

        <h3 style={S.h3}>Onde entram o reward e a vantagem, exactamente</h3>
        <p style={S.p}>
          O <strong>reward</strong> <InlineMath math={"R"} /> (o score do RM menos a penalidade KL) e a <strong>vantagem</strong> <InlineMath math={"A"} /> não são conceitos à parte do gradiente — são literalmente um <strong>factor multiplicativo</strong> dentro dele. A regra que o PPO usa para actualizar cada peso <InlineMath math={"\\theta"} /> do decoder é, de forma simplificada:
        </p>

        <div style={S.math}>
          <BlockMath math={"\\nabla_\\theta \\mathcal{L} \\;=\\; A \\cdot \\nabla_\\theta \\log \\pi_\\theta(y \\mid x)"} />
        </div>

        <p style={S.p}>
          Ou seja: calcula-se o gradiente normal de backpropagation da log-probabilidade da resposta gerada (exactamente como no SFT — quanto é que cada peso influenciou a probabilidade de gerar este token), e depois esse gradiente é <strong>escalado</strong> pela vantagem <InlineMath math={"A"} />. Se <InlineMath math={"A"} /> for grande e positivo, o passo na direcção "aumenta a probabilidade desta resposta" é grande; se <InlineMath math={"A"} /> for próximo de zero, o passo é quase nulo (a resposta não foi nem melhor nem pior que o esperado, não há muito que ajustar); se <InlineMath math={"A"} /> for negativo, o gradiente <strong>inverte</strong> de sinal e o passo passa a <em>diminuir</em> a probabilidade dessa resposta. É exactamente por causa deste papel que, na tabela do exemplo prático mais abaixo, a vantagem aparece multiplicada directamente no cálculo do gradiente final.
        </p>

        <p style={S.p}>
          Porque não usar o reward <InlineMath math={"R"} /> directamente, sem a vantagem? Porque <InlineMath math={"R"} /> sozinho não distingue "esta resposta foi boa" de "este <em>tipo</em> de prompt tende sempre a ter reward alto". Considere três respostas geradas no mesmo batch, para prompts diferentes:
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Resposta</th>
                <th style={S.th}>Reward R</th>
                <th style={S.th}>Baseline (média do batch)</th>
                <th style={S.th}>Vantagem A = R − baseline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}>"Conversa em privado..."</td>
                <td style={S.td}>2.39</td>
                <td style={S.td}>1.80</td>
                <td style={{ ...S.td, color: '#4a9eed', fontWeight: 700 }}>+0.59 (acima da média → reforçar)</td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}>Resposta típica/mediana a outro prompt</td>
                <td style={S.td}>1.75</td>
                <td style={S.td}>1.80</td>
                <td style={S.td}>−0.05 (quase neutro → ajuste mínimo)</td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}>Resposta fraca a outro prompt</td>
                <td style={S.td}>0.90</td>
                <td style={S.td}>1.80</td>
                <td style={S.td}>−0.90 (bem abaixo da média → desencorajar)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={S.p}>
          Sem subtrair a baseline, <strong>todas</strong> as três respostas teriam reward positivo (2.39, 1.75, 0.90) e o gradiente reforçaria as três — mesmo a fraca. Ao subtrair a média do batch, só a resposta genuinamente acima da média recebe um empurrão positivo; as outras duas são corrigidas na direcção certa (pouco, ou bastante, consoante o quão longe estão da média). A vantagem transforma "quão bom foi o reward em termos absolutos" em "quão bom foi <em>relativamente ao que se esperava</em>" — e é essa comparação relativa, não o valor absoluto do reward, que realmente ensina o modelo a distinguir respostas boas de más dentro do mesmo lote de treino.
        </p>

        <h3 style={S.h3}>O papel exacto do PPO</h3>
        <p style={S.p}>
          Até aqui descrevemos <em>o que</em> se quer maximizar (o objectivo com <InlineMath math={"r_\\phi"} /> e a penalidade KL). O PPO é <em>como</em> isso é traduzido, na prática, num passo concreto de gradiente sobre os pesos <InlineMath math={"\\theta"} /> do decoder. Tem três papéis distintos:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '0.9rem 1.1rem', border: '1px solid rgba(74,158,237,0.15)' }}>
            <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.3rem' }}>1. O "tradutor": de score a gradiente</div>
            <p style={{ ...S.p, marginBottom: 0, fontSize: '0.92rem' }}>
              O Reward Model devolve um <strong>número</strong> (ex.: <InlineMath math={"r_\\phi=2.4"} />, ou 2.39 depois da penalidade KL) — mas um número sozinho não diz a nenhum peso do decoder em que direcção se mexer. O PPO é o que converte esse número num <strong>policy gradient</strong>: usa as log-probabilidades que o decoder atribuiu a cada token da resposta gerada (as mesmas <InlineMath math={"\\log \\pi_\\theta"} /> do exemplo numérico acima) e combina-as com o reward para calcular a derivada do objectivo em relação a cada peso — a mesma mecânica de backpropagation do SFT, só que agora o "alvo" não é um token fixo, é "aumenta a probabilidade de tudo o que geraste, proporcionalmente a quão bom o Reward Model achou que foi".
            </p>
          </div>

          <div style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '0.9rem 1.1rem', border: '1px solid rgba(74,158,237,0.15)' }}>
            <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.3rem' }}>2. Actualiza os pesos de π_θ, na direcção certa</div>
            <p style={{ ...S.p, marginBottom: 0, fontSize: '0.92rem' }}>
              Com reward líquido positivo (o nosso exemplo: <InlineMath math={"\\approx 2.39"} />), o gradiente calculado no passo 1 <strong>aumenta</strong> a probabilidade de o decoder gerar tokens como os de "Conversa em privado..." para prompts semelhantes. Se o reward tivesse sido negativo ou baixo (uma resposta má, tipo "Ignora-o..."), o gradiente apontaria na direcção oposta: <strong>reduzir</strong> a probabilidade dessa resposta no futuro. É exactamente o mesmo mecanismo de "ajustar pesos para reduzir um erro" que já vimos no SFT e no Reward Model — só que aqui o sinal vem de uma pontuação de qualidade, não de um token-alvo fixo.
            </p>
          </div>

          <div style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '0.9rem 1.1rem', border: '1px solid rgba(74,158,237,0.15)' }}>
            <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.3rem' }}>3. Garante estabilidade — o "P" de Proximal</div>
            <p style={{ ...S.p, marginBottom: 0, fontSize: '0.92rem' }}>
              Sem controlo, um único passo de gradiente grande podia mudar drasticamente o comportamento do decoder de uma vez — arriscando destruir, de repente, a qualidade de escrita que o SFT já tinha alcançado, só para perseguir um reward mais alto. O PPO evita isto com <em>clipping</em>: mede o <strong>ratio</strong> entre a probabilidade que a política nova (depois do passo) e a política antiga (antes do passo) atribuem ao mesmo token, e corta esse ratio a um intervalo pequeno (tipicamente <InlineMath math={"[0.8, 1.2]"} />). Se uma actualização tentar mudar a probabilidade de um token para além desse intervalo, o excesso é ignorado — o modelo é forçado a mover-se em passos pequenos e repetidos, nunca num salto único e potencialmente destrutivo.
            </p>
          </div>
        </div>

        <div style={S.note}>
          Resumindo os três papéis numa frase: o Reward Model diz <em>"isto foi bom ou mau"</em> (um número); o PPO diz <em>"então mexe os pesos nesta direcção, mas só um bocadinho de cada vez"</em> (um gradiente controlado). Um decide o quê; o outro decide o como e o quanto.
        </div>

        <h3 style={S.h3}>Exemplo prático: do reward a um peso concreto</h3>
        <p style={S.p}>
          Para tornar isto ainda mais concreto, seguimos um <strong>único peso</strong> do decoder ao longo de todo o percurso. Considere o peso <InlineMath math={"w"} /> que liga a última camada oculta à posição do vocabulário correspondente ao token "privado" (uma entrada, entre milhões, na matriz de output do modelo).
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Quantidade</th>
                <th style={S.th}>Valor</th>
                <th style={S.th}>De onde vem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}>Reward líquido (R)</td>
                <td style={S.td}><InlineMath math={"2.39"} /></td>
                <td style={S.td}>Reward Model menos penalidade KL (calculado acima)</td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}>Vantagem (A)</td>
                <td style={S.td}><InlineMath math={"0.285"} /></td>
                <td style={S.td}>R menos a média de reward de outras respostas do batch</td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}>Gradiente do objectivo em w</td>
                <td style={{ ...S.td, color: '#4a9eed' }}><InlineMath math={"\\frac{\\partial \\mathcal{L}^{\\text{CLIP}}}{\\partial w} \\approx +0.004"} /></td>
                <td style={S.td}>Backpropagation normal, com A a escalar a magnitude (A maior → gradiente maior)</td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}>Learning rate (η)</td>
                <td style={S.td}><InlineMath math={"1\\times10^{-5}"} /></td>
                <td style={S.td}>Hiperparâmetro do optimizador, tipicamente muito pequeno nesta fase</td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}>Peso antes</td>
                <td style={S.td}><InlineMath math={"w = 0.15200"} /></td>
                <td style={S.td}>Valor herdado de <InlineMath math={"\\pi_{\\text{SFT}}"} /></td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>Peso depois</td>
                <td style={{ ...S.td, color: '#4a9eed', fontWeight: 700 }}><InlineMath math={"w' = 0.15200 + (10^{-5})(0.004) = 0.15204"} /></td>
                <td style={S.td}>Gradient ascent: soma-se (não subtrai) porque estamos a maximizar</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={S.p}>
          A mudança neste único peso é minúscula — <InlineMath math={"0.15200 \\to 0.15204"} /> — e é exactamente assim que deve ser: cada passo de PPO ajusta <strong>milhões</strong> de pesos, cada um por uma fracção ínfima, na direcção que (em média, sobre muitos prompts e respostas) aumenta o reward esperado. Nenhum peso individual "decide" gerar "privado" em vez de outra palavra; é o efeito acumulado de milhares destes micro-ajustes, repetidos ao longo de muitas iterações, que gradualmente desloca a distribuição de probabilidade do decoder na direcção das respostas que o Reward Model prefere.
        </p>

        <div style={S.note}>
          Nota o sinal: como a vantagem <InlineMath math={"A"} /> é <strong>positiva</strong> (a resposta gerada foi melhor que a média), o gradiente empurra <InlineMath math={"w"} /> para <strong>cima</strong> — tornando "privado" ligeiramente mais provável no futuro, neste contexto. Se a resposta gerada tivesse sido "Ignora-o..." (a rejeitada), a vantagem seria negativa, e o mesmo mecanismo empurraria os pesos correspondentes para <strong>baixo</strong>.
        </div>

        {/* SVG: Pipeline RLHF */}
        <div style={S.diagram}>
          <svg viewBox="0 0 720 215" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker id="rA" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#4a9eed" /></marker>
            </defs>

            <text x="360" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">Pipeline RLHF — Três Fases</text>

            {/* FASE 1 */}
            <text x="90" y="42" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4a9eed">FASE 1</text>
            <rect x="20" y="52" width="140" height="44" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
            <text x="90" y="71" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-primary)">SFT Base</text>
            <text x="90" y="86" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">π_SFT demonstrações</text>

            {/* Arrow 1→2 */}
            <path d="M 160 74 L 200 74" stroke="#4a9eed" strokeWidth="1.5" fill="none" markerEnd="url(#rA)" />

            {/* FASE 2 */}
            <text x="310" y="42" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4a9eed">FASE 2</text>
            <rect x="202" y="52" width="216" height="44" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
            <text x="310" y="71" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-primary)">Humano compara</text>
            <text x="310" y="86" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">y_w &gt; y_l rankings</text>

            <path d="M 310 96 L 310 126" stroke="#4a9eed" strokeWidth="1.5" fill="none" markerEnd="url(#rA)" />

            <rect x="202" y="128" width="216" height="44" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
            <text x="310" y="147" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-primary)">Reward Model</text>
            <text x="310" y="162" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">r_φ(x, y) → score</text>

            {/* Arrow 2→3 */}
            <path d="M 418 150 L 458 150" stroke="#4a9eed" strokeWidth="1.5" fill="none" markerEnd="url(#rA)" />

            {/* FASE 3 */}
            <text x="570" y="42" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4a9eed">FASE 3</text>
            <rect x="460" y="52" width="220" height="44" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
            <text x="570" y="71" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-primary)">PPO Update</text>
            <text x="570" y="86" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">max E[r] − β·KL  |  KL penalty vs π_SFT</text>

            <path d="M 570 96 L 570 126" stroke="#4a9eed" strokeWidth="1.5" fill="none" markerEnd="url(#rA)" />

            <rect x="460" y="128" width="220" height="44" rx="8" fill="rgba(74,158,237,0.12)" stroke="#4a9eed" strokeWidth="2" />
            <text x="570" y="147" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4a9eed">π_RL Alinhado</text>
            <text x="570" y="162" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">ChatGPT / Claude</text>

            <text x="360" y="205" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">O loop PPO itera até convergência — tipicamente centenas de passos de optimização</text>
          </svg>
        </div>

        <h3 style={S.h3}>Reward Hacking</h3>
        <p style={S.p}>
          O Reward Model é um <strong>proxy imperfeito</strong> do julgamento humano — foi treinado sobre um número finito de comparações, não é o próprio julgamento humano. Ao optimizar agressivamente esse proxy, o PPO pode descobrir "exploits": respostas que o RM pontua muito alto mas que um humano, a ver directamente, consideraria repetitivas, aduladoras ou de baixa qualidade real. Este fenómeno chama-se <em>reward hacking</em>, e é uma instância directa da Lei de Goodhart ("quando uma medida se torna um alvo, deixa de ser uma boa medida"): quanto mais o decoder é optimizado contra <InlineMath math={"r_\\phi"} />, maior o risco de a política divergir do que <InlineMath math={"r_\\phi"} /> pretendia capturar. É precisamente para conter isto que a penalização KL (secção anterior) existe — sem ela, nada impede o decoder de se afastar arbitrariamente de <InlineMath math={"\\pi_{\\text{SFT}}"} /> em busca de reward alto.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 320" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker id="rhArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
              </marker>
            </defs>
            <rect x="30" y="120" width="120" height="50" rx="10" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
            <text x="90" y="142" textAnchor="middle" fontSize="12" fontWeight="700" fill="#4a9eed">Humanos</text>
            <text x="90" y="158" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Preferências</text>

            <rect x="300" y="30" width="160" height="50" rx="10" fill="rgba(125,211,252,0.1)" stroke="#0284c7" strokeWidth="1.5" />
            <text x="380" y="52" textAnchor="middle" fontSize="12" fontWeight="700" fill="#4a9eed">Reward Model</text>
            <text x="380" y="68" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Bradley-Terry loss</text>

            <rect x="580" y="120" width="140" height="50" rx="10" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
            <text x="650" y="142" textAnchor="middle" fontSize="12" fontWeight="700" fill="#4a9eed">LLM (PPO)</text>
            <text x="650" y="158" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Policy π_θ</text>

            <rect x="300" y="220" width="160" height="50" rx="10" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
            <text x="380" y="242" textAnchor="middle" fontSize="12" fontWeight="700" fill="#4a9eed">KL Penalty</text>
            <text x="380" y="258" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">π_θ vs π_SFT</text>

            <line x1="150" y1="140" x2="296" y2="65" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#rhArr)" />
            <line x1="460" y1="55" x2="576" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#rhArr)" />
            <line x1="650" y1="170" x2="464" y2="238" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#rhArr)" />
            <line x1="380" y1="220" x2="380" y2="84" stroke="#4a9eed" strokeWidth="1" strokeDasharray="5,3" markerEnd="url(#rhArr)" />
            <line x1="580" y1="150" x2="150" y2="150" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#rhArr)" />

            <text x="195" y="90" fontSize="9" fill="var(--text-secondary)" textAnchor="middle">treina RM</text>
            <text x="565" y="85" fontSize="9" fill="var(--text-secondary)" textAnchor="middle">sinal de recompensa</text>
            <text x="575" y="218" fontSize="9" fill="var(--text-secondary)" textAnchor="middle">outputs → RM</text>
            <text x="410" y="135" fontSize="9" fill="#4a9eed" textAnchor="middle">regulariza (evita reward hacking)</text>
            <text x="380" y="310" fontSize="10" fill="var(--text-secondary)" textAnchor="middle">Ciclo RLHF completo — a penalização KL é a principal defesa contra reward hacking</text>
          </svg>
        </div>

        <h3 style={S.h3}>DPO — Alternativa ao PPO</h3>
        <p style={S.p}>
          Tudo o que vimos até agora — treinar um Reward Model separado, depois usar PPO com clipping para actualizar o decoder sem o desestabilizar — é <strong>complexo</strong>: são dois modelos, duas fases de treino, e um algoritmo de RL com vários hiperparâmetros sensíveis (β, o intervalo de clipping, a estimativa da baseline). O <strong>Direct Preference Optimization</strong> (Rafailov et al., 2023) mostrou que é possível obter um resultado equivalente com <strong>um único modelo e uma única fase de treino supervisionado</strong> — sem Reward Model separado, sem PPO, sem geração de amostras durante o treino.
        </p>

        <div style={S.note}>
          <strong>Mas a anotação humana continua a existir.</strong> DPO elimina o Reward Model e o PPO — não elimina a etapa de recolher respostas geradas e mandá-las a anotadores humanos para dizerem qual preferem (secção "De onde vêm os dados", mais acima). Esse passo é <strong>idêntico</strong> em RLHF clássico e em DPO: continua a ser preciso um dataset de pares <InlineMath math={"(x, y_w, y_l)"} /> julgados por humanos. A única coisa que muda é o que se faz <em>depois</em> de ter esse dataset: em vez de o usar para treinar um Reward Model separado e depois correr PPO, usa-se directamente numa única perda supervisionada sobre o próprio decoder.
        </div>

        <h3 style={S.h3}>O que se faz, concretamente, com as respostas anotadas</h3>
        <p style={S.p}>
          O anotador humano não faz mais do que <strong>escolher qual das duas respostas prefere</strong>, para um dado prompt — exactamente como na secção do Reward Model. O resultado dessa escolha é guardado como um triplo <InlineMath math={"(x, y_w, y_l)"} />: o prompt, a resposta que o humano marcou como melhor (<InlineMath math={"y_w"} />), e a que marcou como pior (<InlineMath math={"y_l"} />). É <strong>só isto</strong> que sai da anotação humana — nenhum número, nenhum score, só qual delas ganhou.
        </p>
        <p style={S.p}>
          Depois, para cada triplo destes no dataset, o treino de DPO faz sempre a mesma sequência de passos: (1) calcula a probabilidade que <InlineMath math={"\\pi_\\theta"} /> (o modelo a treinar) atribui a <InlineMath math={"y_w"} /> e a <InlineMath math={"y_l"} />; (2) calcula a mesma coisa para <InlineMath math={"\\pi_{\\text{SFT}}"} /> (o modelo de referência, fixo, nunca actualizado); (3) mete estes quatro números na fórmula da perda abaixo; (4) faz backpropagation dessa perda — só através de <InlineMath math={"\\pi_\\theta"} />, nunca de <InlineMath math={"\\pi_{\\text{SFT}}"} />. O label humano (qual delas é <InlineMath math={"y_w"} />) é o que decide <em>qual dos dois termos da subtracção</em> deve subir e qual deve descer — é exactamente o mesmo papel que tinha na perda do Reward Model, só que agora aplicado directamente aos logaritmos de probabilidade do próprio decoder, em vez de a scores de um modelo à parte.
        </p>

        <h3 style={S.h3}>A ideia central: um "reward implícito"</h3>
        <p style={S.p}>
          A observação matemática de Rafailov et al. é que, para o objectivo RLHF (o <InlineMath math={"\\max_{\\pi_\\theta} \\mathbb{E}[r_\\phi - \\beta \\text{KL}]"} /> da secção anterior), a política óptima <InlineMath math={"\\pi^*"} /> tem uma forma fechada que relaciona directamente o reward com a razão entre as probabilidades da política treinada e da política SFT:
        </p>

        <div style={S.math}>
          <BlockMath math={"r(x,y) = \\beta \\log \\frac{\\pi_\\theta(y|x)}{\\pi_{\\text{SFT}}(y|x)} + \\text{constante}"} />
        </div>

        <p style={S.p}>
          Por outras palavras: <strong>não precisamos de um Reward Model separado para saber se uma resposta é boa</strong> — a informação já está implícita em quanto a política treinada aumentou (ou diminuiu) a probabilidade dessa resposta, relativamente à política SFT original. Se <InlineMath math={"\\pi_\\theta"} /> atribui mais probabilidade a <InlineMath math={"y"} /> do que <InlineMath math={"\\pi_{\\text{SFT}}"} /> atribuía, isso <em>é</em>, matematicamente, um reward implícito positivo.
        </p>

        <p style={S.p}>
          Substituindo este "reward implícito" (em vez do score de um Reward Model treinado à parte) na mesma fórmula de perda pairwise que já vimos na secção do Reward Model — a comparação winner vs. loser — obtemos a perda DPO:
        </p>

        <div style={S.math}>
          <BlockMath math={"\\mathcal{L}_{\\text{DPO}} = -\\log \\sigma \\left( \\underbrace{\\beta \\log \\frac{\\pi_{\\theta}(y_w|x)}{\\pi_{\\text{SFT}}(y_w|x)}}_{\\text{reward implícito de } y_w} - \\underbrace{\\beta \\log \\frac{\\pi_{\\theta}(y_l|x)}{\\pi_{\\text{SFT}}(y_l|x)}}_{\\text{reward implícito de } y_l} \\right)"} />
        </div>

        <p style={S.p}>
          Repara na semelhança estrutural com <InlineMath math={"\\mathcal{L}_{\\text{RM}}"} />: é a mesma forma <InlineMath math={"-\\log\\sigma(\\text{diferença})"} />, só que aqui a "diferença de scores" não vem de um modelo treinado à parte — vem directamente das log-probabilidades da própria política, comparadas com a política de referência.
        </p>

        <h3 style={S.h3}>Exemplo numérico</h3>
        <p style={S.p}>
          Continuando com o mesmo par (<InlineMath math={"y_w"} /> = "Conversa em privado...", <InlineMath math={"y_l"} /> = "Ignora-o..."), suponha estas log-probabilidades (β = 0.1):
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Resposta</th>
                <th style={S.th}>log π_θ(y|x)</th>
                <th style={S.th}>log π_SFT(y|x)</th>
                <th style={S.th}>Reward implícito = β(diferença)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>y_w (boa)</td>
                <td style={S.td}>−3.0</td>
                <td style={S.td}>−3.5</td>
                <td style={{ ...S.td, color: '#4a9eed', fontWeight: 700 }}>0.1 × (−3.0 − (−3.5)) = 0.05</td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}>y_l (má)</td>
                <td style={S.td}>−2.0</td>
                <td style={S.td}>−2.0</td>
                <td style={S.td}>0.1 × (−2.0 − (−2.0)) = 0.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={S.math}>
          <BlockMath math={"\\mathcal{L}_{\\text{DPO}} = -\\log\\sigma(0.05 - 0.00) = -\\log\\sigma(0.05) \\approx 0.669"} />
        </div>

        <p style={S.p}>
          Este erro ainda é alto (0.05 é uma diferença pequena) — o gradiente resultante empurra o treino a <strong>aumentar</strong> <InlineMath math={"\\log\\pi_\\theta(y_w|x)"} /> (tornar a resposta boa mais provável do que já era em <InlineMath math={"\\pi_{\\text{SFT}}"} />) e a <strong>diminuir</strong> <InlineMath math={"\\log\\pi_\\theta(y_l|x)"} /> (tornar a resposta má menos provável do que era). Isto acontece numa <strong>única passagem de treino supervisionado</strong> por par — sem gerar amostras, sem Reward Model, sem clipping.
        </p>

        <div style={S.note}>
          DPO elimina duas fontes de complexidade do pipeline RLHF: (1) já não é preciso treinar nem manter um Reward Model separado — os seus pesos nunca existem; (2) o treino volta a ser supervisionado (como o SFT), com um dataset fixo de pares preferência–rejeição, em vez de RL online com amostragem, vantagens e clipping. Tornou-se o método preferido para alinhamento de modelos open-source como Llama, Mistral e Qwen — mais simples de implementar e mais estável de treinar, ainda que o PPO continue a ser usado nalguns dos maiores laboratórios por permitir mais controlo fino sobre o processo.
        </div>

        <h3 style={S.h3}>Variantes do DPO</h3>
        <p style={S.p}>
          O sucesso do DPO motivou várias variantes que resolvem limitações específicas:
        </p>
        <ul style={{ color: 'var(--text-primary)', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li><strong>IPO (Identity Preference Optimization):</strong> substitui o log-sigmoid por uma loss quadrática para evitar overfitting a pares muito separados.</li>
          <li><strong>KTO (Kahneman-Tversky Optimization):</strong> usa dados de thumbs-up/thumbs-down em vez de pares comparativos, mais fácil de recolher.</li>
          <li><strong>ORPO:</strong> elimina o modelo de referência completamente, integrando o termo de regularização na própria loss de linguagem.</li>
          <li><strong>SimPO:</strong> usa a log-probabilidade média (não cumulativa) e não requer modelo de referência.</li>
        </ul>

        <div style={{ overflowX: 'auto' }}>
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
        </div>

        <div style={S.note}>
          O parâmetro <InlineMath math={"\\beta"} /> controla o trade-off entre seguir as preferências e manter-se próximo da política de referência. Valores típicos: 0.1–0.5. Um <InlineMath math={"\\beta"} /> alto conserva mais o comportamento original; um <InlineMath math={"\\beta"} /> baixo permite mudanças maiores.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 5 ────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Chain of Thought</h2>

        <p style={S.p}>
          <strong>Chain of Thought (CoT)</strong> é a observação de que um LLM responde melhor a
          problemas que exigem raciocínio (aritmética, lógica, problemas em vários passos) quando é
          levado a gerar os <em>passos intermédios</em> antes da resposta final, em vez de saltar
          directamente para ela. Wei et al. (2022) mostraram que, a partir de uma certa escala de
          modelo, incluir alguns exemplos de raciocínio passo-a-passo no prompt (few-shot CoT) produz
          ganhos muito maiores em benchmarks de matemática e lógica do que few-shot prompting normal —
          um efeito que praticamente não aparece em modelos pequenos.
        </p>

        <div style={S.highlight}>
          <strong>Direct prompting:</strong> "Q: Tenho 3 caixas com 4 maçãs cada, e como 5. Quantas
          maçãs sobram? A: 7"<br /><br />
          <strong>Chain-of-Thought prompting:</strong> "Q: Tenho 3 caixas com 4 maçãs cada, e como 5.
          Quantas maçãs sobram? A: Começo com 3×4=12 maçãs. Como 5, então 12−5=7 maçãs sobram."<br /><br />
          A resposta final é a mesma, mas o modelo que gera o raciocínio explícito comete muito menos
          erros em problemas com mais passos — cada passo intermédio reduz a probabilidade de errar o
          seguinte, porque o modelo já "viu" o resultado parcial correcto nos seus próprios tokens
          gerados.
        </div>

        <h3 style={S.h3}>Porque é que gerar texto intermédio ajuda?</h3>
        <p style={S.p}>
          Um Transformer faz uma quantidade fixa de computação por token gerado. Se a resposta final
          for um único token ("7"), o modelo só tem essa quantidade fixa de computação para resolver{' '}
          <em>todo</em> o problema — multiplicar, subtrair, e verificar. Ao gerar passos intermédios,
          cada um desses sub-cálculos ganha o seu próprio "orçamento" de computação (os tokens gastos a
          escrevê-lo), e o resultado de cada passo fica disponível, como texto já gerado, para
          condicionar o passo seguinte. Chain of Thought é, em essência, uma forma de{' '}
          <strong>trocar mais tokens gerados (mais tempo de inferência) por mais precisão</strong> — o
          mesmo princípio que, mais tarde, é levado ao extremo pelos modelos de "raciocínio alongado"
          como o o1/o3 da OpenAI e o DeepSeek-R1.
        </p>

        <h3 style={S.h3}>Zero-shot CoT: "Let's think step by step"</h3>
        <p style={S.p}>
          Kojima et al. (2022) mostraram que nem é preciso fornecer exemplos de raciocínio no prompt:
          basta acrescentar a instrução <em>"Let's think step by step"</em> (ou equivalente) antes da
          resposta para desencadear o mesmo efeito, sem custar tokens de few-shot examples. Isto sugere
          que a capacidade de raciocinar passo-a-passo já existe, latente, nos pesos do modelo pré-treinado
          — o prompt (few-shot ou zero-shot) serve apenas para a activar, não para a ensinar do zero.
        </p>

        <h3 style={S.h3}>Self-Consistency: amostrar várias vezes e votar</h3>
        <p style={S.p}>
          Como o CoT é gerado por amostragem, cadeias de raciocínio diferentes podem levar a respostas
          finais diferentes para o mesmo problema. O <strong>Self-Consistency</strong> (Wang et al.,
          2022) explora isto deliberadamente: gera-se o mesmo prompt <InlineMath math={"k"} /> vezes
          (com temperatura {'>'} 0, para obter cadeias distintas), extrai-se a resposta final de cada
          uma, e escolhe-se a resposta que aparece <strong>mais vezes</strong> entre as{' '}
          <InlineMath math={"k"} /> amostras — um voto maioritário sobre o resultado, não sobre o
          raciocínio em si. Funciona porque caminhos de raciocínio errados tendem a divergir em
          direcções diferentes e imprevisíveis, enquanto os correctos tendem a convergir na mesma
          resposta — mais amostras corretas "concordam" entre si do que amostras erradas concordam por
          acaso.
        </p>

        <div style={S.note}>
          Self-Consistency melhora a precisão de forma consistente (tipicamente +10-20 pontos
          percentuais em benchmarks de raciocínio matemático), mas multiplica o custo de inferência por{' '}
          <InlineMath math={"k"} /> — é uma técnica de <em>inference-time scaling</em>: trocar mais
          compute na inferência por mais precisão, sem tocar nos pesos do modelo. É o precursor directo
          das técnicas de "best-of-n" e dos verificadores/PRM usados para escolher entre várias cadeias
          candidatas, discutidos a seguir.
        </div>

        <p style={S.p}>
          As três técnicas acima — CoT few-shot, zero-shot CoT, self-consistency — são todas{' '}
          <strong>técnicas de prompting</strong>: não alteram os pesos do modelo, funcionam com qualquer
          modelo pré-treinado suficientemente grande, e cobrem-se com mais detalhe no módulo de Prompt
          Engineering. A partir daqui, a questão muda: em vez de <em>pedir</em> ao modelo para raciocinar
          bem via prompt, como é que se <strong>treina</strong> um modelo para o fazer melhor por si
          próprio, sem depender de um prompt bem construído?
        </p>

        <h3 style={S.h3}>ORM vs. PRM</h3>
        <p style={S.p}>
          Treinar modelos para raciocinar passo a passo requer não só respostas correctas mas recompensas
          sobre o <em>processo</em> de raciocínio. Diferentes abordagens equilibram granularidade do sinal
          de reward com custo de anotação.
        </p>
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
                  fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth={1.5} />
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
              fill="none" stroke="#4a9eed" strokeWidth={1.5} strokeDasharray="5,3" />
            <text x={312} y={185} textAnchor="middle" fontSize={9} fill="#4a9eed">descartado (resposta errada)</text>
            {/* feedback */}
            <path d="M 605 130 C 605 185, 350 200, 75 185 C 45 180, 30 165, 30 130"
              fill="none" stroke="#0284c7" strokeWidth={2} strokeDasharray="6,4" />
            <polygon points="30,122 26,134 36,132" fill="#0284c7" />
            <text x={320} y={202} textAnchor="middle" fontSize={10} fill="#0284c7" fontWeight={600}>novo modelo → nova iteração STaR</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 6 ────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Scaling Laws e Compute-Optimal Training</h2>

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
                fill="none" stroke="#0284c7" strokeWidth={2.5} />
              <text x={560} y={140} fontSize={9} fill="#0284c7" fontStyle="italic">L ∝ D⁻ᵝ</text>
              {/* Gopher marker */}
              <circle cx={460} cy={100} r={5} fill="#4a9eed" />
              <text x={478} y={97} fontSize={9} fill="#4a9eed">Gopher (undertrained)</text>
              {/* Chinchilla marker */}
              <circle cx={560} cy={148} r={5} fill={color} />
              <text x={578} y={150} fontSize={9} fill={color}>Chinchilla ✓</text>
            </g>
          </svg>
        </div>

        <div style={S.note}>
          Estas scaling laws foram derivadas para o <strong>pré-treino</strong> (Módulo 1) — aqui aplicam-se sobretudo como referência de custo/benefício para decidir <em>quando</em> vale a pena investir num modelo maior versus mais dados de pós-treino, e para contextualizar decisões de dados sintéticos e destilação vistas nas secções anteriores deste módulo.
        </div>
      </div>
    </div>
  );
}
