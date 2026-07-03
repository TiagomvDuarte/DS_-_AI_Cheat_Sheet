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

function HardwareComparisonSVG() {
  const processors = [
    { name: 'IBM Eagle r3\n(2023)', qubits: 127, t1: 300, t2: 200, cnot: 0.5, color: '#f97316' },
    { name: 'IBM Condor\n(2023)', qubits: 1121, t1: 250, t2: 150, cnot: 0.6, color: color },
    { name: 'Google Sycamore\n(2019)', qubits: 53, t1: 30, t2: 15, cnot: 0.6, color: '#f97316' },
    { name: 'Google Willow\n(2024)', qubits: 105, t1: 100, t2: 80, cnot: 0.15, color: '#f97316' },
    { name: 'IonQ Aria\n(2023)', qubits: 25, t1: 100000, t2: 10000, cnot: 0.4, color: '#f97316' },
  ];

  return (
    <svg viewBox="0 0 720 300" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Comparacao de Processadores Quanticos (2024)</text>

      {/* Qubits bar chart */}
      <text x="360" y="38" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-secondary)">Numero de Qubits Fisicos</text>
      {processors.map((p, i) => {
        const x = 44 + i * 130;
        const maxQ = 1121;
        const h = (p.qubits / maxQ) * 100;
        return (
          <g key={i}>
            <rect x={x} y={152 - h} width="80" height={h} rx="4" fill={p.color} fillOpacity="0.65" />
            <text x={x + 40} y={152 - h - 5} textAnchor="middle" fontSize="10" fontWeight="700" fill={p.color}>{p.qubits}</text>
            {p.name.split('\n').map((l, li) => (
              <text key={li} x={x + 40} y={168 + li * 14} textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">{l}</text>
            ))}
          </g>
        );
      })}
      <line x1="30" y1="152" x2="690" y2="152" stroke="var(--text-secondary)" strokeWidth="1" />

      {/* CNOT error rate */}
      <text x="360" y="204" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-secondary)">Taxa de Erro CNOT (%)</text>
      {processors.map((p, i) => {
        const x = 44 + i * 130;
        const w = p.cnot * 120;
        return (
          <g key={i}>
            <rect x={x} y="212" width={w} height="16" rx="3" fill={p.color} fillOpacity="0.6" />
            <text x={x + w + 3} y="224" fontSize="9" fill={p.color}>{p.cnot}%</text>
          </g>
        );
      })}

      <rect x="30" y="272" width="660" height="24" rx="4" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="284" textAnchor="middle" fontSize="9" fontWeight="700" fill={color}>IonQ Aria: T1~100ms (1000x mais que superconductores) mas taxa de operacao muito mais lenta (~kHz vs ~GHz).</text>
      <text x="360" y="294" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Google Willow (2024): 105 qubits, CNOT error 0.15% — demonstrou Quantum Error Correction abaixo do threshold.</text>
    </svg>
  );
}

