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
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

function BlochSphereSVG() {
  return (
    <svg viewBox="0 0 720 320" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Bloch Sphere — Representacao do Estado de um Qubit</text>

      {/* Sphere outline */}
      <ellipse cx="200" cy="160" rx="110" ry="110" fill="none" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
      <ellipse cx="200" cy="160" rx="110" ry="30" fill="none" stroke={color} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="5 3" />
      {/* Axes */}
      <line x1="200" y1="50" x2="200" y2="270" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="90" y1="160" x2="310" y2="160" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="140" y1="195" x2="260" y2="125" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4 2" />

      {/* Pole labels */}
      <text x="200" y="44" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">|0⟩ (polo norte)</text>
      <text x="200" y="284" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">|1⟩ (polo sul)</text>
      <text x="318" y="164" fontSize="11" fill="var(--text-secondary)">x</text>
      <text x="208" y="54" fontSize="11" fill="var(--text-secondary)">z</text>
      <text x="264" y="122" fontSize="11" fill="var(--text-secondary)">y</text>

      {/* State vector |+⟩ */}
      <line x1="200" y1="160" x2="280" y2="105" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrowQ1)" />
      <text x="285" y="100" fontSize="10" fontWeight="700" fill="#f59e0b">|+⟩=(|0⟩+|1⟩)/√2</text>

      {/* State vector |ψ⟩ */}
      <line x1="200" y1="160" x2="230" y2="80" stroke={color} strokeWidth="2.5" markerEnd="url(#arrowQ2)" />
      <text x="236" y="74" fontSize="10" fontWeight="700" fill={color}>|ψ⟩=α|0⟩+β|1⟩</text>

      <defs>
        <marker id="arrowQ1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#f59e0b" />
        </marker>
        <marker id="arrowQ2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill={color} />
        </marker>
      </defs>

      {/* Angles theta and phi */}
      <path d="M200,160 A20,20 0 0,1 200,140" fill="none" stroke="#f97316" strokeWidth="1.5" />
      <path d="M200,160 A15,5 0 0,1 215,160" fill="none" stroke="#f97316" strokeWidth="1.5" />
      <text x="218" y="170" fontSize="9" fill="#f97316">phi</text>

      {/* Parametric form */}
      <rect x="380" y="44" width="310" height="120" rx="8" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="1" strokeOpacity="0.3" />
      <text x="535" y="66" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Forma Parametrica (Bloch)</text>
      <text x="535" y="88" textAnchor="middle" fontSize="11" fill="var(--text-primary)" fontFamily="monospace">|psi⟩ = cos(theta/2)|0⟩</text>
      <text x="535" y="106" textAnchor="middle" fontSize="11" fill="var(--text-primary)" fontFamily="monospace">     + e^(i*phi)sin(theta/2)|1⟩</text>
      <text x="535" y="128" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">theta in [0, pi] — latitude</text>
      <text x="535" y="144" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">phi in [0, 2*pi] — longitude</text>
      <text x="535" y="158" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">|alpha|^2 + |beta|^2 = 1</text>

      {/* Gate effects */}
      <rect x="380" y="178" width="310" height="120" rx="8" fill="rgba(249,115,22,0.04)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="535" y="198" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Efeito das Portas na Bloch Sphere</text>
      {[
        ['Pauli-X (NOT)', 'Rotacao 180° em torno do eixo x', '#f97316'],
        ['Pauli-Y', 'Rotacao 180° em torno do eixo y', '#f97316'],
        ['Pauli-Z', 'Rotacao 180° em torno do eixo z', '#f97316'],
        ['Hadamard (H)', 'Rotacao 90° z, depois 180° x: |0⟩ -- |+⟩', '#f97316'],
        ['T (pi/8)', 'Rotacao de fase pi/4 em torno de z', color],
      ].map(([g, d, c], i) => (
        <g key={i}>
          <text x="390" y="216 + i * 16" fontSize="9" fontWeight="700" fill={c}>{g}:</text>
          <text x="490" y={216 + i * 16} fontSize="9" fill="var(--text-secondary)">{d}</text>
        </g>
      ))}

      <rect x="30" y="300" width="660" height="16" rx="4" fill="rgba(249,115,22,0.06)" />
      <text x="360" y="311" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Cada ponto na superficie da esfera representa um estado puro de qubit. Estados mistos (decoerentes) ficam no interior.</text>
    </svg>
  );
}

