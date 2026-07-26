import React, { useState } from 'react';
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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0' },
};

/* ── SVG helpers ─────────────────────────────────────────── */

function normalY(x, mean = 0, std = 1) {
  return Math.exp(-0.5 * ((x - mean) / std) ** 2) / (std * Math.sqrt(2 * Math.PI));
}

function normalPoints(mean, std, x0, x1, steps, sx, sy, ox, oy) {
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const x = x0 + (x1 - x0) * (i / steps);
    const y = normalY(x, mean, std);
    pts.push(`${ox + x * sx},${oy - y * sy}`);
  }
  return pts.join(' ');
}

/* ── SVG 1: Flowchart ─────────────────────────────────────── */
function FlowchartSVG() {
  const boxes = [
    'Definir H₀/H₁',
    'Escolher α',
    'Calcular\nestatística',
    'Comparar com\nvalor crítico',
    'Decisão',
  ];
  const bw = 130, bh = 44, gap = 18, startX = 20;
  const totalW = boxes.length * bw + (boxes.length - 1) * gap + 40;
  return (
    <svg viewBox={`0 0 ${totalW} 90`} style={{ width: '100%', maxHeight: 90 }}>
      {boxes.map((label, i) => {
        const x = startX + i * (bw + gap);
        const cx = x + bw / 2;
        const cy = 45;
        const lines = label.split('\n');
        return (
          <g key={i}>
            <rect x={x} y={cy - bh / 2} width={bw} height={bh} rx={8}
              fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={1.5} />
            {lines.map((ln, j) => (
              <text key={j} x={cx} y={cy + (lines.length === 1 ? 5 : j === 0 ? -3 : 11)}
                textAnchor="middle" fontSize={10} fill={color} fontWeight={600}>{ln}</text>
            ))}
            {i < boxes.length - 1 && (
              <line
                x1={x + bw} y1={cy} x2={x + bw + gap} y2={cy}
                stroke={color} strokeWidth={1.5}
                markerEnd="url(#arr)"
              />
            )}
          </g>
        );
      })}
      <defs>
        <marker id="arr" markerWidth={7} markerHeight={7} refX={6} refY={3.5} orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill={color} />
        </marker>
      </defs>
    </svg>
  );
}

