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
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

/* ─────────────────────────── SVG helpers ─────────────────────────── */

function SvgSignalDecomposition() {
  const W = 700, H = 220;
  const colors = ['#f97316', '#f59e0b', '#fb923c', '#fbbf24'];
  const freqs = [1, 2, 3, 4];
  const amps = [1, 0.6, 0.4, 0.25];

  function makePath(freq, amp, yBase, xScale) {
    const pts = [];
    for (let i = 0; i <= 200; i++) {
      const x = (i / 200) * (W - 60) + 30;
      const t = i / 200;
      const y = yBase - amp * 25 * Math.sin(2 * Math.PI * freq * t * xScale);
      pts.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return pts.join(' ');
  }

  function makeComposedPath(yBase) {
    const pts = [];
    for (let i = 0; i <= 200; i++) {
      const x = (i / 200) * (W - 60) + 30;
      const t = i / 200;
      let y = yBase;
      freqs.forEach((f, idx) => {
        y -= amps[idx] * 25 * Math.sin(2 * Math.PI * f * t * 1);
      });
      pts.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return pts.join(' ');
  }

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', margin: '1rem 0' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx={10} />
      <text x={14} y={60} fontSize={11} fill="var(--text-secondary)" fontWeight={600}>Sinal composto</text>
      <path d={makeComposedPath(50)} fill="none" stroke="#fff" strokeWidth={2} />
      {freqs.map((f, idx) => (
        <g key={f}>
          <text x={14} y={90 + idx * 32 + 8} fontSize={10} fill={colors[idx]}>f = {f}</text>
          <path
            d={makePath(f, amps[idx], 90 + idx * 32, 1)}
            fill="none"
            stroke={colors[idx]}
            strokeWidth={1.5}
          />
        </g>
      ))}
      <text x={W / 2} y={H - 6} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">
        Decomposição em componentes senoidais (analogia ao prisma óptico)
      </text>
    </svg>
  );
}

function SvgSquareWaveFourier() {
  const W = 680, H = 200;
  const terms = [1, 3, 5, 11];
  const termColors = ['#f97316', '#f59e0b', '#fb923c', '#fbbf24'];

  function squareApprox(x, N) {
    let s = 0;
    for (let k = 0; k < N; k++) {
      const n = 2 * k + 1;
      s += Math.sin(n * x) / n;
    }
    return (4 / Math.PI) * s;
  }

  function makePath(N, colorStr) {
    const pts = [];
    for (let i = 0; i <= 300; i++) {
      const t = (i / 300) * 2 * Math.PI * 2;
      const x = 30 + (i / 300) * (W - 60);
      const y = H / 2 - squareApprox(t, Math.ceil(N / 2)) * 55;
      pts.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return { d: pts.join(' '), color: colorStr };
  }

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', margin: '1rem 0' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx={10} />
      <line x1={30} y1={H / 2} x2={W - 30} y2={H / 2} stroke="var(--text-secondary)" strokeWidth={1} />
      {terms.map((n, i) => {
        const p = makePath(n, termColors[i]);
        const dash = i === 0 ? undefined : i === 1 ? '6,3' : i === 2 ? '3,3' : '8,2,2,2';
        return (
          <path key={n} d={p.d} fill="none" stroke={p.color} strokeWidth={i === 3 ? 2 : 1.5} strokeDasharray={dash} />
        );
      })}
      {terms.map((n, i) => (
        <g key={n}>
          <rect x={W - 120} y={12 + i * 22} width={10} height={10} fill={termColors[i]} rx={2} />
          <text x={W - 106} y={22 + i * 22} fontSize={11} fill="var(--text-secondary)">{n} {n === 1 ? 'termo' : 'termos'}</text>
        </g>
      ))}
      <text x={W / 2} y={H - 6} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">
        Fenômeno de Gibbs: overshooting ~9% próximo a descontinuidades
      </text>
    </svg>
  );
}

function SvgGaussianFT() {
  const W = 680, H = 190;

  function gaussian(x, sigma) {
    return Math.exp(-(x * x) / (2 * sigma * sigma));
  }

  function makePath(fn, xMin, xMax, yBase, scale, xOffset, xScaleW) {
    const pts = [];
    for (let i = 0; i <= 200; i++) {
      const t = xMin + (i / 200) * (xMax - xMin);
      const val = fn(t);
      const px = xOffset + (i / 200) * xScaleW;
      const py = yBase - val * scale;
      pts.push(`${i === 0 ? 'M' : 'L'}${px.toFixed(1)},${py.toFixed(1)}`);
    }
    return pts.join(' ');
  }

  const halfW = (W - 60) / 2;

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', margin: '1rem 0' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx={10} />
      <text x={halfW / 2 + 30} y={20} fontSize={12} fill="var(--text-secondary)" textAnchor="middle" fontWeight={600}>f(x) — domínio do tempo</text>
      <line x1={30} y1={H / 2} x2={30 + halfW} y2={H / 2} stroke="var(--text-secondary)" strokeWidth={1} />
      <path
        d={makePath(x => gaussian(x, 0.8), -3, 3, H / 2, 60, 30, halfW)}
        fill="none"
        stroke={color}
        strokeWidth={2.5}
      />
      <text x={30 + halfW / 2} y={H - 8} fontSize={10} fill={color} textAnchor="middle">sigma = 0.8</text>

      <text x={30 + halfW + halfW / 2} y={20} fontSize={12} fill="var(--text-secondary)" textAnchor="middle" fontWeight={600}>F̂(xi) — domínio da frequência</text>
      <line x1={30 + halfW + 20} y1={H / 2} x2={W - 10} y2={H / 2} stroke="var(--text-secondary)" strokeWidth={1} />
      <path
        d={makePath(x => gaussian(x, 0.5), -3, 3, H / 2, 60, 30 + halfW + 20, halfW - 20)}
        fill="none"
        stroke="#f59e0b"
        strokeWidth={2.5}
      />
      <text x={30 + halfW + halfW / 2} y={H - 8} fontSize={10} fill="#f59e0b" textAnchor="middle">sigma_FT = 1/(2pi*sigma)</text>

      <text x={W / 2} y={H / 2 - 10} fontSize={20} fill="var(--text-secondary)" textAnchor="middle">⟷</text>
    </svg>
  );
}

