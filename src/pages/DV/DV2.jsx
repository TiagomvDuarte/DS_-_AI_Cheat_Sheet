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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(249,115,22,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

/* ─── SECTION 1: Bar Chart ─────────────────────────────────────────────── */
const BarChartSVG = () => {
  const data = [
    { pais: 'Portugal', valor: 84 },
    { pais: 'Itália',   valor: 96 },
    { pais: 'Espanha',  valor: 132 },
    { pais: 'França',   valor: 178 },
    { pais: 'Alemanha', valor: 215 },
  ];
  const maxVal = 215;
  const barH = 28;
  const gap = 10;
  const labelW = 72;
  const chartW = 380;
  const totalH = data.length * (barH + gap) + 10;

  return (
    <svg viewBox={`0 0 520 220`} style={{ width: '100%', display: 'block' }}>
      {/* Título */}
      <text x="260" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-secondary)">Vendas por País (milhões €)</text>
      {data.map((d, i) => {
        const y = 30 + i * (barH + gap);
        const bw = (d.valor / maxVal) * chartW;
        return (
          <g key={d.pais}>
            {/* Label país */}
            <text x={labelW - 6} y={y + barH / 2 + 4} textAnchor="end" fontSize="11" fill="var(--text-secondary)">{d.pais}</text>
            {/* Barra */}
            <rect x={labelW} y={y} width={bw} height={barH} rx="4" fill={color} opacity="0.9" />
            {/* Label dentro da barra (se espaço) */}
            {bw > 40 && (
              <text x={labelW + 8} y={y + barH / 2 + 4} fontSize="11" fontWeight="700" fill="#fff">{d.valor}</text>
            )}
            {/* Valor à direita */}
            <text x={labelW + bw + 7} y={y + barH / 2 + 4} fontSize="11" fill="var(--text-primary)" fontWeight="600">{d.valor}</text>
          </g>
        );
      })}
      {/* Linha de base */}
      <line x1={labelW} y1="30" x2={labelW} y2={30 + data.length * (barH + gap) - gap} stroke="var(--text-secondary)" strokeWidth="1.5" />
    </svg>
  );
};

/* ─── SECTION 2: Line Chart ────────────────────────────────────────────── */
const LineChartSVG = () => {
  const meses = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  const serieA = [45,52,48,61,70,88,95,102,89,76,110,132];
  const serieB = [78,72,80,75,68,60,55,52,65,80,95,105];

  const padL = 42, padR = 16, padT = 28, padB = 40;
  const W = 560, H = 200;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const minV = 30, maxV = 140;

  const xPos = (i) => padL + (i / (meses.length - 1)) * chartW;
  const yPos = (v) => padT + chartH - ((v - minV) / (maxV - minV)) * chartH;

  const pathA = serieA.map((v, i) => `${i === 0 ? 'M' : 'L'}${xPos(i).toFixed(1)},${yPos(v).toFixed(1)}`).join(' ');
  const pathB = serieB.map((v, i) => `${i === 0 ? 'M' : 'L'}${xPos(i).toFixed(1)},${yPos(v).toFixed(1)}`).join(' ');

  const gridVals = [40, 60, 80, 100, 120, 140];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', display: 'block' }}>
      {/* Grid horizontais */}
      {gridVals.map(v => (
        <g key={v}>
          <line x1={padL} y1={yPos(v)} x2={W - padR} y2={yPos(v)} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4 3" />
          <text x={padL - 5} y={yPos(v) + 4} textAnchor="end" fontSize="9" fill="var(--text-secondary)">{v}</text>
        </g>
      ))}
      {/* Eixo X labels */}
      {meses.map((m, i) => (
        <text key={m} x={xPos(i)} y={H - padB + 14} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{m}</text>
      ))}
      {/* Eixo Y label */}
      <text x="8" y={padT + chartH / 2} textAnchor="middle" fontSize="9" fill="var(--text-secondary)" transform={`rotate(-90, 8, ${padT + chartH / 2})`}>Vendas (k€)</text>
      {/* Linhas */}
      <path d={pathA} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      <path d={pathB} fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      {/* Pontos série A */}
      {serieA.map((v, i) => (
        <circle key={i} cx={xPos(i)} cy={yPos(v)} r="3.5" fill={color} stroke="#fff" strokeWidth="1.5" />
      ))}
      {/* Pontos série B */}
      {serieB.map((v, i) => (
        <circle key={i} cx={xPos(i)} cy={yPos(v)} r="3.5" fill="#f59e0b" stroke="#fff" strokeWidth="1.5" />
      ))}
      {/* Legenda */}
      <rect x={padL + 10} y={padT + 4} width="10" height="10" rx="2" fill={color} />
      <text x={padL + 24} y={padT + 13} fontSize="10" fill="var(--text-primary)" fontWeight="600">Vendas Online</text>
      <rect x={padL + 110} y={padT + 4} width="10" height="10" rx="2" fill="#f59e0b" />
      <text x={padL + 124} y={padT + 13} fontSize="10" fill="var(--text-primary)" fontWeight="600">Vendas Loja</text>
      {/* Eixos */}
      <line x1={padL} y1={padT} x2={padL} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1={padL} y1={padT + chartH} x2={W - padR} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="1.5" />
    </svg>
  );
};

