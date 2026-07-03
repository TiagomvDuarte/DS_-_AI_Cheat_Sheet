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

function BB84SVG() {
  const steps = [
    { alice: '|0>', basis: 'Z', bob: 'Z', result: 'Match', bit: '0', color: '#f97316' },
    { alice: '|+>', basis: 'X', bob: 'Z', result: 'Mismatch', bit: '—', color: '#fb923c' },
    { alice: '|1>', basis: 'Z', bob: 'Z', result: 'Match', bit: '1', color: '#f97316' },
    { alice: '|m>', basis: 'X', bob: 'X', result: 'Match', bit: '1', color: '#f97316' },
    { alice: '|+>', basis: 'X', bob: 'X', result: 'Match', bit: '0', color: '#f97316' },
    { alice: '|1>', basis: 'Z', bob: 'X', result: 'Mismatch', bit: '—', color: '#fb923c' },
  ];

  return (
    <svg viewBox="0 0 720 310" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Protocolo BB84 — Distribuicao de Chave Quantica</text>

      {/* Alice box */}
      <rect x="20" y="38" width="100" height="200" rx="8" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="1.5" />
      <text x="70" y="58" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Alice</text>
      <text x="70" y="74" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">envia fotoes</text>

      {/* Bob box */}
      <rect x="600" y="38" width="100" height="200" rx="8" fill="#f97316" fillOpacity="0.08" stroke="#f97316" strokeWidth="1.5" />
      <text x="650" y="58" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Bob</text>
      <text x="650" y="74" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">mede fotoes</text>

      {/* Channel */}
      <rect x="140" y="50" width="420" height="24" rx="4" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" strokeDasharray="4 2" />
      <text x="350" y="66" textAnchor="middle" fontSize="9" fill={color}>Canal quantico (fibra optica / ar livre)</text>

      {/* Steps */}
      {steps.map((s, i) => {
        const y = 88 + i * 24;
        return (
          <g key={i}>
            <text x="70" y={y} textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>{s.alice}</text>
            <text x="180" y={y} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">base {s.basis}</text>
            <line x1="210" y1={y - 6} x2="470" y2={y - 6} stroke={s.color} strokeWidth="1" strokeDasharray="3 2" />
            <text x="510" y={y} textAnchor="middle" fontSize="9" fontWeight="700" fill={s.color}>{s.result}</text>
            <text x="570" y={y} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">base {s.bob}</text>
            <text x="650" y={y} textAnchor="middle" fontSize="10" fontWeight="700" fill={s.color}>{s.bit}</text>
          </g>
        );
      })}

      {/* Classical channel for basis reconciliation */}
      <rect x="140" y="248" width="420" height="20" rx="4" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1" />
      <text x="350" y="262" textAnchor="middle" fontSize="9" fill="#f97316">Canal classico publico: reconciliacao de bases (Alice e Bob revelam bases, nao bits)</text>

      {/* Sifted key */}
      <rect x="140" y="280" width="420" height="28" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="350" y="290" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">Chave filtrada (sifted key): bits onde bases coincidem</text>
      <text x="350" y="302" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Exemplo acima: {'{'}0, 1, 1, 0{'}'} — eficiencia tipica 50% (BB84 standard)</text>
    </svg>
  );
}

