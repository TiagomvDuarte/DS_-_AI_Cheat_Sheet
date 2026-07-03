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

/* ── SVG 1: 3 Actos como blocos sequenciais ── */
const TresActosSVG = () => (
  <svg viewBox="0 0 500 120" style={{ width: '100%', display: 'block' }}>
    {/* Bloco 1 — Contexto */}
    <rect x="10" y="20" width="130" height="80" rx="10" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1.5" />
    <text x="75" y="52" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">CONTEXTO</text>
    <text x="75" y="68" textAnchor="middle" fontSize="9" fill="#64748b">O que sabemos</text>
    <text x="75" y="82" textAnchor="middle" fontSize="9" fill="#64748b">e quem é a audiência</text>
    {/* Seta 1→2 */}
    <path d="M142 60 L168 60" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr)" />
    <polygon points="168,55 178,60 168,65" fill="#94a3b8" />
    {/* Bloco 2 — Conflito */}
    <rect x="180" y="20" width="130" height="80" rx="10" fill={`${color}15`} stroke={color} strokeWidth="1.5" />
    <text x="245" y="52" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>CONFLITO</text>
    <text x="245" y="68" textAnchor="middle" fontSize="9" fill="#64748b">O problema / insight</text>
    <text x="245" y="82" textAnchor="middle" fontSize="9" fill="#64748b">que cria urgência</text>
    {/* Seta 2→3 */}
    <path d="M312 60 L338 60" fill="none" stroke="#94a3b8" strokeWidth="2" />
    <polygon points="338,55 348,60 338,65" fill="#94a3b8" />
    {/* Bloco 3 — Resolução */}
    <rect x="350" y="20" width="130" height="80" rx="10" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1.5" />
    <text x="415" y="52" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">RESOLUÇÃO</text>
    <text x="415" y="68" textAnchor="middle" fontSize="9" fill="#64748b">Recomendação</text>
    <text x="415" y="82" textAnchor="middle" fontSize="9" fill="#64748b">e acção a tomar</text>
  </svg>
);

/* ── SVG 2: Line chart com anotação em Outubro ── */
const AnnotatedLineChartSVG = () => {
  const meses = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  const vals =  [42,   38,   45,   50,   47,   53,   49,   44,   51,   91,   55,   60];
  const W = 520, H = 250, padL = 40, padR = 20, padT = 70, padB = 40;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const maxV = 100, minV = 0;
  const cx = (i) => padL + (i / (meses.length - 1)) * chartW;
  const cy = (v) => padT + chartH - ((v - minV) / (maxV - minV)) * chartH;

  const pts = vals.map((v, i) => `${cx(i)},${cy(v)}`).join(' ');

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', display: 'block', overflow: 'visible' }}>
      {/* Eixos */}
      <line x1={padL} y1={padT} x2={padL} y2={padT + chartH} stroke="#e2e8f0" strokeWidth="1" />
      <line x1={padL} y1={padT + chartH} x2={padL + chartW} y2={padT + chartH} stroke="#e2e8f0" strokeWidth="1" />
      {/* Linha cinzenta para todos os meses (polyline completa em cinzento) */}
      <polyline points={pts} fill="none" stroke="#cbd5e1" strokeWidth="2" />
      {/* Pontos cinzentos */}
      {vals.map((v, i) => i !== 9 && (
        <circle key={i} cx={cx(i)} cy={cy(v)} r="3.5" fill="#cbd5e1" />
      ))}
      {/* Ponto vermelho — Outubro (índice 9) */}
      <circle cx={cx(9)} cy={cy(vals[9])} r="6" fill={color} />
      {/* Segmento de linha vermelho Set→Out→Nov */}
      <line x1={cx(8)} y1={cy(vals[8])} x2={cx(9)} y2={cy(vals[9])} stroke={color} strokeWidth="2.5" />
      <line x1={cx(9)} y1={cy(vals[9])} x2={cx(10)} y2={cy(vals[10])} stroke={color} strokeWidth="2.5" />
      {/* Anotação */}
      <line x1={cx(9) + 8} y1={cy(vals[9]) - 8} x2={cx(9) + 55} y2={cy(vals[9]) - 42} stroke={color} strokeWidth="1.5" />
      <rect x={cx(9) + 54} y={cy(vals[9]) - 62} width="118" height="26" rx="5" fill={`${color}15`} stroke={color} strokeWidth="1" />
      <text x={cx(9) + 113} y={cy(vals[9]) - 45} textAnchor="middle" fontSize="9.5" fontWeight="700" fill={color}>Campanha Black Friday</text>
      {/* Labels eixo X */}
      {meses.map((m, i) => (
        <text key={m} x={cx(i)} y={padT + chartH + 16} textAnchor="middle" fontSize="9" fill={i === 9 ? color : '#94a3b8'} fontWeight={i === 9 ? '700' : '400'}>{m}</text>
      ))}
      {/* Label eixo Y */}
      <text x="8" y={padT + chartH / 2} textAnchor="middle" fontSize="9" fill="#94a3b8" transform={`rotate(-90,8,${padT + chartH / 2})`}>Vendas (k€)</text>
    </svg>
  );
};

