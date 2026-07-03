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

const m = modules[2];

function EncodingSVG() {
  return (
    <svg viewBox="0 0 700 220" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="220" fill="var(--bg-secondary)" rx="10" />
      <text x="120" y="22" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="700">One-Hot Encoding</text>
      <text x="400" y="22" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="700">Embeddings Aprendidos (ESM-2)</text>
      {/* One-hot */}
      {['A','C','G','T'].map((b, i) => (
        <g key={b}>
          <text x="30" y={55 + i * 30} fill="#94a3b8" fontSize="11">{b}:</text>
          {[0,1,2,3].map(j => (
            <rect key={j} x={55 + j * 28} y={40 + i * 30} width="22" height="22" rx="3"
              fill={j === i ? color : '#1e293b'} stroke="var(--card-border)" strokeWidth="0.5" />
          ))}
          {[0,1,2,3].map(j => (
            <text key={j} x={66 + j * 28} y={55 + i * 30} textAnchor="middle"
              fill={j === i ? '#fff' : '#475569'} fontSize="10">{j === i ? '1' : '0'}</text>
          ))}
        </g>
      ))}
      <text x="120" y="185" textAnchor="middle" fill="#64748b" fontSize="9">esparso, sem contexto</text>
      {/* Embeddings */}
      <rect x="240" y="40" width="320" height="140" rx="8" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="1" />
      <text x="400" y="65" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">ESM-2 (650M param)</text>
      <text x="400" y="85" textAnchor="middle" fill="#94a3b8" fontSize="10">250M sequências proteicas (UniRef90)</text>
      <text x="400" y="108" textAnchor="middle" fill="#f8fafc" fontSize="10">Embedding 1280-dim por aminoácido</text>
      <text x="400" y="128" textAnchor="middle" fill="#94a3b8" fontSize="10">Contexto bidirecional: AA vizinhos influenciam</text>
      <text x="400" y="148" textAnchor="middle" fill="#94a3b8" fontSize="10">Transferência: fine-tune em datasets pequenos</text>
      <text x="400" y="168" textAnchor="middle" fill={color} fontSize="10" fontWeight="600">Prediz estrutura, função, estabilidade</text>
      <text x="350" y="210" textAnchor="middle" fill="#64748b" fontSize="10">K-mers: dna2vec treina word2vec em 6-mers de DNA — bases com contextos similares ficam próximas</text>
    </svg>
  );
}

function CNNSeqSVG() {
  return (
    <svg viewBox="0 0 700 210" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="210" fill="var(--bg-secondary)" rx="10" />
      {/* Architecture */}
      {[
        { label: 'DNA\n200bp', w: 60, h: 80, col: '#f97316' },
        { label: 'Conv1D\nfiltros motivos', w: 60, h: 65, col: color },
        { label: 'MaxPool\n+Conv1D', w: 60, h: 50, col: color },
        { label: 'Global\nAvgPool', w: 60, h: 36, col: '#f97316' },
        { label: 'Dense\n+Sigmoid', w: 60, h: 28, col: '#f97316' },
        { label: 'Output\nP(splice)', w: 76, h: 28, col: '#f97316' },
      ].map((layer, i) => {
        const x = 30 + i * 108;
        const y = 110 - layer.h / 2;
        return (
          <g key={i}>
            <rect x={x} y={y} width={layer.w} height={layer.h} rx="5" fill="rgba(249,115,22,0.06)" stroke={layer.col} strokeWidth="1.5" />
            {layer.label.split('\n').map((line, li) => (
              <text key={li} x={x + 30} y={y + layer.h / 2 - 4 + li * 13} textAnchor="middle"
                fill={li === 0 ? layer.col : '#94a3b8'} fontSize="9" fontWeight={li === 0 ? '700' : '400'}>{line}</text>
            ))}
            {i < 5 && <line x1={x + layer.w} y1={110} x2={x + 108} y2={110} stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />}
          </g>
        );
      })}
      {/* Motif */}
      <text x="350" y="170" textAnchor="middle" fill="#94a3b8" fontSize="10">Filtros aprendidos = motivos de sequência (TATAAA, CACGTG, GGAAG...)</text>
      <text x="350" y="185" textAnchor="middle" fill="#94a3b8" fontSize="10">DeepBind (2015): primeiros CNNs para binding sites — supera SVMs com features manuais</text>
      <text x="350" y="200" textAnchor="middle" fill="#64748b" fontSize="9">DeepSEA: 919 chromatin features a partir de 1000bp — prediz impacto regulatório de variantes</text>
    </svg>
  );
}

