import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  svgWrap: { background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.10)', borderRadius: 10, padding: '1.25rem', margin: '1.25rem 0', overflowX: 'auto' },
  row2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' },
  card: { background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.10)', borderRadius: 8, padding: '1rem' },
  cardTitle: { fontWeight: 700, color, fontSize: '0.95rem', marginBottom: '0.5rem' },
};

/* ── SVG 1: Python vs Scala comparison ── */
function SvgPythonVsScala() {
  return (
    <svg viewBox="0 0 700 250" width="100%" style={{ display: 'block', margin: '0 auto' }}>
      {/* Python box */}
      <rect x="20" y="20" width="290" height="210" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="165" y="50" textAnchor="middle" fontSize="15" fontWeight="700" fill={color}>Python</text>
      <line x1="20" y1="62" x2="310" y2="62" stroke={color} strokeWidth="1" />
      {[
        'Tipagem dinâmica',
        'GIL (sem true threading)',
        'CPython (bytecode .pyc)',
        'Startup rápido',
        'Prototyping / ML / DS',
        'Pandas, NumPy, sklearn',
      ].map((label, i) => (
        <text key={i} x="40" y={84 + i * 22} fontSize="12" fill="var(--text-primary)">{label}</text>
      ))}
      {/* Scala box */}
      <rect x="390" y="20" width="290" height="210" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="535" y="50" textAnchor="middle" fontSize="15" fontWeight="700" fill={color}>Scala</text>
      <line x1="390" y1="62" x2="680" y2="62" stroke={color} strokeWidth="1" />
      {[
        'Tipagem estática (inferida)',
        'JVM — sem GIL',
        'scalac → .class bytecode',
        'Startup mais lento (JVM)',
        'Produção / Spark / streaming',
        'Spark, Akka, Kafka',
      ].map((label, i) => (
        <text key={i} x="410" y={84 + i * 22} fontSize="12" fill="var(--text-primary)">{label}</text>
      ))}
      {/* Both */}
      <text x="350" y="130" textAnchor="middle" fontSize="22" fill={color}>⟷</text>
      <text x="350" y="150" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">OOP + FP</text>
    </svg>
  );
}

/* ── SVG 2: JVM execution pipeline ── */
function SvgJvmPipeline() {
  const boxes = [
    { x: 10, label: 'Scala', sub: '.scala' },
    { x: 150, label: 'scalac', sub: 'compilador' },
    { x: 290, label: '.class', sub: 'bytecode' },
    { x: 430, label: 'JVM', sub: 'JIT + GC' },
    { x: 570, label: 'Native', sub: 'execução' },
  ];
  return (
    <svg viewBox="0 0 700 110" width="100%" style={{ display: 'block' }}>
      {boxes.map(({ x, label, sub }, i) => (
        <g key={label}>
          <rect x={x} y="20" width="110" height="55" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
          <text x={x + 55} y="47" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>{label}</text>
          <text x={x + 55} y="64" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{sub}</text>
          {i < boxes.length - 1 && (
            <text x={x + 122} y="51" textAnchor="middle" fontSize="18" fill={color}>→</text>
          )}
        </g>
      ))}
    </svg>
  );
}

/* ── SVG 3: Type hierarchy ── */
function SvgTypeHierarchy() {
  const W = 820, bw = 90, bh = 34, gap = 12;
  const r3labels = ['Int','Double','Boolean','Long','Unit','String','List[T]','Class'];
  const r3total = r3labels.length * bw + (r3labels.length - 1) * gap;
  const r3start = (W - r3total) / 2;
  const r3x = r3labels.map((_, i) => r3start + i * (bw + gap));
  const r3cx = r3x.map(x => x + bw / 2);
  const anyvalCX = (r3cx[0] + r3cx[4]) / 2;
  const anyrefCX = (r3cx[5] + r3cx[7]) / 2;
  const anyCX = W / 2;
  return (
    <svg viewBox={`0 0 ${W} 280`} width="100%" style={{ display: 'block', margin: '0 auto' }}>
      <rect x={anyCX - 70} y="10" width="140" height="38" rx="7" fill={color} />
      <text x={anyCX} y="34" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">Any</text>
      <line x1={anyCX} y1="48" x2={anyvalCX} y2="84" stroke={color} strokeWidth="1.5" />
      <line x1={anyCX} y1="48" x2={anyrefCX} y2="84" stroke={color} strokeWidth="1.5" />
      <rect x={anyvalCX - 75} y="84" width="150" height="36" rx="7" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x={anyvalCX} y="107" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>AnyVal</text>
      <rect x={anyrefCX - 75} y="84" width="150" height="36" rx="7" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x={anyrefCX} y="107" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>AnyRef</text>
      {r3labels.map((t, i) => {
        const parentCX = i < 5 ? anyvalCX : anyrefCX;
        return (
          <g key={t}>
            <line x1={parentCX} y1="120" x2={r3cx[i]} y2="154" stroke={color} strokeWidth="1" />
            <rect x={r3x[i]} y="154" width={bw} height={bh} rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
            <text x={r3cx[i]} y="176" textAnchor="middle" fontSize="11" fill={color}>{t}</text>
          </g>
        );
      })}
      <rect x={anyCX - 65} y="214" width="130" height="32" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
      <text x={anyCX} y="235" textAnchor="middle" fontSize="11" fill={color}>Nothing</text>
      <text x={anyCX} y="255" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">(bottom type)</text>
    </svg>
  );
}

