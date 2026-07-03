import React from 'react';
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
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

// ============================================================
// DIAGRAM 1 — MLFailuresDiagram
// ============================================================
const MLFailuresDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>O Gap entre Laboratório e Produção</p>
    <svg viewBox="0 0 620 210" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-fail1" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#f97316" />
        </marker>
        <marker id="arr-fail2" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#f97316" />
        </marker>
      </defs>

      {/* LEFT BOX — Lab */}
      <rect x="10" y="20" width="185" height="178" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
      <text x="102" y="44" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="800">ML LAB (Jupyter)</text>
      <text x="102" y="62" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">ambiente controlado</text>
      <rect x="25" y="72" width="155" height="26" rx="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="102" y="89" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Accuracy: 90%+</text>
      <rect x="25" y="106" width="155" height="22" rx="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="102" y="121" textAnchor="middle" fill="#f97316" fontSize="9">Dataset limpo e estático</text>
      <rect x="25" y="135" width="155" height="22" rx="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="102" y="150" textAnchor="middle" fill="#f97316" fontSize="9">Python 3.9 local</text>
      <rect x="25" y="162" width="155" height="22" rx="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="102" y="177" textAnchor="middle" fill="#f97316" fontSize="9">Sem monitorização</text>

      {/* GAP ARROW */}
      <path d="M197 100 L285 100" stroke="#f97316" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arr-fail1)" />
      <text x="240" y="92" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">DEPLOY</text>
      <text x="240" y="116" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">??? GAP ???</text>

      {/* RIGHT BOX — Production */}
      <rect x="288" y="20" width="320" height="160" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
      <text x="448" y="44" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="800">PRODUÇÃO</text>
      <text x="448" y="62" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">ambiente real — dados vivos</text>

      {[
        { label: 'Data Drift: distribuição muda com o tempo', y: 78 },
        { label: 'Infra Mismatch: versões diferentes de libs', y: 104 },
        { label: 'Sem Monitoring: falhas silenciosas', y: 130 },
        { label: 'Pipeline Frágil: schema quebrado', y: 156 },
      ].map(({ label, y }) => (
        <g key={y}>
          <text x="302" y={y} fill="#f97316" fontSize="13" fontWeight="800">✕</text>
          <rect x="318" y={y - 13} width="278" height="19" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="0.8" />
          <text x="326" y={y} fill="#f97316" fontSize="8.5" fontWeight="600">{label}</text>
        </g>
      ))}
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      O modelo perfeito no notebook confronta-se com dados reais em mudança, dependências de software
      divergentes e ausência total de observabilidade. MLOps fecha este gap sistematicamente.
    </p>
  </div>
);

// ============================================================
// DIAGRAM 2 — MLOpsVennDiagram
// ============================================================
const MLOpsVennDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>MLOps = ML ∩ Dev ∩ Ops — As Três Disciplinas</p>
    <svg viewBox="0 0 540 320" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* ML circle */}
      <circle cx="200" cy="115" r="100" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
      {/* Dev circle */}
      <circle cx="340" cy="115" r="100" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
      {/* Ops circle */}
      <circle cx="270" cy="215" r="100" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />

      {/* ML label + sub-items */}
      <text x="168" y="72" textAnchor="middle" fill="#f97316" fontSize="13" fontWeight="800">ML</text>
      <text x="165" y="88" textAnchor="middle" fill="#f97316" fontSize="8.5">Treino de Modelos</text>
      <text x="165" y="100" textAnchor="middle" fill="#f97316" fontSize="8.5">Avaliação / Métricas</text>
      <text x="165" y="112" textAnchor="middle" fill="#f97316" fontSize="8.5">Feature Engineering</text>
      <text x="165" y="124" textAnchor="middle" fill="#f97316" fontSize="8.5">Experimentação</text>

      {/* Dev label + sub-items */}
      <text x="360" y="72" textAnchor="middle" fill="#f97316" fontSize="13" fontWeight="800">Dev</text>
      <text x="360" y="88" textAnchor="middle" fill="#f97316" fontSize="8.5">CI/CD Pipelines</text>
      <text x="360" y="100" textAnchor="middle" fill="#f97316" fontSize="8.5">Testes Automatizados</text>
      <text x="360" y="112" textAnchor="middle" fill="#f97316" fontSize="8.5">Code Review</text>
      <text x="360" y="124" textAnchor="middle" fill="#f97316" fontSize="8.5">Versionamento Git</text>

      {/* Ops label + sub-items */}
      <text x="270" y="296" textAnchor="middle" fill="#f97316" fontSize="13" fontWeight="800">Ops</text>
      <text x="270" y="280" textAnchor="middle" fill="#f97316" fontSize="8.5">Monitorização</text>
      <text x="270" y="268" textAnchor="middle" fill="#f97316" fontSize="8.5">Deployment / Serving</text>
      <text x="270" y="256" textAnchor="middle" fill="#f97316" fontSize="8.5">Infra como Código</text>

      {/* Center — MLOps */}
      <text x="270" y="130" textAnchor="middle" fill="var(--text-primary)" fontSize="13" fontWeight="800">MLOps</text>
      <text x="270" y="142" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Reprodutibilidade</text>
      <text x="270" y="152" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Automação • Escalabilidade</text>

      {/* Intersection labels */}
      <text x="210" y="180" textAnchor="middle" fill="#f97316" fontSize="8" fontStyle="italic">ML + Dev:</text>
      <text x="210" y="190" textAnchor="middle" fill="#f97316" fontSize="8" fontStyle="italic">ML Pipelines</text>
      <text x="330" y="185" textAnchor="middle" fill="#f97316" fontSize="8" fontStyle="italic">Dev + Ops:</text>
      <text x="330" y="196" textAnchor="middle" fill="#f97316" fontSize="8" fontStyle="italic">DevOps</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      MLOps não pertence a nenhuma das três disciplinas isoladamente — é precisamente a sua
      interseção que cria o valor diferenciador: modelos que chegam a produção de forma fiável e repetível.
    </p>
  </div>
);

