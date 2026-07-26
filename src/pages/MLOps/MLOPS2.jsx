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

// ============================================================
// DIAGRAM 1 — DataValidationPipelineDiagram
// ============================================================
const DataValidationPipelineDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Pipeline de Dados com Validation Gate</p>
    <svg viewBox="0 0 620 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-dvp" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--text-secondary)" />
        </marker>
        <marker id="arr-pass" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#4a9eed" />
        </marker>
        <marker id="arr-fail" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#4a9eed" />
        </marker>
      </defs>

      {/* Raw Data */}
      <rect x="10" y="75" width="100" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.8" />
      <text x="60" y="97" textAnchor="middle" fill={color} fontSize="10" fontWeight="800">Raw Data</text>
      <text x="60" y="112" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">CSV / DB / S3</text>
      <path d="M110 100 L145 100" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-dvp)" />

      {/* Validation Gate */}
      <rect x="145" y="65" width="120" height="70" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="2" />
      <text x="205" y="88" textAnchor="middle" fill={color} fontSize="10" fontWeight="800">Data Validation</text>
      <text x="205" y="102" textAnchor="middle" fill={color} fontSize="8.5">Great Expectations</text>
      <text x="205" y="116" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Expectation Suite</text>
      <text x="205" y="128" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Checkpoint run</text>

      {/* Decision diamond */}
      <polygon points="310,85 340,100 310,115 280,100" fill="rgba(2,132,199,0.15)" stroke="#0284c7" strokeWidth="1.8" />
      <text x="310" y="104" textAnchor="middle" fill="#0284c7" fontSize="8" fontWeight="800">PASS?</text>
      <path d="M265 100 L278 100" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-dvp)" />

      {/* PASS branch — right */}
      <path d="M342 100 L378 100" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr-pass)" />
      <text x="360" y="93" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">✓ PASS</text>

      {/* Feature Engineering */}
      <rect x="378" y="75" width="110" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.8" />
      <text x="433" y="97" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="800">Feature Eng.</text>
      <text x="433" y="112" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Transform + encode</text>
      <path d="M488 100 L518 100" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-dvp)" />

      {/* Model Training */}
      <rect x="518" y="75" width="90" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.8" />
      <text x="563" y="97" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="800">Training</text>
      <text x="563" y="112" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">sklearn / torch</text>

      {/* FAIL branch — down */}
      <path d="M310 117 L310 160" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr-fail)" />
      <text x="330" y="142" fill="#4a9eed" fontSize="8" fontWeight="700">✗ FAIL</text>
      <rect x="195" y="162" width="235" height="30" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="312" y="180" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Pipeline interrompido — alertas enviados</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      O Validation Gate é a ideia central: o pipeline só avança se os dados passarem no contrato de
      qualidade definido. Em caso de falha, o pipeline para imediatamente e envia alertas — em vez
      de desperdiçar horas de treino com dados corrompidos.
    </p>
  </div>
);

