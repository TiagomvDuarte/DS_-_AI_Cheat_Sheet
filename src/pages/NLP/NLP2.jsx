import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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
  tag: { display: 'inline-block', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 6, padding: '0.2rem 0.6rem', fontSize: '0.8rem', fontWeight: 600, margin: '0.15rem', color: 'var(--text-primary)' },
  code: { fontFamily: 'monospace', background: 'var(--bg-secondary)', padding: '0.1rem 0.4rem', borderRadius: 4, fontSize: '0.88em', color: 'var(--accent-color)' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  note: { background: 'rgba(74,158,237,0.06)', borderLeft: '3px solid var(--accent-color)', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
};

const PipelineDiagram = () => {
  const steps = [
    'Texto Bruto',
    'Tokenização',
    'Lowercasing',
    'Stop Words',
    'Normalização (Regex)',
    'Stemming / Lemmatização',
    'PoS Filtering',
    'Texto Limpo',
  ];
  return (
    <div style={S.diagram}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
        {steps.map((label, i) => {
          const isEdge = i === 0 || i === steps.length - 1;
          return (
            <React.Fragment key={label}>
              <div style={{
                minWidth: 120, padding: '0.6rem 0.8rem', borderRadius: 10, fontSize: '0.8rem', fontWeight: isEdge ? 700 : 600,
                textAlign: 'center', lineHeight: 1.3,
                background: isEdge ? 'var(--accent-color)' : 'var(--bg-primary)',
                color: isEdge ? 'white' : 'var(--text-primary)',
                border: isEdge ? 'none' : '1.5px solid var(--accent-color)',
              }}>{label}</div>
              {i < steps.length - 1 && <span style={{ color: 'var(--accent-color)', fontSize: '1.1rem' }}>→</span>}
            </React.Fragment>
          );
        })}
      </div>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>Pipeline de pré-processamento de texto</p>
    </div>
  );
};

export default function NLP2() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/nlp" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.lectureTag}>MÓDULO 2</div>
        <h1 style={S.h1}>Pré-processamento de Texto</h1>

        {/* === SECTION 1 === */}
        <div style={S.section}>
          <h2 style={S.h2}>1. O Pipeline de Pré-processamento</h2>
          <p style={S.p}>Texto "em bruto" — com maiúsculas inconsistentes, pontuação, números, links, plurais e variações morfológicas — é demasiado ruidoso para a maioria dos modelos. O pré-processamento aplica uma série de transformações que reduzem essa variabilidade, mantendo o conteúdo informativo.</p>

          <PipelineDiagram />

          <h3 style={S.h3}>Tokenização</h3>
          <p style={S.p}>O primeiro passo é dividir o texto em unidades mais pequenas — <strong>tokens</strong> — tipicamente palavras ou pontuação. Por exemplo, <code style={S.code}>"I love Paris!"</code> torna-se <code style={S.code}>["I", "love", "Paris", "!"]</code>. Parece trivial, mas casos como contrações (<code style={S.code}>"don't"</code> → <code style={S.code}>["do", "n't"]</code>) ou palavras com hífen mostram que a tokenização tem regras específicas por idioma e por tarefa.</p>

          <h3 style={S.h3}>Lowercasing</h3>
          <p style={S.p}>Converter todo o texto para minúsculas reduz o vocabulário, tratando <code style={S.code}>"Paris"</code>, <code style={S.code}>"paris"</code> e <code style={S.code}>"PARIS"</code> como o mesmo token. Tem um custo: pode perder informação útil (nomes próprios, siglas como <code style={S.code}>"US"</code> vs <code style={S.code}>"us"</code>), por isso nem sempre é desejável — depende da tarefa.</p>

          <h3 style={S.h3}>Stop Words</h3>
          <p style={S.p}>Palavras extremamente frequentes mas pouco informativas — artigos, preposições, conjunções — podem ser removidas para reduzir ruído e dimensionalidade:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '1rem' }}>
            {['the', 'a', 'an', 'is', 'in', 'of', 'and', 'to', 'that', 'it'].map(w => (
              <span key={w} style={S.tag}>{w}</span>
            ))}
          </div>
          <p style={S.p}>Cuidado: para tarefas como análise de sentimento ou deteção de negação, palavras como <code style={S.code}>"not"</code> ou <code style={S.code}>"no"</code> podem ser stop words "default" mas carregam informação crítica. A lista de stop words deve ser adaptada à tarefa.</p>

          <h3 style={S.h3}>Normalização com Regex</h3>
          <p style={S.p}>Expressões regulares permitem normalizar padrões recorrentes: substituir URLs por <code style={S.code}>&lt;URL&gt;</code>, números por <code style={S.code}>&lt;NUM&gt;</code>, remover pontuação repetida (<code style={S.code}>"!!!"</code> → <code style={S.code}>"!"</code>) ou caracteres especiais. Isto reduz o vocabulário sem perder a estrutura geral da frase.</p>

          <h3 style={S.h3}>Stemming vs. Lemmatização</h3>
          <p style={S.p}>Ambas as técnicas reduzem palavras à sua forma base, mas de formas muito diferentes:</p>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Técnica</th><th style={S.th}>Como funciona</th><th style={S.th}>Exemplo</th></tr></thead>
            <tbody>
              <tr><td style={S.td}><strong>Stemming</strong></td><td style={S.td}>Corta sufixos com regras heurísticas, sem garantir que o resultado é uma palavra real</td><td style={S.td}><code style={S.code}>"studies"</code> → <code style={S.code}>"studi"</code></td></tr>
              <tr><td style={S.td}><strong>Lemmatização</strong></td><td style={S.td}>Usa dicionário/análise morfológica para devolver a forma canónica (lema) da palavra</td><td style={S.td}><code style={S.code}>"studies"</code> → <code style={S.code}>"study"</code></td></tr>
            </tbody>
          </table>
          <p style={S.p}>O stemming é mais rápido mas mais "bruto"; a lemmatização é mais precisa mas computacionalmente mais cara, pois normalmente exige saber a classe gramatical (PoS) da palavra.</p>

          <h3 style={S.h3}>PoS Filtering</h3>
          <p style={S.p}>Com base na <strong>Part-of-Speech tagging</strong> (classe gramatical de cada palavra — substantivo, verbo, adjetivo, etc.), é possível filtrar tokens irrelevantes para a tarefa. Por exemplo, para tarefas de extração de tópicos, manter apenas substantivos e adjetivos costuma ser mais informativo do que manter todas as classes de palavras.</p>

          <div style={S.note}> <strong>Regra de ouro:</strong> não há um pipeline "correto" universal. Cada passo é opcional e a sua aplicação depende da tarefa, do idioma e do modelo a jusante. Modelos modernos baseados em subword tokenization (Lecture 4) muitas vezes prescindem de stemming, lemmatização e remoção de stop words.</div>

          <p style={S.p}>Com o texto limpo e normalizado, o próximo passo é transformá-lo em algo que um modelo consiga processar — números. É o que veremos no início da próxima lecture, com o <strong>Bag-of-Words</strong>.</p>
        </div>

      </div>
    </div>
  );
}