// ============================================================
// DIAGRAM 3 — MLOps5PhasesDiagram
// ============================================================
const MLOps5PhasesDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>O Framework MLOps — 5 Fases com Ciclo de Feedback</p>
    <svg viewBox="0 0 620 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-phase" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--text-secondary)" />
        </marker>
        <marker id="arr-feedback" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#f59e0b" />
        </marker>
      </defs>
      {[
        { n: '1', label: 'Scope', sub: 'Definir\nproblema', x: 50, c: '#f97316' },
        { n: '2', label: 'Data', sub: 'Recolha &\nvalidação', x: 163, c: '#f97316' },
        { n: '3', label: 'Model', sub: 'Treino &\navaliação', x: 276, c: '#f97316' },
        { n: '4', label: 'Deploy', sub: 'Serving &\nCI/CD', x: 389, c: '#f97316' },
        { n: '5', label: 'Monitor', sub: 'Drift &\nalertas', x: 502, c: '#f97316' },
      ].map(({ n, label, sub, x, c }, i) => (
        <g key={i}>
          {/* Number badge */}
          <circle cx={x} cy="28" r="14" fill={c} />
          <text x={x} y="33" textAnchor="middle" fill="white" fontSize="11" fontWeight="800">{n}</text>
          {/* Box */}
          <rect x={x - 48} y="50" width="96" height="72" rx="9" fill={`${c}18`} stroke={c} strokeWidth="1.8" />
          <text x={x} y="74" textAnchor="middle" fill={c} fontSize="11.5" fontWeight="800">{label}</text>
          {sub.split('\n').map((line, li) => (
            <text key={li} x={x} y={92 + li * 14} textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">{line}</text>
          ))}
          {/* Arrow to next */}
          {i < 4 && (
            <path d={`M${x + 50} 86 L${x + 63} 86`} stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-phase)" />
          )}
        </g>
      ))}
      {/* Feedback loop */}
      <path d="M550 122 C 570 155, 570 165, 310 165 C 50 165, 50 155, 50 122"
        fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeDasharray="6,4" markerEnd="url(#arr-feedback)" />
      <text x="310" y="160" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">Feedback: retraining automático quando drift detectado</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      O ciclo de feedback (Monitor → Data) é a característica mais distintiva do MLOps face ao DevOps
      tradicional: o modelo em produção gera sinais que alimentam o próximo ciclo de treino.
    </p>
  </div>
);

// ============================================================
// DIAGRAM 4 — RiskMatrixDiagram
// ============================================================
const RiskMatrixDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Risk Matrix — Onde Posicionar os Falhas de ML</p>
    <svg viewBox="0 0 500 340" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-axis" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* Axis arrows */}
      <line x1="60" y1="280" x2="60" y2="20" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-axis)" />
      <line x1="60" y1="280" x2="470" y2="280" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-axis)" />

      {/* Axis labels */}
      <text x="265" y="315" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700">Probabilidade de Ocorrência →</text>
      <text x="18" y="155" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700" transform="rotate(-90,18,155)">↑ Impacto no Negócio</text>

      {/* Quadrant grid */}
      <rect x="60" y="150" width="200" height="130" fill="rgba(245,158,11,0.10)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="160" y="240" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">BAIXA PROB / ALTO IMPACTO</text>
      <text x="160" y="250" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Monitorizar & plano de contingência</text>

      <rect x="260" y="150" width="200" height="130" fill="rgba(249,115,22,0.10)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="360" y="240" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">ALTA PROB / ALTO IMPACTO</text>
      <text x="360" y="250" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Mitigar prioritariamente</text>

      <rect x="60" y="20" width="200" height="130" fill="rgba(249,115,22,0.10)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="160" y="38" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">BAIXA PROB / BAIXO IMPACTO</text>
      <text x="160" y="49" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Aceitar risco</text>

      <rect x="260" y="20" width="200" height="130" fill="rgba(59,130,246,0.10)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="360" y="38" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">ALTA PROB / BAIXO IMPACTO</text>
      <text x="360" y="49" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Automatizar & corrigir</text>

      {/* Risk dots */}
      {[
        { label: 'Model Staleness', cx: 350, cy: 215, c: '#f97316', desc: 'Modelo desactualizado' },
        { label: 'Data Drift', cx: 400, cy: 180, c: '#f97316', desc: 'Distribuição muda' },
        { label: 'Infra Outage', cx: 120, cy: 195, c: '#f97316', desc: 'Infra em baixo' },
        { label: 'Schema Break', cx: 340, cy: 65, c: '#f97316', desc: 'Campo eliminado' },
        { label: 'Seed Variance', cx: 120, cy: 70, c: '#f97316', desc: 'Random seeds' },
      ].map(({ label, cx, cy, c, desc }) => (
        <g key={label}>
          <circle cx={cx} cy={cy} r="13" fill={c} opacity="0.85" />
          <text x={cx} y={cy + 4} textAnchor="middle" fill="white" fontSize="7" fontWeight="700">{label.split(' ')[0]}</text>
          <text x={cx + 16} y={cy - 2} fill={c} fontSize="8" fontWeight="600">{label}</text>
          <text x={cx + 16} y={cy + 10} fill="var(--text-secondary)" fontSize="7">{desc}</text>
        </g>
      ))}

      {/* Quadrant dividers */}
      <line x1="260" y1="20" x2="260" y2="280" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="4,3" />
      <line x1="60" y1="150" x2="460" y2="150" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="4,3" />
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      A Risk Matrix ajuda a priorizar onde investir esforço de MLOps. Falhas de alto impacto e alta
      probabilidade — como Model Staleness e Data Drift — devem ter mitigação activa (monitorização contínua,
      retraining automático). Falhas de baixa probabilidade e baixo impacto podem ser apenas documentadas.
    </p>
  </div>
);

