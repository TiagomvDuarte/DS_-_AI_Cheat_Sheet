import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

// === Diagram: Autoencoder hourglass with numeric example ===
const AEDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Arquitectura de um Autoencoder — forma de "ampulheta"</p>
    <svg viewBox="0 0 560 220" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="aearr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
      </defs>
      {/* Input layer */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle key={`in${i}`} cx={50} cy={20 + i * 32} r="9" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      ))}
      <text x="50" y="208" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Input x (6-dim)</text>

      {/* Encoder hidden layer */}
      {[0, 1, 2, 3].map((i) => (
        <circle key={`h1${i}`} cx={170} cy={44 + i * 44} r="9" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      ))}
      <text x="170" y="208" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Encoder (4)</text>

      {/* Bottleneck */}
      {[0, 1].map((i) => (
        <circle key={`z${i}`} cx={280} cy={84 + i * 50} r="11" fill="#f97316" stroke="#f97316" strokeWidth="1.5" />
      ))}
      <text x="280" y="208" textAnchor="middle" fill="#f97316" fontWeight="700" fontSize="10">Latente z (2-dim)</text>

      {/* Decoder hidden layer */}
      {[0, 1, 2, 3].map((i) => (
        <circle key={`h2${i}`} cx={390} cy={44 + i * 44} r="9" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      ))}
      <text x="390" y="208" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Decoder (4)</text>

      {/* Output layer */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle key={`out${i}`} cx={510} cy={20 + i * 32} r="9" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      ))}
      <text x="510" y="208" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Output x̂ (6-dim)</text>

      {/* Connections (sparse representative lines) */}
      {[0, 1, 2, 3, 4, 5].flatMap((i) => [0, 1, 2, 3].map((j) => (
        <line key={`l1-${i}-${j}`} x1={59} y1={20 + i * 32} x2={161} y2={44 + j * 44} stroke="#ffffff" strokeWidth="0.5" opacity="0.25" />
      )))}
      {[0, 1, 2, 3].flatMap((i) => [0, 1].map((j) => (
        <line key={`l2-${i}-${j}`} x1={179} y1={44 + i * 44} x2={269} y2={84 + j * 50} stroke="#ffffff" strokeWidth="0.5" opacity="0.25" />
      )))}
      {[0, 1].flatMap((i) => [0, 1, 2, 3].map((j) => (
        <line key={`l3-${i}-${j}`} x1={291} y1={84 + i * 50} x2={381} y2={44 + j * 44} stroke="#ffffff" strokeWidth="0.5" opacity="0.25" />
      )))}
      {[0, 1, 2, 3].flatMap((i) => [0, 1, 2, 3, 4, 5].map((j) => (
        <line key={`l4-${i}-${j}`} x1={399} y1={44 + i * 44} x2={501} y2={20 + j * 32} stroke="#ffffff" strokeWidth="0.5" opacity="0.25" />
      )))}

      {/* Bracket labels */}
      <text x="110" y="10" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Encoder</text>
      <text x="450" y="10" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Decoder</text>
      <line x1="295" y1="6" x2="295" y2="214" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,3" />
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      O encoder comprime progressivamente a informação até ao <strong>bottleneck</strong> (espaço latente z, aqui com apenas 2 dimensões).
      O decoder faz o caminho inverso, expandindo z até reconstruir um vector x̂ com a mesma forma de x.
    </p>
  </div>
);

