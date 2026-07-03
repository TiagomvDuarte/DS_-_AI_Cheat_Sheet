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
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

/* ─────────────────────────────────────────────
   DIAGRAM 1 — Virtualization Comparison
───────────────────────────────────────────── */
const VirtualizationComparisonDiagram = () => {
  // Layout constants — 3 equal columns
  const colW = 190, gap = 10, padL = 8;
  const c1x = padL;                        // col1 start x
  const c2x = padL + colW + gap;           // col2 start x  (208)
  const c3x = padL + 2 * (colW + gap);     // col3 start x  (408)
  const svgW = padL + 3 * colW + 2 * gap + padL; // 604
  const bh = 30, rowGap = 8;
  const subW = (colW - 4) / 2;            // half-width for side-by-side boxes

  const box = (x, y, w, label, c, fs = 9) => (
    <g key={`${x}-${y}-${label}`}>
      <rect x={x} y={y} width={w} height={bh} rx="5" fill={`${c}22`} stroke={c} strokeWidth="1.4" />
      <text x={x + w / 2} y={y + bh / 2 + 4} textAnchor="middle" fill={c} fontSize={fs} fontWeight="600">{label}</text>
    </g>
  );

  const y = (row) => 52 + row * (bh + rowGap);

  return (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Comparação: Tradicional vs. VMs vs. Containers</p>
    <svg viewBox={`0 0 ${svgW} 285`} style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Headers */}
      {[
        { label: 'Tradicional', cx: c1x + colW / 2, c: '#fb923c' },
        { label: 'Virtual Machine', cx: c2x + colW / 2, c: '#f97316' },
        { label: 'Docker Container', cx: c3x + colW / 2, c: color },
      ].map(({ label, cx, c }) => (
        <g key={label}>
          <rect x={cx - colW / 2} y={10} width={colW} height={30} rx="6" fill={`${c}22`} stroke={c} strokeWidth="1.5" />
          <text x={cx} y={30} textAnchor="middle" fill={c} fontSize="10" fontWeight="700">{label}</text>
        </g>
      ))}

      {/* Traditional */}
      {box(c1x, y(0), colW, 'App A', '#f97316')}
      {box(c1x, y(1), colW, 'App B', '#f97316')}
      {box(c1x, y(2), colW, 'Runtime (Python, Java...)', '#fb923c', 8)}
      {box(c1x, y(3), colW, 'OS Completo', '#fdba74')}
      {box(c1x, y(4), colW, 'Hardware Físico', '#fdba74')}

      {/* VM */}
      {box(c2x,          y(0), subW, 'App A',     '#f97316')}
      {box(c2x + subW + 4, y(0), subW, 'App B',     '#f97316')}
      {box(c2x,          y(1), subW, 'Guest OS A', '#f97316', 8)}
      {box(c2x + subW + 4, y(1), subW, 'Guest OS B', '#f97316', 8)}
      {box(c2x, y(2), colW, 'Hypervisor (VMware / KVM)', '#f97316', 8)}
      {box(c2x, y(3), colW, 'Host OS', '#fdba74')}
      {box(c2x, y(4), colW, 'Hardware Físico', '#fdba74')}

      {/* Container */}
      {box(c3x,          y(0), subW, 'App A',  '#f97316')}
      {box(c3x + subW + 4, y(0), subW, 'App B',  '#f97316')}
      {box(c3x,          y(1), subW, 'Libs A', '#f97316')}
      {box(c3x + subW + 4, y(1), subW, 'Libs B', '#f97316')}
      {box(c3x, y(2), colW, 'Container Runtime (Docker Engine)', color, 8)}
      {box(c3x, y(3), colW, 'Host OS (partilhado)', '#fdba74', 8)}
      {box(c3x, y(4), colW, 'Hardware Físico', '#fdba74')}

      {/* Dividers */}
      <line x1={c2x - gap / 2} y1="45" x2={c2x - gap / 2} y2="235" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
      <line x1={c3x - gap / 2} y1="45" x2={c3x - gap / 2} y2="235" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3" />

      {/* Labels bottom */}
      <text x={c1x + colW / 2} y="248" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="700">Sem isolamento</text>
      <text x={c1x + colW / 2} y="262" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Conflitos de dependências</text>
      <text x={c2x + colW / 2} y="248" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Isolamento total</text>
      <text x={c2x + colW / 2} y="262" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Pesado — GBs por VM</text>
      <text x={c3x + colW / 2} y="248" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Leve e portável</text>
      <text x={c3x + colW / 2} y="262" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">MBs, arranque em ms</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      A diferença fundamental entre VMs e Containers está no nível de isolamento: VMs virtualizam o <strong>hardware</strong>
      inteiro e correm um sistema operativo completo por VM (Guest OS), resultando em imagens de GBs e tempos de arranque
      de minutos. Containers partilham o <strong>kernel</strong> do Host OS e isolam apenas o processo e as bibliotecas —
      resultando em imagens de MB e arranques em milissegundos, ao custo de menor isolamento de segurança.
    </p>
  </div>
  );
};

