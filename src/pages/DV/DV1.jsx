import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(74,158,237,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

/* ─────────────────────────────────────────────
   SVG 1 — Data-Ink Ratio: gráfico mau vs. bom
───────────────────────────────────────────── */
const DataInkDiagram = () => {
  const data = [42, 67, 31, 58, 45];
  const labels = ['A', 'B', 'C', 'D', 'E'];
  const maxVal = 80;
  const barW = 22;
  const chartH = 90;
  const baseY = 130;

  // Posições X para cada grupo (mau: offset 20; bom: offset 310)
  const badX  = [28, 60, 92, 124, 156];
  const goodX = [318, 350, 382, 414, 446];

  return (
    <div style={{ ...S.diagram, textAlign: 'center' }}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Data-Ink Ratio — Mesmo Conjunto de Dados</p>
      <svg viewBox="0 0 520 155" style={{ maxWidth: '100%', height: 'auto' }}>
        {/* ── CABEÇALHOS ── */}
        <text x="100" y="13" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Ratio baixo — chart junk</text>
        <text x="390" y="13" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Ratio alto — apenas dados</text>

        {/* ── GRÁFICO MAU ── */}
        {/* Fundo colorido */}
        <rect x="10" y="18" width="185" height="128" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2"/>
        {/* Grid lines excessivas */}
        {[0,1,2,3,4,5].map(i => {
          const y = baseY - (i / 5) * chartH;
          return <line key={i} x1="15" y1={y} x2="190" y2={y} stroke="#4a9eed" strokeWidth="0.6" strokeDasharray="3,2" opacity="0.5"/>;
        })}
        {/* Barras com gradiente simulado (duas rects) + 3D offset */}
        {data.map((v, i) => {
          const h = (v / maxVal) * chartH;
          const x = badX[i];
          return (
            <g key={i}>
              {/* sombra/3D */}
              <rect x={x + 3} y={baseY - h + 3} width={barW} height={h} rx="1" fill="rgba(0,0,0,0.15)"/>
              {/* barra principal */}
              <rect x={x} y={baseY - h} width={barW} height={h} rx="1"
                fill={['#4a9eed','#4a9eed','#4a9eed','#4a9eed','#4a9eed'][i]}
                stroke={['#4a9eed','#4a9eed','#4a9eed','#4a9eed','#4a9eed'][i]}
                strokeWidth="1"/>
              {/* brilho */}
              <rect x={x} y={baseY - h} width={barW} height={h / 3} rx="1" fill="white" opacity="0.2"/>
              {/* label repetido no topo e em baixo */}
              <text x={x + barW / 2} y={baseY - h - 3} textAnchor="middle" fontSize="7" fill="var(--text-secondary)">{v}</text>
              <text x={x + barW / 2} y={baseY + 10} textAnchor="middle" fontSize="7" fill="var(--text-secondary)">{labels[i]}</text>
            </g>
          );
        })}
        {/* Caixa de legenda inútil */}
        <rect x="120" y="21" width="70" height="28" rx="2" fill="var(--bg-primary)" stroke="#4a9eed" strokeWidth="0.7" opacity="0.8"/>
        <text x="155" y="33" textAnchor="middle" fontSize="6" fill="var(--text-secondary)">Legenda: A B C D E</text>
        <text x="155" y="43" textAnchor="middle" fontSize="5.5" fill="var(--text-secondary)">(redundante)</text>
        {/* Título desnecessário dentro do gráfico */}
        <text x="100" y="154" textAnchor="middle" fontSize="6.5" fill="#4a9eed" opacity="0.8">gradiente · 3D · grelha densa · legenda · bordas redundantes</text>

        {/* ── SETA ── */}
        <text x="258" y="79" textAnchor="middle" fontSize="20" fill={color}>→</text>

        {/* ── GRÁFICO BOM ── */}
        {/* Apenas 2 linhas de referência leves */}
        {[0.5, 1].map(frac => {
          const y = baseY - frac * chartH;
          return <line key={frac} x1="308" y1={y} x2="475" y2={y} stroke="var(--text-secondary)" strokeWidth="0.8"/>;
        })}
        {data.map((v, i) => {
          const h = (v / maxVal) * chartH;
          const x = goodX[i];
          return (
            <g key={i}>
              <rect x={x} y={baseY - h} width={barW} height={h} rx="2" fill={color}/>
              <text x={x + barW / 2} y={baseY - h - 4} textAnchor="middle" fontSize="8" fill="var(--text-primary)" fontWeight="600">{v}</text>
              <text x={x + barW / 2} y={baseY + 10} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{labels[i]}</text>
            </g>
          );
        })}
        <text x="390" y="154" textAnchor="middle" fontSize="6.5" fill="#4a9eed" opacity="0.9">barras simples · 2 linhas de referência · valores directos · sem decoração</text>
      </svg>
    </div>
  );
};

/* ─────────────────────────────────────────────
   SVG 2 — Lie Factor: eixo truncado vs. completo
───────────────────────────────────────────── */
const LieFactorDiagram = () => {
  const anos = [2019, 2020, 2021, 2022];
  const vals = [100, 103, 107, 112];

  // Gráfico esquerdo (mau): Y de 98 a 114
  const yMinBad = 98, yMaxBad = 114;
  const wChart = 180, hChart = 100;
  const xOff = [30, 315];

  const toYBad = v => hChart - ((v - yMinBad) / (yMaxBad - yMinBad)) * hChart;
  const toYGood = v => hChart - ((v - 0) / (120)) * hChart;

  const pointsBad  = vals.map((v, i) => `${i * (wChart / 3)},${toYBad(v)}`).join(' ');
  const pointsGood = vals.map((v, i) => `${i * (wChart / 3)},${toYGood(v)}`).join(' ');

  return (
    <div style={{ ...S.diagram, textAlign: 'center' }}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Lie Factor — Eixo Truncado vs. Completo</p>
      <svg viewBox="0 0 510 165" style={{ maxWidth: '100%', height: 'auto' }}>

        {/* ── GRÁFICO MAU (eixo de 98 a 114) ── */}
        <text x="120" y="13" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Eixo Y começa em 98</text>

        {/* Eixos */}
        <line x1={xOff[0]} y1="20" x2={xOff[0]} y2={20 + hChart} stroke="var(--text-secondary)" strokeWidth="1"/>
        <line x1={xOff[0]} y1={20 + hChart} x2={xOff[0] + wChart} y2={20 + hChart} stroke="var(--text-secondary)" strokeWidth="1"/>

        {/* Ticks Y eixo mau */}
        {[98, 104, 110, 114].map(v => {
          const y = 20 + toYBad(v);
          return (
            <g key={v}>
              <line x1={xOff[0] - 4} y1={y} x2={xOff[0]} y2={y} stroke="var(--text-secondary)" strokeWidth="0.8"/>
              <text x={xOff[0] - 6} y={y + 3} textAnchor="end" fontSize="7" fill="var(--text-secondary)">{v}</text>
            </g>
          );
        })}

        {/* Linha de dados — mau */}
        <polyline
          fill="none"
          points={vals.map((v, i) => `${xOff[0] + i * (wChart / 3)},${20 + toYBad(v)}`).join(' ')}
          stroke="#4a9eed" strokeWidth="2.5" strokeLinejoin="round"/>
        {vals.map((v, i) => (
          <circle key={i} cx={xOff[0] + i * (wChart / 3)} cy={20 + toYBad(v)} r="4" fill="#4a9eed"/>
        ))}
        {/* Labels X */}
        {anos.map((a, i) => (
          <text key={i} x={xOff[0] + i * (wChart / 3)} y={20 + hChart + 13} textAnchor="middle" fontSize="7.5" fill="var(--text-secondary)">{a}</text>
        ))}

        {/* Lie Factor label */}
        <rect x="40" y="140" width="160" height="22" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="0.8"/>
        <text x="120" y="155" textAnchor="middle" fontSize="8.5" fill="#4a9eed" fontWeight="700">Lie Factor ≈ 4.8  —  parece enorme!</text>

        {/* ── SETA ── */}
        <text x="253" y="82" textAnchor="middle" fontSize="20" fill={color}>→</text>

        {/* ── GRÁFICO BOM (eixo de 0 a 120) ── */}
        <text x="405" y="13" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Eixo Y começa em 0</text>

        {/* Eixos */}
        <line x1={xOff[1]} y1="20" x2={xOff[1]} y2={20 + hChart} stroke="var(--text-secondary)" strokeWidth="1"/>
        <line x1={xOff[1]} y1={20 + hChart} x2={xOff[1] + wChart} y2={20 + hChart} stroke="var(--text-secondary)" strokeWidth="1"/>

        {/* Ticks Y eixo bom */}
        {[0, 40, 80, 112].map(v => {
          const y = 20 + toYGood(v);
          return (
            <g key={v}>
              <line x1={xOff[1] - 4} y1={y} x2={xOff[1]} y2={y} stroke="var(--text-secondary)" strokeWidth="0.8"/>
              <text x={xOff[1] - 6} y={y + 3} textAnchor="end" fontSize="7" fill="var(--text-secondary)">{v}</text>
            </g>
          );
        })}

        {/* Linha de dados — boa */}
        <polyline
          fill="none"
          points={vals.map((v, i) => `${xOff[1] + i * (wChart / 3)},${20 + toYGood(v)}`).join(' ')}
          stroke="#4a9eed" strokeWidth="2.5" strokeLinejoin="round"/>
        {vals.map((v, i) => (
          <circle key={i} cx={xOff[1] + i * (wChart / 3)} cy={20 + toYGood(v)} r="4" fill="#4a9eed"/>
        ))}
        {/* Labels X */}
        {anos.map((a, i) => (
          <text key={i} x={xOff[1] + i * (wChart / 3)} y={20 + hChart + 13} textAnchor="middle" fontSize="7.5" fill="var(--text-secondary)">{a}</text>
        ))}

        {/* Lie Factor label */}
        <rect x="330" y="140" width="150" height="22" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="0.8"/>
        <text x="405" y="155" textAnchor="middle" fontSize="8.5" fill="#4a9eed" fontWeight="700">Lie Factor ≈ 1.0  —  honesto</text>
      </svg>

      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
        Os dados são exactamente os mesmos. O eixo truncado faz um crescimento de 12% parecer uma mudança catastrófica.
      </p>
    </div>
  );
};

/* ─────────────────────────────────────────────
   SVG 3 — Hierarquia de Cleveland & McGill
───────────────────────────────────────────── */
const ClevelandHierarchy = () => {
  const items = [
    { rank: 1, label: 'Posição (eixo comum)', desc: 'Mais preciso' },
    { rank: 2, label: 'Posição (eixo não-alinhado)', desc: '' },
    { rank: 3, label: 'Comprimento', desc: '' },
    { rank: 4, label: 'Ângulo / Inclinação', desc: '' },
    { rank: 5, label: 'Área', desc: '' },
    { rank: 6, label: 'Cor (saturação)', desc: '' },
    { rank: 7, label: 'Cor (matiz)', desc: 'Menos preciso' },
  ];

  return (
    <div style={{ ...S.diagram }}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
        Hierarquia Visual de Cleveland &amp; McGill — Precisão Perceptual
      </p>
      <svg viewBox="0 0 560 265" style={{ maxWidth: '100%', height: 'auto' }}>

        {items.map((item, i) => {
          const y = 20 + i * 34;
          const rankColor = i < 2 ? '#4a9eed' : i < 4 ? '#4a9eed' : '#4a9eed';

          return (
            <g key={i}>
              {/* Número de rank */}
              <circle cx="18" cy={y + 10} r="11" fill={rankColor} opacity="0.15"/>
              <text x="18" y={y + 14} textAnchor="middle" fontSize="9" fontWeight="700" fill={rankColor}>{item.rank}</text>

              {/* Label */}
              <text x="36" y={y + 14} fontSize="10" fill="var(--text-primary)" fontWeight={i < 2 ? '700' : '400'}>{item.label}</text>

              {/* Exemplo mini */}
              {i === 0 && (
                // Posição eixo comum — mini bar chart
                <g transform={`translate(330, ${y})`}>
                  {[18, 26, 14, 22].map((h, j) => (
                    <rect key={j} x={j * 16} y={26 - h} width="12" height={h} rx="1" fill={color} opacity="0.8"/>
                  ))}
                  <line x1="0" y1="26" x2="64" y2="26" stroke="var(--text-secondary)" strokeWidth="1"/>
                </g>
              )}
              {i === 1 && (
                // Posição eixo não-alinhado — dot plot
                <g transform={`translate(330, ${y + 4})`}>
                  {[12, 28, 44, 56].map((cx, j) => (
                    <circle key={j} cx={cx} cy={[18, 8, 14, 6][j]} r="4" fill={color} opacity="0.8"/>
                  ))}
                  <line x1="8" y1="22" x2="8" y2="2" stroke="var(--text-secondary)" strokeWidth="0.8"/>
                  <line x1="24" y1="22" x2="24" y2="2" stroke="var(--text-secondary)" strokeWidth="0.8"/>
                  <line x1="40" y1="22" x2="40" y2="2" stroke="var(--text-secondary)" strokeWidth="0.8"/>
                  <line x1="56" y1="22" x2="56" y2="2" stroke="var(--text-secondary)" strokeWidth="0.8"/>
                </g>
              )}
              {i === 2 && (
                // Comprimento — barras horizontais
                <g transform={`translate(330, ${y + 2})`}>
                  {[40, 60, 28, 50].map((w, j) => (
                    <rect key={j} x="0" y={j * 6} width={w} height="4" rx="1" fill={color} opacity="0.75"/>
                  ))}
                </g>
              )}
              {i === 3 && (
                // Ângulo — mini pie
                <g transform={`translate(365, ${y + 12})`}>
                  <path d="M0,0 L14,0 A14,14 0 0,1 7,12.1 Z" fill={color} opacity="0.8"/>
                  <path d="M0,0 L7,12.1 A14,14 0 0,1 -14,0 Z" fill={color} opacity="0.5"/>
                  <path d="M0,0 L-14,0 A14,14 0 0,1 14,0 Z" fill={color} opacity="0.3"/>
                </g>
              )}
              {i === 4 && (
                // Área — bubbles
                <g transform={`translate(330, ${y + 14})`}>
                  {[18, 12, 8, 14].map((r, j) => (
                    <circle key={j} cx={j * 22 + r} cy="0" r={r} fill={color} opacity="0.5"/>
                  ))}
                </g>
              )}
              {i === 5 && (
                // Cor saturação — gradient squares
                <g transform={`translate(330, ${y + 2})`}>
                  {[0.2, 0.4, 0.6, 0.8, 1.0].map((op, j) => (
                    <rect key={j} x={j * 16} y="0" width="13" height="18" rx="2" fill={color} opacity={op}/>
                  ))}
                </g>
              )}
              {i === 6 && (
                // Cor matiz — hue squares
                <g transform={`translate(330, ${y + 2})`}>
                  {['#4a9eed','#4a9eed','#4a9eed','#4a9eed','#4a9eed'].map((c, j) => (
                    <rect key={j} x={j * 16} y="0" width="13" height="18" rx="2" fill={c}/>
                  ))}
                </g>
              )}

              {/* Descrição extremos */}
              {item.desc && (
                <text x="490" y={y + 14} fontSize="8" fill={rankColor} fontWeight="600" textAnchor="start">{item.desc}</text>
              )}

              {/* Linha separadora leve */}
              {i < items.length - 1 && (
                <line x1="0" y1={y + 30} x2="560" y2={y + 30} stroke="var(--text-secondary)" strokeWidth="0.5"/>
              )}
            </g>
          );
        })}

        {/* Seta de precisão */}
        <line x1="556" y1="20" x2="556" y2="248" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)"/>
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)"/>
          </marker>
        </defs>
        <text x="553" y="260" textAnchor="middle" fontSize="7" fill="var(--text-secondary)">menos</text>
      </svg>

      <p style={{ ...S.note, marginTop: '0.75rem' }}>
        Regra prática: sempre que possível, usar posição em vez de ângulo ou área. Um bar chart é quase sempre mais legível do que um pie chart.
      </p>
    </div>
  );
};

