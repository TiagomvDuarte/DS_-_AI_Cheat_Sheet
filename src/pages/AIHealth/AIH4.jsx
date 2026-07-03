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

function DrugDiscoveryPipelineSVG() {
  const phases = [
    { label: 'Target\nIdentification', years: '1–2a', ai: 'Knowledge Graphs\nGWAS, PPI Networks', color: '#f97316', x: 30 },
    { label: 'Hit\nDiscovery', years: '1–2a', ai: 'Virtual Screening\nGenerative Chem.', color: '#f97316', x: 160 },
    { label: 'Lead\nOptimisation', years: '2–3a', ai: 'QSAR / QSPR\nMulti-objective opt.', color: '#f97316', x: 290 },
    { label: 'ADMET\nPrediction', years: 'paralelo', ai: 'GNN / MPNN\nToxicidade, PK', color: '#f97316', x: 420 },
    { label: 'Clinical\nTrials', years: '6–8a', ai: 'Patient stratif.\nDigital endpoints', color: '#f97316', x: 550 },
  ];

  return (
    <svg viewBox="0 0 720 260" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Pipeline de Drug Discovery — IA em cada fase</text>
      <defs>
        <marker id="arrowDD4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#6b7280" />
        </marker>
      </defs>
      {phases.map((p, i) => {
        const lines = p.label.split('\n');
        const aiLines = p.ai.split('\n');
        return (
          <g key={i}>
            <rect x={p.x} y={45} width={115} height={90} rx="8" fill={p.color} fillOpacity="0.15" stroke={p.color} strokeWidth="1.5" />
            {lines.map((l, li) => (
              <text key={li} x={p.x + 58} y={78 + li * 16} textAnchor="middle" fontSize="11" fontWeight="700" fill={p.color}>{l}</text>
            ))}
            <rect x={p.x + 20} y={113} width={75} height={16} rx="4" fill={p.color} fillOpacity="0.25" />
            <text x={p.x + 58} y={125} textAnchor="middle" fontSize="9" fill={p.color} fontWeight="600">{p.years}</text>
            <rect x={p.x} y={148} width={115} height={52} rx="6" fill="rgba(0,0,0,0.05)" stroke="var(--text-secondary)" strokeWidth="1" />
            {aiLines.map((l, li) => (
              <text key={li} x={p.x + 58} y={164 + li * 16} textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">{l}</text>
            ))}
            {i < phases.length - 1 && (
              <line x1={p.x + 115} y1={90} x2={phases[i + 1].x - 2} y2={90} stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrowDD4)" />
            )}
          </g>
        );
      })}
      <rect x="30" y="212" width="660" height="32" rx="6" fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.10)" strokeWidth="1" />
      <text x="360" y="226" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>Custo médio sem IA: 2.6 B USD | 10–15 anos | Taxa de sucesso: ~5% na fase clínica</text>
      <text x="360" y="240" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Com IA: redução estimada de 25–50% no tempo de hit-to-lead | Insilico Medicine: fármaco em 18 meses (2023)</text>
    </svg>
  );
}

