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
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

function BiasSourcesSVG() {
  const sources = [
    { label: 'Sub-representação\nDemográfica', example: 'HAM10000: 79% pele clara', severity: 0.9, color: '#f97316' },
    { label: 'Label Bias\n(anotador)', example: 'Variabilidade inter-observador', severity: 0.75, color: '#f97316' },
    { label: 'Dataset Shift\n(distribuição)', example: 'Equipamento / protocolo diferente', severity: 0.85, color: '#f97316' },
    { label: 'Proxy Variable\nBias', example: 'Custo cuidados ≠ estado saúde', severity: 0.95, color: '#f97316' },
    { label: 'Exclusão Histórica\n(ensaios clínicos)', example: 'Mulheres sub-incluídas até 1990s', severity: 0.7, color: '#f97316' },
  ];
  const barH = 30, gap = 12, leftPad = 200, maxW = 300, baseY = 65;

  return (
    <svg viewBox="0 0 720 330" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Fontes de Bias em IA Clínica — Severidade de Impacto</text>
      <text x={leftPad} y={38} textAnchor="start" fontSize="9" fill="var(--text-secondary)">Baixo impacto →</text>
      <text x={leftPad + maxW} y={38} textAnchor="end" fontSize="9" fill={color}>← Alto impacto</text>
      {sources.map((s, i) => {
        const w = s.severity * maxW;
        const y = baseY + i * (barH + gap);
        const lines = s.label.split('\n');
        return (
          <g key={i}>
            {lines.map((l, li) => (
              <text key={li} x={leftPad - 8} y={y + barH / 2 - 4 + li * 14} textAnchor="end" fontSize="10" fontWeight={li === 0 ? '700' : '400'} fill={li === 0 ? s.color : 'var(--text-secondary)'}>{l}</text>
            ))}
            <rect x={leftPad} y={y} width={w} height={barH} rx="5" fill={s.color} fillOpacity="0.7" />
            <text x={leftPad + w + 8} y={y + barH / 2 + 4} fontSize="9" fill="var(--text-secondary)">{s.example}</text>
          </g>
        );
      })}
      {/* Obermeyer reference */}
      <rect x="30" y="280" width="660" height="36" rx="6" fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.10)" strokeWidth="1" />
      <text x="360" y="295" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>Caso Obermeyer et al. (Science 2019):</text>
      <text x="360" y="305" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Algoritmo de gestão de cuidados reduziu em 45% os doentes negros elegíveis — proxy de custo histórico codificou desigualdade estrutural</text>
    </svg>
  );
}

function FairnessMetricsSVG() {
  const groups = ['Grupo A\n(maioritário)', 'Grupo B\n(minoritário)'];
  const metrics = [
    {
      name: 'Demographic Parity',
      desc: 'Taxa de positivos igual entre grupos',
      scores: [0.82, 0.83],
      ok: true,
      color: '#f97316',
    },
    {
      name: 'Equalized Odds (TPR)',
      desc: 'Sensibilidade igual (True Positive Rate)',
      scores: [0.91, 0.74],
      ok: false,
      color: '#f97316',
    },
    {
      name: 'Equalized Odds (FPR)',
      desc: 'Especificidade igual (False Positive Rate)',
      scores: [0.08, 0.19],
      ok: false,
      color: '#f97316',
    },
    {
      name: 'Calibration',
      desc: 'P(Y=1|score=s) igual entre grupos',
      scores: [0.79, 0.77],
      ok: true,
      color: '#f97316',
    },
  ];
  const barW = 100, barH = 22;

  return (
    <svg viewBox="0 0 720 345" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Métricas de Fairness — Exemplo de Modelo de Diagnóstico</text>
      <text x="340" y="48" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6b7280">Grupo A (maioritário)</text>
      <text x="520" y="48" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Grupo B (minoritário)</text>
      {metrics.map((m, i) => {
        const y = 60 + i * 58;
        return (
          <g key={m.name}>
            <text x="165" y={y + 14} textAnchor="end" fontSize="10" fontWeight="700" fill="var(--text-primary)">{m.name}</text>
            <text x="165" y={y + 28} textAnchor="end" fontSize="9" fill="var(--text-secondary)">{m.desc}</text>
            <rect x="175" y={y} width={m.scores[0] * barW} height={barH} rx="4" fill="#6b7280" fillOpacity="0.6" />
            <text x={175 + m.scores[0] * barW + 5} y={y + 15} fontSize="10" fontWeight="700" fill="#6b7280">{m.scores[0]}</text>
            <rect x="430" y={y} width={m.scores[1] * barW} height={barH} rx="4" fill="#f97316" fillOpacity="0.6" />
            <text x={430 + m.scores[1] * barW + 5} y={y + 15} fontSize="10" fontWeight="700" fill="#f97316">{m.scores[1]}</text>
            <rect x="600" y={y + 2} width={70} height={18} rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
            <text x="635" y={y + 15} textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">{m.ok ? '✓ Fair' : '✗ Unfair'}</text>
          </g>
        );
      })}
      <rect x="30" y="295" width="660" height="38" rx="4" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="311" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Impossibilidade de Chouldechova (2016): com prevalências diferentes entre grupos,</text>
      <text x="360" y="327" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">não é possível satisfazer todas as métricas de fairness simultaneamente</text>
    </svg>
  );
}

