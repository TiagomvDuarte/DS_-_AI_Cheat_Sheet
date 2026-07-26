import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  lectureTag: { display: 'inline-block', background: 'transparent', color: '#4a9eed', border: '1.5px solid #4a9eed', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-color)', borderLeft: '3px solid var(--accent-color)', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  code: { fontFamily: 'monospace', background: 'var(--bg-secondary)', padding: '0.1rem 0.4rem', borderRadius: 4, fontSize: '0.88em', color: 'var(--accent-color)' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  note: { background: 'rgba(74,158,237,0.06)', borderLeft: '3px solid var(--accent-color)', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
};

// ---- BPE step-by-step demo ----
// Corpus: "low low low low low lowest lowest newer newer newer newer newer newer wider wider wider new new"
const BPE_INITIAL = {
  words: {
    'l o w </w>': 5,
    'l o w e s t </w>': 2,
    'n e w e r </w>': 6,
    'w i d e r </w>': 3,
    'n e w </w>': 2,
  },
};

function getPairCounts(words) {
  const counts = {};
  for (const [w, freq] of Object.entries(words)) {
    const symbols = w.split(' ');
    for (let i = 0; i < symbols.length - 1; i++) {
      const pair = symbols[i] + ' ' + symbols[i + 1];
      counts[pair] = (counts[pair] || 0) + freq;
    }
  }
  return counts;
}

function mergePair(words, pair) {
  const [a, b] = pair.split(' ');
  const merged = a + b;
  const newWords = {};
  for (const [w, freq] of Object.entries(words)) {
    const symbols = w.split(' ');
    const out = [];
    let i = 0;
    while (i < symbols.length) {
      if (i < symbols.length - 1 && symbols[i] === a && symbols[i + 1] === b) {
        out.push(merged);
        i += 2;
      } else {
        out.push(symbols[i]);
        i += 1;
      }
    }
    newWords[out.join(' ')] = freq;
  }
  return newWords;
}

const BPEDemo = () => {
  const [step, setStep] = useState(0);
  const states = [{ words: BPE_INITIAL.words, merge: null }];
  let cur = BPE_INITIAL.words;
  for (let i = 0; i < 6; i++) {
    const counts = getPairCounts(cur);
    const entries = Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    if (entries.length === 0) break;
    const [bestPair, bestCount] = entries[0];
    cur = mergePair(cur, bestPair);
    states.push({ words: cur, merge: bestPair, count: bestCount });
  }

  const s = states[Math.min(step, states.length - 1)];

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Byte-Pair Encoding (BPE) — passo a passo</p>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        Corpus: <code style={S.code}>low (×5), lowest (×2), newer (×6), wider (×3), new (×2)</code>. Cada palavra começa dividida em caracteres + <code style={S.code}>&lt;/w&gt;</code> (marcador de fim de palavra).
      </p>
      <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
        {states.map((_, i) => (
          <button key={i} onClick={() => setStep(i)} style={{
            padding: '0.35rem 0.8rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.8rem',
            background: step === i ? 'var(--accent-color)' : 'var(--bg-primary)',
            color: step === i ? 'white' : 'var(--text-primary)',
            border: `1.5px solid ${step === i ? 'var(--accent-color)' : 'var(--card-border)'}`,
          }}>{i === 0 ? 'Início' : `Merge ${i}`}</button>
        ))}
      </div>

      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1rem', textAlign: 'left' }}>
        {Object.entries(s.words).map(([w, freq]) => (
          <div key={w} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', fontFamily: 'monospace', fontSize: '0.85rem' }}>
            <span style={{ color: 'var(--text-secondary)', minWidth: 32 }}>×{freq}</span>
            {w.split(' ').map((sym, i) => {
              const isNewMerge = s.merge && sym === s.merge.split(' ').join('');
              return (
                <span key={i} style={{
                  background: isNewMerge ? 'rgba(74,158,237,0.10)' : 'rgba(74,158,237,0.10)',
                  border: `1px solid ${isNewMerge ? '#4a9eed' : 'var(--card-border)'}`,
                  borderRadius: 4, padding: '0.1rem 0.4rem',
                  color: isNewMerge ? '#4a9eed' : 'var(--text-primary)', fontWeight: isNewMerge ? 700 : 400,
                }}>{sym}</span>
              );
            })}
          </div>
        ))}
      </div>

      {s.merge ? (
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
          Par mais frequente: <code style={S.code}>{s.merge}</code> (ocorre {s.count}×) → fundido em <strong style={{ color: '#4a9eed' }}>{s.merge.split(' ').join('')}</strong>.
        </p>
      ) : (
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
          Estado inicial: vocabulário = todos os caracteres únicos. Em cada iteração, conta-se a frequência de cada par adjacente de símbolos e funde-se o par mais frequente num novo símbolo.
        </p>
      )}
    </div>
  );
};