/* ─────────────────────────────────────────────
   SVG 4 — Princípios de Gestalt
───────────────────────────────────────────── */
const GestaltDiagram = () => (
  <div style={{ ...S.diagram }}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Princípios de Gestalt</p>
    <svg viewBox="0 0 530 160" style={{ maxWidth: '100%', height: 'auto' }}>

      {/* ── PROXIMIDADE ── */}
      <text x="50" y="12" textAnchor="middle" fontSize="8.5" fill={color} fontWeight="700">Proximidade</text>
      {/* Dois grupos de círculos separados */}
      {[18, 30, 42].map(cx => <circle key={cx} cx={cx} cy="40" r="5" fill={color} opacity="0.7"/>)}
      {[62, 74, 86].map(cx => <circle key={cx} cx={cx} cy="40" r="5" fill={color} opacity="0.7"/>)}
      {/* Segunda linha */}
      {[18, 30, 42].map(cx => <circle key={cx} cx={cx} cy="58" r="5" fill={color} opacity="0.7"/>)}
      {[62, 74, 86].map(cx => <circle key={cx} cx={cx} cy="58" r="5" fill={color} opacity="0.7"/>)}
      <text x="50" y="80" textAnchor="middle" fontSize="7" fill="var(--text-secondary)">2 grupos distintos</text>

      {/* Divisor */}
      <line x1="105" y1="15" x2="105" y2="90" stroke="var(--text-secondary)" strokeWidth="0.8"/>

      {/* ── SEMELHANÇA ── */}
      <text x="155" y="12" textAnchor="middle" fontSize="8.5" fill={color} fontWeight="700">Semelhança</text>
      {[120, 140, 160, 180].map((cx, i) => (
        <g key={cx}>
          {i % 2 === 0
            ? <circle cx={cx} cy="38" r="6" fill={color} opacity="0.8"/>
            : <rect x={cx - 6} y="32" width="12" height="12" rx="1" fill="#e5e7eb" stroke={color} strokeWidth="1.5"/>
          }
          {i % 2 === 0
            ? <circle cx={cx} cy="62" r="6" fill={color} opacity="0.8"/>
            : <rect x={cx - 6} y="56" width="12" height="12" rx="1" fill="#e5e7eb" stroke={color} strokeWidth="1.5"/>
          }
        </g>
      ))}
      <text x="155" y="80" textAnchor="middle" fontSize="7" fill="var(--text-secondary)">forma agrupa percepção</text>

      {/* Divisor */}
      <line x1="210" y1="15" x2="210" y2="90" stroke="var(--text-secondary)" strokeWidth="0.8"/>

      {/* ── CONTINUIDADE ── */}
      <text x="265" y="12" textAnchor="middle" fontSize="8.5" fill={color} fontWeight="700">Continuidade</text>
      {/* Duas linhas que se cruzam */}
      <path d="M225,65 Q265,20 305,65" fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M225,25 Q265,70 305,25" fill="none" stroke="#e5e7eb" strokeWidth="2.5" strokeDasharray="4,2"/>
      <text x="265" y="80" textAnchor="middle" fontSize="7" fill="var(--text-secondary)">seguimos o fluxo da curva</text>

      {/* Divisor */}
      <line x1="318" y1="15" x2="318" y2="90" stroke="var(--text-secondary)" strokeWidth="0.8"/>

      {/* ── FECHAMENTO ── */}
      <text x="368" y="12" textAnchor="middle" fontSize="8.5" fill={color} fontWeight="700">Fechamento</text>
      {/* Círculo incompleto que o cérebro fecha */}
      <path d="M368,55 m-22,0 a22,22 0 1,1 31,16" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <text x="368" y="80" textAnchor="middle" fontSize="7" fill="var(--text-secondary)">o cérebro completa a forma</text>

      {/* Divisor */}
      <line x1="420" y1="15" x2="420" y2="90" stroke="var(--text-secondary)" strokeWidth="0.8"/>

      {/* ── FIGURA-FUNDO ── */}
      <text x="472" y="12" textAnchor="middle" fontSize="8.5" fill={color} fontWeight="700">Figura-Fundo</text>
      <rect x="432" y="20" width="80" height="60" rx="4" fill="var(--bg-primary)" stroke={color} strokeWidth="0.8"/>
      {/* Figura em destaque */}
      <circle cx="472" cy="50" r="20" fill={color} opacity="0.85"/>
      <text x="472" y="80" textAnchor="middle" fontSize="7" fill="var(--text-secondary)">figura destaca-se do fundo</text>

      {/* Linha separadora de exemplos vs descrições */}
      <line x1="0" y1="92" x2="530" y2="92" stroke="var(--text-secondary)" strokeWidth="0.6"/>

      {/* ── DESCRIÇÕES ── */}
      <text x="50"  y="108" textAnchor="middle" fontSize="7.5" fill="var(--text-primary)">Elementos próximos</text>
      <text x="50"  y="118" textAnchor="middle" fontSize="7.5" fill="var(--text-primary)">parecem um grupo</text>

      <text x="155" y="108" textAnchor="middle" fontSize="7.5" fill="var(--text-primary)">Elementos semelhantes</text>
      <text x="155" y="118" textAnchor="middle" fontSize="7.5" fill="var(--text-primary)">formam categorias</text>

      <text x="265" y="108" textAnchor="middle" fontSize="7.5" fill="var(--text-primary)">O olho segue linhas</text>
      <text x="265" y="118" textAnchor="middle" fontSize="7.5" fill="var(--text-primary)">e curvas contínuas</text>

      <text x="368" y="108" textAnchor="middle" fontSize="7.5" fill="var(--text-primary)">Formas incompletas</text>
      <text x="368" y="118" textAnchor="middle" fontSize="7.5" fill="var(--text-primary)">são completadas</text>

      <text x="472" y="108" textAnchor="middle" fontSize="7.5" fill="var(--text-primary)">Separamos figura</text>
      <text x="472" y="118" textAnchor="middle" fontSize="7.5" fill="var(--text-primary)">do contexto</text>
    </svg>
  </div>
);

