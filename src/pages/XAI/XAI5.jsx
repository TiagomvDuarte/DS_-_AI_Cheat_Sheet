import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#f97316';
const S = {
  page:      { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back:      { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag:       { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1:        { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead:      { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section:   { marginBottom: '3.5rem' },
  h2:        { fontSize: '1.4rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3:        { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', marginTop: '1.5rem' },
  p:         { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table:     { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th:        { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td:        { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note:      { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider:   { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code:      { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  svgWrap:   { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1.25rem', margin: '1.5rem 0', display: 'flex', justifyContent: 'center' },
  mathBlock: { margin: '1rem 0', overflowX: 'auto', padding: '0.5rem 0' },
  diagram:   { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1.25rem', margin: '1.5rem 0' },
  math:      { fontFamily: 'serif', fontSize: '1rem', color: 'var(--text-primary)' },
};

function toColor(v) {
  const r = Math.round(251 - v * 57);
  const g = Math.round(146 - v * 120);
  const b = Math.round(60  - v * 50);
  const a = 0.12 + v * 0.83;
  return `rgba(${r},${g},${b},${a})`;
}

/* ── SVG 1: Gradient Magnitude Grid ── */
function SVGSaliencyGrid() {
  const rows = 6, cols = 8;
  const w = 44, h = 44;
  const vals = [
    [0.1,0.2,0.4,0.8,0.9,0.7,0.3,0.1],
    [0.2,0.5,0.8,1.0,1.0,0.9,0.6,0.2],
    [0.3,0.7,0.9,1.0,0.9,0.8,0.5,0.2],
    [0.2,0.4,0.7,0.9,0.8,0.6,0.3,0.1],
    [0.1,0.2,0.4,0.6,0.5,0.3,0.2,0.1],
    [0.05,0.1,0.2,0.3,0.2,0.1,0.05,0.0],
  ];
  const padX = 10, padY = 30;
  return (
    <svg width={cols * w + padX * 2} height={rows * h + padY + 40} viewBox={`0 0 ${cols * w + padX * 2} ${rows * h + padY + 40}`} style={{ fontFamily: 'sans-serif' }}>
      <text x={(cols * w + padX * 2) / 2} y={18} textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Mapa de Saliência — Magnitude do Gradiente</text>
      {vals.map((row, r) =>
        row.map((v, c) => (
          <g key={`${r}-${c}`}>
            <rect x={padX + c * w} y={padY + r * h} width={w - 2} height={h - 2} rx={3} fill={toColor(v)} />
            <text x={padX + c * w + w / 2} y={padY + r * h + h / 2 + 4} textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">{v.toFixed(2)}</text>
          </g>
        ))
      )}
      {/* Legend */}
      <rect x={padX} y={rows * h + padY + 8} width={20} height={10} rx={2} fill="rgba(251,146,60,0.20)" />
      <text x={padX + 24} y={rows * h + padY + 18} fontSize="9" fill="var(--text-secondary)">Baixo</text>
      <rect x={padX + 70} y={rows * h + padY + 8} width={20} height={10} rx={2} fill="rgba(249,115,22,0.55)" />
      <text x={padX + 94} y={rows * h + padY + 18} fontSize="9" fill="var(--text-secondary)">Médio</text>
      <rect x={padX + 150} y={rows * h + padY + 8} width={20} height={10} rx={2} fill="rgba(234,88,12,0.80)" />
      <text x={padX + 174} y={rows * h + padY + 18} fontSize="9" fill="var(--text-secondary)">Alto</text>
      <rect x={padX + 220} y={rows * h + padY + 8} width={20} height={10} rx={2} fill="rgba(194,65,12,0.95)" />
      <text x={padX + 244} y={rows * h + padY + 18} fontSize="9" fill="var(--text-secondary)">Muito Alto</text>
    </svg>
  );
}

/* ── SVG 2: Integrated Gradients Path ── */
function SVGIntegratedGradients() {
  const steps = 7;
  const y0 = 100, y1 = 100;
  const x0 = 60, x1 = 460;
  const dx = (x1 - x0) / (steps - 1);
  const gradH = [8, 14, 22, 38, 52, 44, 30];
  return (
    <svg width={540} height={200} viewBox="0 0 540 200" style={{ fontFamily: 'sans-serif' }}>
      <text x={270} y={18} textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Integrated Gradients — Caminho da Baseline até à Entrada</text>
      {/* Path line */}
      <line x1={x0} y1={y0} x2={x1} y2={y1} stroke="var(--text-secondary)" strokeWidth={1.5} strokeDasharray="4 3" />
      {/* Gradient bars */}
      {Array.from({ length: steps }, (_, i) => {
        const x = x0 + i * dx;
        const alpha = i / (steps - 1);
        const h = gradH[i];
        return (
          <g key={i}>
            <rect x={x - 14} y={y0 - h} width={28} height={h} rx={3}
              fill={`rgba(249,115,22,0.10)`}
              stroke={color} strokeWidth={0.8} />
            <text x={x} y={y0 + 14} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">α={alpha.toFixed(1)}</text>
          </g>
        );
      })}
      {/* Baseline label */}
      <rect x={x0 - 20} y={130} width={40} height={22} rx={4} fill="var(--card-border)" />
      <text x={x0} y={145} textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--text-secondary)">x′ (0)</text>
      {/* Input label */}
      <rect x={x1 - 20} y={130} width={40} height={22} rx={4} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1} />
      <text x={x1} y={145} textAnchor="middle" fontSize="9" fontWeight="600" fill={color}>x (1)</text>
      {/* Integral arrow */}
      <path d={`M ${x0} 170 Q ${(x0+x1)/2} 185 ${x1} 170`} fill="none" stroke={color} strokeWidth={1.5} markerEnd="url(#arr)" />
      <defs>
        <marker id="arr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill={color} />
        </marker>
      </defs>
      <text x={270} y={195} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">∫ Soma dos gradientes ao longo do caminho → atribuição por pixel/feature</text>
    </svg>
  );
}

/* ── SVG 3: Grad-CAM Pipeline ── */
function SVGGradCAM() {
  const boxes = [
    { x: 10,  y: 60, w: 70,  h: 80,  label: 'Entrada',      sub: '224×224', fill: 'var(--bg-secondary)', stroke: '#f97316' },
    { x: 110, y: 55, w: 70,  h: 90,  label: 'Conv Blocos',  sub: '1–N',     fill: 'rgba(249,115,22,0.08)', stroke: '#f97316' },
    { x: 210, y: 50, w: 80,  h: 100, label: 'Último Conv',  sub: 'K mapas', fill: 'rgba(249,115,22,0.08)', stroke: '#f97316' },
    { x: 322, y: 60, w: 70,  h: 80,  label: 'Pesos αₖ',    sub: 'GAP grad', fill: 'rgba(249,115,22,0.10)', stroke: color },
    { x: 422, y: 55, w: 70,  h: 90,  label: 'Soma + ReLU',  sub: 'heatmap', fill: 'rgba(249,115,22,0.85)', stroke: '#f97316' },
  ];
  const arrows = [[80,100],[180,100],[290,100],[392,100]];
  return (
    <svg width={520} height={200} viewBox="0 0 520 200" style={{ fontFamily: 'sans-serif' }}>
      <text x={260} y={18} textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Pipeline Grad-CAM</text>
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} rx={6} fill={b.fill} stroke={b.stroke} strokeWidth={1.5} />
          <text x={b.x + b.w / 2} y={b.y + b.h / 2 - 6} textAnchor="middle" fontSize="9" fontWeight="700" fill={b.fill === 'rgba(249,115,22,0.85)' ? '#fff' : 'var(--text-secondary)'}>{b.label}</text>
          <text x={b.x + b.w / 2} y={b.y + b.h / 2 + 8} textAnchor="middle" fontSize="8" fill={b.fill === 'rgba(249,115,22,0.85)' ? '#fff' : 'var(--text-secondary)'}>{b.sub}</text>
        </g>
      ))}
      {arrows.map(([x, y], i) => (
        <g key={i}>
          <line x1={x} y1={y} x2={x + 30} y2={y} stroke="var(--text-secondary)" strokeWidth={1.5} markerEnd="url(#a2)" />
        </g>
      ))}
      <defs>
        <marker id="a2" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="var(--text-secondary)" />
        </marker>
      </defs>
      {/* Heatmap overlay suggestion */}
      <rect x={422} y={160} width={70} height={18} rx={4} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1} />
      <text x={457} y={173} textAnchor="middle" fontSize="8" fill={color}>→ Overlay s/ Imagem</text>
      <line x1={457} y1={145} x2={457} y2={160} stroke={color} strokeWidth={1} strokeDasharray="3 2" />
    </svg>
  );
}

/* ── SVG 4: Attention Heatmap 6×6 ── */
function SVGAttentionHeatmap() {
  const tokens = ['O', 'gato', 'sentou', 'no', 'tapete', 'azul'];
  const n = tokens.length;
  const weights = [
    [0.60, 0.20, 0.05, 0.05, 0.07, 0.03],
    [0.10, 0.55, 0.15, 0.05, 0.10, 0.05],
    [0.05, 0.20, 0.45, 0.10, 0.15, 0.05],
    [0.08, 0.08, 0.12, 0.50, 0.15, 0.07],
    [0.05, 0.10, 0.15, 0.10, 0.50, 0.10],
    [0.03, 0.05, 0.07, 0.05, 0.25, 0.55],
  ];
  const cell = 48, pad = 64;
  const W = n * cell + pad + 10;
  const H = n * cell + pad + 30;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ fontFamily: 'sans-serif' }}>
      <text x={W / 2} y={14} textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Mapa de Atenção (1 head, 6 tokens)</text>
      {/* Col labels */}
      {tokens.map((t, j) => (
        <text key={j} x={pad + j * cell + cell / 2} y={32} textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--text-secondary)">{t}</text>
      ))}
      {/* Row labels */}
      {tokens.map((t, i) => (
        <text key={i} x={pad - 6} y={pad + i * cell + cell / 2 + 4} textAnchor="end" fontSize="9" fontWeight="600" fill="var(--text-secondary)">{t}</text>
      ))}
      {weights.map((row, i) =>
        row.map((w, j) => (
          <g key={`${i}-${j}`}>
            <rect x={pad + j * cell} y={pad - 16 + i * cell} width={cell - 2} height={cell - 2} rx={3}
              fill={toColor(w)} />
            <text x={pad + j * cell + cell / 2} y={pad - 16 + i * cell + cell / 2 + 4}
              textAnchor="middle" fontSize="8" fill={w > 0.35 ? '#fff' : 'var(--text-secondary)'}>{w.toFixed(2)}</text>
          </g>
        ))
      )}
      <text x={W / 2} y={H - 6} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Linhas = token de destino · Colunas = token de origem</text>
    </svg>
  );
}

/* ── SVG 5: Multi-Head Attention Grid ── */
function SVGMultiHead() {
  const heads = 4, n = 6;
  const cell = 20, gap = 12, padX = 16, padY = 28;
  const headW = n * cell;
  const totalW = heads * (headW + gap) + padX * 2 - gap;
  const totalH = n * cell + padY + 30;
  const patterns = [
    (i, j) => Math.exp(-Math.abs(i - j) * 0.7),
    (i, j) => i === j ? 0.9 : (j === n - 1 ? 0.4 : 0.05),
    (i, j) => j <= i ? 0.15 + (i - j) * 0.12 : 0.02,
    (i, j) => Math.random() * 0.3 + (i === j ? 0.5 : 0.05),
  ];
  const headLabels = ['Head 1\n(Local)', 'Head 2\n(Global)', 'Head 3\n(Causal)', 'Head 4\n(Misto)'];
  return (
    <svg width={totalW} height={totalH} viewBox={`0 0 ${totalW} ${totalH}`} style={{ fontFamily: 'sans-serif' }}>
      <text x={totalW / 2} y={14} textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Padrões Multi-Head (4 heads × 6 tokens)</text>
      {Array.from({ length: heads }, (_, h) => {
        const ox = padX + h * (headW + gap);
        return (
          <g key={h}>
            <text x={ox + headW / 2} y={padY - 4} textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--text-secondary)">{headLabels[h].split('\n')[0]}</text>
            {Array.from({ length: n }, (_, i) =>
              Array.from({ length: n }, (_, j) => {
                const v = Math.min(1, Math.max(0, patterns[h](i, j)));
                return (
                  <rect key={`${i}-${j}`} x={ox + j * cell} y={padY + i * cell} width={cell - 1} height={cell - 1} rx={1}
                    fill={toColor(v)} />
                );
              })
            )}
          </g>
        );
      })}
      <text x={totalW / 2} y={totalH - 8} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Cada head aprende padrões de atenção distintos — combinar com Attention Rollout para interpretação multi-camada</text>
    </svg>
  );
}

/* ── SVG 6: TCAV Concept Space ── */
function SVGTCAVConcept() {
  const W = 480, H = 260;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ fontFamily: 'sans-serif' }}>
      <text x={W / 2} y={16} textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>TCAV — Espaço de Activações de Conceito</text>
      {/* Axes */}
      <line x1={40} y1={220} x2={440} y2={220} stroke="var(--card-border)" strokeWidth={1.5} />
      <line x1={40} y1={220} x2={40} y2={30} stroke="var(--card-border)" strokeWidth={1.5} />
      <text x={240} y={230} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Activação Dim 1</text>
      <text x={18} y={130} textAnchor="middle" fontSize="9" fill="var(--text-secondary)" transform="rotate(-90,18,130)">Activação Dim 2</text>
      {/* Positive concept points (listrado) */}
      {[[110,80],[140,65],[125,95],[160,78],[135,110],[90,100],[155,55]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r={6} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1} />
      ))}
      {/* Random points */}
      {[[280,150],[320,170],[300,130],[360,155],[340,185],[270,175],[390,140]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r={6} fill="rgba(249,115,22,0.15)" stroke="var(--text-secondary)" strokeWidth={1} />
      ))}
      {/* CAV hyperplane */}
      <line x1={200} y1={40} x2={230} y2={215} stroke="#f97316" strokeWidth={2} strokeDasharray="6 3" />
      <text x={208} y={35} fontSize="9" fontWeight="700" fill="#f97316">CAV (hiperplano)</text>
      {/* Test image point */}
      <circle cx={175} cy={120} r={9} fill="#fbbf24" stroke="#f97316" strokeWidth={2} />
      <text x={175} y={150} textAnchor="middle" fontSize="9" fontWeight="600" fill="#f97316">Imagem Teste</text>
      {/* Directional derivative arrow */}
      <line x1={175} y1={120} x2={155} y2={88} stroke={color} strokeWidth={2} markerEnd="url(#tcav_arr)" />
      <text x={120} y={82} fontSize="8" fill={color} fontWeight="600">∇h·v^C</text>
      <defs>
        <marker id="tcav_arr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill={color} />
        </marker>
      </defs>
      {/* Legend */}
      <circle cx={60} cy={H - 20} r={5} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1} />
      <text x={70} y={H - 16} fontSize="9" fill="var(--text-secondary)">Conceito "listrado"</text>
      <circle cx={190} cy={H - 20} r={5} fill="rgba(249,115,22,0.15)" stroke="var(--text-secondary)" strokeWidth={1} />
      <text x={200} y={H - 16} fontSize="9" fill="var(--text-secondary)">Amostras aleatórias</text>
      <circle cx={320} cy={H - 20} r={7} fill="#fbbf24" stroke="#f97316" strokeWidth={1.5} />
      <text x={332} y={H - 16} fontSize="9" fill="var(--text-secondary)">Imagem de teste (zebra)</text>
    </svg>
  );
}

