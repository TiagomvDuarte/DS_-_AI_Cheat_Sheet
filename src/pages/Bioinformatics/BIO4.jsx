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

const m = modules[3];

function ProteinStructSVG() {
  return (
    <svg viewBox="0 0 700 220" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="220" fill="var(--bg-secondary)" rx="10" />
      {[
        { level: 'Primária', desc: 'sequência de aminoácidos', example: 'Met-Ala-Gly-Lys-...', col: '#f97316' },
        { level: 'Secundária', desc: 'alfa-hélice / folha-beta', example: 'pontes H intra/inter cadeia', col: '#f97316' },
        { level: 'Terciária', desc: 'dobramento 3D completo', example: 'X-ray / cryo-EM / NMR', col: color },
        { level: 'Quaternária', desc: 'assemblagem multicadeia', example: 'hemoglobina tetrâmero', col: '#f97316' },
      ].map((s, i) => (
        <g key={i}>
          <rect x={18 + i * 170} y="25" width="154" height="100" rx="7" fill="rgba(249,115,22,0.06)" stroke={s.col} strokeWidth="1.5" />
          <text x={95 + i * 170} y="47" textAnchor="middle" fill={s.col} fontSize="11" fontWeight="700">{s.level}</text>
          <text x={95 + i * 170} y="67" textAnchor="middle" fill="#f8fafc" fontSize="9">{s.desc}</text>
          <text x={95 + i * 170} y="85" textAnchor="middle" fill="#94a3b8" fontSize="8">{s.example}</text>
        </g>
      ))}
      {/* PDB growth */}
      <text x="350" y="155" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="700">Estruturas no PDB</text>
      {[['Antes AlphaFold (2021)', '180 000', '#fb923c', 85], ['AlphaFold DB (2024)', '214M', color, 370]].map(([label, disp, c, w], i) => (
        <g key={i}>
          <text x="50" y={180 + i * 22} fill="#94a3b8" fontSize="10">{label}</text>
          <rect x="260" y={168 + i * 22} width={w} height="14" rx="3" fill={c} opacity="0.8" />
          <text x="645" y={180 + i * 22} fill={c} fontSize="10" fontWeight="600">{disp}</text>
        </g>
      ))}
    </svg>
  );
}