function QubitTechSVG() {
  const techs = [
    { name: 'Superconductor', temp: '~15 mK',     t1: '100-400 µs', gates: '~100 ns', connectivity: 'Nearest-neighbour', scalable: 'Alto',     users: 'IBM, Google, Rigetti' },
    { name: 'Ion Trap',       temp: 'Temp. amb.',  t1: '~100 s',     gates: '~100 µs', connectivity: 'All-to-all',         scalable: 'Moderado', users: 'IonQ, Quantinuum' },
    { name: 'Photonic',       temp: 'Temp. amb.',  t1: 'N/A (fótons)',gates: '~ps',    connectivity: 'Alta',               scalable: 'Alto',     users: 'PsiQuantum, Xanadu' },
    { name: 'Neutral Atom',   temp: '~µK',         t1: '~10 s',      gates: '~µs',    connectivity: 'Reconfigurável',     scalable: 'Alto',     users: 'QuEra, Pasqal' },
  ];
  const headers = ['Tecnologia', 'Temp.', 'T1 (coerência)', 'T porta', 'Conectividade', 'Escala', 'Empresas'];
  const xs = [10, 140, 235, 345, 425, 555, 640];
  return (
    <svg viewBox="0 0 820 310" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="410" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Tecnologias de Qubit — Comparação de Plataformas</text>
      {headers.map((h, i) => (
        <text key={i} x={xs[i]} y="44" fontSize="9" fontWeight="700" fill="var(--text-secondary)">{h}</text>
      ))}
      {techs.map((t, ri) => {
        const y = 58 + ri * 54;
        const vals = [t.name, t.temp, t.t1, t.gates, t.connectivity, t.scalable, t.users];
        return (
          <g key={ri}>
            <rect x="8" y={y} width="804" height="48" rx="6" fill={color} fillOpacity="0.04" stroke={color} strokeWidth="0.8" strokeOpacity="0.3" />
            {vals.map((v, ci) => (
              <text key={ci} x={xs[ci]} y={y + 20} fontSize="9" fontWeight={ci === 0 ? '700' : '400'} fill={ci === 0 ? color : 'var(--text-primary)'}>{v}</text>
            ))}
          </g>
        );
      })}
      <rect x="20" y="284" width="780" height="22" rx="4" fill="rgba(249,115,22,0.10)" />
      <text x="410" y="296" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Supercondutores dominam em nº de qubits e velocidade; ion traps dominam em fidelidade e coerência. Futuro: modular + interligação quântica entre chips.</text>
    </svg>
  );
}

function QECSvg() {
  return (
    <svg viewBox="0 0 720 290" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Quantum Error Correction — Código de Superfície (Surface Code)</text>

      {/* 5×5 qubit grid — row spacing 28px so bottom row ends at 42+4*28+13=167 */}
      {Array.from({ length: 5 }, (_, r) => Array.from({ length: 5 }, (_, c) => {
        const isData = (r + c) % 2 === 0;
        const x = 28 + c * 44, y = 42 + r * 28;
        const fill = isData ? color : '#fb923c';
        return (
          <g key={`${r}-${c}`}>
            <circle cx={x} cy={y} r="12" fill={fill} fillOpacity={isData ? 0.75 : 0.4} stroke={fill} strokeWidth="1.2" />
            <text x={x} y={y + 4} textAnchor="middle" fontSize="8" fontWeight="700" fill="white">{isData ? 'D' : 'S'}</text>
          </g>
        );
      }))}

      {/* D / S legend */}
      <circle cx="28" cy="195" r="8" fill={color} fillOpacity="0.75" stroke={color} strokeWidth="1" />
      <text x="40" y="199" fontSize="8" fill="var(--text-secondary)">Data qubit</text>
      <circle cx="110" cy="195" r="8" fill="#fb923c" fillOpacity="0.4" stroke="#fb923c" strokeWidth="1" />
      <text x="122" y="199" fontSize="8" fill="var(--text-secondary)">Estabilizador</text>

      {/* 1 logical qubit box */}
      <rect x="270" y="36" width="66" height="110" rx="6" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="2" />
      <text x="303" y="60" textAnchor="middle" fontSize="9" fontWeight="700" fill={color}>1 qubit</text>
      <text x="303" y="74" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">lógico</text>

      <text x="410" y="96" textAnchor="middle" fontSize="18" fill={color}>≈</text>
      <text x="410" y="114" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">codificado em</text>

      {/* Right side physical qubits */}
      {[0,1,2,3].map(r => [0,1,2,3].map(c => (
        <circle key={`r${r}c${c}`} cx={468 + c * 22} cy={46 + r * 22} r="8"
          fill="#fb923c" fillOpacity="0.45" stroke={color} strokeWidth="0.8" />
      )))}
      <text x="512" y="140" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">~1000</text>
      <text x="512" y="152" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">qubits físicos</text>

      {/* Caption — starts at y=212, well below grid bottom (167) and legend (203) */}
      <rect x="20" y="212" width="680" height="60" rx="6" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="230" textAnchor="middle" fontSize="9.5" fontWeight="700" fill={color}>Surface Code: threshold de erro físico p_th ~ 1% (supercondutores: p ~ 0.5% — abaixo do threshold!).</text>
      <text x="360" y="248" textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">Google Willow (2024): demonstrou QEC abaixo do threshold pela 1ª vez — cada camada de QEC reduz o erro.</text>
      <text x="360" y="264" textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">RSA-2048 exige ~4000 qubits lógicos = ~4 milhões de qubits físicos.</text>
    </svg>
  );
}