/* ─────────────────────────────────────────────
   DIAGRAM 2 — Docker Architecture
───────────────────────────────────────────── */
const DockerArchitectureDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Arquitectura Docker — Do Dockerfile ao Container em Produção</p>
    <svg viewBox="0 0 720 270" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-docker" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#64748b" />
        </marker>
      </defs>

      {/* Dockerfile */}
      <rect x="10" y="80" width="110" height="100" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.8" />
      <text x="65" y="103" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Dockerfile</text>
      <text x="65" y="120" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">FROM python:slim</text>
      <text x="65" y="133" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">RUN pip install...</text>
      <text x="65" y="146" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">COPY model.pkl .</text>
      <text x="65" y="159" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">CMD ["uvicorn"...]</text>
      <text x="65" y="172" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">EXPOSE 8000</text>

      {/* Build arrow */}
      <path d="M120 130 L168 130" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr-docker)" />
      <text x="143" y="124" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">build</text>

      {/* Docker Image with layers */}
      <rect x="168" y="60" width="150" height="140" rx="8" fill={`${color}10`} stroke={color} strokeWidth="1.8" />
      <text x="243" y="80" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Docker Image</text>
      <text x="243" y="93" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">(imutável, em camadas)</text>
      {[
        { label: 'Layer 5: app code', c: color },
        { label: 'Layer 4: model.pkl', c: '#f97316' },
        { label: 'Layer 3: pip packages', c: '#f97316' },
        { label: 'Layer 2: OS utils', c: '#f97316' },
        { label: 'Layer 1: python:slim', c: '#f97316' },
      ].map(({ label, c }, i) => (
        <g key={i}>
          <rect x={178} y={100 + i * 18} width={130} height={16} rx="3" fill={`${c}20`} stroke={`${c}60`} strokeWidth="1" />
          <text x={243} y={111 + i * 18} textAnchor="middle" fill={c} fontSize="7.5" fontFamily="monospace">{label}</text>
        </g>
      ))}

      {/* Push to registry arrow */}
      <path d="M318 100 L368 100" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr-docker)" />
      <text x="342" y="94" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">push</text>

      {/* Registry */}
      <rect x="368" y="70" width="120" height="80" rx="8" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth="1.8" />
      <text x="428" y="96" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">Container</text>
      <text x="428" y="110" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">Registry</text>
      <text x="428" y="127" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">ECR / GCR</text>
      <text x="428" y="140" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Docker Hub</text>

      {/* Pull and Run arrow */}
      <path d="M488 110 L538 110" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr-docker)" />
      <text x="513" y="104" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">pull + run</text>

      {/* Running containers */}
      <rect x="538" y="40" width="170" height="190" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="623" y="60" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Containers em Execução</text>
      {[
        { label: 'Container 1', port: ':8001', y: 80 },
        { label: 'Container 2', port: ':8002', y: 130 },
        { label: 'Container 3', port: ':8003', y: 180 },
      ].map(({ label, port, y }) => (
        <g key={y}>
          <rect x={548} y={y} width={150} height={40} rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.3" />
          <text x={623} y={y + 15} textAnchor="middle" fill={color} fontSize="9" fontWeight="700">{label}</text>
          <text x={623} y={y + 29} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">FastAPI {port}</text>
        </g>
      ))}

      {/* Docker Daemon */}
      <rect x="168" y="240" width="490" height="28" rx="6" fill="rgba(100,116,139,0.1)" stroke="#64748b" strokeWidth="1.3" />
      <text x="413" y="257" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="700">Docker Daemon (dockerd) — gere imagens, containers e volumes</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      O fluxo Docker tem quatro passos: (1) escrever o <strong>Dockerfile</strong> que define o ambiente; (2) fazer
      <code> build</code> para criar uma imagem imutável em camadas (as camadas inferiores são partilhadas entre imagens,
      economizando espaço); (3) fazer <code>push</code> para um Container Registry; (4) fazer <code>pull</code> e
      <code> run</code> em qualquer máquina — dev, staging ou produção. O <strong>Docker Daemon</strong> gere todo
      o ciclo de vida dos containers.
    </p>
  </div>
);

/* ─────────────────────────────────────────────
   DIAGRAM 3 — Model Serving Architecture
───────────────────────────────────────────── */
const ModelServingArchitectureDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Arquitectura de Model Serving em Produção</p>
    <svg viewBox="0 0 740 310" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-serve" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#64748b" />
        </marker>
        <marker id="arr-serve-back" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#f97316" />
        </marker>
      </defs>

      {/* Client */}
      <rect x="10" y="120" width="80" height="50" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.8" />
      <text x="50" y="142" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Client</text>
      <text x="50" y="156" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">POST /predict</text>

      {/* Request arrow */}
      <path d="M90 145 L130 145" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr-serve)" />
      <text x="110" y="139" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">request</text>

      {/* Load Balancer */}
      <rect x="130" y="110" width="90" height="70" rx="8" fill={`${color}12`} stroke={color} strokeWidth="1.8" />
      <text x="175" y="135" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Load</text>
      <text x="175" y="149" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Balancer</text>
      <text x="175" y="165" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Nginx / AWS ALB</text>

      {/* Arrows to replicas */}
      <path d="M220 135 L280 86" stroke="#64748b" strokeWidth="1.3" markerEnd="url(#arr-serve)" />
      <path d="M220 145 L280 156" stroke="#64748b" strokeWidth="1.3" markerEnd="url(#arr-serve)" />
      <path d="M220 158 L280 226" stroke="#64748b" strokeWidth="1.3" markerEnd="url(#arr-serve)" />

      {/* Serving replicas */}
      {[
        { label: 'Replica 1', y: 55 },
        { label: 'Replica 2', y: 125 },
        { label: 'Replica 3', y: 195 },
      ].map(({ label, y }) => (
        <g key={label}>
          <rect x={280} y={y} width={170} height={62} rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
          <text x={365} y={y + 16} textAnchor="middle" fill={color} fontSize="9" fontWeight="700">{label}</text>
          <text x={295} y={y + 30} fill="var(--text-secondary)" fontSize="7.5">① Preprocess (scaler)</text>
          <text x={295} y={y + 43} fill="var(--text-secondary)" fontSize="7.5">② Model.predict(X)</text>
          <text x={295} y={y + 56} fill="var(--text-secondary)" fontSize="7.5">③ Postprocess (decode)</text>
        </g>
      ))}

      {/* Arrow to Model Registry */}
      <path d="M450 156 L520 156" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arr-serve)" />
      <text x="484" y="150" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">pull on start</text>

      {/* Model Registry */}
      <rect x="520" y="110" width="130" height="90" rx="8" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth="1.8" />
      <text x="585" y="132" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">Model Registry</text>
      <text x="585" y="150" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">model.pkl</text>
      <text x="585" y="163" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">scaler.pkl</text>
      <text x="585" y="176" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">encoder.pkl</text>
      <text x="585" y="189" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="700">MLflow / S3</text>

      {/* Response arrows back */}
      <path d="M280 86 L230 135" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#arr-serve-back)" />
      <path d="M280 156 L230 148" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#arr-serve-back)" />
      <path d="M280 226 L230 160" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#arr-serve-back)" />
      <path d="M130 145 L90 145" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#arr-serve-back)" />
      <text x="109" y="160" textAnchor="middle" fill="#f97316" fontSize="7.5">response</text>

      {/* Monitoring */}
      <rect x="260" y="278" width="21e0" height="24" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.3" />
      <text x="365" y="292" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">Prometheus / Grafana — Métricas em tempo real</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      Em produção, o modelo nunca é exposto directamente. Os pedidos chegam ao <strong>Load Balancer</strong> que os
      distribui por múltiplas <strong>réplicas</strong> do serviço de inferência — cada uma com o modelo carregado em
      memória para baixa latência. Cada réplica executa três passos: (1) <em>preprocessing</em> com o scaler treinado,
      (2) inferência pelo modelo, (3) <em>postprocessing</em> para formatar a resposta. Os artefactos são carregados do
      <strong> Model Registry</strong> no arranque de cada réplica.
    </p>
  </div>
);

