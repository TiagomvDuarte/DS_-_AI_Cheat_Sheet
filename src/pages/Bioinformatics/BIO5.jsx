import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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

const m = modules[4];

export default function BIO5() {
  return (
    <div style={S.page}>
      <Link to="/bioinformatics" style={S.back}><ArrowLeft size={16} /> Voltar a Bioinformatics</Link>

      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. scRNA-seq — Tecnologia e Pipeline</h2>

        <p style={S.p}>
          O scRNA-seq mede a expressão de todos os genes em células individuais — contrasta com bulk RNA-seq que mede a média de uma população heterogénea. A 10x Genomics Chromium é a plataforma dominante (mais de 80% do mercado) — encapsula células em gotas de óleo com beads contendo barcodes únicos. Os UMI (Unique Molecular Identifiers) são oligonucleotídeos de 10-12 bp aleatórios que marcam cada molécula de cDNA antes da amplificação, eliminando viés de PCR. O dropout — genes de baixa expressão não detectados numa célula mesmo estando presentes — é uma característica intrínseca, não erro técnico, que domina a análise.
        </p>

        <p style={S.p}>
          O Cell Ranger (10x) faz alinhamento com STAR e contagem, gerando uma matrix esparsa. Filtros de qualidade: remover células com menos de 200 genes (debris celular) ou mais de 5% de reads mitocondriais (células mortas). O SMART-seq2 é alternativa sem droplets — maior sensibilidade mas menor throughput, adequado para populações raras.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 360" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="780" height="360" rx="10" fill="var(--bg-secondary)" />

            {/* Pipeline steps - spaced to full width */}
            {[
              { label: 'Tecido', sub: 'dissociação' },
              { label: 'Droplet', sub: '10x Chromium' },
              { label: 'RT + UMI', sub: 'barcode 16nt' },
              { label: 'Amplificação', sub: 'library prep' },
              { label: 'Illumina', sub: 'sequencing' },
              { label: 'Cell Ranger', sub: 'STAR align' },
            ].map((s, i) => {
              const bw = 112, gap = 16, total = 6 * bw + 5 * gap;
              const startX = (780 - total) / 2;
              const x = startX + i * (bw + gap);
              return (
              <g key={i}>
                <rect x={x} y="16" width={bw} height="52" rx="7" fill={`${color}20`} stroke={color} strokeWidth="1.2" />
                <text x={x + bw/2} y="38" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">{s.label}</text>
                <text x={x + bw/2} y="55" textAnchor="middle" fill="#94a3b8" fontSize="9">{s.sub}</text>
                {i < 5 && <text x={x + bw + gap/2} y="46" textAnchor="middle" fill={color} fontSize="16">→</text>}
              </g>
              );
            })}

            {/* Droplet diagram */}
            <circle cx="130" cy="200" r="75" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1.5" />
            <circle cx="130" cy="200" r="58" fill={`${color}18`} stroke={color} strokeWidth="1.2" strokeDasharray="5,3" />
            <circle cx="116" cy="196" r="20" fill={`${color}50`} stroke={color} strokeWidth="1.2" />
            <text x="116" y="200" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">célula</text>
            <circle cx="148" cy="203" r="13" fill="#f9731620" stroke="#f97316" strokeWidth="1.2" />
            <text x="148" y="207" textAnchor="middle" fill="#f97316" fontSize="9">bead</text>
            <text x="130" y="288" textAnchor="middle" fill="#94a3b8" fontSize="11">GEM (gota de óleo)</text>
            <text x="130" y="303" textAnchor="middle" fill="#94a3b8" fontSize="10">barcode + UMI únicos</text>

            {/* Sparse matrix */}
            <rect x="250" y="100" width="230" height="200" rx="8" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="365" y="122" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="700">Matriz Esparsa</text>
            <text x="365" y="138" textAnchor="middle" fill="#94a3b8" fontSize="9">20k genes × 5k células</text>
            {[0,1,2,3,4,5].map(row =>
              [0,1,2,3,4,5].map(col => {
                const filled = (row + col * 3) % 7 === 0 || (row * 2 + col) % 9 === 1;
                return (
                  <rect key={`${row}-${col}`}
                    x={262 + col * 31} y={150 + row * 20}
                    width="26" height="15" rx="2"
                    fill={filled ? `${color}bb` : '#0f172a'}
                    stroke="var(--card-border)" strokeWidth="0.5" />
                );
              })
            )}
            <text x="365" y="295" textAnchor="middle" fill="#94a3b8" fontSize="9">94% zeros (dropout)</text>

            {/* UMI deduplication */}
            <rect x="500" y="100" width="268" height="200" rx="8" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="634" y="122" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="700">UMI Deduplicação</text>
            <text x="516" y="142" fill="#94a3b8" fontSize="9">1 molécula original</text>
            <rect x="516" y="148" width="70" height="16" rx="3" fill={`${color}35`} stroke={color} strokeWidth="1" />
            <text x="551" y="160" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">UMI-AGTC</text>
            <text x="516" y="183" fill="#94a3b8" fontSize="9">Após PCR — 5 cópias:</text>
            {[0,1,2,3,4].map(i => (
              <g key={i}>
                <rect x={516 + i * 28} y="188" width="24" height="14" rx="2" fill={`${color}22`} stroke={color} strokeWidth="0.5" />
                <text x={528 + i * 28} y="199" textAnchor="middle" fill={color} fontSize="8">UMI</text>
              </g>
            ))}
            <text x="516" y="222" fill="#f97316" fontSize="10" fontWeight="600">Contagem final: 1 (não 5)</text>
            <text x="516" y="240" fill="#94a3b8" fontSize="9">500–10000 genes/célula detectados</text>
            <text x="516" y="256" fill="#94a3b8" fontSize="9">tipicamente 1000–5000 UMIs/célula</text>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>Cell Ranger (10x):</strong> pipeline oficial — alinhamento STAR ao genoma de referência, contagem de UMIs, filtragem de barcodes válidos (knee plot). Output: matrix.mtx.gz + barcodes.tsv + features.tsv. Critérios de qualidade: número de genes por célula (mín. 200), percentagem de reads mitocondriais (máx. 5%), UMIs totais. O SMART-seq2 sequencia células individuais sem droplets — full-length coverage e detecção de isoformas, mas custo elevado por célula.
        </div>

        <div style={S.note}>
          A plataforma 10x Chromium encapsula células em GEMs (Gel Emulsion droplets) com um bead com barcode celular único de 16 nt concatenado com UMI de 12 nt. Após lise e transcrição reversa, cada mRNA fica marcado com o barcode da sua célula de origem — permite desmultiplexar milhares de células numa única corrida de sequenciamento.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Análise com Scanpy e Seurat</h2>

        <p style={S.p}>
          A análise standard segue um pipeline bem estabelecido implementado no Scanpy (Python, mais de 10k citações) e no Seurat (R, mais de 20k citações). A normalização total count (dividir pelo total de counts por célula multiplicado por 10k, depois log1p) remove diferenças de profundidade de sequenciamento. A selecção de 2000–5000 Highly Variable Genes (HVGs) reduz ruído e dimensionalidade. O UMAP (Uniform Manifold Approximation and Projection) produz embedding 2D preservando estrutura local e global — mais informativo que t-SNE para scRNA-seq.
        </p>

        <p style={S.p}>
          O clustering Leiden/Louvain em grafo de k-vizinhos no espaço PCA tem a resolução como hyperparâmetro principal — valores baixos produzem poucos clusters grandes, valores altos produzem muitos clusters pequenos. A identificação de marker genes usa Wilcoxon rank-sum test (log2FC maior que 0.25 e FDR menor que 0.05) contra a base de dados CellMarker para anotação de tipos celulares.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 310" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="780" height="310" rx="10" fill="var(--bg-secondary)" />

            {/* Pipeline steps */}
            {[
              { y: 18, label: 'Raw Count Matrix', detail: '20k genes × 5k células' },
              { y: 64, label: 'Normalização + log1p', detail: 'total count norm × 10k' },
              { y: 110, label: 'HVGs (2000–5000)', detail: 'genes altamente variáveis' },
              { y: 156, label: 'PCA (50 PCs)', detail: 'redução linear dimensional' },
              { y: 202, label: 'k-NN Graph (k=15)', detail: 'vizinhos em espaço PCA' },
              { y: 248, label: 'UMAP + Leiden', detail: 'embedding 2D + clustering' },
            ].map((s, i) => (
              <g key={i}>
                <rect x="10" y={s.y} width="235" height="38" rx="6" fill={`${color}18`} stroke={color} strokeWidth="1" />
                <text x="127" y={s.y + 16} textAnchor="middle" fill={color} fontSize="11" fontWeight="700">{s.label}</text>
                <text x="127" y={s.y + 30} textAnchor="middle" fill="#94a3b8" fontSize="9">{s.detail}</text>
                {i < 5 && <text x="127" y={s.y + 50} textAnchor="middle" fill={color} fontSize="13">↓</text>}
              </g>
            ))}

            {/* UMAP clusters */}
            <text x="520" y="22" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="700">UMAP — 8 Clusters Celulares</text>
            {[
              { cx: 430, cy: 90, r: 26, col: '#f97316', label: 'CD4 T' },
              { cx: 500, cy: 65, r: 20, col: '#fb923c', label: 'B cells' },
              { cx: 560, cy: 100, r: 18, col: '#f59e0b', label: 'NK' },
              { cx: 610, cy: 62, r: 16, col: '#fbbf24', label: 'Mono' },
              { cx: 660, cy: 110, r: 15, col: '#ea580c', label: 'DC' },
              { cx: 700, cy: 70, r: 20, col: '#c2410c', label: 'pDC' },
              { cx: 470, cy: 155, r: 23, col: '#fdba74', label: 'CD8 T' },
              { cx: 590, cy: 160, r: 18, col: '#fde68a', label: 'Treg' },
            ].map((c, i) => (
              <g key={i}>
                {Array.from({ length: 28 }, (_, j) => {
                  const angle = (j / 28) * Math.PI * 2;
                  const rr = c.r * (0.3 + (j % 3) * 0.25);
                  const jitter = (j % 5) * 0.15;
                  return (
                    <circle key={j}
                      cx={c.cx + Math.cos(angle + jitter) * rr * (0.8 + (j % 4) * 0.1)}
                      cy={c.cy + Math.sin(angle + jitter) * rr * (0.7 + (j % 3) * 0.1)}
                      r="2.8" fill={c.col} opacity="0.72" />
                  );
                })}
                <text x={c.cx} y={c.cy + c.r + 12} textAnchor="middle" fill={c.col} fontSize="8" fontWeight="600">{c.label}</text>
              </g>
            ))}

            {/* Code box */}
            <rect x="270" y="215" width="490" height="80" rx="8" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="290" y="234" fill="#f97316" fontSize="10" fontWeight="700">Scanpy pipeline (Python)</text>
            <text x="290" y="250" fill="#94a3b8" fontSize="9">sc.pp.normalize_total(adata, 1e4) ; sc.pp.log1p(adata)</text>
            <text x="290" y="264" fill="#94a3b8" fontSize="9">sc.pp.highly_variable_genes(adata, n_top_genes=2000)</text>
            <text x="290" y="278" fill="#94a3b8" fontSize="9">sc.tl.pca → sc.pp.neighbors → sc.tl.umap → sc.tl.leiden</text>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>Marker genes:</strong> Wilcoxon rank-sum test (cluster vs. resto) — genes com log2FC acima de 0.25 e FDR abaixo de 0.05 identificam tipos celulares por comparação com CellMarker database e Allen Brain Atlas. A resolução do clustering Leiden é o hyperparâmetro mais importante: tipicamente entre 0.3 e 1.5. Scanpy (Python) e Seurat (R) são ecossistemas paralelos com funcionalidades equivalentes mas convenções diferentes.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Trajectory Inference e RNA Velocity</h2>

        <p style={S.p}>
          A trajectory inference reconstrói processos dinâmicos (diferenciação celular, resposta imune, ciclo celular) a partir de snapshots estáticos de scRNA-seq. O pseudotime ordena células ao longo de um trajecto de diferenciação — a célula raiz é definida biologicamente. O Monocle3 usa principal graph learning para encontrar trajectórias em embeddings UMAP, incluindo bifurcações. O RNA velocity (Bergen et al., Nature Methods 2020) usa a razão entre RNA não-spliced (nascente, intrónico) e spliced (maduro, exónico) para indicar a direcção futura do estado celular.
        </p>

        <p style={S.p}>
          O scVelo implementa RNA velocity com modelo dinâmico de splicing para detectar genes driver da diferenciação. O CellRank combina RNA velocity com Markov chain para calcular probabilidades de transição entre estados celulares. O PAGA (Partition-based Graph Abstraction) resume trajectórias num grafo de conectividade entre clusters — útil para visualizar topologia de diferenciação em alta dimensão.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 290" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="780" height="290" rx="10" fill="var(--bg-secondary)" />

            {/* Section dividers */}
            <line x1="260" y1="10" x2="260" y2="215" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="4,3" opacity="0.5" />
            <line x1="520" y1="10" x2="520" y2="215" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="4,3" opacity="0.5" />

            {/* === PSEUDOTIME (0-260) === */}
            <text x="130" y="22" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="700">Pseudotime (Monocle3)</text>
            {Array.from({ length: 80 }, (_, i) => {
              const t = i / 79;
              const angle = t * Math.PI * 1.3 - 0.4;
              const rad = 52 + Math.sin(t * Math.PI) * 22;
              const ox = (i % 7) * 3 - 10;
              const oy = Math.floor(i / 7) % 3 * 4 - 4;
              const cx = 125 + Math.cos(angle) * rad + ox;
              const cy = 125 + Math.sin(angle) * rad * 0.55 + oy;
              const r = Math.round(t * 239 + (1 - t) * 30);
              const b = Math.round((1 - t) * 239 + t * 30);
              return <circle key={i} cx={cx} cy={cy} r="3" fill={`rgb(${r},60,${b})`} opacity="0.82" />;
            })}
            <path d="M 75 128 Q 98 100 125 115 Q 152 132 175 108 Q 198 82 190 138 Q 185 172 215 172"
              fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="6,3" opacity="0.5" />
            <circle cx="75" cy="128" r="6" fill="#f97316" stroke="#f97316" strokeWidth="1.5" />
            <text x="75" y="148" textAnchor="middle" fill="#f97316" fontSize="8">raiz</text>
            <text x="130" y="235" textAnchor="middle" fill="#94a3b8" fontSize="8">azul = precoce → vermelho = tardio</text>

            {/* === BIFURCAÇÃO (260-520, center 390) === */}
            <text x="390" y="22" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="700">Bifurcação de Trajectória</text>
            <circle cx="390" cy="62" r="18" fill={`${color}30`} stroke={color} strokeWidth="1.5" />
            <text x="390" y="66" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">stem</text>
            <line x1="390" y1="80" x2="390" y2="108" stroke="#94a3b8" strokeWidth="1.5" />
            <circle cx="390" cy="120" r="16" fill={`${color}20`} stroke={color} strokeWidth="1.5" />
            <text x="390" y="124" textAnchor="middle" fill={color} fontSize="9">prog.</text>
            <line x1="378" y1="136" x2="340" y2="162" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="402" y1="136" x2="440" y2="162" stroke="#94a3b8" strokeWidth="1.5" />
            <circle cx="332" cy="174" r="18" fill={`${color}15`} stroke={color} strokeWidth="1.5" />
            <text x="332" y="178" textAnchor="middle" fill={color} fontSize="9">fate A</text>
            <circle cx="448" cy="174" r="18" fill={`${color}25`} stroke={color} strokeWidth="1.5" />
            <text x="448" y="178" textAnchor="middle" fill={color} fontSize="9">fate B</text>
            <rect x="270" y="210" width="240" height="52" rx="6" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="390" y="227" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">CellRank: Markov chain sobre RNA velocity</text>
            <text x="390" y="242" textAnchor="middle" fill="#94a3b8" fontSize="8">prob. absorção em estados terminais</text>
            <text x="390" y="256" textAnchor="middle" fill="#94a3b8" fontSize="8">PAGA: grafo de conectividade entre clusters</text>

            {/* === RNA VELOCITY (520-780, center 650) === */}
            <text x="650" y="22" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="700">RNA Velocity</text>
            <defs>
              <marker id="varr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill={color} />
              </marker>
            </defs>
            {Array.from({ length: 20 }, (_, i) => {
              const col2 = i % 4;
              const row2 = Math.floor(i / 4);
              const cx = 548 + col2 * 50;
              const cy = 50 + row2 * 38;
              const angle = col2 * 0.22 - 0.15 + row2 * 0.12;
              const len = 22 + (i % 3) * 6;
              return (
                <g key={i}>
                  <circle cx={cx} cy={cy} r="5" fill={`${color}55`} />
                  <line x1={cx} y1={cy}
                    x2={cx + Math.cos(angle) * len}
                    y2={cy + Math.sin(angle) * len}
                    stroke={color} strokeWidth="1.5" markerEnd="url(#varr)" />
                </g>
              );
            })}
            <text x="650" y="245" textAnchor="middle" fill="#94a3b8" fontSize="9">setas = direcção futura do estado celular</text>
            <text x="650" y="255" textAnchor="middle" fill="#94a3b8" fontSize="8">spliced vs. unspliced ratio (scVelo)</text>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>scVelo (Bergen et al. 2020):</strong> modelo dinâmico de splicing — estima taxas de transcrição, splicing e degradação por gene para calcular velocidade como vector no espaço PCA/UMAP. Genes com alta velocidade positiva estão a ser induzidos; velocidade negativa indica repressão. <strong>CellRank</strong> combina RNA velocity com Markov chain para calcular probabilidades de transição e identificar estados terminais de diferenciação com rigor estatístico.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Integração Multi-ómica</h2>

        <p style={S.p}>
          A multi-ómica mede múltiplas camadas moleculares nas mesmas células. O CITE-seq mede RNA e proteínas de superfície simultaneamente com anticorpos conjugados a oligos de DNA (ADTs) — mais de 200 proteínas por célula, especialmente útil para imunologia. O 10x Multiome mede RNA e ATAC (cromatina aberta) na mesma célula, ligando expressão génica à acessibilidade regulatória. A integração de datasets de diferentes laboratórios usa Harmony, Seurat v5 Anchor integration, ou scVI (VAE) para remover efeitos de batch preservando variação biológica.
        </p>

        <p style={S.p}>
          O MOFA+ (Multi-Omics Factor Analysis) é um PCA generalizado para múltiplas modalidades, decompondo variância em factores latentes partilhados e específicos. A Spatial transcriptomics (10x Visium, Slide-seq, Stereo-seq) mede expressão preservando posição espacial no tecido — recupera o contexto arquitectural perdido com a dissociação celular.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 250" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="780" height="250" rx="10" fill="var(--bg-secondary)" />
            <text x="390" y="24" textAnchor="middle" fill="#e2e8f0" fontSize="13" fontWeight="700">Integração Multi-ómica — Mesmas Células</text>

            {/* Central cell */}
            <circle cx="390" cy="128" r="36" fill={`${color}28`} stroke={color} strokeWidth="2" />
            <text x="390" y="124" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Célula</text>
            <text x="390" y="138" textAnchor="middle" fill="#94a3b8" fontSize="9">única</text>

            {/* Modalities */}
            {[
              { x: 78, y: 78, label: 'scRNA-seq', sub: '20k features', col: '#f97316' },
              { x: 78, y: 178, label: 'scATAC-seq', sub: '200k peaks', col: '#f97316' },
              { x: 702, y: 78, label: 'CITE-seq', sub: '200+ proteínas ADT', col: '#f97316' },
              { x: 702, y: 178, label: 'Spatial', sub: 'coordenadas XY', col: '#f97316' },
            ].map((mod2, i) => (
              <g key={i}>
                <rect x={mod2.x - 58} y={mod2.y - 24} width="116" height="48" rx="8" fill={`${mod2.col}18`} stroke={mod2.col} strokeWidth="1.2" />
                <text x={mod2.x} y={mod2.y - 7} textAnchor="middle" fill={mod2.col} fontSize="10" fontWeight="700">{mod2.label}</text>
                <text x={mod2.x} y={mod2.y + 9} textAnchor="middle" fill="#94a3b8" fontSize="8">{mod2.sub}</text>
                <line
                  x1={mod2.x < 390 ? mod2.x + 58 : mod2.x - 58}
                  y1={mod2.y}
                  x2={mod2.x < 390 ? 354 : 426}
                  y2={mod2.y < 128 ? 110 : 146}
                  stroke={mod2.col} strokeWidth="1.2" strokeDasharray="5,3" opacity="0.65" />
              </g>
            ))}

            {/* WNN diagram */}
            <rect x="280" y="49" width="220" height="36" rx="7" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="390" y="63" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="700">WNN (Seurat): pesos por modalidade por célula</text>
            <text x="390" y="77" textAnchor="middle" fill="#94a3b8" fontSize="8">RNA weight + Protein weight = 1 por célula</text>

            {/* MOFA+ */}
            <rect x="170" y="205" width="440" height="38" rx="7" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="390" y="220" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="700">MOFA+ · Harmony · scVI (VAE) · Seurat Anchor</text>
            <text x="390" y="234" textAnchor="middle" fill="#94a3b8" fontSize="8">factores latentes partilhados + remoção de batch effect</text>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>MOFA+</strong> (Multi-Omics Factor Analysis v2): PCA generalizado para múltiplas modalidades — decompõe variância em factores latentes partilhados e específicos de modalidade, com suporte a dados esparsos. <strong>Seurat WNN</strong> (Weighted Nearest Neighbours) combina modalidades com pesos aprendidos por célula — células onde proteínas são mais informativas recebem maior peso na modalidade proteíca. <strong>10x Visium</strong> cobre 5k spots de 55 micrómetros, Stereo-seq atinge resolução de célula única com cobertura de tecido completo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Imunologia Computacional e Repertório</h2>

        <p style={S.p}>
          O sistema imune é o caso de uso mais avançado de scRNA-seq — a célula única captura heterogeneidade impossível de ver em bulk. A recombinação V(D)J gera linfócitos T e B com receptores únicos — diversidade de aproximadamente 10 elevado a 15 sequências possíveis de TCR. A plataforma 10x Chromium V(D)J mede scRNA-seq e TCR/BCR na mesma célula, ligando fenótipo de expressão ao receptor antigénico. Um clonótipo (células com o mesmo TCR/BCR) expandido indica resposta antigénica.
        </p>

        <p style={S.p}>
          No Tumor Microenvironment (TME) o scRNA-seq revelou células T exaustas (PDCD1+, LAG3+, TIGIT+), macrófagos M1/M2, fibroblastos associados ao cancro e células NK com diferentes estados. TILs com TCR clonalmente expandido e perfil de exaustão correlacionam com resposta a imunoterapia (checkpoint inhibitors). O CellChat e o LIANA inferem comunicação célula-célula por ligando-receptor a partir de scRNA-seq.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 280" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="780" height="280" rx="10" fill="var(--bg-secondary)" />
            <text x="390" y="22" textAnchor="middle" fill="#e2e8f0" fontSize="13" fontWeight="700">Repertório Imune — scRNA-seq + V(D)J</text>

            {/* Section dividers */}
            <line x1="260" y1="30" x2="260" y2="270" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="4,3" opacity="0.5" />
            <line x1="520" y1="30" x2="520" y2="270" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="4,3" opacity="0.5" />

            {/* === V(D)J + TME (0-260, center 130) === */}
            <text x="130" y="44" textAnchor="middle" fill="#94a3b8" fontSize="10">Recombinação V(D)J — CDR3</text>
            {[
              { x: 12, label: 'V', col: '#f97316', w: 62 },
              { x: 82, label: 'D', col: '#fb923c', w: 42 },
              { x: 132, label: 'J', col: '#f59e0b', w: 42 },
              { x: 182, label: 'C', col: '#94a3b8', w: 66 },
            ].map((seg, i) => (
              <g key={i}>
                <rect x={seg.x} y="52" width={seg.w} height="30" rx="4" fill={`${seg.col}28`} stroke={seg.col} strokeWidth="1.5" />
                <text x={seg.x + seg.w / 2} y="72" textAnchor="middle" fill={seg.col} fontSize="14" fontWeight="800">{seg.label}</text>
              </g>
            ))}
            <text x="130" y="100" textAnchor="middle" fill="#94a3b8" fontSize="8.5">CDR3 (junção V-D-J): ~10^15 diversidade</text>
            <text x="130" y="114" textAnchor="middle" fill="#64748b" fontSize="8">10x V(D)J: TCR/BCR + RNA na mesma célula</text>

            {/* TME box */}
            <rect x="10" y="128" width="242" height="128" rx="7" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="131" y="147" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="700">Tumor Microenvironment (TME)</text>
            {[
              { t: 'CD8+ T exaustas: PDCD1+, LAG3+, TIGIT+', col: color },
              { t: 'Checkpoint inhibitors (anti-PD1/PD-L1)', col: '#fb923c' },
              { t: 'Macrófagos M1/M2 — polarização', col: '#f59e0b' },
              { t: 'Fibroblastos associados ao cancro (CAF)', col: '#94a3b8' },
              { t: 'CellChat/LIANA: inferência ligando-receptor', col: '#94a3b8' },
            ].map((row, i) => (
              <text key={i} x="22" y={165 + i * 17} fill={row.col} fontSize="8.5">{row.t}</text>
            ))}

            {/* === UMAP Clonotype (260-520, center 390) === */}
            <text x="390" y="44" textAnchor="middle" fill="#94a3b8" fontSize="10">Expansão Clonal — UMAP T cells</text>
            {[
              { cx: 288, cy: 110, col: '#475569', size: 4 },
              { cx: 320, cy: 85, col: '#475569', size: 3.5 },
              { cx: 350, cy: 130, col: '#fbbf24', size: 5.5 },
              { cx: 385, cy: 95, col: '#fbbf24', size: 5 },
              { cx: 420, cy: 118, col: '#fb923c', size: 7 },
              { cx: 460, cy: 88, col: '#f97316', size: 9 },
              { cx: 495, cy: 122, col: '#f97316', size: 9 },
              { cx: 455, cy: 145, col: '#fb923c', size: 7 },
              { cx: 415, cy: 155, col: '#fbbf24', size: 5 },
              { cx: 355, cy: 160, col: '#475569', size: 3.5 },
              { cx: 310, cy: 145, col: '#475569', size: 4 },
            ].map((c, i) => (
              <circle key={i} cx={c.cx} cy={c.cy} r={c.size} fill={c.col} opacity="0.88" />
            ))}
            <text x="390" y="183" textAnchor="middle" fill="#94a3b8" fontSize="8">cinza=singleton · amarelo=pequeno</text>
            <text x="390" y="194" textAnchor="middle" fill="#94a3b8" fontSize="8">laranja=médio · laranja escuro=expandido</text>

            {/* === Bar chart (520-780, center 650) === */}
            <text x="650" y="44" textAnchor="middle" fill="#94a3b8" fontSize="10">Distribuição de Clonótipos</text>
            {[
              { i: 0, count: 1, label: 'x1' },
              { i: 1, count: 5, label: 'x5' },
              { i: 2, count: 14, label: 'x14' },
              { i: 3, count: 32, label: 'x32' },
              { i: 4, count: 58, label: 'x58' },
            ].map((bar) => {
              const bx = 536 + bar.i * 48;
              const h = Math.round(bar.count * 3.0);
              const baseY = 210;
              return (
                <g key={bar.i}>
                  <rect x={bx} y={baseY - h} width="36" height={h} rx="3"
                    fill={bar.count > 10 ? color : `${color}55`} />
                  <text x={bx + 18} y={baseY + 14} textAnchor="middle" fill="#94a3b8" fontSize="8">{bar.label}</text>
                  <text x={bx + 18} y={baseY - h - 4} textAnchor="middle" fill={color} fontSize="8" fontWeight="600">{bar.count}</text>
                </g>
              );
            })}
            <text x="650" y="240" textAnchor="middle" fill="#94a3b8" fontSize="8">células por clonótipo</text>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>scRepertoire e Immunarch:</strong> pacotes para análise de repertório imune — diversidade clonal (Shannon entropy, Gini index), sobreposição entre amostras (Jaccard, Morisita), expansão clonal. TIL (Tumour Infiltrating Lymphocytes) com TCR clonalmente expandido e perfil de exaustão (PDCD1+, LAG3+, TIGIT+) correlacionam com resposta a imunoterapia. <strong>CellChat e LIANA</strong> inferem comunicação ligando-receptor entre tipos celulares a partir de scRNA-seq — identificam eixos de sinalização activos no TME.
        </div>

        <div style={S.note}>
          scRNA-seq + V(D)J permite ligar o receptor antigénico (TCR/BCR) ao fenótipo transcripcional — uma célula T com TCR específico para um neoantígeno tumoral e perfil de exaustão versus uma com o mesmo TCR mas perfil de memória efectora. Esta resolução é impossível em bulk sequencing. A expansão clonal de TILs CD8+ exaustos é actualmente um dos biomarcadores mais promissores para resposta a anti-PD-1/PD-L1.
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>scRNA-seq — Tecnologia e Pipeline</strong> — 10x Genomics Chromium captura mRNA de milhares de células individuais em paralelo via droplet microfluidics; o pipeline padrão: STARsolo/CellRanger → controlo de qualidade → normalização (scran) → integração (Harmony) → clustering.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Análise com Scanpy e Seurat</strong> — Scanpy (Python) e Seurat (R) são as frameworks dominantes para análise scRNA-seq; implementam normalização, redução dimensional (PCA, UMAP), clustering de Leiden e anotação de tipos celulares com marcadores conhecidos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Trajectory Inference e RNA Velocity</strong> — trajectory inference (Monocle3, PAGA) reconstrói pseudo-tempo de diferenciação celular; RNA Velocity (scVelo) usa a razão RNA não-spliced/spliced para prever a direcção futura do estado celular — critico para estudar desenvolvimento e cancro.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Integração Multi-ómica</strong> — WNN (Weighted Nearest Neighbor, Seurat v4) integra RNA e ATAC-seq por célula; MOFA+ e scVI aprendem representações latentes partilhadas de múltiplas ómicas; a integração revela regulação epigenética de programas de expressão génica.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Imunologia Computacional e Repertório</strong> — TCR e BCR repertoire sequencing (scTCR-seq) com VDJdb e TRUST4 caracterizan clonótipos imunes; modelos como TCRdist e GLIPH2 agrupam receptores por especificidade antigénica — essencial para vacinas e imunoterapia.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
