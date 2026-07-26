import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath } from 'react-katex';
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

const MLMNSPDiagram = () => {
  const [mode, setMode] = useState('mlm');
  const [revealed, setRevealed] = useState(false);
  const [nspPair, setNspPair] = useState('isnext');

  const mlmTokens = ['[CLS]', 'O', 'gato', '[MASK]', 'no', 'telhado', '[SEP]'];
  const maskIdx = 3;
  const candidates = [['dorme', 0.42], ['senta', 0.21], ['está', 0.15], ['caiu', 0.08]];

  const nspExamples = {
    isnext: {
      a: ['[CLS]', 'O', 'gato', 'dorme', 'no', 'telhado', '.', '[SEP]'],
      b: ['Ele', 'acorda', 'ao', 'pôr-do-sol', '.', '[SEP]'],
      label: 'IsNext', prob: 0.93, color: '#4a9eed',
    },
    notnext: {
      a: ['[CLS]', 'O', 'gato', 'dorme', 'no', 'telhado', '.', '[SEP]'],
      b: ['Bananas', 'são', 'ricas', 'em', 'potássio', '.', '[SEP]'],
      label: 'NotNext', prob: 0.97, color: '#4a9eed',
    },
  };
  const nsp = nspExamples[nspPair];

  const tokenBox = (tok, color, key) => (
    <div key={key} style={{ padding: '0.35rem 0.6rem', borderRadius: 6, fontFamily: 'monospace', fontSize: '0.82rem', fontWeight: tok.startsWith('[') ? 700 : 500, background: `${color}15`, border: `1px solid ${color}50`, color }}>
      {tok}
    </div>
  );

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Pré-treino do BERT — Explorador Interativo</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem' }}>
        {[['mlm', 'MLM — Masked Language Modeling'], ['nsp', 'NSP — Next Sentence Prediction']].map(([key, label]) => (
          <button key={key} onClick={() => { setMode(key); setRevealed(false); }} style={{
            padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem',
            background: mode === key ? 'var(--accent-color)' : 'var(--bg-primary)',
            color: mode === key ? 'white' : 'var(--text-primary)',
            border: `1.5px solid ${mode === key ? 'var(--accent-color)' : 'var(--card-border)'}`,
            transition: 'all 0.2s'
          }}>{label}</button>
        ))}
      </div>

      {mode === 'mlm' ? (
        <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: '1.5px solid var(--card-border)' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 0, marginBottom: '1rem' }}>
            ~15% dos tokens são substituídos por <code style={S.code}>[MASK]</code>. O BERT vê <strong>todo o resto da frase</strong> (esquerda <em>e</em> direita) para prever o token original.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center', marginBottom: '0.6rem' }}>
            {mlmTokens.map((tok, i) => tokenBox(tok, i === maskIdx ? '#4a9eed' : (i < maskIdx ? 'var(--accent-color)' : '#4a9eed'), i))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginBottom: '1rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            <span>← contexto esquerdo ("O gato")</span>
            <span>contexto direito ("no telhado") →</span>
          </div>
          {!revealed ? (
            <button onClick={() => setRevealed(true)} style={{ padding: '0.5rem 1.2rem', borderRadius: 20, cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem', background: '#4a9eed', color: 'white', border: 'none' }}>
              Revelar previsão de [MASK]
            </button>
          ) : (
            <div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Distribuição softmax sobre o vocabulário (top-4):</div>
              {candidates.map(([word, p]) => (
                <div key={word} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
                  <span style={{ width: 60, fontFamily: 'monospace', fontSize: '0.8rem', color: word === 'dorme' ? '#4a9eed' : 'var(--text-primary)', fontWeight: word === 'dorme' ? 700 : 500, textAlign: 'right' }}>{word}</span>
                  <div style={{ flex: 1, background: 'var(--bg-secondary)', borderRadius: 4, overflow: 'hidden', height: 16, maxWidth: 240 }}>
                    <div style={{ width: `${p * 100}%`, height: '100%', background: word === 'dorme' ? '#4a9eed' : 'var(--accent-color)', opacity: word === 'dorme' ? 1 : 0.5 }} />
                  </div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', width: 40 }}>{(p * 100).toFixed(0)}%</span>
                </div>
              ))}
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.75rem', marginBottom: 0 }}>
                "dorme" ganha porque o modelo combina pistas de <strong>ambos os lados</strong>: "O gato ___" (sujeito + verbo provável) e "___ no telhado" (lugar onde um gato costuma estar). Um modelo unidirecional (GPT) só veria "O gato ___".
              </p>
            </div>
          )}
        </div>
      ) : (
        <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: '1.5px solid var(--card-border)' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 0, marginBottom: '1rem' }}>
            Dado um par de frases (A, B) separadas por <code style={S.code}>[SEP]</code>, o BERT prevê se B é a frase <strong>seguinte real</strong> de A (IsNext) ou uma frase aleatória (NotNext) — usando apenas a representação final de <code style={S.code}>[CLS]</code>.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
            {[['isnext', 'Par "IsNext"'], ['notnext', 'Par "NotNext"']].map(([key, label]) => (
              <button key={key} onClick={() => setNspPair(key)} style={{
                padding: '0.35rem 0.8rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem',
                background: nspPair === key ? nspExamples[key].color : 'var(--bg-secondary)',
                color: nspPair === key ? 'white' : 'var(--text-primary)',
                border: `1.5px solid ${nspPair === key ? nspExamples[key].color : 'var(--card-border)'}`,
                transition: 'all 0.2s'
              }}>{label}</button>
            ))}
          </div>

          <div style={{ marginBottom: '0.4rem', textAlign: 'left' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-color)', marginBottom: '0.3rem' }}>Frase A</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>{nsp.a.map((tok, i) => tokenBox(tok, 'var(--accent-color)', `a${i}`))}</div>
          </div>
          <div style={{ margin: '0.5rem 0', textAlign: 'left' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38bdf8', marginBottom: '0.3rem' }}>Frase B</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>{nsp.b.map((tok, i) => tokenBox(tok, '#38bdf8', `b${i}`))}</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginTop: '1rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>[CLS] final →</span>
            <div style={{ padding: '0.5rem 1rem', borderRadius: 8, background: `${nsp.color}15`, border: `1.5px solid ${nsp.color}`, fontWeight: 700, color: nsp.color, fontSize: '0.9rem' }}>
              {nsp.label} ({(nsp.prob * 100).toFixed(0)}%)
            </div>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.75rem', marginBottom: 0 }}>
            {nspPair === 'isnext'
              ? 'B continua logicamente A (o gato adormecido acorda) — o modelo prevê IsNext com alta confiança.'
              : 'B não tem relação temática com A — o modelo prevê NotNext com alta confiança.'}
            {' '}<strong>Nota:</strong> RoBERTa e modelos posteriores removeram o NSP por se ter mostrado pouco útil — MLM sozinho já aprende boas representações.
          </p>
        </div>
      )}
    </div>
  );
};

const BertEmbeddingsDiagram = () => {
  const tokens = ['[CLS]', 'my', 'dog', 'is', 'cute', '[SEP]', 'he', 'likes', 'play', '##ing', '[SEP]'];
  const segments = [0,0,0,0,0,0,1,1,1,1,1];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Input Embeddings do BERT — 3 Componentes Somadas</p>
      <div style={{ overflowX: 'auto' }}>
        <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '0.3rem', minWidth: 600 }}>
          {[
            ['Token', tokens.map(t => t), 'var(--accent-color)'],
            ['Segment', segments.map(s => `E_${s === 0 ? 'A' : 'B'}`), '#4a9eed'],
            ['Position', tokens.map((_, i) => `E_${i}`), '#4a9eed'],
          ].map(([label, vals, color]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <div style={{ width: 70, fontSize: '0.78rem', fontWeight: 700, color, flexShrink: 0 }}>{label}</div>
              {vals.map((v, i) => (
                <div key={i} style={{ width: 50, textAlign: 'center', fontSize: '0.7rem', fontFamily: 'monospace', background: `${color}15`, border: `1px solid ${color}40`, borderRadius: 4, padding: '0.25rem 0', color, flexShrink: 0 }}>{v}</div>
              ))}
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'center', margin: '0.2rem 0' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>+ (soma elemento a elemento) ↓</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <div style={{ width: 70, fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', flexShrink: 0 }}>Input</div>
            {tokens.map((_, i) => (
              <div key={i} style={{ width: 50, textAlign: 'center', fontSize: '0.7rem', fontFamily: 'monospace', background: 'rgba(74,158,237,0.18)', border: '1px solid var(--accent-color)', borderRadius: 4, padding: '0.25rem 0', color: 'var(--text-primary)', flexShrink: 0 }}>hᵢ</div>
            ))}
          </div>
        </div>
      </div>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '1rem', marginBottom: 0 }}>
        <strong>Token Embedding</strong>: identidade do subword (WordPiece). <strong>Segment Embedding</strong>: a que frase pertence (A ou B) — usado na NSP. <strong>Position Embedding</strong>: posição absoluta. Note <code style={S.code}>play + ##ing</code> — o WordPiece divide palavras raras em subpalavras conhecidas.
      </p>
    </div>
  );
};

const CausalMaskDiagram = () => {
  const tokens = ['Ik', 'houd', 'van', 'lamas'];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Máscara Causal — Decoder GPT</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginLeft: 60, marginBottom: '0.4rem' }}>
            {tokens.map(t => <div key={t} style={{ width: 52, textAlign: 'center', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{t}</div>)}
          </div>
          {tokens.map((rowTok, ri) => (
            <div key={rowTok} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.3rem' }}>
              <div style={{ width: 56, textAlign: 'right', paddingRight: '0.5rem', fontSize: '0.82rem', fontWeight: 600, color: 'var(--accent-color)' }}>{rowTok}</div>
              {tokens.map((colTok, ci) => {
                const canAttend = ci <= ri;
                return (
                  <div key={colTok} style={{
                    width: 52, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: canAttend ? 'rgba(74,158,237,0.18)' : 'var(--bg-primary)',
                    border: `1px solid ${canAttend ? 'rgba(74,158,237,0.35)' : 'var(--card-border)'}`,
                    borderRadius: 4, margin: '0 1px', fontSize: '0.85rem',
                  }}>
                    {canAttend ? '' : ''}
                  </div>
                );
              })}
            </div>
          ))}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '0.75rem', fontSize: '0.8rem' }}>
            <span style={{ color: 'var(--accent-color)' }}> pode atender</span>
            <span style={{ color: 'var(--text-secondary)' }}> mascarado (−∞)</span>
          </div>
        </div>
      </div>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>"houd" vê apenas "Ik" e "houd" — nunca os tokens futuros. Durante o treino, isto garante que o modelo nunca "faça batota" vendo o que gerou a seguir.</p>
    </div>
  );
};

