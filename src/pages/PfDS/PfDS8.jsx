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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', marginTop: '1.5rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  svgWrap: { background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.25)', borderRadius: 10, padding: '1rem', margin: '1.2rem 0', overflowX: 'auto' },
};

function GrammarPipelineSVG() {
  const steps = ['Data', 'Aesthetics', 'Geometry', 'Scales', 'Coordinates', 'Facets'];
  const w = 720, h = 80, boxW = 90, boxH = 38, gap = 24;
  const total = steps.length * boxW + (steps.length - 1) * gap;
  const startX = (w - total) / 2;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w, display: 'block', margin: '0 auto' }}>
      {steps.map((s, i) => {
        const x = startX + i * (boxW + gap);
        const cx = x + boxW / 2;
        const cy = h / 2;
        return (
          <g key={s}>
            <rect x={x} y={cy - boxH / 2} width={boxW} height={boxH} rx={7} fill="rgba(249,115,22,0.15)" stroke={color} strokeWidth={1.5} />
            <text x={cx} y={cy + 5} textAnchor="middle" fontSize={11} fill="var(--text-primary)" fontWeight={600}>{s}</text>
            {i < steps.length - 1 && (
              <path d={`M ${x + boxW + 4} ${cy} L ${x + boxW + gap - 4} ${cy}`} stroke={color} strokeWidth={1.5} fill="none" markerEnd="url(#arr8)" />
            )}
          </g>
        );
      })}
      <defs>
        <marker id="arr8" markerWidth={8} markerHeight={8} refX={6} refY={3} orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill={color} />
        </marker>
      </defs>
    </svg>
  );
}

function ChartTaxonomySVG() {
  const categories = [
    { label: 'Comparison', charts: ['Bar', 'Grouped Bar'], color: '#f97316' },
    { label: 'Distribution', charts: ['Histogram', 'Boxplot', 'Violin'], color: '#f97316' },
    { label: 'Relationship', charts: ['Scatter', 'Heatmap'], color: '#f97316' },
    { label: 'Composition', charts: ['Pie', 'Stacked Bar'], color: '#f97316' },
    { label: 'Time Series', charts: ['Line', 'Area'], color: '#f97316' },
  ];
  const w = 720, rowH = 52, pad = 16;
  const h = categories.length * rowH + pad * 2;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w, display: 'block', margin: '0 auto' }}>
      {categories.map((cat, i) => {
        const y = pad + i * rowH;
        return (
          <g key={cat.label}>
            <rect x={4} y={y} width={130} height={38} rx={6} fill="rgba(249,115,22,0.15)" stroke={cat.color} strokeWidth={1.5} />
            <text x={69} y={y + 24} textAnchor="middle" fontSize={11} fill="var(--text-primary)" fontWeight={700}>{cat.label}</text>
            {cat.charts.map((ch, j) => {
              const cx = 160 + j * 110 + 45;
              return (
                <g key={ch}>
                  <rect x={160 + j * 110} y={y + 6} width={90} height={26} rx={5} fill="rgba(249,115,22,0.08)" stroke={cat.color} strokeWidth={1} />
                  <text x={cx} y={y + 23} textAnchor="middle" fontSize={10.5} fill="var(--text-primary)">{ch}</text>
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

function MatplotlibHierarchySVG() {
  const w = 680, h = 240;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w, display: 'block', margin: '0 auto' }}>
      <rect x={10} y={8} width={660} height={224} rx={10} fill="none" stroke={color} strokeWidth={2} strokeDasharray="6,3" />
      <text x={340} y={30} textAnchor="middle" fontSize={12} fill={color} fontWeight={700}>Figure (canvas)</text>
      <rect x={60} y={44} width={560} height={170} rx={8} fill="none" stroke="#f97316" strokeWidth={1.5} strokeDasharray="5,3" />
      <text x={340} y={62} textAnchor="middle" fontSize={11} fill="#f97316" fontWeight={700}>Axes (plot area)</text>
      <rect x={90} y={74} width={110} height={120} rx={6} fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth={1} />
      <text x={145} y={95} textAnchor="middle" fontSize={10} fill={color} fontWeight={600}>Axis X</text>
      <text x={145} y={115} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Ticks</text>
      <text x={145} y={132} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Labels</text>
      <text x={145} y={149} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Scale</text>
      <rect x={220} y={74} width={110} height={120} rx={6} fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth={1} />
      <text x={275} y={95} textAnchor="middle" fontSize={10} fill={color} fontWeight={600}>Axis Y</text>
      <text x={275} y={115} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Ticks</text>
      <text x={275} y={132} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Labels</text>
      <text x={275} y={149} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Scale</text>
      <rect x={350} y={74} width={110} height={120} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1} />
      <text x={405} y={95} textAnchor="middle" fontSize={10} fill="#f97316" fontWeight={600}>Line2D</text>
      <text x={405} y={115} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">color</text>
      <text x={405} y={132} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">linewidth</text>
      <text x={405} y={149} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">linestyle</text>
      <rect x={480} y={74} width={110} height={120} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1} />
      <text x={535} y={95} textAnchor="middle" fontSize={10} fill="#f97316" fontWeight={600}>Artists</text>
      <text x={535} y={115} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Text</text>
      <text x={535} y={132} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Patch</text>
      <text x={535} y={149} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Legend</text>
    </svg>
  );
}

function LineChartSVG() {
  const data = [12, 28, 22, 40, 33, 55, 48, 67, 60, 75];
  const w = 400, h = 180, padL = 40, padB = 30, padT = 20, padR = 20;
  const W = w - padL - padR, H = h - padB - padT;
  const maxVal = 80;
  const pts = data.map((v, i) => ({
    x: padL + (i / (data.length - 1)) * W,
    y: padT + H - (v / maxVal) * H,
  }));
  const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w, display: 'block', margin: '0 auto' }}>
      <line x1={padL} y1={padT} x2={padL} y2={padT + H} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={padL} y1={padT + H} x2={padL + W} y2={padT + H} stroke="var(--text-secondary)" strokeWidth={1} />
      {[0, 20, 40, 60, 80].map(v => {
        const y = padT + H - (v / maxVal) * H;
        return (
          <g key={v}>
            <line x1={padL - 4} y1={y} x2={padL + W} y2={y} stroke="var(--text-secondary)" strokeWidth={0.7} strokeDasharray="3,3" />
            <text x={padL - 6} y={y + 4} textAnchor="end" fontSize={9} fill="var(--text-secondary)">{v}</text>
          </g>
        );
      })}
      <path d={d} fill="none" stroke={color} strokeWidth={2.5} strokeLinejoin="round" />
      <path d={`${d} L ${pts[pts.length - 1].x} ${padT + H} L ${pts[0].x} ${padT + H} Z`} fill={color} opacity={0.08} />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={4} fill={color} stroke="#fff" strokeWidth={1.5} />
      ))}
      <text x={padL + W / 2} y={h - 4} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Observações</text>
      <text x={10} y={padT + H / 2} textAnchor="middle" fontSize={9} fill="var(--text-secondary)" transform={`rotate(-90, 10, ${padT + H / 2})`}>Valor</text>
    </svg>
  );
}

function ScatterSVG() {
  const pts = [
    [30,60,'#f97316'],[55,80,'#f97316'],[45,50,'#f97316'],[70,90,'#f97316'],[20,35,'#f97316'],
    [80,70,'#f97316'],[65,55,'#f97316'],[90,85,'#f97316'],[50,40,'#f97316'],[75,95,'#f97316'],
    [40,20,'#f97316'],[60,30,'#f97316'],[85,45,'#f97316'],[25,65,'#f97316'],[95,75,'#f97316'],
  ];
  const w = 400, h = 200, padL = 35, padB = 30, padT = 15, padR = 15;
  const W = w - padL - padR, H = h - padB - padT;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w, display: 'block', margin: '0 auto' }}>
      <line x1={padL} y1={padT} x2={padL} y2={padT + H} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={padL} y1={padT + H} x2={padL + W} y2={padT + H} stroke="var(--text-secondary)" strokeWidth={1} />
      {[0, 25, 50, 75, 100].map(v => {
        const y = padT + H - (v / 100) * H;
        return <line key={v} x1={padL} y1={y} x2={padL + W} y2={y} stroke="var(--text-secondary)" strokeWidth={0.6} strokeDasharray="3,3" />;
      })}
      {pts.map(([px, py, c], i) => (
        <circle key={i} cx={padL + (px / 100) * W} cy={padT + H - (py / 100) * H} r={5} fill={c} opacity={0.8} />
      ))}
      {[['A', '#f97316'], ['B', '#f97316'], ['C', '#f97316']].map(([lbl, c], i) => (
        <g key={lbl}>
          <circle cx={padL + W - 70 + i * 30} cy={padT + 10} r={5} fill={c} />
          <text x={padL + W - 62 + i * 30} y={padT + 14} fontSize={9} fill="var(--text-secondary)">{lbl}</text>
        </g>
      ))}
      <text x={padL + W / 2} y={h - 4} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">X</text>
    </svg>
  );
}

