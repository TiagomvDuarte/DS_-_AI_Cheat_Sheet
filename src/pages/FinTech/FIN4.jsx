import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './FinTech';

const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  card: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.25rem' },
  highlight: { background: `${color}12`, border: `1px solid ${color}30`, borderRadius: 8, padding: '0.9rem 1.1rem', marginTop: '0.8rem', fontSize: '0.93rem', color: 'var(--text-primary)', lineHeight: 1.7 },
  note: { background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 8, padding: '0.8rem 1rem', marginTop: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  grid3: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.85rem' },
};

function FinBERTArchSVG() {
  const layers = [
    { label: 'Input: [CLS] "earnings beat consensus..." [SEP]', color: '#f97316', y: 20 },
    { label: 'Tokenizacao + WordPiece (vocab 30.522 tokens)', color: '#f97316', y: 58 },
    { label: 'Embeddings: Token + Segment + Position', color: '#f97316', y: 96 },
    { label: 'BERT Encoder x12 (Transformer blocks, d=768, h=12)', color: '#f97316', y: 134 },
    { label: 'Fine-tuning head: Linear(768, 3) + Softmax', color: '#f97316', y: 172 },
    { label: 'Output: Positive / Negative / Neutral (p1, p2, p3)', color: '#f97316', y: 210 },
  ];
  return (
    <svg viewBox="0 0 560 27" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="245" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={15} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">FinBERT — Arquitetura e Pipeline de Sentiment Analysis Financeiro</text>
      {layers.map((l, i) => (
        <g key={i}>
          <rect x={30} y={l.y} width={500} height={28} fill={l.color} rx="5" opacity="0.18" />
          <rect x={30} y={l.y} width={500} height={28} fill="none" stroke={l.color} strokeWidth="1.5" rx="5" />
          <text x={280} y={l.y + 18} textAnchor="middle" fill={l.color} fontSize="9.5" fontWeight="600">{l.label}</text>
          {i < layers.length - 1 && (
            <line x1={280} y1={l.y + 28} x2={280} y2={l.y + 38} stroke={l.color} strokeWidth="1.5" strokeDasharray="3,2" />
          )}
        </g>
      ))}
<text x={280} y={254} textAnchor="middle" fill="#fb923c" fontSize="9">
  <tspan x={280} dy="0">FinBERT: ProsusAI/finbert (HuggingFace). Pre-trained em 4.9B tokens financeiros.</tspan>
  <tspan x={280} dy="12">Reuters + Bloomberg. F1 85%+ FinancialPhraseBank.</tspan>
</text>
    </svg>
  );
}