/* ── SVG 3: Mockup de dashboard em grid ── */
const DashboardMockupSVG = () => (
  <svg viewBox="0 0 560 360" style={{ width: '100%', display: 'block' }}>
    {/* Fundo */}
    <rect x="0" y="0" width="560" height="360" rx="12" fill="var(--bg-primary,#f8fafc)" stroke="#e2e8f0" strokeWidth="1" />
    {/* Header */}
    <rect x="0" y="0" width="560" height="36" rx="12" fill="rgba(249,115,22,0.06)" />
    <rect x="0" y="24" width="560" height="12" fill="rgba(249,115,22,0.06)" />
    <text x="20" y="22" fontSize="11" fontWeight="700" fill="#fff">Dashboard de Vendas — Q4 2024</text>
    <text x="460" y="22" fontSize="9" fill="#94a3b8">Actualizado: 14/06</text>
    {/* KPI Card 1 */}
    <rect x="12" y="48" width="164" height="72" rx="8" fill="#c2410c" />
    <text x="94" y="70" textAnchor="middle" fontSize="10" fill="#fff">Receita Total</text>
    <text x="94" y="95" textAnchor="middle" fontSize="22" fontWeight="800" fill="#fff">€2.4M</text>
    <text x="94" y="112" textAnchor="middle" fontSize="9" fill="#fde8d8">▲ +12% vs mês anterior</text>
    {/* KPI Card 2 */}
    <rect x="188" y="48" width="164" height="72" rx="8" fill="rgba(249,115,22,0.25)" />
    <text x="270" y="70" textAnchor="middle" fontSize="10" fill="#fff">Novos Clientes</text>
    <text x="270" y="95" textAnchor="middle" fontSize="22" fontWeight="800" fill="#fff">1 847</text>
    <text x="270" y="112" textAnchor="middle" fontSize="9" fill="#fde8d8">▲ +7% vs mês anterior</text>
    {/* KPI Card 3 */}
    <rect x="364" y="48" width="184" height="72" rx="8" fill="#f97316" />
    <text x="456" y="70" textAnchor="middle" fontSize="10" fill="#fff">Taxa de Conversão</text>
    <text x="456" y="95" textAnchor="middle" fontSize="22" fontWeight="800" fill="#fff">3.8%</text>
    <text x="456" y="112" textAnchor="middle" fontSize="9" fill="#fde8d8">▼ −0.4pp vs mês anterior</text>
    {/* Gráfico de linha largo */}
    <rect x="12" y="132" width="536" height="112" rx="8" fill="var(--bg-secondary,#f1f5f9)" stroke="#e2e8f0" strokeWidth="1" />
    <text x="24" y="150" fontSize="10" fontWeight="700" fill="#475569">Evolução de Receita — 12 meses</text>
    {(() => {
      const lv = [38,42,36,48,52,45,60,55,63,70,68,80];
      const lx = (i) => 24 + i * (500/11);
      const ly = (v) => 230 - ((v-30)/55)*80;
      const lpts = lv.map((v,i) => `${lx(i)},${ly(v)}`).join(' ');
      return (
        <>
          <polyline points={lpts} fill="none" stroke="#f97316" strokeWidth="2" />
          {lv.map((v,i) => <circle key={i} cx={lx(i)} cy={ly(v)} r="3" fill="#f97316" />)}
        </>
      );
    })()}
    {/* Gráfico de barras (esq) */}
    <rect x="12" y="256" width="264" height="92" rx="8" fill="var(--bg-secondary,#f1f5f9)" stroke="#e2e8f0" strokeWidth="1" />
    <text x="24" y="274" fontSize="10" fontWeight="700" fill="#475569">Vendas por Canal</text>
    {[['Online','#f97316',80],['Loja','#f97316',55],['Parceiros','#f97316',35],['Telefone','#f97316',20]].map(([lbl,clr,pct],i) => (
      <g key={lbl}>
        <rect x="24" y={282 + i*16} width={(pct/100)*220} height="11" rx="3" fill={clr} opacity="0.8" />
        <text x="250" y={282 + i*16 + 9} fontSize="8" fill="#64748b" textAnchor="end">{lbl} {pct}%</text>
      </g>
    ))}
    {/* Donut (dir) */}
    <rect x="288" y="256" width="260" height="92" rx="8" fill="var(--bg-secondary,#f1f5f9)" stroke="#e2e8f0" strokeWidth="1" />
    <text x="300" y="274" fontSize="10" fontWeight="700" fill="#475569">Mix de Produto</text>
    <circle cx="390" cy="300" r="28" fill="none" stroke="#f97316" strokeWidth="14" strokeDasharray="53 123" strokeDashoffset="0" />
    <circle cx="390" cy="300" r="28" fill="none" stroke="#f97316" strokeWidth="14" strokeDasharray="37 139" strokeDashoffset="-53" />
    <circle cx="390" cy="300" r="28" fill="none" stroke="#f97316" strokeWidth="14" strokeDasharray="33 143" strokeDashoffset="-90" />
    <circle cx="390" cy="300" r="28" fill="none" stroke="#ca8a04" strokeWidth="14" strokeDasharray="53 123" strokeDashoffset="-123" />
    {[['Software','#f97316',430],['Hardware','#f97316',452],['Serviços','#f97316',474],['Suporte','#f97316',496]].map(([lbl,clr,y]) => (
      <g key={lbl}>
        <rect x="432" y={y-8} width="8" height="8" rx="2" fill={clr} />
        <text x="444" y={y} fontSize="8" fill="#64748b">{lbl}</text>
      </g>
    ))}
  </svg>
);