function HorizontalBarSVG() {
  const data = [
    { label: 'Python', val: 85 },
    { label: 'R', val: 62 },
    { label: 'Julia', val: 38 },
    { label: 'Scala', val: 28 },
    { label: 'MATLAB', val: 22 },
  ];
  const w = 400, rowH = 34, padL = 70, padR = 20, padT = 15, padB = 20;
  const h = data.length * rowH + padT + padB;
  const W = w - padL - padR;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w, display: 'block', margin: '0 auto' }}>
      {data.map((d, i) => {
        const y = padT + i * rowH;
        const barW = (d.val / 100) * W;
        return (
          <g key={d.label}>
            <text x={padL - 8} y={y + rowH / 2 + 4} textAnchor="end" fontSize={10} fill="var(--text-secondary)">{d.label}</text>
            <rect x={padL} y={y + 6} width={barW} height={rowH - 14} rx={4} fill={color} opacity={0.7 + i * 0.05 > 1 ? 1 : 0.7 - i * 0.06} />
            <text x={padL + barW + 5} y={y + rowH / 2 + 4} fontSize={9} fill="var(--text-secondary)">{d.val}%</text>
          </g>
        );
      })}
      <line x1={padL} y1={padT} x2={padL} y2={padT + data.length * rowH} stroke="var(--text-secondary)" strokeWidth={1} />
    </svg>
  );
}

function HistogramSVG() {
  const bins = [2, 5, 11, 19, 28, 35, 30, 22, 14, 8, 3];
  const w = 400, h = 180, padL = 35, padB = 28, padT = 15, padR = 15;
  const W = w - padL - padR, H = h - padB - padT;
  const maxVal = 38;
  const binW = W / bins.length;
  const bellPts = bins.map((_, i) => {
    const x = padL + (i + 0.5) * binW;
    const norm = Math.exp(-0.5 * Math.pow((i - 5) / 2.2, 2));
    const y = padT + H - norm * 35 * (H / maxVal);
    return `${x},${y}`;
  });
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w, display: 'block', margin: '0 auto' }}>
      {bins.map((v, i) => {
        const x = padL + i * binW + 1;
        const barH = (v / maxVal) * H;
        return <rect key={i} x={x} y={padT + H - barH} width={binW - 2} height={barH} rx={2} fill={color} opacity={0.55} />;
      })}
      <polyline points={bellPts.join(' ')} fill="none" stroke="#f97316" strokeWidth={2} strokeLinejoin="round" />
      <line x1={padL} y1={padT} x2={padL} y2={padT + H} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={padL} y1={padT + H} x2={padL + W} y2={padT + H} stroke="var(--text-secondary)" strokeWidth={1} />
      <text x={padL + W / 2} y={h - 4} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Valor</text>
      <text x={10} y={padT + H / 2} textAnchor="middle" fontSize={9} fill="var(--text-secondary)" transform={`rotate(-90, 10, ${padT + H / 2})`}>Freq</text>
    </svg>
  );
}

function SubplotGridSVG() {
  const w = 480, h = 360, pad = 16, gap = 12;
  const cw = (w - pad * 2 - gap) / 2;
  const ch = (h - pad * 2 - gap) / 2;
  const cells = [
    { label: 'Line Plot', icon: 'line' },
    { label: 'Scatter', icon: 'scatter' },
    { label: 'Histogram', icon: 'hist' },
    { label: 'Bar Chart', icon: 'bar' },
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w, display: 'block', margin: '0 auto', overflow: 'visible' }}>
      <text x={w / 2} y={14} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">fig, axes = plt.subplots(2, 2)</text>
      {cells.map((cell, idx) => {
        const col = idx % 2;
        const row = Math.floor(idx / 2);
        const x = pad + col * (cw + gap);
        const y = pad + 20 + row * (ch + gap);
        return (
          <g key={cell.label}>
            <rect x={x} y={y} width={cw} height={ch} rx={6} fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth={1.2} />
            <text x={x + cw / 2} y={y + ch / 2 - 8} textAnchor="middle" fontSize={10} fill={color} fontWeight={600}>{cell.label}</text>
            <text x={x + cw / 2} y={y + ch / 2 + 10} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">axes[{row},{col}]</text>
          </g>
        );
      })}
    </svg>
  );
}

function SeabornGallerySVG() {
  const W = 820, bw = 230, bh = 200, gap = 25, pad = 15;
  const row1 = [
    { label: 'scatterplot', sub: 'hue=group', idx: 0 },
    { label: 'boxplot', sub: 'x=cat, y=val', idx: 1 },
    { label: 'violinplot', sub: 'split=True', idx: 2 },
  ];
  const row2 = [
    { label: 'heatmap', sub: 'annot=True', idx: 3 },
    { label: 'regplot', sub: 'ci=95', idx: 4 },
  ];
  const H = pad + bh + gap + bh + pad + 16;
  const row1X = (i) => pad + i * (bw + gap);
  const row2totalW = 2 * bw + gap;
  const row2startX = (W - row2totalW) / 2;
  const row2X = (i) => row2startX + i * (bw + gap);
  const renderIcon = (p, x, y0) => {
    const cx = x + bw / 2;
    const ix = x + 20, iw = bw - 40, iy = y0 + 52, ih = bh - 68;
    const mx = ix + iw / 2, my = iy + ih / 2;
    // scatter
    if (p.idx === 0) {
      const pts = [[0.15,0.7],[0.25,0.5],[0.4,0.6],[0.55,0.3],[0.65,0.45],[0.75,0.2],[0.85,0.55],[0.35,0.8],[0.6,0.65]];
      const cols = ['#f97316','#f97316',color,color,'#f97316',color,color,'#f97316',color];
      return pts.map((pt,j)=><circle key={j} cx={ix+pt[0]*iw} cy={iy+pt[1]*ih} r={4.5} fill={cols[j]} opacity={0.85}/>);
    }
    // boxplot
    if (p.idx === 1) {
      const boxes = [{cx:mx-30,q1:0.35,q3:0.65,med:0.5,lo:0.15,hi:0.85},{cx:mx+30,q1:0.25,q3:0.6,med:0.42,lo:0.1,hi:0.75}];
      return boxes.map((b,j)=>{
        const bx=b.cx-12, bw2=24;
        return <g key={j}>
          <line x1={b.cx} y1={iy+b.lo*ih} x2={b.cx} y2={iy+b.hi*ih} stroke={color} strokeWidth={1.5}/>
          <line x1={b.cx-8} y1={iy+b.lo*ih} x2={b.cx+8} y2={iy+b.lo*ih} stroke={color} strokeWidth={1.5}/>
          <line x1={b.cx-8} y1={iy+b.hi*ih} x2={b.cx+8} y2={iy+b.hi*ih} stroke={color} strokeWidth={1.5}/>
          <rect x={bx} y={iy+b.q1*ih} width={bw2} height={(b.q3-b.q1)*ih} rx={2} fill={`rgba(249,115,22,0.3)`} stroke={color} strokeWidth={1.5}/>
          <line x1={bx} y1={iy+b.med*ih} x2={bx+bw2} y2={iy+b.med*ih} stroke="#fff" strokeWidth={2}/>
        </g>;
      });
    }
    // violinplot
    if (p.idx === 2) {
      const vx1 = mx - 22, vx2 = mx + 22;
      return <g>
        <ellipse cx={vx1} cy={my} rx={13} ry={ih*0.44} fill={`rgba(249,115,22,0.3)`} stroke={color} strokeWidth={1.2}/>
        <ellipse cx={vx2} cy={my} rx={13} ry={ih*0.44} fill={`rgba(249,115,22,0.10)`} stroke="#f97316" strokeWidth={1.2}/>
        <line x1={mx} y1={iy} x2={mx} y2={iy+ih} stroke="var(--text-secondary)" strokeWidth={1}/>
      </g>;
    }
    // heatmap
    if (p.idx === 3) {
      const cs = Math.floor(Math.min(iw,ih)/3)-2;
      const sx = mx - cs*1.5, sy = my - cs*1.5;
      const vals = [[0.9,0.4,0.1],[0.4,0.8,0.6],[0.1,0.6,0.95]];
      return vals.map((row,r)=>row.map((v,c)=><rect key={`${r}${c}`} x={sx+c*(cs+2)} y={sy+r*(cs+2)} width={cs} height={cs} rx={2} fill={`rgba(249,115,22,${v*0.85})`}/>));
    }
    // regplot
    if (p.idx === 4) {
      const pts2 = [[0.1,0.85],[0.2,0.72],[0.35,0.58],[0.5,0.45],[0.65,0.3],[0.8,0.18],[0.9,0.1]];
      return <g>
        {pts2.map((pt,j)=><circle key={j} cx={ix+pt[0]*iw} cy={iy+pt[1]*ih} r={4} fill={color} opacity={0.8}/>)}
        <line x1={ix+0.05*iw} y1={iy+0.92*ih} x2={ix+0.95*iw} y2={iy+0.04*ih} stroke="#f97316" strokeWidth={2}/>
      </g>;
    }
  };
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: W, display: 'block', margin: '0 auto' }}>
      {[...row1.map((p,i)=>({...p,x:row1X(i),y:pad})), ...row2.map((p,i)=>({...p,x:row2X(i),y:pad+bh+gap}))].map(p => (
        <g key={p.label}>
          <rect x={p.x} y={p.y} width={bw} height={bh} rx={8} fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth={1.2} />
          <text x={p.x+bw/2} y={p.y+22} textAnchor="middle" fontSize={11} fill={color} fontWeight={700}>{'sns.'+p.label}</text>
          <text x={p.x+bw/2} y={p.y+38} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">{p.sub}</text>
          <rect x={p.x+16} y={p.y+46} width={bw-32} height={bh-62} rx={4} fill="rgba(249,115,22,0.10)" />
          {renderIcon(p, p.x, p.y)}
          <text x={p.x+bw/2} y={p.y+bh+14} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">sns.{p.label}</text>
        </g>
      ))}
    </svg>
  );
}