function SvgDFT() {
  const W = 680, H = 200;
  const N = 64;
  const freqBin = 8;

  function makeSineTime() {
    const pts = [];
    for (let i = 0; i < N; i++) {
      const x = 30 + (i / (N - 1)) * 280;
      const y = 60 - Math.sin(2 * Math.PI * freqBin * i / N) * 40;
      pts.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return pts.join(' ');
  }

  const bars = Array.from({ length: 33 }, (_, k) => {
    let re = 0, im = 0;
    for (let n = 0; n < N; n++) {
      const val = Math.sin(2 * Math.PI * freqBin * n / N);
      re += val * Math.cos(2 * Math.PI * k * n / N);
      im -= val * Math.sin(2 * Math.PI * k * n / N);
    }
    return Math.sqrt(re * re + im * im) / N;
  });

  const maxBar = Math.max(...bars);

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', margin: '1rem 0' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx={10} />
      <text x={160} y={14} fontSize={12} fill="var(--text-secondary)" textAnchor="middle" fontWeight={600}>Sinal no tempo</text>
      <line x1={30} y1={100} x2={315} y2={100} stroke="var(--text-secondary)" strokeWidth={1} />
      <path d={makeSineTime()} fill="none" stroke={color} strokeWidth={2} />

      <text x={510} y={14} fontSize={12} fill="var(--text-secondary)" textAnchor="middle" fontWeight={600}>|X[k]| — espectro DFT</text>
      {bars.map((b, k) => {
        const bx = 350 + k * 9;
        const bh = (b / maxBar) * 100;
        return (
          <rect
            key={k}
            x={bx}
            y={110 - bh}
            width={7}
            height={bh}
            fill={k === freqBin ? '#f97316' : color}
            fillOpacity={k === freqBin ? 1 : 0.4}
            rx={1}
          />
        );
      })}
      <line x1={350} y1={110} x2={W - 10} y2={110} stroke="var(--text-secondary)" strokeWidth={1} />
      <text x={350 + freqBin * 9 + 20} y={105 - 60} fontSize={10} fill="#f59e0b" textAnchor="middle">k=8</text>
      <text x={W / 2} y={H - 6} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">
        Pico em k=8 corresponde à frequência do seno de entrada
      </text>
    </svg>
  );
}

function SvgButterfly() {
  const W = 680, H = 220;
  const stage0x = 60;
  const stage1x = 220;
  const stage2x = 380;
  const outx = 530;
  const nodes = [0, 1, 2, 3, 4, 5, 6, 7];
  const ys = nodes.map(i => 30 + i * 22);

  const btConnections = [
    [0, 0, 1], [1, 4, 1],
    [2, 2, 1], [3, 6, 1],
    [4, 1, 1], [5, 5, 1],
    [6, 3, 1], [7, 7, 1],
  ];

  const s1Conns = [
    [0, 0, 2], [1, 1, 2], [2, 4, 2], [3, 5, 2],
    [4, 2, 2], [5, 3, 2], [6, 6, 2], [7, 7, 2],
  ];

  const s2Conns = nodes.map(i => [i, i, 3]);

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', margin: '1rem 0' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx={10} />
      <text x={stage0x} y={16} fontSize={11} fill="var(--text-secondary)" textAnchor="middle" fontWeight={600}>Entrada</text>
      <text x={stage1x} y={16} fontSize={11} fill="var(--text-secondary)" textAnchor="middle" fontWeight={600}>Estágio 1</text>
      <text x={stage2x} y={16} fontSize={11} fill="var(--text-secondary)" textAnchor="middle" fontWeight={600}>Estágio 2</text>
      <text x={outx} y={16} fontSize={11} fill="var(--text-secondary)" textAnchor="middle" fontWeight={600}>Saída DFT</text>

      {nodes.map(i => (
        <g key={i}>
          <circle cx={stage0x} cy={ys[i]} r={5} fill={color} />
          <text x={stage0x - 18} y={ys[i] + 4} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">x[{i}]</text>
        </g>
      ))}

      {btConnections.map(([src, dst], idx) => (
        <line key={idx} x1={stage0x} y1={ys[src]} x2={stage1x} y2={ys[dst]} stroke={color} strokeWidth={1} strokeOpacity={0.5} />
      ))}

      {nodes.map(i => (
        <circle key={i} cx={stage1x} cy={ys[i]} r={5} fill="#f97316" />
      ))}

      {s1Conns.map(([src, dst], idx) => (
        <line key={idx} x1={stage1x} y1={ys[src]} x2={stage2x} y2={ys[dst]} stroke="#f97316" strokeWidth={1} strokeOpacity={0.5} />
      ))}

      {nodes.map(i => (
        <circle key={i} cx={stage2x} cy={ys[i]} r={5} fill="#f59e0b" />
      ))}

      {nodes.map(i => (
        <line key={i} x1={stage2x} y1={ys[i]} x2={outx} y2={ys[i]} stroke="#f59e0b" strokeWidth={1} strokeOpacity={0.5} />
      ))}

      {nodes.map(i => (
        <g key={i}>
          <circle cx={outx} cy={ys[i]} r={5} fill="#f97316" />
          <text x={outx + 20} y={ys[i] + 4} fontSize={10} fill="var(--text-secondary)">X[{i}]</text>
        </g>
      ))}

      <text x={W / 2} y={H - 8} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">
        Diagrama borboleta FFT N=8: 3 estágios = log2(8) = O(N log N)
      </text>
    </svg>
  );
}

