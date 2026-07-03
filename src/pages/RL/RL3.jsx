import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';
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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', marginTop: '1.5rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0' },
  math: { margin: '1rem 0', overflowX: 'auto' },
};

const step = (n, text) => (
  <div key={n} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
    <div style={{ minWidth: 28, height: 28, borderRadius: '50%', background: color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>{n}</div>
    <p style={{ margin: '0.1rem 0 0', color: 'var(--text-primary)', lineHeight: 1.7, fontSize: '0.95rem' }}>{text}</p>
  </div>
);

/* ── SVG: Policy Iteration Flowchart ── */
function PolicyIterationFlowchart() {
  return (
    <svg viewBox="0 0 600 220" style={{ width: '100%', maxWidth: 600, display: 'block', margin: '0 auto' }}>
      {/* Boxes */}
      <rect x="10" y="80" width="110" height="50" rx="8" fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5"/>
      <text x="65" y="100" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">Inicializar</text>
      <text x="65" y="117" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">π aleatória</text>

      <rect x="160" y="80" width="120" height="50" rx="8" fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5"/>
      <text x="220" y="100" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">Policy Evaluation</text>
      <text x="220" y="117" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Calcular V^π</text>

      <rect x="330" y="80" width="120" height="50" rx="8" fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5"/>
      <text x="390" y="100" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">Policy Improvement</text>
      <text x="390" y="117" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">π' = greedy(V^π)</text>

      {/* Decision diamond */}
      <polygon points="510,85 560,105 510,125 460,105" fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5"/>
      <text x="510" y="101" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">π'≠π?</text>
      <text x="510" y="114" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">sim/não</text>

      {/* Terminal */}
      <rect x="460" y="175" width="100" height="36" rx="18" fill={color}/>
      <text x="510" y="198" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="700">Output π*</text>

      {/* Arrows */}
      <line x1="120" y1="105" x2="158" y2="105" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)"/>
      <line x1="280" y1="105" x2="328" y2="105" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)"/>
      <line x1="450" y1="105" x2="462" y2="105" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)"/>
      {/* Não → output */}
      <line x1="510" y1="125" x2="510" y2="173" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)"/>
      <text x="516" y="152" fontSize="10" fill="var(--text-secondary)">não</text>
      {/* Sim → back to evaluation (curved) */}
      <path d="M510 85 Q510 20 220 20 Q160 20 160 78" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arr)"/>
      <text x="340" y="16" fontSize="10" fill="var(--text-secondary)">sim → repetir</text>

      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)"/>
        </marker>
      </defs>
    </svg>
  );
}

/* ── SVG: VI vs PI side-by-side loops ── */
function AlgorithmLoopsSVG() {
  return (
    <svg viewBox="0 0 600 240" style={{ width: '100%', maxWidth: 600, display: 'block', margin: '0 auto' }}>
      {/* Policy Iteration column */}
      <text x="130" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Policy Iteration</text>
      <rect x="60" y="35" width="140" height="38" rx="7" fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5"/>
      <text x="130" y="59" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Eval: V^π (completa)</text>
      <rect x="60" y="100" width="140" height="38" rx="7" fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5"/>
      <text x="130" y="124" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Improve: π = greedy(V)</text>
      <path d="M130 73 L130 98" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#a2)"/>
      <path d="M200 119 Q240 119 240 54 Q240 35 202 35" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#a2)"/>
      <text x="243" y="77" fontSize="10" fill="var(--text-secondary)">loop</text>
      <rect x="80" y="158" width="100" height="30" rx="15" fill={color}/>
      <text x="130" y="178" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="700">π* quando π estável</text>
      <path d="M130 138 L130 156" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#a2)"/>

      {/* Divider */}
      <line x1="300" y1="10" x2="300" y2="230" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3"/>

      {/* Value Iteration column */}
      <text x="460" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Value Iteration</text>
      <rect x="370" y="35" width="180" height="38" rx="7" fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5"/>
      <text x="460" y="52" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Bellman Optimality sweep</text>
      <text x="460" y="66" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">V(s) ← max_a [R + γ Σ P V']</text>
      <path d="M550 35 Q570 35 570 54 Q570 73 550 73" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#a2)"/>
      <text x="582" y="57" fontSize="10" fill="var(--text-secondary)" textAnchor="middle">loop</text>
      <rect x="390" y="105" width="140" height="38" rx="7" fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5"/>
      <text x="460" y="122" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Extrair π*(s) = argmax_a</text>
      <text x="460" y="136" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">apenas no final</text>
      <path d="M460 73 L460 103" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#a2)"/>
      <rect x="390" y="163" width="140" height="30" rx="15" fill={color}/>
      <text x="460" y="183" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="700">V* quando Δ {'<'} θ</text>
      <path d="M460 143 L460 161" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#a2)"/>

      <defs>
        <marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)"/>
        </marker>
      </defs>
    </svg>
  );
}

