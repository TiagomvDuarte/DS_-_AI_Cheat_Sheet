import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './EdgeAI';

const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  highlight: { background: `${color}12`, border: `1px solid ${color}30`, borderRadius: 8, padding: '0.9rem 1.1rem', marginTop: '0.8rem', fontSize: '0.93rem', color: 'var(--text-primary)', lineHeight: 1.7 },
  note: { background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 8, padding: '0.8rem 1rem', marginTop: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const m = modules[7];

export default function EDG8() {
  return (
    <div style={S.page}>
      <Link to="/edge-ai" style={S.back}>← Edge AI &amp; TinyML</Link>

      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* ── Secção 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. On-device Fine-tuning — Motivação e Desafios</h2>
        <p style={S.p}>
          On-device training — actualizar o modelo no edge sem enviar dados para cloud — resolve adaptação a novas condições sem custos de privacidade, latência e bandwidth. O caso mais comum é o fine-tuning quando a distribuição dos dados muda: novo produto, novo utilizador, mudança de ambiente.
        </p>
        <p style={S.p}>
          O desafio fundamental é a memória: backpropagation standard requer todos os activações intermédios armazenados durante o forward pass. Um ResNet-50 precisaria de 500MB só de activações com batch size 1, impossível num dispositivo com 512MB ou 1GB de RAM. Soluções: treinar apenas as últimas camadas (feature extractor congelado); gradient checkpointing (reter activações de camadas chave, recomputar as restantes — troca memória por computação); micro-batch size 1–4; LoRA adapters (apenas parâmetros de baixo rank treináveis — 100–1000× menos parâmetros).
        </p>
        <div style={S.diagram}>
          {/* Row 1: Cloud vs Edge paths */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: '1rem', marginBottom: '0.75rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.5rem', textAlign: 'center' }}>CAMINHO CLOUD (semanas)</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                {['Recolher dados','Upload cloud','Retreino','OTA deploy'].map((s, i) => (
                  <React.Fragment key={s}>
                    <div style={{ flex: 1, background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(71,85,105,0.35)', borderRadius: 5, padding: '0.3rem 0.2rem', textAlign: 'center', fontSize: '0.62rem', color: '#f97316', fontFamily: 'monospace' }}>{s}</div>
                    {i < 3 && <div style={{ color: '#475569', fontSize: '0.8rem', flexShrink: 0 }}>→</div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div style={{ background: 'var(--card-border)', width: 1, alignSelf: 'stretch' }} />
            <div>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.5rem', textAlign: 'center' }}>CAMINHO EDGE (horas)</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                {['200 amostras','Fine-tune local','Validacao','Actualizado'].map((s, i) => (
                  <React.Fragment key={s}>
                    <div style={{ flex: 1, background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 5, padding: '0.3rem 0.2rem', textAlign: 'center', fontSize: '0.62rem', color: '#f97316', fontFamily: 'monospace' }}>{s}</div>
                    {i < 3 && <div style={{ color: '#f97316', fontSize: '0.8rem', flexShrink: 0 }}>→</div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Memory bars */}
          <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.7rem', marginBottom: '0.75rem' }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.6rem' }}>MEMORIA EM TREINO vs INFERENCIA — ResNet-50</div>
            <div style={{ fontSize: '0.62rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.3rem' }}>Treino (backprop)</div>
            <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center', marginBottom: '0.55rem' }}>
              <div style={{ width: 90, background: 'rgba(30,41,59,0.4)', border: '1px solid rgba(71,85,105,0.3)', borderRadius: 3, padding: '0.2rem 0', textAlign: 'center', fontSize: '0.6rem', color: '#f97316', fontFamily: 'monospace' }}>Pesos 100MB</div>
              <div style={{ flex: 3, background: 'rgba(249,115,22,0.2)', border: '1px solid rgba(249,115,22,0.4)', borderRadius: 3, padding: '0.2rem 0', textAlign: 'center', fontSize: '0.6rem', color: '#f97316', fontFamily: 'monospace' }}>Activacoes 500MB</div>
              <div style={{ flex: 0.5, background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 3, padding: '0.2rem 0', textAlign: 'center', fontSize: '0.6rem', color: '#f97316', fontFamily: 'monospace' }}>Grads</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>= 700MB</div>
            </div>
            <div style={{ fontSize: '0.62rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.3rem' }}>Inferencia apenas</div>
            <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
              <div style={{ width: 90, background: 'rgba(30,41,59,0.4)', border: '1px solid rgba(71,85,105,0.3)', borderRadius: 3, padding: '0.2rem 0', textAlign: 'center', fontSize: '0.6rem', color: '#f97316', fontFamily: 'monospace' }}>Pesos 100MB</div>
              <div style={{ width: 22, background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 3, padding: '0.2rem 0', textAlign: 'center', fontSize: '0.55rem', color: '#f97316', fontFamily: 'monospace' }}>~50</div>
              <div style={{ fontSize: '0.65rem', color: '#64748b', fontFamily: 'monospace' }}>layer atual ~50MB</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>= 150MB ✓</div>
            </div>
          </div>

          {/* Row 3: Solutions */}
          <div>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.4rem' }}>SOLUCOES</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.5rem' }}>
              {[
                {label:'Ultimas camadas', desc:'feature extractor\ncongelado', c:'#f97316'},
                {label:'Grad. Checkpoint', desc:'recomputa activacoes\nno backward', c:'#f97316'},
                {label:'Micro-batch 1-4', desc:'activacoes minimas\nem memoria', c:'#f97316'},
                {label:'LoRA Adapters', desc:'dW = BA, rank 4-64\n100-1000x menos params', c:'#f97316'},
              ].map(({label, desc, c}) => (
                <div key={label} style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.25)', borderRadius: 7, padding: '0.5rem 0.6rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: c, fontFamily: 'monospace', marginBottom: '0.25rem' }}>{label}</div>
                  {desc.split('\n').map(l => <div key={l} style={{ fontSize: '0.6rem', color: '#94a3b8', fontFamily: 'monospace', lineHeight: 1.4 }}>{l}</div>)}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={S.highlight}>
          <strong>Gradient Checkpointing:</strong> durante o forward pass, descarta activações intermédias; durante o backward pass, recomputa-as à medida que são necessárias. Reduz memória de activações de O(L) para O(√L) — ResNet-50 de 500MB para ~70MB, ao custo de 30–40% mais tempo de treino.
        </div>
        <div style={S.note}>
          Caso real: linha de produção industrial deploya modelo de detecção de defeitos com 98% de accuracy. Após 6 meses, novo produto varia → accuracy cai para 72%. Com on-device fine-tuning: 200 imagens anotadas localmente + 2 horas de treino → modelo actualizado sem dados saírem da fábrica.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Catastrophic Forgetting</h2>
        <p style={S.p}>
          Catastrophic forgetting (McCloskey e Cohen, 1989): treino sequencial em tasks novas sobrescreve pesos críticos para tasks antigas — redes neuronais têm pesos partilhados entre todas as tasks sem mecanismo de protecção. Ao contrário do cérebro humano, não existe separação anatómica entre memórias de diferentes domínios.
        </p>
        <p style={S.p}>
          O dilema estabilidade-plasticidade: alta plasticidade permite aprender novas tasks mas esquece as antigas; alta estabilidade mantém as antigas mas bloqueia aprendizagem nova. Em biologia: o hipocampo aprende rapidamente novos episódios; durante o sono, selecciona memórias relevantes e consolida-as gradualmente no neocórtex (Complementary Learning Systems). Em redes artificiais, requer mecanismos explícitos.
        </p>
        <div style={S.diagram}>
          {/* Row 1: Forgetting sequence */}
          <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.5rem' }}>CATASTROPHIC FORGETTING — SEQUÊNCIA DE TREINO</div>
          <div style={{ display: 'flex', alignItems: 'stretch', gap: '0.25rem', marginBottom: '0.8rem' }}>
            {[
              { title: 'Task A — treino', sub: 'gatos / cães', acc: '95% accuracy ✓', ok: true },
              { title: 'Fine-tune Task B', sub: 'carros / camiões', acc: '93% accuracy ✓', ok: true },
              { title: 'Testar Task A', sub: 'gatos / cães (antes)', acc: '41% — FORGETTING!', ok: false },
            ].map(({ title, sub, acc, ok }, i) => (
              <React.Fragment key={title}>
                <div style={{ flex: 1, background: ok ? 'rgba(249,115,22,0.08)' : 'rgba(30,41,59,0.5)', border: ok ? '1px solid rgba(249,115,22,0.3)' : '1px solid rgba(71,85,105,0.35)', borderRadius: 8, padding: '0.55rem 0.6rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.2rem' }}>{title}</div>
                  <div style={{ fontSize: '0.6rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.2rem' }}>{sub}</div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: ok ? '#f97316' : '#f97316', fontFamily: 'monospace' }}>{acc}</div>
                </div>
                {i < 2 && <div style={{ display: 'flex', alignItems: 'center', color: '#475569', fontSize: '1rem', padding: '0 0.1rem' }}>→</div>}
              </React.Fragment>
            ))}
          </div>

          {/* Row 2: 3 panels */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.6rem' }}>
            {/* Panel A: Stability-Plasticity scatter */}
            <div style={{ background: 'rgba(249,115,22,0.05)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.6rem' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.4rem', textAlign: 'center' }}>ESTABILIDADE vs PLASTICIDADE</div>
              <svg width="100%" viewBox="0 0 180 130" style={{ display: 'block' }}>
                <line x1="20" y1="110" x2="20" y2="15" stroke="#475569" strokeWidth="1" />
                <line x1="20" y1="110" x2="175" y2="110" stroke="#475569" strokeWidth="1" />
                <text x="98" y="124" textAnchor="middle" fill="#475569" fontSize="8">estabilidade →</text>
                <text x="10" y="65" textAnchor="middle" fill="#475569" fontSize="8" transform="rotate(-90,10,65)">plasticidade</text>
                <circle cx="155" cy="100" r="6" fill="#f97316" opacity="0.85" />
                <text x="138" y="96" fill="#f97316" fontSize="7.5" textAnchor="end">fine-tune</text>
                <circle cx="35" cy="30" r="6" fill="#f59e0b" opacity="0.85" />
                <text x="43" y="28" fill="#f59e0b" fontSize="7.5">frozen</text>
                <circle cx="130" cy="35" r="6" fill="#f97316" opacity="0.85" />
                <text x="132" y="30" fill="#f97316" fontSize="7.5">ideal</text>
                <circle cx="75" cy="68" r="6" fill="#fb923c" opacity="0.85" />
                <text x="82" y="66" fill="#fb923c" fontSize="7.5">EWC/replay</text>
              </svg>
            </div>

            {/* Panel B: CLS */}
            <div style={{ background: 'rgba(249,115,22,0.05)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.6rem' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.5rem', textAlign: 'center' }}>COMPLEMENTARY LEARNING SYSTEMS</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <div style={{ flex: 1, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 6, padding: '0.45rem 0.4rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#f59e0b', fontFamily: 'monospace', marginBottom: '0.25rem' }}>Hipocampo</div>
                  {['aprendizagem rápida','episódios novos','curto prazo'].map(l => (
                    <div key={l} style={{ fontSize: '0.58rem', color: '#94a3b8', fontFamily: 'monospace', lineHeight: 1.5 }}>{l}</div>
                  ))}
                </div>
                <div style={{ textAlign: 'center', flexShrink: 0 }}>
                  <div style={{ fontSize: '0.85rem', color: '#475569' }}>→</div>
                  <div style={{ fontSize: '0.55rem', color: '#64748b', fontFamily: 'monospace' }}>sono</div>
                </div>
                <div style={{ flex: 1, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 6, padding: '0.45rem 0.4rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.25rem' }}>Neocórtex</div>
                  {['consolidação lenta','longo prazo','generalização'].map(l => (
                    <div key={l} style={{ fontSize: '0.58rem', color: '#94a3b8', fontFamily: 'monospace', lineHeight: 1.5 }}>{l}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Panel C: Weight grid */}
            <div style={{ background: 'rgba(249,115,22,0.05)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.6rem' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.4rem', textAlign: 'center' }}>PESOS — ANTES / DEPOIS</div>
              <svg width="100%" viewBox="0 0 180 130" style={{ display: 'block' }}>
                <text x="90" y="12" textAnchor="middle" fill="#94a3b8" fontSize="7.5">Task A weights sobrescritos por Task B</text>
                {Array.from({ length: 6 }).map((_, row) =>
                  Array.from({ length: 9 }).map((_, col) => {
                    const over = (row * 9 + col) % 3 === 0;
                    return (
                      <rect key={row + '-' + col} x={10 + col * 18} y={20 + row * 15} width="15" height="13" rx="2" fill={over ? 'rgba(148,163,184,0.35)' : 'rgba(249,115,22,0.35)'} />
                    );
                  })
                )}
                <rect x="10" y="116" width="11" height="11" rx="2" fill="rgba(249,115,22,0.35)" />
                <text x="24" y="125" fill="#94a3b8" fontSize="7">preservado</text>
                <rect x="95" y="116" width="11" height="11" rx="2" fill="rgba(148,163,184,0.35)" />
                <text x="109" y="125" fill="#94a3b8" fontSize="7">sobrescrito</text>
              </svg>
            </div>
          </div>
        </div>
        <div style={S.highlight}>
          <strong>Catastrophic forgetting</strong> é o principal obstáculo ao Continual Learning em produção: um modelo de visão industrial fine-tuned num novo produto vê a accuracy no produto anterior cair de 95% para 40% em apenas 3 epochs de treino, mesmo com learning rate baixa (1e-5).
        </div>
        <div style={S.note}>
          Em redes artificiais não existe equivalente biológico do sono para consolidação selectiva. Requer mecanismos explícitos: regularização dos pesos importantes (EWC), replay de exemplos passados, ou arquitecturas modulares com capacidade de expansão. Cada abordagem tem trade-offs distintos em memória, computação e grau de forgetting evitado.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. EWC e Regularização de Pesos</h2>
        <p style={S.p}>
          EWC — Elastic Weight Consolidation (Kirkpatrick et al., DeepMind, 2017) — protege pesos importantes via penalização quadrática. A Fisher Information Matrix F mede a importância de cada peso: F_ii = E[(∂ log p(y|x,θ) / ∂θ_i)²] — expectativa do quadrado do gradiente da log-likelihood. Pesos com F_ii alto são críticos para a performance na Task A e devem ser protegidos.
        </p>
        <p style={S.p}>
          Loss total ao treinar Task B: L(θ) = L_B(θ) + λ/2 × Σ_i F_ii × (θ_i − θ_A*)². EWC-online (2018) actualiza F cumulativamente sem armazenar todas as matrizes anteriores — escalável para muitas tasks. SI (Synaptic Intelligence) estima importância online durante treino, sem necessidade de uma passagem extra pelos dados. Progressive Neural Networks congela uma coluna por task e adiciona colunas laterais — zero forgetting mas crescimento linear em parâmetros.
        </p>
        <div style={S.diagram}>
          <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.7rem' }}>EWC — ELASTIC WEIGHT CONSOLIDATION</div>

          {/* Row 1: 3 panels */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.6rem', marginBottom: '0.65rem' }}>
            {/* Panel A: Parameter space */}
            <div style={{ background: 'rgba(249,115,22,0.05)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.6rem' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.4rem', textAlign: 'center' }}>ESPAÇO DE PARÂMETROS</div>
              <svg width="100%" viewBox="0 0 200 150" style={{ display: 'block' }}>
                <ellipse cx="85" cy="90" rx="75" ry="50" fill="none" stroke="#f9731630" strokeWidth="1" strokeDasharray="4 2" />
                <ellipse cx="85" cy="90" rx="48" ry="32" fill="none" stroke="#f9731650" strokeWidth="1.5" strokeDasharray="4 2" />
                <circle cx="85" cy="90" r="4" fill="#f97316" />
                <text x="85" y="82" textAnchor="middle" fill="#f97316" fontSize="8">W_A*</text>
                <ellipse cx="140" cy="58" rx="52" ry="38" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />
                <ellipse cx="140" cy="58" rx="30" ry="22" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6" />
                <circle cx="140" cy="58" r="4" fill="#f97316" />
                <text x="148" y="56" fill="#f97316" fontSize="8">W_B*</text>
                <circle cx="108" cy="76" r="5" fill="#f59e0b" />
                <text x="108" y="68" textAnchor="middle" fill="#f59e0b" fontSize="8">EWC</text>
                <text x="40" y="138" fill="#f97316" fontSize="7">Task A</text>
                <text x="82" y="138" fill="#f97316" fontSize="7">Task B</text>
                <text x="122" y="138" fill="#f59e0b" fontSize="7">compromise</text>
              </svg>
            </div>

            {/* Panel B: Fisher bars */}
            <div style={{ background: 'rgba(249,115,22,0.05)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.6rem' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.5rem', textAlign: 'center' }}>FISHER INFORMATION (importância)</div>
              {[
                { label: 'θ₁', F: 0.95, lock: true },
                { label: 'θ₂', F: 0.72, lock: true },
                { label: 'θ₃', F: 0.18, lock: false },
                { label: 'θ₄', F: 0.85, lock: true },
                { label: 'θ₅', F: 0.30, lock: false },
                { label: 'θ₆', F: 0.60, lock: false },
              ].map(({ label, F, lock }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.28rem' }}>
                  <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontFamily: 'monospace', width: 16, flexShrink: 0 }}>{label}</div>
                  <div style={{ flex: 1, background: 'rgba(30,41,59,0.5)', borderRadius: 3, height: 12, overflow: 'hidden' }}>
                    <div style={{ width: `${F * 100}%`, height: '100%', background: '#f97316', opacity: 0.75, borderRadius: 3 }} />
                  </div>
                  <div style={{ fontSize: '0.6rem', color: '#f97316', fontFamily: 'monospace', width: 30, textAlign: 'right' }}>{F.toFixed(2)}{lock ? ' 🔒' : ''}</div>
                </div>
              ))}
              <div style={{ fontSize: '0.58rem', color: '#64748b', fontFamily: 'monospace', marginTop: '0.4rem', textAlign: 'center' }}>alto F → peso importante → penalização forte</div>
            </div>

            {/* Panel C: Results */}
            <div style={{ background: 'rgba(249,115,22,0.05)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.6rem' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.5rem', textAlign: 'center' }}>RESULTADOS</div>
              {[
                { label: 'Task A sem EWC', acc: 41 },
                { label: 'Task A com EWC', acc: 89 },
                { label: 'Task B sem EWC', acc: 93 },
                { label: 'Task B com EWC', acc: 91 },
              ].map(({ label, acc }) => (
                <div key={label} style={{ marginBottom: '0.4rem' }}>
                  <div style={{ fontSize: '0.6rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.15rem' }}>{label}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <div style={{ flex: 1, background: 'rgba(30,41,59,0.5)', borderRadius: 3, height: 13, overflow: 'hidden' }}>
                      <div style={{ width: `${acc}%`, height: '100%', background: '#f97316', opacity: 0.75, borderRadius: 3 }} />
                    </div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', width: 30, textAlign: 'right' }}>{acc}%</div>
                  </div>
                </div>
              ))}
              <div style={{ fontSize: '0.58rem', color: '#64748b', fontFamily: 'monospace', marginTop: '0.25rem', textAlign: 'center' }}>custo em Task B: apenas −2% de accuracy</div>
            </div>
          </div>

          {/* Row 2: Progressive Neural Networks */}
          <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.55rem 0.7rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.45rem' }}>PROGRESSIVE NEURAL NETWORKS</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              {[
                { label: 'Task A', sub: '(frozen)', active: false },
                { label: 'Task B', sub: '(frozen)', active: false },
                { label: 'Task C', sub: '(active)', active: true },
              ].map(({ label, sub, active }, i) => (
                <React.Fragment key={label}>
                  <div style={{ background: active ? 'rgba(249,115,22,0.12)' : 'rgba(30,41,59,0.5)', border: active ? '1px solid #f97316' : '1px solid rgba(71,85,105,0.35)', borderRadius: 6, padding: '0.35rem 0.7rem', textAlign: 'center', minWidth: 72 }}>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: active ? '#f97316' : '#475569', fontFamily: 'monospace' }}>{label}</div>
                    <div style={{ fontSize: '0.58rem', color: active ? '#f97316' : '#475569', fontFamily: 'monospace' }}>{sub}</div>
                  </div>
                  {i < 2 && <div style={{ color: '#475569', fontSize: '0.85rem', flexShrink: 0 }}>--→</div>}
                </React.Fragment>
              ))}
              <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontFamily: 'monospace', marginLeft: '0.75rem' }}>zero forgetting + crescimento linear em parâmetros</div>
            </div>
          </div>
        </div>
        <div style={S.highlight}>
          <strong>EWC:</strong> a penalização λ/2 × F_ii × (θ_i − θ_A*)² age como uma mola — pesos com F alto ficam ancorados perto de θ_A*, enquanto pesos com F baixo são livres de mudar para optimizar Task B. λ controla o trade-off: λ grande = mais estabilidade, menos plasticidade. <strong>EWC-online</strong> acumula F multiplicativamente: F_t = γ × F_(t-1) + F_new, eliminando o armazenamento de matrizes por task.
        </div>
        <div style={S.note}>
          SI (Synaptic Intelligence): estima a importância de cada parâmetro online, integrando a contribuição do gradiente ao longo de todo o treino da task — Ω_k = Σ_t (∂L/∂θ_k)² × |Δθ_k|. Não requer passagem extra pelos dados. EWC e SI têm performance similar mas SI é computacionalmente mais eficiente para tasks longas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Replay Buffers e Memória Episódica</h2>
        <p style={S.p}>
          Replay buffers mantêm uma memória de episódios passados misturada com dados actuais. Experience Replay usa um buffer fixo de 200–2000 exemplares, construindo mini-batches mistos durante o treino da task nova. iCaRL (2017) selecciona exemplares mais próximos da média da classe no espaço de features (herding) — representação mais fiel da distribuição.
        </p>
        <p style={S.p}>
          Generative Replay (2017): VAE ou GAN treinado na task anterior gera dados sintéticos — sem buffer real (vantagem de privacidade, importante em saúde). Dark Experience Replay (DER, 2020): armazena logits do modelo no momento de storage, usa-os como soft targets via knowledge distillation — mais informativo que labels one-hot porque preserva a distribuição de confiança original. PackNet: pruning iterativo após cada task usa espaço libertado para task seguinte — sem buffer, sem crescimento, zero forgetting.
        </p>
        <div style={S.diagram}>
          <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.7rem' }}>EPISODIC REPLAY — iCaRL HERDING</div>

          {/* Row 1: iCaRL pipeline + buffer size */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr 1fr', gap: '0.35rem', alignItems: 'center', marginBottom: '0.65rem' }}>
            <div style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.55rem 0.6rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.35rem' }}>Buffer (N exemplares)</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.3rem', marginBottom: '0.3rem' }}>
                {['C1','C2','C3','C4'].map(c => (
                  <div key={c} style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(249,115,22,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.55rem', color: '#fff', fontFamily: 'monospace', fontWeight: 700 }}>{c}</div>
                ))}
              </div>
              <div style={{ fontSize: '0.58rem', color: '#475569', fontFamily: 'monospace' }}>média de classe → herding</div>
            </div>
            <div style={{ fontSize: '1rem', color: '#475569', textAlign: 'center', padding: '0 0.1rem' }}>+</div>
            <div style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 8, padding: '0.55rem 0.6rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.35rem' }}>Dados Novos (Task B)</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '0.3rem' }}>
                {[0,1,2,3,4].map(i => (
                  <div key={i} style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(249,115,22,0.3)', border: '1px solid rgba(249,115,22,0.5)' }} />
                ))}
              </div>
              <div style={{ fontSize: '0.58rem', color: '#475569', fontFamily: 'monospace' }}>50% batch = novo</div>
            </div>
            <div style={{ fontSize: '1rem', color: '#475569', textAlign: 'center', padding: '0 0.1rem' }}>→</div>
            <div style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.55rem 0.6rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.3rem' }}>Mini-batch Misto</div>
              <div style={{ fontSize: '0.62rem', color: '#94a3b8', fontFamily: 'monospace' }}>50% buffer</div>
              <div style={{ fontSize: '0.62rem', color: '#f97316', fontFamily: 'monospace' }}>50% novo</div>
              <div style={{ fontSize: '0.58rem', color: '#475569', fontFamily: 'monospace', marginTop: '0.15rem' }}>treino conjunto</div>
            </div>
            <div style={{ background: 'rgba(249,115,22,0.05)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.55rem 0.6rem' }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.4rem' }}>EFEITO DO TAMANHO DO BUFFER</div>
              {[
                { n: '0 exemplares', forget: 54 },
                { n: '5 exemplares', forget: 28 },
                { n: '20 exemplares', forget: 12 },
                { n: '100 exemplares', forget: 3 },
              ].map(({ n, forget }) => (
                <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.28rem' }}>
                  <div style={{ fontSize: '0.58rem', color: '#94a3b8', fontFamily: 'monospace', width: 78, flexShrink: 0 }}>{n}</div>
                  <div style={{ flex: 1, background: 'rgba(30,41,59,0.5)', borderRadius: 3, height: 11, overflow: 'hidden' }}>
                    <div style={{ width: `${forget * 1.8}%`, height: '100%', background: '#f97316', opacity: 0.75, borderRadius: 3 }} />
                  </div>
                  <div style={{ fontSize: '0.6rem', color: '#f97316', fontFamily: 'monospace', width: 28, textAlign: 'right' }}>{forget}%↓</div>
                </div>
              ))}
              <div style={{ fontSize: '0.55rem', color: '#64748b', fontFamily: 'monospace', textAlign: 'right', marginTop: '0.1rem' }}>forgetting</div>
            </div>
          </div>

          {/* Row 2: DER + PackNet */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
            {/* DER */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.6rem' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.45rem' }}>DARK EXPERIENCE REPLAY (DER, 2020)</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <div style={{ flex: 1, background: 'rgba(249,115,22,0.06)', border: '1px solid var(--card-border)', borderRadius: 6, padding: '0.4rem 0.5rem' }}>
                  <div style={{ fontSize: '0.62rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.15rem' }}>Storage: (x, logits_t)</div>
                  <div style={{ fontSize: '0.6rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.15rem' }}>logits = [0.7, 0.2, 0.05, 0.05]</div>
                  <div style={{ fontSize: '0.58rem', color: '#475569', fontFamily: 'monospace' }}>preserva confiança original do modelo</div>
                </div>
                <div style={{ color: '#475569', fontSize: '1rem', flexShrink: 0 }}>→</div>
                <div style={{ flex: 1, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 6, padding: '0.4rem 0.5rem' }}>
                  <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.15rem' }}>Replay: KD loss</div>
                  <div style={{ fontSize: '0.6rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.15rem' }}>L_DER = MSE(f(x), logits_t)</div>
                  <div style={{ fontSize: '0.58rem', color: '#475569', fontFamily: 'monospace' }}>soft targets mais informativos</div>
                </div>
              </div>
            </div>

            {/* PackNet */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.6rem' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.45rem' }}>PackNet — Pruning Iterativo</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.22rem' }}>
                {[
                  { text: 'Task A: 100% capacidade', highlight: false },
                  { text: 'Task A: prune → 60% usado', highlight: true },
                  { text: 'Task B: 40% livre → fine-tune', highlight: false },
                  { text: 'Task B: prune → usa 25% extra', highlight: true },
                ].map(({ text, highlight }) => (
                  <div key={text} style={{ fontSize: '0.62rem', color: highlight ? '#f97316' : '#94a3b8', fontFamily: 'monospace' }}>{text}</div>
                ))}
                <div style={{ fontSize: '0.58rem', color: '#64748b', fontFamily: 'monospace', marginTop: '0.2rem' }}>zero forgetting + zero buffer + sem crescimento</div>
              </div>
            </div>
          </div>
        </div>
        <div style={S.highlight}>
          <strong>iCaRL Herding:</strong> selecciona os K exemplares cuja média no espaço de features (após encoder) é mais próxima da média de toda a classe. Exemplares representativos da distribuição — não apenas amostras aleatórias — reduzem o forgetting em 30–40% com o mesmo tamanho de buffer. Actualiza o buffer após cada task.
        </div>
        <div style={S.note}>
          Generative Replay resolve o problema de privacidade: em contextos médicos, não é possível armazenar imagens de doentes num buffer. Um VAE treinado na Task A gera imagens sintéticas plausíveis durante o treino da Task B — nenhum dado real é retido. Mas a qualidade do gerador limita a fidelidade do replay, especialmente para dados de alta dimensão.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. LoRA e Continual Learning em Produção</h2>
        <p style={S.p}>
          LoRA (Low-Rank Adaptation) factoriza a actualização de pesos como ΔW = BA onde B é d×r e A é r×d (r muito menor que d, tipicamente 4–64). Para um LLM de 7B parâmetros, LoRA rank=16 tem apenas 4M parâmetros treináveis — viável em edge servers com 8GB de RAM. Os pesos originais W permanecem congelados; apenas A e B são actualizados.
        </p>
        <p style={S.p}>
          Em produção, é necessário detectar quando o modelo precisa de actualização: ADWIN (Adaptive Windowing) detecta drift estatístico em métricas de performance comparando janelas temporais; PSI (Population Stability Index) compara distribuições de features entre produção e referência. Quando drift é detectado: recolha de novas amostras (selective logging de amostras de baixa confiança), fine-tuning com LoRA ou EWC, validação em held-out set local, rollback automático se accuracy cai.
        </p>
        <div style={S.diagram}>
          {/* Row 1: LoRA */}
          <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.6rem' }}>LoRA — LOW-RANK ADAPTATION</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto 1fr', gap: '0.5rem', alignItems: 'center', marginBottom: '0.65rem' }}>
            <div style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.7rem 1.1rem', textAlign: 'center', minWidth: 72 }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace' }}>W</div>
              <div style={{ fontSize: '0.6rem', color: '#475569', fontFamily: 'monospace' }}>d×d</div>
              <div style={{ fontSize: '0.58rem', color: '#475569', fontFamily: 'monospace' }}>congelado</div>
            </div>
            <div style={{ fontSize: '1.1rem', color: '#475569', textAlign: 'center' }}>+</div>
            <div style={{ background: 'rgba(249,115,22,0.1)', border: '1.5px solid rgba(249,115,22,0.35)', borderRadius: 8, padding: '0.7rem 1.1rem', textAlign: 'center', minWidth: 72 }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>ΔW</div>
              <div style={{ fontSize: '0.6rem', color: '#f97316', fontFamily: 'monospace' }}>= B × A</div>
              <div style={{ fontSize: '0.58rem', color: '#94a3b8', fontFamily: 'monospace' }}>d×r × r×d</div>
              <div style={{ fontSize: '0.58rem', color: '#f97316', fontFamily: 'monospace' }}>treináveis</div>
            </div>
            <div style={{ background: 'rgba(249,115,22,0.05)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.6rem 0.8rem' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.35rem' }}>PARÂMETROS TREINÁVEIS</div>
              {[
                'Fine-tune completo: d² = 4M (d=2048)',
                'LoRA rank 16: 2×d×r = 65k',
                'LoRA rank 4: 2×d×r = 16k (250× menos)',
                'LLM 7B, rank 16: 4M treináveis / 7000M total',
              ].map((t, i) => (
                <div key={t} style={{ fontSize: '0.62rem', color: i === 3 ? '#475569' : '#f97316', fontFamily: 'monospace', marginBottom: '0.15rem' }}>{t}</div>
              ))}
            </div>
          </div>

          {/* Row 2: Production pipeline */}
          <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.4rem' }}>PIPELINE EM PRODUÇÃO</div>
          <div style={{ display: 'flex', alignItems: 'stretch', gap: '0.2rem', marginBottom: '0.65rem' }}>
            {[
              { label: 'Data Stream', desc: 'inferência contínua', active: false },
              { label: 'ADWIN / PSI', desc: 'drift detector', active: true },
              { label: 'Selective Log', desc: 'baixa confiança', active: true },
              { label: 'LoRA Fine-tune', desc: 'só A,B actualizados', active: true },
              { label: 'Validação', desc: 'held-out set', active: true },
              { label: 'Deploy / Rollback', desc: 'auto-rollback', active: true },
            ].map(({ label, desc, active }, i) => (
              <React.Fragment key={label}>
                <div style={{ flex: 1, background: active ? 'rgba(249,115,22,0.1)' : 'rgba(30,41,59,0.5)', border: active ? '1px solid rgba(249,115,22,0.3)' : '1px solid rgba(71,85,105,0.35)', borderRadius: 7, padding: '0.4rem 0.3rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.62rem', fontWeight: 700, color: active ? '#f97316' : '#94a3b8', fontFamily: 'monospace', marginBottom: '0.15rem' }}>{label}</div>
                  <div style={{ fontSize: '0.57rem', color: '#64748b', fontFamily: 'monospace' }}>{desc}</div>
                </div>
                {i < 5 && <div style={{ display: 'flex', alignItems: 'center', color: '#475569', fontSize: '0.8rem', flexShrink: 0 }}>→</div>}
              </React.Fragment>
            ))}
          </div>

          {/* Row 3: Accuracy chart */}
          <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.55rem 0.7rem' }}>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.4rem' }}>ACCURACY AO LONGO DO TEMPO</div>
            <svg width="100%" viewBox="0 0 740 50" style={{ display: 'block' }}>
              <line x1="0" y1="35" x2="740" y2="35" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
              <polyline points="0,22 90,18 150,30 200,22 260,25 320,19 380,33 420,21 480,23 540,18 600,30 640,20 700,22 740,18"
                fill="none" stroke="#f97316" strokeWidth="2" />
              <polyline points="0,22 90,18 150,30 200,36 260,42 320,45 380,48 420,49 480,49 540,49 600,49 640,49 700,49 740,49"
                fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 3" />
              <text x="742" y="38" fill="#f59e0b" fontSize="7">90%</text>
              <text x="742" y="21" fill="#f97316" fontSize="7">c/ adapt.</text>
              <text x="742" y="49" fill="#94a3b8" fontSize="7">sem adapt.</text>
            </svg>
          </div>
        </div>
        <div style={S.highlight}>
          <strong>LoRA em produção:</strong> após fine-tuning, os adapters B e A podem ser fundidos no modelo base: W_new = W + B×A — elimina overhead de inferência (latência idêntica ao modelo original). Múltiplos adapters para diferentes tasks podem ser mantidos separados e comutados dinamicamente consoante o contexto, sem retreino.
        </div>
        <div style={S.note}>
          Apple Synaptic Intelligence: detecta oportunidades de personalização e activa fine-tuning durante o carregamento nocturno com privacidade diferencial. Sistema completo: drift detector (PSI &gt; 0.2 dispara alerta) + selective logging (só amostras com softmax max &lt; 0.7) + fine-tuning periódico com LoRA rank 8 + rollback automático se accuracy no validation set cai mais de 3%.
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>On-device Fine-tuning — Motivação e Desafios</strong> — adaptar um modelo pré-treinado a dados locais no dispositivo melhora a personalização sem expor dados; o desafio é o custo de memória e computação do backpropagation em hardware com 1–4GB RAM.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Catastrophic Forgetting</strong> — quando um modelo é fine-tuned em novos dados, esquece o conhecimento anterior — fenómeno de catastrophic forgetting; é o principal obstáculo ao continual learning e motiva técnicas como EWC, replay e arquitecturas modulares.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>EWC e Regularização de Pesos</strong> — Elastic Weight Consolidation penaliza mudanças nos pesos que foram importantes para tarefas anteriores (estimadas pela diagonal da matriz de Fisher); permite aprender novas tarefas preservando performance nas antigas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Replay Buffers e Memória Episódica</strong> — Experience Replay armazena amostras de tarefas antigas e as re-treina juntamente com os novos dados; GEM e A-GEM projectam gradientes para não interferir com tarefas anteriores usando memória episódica compacta.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>LoRA e Continual Learning em Produção</strong> — LoRA (Low-Rank Adaptation) adiciona matrizes de baixo rank treináveis às camadas do transformer, reduzindo parâmetros treináveis 10000× — viabiliza fine-tuning de LLMs em dispositivos com &lt;4GB RAM em minutos.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