/* ── SVG 7: Decision Guide Flowchart ── */
function SVGDecisionGuide() {
  const W = 560, H = 300;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ fontFamily: 'sans-serif' }}>
      <text x={W / 2} y={16} textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Guia de Selecção de Método</text>
      {/* Start */}
      <rect x={200} y={28} width={160} height={32} rx={16} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1.5} />
      <text x={280} y={49} textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>Qual o teu modelo?</text>
      {/* CNN branch */}
      <line x1={220} y1={60} x2={120} y2={100} stroke="var(--text-secondary)" strokeWidth={1.5} markerEnd="url(#dg_arr)" />
      <text x={115} y={88} fontSize="9" fill="var(--text-secondary)">CNN</text>
      <rect x={50} y={100} width={140} height={32} rx={6} fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth={1.2} />
      <text x={120} y={121} textAnchor="middle" fontSize="9" fontWeight="600" fill="#f97316">Grad-CAM / Score-CAM</text>
      {/* Transformer branch */}
      <line x1={280} y1={60} x2={280} y2={100} stroke="var(--text-secondary)" strokeWidth={1.5} markerEnd="url(#dg_arr)" />
      <text x={285} y={88} fontSize="9" fill="var(--text-secondary)">Transformer</text>
      <rect x={190} y={100} width={180} height={32} rx={6} fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth={1.2} />
      <text x={280} y={121} textAnchor="middle" fontSize="9" fontWeight="600" fill="#f97316">Attention Rollout + IG</text>
      {/* Concepts branch */}
      <line x1={340} y1={60} x2={440} y2={100} stroke="var(--text-secondary)" strokeWidth={1.5} markerEnd="url(#dg_arr)" />
      <text x={425} y={88} fontSize="9" fill="var(--text-secondary)">Qualquer</text>
      <rect x={370} y={100} width={160} height={32} rx={6} fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth={1.2} />
      <text x={450} y={121} textAnchor="middle" fontSize="9" fontWeight="600" fill="#ea580c">TCAV</text>
      {/* Model-agnostic */}
      <line x1={280} y1={132} x2={280} y2={175} stroke={color} strokeWidth={1.5} strokeDasharray="4 2" markerEnd="url(#dg_arr)" />
      <rect x={170} y={175} width={220} height={32} rx={6} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1.2} />
      <text x={280} y={196} textAnchor="middle" fontSize="9" fontWeight="600" fill={color}>IG sobre inputs (model-agnostic)</text>
      {/* Saliency note */}
      <rect x={10} y={175} width={148} height={32} rx={6} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={1} />
      <text x={84} y={196} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Saliência / SmoothGrad (rápido)</text>
      <line x1={120} y1={132} x2={84} y2={175} stroke="var(--card-border)" strokeWidth={1} markerEnd="url(#dg_arr)" />
      <defs>
        <marker id="dg_arr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <text x={W / 2} y={H - 6} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Escolha o método mais específico para o modelo — mais fidelidade, mais eficiência</text>
    </svg>
  );
}

