import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#4a9eed';

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
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

function VectorArrowSVG() {
  return (
    <svg width="300" height="220" viewBox="0 0 300 220" style={{ display: 'block', margin: '1rem auto' }}>
      <defs>
        <marker id="arrowA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
        <marker id="arrowGray" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
        </marker>
      </defs>
      {[0,1,2,3,4,5].map(i => (
        <line key={"gv"+i} x1={40 + i*40} y1="20" x2={40 + i*40} y2="200" stroke="var(--text-secondary)" strokeWidth="1" />
      ))}
      {[0,1,2,3,4].map(i => (
        <line key={"gh"+i} x1="40" y1={20 + i*45} x2="260" y2={20 + i*45} stroke="var(--text-secondary)" strokeWidth="1" />
      ))}
      <line x1="40" y1="155" x2="260" y2="155" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrowGray)" />
      <line x1="40" y1="200" x2="40" y2="20" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrowGray)" />
      <line x1="40" y1="155" x2="200" y2="65" stroke={color} strokeWidth="2.5" markerEnd="url(#arrowA)" />
      <line x1="40" y1="155" x2="200" y2="155" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="5,4" />
      <line x1="200" y1="155" x2="200" y2="65" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="5,4" />
      <text x="130" y="175" textAnchor="middle" fontSize="13" fill="#4a9eed" fontWeight="700">v₁ = 4</text>
      <text x="218" y="115" textAnchor="start" fontSize="13" fill="#4a9eed" fontWeight="700">v₂ = 2</text>
      <text x="120" y="98" textAnchor="middle" fontSize="14" fill={color} fontWeight="700">v = (4, 2)</text>
      <text x="265" y="160" textAnchor="start" fontSize="12" fill="var(--text-secondary)">x</text>
      <text x="35" y="18" textAnchor="middle" fontSize="12" fill="var(--text-secondary)">y</text>
      <text x="28" y="170" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">O</text>
    </svg>
  );
}

function VectorAdditionSVG() {
  return (
    <svg width="300" height="220" viewBox="0 0 300 220" style={{ display: 'block', margin: '1rem auto' }}>
      <defs>
        <marker id="arrowAdd1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
        <marker id="arrowAdd2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
        </marker>
        <marker id="arrowAdd3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
        </marker>
      </defs>
      <line x1="60" y1="170" x2="160" y2="100" stroke={color} strokeWidth="2.5" markerEnd="url(#arrowAdd1)" />
      <text x="95" y="125" textAnchor="middle" fontSize="13" fill={color} fontWeight="700">a</text>
      <line x1="160" y1="100" x2="240" y2="140" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#arrowAdd2)" />
      <text x="210" y="110" textAnchor="middle" fontSize="13" fill="#4a9eed" fontWeight="700">b</text>
      <line x1="60" y1="170" x2="140" y2="210" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="5,4" markerEnd="url(#arrowAdd2)" />
      <line x1="140" y1="210" x2="240" y2="140" stroke={color} strokeWidth="1.5" strokeDasharray="5,4" markerEnd="url(#arrowAdd1)" />
      <line x1="60" y1="170" x2="240" y2="140" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#arrowAdd3)" />
      <text x="150" y="170" textAnchor="middle" fontSize="13" fill="#4a9eed" fontWeight="700">a + b</text>
      <text x="60" y="195" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Origem</text>
      <text x="10" y="20" textAnchor="start" fontSize="11" fill="var(--text-secondary)">Lei do Paralelogramo</text>
    </svg>
  );
}

function UnitBallsSVG() {
  return (
    <svg width="340" height="160" viewBox="0 0 340 160" style={{ display: 'block', margin: '1rem auto' }}>
      <g transform="translate(55,80)">
        <polygon points="0,-45 45,0 0,45 -45,0" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="2" />
        <line x1="-55" y1="0" x2="55" y2="0" stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1="0" y1="-55" x2="0" y2="55" stroke="var(--text-secondary)" strokeWidth="1" />
        <text x="0" y="75" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">L₁</text>
        <text x="0" y="88" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Diamante</text>
      </g>
      <g transform="translate(170,80)">
        <circle cx="0" cy="0" r="45" fill="rgba(74,158,237,0.12)" stroke="#4a9eed" strokeWidth="2" />
        <line x1="-55" y1="0" x2="55" y2="0" stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1="0" y1="-55" x2="0" y2="55" stroke="var(--text-secondary)" strokeWidth="1" />
        <text x="0" y="75" textAnchor="middle" fontSize="12" fill="#4a9eed" fontWeight="700">L₂</text>
        <text x="0" y="88" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Círculo</text>
      </g>
      <g transform="translate(285,80)">
        <rect x="-45" y="-45" width="90" height="90" fill="rgba(74,158,237,0.12)" stroke={color} strokeWidth="2" />
        <line x1="-55" y1="0" x2="55" y2="0" stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1="0" y1="-55" x2="0" y2="55" stroke="var(--text-secondary)" strokeWidth="1" />
        <text x="0" y="75" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">L∞</text>
        <text x="0" y="88" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Quadrado</text>
      </g>
    </svg>
  );
}

