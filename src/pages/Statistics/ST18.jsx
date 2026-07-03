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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

function DatasetMatrixSVG() {
  const cols = ['Idade', 'Peso', 'Renda', 'Exercício', 'Doença'];
  const rows = [
    [true, true, true, true, true],
    [true, false, true, true, false],
    [true, true, false, true, true],
    [true, true, true, false, true],
    [false, true, false, true, true],
    [true, false, true, false, false],
    [true, true, true, true, true],
    [true, false, false, true, true],
  ];
  const cellW = 80;
  const cellH = 28;
  const offsetX = 10;
  const offsetY = 30;
  return (
    <svg width="100%" viewBox="0 0 480 280" style={{ display: 'block' }}>
      {cols.map((c, ci) => (
        <text
          key={ci}
          x={offsetX + ci * cellW + cellW / 2}
          y={offsetY - 8}
          textAnchor="middle"
          fontSize="11"
          fontWeight="600"
          fill="var(--text-secondary)"
        >
          {c}
        </text>
      ))}
      {rows.map((row, ri) => (
        <text
          key={ri}
          x={offsetX - 5}
          y={offsetY + ri * cellH + cellH / 2 + 4}
          textAnchor="end"
          fontSize="10"
          fill="var(--text-secondary)"
        >
          {`Obs ${ri + 1}`}
        </text>
      ))}
      {rows.map((row, ri) =>
        row.map((present, ci) => (
          <rect
            key={`${ri}-${ci}`}
            x={offsetX + ci * cellW + 2}
            y={offsetY + ri * cellH + 2}
            width={cellW - 4}
            height={cellH - 4}
            rx={4}
            fill={present ? '#f9731622' : 'var(--text-secondary)'}
            stroke={present ? '#f9731666' : 'var(--text-secondary)'}
            strokeWidth={1}
          />
        ))
      )}
      {rows.map((row, ri) =>
        row.map((present, ci) => (
          <text
            key={`t-${ri}-${ci}`}
            x={offsetX + ci * cellW + cellW / 2}
            y={offsetY + ri * cellH + cellH / 2 + 4}
            textAnchor="middle"
            fontSize="10"
            fill={present ? color : 'var(--text-secondary)'}
          >
            {present ? '✓' : 'NA'}
          </text>
        ))
      )}
      <text x={240} y={270} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">
        Células cinzentas = dados omissos. 30% de missingness pode eliminar 70% das linhas em listwise deletion.
      </text>
    </svg>
  );
}

function MechanismsSVG() {
  const boxes = [
    { label: 'MCAR', x: 20, color2: '#f97316', desc: 'Independente de\ntudo. Falha aleatória\nde equipamento.' },
    { label: 'MAR', x: 190, color2: '#f97316', desc: 'Depende de dados\nobservados. Homens\nomitem o peso.' },
    { label: 'MNAR', x: 360, color2: '#f97316', desc: 'Depende do valor\nomisso. Ricos omitem\na renda.' },
  ];
  return (
    <svg width="100%" viewBox="0 0 530 180" style={{ display: 'block' }}>
      {boxes.map((b) => (
        <g key={b.label}>
          <rect x={b.x} y={10} width={130} height={155} rx={10} fill={`${b.color2}15`} stroke={b.color2} strokeWidth={1.5} />
          <text x={b.x + 65} y={35} textAnchor="middle" fontSize="14" fontWeight="700" fill={b.color2}>
            {b.label}
          </text>
          {b.desc.split('\n').map((line, i) => (
            <text key={i} x={b.x + 65} y={65 + i * 18} textAnchor="middle" fontSize="11" fill="var(--text-primary)">
              {line}
            </text>
          ))}
          <rect x={b.x + 15} y={120} width={100} height={12} rx={3} fill={b.color2} fillOpacity={0.15} />
          <rect
            x={b.x + 15}
            y={120}
            width={b.label === 'MCAR' ? 100 : b.label === 'MAR' ? 60 : 30}
            height={12}
            rx={3}
            fill={b.color2}
            fillOpacity={0.7}
          />
          <text x={b.x + 65} y={150} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">
            {b.label === 'MCAR' ? 'Listwise OK' : b.label === 'MAR' ? 'Imputação OK' : 'Modelo explícito'}
          </text>
        </g>
      ))}
    </svg>
  );
}