function HeatmapSVG() {
  const labels = ['A', 'B', 'C', 'D'];
  const data = [
    [1.0, 0.72, 0.45, -0.12],
    [0.72, 1.0, 0.31, 0.58],
    [0.45, 0.31, 1.0, -0.44],
    [-0.12, 0.58, -0.44, 1.0],
  ];
  const w = 280, h = 260, pad = 32, cellSize = (Math.min(w, h) - pad * 2) / 4;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w, display: 'block', margin: '0 auto' }}>
      <text x={w / 2} y={16} textAnchor="middle" fontSize={10} fill="var(--text-secondary)" fontWeight={600}>Correlation Matrix</text>
      {labels.map((lbl, i) => (
        <g key={lbl}>
          <text x={pad + i * cellSize + cellSize / 2} y={pad + 14} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">{lbl}</text>
          <text x={pad - 6} y={pad + 22 + i * cellSize + cellSize / 2} textAnchor="end" fontSize={10} fill="var(--text-secondary)">{lbl}</text>
        </g>
      ))}
      {data.map((row, r) => row.map((val, c) => {
        const alpha = Math.abs(val);
        const fill = val > 0 ? `rgba(249,115,22,${alpha * 0.8})` : `rgba(249,115,22,0.10)`;
        return (
          <g key={`${r}${c}`}>
            <rect x={pad + c * cellSize} y={pad + 20 + r * cellSize} width={cellSize - 2} height={cellSize - 2} rx={3} fill={fill} />
            <text x={pad + c * cellSize + cellSize / 2} y={pad + 20 + r * cellSize + cellSize / 2 + 4} textAnchor="middle" fontSize={9} fill="#fff" fontWeight={600}>{val.toFixed(2)}</text>
          </g>
        );
      }))}
    </svg>
  );
}

function PairplotSVG() {
  const vars = ['X1', 'X2', 'X3'];
  const w = 280, pad = 30, cellSize = (w - pad * 2) / 3;
  const h = w;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w, display: 'block', margin: '0 auto' }}>
      <text x={w / 2} y={14} textAnchor="middle" fontSize={10} fill="var(--text-secondary)" fontWeight={600}>sns.pairplot</text>
      {vars.map((v, i) => (
        <g key={v}>
          <text x={pad + i * cellSize + cellSize / 2} y={26} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">{v}</text>
          <text x={pad - 4} y={pad + 14 + i * cellSize + cellSize / 2} textAnchor="end" fontSize={9} fill="var(--text-secondary)">{v}</text>
        </g>
      ))}
      {vars.map((rv, r) => vars.map((cv, c) => {
        const x = pad + c * cellSize;
        const y = pad + 14 + r * cellSize;
        const isdiag = r === c;
        return (
          <g key={`${r}${c}`}>
            <rect x={x + 1} y={y + 1} width={cellSize - 2} height={cellSize - 2} rx={3} fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.2)" strokeWidth={0.8} />
            {isdiag ? (
              [0.2, 0.4, 0.6, 0.4, 0.2].map((h2, bi) => (
                <rect key={bi} x={x + 4 + bi * ((cellSize - 8) / 5)} y={y + cellSize - 4 - h2 * (cellSize - 8)} width={(cellSize - 8) / 5 - 1} height={h2 * (cellSize - 8)} rx={1} fill={color} opacity={0.5} />
              ))
            ) : (
              [[10, 30], [20, 20], [30, 35], [40, 25], [50, 40], [60, 30]].map(([px, py], pi) => (
                <circle key={pi} cx={x + 4 + (px / 70) * (cellSize - 8)} cy={y + cellSize - 4 - (py / 50) * (cellSize - 8)} r={2} fill={color} opacity={0.6} />
              ))
            )}
          </g>
        );
      }))}
    </svg>
  );
}

function DecisionFlowSVG() {
  const W = 700, bh = 36, r = 7;
  // Row 1
  const r1w = 150, r1x = (W - r1w) / 2, r1y = 10;
  // Row 2: 3 boxes of w=120, evenly spaced
  const r2w = 120, r2gap = (W - 3 * r2w) / 4, r2y = 90;
  const r2 = [0,1,2].map(i => ({ x: r2gap + i*(r2w+r2gap), label: ['1 variável','2 variáveis','3+ variáveis'][i] }));
  // Row 3: 6 boxes of w=96, evenly spaced
  const r3w = 96, r3gap = (W - 6 * r3w) / 7, r3y = 185;
  const r3labels = ['Histograma','Boxplot','Scatter','Line (tempo)','Heatmap','Pairplot'];
  const r3 = r3labels.map((label,i) => ({ x: r3gap + i*(r3w+r3gap), label }));
  // centers
  const cx1 = r1x + r1w/2;
  const cx2 = r2.map(b => b.x + r2w/2);
  const cx3 = r3.map(b => b.x + r3w/2);
  const arrows = [
    // root → row2
    [cx1, r1y+bh, cx2[0], r2y],
    [cx1, r1y+bh, cx2[1], r2y],
    [cx1, r1y+bh, cx2[2], r2y],
    // row2[0] → Histograma, Boxplot
    [cx2[0], r2y+bh, cx3[0], r3y],
    [cx2[0], r2y+bh, cx3[1], r3y],
    // row2[1] → Scatter, Line
    [cx2[1], r2y+bh, cx3[2], r3y],
    [cx2[1], r2y+bh, cx3[3], r3y],
    // row2[2] → Heatmap, Pairplot
    [cx2[2], r2y+bh, cx3[4], r3y],
    [cx2[2], r2y+bh, cx3[5], r3y],
  ];
  return (
    <svg viewBox={`0 0 ${W} 240`} style={{ width: '100%', maxWidth: W, display: 'block', margin: '0 auto' }}>
      <defs>
        <marker id="arr9" markerWidth={7} markerHeight={7} refX={6} refY={3} orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#94a3b8" />
        </marker>
      </defs>
      {arrows.map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#94a3b8" strokeWidth={1.2} markerEnd="url(#arr9)" />
      ))}
      {/* Root */}
      <rect x={r1x} y={r1y} width={r1w} height={bh} rx={r} fill={`${color}22`} stroke={color} strokeWidth={1.5}/>
      <text x={cx1} y={r1y+bh/2+4} textAnchor="middle" fontSize={10} fill={color} fontWeight={700}>Quantas variáveis?</text>
      {/* Row 2 */}
      {r2.map((b,i) => (
        <g key={i}>
          <rect x={b.x} y={r2y} width={r2w} height={bh} rx={r} fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth={1.5}/>
          <text x={cx2[i]} y={r2y+bh/2+4} textAnchor="middle" fontSize={10} fill="#f97316" fontWeight={600}>{b.label}</text>
        </g>
      ))}
      {/* Row 3 */}
      {r3.map((b,i) => (
        <g key={i}>
          <rect x={b.x} y={r3y} width={r3w} height={bh} rx={r} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5}/>
          <text x={cx3[i]} y={r3y+bh/2+4} textAnchor="middle" fontSize={9.5} fill="#f97316" fontWeight={600}>{b.label}</text>
        </g>
      ))}
    </svg>
  );
}

function RegressionOutputSVG() {
  const w = 600, h = 260;
  const rows = [
    ['Intercept', '38.652', '9.456', '4.088', '0.000', '[19.9, 57.4]'],
    ['Literacy', '-0.186', '0.053', '-3.500', '0.001', '[-0.29, -0.08]'],
    ['Wealth', '0.452', '0.103', '4.384', '0.000', '[0.25, 0.65]'],
    ['Region[N]', '-15.43', '9.281', '-1.663', '0.099', '[-33.8, 2.9]'],
    ['Region[S]', '-10.08', '8.152', '-1.237', '0.218', '[-26.2, 6.0]'],
  ];
  const cols = ['Variable', 'coef', 'std err', 't', 'P>|t|', '[0.025  0.975]'];
  const colX = [10, 130, 220, 305, 385, 460];
  const rowH = 26, headY = 52, bodyY = 74;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w, display: 'block', margin: '0 auto', fontFamily: 'monospace' }}>
      <rect x={5} y={5} width={w - 10} height={h - 10} rx={8} fill="rgba(249,115,22,0.05)" stroke={color} strokeWidth={1} />
      <text x={w / 2} y={26} textAnchor="middle" fontSize={11} fill={color} fontWeight={700}>OLS Regression Results</text>
      <text x={14} y={44} fontSize={9.5} fill="var(--text-secondary)">R-squared: 0.338     Adj. R-squared: 0.287     F-statistic: 6.636     Prob(F): 1.07e-05</text>
      <rect x={5} y={headY - 14} width={w - 10} height={rowH - 4} rx={0} fill="rgba(249,115,22,0.12)" />
      {cols.map((c, i) => (
        <text key={c} x={colX[i]} y={headY + 3} fontSize={9} fill={color} fontWeight={700}>{c}</text>
      ))}
      {rows.map((row, ri) => (
        <g key={ri}>
          {ri % 2 === 1 && <rect x={5} y={bodyY + ri * rowH - 14} width={w - 10} height={rowH} fill="rgba(249,115,22,0.04)" />}
          {row.map((cell, ci) => (
            <text key={ci} x={colX[ci]} y={bodyY + ri * rowH + 3} fontSize={9} fill={ci === 0 ? color : 'var(--text-primary)'}>{cell}</text>
          ))}
        </g>
      ))}
      <text x={14} y={h - 14} fontSize={8.5} fill="var(--text-secondary)">AIC: 382.1   BIC: 399.5   Log-Likelihood: -184.05   No. Observations: 85</text>
    </svg>
  );
}