function TransformerBioSVG() {
  return (
    <svg viewBox="0 0 700 220" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="220" fill="var(--bg-secondary)" rx="10" />
      {/* DNABERT */}
      <rect x="20" y="20" width="300" height="170" rx="8" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="1.5" />
      <text x="170" y="42" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">DNABERT / Nucleotide Transformer</text>
      {['Input: sequência DNA', 'Tokenização em 6-mers', 'Transformer bidireccional', 'Pré-treino: masked LM', 'Fine-tune: classificação'].map((s, i) => (
        <g key={i}>
          <circle cx="40" cy={62 + i * 26} r="4" fill={color} opacity="0.7" />
          <text x="54" y={67 + i * 26} fill="#f8fafc" fontSize="10">{s}</text>
        </g>
      ))}
      <text x="170" y="210" textAnchor="middle" fill="#64748b" fontSize="9">Nucleotide Transformer: 2.5B param, 850 genomas</text>
      {/* ESM-2 */}
      <rect x="380" y="20" width="300" height="170" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
      <text x="530" y="42" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">ESM-2 — Protein Language Model</text>
      {['Input: sequência proteica', '650M - 15B parâmetros', 'Treino: 250M proteínas (UniRef90)', 'Masked language modelling', 'Emergent: prediz estrutura 3D'].map((s, i) => (
        <g key={i}>
          <circle cx="400" cy={62 + i * 26} r="4" fill="#f97316" opacity="0.7" />
          <text x="414" y={67 + i * 26} fill="#f8fafc" fontSize="10">{s}</text>
        </g>
      ))}
      <text x="530" y="210" textAnchor="middle" fill="#64748b" fontSize="9">ESMFold: estrutura em 60s sem MSA</text>
    </svg>
  );
}

function FuncPredSVG() {
  return (
    <svg viewBox="0 0 700 210" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="210" fill="var(--bg-secondary)" rx="10" />
      <text x="350" y="22" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="700">Pipeline de Predição de Função Proteica</text>
      {/* Pipeline */}
      {['Sequência\nproteica', 'ESM-2\nembeddings', 'Modelo\nML/DL', 'GO Terms\n(BP/MF/CC)', 'Classe EC\n(enzima)', 'Localização\ncelular'].map((s, i) => (
        <g key={i}>
          <rect x={15 + i * 113} y="35" width="97" height="50" rx="6" fill="rgba(249,115,22,0.06)" stroke={i < 3 ? color : '#f97316'} strokeWidth="1.2" strokeOpacity="0.8" />
          {s.split('\n').map((line, li) => (
            <text key={li} x={63 + i * 113} y={57 + li * 14} textAnchor="middle"
              fill={li === 0 ? (i < 3 ? color : '#f97316') : '#94a3b8'} fontSize="9" fontWeight={li === 0 ? '700' : '400'}>{line}</text>
          ))}
          {i < 5 && <><line x1={113+i*113} y1="60" x2={119+i*113} y2="60" stroke={i < 3 ? color : '#f97316'} strokeWidth="1.5"/><polygon points={`${126+i*113},60 ${117+i*113},55 ${117+i*113},65`} fill={i < 3 ? color : '#f97316'}/></>}
        </g>
      ))}
      {/* GO hierarchy */}
      {[['MF: Molecular Function', 'catálise, ligação, transporte'], ['BP: Biological Process', 'metabolismo, sinalização'], ['CC: Cellular Component', 'núcleo, membrana, citoplasma']].map(([t, d], i) => (
        <g key={i}>
          <rect x={20 + i * 225} y="115" width="205" height="60" rx="6" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="0.8" strokeOpacity="0.5" />
          <text x={122 + i * 225} y="135" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">{t}</text>
          <text x={122 + i * 225} y="152" textAnchor="middle" fill="#94a3b8" fontSize="9">{d}</text>
          <text x={122 + i * 225} y="167" textAnchor="middle" fill="#64748b" fontSize="8">40k+ termos GO</text>
        </g>
      ))}
      <text x="350" y="198" textAnchor="middle" fill="#64748b" fontSize="9">CAFA challenge: avaliação comunitária de métodos de anotação funcional — principal benchmark do campo</text>
    </svg>
  );
}

