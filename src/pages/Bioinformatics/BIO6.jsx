import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Bioinformatics';

const mod = modules[5];
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

export default function BIO6() {
  return (
    <div style={S.page}>
      <Link to="/bioinformatics" style={S.back}>&#8592; Bioinformatics</Link>
      <div style={S.badge}>MÓDULO {mod.num}</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. ChIP-seq e ATAC-seq</h2>
        <div style={S.diagram}>
          <svg viewBox="0 0 780 300" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="300" fill="var(--bg-secondary)" rx="10" />
            <text x="18" y="22" fill={color} fontSize="11" fontWeight="700">ChIP-seq Workflow</text>
            {/* ChIP-seq arrows first */}
            {[48, 88, 128, 168, 208].map((y, i) => (
              <line key={i} x1="107" y1={y + 12} x2="107" y2={y + 31} stroke={color} strokeWidth="1.5" markerEnd="url(#arr6a)" />
            ))}
            {/* ChIP-seq boxes on top */}
            {[
              { y: 48, label: 'Crosslink cromatina (formaldehido)' },
              { y: 88, label: 'Fragmentar DNA (sonicacao)' },
              { y: 128, label: 'Immunoprecipitacao (anticorpo)' },
              { y: 168, label: 'Sequenciamento (Illumina)' },
              { y: 208, label: 'Alinhamento (BWA / Bowtie2)' },
              { y: 248, label: 'Peak calling (MACS2)' },
            ].map((s, i) => (
              <g key={i}>
                <rect x="12" y={s.y - 14} width="190" height="26" fill="var(--bg-secondary)" stroke={`${color}60`} rx="5" />
                <text x="107" y={s.y + 3} fill="#e2e8f0" fontSize="9.5" textAnchor="middle">{s.label}</text>
              </g>
            ))}
            <text x="215" y="22" fill={color} fontSize="10" fontWeight="700">Alvos de Histonas</text>
            <rect x="215" y="32" width="135" height="32" fill="rgba(249,115,22,0.12)" stroke="#f9731650" rx="4" />
            <text x="282" y="45" fill="#f97316" fontSize="9" textAnchor="middle">H3K4me3</text>
            <text x="282" y="57" fill="#f97316" fontSize="9" textAnchor="middle">— promotores activos</text>
            <rect x="215" y="70" width="135" height="32" fill="rgba(251,146,60,0.15)" stroke="#fb923c50" rx="4" />
            <text x="282" y="83" fill="#fb923c" fontSize="9" textAnchor="middle">H3K27ac</text>
            <text x="282" y="95" fill="#fb923c" fontSize="9" textAnchor="middle">— enhancers activos</text>
            <rect x="215" y="108" width="135" height="32" fill="rgba(251,191,36,0.10)" stroke="#fbbf2450" rx="4" />
            <text x="282" y="121" fill="#fbbf24" fontSize="9" textAnchor="middle">H3K27me3</text>
            <text x="282" y="133" fill="#fbbf24" fontSize="9" textAnchor="middle">— repressao Polycomb</text>

            <line x1="360" y1="10" x2="360" y2="290" stroke="#1e2a3a" strokeWidth="1.5" />
            <text x="375" y="22" fill={color} fontSize="11" fontWeight="700">ATAC-seq</text>
            <text x="375" y="40" fill="#94a3b8" fontSize="9">Tn5 transposase corta cromatina acessivel</text>
            <ellipse cx="440" cy="90" rx="42" ry="20" fill="rgba(249,115,22,0.06)" stroke="#64748b" />
            <text x="440" y="95" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Nucleossoma</text>
            <rect x="398" y="112" width="84" height="7" fill="#64748b" rx="3" />
            <text x="440" y="135" fill="#94a3b8" fontSize="8.5" textAnchor="middle">DNA enrolado em octamero</text>
            <rect x="390" y="152" width="100" height="16" fill="#f9731625" stroke={color} rx="5" />
            <text x="440" y="164" fill={color} fontSize="8.5" textAnchor="middle">Regiao acessivel (NFR)</text>
            <text x="440" y="185" fill="#94a3b8" fontSize="9" textAnchor="middle">Tn5 insere adaptadores</text>
            <text x="440" y="202" fill="#94a3b8" fontSize="9" textAnchor="middle">Sequenciamento -&gt; picos de abertura</text>

            <text x="510" y="22" fill={color} fontSize="10" fontWeight="700">Genome Browser Track</text>
            {[
              { label: 'ATAC-seq', c: color, vals: [2,3,8,15,12,9,4,2,1,2] },
              { label: 'H3K4me3', c: '#fb923c', vals: [1,2,6,14,11,7,3,1,1,1] },
              { label: 'H3K27ac', c: '#f59e0b', vals: [1,2,5,11,9,6,3,1,1,1] },
              { label: 'RNA-seq', c: '#fbbf24', vals: [0,1,3,6,8,7,5,3,1,0] },
            ].map((tr, ti) => {
              const yBase = 38 + ti * 62;
              return (
                <g key={ti}>
                  <text x="512" y={yBase + 11} fill={tr.c} fontSize="8.5">{tr.label}</text>
                  {tr.vals.map((v, i) => (
                    <rect key={i} x={512 + i * 26} y={yBase + 22 - v * 2} width="24" height={v * 2} fill={tr.c} opacity="0.8" rx="1" />
                  ))}
                  <line x1="510" y1={yBase + 23} x2="775" y2={yBase + 23} stroke="var(--card-border)" strokeWidth="0.5" />
                </g>
              );
            })}
            <defs>
              <marker id="arr6a" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill={color} />
              </marker>
            </defs>
          </svg>
        </div>
        <p style={S.p}>A epigenomica estuda modificacoes hereditarias da expressao genica que nao alteram a sequencia de DNA. As histonas formam octameros em torno dos quais o DNA enrola, criando nucleossomas — as modificacoes nas suas caudas N-terminais afectam a acessibilidade e a transcricao. H3K4me3 marca promotores activos; H3K27ac marca enhancers e promotores activos; H3K27me3 e a marca repressiva do complexo Polycomb.</p>
        <p style={S.p}>O ChIP-seq (Chromatin Immunoprecipitation sequencing) perfila genoma-wide a distribuicao de modificacoes de histonas ou factores de transcricao com anticorpo especifico — o MACS2 e o algoritmo padrao de peak calling. O ATAC-seq e mais simples, requer menos input de celulas e detecta simultaneamente nucleossomas e regioes livres de nucleossomas.</p>
        <div style={S.highlight}>O CUT&amp;RUN e CUT&amp;TAG sao alternativas modernas ao ChIP-seq com menor ruido de fundo e menor input celular — apenas algumas centenas de celulas sao necessarias versus milhoes no ChIP-seq classico.</div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Metilacao do DNA e Relogio Epigenetico</h2>
        <div style={S.diagram}>
          <svg viewBox="0 0 780 280" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="280" fill="var(--bg-secondary)" rx="10" />
            <text x="15" y="22" fill={color} fontSize="11" fontWeight="700">Metilacao CpG</text>
            <rect x="15" y="35" width="80" height="32" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" rx="6" />
            <text x="55" y="57" fill="#e2e8f0" fontSize="13" textAnchor="middle" fontWeight="700">C</text>
            <text x="55" y="82" fill="#94a3b8" fontSize="8" textAnchor="middle">citosina</text>
            <text x="110" y="47" fill={color} fontSize="9" textAnchor="middle">DNMT</text>
            <text x="105" y="68" fill={color} fontSize="8" textAnchor="middle">---&gt;</text>
            <rect x="125" y="35" width="80" height="32" fill="#f9731620" stroke={color} rx="6" />
            <text x="165" y="57" fill={color} fontSize="11" textAnchor="middle" fontWeight="700">5mC</text>
            <text x="165" y="82" fill="#94a3b8" fontSize="8" textAnchor="middle">5-metilcitosina</text>
            <text x="15" y="98" fill={color} fontSize="10" fontWeight="700">Sequenciamento por Bissulfito</text>
            <rect x="15" y="108" width="200" height="24" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" rx="4" />
            <text x="20" y="124" fill="#94a3b8" fontSize="8.5">C nao metilado -&gt; U -&gt; lido como T</text>
            <rect x="15" y="138" width="200" height="24" fill="#f9731615" stroke="#f9731640" rx="4" />
            <text x="20" y="154" fill={color} fontSize="8.5">5mC metilado -&gt; inalterado -&gt; lido como C</text>

            <text x="240" y="22" fill={color} fontSize="11" fontWeight="700">Relogio Epigenetico de Horvath</text>
            <line x1="245" y1="250" x2="490" y2="250" stroke="var(--card-border)" strokeWidth="1.5" />
            <line x1="245" y1="250" x2="245" y2="35" stroke="var(--card-border)" strokeWidth="1.5" />
            <text x="368" y="270" fill="#94a3b8" fontSize="9" textAnchor="middle">Idade cronologica (anos)</text>
            <text x="228" y="145" fill="#94a3b8" fontSize="9" textAnchor="middle" transform="rotate(-90,228,145)">Idade biologica prevista</text>
            {[[260,228],[276,212],[292,200],[308,186],[324,172],[340,162],[356,148],[372,136],[388,122],[404,110],[420,98],[436,86],[452,73],[468,62],[484,50]].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r="3.5" fill={color} opacity="0.7" />
            ))}
            <line x1="258" y1="232" x2="486" y2="47" stroke={color} strokeWidth="1.5" strokeDasharray="4,2" />
            <text x="440" y="43" fill={color} fontSize="8">R=0.96</text>
            <text x="465" y="175" fill="#f59e0b" fontSize="8" textAnchor="middle">↓ Restricao calorica</text>
            <text x="465" y="188" fill="#fb923c" fontSize="8" textAnchor="middle">↑ Doenca / stress</text>

            <text x="530" y="22" fill={color} fontSize="11" fontWeight="700">Cancro — Hipermetilacao</text>
            {[
              { gene: 'MLH1', normal: 0.1, cancer: 0.85 },
              { gene: 'CDKN2A', normal: 0.05, cancer: 0.78 },
              { gene: 'BRCA1', normal: 0.08, cancer: 0.65 },
            ].map((g, i) => (
              <g key={i}>
                <text x="535" y={55 + i * 58} fill="#94a3b8" fontSize="9" fontWeight="700">{g.gene}</text>
                <rect x="535" y={62 + i * 58} width={Math.round(g.normal * 160)} height="14" fill="#f59e0b" opacity="0.7" rx="3" />
                <text x={700} y={74 + i * 58} fill="#f59e0b" fontSize="8">Normal {Math.round(g.normal * 100)}%</text>
                <rect x="535" y={80 + i * 58} width={Math.round(g.cancer * 160)} height="14" fill={color} opacity="0.85" rx="3" />
                <text x={700} y={93 + i * 58} fill={color} fontSize="8">Cancro {Math.round(g.cancer * 100)}%</text>
              </g>
            ))}
          </svg>
        </div>
        <p style={S.p}>A metilacao do DNA ocorre predominantemente em citosinas no contexto CpG (ilhas CpG nos promotores) e e a marca epigenetica mais estavel. A DNMT1 e a metiltransferase de manutencao — copia o padrao de metilacao para a cadeia filha apos replicacao. As DNMT3A/3B estabelecem novos padroes durante a diferenciacao. As enzimas TET convertem 5mC em 5hmC, mediando a demetilacao activa.</p>
        <p style={S.p}>O sequenciamento por bissulfito (WGBS) e o padrao de ouro para o metiloma completo — o EPIC array (Illumina 850k) e a alternativa rapida e economica medindo 850.000 CpGs. O relogio epigenetico de Horvath (2013) usa 353 CpGs para predizer a idade biologica com correlacao de 0.96 — aceleracao do relogio associa-se a doencas cronicas, tabagismo e obesidade.</p>
        <div style={S.highlight}>No cancro, a hipermetilacao de genes supressores de tumores (MLH1, BRCA1, CDKN2A) silencia a proteccao — marcador diagnostico e alvo terapeutico. A 5-azacitidina inibe DNMTs e reverte a hipermetilacao em cancros hematologicos.</div>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Redes de Regulacao Genica</h2>
        <div style={S.diagram}>
          <svg viewBox="0 0 780 280" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="280" fill="var(--bg-secondary)" rx="10" />
            <text x="15" y="22" fill={color} fontSize="11" fontWeight="700">Inferencia de GRN — GENIE3</text>
            {/* GENIE3 boxes first */}
            {[
              { y: 50, label: 'Matriz expressao genica (celulas x genes)', fill: 'var(--bg-secondary)', stroke: 'var(--card-border)', c: '#e2e8f0' },
              { y: 90, label: 'GENIE3 — Random Forests por gene alvo', fill: '#f9731618', stroke: '#f9731650', c: color },
              { y: 130, label: 'Links TF -> alvo ranqueados por importancia', fill: 'var(--bg-secondary)', stroke: 'var(--card-border)', c: '#e2e8f0' },
              { y: 170, label: 'Grafo de rede regulatoria (TF + alvos)', fill: 'var(--bg-secondary)', stroke: 'var(--card-border)', c: '#e2e8f0' },
            ].map((s, i) => (
              <g key={i}>
                <rect x="12" y={s.y - 14} width="210" height="26" fill={s.fill} stroke={s.stroke} rx="5" />
                <text x="117" y={s.y + 3} fill={s.c} fontSize="8.5" textAnchor="middle">{s.label}</text>
              </g>
            ))}
            {/* GENIE3 arrows on top */}
            {[50, 90, 130].map((y, i) => (
              <line key={i} x1="117" y1={y + 12} x2="117" y2={y + 26} stroke={color} strokeWidth="1.5" markerEnd="url(#arr6b)" />
            ))}

            <text x="240" y="22" fill={color} fontSize="10" fontWeight="700">Rede Regulatoria</text>
            {/* Pass 1: lines without markers */}
            {[[296,90,386,70],[296,90,386,112],[346,145,386,154],[346,145,386,196]].map(([x1,y1,x2,y2],i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f97316" strokeWidth="1.5" opacity="0.8" />
            ))}
            {[[296,200,386,238],[296,200,386,196]].map(([x1,y1,x2,y2],i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,2" opacity="0.8" />
            ))}
            {/* Pass 2: TF hexagons */}
            {[
              { cx: 280, cy: 90, label: 'TF1' },
              { cx: 330, cy: 145, label: 'TF2' },
              { cx: 280, cy: 200, label: 'TF3' },
            ].map((tf, i) => {
              const pts = [[tf.cx,tf.cy-18],[tf.cx+16,tf.cy-9],[tf.cx+16,tf.cy+9],[tf.cx,tf.cy+18],[tf.cx-16,tf.cy+9],[tf.cx-16,tf.cy-9]].map(p=>p.join(',')).join(' ');
              return (
                <g key={i}>
                  <polygon points={pts} fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5" />
                  <text x={tf.cx} y={tf.cy + 4} fill={color} fontSize="8.5" textAnchor="middle" fontWeight="700">{tf.label}</text>
                </g>
              );
            })}
            {/* Pass 2: Gene circles */}
            {[
              { cx: 400, cy: 70, label: 'G1' },
              { cx: 400, cy: 112, label: 'G2' },
              { cx: 400, cy: 154, label: 'G3' },
              { cx: 400, cy: 196, label: 'G4' },
              { cx: 400, cy: 238, label: 'G5' },
            ].map((g, i) => (
              <g key={i}>
                <circle cx={g.cx} cy={g.cy} r="14" fill="var(--bg-secondary)" stroke="var(--card-border)" />
                <text x={g.cx} y={g.cy + 4} fill="#e2e8f0" fontSize="8.5" textAnchor="middle">{g.label}</text>
              </g>
            ))}
            {/* Pass 3: arrowheads on top of everything */}
            {[[296,90,386,70],[296,90,386,112],[346,145,386,154],[346,145,386,196]].map(([x1,y1,x2,y2],i) => {
              const angle = Math.atan2(y2-y1,x2-x1)*180/Math.PI;
              return <polygon key={i} points="-7,-4 0,0 -7,4" transform={`translate(${x2},${y2}) rotate(${angle})`} fill="#f97316" opacity="0.9" />;
            })}
            {[[296,200,386,238],[296,200,386,196]].map(([x1,y1,x2,y2],i) => {
              const angle = Math.atan2(y2-y1,x2-x1)*180/Math.PI;
              return <polygon key={i} points="-7,-4 0,0 -7,4" transform={`translate(${x2},${y2}) rotate(${angle})`} fill="#f97316" opacity="0.9" />;
            })}
            <text x="245" y="265" fill="#f97316" fontSize="8">linha solida = activacao</text>
            <text x="355" y="265" fill="#f97316" fontSize="8">tracejado = repressao</text>

            <line x1="445" y1="10" x2="445" y2="270" stroke="var(--card-border)" strokeWidth="1" />
            <text x="458" y="22" fill={color} fontSize="11" fontWeight="700">SCENIC — Regulons</text>
            {/* SCENIC boxes first */}
            {[
              'scRNA-seq (expressao genica)',
              'Modulos de co-expressao (WGCNA)',
              'Enriquecimento de motivos (pySCENIC)',
              'Regulons validados por cis-regulatory evidence',
              'Actividade de regulon por celula (AUCell)',
            ].map((step, i) => (
              <g key={i}>
                <rect x="458" y={38 + i * 44} width="305" height="28" fill={i % 2 === 0 ? 'var(--bg-secondary)' : `${color}20`} stroke={i % 2 === 0 ? 'var(--card-border)' : `${color}60`} rx="5" />
                <text x="610" y={56 + i * 44} fill={i % 2 === 0 ? 'var(--text-primary)' : color} fontSize="9" textAnchor="middle">{step}</text>
              </g>
            ))}
            {/* SCENIC arrows on top */}
            {[0,1,2,3].map(i => (
              <line key={i} x1="610" y1={66 + i * 44} x2="610" y2={80 + i * 44} stroke={color} strokeWidth="1.5" markerEnd="url(#arr6b)" />
            ))}
            <defs>
              <marker id="arr6b" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill={color} />
              </marker>
              <marker id="actArr6" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
              </marker>
              <marker id="repArr6" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <rect x="1" y="1" width="6" height="6" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>
        <p style={S.p}>As Redes de Regulacao Genica (GRN) descrevem as interaccoes entre factores de transcricao (TF) e genes alvo — o "wiring diagram" do controlo da expressao genica. O GENIE3 usa um ensemble de random forests, um por gene alvo, para inferir a rede a partir de dados de expressao — o metodo mais robusto em benchmarks.</p>
        <p style={S.p}>O SCENIC (scRNA-seq + ATAC-seq) identifica regulons: conjunto de TF e os seus alvos directos co-activos com evidencia de motivo de ligacao em regioes cis-regulatorias. O footprinting com TOBIAS em dados de ATAC-seq detecta onde os TFs estao activamente ligados ao DNA — occupancy a nivel de celula unica.</p>
        <div style={S.note}>O BEELINE (2020) benchmarked 12 metodos de inferencia de GRN em dados sinteticos com ground truth conhecido. O CRISPRi screens valida sistematicamente relacoes TF-gene com knockdown em paralelo e readout transcriptomico (Perturb-seq).</div>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Enformer e Deep Learning para Regulacao</h2>
        <div style={S.diagram}>
          <svg viewBox="0 0 780 280" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="280" fill="var(--bg-secondary)" rx="10" />
            <text x="15" y="22" fill={color} fontSize="11" fontWeight="700">Arquitectura Enformer (DeepMind / Calico, 2021)</text>
            {/* Enformer arrows first */}
            {[[145,165],[285,305],[455,475]].map(([x1,x2],i) => (
              <line key={i} x1={x1} y1="49" x2={x2} y2="49" stroke={color} strokeWidth="1.5" markerEnd="url(#arr6c)" />
            ))}
            {/* Enformer boxes on top */}
            {[
              { x: 15, w: 130, label: 'Sequencia DNA 196kb', sub: 'one-hot 4x196608', fill: 'var(--bg-secondary)', stroke: 'var(--card-border)', c: '#e2e8f0' },
              { x: 165, w: 120, label: 'Conv layers iniciais', sub: 'motivos locais, 128bp', fill: '#f9731618', stroke: '#f9731650', c: color },
              { x: 305, w: 150, label: '11 Transformer Blocks', sub: '12 heads, 1536 dim, 196kb', fill: '#f9731630', stroke: color, c: color },
              { x: 475, w: 160, label: '5313 tracks epigenomicos', sub: 'ATAC, H3K27ac, CAGE — 128bp', fill: 'var(--bg-secondary)', stroke: 'var(--card-border)', c: '#e2e8f0' },
            ].map((b, i) => (
              <g key={i}>
                <rect x={b.x} y="33" width={b.w} height="32" fill={b.fill} stroke={b.stroke} rx="5" />
                <text x={b.x + b.w / 2} y="50" fill={b.c} fontSize="9" textAnchor="middle" fontWeight={b.c === color ? '700' : '400'}>{b.label}</text>
                <text x={b.x + b.w / 2} y="62" fill="#94a3b8" fontSize="7.5" textAnchor="middle">{b.sub}</text>
              </g>
            ))}
            {[
              { label: 'ATAC-seq', c: '#f97316', vals: [1,1,2,5,12,14,10,6,3,1,1] },
              { label: 'H3K27ac', c: '#fb923c', vals: [1,1,2,4,10,12,9,5,2,1,1] },
              { label: 'CAGE (expr.)', c: '#fbbf24', vals: [0,1,1,3,7,10,8,5,2,1,0] },
            ].map((tr, ti) => {
              const yBase = 82 + ti * 42;
              return (
                <g key={ti}>
                  <text x="477" y={yBase + 11} fill={tr.c} fontSize="8.5">{tr.label}</text>
                  {tr.vals.map((v, i) => (
                    <rect key={i} x={535 + i * 19} y={yBase + 18 - v * 2} width="17" height={v * 2} fill={tr.c} opacity="0.8" rx="1" />
                  ))}
                  <line x1="533" y1={yBase + 19} x2="750" y2={yBase + 19} stroke="var(--card-border)" strokeWidth="0.5" />
                </g>
              );
            })}

            <line x1="15" y1="192" x2="760" y2="192" stroke="var(--card-border)" strokeWidth="1" />
            <text x="15" y="210" fill={color} fontSize="11" fontWeight="700">Predicao de Efeito de Variantes (GWAS)</text>
            <rect x="15" y="220" width="175" height="26" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" rx="5" />
            <text x="102" y="237" fill="#e2e8f0" fontSize="9" textAnchor="middle">Alelo referencia -&gt; predicao REF</text>
            <rect x="15" y="250" width="175" height="26" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" rx="5" />
            <text x="102" y="267" fill="#e2e8f0" fontSize="9" textAnchor="middle">Alelo alternativo -&gt; predicao ALT</text>
            <line x1="190" y1="233" x2="210" y2="248" stroke="#94a3b8" strokeWidth="1" />
            <line x1="190" y1="263" x2="210" y2="248" stroke="#94a3b8" strokeWidth="1" />
            <rect x="210" y="233" width="145" height="30" fill="#f9731620" stroke={color} rx="5" />
            <text x="282" y="251" fill={color} fontSize="9" textAnchor="middle" fontWeight="700">delta track = impacto regulatorio</text>
            <line x1="355" y1="248" x2="375" y2="248" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr6c)" />
            <rect x="375" y="215" width="365" height="62" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" rx="6" />
            <text x="557" y="235" fill="#e2e8f0" fontSize="9" textAnchor="middle">Interpretacao de hits GWAS nao-codificantes</text>
            <text x="557" y="252" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Pearson R=0.85 para predicao CAGE a partir de DNA</text>
            <text x="557" y="268" fill="#94a3b8" fontSize="8.5" textAnchor="middle">Borzoi (2024): strand-specific para RNA-seq</text>

            <defs>
              <marker id="arr6c" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill={color} />
              </marker>
            </defs>
          </svg>
        </div>
        <p style={S.p}>O Enformer (DeepMind/Calico, Nature Methods 2021) e o modelo de deep learning mais poderoso para predicao de regulacao genica a partir de sequencia de DNA. Combina CNN para capturar motivos locais (filtros de 4-15bp aprendem binding sites de TF) com Transformer para relacoes de longo alcance ate 196kb. Foi treinado em 5313 tracks epigenomicos humanos e murinos (ENCODE, ROADMAP).</p>
        <p style={S.p}>Obteve Pearson R=0.85 para predicao de CAGE (expressao genica) a partir de sequencia de DNA — estado da arte. A predicao de efeito de variantes compara a predicao para o alelo referencia vs alternativo, quantificando o impacto regulatorio de variantes nao-codificantes — essencial para interpretar hits de GWAS em regioes regulatorias.</p>
        <div style={S.highlight}>O Evo (Arc Institute, 2024) e um modelo de linguagem treinado em 2.7M genomas procarioticos — compreende evolucao e funcao a nivel de sequencia genomica completa, abrindo caminho para o design de genomas sinteticos funcionais.</div>
      </div>

      <hr style={S.divider} />

      {/* Section 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Epigenomica de Celula Unica</h2>
        <div style={S.diagram}>
          <svg viewBox="0 0 780 310" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="310" fill="var(--bg-secondary)" rx="10" />
            <text x="15" y="22" fill={color} fontSize="11" fontWeight="700">Modalidades de Epigenomica de Celula Unica</text>
            {[
              { label: 'scATAC-seq', sub: '200k picos, 1-5% por celula', c: color },
              { label: 'scCUT&TAG', sub: 'marcas de histonas por celula', c: '#fb923c' },
              { label: 'SHARE-seq', sub: 'RNA + ATAC mesma celula', c: '#f59e0b' },
              { label: 'Spatial ATAC', sub: 'acessibilidade + coordenadas', c: '#fbbf24' },
            ].map((m, i) => (
              <g key={i}>
                <rect x={15 + i * 182} y="32" width="168" height="50" fill="rgba(249,115,22,0.06)" stroke={m.c} rx="7" />
                <text x={99 + i * 182} y="54" fill={m.c} fontSize="10" textAnchor="middle" fontWeight="700">{m.label}</text>
                <text x={99 + i * 182} y="70" fill="#94a3b8" fontSize="8.5" textAnchor="middle">{m.sub}</text>
              </g>
            ))}

            <text x="15" y="108" fill={color} fontSize="10" fontWeight="700">Integracao scRNA-seq + scATAC-seq</text>
            {/* integration: boxes first */}
            <rect x="15" y="118" width="162" height="34" fill="var(--bg-secondary)" stroke="var(--card-border)" rx="6" />
            <text x="96" y="135" fill="#e2e8f0" fontSize="9.5" textAnchor="middle">scRNA-seq</text>
            <text x="96" y="147" fill="#94a3b8" fontSize="8" textAnchor="middle">expressao genica</text>
            <rect x="195" y="118" width="162" height="34" fill="var(--bg-secondary)" stroke="var(--card-border)" rx="6" />
            <text x="276" y="135" fill="#e2e8f0" fontSize="9.5" textAnchor="middle">scATAC-seq</text>
            <text x="276" y="147" fill="#94a3b8" fontSize="8" textAnchor="middle">acessibilidade cromatina</text>
            <rect x="15" y="172" width="342" height="28" fill="#f9731618" stroke="#f9731650" rx="6" />
            <text x="186" y="190" fill={color} fontSize="9" textAnchor="middle">Peak-to-gene correlation → pares enhancer-gene candidatos</text>
            <rect x="15" y="220" width="342" height="28" fill="var(--bg-secondary)" stroke="var(--card-border)" rx="6" />
            <text x="186" y="238" fill="#e2e8f0" fontSize="9" textAnchor="middle">Validacao CRISPR → links causais confirmados</text>
            {/* arrows on top */}
            <line x1="96" y1="153" x2="96" y2="170" stroke={color} strokeWidth="1.5" markerEnd="url(#arr6d)" />
            <line x1="276" y1="153" x2="276" y2="170" stroke={color} strokeWidth="1.5" markerEnd="url(#arr6d)" />
            <line x1="177" y1="135" x2="195" y2="135" stroke={color} strokeWidth="1.5" />
            <line x1="186" y1="201" x2="186" y2="218" stroke={color} strokeWidth="1.5" markerEnd="url(#arr6d)" />

            <line x1="395" y1="100" x2="395" y2="300" stroke="var(--card-border)" strokeWidth="1" />
            <text x="410" y="108" fill={color} fontSize="10" fontWeight="700">ArchR / Signac — Workflow</text>
            {/* ArchR boxes first */}
            {[
              { step: 'Dados scATAC-seq (matriz binaria)', fill: 'var(--bg-secondary)', stroke: 'var(--card-border)', c: '#e2e8f0' },
              { step: 'LSI (Latent Semantic Indexing)', fill: `${color}18`, stroke: `${color}50`, c: color },
              { step: 'UMAP — visualizacao de celulas', fill: 'var(--bg-secondary)', stroke: 'var(--card-border)', c: '#e2e8f0' },
              { step: 'Identificacao de clusters celulares', fill: `${color}18`, stroke: `${color}50`, c: color },
              { step: 'Peak-to-gene linking (pseudobulk)', fill: 'var(--bg-secondary)', stroke: 'var(--card-border)', c: '#e2e8f0' },
            ].map((s, i) => (
              <g key={i}>
                <rect x="410" y={118 + i * 38} width="355" height="28" fill={s.fill} stroke={s.stroke} rx="5" />
                <text x="587" y={136 + i * 38} fill={s.c} fontSize="9.5" textAnchor="middle">{s.step}</text>
              </g>
            ))}
            {/* ArchR arrows on top, between boxes */}
            {[0,1,2,3].map(i => (
              <line key={i} x1="587" y1={147 + i * 38} x2="587" y2={155 + i * 38} stroke={color} strokeWidth="1.5" markerEnd="url(#arr6d)" />
            ))}
            <text x="410" y="305" fill="#94a3b8" fontSize="8">LSI mais adequado que PCA para dados de acessibilidade binaria</text>

            <defs>
              <marker id="arr6d" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill={color} />
              </marker>
            </defs>
          </svg>
        </div>
        <p style={S.p}>A epigenomica de celula unica permite perfis regulatorios heterogeneos entre celulas do mesmo tecido. O scATAC-seq (10x Genomics) mede acessibilidade de cromatina em celulas individuais — cerca de 200k picos potenciais mas apenas 1-5% detectados por celula (ainda mais esparso que scRNA-seq). O ArchR e o Signac usam LSI (Latent Semantic Indexing) em vez de PCA para dados de acessibilidade binaria — mais adequado para a distribuicao dos dados.</p>
        <p style={S.p}>O peak-to-gene linking correlaciona picos de ATAC com expressao genica proxima em pseudobulk, identificando pares enhancer-gene candidatos. O SHARE-seq e o 10x Multiome medem RNA e ATAC na mesma celula, ligando regulacao a expressao directamente.</p>
        <div style={S.highlight}>O Perturb-seq combina CRISPR knockouts com readout de scRNA-seq para construir mapas causais de redes regulatorias — perturbacao sistematica de cada gene com medicao do transcriptoma de cada celula, a escala genomica.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>ChIP-seq e ATAC-seq</strong> — ChIP-seq mapeia locais de ligação de factores de transcrição e marcas de histonas; ATAC-seq identifica cromatina acessível (regiões regulatórias activas); MACS3 chama peaks; ambos revelam a arquitectura regulatória do genoma.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Metilacao do DNA e Relogio Epigenetico</strong> — metilação em CpGs reprime expressão génica; arrays Illumina EPIC medem 850K sites; o relógio de Horvath prediz idade biológica a partir do padrão de metilação com precisão &lt;3.6 anos — biomarcador de envelhecimento e exposição ambiental.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Redes de Regulacao Genica</strong> — GRNs modelam como TFs regulam genes alvo; SCENIC usa co-expressão e motifs de TF para inferir regulons activos por célula; GRNBoost2 é mais escalável para atlas de células completos — relevante para compreender desenvolvimento e doença.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Enformer e Deep Learning para Regulacao</strong> — Enformer (DeepMind) usa transformers sobre sequências de 200kb de DNA para prever perfis de expressão génica e ChIP-seq com correlação &gt;0.9 com dados reais — o modelo mais poderoso para predição de regulação a partir de sequência.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Epigenomica de Celula Unica</strong> — scATAC-seq, scChIP-seq e CUT&TAG permitem medir epigenoma célula a célula; ArchR e SnapATAC2 implementam pipelines de análise; a resolução de célula única revela heterogeneidade epigenética em tumores e tecidos em desenvolvimento.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