function SvgConvolutionPipeline() {
  const W = 760, H = 130;
  const bw = 85, gap = 42, pad = 20;
  const boxes = [
    { x: pad,                    label: 'f(t)',   sub: 'sinal',     c: color },
    { x: pad + (bw+gap),         label: 'FFT',    sub: 'O(N log N)',c: '#f97316' },
    { x: pad + (bw+gap)*2,       label: 'F̂(xi)', sub: 'espectro',  c: '#f97316' },
    { x: pad + (bw+gap)*3,       label: 'x',      sub: 'multiply',  c: '#f97316' },
    { x: pad + (bw+gap)*4,       label: 'IFFT',   sub: 'inversa',   c: '#f97316' },
    { x: pad + (bw+gap)*5,       label: 'f*g',    sub: 'convolução',c: '#f97316' },
  ];

  const arrows = boxes.slice(0,-1).map(b => b.x + bw + 4);

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', margin: '1rem 0' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx={10} />
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={35} width={85} height={46} rx={8} fill={b.c} fillOpacity={0.15} stroke={b.c} strokeWidth={1.5} />
          <text x={b.x + 42} y={55} fontSize={13} fill={b.c} textAnchor="middle" fontWeight={700}>{b.label}</text>
          <text x={b.x + 42} y={71} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">{b.sub}</text>
        </g>
      ))}
      {arrows.map((ax, i) => (
        <g key={i}>
          <line x1={ax} y1={58} x2={ax + 20} y2={58} stroke="var(--text-secondary)" strokeWidth={1.5} />
          <polygon points={`${ax + 20},54 ${ax + 27},58 ${ax + 20},62`} fill="var(--text-secondary)" />
        </g>
      ))}
      <text x={W / 2} y={H - 8} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">
        Teorema da Convolução: FT[f * g] = F̂ · Ĝ — multiplicação no domínio da frequência
      </text>
    </svg>
  );
}

function SvgPSD() {
  const W = 680, H = 210;

  function makeTimeSeries() {
    const pts = [];
    for (let i = 0; i <= 300; i++) {
      const t = i / 300;
      const v = 0.6 * Math.sin(2 * Math.PI * 3 * t) + 0.4 * Math.sin(2 * Math.PI * 7 * t) + 0.15 * (Math.random() - 0.5);
      const x = 30 + t * 280;
      const y = 95 - v * 45;
      pts.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return pts.join(' ');
  }

  const psdBars = Array.from({ length: 30 }, (_, k) => {
    if (k === 3) return 1.0;
    if (k === 7) return 0.65;
    return Math.random() * 0.08;
  });

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', margin: '1rem 0' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx={10} />
      <text x={160} y={14} fontSize={12} fill="var(--text-secondary)" textAnchor="middle" fontWeight={600}>Série temporal</text>
      <line x1={30} y1={95} x2={315} y2={95} stroke="var(--text-secondary)" strokeWidth={1} />
      <path d={makeTimeSeries()} fill="none" stroke={color} strokeWidth={1.5} />
      <text x={160} y={H - 8} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">tempo</text>

      <text x={510} y={14} fontSize={12} fill="var(--text-secondary)" textAnchor="middle" fontWeight={600}>PSD = |F̂|²</text>
      <line x1={350} y1={175} x2={W - 10} y2={175} stroke="var(--text-secondary)" strokeWidth={1} />
      {psdBars.map((b, k) => {
        const bx = 355 + k * 10;
        const bh = b * 130;
        return (
          <rect
            key={k}
            x={bx}
            y={175 - bh}
            width={8}
            height={bh}
            fill={k === 3 || k === 7 ? '#f97316' : color}
            fillOpacity={k === 3 || k === 7 ? 0.9 : 0.35}
            rx={1}
          />
        );
      })}
      <text x={355 + 3 * 10 + 4} y={175 - 135} fontSize={9} fill="#f59e0b" textAnchor="middle">f=3</text>
      <text x={355 + 7 * 10 + 4} y={175 - 92} fontSize={9} fill="#f59e0b" textAnchor="middle">f=7</text>
      <text x={510} y={H - 8} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">frequência</text>
    </svg>
  );
}

function SvgPositionalEncoding() {
  const W = 680, H = 200;
  const dModel = 24;
  const seqLen = 40;
  const cellW = (W - 60) / seqLen;
  const cellH = (H - 50) / dModel;

  function pe(pos, i) {
    if (i % 2 === 0) return Math.sin(pos / Math.pow(10000, i / dModel));
    return Math.cos(pos / Math.pow(10000, (i - 1) / dModel));
  }

  function valToColor(v) {
    const t = (v + 1) / 2;
    // dark brown/black (low) → deep orange → amber/yellow (high)
    const r = Math.round(30 + (251 - 30) * t);
    const g = Math.round(15 + (191 - 15) * t);
    const b = Math.round(5 + (36 - 5) * t);
    return `rgb(${r},${g},${b})`;
  }

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', margin: '1rem 0' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx={10} />
      <text x={W / 2} y={14} fontSize={12} fill="var(--text-secondary)" textAnchor="middle" fontWeight={600}>
        Matriz de Positional Encoding — PE(pos, 2i) = sin(pos / 10000^(2i/d))
      </text>
      {Array.from({ length: seqLen }, (_, pos) =>
        Array.from({ length: dModel }, (__, i) => {
          const v = pe(pos, i);
          return (
            <rect
              key={`${pos}-${i}`}
              x={30 + pos * cellW}
              y={22 + i * cellH}
              width={cellW - 0.5}
              height={cellH - 0.5}
              fill={valToColor(v)}
            />
          );
        })
      )}
      <text x={30} y={H - 4} fontSize={10} fill="var(--text-secondary)">pos=0</text>
      <text x={W - 30} y={H - 4} fontSize={10} fill="var(--text-secondary)" textAnchor="end">pos=39</text>
      <text x={14} y={H / 2} fontSize={10} fill="var(--text-secondary)" textAnchor="middle" dominantBaseline="middle">dim</text>
    </svg>
  );
}