function MolecularRepresentationSVG() {
  return (
    <svg viewBox="0 0 720 290" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Representações Moleculares para ML — Aspirina (C₉H₈O₄)</text>

      {/* SMILES */}
      <rect x="20" y="40" width="200" height="110" rx="8" fill="#f97316" fillOpacity="0.08" stroke="#f97316" strokeWidth="1.5" />
      <text x="120" y="62" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">SMILES</text>
      <rect x="30" y="72" width="180" height="32" rx="4" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="120" y="92" textAnchor="middle" fontSize="10" fontFamily="monospace" fill="var(--text-primary)">CC(=O)Oc1ccccc1C(=O)O</text>
      <text x="120" y="118" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Notação linear — usável</text>
      <text x="120" y="132" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">em modelos de linguagem</text>

      {/* Fingerprint */}
      <rect x="260" y="40" width="200" height="110" rx="8" fill="#f97316" fillOpacity="0.08" stroke="#f97316" strokeWidth="1.5" />
      <text x="360" y="62" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Morgan Fingerprint</text>
      {Array.from({ length: 32 }, (_, i) => {
        const bit = [1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1][i];
        return (
          <rect key={i} x={270 + (i % 16) * 11} y={70 + Math.floor(i / 16) * 14} width={9} height={11} rx="1"
            fill={bit ? '#f97316' : 'var(--card-border)'} fillOpacity={bit ? 0.7 : 1} />
        );
      })}
      <text x="360" y="118" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Vetor binário 512–4096 bits</text>
      <text x="360" y="132" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Rápido, perde info 3D</text>

      {/* Graph */}
      <rect x="500" y="40" width="200" height="110" rx="8" fill="#f97316" fillOpacity="0.08" stroke="#f97316" strokeWidth="1.5" />
      <text x="600" y="62" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Graph (GNN)</text>
      {[0,1,2,3,4,5].map(i => {
        const angle = (i * 60 - 90) * Math.PI / 180;
        const cx2 = 600, cy2 = 105, r = 22;
        const x = cx2 + r * Math.cos(angle);
        const y = cy2 + r * Math.sin(angle);
        const nx = cx2 + r * Math.cos(((i + 1) * 60 - 90) * Math.PI / 180);
        const ny = cy2 + r * Math.sin(((i + 1) * 60 - 90) * Math.PI / 180);
        return (
          <g key={i}>
            <line x1={x} y1={y} x2={nx} y2={ny} stroke="#f97316" strokeWidth="1.5" />
            <circle cx={x} cy={y} r="5" fill="#f97316" fillOpacity="0.3" stroke="#f97316" strokeWidth="1" />
            <text x={x} y={y + 4} textAnchor="middle" fontSize="7" fill="#f97316" fontWeight="700">C</text>
          </g>
        );
      })}
      <text x="600" y="142" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Átomos=nós | Ligações=arestas</text>

      <text x="360" y="175" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-secondary)">↓ todas as representações podem ser input de ML ↓</text>

      {[
        { label: 'SMILES → Transformer', use: 'Drug generation (REINVENT)', color: '#f97316', x: 60 },
        { label: 'Fingerprint → RF/XGB', use: 'Virtual screening rápido', color: '#f97316', x: 280 },
        { label: 'Graph → GNN/MPNN', use: 'ADMET, binding affinity', color: '#f97316', x: 500 },
      ].map(m => (
        <g key={m.label}>
          <rect x={m.x} y={188} width={175} height={52} rx="6" fill={m.color} fillOpacity="0.1" stroke={m.color} strokeWidth="1" />
          <text x={m.x + 88} y={208} textAnchor="middle" fontSize="9" fontWeight="700" fill={m.color}>{m.label}</text>
          <text x={m.x + 88} y={226} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{m.use}</text>
        </g>
      ))}
      <text x="360" y="260" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Espaço químico estimado: 10⁶⁰ moléculas — IA permite navegar eficientemente este espaço imenso</text>
    </svg>
  );
}

