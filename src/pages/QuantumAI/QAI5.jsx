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

function RoadmapSVG() {
  const phases = [
    { era: 'NISQ (actual)', years: '2019-2027', qubits: '50-1000 qubits fisicos', qL: '0-10 qubits logicos', apps: 'VQE, QAOA, QML (experimental)', color: '#f97316' },
    { era: 'Early FT', years: '2027-2033', qubits: '1000-10K qubits fisicos', qL: '10-100 qubits logicos', apps: 'Quimica quantica util, optimizacao', color: '#f97316' },
    { era: 'Fault-Tolerant', years: '2033-2040+', qubits: '1M+ qubits fisicos', qL: '1000+ qubits logicos', apps: 'Shor (RSA), simulacao geral', color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 720 280" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Roadmap Quantico — Da Era NISQ ao Fault-Tolerant</text>

      {/* Timeline arrow */}
      <line x1="30" y1="50" x2="690" y2="50" stroke="var(--text-secondary)" strokeWidth="2" markerEnd="url(#arrowRoad)" />
      <defs>
        <marker id="arrowRoad" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L0,8 L8,4 z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <text x="360" y="44" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Tempo</text>

      {phases.map((p, i) => {
        const x = 30 + i * 220;
        return (
          <g key={i}>
            <line x1={x + 110} y1="50" x2={x + 110} y2="68" stroke={p.color} strokeWidth="1.5" />
            <rect x={x} y="68" width="210" height="180" rx="8" fill={p.color} fillOpacity="0.07" stroke={p.color} strokeWidth="1.5" />
            <text x={x + 105} y="90" textAnchor="middle" fontSize="12" fontWeight="800" fill={p.color}>{p.era}</text>
            <text x={x + 105} y="108" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-primary)">{p.years}</text>
            <text x={x + 105} y="130" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{p.qubits}</text>
            <text x={x + 105} y="148" textAnchor="middle" fontSize="9" fill={p.color}>{p.qL}</text>
            <text x={x + 105} y="175" textAnchor="middle" fontSize="8.5" fill="var(--text-primary)" style={{ maxWidth: 190 }}>{p.apps}</text>

            {/* Progress indicator */}
            <rect x={x + 20} y="222" width="170" height="8" rx="4" fill="var(--text-secondary)" />
            <rect x={x + 20} y="222" width={[150, 50, 5][i]} height="8" rx="4" fill={p.color} fillOpacity="0.8" />
            <text x={x + 105} y="244" textAnchor="middle" fontSize="8" fill={p.color}>{['~70% atingido', '~15% atingido', 'Nao iniciado'][i]}</text>
          </g>
        );
      })}
    </svg>
  );
}

function NISQLimitsSVG() {
  const metrics = [
    { label: 'N. de qubits', nisq: 75, target: 15, color: '#f97316' },
    { label: 'Fidelidade porta', nisq: 65, target: 20, color: '#f97316' },
    { label: 'Coerencia', nisq: 30, target: 5, color: '#f97316' },
    { label: 'Conectividade', nisq: 40, target: 80, color: color },
    { label: 'QEC', nisq: 5, target: 95, color: '#f97316' },
    { label: 'Profund. circuito', nisq: 20, target: 5, color: '#f97316' },
  ];
  const W = 400, H = 32, padL = 160, padT = 44;
  return (
    <svg viewBox="0 0 720 310" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Brechas NISQ vs. Fault-Tolerant — O que Falta Atingir</text>
      <text x={padL + 200} y="38" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-secondary)">(barra = % do objetivo fault-tolerant atingido)</text>

      {metrics.map((m, i) => {
        const y = padT + i * (H + 8);
        const nisqW = (m.nisq / 100) * W;
        return (
          <g key={i}>
            <text x={padL - 6} y={y + H / 2 + 4} textAnchor="end" fontSize="10" fill="var(--text-secondary)">{m.label}</text>
            <rect x={padL} y={y} width={W} height={H} rx="4" fill="var(--text-secondary)" fillOpacity="0.4" />
            <rect x={padL} y={y} width={nisqW} height={H} rx="4" fill={m.color} fillOpacity="0.7" />
            <text x={padL + nisqW + 4} y={y + H / 2 + 4} fontSize="9" fontWeight="700" fill={m.color}>{m.nisq}%</text>
            <text x={padL + W + 34} y={y + H / 2 + 4} fontSize="8.5" fill="var(--text-secondary)">falta {100 - m.nisq}%</text>
          </g>
        );
      })}

      <rect x="30" y="288" width="660" height="18" rx="4" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="300" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">QEC é a brecha mais crítica: passar de 0% a 100% é o salto de NISQ para fault-tolerant. Google Willow (2024) é o primeiro passo real.</text>
    </svg>
  );
}

