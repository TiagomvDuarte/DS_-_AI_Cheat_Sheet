import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem', transition: 'color 0.2s' },
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

const BowDemo = () => {
  const vocab = ['France', 'I', 'in', 'live', 'love', 'Paris'];
  const bow = [[0, 1, 0, 0, 1, 1], [1, 1, 1, 1, 0, 0]];
  const docs = ['I love Paris', 'I live in France'];
  const [highlighted, setHighlighted] = useState(null);

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Demo Interativo: Bag-of-Words</p>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Clica numa palavra para ver como aparece nos documentos.</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1.2rem' }}>
        {vocab.map((w, i) => (
          <button key={w} onClick={() => setHighlighted(highlighted === i ? null : i)} style={{
            padding: '0.3rem 0.8rem', borderRadius: 20, cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600,
            background: highlighted === i ? 'var(--accent-color)' : 'var(--bg-primary)',
            color: highlighted === i ? '#fff' : 'var(--text-primary)',
            border: `1.5px solid ${highlighted === i ? 'var(--accent-color)' : 'var(--card-border)'}`,
            transition: 'all 0.2s'
          }}>{w}</button>
        ))}
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={S.table}>
          <thead><tr>
            <th style={{ ...S.th, textAlign: 'left' }}>Documento</th>
            {vocab.map((w, i) => (
              <th key={w} style={{ ...S.th, textAlign: 'center', color: highlighted === i ? 'var(--accent-color)' : 'var(--text-secondary)', transition: 'color 0.2s' }}>{w}</th>
            ))}
          </tr></thead>
          <tbody>{docs.map((doc, di) => (
            <tr key={di}><td style={{ ...S.td, fontStyle: 'italic', color: 'var(--text-secondary)' }}>{doc}</td>
              {bow[di].map((val, vi) => (
                <td key={vi} style={{ ...S.td, textAlign: 'center', fontFamily: 'monospace', fontWeight: 700,
                  background: highlighted === vi ? (val ? 'rgba(74,158,237,0.2)' : 'rgba(74,158,237,0.10)') : 'transparent',
                  color: highlighted === vi ? (val ? 'var(--accent-color)' : '#4a9eed') : 'var(--text-primary)', transition: 'all 0.2s', borderRadius: 4
                }}>{val}</td>
              ))}
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
};

const TermTermMatrix = () => {
  const words = ['computer', 'data', 'pinch', 'result', 'sugar'];
  const contextWords = ['apricot', 'digital', 'information', 'large', 'pie'];
  const matrix = [
    [0, 2, 1, 0, 0],
    [1, 8, 6, 0, 2],
    [0, 1, 0, 0, 1],
    [4, 2, 6, 0, 0],
    [0, 0, 0, 0, 5],
  ];
  const [hovRow, setHovRow] = useState(null);
  const [hovCol, setHovCol] = useState(null);
  const maxVal = 8;

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Matriz Termo-Termo (co-ocorrência)</p>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Hover numa célula para ver o padrão de co-ocorrência</p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ ...S.table, fontSize: '0.82rem' }}>
          <thead><tr>
            <th style={{ ...S.th, minWidth: 80 }}></th>
            {contextWords.map((w, ci) => (
              <th key={w} style={{ ...S.th, textAlign: 'center', color: hovCol === ci ? 'var(--accent-color)' : 'var(--text-secondary)', cursor: 'default', transition: 'color 0.15s' }}>{w}</th>
            ))}
          </tr></thead>
          <tbody>{words.map((word, ri) => (
            <tr key={word}>
              <td style={{ ...S.td, fontWeight: 600, color: hovRow === ri ? 'var(--accent-color)' : 'var(--text-primary)', transition: 'color 0.15s' }}>{word}</td>
              {matrix[ri].map((val, ci) => (
                <td key={ci}
                  onMouseEnter={() => { setHovRow(ri); setHovCol(ci); }}
                  onMouseLeave={() => { setHovRow(null); setHovCol(null); }}
                  style={{
                    ...S.td, textAlign: 'center', fontFamily: 'monospace', cursor: 'default',
                    background: hovRow === ri && hovCol === ci ? 'var(--accent-color)' : `rgba(74,158,237,${(val / maxVal) * 0.5})`,
                    color: hovRow === ri && hovCol === ci ? 'white' : 'var(--text-primary)',
                    fontWeight: val > 4 ? 700 : 400, transition: 'all 0.15s', borderRadius: 4,
                  }}>{val}</td>
              ))}
            </tr>
          ))}</tbody>
        </table>
      </div>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>A palavra "data" co-ocorre frequentemente com "digital" e "information" — o seu vetor captura estas relações semânticas.</p>
    </div>
  );
};

