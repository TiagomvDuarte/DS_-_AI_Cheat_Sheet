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

function EHRStructureSVG() {
  const items = [
    { label: 'Notas Clínicas (texto livre)', pct: 40, color: '#f97316' },
    { label: 'Diagnósticos ICD-10', pct: 22, color: '#f97316' },
    { label: 'Labs / LOINC', pct: 18, color: '#f97316' },
    { label: 'Medicação RxNorm', pct: 15, color: '#f97316' },
    { label: 'Sinais Vitais', pct: 5, color: '#f97316' },
  ];

  return (
    <svg viewBox="0 0 720 300" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Estrutura de um EHR — Dados Estruturados vs. Texto Livre</text>

      {/* Stacked bar — left half */}
      <text x="120" y="46" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Composição do EHR (%)</text>
      {(() => {
        let y = 56;
        const barX = 40, barW = 100, totalH = 180;
        return items.map((d, i) => {
          const h = (d.pct / 100) * totalH;
          const el = (
            <g key={i}>
              <rect x={barX} y={y} width={barW} height={h} fill={d.color} fillOpacity={0.5 + i * 0.1} />
              <line x1={barX + barW} y1={y + h / 2} x2={barX + barW + 10} y2={y + h / 2} stroke={d.color} strokeWidth="1" />
              <text x={barX + barW + 14} y={y + h / 2 + 4} fontSize="9" fill={d.color} fontWeight="600">{d.label} — {d.pct}%</text>
            </g>
          );
          y += h;
          return el;
        });
      })()}
      <line x1="40" y1="56" x2="40" y2="236" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="120" y="252" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">60–80% em texto não estruturado</text>

      {/* FHIR resources — right half */}
      <text x="560" y="46" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Recursos FHIR R4 Principais</text>
      {[
        { r: 'Patient', desc: 'Dados demográficos' },
        { r: 'Observation', desc: 'Labs, sinais vitais' },
        { r: 'Condition', desc: 'Diagnósticos ICD' },
        { r: 'MedicationRequest', desc: 'Prescrições RxNorm' },
        { r: 'DiagnosticReport', desc: 'Relatórios DICOM/texto' },
      ].map((f, i) => (
        <g key={f.r}>
          <rect x="390" y={56 + i * 40} width={300} height={32} rx="5" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1" />
          <text x="404" y={76 + i * 40} fontSize="10" fontWeight="700" fill={color}>{f.r}</text>
          <text x="530" y={76 + i * 40} fontSize="9.5" fill="var(--text-secondary)">— {f.desc}</text>
        </g>
      ))}
      <text x="360" y="285" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">FHIR R4 RESTful API | Mandatório nos EUA (21st Century Cures Act)</text>
    </svg>
  );
}

function NLPPipelineSVG() {
  const steps = [
    { label: 'Nota Clínica', sub: 'texto livre', color: '#f97316', x: 65 },
    { label: 'Tokenização', sub: 'Sentence Split', color: '#f97316', x: 205 },
    { label: 'NER Clínico', sub: 'cTAKES / spaCy', color: '#f97316', x: 345 },
    { label: 'Negação', sub: 'Contextualização', color: '#f97316', x: 485 },
    { label: 'Normalização', sub: 'UMLS / SNOMED', color: '#f97316', x: 625 },
  ];

  return (
    <svg viewBox="0 0 710 210" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="355" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Pipeline NLP Clínico — do Texto ao Conceito Estruturado</text>
      <defs>
        <marker id="arrowNLP3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#6b7280" />
        </marker>
      </defs>
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={s.x - 55} y={46} width={110} height={72} rx="8" fill={s.color} fillOpacity="0.12" stroke={s.color} strokeWidth="1.5" />
          <text x={s.x} y={78} textAnchor="middle" fontSize="11" fontWeight="700" fill={s.color}>{s.label}</text>
          <text x={s.x} y={96} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{s.sub}</text>
          {i < steps.length - 1 && (
            <line x1={s.x + 55} y1={82} x2={steps[i + 1].x - 57} y2={82} stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrowNLP3)" />
          )}
        </g>
      ))}
      <rect x="20" y="132" width="670" height="46" rx="6" fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.10)" strokeWidth="1" />
      <text x="60" y="152" fontSize="10" fontWeight="600" fill={color}>Exemplo:</text>
      <text x="60" y="168" fontSize="9" fill="var(--text-secondary)">"doente nega dor torácica"  →  </text>
      <text x="248" y="168" fontSize="9" fill="#f97316" fontWeight="600">Condição: dor torácica</text>
      <text x="378" y="168" fontSize="9" fill="var(--text-secondary)">|  Polaridade: </text>
      <text x="448" y="168" fontSize="9" fill="#f97316" fontWeight="700">NEGADA</text>
      <text x="505" y="168" fontSize="9" fill="var(--text-secondary)">|  SNOMED CT: 29857009</text>
    </svg>
  );
}

