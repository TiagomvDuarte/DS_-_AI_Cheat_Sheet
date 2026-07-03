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

function SpeedupSVG() {
  const algos = [
    { name: 'Grover', classH: 110, quantH: 50, speedup: 'Quadrático O(sqrt(N))', app: 'Busca / SAT' },
    { name: 'Shor',   classH: 155, quantH: 16, speedup: 'Exponencial O(n³)',     app: 'Fatorização RSA' },
    { name: 'HHL',    classH: 155, quantH: 20, speedup: 'Expo (cond. QRAM)',     app: 'Sist. lineares' },
    { name: 'QAOA',   classH: 90,  quantH: 68, speedup: 'Heurístico NISQ',       app: 'Otimização' },
    { name: 'VQE',    classH: 155, quantH: 32, speedup: 'Exponencial (química)', app: 'Química quânt.' },
  ];
  const baseline = 230, top = 55;
  return (
    <svg viewBox="0 0 720 305" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Speedup Quântico — Complexidade Clássica vs. Quântica</text>
      <text x="360" y="36" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Altura das barras proporcional ao custo computacional (menor = mais eficiente)</text>
      {algos.map((a, i) => {
        const cx = 70 + i * 130;
        return (
          <g key={i}>
            <rect x={cx} y={baseline - a.classH} width={38} height={a.classH} rx="3" fill="#fb923c" fillOpacity="0.35" />
            <text x={cx + 19} y={baseline - a.classH - 6} textAnchor="middle" fontSize="7.5" fill="#fb923c">Cl.</text>
            <rect x={cx + 44} y={baseline - a.quantH} width={38} height={a.quantH} rx="3" fill={color} fillOpacity="0.75" />
            <text x={cx + 63} y={baseline - a.quantH - 6} textAnchor="middle" fontSize="7.5" fill={color}>Q.</text>
            <text x={cx + 41} y={baseline + 16} textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>{a.name}</text>
            <text x={cx + 41} y={baseline + 29} textAnchor="middle" fontSize="7.5" fill="var(--text-secondary)">{a.app}</text>
            <text x={cx + 41} y={baseline + 42} textAnchor="middle" fontSize="7.5" fill={color}>{a.speedup}</text>
          </g>
        );
      })}
      <line x1="30" y1={baseline} x2="690" y2={baseline} stroke="var(--text-secondary)" strokeWidth="1" />
      <rect x="30" y="288" width="660" height="12" rx="4" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="297" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Tang 2019 (dequantization): HHL speedup exponencial só existe com acessó QRAM — recursó que não existe em hardware real. Reduz a speedup polinomial sem QRAM.</text>
    </svg>
  );
}

function GroverSVG() {
  return (
    <svg viewBox="0 0 720 220" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Grover — Amplificação de Amplitude em sqrt(N) iterações</text>

      {/* N=8, 3 qubits: show amplitude of target item across iterations */}
      {[0,1,2,3].map(k => {
        const x = 60 + k * 160;
        const prob = [0.125, 0.531, 0.945, 0.776][k];
        const otherProb = (1 - prob) / 7;
        const H = 120;
        return (
          <g key={k}>
            <text x={x + 70} y="42" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>k={k} iterações</text>
            {[0,1,2,3,4,5,6,7].map(j => {
              const isTarget = j === 0;
              const p = isTarget ? prob : otherProb;
              const h = p * H * (isTarget ? 1 : 6);
              return (
                <rect key={j} x={x + j * 16} y={160 - h} width={14} height={h} rx="1"
                  fill={isTarget ? '#f97316' : '#94a3b8'} fillOpacity={isTarget ? 0.8 : 0.4} />
              );
            })}
            <text x={x + 70} y="175" textAnchor="middle" fontSize="9" fill="#f97316">P(alvo)={Math.round(prob*100)}%</text>
            <line x1={x} y1="160" x2={x + 128} y2="160" stroke="var(--text-secondary)" strokeWidth="0.8" />
          </g>
        );
      })}

      <rect x="30" y="190" width="660" height="25" rx="6" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="202" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>N=8 itens: otimo = ceil(pi/4 * sqrt(8)) = 2-3 iterações. Oracle inverte fase do alvo; Diffusion amplifica.</text>
      <text x="360" y="213" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Generaliza para qualquer oracle: busca em BD, inversão de função hash (parcial), verificacao de SAT.</text>
    </svg>
  );
}