function ACFPlotSVG() {
  const lags = [1, 0.82, 0.61, 0.45, 0.33, 0.20, 0.08, -0.04, -0.10, -0.08, -0.03, 0.05];
  const w = 380, h = 160, padL = 30, padB = 25, padT = 20, padR = 10;
  const W = w - padL - padR, H = h - padB - padT;
  const midY = padT + H * 0.6;
  const ci = 0.25;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w, display: 'block', margin: '0 auto' }}>
      <text x={w / 2} y={12} textAnchor="middle" fontSize={10} fill="var(--text-secondary)" fontWeight={600}>ACF</text>
      <rect x={padL} y={padT + H * (1 - (0.6 + ci))} width={W} height={H * ci * 2} fill="rgba(249,115,22,0.08)" />
      <line x1={padL} y1={midY} x2={padL + W} y2={midY} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={padL} y1={padT} x2={padL} y2={padT + H} stroke="var(--text-secondary)" strokeWidth={1} />
      {lags.map((v, i) => {
        const x = padL + (i + 0.5) * (W / lags.length);
        const barH = Math.abs(v) * H * 0.55;
        const y = v >= 0 ? midY - barH : midY;
        return (
          <g key={i}>
            <rect x={x - 6} y={y} width={12} height={barH} rx={2} fill={color} opacity={0.7} />
            {i % 3 === 0 && <text x={x} y={padT + H + 14} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">{i}</text>}
          </g>
        );
      })}
      <text x={padL + W / 2} y={h - 2} textAnchor="middle" fontSize={8.5} fill="var(--text-secondary)">Lag</text>
    </svg>
  );
}

function PACFPlotSVG() {
  const lags = [1, 0.45, 0.12, -0.05, 0.08, -0.02, 0.04, -0.03, 0.01, 0.06, -0.04, 0.02];
  const w = 380, h = 160, padL = 30, padB = 25, padT = 20, padR = 10;
  const W = w - padL - padR, H = h - padB - padT;
  const midY = padT + H * 0.5;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w, display: 'block', margin: '0 auto' }}>
      <text x={w / 2} y={12} textAnchor="middle" fontSize={10} fill="var(--text-secondary)" fontWeight={600}>PACF</text>
      <rect x={padL} y={padT + H * 0.25} width={W} height={H * 0.5} fill="rgba(249,115,22,0.08)" />
      <line x1={padL} y1={midY} x2={padL + W} y2={midY} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={padL} y1={padT} x2={padL} y2={padT + H} stroke="var(--text-secondary)" strokeWidth={1} />
      {lags.map((v, i) => {
        const x = padL + (i + 0.5) * (W / lags.length);
        const barH = Math.abs(v) * H * 0.48;
        const y = v >= 0 ? midY - barH : midY;
        return (
          <g key={i}>
            <rect x={x - 6} y={y} width={12} height={barH} rx={2} fill="#f97316" opacity={0.7} />
            {i % 3 === 0 && <text x={x} y={padT + H + 14} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">{i}</text>}
          </g>
        );
      })}
      <text x={padL + W / 2} y={h - 2} textAnchor="middle" fontSize={8.5} fill="var(--text-secondary)">Lag</text>
    </svg>
  );
}

