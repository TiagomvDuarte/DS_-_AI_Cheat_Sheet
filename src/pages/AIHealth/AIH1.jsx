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
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

// Diverse palette for SVG charts
const P = ['#f97316', '#f97316', '#f97316', '#f97316', '#f97316', '#f97316'];

function AIHealthMarketSVG() {
  const data = [
    { year: '2021', val: 6.7 },
    { year: '2022', val: 10.4 },
    { year: '2023', val: 15.1 },
    { year: '2024', val: 22.4 },
    { year: '2025', val: 31.3 },
    { year: '2026', val: 45.2 },
    { year: '2027', val: 61.7 },
    { year: '2028', val: 80.5 },
  ];
  const barColors = ['#f97316','#fb923c','#f59e0b','#fbbf24','#f97316','#fb923c','#f59e0b','#fbbf24'];
  const maxVal = 85;
  const chartH = 160;
  const barW = 55;
  const gap = 20;
  const baseY = 220;
  const leftPad = 60;

  return (
    <svg viewBox="0 0 720 280" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Mercado Global de IA em Saúde 2021–2028 (USD Bilhões)</text>
      {[0, 20, 40, 60, 80].map(v => {
        const y = baseY - (v / maxVal) * chartH;
        return (
          <g key={v}>
            <line x1={leftPad} y1={y} x2={680} y2={y} stroke="var(--text-secondary)" strokeWidth="0.8" strokeDasharray="3 3" />
            <text x={leftPad - 6} y={y + 4} textAnchor="end" fontSize="9" fill="var(--text-secondary)">${v}B</text>
          </g>
        );
      })}
      {data.map((d, i) => {
        const x = leftPad + i * (barW + gap);
        const h = (d.val / maxVal) * chartH;
        const c = barColors[i];
        return (
          <g key={d.year}>
            <rect x={x} y={baseY - h} width={barW} height={h} rx="4" fill={c} fillOpacity="0.85" />
            <text x={x + barW / 2} y={baseY - h - 7} textAnchor="middle" fontSize="10" fontWeight="700" fill={c}>${d.val}B</text>
            <text x={x + barW / 2} y={baseY + 16} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{d.year}</text>
          </g>
        );
      })}
      <line x1={leftPad} y1={baseY} x2={680} y2={baseY} stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="360" y="260" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">CAGR ~37% | Fonte: Grand View Research, MarketsandMarkets 2024</text>
    </svg>
  );
}

function HealthDataLandscapeSVG() {
  const sources = [
    { label: 'EHR / Registos', pct: 38, color: '#f97316', sub: 'HL7, FHIR, texto livre' },
    { label: 'Medical Imaging', pct: 27, color: '#f59e0b', sub: 'DICOM, PACS' },
    { label: 'Genómica / Omics', pct: 18, color: '#fb923c', sub: 'VCF, FASTQ, BAM' },
    { label: 'Wearables / IoT', pct: 12, color: '#fbbf24', sub: 'JSON, CSV, BLE' },
    { label: 'Claims / Admin', pct: 5, color: '#ea580c', sub: 'HL7, X12 EDI' },
  ];
  const total = 100;
  let cumAngle = -90;
  const cx = 160, cy = 155, r = 100;
  const toRad = d => d * Math.PI / 180;
  const slices = sources.map(s => {
    const angle = (s.pct / total) * 360;
    const startAngle = cumAngle;
    cumAngle += angle;
    const endAngle = cumAngle;
    const x1 = cx + r * Math.cos(toRad(startAngle));
    const y1 = cy + r * Math.sin(toRad(startAngle));
    const x2 = cx + r * Math.cos(toRad(endAngle));
    const y2 = cy + r * Math.sin(toRad(endAngle));
    const largeArc = angle > 180 ? 1 : 0;
    return { ...s, x1, y1, x2, y2, largeArc };
  });

  return (
    <svg viewBox="0 0 720 320" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Landscape de Dados em Saúde — Distribuição por Tipo</text>
      {slices.map((s, i) => (
        <path key={i} d={`M${cx},${cy} L${s.x1},${s.y1} A${r},${r} 0 ${s.largeArc},1 ${s.x2},${s.y2} Z`} fill={s.color} fillOpacity="0.85" />
      ))}
      <circle cx={cx} cy={cy} r="50" fill="var(--bg-secondary)" />
      <text x={cx} y={cy - 6} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-primary)">Health</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-primary)">Data</text>
      {sources.map((s, i) => (
        <g key={i}>
          <rect x="340" y={45 + i * 50} width={14} height={14} rx="3" fill={s.color} />
          <text x="360" y={56 + i * 50} fontSize="12" fontWeight="700" fill={s.color}>{s.label} — {s.pct}%</text>
          <text x="360" y={72 + i * 50} fontSize="10" fill="var(--text-secondary)">{s.sub}</text>
        </g>
      ))}
      <text x="360" y="308" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Dados clínicos crescem a ~36%/ano; 80% não estruturados | Fonte: IDC Health Industry 2024</text>
    </svg>
  );
}

