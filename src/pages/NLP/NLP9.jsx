import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  lectureTag: { display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-color)', borderLeft: '3px solid var(--accent-color)', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  code: { fontFamily: 'monospace', background: 'var(--bg-secondary)', padding: '0.1rem 0.4rem', borderRadius: 4, fontSize: '0.88em', color: 'var(--accent-color)' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: '3px solid var(--accent-color)', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
};

const codeBlock = { background: 'var(--bg-primary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.9rem 1.1rem', fontFamily: 'monospace', fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--text-primary)', textAlign: 'left', overflowX: 'auto', whiteSpace: 'pre' };

const PipelineDemo = () => {
  const [task, setTask] = useState('sentiment');
  const tasks = {
    sentiment: {
      label: 'sentiment-analysis',
      code: `from transformers import pipeline\n\nclf = pipeline("sentiment-analysis")\nclf("I love how simple this library is!")`,
      output: `[{'label': 'POSITIVE', 'score': 0.9998}]`,
      model: 'distilbert-base-uncased-finetuned-sst-2-english',
    },
    ner: {
      label: 'ner (token classification)',
      code: `ner = pipeline("ner", grouped_entities=True)\nner("Hugging Face foi fundada em Nova Iorque.")`,
      output: `[{'entity_group': 'ORG',  'word': 'Hugging Face', 'score': 0.97},\n {'entity_group': 'LOC',  'word': 'Nova Iorque',  'score': 0.99}]`,
      model: 'dbmdz/bert-large-cased-finetuned-conll03-english',
    },
    qa: {
      label: 'question-answering',
      code: `qa = pipeline("question-answering")\nqa(question="Quem fundou a Hugging Face?",\n   context="A Hugging Face foi fundada em 2016 por Clément Delangue.")`,
      output: `{'answer': 'Clément Delangue', 'score': 0.91, 'start': 44, 'end': 61}`,
      model: 'distilbert-base-cased-distilled-squad',
    },
    gen: {
      label: 'text-generation',
      code: `gen = pipeline("text-generation", model="gpt2")\ngen("Once upon a time", max_new_tokens=8)`,
      output: `[{'generated_text': 'Once upon a time, there was a small village'}]`,
      model: 'gpt2',
    },
    summ: {
      label: 'summarization',
      code: `summarizer = pipeline("summarization")\nsummarizer(long_article, max_length=40)`,
      output: `[{'summary_text': 'O artigo descreve os avanços recentes em NLP...'}]`,
      model: 'facebook/bart-large-cnn',
    },
  };
  const t = tasks[task];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>pipeline() — A API de Mais Alto Nível</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center', marginBottom: '1rem' }}>
        {Object.entries(tasks).map(([key, v]) => (
          <button key={key} onClick={() => setTask(key)} style={{
            padding: '0.35rem 0.7rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.76rem',
            background: task === key ? 'var(--accent-color)' : 'var(--bg-primary)',
            color: task === key ? 'white' : 'var(--text-primary)',
            border: `1.5px solid ${task === key ? 'var(--accent-color)' : 'var(--card-border)'}`,
            transition: 'all 0.2s'
          }}>{v.label}</button>
        ))}
      </div>
      <div style={codeBlock}>{t.code}</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0.6rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>↓</div>
      <div style={{ ...codeBlock, color: '#f97316', borderColor: '#f97316' }}>{t.output}</div>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.75rem', marginBottom: 0 }}>
        Sem indicar nenhum modelo, <code style={S.code}>pipeline()</code> escolhe um <strong>modelo pré-treinado por omissão</strong> (aqui: <code style={S.code}>{t.model}</code>), descarrega-o do Hub, e trata de tokenização, inferência e pós-processamento internamente.
      </p>
    </div>
  );
};

const AutoClassDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Por Baixo do pipeline(): AutoTokenizer + AutoModel</p>
    <div style={codeBlock}>{`from transformers import AutoTokenizer, AutoModelForSequenceClassification\n\nname = "distilbert-base-uncased-finetuned-sst-2-english"\ntokenizer = AutoTokenizer.from_pretrained(name)\nmodel = AutoModelForSequenceClassification.from_pretrained(name)\n\ninputs = tokenizer("I love this!", return_tensors="pt")\noutputs = model(**inputs)`}</div>
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', margin: '1.25rem 0' }}>
      <div style={{ padding: '0.5rem 0.9rem', borderRadius: 8, background: 'rgba(249,115,22,0.10)', border: '1.5px solid var(--accent-color)', fontWeight: 700, color: 'var(--accent-color)', fontSize: '0.85rem' }}>
        "I love this!"
      </div>
      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>→ AutoTokenizer →</div>
      <div style={{ padding: '0.5rem 0.9rem', borderRadius: 8, background: 'rgba(245,158,11,0.12)', border: '1.5px solid #f59e0b', fontWeight: 700, color: '#f97316', fontSize: '0.85rem', fontFamily: 'monospace' }}>
        input_ids, attention_mask
      </div>
      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>→ AutoModel →</div>
      <div style={{ padding: '0.5rem 0.9rem', borderRadius: 8, background: 'rgba(249,115,22,0.10)', border: '1.5px solid #fbbf24', fontWeight: 700, color: '#f97316', fontSize: '0.85rem' }}>
        logits
      </div>
    </div>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
      As classes <code style={S.code}>Auto*</code> lêem o <code style={S.code}>config.json</code> do modelo no Hub e instanciam automaticamente a arquitectura correcta (BERT, RoBERTa, GPT-2, ...) — o mesmo código funciona para <strong>milhares</strong> de modelos diferentes, bastando trocar a string <code style={S.code}>name</code>.
    </p>
  </div>
);

const TokenizerDemo = () => {
  const examples = {
    'distilbert (WordPiece)': ['[CLS]', 'play', '##ing', 'with', 'token', '##izer', '##s', '[SEP]'],
    'gpt2 (BPE)': ['Play', 'ing', 'Ġwith', 'Ġtoken', 'izers'],
    't5 (SentencePiece)': ['Playing', 'with', 'token', 'izer', 's'],
  };
  const [model, setModel] = useState('distilbert (WordPiece)');
  const colors = ['#fb923c', '#f97316', '#f97316', '#fb923c', '#f97316', '#f97316', '#f97316', '#f97316'];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Cada Modelo Tem o Seu Próprio Tokenizer</p>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 0, marginBottom: '1rem' }}>
        Frase: <code style={S.code}>"Playing with tokenizers"</code>
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center', marginBottom: '1.25rem' }}>
        {Object.keys(examples).map(key => (
          <button key={key} onClick={() => setModel(key)} style={{
            padding: '0.35rem 0.8rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem',
            background: model === key ? 'var(--accent-color)' : 'var(--bg-primary)',
            color: model === key ? 'white' : 'var(--text-primary)',
            border: `1.5px solid ${model === key ? 'var(--accent-color)' : 'var(--card-border)'}`,
            transition: 'all 0.2s'
          }}>{key}</button>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', justifyContent: 'center' }}>
        {examples[model].map((tok, i) => (
          <div key={i} style={{ padding: '0.35rem 0.6rem', borderRadius: 6, fontFamily: 'monospace', fontSize: '0.8rem', fontWeight: 600, background: `${colors[i % colors.length]}18`, border: `1px solid ${colors[i % colors.length]}50`, color: colors[i % colors.length] }}>
            {tok}
          </div>
        ))}
      </div>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '1rem', marginBottom: 0 }}>
        O <strong>vocabulário e o algoritmo de tokenização</strong> (WordPiece, BPE, SentencePiece — ver Lecture 4) fazem parte do checkpoint do modelo. Note <code style={S.code}>##izer</code> (WordPiece, continuação) vs <code style={S.code}>Ġ</code> (BPE do GPT-2, marca espaço antes do token) vs <code style={S.code}></code> (SentencePiece, idem). <strong>Nunca</strong> se usa o tokenizer de um modelo com os pesos de outro — os IDs dos tokens não seriam compatíveis.
      </p>
    </div>
  );
};

const HubDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Hugging Face Hub — Anatomia de um Repositório de Modelo</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem' }}>
      <div style={{ background: 'var(--bg-primary)', border: '1.5px solid var(--accent-color)', borderRadius: 10, padding: '1rem 1.25rem', textAlign: 'left', minWidth: 220 }}>
        <div style={{ fontWeight: 700, color: 'var(--accent-color)', marginBottom: '0.5rem', fontFamily: 'monospace', fontSize: '0.85rem' }}>bert-base-uncased/</div>
        {[
          ['config.json', '#f97316', 'arquitectura, hyperparams'],
          ['pytorch_model.bin', '#f97316', 'pesos treinados'],
          ['tokenizer.json', '#f97316', 'vocabulário + regras'],
          ['tokenizer_config.json', '#f97316', 'config do tokenizer'],
          ['README.md', '#fb923c', 'model card'],
        ].map(([f, c, d]) => (
          <div key={f} style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', fontSize: '0.78rem', padding: '0.2rem 0', fontFamily: 'monospace' }}>
            <span style={{ color: c }}>{f}</span>
            <span style={{ color: 'var(--text-secondary)', fontFamily: 'sans-serif' }}>{d}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.5rem', textAlign: 'left', maxWidth: 280 }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Model Hub</strong>: 500k+ modelos, organizados por <code style={S.code}>org/nome</code> (ex: <code style={S.code}>meta-llama/Llama-3-8B</code>).
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Datasets Hub</strong>: datasets prontos a usar com <code style={S.code}>load_dataset()</code>.
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Spaces</strong>: demos interactivas (Gradio/Streamlit) hospedadas gratuitamente.
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Model cards</strong>: documentam dados de treino, métricas, limitações e vieses conhecidos.
        </div>
      </div>
    </div>
  </div>
);

const FineTuningDiagram = () => {
  const [step, setStep] = useState(0);
  const steps = [
    { title: '1. Carregar Dataset', code: `from datasets import load_dataset\n\ndataset = load_dataset("imdb")\n# DatasetDict: train (25k), test (25k)`, color: '#fb923c' },
    { title: '2. Tokenizar', code: `def tokenize(batch):\n    return tokenizer(batch["text"], truncation=True)\n\ntokenized = dataset.map(tokenize, batched=True)`, color: '#f97316' },
    { title: '3. Carregar Modelo Pré-treinado', code: `from transformers import AutoModelForSequenceClassification\n\nmodel = AutoModelForSequenceClassification.from_pretrained(\n    "distilbert-base-uncased", num_labels=2)\n# nova "head" de classificação inicializada do zero`, color: '#fb923c' },
    { title: '4. Definir Trainer', code: `from transformers import TrainingArguments, Trainer\n\nargs = TrainingArguments(\n    output_dir="meu-modelo", learning_rate=2e-5,\n    per_device_train_batch_size=16, num_train_epochs=3,\n    eval_strategy="epoch")\n\ntrainer = Trainer(model=model, args=args,\n    train_dataset=tokenized["train"],\n    eval_dataset=tokenized["test"])`, color: '#f97316' },
    { title: '5. Treinar e Avaliar', code: `trainer.train()\ntrainer.evaluate()`, color: '#f97316' },
    { title: '6. Partilhar no Hub', code: `trainer.push_to_hub("meu-utilizador/meu-modelo")\n# disponível para qualquer pessoa via\n# pipeline(model="meu-utilizador/meu-modelo")`, color: '#f97316' },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Fine-tuning com Trainer + Datasets — Passo a Passo</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center', marginBottom: '1rem' }}>
        {steps.map((s, i) => (
          <button key={i} onClick={() => setStep(i)} style={{
            padding: '0.35rem 0.7rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.76rem',
            background: step === i ? s.color : 'var(--bg-primary)',
            color: step === i ? 'white' : 'var(--text-primary)',
            border: `1.5px solid ${step === i ? s.color : 'var(--card-border)'}`,
            transition: 'all 0.2s'
          }}>{i + 1}</button>
        ))}
      </div>
      <p style={{ fontWeight: 700, color: steps[step].color, marginBottom: '0.5rem' }}>{steps[step].title}</p>
      <div style={codeBlock}>{steps[step].code}</div>
      {step === steps.length - 1 ? null : (
        <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          <button onClick={() => setStep(step + 1)} style={{ padding: '0.35rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 700, fontSize: '0.78rem', background: 'var(--accent-color)', color: 'white', border: 'none' }}>
            Próximo passo →
          </button>
        </div>
      )}
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '1rem', marginBottom: 0 }}>
        Este é o padrão de <strong>transfer learning</strong> visto na Lecture 7: o corpo pré-treinado do modelo já sabe língua; substitui-se apenas a "head" final e treina-se com poucas épocas e learning rate baixo (<InlineMath math="2\times10^{-5}" /> típico) para não destruir o conhecimento pré-treinado (<em>catastrophic forgetting</em>).
      </p>
    </div>
  );
};

export default function NLP9() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/nlp" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.lectureTag}>MÓDULO 9</div>
        <h1 style={S.h1}>Hugging Face: Do Modelo ao Deploy</h1>
        <p style={S.lead}>A biblioteca <code style={S.code}>transformers</code> tornou-se o "PyTorch dos LLMs": uma interface comum para milhares de modelos pré-treinados (BERT, GPT, T5, LLaMA, ...), os respectivos tokenizers, e ferramentas para fine-tuning e partilha. Esta lecture liga toda a teoria das aulas anteriores ao código que se usa na prática.</p>

        {/* === SECTION 1 === */}
        <div style={S.section}>
          <h2 style={S.h2}>1. A Biblioteca Transformers e a API pipeline()</h2>
          <p style={S.p}>A forma mais rápida de usar um modelo pré-treinado é <code style={S.code}>pipeline()</code> — uma função que junta tokenizer, modelo e pós-processamento numa única chamada, para dezenas de tarefas comuns.</p>

          <PipelineDemo />

          <h3 style={S.h3}>Tarefas Comuns</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Tarefa</th><th style={S.th}>Arquitectura típica</th><th style={S.th}>Exemplo de uso</th></tr></thead>
              <tbody>
                {[
                  ['sentiment-analysis', 'Encoder-only (BERT)', 'Classificação de reviews'],
                  ['ner', 'Encoder-only (BERT)', 'Extracção de entidades de texto'],
                  ['question-answering', 'Encoder-only (BERT)', 'Extracção de resposta de um contexto'],
                  ['summarization', 'Encoder-Decoder (BART/T5)', 'Resumo de artigos'],
                  ['translation', 'Encoder-Decoder (T5/MarianMT)', 'Tradução automática'],
                  ['text-generation', 'Decoder-only (GPT)', 'Geração de texto livre'],
                ].map(([task, arch, ex]) => (
                  <tr key={task}><td style={{ ...S.td, fontFamily: 'monospace', color: 'var(--accent-color)' }}>{task}</td><td style={S.td}>{arch}</td><td style={S.td}>{ex}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <AutoClassDiagram />

          <div style={S.note}>
            <strong>Nota:</strong> <code style={S.code}>pipeline()</code> é óptimo para prototipagem e tarefas standard. Para controlo fino (batching custom, modelos não suportados directamente, optimizações de inferência), usa-se <code style={S.code}>AutoTokenizer</code> + <code style={S.code}>AutoModel*</code> directamente.
          </div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 2 === */}
        <div style={S.section}>
          <h2 style={S.h2}>2. Tokenizers e o Model Hub</h2>
          <p style={S.p}>Cada modelo no Hub vem com o seu próprio tokenizer treinado — usar o tokenizer errado produz IDs que o modelo nunca viu durante o treino, e os resultados tornam-se lixo.</p>

          <TokenizerDemo />

          <HubDiagram />

          <h3 style={S.h3}>Convenção de Nomes</h3>
          <p style={S.p}>
            Os modelos no Hub seguem o formato <code style={S.code}>organização/nome-do-modelo</code> — ex: <code style={S.code}>google-bert/bert-base-uncased</code>, <code style={S.code}>meta-llama/Llama-3.1-8B-Instruct</code>, <code style={S.code}>mistralai/Mistral-7B-v0.1</code>. O mesmo nome é usado para descarregar tanto o tokenizer como os pesos, garantindo que ficam sempre sincronizados.
          </p>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 3 === */}
        <div style={S.section}>
          <h2 style={S.h2}>3. Fine-tuning com Trainer e Datasets</h2>
          <p style={S.p}>Para adaptar um modelo pré-treinado a uma tarefa própria, a biblioteca <code style={S.code}>datasets</code> trata do carregamento/pré-processamento e a classe <code style={S.code}>Trainer</code> (de <code style={S.code}>transformers</code>) trata do ciclo de treino — gradientes, optimizador, scheduler, logging e avaliação.</p>

          <FineTuningDiagram />

          <h3 style={S.h3}>Resumo do Fluxo</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Componente</th><th style={S.th}>Papel</th></tr></thead>
              <tbody>
                {[
                  ['datasets.load_dataset', 'Descarrega/carrega o dataset (Hub ou local)'],
                  ['AutoTokenizer.map(...)', 'Tokeniza todo o dataset em batch'],
                  ['AutoModelForX.from_pretrained', 'Carrega pesos pré-treinados + nova head'],
                  ['TrainingArguments', 'Hyperparams: lr, batch size, épocas, estratégia de avaliação'],
                  ['Trainer', 'Loop de treino, avaliação, checkpoints, logging'],
                  ['push_to_hub', 'Publica modelo + tokenizer + model card no Hub'],
                ].map(([c, p]) => (
                  <tr key={c}><td style={{ ...S.td, fontFamily: 'monospace', color: 'var(--accent-color)' }}>{c}</td><td style={S.td}>{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>4. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>A Biblioteca Transformers e a API pipeline()</strong> — a biblioteca Hugging Face Transformers fornece acesso unificado a milhares de modelos pré-treinados; pipeline() permite inferência em uma linha para NLP, visão e audio sem conhecer detalhes arquitecturais.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Tokenizers e o Model Hub</strong> — cada modelo tem o seu tokenizador específico que deve ser usado em par com os pesos; o Model Hub centraliza modelos, tokenizadores e datasets com versionamento e licenciamento explícitos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Fine-tuning com Trainer e Datasets</strong> — a classe Trainer abstrai o loop de treino com suporte a mixed precision, gradient accumulation e logging; a biblioteca Datasets fornece carregamento eficiente e pre-processamento lazy de datasets de NLP.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