function AlphaFoldImpactSVG() {
  return (
    <svg viewBox="0 0 720 280" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>AlphaFold — Impacto em Estruturas de Proteínas Conhecidas</text>

      <rect x="80" y="60" width="220" height="100" rx="8" fill="#6b7280" fillOpacity="0.15" stroke="#6b7280" strokeWidth="1.5" />
      <text x="190" y="90" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6b7280">PDB (60 anos)</text>
      <text x="190" y="115" textAnchor="middle" fontSize="28" fontWeight="800" fill="#6b7280">~170K</text>
      <text x="190" y="138" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">estruturas experimentais</text>

      <text x="360" y="115" textAnchor="middle" fontSize="28" fill="#f97316">→</text>
      <text x="360" y="140" textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="700">×1 176</text>

      <rect x="420" y="60" width="220" height="100" rx="8" fill="#f97316" fillOpacity="0.15" stroke="#f97316" strokeWidth="1.5" />
      <text x="530" y="90" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">AlphaFold DB (2022)</text>
      <text x="530" y="115" textAnchor="middle" fontSize="28" fontWeight="800" fill="#f97316">~200M</text>
      <text x="530" y="138" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">estruturas previstas (EMBL-EBI)</text>

      {/* Timeline */}
      <rect x="40" y="178" width="640" height="72" rx="6" fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.10)" strokeWidth="1" />
      <line x1="60" y1="200" x2="640" y2="200" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
      {[
        { year: '2020', event: 'AlphaFold2 CASP14\nGDT >90', color: '#f97316', x: 80 },
        { year: '2021', event: 'AlphaFold DB público\n200M proteínas', color: '#f97316', x: 240 },
        { year: '2022', event: 'AlphaFold-Multimer\ncomplexos prot-prot', color: '#f97316', x: 400 },
        { year: '2024', event: 'AlphaFold3\nprot-DNA-RNA-ligando', color: '#f97316', x: 560 },
      ].map(t => {
        const lines = t.event.split('\n');
        return (
          <g key={t.year}>
            <circle cx={t.x} cy={200} r="6" fill={t.color} />
            <text x={t.x} y={218} textAnchor="middle" fontSize="9" fontWeight="700" fill={t.color}>{t.year}</text>
            {lines.map((l, li) => (
              <text key={li} x={t.x} y={232 + li * 12} textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">{l}</text>
            ))}
          </g>
        );
      })}
      <text x="360" y="264" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Prémio Nobel Química 2024 — David Baker, Demis Hassabis, John Jumper</text>
    </svg>
  );
}