/* ── SVG 4: 3 KPI Cards com sparkline ── */
const KpiSparklineSVG = () => {
  const cards = [
    { label: 'Receita', value: '€2.4M', delta: '+12%', up: true, pts: [30,38,35,42,40,48,44,52,49,55,51,60] },
    { label: 'Clientes', value: '1 847', delta: '+7%',  up: true, pts: [60,55,58,52,54,50,48,52,46,44,42,40] },
    { label: 'Churn',   value: '2.1%',  delta: '−0.3pp', up: false, pts: [20,24,22,28,25,30,27,32,29,35,31,38] },
  ];
  const sparkX = (i) => 10 + i * (140/11);
  const sparkY = (v, arr) => {
    const mn = Math.min(...arr), mx = Math.max(...arr);
    return 90 - ((v - mn) / (mx - mn + 1)) * 40;
  };
  return (
    <svg viewBox="0 0 560 140" style={{ width: '100%', display: 'block' }}>
      {cards.map((c, ci) => {
        const ox = ci * 186 + 4;
        const spts = c.pts.map((v,i) => `${ox + sparkX(i)},${sparkY(v, c.pts)}`).join(' ');
        const clr = c.up ? '#f97316' : color;
        return (
          <g key={c.label}>
            <rect x={ox} y="4" width="178" height="132" rx="10" fill="var(--bg-secondary,#f8fafc)" stroke="#e2e8f0" strokeWidth="1" />
            <text x={ox + 12} y="26" fontSize="10" fill="#64748b">{c.label}</text>
            <text x={ox + 12} y="58" fontSize="26" fontWeight="800" fill="var(--text-primary,#0f172a)">{c.value}</text>
            <text x={ox + 12} y="76" fontSize="10" fontWeight="700" fill={clr}>{c.up ? '▲' : '▼'} {c.delta}</text>
            <polyline points={spts} fill="none" stroke={clr} strokeWidth="2" opacity="0.9" />
            {c.pts.map((v, i) => (
              <circle key={i} cx={ox + sparkX(i)} cy={sparkY(v, c.pts)} r="2" fill={clr} opacity="0.7" />
            ))}
          </g>
        );
      })}
    </svg>
  );
};

/* ── SVG 5: Waterfall chart ── */
const WaterfallSVG = () => {
  const bars = [
    { label: 'Início',      val: 100, color: '#94a3b8', type: 'abs' },
    { label: 'Vendas',      val:  45, color: '#f97316', type: 'pos' },
    { label: 'Devoluções',  val: -12, color: color,     type: 'neg' },
    { label: 'Serviços',    val:  28, color: '#f97316', type: 'pos' },
    { label: 'Custos',      val: -35, color: color,     type: 'neg' },
    { label: 'Total',       val: 126, color: '#f97316', type: 'abs' },
  ];
  const W = 500, padL = 50, padR = 20, padT = 30, padB = 50;
  const chartW = W - padL - padR;
  const chartH = 260 - padT - padB;
  const barW = chartW / bars.length - 12;
  const maxV = 180;
  const toY = (v) => padT + chartH - (v / maxV) * chartH;

  // compute running base
  let running = 0;
  const computed = bars.map((b) => {
    if (b.type === 'abs') {
      const base = 0;
      const top = b.val;
      running = b.val;
      return { ...b, base, top };
    } else if (b.type === 'pos') {
      const base = running;
      running += b.val;
      return { ...b, base, top: running };
    } else {
      const top = running;
      running += b.val;
      return { ...b, base: running, top };
    }
  });

  return (
    <svg viewBox={`0 0 ${W} 260`} style={{ width: '100%', display: 'block' }}>
      {/* Linha de base */}
      <line x1={padL} y1={toY(0)} x2={padL + chartW} y2={toY(0)} stroke="#e2e8f0" strokeWidth="1" />
      {/* Grid lines */}
      {[50,100,150].map(g => (
        <g key={g}>
          <line x1={padL} y1={toY(g)} x2={padL + chartW} y2={toY(g)} stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
          <text x={padL - 6} y={toY(g) + 4} textAnchor="end" fontSize="8" fill="#94a3b8">{g}k</text>
        </g>
      ))}
      {computed.map((b, i) => {
        const bx = padL + i * (chartW / bars.length) + 6;
        const by = toY(b.top);
        const bh = Math.abs(toY(b.base) - toY(b.top));
        // connector line to next bar
        const nextBase = computed[i + 1]?.base;
        const nx = bx + barW + 12;
        return (
          <g key={b.label}>
            <rect x={bx} y={by} width={barW} height={bh} rx="3" fill={b.color} opacity="0.9" />
            <text x={bx + barW / 2} y={by - 6} textAnchor="middle" fontSize="9" fontWeight="700" fill={b.color}>
              {b.val > 0 ? '+' : ''}{b.val}k
            </text>
            {nextBase !== undefined && (
              <line x1={bx + barW} y1={toY(b.type === 'neg' ? b.top : (b.type === 'abs' ? b.val : b.top))} x2={nx} y2={toY(b.type === 'neg' ? b.top : (b.type === 'abs' ? b.val : b.top))} stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
            )}
            <text x={bx + barW / 2} y={toY(0) + 16} textAnchor="middle" fontSize="9" fill="#475569">{b.label}</text>
          </g>
        );
      })}
      <text x={padL + chartW / 2} y="14" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">Waterfall — Contribuições para o Resultado (k€)</text>
    </svg>
  );
};

