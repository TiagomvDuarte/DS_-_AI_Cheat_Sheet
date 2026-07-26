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
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

/* ─────────────────────────────────────────────
   DIAGRAM 1 — ML Production Pipeline (full)
───────────────────────────────────────────── */
const MLPipelineDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Pipeline Completo de Produção ML</p>
    <svg viewBox="0 0 870 230" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-mlpipe" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#64748b" />
        </marker>
      </defs>

      {/* Stage boxes */}
      {[
        { label: 'Data\nIngestion', x: 30,  y: 40, c: '#4a9eed', sub: 'S3 / Kafka\nDBs' },
        { label: 'Data\nValidation', x: 140, y: 40, c: '#4a9eed', sub: 'Great\nExpectations' },
        { label: 'Feature\nEngineering', x: 255, y: 40, c: '#4a9eed', sub: 'Scaler\nEncoder' },
        { label: 'Training', x: 370, y: 40, c: '#4a9eed', sub: 'sklearn\nPyTorch' },
        { label: 'Evaluation', x: 480, y: 40, c: '#4a9eed', sub: 'Accuracy\nF1, AUC' },
      ].map(({ label, x, y, c, sub }, i) => (
        <g key={i}>
          <rect x={x} y={y} width={90} height={70} rx={8} fill={`${c}18`} stroke={c} strokeWidth="1.8" />
          {label.split('\n').map((line, li) => (
            <text key={li} x={x + 45} y={y + 22 + li * 14} textAnchor="middle" fill={c} fontSize="10" fontWeight="700">{line}</text>
          ))}
          {sub.split('\n').map((line, li) => (
            <text key={li} x={x + 45} y={y + 53 + li * 11} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{line}</text>
          ))}
          {i < 4 && (
            <path d={`M${x + 90} 75 L${x + 105} 75`} stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr-mlpipe)" />
          )}
        </g>
      ))}

      {/* Arrow from Evaluation to Gate */}
      <path d="M570 75 L615 75" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr-mlpipe)" />

      {/* Diamond gate */}
      <polygon points="645,55 680,75 645,95 610,75" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.8" />
      <text x="645" y="71" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Meets</text>
      <text x="645" y="82" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Threshold?</text>

      {/* YES path → Model Registry */}
      <path d="M680 75 L770 75" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr-mlpipe)" />
      <text x="725" y="69" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">SIM</text>
      <rect x="770" y="40" width="90" height="70" rx={8} fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.8" />
      <text x="815" y="68" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">Model</text>
      <text x="815" y="82" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">Registry</text>
      <text x="815" y="98" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">MLflow</text>

      {/* NO path — loop back */}
      <path d="M645 95 L645 140 L300 140 L300 115" fill="none" stroke="#4a9eed" strokeWidth="1.3" strokeDasharray="4,3" markerEnd="url(#arr-mlpipe)" />
      <text x="470" y="155" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">NÃO — rever hiperparâmetros / features</text>

      {/* Serving arrow from Registry */}
      <path d="M815 110 L815 175 L500 175" fill="none" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr-mlpipe)" />
      <rect x="360" y="158" width="140" height="36" rx={8} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.8" />
      <text x="430" y="178" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Model Serving (API)</text>

      {/* Monitor feedback */}
      <path d="M360 176 L200 176 L200 115" fill="none" stroke="#64748b" strokeWidth="1.3" strokeDasharray="4,3" markerEnd="url(#arr-mlpipe)" />
      <text x="260" y="210" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontStyle="italic">Monitorização → feedback loop</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      O pipeline de produção ML é composto por etapas sequenciais onde cada uma valida e transforma o artefacto da anterior.
      O <strong>gate de threshold</strong> (losango vermelho) é crítico: se o modelo não atingir a performance mínima definida,
      não avança para o registry — volta a iterar nas features ou hiperparâmetros. Só após aprovação o modelo entra no
      <strong> Model Registry</strong> e fica disponível para serving.
    </p>
  </div>
);