/* ─────────────────────────────────────────────
   SVG 5 — Pre-attentive Attributes (pop-out)
───────────────────────────────────────────── */
const PreattentiveDiagram = () => {
  // Grid de círculos 8x4 — um vermelho no meio
  const rows = 4, cols = 8;
  const circles = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const isTarget = r === 2 && c === 4;
      circles.push({ r, c, isTarget });
    }
  }

  // Segundo exemplo: círculos vazios + 1 preenchido
  const circles2 = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const isFilled = r === 1 && c === 6;
      circles2.push({ r, c, isFilled });
    }
  }

  return (
    <div style={{ ...S.diagram }}>
      <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
        Pre-attentive Attributes — detecção em &lt;200ms
      </p>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        O cérebro detecta estes atributos instantaneamente, antes de qualquer processamento consciente.
      </p>
      <svg viewBox="0 0 520 230" style={{ maxWidth: '100%', height: 'auto' }}>

        {/* ── EXEMPLO 1: Pop-out por COR ── */}
        <text x="140" y="7" textAnchor="middle" fontSize="9" fontWeight="700" fill={color}>Pop-out por COR</text>
        <text x="140" y="17" textAnchor="middle" fontSize="7.5" fill="var(--text-secondary)">Encontre o círculo vermelho</text>

        {circles.map(({ r, c, isTarget }, idx) => (
          <circle
            key={idx}
            cx={20 + c * 30}
            cy={35 + r * 28}
            r="9"
            fill={isTarget ? '#4a9eed' : color}
            opacity={isTarget ? 1 : 0.35}
          />
        ))}

        {/* Seta apontando para o alvo */}
        <line x1="162" y1="78" x2="148" y2="92" stroke="#4a9eed" strokeWidth="1.5"
          markerEnd="url(#red-arr)"/>
        <defs>
          <marker id="red-arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/>
          </marker>
        </defs>
        <text x="180" y="75" fontSize="8" fill="#4a9eed" fontWeight="700">imediato!</text>

        {/* Divider vertical */}
        <line x1="270" y1="12" x2="270" y2="148" stroke="var(--text-secondary)" strokeWidth="0.8"/>

        {/* ── EXEMPLO 2: Pop-out por FORMA (preenchido) ── */}
        <text x="395" y="7" textAnchor="middle" fontSize="9" fontWeight="700" fill={color}>Pop-out por FORMA</text>
        <text x="395" y="17" textAnchor="middle" fontSize="7.5" fill="var(--text-secondary)">Círculo preenchido entre vazios</text>

        {circles2.map(({ r, c, isFilled }, idx) => (
          <circle
            key={idx}
            cx={285 + c * 30}
            cy={35 + r * 28}
            r="9"
            fill={isFilled ? color : 'none'}
            stroke={color}
            strokeWidth="1.8"
            opacity={isFilled ? 1 : 0.4}
          />
        ))}

        {/* ── LINHA SEPARADORA ── */}
        <line x1="0" y1="150" x2="520" y2="150" stroke="var(--text-secondary)" strokeWidth="0.6"/>

        {/* ── TABELA de atributos ── */}
        <text x="10" y="167" fontSize="9" fontWeight="700" fill="var(--text-primary)">Atributo</text>
        <text x="160" y="167" fontSize="9" fontWeight="700" fill="var(--text-primary)">Exemplos de uso</text>
        <text x="360" y="167" fontSize="9" fontWeight="700" fill="var(--text-primary)">Atenção</text>

        {[
          ['Cor (matiz)', 'Categorias distintas, alertas', 'Alta'],
          ['Forma', 'Categorias, séries num scatter', 'Alta'],
          ['Tamanho', 'Magnitude, bubble charts', 'Média'],
          ['Orientação', 'Direcção, vectores, desvio', 'Média'],
        ].map(([attr, uso, atencao], i) => {
          const y = 180 + i * 13;
          return (
            <g key={i}>
              <text x="10"  y={y} fontSize="8" fill="var(--text-primary)" fontWeight="600">{attr}</text>
              <text x="160" y={y} fontSize="8" fill="var(--text-secondary)">{uso}</text>
              <text x="360" y={y} fontSize="8"
                fill={atencao === 'Alta' ? '#4a9eed' : '#4a9eed'}>{atencao}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/* ─────────────────────────────────────────────
   SVG 6 — Árvore de Decisão de Gráficos
───────────────────────────────────────────── */
const ChartDecisionTree = () => (
  <div style={{ ...S.diagram }}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Árvore de Decisão — Que Gráfico Usar?</p>
    <svg viewBox="0 0 860 310" style={{ maxWidth: '100%', height: 'auto' }}>

      {/* ── NÓ RAIZ (center=430) ── */}
      <rect x="330" y="8" width="200" height="30" rx="6" fill={color} opacity="0.9"/>
      <text x="430" y="28" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">Que relação mostras?</text>

      {/* ── RAMO COMPARAÇÃO (center=90) ── */}
      <line x1="370" y1="38" x2="90" y2="72" stroke={color} strokeWidth="1.2"/>
      <rect x="25" y="72" width="130" height="26" rx="5" fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth="1"/>
      <text x="90" y="89" textAnchor="middle" fontSize="9" fontWeight="600" fill={color}>Comparação</text>
      <line x1="90" y1="98" x2="50" y2="128" stroke="var(--text-secondary)" strokeWidth="1"/>
      <line x1="90" y1="98" x2="140" y2="128" stroke="var(--text-secondary)" strokeWidth="1"/>
      <rect x="5"   y="128" width="85" height="24" rx="5" fill="#4a9eed" opacity="0.15" stroke="#4a9eed" strokeWidth="1"/>
      <text x="47"  y="144" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#4a9eed">Bar Chart</text>
      <rect x="97"  y="128" width="85" height="24" rx="5" fill="#4a9eed" opacity="0.15" stroke="#4a9eed" strokeWidth="1"/>
      <text x="139" y="144" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#4a9eed">Dot Plot</text>

      {/* ── RAMO DISTRIBUIÇÃO (center=285) ── */}
      <line x1="400" y1="38" x2="285" y2="72" stroke={color} strokeWidth="1.2"/>
      <rect x="215" y="72" width="140" height="26" rx="5" fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth="1"/>
      <text x="285" y="89" textAnchor="middle" fontSize="9" fontWeight="600" fill={color}>Distribuição</text>
      <line x1="285" y1="98" x2="242" y2="128" stroke="var(--text-secondary)" strokeWidth="1"/>
      <line x1="285" y1="98" x2="338" y2="128" stroke="var(--text-secondary)" strokeWidth="1"/>
      <rect x="197" y="128" width="90" height="24" rx="5" fill="#4a9eed" opacity="0.15" stroke="#4a9eed" strokeWidth="1"/>
      <text x="242" y="144" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#4a9eed">Histogram</text>
      <rect x="293" y="128" width="90" height="24" rx="5" fill="#4a9eed" opacity="0.15" stroke="#4a9eed" strokeWidth="1"/>
      <text x="338" y="144" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#4a9eed">Box Plot</text>

      {/* ── RAMO RELAÇÃO (center=450) ── */}
      <line x1="430" y1="38" x2="450" y2="72" stroke={color} strokeWidth="1.2"/>
      <rect x="395" y="72" width="110" height="26" rx="5" fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth="1"/>
      <text x="450" y="89" textAnchor="middle" fontSize="9" fontWeight="600" fill={color}>Relação</text>
      <line x1="450" y1="98" x2="450" y2="128" stroke="var(--text-secondary)" strokeWidth="1"/>
      <rect x="395" y="128" width="110" height="24" rx="5" fill="#4a9eed" opacity="0.15" stroke="#4a9eed" strokeWidth="1"/>
      <text x="450" y="144" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#4a9eed">Scatter Plot</text>

      {/* ── RAMO COMPOSIÇÃO (center=615) ── */}
      <line x1="460" y1="38" x2="615" y2="72" stroke={color} strokeWidth="1.2"/>
      <rect x="550" y="72" width="130" height="26" rx="5" fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth="1"/>
      <text x="615" y="89" textAnchor="middle" fontSize="9" fontWeight="600" fill={color}>Composição</text>
      <line x1="615" y1="98" x2="572" y2="128" stroke="var(--text-secondary)" strokeWidth="1"/>
      <line x1="615" y1="98" x2="668" y2="128" stroke="var(--text-secondary)" strokeWidth="1"/>
      <rect x="527" y="128" width="90" height="24" rx="5" fill="#4a9eed" opacity="0.15" stroke="#4a9eed" strokeWidth="1"/>
      <text x="572" y="144" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#4a9eed">Stacked Bar</text>
      <rect x="623" y="128" width="90" height="24" rx="5" fill="#4a9eed" opacity="0.15" stroke="#4a9eed" strokeWidth="1"/>
      <text x="668" y="144" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#4a9eed">Pie (≤5 fatias)</text>

      {/* ── RAMO TENDÊNCIA (center=785) ── */}
      <line x1="490" y1="38" x2="785" y2="72" stroke={color} strokeWidth="1.2"/>
      <rect x="725" y="72" width="120" height="26" rx="5" fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth="1"/>
      <text x="785" y="89" textAnchor="middle" fontSize="9" fontWeight="600" fill={color}>Tendência</text>
      <line x1="785" y1="98" x2="785" y2="128" stroke="var(--text-secondary)" strokeWidth="1"/>
      <rect x="730" y="128" width="110" height="24" rx="5" fill="#4a9eed" opacity="0.15" stroke="#4a9eed" strokeWidth="1"/>
      <text x="785" y="144" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#4a9eed">Line Chart</text>

      {/* ── LINHA SEPARADORA ── */}
      <line x1="0" y1="168" x2="860" y2="168" stroke="var(--text-secondary)" strokeWidth="0.6"/>


      {/* ── NOTAS DE REFINAMENTO ── */}
      <text x="10" y="185" fontSize="9" fontWeight="700" fill="var(--text-primary)">Refinamentos adicionais:</text>

      {[
        ['Muitas categorias (&gt;12)', 'Lollipop chart ou tabela ordenada'],
        ['2 variáveis contínuas + 1 categórica', 'Scatter com cor por categoria'],
        ['Evolução de partes ao longo do tempo', 'Stacked area chart'],
        ['Comparar distribuições múltiplas', 'Violin plot ou ridge plot'],
        ['Hierarquia / parte-todo aninhado', 'Treemap ou sunburst'],
        ['Dados geográficos', 'Choropleth map ou bubble map'],
      ].map(([cond, graph], i) => {
        const y = 200 + i * 17;
        return (
          <g key={i}>
            <text x="10" y={y} fontSize="8.5" fill="var(--text-secondary)">{cond}</text>
            <text x="10" y={y} fontSize="8.5" fill="var(--text-secondary)">{'→'}</text>
            <text x="220" y={y} fontSize="8.5" fontWeight="600" fill={color}>→ {graph}</text>
          </g>
        );
      })}
    </svg>
  </div>
);

/* ─────────────────────────────────────────────
   Componente principal
───────────────────────────────────────────── */
export default function DV1() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>

        {/* Navegação */}
        <Link to="/dv" style={S.back}>
          <ArrowLeft size={16} /> Voltar a Visualização de Dados
        </Link>

        {/* Cabeçalho */}
        <div style={S.tag}>MÓDULO 01</div>
        <h1 style={S.h1}>Princípios de Visualização</h1>

        {/* ══════════════════════════════════════════
            SECÇÃO 1 — DATA-INK RATIO
        ══════════════════════════════════════════ */}
        <div style={S.section}>
          <h2 style={S.h2}>1. Data-Ink Ratio (Tufte)</h2>

          <p style={S.p}>
            Edward Tufte introduziu o conceito de <strong>data-ink ratio</strong> no livro <em>The Visual Display of Quantitative Information</em> (1983). A ideia é simples mas poderosa: de toda a "tinta" usada num gráfico, que percentagem representa dados reais e não decoração?
          </p>

          <div style={S.highlight}>
            <strong>Fórmula:</strong>
          </div>

          <p style={S.p}>
            O objectivo não é um gráfico em branco — é que cada elemento visual justifique a sua presença. Uma linha de referência horizontal pode ser útil; seis linhas de grelha horizontal e vertical densas raramente o são. A diferença está em se o elemento ajuda o leitor a extrair a informação ou simplesmente ocupa espaço visual.
          </p>

          <h3 style={S.h3}>Chart Junk — o inimigo do data-ink ratio</h3>
          <p style={S.p}>
            Tufte cunhou o termo <strong>chart junk</strong> para descrever todo o ornamento visual que reduz o data-ink ratio sem acrescentar informação: gradientes em barras, sombras projectadas, bordas redundantes, padrões de preenchimento, ícones decorativos, efeitos 3D, e grelhas desnecessariamente densas. Cada um destes elementos compete com os dados pela atenção do leitor.
          </p>

          <DataInkDiagram />

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Elemento</th>
                  <th style={S.th}>Necessário?</th>
                  <th style={S.th}>Alternativa</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Grelha horizontal densa', 'Raramente', 'Só 2-3 linhas de referência, bem leves'],
                  ['Grelha vertical', 'Quase nunca', 'Remover — o eixo X é suficiente'],
                  ['Bordas em barras', 'Não', 'Barras sólidas sem stroke'],
                  ['Legendas quando há 1 série', 'Não', 'Label directo na série'],
                  ['Efeito 3D em barras ou pie', 'Nunca', '2D sempre — 3D distorce os valores'],
                  ['Background colorido', 'Raramente', 'Fundo branco ou neutro da interface'],
                  ['Gradientes em barras', 'Não', 'Preenchimento sólido e uniforme'],
                  ['Sombras projectadas', 'Não', 'Remover completamente'],
                  ['Ícones em vez de barras', 'Quase nunca', 'Formas geométricas simples'],
                ].map(([el, n, a]) => (
                  <tr key={el}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{el}</td>
                    <td style={{ ...S.td, color: n === 'Nunca' || n === 'Não' ? '#4a9eed' : '#4a9eed' }}>{n}</td>
                    <td style={{ ...S.td, color: '#4a9eed' }}>{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>
            Nota: maximizar o data-ink ratio não significa remover toda a estética. Um gráfico pode ser visualmente apelativo e ter um ratio elevado. A questão é: cada elemento existe porque <em>comunica</em> ou porque <em>decora</em>?
          </div>
        </div>

        <hr style={S.divider}/>

        {/* ══════════════════════════════════════════
            SECÇÃO 2 — LIE FACTOR
        ══════════════════════════════════════════ */}
        <div style={S.section}>
          <h2 style={S.h2}>2. Lie Factor e Escalas Enganosas</h2>

          <p style={S.p}>
            O <strong>lie factor</strong> mede a distorção entre o que o gráfico mostra visualmente e o que os dados realmente dizem. Um valor de 1.0 é perfeito — o que se vê corresponde ao que existe nos dados. Valores acima ou abaixo de 1.0 indicam distorção.
          </p>

          <div style={S.highlight}>
            <strong>Fórmula:</strong>
          </div>

          <p style={S.p}>
            Tufte documentou exemplos históricos chocantes em jornais e relatórios corporativos: um gráfico mostrava um aumento de preços de 454% com uma barra visualmente 27× maior, resultando num lie factor de 5.9. Na maior parte dos casos, a distorção não é intencional — resulta de escolhas de design tomadas sem consciência das suas implicações perceptuais.
          </p>

          <LieFactorDiagram />

          <h3 style={S.h3}>Formas Comuns de Distorção</h3>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Distorção</th>
                  <th style={S.th}>Lie Factor típico</th>
                  <th style={S.th}>Regra correctiva</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Eixo Y truncado em bar chart', 'Variável — pode ser 5×-20×', 'Barras começam sempre em 0'],
                  ['Área proporcional ao raio, não à área', '4× (r² vs r)', 'Área ∝ valor; s = k × valor no Matplotlib'],
                  ['Escala logarítmica não declarada', 'Variável', 'Declarar explicitamente no eixo'],
                  ['Pie chart 3D com perspectiva', '1.3-1.5× para fatias da frente', 'Usar sempre 2D; preferir bar chart'],
                  ['Eixos com escalas diferentes em comparações', 'Variável', 'Mesma escala para gráficos comparados'],
                ].map(([d, lf, r]) => (
                  <tr key={d}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{d}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontFamily: 'monospace', fontSize: '0.82rem' }}>{lf}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>
            Excepção ao eixo Y = 0: em <strong>line charts</strong> que mostram tendências ao longo do tempo (não magnitudes absolutas), truncar o eixo Y pode ser aceitável, desde que seja claramente indicado e o contexto justifique mostrar a variação em detalhe. A regra é inegociável para bar charts.
          </div>
        </div>

        <hr style={S.divider}/>

        {/* ══════════════════════════════════════════
            SECÇÃO 3 — HIERARQUIA DE CLEVELAND & McGILL
        ══════════════════════════════════════════ */}
        <div style={S.section}>
          <h2 style={S.h2}>3. Hierarquia Visual de Cleveland &amp; McGill</h2>

          <p style={S.p}>
            Em 1984, William Cleveland e Robert McGill publicaram um estudo seminal — <em>"Graphical Perception: Theory, Experimentation, and Application to the Development of Graphical Methods"</em> — onde mediram com precisão quão bem as pessoas interpretam diferentes codificações visuais. O resultado foi uma hierarquia de precisão perceptual que ainda hoje orienta o design de visualizações.
          </p>

          <p style={S.p}>
            A implicação prática é directa: sempre que o objectivo é comparar valores com precisão, usar <strong>posição num eixo comum</strong> (bar chart, dot plot) em vez de <strong>ângulo</strong> (pie chart) ou <strong>área</strong> (bubble chart). Os erros de estimação aumentam sistematicamente à medida que descemos na hierarquia.
          </p>

          <ClevelandHierarchy />

          <h3 style={S.h3}>Implicações Práticas</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Escolha comum</th>
                  <th style={S.th}>Canal usado</th>
                  <th style={S.th}>Alternativa mais precisa</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Pie chart para quota de mercado', 'Ângulo', 'Bar chart horizontal ordenado'],
                  ['Bubble chart para 3 variáveis', 'Posição (x,y) + Área', 'Manter, mas nunca comparar áreas isoladas'],
                  ['Heatmap para correlações', 'Cor (saturação)', 'Aceitar — mas usar escala divergente clara'],
                  ['Stacked bar para evolução de partes', 'Comprimento relativo', 'Ok para totais; difícil para categorias intermédias'],
                  ['Donut chart', 'Ângulo', 'Bar chart — o buraco central desperdiça espaço'],
                ].map(([c, ca, alt]) => (
                  <tr key={c}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{c}</td>
                    <td style={{ ...S.td, color: '#4a9eed' }}>{ca}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{alt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider}/>

        {/* ══════════════════════════════════════════
            SECÇÃO 4 — GESTALT
        ══════════════════════════════════════════ */}
        <div style={S.section}>
          <h2 style={S.h2}>4. Princípios de Gestalt e Agrupamento Visual</h2>

          <p style={S.p}>
            A psicologia da Gestalt (início do séc. XX, Wertheimer, Köhler, Koffka) estudou como o sistema visual humano organiza elementos perceptuais em estruturas coerentes. Os princípios descobertos são directamente aplicáveis ao design de visualizações: permitem criar agrupamentos e hierarquias visuais sem adicionar elementos decorativos.
          </p>

          <GestaltDiagram />

          <h3 style={S.h3}>Aplicação em Visualizações de Dados</h3>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Princípio</th>
                  <th style={S.th}>Aplicação em dataviz</th>
                  <th style={S.th}>Exemplo concreto</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Proximidade', 'Agrupar elementos relacionados', 'Barras agrupadas por categoria vs. barras de períodos diferentes com espaçamento maior'],
                  ['Semelhança', 'Codificar categoria com cor ou forma', 'Linhas de diferentes países com cores distintas num line chart'],
                  ['Continuidade', 'Guiar o olho através de sequências', 'Linhas em vez de barras para mostrar evolução temporal'],
                  ['Fechamento', 'Criar fronteiras implícitas', 'Áreas sombreadas em torno de intervalos de confiança'],
                  ['Figura-Fundo', 'Destacar o dado importante', 'Série principal em cor saturada; comparadores em cinzento'],
                ].map(([p, a, e]) => (
                  <tr key={p}>
                    <td style={{ ...S.td, fontWeight: 700, color }}>{p}</td>
                    <td style={S.td}>{a}</td>
                    <td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>
            Os princípios de Gestalt são especialmente poderosos porque funcionam <em>sem texto explicativo</em>. Um bom uso da proximidade e semelhança elimina a necessidade de uma legenda elaborada.
          </div>
        </div>

        <hr style={S.divider}/>

        {/* ══════════════════════════════════════════
            SECÇÃO 5 — PRE-ATTENTIVE ATTRIBUTES
        ══════════════════════════════════════════ */}
        <div style={S.section}>
          <h2 style={S.h2}>5. Atributos Pré-atencionais</h2>

          <p style={S.p}>
            Os <strong>atributos pré-atencionais</strong> são características visuais processadas pelo sistema visual humano de forma automática e massivamente paralela, antes de qualquer atenção consciente ser dirigida. A detecção ocorre em menos de 200 milissegundos — demasiado rápido para ser resultado de um scan sequencial deliberado.
          </p>

          <p style={S.p}>
            Em termos práticos: se um elemento "salta à vista" imediatamente quando olhamos para um gráfico, é porque usa um atributo pré-atencional. Se tivermos de procurar linha a linha, o atributo não é pré-atencional — é atencional, e requer esforço cognitivo consciente.
          </p>

          <PreattentiveDiagram />

          <h3 style={S.h3}>Quando Usar Cada Atributo</h3>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Atributo</th>
                  <th style={S.th}>Melhor para</th>
                  <th style={S.th}>Armadilhas</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cor (matiz)', 'Distinguir categorias nominais (máx. 7-8)', 'Não usar para ordenar ou mostrar magnitude; considerar daltonismo'],
                  ['Cor (saturação)', 'Escala contínua ou magnitude', 'Difícil distinguir &gt;5-6 níveis de saturação'],
                  ['Forma', 'Categorias em scatter plots', 'Mais de 5-6 formas torna-se confuso'],
                  ['Tamanho', 'Magnitude (bubble charts)', 'Difícil comparar áreas com precisão'],
                  ['Orientação', 'Direcção, desvio positivo/negativo', 'Subtil em ângulos próximos de 45°'],
                  ['Posição', 'Qualquer relação quantitativa', 'Canal mais poderoso — usar sempre que possível'],
                ].map(([a, m, ar]) => (
                  <tr key={a}>
                    <td style={{ ...S.td, fontWeight: 700, color }}>{a}</td>
                    <td style={S.td}>{m}</td>
                    <td style={{ ...S.td, fontSize: '0.82rem', color: '#4a9eed' }}>{ar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>
            Regra de ouro: usar no máximo <strong>1-2 atributos pré-atencionais simultâneos</strong>. Combinar cor + forma + tamanho + orientação ao mesmo tempo transforma o gráfico num puzzle em vez de uma comunicação.
          </div>
        </div>

        <hr style={S.divider}/>

        {/* ══════════════════════════════════════════
            SECÇÃO 6 — ÁRVORE DE DECISÃO
        ══════════════════════════════════════════ */}
        <div style={S.section}>
          <h2 style={S.h2}>6. Escolha do Gráfico Certo</h2>

          <p style={S.p}>
            A escolha do tipo de gráfico deve ser determinada pela <strong>relação que se quer comunicar</strong>, não pela estética nem pela familiaridade. Existem cinco tipos de relação fundamentais em análise de dados, e cada um tem tipos de gráfico optimizados para a sua comunicação.
          </p>

          <ChartDecisionTree />

          <h3 style={S.h3}>Guia Rápido de Referência</h3>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Relação</th>
                  <th style={S.th}>Pergunta típica</th>
                  <th style={S.th}>Gráfico recomendado</th>
                  <th style={S.th}>Evitar</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Comparação', 'Qual produto vendeu mais?', 'Bar chart ordenado', 'Pie chart, 3D'],
                  ['Distribuição', 'Como se distribuem os salários?', 'Histogram, box plot, violin', 'Bar chart de médias'],
                  ['Relação / Correlação', 'Há correlação entre X e Y?', 'Scatter plot', 'Line chart para dados não-sequenciais'],
                  ['Composição', 'Qual a fatia de cada segmento?', 'Stacked bar, treemap', 'Pie com &gt;5 fatias'],
                  ['Tendência temporal', 'Como evoluiu ao longo do tempo?', 'Line chart', 'Bar chart para séries longas'],
                ].map(([r, p, g, e]) => (
                  <tr key={r}>
                    <td style={{ ...S.td, fontWeight: 700, color }}>{r}</td>
                    <td style={{ ...S.td, fontSize: '0.85rem', fontStyle: 'italic' }}>{p}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontWeight: 600 }}>{g}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.82rem' }}>{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider}/>

        {/* ══════════════════════════════════════════
            SECÇÃO 7 — ANTI-PADRÕES COMUNS
        ══════════════════════════════════════════ */}
        <div style={S.section}>
          <h2 style={S.h2}>7. Anti-padrões Comuns</h2>

          <p style={S.p}>
            Os anti-padrões em visualização são escolhas de design recorrentes que sistematicamente prejudicam a comunicação. Reconhecê-los é tão importante quanto conhecer as boas práticas, porque aparecem constantemente em relatórios, dashboards corporativos e apresentações.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Anti-padrão</th>
                  <th style={S.th}>Exemplo</th>
                  <th style={S.th}>Porque é mau</th>
                  <th style={S.th}>Alternativa</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Pie chart com &gt;5 fatias',
                    'Pizza chart com 12 categorias de produto',
                    'O sistema visual humano compara ângulos com baixa precisão. Com muitas fatias, as diferenças tornam-se imperceptíveis.',
                    'Bar chart horizontal ordenado por valor descendente'
                  ],
                  [
                    'Gráficos 3D',
                    'Bar chart 3D em PowerPoint com perspectiva',
                    'A perspectiva introduz distorção sistemática: barras à frente parecem maiores. Lie factor elevado e sem informação adicional.',
                    'Gráfico 2D equivalente sem qualquer perda de informação'
                  ],
                  [
                    'Eixos duplos (dual axes)',
                    'Linha de receita + linha de margem em eixos Y diferentes',
                    'O leitor pode manipular a escala de um dos eixos para sugerir qualquer relação, mesmo que não exista. Correlação visual ≠ correlação real.',
                    'Dois gráficos separados com contexto claro, ou normalização para mesma escala'
                  ],
                  [
                    'Rainbow colormap',
                    'Heatmap com gradiente arco-íris (azul→verde→amarelo→vermelho)',
                    'A percepção humana de cor não é uniforme ao longo do espectro. Cria fronteiras artificiais e distorce a leitura de dados contínuos.',
                    'Colormap sequencial (ex: viridis, plasma) ou divergente para dados com ponto médio'
                  ],
                  [
                    'Eixo Y truncado em bar chart',
                    'Bar chart com Y a começar em 95 para diferenças entre 97-100',
                    'Exagera visualmente diferenças pequenas. Lie factor pode exceder 10× dependendo do intervalo truncado.',
                    'Eixo Y a começar em 0. Se a variação é o foco, usar line chart com eixo truncado declarado.'
                  ],
                  [
                    'Excesso de cores (rainbow categories)',
                    'Scatter com 15 categorias em 15 cores diferentes',
                    'A atenção visual não consegue gerir &gt;7-8 categorias de cor simultaneamente. Resulta em gráfico que exige legenda demorada.',
                    'Destacar 1-3 categorias relevantes; agrupar o resto em "Outros" com cinzento'
                  ],
                  [
                    'Médias sem distribuição',
                    'Bar chart de médias por grupo sem error bars ou distribuição',
                    'Duas distribuições com a mesma média podem ser completamente diferentes (ex: bimodal vs. normal). A média esconde variabilidade crítica.',
                    'Box plot, violin plot, ou bar chart com error bars de desvio padrão ou IC 95%'
                  ],
                  [
                    'Animações desnecessárias',
                    'Dashboard com barras que crescem animadas a cada refresh',
                    'A animação distrai da leitura de valores e não acrescenta informação. Aumenta o tempo de processamento cognitivo.',
                    'Gráfico estático. Animação só justificada para mostrar evolução temporal em transições entre estados.'
                  ],
                ].map(([a, ex, why, alt]) => (
                  <tr key={a}>
                    <td style={{ ...S.td, fontWeight: 700, color: '#4a9eed', minWidth: 140 }}>{a}</td>
                    <td style={{ ...S.td, fontSize: '0.82rem', fontStyle: 'italic', color: 'var(--text-secondary)', minWidth: 160 }}>{ex}</td>
                    <td style={{ ...S.td, fontSize: '0.82rem', minWidth: 200 }}>{why}</td>
                    <td style={{ ...S.td, fontSize: '0.82rem', color: '#4a9eed', minWidth: 180 }}>{alt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>
            A maioria dos anti-padrões existe porque as ferramentas os oferecem como opção por omissão (Excel, PowerPoint) ou porque o criador os viu em relatórios de prestígio. A presença num relatório de uma consultora de topo não valida um anti-padrão — valida apenas a sua persistência histórica.
          </div>
        </div>

      </div>
    </div>
  );
}