/* ── SVG 4: Collection transformation pipeline ── */
function SvgCollectionPipeline() {
  const steps = [
    { label: 'List(1..5)', color: '#f97316' },
    { label: '.map(*2)', color: color },
    { label: '.filter(>4)', color: color },
    { label: '.foldLeft', color: color },
    { label: 'Result: 24', color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 700 90" width="100%" style={{ display: 'block' }}>
      {steps.map(({ label, color: c }, i) => (
        <g key={label}>
          <rect x={10 + i * 138} y="20" width="118" height="45" rx="8" fill="rgba(249,115,22,0.10)" stroke={c} strokeWidth="1.5" />
          <text x={10 + i * 138 + 59} y="47" textAnchor="middle" fontSize="12" fontWeight="600" fill={c}>{label}</text>
          {i < steps.length - 1 && (
            <text x={10 + i * 138 + 128} y="47" textAnchor="middle" fontSize="18" fill={color}>→</text>
          )}
        </g>
      ))}
    </svg>
  );
}

/* ── SVG 5: Pattern matching railway ── */
function SvgPatternMatch() {
  return (
    <svg viewBox="0 0 700 200" width="100%" style={{ display: 'block', margin: '0 auto' }}>
      {/* Input */}
      <rect x="10" y="70" width="100" height="40" rx="7" fill={color} />
      <text x="60" y="95" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">value</text>
      <line x1="110" y1="90" x2="160" y2="90" stroke={color} strokeWidth="2" />
      {/* match box */}
      <rect x="160" y="60" width="80" height="60" rx="7" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="200" y="95" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>match</text>
      {/* branches */}
      {[
        { y: 30, label: 'case Int', out: 'Int branch' },
        { y: 90, label: 'case String', out: 'String branch' },
        { y: 150, label: 'case _', out: 'default' },
      ].map(({ y, label, out }) => (
        <g key={label}>
          <line x1="240" y1="90" x2="290" y2={y + 10} stroke={color} strokeWidth="1.5" />
          <rect x="290" y={y} width="120" height="32" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
          <text x="350" y={y + 20} textAnchor="middle" fontSize="11" fill={color}>{label}</text>
          <line x1="410" y1={y + 16} x2="460" y2={y + 16} stroke={color} strokeWidth="1" />
          <rect x="460" y={y} width="110" height="32" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
          <text x="515" y={y + 20} textAnchor="middle" fontSize="11" fill={color}>{out}</text>
        </g>
      ))}
    </svg>
  );
}

/* ── SVG 6: Option railway ── */
function SvgOptionRailway() {
  return (
    <svg viewBox="0 0 700 140" width="100%" style={{ display: 'block' }}>
      {/* Start */}
      <rect x="10" y="50" width="90" height="40" rx="7" fill={color} />
      <text x="55" y="75" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">Option[T]</text>
      <line x1="100" y1="70" x2="150" y2="70" stroke={color} strokeWidth="2" />
      {/* Fork */}
      <line x1="150" y1="70" x2="200" y2="30" stroke={color} strokeWidth="1.5" />
      <line x1="150" y1="70" x2="200" y2="110" stroke={color} strokeWidth="1.5" />
      {/* Some path */}
      <rect x="200" y="10" width="90" height="34" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="245" y="32" textAnchor="middle" fontSize="12" fill={color}>Some(v)</text>
      <line x1="290" y1="27" x2="330" y2="27" stroke={color} strokeWidth="1.5" />
      <rect x="330" y="10" width="90" height="34" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
      <text x="375" y="32" textAnchor="middle" fontSize="11" fill={color}>.map(f)</text>
      <line x1="420" y1="27" x2="460" y2="27" stroke={color} strokeWidth="1.5" />
      <rect x="460" y="10" width="110" height="34" rx="6" fill={color} />
      <text x="515" y="32" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">Some(f(v))</text>
      {/* None path */}
      <rect x="200" y="90" width="90" height="34" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="245" y="112" textAnchor="middle" fontSize="12" fill={color}>None</text>
      <line x1="290" y1="107" x2="460" y2="107" stroke={color} strokeWidth="1.5" strokeDasharray="5,3" />
      <rect x="460" y="90" width="110" height="34" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="515" y="112" textAnchor="middle" fontSize="11" fill={color}>None</text>
      <text x="350" y="95" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">passa direto</text>
    </svg>
  );
}

/* ── SVG 7: Spark cluster ── */
function SvgSparkCluster() {
  return (
    <svg viewBox="0 0 700 200" width="100%" style={{ display: 'block' }}>
      {/* Driver */}
      <rect x="10" y="70" width="130" height="60" rx="8" fill={color} />
      <text x="75" y="96" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">Driver</text>
      <text x="75" y="114" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)">SparkContext</text>
      {/* Cluster Manager */}
      <rect x="270" y="20" width="160" height="45" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="350" y="47" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Cluster Manager</text>
      {/* Executors */}
      {[0, 1, 2].map((i) => {
        const ey = 90 + i * 0;
        const positions = [90, 155, 220];
        const ex = 510;
        const ey2 = 30 + i * 60;
        return (
          <g key={i}>
            <line x1="140" y1="100" x2="510" y2={ey2 + 20} stroke={color} strokeWidth="1" strokeDasharray="4,3" />
            <rect x={ex} y={ey2} width="140" height="40" rx="7" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
            <text x={ex + 70} y={ey2 + 25} textAnchor="middle" fontSize="12" fill={color}>Executor {i + 1}</text>
          </g>
        );
      })}
      <line x1="140" y1="90" x2="270" y2="45" stroke={color} strokeWidth="1" />
      <line x1="350" y1="65" x2="350" y2="100" stroke={color} strokeWidth="1" />
      <text x="350" y="115" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">task scheduling</text>
    </svg>
  );
}