function QuantumGatesSVG() {
  const gates = [
    { name: 'H', matrix: ['1/√2', '1/√2', '1/√2', '-1/√2'], color: '#f97316', desc: 'Superposicao' },
    { name: 'X', matrix: ['0', '1', '1', '0'], color: '#f97316', desc: 'Bit flip (NOT)' },
    { name: 'Z', matrix: ['1', '0', '0', '-1'], color: '#f97316', desc: 'Phase flip' },
    { name: 'T', matrix: ['1', '0', '0', 'e^(ipi/4)'], color: color, desc: 'pi/8 gate' },
  ];
  return (
    <svg viewBox="0 0 720 260" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Matrizes das Portas Quanticas de 1 Qubit</text>

      {gates.map((g, i) => {
        const x = 50 + i * 168;
        return (
          <g key={i}>
            {/* Gate box */}
            <rect x={x} y="40" width="48" height="30" rx="5" fill={g.color} fillOpacity="0.15" stroke={g.color} strokeWidth="1.5" />
            <text x={x + 24} y="59" textAnchor="middle" fontSize="14" fontWeight="800" fill={g.color}>{g.name}</text>

            {/* Matrix */}
            <text x={x + 60} y="55" fontSize="9" fill="var(--text-secondary)">{g.desc}</text>
            <rect x={x} y="80" width="140" height="80" rx="6" fill="rgba(249,115,22,0.04)" stroke="var(--text-secondary)" strokeWidth="1" />
            <text x={x + 8} y="100" fontSize="9" fill="var(--text-secondary)">[ {g.matrix[0]}  {g.matrix[1]} ]</text>
            <text x={x + 8} y="120" fontSize="9" fill="var(--text-secondary)">[ {g.matrix[2]}  {g.matrix[3]} ]</text>
            <text x={x + 70} y="148" textAnchor="middle" fontSize="8" fill={g.color}>Unitaria: U†U = I</text>
          </g>
        );
      })}

      {/* CNOT gate */}
      <rect x="50" y="178" width="620" height="70" rx="8" fill="rgba(249,115,22,0.05)" stroke={color} strokeWidth="1" strokeOpacity="0.4" />
      <text x="360" y="198" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>CNOT (Controlled-NOT) — Porta de 2 Qubits — Cria Entanglement</text>
      <text x="360" y="216" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">|00⟩ ↦ |00⟩  |01⟩ ↦ |01⟩  |10⟩ ↦ |11⟩  |11⟩ ↦ |10⟩</text>
      <text x="360" y="232" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Inverte o qubit target quando o qubit control e |1⟩. {'{H, T, CNOT}'} = conjunto universal de portas quanticas.</text>
      <text x="360" y="244" textAnchor="middle" fontSize="9" fill={color}>Qualquer operacao unitaria pode ser aproximada com precisao arbitraria com estas 3 portas (Solovay-Kitaev theorem)</text>
    </svg>
  );
}

