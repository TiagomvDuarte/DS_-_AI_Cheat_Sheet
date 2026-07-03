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

const m = modules[7];

function MSSVg() {
  return (
    <svg viewBox="0 0 760 270" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="760" height="270" fill="var(--bg-secondary)" rx="8" />
      <text x="380" y="22" fill={color} fontSize="11" fontWeight="700" textAnchor="middle">Mass Spectrometry — Pipeline LC-MS/MS</text>
      {/* Boxes first */}
      {[
        { x: 20, label: 'Amostra\nProteica', sub: 'lisado celular\ntecido / plasma' },
        { x: 140, label: 'Digestão\nTríptica', sub: 'tripsina corta\nem K e R' },
        { x: 260, label: 'LC\nSeparação', sub: 'coluna C18\ngradiente ACN' },
        { x: 380, label: 'ESI\nIonização', sub: 'electrospray\n2+ / 3+ ions' },
        { x: 500, label: 'MS1\nPrecursor', sub: 'm/z espectro\npeptídeo inteiro' },
        { x: 620, label: 'MS2\nFragmentação', sub: 'HCD fragmentation\niões b e y' },
      ].map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="40" width="105" height="55" rx="6" fill={`${color}18`} stroke={color} strokeWidth="1" />
          {s.label.split('\n').map((l, j) => (
            <text key={j} x={s.x + 52} y={53 + j * 13} fill={color} fontSize="9" fontWeight="700" textAnchor="middle">{l}</text>
          ))}
          {s.sub.split('\n').map((sub, j) => (
            <text key={j} x={s.x + 52} y={80 + j * 10} fill="#94a3b8" fontSize="7.5" textAnchor="middle">{sub}</text>
          ))}
        </g>
      ))}
      {/* Arrows on top */}
      {[20, 140, 260, 380, 500].map((x, i) => (
        <polygon key={i} points={`${x + 107},60 ${x + 117},63 ${x + 107},66`} fill={color} />
      ))}
      <text x="20" y="120" fill="#94a3b8" fontSize="9" fontWeight="700">IDENTIFICACAO E QUANTIFICACAO</text>
      {[
        { method: 'Database Search', tools: 'MaxQuant, MSFragger, Andromeda', desc: 'compara espectros MS2 com peptídeos teóricos do proteoma — FDR 1%' },
        { method: 'Label-Free Quant (LFQ)', tools: 'MaxQuant LFQ', desc: 'normalização por intensidade de iões MS1 — compara amostras sem marcação' },
        { method: 'TMT / iTRAQ', tools: 'Proteome Discoverer', desc: 'marcação isobárica permite multiplexar 6-18 amostras num único run' },
        { method: 'DIA / SWATH', tools: 'DIA-NN, Spectronaut', desc: 'fragmenta todas as janelas m/z — maior cobertura e reprodutibilidade' },
        { method: 'de novo Sequencing', tools: 'DeepNovo, Casanovo', desc: 'ML prediz sequência directamente do espectro — sem base de dados de referência' },
      ].map((r, i) => (
        <g key={i}>
          <rect x="20" y={128 + i * 26} width="720" height="24" rx="3" fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'transparent'} />
          <text x="28" y={144 + i * 26} fill={color} fontSize="9" fontWeight="700">{r.method}</text>
          <text x="190" y={144 + i * 26} fill="#fb923c" fontSize="8.5">{r.tools}</text>
          <text x="370" y={144 + i * 26} fill="#e2e8f0" fontSize="8.5">{r.desc}</text>
        </g>
      ))}
      <text x="20" y="268" fill="#64748b" fontSize="8">LC = Liquid Chromatography | ESI = Electrospray Ionisation | HCD = Higher-energy Collisional Dissociation | DIA = Data-Independent Acquisition | FDR = False Discovery Rate</text>
    </svg>
  );
}