function GenDesignSVG() {
  return (
    <svg viewBox="0 0 700 210" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="210" fill="var(--bg-secondary)" rx="10" />
      {/* RFdiffusion pipeline */}
      <text x="350" y="22" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="700">Design de Proteínas de Novo — RFdiffusion + ProteinMPNN</text>
      {[
        { label: 'Especificação\nfuncional', desc: 'binding site, simetria', col: '#f97316' },
        { label: 'RFdiffusion\nbackbones', desc: '1000 candidatos', col: color },
        { label: 'ProteinMPNN\nsequências', desc: '10 seq/backbone', col: '#f97316' },
        { label: 'AlphaFold\nvalidação', desc: 'pLDDT > 85', col: '#f97316' },
        { label: 'Síntese\nexperimental', desc: 'top 50', col: '#f97316' },
      ].map((s, i) => (
        <g key={i}>
          <rect x={18 + i * 134} y="40" width="118" height="65" rx="7" fill="rgba(249,115,22,0.06)" stroke={s.col} strokeWidth="1.5" />
          <text x={77 + i * 134} y="64" textAnchor="middle" fill={s.col} fontSize="10" fontWeight="700">{s.label.split('\n')[0]}</text>
          <text x={77 + i * 134} y="78" textAnchor="middle" fill={s.col} fontSize="10" fontWeight="700">{s.label.split('\n')[1]}</text>
          <text x={77 + i * 134} y="96" textAnchor="middle" fill="#94a3b8" fontSize="9">{s.desc}</text>
          {i < 4 && <><line x1={137+i*134} y1="72" x2={143+i*134} y2="72" stroke={s.col} strokeWidth="1.5"/><polygon points={`${151+i*134},72 ${142+i*134},67 ${142+i*134},77`} fill={s.col}/></>}
        </g>
      ))}
      <text x="350" y="138" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="700">Taxa de sucesso experimental: 10-20% de hits validados</text>
      {[
        'ProteinMPNN: 10x mais expressável em E. coli que Rosetta equivalente',
        'Cyclic peptides oralmente biodisponíveis — problema de 50 anos resolvido em 2023',
        'EvoProtGrad: optimização de sequências por gradiente em espaço de embeddings',
      ].map((t, i) => (
        <text key={i} x="350" y={158 + i * 16} textAnchor="middle" fill="#94a3b8" fontSize="9">{t}</text>
      ))}
    </svg>
  );
}