/* ── SVG: GPI loop ── */
function GPILoopSVG() {
  return (
    <svg viewBox="0 0 340 160" style={{ width: '100%', maxWidth: 340, display: 'block', margin: '0 auto' }}>
      <ellipse cx="90" cy="80" rx="75" ry="45" fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5"/>
      <text x="90" y="74" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Policy</text>
      <text x="90" y="90" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Evaluation</text>

      <ellipse cx="250" cy="80" rx="75" ry="45" fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5"/>
      <text x="250" y="74" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Policy</text>
      <text x="250" y="90" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Improvement</text>

      {/* Top arrow: Eval → Improve */}
      <path d="M163 55 Q170 30 177 55" fill="none" stroke={color} strokeWidth="1.5" markerEnd="url(#ga)"/>
      <text x="170" y="26" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">V^π → greedy</text>

      {/* Bottom arrow: Improve → Eval */}
      <path d="M177 105 Q170 130 163 105" fill="none" stroke={color} strokeWidth="1.5" markerEnd="url(#ga)"/>
      <text x="170" y="148" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">π → re-evaluar</text>

      <defs>
        <marker id="ga" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color}/>
        </marker>
      </defs>
    </svg>
  );
}

/* ── Grid World 3x3 display ── */
const gridValues = [
  ['-1.0', '-0.5', '0.0'],
  ['-1.5', '###', '+10'],
  ['-2.0', '-1.5', 'GOAL'],
];
const gridPolicy = [
  ['→', '→', '↓'],
  ['↓', '##', '↓'],
  ['→', '→', '★'],
];