function ClinicalBERTComparisonSVG() {
  const tasks = ['NER Clínico', 'ICD Coding', 'Relação Ent.', 'QA Médico', 'Resumo EHR'];
  const models = [
    { name: 'BERT base',     scores: [0.72, 0.61, 0.68, 0.55, 0.58], color: '#ea580c' },
    { name: 'BioBERT',       scores: [0.83, 0.71, 0.79, 0.68, 0.67], color: '#f97316' },
    { name: 'ClinicalBERT',  scores: [0.88, 0.78, 0.82, 0.71, 0.74], color: '#fb923c' },
    { name: 'Med-PaLM 2',    scores: [0.91, 0.85, 0.88, 0.86, 0.89], color: '#fbbf24' },
  ];
  const chartH = 140, barW = 16, baseY = 220, leftPad = 60, taskSpacing = 108;

  return (
    <svg viewBox="0 0 720 300" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Modelos de Linguagem Clínicos — F1 / Accuracy por Tarefa</text>
      {[0.6, 0.7, 0.8, 0.9, 1.0].map(v => {
        const y = baseY - (v - 0.5) / 0.5 * chartH;
        return (
          <g key={v}>
            <line x1={leftPad} y1={y} x2={690} y2={y} stroke="var(--text-secondary)" strokeWidth="0.7" strokeDasharray="3 3" />
            <text x={leftPad - 6} y={y + 4} textAnchor="end" fontSize="9" fill="var(--text-secondary)">{v.toFixed(1)}</text>
          </g>
        );
      })}
      {tasks.map((task, ti) => {
        const groupX = leftPad + 20 + ti * taskSpacing;
        return (
          <g key={task}>
            <text x={groupX + (models.length * (barW + 4)) / 2} y={baseY + 16} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{task}</text>
            {models.map((m, mi) => {
              const x = groupX + mi * (barW + 4);
              const h = ((m.scores[ti] - 0.5) / 0.5) * chartH;
              return <rect key={mi} x={x} y={baseY - h} width={barW} height={h} rx="3" fill={m.color} fillOpacity="0.8" />;
            })}
          </g>
        );
      })}
      <line x1={leftPad} y1={baseY} x2={690} y2={baseY} stroke="var(--text-secondary)" strokeWidth="1.5" />
      {models.map((m, i) => (
        <g key={m.name}>
          <rect x={leftPad + i * 150} y={255} width={12} height={12} rx="2" fill={m.color} />
          <text x={leftPad + i * 150 + 16} y={265} fontSize="10" fill={m.color} fontWeight="600">{m.name}</text>
        </g>
      ))}
      <text x="360" y="290" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Med-PaLM 2 atinge performance de especialista no USMLE (Step 1/2/3) — Google, 2023</text>
    </svg>
  );
}

function SepsisTimelineSVG() {
  const vitals  = [72, 78, 84, 92, 101, 115, 128, 132, 138];
  const lactate = [1.1, 1.2, 1.4, 1.8, 2.4, 3.2, 4.1, 4.6, 5.0];
  const hours   = [-6, -5, -4, -3, -2, -1, 0, 1, 2];
  const chartW = 560, chartH = 120, baseY = 190, leftPad = 80;
  const stepX = chartW / (hours.length - 1);
  const maxVital = 145;

  return (
    <svg viewBox="0 0 720 260" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Sepsis Prediction — Alerta ML vs. Diagnóstico Clínico</text>
      <line x1={leftPad} y1={baseY - chartH} x2={leftPad} y2={baseY} stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1={leftPad} y1={baseY} x2={leftPad + chartW} y2={baseY} stroke="var(--text-secondary)" strokeWidth="1.5" />
      {hours.map((h, i) => (
        <text key={h} x={leftPad + i * stepX} y={baseY + 14} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{h}h</text>
      ))}
      {/* HR line */}
      <polyline points={vitals.map((v, i) => `${leftPad + i * stepX},${baseY - (v / maxVital) * chartH}`).join(' ')} fill="none" stroke="#f59e0b" strokeWidth="2" />
      {/* Lactate line */}
      <polyline points={lactate.map((v, i) => `${leftPad + i * stepX},${baseY - (v / 5.5) * chartH}`).join(' ')} fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="5 3" />
      {/* ML alert at hour -3 (index 3) */}
      {(() => {
        const x = leftPad + 3 * stepX;
        return (
          <g>
            <line x1={x} y1={baseY - chartH - 10} x2={x} y2={baseY} stroke="#f97316" strokeWidth="2" strokeDasharray="4 2" />
            <rect x={x - 42} y={baseY - chartH - 28} width={86} height={18} rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
            <text x={x + 1} y={baseY - chartH - 16} textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">⚠ ML Alerta (−3h)</text>
          </g>
        );
      })()}
      {/* Clinical detection at hour 0 (index 6) */}
      {(() => {
        const x = leftPad + 6 * stepX;
        return (
          <g>
            <line x1={x} y1={baseY - chartH - 10} x2={x} y2={baseY} stroke="#f97316" strokeWidth="2" />
            <rect x={x - 55} y={baseY - chartH - 28} width={114} height={18} rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
            <text x={x + 1} y={baseY - chartH - 16} textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">🏥 Diagnóstico Clínico</text>
          </g>
        );
      })()}
      <line x1={leftPad} y1={220} x2={leftPad + 24} y2={220} stroke="#f59e0b" strokeWidth="2" />
      <text x={leftPad + 28} y={224} fontSize="10" fill="#f59e0b">Frequência Cardíaca (bpm)</text>
      <line x1={leftPad + 220} y1={220} x2={leftPad + 244} y2={220} stroke="#f97316" strokeWidth="2" strokeDasharray="5 3" />
      <text x={leftPad + 248} y={224} fontSize="10" fill="#f97316">Lactato (mmol/L)</text>
      <text x="360" y="248" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Modelos LSTM em séries temporais MIMIC-III detectam sepsis até 6h antes do diagnóstico clínico</text>
    </svg>
  );
}