/* ─── SECTION 3: Scatter Plot ──────────────────────────────────────────── */
const ScatterPlotSVG = () => {
  const pontos = [
    [155,55],[160,60],[162,63],[165,67],[167,65],[168,70],[170,72],[172,74],
    [173,76],[175,78],[177,80],[178,82],[180,85],[182,88],[185,92],
  ];
  const padL = 48, padR = 20, padT = 28, padB = 44;
  const W = 400, H = 300;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const minX = 150, maxX = 190, minY = 50, maxY = 100;

  const xP = (v) => padL + ((v - minX) / (maxX - minX)) * chartW;
  const yP = (v) => padT + chartH - ((v - minY) / (maxY - minY)) * chartH;

  // Linha de tendência: regressão linear simples sobre os pontos
  const n = pontos.length;
  const sumX = pontos.reduce((a, p) => a + p[0], 0);
  const sumY = pontos.reduce((a, p) => a + p[1], 0);
  const sumXY = pontos.reduce((a, p) => a + p[0] * p[1], 0);
  const sumX2 = pontos.reduce((a, p) => a + p[0] * p[0], 0);
  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  const tX1 = minX, tY1 = slope * tX1 + intercept;
  const tX2 = maxX, tY2 = slope * tX2 + intercept;

  const gridX = [155,160,165,170,175,180,185];
  const gridY = [55,65,75,85,95];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', display: 'block' }}>
      <text x={W / 2} y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-secondary)">Altura (cm) vs. Peso (kg)</text>
      {/* Grid */}
      {gridX.map(v => (
        <line key={v} x1={xP(v)} y1={padT} x2={xP(v)} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3 3" />
      ))}
      {gridY.map(v => (
        <line key={v} x1={padL} y1={yP(v)} x2={padL + chartW} y2={yP(v)} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3 3" />
      ))}
      {/* Labels eixos */}
      {gridX.map(v => (
        <text key={v} x={xP(v)} y={padT + chartH + 14} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{v}</text>
      ))}
      {gridY.map(v => (
        <text key={v} x={padL - 6} y={yP(v) + 4} textAnchor="end" fontSize="9" fill="var(--text-secondary)">{v}</text>
      ))}
      {/* Eixo labels */}
      <text x={padL + chartW / 2} y={H - 6} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Altura (cm)</text>
      <text x="12" y={padT + chartH / 2} textAnchor="middle" fontSize="10" fill="var(--text-secondary)" transform={`rotate(-90, 12, ${padT + chartH / 2})`}>Peso (kg)</text>
      {/* Linha de tendência */}
      <line x1={xP(tX1)} y1={yP(tY1)} x2={xP(tX2)} y2={yP(tY2)} stroke="#f97316" strokeWidth="1.8" strokeDasharray="6 4" opacity="0.8" />
      <text x={xP(175)} y={yP(tY1 + (tY2 - tY1) * 0.78) - 8} fontSize="9" fill="#f97316" fontWeight="600">tendência</text>
      {/* Pontos */}
      {pontos.map(([x, y], i) => (
        <circle key={i} cx={xP(x)} cy={yP(y)} r="5" fill={color} opacity="0.75" stroke="#fff" strokeWidth="1.5" />
      ))}
      {/* Eixos */}
      <line x1={padL} y1={padT} x2={padL} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1={padL} y1={padT + chartH} x2={padL + chartW} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="1.5" />
    </svg>
  );
};

/* ─── SECTION 4: Histogram ─────────────────────────────────────────────── */
const HistogramSVG = () => {
  const bins = ['20-25','25-30','30-35','35-40','40-45','45-50','50-55','55-60'];
  const freqs = [5,12,24,38,31,20,11,4];
  const maxF = 40;
  const padL = 40, padR = 16, padT = 24, padB = 44;
  const W = 460, H = 220;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const binW = chartW / bins.length;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', display: 'block' }}>
      <text x={W / 2} y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-secondary)">Distribuição de Idades (n=145)</text>
      {/* Grid horizontal */}
      {[0,10,20,30,40].map(v => (
        <g key={v}>
          <line x1={padL} y1={padT + chartH - (v / maxF) * chartH} x2={W - padR} y2={padT + chartH - (v / maxF) * chartH} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4 3" />
          <text x={padL - 5} y={padT + chartH - (v / maxF) * chartH + 4} textAnchor="end" fontSize="9" fill="var(--text-secondary)">{v}</text>
        </g>
      ))}
      {/* Barras */}
      {freqs.map((f, i) => {
        const bh = (f / maxF) * chartH;
        const x = padL + i * binW;
        const y = padT + chartH - bh;
        return (
          <g key={i}>
            <rect x={x + 1} y={y} width={binW - 2} height={bh} fill={color} opacity="0.75" stroke="#fff" strokeWidth="1.5" />
            {f > 8 && (
              <text x={x + binW / 2} y={y + 14} textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">{f}</text>
            )}
            <text x={x + binW / 2} y={padT + chartH + 14} textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">{bins[i]}</text>
          </g>
        );
      })}
      {/* Eixos */}
      <line x1={padL} y1={padT} x2={padL} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1={padL} y1={padT + chartH} x2={W - padR} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="1.5" />
      {/* Labels eixos */}
      <text x="12" y={padT + chartH / 2} textAnchor="middle" fontSize="9" fill="var(--text-secondary)" transform={`rotate(-90, 12, ${padT + chartH / 2})`}>Frequência</text>
      <text x={W / 2} y={H - 4} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Idade (anos)</text>
    </svg>
  );
};