export default function BIO3() {
  return (
    <div style={S.page}>
      <Link to="/bioinformatics" style={S.back}>← Bioinformatics</Link>
      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Representação de Sequências Biológicas</h2>
        <p style={S.p}>Representar sequências biológicas de forma útil para ML é o primeiro desafio. O one-hot encoding converte cada posição num vector binário de dimensão igual ao tamanho do alfabeto (4 para DNA, 20 para aminoácidos) — simples mas ignora contexto. K-mers (fragmentos de k bases sobrepostos) capturam composição local — com k=6 há 4096 hexanucleotídeos possíveis.</p>
        <p style={S.p}>O dna2vec treina word2vec em k-mers de DNA — nucleotídeos com contextos similares ficam próximos no espaço de embeddings. Os modelos de linguagem proteica como ESM-2 (Meta AI, 650M-15B parâmetros) treinados em 250M sequências produzem embeddings contextualizados de 1280 dimensões que capturam relações evolutivas e funcionais — a base para fine-tuning em datasets pequenos com excelente transferência.</p>
        <div style={S.diagram}><EncodingSVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. CNNs para Sequências de DNA</h2>
        <p style={S.p}>CNNs são naturais para sequências biológicas — os filtros 1D aprendem motivos de sequência de forma análoga às Position Weight Matrices. O DeepBind (2015) foi a primeira CNN aplicada a binding sites de proteínas de ligação a DNA, superando SVMs com features manuais. O DeepSEA prediz 919 chromatin features a partir de 1000bp de contexto e avalia o impacto regulatório de variantes não-codificantes.</p>
        <p style={S.p}>A interpretação de CNNs biológicos usa saliency maps (gradientes em relação ao input) e DeepLIFT para identificar posições importantes na sequência. Os filtros da primeira camada CNN, quando visualizados como sequence logos, revelam motivos de ligação de factores de transcrição. Aplicações incluem predição de enhancers, ilhas CpG, locais de splicing, sítios de clivagem CRISPR e eficiência de tradução.</p>
        <div style={S.diagram}><CNNSeqSVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Transformers e Foundation Models para Biologia</h2>
        <p style={S.p}>Transformers revolucionaram a biologia computacional como fizeram no NLP. O DNABERT (2021) é um BERT pré-treinado no genoma humano com tokenização em 6-mers, estado da arte em múltiplas tarefas de sequência de DNA. O Nucleotide Transformer (InstaDeep/EMBL, 2023) tem 2.5B parâmetros e foi treinado em 850 genomas de múltiplas espécies, generalizando melhor entre organismos.</p>
        <p style={S.p}>O ESM-2 (Meta AI) com 650M-15B parâmetros, treinado em 250M sequências proteicas, é o modelo de linguagem proteica dominante — os seus embeddings + regressão linear predizem estrutura (ESMFold em 60 segundos sem MSA) e função. O Geneformer foi treinado em 30M células humanas de scRNA-seq e aprende a "linguagem" da regulação génica. Modelos grandes desenvolvem capacidades emergentes como zero-shot prediction do impacto de mutações.</p>
        <div style={S.diagram}><TransformerBioSVG /></div>
        <div style={S.highlight}>Foundation models biológicos seguem a mesma receita do NLP: pré-treino auto-supervisionado em dados massivos + fine-tuning eficiente em tarefas específicas com poucos dados rotulados.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Predição de Função Proteica</h2>
        <p style={S.p}>Predizer a função de proteínas com sequência desconhecida é um dos problemas centrais da bioinformática. O Gene Ontology (GO) é um vocabulário controlado hierárquico com 40k+ termos para descrever função molecular (MF), processo biológico (BP) e localização celular (CC). A transferência de função por BLAST — homólogos com mais de 30% de identidade — funciona bem mas falha na "twilight zone" de proteínas divergentes.</p>
        <p style={S.p}>O DeepGO usa CNN em embeddings de sequência com grafo de GO para predição hierárquica. O SignalP com transformer prediz o peptídeo sinal de secreção. Predictores baseados em ESM-2 são estado da arte em localização, estabilidade e solubilidade sem necessidade de estrutura 3D. O CAFA challenge é a avaliação comunitária principal — avalia centenas de métodos em proteínas recém-caracterizadas experimentalmente.</p>
        <div style={S.diagram}><FuncPredSVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Design de Sequências com IA Generativa</h2>
        <p style={S.p}>A IA generativa permite desenhar sequências biológicas com propriedades desejadas — a inversão do problema de predição. O ProteinMPNN (2022) recebe um backbone proteico 3D e gera sequências que dobram nessa estrutura — 10x mais expressável em E. coli que o Rosetta equivalente. O RFdiffusion (Baker Lab) é um modelo de difusão que gera backbones proteicos de novo condicionados em simetria, binding sites ou motivos estruturais específicos.</p>
        <p style={S.p}>Combinando RFdiffusion + ProteinMPNN + AlphaFold2 para validação in silico, a taxa de sucesso experimental é de 10-20% — extraordinário para design de proteínas. Resultados incluem binders de alta afinidade para receptores de citocinas, nanocages icosaédricas de 120 cópias, e péptidos cíclicos oralmente biodisponíveis. O EvoProtGrad optimiza sequências proteicas por gradiente no espaço de embeddings de modelos de linguagem.</p>
        <div style={S.diagram}><GenDesignSVG /></div>
        <div style={S.note}>O design de enzimas para reacções que não existem na natureza — química verde, degradação de plásticos — é uma das aplicações mais promissoras da IA generativa em biologia sintética.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Representação de Sequências Biológicas</strong> — one-hot encoding, k-mer frequencies e embeddings (DNA-BERT, ESM-2) transformam sequências biológicas em vectores para modelos ML; a escolha da representação afecta criticamente a performance em tarefas de predição genómica.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>CNNs para Sequências de DNA</strong> — DeepBind e DeepSEA usam CNNs 1D para aprender motifs de ligação de factores de transcrição directamente de sequências de DNA; capturam padrões posicionais e composicionais que métodos tradicionais de posição-frequência perdem.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Transformers e Foundation Models para Biologia</strong> — ESM-2 (Meta) e Nucleotide Transformer (Instadeep) são LLMs treinados em biliões de sequências proteicas/genómicas; os seus embeddings transferem para predição de estrutura, função e mutações patogénicas com poucos exemplos de fine-tuning.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Predição de Função Proteica</strong> — GO term prediction, predição de localização subcelular e predição de interacções proteína-proteína são tarefas centrais; ProteInfer (Google) e ESM-based models superam métodos homologia-based em proteínas sem homólogos caracterizados.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Design de Sequências com IA Generativa</strong> — modelos de difusão (RFDiffusion) e LLMs (ProtGPT2) geram sequências de proteínas com propriedades desejadas; EvoDiff combina evolução e difusão para design condicionado — abertura de novos fármacos e enzimas industriais.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