function SentimentSignalSVG() {
  const days = Array.from({ length: 20 }, (_, i) => i + 1);
  const sentiment = [0.2, 0.45, 0.6, 0.3, -0.1, -0.4, -0.6, -0.3, 0.1, 0.5,
                     0.7, 0.8, 0.6, 0.4, 0.1, -0.2, -0.5, -0.3, 0.2, 0.4];
  const price = [100, 101.2, 102.8, 102.1, 101.5, 100.2, 99.1, 99.5, 100.1, 101.4,
                 103.2, 105.1, 104.8, 104.2, 103.9, 103.1, 102.0, 102.3, 103.1, 103.8];
  const W = 480, H = 90, ox = 40, oy = 30;
  const scaleX = (i) => ox + (i / (days.length - 1)) * W;
  const minP = 98.5, maxP = 106;
  const minS = -0.8, maxS = 1.0;
  const scaleP = (v) => oy + H - ((v - minP) / (maxP - minP)) * H;
  const scaleS = (v) => oy + H - ((v - minS) / (maxS - minS)) * H;
  const pathP = price.map((v, i) => `${i === 0 ? 'M' : 'L'}${scaleX(i).toFixed(1)},${scaleP(v).toFixed(1)}`).join(' ');
  return (
    <svg viewBox="0 0 560 195" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="195" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Sentiment Score vs. Price — Event-Driven Signal (20 dias)</text>
      {sentiment.map((s, i) => {
        const x = scaleX(i);
        const barH = Math.abs(s) * 35;
        const barY = s > 0 ? oy + H - barH : oy + H;
        return (
          <rect key={i} x={x - 8} y={barY} width={16} height={barH}
            fill={s > 0 ? '#f97316' : '#f97316'} opacity="0.4" rx="2" />
        );
      })}
      <path d={pathP} fill="none" stroke="#f97316" strokeWidth="2" />
      <line x1={ox} y1={oy} x2={ox} y2={oy + H} stroke="var(--card-border)" strokeWidth="1" />
      <line x1={ox} y1={oy + H} x2={ox + W} y2={oy + H} stroke="var(--card-border)" strokeWidth="1" />
      <text x={ox - 5} y={oy + 5} textAnchor="end" fill="#fb923c" fontSize="8">{maxP}</text>
      <text x={ox - 5} y={oy + H} textAnchor="end" fill="#fb923c" fontSize="8">{minP}</text>
      <rect x={180} y={145} width={10} height={8} fill="#f97316" opacity="0.5" />
      <text x={194} y={153} fill="#f97316" fontSize="8">Sentiment Positivo</text>
      <rect x={290} y={145} width={10} height={8} fill="#f97316" opacity="0.5" />
      <text x={304} y={153} fill="#f97316" fontSize="8">Sentiment Negativo</text>
      <line x1={380} y1={149} x2={390} y2={149} stroke="#f97316" strokeWidth="2" />
      <text x={394} y={153} fill="#f97316" fontSize="8">Preco</text>
      <text x={280} y={170} textAnchor="middle" fill="#fb923c" fontSize="9">Pearson r(sentiment[t-1], return[t]) = 0.62 (p &lt; 0.01). Lead time: 1-2 dias. Dataset: 8.400 artigos Reuters.</text>
      <text x={280} y={186} textAnchor="middle" fill="#fb923c" fontSize="9">Cuidado: look-ahead bias — usar apenas noticias publicadas antes do fecho de mercado T para prever retorno T+1.</text>
    </svg>
  );
}

function NLPPipelineSVG() {
  const steps = [
    { label: 'Source', lines: ['Reuters', 'Bloomberg', 'SEC EDGAR', '8-K / 10-K', 'Earnings'], color: '#f97316' },
    { label: 'Ingest', lines: ['RSS feeds', 'EDGAR XBRL', 'Eikon API', 'Web scrape'], color: '#f97316' },
    { label: 'Preprocess', lines: ['Sent. split', 'NER: ORG', 'MONEY', 'DATE / %'], color: '#f97316' },
    { label: 'FinBERT', lines: ['Positive', 'Negative', 'Neutral', '+ confidence'], color: '#f97316' },
    { label: 'Aggregate', lines: ['Weighted avg', 'por recencia', 'Reuters > X', 'por empresa'], color: '#f97316' },
    { label: 'Signal', lines: ['Percentile', 'vs 90d hist.', 'Long / Short', '/ Neutral'], color: '#f97316' },
  ];
  const boxW = 84, boxH = 138, gap = 10, marginX = 12;
  const totalW = steps.length * boxW + (steps.length - 1) * gap + marginX * 2;
  return (
    <svg viewBox={`0 0 ${totalW} 190`} style={{ width: '100%', borderRadius: 8 }}>
      <rect width={totalW} height="180" fill="var(--bg-secondary)" rx="8" />
      <text x={totalW / 2} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Pipeline NLP Financeiro — Da Noticia ao Sinal de Trading</text>
      {steps.map((s, i) => {
        const x = marginX + i * (boxW + gap);
        const cx = x + boxW / 2;
        return (
          <g key={i}>
            <rect x={x} y={24} width={boxW} height={boxH} fill={s.color} rx="6" opacity="0.12" />
            <rect x={x} y={24} width={boxW} height={boxH} fill="none" stroke={s.color} strokeWidth="1.5" rx="6" />
            <text x={cx} y={40} textAnchor="middle" fill={s.color} fontSize="10" fontWeight="700">{s.label}</text>
            <line x1={x + 6} y1={46} x2={x + boxW - 6} y2={46} stroke={s.color} strokeWidth="0.8" opacity="0.4" />
            {s.lines.map((ln, j) => (
              <text key={j} x={cx} y={57 + j * 16} textAnchor="middle" fill="#fb923c" fontSize="8">{ln}</text>
            ))}
            {i < steps.length - 1 && (
              <polygon points={`${x + boxW + 1},${24 + boxH / 2 - 4} ${x + boxW + gap - 1},${24 + boxH / 2} ${x + boxW + 1},${24 + boxH / 2 + 4}`} fill={s.color} opacity="0.7" />
            )}
          </g>
        );
      })}
      <text x={totalW / 2} y={182} textAnchor="middle" fill="#fb923c" fontSize="9">Latencia end-to-end: ~800ms por documento. Throughput: 50.000+ documentos/dia em producao (AWS SageMaker).</text>
    </svg>
  );
}