function SvgWavelet() {
  const W = 680, H = 200;
  const halfW = (W - 60) / 2;

  function makeGlobalSine() {
    const pts = [];
    for (let i = 0; i <= 200; i++) {
      const t = i / 200;
      const x = 30 + t * halfW;
      const y = 85 - Math.sin(2 * Math.PI * 5 * t) * 35;
      pts.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return pts.join(' ');
  }

  function makeWavelet() {
    const pts = [];
    for (let i = 0; i <= 200; i++) {
      const t = (i / 200) * 4 - 2;
      const center = 30 + halfW + 20 + ((i / 200)) * (halfW - 20);
      const envelope = Math.exp(-t * t * 0.8);
      const osc = Math.cos(2 * Math.PI * 2 * t);
      const y = 85 - envelope * osc * 50;
      pts.push(`${i === 0 ? 'M' : 'L'}${center.toFixed(1)},${y.toFixed(1)}`);
    }
    return pts.join(' ');
  }

  function makeEnvelope(sign) {
    const pts = [];
    for (let i = 0; i <= 200; i++) {
      const t = (i / 200) * 4 - 2;
      const center = 30 + halfW + 20 + ((i / 200)) * (halfW - 20);
      const envelope = Math.exp(-t * t * 0.8);
      const y = 85 - sign * envelope * 50;
      pts.push(`${i === 0 ? 'M' : 'L'}${center.toFixed(1)},${y.toFixed(1)}`);
    }
    return pts.join(' ');
  }

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', margin: '1rem 0' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx={10} />
      <text x={30 + halfW / 2} y={14} fontSize={12} fill="var(--text-secondary)" textAnchor="middle" fontWeight={600}>Base de Fourier (global)</text>
      <line x1={30} y1={85} x2={30 + halfW} y2={85} stroke="var(--text-secondary)" strokeWidth={1} />
      <path d={makeGlobalSine()} fill="none" stroke={color} strokeWidth={2} />
      <text x={30 + halfW / 2} y={H - 8} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">sem localização temporal</text>

      <text x={30 + halfW + 20 + (halfW - 20) / 2} y={14} fontSize={12} fill="var(--text-secondary)" textAnchor="middle" fontWeight={600}>Wavelet (localizada)</text>
      <line x1={30 + halfW + 20} y1={85} x2={W - 10} y2={85} stroke="var(--text-secondary)" strokeWidth={1} />
      <path d={makeEnvelope(1)} fill="none" stroke="#f59e0b" strokeWidth={1} strokeDasharray="3,3" />
      <path d={makeEnvelope(-1)} fill="none" stroke="#f59e0b" strokeWidth={1} strokeDasharray="3,3" />
      <path d={makeWavelet()} fill="none" stroke="#f97316" strokeWidth={2} />
      <text x={30 + halfW + 20 + (halfW - 20) / 2} y={H - 8} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">localizada em tempo E frequência</text>
    </svg>
  );
}

function SvgFNO() {
  const W = 680, H = 190;

  const stages = [
    { x: 20, w: 70, label: 'Input', sub: 'u(x)', color: color },
    { x: 120, w: 70, label: 'FFT', sub: '', color: '#f97316' },
    { x: 220, w: 90, label: 'Linear', sub: 'low freqs', color: '#f97316' },
    { x: 340, w: 70, label: 'IFFT', sub: '', color: '#f97316' },
    { x: 440, w: 80, label: '+ W·u', sub: 'residual', color: '#f97316' },
    { x: 550, w: 80, label: 'Output', sub: 'v(x)', color: color },
  ];

  const arrows = [90, 190, 310, 410, 520];

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', margin: '1rem 0' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx={10} />
      <text x={W / 2} y={14} fontSize={12} fill="var(--text-secondary)" textAnchor="middle" fontWeight={600}>
        Arquitetura FNO — Fourier Neural Operator
      </text>
      {stages.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={65} width={s.w} height={55} rx={8} fill={s.color} fillOpacity={0.15} stroke={s.color} strokeWidth={1.5} />
          <text x={s.x + s.w / 2} y={88} fontSize={12} fill={s.color} textAnchor="middle" fontWeight={700}>{s.label}</text>
          <text x={s.x + s.w / 2} y={104} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">{s.sub}</text>
        </g>
      ))}
      {arrows.map((ax, i) => (
        <g key={i}>
          <line x1={ax} y1={92} x2={ax + 18} y2={92} stroke="var(--text-secondary)" strokeWidth={1.5} />
          <polygon points={`${ax + 18},88 ${ax + 25},92 ${ax + 18},96`} fill="var(--text-secondary)" />
        </g>
      ))}
      <path d="M 480,60 C 480,30 310,30 310,60" fill="none" stroke="#f97316" strokeWidth={1.5} strokeDasharray="4,3" />
      <text x={395} y={26} fontSize={10} fill="#f97316" textAnchor="middle">skip connection</text>
      <text x={W / 2} y={H - 6} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">
        O(N log N) — campo receptivo global; aplicado a PDEs, fluidos, clima
      </text>
    </svg>
  );
}