function QKDSecuritySVG() {
  return (
    <svg viewBox="0 0 720 260" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Deteccao de Eve — Principio da Nao-Clonagem Quantica</text>

      {/* Without Eve */}
      <rect x="20" y="38" width="300" height="100" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="170" y="58" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Sem Espiao (Eve)</text>
      <text x="50" y="80" fontSize="9" fill="var(--text-secondary)">Alice envia |+⟩ (base X)</text>
      <text x="50" y="96" fontSize="9" fill="var(--text-secondary)">Bob mede com base X</text>
      <text x="50" y="112" fontSize="9" fill="#f97316">Resultado correcto: |+⟩ com P=1</text>
      <text x="50" y="128" fontSize="9" fill="#f97316">QBER ~ 0% (apenas ruido canal)</text>

      {/* With Eve */}
      <rect x="400" y="38" width="300" height="100" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="550" y="58" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Com Espiao (Eve)</text>
      <text x="430" y="80" fontSize="9" fill="var(--text-secondary)">Alice envia |+⟩ (base X)</text>
      <text x="430" y="96" fontSize="9" fill="var(--text-secondary)">Eve mede com base Z: obtem |0⟩ ou |1⟩</text>
      <text x="430" y="112" fontSize="9" fill="#f97316">Eve reencaminha o estado colapsado</text>
      <text x="430" y="128" fontSize="9" fill="#f97316">Bob detecta erro: QBER ~ 25%</text>

      {/* No-cloning theorem */}
      <rect x="20" y="152" width="680" height="50" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="360" y="172" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Teorema da Nao-Clonagem (Wootters & Zurek, 1982)</text>
      <text x="360" y="190" textAnchor="middle" fontSize="9" fill="var(--text-primary)">E impossivel criar uma copia perfeita de um estado quantico desconhecido: nao existe operador unitario U tal que U|psi⟩|0⟩ = |psi⟩|psi⟩ para todo |psi⟩.</text>

      {/* QBER threshold */}
      <rect x="20" y="214" width="680" height="40" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="360" y="230" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">Limiar de seguranca BB84: QBER &lt; 11% (com correcao de erros e privacy amplification)</text>
      <text x="360" y="246" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">QBER = Quantum Bit Error Rate. Acima de 11%: Eve esta presente OU canal tem demasiado ruido — abortar protocolo.</text>
    </svg>
  );
}

function QuantumNetworkSVG() {
  const nodes = [
    { label: 'Beijing', x: 150, y: 100, color: '#f97316' },
    { label: 'Jinan', x: 300, y: 60, color: '#f97316' },
    { label: 'Hefei', x: 420, y: 130, color: '#f97316' },
    { label: 'Shanghai', x: 540, y: 90, color: '#f97316' },
    { label: 'Micius\n(satelite)', x: 340, y: 185, color: color },
  ];
  const edges = [[0,1],[1,2],[2,3],[1,4],[2,4],[3,4]];

  return (
    <svg viewBox="0 0 720 290" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Rede QKD da China — Beijing-Shanghai Trunk Line + Satelite Micius</text>

      {/* Edge lines */}
      {edges.map(([a, b], i) => (
        <line key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke={color} strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray={b === 4 ? "6 3" : "none"} />
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={i === 4 ? 30 : 26} fill="var(--bg-secondary)" />
          <circle cx={n.x} cy={n.y} r={i === 4 ? 30 : 26} fill={n.color} fillOpacity="0.15" stroke={n.color} strokeWidth="2" />
          {n.label.split('\n').map((l, li) => (
            <text key={li} x={n.x} y={n.y + (li - (n.label.includes('\n') ? 0.5 : 0)) * 14 + 4}
              textAnchor="middle" fontSize={i === 4 ? 8.5 : 10} fontWeight="700" fill={n.color}>{l}</text>
          ))}
        </g>
      ))}

      {/* Stats panel */}
      <rect x="575" y="38" width="138" height="170" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" strokeOpacity="0.4" />
      <text x="644" y="57" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>Estatísticas</text>
      {[
        ['Extensão total:', '2000 km'],
        ['Nós de relay:', '32'],
        ['Taxa de chave:', '~10 kbps'],
        ['Altitude satélite:', '500 km'],
        ['Distância sat.:', '~1200 km'],
        ['Protocolo:', 'BB84 + E91'],
        ['Operacional:', 'desde 2017'],
      ].map(([k, v], i) => (
        <g key={i}>
          <text x="583" y={74 + i * 20} fontSize="8" fill="var(--text-secondary)">{k} <tspan fontWeight="700" fill={color}>{v}</tspan></text>
        </g>
      ))}

      {/* Europe note */}
      <rect x="20" y="218" width="540" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="290" y="236" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">Quantum Internet Alliance (UE) — EuroQCI</text>
      <text x="290" y="252" textAnchor="middle" fontSize="9" fill="var(--text-primary)">Meta: rede quântica pan-europeia ate 2030. QuNet (Alemanha): 3 nos em Berlim, Bonn, Frankfurt</text>
      <text x="290" y="268" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">com fibra dedicada + nos de repeticao quanticos. BT (UK): rede metropolitana QKD em Londres (2023).</text>
    </svg>
  );
}