/* ─────────────────────────────────────────────
   DIAGRAM 2 — ML Artifacts tree
───────────────────────────────────────────── */
const MLArtifactsDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Mapa de Artefactos ML — O Que Versionar</p>
    <svg viewBox="0 0 900 290" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-art" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#64748b" />
        </marker>
      </defs>

      {/* Root */}
      <rect x="335" y="10" width="150" height="38" rx="8" fill="var(--bg-primary)" stroke={color} strokeWidth="2" />
      <text x="410" y="33" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">ML Experiment</text>

      {(() => {
        const bw = 140;
        const branches = [
          { label: 'Dados', x: 20, children: ['raw_data.parquet','processed_data.parquet','train/val/test splits'] },
          { label: 'Transforms', x: 180, children: ['scaler.pkl','encoder.pkl','feature_selector.pkl'] },
          { label: 'Modelo', x: 340, children: ['model.pkl / .pt','hyperparams.yaml','requirements.txt'] },
          { label: 'Métricas', x: 500, children: ['metrics.json','confusion_matrix.png','eval_report.html'] },
          { label: 'Config', x: 660, children: ['config.yaml','dataset_version','git commit hash'] },
        ].map(b => ({ ...b, cx: b.x + bw / 2 }));

        return <>
          {/* All lines first (behind boxes) */}
          <line x1="410" y1="48" x2="410" y2="62" stroke="#64748b" strokeWidth="1.2" strokeDasharray="3,2" />
          <line x1={branches[0].cx} y1="62" x2={branches[4].cx} y2="62" stroke="#64748b" strokeWidth="1.2" strokeDasharray="3,2" />
          {branches.map(({ cx, children }) => (
            <g key={cx}>
              <line x1={cx} y1="62" x2={cx} y2="95" stroke="#64748b" strokeWidth="1.2" strokeDasharray="3,2" />
              {children.map((cl, ci) => {
                const cy2 = 163 + ci * 38;
                return <line key={cl} x1={cx} y1={125} x2={cx} y2={cy2} stroke="#4a9eed" strokeWidth="1" strokeDasharray="2,2" />;
              })}
            </g>
          ))}

          {/* All boxes on top */}
          {branches.map(({ label, x, cx, children }) => (
            <g key={label}>
              <rect x={x} y={95} width={bw} height={30} rx="6" fill="var(--bg-primary)" stroke={color} strokeWidth="1.5" />
              <text x={cx} y={114} textAnchor="middle" fill={color} fontSize="11" fontWeight="700">{label}</text>
              {children.map((cl, ci) => {
                const cy2 = 163 + ci * 38;
                return (
                  <g key={cl}>
                    <rect x={x} y={cy2} width={bw} height={26} rx="4" fill="var(--bg-primary)" stroke={`${color}80`} strokeWidth="1" />
                    <text x={cx} y={cy2 + 16} textAnchor="middle" fill={color} fontSize="9" fontFamily="monospace">{cl}</text>
                  </g>
                );
              })}
            </g>
          ))}
        </>;
      })()}

      <text x="410" y="278" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">
        Ferramentas: MLflow · DVC · Weights &amp; Biases · Neptune
      </text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      Versionar apenas o ficheiro <code>.pkl</code> do modelo é um erro comum. Um experimento ML completo tem pelo menos cinco
      famílias de artefactos: os <strong>dados</strong> (raw e processados), os <strong>transformers</strong> (scaler, encoder),
      o <strong>modelo</strong> com hiperparâmetros, as <strong>métricas</strong> de avaliação, e a <strong>configuração</strong>
      que garante reprodutibilidade. Sem todos estes elementos, não é possível reproduzir um experimento meses depois.
    </p>
  </div>
);