// ============================================================
// DIAGRAM 2 — GreatExpectationsDiagram
// ============================================================
const GreatExpectationsDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Great Expectations — Expectation Suite aplicada a uma tabela</p>
    <svg viewBox="0 0 620 280" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-ge" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* Mini data table on the left */}
      <text x="10" y="20" fill={color} fontSize="10" fontWeight="800">Dados de entrada</text>
      <rect x="10" y="28" width="220" height="25" rx="4" fill="rgba(74,158,237,0.10)" />
      <text x="20" y="44" fill={color} fontSize="9" fontWeight="700">customer_id</text>
      <text x="95" y="44" fill={color} fontSize="9" fontWeight="700">age</text>
      <text x="140" y="44" fill={color} fontSize="9" fontWeight="700">email</text>
      <text x="195" y="44" fill={color} fontSize="9" fontWeight="700">status</text>

      {[
        { id: 'C001', age: '28', email: 'a@b.com', status: 'active', ok: [true, true, true, true] },
        { id: 'C002', age: 'NULL', email: 'c@d.com', status: 'inactive', ok: [true, false, true, true] },
        { id: 'C003', age: '35', email: 'bad-email', status: 'vip', ok: [true, true, false, false] },
        { id: 'C004', age: '150', email: 'e@f.com', status: 'active', ok: [true, false, true, true] },
      ].map(({ id, age, email, status, ok }, ri) => (
        <g key={ri}>
          <rect x="10" y={56 + ri * 24} width="220" height="22" rx="2" fill={ri % 2 === 0 ? 'var(--bg-primary)' : 'transparent'} />
          <text x="20" y={72 + ri * 24} fill="var(--text-primary)" fontSize="9">{id}</text>
          <text x="95" y={72 + ri * 24} fill={ok[1] ? 'var(--text-primary)' : '#4a9eed'} fontSize="9" fontWeight={ok[1] ? '400' : '700'}>{age}</text>
          <text x="140" y={72 + ri * 24} fill={ok[2] ? 'var(--text-primary)' : '#4a9eed'} fontSize="9" fontWeight={ok[2] ? '400' : '700'}>{email}</text>
          <text x="195" y={72 + ri * 24} fill={ok[3] ? 'var(--text-primary)' : '#4a9eed'} fontSize="9" fontWeight={ok[3] ? '400' : '700'}>{status}</text>
        </g>
      ))}

      {/* Arrow to GE */}
      <path d="M232 150 L268 150" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-ge)" />

      {/* Expectation Suite box */}
      <text x="272" y="20" fill={color} fontSize="10" fontWeight="800">Expectation Suite</text>
      <rect x="272" y="28" width="200" height="165" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      {(() => {
        const rules = [
          { text: 'not_null(customer_id)', lines: 1 },
          { text: 'between(age, 0, 120)', lines: 1 },
          { text: 'match_regex(email, ...)', lines: 1 },
          { text: 'in_set(status, [active,\n   inactive, pending])', lines: 2 },
          { text: 'unique(customer_id)', lines: 1 },
        ];
        let yOff = 38;
        return rules.map((rule, i) => {
          const h = rule.lines > 1 ? 34 : 22;
          const g = (
            <g key={i}>
              <rect x="282" y={yOff} width="180" height={h} rx="4" fill={`${color}15`} stroke={`${color}30`} strokeWidth="1" />
              {rule.text.split('\n').map((line, li) => (
                <text key={li} x="292" y={yOff + 15 + li * 12} fill={color} fontSize="8.5" fontFamily="monospace">{line}</text>
              ))}
            </g>
          );
          yOff += h + 6;
          return g;
        });
      })()}
      <path d="M474 150 L510 150" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-ge)" />

      {/* Results column */}
      <text x="514" y="20" fill="var(--text-primary)" fontSize="10" fontWeight="800">Resultados</text>
      {(() => {
        const results = [
          { ok: true, lines: 1 },
          { ok: false, lines: 1 },
          { ok: false, lines: 1 },
          { ok: false, lines: 2 },
          { ok: true, lines: 1 },
        ];
        let yOff = 38;
        return results.map(({ ok, lines }, i) => {
          const h = lines > 1 ? 34 : 22;
          const g = (
            <g key={i}>
              <rect x="514" y={yOff} width="95" height={h} rx="4" fill={ok ? 'rgba(74,158,237,0.10)' : 'rgba(74,158,237,0.10)'} stroke="#4a9eed" strokeWidth="1" />
              <text x="561" y={yOff + h/2 + 4} textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="800">{ok ? '✓ PASS' : '✗ FAIL'}</text>
            </g>
          );
          yOff += h + 6;
          return g;
        });
      })()}

      {/* Overall result */}
      <rect x="514" y="190" width="95" height="30" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="561" y="202" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="800">SUITE FAILED</text>
      <text x="561" y="212" textAnchor="middle" fill="#4a9eed" fontSize="8">3 expectations</text>

      <text x="310" y="245" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">GE gera relatório HTML detalhado + DataValidationError para o pipeline</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      A Expectation Suite é executada como um Checkpoint. Se qualquer expectation falhar, o pipeline
      recebe uma excepção com o relatório completo de o que falhou, em que linhas, e com que valores.
      Isto transforma erros silenciosos em erros explícitos e accionáveis.
    </p>
  </div>
);

// ============================================================
// DIAGRAM 3 — FeatureStoreDiagram
// ============================================================
const FeatureStoreDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Feature Store — Arquitectura Offline + Online</p>
    <svg viewBox="0 0 620 280" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-fs" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
        <marker id="arr-fs-g" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
        </marker>
        <marker id="arr-fs-o" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#0284c7" />
        </marker>
      </defs>

      {/* Raw Data Sources */}
      <rect x="10" y="90" width="120" height="80" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="70" y="112" textAnchor="middle" fill={color} fontSize="10" fontWeight="800">Raw Sources</text>
      <text x="70" y="128" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">• Databases (SQL)</text>
      <text x="70" y="140" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">• Kafka streams</text>
      <text x="70" y="152" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">• Data Lake (S3)</text>
      <text x="70" y="164" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">• APIs externas</text>
      <path d="M130 130 L168 130" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-fs)" />

      {/* Feature Pipeline */}
      <rect x="170" y="105" width="110" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="225" y="120" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Feature</text>
      <text x="225" y="132" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Pipeline</text>
      <text x="225" y="145" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">transform + compute</text>
      <path d="M280 130 L318 130" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-fs)" />

      {/* Feature Store central */}
      <rect x="320" y="60" width="130" height="140" rx="10" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="2.5" />
      <text x="385" y="82" textAnchor="middle" fill={color} fontSize="12" fontWeight="800">Feature</text>
      <text x="385" y="97" textAnchor="middle" fill={color} fontSize="12" fontWeight="800">Store</text>
      <text x="385" y="115" textAnchor="middle" fill={color} fontSize="8.5" fontWeight="700">Feast / Tecton / Hopsworks</text>

      {/* Offline Store sub-box */}
      <rect x="330" y="122" width="110" height="34" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1" />
      <text x="385" y="136" textAnchor="middle" fill="#4a9eed" fontSize="8.5" fontWeight="700">Offline Store</text>
      <text x="385" y="149" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Parquet / BigQuery / S3</text>

      {/* Online Store sub-box */}
      <rect x="330" y="162" width="110" height="30" rx="5" fill="rgba(2,132,199,0.15)" stroke="#0284c7" strokeWidth="1" />
      <text x="385" y="176" textAnchor="middle" fill="#0284c7" fontSize="8.5" fontWeight="700">Online Store</text>
      <text x="385" y="188" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Redis / DynamoDB</text>

      {/* Arrow to Training */}
      <path d="M450 139 L490 100" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr-fs-g)" />
      <rect x="490" y="70" width="120" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="550" y="85" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="800">Model Training</text>
      <text x="550" y="97" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">batch features</text>
      <text x="550" y="107" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">histórico completo</text>

      {/* Arrow to Serving */}
      <path d="M450 177 L490 185" stroke="#0284c7" strokeWidth="1.5" markerEnd="url(#arr-fs-o)" />
      <rect x="490" y="165" width="120" height="50" rx="8" fill="rgba(2,132,199,0.12)" stroke="#0284c7" strokeWidth="1.5" />
      <text x="550" y="180" textAnchor="middle" fill="#0284c7" fontSize="10" fontWeight="800">Inference Serving</text>
      <text x="550" y="195" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">online features</text>
      <text x="550" y="208" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">latência &lt; 10ms</text>

      {/* Label arrows */}
      <text x="468" y="130" fill="#4a9eed" fontSize="7.5" fontStyle="italic">batch / histórico</text>
      <text x="456" y="158" fill="#0284c7" fontSize="7.5" fontStyle="italic">real-time lookup</text>

      <text x="310" y="248" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">
        Mesma feature definition → treino e serving sempre consistentes
      </text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      A Feature Store resolve o problema de <strong>training-serving skew</strong>: quando as features
      são calculadas de forma diferente durante o treino e durante a inferência em produção, o modelo
      comporta-se de forma diferente mesmo com os mesmos dados brutos. A Feature Store garante que
      a mesma definição é usada em ambos os contextos.
    </p>
  </div>
);