function FederatedLearningSVG() {
  // Layout: 4 hospitals in a column on each side, server in center
  const sX = 360, sY = 140, sW = 130, sH = 90;
  const hW = 110, hH = 56;
  const left = [
    { label: 'Hospital A', sub: 'Lisboa', x: 80, y: 90 },
    { label: 'Hospital B', sub: 'Porto', x: 80, y: 195 },
  ];
  const right = [
    { label: 'Hospital C', sub: 'Londres', x: 640, y: 90 },
    { label: 'Hospital D', sub: 'Berlim', x: 640, y: 195 },
  ];

  return (
    <svg viewBox="0 0 720 310" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Federated Learning em Hospitais — Privacidade por Design</text>
      <defs>
        <marker id="arrowFL" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill={color} />
        </marker>
        <marker id="arrowFLback" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#6b7280" />
        </marker>
      </defs>

      {/* Central server */}
      <rect x={sX - sW/2} y={sY - sH/2} width={sW} height={sH} rx="10" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2" />
      <text x={sX} y={sY - 22} textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Servidor</text>
      <text x={sX} y={sY - 6} textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Federado</text>
      <text x={sX} y={sY + 14} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Agrega gradientes</text>
      <text x={sX} y={sY + 28} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">FedAvg / FedProx</text>

      {/* Left hospitals → arrows to server */}
      {left.map((h, i) => (
        <g key={i}>
          <rect x={h.x - hW/2} y={h.y - hH/2} width={hW} height={hH} rx="8" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.5" />
          <text x={h.x} y={h.y - 8} textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>{h.label}</text>
          <text x={h.x} y={h.y + 10} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{h.sub}</text>
          {/* gradient → server (solid orange) */}
          <line x1={h.x + hW/2} y1={h.y} x2={sX - sW/2 - 4} y2={sY + (i === 0 ? -20 : 20)} stroke={color} strokeWidth="1.5" markerEnd="url(#arrowFL)" />
          {/* model ← server (dashed gray, offset slightly) */}
          <line x1={sX - sW/2 - 4} y1={sY + (i === 0 ? -10 : 30)} x2={h.x + hW/2} y2={h.y + 10} stroke="#6b7280" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrowFLback)" />
        </g>
      ))}

      {/* Right hospitals → arrows from server */}
      {right.map((h, i) => (
        <g key={i}>
          <rect x={h.x - hW/2} y={h.y - hH/2} width={hW} height={hH} rx="8" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.5" />
          <text x={h.x} y={h.y - 8} textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>{h.label}</text>
          <text x={h.x} y={h.y + 10} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{h.sub}</text>
          {/* gradient → server */}
          <line x1={h.x - hW/2} y1={h.y} x2={sX + sW/2 + 4} y2={sY + (i === 0 ? -20 : 20)} stroke={color} strokeWidth="1.5" markerEnd="url(#arrowFL)" />
          {/* model ← server */}
          <line x1={sX + sW/2 + 4} y1={sY + (i === 0 ? -10 : 30)} x2={h.x - hW/2} y2={h.y + 10} stroke="#6b7280" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrowFLback)" />
        </g>
      ))}

      {/* Legend */}
      <line x1="80" y1="268" x2="112" y2="268" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowFL)" />
      <text x="118" y="272" fontSize="10" fill={color}>Gradientes (∇W) — nunca dados brutos</text>
      <line x1="390" y1="268" x2="422" y2="268" stroke="#6b7280" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrowFLback)" />
      <text x="428" y="272" fontSize="10" fill="#6b7280">Modelo global actualizado</text>
      <text x="360" y="295" textAnchor="middle" fontSize="9.5" fill="var(--text-secondary)">Google Health + Intel: detecção de cancro sem transferir imagens DICOM entre instituições | non-IID challenge</text>
    </svg>
  );
}

