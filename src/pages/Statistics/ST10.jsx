import { Link } from 'react-router-dom';
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
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

/* ── SVG: Parallel Timelines ── */
function ParallelTimelinesSVG() {
  return (
    <svg viewBox="0 0 700 220" style={{ width: '100%', maxWidth: 700, display: 'block', margin: '0 auto' }}>
      <text x="10" y="55" fontSize="12" fill={color} fontWeight="700">Mundo Tratado D=1</text>
      <line x1="10" y1="70" x2="670" y2="70" stroke={color} strokeWidth="2" />
      <circle cx="200" cy="70" r="7" fill={color} />
      <text x="200" y="95" fontSize="10" fill={color} textAnchor="middle">t=0</text>
      <circle cx="500" cy="70" r="7" fill={color} />
      <text x="490" y="95" fontSize="10" fill={color} textAnchor="middle">t=1</text>
      <text x="500" y="58" fontSize="11" fill={color} textAnchor="middle">Y(1) observado</text>
      <text x="10" y="145" fontSize="12" fill="var(--text-secondary)" fontWeight="700">Mundo Controlo D=0</text>
      <line x1="10" y1="160" x2="670" y2="160" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="6,3" />
      <circle cx="200" cy="160" r="7" fill="var(--text-secondary)" />
      <text x="200" y="185" fontSize="10" fill="var(--text-secondary)" textAnchor="middle">t=0</text>
      <circle cx="500" cy="160" r="7" fill="var(--text-secondary)" stroke="var(--text-secondary)" strokeWidth="2" />
      <text x="500" y="185" fontSize="10" fill="var(--text-secondary)" textAnchor="middle">t=1</text>
      <text x="570" y="148" fontSize="11" fill="var(--text-secondary)" textAnchor="middle">Y(0) contrafactual</text>
      <line x1="510" y1="78" x2="510" y2="152" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="4,2" />
      <text x="528" y="118" fontSize="11" fill="var(--text-secondary)">ti = Y(1)-Y(0)</text>
      <polygon points="510,78 506,90 514,90" fill="var(--text-secondary)" />
      <polygon points="510,152 506,140 514,140" fill="var(--text-secondary)" />
      <text x="350" y="210" fontSize="11" fill={color} textAnchor="middle" fontStyle="italic">Problema fundamental: apenas um mundo e observado por unidade</text>
    </svg>
  );
}

/* ── SVG: DAG Confounding ── */
function ConfoundingDAGSVG() {
  return (
    <svg viewBox="0 0 500 180" style={{ width: '100%', maxWidth: 500, display: 'block', margin: '0 auto' }}>
      <defs>
        <marker id="arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)" />
        </marker>
        <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
      </defs>
      <ellipse cx="250" cy="40" rx="40" ry="22" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="250" y="45" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-secondary)">Z</text>
      <ellipse cx="100" cy="140" rx="40" ry="22" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="100" y="145" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>D</text>
      <ellipse cx="400" cy="140" rx="40" ry="22" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="400" y="145" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Y</text>
      <line x1="215" y1="55" x2="135" y2="125" stroke="var(--text-secondary)" strokeWidth="2" markerEnd="url(#arr1)" />
      <line x1="285" y1="55" x2="365" y2="125" stroke="var(--text-secondary)" strokeWidth="2" markerEnd="url(#arr1)" />
      <line x1="140" y1="140" x2="360" y2="140" stroke={color} strokeWidth="2.5" markerEnd="url(#arr2)" />
      <text x="125" y="90" fontSize="10" fill="var(--text-secondary)">confunde</text>
      <text x="335" y="90" fontSize="10" fill="var(--text-secondary)">confunde</text>
      <text x="250" y="133" fontSize="10" fill={color} textAnchor="middle">efeito causal</text>
      <text x="250" y="168" fontSize="11" fill="var(--text-secondary)" textAnchor="middle">Z = variavel de confundimento</text>
    </svg>
  );
}