// === Diagram: numeric reconstruction example table ===
const ReconstructionTable = () => (
  <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
    <table style={S.table}>
      <thead>
        <tr><th style={S.th}>Componente</th><th style={S.th}>x₁</th><th style={S.th}>x₂</th><th style={S.th}>x₃</th><th style={S.th}>x₄</th><th style={S.th}>x₅</th><th style={S.th}>x₆</th></tr>
      </thead>
      <tbody>
        <tr>
          <td style={S.td}><strong>Input x</strong></td>
          <td style={S.td}>0.90</td><td style={S.td}>0.10</td><td style={S.td}>0.85</td><td style={S.td}>0.05</td><td style={S.td}>0.80</td><td style={S.td}>0.15</td>
        </tr>
        <tr>
          <td style={S.td}><strong>Reconstrução x̂</strong></td>
          <td style={S.td}>0.87</td><td style={S.td}>0.12</td><td style={S.td}>0.83</td><td style={S.td}>0.09</td><td style={S.td}>0.78</td><td style={S.td}>0.18</td>
        </tr>
        <tr>
          <td style={S.td}><strong>Erro (x − x̂)²</strong></td>
          <td style={S.td}>0.0009</td><td style={S.td}>0.0004</td><td style={S.td}>0.0004</td><td style={S.td}>0.0016</td><td style={S.td}>0.0004</td><td style={S.td}>0.0009</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// === Diagram: Denoising AE ===
const DenoisingDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Denoising Autoencoder</p>
    <svg viewBox="0 0 560 130" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="dnarr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
      </defs>
      {/* x clean */}
      <rect x="10" y="35" width="90" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="55" y="60" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">x (limpo)</text>
      <text x="55" y="78" textAnchor="middle" fill="#f97316" fontSize="9">dado original</text>

      <line x1="100" y1="65" x2="135" y2="65" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#dnarr)" />
      <text x="117" y="55" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">+ ruído</text>

      {/* x̃ corrupted */}
      <rect x="140" y="35" width="100" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="190" y="60" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">x̃ (corrompido)</text>
      <text x="190" y="78" textAnchor="middle" fill="#f97316" fontSize="9">input da rede</text>

      <line x1="245" y1="65" x2="280" y2="65" stroke="#f97316" strokeWidth="1.2" markerEnd="url(#dnarr)" />

      {/* Encoder/decoder block */}
      <rect x="285" y="20" width="130" height="90" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="350" y="50" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Encoder</text>
      <text x="350" y="68" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">→ z →</text>
      <text x="350" y="86" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Decoder</text>

      <line x1="420" y1="65" x2="455" y2="65" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#dnarr)" />

      {/* x̂ reconstructed clean */}
      <rect x="460" y="35" width="95" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="507" y="60" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">x̂ (limpo)</text>
      <text x="507" y="78" textAnchor="middle" fill="#f97316" fontSize="9">target = x original</text>

      <text x="280" y="120" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Loss = ‖x − x̂‖² — compara com o original LIMPO, não com x̃</text>
    </svg>
  </div>
);