function ForecastSVG() {
  const history = [42, 45, 43, 48, 50, 47, 52, 55, 53, 58];
  const forecast = [60, 63, 66, 69, 72];
  const lower = [55, 55, 55, 53, 50];
  const upper = [65, 71, 77, 85, 94];
  const w = 480, h = 180, padL = 35, padB = 25, padT = 20, padR = 20;
  const W = w - padL - padR, H = h - padB - padT;
  const allVals = [...history, ...upper];
  const minV = 30, maxV = 100;
  const totalPts = history.length + forecast.length;
  const toX = i => padL + (i / (totalPts - 1)) * W;
  const toY = v => padT + H - ((v - minV) / (maxV - minV)) * H;
  const histD = history.map((v, i) => `${i === 0 ? 'M' : 'L'} ${toX(i)} ${toY(v)}`).join(' ');
  const fcD = [history[history.length - 1], ...forecast].map((v, i) => `${i === 0 ? 'M' : 'L'} ${toX(history.length - 1 + i)} ${toY(v)}`).join(' ');
  const upperD = [history[history.length - 1], ...upper].map((v, i) => `${toX(history.length - 1 + i)},${toY(v)}`).join(' ');
  const lowerD = [history[history.length - 1], ...lower].map((v, i) => `${toX(history.length - 1 + i)},${toY(v)}`).join(' ');
  const ciPath = `M ${upperD.split(' ')[0]} L ${upperD.split(' ').slice(1).join(' L ')} L ${lowerD.split(' ').reverse().join(' L ')} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w, display: 'block', margin: '0 auto' }}>
      <text x={w / 2} y={12} textAnchor="middle" fontSize={10} fill="var(--text-secondary)" fontWeight={600}>ARIMA Forecast com Intervalo de Confiança</text>
      <line x1={padL} y1={padT} x2={padL} y2={padT + H} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={padL} y1={padT + H} x2={padL + W} y2={padT + H} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={toX(history.length - 1)} y1={padT} x2={toX(history.length - 1)} y2={padT + H} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="4,3" />
      <text x={toX(history.length - 1)} y={padT - 4} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">forecast</text>
      <path d={ciPath} fill={color} opacity={0.12} />
      <path d={histD} fill="none" stroke={color} strokeWidth={2} strokeLinejoin="round" />
      <path d={fcD} fill="none" stroke={color} strokeWidth={2} strokeLinejoin="round" strokeDasharray="5,3" />
    </svg>
  );
}

function ResidualPlotsSVG() {
  const w = 620, h = 280, pad = 14, gap = 12;
  const cw = (w - pad * 2 - gap) / 2;
  const ch = (h - pad * 2 - gap) / 2;
  const panels = [
    { title: 'Residuals vs Fitted', icon: 'rvf' },
    { title: 'Normal Q-Q', icon: 'qq' },
    { title: 'Scale-Location', icon: 'sl' },
    { title: 'Residuals vs Leverage', icon: 'rvl' },
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w, display: 'block', margin: '0 auto' }}>
      {panels.map((panel, idx) => {
        const col = idx % 2;
        const row = Math.floor(idx / 2);
        const x = pad + col * (cw + gap);
        const y = pad + row * (ch + gap);
        const cx2 = x + cw / 2, cy2 = y + ch / 2;
        return (
          <g key={panel.title}>
            <rect x={x} y={y} width={cw} height={ch} rx={6} fill="rgba(249,115,22,0.05)" stroke={color} strokeWidth={1} />
            <text x={cx2} y={y + 16} textAnchor="middle" fontSize={9.5} fill={color} fontWeight={600}>{panel.title}</text>
            <line x1={x + 14} y1={cy2} x2={x + cw - 14} y2={cy2} stroke="var(--text-secondary)" strokeWidth={0.8} />
            <line x1={x + 14} y1={y + 24} x2={x + 14} y2={y + ch - 14} stroke="var(--text-secondary)" strokeWidth={0.8} />
            {panel.icon === 'rvf' && [
              [20, 0], [35, 12], [50, -8], [65, 5], [80, -15], [95, 10], [115, -5], [130, 8], [145, -3], [160, 14],
            ].map(([px, py], i) => (
              <circle key={i} cx={x + 20 + px * 0.8} cy={cy2 - py * 1.2} r={3} fill={color} opacity={0.6} />
            ))}
            {panel.icon === 'qq' && (
              <g>
                <line x1={x + 24} y1={y + ch - 18} x2={x + cw - 18} y2={y + 28} stroke="#f97316" strokeWidth={1.5} />
                {[-1.5, -1, -0.5, 0, 0.5, 1, 1.5].map((z, i) => (
                  <circle key={i} cx={x + 24 + i * 20} cy={cy2 - z * 22 + (z * z * 6)} r={3} fill={color} opacity={0.65} />
                ))}
              </g>
            )}
            {panel.icon === 'sl' && (
              <g>
                <line x1={x + 20} y1={cy2 + 10} x2={x + cw - 14} y2={cy2 - 5} stroke="#f97316" strokeWidth={1.2} strokeDasharray="3,2" />
                {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                  <circle key={i} cx={x + 26 + i * 18} cy={cy2 - i * 2 + (Math.random() > 0.5 ? 8 : -8)} r={3} fill={color} opacity={0.6} />
                ))}
              </g>
            )}
            {panel.icon === 'rvl' && (
              <g>
                <line x1={x + 20} y1={cy2} x2={x + cw - 14} y2={cy2} stroke="#f97316" strokeWidth={1} strokeDasharray="3,2" />
                {[0, 1, 2, 3, 4, 5, 6].map(i => (
                  <circle key={i} cx={x + 24 + i * 22} cy={cy2 - 12 + i * 4} r={3 + i * 0.3} fill={color} opacity={0.6} />
                ))}
                <text x={x + cw - 20} y={cy2 - 20} fontSize={8} fill="#f97316">Cook's D</text>
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function DashboardMockupSVG() {
  const w = 620, h = 340, pad = 16, gap = 12;
  const cw = (w - pad * 2 - gap) / 2;
  const ch = (h - 50 - pad - gap) / 2;
  const panels = [
    { title: 'Evolução Temporal', type: 'line' },
    { title: 'Distribuição', type: 'hist' },
    { title: 'Correlações', type: 'heat' },
    { title: 'Comparação por Grupo', type: 'bar' },
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w, display: 'block', margin: '0 auto' }}>
      <rect x={0} y={0} width={w} height={h} rx={10} fill="rgba(249,115,22,0.04)" stroke={color} strokeWidth={1.5} />
      <rect x={0} y={0} width={w} height={36} rx={10} fill={color} opacity={0.15} />
      <text x={w / 2} y={22} textAnchor="middle" fontSize={13} fill={color} fontWeight={700}>Analytical Dashboard — fig, axes = plt.subplots(2, 2)</text>
      {panels.map((panel, idx) => {
        const col = idx % 2;
        const row = Math.floor(idx / 2);
        const x = pad + col * (cw + gap);
        const y = 44 + row * (ch + gap);
        const px = x + 18, py = y + ch - 14, pw = cw - 32, ph = ch - 34;
        return (
          <g key={panel.title}>
            <rect x={x} y={y} width={cw} height={ch} rx={7} fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth={1} />
            <text x={x + cw / 2} y={y + 18} textAnchor="middle" fontSize={10} fill={color} fontWeight={600}>{panel.title}</text>
            <line x1={px} y1={y + 24} x2={px} y2={py} stroke="var(--text-secondary)" strokeWidth={0.8} />
            <line x1={px} y1={py} x2={px + pw} y2={py} stroke="var(--text-secondary)" strokeWidth={0.8} />
            {panel.type === 'line' && (
              <polyline
                points={[[0, 30], [18, 20], [36, 28], [54, 15], [72, 22], [90, 10], [108, 18]].map(([xi, yi]) => `${px + xi},${py - yi * (ph / 40)}`).join(' ')}
                fill="none" stroke={color} strokeWidth={2}
              />
            )}
            {panel.type === 'hist' && [6, 12, 20, 30, 25, 15, 8].map((v, i) => (
              <rect key={i} x={px + i * (pw / 7) + 2} y={py - v * (ph / 35)} width={pw / 7 - 4} height={v * (ph / 35)} rx={2} fill={color} opacity={0.55} />
            ))}
            {panel.type === 'heat' && [0, 1, 2].map(r => [0, 1, 2].map(c => (
              <rect key={`${r}${c}`} x={px + c * (pw / 3) + 2} y={y + 28 + r * (ph / 3)} width={pw / 3 - 4} height={ph / 3 - 4} rx={2}
                fill={color} opacity={0.15 + (r + c) * 0.12} />
            )))}
            {panel.type === 'bar' && [40, 65, 50, 80, 35].map((v, i) => (
              <rect key={i} x={px + i * (pw / 5) + 3} y={py - v * (ph / 100)} width={pw / 5 - 6} height={v * (ph / 100)} rx={2} fill={color} opacity={0.6} />
            ))}
          </g>
        );
      })}
    </svg>
  );
}

export default function PfDS8() {
  return (
    <div style={S.page}>
      <Link to="/pfds" style={S.back}><ArrowLeft size={16} /> Voltar a Programming for Data Science</Link>

      <div style={S.tag}>MÓDULO 08</div>
      <h1 style={S.h1}>Visualização &amp; Statsmodels</h1>
      <p style={S.lead}>
        Este módulo cobre a gramática da visualização, as principais bibliotecas Python — Matplotlib,
        Seaborn, Plotly — e o Statsmodels para regressão OLS, GLM, séries temporais e diagnósticos.
      </p>

      {/* 1. Gramática da Visualização */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Gramática da Visualização</h2>
        <p style={S.p}>
          A "Grammar of Graphics" (Wilkinson, 1999) descreve qualquer gráfico como a composição de camadas:
          dados brutos mapeados a estéticas (cor, forma, tamanho), codificados numa geometria, escalados
          nos eixos, projetados num sistema de coordenadas e opcionalmente divididos em facetas.
        </p>
        <div style={S.svgWrap}>
          <GrammarPipelineSVG />
        </div>
        <h3 style={S.h3}>Taxonomia de Gráficos</h3>
        <p style={S.p}>
          Cada questão analítica tem um tipo de gráfico adequado. A escolha errada obscurece a mensagem
          mesmo com dados corretos.
        </p>
        <div style={S.svgWrap}>
          <ChartTaxonomySVG />
        </div>
        <div style={S.note}>
          Regra de ouro: gráficos de <strong>comparação</strong> usam barras; de <strong>distribuição</strong> usam histogramas ou boxplots;
          de <strong>relação</strong> usam scatter; de <strong>composição</strong> usam pie ou stacked bar; de <strong>tendência</strong> usam linhas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* 2. Matplotlib Arquitetura */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Matplotlib — Arquitetura</h2>
        <p style={S.p}>
          Matplotlib organiza todos os elementos de um gráfico numa hierarquia de objetos. Compreender
          esta hierarquia é essencial para personalizar qualquer aspeto visual.
        </p>
        <div style={S.svgWrap}>
          <MatplotlibHierarchySVG />
        </div>
        <h3 style={S.h3}>Duas Interfaces</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Interface</th>
              <th style={S.th}>Como funciona</th>
              <th style={S.th}>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['pyplot (stateful)', 'Mantém um estado global de "figura atual" e "axes atual". Cada chamada plt.plot() atua sobre o estado.', 'Scripts rápidos, exploração, notebooks simples'],
              ['OOP (orientada a objetos)', 'Cria explicitamente Figure e Axes. Todos os métodos chamados no objeto específico.', 'Subplots, publicação, código reutilizável, múltiplas figuras'],
            ].map(([iface, how, when]) => (
              <tr key={iface}>
                <td style={{ ...S.td, fontWeight: 600, color }}>{iface}</td>
                <td style={S.td}>{how}</td>
                <td style={S.td}>{when}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.code}>{`# Interface pyplot (stateful)
import matplotlib.pyplot as plt
plt.figure(figsize=(8, 4))
plt.plot([1, 2, 3], [4, 5, 3])
plt.title('Exemplo')
plt.show()

# Interface OOP (recomendada para projetos)
fig, ax = plt.subplots(figsize=(8, 4))
ax.plot([1, 2, 3], [4, 5, 3])
ax.set_title('Exemplo OOP')
ax.set_xlabel('X')
ax.set_ylabel('Y')
fig.tight_layout()
fig.savefig('output.png', dpi=150)`}</div>
      </div>

      <hr style={S.divider} />

      {/* 3. Matplotlib Tipos de Gráfico */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Matplotlib — Tipos de Gráfico</h2>

        <h3 style={S.h3}>Line Plot com Marcadores</h3>
        <div style={S.svgWrap}>
          <LineChartSVG />
        </div>
        <div style={S.code}>{`import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 10, 10)
y = np.cumsum(np.random.randn(10)) + 30

fig, ax = plt.subplots()
ax.plot(x, y, marker='o', linewidth=2, markersize=6,
        color='#f97316', markerfacecolor='white', markeredgewidth=1.5)
ax.fill_between(x, y, alpha=0.08, color='#f97316')
ax.set_xlabel('Observações'); ax.set_ylabel('Valor')`}</div>

        <h3 style={S.h3}>Scatter Plot com Grupos</h3>
        <div style={S.svgWrap}>
          <ScatterSVG />
        </div>
        <div style={S.code}>{`fig, ax = plt.subplots()
for group, color in zip(['A', 'B', 'C'], ['#f97316', '#f97316', '#f97316']):
    mask = df['group'] == group
    ax.scatter(df.loc[mask, 'x'], df.loc[mask, 'y'],
               label=group, color=color, alpha=0.8, s=60)
ax.legend()
ax.set_xlabel('X'); ax.set_ylabel('Y')`}</div>

        <h3 style={S.h3}>Horizontal Bar Chart</h3>
        <div style={S.svgWrap}>
          <HorizontalBarSVG />
        </div>
        <div style={S.code}>{`langs = ['Python', 'R', 'Julia', 'Scala', 'MATLAB']
usage = [85, 62, 38, 28, 22]