function DotProductSVG() {
  return (
    <svg width="300" height="210" viewBox="0 0 300 210" style={{ display: 'block', margin: '1rem auto' }}>
      <defs>
        <marker id="arrowDotA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
        <marker id="arrowDotB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
        </marker>
        <marker id="arrowDotProj" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
        </marker>
      </defs>
      {/* vector a: O(80,180) -> A(195,84) */}
      <line x1="80" y1="180" x2="195" y2="84" stroke={color} strokeWidth="2.5" markerEnd="url(#arrowDotA)" />
      <text x="122" y="120" textAnchor="middle" fontSize="14" fill={color} fontWeight="700">a</text>
      {/* vector b: O(80,180) -> B(260,180), horizontal so the projection foot is trivial to compute */}
      <line x1="80" y1="180" x2="260" y2="180" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#arrowDotB)" />
      <text x="225" y="172" textAnchor="middle" fontSize="14" fill="#4a9eed" fontWeight="700">b</text>
      {/* angle arc at O between a and b */}
      <path d="M 125,180 A 45,45 0 0,1 114,151" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="133" y="167" textAnchor="middle" fontSize="13" fill="var(--text-secondary)">θ</text>
      {/* proj_b(a): O(80,180) -> P(195,180), the true orthogonal foot of A onto line b */}
      <line x1="80" y1="180" x2="195" y2="180" stroke="#4a9eed" strokeWidth="2" strokeDasharray="4,3" markerEnd="url(#arrowDotProj)" />
      <text x="137" y="198" textAnchor="middle" fontSize="11" fill="#4a9eed">proj_b(a)</text>
      {/* perpendicular from tip of a straight down to P — now correctly touches both points */}
      <line x1="195" y1="84" x2="195" y2="180" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,3" />
      <rect x="195" y="172" width="8" height="8" fill="none" stroke="#94a3b8" strokeWidth="1" />
      <text x="70" y="195" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">O</text>
      <text x="150" y="20" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">a · b = |a| |b| cos(θ)</text>
    </svg>
  );
}

function SubspaceSVG() {
  return (
    <svg width="320" height="200" viewBox="0 0 320 200" style={{ display: 'block', margin: '1rem auto' }}>
      <g transform="translate(10,10)">
        <ellipse cx="70" cy="95" rx="60" ry="80" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="2" />
        <circle cx="70" cy="95" r="4" fill={color} />
        <line x1="70" y1="95" x2="115" y2="45" stroke={color} strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="70" y1="95" x2="25" y2="145" stroke={color} strokeWidth="1.5" strokeDasharray="4,3" />
        <text x="70" y="188" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">Subespaço</text>
        <text x="70" y="200" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">passa na origem</text>
      </g>
      <line x1="155" y1="10" x2="155" y2="190" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,4" />
      <g transform="translate(165,10)">
        <ellipse cx="70" cy="80" rx="60" ry="70" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
        <circle cx="70" cy="160" r="4" fill="#4a9eed" />
        <text x="70" y="175" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">origem</text>
        <line x1="70" y1="160" x2="70" y2="148" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="3,3" />
        <text x="70" y="188" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">Não Subespaço</text>
        <text x="70" y="200" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">não passa na origem</text>
      </g>
    </svg>
  );
}

function LinearDepSVG() {
  return (
    <svg width="320" height="200" viewBox="0 0 320 200" style={{ display: 'block', margin: '1rem auto' }}>
      <defs>
        <marker id="arrowLD1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
        <marker id="arrowLD2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
        </marker>
        <marker id="arrowLI1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
        <marker id="arrowLI2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
        </marker>
      </defs>
      <g transform="translate(10,10)">
        <text x="70" y="15" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">Linearmente Dependentes</text>
        {/* v1: full vector; v2 = 0.55·v1, genuinely collinear, shorter and drawn semi-transparent so it reads as a distinct (scaled) vector rather than merging into v1's line */}
        <line x1="70" y1="110" x2="130" y2="60" stroke={color} strokeWidth="2.5" markerEnd="url(#arrowLD1)" />
        <line x1="70" y1="110" x2="103" y2="83" stroke="#4a9eed" strokeWidth="2.5" strokeOpacity="0.55" markerEnd="url(#arrowLD2)" />
        <text x="120" y="50" textAnchor="start" fontSize="12" fill={color} fontWeight="700">v₁</text>
        {/* v2 label offset perpendicular to the line, away from v1's arrowhead, so it doesn't get lost against the overlapping vector */}
        <text x="113" y="100" textAnchor="start" fontSize="12" fill="#4a9eed" fontWeight="700">v₂</text>
        <line x1="103" y1="83" x2="113" y2="96" stroke="#4a9eed" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
        <text x="70" y="135" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">colineares</text>
        <circle cx="70" cy="110" r="3" fill="var(--text-secondary)" />
      </g>
      <line x1="155" y1="10" x2="155" y2="190" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,4" />
      <g transform="translate(165,10)">
        <text x="70" y="15" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">Linearmente Independentes</text>
        <line x1="70" y1="120" x2="140" y2="70" stroke={color} strokeWidth="2.5" markerEnd="url(#arrowLI1)" />
        <line x1="70" y1="120" x2="120" y2="160" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#arrowLI2)" />
        <text x="148" y="65" textAnchor="start" fontSize="12" fill={color}>v₁</text>
        <text x="125" y="165" textAnchor="start" fontSize="12" fill="#4a9eed">v₂</text>
        <text x="70" y="185" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">direções distintas</text>
        <circle cx="70" cy="120" r="3" fill="var(--text-secondary)" />
      </g>
    </svg>
  );
}