function ProteomicsWorkflowSVG() {
  return (
    <svg viewBox="0 0 760 310" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="760" height="310" fill="var(--bg-secondary)" rx="8" />
      <text x="380" y="22" fill={color} fontSize="11" fontWeight="700" textAnchor="middle">Análise Proteómica — MaxQuant e DIA-NN</text>
      <text x="20" y="42" fill="#94a3b8" fontSize="9" fontWeight="700">PIPELINE MaxQuant (DDA)</text>
      {/* Boxes first */}
      {[
        { x: 20, label: 'Raw files\n.raw Thermo', w: 110 },
        { x: 150, label: 'Andromeda\nPeptide Search', w: 120 },
        { x: 290, label: 'Protein\nGrouping', w: 110 },
        { x: 420, label: 'LFQ\nNormalization', w: 110 },
        { x: 550, label: 'Perseus\nStatistics', w: 70 },
        { x: 640, label: 'Volcano\nPlot / Heatmap', w: 110 },
      ].map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="50" width={s.w} height="40" rx="5" fill={`${color}15`} stroke={color} strokeWidth="1" />
          {s.label.split('\n').map((l, j) => (
            <text key={j} x={s.x + s.w / 2} y={64 + j * 13} fill={color} fontSize="8" fontWeight="700" textAnchor="middle">{l}</text>
          ))}
        </g>
      ))}
      {/* Arrows on top */}
      {[{x:20,w:110},{x:150,w:120},{x:290,w:110},{x:420,w:110},{x:550,w:70}].map((s,i) => (
        <polygon key={i} points={`${s.x+s.w+2},67 ${s.x+s.w+10},70 ${s.x+s.w+2},73`} fill={color} />
      ))}
      <text x="20" y="115" fill="#94a3b8" fontSize="9" fontWeight="700">COBERTURA PROTEÓMICA TIPICA</text>
      {[
        { label: 'Lisado celular (HEK293)', n: '8000-10000', coverage: 85 },
        { label: 'Plasma humano (depleção albumina)', n: '500-700', coverage: 20 },
        { label: 'Tecido tumoral FFPE', n: '3000-5000', coverage: 45 },
        { label: 'Exossomas / EVs', n: '1000-2000', coverage: 35 },
      ].map((r, i) => (
        <g key={i}>
          <text x="28" y={130 + i * 20} fill="#e2e8f0" fontSize="8.5">{r.label}</text>
          <text x="320" y={130 + i * 20} fill={color} fontSize="8.5" fontWeight="700">{r.n} proteínas</text>
          <rect x="440" y={120 + i * 20} width="280" height="12" rx="3" fill="rgba(249,115,22,0.06)" />
          <rect x="440" y={120 + i * 20} width={r.coverage * 2.8} height="12" rx="3" fill={`${color}60`} />
          <text x="725" y={130 + i * 20} fill="#64748b" fontSize="8">{r.coverage}%</text>
        </g>
      ))}
      <text x="20" y="208" fill="#94a3b8" fontSize="9" fontWeight="700">DIA-NN vs MaxQuant — COMPARACAO</text>
      {[
        ['', 'MaxQuant (DDA)', 'DIA-NN (DIA)', 'Vantagem'],
        ['Aquisição', 'Data-Dependent (top N)', 'Data-Independent (all m/z)', 'DIA: mais completo'],
        ['Reprodutibilidade', 'Moderada', 'Alta (mesmos peptídeos)', 'DIA: mais consistente'],
        ['Profundidade', '6000-8000 proteínas', '8000-10000 proteínas', 'DIA: mais profundo'],
        ['Velocidade', 'Lenta (GPU: N/A)', 'Muito rápida (GPU)', 'DIA-NN: mais rápido'],
      ].map((r, i) => (
        <g key={i}>
          <rect x="20" y={215 + i * 20} width="720" height="19" rx="2" fill={i === 0 ? `${color}15` : i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'transparent'} />
          {r.map((cell, j) => (
            <text key={j} x={[28, 130, 310, 490, 650][j]} y={228 + i * 20} fill={i === 0 ? color : j === 3 ? color : j === 0 ? '#e2e8f0' : '#94a3b8'} fontSize="8.5" fontWeight={i === 0 ? '700' : j === 0 ? '600' : '400'}>{cell}</text>
          ))}
        </g>
      ))}
    </svg>
  );
}

