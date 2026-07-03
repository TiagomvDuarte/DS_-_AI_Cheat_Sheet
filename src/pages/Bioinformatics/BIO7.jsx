import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Bioinformatics';

const mod = modules[6];
const color = '#f97316';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  highlight: { background: `${color}12`, border: `1px solid ${color}30`, borderRadius: 8, padding: '0.9rem 1.1rem', marginTop: '0.8rem', fontSize: '0.93rem', color: 'var(--text-primary)', lineHeight: 1.7 },
  note: { background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 8, padding: '0.8rem 1rem', marginTop: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

export default function BIO7() {
  return (
    <div style={S.page}>
      <Link to="/bioinformatics" style={S.back}>&#8592; Bioinformatics</Link>
      <div style={S.badge}>MÓDULO {mod.num}</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Medicina de Precisao e Oncologia Computacional</h2>
        <div style={S.diagram}>
          <svg viewBox="0 0 790 300" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="300" fill="var(--bg-secondary)" rx="10" />
            <text x="15" y="22" fill={color} fontSize="11" fontWeight="700">Framework de Medicina de Precisao</text>
            {/* Framework arrows first */}
            {[55, 112, 169].map((y, i) => (
              <line key={i} x1="112" y1={y + 19} x2="112" y2={y + 37} stroke={color} strokeWidth="1.5" markerEnd="url(#arr7a)" />
            ))}
            {[
              { y: 55, label: 'Biopsia tumoral', sub: 'tecido / liquido (ctDNA)' },
              { y: 112, label: 'Sequenciamento WGS/WES/Painel', sub: 'WGS 30x, painel 324 genes F1CDx' },
              { y: 169, label: 'Variant calling somatico', sub: 'driver vs passenger, ACMG class.' },
              { y: 226, label: 'Interpretacao clinica', sub: 'OncoKB, ClinVar, ClinGen' },
            ].map((s, i) => (
              <g key={i}>
                <rect x="12" y={s.y - 18} width="200" height="34" fill="rgba(249,115,22,0.06)" stroke={`${color}60`} rx="5" />
                <text x="112" y={s.y} fill="#e2e8f0" fontSize="9.5" textAnchor="middle" fontWeight="600">{s.label}</text>
                <text x="112" y={s.y + 12} fill="#94a3b8" fontSize="8" textAnchor="middle">{s.sub}</text>
              </g>
            ))}

            {/* Treatment matching */}
            <text x="230" y="22" fill={color} fontSize="10" fontWeight="700">Correspondencia Terapeutica</text>
            {[
              { mut: 'EGFR exon19/L858R', drug: 'Osimertinib (NSCLC)', c: '#f97316' },
              { mut: 'BRCA1/2 mut', drug: 'PARP inhibitors', c: '#f97316' },
              { mut: 'HER2 amplificacao', drug: 'Trastuzumab', c: '#f97316' },
              { mut: 'TMB alto (>10 mut/Mb)', drug: 'Pembrolizumab', c: color },
              { mut: 'MSI-H', drug: 'Dostarlimab (histology-agnostic)', c: color },
              { mut: 'BRAF V600E', drug: 'Vemurafenib (melanoma)', c: '#f97316' },
            ].map((t, i) => (
              <g key={i}>
                <rect x="230" y={32 + i * 38} width="175" height="30" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" rx="4" />
                <text x="317" y={51 + i * 38} fill="#94a3b8" fontSize="8" textAnchor="middle">{t.mut}</text>
                <text x="415" y={51 + i * 38} fill={t.c} fontSize="13" textAnchor="middle">&#8594;</text>
                <rect x="430" y={32 + i * 38} width="180" height="30" fill={`${t.c}15`} stroke={`${t.c}40`} rx="4" />
                <text x="520" y={51 + i * 38} fill={t.c} fontSize="8" textAnchor="middle" fontWeight="600">{t.drug}</text>
              </g>
            ))}

            {/* TMB chart */}
            <text x="625" y="22" fill={color} fontSize="10" fontWeight="700">TMB por Tumor</text>
            {[
              { cancer: 'Melanoma', tmb: 0.9 },
              { cancer: 'Pulmao', tmb: 0.75 },
              { cancer: 'Bexiga', tmb: 0.6 },
              { cancer: 'Colorrectal', tmb: 0.4 },
              { cancer: 'Mama', tmb: 0.25 },
              { cancer: 'Ovario', tmb: 0.15 },
            ].map((c, i) => (
              <g key={i}>
                <text x="625" y={40 + i * 38} fill="#94a3b8" fontSize="8">{c.cancer}</text>
                <rect x="625" y={44 + i * 38} width={Math.round(c.tmb * 130)} height="16" fill={color} opacity="0.7" rx="3" />
                <text x={630 + c.tmb * 130} y={56 + i * 38} fill={color} fontSize="7.5">{Math.round(c.tmb * 30)} mut/Mb</text>
              </g>
            ))}
            <defs>
              <marker id="arr7a" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill={color} />
              </marker>
            </defs>
          </svg>
        </div>
        <p style={S.p}>A medicina de precisao adapta o tratamento ao perfil molecular individual — oposto a abordagem one-size-fits-all. A oncologia de precisao trata o cancro como doenca genomica — mutacoes somaticas driver identificadas por sequenciamento do tumor. Mutacoes actionable tem terapia aprovada: EGFR exon 19 del / L858R direciona para osimertinib (NSCLC); BRAF V600E para vemurafenib (melanoma); BCR-ABL para imatinib (LMC); BRCA1/2 para PARP inhibitors (ovario, mama, prostata).</p>
        <p style={S.p}>O Foundation Medicine F1CDx e um painel de 324 genes aprovado pela FDA para tumores solidos — reporta TMB, MSI, CNVs e fusoes. O TMB alto (mais de 10 mut/Mb) prediz resposta a pembrolizumab; o MSI-H prediz resposta a dostarlimab em qualquer tumor solido (histology-agnostic approval).</p>
        <div style={S.highlight}>A liquid biopsy (ctDNA no sangue) e menos invasiva, captura heterogeneidade tumoral e permite monitorizacao de resposta em tempo real — substitui biopsia de tecido em monitorizacao de recidiva e resistencia adquirida.</div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Farmacogenomica — CYP450 e Star Alleles</h2>
        <div style={S.diagram}>
          <svg viewBox="0 0 780 280" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="280" fill="var(--bg-secondary)" rx="10" />
            <text x="15" y="22" fill={color} fontSize="11" fontWeight="700">Nomenclatura Star Allele — CYP2D6</text>
            <rect x="15" y="32" width="330" height="28" fill={`${color}15`} stroke={`${color}40`} rx="5" />
            <text x="180" y="50" fill={color} fontSize="10" textAnchor="middle">Genotipo: CYP2D6 *1/*4</text>
            {[
              { allele: '*1/*1', pheno: 'NM — Metabolizador Normal', c: '#f97316' },
              { allele: '*1/*4', pheno: 'IM — Metabolizador Intermedio', c: '#f97316' },
              { allele: '*4/*4', pheno: 'PM — Sem actividade (nao funcional)', c: '#f97316' },
              { allele: '*1xN', pheno: 'UM — Copias multiplas, ultra-rapido', c: color },
            ].map((a, i) => (
              <g key={i}>
                <rect x="15" y={70 + i * 40} width="100" height="28" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" rx="4" />
                <text x="65" y={88 + i * 40} fill="#e2e8f0" fontSize="9" textAnchor="middle">{a.allele}</text>
                <rect x="125" y={70 + i * 40} width="220" height="28" fill={`${a.c}15`} stroke={`${a.c}40`} rx="4" />
                <text x="235" y={88 + i * 40} fill={a.c} fontSize="9" textAnchor="middle">{a.pheno}</text>
              </g>
            ))}

            {/* Drug consequences */}
            <text x="365" y="22" fill={color} fontSize="10" fontWeight="700">Consequencias — Codeina / CYP2D6</text>
            <rect x="365" y="32" width="180" height="50" fill="#ef444415" stroke="#ef444440" rx="6" />
            <text x="455" y="52" fill="#f97316" fontSize="9" textAnchor="middle" fontWeight="700">UM (copias multiplas)</text>
            <text x="455" y="66" fill="#94a3b8" fontSize="8" textAnchor="middle">Codeina -&gt; excesso morfina</text>
            <text x="455" y="76" fill="#f97316" fontSize="8" textAnchor="middle">TOXICIDADE / overdose</text>
            <rect x="365" y="92" width="180" height="50" fill="rgba(251,146,60,0.12)" stroke="#fb923c40" rx="6" />
            <text x="455" y="112" fill="#f97316" fontSize="9" textAnchor="middle" fontWeight="700">NM (normal)</text>
            <text x="455" y="126" fill="#94a3b8" fontSize="8" textAnchor="middle">Codeina -&gt; morfina normal</text>
            <text x="455" y="136" fill="#f97316" fontSize="8" textAnchor="middle">Analgesia adequada</text>
            <rect x="365" y="152" width="180" height="50" fill="rgba(251,191,36,0.10)" stroke="#fbbf2440" rx="6" />
            <text x="455" y="172" fill="#fbbf24" fontSize="9" textAnchor="middle" fontWeight="700">PM (sem actividade)</text>
            <text x="455" y="186" fill="#94a3b8" fontSize="8" textAnchor="middle">Codeina -&gt; sem morfina</text>
            <text x="455" y="196" fill="#fbbf24" fontSize="8" textAnchor="middle">SEM analgesia</text>

            {/* CPIC table */}
            <text x="560" y="22" fill={color} fontSize="10" fontWeight="700">CPIC — Guidelines Nivel A</text>
            {[
              { drug: 'Codeina', gene: 'CYP2D6' },
              { drug: 'Clopidogrel', gene: 'CYP2C19' },
              { drug: 'Tamoxifeno', gene: 'CYP2D6' },
              { drug: 'Varfarina', gene: 'CYP2C9+VKORC1' },
              { drug: 'Mercaptopurina', gene: 'TPMT+NUDT15' },
              { drug: 'Simvastatina', gene: 'SLCO1B1' },
            ].map((row, i) => (
              <g key={i}>
                <rect x="560" y={32 + i * 36} width="110" height="28" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" rx="4" />
                <text x="615" y={50 + i * 36} fill="#e2e8f0" fontSize="8.5" textAnchor="middle">{row.drug}</text>
                <rect x="678" y={32 + i * 36} width="95" height="28" fill={`${color}15`} stroke={`${color}40`} rx="4" />
                <text x="725" y={50 + i * 36} fill={color} fontSize="8" textAnchor="middle">{row.gene}</text>
              </g>
            ))}
          </svg>
        </div>
        <p style={S.p}>A farmacogenomica estuda como variantes geneticas afectam a resposta a medicamentos — metabolismo, eficacia e toxicidade. As enzimas CYP450 hepaticas metabolizam 75% dos farmacos — o CYP2D6 metaboliza codeina em morfina (UM tem toxicidade, PM nao tem analgesia); o CYP2C19 activa o clopidogrel (PM tem maior risco cardiovascular); a CYP2C9 metaboliza a varfarina.</p>
        <p style={S.p}>A nomenclatura star allele (*1 wild-type, *4 nao funcional, *5 reduzido) codifica haplotipos com fenotipo farmacologico definido. A TPMT/NUDT15 — a sua deficiencia aumenta toxicidade de tiopurinas (mercaptopurina em leucemia infantil) — o teste e obrigatorio em muitos paises.</p>
        <div style={S.highlight}>O CPIC (Clinical Pharmacogenomics Implementation Consortium) traduz genotipos em recomendacoes de dose para mais de 100 farmacos com guidelines nivel A/B. A FDA tem uma tabela de 250+ farmacos com informacao farmacogenomica no label.</div>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Predicao de Resposta a Farmacos com ML</h2>
        <div style={S.diagram}>
          <svg viewBox="0 0 780 280" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="280" fill="var(--bg-secondary)" rx="10" />
            <text x="15" y="22" fill={color} fontSize="11" fontWeight="700">Pipeline de Predicao de Resposta a Farmacos</text>
            {/* Inputs */}
            <rect x="15" y="35" width="140" height="40" fill="rgba(249,115,22,0.06)" stroke="#475569" rx="6" />
            <text x="85" y="55" fill="#e2e8f0" fontSize="9" textAnchor="middle">GDSC / CCLE</text>
            <text x="85" y="68" fill="#94a3b8" fontSize="7.5" textAnchor="middle">IC50 1000 drugs x 1000 linhas</text>
            <rect x="15" y="85" width="140" height="55" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" rx="5" />
            <text x="85" y="103" fill="#e2e8f0" fontSize="8.5" textAnchor="middle">Features multi-omicas</text>
            <text x="85" y="115" fill="#94a3b8" fontSize="7.5" textAnchor="middle">expressao + mutacoes</text>
            <text x="85" y="127" fill="#94a3b8" fontSize="7.5" textAnchor="middle">CNV + metilacao</text>
            <rect x="15" y="150" width="140" height="40" fill={`${color}15`} stroke={`${color}40`} rx="5" />
            <text x="85" y="170" fill={color} fontSize="8.5" textAnchor="middle">Drug features</text>
            <text x="85" y="182" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Morgan fingerprints (SMILES)</text>
            {[35,85,150].map((y, i) => (
              <line key={i} x1="155" y1={y + 20} x2="180" y2="145" stroke="#475569" strokeWidth="1" markerEnd="url(#arr7b)" />
            ))}
            {/* Model */}
            <rect x="180" y="118" width="130" height="54" fill={`${color}20`} stroke={color} rx="7" />
            <text x="245" y="138" fill={color} fontSize="9.5" textAnchor="middle" fontWeight="700">GraphDRP</text>
            <text x="245" y="153" fill="#94a3b8" fontSize="8" textAnchor="middle">GNN molecular graph</text>
            <text x="245" y="165" fill="#94a3b8" fontSize="8" textAnchor="middle">+ FC em omicas</text>
            <line x1="310" y1="145" x2="335" y2="145" stroke={color} strokeWidth="1.5" markerEnd="url(#arr7b)" />
            {/* Output */}
            <rect x="335" y="118" width="130" height="54" fill="rgba(249,115,22,0.06)" stroke="#475569" rx="6" />
            <text x="400" y="140" fill="#e2e8f0" fontSize="9" textAnchor="middle">IC50 previsto</text>
            <text x="400" y="155" fill="#94a3b8" fontSize="8" textAnchor="middle">-&gt; estratificacao</text>
            <text x="400" y="167" fill="#94a3b8" fontSize="8" textAnchor="middle">sensivel vs resistente</text>

            {/* ROC curve */}
            <text x="485" y="22" fill={color} fontSize="10" fontWeight="700">ROC — GraphDRP</text>
            <line x1="490" y1="190" x2="650" y2="190" stroke="var(--card-border)" strokeWidth="1.5" />
            <line x1="490" y1="190" x2="490" y2="30" stroke="var(--card-border)" strokeWidth="1.5" />
            <text x="570" y="210" fill="#94a3b8" fontSize="8.5" textAnchor="middle">FPR</text>
            <text x="475" y="110" fill="#94a3b8" fontSize="8.5" textAnchor="middle" transform="rotate(-90,475,110)">TPR</text>
            <line x1="490" y1="190" x2="650" y2="30" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.8" />
            <path d="M490,190 Q510,185 530,165 Q560,130 590,80 Q620,45 650,30" fill="none" stroke={color} strokeWidth="2" />
            <text x="600" y="75" fill={color} fontSize="9">AUC=0.81</text>

            {/* Drug synergy */}
            <text x="485" y="225" fill={color} fontSize="10" fontWeight="700">Sinergia de Farmacos (Bliss)</text>
            <rect x="485" y="235" width="275" height="38" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" rx="5" />
            <text x="622" y="252" fill="#e2e8f0" fontSize="8.5" textAnchor="middle">Bliss independence: E(A+B) = E(A) + E(B) - E(A)*E(B)</text>
            <text x="622" y="265" fill="#94a3b8" fontSize="8" textAnchor="middle">delta positivo = sinergia; negativo = antagonismo</text>

            <defs>
              <marker id="arr7b" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill={color} />
              </marker>
            </defs>
          </svg>
        </div>
        <p style={S.p}>Predizer que doentes respondem a que farmacos e o problema central de oncologia de precisao — as respostas in vitro em linhas celulares sao a base de dados principal. O GDSC (Genomics of Drug Sensitivity in Cancer) contem IC50 de 518 farmacos em 987 linhas celulares com perfis omicos completos. O CCLE (Cancer Cell Line Encyclopedia) tem 1457 linhas celulares com dados de expressao, mutacao, CNV e metilacao.</p>
        <p style={S.p}>O DrugCell incorpora anotacao de vias biologicas (ontologia Gene Ontology) na arquitectura neural — interpreta o mecanismo de sensibilidade. O DeepDR integra dados de expressao e estrutura do farmaco (graph neural network para a molecula).</p>
        <div style={S.note}>Os organoides derivados de biopsia tumoral do doente sao modelos ex vivo mais preditivos que linhas celulares — capturam heterogeneidade tumoral. O scRNA-seq antes e depois de terapia identifica a subpopulacao resistente e o mecanismo de resistencia adquirida.</div>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. CRISPR e IA — Design e Screens Genomicos</h2>
        <div style={S.diagram}>
          <svg viewBox="0 0 780 320" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="320" fill="var(--bg-secondary)" rx="10" />
            <text x="15" y="22" fill={color} fontSize="11" fontWeight="700">Mecanismo CRISPR-Cas9</text>
            {/* All arrows first */}
            <line x1="95" y1="58" x2="95" y2="75" stroke={color} strokeWidth="1.5" markerEnd="url(#arr7c)" />
            <line x1="95" y1="101" x2="95" y2="118" stroke={color} strokeWidth="1.5" markerEnd="url(#arr7c)" />
            <line x1="95" y1="144" x2="55" y2="162" stroke={color} strokeWidth="1.5" markerEnd="url(#arr7c)" />
            <line x1="95" y1="144" x2="135" y2="162" stroke={color} strokeWidth="1.5" markerEnd="url(#arr7c)" />
            {/* All boxes on top */}
            <rect x="15" y="32" width="160" height="26" fill="var(--bg-secondary)" stroke={`${color}60`} rx="5" />
            <text x="95" y="49" fill="#e2e8f0" fontSize="9" textAnchor="middle">sgRNA (20nt spacer + scaffold)</text>
            <rect x="15" y="75" width="160" height="26" fill={`${color}15`} stroke={`${color}50`} rx="5" />
            <text x="95" y="92" fill={color} fontSize="9" textAnchor="middle">Hibrida com DNA alvo (PAM: NGG)</text>
            <rect x="15" y="118" width="160" height="26" fill={`${color}25`} stroke={color} rx="5" />
            <text x="95" y="135" fill={color} fontSize="9" textAnchor="middle" fontWeight="700">Cas9: corte double-strand break</text>
            <rect x="15" y="162" width="80" height="30" fill="rgba(249,115,22,0.10)" stroke={`${color}40`} rx="5" />
            <text x="55" y="178" fill="#f97316" fontSize="8.5" textAnchor="middle">NHEJ</text>
            <text x="55" y="188" fill="#94a3b8" fontSize="7.5" textAnchor="middle">indels → knockout</text>
            <rect x="105" y="162" width="70" height="30" fill="rgba(251,191,36,0.12)" stroke="#fbbf2440" rx="5" />
            <text x="140" y="178" fill="#fbbf24" fontSize="8.5" textAnchor="middle">HDR</text>
            <text x="140" y="188" fill="#94a3b8" fontSize="7.5" textAnchor="middle">edicao precisa</text>
            <rect x="15" y="205" width="160" height="30" fill="var(--bg-secondary)" stroke="var(--card-border)" rx="5" />
            <text x="95" y="222" fill="#fb923c" fontSize="9" textAnchor="middle">Base editing (CBE/ABE)</text>
            <text x="95" y="233" fill="#94a3b8" fontSize="7.5" textAnchor="middle">C→T ou A→G, sem DSB</text>
            <rect x="15" y="242" width="160" height="30" fill="var(--bg-secondary)" stroke="var(--card-border)" rx="5" />
            <text x="95" y="258" fill="#f59e0b" fontSize="9" textAnchor="middle">Prime editing (Liu Lab)</text>
            <text x="95" y="269" fill="#94a3b8" fontSize="7.5" textAnchor="middle">search and replace genomico</text>

            {/* Genome-wide screen */}
            <line x1="200" y1="10" x2="200" y2="280" stroke="var(--card-border)" strokeWidth="1" />
            <text x="215" y="22" fill={color} fontSize="11" fontWeight="700">Screen Genomico CRISPR</text>
            {/* Screen boxes first */}
            {[
              { label: 'Biblioteca sgRNA (80k guias, todos os genes)', fill: 'var(--bg-secondary)', stroke: 'var(--card-border)', c: '#e2e8f0' },
              { label: 'Transdução lentiviral (1 sgRNA / celula)', fill: `${color}15`, stroke: `${color}50`, c: color },
              { label: 'Tratamento com farmaco ou seleccao fenotipica', fill: 'var(--bg-secondary)', stroke: 'var(--card-border)', c: '#e2e8f0' },
              { label: 'Sequenciamento profundo de guias integrados', fill: `${color}15`, stroke: `${color}50`, c: color },
              { label: 'MAGeCK — analise de enriquecimento / deplecao', fill: 'var(--bg-secondary)', stroke: 'var(--card-border)', c: '#e2e8f0' },
            ].map((s, i) => (
              <g key={i}>
                <rect x="215" y={32 + i * 46} width="340" height="32" fill={s.fill} stroke={s.stroke} rx="5" />
                <text x="385" y={52 + i * 46} fill={s.c} fontSize="9" textAnchor="middle">{s.label}</text>
              </g>
            ))}
            {/* Screen arrows on top, between boxes */}
            {[0,1,2,3].map(i => (
              <line key={i} x1="385" y1={65 + i * 46} x2="385" y2={75 + i * 46} stroke={color} strokeWidth="1.5" markerEnd="url(#arr7c)" />
            ))}

            {/* Results */}
            <rect x="215" y="265" width="155" height="22" fill="rgba(249,115,22,0.12)" stroke="#f9731640" rx="5" />
            <text x="292" y="280" fill="#f97316" fontSize="8.5" textAnchor="middle">Genes essenciais (depletados)</text>
            <rect x="380" y="265" width="175" height="22" fill="rgba(251,191,36,0.12)" stroke="#fbbf2440" rx="5" />
            <text x="467" y="280" fill="#fbbf24" fontSize="8.5" textAnchor="middle">Genes resistencia (enriquecidos)</text>

            {/* Clinical */}
            <line x1="570" y1="10" x2="570" y2="280" stroke="var(--card-border)" strokeWidth="1" />
            <text x="580" y="22" fill={color} fontSize="11" fontWeight="700">CRISPR Terapeutico</text>
            <rect x="580" y="35" width="185" height="55" fill={`${color}15`} stroke={`${color}40`} rx="7" />
            <text x="672" y="55" fill={color} fontSize="9.5" textAnchor="middle" fontWeight="700">Casgevy (CTX001)</text>
            <text x="672" y="70" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Drepanocitose</text>
            <text x="672" y="82" fill="#94a3b8" fontSize="8.5" textAnchor="middle">1.o tratamento CRISPR aprovado FDA 2023</text>
            <rect x="580" y="100" width="185" height="40" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" rx="6" />
            <text x="672" y="118" fill="#e2e8f0" fontSize="9" textAnchor="middle">Mecanismo: reactivar HbF</text>
            <text x="672" y="132" fill="#94a3b8" fontSize="8" textAnchor="middle">knockout BCL11A em celulas estaminais</text>
            <rect x="580" y="150" width="185" height="55" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" rx="6" />
            <text x="672" y="168" fill="#e2e8f0" fontSize="9" textAnchor="middle">Ferramentas de design IA:</text>
            <text x="672" y="182" fill="#94a3b8" fontSize="8" textAnchor="middle">CRISPRscan, DeepCRISPR</text>
            <text x="672" y="196" fill="#94a3b8" fontSize="8" textAnchor="middle">CRISPRick, Cas-OFFinder</text>

            <defs>
              <marker id="arr7c" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill={color} />
              </marker>
            </defs>
          </svg>
        </div>
        <p style={S.p}>O CRISPR-Cas9 (Doudna/Charpentier, Nobel 2020) e a ferramenta mais poderosa de edicao genomica — a IA optimiza o seu design e interpreta screens. O design de sgRNAs evita off-targets: o CRISPRscan, DeepCRISPR e CRISPRick predizem eficiencia on-target (Doench score) e especificidade. O Cas-OFFinder enumera potenciais off-targets com mismatches ou bulges.</p>
        <p style={S.p}>Os screens genomicos usam bibliotecas de 80k sgRNAs (Brunello, Brie) transduzidas por lentivirus — o MAGeCK faz analise estatistica de enriquecimento/deplecao para identificar genes essenciais ou de resistencia. O base editing (CBEs/ABEs) converte C para T ou A para G sem quebra de cadeia dupla — mais preciso, sem indels.</p>
        <div style={S.highlight}>O CRISPR terapeutico — Casgevy (CTX001) para drepanocitose, aprovado FDA 2023 — e o primeiro tratamento de edicao genomica clinico. O prime editing ("search and replace" genomico, Liu Lab) edita qualquer base em qualquer contexto com insercoes e delecoes precisas.</div>
      </div>

      <hr style={S.divider} />

      {/* Section 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Diagnostico Genomico e Medicina do Futuro</h2>
        <div style={S.diagram}>
          <svg viewBox="0 0 780 305" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="290" fill="var(--bg-secondary)" rx="10" />
            <text x="15" y="22" fill={color} fontSize="11" fontWeight="700">Workflow de Genomica Clinica</text>
            {/* Genomica Clinica boxes first */}
            {[
              { y: 48, label: 'Referenciacao clinica do doente' },
              { y: 96, label: 'Colheita: sangue / saliva / biopsia tumoral' },
              { y: 144, label: 'Sequenciamento WGS 30x / WES / painel' },
              { y: 192, label: 'Pipeline bioinformatico (VEP + ACMG 5 niveis)' },
              { y: 240, label: 'Equipa multidisciplinar: geneticista+bioinfo+clinico' },
              { y: 288, label: 'Relatorio + gestao + rastreio familiar' },
            ].map((s, i) => (
              <g key={i}>
                <rect x="12" y={s.y - 16} width="215" height="30" fill={i % 2 === 0 ? 'var(--bg-secondary)' : `${color}12`} stroke={i % 2 === 0 ? 'var(--card-border)' : `${color}40`} rx="5" />
                <text x="119" y={s.y + 1} fill={i % 2 === 0 ? '#e2e8f0' : color} fontSize="9" textAnchor="middle">{s.label}</text>
              </g>
            ))}
            {/* Genomica Clinica arrows on top, between boxes */}
            {[48, 96, 144, 192, 240].map((y, i) => (
              <line key={i} x1="119" y1={y + 15} x2="119" y2={y + 29} stroke={color} strokeWidth="1.5" markerEnd="url(#arr7d)" />
            ))}

            {/* ACMG classification */}
            <text x="245" y="22" fill={color} fontSize="10" fontWeight="700">Classificacao ACMG/AMP — 5 Niveis</text>
            {[
              { label: 'Pathogenic', c: '#f97316', w: 234 },
              { label: 'Likely Pathogenic', c: '#fb923c', w: 182 },
              { label: 'VUS', c: '#f59e0b', w: 130 },
              { label: 'Likely Benign', c: '#fbbf24', w: 78 },
              { label: 'Benign', c: '#fde68a', w: 40 },
            ].map((a, i) => (
              <g key={i}>
                <rect x="245" y={35 + i * 44} width={a.w} height="26" fill={`${a.c}25`} stroke={`${a.c}60`} rx="4" />
                <text x="255" y={52 + i * 44} fill={a.c} fontSize="9" fontWeight="600">{a.label}</text>
              </g>
            ))}

            {/* Cost timeline */}
            <text x="530" y="22" fill={color} fontSize="10" fontWeight="700">Custo WGS e Adocao NHS</text>
            <line x1="535" y1="200" x2="760" y2="200" stroke="var(--card-border)" strokeWidth="1.5" />
            <line x1="535" y1="200" x2="535" y2="35" stroke="var(--card-border)" strokeWidth="1.5" />
            <text x="647" y="220" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Ano</text>
            <text x="520" y="120" fill="#94a3b8" fontSize="8.5" textAnchor="middle" transform="rotate(-90,520,120)">Custo USD</text>
            {[
              [535,38],[565,55],[595,80],[625,130],[655,170],[685,188],[715,195],[745,198]
            ].map(([x,y],i,arr) => i < arr.length - 1 &&
              <line key={i} x1={x} y1={y} x2={arr[i+1][0]} y2={arr[i+1][1]} stroke={color} strokeWidth="2" />
            )}
            {[['2003','100M'],['2007','1M'],['2012','10k'],['2015','1k'],['2020','500'],['2024','200']].map(([yr,cost],i) => (
              <g key={i}>
                <text x={535 + i * 45} y="212" fill="#94a3b8" fontSize="7.5" textAnchor="middle">{yr}</text>
                <text x={535 + i * 45} y="226" fill={color} fontSize="7" textAnchor="middle">{cost}</text>
              </g>
            ))}

            {/* NHS adoption */}
            <rect x="535" y="240" width="220" height="52" fill={`${color}12`} stroke={`${color}30`} rx="6" />
            <text x="645" y="258" fill={color} fontSize="9" textAnchor="middle" fontWeight="700">NHS Genomics Medicine Service</text>
            <text x="645" y="272" fill="#94a3b8" fontSize="8" textAnchor="middle">Mais de 85k genomas sequenciados</text>
            <text x="645" y="283" fill="#94a3b8" fontSize="8" textAnchor="middle">Dados integrados em Epic com alertas clinicos</text>

            <defs>
              <marker id="arr7d" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill={color} />
              </marker>
            </defs>
          </svg>
        </div>
        <p style={S.p}>O diagnostico genomico esta a transformar a medicina clinica — de doencas raras a oncologia a doencas comuns poligenicas. Para doencas raras (300M doentes globalmente, 7000 doencas geneticas conhecidas), o WGS resolve 35-40% dos casos non-diagnostic apos anos de odyssey diagnostica. O NHS Genomics Medicine Service (Reino Unido) e o primeiro servico nacional de WGS clinico — mais de 85k genomas, dados integrados em Epic com alertas clinicos.</p>
        <p style={S.p}>A classificacao de variantes ACMG/AMP usa 5 niveis (Pathogenic, Likely Pathogenic, VUS, Likely Benign, Benign) com criterios estandardizados. O rastreio neonatal por sequenciamento identifica doencas tratáveis antes do inicio de sintomas. A farmacogenomica preemptiva — painel de 20+ variantes ADME no registo do doente, consultado automaticamente antes de prescrever — esta a ser implementada em sistemas de saude.</p>
        <div style={S.highlight}>A patologia digital com IA e CNN em imagens histologicas prediz subtipos de cancro, grau tumoral e mutacoes a partir de H&amp;E (estudos TCGA com AUC 0.82-0.95). Os foundation models multimodais integram genomica, imagiologia, notas clinicas e proteomica para predicao de risco, diagnostico e resposta a terapia.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Medicina de Precisao e Oncologia Computacional</strong> — medicina de precisão usa perfil molecular do doente (genoma, transcriptoma, proteoma) para personalizar tratamento; em oncologia, mutational signatures (COSMIC) e tumor mutational burden (TMB) guiam selecção de imunoterapia.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Farmacogenomica — CYP450 e Star Alleles</strong> — variantes em genes CYP2D6, CYP2C19 e CYP2C9 afectam metabolismo de &gt;25% dos fármacos; PharmVar cataloga star alleles; CPIC guidelines traduzem genótipo em recomendações de dose — piloto de implementação clínica em vários hospitais.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Predicao de Resposta a Farmacos com ML</strong> — GDSC e CCLE medem IC50 de milhares de fármacos em centenas de linhas celulares; modelos como CDRUG e DeepCDR combinam perfil genómico do tumor com estrutura do fármaco para prever resposta — base de drug repurposing em oncologia.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>CRISPR e IA — Design e Screens Genomicos</strong> — IA optimiza design de sgRNAs para maximizar eficiência de corte e minimizar off-targets; genome-wide CRISPR screens com MAGeCK identificam genes essenciais para fenótipos de interesse — acelerou enormemente a descoberta de alvos terapêuticos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Diagnostico Genomico e Medicina do Futuro</strong> — sequenciamento WGS de recém-nascidos em cuidados intensivos (Illumina DRAGEN) permite diagnóstico genético em &lt;24h; liquid biopsy (ctDNA) detecta cancro recorrente anos antes de imagem — a genómica clínica de rotina está a emergir.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