/* ── SVG: Full DAG ── */
function FullDAGSVG() {
  return (
    <svg viewBox="0 0 640 260" style={{ width: '100%', maxWidth: 640, display: 'block', margin: '0 auto' }}>
      <defs>
        <marker id="dag1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)" />
        </marker>
        <marker id="dag2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
        <marker id="dag3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <ellipse cx="320" cy="45" rx="48" ry="22" fill="rgba(2,132,199,0.25)" stroke="#0284c7" strokeWidth="1.5" />
      <text x="320" y="49" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0284c7">Z1</text>
      <text x="320" y="62" textAnchor="middle" fontSize="9" fill="#0284c7">confundidor</text>
      <ellipse cx="120" cy="145" rx="48" ry="22" fill="rgba(74,158,237,0.25)" stroke="#4a9eed" strokeWidth="2" />
      <text x="120" y="149" textAnchor="middle" fontSize="12" fontWeight="700" fill="#4a9eed">X</text>
      <text x="120" y="162" textAnchor="middle" fontSize="9" fill="#4a9eed">tratamento</text>
      <ellipse cx="320" cy="145" rx="48" ry="22" fill="rgba(56,189,248,0.25)" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="320" y="149" textAnchor="middle" fontSize="12" fontWeight="700" fill="#38bdf8">Z2</text>
      <text x="320" y="162" textAnchor="middle" fontSize="9" fill="#38bdf8">mediador</text>
      <ellipse cx="520" cy="145" rx="48" ry="22" fill="rgba(186,230,253,0.25)" stroke="#7dd3fc" strokeWidth="2" />
      <text x="520" y="149" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7dd3fc">Y</text>
      <text x="520" y="162" textAnchor="middle" fontSize="9" fill="#7dd3fc">resultado</text>
      <ellipse cx="320" cy="230" rx="48" ry="22" fill="rgba(125,211,252,0.20)" stroke="#7dd3fc" strokeWidth="1.5" />
      <text x="320" y="234" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7dd3fc">Z3</text>
      <text x="320" y="247" textAnchor="middle" fontSize="9" fill="#7dd3fc">colisor</text>
      <line x1="276" y1="57" x2="162" y2="130" stroke="#0284c7" strokeWidth="1.8" markerEnd="url(#dag1)" />
      <line x1="364" y1="57" x2="478" y2="130" stroke="#0284c7" strokeWidth="1.8" markerEnd="url(#dag1)" />
      <line x1="168" y1="145" x2="272" y2="145" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#dag2)" />
      <line x1="368" y1="145" x2="472" y2="145" stroke="#38bdf8" strokeWidth="1.8" markerEnd="url(#dag1)" />
      <path d="M 165 132 Q 320 90 475 132" fill="none" stroke="#4a9eed" strokeWidth="2" strokeDasharray="5,2" markerEnd="url(#dag2)" />
      <line x1="148" y1="163" x2="276" y2="218" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#dag3)" />
      <line x1="492" y1="163" x2="364" y2="218" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#dag3)" />
      <text x="320" y="15" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">DAG completo com todos os tipos de no</text>
    </svg>
  );
}