function ChangeOfBasisSVG() {
  return (
    <svg width="300" height="220" viewBox="0 0 300 220" style={{ display: 'block', margin: '1rem auto' }}>
      <defs>
        <marker id="arrowCBStd1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
        </marker>
        <marker id="arrowCBStd2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
        </marker>
        <marker id="arrowCBNew1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
        <marker id="arrowCBNew2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
        </marker>
        <marker id="arrowCBVec" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
        </marker>
      </defs>
      <line x1="120" y1="150" x2="200" y2="150" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrowCBStd1)" />
      <line x1="120" y1="150" x2="120" y2="70" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrowCBStd2)" />
      <text x="208" y="154" fontSize="11" fill="#94a3b8">e₁</text>
      <text x="115" y="63" fontSize="11" fill="#94a3b8" textAnchor="end">e₂</text>
      <line x1="120" y1="150" x2="185" y2="100" stroke={color} strokeWidth="2" markerEnd="url(#arrowCBNew1)" />
      <line x1="120" y1="150" x2="70" y2="100" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#arrowCBNew2)" />
      <text x="193" y="96" fontSize="12" fill={color} fontWeight="700">b₁</text>
      <text x="58" y="96" fontSize="12" fill="#4a9eed" fontWeight="700">b₂</text>
      <line x1="120" y1="150" x2="175" y2="80" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#arrowCBVec)" />
      <text x="182" y="78" fontSize="13" fill="#4a9eed" fontWeight="700">v</text>
      <circle cx="120" cy="150" r="3" fill="var(--text-secondary)" />
      <text x="120" y="175" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Base canónica (cinza) vs nova base (cor)</text>
    </svg>
  );
}

function OuterProductSVG() {
  return (
    <svg width="340" height="195" viewBox="0 0 340 195" style={{ display: 'block', margin: '1rem auto' }}>
      {/* u column label */}
      <text x="34" y="19" textAnchor="middle" fontSize="11" fill="var(--text-secondary)" fontWeight="700">u</text>
      {[0,1,2].map(i => (
        <rect key={"ou"+i} x="13" y={27 + i*41} width="42" height="31" rx="5"
          fill="rgba(74,158,237,0.15)" stroke={color} strokeWidth="1.5" />
      ))}
      {['u₁','u₂','u₃'].map((t,i) => (
        <text key={"outU"+t} x="34" y={47 + i*41} textAnchor="middle" fontSize="12" fill={color} fontWeight="700">{t}</text>
      ))}
      {/* vᵀ row label */}
      <text x="195" y="19" textAnchor="middle" fontSize="11" fill="var(--text-secondary)" fontWeight="700">vᵀ</text>
      {[0,1,2].map(i => (
        <rect key={"ov"+i} x={76 + i*85} y="24" width="72" height="31" rx="5"
          fill="rgba(74,158,237,0.15)" stroke={color} strokeWidth="1.5" />
      ))}
      {['v₁','v₂','v₃'].map((t,i) => (
        <text key={"outV"+t} x={112 + i*85} y="44" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">{t}</text>
      ))}
      {/* Label */}
      <text x="195" y="77" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">= Matriz 3×3 (rank 1)</text>
      {/* Result matrix */}
      {[0,1,2].map(r =>
        [0,1,2].map(c => (
          <rect key={"om"+r+""+c} x={76 + c*85} y={86 + r*34} width="72" height="29" rx="4"
            fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
        ))
      )}
      {['u₁v₁','u₁v₂','u₁v₃','u₂v₁','u₂v₂','u₂v₃','u₃v₁','u₃v₂','u₃v₃'].map((t,i) => (
        <text key={"omt"+t} x={112 + (i%3)*85} y={104 + Math.floor(i/3)*34} textAnchor="middle" fontSize="9" fill={color}>{t}</text>
      ))}
    </svg>
  );
}

