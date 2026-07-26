import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const S = {
  page: { maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: '#4a9eed', border: '1.5px solid #4a9eed', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: '#4a9eed', borderLeft: '3px solid #4a9eed', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.06)', borderLeft: '3px solid #4a9eed', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  ul: { paddingLeft: '1.4rem', color: 'var(--text-primary)', lineHeight: 1.9, fontSize: '1rem' },
  li: { marginBottom: '0.4rem' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

const EvoRLDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>RL Clássico vs Aprendizagem por Reforço Evolutiva</p>
    <svg viewBox="0 0 600 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr8" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
        <marker id="arr8b" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
      </defs>

      {/* RL clássico */}
      <text x="140" y="18" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">RL CLÁSSICO (Gradient-based)</text>
      <rect x="10" y="25" width="260" height="130" rx="8" fill="rgba(74,158,237,0.10)" stroke="var(--text-secondary)" strokeWidth="1"/>
      {[{x:60,y:60,l:'Agente\n(policy π)'},{x:175,y:60,l:'Ambiente'},{x:175,y:125,l:'Recompensa\nr_t'},{x:60,y:125,l:'Actualização\n∇θJ(π)'}].map(({x,y,l})=>(
        <g key={l}>
          <rect x={x-35} y={y-15} width={70} height={30} rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2"/>
          {l.split('\n').map((line,i)=>(
            <text key={i} x={x} y={y+i*11-3} textAnchor="middle" fill="#4a9eed" fontSize="7.5" fontWeight="600">{line}</text>
          ))}
        </g>
      ))}
      <line x1={95} y1={60} x2={138} y2={60} stroke="#4a9eed" strokeWidth="1.2" markerEnd="url(#arr8)"/>
      <text x="118" y="54" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">acção a_t</text>
      <line x1={175} y1={75} x2={175} y2={110} stroke="#4a9eed" strokeWidth="1.2" markerEnd="url(#arr8)"/>
      <line x1={140} y1={125} x2={97} y2={125} stroke="#4a9eed" strokeWidth="1.2" markerEnd="url(#arr8)"/>
      <line x1={60} y1={110} x2={60} y2={76} stroke="#4a9eed" strokeWidth="1.2" markerEnd="url(#arr8)"/>
      <text x="140" y="162" textAnchor="middle" fill="#4a9eed" fontSize="8">Actualiza 1 política por gradiente. Precisa de gradiente diferenciável.</text>

      {/* EvoRL */}
      <text x="450" y="18" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">EvoRL (Population-based)</text>
      <rect x="320" y="25" width="260" height="130" rx="8" fill="rgba(74,158,237,0.10)" stroke="var(--text-secondary)" strokeWidth="1"/>
      {[{x:355,y:55,l:'π₁'},{x:395,y:55,l:'π₂'},{x:435,y:55,l:'π₃'},{x:475,y:55,l:'π₄'},{x:515,y:55,l:'π₅'}].map(({x,y,l})=>(
        <g key={l}>
          <circle cx={x} cy={y} r={14} fill="rgba(74,158,237,0.15)" stroke="#4a9eed" strokeWidth="1.5"/>
          <text x={x} y={y+4} textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">{l}</text>
        </g>
      ))}
      {[{x:355,y:100,l:'r₁=12'},{x:395,y:100,l:'r₂=45'},{x:435,y:100,l:'r₃=8'},{x:475,y:100,l:'r₄=67'},{x:515,y:100,l:'r₅=23'}].map(({x,y,l})=>(
        <g key={l}>
          <text x={x} y={y} textAnchor="middle" fill={parseInt(l.split('=')[1]) > 40 ? '#4a9eed' : 'var(--text-secondary)'} fontSize="7.5">{l}</text>
        </g>
      ))}
      <text x="450" y="130" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Selecção + Crossover + Mutação → nova geração</text>
      <text x="450" y="162" textAnchor="middle" fill="#4a9eed" fontSize="8">Avalia N políticas em paralelo. Fitness = recompensa total do episódio.</text>
    </svg>
  </div>
);

const ComparisonExplorer = () => {
  const [sel, setSel] = useState(0);
  const items = [
    {
      name: 'EvoRL vs PPO', color: '#4a9eed',
      vantagensEvo: 'Não precisa de gradiente — funciona com qualquer política, mesmo não-diferenciável (estruturas de dados, programas). Paralelismo trivial — N avaliações independentes. Robusto a recompensas esparsas ou atrasadas — usa apenas o total do episódio.',
      vantogensPPO: 'Muito mais eficiente em termos de dados — aprende mais por interacção. Funciona melhor em espaços de acção contínuos com recompensa densa. Convergência mais previsível em problemas padrão.',
      quando: 'EvoRL quando: recompensa esparsa, política não-diferenciável, paralelismo disponível, espaço de acção discreto. PPO quando: dados caros, recompensa densa, acção contínua, GPU disponível.',
    },
    {
      name: 'Neuroevolução (NEAT/ES)', color: '#4a9eed',
      vantagensEvo: 'NEAT evolui também a topologia — pode descobrir a arquitectura da rede neural, não apenas os pesos. OpenAI ES: perturbações gaussianas + paralelismo = gradiente sem backprop. Não fica preso em óptimos locais do espaço de pesos.',
      vantogensPPO: 'Backprop é muito mais eficiente para ajustar pesos de redes profundas. Requer muito menos avaliações de fitness. Pode usar todas as interacções (não apenas o total do episódio).',
      quando: 'NEAT/ES quando: arquitectura óptima é desconhecida, recompensa muito esparsa, paralelismo massivo. Backprop quando: arquitectura conhecida, recompensa densa, dados caros.',
    },
    {
      name: 'Evolutionary RL Híbrido', color: '#4a9eed',
      vantagensEvo: 'ERL (Evolutionary RL, Khadka 2018): combina uma população evolutiva com um actor-critic. O AC usa gradientes para aprender, os indivíduos exploram o espaço de políticas. O melhor indivíduo da população é copiado para o actor periodicamente.',
      vantogensPPO: 'O ERL supera RL puro em ambientes com recompensa esparsa — a exploração evolutiva encontra soluções que o gradiente perde. Mantém a eficiência de dados do RL quando a recompensa é densa.',
      quando: 'ERL ideal quando o problema tem zonas de recompensa esparsa (exploração necessária) mas também gradiente utilizável (eficiência de aprendizagem). Melhor dos dois mundos.',
    },
  ];
  const it = items[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Comparações e Situações de Uso</p>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {items.map((i, idx) => (
          <button key={idx} onClick={() => setSel(idx)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: sel === idx ? i.color : 'var(--bg-primary)', color: sel === idx ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === idx ? i.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{i.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${it.color}30` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '0.75rem' }}>
            <div style={{ fontWeight: 700, color: it.color, fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Vantagens Evolutivas</div>
            <p style={{ margin: 0, lineHeight: 1.7 }}>{it.vantagensEvo}</p>
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '0.75rem' }}>
            <div style={{ fontWeight: 700, color: '#4a9eed', fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Quando RL Clássico é Melhor</div>
            <p style={{ margin: 0, lineHeight: 1.7 }}>{it.vantogensPPO}</p>
          </div>
        </div>
        <div style={{ background: `${it.color}10`, borderRadius: 6, padding: '0.6rem 0.9rem', borderLeft: `3px solid ${it.color}`, fontSize: '0.85rem' }}>
          <strong>Regra de decisão:</strong> {it.quando}
        </div>
      </div>
    </div>
  );
};

export default function NEL8() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/nel" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>MÓDULO 07</div>
        <h1 style={S.h1}>Aprendizagem por Reforço Evolutiva</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. RL Clássico vs Aprendizagem Evolutiva</h2>
          <p style={S.p}>No RL clássico (PPO, A3C, SAC, TD3), o agente aprende uma política <InlineMath math="\pi_\theta" /> actualizando os parâmetros θ na direcção do gradiente de retorno esperado. O gradiente é estimado a partir das trajectórias geradas pela própria política. O processo é iterativo: amostragem → estimativa de gradiente → actualização de θ.</p>
          <p style={S.p}>Na EvoRL, mantém-se uma população de políticas <InlineMath math="\{\pi_1, \pi_2, \dots, \pi_n\}" />. Cada política é avaliada num ambiente por rollout completo. O fitness é a recompensa total acumulada no episódio. As políticas de maior fitness são seleccionadas, cruzadas e mutadas para produzir a geração seguinte. Não há gradiente, não há backpropagation.</p>
          <EvoRLDiagram />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Algoritmos de EvoRL — Os Principais</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Algoritmo</th><th style={S.th}>Ano</th><th style={S.th}>Mecanismo</th><th style={S.th}>Pontos fortes</th><th style={S.th}>Aplicação típica</th></tr></thead>
              <tbody>
                {[
                  ['OpenAI ES', '2017', 'Perturbações gaussianas dos pesos; estimativa de gradiente distribuída: θ ← θ + α/(Nσ)·ΣFᵢεᵢ', 'Escala linear com CPUs; sem comunicação de gradientes; simples de implementar', 'MuJoCo locomotion (Ant, HalfCheetah), Atari com paralelismo massivo'],
                  ['NEAT para RL', '2002+', 'Evolve topology + weights via innovation numbers e especiação', 'Descobre arquitectura automaticamente; não precisa de activações diferenciáveis', 'Controlo de robôs compactos, navegação, jogos simples'],
                  ['CMA-ES para RL', '2001+', 'Evolution Strategy com adaptação de matriz de covariância; exploração correlacionada', 'Muito eficiente em poucas avaliações; útil quando avaliações são caras', 'Tarefas de controlo onde cada rollout custa muito'],
                  ['ERL (Evolutionary RL)', '2018', 'Combina população evolutiva com actor-critic; periodicamente copia o melhor indivíduo para o actor', 'Exploração evolutiva + eficiência de dados do gradiente', 'Ambientes com recompensa esparsa + gradiente disponível'],
                  ['PBT (Population-Based Training)', '2017', 'Múltiplos agentes treinados em paralelo; hyperparameter mutation; exploita os melhores periodicamente', 'Optimiza hiperparâmetros e pesos ao mesmo tempo; auto-tuning', 'Treino de grandes redes neuronais com RL'],
                ].map(([alg, year, mec, pts, app]) => (
                  <tr key={alg}>
                    <td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>{alg}</td>
                    <td style={{ ...S.td, color: 'var(--text-secondary)' }}>{year}</td>
                    <td style={{ ...S.td, fontSize: '0.83rem' }}>{mec}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.83rem' }}>{pts}</td>
                    <td style={{ ...S.td, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. OpenAI ES — Detalhes do Algoritmo</h2>
          <p style={S.p}>O algoritmo central da OpenAI ES (Salimans et al., 2017) é elegantemente simples. Cada worker i recebe a seed aleatória da sua perturbação εᵢ (em vez de εᵢ completo) — a comunicação é O(1) por worker. Todos os workers geram a mesma sequência de perturbações dado a seed global, calculam o seu fitness Fᵢ, e enviam apenas Fᵢ ao servidor central. O servidor acumula:</p>
          <div style={S.math}>
            <BlockMath math="\theta_{t+1} = \theta_t + \dfrac{\alpha}{N\sigma} \sum_{i=1}^{N} F_i \cdot \varepsilon_i" />
          </div>
          <p style={S.p}>Esta fórmula é uma estimativa de ∇_θ E[F(θ)] = (1/σ)·E[F(θ+σε)·ε]. É equivalente a REINFORCE com política gaussiana. A chave é que a comunicação entre workers é apenas 1 número (Fᵢ) — não gradientes — o que escala perfeitamente com N workers.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Parâmetro</th><th style={S.th}>Valor típico</th><th style={S.th}>Efeito</th></tr></thead>
              <tbody>
                {[
                  ['N (número de workers)', '50 – 1440', 'Mais workers → mais avaliações por geração → gradiente mais preciso'],
                  ['σ (desvio-padrão)', '0.01 – 0.1', 'σ grande → exploração maior; σ pequeno → refinamento local'],
                  ['α (learning rate)', '0.01 – 0.3', 'Taxa de actualização dos pesos θ'],
                  ['Antithetic sampling', 'Usar −εᵢ além de εᵢ', 'Reduz variância da estimativa do gradiente a custo zero'],
                  ['Rank normalization', 'Normalizar Fᵢ por rank', 'Remove sensibilidade à escala do fitness — mais robusto'],
                ].map(([p, v, e]) => (
                  <tr key={p}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed', fontSize: '0.85rem' }}>{p}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{v}</td><td style={S.td}>{e}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Vantagens e Limitações — Quando Usar EvoRL</h2>
          <ComparisonExplorer />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Casos de Uso Reais</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Domínio</th><th style={S.th}>Problema específico</th><th style={S.th}>Por que EvoRL?</th><th style={S.th}>Resultado notável</th></tr></thead>
              <tbody>
                {[
                  ['Robótica', 'Locomoção de robô com corpo desconhecido', 'Recompensa esparsa; política não-diferenciável (motores discretos)', 'NEAT descobre gaits (padrões de marcha) automaticamente sem modelo do corpo'],
                  ['Jogos de Atari', 'Score máximo em jogos Atari 2600', 'Recompensa esparsa e atrasada; exploração do espaço de jogo', 'OpenAI ES ≈ A3C em Human Starts, com 10× mais paralelismo'],
                  ['Design de redes', 'Neural Architecture Search (NAS)', 'Espaço de arquitecturas discreto e não-diferenciável', 'CoDeepNEAT descobre arquitecturas competitivas com as de referência'],
                  ['Trading algorítmico', 'Estratégias de trading com drawdown mínimo', 'Fitness não-diferenciável (métricas de risco), múltiplos objectivos', 'GP e NSGA-II evoluem estratégias multi-objectivo interpretáveis'],
                  ['Controlo de satélites', 'Trajectórias óptimas com restrições de propulsão', 'Espaço de acção discreto, física complexa, avaliações caras', 'ES com CMA resolve problemas que PPO não consegue (landscape deceptivo)'],
                ].map(([d, p, r, res]) => (
                  <tr key={d}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{d}</td><td style={S.td}>{p}</td><td style={{ ...S.td, color: '#4a9eed', fontSize: '0.83rem' }}>{r}</td><td style={{ ...S.td, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{res}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
