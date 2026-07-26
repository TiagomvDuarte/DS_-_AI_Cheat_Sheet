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
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)', verticalAlign: 'top' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  mathBlock: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1.25rem', margin: '1.5rem 0', textAlign: 'center', overflowX: 'auto' },
  svgWrap: { margin: '1.5rem 0', overflowX: 'auto' },
  pill: { display: 'inline-block', padding: '0.2rem 0.6rem', borderRadius: 12, fontSize: '0.78rem', fontWeight: 600, marginRight: '0.4rem' },
};

/* ─── SVG: Hexagon — 6 Pillars of Responsible AI ─────────────────────── */
function HexagonRAI() {
  const cx = 300, cy = 220, R = 150, r = 55;
  const pillars = [
    { label: 'Fairness', angle: -90, fill: '#4a9eed' },
    { label: 'Reliability', angle: -30, fill: '#4a9eed' },
    { label: 'Privacy', angle: 30, fill: '#4a9eed' },
    { label: 'Inclusiveness', angle: 90, fill: '#4a9eed' },
    { label: 'Transparency', angle: 150, fill: '#4a9eed' },
    { label: 'Accountability', angle: 210, fill: '#4a9eed' },
  ];
  const toRad = d => (d * Math.PI) / 180;
  const vx = (a) => cx + R * Math.cos(toRad(a));
  const vy = (a) => cy + R * Math.sin(toRad(a));
  const lx = (a) => cx + (R + 28) * Math.cos(toRad(a));
  const ly = (a) => cy + (R + 28) * Math.sin(toRad(a));

  return (
    <div style={S.svgWrap}>
      <svg viewBox="0 0 600 440" width="100%" style={{ maxWidth: 600, display: 'block', margin: '0 auto' }}>
        {/* hexagon edges */}
        {pillars.map((p, i) => {
          const next = pillars[(i + 1) % 6];
          return (
            <line key={`edge-${i}`}
              x1={vx(p.angle)} y1={vy(p.angle)}
              x2={vx(next.angle)} y2={vy(next.angle)}
              stroke="var(--card-border)" strokeWidth="1.5" />
          );
        })}
        {/* spokes */}
        {pillars.map((p, i) => (
          <line key={`spoke-${i}`}
            x1={cx} y1={cy}
            x2={vx(p.angle)} y2={vy(p.angle)}
            stroke={p.fill} strokeWidth="1.5" strokeDasharray="4 3" />
        ))}
        {/* center circle */}
        <circle cx={cx} cy={cy} r={r} fill="var(--bg-secondary)" stroke={color} strokeWidth="2" />
        <text x={cx} y={cy - 8} textAnchor="middle" fontWeight="800" fontSize="15" fill={color}>RAI</text>
        <text x={cx} y={cy + 10} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Responsible AI</text>
        {/* vertex circles + labels */}
        {pillars.map((p, i) => (
          <g key={`node-${i}`}>
            <circle cx={vx(p.angle)} cy={vy(p.angle)} r={14} fill={p.fill} />
            <text
              x={lx(p.angle)}
              y={ly(p.angle)}
              textAnchor={p.angle > 90 || p.angle < -90 ? 'end' : 'start'}
              dominantBaseline="middle"
              fontSize="12"
              fontWeight="600"
              fill={p.fill}
            >{p.label}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ─── SVG: Bias Pipeline ─────────────────────────────────────────────── */
function BiasPipeline() {
  const bw = 90, gap = 35, pad = 35;
  const stages = [
    { label: 'Dados Brutos', x: pad },
    { label: 'Feature Eng.', x: pad + (bw + gap) },
    { label: 'Treino', x: pad + 2 * (bw + gap) },
    { label: 'Deployment', x: pad + 3 * (bw + gap) },
    { label: 'Feedback Loop', x: pad + 4 * (bw + gap) },
  ].map(s => ({ ...s, w: bw }));
  const biasLabels = stages.map((s, i) => ({
    x: s.x + bw / 2,
    y: 95,
    text: ['Histórico ↓', 'Selecção ↓', 'Objectivo ↓', 'Contexto ↓', 'Amplificação ↓'][i],
  }));

  return (
    <div style={S.svgWrap}>
      <svg viewBox="0 0 660 160" width="100%" style={{ maxWidth: 660, display: 'block', margin: '0 auto' }}>
        {/* arrows between stages */}
        {stages.slice(0, -1).map((s, i) => (
          <line key={`arr-${i}`}
            x1={s.x + s.w} y1={55}
            x2={stages[i + 1].x + 2} y2={55}
            stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)" />
        ))}
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)" />
          </marker>
          <marker id="arrRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
          </marker>
        </defs>
        {/* stage boxes */}
        {stages.map((s, i) => (
          <g key={`stage-${i}`}>
            <rect x={s.x} y={38} width={s.w} height={34} rx={6}
              fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
            <text x={s.x + s.w / 2} y={58} textAnchor="middle" fontSize="10" fontWeight="600" fill={color}>
              {s.label}
            </text>
          </g>
        ))}
        {/* bias injection arrows */}
        {biasLabels.map((b, i) => (
          <g key={`bias-${i}`}>
            <line x1={b.x} y1={38} x2={b.x} y2={20}
              stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrRed)" />
            <text x={b.x} y={14} textAnchor="middle" fontSize="9" fill="#4a9eed" fontWeight="600">{b.text}</text>
          </g>
        ))}
        <text x={330} y={150} textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="600">
          ▲ Pontos de injecção de bias
        </text>
      </svg>
    </div>
  );
}

/* ─── SVG: Confusion Matrix Pair ─────────────────────────────────────── */
function ConfusionMatrixPair() {
  const renderMatrix = (ox, oy, label, tp, fp, fn, tn, fprHigh) => {
    const cells = [
      { r: 0, c: 0, val: `TP=${tp}`, fill: 'rgba(74,158,237,0.18)' },
      { r: 0, c: 1, val: `FP=${fp}`, fill: fprHigh ? 'rgba(7,89,133,0.50)' : 'rgba(7,89,133,0.18)' },
      { r: 1, c: 0, val: `FN=${fn}`, fill: 'rgba(7,89,133,0.18)' },
      { r: 1, c: 1, val: `TN=${tn}`, fill: 'rgba(74,158,237,0.18)' },
    ];
    const w = 72, h = 44;
    return (
      <g key={label}>
        <text x={ox + w} y={oy - 10} textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>{label}</text>
        {/* axis labels */}
        <text x={ox + w} y={oy + 5} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Pred +    Pred −</text>
        {cells.map((cell) => (
          <g key={`${cell.r}-${cell.c}`}>
            <rect x={ox + cell.c * w} y={oy + 14 + cell.r * h} width={w} height={h}
              fill={cell.fill} stroke="var(--card-border)" strokeWidth="1" />
            <text x={ox + cell.c * w + w / 2} y={oy + 14 + cell.r * h + h / 2 + 4}
              textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text-primary)">{cell.val}</text>
          </g>
        ))}
        <text x={ox - 4} y={oy + 14 + 22} textAnchor="end" fontSize="9" fill="var(--text-secondary)">Real +</text>
        <text x={ox - 4} y={oy + 14 + 22 + 44} textAnchor="end" fontSize="9" fill="var(--text-secondary)">Real −</text>
        {fprHigh && (
          <text x={ox + w * 2} y={oy + 14 + h + 30} textAnchor="end" fontSize="9" fill="var(--text-secondary)">
          </text>
        )}
      </g>
    );
  };

  return (
    <div style={S.svgWrap}>
      <svg viewBox="0 0 480 160" width="100%" style={{ maxWidth: 480, display: 'block', margin: '0 auto' }}>
        {renderMatrix(20, 30, 'Grupo A', 80, 5, 10, 105, false)}
        {renderMatrix(260, 30, 'Grupo B', 30, 35, 8, 127, true)}
        <text x={240} y={155} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">
          Equalized Odds exige FPR e FNR iguais entre grupos
        </text>
      </svg>
    </div>
  );
}

/* ─── SVG: Regulation Timeline ───────────────────────────────────────── */
function RegTimeline() {
  const events = [
    { year: '2018', label: 'GDPR\nem vigor', color: '#4a9eed' },
    { year: '2021', label: 'Proposta\nEU AI Act', color: '#4a9eed' },
    { year: '2024', label: 'EU AI Act\naprovoado', color: color },
    { year: '2025', label: 'Proibições\nativas', color: '#4a9eed' },
    { year: '2026', label: 'Alto risco\nenforcement', color: '#4a9eed' },
  ];
  const xs = [60, 170, 290, 410, 530];

  return (
    <div style={S.svgWrap}>
      <svg viewBox="0 0 620 120" width="100%" style={{ maxWidth: 620, display: 'block', margin: '0 auto' }}>
        <line x1={40} y1={55} x2={580} y2={55} stroke="var(--card-border)" strokeWidth="2" />
        {events.map((e, i) => (
          <g key={i}>
            <circle cx={xs[i]} cy={55} r={10} fill={e.color} />
            <text x={xs[i]} y={30} textAnchor="middle" fontSize="11" fontWeight="700" fill={e.color}>{e.year}</text>
            {e.label.split('\n').map((line, j) => (
              <text key={j} x={xs[i]} y={78 + j * 14} textAnchor="middle" fontSize="9.5" fill="var(--text-secondary)">{line}</text>
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ─── SVG: EU AI Act Risk Pyramid ────────────────────────────────────── */
function RiskPyramid() {
  const layers = [
    { label: 'Risco Mínimo',   sub1: 'Filtros spam,',           sub2: 'recomendação de conteúdo',  fill: '#38bdf8', y: 200, w: 500, h: 62 },
    { label: 'Risco Limitado', sub1: 'Chatbots —',             sub2: 'obrigação de transparência', fill: '#4a9eed', y: 142, w: 380, h: 52 },
    { label: 'Alto Risco',     sub1: 'Crédito, recrutamento,', sub2: 'saúde, justiça criminal',    fill: '#0369a1', y: 84,  w: 260, h: 52 },
    { label: 'Proibido',       sub1: 'Pontuação social,',      sub2: 'vigilância biométrica',      fill: '#075985', y: 26,  w: 180, h: 52 },
  ];
  const cx = 290;

  return (
    <div style={S.svgWrap}>
      <svg viewBox="0 0 580 278" width="100%" style={{ maxWidth: 580, display: 'block', margin: '0 auto' }}>
        {layers.map((l, i) => (
          <g key={i}>
            <rect x={cx - l.w / 2} y={l.y} width={l.w} height={l.h} rx={3}
              fill={l.fill} opacity={0.9} />
            <text x={cx} y={l.y + l.h / 2 - 10} textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">{l.label}</text>
            <text x={cx} y={l.y + l.h / 2 + 4}  textAnchor="middle" fontSize="9" fill="#fff">{l.sub1}</text>
            <text x={cx} y={l.y + l.h / 2 + 16} textAnchor="middle" fontSize="9" fill="#fff">{l.sub2}</text>
          </g>
        ))}
        <text x={cx} y={270} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">← Base: mais sistemas · Topo: mais restrições →</text>
      </svg>
    </div>
  );
}

/* ─── SVG: Production Monitoring Loop ───────────────────────────────── */
function ProductionLoop() {
  const nodes = [
    { label: 'Modelo', x: 290, y: 50 },
    { label: 'Predições', x: 470, y: 120 },
    { label: 'Camada XAI', x: 470, y: 210 },
    { label: 'Explicações', x: 290, y: 290 },
    { label: 'Audit Log', x: 110, y: 210 },
    { label: 'Revisão\nHumana', x: 110, y: 120 },
  ];
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
  ];

  return (
    <div style={S.svgWrap}>
      <svg viewBox="0 0 580 340" width="100%" style={{ maxWidth: 580, display: 'block', margin: '0 auto' }}>
        <defs>
          <marker id="arrLoop" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={color} />
          </marker>
        </defs>
        {edges.map(([a, b], i) => (
          <line key={i}
            x1={nodes[a].x} y1={nodes[a].y}
            x2={nodes[b].x} y2={nodes[b].y}
            stroke={color} strokeWidth="1.8" strokeDasharray="5 3"
            markerEnd="url(#arrLoop)" />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <rect x={n.x - 48} y={n.y - 18} width={96} height={i === 5 ? 36 : 28} rx={6}
              fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5" />
            {n.label.split('\n').map((line, j) => (
              <text key={j} x={n.x} y={n.y - 4 + j * 14}
                textAnchor="middle" fontSize="11" fontWeight="600" fill={color}>{line}</text>
            ))}
          </g>
        ))}
        <text x={290} y={330} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">
          Loop contínuo de monitorização em produção
        </text>
      </svg>
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────────────────── */
export default function XAI6() {
  return (
    <div style={S.page}>
      <Link to="/xai" style={S.back}><ArrowLeft size={16} /> Voltar a Explainable AI</Link>

      <div style={S.tag}>MÓDULO 06</div>
      <h1 style={S.h1}>Responsible AI — Fairness, Bias e Regulação</h1>

      {/* ── SECTION 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. O que é Responsible AI?</h2>
        <p style={S.p}>
          <strong>Responsible AI (RAI)</strong> é um conjunto de princípios, práticas e ferramentas destinados
          a garantir que os sistemas de inteligência artificial são desenvolvidos e operados de forma justa,
          segura, transparente e responsável. A Microsoft e a Google foram das primeiras grandes organizações
          a formalizar frameworks de RAI com seis pilares canónicos:
        </p>
        <HexagonRAI />
        <div style={S.highlight}>
          <strong>Os Seis Pilares do Responsible AI:</strong>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.4rem', lineHeight: 2.1 }}>
            <li><strong style={{ color: '#4a9eed' }}>Fairness:</strong> Sistemas de IA não devem discriminar com base em características protegidas (raça, género, idade, religião, deficiência). As decisões devem ser equitativas entre grupos demográficos.</li>
            <li><strong style={{ color: '#4a9eed' }}>Reliability &amp; Safety:</strong> Os modelos devem funcionar de forma consistente e segura, mesmo em condições inesperadas ou adversariais, com testes robustos antes do deployment.</li>
            <li><strong style={{ color: '#4a9eed' }}>Privacy &amp; Security:</strong> Os dados pessoais utilizados no treino e inferência devem ser protegidos. Os modelos não devem memorizar ou revelar informação sensível.</li>
            <li><strong style={{ color: '#4a9eed' }}>Inclusiveness:</strong> Os sistemas de IA devem servir todas as pessoas, incluindo grupos marginalizados, e ser acessíveis independentemente de capacidades físicas ou cognitivas.</li>
            <li><strong style={{ color: '#4a9eed' }}>Transparency:</strong> As decisões dos sistemas de IA devem ser explicáveis aos utilizadores afectados, aos reguladores e ao público — é aqui que o XAI tem papel central.</li>
            <li><strong style={{ color: '#4a9eed' }}>Accountability:</strong> Deve existir responsabilização clara por decisões automatizadas. As organizações devem poder auditar, contestar e corrigir sistemas que causem dano.</li>
          </ul>
        </div>
        <p style={S.p}>
          Casos reais que motivaram estes princípios incluem o sistema <strong>COMPAS</strong> de avaliação de risco de
          reincidência criminal, que apresentava FPR (falsos positivos de risco alto) duas vezes superior para réus negros
          face a réus brancos (Angwin et al., ProPublica, 2016); algoritmos de recrutamento como o da Amazon que
          penalizavam CVs com a palavra "mulheres" por serem treinados em dados históricos maioritariamente masculinos;
          e disparidades em sistemas de diagnóstico médico por imagem que funcionam significativamente pior em pele escura
          por sub-representação nos datasets de treino.
        </p>
        <div style={S.note}>
          O framework de RAI da Microsoft está descrito publicamente em <em>microsoft.com/en-us/ai/responsible-ai</em>.
          O Google publicou os seus AI Principles em 2018 após a controvérsia interna do Projecto Maven. Ambos incluem
          processos de revisão ética obrigatórios para produtos de IA sensíveis.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Fontes de Bias em Machine Learning</h2>
        <p style={S.p}>
          O bias num sistema de ML não tem uma única origem — pode entrar em múltiplos pontos do pipeline,
          acumulando-se e amplificando-se ao longo das etapas. Existem três categorias fundamentais:
        </p>
        <div style={S.highlight}>
          <ul style={{ margin: 0, paddingLeft: '1.4rem', lineHeight: 2.1 }}>
            <li>
              <strong>Bias pré-existente (histórico):</strong> Os dados de treino reflectem desigualdades sociais
              históricas. Se crédito foi historicamente negado a minorias, um modelo treinado nesses dados aprende
              a replicar essa discriminação. O modelo é "correcto" estatisticamente mas moralmente problemático.
            </li>
            <li>
              <strong>Bias técnico (model choices):</strong> Escolhas de algoritmo, função de perda e métricas de
              avaliação podem introduzir ou amplificar bias. Uma função de perda que minimiza erro médio global
              pode sacrificar equidade em grupos sub-representados para ganhar accuracy nos grupos maioritários.
            </li>
            <li>
              <strong>Bias emergente (deployment context):</strong> Mesmo um modelo inicialmente justo pode tornar-se
              injusto através de feedback loops — as predições do modelo influenciam os dados futuros que o alimentam.
              Por exemplo, policiamento preditivo leva a mais detenções em áreas já vigiadas, reforçando o bias geográfico.
            </li>
          </ul>
        </div>
        <p style={S.p}>
          O diagrama seguinte mostra os pontos de injecção de bias ao longo de um pipeline típico de ML:
        </p>
        <BiasPipeline />
        <p style={S.p}>
          Um exemplo clássico de bias técnico são os <strong>word embeddings</strong>. No Word2Vec e GloVe treinados em
          corpora jornalísticos, a analogia "homem : médico :: mulher : ?" retorna frequentemente "enfermeira". A distância
          coseno entre "médico" e "homem" é sistematicamente menor do que entre "médico" e "mulher". Este bias, latente
          nas representações vectoriais, propaga-se para qualquer tarefa downstream que use esses embeddings — classificação
          de CVs, análise de sentimento, sistemas de recomendação.
        </p>
        <div style={S.note}>
          O paper "Man is to Computer Programmer as Woman is to Homemaker? Debiasing Word Embeddings" (Bolukbasi et al., 2016)
          foi o primeiro a quantificar e propor mitigação de bias em embeddings. A técnica de <em>hard-debiasing</em> projecta
          os vectores para eliminar componentes ao longo da direcção de género.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Métricas de Fairness e o Teorema da Impossibilidade</h2>
        <p style={S.p}>
          Existem dezenas de definições matemáticas de fairness. O problema fundamental, demonstrado por
          Chouldechova (2017) e Kleinberg et al. (2016), é que as três métricas mais intuitivas são
          <strong> matematicamente incompatíveis</strong> quando as base rates diferem entre grupos — e na
          realidade social, as base rates quase sempre diferem.
        </p>

        
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700 }}>Demographic Parity (Paridade Demográfica)</p>
          <p style={{ margin: '0 0 0.5rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            A probabilidade de receber uma predição positiva é igual independentemente do grupo protegido <InlineMath math={"A"} />:
          </p>
          <div style={S.mathBlock}>
            <BlockMath math={"P(\\hat{Y}=1|A=0) = P(\\hat{Y}=1|A=1)"} />
          </div>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <strong>Limitação:</strong> Ignora diferenças legítimas nas taxas base. Forçar paridade pode
            implicar aprovar candidatos menos qualificados de um grupo e rejeitar candidatos qualificados de outro.
          </p>
        

        
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700 }}>Equalized Odds (Odds Equalizadas)</p>
          <p style={{ margin: '0 0 0.5rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            TPR e FPR são iguais entre grupos — o modelo erra da mesma forma em ambos os grupos, para cada
            valor do label verdadeiro <InlineMath math={"y"} />:
          </p>
          <div style={S.mathBlock}>
            <BlockMath math={"P(\\hat{Y}=1|A=a, Y=y) = P(\\hat{Y}=1|A=a', Y=y),\\; \\forall\\, a,a',y"} />
          </div>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <strong>Limitação:</strong> Quando as base rates diferem, é impossível satisfazer equalized odds
            e ao mesmo tempo ter um modelo calibrado.
          </p>
        

        
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700 }}>Calibration (Calibração)</p>
          <p style={{ margin: '0 0 0.5rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            Um score de probabilidade <InlineMath math={"\\hat{p}"} /> tem o mesmo significado em ambos os grupos:
            para qualquer valor de score, a proporção real de positivos é igual entre grupos.
          </p>
          <div style={S.mathBlock}>
            <BlockMath math={"P(Y=1|\\hat{p}=p, A=a) = p,\\; \\forall\\, a"} />
          </div>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <strong>Importância:</strong> A calibração é essencial quando o score é usado para tomada de
            decisão com threshold variável — um score de 0.7 deve significar 70% de probabilidade real em
            todos os grupos.
          </p>
        

        <p style={S.p}>
          As matrizes de confusão seguintes ilustram como equalized odds pode falhar: o Grupo B tem FPR
          muito superior ao Grupo A, indicando que o modelo rotula erroneamente como positivos muito mais
          membros do Grupo B sem essa condição real:
        </p>
        <ConfusionMatrixPair />

        <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' }}>
          <strong style={{ color: '#4a9eed' }}>Teorema da Impossibilidade (Chouldechova, 2017):</strong>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            Se as prevalências (base rates) de Y=1 diferem entre grupos A=0 e A=1, então é matematicamente
            impossível que um classificador satisfaça simultaneamente demographic parity, equalized odds
            e calibration perfeita. Qualquer sistema deve escolher qual das garantias priorizar — e essa
            escolha tem implicações éticas e legais que devem ser explicitadas.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Técnicas de Mitigação de Bias</h2>
        <p style={S.p}>
          As técnicas de mitigação de bias organizam-se em três fases do pipeline de ML, cada uma com
          vantagens e limitações distintas:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Fase</th>
              <th style={S.th}>Técnica</th>
              <th style={S.th}>Biblioteca Python</th>
              <th style={S.th}>Vantagem</th>
              <th style={S.th}>Limitação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Pré-processamento</strong></td>
              <td style={S.td}>Reweighting — atribuir pesos maiores a grupos sub-representados</td>
              <td style={S.td}><code>AIF360</code></td>
              <td style={S.td}>Agnóstico ao modelo; funciona com qualquer algoritmo</td>
              <td style={S.td}>Pode não eliminar bias se o problema estiver no modelo</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Pré-processamento</strong></td>
              <td style={S.td}>Resampling — oversampling de grupos minoritários (SMOTE adaptado)</td>
              <td style={S.td}><code>imbalanced-learn</code></td>
              <td style={S.td}>Simples de implementar; não altera o algoritmo</td>
              <td style={S.td}>Pode introduzir overfitting em grupos sintéticos</td>
            </tr>
            <tr>
              <td style={S.td}><strong>In-processing</strong></td>
              <td style={S.td}>Fairness constraints — adicionar restrições de fairness ao problema de optimização</td>
              <td style={S.td}><code>Fairlearn</code></td>
              <td style={S.td}>Optimiza fairness e accuracy em conjunto</td>
              <td style={S.td}>Requer acesso ao processo de treino; mais complexo</td>
            </tr>
            <tr>
              <td style={S.td}><strong>In-processing</strong></td>
              <td style={S.td}>Adversarial debiasing — treinar um adversário para não conseguir prever o atributo protegido a partir das representações</td>
              <td style={S.td}><code>AIF360</code></td>
              <td style={S.td}>Elimina bias nas representações latentes</td>
              <td style={S.td}>Treino instável; requer ajuste de hiperparâmetros cuidadoso</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Pós-processamento</strong></td>
              <td style={S.td}>Threshold calibration — usar thresholds de decisão diferentes por grupo</td>
              <td style={S.td}><code>Fairlearn</code>, <code>What-If Tool</code></td>
              <td style={S.td}>Não requer re-treino; aplicável a modelos já em produção</td>
              <td style={S.td}>Pode violar legislação anti-discriminação em alguns contextos</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          O <strong>What-If Tool</strong> (Google PAIR) permite explorar interactivamente os trade-offs entre
          accuracy e fairness ao ajustar thresholds por grupo. Está integrado no TensorBoard e no Vertex AI.
          O <strong>AI Fairness 360</strong> (IBM) inclui mais de 70 métricas de fairness e 10 algoritmos de mitigação.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. GDPR e Regulação de IA</h2>
        <p style={S.p}>
          O enquadramento regulatório europeu da IA assenta em dois pilares complementares: o GDPR (Regulamento
          Geral de Protecção de Dados, 2018) e o EU AI Act (aprovado em 2024). Juntos, criam obrigações
          concretas para sistemas que tomam decisões automatizadas com efeitos significativos sobre pessoas.
        </p>
        <RegTimeline />
        <div style={S.highlight}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700 }}>GDPR — Artigo 22.º: Decisões Automatizadas</p>
          <p style={{ margin: '0 0 0.5rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            O Artigo 22.º proíbe decisões baseadas exclusivamente em tratamento automatizado que produzam
            "efeitos jurídicos" ou "afectem significativamente" o titular dos dados — incluindo decisões de
            crédito, seguros, recrutamento e habitação — salvo se:
          </p>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.4rem', lineHeight: 2 }}>
            <li>Necessárias para a execução de um contrato;</li>
            <li>Autorizadas por lei da UE ou nacional com salvaguardas adequadas;</li>
            <li>Baseadas no consentimento explícito do titular.</li>
          </ul>
          <p style={{ margin: '0.75rem 0 0', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            Em qualquer destes casos, o titular tem direito a <strong>supervisão humana</strong>,
            a <strong>contestar a decisão</strong> e a obter uma <strong>explicação significativa</strong>
            da lógica envolvida.
          </p>
        </div>
        <div style={S.highlight}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700 }}>O que conta como "explicação significativa"?</p>
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            O GDPR não define "explicação significativa" com precisão técnica — é aqui que o XAI encontra a
            regulação. O WP29 (predecessor do EDPB) indicou que a explicação deve incluir: (1) as variáveis
            de entrada utilizadas; (2) o peso relativo de cada variável; (3) o raciocínio que levou à decisão;
            (4) as consequências da decisão e como contestá-la. Técnicas como SHAP e LIME estão a ser utilizadas
            na prática para satisfazer estes requisitos, embora não haja ainda jurisprudência consolidada.
          </p>
        </div>
        <div style={S.highlight}>
          <p style={{ margin: '0 0 0.5rem', fontWeight: 700 }}>GDPR — Artigos 13.º e 14.º: Transparência</p>
          <ul style={{ margin: 0, paddingLeft: '1.4rem', lineHeight: 2 }}>
            <li>Art. 13.º: quando dados são recolhidos directamente do titular, deve ser informado da existência
              de tomada de decisão automatizada e da lógica envolvida.</li>
            <li>Art. 14.º: o mesmo aplica-se quando dados são recolhidos de terceiros.</li>
            <li>A informação deve ser fornecida de "forma concisa, transparente, inteligível e de fácil acesso".</li>
          </ul>
        </div>
        <div style={S.note}>
          Multas GDPR podem atingir 4% do volume de negócios global anual ou 20 milhões de euros, o valor mais
          elevado. A Meta foi multada em 1,2 mil milhões de euros em 2023 por transferências de dados para os EUA.
          Para sistemas de IA de alto risco, o não-cumprimento do EU AI Act prevê multas até 30 milhões de euros
          ou 6% do volume de negócios global.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. EU AI Act — Classificação de Risco</h2>
        <p style={S.p}>
          O EU AI Act, aprovado pelo Parlamento Europeu em Março de 2024, classifica os sistemas de IA em
          quatro categorias de risco com obrigações crescentes. É o primeiro regulamento abrangente de IA
          com força legal no mundo:
        </p>
        <RiskPyramid />
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Nível de Risco</th>
              <th style={S.th}>Exemplos</th>
              <th style={S.th}>Obrigações Principais</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><span style={{ ...S.pill, background: 'rgba(74,158,237,0.20)', color: '#4a9eed' }}>Mínimo</span></td>
              <td style={S.td}>Filtros de spam, sistemas de recomendação de conteúdo, IA em jogos de vídeo</td>
              <td style={S.td}>Sem obrigações específicas. Recomenda-se código de conduta voluntário.</td>
            </tr>
            <tr>
              <td style={S.td}><span style={{ ...S.pill, background: 'rgba(3,105,161,0.22)', color: '#0369a1' }}>Limitado</span></td>
              <td style={S.td}>Chatbots, deepfakes, sistemas de geração de conteúdo sintético</td>
              <td style={S.td}>Transparência obrigatória: os utilizadores devem saber que interagem com IA. Deepfakes devem ser identificados.</td>
            </tr>
            <tr>
              <td style={S.td}><span style={{ ...S.pill, background: 'rgba(3,105,161,0.25)', color: '#0369a1' }}>Alto Risco</span></td>
              <td style={S.td}>Crédito, recrutamento, educação (notas automatizadas), saúde, policiamento, administração de justiça, infraestruturas críticas</td>
              <td style={S.td}>Avaliação de conformidade, documentação técnica, gestão de risco, supervisão humana, logs de auditoria, registo na base de dados EU, transparência ao utilizador.</td>
            </tr>
            <tr>
              <td style={S.td}><span style={{ ...S.pill, background: 'rgba(7,89,133,0.30)', color: '#075985' }}>Proibido</span></td>
              <td style={S.td}>Sistemas de pontuação social (social scoring) por governos, vigilância biométrica em tempo real em espaços públicos (com excepções), manipulação subliminar, exploração de vulnerabilidades de grupos</td>
              <td style={S.td}>Proibição absoluta na UE. Multas de até 35 milhões de euros ou 7% do volume de negócios global.</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          O EU AI Act prevê um período de transição faseado: as disposições sobre sistemas proibidos entram
          em vigor 6 meses após a publicação; os requisitos para sistemas de alto risco aplicam-se 24-36 meses
          após publicação, consoante o sector. Modelos de IA de uso geral (GPAI) com mais de 10²⁵ FLOPs de
          treino têm obrigações adicionais de transparência e avaliação de risco sistémico.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. XAI em Produção — Desafios Práticos</h2>
        <p style={S.p}>
          Implementar XAI em produção vai muito além de chamar <code>shap.TreeExplainer(model)</code> no
          notebook de desenvolvimento. Existem quatro desafios principais que distinguem produção de prototipagem:
        </p>
        <ProductionLoop />
        <div style={S.highlight}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700, color: '#4a9eed' }}>Explanation Drift</p>
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            Quando o modelo é actualizado (retraining, fine-tuning), as explicações geradas pela versão anterior
            tornam-se inválidas — mas os utilizadores e auditores podem não ser notificados. É necessário
            versionamento de explicações e alertas automáticos quando as distribuições de importância de
            features mudam significativamente entre versões do modelo.
          </p>
        </div>
        <div style={S.highlight}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700, color: '#4a9eed' }}>Explanation Gaming</p>
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            Utilizadores adversariais que conhecem a lógica das explicações podem manipular as suas inputs
            para obter explicações favoráveis sem alterar a sua situação real. Um candidato a crédito que sabe
            que "número de cartões de crédito activos" é a feature mais importante pode abrir cartões para
            melhorar o score sem melhorar a sua solvabilidade real. Este problema é análogo ao Goodhart's Law:
            quando uma medida se torna um objectivo, deixa de ser uma boa medida.
          </p>
        </div>
        
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700, color: '#4a9eed' }}>Custo Computacional</p>
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            SHAP Kernel tem complexidade <InlineMath math={"O(2^p)"} /> no número de features e pode ser proibitivamente
            lento para modelos com muitas features em produção com alta throughput. Estratégias:
            TreeSHAP para modelos baseados em árvores (<InlineMath math={"O(TLD^2)"} />), caching de explicações
            para inputs frequentes, sampling de explicações (não explicar todas as predições, apenas amostras
            ou casos de alto risco).
          </p>
        
        <div style={S.highlight}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700, color: '#4a9eed' }}>Audience Gap</p>
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            Uma explicação técnica correcta ("o valor SHAP da feature X foi +0.34 log-odds") é inútil para
            um utilizador final. As explicações devem ser calibradas ao audiência: engenheiros precisam de
            explicações técnicas para debugging; reguladores precisam de documentação de compliance; utilizadores
            precisam de linguagem natural accionável ("a sua candidatura foi negada principalmente porque
            o seu rácio dívida/rendimento é superior a 40%"). Gerar múltiplos níveis de explicação a partir
            do mesmo modelo é um desafio de UX tanto quanto de ML.
          </p>
        </div>
        <div style={S.note}>
          A monitorização de explicações em produção deve incluir: (1) distribuição de importâncias de features
          ao longo do tempo (alertar se mudar &gt;X%); (2) taxa de pedidos de explicação por utilizadores
          (pico pode indicar gaming); (3) correlação entre explicações e outcomes reais; (4) latência de
          geração de explicações (SLA).
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 8 ── */}
      

    </div>
  );
}