function PQCvQKDsvg() {
  const compare = [
    { aspect: 'Fundamento seguranca', pqc: 'Dificuldade computacional (lattices, hashes)', qkd: 'Leis da fisica (mecanica quantica)' },
    { aspect: 'Seguranca contra QC', pqc: 'Conjectural (nao provado formalmente)', qkd: 'Provada incondicionalmente (informacao teorica)' },
    { aspect: 'Hardware necessario', pqc: 'Classico (software drop-in)', qkd: 'Hardware quantico especializado' },
    { aspect: 'Distancia maxima', pqc: 'Ilimitada (rede classica)', qkd: '~400km (fibra); 1200km (satelite)' },
    { aspect: 'Taxa de chave', pqc: 'Gbps (software)', qkd: '~10 kbps - 1 Mbps' },
    { aspect: 'Custo de deploy', pqc: 'Muito baixo (software)', qkd: 'Alto (infra-estrutura dedicada)' },
    { aspect: 'Maturidade', pqc: 'NIST padrao 2024 (pronto)', qkd: 'Redes piloto; nao padronizado globalmente' },
    { aspect: 'Protecao "harvest now"', pqc: 'Sim (migrar antes do QC)', qkd: 'Sim (imediatamente seguro)' },
  ];
  return (
    <svg viewBox="0 0 720 310" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Post-Quantum Crypto vs. QKD — Estrategias de Seguranca</text>
      {['Aspecto', 'Post-Quantum Crypto (PQC)', 'QKD'].map((h, i) => (
        <text key={i} x={[10, 215, 480][i]} y="40" fontSize="9" fontWeight="700" fill="var(--text-secondary)">{h}</text>
      ))}
      {compare.map((r, i) => {
        const y = 48 + i * 30;
        return (
          <g key={i}>
            <rect x="8" y={y} width="704" height="26" rx="4"
              fill={i % 2 === 0 ? 'rgba(249,115,22,0.10)' : 'transparent'} />
            <text x="12" y={y + 17} fontSize="9" fontWeight="600" fill={color}>{r.aspect}</text>
            <text x="218" y={y + 17} fontSize="8.5" fill="var(--text-primary)">{r.pqc}</text>
            <text x="484" y={y + 17} fontSize="8.5" fill="var(--text-primary)">{r.qkd}</text>
          </g>
        );
      })}
      <rect x="8" y="290" width="704" height="16" rx="4" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="301" textAnchor="middle" fontSize="9" fill={color}>Consenso: PQC ja hoje (NIST 2024); QKD complementa em contextos de alta seguranca (governo, financas, infra critica) quando distancia o permite.</text>
    </svg>
  );
}