function SECFilingsSVG() {
  const filings = [
    { form: '10-K', freq: 'Anual', content: 'Business, Risk Factors, MD&A, Financials, Controls', nlp: 'Sentiment MD&A, mudancas YoY em Risk Factors', color: '#f97316' },
    { form: '10-Q', freq: 'Trimestral', content: 'Financials, MD&A update, Legal proceedings', nlp: 'Earnings surprise prediction, guidance tone', color: '#f97316' },
    { form: '8-K', freq: 'Evento', content: 'Material events: M&A, earnings, exec changes', nlp: 'Event-driven trading, M&A target detection', color: '#f97316' },
    { form: 'S-1', freq: 'IPO', content: 'Business, risk, financials, use of proceeds', nlp: 'IPO performance prediction via tone analysis', color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 175" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="175" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">SEC EDGAR — Filings e Aplicacoes NLP (EDGAR Full-Text Search API)</text>
      {['Formulario', 'Freq.', 'Conteudo', 'Aplicacao NLP'].map((h, i) => (
        <text key={i} x={[12, 80, 148, 370][i]} y={30} fill="#fb923c" fontSize="9" fontWeight="700">{h}</text>
      ))}
      <line x1="8" y1="35" x2="552" y2="35" stroke="var(--card-border)" strokeWidth="1" />
      {filings.map((f, i) => {
        const y = 40 + i * 31;
        return (
          <g key={i}>
            <rect x="8" y={y} width="544" height="27" fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'transparent'} rx="3" />
            <text x={14} y={y + 17} fill={f.color} fontSize="10" fontWeight="700">{f.form}</text>
            <text x={82} y={y + 17} fill="#fb923c" fontSize="9">{f.freq}</text>
            <text x={150} y={y + 17} fill="#e2e8f0" fontSize="8.5">{f.content}</text>
            <text x={372} y={y + 17} fill="#fb923c" fontSize="8.5">{f.nlp}</text>
          </g>
        );
      })}
      <text x={280} y={168} textAnchor="middle" fill="#fb923c" fontSize="9">EDGAR FULL-TEXT SEARCH: efts.sec.gov/hits.json?q="revenue+guidance"&dateRange=custom&startdt=2024-01-01. 800k+ filings/ano.</text>
    </svg>
  );
}