const TokenizationCompare = () => {
  const examples = [
    { word: 'unbelievable', bpe: ['un', 'believ', 'able'], wordpiece: ['un', '##belie', '##v', '##able'], sp: ['un', 'believ', 'able'] },
    { word: 'tokenization', bpe: ['token', 'ization'], wordpiece: ['token', '##ization'], sp: ['token', 'ization'] },
    { word: 'café', bpe: ['caf', 'é'], wordpiece: ['café'], sp: ['café'] },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>BPE vs WordPiece vs SentencePiece — exemplos</p>
      <div style={{ overflowX: 'auto' }}>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Palavra</th><th style={S.th}>BPE (GPT-2)</th><th style={S.th}>WordPiece (BERT)</th><th style={S.th}>SentencePiece (T5/Llama)</th></tr></thead>
          <tbody>
            {examples.map(ex => (
              <tr key={ex.word}>
                <td style={S.td}><strong>{ex.word}</strong></td>
                <td style={{ ...S.td, fontFamily: 'monospace', color: 'var(--accent-color)' }}>{ex.bpe.join(' | ')}</td>
                <td style={{ ...S.td, fontFamily: 'monospace', color: '#4a9eed' }}>{ex.wordpiece.join(' | ')}</td>
                <td style={{ ...S.td, fontFamily: 'monospace', color: '#4a9eed' }}>{ex.sp.join(' | ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
        <code style={S.code}>##</code> marca um sub-token que continua a palavra anterior (WordPiece). <code style={S.code}></code> (U+2581) marca o início de uma nova palavra/espaço (SentencePiece) — permite reconstruir o texto original sem regras de pré-tokenização específicas da língua.
      </p>
    </div>
  );
};

const TokenizerPipelineDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Da Palavra ao ID — Pipeline de Tokenização Subword</p>
    <svg viewBox="0 0 660 100" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrtok" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      {[
        ['"unbelievable"', 75, 'var(--bg-secondary)', 'var(--text-primary)'],
        ['un | believ | able', 250, 'rgba(74,158,237,0.12)', 'var(--accent-color)'],
        ['1037, 8056, 1419', 425, 'rgba(74,158,237,0.10)', '#4a9eed'],
        ['Embedding\nLookup', 590, 'var(--bg-secondary)', 'var(--text-primary)'],
      ].map(([label, cx, bg, col], i) => (
        <g key={i}>
          <rect x={cx - 65} y="35" width="130" height="44" rx="8" fill={bg} stroke={col} strokeWidth="1.2" />
          {label.split('\n').map((line, li, arr) => (
            <text key={li} x={cx} y={arr.length > 1 ? 54 + li * 14 : 62} textAnchor="middle" fill={col} fontSize="11" fontWeight="600">{line}</text>
          ))}
          {i < 3 && <line x1={cx + 66} y1="57" x2={cx + 108} y2="57" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrtok)" />}
        </g>
      ))}
    </svg>
    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>O texto é dividido em sub-tokens do vocabulário (tipicamente 30k–100k entradas), cada um mapeado para um ID inteiro, e depois para um vector de embedding aprendido.</p>
  </div>
);

const GloVeDiagram = () => {
  const words = ['ice', 'steam', 'water', 'fashion'];
  const probsK = { 'ice|solid': 1.9e-4, 'steam|solid': 2.2e-5, 'water|solid': 3.0e-3, 'fashion|solid': 1.7e-5 };
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>GloVe — Razões de Co-ocorrência (exemplo "solid")</p>
      <div style={{ overflowX: 'auto' }}>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Palavra-alvo</th><th style={{ ...S.th, textAlign: 'right' }}>P(palavra | "ice")</th><th style={{ ...S.th, textAlign: 'right' }}>P(palavra | "steam")</th><th style={{ ...S.th, textAlign: 'right' }}>razão</th></tr></thead>
          <tbody>
            {[
              ['solid', 1.9e-4, 2.2e-5, 8.9],
              ['gas', 6.6e-5, 7.8e-4, 0.085],
              ['water', 3.0e-3, 2.2e-3, 1.36],
              ['fashion', 1.7e-5, 1.8e-5, 0.96],
            ].map(([w, pi, ps, r]) => (
              <tr key={w}>
                <td style={S.td}><strong>{w}</strong></td>
                <td style={{ ...S.td, textAlign: 'right', fontFamily: 'monospace' }}>{pi.toExponential(1)}</td>
                <td style={{ ...S.td, textAlign: 'right', fontFamily: 'monospace' }}>{ps.toExponential(1)}</td>
                <td style={{ ...S.td, textAlign: 'right', fontFamily: 'monospace', fontWeight: 700, color: r > 1 ? '#4a9eed' : (r < 1 ? '#4a9eed' : 'var(--text-secondary)') }}>{r.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
        A razão <InlineMath math="\frac{P(k|ice)}{P(k|steam)}" /> é grande quando k está relacionado com "ice" mas não "steam" (ex: "solid"), pequena no caso oposto (ex: "gas"), e ≈1 quando k é igualmente (ir)relevante para ambos ("water", "fashion"). O GloVe aprende embeddings cujo produto escalar reproduz directamente estas razões — combinando a riqueza estatística global de uma matriz de co-ocorrência com a estrutura linear de espaço vectorial do Word2Vec.
      </p>
    </div>
  );
};

const FastTextDiagram = () => {
  const word = 'where';
  const n = 3;
  const padded = `<${word}>`;
  const ngrams = [];
  for (let i = 0; i <= padded.length - n; i++) ngrams.push(padded.slice(i, i + n));
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>FastText — Embeddings de Subword (n-gramas de caracteres)</p>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        A palavra <code style={S.code}>{word}</code> é primeiro delimitada como <code style={S.code}>{padded}</code> e decomposta em todos os {n}-gramas de caracteres (mais o token da palavra completa):
      </p>
      <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
        {ngrams.map((g, i) => (
          <span key={i} style={{ background: 'rgba(74,158,237,0.12)', border: '1px solid var(--accent-color)', borderRadius: 6, padding: '0.3rem 0.6rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--accent-color)', fontWeight: 600 }}>{g}</span>
        ))}
        <span style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid #7dd3fc', borderRadius: 6, padding: '0.3rem 0.6rem', fontFamily: 'monospace', fontSize: '0.85rem', color: '#4a9eed', fontWeight: 700 }}>&lt;{word}&gt; (palavra completa)</span>
      </div>
      <div style={S.math}>
        <BlockMath math={`v_{\\text{where}} = \\sum_{g \\in \\mathcal{G}_{\\text{where}}} z_g`} />
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
        O embedding final da palavra é a <strong>soma dos embeddings de todos os seus n-gramas</strong> z_g. Para uma palavra <strong>nunca vista (OOV)</strong> como "wherever", o modelo ainda consegue construir um embedding razoável a partir dos n-gramas partilhados (<code style={S.code}>whe</code>, <code style={S.code}>her</code>, <code style={S.code}>ere</code>, ...) — resolvendo o maior problema do Word2Vec/GloVe: palavras fora do vocabulário não têm representação nenhuma.
      </p>
    </div>
  );
};

export default function NLP4() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/nlp" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.lectureTag}>MÓDULO 4</div>
        <h1 style={S.h1}>Tokenização Subword & Embeddings Avançados</h1>

        {/* === SECTION 1 === */}
        <div style={S.section}>
          <h2 style={S.h2}>1. O Problema: Vocabulário Fechado</h2>
          <p style={S.p}>O Word2Vec trata cada palavra como um símbolo atómico — "play", "playing" e "plays" têm embeddings completamente independentes, e uma palavra ausente do vocabulário de treino (<strong>Out-Of-Vocabulary, OOV</strong>) não tem representação alguma.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.4rem' }}>Vocabulário de palavras inteiras</div>
              <p style={{ fontSize: '0.87rem', margin: 0, color: 'var(--text-secondary)' }}>Vocabulário de 50k–100k palavras ainda não cobre nomes próprios, neologismos, gírias, erros ortográficos, ou línguas aglutinativas (finlandês, turco) onde uma raiz gera milhares de formas.</p>
            </div>
            <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.4rem' }}>Vocabulário de subwords</div>
              <p style={{ fontSize: '0.87rem', margin: 0, color: 'var(--text-secondary)' }}>Com ~30k unidades subword (caracteres, sílabas, morfemas comuns), <em>qualquer</em> palavra pode ser representada — na pior das hipóteses, letra a letra.</p>
            </div>
          </div>

          <TokenizerPipelineDiagram />
        </div>

        <hr style={S.divider} />

        {/* === SECTION 2 === */}
        <div style={S.section}>
          <h2 style={S.h2}>2. Byte-Pair Encoding (BPE)</h2>
          <p style={S.p}>O BPE (Sennrich et al., 2016), adaptado de um algoritmo de compressão de dados, constrói o vocabulário de forma incremental: começa com caracteres individuais e funde repetidamente o par de símbolos adjacentes mais frequente, até atingir o tamanho de vocabulário desejado.</p>

          <div style={S.highlight}>
            <strong>Algoritmo:</strong>
            <ol style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
              <li>Inicializar o vocabulário com todos os caracteres únicos do corpus (+ marcador de fim de palavra <code style={S.code}>&lt;/w&gt;</code>)</li>
              <li>Contar a frequência de todos os pares de símbolos adjacentes</li>
              <li>Fundir o par mais frequente num novo símbolo, adicioná-lo ao vocabulário</li>
              <li>Repetir os passos 2–3 até atingir o número de merges desejado (hiperparâmetro)</li>
            </ol>
          </div>

          <BPEDemo />

          <div style={S.note}> Quanto maior o número de merges, mais o vocabulário se aproxima de palavras inteiras. GPT-2 usa ~50k merges; modelos menores usam vocabulários menores para reduzir o tamanho da camada de embedding.</div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 3 === */}
        <div style={S.section}>
          <h2 style={S.h2}>3. WordPiece & SentencePiece</h2>
          <p style={S.p}>BPE, WordPiece e SentencePiece partilham a mesma ideia geral — vocabulário de subwords aprendido a partir de um corpus — mas diferem no <strong>critério de merge</strong> e na forma como lidam com espaços/línguas sem espaços.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Algoritmo</th><th style={S.th}>Critério de merge</th><th style={S.th}>Usado em</th></tr></thead>
              <tbody>
                {[
                  ['BPE', 'Par mais frequente', 'GPT-2/3/4, RoBERTa'],
                  ['WordPiece', 'Par que maximiza a verosimilhança do corpus (frequência do par ÷ frequências individuais)', 'BERT, DistilBERT'],
                  ['SentencePiece (Unigram/BPE)', 'Trata o texto como sequência de bytes/Unicode bruta — sem pré-tokenização por espaços', 'T5, Llama, mT5, ALBERT'],
                ].map(([alg, crit, used]) => (
                  <tr key={alg}><td style={S.td}><strong>{alg}</strong></td><td style={S.td}>{crit}</td><td style={S.td}>{used}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.math}>
            <BlockMath math={`\\text{score}(a, b) = \\frac{\\text{freq}(ab)}{\\text{freq}(a) \\times \\text{freq}(b)}`} />
          </div>
          <p style={S.p}>A fórmula do WordPiece favorece pares onde a combinação é desproporcionalmente mais frequente do que as partes individuais sugeririam — não apenas o par mais comum em termos absolutos.</p>

          <TokenizationCompare />

          <div style={S.note}> <strong>SentencePiece</strong> resolve um problema prático: BPE/WordPiece assumem que as palavras já estão separadas por espaços, o que falha em chinês, japonês ou tailandês. O SentencePiece trata o espaço como um carácter normal (<code style={S.code}></code>), tornando a tokenização totalmente reversível e independente da língua.</div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 4 === */}
        <div style={S.section}>
          <h2 style={S.h2}>4. GloVe — Global Vectors for Word Representation</h2>
          <p style={S.p}>O Word2Vec  aprende a partir de janelas de contexto locais, uma a uma: percorre o corpus palavra a palavra e ajusta os vectores com base na pequena vizinhança à volta de cada ocorrência. O GloVe (Pennington et al., 2014) toma uma abordagem diferente: primeiro <strong>conta tudo de uma vez</strong>, construindo uma matriz de co-ocorrência global X, e só depois aprende os embeddings a partir dessas contagens agregadas.</p>

          <h3 style={S.h3}>Passo 1 — A matriz de co-ocorrência X</h3>
          <p style={S.p}>Percorre-se o corpus inteiro com uma janela deslizante (ex: ±5 palavras) e conta-se, para cada par de palavras (i, j), quantas vezes j aparece no contexto de i. O resultado é uma matriz V×V (V = tamanho do vocabulário), onde <InlineMath math="X_{ij}" /> é essa contagem. Esta matriz é simétrica, enorme e muito esparsa (a maioria dos pares de palavras nunca co-ocorre).</p>

          <h3 style={S.h3}>Passo 2 — A ideia chave: razões de probabilidade</h3>
          <p style={S.p}>Pennington et al. observaram que a <strong>contagem bruta</strong> <InlineMath math="X_{ij}" /> diz pouco por si só (palavras frequentes como "the" co-ocorrem com tudo), mas a <strong>razão</strong> entre as probabilidades de co-ocorrência de duas palavras com uma terceira palavra-sonda é muito informativa sobre a relação semântica entre elas. É exactamente isso que a tabela abaixo mostra.</p>

          <GloVeDiagram />

          <h3 style={S.h3}>Passo 3 — A função de perda</h3>
          <p style={S.p}>O GloVe define embeddings <InlineMath math="w_i" /> (palavra-alvo) e <InlineMath math="\tilde{w}_j" /> (palavra-contexto), mais dois bias escalares <InlineMath math="b_i" /> e <InlineMath math="\tilde{b}_j" />, e treina-os para que o produto escalar reproduza directamente o logaritmo da co-ocorrência:</p>

          <div style={S.math}>
            <BlockMath math={`J = \\sum_{i,j=1}^{V} f(X_{ij}) \\left(w_i^\\top \\tilde{w}_j + b_i + \\tilde{b}_j - \\log X_{ij}\\right)^2`} />
          </div>
          <p style={S.p}>Em palavras: para cada par de palavras (i, j) que co-ocorrem, queremos que <InlineMath math="w_i^\top \tilde{w}_j" /> (mais os bias) se aproxime de <InlineMath math="\log X_{ij}" />. Usar o <strong>logaritmo</strong> é o que transforma "razões" em "diferenças" — se <InlineMath math="w_i \cdot \tilde{w}_k - w_j \cdot \tilde{w}_k \approx \log(X_{ik}/X_{jk})" />, então as razões de probabilidade da tabela acima ficam codificadas como relações lineares (somas/subtracções) no espaço vectorial — exactamente a propriedade que permite operações como <code style={S.code}>rei - homem + mulher ≈ rainha</code>.</p>

          <p style={S.p}><InlineMath math="f(X_{ij})" /> é uma função de ponderação que cresce com a frequência mas satura (e é zero quando <InlineMath math="X_{ij}=0" />, evitando <InlineMath math="\log 0" />): reduz a importância de pares extremamente frequentes (ex: "the", "of") — que dominariam a soma e arrastariam o treino para ajustar bem esses casos triviais — sem os ignorar completamente, e também evita dar demasiado peso a co-ocorrências raras e ruidosas.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}></th><th style={S.th}>Word2Vec</th><th style={S.th}>GloVe</th></tr></thead>
              <tbody>
                {[
                  ['Sinal de treino', 'Janelas de contexto locais (online)', 'Matriz de co-ocorrência global (batch)'],
                  ['Objectivo', 'Prever palavra de contexto (Skip-gram)', 'Regressão sobre log-contagens de co-ocorrência'],
                  ['Eficiência', 'Escala bem para corpora enormes', 'Requer construir/armazenar a matriz X'],
                ].map(([f, w2v, gv]) => (
                  <tr key={f}><td style={S.td}><strong>{f}</strong></td><td style={S.td}>{w2v}</td><td style={S.td}>{gv}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 5 === */}
        <div style={S.section}>
          <h2 style={S.h2}>5. FastText — Embeddings com Subwords</h2>
          <p style={S.p}>Tanto o Word2Vec como o GloVe atribuem um vector único e atómico a cada palavra. O FastText (Bojanowski et al., 2017, Facebook AI) representa cada palavra como a <strong>soma dos embeddings dos seus n-gramas de caracteres</strong> — resolvendo directamente o problema OOV sem necessidade de um tokenizador subword separado.</p>

          <FastTextDiagram />

          <h3 style={S.h3}>Vantagens & Limitações</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.4rem' }}>Vantagens</div>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.87rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                <li>Embeddings para palavras OOV via n-gramas partilhados</li>
                <li>Captura morfologia: "run", "running", "runner" partilham n-gramas</li>
                <li>Particularmente forte em línguas morfologicamente ricas</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.4rem' }}>Limitações</div>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.87rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                <li>Continua a produzir <strong>um único vector por palavra</strong> — não-contextual</li>
                <li>"banco" (financeiro) e "banco" (assento) têm o mesmo embedding</li>
                <li>Modelos maiores (mais n-gramas armazenados)</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