// ============================================================
// DIAGRAM 4 — TestingPyramidDiagram
// ============================================================
const TestingPyramidDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Pirâmide de Testes para Sistemas ML</p>
    <svg viewBox="0 0 580 290" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Base — Unit Tests */}
      <polygon points="50,250 530,250 430,170 150,170" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
      <text x="290" y="205" textAnchor="middle" fill="#4a9eed" fontSize="12" fontWeight="800">Unit Tests</text>
      <text x="290" y="222" textAnchor="middle" fill="#4a9eed" fontSize="9">schema validation • column types • null checks • value ranges</text>
      <text x="290" y="236" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">Great Expectations, Pandera, pytest-dataframes</text>
      <text x="70" y="245" fill="#4a9eed" fontSize="9" fontWeight="700">Muitos · Rápidos · Baratos</text>

      {/* Middle — Integration Tests */}
      <polygon points="150,168 430,168 360,100 220,100" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
      <text x="290" y="130" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="800">Integration Tests</text>
      <text x="290" y="147" textAnchor="middle" fill="#4a9eed" fontSize="8">pipeline end-to-end • feature transforms • data contracts</text>
      <text x="290" y="162" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">pytest + dados sintéticos + mock de APIs externas</text>

      {/* Top — System Tests */}
      <polygon points="220,98 360,98 310,40 270,40" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="2" />
      <text x="290" y="68" textAnchor="middle" fill={color} fontSize="10" fontWeight="800">System Tests</text>
      <text x="290" y="82" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">model perf • holdout</text>

      {/* Side annotations */}
      <text x="10" y="40" fill={color} fontSize="8.5" fontWeight="700">Poucos</text>
      <text x="10" y="52" fill={color} fontSize="8.5" fontWeight="700">Lentos</text>
      <text x="10" y="64" fill={color} fontSize="8.5" fontWeight="700">Caros</text>
      <line x1="42" y1="40" x2="42" y2="250" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
      <text x="575" y="40" textAnchor="end" fill={color} fontSize="8.5">Alto custo</text>
      <text x="575" y="150" textAnchor="end" fill="#4a9eed" fontSize="8.5">Médio custo</text>
      <text x="575" y="240" textAnchor="end" fill="#4a9eed" fontSize="8.5">Baixo custo</text>

      <text x="290" y="278" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">
        Investir pesado na base — unit tests baratos detectam 80% dos problemas
      </text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      A pirâmide de testes inverte o padrão típico dos projectos ML sem MLOps: em vez de depender
      apenas de testes manuais de performance no topo, investir na base de testes unitários de dados
      que são rápidos, baratos e detectam a maioria dos problemas antes de desperdiçar tempo de treino.
    </p>
  </div>
);