export default function RL3() {
  return (
    <div style={S.page}>
      <Link to="/rl" style={S.back}><ArrowLeft size={16} /> Voltar a RL</Link>

      <div style={S.tag}>MÓDULO 3</div>
      <h1 style={S.h1}>Programação Dinâmica</h1>
      <p style={S.lead}>
        Dynamic Programming (DP) assume conhecimento total do modelo MDP — as funções de transição{' '}
        <InlineMath math="P(s'|s,a)" /> e de recompensa <InlineMath math="R(s,a)" /> são completamente conhecidas.
        Com esta informação, é possível calcular políticas ótimas de forma exata e eficiente.
        Os dois algoritmos fundamentais são Policy Iteration e Value Iteration.
      </p>

      {/* ── Section 1: DP em RL ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Programação Dinâmica em RL</h2>
        <p style={S.p}>
          DP em RL pressupõe o chamado <strong>Planning Setting</strong>: o agente tem acesso completo
          ao modelo do ambiente, expresso como um MDP <InlineMath math="\langle S, A, P, R, \gamma \rangle" />.
          Isto difere do cenário Model-Free, onde o agente aprende por interação direta.
        </p>
        
          <p style={{ ...S.p, fontWeight: 700, marginBottom: '0.5rem' }}>Requisitos da DP:</p>
          <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
            <li style={{ marginBottom: '0.5rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>Função de transição:</strong> <InlineMath math="P(s'|s,a)" /> — probabilidade de chegar a <InlineMath math="s'" /> tomando ação <InlineMath math="a" /> em estado <InlineMath math="s" />.
            </li>
            <li style={{ marginBottom: '0.5rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>Função de recompensa:</strong> <InlineMath math="R(s,a)" /> ou <InlineMath math="R(s,a,s')" /> — recompensa esperada para cada transição.
            </li>
            <li style={{ color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>Espaços finitos:</strong> <InlineMath math="|S|" /> e <InlineMath math="|A|" /> finitos (ou discretizados).
            </li>
          </ul>
        

        <h3 style={S.h3}>Dois Problemas Fundamentais</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.1rem', border: `2px solid ${color}` }}>
            <p style={{ fontWeight: 700, color, margin: '0 0 0.5rem', fontSize: '1rem' }}>Prediction (Avaliação)</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '0 0 0.5rem', lineHeight: 1.6 }}>
              Dado uma política fixa <InlineMath math="\pi" />, calcular a value function <InlineMath math="V^\pi(s)" /> para todos os estados.
            </p>
            <p style={{ fontSize: '0.85rem', fontFamily: 'monospace', color, margin: 0 }}>Entrada: π → Saída: V^π</p>
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.1rem', border: `2px solid ${color}` }}>
            <p style={{ fontWeight: 700, color, margin: '0 0 0.5rem', fontSize: '1rem' }}>Control (Otimização)</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '0 0 0.5rem', lineHeight: 1.6 }}>
              Encontrar a política ótima <InlineMath math="\pi^*" /> que maximiza o retorno esperado em todos os estados.
            </p>
            <p style={{ fontSize: '0.85rem', fontFamily: 'monospace', color, margin: 0 }}>Entrada: MDP → Saída: π*</p>
          </div>
        </div>

        <div style={S.diagram}>
          <p style={{ fontWeight: 700, margin: '0 0 1rem', color: 'var(--text-primary)' }}>Hierarquia dos Problemas de DP:</p>
          <svg viewBox="0 0 540 130" style={{ width: '100%', maxWidth: 540, display: 'block', margin: '0 auto' }}>
            <rect x="10" y="10" width="140" height="50" rx="8" fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5"/>
            <text x="80" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>MDP Completo</text>
            <text x="80" y="48" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">P(s'|s,a), R(s,a)</text>
            <line x1="150" y1="35" x2="198" y2="35" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#dp1)"/>
            <rect x="200" y="10" width="140" height="50" rx="8" fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5"/>
            <text x="270" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Prediction</text>
            <text x="270" y="48" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">dado π → V^π</text>
            <line x1="340" y1="35" x2="388" y2="35" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#dp1)"/>
            <rect x="390" y="10" width="140" height="50" rx="8" fill={color}/>
            <text x="460" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">Control</text>
            <text x="460" y="48" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)">encontrar π*</text>
            <text x="270" y="100" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Policy Iteration / Value Iteration resolvem ambos</text>
            <defs>
              <marker id="dp1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)"/>
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.note}>
          DP aplica o Princípio de Optimalidade de Bellman: a solução ótima pode ser decomposta em sub-problemas ótimos.
          Este é o fundamento matemático que permite calcular <InlineMath math="V^*" /> e <InlineMath math="\pi^*" /> de forma eficiente.
        </div>
      </div>

      <hr style={S.divider}/>

      {/* ── Section 2: Policy Evaluation ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Policy Evaluation (Prediction)</h2>
        <p style={S.p}>
          Dado uma política <InlineMath math="\pi" /> fixa, o objetivo é computar a value function correspondente.
          A equação de Bellman de expectativa fornece uma relação de consistência que deve ser satisfeita:
        </p>
        <div style={S.math}>
          <BlockMath math="V^\pi(s) = \sum_a \pi(a|s) \left[ R(s,a) + \gamma \sum_{s'} P(s'|s,a)\, V^\pi(s') \right]" />
        </div>
        <p style={S.p}>
          Esta equação define um sistema linear em <InlineMath math="|S|" /> incógnitas. Pode ser resolvida
          diretamente (invertendo uma matriz) ou iterativamente — a abordagem iterativa é preferida na prática.
        </p>

        <h3 style={S.h3}>Algoritmo Iterativo</h3>
        <p style={S.p}>
          Partindo de <InlineMath math="V_0(s) = 0" /> para todos os estados, aplica-se o operador de Bellman
          repetidamente até convergência:
        </p>
        <div style={S.math}>
          <BlockMath math="V_{k+1}(s) = \sum_a \pi(a|s) \left[ R(s,a) + \gamma \sum_{s'} P(s'|s,a)\, V_k(s') \right]" />
        </div>

        <div style={S.diagram}>
          <p style={{ fontWeight: 700, margin: '0 0 1rem', color: 'var(--text-primary)' }}>Pseudocódigo — Policy Evaluation Iterativa:</p>
          {step(1, "Inicializar V(s) = 0 para todos os estados s ∈ S (incluindo terminais)")}
          {step(2, "Loop: para cada s ∈ S, calcular V_new(s) = Σ_a π(a|s)[R(s,a) + γ Σ_{s'} P(s'|s,a) V(s')]")}
          {step(3, "Calcular Δ = max_s |V_new(s) − V(s)|; actualizar V ← V_new")}
          {step(4, "Repetir até Δ < θ (ex: θ = 10⁻⁶)")}
          {step(5, "Retornar V ≈ V^π")}
        </div>

        
          <p style={{ ...S.p, fontWeight: 700, marginBottom: '0.4rem' }}>Garantia de Convergência:</p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            O operador de Bellman <InlineMath math="\mathcal{T}^\pi" /> é uma contração com módulo <InlineMath math="\gamma" /> na norma do supremo:
          </p>
          <div style={S.math}>
            <BlockMath math="\|\mathcal{T}^\pi V - \mathcal{T}^\pi U\|_\infty \leq \gamma \|V - U\|_\infty" />
          </div>
          <p style={{ ...S.p, marginBottom: 0, marginTop: '0.5rem' }}>
            Pelo Teorema do Ponto Fixo de Banach, a sequência <InlineMath math="V_k" /> converge geometricamente para o único ponto
            fixo <InlineMath math="V^\pi" />, para qualquer <InlineMath math="\gamma < 1" />.
          </p>
        

        <h3 style={S.h3}>Exemplo: Random Walk 1D (4 estados)</h3>
        <p style={S.p}>
          Considere um random walk com estados <InlineMath math="\{1, 2, 3, 4\}" />, estados terminais
          absorsores em <InlineMath math="0" /> (recompensa <InlineMath math="0" />) e{' '}
          <InlineMath math="5" /> (recompensa <InlineMath math="+1" />). Em cada passo, o agente move-se
          aleatoriamente para a esquerda ou direita com probabilidade <InlineMath math="0.5" /> cada.
          Política: <InlineMath math="\pi(\text{left}|s) = \pi(\text{right}|s) = 0.5" />, <InlineMath math="\gamma = 1" />.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Iteração k</th>
              <th style={S.th}>V(1)</th>
              <th style={S.th}>V(2)</th>
              <th style={S.th}>V(3)</th>
              <th style={S.th}>V(4)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['k = 0', '0.000', '0.000', '0.000', '0.000'],
              ['k = 1', '0.000', '0.000', '0.000', '0.100'],
              ['k = 2', '0.000', '0.000', '0.050', '0.150'],
              ['k = 5', '0.003', '0.017', '0.100', '0.250'],
              ['k = 10', '0.030', '0.080', '0.170', '0.350'],
              ['k = ∞', '0.200', '0.400', '0.600', '0.800'],
            ].map(([k, ...vals]) => (
              <tr key={k}>
                <td style={{ ...S.td, fontWeight: k === 'k = ∞' ? 700 : 400 }}>{k}</td>
                {vals.map((v, i) => (
                  <td key={i} style={{ ...S.td, color: k === 'k = ∞' ? color : 'var(--text-primary)', fontWeight: k === 'k = ∞' ? 700 : 400 }}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          No limite, <InlineMath math="V^\pi(s) = s/5" /> — a probabilidade de atingir o terminal direito (recompensa +1)
          partindo do estado <InlineMath math="s" />. Isto faz sentido intuitivamente: quanto mais à direita, maior a probabilidade de sucesso.
        </div>
      </div>

      <hr style={S.divider}/>

      {/* ── Section 3: Policy Improvement ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Policy Improvement</h2>
        <p style={S.p}>
          Dado <InlineMath math="V^\pi" />, podemos construir uma política melhor agindo de forma <em>greedy</em>{' '}
          em relação a <InlineMath math="V^\pi" />. Para cada estado, escolhemos a ação que maximiza o valor esperado:
        </p>
        <div style={S.math}>
          <BlockMath math="\pi'(s) = \arg\max_a \left[ R(s,a) + \gamma \sum_{s'} P(s'|s,a)\, V^\pi(s') \right]" />
        </div>
        <p style={S.p}>
          Esta política <InlineMath math="\pi'" /> é determinística (seleciona uma única ação por estado).
          O Policy Improvement Theorem garante que <InlineMath math="\pi'" /> é pelo menos tão boa quanto <InlineMath math="\pi" />:
        </p>

        
          <p style={{ ...S.p, fontWeight: 700, marginBottom: '0.5rem' }}>Policy Improvement Theorem:</p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Se <InlineMath math="\pi'" /> é obtida por melhoria greedy de <InlineMath math="V^\pi" />, então:
          </p>
          <div style={S.math}>
            <BlockMath math="V^{\pi'}(s) \geq V^\pi(s), \quad \forall s \in S" />
          </div>
          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '0.5rem' }}>
            <strong>Prova conceptual:</strong> Por definição de greedy, para qualquer estado <InlineMath math="s" />:
          </p>
          <div style={S.math}>
            <BlockMath math="Q^\pi(s, \pi'(s)) = \max_a Q^\pi(s,a) \geq Q^\pi(s, \pi(s)) = V^\pi(s)" />
          </div>
          <p style={{ ...S.p, marginBottom: 0, marginTop: '0.5rem' }}>
            Aplicando este argumento recursivamente a todos os passos futuros, obtém-se
            <InlineMath math="V^{\pi'}(s) \geq V^\pi(s)" /> para todo <InlineMath math="s" />.
          </p>
        

        <div style={S.note}>
          Condição de paragem: quando <InlineMath math="\pi' = \pi" />, atingiu-se o ponto fixo.
          Nesse caso, <InlineMath math="V^\pi = V^*" /> e <InlineMath math="\pi" /> é a política ótima.
          As equações de Bellman de otimalidade são satisfeitas: <InlineMath math="V^\pi(s) = \max_a Q^\pi(s,a)" />.
        </div>
      </div>

      <hr style={S.divider}/>

      {/* ── Section 4: Policy Iteration ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Policy Iteration</h2>
        <p style={S.p}>
          Policy Iteration alterna entre Policy Evaluation (computar <InlineMath math="V^\pi" /> completamente)
          e Policy Improvement (tornar <InlineMath math="\pi" /> greedy em <InlineMath math="V^\pi" />) até a política estabilizar.
          Em cada ciclo, a política melhora estritamente ou mantém-se — e como existem finitas políticas num MDP finito, converge em número finito de iterações.
        </p>

        <div style={S.diagram}>
          <p style={{ fontWeight: 700, margin: '0 0 1.2rem', color: 'var(--text-primary)' }}>Flowchart — Policy Iteration:</p>
          <PolicyIterationFlowchart />
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '1rem 0 0', textAlign: 'center' }}>
            Converge em no máximo <InlineMath math="|A|^{|S|}" /> iterações (número de políticas determinísticas).
            Na prática, convergência muito mais rápida.
          </p>
        </div>

        <h3 style={S.h3}>Convergência Garantida</h3>
        <p style={S.p}>
          Num MDP finito, o número de políticas determinísticas é <InlineMath math="|A|^{|S|}" />, que é finito.
          Como cada iteração de Policy Iteration melhora estritamente a política (ou termina), o algoritmo
          nunca pode ciclar — termina em no máximo <InlineMath math="|A|^{|S|}" /> iterações.
          Na prática, costuma convergir em poucas dezenas de iterações mesmo para MDPs grandes.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Iteração</th>
              <th style={S.th}>Política π</th>
              <th style={S.th}>V(s₁)</th>
              <th style={S.th}>V(s₂)</th>
              <th style={S.th}>Política alterada?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['0', 'Aleatória uniforme', '-14.0', '-12.0', '—'],
              ['1', 'Greedy em V^π₀', '-6.0', '-4.0', 'Sim'],
              ['2', 'Greedy em V^π₁', '-4.0', '-2.0', 'Sim'],
              ['3', 'Greedy em V^π₂', '-4.0', '-2.0', 'Não → STOP (π*)'],
            ].map(([it, pol, v1, v2, alt]) => (
              <tr key={it}>
                <td style={S.td}>{it}</td>
                <td style={S.td}>{pol}</td>
                <td style={S.td}>{v1}</td>
                <td style={S.td}>{v2}</td>
                <td style={{ ...S.td, color: alt.includes('Não') ? color : 'var(--text-primary)', fontWeight: alt.includes('Não') ? 700 : 400 }}>{alt}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.note}>
          Custo de Policy Iteration: Policy Evaluation resolve um sistema linear com custo
          <InlineMath math="\mathcal{O}(|S|^3)" /> (ou iterativo com custo <InlineMath math="\mathcal{O}(|A||S|^2)" /> por sweep).
          O passo de Improvement tem custo <InlineMath math="\mathcal{O}(|A||S|)" />.
        </div>
      </div>

      <hr style={S.divider}/>

      {/* ── Section 5: Value Iteration ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Value Iteration</h2>
        <p style={S.p}>
          Value Iteration combina Policy Evaluation e Policy Improvement num único passo de update.
          Em vez de avaliar completamente a política corrente, aplica um único passo do operador de Bellman
          de <em>otimalidade</em>:
        </p>
        <div style={S.math}>
          <BlockMath math="V_{k+1}(s) = \max_a \left[ R(s,a) + \gamma \sum_{s'} P(s'|s,a)\, V_k(s') \right]" />
        </div>
        <p style={S.p}>
          Este update é o operador de Bellman de otimalidade <InlineMath math="\mathcal{T}^*" />.
          O único ponto fixo é <InlineMath math="V^*" />: <InlineMath math="\mathcal{T}^* V^* = V^*" />.
          Como <InlineMath math="\mathcal{T}^*" /> é também uma contração com módulo <InlineMath math="\gamma" />,
          a sequência <InlineMath math="V_k" /> converge geometricamente para <InlineMath math="V^*" />.
        </p>

        <div style={S.diagram}>
          <p style={{ fontWeight: 700, margin: '0 0 1rem', color: 'var(--text-primary)' }}>Pseudocódigo — Value Iteration:</p>
          {step(1, "Inicializar V(s) = 0 para todo s ∈ S")}
          {step(2, "Loop: para cada s ∈ S, V_new(s) = max_a [R(s,a) + γ Σ_{s'} P(s'|s,a) V(s')]")}
          {step(3, "Calcular Δ = max_s |V_new(s) − V(s)|; actualizar V ← V_new")}
          {step(4, "Se Δ < θ → parar; caso contrário repetir")}
          {step(5, "Extrair política ótima: π*(s) = argmax_a [R(s,a) + γ Σ_{s'} P(s'|s,a) V*(s')]")}
        </div>

        
          <p style={{ ...S.p, fontWeight: 700, marginBottom: '0.5rem' }}>Diferença Chave vs Policy Iteration:</p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Em Value Iteration, nunca existe uma política completamente avaliada durante o processo —
            apenas a value function é mantida. A política ótima <InlineMath math="\pi^*" /> só é
            extraída explicitamente no final, após convergência de <InlineMath math="V" /> para <InlineMath math="V^*" />.
            Cada iteração tem custo <InlineMath math="\mathcal{O}(|A||S|^2)" />, mas são necessárias mais iterações do que em Policy Iteration.
          </p>
        

        <div style={S.diagram}>
          <p style={{ fontWeight: 700, margin: '0 0 1.2rem', color: 'var(--text-primary)' }}>Comparação Visual: PI vs VI</p>
          <AlgorithmLoopsSVG />
        </div>
      </div>

      <hr style={S.divider}/>

      {/* ── Section 6: Exemplo Grid World 3x3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Exemplo Numérico — Grid World 3×3</h2>
        <p style={S.p}>
          Considere um Grid World 3×3 com as seguintes características:
        </p>
        
          <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
            <li style={{ marginBottom: '0.4rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>Goal (estado [2,2]):</strong> recompensa <InlineMath math="+10" />, estado terminal.
            </li>
            <li style={{ marginBottom: '0.4rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>Obstáculo (estado [1,1]):</strong> intransponível, o agente não pode entrar.
            </li>
            <li style={{ marginBottom: '0.4rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>Recompensa por passo:</strong> <InlineMath math="-1" /> em todos os estados não-terminais.
            </li>
            <li style={{ marginBottom: '0.4rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>Transições:</strong> determinísticas (ação escolhida executada com probabilidade 1).
            </li>
            <li style={{ color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>Desconto:</strong> <InlineMath math="\gamma = 0.9" />.
            </li>
          </ul>
        

        <h3 style={S.h3}>V* após Value Iteration Convergir</h3>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          <div>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Valores V*(s) — grid (linha, coluna):
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 90px)', gap: 4 }}>
              {gridValues.map((row, ri) =>
                row.map((val, ci) => {
                  const isGoal = val === 'GOAL';
                  const isObs = val === '###';
                  return (
                    <div key={`${ri}-${ci}`} style={{
                      height: 70,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 8,
                      fontWeight: 700,
                      fontSize: isGoal ? '0.8rem' : '1rem',
                      background: isGoal ? color : isObs ? 'var(--card-border)' : 'var(--bg-secondary)',
                      color: isGoal ? '#fff' : isObs ? 'var(--text-secondary)' : color,
                      border: isGoal ? 'none' : `1px solid var(--card-border)`,
                    }}>{val}</div>
                  );
                })
              )}
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
              [0,0] a [2,2] — canto inf. direito é GOAL
            </p>
          </div>

          <div>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Política ótima π*(s):
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 90px)', gap: 4 }}>
              {gridPolicy.map((row, ri) =>
                row.map((sym, ci) => {
                  const isGoal = sym === '★';
                  const isObs = sym === '##';
                  return (
                    <div key={`p-${ri}-${ci}`} style={{
                      height: 70,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 8,
                      fontWeight: 700,
                      fontSize: isGoal ? '1.5rem' : '1.3rem',
                      background: isGoal ? color : isObs ? 'var(--card-border)' : 'var(--bg-secondary)',
                      color: isGoal ? '#fff' : isObs ? 'var(--text-secondary)' : 'var(--text-primary)',
                      border: isGoal ? 'none' : `1px solid var(--card-border)`,
                    }}>{sym}</div>
                  );
                })
              )}
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
              Setas indicam a acção ótima em cada estado
            </p>
          </div>
        </div>

        <div style={S.note}>
          Os valores de V* reflectem o retorno descontado ótimo: estados mais próximos do goal têm valores mais elevados.
          O obstáculo força os agentes nos estados da esquerda a descer antes de se dirigirem para a direita.
          Value Iteration converge neste exemplo em aproximadamente 50 iterações com <InlineMath math="\theta = 10^{-6}" />.
        </div>
      </div>

      <hr style={S.divider}/>

      {/* ── Section 7: Complexity e Limitações ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Complexidade e Limitações</h2>

        <h3 style={S.h3}>Análise de Complexidade</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Algoritmo</th>
              <th style={S.th}>Custo por iteração</th>
              <th style={S.th}>Nº iterações típico</th>
              <th style={S.th}>Observação</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Policy Evaluation', 'O(|A||S|²) por sweep', 'Muitas (até convergência)', 'Inner loop dentro de PI'],
              ['Policy Iteration', 'O(|S|³) eval + O(|A||S|) improve', 'Poucas (ex: < 100)', 'Cada it. é cara mas converge rápido'],
              ['Value Iteration', 'O(|A||S|²) por sweep', 'Mais (ex: centenas)', 'Cada it. é barata mas precisam de mais'],
            ].map(([alg, cost, iters, obs]) => (
              <tr key={alg}>
                <td style={{ ...S.td, fontWeight: 600, color }}>{alg}</td>
                <td style={S.td}><code style={{ fontSize: '0.82rem' }}>{cost}</code></td>
                <td style={S.td}>{iters}</td>
                <td style={{ ...S.td, fontSize: '0.87rem', color: 'var(--text-secondary)' }}>{obs}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Limitações Fundamentais</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          {[
            {
              title: 'Modelo Necessário',
              desc: `Requer P(s'|s,a) e R(s,a) explícitos. Na maioria dos problemas reais (jogos complexos, robótica, mercados financeiros), estas funções são desconhecidas ou impossíveis de especificar analiticamente.`
            },
            {
              title: 'Curse of Dimensionality',
              desc: `O custo escala com O(|S|²). Para espaços de estados contínuos ou de alta dimensão (ex: pixels de imagem), |S| é astronomicamente grande — DP é computacionalmente intratável.`
            },
            {
              title: 'Memória Exaustiva',
              desc: `Necessário armazenar V(s) ou Q(s,a) para todos os estados. Para |S| = 10⁶, mesmo armazenar V requer megabytes; Q requer |A| vezes mais.`
            },
            {
              title: 'Motivação para Model-Free',
              desc: `Estas limitações motivam os métodos Model-Free: Monte Carlo, TD Learning, Q-Learning, SARSA — que aprendem directamente da experiência sem necessidade de modelo explícito.`
            },
          ].map(({ title, desc }) => (
            <div key={title} style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '1rem', border: `1px solid rgba(249,115,22,0.10)` }}>
              <p style={{ fontWeight: 700, color, margin: '0 0 0.4rem' }}>{title}</p>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
        <div style={S.note}>
          A transição de DP para métodos Model-Free não é arbitrária — é uma necessidade prática. O Módulo 04 introduz
          Monte Carlo e TD Learning, que mantêm a estrutura conceptual da DP mas dispensam o modelo <InlineMath math="P(s'|s,a)" />.
        </div>
      </div>

      <hr style={S.divider}/>

      {/* ── Section 8: GPI ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Generalised Policy Iteration (GPI)</h2>
        <p style={S.p}>
          GPI é o meta-princípio que unifica todos os métodos de RL: qualquer algoritmo pode ser visto como
          alguma forma de <em>interacção entre policy evaluation e policy improvement</em>.
          Os dois processos trabalham em conjunto — às vezes em conflito, às vezes cooperando — mas convergem para um ponto fixo estável: <InlineMath math="(\pi^*, V^*)" />.
        </p>

        <div style={S.diagram}>
          <p style={{ fontWeight: 700, margin: '0 0 1.2rem', color: 'var(--text-primary)' }}>O Loop GPI:</p>
          <GPILoopSVG />
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '1rem 0 0', textAlign: 'center' }}>
            A avaliação torna V consistente com π; a melhoria torna π greedy em V.
            Estes objectivos estão em tensão — mas o processo converge.
          </p>
        </div>

        <h3 style={S.h3}>GPI como Framework Unificador</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Evaluation</th>
              <th style={S.th}>Improvement</th>
              <th style={S.th}>Granularidade</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Policy Iteration', 'Completa (até convergência)', 'Greedy completo', 'Por episódio completo'],
              ['Value Iteration', 'Um passo Bellman', 'Greedy implícito (max)', 'Por estado, por passo'],
              ['Monte Carlo (Mód 4)', 'Retornos de episódios', 'ε-greedy', 'Por episódio'],
              ['TD Learning (Mód 4)', 'Um passo TD', 'ε-greedy ou greedy', 'Por passo temporal'],
            ].map(([m, ev, im, gr]) => (
              <tr key={m}>
                <td style={{ ...S.td, fontWeight: 600, color }}>{m}</td>
                <td style={S.td}>{ev}</td>
                <td style={S.td}>{im}</td>
                <td style={{ ...S.td, fontSize: '0.87rem', color: 'var(--text-secondary)' }}>{gr}</td>
              </tr>
            ))}
          </tbody>
        </table>

        
          <p style={{ ...S.p, fontWeight: 700, marginBottom: '0.5rem' }}>Insight Fundamental:</p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Não importa quão parcial ou aproximada seja a evaluation, nem quão conservador seja o improvement —
            desde que ambos os processos ocorram, o sistema tende para <InlineMath math="\pi^*" />.
            Este insight, formalizado por Sutton e Barto, é a base conceptual de todo o RL moderno,
            desde Q-Learning a Actor-Critic e algoritmos de RL profundo.
          </p>
        
      </div>

      <hr style={S.divider}/>

      {/* ── Section 9: Síntese ── */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Síntese do Módulo</h2>
        
          <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
            <li style={{ marginBottom: '0.6rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>DP em RL</strong> resolve os problemas de Prediction e Control assumindo conhecimento
              total do modelo <InlineMath math="P(s'|s,a)" /> e <InlineMath math="R(s,a)" />.
            </li>
            <li style={{ marginBottom: '0.6rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>Policy Evaluation</strong> aplica iterativamente a equação de Bellman de expectativa
              até convergência — garantida pelo Teorema do Ponto Fixo de Banach com módulo <InlineMath math="\gamma" />.
            </li>
            <li style={{ marginBottom: '0.6rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>Policy Improvement</strong> torna a política greedy em relação a <InlineMath math="V^\pi" />;
              o Policy Improvement Theorem garante <InlineMath math="V^{\pi'}(s) \geq V^\pi(s)" /> para todo <InlineMath math="s" />.
            </li>
            <li style={{ marginBottom: '0.6rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>Policy Iteration</strong> alterna evaluation completa e improvement; converge em número
              finito de iterações pois cada passo melhora estritamente a política.
            </li>
            <li style={{ marginBottom: '0.6rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>Value Iteration</strong> combina os dois passos num único Bellman optimality update;
              custo por iteração <InlineMath math="\mathcal{O}(|A||S|^2)" />, convergência geométrica com taxa <InlineMath math="\gamma" />.
            </li>
            <li style={{ marginBottom: '0.6rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>GPI</strong> é o princípio unificador: todos os métodos de RL são alguma forma de
              policy evaluation + policy improvement interleaved.
            </li>
            <li style={{ color: 'var(--text-primary)', lineHeight: 1.7 }}>
              Limitações da DP (modelo necessário, curse of dimensionality) motivam os métodos{' '}
              <strong>Model-Free</strong> do próximo módulo.
            </li>
          </ul>
        
      </div>
    </div>
  );
}