/* ─── SECTION 5: Box Plot ──────────────────────────────────────────────── */
const BoxPlotSVG = () => {
  const grupos = [
    { nome: 'Grupo A', q1: 55, med: 68, q3: 78, wMin: 42, wMax: 88, outliers: [] },
    { nome: 'Grupo B', q1: 62, med: 74, q3: 85, wMin: 50, wMax: 95, outliers: [] },
    { nome: 'Grupo C', q1: 48, med: 60, q3: 72, wMin: 38, wMax: 82, outliers: [22, 98] },
  ];
  const padL = 40, padR = 20, padT = 28, padB = 40;
  const W = 400, H = 260;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const minV = 15, maxV = 105;
  const yP = (v) => padT + chartH - ((v - minV) / (maxV - minV)) * chartH;
  const colW = chartW / grupos.length;
  const boxW = colW * 0.45;
  const gridVals = [20,40,60,80,100];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', display: 'block' }}>
      <text x={W / 2} y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-secondary)">Distribuição por Grupo (pontuação)</text>
      {/* Grid */}
      {gridVals.map(v => (
        <g key={v}>
          <line x1={padL} y1={yP(v)} x2={W - padR} y2={yP(v)} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4 3" />
          <text x={padL - 5} y={yP(v) + 4} textAnchor="end" fontSize="9" fill="var(--text-secondary)">{v}</text>
        </g>
      ))}
      {grupos.map((g, i) => {
        const cx = padL + i * colW + colW / 2;
        const x1 = cx - boxW / 2;
        const x2 = cx + boxW / 2;
        return (
          <g key={g.nome}>
            {/* Whisker inferior */}
            <line x1={cx} y1={yP(g.wMin)} x2={cx} y2={yP(g.q1)} stroke={color} strokeWidth="1.8" />
            <line x1={cx - 8} y1={yP(g.wMin)} x2={cx + 8} y2={yP(g.wMin)} stroke={color} strokeWidth="1.8" />
            {/* Caixa */}
            <rect x={x1} y={yP(g.q3)} width={boxW} height={yP(g.q1) - yP(g.q3)} fill={`rgba(249,115,22,0.10)`} stroke={color} strokeWidth="2" rx="2" />
            {/* Mediana */}
            <line x1={x1} y1={yP(g.med)} x2={x2} y2={yP(g.med)} stroke={color} strokeWidth="2.5" />
            {/* Whisker superior */}
            <line x1={cx} y1={yP(g.q3)} x2={cx} y2={yP(g.wMax)} stroke={color} strokeWidth="1.8" />
            <line x1={cx - 8} y1={yP(g.wMax)} x2={cx + 8} y2={yP(g.wMax)} stroke={color} strokeWidth="1.8" />
            {/* Outliers */}
            {g.outliers.map((o, j) => (
              <circle key={j} cx={cx} cy={yP(o)} r="4.5" fill="none" stroke="#f97316" strokeWidth="2" />
            ))}
            {/* Label */}
            <text x={cx} y={H - padB + 16} textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-secondary)">{g.nome}</text>
          </g>
        );
      })}
      {/* Eixos */}
      <line x1={padL} y1={padT} x2={padL} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1={padL} y1={padT + chartH} x2={W - padR} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="1.5" />
      {/* Legenda outliers */}
      <circle cx={W - padR - 60} cy={padT + 10} r="4" fill="none" stroke="#f97316" strokeWidth="2" />
      <text x={W - padR - 52} y={padT + 14} fontSize="9" fill="var(--text-secondary)">outlier</text>
    </svg>
  );
};

/* ─── SECTION 6: Donut Chart ───────────────────────────────────────────── */
const DonutChartSVG = () => {
  const dados = [
    { nome: 'Chrome',  pct: 65, cor: '#f97316' },
    { nome: 'Safari',  pct: 19, cor: '#fb923c' },
    { nome: 'Firefox', pct: 8,  cor: '#fbbf24' },
    { nome: 'Edge',    pct: 5,  cor: '#f59e0b' },
    { nome: 'Outros',  pct: 3,  cor: '#cbd5e1' },
  ];
  const cx = 110, cy = 110, r = 80, ri = 48;
  let angle = -Math.PI / 2;

  const slices = dados.map(d => {
    const start = angle;
    const sweep = (d.pct / 100) * 2 * Math.PI;
    angle += sweep;
    const end = angle;
    const x1 = cx + r * Math.cos(start), y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(end),   y2 = cy + r * Math.sin(end);
    const ix1 = cx + ri * Math.cos(start), iy1 = cy + ri * Math.sin(start);
    const ix2 = cx + ri * Math.cos(end),   iy2 = cy + ri * Math.sin(end);
    const large = sweep > Math.PI ? 1 : 0;
    const path = [
      `M ${x1.toFixed(2)} ${y1.toFixed(2)}`,
      `A ${r} ${r} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`,
      `L ${ix2.toFixed(2)} ${iy2.toFixed(2)}`,
      `A ${ri} ${ri} 0 ${large} 0 ${ix1.toFixed(2)} ${iy1.toFixed(2)}`,
      'Z',
    ].join(' ');
    return { ...d, path, midAngle: start + sweep / 2 };
  });

  return (
    <svg viewBox="0 0 400 220" style={{ width: '100%', display: 'block' }}>
      <text x="200" y="14" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-secondary)">Quota de Mercado — Browsers (2024)</text>
      {slices.map((s, i) => (
        <path key={i} d={s.path} fill={s.cor} stroke="#fff" strokeWidth="2" />
      ))}
      {/* Label centro */}
      <text x={cx} y={cy - 6} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Total</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--text-primary)">100%</text>
      {/* Legenda */}
      {dados.map((d, i) => (
        <g key={i}>
          <rect x="235" y={30 + i * 30} width="12" height="12" rx="2" fill={d.cor} />
          <text x="252" y={30 + i * 30 + 10} fontSize="11" fill="var(--text-primary)">{d.nome}</text>
          <text x="370" y={30 + i * 30 + 10} textAnchor="end" fontSize="11" fontWeight="700" fill="var(--text-secondary)">{d.pct}%</text>
        </g>
      ))}
    </svg>
  );
};

/* ─── SECTION 7: Heatmap ───────────────────────────────────────────────── */
const HeatmapSVG = () => {
  const vars = ['Preço','Área','Quartos','Idade','Dist.','Andar'];
  // Matriz 6×6 de correlações fictícias [-1, 1]
  const matrix = [
    [ 1.00,  0.82,  0.71, -0.55, -0.63,  0.38],
    [ 0.82,  1.00,  0.65, -0.42, -0.58,  0.44],
    [ 0.71,  0.65,  1.00, -0.30, -0.35,  0.28],
    [-0.55, -0.42, -0.30,  1.00,  0.27, -0.18],
    [-0.63, -0.58, -0.35,  0.27,  1.00, -0.22],
    [ 0.38,  0.44,  0.28, -0.18, -0.22,  1.00],
  ];
  const n = vars.length;
  const padL = 58, padT = 58, cell = 40;
  const W = 380, H = 300;

  const cellColor = (v) => {
    if (v === 1) return '#ea580c';
    if (v >= 0) {
      // white → orange: rgba(249,115,22, opacity)
      const t = v;
      return `rgba(249,115,22,${(0.12 + t * 0.75).toFixed(2)})`;
    } else {
      // negative: slate blue-gray scale
      const t = -v;
      const r = Math.round(100 - t * 50);
      const g = Math.round(116 - t * 60);
      const b = Math.round(139 + t * 60);
      return `rgb(${r},${g},${b})`;
    }
  };

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', display: 'block' }}>
      <text x={W / 2} y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-secondary)">Matriz de Correlação — Variáveis Imobiliárias</text>
      {/* Labels colunas */}
      {vars.map((v, j) => (
        <text key={j} x={padL + j * cell + cell / 2} y={padT - 8} textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--text-secondary)">{v}</text>
      ))}
      {/* Labels linhas */}
      {vars.map((v, i) => (
        <text key={i} x={padL - 6} y={padT + i * cell + cell / 2 + 4} textAnchor="end" fontSize="9" fontWeight="600" fill="var(--text-secondary)">{v}</text>
      ))}
      {/* Células */}
      {matrix.map((row, i) =>
        row.map((val, j) => {
          const x = padL + j * cell;
          const y = padT + i * cell;
          const bg = cellColor(val);
          const textCol = (val < 0 && Math.abs(val) > 0.3) || val >= 0.7 ? '#fff' : 'var(--text-primary)';
          return (
            <g key={`${i}-${j}`}>
              <rect x={x} y={y} width={cell} height={cell} fill={bg} stroke="#fff" strokeWidth="1.5" />
              <text x={x + cell / 2} y={y + cell / 2 + 4} textAnchor="middle" fontSize="9" fontWeight="700" fill={textCol}>{val.toFixed(2)}</text>
            </g>
          );
        })
      )}
    </svg>
  );
};