/* ─────────────────────────────────────────────
   DIAGRAM 4 — Deployment Strategies
───────────────────────────────────────────── */
const DeploymentStrategiesDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Estratégias de Deployment — Blue-Green, Canary e Shadow</p>
    <svg viewBox="0 0 720 385" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-dep" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#64748b" />
        </marker>
      </defs>

      {/* ── BLUE-GREEN ── */}
      <text x="360" y="18" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="700">Blue-Green</text>
      {/* Before */}
      <text x="90" y="35" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">ANTES</text>
      <rect x="10" y="40" width="80" height="30" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="50" y="50" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Traffic 100%</text>
      <path d="M90 55 L120 55" stroke="#f97316" strokeWidth="3" markerEnd="url(#arr-dep)" />
      <rect x="120" y="40" width="80" height="30" rx="6" fill="rgba(249,115,22,0.20)" stroke="#f97316" strokeWidth="2" />
      <text x="160" y="59" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">BLUE v1.0</text>
      <rect x="210" y="40" width="80" height="30" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.3" strokeDasharray="4,2" />
      <text x="250" y="53" textAnchor="middle" fill="#f97316" fontSize="9">GREEN v2.0</text>
      <text x="250" y="63" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">(idle)</text>

      {/* After */}
      <text x="490" y="35" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">DEPOIS</text>
      <rect x="410" y="40" width="80" height="30" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="450" y="59" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Traffic 100%</text>
      <path d="M490 55 L520 55" stroke="#f97316" strokeWidth="3" markerEnd="url(#arr-dep)" />
      <rect x="520" y="40" width="80" height="30" rx="6" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1.3" strokeDasharray="4,2" />
      <text x="560" y="53" textAnchor="middle" fill="#f97316" fontSize="9">BLUE v1.0</text>
      <text x="560" y="63" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">(idle)</text>
      <rect x="610" y="40" width="80" height="30" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
      <text x="650" y="59" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">GREEN v2.0</text>

      <line x1="0" y1="95" x2="720" y2="95" stroke="var(--text-secondary)" strokeWidth="1" />

      {/* ── CANARY ── */}
      <text x="360" y="112" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="700">Canary Release</text>
      {/* Timeline */}
      <line x1="40" y1="155" x2="680" y2="155" stroke="var(--text-secondary)" strokeWidth="1.5" />
      {[
        { label: 'Deploy', x: 40, pct: '5%', c: '#f97316' },
        { label: 'Fase 1', x: 200, pct: '20%', c: '#f97316' },
        { label: 'Fase 2', x: 380, pct: '50%', c: '#f97316' },
        { label: 'Full', x: 560, pct: '100%', c: '#f97316' },
      ].map(({ label, x, pct, c }) => (
        <g key={x}>
          <circle cx={x} cy={155} r="6" fill={c} />
          <text x={x} y={142} textAnchor="middle" fill={c} fontSize="9" fontWeight="700">{label}</text>
          <text x={x} y={172} textAnchor="middle" fill={c} fontSize="9" fontWeight="700">{pct}</text>
          <text x={x} y={183} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">v2.0</text>
        </g>
      ))}
      {/* v1.0 traffic */}
      {[
        { x: 40, pct: '95%' },
        { x: 200, pct: '80%' },
        { x: 380, pct: '50%' },
        { x: 560, pct: '0%' },
      ].map(({ x, pct }) => (
        <g key={`v1-${x}`}>
          <text x={x} y={200} textAnchor="middle" fill="#f97316" fontSize="8">{pct} v1.0</text>
        </g>
      ))}

      <line x1="0" y1="220" x2="720" y2="220" stroke="var(--text-secondary)" strokeWidth="1" />

      {/* ── SHADOW ── */}
      <text x="360" y="237" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="700">Shadow / Mirror Deployment</text>

      {/* Traffic source */}
      <rect x="20" y="250" width="70" height="35" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="55" y="271" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Traffic</text>
      <text x="55" y="283" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">100%</text>

      {/* Main path */}
      <path d="M90 260 L150 260" stroke="#f97316" strokeWidth="3" markerEnd="url(#arr-dep)" />
      <rect x="150" y="245" width="130" height="50" rx="8" fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="2" />
      <text x="215" y="265" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Production v1.0</text>
      <text x="215" y="279" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Resposta ao utilizador</text>
      <path d="M280 260 L350 260" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-dep)" />
      <text x="315" y="253" textAnchor="middle" fill="#f97316" fontSize="8">Resposta real</text>

      {/* Shadow path */}
      <path d="M90 275 L110 310 L150 310" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#arr-dep)" />
      <text x="60" y="318" fill="#f59e0b" fontSize="8">mirror</text>
      <rect x="150" y="305" width="130" height="50" rx="8" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="215" y="325" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">Shadow v2.0</text>
      <text x="215" y="339" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Resultado descartado</text>
      <path d="M280 320 L350 320" stroke="#f59e0b" strokeWidth="1.3" strokeDasharray="3,2" markerEnd="url(#arr-dep)" />
      <text x="315" y="336" textAnchor="middle" fill="#f59e0b" fontSize="8">Log para análise</text>

      <rect x="350" y="245" width="130" height="130" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.3" />
      <text x="415" y="268" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Comparação</text>
      <text x="415" y="283" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">v1.0 vs v2.0</text>
      <text x="415" y="300" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Latência</text>
      <text x="415" y="313" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Acc. offline</text>
      <text x="415" y="326" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Erros / exceptions</text>
      <text x="415" y="339" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">Sem impacto no user</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      Três estratégias, três contextos: <strong>Blue-Green</strong> faz uma troca imediata de 0% para 100% — ideal para
      rollback rápido se algo correr mal. <strong>Canary</strong> vai aumentando gradualmente a percentagem de tráfego para
      o novo modelo, permitindo detectar problemas antes de afectar todos os utilizadores. <strong>Shadow</strong> espelha
      o tráfego real para o novo modelo sem nunca devolver a resposta ao utilizador — permite validar o comportamento em
      produção com <em>zero risco</em>, ao custo de duplicar a carga de inferência.
    </p>
  </div>
);

