import React, { useState } from 'react';
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
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(180,83,9,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

// ===== DIAGRAM 1: Monitoring Levels — vertical stacked bands =====
const MonitoringLevelsDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Os 3 Níveis de Monitorização — Pirâmide de Observabilidade</p>
    <svg viewBox="0 0 620 280" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-mon5a" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* Level 3 — top: Prediction Monitoring */}
      <rect x="110" y="10" width="400" height="72" rx="10" fill="rgba(180,83,9,0.13)" stroke={color} strokeWidth="2" />
      <text x="310" y="32" textAnchor="middle" fill={color} fontSize="12" fontWeight="800">NÍVEL 3 — Prediction Monitoring</text>
      <text x="310" y="50" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">Distribuição de outputs · Confidence scores · Feature importance (SHAP)</text>
      <text x="310" y="66" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">KPIs de negócio · Taxa de conversão · Distribuição de classes preditas</text>

      {/* Level 2 — middle: Model Performance */}
      <rect x="60" y="100" width="500" height="72" rx="10" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="2" />
      <text x="310" y="122" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="800">NÍVEL 2 — Model Performance Monitoring</text>
      <text x="310" y="140" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">Accuracy · F1-Score · AUC-ROC · Precision · Recall</text>
      <text x="310" y="156" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">⚠ Requer ground truth — pode chegar com delay de dias/semanas</text>

      {/* Level 1 — bottom: Resource Monitoring */}
      <rect x="5" y="190" width="595" height="72" rx="10" fill="rgba(180,83,9,0.13)" stroke="#f97316" strokeWidth="2" />
      <text x="310" y="212" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="800">NÍVEL 1 — Resource Monitoring</text>
      <text x="310" y="230" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">CPU · Memória · Latência p50/p95/p99 · Throughput (req/s) · Taxa de erros HTTP</text>
      <text x="310" y="246" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">Ferramentas: Prometheus + Grafana · CloudWatch · Datadog</text>

      {/* complexity label */}
      <text x="620" y="148" textAnchor="end" fill={color} fontSize="9" fontWeight="700" transform="rotate(-90 620 150)">Complexidade / esforço →</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      Os três níveis formam uma pirâmide: o nível 1 (infra) é a base obrigatória — sem ele não sabe se o
      modelo está sequer a correr. O nível 2 (performance) é o mais valioso mas requer ground truth. O nível 3
      (predições) dá visibilidade antecipada mesmo sem ground truth, porque monitoriza o <strong>comportamento
      do modelo</strong>, não o resultado final.
    </p>
  </div>
);

// ===== DIAGRAM 2: Feedback Loop circular =====
const FeedbackLoopDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>O Feedback Loop Completo — Do Serving ao Retraining</p>
    <svg viewBox="0 0 620 310" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-fb5" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={color} />
        </marker>
        <marker id="arr-fb5g" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#f97316" />
        </marker>
        <marker id="arr-fb5r" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#f97316" />
        </marker>
      </defs>

      {/* Nodes — arranged in a cycle */}
      {/* Top: Model Serves */}
      <rect x="220" y="10" width="180" height="44" rx="9" fill={`${color}18`} stroke={color} strokeWidth="2" />
      <text x="310" y="30" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Modelo em Produção</text>
      <text x="310" y="46" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">serve predições em tempo real</text>

      {/* Right: Predictions logged */}
      <rect x="480" y="110" width="130" height="44" rx="9" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.8" />
      <text x="545" y="130" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Logs de Predições</text>
      <text x="545" y="146" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">input + output + timestamp</text>

      {/* Bottom-right: Ground truth collected */}
      <rect x="430" y="220" width="160" height="50" rx="9" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="1.8" />
      <text x="510" y="241" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">Ground Truth</text>
      <text x="510" y="257" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">colecta com delay (dias–semanas)</text>

      {/* Bottom: Performance computed */}
      <rect x="210" y="250" width="170" height="44" rx="9" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.8" />
      <text x="295" y="269" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Performance Calculada</text>
      <text x="295" y="285" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">F1, AUC, Accuracy, etc.</text>

      {/* Bottom-left: Alert */}
      <rect x="30" y="220" width="145" height="50" rx="9" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.8" />
      <text x="102" y="241" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Alerta Disparado</text>
      <text x="102" y="257" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">performance abaixo de threshold</text>

      {/* Left: Retraining */}
      <rect x="10" y="110" width="145" height="44" rx="9" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.8" />
      <text x="82" y="130" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Retraining Activado</text>
      <text x="82" y="146" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">novo modelo treinado</text>

      {/* Arrows — clockwise cycle */}
      <path d="M390 32 Q460 60 480 120" fill="none" stroke={color} strokeWidth="1.8" markerEnd="url(#arr-fb5)" />
      <path d="M545 154 Q540 195 510 220" fill="none" stroke="#f97316" strokeWidth="1.8" markerEnd="url(#arr-fb5)" />
      <path d="M430 255 L385 265" fill="none" stroke="#f59e0b" strokeWidth="1.8" markerEnd="url(#arr-fb5)" />
      <path d="M210 270 L175 250" fill="none" stroke="#f97316" strokeWidth="1.8" markerEnd="url(#arr-fb5)" />
      <path d="M102 220 L97 165" fill="none" stroke="#f97316" strokeWidth="1.8" markerEnd="url(#arr-fb5r)" />
      <path d="M155 132 Q190 55 220 35" fill="none" stroke="#f97316" strokeWidth="1.8" markerEnd="url(#arr-fb5g)" />

      {/* Delay annotation */}
      <rect x="220" y="178" width="190" height="28" rx="6" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4,2" />
      <text x="315" y="197" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">⏱ Delay: dias a semanas</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      O loop completo fecha quando um novo modelo é deployado e começa a servir predições. O ponto crítico
      é a seta amarela — o <strong>delay na chegada de ground truth</strong> cria uma janela cega onde o modelo
      pode já estar a degradar-se sem que se possa medir.
    </p>
  </div>
);