function ShorSVG() {
  const steps = [
    { label: '1. Escolhe a', sub: 'gcd(a,N)=1', c: '#fb923c', x: 20,  type: 'clássico' },
    { label: '2. QFT',       sub: 'period finding\na^x mod N', c: color, x: 190, type: 'QUÂNTICO' },
    { label: '3. Medição',   sub: 'extrai r por\ninterferência', c: color, x: 360, type: 'QUÂNTICO' },
    { label: '4. Factors',   sub: 'gcd(a^(r/2)±1, N)\n= p, q', c: '#fb923c', x: 530, type: 'clássico' },
  ];
  return (
    <svg viewBox="0 0 720 220" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <defs>
        <marker id="arrshor" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L0,8 L8,4 z" fill={color} />
        </marker>
      </defs>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Algoritmo de Shor — Pipeline de Fatorização</text>
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="38" width="155" height="100" rx="8" fill={s.c} fillOpacity="0.08" stroke={s.c} strokeWidth="1.5" />
          <text x={s.x + 77} y="66" textAnchor="middle" fontSize="11" fontWeight="700" fill={s.c}>{s.label}</text>
          {s.sub.split('\n').map((line, li) => (
            <text key={li} x={s.x + 77} y={86 + li * 16} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{line}</text>
          ))}
          <text x={s.x + 77} y="128" textAnchor="middle" fontSize="8" fill={s.c}>{s.type}</text>
          {i < 3 && <line x1={s.x + 155} y1="88" x2={s.x + 187} y2="88" stroke={color} strokeWidth="2" markerEnd="url(#arrshor)" />}
        </g>
      ))}
      <rect x="20" y="154" width="680" height="58" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" strokeOpacity="0.4" />
      <text x="360" y="174" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Impacto Criptográfico</text>
      <text x="360" y="192" textAnchor="middle" fontSize="9" fill="var(--text-primary)">RSA-2048 clássico: &gt;10^13 anos com GNFS. Shor quântico: horas com ~4000 qubits lógicos (Weber et al. 2022).</text>
      <text x="360" y="206" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">NIST PQC 2024: CRYSTALS-Kyber (KEM) + CRYSTALS-Dilithium (assinaturas) — resistentes a Shor — baseados em LWE lattice.</text>
    </svg>
  );
}