/* ── SVG: PSM Balance ── */
function PSMBalanceSVG() {
  const vars = ['Idade', 'Rendimento', 'Educacao', 'Sexo', 'Regiao'];
  const before = [0.62, 0.85, 0.43, 0.31, 0.57];
  const after  = [0.05, 0.08, 0.04, 0.02, 0.06];
  const barH = 22;
  const gap = 10;
  const offsetY = 40;
  const maxW = 280;
  return (
    <svg viewBox="0 0 640 210" style={{ width: '100%', maxWidth: 640, display: 'block', margin: '0 auto' }}>
      <text x="10" y="20" fontSize="13" fontWeight="700" fill="var(--text-primary)">Diferenca Padronizada (Standardized Difference)</text>
      <line x1="140" y1="30" x2="140" y2="195" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="280" y1="25" x2="280" y2="195" stroke="#4a9eed" strokeWidth="1" strokeDasharray="4,2" />
      <text x="280" y="202" textAnchor="middle" fontSize="9" fill="#4a9eed">limiar 0.25</text>
      {vars.map((v, i) => {
        const y = offsetY + i * (barH + gap);
        const bW = before[i] * maxW;
        const aW = after[i] * maxW;
        return (
          <g key={v}>
            <text x="135" y={y + 15} textAnchor="end" fontSize="11" fill="var(--text-primary)">{v}</text>
            <rect x="140" y={y + 2} width={bW} height={barH - 4} fill="#bae6fd" rx="3" opacity="0.8" />
            <rect x="140" y={y + 8} width={aW} height={barH - 14} fill={color} rx="2" />
          </g>
        );
      })}
      <rect x="400" y="80" width="14" height="10" fill="#bae6fd" rx="2" />
      <text x="418" y="90" fontSize="11" fill="var(--text-secondary)">Antes do matching</text>
      <rect x="400" y="98" width="14" height="10" fill={color} rx="2" />
      <text x="418" y="108" fontSize="11" fill="var(--text-secondary)">Apos o matching</text>
      <text x="390" y="190" fontSize="10" fill="var(--text-secondary)">Valores mais baixos = melhor balanco entre grupos</text>
    </svg>
  );
}

/* ── SVG: DiD Chart ── */
function DiDChartSVG() {
  return (
    <svg viewBox="0 0 560 230" style={{ width: '100%', maxWidth: 560, display: 'block', margin: '0 auto' }}>
      <line x1="70" y1="200" x2="520" y2="200" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="70" y1="20" x2="70" y2="200" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="280" y1="20" x2="280" y2="200" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="280" y="215" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Tratamento</text>
      <text x="175" y="215" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Pre</text>
      <text x="390" y="215" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Pos</text>
      {/* Control line */}
      <line x1="175" y1="165" x2="390" y2="140" stroke="var(--text-secondary)" strokeWidth="2" />
      <circle cx="175" cy="165" r="5" fill="var(--text-secondary)" />
      <circle cx="390" cy="140" r="5" fill="var(--text-secondary)" />
      <text x="395" y="138" fontSize="11" fill="var(--text-secondary)">Controlo</text>
      {/* Treated actual */}
      <line x1="175" y1="120" x2="390" y2="75" stroke={color} strokeWidth="2.5" />
      <circle cx="175" cy="120" r="5" fill={color} />
      <circle cx="390" cy="75" r="5" fill={color} />
      <text x="395" y="73" fontSize="11" fill={color}>Tratados</text>
      {/* Counterfactual parallel to control: control drops 25px, so cf = 120-25 = 95 */}
      <line x1="175" y1="120" x2="390" y2="95" stroke={color} strokeWidth="1.5" strokeDasharray="6,3" opacity="0.6" />
      <circle cx="390" cy="95" r="4" fill="none" stroke={color} strokeWidth="1.5" />
      <text x="395" y="110" fontSize="10" fill={color} opacity="0.7">Contrafactual</text>
      {/* DiD bracket */}
      <line x1="408" y1="75" x2="408" y2="95" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="404" y1="75" x2="412" y2="75" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="404" y1="95" x2="412" y2="95" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="422" y="87" fontSize="11" fill="var(--text-secondary)" fontWeight="700">DiD</text>
      <text x="10" y="120" fontSize="10" fill="var(--text-secondary)" transform="rotate(-90,10,120)">Resultado (Y)</text>
    </svg>
  );
}