// ============================================================
// DIAGRAM 5 — ModularityDiagram
// ============================================================
const ModularityDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Monolito vs. Pipeline Modular</p>
    <svg viewBox="0 0 620 240" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-mod" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* LEFT — Monolith */}
      <text x="100" y="18" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="800">Monolito ML (train.py)</text>
      <rect x="20" y="26" width="165" height="185" rx="10" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
      {[
        '# load data',
        '# clean data',
        '# encode cats',
        '# normalize',
        '# train model',
        '# evaluate',
        '# save model',
        '# 800 lines...',
      ].map((line, i) => (
        <text key={i} x="35" y={45 + i * 21} fill={i === 7 ? '#4a9eed' : 'var(--text-secondary)'} fontSize="8.5" fontFamily="monospace">{line}</text>
      ))}
      <text x="102" y="224" textAnchor="middle" fill="#4a9eed" fontSize="8">Impossível testar isoladamente</text>

      {/* Divider */}
      <text x="210" y="122" textAnchor="middle" fill="var(--text-secondary)" fontSize="20">→</text>

      {/* RIGHT — Modular */}
      <text x="430" y="18" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="800">Pipeline Modular MLOps</text>
      {[
        { label: 'ingest.py', sub: 'load_data()', c: '#4a9eed', x: 235, y: 35 },
        { label: 'validate.py', sub: 'run_checkpoint()', c: color, x: 335, y: 35 },
        { label: 'transform.py', sub: 'feature_engineer()', c: '#4a9eed', x: 440, y: 35 },
        { label: 'train.py', sub: 'fit_model()', c: '#4a9eed', x: 540, y: 35 },
        { label: 'evaluate.py', sub: 'compute_metrics()', c: '#4a9eed', x: 335, y: 145 },
        { label: 'register.py', sub: 'mlflow.register()', c: '#4a9eed', x: 440, y: 145 },
      ].map(({ label, sub, c, x, y }, i) => (
        <g key={i}>
          <rect x={x - 45} y={y} width="90" height="50" rx="7" fill={`${c}15`} stroke={c} strokeWidth="1.5" />
          <text x={x} y={y + 20} textAnchor="middle" fill={c} fontSize="9" fontWeight="800">{label}</text>
          <text x={x} y={y + 35} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5" fontFamily="monospace">{sub}</text>
          <rect x={x - 18} y={y + 43} width="36" height="12" rx="3" fill="#4a9eed" opacity="0.8" />
          <text x={x} y={y + 52} textAnchor="middle" fill="white" fontSize="7" fontWeight="700">✓ testável</text>
        </g>
      ))}
      {/* Arrows between modules */}
      <path d="M280 60 L290 60" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-mod)" />
      <path d="M380 60 L395 60" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-mod)" />
      <path d="M485 60 L495 60" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-mod)" />
      {/* Down arrow from train to evaluate */}
      <path d="M540 85 L540 120 L380 120 L380 145" fill="none" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-mod)" />
      <path d="M380 195 L440 195" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-mod)" />

      <text x="430" y="228" textAnchor="middle" fill="#4a9eed" fontSize="8">Cada módulo = 1 função pura + 1 ficheiro de testes</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      A transição do monolito para o pipeline modular é uma das mudanças culturais mais importantes
      que o MLOps exige. Cada módulo tem uma única responsabilidade, pode ser testado isoladamente,
      e pode ser substituído sem afectar os restantes — seguindo o princípio de
      <strong> Single Responsibility</strong> da engenharia de software.
    </p>
  </div>
);

// ============================================================
// DIAGRAM 6 — TrainingServingSkewDiagram
// ============================================================
const TrainingServingSkewDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Training-Serving Skew — O Problema e a Solução</p>
    <svg viewBox="0 0 600 210" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-skw" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* WITHOUT Feature Store */}
      <text x="145" y="15" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="800">Sem Feature Store — SKEW</text>
      <rect x="10" y="22" width="110" height="45" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="65" y="42" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Data Warehouse</text>
      <text x="65" y="56" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">SQL features</text>
      <path d="M120 40 L145 65" stroke="#4a9eed" strokeWidth="1.3" markerEnd="url(#arr-skw)" />
      <path d="M120 48 L145 90" stroke="#4a9eed" strokeWidth="1.3" markerEnd="url(#arr-skw)" />

      <rect x="125" y="58" width="155" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.3" />
      <text x="202" y="75" textAnchor="middle" fill="#4a9eed" fontSize="8.5">Training: avg_7d = pandas.mean()</text>
      <rect x="125" y="90" width="155" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.3" />
      <text x="202" y="107" textAnchor="middle" fill="#4a9eed" fontSize="8.5">Serving: avg_7d = redis.get()?</text>

      <text x="205" y="135" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Resultados diferentes!</text>
      <text x="205" y="148" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Modelo recebe features diferentes em treino vs. produção</text>

      {/* Divider */}
      <line x1="295" y1="15" x2="295" y2="165" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="5,4" />
      <text x="295" y="180" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">vs.</text>

      {/* WITH Feature Store */}
      <text x="450" y="15" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="800">Com Feature Store — CONSISTENTE</text>
      <rect x="310" y="60" width="120" height="65" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.8" />
      <text x="370" y="80" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="800">Feature Store</text>
      <text x="370" y="95" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">avg_7d definido uma vez</text>
      <text x="370" y="108" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">em Python / SQL</text>
      <text x="370" y="122" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Feast FeatureView</text>

      <path d="M430 80 L458 65" stroke="#4a9eed" strokeWidth="1.3" markerEnd="url(#arr-skw)" />
      <path d="M430 107 L458 127" stroke="#4a9eed" strokeWidth="1.3" markerEnd="url(#arr-skw)" />
      <rect x="458" y="47" width="130" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.3" />
      <text x="523" y="65" textAnchor="middle" fill="#4a9eed" fontSize="8.5">Training: Feature Store (batch)</text>
      <rect x="458" y="113" width="130" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.3" />
      <text x="523" y="131" textAnchor="middle" fill="#4a9eed" fontSize="8.5">Serving: Feature Store (online)</text>
      <text x="523" y="155" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Resultados idênticos!</text>
    </svg>
  </div>
);