/* ─────────────────────────────────────────────
   DIAGRAM 5 — Inference Latency Breakdown
───────────────────────────────────────────── */
const InferenceLatencyDiagram = () => {
  const segments = [
    { label: 'Rede\n(cliente→srv)', pct: 15, c: '#f97316', ms: '~15ms' },
    { label: 'Pre-\nprocessing', pct: 10, c: '#f97316', ms: '~10ms' },
    { label: 'Model\nForward Pass', pct: 50, c: color, ms: '~50ms' },
    { label: 'Post-\nprocessing', pct: 5, c: '#f97316', ms: '~5ms' },
    { label: 'Rede\n(srv→cliente)', pct: 20, c: '#f97316', ms: '~20ms' },
  ];
  const total = segments.reduce((s, seg) => s + seg.pct, 0);
  let curX = 30;

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Decomposição da Latência de Inferência REST</p>
      <svg viewBox="0 0 680 160" style={{ maxWidth: '100%', height: 'auto' }}>

        {/* Header */}
        <text x="340" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Latência total típica: ~100ms (P50) | ~200ms (P95) — REST API com modelo sklearn em produção</text>

        {/* Segments */}
        {segments.map(({ label, pct, c, ms }, i) => {
          const width = (pct / total) * 620;
          const x = curX;
          curX += width;
          return (
            <g key={i}>
              <rect x={x} y={30} width={width} height={55} rx={i === 0 ? 8 : i === segments.length - 1 ? 8 : 0}
                fill={`${c}25`} stroke={c} strokeWidth="1.8" />
              {label.split('\n').map((line, li) => (
                <text key={li} x={x + width / 2} y={50 + li * 13} textAnchor="middle" fill={c} fontSize={width > 60 ? 9 : 7} fontWeight="700">{line}</text>
              ))}
              <text x={x + width / 2} y={110} textAnchor="middle" fill={c} fontSize="9" fontWeight="700">{pct}%</text>
              {/* Tick below */}
              <line x1={x + width / 2} y1={85} x2={x + width / 2} y2={105} stroke={c} strokeWidth="1" />
              <text x={x + width / 2} y={120} textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontFamily="monospace">{ms}</text>
            </g>
          );
        })}

        {/* Total bar border */}
        <rect x="30" y="30" width="620" height="55" rx="8" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" />

        {/* P50 / P95 annotation */}
        <text x="340" y="148" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontStyle="italic">
          O model forward pass domina — optimizá-lo (quantização, batching) tem o maior impacto na latência total
        </text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
        A latência de inferência não é apenas o tempo que o modelo demora a correr. Em sistemas reais, o tempo de
        <strong> rede</strong> (cliente para servidor e de volta) pode dominar, especialmente em pedidos transatlânticos
        (50–100ms só de RTT). O <strong>model forward pass</strong> domina internamente — é onde as técnicas de optimização
        têm mais impacto. O <strong>preprocessing</strong> é frequentemente subestimado mas pode ser custoso com features
        de texto ou imagens.
      </p>
    </div>
  );
};

/* ─────────────────────────────────────────────
   DIAGRAM 6 — Docker Layer Cache
───────────────────────────────────────────── */
const DockerLayerCacheDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Anatomia do Dockerfile para ML — Ordem das Camadas Importa</p>
    <svg viewBox="0 0 640 260" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-layer" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#64748b" />
        </marker>
      </defs>

      {/* Bad order */}
      <text x="155" y="20" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Má Ordem (sem cache)</text>
      {[
        { label: 'COPY . .', c: '#f97316', note: 'invalida cache aqui' },
        { label: 'RUN pip install -r requirements.txt', c: '#f97316', note: 're-instala sempre!' },
        { label: 'RUN pip install torch pandas sklearn', c: '#f97316', note: 're-instala sempre!' },
        { label: 'FROM python:3.11-slim', c: '#fdba74', note: 'base (cache OK)' },
      ].map(({ label, c, note }, i) => (
        <g key={i}>
          <rect x={10} y={30 + i * 46} width={290} height={38} rx="5" fill={`${c}12`} stroke={c} strokeWidth={c === '#f97316' ? 1.8 : 1.3} />
          <text x={20} y={52 + i * 46} fill={c} fontSize="8.5" fontFamily="monospace">{label}</text>
          <text x={20} y={64 + i * 46} fill="var(--text-secondary)" fontSize="7.5">{note}</text>
        </g>
      ))}
      <text x="155" y="230" textAnchor="middle" fill="#f97316" fontSize="8.5">Build: ~5 min (sempre re-instala deps)</text>

      {/* Divider */}
      <line x1="315" y1="20" x2="315" y2="245" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3" />

      {/* Good order */}
      <text x="478" y="20" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Boa Ordem (cache eficiente)</text>
      {[
        { label: 'COPY . .  +  CMD ["uvicorn"...]', c: color, note: 'código muda → só recopia' },
        { label: 'COPY requirements.txt . + RUN pip install', c: '#f97316', note: 'requirements.txt mudou → re-instala' },
        { label: 'RUN pip install torch pandas sklearn', c: '#f97316', note: 'cached → instantâneo se não mudar' },
        { label: 'FROM python:3.11-slim', c: '#fdba74', note: 'base (cache permanente)' },
      ].map(({ label, c, note }, i) => (
        <g key={i}>
          <rect x={325} y={30 + i * 46} width={305} height={38} rx="5" fill={`${c}12`} stroke={c} strokeWidth="1.5" />
          <text x={335} y={52 + i * 46} fill={c} fontSize="8.5" fontFamily="monospace">{label.length > 35 ? label.slice(0, 35) + '...' : label}</text>
          <text x={335} y={64 + i * 46} fill="var(--text-secondary)" fontSize="7.5">{note}</text>
        </g>
      ))}
      <text x="478" y="230" textAnchor="middle" fill="#f97316" fontSize="8.5">Build: ~10s (deps cached, só copia código)</text>

      {/* Stack arrows */}
      {[0, 1, 2].map(i => (
        <g key={i}>
          <path d={`M155 ${68 + i * 46} L155 ${80 + i * 46}`} stroke="#64748b" strokeWidth="1" markerEnd="url(#arr-layer)" />
          <path d={`M478 ${68 + i * 46} L478 ${80 + i * 46}`} stroke="#64748b" strokeWidth="1" markerEnd="url(#arr-layer)" />
        </g>
      ))}
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      O Docker usa um sistema de cache por camadas: se uma camada não mudou, usa o resultado em cache da build anterior.
      O erro comum é copiar o código do projecto (<code>COPY . .</code>) <em>antes</em> de instalar dependências — qualquer
      alteração ao código invalida o cache de todas as camadas seguintes, re-instalando os pacotes a cada build.
      A solução é copiar primeiro apenas o <code>requirements.txt</code>, instalar dependências (cache longa), e só depois
      copiar o resto do código.
    </p>
  </div>
);

