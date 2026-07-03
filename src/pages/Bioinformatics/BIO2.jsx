import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Bioinformatics';

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

const m = modules[1];

function SeqTechSVG() {
  return (
    <svg viewBox="0 0 700 240" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="240" fill="var(--bg-secondary)" rx="10" />
      {/* Comparison table */}
      {['Tecnologia', 'Read Length', 'Precisão', 'Throughput'].map((h, i) => (
        <text key={i} x={20 + i * 165} y="28" fill="#94a3b8" fontSize="10" fontWeight="700">{h}</text>
      ))}
      <line x1="10" y1="34" x2="690" y2="34" stroke="var(--card-border)" strokeWidth="1" />
      {[
        { name: 'Illumina NovaSeq', len: '150 bp', acc: '99.9%', thr: '6 TB/run', col: color },
        { name: 'PacBio HiFi', len: '15 kb', acc: '99.9%', thr: '90 Gb/run', col: '#f97316' },
        { name: 'Oxford Nanopore', len: '100kb+', acc: '99%+', thr: '100 Gb/run', col: '#f97316' },
      ].map((r, i) => (
        <g key={i}>
          <rect x="10" y={42 + i * 48} width="680" height="42" rx="4" fill={i % 2 === 0 ? 'transparent' : 'rgba(249,115,22,0.06)'} />
          <rect x="10" y={42 + i * 48} width="4" height="42" fill={r.col} rx="2" />
          <text x="22" y={68 + i * 48} fill="#f8fafc" fontSize="11" fontWeight="600">{r.name}</text>
          <text x="185" y={68 + i * 48} fill="#94a3b8" fontSize="11">{r.len}</text>
          <text x="350" y={68 + i * 48} fill={r.col} fontSize="11" fontWeight="600">{r.acc}</text>
          <text x="515" y={68 + i * 48} fill="#94a3b8" fontSize="11">{r.thr}</text>
        </g>
      ))}
      <text x="350" y="195" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="700">Custo de sequenciar 1 genoma humano</text>
      {[['2003 (HGP)', 3000000000, '#f97316'], ['2008', 1000000, '#f97316'], ['2015', 1000, color], ['2024', 200, '#f97316']].map(([yr, cost, c], i) => (
        <g key={i}>
          <text x={30 + i * 165} y="215" fill="#94a3b8" fontSize="9">{yr}</text>
          <text x={30 + i * 165} y="230" fill={c} fontSize="10" fontWeight="700">${cost >= 1000000 ? (cost / 1000000) + 'M' : cost}</text>
        </g>
      ))}
    </svg>
  );
}

function VariantCallingSVG() {
  return (
    <svg viewBox="0 0 700 220" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="220" fill="var(--bg-secondary)" rx="10" />
      {['FASTQ', 'BWA-MEM2', 'BAM', 'GATK HC', 'GVCF', 'VCF'].map((s, i) => (
        <g key={i}>
          <rect x={18 + i * 112} y="20" width="96" height="40" rx="6" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="1.2" strokeOpacity="0.7" />
          <text x={66 + i * 112} y="45" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">{s}</text>
          {i < 5 && <><line x1={115+i*112} y1="40" x2={121+i*112} y2="40" stroke={color} strokeWidth="1.5"/><polygon points={`${129+i*112},40 ${120+i*112},35 ${120+i*112},45`} fill={color}/></>}
        </g>
      ))}
      {/* Variant types */}
      {[
        { type: 'SNV', ex: 'A → T', desc: 'substituição 1 base', col: '#f97316' },
        { type: 'Inserção', ex: 'AC → ACT', desc: 'bases adicionadas', col: '#f97316' },
        { type: 'Deleção', ex: 'ACG → AG', desc: 'bases removidas', col: '#f97316' },
        { type: 'SV', ex: 'inv/dup/del', desc: 'mais de 50bp', col: '#f97316' },
      ].map((v, i) => (
        <g key={i}>
          <rect x={18 + i * 168} y="90" width="152" height="70" rx="6" fill="rgba(249,115,22,0.06)" stroke={v.col} strokeWidth="1.2" />
          <text x={94 + i * 168} y="112" textAnchor="middle" fill={v.col} fontSize="12" fontWeight="700">{v.type}</text>
          <text x={94 + i * 168} y="130" textAnchor="middle" fill="#f8fafc" fontSize="10" fontFamily="monospace">{v.ex}</text>
          <text x={94 + i * 168} y="148" textAnchor="middle" fill="#94a3b8" fontSize="9">{v.desc}</text>
        </g>
      ))}
      <text x="350" y="200" textAnchor="middle" fill="#94a3b8" fontSize="10">DeepVariant (Google): CNN em imagens de pileups — supera GATK em benchmarks de Precision/Recall</text>
      <text x="350" y="215" textAnchor="middle" fill="#64748b" fontSize="9">Ti/Tv ratio esperado 2.0-3.0 — desvios indicam erros técnicos no pipeline</text>
    </svg>
  );
}