export default function FIN4() {
  const mod = modules[3];
  return (
    <div style={S.page}>
      <Link to="/fintech" style={S.back}>← FinTech &amp; Finance</Link>
      <div style={S.badge}>MÓDULO 04</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. FinBERT — Arquitetura e Fine-tuning</h2>
        <div style={S.diagram}><FinBERTArchSVG /></div>
        <div style={S.highlight}>
          <strong>FinBERT (Araci 2019, ProsusAI)</strong> e um BERT-base pre-trained em corpus financeiro: 1.8M artigos Reuters, Bloomberg News e Seeking Alpha (4.9B tokens). Fine-tuning no <strong>Financial PhraseBank</strong> (Malo et al. 2014): 4.840 frases anotadas de noticias Reuters com 3 classes (Positive, Negative, Neutral). F1 macro = 0.854 vs. VADER (0.614) e TextBlob (0.571). O modelo capta nuances linguisticas financeiras: "missed estimates" (negativo), "beat consensus" (positivo), "in line with expectations" (neutro).
        </div>
        <p style={S.p}><strong>Alternativas e evolucao:</strong> BloombergGPT (2023) — LLM de 50B parametros trained em 363B tokens Bloomberg data. Supera FinBERT em sentiment e NER financeiro. FinGPT (open-source alternative) usando LLaMA-2 + LoRA fine-tuning em dados financeiros. Para producao: FinBERT corre em 40ms/frase em GPU T4; BloombergGPT requer infraestrutura significativamente maior.</p>
        <div style={S.note}>
          <strong>Datasets benchmark NLP Financeiro:</strong> FiQA (sentiment + aspect extraction), FinancialPhraseBank, SemEval-2017 Task 5 (headlines + microblogs), FSRL (financial relation extraction), ConFin (conference calls), ECTSUM (earnings call summarization). Leaderboard em paperswithcode.com/task/financial-sentiment-analysis.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Sentiment Signal — Correlacao com Retornos</h2>
        <div style={S.diagram}><SentimentSignalSVG /></div>
        <div style={S.highlight}>
          <strong>Event study methodology:</strong> Calcular Abnormal Return (AR) = Retorno_observado - Retorno_esperado (CAPM ou mercado). Cumulative Abnormal Return (CAR) em janela [-1, +1] dias em torno do evento (publicacao de noticia). Estatistica t: t = CAR dividido por (sigma_AR vezes raiz quadrada de N_eventos). Testar H0: CAR = 0 (sem reacao ao evento). Loughran-McDonald dictionary (2011): 354 palavras negativas especificas para financas (vs. Harvard General Inquirer que classifica "liability" como negativo — incorreto em contexto financeiro).
        </div>
        <div style={S.note}>
          <strong>Look-ahead bias — o erro mais comum:</strong> Noticias publicadas apos o fecho de mercado so devem prever o retorno do dia seguinte (T+1), nao do proprio dia. Noticias de pre-mercado (antes das 9h30 ET) podem prever o retorno de T. Timestamp naive (sem timezone) e a fonte mais comum de contaminacao de dados em NLP financeiro.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Pipeline NLP em Producao</h2>
        <div style={S.diagram}><NLPPipelineSVG /></div>
        <div style={S.highlight}>
          <strong>Earnings Call NLP:</strong> Transcricoes de earnings calls (Q&amp;A section vs. prepared remarks) contem informacao incremental sobre guidance futuro. Tone analysis: ratio palavras positivas/negativas (Loughran-McDonald), hesitation markers ("uncertain", "challenging"), mudancas de linguagem vs. quarters anteriores. Chen et al. (2019): Q&amp;A tone prediz retornos futuros com t-stat 4.2 apos controlar para earnings surprise.
        </div>
        <div style={S.note}>
          <strong>Named Entity Recognition (NER) Financeiro:</strong> Entidades criticas: ORG (empresas), MONEY (valores), PERCENT (percentagens), DATE (periodos), PRODUCT (produtos). spaCy + fine-tuning em corpus anotado financeiro. Use case: extrair automaticamente guidance numerico de 10-K para input em modelos de forecasting. Precisao NER financeiro: 92%+ com BERT-based NER vs. 78% com spaCy pretrained.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. SEC EDGAR — Analise de Filings Regulatorios</h2>
        <div style={S.diagram}><SECFilingsSVG /></div>
        <div style={S.highlight}>
          <strong>Analise de 10-K com NLP:</strong> Mudancas no Risk Factors section ano-a-ano (textual similarity via cosine similarity de TF-IDF ou sentence embeddings) prenunciam deterioracao financeira. Loughran-McDonald (2011): empresas com mais palavras negativas no 10-K tem pior performance de stock nos 12 meses seguintes (alpha negativo de -4.5% ajustado por risco). O SEC exige XBRL (iXBRL) para dados financeiros estruturados — facilita extracao automatica de ratios financeiros.
        </div>
        <div style={S.note}>
          <strong>EDGAR API:</strong> Endpoint de full-text search disponivel em efts.sec.gov/hits.json. Endpoint de company facts em data.sec.gov/api/xbrl/companyfacts/{'{'}CIK{'}'}.json — retorna todos os dados XBRL historicos (receita, EBITDA, divida) em formato JSON. Gratuito e sem rate limiting significativo (10 requests/segundo). Base de dados de 800k+ filings/ano, desde 1993.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. FinBERT Sentiment Pipeline — Como Funciona em Producao</h2>
        <div style={S.highlight}>
          <strong>Arquitetura do analisador FinBERT:</strong> Em producao, o pipeline carrega o modelo ProsusAI/finbert via HuggingFace Transformers e expoe uma funcao de scoring por texto. Para frases curtas (ate 512 tokens), o modelo devolve tres probabilidades — positive, negative e neutral — e um score composto calculado como a diferenca entre a probabilidade positiva e a negativa. Um valor de +0.7, por exemplo, indica sentimento fortemente positivo; -0.5 indica sentimento claramente negativo; valores proximos de zero sao neutros.
        </div>
        <p style={S.p}><strong>Documentos longos e sliding window:</strong> Para documentos extensos como relatorios 10-K ou transcricoes de earnings calls, o texto e dividido em frases e agrupado em janelas de 3 frases sobrepostas (chunks). Cada chunk e classificado individualmente e os scores sao agregados por media simples e media ponderada pelo valor absoluto do score — chunks mais "polarizados" tem maior peso. O desvio padrao dos scores entre chunks e um indicador util: alta dispersao sugere um documento com mensagens mistas (ex: boas metricas financeiras com alertas de risco).</p>
        <p style={S.p}><strong>Integracao com SEC EDGAR:</strong> O cliente EDGAR usa dois endpoints publicos principais. O endpoint de full-text search (efts.sec.gov/hits.json) permite pesquisar frases especificas como "artificial intelligence revenue" ou "going concern" dentro de todos os filings registados desde 1993, filtrando por tipo de formulario e periodo. O endpoint de company facts (data.sec.gov/api/xbrl/companyfacts) devolve todos os dados financeiros estruturados em XBRL — receitas, EBITDA, divida — para qualquer empresa identificada pelo seu CIK (Central Index Key), sem autenticacao e com limite de 10 pedidos por segundo.</p>
        <div style={S.note}>
          <strong>Loughran-McDonald tone score:</strong> Para uma analise lexical complementar ao FinBERT, o dicionario Loughran-McDonald conta a percentagem de palavras negativas (ex: "loss", "litigation", "impairment", "adverse") e positivas (ex: "growth", "exceeded", "innovation") no texto. O net tone score — calculado como (palavras positivas menos negativas) dividido pelo total de palavras — e um preditor classico de retornos futuros documentado desde 2011. A vantagem sobre o Harvard General Inquirer e que o dicionario foi construido especificamente para o contexto financeiro, evitando falsos positivos como a palavra "liability" (neutra em financas, negativa no dicionario geral).
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. Benchmarks NLP em Financas</h2>
        <div style={S.grid3}>
          {[
            { title: 'FinBERT — ProsusAI', stat: 'F1 85.4%', detail: 'FinancialPhraseBank dataset. Supera VADER (61.4%) e TextBlob (57.1%). 4.9B tokens Reuters/Bloomberg pre-training. 110M parametros.' },
            { title: 'BloombergGPT', stat: '50B parametros', detail: 'Trained em 363B Bloomberg tokens + 345B general. State-of-art em BIG-bench Financial, FiQA, FinancialPhraseBank. Latencia: ~400ms/query.' },
            { title: 'Two Sigma NLP Alpha', stat: '+2.8% alpha anual', detail: 'News sentiment signal em S&P 500. Sharpe incremental de 0.4 apos controlar por fatores momentum e value. Decaimento: 80% do sinal decai em 5 dias.' },
            { title: 'J.P. Morgan COIN', stat: '360.000h/ano poupadas', detail: 'Contract Intelligence: NLP para revisao de contratos de emprestimos. Processa em segundos o que advogados levavam 360.000h/ano. Precisao 99%+ em extracao de clausulas.' },
            { title: 'Kensho (S&P)', stat: '10.000+ eventos', detail: 'Event-driven NLP: classifica noticias em 10.000+ tipos de eventos macroeconomicos e geopoliticos. Calcula retornos esperados de ativos apos cada tipo de evento.' },
            { title: 'Refinitiv News Analytics', stat: '1M+ artigos/dia', detail: 'Machine Readable News (MRN): sentiment, relevancia, novelty, volume de buzz. Cobertura: Reuters + 800 outras fontes. Usado por hedge funds via API em tempo real.' },
          ].map((b, i) => (
            <div key={i} style={{ ...S.card, borderLeft: `3px solid ${color}` }}>
              <div style={{ fontWeight: 700, color, marginBottom: '0.25rem', fontSize: '0.85rem' }}>{b.title}</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{b.stat}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{b.detail}</div>
            </div>
          ))}
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>7. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>FinBERT — Arquitetura e Fine-tuning</strong> — FinBERT é BERT fine-tuned em textos financeiros (noticias, filings SEC, earnings calls); classifica sentimento em positivo/negativo/neutro com acurácia &gt;88% vs. ~70% de BERT genérico — domínio financeiro tem vocabulário e contexto muito específicos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Sentiment Signal — Correlacao com Retornos</strong> — sentimento de notícias financeiras correlaciona-se positivamente com retornos intra-dia e de curto prazo (1–5 dias); o sinal é mais forte em acções de pequena capitalização e menos cobertas por analistas onde a informação pública tem maior impacto marginal.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Pipeline NLP em Producao</strong> — pipeline: fonte de dados (Bloomberg, Reuters, Twitter/X) → ingestão em streaming (Kafka) → pré-processamento e tokenização → inferência FinBERT → agregação de sentimento por ticker → sinal de trading com lag de execução &lt;500ms.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>SEC EDGAR — Analise de Filings Regulatorios</strong> — SEC EDGAR contém 10-K (anuais), 10-Q (trimestrais) e 8-K (eventos materiais) de todas as empresas cotadas nos EUA; NLP extrai risk factors, guidance e mudanças de tom YoY — mudanças subtis na linguagem de risk factors precedem eventos negativos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>FinBERT Sentiment Pipeline — Como Funciona em Producao</strong> — arquitectura: API de notícias → deduplicação → FinBERT batch inference (GPU) → score médio ponderado por relevância e recência → normalização Z-score por sector → sinal incorporado em factor model — latência ponta-a-ponta &lt;2s por batch de 100 artigos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Benchmarks NLP em Financas</strong> — FPB (Financial PhraseBank) e FinSentS são benchmarks de sentimento financeiro; FinQA e ConvFinQA testam QA sobre documentos financeiros; FLUE (Financial Language Understanding Evaluation) é o GLUE equivalente para domínio financeiro.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