export default function QAI4() {
  return (
    <div style={S.page}>
      <Link to="/quantum-ai" style={S.back}><ArrowLeft size={16} /> Quantum AI</Link>
      <div style={S.tag}>Module 04</div>
      <h1 style={S.h1}>Hardware Quantico</h1>
      <p style={S.lead}>
        O hardware quantico e a camada fisica que implementa qubits e portas. Superconductores (IBM, Google),
        ion traps (IonQ, Quantinuum), atomos neutros (QuEra) e fotonica (PsiQuantum) sao as plataformas
        competidoras. Google Willow (2024) demonstrou Quantum Error Correction abaixo do threshold
        pela primeira vez — marco crucial rumo a computacao quantica fault-tolerant.
      </p>

      <section style={S.section}>
        <h2 style={S.h2}>1. Comparacao de Processadores (2024)</h2>
        <HardwareComparisonSVG />
        <h3 style={S.h3}>Qubits superconductores: mecanismo fisico</h3>
        <p style={S.p}>
          Os qubits superconductores (transmon) sao circuitos LC em regime quantico arrefecidos a
          ~15 mK (mais frios que o espaco interestelar). O transmon usa a nao-linearidade da
          juncao Josephson para criar um sistema anharmonico com dois niveis energeticos acessiveis.
          Portas sao implementadas com pulsos de micro-ondas calibrados ao MHz.
        </p>
        <div style={S.highlight}>
          <strong>IBM Eagle r3 (2023) — especificacoes:</strong>
          <br />• 127 qubits fisicos, topologia heavy-hex
          <br />• T1 (energia): 200-400 microsegundos; T2 (decoerencia): 100-300 microsegundos
          <br />• Fidelidade de porta 1Q: 99.9%; CNOT fidelidade: 99.0-99.5%
          <br />• Quantum Volume: 128 (metrica holistica de qualidade do processador)
          <br />• Clock: portas de 1Q ~100ns; CNOT ~400ns
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>2. Plataformas de Qubit</h2>
        <QubitTechSVG />
        <h3 style={S.h3}>Ion Traps vs Superconductores</h3>
        <p style={S.p}>
          <strong>Ion traps</strong> (IonQ Aria, Quantinuum H2): qubits sao ioes individuais
          aprisionados por campos electromagneticos e manipulados com lasers. Vantagens: T1 ~100 segundos
          (1000x mais longo que superconductores), conectividade all-to-all (qualquer par de qubits
          pode interagir directamente), fidelidade CNOT ate 99.8%. Desvantagem: velocidade de operacao
          muito mais lenta (~100 microsegundos por porta vs ~100ns em superconductores).
        </p>
        <p style={S.p}>
          <strong>Atomos neutros</strong> (QuEra Aquila, Pasqal): atoms individuais aprisionados
          com tweezers opticos. Topologia reconfiguravel em tempo real — os qubits podem ser
          movidos fisicamente. QuEra demonstrou 48 qubits logicos em 2023 usando codigo de
          superficie — recorde de qubits logicos a data.
        </p>
        <div style={S.highlight}>
          <strong>Quantum Volume (IBM metrica):</strong> QV = max(m) tal que para circuito m x m
          aleatorio, a taxa de sucesso &gt; 2/3. QV = 2^m captura qubits, conectividade e fidelidade.
          IBM Eagle: QV = 128 (m=7). Alternativas: CLOPS (velocidade), Randomized Benchmarking.
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>3. Quantum Error Correction</h2>
        <QECSvg />
        <p style={S.p}>
          QEC e o caminho para hardware fault-tolerant. O <strong>Surface Code</strong> e o mais
          promissor: organiza qubits numa grelha 2D com qubits de dados (D) e de sindrome (S).
          Os sindrome qubits detectam erros sem colapsar o estado logico (medicoes de Pauli produto).
          Quando a taxa de erro fisico p &lt; p_threshold (~1%), adicionar mais qubits fisicos
          por qubit logico reduz a taxa de erro logico exponencialmente.
        </p>
        <div style={S.highlight}>
          <strong>Google Willow (Nature 2024):</strong> 105 qubits superconductores, demonstrou
          que ao aumentar o tamanho do codigo de superficie de 3x3 para 5x5 para 7x7, a taxa de
          erro logico diminuiu em cada passo — pela primeira vez abaixo do threshold.
          Realizou tambem um calculo de amostragem de circuito aleatorio em 5 minutos que
          demoraria 10^25 anos num supercomputador classico (Frontier, ORNL).
        </div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Marco</th><th style={S.th}>Empresa</th><th style={S.th}>Ano</th><th style={S.th}>Significado</th></tr></thead>
          <tbody>
            {[
              ['53 qubits, "quantum supremacy"', 'Google (Sycamore)', '2019', 'Primeiro calculo intratavel para classicos (RCS)'],
              ['Eagle 127 qubits', 'IBM', '2021', 'Primeiro processador &gt;100 qubits com heavy-hex'],
              ['Osprey 433 qubits', 'IBM', '2022', 'Maior superconductor funcional a data'],
              ['Condor 1121 qubits', 'IBM', '2023', 'Primeiro processador &gt;1000 qubits'],
              ['48 qubits logicos', 'QuEra (Harvard)', '2023', 'Recorde qubits logicos — atomos neutros'],
              ['Willow QEC below threshold', 'Google', '2024', 'Primeiro QEC escalonavel demonstrado'],
            ].map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={S.td}>{c}</td>)}</tr>)}
          </tbody>
        </table>
        <div style={S.note}>
          Sintese: superconductores dominam em qubits e velocidade; ion traps dominam em coerencia
          e fidelidade. Quantum Volume e CLOPS sao metricas holisticas. Surface Code e o caminho
          para QEC: threshold ~1%, Google Willow demonstrou escalonamento abaixo do threshold em 2024.
          RSA-2048 ainda exige ~4 milhoes de qubits fisicos — decadas de distancia.
        </div>
      </section>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>4. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Comparacao de Processadores (2024)</strong> — IBM Heron (133 qubits, 99.9% 2-qubit gate fidelity), Google Willow (105 qubits, below-threshold error correction), IonQ (trapped ions, 99.9% fidelity com &lt;30 qubits) e Quantinuum H2 lideram em diferentes métricas — não há consenso sobre qual plataforma escalará para fault-tolerant.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Plataformas de Qubit</strong> — superconductores (IBM, Google) operam a 15mK com portas rápidas (~50ns) mas decoerência baixa; iões aprisionados (IonQ, Quantinuum) têm coerência muito superior mas portas mais lentas; fotónica (PsiQuantum) aposta em room-temperature com erro diferente — cada plataforma tem trade-offs fundamentais.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Quantum Error Correction</strong> — QEC codifica 1 qubit lógico em múltiplos físicos para detectar e corrigir erros; Código de Shor (9 qubits), Código de Steane (7 qubits) e Código de Superfície (distância d requer d² qubits) são os principais; threshold de erro físico &lt;1% é necessário para QEC eficaz — Google Willow demonstrou below-threshold em 2024.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