function AlphaFoldSVG() {
  return (
    <svg viewBox="0 0 700 230" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="230" fill="var(--bg-secondary)" rx="10" />
      <text x="350" y="12" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="700">Arquitectura AlphaFold2</text>
      {/* Input */}
      <rect x="20" y="35" width="120" height="55" rx="6" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="1.2" />
      <text x="80" y="57" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Input</text>
      <text x="80" y="72" textAnchor="middle" fill="#94a3b8" fontSize="8">Sequência + MSA</text>
      <text x="80" y="84" textAnchor="middle" fill="#94a3b8" fontSize="8">N × M homólogos</text>
      {/* Evoformer */}
      <rect x="165" y="25" width="200" height="75" rx="6" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="2" />
      <text x="265" y="47" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Evoformer (48 blocos)</text>
      <text x="265" y="63" textAnchor="middle" fill="#94a3b8" fontSize="9">MSA repr: M×N×256</text>
      <text x="265" y="76" textAnchor="middle" fill="#94a3b8" fontSize="9">Pair repr: N×N×128</text>
      <text x="265" y="89" textAnchor="middle" fill="#64748b" fontSize="8">row/col attention + outer product</text>
      {/* Structure module */}
      <rect x="395" y="25" width="170" height="75" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
      <text x="480" y="47" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Structure Module</text>
      <text x="480" y="63" textAnchor="middle" fill="#94a3b8" fontSize="9">8 blocos IPA</text>
      <text x="480" y="76" textAnchor="middle" fill="#94a3b8" fontSize="9">frames 3D por resíduo</text>
      <text x="480" y="89" textAnchor="middle" fill="#64748b" fontSize="8">backbone + side chains</text>
      {/* Output */}
      <rect x="590" y="35" width="100" height="55" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.2" />
      <text x="640" y="57" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Output</text>
      <text x="640" y="72" textAnchor="middle" fill="#94a3b8" fontSize="8">coord 3D + pLDDT</text>
      <defs>
        <marker id="af2arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <polygon points="0,0 6,3 0,6" fill={color} opacity="0.85" />
        </marker>
      </defs>
      {/* Arrows */}
      {[[140, 63], [365, 62], [565, 62]].map(([x, y], i) => (
        <line key={i} x1={x} y1={y} x2={x + 18} y2={y} stroke={color} strokeWidth="1.5" markerEnd="url(#af2arr)" opacity="0.85" />
      ))}
      {/* pLDDT */}
      <text x="350" y="130" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="700">Confiança pLDDT por resíduo</text>
      {[['> 90', 'Alta confiança', '#f97316'], ['70-90', 'Boa confiança', color], ['50-70', 'Baixa (desordenado)', '#f97316'], ['< 50', 'Muito baixa', '#f97316']].map(([range, desc, c], i) => (
        <g key={i}>
          <rect x={20 + i * 168} y="140" width="152" height="55" rx="5" fill="rgba(249,115,22,0.06)" stroke={c} strokeWidth="1" />
          <text x={96 + i * 168} y="160" textAnchor="middle" fill={c} fontSize="13" fontWeight="800">{range}</text>
          <text x={96 + i * 168} y="178" textAnchor="middle" fill="#94a3b8" fontSize="9">{desc}</text>
        </g>
      ))}
      <text x="350" y="218" textAnchor="middle" fill="#64748b" fontSize="9">CASP14: mediana GDT_TS maior que 92 — comparável a estruturas experimentais, gap de 20+ pontos sobre 2º lugar</text>
    </svg>
  );
}

function ModelCompSVG() {
  return (
    <svg viewBox="0 0 700 200" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="200" fill="var(--bg-secondary)" rx="10" />
      {['Modelo', 'Precisão', 'Velocidade', 'MSA', 'Moléculas'].map((h, i) => (
        <text key={i} x={20 + i * 136} y="26" fill="#94a3b8" fontSize="10" fontWeight="700">{h}</text>
      ))}
      <line x1="10" y1="32" x2="690" y2="32" stroke="var(--card-border)" strokeWidth="1" />
      {[
        { name: 'AlphaFold2', prec: '★★★★★', speed: '★★★', msa: 'Sim', mol: 'Proteínas', col: color },
        { name: 'RoseTTAFold', prec: '★★★★', speed: '★★★★', msa: 'Sim', mol: 'Proteínas', col: '#f97316' },
        { name: 'ESMFold', prec: '★★★★', speed: '★★★★★', msa: 'Não', mol: 'Proteínas', col: '#f97316' },
        { name: 'AlphaFold3', prec: '★★★★★', speed: '★★★', msa: 'Sim', mol: 'Prot+DNA+RNA+Lig', col: '#f97316' },
      ].map((r, i) => (
        <g key={i}>
          <rect x="10" y={40 + i * 36} width="680" height="32" rx="3" fill={i % 2 === 0 ? 'transparent' : 'rgba(249,115,22,0.06)'} />
          <rect x="10" y={40 + i * 36} width="4" height="32" fill={r.col} />
          <text x="22" y={61 + i * 36} fill="#f8fafc" fontSize="11" fontWeight="600">{r.name}</text>
          <text x="158" y={61 + i * 36} fill={r.col} fontSize="11">{r.prec}</text>
          <text x="294" y={61 + i * 36} fill="#94a3b8" fontSize="11">{r.speed}</text>
          <text x="430" y={61 + i * 36} fill="#94a3b8" fontSize="11">{r.msa}</text>
          <text x="566" y={61 + i * 36} fill="#94a3b8" fontSize="10">{r.mol}</text>
        </g>
      ))}
      <text x="350" y="192" textAnchor="middle" fill="#64748b" fontSize="9">Chai-1, Boltz-1: modelos open-source competitivos com AlphaFold3 — democratização do drug discovery</text>
    </svg>
  );
}