const GPTOutputDiagram = () => {
  const logits = [['Sarah', 2.8], ['John', 1.7], ['all', 1.1], ['the', 0.4]];
  const exps = logits.map(([, l]) => Math.exp(l));
  const sumExp = exps.reduce((a, b) => a + b, 0);
  const probs = logits.map(([w], i) => [w, exps[i] / sumExp]);
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Da Última Camada à Palavra Gerada</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
        <div style={{ padding: '0.5rem 0.9rem', borderRadius: 8, background: 'rgba(74,158,237,0.10)', border: '1.5px solid var(--accent-color)', fontWeight: 700, color: 'var(--accent-color)', fontSize: '0.9rem' }}>
          <InlineMath math="h_N" />
        </div>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>→ Linear (W) →</div>
        <div style={{ padding: '0.5rem 0.9rem', borderRadius: 8, background: 'rgba(2,132,199,0.12)', border: '1.5px solid #0284c7', fontWeight: 700, color: '#4a9eed', fontSize: '0.9rem' }}>
          logits ∈ ℝ<sup>|V|</sup>
        </div>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>→ softmax →</div>
        <div style={{ padding: '0.5rem 0.9rem', borderRadius: 8, background: 'rgba(74,158,237,0.10)', border: '1.5px solid #7dd3fc', fontWeight: 700, color: '#4a9eed', fontSize: '0.9rem' }}>
          P(w | contexto)
        </div>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>→ argmax/sample →</div>
        <div style={{ padding: '0.5rem 0.9rem', borderRadius: 8, background: 'rgba(56,189,248,0.12)', border: '1.5px solid #38bdf8', fontWeight: 700, color: '#38bdf8', fontSize: '0.9rem' }}>
          ŵ
        </div>
      </div>

      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1rem 1.25rem', border: '1.5px solid var(--card-border)', textAlign: 'left', maxWidth: 360, margin: '0 auto' }}>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>Exemplo (top-4 candidatos para o próximo token):</div>
        {probs.map(([word, p], i) => (
          <div key={word} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
            <span style={{ width: 50, fontFamily: 'monospace', fontSize: '0.8rem', color: i === 0 ? '#38bdf8' : 'var(--text-primary)', fontWeight: i === 0 ? 700 : 500, textAlign: 'right' }}>{word}</span>
            <div style={{ flex: 1, background: 'var(--bg-secondary)', borderRadius: 4, overflow: 'hidden', height: 16 }}>
              <div style={{ width: `${p * 100}%`, height: '100%', background: i === 0 ? '#38bdf8' : 'var(--accent-color)', opacity: i === 0 ? 1 : 0.5 }} />
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', width: 40 }}>{(p * 100).toFixed(0)}%</span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.75rem', marginBottom: 0 }}>
        O estado oculto final <InlineMath math="h_N" /> é projectado por uma matriz <InlineMath math="W" /> (Linear) para um vector de <strong>logits</strong> com um valor por palavra do vocabulário. O <strong>softmax</strong> converte estes valores numa distribuição de probabilidade. Com <InlineMath math="\text{argmax}" /> escolhe-se sempre o token mais provável (greedy decoding); com <strong>sampling</strong> (controlado por temperature/top_p/top_k) introduz-se variedade.
      </p>
    </div>
  );
};