// === Diagram: Sparse AE activations ===
const SparseDiagram = () => {
  const dense = [0.62, 0.71, 0.55, 0.68, 0.59, 0.74, 0.63, 0.58];
  const sparse = [0.02, 0.85, 0.01, 0.03, 0.91, 0.02, 0.01, 0.04];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Sparse Autoencoder — activações no espaço latente</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>AE comum — quase todos os neurónios "disparam"</p>
          {dense.map((v, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
              <span style={{ width: 28, fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>z{i + 1}</span>
              <div style={{ flex: 1, height: 14, background: 'var(--bg-primary)', borderRadius: 7, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${v * 100}%`, background: '#f97316', borderRadius: 7 }} />
              </div>
              <span style={{ width: 36, fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>{v.toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Sparse AE — penalidade força activações ≈ 0</p>
          {sparse.map((v, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
              <span style={{ width: 28, fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>z{i + 1}</span>
              <div style={{ flex: 1, height: 14, background: 'var(--bg-primary)', borderRadius: 7, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${v * 100}%`, background: v > 0.5 ? '#f97316' : '#f97316', borderRadius: 7 }} />
              </div>
              <span style={{ width: 36, fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>{v.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
        Apenas z₂ e z₅ ficam activos para esta entrada — cada neurónio especializa-se num "conceito" raro,
        tornando a representação mais interpretável (semelhante a um dicionário esparso de features).
      </p>
    </div>
  );
};

// === Diagram: AE point vs VAE distribution ===
const PointVsDistributionDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>AE: encoder → ponto vs. VAE: encoder → distribuição</p>
    <svg viewBox="0 0 560 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="pvarr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      {/* AE side */}
      <text x="140" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="12" fontWeight="700">Autoencoder vanilla</text>
      <rect x="40" y="40" width="100" height="50" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="90" y="70" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Encoder</text>
      <line x1="140" y1="65" x2="180" y2="65" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#pvarr)" />
      <circle cx="200" cy="65" r="6" fill="#f97316" />
      <text x="200" y="95" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">z = ponto único</text>
      <text x="200" y="110" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">(determinístico)</text>

      {/* divider */}
      <line x1="280" y1="10" x2="280" y2="170" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,3" />

      {/* VAE side */}
      <text x="420" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="12" fontWeight="700">VAE</text>
      <rect x="320" y="40" width="100" height="50" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="370" y="70" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Encoder</text>
      <line x1="420" y1="65" x2="460" y2="65" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#pvarr)" />
      {/* Gaussian bump */}
      <path d="M 460 90 Q 490 30 520 90" fill="none" stroke="#f97316" strokeWidth="2" />
      <line x1="490" y1="90" x2="490" y2="60" stroke="#f97316" strokeWidth="1" strokeDasharray="2,2" />
      <text x="490" y="105" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">μ</text>
      <text x="490" y="125" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">N(μ, σ²) = distribuição</text>
      <text x="490" y="140" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">(amostra-se z desta gaussiana)</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      No AE vanilla cada input mapeia para <em>um único ponto</em> z. No VAE, o encoder produz dois vectores —
      a média μ e o desvio-padrão σ — que definem uma distribuição Gaussiana de onde z é amostrado.
    </p>
  </div>
);

// === Diagram: reparametrization trick ===
const ReparamDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Reparametrization Trick</p>
    <svg viewBox="0 0 560 170" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="rparr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
        <marker id="rparrRed" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
      </defs>
      {/* Without trick */}
      <text x="140" y="18" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">Sem reparametrização</text>
      <rect x="30" y="35" width="90" height="40" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="75" y="60" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">μ, σ</text>
      <line x1="120" y1="55" x2="160" y2="55" stroke="#f97316" strokeWidth="1.2" markerEnd="url(#rparrRed)" />
      <ellipse cx="195" cy="55" rx="38" ry="25" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,2" />
      <text x="195" y="50" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">z ~ N(μ,σ²)</text>
      <text x="195" y="64" textAnchor="middle" fill="#f97316" fontSize="9">amostragem</text>
      <line x1="233" y1="55" x2="273" y2="55" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#rparr)" />
      <rect x="278" y="35" width="80" height="40" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="318" y="60" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Decoder</text>
      <text x="195" y="100" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">✗ não há gradiente através do "amostrar"</text>
      <text x="195" y="116" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">backprop não pode atravessar um nó estocástico</text>

      <line x1="0" y1="135" x2="560" y2="135" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,3" />

      {/* With trick */}
      <text x="140" y="155" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">Com reparametrização: z = μ + σ·ε</text>
    </svg>
    <div style={{ marginTop: '0.5rem' }}>
      <svg viewBox="0 0 560 110" style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="rparrGreen" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
          </marker>
          <marker id="rparrOrange" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b" />
          </marker>
        </defs>
        <rect x="20" y="30" width="90" height="40" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
        <text x="65" y="55" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">μ, σ</text>
        <text x="65" y="22" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">caminho com gradiente</text>

        <rect x="20" y="80" width="90" height="28" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3,2" />
        <text x="65" y="98" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">ε ~ N(0,I)</text>

        <ellipse cx="225" cy="50" rx="55" ry="28" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
        <text x="225" y="46" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">z = μ + σ·ε</text>
        <text x="225" y="59" textAnchor="middle" fill="#f97316" fontSize="9">determinístico em μ,σ</text>

        <line x1="110" y1="50" x2="177" y2="50" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#rparrGreen)" />
        <line x1="110" y1="94" x2="207" y2="76" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#rparrOrange)" />

        <line x1="273" y1="50" x2="330" y2="50" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#rparrGreen)" />
        <rect x="335" y="30" width="90" height="40" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
        <text x="380" y="55" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Decoder</text>

        <text x="255" y="100" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">∂z/∂μ = 1, ∂z/∂σ = ε → gradiente flui livremente para μ e σ</text>
      </svg>
    </div>
  </div>
);

// === Diagram: latent space organization comparison ===
const LatentSpaceDiagram = () => {
  const aePoints = [
    [60, 50, '#f97316'], [75, 55, '#f97316'], [65, 65, '#f97316'],
    [200, 30, '#f97316'], [215, 25, '#f97316'],
    [120, 130, '#f97316'], [135, 140, '#f97316'], [110, 150, '#f97316'],
    [240, 110, '#f97316'],
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Espaço latente: AE vanilla (disperso) vs VAE (suave e contínuo)</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div>
          <svg viewBox="0 0 280 180" style={{ maxWidth: '100%', height: 'auto', background: 'var(--bg-primary)', borderRadius: 8 }}>
            {aePoints.map(([x, y, c], i) => <circle key={i} cx={x} cy={y} r="6" fill={c} opacity="0.8" />)}
            {/* gaps / holes */}
            <text x="170" y="95" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontStyle="italic">"buraco"</text>
            <circle cx="170" cy="75" r="22" fill="none" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,3" />
            <text x="140" y="170" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">clusters isolados, regiões vazias sem significado</text>
          </svg>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>AE vanilla: amostrar um z aleatório de uma região vazia produz um output sem sentido.</p>
        </div>
        <div>
          <svg viewBox="0 0 280 180" style={{ maxWidth: '100%', height: 'auto', background: 'var(--bg-primary)', borderRadius: 8 }}>
            <defs>
              <radialGradient id="vaeGrad" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.02" />
              </radialGradient>
              <marker id="lsarr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
              </marker>
            </defs>
            <circle cx="140" cy="90" r="80" fill="url(#vaeGrad)" />
            {[[100, 60, '#f97316'], [115, 70, '#f97316'], [105, 80, '#f97316'], [180, 100, '#f97316'], [190, 110, '#f97316'], [175, 120, '#f97316']].map(([x, y, c], i) => (
              <circle key={i} cx={x} cy={y} r="6" fill={c} opacity="0.85" />
            ))}
            {/* interpolation path */}
            <line x1="105" y1="80" x2="180" y2="100" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#lsarr)" />
            <circle cx="142" cy="90" r="5" fill="#f97316" />
            <text x="162" y="78" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">z interpolado</text>
            <text x="140" y="170" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">denso, contínuo — todo o espaço é "decodificável"</text>
          </svg>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>VAE: a regularização KL preenche o espaço — qualquer z ~ N(0,I) decodifica algo plausível.</p>
        </div>
      </div>
    </div>
  );
};

// === Diagram: interpolation example ===
const InterpolationDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Interpolação no espaço latente: de "0" a "8"</p>
    <svg viewBox="0 0 600 100" style={{ maxWidth: '100%', height: 'auto' }}>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const t = i / 6;
        const cx = 50 + i * 85;
        return (
          <g key={i}>
            <rect x={cx - 30} y="10" width="60" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" opacity={0.4 + 0.6 * (1 - Math.abs(t - 0.5) * 0.6)} />
            <text x={cx} y="45" textAnchor="middle" fill="#f97316" fontSize="20" fontWeight="700" opacity={0.4 + 0.6 * (1 - Math.abs(t - 0.5) * 0.6)}>
              {i === 0 ? '0' : i === 6 ? '8' : '~'}
            </text>
            <text x={cx} y="88" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">t={t.toFixed(2)}</text>
          </g>
        );
      })}
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      Calculando z(t) = (1−t)·z₀ + t·z₈ para t = 0, 1/6, ..., 1 e decodificando cada z(t),
      obtém-se uma sequência de imagens que transitam suavemente de "0" para "8" — prova de que o espaço latente é semanticamente contínuo.
    </p>
  </div>
);

export default function DL5() {
  return (
    <div style={S.page}>
      <Link to="/dl" style={S.back}><ArrowLeft size={16} /> Voltar a Deep Learning</Link>

      <div style={S.tag}>Module 05</div>
      <h1 style={S.h1}>Autoencoders &amp; VAEs</h1>
      <p style={S.lead}>
        Como é que uma rede neuronal aprende a "resumir" os dados sem qualquer label? Os <strong>autoencoders</strong> respondem
        a esta pergunta forçando a informação a passar por um gargalo — o espaço latente. Neste módulo construímos essa ideia
        do zero, exploramos variantes que adicionam robustez (denoising) e interpretabilidade (sparsity), e culminamos nos{' '}
        <strong>Variational Autoencoders</strong>, que transformam o espaço latente numa estrutura probabilística contínua,
        capaz de gerar dados novos por amostragem e interpolação.
      </p>

      {/* === SECTION 1: AE architecture === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Arquitectura: Encoder → Bottleneck → Decoder</h2>
        <p style={S.p}>
          Um autoencoder é uma rede treinada para uma tarefa aparentemente trivial: <strong>reproduzir o seu próprio input</strong>.
          O truque está na arquitectura — entre o input e o output existe um <strong>bottleneck</strong>, uma camada de dimensão
          muito menor que força os dados a passar por uma representação comprimida.
        </p>

        <AEDiagram />

        <p style={S.p}>
          O <strong>encoder</strong> é uma sequência de camadas que reduz progressivamente a dimensionalidade, até chegar ao
          vector latente z. O <strong>decoder</strong> é (tipicamente) a operação espelhada: expande z de volta até à dimensão
          original, produzindo x̂. O treino minimiza a diferença entre x e x̂ — o <strong>reconstruction loss</strong>.
        </p>

        <div style={S.math}>
          <BlockMath math={`\\mathcal{L}_{recon} = \\| x - \\hat{x} \\|^2 \\quad\\text{(MSE)} \\qquad \\text{ou} \\qquad \\mathcal{L}_{recon} = -\\sum_i x_i \\log \\hat{x}_i + (1-x_i)\\log(1-\\hat{x}_i) \\quad\\text{(BCE)}`} />
        </div>

        <h3 style={S.h3}>Exemplo numérico de reconstrução</h3>
        <p style={S.p}>
          Suponhamos um vector de input com 6 valores (por exemplo, pixels normalizados entre 0 e 1). O encoder comprime-o
          para apenas 2 valores latentes (z₁, z₂); o decoder reconstrói os 6 valores originais a partir desses 2 números:
        </p>
        <ReconstructionTable />
        <p style={S.p}>
          Apesar de z ter apenas <InlineMath math="2" /> dimensões — uma compressão de <InlineMath math="6 \to 2" />, ou seja
          3× — a reconstrução está muito próxima do original (erro quadrático médio ≈ 0.0008). Isto só é possível porque
          os 6 valores de x não são independentes: existe <strong>redundância e estrutura</strong> nos dados, e o encoder
          aprendeu a capturá-la em apenas duas "coordenadas" latentes.
        </p>

        <div style={S.highlight}>
          <strong>Porque é que o bottleneck força representações úteis?</strong>
          <p style={{ ...S.p, marginBottom: 0, marginTop: '0.5rem' }}>
            Se a rede tivesse z com a mesma dimensão de x (ou maior), a solução trivial seria a função identidade —
            copiar o input directamente, sem aprender nada de útil. Ao restringir z a uma dimensão muito inferior, a única
            forma de minimizar o erro de reconstrução é <strong>descobrir os factores latentes que explicam os dados</strong>:
            correlações entre pixels, formas, texturas, padrões recorrentes. O bottleneck é, em essência, uma forma de
            compressão com perdas aprendida automaticamente a partir dos dados.
          </p>
        </div>

        <h3 style={S.h3}>Autoencoder vs PCA</h3>
        <p style={S.p}>
          A <strong>Análise de Componentes Principais (PCA)</strong> resolve um problema semelhante — reduzir a dimensionalidade
          mantendo o máximo de variância — mas usando apenas transformações <strong>lineares</strong>. Um autoencoder com
          activações lineares e uma única camada latente é matematicamente equivalente ao subespaço gerado pela PCA.
          A diferença chave é que, ao introduzir camadas não-lineares (ReLU, tanh), o autoencoder pode aprender
          <strong> manifolds curvos</strong> — superfícies de dimensão reduzida embebidas no espaço de alta dimensão,
          algo que a PCA, sendo linear, não consegue capturar.
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Característica</th><th style={S.th}>PCA</th><th style={S.th}>Autoencoder</th></tr></thead>
            <tbody>
              {[
                ['Tipo de transformação', 'Linear (projecção ortogonal)', 'Não-linear (qualquer função aprendida)'],
                ['Estrutura capturada', 'Subespaço linear de máxima variância', 'Manifold não-linear'],
                ['Reversibilidade', 'Exacta (matriz ortogonal)', 'Aproximada (decoder aprendido)'],
                ['Custo computacional', 'Baixo (SVD/eigen-decomposição)', 'Alto (treino iterativo por gradiente)'],
                ['Interpretabilidade', 'Componentes ortogonais e ordenados', 'Dimensões latentes geralmente sem ordem clara'],
              ].map(([f, p, a]) => (
                <tr key={f}><td style={S.td}><strong>{f}</strong></td><td style={S.td}>{p}</td><td style={S.td}>{a}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={S.note}>
          Em <strong>anomaly detection</strong>, treina-se o autoencoder apenas com exemplos "normais". Em inferência,
          dados normais reconstroem-se bem (erro baixo), mas anomalias — que a rede nunca viu — reconstroem-se mal
          (erro alto). Define-se um threshold sobre o erro de reconstrução para sinalizar anomalias.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Denoising AE === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Denoising Autoencoders</h2>
        <p style={S.p}>
          Um autoencoder vanilla pode, em teoria, aprender a "memorizar" o input em vez de extrair estrutura — especialmente
          se o bottleneck não for suficientemente pequeno. O <strong>Denoising Autoencoder (DAE)</strong>, proposto por
          Vincent et al. (2008), resolve isto de forma elegante: corrompe-se o input artificialmente antes de o passar
          pela rede, mas o <em>target</em> continua a ser a versão limpa original.
        </p>

        <DenoisingDiagram />

        <p style={S.p}>
          A corrupção pode assumir várias formas: ruído Gaussiano aditivo, "salt-and-pepper" (pixels aleatórios postos
          a 0 ou 1), ou masking (zerar uma fracção aleatória das entradas). O importante é que a rede já não pode
          resolver a tarefa copiando — tem de <strong>inferir a informação em falta a partir do contexto</strong>.
        </p>

        <div style={S.highlight}>
          <strong>Porque é que isto produz features mais robustas?</strong>
          <p style={{ ...S.p, marginBottom: 0, marginTop: '0.5rem' }}>
            Para reconstruir x a partir de x̃ (corrompido), o encoder é forçado a aprender a <strong>estrutura estatística
            subjacente</strong> dos dados — relações entre regiões da imagem, dependências entre features — em vez de
            depender de qualquer pixel individual (que pode estar corrompido). O resultado são representações latentes
            que generalizam melhor e são menos sensíveis a pequenas perturbações ou ruído no input em produção.
            Esta ideia de "destruir e reconstruir" é também a base conceptual dos modelos de difusão modernos.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Sparse AE === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Sparse Autoencoders</h2>
        <p style={S.p}>
          Em vez de reduzir a dimensão de z, um <strong>Sparse Autoencoder</strong> pode até ter um espaço latente
          <em> maior</em> do que o input — mas adiciona uma penalidade que força a maioria das activações latentes a
          ficarem perto de zero para qualquer input. Apenas um pequeno subconjunto de neurónios "dispara" de cada vez.
        </p>

        <SparseDiagram />

        <p style={S.p}>
          A penalidade de sparsity é normalmente implementada de duas formas: uma penalização <InlineMath math="L_1" />
          directa sobre as activações médias, ou uma divergência KL entre a activação média observada
          <InlineMath math="\hat{\rho}_j" /> de cada neurónio j e um valor alvo baixo <InlineMath math="\rho" /> (ex: 0.05):
        </p>

        <div style={S.math}>
          <BlockMath math={`\\mathcal{L} = \\mathcal{L}_{recon} + \\beta \\sum_{j} \\text{KL}(\\rho \\,\\|\\, \\hat{\\rho}_j) \\qquad \\text{KL}(\\rho \\| \\hat{\\rho}_j) = \\rho \\log\\frac{\\rho}{\\hat{\\rho}_j} + (1-\\rho)\\log\\frac{1-\\rho}{1-\\hat{\\rho}_j}`} />
        </div>

        <p style={S.p}>
          O resultado é uma representação <strong>"dicionário"</strong>: cada neurónio latente especializa-se num padrão
          específico (uma aresta orientada, uma textura, um traço de uma letra), e qualquer input é descrito por uma
          combinação esparsa desses padrões — um pouco como descrever uma frase usando apenas algumas palavras de um
          dicionário muito grande, em vez de todas. Isto torna a representação mais interpretável e tem aplicações
          directas em <strong>feature learning</strong> e, mais recentemente, na interpretabilidade de redes neuronais
          (sparse autoencoders são usados para decompor activações de LLMs em "features" interpretáveis).
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: Latent space limitations === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Limitações do Espaço Latente de um AE Vanilla</h2>
        <p style={S.p}>
          O espaço latente de um autoencoder treinado apenas com reconstruction loss não tem qualquer garantia de
          estrutura global. Pontos que correspondem a inputs semelhantes podem ficar próximos, mas <strong>não há
          incentivo para que o espaço seja contínuo ou densamente preenchido</strong>.
        </p>

        <div style={S.highlight}>
          <strong>Problema fundamental para geração:</strong>
          <p style={{ ...S.p, marginBottom: 0, marginTop: '0.5rem' }}>
            Se quisermos usar o decoder como gerador — amostrar um z aleatório e decodificá-lo numa amostra nova —
            o AE vanilla falha. O espaço latente forma "ilhas" densas separadas por regiões vazias que a rede nunca
            viu durante o treino. Um z amostrado dessas regiões vazias produz outputs sem sentido (ruído, imagens
            distorcidas). Precisamos de uma forma de <strong>regularizar</strong> o espaço latente para que seja
            contínuo e bem distribuído — é exactamente isso que o VAE introduz.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: VAE === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Variational Autoencoders (VAE)</h2>
        <p style={S.p}>
          O VAE (Kingma &amp; Welling, 2013) resolve o problema do espaço latente desorganizado mudando radicalmente
          o que o encoder produz. Em vez de mapear x para um único ponto z, o encoder produz os <strong>parâmetros de
          uma distribuição</strong> — tipicamente uma Gaussiana, descrita por uma média μ e um desvio-padrão σ.
          A amostra z é então retirada dessa distribuição: <InlineMath math="z \sim \mathcal{N}(\mu, \sigma^2)" />.
        </p>

        <PointVsDistributionDiagram />

        <h3 style={S.h3}>A Evidence Lower Bound (ELBO)</h3>
        <p style={S.p}>
          Treinar um modelo gerador probabilístico exige maximizar a verosimilhança dos dados,{' '}
          <InlineMath math="p(x)" />, mas esse integral é intratável. O VAE contorna isto optimizando um limite
          inferior — a <strong>ELBO</strong> — que pode ser decomposto em dois termos com interpretações muito intuitivas:
        </p>

        <div style={S.math}>
          <BlockMath math={`\\log p(x) \\geq \\underbrace{\\mathbb{E}_{q(z|x)}\\left[\\log p(x|z)\\right]}_{\\text{termo de reconstrução}} \\;-\\; \\underbrace{D_{KL}\\big(q(z|x)\\,\\|\\,p(z)\\big)}_{\\text{termo de regularização}} \\;=\\; \\text{ELBO}`} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: '1px solid rgba(249,115,22,0.10)' }}>
            <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.5rem' }}>Termo de Reconstrução</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              <InlineMath math="\mathbb{E}_{q(z|x)}[\log p(x|z)]" /> mede quão bem o decoder reconstrói x a partir de
              uma amostra z tirada de q(z|x). Na prática é o mesmo MSE/BCE de um autoencoder normal — quer que x̂
              seja parecido com x.
            </p>
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: '1px solid rgba(249,115,22,0.10)' }}>
            <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.5rem' }}>Termo de Regularização (KL)</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              <InlineMath math="D_{KL}(q(z|x)\|p(z))" /> mede a distância entre a distribuição produzida pelo encoder
              e o prior <InlineMath math="p(z) = \mathcal{N}(0, I)" />. Penaliza distribuições que se afastam
              demasiado da Gaussiana standard — empurra todos os q(z|x) para uma região comum e contínua.
            </p>
          </div>
        </div>

        <p style={S.p}>
          Para o caso Gaussiano (q(z|x) = N(μ, σ²) e prior N(0, I)), a divergência KL tem uma forma fechada simples:
        </p>
        <div style={S.math}>
          <BlockMath math={`D_{KL}\\big(\\mathcal{N}(\\mu,\\sigma^2)\\,\\|\\,\\mathcal{N}(0,1)\\big) = \\frac{1}{2}\\sum_{j=1}^{d}\\left(\\sigma_j^2 + \\mu_j^2 - 1 - \\log\\sigma_j^2\\right)`} />
        </div>
        <p style={S.p}>
          Esta expressão é mínima (= 0) quando μ = 0 e σ = 1 — ou seja, quando q(z|x) coincide exactamente com o prior.
          Quanto mais a média se afasta de 0 ou o desvio-padrão se afasta de 1, maior a penalidade.
        </p>

        <h3 style={S.h3}>O trade-off Reconstrução vs Regularização</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Cenário</th><th style={S.th}>Efeito no termo KL</th><th style={S.th}>Efeito no termo de reconstrução</th><th style={S.th}>Resultado</th></tr></thead>
            <tbody>
              {[
                ['KL domina (β alto)', 'q(z|x) ≈ N(0,I) para todos os x', 'Reconstrução degrada — todas as amostras tendem a parecer "médias"', 'Posterior collapse: latente ignora x'],
                ['Reconstrução domina (β baixo)', 'q(z|x) afasta-se livremente do prior', 'Reconstrução excelente', 'Espaço latente volta a ficar desorganizado, como um AE vanilla'],
                ['Equilíbrio', 'q(z|x) próximo mas não idêntico ao prior, por amostra', 'Reconstrução boa', 'Espaço latente contínuo e informativo — objectivo do VAE'],
              ].map(([c, k, r, res]) => (
                <tr key={c}><td style={S.td}><strong>{c}</strong></td><td style={S.td}>{k}</td><td style={S.td}>{r}</td><td style={S.td}>{res}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={S.note}>
          O <strong>β-VAE</strong> (Higgins et al., 2017) introduz explicitamente este peso: multiplica o termo KL por
          um factor β. Valores de β &gt; 1 aumentam a pressão de regularização e podem promover{' '}
          <strong>disentanglement</strong> — cada dimensão de z passa a controlar, de forma mais isolada, um único
          factor de variação dos dados (ex: rotação, espessura do traço, brilho) — ao custo de reconstruções
          ligeiramente menos nítidas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Reparametrization trick === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. O Reparametrization Trick</h2>
        <p style={S.p}>
          Há um obstáculo prático no treino do VAE: z é o resultado de uma <strong>operação de amostragem</strong>
          (z ~ N(μ, σ²)). A amostragem é uma operação estocástica — não tem uma derivada bem definida em relação
          a μ e σ. Sem conseguir calcular ∂z/∂μ e ∂z/∂σ, o backpropagation não consegue propagar o gradiente do
          reconstruction loss de volta para o encoder.
        </p>

        <ReparamDiagram />

        <p style={S.p}>
          A solução é reescrever a amostragem de forma equivalente, mas separando a parte aleatória da parte
          aprendida:
        </p>

        <div style={S.math}>
          <BlockMath math={`z = \\mu + \\sigma \\odot \\varepsilon, \\qquad \\varepsilon \\sim \\mathcal{N}(0, I)`} />
        </div>

        <p style={S.p}>
          Agora z é uma <strong>função determinística</strong> de μ, σ e de uma variável auxiliar ε que é amostrada
          de uma distribuição fixa, independente dos parâmetros da rede. O ruído "entra de fora" como mais um input,
          em vez de ser produzido internamente — e uma função determinística tem gradientes bem definidos:
          <InlineMath math="\partial z/\partial \mu = 1" /> e <InlineMath math="\partial z/\partial \sigma = \varepsilon" />.
        </p>

        <h3 style={S.h3}>Exemplo numérico</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Variável</th><th style={S.th}>Valor</th><th style={S.th}>Origem</th></tr></thead>
            <tbody>
              {[
                ['μ (saída do encoder)', '0.40', 'aprendido — depende dos pesos da rede'],
                ['σ (saída do encoder)', '0.20', 'aprendido — depende dos pesos da rede'],
                ['ε (ruído auxiliar)', '0.85', 'amostrado de N(0,1), constante para o backward pass'],
                ['z = μ + σ·ε', '0.40 + 0.20 × 0.85 = 0.57', 'usado como input do decoder'],
              ].map(([v, val, o]) => (
                <tr key={v}><td style={S.td}><strong>{v}</strong></td><td style={{ ...S.td, fontFamily: 'monospace' }}>{val}</td><td style={S.td}>{o}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          Durante o backward pass, o gradiente que chega a z propaga-se directamente para μ (com factor 1) e para σ
          (multiplicado por ε = 0.85). ε mantém-se fixo — não é um parâmetro a optimizar, é apenas a "fonte de
          aleatoriedade" externa que torna z estocástico sem bloquear o fluxo de gradiente.
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 7: Latent space properties === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Propriedades do Espaço Latente do VAE</h2>
        <p style={S.p}>
          O efeito combinado da regularização KL e do reparametrization trick é um espaço latente
          <strong> denso, suave e contínuo</strong> — radicalmente diferente do espaço fragmentado de um AE vanilla.
        </p>

        <LatentSpaceDiagram />

        <h3 style={S.h3}>Interpolação como teste de qualidade</h3>
        <p style={S.p}>
          Uma forma directa de verificar a qualidade do espaço latente é a <strong>interpolação linear</strong>: escolhem-se
          dois pontos z₀ e z₈ correspondentes a duas amostras reais (por exemplo, dígitos "0" e "8" do MNIST), e calcula-se
          uma sequência de pontos intermédios:
        </p>
        <div style={S.math}>
          <BlockMath math={`z(t) = (1-t)\\cdot z_0 + t \\cdot z_8, \\qquad t \\in \\{0, \\tfrac{1}{6}, \\tfrac{2}{6}, \\dots, 1\\}`} />
        </div>

        <InterpolationDiagram />

        <p style={S.p}>
          Num VAE bem treinado, decodificar cada z(t) produz uma <strong>transição suave e plausível</strong> entre os
          dois dígitos — formas intermédias que parecem dígitos válidos, não ruído. Num AE vanilla, a mesma interpolação
          frequentemente atravessa regiões "vazias" do espaço latente e produz imagens sem sentido a meio do percurso.
          Esta capacidade de interpolação semântica é a base de aplicações como geração controlada de imagens,
          morphing e — em domínios como <strong>drug discovery</strong> — exploração contínua do espaço de moléculas
          (representações SMILES) para procurar compostos com propriedades desejadas (Gómez-Bombarelli et al., 2018).
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 8: Comparison table === */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Comparação: AE vs Denoising AE vs Sparse AE vs VAE</h2>
        <p style={S.p}>
          Cada variante optimiza um objectivo ligeiramente diferente, o que se traduz em propriedades distintas do
          espaço latente e em casos de uso diferentes:
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Variante</th>
                <th style={S.th}>Objectivo principal</th>
                <th style={S.th}>Propriedade do espaço latente</th>
                <th style={S.th}>Casos de uso típicos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}><strong>Autoencoder (vanilla)</strong></td>
                <td style={S.td}>Compressão e reconstrução fiel</td>
                <td style={S.td}>Compacto, mas sem garantia de continuidade ou estrutura</td>
                <td style={S.td}>Compressão, redução de dimensionalidade, pré-treino, anomaly detection</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Denoising AE</strong></td>
                <td style={S.td}>Reconstruir dados limpos a partir de inputs corrompidos</td>
                <td style={S.td}>Mais robusto a ruído; captura estrutura essencial dos dados</td>
                <td style={S.td}>Remoção de ruído (imagem/áudio), pré-treino robusto, base conceptual da difusão</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Sparse AE</strong></td>
                <td style={S.td}>Reconstrução com activações latentes esparsas</td>
                <td style={S.td}>Pode ter dimensão alta; cada neurónio especializa-se num "conceito"</td>
                <td style={S.td}>Feature learning interpretável, dicionários esparsos, interpretabilidade de redes</td>
              </tr>
              <tr>
                <td style={S.td}><strong>VAE</strong></td>
                <td style={S.td}>Maximizar ELBO (reconstrução + regularização KL)</td>
                <td style={S.td}>Contínuo, denso, interpolável — amostrável de N(0,I)</td>
                <td style={S.td}>Geração de novas amostras, interpolação semântica, exploração de espaços (moléculas, design)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>9. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <p style={{ ...S.p, marginBottom: 0 }}>
              Todas estas arquitecturas partilham o esqueleto encoder–bottleneck–decoder, mas diferem em{' '}
              <strong>que constrangimento adicional impõem ao espaço latente</strong>: o vanilla AE não impõe nenhum
              (apenas a dimensão), o denoising AE impõe robustez via corrupção do input, o sparse AE impõe esparsidade
              nas activações, e o VAE impõe uma forma probabilística específica via regularização KL — sendo esta
              última condição precisamente o que torna a <strong>geração</strong> possível.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