// ============================================================
// DIAGRAM 5 — ReproducibilityDiagram
// ============================================================
const ReproducibilityDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Os 3 Pilares da Reprodutibilidade em MLOps</p>
    <svg viewBox="0 0 540 230" style={{ maxWidth: '100%', height: 'auto' }}>
      {[
        {
          title: 'Código',
          sub: 'Git + Tags',
          tools: ['git tag v1.0', 'branches por experimento', 'commits atómicos', 'pre-commit hooks'],
          c: '#f97316', x: 30,
          icon: [
            { type: 'rect', props: { x: 95, y: 36, width: 50, height: 40, rx: 5, fill: 'rgba(249,115,22,0.10)', stroke: '#f97316', strokeWidth: 1.5 } },
            { type: 'text', props: { x: 120, y: 58, textAnchor: 'middle', fill: '#f97316', fontSize: 10, fontWeight: 700, children: 'Git' } },
          ]
        },
        {
          title: 'Dados',
          sub: 'DVC / Delta Lake',
          tools: ['dvc add data/', 'dvc push (S3)', 'git tag v1.0-data', 'data lineage'],
          c: '#f97316', x: 200,
          icon: []
        },
        {
          title: 'Ambiente',
          sub: 'Docker / conda',
          tools: ['Dockerfile', 'requirements.txt', 'conda env export', 'cuda version pin'],
          c: '#f97316', x: 370,
          icon: []
        },
      ].map(({ title, sub, tools, c, x }, i) => (
        <g key={i}>
          {/* Column box */}
          <rect x={x} y="15" width="140" height="195" rx="10" fill={`${c}0f`} stroke={c} strokeWidth="1.8" />
          {/* Header */}
          <rect x={x} y="15" width="140" height="38" rx="10" fill={`${c}25`} />
          <rect x={x} y="35" width="140" height="18" fill={`${c}25`} />
          <text x={x + 70} y="36" textAnchor="middle" fill={c} fontSize="12" fontWeight="800">{title}</text>
          <text x={x + 70} y="50" textAnchor="middle" fill={c} fontSize="9">{sub}</text>
          {/* Tool pills */}
          {tools.map((t, ti) => (
            <g key={ti}>
              <rect x={x + 10} y={66 + ti * 33} width="120" height="24" rx="5" fill={`${c}15`} stroke={`${c}40`} strokeWidth="1" />
              <text x={x + 70} y={82 + ti * 33} textAnchor="middle" fill={c} fontSize="9" fontFamily="monospace">{t}</text>
            </g>
          ))}
        </g>
      ))}
      {/* Connectors between columns */}
      <rect x="170" y="102" width="30" height="20" rx="4" fill="rgba(249,115,22,0.10)" />
      <text x="185" y="115" textAnchor="middle" fill="var(--text-secondary)" fontSize="12" fontWeight="700">+</text>
      <rect x="340" y="102" width="30" height="20" rx="4" fill="rgba(249,115,22,0.10)" />
      <text x="355" y="115" textAnchor="middle" fill="var(--text-secondary)" fontSize="12" fontWeight="700">+</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Reprodutibilidade perfeita requer os três pilares em conjunto. Versionar apenas o código é insuficiente
      — se os dados ou as versões de bibliotecas mudarem, o mesmo código produz resultados diferentes.
      Um experimento é reprodutível quando dado o mesmo <strong>código + dados + ambiente</strong> produz
      exactamente o mesmo resultado.
    </p>
  </div>
);