function DrugDiscoverySVG() {
  return (
    <svg viewBox="0 0 700 200" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="200" fill="var(--bg-secondary)" rx="10" />
      {[
        { label: 'Target ID', sub: 'AlphaFold\nestrutura', col: '#f97316' },
        { label: 'Hit Finding', sub: 'DiffDock\ndocking ML', col: '#f97316' },
        { label: 'Lead Optim.', sub: 'REINVENT\ngenerativo', col: color },
        { label: 'ADMET', sub: 'DeepTox\npropriedades', col: '#f97316' },
        { label: 'Pré-clínico', sub: 'modelos\nanimal', col: '#f97316' },
        { label: 'Clínico', sub: 'fase 1/2/3\nensaios', col: '#f97316' },
      ].map((s, i) => (
        <g key={i}>
          <rect x={15 + i * 113} y="20" width="97" height="80" rx="6" fill="rgba(249,115,22,0.06)" stroke={s.col} strokeWidth="1.2" />
          <text x={63 + i * 113} y="50" textAnchor="middle" fill={s.col} fontSize="10" fontWeight="700">{s.label}</text>
          {s.sub.split('\n').map((line, li) => (
            <text key={li} x={63 + i * 113} y={67 + li * 14} textAnchor="middle" fill="#94a3b8" fontSize="9">{line}</text>
          ))}
          {i < 5 && <polygon points={`${128+i*113},60 ${114+i*113},54 ${114+i*113},66`} fill={s.col} opacity="0.7" />}
        </g>
      ))}
      <text x="350" y="130" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="700">Tempo: tradicional 12-15 anos vs IA 5-8 anos | Custo: 2.6B USD por fármaco aprovado</text>
      <text x="350" y="150" textAnchor="middle" fill="#94a3b8" fontSize="10">Insilico Medicine: fármaco para fibrose pulmonar identificado com IA em 18 meses — fase 2 clínica</text>
      <text x="350" y="167" textAnchor="middle" fill="#64748b" fontSize="9">Espaço químico: 10^60 moléculas drug-like vs 10^8 sintetizadas até hoje — IA navega este espaço</text>
      <text x="350" y="184" textAnchor="middle" fill="#64748b" fontSize="9">DiffDock: difusão sobre conformações de ligando + receptor — supera docking clássico AutoDock Vina</text>
    </svg>
  );
}

function ProteinDesignSVG() {
  return (
    <svg viewBox="0 0 700 210" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="200" fill="var(--bg-secondary)" rx="10" />
      {/* Design cycle */}
      <circle cx="350" cy="100" r="70" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="5 3" />
      {[
        { label: 'RFdiffusion\nBackbone', angle: -90, col: color },
        { label: 'ProteinMPNN\nSequência', angle: -10, col: '#f97316' },
        { label: 'AlphaFold2\nValidação', angle: 70, col: '#f97316' },
        { label: 'Síntese &\nTeste', angle: 150, col: '#f97316' },
        { label: 'Aprendizagem\niterativa', angle: 220, col: '#f97316' },
      ].map((s, i) => {
        const rad = (s.angle * Math.PI) / 180;
        const cx = 350 + 70 * Math.cos(rad);
        const cy = 100 + 70 * Math.sin(rad);
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r="28" fill="var(--bg-secondary)" stroke={s.col} strokeWidth="2" />
            {s.label.split('\n').map((line, li) => (
              <text key={li} x={cx} y={cy - 4 + li * 11} textAnchor="middle" fill={s.col} fontSize="7.5" fontWeight="700">{line}</text>
            ))}
          </g>
        );
      })}
      <text x="350" y="97" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="700">Design</text>
      <text x="350" y="109" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="700">Proteico</text>
      <text x="350" y="205" textAnchor="middle" fill="#64748b" fontSize="9">Resultados: binders anti-citocinas, nanocages 120 cópias, enzimas para reacções não naturais, péptidos cíclicos orais</text>
    </svg>
  );
}