function SHAPExplainabilitySVG() {
  const features = [
    { name: 'Lactato (mmol/L)', shap: 0.38, dir: 'up', color: '#f97316' },
    { name: 'FC (bpm)', shap: 0.22, dir: 'up', color: '#f97316' },
    { name: 'Creatinina', shap: 0.17, dir: 'up', color: '#f97316' },
    { name: 'Temperatura', shap: -0.12, dir: 'down', color: '#f97316' },
    { name: 'Saturação O₂', shap: -0.19, dir: 'down', color: '#f97316' },
    { name: 'PA Diastólica', shap: -0.09, dir: 'down', color: '#f97316' },
  ];

  // Layout: feature labels in a fixed left column, axis in center-right
  const labelX = 170;   // label text anchor="end"
  const centerX = 420;  // zero axis
  const maxW = 200;
  const barH = 26, gap = 12;
  const topY = 50;

  return (
    <svg viewBox="0 0 720 340" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>SHAP — Explicabilidade de Predição de Sepsis (doente de risco)</text>

      {/* Direction labels */}
      <text x={centerX - 12} y={topY - 8} textAnchor="end" fontSize="9" fontWeight="700" fill="#f97316">← Diminui risco</text>
      <text x={centerX + 12} y={topY - 8} textAnchor="start" fontSize="9" fontWeight="700" fill="#f97316">Aumenta risco →</text>

      {/* Center axis */}
      <line x1={centerX} y1={topY - 2} x2={centerX} y2={topY + features.length * (barH + gap) + 4} stroke="var(--text-secondary)" strokeWidth="1.5" />

      {features.map((f, i) => {
        const w = Math.abs(f.shap) * maxW;
        const y = topY + i * (barH + gap);
        const barX = f.dir === 'up' ? centerX : centerX - w;
        return (
          <g key={f.name}>
            <text x={labelX} y={y + barH / 2 + 4} textAnchor="end" fontSize="10" fontWeight="700" fill={f.color}>{f.name}</text>
            <circle cx={centerX} cy={y + barH / 2} r="3" fill={f.color} fillOpacity="0.5" />
            <rect x={barX} y={y} width={w} height={barH} rx="4" fill={f.color} fillOpacity="0.75" />
            <text
              x={f.dir === 'up' ? centerX + w + 8 : centerX - w - 8}
              y={y + barH / 2 + 4}
              textAnchor={f.dir === 'up' ? 'start' : 'end'}
              fontSize="11" fontWeight="800" fill={f.color}>
              {f.dir === 'up' ? '+' : ''}{f.shap.toFixed(2)}
            </text>
          </g>
        );
      })}

      {/* Score box */}
      <rect x="30" y="296" width="660" height="34" rx="6" fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.10)" strokeWidth="1" />
      <text x="360" y="312" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>Score de risco: 0.87 (Alto) → "Lactato elevado e taquicárdia são os drivers principais"</text>
      <text x="360" y="326" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Grad-CAM para imagem | SHAP para tabular/EHR | Attention maps para NLP | LIME para explicações locais</text>
    </svg>
  );
}