function FrameworkSVG() {
  const frameworks = [
    { name: 'Qiskit (IBM)', lang: 'Python', target: 'IBM Q + Aer sim.', strengths: 'Maior ecosistema, maior comunidade', color: '#f97316' },
    { name: 'Cirq (Google)', lang: 'Python', target: 'Google + simuladores', strengths: 'Controlo de baixo nivel, tensores', color: '#f97316' },
    { name: 'PennyLane', lang: 'Python', target: 'Multi-backend', strengths: 'ML/autograd, integra PyTorch/JAX', color: '#f97316' },
    { name: 'Braket (AWS)', lang: 'Python', target: 'IonQ, Rigetti, OQC', strengths: 'Cloud multi-vendor, managed', color: '#f97316' },
    { name: 'Q# (Microsoft)', lang: 'Q#+Python', target: 'Azure Quantum', strengths: 'Linguagem dedicada, topological qubits', color: color },
  ];
  return (
    <svg viewBox="0 0 720 280" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Frameworks de Programacao Quantica — Comparacao 2024</text>
      {['Framework', 'Linguagem', 'Hardware-alvo', 'Pontos fortes'].map((h, i) => (
        <text key={i} x={[10, 160, 260, 430][i]} y="42" fontSize="9" fontWeight="700" fill="var(--text-secondary)">{h}</text>
      ))}
      {frameworks.map((f, i) => {
        const y = 52 + i * 42;
        return (
          <g key={i}>
            <rect x="8" y={y} width="704" height="36" rx="5" fill={f.color} fillOpacity="0.04" stroke={f.color} strokeWidth="0.8" strokeOpacity="0.4" />
            <text x="14" y={y + 14} fontSize="10" fontWeight="700" fill={f.color}>{f.name}</text>
            <text x="162" y={y + 14} fontSize="9" fill="var(--text-primary)">{f.lang}</text>
            <text x="262" y={y + 14} fontSize="9" fill="var(--text-primary)">{f.target}</text>
            <text x="432" y={y + 14} fontSize="9" fill="var(--text-secondary)">{f.strengths}</text>
          </g>
        );
      })}
      <rect x="30" y="266" width="660" height="12" rx="4" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="274" textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">PennyLane recomendado para QML (gradientes automaticos); Qiskit para algoritmos e IBM Q; Cirq para controlo preciso de circuitos Google.</text>
    </svg>
  );
}