/* ── SVG: RDD Chart ── */
function RDDChartSVG() {
  const pts = Array.from({ length: 40 }, (_, i) => {
    const x = 60 + 20 + i * 7.5;
    const running = (i - 20) / 20;
    const y = i < 20
      ? 130 + running * 40 + Math.sin(i * 1.3) * 8
      : 80  + running * 40 + Math.sin(i * 1.3) * 8;
    return { x, y };
  });
  const toPath = (arr) => arr.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
  return (
    <svg viewBox="0 0 560 220" style={{ width: '100%', maxWidth: 560, display: 'block', margin: '0 auto' }}>
      <line x1="60" y1="200" x2="520" y2="200" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="60" y1="20" x2="60" y2="200" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="290" y1="20" x2="290" y2="200" stroke={color} strokeWidth="2" strokeDasharray="5,3" />
      <text x="290" y="215" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">Limiar c</text>
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3.5"
          fill={i < 20 ? 'var(--text-secondary)' : color} opacity="0.6" />
      ))}
      <path d={toPath(pts.slice(0, 20))} fill="none" stroke="var(--text-secondary)" strokeWidth="2.5" />
      <path d={toPath(pts.slice(20))} fill="none" stroke={color} strokeWidth="2.5" />
      <line x1="295" y1="88" x2="295" y2="130" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="291" y1="88" x2="299" y2="88" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="291" y1="130" x2="299" y2="130" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="318" y="133" fontSize="11" fill="var(--text-secondary)" fontWeight="700">salto = LATE</text>
      <text x="180" y="215" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Controlo (D=0)</text>
      <text x="400" y="215" textAnchor="middle" fontSize="10" fill={color}>Tratados (D=1)</text>
      <text x="10" y="120" fontSize="10" fill="var(--text-secondary)" transform="rotate(-90,10,120)">Y</text>
    </svg>
  );
}