/* ─── SECTION 8: Stacked Area Chart ───────────────────────────────────── */
const AreaChartSVG = () => {
  const trimestres = ['T1 23','T2 23','T3 23','T4 23','T1 24','T2 24'];
  // Valores absolutos por série
  const mobile  = [45, 52, 60, 68, 75, 82];
  const desktop = [80, 78, 72, 68, 65, 60];
  const tablet  = [25, 22, 20, 18, 17, 15];

  const padL = 44, padR = 20, padT = 28, padB = 44;
  const W = 520, H = 220;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const maxTotal = 160;

  const xP = (i) => padL + (i / (trimestres.length - 1)) * chartW;
  const yP = (v) => padT + chartH - (v / maxTotal) * chartH;

  // Acumulados
  const acc = trimestres.map((_, i) => ({
    m: mobile[i],
    md: mobile[i] + desktop[i],
    mdt: mobile[i] + desktop[i] + tablet[i],
  }));

  // Polígono para cada camada (de baixo para cima)
  const polyMobile = [
    ...acc.map((a, i) => `${xP(i).toFixed(1)},${yP(a.m).toFixed(1)}`),
    ...acc.map((a, i) => `${xP(acc.length - 1 - i).toFixed(1)},${yP(0).toFixed(1)}`),
  ].join(' ');

  const polyDesktop = [
    ...acc.map((a, i) => `${xP(i).toFixed(1)},${yP(a.md).toFixed(1)}`),
    ...acc.map((a, i) => `${xP(acc.length - 1 - i).toFixed(1)},${yP(acc[acc.length - 1 - i].m).toFixed(1)}`),
  ].join(' ');

  const polyTablet = [
    ...acc.map((a, i) => `${xP(i).toFixed(1)},${yP(a.mdt).toFixed(1)}`),
    ...acc.map((a, i) => `${xP(acc.length - 1 - i).toFixed(1)},${yP(acc[acc.length - 1 - i].md).toFixed(1)}`),
  ].join(' ');

  const gridVals = [0, 40, 80, 120, 160];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', display: 'block' }}>
      <text x={W / 2} y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-secondary)">Sessões por Dispositivo (milhares)</text>
      {/* Grid */}
      {gridVals.map(v => (
        <g key={v}>
          <line x1={padL} y1={yP(v)} x2={W - padR} y2={yP(v)} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4 3" />
          <text x={padL - 5} y={yP(v) + 4} textAnchor="end" fontSize="9" fill="var(--text-secondary)">{v}</text>
        </g>
      ))}
      {/* Áreas empilhadas */}
      <polygon points={polyMobile}  fill="#f97316" opacity="0.85" />
      <polygon points={polyDesktop} fill="#f97316" opacity="0.85" />
      <polygon points={polyTablet}  fill="#f59e0b" opacity="0.85" />
      {/* Labels eixo X */}
      {trimestres.map((t, i) => (
        <text key={t} x={xP(i)} y={padT + chartH + 14} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{t}</text>
      ))}
      {/* Eixos */}
      <line x1={padL} y1={padT} x2={padL} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1={padL} y1={padT + chartH} x2={W - padR} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="1.5" />
      {/* Legenda */}
      <rect x={padL + 10} y={padT + 170} width="10" height="10" rx="2" fill="#f97316" opacity="0.85" />
      <text x={padL + 24} y={padT + 178} fontSize="9" fill="var(--text-primary)" fontWeight="600">Mobile</text>
      <rect x={padL + 76} y={padT + 170} width="10" height="10" rx="2" fill="#f97316" opacity="0.85" />
      <text x={padL + 90} y={padT + 178} fontSize="9" fill="var(--text-primary)" fontWeight="600">Desktop</text>
      <rect x={padL + 150} y={padT + 170} width="10" height="10" rx="2" fill="#f59e0b" opacity="0.85" />
      <text x={padL + 164} y={padT + 178} fontSize="9" fill="var(--text-primary)" fontWeight="600">Tablet</text>
    </svg>
  );
};

