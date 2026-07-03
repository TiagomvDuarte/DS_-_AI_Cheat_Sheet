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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', marginTop: '1.5rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  mathBox: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1.25rem', margin: '1.5rem 0', textAlign: 'center', overflowX: 'auto' },
  svgWrap: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1rem', margin: '1.2rem 0', overflowX: 'auto' },
  figCaption: { fontSize: '0.82rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '0.5rem' },
};

/* ─── SVG: tabela de 6 permutações para 3 features ─────────────────────── */
function SVGPermutations() {
  const rows = [
    { order: 'A → B → C', before: 'f(∅)', after: 'f({A})', marginal: 'f({A}) − f(∅)' },
    { order: 'A → C → B', before: 'f(∅)', after: 'f({A})', marginal: 'f({A}) − f(∅)' },
    { order: 'B → A → C', before: 'f({B})', after: 'f({A,B})', marginal: 'f({A,B}) − f({B})' },
    { order: 'B → C → A', before: 'f({B,C})', after: 'f({A,B,C})', marginal: 'f({A,B,C}) − f({B,C})' },
    { order: 'C → A → B', before: 'f({C})', after: 'f({A,C})', marginal: 'f({A,C}) − f({C})' },
    { order: 'C → B → A', before: 'f({B,C})', after: 'f({A,B,C})', marginal: 'f({A,B,C}) − f({B,C})' },
  ];
  const rowH = 30;
  const headerH = 36;
  const totalH = headerH + rows.length * rowH + 20;
  return (
    <div style={S.svgWrap}>
      <svg viewBox={`0 0 760 ${totalH}`} width="100%" style={{ display: 'block' }}>
        {/* header */}
        <rect x={0} y={0} width={760} height={headerH} fill="rgba(249,115,22,0.10)" rx={6} />
        {['Ordem de Chegada', 'Sem A (S)', 'Com A (S∪{A})', 'Contribuição Marginal de A'].map((label, i) => {
          const xs = [10, 195, 355, 510];
          return <text key={i} x={xs[i]} y={22} fontSize={12} fontWeight={700} fill={color}>{label}</text>;
        })}
        <line x1={0} y1={headerH} x2={760} y2={headerH} stroke="rgba(249,115,22,0.10)" strokeWidth={1} />

        {rows.map((r, i) => {
          const y = headerH + i * rowH;
          const bg = i % 2 === 0 ? 'rgba(249,115,22,0.10)' : 'transparent';
          return (
            <g key={i}>
              <rect x={0} y={y} width={760} height={rowH} fill={bg} />
              <text x={10} y={y + 19} fontSize={11} fill="var(--text-primary)" fontFamily="monospace">{r.order}</text>
              <text x={195} y={y + 19} fontSize={11} fill="var(--text-secondary)" fontFamily="monospace">{r.before}</text>
              <text x={355} y={y + 19} fontSize={11} fill="var(--text-secondary)" fontFamily="monospace">{r.after}</text>
              <text x={510} y={y + 19} fontSize={11} fill="#f97316" fontFamily="monospace" fontWeight={600}>{r.marginal}</text>
              <line x1={0} y1={y + rowH} x2={760} y2={y + rowH} stroke="rgba(0,0,0,0.05)" strokeWidth={1} />
            </g>
          );
        })}

        {/* average annotation */}
        <text x={10} y={totalH - 4} fontSize={11} fill={color} fontWeight={700}>
          φ_A  =  média(6 contribuições marginais)  =  (1/6) × Σ contribuições
        </text>
      </svg>
      <p style={S.figCaption}>Tabela das 6 permutações de 3 features A, B, C — contribuição marginal de A em cada ordenação</p>
    </div>
  );
}

/* ─── SVG: Force plot ───────────────────────────────────────────────────── */
function SVGForcePlot() {
  // Positive segs stack left→right from baseline; negative segs stack right→left from predX
  // scale = pixelRange / (sum_pos + sum_neg) so they meet exactly in the middle
  const barY = 60; const barH = 32;
  const baselineX = 80; const predX = 620;
  const posSegs = [
    { label: 'idade +0.18', val: 0.18 },
    { label: 'rendimento +0.15', val: 0.15 },
    { label: 'educação +0.07', val: 0.07 },
  ];
  const negSegs = [
    { label: 'dívida −0.08', val: 0.08 },
  ];
  const sumPos = posSegs.reduce((a, s) => a + s.val, 0);
  const sumNeg = negSegs.reduce((a, s) => a + s.val, 0);
  const scale = (predX - baselineX) / (sumPos + sumNeg);

  let posX = baselineX;
  const posRects = posSegs.map((s) => {
    const w = s.val * scale;
    const x = posX;
    posX += w;
    return { ...s, x, w };
  });

  let negX = predX;
  const negRects = negSegs.map((s) => {
    const w = s.val * scale;
    negX -= w;
    return { ...s, x: negX, w };
  });

  return (
    <div style={S.svgWrap}>
      <svg viewBox="0 0 740 145" width="100%" style={{ display: 'block' }}>
        <text x={10} y={20} fontSize={13} fontWeight={700} fill="var(--text-primary)">Force Plot — Instância individual</text>

        <text x={baselineX} y={barY - 10} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">E[f]= 0.30</text>
        <line x1={baselineX} y1={barY - 5} x2={baselineX} y2={barY + barH + 5} stroke="var(--text-secondary)" strokeWidth={2} strokeDasharray="4 3" />

        <text x={predX} y={barY - 10} fontSize={11} fill={color} textAnchor="middle" fontWeight={700}>f(x)= 0.72</text>
        <line x1={predX} y1={barY - 5} x2={predX} y2={barY + barH + 5} stroke={color} strokeWidth={2} />

        {posRects.map((r, i) => (
          <g key={i}>
            <rect x={r.x} y={barY} width={r.w} height={barH} fill="#f97316" opacity={0.82 - i * 0.06} rx={2} />
            {r.w > 60 && (
              <text x={r.x + r.w / 2} y={barY + barH / 2 + 4} fontSize={10} fill="#fff" textAnchor="middle" fontWeight={600}>{r.label}</text>
            )}
          </g>
        ))}

        {negRects.map((r, i) => (
          <g key={i}>
            <rect x={r.x} y={barY} width={r.w} height={barH} fill="#c2410c" opacity={0.85} rx={2} />
            {r.w > 60 && (
              <text x={r.x + r.w / 2} y={barY + barH / 2 + 4} fontSize={10} fill="#fff" textAnchor="middle" fontWeight={600}>{r.label}</text>
            )}
          </g>
        ))}

        <line x1={baselineX} y1={barY + barH + 22} x2={predX} y2={barY + barH + 22} stroke={color} strokeWidth={1.5} markerEnd="url(#arr4)" />
        <defs>
          <marker id="arr4" markerWidth={8} markerHeight={8} refX={6} refY={3} orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={color} />
          </marker>
        </defs>
        <text x={(baselineX + predX) / 2} y={barY + barH + 40} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">
          Δ = +0.42  (laranja empurra ↑, vermelho empurra ↓)
        </text>
      </svg>
      <p style={S.figCaption}>Force plot: baseline E[f]=0.30, predição final f(x)=0.72; cada segmento é o SHAP value de uma feature</p>
    </div>
  );
}