// ============================================================
// DIAGRAM 6 — MLOpsLevelssDiagram
// ============================================================
const MLOpsLevelsDiagram = () => {
  const levels = [
    { n: '0', title: 'Manual', color: '#f97316', w: 80, items: ['Jupyter notebooks', 'Deploy manual', 'Sem CI/CD', 'Sem monitorização'] },
    { n: '1', title: 'Pipeline Auto', color: '#f97316', w: 80, items: ['Treino automático', 'Trigger de retraining', 'CT Pipeline', 'Monitorização básica'] },
    { n: '2', title: 'CI/CD MLOps', color: '#f97316', w: 80, items: ['CI/CD para modelos', 'Testes automáticos', 'Model Registry', 'A/B testing'] },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Níveis de Maturidade MLOps (Google Framework)</p>
      <svg viewBox="0 0 560 230" style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="arr-lvl" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--text-secondary)" />
          </marker>
        </defs>
        {levels.map(({ n, title, color: c, items }, i) => {
          const x = 30 + i * 180;
          const height = 155 + i * 15;
          const y = 210 - height;
          return (
            <g key={i}>
              <rect x={x} y={y} width="150" height={height} rx="8" fill={`${c}14`} stroke={c} strokeWidth="2" />
              <circle cx={x + 75} cy={y + 22} r="16" fill={c} />
              <text x={x + 75} y={y + 28} textAnchor="middle" fill="white" fontSize="13" fontWeight="800">{n}</text>
              <text x={x + 75} y={y + 50} textAnchor="middle" fill={c} fontSize="11" fontWeight="700">{title}</text>
              {items.map((item, ii) => (
                <g key={ii}>
                  <circle cx={x + 22} cy={y + 66 + ii * 24} r="3" fill={c} />
                  <text x={x + 32} y={y + 70 + ii * 24} fill="var(--text-primary)" fontSize="8.5">{item}</text>
                </g>
              ))}
              {i < 2 && (
                <path d={`M${x + 152} ${y + 80} L${x + 178} ${y + 80}`} stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-lvl)" />
              )}
            </g>
          );
        })}
        <text x="280" y="225" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">progressão de maturidade organizacional →</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Nível 0 representa a maioria das equipas hoje. O Nível 2 é o estado da arte em organizações como
        Google, Netflix e Uber — mas mesmo o Nível 1 (treino automático com trigger em novos dados) representa
        um salto enorme face ao processo manual.
      </p>
    </div>
  );
};