fig, ax = plt.subplots(figsize=(7, 4))
bars = ax.barh(langs, usage, color='#f97316', alpha=0.75)
ax.bar_label(bars, fmt='%d%%', padding=4)
ax.set_xlabel('Popularidade (%)')`}</div>

        <h3 style={S.h3}>Histograma com Curva KDE</h3>
        <div style={S.svgWrap}>
          <HistogramSVG />
        </div>
        <div style={S.code}>{`import scipy.stats as stats

data = np.random.normal(50, 12, 500)
fig, ax = plt.subplots()
ax.hist(data, bins=20, color='#f97316', alpha=0.55, density=True)
xd = np.linspace(data.min(), data.max(), 200)
ax.plot(xd, stats.norm.pdf(xd, data.mean(), data.std()),
        color='red', linewidth=2, label='KDE')
ax.legend()`}</div>

        <h3 style={S.h3}>Subplot Grid 2x2</h3>
        <div style={S.svgWrap}>
          <SubplotGridSVG />
        </div>
        <div style={S.code}>{`fig, axes = plt.subplots(2, 2, figsize=(10, 8))

axes[0, 0].plot(x, y)
axes[0, 0].set_title('Line Plot')

axes[0, 1].scatter(x, y2)
axes[0, 1].set_title('Scatter')

axes[1, 0].hist(data, bins=20)
axes[1, 0].set_title('Histogram')

axes[1, 1].bar(categories, values)
axes[1, 1].set_title('Bar Chart')

fig.tight_layout(pad=2.0)
plt.savefig('dashboard.png', dpi=150)`}</div>
      </div>

      <hr style={S.divider} />

      {/* 4. Seaborn */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Seaborn — Plots Estatísticos</h2>
        <p style={S.p}>
          Seaborn é construído sobre Matplotlib e oferece uma API de alto nível orientada a DataFrames.
          Calcula automaticamente estatísticas (médias, intervalos de confiança, KDE) e aplica temas
          esteticamente agradáveis com uma linha de código.
        </p>
        <div style={S.svgWrap}>
          <SeabornGallerySVG />
        </div>
        <div style={S.code}>{`import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset('tips')

# Definir tema global
sns.set_theme(style='whitegrid')  # whitegrid | darkgrid | ticks | white

# Scatter com hue
fig, ax = plt.subplots()
sns.scatterplot(data=tips, x='total_bill', y='tip', hue='sex', ax=ax)

# Boxplot por categoria
fig, ax = plt.subplots()
sns.boxplot(data=tips, x='day', y='total_bill', palette='Blues', ax=ax)

# Violin plot
fig, ax = plt.subplots()
sns.violinplot(data=tips, x='day', y='tip', hue='sex', split=True, ax=ax)

# Regression plot
fig, ax = plt.subplots()
sns.regplot(data=tips, x='total_bill', y='tip', ci=95, ax=ax)

# Pair plot (scatter matrix)
g = sns.pairplot(tips, hue='sex', diag_kind='hist')

# FacetGrid
g = sns.FacetGrid(tips, col='day', row='sex')
g.map(sns.scatterplot, 'total_bill', 'tip')`}</div>

        <h3 style={S.h3}>Heatmap de Correlação</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ ...S.svgWrap, flex: '0 0 auto' }}>
            <HeatmapSVG />
          </div>
          <div style={{ ...S.svgWrap, flex: '0 0 auto' }}>
            <PairplotSVG />
          </div>
        </div>
        <div style={S.code}>{`import seaborn as sns
import pandas as pd

# Correlation heatmap
corr = df.corr(numeric_only=True)
fig, ax = plt.subplots(figsize=(8, 6))
sns.heatmap(corr, annot=True, fmt='.2f', cmap='coolwarm',
            center=0, square=True, linewidths=0.5, ax=ax)
ax.set_title('Correlation Matrix')

# Pair plot (scatter matrix)
sns.pairplot(df, hue='target', diag_kind='kde',
             plot_kws={'alpha': 0.6})`}</div>

        <h3 style={S.h3}>Temas Seaborn</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tema</th>
              <th style={S.th}>Aparência</th>
              <th style={S.th}>Uso Típico</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['whitegrid', 'Fundo branco com grelha cinza', 'Relatórios, publicação'],
              ['darkgrid', 'Fundo cinza escuro com grelha', 'Exploração, notebooks'],
              ['ticks', 'Fundo branco, apenas ticks nos eixos', 'Publicação científica'],
              ['white', 'Fundo branco limpo, sem grelha', 'Apresentações'],
              ['dark', 'Fundo cinza escuro, sem grelha', 'Posters, dark mode'],
            ].map(([t, a, u]) => (
              <tr key={t}>
                <td style={{ ...S.td, fontFamily: 'monospace', color }}>{t}</td>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{u}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* 5. Plotly */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Plotly — Interatividade</h2>
        <p style={S.p}>
          Plotly gera gráficos interativos como HTML/JavaScript, permitindo zoom, hover, filtros e
          animações. A diferença chave face ao Matplotlib: o output é um objeto HTML que vive no browser,
          não uma imagem estática.
        </p>
        <div style={S.highlight}>
          <p style={S.p}><strong>plotly.express</strong> — API de alto nível, uma linha por gráfico, ideal para 80% dos casos.</p>
          <p style={{ ...S.p, marginBottom: 0 }}><strong>plotly.graph_objects</strong> — API de baixo nível para controlo total: múltiplos traces, layouts complexos, animações frame-a-frame.</p>
        </div>
        <div style={S.code}>{`import plotly.express as px
import plotly.graph_objects as go

df = px.data.gapminder()

# Scatter interativo com tamanho e cor
fig = px.scatter(df.query('year == 2007'),
                 x='gdpPercap', y='lifeExp',
                 size='pop', color='continent',
                 hover_name='country', log_x=True,
                 title='GDP vs Life Expectancy (2007)')
fig.show()

# Line chart
fig = px.line(df[df.country == 'Portugal'],
              x='year', y='gdpPercap', title='Portugal GDP')
fig.show()

# Bar chart
fig = px.bar(df[df.year == 2007].groupby('continent')['pop'].sum().reset_index(),
             x='continent', y='pop', color='continent')
fig.show()

# Histogram
fig = px.histogram(df, x='lifeExp', nbins=30, color='continent')
fig.show()

# Animated bubble chart
fig = px.scatter(df, x='gdpPercap', y='lifeExp',
                 animation_frame='year', color='continent',
                 size='pop', log_x=True,
                 range_x=[100, 100000], range_y=[25, 90])
fig.show()`}</div>

        <h3 style={S.h3}>graph_objects — Controlo Total</h3>
        <div style={S.code}>{`import plotly.graph_objects as go

fig = go.Figure()

fig.add_trace(go.Scatter(x=x, y=y1, mode='lines+markers', name='Série A'))
fig.add_trace(go.Bar(x=categories, y=values, name='Volume'))

fig.update_layout(
    title='Dashboard Combinado',
    xaxis_title='Período',
    yaxis_title='Valor',
    template='plotly_white',
    hovermode='x unified'
)
fig.write_html('dashboard.html')`}</div>

        <h3 style={S.h3}>Dash — Dashboards Web</h3>
        <div style={S.code}>{`from dash import Dash, dcc, html, Input, Output
import plotly.express as px

app = Dash(__name__)

app.layout = html.Div([
    dcc.Dropdown(id='year', options=[2000, 2005, 2007], value=2007),
    dcc.Graph(id='scatter'),
])

@app.callback(Output('scatter', 'figure'), Input('year', 'value'))
def update(year):
    df_f = df[df.year == year]
    return px.scatter(df_f, x='gdpPercap', y='lifeExp',
                      color='continent', size='pop', log_x=True)

app.run(debug=True)`}</div>
      </div>

      <hr style={S.divider} />

      {/* 6. Escolher o Gráfico Certo */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Escolher o Gráfico Certo</h2>
        <p style={S.p}>
          A escolha do gráfico correto depende da natureza dos dados e da questão analítica a responder.
          Este fluxograma guia a decisão.
        </p>
        <div style={S.svgWrap}>
          <DecisionFlowSVG />
        </div>
        <h3 style={S.h3}>Tabela de Referência</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Questão</th>
              <th style={S.th}>Gráfico</th>
              <th style={S.th}>Biblioteca</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Como se distribui X?', 'Histograma, Boxplot, Violin', 'Seaborn / Matplotlib'],
              ['X e Y estão relacionados?', 'Scatter, Heatmap', 'Seaborn / Plotly'],
              ['Como evoluiu X ao longo do tempo?', 'Line, Area', 'Plotly / Matplotlib'],
              ['Comparar grupos em Y?', 'Bar, Grouped Bar, Boxplot', 'Seaborn / Matplotlib'],
              ['Composição de um todo?', 'Pie, Stacked Bar, Treemap', 'Plotly / Matplotlib'],
              ['Todas as relações pairwise?', 'Scatter Matrix, Pairplot', 'Seaborn'],
              ['Correlações entre variáveis?', 'Heatmap de correlação', 'Seaborn'],
              ['Exploração interativa?', 'Qualquer tipo interativo', 'Plotly / Dash'],
            ].map(([q, g, lib]) => (
              <tr key={q}>
                <td style={S.td}>{q}</td>
                <td style={{ ...S.td, color, fontWeight: 500 }}>{g}</td>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.85rem' }}>{lib}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* 7. Statsmodels OLS */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Statsmodels — OLS</h2>
        <p style={S.p}>
          Statsmodels é a biblioteca de estatística inferencial de Python. Ao contrário do scikit-learn
          (focado em previsão), o statsmodels fornece inferência completa: p-valores, intervalos de
          confiança, testes de diagnóstico, AIC/BIC.
        </p>
        <h3 style={S.h3}>Interface de Fórmula (Patsy)</h3>
        <div style={S.code}>{`import statsmodels.formula.api as smf