/* ─────────────────────────────────────────────
   DIAGRAM 3 — CI/CD for ML
───────────────────────────────────────────── */
const CICDForMLDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>CI/CD Adaptado para Machine Learning</p>
    <svg viewBox="0 0 760 300" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-cicd" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#64748b" />
        </marker>
      </defs>

      {/* Step 1: Code Commit */}
      <rect x="10" y="115" width="95" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.8" />
      <text x="57" y="137" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Code Commit</text>
      <text x="57" y="151" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">git push</text>
      <path d="M105 140 L125 140" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr-cicd)" />

      {/* CI block with parallel branches */}
      <rect x="125" y="90" width="130" height="100" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="190" y="108" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">CI — Testes Paralelos</text>

      <rect x="133" y="113" width="114" height="22" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1" />
      <text x="190" y="128" textAnchor="middle" fill="#4a9eed" fontSize="8">Lint + Unit Tests</text>

      <rect x="133" y="141" width="114" height="22" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1" />
      <text x="190" y="156" textAnchor="middle" fill="#4a9eed" fontSize="8">Data Validation (GE)</text>

      <rect x="133" y="169" width="114" height="14" rx="4" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1" />
      <text x="190" y="179" textAnchor="middle" fill="#4a9eed" fontSize="7.5">Schema + Stats</text>

      <path d="M255 140 L278 140" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr-cicd)" />

      {/* Docker Build */}
      <rect x="278" y="115" width="95" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.8" />
      <text x="325" y="137" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Build</text>
      <text x="325" y="151" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Docker Image</text>
      <path d="M373 140 L393 140" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr-cicd)" />

      {/* Deploy Staging */}
      <rect x="393" y="115" width="95" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.8" />
      <text x="440" y="134" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Deploy</text>
      <text x="440" y="147" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Staging</text>
      <text x="440" y="160" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">K8s staging</text>
      <path d="M488 140 L508 140" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr-cicd)" />

      {/* Integration Tests */}
      <rect x="508" y="115" width="95" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke="#0284c7" strokeWidth="1.8" />
      <text x="555" y="134" textAnchor="middle" fill="#0284c7" fontSize="9" fontWeight="700">Integration</text>
      <text x="555" y="147" textAnchor="middle" fill="#0284c7" fontSize="9" fontWeight="700">Tests</text>
      <text x="555" y="160" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Model + API</text>
      <path d="M603 140 L623 140" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr-cicd)" />

      {/* Deploy Production */}
      <rect x="623" y="115" width="110" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.8" />
      <text x="678" y="134" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Deploy</text>
      <text x="678" y="147" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Production</text>
      <text x="678" y="160" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Canary / Blue-Green</text>

      {/* Monitor feedback */}
      <path d="M678 165 L678 235 L57 235 L57 165" fill="none" stroke="#64748b" strokeWidth="1.3" strokeDasharray="4,3" markerEnd="url(#arr-cicd)" />
      <text x="380" y="255" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">Monitor → drift detectado → trigger re-treino automático</text>

      {/* Labels above */}
      <text x="57" y="104" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">TRIGGER</text>
      <text x="325" y="104" textAnchor="middle" fill={color} fontSize="8" fontWeight="700">BUILD</text>
      <text x="440" y="104" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">STAGING</text>
      <text x="555" y="104" textAnchor="middle" fill="#0284c7" fontSize="8" fontWeight="700">VALIDATE</text>
      <text x="678" y="104" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">PRODUCTION</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      A principal diferença em relação ao CI/CD de software tradicional é a fase de <strong>Data Validation</strong> na CI,
      que corre em paralelo com os testes de código. Os testes de integração em staging validam não apenas que a API responde,
      mas que as predições do modelo são coerentes com o comportamento esperado. O loop de monitorização em produção pode
      automaticamente disparar um novo ciclo de re-treino quando é detectado <em>data drift</em>.
    </p>
  </div>
);