/* ── SVG 8: For comprehension translation ── */
function SvgForComprehension() {
  return (
    <svg viewBox="0 0 700 120" width="100%" style={{ display: 'block' }}>
      <rect x="10" y="20" width="290" height="80" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="155" y="45" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>for comprehension (Scala)</text>
      <text x="30" y="68" fontSize="11" fill="var(--text-primary)" fontFamily="monospace">for {'{'} x {'<-'} list</text>
      <text x="30" y="86" fontSize="11" fill="var(--text-primary)" fontFamily="monospace">     if x {'>'} 0 {'}'} yield x * 2</text>
      <text x="355" y="65" textAnchor="middle" fontSize="20" fill={color}>⟹</text>
      <rect x="400" y="20" width="290" height="80" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="545" y="45" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>desugared</text>
      <text x="420" y="68" fontSize="11" fill="var(--text-primary)" fontFamily="monospace">list.filter(x =&gt; x &gt; 0)</text>
      <text x="420" y="86" fontSize="11" fill="var(--text-primary)" fontFamily="monospace">    .map(x =&gt; x * 2)</text>
    </svg>
  );
}

export default function PfDS9() {
  return (
    <div style={S.page}>
      <Link to="/pfds" style={S.back}><ArrowLeft size={16} /> Voltar a Programming for Data Science</Link>

      <div style={S.tag}>MÓDULO 09</div>
      <h1 style={S.h1}>Crash Course Scala para Data Scientists</h1>
      <p style={S.lead}>
        Scala é uma linguagem JVM estaticamente tipada que combina programação orientada a objetos
        com programação funcional. É a linguagem nativa do Apache Spark e amplamente usada em
        engenharia de dados em larga escala. Este módulo ensina Scala com foco na perspetiva de
        quem vem do Python.
      </p>

      {/* ── 1. Scala vs Python ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Scala vs Python — Visão Geral</h2>
        <p style={S.p}>
          Python e Scala são ambas multi-paradigma (OOP + funcional), mas diferem radicalmente
          em sistema de tipos, execução e casos de uso predominantes.
        </p>
        <div style={S.svgWrap}>
          <SvgPythonVsScala />
        </div>
        <div style={S.row2}>
          <div style={S.card}>
            <div style={S.cardTitle}>Python — quando usar</div>
            <p style={{ ...S.p, marginBottom: 0, fontSize: '0.9rem' }}>
              Prototipagem rápida, machine learning (scikit-learn, PyTorch, TensorFlow),
              análise exploratória (Pandas), scripting, APIs simples.
            </p>
          </div>
          <div style={S.card}>
            <div style={S.cardTitle}>Scala — quando usar</div>
            <p style={{ ...S.p, marginBottom: 0, fontSize: '0.9rem' }}>
              Pipelines de dados em produção (Spark), sistemas distribuídos (Akka),
              streaming (Kafka Streams), serviços de alta performance.
            </p>
          </div>
        </div>
        <div style={S.note}>
          A principal vantagem de Scala para Data Science é ser a linguagem nativa do Apache Spark,
          permitindo acesso à API mais completa e melhor performance vs PySpark.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 2. JVM e Execução ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. JVM e Execução</h2>
        <p style={S.p}>
          Scala compila para bytecode JVM, tal como Java. O compilador <code>scalac</code> produz
          ficheiros <code>.class</code> que a JVM executa com JIT (Just-In-Time compilation).
        </p>
        <div style={S.svgWrap}>
          <SvgJvmPipeline />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Aspeto</th>
              <th style={S.th}>Python (CPython)</th>
              <th style={S.th}>Scala (JVM)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Compilação', 'Bytecode .pyc (interpretado)', 'Bytecode .class + JIT nativo'],
              ['Startup', 'Muito rápido (~50ms)', 'Mais lento (~500ms–2s)'],
              ['Throughput', 'GIL limita paralelismo', 'True multithreading na JVM'],
              ['GC', 'Reference counting + cyclic', 'GC configurável (G1, ZGC)'],
              ['Ecosistema Java', 'Via Jython (limitado)', 'Total — qualquer lib Java'],
              ['Build tool', 'pip / poetry', 'SBT (Scala Build Tool)'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.code}>{`// build.sbt — ficheiro de projeto SBT
name := "MySparkApp"
version := "0.1"
scalaVersion := "2.13.12"

libraryDependencies += "org.apache.spark" %% "spark-sql" % "3.5.0"

// Comandos SBT
// sbt compile   — compila
// sbt run       — executa
// sbt package   — cria JAR
// sbt "run-main com.example.Main"`}</div>
      </div>

      <hr style={S.divider} />

      {/* ── 3. val vs var e Tipos ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. val vs var e Sistema de Tipos</h2>
        <p style={S.p}>
          Scala distingue <code>val</code> (imutável, como um <code>final</code> em Java) de
          <code> var</code> (mutável). O compilador infere tipos na maioria dos casos mas
          permite anotação explícita.
        </p>
        <div style={S.code}>{`// val — imutável (preferir sempre)
val x = 42               // Int inferido
val pi: Double = 3.14159 // anotação explícita
val name = "Scala"       // String

// val não pode ser reatribuído
// x = 10  → erro de compilação

// var — mutável (usar apenas quando necessário)
var counter = 0
counter += 1
counter = counter * 2    // OK

// String interpolation (equivale a f-strings Python)
println(s"Hello, $name!")         // Hello, Scala!
println(s"x ao quadrado = ${'${x * x}'}")

// Multiline strings
val sql = """
  SELECT *
  FROM users
  WHERE age > 25
""".stripMargin

// Unit — tipo de retorno de funções sem valor (≈ None/void)
val result: Unit = println("side effect")`}</div>
        <div style={S.svgWrap}>
          <SvgTypeHierarchy />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo Scala</th>
              <th style={S.th}>Equivalente Python</th>
              <th style={S.th}>Notas</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Int', 'int', '32 bits'],
              ['Long', 'int', '64 bits'],
              ['Double', 'float', '64-bit IEEE 754'],
              ['Boolean', 'bool', 'true / false (minúsculas)'],
              ['String', 'str', 'Imutável, Java String'],
              ['Unit', 'None', 'Valor único: ()'],
              ['Any', 'object', 'Supertipo de tudo'],
              ['Nothing', '—', 'Subtipo de tudo; ex: throw'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}><code>{a}</code></td>
                <td style={S.td}><code>{b}</code></td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── 4. Funções e Métodos ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Funções e Métodos</h2>
        <p style={S.p}>
          Em Scala, funções são cidadãos de primeira classe. <code>def</code> define métodos;
          funções anónimas usam a sintaxe <code>=&gt;</code>; funções podem ser atribuídas a vals.
        </p>
        <div style={S.code}>{`// def — método básico
def add(a: Int, b: Int): Int = a + b

// Bloco de código (última expressão = valor de retorno)
def factorial(n: Int): Int = {
  if (n <= 1) 1
  else n * factorial(n - 1)
}

// Parâmetros por defeito e nomeados
def greet(name: String, greeting: String = "Hello"): String =
  s"$greeting, $name!"

greet("World")                       // Hello, World!
greet("Mundo", greeting = "Olá")    // Olá, Mundo!

// Função anónima / lambda
val square = (x: Int) => x * x
val double: Int => Int = x => x * 2
val add2: (Int, Int) => Int = (a, b) => a + b

// Underscore placeholder (shorthand para lambdas simples)
val nums = List(1, 2, 3, 4, 5)
nums.map(_ * 2)          // equivalente a x => x * 2
nums.filter(_ > 2)       // equivalente a x => x > 2
nums.reduce(_ + _)       // equivalente a (a, b) => a + b

// Higher-order functions
def applyTwice(f: Int => Int, x: Int): Int = f(f(x))
applyTwice(square, 3)    // 81

// Currying
def multiply(a: Int)(b: Int): Int = a * b
val triple = multiply(3)_
triple(5)                // 15

// Comparação com Python
// Python: def square(x): return x ** 2
// Scala:  def square(x: Int): Int = x * x
// Python: lambda x: x * 2
// Scala:  (x: Int) => x * 2`}</div>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Em Scala, <strong>não há keyword <code>return</code> obrigatória</strong> — a última
            expressão de um bloco é automaticamente o valor de retorno. Isso encoraja estilo
            mais funcional e expressivo.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 5. Collections ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Coleções Imutáveis</h2>
        <p style={S.p}>
          Scala disponibiliza coleções imutáveis por defeito em <code>scala.collection.immutable</code>.
          Operações como <code>map</code> e <code>filter</code> retornam novas coleções sem modificar
          a original.
        </p>
        <div style={S.svgWrap}>
          <SvgCollectionPipeline />
        </div>
        <div style={S.code}>{`// List — linked list imutável
val nums = List(1, 2, 3, 4, 5)
val prepended = 0 :: nums          // List(0,1,2,3,4,5)
val appended  = nums :+ 6          // List(1,2,3,4,5,6)
val concat    = nums ++ List(6,7)  // List(1,2,3,4,5,6,7)
nums.head    // 1
nums.tail    // List(2,3,4,5)
nums.isEmpty // false

// Vector — acesso aleatório O(log n), preferível a List para grandes dados
val vec = Vector(10, 20, 30, 40)
vec(2)                             // 30 (indexação direta)

// Map — dicionário imutável
val scores = Map("Alice" -> 95, "Bob" -> 87, "Carol" -> 92)
scores("Alice")                    // 95
scores.get("David")                // None
scores.getOrElse("David", 0)       // 0
val updated = scores + ("David" -> 78)  // novo Map

// Set — sem duplicados
val fruits = Set("apple", "banana", "apple")  // Set(apple, banana)
fruits.contains("apple")  // true

// Operações funcionais
nums.map(x => x * 2)               // List(2,4,6,8,10)
nums.filter(_ % 2 == 0)            // List(2,4)
nums.foldLeft(0)(_ + _)            // 15
nums.foldLeft(1)(_ * _)            // 120 (factorial!)
nums.flatMap(x => List(x, -x))    // List(1,-1,2,-2,3,-3,4,-4,5,-5)
nums.zip(List('a','b','c'))        // List((1,a),(2,b),(3,c))
nums.collect { case x if x > 3 => x * 10 }  // List(40, 50)
nums.groupBy(_ % 2 == 0)           // Map(false->List(1,3,5), true->List(2,4))
nums.sortBy(-_)                    // List(5,4,3,2,1)
nums.take(3)                       // List(1,2,3)
nums.drop(2)                       // List(3,4,5)
nums.exists(_ > 4)                 // true
nums.forall(_ > 0)                 // true
nums.count(_ % 2 == 0)             // 2

// Coleções mutáveis (quando mesmo necessário)
import scala.collection.mutable
val mList = mutable.ListBuffer(1, 2, 3)
mList += 4
mList.remove(0)

// Tuplas — tipo produto fixo
val pair = (1, "hello")
pair._1   // 1
pair._2   // "hello"
val (a, b) = pair  // desestruturação`}</div>
        <div style={S.note}>
          Coleções imutáveis são seguras para partilhar entre threads — crucial em Spark onde
          o código pode correr em múltiplos executors em paralelo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 6. Case Classes e Pattern Matching ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Case Classes e Pattern Matching</h2>
        <p style={S.p}>
          <code>case class</code> é um tipo de dados imutável que gera automaticamente
          <code> equals</code>, <code>hashCode</code>, <code>toString</code> e <code>copy</code>.
          Pattern matching é como um <code>switch</code> mas muito mais poderoso.
        </p>
        <div style={S.svgWrap}>
          <SvgPatternMatch />
        </div>
        <div style={S.code}>{`// Case class — tipo de dados imutável
case class Person(name: String, age: Int)

val alice = Person("Alice", 30)
alice.name           // "Alice"
alice.age            // 30
val older = alice.copy(age = 31)  // nova instância

// equals automático (por valor, não referência)
Person("Alice", 30) == Person("Alice", 30)  // true

// toString automático
println(alice)  // Person(Alice,30)

// Pattern matching básico
def describe(x: Any): String = x match {
  case 0           => "zero"
  case n: Int      => s"inteiro: $n"
  case s: String   => s"string: $s"
  case (a, b)      => s"par: $a, $b"
  case _           => "outro"
}

// Match em case class com guard
def categorize(p: Person): String = p match {
  case Person(_, age) if age < 18  => "menor"
  case Person(name, age) if age < 65 => s"$name é adulto"
  case Person(name, _)              => s"$name é sénior"
}

// Sealed trait — hierarquia fechada (exaustividade garantida)
sealed trait Shape
case class Circle(radius: Double) extends Shape
case class Rectangle(w: Double, h: Double) extends Shape
case object Point extends Shape

def area(s: Shape): Double = s match {
  case Circle(r)       => Math.PI * r * r
  case Rectangle(w, h) => w * h
  case Point           => 0.0
  // compilador avisa se faltar algum caso!
}

// Match como expressão (retorna valor)
val label = alice.age match {
  case a if a < 30 => "jovem"
  case a if a < 60 => "adulto"
  case _           => "sénior"
}`}</div>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Sealed traits</strong> garantem exaustividade: o compilador avisa se o
            pattern match não cobre todos os casos. Equivale a <code>Enum</code> + subclasses
            em Python mas com verificação estática.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 7. Option, Either, Try ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Option, Either, Try — Sem Null nem Exceções não tratadas</h2>
        <p style={S.p}>
          Scala encoraja modelar ausência e erros no sistema de tipos, evitando
          <code> NullPointerException</code> e exceções surpresa.
        </p>
        <div style={S.svgWrap}>
          <SvgOptionRailway />
        </div>
        <div style={S.code}>{`// Option[T] — Some(valor) ou None
val maybeName: Option[String] = Some("Alice")
val noName: Option[String]    = None

// Operações
maybeName.get                      // "Alice" (cuidado: lança se None)
maybeName.getOrElse("Unknown")     // "Alice"
noName.getOrElse("Unknown")        // "Unknown"
maybeName.map(_.toUpperCase)       // Some("ALICE")
noName.map(_.toUpperCase)          // None
maybeName.filter(_.length > 3)     // Some("Alice")
maybeName.isDefined                // true
noName.isEmpty                     // true

// flatMap — encadear operações que devolvem Option
def findUser(id: Int): Option[String] = Map(1 -> "Alice").get(id)
def findEmail(name: String): Option[String] = Map("Alice" -> "a@b.com").get(name)

val email: Option[String] = findUser(1).flatMap(findEmail)
// Some("a@b.com")

// Pattern matching em Option
email match {
  case Some(e) => println(s"Email: $e")
  case None    => println("Não encontrado")
}

// Either[L, R] — Left=erro, Right=sucesso
def divide(a: Int, b: Int): Either[String, Double] =
  if (b == 0) Left("Divisão por zero")
  else Right(a.toDouble / b)

divide(10, 2)  // Right(5.0)
divide(10, 0)  // Left("Divisão por zero")

// Encadear Either com map/flatMap
val result = divide(10, 2)
  .map(_ * 100)
  .map(v => s"Resultado: $v")
// Right("Resultado: 500.0")

// Try[T] — Success(valor) ou Failure(exceção)
import scala.util.{Try, Success, Failure}

def parseNum(s: String): Try[Int] = Try(s.toInt)

parseNum("42")    // Success(42)
parseNum("abc")   // Failure(NumberFormatException)

parseNum("42").getOrElse(0)   // 42
parseNum("abc").getOrElse(0)  // 0

// Comparação com Python
// Python: try/except ou if x is not None
// Scala:  tipos Option/Either/Try no sistema de tipos`}</div>
        <div style={S.note}>
          <strong>Railway-oriented programming:</strong> encadear operações com <code>.map</code> e
          <code> .flatMap</code> mantém o fluxo "feliz" no caminho direto e desvia erros
          automaticamente — sem try/except aninhados.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 8. Traits e Herança ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Traits, Herança e Companion Objects</h2>
        <p style={S.p}>
          Traits são como interfaces com implementação — equivalente a ABCs + mixins do Python.
          Companion objects fornecem métodos "estáticos" sem a keyword <code>static</code>.
        </p>
        <div style={S.code}>{`// Trait básico (como interface + default methods)
trait Greetable {
  def name: String
  def greet(): String = s"Hello, I'm $name"  // implementação default
}

trait Serializable {
  def serialize(): String
}

// Classe que estende múltiplos traits
class Employee(val name: String, val department: String)
  extends Greetable
  with Serializable {

  override def greet(): String = s"Hi from $department: $name"
  def serialize(): String = s"Employee($name,$department)"
}

val emp = new Employee("Alice", "Engineering")
emp.greet()      // Hi from Engineering: Alice
emp.serialize()  // Employee(Alice,Engineering)

// Abstract class — quando precisar de construtores com parâmetros
abstract class Animal(val species: String) {
  def sound(): String  // abstrato (sem implementação)
  def describe(): String = s"$species says ${'${sound()}'}"
}

class Dog extends Animal("Canis lupus") {
  def sound(): String = "Woof"
}

new Dog().describe()  // Canis lupus says Woof

// Companion Object — métodos de "classe" / factory
case class Point(x: Double, y: Double)

object Point {
  val origin = Point(0.0, 0.0)

  def fromTuple(t: (Double, Double)): Point = Point(t._1, t._2)

  def distance(a: Point, b: Point): Double = {
    val dx = a.x - b.x
    val dy = a.y - b.y
    Math.sqrt(dx*dx + dy*dy)
  }
}

Point.origin                         // Point(0.0, 0.0)
Point.fromTuple((3.0, 4.0))         // Point(3.0, 4.0)
Point.distance(Point.origin, Point(3,4))  // 5.0`}</div>
        <div style={S.row2}>
          <div style={S.card}>
            <div style={S.cardTitle}>Trait vs Python ABC</div>
            <p style={{ ...S.p, marginBottom: 0, fontSize: '0.9rem' }}>
              Traits suportam herança múltipla com <code>with</code>. Conflitos de método
              resolvem-se por linearização (C3-like). Python usa MRO para mixins.
            </p>
          </div>
          <div style={S.card}>
            <div style={S.cardTitle}>Object vs @staticmethod</div>
            <p style={{ ...S.p, marginBottom: 0, fontSize: '0.9rem' }}>
              Em Scala não existe <code>static</code>. Métodos de classe ficam em
              <code> object</code> (singleton). O companion object partilha o nome da classe.
            </p>
          </div>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 9. Scala para Apache Spark ── */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Scala para Apache Spark</h2>
        <p style={S.p}>
          Apache Spark é escrito em Scala e disponibiliza a API mais completa e eficiente nesta
          linguagem. Spark distribui processamento de dados em clusters: um <strong>Driver</strong>
          coordena múltiplos <strong>Executors</strong>.
        </p>
        <div style={S.svgWrap}>
          <SvgSparkCluster />
        </div>
        <div style={S.code}>{`import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._

val spark = SparkSession.builder()
  .appName("DataPipeline")
  .master("local[*]")      // local: usa todos os cores
  .getOrCreate()

import spark.implicits._   // necessário para $"coluna" e .toDS()

// Ler dados
val df = spark.read
  .option("header", "true")
  .option("inferSchema", "true")
  .csv("s3://bucket/data.csv")

// Inspecionar
df.show(5)
df.printSchema()
df.count()

// Transformações (LAZY — só executam quando há uma action)
val result = df
  .filter($"age" > 25)
  .withColumn("salary_k", $"salary" / 1000)
  .groupBy("department")
  .agg(
    avg("salary").alias("avg_salary"),
    count("*").alias("headcount"),
    max("age").alias("max_age")
  )
  .orderBy($"avg_salary".desc)

// Actions — disparam execução real
result.show()
result.collect()           // Array[Row] no Driver
result.write.parquet("output/")

// UDF — User Defined Function em Scala
val upperDept = udf((s: String) => s.toUpperCase)
df.withColumn("dept_upper", upperDept($"department"))

// Dataset[T] — tipo seguro (Scala only)
case class Employee(name: String, age: Int, salary: Double)
val ds = df.as[Employee]   // DataFrame tipado
ds.filter(_.age > 30)      // acesso aos campos com autocompletion`}</div>
        <div style={S.note}>
          Spark usa avaliação <strong>lazy</strong>: transformações (<code>filter</code>,
          <code> groupBy</code>, <code>withColumn</code>) constroem um plano lógico (DAG).
          Os dados só são processados quando se chama uma <em>action</em>:
          <code> .show()</code>, <code>.collect()</code>, <code>.count()</code>, <code>.write</code>.
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>API Spark</th>
              <th style={S.th}>Descrição</th>
              <th style={S.th}>Type safety</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['RDD[T]', 'Resilient Distributed Dataset — API de baixo nível', 'Sim (genérico)'],
              ['DataFrame', 'Tabela distribuída (= Dataset[Row])', 'Não (Row dinâmico)'],
              ['Dataset[T]', 'DataFrame com tipo Scala — melhor of both', 'Sim (case class)'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}><code>{a}</code></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── 10. For Comprehensions ── */}
      <div style={S.section}>
        <h2 style={S.h2}>10. For Comprehensions</h2>
        <p style={S.p}>
          For comprehensions em Scala são "syntactic sugar" para sequências de
          <code> flatMap</code>, <code>map</code> e <code>filter</code>. Funcionam em qualquer
          tipo que implemente esses métodos (List, Option, Future, etc.).
        </p>
        <div style={S.svgWrap}>
          <SvgForComprehension />
        </div>
        <div style={S.code}>{`// For comprehension básica (equivale a list comprehension Python)
val nums = List(1, 2, 3, 4, 5)

// Scala
val doubled = for {
  x <- nums
  if x % 2 == 0
} yield x * 2
// List(4, 8)

// Python equivalente: [x * 2 for x in nums if x % 2 == 0]

// Múltiplos geradores (produto cartesiano)
val pairs = for {
  x <- List(1, 2, 3)
  y <- List('a', 'b')
} yield (x, y)
// List((1,a),(1,b),(2,a),(2,b),(3,a),(3,b))

// Python: [(x,y) for x in [1,2,3] for y in ['a','b']]

// For com Option — encadeia sem flatMap explícito
def findUser(id: Int): Option[String] = Map(1 -> "Alice").get(id)
def findAge(name: String): Option[Int] = Map("Alice" -> 30).get(name)

val age = for {
  user <- findUser(1)
  a    <- findAge(user)
} yield a
// Some(30) — se qualquer passo for None, retorna None

// Desugaring explícito (o compilador faz isto)
// for { x <- list; if cond } yield expr
//   ==  list.withFilter(x => cond).map(x => expr)

// for { x <- a; y <- b } yield f(x,y)
//   ==  a.flatMap(x => b.map(y => f(x,y)))

// For sem yield — apenas side effects (como for loop Python)
for {
  x <- nums
  if x > 3
} println(s"x = $x")  // imprime 4 e 5`}</div>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            For comprehensions funcionam com qualquer tipo <em>monádico</em> — List, Option,
            Future, Either, Try. Em Haskell, o equivalente chama-se <code>do-notation</code>.
            Em Python, generators e list comprehensions cobrem parte deste território.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 11. Implicits e Context ── */}
      <div style={S.section}>
        <h2 style={S.h2}>11. Implicits e Context (Scala 2/3)</h2>
        <p style={S.p}>
          Implicits são um mecanismo avançado de Scala que permite injeção automática de
          parâmetros e extensão de tipos sem modificar o código original. Essencial para
          entender Spark e bibliotecas funcionais.
        </p>
        <div style={S.code}>{`// Implicit parameters (Scala 2)
implicit val defaultThreshold: Double = 0.5

def classify(score: Double)(implicit threshold: Double): String =
  if (score > threshold) "positive" else "negative"

classify(0.8)   // usa implicit: "positive"
classify(0.8)(0.9)  // explícito: "negative"

// Implicit conversions — adicionar métodos a tipos existentes
implicit class RichInt(n: Int) {
  def factorial: Int = (1 to n).product
  def isPrime: Boolean = n > 1 && (2 to Math.sqrt(n).toInt).forall(n % _ != 0)
}

5.factorial  // 120
7.isPrime    // true

// Type classes — pattern funcional
trait Printable[A] {
  def print(a: A): String
}

implicit val intPrintable: Printable[Int] =
  (a: Int) => s"Int($a)"

def show[A](a: A)(implicit p: Printable[A]): String = p.print(a)
show(42)  // Int(42)

// Spark usa implicits extensivamente
// import spark.implicits._  — habilita:
//   $"coluna"        (Column DSL)
//   df.as[CaseClass] (Dataset)
//   Seq(...).toDF()  (DataFrame from Scala collections)

// Scala 3 — given/using (substitui implicit)
given threshold: Double = 0.5

def classify3(score: Double)(using t: Double): String =
  if (score > t) "positive" else "negative"`}</div>
        <div style={S.note}>
          Implicits são poderosos mas podem tornar o código difícil de seguir. Em Scala 3,
          foram substituídos por <code>given</code>/<code>using</code> com semântica mais clara.
          Para Spark com Scala 2.x, perceber <code>import spark.implicits._</code> é essencial.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 12. Síntese ── */}
      <div style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo</h2>
        <p style={S.p}>
          Comparação direta das mesmas tarefas em Python e Scala para consolidar a transição.
        </p>
        <div style={S.code}>{`// ── Processamento de lista ──
// Python
nums = [1, 2, 3, 4, 5]
result = [x * 2 for x in nums if x > 2]   # [6, 8, 10]
total = sum(nums)                           # 15

// Scala
val nums = List(1, 2, 3, 4, 5)
val result = nums.filter(_ > 2).map(_ * 2) // List(6, 8, 10)
val total = nums.sum                        // 15

// ── Tratamento de erros ──
// Python
def safe_divide(a, b):
    if b == 0:
        return None
    return a / b
result = safe_divide(10, 0) or 0

// Scala
def safeDivide(a: Int, b: Int): Option[Double] =
  if (b == 0) None else Some(a.toDouble / b)
val result = safeDivide(10, 0).getOrElse(0.0)

// ── Definição de classe ──
// Python
from dataclasses import dataclass
@dataclass
class Point:
    x: float
    y: float
p = Point(1.0, 2.0)
p2 = Point(p.x, 3.0)  # "copy"

// Scala
case class Point(x: Double, y: Double)
val p = Point(1.0, 2.0)
val p2 = p.copy(y = 3.0)   // automático

// ── Dicionário / Map ──
// Python
scores = {"Alice": 95, "Bob": 87}
alice = scores.get("Alice", 0)

// Scala
val scores = Map("Alice" -> 95, "Bob" -> 87)
val alice = scores.getOrElse("Alice", 0)

// ── Função de ordem superior ──
// Python
def apply_twice(f, x): return f(f(x))
apply_twice(lambda x: x * 2, 3)   # 12

// Scala
def applyTwice(f: Int => Int, x: Int): Int = f(f(x))
applyTwice(x => x * 2, 3)         // 12`}</div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Conceito</th>
              <th style={S.th}>Python</th>
              <th style={S.th}>Scala</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Imutável', 'tuple / frozenset', 'val, List, Map, Set'],
              ['Mutável', 'list, dict', 'var, ListBuffer, HashMap (mutable)'],
              ['Null safety', 'if x is not None', 'Option[T] (Some/None)'],
              ['Erros', 'try/except', 'Either, Try'],
              ['Classes de dados', '@dataclass', 'case class'],
              ['Interfaces', 'ABC / Protocol', 'trait'],
              ['Mixins', 'herança múltipla', 'trait + with'],
              ['Métodos estáticos', '@staticmethod / @classmethod', 'companion object'],
              ['List comprehension', '[x for x in lst]', 'for { x <- lst } yield x'],
              ['Lambda', 'lambda x: x*2', '(x: Int) => x * 2'],
              ['Type hints', 'def f(x: int) -> str', 'def f(x: Int): String'],
              ['Build', 'pip / pyproject.toml', 'SBT (build.sbt)'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}><code>{b}</code></td>
                <td style={S.td}><code>{c}</code></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.highlight}>
          <p style={S.p}><strong>Guia de migração rápida:</strong></p>
          <p style={S.p}>1. Substitua <code>list</code> por <code>List</code>/<code>Vector</code>, <code>dict</code> por <code>Map</code>.</p>
          <p style={S.p}>2. Use <code>val</code> por defeito; só use <code>var</code> se mesmo necessário.</p>
          <p style={S.p}>3. Substitua <code>None</code> checks por <code>Option</code> com <code>.map</code>/<code>.getOrElse</code>.</p>
          <p style={S.p}>4. Converta <code>@dataclass</code> para <code>case class</code>.</p>
          <p style={S.p}>5. Substitua <code>isinstance</code> + if/elif por pattern matching (<code>match/case</code>).</p>
          <p style={{ ...S.p, marginBottom: 0 }}>6. Para Spark: prefira DataFrame/Dataset API a RDD; use <code>import spark.implicits._</code> sempre.</p>
        </div>
        </div>
    </div>
  );
}