/* ── Main Component ── */
export default function ST10() {
  return (
    <div style={S.page}>
      <Link to="/statistics" style={S.back}>
        ← Voltar a Statistics
      </Link>

      <span style={S.tag}>MÓDULO 10</span>
      <h1 style={S.h1}>Inferência Causal</h1>

      {/* ── 1. Problema Fundamental ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Problema Fundamental da Causalidade</h2>
        <p style={S.p}>
          O enquadramento dos <strong>resultados potenciais</strong> (Rubin, 1974) define para cada unidade i
          dois mundos paralelos: <InlineMath math="Y(1)_i" /> — o resultado <em>se tratada</em> — e <InlineMath math="Y(0)_i" /> — o resultado <em>se não tratada</em>.
          O efeito causal individual é:
        </p>
        <BlockMath math="\tau_i = Y(1)_i - Y(0)_i" />
        <p style={S.p}>
          O problema fundamental é que <strong>apenas um dos dois resultados potenciais é observado</strong> por unidade —
          o contrafactual permanece invisível. Nunca observamos simultaneamente o mesmo indivíduo tratado e não tratado.
        </p>
        <p style={S.p}>
          As quantidades causais de interesse populacionais são:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Estimando</th>
              <th style={S.th}>Definição</th>
              <th style={S.th}>Leitura</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>ATE</strong></td>
              <td style={S.td}><InlineMath math="E[Y(1) - Y(0)]" /></td>
              <td style={S.td}>Efeito médio do tratamento na população</td>
            </tr>
            <tr>
              <td style={S.td}><strong>ATT</strong></td>
              <td style={S.td}><InlineMath math="E[Y(1) - Y(0) \mid D=1]" /></td>
              <td style={S.td}>Efeito médio nos efetivamente tratados</td>
            </tr>
            <tr>
              <td style={S.td}><strong>LATE</strong></td>
              <td style={S.td}><InlineMath math="E[Y(1) - Y(0) \mid \text{complier}]" /></td>
              <td style={S.td}>Efeito local (IV ou RDD) nos cumpridores</td>
            </tr>
          </tbody>
        </table>
        <div style={S.diagram}>
          <ParallelTimelinesSVG />
        </div>
        <div style={S.note}>
          A inferência causal é o problema de estimar ti (ou médias dele) sem nunca observar ambos Y(1) e Y(0) na
          mesma unidade. Cada método abaixo tenta resolver este problema de forma diferente.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 2. Correlação vs. Causalidade ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Correlação vs. Causalidade</h2>
        <p style={S.p}>
          A diferença de médias observada entre tratados e controlos é contaminada por <strong>viés de seleção</strong>:
          quem recebe o tratamento não é aleatório, e pode diferir sistematicamente de quem não o recebe.
        </p>
        
          <BlockMath math="E[Y|D=1] - E[Y|D=0] = \text{ATE} + E[Y(0)|D=1] - E[Y(0)|D=0]" />
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            O segundo termo é o viés de seleção. É zero apenas se a seleção para o tratamento for aleatória.
          </p>
        

        <h3 style={S.h3}>Exemplos Clássicos</h3>
        <p style={S.p}>
          <strong>Paradoxo do hospital:</strong> doentes hospitalizados têm piores resultados de saúde do que pessoas não
          hospitalizadas. Concluir que hospitais causam doença seria errado — quem vai ao hospital já está mais doente
          (viés de seleção por gravidade).
        </p>
        <p style={S.p}>
          <strong>Gelado e afogamentos:</strong> consumo de gelados e afogamentos são positivamente correlacionados.
          A causa comum é o verão (calor), não uma relação causal entre gelados e afogamentos.
        </p>
        <div style={S.diagram}>
          <ConfoundingDAGSVG />
        </div>
        <div style={S.note}>
          Correlação mede associação; causalidade requer intervenção ou desenho que quebre a ligação entre confundidores
          e o tratamento.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 3. DAGs ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Grafos Acíclicos Dirigidos (DAGs)</h2>
        <p style={S.p}>
          Os DAGs (Pearl, 2000) representam relações causais como nós (variáveis) e arestas dirigidas (efeitos causais).
          Permitem identificar formalmente o que controlar e o que não controlar.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Conceito</th>
              <th style={S.th}>Descrição</th>
              <th style={S.th}>Implicação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Confundidor</strong></td>
              <td style={S.td}>Causa comum de D e Y</td>
              <td style={S.td}>Controlar fecha o caminho de viés</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Mediador</strong></td>
              <td style={S.td}>D afeta Y através de M</td>
              <td style={S.td}>Controlar bloqueia efeito indireto</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Colisor</strong></td>
              <td style={S.td}>D e Y causam C</td>
              <td style={S.td}>Controlar ABRE caminho espúrio</td>
            </tr>
            <tr>
              <td style={S.td}><strong>d-separação</strong></td>
              <td style={S.td}>Independência condicional no DAG</td>
              <td style={S.td}>Base formal para identificação</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Critério Backdoor</h3>
        <p style={S.p}>
          Um conjunto S satisfaz o critério backdoor em relação ao par (D, Y) se: (1) nenhum nó de S é descendente
          de D; e (2) S bloqueia todos os caminhos backdoor entre D e Y. Condicionando em S obtemos o efeito causal de D em Y.
        </p>
        <div style={S.diagram}>
          <FullDAGSVG />
        </div>
        <div style={S.note}>
          Atenção ao colisor Z3: condicionar nele (mesmo que não seja confundidor) cria uma associação espúria
          entre X e Y. O erro de controlar colliders é comum em análises observacionais.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 4. RCTs ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Ensaios Aleatórios Controlados (RCTs)</h2>
        <p style={S.p}>
          A aleatorização garante que D é independente de todos os confundidores observados e não observados:
          <strong> (Y(0), Y(1)) independente de D</strong>. Isto elimina o viés de seleção e torna a diferença
          de médias um estimador não enviesado do ATE.
        </p>
        <BlockMath math="\text{ATE} = E[Y|D=1] - E[Y|D=0] \quad (\text{sob aleatorização})" />
        <h3 style={S.h3}>Validade Interna e Externa</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Aspeto</th>
              <th style={S.th}>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Balanço</strong></td>
              <td style={S.td}>Covariáveis distribuídas igualmente entre grupos em expectativa</td>
            </tr>
            <tr>
              <td style={S.td}><strong>SUTVA</strong></td>
              <td style={S.td}>Stable Unit Treatment Value Assumption: sem interferência entre unidades</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Atrito</strong></td>
              <td style={S.td}>Dropout seletivo pode reintroduzir viés mesmo após aleatorização</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Ética</strong></td>
              <td style={S.td}>Nem sempre é eticamente possível aleatorizar (ex: tabagismo)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Custo</strong></td>
              <td style={S.td}>RCTs são caros, demorados e difíceis de escalar</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Validade externa</strong></td>
              <td style={S.td}>Resultados podem não generalizar além da amostra do ensaio</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          RCTs são o gold standard para validade interna, mas métodos quasi-experimentais são essenciais quando
          a aleatorização não é possível.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 5. Matching e PSM ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Matching e Propensity Score</h2>
        <p style={S.p}>
          Quando a aleatorização não é possível, podemos condicionar em covariáveis observadas X para obter independência
          condicional. A hipótese de <strong>inconfundibilidade condicional (CIA)</strong>:
        </p>
        <BlockMath math="(Y(0), Y(1)) \perp D \mid X" />
        <p style={S.p}>
          O <strong>propensity score</strong> p(X) = P(D=1|X) resume toda a informação de confundimento em
          uma única dimensão, permitindo matching e ponderação eficientes mesmo com muitas covariáveis.
        </p>
        <h3 style={S.h3}>Métodos Principais</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Ideia</th>
              <th style={S.th}>Estimando</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>PSM</strong></td>
              <td style={S.td}>Emparelha cada tratado com controlo(s) de p(X) semelhante</td>
              <td style={S.td}>ATT</td>
            </tr>
            <tr>
              <td style={S.td}><strong>IPW</strong></td>
              <td style={S.td}>Pondera cada observação por 1/p(X) (tratados) ou 1/(1-p(X)) (controlos)</td>
              <td style={S.td}>ATE</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Duplamente robusto</strong></td>
              <td style={S.td}>Combina modelo de resultado com IPW; consistente se um deles for correto</td>
              <td style={S.td}>ATE / ATT</td>
            </tr>
          </tbody>
        </table>
        <div style={S.diagram}>
          <PSMBalanceSVG />
        </div>
        <div style={S.note}>
          A validade do matching depende inteiramente da CIA. Se existirem confundidores não observados,
          o matching não os elimina — ao contrário da aleatorização.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 6. IV / 2SLS ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Variáveis Instrumentais (IV / 2SLS)</h2>
        <p style={S.p}>
          As variáveis instrumentais (IV) permitem estimar efeitos causais quando existem confundidores não observados.
          Um instrumento Z válido deve satisfazer três condições:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Condição</th>
              <th style={S.th}>Requisito</th>
              <th style={S.th}>Testável?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Relevância</strong></td>
              <td style={S.td}>Z correlaciona com D (F-stat acima de 10 como regra)</td>
              <td style={S.td}>Sim</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Exclusão</strong></td>
              <td style={S.td}>Z afeta Y apenas através de D</td>
              <td style={S.td}>Nao (assumido)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Exogeneidade</strong></td>
              <td style={S.td}>Z independente dos confundidores de D e Y</td>
              <td style={S.td}>Parcialmente</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>2SLS — Dois Estágios dos Mínimos Quadrados</h3>
        <div style={S.code}>
          {`# 1.º Estágio: regredir D em Z (e covariáveis X)
D_hat = a0 + a1*Z + a2*X + e1

# 2.º Estágio: regredir Y em D_hat (e X)
Y = b0 + b1*D_hat + b2*X + e2
# b1 = estimativa IV do efeito causal`}
        </div>

        <h3 style={S.h3}>LATE — Efeito Local Médio do Tratamento</h3>
        <p style={S.p}>
          IV estima o LATE: o efeito causal nos <strong>cumpridores</strong> (unidades cuja decisão de tratamento
          é afetada pelo instrumento). Não identifica o efeito em:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Comportamento face ao instrumento</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Cumpridor</td><td style={S.td}>D muda com Z — alvo do LATE</td></tr>
            <tr><td style={S.td}>Sempre-tratado</td><td style={S.td}>D=1 independentemente de Z</td></tr>
            <tr><td style={S.td}>Nunca-tratado</td><td style={S.td}>D=0 independentemente de Z</td></tr>
            <tr><td style={S.td}>Defier</td><td style={S.td}>Faz o oposto de Z (assumido inexistente)</td></tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Exemplo: Distância à Faculdade como IV para Educação</h3>
        <p style={S.p}>
          Card (1995) usa a distância ao ensino superior mais próximo como instrumento para os anos de
          escolaridade. A proximidade aumenta a escolaridade (relevância), e é improvável que afete os
          salários por outro mecanismo além da educação (exclusão).
        </p>
        <div style={S.note}>
          Instrumentos fracos (F-stat abaixo de 10) produzem estimativas IV com grande viés em amostras finitas.
          Usar sempre o F-stat do 1.º estágio como diagnóstico obrigatório.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 7. DiD ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Diferenças-em-Diferenças (DiD)</h2>
        <p style={S.p}>
          DiD compara a evolução temporal do grupo tratado com a do grupo de controlo, eliminando
          diferenças fixas entre grupos e choques temporais comuns. O estimador é:
        </p>
        <BlockMath math="\text{DiD} = (\bar{Y}_{1,\text{post}} - \bar{Y}_{1,\text{pre}}) - (\bar{Y}_{0,\text{post}} - \bar{Y}_{0,\text{pre}})" />

        <h3 style={S.h3}>Hipótese das Tendências Paralelas</h3>
        <p style={S.p}>
          A identificação requer que, na ausência do tratamento, os grupos tratado e controlo teriam
          evoluído em paralelo. Esta hipótese é <strong>não testável diretamente no período pós-tratamento</strong>,
          mas pode ser verificada empiricamente no período pré-tratamento.
        </p>
        <div style={S.diagram}>
          <DiDChartSVG />
        </div>

        <h3 style={S.h3}>Formulação em Regressão (Two-Way Fixed Effects)</h3>
        <BlockMath math="Y_{it} = \alpha_i + \lambda_t + \beta \cdot (D_i \times \text{Post}_t) + \varepsilon_{it}" />
        <p style={S.p}>
          onde <InlineMath math="\alpha_i" /> são os efeitos fixos de unidade (controlam diferenças permanentes),{' '}
          <InlineMath math="\lambda_t" /> são os efeitos fixos de tempo (controlam choques comuns), e{' '}
          <InlineMath math="\beta" /> é o estimador DiD.
        </p>

        <h3 style={S.h3}>DiD Escalonado (Staggered DiD)</h3>
        <p style={S.p}>
          Quando diferentes unidades recebem tratamento em momentos diferentes, o estimador TWFE clássico
          pode ser enviesado (Callaway e Sant'Anna, 2021; Sun e Abraham, 2021). Usar estimadores
          robustos à heterogeneidade dos efeitos ao longo do tempo.
        </p>
        <div style={S.note}>
          Testar sempre tendências paralelas pré-tratamento com event-study plots. Rejeitar paralelismo
          invalida a interpretação causal do DiD.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 8. RDD ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Regression Discontinuity Design (RDD)</h2>
        <p style={S.p}>
          RDD explora descontinuidades no tratamento determinadas por uma <strong>variável de running</strong> X
          relativamente a um limiar c: D = 1 se X for maior ou igual a c. Perto do limiar, a atribuição do tratamento é
          quase-aleatória, permitindo identificar efeitos causais locais.
        </p>
        <BlockMath math="\text{LATE} = \lim_{x \to c^+} E[Y|X=x] - \lim_{x \to c^-} E[Y|X=x]" />
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Variante</th>
              <th style={S.th}>Mecanismo</th>
              <th style={S.th}>Estimador</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Sharp RDD</strong></td>
              <td style={S.td}>Tratamento determinístico: D salta de 0 para 1 no limiar</td>
              <td style={S.td}>ATE local</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Fuzzy RDD</strong></td>
              <td style={S.td}>Probabilidade de tratamento aumenta descontinuamente no limiar</td>
              <td style={S.td}>LATE (via IV)</td>
            </tr>
          </tbody>
        </table>
        <div style={S.diagram}>
          <RDDChartSVG />
        </div>

        <h3 style={S.h3}>Diagnósticos e Validações</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Teste</th>
              <th style={S.th}>O que verifica</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>McCrary density test</td><td style={S.td}>Sem manipulação da variavel de running no limiar</td></tr>
            <tr><td style={S.td}>Placebo thresholds</td><td style={S.td}>Sem saltos em limiares artificiais</td></tr>
            <tr><td style={S.td}>Covariables balance</td><td style={S.td}>Sem saltos nas covariáveis pré-tratamento</td></tr>
            <tr><td style={S.td}>Bandwidth sensitivity</td><td style={S.td}>Resultado robusto a diferentes bandwidths</td></tr>
          </tbody>
        </table>
        <div style={S.note}>
          RDD tem alta validade interna perto do limiar, mas baixa validade externa: o efeito estimado
          refere-se apenas a unidades com X próximo de c.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 9. Synthetic Control ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Controlo Sintético</h2>
        <p style={S.p}>
          O método do controlo sintético (Abadie e Gardeazabal, 2003; Abadie et al., 2010) constrói
          uma unidade contrafactual sintética como combinação convexa de unidades de controlo, ponderada
          de forma a replicar ao máximo a trajetória pré-tratamento da unidade tratada.
        </p>
        <BlockMath math="\hat{Y}_1(0)_t = \sum_j w_j Y_{jt}, \quad w_j \geq 0, \quad \sum_j w_j = 1" />
        <p style={S.p}>
          O efeito estimado no período pós-tratamento é <InlineMath math="\hat{\alpha}_t = Y_{1t} - \hat{Y}_1(0)_t" /> — o desvio entre o tratado real e o seu sintético.
        </p>

        <h3 style={S.h3}>Exemplo: Estudo do Tabaco na Califórnia</h3>
        <p style={S.p}>
          Abadie et al. (2010) estudaram o impacto da Proposição 99 (1988) — aumento de imposto sobre tabaco
          na Califórnia — no consumo per capita de cigarros. O controlo sintético foi construído combinando
          38 outros estados americanos.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Período</th>
              <th style={S.th}>Califórnia real</th>
              <th style={S.th}>Controlo sintético</th>
              <th style={S.th}>Efeito estimado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>1970-1988 (pré)</td>
              <td style={S.td}>Muito próximos</td>
              <td style={S.td}>Muito próximos</td>
              <td style={S.td}>aprox. 0</td>
            </tr>
            <tr>
              <td style={S.td}>1989-2000 (pós)</td>
              <td style={S.td}>Diminui rapidamente</td>
              <td style={S.td}>Diminui mais devagar</td>
              <td style={S.td}>-25 cigarros/per capita</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Inferência por permutação (placebo tests): aplicar o mesmo método a cada estado de controlo e
          comparar o gap da Califórnia com a distribuição dos placebos. Um gap excecionalmente grande indica
          evidência de efeito real.
        </div>
      </section>
</div>
  );
}