/* ── SVG 6a: Grafo node-link ── */
const GrafoSVG = () => {
  const nodes = [
    { id: 0, x: 80,  y: 60,  label: 'Produto A' },
    { id: 1, x: 200, y: 40,  label: 'Produto B' },
    { id: 2, x: 310, y: 80,  label: 'Produto C' },
    { id: 3, x: 120, y: 160, label: 'Canal 1' },
    { id: 4, x: 240, y: 150, label: 'Canal 2' },
    { id: 5, x: 340, y: 190, label: 'Canal 3' },
    { id: 6, x: 80,  y: 250, label: 'Região N' },
    { id: 7, x: 280, y: 260, label: 'Região S' },
  ];
  const edges = [
    [0,3,4],[0,4,2],[1,3,3],[1,4,5],[1,2,2],[2,4,3],[2,5,4],
    [3,6,5],[3,7,2],[4,7,4],[5,7,3],
  ];
  return (
    <svg viewBox="0 0 400 300" style={{ width: '100%', display: 'block' }}>
      {edges.map(([a,b,w],i) => (
        <line key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="#94a3b8" strokeWidth={w * 0.7} opacity="0.6"
        />
      ))}
      {nodes.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="18" fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5" />
          <circle cx={n.x} cy={n.y} r="18" fill={`${color}18`} stroke="none" />
          <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--text-primary,#1e293b)">{n.label}</text>
        </g>
      ))}
    </svg>
  );
};

/* ── SVG 6b: Sankey simplificado ── */
const SankeySVG = () => {
  const origens = [
    { label: 'Directo',   h: 80, y: 20,  color: '#f97316' },
    { label: 'Orgânico',  h: 60, y: 110, color: '#f97316' },
    { label: 'Pago',      h: 50, y: 180, color: '#f97316' },
  ];
  const destinos = [
    { label: 'Compra',   h: 70, y: 30,  color: '#f97316' },
    { label: 'Registo',  h: 80, y: 110, color: '#f97316' },
    { label: 'Abandono', h: 40, y: 200, color: color },
  ];
  // ribbons: [origemIdx, destinoIdx, espessura]
  const ribbons = [
    [0, 0, 30], [0, 1, 35], [0, 2, 15],
    [1, 0, 25], [1, 1, 22], [1, 2, 13],
    [2, 1, 20], [2, 2, 14], [2, 0, 16],
  ];
  const ox = 70, bw = 18, dox = 452;
  return (
    <svg viewBox="0 0 580 260" style={{ width: '100%', display: 'block' }}>
      {/* Barras de origem */}
      {origens.map((o) => (
        <g key={o.label}>
          <rect x={ox} y={o.y} width={bw} height={o.h} rx="3" fill={o.color} opacity="0.9" />
          <text x={ox - 8} y={o.y + o.h / 2 + 4} textAnchor="end" fontSize="9" fill="#94a3b8">{o.label}</text>
        </g>
      ))}
      {/* Ribbons (bezier) */}
      {ribbons.map(([oi, di, thick], idx) => {
        const o = origens[oi];
        const d = destinos[di];
        const y1 = o.y + o.h / 2;
        const y2 = d.y + d.h / 2;
        const mx = (ox + bw + dox) / 2;
        return (
          <path key={idx}
            d={`M ${ox + bw} ${y1 - thick / 2} C ${mx} ${y1 - thick / 2}, ${mx} ${y2 - thick / 2}, ${dox} ${y2 - thick / 2}
               L ${dox} ${y2 + thick / 2} C ${mx} ${y2 + thick / 2}, ${mx} ${y1 + thick / 2}, ${ox + bw} ${y1 + thick / 2} Z`}
            fill={origens[oi].color} opacity="0.25"
          />
        );
      })}
      {/* Barras de destino */}
      {destinos.map((d) => (
        <g key={d.label}>
          <rect x={dox} y={d.y} width={bw} height={d.h} rx="3" fill={d.color} opacity="0.9" />
          <text x={dox + bw + 8} y={d.y + d.h / 2 + 4} fontSize="9" fill="#94a3b8">{d.label}</text>
        </g>
      ))}
    </svg>
  );
};

/* ── SVG 7: Antes / Depois ── */
const AntesDepoisSVG = () => (
  <svg viewBox="0 0 560 200" style={{ width: '100%', display: 'block' }}>
    {/* Painel ANTES */}
    <rect x="4" y="4" width="258" height="192" rx="8" fill="var(--bg-secondary,#f8fafc)" stroke="#e2e8f0" strokeWidth="1" />
    <text x="133" y="22" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>ANTES — Má prática</text>
    {/* 3D bars exageradas, múltiplas cores, sem título */}
    {[['Jan',40,'#fbbf24'],['Fev',65,'#facc15'],['Mar',30,'#f97316'],['Abr',80,'#f97316'],['Mai',55,'#fbbf24']].map(([m,h,c],i) => (
      <g key={m}>
        <rect x={20 + i*46} y={160-h} width="30" height={h} fill={c} />
        <rect x={22 + i*46} y={158-h} width="30" height={h} fill={c} opacity="0.5" />
        <rect x={20 + i*46} y={158-h} width="32" height="4" fill={c} opacity="0.7" />
        <text x={35 + i*46} y="175" textAnchor="middle" fontSize="8" fill="#94a3b8">{m}</text>
      </g>
    ))}
    <text x="133" y="192" textAnchor="middle" fontSize="7" fill="#94a3b8">Fonte: ??? | Gráfico de barras</text>

    {/* Separador */}
    <text x="280" y="106" textAnchor="middle" fontSize="18" fill="#94a3b8">→</text>

    {/* Painel DEPOIS */}
    <rect x="298" y="4" width="258" height="192" rx="8" fill="var(--bg-secondary,#f8fafc)" stroke={`${color}50`} strokeWidth="1.5" />
    <text x="427" y="22" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">DEPOIS — Boa prática</text>
    <text x="427" y="36" textAnchor="middle" fontSize="8" fill="#475569">Vendas cresceram 100% de Jan a Abr</text>
    {[['Jan',40],['Fev',65],['Mar',30],['Abr',80],['Mai',55]].map(([m,h],i) => (
      <g key={m}>
        <rect x={314 + i*46} y={160-h} width="30" height={h} fill={i === 3 ? color : '#cbd5e1'} rx="2" />
        {i === 3 && <text x={329 + i*46} y={155-h} textAnchor="middle" fontSize="8" fontWeight="700" fill={color}>Pico</text>}
        <text x={329 + i*46} y="175" textAnchor="middle" fontSize="8" fill="#64748b">{m}</text>
      </g>
    ))}
    <line x1="314" y1="160" x2="544" y2="160" stroke="#e2e8f0" strokeWidth="1" />
    <text x="427" y="192" textAnchor="middle" fontSize="7" fill="#94a3b8">Fonte: CRM interno, 2024</text>
  </svg>
);