function GWASSvg() {
  return (
    <svg viewBox="0 0 700 220" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="220" fill="var(--bg-secondary)" rx="10" />
      {/* Manhattan plot */}
      <text x="200" y="20" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="700">Manhattan Plot (GWAS)</text>
      <line x1="30" y1="160" x2="380" y2="160" stroke="var(--card-border)" strokeWidth="1" />
      <line x1="30" y1="160" x2="30" y2="20" stroke="var(--card-border)" strokeWidth="1" />
      <text x="20" y="24" fill="#64748b" fontSize="8" textAnchor="middle">8</text>
      <text x="20" y="80" fill="#64748b" fontSize="8" textAnchor="middle">5</text>
      <text x="14" y="90" fill="#64748b" fontSize="7">-log10(p)</text>
      {/* Significance line */}
      <line x1="30" y1="76" x2="380" y2="76" stroke="#f97316" strokeWidth="1" strokeDasharray="3 2" />
      <text x="384" y="79" fill="#f97316" fontSize="8">5e-8</text>
      {/* Points - simulate chromosomes */}
      {Array.from({ length: 60 }, (_, i) => {
        const x = 35 + i * 5.7;
        const isHit = [8, 22, 35, 48].includes(i);
        const y = isHit ? 30 + Math.random() * 20 : 110 + Math.random() * 45;
        const chr = Math.floor(i / 3);
        const c = chr % 2 === 0 ? color : '#f97316';
        return <circle key={i} cx={x} cy={y} r={isHit ? 4 : 2} fill={isHit ? '#f97316' : c} opacity="0.8" />;
      })}
      {/* PRS diagram */}
      <text x="520" y="20" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="700">Polygenic Risk Score</text>
      <rect x="420" y="30" width="240" height="120" rx="8" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="1" />
      <text x="540" y="55" textAnchor="middle" fill="#94a3b8" fontSize="10">PRS = sum(Beta_i x Allele_i)</text>
      <text x="540" y="80" textAnchor="middle" fill="#f8fafc" fontSize="10">SNPs: 500k - 10M</text>
      <text x="540" y="100" textAnchor="middle" fill="#f8fafc" fontSize="10">UK Biobank: 500k participantes</text>
      <text x="540" y="120" textAnchor="middle" fill="#94a3b8" fontSize="9">prediz risco poligénico individual</text>
      <text x="350" y="195" textAnchor="middle" fill="#64748b" fontSize="10">Threshold genome-wide: p menor que 5×10⁻⁸ — correcção para múltiplos testes</text>
    </svg>
  );
}