function MetabolomicsSVG() {
  return (
    <svg viewBox="0 0 760 290" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="760" height="270" fill="var(--bg-secondary)" rx="8" />
      <text x="380" y="22" fill={color} fontSize="11" fontWeight="700" textAnchor="middle">Metabolómica — Plataformas e Análise</text>
      <text x="20" y="42" fill="#94a3b8" fontSize="9" fontWeight="700">METABOLOMICA UNTARGETED vs TARGETED</text>
      {[
        { x: 20, title: 'Untargeted', color2: color, items: ['LC-MS/MS ou GC-MS', 'Detecta 1000-20000 features', 'Identificação por HMDB/METLIN', 'Descobre metabolitos novos', 'Análise mais complexa'] },
        { x: 390, title: 'Targeted', color2: '#f97316', items: ['MRM / PRM (Selected Reactions)', 'Quantifica 50-500 metabolitos', 'Painéis pré-definidos (OA Panel)', 'Alta sensibilidade e reprodutibilidade', 'Adequado para biomarkers clínicos'] },
      ].map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="50" width="340" height="105" rx="6" fill={`${p.color2}12`} stroke={p.color2} strokeWidth="1" />
          <text x={p.x + 170} y="66" fill={p.color2} fontSize="10" fontWeight="700" textAnchor="middle">{p.title}</text>
          {p.items.map((item, j) => (
            <g key={j}>
              <circle cx={p.x + 15} cy={80 + j * 15} r="2.5" fill={p.color2} />
              <text x={p.x + 24} y={84 + j * 15} fill="#e2e8f0" fontSize="8.5">{item}</text>
            </g>
          ))}
        </g>
      ))}
      <text x="20" y="178" fill="#94a3b8" fontSize="9" fontWeight="700">BASES DE DADOS DE METABOLITOS</text>
      {[
        { db: 'HMDB', full: 'Human Metabolome Database', content: '220k metabolitos humanos com espectros de referência MS e NMR' },
        { db: 'METLIN', full: 'Scripps Research', content: 'mais de 850k metabolitos, maior base de dados de espectros MS/MS' },
        { db: 'MetaboLights', full: 'EMBL-EBI', content: 'repositório público de estudos de metabolómica (dados + metadata)' },
        { db: 'Recon3D', full: 'Human metabolic network', content: 'modelo de reconstrução do metabolismo humano — 13k reacções, 4k metabolitos' },
      ].map((r, i) => (
        <g key={i}>
          <rect x="20" y={185 + i * 20} width="720" height="18" rx="3" fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'transparent'} />
          <text x="28" y={198 + i * 20} fill={color} fontSize="8.5" fontWeight="700">{r.db}</text>
          <text x="100" y={198 + i * 20} fill="#94a3b8" fontSize="8">{r.full}</text>
          <text x="300" y={198 + i * 20} fill="#64748b" fontSize="8">{r.content}</text>
        </g>
      ))}
      <text x="20" y="284" fill="#64748b" fontSize="8">GC-MS = Gas Chromatography-Mass Spectrometry | MRM = Multiple Reaction Monitoring | HMDB = Human Metabolome Database | NMR = Nuclear Magnetic Resonance</text>
    </svg>
  );
}