function MissingPatternSVG() {
  const vars = ['X1', 'X2', 'X3', 'X4', 'X5'];
  const obs = 10;
  const pattern = [
    [1,1,1,1,1],
    [1,1,0,1,1],
    [1,0,0,1,1],
    [1,1,1,0,1],
    [1,1,1,1,0],
    [1,0,1,0,1],
    [1,1,0,1,0],
    [1,1,1,1,1],
    [1,0,0,1,1],
    [1,1,1,0,1],
  ];
  const cw = 50;
  const ch = 22;
  return (
    <svg width="100%" viewBox="0 0 340 280" style={{ display: 'block' }}>
      <text x={170} y={18} textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">
        Padrão de Missingness (missingno)
      </text>
      {vars.map((v, vi) => (
        <text key={vi} x={50 + vi * cw + cw / 2} y={38} textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text-secondary)">
          {v}
        </text>
      ))}
      {pattern.map((row, ri) =>
        row.map((val, vi) => (
          <rect
            key={`${ri}-${vi}`}
            x={50 + vi * cw + 2}
            y={44 + ri * ch + 2}
            width={cw - 4}
            height={ch - 4}
            rx={2}
            fill={val ? '#f97316' : '#e5e7eb'}
          />
        ))
      )}
      {pattern.map((row, ri) => {
        const missing = row.filter(v => v === 0).length;
        return (
          <text key={ri} x={310} y={44 + ri * ch + ch / 2 + 4} fontSize="9" fill="var(--text-secondary)">
            {missing > 0 ? `${missing} NA` : ''}
          </text>
        );
      })}
      <text x={170} y={270} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">
        Verde = presente, Cinzento = omisso
      </text>
    </svg>
  );
}

function MeanImputationSVG() {
  const originalPoints = [
    [30,120],[45,95],[60,75],[75,60],[90,45],[110,30],[130,20],[50,100],[80,55],[100,38]
  ];
  const imputedPoints = [
    [40,88],[55,88],[65,88],[95,88],[105,88]
  ];
  return (
    <svg width="100%" viewBox="0 0 420 200" style={{ display: 'block' }}>
      <text x={105} y={15} textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text-primary)">
        Dados Originais
      </text>
      <text x={315} y={15} textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text-primary)">
        Após Mean Imputation
      </text>
      <line x1={10} y1={170} x2={200} y2={170} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={10} y1={170} x2={10} y2={20} stroke="var(--text-secondary)" strokeWidth={1} />
      {originalPoints.map((p, i) => (
        <circle key={i} cx={10 + p[0]} cy={p[1]} r={4} fill={color} fillOpacity={0.7} />
      ))}
      <line x1={220} y1={170} x2={410} y2={170} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={220} y1={170} x2={220} y2={20} stroke="var(--text-secondary)" strokeWidth={1} />
      {originalPoints.map((p, i) => (
        <circle key={i} cx={220 + p[0]} cy={p[1]} r={4} fill={color} fillOpacity={0.7} />
      ))}
      {imputedPoints.map((p, i) => (
        <circle key={i} cx={220 + p[0]} cy={p[1]} r={5} fill="#f97316" fillOpacity={0.8} />
      ))}
      <line x1={220} y1={88} x2={410} y2={88} stroke="#f97316" strokeWidth={1} strokeDasharray="4,3" />
      <text x={390} y={85} fontSize="9" fill="#f97316" textAnchor="end">média</text>
      <text x={105} y={190} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Correlação real</text>
      <text x={315} y={190} textAnchor="middle" fontSize="9" fill="#f97316">Atenuação da correlação (pontos vermelhos)</text>
    </svg>
  );
}

function MICEWorkflowSVG() {
  const labels = [
    { label: 'Dataset\nOriginal\n(com NA)', color2: 'var(--text-secondary)' },
    { label: 'Imputação\nm=5\ndatasets', color2: color },
    { label: 'Ajustar\nmodelo\nem cada', color2: '#f97316' },
    { label: 'Pool com\nRegras\nde Rubin', color2: '#f97316' },
    { label: 'Estimativa\nfinal\n+ IC', color2: '#f97316' },
  ];
  const W = 640, bw = 100, bh = 80, n = labels.length;
  const arrowW = (W - 20 - n * bw) / (n - 1);
  return (
    <svg width="100%" viewBox={`0 0 ${W} 160`} style={{ display: 'block', margin: '0 auto' }}>
      {labels.map((s, i) => {
        const bx = 10 + i * (bw + arrowW);
        return (
          <g key={i}>
            <rect x={bx} y={30} width={bw} height={bh} rx={8} fill={`${s.color2}15`} stroke={s.color2} strokeWidth={1.5} />
            {s.label.split('\n').map((line, li) => (
              <text key={li} x={bx + bw / 2} y={62 + li * 16} textAnchor="middle" fontSize="11" fontWeight={li === 0 ? '700' : '400'} fill={s.color2}>
                {line}
              </text>
            ))}
            {i < n - 1 && (
              <line x1={bx + bw + 4} y1={70} x2={bx + bw + arrowW - 4} y2={70} stroke="var(--text-secondary)" strokeWidth={2} markerEnd="url(#arrowMice)" />
            )}
          </g>
        );
      })}
      <defs>
        <marker id="arrowMice" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <text x={W / 2} y={148} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">
        Cada dataset imputado produz estimativas ligeiramente diferentes — o pool captura essa incerteza
      </text>
    </svg>
  );
}