const PoolingDiagram = () => {
  const [strategy, setStrategy] = useState('concat4');
  const strategies = {
    first: { label: 'First Layer', f1: 91.0, layers: [1], op: 'usar', desc: 'Usa apenas a saída da camada 1 (mais perto do input). Captura sobretudo informação léxica/sintáctica de baixo nível — ainda pouco contextualizada. É o pior resultado: a camada 1 mal teve oportunidade de misturar contexto via atenção.' },
    last: { label: 'Last Hidden Layer', f1: 94.9, layers: [12], op: 'usar', desc: 'A escolha "óbvia" — usar só a representação final (camada 12). Já é fortemente contextualizada, mas está muito especializada nos objectivos de pré-treino (MLM/NSP), o que pode não ser ideal para outra tarefa (NER).' },
    sumAll: { label: 'Sum All 12 Layers', f1: 95.5, layers: [1,2,3,4,5,6,7,8,9,10,11,12], op: 'somar', desc: 'Soma elemento-a-elemento as 12 camadas. Combina informação de todos os níveis de abstração (sintáctico → semântico), mas a soma "mistura" tudo no mesmo espaço — informação complementar pode anular-se ou diluir-se.' },
    secondLast: { label: 'Second-to-Last Hidden', f1: 95.6, layers: [11], op: 'usar', desc: 'Usa a penúltima camada em vez da última. Ligeiramente menos especializada nos objectivos de pré-treino do que a última camada, o que a torna um pouco mais "geral" e transferível para NER.' },
    sum4: { label: 'Sum Last Four Hidden', f1: 95.9, layers: [9,10,11,12], op: 'somar', desc: 'Soma apenas as últimas 4 camadas (as mais contextualizadas), em vez de todas as 12. Foca-se nas representações mais ricas, evitando diluir com as camadas iniciais mais "léxicas".' },
    concat4: { label: 'Concat Last Four Hidden ', f1: 96.1, layers: [9,10,11,12], op: 'concatenar', desc: 'Em vez de somar (que mistura tudo no mesmo espaço de 768 dims), concatena as 4 últimas camadas — vector final de 4×768 = 3072 dims. Cada camada mantém a sua informação separada e intacta; o classificador a jusante aprende a pesar cada uma. Melhor resultado.' },
  };
  const s = strategies[strategy];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>De Onde Vêm Estes Números? — Visualizando o Pooling</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center', marginBottom: '1.25rem' }}>
        {Object.entries(strategies).map(([key, v]) => (
          <button key={key} onClick={() => setStrategy(key)} style={{
            padding: '0.35rem 0.7rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.74rem',
            background: strategy === key ? 'var(--accent-color)' : 'var(--bg-primary)',
            color: strategy === key ? 'white' : 'var(--text-primary)',
            border: `1.5px solid ${strategy === key ? 'var(--accent-color)' : 'var(--card-border)'}`,
            transition: 'all 0.2s'
          }}>{v.label}</button>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '0.25rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
        <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginRight: '0.4rem', alignSelf: 'center' }}>input →</div>
        {Array.from({ length: 12 }, (_, i) => i + 1).map(layer => {
          const active = s.layers.includes(layer);
          return (
            <div key={layer} style={{
              width: 28, height: 28, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.7rem', fontWeight: 700,
              background: active ? 'rgba(74,158,237,0.10)' : 'var(--bg-primary)',
              border: `1.5px solid ${active ? '#4a9eed' : 'var(--card-border)'}`,
              color: active ? '#4a9eed' : 'var(--text-secondary)',
            }}>{layer}</div>
          );
        })}
        <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginLeft: '0.4rem', alignSelf: 'center' }}>→ output</div>
      </div>
      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        camadas destacadas a verde → <strong style={{ color: '#4a9eed' }}>{s.op}</strong> → embedding final ({s.layers.length === 1 ? '768 dims' : (strategy === 'concat4' ? `${s.layers.length}×768 = ${s.layers.length * 768} dims` : '768 dims')})
      </div>

      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1rem 1.25rem', border: '1.5px solid var(--card-border)', textAlign: 'left', maxWidth: 480, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{s.label}</span>
          <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#4a9eed', fontSize: '1.1rem' }}>F1 = {s.f1}</span>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
      </div>
    </div>
  );
};