function MultiOmicsIntegrationSVG() {
  return (
    <svg viewBox="0 0 760 295" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="760" height="295" fill="var(--bg-secondary)" rx="8" />
      <text x="380" y="22" fill={color} fontSize="11" fontWeight="700" textAnchor="middle">Integração Multi-ómica — Do Genoma ao Metaboloma</text>
      {/* Layers */}
      {[
        { y: 38, label: 'GENÓMICA', color2: '#f97316', items: 'SNPs, CNVs, mutações somáticas', tool: 'WGS / WES' },
        { y: 78, label: 'TRANSCRIPTÓMICA', color2: '#f97316', items: 'expressão génica, splicing, lncRNA', tool: 'RNA-seq / scRNA-seq' },
        { y: 118, label: 'PROTEÓMICA', color2: color, items: 'abundância e modificações proteicas', tool: 'LC-MS/MS / DIA-NN' },
        { y: 158, label: 'METABOLÓMICA', color2: '#f97316', items: 'metabolitos, fluxos metabólicos', tool: 'LC-MS/MS / NMR' },
        { y: 198, label: 'EPIGENÓMICA', color2: '#f97316', items: 'metilação, acessibilidade cromatina', tool: 'WGBS / ATAC-seq' },
      ].map((l, i) => (
        <g key={i}>
          <rect x="20" y={l.y} width="460" height="30" rx="4" fill={`${l.color2}15`} stroke={l.color2} strokeWidth="1" />
          <text x="28" y={l.y + 12} fill={l.color2} fontSize="8.5" fontWeight="700">{l.label}</text>
          <text x="28" y={l.y + 24} fill="#94a3b8" fontSize="8">{l.items}</text>
          <text x="370" y={l.y + 18} fill={l.color2} fontSize="8" textAnchor="middle">{l.tool}</text>
        </g>
      ))}
      {/* Integration methods */}
      <rect x="510" y="38" width="230" height="240" rx="8" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
      <text x="625" y="55" fill={color} fontSize="9" fontWeight="700" textAnchor="middle">MÉTODOS DE INTEGRAÇÃO</text>
      {[
        { method: 'MOFA+', desc: 'Matrix factorization\nmulti-modal' },
        { method: 'mixOmics', desc: 'PLS-DA / DIABLO\npara classificação' },
        { method: 'RGCCA', desc: 'Regularized canonical\ncorrelation' },
        { method: 'scVI-tools', desc: 'VAE para dados\nde célula única' },
        { method: 'Proteogenomics', desc: 'WES + proteómica\nidentifica neoantigénios' },
        { method: 'CPTAC', desc: 'NCI proteomics\ncancer atlas' },
      ].map((m2, i) => (
        <g key={i}>
          <text x="522" y={70 + i * 34} fill={color} fontSize="8.5" fontWeight="700">{m2.method}</text>
          {m2.desc.split('\n').map((d, j) => (
            <text key={j} x="522" y={81 + i * 34 + j * 11} fill="#94a3b8" fontSize="7.5">{d}</text>
          ))}
        </g>
      ))}
      <text x="20" y="285" fill="#94a3b8" fontSize="9" fontWeight="700">CPTAC — Cancer Proteome Atlas</text>
      <text x="20" y="295" fill="#64748b" fontSize="8">Integração WES + RNA-seq + proteómica + fosfoproteómica em 10 tipos de cancro — identifica proteínas oncogénicas sem mutação génica detectável</text>
    </svg>
  );
}

