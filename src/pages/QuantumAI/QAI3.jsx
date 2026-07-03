import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

function VQCArchSVG() {
  const layers = [
    { label: 'Feature Map', sub: 'ZZFeatureMap\n|x> = U_phi(x)|0>', color: '#f97316' },
    { label: 'Ansatz (VQC)', sub: 'RealAmplitudes\nRy(theta) + CNOT', color: color },
    { label: 'Medicao', sub: '⟨Z_0 Z_1 ... Z_n⟩\nvalor esperado', color: '#f97316' },
    { label: 'Classico', sub: 'COBYLA / BFGS\noptimiza theta', color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 720 260" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Variational Quantum Circuit (VQC) — Ciclo Hibrido Classico-Quantico</text>

      {/* Input */}
      <rect x="20" y="100" width="80" height="60" rx="6" fill="#fb923c" fillOpacity="0.1" stroke="var(--card-border)" strokeWidth="1.5" />
      <text x="60" y="126" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fb923c">Dados x</text>
      <text x="60" y="142" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">classicos</text>
      <line x1="100" y1="130" x2="125" y2="130" stroke="var(--card-border)" strokeWidth="1.5" />

      {layers.map((l, i) => {
        const x = 125 + i * 140;
        const subLines = l.sub.split('\n');
        return (
          <g key={i}>
            <rect x={x} y="94" width="120" height="72" rx="8" fill={l.color} fillOpacity="0.1" stroke={l.color} strokeWidth="1.5" />
            <text x={x + 60} y="118" textAnchor="middle" fontSize="10" fontWeight="700" fill={l.color}>{l.label}</text>
            {subLines.map((s, si) => (
              <text key={si} x={x + 60} y={134 + si * 14} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{s}</text>
            ))}
            {i < layers.length - 1 && (
              <line x1={x + 120} y1="130" x2={x + 140} y2="130" stroke={l.color} strokeWidth="1.5" markerEnd="url(#arrowQML)" />
            )}
          </g>
        );
      })}

      {/* Feedback loop */}
      <path d="M 685 130 Q 685 220 360 220 Q 125 220 125 166" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6 3" markerEnd="url(#arrowQML)" />
      <text x="410" y="238" textAnchor="middle" fontSize="9" fill="#f59e0b">actualiza theta -- novo circuito quantico</text>

      <defs>
        <marker id="arrowQML" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#fb923c" />
        </marker>
      </defs>

      <rect x="30" y="244" width="660" height="12" rx="4" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="253" textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">O VQC e um modelo de ML: feature map codifica dados em qubits; ansatz tem parametros treinaveis; optimizador classico minimiza loss.</text>
    </svg>
  );
}

function QSVMvsSVMSVG() {
  const metrics = ['Accuracy', 'Train time', 'Kernel eval.', 'Scalability', 'NISQ viavel'];
  const classical = [0.88, 0.95, 0.98, 0.85, 1.0];
  const quantum = [0.86, 0.30, 0.45, 0.25, 0.60];
  const W = 500, H = 34, padL = 120, padT = 44;

  return (
    <svg viewBox="0 0 720 300" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>QSVM vs SVM Clássico — Benchmark (UCI datasets, 2023)</text>

      {metrics.map((m, i) => {
        const y = padT + i * (H + 6);
        const cW = classical[i] * W;
        const qW = quantum[i] * W;
        return (
          <g key={i}>
            <text x={padL - 6} y={y + H / 2 + 4} textAnchor="end" fontSize="10" fill="var(--text-secondary)">{m}</text>
            <rect x={padL} y={y} width={cW} height={H / 2 - 1} rx="3" fill="#fb923c" fillOpacity="0.5" />
            <text x={padL + cW + 4} y={y + H / 2 - 6} fontSize="8.5" fill="#fb923c">{Math.round(classical[i] * 100)}%</text>
            <rect x={padL} y={y + H / 2 + 1} width={qW} height={H / 2 - 1} rx="3" fill={color} fillOpacity="0.6" />
            <text x={padL + qW + 4} y={y + H - 3} fontSize="8.5" fill={color}>{Math.round(quantum[i] * 100)}%</text>
          </g>
        );
      })}

      <rect x={padL} y="36" width="2" height={metrics.length * (H + 6)} fill="var(--text-secondary)" />
      {/* Legend below all bars */}
      <rect x="200" y="252" width="14" height="10" rx="2" fill="#fb923c" fillOpacity="0.6" />
      <text x="218" y="261" fontSize="10" fill="var(--text-secondary)">SVM clássico (RBF kernel)</text>
      <rect x="420" y="252" width="14" height="10" rx="2" fill={color} fillOpacity="0.6" />
      <text x="438" y="261" fontSize="10" fill="var(--text-secondary)">QSVM (ZZ kernel)</text>

      <rect x="20" y="272" width="680" height="22" rx="4" fill="rgba(249,115,22,0.08)" />
      <text x="360" y="284" textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">Vantagem teórica: K(x,y)=|⟨φ(x)|φ(y)⟩|² em espaço de Hilbert 2ⁿ. Vantagem prática só se espaço clássico for intratável (não demonstrado).</text>
    </svg>
  );
}

function VQESvg() {
  const iters = Array.from({ length: 20 }, (_, i) => i);
  const energy = iters.map(i => -1.136 + (0.8 * Math.exp(-i * 0.25)) + (Math.random() * 0.02 - 0.01));
  const W = 580, H = 140, padL = 60, padT = 44;
  const minE = -1.136, maxE = -0.3;
  const toX = i => padL + (i / 19) * W;
  const toY = v => padT + H - ((v - maxE) / (minE - maxE)) * H;

  return (
    <svg viewBox="0 0 720 230" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>VQE — Convergencia para Energia do Estado Fundamental (H2)</text>

      {[-1.0, -0.8, -0.6, -0.4].map(v => (
        <g key={v}>
          <line x1={padL} y1={toY(v)} x2={padL + W} y2={toY(v)} stroke="var(--text-secondary)" strokeWidth="0.6" />
          <text x={padL - 4} y={toY(v) + 4} textAnchor="end" fontSize="8" fill="var(--text-secondary)">{v}</text>
        </g>
      ))}

      {/* FCI exact line */}
      <line x1={padL} y1={toY(-1.136)} x2={padL + W} y2={toY(-1.136)} stroke="#f97316" strokeWidth="1.5" strokeDasharray="5 3" />
      <text x={padL + W - 10} y={toY(-1.136) - 6} fontSize="8.5" fill="#f97316">FCI exact: -1.136 Ha</text>

      {/* VQE curve */}
      <polyline points={iters.map(i => `${toX(i)},${toY(energy[i])}`).join(' ')} fill="none" stroke={color} strokeWidth="2" />
      {iters.filter(i => i % 4 === 0).map(i => (
        <circle key={i} cx={toX(i)} cy={toY(energy[i])} r="3" fill={color} />
      ))}

      <line x1={padL} y1={padT} x2={padL} y2={padT + H} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={padL} y1={padT + H} x2={padL + W} y2={padT + H} stroke="var(--text-secondary)" strokeWidth="1" />
      <text x={padL + W / 2} y={padT + H + 16} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Iteracao (COBYLA)</text>
      <text x={padL - 40} y={padT + H / 2} textAnchor="middle" fontSize="9" fill="var(--text-secondary)" transform={`rotate(-90, ${padL - 40}, ${padT + H / 2})`}>Energia (Hartree)</text>

      <rect x="30" y="208" width="660" height="18" rx="4" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="220" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">VQE para H2 com 4 qubits (STO-3G basis): converge para -1.136 Ha (vs FCI -1.137 Ha). Chemical accuracy: erro &lt; 1.6 mHa = 1 kcal/mol.</text>
    </svg>
  );
}

export default function QAI3() {
  return (
    <div style={S.page}>
      <Link to="/quantum-ai" style={S.back}><ArrowLeft size={16} /> Quantum AI</Link>
      <div style={S.tag}>Module 03</div>
      <h1 style={S.h1}>Quantum Machine Learning</h1>
      <p style={S.lead}>
        Quantum ML combina circuitos quanticos variacionais com optimizacao classica para tarefas
        de aprendizagem. QSVMs exploram kernels em espacos de Hilbert de dimensao 2^n; VQE calcula
        energias moleculares com precisao quimica; QNNs parametrizam circuitos como redes neuronais.
        A vantagem pratica sobre ML classico ainda nao foi demonstrada de forma convincente.
      </p>

      <section style={S.section}>
        <h2 style={S.h2}>1. Variational Quantum Circuits (VQC)</h2>
        <VQCArchSVG />
        <h3 style={S.h3}>Feature map, ansatz e barren plateaus</h3>
        <p style={S.p}>
          Um VQC tem dois componentes: o <strong>feature map</strong> U_phi(x) codifica dados classicos
          em qubits (amplitude encoding, angle encoding, basis encoding), e o <strong>ansatz</strong>
          U(theta) com parametros treinaveis. O optimizador classico minimiza a funcao de custo
          C(theta) = ⟨psi(theta)|H|psi(theta)⟩.
        </p>
        <div style={S.highlight}>
          <strong>Barren Plateaus (McClean et al. 2018):</strong> o gradiente de C(theta) desaparece
          exponencialmente com o numero de qubits para ansatze aleatorios:
          Var[dC/d theta_k] = O(1/2^n).
          Para n=50 qubits, o gradiente e menor que a precisao de ponto flutuante — o treino torna-se
          impossivel. Solucoes: ansatze estruturados (UCCSD, hardware-efficient), inicializacao
          proxima do minimo, layerwise training.
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>2. Quantum SVM</h2>
        <QSVMvsSVMSVG />
        <div style={S.highlight}>
          <strong>Kernel quantico K(x,y) = |⟨phi(x)|phi(y)⟩|^2:</strong>
          O ZZFeatureMap cria um kernel que mapeia dados para espaco de Hilbert de dimensao 2^n.
          Se este espaco nao for eficientemente simulavel classicamente, o QSVM tem vantagem.
          <br />Liu et al. (2021, Nature Physics) provou que existe uma distribuicao de dados
          onde QSVM tem vantagem exponencial sobre SVM classico — mas a distribuicao foi
          construida artificialmente para este fim; nao se sabe se ocorre em dados reais.
        </div>
        <p style={S.p}>
          Em benchmarks com datasets reais (UCI, MNIST), o QSVM tem accuracy comparavel ao
          SVM-RBF classico mas com custo computacional muito maior (avaliacao de kernel em hardware
          quantico lento e ruidoso). O consenso atual e que QSVM so pode ter vantagem
          quando o dataset tem estrutura quantica inerente — algo ainda por descobrir.
        </p>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>3. VQE — Simulacao de Quimica Quantica</h2>
        <VQESvg />
        <h3 style={S.h3}>Variational Quantum Eigensolver</h3>
        <p style={S.p}>
          VQE (Peruzzo et al. 2014) e o algoritmo quantico mais promissor para o curto prazo.
          Calcula a energia do estado fundamental de moleculas resolvendo o problema de autovalor
          H|psi⟩ = E|psi⟩ usando o principio variacional: E_0 &lt;= ⟨psi(theta)|H|psi(theta)⟩.
        </p>
        <div style={S.highlight}>
          <strong>Aplicacao a quimica quantica:</strong>
          <br />• H2 (4 qubits), LiH (12 qubits), BeH2 (14 qubits), FeMo-co (76 qubits estimados para simulacao exacta)
          <br />• Exactidao quimica: erro &lt; 1.6 mHa = 1 kcal/mol (necessario para prever reactividade quimica)
          <br />• Classico Full CI: O(exp(N)) em numero de orbitais — intratavel para moleculas grandes
          <br />• VQE quantico: potencialmente O(poly(N)) com ansatz UCCSD (Unitary Coupled Cluster)
          <br />• Aplicacoes: design de catalisadores, medicamentos, materiais para baterias e supercondutores
        </div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Metodo QML</th><th style={S.th}>Dominio</th><th style={S.th}>Vantagem teorica</th><th style={S.th}>Estado pratico (2024)</th></tr></thead>
          <tbody>
            {[
              ['VQE', 'Quimica quantica', 'Exponencial sobre FCI', 'Demonstrado ate ~50 qubits (ruido limita)'],
              ['QAOA', 'Optimizacao combinatoria', 'Heuristico (sem prova)', 'Competitivo com classicos em &lt;20 nos'],
              ['QSVM', 'Classificacao', 'Exponencial (condicionado)', 'Accuracy similar, custo maior'],
              ['QNN (VQC)', 'ML geral', 'Barren plateaus limitam', 'Nao competitivo com DL classico'],
              ['Quantum Boltzmann', 'Generativo', 'Amostragem Boltzmann', 'Demonstrado em D-Wave (annealing)'],
            ].map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={S.td}>{c}</td>)}</tr>)}
          </tbody>
        </table>
        <div style={S.note}>
          Sintese: VQC = feature map + ansatz + optimizador classico. Barren plateaus limitam
          o escalonamento de QNNs. QSVM tem kernel quantico K(x,y)=|⟨phi(x)|phi(y)⟩|^2 mas sem
          vantagem pratica demonstrada em dados reais. VQE e o algoritmo NISQ mais promissor:
          simulacao de H2 com 4 qubits convergindo para -1.136 Ha (exactidao quimica).
        </div>
      </section>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>4. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Variational Quantum Circuits (VQC)</strong> — VQCs são circuitos parametrizados optimizados classicamente via gradient descent (parameter-shift rule); são o análogo quântico de redes neuronais — camadas de rotações com ângulos treináveis; sofrem de barren plateaus (gradientes que desaparecem) em profundidade.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Quantum SVM</strong> — Quantum SVM usa feature maps quânticos (ZZFeatureMap) para mapear dados para espaço de Hilbert de alta dimensão onde separação linear é possível; o kernel é estimado por overlap de estados quânticos; em dados clássicos, o speedup vs. kernel SVM clássico não está demonstrado.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>VQE — Simulacao de Quimica Quantica</strong> — VQE (Variational Quantum Eigensolver) estima o estado de energia mínima de moléculas — problema exponencialmente difícil classicamente; é a aplicação de era NISQ com maior potencial real: simulação de catalisadores, baterias e fármacos que clássico não consegue.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