/* ─────────────────────────────────────────────
   DIAGRAM 4 — Model Registry
───────────────────────────────────────────── */
const ModelRegistryDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Model Registry — Versionamento e Promoção de Modelos</p>
    <svg viewBox="0 0 870 290" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-reg" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#64748b" />
        </marker>
      </defs>

      {/* Central Registry */}
      <rect x="250" y="10" width="220" height="50" rx="10" fill={`${color}20`} stroke={color} strokeWidth="2.5" />
      <text x="360" y="33" textAnchor="middle" fill={color} fontSize="13" fontWeight="800">Model Registry</text>
      <text x="360" y="50" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">MLflow · W&amp;B · Vertex AI Model Registry</text>

      {/* Model versions */}
      {[
        { ver: 'v1.0', stage: 'Archived', acc: '78%', f1: '0.74', date: '2024-01', dataset: 'DS-v1.0', x: 30, c: '#4a9eed' },
        { ver: 'v1.1', stage: 'Champion', acc: '85%', f1: '0.83', date: '2024-03', dataset: 'DS-v2.0', x: 220, c: '#4a9eed' },
        { ver: 'v1.2', stage: 'Challenger', acc: '87%', f1: '0.85', date: '2024-05', dataset: 'DS-v2.1', x: 420, c: '#4a9eed' },
        { ver: 'v1.3', stage: 'Staging', acc: '88%', f1: '0.86', date: '2024-06', dataset: 'DS-v3.0', x: 630, c: '#4a9eed' },
      ].map(({ ver, stage, acc, f1, date, dataset, x, c }) => (
        <g key={ver}>
          {/* connect to registry */}
          <path d={`M${x + 95} 80 L360 60`} stroke="#64748b" strokeWidth="1" strokeDasharray="3,2" />
          <rect x={x} y={80} width="190" height="110" rx="8" fill={`${c}12`} stroke={c} strokeWidth="1.8" />
          {/* Stage badge */}
          <rect x={x + 10} y={88} width={170 * 0.55} height={20} rx={10} fill={`${c}30`} stroke={c} strokeWidth="1" />
          <text x={x + 10 + 170 * 0.55 / 2} y={101} textAnchor="middle" fill={c} fontSize="8.5" fontWeight="700">{stage}</text>
          <text x={x + 95} y={120} textAnchor="middle" fill={c} fontSize="15" fontWeight="900">{ver}</text>
          <text x={x + 10} y={142} fill="var(--text-secondary)" fontSize="8">Accuracy: <tspan fill={c} fontWeight="700">{acc}</tspan></text>
          <text x={x + 10} y={155} fill="var(--text-secondary)" fontSize="8">F1 Score: <tspan fill={c} fontWeight="700">{f1}</tspan></text>
          <text x={x + 10} y={168} fill="var(--text-secondary)" fontSize="8">Treino: <tspan fill="var(--text-primary)">{date}</tspan></text>
          <text x={x + 10} y={181} fill="var(--text-secondary)" fontSize="8">Dataset: <tspan fill="var(--text-primary)" fontFamily="monospace">{dataset}</tspan></text>
        </g>
      ))}

      {/* Promotion arrows bottom */}
      <path d="M215 230 L270 230" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr-reg)" />
      <text x="242" y="225" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Archive</text>

      <path d="M405 215 L455 215" stroke="#4a9eed" strokeWidth="1.8" markerEnd="url(#arr-reg)" />
      <text x="430" y="210" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Promoção</text>

      <path d="M650 215 L560 215" stroke={color} strokeWidth="1.8" markerEnd="url(#arr-reg)" />
      <text x="610" y="210" textAnchor="middle" fill={color} fontSize="8" fontWeight="700">Validar</text>

      {/* Flow label */}
      <text x="360" y="270" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">
        Staging → Challenger → Champion → Archived (fluxo de promoção)
      </text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      O Model Registry é a fonte de verdade central para todos os modelos de uma organização. Cada entrada regista não apenas
      os pesos do modelo, mas o <strong>conjunto completo de metadata</strong>: métricas de avaliação, versão do dataset,
      data de treino e o stage actual. O fluxo de promoção — <em>Staging → Challenger → Champion → Archived</em> —
      garante que um modelo só vai para produção após validação formal e comparação com o modelo anterior.
    </p>
  </div>
);