export default function QAI5() {
  return (
    <div style={S.page}>
      <Link to="/quantum-ai" style={S.back}><ArrowLeft size={16} /> Quantum AI</Link>
      <div style={S.tag}>Module 05</div>
      <h1 style={S.h1}>Era NISQ e Perspectivas</h1>
      <p style={S.lead}>
        NISQ (Noisy Intermediate-Scale Quantum) descreve os processadores quanticos de hoje:
        50-1000 qubits fisicos, sem error correction, dominados pelo ruido. O roadmap IBM e Google
        aponta para Early Fault-Tolerant em 2027-2030 e computacao quantica util em 2033+.
        Qiskit, PennyLane e Cirq sao os frameworks centrais para programar estes sistemas hoje.
      </p>

      <section style={S.section}>
        <h2 style={S.h2}>1. Roadmap: NISQ a Fault-Tolerant</h2>
        <RoadmapSVG />
        <div style={S.highlight}>
          <strong>Era NISQ (Preskill 2018):</strong> processadores com 50-1000 qubits sem error correction.
          Circuitos limitados em profundidade (&lt;100 camadas) pelo ruido. Algoritmos variativos
          (VQE, QAOA) sao os candidatos naturais pois sao tolerantes a algum ruido.
          <br /><strong>IBM Quantum Roadmap:</strong> 2023 Condor (1121Q) → 2024 Flamingo modular →
          2025 Crossbill (interligacao de chips) → 2029 computacao util fault-tolerant.
          <br /><strong>Google Roadmap:</strong> 2024 Willow (105Q, QEC below threshold) →
          2030 1 milhao de qubits fisicos → "below error floor" para algoritmos completos.
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>2. Brechas Tecnicas da Era NISQ</h2>
        <NISQLimitsSVG />
        <h3 style={S.h3}>O problema do ruido e as solucoes parciais</h3>
        <p style={S.p}>
          Os algoritmos NISQ sofrem de tres problemas principais: (1) ruido acumulado em circuitos
          profundos, (2) barren plateaus em optimizacao de VQC, (3) ausencia de QEC que permitiria
          circuitos arbitrariamente longos. As solucoes parciais actuais incluem:
        </p>
        <div style={S.highlight}>
          <strong>Zero Noise Extrapolation (ZNE):</strong> mitigacao de erros sem QEC.
          Executa o mesmo circuito com niveis de ruido artificialmente amplificados e extrapola
          para ruido zero. Funciona para circuitos curtos; overhead: 3-10x mais shots.
          <br /><strong>Probabilistic Error Cancellation (PEC):</strong> representa o canal de ruido
          como combinacao de operacoes ideais; cancela erros estatisticamente. Overhead exponencial
          mas pratico para circuitos com poucos qubits.
          <br /><strong>Dynamical Decoupling (DD):</strong> insere sequencias de portas Pauli
          (XY-4, CPMG) que comutam com o hamiltoniano de ruido — reduz T2 efectivo.
          Implementado automaticamente no Qiskit Runtime primitives.
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>3. Frameworks: Qiskit, Cirq e PennyLane</h2>
        <FrameworkSVG />

        <h3 style={S.h3}>Parameter Shift Rule</h3>
        <div style={S.highlight}>
          <strong>Parameter Shift Rule (Mitarai 2018, Schuld 2019):</strong>
          gradiente exacto para circuitos parametrizados:
          dC/d theta_k = [C(theta_k + pi/2) - C(theta_k - pi/2)] / 2
          Permite backpropagation em circuitos quanticos sem simulacao — avalia o circuito real
          em hardware com theta_k deslocado. Custo: 2 * N_params avaliacoes por update step.
          Alternativa: SPSA (stochastic) — 2 avaliacoes independente do numero de parametros.
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>4. Quando esperar Quantum Advantage Real?</h2>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Dominio</th><th style={S.th}>Optimismo</th><th style={S.th}>Ceticismo</th><th style={S.th}>Consenso (2024)</th></tr></thead>
          <tbody>
            {[
              ['Quimica quantica (VQE)', 'Vantagem para moleculas &gt;50 atomos', 'Classicos DMRG/TN sao muito fortes', '~2030 para vantagem util (50-100 qubits logicos)'],
              ['Optimizacao (QAOA)', 'Speedup para NP-hard', 'Nao demonstrado; classicos evoluem', 'Sem vantagem pratica prevista &lt;2030'],
              ['Criptanalise (Shor)', 'Quebra RSA-2048', 'Exige 4M qubits fisicos', 'Post-quantum crypto (NIST 2024) mitiga risco'],
              ['ML quantico', 'Kernel advantage', 'Dequantization reduz claims', 'Sem vantagem convincente prevista em NISQ'],
              ['Simulacao fisica', 'Dinamica de Hamiltonians', 'Regimes classicos simulaveis sao grandes', '~2028 para sistemas fortemente correlacionados'],
            ].map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={S.td}>{c}</td>)}</tr>)}
          </tbody>
        </table>
        <div style={S.note}>
          Sintese final: NISQ (2019-2027) = algoritmos variativos com mitigacao de erros.
          Early FT (2027-2033) = primeiras aplicacoes uteis em quimica e optimizacao com QEC.
          Full FT (2033+) = Shor, algoritmos quanticos gerais. PennyLane para QML com autograd;
          Qiskit para IBM Q; Cirq para Google. Parameter Shift Rule permite gradientes exactos
          em hardware real. Post-quantum crypto (CRYSTALS-Kyber/Dilithium, NIST 2024) e a
          resposta pragmatica ao Shor para o presente.
        </div>
      </section>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Roadmap: NISQ a Fault-Tolerant</strong> — era NISQ (atual): 50–1000 qubits ruidosos, úteis para química e optimização com vantagem limitada; Fault-Tolerant QC (2030+): milhões de qubits físicos para qubits lógicos error-corrected — Grover e Shor requerem esta era; roadmaps IBM e Google apontam para 2033–2035.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Brechas Tecnicas da Era NISQ</strong> — barren plateaus impedem treino de VQCs profundos; overhead de QEC é enorme (1000:1 físico:lógico); conectividade limitada dos qubits restringe circuitos; decoerência limita profundidade — sem resolver estes problemas, quantum advantage sobre clássico em ML é especulativo.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Frameworks: Qiskit, Cirq e PennyLane</strong> — Qiskit (IBM) é a framework mais usada com acesso ao hardware IBM via Quantum Network; Cirq (Google) optimiza para hardware superconductor; PennyLane especializa-se em QML com diferenciação automática e suporte a múltiplos backends.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Quando esperar Quantum Advantage Real?</strong> — consenso académico: química quântica e simulação de materiais em 2027–2032 com hardware fault-tolerant; optimização combinatória com vantagem prática: incerto; criptanálise RSA: 2035+ com millions of qubits — investimento actual em QC é aposta de longo prazo com incerteza substancial.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