function BellCircuitSVG() {
  return (
    <svg viewBox="0 0 720 200" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Circuito Quantico — Bell State |phi+⟩ = (|00⟩ + |11⟩)/sqrt(2)</text>

      {/* Qubit wires */}
      <text x="40" y="74" fontSize="11" fontWeight="700" fill="var(--text-secondary)">q0 |0⟩</text>
      <line x1="90" y1="70" x2="600" y2="70" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="40" y="124" fontSize="11" fontWeight="700" fill="var(--text-secondary)">q1 |0⟩</text>
      <line x1="90" y1="120" x2="600" y2="120" stroke="var(--text-secondary)" strokeWidth="1.5" />

      {/* Hadamard gate on q0 */}
      <rect x="130" y="52" width="40" height="36" rx="5" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="2" />
      <text x="150" y="75" textAnchor="middle" fontSize="14" fontWeight="800" fill="#f59e0b">H</text>
      <text x="150" y="102" textAnchor="middle" fontSize="8" fill="#f59e0b">superposicao</text>

      {/* CNOT gate */}
      <circle cx="280" cy="70" r="10" fill={color} fillOpacity="0.8" />
      <text x="280" y="74" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">C</text>
      <line x1="280" y1="80" x2="280" y2="110" stroke={color} strokeWidth="2" />
      <circle cx="280" cy="120" r="14" fill="none" stroke={color} strokeWidth="2" />
      <line x1="266" y1="120" x2="294" y2="120" stroke={color} strokeWidth="1.5" />
      <line x1="280" y1="106" x2="280" y2="134" stroke={color} strokeWidth="1.5" />
      <text x="280" y="150" textAnchor="middle" fontSize="8" fill={color}>CNOT — entanglement</text>

      {/* Measurement */}
      <rect x="460" y="52" width="44" height="36" rx="5" fill="#fb923c" fillOpacity="0.15" stroke="var(--card-border)" strokeWidth="1.5" />
      <text x="482" y="72" textAnchor="middle" fontSize="10" fill="#fb923c">M</text>
      <rect x="460" y="102" width="44" height="36" rx="5" fill="#fb923c" fillOpacity="0.15" stroke="var(--card-border)" strokeWidth="1.5" />
      <text x="482" y="122" textAnchor="middle" fontSize="10" fill="#fb923c">M</text>

      {/* Output state */}
      <text x="540" y="65" fontSize="10" fontWeight="700" fill="#f97316">~50% |0⟩</text>
      <text x="540" y="82" fontSize="10" fill="var(--text-secondary)">corr. |0⟩</text>
      <text x="540" y="114" fontSize="10" fontWeight="700" fill="#f97316">~50% |1⟩</text>
      <text x="540" y="132" fontSize="10" fill="var(--text-secondary)">corr. |1⟩</text>

      {/* Step labels */}
      <text x="150" y="178" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">1. H cria (|0⟩+|1⟩)/√2</text>
      <text x="280" y="178" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">2. CNOT cria entanglement</text>
      <text x="482" y="178" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">3. Medicao colapsa para |00⟩ ou |11⟩</text>

      <rect x="620" y="44" width="90" height="130" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="665" y="64" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">Resultados</text>
      <text x="665" y="82" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">'00': 50%</text>
      <text x="665" y="100" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">'11': 50%</text>
      <text x="665" y="118" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">'01': 0%</text>
      <text x="665" y="134" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">'10': 0%</text>
      <text x="665" y="150" textAnchor="middle" fontSize="8" fill="#f97316">Prova do</text>
      <text x="665" y="162" textAnchor="middle" fontSize="8" fill="#f97316">entanglement</text>
    </svg>
  );
}