function PipelineSVG() {
  return (
    <svg width="100%" viewBox="0 0 560 200" style={{ display: 'block' }}>
      <rect x={10} y={20} width={100} height={50} rx={8} fill="#f9731615" stroke={color} strokeWidth={1.5} />
      <text x={60} y={42} textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Train</text>
      <text x={60} y={58} textAnchor="middle" fontSize="10" fill={color}>Data</text>

      <rect x={10} y={110} width={100} height={50} rx={8} fill="#dc262615" stroke="#f97316" strokeWidth={1.5} />
      <text x={60} y={132} textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Test</text>
      <text x={60} y={148} textAnchor="middle" fontSize="10" fill="#f97316">Data</text>

      <rect x={160} y={60} width={110} height={50} rx={8} fill="#f9731615" stroke="#f97316" strokeWidth={1.5} />
      <text x={215} y={82} textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Imputer</text>
      <text x={215} y={98} textAnchor="middle" fontSize="10" fill="#f97316">.fit(train)</text>

      <rect x={330} y={20} width={110} height={50} rx={8} fill="#f9731615" stroke="#f97316" strokeWidth={1.5} />
      <text x={385} y={42} textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Transform</text>
      <text x={385} y={58} textAnchor="middle" fontSize="10" fill="#f97316">train set</text>

      <rect x={330} y={110} width={110} height={50} rx={8} fill="#f9731615" stroke="#f97316" strokeWidth={1.5} />
      <text x={385} y={132} textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Transform</text>
      <text x={385} y={148} textAnchor="middle" fontSize="10" fill="#f97316">test set</text>

      <rect x={490} y={60} width={60} height={50} rx={8} fill="#f9731615" stroke="#f97316" strokeWidth={1.5} />
      <text x={520} y={82} textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Model</text>
      <text x={520} y={98} textAnchor="middle" fontSize="10" fill="#f97316">fit/pred</text>

      <line x1={110} y1={45} x2={160} y2={80} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <line x1={110} y1={135} x2={160} y2={95} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <line x1={270} y1={75} x2={330} y2={45} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <line x1={270} y1={95} x2={330} y2={135} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <line x1={440} y1={45} x2={490} y2={75} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <line x1={440} y1={135} x2={490} y2={105} stroke="var(--text-secondary)" strokeWidth={1.5} />

      <text x={280} y={192} textAnchor="middle" fontSize="10" fill="#f97316">
        NUNCA faça fit do imputer nos dados de teste — isso é data leakage!
      </text>
    </svg>
  );
}