function MLProteomicsSVG() {
  return (
    <svg viewBox="0 0 760 300" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="760" height="300" fill="var(--bg-secondary)" rx="8" />
      <text x="380" y="22" fill={color} fontSize="11" fontWeight="700" textAnchor="middle">ML em Proteómica e Metabolómica</text>
      <text x="20" y="42" fill="#94a3b8" fontSize="9" fontWeight="700">APLICACOES DE ML</text>
      {[
        { title: 'Predição de Espectros MS', tool: 'Prosit / AlphaPept', d1: 'transformer treinado em 55M péptidos prediz fragmentação MS2', d2: 'e tempo de retenção R=0.97 — permite DIA sem biblioteca experimental' },
        { title: 'de novo Sequencing', tool: 'Casanovo (2023)', d1: 'transformer seq-to-seq lê espectro MS2 e prediz sequência aminoácida', d2: 'útil para metaproteómica sem genoma de referência' },
        { title: 'Biomarker Discovery', tool: 'Random Forest / XGBoost', d1: 'selecciona painel mínimo de proteínas/metabolitos que discrimina grupos', d2: 'feature importance para interpretabilidade clínica' },
        { title: 'Predição de PTMs', tool: 'PhosphoSitePlus + DL', d1: 'prediz sítios de fosforilação, ubiquitinação e acetilação a partir de sequência', d2: 'ESM-2 embeddings como features' },
        { title: 'Flux Balance Analysis', tool: 'cobrapy + ML', d1: 'modelos constraint-based predizem flux metabólico', d2: 'ML substitui solver LP em células únicas (scFEA)' },
      ].map((a, i) => (
        <g key={i}>
          <rect x="20" y={50 + i * 44} width="720" height="40" rx="5" fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'transparent'} stroke={`${color}20`} strokeWidth="1" />
          <text x="28" y={66 + i * 44} fill={color} fontSize="8.5" fontWeight="700">{a.title}</text>
          <text x="28" y={79 + i * 44} fill="#64748b" fontSize="8">{a.tool}</text>
          <text x="230" y={65 + i * 44} fill="#e2e8f0" fontSize="8.5">{a.d1}</text>
          <text x="230" y={78 + i * 44} fill="#94a3b8" fontSize="8">{a.d2}</text>
        </g>
      ))}
      <text x="20" y="278" fill="#94a3b8" fontSize="9" fontWeight="700">PROSIT — Predição de Espectros MS com Transformer</text>
      <text x="20" y="290" fill="#64748b" fontSize="8">Treinado em 55M péptidos do ProteomeTools — prediz intensidades de fragmentos b/y e iRT. Permite criar bibliotecas in silico para DIA sem amostras de referência.</text>
    </svg>
  );
}

