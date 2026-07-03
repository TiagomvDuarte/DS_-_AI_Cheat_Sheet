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

const m = modules[6];

export default function EDG7() {
  return (
    <div style={S.page}>
      <Link to="/edge-ai" style={S.back}>← Edge AI &amp; TinyML</Link>

      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* ── Secção 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. FedAvg — Algoritmo e Convergência</h2>
        <p style={S.p}>
          FedAvg (McMahan et al., Google, 2017) é o algoritmo fundacional de Federated Learning: o servidor selecciona C×N clientes aleatoriamente, transmite o modelo global, cada cliente treina E epochs com SGD local nos seus dados privados, e o servidor agrega com média ponderada pelo tamanho do dataset local.
        </p>
        <p style={S.p}>
          O problema central é que dados reais são severamente non-IID — cada cliente tem uma distribuição diferente. O <em>client drift</em> leva cada cliente ao seu óptimo local, divergindo do global. FedProx (2020) corrige adicionando um termo proximal L_k(w) + μ/2 × ‖w − w_t‖² que limita o afastamento. SCAFFOLD (2020) usa variáveis de controlo que estimam e corrigem o drift, convergindo mesmo com heterogeneidade severa.
        </p>
        <div style={S.diagram}>
          {/* Row 1: Server + clients grid + convergence chart */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', marginBottom: '0.75rem' }}>
            {/* Server + clients */}
            <div>
              {/* Server */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <div style={{ background: 'rgba(249,115,22,0.12)', border: '1.5px solid #f97316', borderRadius: 8, padding: '0.4rem 1.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>SERVIDOR</div>
                  <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontFamily: 'monospace' }}>modelo global W_t</div>
                </div>
              </div>
              {/* Clients 4+4 grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.4rem' }}>
                {[0,1,2,3,4,5,6,7].map(i => {
                  const dotColors = ['#f97316','#f59e0b','#fb923c','#fbbf24','#ea580c','#f97316','#f59e0b','#fb923c'];
                  const dc = dotColors[i];
                  return (
                    <div key={i} style={{ background: 'rgba(249,115,22,0.08)', border: `1px solid #f97316`, borderRadius: '50%', aspectRatio: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0.4rem' }}>
                      <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>C{i+1}</div>
                      <div style={{ fontSize: '0.55rem', color: '#94a3b8', fontFamily: 'monospace' }}>E epochs</div>
                      <div style={{ fontSize: '0.52rem', color: '#64748b', fontFamily: 'monospace' }}>n={200 + i*150}</div>
                      <div style={{ display: 'flex', gap: 3, marginTop: 3 }}>
                        {[0,1,2].map(d => <div key={d} style={{ width: 5, height: 5, borderRadius: '50%', background: dc, opacity: 0.8 }} />)}
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Legend */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <div style={{ width: 16, height: 2, background: '#f97316', opacity: 0.6, borderTop: '2px dashed #f97316' }} />
                  <span style={{ fontSize: '0.65rem', color: '#94a3b8', fontFamily: 'monospace' }}>broadcast W_t</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <div style={{ width: 16, height: 2, background: '#f59e0b', opacity: 0.6 }} />
                  <span style={{ fontSize: '0.65rem', color: '#94a3b8', fontFamily: 'monospace' }}>delta W upload</span>
                </div>
              </div>
            </div>
            {/* Convergence chart */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.65rem', minWidth: 180 }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.5rem', textAlign: 'center' }}>CONVERGENCIA</div>
              <svg viewBox="0 0 160 110" style={{ width: '100%', height: 'auto' }}>
                <line x1="20" y1="100" x2="155" y2="100" stroke="var(--card-border)" strokeWidth="1" />
                <line x1="20" y1="10" x2="20" y2="100" stroke="var(--card-border)" strokeWidth="1" />
                <text x="155" y="108" textAnchor="middle" fill="#475569" fontSize="7">rounds</text>
                <polyline points="20,95 40,72 60,52 80,40 100,36 120,34 140,33" fill="none" stroke="#f97316" strokeWidth="2" />
                <text x="142" y="32" fill="#f97316" fontSize="7">IID</text>
                <polyline points="20,95 40,78 60,68 75,72 90,60 105,63 120,54 140,50" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,3" />
                <text x="142" y="50" fill="#94a3b8" fontSize="7">non-IID</text>
              </svg>
            </div>
          </div>
        </div>
        <div style={S.highlight}>
          <strong>FedAvg:</strong> W_global = Σ_k (n_k / N) × W_k — média ponderada pelo número de amostras locais. Com E=1 e dados IID é equivalente a mini-batch SGD distribuído. Com dados non-IID e E grande, o client drift pode impedir convergência. <strong>FedProx</strong> adiciona μ/2 × ‖w − w_t‖² à loss local. <strong>SCAFFOLD</strong> usa variáveis de controlo c_k e c para corrigir o viés por cliente: gradiente efectivo = g_k − c_k + c.
        </div>
        <div style={S.note}>
          Comunicação é o bottleneck: 1000 clientes com modelo de 100MB = 100GB de uplink por round. Com redes móveis de 10 Mbps por cliente, cada round demora 80 segundos só de upload — e são necessários centenas de rounds para convergir.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Privacidade Diferencial e Segurança</h2>
        <p style={S.p}>
          FL protege dados brutos mas gradientes podem vazar informação — gradient inversion (Zhu et al., 2019) reconstrói imagens de treino a partir de gradientes com alta fidelidade em poucos minutos. DP-SGD (Abadi et al., 2016) oferece garantias matemáticas formais.
        </p>
        <p style={S.p}>
          Ataques ao sistema: <em>model poisoning</em> (clientes maliciosos enviam updates manipulados para degradar a accuracy global); <em>backdoor attacks</em> (implantam um trigger que causa misclassification num subconjunto de inputs). Defesas: Krum selecciona os updates mais próximos da mediana geométrica, rejeitando outliers; Secure Aggregation (Bonawitz et al., 2017) usa criptografia para o servidor agregar sem ver updates individuais.
        </p>
        <div style={S.diagram}>
          <div>
            {/* DP-SGD pipeline */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.6rem' }}>DP-SGD</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.6rem' }}>
                {[
                  { label: 'Gradiente', sub: 'raw ∇L(w)', c: 'var(--card-border)', tc: '#e2e8f0' },
                  { label: 'Clip L2', sub: '‖g‖ ≤ C', c: '#f97316', tc: '#f97316' },
                  { label: '+ Ruido Gaussiano', sub: 'N(0, σ²C²)', c: '#f97316', tc: '#f97316' },
                  { label: 'Grad. Ruidoso', sub: '(ε, δ)-DP', c: 'var(--card-border)', tc: '#e2e8f0' },
                ].map((s, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <div style={{ color: '#f59e0b', fontSize: '1rem', flexShrink: 0 }}>›</div>}
                    <div style={{ flex: 1, background: `rgba(249,115,22,${i===0||i===3?'0.04':'0.12'})`, border: `1px solid ${s.c}`, borderRadius: 6, padding: '0.4rem 0.5rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.68rem', fontWeight: 700, color: s.tc, fontFamily: 'monospace' }}>{s.label}</div>
                      <div style={{ fontSize: '0.62rem', color: '#94a3b8', fontFamily: 'monospace' }}>{s.sub}</div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
              {/* Privacy budget */}
              <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.35rem' }}>PRIVACY BUDGET ε</div>
              {[{label:'ε=0.1 (forte)',w:15},{label:'ε=1',w:50},{label:'ε=10 (fraco)',w:90}].map((b,i) => (
                <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <div style={{ width: 80, fontSize: '0.62rem', color: '#94a3b8', fontFamily: 'monospace', flexShrink: 0 }}>{b.label}</div>
                  <div style={{ flex: 1, background: 'rgba(249,115,22,0.08)', borderRadius: 3, height: 10, overflow: 'hidden' }}>
                    <div style={{ width: `${b.w}%`, height: '100%', background: '#f97316', opacity: 1 - i*0.25, borderRadius: 3 }} />
                  </div>
                </div>
              ))}
            </div>
            {/* Threat models */}
            <div style={{ marginBottom: '0.6rem' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.4rem' }}>MODELOS DE AMEACA</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.4rem', marginBottom: '0.5rem' }}>
                {['Servidor curioso|honest-but-curious','Envenenamento|model poisoning','Inversao grad.|reconstroi dados','Backdoor|trigger oculto'].map(s => {
                  const [label, desc] = s.split('|');
                  return (
                    <div key={label} style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.25)', borderRadius: 6, padding: '0.4rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>{label}</div>
                      <div style={{ fontSize: '0.6rem', color: '#94a3b8', fontFamily: 'monospace' }}>{desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Defences */}
            <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.4rem' }}>DEFESAS</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.4rem' }}>
              {['Krum — rejeita updates outliers','Secure Aggregation — criptografia homomórfica','DP-SGD — garantia matematica formal'].map(d => (
                <div key={d} style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: 6, padding: '0.4rem 0.6rem', fontSize: '0.65rem', color: '#f97316', fontFamily: 'monospace', textAlign: 'center' }}>{d}</div>
              ))}
            </div>
          </div>
        </div>
        <div style={S.highlight}>
          <strong>DP-SGD:</strong> garante (ε, δ)-DP — com probabilidade 1−δ, nenhum adversário distingue modelos treinados com ou sem qualquer exemplo individual. O budget ε é consumido de forma aditiva por round (composição adaptativa). <strong>Secure Aggregation</strong> usa máscaras criptográficas pareadas: o servidor recebe apenas a soma agregada, nunca os updates individuais.
        </div>
        <div style={S.note}>
          Gradient inversion (Zhu et al., 2019) demonstrou que imagens 224×224 podem ser reconstruídas de gradientes em menos de 1 minuto numa GPU, com qualidade visual suficiente para identificar pessoas. DP-SGD com ε &lt; 1 bloqueia estes ataques mas reduz accuracy em 2–5%.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Comunicação Eficiente e Selecção de Clientes</h2>
        <p style={S.p}>
          Sparsificação Top-K: envia apenas os K maiores gradientes em magnitude com os seus índices (K=1% → 100× compressão) com <em>error feedback</em> — o gradiente não enviado acumula localmente para o próximo round, evitando viés. Quantização de gradientes: FP32 → INT8 (4×) ou 1-bit SGD (32×).
        </p>
        <p style={S.p}>
          O problema dos <em>stragglers</em>: em FL síncrono, o round aguarda todos os clientes seleccionados — um dispositivo lento bloqueia todo o progresso. Solução: timeout e abandono dos lentos (usar os 80% mais rápidos) ou FedAsync (actualiza ao receber qualquer update). Selecção de clientes além de aleatória: Power-of-Choice (selecciona clientes com maior heterogeneidade) acelera convergência; disponibilidade temporal (Google Gboard: carregamento nocturno + WiFi) é o constraint real.
        </p>
        <div style={S.diagram}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {/* Compression bars */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.6rem' }}>COMPRESSAO DE COMUNICACAO (modelo 100MB)</div>
              {[
                { label: 'Baseline FP32', desc: '100 MB', w: 100 },
                { label: 'INT8 Quantizacao', desc: '25 MB (4x)', w: 25 },
                { label: 'Local SGD E=10', desc: '15 MB (amortizado)', w: 15 },
                { label: 'Top-K 1%', desc: '1 MB (100x)', w: 1 },
                { label: 'FedPAQ combo', desc: '250 KB (400x)', w: 0.5 },
              ].map((b, i) => (
                <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <div style={{ width: 110, fontSize: '0.62rem', color: '#94a3b8', fontFamily: 'monospace', flexShrink: 0, textAlign: 'right' }}>{b.label}</div>
                  <div style={{ flex: 1, background: 'rgba(249,115,22,0.08)', borderRadius: 3, height: 14, overflow: 'hidden' }}>
                    <div style={{ width: `${Math.max(b.w, 0.5)}%`, height: '100%', background: '#f97316', borderRadius: 3 }} />
                  </div>
                  <div style={{ fontSize: '0.62rem', color: '#f97316', fontFamily: 'monospace', flexShrink: 0, width: 90 }}>{b.desc}</div>
                </div>
              ))}
            </div>
            {/* Straggler */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.6rem' }}>PROBLEMA STRAGGLER</div>
              {[0,1,2,3,4,5,6,7,8].map(i => {
                const slow = i === 8;
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
                    <div style={{ width: 20, fontSize: '0.6rem', color: '#475569', fontFamily: 'monospace', flexShrink: 0 }}>C{i+1}</div>
                    <div style={{ width: slow ? '100%' : '40%', height: 12, background: slow ? 'rgba(249,115,22,0.5)' : 'rgba(249,115,22,0.25)', border: `1px solid ${slow ? '#f97316' : 'transparent'}`, borderRadius: 3 }} />
                    <div style={{ fontSize: '0.58rem', color: slow ? '#f97316' : '#64748b', fontFamily: 'monospace', flexShrink: 0 }}>{slow ? '5 min — bloqueia!' : '1 min'}</div>
                  </div>
                );
              })}
              <div style={{ fontSize: '0.62rem', color: '#f97316', fontFamily: 'monospace', marginTop: '0.4rem', borderTop: '1px dashed rgba(249,115,22,0.4)', paddingTop: '0.3rem' }}>timeout: descarta C9 apos 1 min</div>
            </div>
          </div>
        </div>
        <div style={S.highlight}>
          <strong>Power-of-Choice:</strong> em vez de seleccionar clientes aleatoriamente, selecciona os d candidatos com maior loss local estimada — força o modelo a focar nos clientes mais difíceis. Melhora convergência em cenários non-IID em 30–50% menos rounds. <strong>FedAsync</strong> elimina o problema do straggler: o servidor actualiza o modelo global ao receber qualquer update, com factor de staleness 1/(1 + delay_rounds).
        </div>
        <div style={S.note}>
          Google Gboard: o sistema só activa FL em dispositivos com bateria acima de 80%, ligados a carregador, em WiFi, e com ecrã desligado — reduz o pool de clientes elegíveis para &lt;5% em qualquer momento, mas garante que o treino não interfere com o uso normal.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Aplicações Reais de Federated Learning</h2>
        <p style={S.p}>
          Saúde: FeTS (Federated Tumor Segmentation) envolveu 71 instituições, 6000 casos, segmentação de tumores cerebrais em MRI — o modelo federado supera qualquer modelo single-institution apesar de nenhum dado sair dos hospitais. Google Gboard: mais de 500M utilizadores, next-word prediction e query suggestions treináveis sem enviar texto digitado.
        </p>
        <p style={S.p}>
          Apple usa FL com privacidade diferencial para QuickType, Siri e detecção de spam no Mail. Veículos autónomos: frotas da Waymo e Tesla com centenas de milhares de veículos — FL para percepção partilhada sem revelar dados de routing. Industrial IoT: fábricas concorrentes do mesmo sector treinam modelo de anomaly detection partilhado sem revelar eficiências de processo.
        </p>
        <div style={S.diagram}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {/* FeTS case */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.6rem' }}>CASO: FL EM SAUDE — FeTS</div>
              <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.6rem' }}>
                {[['Hospital A','5k pacientes'],['Hospital B','8k pacientes'],['Hospital C','12k pacientes']].map(([label,n]) => (
                  <div key={label} style={{ flex: 1, background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.35)', borderRadius: 7, padding: '0.4rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>{label}</div>
                    <div style={{ fontSize: '0.6rem', color: '#94a3b8', fontFamily: 'monospace' }}>{n}</div>
                    <div style={{ fontSize: '0.55rem', color: '#475569', fontFamily: 'monospace' }}>dados privados GDPR</div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center', color: '#f97316', fontSize: '0.8rem', marginBottom: '0.4rem' }}>↓ delta W (sem dados brutos)</div>
              <div style={{ background: 'rgba(249,115,22,0.12)', border: '1.5px solid #f97316', borderRadius: 7, padding: '0.4rem', textAlign: 'center', marginBottom: '0.6rem' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>FL — FedAvg</div>
                <div style={{ fontSize: '0.62rem', color: '#94a3b8', fontFamily: 'monospace' }}>25k amostras efectivas · GDPR compliant</div>
              </div>
              {[{label:'Melhor hospital único (12k)',acc:72,dim:true},{label:'FL federado (25k efectivos)',acc:89,dim:false}].map(r => (
                <div key={r.label} style={{ marginBottom: '0.35rem' }}>
                  <div style={{ fontSize: '0.62rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: 2 }}>{r.label}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <div style={{ flex: 1, background: 'rgba(249,115,22,0.08)', borderRadius: 3, height: 14, overflow: 'hidden' }}>
                      <div style={{ width: `${r.acc}%`, height: '100%', background: r.dim ? '#94a3b8' : '#f97316', borderRadius: 3, opacity: r.dim ? 0.5 : 0.85 }} />
                    </div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: r.dim ? '#94a3b8' : '#f97316', fontFamily: 'monospace', width: 32 }}>{r.acc}%</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Real applications */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.6rem' }}>APLICACOES REAIS</div>
              {[
                { org: 'Google Gboard', detail: '500M+ dispositivos · next-word prediction · texto nunca sai do dispositivo' },
                { org: 'Apple', detail: 'QuickType + Siri + spam detection com DP-SGD' },
                { org: 'Waymo / Tesla', detail: 'percepcao partilhada sem revelar dados de routing' },
                { org: 'Industrial IoT', detail: 'anomaly detection entre fabricantes concorrentes sem revelar eficiencias' },
              ].map(a => (
                <div key={a.org} style={{ borderLeft: '2px solid #f97316', paddingLeft: '0.6rem', marginBottom: '0.55rem' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>{a.org}</div>
                  <div style={{ fontSize: '0.63rem', color: '#64748b', fontFamily: 'monospace', lineHeight: 1.4 }}>{a.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={S.highlight}>
          <strong>FeTS Challenge (2022):</strong> maior estudo de FL em saúde — 71 instituições de 6 países, dados de MRI de glioblastoma e glioma de baixo grau. O modelo federado melhorou o Dice score em 10–15% comparado com o melhor modelo single-site, sem partilha de imagens de doentes entre instituições.
        </div>
        <div style={S.note}>
          Industrial IoT: empresas concorrentes no mesmo sector (ex: fabricantes de turbinas eólicas) beneficiam de um modelo de anomaly detection treinado com dados de toda a indústria, sem revelar os dados de operação que poderiam indicar ineficiências ou segredos industriais.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. FL Personalizado e Estado da Arte</h2>
        <p style={S.p}>
          FedAvg é sub-óptimo para dados non-IID — um único modelo global não serve todas as distribuições de clientes. Personalização resolve: <em>fine-tuning</em> pós-FL usa o modelo global como inicialização e adapta localmente com few-shot (funciona com mais de 100 amostras locais). <em>Per-layer personalisation</em>: camadas iniciais (features genéricas) globais; camadas finais (classificador) locais.
        </p>
        <p style={S.p}>
          pFedMe (2020) formula o problema como optimização bi-nível — modelo personalizado com modelo global como regularizador, com solução em forma fechada para redes convexas. MAML como base para FL: Per-FedAvg pré-treina o modelo global óptimo para fine-tuning rápido com 1–5 gradientes. Clustered FL agrupa clientes por distribuição de dados similar e treina um modelo por cluster.
        </p>
        <div style={S.diagram}>
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.5rem', marginBottom: '0.75rem' }}>
              {[
                { title: 'FedAvg Padrao', desc: 'um modelo global', acc: 45, dim: true, note: 'non-IID: baixo' },
                { title: 'Fine-tuning Local', desc: 'global → adaptar local', acc: 78, dim: false, note: '≥100 amostras' },
                { title: 'Per-Layer Pers.', desc: 'early=global / late=local', acc: 81, dim: false, note: 'equilibrio optimo' },
                { title: 'Clustered FL', desc: 'um modelo por cluster', acc: 84, dim: false, note: 'grupos similares' },
              ].map(s => (
                <div key={s.title} style={{ background: `rgba(249,115,22,${s.dim?'0.04':'0.08'})`, border: `1px solid ${s.dim?'var(--card-border)':'rgba(249,115,22,0.35)'}`, borderRadius: 8, padding: '0.6rem' }}>
                  <div style={{ fontSize: '0.67rem', fontWeight: 700, color: s.dim?'#64748b':'#f97316', fontFamily: 'monospace', marginBottom: '0.2rem' }}>{s.title}</div>
                  <div style={{ fontSize: '0.6rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.2rem' }}>{s.desc}</div>
                  <div style={{ fontSize: '0.58rem', color: '#475569', fontFamily: 'monospace', marginBottom: '0.5rem' }}>{s.note}</div>
                  <div style={{ background: 'rgba(249,115,22,0.08)', borderRadius: 3, height: 12, overflow: 'hidden', marginBottom: '0.2rem' }}>
                    <div style={{ width: `${s.acc}%`, height: '100%', background: s.dim?'#475569':'#f97316', borderRadius: 3 }} />
                  </div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: s.dim?'#64748b':'#f97316', fontFamily: 'monospace', textAlign: 'center' }}>{s.acc}%</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: '0.63rem', color: '#475569', fontFamily: 'monospace', textAlign: 'center', marginBottom: '0.75rem' }}>accuracy em dados non-IID heterogeneos</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.65rem' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.4rem' }}>pFedMe — Formulacao Bi-Nivel</div>
                <div style={{ fontSize: '0.67rem', color: '#f97316', fontFamily: 'monospace', marginBottom: '0.2rem' }}>min_w F(w) = Σ_k f_k(θ_k*; w)</div>
                <div style={{ fontSize: '0.62rem', color: '#94a3b8', fontFamily: 'monospace' }}>onde θ_k* = argmin_θ L_k(θ) + λ/2 × ‖θ − w‖²</div>
              </div>
              <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.65rem' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.4rem' }}>Per-FedAvg (MAML para FL)</div>
                <div style={{ fontSize: '0.67rem', color: '#f97316', fontFamily: 'monospace', marginBottom: '0.2rem' }}>pre-treina W* optimo para 1–5 grad. steps</div>
                <div style={{ fontSize: '0.62rem', color: '#94a3b8', fontFamily: 'monospace' }}>fine-tune rapido com poucas amostras locais</div>
              </div>
            </div>
          </div>
        </div>
        <div style={S.highlight}>
          <strong>Clustered FL:</strong> agrupa clientes com distribuições de dados similares usando similaridade de coseno entre updates de gradiente — clientes no mesmo cluster convergem para um modelo óptimo partilhado. Resolve o dilema one-size-fits-all sem o custo computacional de um modelo totalmente personalizado por cliente.
        </div>
        <div style={S.note}>
          FL personalizado é agora standard em aplicações de saúde (populações de doentes heterogéneas com patologias distintas por hospital) e teclados (vocabulário único por utilizador, estilos de escrita diferentes). A Apple usa Per-layer com DP para o QuickType — camadas de embedding globais (vocabulário partilhado), camadas de predição locais (padrões individuais).
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>FedAvg — Algoritmo e Convergência</strong> — FedAvg agrega pesos de modelos locais como média ponderada pelo número de amostras; converge mesmo com dados heterogéneos (non-IID) mas pode ser lento — variantes como FedProx adicionam regularização para estabilizar a convergência.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Privacidade Diferencial e Segurança</strong> — privacidade diferencial adiciona ruído Gaussiano/Laplace aos gradientes antes de os enviar, garantindo que o servidor não pode reconstituir dados individuais com garantia matemática (ε, δ); Secure Aggregation usa criptografia para proteger gradientes individuais.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Comunicação Eficiente e Selecção de Clientes</strong> — gradient compression (Top-K sparsification, quantização de gradientes) reduz bandwidth até 100×; selecção aleatória de clientes por ronda evita straggler bottlenecks em frotas com conectividade heterogénea.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Aplicações Reais de Federated Learning</strong> — Google usa FL para treinar o teclado Gboard sem enviar texto; hospitais treinaram modelos de detecção de COVID sem partilhar imagens radiológicas; FL é a solução quando regulação (GDPR, HIPAA) proíbe centralização de dados.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>FL Personalizado e Estado da Arte</strong> — per-FedAvg e FedMeta personalizam o modelo global para cada cliente via fine-tuning local; pFedHN aprende hypernetworks para gerar modelos personalizados por cliente — estado da arte em personalização FL.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
