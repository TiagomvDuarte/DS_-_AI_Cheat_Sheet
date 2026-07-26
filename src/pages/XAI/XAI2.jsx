import React from 'react';
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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', marginTop: '1.5rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

/* ── SVG: MDI bar chart ─────────────────────────────────────────────────── */
function MDIBarChart() {
  const features = [
    { name: 'Historial_Crédito', value: 0.38 },
    { name: 'Rendimento',        value: 0.27 },
    { name: 'Código_Postal',     value: 0.18 },
    { name: 'Idade',             value: 0.09 },
    { name: 'Nº_Dependentes',    value: 0.05 },
    { name: 'Hora_Pedido',       value: 0.03 },
  ];
  const W = 560, H = 290, left = 160, right = 30, top = 20, bottom = 30;
  const barH = 28, gap = 10;
  const chartW = W - left - right;
  const maxVal = 0.4;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: W, display: 'block', margin: '0 auto' }}>
      <text x={W / 2} y={14} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">
        MDI — Redução Média de Impureza (Random Forest)
      </text>
      {features.map((f, i) => {
        const y = top + 20 + i * (barH + gap);
        const bw = (f.value / maxVal) * chartW;
        return (
          <g key={f.name}>
            <text x={left - 8} y={y + barH / 2 + 4} textAnchor="end" fontSize={11} fill="var(--text-primary)">{f.name}</text>
            <rect x={left} y={y} width={bw} height={barH} fill={color} rx={4} opacity={0.85} />
            <text x={left + bw + 5} y={y + barH / 2 + 4} fontSize={11} fill="var(--text-secondary)">{f.value.toFixed(2)}</text>
          </g>
        );
      })}
      {/* x-axis */}
      <line x1={left} y1={H - bottom} x2={W - right} y2={H - bottom} stroke="var(--text-secondary)" strokeWidth={1} />
      {[0, 0.1, 0.2, 0.3, 0.4].map(v => (
        <text key={v} x={left + (v / maxVal) * chartW} y={H - bottom + 14} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">{v}</text>
      ))}
    </svg>
  );
}

/* ── SVG: Permutation Importance bar chart ──────────────────────────────── */
function PermBarChart() {
  const features = [
    { name: 'Historial_Crédito', value: 0.34 },
    { name: 'Rendimento',        value: 0.29 },
    { name: 'Idade',             value: 0.12 },
    { name: 'Nº_Dependentes',    value: 0.07 },
    { name: 'Hora_Pedido',       value: 0.02 },
    { name: 'Código_Postal',     value: 0.01 },
  ];
  const W = 560, H = 290, left = 160, right = 30, top = 20, bottom = 30;
  const barH = 28, gap = 10;
  const chartW = W - left - right;
  const maxVal = 0.4;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: W, display: 'block', margin: '0 auto' }}>
      <text x={W / 2} y={14} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">
        Permutation Importance — Queda na Métrica por Feature
      </text>
      {features.map((f, i) => {
        const y = top + 20 + i * (barH + gap);
        const bw = (f.value / maxVal) * chartW;
        const isLow = f.value <= 0.02;
        return (
          <g key={f.name}>
            <text x={left - 8} y={y + barH / 2 + 4} textAnchor="end" fontSize={11} fill={isLow ? '#4a9eed' : 'var(--text-primary)'}>{f.name}</text>
            <rect x={left} y={y} width={Math.max(bw, 3)} height={barH} fill={isLow ? '#4a9eed' : color} rx={4} opacity={0.85} />
            <text x={left + Math.max(bw, 3) + 5} y={y + barH / 2 + 4} fontSize={11} fill="var(--text-secondary)">{f.value.toFixed(2)}</text>
          </g>
        );
      })}
      <line x1={left} y1={H - bottom} x2={W - right} y2={H - bottom} stroke="var(--text-secondary)" strokeWidth={1} />
      {[0, 0.1, 0.2, 0.3, 0.4].map(v => (
        <text key={v} x={left + (v / maxVal) * chartW} y={H - bottom + 14} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">{v}</text>
      ))}
    </svg>
  );
}