/* ─────────────────────────────────────────────
   DIAGRAM 5 — Testing Strategy
───────────────────────────────────────────── */
const TestingStrategyDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Pirâmide de Testes para Sistemas ML</p>
    <svg viewBox="0 0 800 420" style={{ maxWidth: '100%', height: 'auto' }}>

      {/* Pyramid background */}
      <polygon points="400,20 730,380 70,380" fill="rgba(74,158,237,0.10)" stroke="var(--text-secondary)" strokeWidth="1" />

      {/* Levels from bottom to top */}
      {[
        {
          label: 'Testes Unitários',
          sublabel: 'Função a função · Rápidos (<1s) · Muitos',
          y: 318, width: 520, x: 140,
          examples: ['test_scaler_fit()', 'test_feature_engineering()', 'test_prediction_shape()'],
        },
        {
          label: 'Testes de Integração',
          sublabel: 'Pipeline completo · Médios (segundos)',
          y: 245, width: 370, x: 215,
          examples: ['test_full_pipeline()', 'test_api_endpoint()', 'test_model_load()'],
        },
        {
          label: 'Testes de Regressão',
          sublabel: 'Novo vs. Baseline · Minutos',
          y: 172, width: 230, x: 285,
          examples: ['acc_new > acc_baseline', 'no_performance_regression()'],
        },
        {
          label: 'A/B Tests',
          sublabel: 'Tráfego real · Horas/dias',
          y: 99, width: 120, x: 340,
          examples: ['live_traffic_split()'],
        },
      ].map(({ label, sublabel, y, width, x, examples }) => (
        <g key={label}>
          <rect x={x} y={y} width={width} height={55} rx="6" fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5" />
          <text x={x + width / 2} y={y + 18} textAnchor="middle" fill={color} fontSize="11" fontWeight="700">{label}</text>
          <text x={x + width / 2} y={y + 33} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">{sublabel}</text>
          <text x={x + width / 2} y={y + 48} textAnchor="middle" fill={color} fontSize="7" fontFamily="monospace">{examples.join(' · ')}</text>
        </g>
      ))}

      {/* Axes labels */}
      <text x="50" y="390" fill="var(--text-secondary)" fontSize="9">Lento</text>
      <text x="50" y="35" fill="var(--text-secondary)" fontSize="9">Rápido</text>
      <line x1="65" y1="380" x2="65" y2="25" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="22" y="210" fill="var(--text-secondary)" fontSize="9" transform="rotate(-90 22 210)">Velocidade</text>

      <text x="745" y="390" fill="var(--text-secondary)" fontSize="9">Muitos</text>
      <text x="745" y="35" fill="var(--text-secondary)" fontSize="9">Poucos</text>
      <line x1="740" y1="380" x2="740" y2="25" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="760" y="210" fill="var(--text-secondary)" fontSize="9" transform="rotate(90 760 210)">Quantidade</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      A pirâmide de testes para ML espelha a da engenharia de software, mas com camadas específicas. Na base, os
      <strong> testes unitários</strong> verificam funções individuais (o scaler transforma correctamente?). Os
      <strong> testes de integração</strong> correm o pipeline completo e testam a API. Os <strong>testes de regressão</strong>
      garantem que a nova versão do modelo não piora face ao baseline. No topo, os <strong>A/B tests</strong> com tráfego real
      validam o impacto de negócio — são os mais lentos e custosos, mas os mais fiáveis.
    </p>
  </div>
);