function ClinicalPipelineSVG() {
  const steps = [
    { label: 'Extracção', sub: 'PACS / LIS / HIS', color: '#f97316', x: 65 },
    { label: 'Transform', sub: 'Normalização FHIR', color: '#f97316', x: 205 },
    { label: 'Anon. PHI', sub: 'Safe Harbor / Expert', color: '#f97316', x: 380 },
    { label: 'Feature Store', sub: 'Delta Lake / Feast', color: '#f97316', x: 555 },
    { label: 'Treino ML', sub: 'Pipeline CI/CD', color: '#f97316', x: 695 },
  ];

  return (
    <svg viewBox="0 0 760 220" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="380" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Pipeline de Dados Clínicos para IA</text>
      <defs>
        <marker id="arrowPipe" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#6b7280" />
        </marker>
      </defs>
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={s.x - 55} y={55} width={110} height={70} rx="8" fill={s.color} fillOpacity="0.12" stroke={s.color} strokeWidth="1.5" />
          <text x={s.x} y={86} textAnchor="middle" fontSize="11" fontWeight="700" fill={s.color}>{s.label}</text>
          <text x={s.x} y={104} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{s.sub}</text>
          {i < steps.length - 1 && (
            <line x1={s.x + 55} y1={90} x2={steps[i + 1].x - 57} y2={90} stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrowPipe)" />
          )}
        </g>
      ))}
      <rect x="260" y="142" width="240" height="50" rx="6" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" strokeWidth="1" />
      <text x="380" y="162" textAnchor="middle" fontSize="10" fontWeight="600" fill={color}>18 categorias HIPAA PHI</text>
      <text x="380" y="178" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Nome, NIF, datas, geo, telefone, email, IP, biométricos...</text>
      <line x1="380" y1="125" x2="380" y2="142" stroke="rgba(249,115,22,0.4)" strokeWidth="1" strokeDasharray="3 2" />
      <text x="380" y="208" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">FHIR R4 mandatório nos EUA (21st Century Cures Act) | GDPR categoria especial na Europa</text>
    </svg>
  );
}

function RegulatoryPathwaySVG() {
  const fda = [
    { label: '510(k)', desc: 'Equivalência a predicate', risk: 'Médio-baixo', color: '#f97316' },
    { label: 'De Novo', desc: 'Nova categoria, sem predicate', risk: 'Médio', color: '#f97316' },
    { label: 'PMA', desc: 'Ensaios clínicos prospectivos', risk: 'Alto', color: '#f97316' },
  ];
  const ce = [
    { label: 'Classe I', desc: 'Auto-declaração', risk: 'Baixo', color: '#f97316' },
    { label: 'Classe IIa/IIb', desc: 'Org. Notificado', risk: 'Médio', color: '#f97316' },
    { label: 'Classe III', desc: 'MDR completo + ensaios', risk: 'Alto', color: '#f97316' },
  ];

  return (
    <svg viewBox="0 0 720 310" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Percursos Regulatórios SaMD — FDA vs. CE Mark</text>
      <text x="185" y="50" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">🇺🇸 FDA (EUA)</text>
      {fda.map((f, i) => (
        <g key={i}>
          <rect x="50" y={65 + i * 72} width="270" height="58" rx="8" fill={f.color} fillOpacity="0.1" stroke={f.color} strokeWidth="1.5" />
          <text x="70" y={88 + i * 72} fontSize="13" fontWeight="800" fill={f.color}>{f.label}</text>
          <text x="70" y={104 + i * 72} fontSize="10" fill="var(--text-secondary)">{f.desc}</text>
          <rect x="230" y={72 + i * 72} width="80" height={20} rx="4" fill={f.color} fillOpacity="0.2" />
          <text x="270" y={86 + i * 72} textAnchor="middle" fontSize="9" fontWeight="600" fill={f.color}>Risco {f.risk}</text>
        </g>
      ))}
      <text x="535" y="50" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">🇪🇺 CE Mark (Europa)</text>
      {ce.map((c, i) => (
        <g key={i}>
          <rect x="400" y={65 + i * 72} width="270" height="58" rx="8" fill={c.color} fillOpacity="0.1" stroke={c.color} strokeWidth="1.5" />
          <text x="420" y={88 + i * 72} fontSize="13" fontWeight="800" fill={c.color}>{c.label}</text>
          <text x="420" y={104 + i * 72} fontSize="10" fill="var(--text-secondary)">{c.desc}</text>
          <rect x="580" y={72 + i * 72} width="80" height={20} rx="4" fill={c.color} fillOpacity="0.2" />
          <text x="620" y={86 + i * 72} textAnchor="middle" fontSize="9" fontWeight="600" fill={c.color}>Risco {c.risk}</text>
        </g>
      ))}
      <line x1="360" y1="42" x2="360" y2="285" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4 3" />
      <text x="360" y="298" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">IMDRF SaMD: Software as Medical Device — regulado por nível de risco × gravidade clínica da decisão suportada</text>
    </svg>
  );
}