/* ── SVG: PDP line chart — Rendimento vs P(default) ────────────────────── */
function PDPChart() {
  const W = 560, H = 240, left = 55, right = 20, top = 20, bottom = 40;
  const chartW = W - left - right;
  const chartH = H - top - bottom;

  // synthetic non-linear PDP: high income → low default prob
  const points = [
    [0, 0.72], [10, 0.68], [20, 0.60], [30, 0.50], [40, 0.41],
    [50, 0.34], [60, 0.27], [70, 0.22], [80, 0.18], [90, 0.15], [100, 0.13],
  ];
  const maxX = 100, maxY = 1.0;
  const toSVG = ([x, y]) => [
    left + (x / maxX) * chartW,
    top + chartH - (y / maxY) * chartH,
  ];
  const pathD = points.map((p, i) => {
    const [sx, sy] = toSVG(p);
    return `${i === 0 ? 'M' : 'L'}${sx.toFixed(1)},${sy.toFixed(1)}`;
  }).join(' ');

  const xTicks = [0, 20, 40, 60, 80, 100];
  const yTicks = [0, 0.25, 0.5, 0.75, 1.0];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: W, display: 'block', margin: '0 auto' }}>
      <text x={W / 2} y={14} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">
        PDP — Rendimento (k€) vs P(incumprimento)
      </text>
      {/* axes */}
      <line x1={left} y1={top} x2={left} y2={top + chartH} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={left} y1={top + chartH} x2={left + chartW} y2={top + chartH} stroke="var(--text-secondary)" strokeWidth={1} />
      {/* grid + ticks */}
      {yTicks.map(v => {
        const sy = top + chartH - (v / maxY) * chartH;
        return (
          <g key={v}>
            <line x1={left} y1={sy} x2={left + chartW} y2={sy} stroke="var(--text-secondary)" strokeWidth={0.5} strokeDasharray="3,3" />
            <text x={left - 6} y={sy + 4} textAnchor="end" fontSize={10} fill="var(--text-secondary)">{v.toFixed(2)}</text>
          </g>
        );
      })}
      {xTicks.map(v => {
        const sx = left + (v / maxX) * chartW;
        return (
          <g key={v}>
            <text x={sx} y={top + chartH + 16} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">{v}</text>
          </g>
        );
      })}
      {/* PDP line */}
      <path d={pathD} fill="none" stroke={color} strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />
      {/* dots */}
      {points.map(([x, y], i) => {
        const [sx, sy] = toSVG([x, y]);
        return <circle key={i} cx={sx} cy={sy} r={3} fill={color} />;
      })}
      {/* axis labels */}
      <text x={left + chartW / 2} y={H - 4} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Rendimento (k€)</text>
      <text x={12} y={top + chartH / 2} textAnchor="middle" fontSize={10} fill="var(--text-secondary)" transform={`rotate(-90,12,${top + chartH / 2})`}>P(incumprimento)</text>
    </svg>
  );
}

