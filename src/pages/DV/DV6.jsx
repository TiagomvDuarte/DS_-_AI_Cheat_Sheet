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

/* ── SVG: Pipeline da Gramática ── */
const GrammarPipeline = () => {
  const steps = ['Data', 'Transformations', 'Scales', 'Marks', 'Guides', 'Coord. System'];
  const w = 86, gap = 14, total = steps.length * w + (steps.length - 1) * gap;
  return (
    <div style={{ ...S.diagram, textAlign: 'center' }}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
        Pipeline da Gramática dos Gráficos
      </p>
      <svg viewBox={`0 0 600 80`} style={{ maxWidth: '100%', height: 'auto' }}>
        {steps.map((label, i) => {
          const x = 10 + i * (w + gap);
          return (
            <g key={i}>
              <rect x={x} y={12} width={w} height={46} rx={7} fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth="1.4" />
              <text x={x + w / 2} y={32} textAnchor="middle" fill={color} fontSize="8" fontWeight="700">{label}</text>
              <text x={x + w / 2} y={46} textAnchor="middle" fill="var(--text-secondary)" fontSize="6.5">
                {['df, csv', 'bin, agg', 'linear, log', 'point, bar', 'axis, legend', 'cartesian'][i]}
              </text>
              {i < steps.length - 1 && (
                <path d={`M${x + w + 2},35 L${x + w + gap - 2},35`} stroke="var(--text-secondary)" strokeWidth="1.2" fill="none" markerEnd="url(#arr)" />
              )}
            </g>
          );
        })}
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
          </marker>
        </defs>
        <text x="300" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">
          Qualquer gráfico pode ser descrito por esta sequência de componentes independentes
        </text>
      </svg>
    </div>
  );
};