function PopGenSVG() {
  return (
    <svg viewBox="0 0 700 210" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="210" fill="var(--bg-secondary)" rx="10" />
      {/* PCA plot */}
      <text x="160" y="20" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="700">PCA de Genomas (1000 Genomes)</text>
      <line x1="30" y1="160" x2="300" y2="160" stroke="rgba(249,115,22,0.3)" strokeWidth="1" />
      <line x1="165" y1="30" x2="165" y2="170" stroke="rgba(249,115,22,0.3)" strokeWidth="1" />
      <text x="165" y="185" textAnchor="middle" fill="#64748b" fontSize="9">PC1 (ancestralidade)</text>
      {/* Population clusters */}
      {[{ col: '#c2410c', cx: 100, cy: 80, label: 'Europeia' }, { col: '#fbbf24', cx: 240, cy: 90, label: 'Africana' }, { col: '#fb923c', cx: 165, cy: 50, label: 'Asiática' }].map((p, i) => (
        <g key={i}>
          {Array.from({ length: 12 }, (_, j) => (
            <circle key={j} cx={p.cx + (Math.random() - 0.5) * 30} cy={p.cy + (Math.random() - 0.5) * 25} r="4" fill={p.col} opacity="0.6" />
          ))}
          <text x={p.cx} y={p.cy + 40} textAnchor="middle" fill={p.col} fontSize="9" fontWeight="600">{p.label}</text>
        </g>
      ))}
      {/* ADMIXTURE */}
      <text x="500" y="20" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="700">ADMIXTURE (K=3)</text>
      {[
        [0.85,0.10,0.05],[0.80,0.12,0.08],[0.78,0.15,0.07],[0.05,0.90,0.05],
        [0.06,0.88,0.06],[0.04,0.92,0.04],[0.07,0.08,0.85],[0.06,0.09,0.85],
        [0.05,0.07,0.88],[0.40,0.40,0.20],[0.35,0.15,0.50],[0.20,0.55,0.25],
      ].map(([eur,afr,asi], i) => {
        const x = 380 + i * 27;
        const totalH = 130;
        const hEur = eur * totalH;
        const hAfr = afr * totalH;
        const hAsi = asi * totalH;
        return (
          <g key={i}>
            <rect x={x} y={30} width="22" height={hEur} rx="1" fill="#c2410c"/>
            <rect x={x} y={30 + hEur} width="22" height={hAfr} rx="1" fill="#fbbf24"/>
            <rect x={x} y={30 + hEur + hAfr} width="22" height={hAsi} rx="1" fill="#fb923c"/>
          </g>
        );
      })}
      {/* Legend */}
      <rect x="380" y="172" width="10" height="8" fill="#c2410c" rx="1"/>
      <text x="394" y="180" fill="#94a3b8" fontSize="8">Europeia</text>
      <rect x="440" y="172" width="10" height="8" fill="#fbbf24" rx="1"/>
      <text x="454" y="180" fill="#94a3b8" fontSize="8">Africana</text>
      <rect x="505" y="172" width="10" height="8" fill="#fb923c" rx="1"/>
      <text x="519" y="180" fill="#94a3b8" fontSize="8">Asiática</text>
      <text x="350" y="198" textAnchor="middle" fill="#64748b" fontSize="10">gnomAD: 730k exomas + genomas — referência para frequências alélicas globais</text>
    </svg>
  );
}