function ProjectionSVG() {
  return (
    <svg width="300" height="210" viewBox="0 0 300 210" style={{ display: 'block', margin: '1rem auto' }}>
      <defs>
        <marker id="arrowProjA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
        <marker id="arrowProjB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
        </marker>
        <marker id="arrowProjP" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
        </marker>
        <marker id="arrowProjPerp" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
        </marker>
      </defs>
      <line x1="50" y1="170" x2="260" y2="130" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#arrowProjB)" />
      <text x="265" y="125" fontSize="13" fill="#4a9eed" fontWeight="700">b</text>
      <line x1="50" y1="170" x2="170" y2="60" stroke={color} strokeWidth="2.5" markerEnd="url(#arrowProjA)" />
      <text x="176" y="55" fontSize="13" fill={color} fontWeight="700">a</text>
      <line x1="50" y1="170" x2="193" y2="143" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#arrowProjP)" />
      <text x="125" y="172" textAnchor="middle" fontSize="11" fill="#4a9eed">proj_b(a)</text>
      <line x1="193" y1="143" x2="170" y2="60" stroke="#4a9eed" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arrowProjPerp)" />
      <text x="205" y="100" fontSize="11" fill="#4a9eed">a perp</text>
      <rect x="187" y="137" width="9" height="9" fill="none" stroke="#94a3b8" strokeWidth="1.2" />
      <circle cx="50" cy="170" r="3" fill="var(--text-secondary)" />
      <text x="50" y="190" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">O</text>
      <text x="150" y="205" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">a = proj_b(a) + a(perp)</text>
    </svg>
  );
}

function OrthogonalSVG() {
  return (
    <svg width="260" height="220" viewBox="0 0 260 220" style={{ display: 'block', margin: '1rem auto' }}>
      <defs>
        <marker id="arrowOrth1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
        <marker id="arrowOrth2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
        </marker>
        <marker id="arrowOrth3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
        </marker>
      </defs>
      <line x1="130" y1="130" x2="220" y2="130" stroke={color} strokeWidth="2.5" markerEnd="url(#arrowOrth1)" />
      <text x="230" y="134" fontSize="13" fill={color} fontWeight="700">e₁</text>
      <line x1="130" y1="130" x2="130" y2="40" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#arrowOrth2)" />
      <text x="135" y="32" fontSize="13" fill="#4a9eed" fontWeight="700">e₂</text>
      <line x1="130" y1="130" x2="70" y2="185" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#arrowOrth3)" />
      <text x="55" y="198" fontSize="13" fill="#4a9eed" fontWeight="700">e₃</text>
      <rect x="130" y="121" width="9" height="9" fill="none" stroke="#94a3b8" strokeWidth="1" />
      <circle cx="130" cy="130" r="4" fill="var(--text-secondary)" />
      <text x="130" y="212" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Base Ortonormal: eᵢ · eⱼ = delta(i,j)</text>
    </svg>
  );
}

function CosineSimilaritySVG() {
  return (
    <svg width="320" height="200" viewBox="0 0 320 200" style={{ display: 'block', margin: '1rem auto' }}>
      <defs>
        <marker id="arrowCS1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
        <marker id="arrowCS2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
        </marker>
        <marker id="arrowCS3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
        </marker>
        <marker id="arrowCS4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
        </marker>
      </defs>
      <text x="80" y="14" textAnchor="middle" fontSize="10.5" fill="var(--text-secondary)" fontWeight="700">Cosine</text>
      <text x="80" y="27" textAnchor="middle" fontSize="10.5" fill="var(--text-secondary)" fontWeight="700">ângulo pequeno = similar</text>
      <line x1="80" y1="120" x2="145" y2="60" stroke={color} strokeWidth="2.5" markerEnd="url(#arrowCS1)" />
      <line x1="80" y1="120" x2="130" y2="65" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#arrowCS2)" />
      <path d="M 100,109 A 25,25 0 0,1 102,91" fill="none" stroke="var(--text-secondary)" strokeWidth="1.2" />
      <text x="115" y="100" fontSize="11" fill="var(--text-secondary)">θ=0</text>
      <text x="80" y="155" textAnchor="middle" fontSize="10" fill="#4a9eed">cos(θ) = 1 — Muito Similar</text>
      <line x1="180" y1="10" x2="180" y2="170" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,4" />
      <text x="255" y="14" textAnchor="middle" fontSize="10.5" fill="var(--text-secondary)" fontWeight="700">Euclidiana</text>
      <text x="255" y="27" textAnchor="middle" fontSize="10.5" fill="var(--text-secondary)" fontWeight="700">distância absoluta</text>
      <line x1="205" y1="140" x2="230" y2="110" stroke={color} strokeWidth="2" markerEnd="url(#arrowCS3)" />
      <line x1="235" y1="70" x2="300" y2="30" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#arrowCS4)" />
      <line x1="230" y1="110" x2="265" y2="55" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,3" />
      <text x="255" y="155" textAnchor="middle" fontSize="10" fill="#4a9eed">distância grande</text>
      <text x="255" y="168" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">apesar de mesma direcção</text>
    </svg>
  );
}