function PostMarketSurveillanceSVG() {
  const phases = [
    { label: 'Aprovação\nInicial', desc: 'FDA / CE Mark\nsubmissão', color: '#f97316', x: 55 },
    { label: 'Deployment\nClínico', desc: 'Integração EHR\nMonitorização', color: '#fb923c', x: 195 },
    { label: 'Drift\nDetection', desc: 'Dataset shift\nPerformance decay', color: '#f97316', x: 335 },
    { label: 'Retrain\n/ Update', desc: 'PCCP — change\ncontrol plan', color: '#fb923c', x: 475 },
    { label: 'Resubmissão\n(se aplicável)', desc: 'Mudança sig.\n→ nova revisão', color: '#f97316', x: 615 },
  ];

  // Drift line chart data
  const driftData = [1.0, 0.98, 0.96, 0.93, 0.88, 0.81, 0.74, 0.68];
  const chartW = 660;
  const chartH = 50;
  const baseY = 195;
  const leftPad = 30;

  return (
    <svg viewBox="0 0 720 310" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Post-Market Surveillance — Ciclo de Vida do Algoritmo Clínico</text>
      <defs>
        <marker id="arrowPMS" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill={color} />
        </marker>
      </defs>
      {phases.map((p, i) => {
        const lines = p.label.split('\n');
        const dlines = p.desc.split('\n');
        return (
          <g key={i}>
            <rect x={p.x - 50} y={45} width={100} height={70} rx="8" fill={p.color} fillOpacity="0.12" stroke={p.color} strokeWidth="1.5" />
            {lines.map((l, li) => (
              <text key={li} x={p.x} y={70 + li * 16} textAnchor="middle" fontSize="10" fontWeight={li === 0 ? '700' : '400'} fill={p.color}>{l}</text>
            ))}
            {dlines.map((l, li) => (
              <text key={li} x={p.x} y={102 + li * 12} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{l}</text>
            ))}
            {i < phases.length - 1 && (
              <line x1={p.x + 50} y1={80} x2={phases[i + 1].x - 52} y2={80} stroke={color} strokeWidth="1.5" markerEnd="url(#arrowPMS)" />
            )}
          </g>
        );
      })}
      {/* Drift chart */}
      <text x="360" y="188" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Performance do Modelo ao Longo do Tempo (AUC)</text>
      <polyline
        points={driftData.map((v, i) => `${leftPad + (i / (driftData.length - 1)) * chartW},${baseY - (v - 0.6) / 0.4 * chartH}`).join(' ')}
        fill="none" stroke={color} strokeWidth="2"
      />
      {driftData.map((v, i) => {
        const x = leftPad + (i / (driftData.length - 1)) * chartW;
        const y = baseY - (v - 0.6) / 0.4 * chartH;
        return <circle key={i} cx={x} cy={y} r="4" fill={v < 0.8 ? '#f97316' : color} />;
      })}
      {/* Threshold line */}
      <line x1={leftPad} y1={baseY - (0.8 - 0.6) / 0.4 * chartH} x2={leftPad + chartW} y2={baseY - (0.8 - 0.6) / 0.4 * chartH} stroke="#f97316" strokeWidth="1" strokeDasharray="5 3" />
      <text x={leftPad + chartW -100} y={baseY - (0.8 - 0.6) / 0.4 * chartH - 10} fontSize="9" fill="#f97316">limiar alerta</text>
      {/* Y axis labels */}
      {[0.7, 0.8, 0.9, 1.0].map(v => {
        const y = baseY - (v - 0.6) / 0.4 * chartH;
        return <text key={v} x={leftPad - 4} y={y + 4} textAnchor="end" fontSize="8" fill="var(--text-secondary)">{v}</text>;
      })}
      <line x1={leftPad} y1={baseY - chartH} x2={leftPad} y2={baseY} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={leftPad} y1={baseY} x2={leftPad + chartW} y2={baseY} stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="360" y="265" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Meses de deployment →</text>
      <text x="360" y="285" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">FDA PCCP (Predetermined Change Control Plan) — declara antecipadamente que mudanças são permitidas sem nova submissão</text>
    </svg>
  );
}