/* ─────────────────────────────────────────────
   DIAGRAM 6 — Champion / Challenger visual
───────────────────────────────────────────── */
const ChampionChallengerDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Conceito Champion / Challenger — Fluxo de Tráfego</p>
    <svg viewBox="0 0 640 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-cc" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#64748b" />
        </marker>
      </defs>

      {/* Traffic source */}
      <rect x="10" y="75" width="90" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.8" />
      <text x="55" y="97" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Requests</text>
      <text x="55" y="112" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">100%</text>

      {/* Router */}
      <path d="M100 100 L155 100" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr-cc)" />
      <rect x="155" y="75" width="80" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.8" />
      <text x="195" y="97" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Load</text>
      <text x="195" y="111" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Balancer</text>

      {/* Champion */}
      <path d="M235 90 L310 65" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#arr-cc)" />
      <text x="250" y="72" fill="#4a9eed" fontSize="8" fontWeight="700">90%</text>
      <rect x="310" y="40" width="130" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
      <text x="375" y="60" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="800">CHAMPION</text>
      <text x="375" y="76" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">model v1.1 — acc 85%</text>
      <text x="375" y="87" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Em produção</text>

      {/* Challenger */}
      <path d="M235 110 L310 135" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arr-cc)" />
      <text x="250" y="130" fill="#0284c7" fontSize="8" fontWeight="700">10%</text>
      <rect x="310" y="110" width="130" height="50" rx="8" fill="rgba(2,132,199,0.12)" stroke="#0284c7" strokeWidth="1.8" />
      <text x="375" y="130" textAnchor="middle" fill="#0284c7" fontSize="10" fontWeight="800">CHALLENGER</text>
      <text x="375" y="146" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">model v1.2 — acc 87%</text>
      <text x="375" y="157" textAnchor="middle" fill="#0284c7" fontSize="8" fontWeight="700">A validar</text>

      {/* Results */}
      <path d="M440 65 L500 65" stroke="#64748b" strokeWidth="1.3" strokeDasharray="3,2" markerEnd="url(#arr-cc)" />
      <path d="M440 135 L500 135" stroke="#64748b" strokeWidth="1.3" strokeDasharray="3,2" markerEnd="url(#arr-cc)" />
      <rect x="500" y="40" width="130" height="120" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="565" y="62" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="700">Comparação</text>
      <text x="565" y="82" textAnchor="middle" fill="#4a9eed" fontSize="8">Champion: 85%</text>
      <text x="565" y="96" textAnchor="middle" fill="#0284c7" fontSize="8">Challenger: 87%</text>
      <text x="565" y="115" textAnchor="middle" fill={color} fontSize="8" fontWeight="700">Challenger ganha →</text>
      <text x="565" y="130" textAnchor="middle" fill={color} fontSize="8" fontWeight="700">Promover para</text>
      <text x="565" y="143" textAnchor="middle" fill={color} fontSize="8" fontWeight="700">Champion!</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      No padrão Champion/Challenger, o modelo em produção (Champion) recebe a maioria do tráfego (ex: 90%) enquanto o novo
      modelo candidato (Challenger) recebe apenas uma fracção (10%). Se o Challenger demonstrar performance superior durante
      um período estatisticamente significativo, é promovido a Champion e o antigo é arquivado.
    </p>
  </div>
);