const Word2VecSkipgram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Arquitectura Skip-gram (Word2Vec)</p>
    <svg viewBox="0 0 560 220" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Input layer */}
      <text x="50" y="18" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="600">INPUT</text>
      <text x="50" y="30" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">one-hot |V|×1</text>
      {[0,1,2,3,4,5,6].map(i => {
        const y = 42 + i*22;
        const isTarget = i === 3;
        return (
          <g key={i}>
            <rect x="20" y={y} width="60" height="18" rx="3"
              fill={isTarget ? 'var(--accent-color)' : 'var(--bg-primary)'}
              stroke={isTarget ? 'var(--accent-color)' : 'var(--card-border)'} strokeWidth="1" />
            <text x="50" y={y + 13} textAnchor="middle" fill={isTarget ? 'white' : 'var(--text-secondary)'} fontSize="9" fontWeight={isTarget ? 'bold' : 'normal'}>{isTarget ? '1' : '0'}</text>
            {isTarget && <text x="85" y={y + 13} textAnchor="start" fill="var(--accent-color)" fontSize="8" fontWeight="bold">← master</text>}
          </g>
        );
      })}

      {/* W matrix */}
      <text x="175" y="18" textAnchor="middle" fill="#0284c7" fontSize="10" fontWeight="700">W</text>
      <text x="175" y="30" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">|V|×n</text>
      <rect x="140" y="40" width="70" height="140" rx="6" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4,2" />
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x="143" y={44 + i*19} width="64" height="15" rx="2"
          fill={i === 3 ? 'rgba(2,132,199,0.3)' : 'rgba(2,132,199,0.05)'}
          stroke="rgba(2,132,199,0.2)" strokeWidth="1" />
      ))}
      <text x="175" y="87" textAnchor="middle" fill="#0284c7" fontSize="8" fontWeight="bold">0.445 0.897</text>
      <text x="220" y="85" textAnchor="start" fill="#0284c7" fontSize="7">← master</text>

      {/* Hidden (embedding) */}
      <text x="310" y="18" textAnchor="middle" fill="var(--accent-color)" fontSize="10" fontWeight="700">HIDDEN</text>
      <text x="310" y="30" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">n-dim embedding</text>
      {[0,1,2].map(i => (
        <rect key={i} x="280" y={48 + i*35} width="60" height="28" rx="5"
          fill="var(--accent-color)" opacity="0.7" />
      ))}
      <text x="310" y="67" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">0.445</text>
      <text x="310" y="102" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">0.897</text>
      <text x="310" y="137" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">0.966</text>

      {/* W' matrix */}
      <text x="430" y="18" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="700">W'</text>
      <text x="430" y="30" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">n×|V|</text>
      <rect x="400" y="40" width="60" height="140" rx="6" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4,2" />
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x="403" y={44 + i*19} width="54" height="15" rx="2"
          fill="rgba(56,189,248,0.05)" stroke="rgba(56,189,248,0.2)" strokeWidth="1" />
      ))}

      {/* Output */}
      <text x="510" y="18" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="600">OUTPUT</text>
      <text x="510" y="30" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">σ(w·c)</text>
      {[['terrible', 1, '#4a9eed'], ['ring', 0, '#4a9eed'], ['but', 1, '#4a9eed'], ['late', 0, '#4a9eed']].map(([label, val, col], i) => (
        <g key={i}>
          <rect x="480" y={48 + i*28} width="65" height="22" rx="4" fill={`${col}18`} stroke={col} strokeWidth="1" />
          <text x="513" y={62 + i*28} textAnchor="middle" fill={col} fontSize="8" fontWeight="600">{label}: {val}</text>
        </g>
      ))}

      {/* Arrows */}
      <line x1="80" y1="110" x2="138" y2="110" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)" />
      <line x1="212" y1="110" x2="278" y2="110" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)" />
      <line x1="342" y1="110" x2="398" y2="110" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)" />
      <line x1="462" y1="110" x2="478" y2="110" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)" />
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Após o treino, os embeddings extraem-se das linhas de W (a matriz de pesos de input)</p>
  </div>
);