export default function AIH5() {
  return (
    <div style={S.page}>
      <Link to="/ai-health" style={S.back}><ArrowLeft size={16} /> IA em Saúde</Link>
      <div style={S.tag}>Module 05</div>
      <h1 style={S.h1}>IA Clínica Responsável</h1>
      <p style={S.lead}>
        A IA em saúde tem o poder de salvar vidas — mas também de perpetuar ou ampliar desigualdades
        existentes se desenvolvida sem responsabilidade. Neste módulo final abordamos os problemas de
        bias e equidade, os métodos de explicabilidade clínica, as tecnologias de privacidade e o
        enquadramento regulatório de certificação de algoritmos de saúde.
      </p>

      <section style={S.section}>
        <h2 style={S.h2}>1. Bias em Dados Clínicos</h2>
        <BiasSourcesSVG />
        <h3 style={S.h3}>Fontes e Mecanismos</h3>
        <p style={S.p}>
          O bias em IA clínica não é apenas um problema técnico — tem consequências directas na
          qualidade dos cuidados prestados a populações já vulneráveis. As fontes são múltiplas
          e frequentemente encadeadas:
        </p>
        <div style={S.highlight}>
          <strong>Sub-representação demográfica:</strong> grandes datasets de imagem médica (ImageNet,
          CheXpert, MIMIC) têm sobrerrepresentação de populações caucasianas, masculinas e de países
          de alto rendimento. Modelos de detecção de melanoma treinados predominantemente em pele
          clara performam significativamente pior em tons de pele mais escuros.
        </div>
        <div style={S.highlight}>
          <strong>Racial bias codificado:</strong> algoritmos de gestão de cuidados usados por
          hospitais nos EUA foram identificados como usando o custo histórico de cuidados como proxy
          do estado de saúde — penalizando populações negras que, por razões socioeconómicas, acediam
          menos a cuidados de saúde. O estudo da Obermeyer et al. (Science, 2019) estimou que o
          algoritmo reduzia em 45% o número de doentes negros elegíveis para programas de gestão
          de doenças crónicas.
        </div>
        <p style={S.p}>
          <strong>Histórico de exclusão:</strong> ensaios clínicos historicamente sub-incluíram
          mulheres, idosos e minorias étnicas — o que significa que os dados que alimentam modelos
          preditivos reflectem estas exclusões históricas, potencialmente perpetuando-as.
        </p>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>2. Fairness em Contexto Médico</h2>
        <FairnessMetricsSVG />
        <h3 style={S.h3}>Métricas e Impossibilidade</h3>
        <p style={S.p}>
          A fairness em ML define métricas formais para detectar e mitigar discriminação algorítmica.
          Em saúde, a escolha da métrica de fairness correcta é ela própria uma decisão ética:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Métrica</th>
              <th style={S.th}>Definição</th>
              <th style={S.th}>Contexto médico</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Demographic Parity', 'Taxa de positivos igual entre grupos', 'Rastreio oncológico: igual proporção triada em grupos demográficos'],
              ['Equalized Odds', 'TPR e FPR iguais entre grupos', 'Diagnóstico: mesma sensibilidade e especificidade em todos os grupos'],
              ['Calibration', 'Probabilidades previstas correspondem a frequências reais', 'Risco de readmissão: 30% de probabilidade deve corresponder a 30% real'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Impossibilidade de fairness (Chouldechova, 2016): em contextos de prevalência diferente
          entre grupos, não é matematicamente possível satisfazer simultaneamente calibração,
          demographic parity e equalized odds. A escolha deve ser explícita e clinicamente justificada.
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>3. Explicabilidade Clínica</h2>
        <SHAPExplainabilitySVG />
        <h3 style={S.h3}>SHAP, Grad-CAM e Atenção</h3>
        <p style={S.p}>
          Médicos e doentes têm o direito de compreender por que razão um algoritmo chegou a uma
          conclusão — especialmente quando essa conclusão influencia decisões de diagnóstico ou
          tratamento de consequências sérias.
        </p>
        <div style={S.highlight}>
          <strong>SHAP em EHRs:</strong> SHAP (SHapley Additive exPlanations) atribui a cada feature
          do doente (valor de laboratório, diagnóstico prévio, medicação) a sua contribuição marginal
          para o score de risco previsto. Um modelo de predição de sepsis pode mostrar: "este doente
          tem risco elevado principalmente por lactato = 4.2 mmol/L (+0.38) e frequência cardíaca
          = 128 bpm (+0.22)".
        </div>
        <div style={S.highlight}>
          <strong>Attention Maps em Imaging:</strong> em modelos de classificação de imagem médica,
          Grad-CAM e técnicas de atenção permitem visualizar as regiões da imagem que mais
          influenciaram a decisão do modelo. Um radiologista pode verificar se o modelo está
          a "olhar" para a região anatomicamente correcta ou a fazer correlações espúrias
          (ex.: classificar uma imagem como patológica por causa do marcador de alta densidade
          deixado inadvertidamente no exame).
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>4. Privacy-Preserving AI</h2>
        <FederatedLearningSVG />
        <h3 style={S.h3}>Federated Learning e Differential Privacy</h3>
        <p style={S.p}>
          A tensão entre utilidade dos dados e privacidade dos doentes é central em IA de saúde.
          Tecnologias de privacy-preserving AI permitem treinar modelos úteis sem expor dados
          sensíveis individuais.
        </p>
        <div style={S.highlight}>
          <strong>Federated Learning em hospitais:</strong> em vez de centralizar dados clínicos,
          o modelo vai aos dados. Cada hospital treina localmente e envia apenas gradientes
          (não dados brutos) para um servidor central que os agrega. Google Health e Intel usam
          esta abordagem para treinar modelos de detecção de cancro sem transferir imagens DICOM
          entre instituições. Desafio: heterogeneidade dos dados entre hospitais (non-IID).
        </div>
        <div style={S.highlight}>
          <strong>Differential Privacy (DP):</strong> adiciona ruído calibrado matematicamente aos
          gradientes durante o treino, com garantia formal (ε, δ) de que nenhum modelo pode
          memorizar dados individuais. PyTorch Opacus e TensorFlow Privacy implementam DP-SGD.
          Trade-off: maior privacidade (ε pequeno) geralmente implica menor utilidade do modelo.
        </div>
        <div style={S.highlight}>
          <strong>GDPR/HIPAA compliance:</strong> modelos treinados em dados anonimizados seguindo
          Safe Harbor (HIPAA) ou pseudonimizados com garantias técnicas (GDPR) podem ser partilhados.
          A anonimização deve ser auditável — o risco de re-identificação em dados clínicos ricos
          é real mesmo após remoção de identificadores directos.
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>5. Regulamentação e Certificação</h2>
        <PostMarketSurveillanceSVG />
        <h3 style={S.h3}>Ciclo de Vida, FDA PCCP e Auditoria</h3>
        <p style={S.p}>
          A certificação de algoritmos de saúde vai além da aprovação inicial — abrange todo o
          ciclo de vida do modelo, incluindo monitorização após deployment.
        </p>
        <div style={S.highlight}>
          <strong>CE Mark (MDR/IVDR):</strong> o processo inclui avaliação clínica (evidência de
          segurança e performance clínica), análise de gestão de risco (ISO 14971), sistema de
          qualidade (ISO 13485) e auditoria por Organismo Notificado. Para software de IA com
          aprendizagem contínua, o Organismo Notificado deve ser notificado de alterações
          significativas ao algoritmo.
        </div>
        <div style={S.highlight}>
          <strong>FDA SaMD:</strong> o FDA publicou a Action Plan for AI/ML-based SaMD (2021)
          reconhecendo que os processos tradicionais (aprovação pontual) são inadequados para
          modelos que evoluem continuamente. Propõe um framework de "predetermined change control
          plan" — o fabricante declara antecipadamente que tipos de mudanças ao modelo são
          permitidas sem nova submissão.
        </div>
        <div style={S.highlight}>
          <strong>Post-Market Surveillance:</strong> após deployment, é obrigatório monitorizar
          a performance real do algoritmo no contexto clínico, detectar dataset shift (a população
          de doentes mudou), degradação de performance ao longo do tempo e eventos adversos
          relacionados com decisões baseadas no algoritmo.
        </div>
        <div style={S.highlight}>
          <strong>Auditoria de Algoritmos:</strong> entidades como o CHAI (Coalition for Health
          AI) estão a desenvolver frameworks de auditoria que avaliam bias, explicabilidade,
          performance por subgrupo e robustez antes de deployment hospitalar. A auditoria
          independente está a tornar-se expectativa do mercado e requisito regulatório emergente.
        </div>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>6. Síntese do Módulo</h2>
        <div style={S.note}>
          IA clínica responsável requer atenção explícita a bias desde a colecção
          de dados, escolha consciente de métricas de fairness contextualmente adequadas,
          explicabilidade que suporte o raciocínio clínico, privacidade técnica robusta (federated
          learning, differential privacy) e certificação que abranja todo o ciclo de vida — incluindo
          post-market surveillance. Responsabilidade não é uma fase final; é uma prática contínua
          integrada em cada decisão de design.
        </div>
      </section>
    </div>
  );
}