/* ─────────────────────────────────────────────
   DIAGRAM 7 — Artifact Versioning Tools
───────────────────────────────────────────── */
const VersioningToolsDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Ferramentas de Versionamento de Artefactos ML</p>
    <svg viewBox="0 0 680 200" style={{ maxWidth: '100%', height: 'auto' }}>

      {/* Tool cards */}
      {[
        {
          name: 'MLflow',
          tagline: 'Tracking + Registry',
          features: ['Regista métricas/params', 'Model Registry integrado', 'UI web para comparar runs', 'Open-source, self-hosted'],
          c: '#4a9eed', x: 20,
        },
        {
          name: 'DVC',
          tagline: 'Data Version Control',
          features: ['Versiona dados grandes (S3)', 'Pipeline de dados como Git', 'Integra com Git nativo', 'Reprodutibilidade total'],
          c: '#4a9eed', x: 190,
        },
        {
          name: 'W&B',
          tagline: 'Weights & Biases',
          features: ['Tracking visual avançado', 'Sweep de hiperparâmetros', 'Model Registry na cloud', 'Colaboração em equipa'],
          c: '#4a9eed', x: 360,
        },
        {
          name: 'Neptune',
          tagline: 'Metadata Store',
          features: ['Logging de qualquer obj.', 'Comparação visual', 'Integra 25+ frameworks', 'Focado em equipas'],
          c: '#4a9eed', x: 530,
        },
      ].map(({ name, tagline, features, c, x }) => (
        <g key={name}>
          <rect x={x} y={10} width={140} height={175} rx="10" fill={`${c}10`} stroke={c} strokeWidth="1.8" />
          <rect x={x} y={10} width={140} height={38} rx="10" fill={`${c}25`} />
          <text x={x + 70} y={31} textAnchor="middle" fill={c} fontSize="12" fontWeight="800">{name}</text>
          <text x={x + 70} y={43} textAnchor="middle" fill={c} fontSize="8">{tagline}</text>
          {features.map((f, fi) => (
            <g key={fi}>
              <circle cx={x + 15} cy={65 + fi * 28} r="3" fill={c} />
              <text x={x + 24} y={69 + fi * 28} fill="var(--text-primary)" fontSize="8">{f}</text>
            </g>
          ))}
        </g>
      ))}
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      Não existe uma solução única: <strong>MLflow</strong> é popular pela sua integração com Scikit-learn e PyTorch e pelo
      facto de ser completamente open-source e auto-hospedado. <strong>DVC</strong> foca-se no versionamento de dados grandes
      (que não cabem no Git) e em pipelines reprodutíveis. <strong>Weights &amp; Biases</strong> e <strong>Neptune</strong> são
      mais orientados para equipas e oferecem interfaces visuais ricas — com modelos cloud-hosted.
    </p>
  </div>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function MLOPS3() {
  return (
    <div style={S.page}>
      <Link to="/mlops" style={S.back}><ArrowLeft size={16} /> Voltar a MLOps</Link>

      <div style={S.tag}>MÓDULO 03</div>
      <h1 style={S.h1}>Produção & Deployment</h1>

      {/* ═══════════════════════════════════════
          SECTION 1 — Pipeline de Produção
      ═══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Pipeline de Produção ML</h2>
        <p style={S.p}>
          Um pipeline de produção ML é fundamentalmente diferente de uma simples sequência de chamadas a funções. Cada
          etapa produz e consome artefactos bem definidos, e o pipeline como um todo tem de ser <strong>reproducível</strong>,
          <strong> auditável</strong> e <strong>automatizável</strong>. Em MLOps maduro, um git push desencadeia todo o
          processo — sem intervenção humana — até ao modelo em produção a servir predições.
        </p>
        <MLPipelineDiagram />

        <h3 style={S.h3}>Cada Etapa em Detalhe</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Etapa</th>
                <th style={S.th}>O que faz</th>
                <th style={S.th}>Artefacto de saída</th>
                <th style={S.th}>Ferramentas</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Data Ingestion', 'Extrai dados das fontes (S3, bases de dados, Kafka)', 'raw_data.parquet', 'Airflow, Spark, Pandas'],
                ['Data Validation', 'Verifica schema, tipos, distribuições estatísticas e valores em falta', 'validation_report.json', 'Great Expectations, Evidently'],
                ['Feature Engineering', 'Normaliza, codifica, selecciona features; ajusta transformers', 'processed_data.parquet + scaler.pkl', 'Scikit-learn Pipelines, Feast'],
                ['Training', 'Treina o modelo com os dados processados e os hiperparâmetros definidos', 'model.pkl + training_metrics.json', 'sklearn, PyTorch, XGBoost'],
                ['Evaluation', 'Calcula métricas em dados de teste nunca vistos durante treino', 'eval_metrics.json + confusion_matrix', 'sklearn.metrics, MLflow'],
                ['Gate (Threshold)', 'Compara métricas com thresholds definidos; bloqueia pipeline se não passar', 'PASS / FAIL signal', 'MLflow, custom CI step'],
                ['Model Registry', 'Regista modelo aprovado com metadata completa; atribui versão', 'Modelo registado + metadata', 'MLflow Model Registry, W&B'],
                ['Serving', 'Expõe o modelo como API REST para consumo de aplicações', 'Endpoint em produção', 'FastAPI, BentoML, TF Serving'],
              ].map(([etapa, faz, saida, tools]) => (
                <tr key={etapa}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{etapa}</td>
                  <td style={S.td}>{faz}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{saida}</td>
                  <td style={{ ...S.td, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{tools}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.highlight}>
          <strong>Princípio fundamental:</strong> em ML, a qualidade do output do pipeline nunca pode exceder a qualidade
          do input. Um modelo treinado com dados corrompidos, mal validados ou com <em>leakage</em> vai falhar
          em produção — muitas vezes de forma silenciosa e difícil de diagnosticar.
        </div>
        <p style={S.p}>
          O conceito de <strong>data leakage</strong> é um dos riscos mais frequentes: ocorre quando informação do futuro
          (ou do conjunto de teste) "vaza" para o treino. Por exemplo, normalizar os dados <em>antes</em> de fazer o
          train/test split usa estatísticas calculadas sobre o conjunto de teste — tornando as métricas de avaliação
          artificialmente optimistas. A regra é simples: o split acontece <strong>primeiro</strong>, e todos os transformers
          são ajustados <em>apenas</em> nos dados de treino.
        </p>
        <div style={S.math}>
          <BlockMath math="\text{Threshold check: } \text{acc}_{test} \geq \tau \quad \text{e} \quad \text{F1}_{test} \geq \phi" />
        </div>
        <p style={S.p}>
          O gate de threshold define formalmente quando um modelo está pronto para produção. Os valores <InlineMath math="\tau" /> e
          <InlineMath math="\phi" /> são definidos pela equipa de produto com base nos requisitos de negócio — por exemplo,
          <InlineMath math="\tau = 0.92" /> e <InlineMath math="\phi = 0.88" /> para um detector de fraude em pagamentos.
        </p>
      </div>

      {/* ═══════════════════════════════════════
          SECTION 2 — ML Artifacts
      ═══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>2. ML Artifacts — O Que Versionar</h2>
        <p style={S.p}>
          Um experimento de ML produz muito mais do que um ficheiro de modelo. Para ser reproduzível e auditável, é
          preciso versionar em conjunto os dados, os transformers, o modelo, as métricas e a configuração usada.
        </p>
        <MLArtifactsDiagram />
      </div>

      {/* ═══════════════════════════════════════
          SECTION 3 — CI/CD para ML
      ═══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>3. CI/CD Adaptado para Machine Learning</h2>
        <p style={S.p}>
          O CI/CD tradicional foca-se em testar e fazer deploy de código. Em ML, o pipeline de CI/CD tem de validar
          também os dados e o comportamento do modelo, não apenas se o código compila e passa nos testes unitários.
        </p>
        <CICDForMLDiagram />
      </div>

      {/* ═══════════════════════════════════════
          SECTION 4 — Model Registry & Champion/Challenger
      ═══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Model Registry & Champion/Challenger</h2>
        <p style={S.p}>
          O Model Registry centraliza todas as versões de um modelo com a sua metadata completa, permitindo comparar
          candidatos e promover a versão vencedora para produção de forma controlada.
        </p>
        <ModelRegistryDiagram />
        <ChampionChallengerDiagram />
      </div>

      {/* ═══════════════════════════════════════
          SECTION 5 — Testing Strategy
      ═══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Testing Strategy para Sistemas ML</h2>
        <p style={S.p}>
          Tal como no software tradicional, os testes de ML formam uma pirâmide: mais testes rápidos e baratos na
          base, menos testes lentos e caros no topo — mas com camadas específicas para dados e modelos.
        </p>
        <TestingStrategyDiagram />
      </div>

      {/* ═══════════════════════════════════════
          SECTION 6 — Versioning Tools
      ═══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Ferramentas de Versionamento de Artefactos</h2>
        <p style={S.p}>
          Existem várias ferramentas consolidadas para gerir o ciclo de vida de artefactos ML, cada uma com um foco
          diferente — tracking de experimentos, versionamento de dados grandes, ou colaboração em equipa.
        </p>
        <VersioningToolsDiagram />
      </div>
</div>
  );
}