const CBOWDiagram = () => {
  const contextWords = ['a', 'terrible', 'but', 'an'];
  const outputs = [['master', 1, '#4a9eed'], ['ring', 0, '#4a9eed'], ['terrible', 0, '#4a9eed'], ['castle', 0, '#4a9eed']];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Arquitectura CBOW (Word2Vec)</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {contextWords.map(w => (
            <div key={w} style={{
              padding: '0.5rem 0.9rem', borderRadius: 8, fontSize: '0.85rem', fontWeight: 600,
              fontFamily: 'monospace', background: 'var(--bg-primary)', border: '1.5px solid var(--card-border)', color: 'var(--text-primary)'
            }}>{w}</div>
          ))}
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>contexto (vetores one-hot, |V|×1 cada)</p>
        <span style={{ color: '#4a9eed', fontSize: '1.2rem' }}>↓ W (pesos partilhados, |V|×n)</span>
        <div style={{ padding: '0.6rem 1.2rem', borderRadius: 8, fontSize: '0.85rem', fontWeight: 700, background: 'var(--accent-color)', color: 'white' }}>
          Média dos embeddings (n-dim)
        </div>
        <span style={{ color: '#38bdf8', fontSize: '1.2rem' }}>↓ W' (n×|V|)</span>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {outputs.map(([w, val, col]) => (
            <div key={w} style={{ padding: '0.4rem 0.8rem', borderRadius: 6, fontSize: '0.8rem', fontWeight: 600, fontFamily: 'monospace', background: `${col}18`, border: `1px solid ${col}`, color: col }}>{w}: {val}</div>
          ))}
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>output: softmax sobre |V| — prevê a palavra-alvo a partir do contexto</p>
      </div>
    </div>
  );
};