/* ── SVG: ICE plot ──────────────────────────────────────────────────────── */
function ICEChart() {
  const W = 560, H = 240, left = 55, right = 20, top = 20, bottom = 40;
  const chartW = W - left - right;
  const chartH = H - top - bottom;
  const maxX = 100, maxY = 1.0;

  const toSVG = (x, y) => [
    left + (x / maxX) * chartW,
    top + chartH - (y / maxY) * chartH,
  ];

  // 10 synthetic ICE lines
  const iceLines = [
    [[0,0.82],[20,0.70],[40,0.55],[60,0.38],[80,0.28],[100,0.20]],
    [[0,0.65],[20,0.58],[40,0.48],[60,0.36],[80,0.25],[100,0.16]],
    [[0,0.90],[20,0.85],[40,0.70],[60,0.52],[80,0.38],[100,0.25]],
    [[0,0.55],[20,0.52],[40,0.46],[60,0.38],[80,0.30],[100,0.22]],
    [[0,0.78],[20,0.65],[40,0.50],[60,0.40],[80,0.32],[100,0.18]],
    [[0,0.60],[20,0.62],[40,0.56],[60,0.42],[80,0.28],[100,0.14]],
    [[0,0.85],[20,0.72],[40,0.58],[60,0.44],[80,0.34],[100,0.28]],
    [[0,0.50],[20,0.48],[40,0.44],[60,0.38],[80,0.30],[100,0.21]],
    [[0,0.72],[20,0.66],[40,0.54],[60,0.44],[80,0.33],[100,0.17]],
    [[0,0.68],[20,0.60],[40,0.50],[60,0.40],[80,0.29],[100,0.19]],
  ];

  // PDP average
  const pdpLine = [[0,0.705],[20,0.638],[40,0.531],[60,0.412],[80,0.307],[100,0.2]];

  const lineToPath = (pts) =>
    pts.map(([x, y], i) => {
      const [sx, sy] = toSVG(x, y);
      return `${i === 0 ? 'M' : 'L'}${sx.toFixed(1)},${sy.toFixed(1)}`;
    }).join(' ');

  const xTicks = [0, 20, 40, 60, 80, 100];
  const yTicks = [0, 0.25, 0.5, 0.75, 1.0];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: W, display: 'block', margin: '0 auto' }}>
      <text x={W / 2} y={14} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">
        ICE Plot — Rendimento (k€) vs P(incumprimento)
      </text>
      <line x1={left} y1={top} x2={left} y2={top + chartH} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={left} y1={top + chartH} x2={left + chartW} y2={top + chartH} stroke="var(--text-secondary)" strokeWidth={1} />
      {yTicks.map(v => {
        const sy = top + chartH - (v / maxY) * chartH;
        return (
          <g key={v}>
            <line x1={left} y1={sy} x2={left + chartW} y2={sy} stroke="var(--text-secondary)" strokeWidth={0.5} strokeDasharray="3,3" />
            <text x={left - 6} y={sy + 4} textAnchor="end" fontSize={10} fill="var(--text-secondary)">{v.toFixed(2)}</text>
          </g>
        );
      })}
      {xTicks.map(v => (
        <text key={v} x={left + (v / maxX) * chartW} y={top + chartH + 16} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">{v}</text>
      ))}
      {/* ICE lines */}
      {iceLines.map((pts, i) => (
        <path key={i} d={lineToPath(pts)} fill="none" stroke="var(--text-secondary)" strokeWidth={1} strokeOpacity={0.55} strokeLinejoin="round" />
      ))}
      {/* PDP bold line */}
      <path d={lineToPath(pdpLine)} fill="none" stroke={color} strokeWidth={2.8} strokeLinejoin="round" strokeLinecap="round" />
      {/* Legend */}
      <line x1={W - 140} y1={30} x2={W - 110} y2={30} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <text x={W - 106} y={34} fontSize={10} fill="var(--text-secondary)">Instâncias (ICE)</text>
      <line x1={W - 140} y1={46} x2={W - 110} y2={46} stroke={color} strokeWidth={2.5} />
      <text x={W - 106} y={50} fontSize={10} fill="var(--text-secondary)">Média (PDP)</text>
      <text x={left + chartW / 2} y={H - 4} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Rendimento (k€)</text>
      <text x={12} y={top + chartH / 2} textAnchor="middle" fontSize={10} fill="var(--text-secondary)" transform={`rotate(-90,12,${top + chartH / 2})`}>P(incumprimento)</text>
    </svg>
  );
}