function MetagenomicsSVG() {
  return (
    <svg viewBox="0 0 700 210" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="210" fill="var(--bg-secondary)" rx="10" />
      {/* Pipeline */}
      {['Amostra\nambiental', 'Extracção\nDNA', 'Sequenciamento\n(shotgun/16S)', 'Kraken2\nclassificação', 'Perfil\ntaxonómico'].map((s, i) => (
        <g key={i}>
          <rect x={18 + i * 134} y="20" width="118" height="50" rx="6" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="1.2" strokeOpacity={0.5 + i * 0.1} />
          {s.split('\n').map((line, li) => (
            <text key={li} x={77 + i * 134} y={43 + li * 14} textAnchor="middle" fill={li === 0 ? color : '#94a3b8'} fontSize="9" fontWeight={li === 0 ? '700' : '400'}>{line}</text>
          ))}
          {i < 4 && <><line x1={139+i*134} y1="45" x2={145+i*134} y2="45" stroke={color} strokeWidth="1.5"/><polygon points={`${153+i*134},45 ${144+i*134},40 ${144+i*134},50`} fill={color}/></>}
        </g>
      ))}
      {/* Taxonomic bars */}
      {[['Firmicutes', 0.45, color], ['Bacteroidetes', 0.30, '#f97316'], ['Proteobacteria', 0.15, '#f97316'], ['Actinobacteria', 0.10, '#f97316']].map(([phylum, frac, c], i) => (
        <g key={i}>
          <text x="30" y={115 + i * 22} fill="#94a3b8" fontSize="10">{phylum}</text>
          <rect x="160" y={102 + i * 22} width={frac * 300} height="14" rx="3" fill={c} opacity="0.8" />
          <text x={168 + frac * 300} y={114 + i * 22} fill={c} fontSize="9">{Math.round(frac * 100)}%</text>
        </g>
      ))}
      <text x="350" y="198" textAnchor="middle" fill="#64748b" fontSize="10">Human Microbiome Project: 18 locais corporais, 300 indivíduos — o microbioma tem 150x mais genes que o genoma humano</text>
    </svg>
  );
}