function GenomicsBarSVG() {
  const tools = [
    { name: 'GATK (clássico)', f1: 0.987, color: '#fb923c' },
    { name: 'DeepVariant (Google)', f1: 0.994, color: '#f97316' },
    { name: 'Clair3', f1: 0.991, color: '#f97316' },
    { name: 'DeepSNV', f1: 0.978, color: '#f97316' },
  ];
  const prs = [
    { disease: 'Doença Coronária', auc: 0.83, quality: 'bom', color: '#f97316' },
    { disease: 'Diabetes T2',       auc: 0.78, quality: 'moderado', color: '#f97316' },
    { disease: 'Cancro da Mama',     auc: 0.72, quality: 'limitado', color: '#f97316' },
    { disease: 'Esquizofrenia',      auc: 0.69, quality: 'limitado', color: '#f97316' },
  ];
  const barH = 28, gap = 12;
  const labelW = 190, barMaxW = 300, leftPad = 200;

  const sec1Y = 50;
  const sec2Y = 300;
  const sec3Y = 540;

  return (
    <svg viewBox="0 0 720 710" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Genómica com IA — Variant Calling, Polygenic Risk Scores e Custo de Sequenciação</text>

      {/* ── SECTION 1: Variant Calling ── */}
      <rect x="20" y={sec1Y - 4} width="680" height={tools.length * (barH + gap) + 36} rx="8" fill="rgba(0,0,0,0.04)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="360" y={sec1Y + 14} textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Variant Calling — F1 Score (SNPs + Indels, benchmark GIAB)</text>
      {tools.map((t, i) => {
        const w = ((t.f1 - 0.96) / 0.04) * barMaxW;
        const y = sec1Y + 28 + i * (barH + gap);
        return (
          <g key={t.name}>
            <text x={leftPad - 10} y={y + barH / 2 + 4} textAnchor="end" fontSize="10" fontWeight="600" fill={t.color}>{t.name}</text>
            <rect x={leftPad} y={y} width={w} height={barH} rx="5" fill={t.color} fillOpacity="0.8" />
            <text x={leftPad + w + 10} y={y + barH / 2 + 4} fontSize="11" fontWeight="800" fill={t.color}>{t.f1}</text>
          </g>
        );
      })}

      {/* ── SECTION 2: PRS ── */}
      <rect x="20" y={sec2Y - 4} width="680" height={prs.length * (barH + gap) + 36} rx="8" fill="rgba(0,0,0,0.04)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="360" y={sec2Y + 14} textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Polygenic Risk Score — AUC por Doença Complexa</text>
      {prs.map((p, i) => {
        const w = ((p.auc - 0.5) / 0.5) * barMaxW;
        const y = sec2Y + 28 + i * (barH + gap);
        return (
          <g key={p.disease}>
            <text x={leftPad - 10} y={y + barH / 2 + 4} textAnchor="end" fontSize="10" fontWeight="600" fill={p.color}>{p.disease}</text>
            <rect x={leftPad} y={y} width={w} height={barH} rx="5" fill={p.color} fillOpacity="0.8" />
            <text x={leftPad + w + 10} y={y + barH / 2 + 4} fontSize="11" fontWeight="800" fill={p.color}>{p.auc}</text>
            <text x={leftPad + barMaxW + 80} y={y + barH / 2 + 4} fontSize="9" fill="var(--text-secondary)">{p.quality}</text>
          </g>
        );
      })}

      {/* ── SECTION 3: WGS Cost ── */}
      <rect x="20" y={sec3Y - 4} width="680" height={130} rx="8" fill="rgba(0,0,0,0.04)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="360" y={sec3Y + 18} textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Custo de Sequenciação de Genoma Completo (WGS) — Queda de 1 000 000×</text>

      {[
        { year: '2001', cost: '100M USD', logFrac: 1.0,   x: 90,  barColor: '#f97316' },
        { year: '2007', cost: '10M USD',  logFrac: 0.833, x: 220, barColor: '#f97316' },
        { year: '2012', cost: '1,000 USD',logFrac: 0.5,   x: 360, barColor: '#f97316' },
        { year: '2020', cost: '200 USD',  logFrac: 0.367, x: 500, barColor: '#f97316' },
        { year: '2024', cost: '<100 USD', logFrac: 0.3,   x: 630, barColor: '#f97316' },
      ].map(d => {
        const barH2 = Math.round(d.logFrac * 60);
        const baselineY = sec3Y + 105;
        const bY = baselineY - barH2;
        return (
          <g key={d.year}>
            <rect x={d.x - 34} y={bY} width={68} height={barH2} rx="4" fill={d.barColor} fillOpacity="0.8" />
            {/* year ABOVE bar */}
            <text x={d.x} y={bY - 7} textAnchor="middle" fontSize="11" fontWeight="800" fill={d.barColor}>{d.year}</text>
            <line x1={d.x - 34} y1={baselineY} x2={d.x + 34} y2={baselineY} stroke="var(--text-secondary)" strokeWidth="1" />
            {/* cost BELOW baseline */}
            <text x={d.x} y={baselineY + 16} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{d.cost}</text>
          </g>
        );
      })}
      <text x="360" y={sec3Y + 136} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Lei de Moore da genómica — custo caiu 10 000× mais rápido que semicondutores | UK Biobank: 500K genomas + EHR + imaging</text>
    </svg>
  );
}