export default function DV8() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/dv" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>MÓDULO 08</div>
        <h1 style={S.h1}>Storytelling, Dashboards &amp; Boas Práticas</h1>
        <p style={S.lead}>
          Uma visualização tecnicamente perfeita pode falhar completamente se não comunicar a mensagem certa à audiência certa.
          Storytelling com dados é a competência que transforma análise em decisão — a diferença entre um gráfico que impressiona
          e um que convence. Neste módulo abordamos narrativa, anotações, layout de dashboards, KPI cards, gráficos de desvio,
          visualização de redes e um checklist completo de boas práticas.
        </p>

        {/* ══════════════════════════════════════════════ */}
        {/* SECÇÃO 1 — Narrativa com Dados               */}
        {/* ══════════════════════════════════════════════ */}
        <div style={S.section}>
          <h2 style={S.h2}>1. Narrativa com Dados — Data Storytelling</h2>
          <p style={S.p}>
            Cole Nussbaumer Knaflic popularizou a ideia de que os dados não falam por si próprios — precisam de um narrador.
            A estrutura clássica de três actos, conhecida da dramaturgia, aplica-se directamente à comunicação de dados:
            começamos por estabelecer o contexto (o que sabemos e quem é a audiência), passamos para o conflito (o problema
            ou insight que cria urgência) e terminamos com a resolução (a recomendação clara e accionável).
          </p>
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', textAlign: 'center', fontSize: '0.9rem' }}>
              Estrutura Narrativa em 3 Actos
            </p>
            <TresActosSVG />
          </div>

          <h3 style={S.h3}>Pirâmide de Comunicação — Conclusão Primeiro</h3>
          <p style={S.p}>
            Para audiências executivas, a estrutura óptima inverte a lógica académica: a conclusão vem primeiro, a evidência
            depois. Esta abordagem, chamada <em>Pirâmide de Minto</em>, parte do pressuposto de que os decisores têm pouco
            tempo e querem saber imediatamente "o que devo fazer" — não "como chegámos aqui".
          </p>
          <div style={S.highlight}>
            <strong>Pirâmide de Minto aplicada a dados:</strong>
            <ol style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', lineHeight: 2, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
              <li><strong>Nível 1 — Resposta:</strong> "Devemos expandir para o mercado Norte em Q1."</li>
              <li><strong>Nível 2 — Argumentos:</strong> Três razões: crescimento 38%, menor concorrência, margem superior.</li>
              <li><strong>Nível 3 — Evidência:</strong> Dados de mercado, análise de concorrência, modelação financeira.</li>
            </ol>
          </div>

          <h3 style={S.h3}>Exploração vs. Explicação</h3>
          <p style={S.p}>
            Existe uma distinção fundamental entre dois modos de trabalho com dados. A <strong>exploração</strong> é o processo
            privado — o analista experimenta dezenas de gráficos, testa hipóteses, descobre padrões. A maioria desses gráficos
            nunca deve sair do caderno de trabalho. A <strong>explicação</strong> é o produto final: selecciona os dois ou três
            gráficos que melhor suportam a mensagem e elimina todo o resto.
          </p>
          <div style={S.note}>
            Regra prática: se o gráfico requer mais de 10 segundos para ser compreendido por alguém fora da equipa, é um gráfico
            de exploração, não de explicação. Simplifique ou substitua.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ══════════════════════════════════════════════ */}
        {/* SECÇÃO 2 — Anotações e Destaque Visual        */}
        {/* ══════════════════════════════════════════════ */}
        <div style={S.section}>
          <h2 style={S.h2}>2. Anotações e Destaque Visual</h2>
          <p style={S.p}>
            O olho humano segue automaticamente o contraste. Quando tudo tem a mesma cor, o leitor não sabe onde olhar.
            A técnica de <strong>grey-out</strong> consiste em descolorir todos os elementos excepto o que queremos destacar —
            o elemento relevante aparece em cor, todos os outros ficam cinzentos. Este princípio aplica-se a linhas,
            barras, pontos, sectores de um donut ou até linhas de uma tabela.
          </p>
          <p style={S.p}>
            A <strong>anotação directa</strong> elimina a necessidade de legenda. Em vez de o leitor procurar a cor na legenda
            e associar à série, o texto está imediatamente junto ao elemento. Uma seta + texto junto ao ponto de interesse
            comunica mais rapidamente do que qualquer título de eixo.
          </p>
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', textAlign: 'center', fontSize: '0.9rem' }}>
              Grey-out + Anotação — Todos os meses em cinzento excepto o pico de Outubro
            </p>
            <AnnotatedLineChartSVG />
          </div>
          <div style={S.note}>
            <strong>Regra de ouro:</strong> uma mensagem por gráfico. Se o gráfico precisa de duas anotações igualmente importantes,
            divida em dois gráficos distintos. A audiência não deve ter de escolher o que é mais importante — o designer faz essa escolha.
          </div>

          <h3 style={S.h3}>Técnicas de Guia do Olhar</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Técnica</th>
                  <th style={S.th}>Quando usar</th>
                  <th style={S.th}>Exemplo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Grey-out', 'Série temporal com um pico ou anomalia', 'Todos os meses cinzentos, Outubro a vermelho'],
                  ['Seta + texto', 'Evento específico num ponto do eixo X', '"Lançamento do produto" com seta a apontar'],
                  ['Banda de cor', 'Período de interesse (recessão, campanha)', 'Fundo colorido semi-transparente entre datas'],
                  ['Bold / tamanho maior', 'Número mais importante numa tabela', 'Valor de receita em negrito, outros normais'],
                  ['Enquadramento (box)', 'Célula ou grupo de células em destaque', 'Borda colorida à volta da linha do produto campeão'],
                ].map(([t,q,e]) => (
                  <tr key={t}>
                    <td style={{ ...S.td, fontWeight: 600, color }}>{t}</td>
                    <td style={S.td}>{q}</td>
                    <td style={{ ...S.td, fontStyle: 'italic', color: 'var(--text-secondary)' }}>{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        {/* ══════════════════════════════════════════════ */}
        {/* SECÇÃO 3 — Layout de Dashboard               */}
        {/* ══════════════════════════════════════════════ */}
        <div style={S.section}>
          <h2 style={S.h2}>3. Layout de Dashboard — Hierarquia e Fluxo</h2>
          <p style={S.p}>
            Estudos de eye-tracking mostram que o olho ocidental varre um ecrã em padrão <strong>F</strong> (lê a primeira linha
            completa, depois vai perdendo atenção à direita) ou <strong>Z</strong> (diagonal do canto superior esquerdo para o
            inferior direito). Os elementos mais importantes devem estar no canto superior esquerdo; os detalhes e filtros,
            abaixo ou à direita.
          </p>
          <p style={S.p}>
            A hierarquia de informação num dashboard segue tipicamente três níveis: <em>overview</em> (KPIs globais no topo),
            <em>comparação</em> (gráficos de tendência e distribuição no meio) e <em>detalhe</em> (tabelas ou drilldowns
            no fundo ou em painéis laterais).
          </p>
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', textAlign: 'center', fontSize: '0.9rem' }}>
              Mockup de Dashboard — 3 KPIs + linha + barras + donut
            </p>
            <DashboardMockupSVG />
          </div>

          <h3 style={S.h3}>Whitespace — A Respiração entre Elementos</h3>
          <p style={S.p}>
            O espaço em branco não é espaço desperdiçado — é o que permite ao cérebro separar grupos de informação. Dashboards
            excessivamente compactos fazem o utilizador sentir-se perdido. A regra prática é usar múltiplos de 8px para margens
            e padding (8, 16, 24, 32, 48px), o que cria ritmo visual consistente e alinha naturalmente com grelhas de 4 ou 8 colunas.
          </p>
          <div style={S.note}>
            Um dashboard bem desenhado deve ser compreensível num relance de 5 segundos: "Estamos acima ou abaixo do objectivo?"
            Se essa resposta não for imediata, a hierarquia precisa de ser revista.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ══════════════════════════════════════════════ */}
        {/* SECÇÃO 4 — KPI Cards e Sparklines             */}
        {/* ══════════════════════════════════════════════ */}
        <div style={S.section}>
          <h2 style={S.h2}>4. KPI Cards e Sparklines</h2>
          <p style={S.p}>
            Um KPI card bem construído contém três elementos: o <strong>valor actual</strong> (em grande, legível à distância),
            o <strong>delta vs. período anterior</strong> (em verde se positivo, vermelho se negativo, com símbolo de seta) e
            uma <strong>sparkline</strong> — um mini gráfico de linha sem eixos que mostra apenas a tendência dos últimos
            N períodos. O objectivo da sparkline não é comunicar valores exactos mas sim a direcção: subida consistente,
            queda recente, volatilidade.
          </p>
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', textAlign: 'center', fontSize: '0.9rem' }}>
              KPI Cards com Sparkline — 12 meses de tendência
            </p>
            <KpiSparklineSVG />
          </div>

          <h3 style={S.h3}>Quando o Delta Engana</h3>
          <p style={S.p}>
            O delta percentual isolado pode ser enganoso. Um crescimento de +200% pode representar passar de 1 cliente para 3.
            Boas práticas para contexto: mostrar sempre o valor absoluto de referência, indicar o período de comparação
            (YoY, MoM, vs. target), e quando relevante adicionar o intervalo de confiança ou margem de erro.
          </p>
          <div style={S.highlight}>
            <strong>Anatomia do KPI Card ideal:</strong>
            <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', lineHeight: 2, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
              <li>Label da métrica (topo, pequeno, cinzento)</li>
              <li>Valor actual (centro, grande, negrito)</li>
              <li>Delta colourido com seta (▲ verde / ▼ vermelho) e período de referência</li>
              <li>Sparkline (fundo ou faixa inferior) — sem eixos, sem labels</li>
              <li>Opcional: linha de target horizontal na sparkline</li>
            </ul>
          </div>
        </div>

        <hr style={S.divider} />

        {/* ══════════════════════════════════════════════ */}
        {/* SECÇÃO 5 — Gráficos de Desvio e Comparação   */}
        {/* ══════════════════════════════════════════════ */}
        <div style={S.section}>
          <h2 style={S.h2}>5. Gráficos de Desvio e Comparação Temporal</h2>

          <h3 style={S.h3}>Bullet Chart (Stephen Few)</h3>
          <p style={S.p}>
            O bullet chart é uma alternativa compacta ao velocímetro (gauge). Mostra num único elemento horizontal: a barra
            de performance actual, uma marca vertical de target, e bandas de fundo que indicam ranges (fraco / aceitável / excelente).
            É especialmente útil em dashboards onde o espaço é limitado e se precisam de comparar múltiplas métricas.
          </p>

          <h3 style={S.h3}>Waterfall Chart</h3>
          <p style={S.p}>
            O waterfall chart (gráfico em cascata) mostra como contribuições positivas e negativas se acumulam para chegar
            a um total. É o gráfico de eleição para análises de P&amp;L (receitas menos custos), reconciliações de inventário,
            ou qualquer situação onde se queira mostrar "de onde veio" a variação entre dois valores.
          </p>
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', textAlign: 'center', fontSize: '0.9rem' }}>
              Waterfall — Contribuições para o Resultado (Verde = positivo, Vermelho = negativo)
            </p>
            <WaterfallSVG />
          </div>
          <div style={S.note}>
            Convenção: barras de início e total em cinzento ou azul (valores absolutos), contribuições positivas a verde,
            negativas a vermelho. Linhas de ligação tracejadas entre barras ajudam a perceber a acumulação.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ══════════════════════════════════════════════ */}
        {/* SECÇÃO 6 — Redes e Hierarquias               */}
        {/* ══════════════════════════════════════════════ */}
        <div style={S.section}>
          <h2 style={S.h2}>6. Visualização de Redes e Hierarquias</h2>
          <p style={S.p}>
            Quando os dados representam relações entre entidades (não só atributos de entidades individuais), os gráficos
            convencionais falham. <strong>Node-link diagrams</strong> representam entidades como nós (círculos) e relações
            como arestas (linhas). A espessura da aresta pode codificar o peso da relação; a cor do nó pode codificar
            uma categoria ou um valor.
          </p>

          <h3 style={S.h3}>Grafo Node-Link</h3>
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', textAlign: 'center', fontSize: '0.9rem' }}>
              Grafo de Produtos × Canais × Regiões — espessura da aresta proporcional ao volume
            </p>
            <GrafoSVG />
          </div>
          <p style={S.p}>
            Para grafos grandes (centenas de nós), algoritmos de layout de força (force-directed) como D3.js forceSimulation
            são a abordagem padrão. Para grafos pequenos ou curados, o layout manual permite controlo total sobre a posição
            e narrativa visual.
          </p>

          <h3 style={S.h3}>Sankey Diagram</h3>
          <p style={S.p}>
            O diagrama de Sankey visualiza fluxos entre estados: de onde vêm os utilizadores, para onde vão, quanto se perde
            em cada etapa. É ideal para funis de conversão, fluxos de energia, ou migrações entre categorias. A espessura
            dos ribbons (fitas) é proporcional ao volume do fluxo.
          </p>
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', textAlign: 'center', fontSize: '0.9rem' }}>
              Sankey Simplificado — 3 Origens de Tráfego → 3 Destinos de Conversão
            </p>
            <SankeySVG />
          </div>
          <div style={S.note}>
            Limitação do Sankey: difícil de ler quando há muitos fluxos cruzados. Para mais de 6-8 categorias por lado,
            considere agrupar as menores numa categoria "Outros" ou usar uma matriz de fluxo (chord diagram).
          </div>
        </div>

        <hr style={S.divider} />

        {/* ══════════════════════════════════════════════ */}
        {/* SECÇÃO 7 — Boas Práticas de Design           */}
        {/* ══════════════════════════════════════════════ */}
        <div style={S.section}>
          <h2 style={S.h2}>7. Boas Práticas de Design</h2>

          <h3 style={S.h3}>Tipografia</h3>
          <p style={S.p}>
            A hierarquia tipográfica num gráfico segue uma escala estrita: título do gráfico (16–18px, bold),
            labels de eixo (11–12px, normal), anotações e valores de dados (10px, podendo ser bold para destaque),
            fonte e notas de rodapé (8–9px, cinzento). Nunca usar mais de dois pesos de fonte (normal e bold) no mesmo gráfico.
          </p>

          <h3 style={S.h3}>Espaçamento e Grelha</h3>
          <p style={S.p}>
            Usar múltiplos de 8px para todos os espaçamentos (margens, padding, gap entre gráficos). Uma grelha de 12 colunas
            com gutter de 16px é o padrão para dashboards web. KPI cards em grupos de 3 ou 4, gráficos largos a ocupar 8 ou
            12 colunas, gráficos laterais a 4 ou 6 colunas.
          </p>

          <h3 style={S.h3}>Responsividade</h3>
          <p style={S.p}>
            Mobile-first para dashboards operacionais consultados no telemóvel. Em ecrãs pequenos: KPIs em coluna única,
            gráficos de linha com zoom horizontal (scroll), tabelas substituídas por cards. Evitar tooltips que dependem
            de hover — em mobile não existe hover.
          </p>

          <h3 style={S.h3}>Antes e Depois — Aplicar as Boas Práticas</h3>
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', textAlign: 'center', fontSize: '0.9rem' }}>
              Antes (má prática) → Depois (boas práticas aplicadas)
            </p>
            <AntesDepoisSVG />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ ...S.note, borderColor: color, background: 'rgba(249,115,22,0.10)' }}>
              <strong style={{ color }}>Antes — problemas:</strong>
              <ul style={{ margin: '0.3rem 0 0', paddingLeft: '1rem', lineHeight: 1.9, fontSize: '0.85rem' }}>
                <li>Efeito 3D sem valor informativo</li>
                <li>Cores aleatórias para cada barra</li>
                <li>Sem título descritivo</li>
                <li>Fonte dos dados ausente</li>
                <li>Sem mensagem principal</li>
              </ul>
            </div>
            <div style={{ ...S.note, borderColor: '#f97316', background: 'rgba(249,115,22,0.05)' }}>
              <strong style={{ color: '#f97316' }}>Depois — melhorias:</strong>
              <ul style={{ margin: '0.3rem 0 0', paddingLeft: '1rem', lineHeight: 1.9, fontSize: '0.85rem' }}>
                <li>Barras 2D planas, sem decoração</li>
                <li>Grey-out com destaque único a vermelho</li>
                <li>Título = conclusão ("cresceram 100%")</li>
                <li>Fonte indicada no rodapé</li>
                <li>Uma mensagem, um destaque</li>
              </ul>
            </div>
          </div>
        </div>

        <hr style={S.divider} />

        {/* ══════════════════════════════════════════════ */}
        {/* SECÇÃO 8 — Checklist de Revisão              */}
        {/* ══════════════════════════════════════════════ */}
        <div style={S.section}>
          <h2 style={S.h2}>8. Checklist de Revisão</h2>
          <p style={S.p}>
            Antes de publicar ou apresentar qualquer visualização, percorrer esta checklist. Cada dimensão cobre uma área
            crítica de qualidade — dados, encodings, cor, texto, layout, audiência e acessibilidade.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Dimensão</th>
                  <th style={S.th}>Pergunta de Revisão</th>
                  <th style={S.th}>Boa Prática</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Dados','O eixo Y começa em zero nos bar charts?','Truncar o eixo Y em barras distorce a percepção visual do rácio entre valores.'],
                  ['Dados','A fonte dos dados está indicada?','Sempre incluir fonte, data de extracção e, se relevante, o tamanho da amostra (N).'],
                  ['Dados','Intervalos de confiança são mostrados quando pertinente?','Médias sem margem de erro criam falsa precisão; mostrar erro padrão ou IC 95%.'],
                  ['Encodings','O tipo de gráfico é adequado aos dados?','Barras para comparação, linha para tendência temporal, dispersão para correlação.'],
                  ['Encodings','Existe duplo eixo Y?','Evitar — cria confusão. Preferir dois gráficos separados ou normalizar as séries.'],
                  ['Cor','A paleta é adequada ao tipo de dado?','Sequencial para dados ordenados, divergente para desvio de um ponto central, qualitativa para categorias.'],
                  ['Cor','A visualização é legível em tons de cinzento?','Testar sempre sem cor — distinguibilidade não deve depender só da cor.'],
                  ['Cor','A visualização é acessível para daltónicos?','Evitar vermelho+verde sem codificação adicional; usar vermelho+azul ou adicionar textura/padrão.'],
                  ['Texto','O título descreve a conclusão?','"As vendas cresceram 23% em Q3" é melhor que "Gráfico de vendas por trimestre".'],
                  ['Texto','Labels directos substituem a legenda?','Sempre que possível, rotular as séries junto aos dados — elimina o vai-e-vem visual.'],
                  ['Layout','Existe hierarquia visual clara?','O elemento mais importante deve ter mais peso visual (tamanho, cor, posição).'],
                  ['Layout','O whitespace é suficiente?','Elementos demasiado próximos fundem-se visualmente; usar mínimo 16px entre grupos.'],
                  ['Audiência','A mensagem é adequada à audiência?','Técnica = detalhe; executiva = impacto de negócio; operacional = como usar.'],
                  ['Audiência','Existe um call-to-action claro (quando aplicável)?','Se o objectivo é uma decisão, a acção recomendada deve ser explícita.'],
                  ['Acessibilidade','O contraste texto/fundo é ≥ 4.5:1?','Padrão WCAG AA para texto normal; 3:1 para texto grande ou elementos gráficos.'],
                  ['Acessibilidade','A visualização tem alternativa textual (alt text / tabela)?','Gráficos em contexto web devem ter descrição textual para leitores de ecrã.'],
                ].map(([dim, q, bp]) => (
                  <tr key={q}>
                    <td style={{ ...S.td, fontWeight: 700, color, whiteSpace: 'nowrap' }}>{dim}</td>
                    <td style={{ ...S.td, fontStyle: 'italic' }}>{q}</td>
                    <td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{bp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        {/* ══════════════════════════════════════════════ */}
        {/* SÍNTESE DO MÓDULO                            */}
        {/* ══════════════════════════════════════════════ */}
        <div style={S.section}>
          <h2 style={S.h2}>9. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 2 }}>
              <li><strong>Narrativa:</strong> estrutura em 3 actos (Contexto → Conflito → Resolução); conclusão primeiro para executivos (Pirâmide de Minto).</li>
              <li><strong>Exploração ≠ Explicação:</strong> do caderno de trabalho sai apenas o gráfico que suporta a mensagem principal.</li>
              <li><strong>Grey-out + anotação:</strong> guiar o olhar descolorindo tudo excepto o elemento relevante; seta + texto substituem a legenda.</li>
              <li><strong>Dashboard:</strong> KPIs no topo (padrão F/Z), hierarquia a 3 níveis, whitespace em múltiplos de 8px, cores com significado fixo.</li>
              <li><strong>KPI Cards:</strong> valor actual + delta colorido + sparkline; mostrar sempre período de referência e valor absoluto.</li>
              <li><strong>Waterfall e Bullet:</strong> ideais para desvio de target e decomposição de variações em P&amp;L.</li>
              <li><strong>Grafos e Sankey:</strong> para dados relacionais e fluxos entre estados; espessura codifica volume.</li>
              <li><strong>Checklist:</strong> dados honestos, encoding adequado, cor acessível, título = conclusão, hierarquia clara, audiência considerada.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