/* ── SVG: 2D PDP heatmap ─────────────────────────────────────────────────── */
function Heatmap2D() {
  const W = 480, H = 300, left = 110, right = 30, top = 30, bottom = 50;
  const chartW = W - left - right;
  const chartH = H - top - bottom;
  const cols = 5, rows = 5;
  const cellW = chartW / cols;
  const cellH = chartH / rows;

  const xLabels = ['0-20k', '20-40k', '40-60k', '60-80k', '80-100k'];
  const yLabels = ['Excelente', 'Bom', 'Razoável', 'Mau', 'Muito Mau'];

  // values: higher historial + higher rendimento → lower default → lighter cell
  // we encode probability of default (lower = lighter)
  const data = [
    [0.08, 0.12, 0.20, 0.32, 0.55],
    [0.10, 0.17, 0.28, 0.42, 0.65],
    [0.18, 0.26, 0.38, 0.55, 0.75],
    [0.30, 0.40, 0.54, 0.68, 0.82],
    [0.50, 0.60, 0.72, 0.82, 0.91],
  ];

  const toColor = (v) => {
    // v 0..1 → light blue to dark blue
    const alpha = 0.10 + v * 0.85;
    const r = Math.round(186 - v * 183);  // 186 → 3
    const g = Math.round(230 - v * 125);  // 230 → 105
    const b = Math.round(253 - v * 92);   // 253 → 161
    return `rgba(${r},${g},${b},${alpha})`;
  };

  return (
    <svg viewBox={`0 0 ${W} ${H + 10}`} style={{ width: '100%', maxWidth: W, display: 'block', margin: '0 auto' }}>
      <text x={W / 2} y={16} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">
        PDP 2D — P(incumprimento): Rendimento × Historial de Crédito
      </text>
      {data.map((row, ri) =>
        row.map((val, ci) => {
          const x = left + ci * cellW;
          const y = top + ri * cellH;
          return (
            <g key={`${ri}-${ci}`}>
              <rect x={x} y={y} width={cellW - 1} height={cellH - 1} fill={toColor(val)} rx={2} />
              <text x={x + cellW / 2} y={y + cellH / 2 + 4} textAnchor="middle" fontSize={9.5} fill="rgba(74,158,237,0.06)" fontWeight={600}>{val.toFixed(2)}</text>
            </g>
          );
        })
      )}
      {/* x labels */}
      {xLabels.map((l, i) => (
        <text key={l} x={left + i * cellW + cellW / 2} y={top + chartH + 16} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">{l}</text>
      ))}
      <text x={left + chartW / 2} y={H - 6} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Rendimento</text>
      {/* y labels */}
      {yLabels.map((l, i) => (
        <text key={l} x={left - 6} y={top + i * cellH + cellH / 2 + 4} textAnchor="end" fontSize={9} fill="var(--text-secondary)">{l}</text>
      ))}
      <text x={16} y={top + chartH / 2} textAnchor="middle" fontSize={10} fill="var(--text-secondary)" transform={`rotate(-90,16,${top + chartH / 2})`}>Historial de Crédito</text>
      {/* color scale */}
      <defs>
        <linearGradient id="heatScale" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(74,158,237,0.10)" />
          <stop offset="100%" stopColor="rgba(7,89,133,0.95)" />
        </linearGradient>
      </defs>
      <rect x={left} y={H} width={chartW} height={8} fill="url(#heatScale)" rx={3} />
      <text x={left} y={H -4} fontSize={8} fill="var(--text-secondary)">Baixo</text>
      <text x={left + chartW} y={H - 4} textAnchor="end" fontSize={8} fill="var(--text-secondary)">Alto P(incumprimento)</text>
    </svg>
  );
}