export default function AIH1() {
  return (
    <div style={S.page}>
      <Link to="/ai-health" style={S.back}><ArrowLeft size={16} /> IA em Saúde</Link>
      <div style={S.tag}>Module 01</div>
      <h1 style={S.h1}>Introdução à IA em Saúde</h1>
      <p style={S.lead}>
        A inteligência artificial está a transformar a medicina — desde o diagnóstico por imagem até à
        descoberta de fármacos. Neste módulo introdutório mapeamos o landscape de dados clínicos, o
        enquadramento regulatório global, os casos de sucesso e insucesso mais relevantes, os desafios
        estruturais da área e o pipeline técnico de preparação de dados clínicos.
      </p>

      <section style={S.section}>
        <h2 style={S.h2}>1. Landscape de Dados em Saúde</h2>
        <AIHealthMarketSVG />
        <h3 style={S.h3}>Fontes e Heterogeneidade</h3>
        <HealthDataLandscapeSVG />
        <p style={S.p}>
          A saúde é um dos domínios mais ricos em dados, com fontes heterogéneas que requerem abordagens
          técnicas distintas. O mercado global de IA em saúde cresce a ~37% ao ano, impulsionado pela
          digitalização dos sistemas de saúde, redução do custo de sequenciação genómica e proliferação de wearables.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo de Dados</th>
              <th style={S.th}>Formato</th>
              <th style={S.th}>Volume típico</th>
              <th style={S.th}>Desafio principal</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['EHR (Electronic Health Records)', 'HL7, FHIR, texto livre', 'KB–MB por doente/ano', 'Fragmentação entre sistemas'],
              ['Medical Imaging', 'DICOM', '50 MB–10 GB por exame', 'Custo de anotação expert'],
              ['Genómica', 'VCF, FASTQ, BAM', '100 GB por genoma completo', 'Interpretabilidade clínica'],
              ['Wearables', 'JSON, CSV, proprietário', 'GB por ano por utilizador', 'Qualidade e adesão'],
            ].map(([a, b, c, d]) => (
              <tr key={a}><td style={S.td}>{a}</td><td style={S.td}>{b}</td><td style={S.td}>{c}</td><td style={S.td}>{d}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>2. Regulamentação</h2>
        <RegulatoryPathwaySVG />
        <h3 style={S.h3}>FDA e CE Mark</h3>
        <p style={S.p}>
          Software de IA para uso clínico é regulamentado como dispositivo médico (Software as a Medical
          Device — SaMD) na maioria das jurisdições. O enquadramento regulatório determina o nível de
          evidência clínica exigida antes de uma ferramenta de IA poder ser usada em contexto assistencial.
        </p>
        <div style={S.highlight}>
          <strong>FDA (EUA):</strong> dois percursos principais. <em>510(k)</em> — demonstrar equivalência
          substancial a um predicate device já aprovado (mais rápido). <em>De Novo</em> — para dispositivos
          sem predicate mas de baixo a médio risco, cria uma nova classificação. <em>PMA</em> (Pre-Market
          Approval) — para dispositivos de alto risco, requer ensaios clínicos prospectivos.
        </div>
        <div style={S.highlight}>
          <strong>CE Mark (Europa):</strong> sob o Medical Device Regulation (MDR 2017/745) e o In-Vitro
          Diagnostic Regulation (IVDR 2017/746), SaMD de IA é classificado por risco (I a III). Organismos
          Notificados (ex.: TÜV, BSI) auditam o sistema de qualidade e a evidência clínica antes de conceder
          a marcação CE.
        </div>
        <p style={S.p}>
          A <strong>SaMD classification</strong> da IMDRF define o nível de regulamentação com base em duas
          dimensões: estado de saúde (informar vs. tratar vs. diagnosticar) e gravidade da condição (não
          grave, grave, crítica). IA de triagem de melanoma numa app de smartphone cai tipicamente na
          categoria IIb (CE) ou Class II/De Novo (FDA).
        </p>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>3. Casos de Sucesso e Insucesso</h2>
        <p style={S.p}>
          <strong>DeepMind Streams:</strong> sistema de alerta precoce de Acute Kidney Injury (AKI) no
          NHS britânico. Notificava médicos quando os resultados laboratoriais indicavam deterioração
          renal. Validado clinicamente e adoptado em vários hospitais de Londres antes de ser integrado
          no sistema geral de registos do NHS.
        </p>
        <p style={S.p}>
          <strong>Google / Breast Cancer Detection:</strong> modelo publicado na Nature (2020) demonstrou
          performance superior a radiologistas na detecção de cancro da mama em mamografias do UK Biobank
          e de um hospital dos EUA, com redução de 5.7% de falsos positivos e 9.4% de falsos negativos.
          Destaque para a necessidade de validação multi-site antes de deployment clínico.
        </p>
        <p style={S.p}>
          <strong>IBM Watson Oncology</strong> é o contra-exemplo canónico: prometeu revolutionar as
          recomendações de tratamento oncológico mas gerou recomendações clinicamente incorrectas e por
          vezes perigosas. Problemas identificados: treinado em casos hipotéticos (não reais), ausência
          de validação prospectiva e opacidade do raciocínio. O MD Anderson cancelou o contrato após
          investir &gt;60 M USD.
        </p>
        <div style={S.note}>
          Lição central do Watson: generalizabilidade e validação prospectiva não são opcionais. Um modelo
          com AUROC 0.99 no dataset de treino pode falhar catastroficamente noutro hospital, noutro país,
          ou com doentes de demografia diferente. Dataset shift é omnipresente em saúde.
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>4. Desafios Estruturais</h2>
        <p style={S.p}>
          <strong>Data Silos:</strong> dados clínicos estão fragmentados entre hospitais, clínicas,
          laboratórios e seguradoras em sistemas incompatíveis (Epic, Cerner, Meditech, sistemas legados
          proprietários). A interoperabilidade via FHIR R4 está a avançar mas longe de ser universal.
        </p>
        <div style={S.highlight}>
          <strong>Privacy — HIPAA &amp; GDPR:</strong> nos EUA, a HIPAA define 18 categorias de
          Protected Health Information (PHI) que requerem protecção especial. Na Europa, o GDPR classifica
          dados de saúde como categoria especial, requerendo consentimento explícito ou base legal
          alternativa para processamento. Dados de treino de IA devem ser anonimizados ou pseudonimizados.
        </div>
        <div style={S.highlight}>
          <strong>Generalizability:</strong> modelos treinados num hospital tendem a degradar-se quando
          aplicados noutro, devido a diferenças de equipamentos, protocolos de aquisição, demografia
          e práticas clínicas. O conceito de <em>dataset shift</em> é omnipresente em IA médica e
          exige validação externa rigorosa antes de qualquer deployment clínico.
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>5. Pipeline de Dados Clínicos</h2>
        <ClinicalPipelineSVG />
        <h3 style={S.h3}>ETL, Anonimização e FHIR</h3>
        <div style={S.highlight}>
          <strong>ETL (Extract, Transform, Load):</strong> extracção de dados de sistemas fonte (PACS,
          LIS, HIS), transformação para formatos normalizados, e carregamento para data lakes ou
          feature stores. Ferramentas: Apache Spark, dbt, Apache Airflow para orquestração.
        </div>
        <div style={S.highlight}>
          <strong>PHI Anonymization:</strong> remoção ou substituição das 18 categorias HIPAA de
          informação identificativa. Técnicas: Safe Harbor (remoção completa de identificadores),
          Expert Determination (avaliação estatística do risco de re-identificação), e síntese de
          dados (geração de dados sintéticos realistas com GANs ou modelos de difusão).
        </div>
        <div style={S.highlight}>
          <strong>FHIR Standard:</strong> Fast Healthcare Interoperability Resources (HL7 FHIR R4)
          define uma API RESTful e um modelo de dados para troca de informação clínica. Recursos-chave:
          Patient, Observation, Condition, MedicationRequest, DiagnosticReport. Adopção mandatória
          nos EUA (21st Century Cures Act) e crescente na Europa.
        </div>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>6. Síntese do Módulo</h2>
        <div style={S.note}>
          IA em saúde opera sobre dados heterogéneos (EHR, imagem, genómica,
          wearables) sujeitos a regulamentação estrita (FDA, CE, HIPAA, GDPR). O potencial é enorme —
          como demonstram DeepMind e Google — mas o caminho do laboratório para a clínica é longo e
          requer validação rigorosa, interoperabilidade via FHIR e pipelines de anonimização robustos.
        </div>
      </section>
    </div>
  );
}