/* ── SVG 2: p-value curve ─────────────────────────────────── */
function PValueSVG() {
  const W = 400, H = 180, ox = 200, oy = 148, sx = 55, sy = 310;
  const zObs = 1.65;
  const curvePts = normalPoints(0, 1, -3.5, 3.5, 120, sx, sy, ox, oy);

  const tailPts = [];
  for (let i = 0; i <= 60; i++) {
    const x = zObs + (3.5 - zObs) * (i / 60);
    tailPts.push(`${ox + x * sx},${oy - normalY(x) * sy}`);
  }
  const tailPath =
    `M ${ox + zObs * sx},${oy} ` +
    tailPts.map(p => `L ${p}`).join(' ') +
    ` L ${ox + 3.5 * sx},${oy} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxHeight: H }}>
      <path d={tailPath} fill="rgba(74,158,237,0.10)" />
      <polyline points={curvePts} fill="none" stroke={color} strokeWidth={2} />
      <line x1={ox} y1={20} x2={ox} y2={oy} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="3,3" />
      <line x1={ox - 3.5 * sx} y1={oy} x2={ox + 3.7 * sx} y2={oy} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={ox + zObs * sx} y1={oy - normalY(zObs) * sy} x2={ox + zObs * sx} y2={oy}
        stroke={color} strokeWidth={1.5} strokeDasharray="4,3" />
      <text x={ox + zObs * sx} y={oy + 16} textAnchor="middle" fontSize={10} fill={color}>z<tspan fontSize={7} dy={2}>obs</tspan></text>
      <text x={ox + zObs * sx + 28} y={oy - 22} fontSize={10} fill={color} fontWeight={700}>p-value</text>
    </svg>
  );
}

/* ── SVG 3: Regiões críticas ─────────────────────────────── */
function CriticalRegionsSVG() {
  const W = 660, H = 130;
  const panels = [
    { label: 'Cauda Esquerda', zc: -1.645, shade: 'left' },
    { label: 'Cauda Direita', zc: 1.645, shade: 'right' },
    { label: 'Bicaudal', zc: 1.96, shade: 'both' },
  ];
  const pw = 200, gap = 10, sy = 280, sx = 38, oy = 115;
  const totalW = panels.length * pw + (panels.length - 1) * gap;
  const startX = (W - totalW) / 2;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: '100%' }}>
      {panels.map(({ label, zc, shade }, pi) => {
        const ox = startX + pw / 2 + pi * (pw + gap);
        const curve = normalPoints(0, 1, -3.5, 3.5, 100, sx, sy, ox, oy);

        const buildTail = (from, to) => {
          const steps = 50;
          const pts = [];
          for (let i = 0; i <= steps; i++) {
            const x = from + (to - from) * (i / steps);
            pts.push(`${ox + x * sx},${oy - normalY(x) * sy}`);
          }
          return `M ${ox + from * sx},${oy} ` + pts.map(p => `L ${p}`).join(' ') + ` L ${ox + to * sx},${oy} Z`;
        };

        let shadePaths = [];
        if (shade === 'left') shadePaths = [buildTail(-3.5, zc)];
        if (shade === 'right') shadePaths = [buildTail(zc, 3.5)];
        if (shade === 'both') shadePaths = [buildTail(-3.5, -zc), buildTail(zc, 3.5)];

        const critVals = shade === 'both' ? [-zc, zc] : [zc];

        return (
          <g key={pi}>
            {shadePaths.map((d, i) => <path key={i} d={d} fill="rgba(74,158,237,0.10)" />)}
            <polyline points={curve} fill="none" stroke={color} strokeWidth={1.5} />
            <line x1={ox - 3.5 * sx} y1={oy} x2={ox + 3.7 * sx} y2={oy}
              stroke="var(--text-secondary)" strokeWidth={1} />
            {critVals.map((z, i) => (
              <g key={i}>
                <line x1={ox + z * sx} y1={oy - normalY(z) * sy} x2={ox + z * sx} y2={oy}
                  stroke={color} strokeWidth={1} strokeDasharray="3,2" />
                <text x={ox + z * sx} y={oy + 12} textAnchor="middle" fontSize={8} fill={color}>
                  {z < 0 ? `−${Math.abs(z)}` : z}
                </text>
              </g>
            ))}
            <text x={ox + 3.7 * sx / 2} y={12} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">{label}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* ── SVG 4: Tabela 2×2 Erros ─────────────────────────────── */
function ErrorTableSVG() {
  const W = 420, H = 160;
  const cells = [
    { x: 120, y: 30, w: 140, h: 55, fill: 'rgba(28,92,171,0.20)', stroke: '#1c5cab', label: 'Decisão Correta', sub: '(1 − α)', tx: 190, ty: 52, ts: 57 },
    { x: 260, y: 30, w: 140, h: 55, fill: 'rgba(134,182,239,0.12)', stroke: '#86b6ef', label: 'Erro Tipo II', sub: '(β)', tx: 330, ty: 52, ts: 57 },
    { x: 120, y: 85, w: 140, h: 55, fill: 'rgba(134,182,239,0.12)', stroke: '#86b6ef', label: 'Erro Tipo I', sub: '(α)', tx: 190, ty: 107, ts: 57 },
    { x: 260, y: 85, w: 140, h: 55, fill: 'rgba(28,92,171,0.20)', stroke: '#1c5cab', label: 'Decisão Correta', sub: '(1 − β)', tx: 330, ty: 107, ts: 57 },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: 600 }}>
      {/* Headers */}
      <text x={190} y={20} textAnchor="middle" fontSize={9} fill="var(--text-secondary)" fontWeight={700}>H₀ Verdadeira</text>
      <text x={330} y={20} textAnchor="middle" fontSize={9} fill="var(--text-secondary)" fontWeight={700}>H₁ Verdadeira</text>
      <text x={60} y={58} textAnchor="middle" fontSize={9} fill="var(--text-secondary)" fontWeight={700}>Não rejeitar H₀</text>
      <text x={60} y={113} textAnchor="middle" fontSize={9} fill="var(--text-secondary)" fontWeight={700}>Rejeitar H₀</text>
      {cells.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y={c.y} width={c.w} height={c.h} fill={c.fill} stroke={c.stroke} strokeWidth={1.5} />
          <text x={c.tx} y={c.ty - 4} textAnchor="middle" fontSize={9} fontWeight={700} fill={c.stroke}>{c.label}</text>
          <text x={c.tx} y={c.ty + 10} textAnchor="middle" fontSize={9} fill={c.stroke}>{c.sub}</text>
        </g>
      ))}
    </svg>
  );
}

/* ── SVG 5: Power curve ───────────────────────────────────── */
function PowerCurveSVG() {
  const W = 420, H = 160;
  const ox = 40, oy = 140, sx = 60, sy = 120;

  const logistic = (x, k, x0) => 1 / (1 + Math.exp(-k * (x - x0)));

  const pts = (k, x0) => {
    const res = [];
    for (let i = 0; i <= 60; i++) {
      const x = -1 + i * (4 / 60);
      const y = logistic(x, k, x0);
      res.push(`${ox + (x + 1) * sx},${oy - y * sy}`);
    }
    return res.join(' ');
  };

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxHeight: H }}>
      <defs>
        <marker id="arrpc" markerWidth={6} markerHeight={6} refX={5} refY={3} orient="auto">
          <polygon points="0 0,6 3,0 6" fill="var(--text-secondary)" />
        </marker>
      </defs>
      {/* Axes */}
      <line x1={ox} y1={oy - sy} x2={ox} y2={oy} stroke="var(--text-secondary)" strokeWidth={1} markerEnd="url(#arrpc)" />
      <line x1={ox} y1={oy} x2={ox + 4.2 * sx} y2={oy} stroke="var(--text-secondary)" strokeWidth={1} markerEnd="url(#arrpc)" />
      {/* Grid */}
      <line x1={ox} y1={oy - sy} x2={ox + 4 * sx} y2={oy - sy} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="3,3" />
      <line x1={ox} y1={oy - sy / 2} x2={ox + 4 * sx} y2={oy - sy / 2} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="3,3" />
      {/* Curves */}
      <polyline points={pts(2.5, 1)} fill="none" stroke="rgba(74,158,237,0.45)" strokeWidth={2} strokeDasharray="5,3" />
      <polyline points={pts(5, 1)} fill="none" stroke={color} strokeWidth={2.5} />
      {/* Labels */}
      <text x={ox - 6} y={oy - sy + 4} textAnchor="end" fontSize={9} fill="var(--text-secondary)">1</text>
      <text x={ox - 6} y={oy - sy / 2 + 4} textAnchor="end" fontSize={9} fill="var(--text-secondary)">0.5</text>
      <text x={ox - 6} y={oy + 4} textAnchor="end" fontSize={9} fill="var(--text-secondary)">0</text>
      <text x={ox + 2 * sx} y={oy + 16} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">μ verdadeiro</text>
      <text x={ox - 30} y={oy - sy / 2} fontSize={9} fill={color} fontWeight={700}
        transform={`rotate(-90, ${ox - 28}, ${oy - sy / 2})`}>1 − β (Potência)</text>
      {/* Legend */}
      <line x1={260} y1={30} x2={285} y2={30} stroke={color} strokeWidth={2.5} />
      <text x={290} y={34} fontSize={9} fill="var(--text-primary)">n grande</text>
      <line x1={260} y1={48} x2={285} y2={48} stroke="rgba(74,158,237,0.45)" strokeWidth={2} strokeDasharray="5,3" />
      <text x={290} y={52} fontSize={9} fill="var(--text-primary)">n pequeno</text>
    </svg>
  );
}

/* ── Main component ───────────────────────────────────────── */
export default function ST5() {
  return (
    <div style={S.page}>
      <Link to="/statistics" style={S.back}>
        <ArrowLeft size={16} />
        Voltar a Statistics
      </Link>

      <span style={S.tag}>MÓDULO 05</span>
      <h1 style={S.h1}>Testes de Hipóteses</h1>

      {/* ─── 1. Lógica dos Testes ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Lógica dos Testes de Hipóteses</h2>
        <p style={S.p}>
          Um teste de hipóteses começa sempre com duas hipóteses mutuamente exclusivas sobre um parâmetro
          populacional:
        </p>
        <div style={S.highlight}>
          <strong>H₀ (Hipótese Nula)</strong> — afirmação de ausência de efeito ou de igualdade; é a hipótese
          que <em>assumimos verdadeira</em> por defeito e tentamos refutar com dados.<br />
          <strong>H₁ (Hipótese Alternativa)</strong> — o que procuramos evidenciar; reflete o efeito ou diferença
          que esperamos observar.
        </div>
        <p style={S.p}>
          O raciocínio é por redução ao absurdo: <em>se H₀ for verdadeira</em>, qual a probabilidade de
          obtermos dados tão extremos quanto os observados? Se essa probabilidade (p-value) for muito baixa,
          rejeitamos H₀.
        </p>
        <h3 style={S.h3}>Procedimento em 5 passos</h3>
        <div style={S.diagram}>
          <FlowchartSVG />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Passo</th>
              <th style={S.th}>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1. Definir H₀ e H₁', 'Especificar a hipótese nula e a alternativa com precisão matemática.'],
              ['2. Escolher α', 'Nível de significância — probabilidade máxima tolerada de erro tipo I (tipicamente 0,05 ou 0,01).'],
              ['3. Calcular a estatística de teste', 'Transformar os dados amostrais numa estatística (t, z, F, χ²) sob H₀.'],
              ['4. Comparar com o valor crítico', 'Determinar a região de rejeição ou calcular o p-value.'],
              ['5. Decisão', 'Rejeitar H₀ se p < α (ou se a estatística cair na região crítica); caso contrário, não rejeitar.'],
            ].map(([p, d], i) => (
              <tr key={i}>
                <td style={{ ...S.td, fontWeight: 600 }}>{p}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Nota: "não rejeitar H₀" não é o mesmo que "provar H₀". A ausência de evidência não é evidência de ausência.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── 2. p-value ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. O p-value</h2>
        <p style={S.p}>
          O <strong>p-value</strong> é a probabilidade, sob H₀, de obter uma estatística de teste tão extrema
          ou mais extrema do que a observada. Não é a probabilidade de H₀ ser verdadeira — é uma probabilidade
          sobre os dados, condicionada em H₀.
        </p>
        <div style={S.diagram}>
          <PValueSVG />
        </div>
        <h3 style={S.h3}>Interpretações corretas vs. erradas</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Afirmação</th>
              <th style={S.th}>Correcta?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['p = 0,03 significa que H₀ tem 3 % de probabilidade de ser verdadeira.', false, 'Errada'],
              ['p = 0,03 significa que, se H₀ for verdadeira, há 3 % de probabilidade de obter estes dados (ou mais extremos).', true, 'Correta'],
              ['p pequeno implica que o efeito é grande.', false, 'Errada — p depende também de n.'],
              ['p > 0,05 prova que não há efeito.', false, 'Errada — apenas ausência de evidência suficiente.'],
              ['p < α justifica rejeitar H₀ ao nível α.', true, 'Correta'],
            ].map(([a, ok, c], i) => (
              <tr key={i}>
                <td style={S.td}>{a}</td>
                <td style={{ ...S.td, color: ok ? '#3ddc72' : '#f87171', fontWeight: 700 }}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Fisher concebia o p-value como medida de incompatibilidade com H₀, não como taxa de erro. A confusão
          com o paradigma de Neyman–Pearson (α fixo) é a origem de muita má interpretação na literatura.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── 3. Regiões Críticas ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Regiões Críticas</h2>
        <p style={S.p}>
          A região crítica (ou região de rejeição) é o conjunto de valores da estatística de teste que levam
          à rejeição de H₀. O seu posicionamento depende da forma de H₁:
        </p>
        <div style={S.diagram}>
          <CriticalRegionsSVG />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo de Teste</th>
              <th style={S.th}>H₁</th>
              <th style={S.th}>Rejeitar H₀ se</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Cauda esquerda', 'μ < μ₀', 'z < −z_α'],
              ['Cauda direita', 'μ > μ₀', 'z > z_α'],
              ['Bicaudal', 'μ ≠ μ₀', '|z| > z_{α/2}'],
            ].map(([t, h, r], i) => (
              <tr key={i}>
                <td style={S.td}>{t}</td>
                <td style={S.td}>{h}</td>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>{r}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          Para α = 0,05 os valores críticos da distribuição normal padrão são z_{'{0,05}'} = 1,645 (unilateral)
          e z_{'{0,025}'} = 1,960 (bilateral). Para distribuições t ou χ², os valores dependem dos graus de liberdade.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ─── 4. Erros Tipo I e II ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Erros Tipo I e Tipo II</h2>
        <p style={S.p}>
          Ao tomar uma decisão binária (rejeitar ou não rejeitar H₀) com base em dados, existem dois tipos
          de erro possíveis:
        </p>
        <div style={S.diagram}>
          <ErrorTableSVG />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Erro</th>
              <th style={S.th}>Definição</th>
              <th style={S.th}>Probabilidade</th>
              <th style={S.th}>Também conhecido como</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...S.td, color, fontWeight: 700 }}>Tipo I</td>
              <td style={S.td}>Rejeitar H₀ quando H₀ é verdadeira</td>
              <td style={S.td}>α (nível de significância)</td>
              <td style={S.td}>Falso positivo</td>
            </tr>
            <tr>
              <td style={{ ...S.td, color, fontWeight: 700 }}>Tipo II</td>
              <td style={S.td}>Não rejeitar H₀ quando H₁ é verdadeira</td>
              <td style={S.td}>β</td>
              <td style={S.td}>Falso negativo</td>
            </tr>
          </tbody>
        </table>
        <div style={S.highlight}>
          <strong>Trade-off fundamental:</strong> reduzir α (tornando o teste mais conservador) aumenta β, e
          vice-versa. Para reduzir ambos simultaneamente, é necessário aumentar o tamanho amostral n.
        </div>
        <p style={S.p}>
          Na prática, α é fixado pelo investigador antes de recolher os dados. β depende do verdadeiro
          valor do parâmetro, do n e do α escolhido. A potência do teste, 1 − β, quantifica a capacidade
          de detetar um efeito real.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ─── 5. Potência do Teste ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Potência do Teste</h2>
        <p style={S.p}>
          A <strong>potência</strong> (1 − β) é a probabilidade de rejeitar H₀ quando H₁ é verdadeira.
          Um teste com potência elevada tem menor risco de "falhar" um efeito real.
        </p>
        <div style={S.diagram}>
          <PowerCurveSVG />
        </div>
        <p style={S.p}>
          A curva de potência mostra como a potência varia em função do verdadeiro valor do parâmetro.
          Quanto mais o parâmetro real se afasta de H₀, mais fácil é detetar o efeito — especialmente
          com amostras grandes.
        </p>
        <h3 style={S.h3}>Fatores que aumentam a potência</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Fator</th>
              <th style={S.th}>Efeito na potência</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Aumentar n (tamanho amostral)', '↑ Potência'],
              ['Aumentar α (menos conservador)', '↑ Potência (mas ↑ erro tipo I)'],
              ['Efeito real maior (μ afasta-se de μ₀)', '↑ Potência'],
              ['Diminuir σ (mais controlo experimental)', '↑ Potência'],
              ['Usar teste unilateral em vez de bilateral', '↑ Potência (quando direção é conhecida)'],
            ].map(([f, e], i) => (
              <tr key={i}>
                <td style={S.td}>{f}</td>
                <td style={{ ...S.td, color: '#4a9eed', fontWeight: 600 }}>{e}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Regra prática: uma potência de 0,80 é frequentemente considerada aceitável em ciências do comportamento.
          Para ensaios clínicos, exige-se frequentemente 0,90 ou superior.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── 6. Tamanho do Efeito ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Tamanho do Efeito</h2>
        <p style={S.p}>
          O p-value indica apenas se um resultado é estatisticamente significativo, mas não a sua magnitude
          prática. O <strong>tamanho do efeito</strong> quantifica a relevância substantiva do resultado.
        </p>
        
          <strong>d de Cohen</strong> (para comparação de duas médias):<br />
          <BlockMath math="d = \frac{\mu_1 - \mu_2}{\sigma_{\text{pooled}}}" />
          onde <InlineMath math="\sigma_{\text{pooled}} = \sqrt{(s_1^2 + s_2^2)/2}" /> é o desvio-padrão combinado das duas amostras.
        
        <h3 style={S.h3}>Convenções de Cohen</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>|d|</th>
              <th style={S.th}>Interpretação</th>
              <th style={S.th}>Exemplo prático</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['0,2', 'Efeito pequeno', 'Diferença subtil, raramente percetível a olho nu'],
              ['0,5', 'Efeito médio', 'Diferença moderada, visível em dados'],
              ['0,8', 'Efeito grande', 'Diferença marcada, facilmente detetável'],
            ].map(([d, i, e], idx) => (
              <tr key={idx}>
                <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 600 }}>{d}</td>
                <td style={S.td}>{i}</td>
                <td style={S.td}>{e}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          Outras medidas de tamanho do efeito incluem r de Pearson (correlação), η² (para ANOVA) e
          odds ratio (para variáveis binárias). A comunicação científica moderna exige reportar sempre
          o tamanho do efeito e os intervalos de confiança, não apenas o p-value.
        </p>
        <div style={S.note}>
          Com n muito grande, efeitos triviais tornam-se estatisticamente significativos. Com n pequeno,
          efeitos grandes podem não atingir significância. O p-value confunde magnitude e precisão — o tamanho
          do efeito separa os dois.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── 7. Teste t ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Teste t para a Média</h2>
        <p style={S.p}>
          O teste t é o teste paramétrico mais usado para comparar médias quando σ é desconhecido (caso
          habitual). Assume normalidade (ou n suficientemente grande pelo TLC) e usa a distribuição t de
          Student com n−1 graus de liberdade.
        </p>

        <h3 style={S.h3}>Teste t para uma amostra</h3>
        
          <InlineMath math="H_0: \mu = \mu_0" /><br />
          Estatística: <BlockMath math="t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}" />
          Graus de liberdade: <InlineMath math="df = n - 1" />
        

        <h3 style={S.h3}>Teste t para duas amostras independentes</h3>
        
          <InlineMath math="H_0: \mu_1 = \mu_2" /><br />
          Estatística (variâncias iguais): <BlockMath math="t = \frac{\bar{x}_1 - \bar{x}_2}{s_p\,\sqrt{1/n_1 + 1/n_2}}" />
          onde <BlockMath math="s_p^2 = \frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}" />
          <InlineMath math="df = n_1 + n_2 - 2" /><br />
          Se variâncias desiguais, usar a correção de Welch (df ajustado).
        

        <h3 style={S.h3}>Teste t para amostras emparelhadas</h3>
        
          <InlineMath math="H_0: \mu_d = 0" /> (onde <InlineMath math="d_i = X_{1i} - X_{2i}" />)<br />
          Estatística: <BlockMath math="t = \frac{\bar{d}}{s_d/\sqrt{n}}" />
          <InlineMath math="df = n - 1" />
        

        <h3 style={S.h3}>Exemplo — teste t para uma amostra</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Parâmetro</th>
              <th style={S.th}>Valor</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Média amostral', '52,3'],
              ['Média sob H₀', '50,0'],
              ['Desvio-padrão amostral (s)', '8,4'],
              ['Tamanho da amostra (n)', '36'],
              ['Estatística t', 't = (52,3 − 50,0) / (8,4 / √36) = 2,3 / 1,4 ≈ 1,643'],
              ['Valor crítico (α=0,05, bilateral)', 't₀.₀₂₅(35) ≈ 2,030'],
              ['Decisão', 'Não rejeitar H₀ (1,643 < 2,030)'],
            ].map(([p, v], i) => (
              <tr key={i}>
                <td style={{ ...S.td, fontWeight: 600 }}>{p}</td>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ─── 8. Qui-Quadrado ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Teste Qui-Quadrado (χ²)</h2>
        <p style={S.p}>
          O teste χ² é usado para variáveis categóricas. Existem dois usos principais:
          o <strong>teste de aderência</strong> (goodness-of-fit) e o <strong>teste de independência</strong>.
        </p>

        <h3 style={S.h3}>Estatística Qui-Quadrado</h3>
        
          <BlockMath math="\chi^2 = \sum_i \frac{(O_i - E_i)^2}{E_i}" />
          onde <InlineMath math="O_i" /> são as frequências observadas e <InlineMath math="E_i" /> as esperadas sob <InlineMath math="H_0" />.
        

        <h3 style={S.h3}>Teste de independência — tabela de contingência</h3>
        <p style={S.p}>
          Para uma tabela r × c, os valores esperados calculam-se como:
          <span style={{ display: 'block', margin: '0.5rem 0' }}>
            <BlockMath math="E_{ij} = \frac{\text{Total linha } i \times \text{Total coluna } j}{\text{Total geral}}" />
          </span>
          e os graus de liberdade são <InlineMath math="df = (r-1)(c-1)" />.
        </p>

        <h3 style={S.h3}>Exemplo — tabela 2×2</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}></th>
              <th style={S.th}>Sucesso</th>
              <th style={S.th}>Insucesso</th>
              <th style={S.th}>Total</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Grupo A', '30 (E=27)', '20 (E=23)', '50'],
              ['Grupo B', '24 (E=27)', '26 (E=23)', '50'],
              ['Total', '54', '46', '100'],
            ].map(([r, c1, c2, c3], i) => (
              <tr key={i}>
                <td style={{ ...S.td, fontWeight: 600 }}>{r}</td>
                <td style={S.td}>{c1}</td>
                <td style={S.td}>{c2}</td>
                <td style={{ ...S.td, fontWeight: 600 }}>{c3}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
          <BlockMath math="\chi^2 = \frac{(30-27)^2}{27} + \frac{(20-23)^2}{23} + \frac{(24-27)^2}{27} + \frac{(26-23)^2}{23}" />
          <BlockMath math="= \frac{9}{27} + \frac{9}{23} + \frac{9}{27} + \frac{9}{23} \approx 0{,}333 + 0{,}391 + 0{,}333 + 0{,}391 \approx 1{,}448" />
          <InlineMath math="df = (2-1)(2-1) = 1 \;\Rightarrow\; \chi^2_{0.05}(1) = 3{,}841 \;\Rightarrow" /> Não rejeitar <InlineMath math="H_0" />
        
        <div style={S.note}>
          Condição de aplicabilidade: todas as frequências esperadas devem ser ≥ 5. Para tabelas com células
          pequenas, usar o teste exato de Fisher.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── 9. ANOVA ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. ANOVA — Análise de Variância</h2>
        <p style={S.p}>
          A ANOVA (Analysis of Variance) compara as médias de k ≥ 2 grupos simultaneamente, testando
          H₀: μ₁ = μ₂ = … = μ_k contra H₁: pelo menos um par de médias difere.
        </p>

        <h3 style={S.h3}>Porquê não fazer múltiplos testes t?</h3>
        <p style={S.p}>
          Ao fazer <InlineMath math="\binom{k}{2}" /> testes t ao nível α, a probabilidade de pelo menos um falso
          positivo é <InlineMath math="1 - (1-\alpha)^{\binom{k}{2}}" />, que cresce rapidamente. Para k=5 grupos
          e α=0,05, são 10 comparações e a taxa de erro familiar sobe para ≈ 40 %.
        </p>

        <h3 style={S.h3}>Estatística F</h3>
        
          <BlockMath math="F = \frac{MSB}{MSW} = \frac{SSB/df_B}{SSW/df_W}" />
          SSB = variabilidade <em>entre</em> grupos; SSW = variabilidade <em>dentro</em> dos grupos<br />
          <InlineMath math="df_B = k - 1;\quad df_W = N - k;\quad df_T = N - 1" />
        

        <h3 style={S.h3}>Tabela ANOVA</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Fonte</th>
              <th style={S.th}>SS</th>
              <th style={S.th}>df</th>
              <th style={S.th}>MS</th>
              <th style={S.th}>F</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Entre grupos', 'SSB', 'k−1', 'SSB/(k−1)', 'MSB/MSW'],
              ['Dentro dos grupos', 'SSW', 'N−k', 'SSW/(N−k)', '—'],
              ['Total', 'SST', 'N−1', '—', '—'],
            ].map(([f, ss, df, ms, fv], i) => (
              <tr key={i}>
                <td style={{ ...S.td, fontWeight: 600 }}>{f}</td>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>{ss}</td>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>{df}</td>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>{ms}</td>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>{fv}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Testes post-hoc</h3>
        <p style={S.p}>
          Quando a ANOVA rejeita H₀, os testes post-hoc identificam quais os pares de médias que diferem,
          controlando o erro familiar:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Característica</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Tukey HSD', 'Controla o erro familiar; recomendado para todas as comparações par-a-par.'],
              ['Bonferroni', 'Divide α pelo número de comparações; conservador mas simples.'],
              ['Scheffé', 'Muito conservador; adequado para contrastes gerais.'],
              ['Dunnett', 'Compara apenas cada grupo com um controlo.'],
            ].map(([m, d], i) => (
              <tr key={i}>
                <td style={{ ...S.td, fontWeight: 600 }}>{m}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          A ANOVA pressupõe normalidade dentro dos grupos, homogeneidade de variâncias (homocedasticidade)
          e independência das observações. Verificar com o teste de Levene para a homocedasticidade.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── 10. Testes Não-Paramétricos ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Testes Não-Paramétricos</h2>
        <p style={S.p}>
          Quando os pressupostos dos testes paramétricos não se verificam (normalidade, escala de razão/intervalo),
          os testes não-paramétricos operam sobre as <strong>ordens (ranks)</strong> dos dados, sendo mais
          robustos a outliers e distribuições assimétricas.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Teste</th>
              <th style={S.th}>Alternativa paramétrica</th>
              <th style={S.th}>Situação de uso</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Mann-Whitney U', 'Teste t independente', '2 grupos independentes; comparar medianas.'],
              ['Wilcoxon signed-rank', 'Teste t emparelhado', '2 amostras emparelhadas ou 1 amostra vs. constante.'],
              ['Kruskal-Wallis H', 'ANOVA a um fator', 'k grupos independentes; extensão do Mann-Whitney.'],
              ['Friedman', 'ANOVA de medidas repetidas', 'k tratamentos em blocos (medidas repetidas).'],
              ['Spearman ρ', 'Correlação de Pearson', 'Correlação entre variáveis ordinais ou com outliers.'],
            ].map(([t, p, s], i) => (
              <tr key={i}>
                <td style={{ ...S.td, fontWeight: 600 }}>{t}</td>
                <td style={S.td}>{p}</td>
                <td style={S.td}>{s}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Lógica dos ranks</h3>
        <p style={S.p}>
          Os dados originais são substituídos pelas suas ordens (rank 1 para o menor, rank n para o maior).
          Empates recebem a média dos ranks. As estatísticas de teste baseiam-se na soma ou diferença de ranks
          entre grupos, eliminando a sensibilidade à distribuição dos valores brutos.
        </p>
        <div style={S.note}>
          Os testes não-paramétricos têm tipicamente menor potência do que os paramétricos quando os pressupostos
          paramétricos se verificam. Usá-los indiscriminadamente é ineficiente; reservar para quando há evidência
          de violação dos pressupostos.
        </div>
      </section>

    </div>
  );
}