export default function LA1() {
  return (
    <div style={S.page}>
      <Link to="/linalg" style={S.back}><ArrowLeft size={16} /> Voltar a Álgebra Linear</Link>

      <div style={S.tag}>MÓDULO 01</div>
      <h1 style={S.h1}>Vectores &amp; Espaços Vectoriais</h1>

      {/* ── 1. O que é um Vector ─────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. O que é um Vector</h2>
        <p style={S.p}>
          Um vector pode ser visto de duas formas complementares: <strong>geometricamente</strong>, é uma seta no espaço com direcção e magnitude; <strong>algebricamente</strong>, é uma lista ordenada de números (coordenadas) que representam essa seta relativamente a uma origem.
        </p>
        <div style={S.highlight}>
          <strong>Notação coluna</strong> (convenção em álgebra linear):
        </div>
        <VectorArrowSVG />
        <p style={S.p}>
          O vector v = (4, 2) aponta 4 unidades na horizontal e 2 na vertical. A sua localização no plano é determinada pelas componentes v₁ = 4 e v₂ = 2.
        </p>
        <h3 style={S.h3}>Vectores em Machine Learning</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Aplicação ML</th>
              <th style={S.th}>Exemplo de Vector</th>
              <th style={S.th}>Dimensão Típica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Word Embeddings (Word2Vec, GloVe)</td>
              <td style={S.td}>Representação semântica de palavras</td>
              <td style={S.td}>50 – 300</td>
            </tr>
            <tr>
              <td style={S.td}>Pixel de imagem (RGB)</td>
              <td style={S.td}>[255, 128, 0] = laranja</td>
              <td style={S.td}>3 (por pixel)</td>
            </tr>
            <tr>
              <td style={S.td}>Feature vector (tabular)</td>
              <td style={S.td}>[idade, salário, anos_exp, ...]</td>
              <td style={S.td}>10 – 10 000</td>
            </tr>
            <tr>
              <td style={S.td}>Sentence embeddings (BERT)</td>
              <td style={S.td}>Representação de frases</td>
              <td style={S.td}>768</td>
            </tr>
            <tr>
              <td style={S.td}>Gradientes de rede neuronal</td>
              <td style={S.td}>Derivadas em relação a parâmetros</td>
              <td style={S.td}>Milhões</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 2. Operações com Vectores ────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Operações com Vectores</h2>
        <h3 style={S.h3}>Adição de Vectores</h3>
        <p style={S.p}>
          A soma de dois vectores a e b é calculada componente a componente: (a + b)ᵢ = aᵢ + bᵢ. Geometricamente corresponde a colocar b na ponta de a.
        </p>
        <VectorAdditionSVG />
        <div style={S.highlight}>
          <strong>Lei do Paralelogramo:</strong> a + b e b + a chegam ao mesmo ponto (vértice oposto do paralelogramo).
        </div>
        <h3 style={S.h3}>Multiplicação por Escalar</h3>
        <p style={S.p}>
          Multiplicar um vector v por um escalar c estica (|c| maior que 1), encolhe (|c| menor que 1) ou inverte (c menor que 0) o vector: (cv)ᵢ = c · vᵢ.
        </p>
        <h3 style={S.h3}>Subtracção</h3>
        <p style={S.p}>
          a − b = a + (−b). Geometricamente, o vector que liga a ponta de b à ponta de a.
        </p>
        <h3 style={S.h3}>Propriedades</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Fórmula</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Comutatividade</td><td style={S.td}>a + b = b + a</td></tr>
            <tr><td style={S.td}>Associatividade</td><td style={S.td}>(a + b) + c = a + (b + c)</td></tr>
            <tr><td style={S.td}>Elemento neutro</td><td style={S.td}>a + 0 = a</td></tr>
            <tr><td style={S.td}>Inverso aditivo</td><td style={S.td}>a + (−a) = 0</td></tr>
            <tr><td style={S.td}>Distributividade (escalar)</td><td style={S.td}>c(a + b) = ca + cb</td></tr>
            <tr><td style={S.td}>Distributividade (soma de escalares)</td><td style={S.td}>(c + d)a = ca + da</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 3. Normas de Vectores ────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Normas de Vectores</h2>
        <p style={S.p}>
          Uma <strong>norma</strong> é uma função que atribui um tamanho (comprimento) a um vector. Formalmente, ||·|| deve satisfazer: (1) ||v|| &ge; 0, (2) ||v|| = 0 apenas se v = 0, (3) ||cv|| = |c| ||v||, (4) ||a + b|| &le; ||a|| + ||b|| (desigualdade triangular).
        </p>
        <h3 style={S.h3}>Bolas Unitárias — Geometria das Normas</h3>
        <UnitBallsSVG />
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Norma</th>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Forma Geométrica</th>
              <th style={S.th}>Uso em ML</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>L₁ (Manhattan)</strong></td>
              <td style={S.td}>||v||₁ = Σ |vᵢ|</td>
              <td style={S.td}>Diamante</td>
              <td style={S.td}>Regularização Lasso — induz sparsidade</td>
            </tr>
            <tr>
              <td style={S.td}><strong>L₂ (Euclidiana)</strong></td>
              <td style={S.td}>||v||₂ = raiz(Σ vᵢ²)</td>
              <td style={S.td}>Círculo / Esfera</td>
              <td style={S.td}>Regularização Ridge — encolhe coeficientes</td>
            </tr>
            <tr>
              <td style={S.td}><strong>L∞ (Chebyshev)</strong></td>
              <td style={S.td}>||v||∞ = max |vᵢ|</td>
              <td style={S.td}>Quadrado / Cubo</td>
              <td style={S.td}>Robustez — controla o pior caso</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Lp (geral)</strong></td>
              <td style={S.td}>||v||p = (Σ |vᵢ|^p)^(1/p)</td>
              <td style={S.td}>Interpola L₁ e L∞</td>
              <td style={S.td}>Elastic Net (p entre 1 e 2)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 4. Produto Interno ───────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Produto Interno (Dot Product)</h2>
        <p style={S.p}>
          O produto interno (ou produto escalar) de dois vectores a e b em Rⁿ é o escalar:
        </p>
        <div style={S.highlight}>
          <BlockMath math="a \cdot b = a^T b = \sum_i a_i b_i = \|a\| \|b\| \cos(\theta)" />
        </div>
        <DotProductSVG />
        <h3 style={S.h3}>Interpretação Geométrica</h3>
        <p style={S.p}>
          O produto interno mede o quanto dois vectores apontam na mesma direcção. Se θ = 0° então cos(θ) = 1 (paralelos, máximo). Se θ = 90° então cos(θ) = 0 (perpendiculares, ortogonais). Se θ = 180° então cos(θ) = −1 (antiparalelos, mínimo).
        </p>
        <h3 style={S.h3}>Projecção Escalar</h3>
        <p style={S.p}>
          A projecção escalar de a sobre b é: (a · b) / ||b||. É o comprimento com sinal da sombra de a em b.
        </p>
        <h3 style={S.h3}>Cosine Similarity em NLP</h3>
        <p style={S.p}>
          Em NLP, a similaridade entre dois documentos ou palavras é medida por:
        </p>
        <div style={S.highlight}>
          <BlockMath math="\text{cos\_sim}(a, b) = \frac{a \cdot b}{\|a\| \cdot \|b\|} \in [-1, 1]" />
        </div>
        <p style={S.p}>
          Valor próximo de 1 indica documentos muito similares. Esta métrica é invariante à escala — um documento longo sobre "gatos" terá a mesma similaridade que um curto, desde que falem do mesmo tema.
        </p>
        <h3 style={S.h3}>Propriedades</h3>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Propriedade</th><th style={S.th}>Fórmula</th></tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Comutatividade</td><td style={S.td}>a · b = b · a</td></tr>
            <tr><td style={S.td}>Distributividade</td><td style={S.td}>a · (b + c) = a · b + a · c</td></tr>
            <tr><td style={S.td}>Homogeneidade</td><td style={S.td}>(ca) · b = c(a · b)</td></tr>
            <tr><td style={S.td}>Positividade</td><td style={S.td}>a · a &ge; 0, com igualdade sse a = 0</td></tr>
            <tr><td style={S.td}>Norma L₂</td><td style={S.td}>||a|| = raiz(a · a)</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 5. Espaços Vectoriais ────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Espaços Vectoriais</h2>
        <p style={S.p}>
          Um <strong>espaço vectorial</strong> (sobre R) é um conjunto V com operações de adição e multiplicação por escalar que satisfazem 8 axiomas. Os exemplos mais comuns são Rⁿ, os polinómios de grau &le; n, e as matrizes m×n.
        </p>
        <h3 style={S.h3}>Os 8 Axiomas</h3>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>#</th><th style={S.th}>Axioma</th><th style={S.th}>Descrição</th></tr>
          </thead>
          <tbody>
            {[
              ['A1','u + v = v + u','Comutatividade da adição'],
              ['A2','(u+v)+w = u+(v+w)','Associatividade da adição'],
              ['A3','existe 0 tal que v + 0 = v','Elemento neutro (vector zero)'],
              ['A4','existe −v tal que v + (−v) = 0','Inverso aditivo'],
              ['A5','c(u+v) = cu + cv','Distributividade (vector)'],
              ['A6','(c+d)v = cv + dv','Distributividade (escalar)'],
              ['A7','(cd)v = c(dv)','Associatividade mista'],
              ['A8','1·v = v','Identidade multiplicativa'],
            ].map(([n,f,d]) => (
              <tr key={n}>
                <td style={S.td}>{n}</td>
                <td style={S.td}><code>{f}</code></td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Subespaços Vectoriais</h3>
        <p style={S.p}>
          Um subconjunto W de V é um <strong>subespaço</strong> se e só se: (1) 0 está em W, (2) fechado sob adição: u,v em W implica u+v em W, (3) fechado sob multiplicação por escalar: v em W, c em R implica cv em W.
        </p>
        <SubspaceSVG />
        <h3 style={S.h3}>Exemplos de Espaços Vectoriais</h3>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Espaço</th><th style={S.th}>Elementos</th><th style={S.th}>Dimensão</th></tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Rⁿ</td><td style={S.td}>Vectores com n componentes reais</td><td style={S.td}>n</td></tr>
            <tr><td style={S.td}>Pₙ — polinómios grau &le; n</td><td style={S.td}>a₀ + a₁x + ... + aₙxⁿ</td><td style={S.td}>n + 1</td></tr>
            <tr><td style={S.td}>Mₘₓₙ — matrizes reais</td><td style={S.td}>Matrizes m linhas x n colunas</td><td style={S.td}>mn</td></tr>
            <tr><td style={S.td}>C[a,b] — funções contínuas</td><td style={S.td}>f : [a,b] para R contínuas</td><td style={S.td}>∞</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 6. Dependência e Independência Linear ────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Dependência e Independência Linear</h2>
        <p style={S.p}>
          Um conjunto de vectores v₁, v₂, ..., vₖ é <strong>linearmente dependente</strong> se existem escalares c₁, ..., cₖ (não todos zero) tais que c₁v₁ + c₂v₂ + ... + cₖvₖ = 0. Caso contrário é <strong>linearmente independente</strong>.
        </p>
        <LinearDepSVG />
        <h3 style={S.h3}>Span</h3>
        <p style={S.p}>
          O <strong>span</strong> (ou espaço gerado) de v₁,...,vₖ é o conjunto de todas as combinações lineares possíveis. É sempre um subespaço.
        </p>
        <h3 style={S.h3}>Como Testar Independência Linear</h3>
        <p style={S.p}>
          Coloca os vectores como colunas de uma matriz A e reduz à forma escalonada reduzida (RREF). Se todas as colunas têm pivô, os vectores são independentes.
        </p>
        <h3 style={S.h3}>Relevância em ML</h3>
        <p style={S.p}>
          Em Machine Learning, se as features (colunas da matriz de dados) são linearmente dependentes, existe <em>multicolinearidade</em>. Isto torna a regressão instável e os coeficientes não são interpretáveis. O <strong>rank</strong> de uma matriz de dados indica quantas features são genuinamente informativas.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 7. Bases e Dimensão ──────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Bases e Dimensão</h2>
        <p style={S.p}>
          Uma <strong>base</strong> de um espaço vectorial V é um conjunto de vectores que é simultaneamente: (1) linearmente independente, e (2) gera V (span = V). A <strong>dimensão</strong> de V é o número de elementos em qualquer base.
        </p>
        <h3 style={S.h3}>Base Canónica de Rⁿ</h3>
        <div style={S.highlight}>
          <BlockMath math="e_1 = (1,0,\ldots,0), \quad e_2 = (0,1,\ldots,0), \quad \ldots, \quad e_n = (0,0,\ldots,1)" />
          <BlockMath math="v = v_1 e_1 + v_2 e_2 + \cdots + v_n e_n" />
        </div>
        <h3 style={S.h3}>Mudança de Base</h3>
        <ChangeOfBasisSVG />
        <p style={S.p}>
          As coordenadas de um vector dependem da base escolhida. Se b₁, b₂ é outra base de R², podemos expressar qualquer v como v = α₁b₁ + α₂b₂, onde (α₁, α₂) são as coordenadas de v na nova base.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 8. Produto Externo e Matrizes de Rank-1 ─────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Produto Externo e Matrizes de Rank-1</h2>
        <p style={S.p}>
          O <strong>produto externo</strong> (outer product) de u em Rᵐ e v em Rⁿ é a matriz m×n formada pelo produto uvᵀ. Cada entrada (i,j) é uᵢvⱼ. Esta matriz tem sempre rank = 1 (desde que u e v sejam não nulos).
        </p>
        <div style={S.highlight}>
          uvᵀ — matriz m×n, cada linha é um múltiplo de vᵀ, cada coluna é um múltiplo de u.
        </div>
        <OuterProductSVG />
        <p style={S.p}>
          Qualquer matriz pode ser escrita como soma de matrizes de rank 1 (decomposição SVD):
        </p>
        <div style={S.highlight}>
          <BlockMath math="A = \sigma_1 u_1 v_1^T + \sigma_2 u_2 v_2^T + \cdots + \sigma_r u_r v_r^T" />
        </div>
        <h3 style={S.h3}>Atenção em Transformers (Self-Attention)</h3>
        <p style={S.p}>
          Os scores de atenção são calculados através de produtos internos entre vectores Query e Key, seguidos de softmax:
        </p>
        <div style={S.highlight}>
          <BlockMath math="\text{Attention}(Q,K,V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d}}\right) V" />
        </div>
        <p style={S.p}>
          A matriz QKᵀ é uma generalização do produto externo — cada entrada (i,j) mede a similaridade entre a query do token i e a key do token j. Dividir por raiz(d) evita que os produtos internos cresçam muito e saturem o softmax.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 9. Projecções ────────────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Projecções</h2>
        <p style={S.p}>
          A projecção ortogonal de a sobre b é o vector mais próximo de a na direcção de b:
        </p>
        <div style={S.highlight}>
          <BlockMath math="\text{proj}_b(a) = \frac{a \cdot b}{\|b\|^2}\, b" />
        </div>
        <ProjectionSVG />
        <h3 style={S.h3}>Decomposição Ortogonal</h3>
        <p style={S.p}>
          Qualquer vector a pode ser decomposto em duas componentes ortogonais entre si:
        </p>
        <div style={S.highlight}>
          <BlockMath math="a = \text{proj}_b(a) + a_{\perp}, \quad a_{\perp} = a - \text{proj}_b(a) \ \perp\ b" />
        </div>
        <h3 style={S.h3}>Projecção sobre um Subespaço</h3>
        <p style={S.p}>
          Para projectar a sobre o subespaço span das colunas de uma matriz A (com colunas independentes):
        </p>
        <div style={S.highlight}>
          <BlockMath math="\text{proj} = A(A^TA)^{-1}A^T a, \quad P = A(A^TA)^{-1}A^T \ \ (P^2=P,\ P^T=P)" />
        </div>
        <h3 style={S.h3}>Aplicações</h3>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Aplicação</th><th style={S.th}>Como usa Projecção</th></tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Mínimos Quadrados (Regressão Linear)</td><td style={S.td}>Projecta y no espaço coluna de X para minimizar ||y − Xβ||²</td></tr>
            <tr><td style={S.td}>PCA</td><td style={S.td}>Projecta dados sobre os principais componentes (vectores próprios)</td></tr>
            <tr><td style={S.td}>Gram-Schmidt</td><td style={S.td}>Subtrai projecções para ortogonalizar vectores</td></tr>
            <tr><td style={S.td}>Compressão de imagem</td><td style={S.td}>Projecta sobre subespaços de baixa dimensão</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 10. Ortogonalidade ───────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Ortogonalidade</h2>
        <p style={S.p}>
          Dois vectores a e b são <strong>ortogonais</strong> se a · b = 0 (ângulo entre eles = 90°). Um conjunto de vectores mutuamente ortogonais onde cada vector tem norma 1 chama-se <strong>ortonormal</strong>.
        </p>
        <OrthogonalSVG />
        <div style={S.highlight}>
          Base Ortonormal:
          <BlockMath math="e_i \cdot e_j = \delta_{ij} = \begin{cases} 1 & i=j \\ 0 & i \neq j \end{cases}" />
        </div>
        <h3 style={S.h3}>Processo de Gram-Schmidt</h3>
        <p style={S.p}>
          Dado um conjunto de vectores independentes v₁,...,vₖ, o processo de Gram-Schmidt constrói uma base ortonormal:
        </p>
        <div style={S.highlight}>
          <BlockMath math="\begin{aligned} u_1 &= \frac{v_1}{\|v_1\|} \\ u_2 &= \text{normalize}\big(v_2 - (v_2\cdot u_1)u_1\big) \\ u_3 &= \text{normalize}\big(v_3 - (v_3\cdot u_1)u_1 - (v_3\cdot u_2)u_2\big) \end{aligned}" />
        </div>
        <h3 style={S.h3}>Matrizes Ortogonais</h3>
        <p style={S.p}>
          Uma matriz Q é <strong>ortogonal</strong> se QᵀQ = QQᵀ = I, ou seja, Qᵀ = Q⁻¹. As colunas (e linhas) formam uma base ortonormal.
        </p>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Propriedade de Q ortogonal</th><th style={S.th}>Descrição</th></tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Preserva normas</td><td style={S.td}>||Qv|| = ||v|| — sem distorção</td></tr>
            <tr><td style={S.td}>Preserva ângulos</td><td style={S.td}>(Qu)·(Qv) = u·v</td></tr>
            <tr><td style={S.td}>det(Q) = ±1</td><td style={S.td}>Rotação (+1) ou reflexão (−1)</td></tr>
            <tr><td style={S.td}>Condicionamento perfeito</td><td style={S.td}>número de condição = 1 — estável numericamente</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 11. Distâncias e Similaridade ───────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Distâncias e Similaridade</h2>
        <p style={S.p}>
          Em ML, escolher a métrica certa é crucial. Duas observações podem ser próximas segundo uma métrica e distantes segundo outra, com implicações práticas muito diferentes.
        </p>
        <CosineSimilaritySVG />
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Métrica</th>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Intervalo</th>
              <th style={S.th}>Uso Principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Euclidiana</strong></td>
              <td style={S.td}>raiz(Σ (aᵢ−bᵢ)²)</td>
              <td style={S.td}>[0, ∞)</td>
              <td style={S.td}>KNN, K-Means, dados contínuos</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Manhattan</strong></td>
              <td style={S.td}>Σ |aᵢ−bᵢ|</td>
              <td style={S.td}>[0, ∞)</td>
              <td style={S.td}>Cidades, dados esparsos, outliers</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Cosine</strong></td>
              <td style={S.td}>1 − (a·b)/(||a||||b||)</td>
              <td style={S.td}>[0, 2]</td>
              <td style={S.td}>NLP, embeddings, documentos</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Hamming</strong></td>
              <td style={S.td}>Proporção de posições diferentes</td>
              <td style={S.td}>[0, 1]</td>
              <td style={S.td}>Dados categóricos, DNA, bits</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Chebyshev</strong></td>
              <td style={S.td}>max |aᵢ−bᵢ|</td>
              <td style={S.td}>[0, ∞)</td>
              <td style={S.td}>Xadrez, controlo do pior caso</td>
            </tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Cosine vs Euclidiana para Embeddings</h3>
        <p style={S.p}>
          Dois documentos — um com 10 ocorrências de "gato" e outro com 100 — têm vectores que apontam na mesma direcção mas com magnitudes diferentes. A cosine similarity é 1 (idênticos em conteúdo). A distância euclidiana é grande. Para NLP, cosine é mais informativa.
        </p>
      </section>
    </div>
  );
}