export default function QAI2() {
  return (
    <div style={S.page}>
      <Link to="/quantum-ai" style={S.back}><ArrowLeft size={16} /> Quantum AI</Link>
      <div style={S.tag}>Module 02</div>
      <h1 style={S.h1}>Algoritmos Quânticos</h1>
      <p style={S.lead}>
        Os algoritmos quânticos exploram superposicao, entanglement e interferencia para resolver
        problemas com vantagem computacional. Grover oferece speedup quadratico em busca não-estruturada;
        Shor factoriza inteiros em tempo polinomial, quebrando RSA; QAOA e VQE são algoritmos variativos
        da era NISQ para otimização e simulação química.
      </p>

      <section style={S.section}>
        <h2 style={S.h2}>1. Panorama de Speedup Quântico</h2>
        <SpeedupSVG />
        <div style={S.highlight}>
          <strong>Tipos de vantagem quântica:</strong>
          <br />• <strong>Exponencial garantido:</strong> Shor (fatorização), HHL (sistemas lineares com QRAM) — exige hardware fault-tolerant (milhoes de qubits físicos)
          <br />• <strong>Quadratico garantido:</strong> Grover — aplica-se a qualquer oracle; provadamente optimo para busca não-estruturada
          <br />• <strong>Heurístico NISQ:</strong> QAOA, VQE — sem prova formal de speedup; potencialmente útil em hardware de 100-1000 qubits
          <br />• <strong>Dequantization (Tang 2019):</strong> varios speedups exponenciais assumidos foram "dequantizados" — o speedup real dependia de acessó QRAM, não de quântica
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>2. Algoritmo de Grover (1996)</h2>
        <GroverSVG />
        <h3 style={S.h3}>Oracle, Diffusion e número de iterações</h3>
        <div style={S.highlight}>
          <strong>Mecanismo de amplificação de amplitude:</strong>
          <br />1. |s⟩ = H^n|0...0⟩ — superposicao uniforme: cada estado com amplitude 1/sqrt(N)
          <br />2. Oracle U_f: U_f|x⟩ = (-1)^f(x)|x⟩ — inverte fase do estado solucao
          <br />3. Diffusion D = 2|s⟩⟨s| - I — reflexao em torno do estado medio (amplifica o alvo)
          <br />4. Repetir t = ceil(pi/4 * sqrt(N/M)) vezes (M = num. solucoes)
          <br />Probabilidade de sucesso: sin^2((2t+1) * arcsin(sqrt(M/N))) ≈ 1 - O(M/N)
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>3. Algoritmo de Shor (1994)</h2>
        <ShorSVG />
        <h3 style={S.h3}>QFT e period finding</h3>
        <p style={S.p}>
          O núcleo quântico de Shor e a <strong>Quantum Fourier Transform (QFT)</strong> para encontrar
          o período r da função f(x) = a^x mod N. Com r, a fatorização e imediata:
          p = gcd(a^(r/2) - 1, N) e q = gcd(a^(r/2) + 1, N).
        </p>
        <div style={S.highlight}>
          <strong>QFT:</strong> QFT|x⟩ = (1/sqrt(N)) * sum_k e^(2*pi*i*x*k/N) |k⟩
          <br />Implementação: O(n^2) portas quânticas vs O(n*2^n) para DFT clássica.
          Mas: QFT não acede directamente aos coeficientes — o resultado e acessivel
          apenas via medição (interferencia quântica amplifica o período).
          <br /><strong>Complexidade total:</strong> O(n^3 log n log log n) onde n = log(N) — polinomial!
        </div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Algoritmo</th><th style={S.th}>Problema</th><th style={S.th}>Complexidade clássica</th><th style={S.th}>Complexidade quântica</th></tr></thead>
          <tbody>
            {[
              ['Shor', 'Fatorização N', 'O(exp(n^(1/3) log^(2/3) n))', 'O(n^3 log n)'],
              ['Shor generalizado', 'Log. discreto DH/ECC', 'O(exp(n^(1/3)))', 'O(n^3)'],
              ['Grover (clássico equiv.)', 'Busca não-estruturada', 'O(N)', 'O(sqrt(N))'],
              ['HHL', 'Ax=b (com QRAM)', 'O(N * kappa * log(1/eps))', 'O(log(N) * kappa^2 / eps)'],
            ].map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={S.td}>{c}</td>)}</tr>)}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>4. QAOA — Algoritmo Variacional para Otimização</h2>
        <div style={S.highlight}>
          <strong>QAOA (Farhi, Goldstone, Gutmann 2014):</strong> para problema de otimização com hamiltoniano C:
          <br />|gamma,beta⟩ = prod_k [U(B,beta_k) U(C,gamma_k)] * |+...+⟩
          <br />Onde U(C,gamma) = e^(-i*gamma*C) e U(B,beta) = e^(-i*beta*B), B = sum_i X_i
          <br />Optimiza {'{gamma_k, beta_k}'} clássicamente (COBYLA, BFGS) para minimizar ⟨C⟩.
          <br />Para profundidade p grande, QAOA converge para a solucao optima (mas circuito cresce).
        </div>
        <div style={S.note}>
          Sintese: Grover O(sqrt(N)) — speedup quadratico garantido para qualquer oracle.
          Shor O(n^3) — quebra RSA/ECC; NIST PQC (Kyber + Dilithium) e a resposta.
          QAOA — variacional NISQ para Max-Cut e otimização combinatoria; sem garantia de speedup
          sobre clássico em problemas praticos, mas area de investigacao activa.
        </div>
      </section>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Panorama de Speedup Quântico</strong> — speedup quântico é provado para problemas específicos: Shor (factorização: exponencial vs. sub-exponencial), Grover (busca: quadrático), simulação quântica (exponencial); para ML o speedup teórico existe mas dequantização clássica frequentemente elimina a vantagem prática.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Algoritmo de Grover (1996)</strong> — Grover permite busca num conjunto de N elementos não ordenados em O(√N) operações vs. O(N) clássico; o speedup quadrático é óptimo para busca não estruturada; usado como sub-rotina em algoritmos quânticos de optimização e criptanálise.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Algoritmo de Shor (1994)</strong> — Shor factoriza inteiros em tempo polinomial quântico (vs. sub-exponencial clássico com GNFS); quebra RSA-2048 com ~4000 qubits lógicos error-corrected — motivação principal para criptografia pós-quântica; ainda requer milhões de qubits físicos para implementação real.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>QAOA — Algoritmo Variacional para Otimização</strong> — QAOA (Quantum Approximate Optimization Algorithm) é um algoritmo variacional híbrido clássico-quântico para problemas de optimização combinatória (MaxCut, TSP); profundidade p controla qualidade da solução; em era NISQ, p≤3 é prático mas a vantagem sobre heurísticas clássicas não está demonstrada.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