/* ─── SVG: Decision Tree com anotações TreeSHAP ────────────────────────── */
function SVGTreeSHAP() {
  return (
    <div style={S.svgWrap}>
      <svg viewBox="0 0 700 280" width="100%" style={{ display: 'block' }}>
        <text x={10} y={20} fontSize={13} fontWeight={700} fill="var(--text-primary)">Árvore de Decisão — Anotações TreeSHAP</text>

        {/* root */}
        <rect x={280} y={35} width={140} height={44} rx={8} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1.5} />
        <text x={350} y={53} fontSize={11} fontWeight={700} fill={color} textAnchor="middle">idade ≤ 35</text>
        <text x={350} y={69} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">φ(idade) += Δ_root</text>

        {/* level 1 left */}
        <rect x={100} y={130} width={140} height={44} rx={8} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
        <text x={170} y={148} fontSize={11} fontWeight={700} fill="#f97316" textAnchor="middle">rendimento ≤ 40k</text>
        <text x={170} y={164} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">φ(rend.) += Δ_L</text>

        {/* level 1 right */}
        <rect x={460} y={130} width={140} height={44} rx={8} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
        <text x={530} y={148} fontSize={11} fontWeight={700} fill="#f97316" textAnchor="middle">dívida ≤ 20k</text>
        <text x={530} y={164} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">φ(dívida) += Δ_R</text>

        {/* leaves level 2 */}
        {[
          { x: 30, label: '0.12', sub: 'φ= −0.18' },
          { x: 190, label: '0.68', sub: 'φ= +0.20' },
          { x: 390, label: '0.81', sub: 'φ= +0.33' },
          { x: 560, label: '0.55', sub: 'φ= +0.07' },
        ].map((lf, i) => (
          <g key={i}>
            <rect x={lf.x} y={225} width={100} height={40} rx={6} fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.10)" strokeWidth={1} />
            <text x={lf.x + 50} y={242} fontSize={13} fontWeight={800} fill={color} textAnchor="middle">{lf.label}</text>
            <text x={lf.x + 50} y={257} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">{lf.sub}</text>
          </g>
        ))}

        {/* edges root → L1 */}
        <line x1={320} y1={79} x2={200} y2={130} stroke="var(--text-secondary)" strokeWidth={1.5} fill="none" />
        <text x={212} y={112} fontSize={10} fill="var(--text-secondary)">Sim</text>
        <line x1={380} y1={79} x2={500} y2={130} stroke="var(--text-secondary)" strokeWidth={1.5} fill="none" />
        <text x={465} y={112} fontSize={10} fill="var(--text-secondary)">Não</text>

        {/* edges L1 → leaves */}
        <line x1={150} y1={174} x2={80} y2={225} stroke="var(--text-secondary)" strokeWidth={1} fill="none" />
        <line x1={190} y1={174} x2={240} y2={225} stroke="var(--text-secondary)" strokeWidth={1} fill="none" />
        <line x1={510} y1={174} x2={440} y2={225} stroke="var(--text-secondary)" strokeWidth={1} fill="none" />
        <line x1={550} y1={174} x2={610} y2={225} stroke="var(--text-secondary)" strokeWidth={1} fill="none" />
      </svg>
      <p style={S.figCaption}>Árvore de profundidade 2 com Shapley values anotados em cada ramo; o TreeSHAP percorre a estrutura sem enumerar todos os subconjuntos</p>
    </div>
  );
}

