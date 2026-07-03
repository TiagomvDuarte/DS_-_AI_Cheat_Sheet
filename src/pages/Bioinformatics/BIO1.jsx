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

const m = modules[0];

function DogmaSVG() {
  return (
    <svg viewBox="0 0 700 215" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="215" fill="var(--bg-secondary)" rx="10" />
      {/* DNA */}
      <rect x="30" y="20" width="130" height="80" rx="8" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="1.5" />
      <text x="95" y="52" textAnchor="middle" fill={color} fontSize="13" fontWeight="800">DNA</text>
      <text x="95" y="70" textAnchor="middle" fill="#94a3b8" fontSize="10">dupla hélice</text>
      <text x="95" y="84" textAnchor="middle" fill="#64748b" fontSize="9">A-T / G-C</text>
      {/* Arrow 1 */}
      <line x1="162" y1="60" x2="205" y2="60" stroke={color} strokeWidth="2" />
      <polygon points="205,54 218,60 205,66" fill={color} />
      <text x="190" y="50" textAnchor="middle" fill="#94a3b8" fontSize="9">Transcrição</text>
      {/* mRNA */}
      <rect x="220" y="20" width="140" height="80" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
      <text x="290" y="52" textAnchor="middle" fill="#f97316" fontSize="13" fontWeight="800">mRNA</text>
      <text x="290" y="70" textAnchor="middle" fill="#94a3b8" fontSize="10">cadeia simples</text>
      <text x="290" y="84" textAnchor="middle" fill="#64748b" fontSize="9">A-U / G-C</text>
      {/* Arrow 2 */}
      <line x1="362" y1="60" x2="405" y2="60" stroke={color} strokeWidth="2" />
      <polygon points="405,54 418,60 405,66" fill={color} />
      <text x="390" y="50" textAnchor="middle" fill="#94a3b8" fontSize="9">Tradução</text>
      {/* Protein */}
      <rect x="420" y="20" width="130" height="80" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
      <text x="485" y="52" textAnchor="middle" fill="#f97316" fontSize="13" fontWeight="800">Proteína</text>
      <text x="485" y="70" textAnchor="middle" fill="#94a3b8" fontSize="10">cadeia de aa</text>
      <text x="485" y="84" textAnchor="middle" fill="#64748b" fontSize="9">20 aminoácidos</text>
      {/* Genome sizes - bar chart below flow */}
      <line x1="30" y1="112" x2="670" y2="112" stroke="rgba(249,115,22,0.2)" strokeWidth="1"/>
      <text x="350" y="127" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">TAMANHO DO GENOMA (escala proporcional)</text>
      {[['E. coli', '4.6 Mb', 42], ['Levedura', '12 Mb', 84], ['Humano', '3.2 Gb', 280]].map(([org, size, w], i) => (
        <g key={i}>
          <text x="100" y={146 + i * 16} textAnchor="end" fill="#94a3b8" fontSize="8">{org}</text>
          <rect x="105" y={136 + i * 16} width={w} height="10" rx="2" fill={color} opacity={0.5 + i * 0.2}/>
          <text x={110 + w + 4} y={146 + i * 16} fill="#f97316" fontSize="8" fontWeight="600">{size}</text>
        </g>
      ))}
      <text x="350" y="205" textAnchor="middle" fill="#64748b" fontSize="9">Dogma Central (Francis Crick, 1958) — só 1.5% do genoma humano é codificante</text>
    </svg>
  );
}