// ============================================================
// DIAGRAM 7 — DevOpsVsMLOpsDiagram
// ============================================================
const DevOpsVsMLOpsDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>DevOps vs. MLOps — Ciclo de Vida Comparado</p>
    <svg viewBox="0 0 580 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-cmp" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      {/* DevOps row */}
      <text x="10" y="50" fill="#f97316" fontSize="10" fontWeight="800">DevOps</text>
      {['Code', 'Build', 'Test', 'Release', 'Deploy', 'Monitor'].map((s, i) => (
        <g key={s}>
          <rect x={70 + i * 82} y="30" width="70" height="32" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.3" />
          <text x={70 + i * 82 + 35} y="50" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">{s}</text>
          {i < 5 && <path d={`M${140 + i * 82} 46 L${150 + i * 82} 46`} stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-cmp)" />}
        </g>
      ))}
      {/* MLOps row */}
      <text x="10" y="130" fill="#f97316" fontSize="10" fontWeight="800">MLOps</text>
      {['Data', 'Train', 'Eval', 'Register', 'Serve', 'Monitor'].map((s, i) => (
        <g key={s}>
          <rect x={70 + i * 82} y="110" width="70" height="32" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.3" />
          <text x={70 + i * 82 + 35} y="130" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">{s}</text>
          {i < 5 && <path d={`M${140 + i * 82} 126 L${150 + i * 82} 126`} stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-cmp)" />}
        </g>
      ))}
      {/* Diff annotations */}
      <path d="M105 62 L105 110" stroke="#f97316" strokeWidth="1" strokeDasharray="3,3" />
      <text x="105" y="90" textAnchor="middle" fill="#f97316" fontSize="7">+ Data</text>
      <text x="105" y="99" textAnchor="middle" fill="#f97316" fontSize="7">Validation</text>
      <path d="M270 62 L270 110" stroke="#f97316" strokeWidth="1" strokeDasharray="3,3" />
      <text x="270" y="88" textAnchor="middle" fill="#f97316" fontSize="7">+ Model</text>
      <text x="270" y="97" textAnchor="middle" fill="#f97316" fontSize="7">Evaluation</text>
      <path d="M434 62 L434 110" stroke="#f97316" strokeWidth="1" strokeDasharray="3,3" />
      <text x="434" y="88" textAnchor="middle" fill="#f97316" fontSize="7">+ Model</text>
      <text x="434" y="97" textAnchor="middle" fill="#f97316" fontSize="7">Registry</text>
      <text x="290" y="185" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">MLOps adiciona etapas específicas de ML ao ciclo DevOps</text>
    </svg>
  </div>
);

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function MLOPS1() {
  return (
    <div style={S.page}>
      <Link to="/mlops" style={S.back}><ArrowLeft size={16} /> Voltar a MLOps</Link>

      <div style={S.tag}>MÓDULO 01</div>
      <h1 style={S.h1}>Fundamentos de MLOps</h1>
      <p style={S.lead}>
        Cerca de 90% dos modelos de Machine Learning nunca chegam a produção. Dos que chegam, muitos
        degradam silenciosamente durante semanas sem que ninguém detecte o problema. MLOps — a interseção
        de Machine Learning, Engenharia de Software e Operações — existe precisamente para resolver isto:
        transformar protótipos de laboratório em sistemas fiáveis, reprodutíveis e monitorizados.
        Este módulo constrói os fundamentos conceptuais e o framework de 5 fases que orienta todos os
        módulos seguintes.
      </p>

      {/* ===== SECTION 1 ===== */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Por Que Falha o ML em Produção</h2>
        <p style={S.p}>
          Um modelo treinado num notebook Jupyter pode atingir 90% de accuracy, passar por horas de
          experimentação e validação cruzada — e ainda assim falhar espectacularmente quando exposto a
          dados reais. Esta discrepância entre laboratório e produção tem causas bem documentadas e,
          na sua maioria, completamente evitáveis.
        </p>
        <MLFailuresDiagram />
        <h3 style={S.h3}>Os 5 Modos de Falha Mais Comuns</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Modo de Falha</th>
                <th style={S.th}>Descrição</th>
                <th style={S.th}>Consequência</th>
                <th style={S.th}>Solução MLOps</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Data Drift', 'A distribuição dos dados de entrada muda ao longo do tempo relativamente ao conjunto de treino', 'Degradação progressiva e silenciosa da performance do modelo', 'Monitorização contínua de distribuições + retraining automático'],
                ['Infra Mismatch', 'Versões de bibliotecas, Python ou CUDA diferem entre treino e produção', 'Resultados numericamente diferentes ou erros de runtime', 'Docker containers com versões fixas + testes de integração'],
                ['Sem Monitorização', 'O modelo produz previsões mas ninguém verifica se continuam correctas', 'Falhas descobertas semanas depois, já com impacto no negócio', 'Dashboards automáticos + alertas baseados em limiares'],
                ['Pipeline Frágil', 'Mudança no schema dos dados upstream (ex: campo removido) quebra silenciosamente o pipeline', 'Previsões erradas sem erro visível', 'Data contracts com Great Expectations + testes de schema'],
                ['Falta de Reprodutibilidade', 'Impossível reproduzir o modelo de 3 meses atrás porque não foi versionado código, dados e ambiente', 'Impossibilidade de debugging ou rollback em caso de falha', 'Git + DVC + MLflow + Docker'],
              ].map(([m, d, c, s]) => (
                <tr key={m}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{m}</td>
                  <td style={S.td}>{d}</td>
                  <td style={{ ...S.td, color: '#f97316', fontSize: '0.85rem' }}>{c}</td>
                  <td style={{ ...S.td, color: '#f97316', fontSize: '0.85rem' }}>{s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.highlight}>
          <strong>Estatística de referência:</strong> Segundo o estudo Gartner 2022, apenas 53% dos
          projectos de IA/ML passam da fase de protótipo para produção. Dos que passam, 40% são
          abandonados nos primeiros 6 meses por dificuldades operacionais. MLOps existe para inverter
          esta tendência.
        </div>
        <p style={S.p}>
          O modelo matemático subjacente ao problema de data drift pode ser formalizado como uma
          mudança na distribuição conjunta entre treino e produção:
        </p>
        <div style={S.math}>
          <BlockMath math="P_{\text{train}}(X, Y) \neq P_{\text{prod}}(X, Y)" />
        </div>
        <p style={S.p}>
          Esta diferença pode ocorrer a três níveis: <strong>covariate shift</strong> — apenas
          <InlineMath math="P(X)" /> muda, mas <InlineMath math="P(Y|X)" /> mantém-se (os inputs
          mudam mas a relação permanece); <strong>label shift</strong> — apenas
          <InlineMath math="P(Y)" /> muda; ou <strong>concept drift</strong> — a própria relação
          <InlineMath math="P(Y|X)" /> muda (o que era fraudulento no passado já não o é hoje).
        </p>
        <div style={S.note}>
          O Data Drift é particularmente insidioso porque não gera erros — o modelo continua a
          produzir previsões com confiança, mas essas previsões tornam-se progressivamente incorrectas.
          Sem monitorização, este tipo de falha pode passar despercebido durante meses.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ===== SECTION 2 ===== */}
      <div style={S.section}>
        <h2 style={S.h2}>2. MLOps = ML + Dev + Ops</h2>
        <p style={S.p}>
          MLOps não é uma ferramenta nem um produto — é uma disciplina que emerge da interseção de
          três campos distintos, cada um contribuindo com práticas, ferramentas e cultura que,
          individualmente, são insuficientes para levar modelos a produção de forma sustentável.
        </p>
        <MLOpsVennDiagram />
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Disciplina</th>
                <th style={S.th}>O que contribui</th>
                <th style={S.th}>Sem a outra disciplina...</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Machine Learning', 'Algoritmos de treino, métricas de avaliação, feature engineering, experimentação científica', 'ML sem Dev/Ops = ciência que nunca chega ao utilizador'],
                ['Software Dev', 'CI/CD pipelines, testes automatizados, code review, versionamento, modularidade', 'Dev sem ML = software que não aprende nem adapta'],
                ['Operations', 'Monitorização de sistemas, deployment, escalabilidade, incident response, SLAs', 'Ops sem ML = sistemas que não se adaptam a padrões complexos'],
              ].map(([d, c, s]) => (
                <tr key={d}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{d}</td>
                  <td style={S.td}>{c}</td>
                  <td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem', fontStyle: 'italic' }}>{s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          A analogia com DevOps é útil mas incompleta. DevOps uniu Dev e Ops para acelerar o delivery
          de software. MLOps faz o mesmo, mas com uma camada adicional de complexidade: o
          <strong> modelo é um artefacto que depende de dados</strong> — e os dados mudam. Isso significa
          que o "código" em MLOps inclui não só o software, mas também os dados e o modelo em si,
          todos precisando de versionamento, testes e deployment coordenado.
        </p>
        <DevOpsVsMLOpsDiagram />
        <div style={S.note}>
          <strong>Analogia:</strong> Um cientista de dados sem MLOps é como um chef que cozinha
          excepcionalmente bem num restaurante com 10 clientes, mas não consegue garantir consistência,
          velocidade ou qualidade quando o restaurante escala para 500 clientes por hora. MLOps é
          o sistema de gestão de cozinha industrial.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ===== SECTION 3 ===== */}
      <div style={S.section}>
        <h2 style={S.h2}>3. O Framework MLOps — 5 Fases</h2>
        <p style={S.p}>
          O ciclo de vida de um projecto MLOps organiza-se em cinco fases que se repetem iterativamente.
          Ao contrário de um projeto de software tradicional onde o ciclo termina no deploy, em MLOps
          o Monitor retroalimenta o Data — criando um ciclo contínuo de melhoria.
        </p>
        <MLOps5PhasesDiagram />
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Fase</th>
                <th style={S.th}>Actividades Principais</th>
                <th style={S.th}>Deliverables</th>
                <th style={S.th}>Ferramentas</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1. Scope', 'Definir problema de negócio, métricas de sucesso, SLAs, orçamento de dados, casos de borda', 'Problem Statement, Success Criteria, Risk Register', 'Confluence, Miro, Jira'],
                ['2. Data', 'Ingestão, limpeza, validação de qualidade, feature engineering, data contracts, versionamento', 'Expectation Suite (GE), Feature Catalog, DVC pipeline', 'DVC, Great Expectations, Feast, Airflow'],
                ['3. Model', 'Experimentação, seleção de arquitectura, treino, avaliação, tracking de hiperparâmetros', 'Model artefact, experiment logs, evaluation report', 'MLflow, Weights & Biases, Optuna, sklearn'],
                ['4. Deploy', 'Containerização, CI/CD pipeline, staging environment, canary deployment, A/B tests', 'Docker image, API endpoint, deployment manifest', 'Docker, FastAPI, BentoML, Kubernetes, ArgoCD'],
                ['5. Monitor', 'Métricas de sistema (latência, throughput), performance do modelo, detecção de drift, alertas', 'Monitoring dashboards, drift reports, retraining triggers', 'Evidently AI, Prometheus, Grafana, Arize'],
              ].map(([f, a, d, t]) => (
                <tr key={f}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{f}</td>
                  <td style={S.td}>{a}</td>
                  <td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{d}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 style={S.h3}>Feedback Loop: o Diferencial do MLOps</h3>
        <p style={S.p}>
          A característica mais distintiva do ciclo MLOps face ao ciclo DevOps tradicional é o
          <strong> loop de feedback automático</strong>: quando a fase de Monitorização detecta data
          drift ou degradação de performance, dispara automaticamente um novo ciclo de recolha de dados
          e retraining. Nos sistemas mais maduros (Nível 2), este loop é completamente automático — o
          modelo actualiza-se sozinho sem intervenção humana.
        </p>
        <div style={S.note}>
          A transição da Fase 5 (Monitor) de volta à Fase 2 (Data) não é um sinal de falha — é o
          funcionamento esperado e desejado de um sistema MLOps maduro. Um modelo que nunca é retreinado
          é um modelo que está, por definição, a degradar.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ===== SECTION 4 ===== */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Risk Matrix para Projectos ML</h2>
        <p style={S.p}>
          Nem todos os projectos de ML requerem o mesmo nível de investimento em MLOps. A Risk Matrix
          é uma ferramenta de priorização que posiciona os riscos de um projecto em duas dimensões:
          <strong> probabilidade de ocorrência</strong> e <strong>impacto no negócio</strong>.
        </p>
        <RiskMatrixDiagram />
        <h3 style={S.h3}>Como Usar a Risk Matrix num Projecto ML</h3>
        <p style={S.p}>
          O processo de utilização da Risk Matrix num projecto ML começa por listar todos os riscos
          potenciais — técnicos, de dados, de negócio — e posicioná-los nos quadrantes. O quadrante
          mais crítico (alta probabilidade, alto impacto) deve ter mitigação activa imediata.
          Os riscos de alto impacto mas baixa probabilidade merecem um plano de contingência.
          Os de alta probabilidade mas baixo impacto devem ser automatizados para resolução rápida.
          Só os de baixa probabilidade e baixo impacto podem ser aceites sem acção.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Risco ML</th>
                <th style={S.th}>Probabilidade</th>
                <th style={S.th}>Impacto</th>
                <th style={S.th}>Quadrante</th>
                <th style={S.th}>Acção</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Model Staleness', 'Alta (dados mudam)', 'Alto (erros sistémicos)', 'Critico', 'Monitorização + retraining automático'],
                ['Data Drift', 'Alta (mundo real)', 'Alto (degradação)', 'Crítico', 'Statistical tests periódicos + alertas'],
                ['Infrastructure Outage', 'Baixa (infra estável)', 'Alto (downtime total)', 'Contingência', 'Redundância + fallback model'],
                ['Schema Break', 'Média (pipelines complexos)', 'Médio (pipeline falha)', 'Automatizar', 'Data contracts + testes de schema'],
                ['Seed Variance', 'Baixa (controlável)', 'Baixo (resultados ligeiramente diferentes)', 'Aceitar', 'Documentar seeds'],
              ].map(([r, p, i, q, a]) => (
                <tr key={r}>
                  <td style={{ ...S.td, fontWeight: 700 }}>{r}</td>
                  <td style={S.td}>{p}</td>
                  <td style={S.td}>{i}</td>
                  <td style={{ ...S.td, fontWeight: 700, color: q === 'Crítico' || q === 'Critico' ? '#f97316' : q === 'Contingência' ? '#f97316' : '#f97316' }}>{q}</td>
                  <td style={{ ...S.td, fontSize: '0.85rem', color: '#f97316' }}>{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <MLOpsLevelsDiagram />
      </div>

      <hr style={S.divider} />

      {/* ===== SECTION 5 ===== */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Reprodutibilidade e Versionamento</h2>
        <p style={S.p}>
          Um experimento de ML é reprodutível quando, dado o mesmo código, os mesmos dados e o mesmo
          ambiente de execução, produz exactamente os mesmos resultados. Na prática, reprodutibilidade
          total é difícil — mesmo com os três pilares, operações não-determinísticas em GPUs ou
          paralelismo podem introduzir variação. O objectivo é minimizar as fontes de variação e
          tornar qualquer resultado rastreável e recuperável.
        </p>
        <ReproducibilityDiagram />
        <h3 style={S.h3}>Ferramentas por Pilar</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Pilar</th>
                <th style={S.th}>Problema</th>
                <th style={S.th}>Ferramenta</th>
                <th style={S.th}>Prática</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Código', 'Versão do script usada no treino desconhecida', 'Git + MLflow', 'Tag cada experimento com commit hash; log do git SHA no MLflow run'],
                ['Dados', 'Dados de treino mudaram desde o último run', 'DVC (Data Version Control)', 'dvc add data/train.csv; dvc push; associar data hash ao modelo'],
                ['Ambiente', '"Funciona na minha máquina" — versões de sklearn/numpy divergem', 'Docker + conda', 'Dockerfile com FROM python:3.10.x; requirements.txt com versões fixas'],
                ['Modelo', 'Impossível saber qual versão de modelo está em produção', 'MLflow Model Registry', 'Registar modelo com version, stage (Staging/Production), e aliases'],
                ['Hiperparâmetros', 'Grid search de semana passada impossível de recuperar', 'MLflow / W&B', 'mlflow.log_params({...}); log de todos os hiperparâmetros automaticamente'],
              ].map(([p, pr, f, pc]) => (
                <tr key={p}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{p}</td>
                  <td style={S.td}>{pr}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.85rem', color: '#f97316' }}>{f}</td>
                  <td style={{ ...S.td, fontSize: '0.85rem' }}>{pc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.highlight}>
          <strong>Padrão recomendado — MLflow + DVC + Git:</strong> cada MLflow run guarda
          automaticamente o git commit hash, os parâmetros, as métricas e o artefacto do modelo.
          O DVC garante que os dados associados a esse commit são recuperáveis. O resultado é um
          "trilho de auditoria" completo: dado um modelo em produção, é possível reconstruir
          exactamente o experimento que o gerou.
        </div>
        <div style={S.math}>
          <BlockMath math="\text{Reproducibility} = f(\underbrace{\text{code}_{v}}_{\text{Git SHA}} + \underbrace{\text{data}_{v}}_{\text{DVC hash}} + \underbrace{\text{env}_{v}}_{\text{Docker image hash}})" />
        </div>
      </div>

      <hr style={S.divider} />

      {/* ===== SECTION 6 ===== */}
      <div style={S.section}>
        <h2 style={S.h2}>6. DevOps Principles Aplicados a ML</h2>
        <p style={S.p}>
          MLOps herda muitos princípios do DevOps, adaptando-os às especificidades do ciclo de vida
          de modelos. A tabela seguinte mostra como cada princípio DevOps se traduz em prática concreta
          no contexto de ML.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Princípio DevOps</th>
                <th style={S.th}>Definição Original</th>
                <th style={S.th}>Aplicação em ML</th>
                <th style={S.th}>Exemplo Concreto</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Infrastructure as Code', 'Definir infra em ficheiros versionados, não cliques manuais', 'Ambientes de treino reprodutíveis como código', 'Dockerfile + conda environment.yml + Terraform para GPU clusters'],
                ['Continuous Integration', 'Integrar código frequentemente com testes automáticos', 'Testar dados e modelos a cada push', 'GitHub Actions: GE validation + unit tests + modelo baseline check'],
                ['Continuous Delivery', 'Qualquer versão pode ser deployada a qualquer momento', 'Qualquer modelo aprovado pode ir a produção em minutos', 'MLflow Model Registry + BentoML + Kubernetes rolling deploy'],
                ['Monitoring & Observability', 'Medir tudo em produção, alertar anomalias', 'Monitorizar não só infraestrutura mas performance do modelo', 'Evidently AI para drift + Prometheus para latência + Grafana dashboards'],
                ['Shift Left Testing', 'Testar mais cedo no ciclo de desenvolvimento', 'Validar dados antes de treinar, não depois', 'Great Expectations no início do pipeline, antes de qualquer feature engineering'],
                ['Fail Fast', 'Detectar e comunicar falhas o mais cedo possível', 'Pipeline falha explicitamente se dados não cumprem contrato', 'GE checkpoint levanta DataValidationError antes de desperdiçar horas de treino'],
                ['GitOps', 'Git como source of truth para todo o estado do sistema', 'Code + config + data refs + model versions em Git', 'dvc.yaml (pipeline) + params.yaml (hiperparâmetros) + .dvc files (data refs)'],
              ].map(([p, d, a, e]) => (
                <tr key={p}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{p}</td>
                  <td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{d}</td>
                  <td style={S.td}>{a}</td>
                  <td style={{ ...S.td, fontSize: '0.82rem', fontFamily: 'monospace', color: '#f97316' }}>{e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          A diferença mais profunda entre DevOps e MLOps reside no conceito de <strong>modelo como
          artefacto de primeira classe</strong>. Em DevOps, o artefacto central é o executável (jar,
          container image, binário). Em MLOps, existem três artefactos co-dependentes: o código do
          pipeline, os dados de treino e o modelo resultante — e cada um precisa de versionamento
          independente e rastreabilidade cruzada.
        </p>
        <div style={S.note}>
          Um princípio fundamental que não existe em DevOps mas é central em MLOps: o
          <strong> princípio da estacionariedade</strong>. Um sistema de software produz o mesmo
          output dado o mesmo input, indefinidamente. Um modelo ML produz o mesmo output dado o mesmo
          input — mas o mundo muda, e o que era um bom input ontem pode ser um input anómalo amanhã.
          Daí a necessidade de monitorização contínua.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ===== SYNTHESIS ===== */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Síntese do Módulo</h2>
        <p style={S.p}>
          MLOps é a resposta sistemática ao problema de levar modelos de ML do laboratório para
          produção de forma fiável, reprodutível e escalável. Não é um produto nem uma ferramenta
          singular — é uma disciplina que combina práticas de ML, Engenharia de Software e Operações
          num framework coerente de 5 fases.
        </p>
        
          <strong>Pontos-chave a reter:</strong>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', lineHeight: 2 }}>
            <li>90% dos modelos falham em produção — as causas são previsíveis: drift, infra mismatch, pipelines frágeis, falta de monitorização</li>
            <li>MLOps = ML ∩ Dev ∩ Ops — cada disciplina contribui com práticas indispensáveis; nenhuma é suficiente sozinha</li>
            <li>O framework de 5 fases: Scope → Data → Model → Deploy → Monitor, com feedback loop automático de Monitor para Data</li>
            <li>A Risk Matrix ajuda a calibrar o investimento em MLOps proporcionalmente ao risco e impacto do projecto</li>
            <li>Reprodutibilidade requer 3 pilares em conjunto: versionamento de código (Git), de dados (DVC) e de ambiente (Docker/conda)</li>
            <li>DevOps principles — IaC, CI/CD, Shift Left, Fail Fast — aplicam-se a ML com adaptações específicas para dados e modelos</li>
            <li>Os 3 níveis de maturidade MLOps (0: manual, 1: pipeline auto, 2: CI/CD completo) definem o caminho de evolução organizacional</li>
            <li>Data Drift é a ameaça mais insidiosa: <InlineMath math="P_{\text{train}}(X,Y) \neq P_{\text{prod}}(X,Y)" /> — pode passar meses sem ser detectado</li>
          </ul>
        
      </div>
    </div>
  );
}