export default function BIO2() {
  return (
    <div style={S.page}>
      <Link to="/bioinformatics" style={S.back}>← Bioinformatics</Link>
      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Tecnologias de Sequenciamento NGS</h2>
        <p style={S.p}>O sequenciamento de nova geração (NGS) revolucionou a biologia — o custo de sequenciar um genoma humano caiu de 3 mil milhões de dólares em 2003 (Human Genome Project) para 200 dólares em 2024. A Illumina domina o mercado com sequenciamento por síntese usando terminadores reversíveis fluorescentes — reads curtos de 150bp com precisão Q30+ e throughput massivo (6TB por run no NovaSeq 6000).</p>
        <p style={S.p}>O PacBio HiFi (CCS) produz reads longos com precisão superior a 99.9% usando consenso circular — ideal para regiões repetitivas e variantes estruturais. O Oxford Nanopore MinION é um sequenciador portátil com reads ultra-longos que sequencia directamente RNA e detecta modificações epigenéticas (metilação) em tempo real sem amplificação, eliminando viés de PCR.</p>
        <div style={S.diagram}><SeqTechSVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Alinhamento e Chamada de Variantes</h2>
        <p style={S.p}>A chamada de variantes (variant calling) identifica diferenças entre o genoma de um indivíduo e o genoma de referência (GRCh38). O BWA-MEM2 é o alinhador padrão para reads Illumina — baseado em BWT (Burrows-Wheeler Transform), alinha 10M reads por minuto. O GATK HaplotypeCaller é o padrão de ouro para SNVs e indels em DNA germinal, usando um modelo de grafos de haplótipos.</p>
        <p style={S.p}>O DeepVariant (Google) aplica CNN a imagens de pileups de reads e supera o GATK em benchmarks de Precision/Recall. As variantes estruturais (SV) com mais de 50bp — inversões, duplicações, translocações, CNVs — requerem ferramentas específicas como Delly ou LUMPY. O rácio Ti/Tv esperado de 2.0-3.0 serve como métrica de qualidade do pipeline.</p>
        <div style={S.diagram}><VariantCallingSVG /></div>
        <div style={S.highlight}>A filtragem VQSR usa um ensemble de variantes de alta confiança como treino para classificar novas variantes — reduz drasticamente a taxa de falsos positivos mantendo sensibilidade.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. GWAS — Genome-Wide Association Studies</h2>
        <p style={S.p}>Os GWAS identificam variantes genéticas associadas a doenças ou traços complexos. O design genotypia 500k-10M SNPs em casos e controlos, aplica regressão logística/linear para cada SNP, e corrige para múltiplos testes com o limiar genome-wide de p menor que 5×10⁻⁸. O LD (Linkage Disequilibrium) entre SNPs próximos exige fine-mapping para identificar o SNP causal.</p>
        <p style={S.p}>O Polygenic Risk Score (PRS) é a soma ponderada de alelos de risco para estimar predisposição genética individual. O UK Biobank com 500k participantes genotipados e registos de saúde é o maior recurso de GWAS disponível. O GWAS Catalog (EBI/NHGRI) contém mais de 700k associações publicadas para 70k+ traits. A maioria das associações mapeiam para intrões e regiões regulatórias não-codificantes.</p>
        <div style={S.diagram}><GWASSvg /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Genómica de Populações e Ancestralidade</h2>
        <p style={S.p}>A genómica de populações estuda a variação genética dentro e entre populações. O projecto 1000 Genomes caracterizou 2504 indivíduos de 26 populações — o catálogo base de variação humana global. O gnomAD contém 730k exomas e genomas como referência para frequências alélicas e filtragem de variantes raras patogénicas.</p>
        <p style={S.p}>PCA em genomas revela estrutura geográfica de ancestralidade nos primeiros componentes principais. O ADMIXTURE estima fracções de ancestralidade de K populações ancestrais. O FST mede diferenciação genética entre populações. A selecção positiva deixa varrimentos selectivos detectáveis por iHS e XP-EHH — exemplos incluem a persistência da lactase na Europa e resistência à malária em África.</p>
        <div style={S.diagram}><PopGenSVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Metagenómica e Microbioma</h2>
        <p style={S.p}>A metagenómica estuda material genético recuperado directamente de amostras ambientais sem necessidade de cultivar os microrganismos. O sequenciamento do amplicon 16S rRNA (região V3-V4) identifica bactérias ao nível de género/espécie mas está limitado a procariontes. A shotgun metagenomics sequencia todo o DNA da amostra — vírus, fungos, arquéia e bactérias — permitindo inferência funcional.</p>
        <p style={S.p}>O Human Microbiome Project caracterizou o microbioma de 18 locais corporais de 300 indivíduos saudáveis. O microbioma intestinal contém 10¹³ bactérias e 150x mais genes que o genoma humano — associado a obesidade, doenças inflamatórias intestinais e saúde mental. O Kraken2/Bracken faz classificação taxonómica ultra-rápida baseada em k-mers. A diversidade alfa (Shannon, Faith's PD) e beta (Bray-Curtis, UniFrac) são métricas ecológicas centrais.</p>
        <div style={S.diagram}><MetagenomicsSVG /></div>
        <div style={S.note}>Metagenómica de resistência antimicrobiana (AMR): identificar genes de resistência directamente em amostras clínicas ou ambientais sem isolar o organismo — crítico para vigilância de resistências.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Tecnologias de Sequenciamento NGS</strong> — Illumina (short-read, 150bp, alta precisão) domina para WGS e RNA-seq; PacBio e Oxford Nanopore (long-read, 10–100kb) resolvem regiões repetitivas e variantes estruturais — cada tecnologia tem trade-offs de custo, comprimento e erro.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Alinhamento e Chamada de Variantes</strong> — BWA-MEM2 e STAR alinham reads ao genoma de referência; GATK HaplotypeCaller chama SNPs e indels; o pipeline GATK Best Practices é o gold standard em genómica clínica para identificar variantes causadoras de doença.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>GWAS — Genome-Wide Association Studies</strong> — GWAS testa associação estatística entre milhões de SNPs e um fenótipo (doença, traço); identifica loci genéticos de risco com correção de Bonferroni (p&lt;5×10⁻⁸); revolucionou a compreensão da arquitectura genética de doenças complexas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Genómica de Populações e Ancestralidade</strong> — análise de estrutura populacional com PCA e ADMIXTURE infere ancestry de indivíduos; FST mede diferenciação entre populações; critical para corrigir confounding em GWAS e para medicina de precisão em populações diversas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Metagenómica e Microbioma</strong> — metagenómica sequencia DNA de comunidades microbianas directamente de amostras ambientais ou clínicas; Kraken2 e MetaPhlAn3 classificam espécies; o microbioma intestinal correlaciona-se com doenças metabólicas, imunológicas e neurológicas.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