export default function QAI1() {
  return (
    <div style={S.page}>
      <Link to="/quantum-ai" style={S.back}><ArrowLeft size={16} /> Quantum AI</Link>
      <div style={S.tag}>Module 01</div>
      <h1 style={S.h1}>Fundamentos de Computacao Quantica</h1>
      <p style={S.lead}>
        A computacao quantica explora fenomenos da mecanica quantica — superposicao, entanglement e interferencia —
        para processar informacao de formas impossíveis para computadores classicos. Um sistema de 300 qubits
        representa simultaneamente 2^300 estados — mais que os atomos do universo observavel.
        Qiskit, Cirq e PennyLane sao os frameworks que tornam estes conceitos programaveis hoje.
      </p>

      <section style={S.section}>
        <h2 style={S.h2}>1. Qubit e Bloch Sphere</h2>
        <BlochSphereSVG />
        <h3 style={S.h3}>Estado quantico e medicao</h3>
        <p style={S.p}>
          O bit classico e 0 ou 1. O <strong>qubit</strong> (quantum bit) pode estar em superposicao:
          uma combinacao linear dos estados base |0⟩ e |1⟩ com amplitudes complexas alpha e beta.
          A medicao colapsa este estado: a probabilidade de obter 0 e |alpha|^2 e de obter 1 e |beta|^2.
        </p>
        <div style={S.highlight}>
          <strong>Estado geral:</strong> |psi⟩ = alpha|0⟩ + beta|1⟩, com |alpha|^2 + |beta|^2 = 1
          <br /><strong>Forma parametrica (Bloch):</strong> |psi⟩ = cos(theta/2)|0⟩ + e^(i*phi)*sin(theta/2)|1⟩
          <br /><strong>Exemplos:</strong> |0⟩ (polo norte), |1⟩ (polo sul), |+⟩=(|0⟩+|1⟩)/sqrt(2) (equador, phi=0)
          <br /><strong>Nota critica:</strong> a superposicao nao significa paralelismo — o poder quantico
          vem da interferencia controlada que amplifica as respostas correctas.
        </div>
        <p style={S.p}>
          A Bloch sphere e a representacao geometrica completa do espaco de estados de um qubit puro.
          Cada ponto na superficie representa um estado valido. Estados mistos (qubit decoerente que
          perdeu a sua superposicao por interaccao com o ambiente) ficam no interior da esfera —
          razao pela qual a decoerencia e o maior desafio do hardware quantico actual.
        </p>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>2. Portas Quanticas</h2>
        <QuantumGatesSVG />
        <h3 style={S.h3}>Universalidade e reversibilidade</h3>
        <p style={S.p}>
          As portas quanticas sao operacoes unitarias (U†U = I) que transformam o estado dos qubits.
          A reversibilidade e uma propriedade fundamental: qualquer circuito quantico pode ser executado
          ao contrario — em contraste com a computacao classica irreversivel (ex: porta AND apaga informacao).
        </p>
        <div style={S.highlight}>
          <strong>Teorema de Solovay-Kitaev:</strong> o conjunto {'{'} H, T, CNOT {'}'} e universal —
          qualquer operacao unitaria U(2^n) pode ser aproximada com erro menor que epsilon usando
          O(log^c(1/epsilon)) portas deste conjunto. Em pratica: circuitos com 100-1000 portas
          para algoritmos uteis em NISQ era.
        </div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Porta</th><th style={S.th}>Qubits</th><th style={S.th}>Efeito na Bloch Sphere</th><th style={S.th}>Fidelidade tipica (IBM)</th></tr></thead>
          <tbody>
            {[
              ['Hadamard (H)', '1', 'Rotacao 90° eixo z + 180° eixo x', '99.9%'],
              ['Pauli-X (NOT)', '1', 'Rotacao 180° em torno do eixo x', '99.95%'],
              ['Pauli-Z', '1', 'Rotacao 180° em torno do eixo z', '99.95%'],
              ['T (pi/8)', '1', 'Rotacao de fase pi/4 em torno de z', '99.8%'],
              ['S (sqrt(Z))', '1', 'Rotacao de fase pi/2', '99.9%'],
              ['CNOT (CX)', '2', 'Flip target se control=|1⟩', '99.0–99.5%'],
              ['Rz(theta)', '1', 'Rotacao arbitraria em torno de z', '~100% (virtual)'],
            ].map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={S.td}>{c}</td>)}</tr>)}
          </tbody>
        </table>
        <div style={S.note}>
          Rz(theta) e implementado como virtual gate (nao ha pulso de micro-ondas fisico — apenas
          muda o frame de referencia do software). Por isso tem fidelidade ~100% e e preferida em circuitos VQC.
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>3. Entanglement e Estados de Bell</h2>
        <BellCircuitSVG />
        <div style={S.highlight}>
          <strong>4 Estados de Bell (base de entanglement maximo para 2 qubits):</strong>
          <br />|phi+⟩ = (|00⟩ + |11⟩)/sqrt(2) — correlacao perfeita
          <br />|phi-⟩ = (|00⟩ - |11⟩)/sqrt(2) — correlacao com fase
          <br />|psi+⟩ = (|01⟩ + |10⟩)/sqrt(2) — anti-correlacao
          <br />|psi-⟩ = (|01⟩ - |10⟩)/sqrt(2) — singleto (usado em QKD)
        </div>
        <p style={S.p}>
          O entanglement viola as <strong>desigualdades de Bell</strong> (1964): nao ha modelo de
          "variaveis ocultas locais" que reproduza as correlacoes quanticas. Aspect et al. (1982)
          demonstraram experimentalmente que a mecanica quantica e genuinamente nao-local.
          O <strong>quantum teleportation</strong> (Bennett et al. 1993) usa entanglement + 2 bits
          classicos para transferir o estado de um qubit — sem violar a relatividade.
        </p>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>4. Decoerencia e Metricas de Circuito</h2>
        <div style={S.highlight}>
          <strong>T1 (energia/relaxation time):</strong> tempo medio para um qubit em |1⟩ relaxar para |0⟩.
          Em IBM Eagle r3 (2023): T1 ~ 200-400 microsegundos.
          <br /><strong>T2 (decoerencia/dephasing time):</strong> tempo para a fase da superposicao se perder.
          IBM Eagle r3: T2 ~ 100-300 microsegundos. T2 &lt;= 2*T1.
          <br /><strong>Profundidade de circuito:</strong> numero de camadas sequenciais de portas. Circuitos com
          profundidade &gt; 100 em hardware NISQ actual sao dominados pelo ruido.
          <br /><strong>CNOT error rate:</strong> metrica chave — IBM Falcon: ~1%; IBM Eagle: ~0.5%;
          Google Sycamore: ~0.6%.
        </div>
        <p style={S.p}>
          A <strong>decoerencia</strong> ocorre quando o qubit interage com o ambiente termico ou
          eletromagnetico, colapsando a superposicao nao-intencionalmente. A solucao a longo prazo e
          a <strong>Quantum Error Correction (QEC)</strong>: codificar 1 qubit logico em multiplos
          qubits fisicos (codigo de superficie: ~1000 qubits fisicos por qubit logico com taxa de
          erro 10^-3 para atingir taxa logica de 10^-6).
        </p>
        <div style={S.note}>
          Sintese: |psi⟩ = alpha|0⟩ + beta|1⟩ na Bloch sphere. Portas = operacoes unitarias (H, X, Z, T, CNOT).
          CNOT com H cria estados de Bell. Decoerencia limita a profundidade de circuito util
          em hardware NISQ (T1/T2 ~ 100-400 microsegundos em ibm_eagle).
          Conjunto universal {'{H, T, CNOT}'} pelo teorema de Solovay-Kitaev.
        </div>
      </section>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Qubit e Bloch Sphere</strong> — um qubit é uma superposição |ψ⟩ = α|0⟩ + β|1⟩ com |α|²+|β|² = 1; a Bloch Sphere representa geometricamente todos os estados puros de um qubit — rotações na esfera correspondem a portas quânticas; medição projecta irreversivelmente para |0⟩ ou |1⟩.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Portas Quanticas</strong> — portas quânticas são matrizes unitárias que manipulam estados de qubits: H (Hadamard) cria superposição; X (NOT) flip; CNOT cria emaranhamento entre dois qubits; qualquer circuito quântico é uma composição de portas de 1 e 2 qubits — analogia com portas lógicas clássicas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Entanglement e Estados de Bell</strong> — emaranhamento é correlação quântica sem análogo clássico: medir um qubit colapsa instantaneamente o estado do seu par; estados de Bell (4 estados maximamente emaranhados) são recursos para teleportação quântica, criptografia QKD e quantum error correction.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Decoerencia e Metricas de Circuito</strong> — decoerência é a perda de informação quântica para o ambiente, limitando a profundidade de circuitos executáveis; métricas: T1 (tempo de relaxação de energia), T2 (tempo de coerência de fase), gate fidelity e quantum volume (métrica holística da IBM).</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