/* ─── SVG: Beeswarm (Summary plot) ─────────────────────────────────────── */
function SVGBeeswarm() {
  const features = ['dívida', 'idade', 'rendimento', 'escolaridade', 'emprego', 'n_dependentes'];
  // dots: [shap, featureValue(0=low,1=high)]
  const dots = {
    dívida:       [[-0.4,1],[-0.38,1],[-0.3,0.9],[-0.1,0.5],[0.05,0.2],[0.12,0.1]],
    idade:        [[-0.25,0.1],[-0.1,0.3],[0.05,0.5],[0.18,0.7],[0.28,0.9],[0.32,1]],
    rendimento:   [[-0.2,0.1],[0.1,0.4],[0.22,0.6],[0.3,0.8],[0.35,0.9],[0.4,1]],
    escolaridade: [[-0.15,0.1],[-0.05,0.3],[0.08,0.6],[0.14,0.8],[0.18,1],[0.2,1]],
    emprego:      [[-0.1,0.2],[-0.02,0.4],[0.06,0.6],[0.1,0.8],[0.13,0.9],[0.15,1]],
    n_dependentes:[[-0.18,1],[-0.12,0.8],[-0.05,0.5],[0.0,0.3],[0.04,0.1],[0.07,0.05]],
  };

  const W = 640; const leftPad = 110; const rightPad = 30;
  const plotW = W - leftPad - rightPad;
  const minS = -0.5; const maxS = 0.5;
  const toX = v => leftPad + ((v - minS) / (maxS - minS)) * plotW;
  const rowH = 36;
  const topPad = 40;

  return (
    <div style={S.svgWrap}>
      <svg viewBox={`0 0 ${W} ${topPad + features.length * rowH + 50}`} width="100%" style={{ display: 'block' }}>
        <text x={10} y={20} fontSize={13} fontWeight={700} fill="var(--text-primary)">Summary Plot (Beeswarm) — Importância Global</text>

        {/* zero line */}
        <line x1={toX(0)} y1={topPad - 10} x2={toX(0)} y2={topPad + features.length * rowH} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="4 3" fill="none" />

        {/* x-axis */}
        {[-0.4, -0.2, 0, 0.2, 0.4].map(v => (
          <g key={v}>
            <line x1={toX(v)} y1={topPad + features.length * rowH} x2={toX(v)} y2={topPad + features.length * rowH + 5} stroke="var(--text-secondary)" strokeWidth={1} fill="none" />
            <text x={toX(v)} y={topPad + features.length * rowH + 16} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">{v}</text>
          </g>
        ))}
        <text x={W / 2} y={topPad + features.length * rowH + 32} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">Valor SHAP</text>

        {features.map((feat, fi) => {
          const cy = topPad + fi * rowH + rowH / 2;
          return (
            <g key={fi}>
              <text x={leftPad - 8} y={cy + 4} fontSize={11} fill="var(--text-primary)" textAnchor="end">{feat}</text>
              {(dots[feat] || []).map(([s, fv], di) => {
                // Orange palette: low fv = amber (#fbbf24), high fv = dark red-orange (#c2410c)
                const lr = 251, lg = 191, lb = 36;   // #fbbf24
                const hr = 194, hg = 65,  hb = 12;   // #c2410c
                const dr = Math.round(lr + (hr - lr) * fv);
                const dg = Math.round(lg + (hg - lg) * fv);
                const db = Math.round(lb + (hb - lb) * fv);
                const dotColor = `rgb(${dr},${dg},${db})`;
                const jitter = (di - 2.5) * 3.5;
                return (
                  <circle key={di} cx={toX(s)} cy={cy + jitter} r={5} fill={dotColor} opacity={0.85} />
                );
              })}
            </g>
          );
        })}

        {/* legend */}
        <defs>
          <linearGradient id="legGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
        <rect x={W - 130} y={topPad - 8} width={100} height={10} fill="url(#legGrad)" rx={3} />
        <text x={W - 130} y={topPad + 16} fontSize={9} fill="var(--text-secondary)">baixo</text>
        <text x={W - 40} y={topPad + 16} fontSize={9} fill="var(--text-secondary)" textAnchor="end">alto</text>
        <text x={W - 80} y={topPad - 12} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">Valor da feature</text>
      </svg>
      <p style={S.figCaption}>Beeswarm: cada ponto é uma instância; cor = valor da feature (âmbar=baixo, vermelho-escuro=alto); posição x = SHAP value</p>
    </div>
  );
}

/* ─── SVG: Waterfall plot ───────────────────────────────────────────────── */
function SVGWaterfall() {
  const base = 0.30;
  const steps = [
    { label: 'E[f(x)] = 0.30', val: 0, cumul: 0.30, isBase: true },
    { label: 'rendimento=85k  +0.18', val: 0.18 },
    { label: 'idade=42        +0.12', val: 0.12 },
    { label: 'escolaridade=M  +0.08', val: 0.08 },
    { label: 'n_depend.=2    −0.05', val: -0.05 },
    { label: 'dívida=15k     −0.03', val: -0.03 },
    { label: 'emprego=5a     +0.02', val: 0.02 },
  ];

  let cumul = base;
  const bars = steps.slice(1).map(s => {
    const start = cumul;
    cumul += s.val;
    return { ...s, start, end: cumul };
  });

  const W = 680; const leftPad = 200; const rightPad = 80;
  const plotW = W - leftPad - rightPad;
  const minV = 0.20; const maxV = 0.75;
  const toX = v => leftPad + ((v - minV) / (maxV - minV)) * plotW;
  const rowH = 30; const topPad = 36;

  return (
    <div style={S.svgWrap}>
      <svg viewBox={`0 0 ${W} ${topPad + (bars.length + 2) * rowH + 40}`} width="100%" style={{ display: 'block' }}>
        <text x={10} y={20} fontSize={13} fontWeight={700} fill="var(--text-primary)">Waterfall Plot — Decomposição de uma Predição</text>

        {/* baseline bar */}
        <text x={leftPad - 8} y={topPad + rowH / 2 + 4} fontSize={10} fill="var(--text-secondary)" textAnchor="end">E[f(x)]</text>
        <rect x={toX(0.24)} y={topPad + 4} width={toX(base) - toX(0.24)} height={rowH - 8} fill="var(--text-secondary)" opacity={0.5} rx={3} />
        <text x={toX(base) + 5} y={topPad + rowH / 2 + 4} fontSize={10} fill="var(--text-secondary)">{base.toFixed(2)}</text>

        {bars.map((b, i) => {
          const y = topPad + (i + 1) * rowH;
          const pos = b.val >= 0;
          const x1 = toX(b.start); const x2 = toX(b.end);
          const bx = Math.min(x1, x2); const bw = Math.abs(x2 - x1);
          return (
            <g key={i}>
              {/* connector */}
              <line x1={toX(b.start)} y1={y} x2={toX(b.start)} y2={y - 2} stroke="var(--card-border)" strokeWidth={1} strokeDasharray="3 2" fill="none" />
              {/* label */}
              <text x={leftPad - 8} y={y + rowH / 2 + 4} fontSize={10} fill="var(--text-primary)" textAnchor="end">{b.label}</text>
              {/* bar */}
              <rect x={bx} y={y + 4} width={Math.max(bw, 2)} height={rowH - 8} fill={pos ? '#f97316' : '#c2410c'} opacity={0.75} rx={3} />
              {/* end value */}
              <text x={x2 + (pos ? 5 : -5)} y={y + rowH / 2 + 4} fontSize={10} fill={pos ? '#f97316' : '#c2410c'} textAnchor={pos ? 'start' : 'end'}>{b.end.toFixed(2)}</text>
            </g>
          );
        })}

        {/* final prediction */}
        const finalY = topPad + (bars.length + 1) * rowH;
        <text x={leftPad - 8} y={topPad + (bars.length + 1) * rowH + rowH / 2 + 4} fontSize={11} fontWeight={700} fill={color} textAnchor="end">f(x)</text>
        <rect x={toX(0.24)} y={topPad + (bars.length + 1) * rowH + 4} width={toX(cumul) - toX(0.24)} height={rowH - 8} fill={color} opacity={0.6} rx={3} />
        <text x={toX(cumul) + 5} y={topPad + (bars.length + 1) * rowH + rowH / 2 + 4} fontSize={11} fontWeight={700} fill={color}>{cumul.toFixed(2)}</text>

        {/* x-axis */}
        {[0.3, 0.4, 0.5, 0.6, 0.7].map(v => (
          <g key={v}>
            <line x1={toX(v)} y1={topPad} x2={toX(v)} y2={topPad + (bars.length + 2) * rowH} stroke="var(--card-border)" strokeWidth={1} fill="none" />
            <text x={toX(v)} y={topPad + (bars.length + 2) * rowH + 14} fontSize={9} fill="var(--text-secondary)" textAnchor="middle">{v.toFixed(1)}</text>
          </g>
        ))}
      </svg>
      <p style={S.figCaption}>Waterfall: barras empilhadas de E[f(x)]=0.30 até f(x)=0.62; azul=contribuição positiva, vermelho=negativa</p>
    </div>
  );
}

