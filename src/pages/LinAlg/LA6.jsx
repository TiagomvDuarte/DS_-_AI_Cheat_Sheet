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
  note: { background: 'rgba(14,116,144,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

function CircleToEllipseSVG() {
  return (
    <svg width="100%" viewBox="0 0 600 215" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="600" height="215" fill="var(--bg-secondary)" rx="8" />
      {/* Input space: unit circle */}
      <g transform="translate(110,100)">
        <circle cx="0" cy="0" r="60" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="-70" y1="0" x2="70" y2="0" stroke="#94a3b8" strokeWidth="1" />
        <line x1="0" y1="-70" x2="0" y2="70" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="60" cy="0" r="3" fill="#94a3b8" />
        <circle cx="0" cy="60" r="3" fill="#94a3b8" />
        <text x="0" y="90" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">espaço de entrada</text>
        <text x="0" y="103" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">(círculo unitário)</text>
        <text x="75" y="5" textAnchor="start" fontSize="10" fill="#64748b">v₁</text>
        <text x="5" y="75" textAnchor="start" fontSize="10" fill="#64748b">v₂</text>
      </g>
      {/* Arrow */}
      <g transform="translate(220,100)">
        <line x1="0" y1="0" x2="60" y2="0" stroke={color} strokeWidth="2" />
        <polygon points="60,0 50,-5 50,5" fill={color} />
        <text x="30" y="-8" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">A</text>
      </g>
      {/* Output space: ellipse */}
      <g transform="translate(430,100)">
        <ellipse cx="0" cy="0" rx="100" ry="38" fill="none" stroke={color} strokeWidth="2" />
        <line x1="-115" y1="0" x2="115" y2="0" stroke="#94a3b8" strokeWidth="1" />
        <line x1="0" y1="-55" x2="0" y2="55" stroke="#94a3b8" strokeWidth="1" />
        <line x1="0" y1="0" x2="100" y2="0" stroke="#f97316" strokeWidth="2" />
        <line x1="0" y1="0" x2="0" y2="38" stroke="#f97316" strokeWidth="2" />
        <circle cx="100" cy="0" r="3" fill="#f97316" />
        <circle cx="0" cy="38" r="3" fill="#f97316" />
        <text x="52" y="-6" textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="700">σ₁</text>
        <text x="12" y="20" textAnchor="start" fontSize="10" fill="#f97316" fontWeight="700">σ₂</text>
        <text x="0" y="78" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">espaço de saída</text>
        <text x="0" y="91" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">(elipse — valores singulares)</text>
        <text x="125" y="5" textAnchor="start" fontSize="10" fill="#64748b">u₁</text>
        <text x="5" y="52" textAnchor="start" fontSize="10" fill="#64748b">u₂</text>
      </g>
    </svg>
  );
}

function DimensionDiagramSVG() {
  return (
    <svg width="100%" viewBox="0 0 780 180" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="780" height="180" fill="var(--bg-secondary)" rx="8" />
      {/* A */}
      <rect x="20" y="45" width="60" height="80" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth="2" rx="6" />
      <text x="50" y="92" textAnchor="middle" fontSize="16" fill={color} fontWeight="700">A</text>
      <text x="50" y="145" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">m × n</text>
      {/* = */}
      <text x="92" y="92" textAnchor="middle" fontSize="20" fill="var(--text-primary)">=</text>
      {/* U */}
      <rect x="108" y="45" width="75" height="80" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" rx="6" />
      <text x="145" y="92" textAnchor="middle" fontSize="16" fill={color} fontWeight="700">U</text>
      <text x="145" y="145" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">m × m</text>
      {/* · */}
      <text x="192" y="92" textAnchor="middle" fontSize="18" fill="var(--text-secondary)">·</text>
      {/* Sigma */}
      <rect x="202" y="45" width="62" height="80" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" rx="6" />
      <text x="233" y="88" textAnchor="middle" fontSize="16" fill={color} fontWeight="700">Σ</text>
      <text x="233" y="145" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">m × n</text>
      <text x="212" y="65" fontSize="9" fill={color}>σ₁</text>
      <text x="224" y="77" fontSize="9" fill={color}>σ₂</text>
      <text x="236" y="89" fontSize="9" fill={color}>·</text>
      <text x="244" y="101" fontSize="9" fill={color}>·</text>
      {/* · */}
      <text x="272" y="92" textAnchor="middle" fontSize="18" fill="var(--text-secondary)">·</text>
      {/* Vt */}
      <rect x="281" y="45" width="75" height="65" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" rx="6" />
      <text x="318" y="85" textAnchor="middle" fontSize="16" fill={color} fontWeight="700">Vᵀ</text>
      <text x="318" y="130" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">n × n</text>
      {/* annotations on the right */}
      <line x1="375" y1="35" x2="770" y2="35" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="385" y="60" fontSize="11" fill="var(--text-primary)"><tspan fontWeight="700" fill={color}>U:</tspan> colunas = vetores singulares esquerdos (ortonormais)</text>
      <text x="385" y="80" fontSize="11" fill="var(--text-primary)"><tspan fontWeight="700" fill={color}>Σ:</tspan> diagonal com σ₁ ≥ σ₂ ≥ ... ≥ 0</text>
      <text x="385" y="100" fontSize="11" fill="var(--text-primary)"><tspan fontWeight="700" fill={color}>V:</tspan> colunas = vetores singulares direitos (ortonormais)</text>
      <text x="385" y="125" fontSize="11" fill="var(--text-secondary)">UᵀU = I,  VᵀV = I</text>
      <text x="385" y="145" fontSize="11" fill="var(--text-secondary)">AᵀA = VΣ²Vᵀ  (eigendecomp)</text>
    </svg>
  );
}

function SingularValueBarSVG() {
  const vals = [9.2, 6.8, 4.1, 2.9, 1.8, 1.1, 0.6, 0.3, 0.15, 0.07];
  const maxV = 9.2;
  const barW = 36;
  const gap = 8;
  const chartH = 120;
  const offX = 40;
  const offY = 20;
  return (
    <svg width="100%" viewBox="0 0 500 200" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="500" height="200" fill="var(--bg-secondary)" rx="8" />
      <text x="250" y="16" textAnchor="middle" fontSize="12" fill="var(--text-secondary)" fontWeight="600">Valores Singulares σᵢ</text>
      {vals.map((v, i) => {
        const h = (v / maxV) * chartH;
        const x = offX + i * (barW + gap);
        const y = offY + chartH - h;
        return (
          <g key={i}>
            <rect x={x} y={y} width={barW} height={h} fill={i < 3 ? color : i < 6 ? 'rgba(249,115,22,0.55)' : 'rgba(249,115,22,0.25)'} rx="2" />
            <text x={x + barW / 2} y={offY + chartH + 14} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{"σ" + (i + 1)}</text>
            <text x={x + barW / 2} y={y - 4} textAnchor="middle" fontSize="9" fill="var(--text-primary)">{v}</text>
          </g>
        );
      })}
      <line x1={offX - 4} y1={offY} x2={offX - 4} y2={offY + chartH} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={offX - 4} y1={offY + chartH} x2={offX + 10 * (barW + gap) - gap + 4} y2={offY + chartH} stroke="var(--text-secondary)" strokeWidth="1" />
      <text x={offX - 8} y={offY + chartH} textAnchor="end" fontSize="9" fill="var(--text-secondary)">0</text>
      <text x={offX - 8} y={offY} textAnchor="end" fontSize="9" fill="var(--text-secondary)">{maxV}</text>
      <rect x="30" y="165" width="12" height="10" fill={color} rx="1" />
      <text x="46" y="174" fontSize="10" fill="var(--text-secondary)">top-3 (dominantes)</text>
      <rect x="155" y="165" width="12" height="10" fill="#f97316" rx="1" />
      <text x="171" y="174" fontSize="10" fill="var(--text-secondary)">médios</text>
      <rect x="215" y="165" width="12" height="10" fill="rgba(249,115,22,0.25)" rx="1" />
      <text x="231" y="174" fontSize="10" fill="var(--text-secondary)">pequenos (ruído)</text>
    </svg>
  );
}

function TruncatedSVDViz() {
  const energies = [
    { k: 1, pct: 42 },
    { k: 5, pct: 71 },
    { k: 20, pct: 88 },
    { k: 50, pct: 96 },
    { k: 100, pct: 99 },
  ];
  return (
    <svg width="100%" viewBox="0 0 560 190" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="560" height="190" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="18" textAnchor="middle" fontSize="12" fill="var(--text-secondary)" fontWeight="600">Energia Capturada pela Aproximação de Rank-k</text>
      {energies.map((e, i) => {
        const x = 40 + i * 100;
        const blockH = 100;
        const filledH = (e.pct / 100) * blockH;
        return (
          <g key={i}>
            <rect x={x} y={35} width={60} height={blockH} fill="var(--text-secondary)" rx="3" />
            <rect x={x} y={35 + blockH - filledH} width={60} height={filledH} fill={color} rx="3" fillOpacity={0.3 + 0.14 * i} />
            <text x={x + 30} y={35 + blockH / 2 + 5} textAnchor="middle" fontSize="13" fill="var(--text-primary)" fontWeight="700">{e.pct}%</text>
            <text x={x + 30} y={148} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">k = {e.k}</text>
          </g>
        );
      })}
      <text x="280" y="172" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Fração da variância: Σᵢ≤ₖ σᵢ² / Σ σᵢ²</text>
    </svg>
  );
}

function PCAScatterSVG() {
  const pts = [
    [55,80],[60,85],[50,75],[65,90],[45,70],[70,95],[40,65],[75,98],[35,60],[80,100],
    [30,55],[85,105],[25,50],[90,110],[20,45],
  ];
  const cx = (x) => 60 + x * 2.2;
  const cy = (y) => 170 - y * 1.1;
  return (
    <svg width="100%" viewBox="0 0 590 200" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="590" height="200" fill="var(--bg-secondary)" rx="8" />
      {/* Scatter */}
      <g>
        <text x="150" y="16" textAnchor="middle" fontSize="12" fill="var(--text-secondary)" fontWeight="600">Dados 2D + Componentes Principais</text>
        <line x1="50" y1="175" x2="250" y2="175" stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1="50" y1="30" x2="50" y2="175" stroke="var(--text-secondary)" strokeWidth="1" />
        {pts.map((p, i) => (
          <circle key={i} cx={cx(p[0])} cy={cy(p[1])} r="4" fill={color} fillOpacity="0.7" />
        ))}
        {/* PC1 direction */}
        <line x1="60" y1="158" x2="230" y2="65" stroke="#f97316" strokeWidth="2.5" strokeDasharray="5,3" />
        <text x="235" y="63" fontSize="11" fill="#f97316" fontWeight="700">PC1</text>
        {/* PC2 direction (perpendicular) */}
        <line x1="140" y1="170" x2="120" y2="100" stroke="#f97316" strokeWidth="2" strokeDasharray="4,3" />
        <text x="108" y="98" fontSize="11" fill="#f97316" fontWeight="700">PC2</text>
        <text x="150" y="192" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Projeção nos PCs = XV = UΣ</text>
      </g>
      {/* Scree plot */}
      <g transform="translate(300,20)">
        <text x="120" y="0" textAnchor="middle" fontSize="12" fill="var(--text-secondary)" fontWeight="600">Scree Plot</text>
        {[72, 18, 6, 2.5, 1, 0.5].map((v, i) => {
          const x = 20 + i * 40;
          const h = v * 1.4;
          return (
            <g key={i}>
              <rect x={x} y={160 - h} width="24" height={h} fill={i === 0 ? color : i === 1 ? '#f97316' : '#cbd5e1'} rx="2" />
              <text x={x + 12} y="173" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">PC{i + 1}</text>
              <text x={x + 12} y={156 - h} textAnchor="middle" fontSize="8" fill="var(--text-primary)">{v}%</text>
            </g>
          );
        })}
        <line x1="15" y1="160" x2="265" y2="160" stroke="var(--text-secondary)" strokeWidth="1" />
      </g>
    </svg>
  );
}

function PseudoinverseCasesSVG() {
  const cases = [
    { label: 'Quadrada\nInvertível', sub: 'm=n, rank=n', desc: 'A⁺ = A⁻¹', color2: '#f97316' },
    { label: 'Sobre-deter.\n(m>n)', sub: 'rank=n', desc: 'mínimos quadrados', color2: color },
    { label: 'Sub-deter.\n(m<n)', sub: 'rank=m', desc: 'norma mínima', color2: '#f97316' },
    { label: 'Rank\nDeficiente', sub: 'rank<min(m,n)', desc: 'solução mais estável', color2: '#f97316' },
  ];
  return (
    <svg width="100%" viewBox="0 0 600 160" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="600" height="160" fill="var(--bg-secondary)" rx="8" />
      <text x="300" y="18" textAnchor="middle" fontSize="12" fill="var(--text-secondary)" fontWeight="600">Pseudo-inversa: 4 Casos</text>
      {cases.map((c, i) => {
        const x = 20 + i * 145;
        const lines = c.label.split('\n');
        return (
          <g key={i}>
            <rect x={x} y={28} width={130} height={115} fill="none" stroke={c.color2} strokeWidth="1.5" rx="6" />
            <rect x={x} y={28} width={130} height={30} fill={c.color2} fillOpacity="0.15" rx="6" />
            <text x={x + 65} y={44} textAnchor="middle" fontSize="11" fill={c.color2} fontWeight="700">{lines[0]}</text>
            <text x={x + 65} y={57} textAnchor="middle" fontSize="11" fill={c.color2} fontWeight="700">{lines[1]}</text>
            <text x={x + 65} y={80} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{c.sub}</text>
            <text x={x + 65} y={110} textAnchor="middle" fontSize="11" fill="var(--text-primary)" fontWeight="600">{c.desc}</text>
            <text x={x + 65} y={133} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">x = A⁺b</text>
          </g>
        );
      })}
    </svg>
  );
}

function CompressionCurveSVG() {
  const pts = [
    [1, 5], [5, 18], [10, 38], [20, 62], [30, 75], [50, 87], [80, 94], [120, 98], [200, 99.5],
  ];
  const maxK = 200;
  const scaleX = (k) => 50 + (k / maxK) * 460;
  const scaleY = (v) => 165 - (v / 100) * 130;
  const pathD = pts.map((p, i) => (i === 0 ? `M${scaleX(p[0])},${scaleY(p[1])}` : `L${scaleX(p[0])},${scaleY(p[1])}`)).join(' ');
  return (
    <svg width="100%" viewBox="0 0 560 200" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="560" height="200" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="18" textAnchor="middle" fontSize="12" fill="var(--text-secondary)" fontWeight="600">Variância Acumulada vs Número de Componentes (k)</text>
      <line x1="50" y1="165" x2="515" y2="165" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="50" y1="35" x2="50" y2="165" stroke="var(--text-secondary)" strokeWidth="1" />
      <path d={pathD} fill="none" stroke={color} strokeWidth="2.5" />
      {/* 90% line */}
      <line x1="50" y1={scaleY(90)} x2="515" y2={scaleY(90)} stroke="#f97316" strokeWidth="1" strokeDasharray="5,4" />
      <text x="520" y={scaleY(90) + 4} fontSize="10" fill="#f97316">90%</text>
      {pts.map((p, i) => (
        <circle key={i} cx={scaleX(p[0])} cy={scaleY(p[1])} r="3" fill={color} />
      ))}
      {[0, 50, 100, 150, 200].map(v => (
        <g key={v}>
          <text x={scaleX(v)} y="178" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{v}</text>
          <line x1={scaleX(v)} y1="165" x2={scaleX(v)} y2="168" stroke="var(--text-secondary)" strokeWidth="1" />
        </g>
      ))}
      {[0, 25, 50, 75, 100].map(v => (
        <g key={v}>
          <text x="44" y={scaleY(v) + 4} textAnchor="end" fontSize="9" fill="var(--text-secondary)">{v}%</text>
          <line x1="47" y1={scaleY(v)} x2="50" y2={scaleY(v)} stroke="var(--text-secondary)" strokeWidth="1" />
        </g>
      ))}
      <text x="280" y="192" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">k (número de valores singulares mantidos)</text>
    </svg>
  );
}

function RecommenderSVG() {
  const users = ['U1', 'U2', 'U3', 'U4'];
  const items = ['I1', 'I2', 'I3', 'I4', 'I5'];
  const ratings = [
    [5, 3, 0, 1, 4],
    [4, 0, 4, 1, 2],
    [1, 1, 0, 5, 4],
    [0, 0, 5, 4, 0],
  ];
  const cellW = 42;
  const cellH = 32;
  return (
    <svg width="100%" viewBox="0 0 580 210" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="580" height="210" fill="var(--bg-secondary)" rx="8" />
      <text x="115" y="18" textAnchor="middle" fontSize="12" fill="var(--text-secondary)" fontWeight="600">Matriz R (Usuários × Itens)</text>
      {items.map((it, j) => (
        <text key={j} x={30 + cellW * j + cellW / 2} y="36" textAnchor="middle" fontSize="11" fill="var(--text-secondary)" fontWeight="600">{it}</text>
      ))}
      {users.map((u, i) =>
        items.map((_, j) => {
          const v = ratings[i][j];
          const bg = v === 0 ? '#f1f5f9' : color;
          const opacity = v === 0 ? 1 : 0.15 + v * 0.14;
          return (
            <g key={i * 10 + j}>
              <rect x={28 + j * cellW} y={40 + i * cellH} width={cellW - 2} height={cellH - 2} fill={v === 0 ? 'var(--card-border)' : color} fillOpacity={v === 0 ? 0.2 : opacity} rx="3" />
              <text x={28 + j * cellW + cellW / 2} y={40 + i * cellH + cellH / 2 + 4} textAnchor="middle" fontSize="12" fill={v === 0 ? '#94a3b8' : 'var(--text-primary)'} fontWeight={v > 3 ? '700' : '400'}>{v === 0 ? '?' : v}</text>
            </g>
          );
        })
      )}
      {users.map((u, i) => (
        <text key={i} x="18" y={40 + i * cellH + cellH / 2 + 4} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">{u}</text>
      ))}
      {/* Arrow */}
      <line x1="240" y1="105" x2="280" y2="105" stroke={color} strokeWidth="2" />
      <polygon points="280,105 272,101 272,109" fill={color} />
      <text x="260" y="98" textAnchor="middle" fontSize="10" fill={color}>SVD</text>
      {/* Latent factors */}
      <g transform="translate(295,40)">
        <text x="120" y="-8" textAnchor="middle" fontSize="12" fill="var(--text-secondary)" fontWeight="600">Fatores Latentes</text>
        <rect x="0" y="0" width="55" height="115" fill="none" stroke="#f97316" strokeWidth="1.5" rx="4" />
        <text x="27" y="55" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="700">U</text>
        <text x="27" y="70" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">usuários</text>
        <text x="27" y="82" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">× fatores</text>
        <rect x="65" y="35" width="75" height="45" fill="none" stroke="#f97316" strokeWidth="1.5" rx="4" />
        <text x="102" y="60" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="700">Σ</text>
        <rect x="150" y="0" width="55" height="115" fill="none" stroke="#f97316" strokeWidth="1.5" rx="4" />
        <text x="177" y="55" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="700">Vᵀ</text>
        <text x="177" y="70" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">fatores</text>
        <text x="177" y="82" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">× itens</text>
        <text x="102" y="135" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">R ≈ U Σ Vᵀ  (completar ?)</text>
      </g>
    </svg>
  );
}

function LSAWordsSVG() {
  const words = [
    { w: 'matrix', x: 80, y: 60, topic: 0 },
    { w: 'algebra', x: 110, y: 90, topic: 0 },
    { w: 'vector', x: 60, y: 85, topic: 0 },
    { w: 'dog', x: 230, y: 70, topic: 1 },
    { w: 'cat', x: 260, y: 95, topic: 1 },
    { w: 'pet', x: 245, y: 120, topic: 1 },
    { w: 'learn', x: 150, y: 130, topic: 2 },
    { w: 'model', x: 175, y: 100, topic: 2 },
    { w: 'train', x: 155, y: 155, topic: 2 },
  ];
  const topicColors = ['#f97316', '#fdba74', '#fb923c'];
  return (
    <svg width="100%" viewBox="0 0 400 222" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="400" height="222" fill="var(--bg-secondary)" rx="8" />
      <text x="200" y="18" textAnchor="middle" fontSize="12" fill="var(--text-secondary)" fontWeight="600">Vetores de Palavras no Espaço Latente (LSA 2D)</text>
      <line x1="20" y1="185" x2="380" y2="185" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="20" y1="30" x2="20" y2="185" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="200" y="218" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">tópico latente 1</text>
      <text x="10" y="110" textAnchor="middle" fontSize="9" fill="var(--text-secondary)" transform="rotate(-90,10,110)">tópico latente 2</text>
      {words.map((wd, i) => (
        <g key={i}>
          <circle cx={wd.x} cy={wd.y} r="18" fill={topicColors[wd.topic]} fillOpacity="0.15" stroke={topicColors[wd.topic]} strokeWidth="1.5" />
          <text x={wd.x} y={wd.y + 4} textAnchor="middle" fontSize="10" fill={topicColors[wd.topic]} fontWeight="600">{wd.w}</text>
        </g>
      ))}
      {/* cluster labels */}
      <text x="82" y="198" textAnchor="middle" fontSize="10" fill={topicColors[0]}>● álgebra</text>
      <text x="200" y="198" textAnchor="middle" fontSize="10" fill={topicColors[1]}>● animais</text>
      <text x="350" y="198" textAnchor="middle" fontSize="10" fill={topicColors[2]}>● ML</text>
    </svg>
  );
}

function RandomizedSVDDiagramSVG() {
  return (
    <svg width="100%" viewBox="0 0 600 160" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="600" height="160" fill="var(--bg-secondary)" rx="8" />
      <text x="300" y="18" textAnchor="middle" fontSize="12" fill="var(--text-secondary)" fontWeight="600">SVD Randomizado (Sketch) — Complexidade O(mn·k)</text>
      {/* Steps */}
      {[
        { label: 'A (m×n)', sub: 'matriz original', x: 20, c: '#64748b' },
        { label: 'Ω (n×k)', sub: 'matriz aleatória', x: 133, c: '#f97316' },
        { label: 'Y = AΩ\n(m×k)', sub: 'sketch', x: 246, c: '#f97316' },
        { label: 'Q (m×k)', sub: 'base ortonormal', x: 359, c: '#f97316' },
        { label: 'SVD(QᵀA)', sub: 'pequena!', x: 472, c: color },
      ].map((s, i, arr) => {
        const lines = s.label.split('\n');
        const nextX = arr[i + 1]?.x;
        return (
          <g key={i}>
            <rect x={s.x} y="35" width="90" height="80" fill="none" stroke={s.c} strokeWidth="1.5" rx="5" />
            <text x={s.x + 45} y={lines.length > 1 ? 70 : 78} textAnchor="middle" fontSize="12" fill={s.c} fontWeight="700">{lines[0]}</text>
            {lines[1] && <text x={s.x + 45} y="86" textAnchor="middle" fontSize="12" fill={s.c} fontWeight="700">{lines[1]}</text>}
            <text x={s.x + 45} y="128" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{s.sub}</text>
            {nextX != null && <>
              <line x1={s.x + 91} y1="75" x2={nextX - 4} y2="75" stroke={s.c} strokeWidth="1.5" />
              <polygon points={`${nextX - 1},75 ${nextX - 8},70 ${nextX - 8},80`} fill={s.c} />
            </>}
          </g>
        );
      })}
    </svg>
  );
}

function DecompComparisonSVG() {
  const rows = [
    ['SVD', 'A = UΣVᵀ', 'qualquer', 'Sim', 'mais estável', 'PCA, pseudo-inv, LSA'],
    ['Eigen', 'A = QΛQ⁻¹', 'quadrada', 'Não (geral)', 'moderada', 'sistemas dinâmicos'],
    ['QR', 'A = QR', 'qualquer', 'Sim', 'alta', 'least-squares, Gram-Schmidt'],
    ['LU', 'A = LU', 'quadrada', 'Não', 'alta', 'sistemas lineares diretos'],
  ];
  return (
    <svg width="100%" viewBox="0 0 620 180" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="620" height="180" fill="var(--bg-secondary)" rx="8" />
      <text x="310" y="18" textAnchor="middle" fontSize="12" fill="var(--text-secondary)" fontWeight="600">Comparação: Decomposições Matriciais</text>
      {['Decomp.', 'Forma', 'Matriz', 'Ortonormal', 'Estabilidade', 'Uso principal'].map((h, i) => {
        const xs = [10, 60, 145, 230, 310, 390];
        return <text key={i} x={xs[i] + 2} y="36" fontSize="10" fill="var(--text-secondary)" fontWeight="700">{h}</text>;
      })}
      <line x1="8" y1="40" x2="612" y2="40" stroke="var(--text-secondary)" strokeWidth="1" />
      {rows.map((row, i) => {
        const xs = [10, 60, 145, 230, 310, 390];
        const y = 58 + i * 30;
        return (
          <g key={i}>
            {i % 2 === 0 && <rect x="8" y={y - 14} width="606" height="28" fill={color} fillOpacity="0.05" rx="2" />}
            {row.map((cell, j) => (
              <text key={j} x={xs[j] + 2} y={y + 4} fontSize="10" fill={j === 0 ? color : 'var(--text-primary)'} fontWeight={j === 0 ? '700' : '400'}>{cell}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

function SVDApplicationsMapSVG() {
  const apps = [
    { label: 'PCA',               x: 175, y: 52,  c: color    },
    { label: 'Recommenders',      x: 390, y: 52,  c: '#f97316' },
    { label: 'Compressão\nde Imagens', x: 68, y: 150, c: '#f97316' },
    { label: 'Pseudo-inv.\n(Ax=b)',    x: 472, y: 150, c: '#f97316' },
    { label: 'Cond. Number\n& Estabilidade', x: 148, y: 248, c: '#f97316' },
    { label: 'LSA / NLP',         x: 270, y: 262, c: '#f97316' },
    { label: 'Denoising\n& Filtros',   x: 392, y: 248, c: '#f97316' },
  ];
  const cx = 270, cy = 145, crx = 55, cry = 32;
  const arx = 52, ary = 22;
  const edgePt = (ox, oy, rx, ry, dx, dy) => {
    const t = 1 / Math.sqrt((dx / rx) ** 2 + (dy / ry) ** 2);
    return [ox + dx * t, oy + dy * t];
  };
  return (
    <svg width="100%" viewBox="0 0 540 305" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="540" height="305" fill="var(--bg-secondary)" rx="8" />
      {apps.map((a, i) => {
        const dx = a.x - cx, dy = a.y - cy;
        const [x1, y1] = edgePt(cx, cy, crx, cry, dx, dy);
        const [x2, y2] = edgePt(a.x, a.y, arx, ary, -dx, -dy);
        const lines = a.label.split('\n');
        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={a.c} strokeWidth="1.2" strokeDasharray="4,3" strokeOpacity="0.6" />
            <ellipse cx={a.x} cy={a.y} rx={arx} ry={ary} fill={a.c} fillOpacity="0.12" stroke={a.c} strokeWidth="1.5" />
            <text x={a.x} y={lines.length > 1 ? a.y - 4 : a.y + 4} textAnchor="middle" fontSize="10" fill={a.c} fontWeight="700">{lines[0]}</text>
            {lines[1] && <text x={a.x} y={a.y + 10} textAnchor="middle" fontSize="10" fill={a.c} fontWeight="700">{lines[1]}</text>}
          </g>
        );
      })}
      {/* Center node drawn last so it sits on top */}
      <ellipse cx={cx} cy={cy} rx={crx} ry={cry} fill={color} fillOpacity="0.18" stroke={color} strokeWidth="2" />
      <text x={cx} y={cy - 4} textAnchor="middle" fontSize="13" fill={color} fontWeight="800">SVD</text>
      <text x={cx} y={cy + 11} textAnchor="middle" fontSize="10" fill={color}>A = UΣVᵀ</text>
    </svg>
  );
}

export default function LA6() {
  return (
    <div style={S.page}>
      <Link to="/linalg" style={S.back}><ArrowLeft size={16} /> Voltar a Álgebra Linear</Link>
      <div style={S.tag}>MÓDULO 06</div>
      <h1 style={S.h1}>SVD — Singular Value Decomposition</h1>
      <p style={S.lead}>
        A Decomposição em Valores Singulares é uma das ferramentas mais poderosas e versáteis da álgebra linear numérica.
        Funciona para qualquer matriz — não apenas quadradas ou simétricas — e está na base de PCA, sistemas de recomendação,
        compressão de imagens, análise semântica latente e muito mais. Neste módulo exploramos teoria, intuição geométrica
        e aplicações práticas em Data Science.
      </p>

      {/* ─── Section 1: Intuição Geométrica ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Intuição Geométrica</h2>
        <p style={S.p}>
          Toda transformação linear pode ser vista como uma composição de três operações simples: uma rotação no espaço de entrada,
          um alongamento (scaling) em direções ortogonais, e uma rotação no espaço de saída. Esta é a essência do SVD.
        </p>
        <div style={S.highlight}>
          <strong>Teorema fundamental (SVD):</strong> Qualquer matriz real A pode ser escrita como
          A = U Σ Vᵀ, onde U e V são matrizes ortogonais e Σ é diagonal com entradas não-negativas.
        </div>
        <p style={S.p}>
          Geometricamente: a matriz V define uma rotação/reflexão no espaço de entrada; Σ realiza o scaling ao longo dos eixos;
          e U define outra rotação/reflexão no espaço de saída. O resultado? Um círculo unitário é transformado em uma elipse,
          cujos semi-eixos são exatamente os valores singulares σᵢ.
        </p>
        <CircleToEllipseSVG />
        <p style={S.p}>
          As colunas de U (vetores singulares esquerdos) apontam nas direções em que a imagem da transformação se estende.
          As colunas de V (vetores singulares direitos) são as direções de entrada correspondentes. σ₁ ≥ σ₂ ≥ ... ≥ 0
          medem o quão "esticada" é cada direção.
        </p>
        <div style={S.note}>
          Analogia: se A representa uma câmera distorcendo um círculo de luz numa parede, U define a orientação da elipse
          projetada, V define a orientação do feixe de entrada, e Σ define os tamanhos dos eixos da elipse.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 2: Definição Formal ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Definição Formal</h2>
        <p style={S.p}>
          Seja A uma matriz real m × n. O SVD de A é a fatorização:
        </p>
        <div style={S.highlight}>
          A (m×n) = U (m×m) · Σ (m×n) · Vᵀ (n×n)
        </div>
        <DimensionDiagramSVG />
        <h3 style={S.h3}>Propriedades das matrizes fatoradas</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Matriz</th>
              <th style={S.th}>Dimensão</th>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Significado</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['U', 'm × m', 'Ortogonal (UᵀU = UUᵀ = I)', 'Rotação/reflexão no espaço de saída'],
              ['Σ', 'm × n', 'Diagonal (σ₁ ≥ σ₂ ≥ ... ≥ 0)', 'Fatores de escala por direção'],
              ['Vᵀ', 'n × n', 'Ortogonal (VᵀV = VVᵀ = I)', 'Rotação/reflexão no espaço de entrada'],
            ].map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => <td key={j} style={S.td}>{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Relação com Eigendecomposição</h3>
        <p style={S.p}>
          Os vetores singulares e valores singulares estão diretamente relacionados com os autovalores e autovetores
          das matrizes simétricas AᵀA e AAᵀ:
        </p>
        <div style={S.highlight}>
          AᵀA = V Σᵀ Uᵀ U Σ Vᵀ = V Σ² Vᵀ — eigendecomp de AᵀA
          <br />
          AAᵀ = U Σ Vᵀ V Σᵀ Uᵀ = U Σ² Uᵀ — eigendecomp de AAᵀ
        </div>
        <p style={S.p}>
          Portanto, as colunas de V são autovetores de AᵀA, as colunas de U são autovetores de AAᵀ,
          e σᵢ = √λᵢ onde λᵢ são os autovalores de AᵀA.
        </p>
        <div style={S.note}>
          SVD thin (reduzido): na prática usa-se o SVD "thin" onde U é m×r e Σ é r×r (r = rank), economizando memória.
          numpy.linalg.svd(A, full_matrices=False) retorna o SVD thin.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 3: Valores Singulares ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Valores Singulares</h2>
        <p style={S.p}>
          Os valores singulares σᵢ são os "pesos" de cada direção ortogonal — quanto a transformação A estica o espaço
          naquela direção. Eles contêm informação fundamental sobre a matriz.
        </p>
        <SingularValueBarSVG />
        <h3 style={S.h3}>Normas e Rank via SVD</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Grandeza</th>
              <th style={S.th}>Fórmula em termos de σᵢ</th>
              <th style={S.th}>Interpretação</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Norma espectral ||A||₂', 'σ₁', 'maior stretching'],
              ['Norma de Frobenius ||A||F', '√(σ₁² + σ₂² + ... + σr²)', 'energia total'],
              ['Rank(A)', 'número de σᵢ > 0', 'dimensão da imagem'],
              ['Número de condição κ(A)', 'σ_max / σ_min', 'sensibilidade numérica'],
              ['Determinante (se quadrada)', 'Π σᵢ', 'produto de todos os σᵢ'],
            ].map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => <td key={j} style={S.td}>{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Valores Singulares e Informação</h3>
        <p style={S.p}>
          Valores singulares grandes capturam a estrutura principal dos dados; valores pequenos correspondem a detalhes
          finos ou ruído. Esta hierarquia é a base para todas as aplicações de compressão e redução dimensional.
          σᵢ² é proporcional à variância explicada pela i-ésima direção singular.
        </p>
        <div style={S.note}>
          Em matrizes de dados reais, os primeiros poucos valores singulares frequentemente capturam 80-95% da variância total,
          enquanto os restantes contribuem com ruído. Isto é explorado na aproximação de baixo rank.
        </div>
        <div style={S.code}>{`import numpy as np

A = np.random.randn(100, 50)
U, s, Vt = np.linalg.svd(A, full_matrices=False)

# Normas
norm_spectral = s[0]           # norma 2
norm_frobenius = np.linalg.norm(s)  # norma Frobenius
rank_A = np.sum(s > 1e-10)    # rank numérico

# Variância cumulativa
var_explained = np.cumsum(s**2) / np.sum(s**2)
k90 = np.searchsorted(var_explained, 0.90) + 1
print(f"k para 90% variância: {k90}")`}</div>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 4: Truncated SVD ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. SVD Truncado — Aproximação de Rank-k</h2>
        <p style={S.p}>
          A aplicação mais imediata do SVD é construir a melhor aproximação possível de A com rank limitado.
          A aproximação de rank-k é obtida mantendo apenas os k maiores valores singulares:
        </p>
        <div style={S.highlight}>
          Aₖ = Σᵢ₌₁ᵏ σᵢ · uᵢ · vᵢᵀ
          <br />
          (soma de k matrizes de rank 1, ponderadas por σᵢ)
        </div>
        <h3 style={S.h3}>Teorema de Eckart-Young-Mirsky</h3>
        <p style={S.p}>
          Entre todas as matrizes B de rank ≤ k, Aₖ minimiza a distância a A tanto na norma espectral como na
          norma de Frobenius:
        </p>
        <div style={S.highlight}>
          ||A − Aₖ||₂ = σₖ₊₁ &nbsp;&nbsp;&nbsp; ||A − Aₖ||F = √(σₖ₊₁² + ... + σᵣ²)
          <br />
          Aₖ = argmin(rank(B)≤k) ||A − B||
        </div>
        <TruncatedSVDViz />
        <h3 style={S.h3}>Fração de Variância Explicada</h3>
        <p style={S.p}>
          Para escolher k em aplicações práticas, usa-se a fração da variância total capturada:
        </p>
        <div style={S.highlight}>
          var_explained(k) = Σᵢ₌₁ᵏ σᵢ² / Σᵢ₌₁ʳ σᵢ²
        </div>
        <p style={S.p}>
          Tipicamente escolhe-se k tal que var_explained(k) ≥ 0.90 ou 0.95. Isto preserva a maioria da informação
          descartando ruído e reduzindo custo computacional e memória.
        </p>
        <div style={S.code}>{`# SVD truncado em NumPy
U, s, Vt = np.linalg.svd(A, full_matrices=False)
k = 20  # manter top-20 componentes

# Aproximação de rank-k
A_k = U[:, :k] @ np.diag(s[:k]) @ Vt[:k, :]

# Ou mais eficiente com broadcasting
A_k = (U[:, :k] * s[:k]) @ Vt[:k, :]

# Erro de reconstrução
erro = np.linalg.norm(A - A_k, 'fro')
print(f"Erro Frobenius: {erro:.4f}")
print(f"Variância capturada: {np.sum(s[:k]**2)/np.sum(s**2)*100:.1f}%")

# Via sklearn para matrizes grandes/esparsas
from sklearn.decomposition import TruncatedSVD
svd = TruncatedSVD(n_components=k, random_state=42)
A_reduced = svd.fit_transform(A)  # shape (m, k)`}</div>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 5: SVD e PCA ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. SVD e PCA — Conexão Fundamental</h2>
        <p style={S.p}>
          PCA (Principal Component Analysis) e SVD são matematicamente equivalentes quando aplicados à matriz de dados
          centrada. Esta conexão é a razão pela qual o SVD é o algoritmo preferido para calcular PCA numericamente.
        </p>
        <h3 style={S.h3}>Derivação</h3>
        <p style={S.p}>
          Seja X a matriz de dados m×n centrada (média das colunas subtraída). Aplicando SVD: X = UΣVᵀ.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Conceito PCA</th>
              <th style={S.th}>Expressão via SVD</th>
              <th style={S.th}>Dimensão</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Componentes principais', 'colunas de V', 'n × n'],
              ['Scores (projeções)', 'XV = UΣ', 'm × n'],
              ['Autovalores da covariância', 'σᵢ² / (m−1)', 'escalar'],
              ['Variância explicada pelo PCi', 'σᵢ² / Σσⱼ²', 'escalar'],
              ['Reconstrução em k dims', 'UₖΣₖVₖᵀ', 'm × n'],
            ].map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => <td key={j} style={S.td}>{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <PCAScatterSVG />
        <div style={S.note}>
          Vantagem do SVD vs eigendecomp: o SVD opera diretamente em X, evitando calcular XᵀX que é numericamente
          menos estável (eleva ao quadrado o número de condição). Para dados com m muito grande, usa-se o SVD thin.
        </div>
        <div style={S.code}>{`import numpy as np
from sklearn.preprocessing import StandardScaler

# Dados: X (m amostras × n features)
X = np.random.randn(1000, 50)

# Centrar (e opcionalmente escalar)
X_c = X - X.mean(axis=0)

# SVD → PCA
U, s, Vt = np.linalg.svd(X_c, full_matrices=False)

k = 10
# Componentes principais (loadings)
components = Vt[:k]           # shape (k, n)

# Scores (projeções nos PCs)
scores = U[:, :k] * s[:k]    # shape (m, k)

# Equivalente a:
scores_alt = X_c @ Vt[:k].T

# Autovalores da matriz de covariância
eigenvalues = s**2 / (X.shape[0] - 1)

# Via sklearn
from sklearn.decomposition import PCA
pca = PCA(n_components=k)
scores_sk = pca.fit_transform(X_c)
# pca.components_ == Vt[:k] (± sinal)`}</div>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 6: Pseudo-inversa ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Pseudo-inversa de Moore-Penrose</h2>
        <p style={S.p}>
          Para matrizes não-quadradas ou rank-deficientes, a inversa clássica não existe. A pseudo-inversa de Moore-Penrose
          A⁺ generaliza a inversão usando SVD e fornece a solução mais "sensata" para sistemas Ax = b.
        </p>
        <div style={S.highlight}>
          A⁺ = V Σ⁺ Uᵀ
          <br />
          Σ⁺: inverte cada diagonal não-nulo de Σ, mantém zeros no lugar de zeros.
          <br />
          Solução: x = A⁺ b
        </div>
        <PseudoinverseCasesSVG />
        <h3 style={S.h3}>O que a pseudo-inversa minimiza?</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Caso</th>
              <th style={S.th}>x = A⁺b minimiza</th>
              <th style={S.th}>Entre todas as soluções</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Overdetermined (m>n)', '||Ax − b||₂²', 'com menor ||x||'],
              ['Underdetermined (m<n)', '||x||₂', 'entre soluções exatas Ax=b'],
              ['Rank-deficiente', '||Ax − b||₂² + λ||x||²', 'mínima norma, mínimo resíduo'],
            ].map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => <td key={j} style={S.td}>{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.code}>{`import numpy as np

A = np.array([[1, 2], [3, 4], [5, 6]])  # 3×2, overdetermined
b = np.array([1, 2, 3])

# Pseudo-inversa via SVD
U, s, Vt = np.linalg.svd(A, full_matrices=False)
tol = 1e-10
s_inv = np.where(s > tol, 1.0 / s, 0.0)
A_pinv = Vt.T @ np.diag(s_inv) @ U.T

x_ls = A_pinv @ b   # solução de mínimos quadrados

# Mais simples:
A_pinv2 = np.linalg.pinv(A)
x_ls2 = A_pinv2 @ b

# Verificar: resíduo mínimo
print("Resíduo:", np.linalg.norm(A @ x_ls - b))
print("||x||:", np.linalg.norm(x_ls))`}</div>
        <div style={S.note}>
          Regularização: em vez de inverter σᵢ pequenos, pode-se usar regularização de Tikhonov: σᵢ / (σᵢ² + λ).
          Isso estabiliza a solução quando A é quase rank-deficiente (σ_min ≈ 0).
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 7: Compressão de Imagens ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Compressão de Imagens com SVD</h2>
        <p style={S.p}>
          Uma imagem em escala de cinza é naturalmente uma matriz m×n de valores de pixel. O SVD permite comprimir
          esta matriz mantendo apenas os k maiores valores singulares, sacrificando qualidade por espaço de armazenamento.
        </p>
        <h3 style={S.h3}>Taxa de Compressão</h3>
        <p style={S.p}>
          Uma imagem m×n original armazena m·n valores. Com rank-k SVD, armazenamos:
          k·m (U) + k (Σ) + k·n (Vᵀ) = k·(m + n + 1) valores.
        </p>
        <div style={S.highlight}>
          Taxa de compressão = k·(m + n + 1) / (m·n)
          <br />
          Para imagem 512×512 com k=50: 50·1025 / 262144 ≈ 19.5% do original
        </div>
        <CompressionCurveSVG />
        <h3 style={S.h3}>Reconstrução por número de componentes</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>k</th>
              <th style={S.th}>Variância capturada</th>
              <th style={S.th}>Qualidade visual</th>
              <th style={S.th}>Tamanho relativo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1', '~42%', 'contorno grosseiro', '0.4%'],
              ['5', '~71%', 'estrutura reconhecível', '2%'],
              ['20', '~88%', 'boa qualidade', '7.8%'],
              ['50', '~96%', 'quase indistinguível', '19.5%'],
              ['100', '~99%', 'praticamente original', '39%'],
            ].map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => <td key={j} style={S.td}>{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.code}>{`import numpy as np
import matplotlib.pyplot as plt
from PIL import Image

# Carregar imagem em escala de cinza
img = np.array(Image.open("foto.jpg").convert("L"), dtype=float)

# SVD
U, s, Vt = np.linalg.svd(img, full_matrices=False)

def reconstruir(U, s, Vt, k):
    return U[:, :k] @ np.diag(s[:k]) @ Vt[:k, :]

fig, axes = plt.subplots(1, 4, figsize=(16, 4))
for ax, k in zip(axes, [1, 5, 20, 50]):
    img_k = np.clip(reconstruir(U, s, Vt, k), 0, 255)
    ax.imshow(img_k, cmap='gray')
    var = np.sum(s[:k]**2) / np.sum(s**2) * 100
    ax.set_title(f"k={k}  ({var:.0f}% variância)")
    ax.axis('off')
plt.tight_layout()
plt.show()`}</div>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 8: Sistemas de Recomendação ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Sistemas de Recomendação — Matrix Factorization</h2>
        <p style={S.p}>
          Em sistemas de recomendação, temos uma matriz R (usuários × itens) com muitas entradas faltantes (ratings não observados).
          O objetivo é fatorar R ≈ UΣVᵀ para predizer os valores ausentes com base em padrões latentes.
        </p>
        <RecommenderSVG />
        <h3 style={S.h3}>Fatores Latentes</h3>
        <p style={S.p}>
          Cada fator latente captura um "tema" oculto: géneros de filmes, estilos musicais, categorias de produto.
          Usuários e itens são representados por vetores nesses k fatores, e a predição é o produto interno.
        </p>
        <div style={S.highlight}>
          R̂ᵤᵢ = uᵤᵀ · vᵢ  (produto interno dos fatores latentes do utilizador u e do item i)
        </div>
        <h3 style={S.h3}>SVD Clássico vs Matrix Factorization Moderna</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Lida com valores faltantes</th>
              <th style={S.th}>Escalabilidade</th>
              <th style={S.th}>Implementação</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['SVD clássico', 'Não (precisa de imputação)', 'Limitada', 'np.linalg.svd'],
              ['FunkSVD', 'Sim (gradient descent)', 'Moderada', 'surprise, implicit'],
              ['ALS', 'Sim (alternating LS)', 'Alta (paralelo)', 'spark.ml, lightfm'],
              ['SVD++ (Koren)', 'Sim + feedback implícito', 'Alta', 'surprise'],
            ].map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => <td key={j} style={S.td}>{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.code}>{`# Matrix Factorization com Gradient Descent (FunkSVD)
import numpy as np

def funk_svd(R, k=10, lr=0.01, reg=0.1, epochs=100):
    m, n = R.shape
    mask = R > 0  # entradas observadas

    # Inicialização
    U = np.random.normal(0, 0.1, (m, k))
    V = np.random.normal(0, 0.1, (n, k))

    for epoch in range(epochs):
        # Gradiente descendente apenas nas entradas observadas
        R_pred = U @ V.T
        E = (R - R_pred) * mask

        U += lr * (E @ V - reg * U)
        V += lr * (E.T @ U - reg * V)

        loss = 0.5 * np.sum(E**2) + 0.5 * reg * (np.sum(U**2) + np.sum(V**2))
        if epoch % 10 == 0:
            print(f"Epoch {epoch}: loss={loss:.4f}")

    return U, V

# Predizer rating faltante
# R_hat[u, i] = U[u] @ V[i]`}</div>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 9: LSA ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. LSA — Latent Semantic Analysis</h2>
        <p style={S.p}>
          Latent Semantic Analysis (LSA) aplica SVD a uma matriz termo-documento para descobrir tópicos semânticos latentes.
          Palavras e documentos são representados no mesmo espaço vetorial de baixa dimensão.
        </p>
        <h3 style={S.h3}>Pipeline LSA</h3>
        <p style={S.p}>
          1. Construir a matriz TF-IDF: T (termos × documentos) onde Tᵢⱼ = frequência do termo i no documento j (ponderada).
          2. Aplicar SVD: T = UΣVᵀ.
          3. Reduzir para k dimensões: Tₖ = UₖΣₖVₖᵀ.
          4. Cada coluna de Uₖ é um "tópico"; cada documento é um vetor em Rᵏ.
        </p>
        <LSAWordsSVG />
        <div style={S.highlight}>
          Similaridade entre documentos: cos(dᵢ, dⱼ) = (Uₖᵢ · Uₖⱼ) / (||Uₖᵢ|| · ||Uₖⱼ||)
          <br />
          Recuperação de informação: consulta projetada no espaço latente → documentos mais similares
        </div>
        <div style={S.code}>{`from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import TruncatedSVD
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import Normalizer
import numpy as np

corpus = [
    "álgebra linear matrizes vetores",
    "animais cão gato estimação",
    "machine learning modelos treino",
    "matrizes transformações lineares",
    "cão gato animal doméstico",
    "redes neurais aprendizado profundo",
]

# Pipeline LSA
vectorizer = TfidfVectorizer(max_features=1000)
X_tfidf = vectorizer.fit_transform(corpus)  # sparse (docs × terms)

# SVD Truncado
svd = TruncatedSVD(n_components=2, random_state=42)
X_lsa = svd.fit_transform(X_tfidf)  # (docs × k)

# Normalizar para cosine similarity
X_norm = Normalizer().fit_transform(X_lsa)

# Similaridade entre documentos 0 e 3
sim = X_norm[0] @ X_norm[3]
print(f"Similaridade (doc0, doc3): {sim:.3f}")

# Retrieval: dado query, encontrar docs similares
query = vectorizer.transform(["vetores e matrizes"])
query_lsa = svd.transform(query)
sims = query_lsa @ X_norm.T
top_docs = np.argsort(sims[0])[::-1]
print("Docs mais relevantes:", top_docs)`}</div>
        <div style={S.note}>
          LSA captura relações semânticas que TF-IDF não consegue: "carro" e "automóvel" ficam próximos no espaço latente
          mesmo sem co-ocorrência directa. Limitação: não modela polissemia (uma palavra com vários significados).
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 10: Numerical SVD ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. SVD Numérico — Algoritmos</h2>
        <p style={S.p}>
          O cálculo eficiente do SVD é um problema central da álgebra linear numérica. Diferentes algoritmos
          têm trade-offs entre custo computacional, precisão e paralelizabilidade.
        </p>
        <h3 style={S.h3}>Algoritmo Golub-Reinsch (clássico)</h3>
        <p style={S.p}>
          O algoritmo padrão para SVD denso usa dois passos principais:
        </p>
        <p style={S.p}>
          1. Bidiagonalização (Householder): reduz A a forma bidiagonal B tal que A = U₁BV₁ᵀ em tempo O(mn²).
          2. Iteração QR implícita: calcula SVD de B com shift de Wilkinson até convergência.
          Complexidade total: O(mn · min(m,n)).
        </p>
        <h3 style={S.h3}>Divide and Conquer</h3>
        <p style={S.p}>
          Alternativa mais rápida na prática para matrizes grandes: divide B em sub-problemas menores recursivamente,
          resolve cada um, e combina. Implementado em LAPACK como dgesdd (padrão em NumPy).
        </p>
        <h3 style={S.h3}>SVD Randomizado (Halko-Martinsson-Tropp)</h3>
        <RandomizedSVDDiagramSVG />
        <p style={S.p}>
          Para matrizes muito grandes onde apenas o SVD truncado é necessário, o algoritmo randomizado é muito mais eficiente:
          complexidade O(mn·k) vs O(mn·min(m,n)) do SVD clássico.
        </p>
        <div style={S.code}>{`import numpy as np
from sklearn.utils.extmath import randomized_svd

A = np.random.randn(10000, 5000)

# SVD completo (lento para matrizes grandes)
# U, s, Vt = np.linalg.svd(A)  # usa LAPACK dgesdd

# SVD completo (full_matrices=False = thin SVD)
U, s, Vt = np.linalg.svd(A, full_matrices=False)

# SVD randomizado - muito mais rápido para k << min(m,n)
k = 50
U_r, s_r, Vt_r = randomized_svd(
    A,
    n_components=k,
    n_iter=4,          # mais iterações = mais preciso
    random_state=42
)
# U_r: (10000, 50), s_r: (50,), Vt_r: (50, 5000)

# Scipy: sparsesvds para matrizes esparsas
from scipy.sparse.linalg import svds
from scipy.sparse import random as sparse_random
A_sparse = sparse_random(1000, 800, density=0.05)
U_s, s_s, Vt_s = svds(A_sparse, k=20)
# Nota: svds retorna em ordem crescente; inverter para decrescente
idx = np.argsort(s_s)[::-1]
s_s = s_s[idx]`}</div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Função</th>
              <th style={S.th}>Caso de uso</th>
              <th style={S.th}>Complexidade</th>
              <th style={S.th}>Notas</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['np.linalg.svd', 'geral, denso', 'O(mn·min(m,n))', 'usa LAPACK dgesdd'],
              ['randomized_svd', 'k << min(m,n)', 'O(mn·k)', 'sklearn, muito rápido'],
              ['scipy.sparse.linalg.svds', 'matrizes esparsas', 'O(nnz·k)', 'ARPACK baseado em Lanczos'],
              ['torch.linalg.svd', 'GPU, deep learning', 'O(mn·min(m,n))', 'backprop disponível'],
            ].map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => <td key={j} style={S.td}>{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 11: Conexão com outras decomposições ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Conexão com Outras Decomposições</h2>
        <p style={S.p}>
          SVD não existe num vácuo — relaciona-se intimamente com QR, LU e eigendecomposição.
          Entender quando usar cada uma é essencial para Data Science e computação numérica.
        </p>
        <DecompComparisonSVG />
        <h3 style={S.h3}>SVD para Resolver Ax = b</h3>
        <p style={S.p}>
          O SVD fornece a solução mais numericamente estável para sistemas lineares, especialmente mal condicionados.
          O número de condição κ(A) = σ_max / σ_min mede a amplificação de erros de arredondamento.
        </p>
        <div style={S.highlight}>
          κ(A) pequeno (≈1): sistema bem condicionado, todas as decomposições são estáveis
          <br />
          κ(A) grande (≫1): sistema mal condicionado, SVD é o mais robusto
          <br />
          κ(A) = ∞: A é singular (rank-deficiente), usar pseudo-inversa
        </div>
        <h3 style={S.h3}>Regularização de Tikhonov via SVD</h3>
        <p style={S.p}>
          Ao resolver sistemas mal condicionados, em vez de simplesmente inverter os valores singulares pequenos
          (que amplificam o ruído), usa-se a regularização:
        </p>
        <div style={S.highlight}>
          x_reg = V · diag(σᵢ / (σᵢ² + λ)) · Uᵀ · b
          <br />
          Para λ → 0: recupera mínimos quadrados; para λ → ∞: x → 0
        </div>
        <div style={S.code}>{`import numpy as np

def solve_svd_regularized(A, b, lam=0.0):
    """
    Resolve sistema Ax≈b via SVD com regularização Tikhonov.
    lam=0: pseudo-inversa padrão
    lam>0: regularização L2
    """
    U, s, Vt = np.linalg.svd(A, full_matrices=False)

    # Filtros de Tikhonov
    filters = s / (s**2 + lam)

    # Solução regularizada
    x = Vt.T @ (filters * (U.T @ b))
    return x

# Exemplo: sistema mal condicionado
n = 50
A = np.random.randn(n, n)
# Tornar mal condicionado
A[:, 0] += A[:, 1] * 0.999
b = np.random.randn(n)

print("Número de condição:", np.linalg.cond(A))
x_std = solve_svd_regularized(A, b, lam=0)
x_reg = solve_svd_regularized(A, b, lam=0.01)
print("||x|| sem reg:", np.linalg.norm(x_std))
print("||x|| com reg:", np.linalg.norm(x_reg))`}</div>
        <h3 style={S.h3}>Quando usar cada decomposição</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Situação</th>
              <th style={S.th}>Decomposição recomendada</th>
              <th style={S.th}>Porquê</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Ax=b, A quadrada e bem condicionada', 'LU (com pivotamento)', 'mais rápido O(n³/3)'],
              ['Ax=b, A retangular (mínimos quadrados)', 'QR', 'estável, O(mn²)'],
              ['Ax=b, A mal condicionada ou singular', 'SVD (pseudo-inversa)', 'mais robusto'],
              ['Análise espectral de A simétrica', 'Eigendecomposição (eigh)', 'valores reais garantidos'],
              ['Redução dimensional, PCA', 'SVD thin', 'evita calcular AᵀA'],
              ['Norma espectral, rank numérico', 'SVD', 'definição direta'],
            ].map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => <td key={j} style={S.td}>{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 12: Síntese ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Síntese</h2>
        <p style={S.p}>
          O SVD está na base de uma grande variedade de algoritmos de Machine Learning e Data Science.
          Abaixo um mapa das aplicações e um cheat sheet das fórmulas essenciais.
        </p>
        <SVDApplicationsMapSVG />
        <h3 style={S.h3}>Cheat Sheet — Fórmulas Fundamentais</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Significado</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['A = UΣVᵀ', 'Decomposição SVD fundamental'],
              ['Aₖ = Σᵢ₌₁ᵏ σᵢuᵢvᵢᵀ', 'Melhor aproximação de rank-k (Eckart-Young)'],
              ['A⁺ = VΣ⁺Uᵀ', 'Pseudo-inversa de Moore-Penrose'],
              ['||A||₂ = σ₁', 'Norma espectral = maior valor singular'],
              ['||A||F = √(Σσᵢ²)', 'Norma de Frobenius'],
              ['κ(A) = σ_max / σ_min', 'Número de condição'],
              ['rank(A) = #{σᵢ > 0}', 'Rank = número de σ positivos'],
              ['AᵀA = VΣ²Vᵀ', 'Eigendecomp de AᵀA via SVD'],
              ['var(k) = Σᵢ≤ₖσᵢ² / Σσᵢ²', 'Fração de variância explicada por k componentes'],
              ['x_LS = A⁺b = VΣ⁺Uᵀb', 'Solução de mínimos quadrados via SVD'],
            ].map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => <td key={j} style={{ ...S.td, fontFamily: j === 0 ? 'monospace' : 'inherit', fontSize: j === 0 ? '0.85rem' : 'inherit' }}>{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Energia Capturada pelos Top-k Valores Singulares</h3>
        <div style={S.code}>{`import numpy as np
import matplotlib.pyplot as plt

# Dados sintéticos de baixo rank + ruído
np.random.seed(42)
m, n, r = 200, 150, 10
U_true = np.linalg.qr(np.random.randn(m, r))[0]
V_true = np.linalg.qr(np.random.randn(n, r))[0]
s_true = np.exp(-np.arange(r) * 0.3) * 10

A_low_rank = U_true @ np.diag(s_true) @ V_true.T
A_noisy = A_low_rank + 0.5 * np.random.randn(m, n)

# SVD da matriz ruidosa
U, s, Vt = np.linalg.svd(A_noisy, full_matrices=False)

# Energia cumulativa
energy = np.cumsum(s**2) / np.sum(s**2)
k90 = np.searchsorted(energy, 0.90) + 1
k99 = np.searchsorted(energy, 0.99) + 1

print(f"k para 90% energia: {k90}")
print(f"k para 99% energia: {k99}")

# Reconstrução ótima (rank verdadeiro = 10)
A_reconstructed = U[:, :r] @ np.diag(s[:r]) @ Vt[:r, :]
erro_rel = np.linalg.norm(A_reconstructed - A_low_rank, 'fro') / np.linalg.norm(A_low_rank, 'fro')
print(f"Erro relativo (k={r}): {erro_rel:.4f}")

# Plot scree
plt.figure(figsize=(10, 4))
plt.subplot(1, 2, 1)
plt.plot(s[:30], 'o-', color='#f97316')
plt.axvline(r - 1, color='red', linestyle='--', label=f'rank verdadeiro={r}')
plt.xlabel('Índice'); plt.ylabel('Valor singular')
plt.title('Scree plot'); plt.legend()

plt.subplot(1, 2, 2)
plt.plot(energy[:50] * 100, color='#f97316')
plt.axhline(90, color='red', linestyle='--', label='90%')
plt.axhline(99, color='orange', linestyle='--', label='99%')
plt.xlabel('k'); plt.ylabel('Energia cumulativa (%)')
plt.title('Energia acumulada'); plt.legend()
plt.tight_layout()
plt.show()`}</div>

        <h3 style={S.h3}>Aplicações ML — Resumo Final</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Área</th>
              <th style={S.th}>Aplicação SVD</th>
              <th style={S.th}>O que SVD faz</th>
              <th style={S.th}>Ferramenta Python</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Redução Dimensional', 'PCA', 'encontra eixos de máxima variância', 'sklearn.decomposition.PCA'],
              ['Visão Computacional', 'Compressão de imagens', 'aproximação de baixo rank', 'np.linalg.svd'],
              ['Sistemas Recomendação', 'Collaborative Filtering', 'fatores latentes user-item', 'surprise, lightfm'],
              ['NLP', 'LSA / LSI', 'tópicos semânticos latentes', 'sklearn.TruncatedSVD'],
              ['Álgebra Numérica', 'Mínimos Quadrados', 'pseudo-inversa robusta', 'np.linalg.lstsq'],
              ['Controlo / Física', 'Denoising de sinais', 'truncar σ pequenos', 'np.linalg.svd'],
              ['Bioinformática', 'scRNA-seq / PCA de células', 'dimensões de expressão génica', 'scanpy, sklearn'],
              ['Análise de Redes', 'Graph embeddings (SVD de adj)', 'representação latente de nós', 'scipy.sparse.linalg.svds'],
            ].map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => <td key={j} style={{ ...S.td, fontFamily: j === 3 ? 'monospace' : 'inherit', fontSize: j === 3 ? '0.82rem' : 'inherit' }}>{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      
    </div>
  );
}