function DecisionTreeSVG() {
  // Layout constants
  const W = 700, bw = 180, bh = 44, gap = 20;
  // Row 2: 3 boxes equally spaced
  const totalRow2 = 3 * bw + 2 * gap;
  const r2start = (W - totalRow2) / 2;
  const cx1 = r2start + bw / 2;
  const cx2 = r2start + bw + gap + bw / 2;
  const cx3 = r2start + 2 * (bw + gap) + bw / 2;
  // Row 3: 2 boxes under cx2
  const bw3 = 185, gap3 = 20;
  const totalRow3 = 2 * bw3 + gap3;
  const r3start = cx2 - totalRow3 / 2;
  const cx3a = r3start + bw3 / 2;
  const cx3b = r3start + bw3 + gap3 + bw3 / 2;
  const rootCx = W / 2;

  return (
    <svg width="100%" viewBox={`0 0 ${W} 290`} style={{ display: 'block', margin: '0 auto' }}>
      {/* Root */}
      <rect x={rootCx - 100} y={10} width={200} height={bh} rx={8} fill={`${color}20`} stroke={color} strokeWidth={2} />
      <text x={rootCx} y={28} textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Quanto é o % omisso?</text>
      <text x={rootCx} y={46} textAnchor="middle" fontSize="10" fill={color}>Início da decisão</text>

      {/* Lines to row 2 */}
      <line x1={rootCx} y1={54} x2={cx1} y2={98} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <line x1={rootCx} y1={54} x2={cx2} y2={98} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <line x1={rootCx} y1={54} x2={cx3} y2={98} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <text x={(rootCx + cx1 - 100) / 2 - 10} y={82} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{'< 5%'}</text>
      <text x={rootCx - 25} y={82} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">5–40%</text>
      <text x={(rootCx + cx3 + 100) / 2 + 10} y={82} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{'>40%'}</text>

      {/* Row 2 boxes */}
      <rect x={r2start} y={98} width={bw} height={bh} rx={8} fill="#f9731620" stroke="#f97316" strokeWidth={1.5} />
      <text x={cx1} y={116} textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Listwise / Simple</text>
      <text x={cx1} y={132} textAnchor="middle" fontSize="10" fill="#f97316">Imputation OK</text>

      <rect x={r2start + bw + gap} y={98} width={bw} height={bh} rx={8} fill="#f9731620" stroke="#f97316" strokeWidth={1.5} />
      <text x={cx2} y={116} textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Qual mecanismo?</text>
      <text x={cx2} y={132} textAnchor="middle" fontSize="10" fill="#f97316">Diagnosticar padrão</text>

      <rect x={r2start + 2 * (bw + gap)} y={98} width={bw} height={bh} rx={8} fill="#dc262620" stroke="#f97316" strokeWidth={1.5} />
      <text x={cx3} y={116} textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Cuidado extremo</text>
      <text x={cx3} y={132} textAnchor="middle" fontSize="10" fill="#f97316">Modelo explícito / sens.</text>

      {/* Lines to row 3 */}
      <line x1={cx2} y1={142} x2={cx3a} y2={185} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <line x1={cx2} y1={142} x2={cx3b} y2={185} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <text x={(cx2 + cx3a -100) / 2 - 10} y={172} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">MCAR/MAR</text>
      <text x={(cx2 + cx3b + 70) / 2 + 10} y={172} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">MNAR</text>

      {/* Row 3 boxes */}
      <rect x={r3start} y={185} width={bw3} height={bh} rx={8} fill={`${color}20`} stroke={color} strokeWidth={1.5} />
      <text x={cx3a} y={203} textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>MICE / missForest</text>
      <text x={cx3a} y={219} textAnchor="middle" fontSize="10" fill={color}>Multiple Imputation</text>

      <rect x={r3start + bw3 + gap3} y={185} width={bw3} height={bh} rx={8} fill="#f9731620" stroke="#f97316" strokeWidth={1.5} />
      <text x={cx3b} y={203} textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Selection Model</text>
      <text x={cx3b} y={219} textAnchor="middle" fontSize="10" fill="#f97316">Sensitivity Analysis</text>

      <text x={W / 2} y={272} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">
        Regra: m (nº imputações) deve ser pelo menos igual ao % de dados omissos
      </text>
    </svg>
  );
}

