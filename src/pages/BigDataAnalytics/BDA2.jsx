import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: '#4a9eed', border: '1.5px solid #4a9eed', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: '#4a9eed', borderLeft: '3px solid #4a9eed', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.06)', borderLeft: '3px solid #4a9eed', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const PipelineDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Spark MLlib Pipeline — Fluxo Completo</p>
    <svg viewBox="0 0 750 120" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-ml" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" /></marker>
      </defs>
      {[
        { x: 10,  label: 'Raw Data', sub: 'DataFrame', color: '#4a9eed' },
        { x: 116, label: 'StringIndexer', sub: 'Estimator', color: '#4a9eed' },
        { x: 222, label: 'OneHotEncoder', sub: 'Estimator', color: '#4a9eed' },
        { x: 328, label: 'VectorAssembler', sub: 'Transformer', color: '#4a9eed' },
        { x: 434, label: 'StandardScaler', sub: 'Estimator', color: '#4a9eed' },
        { x: 540, label: 'Estimator (Train)', sub: 'LogReg / RF / GBT', color: '#4a9eed' },
        { x: 646, label: 'Model (Predict)', sub: 'PipelineModel', color: '#4a9eed' },
      ].map(({ x, label, sub, color }, i) => (
        <g key={i}>
          <rect x={x} y="20" width="92" height="50" rx="7" fill={`${color}15`} stroke={color} strokeWidth="1.5" />
          <text x={x + 46} y="42" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">{label}</text>
          <text x={x + 46} y="57" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{sub}</text>
          {i < 6 && <line x1={x + 92} y1="45" x2={x + 106} y2="45" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr-ml)" />}
        </g>
      ))}
      <text x="375" y="105" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Todas as etapas encadeadas — fit() treina tudo de uma vez, transform() aplica em novos dados.</text>
    </svg>
  </div>
);

const VectorAssemblerDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>VectorAssembler — Esquema de Transformação</p>
    <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1.25rem 1rem' }}>
      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', textAlign: 'left' }}>Concatenação para a linha id=1 (age=25, salary=50000, country_vec=[1,0,0]):</div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
        {[
          { col: 'age', cells: [{ v: '25.0', c: '#4a9eed' }] },
          { col: 'salary', cells: [{ v: '50000.0', c: '#4a9eed' }] },
          { col: 'country_vec', cells: [{ v: '1.0', c: '#4a9eed' }, { v: '0.0', c: '#4a9eed' }, { v: '0.0', c: '#4a9eed' }] },
        ].map(({ col, cells }) => (
          <div key={col}>
            <div style={{ fontSize: '0.72rem', color: cells[0].c, fontWeight: 700, marginBottom: '0.3rem' }}>{col}</div>
            <div style={{ display: 'flex', gap: '2px' }}>
              {cells.map((cell, i) => (
                <div key={i} style={{ minWidth: 50, padding: '0.4rem 0.3rem', borderRadius: 4, border: `1.5px solid ${cell.c}`, background: `${cell.c}15`, color: cell.c, fontSize: '0.78rem', fontWeight: 700, textAlign: 'center' }}>{cell.v}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', fontSize: '1.4rem', color: '#4a9eed', margin: '0.4rem 0' }}>↓ VectorAssembler ↓</div>
      <div style={{ textAlign: 'center', fontSize: '0.72rem', color: '#4a9eed', fontWeight: 700, marginBottom: '0.3rem' }}>features (Vector, size 5)</div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', flexWrap: 'wrap' }}>
        {[
          { v: '25.0', c: '#4a9eed' }, { v: '50000.0', c: '#4a9eed' }, { v: '1.0', c: '#4a9eed' }, { v: '0.0', c: '#4a9eed' }, { v: '0.0', c: '#4a9eed' },
        ].map((cell, i) => (
          <div key={i} style={{ minWidth: 50, textAlign: 'center' }}>
            <div style={{ padding: '0.4rem 0.3rem', borderRadius: 4, border: `1.5px solid ${cell.c}`, background: `${cell.c}15`, color: cell.c, fontSize: '0.78rem', fontWeight: 700 }}>{cell.v}</div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>[{i}]</div>
          </div>
        ))}
      </div>
    </div>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.85rem', textAlign: 'left' }}>
      O VectorAssembler é um Transformer puro — não tem fit(), não aprende nada dos dados. Concatena, pela ordem definida em inputCols, os valores numéricos e/ou vectores de várias colunas numa única coluna Vector. As colunas originais (age, salary, country_vec) continuam no DataFrame; "features" é apenas adicionada. É sempre a última peça antes do estimador, porque todos os algoritmos MLlib esperam receber a coluna "features" como Vector.
    </p>
  </div>
);

const PipelineSchemaDiagram = () => {
  const stages = [
    { name: 'StringIndexer', type: 'Estimator', io: 'country (string) → country_idx (double)', color: '#4a9eed' },
    { name: 'OneHotEncoder', type: 'Estimator', io: 'country_idx (double) → country_vec (vector)', color: '#4a9eed' },
    { name: 'VectorAssembler', type: 'Transformer', io: '[age, salary, country_vec] → features (vector)', color: '#4a9eed' },
    { name: 'StandardScaler', type: 'Estimator', io: 'features (vector) → scaledFeatures (vector)', color: '#4a9eed' },
    { name: 'LogisticRegression', type: 'Estimator', io: 'scaledFeatures, label → prediction, probability', color: '#4a9eed' },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Pipeline — fit() vs PipelineModel.transform()</p>

      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ fontWeight: 700, color: '#4a9eed', fontSize: '0.85rem', marginBottom: '0.5rem', textAlign: 'left' }}>1. pipeline.fit(trainDF) — treino</div>
        <div style={{ display: 'flex', gap: '0.6rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          {stages.map((s, i) => (
            <div key={i} style={{ minWidth: 155, background: `${s.color}10`, border: `1.5px solid ${s.color}`, borderRadius: 8, padding: '0.6rem', textAlign: 'left', flexShrink: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', gap: '0.4rem' }}>
                <span style={{ fontWeight: 700, color: s.color, fontSize: '0.8rem' }}>{s.name}</span>
                <span style={{ fontSize: '0.65rem', background: `${s.color}25`, color: s.color, padding: '0.1rem 0.4rem', borderRadius: 8, fontWeight: 700, whiteSpace: 'nowrap' }}>{s.type}</span>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{s.io}</div>
              {s.type === 'Estimator' && <div style={{ fontSize: '0.68rem', color: s.color, marginTop: '0.3rem' }}>.fit() → modelo ajustado</div>}
            </div>
          ))}
          <div style={{ minWidth: 140, background: 'rgba(74,158,237,0.10)', border: '1.5px solid #4a9eed', borderRadius: 8, padding: '0.6rem', textAlign: 'left', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 700, color: '#4a9eed', fontSize: '0.8rem' }}>PipelineModel</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>5 transformers prontos (incl. modelos ajustados)</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style={{ fontWeight: 700, color: '#4a9eed', fontSize: '0.85rem', marginBottom: '0.5rem', textAlign: 'left' }}>2. pipelineModel.transform(testDF) — produção</div>
        <div style={{ display: 'flex', gap: '0.6rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          {stages.map((s, i) => (
            <div key={i} style={{ minWidth: 155, background: 'rgba(74,158,237,0.10)', border: '1.5px solid #4a9eed', borderRadius: 8, padding: '0.6rem', textAlign: 'left', flexShrink: 0 }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', fontSize: '0.8rem', marginBottom: '0.3rem' }}>{s.name}{s.type === 'Estimator' ? 'Model' : ''}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{s.io}</div>
              <div style={{ fontSize: '0.68rem', color: '#4a9eed', marginTop: '0.3rem' }}>.transform() — sem fit</div>
            </div>
          ))}
        </div>
      </div>

      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
        Durante fit(), cada Estimator (StringIndexer, OneHotEncoder, StandardScaler, LogisticRegression) aprende parâmetros a partir do DataFrame já transformado pelas etapas anteriores, e é substituído pelo seu Model treinado dentro do PipelineModel resultante. No transform() de produção, nenhum stage volta a aprender — todos aplicam apenas os parâmetros fixados no treino, garantindo que treino, teste e produção sofrem exactamente a mesma transformação (sem data leakage).
      </p>

      <div style={{ marginTop: '1rem', background: 'var(--bg-secondary)', borderRadius: 8, padding: '0.85rem 1rem', fontFamily: 'monospace', fontSize: '0.78rem', color: '#4a9eed', textAlign: 'left', overflowX: 'auto', whiteSpace: 'pre' }}>
      </div>
    </div>
  );
};

const MLflowDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Ciclo de Vida de um Modelo com MLflow</p>
    <svg viewBox="0 0 620 120" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr11" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 Z" fill="#94a3b8" />
        </marker>
      </defs>
      {[
        { x: 10,  label: 'Código\n& Dados',     sub: 'Git + DVC',        c: '#4a9eed' },
        { x: 130, label: 'Treino\n& Tracking',  sub: 'mlflow.log_*',     c: '#4a9eed' },
        { x: 250, label: 'Experiments\nUI',      sub: 'comparar runs',    c: '#4a9eed' },
        { x: 370, label: 'Model\nRegistry',      sub: 'Staging → Prod',   c: '#4a9eed' },
        { x: 490, label: 'Deploy /\nServing',    sub: 'REST API / batch', c: '#4a9eed' },
      ].map(({ x, label, sub, c }, i, arr) => (
        <g key={i}>
          <rect x={x} y={15} width={100} height={68} rx="7" fill={`${c}18`} stroke={c} strokeWidth="1.5" />
          {label.split('\n').map((l, j) => (
            <text key={j} x={x + 50} y={36 + j * 14} textAnchor="middle" fill={c} fontSize="9" fontWeight="700">{l}</text>
          ))}
          <text x={x + 50} y={74} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">{sub}</text>
          {i < arr.length - 1 && (
            <line x1={x + 102} y1={49} x2={x + 128} y2={49} stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr11)" />
          )}
        </g>
      ))}
      <text x="310" y="106" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">
        Cada run regista: parâmetros · métricas · artefactos · tags · duração · código-fonte
      </text>
    </svg>
  </div>
);

const MLflowExplorer = () => {
  const [sel, setSel] = useState(0);
  const components = [
    {
      name: 'Tracking', color: '#4a9eed',
      what: 'Regista automaticamente (ou manualmente) parâmetros, métricas, artefactos e metadados de cada run. O servidor de tracking pode ser local (ficheiros), remoto (PostgreSQL + S3) ou gerido (Databricks, Azure ML).',
      code: 'import mlflow\n\nwith mlflow.start_run(run_name="xgb_v2"):\n    mlflow.log_param("n_estimators", 300)\n    mlflow.log_param("learning_rate", 0.05)\n\n    # ... treino ...\n\n    mlflow.log_metric("val_rmse", 0.123)\n    mlflow.log_metric("val_r2",   0.94)\n    mlflow.log_artifact("feature_importance.png")\n    mlflow.sklearn.log_model(model, "model")',
    },
    {
      name: 'Projects', color: '#4a9eed',
      what: 'Empacota código + dependências num formato reprodutível. Um MLproject define o entry point, parâmetros e ambiente (conda.yaml ou docker). Permite re-executar qualquer run com mlflow run <URI>.',
      code: '# MLproject (YAML)\nname: my-project\nconda_env: conda.yaml\n\nentry_points:\n  train:\n    parameters:\n      n_estimators: {type: int, default: 100}\n      lr: {type: float, default: 0.1}\n    command: "python train.py --n {n_estimators} --lr {lr}"\n\n# Executar:\n# mlflow run . -P n_estimators=300',
    },
    {
      name: 'Model Registry', color: '#4a9eed',
      what: 'Ciclo de vida de modelos com versionamento e transições de stage: None → Staging → Production → Archived. Cada versão tem tags, descrição e link para o run original. Integrável com CI/CD para promoção automática.',
      code: 'import mlflow.sklearn\nfrom mlflow.tracking import MlflowClient\n\n# Registar directamente do run:\nmlflow.register_model(\n    model_uri="runs:/<run_id>/model",\n    name="price-predictor"\n)\n\n# Promover para Staging:\nclient = MlflowClient()\nclient.transition_model_version_stage(\n    name="price-predictor", version=3,\n    stage="Staging"\n)',
    },
    {
      name: 'Models (Serving)', color: '#4a9eed',
      what: 'Serve qualquer modelo registado como REST API com mlflow models serve. Aceita inputs em JSON (pandas split/records/etc). Pode gerar contêiner Docker para deploy em Kubernetes, AWS SageMaker, Azure ML ou GCP Vertex.',
      code: '# Linha de comando — REST API local:\nmlflow models serve \\\n  -m "models:/price-predictor/Production" \\\n  --port 5001\n\n# Chamar a API:\n# POST http://localhost:5001/invocations\n# { "dataframe_split": { "columns":["x1","x2"],\n#                         "data": [[1.2, 3.4]] } }\n\n# Gerar Docker image:\nmlflow models build-docker \\\n  -m "models:/price-predictor/3" \\\n  -n "price-predictor:v3"',
    },
  ];
  const c = components[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>MLflow — 4 Componentes</p>
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {components.map((cp, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.35rem 0.8rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.8rem', background: sel === i ? cp.color : 'var(--bg-primary)', color: sel === i ? '#fff' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? cp.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{cp.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${c.color}30` }}>
        <p style={{ fontSize: '0.87rem', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '0.85rem' }}>{c.what}</p>
        <div style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '0.85rem 1rem', fontFamily: 'monospace', fontSize: '0.78rem', color: '#4a9eed', lineHeight: 1.9, overflowX: 'auto', whiteSpace: 'pre' }}>{c.code}</div>
      </div>
    </div>
  );
};

export default function BDA2() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/bigdata-analytics" style={S.back}><ArrowLeft size={16} /> Voltar a Big Data Analytics</Link>
        <div style={S.tag}>MÓDULO 02</div>
        <h1 style={S.h1}>Machine Learning com Spark & MLflow</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. Porque ML Distribuído?</h2>
          <p style={S.p}>Um modelo de machine learning é tão bom quanto os dados que o treinou. Para datasets com milhões de observações, scikit-learn e pandas atingem o limite da memória RAM de um único servidor. MLlib resolve este problema distribuindo tanto os dados como o treino por um cluster — com a mesma API de alto nível que se usaria em single-machine.</p>
          <p style={S.p}>O modelo de dados central em MLlib é o DataFrame com uma coluna "features" do tipo Vector (DenseVector ou SparseVector) e uma coluna "label". Todos os algoritmos esperam exactamente este formato — a preparação de features é o trabalho principal de um projecto de ML prático.</p>

          <PipelineDiagram />

          <h3 style={S.h3}>Transformer vs. Estimator — A Distinção Fundamental</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.5rem' }}>Transformer</div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Tem um método transform(df). Não aprende nada dos dados — aplica uma transformação determinística. Tokenizer, SQLTransformer, Binarizer são exemplos: o comportamento é sempre o mesmo independentemente dos dados de treino.</p>
              <div style={{ fontSize: '0.8rem', color: '#4a9eed' }}>Exemplos: Tokenizer, VectorAssembler, SQLTransformer, Binarizer, ElementwiseProduct</div>
            </div>
            <div style={{ background: 'rgba(74,158,237,0.06)', border: '1px solid rgba(74,158,237,0.2)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.5rem' }}>Estimator</div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Tem um método fit(df) que aprende parâmetros dos dados e devolve um Transformer (Model). StandardScaler.fit() calcula média e desvio-padrão do treino. O Model resultante guarda esses valores e aplica-os em novos dados.</p>
              <div style={{ fontSize: '0.8rem', color: '#4a9eed' }}>Exemplos: StandardScaler, StringIndexer, IDF, LogisticRegression, RandomForest, KMeans</div>
            </div>
          </div>

          <div style={S.note}>A distinção Transformer/Estimator evita data leakage: o StandardScaler é fitado APENAS no treino, e os parâmetros aprendidos são depois aplicados ao teste. Se fitasses no dataset completo, o modelo estaria a "ver" o futuro.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Feature Engineering — A Arte da Preparação</h2>
          <p style={S.p}>A qualidade das features tem muito mais impacto no resultado final do que a escolha do algoritmo. Feature engineering é o processo de transformar dados brutos em representações que os algoritmos de ML conseguem processar eficazmente. É a maior fonte de diferenciação entre modelos mediocres e excelentes.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Transformação</th><th style={S.th}>Porquê é necessária</th><th style={S.th}>Quando usar</th><th style={S.th}>Exemplo</th></tr></thead>
              <tbody>
                {[
                  ['StringIndexer', 'Algoritmos ML operam sobre números, não strings. Mapeia categorias para índices: "masculino"→0, "feminino"→1', 'Features categóricas nominais (cor, país, categoria) antes de OneHotEncoder ou árvores', '"Portugal"→0, "Espanha"→1, "França"→2 para coluna país'],
                  ['OneHotEncoder', 'StringIndexer cria uma relação ordinal artificial (0&lt;1&lt;2) que não existe. OHE cria uma dimensão binária por categoria — sem relação ordinal implícita', 'Features nominais usadas em modelos lineares (Logistic Regression, SVM). Árvores não precisam de OHE', '"Portugal"→[1,0,0], "Espanha"→[0,1,0], "França"→[0,0,1]'],
                  ['StandardScaler', 'Gradient descent converge muito mais rápido quando features têm a mesma magnitude. Features com range [0,1] vs. [0,1000000] causam passos de gradiente desequilibrados', 'Modelos lineares, SVM, KNN, KMeans. Árvores e Random Forest NÃO precisam de scaling', 'idade (18-90) e salário (500-100000) → ambos com média=0, std=1'],
                  ['Bucketizer', 'Transforma variável contínua em categorias discretas — útil para capturar relações não-lineares ou para discretização de domínio', 'Quando relação com target não é linear, ou quando faz sentido de negócio categorizar', 'idade → [0,25): "jovem", [25,65): "adulto", [65,∞): "sénior"'],
                  ['Tokenizer / HashingTF / IDF', 'Converte texto para representação numérica. TF conta frequência de palavras. IDF penaliza palavras comuns. TF-IDF é a representação clássica para text classification', 'Qualquer pipeline com dados de texto não estruturado', 'Frases de emails → vectores TF-IDF → LogisticRegression'],
                  ['VectorAssembler', 'MLlib exige que todas as features estejam numa única coluna Vector. Combina múltiplas colunas numéricas (e/ou vectores) numa coluna "features"', 'Sempre — última etapa antes do estimador de ML', '[age=25, salary=50000, country_vec=[1,0,0]] → features=[25, 50000, 1, 0, 0]'],
                ].map(([t, p, q, e]) => (
                  <tr key={t}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{t}</td><td style={S.td}>{p}</td><td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{q}</td><td style={{ ...S.td, fontSize: '0.82rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>{e}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Integração: VectorAssembler e Pipelines</h2>
          <p style={S.p}>Depois de cada transformação individual (StringIndexer, OneHotEncoder, StandardScaler, ...), é preciso juntar tudo numa única coluna "features" e encadear todas as etapas de forma reprodutível. É isso que o VectorAssembler e o Pipeline fazem — a "cola" que integra feature engineering e modelo num único objecto.</p>

          <VectorAssemblerDiagram />
          <PipelineSchemaDiagram />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. O Problema que o MLflow Resolve</h2>
          <p style={S.p}>Sem uma ferramenta de tracking, é comum perder a noção de qual combinação de hiperparâmetros produziu o melhor resultado, não conseguir reproduzir um run feito há três semanas, ou não saber qual versão do modelo está em produção. MLflow, criado pelos autores do Spark em 2018, é a resposta open-source a este problema — agnóstico em relação a biblioteca, linguagem e cloud.</p>
          <p style={S.p}>A ideia central é simples: cada execução de treino é um <em>run</em> que regista automaticamente o contexto (Git commit, sistema operativo, dependências) e permite registar manualmente parâmetros, métricas e artefactos. A UI web compara runs lado a lado com gráficos interactivos de métricas ao longo do tempo.</p>
          <MLflowDiagram />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Os 4 Componentes do MLflow</h2>
          <MLflowExplorer />
          <div style={S.note}>Auto-logging: mlflow.sklearn.autolog() / mlflow.xgboost.autolog() / mlflow.pytorch.autolog() regista automaticamente todos os parâmetros, métricas de validação e o modelo final sem código adicional.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>6. MLflow vs Alternativas</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Critério</th>
                  <th style={S.th}>MLflow</th>
                  <th style={S.th}>Weights & Biases</th>
                  <th style={S.th}>DVC + CML</th>
                  <th style={S.th}>Neptune.ai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Hosting',              'Self-hosted ou Databricks',     'Cloud (self-hosted pago)',       'Git-based (self-hosted)',  'Cloud'],
                  ['Deep Learning',        'Bom (integração geral)',         'Excelente (PyTorch/HF nativo)', 'Médio',                   'Bom'],
                  ['Spark / Big Data',     'Excelente (Databricks nativo)',  'Limitado',                      'Fraco',                   'Fraco'],
                  ['Model Registry',       'Sim (completo)',                 'Sim',                           'Via DVC push',            'Sim'],
                  ['Hyperparameter Sweep', 'Manual (Optuna externo)',        'Sweeps integrado',              'Não nativo',              'Sim'],
                  ['Open-source',          'Sim (Apache 2.0)',               'SDK aberto, plataforma fechada','Sim (Apache 2.0)',        'SDK aberto'],
                  ['Custo',               'Gratuito self-hosted',           'Gratuito até 100 GB logs',      'Gratuito',                'Gratuito até 200h/mês'],
                ].map(([c, m, w, d, n]) => (
                  <tr key={c}>
                    <td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)' }}>{c}</td>
                    <td style={{ ...S.td, color: '#4a9eed' }}>{m}</td>
                    <td style={S.td}>{w}</td>
                    <td style={S.td}>{d}</td>
                    <td style={S.td}>{n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>7. MLflow no Ecossistema Spark / Databricks</h2>
          <p style={S.p}>MLflow é nativo no Databricks — cada notebook tem tracking automático activado por defeito. O Unity Catalog substituiu o Model Registry clássico como repositório central de modelos, datasets e features, com linhagem de dados de ponta a ponta.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Integração</th><th style={S.th}>Como funciona</th></tr></thead>
              <tbody>
                {[
                  ['Databricks AutoML', 'Corre múltiplos modelos automaticamente e regista todos os runs no MLflow com comparação visual'],
                  ['Spark MLlib + MLflow', 'mlflow.spark.log_model() guarda o pipeline Spark completo (inclui transformadores) como artefacto'],
                  ['Feature Store', 'Databricks Feature Store regista features usadas em cada run para rastreabilidade total'],
                  ['Unity Catalog', 'Substitui Model Registry clássico — modelos versionados com controlo de acesso e linhagem por tabela'],
                  ['CI/CD com MLflow', 'mlflow.evaluate() corre métricas automáticas num dataset de teste — ideal para gates de qualidade em pipelines CD'],
                ].map(([i, d]) => (
                  <tr key={i}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{i}</td><td style={S.td}>{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