/* ─── COMPONENTE PRINCIPAL ──────────────────────────────────────────────── */
export default function DV2() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>

        {/* Cabeçalho */}
        <Link to="/dv" style={S.back}><ArrowLeft size={16} /> Voltar para Visualização de Dados</Link>
        <div style={S.tag}>MÓDULO 02</div>
        <h1 style={S.h1}>Tipos de Gráficos</h1>
        <p style={S.lead}>
          Escolher o gráfico errado para os seus dados é tão prejudicial quanto usar a escala errada — pode inverter
          completamente a mensagem. Este módulo percorre os oito tipos de gráfico mais importantes, com exemplos
          reais em SVG, regras claras de quando usar cada um, e uma tabela de síntese final para consulta rápida.
        </p>

        {/* ── Secção 1: Bar Chart ─────────────────────────────────────────── */}
        <div style={S.section}>
          <h2 style={S.h2}>1. Bar Chart — Comparação Categórica</h2>
          <p style={S.p}>
            O gráfico de barras é o cavalo de batalha da visualização de dados. Funciona porque o cérebro humano
            compara comprimentos lineares com grande precisão — muito melhor do que compara ângulos (pie chart)
            ou áreas (bubble chart). É a escolha por defeito sempre que o objectivo é comparar magnitudes entre
            categorias discretas.
          </p>

          <h3 style={S.h3}>Quando usar</h3>
          <p style={S.p}>
            Use barras quando quer responder à pergunta <em>"qual é maior?"</em> entre um conjunto de categorias
            nominais ou ordinais. Funciona até cerca de 15–20 categorias; acima disso, considere uma tabela ou
            um lollipop chart. Ordene sempre as barras do maior para o menor (ou vice-versa) a não ser que a
            ordem das categorias seja intrínseca (ex: meses do ano, faixas etárias).
          </p>

          <h3 style={S.h3}>Variantes principais</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Variante</th>
                  <th style={S.th}>Uso ideal</th>
                  <th style={S.th}>Notas</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Vertical (coluna)', 'Séries temporais curtas, comparação geral', 'Eixo Y deve começar em zero'],
                  ['Horizontal', 'Muitas categorias, labels longos', 'Mais fácil de ler labels de texto; ordenar por valor'],
                  ['Agrupado (grouped)', 'Comparar sub-grupos dentro de cada categoria', 'Máx. 3–4 grupos; acima disso usar small multiples'],
                  ['Empilhado (stacked)', 'Mostrar total + composição', 'Difícil comparar segmentos intermédios'],
                  ['Stacked 100%', 'Mostrar proporções sem importar o total', 'Perde informação de magnitude absoluta'],
                ].map(([v, u, n]) => (
                  <tr key={v}>
                    <td style={{ ...S.td, fontWeight: 600, color }}>{v}</td>
                    <td style={S.td}>{u}</td>
                    <td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Exemplo — Bar Chart Horizontal</p>
            <BarChartSVG />
          </div>

          <div style={S.note}>
            Regra de ouro: o eixo de valores <strong>deve começar em zero</strong>. Truncar o eixo amplia artificialmente
            as diferenças e engana o leitor sobre as magnitudes relativas.
          </div>

          <h3 style={S.h3}>Evitar quando</h3>
          <p style={S.p}>
            Nunca use barras tridimensionais — a perspectiva distorce os comprimentos e torna a comparação imprecisa.
            Evite também barras quando as categorias são contínuas (use histogram) ou quando o número de categorias
            ultrapassa 25 (use lollipop, tabela, ou small multiples).
          </p>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 2: Line Chart ────────────────────────────────────────── */}
        <div style={S.section}>
          <h2 style={S.h2}>2. Line Chart — Séries Temporais</h2>
          <p style={S.p}>
            A linha implica continuidade: ao ligar dois pontos consecutivos, está a afirmar que existe uma transição
            contínua entre eles. Por isso, o line chart é adequado quando a variável do eixo X é ordenada e contínua
            — tipicamente tempo, mas também distância, temperatura, ou qualquer variável quantitativa ordenada.
          </p>

          <h3 style={S.h3}>Quando usar</h3>
          <p style={S.p}>
            Use line chart para mostrar <em>tendências</em> ao longo do tempo, identificar padrões sazonais, ou
            comparar a evolução de duas a sete séries em simultâneo. Para mais de sete séries sobrepostas, a legibilidade
            colapsa — prefira small multiples (gráficos separados na mesma escala) ou destaque apenas as séries de interesse.
          </p>

          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Exemplo — Duas Séries Mensais (Jan–Dez)</p>
            <LineChartSVG />
          </div>

          <h3 style={S.h3}>Erros comuns em line charts</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Erro</th>
                  <th style={S.th}>Consequência</th>
                  <th style={S.th}>Solução</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Ligar pontos não-contínuos', 'Implica transição onde não existe (ex: dados em falta)', 'Quebrar a linha; usar segmento tracejado para dados interpolados'],
                  ['Interpolação linear ingénua', 'Distorce picos e vales entre medições', 'Usar "step" entre medições discretas; ou recolher mais pontos'],
                  ['Mais de 7 linhas sobrepostas', 'Ilegível; efeito "espaguete"', 'Small multiples ou destacar 1–2 séries, cinzentar o resto'],
                  ['Eixo Y não começando em zero', 'Pode ser válido para mostrar variação, mas declare-o claramente', 'Adicionar "Eixo truncado" ou iniciar em zero'],
                  ['Usar linha em categorias nominais', 'A linha implica ordem que não existe entre nomes', 'Usar bar chart para variáveis nominais'],
                ].map(([e, c, s]) => (
                  <tr key={e}>
                    <td style={{ ...S.td, fontWeight: 600, color: '#f97316', fontSize: '0.85rem' }}>{e}</td>
                    <td style={{ ...S.td, fontSize: '0.85rem' }}>{c}</td>
                    <td style={{ ...S.td, color: '#f97316', fontSize: '0.85rem' }}>{s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>
            A distinção entre usar <strong>bar chart</strong> e <strong>line chart</strong> para dados temporais é subtil:
            barras enfatizam cada período como unidade independente (vendas de Janeiro, vendas de Fevereiro, …);
            linhas enfatizam a tendência e a continuidade entre períodos.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 3: Scatter Plot ──────────────────────────────────────── */}
        <div style={S.section}>
          <h2 style={S.h2}>3. Scatter Plot — Relação entre Variáveis</h2>
          <p style={S.p}>
            O scatter plot (diagrama de dispersão) é a ferramenta principal para explorar a relação entre duas variáveis
            contínuas. Cada ponto representa uma observação com coordenadas (X, Y). O padrão resultante revela
            correlações, clusters, outliers, e formas de relação (linear, quadrática, sem relação).
          </p>

          <h3 style={S.h3}>Linha de tendência</h3>
          <p style={S.p}>
            Adicionar uma linha de tendência (regressão linear, LOESS, ou outra) ajuda a quantificar e a tornar
            visível a direcção e a força da relação. A linha tracejada distingue-a visualmente dos dados reais.
            Inclua sempre o coeficiente de correlação (r) ou R² para quantificar a força da relação.
          </p>

          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Exemplo — Altura vs. Peso com Linha de Tendência</p>
            <ScatterPlotSVG />
          </div>

          <h3 style={S.h3}>Problema de overplotting</h3>
          <p style={S.p}>
            Com milhares de pontos sobrepostos, o scatter plot torna-se uma mancha opaca que oculta a distribuição
            real. As soluções dependem do tamanho dos dados:
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Tamanho N</th>
                  <th style={S.th}>Técnica recomendada</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['N < 500', 'Scatter normal; ajustar tamanho dos pontos'],
                  ['500 < N < 5.000', 'Transparência (opacidade 0.1–0.3); jitter para dados discretos'],
                  ['5.000 < N < 50.000', 'Hexbin chart (bins hexagonais com cor = densidade)'],
                  ['N > 50.000', 'KDE 2D (density contours); amostragem aleatória representativa'],
                ].map(([n, t]) => (
                  <tr key={n}>
                    <td style={{ ...S.td, fontWeight: 600, color }}>{n}</td>
                    <td style={S.td}>{t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>
            Correlação não implica causalidade. O scatter plot mostra a relação, não a direcção causal. Documente
            sempre a fonte dos dados e possíveis variáveis de confundimento.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 4: Histogram ─────────────────────────────────────────── */}
        <div style={S.section}>
          <h2 style={S.h2}>4. Histogram — Distribuição de uma Variável</h2>
          <p style={S.p}>
            O histograma agrupa valores contínuos em intervalos (bins) e conta a frequência em cada bin. É a
            primeira ferramenta a usar quando quer perceber a forma de uma distribuição: é simétrica ou assimétrica?
            Unimodal ou bimodal? Existem outliers? Qual é a amplitude?
          </p>

          <h3 style={S.h3}>Histograma vs. Bar Chart</h3>
          <div style={S.highlight}>
            <strong>Distinção fundamental:</strong>
            <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', fontSize: '0.9rem', lineHeight: 1.9, color: 'var(--text-primary)' }}>
              <li><strong>Bar chart:</strong> categorias <em>discretas</em> com espaço entre as barras — cada barra é uma categoria independente.</li>
              <li><strong>Histogram:</strong> variável <em>contínua</em> dividida em bins adjacentes <strong>sem espaço</strong> entre eles — a continuidade dos bins reflecte a continuidade da variável.</li>
            </ul>
          </div>

          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Exemplo — Distribuição de Idades (bins de 5 anos)</p>
            <HistogramSVG />
          </div>

          <h3 style={S.h3}>A escolha do número de bins</h3>
          <p style={S.p}>
            O número de bins é o parâmetro mais crítico do histograma. Demasiados bins criam ruído e fragmentação;
            demasiado poucos escondem a forma real da distribuição. Não existe um número "certo" — experimente
            sempre pelo menos três configurações diferentes.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Regra heurística</th>
                  <th style={S.th}>Fórmula</th>
                  <th style={S.th}>Notas</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Raiz quadrada', 'k = √n', 'Simples; boa para distribuições normais'],
                  ['Sturges', 'k = ⌈log₂(n) + 1⌉', 'Tende a suavizar demasiado para n grande'],
                  ['Freedman-Diaconis', 'h = 2·IQR·n^(−1/3)', 'Robusta a outliers; preferida em análise exploratória'],
                  ['Scott', 'h = 3.49·σ·n^(−1/3)', 'Óptima para distribuições normais'],
                ].map(([r, f, n]) => (
                  <tr key={r}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{r}</td>
                    <td style={{ ...S.td, fontFamily: 'monospace', color }}>{f}</td>
                    <td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>
            Para amostras pequenas (N &lt; 30), o histograma é pouco fiável. Prefira mostrar os pontos individuais
            directamente com um strip plot ou dot plot.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 5: Box Plot ──────────────────────────────────────────── */}
        <div style={S.section}>
          <h2 style={S.h2}>5. Box Plot — Distribuição e Outliers</h2>
          <p style={S.p}>
            O box plot (diagrama de caixa e bigodes) comprime a distribuição num resumo estatístico de cinco números:
            mínimo, Q1, mediana, Q3, e máximo (ajustado por whiskers). É especialmente útil para <em>comparar
            distribuições entre grupos</em> — o que o histograma não faz bem quando há muitos grupos.
          </p>

          <h3 style={S.h3}>Anatomia do Box Plot</h3>
          <div style={S.highlight}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1.5rem', fontSize: '0.9rem', lineHeight: 1.9, color: 'var(--text-primary)' }}>
              <div><strong style={{ color }}>Caixa (box):</strong> vai de Q1 a Q3 — contém os 50% centrais dos dados (IQR).</div>
              <div><strong style={{ color }}>Linha central:</strong> a mediana (Q2) — o valor a meio da distribuição.</div>
              <div><strong style={{ color }}>Whiskers:</strong> estendem-se até Q1 − 1,5·IQR (inferior) e Q3 + 1,5·IQR (superior).</div>
              <div><strong style={{ color: '#f97316' }}>Outliers:</strong> pontos além dos whiskers; representados como círculos individuais.</div>
            </div>
          </div>

          <p style={S.p}>
            O <strong>IQR</strong> (Interquartile Range) é calculado como IQR = Q3 − Q1. Os whiskers cobrem a
            maioria dos dados (até ~99,3% para distribuições normais). Pontos além dos whiskers são assinalados
            individualmente como potenciais outliers — mas não são necessariamente erros; investigar sempre.
          </p>

          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Exemplo — Comparação de 3 Grupos (outliers visíveis no Grupo C)</p>
            <BoxPlotSVG />
          </div>

          <h3 style={S.h3}>Limitações e alternativas</h3>
          <p style={S.p}>
            O box plot esconde a forma interna da distribuição. Dois grupos com o mesmo box plot podem ter
            distribuições muito diferentes (bimodais, assimétricas, etc.). Quando N é suficiente, considere:
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Alternativa</th>
                  <th style={S.th}>Vantagem</th>
                  <th style={S.th}>Quando usar</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Violin plot', 'Mostra a forma completa da distribuição (KDE)', 'N > 50; distribuições complexas ou bimodais'],
                  ['Strip plot / Jitter', 'Mostra cada ponto individualmente', 'N < 100; distribuições simples'],
                  ['Box + Strip combinado', 'Resumo + dados individuais', 'N entre 20 e 150; transparência nos pontos'],
                  ['Beeswarm plot', 'Pontos sem sobreposição', 'N moderado; comparar grupos de tamanho similar'],
                ].map(([a, v, q]) => (
                  <tr key={a}>
                    <td style={{ ...S.td, fontWeight: 600, color }}>{a}</td>
                    <td style={S.td}>{v}</td>
                    <td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{q}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 6: Pie / Donut ───────────────────────────────────────── */}
        <div style={S.section}>
          <h2 style={S.h2}>6. Pie Chart e Donut — Composição</h2>
          <p style={S.p}>
            O pie chart é o gráfico mais amado pelo público geral e o mais criticado pelos especialistas em
            visualização. O problema não é estético — é cognitivo: o cérebro humano compara ângulos e áreas
            com muito menos precisão do que comprimentos lineares. Diferenças pequenas entre segmentos são
            praticamente imperceptíveis num pie.
          </p>

          <h3 style={S.h3}>Quando o pie chart é aceitável</h3>
          <div style={S.highlight}>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.9, color: 'var(--text-primary)' }}>
              Use pie chart <strong>apenas</strong> quando todas estas condições se verificam simultaneamente:
            </p>
            <ol style={{ margin: '0.5rem 0 0', paddingLeft: '1.4rem', fontSize: '0.9rem', lineHeight: 1.9, color: 'var(--text-primary)' }}>
              <li>Máximo de <strong>5 segmentos</strong> (idealmente 3–4).</li>
              <li>As proporções são <strong>suficientemente diferentes</strong> para serem visualmente distinguíveis.</li>
              <li>A pergunta central é <strong>"qual é o maior?"</strong> e não "qual é a diferença exacta?".</li>
              <li>O todo (100%) tem significado relevante para a narrativa.</li>
            </ol>
          </div>

          <p style={S.p}>
            O <strong>donut chart</strong> é uma variante do pie com o centro removido, o que permite colocar
            um valor ou label central. Tem a mesma limitação cognitiva, mas é visualmente mais moderno e o
            espaço central pode comunicar informação adicional útil (ex: total, KPI principal).
          </p>

          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Exemplo — Donut Chart (Quota de Mercado de Browsers)</p>
            <DonutChartSVG />
          </div>

          <h3 style={S.h3}>Alternativas superiores ao pie chart</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Alternativa</th>
                  <th style={S.th}>Vantagem vs. pie</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Bar chart horizontal ordenado', 'Comparação linear directa; qualquer número de categorias'],
                  ['Stacked bar 100%', 'Mantém noção de proporção; permite comparar entre grupos'],
                  ['Waffle chart (10×10)', 'Mais intuitivo para audiências não-técnicas; cada quadrado = 1%'],
                  ['Treemap', 'Adequado para hierarquias com muitas sub-categorias'],
                ].map(([a, v]) => (
                  <tr key={a}>
                    <td style={{ ...S.td, fontWeight: 600, color }}>{a}</td>
                    <td style={S.td}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>
            Se os seus valores são 33%, 34%, e 33%, o pie chart é inútil — as fatias são indistinguíveis. Use
            sempre um bar chart quando as proporções são próximas.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 7: Heatmap ───────────────────────────────────────────── */}
        <div style={S.section}>
          <h2 style={S.h2}>7. Heatmap — Matriz de Valores</h2>
          <p style={S.p}>
            O heatmap codifica valores numéricos em cor numa grelha bidimensional. É particularmente poderoso
            para revelar padrões em matrizes: correlações entre variáveis, actividade ao longo do tempo
            (calendário), confusion matrices em machine learning, ou qualquer dados com estrutura de linhas × colunas.
          </p>

          <h3 style={S.h3}>Casos de uso principais</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Caso de uso</th>
                  <th style={S.th}>Eixo X</th>
                  <th style={S.th}>Eixo Y</th>
                  <th style={S.th}>Cor</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Matriz de correlação', 'Variável numérica', 'Variável numérica', 'Divergente (−1 a +1)'],
                  ['Calendário de actividade', 'Semana / dia da semana', 'Mês / hora', 'Sequencial (0 a max)'],
                  ['Confusion matrix (ML)', 'Classe prevista', 'Classe real', 'Sequencial; diagonal = acertos'],
                  ['Dados temporais × categorias', 'Tempo (hora, mês)', 'Categoria', 'Sequencial ou divergente'],
                ].map(([c, x, y, cor]) => (
                  <tr key={c}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{c}</td>
                    <td style={{ ...S.td, fontSize: '0.85rem' }}>{x}</td>
                    <td style={{ ...S.td, fontSize: '0.85rem' }}>{y}</td>
                    <td style={{ ...S.td, fontSize: '0.85rem', color }}>{cor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Exemplo — Matriz de Correlação entre Variáveis Imobiliárias</p>
            <HeatmapSVG />
          </div>

          <h3 style={S.h3}>Escolha da paleta de cores</h3>
          <p style={S.p}>
            A paleta de cor é a decisão mais importante no heatmap. Use:
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Tipo de paleta</th>
                  <th style={S.th}>Quando usar</th>
                  <th style={S.th}>Exemplos</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Sequencial', 'Valores só positivos (0 a max)', 'Blues, Oranges, Viridis, Plasma'],
                  ['Divergente', 'Valores com ponto neutro significativo (ex: −1 a +1)', 'RdBu, PiYG, coolwarm'],
                  ['Qualitativa', 'Categorias sem ordem', 'Set1, Pastel1, tab10 — não usar em heatmaps numéricos'],
                ].map(([t, q, e]) => (
                  <tr key={t}>
                    <td style={{ ...S.td, fontWeight: 600, color }}>{t}</td>
                    <td style={S.td}>{q}</td>
                    <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>
            Nunca use a paleta rainbow (jet) — não é perceptualmente uniforme, cria fronteiras artificiais e
            é inacessível para pessoas com daltonismo. Use sempre paletas perceptualmente uniformes (Viridis,
            Cividis, Magma) ou divergentes bem calibradas.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 8: Area Chart ─────────────────────────────────────────── */}
        <div style={S.section}>
          <h2 style={S.h2}>8. Área Chart — Composição ao Longo do Tempo</h2>
          <p style={S.p}>
            O area chart é essencialmente um line chart com a área abaixo da linha preenchida. Na versão empilhada
            (stacked area), múltiplas séries são acumuladas verticalmente, permitindo visualizar simultaneamente
            a evolução do total e a composição interna. É especialmente útil quando quer mostrar como a proporção
            de cada componente muda ao longo do tempo.
          </p>

          <h3 style={S.h3}>Stacked area vs. Line chart sobreposto</h3>
          <div style={S.highlight}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-primary)' }}>
              <div>
                <strong style={{ color }}>Stacked area — usar quando:</strong>
                <ul style={{ margin: '0.4rem 0 0', paddingLeft: '1.2rem' }}>
                  <li>Quer mostrar o total e as partes</li>
                  <li>Comparar série de baixo é suficiente</li>
                  <li>Poucas séries (≤ 4–5)</li>
                </ul>
              </div>
              <div>
                <strong style={{ color: '#f97316' }}>Line chart — preferir quando:</strong>
                <ul style={{ margin: '0.4rem 0 0', paddingLeft: '1.2rem' }}>
                  <li>Quer comparar as séries entre si</li>
                  <li>Os valores absolutos são o foco</li>
                  <li>Mais de 2 séries a comparar directamente</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Exemplo — Stacked Area Chart (Mobile / Desktop / Tablet, 6 Trimestres)</p>
            <AreaChartSVG />
          </div>

          <h3 style={S.h3}>Variante: Stream Graph</h3>
          <p style={S.p}>
            O stream graph é uma variante do stacked area centrada num eixo central (em vez de baseline em zero),
            criando uma forma orgânica simétrica. É visualmente apelativo mas difícil de ler com precisão — adequado
            para comunicação e apresentações públicas onde o padrão geral é mais importante do que os valores exactos.
          </p>

          <div style={S.note}>
            Nunca use area chart não-empilhado com múltiplas séries sobrepostas — as áreas cobrem-se mutuamente
            e o gráfico torna-se incompreensível. Para comparar séries absolutas, use sempre line chart.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Síntese do Módulo ────────────────────────────────────────────── */}
        <div style={S.section}>
          <h2 style={S.h2}> 9. Síntese do Módulo </h2>
          <p style={S.p}>
            A tabela seguinte resume os oito tipos de gráfico abordados neste módulo, com o tipo de dado adequado,
            o objectivo comunicativo, e as situações a evitar. Guarde-a como referência para as suas próximas
            visualizações.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Tipo de Gráfico</th>
                  <th style={S.th}>Tipo de Dado</th>
                  <th style={S.th}>Objectivo / Pergunta</th>
                  <th style={S.th}>Evitar quando</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Bar Chart', 'Categórico + numérico', '"Qual categoria é maior?" Comparação de magnitudes', 'Mais de 20 categorias; nunca 3D'],
                  ['Line Chart', 'Temporal / ordenado + numérico', '"Qual é a tendência ao longo do tempo?"', 'Variável X é nominal; mais de 7 séries sobrepostas'],
                  ['Scatter Plot', 'Dois numéricos contínuos', '"Existe correlação entre X e Y?"', 'N > 50.000 sem anti-overplotting; variáveis categóricas'],
                  ['Histogram', 'Uma variável contínua', '"Qual a forma da distribuição?"', 'N < 30; variáveis discretas (usar bar chart)'],
                  ['Box Plot', 'Numérico + categórico (grupos)', '"Como se comparam as distribuições?"', 'N < 20 por grupo (mostrar pontos directamente)'],
                  ['Pie / Donut', 'Partes de um todo (proporções)', '"Qual é a fatia maior do total?"', 'Mais de 5 categorias; diferenças pequenas entre valores'],
                  ['Heatmap', 'Dois categóricos + numérico', '"Onde estão os padrões na matriz?"', 'Valores sem estrutura de grelha; paletas rainbow'],
                  ['Área Empilhada', 'Temporal + múltiplas séries', '"Como evolui a composição ao longo do tempo?"', 'Comparação precisa entre séries; mais de 5 séries'],
                ].map(([t, d, o, e]) => (
                  <tr key={t}>
                    <td style={{ ...S.td, fontWeight: 700, color, whiteSpace: 'nowrap' }}>{t}</td>
                    <td style={{ ...S.td, fontSize: '0.85rem' }}>{d}</td>
                    <td style={{ ...S.td, fontSize: '0.85rem' }}>{o}</td>
                    <td style={{ ...S.td, fontSize: '0.85rem', color: '#f97316' }}>{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Pontos-chave ─────────────────────────────────────────────────── */}
        <div style={S.highlight}>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 2 }}>
            <li>Comece sempre pela <strong>pergunta</strong>, não pelo gráfico: comparação → barras; tendência → linha; relação → scatter; distribuição → histogram/boxplot; composição → empilhado/donut.</li>
            <li>O eixo de valores em bar charts e histogramas <strong>deve começar em zero</strong>; em line charts pode ser truncado mas declare-o explicitamente.</li>
            <li>Pie charts têm um uso muito restrito: máx. 5 segmentos, diferenças visíveis, único grupo. Em caso de dúvida, use um bar chart horizontal ordenado.</li>
            <li>Linhas implicam continuidade — nunca ligue pontos de categorias nominais com uma linha.</li>
            <li>Scatter plots com N grande sofrem de overplotting — use transparência, hexbin, ou KDE 2D conforme o tamanho dos dados.</li>
            <li>A escolha da paleta de cor no heatmap é tão importante quanto a estrutura do gráfico: <strong>sequencial</strong> para valores positivos, <strong>divergente</strong> para valores com ponto neutro.</li>
            <li>Box plots escondem a forma interna da distribuição — complemente com violin ou strip plot quando a forma importa.</li>
            <li>Stacked area mostra composição + total ao longo do tempo; para comparar séries individualmente, prefira sempre line chart.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