/* ── Main Component ─────────────────────────────────────────────────────── */
export default function XAI2() {
  return (
    <div style={S.page}>
      <Link to="/xai" style={S.back}><ArrowLeft size={16} /> Voltar a Explainable AI</Link>

      <div style={S.tag}>MÓDULO 02</div>
      <h1 style={S.h1}>Feature Importance Global</h1>

      {/* ── SECÇÃO 1 ─────────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Importância vs. Interpretabilidade</h2>
        <p style={S.p}>
          A <strong>importância global de features</strong> responde à pergunta: "Quais as variáveis que,
          em média, mais influenciam as predições do modelo?" Esta questão é distinta da interpretabilidade
          local, que se preocupa com a explicação de uma predição individual. Uma feature pode ser
          globalmente importante sem que o seu efeito seja o mesmo para todas as instâncias.
        </p>
        <p style={S.p}>
          As técnicas globais são particularmente úteis em três contextos práticos:
        </p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: 2, color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '1rem' }}>
          <li><strong>Selecção de features:</strong> eliminar variáveis redundantes ou irrelevantes antes de colocar em produção.</li>
          <li><strong>Depuração (debugging):</strong> identificar se o modelo aprendeu correlações espúrias ou proxies indesejados.</li>
          <li><strong>Conformidade regulatória:</strong> demonstrar a auditores que variáveis proibidas (ex: raça, género) não dominam as decisões.</li>
        </ul>
        <div style={S.highlight}>
          <strong>Importante:</strong> As métricas globais descrevem o comportamento médio do modelo — não garantem que cada predição
          individual siga o mesmo padrão. Para explicações ao nível da instância, use SHAP ou LIME (módulo seguinte).
        </div>
        <div style={S.note}>
          Interpretabilidade local e global são complementares. Um modelo pode ser globalmente interpretável
          (poucas features dominantes) mas localmente opaco (efeitos heterogéneos entre instâncias).
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 2 ─────────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Mean Decrease in Impurity (MDI)</h2>
        <p style={S.p}>
          O MDI — também chamado <em>Gini importance</em> ou importância nativa — é a métrica de importância
          integrada nas árvores de decisão e florestas aleatórias. Para cada feature, soma-se a redução total
          de impureza (impureza de Gini ou entropia) causada por todos os nós que usam essa feature,
          ponderada pelo número de amostras que passam por cada nó, e depois calcula-se a média sobre
          todas as árvores da floresta.
        </p>

        <div style={S.math}>
          <BlockMath math={"\\text{MDI}(j) = \\frac{1}{|T|}\\sum_{t \\in T} \\sum_{\\substack{v \\in t \\\\ \\text{split em } j}} p(v)\\,\\Delta i(v)"} />
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0.5rem 0 0', textAlign: 'left' }}>
            onde <InlineMath math={"p(v)"} /> é a proporção de amostras no nó <InlineMath math={"v"} />,{' '}
            <InlineMath math={"\\Delta i(v)"} /> é a redução de impureza no nó, e a soma é sobre todas
            as árvores <InlineMath math={"T"} />.
          </p>
        </div>

        <h3 style={S.h3}>Visualização — MDI das 6 Features</h3>
        <div style={S.diagram}>
          <MDIBarChart />
        </div>

        <div style={{ ...S.note, background: 'rgba(74,158,237,0.10)', borderLeft: '3px solid #4a9eed' }}>
          <strong>Atenção — viés de cardinalidade:</strong> O Código_Postal tem alta cardinalidade (milhares
          de valores únicos). O MDI classifica-o como a 3.ª feature mais importante, mas, como veremos na
          secção seguinte, a Permutation Importance corrige este viés e mostra que é praticamente irrelevante.
        </div>

        <p style={S.p}>
          Strobl et al. (2007) demonstraram formalmente que o MDI favorece features contínuas e features
          com muitos valores únicos, porque estas criam mais oportunidades de divisão nos nós. Este viés
          pode induzir em erro quando se usam IDs, códigos postais ou timestamps como features.
        </p>
        <p style={S.p}>
          A principal vantagem do MDI é a sua velocidade: é calculado gratuitamente durante o treino,
          sem inferência adicional. Use-o como triagem rápida, mas valide sempre com Permutation Importance
          antes de tomar decisões de feature selection.
        </p>
        <div style={S.note}>
          O MDI está disponível em scikit-learn via <code>model.feature_importances_</code> em qualquer
          estimador baseado em árvore (DecisionTree, RandomForest, GradientBoosting).
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 3 ─────────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Permutation Feature Importance</h2>
        <p style={S.p}>
          A Permutation Importance (Fisher et al., 2019) mede o impacto de cada feature no desempenho do
          modelo através de uma perturbação controlada: a coluna da feature é baralhada aleatoriamente no
          conjunto de validação, quebrando a associação entre essa feature e o alvo. A queda na métrica
          de avaliação (ex: AUC, accuracy) indica a importância da feature.
        </p>

        <h3 style={S.h3}>Algoritmo</h3>
        
          <ol style={{ margin: '0.5rem 0 0', paddingLeft: '1.4rem', lineHeight: 2.1 }}>
            <li>Treinar o modelo e registar a métrica base <InlineMath math={"s_0"} /> no conjunto de validação.</li>
            <li>Para cada feature <InlineMath math={"j = 1, \\ldots, p"} />:</li>
            <li style={{ listStyle: 'none', paddingLeft: '1rem' }}>
              Para <InlineMath math={"k = 1, \\ldots, K"} /> repetições, permutar aleatoriamente a coluna <InlineMath math={"j"} /> e calcular <InlineMath math={"s_k^{(j)}"} />.
            </li>
            <li>Calcular a importância média: <InlineMath math={"\\text{PI}(j) = s_0 - \\frac{1}{K}\\sum_{k=1}^{K} s_k^{(j)}"} /></li>
          </ol>
        

        <div style={S.math}>
          <BlockMath math={"\\text{Importance}(j) = \\overline{\\text{score}} - \\frac{1}{K}\\sum_{k=1}^{K}\\text{score}\\!\\left(X_{\\pi_j^{(k)}}\\right)"} />
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0.5rem 0 0', textAlign: 'left' }}>
            onde <InlineMath math={"X_{\\pi_j^{(k)}}"} /> denota a matriz de dados com a coluna <InlineMath math={"j"} /> permutada
            na iteração <InlineMath math={"k"} />.
          </p>
        </div>

        <h3 style={S.h3}>Visualização — Permutation Importance das 6 Features</h3>
        <div style={S.diagram}>
          <PermBarChart />
        </div>

        <p style={S.p}>
          Compare com o gráfico da secção anterior: o <span style={{ color: '#4a9eed', fontWeight: 700 }}>Código_Postal</span>{' '}
          caiu de 3.º para último lugar com importância quase nula. Esta discrepância confirma o viés de
          cardinalidade do MDI — o modelo não usa o código postal de forma informativamente, mas o MDI
          detectava os splits numerosos nessa coluna.
        </p>

        <p style={S.p}>
          A Permutation Importance é <strong>model-agnostic</strong> — pode ser aplicada a qualquer modelo,
          incluindo redes neuronais, SVMs ou regressão logística — e é calculada no conjunto de validação,
          reflectindo a importância para a generalização e não para o ajuste ao treino.
        </p>

        <div style={S.note}>
          Com features correlacionadas, a importância pode ser distribuída entre elas de forma imprevisível.
          Se <em>Rendimento</em> e <em>Poupanças</em> forem altamente correlacionadas, permutar uma delas
          pode ser parcialmente compensado pela outra, subestimando ambas. Neste caso, considere agrupar
          features correlacionadas ou usar SHAP com interacções.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 4 ─────────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Partial Dependence Plots (PDP)</h2>
        <p style={S.p}>
          Enquanto as métricas anteriores respondem a "quais as features mais importantes", os PDPs
          respondem a "como varia a predição quando altero uma feature específica?" Fazem-no
          marginalizando sobre a distribuição de todas as outras features — ou seja, calculam a predição
          média para cada valor possível da feature de interesse, mantendo as restantes fixas nos seus
          valores observados.
        </p>

        <div style={S.math}>
          <BlockMath math={"\\hat{f}_{x_S}(x_S) = \\mathbb{E}_{x_C}\\!\\left[\\hat{f}(x_S, x_C)\\right] \\approx \\frac{1}{n}\\sum_{i=1}^{n}\\hat{f}\\!\\left(x_S,\\, x_C^{(i)}\\right)"} />
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0.5rem 0 0', textAlign: 'left' }}>
            onde <InlineMath math={"x_S"} /> é a feature de interesse, <InlineMath math={"x_C"} /> são as
            restantes features ("complemento"), e a soma é sobre todos os <InlineMath math={"n"} /> exemplos do conjunto de treino.
          </p>
        </div>

        <h3 style={S.h3}>Visualização — PDP do Rendimento</h3>
        <div style={S.diagram}>
          <PDPChart />
        </div>

        <p style={S.p}>
          O gráfico mostra uma relação não-linear: a probabilidade de incumprimento diminui rapidamente
          para rendimentos entre 0 e 40 k€, e estabiliza a partir daí. Esta informação não seria visível
          numa regressão logística linear e illustra o poder dos PDPs para revelar formas funcionais
          aprendidas automaticamente pelo modelo.
        </p>

        <div style={S.highlight}>
          <strong>Como interpretar:</strong> o eixo Y representa a predição média do modelo (probabilidade
          de incumprimento) quando o rendimento é fixo no valor do eixo X e as restantes features tomam
          os seus valores reais observados nos dados de treino. Não é uma previsão individual — é um efeito médio marginal.
        </div>

        <div style={S.note}>
          PDPs assumem independência entre features. Se o rendimento e o historial de crédito estiverem
          correlacionados, o PDP pode criar instâncias artificiais (ex: rendimento elevado + historial
          muito mau) que não existem nos dados reais, distorcendo a estimativa. Nesse caso prefira ALE plots.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 5 ─────────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Individual Conditional Expectation (ICE)</h2>
        <p style={S.p}>
          Os ICE plots (Goldstein et al., 2015) estendem os PDPs ao mostrar uma curva por instância
          em vez de apenas a média. Cada linha corresponde a um único exemplo do conjunto de treino,
          traçando como a predição desse exemplo específico varia quando a feature de interesse é
          alterada ao longo do seu range.
        </p>
        <p style={S.p}>
          Esta abordagem é fundamental para detectar <strong>efeitos heterogéneos</strong>: situações
          em que o efeito médio (PDP) não é representativo do comportamento individual. Se um PDP
          mostrar um efeito plano mas as linhas ICE se cruzarem, estamos perante uma interacção
          escondida entre features.
        </p>

        <h3 style={S.h3}>Visualização — ICE Plot do Rendimento</h3>
        <div style={S.diagram}>
          <ICEChart />
        </div>

        <p style={S.p}>
          Observe que todas as linhas individuais (cinzento) têm o mesmo sentido geral descendente
          (maior rendimento → menor risco), mas com inclinações diferentes. Alguns clientes com historial
          de crédito fraco mantêm probabilidade alta mesmo com rendimento elevado — o efeito do rendimento
          é atenuado pelo historial.
        </p>

        <h3 style={S.h3}>Centred ICE (c-ICE)</h3>
        <p style={S.p}>
          As curvas ICE podem ser difíceis de comparar porque partem de níveis absolutos diferentes.
          O c-ICE resolve isto subtraindo, a cada curva, o valor no ponto de referência (geralmente
          o mínimo da feature):
        </p>

        <div style={S.math}>
          <BlockMath math={"\\tilde{f}^{(i)}(x_S) = \\hat{f}^{(i)}(x_S) - \\hat{f}^{(i)}(x_S^{\\text{ref}})"} />
        </div>

        <p style={S.p}>
          Com o c-ICE, todas as curvas começam em zero e podemos comparar directamente os <em>gradientes</em>
          — i.e., o quanto a predição de cada instância muda em resposta à variação da feature — sem
          interferência das diferenças de nível inicial.
        </p>

        <div style={S.note}>
          Se as linhas ICE se cruzarem, existe uma interacção entre a feature em análise e outra feature.
          Para identificar qual, use PDPs 2D (secção seguinte) ou valores SHAP de interacção.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 6 ─────────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. PDP 2D — Interacções entre Features</h2>
        <p style={S.p}>
          Os PDPs podem ser estendidos a pares de features para visualizar interacções. O resultado
          é uma superfície 2D (geralmente representada como mapa de calor) onde cada célula mostra
          a predição média do modelo quando as duas features assumem simultaneamente os valores
          indicados nos eixos, marginalizando sobre todas as restantes.
        </p>
        <p style={S.p}>
          No contexto de crédito, a combinação de baixo rendimento E mau historial de crédito gera
          risco muito superior à soma dos dois efeitos individuais — uma interacção super-aditiva
          que seria invisível em dois PDPs 1D separados.
        </p>

        <h3 style={S.h3}>Visualização — Mapa de Calor: Rendimento × Historial de Crédito</h3>
        <div style={S.diagram}>
          <Heatmap2D />
        </div>

        <p style={S.p}>
          O mapa de calor confirma a interacção: a célula inferior esquerda (rendimento baixo +
          historial muito mau) tem probabilidade de incumprimento de 91%, enquanto a célula superior
          direita (rendimento alto + historial excelente) tem apenas 8%. A diagonal evidencia que
          nenhuma das duas features domina sozinha — ambas contribuem conjuntamente.
        </p>

        <div style={S.highlight}>
          <strong>Limitação dos PDPs 2D:</strong> com mais de dois pares relevantes, o número de gráficos
          cresce combinatorialmente. Para identificar automaticamente os pares com mais interacção, use
          a estatística H de Friedman ou os valores SHAP de interacção (módulo 4).
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 7 ─────────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Limitações das Métricas Globais</h2>
        <p style={S.p}>
          Nenhuma das técnicas apresentadas é isenta de problemas. Antes de comunicar resultados de
          importância global a stakeholders ou reguladores, é essencial conhecer as suas fragilidades.
        </p>

        <h3 style={S.h3}>Features Correlacionadas</h3>
        <p style={S.p}>
          Quando duas features são altamente correlacionadas (ex: <em>Rendimento</em> e <em>Património_Líquido</em>),
          a importância é dividida entre elas de forma arbitrária dependendo do método. O MDI pode
          distribuir equitativamente, enquanto a Permutation Importance pode subestimar ambas porque
          permutar uma delas é parcialmente compensado pela outra. Em casos extremos, features genuinamente
          importantes aparecem com importância baixa.
        </p>

        <h3 style={S.h3}>Extrapolação nos PDPs</h3>
        <p style={S.p}>
          Os PDPs avaliam o modelo em combinações de valores que podem nunca ter ocorrido nos dados
          de treino — instâncias fora da distribuição. O modelo pode comportar-se de forma imprevisível
          nessas regiões, e o PDP mostrará essas predições espúrias como se fossem válidas. Os ALE
          plots evitam este problema ao usar apenas dados observados.
        </p>

        <h3 style={S.h3}>Custo Computacional</h3>
        <p style={S.p}>
          A Permutation Importance requer <InlineMath math={"K \\times p"} /> inferências adicionais
          (K repetições × p features). Para modelos grandes ou datasets extensos, isto pode ser
          proibitivo. PDPs 2D requerem uma grelha de <InlineMath math={"g^2"} /> pontos por par,
          multiplicados pelo número de instâncias de treino — tipicamente milhões de inferências.
        </p>

        <h3 style={S.h3}>Tabela Comparativa</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Vantagem</th>
              <th style={S.th}>Limitação</th>
              <th style={S.th}>Complexidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>MDI</strong></td>
              <td style={S.td}>Instantâneo; integrado no treino</td>
              <td style={S.td}>Viés de cardinalidade; só árvores; usa dados de treino</td>
              <td style={S.td}><InlineMath math={"O(1)"} /> (pós-treino)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Permutation Importance</strong></td>
              <td style={S.td}>Model-agnostic; usa validação; sem viés cardinalidade</td>
              <td style={S.td}>Subestima features correlacionadas</td>
              <td style={S.td}><InlineMath math={"O(K \\cdot p \\cdot n)"} /></td>
            </tr>
            <tr>
              <td style={S.td}><strong>PDP 1D</strong></td>
              <td style={S.td}>Mostra efeito marginal; fácil de comunicar</td>
              <td style={S.td}>Assume independência; extrapolação possível</td>
              <td style={S.td}><InlineMath math={"O(g \\cdot n)"} /></td>
            </tr>
            <tr>
              <td style={S.td}><strong>ICE</strong></td>
              <td style={S.td}>Revela heterogeneidade e interacções</td>
              <td style={S.td}>Difícil de ler com muitas instâncias</td>
              <td style={S.td}><InlineMath math={"O(g \\cdot n)"} /></td>
            </tr>
            <tr>
              <td style={S.td}><strong>PDP 2D</strong></td>
              <td style={S.td}>Detecta interacções entre pares</td>
              <td style={S.td}>Combinatoriamente custoso; extrapolação</td>
              <td style={S.td}><InlineMath math={"O(g^2 \\cdot n)"} /></td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          Para a maioria dos projectos de ML em produção, a sequência recomendada é: (1) MDI para
          triagem rápida durante desenvolvimento; (2) Permutation Importance para validação final;
          (3) PDPs/ICE para comunicação a stakeholders não técnicos; (4) SHAP para auditoria profunda.
        </div>
      </div>
</div>
  );
}