export default function QAI6() {
  return (
    <div style={S.page}>
      <Link to="/quantum-ai" style={S.back}><ArrowLeft size={16} /> Quantum AI</Link>
      <div style={S.tag}>Module 06</div>
      <h1 style={S.h1}>Criptografia Quantica & Quantum Internet</h1>
      <p style={S.lead}>
        A criptografia quantica e a aplicacao mais madura da computacao quantica — ja em producao.
        QKD (Quantum Key Distribution) garante seguranca informacao-teorica baseada nas leis da fisica,
        nao em dificuldade computacional. A China opera a maior rede QKD do mundo (2000 km + satelite Micius).
        A Quantum Internet promete redes de entanglement distribuido para comunicacao e computacao globais.
      </p>

      <section style={S.section}>
        <h2 style={S.h2}>1. Protocolo BB84 (Bennett & Brassard, 1984)</h2>
        <BB84SVG />
        <h3 style={S.h3}>Mecanismo e seguranca</h3>
        <p style={S.p}>
          BB84 foi o primeiro protocolo QKD — publicado 40 anos antes de qualquer computador
          quantico pratico. Alice envia fotoes polarizados em 4 estados usando 2 bases
          (Z: {'{'}|0⟩,|1⟩{'}'} e X: {'{'}|+⟩,|-⟩{'}'}). Bob mede com base escolhida aleatoriamente.
          Depois, revelam as bases usadas (nao os bits) por canal classico publico —
          ficando apenas com os bits onde as bases coincidem (sifted key, ~50%).
        </p>
        <div style={S.highlight}>
          <strong>Pipeline completo de QKD:</strong>
          <br />1. <strong>Quantum transmission:</strong> Alice envia N fotoes; Bob mede com bases aleatorias
          <br />2. <strong>Sifting:</strong> revelacao de bases por canal classico; descarte de ~50% dos bits
          <br />3. <strong>Error estimation:</strong> sacrificam subset de bits para estimar QBER
          <br />4. <strong>Error correction:</strong> protocolos como Cascade ou LDPC para corrigir erros sem revelar bits
          <br />5. <strong>Privacy amplification:</strong> hash universal da sifted key para destruir qualquer informacao parcial de Eve
          <br />6. <strong>Authentication:</strong> canal classico autenticado com MAC para prevenir man-in-the-middle
        </div>

      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>2. Seguranca e Deteccao de Espionagem</h2>
        <QKDSecuritySVG />
        <h3 style={S.h3}>Protocolo E91 (Ekert, 1991) — baseado em entanglement</h3>
        <p style={S.p}>
          E91 usa pares de Bell entangled distribuidos entre Alice e Bob. A seguranca e verificada
          pela <strong>desigualdade de Bell CHSH</strong>: se S = |E(a,b) - E(a,b') + E(a',b) + E(a',b')| = 2sqrt(2),
          as correlacoes sao genuinamente quanticas e Eve nao pode ter intercedido sem perturbacao
          detectavel. Se S &lt; 2sqrt(2), o canal foi comprometido.
        </p>
        <div style={S.highlight}>
          <strong>Device-Independent QKD (DI-QKD):</strong> extensao de E91 onde a seguranca
          e garantida mesmo que os dispositivos de Alice e Bob sejam "caixas negras" nao confiadas —
          a seguranca vem exclusivamente da violacao de Bell. Hanson et al. (Nature 2022)
          demonstraram o primeiro sistema DI-QKD a 1.65 km com chave de 6.4 bits/s.
          DI-QKD elimina side-channel attacks no hardware — considerado o "Santo Graal" do QKD.
        </div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Protocolo</th><th style={S.th}>Fundamento</th><th style={S.th}>Eficiencia</th><th style={S.th}>Seguranca</th></tr></thead>
          <tbody>
            {[
              ['BB84', 'Polarizacao de fotoes (4 estados)', '~50% (2 bases)', 'Provada incondicionalmente'],
              ['B92', 'Apenas 2 estados nao-ortogonais', '~25%', 'Provada, menos eficiente'],
              ['E91', 'Pares EPR entangled + Bell test', '~25-50%', 'Provada + verificacao Bell'],
              ['MDI-QKD', 'Measurement-device independent', '~1-10%', 'Elimina ataques no detector'],
              ['DI-QKD', 'Device-independent (Bell test)', '~0.1%', 'Maxima: dispositivos nao confiados'],
              ['CV-QKD', 'Quadraturas de campo (variaveis continuas)', 'Alta', 'Compativel com infra optica existente'],
            ].map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={S.td}>{c}</td>)}</tr>)}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>3. Redes QKD em Producao</h2>
        <QuantumNetworkSVG />
        <h3 style={S.h3}>Satelite Micius e quantum repeaters</h3>
        <p style={S.p}>
          O principal obstaculo ao QKD em longas distancias e a atenuacao em fibra optica:
          a amplitude do foton decresce como e^(-alpha*L), tornando comunicacao directa
          impraticavel alem de ~400 km. As solucoes sao:
        </p>
        <div style={S.highlight}>
          <strong>Trusted nodes (relay classico):</strong> a abordagem actual da rede Beijing-Shanghai.
          Cada no relay recebe a chave e re-encripta para o proximo segmento — mas o no
          precisa de ser fisicamente seguro (trusted). 32 nos relay ao longo de 2000 km.
          Micius (satelite LEO a 500 km) distribuiu entanglement entre Delft e Beijing
          em 2022 (Pan Jianwei, Science 2022) — distancia de 7600 km.
        </div>
        <div style={S.highlight}>
          <strong>Quantum Repeaters (tecnologia futura):</strong> usam entanglement swapping
          e quantum memories para distribuir entanglement sem nodes trusted.
          Entanglement swapping: se A-B entangled e B-C entangled, medindo B em base de Bell
          cria-se entanglement A-C sem B conhecer as chaves.
          Quantum memories (NV centers em diamante, atomos frios) podem armazenar
          estados quanticos por milissegundos — suficiente para sincronizar redes de ~100 km.
          Loophole-free Bell test em Delft (Hensen et al. 2015) a 1.3 km usou NV centers
          como base para futuros repeaters.
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>4. PQC vs QKD — Estrategia de Seguranca</h2>
        <PQCvQKDsvg />
        <h3 style={S.h3}>"Harvest Now, Decrypt Later" — a ameaca presente</h3>
        <p style={S.p}>
          Estados e organizacoes adversarias estao a recolher dados encriptados hoje
          para desencriptar quando computadores quanticos estiverem disponiveis —
          estimado para 2030-2040. Dados com sensibilidade de longo prazo (segredos
          de Estado, propriedade intelectual, dados medicos) sao vulneraveis agora.
        </p>
        <div style={S.highlight}>
          <strong>NIST Post-Quantum Cryptography (Agosto 2024):</strong>
          <br />• <strong>CRYSTALS-Kyber (ML-KEM):</strong> Key Encapsulation Mechanism — substitui ECDH/DH. Baseado em Module Learning With Errors (MLWE). Chaves publicas ~800 bytes.
          <br />• <strong>CRYSTALS-Dilithium (ML-DSA):</strong> assinaturas digitais — substitui ECDSA. Assinaturas ~2400 bytes.
          <br />• <strong>SPHINCS+ (SLH-DSA):</strong> assinaturas hash-based — sem assuncoes algébricas, mais conservador.
          <br />• <strong>FALCON (FN-DSA):</strong> assinaturas NTRU lattice — mais compacto.
          <br />TLS 1.3 e SSH ja tem drafts IETF com Kyber para hybrid key exchange (classico + PQC em paralelo).
        </div>
        <div style={S.note}>
          Sintese: BB84 — protocolo QKD original (1984), QBER &lt;11% garante seguranca.
          Teorema da nao-clonagem impede Eve de copiar fotoes sem perturbar. E91 usa pares Bell
          + desigualdade CHSH. DI-QKD (Hanson 2022): maxima seguranca, dispositivos nao confiados.
          China: rede 2000 km + satelite Micius. Quantum repeaters com NV centers sao o futuro
          da Quantum Internet. PQC (NIST 2024) e a resposta pragmatica imediata; QKD complementa
          em contextos de alta seguranca com infra-estrutura dedicada.
        </div>
      </section>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Protocolo BB84 (Bennett & Brassard, 1984)</strong> — BB84 distribui chaves criptográficas usando polarização de fotões individuais; qualquer intercepção perturba o estado quântico (princípio da incerteza) e é detectável; garante segurança information-theoretic (provada matematicamente) — independente da capacidade computacional do adversário.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Seguranca e Deteccao de Espionagem</strong> — em QKD, eavesdropping é detectado por aumento da Quantum Bit Error Rate (QBER) acima de ~11%; Alice e Bob realizam error reconciliation e privacy amplification para destillar uma chave segura mesmo com erros de canal — teorema no-cloning garante que fotões não podem ser copiados sem perturbação.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Redes QKD em Producao</strong> — China tem 4600km de rede QKD (Pequim-Xangai); Toshiba e ID Quantique fornecem equipamento comercial; ESA testa QKD via satélite (EAGLE-1, 2024); integração em redes de fibra óptica standard com QKD repeaters é o principal desafio de escalabilidade actual.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>PQC vs QKD — Estrategia de Seguranca</strong> — PQC (Post-Quantum Cryptography) — algoritmos clássicos resistentes a computadores quânticos (NIST 2024: CRYSTALS-Kyber, Dilithium) — é mais prático e barato de implementar via software; QKD é mais seguro mas requer hardware dedicado e é limitado por distância (~100km por canal).</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