export default function BIO8() {
  const m = modules[7];
  return (
    <div style={S.page}>
      <Link to="/bioinformatics" style={S.back}><ArrowLeft size={16} /> Bioinformatics</Link>
      <div style={S.badge}>{m.num} — {m.topics[0]}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Mass Spectrometry — Fundamentos e Pipeline LC-MS/MS</h2>
        <p style={S.p}>A proteómica baseada em mass spectrometry (MS) é a tecnologia central para medir proteínas em larga escala — contrariamente à genómica, não há amplificação equivalente à PCR, pelo que a sensibilidade e a dinâmica de detecção são os principais desafios. O pipeline bottom-up (shotgun proteomics) é o mais comum: proteínas são digeridas com tripsina (corta após K e R), os péptidos resultantes são separados por cromatografia líquida (LC) e ionizados por electrospray (ESI) antes de entrarem no espectrómetro de massa.</p>
        <p style={S.p}>O espectrómetro mede a razão massa/carga (m/z) dos péptidos inteiros (MS1, survey scan) e depois isola e fragmenta cada péptido seleccionado produzindo espectro de fragmentação (MS2) — os iões b (N-terminal) e y (C-terminal) da escada de fragmentação permitem inferir a sequência de aminoácidos. O Orbitrap (Thermo Fisher) é o analisador de massão de alta resolução dominante (resolução de 120.000-500.000 FWHM) — permite identificar péptidos a partir da massa exacta com erro inferior a 2 ppm. Num único experimento bottom-up, identificam-se tipicamente 6000-10000 proteínas em lisados celulares.</p>
        <div style={S.diagram}><MSSVg /></div>
        <div style={S.highlight}>O DIA (Data-Independent Acquisition) com DIA-NN revolucionou a proteómica quantitativa: em vez de seleccionar apenas os péptidos mais abundantes (DDA), fragmenta sistematicamente todas as janelas m/z em cada ciclo — aumenta cobertura e reprodutibilidade entre amostras, essencial para estudos clínicos com centenas de amostras.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Análise Bioinformática — MaxQuant, Perseus e DIA-NN</h2>
        <p style={S.p}>O MaxQuant é o software de referência para análise de dados DDA de proteómica — integra o motor de busca Andromeda (compara espectros experimentais com péptidos teóricos gerados a partir do proteoma de referência UniProt), quantificação LFQ (Label-Free Quantification por intensidade de iões MS1), e identificação de modificações pós-translacionais (fosforilação, acetilação, ubiquitinação). O threshold padrão de FDR de 1% no nível de péptido e de proteína é atingido por target-decoy approach (base de dados invertida).</p>
        <p style={S.p}>O Perseus é o software de análise estatística integrado com MaxQuant — normalização, imputação de valores em falta (MNAR com distribuição gaussiana deslocada), volcano plots, análise de enriquecimento de vias (GSEA/ORA), e clustering hierárquico. Para dados DIA, o DIA-NN usa uma rede neuronal para predizer o score de correspondência espectro-péptido — suporta criação de bibliotecas in silico sem espectros de referência experimentais. A marcação isobárica TMT (Tandem Mass Tags) e iTRAQ permite multiplexar 6-18 amostras num único run, eliminando variabilidade técnica entre corridas de LC-MS.</p>
        <div style={S.diagram}><ProteomicsWorkflowSVG /></div>
        <div style={S.highlight}>O Spectronaut (Biognosys) e o DIA-NN definiram o estado da arte para DIA com bibliotecas espectrais — o Prosit (deep learning) prediz espectros de fragmentação com precisão suficiente para criar bibliotecas in silico sem qualquer amostra de referência, tornando qualquer proteoma sequenciável.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Metabolómica — Plataformas e Bases de Dados</h2>
        <p style={S.p}>A metabolómica mede o metaboloma — o conjunto de todos os pequenos metabolitos presentes numa célula ou biofluido (plasma, urina, LCR) em determinado momento. É a ómica mais próxima do fenótipo porque reflecte directamente a actividade enzimática e os fluxos metabólicos. A metabolómica untargeted por LC-MS/MS (ou GC-MS para metabolitos voláteis e apolares) detecta 1000-20000 features iónicas por amostra, mas apenas 20-40% são identificadas com confiança por comparação com bases de dados de espectros de referência.</p>
        <p style={S.p}>O HMDB (Human Metabolome Database) contém mais de 220k metabolitos humanos com estruturas, espectros MS e NMR e informação bioquímica; o METLIN tem mais de 850k compostos com espectros MS/MS a múltiplas energias de colisão. A metabolómica targeted (MRM, Multiple Reaction Monitoring) quantifica painéis de 50-500 metabolitos com alta sensibilidade e reprodutibilidade — adequada para biomarcadores clínicos. O Metabolon é a plataforma comercial dominante para estudos populacionais — painel de 1500 metabolitos identificados com alta confidência. A análise de enriquecimento de vias usa o MetaboAnalyst e o KEGG/Reactome.</p>
        <div style={S.diagram}><MetabolomicsSVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Integração Multi-ómica — Do Genoma ao Metaboloma</h2>
        <p style={S.p}>A integração de múltiplas camadas ómicas fornece uma visão sistémica da biologia que nenhuma ómica individual captura. A proteogenómica integra sequenciamento exómico (WES) com proteómica — identifica proteínas com mutações que alteram a função ou que são neo-antigénios para imunoterapia. O CPTAC (Clinical Proteomic Tumor Analysis Consortium) do NCI produziu a integração mais completa: WES + RNA-seq + proteómica + fosfoproteómica em 10 tipos de cancro, revelando alterações proteicas oncogénicas sem mutação génica detectável.</p>
        <p style={S.p}>O MOFA+ (Multi-Omics Factor Analysis) é o método de integração não-supervisionada mais utilizado — decompõe a variância de múltiplas matrizes em factores latentes partilhados e modalidade-específicos; os factores de covariância alta identificam processos biológicos trans-ómicos. O DIABLO (mixOmics) é o método supervisionado para classificação multi-ómica com penalização para seleccionar biomarcadores mínimos. Para dados de célula única, o scVI e o totalVI (CITE-seq) integram modalidades com variational autoencoders que modelam distribuições de contagem separadas por modalidade.</p>
        <div style={S.diagram}><MultiOmicsIntegrationSVG /></div>
        <div style={S.highlight}>A proteogenómica do CPTAC revelou que os dados proteómicos e fosfoproteómicos de tumores com a mesma mutação KRAS são mais informativos para subtipar o cancro do que a genómica sozinha — o nível de proteína e o padrão de fosforilação capturam a actividade real das vias de sinalização.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. ML em Proteómica e Aplicações Clínicas</h2>
        <p style={S.p}>O deep learning está a transformar a proteómica computacional. O Prosit (Gessulat et al., Nature Methods 2019) usa um LSTM/transformer treinado em 55 milhões de péptidos do ProteomeTools para predizer espectros de fragmentação MS2 e tempos de retenção cromatográfica — correlação de Pearson R maior que 0.97 com espectros experimentais. Esta capacidade de predizer espectros permite criar bibliotecas espectrais in silico para qualquer organismo sem amostras de referência, tornando DIA acessível a qualquer proteoma. O Casanovo (2023) é um transformer de novo sequencing que prediz directamente a sequência de aminoácidos a partir do espectro MS2.</p>
        <p style={S.p}>Em metabolómica, o ML é aplicado a descoberta de biomarcadores: random forests e XGBoost seleccionam os metabolitos mais discriminantes entre grupos (doença vs controlo, resposta vs resistência), com feature importance para interpretabilidade. A análise de fluxo metabólico (Flux Balance Analysis) com modelos de reconstrução Recon3D integra dados de expressão génica para predizer actividade de vias metabólicas — o scFEA adapta esta abordagem para dados de célula única. O AlphaFold3 expande a predição estrutural a complexos proteína-ligando pequeno, com implicações directas para drug discovery baseado em estrutura.</p>
        <div style={S.diagram}><MLProteomicsSVG /></div>
        <div style={S.note}>A proteómica de plasma sem depleção usando DIA-NN e Orbitrap Astral (Thermo, 2023) identifica agora mais de 5000 proteínas em 5 minutos por amostra — um avanço de dois a três ordens de magnitude em throughput que torna viável rastrear o proteoma em estudos populacionais com dezenas de milhares de amostras (UK Biobank proteomics: 54k indivíduos × 2900 proteínas com Olink).</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Mass Spectrometry — Fundamentos e Pipeline LC-MS/MS</strong> — LC-MS/MS separa péptidos por cromatografia e mede massa/carga com precisão ppm; o pipeline: digestão tríptica → LC-MS/MS → busca em base de dados (SEQUEST, Andromeda) → quantificação (LFQ, TMT) — método de referência em proteómica.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Análise Bioinformática — MaxQuant, Perseus e DIA-NN</strong> — MaxQuant processa dados LC-MS/MS identificando e quantificando proteínas; Perseus aplica estatística (t-test, ANOVA, enriquecimento GO); DIA-NN é mais rápido para Data-Independent Acquisition — conjunto de ferramentas standard em proteómica.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Metabolómica — Plataformas e Bases de Dados</strong> — NMR e LC-MS/GC-MS medem metabolitos em plasma, urina ou tecidos; HMDB, MetaboLights e KEGG anotam metabolitos; XCMS processa dados LC-MS — metabolómica captura o fenótipo bioquímico mais próximo da fisiologia actual.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Integração Multi-ómica — Do Genoma ao Metaboloma</strong> — MOFA+, mixOmics e DepthMap integram dados genómicos, transcriptómicos, proteómicos e metabolómicos para identificar eixos de variação biológica partilhados — necessário para compreensão sistémica de doenças complexas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>ML em Proteómica e Aplicações Clínicas</strong> — Prosit prevê intensidades de fragmentação MS/MS para identificação mais precisa; DeepMSPeptide prediz detectabilidade de péptidos; painéis proteómicos plasmáticos (Olink, SomaScan) com ML detectam doenças anos antes dos sintomas.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