const SimilarityDemo = () => {
  const [word, setWord] = useState('king');
  const analogies = {
    king: [['queen', 0.89], ['prince', 0.84], ['royal', 0.78], ['castle', 0.61]],
    france: [['paris', 0.91], ['europe', 0.83], ['germany', 0.79], ['nation', 0.72]],
    happy: [['joyful', 0.88], ['glad', 0.85], ['sad', -0.72], ['excited', 0.76]],
  };
  const results = analogies[word] || [];

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Demo: Similaridade Semântica em Word2Vec</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
        {Object.keys(analogies).map(w => (
          <button key={w} onClick={() => setWord(w)} style={{
            padding: '0.35rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem',
            background: word === w ? 'var(--accent-color)' : 'var(--bg-primary)',
            color: word === w ? '#fff' : 'var(--text-primary)',
            border: `1.5px solid ${word === w ? 'var(--accent-color)' : 'var(--card-border)'}`,
            transition: 'all 0.2s'
          }}>{w}</button>
        ))}
      </div>
      <div style={{ maxWidth: 360, margin: '0 auto' }}>
        {results.map(([similar, score]) => (
          <div key={similar} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <span style={{ width: 80, textAlign: 'right', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>{similar}</span>
            <div style={{ flex: 1, height: 16, background: 'var(--bg-primary)', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${Math.abs(score) * 100}%`, background: score > 0 ? 'var(--accent-color)' : '#4a9eed', borderRadius: 8, transition: 'width 0.4s' }} />
            </div>
            <span style={{ width: 42, fontSize: '0.82rem', fontFamily: 'monospace', color: score > 0 ? 'var(--accent-color)' : '#4a9eed', fontWeight: 600 }}>{score.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function NLP3() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/nlp" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.lectureTag}>MÓDULO 3</div>
        <h1 style={S.h1}>Representações de Palavras, Word Embeddings e Word2Vec</h1>

        {/* === SECTION 1 === */}
        <div style={S.section}>
          <h2 style={S.h2}>1. Bag-of-Words: de Texto a Vetores</h2>
          <p style={S.p}>O maior problema do texto é que os computadores só processam números. O <strong>Bag-of-Words (BoW)</strong> é a abordagem clássica: cada palavra única do vocabulário é uma feature, e cada documento é um vetor esparso de contagens — ignorando completamente a ordem das palavras.</p>

          <BowDemo />

          <h3 style={S.h3}>Distância Euclidiana entre Documentos</h3>
          <p style={S.p}>Com os documentos como vetores, podemos calcular distâncias. Quanto mais palavras partilharem, mais próximos estão no espaço vetorial:</p>
          <div style={S.math}>
            <BlockMath math={`D(a, b) = \\sqrt{\\sum_{i=1}^{n} (b_i - a_i)^2}`} />
          </div>
          <p style={S.p}>Esta distância é a base de tarefas como similaridade textual, classificação, análise de sentimento e information retrieval. O classificador mais simples é o <strong>K-Nearest Neighbour (KNN)</strong>: dado um novo documento, atribuí-lo à classe do documento de treino mais próximo.</p>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 2 === */}
        <div style={S.section}>
          <h2 style={S.h2}>2. Os 4 Problemas do Bag-of-Words</h2>
          <p style={S.p}>O BoW é simples, rápido de calcular e funciona surpreendentemente bem em muitas tarefas de classificação. No entanto, tem limitações estruturais que motivam as alternativas que se seguem:</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              ['1', 'Maldição da Dimensionalidade', 'O vetor tem dimensão |V| — centenas de milhar de features. Tendência para overfitting.', '#4a9eed'],
              ['2', 'Ausência de Relações Semânticas', '"Bom filme" e "Filme bom" produzem o mesmo vetor. A ordem é descartada.', '#4a9eed'],
              ['3', 'Todas as palavras iguais', 'Stop words e termos raros são tratados de forma idêntica — sem pesos.', '#4a9eed'],
              ['4', 'Contexto muda o significado', '"Banco" em "sentei num banco" vs. "fui ao banco" → mesma feature.', '#4a9eed'],
            ].map(([num, title, desc, color]) => (
              <div key={num} style={{ background: 'var(--bg-secondary)', border: `1.5px solid ${color}40`, borderRadius: 10, padding: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <span style={{ background: color, color: 'white', borderRadius: '50%', width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>{num}</span>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{title}</strong>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={S.note}> PPMI resolve os problemas 2 e 3. Word2Vec resolve <strong>todos os quatro</strong>. O problema 4 (contexto dinâmico) só é completamente resolvido por modelos de atenção (BERT, GPT).</div>

          <h3 style={S.h3}>BoW como classificador: exemplo numérico</h3>
          <p style={S.p}>Com vocabulário <span style={S.code}>{'{great, movie, bad}'}</span>, o vetor BoW entra diretamente numa rede neuronal com activação sigmoid:</p>
          <div style={S.math}>
            <BlockMath math={`\\hat{y} = \\sigma(1 \\cdot w_1 + 1 \\cdot w_2 + 0 \\cdot w_3 + b)`} />
          </div>
          <p style={S.p}>O classificador aprende <strong>um peso por palavra do vocabulário</strong>. "Great movie" → <span style={S.code}>[1, 1, 0]</span> → score alto → sentimento positivo.</p>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 2 === */}
        <div style={S.section}>
          <h2 style={S.h2}>3. Representações de Palavras: da Sparsidade à Densidade</h2>
          <p style={S.p}>A solução passa por mudar a unidade de representação: de <em>documento</em> para <em>palavra</em>. Cada token é convertido num vetor denso que captura o seu significado.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>BoW (Esparso)</div>
              <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', background: 'var(--bg-secondary)', borderRadius: 8, padding: '0.75rem', color: 'var(--text-primary)', lineHeight: 1.8 }}>
                king = [1,0,0,0,...,0,0,0]<br />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>dimensão: |V| = 50.000</span><br />
                <span style={{ color: '#4a9eed', fontSize: '0.75rem' }}>99.998% zeros</span>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.75rem', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Word2Vec (Denso)</div>
              <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', background: 'var(--bg-secondary)', borderRadius: 8, padding: '0.75rem', color: 'var(--text-primary)', lineHeight: 1.8 }}>
                king = [0.50, 0.69, -0.45, ...]<br />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>dimensão: n = 300</span><br />
                <span style={{ color: '#4a9eed', fontSize: '0.75rem' }}>todos os valores activos</span>
              </div>
            </div>
          </div>

          <p style={S.p}>Representações bem treinadas codificam relações semânticas como propriedades geométricas:</p>
          <div style={S.math}>
            <BlockMath math={`\\vec{king} - \\vec{man} + \\vec{woman} \\approx \\vec{queen}`} />
          </div>

          <SimilarityDemo />
        </div>

        <hr style={S.divider} />

        {/* === SECTION 4 === */}
        <div style={S.section}>
          <h2 style={S.h2}>4. PPMI (Positive Pointwise Mutual Information)</h2>
          <p style={S.p}>O ponto de partida é a <strong>matriz termo-termo</strong>, de dimensão <InlineMath math={`|V| \\times |V|`} />. Cada célula regista quantas vezes a palavra-linha (alvo) e a palavra-coluna (contexto) co-ocorrem no corpus:</p>

          <TermTermMatrix />

          <p style={S.p}><strong>Problema:</strong> usada diretamente, a dimensão do vetor é |V| — mantém a maldição da dimensionalidade. Para corpora reais, isso são dezenas de milhar de dimensões por vetor.</p>

          <p style={S.p}>O PPMI não substitui a matriz termo-termo — <strong>recalcula os valores dessa mesma matriz</strong>. Em vez de cada célula conter a contagem bruta de co-ocorrências entre a palavra <InlineMath math="w" /> e o contexto <InlineMath math="c" />, passa a conter o seu PPMI. A dimensão mantém-se <InlineMath math={`|V| \\times |V|`} /> — só os valores das células mudam, ponderando cada co-ocorrência pela sua relevância estatística em vez da sua frequência absoluta.</p>
          <p style={S.p}>O PMI mede com que frequência dois eventos ocorrem juntos, comparado com o esperado se fossem independentes:</p>
          <div style={S.math}>
            <BlockMath math={`PMI(w,c) = \\log_2 \\frac{P(w,c)}{P(w) \\cdot P(c)}`} />
          </div>
          <p style={S.p}>Na prática usa-se a variante <strong>PPMI</strong>, que substitui valores negativos por zero:</p>
          <div style={S.math}>
            <BlockMath math={`PPMI(w,c) = \\max\\left(\\log_2 \\frac{P(w,c)}{P(w) \\cdot P(c)}, 0\\right)`} />
          </div>

          <h3 style={S.h3}>Exemplo Numérico: PPMI(information, data)</h3>
          <p style={S.p}>Com um corpus de 11.716 tokens:</p>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', margin: '1rem 0', fontFamily: 'monospace', fontSize: '0.88rem', lineHeight: 2 }}>
            <div style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.8rem', fontFamily: 'inherit' }}>Passo 1 — Calcular probabilidades marginais e conjuntas:</div>
            <div><InlineMath math={`P(w=information) = \\frac{7703}{11716} = 0.6575`} /></div>
            <div><InlineMath math={`P(c=data) = \\frac{5673}{11716} = 0.4842`} /></div>
            <div><InlineMath math={`P(w=information, c=data) = \\frac{3982}{11716} = 0.3399`} /></div>
            <div style={{ marginTop: '0.5rem' }}><InlineMath math={`PPMI = \\log_2 \\frac{0.3399}{0.6575 \\times 0.4842} = 0.0944`} /></div>
          </div>

          <div style={S.highlight}>
            <strong>O que resolve o PPMI:</strong>
            <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.8 }}>
              <li> Relações semânticas (problema 2)</li>
              <li> Importância diferenciada das palavras (problema 3)</li>
              <li> Dimensionalidade — vetor ainda tem tamanho |V|</li>
              <li> Contexto dinâmico — não resolvido</li>
            </ul>
          </div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 5 === */}
        <div style={S.section}>
          <h2 style={S.h2}>5. Word2Vec — Skip-gram e CBOW</h2>
          <p style={S.p}>O Word2Vec não aprende directamente os vetores. Treina um classificador numa tarefa auxiliar — e os pesos aprendidos <em>são</em> os embeddings. Intuição: <strong>palavras semelhantes tendem a aparecer nos mesmos contextos.</strong> Existem duas arquitecturas: o <strong>Skip-gram</strong>, que prevê o contexto a partir da palavra-alvo, e o <strong>CBOW</strong>, que faz o inverso. Vamos começar pelo Skip-gram, em 5 passos.</p>

          <Word2VecSkipgram />

          <h3 style={S.h3}>Passo 1 — Definir pares (palavra, contexto)</h3>
          <p style={S.p}>Para cada palavra do corpus, define-se uma janela de contexto (ex: 2 palavras para cada lado). Cada par (palavra, palavra-de-contexto) é um exemplo positivo (target = 1).</p>
          <p style={{ ...S.p, fontStyle: 'italic', color: 'var(--text-secondary)' }}>Frase: "Money is a terrible <strong>master</strong> but an excellent servant", janela = 2</p>
          <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Palavra (target)</th><th style={S.th}>Contexto</th><th style={S.th}>Label</th></tr></thead>
              <tbody>
                {[['master', 'a', 1], ['master', 'terrible', 1], ['master', 'but', 1], ['master', 'an', 1]].map(([w, c, t]) => (
                  <tr key={`${w}-${c}`}>
                    <td style={{ ...S.td, fontFamily: 'monospace', color: 'var(--accent-color)', fontWeight: 600 }}>{w}</td>
                    <td style={{ ...S.td, fontFamily: 'monospace' }}>{c}</td>
                    <td style={{ ...S.td, fontFamily: 'monospace', color: '#4a9eed', fontWeight: 700 }}>{t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Passo 2 — Exemplos Negativos (Negative Sampling)</h3>
          <p style={S.p}>Para cada par positivo, adicionar pares negativos: palavras aleatórias que <em>não</em> aparecem no contexto. O modelo aprende a distinguir pares reais de falsos:</p>
          <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Palavra</th><th style={S.th}>Contexto</th><th style={S.th}>Label</th></tr></thead>
              <tbody>
                {[['master', 'terrible', 1, '#4a9eed'], ['master', 'ring', 0, '#4a9eed'], ['master', 'but', 1, '#4a9eed'], ['but', 'late', 0, '#4a9eed']].map(([w, c, t, col]) => (
                  <tr key={`${w}-${c}`}>
                    <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 600 }}>{w}</td>
                    <td style={{ ...S.td, fontFamily: 'monospace' }}>{c}</td>
                    <td style={{ ...S.td, fontFamily: 'monospace', color: col, fontWeight: 700 }}>{t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Passo 3 — A Tarefa de Classificação</h3>
          <p style={S.p}>Dado um par (palavra w, contexto c), o modelo aprende a prever se esse par ocorreu no corpus:</p>
          <div style={S.math}>
            <BlockMath math={`\\hat{y} = P(c|w) = \\sigma(\\vec{w} \\cdot \\vec{c})`} />
          </div>

          <h3 style={S.h3}>Passo 4 — Arquitectura: Duas Matrizes de Pesos</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Componente</th><th style={S.th}>Dimensão</th><th style={S.th}>Descrição</th></tr></thead>
              <tbody>
                {[
                  ['Input (one-hot)', '1 × |V|', 'Vetor esparso da palavra-alvo'],
                  ['Matriz W', '|V| × n', 'Pesos de input → embeddings'],
                  ['Camada oculta', '1 × n', 'Embedding da palavra (n = 100–300)'],
                  ['Matriz W\'', 'n × |V|', 'Pesos oculto → output'],
                  ['Output (σ)', '1 × 1', 'Probabilidade P(c|w)'],
                ].map(([comp, dim, desc]) => (
                  <tr key={comp}><td style={S.td}><strong>{comp}</strong></td><td style={{ ...S.td, fontFamily: 'monospace', color: 'var(--accent-color)' }}>{dim}</td><td style={S.td}>{desc}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={S.p}>O input one-hot da palavra w selecciona a linha correspondente de W:</p>
          <div style={S.math}>
            <BlockMath math={`\\vec{h} = \\vec{x} \\cdot W = [w_{1,w},\\ w_{2,w},\\ ...,\\ w_{n,w}]`} />
          </div>

          <h3 style={S.h3}>Passo 5 — Extrair os Embeddings</h3>
          <p style={S.p}>Após o treino, os embeddings de cada palavra encontram-se nas <strong>linhas da matriz W</strong>:</p>
          <div style={S.math}>
            <BlockMath math={`\\vec{master} = [w_{1,master},\\ w_{2,master},\\ w_{3,master}] = [0.445,\\ 0.897,\\ 0.966]`} />
          </div>
          <p style={S.p}>Em vez de um vetor esparso de dimensão |V|, cada palavra é agora um vetor denso de dimensão n (tipicamente 100–300).</p>

          <h3 style={S.h3}>A Outra Arquitectura: CBOW (Continuous Bag-of-Words)</h3>
          <p style={S.p}>O CBOW é o <strong>inverso do Skip-gram</strong>: em vez de usar a palavra-alvo para prever o contexto, usa as palavras de <strong>contexto</strong> para prever a palavra-alvo. Os vetores one-hot de todas as palavras de contexto passam pela mesma matriz <InlineMath math="W" /> (pesos partilhados) e os embeddings resultantes são <strong>combinados (tipicamente pela média)</strong> antes de seguirem para <InlineMath math="W'" />, que produz a distribuição sobre o vocabulário:</p>

          <CBOWDiagram />

          <p style={S.p}>Tal como no Skip-gram, os embeddings finais são extraídos das linhas de <InlineMath math="W" /> depois do treino — a diferença está apenas em <strong>que par (input, output) é usado durante o treino</strong>:</p>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>Skip-gram</th><th style={S.th}>CBOW</th></tr></thead>
            <tbody>
              <tr><td style={S.td}>Input</td><td style={S.td}>1 palavra-alvo (one-hot)</td><td style={S.td}>Várias palavras de contexto (médias)</td></tr>
              <tr><td style={S.td}>Output</td><td style={S.td}>Várias palavras de contexto</td><td style={S.td}>1 palavra-alvo</td></tr>
              <tr><td style={S.td}>Pares de treino por janela</td><td style={S.td}>Vários (1 por palavra de contexto)</td><td style={S.td}>1 (contexto inteiro → alvo)</td></tr>
              <tr><td style={S.td}>Desempenho</td><td style={S.td}>Melhor para palavras raras e corpora pequenos</td><td style={S.td}>Mais rápido a treinar; melhor para palavras frequentes</td></tr>
            </tbody>
          </table>

          <h3 style={S.h3}>Quadro Resumo: o que resolve cada método</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr>
                <th style={S.th}>Problema do BoW</th>
                <th style={{ ...S.th, textAlign: 'center' }}>PPMI</th>
                <th style={{ ...S.th, textAlign: 'center' }}>Word2Vec</th>
              </tr></thead>
              <tbody>
                {[
                  ['1. Maldição da dimensionalidade', false, true],
                  ['2. Ausência de relações semânticas', true, true],
                  ['3. Todas as palavras com a mesma importância', true, true],
                  ['4. Contexto muda o significado', false, false],
                ].map(([prob, ppmi, w2v]) => (
                  <tr key={prob}>
                    <td style={S.td}>{prob}</td>
                    <td style={{ ...S.td, textAlign: 'center', fontSize: '1.1rem' }}>{ppmi ? '' : ''}</td>
                    <td style={{ ...S.td, textAlign: 'center', fontSize: '1.1rem' }}>{w2v ? '' : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.note}> O problema 4 (contexto dinâmico) só é resolvido por modelos de atenção — BERT e GPT, abordados nas próximas lectures.</div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 6 === */}
        <div style={S.section}>
          <h2 style={S.h2}>6. Classificação com Word Embeddings</h2>
          <p style={S.p}>Os embeddings resolvem a representação de palavras — mas um classificador precisa de um único vetor por documento. Há duas estratégias:</p>

          <h3 style={S.h3}>Estratégia 1 — Média dos Vetores de Palavras</h3>
          <p style={S.p}>A forma mais simples de obter um único vetor por documento:</p>
          <div style={S.math}>
            <BlockMath math={`\\vec{d} = \\frac{1}{|S|} \\sum_{w \\in S} \\vec{w}`} />
          </div>

          <p style={S.p}>Exemplo — "Great movie":</p>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', margin: '1rem 0', fontFamily: 'monospace', fontSize: '0.88rem', lineHeight: 2 }}>
            <div><InlineMath math={`\\vec{great} = [0.034,\\ 0.235,\\ 0.987]`} /></div>
            <div><InlineMath math={`\\vec{movie} = [0.765,\\ 0.523,\\ 0.895]`} /></div>
            <div style={{ borderTop: '1px solid var(--card-border)', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
              <InlineMath math={`\\vec{d} = \\frac{[0.034+0.765,\\ 0.235+0.523,\\ 0.987+0.895]}{2} = [0.399,\\ 0.379,\\ 0.941]`} />
            </div>
          </div>
          <p style={S.p}>O vetor resultante entra no classificador com apenas n=3 dimensões em vez de |V|.</p>

          <h3 style={S.h3}>Estratégia 2 — Redes Neuronais Recorrentes (RNN / LSTM)</h3>
          <p style={S.p}>Se não se quiser perder a informação sequencial com uma média, usa-se uma RNN ou LSTM. Estas redes processam os embeddings palavra a palavra, mantendo um estado oculto que acumula contexto. O estado final é passado ao classificador.</p>

          <div style={S.highlight}>
            <strong>Quando usar cada estratégia:</strong>
            <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 2 }}>
              <li><strong>Média</strong> — classificação simples, eficiente, quando a ordem não importa muito</li>
              <li><strong>RNN/LSTM</strong> — tradução, geração de texto, NER — quando a ordem das palavras é crucial</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