/* ══════════════════════════════════════════════ */
export default function XAI5() {
  return (
    <div style={S.page}>
      {/* Back link */}
      <Link to="/xai" style={S.back}>
        <ArrowLeft size={16} /> Voltar a XAI
      </Link>

      {/* Header */}
      <span style={S.tag}>MÓDULO 05</span>
      <h1 style={S.h1}>Métodos Específicos de Modelo — Redes Neurais</h1>
      <p style={S.lead}>
        Grad-CAM, Saliência, Integrated Gradients, Atenção e TCAV: uma análise aprofundada dos métodos de
        explicabilidade desenhados especificamente para redes neurais profundas, com maior fidelidade e
        eficiência do que as abordagens agnósticas.
      </p>

      {/* ── SECÇÃO 1 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Métodos Específicos vs. Agnósticos de Modelo</h2>
        <p style={S.p}>
          Os métodos agnósticos de modelo (LIME, SHAP) funcionam com qualquer classificador, mas pagam um
          preço: precisam de amostrar o espaço de entrada repetidamente e aproximar o modelo localmente.
          Os métodos <strong>específicos de modelo</strong> exploram a estrutura interna — gradientes, pesos
          de atenção, mapas de activação — para gerar explicações mais fiéis e muito mais rápidas.
        </p>
        <p style={S.p}>
          Este módulo foca-se exclusivamente em redes neurais. Para árvores de decisão e caminhos de decisão,
          consulta o <strong>MÓDULO 07</strong>.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Dimensão</th>
              <th style={S.th}>Métodos Agnósticos</th>
              <th style={S.th}>Métodos Específicos (Redes Neurais)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Aplicabilidade', 'Qualquer modelo', 'CNNs, Transformers, MLPs'],
              ['Velocidade', 'Lenta (N forward passes)', 'Rápida (1–2 passes)'],
              ['Fidelidade', 'Aproximação local', 'Uso directo dos gradientes internos'],
              ['Resolução espacial', 'Baixa (superpixels/features)', 'Pixel/token (Grad-CAM, IG)'],
              ['Requer retreino?', 'Não', 'Não (backprop sobre modelo fixo)'],
              ['Interpretação por conceito', 'Difícil', 'Sim (TCAV, probing)'],
            ].map(([d, a, e]) => (
              <tr key={d}>
                <td style={{ ...S.td, fontWeight: 600 }}>{d}</td>
                <td style={S.td}>{a}</td>
                <td style={{ ...S.td, color }}>{e}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.note}>
          <strong>Foco deste módulo:</strong> Saliência, Integrated Gradients, Grad-CAM (e variantes),
          Atenção em Transformers e TCAV. Todas as técnicas assumem acesso ao grafo computacional
          (backpropagation disponível).
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECÇÃO 2 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Saliência — Gradiente da Entrada</h2>
        <p style={S.p}>
          O mapa de saliência mais simples é o gradiente da função de classificação em relação a cada
          pixel (ou feature) da entrada. Um gradiente elevado significa que uma pequena perturbação nessa
          posição altera muito a saída — o modelo é <em>sensível</em> a esse pixel.
        </p>

        <div style={S.mathBlock}>
          <BlockMath math={"\\text{Saliency}(x) = \\left|\\frac{\\partial f_c(x)}{\\partial x}\\right|"} />
        </div>

        <p style={S.p}>
          onde <InlineMath math={"f_c(x)"} /> é o logit da classe <InlineMath math={"c"} /> e{' '}
          <InlineMath math={"x"} /> é o tensor de entrada (ex.: imagem RGB). O valor absoluto é tomado
          porque o sinal do gradiente indica a direcção, mas a magnitude indica a importância.
        </p>

        <h3 style={S.h3}>SmoothGrad</h3>
        <p style={S.p}>
          Os mapas de saliência brutos são ruidosos. O <strong>SmoothGrad</strong> adiciona ruído
          gaussiano à entrada <InlineMath math={"N"} /> vezes e faz a média dos gradientes:
        </p>
        <div style={S.mathBlock}>
          <BlockMath math={"\\widehat{M}(x) = \\frac{1}{N}\\sum_{n=1}^{N} \\left|\\frac{\\partial f_c(x + \\epsilon_n)}{\\partial x}\\right|, \\quad \\epsilon_n \\sim \\mathcal{N}(0, \\sigma^2)"} />
        </div>

        <h3 style={S.h3}>Gradient × Input</h3>
        <p style={S.p}>
          Multiplica o gradiente pelo valor do pixel, atribuindo importância zero a pixels com activação
          zero mesmo que o gradiente seja elevado:
        </p>
        <div style={S.mathBlock}>
          <BlockMath math={"\\text{GradInput}(x) = \\frac{\\partial f_c(x)}{\\partial x} \\odot x"} />
        </div>

        <div style={S.svgWrap}>
          <SVGSaliencyGrid />
        </div>

        <div style={S.note}>
          <strong>Limitações:</strong> mapas de saliência são ruidosos, sensíveis a transformações
          irrelevantes (ex.: constante aditiva) e nem sempre correspondem à percepção humana de
          "importância". Não satisfazem o axioma de completude — ver Secção 3.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECÇÃO 3 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Integrated Gradients</h2>
        <p style={S.p}>
          Sundararajan et al. (2017) demonstraram que os mapas de saliência simples violam dois axiomas
          fundamentais de atribuição. Os <strong>Integrated Gradients (IG)</strong> satisfazem ambos:
        </p>

        
          <strong>Axioma 1 — Completude:</strong> A soma das atribuições IG sobre todas as features
          é igual à diferença entre a saída da entrada e da baseline:{' '}
          <InlineMath math={"\\sum_i \\text{IG}_i(x) = F(x) - F(x')"} />.
          <br /><br />
          <strong>Axioma 2 — Sensibilidade:</strong> Se uma feature difere entre{' '}
          <InlineMath math={"x"} /> e <InlineMath math={"x'"} /> e provoca diferença na saída,
          a sua atribuição é não-nula.
          <br /><br />
          <strong>Axioma 3 — Invariância de implementação:</strong> Dois modelos funcionalmente
          equivalentes produzem as mesmas atribuições.
        

        <div style={S.mathBlock}>
          <BlockMath math={"\\text{IG}_i(x) = (x_i - x_i')\\int_{\\alpha=0}^{1}\\frac{\\partial F(x' + \\alpha(x-x'))}{\\partial x_i}\\,d\\alpha"} />
        </div>

        <p style={S.p}>
          A <strong>baseline</strong> <InlineMath math={"x'"} /> representa a ausência de informação:
          imagem preta (zeros) para visão, vetor nulo para dados tabulares, token de padding para NLP.
          O integral é aproximado com a regra dos trapézios (tipicamente 20–300 passos).
        </p>

        <div style={S.svgWrap}>
          <SVGIntegratedGradients />
        </div>

        <h3 style={S.h3}>Implementação com Captum</h3>

        <div style={S.note}>
          O <em>convergence delta</em> mede quão bem o axioma de completude é satisfeito numericamente.
          Valores abaixo de 0.05 são geralmente aceitáveis. Para NLP, usa-se IG sobre embeddings de
          tokens em vez de pixels.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECÇÃO 4 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Grad-CAM e Variantes</h2>
        <p style={S.p}>
          O <strong>Gradient-weighted Class Activation Mapping (Grad-CAM)</strong> usa os gradientes
          que fluem para a última camada convolucional para produzir um mapa de calor
          <em>class-discriminativo</em> com resolução espacial grosseira mas semanticamente preciso.
          Não requer retreino nem modificação da arquitectura.
        </p>

        <h3 style={S.h3}>Passo 1 — Pesos globais por canal</h3>
        <div style={S.mathBlock}>
          <BlockMath math={"\\alpha_k^c = \\frac{1}{Z}\\sum_i\\sum_j\\frac{\\partial y^c}{\\partial A^k_{ij}}"} />
        </div>
        <p style={S.p}>
          onde <InlineMath math={"A^k_{ij}"} /> é a activação do canal <InlineMath math={"k"} /> na
          posição <InlineMath math={"(i,j)"} /> da última camada convolucional, e{' '}
          <InlineMath math={"Z = i \\times j"} /> é o número total de posições espaciais (Global
          Average Pooling do gradiente).
        </p>

        <h3 style={S.h3}>Passo 2 — Combinação ponderada + ReLU</h3>
        <div style={S.mathBlock}>
          <BlockMath math={"L^c_{\\text{Grad-CAM}} = \\text{ReLU}\\!\\left(\\sum_k \\alpha_k^c A^k\\right)"} />
        </div>
        <p style={S.p}>
          A ReLU elimina regiões que influenciam negativamente a classe alvo. O mapa resultante é
          interpolado bilinearmente para o tamanho da imagem original e sobreposto como heatmap.
        </p>

        <div style={S.svgWrap}>
          <SVGGradCAM />
        </div>

        <h3 style={S.h3}>Variantes do Grad-CAM</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Diferença Principal</th>
              <th style={S.th}>Vantagem</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Grad-CAM++', 'Gradientes de segunda ordem ponderados', 'Melhor localização de múltiplos objectos'],
              ['Score-CAM', 'Usa perturbações em vez de gradientes', 'Independente de gradientes (mais robusto)'],
              ['Eigen-CAM', 'Decomposição PCA dos mapas de activação', 'Sem gradientes, muito rápido'],
              ['Ablation-CAM', 'Ablação sistemática de canais', 'Fidelidade melhorada'],
            ].map(([m, d, v]) => (
              <tr key={m}>
                <td style={{ ...S.td, fontWeight: 600, color }}>{m}</td>
                <td style={S.td}>{d}</td>
                <td style={S.td}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.note}>
          Grad-CAM funciona apenas com CNNs (camadas convolucionais). Para Transformers, utiliza-se
          Attention Rollout ou IG sobre patch embeddings.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECÇÃO 5 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Mapas de Atenção em Transformers</h2>
        <p style={S.p}>
          Em modelos Transformer, os pesos de atenção{' '}
          <InlineMath math={"A = \\text{softmax}\\!\\left(\\frac{QK^\\top}{\\sqrt{d_k}}\\right)"} />{' '}
          indicam quanta "atenção" um token presta a cada outro token. É tentador interpretá-los
          directamente como explicações.
        </p>

        <div style={S.highlight}>
          <strong>Controvérsia:</strong> Jain &amp; Wallace (2019) argumentaram que atenção não é
          explicação — os pesos de atenção podem ser permutados sem alterar significativamente as
          predições. Wiegreffe &amp; Pinter (2019) contrariaram este argumento mostrando que, em
          muitos cenários, a atenção é diagnóstica e consistente com medidas de feature importance.
          O consenso actual é que <em>atenção bruta da última camada não deve ser usada isoladamente</em>.
        </div>

        <div style={S.svgWrap}>
          <SVGAttentionHeatmap />
        </div>

        <h3 style={S.h3}>Attention Rollout</h3>
        <p style={S.p}>
          Para modelos multi-camada, o Attention Rollout (Abnar &amp; Zuidema, 2020) propaga a atenção
          recursivamente de camada em camada, contabilizando as conexões residuais:
        </p>
        <div style={S.mathBlock}>
          <BlockMath math={"\\tilde{A}^{(l)} = 0.5 \\cdot A^{(l)} + 0.5 \\cdot I, \\quad R = \\tilde{A}^{(1)} \\cdot \\tilde{A}^{(2)} \\cdots \\tilde{A}^{(L)}"} />
        </div>
        <p style={S.p}>
          O factor 0.5 modela as conexões residuais (atenção + identidade). O resultado{' '}
          <InlineMath math={"R"} /> representa o fluxo de informação agregado entre todos os pares
          de tokens ao longo de todas as camadas.
        </p>

        <div style={S.svgWrap}>
          <SVGMultiHead />
        </div>

        <div style={S.note}>
          <strong>Boas práticas:</strong> (1) Usa Attention Rollout ou Attention Flow em vez de
          atenção bruta da última camada. (2) Combina com Integrated Gradients sobre embeddings
          para atribuição ao nível do token. (3) Em modelos de visão (ViT), o attention do token
          [CLS] para os patches é a visualização mais informativa.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECÇÃO 6 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. TCAV — Testing with Concept Activation Vectors</h2>
        <p style={S.p}>
          Enquanto os métodos anteriores atribuem importância a pixels ou tokens, o{' '}
          <strong>TCAV</strong> (Kim et al., 2018) trabalha ao nível de <em>conceitos humanos</em>:
          "listrado", "curvo", "ao ar livre". Não requer reengenharia do modelo — usa sondas lineares
          (linear probing) no espaço de activações.
        </p>

        <h3 style={S.h3}>Algoritmo</h3>
        <p style={S.p}>
          1. Recolhe activações da camada <InlineMath math={"l"} /> para imagens que contêm o
          conceito <InlineMath math={"C"} /> e para amostras aleatórias (negativas).
          <br />
          2. Treina um classificador linear (SVM ou regressão logística) para separar os dois grupos.
          O vector normal ao hiperplano de separação é o <strong>CAV</strong> (Concept Activation
          Vector) <InlineMath math={"v_l^C"} />.
          <br />
          3. Calcula a derivada direccional da predição de classe <InlineMath math={"k"} /> na
          direcção do CAV para cada exemplo de teste:
        </p>

        <div style={S.mathBlock}>
          <BlockMath math={"S_{C,k,l}(x) = \\nabla h_{l,k}(x) \\cdot v_l^C"} />
        </div>

        <p style={S.p}>
          onde <InlineMath math={"h_{l,k}(x)"} /> é a activação do logit da classe{' '}
          <InlineMath math={"k"} /> em função das activações da camada <InlineMath math={"l"} />.
          Se <InlineMath math={"S_{C,k,l}(x) > 0"} />, o conceito influencia positivamente a
          predição para aquele exemplo.
        </p>

        <h3 style={S.h3}>Pontuação TCAV</h3>
        <div style={S.mathBlock}>
          <BlockMath math={"\\text{TCAV}_{Q_{C,k,l}} = \\frac{\\left|\\{x \\in X_k : S_{C,k,l}(x) > 0\\}\\right|}{|X_k|}"} />
        </div>
        <p style={S.p}>
          Uma pontuação TCAV de 0.9 para o conceito "listrado" e classe "zebra" significa que 90%
          das imagens de zebra têm a sua predição reforçada quando se move na direcção do CAV
          "listrado". O teste estatístico (two-sample t-test contra CAVs aleatórias) valida se o
          conceito é significativo.
        </p>

        <div style={S.svgWrap}>
          <SVGTCAVConcept />
        </div>

        <div style={S.note}>
          <strong>Exemplo clássico:</strong> Kim et al. demonstraram que o conceito "listrado"
          tem TCAV elevado para a classe "zebra" mas baixo para "elefante" — confirmando que o
          modelo aprendeu a associar padrões de listras com zebras, e não por artefacto.
        </div>

        <h3 style={S.h3}>Teste Estatístico</h3>
        <p style={S.p}>
          Para garantir que o CAV captura genuinamente o conceito e não ruído aleatório:
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── SECÇÃO 7 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Comparação e Quando Usar Cada Método</h2>

        <div style={S.svgWrap}>
          <SVGDecisionGuide />
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Tipo de Modelo</th>
              <th style={S.th}>Resolução</th>
              <th style={S.th}>Fidelidade</th>
              <th style={S.th}>Velocidade</th>
              <th style={S.th}>Uso Típico</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Saliência', 'Qualquer NN', 'Pixel/token', 'Baixa', 'Muito rápida', 'Prototipagem, debug rápido'],
              ['SmoothGrad', 'Qualquer NN', 'Pixel/token', 'Média', 'Moderada (N passes)', 'Visualização mais limpa'],
              ['Integrated Gradients', 'Qualquer NN', 'Pixel/token', 'Alta (axiomas)', 'Moderada', 'Auditorias, NLP, tabulares'],
              ['Grad-CAM', 'CNN', 'Espacial (grosseira)', 'Alta', 'Rápida (1 pass)', 'Visão, localização de objecto'],
              ['Score-CAM', 'CNN', 'Espacial', 'Muito alta', 'Lenta (N perturbações)', 'CNN sem gradientes fiáveis'],
              ['Attention Rollout', 'Transformer', 'Token', 'Média-Alta', 'Rápida', 'NLP, ViT, análise de fluxo'],
              ['TCAV', 'Qualquer NN (deep)', 'Conceito', 'Alta (teste estatístico)', 'Moderada (treino SVM)', 'Auditoria de fairness, conceitos'],
            ].map(([m, t, r, f, v, u]) => (
              <tr key={m}>
                <td style={{ ...S.td, fontWeight: 600, color }}>{m}</td>
                <td style={S.td}>{t}</td>
                <td style={S.td}>{r}</td>
                <td style={S.td}>{f}</td>
                <td style={S.td}>{v}</td>
                <td style={S.td}>{u}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.highlight}>
          <strong>Recomendação prática:</strong> Para CNN em produção, começa com Grad-CAM pela
          velocidade e depois valida com IG se a fidelidade for crítica. Para Transformers em NLP,
          combina Attention Rollout (visualização intuitiva) com IG sobre embeddings (rigor
          axiomático). Para auditorias de fairness por conceito, usa TCAV com teste estatístico.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECÇÃO 8 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Síntese do Módulo</h2>
        <p style={S.p}>
          Os métodos específicos de modelo para redes neurais oferecem uma janela privilegiada para
          o processo de decisão interno: em vez de tratar o modelo como caixa negra, exploram
          directamente os gradientes, os mapas de activação e os pesos de atenção que a rede
          computou.
        </p>
        <p style={S.p}>
          Os <strong>mapas de saliência</strong> são o ponto de partida — simples e rápidos, mas
          ruidosos. O <strong>SmoothGrad</strong> e o <strong>Gradient×Input</strong> melhoram a
          estabilidade visual sem custos axiomáticos. Os <strong>Integrated Gradients</strong>
          elevam o padrão ao satisfazer completude e sensibilidade, tornando-se a referência para
          atribuições rigorosas em NLP e dados tabulares.
        </p>
        <p style={S.p}>
          O <strong>Grad-CAM</strong> e as suas variantes dominam o domínio da visão por computador:
          rápidos, localizadores de objectos e sem necessidade de re-arquitectura. Para
          Transformers, o <strong>Attention Rollout</strong> oferece uma visão do fluxo de
          informação multi-camada, mas deve ser combinado com métodos baseados em gradientes para
          maior robustez.
        </p>
        <p style={S.p}>
          Finalmente, o <strong>TCAV</strong> eleva a explicabilidade ao nível conceptual — em vez
          de "este pixel foi importante", responde a "este conceito humano influencia a predição?".
          É o método mais adequado para auditorias de equidade e compreensão de representações
          aprendidas.
        </p>
      </section>
    </div>
  );
}