/* ─── SVG: Dependence plot ──────────────────────────────────────────────── */
function SVGDependencePlot() {
  // feature = rendimento, SHAP values vs feature value, colored by idade
  const pts = [
    [20, -0.22, 0.2], [25, -0.18, 0.3], [30, -0.15, 0.5], [35, -0.10, 0.4],
    [40, -0.05, 0.6], [45, 0.02, 0.5], [50, 0.08, 0.7], [55, 0.14, 0.8],
    [60, 0.20, 0.6], [65, 0.25, 0.9], [70, 0.28, 0.7], [75, 0.32, 0.95],
    [80, 0.35, 0.85], [85, 0.38, 1.0], [90, 0.40, 0.9],
  ];
  const W = 640; const H = 240;
  const lp = 60; const rp = 40; const tp = 40; const bp = 50;
  const plotW = W - lp - rp; const plotH = H - tp - bp;
  const toX = v => lp + ((v - 15) / 80) * plotW;
  const toY = v => tp + plotH - ((v + 0.3) / 0.75) * plotH;
  const dotColor = iv => {
    // Orange palette: iv=0 (jovem)=amber #fbbf24, iv=1 (idoso)=dark orange #c2410c
    const dr = Math.round(251 + (194 - 251) * iv);
    const dg = Math.round(191 + (65 - 191) * iv);
    const db = Math.round(36 + (12 - 36) * iv);
    return `rgb(${dr},${dg},${db})`;
  };

  return (
    <div style={S.svgWrap}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
        <text x={lp} y={22} fontSize={13} fontWeight={700} fill="var(--text-primary)">Dependence Plot — rendimento vs SHAP(rendimento)</text>

        {/* axes */}
        <line x1={lp} y1={tp} x2={lp} y2={tp + plotH} stroke="var(--text-secondary)" strokeWidth={1.5} fill="none" />
        <line x1={lp} y1={tp + plotH} x2={lp + plotW} y2={tp + plotH} stroke="var(--text-secondary)" strokeWidth={1.5} fill="none" />

        {/* zero line */}
        <line x1={lp} y1={toY(0)} x2={lp + plotW} y2={toY(0)} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="4 3" fill="none" />

        {/* y labels */}
        {[-0.2, 0, 0.2, 0.4].map(v => (
          <g key={v}>
            <text x={lp - 6} y={toY(v) + 4} fontSize={10} fill="var(--text-secondary)" textAnchor="end">{v.toFixed(1)}</text>
            <line x1={lp - 3} y1={toY(v)} x2={lp} y2={toY(v)} stroke="var(--text-secondary)" strokeWidth={1} fill="none" />
          </g>
        ))}
        <text x={lp - 45} y={tp + plotH / 2} fontSize={11} fill="var(--text-secondary)" textAnchor="middle" transform={`rotate(-90, ${lp - 45}, ${tp + plotH / 2})`}>SHAP(rendimento)</text>

        {/* x labels */}
        {[20, 40, 60, 80].map(v => (
          <g key={v}>
            <text x={toX(v)} y={tp + plotH + 16} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">{v}k</text>
            <line x1={toX(v)} y1={tp + plotH} x2={toX(v)} y2={tp + plotH + 4} stroke="var(--text-secondary)" strokeWidth={1} fill="none" />
          </g>
        ))}
        <text x={lp + plotW / 2} y={H - 5} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">Rendimento Anual (€)</text>

        {/* dots */}
        {pts.map(([fv, sv, iv], i) => (
          <circle key={i} cx={toX(fv)} cy={toY(sv)} r={5.5} fill={dotColor(iv)} opacity={0.85} />
        ))}

        {/* legend */}
        <defs>
          <linearGradient id="depGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
        <rect x={W - 120} y={tp - 18} width={80} height={10} fill="url(#depGrad)" rx={3} />
        <text x={W - 120} y={tp + 24} fontSize={9} fill="var(--text-secondary)">jovem</text>
        <text x={W - 42} y={tp + 24} fontSize={9} fill="var(--text-secondary)" textAnchor="end">idoso</text>
        <text x={W - 80} y={tp - 25} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">Cor = idade</text>
      </svg>
      <p style={S.figCaption}>Dependence plot: relação entre o valor de rendimento e o SHAP(rendimento), colorida pela feature de interacção (idade)</p>
    </div>
  );
}