function DatabasesSVG() {
  const dbs = [
    { name: 'GenBank', parent: 'NCBI', desc: '250B+ bases', col: color },
    { name: 'RefSeq', parent: 'NCBI', desc: 'curado', col: color },
    { name: 'Swiss-Prot', parent: 'UniProt', desc: '570k proteínas', col: '#f97316' },
    { name: 'TrEMBL', parent: 'UniProt', desc: '250M+ auto', col: '#f97316' },
    { name: 'PDB', parent: 'Estruturas', desc: '220k+ 3D', col: '#f97316' },
    { name: 'Ensembl', parent: 'Genomas', desc: 'anotação multi-espécie', col: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 700 220" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="220" fill="var(--bg-secondary)" rx="10" />
      {dbs.map((db, i) => {
        const x = 30 + (i % 3) * 225;
        const y = 30 + Math.floor(i / 3) * 100;
        return (
          <g key={i}>
            <rect x={x} y={y} width="200" height="70" rx="8" fill="rgba(249,115,22,0.06)" stroke={db.col} strokeWidth="1.5" />
            <text x={x + 100} y={y + 24} textAnchor="middle" fill={db.col} fontSize="13" fontWeight="700">{db.name}</text>
            <text x={x + 100} y={y + 40} textAnchor="middle" fill="#94a3b8" fontSize="10">{db.parent}</text>
            <text x={x + 100} y={y + 56} textAnchor="middle" fill="#64748b" fontSize="10">{db.desc}</text>
          </g>
        );
      })}
      <text x="350" y="215" textAnchor="middle" fill="#64748b" fontSize="10">Bases de dados biológicas duplicam a cada 18 meses — acesso gratuito e aberto</text>
    </svg>
  );
}

function BlastSVG() {
  return (
    <svg viewBox="0 0 700 250" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="250" fill="var(--bg-secondary)" rx="10" />

      {/* === Section 1: Global vs Local alignment === */}
      <text x="350" y="22" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">ALINHAMENTO DE SEQUÊNCIAS</text>

      {/* Global box */}
      <rect x="20" y="32" width="300" height="80" rx="6" fill="rgba(249,115,22,0.05)" stroke={color} strokeWidth="1"/>
      <text x="170" y="50" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Global — Needleman-Wunsch</text>
      <text x="35" y="70" fill={color} fontSize="13" fontFamily="monospace">ACGT-TGCA</text>
      <text x="35" y="88" fill="#f59e0b" fontSize="13" fontFamily="monospace">ACG-CTGCA</text>
      <text x="170" y="106" textAnchor="middle" fill="#64748b" fontSize="9">do início ao fim — gaps penalizados</text>

      {/* Local box */}
      <rect x="380" y="32" width="300" height="80" rx="6" fill="rgba(249,115,22,0.05)" stroke="#f59e0b" strokeWidth="1"/>
      <text x="530" y="50" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">Local — Smith-Waterman</text>
      <text x="395" y="70" fill={color} fontSize="13" fontFamily="monospace">ACGTTTGCAAA</text>
      <text x="395" y="88" fill="#f59e0b" fontSize="13" fontFamily="monospace">---GTTGCA--</text>
      <rect x="390" y="57" width="100" height="35" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3,2" rx="2"/>
      <text x="530" y="106" textAnchor="middle" fill="#64748b" fontSize="9">melhor sub-região — mais sensível</text>

      {/* Separator */}
      <line x1="20" y1="125" x2="680" y2="125" stroke="rgba(249,115,22,0.25)" strokeWidth="1" strokeDasharray="4,3"/>

      {/* === Section 2: BLAST pipeline === */}
      <text x="350" y="142" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">PIPELINE BLAST</text>
      {[
        {l1:'Query',       l2:null},
        {l1:'Seeds',       l2:'11-mer'},
        {l1:'Extend',      l2:null},
        {l1:'Score',       l2:'BLOSUM62'},
        {l1:'E-value',     l2:'filter'},
        {l1:'Hits',        l2:null},
      ].map((s, i) => (
        <g key={i}>
          <rect x={15 + i * 112} y="152" width="100" height="40" rx="5" fill={i===5 ? 'rgba(249,115,22,0.20)' : 'rgba(249,115,22,0.06)'} stroke={color} strokeWidth={i===5 ? 2 : 1.5}/>
          {s.l2
            ? <>
                <text x={65 + i * 112} y="169" textAnchor="middle" fill="#f8fafc" fontSize="9" fontWeight="600">{s.l1}</text>
                <text x={65 + i * 112} y="182" textAnchor="middle" fill="#f8fafc" fontSize="9" fontWeight="600">{s.l2}</text>
              </>
            : <text x={65 + i * 112} y="176" textAnchor="middle" fill="#f8fafc" fontSize="9" fontWeight="600">{s.l1}</text>
          }
          {i < 5 && <>
            <line x1={116 + i * 112} y1="172" x2={123 + i * 112} y2="172" stroke={color} strokeWidth="2"/>
            <polygon points={`${128+i*112},172 ${120+i*112},167 ${120+i*112},177`} fill={color}/>
          </>}
        </g>
      ))}
      <text x="350" y="215" textAnchor="middle" fill="#64748b" fontSize="9">BLAST: 1000× mais rápido que Smith-Waterman · E-value {'<'} 0.001 é significativo · seeds exactos de 11-mers</text>
    </svg>
  );
}

function PhyloSVG() {
  return (
    <svg viewBox="0 0 700 220" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="220" fill="var(--bg-secondary)" rx="10" />
      {/* Tree */}
      <line x1="100" y1="110" x2="200" y2="110" stroke={color} strokeWidth="2" />
      <line x1="200" y1="110" x2="200" y2="60" stroke={color} strokeWidth="2" />
      <line x1="200" y1="110" x2="200" y2="160" stroke={color} strokeWidth="2" />
      <line x1="200" y1="60" x2="300" y2="60" stroke={color} strokeWidth="2" />
      <line x1="200" y1="160" x2="300" y2="160" stroke={color} strokeWidth="2" />
      <line x1="300" y1="60" x2="300" y2="40" stroke={color} strokeWidth="2" />
      <line x1="300" y1="60" x2="300" y2="80" stroke={color} strokeWidth="2" />
      <line x1="300" y1="160" x2="300" y2="140" stroke={color} strokeWidth="2" />
      <line x1="300" y1="160" x2="300" y2="180" stroke={color} strokeWidth="2" />
      {[['Alpha', 40], ['Beta', 80], ['Delta', 140], ['Omicron', 180]].map(([v, y]) => (
        <g key={v}>
          <circle cx="300" cy={y} r="4" fill={color} />
          <text x="312" y={y + 4} fill="#94a3b8" fontSize="10">{v}</text>
        </g>
      ))}
      <text x="50" y="114" fill="#64748b" fontSize="10">Ancestral</text>
      <text x="135" y="106" fill="#64748b" fontSize="9">bootstrap 95%</text>
      {/* Methods table */}
      {[['Método', 'Velocidade', 'Precisão'], ['Neighbour-Joining', '+++', '+'], ['Máx. Verosimilhança', '+', '+++'], ['Bayesiano (BEAST)', '+', '+++']].map((row, i) => (
        <g key={i}>
          <rect x="380" y={40 + i * 42} width="290" height="38" rx="4" fill={i === 0 ? 'rgba(249,115,22,0.08)' : 'transparent'} stroke="var(--card-border)" strokeWidth="0.5" />
          {row.map((cell, j) => (
            <text key={j} x={400 + j * 95} y={64 + i * 42} fill={i === 0 ? '#94a3b8' : '#f8fafc'} fontSize="10" fontWeight={i === 0 ? '700' : '400'}>{cell}</text>
          ))}
        </g>
      ))}
      <text x="350" y="210" textAnchor="middle" fill="#64748b" fontSize="10">BEAST — inferência Bayesiana com relógio molecular para datação de divergências</text>
    </svg>
  );
}

function FormatsSVG() {
  return (
    <svg viewBox="0 0 700 200" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="200" fill="var(--bg-secondary)" rx="10" />
      {[
        { fmt: 'FASTA', desc: '>seq1 cabeçalho\nACGTACGTACGT...', col: color },
        { fmt: 'FASTQ', desc: '@read1\nACGT...\n+ IIII... (Phred Q30)', col: '#f97316' },
        { fmt: 'BAM/SAM', desc: 'reads alinhados\nCIGAR: 75M2I23M', col: '#f97316' },
        { fmt: 'VCF', desc: 'chr1 925952 . G A\nQUAL FILTER INFO', col: '#f97316' },
        { fmt: 'GFF/GTF', desc: 'anotação génica\nexon/CDS/UTR', col: '#f97316' },
        { fmt: 'BED', desc: 'intervalos genómicos\nchr start end name', col: '#f97316' },
      ].map((f, i) => {
        const x = 18 + (i % 3) * 228;
        const y = 18 + Math.floor(i / 3) * 90;
        return (
          <g key={i}>
            <rect x={x} y={y} width="210" height="72" rx="7" fill="rgba(249,115,22,0.06)" stroke={f.col} strokeWidth="1.2" />
            <text x={x + 12} y={y + 22} fill={f.col} fontSize="12" fontWeight="700">{f.fmt}</text>
            {f.desc.split('\n').map((line, li) => (
              <text key={li} x={x + 12} y={y + 38 + li * 14} fill="#94a3b8" fontSize="9" fontFamily="monospace">{line}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

export default function BIO1() {
  return (
    <div style={S.page}>
      <Link to="/bioinformatics" style={S.back}>← Bioinformatics</Link>
      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. O Dogma Central e as Moléculas da Vida</h2>
        <p style={S.p}>O dogma central da biologia molecular (Francis Crick, 1958) descreve o fluxo de informação genética: DNA → RNA → Proteína. O DNA é uma dupla hélice com 4 bases (A-T, G-C por pontes de hidrogénio). A transcrição ocorre quando a RNA polimerase lê o molde de DNA 3'→5' e sintetiza mRNA 5'→3'. A tradução é realizada pelo ribossoma que lê codões de mRNA em grupos de 3, e o tRNA traz o aminoácido correcto.</p>
        <p style={S.p}>O código genético usa 64 codões (4³) para codificar 20 aminoácidos + 3 codões de paragem — é um código degenerado pois múltiplos codões codificam o mesmo aminoácido. O genoma humano tem 3.2 mil milhões de pares de bases e aproximadamente 20.000 genes codificantes, mas apenas 1.5% do genoma é codificante — 80% tem função regulatória segundo o projecto ENCODE.</p>
        <div style={S.diagram}><DogmaSVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Bases de Dados Biológicas — NCBI, UniProt, PDB</h2>
        <p style={S.p}>As bases de dados biológicas são a infraestrutura central da bioinformática. O NCBI (National Center for Biotechnology Information) alberga o GenBank — arquivo de todas as sequências de DNA publicamente disponíveis com mais de 250 mil milhões de bases, duplicando a cada 18 meses. O SRA (Sequence Read Archive) contém dados brutos de NGS com mais de 50 petabases de reads.</p>
        <p style={S.p}>UniProt é o repositório central de sequências e funções de proteínas. A Swiss-Prot é curada manualmente com 570k proteínas de alta qualidade; a TrEMBL tem anotação automática com 250M+ proteínas. O PDB (Protein Data Bank) contém 220k+ estruturas 3D experimentais por cristalografia de raios-X, cryo-EM e NMR — com crescimento exponencial após o AlphaFold. O Ensembl (EBI/Wellcome) fornece anotação de genomas de múltiplos organismos.</p>
        <div style={S.diagram}><DatabasesSVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Alinhamento de Sequências — BLAST e Algoritmos</h2>
        <p style={S.p}>O alinhamento de sequências é a operação fundamental da bioinformática — encontrar regiões de similaridade que implicam homologia evolutiva ou funcional. Needleman-Wunsch (1970) usa programação dinâmica para alinhamento global em tempo O(nm). Smith-Waterman (1981) encontra a sub-região de melhor alinhamento local — mais sensível para domínios conservados em proteínas divergentes.</p>
        <p style={S.p}>BLAST (Basic Local Alignment Search Tool, 1990) é uma heurística rápida baseada em seeds exactos de k-mers com posterior extensão e scoring — não garante o óptimo mas é 1000x mais rápido. O E-value indica a probabilidade de obter o alinhamento por acaso — abaixo de 0.001 é considerado significativo. As matrizes de substituição BLOSUM62 são o padrão para proteínas divergentes.</p>
        <div style={S.diagram}><BlastSVG /></div>
        <div style={S.highlight}>Multiple Sequence Alignment (MSA) com Clustal Omega ou MAFFT é a base para construção de árvores filogenéticas e perfis HMM para detecção de homólogos distantes.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Filogenética Computacional</h2>
        <p style={S.p}>A filogenética reconstrói as relações evolutivas entre organismos ou genes a partir de sequências moleculares. Os modelos de substituição variam do simples Jukes-Cantor ao GTR (General Time Reversible, 6 parâmetros) que é o mais realista para DNA. Para proteínas usam-se matrizes JTT ou WAG.</p>
        <p style={S.p}>A Máxima Verosimilhança (ML) encontra a árvore que maximiza a probabilidade de observar os dados dado o modelo — o IQ-TREE é o software padrão com bootstrapping para suporte estatístico. O BEAST usa inferência Bayesiana com MCMC para estimar datas de divergência com o relógio molecular. Durante a pandemia COVID-19, o Nextstrain rastreou a evolução do SARS-CoV-2 em tempo real com mais de 10M de sequências geradas mundialmente.</p>
        <div style={S.diagram}><PhyloSVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Formatos de Dados e Pipelines Bioinformáticos</h2>
        <p style={S.p}>A bioinformática trabalha com formatos padronizados para interoperabilidade. FASTA é o mais simples (cabeçalho + sequência). FASTQ adiciona scores de qualidade Phred — Q30 significa 1 erro em 1000 bases (99.9%). SAM/BAM contém reads alinhados ao genoma de referência com CIGAR string. VCF (Variant Call Format) descreve variantes identificadas.</p>
        <p style={S.p}>Nextflow e Snakemake são sistemas de gestão de pipelines que garantem reprodutibilidade e paralelismo automático. Um pipeline típico parte de FASTQ → QC (FastQC, Trimmomatic) → alinhamento (BWA, STAR) → chamada de variantes (GATK) → anotação (VEP). O Bioconductor (R) e Bioconda (Python) oferecem mais de 2000 pacotes especializados, e o Galaxy democratiza o acesso a ferramentas bioinformáticas sem linha de comandos.</p>
        <div style={S.diagram}><FormatsSVG /></div>
        <div style={S.note}>A reprodutibilidade é um pilar da bioinformática — contenção com Docker/Singularity e versionamento de workflows com Nextflow são práticas essenciais em investigação e diagnóstico clínico.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>O Dogma Central e as Moléculas da Vida</strong> — DNA → RNA → Proteína é o dogma central da biologia molecular; compreendê-lo é essencial para interpretar dados ómicos — sequenciamento de DNA, RNA-seq e proteómica medem diferentes camadas desta cadeia de informação.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Bases de Dados Biológicas — NCBI, UniProt, PDB</strong> — NCBI alberga GenBank (sequências de DNA) e PubMed; UniProt cataloga proteínas com função anotada; PDB contém estruturas 3D de proteínas — são a infra-estrutura de dados que suporta toda a bioinformática.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Alinhamento de Sequências — BLAST e Algoritmos</strong> — BLAST encontra sequências similares em bases de dados em segundos usando heurísticas de k-mers; Smith-Waterman é o alinhamento local exacto mas mais lento; Needleman-Wunsch faz alinhamento global — fundamentais para anotação e homologia.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Filogenética Computacional</strong> — constrói árvores evolutivas a partir de sequências; métodos como Neighbor-Joining, Maximum Likelihood (IQ-TREE) e Bayesian (MrBayes) inferem relações evolutivas — usados em epidemiologia (rastreio de variantes COVID) e biologia comparativa.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Formatos de Dados e Pipelines Bioinformáticos</strong> — FASTA, FASTQ (com qualidade), BAM/SAM (alinhamentos), VCF (variantes) e BED (coordenadas genómicas) são os formatos padrão; Snakemake e Nextflow orquestram pipelines reprodutíveis de análise bioinformática.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