/* ── SVG: Tabela visual de Encodings ── */
const EncodingTable = () => {
  const rows = [
    { canal: 'x', tipo: 'Q / O / T', exemplo: 'posição horizontal — eixo numérico ou temporal', cx: 420, cy: 38, shape: 'axis' },
    { canal: 'y', tipo: 'Q / O', exemplo: 'posição vertical — quantidade ou categoria', cx: 420, cy: 85, shape: 'axis-v' },
    { canal: 'color', tipo: 'N / Q', exemplo: 'hue p/ nominal, gradiente p/ quantitativo', cx: 420, cy: 132, shape: 'color' },
    { canal: 'size', tipo: 'Q', exemplo: 'área proporcional ao valor numérico', cx: 420, cy: 179, shape: 'size' },
    { canal: 'shape', tipo: 'N', exemplo: 'símbolo diferente por categoria (≤6 cat.)', cx: 420, cy: 226, shape: 'shape' },
  ];
  return (
    <div style={{ ...S.diagram }}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
        Canais Visuais (Encodings) e Tipos de Dado
      </p>
      <svg viewBox="0 0 560 260" style={{ maxWidth: '100%', height: 'auto' }}>
        {/* header */}
        <rect x={0} y={0} width={560} height={22} fill="rgba(74,158,237,0.10)" rx={4} />
        <text x={12} y={15} fill={color} fontSize="8.5" fontWeight="700">Canal</text>
        <text x={80} y={15} fill={color} fontSize="8.5" fontWeight="700">Tipos de Dado</text>
        <text x={200} y={15} fill={color} fontSize="8.5" fontWeight="700">Descrição</text>
        <text x={430} y={15} fill={color} fontSize="8.5" fontWeight="700">Exemplo visual</text>
        {rows.map((r, i) => {
          const y = 22 + i * 47;
          return (
            <g key={i}>
              <rect x={0} y={y} width={560} height={47} fill={i % 2 === 0 ? 'rgba(74,158,237,0.10)' : 'transparent'} />
              <text x={12} y={y + 24} fill={color} fontSize="9.5" fontWeight="700" fontFamily="monospace">{r.canal}</text>
              <text x={80} y={y + 24} fill="var(--text-secondary)" fontSize="8" fontFamily="monospace">{r.tipo}</text>
              <text x={200} y={y + 24} fill="var(--text-primary)" fontSize="8">{r.exemplo}</text>
              {/* mini visual hint */}
              {r.shape === 'color' && (
                <>
                  <circle cx={438} cy={y + 22} r={7} fill="#4a9eed" />
                  <circle cx={452} cy={y + 22} r={7} fill="#4a9eed" />
                  <circle cx={466} cy={y + 22} r={7} fill="#4a9eed" />
                </>
              )}
              {r.shape === 'size' && (
                <>
                  <circle cx={435} cy={y + 22} r={4} fill={color} opacity="0.5" />
                  <circle cx={448} cy={y + 22} r={7} fill={color} opacity="0.6" />
                  <circle cx={465} cy={y + 22} r={11} fill={color} opacity="0.7" />
                </>
              )}
              {r.shape === 'shape' && (
                <>
                  <circle cx={438} cy={y + 22} r={6} fill="none" stroke={color} strokeWidth="1.5" />
                  <rect x={448} y={y + 16} width={12} height={12} fill="none" stroke="#4a9eed" strokeWidth="1.5" />
                  <path d="M468,28 L474,16 L480,28 Z" fill="none" stroke="#4a9eed" strokeWidth="1.5" transform={`translate(0,${y - 6})`} />
                </>
              )}
              {r.shape === 'axis' && (
                <>
                  <line x1={428} y1={y + 30} x2={510} y2={y + 30} stroke="var(--text-secondary)" strokeWidth="1" />
                  {[0, 1, 2, 3].map(j => (
                    <line key={j} x1={428 + j * 27} y1={y + 27} x2={428 + j * 27} y2={y + 33} stroke="var(--text-secondary)" strokeWidth="1" />
                  ))}
                </>
              )}
              {r.shape === 'axis-v' && (
                <>
                  <line x1={435} y1={y + 10} x2={435} y2={y + 38} stroke="var(--text-secondary)" strokeWidth="1" />
                  {[0, 1, 2].map(j => (
                    <line key={j} x1={432} y1={y + 12 + j * 13} x2={438} y2={y + 12 + j * 13} stroke="var(--text-secondary)" strokeWidth="1" />
                  ))}
                </>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/* ── SVG: Galeria de Marks ── */
const MarksGallery = () => {
  const marks = [
    { name: 'mark_point', draw: (x) => <circle cx={x + 45} cy={80} r={9} fill={color} opacity="0.7" /> },
    { name: 'mark_line', draw: (x) => <polyline points={`${x+10},110 ${x+30},75 ${x+55},90 ${x+80},55`} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" /> },
    { name: 'mark_bar', draw: (x) => (
      <>
        <rect x={x+10} y={95} width={18} height={25} fill={color} opacity="0.6" rx={2} />
        <rect x={x+33} y={75} width={18} height={45} fill={color} opacity="0.75" rx={2} />
        <rect x={x+56} y={85} width={18} height={35} fill={color} opacity="0.85" rx={2} />
      </>
    )},
    { name: 'mark_area', draw: (x) => <path d={`M${x+10},120 L${x+30},80 L${x+55},95 L${x+80},60 L${x+80},120 Z`} fill={color} opacity="0.35" /> },
    { name: 'mark_text', draw: (x) => (
      <>
        <text x={x+20} y={88} fill={color} fontSize="9" fontFamily="monospace">42.1</text>
        <text x={x+50} y={75} fill={color} fontSize="9" fontFamily="monospace">18.9</text>
      </>
    )},
    { name: 'mark_rect', draw: (x) => (
      <>
        {[[0,0,'0.4'],[1,0,'0.7'],[0,1,'0.9'],[1,1,'0.55']].map(([ci,ri,op],k) => (
          <rect key={k} x={x+12+ci*33} y={65+ri*30} width={30} height={27} fill={color} opacity={op} rx={2} />
        ))}
      </>
    )},
  ];
  return (
    <div style={{ ...S.diagram }}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
        Tipos de Mark em Altair
      </p>
      <svg viewBox="0 0 600 160" style={{ maxWidth: '100%', height: 'auto' }}>
        {marks.map((m, i) => {
          const x = i * 100;
          return (
            <g key={i}>
              <rect x={x + 2} y={50} width={94} height={88} rx={6} fill="rgba(74,158,237,0.10)" stroke="var(--text-secondary)" strokeWidth="1" />
              <text x={x + 49} y={144} textAnchor="middle" fill={color} fontSize="7.5" fontWeight="700">{m.name}</text>
              <line x1={x + 6} y1={120} x2={x + 90} y2={120} stroke="var(--text-secondary)" strokeWidth="0.8" />
              {m.draw(x + 2)}
            </g>
          );
        })}
        <text x="300" y="18" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">
          Cada mark define como os dados são renderizados — podem ser sobrepostos com o operador +
        </text>
      </svg>
    </div>
  );
};

/* ── SVG: Pipeline de Transformação ── */
const TransformPipeline = () => (
  <div style={{ ...S.diagram }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
      Pipeline de Transformação em Altair
    </p>
    <svg viewBox="0 0 560 100" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      {[
        { x: 10,  label: 'Dados Raw',          sub: 'DataFrame\noriginal' },
        { x: 150, label: 'Aggregate / Bin',     sub: 'count(), mean()\nbin=True' },
        { x: 290, label: 'Calculate / Filter',  sub: 'novas colunas\nlinha removida' },
        { x: 430, label: 'Mark + Encode',       sub: 'gráfico\nfinal' },
      ].map((b, i, arr) => (
        <g key={i}>
          <rect x={b.x} y={18} width={118} height={52} rx={8} fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth="1.4" />
          <text x={b.x + 59} y={38} textAnchor="middle" fill={color} fontSize="8.5" fontWeight="700">{b.label}</text>
          {b.sub.split('\n').map((s, j) => (
            <text key={j} x={b.x + 59} y={52 + j * 11} textAnchor="middle" fill="var(--text-secondary)" fontSize="7">{s}</text>
          ))}
          {i < arr.length - 1 && (
            <line x1={b.x + 120} y1={44} x2={arr[i+1].x - 4} y2={44} stroke={color} strokeWidth="1.3" markerEnd="url(#arr2)" />
          )}
        </g>
      ))}
      <text x="280" y="92" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">
        As transformações ocorrem no browser (Vega-Lite) — sem alterar o DataFrame Python original
      </text>
    </svg>
  </div>
);

/* ── SVG: Composição Layout ── */
const CompositionLayout = () => (
  <div style={{ ...S.diagram }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
      Tipos de Composição em Altair
    </p>
    <svg viewBox="0 0 560 300" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Layer */}
      <text x={70} y={18} textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Layer  (chart1 + chart2)</text>
      <rect x={10} y={24} width={120} height={70} rx={6} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.2" />
      <rect x={18} y={32} width={104} height={54} rx={4} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <rect x={26} y={40} width={88} height={38} rx={3} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x={70} y={64} textAnchor="middle" fill={color} fontSize="7.5">sobrepostos</text>

      {/* HConcat */}
      <text x={210} y={18} textAnchor="middle" fill={color} fontSize="9" fontWeight="700">HConcat  (chart1 | chart2)</text>
      <rect x={150} y={24} width={55} height={70} rx={6} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.2" />
      <rect x={215} y={24} width={55} height={70} rx={6} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.2" />
      <text x={178} y={62} textAnchor="middle" fill={color} fontSize="7">A</text>
      <text x={243} y={62} textAnchor="middle" fill={color} fontSize="7">B</text>

      {/* VConcat */}
      <text x={370} y={18} textAnchor="middle" fill={color} fontSize="9" fontWeight="700">VConcat  (chart1 & chart2)</text>
      <rect x={310} y={24} width={120} height={32} rx={6} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.2" />
      <rect x={310} y={62} width={120} height={32} rx={6} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.2" />
      <text x={370} y={44} textAnchor="middle" fill={color} fontSize="7">A</text>
      <text x={370} y={82} textAnchor="middle" fill={color} fontSize="7">B</text>

      {/* Facet */}
      <text x={280} y={118} textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Facet — Small Multiples (chart.facet(...))</text>
      {[0, 1, 2, 3, 4, 5].map(i => (
        <g key={i}>
          <rect x={10 + (i % 3) * 180} y={128 + Math.floor(i / 3) * 78} width={165} height={68} rx={6}
            fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
          <text x={97 + (i % 3) * 180} y={148 + Math.floor(i / 3) * 78}
            textAnchor="middle" fill={color} fontSize="7.5" fontWeight="700">Categoria {i + 1}</text>
          <polyline
            points={`${18 + (i % 3) * 180},185 ${55 + (i % 3) * 180},${165 + i * 3} ${100 + (i % 3) * 180},175 ${162 + (i % 3) * 180},${158 + i * 2}`}
            fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" transform={`translate(0,${Math.floor(i / 3) * 78})`}
          />
        </g>
      ))}
    </svg>
  </div>
);

/* ── SVG: Linked Views (Selecções) ── */
const LinkedViewsSVG = () => (
  <div style={{ ...S.diagram }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
      Selecções Interactivas — Brush no Scatter filtra o Bar Chart
    </p>
    <svg viewBox="0 0 560 220" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Scatter */}
      <rect x={10} y={20} width={240} height={160} rx={8} fill="rgba(74,158,237,0.10)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x={130} y={14} textAnchor="middle" fill={color} fontSize="8.5" fontWeight="700">Scatter Plot (brush aqui)</text>
      <line x1={30} y1={165} x2={240} y2={165} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={30} y1={165} x2={30} y2={30} stroke="var(--text-secondary)" strokeWidth="1" />
      {/* pontos */}
      {[[60,130],[80,110],[100,145],[120,90],[140,105],[160,80],[180,120],[200,70],[220,95],[50,150],[170,55]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r={5}
          fill={cx >= 110 && cx <= 200 && cy >= 70 && cy <= 130 ? color : 'var(--text-secondary)'}
          opacity={cx >= 110 && cx <= 200 && cy >= 70 && cy <= 130 ? 0.85 : 0.3} />
      ))}
      {/* brush rectangle */}
      <rect x={110} y={70} width={90} height={60} fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth="1.5" strokeDasharray="4,3" rx={3} />
      <text x={155} y={106} textAnchor="middle" fill={color} fontSize="7" fontWeight="700">brush</text>

      {/* Arrow */}
      <path d="M254,100 C270,100 280,100 296,100" stroke={color} strokeWidth="1.5" fill="none" markerEnd="url(#arr3)" />
      <text x={275} y={93} textAnchor="middle" fill={color} fontSize="7">filtra</text>
      <defs>
        <marker id="arr3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>

      {/* Bar Chart */}
      <rect x={300} y={20} width={240} height={160} rx={8} fill="rgba(74,158,237,0.10)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x={420} y={14} textAnchor="middle" fill={color} fontSize="8.5" fontWeight="700">Bar Chart (filtrado)</text>
      <line x1={320} y1={165} x2={530} y2={165} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={320} y1={165} x2={320} y2={30} stroke="var(--text-secondary)" strokeWidth="1" />
      {[['A',60,0.9],['B',35,0.6],['C',80,1.0],['D',20,0.4]].map(([lbl,h,op],i) => (
        <g key={i}>
          <rect x={340 + i * 45} y={165 - h} width={32} height={h} fill={color} opacity={op} rx={3} />
          <text x={356 + i * 45} y={178} textAnchor="middle" fill="var(--text-secondary)" fontSize="7">{lbl}</text>
        </g>
      ))}

      <text x={280} y={208} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">
        alt.condition(selection, alt.value(color), alt.value('lightgray')) — sem callbacks manuais
      </text>
    </svg>
  </div>
);

export default function DV6() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>

        <Link to="/dv" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>MÓDULO 06</div>
        <h1 style={S.h1}>Gramática dos Gráficos & Altair</h1>

        {/* ── Secção 1 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>1. A Gramática dos Gráficos (Wilkinson, 2005)</h2>
          <p style={S.p}>
            A intuição central de Wilkinson é que um gráfico não é um tipo monolítico como "scatter plot" ou
            "gráfico de barras" — é a composição de componentes independentes. Um mesmo dataset pode produzir
            visualizações radicalmente diferentes simplesmente mudando qual componente se altera.
          </p>
          <p style={S.p}>
            A gramática define seis camadas que se encadeiam numa pipeline: começa nos <strong>dados</strong> (o
            DataFrame ou tabela), passa por <strong>transformações</strong> (agregações, filtros, cálculos),
            depois <strong>escalas</strong> (mapeamento de domínio para espaço visual), depois as
            <strong> marcas</strong> (a geometria visual: ponto, linha, barra), depois os <strong>guias</strong>
            (eixos, legendas, títulos) e termina no <strong>sistema de coordenadas</strong> (cartesiano, polar,
            geográfico).
          </p>
          <GrammarPipeline />
          <p style={S.p}>
            O poder desta abordagem está na composição: um gráfico com pontos sobrepostos a uma linha de
            tendência com intervalos de confiança, facetado por grupo, é simplesmente a combinação de
            <em> mark_point + mark_line + mark_area + facet</em> — não é um tipo especial de gráfico que
            precise de suporte explícito na biblioteca.
          </p>
          <div style={S.note}>
            ggplot2 (R) foi a primeira implementação de grande sucesso desta gramática, por Hadley Wickham (2010).
            O Altair/Vega-Lite traz a mesma filosofia para Python, com a vantagem adicional de gerar JSON Vega-Lite
            que pode ser renderizado em qualquer browser.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 2 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>2. Encodings — Mapear Dados a Canais Visuais</h2>
          <p style={S.p}>
            Um <em>encoding</em> é a associação entre uma coluna do DataFrame e um canal visual perceptivo.
            O Altair suporta os canais <code>x</code>, <code>y</code>, <code>color</code>, <code>size</code>,
            <code> shape</code>, <code>opacity</code>, <code>strokeDash</code>, <code>text</code> e
            <code> tooltip</code>. Cada canal tem eficácias diferentes consoante o tipo de dado.
          </p>
          <EncodingTable />
          <h3 style={S.h3}>Tipos de Dado — Q, N, O, T</h3>
          <p style={S.p}>
            Em Altair, cada encoding declara explicitamente o tipo do dado com um sufixo de dois caracteres.
            Este sufixo informa o sistema de como escolher a escala e a paleta automaticamente.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Tipo</th>
                  <th style={S.th}>Sufixo</th>
                  <th style={S.th}>Quando usar</th>
                  <th style={S.th}>Escala automática</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Quantitative', ':Q', 'Valores numéricos contínuos (peso, temperatura, PIB)', 'Linear; log se especificado com alt.Scale(type="log")'],
                  ['Nominal', ':N', 'Categorias sem ordem natural (país, cor, espécie)', 'Paleta qualitativa — hues distintos'],
                  ['Ordinal', ':O', 'Categorias com ordem (Low/Med/High, mês do ano)', 'Paleta sequencial por posição ordinal'],
                  ['Temporal', ':T', 'Datas e timestamps (datetime, date strings ISO)', 'Eixo temporal com formatação automática'],
                ].map(([t, a, w, s]) => (
                  <tr key={t}>
                    <td style={{ ...S.td, fontWeight: 700, color }}>{t}</td>
                    <td style={{ ...S.td, fontFamily: 'monospace', color: '#4a9eed' }}>{a}</td>
                    <td style={S.td}>{w}</td>
                    <td style={S.td}>{s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 3 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>3. Marks — Pontos, Linhas, Barras, Áreas, Texto</h2>
          <p style={S.p}>
            As marcas (marks) definem a geometria visual com que os dados são renderizados. Altair suporta
            <code> mark_point</code>, <code>mark_line</code>, <code>mark_bar</code>, <code>mark_area</code>,
            <code> mark_text</code>, <code>mark_rect</code>, <code>mark_tick</code>, <code>mark_rule</code>
            e <code>mark_arc</code> (para gráficos circulares).
          </p>
          <MarksGallery />
          <h3 style={S.h3}>Layering com o Operador +</h3>
          <p style={S.p}>
            Dois gráficos Altair com os mesmos dados podem ser sobrepostos com o operador <code>+</code>.
            Isto é especialmente útil para adicionar uma linha de média a um scatter, ou rótulos de texto
            sobre barras.
          </p>
          <div style={S.note}>
            O operador <code>+</code> em Altair não é soma aritmética — é composição de layers. Os gráficos
            resultantes partilham os mesmos eixos e escala, salvo configuração explícita em contrário.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 4 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>4. Transformações — Aggregate, Bin, Calculate, Filter</h2>
          <p style={S.p}>
            Uma das vantagens do Altair é que as transformações podem ser declaradas na especificação do
            gráfico, sem alterar o DataFrame Python original. São executadas pelo Vega-Lite no browser,
            o que torna os gráficos portáteis (basta o JSON de especificação e os dados).
          </p>
          <TransformPipeline />
          <h3 style={S.h3}>Aggregate</h3>
          <p style={S.p}>
            As funções de agregação disponíveis são: <code>count()</code>, <code>sum(campo)</code>,
            <code> mean(campo)</code>, <code>median(campo)</code>, <code>min(campo)</code>,
            <code> max(campo)</code>, <code>stdev(campo)</code> e <code>distinct(campo)</code>.
            Podem ser usadas directamente nas strings de encoding.
          </p>
          <h3 style={S.h3}>Bin (Histograma)</h3>
          <p style={S.p}>
            O parâmetro <code>bin=True</code> num encoding quantitativo divide a variável contínua em
            intervalos automáticos — a base de um histograma. Pode-se controlar o número de bins com
            <code> alt.Bin(maxbins=20)</code>.
          </p>
          <h3 style={S.h3}>Calculate e Filter</h3>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 5 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>5. Escalas e Guias em Altair</h2>
          <p style={S.p}>
            As escalas controlam como os valores dos dados são mapeados para o espaço visual. Os guias
            (eixos e legendas) comunicam ao leitor o significado desse mapeamento. Ambos são configuráveis
            através de <code>alt.Scale</code>, <code>alt.Axis</code> e <code>alt.Legend</code>.
          </p>
          <h3 style={S.h3}>Escalas</h3>
          <h3 style={S.h3}>Eixos</h3>
          <h3 style={S.h3}>Resolver Escalas em Gráficos Compostos</h3>
          <p style={S.p}>
            Em composições (facet, hconcat, vconcat), as escalas são por defeito partilhadas entre painéis
            para facilitar comparações. Para escalas independentes por painel usa-se
            <code> resolve_scale</code>.
          </p>
          <div style={S.note}>
            Usar <code>resolve_scale(y='independent')</code> é útil quando os painéis têm ranges muito
            diferentes, mas torna difícil comparar valores absolutos entre painéis. Escolha conscientemente.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 6 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>6. Composição — Layer, HConcat, VConcat, Facet</h2>
          <p style={S.p}>
            Altair oferece quatro formas de combinar gráficos: sobreposição (layer), lado a lado horizontal
            (hconcat), empilhamento vertical (vconcat) e small multiples (facet). Cada uma tem operadores
            convenientes e equivalentes funcionais.
          </p>
          <CompositionLayout />
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Operador</th>
                  <th style={S.th}>Função</th>
                  <th style={S.th}>Quando usar</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['chart1 + chart2', 'alt.layer(c1, c2)', 'Sobrepor marks com os mesmos eixos (barras + linha)'],
                  ['chart1 | chart2', 'alt.hconcat(c1, c2)', 'Comparar dois gráficos lado a lado'],
                  ['chart1 & chart2', 'alt.vconcat(c1, c2)', 'Overview + detalhe empilhados verticalmente'],
                  ['chart.facet("col:N")', 'alt.facet(...)', 'Small multiples por variável categórica'],
                ].map(([op, fn, when]) => (
                  <tr key={op}>
                    <td style={{ ...S.td, fontFamily: 'monospace', color }}>{op}</td>
                    <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{fn}</td>
                    <td style={S.td}>{when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 7 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>7. Selecções Interactivas</h2>
          <p style={S.p}>
            A funcionalidade que distingue o Altair de outras bibliotecas declarativas é o sistema de
            selecções interactivas. Sem escrever callbacks JavaScript, é possível clicar, arrastar um brush
            ou fazer hover para filtrar e destacar dados entre múltiplos gráficos ligados.
          </p>
          <h3 style={S.h3}>Tipos de Selecção</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Selecção</th>
                  <th style={S.th}>Interacção</th>
                  <th style={S.th}>Uso típico</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['alt.selection_point()', 'Clique num ponto/barra', 'Destacar uma categoria, drill-down'],
                  ['alt.selection_interval()', 'Arrastar brush rectangular', 'Seleccionar intervalo, zoom, filtrar'],
                  ['alt.selection_point(on="mouseover")', 'Hover do rato', 'Tooltips enriquecidos, highlight dinâmico'],
                ].map(([s, i, u]) => (
                  <tr key={s}>
                    <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem', color }}>{s}</td>
                    <td style={S.td}>{i}</td>
                    <td style={S.td}>{u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <LinkedViewsSVG />
          <div style={S.note}>
            <code>alt.condition(selection, valor_se_activo, valor_se_inactivo)</code> é o mecanismo central
            de interactividade em Altair. O Vega-Lite compila isto para JavaScript reactivo — sem nenhum
            código JS manual.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 8 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>8. Comparação — Altair vs. ggplot2 vs. Plotly Express vs. Matplotlib</h2>
          <p style={S.p}>
            Cada biblioteca tem pontos fortes diferentes. A escolha certa depende do contexto: exploração
            interactiva, publicação estática, dashboard web ou relatório científico.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Biblioteca</th>
                  <th style={S.th}>Paradigma</th>
                  <th style={S.th}>Interactividade</th>
                  <th style={S.th}>Curva de aprendizagem</th>
                  <th style={S.th}>Ecossistema</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Altair (Python)', 'Declarativo / Gramática', 'Nativa, declarativa (Vega-Lite)', 'Média — tipos e composição', 'Jupyter, Streamlit, Quarto'],
                  ['ggplot2 (R)', 'Declarativo / Gramática', 'Limitada (ggiraph, plotly::ggplotly)', 'Média — aes() e geoms', 'R Markdown, Shiny'],
                  ['Plotly Express (Python)', 'Imperativo alto nível', 'Nativa, rica (hover, zoom, pan)', 'Baixa — API intuitiva', 'Dash, Streamlit, Jupyter'],
                  ['Matplotlib (Python)', 'Imperativo baixo nível', 'Mínima (mplcursors, backends)', 'Alta — controlo total', 'Seaborn, pandas.plot, LaTeX'],
                ].map(([lib, par, inter, learn, eco]) => (
                  <tr key={lib}>
                    <td style={{ ...S.td, fontWeight: 700, color }}>{lib}</td>
                    <td style={S.td}>{par}</td>
                    <td style={S.td}>{inter}</td>
                    <td style={S.td}>{learn}</td>
                    <td style={S.td}>{eco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 style={S.h3}>Quando usar cada biblioteca</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginTop: '0.5rem' }}>
            {[
              { title: 'Altair', when: 'Linked views interactivos, exploração declarativa, dashboards Jupyter, especificação portátil em JSON.' },
              { title: 'ggplot2', when: 'Publicação científica em R, análise estatística, integração com tidyverse e R Markdown.' },
              { title: 'Plotly Express', when: 'Prototipagem rápida, dashboards Dash, gráficos 3D, mapas choropleth, interactividade plug-and-play.' },
              { title: 'Matplotlib', when: 'Controlo total de layout, figuras multi-painel complexas, integração com LaTeX, backend científico.' },
            ].map(b => (
              <div key={b.title} style={S.highlight}>
                <p style={{ fontWeight: 700, color, marginBottom: '0.4rem', fontSize: '0.9rem' }}>{b.title}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{b.when}</p>
              </div>
            ))}
          </div>
        </div>
</div>
    </div>
  );
}