/* ─── SVG: SHAP para NLP — tokens coloridos ─────────────────────────────── */
function SVGTextSHAP() {
  const tokens = [
    { word: 'Este', shap: 0.02 },
    { word: 'produto', shap: 0.04 },
    { word: 'é', shap: 0.01 },
    { word: 'absolutamente', shap: 0.21 },
    { word: 'fantástico', shap: 0.38 },
    { word: 'e', shap: 0.00 },
    { word: 'superou', shap: 0.15 },
    { word: 'todas', shap: 0.03 },
    { word: 'as', shap: 0.01 },
    { word: 'expectativas', shap: 0.12 },
    { word: '.', shap: 0.00 },
  ];
  // negative sentiment tokens (hypothetical second line)
  const tokens2 = [
    { word: 'A', shap: 0.01 },
    { word: 'entrega', shap: 0.03 },
    { word: 'foi', shap: 0.01 },
    { word: 'terrível', shap: -0.32 },
    { word: 'e', shap: 0.00 },
    { word: 'o', shap: 0.00 },
    { word: 'suporte', shap: -0.08 },
    { word: 'completamente', shap: -0.18 },
    { word: 'inútil', shap: -0.29 },
    { word: '.', shap: 0.00 },
  ];

  const toColor = (s) => {
    if (s > 0.3)  return 'rgba(249,115,22,0.85)';
    if (s > 0.15) return 'rgba(249,115,22,0.60)';
    if (s > 0.05) return 'rgba(249,115,22,0.35)';
    if (s < -0.25) return 'rgba(194,65,12,0.80)';
    if (s < -0.10) return 'rgba(194,65,12,0.55)';
    if (s < -0.03) return 'rgba(194,65,12,0.30)';
    return 'rgba(156,163,175,0.15)';
  };

  const renderLine = (toks, yBase) => {
    let xCursor = 10;
    return toks.map((t, i) => {
      const approxW = t.word.length * 8 + 14;
      const rect = { x: xCursor, y: yBase, w: approxW, fill: toColor(t.shap) };
      xCursor += approxW + 4;
      return (
        <g key={i}>
          <rect x={rect.x} y={rect.y} width={rect.w} height={26} rx={4} fill={rect.fill} />
          <text x={rect.x + rect.w / 2} y={rect.y + 17} fontSize={12} fill="var(--text-primary)" textAnchor="middle" fontFamily="system-ui">{t.word}</text>
          <text x={rect.x + rect.w / 2} y={rect.y + 38} fontSize={8} fill="var(--text-secondary)" textAnchor="middle">{t.shap > 0.01 || t.shap < -0.01 ? (t.shap > 0 ? '+' : '') + t.shap.toFixed(2) : ''}</text>
        </g>
      );
    });
  };

  return (
    <div style={S.svgWrap}>
      <svg viewBox="0 0 720 192" width="100%" style={{ display: 'block' }}>
        <text x={10} y={20} fontSize={13} fontWeight={700} fill="var(--text-primary)">SHAP para NLP — Contribuição por Token (Análise de Sentimento)</text>
        <text x={10} y={38} fontSize={10} fill="var(--text-secondary)">Positivo →</text>
        <g transform="translate(0, 42)">{renderLine(tokens, 0)}</g>
        <text x={10} y={108} fontSize={10} fill="var(--text-secondary)">Negativo →</text>
        <g transform="translate(0, 112)">{renderLine(tokens2, 0)}</g>

        {/* legend — below both lines */}
        <rect x={200} y={162} width={14} height={14} rx={3} fill="rgba(249,115,22,0.65)" />
        <text x={218} y={173} fontSize={10} fill="var(--text-secondary)">SHAP positivo (↑ sentim.)</text>
        <rect x={400} y={162} width={14} height={14} rx={3} fill="rgba(194,65,12,0.45)" />
        <text x={418} y={173} fontSize={10} fill="var(--text-secondary)">SHAP negativo (↓ sentim.)</text>
      </svg>
      <p style={S.figCaption}>Tokens coloridos pelo SHAP value: laranja intenso = positivo (↑ sentimento), laranja-escuro = negativo (↓ sentimento)</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Componente principal
═══════════════════════════════════════════════════════════════════════════ */
export default function XAI4() {
  return (
    <div style={S.page}>
      <Link to="/xai" style={S.back}><ArrowLeft size={16} /> Voltar a Explainable AI</Link>

      <div style={S.tag}>MÓDULO 04</div>
      <h1 style={S.h1}>SHAP — SHapley Additive exPlanations</h1>
      <p style={S.lead}>
        SHAP é actualmente o método de explicabilidade mais teoricamente fundamentado e amplamente adoptado.
        Radica na teoria de jogos cooperativos e oferece garantias formais de equidade na atribuição do contributo
        de cada feature para uma predição individual — combinando rigor matemático com um ecossistema de
        visualizações extremamente expressivo.
      </p>

      {/* ── Secção 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Shapley Values — Teoria dos Jogos</h2>
        <p style={S.p}>
          Os <strong>Shapley values</strong> foram introduzidos por Lloyd Shapley em 1951 como solução ao problema de
          distribuição justa de ganhos num jogo cooperativo com N jogadores. A ideia central é simples: cada jogador
          deve receber uma recompensa proporcional à sua contribuição marginal média ao longo de todas as coligações
          possíveis com os restantes jogadores.
        </p>
        <p style={S.p}>
          No contexto de XAI, a analogia é directa: cada <strong>feature</strong> é um jogador, a <strong>predição</strong> é
          o resultado do jogo (payout), e o Shapley value de uma feature mede quanto ela contribuiu, em média,
          para desviar a predição da baseline global E[f(x)].
        </p>

        <h3 style={S.h3}>Exemplo: 3 features, 6 permutações</h3>
        <p style={S.p}>
          Com três features A, B e C, existem 3! = 6 ordenações possíveis. Para calcular o Shapley value de A,
          determinamos a contribuição marginal de A em cada ordenação — ou seja, quanto muda a predição quando
          adicionamos A ao conjunto de features que já estão presentes — e fazemos a média:
        </p>
        <SVGPermutations />

        <p style={S.p}>
          A fórmula geral pondera cada subconjunto S pelo número de ordenações em que A entra exactamente
          nessa posição:
        </p>
        <div style={S.mathBox}>
          <BlockMath math={"\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!}\\left[v(S \\cup \\{i\\}) - v(S)\\right]"} />
        </div>
        <p style={S.p}>
          Onde <InlineMath math={"F"} /> é o conjunto total de features, <InlineMath math={"S"} /> é um subconjunto
          que não inclui a feature <InlineMath math={"i"} />, e <InlineMath math={"v(S)"} /> é a predição do
          modelo quando apenas as features de <InlineMath math={"S"} /> estão disponíveis (as restantes são
          integradas/marginalizadas).
        </p>
        <div style={S.note}>
          O cálculo exacto requer avaliar todos os <InlineMath math={"2^{|F|}"} /> subconjuntos possíveis.
          Para <InlineMath math={"|F| = 20"} /> features, isso são mais de 1 milhão de avaliações do modelo
          — exponencial em p. Daí a importância de algoritmos eficientes como o TreeSHAP.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. SHAP = Shapley Additive exPlanations</h2>
        <p style={S.p}>
          Em 2017, Lundberg &amp; Lee mostraram que os Shapley values constituem a <strong>única</strong> família
          de métodos de atribuição de importância que satisfaz simultaneamente quatro axiomas desejáveis.
          O método resultante — SHAP — usa os Shapley values como explicações locais aditivas.
        </p>

        <h3 style={S.h3}>Os 4 Axiomas SHAP</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Axioma</th>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Significado prático</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Efficiency</strong></td>
              <td style={S.td}><InlineMath math={"\\sum_i \\phi_i = f(x) - E[f(x)]"} /></td>
              <td style={S.td}>A soma dos SHAP values iguala exactamente o desvio da predição face à média global</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Symmetry</strong></td>
              <td style={S.td}><InlineMath math={"\\phi_i = \\phi_j"} /> se contributos iguais</td>
              <td style={S.td}>Duas features com o mesmo efeito recebem a mesma importância</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Dummy</strong></td>
              <td style={S.td}><InlineMath math={"\\phi_i = 0"} /> se feature sem impacto</td>
              <td style={S.td}>Não se atribui importância a features irrelevantes para o modelo</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Additivity</strong></td>
              <td style={S.td}><InlineMath math={"\\phi_i^{A+B} = \\phi_i^A + \\phi_i^B"} /></td>
              <td style={S.td}>Para ensembles: o SHAP value é a soma dos valores por árvore/sub-modelo</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Decomposição Aditiva</h3>
        <p style={S.p}>
          A predição de qualquer instância pode ser escrita como a soma do valor esperado global mais os
          contributos individuais de cada feature:
        </p>
        <div style={S.mathBox}>
          <BlockMath math={"f(x) = \\phi_0 + \\sum_{i=1}^{p} \\phi_i"} />
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            onde <InlineMath math={"\\phi_0 = E[f(x)]"} /> é a baseline (predição média sobre os dados de treino)
          </p>
        </div>

        <h3 style={S.h3}>Force Plot — Visualização Local</h3>
        <p style={S.p}>
          O force plot ilustra a decomposição aditiva para uma instância: a baseline E[f] é o ponto de
          partida à esquerda, cada feature empurra a predição para a direita (positivo, azul) ou para a
          esquerda (negativo, vermelho), terminando na predição final f(x).
        </p>
        <SVGForcePlot />
      </div>

      <hr style={S.divider} />

      {/* ── Secção 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. TreeSHAP</h2>
        <p style={S.p}>
          Para modelos baseados em árvores — árvores de decisão individuais, Random Forests, XGBoost,
          LightGBM, CatBoost — Lundberg et al. (2018) desenvolveram o <strong>TreeSHAP</strong>: um
          algoritmo que explora a estrutura hierárquica das árvores para calcular os Shapley values
          <em> exactos</em> de forma eficiente, sem recorrer a amostras aleatórias.
        </p>

        <h3 style={S.h3}>Complexidade Computacional</h3>
        
          <p style={{ margin: 0 }}>
            <strong>TreeSHAP: </strong>
            <InlineMath math={"\\mathcal{O}(T \\cdot L \\cdot D^2)"} />
            , onde <InlineMath math={"T"} /> = número de árvores, <InlineMath math={"L"} /> = número de folhas,
            <InlineMath math={"D"} /> = profundidade máxima.
          </p>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            A chave do algoritmo é que, ao percorrer cada caminho na árvore, é possível calcular
            analiticamente a contribuição marginal de cada feature sem enumerar todos os <InlineMath math={"2^p"} /> subconjuntos.
          </p>
        

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>p = 20 features</th>
              <th style={S.th}>T = 100 árvores, D = 6</th>
              <th style={S.th}>Exacto?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Força bruta</td>
              <td style={S.td}><InlineMath math={"2^{20} \\approx 10^6"} /> avaliações</td>
              <td style={S.td}>Horas a dias</td>
              <td style={S.td}>Sim</td>
            </tr>
            <tr>
              <td style={S.td}><strong>TreeSHAP</strong></td>
              <td style={S.td}><InlineMath math={"100 \\times 64 \\times 36 \\approx 230\\,000"} /> ops</td>
              <td style={S.td}>&lt; 1 segundo para 10 000 instâncias</td>
              <td style={S.td}><strong>Sim</strong></td>
            </tr>
            <tr>
              <td style={S.td}>KernelSHAP</td>
              <td style={S.td}>~1000 amostras (aproximado)</td>
              <td style={S.td}>Minutos a horas</td>
              <td style={S.td}>Não (aprox.)</td>
            </tr>
          </tbody>
        </table>

        <SVGTreeSHAP />
      </div>

      <hr style={S.divider} />

      {/* ── Secção 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. DeepSHAP e KernelSHAP</h2>

        <h3 style={S.h3}>KernelSHAP — Abordagem Model-Agnostic</h3>
        <p style={S.p}>
          Para modelos sem estrutura explorável (redes neuronais, SVMs, modelos proprietários),
          o <strong>KernelSHAP</strong> oferece uma aproximação model-agnostic. É conceptualmente semelhante
          ao LIME — perturbamos o input, observamos a resposta do modelo e ajustamos um modelo linear local —
          mas usa um kernel especial derivado dos Shapley values que garante a satisfação dos quatro axiomas.
        </p>
        <p style={S.p}>
          Enquanto o LIME usa um kernel gaussiano arbitrário, o KernelSHAP usa o <strong>kernel de Shapley</strong>:
        </p>
        <div style={S.mathBox}>
          <BlockMath math={"\\pi_x(z') = \\frac{(p-1)}{\\binom{p}{|z'|}|z'|(p-|z'|)}"} />
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            onde <InlineMath math={"|z'|"} /> é o número de features activas na perturbação <InlineMath math={"z'"} />.
            Este kernel dá mais peso a perturbações com poucas ou muitas features activas (coalições extremas).
          </p>
        </div>

        <h3 style={S.h3}>DeepSHAP — Para Redes Neuronais</h3>
        <p style={S.p}>
          O <strong>DeepSHAP</strong> combina a ideia de DeepLIFT com os Shapley values para redes neuronais.
          Em vez de amostrar perturbações aleatórias, propaga os SHAP values camada a camada pela rede
          usando backpropagation modificado, tornando-o muito mais rápido que o KernelSHAP para arquitecturas
          profundas.
        </p>

        <h3 style={S.h3}>Comparação entre Variantes SHAP</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Modelo alvo</th>
              <th style={S.th}>Exacto?</th>
              <th style={S.th}>Velocidade</th>
              <th style={S.th}>Notas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>TreeSHAP</strong></td>
              <td style={S.td}>Árvores, RF, XGB, LGBM</td>
              <td style={S.td}>Sim</td>
              <td style={S.td}>Muito rápido</td>
              <td style={S.td}>Recomendado sempre que possível</td>
            </tr>
            <tr>
              <td style={S.td}><strong>DeepSHAP</strong></td>
              <td style={S.td}>Redes neuronais (PyTorch, TF)</td>
              <td style={S.td}>Aprox.</td>
              <td style={S.td}>Rápido</td>
              <td style={S.td}>Requer acesso aos gradientes</td>
            </tr>
            <tr>
              <td style={S.td}><strong>KernelSHAP</strong></td>
              <td style={S.td}>Qualquer modelo (caixa negra)</td>
              <td style={S.td}>Aprox.</td>
              <td style={S.td}>Lento</td>
              <td style={S.td}>Usar background pequeno (100-300 amostras)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>LinearSHAP</strong></td>
              <td style={S.td}>Modelos lineares</td>
              <td style={S.td}>Sim</td>
              <td style={S.td}>Instantâneo</td>
              <td style={S.td}>Analítico para modelos lineares</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          KernelSHAP pode ser 100-1000x mais lento que TreeSHAP. Para produção com modelos caixa-negra,
          considere limitar o número de instâncias explicadas ou usar amostras representativas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Visualizações SHAP</h2>
        <p style={S.p}>
          A biblioteca SHAP oferece um ecossistema rico de visualizações, cada uma respondendo a perguntas
          distintas sobre o comportamento do modelo — a nível global (todo o dataset) ou local (uma instância).
        </p>

        <h3 style={S.h3}>Summary Plot (Beeswarm) — Âmbito Global</h3>
        <p style={S.p}>
          O beeswarm é o gráfico mais informativo para análise global: cada ponto representa uma instância
          do dataset, o eixo X mostra o SHAP value, e a cor indica o valor da feature (azul = baixo,
          vermelho = alto). Permite ver simultaneamente importância, direcção e distribuição dos efeitos.
        </p>
        <SVGBeeswarm />

        <h3 style={S.h3}>Waterfall Plot — Âmbito Local</h3>
        <p style={S.p}>
          O waterfall decompõe a predição de uma instância individual: parte da baseline E[f(x)],
          acumula cada contribuição SHAP (barras azuis para positivo, vermelhas para negativo) e
          termina na predição final f(x).
        </p>
        <SVGWaterfall />

        <h3 style={S.h3}>Dependence Plot — Efeito de uma Feature</h3>
        <p style={S.p}>
          O dependence plot mostra como o SHAP value de uma feature varia com o seu valor numérico.
          A cor de cada ponto corresponde a uma segunda feature, revelando interacções: se a nuvem de
          pontos se separar por cor, existe uma interacção significativa entre as duas features.
        </p>
        <SVGDependencePlot />
      </div>

      <hr style={S.divider} />

      {/* ── Secção 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. SHAP para NLP e Imagem</h2>

        <h3 style={S.h3}>SHAP em NLP — Nível de Token</h3>
        <p style={S.p}>
          Em tarefas de processamento de linguagem natural, cada <strong>token</strong> (palavra, sub-palavra)
          é tratado como uma feature. O SHAP value de um token quantifica quanto aquele token contribuiu para
          a predição final — positivo se empurrou para a classe alvo, negativo se empurrou contra ela.
        </p>
        <p style={S.p}>
          A abordagem típica usa masking: substituímos tokens ausentes por um token especial (e.g., [MASK] ou
          o token de padding), avaliamos o modelo em todas as coligações relevantes e calculamos os Shapley values.
          Para modelos Transformer, o <code>shap.Explainer</code> com o tokenizer cuida automaticamente desta lógica.
        </p>
        <SVGTextSHAP />

        <h3 style={S.h3}>SHAP em Imagem — Superpixel Masking</h3>
        <p style={S.p}>
          Para imagens, o espaço de features são os <strong>superpixéis</strong> (regiões coerentes da imagem,
          geradas e.g. por SLIC). Cada superpixel é uma feature binária: presente (valor original) ou ausente
          (substituído por cinzento ou pela média do dataset). O KernelSHAP ou o DeepSHAP calculam a
          importância de cada região.
        </p>
        <div style={S.note}>
          A granularidade dos superpixéis afecta muito as explicações: superpixéis muito grandes perdem detalhe;
          muito pequenos tornam o cálculo proibitivo. Um valor típico é 50-200 superpixéis por imagem.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. SHAP vs LIME — Comparação</h2>
        <p style={S.p}>
          SHAP e LIME são os dois métodos model-agnostic locais mais utilizados. Embora partilhem a ideia
          de aproximação linear local, diferem substancialmente nas garantias teóricas, na consistência
          e na interpretabilidade dos resultados.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Critério</th>
              <th style={S.th}>SHAP</th>
              <th style={S.th}>LIME</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Consistência teórica</strong></td>
              <td style={S.td}>Axiomas provados (única solução justa)</td>
              <td style={S.td}>Sem garantias teóricas formais</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Estabilidade</strong></td>
              <td style={S.td}>Determinístico (TreeSHAP) ou estável (KernelSHAP com N grande)</td>
              <td style={S.td}>Pode ser instável entre execuções (kernel e amostras aleatórias)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Velocidade</strong></td>
              <td style={S.td}>Muito rápido (TreeSHAP); lento (KernelSHAP)</td>
              <td style={S.td}>Moderado para qualquer modelo</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Suporte a modelos</strong></td>
              <td style={S.td}>Qualquer (variantes especializadas por tipo)</td>
              <td style={S.td}>Qualquer (model-agnostic)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Tipo de explicação</strong></td>
              <td style={S.td}>Contribuição aditiva (Shapley value)</td>
              <td style={S.td}>Coeficiente num modelo linear local</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Análise global</strong></td>
              <td style={S.td}>Nativa (beeswarm, bar plot)</td>
              <td style={S.td}>Requer agrupamento manual de explicações locais</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Interacções</strong></td>
              <td style={S.td}>SHAP interaction values (TreeSHAP)</td>
              <td style={S.td}>Não suporta</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Interpretabilidade</strong></td>
              <td style={S.td}>Contribuição exacta em unidades da predição</td>
              <td style={S.td}>Importância relativa (sem escala absoluta)</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Regra prática: use SHAP sempre que possível — as garantias teóricas e o ecossistema de
          visualizações são superiores. Recorra ao LIME apenas em contextos onde a simplicidade de
          implementação é prioritária e o modelo muda com frequência.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 8 — Síntese ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Síntese do Módulo</h2>
        <p style={S.p}>
          SHAP representa o estado da arte em explicabilidade de modelos de machine learning, combinando
          fundamentos matemáticos sólidos com ferramentas práticas acessíveis. A sua adopção crescente na
          indústria e academia justifica-se pelas garantias únicas que oferece.
        </p>
        <div style={{ ...S.highlight, borderRadius: 10 }}>
          <p style={{ margin: 0, fontWeight: 700, fontSize: '1rem', color, marginBottom: '0.75rem' }}>
            Pontos-chave a reter
          </p>
          <ul style={{ margin: 0, paddingLeft: '1.4rem', lineHeight: 2.1, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
            <li>
              <strong>Shapley values</strong> distribuem o contributo de cada feature de forma provadamente justa,
              baseados na teoria de jogos cooperativos de Lloyd Shapley (1951).
            </li>
            <li>
              <strong>SHAP</strong> (Lundberg &amp; Lee, 2017) satisfaz efficiency, symmetry, dummy e additivity —
              a única família de métodos com estas quatro garantias simultaneamente.
            </li>
            <li>
              <strong>TreeSHAP</strong> calcula Shapley values exactos em <InlineMath math={"\\mathcal{O}(TLD^2)"} /> para árvores,
              tornando-o prático em produção mesmo com datasets grandes.
            </li>
            <li>
              <strong>KernelSHAP</strong> e <strong>DeepSHAP</strong> estendem o SHAP a qualquer modelo,
              ao custo de ser aproximado e mais lento.
            </li>
            <li>
              O ecossistema de visualizações — beeswarm, waterfall, force plot, dependence plot — cobre
              análises globais e locais de forma expressiva e complementar.
            </li>
            <li>
              SHAP aplica-se a <strong>NLP</strong> (nível de token) e <strong>imagem</strong> (superpixéis),
              tornando-o um método verdadeiramente universal.
            </li>
            <li>
              Face ao LIME, o SHAP é superior em consistência, estabilidade e capacidade de análise global,
              sendo a escolha recomendada na grande maioria dos contextos.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