export default function AIH4() {
  return (
    <div style={S.page}>
      <Link to="/ai-health" style={S.back}><ArrowLeft size={16} /> IA em Saúde</Link>
      <div style={S.tag}>Module 04</div>
      <h1 style={S.h1}>Drug Discovery &amp; Genomics</h1>
      <p style={S.lead}>
        A IA está a transformar a descoberta de fármacos e a genómica — dois domínios onde a complexidade
        do espaço de pesquisa supera em ordens de grandeza a capacidade humana de exploração tradicional.
        Neste módulo estudamos o pipeline de drug discovery, as representações moleculares para ML,
        as Graph Neural Networks em química, o impacto histórico do AlphaFold e as aplicações de IA
        em genómica.
      </p>

      <section style={S.section}>
        <h2 style={S.h2}>1. Pipeline de Drug Discovery</h2>
        <DrugDiscoveryPipelineSVG />
        <h3 style={S.h3}>10 anos e 2.6 B USD — IA como acelerador</h3>
        <p style={S.p}>
          O desenvolvimento de um novo fármaco demora em média 10–15 anos e custa 2.6 B USD (DiMasi et al.).
          Em 2023, a Insilico Medicine anunciou o primeiro fármaco descoberto maioritariamente por IA
          a entrar em ensaios clínicos de fase II — em apenas 18 meses desde o início da descoberta.
        </p>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Fase</th><th style={S.th}>Duração típica</th><th style={S.th}>Aplicação IA</th></tr>
          </thead>
          <tbody>
            {[
              ['Target Identification', '1–2 anos', 'Análise de redes de PPI, GWAS, Knowledge Graphs'],
              ['Hit Discovery', '1–2 anos', 'Virtual screening, generative chemistry (REINVENT)'],
              ['Lead Optimisation', '2–3 anos', 'QSAR/QSPR, multi-objective optimization'],
              ['ADMET Prediction', 'Paralelo', 'GNN/MPNN para absorção, distribuição, metabolismo, excreção, toxicidade'],
              ['Clinical Trials', '6–8 anos', 'Patient stratification, digital endpoints, trial simulation'],
            ].map(([a, b, c]) => (
              <tr key={a}><td style={S.td}>{a}</td><td style={S.td}>{b}</td><td style={S.td}>{c}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>2. Representações Moleculares para ML</h2>
        <MolecularRepresentationSVG />
        <h3 style={S.h3}>SMILES, Fingerprints e Grafos</h3>
        <div style={S.highlight}>
          <strong>SMILES</strong> (Simplified Molecular Input Line Entry System): notação textual linear
          que descreve a estrutura molecular. Aspirina: <code>CC(=O)Oc1ccccc1C(=O)O</code>.
          Usável directamente com transformers ou convertida para grafos.
        </div>
        <div style={S.highlight}>
          <strong>Molecular Fingerprints:</strong> vectores binários de tamanho fixo (512–4096 bits).
          Morgan/ECFP fingerprints são os mais usados em QSAR. Computacionalmente eficientes mas perdem informação 3D.
        </div>
        <div style={S.highlight}>
          <strong>Graph Representations:</strong> a molécula como grafo onde átomos são nós e ligações
          são arestas. Representação natural para GNNs que preserva a topologia molecular.
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>3. Graph Neural Networks em Química</h2>
        <p style={S.p}>
          As GNNs processam directamente a representação em grafo da molécula, preservando invariâncias
          estruturais importantes sem conversão para features fixas.
        </p>
        <div style={S.highlight}>
          <strong>MPNN</strong> (Gilmer et al., 2017): cada nó agrega mensagens dos vizinhos ao longo de K camadas.
          Após K passos, cada átomo codifica o contexto da sua vizinhança a K ligações de distância.
        </div>
        <div style={S.highlight}>
          <strong>DimeNet / DimeNet++:</strong> incorpora informação direcional (ângulos de ligação,
          distâncias inter-atómicas) para modelar geometria 3D — essencial para energia de activação e polarizabilidade.
        </div>
        <p style={S.p}>
          Benchmarks: MoleculeNet (17 datasets), OGB-LSC. Modelos estado da arte: Uni-Mol, GPS++,
          que combinam GNNs com transformers para explorar contexto global e local simultaneamente.
        </p>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>4. AlphaFold</h2>
        <AlphaFoldImpactSVG />
        <h3 style={S.h3}>O problema de 50 anos resolvido</h3>
        <p style={S.p}>
          O AlphaFold2 da DeepMind (2021) resolveu o problema de dobramento de proteínas. Dada a
          sequência de aminoácidos, prevê a estrutura 3D com precisão comparável à cristalografia
          de raios X (GDT score &gt;90 no CASP14).
        </p>
        <div style={S.highlight}>
          <strong>AlphaFold DB (EMBL-EBI):</strong> &gt;200 M estruturas previstas — virtualmente todo
          o proteoma do reino animal, vegetal e microbiano. Acelerou a fase de target identification
          em drug discovery e a compreensão de doenças raras causadas por proteínas mal dobradas.
        </div>
        <p style={S.p}>
          <strong>AlphaFold3</strong> (2024) estende a abordagem a complexos proteína-proteína,
          proteína-DNA, proteína-RNA e proteína-ligando — relevante para prever a geometria de
          binding de potenciais fármacos ao seu alvo proteico.
        </p>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>5. Genomics &amp; IA</h2>
        <GenomicsBarSVG />
        <h3 style={S.h3}>Variant Calling, PRS e Custo de Sequenciação</h3>
        <div style={S.highlight}>
          <strong>CNNs em sequências de DNA:</strong> modelos como DeepBind e DeepSEA tratam
          sequências de DNA como sequências {'{A, T, C, G}'} e usam CNNs para aprender padrões
          de binding de factores de transcrição e efeitos regulatórios de variantes.
        </div>
        <div style={S.highlight}>
          <strong>DeepVariant (Google):</strong> CNNs para chamar variantes genéticas (SNPs, indels)
          a partir de dados NGS, superando GATK em precisão em múltiplos benchmarks independentes.
        </div>
        <div style={S.highlight}>
          <strong>Polygenic Risk Scores (PRS):</strong> somam o efeito de milhares a milhões de
          variantes para estimar risco de doenças complexas. ML com regularização L1/L2 ou redes
          neurais incorporam interacções entre variantes que modelos lineares ignoram.
        </div>
        <div style={S.note}>
          Síntese: IA acelera cada fase do pipeline de drug discovery. GNNs são a arquitectura natural
          para dados moleculares. AlphaFold resolveu o folding proteico com impacto imediato em drug
          discovery. Em genómica, deep learning melhora variant calling e estratificação de risco.
        </div>
      </section>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Pipeline de Drug Discovery</strong> — drug discovery convencional demora 10–15 anos e custa &gt;$2B; pipeline AI-accelerated: target identification → hit discovery (virtual screening) → lead optimisation (ADMET prediction) → preclinical → clinical trials; primeiro fármaco 100% AI-designed (INS018_055, Insilico Medicine) entrou em fase II em 2023.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Representações Moleculares para ML</strong> — SMILES strings, Morgan fingerprints (ECFP), grafos moleculares (atoms = nodes, bonds = edges) e conformações 3D (com coordenadas XYZ) representam moléculas para ML; grafos moleculares com GNNs são o estado da arte por capturar estrutura topológica sem engenharia de features manual.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Graph Neural Networks em Química</strong> — GNNs propagam mensagens entre átomos vizinhos para aprender representações moleculares; SchNet e DimeNet incluem informação de distância interatómica; MPNN (Message Passing Neural Network) é o framework genérico implementado em PyTorch Geometric e DeepChem.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>AlphaFold</strong> — AlphaFold2 (DeepMind, 2021) prediz estrutura 3D de proteínas com precisão atómica a partir da sequência de aminoácidos; previu estruturas de &gt;200M proteínas disponíveis no AlphaFold DB — revolução que acelera drug discovery ao revelar alvos proteicos previamente sem estrutura conhecida.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Genomics &amp; IA</strong> — sequenciamento WGS de tumores identifica mutações driver; RNA-seq com DESeq2 e edgeR detecta genes diferencialmente expressos; DeepVariant (Google) chama variantes com CNN com &lt;0.01% de erro — MLOps genómicos com Nextflow e Snakemake orquestram pipelines reprodutíveis em cloud.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