export default function ST18() {
  return (
    <div style={S.page}>
      <Link to="/statistics" style={S.back}>
        <ArrowLeft size={16} /> Voltar a Statistics
      </Link>

      <span style={S.tag}>MÓDULO 18</span>
      <h1 style={S.h1}>Dados Omissos (Missing Data)</h1>
      <p style={S.lead}>
        Dados omissos são inevitáveis em qualquer projeto real. Ignorá-los ou aplicar listwise deletion cegamente introduz viés.
        Compreender o mecanismo de missingness — MCAR, MAR ou MNAR — é o primeiro passo para escolher a estratégia correta:
        imputação simples, múltipla (MICE) ou modelos que lidam nativamente com dados incompletos.
      </p>

      {/* ── 1. PORQUÊ IMPORTA ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Porque Importa</h2>
        <p style={S.p}>
          Em qualquer survey ou base de dados clínica, alguns participantes não respondem a certas perguntas.
          Ignorar esta realidade e aplicar <strong>listwise deletion</strong> (eliminar todas as linhas com pelo
          menos um NA) parece simples, mas pode ter consequências severas quando a missingness não é aleatória.
        </p>

        <div style={S.diagram}>
          <DatasetMatrixSVG />
        </div>

        <p style={S.p}>
          Considere um conjunto de dados com 5 variáveis, cada uma com 30% de dados omissos distribuídos
          independentemente. A probabilidade de uma linha estar completamente preenchida é
          <InlineMath math="(0.7)^5 \approx 0.168" /> — ou seja, listwise deletion eliminaria ~83% dos dados.
        </p>

        <div style={S.highlight}>
          <strong>Três perigos principais:</strong>
          <ol style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', lineHeight: 2 }}>
            <li><strong>Perda de poder estatístico</strong> — menos observações aumentam os intervalos de confiança.</li>
            <li><strong>Estimativas enviesadas</strong> — se a missingness não é MCAR, a amostra restante não é representativa.</li>
            <li><strong>Inferência inválida</strong> — os erros padrão podem estar subestimados, inflando o Tipo I.</li>
          </ol>
        </div>

        <div style={S.note}>
          <strong>Exemplo real:</strong> num inquérito de saúde, as pessoas com doença mais grave têm menos
          energia para responder a perguntas sobre rendimento. Se analisarmos apenas os que responderam,
          subestimamos o impacto económico da doença — um viés sistemático e invisível sem diagnóstico adequado.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 2. MECANISMOS ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Mecanismos de Missingness</h2>
        <p style={S.p}>
          A taxonomia de <strong>Little &amp; Rubin (1987)</strong> classifica os dados omissos em três categorias
          mutuamente exclusivas. Esta distinção é fundamental porque determina quais métodos são válidos.
        </p>

        <div style={S.diagram}>
          <MechanismsSVG />
        </div>

        <h3 style={S.h3}>MCAR — Missing Completely At Random</h3>
        <p style={S.p}>
          A probabilidade de um valor estar em falta não depende de nenhum dado — observado ou não observado.
          Formalmente, P(R = 0 | Y_obs, Y_mis) = P(R = 0). Exemplo clássico: falha aleatória de um sensor de
          temperatura. Em MCAR, a listwise deletion é <em>não enviesada</em> (embora ineficiente). O teste de
          Little (1988) testa H0: MCAR.
        </p>

        <h3 style={S.h3}>MAR — Missing At Random</h3>
        <p style={S.p}>
          A missingness depende apenas de dados <em>observados</em>, não dos valores em falta. Formalmente,
          P(R = 0 | Y_obs, Y_mis) = P(R = 0 | Y_obs). Exemplo: homens têm maior probabilidade de omitir o
          peso, mas condicionando no sexo (observado), a missingness é aleatória. A maioria dos métodos de
          imputação assume MAR — é uma assunção testável apenas parcialmente.
        </p>

        <h3 style={S.h3}>MNAR — Missing Not At Random</h3>
        <p style={S.p}>
          A missingness depende do valor em falta em si. Formalmente, P(R = 0 | Y_obs, Y_mis) não simplifica.
          Exemplo: pessoas com rendimento muito elevado omitem a pergunta de rendimento. Nenhuma técnica de
          imputação standard resolve MNAR — é necessário modelar explicitamente o mecanismo de missingness.
        </p>

        <div style={S.note}>
          Na prática, MNAR é a situação mais perigosa e mais difícil de detectar — por definição, não temos
          os dados em falta para confirmar a suspeita. A melhor abordagem é a análise de sensibilidade.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 3. DIAGNÓSTICO ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Diagnóstico — Identificar o Mecanismo</h2>
        <p style={S.p}>
          Antes de aplicar qualquer estratégia, é essencial caracterizar o padrão de missingness. Várias
          ferramentas quantitativas e visuais ajudam neste diagnóstico.
        </p>

        <div style={S.diagram}>
          <MissingPatternSVG />
        </div>

        <h3 style={S.h3}>Ferramentas de Diagnóstico</h3>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Ferramenta</th>
              <th style={S.th}>O que revela</th>
              <th style={S.th}>Limitação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Matriz missingno</td>
              <td style={S.td}>Padrão visual de omissão por variável e observação</td>
              <td style={S.td}>Não testa formalmente o mecanismo</td>
            </tr>
            <tr>
              <td style={S.td}>Teste de Little (MCAR)</td>
              <td style={S.td}>H0: os dados são MCAR (qui-quadrado)</td>
              <td style={S.td}>Rejeitar H0 não distingue MAR de MNAR</td>
            </tr>
            <tr>
              <td style={S.td}>Correlação de indicadores</td>
              <td style={S.td}>Correlação entre flag de NA e outras variáveis</td>
              <td style={S.td}>Alta correlação sugere MAR, mas não prova</td>
            </tr>
            <tr>
              <td style={S.td}>Missingness monotone</td>
              <td style={S.td}>Padrão sequencial (comum em estudos longitudinais)</td>
              <td style={S.td}>Simplifica a imputação mas pode ser MNAR</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          Dica: crie uma variável binária para cada coluna com NA (1 = omisso, 0 = presente) e regride-a
          sobre as outras variáveis observadas. Coeficientes significativos sugerem MAR; ausência de correlação
          com tudo é consistente com MCAR.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 4. ESTRATÉGIAS SIMPLES ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Estratégias Simples (e os Seus Problemas)</h2>
        <p style={S.p}>
          As estratégias simples são tentadoras pela sua facilidade de implementação, mas cada uma tem
          pressupostos implícitos que, quando violados, introduzem viés. É crucial conhecer estas limitações
          antes de as aplicar.
        </p>

        <div style={S.diagram}>
          <MeanImputationSVG />
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Quando válido</th>
              <th style={S.th}>Viés introduzido</th>
              <th style={S.th}>Efeito na variância</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Listwise deletion</strong></td>
              <td style={S.td}>Apenas MCAR</td>
              <td style={S.td}>Nenhum se MCAR; alto se MAR/MNAR</td>
              <td style={S.td}>Aumenta (menos n)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Pairwise deletion</strong></td>
              <td style={S.td}>MCAR, análises bivariadas</td>
              <td style={S.td}>Matrizes de covariância podem ser não-definidas positivas</td>
              <td style={S.td}>Inconsistente entre pares</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Mean imputation</strong></td>
              <td style={S.td}>Quase nunca recomendado</td>
              <td style={S.td}>Atenua correlações, distorce distribuição</td>
              <td style={S.td}>Subestima artificialmente</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Median imputation</strong></td>
              <td style={S.td}>Dados assimétricos, MCAR</td>
              <td style={S.td}>Mesmos problemas da média</td>
              <td style={S.td}>Subestima artificialmente</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Mode imputation</strong></td>
              <td style={S.td}>Variáveis categóricas, MCAR</td>
              <td style={S.td}>Sobrestima a categoria modal</td>
              <td style={S.td}>Reduz diversidade</td>
            </tr>
            <tr>
              <td style={S.td}><strong>LOCF</strong></td>
              <td style={S.td}>Séries temporais estacionárias</td>
              <td style={S.td}>Assume sem mudança — perigoso em tendências</td>
              <td style={S.td}>Subestima</td>
            </tr>
          </tbody>
        </table>

        <div style={S.highlight}>
          <strong>Por que a imputação pela média é tão problemática?</strong> Ao substituir valores em falta
          pela média, todos os valores imputados ficam no mesmo ponto — a correlação com outras variáveis tende
          para zero nos dados imputados. O resultado é uma atenuação artificial das correlações e uma
          subestimação da variância (os dados "parecem" menos dispersos do que realmente são).
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 5. MICE ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Imputação Múltipla — MICE</h2>
        <p style={S.p}>
          A <strong>Multiple Imputation by Chained Equations (MICE)</strong> resolve o problema fundamental
          da imputação simples: a incerteza sobre os valores em falta. Em vez de um único dataset imputado,
          MICE cria <em>m</em> datasets completos, cada um com valores plausíveis diferentes.
        </p>

        <div style={S.diagram}>
          <MICEWorkflowSVG />
        </div>

        <h3 style={S.h3}>Como Funciona o MICE</h3>
        <p style={S.p}>
          O algoritmo funciona por equações encadeadas: para cada variável com dados omissos, ajusta um
          modelo de regressão usando todas as outras variáveis como preditores, imputa os valores em falta
          com draws desse modelo, e repete o processo para cada variável em loop até convergência.
        </p>

        <ol style={{ paddingLeft: '1.4rem', lineHeight: 2, fontSize: '1rem', color: 'var(--text-primary)' }}>
          <li>Inicializar com imputação simples (e.g., pela média)</li>
          <li>Para cada variável X(j) com NA: ajustar modelo P(X(j) | X(-j)) e amostrar valores</li>
          <li>Repetir ciclos até convergência (tipicamente 10–20 iterações)</li>
          <li>Guardar o dataset resultante como imputação k</li>
          <li>Repetir m vezes → m datasets completos</li>
        </ol>

        <h3 style={S.h3}>Regras de Rubin (Pooling)</h3>
        <p style={S.p}>
          Depois de ajustar o modelo de interesse em cada dataset imputado, os resultados são combinados
          com as <strong>Regras de Rubin (1987)</strong>:
        </p>

        
          <p style={{ margin: 0, lineHeight: 2 }}>
            <strong>Estimativa pooled:</strong> <InlineMath math="\bar{Q} = \frac{1}{m} \sum Q^{(k)}" /><br />
            <strong>Variância within:</strong> <InlineMath math="\bar{W} = \frac{1}{m} \sum U^{(k)}" /> (média das variâncias individuais)<br />
            <strong>Variância between:</strong> <InlineMath math="B = \frac{1}{m-1} \sum (Q^{(k)} - \bar{Q})^2" /><br />
            <strong>Variância total:</strong> <InlineMath math="T = \bar{W} + \left(1 + \frac{1}{m}\right) B" />
          </p>
        

        <div style={S.note}>
          <strong>Quantas imputações (m)?</strong> A regra prática de von Hippel (2018): m deve ser pelo menos
          igual ao percentual de dados omissos. Com 20% de NA, use m ≥ 20. Para análises de sensibilidade,
          m = 100 é frequentemente recomendado.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 7. missForest ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. missForest — Imputação com Random Forests</h2>
        <p style={S.p}>
          O <strong>missForest</strong> (Stekhoven &amp; Bühlmann, 2012) oferece uma abordagem não-paramétrica:
          para cada variável com dados omissos, treina uma Random Forest usando todas as outras variáveis
          como preditores e imputa com as previsões da floresta. O processo itera até convergência.
        </p>

        <div style={S.highlight}>
          <strong>Vantagens sobre o MICE clássico:</strong>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', lineHeight: 2 }}>
            <li>Captura relações não-lineares e interações automaticamente</li>
            <li>Lida nativamente com dados mistos (numéricos + categóricos)</li>
            <li>Não requer especificação de modelos por variável</li>
            <li>O erro OOB (Out-Of-Bag) estima a qualidade da imputação sem dados de teste</li>
          </ul>
        </div>

        <h3 style={S.h3}>Algoritmo missForest</h3>
        <ol style={{ paddingLeft: '1.4rem', lineHeight: 2, fontSize: '1rem', color: 'var(--text-primary)' }}>
          <li>Inicializar com imputação pela média/moda</li>
          <li>Ordenar variáveis por proporção crescente de NA</li>
          <li>Para cada variável X(j): treinar RF em observações onde X(j) está presente</li>
          <li>Prever/imputar os valores em falta de X(j)</li>
          <li>Repetir para todas as variáveis (um ciclo)</li>
          <li>Repetir ciclos até que o erro OOB aumente (critério de paragem)</li>
        </ol>

        <div style={S.note}>
          <strong>Quando preferir missForest sobre MICE?</strong> Em dados de alta dimensionalidade (p grande),
          com muitas interações entre variáveis, ou quando os pressupostos de normalidade do MICE paramétrico
          são claramente violados. O trade-off: missForest é determinístico (uma única imputação) — para
          inferência estatística correcta, combine com bootstrap.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 8. PIPELINES ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Imputação em Pipelines de ML</h2>
        <p style={S.p}>
          Um dos erros mais comuns em projetos de ML é o <strong>data leakage</strong> durante a imputação:
          usar informação dos dados de teste para calcular as estatísticas de imputação (médias, parâmetros
          do modelo de imputação). O imputer deve ser ajustado <em>apenas</em> nos dados de treino.
        </p>

        <div style={S.diagram}>
          <PipelineSVG />
        </div>

        <div style={S.highlight}>
          <strong>Avisos importantes em pipelines:</strong>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', lineHeight: 2 }}>
            <li>Nunca impute a variável target — isso é sempre vazamento de informação</li>
            <li>Em séries temporais, use apenas valores passados (forward fill, não backward fill)</li>
            <li>Em cross-validation, o imputer deve ser dentro do fold — use Pipeline, não pré-processe antes</li>
            <li>Documente sempre qual estatística foi usada e em que conjunto</li>
          </ul>
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 9. MNAR ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. MNAR — Quando a Imputação Falha</h2>
        <p style={S.p}>
          Quando os dados são MNAR, a missingness é informativa — o facto de um valor estar em falta diz
          algo sobre esse valor. Nenhuma técnica de imputação standard (nem mesmo MICE) resolve este problema,
          porque todas assumem, no mínimo, MAR.
        </p>

        <h3 style={S.h3}>Abordagens para MNAR</h3>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Abordagem</th>
              <th style={S.th}>Ideia central</th>
              <th style={S.th}>Limitação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Selection models</strong></td>
              <td style={S.td}>Modelar conjuntamente o outcome e o mecanismo de missingness</td>
              <td style={S.td}>Requer assunções fortes sobre a distribuição do mecanismo</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Pattern-mixture models</strong></td>
              <td style={S.td}>Estratificar por padrão de missingness e modelar cada estrato</td>
              <td style={S.td}>Proliferação de parâmetros; identificação fraca</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Sensitivity analysis</strong></td>
              <td style={S.td}>Variar assunções sobre MNAR; ver se conclusões mudam</td>
              <td style={S.td}>Não "resolve" — mas quantifica a robustez das conclusões</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Modelo de Heckman</strong></td>
              <td style={S.td}>Two-stage: modelar participação, depois outcome com correction term</td>
              <td style={S.td}>Requer variável de exclusão (instrumento)</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Análise de Sensibilidade para MNAR</h3>
        <p style={S.p}>
          A abordagem pragmática mais recomendada: impute sob MAR (ponto de referência), depois perturbe
          sistematicamente os valores imputados na direcção MNAR suspeita e verifique se as conclusões
          principais se mantêm.
        </p>

        <div style={S.note}>
          <strong>Modelo de Heckman em Python:</strong> o pacote <code>heckman</code> implementa o two-stage
          estimator. Requer uma variável de exclusão — um preditor da participação/resposta que não afecta
          directamente o outcome. Se não existir um instrumento plausível, o modelo não é identificado.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 10. SÍNTESE ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Síntese do Módulo</h2>
        <p style={S.p}>
          A escolha do método de tratamento de dados omissos depende de três factores principais: a proporção
          de dados omissos, o mecanismo de missingness, e o objectivo final da análise. A árvore abaixo
          guia esta decisão.
        </p>

        <div style={S.diagram}>
          <DecisionTreeSVG />
        </div>

        <h3 style={S.h3}>Tabela Resumo dos Métodos</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Pressuposto</th>
              <th style={S.th}>Lida com MNAR</th>
              <th style={S.th}>Preserva variância</th>
              <th style={S.th}>Ferramenta Python</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Listwise deletion</td>
              <td style={S.td}>MCAR</td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Sim (mas perde poder)</td>
              <td style={S.td}>pandas .dropna()</td>
            </tr>
            <tr>
              <td style={S.td}>Mean/Median imputation</td>
              <td style={S.td}>MCAR</td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Não — subestima</td>
              <td style={S.td}>SimpleImputer</td>
            </tr>
            <tr>
              <td style={S.td}>KNN Imputation</td>
              <td style={S.td}>MAR</td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Parcialmente</td>
              <td style={S.td}>KNNImputer</td>
            </tr>
            <tr>
              <td style={S.td}>MICE</td>
              <td style={S.td}>MAR</td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Sim (com pooling)</td>
              <td style={S.td}>IterativeImputer, miceforest</td>
            </tr>
            <tr>
              <td style={S.td}>missForest</td>
              <td style={S.td}>MAR</td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Boa aproximação</td>
              <td style={S.td}>miceforest, manual RF</td>
            </tr>
            <tr>
              <td style={S.td}>Selection model</td>
              <td style={S.td}>MNAR (explícito)</td>
              <td style={S.td}>Sim (se bem especificado)</td>
              <td style={S.td}>Depende do modelo</td>
              <td style={S.td}>heckman, statsmodels</td>
            </tr>
            <tr>
              <td style={S.td}>Sensitivity analysis</td>
              <td style={S.td}>Qualquer</td>
              <td style={S.td}>Parcialmente (quantifica risco)</td>
              <td style={S.td}>N/A</td>
              <td style={S.td}>Manual (ver código acima)</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Regras Práticas</h3>
        <div style={S.highlight}>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 2.2 }}>
            <li><strong>{'< 5%'} omisso:</strong> listwise deletion ou imputação simples são geralmente aceitáveis.</li>
            <li><strong>5–40% omisso + MAR:</strong> MICE com m ≥ % missing é o gold standard.</li>
            <li><strong>{'> 40%'} omisso:</strong> rever o design do estudo; imputação pode introduzir mais variância do que informação.</li>
            <li><strong>Suspeita de MNAR:</strong> análise de sensibilidade obrigatória; reportar como limitação.</li>
            <li><strong>ML preditivo:</strong> use Pipeline para evitar leakage; SimpleImputer ou KNNImputer são frequentemente suficientes.</li>
            <li><strong>Inferência estatística:</strong> MICE com pooling de Rubin é essencial para intervalos de confiança válidos.</li>
          </ul>
        </div>

        <div style={S.note}>
          <strong>Transparência é fundamental:</strong> em qualquer análise, documente sempre: (1) a proporção
          de dados omissos por variável, (2) o mecanismo assumido (MCAR/MAR/MNAR), (3) o método de imputação
          utilizado e os seus parâmetros, e (4) se foi realizada alguma análise de sensibilidade. Omitir
          esta informação impede a replicação e a avaliação crítica dos resultados.
        </div>
      </section>
    </div>
  );
}