// ============================================================
// DIAGRAM 7 — GEWorkflowDiagram (interactive)
// ============================================================
const GEExplorer = () => {
  const [active, setActive] = useState(0);
  const checks = [
    {
      name: 'Not Null',
      color: '#4a9eed',
      code: 'expect_column_values_to_not_be_null(\n  column="customer_id"\n)',
      desc: 'Verifica que a coluna não tem valores nulos. Um dos testes mais básicos mas mais importantes — dados nulos em campos chave corrompem silenciosamente os resultados do modelo.',
      when: 'Usar em todas as colunas que são chave primária, identificador ou obrigatórias para o modelo.',
    },
    {
      name: 'Between',
      color: '#4a9eed',
      code: 'expect_column_values_to_be_between(\n  column="age",\n  min_value=0,\n  max_value=120\n)',
      desc: 'Garante que os valores estão dentro de um intervalo fisicamente aceitável. Detecta outliers impossíveis (idade negativa, temperatura de -500°C, preço de €0.00 em produto premium).',
      when: 'Usar em variáveis numéricas contínuas onde existem limites físicos ou de negócio conhecidos.',
    },
    {
      name: 'Unique',
      color: color,
      code: 'expect_column_values_to_be_unique(\n  column="transaction_id"\n)',
      desc: 'Assegura unicidade. Duplicados em IDs de transacção podem inflar artificialmente métricas e introduzir data leakage — a mesma transacção tanto em treino como em teste.',
      when: 'Usar em identificadores únicos antes de qualquer split treino/teste.',
    },
    {
      name: 'Regex',
      color: '#4a9eed',
      code: 'expect_column_values_to_match_regex(\n  column="email",\n  regex=r"^[^@]+@[^@]+\\.[^@]+$"\n)',
      desc: 'Valida o formato de strings com expressões regulares. Útil para emails, IBANs, códigos postais, datas em formato string — qualquer campo com formato predefinido.',
      when: 'Usar quando campos string têm formato obrigatório que pode ser codificado como regex.',
    },
    {
      name: 'In Set',
      color: '#4a9eed',
      code: 'expect_column_values_to_be_in_set(\n  column="status",\n  value_set=["active","inactive","pending"]\n)',
      desc: 'Restringe os valores a um conjunto conhecido. Detecta novos valores categóricos que o modelo nunca viu durante o treino — um sinal precoce de concept drift em features categóricas.',
      when: 'Usar em todas as variáveis categóricas para detectar novas categorias antes que cheguem ao modelo.',
    },
  ];
  const c = checks[active];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Great Expectations — Tipos de Expectations</p>
      <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {checks.map((ch, i) => (
          <button key={i} onClick={() => setActive(i)} style={{ padding: '0.3rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.8rem', background: active === i ? ch.color : 'var(--bg-primary)', color: active === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${active === i ? ch.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>
            {ch.name}
          </button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${c.color}40` }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>{c.desc}</p>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', fontStyle: 'italic' }}><strong>Quando usar:</strong> {c.when}</p>
        <pre style={{ background: `${c.color}10`, border: `1px solid ${c.color}30`, borderRadius: 8, padding: '0.75rem 1rem', fontSize: '0.85rem', color: c.color, fontFamily: 'monospace', overflowX: 'auto', margin: 0 }}>{c.code}</pre>
      </div>
    </div>
  );
};

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function MLOPS2() {
  return (
    <div style={S.page}>
      <Link to="/mlops" style={S.back}><ArrowLeft size={16} /> Voltar a MLOps</Link>

      <div style={S.tag}>MÓDULO 02</div>
      <h1 style={S.h1}>Model Development &amp; Validação de Dados</h1>

      {/* ===== SECTION 1 ===== */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Desenvolvimento de Modelos — Boas Práticas</h2>
        <p style={S.p}>
          Um pipeline de desenvolvimento ML maduro não é um notebook de 800 linhas — é uma
          sequência de etapas independentes, cada uma com uma responsabilidade clara, testável
          isoladamente, e cujo output é sempre o mesmo dado o mesmo input (determinismo).
          A validação de dados é o ponto de inflexão: é o "gate" que garante que só dados de
          qualidade suficiente avançam para as etapas seguintes.
        </p>
        <DataValidationPipelineDiagram />
        <h3 style={S.h3}>Princípios de um Bom Workflow de Desenvolvimento ML</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Princípio</th>
                <th style={S.th}>Descrição</th>
                <th style={S.th}>Anti-padrão comum</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Fail Fast', 'O pipeline valida os dados na primeira etapa e falha explicitamente se não cumprirem o contrato', 'Descobrir dados corrompidos só depois de 6 horas de treino em GPU'],
                ['Separação de Concerns', 'Cada etapa do pipeline faz uma coisa só (Single Responsibility)', 'Um único script train.py com 800 linhas que faz tudo'],
                ['Idempotência', 'Correr o mesmo pipeline duas vezes com os mesmos inputs produz exactamente o mesmo output', 'Pipeline que escreve estado intermédio que afecta execuções futuras'],
                ['Testabilidade', 'Cada componente pode ser testado isoladamente com inputs sintéticos', 'Pipeline que só pode ser testado end-to-end com dados reais de produção'],
                ['Observabilidade', 'Cada etapa loga métricas, inputs e outputs para rastreabilidade completa', 'Pipeline que não regista nada — impossível debugar falhas em produção'],
                ['Versionamento de Artefactos', 'Dados, código e modelos são versionados e a relação entre eles é rastreável', 'Modelo em produção cujo conjunto de treino é desconhecido'],
              ].map(([p, d, a]) => (
                <tr key={p}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{p}</td>
                  <td style={S.td}>{d}</td>
                  <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem', fontStyle: 'italic' }}>{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          A formalização matemática da qualidade de dados pode ser expressa como um conjunto de
          invariantes que os dados devem satisfazer. Para uma coluna <InlineMath math="c_i" /> e
          uma expectation <InlineMath math="e_j" />, o resultado da validação é:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{valid}(D) = \bigwedge_{j=1}^{n} e_j(D) \quad \text{onde } e_j: \mathcal{D} \to \{0,1\}" />
        </div>
        <p style={S.p}>
          O pipeline só avança se <InlineMath math="\text{valid}(D) = 1" />, ou seja, se todas as
          <InlineMath math="n" /> expectations passarem. Uma única falha interrompe o pipeline e
          gera um relatório detalhado — comportamento completamente diferente do silêncio dos
          pipelines sem validação.
        </p>
        <div style={S.note}>
          <strong>Regra de ouro:</strong> O pipeline deve falhar ruidosamente cedo e nunca
          silenciosamente tarde. Uma excepção às 9h da manhã na etapa de validação custa 5 minutos
          de debugging. Dados errados que chegam ao modelo custam semanas de investigação post-mortem.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ===== SECTION 2 ===== */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Great Expectations — Validação de Dados</h2>
        <p style={S.p}>
          Great Expectations (GE) é a biblioteca de referência para data validation em ML.
          O conceito central é a <strong>Expectation Suite</strong> — um conjunto de regras
          ("expectations") que definem o contrato de qualidade dos dados. A Suite é executada
          como um <strong>Checkpoint</strong> que produz um relatório HTML detalhado e, em caso
          de falha, levanta uma excepção que interrompe o pipeline.
        </p>
        <GreatExpectationsDiagram />
        <GEExplorer />
        <h3 style={S.h3}>Workflow Completo com Great Expectations</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Passo</th>
                <th style={S.th}>Acção</th>
                <th style={S.th}>Output</th>
                <th style={S.th}>Código</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1. Data Context', 'Inicializar o contexto GE no projecto', 'great_expectations/ directory', 'ge.get_context()'],
                ['2. Data Source', 'Ligar ao CSV, base de dados ou S3', 'Datasource configurado', 'context.sources.add_pandas_filesystem(...)'],
                ['3. Expectation Suite', 'Definir as regras de validação', 'Ficheiro JSON com expectations', 'context.add_or_update_expectation_suite(...)'],
                ['4. Batch Request', 'Seleccionar batch de dados a validar', 'Referência ao batch específico', 'datasource.get_batch(batch_request)'],
                ['5. Checkpoint', 'Executar a Suite contra o batch', 'Relatório HTML + pass/fail JSON', 'context.run_checkpoint(checkpoint_name)'],
                ['6. Pipeline Gate', 'Verificar resultado e parar se FAIL', 'DataValidationError ou continua', 'if not result["success"]: raise'],
              ].map(([p, a, o, c]) => (
                <tr key={p}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{p}</td>
                  <td style={S.td}>{a}</td>
                  <td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{o}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.8rem', color: '#4a9eed' }}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.highlight}>
          <strong>Tipos de Expectations disponíveis:</strong> GE oferece mais de 50 expectations
          built-in, organizadas por categoria: de coluna (not_null, between, in_set, match_regex,
          unique, of_type), de tabela (row_count, column_count, column_names), e estatísticas
          (mean_between, median_between, quantile_values). É também possível criar expectations
          customizadas com funções Python arbitrárias.
        </div>
        <div style={S.note}>
          <strong>GE vs. Pandera vs. Cerberus:</strong> GE é mais verboso mas produz relatórios HTML
          e integra com Data Docs (documentação automática dos dados). Pandera é mais Pythónico
          (decoradores em DataFrames) e mais rápido para projectos pequenos. Para MLOps em produção
          com múltiplos datasets e equipas, GE é a escolha mais robusta.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ===== SECTION 3 ===== */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Feature Store</h2>
        <p style={S.p}>
          Uma Feature Store é um repositório centralizado de features de ML que resolve três
          problemas em simultâneo: <strong>training-serving skew</strong> (features calculadas
          de forma diferente em treino e produção), <strong>duplicação de código</strong>
          (múltiplas equipas reimplementam as mesmas features), e
          <strong> latência em inferência</strong> (features complexas calculadas em tempo real
          quando podiam ser pré-computadas).
        </p>
        <FeatureStoreDiagram />
        <TrainingServingSkewDiagram />
        <h3 style={S.h3}>Offline Store vs. Online Store</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Aspecto</th>
                <th style={S.th}>Offline Store</th>
                <th style={S.th}>Online Store</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Propósito', 'Treino de modelos com histórico completo', 'Inferência em tempo real com baixa latência'],
                ['Storage típico', 'Parquet / BigQuery / S3 / Delta Lake', 'Redis / DynamoDB / Cassandra'],
                ['Latência de leitura', 'Segundos a minutos (não crítico)', 'Milissegundos (< 10ms SLA típico)'],
                ['Volume', 'Meses a anos de dados históricos', 'Apenas valores mais recentes por entidade'],
                ['Actualização', 'Batch jobs periódicos (daily/hourly)', 'Streaming em tempo real (Kafka)'],
                ['Consistência treino/serving', 'Não garantida automaticamente sem Feature Store', 'Garantida — mesma definição, diferente backend'],
              ].map(([a, off, on]) => (
                <tr key={a}>
                  <td style={{ ...S.td, fontWeight: 700 }}>{a}</td>
                  <td style={{ ...S.td, color: '#4a9eed' }}>{off}</td>
                  <td style={{ ...S.td, color: '#4a9eed' }}>{on}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          O training-serving skew é quantificável: se durante o treino a feature
          <InlineMath math="\phi_i(x)" /> é calculada com uma função <InlineMath math="f_{\text{train}}" />
          e durante a inferência com uma função <InlineMath math="f_{\text{serve}}" />, então:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{skew}_i = \mathbb{E}\left[|\phi_i^{\text{train}}(x) - \phi_i^{\text{serve}}(x)|\right] > 0" />
        </div>
        <p style={S.p}>
          Mesmo pequenas diferenças de implementação — um <code>round()</code> diferente, uma janela
          temporal ligeiramente diferente, um timezone não tratado — introduzem skew que degrada
          silenciosamente a performance do modelo em produção. A Feature Store elimina este problema
          na raiz: a feature é definida uma única vez e executada de forma idêntica em ambos os
          contextos.
        </p>
        <div style={S.note}>
          <strong>Quando usar Feature Store:</strong> Projectos com múltiplos modelos que partilham
          features, equipas grandes onde diferentes pessoas implementam as mesmas features, e
          sistemas com SLAs de latência estritos em inferência. Para projectos de uma única pessoa
          com um único modelo, o overhead pode não se justificar.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ===== SECTION 4 ===== */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Testing Pyramid para ML</h2>
        <p style={S.p}>
          A pirâmide de testes adaptada a ML reflecte uma estratégia de investimento: muitos testes
          rápidos e baratos na base (unit tests de dados e transformações), um número médio de testes
          de integração no meio (pipeline end-to-end), e poucos testes de sistema no topo
          (performance do modelo em holdout set). Esta distribuição maximiza a cobertura com o
          mínimo de custo computacional.
        </p>
        <TestingPyramidDiagram />
        <h3 style={S.h3}>Exemplos por Nível da Pirâmide</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Nível</th>
                <th style={S.th}>O que testar</th>
                <th style={S.th}>Exemplo de Teste</th>
                <th style={S.th}>Ferramenta</th>
                <th style={S.th}>Frequência</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Unit — Dados', 'Schema, tipos, ranges, unicidade, nulls', 'assert df["age"].between(0,120).all()', 'Great Expectations / Pandera', 'Cada pipeline run'],
                ['Unit — Features', 'Output correcto de transformações', 'test_log_transform(0) == 0', 'pytest', 'Cada commit'],
                ['Unit — Modelos', 'Shapes de input/output, tipos de retorno', 'assert model.predict(X).shape == (n,)', 'pytest', 'Cada commit'],
                ['Integration', 'Pipeline end-to-end produz output correcto', 'Pipeline com dados sintéticos → métricas acima de baseline', 'pytest + dados fixture', 'Cada PR'],
                ['System — Performance', 'Modelo supera baseline no holdout set', 'assert accuracy > 0.75  # baseline humano', 'MLflow + pytest', 'Antes de cada deploy'],
                ['System — Behavioural', 'Invariância, directional, minimum functionality', 'Mudar género não muda previsão de crédito', 'Checklist ML (Ribeiro 2020)', 'Release major'],
              ].map(([l, w, e, f, freq]) => (
                <tr key={l}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{l}</td>
                  <td style={S.td}>{w}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.8rem', color: '#4a9eed' }}>{e}</td>
                  <td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{f}</td>
                  <td style={{ ...S.td, fontSize: '0.85rem' }}>{freq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 style={S.h3}>Testes Específicos de ML que não Existem em Software Tradicional</h3>
        <p style={S.p}>
          Além dos testes habituais de software, ML introduz categorias de testes sem equivalente
          no desenvolvimento tradicional:
        </p>
        <div style={S.highlight}>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: 2.1 }}>
            <li><strong>Data Leakage Tests:</strong> verificar que nenhuma feature contém informação do target que não estaria disponível no momento da previsão</li>
            <li><strong>Baseline Comparison:</strong> o modelo tem de superar um baseline simples (média, regra heurística) — caso contrário não justifica a complexidade</li>
            <li><strong>Metamorphic Tests:</strong> perturbações pequenas nos inputs não devem causar grandes mudanças nos outputs (estabilidade)</li>
            <li><strong>Fairness Tests:</strong> grupos demográficos protegidos não devem ser discriminados sistematicamente</li>
            <li><strong>Regression Tests após Retraining:</strong> novo modelo não deve ser pior que o modelo anterior num benchmark fixo</li>
          </ul>
        </div>
        <div style={S.note}>
          <strong>Cobertura em ML não é o mesmo que em software:</strong> 100% de code coverage não
          garante que o modelo funciona correctamente — porque o comportamento do modelo emerge dos
          dados, não apenas do código. Os testes de ML devem cobrir o <strong>espaço de dados</strong>
          , não apenas o espaço de código.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ===== SECTION 5 ===== */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Modularidade e Reprodutibilidade</h2>
        <p style={S.p}>
          A modularidade em ML não é apenas uma questão estética — é uma necessidade operacional.
          Um pipeline monolítico (um script gigante que faz tudo) é impossível de testar, difícil
          de debugar em produção, e cria fricção enorme quando se quer substituir apenas uma etapa
          (por exemplo, mudar o método de feature engineering sem retreinar do zero).
        </p>
        <ModularityDiagram />
        <h3 style={S.h3}>Princípios de Modularidade Aplicados a ML</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Princípio</th>
                <th style={S.th}>Aplicação em ML</th>
                <th style={S.th}>Benefício</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Single Responsibility', 'Cada módulo faz exactamente uma coisa: validar dados, ou criar features, ou treinar — nunca tudo ao mesmo tempo', 'Testável isoladamente; falha num ponto único e identificável'],
                ['DRY (Don\'t Repeat Yourself)', 'Features calculadas uma vez na Feature Store e reutilizadas por múltiplos modelos', 'Elimina training-serving skew e reduz manutenção'],
                ['Pure Functions', 'Cada função de transformação é determinística: mesmo input → mesmo output, sem side effects', 'Facilita testes unitários sem mocks complexos'],
                ['Dependency Injection', 'Parâmetros (caminhos de dados, hiperparâmetros) passados explicitamente, não hardcoded', 'Pipeline pode ser configurado para qualquer ambiente sem mudar código'],
                ['Interface Contracts', 'Cada módulo define explicitamente o schema do seu input e output (Pydantic, pandera)', 'Erros de integração detectados em compile-time, não runtime'],
                ['Separation of Config', 'Hiperparâmetros em params.yaml, não no código Python', 'Experimentos diferentes com o mesmo código; rastreável com DVC'],
              ].map(([p, a, b]) => (
                <tr key={p}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{p}</td>
                  <td style={S.td}>{a}</td>
                  <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 style={S.h3}>Estrutura de Projecto MLOps Recomendada</h3>
        <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1.25rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 2, overflowX: 'auto' }}>
          <div style={{ color }}><strong>project/</strong></div>
          <div style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)' }}>├── <span style={{ color: '#4a9eed' }}>data/</span>          &nbsp;&nbsp;&nbsp;# DVC-tracked, nunca em Git</div>
          <div style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)' }}>├── <span style={{ color: '#4a9eed' }}>src/</span></div>
          <div style={{ paddingLeft: '2.5rem', color: 'var(--text-secondary)' }}>│   ├── <span style={{ color: '#4a9eed' }}>ingest.py</span>      # load_data() → DataFrame</div>
          <div style={{ paddingLeft: '2.5rem', color: 'var(--text-secondary)' }}>│   ├── <span style={{ color: '#4a9eed' }}>validate.py</span>    # run_ge_checkpoint() → bool</div>
          <div style={{ paddingLeft: '2.5rem', color: 'var(--text-secondary)' }}>│   ├── <span style={{ color: '#4a9eed' }}>features.py</span>    # engineer_features() → DataFrame</div>
          <div style={{ paddingLeft: '2.5rem', color: 'var(--text-secondary)' }}>│   ├── <span style={{ color: '#4a9eed' }}>train.py</span>       # fit_model(X, y, params) → Model</div>
          <div style={{ paddingLeft: '2.5rem', color: 'var(--text-secondary)' }}>│   ├── <span style={{ color: '#4a9eed' }}>evaluate.py</span>    # compute_metrics(model, X_test) → dict</div>
          <div style={{ paddingLeft: '2.5rem', color: 'var(--text-secondary)' }}>│   └── <span style={{ color: '#4a9eed' }}>register.py</span>    # mlflow_register(model, metrics)</div>
          <div style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)' }}>├── <span style={{ color: '#4a9eed' }}>tests/</span>         &nbsp;&nbsp;&nbsp;# pytest, uma pasta espelho de src/</div>
          <div style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)' }}>├── <span style={{ color: '#4a9eed' }}>params.yaml</span>    # todos os hiperparâmetros</div>
          <div style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)' }}>├── <span style={{ color: '#4a9eed' }}>dvc.yaml</span>       # pipeline stages + dependencies</div>
          <div style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)' }}>└── <span style={{ color: '#4a9eed' }}>great_expectations/</span>  # GE context</div>
        </div>
        <p style={S.p}>
          Esta estrutura separa completamente dados (<code>data/</code>, gerido por DVC),
          código (<code>src/</code>, cada ficheiro com uma única função pública principal),
          testes (<code>tests/</code>, espelho da estrutura de src), e configuração
          (<code>params.yaml</code>, <code>dvc.yaml</code>). O resultado é um projecto que
          qualquer membro da equipa pode clonar e reproduzir com três comandos:
          <code> git clone</code>, <code>dvc pull</code>, <code>dvc repro</code>.
        </p>
        <div style={S.highlight}>
          <strong>Anti-padrões a evitar:</strong>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', lineHeight: 2 }}>
            <li>Notebooks Jupyter em produção — difíceis de versionar, impossíveis de testar</li>
            <li>Caminhos hardcoded para dados locais (<code>/home/joao/Downloads/data.csv</code>)</li>
            <li>Hiperparâmetros no código Python em vez de em ficheiros de configuração</li>
            <li>Dados versionados em Git (ficheiros grandes corrompem o histórico do repositório)</li>
            <li>Funções com múltiplas responsabilidades (<code>load_clean_and_train()</code>)</li>
          </ul>
        </div>
      </div>
</div>
  );
}