export default function AIH3() {
  return (
    <div style={S.page}>
      <Link to="/ai-health" style={S.back}><ArrowLeft size={16} /> IA em Saúde</Link>
      <div style={S.tag}>Module 03</div>
      <h1 style={S.h1}>EHR &amp; Clinical NLP</h1>
      <p style={S.lead}>
        Os registos electrónicos de saúde (EHR) contêm a história clínica completa de um doente —
        em texto livre, códigos e séries temporais. O Processamento de Linguagem Natural clínico
        transforma essa riqueza em dados estruturados que alimentam modelos preditivos e sistemas de
        apoio à decisão.
      </p>

      <section style={S.section}>
        <h2 style={S.h2}>1. Estrutura de EHRs</h2>
        <EHRStructureSVG />
        <h3 style={S.h3}>Dados Estruturados e Não-estruturados</h3>
        <p style={S.p}>
          Um EHR típico combina dados estruturados e não-estruturados. Os dados não-estruturados —
          notas clínicas, relatórios de alta, descrições cirúrgicas — representam 60–80% do conteúdo
          informativo total de um EHR.
        </p>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Componente</th><th style={S.th}>Standard</th><th style={S.th}>Exemplo</th></tr>
          </thead>
          <tbody>
            {[
              ['Diagnósticos', 'ICD-10-CM / ICD-11', 'J18.9 — Pneumonia, unspecified'],
              ['Procedimentos', 'CPT / HCPCS / OPCS-4', '71046 — Radiografia torácica 2 incidências'],
              ['Medicação', 'RxNorm / ATC', 'RxNorm 308460 — Amoxicillin 500 mg'],
              ['Laboratório', 'LOINC', '2823-3 — Potassium [Moles/volume] in Serum'],
              ['Notas clínicas', 'Texto livre (SOAP)', 'Subjectivo, Objectivo, Avaliação, Plano'],
            ].map(([a, b, c]) => (
              <tr key={a}><td style={S.td}>{a}</td><td style={S.td}>{b}</td><td style={S.td}>{c}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>2. Named Entity Recognition Clínico</h2>
        <NLPPipelineSVG />
        <h3 style={S.h3}>cTAKES, spaCy e Negação</h3>
        <p style={S.p}>
          O NER identifica e classifica entidades clínicas em texto livre: condições/doenças,
          medicamentos, procedimentos, anatomia e achados clínicos.
        </p>
        <div style={S.highlight}>
          <strong>cTAKES</strong> (Apache, Mayo Clinic): pipeline NLP open-source especializado em
          notas clínicas. Usa o UMLS como base de conhecimento para normalização de entidades.
        </div>
        <div style={S.highlight}>
          <strong>spaCy + scispaCy:</strong> estende o spaCy com modelos treinados em literatura
          biomédica (PubMed) e notas clínicas (MIMIC-III). Inclui linkers para UMLS, MeSH e Gene Ontology.
        </div>
        <p style={S.p}>
          Um desafio central é a <strong>negação e especulação</strong>: "o doente <em>nega</em> dor torácica"
          e "dor torácica" têm polaridades opostas. Sistemas como NegEx lidam com este problema explicitamente.
        </p>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>3. Modelos Clínicos de Linguagem</h2>
        <ClinicalBERTComparisonSVG />
        <h3 style={S.h3}>BioBERT, ClinicalBERT e Med-PaLM</h3>
        <div style={S.highlight}>
          <strong>BioBERT:</strong> BERT fine-tuned em 4.5 B palavras de artigos PubMed e PMC Full Text.
          Melhora NER biomédico, relações entre entidades e QA em literatura científica.
        </div>
        <div style={S.highlight}>
          <strong>ClinicalBERT:</strong> BERT treinado nas notas clínicas do MIMIC-III (2 M notas de
          doentes UCI). Captura o estilo telegráfico — "pt c/o SOB, O2 sat 88% RA".
        </div>
        <div style={S.highlight}>
          <strong>Med-PaLM 2:</strong> LLM da Google instruction-tuned em dados médicos. Atingiu
          performance de especialista no USMLE. Capaz de raciocínio clínico multi-etapa e resumo de EHRs.
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>4. ICD Coding Automático</h2>
        <p style={S.p}>
          A codificação automática de ICD a partir de notas de alta clínica é um problema de
          <strong> multi-label classification</strong>: cada episódio hospitalar pode ter múltiplos
          diagnósticos (ICD-10-CM tem &gt;70 000 códigos, com distribuição extremamente long-tail).
        </p>
        <p style={S.p}>
          O dataset <strong>MIMIC-III</strong> do MIT, com 40 000+ admissões a UCI, é o benchmark standard.
          Modelos estado da arte usam arquitecturas de atenção hierárquica (CAML, PLM-ICD).
        </p>
        <div style={S.note}>
          Impacto económico: nos EUA, erros de codificação ICD custam estimados 25 B USD/ano em
          facturação incorrecta. Automação com supervisão humana pode aumentar precisão e liberta
          codificadores para casos complexos.
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>5. Clinical Decision Support</h2>
        <SepsisTimelineSVG />
        <h3 style={S.h3}>Alertas, Sepsis e Readmissão</h3>
        <div style={S.highlight}>
          <strong>Alertas de interacção medicamentosa:</strong> NLP extrai medicação actual do EHR e
          cruza com bases de dados de interacções (DrugBank). Desafio: alert fatigue — &gt;90% dos
          alertas são ignorados por excesso de notificações de baixo valor.
        </div>
        <div style={S.highlight}>
          <strong>Sepsis Prediction:</strong> modelos LSTM treinados em séries temporais de sinais
          vitais + labs do MIMIC detectam deterioração séptica horas antes do diagnóstico clínico.
          O Epic Sepsis Model revelou performance real significativamente inferior à publicada internamente
          — caso de estudo sobre generalizabilidade.
        </div>
        <div style={S.highlight}>
          <strong>Readmission Prediction:</strong> modelos de 30-day readmission identificam doentes
          de alto risco para intervenções de gestão de transição de cuidados.
        </div>
        <div style={S.note}>
          Síntese: ClinicalBERT e Med-PaLM capturam a linguagem clínica melhor que modelos generalistas.
          NER, ICD coding automático e CDSS são as aplicações de maior impacto imediato. Alert fatigue
          e generalizabilidade são os desafios práticos mais críticos.
        </div>
      </section>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Estrutura de EHRs</strong> — Electronic Health Records (EHRs) contêm dados estruturados (diagnósticos ICD-10, procedimentos CPT, medicamentos RxNorm, sinais vitais HL7 FHIR) e não estruturados (notas clínicas, relatórios de imagem); OMOP CDM normaliza EHRs de múltiplas instituições para estudos observacionais.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Named Entity Recognition Clínico</strong> — NER clínico extrai entidades de notas médicas: diagnósticos, medicamentos, sintomas, procedimentos e achados radiológicos; scispaCy, MedCAT e cTAKES são as frameworks especializadas; dados de treino escassos motivam o uso de LLMs com few-shot prompting.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Modelos Clínicos de Linguagem</strong> — BioBERT, ClinicalBERT e Med-PaLM são LLMs fine-tuned em literatura biomédica e notas clínicas; superam BERT base em tarefas clínicas de NLP (NER, relation extraction, QA); Med-PaLM 2 passou o USMLE com pontuação de especialista — primeira IA a atingir este threshold.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>ICD Coding Automático</strong> — ICD-10 coding atribui códigos de diagnóstico a registos clínicos — processo manual, demorado e propenso a erro; modelos CNN+attention (CAML, MultiResCNN) e LLMs treinados em notas de alta atingem micro-AUC &gt;0.90 em MIMIC-III — automated coding reduz custo de facturação hospitalar.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Clinical Decision Support</strong> — CDS systems fornecem alertas e recomendações ao clínico em tempo real no ponto de cuidado (alertas de interacção medicamentosa, protocolos de sepsis, triagem de risco); ML melhora especificidade para reduzir alert fatigue — FDA regula CDS como dispositivo médico em alguns casos.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