const KVCacheDiagram = () => {
  const [step, setStep] = useState(0);
  const tokens = ['Dear', 'Sarah', ',', 'I'];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>KV-Cache: Evitar Recomputação na Geração Auto-Regressiva</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem' }}>
        {tokens.map((_, i) => (
          <button key={i} onClick={() => setStep(i)} style={{
            padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem',
            background: step === i ? 'var(--accent-color)' : 'var(--bg-primary)',
            color: step === i ? 'white' : 'var(--text-primary)',
            border: `1.5px solid ${step === i ? 'var(--accent-color)' : 'var(--card-border)'}`,
          }}>Passo {i + 1}</button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '0.3rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
        {tokens.map((tok, i) => (
          <div key={i} style={{ textAlign: 'center', opacity: i <= step ? 1 : 0.25 }}>
            <div style={{
              padding: '0.4rem 0.7rem', borderRadius: 6, fontSize: '0.8rem', fontWeight: 600,
              background: i < step ? 'rgba(74,158,237,0.10)' : (i === step ? 'var(--accent-color)' : 'var(--bg-primary)'),
              color: i < step ? '#4a9eed' : (i === step ? 'white' : 'var(--text-secondary)'),
              border: `1px solid ${i < step ? '#4a9eed' : (i === step ? 'var(--accent-color)' : 'var(--card-border)')}`,
            }}>{tok}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
              {i < step ? 'K,V em cache' : (i === step ? 'calcula K,V (novo)' : '—')}
            </div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
        Sem cache, gerar o token N exigiria recalcular K e V para todos os N-1 tokens anteriores em todas as camadas — <InlineMath math="O(N^2)" /> trabalho redundante. Com <strong>KV-cache</strong>, os vectores K e V de tokens já processados são guardados em memória; a cada novo passo calcula-se apenas Q, K, V do token novo, reduzindo o custo por passo para <InlineMath math="O(N)" />. O preço é memória: o cache cresce linearmente com o comprimento da sequência e o número de camadas/heads — motivando técnicas como Multi-Query Attention (MQA) e Grouped-Query Attention (GQA).
      </p>
    </div>
  );
};

export default function NLP7() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/nlp" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.lectureTag}>MÓDULO 7</div>
        <h1 style={S.h1}>BERT vs GPT: Encoder-only e Decoder-only</h1>

        {/* === SECTION 1 === */}
        <div style={S.section}>
          <h2 style={S.h2}>1. Encoder-only — BERT</h2>
          <p style={S.p}>Alguns Transformers usam apenas o encoder. O objectivo não é gerar texto — é compreendê-lo e produzir <strong>embeddings contextualizados</strong> reutilizáveis. A mesma palavra tem representações diferentes dependendo do contexto ("banco" numa frase vs. noutra).</p>

          <MLMNSPDiagram />

          <h3 style={S.h3}>Embeddings de Entrada: Token + Segment + Position</h3>
          <p style={S.p}>Antes de entrar no primeiro bloco encoder, cada token é representado pela soma de três embeddings aprendidas. O BERT usa <strong>WordPiece</strong> para tokenizar — palavras raras são divididas em subpalavras (ex: "playing" → "play" + "##ing"):</p>

          <BertEmbeddingsDiagram />

          <h3 style={S.h3}>Fine-tuning para Classificação</h3>
          <p style={S.p}>No fine-tuning, adiciona-se uma camada Linear + Softmax ao topo do token [CLS]. Os pesos pré-treinados do BERT já contêm conhecimento de língua — basta treinar a camada de classificação com um dataset etiquetado pequeno.</p>

          <h3 style={S.h3}>Variantes de BERT</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Modelo</th><th style={S.th}>Ano</th><th style={S.th}>Parâmetros</th><th style={S.th}>Nota</th></tr></thead>
              <tbody>
                {[
                  ['BERT', '2019', '110M / 340M', 'Original Google'],
                  ['RoBERTa', '2019', '356M', 'Mais dados, sem NSP'],
                  ['DistilBERT', '2020', '66M', 'Destilado, mais rápido'],
                  ['ALBERT', '2020', '12M–235M', 'Parâmetros partilhados'],
                  ['DeBERTa', '2021', '134M–750M', 'Disentangled attention'],
                ].map(([m, y, p, n]) => (
                  <tr key={m}><td style={S.td}><strong>{m}</strong></td><td style={S.td}>{y}</td><td style={{ ...S.td, fontFamily: 'monospace', color: 'var(--accent-color)' }}>{p}</td><td style={S.td}>{n}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Estratégias de Pooling para Word Embeddings</h3>
          <p style={S.p}>O BERT base tem <strong>12 camadas de encoder empilhadas</strong> (o "Stacked Blocks ×N" da Lecture 6, aqui com N=12) — cada uma produz uma representação contextualizada diferente para o mesmo token. Para usar o BERT como gerador de <em>word embeddings</em> (em vez de fazer fine-tuning completo), é preciso decidir <strong>que camada(s) usar e como combiná-las</strong>. A tabela abaixo mostra o impacto dessa escolha numa tarefa de NER (Named Entity Recognition):</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Estratégia</th><th style={{ ...S.th, textAlign: 'right' }}>Dev F1 (NER)</th></tr></thead>
              <tbody>
                {[['First Layer', 91.0], ['Last Hidden Layer', 94.9], ['Sum All 12 Layers', 95.5], ['Second-to-Last Hidden', 95.6], ['Sum Last Four Hidden', 95.9], ['Concat Last Four Hidden ', 96.1]].map(([s, v]) => (
                  <tr key={s}>
                    <td style={S.td}>{s}</td>
                    <td style={{ ...S.td, textAlign: 'right', fontFamily: 'monospace', fontWeight: s.includes('') ? 700 : 400, color: s.includes('') ? '#4a9eed' : 'var(--text-primary)' }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}>
            Padrão geral: as camadas <strong>iniciais</strong> capturam informação mais sintáctica/léxica (boa para tarefas simples, mas pouco discriminativa); as camadas <strong>finais</strong> são fortemente moldadas pelos objectivos de pré-treino (MLM/NSP). Combinar <strong>várias camadas finais</strong> dá ao classificador acesso a múltiplos níveis de abstração — e <strong>concatenar</strong> (em vez de somar) preserva essa informação sem a misturar, por isso vence.
          </p>

          <PoolingDiagram />
        </div>

        <hr style={S.divider} />

        {/* === SECTION 2 === */}
        <div style={S.section}>
          <h2 style={S.h2}>2. Decoder-only: Geração Auto-Regressiva (GPT)</h2>
          <p style={S.p}>Os modelos decoder-only (GPT, ChatGPT, LLaMA) geram texto token a token, usando como input o prompt mais todos os tokens já gerados. Não há encoder — o modelo é um único stack de decoder blocks, sem a sub-camada de Enc-Dec Attention.</p>

          <CausalMaskDiagram />

          <h3 style={S.h3}>Passo a Passo da Geração</h3>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', margin: '1rem 0', fontSize: '0.88rem' }}>
            {[
              ['Passo 1', 'Input: "Write a poem"', 'Distribuição: Dear(40%), Sarah(15%), Oh(12%)', 'Dear seleccionado'],
              ['Passo 2', 'Input: "Write a poem Dear"', 'Distribuição: Sarah(52%), John(18%), all(9%)', 'Sarah seleccionado'],
              ['Passo N', 'Input: "Write a poem Dear Sarah..."', 'Processo continua até </s>', ''],
            ].map(([step, inp, dist, sel]) => (
              <div key={step} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 1fr 120px', gap: '0.5rem', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid var(--card-border)' }}>
                <span style={{ fontWeight: 700, color: 'var(--accent-color)', fontSize: '0.8rem' }}>{step}</span>
                <span style={{ color: 'var(--text-secondary)', fontFamily: 'monospace', fontSize: '0.8rem' }}>{inp}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{dist}</span>
                {sel && <span style={{ color: '#4a9eed', fontWeight: 700, fontFamily: 'monospace', fontSize: '0.82rem' }}>→ "{sel}"</span>}
              </div>
            ))}
          </div>

          <p style={S.p}>O output final passa por uma camada Linear e Softmax:</p>

          <GPTOutputDiagram />

          <h3 style={S.h3}>Inferência Eficiente: KV-Cache</h3>
          <p style={S.p}>Durante o treino, todos os tokens são processados em paralelo (teacher forcing). Mas na <strong>geração</strong>, os tokens são produzidos um a um — e cada novo token depende de todos os anteriores. Recalcular tudo a cada passo seria extremamente ineficiente:</p>

          <KVCacheDiagram />

        </div>

      </div>
    </div>
  );
}