import statsmodels.api as sm
import pandas as pd

# Carregar dados
df = sm.datasets.get_rdataset('Guerry', 'HistData').data
df = df[['Lottery', 'Literacy', 'Wealth', 'Region']].dropna()

# OLS com fórmula R-style
model = smf.ols('Lottery ~ Literacy + Wealth + Region', data=df)
result = model.fit()

print(result.summary())

# Aceder a resultados individuais
print(result.params)          # coeficientes
print(result.pvalues)         # p-valores
print(result.rsquared)        # R²
print(result.rsquared_adj)    # R² ajustado
print(result.aic)             # AIC
print(result.conf_int())      # intervalos de confiança 95%`}</div>

        <h3 style={S.h3}>Output — Tabela de Regressão</h3>
        <div style={S.svgWrap}>
          <RegressionOutputSVG />
        </div>

        <h3 style={S.h3}>Guia de Interpretação</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Métrica</th>
              <th style={S.th}>Onde ler</th>
              <th style={S.th}>Interpretação</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['R-squared', 'Topo do summary', 'Proporção da variância de Y explicada pelo modelo (0–1)'],
              ['Adj. R-squared', 'Topo do summary', 'R² penalizado pelo número de preditores; preferível ao R²'],
              ['F-statistic / Prob(F)', 'Topo do summary', 'Testa se algum preditor é significativo; Prob < 0.05 = modelo útil'],
              ['coef', 'Tabela de coeficientes', 'Efeito marginal de cada preditor (mantendo os outros constantes)'],
              ['std err', 'Tabela de coeficientes', 'Incerteza na estimativa do coeficiente'],
              ['t / P>|t|', 'Tabela de coeficientes', 'Teste t: P < 0.05 indica preditor estatisticamente significativo'],
              ['[0.025 0.975]', 'Tabela de coeficientes', 'Intervalo de confiança a 95% para o coeficiente'],
              ['AIC / BIC', 'Rodapé', 'Critérios de seleção de modelos; valores menores indicam melhor ajuste'],
            ].map(([m, w2, i]) => (
              <tr key={m}>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem', color }}>{m}</td>
                <td style={S.td}>{w2}</td>
                <td style={S.td}>{i}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Um <strong>p-valor &lt; 0.05</strong> (convencionalmente) indica que o coeficiente é
          estatisticamente diferente de zero. Um <strong>R² alto</strong> não implica causalidade
          nem que o modelo é bem especificado — verificar sempre os diagnósticos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* 8. GLM */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Statsmodels — GLM</h2>
        <p style={S.p}>
          Os Modelos Lineares Generalizados (GLM) estendem o OLS para variáveis dependentes
          não-normais através de funções de ligação que conectam o preditor linear ao valor esperado.
        </p>
        <div style={S.code}>{`import statsmodels.formula.api as smf

# Regressão Logística (variável binária)
logit_model = smf.logit('churn ~ age + tenure + monthly_charges', data=df)
logit_result = logit_model.fit()
print(logit_result.summary())

# Odds ratios (exponencial dos coeficientes)
import numpy as np
odds_ratios = np.exp(logit_result.params)
print(odds_ratios)

# Regressão de Poisson (contagens)
poisson_model = smf.poisson('count ~ x1 + x2', data=df)
poisson_result = poisson_model.fit()

# Negative Binomial (contagens com overdispersion)
nb_model = smf.negativebinomial('count ~ x1 + x2', data=df)
nb_result = nb_model.fit()`}</div>

        <h3 style={S.h3}>Famílias e Funções de Ligação</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Família</th>
              <th style={S.th}>Variável Dependente</th>
              <th style={S.th}>Link Default</th>
              <th style={S.th}>smf API</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gaussian', 'Contínua, Normal', 'identity', 'smf.ols()'],
              ['Binomial', 'Binária (0/1)', 'logit', 'smf.logit()'],
              ['Poisson', 'Contagens', 'log', 'smf.poisson()'],
              ['Gamma', 'Contínua positiva', 'inverse', 'smf.glm(..., family=Gamma())'],
              ['Neg. Binomial', 'Contagens (overdispersão)', 'log', 'smf.negativebinomial()'],
            ].map(([f, v, l, a]) => (
              <tr key={f}>
                <td style={{ ...S.td, fontWeight: 600 }}>{f}</td>
                <td style={S.td}>{v}</td>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{l}</td>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem', color }}>{a}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.highlight}>
          <p style={S.p}><strong>Interpretação dos Odds Ratios (Logística):</strong></p>
          <p style={S.p}>OR = exp(coef). OR &gt; 1: aumento do preditor aumenta a probabilidade do evento. OR &lt; 1: diminui. OR = 1: sem efeito.</p>
          <p style={{ ...S.p, marginBottom: 0 }}>Exemplo: coef = 0.35 para age, OR = exp(0.35) = 1.42. Cada ano de idade aumenta o odds do evento por 42%.</p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* 9. Time Series */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Statsmodels — Séries Temporais</h2>
        <p style={S.p}>
          O módulo <code>statsmodels.tsa</code> oferece modelos ARIMA, SARIMAX (sazonal), VAR
          (vetorial) e ARCH/GARCH. O workflow padrão envolve análise de estacionaridade, identificação
          de ordens via ACF/PACF, estimação e validação de diagnósticos.
        </p>
        <div style={S.code}>{`import statsmodels.api as sm
from statsmodels.tsa.arima.model import ARIMA
from statsmodels.tsa.statespace.sarimax import SARIMAX
from statsmodels.tsa.stattools import adfuller, acf, pacf

# Teste de estacionaridade (ADF)
result_adf = adfuller(ts)
print(f'ADF Statistic: {result_adf[0]:.4f}')
print(f'p-value: {result_adf[1]:.4f}')  # < 0.05 = estacionário

# Identificar ordens via ACF/PACF
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf
fig, axes = plt.subplots(1, 2, figsize=(12, 4))
plot_acf(ts, lags=20, ax=axes[0])
plot_pacf(ts, lags=20, ax=axes[1])
plt.tight_layout()

# ARIMA(p, d, q)
model = ARIMA(ts, order=(1, 1, 1))
result = model.fit()
print(result.summary())

# Forecast
forecast = result.get_forecast(steps=12)
pred = forecast.predicted_mean
ci = forecast.conf_int()  # intervalo de confiança

# SARIMAX (sazonal) — (p,d,q)(P,D,Q,s)
sarimax_model = SARIMAX(ts, order=(1, 1, 1),
                        seasonal_order=(1, 1, 1, 12))
sarimax_result = sarimax_model.fit()
sarimax_forecast = sarimax_result.forecast(steps=12)`}</div>

        <h3 style={S.h3}>ACF e PACF — Correlograma</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ ...S.svgWrap, flex: '1 1 300px' }}>
            <ACFPlotSVG />
          </div>
          <div style={{ ...S.svgWrap, flex: '1 1 300px' }}>
            <PACFPlotSVG />
          </div>
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Padrão ACF</th>
              <th style={S.th}>Padrão PACF</th>
              <th style={S.th}>Modelo sugerido</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Decaimento exponencial', 'Corte após lag p', 'AR(p)'],
              ['Corte após lag q', 'Decaimento exponencial', 'MA(q)'],
              ['Decaimento sinusoidal', 'Decaimento sinusoidal', 'ARMA(p,q)'],
              ['Sem decaimento (todos significativos)', '—', 'Série não estacionária — diferenciar'],
              ['Picos em múltiplos de s', 'Picos em múltiplos de s', 'Componente sazonal → SARIMA'],
            ].map(([a, pa, m]) => (
              <tr key={m}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{pa}</td>
                <td style={{ ...S.td, color, fontWeight: 500 }}>{m}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Forecast com Intervalo de Confiança</h3>
        <div style={S.svgWrap}>
          <ForecastSVG />
        </div>
      </div>

      <hr style={S.divider} />

      {/* 10. Diagnósticos */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Statsmodels — Diagnósticos de Regressão</h2>
        <p style={S.p}>
          A validade de um modelo OLS depende de pressupostos sobre os resíduos. Os gráficos de
          diagnóstico revelam violações desses pressupostos.
        </p>
        <div style={S.svgWrap}>
          <ResidualPlotsSVG />
        </div>
        <div style={S.code}>{`import statsmodels.api as sm
import matplotlib.pyplot as plt

# Gráficos de diagnóstico (4 painéis standard)
fig, axes = plt.subplots(2, 2, figsize=(10, 8))

# 1. Residuals vs Fitted
axes[0, 0].scatter(result.fittedvalues, result.resid, alpha=0.5)
axes[0, 0].axhline(0, color='red', linestyle='--')
axes[0, 0].set_xlabel('Fitted Values')
axes[0, 0].set_ylabel('Residuals')
axes[0, 0].set_title('Residuals vs Fitted')

# 2. Normal Q-Q
sm.qqplot(result.resid, line='45', ax=axes[0, 1])
axes[0, 1].set_title('Normal Q-Q')

# 3. Scale-Location (homoscedasticidade)
import numpy as np
axes[1, 0].scatter(result.fittedvalues, np.sqrt(np.abs(result.resid)))
axes[1, 0].set_title('Scale-Location')

# 4. Residuals vs Leverage
influence = result.get_influence()
axes[1, 1].scatter(influence.hat_matrix_diag, result.resid)
axes[1, 1].set_xlabel('Leverage')
axes[1, 1].set_title('Residuals vs Leverage')

plt.tight_layout()
plt.show()`}</div>

        <h3 style={S.h3}>Testes Estatísticos de Diagnóstico</h3>
        <div style={S.code}>{`from statsmodels.stats.diagnostic import (
    het_breuschpagan,     # Heterocedasticidade
    acorr_ljungbox,       # Autocorrelação
    linear_reset,         # Má especificação do modelo
)
from statsmodels.stats.stattools import durbin_watson

# Breusch-Pagan (H0: homocedasticidade)
lm, lm_p, f, f_p = het_breuschpagan(result.resid, result.model.exog)
print(f'Breusch-Pagan p-value: {lm_p:.4f}')  # > 0.05 = OK

# Durbin-Watson (autocorrelação nos resíduos)
dw = durbin_watson(result.resid)
print(f'Durbin-Watson: {dw:.3f}')  # perto de 2 = sem autocorrelação

# Ljung-Box (lags múltiplos)
lb = acorr_ljungbox(result.resid, lags=[10], return_df=True)
print(lb)

# Cook's Distance (outliers influentes)
(cooks_d, p_values) = result.get_influence().cooks_distance
influent = cooks_d > 4 / len(cooks_d)
print(f'Observações influentes: {influent.sum()}')`}</div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Teste</th>
              <th style={S.th}>H0</th>
              <th style={S.th}>Ação se rejeitado</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Breusch-Pagan', 'Homocedasticidade (resíduos com variância constante)', 'WLS, erros robustos (HC3), transformação de Y'],
              ['Durbin-Watson (~2)', 'Sem autocorrelação serial nos resíduos', 'ARIMA, GLS, incluir lags como preditores'],
              ["Cook's Distance > 4/n", '—', 'Investigar/remover observações influentes'],
              ['Shapiro-Wilk (QQ-plot)', 'Normalidade dos resíduos', 'Transformação log/Box-Cox, amostras grandes (CLT)'],
              ['RESET (Ramsey)', 'Modelo linearmente bem especificado', 'Adicionar termos quadráticos, interações'],
            ].map(([t, h, a]) => (
              <tr key={t}>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem', color }}>{t}</td>
                <td style={S.td}>{h}</td>
                <td style={S.td}>{a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* 11. Dashboard com Matplotlib */}
      <div style={S.section}>
        <h2 style={S.h2}>11. Dashboard com Matplotlib</h2>
        <p style={S.p}>
          Para relatórios e publicações, combinar múltiplos gráficos numa única figura de alta
          qualidade é o padrão. O Matplotlib oferece controlo total sobre layout, tipografia e
          exportação vetorial.
        </p>
        <div style={S.svgWrap}>
          <DashboardMockupSVG />
        </div>
        <div style={S.code}>{`import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec
import numpy as np

# Dashboard publication-quality
fig = plt.figure(figsize=(14, 10))
fig.suptitle('Analytical Report', fontsize=16, fontweight='bold', y=0.98)

# Layout 2x2 com gridspec para controlo fino
gs = gridspec.GridSpec(2, 2, figure=fig, hspace=0.35, wspace=0.3)

ax1 = fig.add_subplot(gs[0, 0])  # Linha temporal
ax2 = fig.add_subplot(gs[0, 1])  # Distribuição
ax3 = fig.add_subplot(gs[1, 0])  # Correlação
ax4 = fig.add_subplot(gs[1, 1])  # Comparação

# Painel 1 — Linha temporal
ax1.plot(dates, sales, color='#f97316', linewidth=2)
ax1.fill_between(dates, sales, alpha=0.08, color='#f97316')
ax1.set_title('Evolução Temporal', fontweight='bold')
ax1.set_xlabel('Período'); ax1.set_ylabel('Vendas')

# Painel 2 — Histograma
ax2.hist(data['price'], bins=25, color='#f97316', alpha=0.6)
ax2.set_title('Distribuição de Preços', fontweight='bold')

# Painel 3 — Heatmap de correlação
im = ax3.imshow(corr_matrix, cmap='RdBu_r', vmin=-1, vmax=1)
fig.colorbar(im, ax=ax3, shrink=0.8)
ax3.set_title('Correlações', fontweight='bold')

# Painel 4 — Barras por categoria
ax4.bar(categories, means, color='#f97316', alpha=0.7)
ax4.errorbar(categories, means, yerr=stds, fmt='none', color='black')
ax4.set_title('Por Categoria', fontweight='bold')

# Exportar em alta resolução
fig.savefig('report.pdf', dpi=300, bbox_inches='tight', format='pdf')
fig.savefig('report.png', dpi=300, bbox_inches='tight')`}</div>
        <div style={S.note}>
          Para gráficos científicos, usar <code>plt.rcParams</code> para definir fontes, tamanhos e
          cores globalmente: <code>{'plt.rcParams.update({"font.family": "serif", "font.size": 11})'}</code>.
          Para exportação vetorial (EPS, SVG, PDF), garantir que não existem transparências excessivas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* 12. Síntese */}
      <div style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo</h2>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Biblioteca</th>
              <th style={S.th}>Paradigma</th>
              <th style={S.th}>Pontos Fortes</th>
              <th style={S.th}>Limitações</th>
              <th style={S.th}>Usar quando...</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Matplotlib', 'Imperativo / OOP', 'Controlo total, publicação, subplots', 'Verboso, sem interatividade nativa', 'Publicações, controlo pixel a pixel'],
              ['Seaborn', 'Declarativo (alto nível)', 'Plots estatísticos, DataFrames, temas', 'Menos flexível que Matplotlib', 'EDA rápido, visualizações estatísticas'],
              ['Plotly', 'Declarativo / interativo', 'Interatividade, dashboards, animações', 'Ficheiros grandes, dependência JS', 'Dashboards, apresentações interativas'],
              ['Altair', 'Declarativo (Vega-Lite)', 'Conciso, Grammar of Graphics nativa', 'Menos bibliotecas, curva de aprendizagem', 'Visualizações declarativas elegantes'],
            ].map(([lib, par, pos, lim, use]) => (
              <tr key={lib}>
                <td style={{ ...S.td, color, fontWeight: 700 }}>{lib}</td>
                <td style={S.td}>{par}</td>
                <td style={S.td}>{pos}</td>
                <td style={S.td}>{lim}</td>
                <td style={S.td}>{use}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Statsmodels vs scikit-learn</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Dimensão</th>
              <th style={S.th}>Statsmodels</th>
              <th style={S.th}>scikit-learn</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Objetivo', 'Inferência estatística', 'Previsão / Machine Learning'],
              ['Output principal', 'p-valores, ICs, testes, summary()', 'predict(), score(), cross_val_score()'],
              ['Foco', 'Compreender relações e testar hipóteses', 'Generalização a novos dados'],
              ['Modelos', 'OLS, GLM, ARIMA, VAR, logit...', 'LinearRegression, RandomForest, SVM...'],
              ['Fórmulas', 'Patsy (y ~ x1 + x2)', 'Matrizes numpy/pandas diretamente'],
              ['Quando usar', 'Economia, ciências sociais, saúde pública', 'Previsão, classificação, clustering'],
            ].map(([dim, sm, sk]) => (
              <tr key={dim}>
                <td style={{ ...S.td, fontWeight: 600 }}>{dim}</td>
                <td style={S.td}>{sm}</td>
                <td style={S.td}>{sk}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.highlight}>
          <p style={S.p}><strong>Matplotlib:</strong> base de tudo; interface pyplot (stateful) para rapidez, OOP (fig/axes) para controlo.</p>
          <p style={S.p}><strong>Seaborn:</strong> plots estatísticos em 1 linha; integra com DataFrames; temas automáticos.</p>
          <p style={S.p}><strong>Plotly / Dash:</strong> interatividade HTML; ideal para dashboards e apresentações.</p>
          <p style={S.p}><strong>Statsmodels OLS:</strong> smf.ols('y ~ x', data=df).fit(); result.summary() para inferência completa.</p>
          <p style={S.p}><strong>GLM:</strong> smf.logit() para binário, smf.poisson() para contagens; interpretar odds ratios.</p>
          <p style={{ ...S.p, marginBottom: 0 }}><strong>ARIMA / SARIMAX:</strong> identificar ordens via ACF/PACF; testar estacionaridade com ADF; validar com diagnósticos de resíduos.</p>
        </div>
      </div>
    </div>
  );
}