// ===== DIAGRAM 3: Model Degradation over time =====
const ModelDegradationDiagram = () => {
  const w = 580, h = 220, padL = 52, padB = 38, padT = 20, padR = 20;
  const xMax = 12, yMax = 100, yMin = 40;
  const toX = (v) => padL + (v / xMax) * (w - padL - padR);
  const toY = (v) => h - padB - ((v - yMin) / (yMax - yMin)) * (h - padT - padB);

  const points = [
    [0, 94], [0.5, 93], [1, 91], [1.5, 90], [2, 89], [2.5, 88], [3, 86],
    [3.5, 84], [4, 83], [4.5, 81], [5, 79], [5.5, 77], [6, 72],
    // concept drift event at x=6.5
    [6.5, 61], [7, 55], [7.2, 52],
    // retraining at x=7.5
    [7.5, 91], [8, 90], [8.5, 89], [9, 88], [9.5, 87], [10, 86], [11, 84], [12, 83],
  ];

  const path = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${toX(x).toFixed(1)},${toY(y).toFixed(1)}`).join(' ');

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Degradação de Accuracy ao Longo do Tempo</p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="arr-deg5" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
          </marker>
        </defs>

        {/* axes */}
        <line x1={padL} y1={padT} x2={padL} y2={h - padB} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={padL} y1={h - padB} x2={w - padR} y2={h - padB} stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arr-deg5)" />
        <text x={w / 2} y={h - 4} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Tempo (meses após deploy)</text>
        <text x="14" y={(h) / 2} textAnchor="middle" fill="var(--text-secondary)" fontSize="10" transform={`rotate(-90 14 ${h / 2})`}>Accuracy (%)</text>

        {/* y gridlines + labels */}
        {[50, 60, 70, 80, 90, 100].map(v => (
          <g key={v}>
            <line x1={padL} y1={toY(v)} x2={w - padR} y2={toY(v)} stroke="var(--text-secondary)" strokeWidth="0.7" strokeDasharray="3,3" opacity="0.5" />
            <text x={padL - 5} y={toY(v) + 4} textAnchor="end" fill="var(--text-secondary)" fontSize="9">{v}</text>
          </g>
        ))}

        {/* x labels */}
        {[0, 2, 4, 6, 8, 10, 12].map(v => (
          <text key={v} x={toX(v)} y={h - padB + 14} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">{v}</text>
        ))}

        {/* shaded zones */}
        {/* normal drift zone */}
        <rect x={toX(0)} y={padT} width={toX(6) - toX(0)} height={h - padT - padB} fill="rgba(16,185,129,0.06)" />
        {/* concept drift zone */}
        <rect x={toX(6)} y={padT} width={toX(7.5) - toX(6)} height={h - padT - padB} fill="rgba(249,115,22,0.10)" />
        {/* recovery zone */}
        <rect x={toX(7.5)} y={padT} width={toX(12) - toX(7.5)} height={h - padT - padB} fill="rgba(16,185,129,0.06)" />

        {/* threshold line */}
        <line x1={padL} y1={toY(70)} x2={w - padR} y2={toY(70)} stroke="#f97316" strokeWidth="1.2" strokeDasharray="6,3" />
        <text x={w - padR - 5} y={toY(70) - 5} textAnchor="end" fill="#f97316" fontSize="9" fontWeight="700">threshold de alerta</text>

        {/* event lines */}
        <line x1={toX(6.5)} y1={padT} x2={toX(6.5)} y2={h - padB} stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" />
        <text x={toX(6.5)} y={padT } textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">concept drift</text>

        <line x1={toX(7.5)} y1={padT} x2={toX(7.5)} y2={h - padB} stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" />
        <text x={toX(7.5)} y={padT - 10} textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">retraining</text>

        {/* main accuracy line */}
        <path d={path} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />

        {/* deploy label */}
        <circle cx={toX(0)} cy={toY(94)} r="5" fill={color} />
        <text x={toX(0) + 6} y={toY(94) - 8} fill={color} fontSize="9" fontWeight="700">Deploy (94%)</text>

        {/* retrain label */}
        <circle cx={toX(7.5)} cy={toY(91)} r="5" fill="#f97316" />
        <text x={toX(7.5) + 6} y={toY(91) - 8} fill="#f97316" fontSize="9" fontWeight="700">Novo modelo (91%)</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
        A degradação é gradual e muitas vezes imperceptível até ser demasiado tarde. Note que o modelo foi
        deployado com 94% de accuracy mas estava já a 79% quando o drift abrupto ocorreu — sem monitorização,
        ninguém teria dado conta da degradação de 15 pontos percentuais.
      </p>
    </div>
  );
};

// ===== DIAGRAM 4: Retraining Triggers Decision Flowchart =====
const RetrainingTriggersDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Árvore de Decisão — Triggers de Retraining</p>
    <svg viewBox="0 0 620 340" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-trig5" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* Root: Monitor metric */}
      <rect x="210" y="10" width="200" height="40" rx="8" fill={`${color}18`} stroke={color} strokeWidth="2" />
      <text x="310" y="35" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Monitorizar Métricas</text>

      {/* Decision 1: below threshold? */}
      <polygon points="310,70 420,100 310,130 200,100" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="1.8" />
      <text x="310" y="97" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">Performance</text>
      <text x="310" y="112" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">abaixo de threshold?</text>

      <path d="M310 50 L310 70" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-trig5)" />

      {/* NO branch — right */}
      <path d="M420 100 L530 100" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-trig5)" />
      <text x="475" y="93" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Não</text>
      <rect x="530" y="80" width="80" height="40" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="570" y="97" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Continuar</text>
      <text x="570" y="112" textAnchor="middle" fill="#f97316" fontSize="9">monitorizar</text>

      {/* YES branch — down */}
      <path d="M310 130 L310 155" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-trig5)" />
      <text x="323" y="146" fill="var(--text-secondary)" fontSize="9">Sim</text>

      {/* Decision 2: drift detected? */}
      <polygon points="310,160 420,185 310,210 200,185" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.8" />
      <text x="310" y="181" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Drift detectado</text>
      <text x="310" y="196" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">nos inputs?</text>

      {/* NO branch left */}
      <path d="M200 185 L100 185" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-trig5)" />
      <text x="150" y="178" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Não</text>
      <rect x="10" y="165" width="90" height="40" rx="8" fill="rgba(180,83,9,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="55" y="181" textAnchor="middle" fill={color} fontSize="8.5" fontWeight="700">Scheduled</text>
      <text x="55" y="195" textAnchor="middle" fill={color} fontSize="8.5">Retraining</text>

      {/* YES branch — down */}
      <path d="M310 210 L310 235" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-trig5)" />
      <text x="323" y="226" fill="var(--text-secondary)" fontSize="9">Sim</text>

      {/* Decision 3: new data available? */}
      <polygon points="310,240 430,265 310,290 190,265" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.8" />
      <text x="310" y="261" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Dados novos</text>
      <text x="310" y="276" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">suficientes?</text>

      {/* YES branch — right */}
      <path d="M430 265 L510 265" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-trig5)" />
      <text x="470" y="258" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Sim</text>
      <rect x="510" y="245" width="100" height="40" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="560" y="261" textAnchor="middle" fill="#f97316" fontSize="8.5" fontWeight="700">Immediate</text>
      <text x="560" y="275" textAnchor="middle" fill="#f97316" fontSize="8.5">Retraining</text>

      {/* NO branch — left */}
      <path d="M190 265 L110 265" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-trig5)" />
      <text x="150" y="258" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Não</text>
      <rect x="10" y="245" width="100" height="40" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="60" y="261" textAnchor="middle" fill="#f97316" fontSize="8.5" fontWeight="700">Acumular</text>
      <text x="60" y="275" textAnchor="middle" fill="#f97316" fontSize="8.5">dados + alertar</text>

      {/* Continuous learning option below immediate retraining */}
      <path d="M560 285 L560 310" stroke="var(--text-secondary)" strokeWidth="1.3" strokeDasharray="3,2" markerEnd="url(#arr-trig5)" />
      <rect x="500" y="310" width="120" height="28" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.3" />
      <text x="560" y="329" textAnchor="middle" fill="#f97316" fontSize="8.5" fontWeight="700">Continuous Learning</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      A estratégia de retraining não é binária. A decisão correta depende de três factores: se a performance caiu,
      se foi detectado drift nos inputs, e se há dados novos suficientes para retreinar com qualidade.
    </p>
  </div>
);

// ===== DIAGRAM 5: Ground Truth Delay Timeline =====
const GroundTruthDelayDiagram = () => {
  const w = 580, h = 160;
  const events = [
    { x: 60, label: 'Predição', sub: 'dia 0', c: color, desc: 'Modelo classifica\nrequest' },
    { x: 210, label: 'Ação do Utilizador', sub: 'dia 3', c: '#f97316', desc: 'Utilizador age\n(clique, compra...)' },
    { x: 380, label: 'Ground Truth', sub: 'dia 30', c: '#f97316', desc: 'Resultado confirmado\n(chargeback, default...)' },
    { x: 520, label: 'Dados Prontos', sub: 'dia 31+', c: '#f97316', desc: 'Par (input, label)\npode ser usado' },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>O Problema do Delay no Ground Truth</p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="arr-gt5" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
          </marker>
        </defs>

        {/* Timeline axis */}
        <line x1="30" y1="80" x2={w - 10} y2="80" stroke="var(--text-secondary)" strokeWidth="2" markerEnd="url(#arr-gt5)" />

        {/* Blind window shading */}
        <rect x="60" y="130" width={380 - 60} height="40" rx="0" fill="rgba(249,115,22,0.10)" />
        <text x={(60 + 380) / 2} y="145" textAnchor="middle" fill="#f97316" fontSize="8.5" fontWeight="700">JANELA CEGA — não é possível avaliar o modelo aqui</text>
        <text x={(60 + 380) / 2} y="155" textAnchor="middle" fill="#f97316" fontSize="8" fontStyle="italic">(30 dias sem ground truth)</text>

        {/* Event markers */}
        {events.map(({ x, label, sub, c, desc }) => (
          <g key={label}>
            <circle cx={x} cy="80" r="9" fill={`${c}22`} stroke={c} strokeWidth="2" />
            <line x1={x} y1="69" x2={x} y2="40" stroke={c} strokeWidth="1.3" strokeDasharray="3,2" />
            <text x={x} y="34" textAnchor="middle" fill={c} fontSize="9" fontWeight="700">{label}</text>
            <text x={x} y="22" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{sub}</text>
            {desc.split('\n').map((line, i) => (
              <text key={i} x={x} y={105 + i * 13} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">{line}</text>
            ))}
          </g>
        ))}
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
        Em muitos domínios (crédito, saúde, churn), o resultado real de uma predição só é conhecido semanas ou
        meses depois. Durante este período, o modelo pode estar a degradar-se completamente sem que existam
        dados para o provar. Estratégias para lidar com este problema: <strong>proxy metrics</strong> (métricas
        correlacionadas disponíveis mais cedo), <strong>bandit feedback</strong> e <strong>anotação humana</strong>
        de amostras prioritárias.
      </p>
    </div>
  );
};

// ===== DIAGRAM 6: Log Structure =====
const ModelLogDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Anatomia de um Log de Predição</p>
    <svg viewBox="0 0 600 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-log5" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* Log record box */}
      <rect x="20" y="20" width="570" height="140" rx="10" fill="rgba(180,83,9,0.05)" stroke={color} strokeWidth="1.5" />
      <text x="300" y="14" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">prediction_log record</text>

      {/* Fields */}
      {[
        { k: 'request_id', v: '"uuid-abc-123"', c: '#f97316', note: 'identificador único — liga predição ao ground truth futuro' },
        { k: 'timestamp', v: '"2025-06-13T14:32:00Z"', c: '#f97316', note: 'quando a predição foi feita' },
        { k: 'model_version', v: '"v2.4.1"', c: color, note: 'qual modelo serviu — essencial para comparar versões' },
        { k: 'input_features', v: '{"age":32, "income":45000, ...}', c: '#f97316', note: 'snapshot dos inputs — detectar data drift' },
        { k: 'prediction', v: '0.87', c: '#f97316', note: 'output do modelo (score ou classe)' },
        { k: 'ground_truth', v: 'null  ← preenchido depois', c: '#f97316', note: 'chega com delay — JOIN com tabela de resultados' },
      ].map(({ k, v, c, note }, i) => (
        <g key={k}>
          <text x="40" y={42 + i * 21} fill={c} fontSize="9" fontWeight="700" fontFamily="monospace">{k}:</text>
          <text x="170" y={42 + i * 21} fill="var(--text-primary)" fontSize="9" fontFamily="monospace">{v}</text>
          <text x="355" y={42 + i * 21} fill="var(--text-secondary)" fontSize="8" fontStyle="italic">← {note}</text>
        </g>
      ))}
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      A estrutura do log de predição deve ser desenhada <strong>antes</strong> do deploy. O campo
      <code style={{ background: 'var(--bg-primary)', padding: '0 4px', borderRadius: 4 }}> request_id</code> é
      o elo entre a predição e o ground truth futuro — sem ele não é possível fechar o loop de avaliação.
    </p>
  </div>
);

// ===== DIAGRAM 7: Proxy Metrics Strategies =====
const ProxyMetricsDiagram = () => {
  const strategies = [
    { label: 'Proxy Metrics', color: '#f97316', desc: 'CTR, tempo de sessão, página seguinte visitada — correlacionam com o resultado real mas chegam mais rápido', delay: '< 1 dia' },
    { label: 'Bandit Feedback', color: '#f97316', desc: 'Exploração aleatória de um subconjunto: force o sistema a revelar ground truth para amostras seleccionadas', delay: '1–7 dias' },
    { label: 'Anotação Humana', color: color, desc: 'Equipa especializada anota amostras prioritárias — caro mas altamente preciso. Usado em decisões de alto risco', delay: '1–5 dias' },
    { label: 'Modelos Proxy', color: '#f97316', desc: 'Treinar um segundo modelo para estimar o ground truth antes de ele chegar — "nowcasting de labels"', delay: '< 1 hora' },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Estratégias para Lidar com Ground Truth Tardio</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', textAlign: 'left' }}>
        {strategies.map(({ label, color: c, desc, delay }) => (
          <div key={label} style={{ background: 'var(--bg-primary)', border: `1.5px solid ${c}40`, borderRadius: 10, padding: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <span style={{ fontWeight: 700, color: c, fontSize: '0.87rem' }}>{label}</span>
              <span style={{ background: `${c}18`, color: c, fontSize: '0.75rem', fontWeight: 700, padding: '0.1rem 0.45rem', borderRadius: 6 }}>delay: {delay}</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function MLOPS5() {
  return (
    <div style={S.page}>
      <Link to="/mlops" style={S.back}><ArrowLeft size={16} /> Voltar a MLOps</Link>

      <div style={S.tag}>MÓDULO 05</div>
      <h1 style={S.h1}>Model Monitoring & Feedback Loop</h1>
      <p style={S.lead}>
        Deploy não é o fim — é o começo. Modelos degradam silenciosamente enquanto o mundo real muda. Um modelo
        com 95% de accuracy no dia do launch pode estar nos 60% passados seis meses, e ninguém sabe. Monitorização
        contínua e um feedback loop robusto são a diferença entre MLOps profissional e "treinar e rezar".
      </p>

      {/* =================== SECTION 1 =================== */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Os 3 Níveis de Monitorização</h2>
        <p style={S.p}>
          A observabilidade de um sistema de ML em produção opera em três camadas complementares — cada uma
          responde a uma pergunta diferente e requer ferramentas distintas. A analogia é a de um hospital: o
          nível 1 sabe se o coração está a bater; o nível 2 sabe se o paciente está saudável; o nível 3 sabe
          porquê é que o diagnóstico está errado.
        </p>
        <MonitoringLevelsDiagram />

        <h3 style={S.h3}>Nível 1 — Resource Monitoring (Infra)</h3>
        <p style={S.p}>
          O nível de base monitoriza a saúde da infraestrutura. Ferramentas standard: <strong>Prometheus</strong>
          para recolha de métricas, <strong>Grafana</strong> para dashboards e alertas,
          <strong> CloudWatch</strong> (AWS) ou <strong>Stackdriver</strong> (GCP) para ambientes cloud.
          As métricas críticas são latência (p95, p99 — não a média!), throughput e taxa de erros.
        </p>
        <div style={S.highlight}>
          <strong>Regra dos 4 noves:</strong> 99.99% de uptime = ~52 minutos de downtime por ano. Para um
          modelo que serve milhares de requests por segundo, cada millisegundo de latência extra traduz-se em
          perda de receita ou experiência degradada. Monitorize sempre os percentis 95 e 99, não a média —
          a média esconde os casos piores que mais afectam utilizadores.
        </div>

        <h3 style={S.h3}>Nível 2 — Model Performance Monitoring</h3>
        <p style={S.p}>
          Este nível responde à pergunta essencial: o modelo ainda está correcto? Requer ground truth —
          o resultado real das predições. Como o ground truth muitas vezes chega com delay (ver Secção 5),
          este nível é frequentemente implementado com latência de horas ou dias, não em tempo real.
          Ferramentas especializadas: <strong>Evidently AI</strong>, <strong>Arize</strong>,
          <strong> WhyLabs</strong>, <strong>MLflow</strong>.
        </p>

        <h3 style={S.h3}>Nível 3 — Prediction Monitoring</h3>
        <p style={S.p}>
          O nível mais avançado monitoriza o comportamento do modelo sem precisar de ground truth. Se a
          distribuição das predições mudar (o modelo começa a predizer muito mais da classe positiva que o
          habitual), algo mudou — mesmo sem saber ainda se as predições estão certas ou erradas. SHAP values
          ao longo do tempo revelam se as features mais importantes mudaram, sinalizando possível data drift.
        </p>
        <div style={S.note}>
          <strong>Ordem de implementação pragmática:</strong> comece pelo Nível 1 (obrigatório para qualquer
          serviço web). Depois implemente Nível 3 (sem dependência de ground truth). Por último, Nível 2
          quando tiver pipeline de ground truth consolidado. Muitas equipas saltam para o Nível 2 e ficam
          presas a aguardar labels — o Nível 3 dá sinal muito mais cedo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* =================== SECTION 2 =================== */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Feedback Loop — Do Log ao Retraining</h2>
        <p style={S.p}>
          O feedback loop é o ciclo completo que transforma predições em produção em dados de treino para a
          próxima versão do modelo. Um loop bem desenhado é <strong>automático</strong> (sem intervenção manual
          para casos de rotina), <strong>auditável</strong> (cada retraining é rastreável) e
          <strong> seguro</strong> (nenhum modelo vai para produção sem validação).
        </p>
        <FeedbackLoopDiagram />

        <h3 style={S.h3}>Estrutura do Log de Predição</h3>
        <p style={S.p}>
          O log de predição é a peça central do feedback loop. Deve ser desenhado cuidadosamente antes do
          primeiro deploy — alterá-lo depois em produção é caro e arriscado.
        </p>
        <ModelLogDiagram />

        <h3 style={S.h3}>Estratégias de Recolha de Ground Truth</h3>
        <p style={S.p}>
          A recolha de ground truth varia enormemente por domínio. Em alguns casos é automática (fraude
          bancária — o chargeback confirma ou não a predição); noutros é manual e cara (diagnóstico médico —
          requer médico especialista). As principais estratégias:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Domínio</th>
                <th style={S.th}>Ground Truth</th>
                <th style={S.th}>Delay típico</th>
                <th style={S.th}>Método de recolha</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Fraude bancária', 'Chargeback confirmado', '30–90 dias', 'Automático via sistema de pagamentos'],
                ['Recomendações', 'Clique, compra, rating', '< 1 hora', 'Event tracking (GA, Segment)'],
                ['Churn prediction', 'Utilizador cancela', '30–365 dias', 'JOIN com tabela de cancelamentos'],
                ['Diagnóstico médico', 'Diagnóstico final do médico', '1–30 dias', 'Anotação humana especializada'],
                ['Spam/Moderação', 'Report de utilizador', '1–7 dias', 'Feedback explícito + revisão humana'],
              ].map(([d, gt, dl, m]) => (
                <tr key={d}>
                  <td style={{ ...S.td, fontWeight: 600, color }}>{d}</td>
                  <td style={S.td}>{gt}</td>
                  <td style={{ ...S.td, color: '#f97316', fontWeight: 600 }}>{dl}</td>
                  <td style={S.td}>{m}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr style={S.divider} />

      {/* =================== SECTION 3 =================== */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Degradação do Modelo ao Longo do Tempo</h2>
        <p style={S.p}>
          Todos os modelos degradam. A questão não é <em>se</em> vão degradar, mas <em>quando</em> e
          <em> porquê</em>. Compreender as causas permite antecipar a degradação e calibrar a frequência
          de monitorização adequada.
        </p>
        <ModelDegradationDiagram />

        <h3 style={S.h3}>Tipos de Degradação</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Tipo</th>
                <th style={S.th}>Causa</th>
                <th style={S.th}>Velocidade</th>
                <th style={S.th}>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Data drift', 'Distribuição dos inputs muda', 'Lenta / gradual', 'Perfil demográfico dos utilizadores envelheceu'],
                ['Concept drift', 'Relação X→Y muda', 'Pode ser abrupta', 'Scammers adaptam padrões ao modelo de detecção'],
                ['Infra / pipeline', 'Bug em preprocessing, novo encoder', 'Imediata', 'Feature normalizada com escala errada em produção'],
                ['Efeitos sazonais', 'Padrões cíclicos', 'Previsível', 'Modelo treinado em Verão falha no Inverno'],
                ['Feature degradation', 'Feature deixa de ser recolhida/relevante', 'Gradual', 'Parceiro de dados muda schema'],
              ].map(([t, c, v, e]) => (
                <tr key={t}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{t}</td>
                  <td style={S.td}>{c}</td>
                  <td style={S.td}>{v}</td>
                  <td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          A degradação por <strong>infra/pipeline</strong> é frequentemente a causa mais comum e mais
          facilmente prevenível — um teste de sanidade no data pipeline (ex: verificar que os valores
          esperados chegam no range correcto) detecta estes problemas em minutos. Monitorize sempre
          a distribuição dos inputs em produção.
        </div>
      </div>

      <hr style={S.divider} />

      {/* =================== SECTION 4 =================== */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Triggers de Retraining</h2>
        <p style={S.p}>
          Retreinar tem custo — computacional, operacional e de risco (um novo modelo pode ser pior).
          Por isso, a decisão de quando retreinar deve ser guiada por dados, não por calendário arbitrário.
          Existem três paradigmas fundamentais:
        </p>
        <RetrainingTriggersDiagram />

        <h3 style={S.h3}>Scheduled Retraining</h3>
        <p style={S.p}>
          O modelo é retreinado periodicamente, independentemente da performance. Simples de implementar
          e suficiente para muitos casos onde o drift é lento e previsível. O risco é retreinar sem
          necessidade (custo) ou não retreinar a tempo de um drift abrupto.
        </p>

        <h3 style={S.h3}>Trigger-Based Retraining</h3>
        <p style={S.p}>
          O retraining é activado quando uma métrica cruza um threshold. Mais eficiente que scheduled
          porque reage apenas quando necessário. O desafio é definir o threshold correctamente — muito
          sensível gera falsos alarmes, muito permissivo deixa o modelo degradar.
        </p>

        <h3 style={S.h3}>Continuous Learning</h3>
        <p style={S.p}>
          O modelo é atualizado continuamente com novos dados (online learning ou fine-tuning frequente).
          Máxima adaptação ao presente, mas requer infra robusta e salvaguardas contra "catastrophic
          forgetting" — o modelo novo pode esquecer padrões raros mas importantes do passado.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Estratégia</th>
                <th style={S.th}>Custo operacional</th>
                <th style={S.th}>Reactividade</th>
                <th style={S.th}>Melhor para</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Scheduled (semanal)', 'Baixo', 'Lenta (max 7 dias)', 'Drift lento, baixo risco'],
                ['Trigger-based', 'Médio', 'Média (horas a dias)', 'Maioria dos casos de produção'],
                ['Continuous learning', 'Alto', 'Alta (minutos)', 'Alta frequência, dados abundantes'],
                ['Híbrido', 'Médio-alto', 'Adaptativa', 'Sistemas críticos de negócio'],
              ].map(([s, c, r, b]) => (
                <tr key={s}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{s}</td>
                  <td style={S.td}>{c}</td>
                  <td style={S.td}>{r}</td>
                  <td style={{ ...S.td, color: 'var(--text-secondary)' }}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr style={S.divider} />

      {/* =================== SECTION 5 =================== */}
      <div style={S.section}>
        <h2 style={S.h2}>5. O Problema do Ground Truth com Delay</h2>
        <p style={S.p}>
          O delay do ground truth é um dos problemas mais subestimados em MLOps real. O modelo faz uma
          predição <InlineMath math="\hat{y}" /> no dia 0, mas o resultado verdadeiro <InlineMath math="y" />
          só é conhecido no dia 30. Durante esses 30 dias, o modelo pode estar completamente errado e
          ninguém sabe.
        </p>
        <GroundTruthDelayDiagram />
        <div style={S.math}>
          <BlockMath math="\text{Evaluation lag} = t_{\text{ground\_truth}} - t_{\text{prediction}}" />
        </div>
        <p style={S.p}>
          O evaluation lag define a janela onde a performance do modelo é "invisível". Quanto maior o lag,
          mais difícil é detectar degradação e mais tarde se activa o retraining.
        </p>
        <ProxyMetricsDiagram />
        <h3 style={S.h3}>Human Annotation Pipelines</h3>
        <p style={S.p}>
          Em domínios críticos (saúde, lei, finanças), o ground truth requer especialistas humanos.
          Um pipeline de anotação típico inclui: <strong>(1)</strong> sampling das predições a anotar
          (estratificado por confidence score ou cohort de risco), <strong>(2)</strong> atribuição a
          anotadores com inter-annotator agreement mínimo, <strong>(3)</strong> resolução de conflitos
          e <strong>(4)</strong> ingestão das anotações no pipeline de retraining. Ferramentas:
          Label Studio, Scale AI, Prodigy.
        </p>
        <div style={S.note}>
          Uma estratégia eficaz é o <strong>Active Learning</strong>: em vez de anotar amostras
          aleatórias, prioriza-se a anotação das predições em que o modelo tem menor confiança
          (alto entropia) — maximiza o valor de cada label obtida com custo humano.
        </div>
      </div>

      <hr style={S.divider} />

      {/* =================== SECTION 6 =================== */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Métricas de Monitorização — Tabela Completa</h2>
        <p style={S.p}>
          A escolha das métricas certas determina se a monitorização detecta problemas reais ou apenas
          gera ruído. A tabela seguinte organiza as métricas por tipo de monitorização.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Métrica</th>
                <th style={S.th}>O que detecta</th>
                <th style={S.th}>Como calcular</th>
                <th style={S.th}>Threshold típico</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Latência p99', 'Problemas de infra, sobrecarga', 'Percentil 99 dos tempos de resposta', '< 200ms (web), < 1s (batch)'],
                ['Taxa de erros HTTP', 'Falhas no serviço, bugs de deploy', '5xx / total requests (%)', '< 0.1%'],
                ['PSI (Population Stability Index)', 'Data drift nos inputs', 'Σ (atual% - ref%) × ln(atual%/ref%)', 'PSI > 0.2 = drift grave'],
                ['KL Divergence', 'Mudança na distribuição das predições', 'Σ P(x) × log(P(x)/Q(x))', 'Alertar quando cresce 2×'],
                ['Accuracy / F1', 'Degradação de performance', 'TP+TN / total (requer ground truth)', 'Queda > 5% → investigar'],
                ['Calibration error (ECE)', 'Probabilidades mal calibradas', 'Σ |acc_bin - conf_bin| × n_bin/n', 'ECE > 0.05 → recalibrar'],
                ['Feature drift (KS test)', 'Data drift por feature', 'Kolmogorov-Smirnov statistic', 'p-value < 0.05 → investigar'],
                ['SHAP importance drift', 'Mudança no que o modelo usa', 'Correlação de Spearman dos SHAP ranks', 'Correlação < 0.8 → atenção'],
              ].map(([m, d, c, t]) => (
                <tr key={m}>
                  <td style={{ ...S.td, fontWeight: 600, color, fontFamily: 'monospace', fontSize: '0.82rem' }}>{m}</td>
                  <td style={S.td}>{d}</td>
                  <td style={{ ...S.td, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{c}</td>
                  <td style={{ ...S.td, fontSize: '0.82rem', fontWeight: 600, color: '#f97316' }}>{t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.highlight}>
          <strong>PSI — Population Stability Index:</strong> a métrica mais usada em produção para detectar
          data drift. Valores entre 0 e 0.1 indicam estabilidade; entre 0.1 e 0.2, mudança moderada que
          requer investigação; acima de 0.2, mudança significativa que provavelmente requer retraining.
        </div>
        <div style={S.math}>
          <BlockMath math="\text{PSI} = \sum_{i=1}^{N} \left( p_i^{\text{atual}} - p_i^{\text{ref}} \right) \times \ln\!\left(\frac{p_i^{\text{atual}}}{p_i^{\text{ref}}}\right)" />
        </div>
      </div>

      <hr style={S.divider} />

      {/* =================== SYNTHESIS =================== */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Síntese do Módulo</h2>
        <p style={S.p}>
          Monitorização não é uma funcionalidade extra — é a diferença entre um modelo que se mantém útil
          e um que se torna uma fonte silenciosa de erros. O feedback loop fecha o ciclo de vida do ML:
          treino, deploy, observação, retraining.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Pontos-chave a reter:</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li>3 níveis de monitorização: Recursos (infra) → Performance (accuracy, requer ground truth) → Predições (comportamento do modelo, sem ground truth)</li>
            <li>O feedback loop fecha com: logs de predições → ground truth → avaliação → alerta → retraining → novo deploy</li>
            <li>Todos os modelos degradam — data drift, concept drift, efeitos sazonais e bugs de pipeline são as causas principais</li>
            <li>O delay do ground truth é o problema mais subestimado — use proxy metrics e bandit feedback para reduzir a janela cega</li>
            <li>3 estratégias de retraining: scheduled (simples), trigger-based (reactivo), continuous learning (máxima adaptação)</li>
            <li>PSI é a métrica de data drift mais usada: PSI &gt; 0.2 indica mudança grave que requer acção</li>
            <li>Log de predição deve incluir sempre: request_id, timestamp, model_version, input_features, prediction, ground_truth (null inicialmente)</li>
            <li>Active Learning maximiza o valor de cada anotação humana ao priorizar os casos de maior incerteza</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