export default function BIO4() {
  return (
    <div style={S.page}>
      <Link to="/bioinformatics" style={S.back}>← Bioinformatics</Link>
      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. O Problema do Dobramento de Proteínas</h2>
        <p style={S.p}>O paradoxo de Levinthal (1969) questiona como uma proteína de 100 aminoácidos encontra o seu estado nativo em microssegundos se teria de explorar 10¹³⁰ conformações possíveis. A resposta é que o dobramento segue um funil energético — a energia livre diminui progressivamente até ao estado nativo. A estrutura primária é a sequência de aminoácidos; a secundária inclui alfa-hélices (3.6 resíduos por volta) e folhas-beta (pontes H inter-cadeia); a terciária é o dobramento 3D completo.</p>
        <p style={S.p}>As estruturas experimentais são determinadas por cristalografia de raios-X (60% das estruturas PDB), NMR (12%) e cryo-EM (28%, com crescimento acelerado). O CASP (Critical Assessment of Structure Prediction) é a competição bianual que mediu o progresso durante 50 anos — até o AlphaFold2 o ter revolucionado. O PDB passou de 180k estruturas experimentais para 214 milhões com o AlphaFold Database.</p>
        <div style={S.diagram}><ProteinStructSVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. AlphaFold2 — Arquitectura e Impacto</h2>
        <p style={S.p}>O AlphaFold2 (DeepMind, 2021) resolveu o problema do dobramento de proteínas com precisão atómica — considerado o maior avanço científico de ML dos últimos anos. O Evoformer processa co-evolução entre posições (MSA com M homólogos) e relações entre pares de resíduos simultaneamente. O Structure Module prediz frames rígidos (rotação + translação) para cada resíduo em 3D usando IPA (Invariant Point Attention), geometricamente equivariante.</p>
        <p style={S.p}>O pLDDT é a confiança por resíduo de 0 a 100 — valores acima de 90 indicam alta confiança, enquanto 50-70 frequentemente corresponde a regiões intrinsecamente desordenadas. No CASP14 o AlphaFold2 obteve mediana GDT_TS acima de 92, comparável a estruturas experimentais, com mais de 20 pontos de vantagem sobre o segundo lugar. A AlphaFold Database disponibiliza gratuitamente estruturas preditas para todos os proteomas conhecidos — mais de 200 milhões de proteínas.</p>
        <div style={S.diagram}><AlphaFoldSVG /></div>
        <div style={S.highlight}>AlphaFold2 usa MSA para capturar co-evolução — pares de posições que co-evoluem tendem a estar em contacto espacial na estrutura 3D. Esta é a intuição central da arquitectura Evoformer.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. RoseTTAFold, ESMFold e AlphaFold3</h2>
        <p style={S.p}>O sucesso do AlphaFold2 desencadeou uma vaga de inovação. O RoseTTAFold (Baker Lab, UW) usa uma arquitectura de 3 tractos (sequência, MSA, pares 3D) — código aberto e mais rápido. O ESMFold (Meta AI) usa embeddings ESM-2 sem MSA, produzindo estruturas em 60 segundos por proteína (vs horas do AlphaFold2), apenas ~3% menos preciso — permite predição em escala massiva de centenas de milhões de proteínas.</p>
        <p style={S.p}>O AlphaFold3 (2024) expande para todas as biomoléculas — proteínas, DNA, RNA, ligandos small molecule, metais e modificações pós-tradução — usando uma arquitectura de difusão. O Chai-1 e o Boltz-1 são modelos open-source competitivos com o AlphaFold3. O ColabFold democratiza o acesso ao AlphaFold2 com MSA mais rápido via MMseqs2, permitindo predições em minutos num Google Colab gratuito.</p>
        <div style={S.diagram}><ModelCompSVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Drug Discovery com IA</h2>
        <p style={S.p}>O drug discovery é uma das aplicações mais transformadoras da IA em bioinformática — o custo médio de desenvolvimento de um fármaco é de 2.6 mil milhões de dólares e leva 12-15 anos. O AlphaFold3 fornece estruturas de alvos proteicos que antes exigiam cristalização. O DiffDock usa difusão sobre conformações de ligando e receptor, superando o docking clássico AutoDock Vina em benchmarks de posing accuracy.</p>
        <p style={S.p}>O REINVENT (AstraZeneca) e o MolGPT geram moléculas novas com propriedades desejadas usando RL e transformers sobre SMILES. A predição de propriedades ADMET (Absorção, Distribuição, Metabolismo, Excreção, Toxicidade) filtra candidatos antes de síntese. A Isomorphic Labs (spin-off DeepMind) foca exclusivamente em drug discovery com AlphaFold3 e modelos generativos. A Insilico Medicine identificou um fármaco para fibrose pulmonar idiopática em 18 meses, actualmente em fase 2 clínica.</p>
        <div style={S.diagram}><DrugDiscoverySVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Design de Proteínas de Novo</h2>
        <p style={S.p}>O design de proteínas de novo — criar proteínas que não existem na natureza com funções precisas — é a fronteira mais excitante da biologia computacional. O RFdiffusion (Baker Lab, 2023) é um modelo de difusão que gera backbones condicionados em simetria, binding sites ou motivos estruturais. O ProteinMPNN, dado um backbone, gera sequências diversas que dobram nessa estrutura — 10x mais expressável em E. coli que o equivalente Rosetta.</p>
        <p style={S.p}>A combinação RFdiffusion + ProteinMPNN + validação AlphaFold2 permite um ciclo de design in silico antes de síntese física, com taxa de sucesso experimental de 10-20%. Resultados notáveis incluem binders de alta afinidade para IL-7 e TGF-β, nanocages icosaédricas de 120 cópias, péptidos cíclicos oralmente biodisponíveis (problema de 50 anos resolvido em 2023) e enzimas para reacções que não existem na natureza para química verde.</p>
        <div style={S.diagram}><ProteinDesignSVG /></div>
        <div style={S.note}>AlphaFold3 com difusão abre a próxima fronteira: co-design simultâneo de proteína + ligando + DNA — permitindo desenhar sistemas moleculares completos com funções precisas.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>O Problema do Dobramento de Proteínas</strong> — o problema de Anfinsen: a sequência de aminoácidos determina unicamente a estrutura 3D, mas o espaço conformacional tem 10³⁰⁰ possibilidades; resolver este problema é crítico porque a estrutura determina a função e a farmacologia.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>AlphaFold2 — Arquitectura e Impacto</strong> — AlphaFold2 (DeepMind, 2021) usa atenção sobre múltiplos alinhamentos de sequências (MSA) e pares de resíduos para prever estruturas com precisão atómica; resolveu o CASP14 com GDT&gt;90 para a maioria das proteínas — revolução na biologia estrutural.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>RoseTTAFold, ESMFold e AlphaFold3</strong> — RoseTTAFold (Baker Lab) usa arquitectura three-track (1D, 2D, 3D); ESMFold prediz estrutura directamente de embeddings ESM-2 sem MSA — 60× mais rápido que AlphaFold2; AlphaFold3 estende a predição a complexos proteína-DNA-ligando.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Drug Discovery com IA</strong> — ML acelera as fases de hit identification (QSAR, docking neural), lead optimisation (property prediction) e ADMET prediction; modelos de difusão molecular (DiffSBDD, DiffDock) geram ligandos de novo para alvos proteicos específicos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Design de Proteínas de Novo</strong> — RFDiffusion gera backbones proteicos a partir de ruído; ProteinMPNN desenha sequências que dobram na estrutura desejada; este pipeline permitiu criar proteínas com funções sem precedente — vacinas, nano-reactores e sensores moleculares.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