/* ─────────────────────────── Main component ─────────────────────────── */

export default function CALC11() {
  return (
    <div style={S.page}>
      <Link to="/calculus" style={S.back}>
        <ArrowLeft size={16} /> Voltar a Cálculo
      </Link>

      <div style={S.tag}>MÓDULO 11</div>
      <h1 style={S.h1}>Transformada de Fourier</h1>
      <p style={S.lead}>
        Da decomposição de sinais em frequências à arquitetura de redes neurais modernas — a
        Transformada de Fourier é uma das ferramentas matemáticas mais poderosas da computação
        científica e do Machine Learning.
      </p>

      {/* ── 1. Intuição ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Intuição</h2>
        <p style={S.p}>
          Um prisma decompõe a luz branca nas cores do espectro. A Transformada de Fourier faz o
          mesmo com sinais: decompõe qualquer função periódica (ou integrável) numa soma de
          sinusoides com diferentes frequências, amplitudes e fases.
        </p>
        <SvgSignalDecomposition />
        <p style={S.p}>
          A ideia central é que qualquer sinal pode ser entendido como uma <em>sobreposição de ondas
          puras</em>. Cada componente carrega uma frequência específica — e o conjunto de amplitudes
          dessas componentes é chamado de <strong>espectro</strong> do sinal.
        </p>
        <div style={S.note}>
          Analogia: o ouvido humano faz Fourier em tempo real — separa as frequências de um acorde
          em notas individuais sem esforço consciente.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 2. Série de Fourier ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Série de Fourier</h2>
        <p style={S.p}>
          Para funções periódicas de período 2pi, a Série de Fourier escreve:
        </p>
        <BlockMath math="f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left[a_n \cos(nx) + b_n \sin(nx)\right]" />
        <p style={S.p}>Os coeficientes são calculados como produtos internos:</p>
        <BlockMath math="a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx)\,dx" />
          <BlockMath math="b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx)\,dx" />
        <h3 style={S.h3}>Aproximação da onda quadrada — Fenômeno de Gibbs</h3>
        <SvgSquareWaveFourier />
        <p style={S.p}>
          Ao truncar a série, o overshoot próximo a descontinuidades permanece em torno de 9%,
          independentemente de quantos termos se usem. Este é o <strong>Fenômeno de Gibbs</strong>,
          uma limitação intrínseca da representação de Fourier de sinais descontínuos.
        </p>
        <div style={S.note}>
          A convergência de séries de Fourier é garantida para funções de Dirichlet: periódicas,
          com número finito de extremos e descontinuidades por período.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 3. Transformada Contínua ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Transformada de Fourier Contínua</h2>
        <p style={S.p}>
          A extensão para funções não periódicas (integráveis em R) define a Transformada de Fourier:
        </p>
        <BlockMath math="\hat{F}(\xi) = \int_{-\infty}^{\infty} f(x)\, e^{-2\pi i \xi x}\,dx" />
          <BlockMath math="f(x) = \int_{-\infty}^{\infty} \hat{F}(\xi)\, e^{2\pi i \xi x}\,d\xi \quad \leftarrow \text{inversa}" />
        <h3 style={S.h3}>Gaussiana e sua Transformada</h3>
        <SvgGaussianFT />
        <p style={S.p}>
          A Gaussiana é a única função que é própria da Transformada de Fourier: sua FT é também
          uma Gaussiana. Porém, há uma relação inversa entre as larguras — se f(x) é estreita,
          F̂(xi) é larga. Isso fundamenta o <strong>Princípio da Incerteza de Heisenberg</strong>:
        </p>
        <BlockMath math="\sigma_x \cdot \sigma_\xi \geq \frac{1}{4\pi}" />
        <p style={S.p}>
          Não é possível ter uma função simultaneamente localizada no tempo e na frequência — quanto
          mais precisa a localização temporal, mais difusa a localização espectral.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 4. Propriedades ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Propriedades Fundamentais</h2>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Domínio do tempo</th>
              <th style={S.th}>Domínio da frequência</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Linearidade</td>
              <td style={S.td}>af(x) + bg(x)</td>
              <td style={S.td}>aF̂(xi) + bĜ(xi)</td>
            </tr>
            <tr>
              <td style={S.td}>Deslocamento temporal</td>
              <td style={S.td}>f(x - x₀)</td>
              <td style={S.td}>e^(-2pi i xi x₀) F̂(xi)</td>
            </tr>
            <tr>
              <td style={S.td}>Escala (dilatação)</td>
              <td style={S.td}>f(ax)</td>
              <td style={S.td}>(1/|a|) F̂(xi/a)</td>
            </tr>
            <tr>
              <td style={S.td}>Derivada</td>
              <td style={S.td}>f'(x)</td>
              <td style={S.td}>2pi i xi · F̂(xi)</td>
            </tr>
            <tr>
              <td style={S.td}>Convolução</td>
              <td style={S.td}>(f * g)(x)</td>
              <td style={S.td}>F̂(xi) · Ĝ(xi)</td>
            </tr>
            <tr>
              <td style={S.td}>Parseval (energia)</td>
              <td style={S.td}>∫ |f(x)|² dx</td>
              <td style={S.td}>∫ |F̂(xi)|² d(xi)</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          A propriedade de Parseval garante que a transformada preserva energia — fundamental para
          compressão de dados com perda mínima de informação.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 5. DFT ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Transformada Discreta de Fourier (DFT)</h2>
        <p style={S.p}>
          Para sequências finitas x[0], …, x[N-1], a DFT é definida como:
        </p>
        <BlockMath math="X[k] = \sum_{n=0}^{N-1} x[n] \cdot e^{-2\pi i k n / N}, \quad k = 0, \ldots, N-1" />
          <BlockMath math="x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] \cdot e^{2\pi i k n / N} \quad \leftarrow \text{IDFT}" />
        <p style={S.p}>
          Em forma matricial: X = W · x, onde W é a <em>matriz DFT</em> com
          entradas W(kn) = e^(-2pi i kn/N). É uma matriz unitária (W*·W = N·I).
        </p>
        <SvgDFT />
        <h3 style={S.h3}>Teorema de Nyquist e Aliasing</h3>
        <p style={S.p}>
          Para amostrar um sinal sem perda de informação, a taxa de amostragem deve ser pelo menos
          o dobro da frequência máxima presente no sinal:
        </p>
        <BlockMath math="f_s \geq 2 \cdot f_{\max} \quad \text{(critério de Nyquist-Shannon)}" />
        <p style={S.p}>
          Quando fs {"<"} 2·fmax, componentes de alta frequência se "disfarçam" de baixas
          frequências — fenômeno chamado de <strong>aliasing</strong>. A solução é aplicar um filtro
          passa-baixa antes da amostragem (filtro anti-aliasing).
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 6. FFT ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. FFT — Fast Fourier Transform</h2>
        <p style={S.p}>
          A DFT direta tem custo O(N²) operações. O algoritmo de{' '}
          <strong>Cooley-Tukey (1965)</strong> explora a simetria das raízes da unidade para
          reduzir isso a O(N log N), tornando Fourier prático para sinais grandes.
        </p>
        <h3 style={S.h3}>Ideia: Dividir para conquistar</h3>
        <p style={S.p}>
          Separe x[n] em índices pares e ímpares. Cada metade forma uma DFT menor, e as duas
          metades se combinam num único passo (operação "borboleta"):
        </p>
        <BlockMath math="X[k] = E[k] + e^{-2\pi i k/N} \cdot O[k]" />
          <BlockMath math="X[k+N/2] = E[k] - e^{-2\pi i k/N} \cdot O[k]" />
        <SvgButterfly />
        <h3 style={S.h3}>Código Python</h3>
                <div style={S.note}>
          Para N = 10⁶: DFT direta exige ~10¹² operações; FFT exige ~20·10⁶. Ganho de 50.000x.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 7. Teorema da Convolução ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Teorema da Convolução</h2>
        <p style={S.p}>
          O Teorema da Convolução é talvez a propriedade mais importante da FT para aplicações em
          ML e processamento de sinal:
        </p>
        <BlockMath math="\mathcal{F}[f * g] = \hat{F} \cdot \hat{G} \quad \Longleftrightarrow \quad \text{convolução = multiplicação no domínio de frequência}" />
        <p style={S.p}>
          A convolução direta de dois sinais de tamanho N custa O(N²). Via FFT, o custo cai para
          O(N log N):
        </p>
        <SvgConvolutionPipeline />
        <h3 style={S.h3}>Conexão com CNNs</h3>
        <p style={S.p}>
          Filtros convolucionais em redes neurais realizam convolução discreta. Para filtros grandes
          ou imagens grandes, implementar no domínio da frequência (FFT-based convolution) é
          significativamente mais eficiente. Frameworks como cuDNN alternam entre ambas as
          implementações automaticamente conforme o tamanho do kernel.
        </p>
        <div style={S.note}>
          scipy.signal.fftconvolve implementa convolução via FFT; torch.nn.functional.conv2d usa
          estratégias adaptativas baseadas no tamanho do filtro.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 8. Análise Espectral ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Análise Espectral</h2>
        <p style={S.p}>
          A <strong>Densidade Espectral de Potência (PSD)</strong> quantifica como a energia de
          um sinal se distribui pelas frequências:
        </p>
        <BlockMath math="S(\xi) = |\hat{F}(\xi)|^2 = \hat{F}(\xi) \cdot \overline{\hat{F}(\xi)}" />
        <SvgPSD />
        <h3 style={S.h3}>Método de Welch</h3>
        <p style={S.p}>
          Para sinais longos e ruidosos, o método de Welch divide o sinal em segmentos com
          sobreposição, calcula a PSD de cada um e faz a média. Reduz variância da estimativa ao
          custo de resolução espectral:
        </p>
                <h3 style={S.h3}>STFT — Short-Time Fourier Transform</h3>
        <p style={S.p}>
          A STFT aplica a DFT em janelas deslizantes, obtendo uma representação tempo-frequência
          (espectrograma). Usada em reconhecimento de voz, análise de música e detecção de anomalias
          em séries temporais. O compromisso é que janelas longas têm boa resolução em frequência
          mas baixa em tempo, e vice-versa.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 9. Positional Encodings ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Positional Encodings em Transformers</h2>
        <p style={S.p}>
          Transformers processam tokens em paralelo e não têm noção de ordem. Os{' '}
          <strong>Positional Encodings</strong> do paper "Attention is All You Need" injetam
          informação de posição usando senoides de diferentes frequências:
        </p>
        <BlockMath math="\text{PE}(\text{pos}, 2i) = \sin\!\left(\frac{\text{pos}}{10000^{2i/d_{\text{model}}}}\right)" />
          <BlockMath math="\text{PE}(\text{pos}, 2i+1) = \cos\!\left(\frac{\text{pos}}{10000^{2i/d_{\text{model}}}}\right)" />
        <SvgPositionalEncoding />
        <h3 style={S.h3}>Por que sinusoides?</h3>
        <p style={S.p}>
          Cada dimensão do embedding oscila numa frequência diferente, criando um "código binário
          contínuo" para cada posição. A propriedade trigonométrica fundamental é que:
        </p>
        
          <InlineMath math="\text{PE}(\text{pos} + k)" /> pode ser expresso como função linear de <InlineMath math="\text{PE}(\text{pos})" />
        
        <p style={S.p}>
          Isso permite ao modelo aprender a atender a posições relativas (pos + k) através de
          transformações lineares, sem nunca ter visto sequências mais longas durante o treino.
        </p>
        <h3 style={S.h3}>Encodings fixos vs. aprendidos</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Vantagens</th>
              <th style={S.th}>Desvantagens</th>
              <th style={S.th}>Exemplos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Fixo (sinusoidal)</td>
              <td style={S.td}>Extrapolação; sem parâmetros extras</td>
              <td style={S.td}>Menos expressivo</td>
              <td style={S.td}>BERT original, T5</td>
            </tr>
            <tr>
              <td style={S.td}>Aprendido</td>
              <td style={S.td}>Mais flexível; ajusta aos dados</td>
              <td style={S.td}>Não extrapola além do treino</td>
              <td style={S.td}>GPT-2, ViT</td>
            </tr>
            <tr>
              <td style={S.td}>RoPE (rotacional)</td>
              <td style={S.td}>Extrapola; ótima atenção relativa</td>
              <td style={S.td}>Implementação mais complexa</td>
              <td style={S.td}>LLaMA, GPT-NeoX</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 10. Wavelets ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Wavelets — Superando as Limitações de Fourier</h2>
        <p style={S.p}>
          A Transformada de Fourier revela quais frequências existem em um sinal, mas não{' '}
          <em>quando</em> elas ocorrem. Uma explosão de ruído no meio do sinal aparece espalhada por
          todo o espectro. Wavelets resolvem isso com bases <strong>localizadas no tempo e na
          frequência</strong>.
        </p>
        
          Uma wavelet é uma função <InlineMath math="\psi(t)" /> de média zero, decrescente rapidamente, usada para
          criar uma base via translações e dilatações:
          <BlockMath math="\psi_{a,b}(t) = |a|^{-1/2}\, \psi\!\left(\frac{t-b}{a}\right)" />
        
        <SvgWavelet />
        <h3 style={S.h3}>Aplicações</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Domínio</th>
              <th style={S.th}>Aplicação</th>
              <th style={S.th}>Wavelet típica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Compressão de imagens</td>
              <td style={S.td}>JPEG 2000</td>
              <td style={S.td}>Cohen-Daubechies-Feauveau 9/7</td>
            </tr>
            <tr>
              <td style={S.td}>Denoising de sinais</td>
              <td style={S.td}>Threshold de coeficientes pequenos</td>
              <td style={S.td}>Daubechies DB4</td>
            </tr>
            <tr>
              <td style={S.td}>Análise de EEG/ECG</td>
              <td style={S.td}>Detecção de eventos transitórios</td>
              <td style={S.td}>Morlet (complexa)</td>
            </tr>
            <tr>
              <td style={S.td}>Física</td>
              <td style={S.td}>Turbulência, ondas gravitacionais (LIGO)</td>
              <td style={S.td}>Mexican Hat</td>
            </tr>
          </tbody>
        </table>
              </section>

      <hr style={S.divider} />

      {/* ── 11. FNO ── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Fourier Neural Operators (FNO)</h2>
        <p style={S.p}>
          O <strong>Fourier Neural Operator</strong> (Li et al., 2020) é uma arquitetura que
          aprende mapeamentos entre espaços de funções, e não apenas vetores. É particularmente
          eficaz para resolver Equações Diferenciais Parciais (PDEs).
        </p>
        <h3 style={S.h3}>Arquitetura</h3>
        <SvgFNO />
        <p style={S.p}>
          Cada camada FNO opera em dois caminhos paralelos:
        </p>
        
          <p style={{ ...S.p, marginBottom: 4 }}>
            <strong>Caminho espectral:</strong> FFT → transformação linear nos <InlineMath math="K" /> modos de baixa
            frequência → IFFT. Captura dependências globais.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Caminho residual:</strong> multiplicação local W·u(x) por convolução 1x1.
            Captura dependências locais.
          </p>
        
        <p style={S.p}>
          Os pesos aprendíveis são as matrizes complexas R(k) para cada modo espectral k — muito
          menos parâmetros que uma camada densa equivalente.
        </p>
        <h3 style={S.h3}>Vantagens sobre CNNs e GNNs</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>CNN</th>
              <th style={S.th}>GNN</th>
              <th style={S.th}>FNO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Campo receptivo</td>
              <td style={S.td}>Local (kernel)</td>
              <td style={S.td}>k vizinhos</td>
              <td style={S.td}>Global (O(N log N))</td>
            </tr>
            <tr>
              <td style={S.td}>Discretização independente</td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Parcial</td>
              <td style={S.td}>Sim</td>
            </tr>
            <tr>
              <td style={S.td}>Complexidade</td>
              <td style={S.td}>O(N·k²)</td>
              <td style={S.td}>O(N·E)</td>
              <td style={S.td}>O(N log N)</td>
            </tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Aplicações</h3>
        <p style={S.p}>
          FNOs mostraram resultados estado-da-arte em: previsão de fluxo de fluidos (equações de
          Navier-Stokes), previsão climática de alta resolução, modelagem de reservatórios de
          petróleo e design de materiais. O modelo GraphCast do Google DeepMind usa ideias similares
          para previsão climática global.
        </p>
              </section>

      <hr style={S.divider} />

      {/* ── 12. Síntese ── */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo</h2>

        <h3 style={S.h3}>Tabela da Família Fourier</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Variante</th>
              <th style={S.th}>Domínio</th>
              <th style={S.th}>Definição</th>
              <th style={S.th}>Complexidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Série de Fourier</td>
              <td style={S.td}>Periódico contínuo</td>
              <td style={S.td}>aₙ, bₙ via integrais</td>
              <td style={S.td}>Infinita (truncada)</td>
            </tr>
            <tr>
              <td style={S.td}>FT Contínua</td>
              <td style={S.td}>Contínuo, L¹(R)</td>
              <td style={S.td}>∫ f e^(-2pi i xi x) dx</td>
              <td style={S.td}>— (analítica)</td>
            </tr>
            <tr>
              <td style={S.td}>DFT</td>
              <td style={S.td}>Sequência finita</td>
              <td style={S.td}>X[k] = ∑ x[n] e^(-2pi ikn/N)</td>
              <td style={S.td}>O(N²)</td>
            </tr>
            <tr>
              <td style={S.td}>FFT</td>
              <td style={S.td}>Sequência finita</td>
              <td style={S.td}>DFT via divide-and-conquer</td>
              <td style={S.td}>O(N log N)</td>
            </tr>
            <tr>
              <td style={S.td}>STFT</td>
              <td style={S.td}>Sinal não-estacionário</td>
              <td style={S.td}>DFT em janelas deslizantes</td>
              <td style={S.td}>O(N log N) por janela</td>
            </tr>
            <tr>
              <td style={S.td}>Wavelet</td>
              <td style={S.td}>Multi-resolução</td>
              <td style={S.td}>Translação + dilatação de psi</td>
              <td style={S.td}>O(N)</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Propriedades Chave — Cheat Sheet</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Uso prático</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Convolução</td>
              <td style={S.td}><InlineMath math="\mathcal{F}[f*g] = \hat{F}\cdot\hat{G}" /></td>
              <td style={S.td}>CNNs, filtragem rápida</td>
            </tr>
            <tr>
              <td style={S.td}>Parseval</td>
              <td style={S.td}><InlineMath math="\int|f|^2 = \int|\hat{F}|^2" /></td>
              <td style={S.td}>Compressão, energia</td>
            </tr>
            <tr>
              <td style={S.td}>Incerteza</td>
              <td style={S.td}><InlineMath math="\sigma_t \cdot \sigma_f \geq \frac{1}{4\pi}" /></td>
              <td style={S.td}>Design de janelas, STFT</td>
            </tr>
            <tr>
              <td style={S.td}>Derivada</td>
              <td style={S.td}><InlineMath math="\mathcal{F}[f'] = 2\pi i \xi \hat{F}" /></td>
              <td style={S.td}>PDEs espectrais</td>
            </tr>
            <tr>
              <td style={S.td}>Nyquist</td>
              <td style={S.td}><InlineMath math="f_s \geq 2 f_{\max}" /></td>
              <td style={S.td}>Amostragem sem aliasing</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Mapa de Aplicações em ML</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Área de ML</th>
              <th style={S.th}>Técnica Fourier</th>
              <th style={S.th}>Benefício</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Processamento de áudio</td>
              <td style={S.td}>STFT, Mel spectrogram</td>
              <td style={S.td}>Features para classificação, síntese</td>
            </tr>
            <tr>
              <td style={S.td}>Visão computacional</td>
              <td style={S.td}>FFT convolution, wavelets</td>
              <td style={S.td}>Eficiência, compressão JPEG</td>
            </tr>
            <tr>
              <td style={S.td}>Transformers</td>
              <td style={S.td}>Positional Encoding (PE)</td>
              <td style={S.td}>Representação de posição extrapolável</td>
            </tr>
            <tr>
              <td style={S.td}>Séries temporais</td>
              <td style={S.td}>PSD, Welch, STFT</td>
              <td style={S.td}>Detecção de sazonalidade e anomalias</td>
            </tr>
            <tr>
              <td style={S.td}>Física / PDEs</td>
              <td style={S.td}>FNO, métodos espectrais</td>
              <td style={S.td}>Campo receptivo global, O(N log N)</td>
            </tr>
            <tr>
              <td style={S.td}>Compressão</td>
              <td style={S.td}>DCT (JPEG), DWT (JPEG 2000)</td>
              <td style={S.td}>Energia concentrada em poucos coef.</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Código de Referência</h3>
        
        <div style={S.note}>
          A DCT (Discrete Cosine Transform), usada no JPEG, é uma FFT real — decompõe em cossenos e
          concentra a energia em poucos coeficientes, permitindo compressão eficiente ao
          descartar os de alta frequência.
        </div>

        <div style={{ ...S.highlight, marginTop: '1.5rem' }}>
          <p style={{ ...S.p, marginBottom: '0.5rem', fontWeight: 700 }}>Conceitos-chave deste módulo</p>
          <ul style={{ color: 'var(--text-primary)', lineHeight: 2, paddingLeft: '1.2rem', margin: 0 }}>
            <li>Fourier decompõe qualquer sinal em frequências — a base da análise espectral</li>
            <li>A FFT reduz O(N²) para O(N log N) via divide-and-conquer</li>
            <li>Convolução no tempo = multiplicação na frequência (Teorema da Convolução)</li>
            <li>O Princípio da Incerteza proíbe localização simultânea em tempo e frequência</li>
            <li>Wavelets superam Fourier em sinais não-estacionários com localização multiscale</li>
            <li>Positional Encodings em Transformers são Fourier aplicado a sequências discretas</li>
            <li>FNOs usam FFT para dar campo receptivo global com custo O(N log N)</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