/* ─────────────────────────────────────────────
   Interactive: FastAPI + BentoML Explorer
───────────────────────────────────────────── */
const ServingCodeExplorer = () => {
  const [tab, setTab] = useState(0);
  const tabs = [
    {
      name: 'FastAPI',
      desc: 'FastAPI é a escolha mais comum para expor modelos ML em Python. É leve, rápido (baseado em Starlette/asyncio), gera documentação automática em /docs, e suporta validação de input com Pydantic. O modelo e o scaler são carregados uma vez no arranque da aplicação.',
      code: `from fastapi import FastAPI
from pydantic import BaseModel
import joblib, numpy as np

app = FastAPI(title="Fraud Detector API")

# Carregado 1 vez no arranque
model  = joblib.load("artifacts/model.pkl")
scaler = joblib.load("artifacts/scaler.pkl")

class PredictRequest(BaseModel):
    amount: float
    merchant_id: int
    hour_of_day: int
    is_foreign: bool

class PredictResponse(BaseModel):
    fraud_probability: float
    is_fraud: bool
    model_version: str = "v1.2"

@app.post("/predict", response_model=PredictResponse)
async def predict(req: PredictRequest):
    X = np.array([[req.amount, req.merchant_id,
                   req.hour_of_day, int(req.is_foreign)]])
    X_scaled = scaler.transform(X)
    prob = float(model.predict_proba(X_scaled)[0][1])
    return PredictResponse(
        fraud_probability=prob,
        is_fraud=prob > 0.5
    )

@app.get("/health")
async def health():
    return {"status": "ok"}`,
    },
    {
      name: 'BentoML',
      desc: 'BentoML abstrai a complexidade do FastAPI e gera automaticamente a imagem Docker optimizada para o modelo. O conceito central é o "Bento" — um pacote auto-contido com o modelo, as dependências e o código de serving. É ideal para equipas que querem standardizar o processo de deploy.',
      code: `import bentoml
from bentoml.io import JSON
import numpy as np

# Guardar modelo no BentoML store
saved_model = bentoml.sklearn.save_model(
    "fraud_detector",
    model,
    signatures={"predict_proba": {"batchable": True}},
    metadata={"accuracy": 0.87, "version": "v1.2"}
)

# Definir runner (execução assíncrona)
fraud_runner = bentoml.sklearn.get(
    "fraud_detector:latest"
).to_runner()

# Criar serviço
svc = bentoml.Service("fraud_service",
                       runners=[fraud_runner])

@svc.api(input=JSON(), output=JSON())
async def predict(input_data: dict) -> dict:
    X = np.array([[
        input_data["amount"],
        input_data["merchant_id"],
        input_data["hour_of_day"]
    ]])
    prob = await fraud_runner.predict_proba.async_run(X)
    return {"fraud_probability": float(prob[0][1])}

# Deploy: bentoml build + bentoml containerize`,
    },
    {
      name: 'gRPC',
      desc: 'gRPC (Google Remote Procedure Call) é uma alternativa ao REST para cenários de alto throughput e baixa latência. Usa Protocol Buffers para serialização binária (muito mais eficiente que JSON) e suporta streaming bidirecional. É comum em sistemas internos de microserviços onde a eficiência de rede é crítica.',
      code: `# fraud_service.proto
syntax = "proto3";

service FraudDetector {
  rpc Predict (PredictRequest) returns (PredictResponse);
  rpc PredictBatch (stream PredictRequest)
      returns (stream PredictResponse);
}

message PredictRequest {
  float amount = 1;
  int32 merchant_id = 2;
  int32 hour_of_day = 3;
  bool is_foreign = 4;
}

message PredictResponse {
  float fraud_probability = 1;
  bool is_fraud = 2;
}

# --- servidor Python ---
import grpc
from concurrent import futures

class FraudDetectorServicer(fraud_pb2_grpc.FraudDetectorServicer):
    def Predict(self, request, context):
        X = [[request.amount, request.merchant_id,
              request.hour_of_day, request.is_foreign]]
        prob = model.predict_proba(scaler.transform(X))[0][1]
        return fraud_pb2.PredictResponse(
            fraud_probability=prob, is_fraud=prob > 0.5)`,
    },
  ];
  const t = tabs[tab];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Padrões de Serving — FastAPI, BentoML e gRPC</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {tabs.map((tb, i) => (
          <button key={i} onClick={() => setTab(i)} style={{ padding: '0.35rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: tab === i ? color : 'var(--bg-primary)', color: tab === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${tab === i ? color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>
            {tb.name}
          </button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${color}40` }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '1rem' }}>{t.desc}</p>
        <pre style={{ background: `${color}10`, border: `1px solid ${color}30`, borderRadius: 8, padding: '0.75rem 1rem', fontSize: '0.78rem', color, fontFamily: 'monospace', overflowX: 'auto', margin: 0, lineHeight: 1.7 }}>{t.code}</pre>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function MLOPS4() {
  return (
    <div style={S.page}>
      <Link to="/mlops" style={S.back}><ArrowLeft size={16} /> Voltar a MLOps</Link>

      <div style={S.tag}>MÓDULO 04</div>
      <h1 style={S.h1}>Containerização & Model Serving</h1>
      <p style={S.lead}>
        Docker resolve o problema "funciona na minha máquina" — o maior inimigo da reprodutibilidade em ML. Containers
        garantem que o ambiente de desenvolvimento é bit-a-bit idêntico ao de produção: mesma versão do Python, mesmos
        pacotes, mesmo modelo, mesmos transformers. Este módulo cobre a arquitectura Docker, como servir modelos com
        FastAPI e BentoML, estratégias de deployment e como optimizar latência de inferência.
      </p>

      {/* ═══════════════════════════════════════
          SECTION 1 — Tradicional vs VM vs Container
      ═══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Tradicional vs. VMs vs. Containers</h2>
        <p style={S.p}>
          A história do deployment de software é uma história de progressivo isolamento. A cada geração, o objectivo é o
          mesmo: garantir que uma aplicação corre da mesma forma em qualquer máquina, sem conflitos com outras aplicações
          ou com o ambiente do sistema operativo.
        </p>
        <VirtualizationComparisonDiagram />

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Critério</th><th style={S.th}>Tradicional</th><th style={S.th}>Virtual Machine</th><th style={S.th}>Container (Docker)</th></tr>
            </thead>
            <tbody>
              {[
                ['Isolamento', 'Nenhum — partilha tudo', 'Total — Guest OS separado', 'Processo — partilha kernel'],
                ['Tamanho', 'App + deps (~MB)', 'App + Guest OS (~GBs)', 'App + deps (~MB–centenas MB)'],
                ['Arranque', 'Segundos', 'Minutos (boot OS)', 'Milissegundos'],
                ['Portabilidade', 'Depende do OS do host', 'Alta (qualquer hypervisor)', 'Muito alta (Docker instalado)'],
                ['Overhead CPU/RAM', 'Mínimo', 'Significativo (Guest OS)', 'Muito baixo (~5%)'],
                ['Caso de uso ML', 'Desenvolvimento local simples', 'Isolamento de segurança máxima', 'Deploy standard de modelos'],
                ['Exemplos', 'pip install local', 'VMware, VirtualBox, AWS EC2', 'Docker, Podman, containerd'],
              ].map(([crit, trad, vm, cont]) => (
                <tr key={crit}>
                  <td style={{ ...S.td, fontWeight: 700 }}>{crit}</td>
                  <td style={S.td}>{trad}</td>
                  <td style={{ ...S.td, color: '#f97316' }}>{vm}</td>
                  <td style={{ ...S.td, color }}>{cont}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.highlight}>
          <strong>Porquê containers para ML?</strong> Um modelo de ML treinado com <code>scikit-learn==1.3.0</code> e
          <code> numpy==1.24</code> pode dar resultados diferentes ou falhar com versões diferentes. Containers fixam
          exactamente o ambiente de runtime — garantindo que o modelo que passou os testes em CI é <em>exactamente</em>
          o mesmo que corre em produção.
        </div>
        <p style={S.p}>
          Em Kubernetes (o sistema de orquestração de containers mais comum em produção), cada réplica de serving do
          modelo corre num container isolado. O Kubernetes gere automaticamente escalonamento horizontal (mais réplicas
          com mais carga), self-healing (reinicia containers que falham) e rolling updates (substitui containers antigos
          por novos sem downtime).
        </p>
      </div>

      <hr style={S.divider} />

      {/* ═══════════════════════════════════════
          SECTION 2 — Docker para MLOps
      ═══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Docker para MLOps</h2>
        <p style={S.p}>
          Docker tem três conceitos centrais: o <strong>Dockerfile</strong> (a receita que define o ambiente), a
          <strong> Image</strong> (o resultado imutável do build — como uma fotografia do ambiente), e o
          <strong> Container</strong> (uma instância em execução de uma image — como um processo com o seu próprio sistema
          de ficheiros e rede). A relação é análoga a: Dockerfile = receita, Image = bolo assado, Container = fatia servida.
        </p>
        <DockerArchitectureDiagram />
        <DockerLayerCacheDiagram />

        <h3 style={S.h3}>Dockerfile Completo para ML — Boas Práticas</h3>
        <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1rem', fontFamily: 'monospace', fontSize: '0.8rem', overflowX: 'auto', lineHeight: 1.8 }}>
          <pre style={{ margin: 0, color: 'var(--text-primary)' }}>{`# ─── Stage 1: build deps (cached agressivamente) ───
FROM python:3.11-slim AS builder

WORKDIR /app

# Instalar dependências do SO (separado para cache longa)
RUN apt-get update && apt-get install -y \\
    gcc libgomp1 \\
    && rm -rf /var/lib/apt/lists/*

# Instalar deps Python (antes de copiar código!)
COPY requirements.txt .
RUN pip install --no-cache-dir --user -r requirements.txt

# ─── Stage 2: imagem final leve ───
FROM python:3.11-slim

WORKDIR /app

# Copiar deps instaladas do stage anterior
COPY --from=builder /root/.local /root/.local

# Copiar código e artefactos
COPY src/ ./src/
COPY artifacts/ ./artifacts/

# Configuração de ambiente
ENV PYTHONPATH=/app
ENV MODEL_PATH=artifacts/model.pkl
ENV SCALER_PATH=artifacts/scaler.pkl
ENV PORT=8000

# User não-root (segurança)
RUN useradd -m appuser && chown -R appuser /app
USER appuser

EXPOSE 8000

# Health check integrado
HEALTHCHECK --interval=30s --timeout=5s \\
  CMD curl -f http://localhost:8000/health || exit 1

CMD ["uvicorn", "src.main:app", \\
     "--host", "0.0.0.0", "--port", "8000", \\
     "--workers", "2"]`}</pre>
        </div>
        <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Prática</th><th style={S.th}>Porquê</th></tr>
            </thead>
            <tbody>
              {[
                ['Multi-stage build', 'Imagem final não tem compiladores (gcc) — reduz tamanho e superfície de ataque'],
                ['python:3.11-slim', 'Base mínima — sem extras do sistema que nunca são usados pelo modelo'],
                ['Pins de versão em requirements.txt', 'Garante builds reproducíveis: numpy==1.24.3, não numpy>=1.0'],
                ['COPY requirements.txt antes de COPY . .', 'Maximiza cache Docker — deps só reinstalam quando requirements.txt muda'],
                ['USER não-root', 'Container não corre como root — mitigação de vulnerabilidades de segurança'],
                ['HEALTHCHECK', 'Kubernetes e load balancers usam este endpoint para saber se o container está pronto'],
                ['ENV para paths', 'Configuração via variáveis de ambiente — override fácil sem rebuild da imagem'],
              ].map(([prat, porque]) => (
                <tr key={prat}>
                  <td style={{ ...S.td, fontWeight: 600, color, fontFamily: 'monospace', fontSize: '0.82rem' }}>{prat}</td>
                  <td style={S.td}>{porque}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ═══════════════════════════════════════
          SECTION 3 — REST APIs para Model Serving
      ═══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>3. REST APIs para Model Serving</h2>
        <p style={S.p}>
          Expor um modelo como API REST é a forma mais universal de o integrar em sistemas existentes. Qualquer aplicação
          — web, mobile, backend — que saiba fazer um pedido HTTP pode usar o modelo, independentemente da linguagem de
          programação. O padrão é um endpoint <code>POST /predict</code> que recebe features em JSON e devolve predições.
        </p>
        <ModelServingArchitectureDiagram />
        <ServingCodeExplorer />

        <h3 style={S.h3}>Padrões de Serving — Quando Usar Cada Um</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Padrão</th>
                <th style={S.th}>Latência</th>
                <th style={S.th}>Throughput</th>
                <th style={S.th}>Caso de uso</th>
                <th style={S.th}>Framework</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['REST API Síncrono', '10–200ms', 'Médio', 'Fraude em tempo real, recomendações ao clique', 'FastAPI, Flask'],
                ['Batch Inference', 'Minutos–horas', 'Muito alto', 'Scoring nocturno de milhões de registos', 'Spark MLlib, Ray'],
                ['Streaming', 'Sub-segundo', 'Alto contínuo', 'Detecção de anomalias IoT, logs em tempo real', 'Kafka + Faust'],
                ['gRPC', '1–20ms', 'Muito alto', 'Microserviços internos, alto volume inter-serviço', 'gRPC, TF Serving'],
                ['Edge / Embedded', '<5ms', 'Baixo por dispositivo', 'Dispositivos móveis, cameras, sensores', 'ONNX Runtime, TFLite'],
              ].map(([p, lat, tp, uc, fw]) => (
                <tr key={p}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{p}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{lat}</td>
                  <td style={S.td}>{tp}</td>
                  <td style={S.td}>{uc}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{fw}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          <strong>Warm-up e cold start:</strong> um problema comum em serving com containers é o <em>cold start</em> —
          o primeiro pedido após o container arrancar é muito mais lento porque o modelo precisa de ser carregado em
          memória. A solução é um <em>warm-up</em> no arranque: fazer alguns pedidos sintéticos logo após o load do modelo,
          para que o JIT (Just-In-Time compilation) do Python/NumPy já tenha compilado os paths críticos antes do primeiro
          pedido real chegar.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ═══════════════════════════════════════
          SECTION 4 — Deployment Strategies
      ═══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Estratégias de Deployment</h2>
        <p style={S.p}>
          Substituir um modelo em produção por uma nova versão é sempre um momento de risco — o novo modelo pode ter
          comportamentos inesperados em dados reais que não apareceram nos testes offline. As estratégias de deployment
          existem para gerir este risco: controlar quando e quanto tráfego o novo modelo recebe, e garantir que é possível
          reverter rapidamente se algo correr mal.
        </p>
        <DeploymentStrategiesDiagram />

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Estratégia</th>
                <th style={S.th}>Tráfego para v2</th>
                <th style={S.th}>Rollback</th>
                <th style={S.th}>Custo infra</th>
                <th style={S.th}>Quando usar</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Blue-Green', '0% → 100% (instantâneo)', 'Switch imediato para Blue', '2× infra sempre', 'Deploy com rollback garantido em &lt;30s'],
                ['Canary', '5% → 20% → 50% → 100%', 'Parar graduação, reverte restante', '~1.1× infra', 'Validação gradual de novos modelos'],
                ['Shadow', '0% (espelhado)', 'N/A — não afecta produção', '2× custo de inferência', 'Validação sem qualquer risco para utilizadores'],
                ['A/B Test', '50% / 50% fixo', 'Redirigir para variante A', '~2× infra (limitado)', 'Comparar impacto de negócio de dois modelos'],
                ['Rolling Update', 'Gradual por pod/réplica', 'kubectl rollout undo', '~1× infra', 'Updates de rotina sem downtime'],
              ].map(([est, traf, roll, custo, when]) => (
                <tr key={est}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{est}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{traf}</td>
                  <td style={S.td}>{roll}</td>
                  <td style={S.td}>{custo}</td>
                  <td style={S.td}>{when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>Exemplo: Canary com Kubernetes</h3>
        <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1rem', fontFamily: 'monospace', fontSize: '0.8rem', overflowX: 'auto', lineHeight: 1.8 }}>
          <pre style={{ margin: 0, color: 'var(--text-primary)' }}>{`# Deployment stable (v1.0) — 9 réplicas
apiVersion: apps/v1
kind: Deployment
metadata:
  name: fraud-model-stable
spec:
  replicas: 9          # 90% do tráfego
  template:
    spec:
      containers:
      - image: registry/fraud-model:v1.0

---
# Deployment canary (v1.1) — 1 réplica
apiVersion: apps/v1
kind: Deployment
metadata:
  name: fraud-model-canary
spec:
  replicas: 1          # 10% do tráfego
  template:
    spec:
      containers:
      - image: registry/fraud-model:v1.1

# Ambos partilham o mesmo Service/selector
# → o Load Balancer distribui 9:1 automaticamente`}</pre>
        </div>
        <div style={S.highlight}>
          <strong>Decisão de promoção automática:</strong> ferramentas como Argo Rollouts permitem definir critérios
          automáticos de promoção — por exemplo: "se após 1 hora com 10% do tráfego a accuracy não degradar mais de 2%
          e a latência P95 for inferior a 200ms, aumentar automaticamente para 50%; caso contrário, reverter". Isto
          implementa um ciclo de feedback quantitativo para as decisões de deployment.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ═══════════════════════════════════════
          SECTION 5 — Latência e Optimização
      ═══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Latência e Optimização de Inferência</h2>
        <p style={S.p}>
          A latência de inferência é frequentemente o principal requisito não-funcional de um sistema de serving. Um
          modelo de detecção de fraude pode ter requisitos de latência P99 inferior a 100ms — qualquer optimização que
          não atinja este threshold não é suficiente. Antes de optimizar, é essencial medir e decompor onde o tempo
          está a ser gasto.
        </p>
        <InferenceLatencyDiagram />

        <div style={S.math}>
          <BlockMath math="\text{Latência total} = \underbrace{t_{\text{rede}}}_{\text{RTT}} + \underbrace{t_{\text{pre}}}_{\text{scaler}} + \underbrace{t_{\text{model}}}_{\text{forward pass}} + \underbrace{t_{\text{post}}}_{\text{decode}} + \underbrace{t_{\text{queue}}}_{\text{espera}}" />
        </div>

        <h3 style={S.h3}>Técnicas de Optimização — Do Mais ao Menos Impactante</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Técnica</th>
                <th style={S.th}>Redução típica</th>
                <th style={S.th}>Como funciona</th>
                <th style={S.th}>Trade-off</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Batching dinâmico', '3–10×', 'Agrupa múltiplos pedidos e processa-os num único forward pass', 'Aumenta latência de pedidos individuais'],
                ['Model Quantization (INT8)', '2–4×', 'Reduz pesos de float32 para int8 — menos memória e operações mais rápidas', 'Pequena perda de accuracy (~0.1–1%)'],
                ['ONNX Runtime', '1.5–3×', 'Converte modelo para formato optimizado e usa kernels nativos da CPU', 'Requer conversão; nem todos os ops suportados'],
                ['Caching de predições', '10–100×', 'Guarda resultados de inputs repetidos (Redis cache)', 'Só funciona para inputs repetíveis; uso de memória'],
                ['GPU Serving (NVIDIA Triton)', '5–20×', 'Processamento paralelo em GPU, ideal para redes neuronais grandes', 'Custo de GPU; overkill para modelos simples'],
                ['Pruning de features', '1.2–2×', 'Remove features pouco importantes — menos preprocessing e input menor', 'Pode reduzir accuracy se mal feito'],
                ['Réplicas horizontais', 'Linear com N', 'Mais containers = mais throughput paralelo', 'Custo linear; não melhora latência individual'],
              ].map(([tec, red, como, trade]) => (
                <tr key={tec}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{tec}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem', color: '#f97316', fontWeight: 600 }}>{red}</td>
                  <td style={S.td}>{como}</td>
                  <td style={{ ...S.td, color: '#f97316', fontSize: '0.85rem' }}>{trade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>Exemplo: Converter Modelo para ONNX</h3>
        <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1rem', fontFamily: 'monospace', fontSize: '0.8rem', overflowX: 'auto', lineHeight: 1.8 }}>
          <pre style={{ margin: 0, color: 'var(--text-primary)' }}>{`import onnx
import onnxruntime as rt
from skl2onnx import convert_sklearn
from skl2onnx.common.data_types import FloatTensorType

# Converter modelo sklearn para ONNX
initial_type = [('float_input',
                 FloatTensorType([None, X_train.shape[1]]))]
onnx_model = convert_sklearn(model, initial_types=initial_type)

# Guardar
with open("artifacts/model.onnx", "wb") as f:
    f.write(onnx_model.SerializeToString())

# Inferência com ONNX Runtime (2-3× mais rápido)
sess = rt.InferenceSession("artifacts/model.onnx")
input_name = sess.get_inputs()[0].name

X_scaled = scaler.transform(X_test.astype("float32"))
pred = sess.run(None, {input_name: X_scaled})[0]`}</pre>
        </div>

        <div style={S.note}>
          <strong>Regra de optimização:</strong> nunca optimizar sem medir primeiro. Use <code>locust</code> ou
          <code> k6</code> para medir a latência baseline sob carga realista (ex: 100 pedidos/segundo durante 5 minutos).
          Identifique onde está o bottleneck (rede? preprocessing? modelo? I/O de disco?), e só então aplique a técnica
          de optimização mais adequada. Optimizar a parte errada é um desperdício de tempo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ═══════════════════════════════════════
          SYNTHESIS
      ═══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Síntese do Módulo</h2>
        <p style={S.p}>
          Containerização e model serving são as peças que transformam um modelo treinado num serviço produtivo, escalável
          e gerenciável. Docker garante reprodutibilidade; FastAPI/BentoML expõem o modelo; as estratégias de deployment
          gerem o risco de substituição; e as técnicas de optimização garantem que os requisitos de latência são cumpridos.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, fontWeight: 700, marginBottom: '0.75rem' }}>Pontos-chave do Módulo 04:</p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0, lineHeight: 2 }}>
            <li>Containers partilham o kernel do Host OS (diferente das VMs) — são leves (MB), arrancam em ms e são portáveis em qualquer máquina com Docker</li>
            <li>O Dockerfile define o ambiente em camadas imutáveis — a ordem das camadas determina a eficiência do cache de build</li>
            <li>Boas práticas Docker para ML: multi-stage builds, imagens slim, pins de versão, copiar requirements.txt antes do código, user não-root</li>
            <li>A arquitectura de serving tem três camadas: Load Balancer → Replicas (preprocessing + model + postprocessing) → Model Registry</li>
            <li>FastAPI é a escolha mais comum (leve, docs automáticas, Pydantic para validação); BentoML abstrai ainda mais e gera imagens Docker automaticamente; gRPC para alta performance inter-serviços</li>
            <li>Blue-Green = troca instantânea sem downtime; Canary = graduação percentual com validação; Shadow = espelhamento sem risco</li>
            <li>A latência total = rede + preprocessing + model forward pass + postprocessing — medir antes de optimizar</li>
            <li>Técnicas de optimização por ordem de impacto: batching &gt; quantização INT8 &gt; ONNX Runtime &gt; caching &gt; GPU &gt; réplicas horizontais</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
