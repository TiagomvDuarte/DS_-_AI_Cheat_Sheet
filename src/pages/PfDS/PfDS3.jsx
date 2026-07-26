import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const color = '#4a9eed';
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
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  svgWrap: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1.25rem', margin: '1.25rem 0', overflowX: 'auto', textAlign: 'center' },
};

/* ── SVG 1: Function Black Box ── */
function SvgBlackBox() {
  return (
    <svg width="520" height="160" viewBox="0 0 520 160" style={{ maxWidth: '100%' }}>
      {/* Inputs */}
      <rect x="10" y="40" width="90" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="55" y="59" textAnchor="middle" fontSize="12" fill={color} fontFamily="monospace">a = 3</text>
      <rect x="10" y="80" width="90" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="55" y="99" textAnchor="middle" fontSize="12" fill={color} fontFamily="monospace">b = 4</text>
      {/* Arrows in */}
      <line x1="100" y1="54" x2="155" y2="70" stroke="#888" strokeWidth="1.5" markerEnd="url(#arr)" />
      <line x1="100" y1="94" x2="155" y2="80" stroke="#888" strokeWidth="1.5" markerEnd="url(#arr)" />
      {/* Black box */}
      <rect x="155" y="30" width="210" height="100" rx="10" fill="#1a1a2e" stroke={color} strokeWidth="2" />
      <text x="260" y="72" textAnchor="middle" fontSize="13" fill="#fff" fontFamily="monospace">def multiply(a, b):</text>
      <text x="260" y="92" textAnchor="middle" fontSize="13" fill={color} fontFamily="monospace">    return a * b</text>
      <text x="260" y="115" textAnchor="middle" fontSize="10" fill="#666">computação interna</text>
      {/* Arrow out */}
      <line x1="365" y1="80" x2="420" y2="80" stroke="#888" strokeWidth="1.5" markerEnd="url(#arr)" />
      {/* Output */}
      <rect x="420" y="66" width="90" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="465" y="85" textAnchor="middle" fontSize="12" fill={color} fontFamily="monospace">12</text>
      {/* Labels */}
      <text x="55" y="30" textAnchor="middle" fontSize="11" fill="#888">inputs</text>
      <text x="465" y="57" textAnchor="middle" fontSize="11" fill="#888">output</text>
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#888" />
        </marker>
      </defs>
    </svg>
  );
}

/* ── SVG 2: Parameter Binding ── */
function SvgParamBinding() {
  return (
    <svg width="520" height="200" viewBox="0 0 520 200" style={{ maxWidth: '100%' }}>
      <text x="10" y="22" fontSize="12" fill="#888" fontFamily="monospace">chamada: greet("Ana", greeting="Olá")</text>
      {/* Call site boxes */}
      <rect x="10" y="35" width="80" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="50" y="54" textAnchor="middle" fontSize="12" fill={color} fontFamily="monospace">"Ana"</text>
      <rect x="110" y="35" width="130" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="175" y="54" textAnchor="middle" fontSize="12" fill="#4a9eed" fontFamily="monospace">greeting="Olá"</text>
      {/* Binding arrows */}
      <line x1="50" y1="63" x2="50" y2="110" stroke={color} strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arr2)" />
      <line x1="175" y1="63" x2="270" y2="110" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arr2b)" />
      {/* Function frame */}
      <rect x="10" y="115" width="500" height="70" rx="8" fill="var(--bg-secondary)" stroke="#444" strokeWidth="1.5" />
      <text x="260" y="133" textAnchor="middle" fontSize="11" fill="#666">local namespace da função</text>
      <rect x="30" y="140" width="70" height="26" rx="4" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x="65" y="157" textAnchor="middle" fontSize="11" fill={color} fontFamily="monospace">name="Ana"</text>
      <rect x="120" y="140" width="130" height="26" rx="4" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1" />
      <text x="185" y="157" textAnchor="middle" fontSize="11" fill="#4a9eed" fontFamily="monospace">greeting="Olá"</text>
      <defs>
        <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
        <marker id="arr2b" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
        </marker>
      </defs>
    </svg>
  );
}

/* ── SVG 3: LEGB Nested Boxes ── */
function SvgLEGB() {
  return (
    <svg width="480" height="260" viewBox="0 0 480 260" style={{ maxWidth: '100%' }}>
      {/* Built-in */}
      <rect x="5" y="5" width="470" height="250" rx="14" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
      <text x="24" y="26" fontSize="12" fill="#4a9eed" fontWeight="700">B — Built-in</text>
      <text x="24" y="42" fontSize="10" fill="#888">print, len, range, type, ...</text>
      {/* Global */}
      <rect x="30" y="52" width="420" height="190" rx="12" fill="rgba(125,211,252,0.07)" stroke="#7dd3fc" strokeWidth="2" />
      <text x="48" y="72" fontSize="12" fill="#7dd3fc" fontWeight="700">G — Global</text>
      <text x="48" y="88" fontSize="10" fill="#888">variáveis no topo do ficheiro .py</text>
      {/* Enclosing */}
      <rect x="58" y="98" width="364" height="130" rx="10" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
      <text x="76" y="118" fontSize="12" fill="#4a9eed" fontWeight="700">E — Enclosing</text>
      <text x="76" y="134" fontSize="10" fill="#888">função exterior (closures)</text>
      {/* Local */}
      <rect x="88" y="144" width="304" height="72" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="2" />
      <text x="106" y="164" fontSize="12" fill={color} fontWeight="700">L — Local</text>
      <text x="106" y="180" fontSize="10" fill="#888">variáveis dentro da função atual</text>
      <text x="106" y="196" fontSize="10" fill="#888">pesquisa começa aqui</text>
      {/* Arrow showing lookup order */}
      <path d="M440,210 Q460,180 460,130 Q460,70 440,40" fill="none" stroke="#aaa" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrLEGB)" />
      <text x="452" y="147" fontSize="9" fill="#888" transform="rotate(-90,452,130)">lookup</text>
      <defs>
        <marker id="arrLEGB" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#aaa" />
        </marker>
      </defs>
    </svg>
  );
}

/* ── SVG 4: Closure Frame ── */
function SvgClosure() {
  return (
    <svg width="520" height="210" viewBox="0 0 520 210" style={{ maxWidth: '100%' }}>
      {/* Outer frame */}
      <rect x="10" y="10" width="230" height="100" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="20" y="30" fontSize="11" fill="#4a9eed" fontWeight="700" fontFamily="monospace">outer() frame</text>
      <text x="20" y="52" fontSize="11" fill="#4a9eed" fontFamily="monospace">count = 0</text>
      <text x="20" y="70" fontSize="10" fill="#888">enclosing scope</text>
      {/* Inner frame */}
      <rect x="30" y="80" width="180" height="60" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="40" y="100" fontSize="11" fill={color} fontWeight="700" fontFamily="monospace">inner() frame</text>
      <text x="40" y="118" fontSize="10" fill="#888">lembra count do outer</text>
      {/* Function object box */}
      <rect x="300" y="50" width="200" height="90" rx="8" fill="var(--bg-secondary)" stroke="#444" strokeWidth="1.5" />
      <text x="400" y="72" textAnchor="middle" fontSize="11" fill="var(--text-primary)" fontWeight="700">function object</text>
      <text x="400" y="92" textAnchor="middle" fontSize="10" fill="#888" fontFamily="monospace">__code__</text>
      <text x="400" y="108" textAnchor="middle" fontSize="10" fill="#888" fontFamily="monospace">__closure__  ─────┐</text>
      <text x="400" y="124" textAnchor="middle" fontSize="10" fill={color} fontFamily="monospace">cell: count=0      │</text>
      {/* Arrow from closure to outer */}
      <line x1="210" y1="55" x2="295" y2="90" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="5 2" markerEnd="url(#arrCL)" />
      <text x="240" y="68" fontSize="9" fill="#888">referência</text>
      <defs>
        <marker id="arrCL" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
        </marker>
      </defs>
      <text x="10" y="175" fontSize="11" fill="#888">Quando inner() é retornada, carrega consigo o cell count do outer.</text>
      <text x="10" y="195" fontSize="11" fill="#888">Cada chamada ao maker cria um novo cell independente.</text>
    </svg>
  );
}

/* ── SVG 5: Module Search Path ── */
function SvgModulePath() {
  const steps = [
    { label: '1. Diretório atual', sub: 'onde o script corre', fill: 'rgba(74,158,237,0.10)', stroke: color },
    { label: '2. stdlib', sub: 'os, sys, re, math...', fill: 'rgba(74,158,237,0.10)', stroke: '#4a9eed' },
    { label: '3. site-packages', sub: 'numpy, pandas, ...', fill: 'rgba(125,211,252,0.12)', stroke: '#7dd3fc' },
  ];
  return (
    <svg width="520" height="130" viewBox="0 0 520 130" style={{ maxWidth: '100%' }}>
      <text x="10" y="18" fontSize="12" fill="#888">sys.path — ordem de procura de módulos</text>
      {steps.map(function(s, i) {
        var x = 10 + i * 170;
        return (
          <g key={i}>
            <rect x={x} y="30" width="155" height="70" rx="8" fill={s.fill} stroke={s.stroke} strokeWidth="1.5" />
            <text x={x + 77} y="58" textAnchor="middle" fontSize="12" fill={s.stroke} fontWeight="700">{s.label}</text>
            <text x={x + 77} y="78" textAnchor="middle" fontSize="10" fill="#888">{s.sub}</text>
            {i < 2 && (
              <path d={'M' + (x + 155) + ',65 L' + (x + 168) + ',65'} fill="none" stroke="#888" strokeWidth="1.5" markerEnd="url(#arrMP)" />
            )}
          </g>
        );
      })}
      <defs>
        <marker id="arrMP" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#888" />
        </marker>
      </defs>
      <text x="10" y="120" fontSize="10" fill="#888">ImportError se o módulo não for encontrado em nenhum dos diretórios.</text>
    </svg>
  );
}

/* ── SVG 6: Regex Match Highlight ── */
function SvgRegexMatch() {
  var text = 'email: ana@mdsaa.pt, rui@ds.pt';
  var chars = text.split('');
  var match1 = [7, 18];   // ana@mdsaa.pt  (indices 7-18)
  var match2 = [21, 29];  // rui@ds.pt (indices 21-29)
  var charW = 11;
  var startX = 10;
  return (
    <svg width="520" height="100" viewBox="0 0 520 100" style={{ maxWidth: '100%' }}>
      <text x="10" y="18" fontSize="11" fill="#888" fontFamily="monospace">{'pattern: r"[\\w.]+@[\\w.]+"'}</text>
      {chars.map(function(ch, i) {
        var inM1 = i >= match1[0] && i <= match1[1];
        var inM2 = i >= match2[0] && i <= match2[1];
        var bg = inM1 ? 'rgba(74,158,237,0.10)' : inM2 ? 'rgba(74,158,237,0.10)' : 'transparent';
        var stroke2 = inM1 ? color : inM2 ? '#4a9eed' : 'none';
        return (
          <g key={i}>
            {(inM1 || inM2) && (
              <rect x={startX + i * charW - 1} y="28" width={charW} height="22" rx="2" fill={bg} stroke={stroke2} strokeWidth="0.8" />
            )}
            <text x={startX + i * charW + 4} y="44" textAnchor="middle" fontSize="11" fill="var(--text-primary)" fontFamily="monospace">{ch}</text>
          </g>
        );
      })}
      <rect x={startX + match1[0] * charW} y="55" width={(match1[1] - match1[0] + 1) * charW} height="16" rx="3" fill={color} />
      <text x={startX + (match1[0] + match1[1] + 1) / 2 * charW} y="67" textAnchor="middle" fontSize="9" fill="#fff">match 1</text>
      <rect x={startX + match2[0] * charW} y="55" width={(match2[1] - match2[0] + 1) * charW} height="16" rx="3" fill="#4a9eed" />
      <text x={startX + (match2[0] + match2[1] + 1) / 2 * charW} y="67" textAnchor="middle" fontSize="9" fill="#fff">match 2</text>
      <text x="10" y="92" fontSize="10" fill="#888">re.findall retorna: ['ana@mdsaa.pt', 'rui@ds.pt']</text>
    </svg>
  );
}

/* ── SVG 7: Recursion Call Stack ── */
function SvgCallStack() {
  var frames = [
    { label: 'factorial(4)', val: '4 * factorial(3)' },
    { label: 'factorial(3)', val: '3 * factorial(2)' },
    { label: 'factorial(2)', val: '2 * factorial(1)' },
    { label: 'factorial(1)', val: 'return 1  ← base case' },
  ];
  return (
    <svg width="460" viewBox="0 0 460 240" style={{ maxWidth: '100%', display: 'block', margin: '0 auto' }}>
      <text x="10" y="18" fontSize="12" fill="#888">call stack — factorial(4)</text>
      {frames.map(function(f, i) {
        var y = 28 + i * 44;
        var isBase = i === frames.length - 1;
        return (
          <g key={i}>
            <rect x="10" y={y} width="420" height="36" rx="6"
              fill={isBase ? 'rgba(74,158,237,0.10)' : 'var(--bg-secondary)'}
              stroke={isBase ? color : '#444'} strokeWidth="1.5" />
            <text x="22" y={y + 16} fontSize="12" fill={isBase ? color : 'var(--text-primary)'} fontWeight="700" fontFamily="monospace">{f.label}</text>
            <text x="22" y={y + 30} fontSize="10" fill="#888" fontFamily="monospace">{f.val}</text>
            {i < frames.length - 1 && (
              <text x="240" y={y + 44} textAnchor="middle" fontSize="10" fill="#666">calls</text>
            )}
          </g>
        );
      })}
      <text x="10" y="228" fontSize="10" fill="#888">retorna: 1 → 2 → 6 → 24</text>
    </svg>
  );
}

/* ── SVG 8: Synthesis Flowchart ── */
function SvgSynthesis() {
  var steps = [
    'Escrever a função (def)',
    'Escolher tipos de parâmetros',
    'Colocar no módulo certo',
    'Importar onde necessário',
  ];
  return (
    <svg width="520" height="220" viewBox="0 0 520 220" style={{ maxWidth: '100%', display: 'block', margin: '0 auto' }}>
      {steps.map(function(s, i) {
        var x = 30 + i * 120;
        return (
          <g key={i}>
            <rect x={x} y="60" width="105" height="60" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
            <text x={x + 52} y="82" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{String(i + 1)}</text>
            <text x={x + 52} y="97" textAnchor="middle" fontSize="9" fill="var(--text-primary)">{s.split(' ').slice(0, 2).join(' ')}</text>
            <text x={x + 52} y="109" textAnchor="middle" fontSize="9" fill="var(--text-primary)">{s.split(' ').slice(2).join(' ')}</text>
            {i < steps.length - 1 && (
              <path d={'M' + (x + 105) + ',85 L' + (x + 118) + ',85'} fill="none" stroke={color} strokeWidth="1.5" markerEnd="url(#arrSY)" />
            )}
          </g>
        );
      })}
      <defs>
        <marker id="arrSY" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      <text x="10" y="145" fontSize="11" fill="#888">Cada passo melhora organização, legibilidade e reutilização do código.</text>
      <rect x="10" y="158" width="500" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke="rgba(74,158,237,0.10)" strokeWidth="1" />
      <text x="260" y="178" textAnchor="middle" fontSize="11" fill="var(--text-primary)" fontWeight="600">Bom código = pequenas funções + nomes claros + docstrings + módulos coesos</text>
      <text x="260" y="196" textAnchor="middle" fontSize="10" fill="#888">DRY (Don't Repeat Yourself) + Single Responsibility Principle</text>
    </svg>
  );
}

export default function PfDS3() {
  return (
    <div style={S.page}>
      <Link to="/pfds" style={S.back}><ArrowLeft size={16} /> Voltar a Programming for Data Science</Link>

      <span style={S.tag}>MÓDULO 03</span>
      <h1 style={S.h1}>Functions, Modules &amp; Namespace</h1>

      {/* ── 1. Definição e Anatomia ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Funções — Definição e Anatomia</h2>
        <p style={S.p}>
          Uma <strong>função</strong> é um bloco de código nomeado que realiza uma operação e pode
          devolver um valor. Em Python define-se com <code>def</code> seguido do nome, parâmetros
          entre parênteses e dois-pontos. O <code>return</code> devolve o resultado; sem ele a
          função devolve <code>None</code> implicitamente.
        </p>
        <div style={S.code}>{`def multiply(a, b):
    """Multiplica dois números e devolve o resultado."""
    output = a * b
    return output

product = multiply(3, 4)   # 12
print(product)

# Sem return → devolve None
def show(x):
    print(x)       # executa side-effect

result = show(5)   # imprime 5
print(result)      # None`}</div>
        <div style={S.svgWrap}>
          <SvgBlackBox />
        </div>
        <p style={S.p}>
          Funções são <strong>first-class objects</strong> em Python: podem ser atribuídas a
          variáveis, passadas como argumentos e devolvidas por outras funções.
        </p>
        <div style={S.code}>{`# Função armazenada numa variável
operacao = multiply
print(operacao(2, 6))   # 12

# Função passada como argumento
def aplicar(func, x, y):
    return func(x, y)

print(aplicar(multiply, 5, 3))   # 15

# Função anónima (lambda)
quadrado = lambda x: x ** 2
print(quadrado(7))   # 49`}</div>
        <div style={S.note}>
          Docstrings ficam na primeira linha do corpo da função. São acedidas via{' '}
          <code>help(func)</code> ou <code>func.__doc__</code> e são a base de ferramentas como
          Sphinx e pydoc.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 2. Parâmetros ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Parâmetros — Posicionais, Keyword, Default, *args, **kwargs</h2>
        <p style={S.p}>
          Python oferece grande flexibilidade na definição de parâmetros. A ordem obrigatória na
          assinatura é: <strong>posicionais</strong>, <strong>*args</strong>,{' '}
          <strong>com default</strong>, <strong>**kwargs</strong>.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Sintaxe</th>
              <th style={S.th}>Comportamento</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Posicional</td><td style={S.td}><code>def f(a, b)</code></td><td style={S.td}>Obrigatório, por ordem</td></tr>
            <tr><td style={S.td}>Keyword</td><td style={S.td}><code>f(b=2, a=1)</code></td><td style={S.td}>Passado por nome, ordem livre</td></tr>
            <tr><td style={S.td}>Default</td><td style={S.td}><code>def f(a, b=10)</code></td><td style={S.td}>Opcional; usa valor padrão se omitido</td></tr>
            <tr><td style={S.td}>*args</td><td style={S.td}><code>def f(*args)</code></td><td style={S.td}>Tuplo com posicionais extras</td></tr>
            <tr><td style={S.td}>**kwargs</td><td style={S.td}><code>def f(**kwargs)</code></td><td style={S.td}>Dicionário com keyword extras</td></tr>
          </tbody>
        </table>
        <div style={S.code}>{`# Combinação completa
def pipeline(data, *transforms, verbose=False, **options):
    """
    data         — posicional obrigatório
    *transforms  — funções de transformação (tuplo)
    verbose      — keyword com default
    **options    — opções extra (dicionário)
    """
    for t in transforms:
        data = t(data)
    if verbose:
        print("resultado:", data)
        print("opções:", options)
    return data

resultado = pipeline(
    [1, 2, 3],
    lambda x: [i * 2 for i in x],   # transforms[0]
    sorted,                           # transforms[1]
    verbose=True,
    reverse=True
)
# resultado: [6, 4, 2]`}</div>
        <div style={S.svgWrap}>
          <SvgParamBinding />
        </div>
        <div style={S.note}>
          Cuidado com defaults mutáveis: <code>def f(lst=[])</code> partilha a mesma lista entre
          todas as chamadas. Use <code>def f(lst=None): if lst is None: lst = []</code> como
          padrão seguro.
        </div>
        <div style={S.code}>{`# Armadilha: default mutável
def adicionar(item, lista=[]):
    lista.append(item)
    return lista

print(adicionar(1))   # [1]
print(adicionar(2))   # [1, 2]  ← surpreendente!

# Correto:
def adicionar_safe(item, lista=None):
    if lista is None:
        lista = []
    lista.append(item)
    return lista`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 3. Scope LEGB ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Scope — Regra LEGB</h2>
        <p style={S.p}>
          Quando o interpretador encontra um nome, percorre quatro níveis pela ordem{' '}
          <strong>L → E → G → B</strong> até o encontrar. Se não existir em nenhum nível,
          lança <code>NameError</code>.
        </p>
        <div style={S.svgWrap}>
          <SvgLEGB />
        </div>
        <div style={S.code}>{`x = "global"

def outer():
    x = "enclosing"
    def inner():
        x = "local"
        print(x)   # "local"  — encontrou no nível L
    inner()
    print(x)       # "enclosing" — encontrou no nível E

outer()
print(x)           # "global" — encontrou no nível G
print(len)         # <built-in function len> — nível B`}</div>
        <p style={S.p}>
          Para <em>modificar</em> (não apenas ler) uma variável de um scope superior, é necessário
          declará-la explicitamente com <code>global</code> ou <code>nonlocal</code>.
        </p>
        <div style={S.code}>{`contador = 0

def incrementar():
    global contador   # sem isto, cria variável local
    contador += 1

incrementar()
incrementar()
print(contador)   # 2

# nonlocal — modifica enclosing scope
def make_counter():
    n = 0
    def inc():
        nonlocal n
        n += 1
        return n
    return inc

c = make_counter()
print(c(), c(), c())   # 1 2 3`}</div>
        <p style={S.p}>
          <strong>Bug clássico com loops e closures:</strong> capturar a variável do loop por
          referência, não por valor.
        </p>
        <div style={S.code}>{`# Bug — todas as funções "veem" i=3 no final
funcs = []
for i in range(4):
    funcs.append(lambda: i)

print([f() for f in funcs])   # [3, 3, 3, 3]

# Correto — capturar por valor com default arg
funcs = []
for i in range(4):
    funcs.append(lambda i=i: i)

print([f() for f in funcs])   # [0, 1, 2, 3]`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 4. Closures ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Closures</h2>
        <p style={S.p}>
          Uma <strong>closure</strong> é uma função que recorda o estado do scope envolvente mesmo
          depois de esse scope ter terminado. O Python armazena as variáveis capturadas em{' '}
          <em>cells</em> acessíveis via <code>func.__closure__</code>.
        </p>
        <div style={S.svgWrap}>
          <SvgClosure />
        </div>
        <div style={S.code}>{`# Fábrica de contadores independentes
def make_counter(start=0):
    count = start
    def increment(step=1):
        nonlocal count
        count += step
        return count
    return increment

c1 = make_counter()
c2 = make_counter(10)

print(c1())    # 1
print(c1())    # 2
print(c2())    # 11  — independente de c1
print(c2(5))   # 16`}</div>
        <p style={S.p}>
          Closures são a base de <strong>decoradores</strong> e <strong>memoization</strong>:
        </p>
        <div style={S.code}>{`# Memoization manual com closure
def memoize(func):
    cache = {}
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    return wrapper

@memoize
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(35))   # rápido — sem recalcular subproblemas

# Equivalente a: fib = memoize(fib)`}</div>
        <div style={S.note}>
          A biblioteca padrão oferece <code>functools.lru_cache</code> e <code>functools.cache</code>{' '}
          que implementam memoization com menos código.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 5. Módulos e Packages ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Módulos e Packages</h2>
        <p style={S.p}>
          Um <strong>módulo</strong> é qualquer ficheiro <code>.py</code>. Um{' '}
          <strong>package</strong> é uma pasta que contém um <code>__init__.py</code> e agrupa
          módulos relacionados. O sistema de imports resolve nomes percorrendo <code>sys.path</code>.
        </p>
        <div style={S.svgWrap}>
          <SvgModulePath />
        </div>
        <div style={S.code}>{`# Três formas de importar
import math                     # acesso via math.sqrt
from math import sqrt, pi       # acesso direto
import numpy as np              # alias convencional

# Criar o próprio módulo: ficheiro utils.py
def dobrar(x):
    return x * 2

VERSAO = "1.0"

# Noutro ficheiro:
from utils import dobrar, VERSAO
print(dobrar(5))    # 10

# Import dinâmico (avançado)
import importlib
mod = importlib.import_module("utils")
print(mod.VERSAO)`}</div>
        <p style={S.p}>
          O padrão <code>__name__ == '__main__'</code> permite que um módulo seja executado como
          script mas também importado sem executar o bloco principal:
        </p>
        <div style={S.code}>{`# utils.py
def dobrar(x):
    return x * 2

if __name__ == '__main__':
    # Só corre quando executado diretamente:
    # python utils.py
    print(dobrar(21))   # 42
    # Não corre quando importado noutro ficheiro`}</div>
        <div style={S.highlight}>
          <strong>Estrutura de package típica:</strong>
          <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', marginTop: '0.5rem', lineHeight: 1.7 }}>
            {`meu_projeto/
├── __init__.py       ← torna a pasta num package
├── core.py
├── utils.py
└── data/
    ├── __init__.py
    └── loader.py`}
          </div>
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 6. Standard Library ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Python Standard Library</h2>
        <p style={S.p}>
          Python inclui uma biblioteca padrão abrangente — <em>batteries included</em>. Os módulos
          mais relevantes para Data Science:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Módulo</th>
              <th style={S.th}>Funções/Classes chave</th>
              <th style={S.th}>Uso típico</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}><code>os</code></td><td style={S.td}><code>listdir, getcwd, makedirs, path.join</code></td><td style={S.td}>Navegar e manipular o sistema de ficheiros</td></tr>
            <tr><td style={S.td}><code>sys</code></td><td style={S.td}><code>argv, path, exit, setrecursionlimit</code></td><td style={S.td}>Interagir com o interpretador Python</td></tr>
            <tr><td style={S.td}><code>re</code></td><td style={S.td}><code>search, match, findall, sub, compile</code></td><td style={S.td}>Processar texto com expressões regulares</td></tr>
            <tr><td style={S.td}><code>datetime</code></td><td style={S.td}><code>datetime, date, timedelta, strftime</code></td><td style={S.td}>Manipulação de datas e tempos</td></tr>
            <tr><td style={S.td}><code>collections</code></td><td style={S.td}><code>Counter, defaultdict, deque, namedtuple, OrderedDict</code></td><td style={S.td}>Estruturas de dados especializadas</td></tr>
            <tr><td style={S.td}><code>itertools</code></td><td style={S.td}><code>chain, product, combinations, permutations, islice</code></td><td style={S.td}>Iteradores eficientes e combinatória</td></tr>
            <tr><td style={S.td}><code>pathlib</code></td><td style={S.td}><code>Path, Path.glob, Path.read_text</code></td><td style={S.td}>API orientada a objetos para caminhos</td></tr>
            <tr><td style={S.td}><code>functools</code></td><td style={S.td}><code>lru_cache, partial, reduce, wraps</code></td><td style={S.td}>Utilitários para funções de ordem superior</td></tr>
          </tbody>
        </table>
        <div style={S.code}>{`from collections import Counter, defaultdict, deque, namedtuple
from datetime import datetime, timedelta
import os
from pathlib import Path

# Counter — frequências
palavras = ["python", "dados", "python", "ml", "dados", "python"]
c = Counter(palavras)
print(c.most_common(2))   # [('python', 3), ('dados', 2)]

# defaultdict — sem KeyError
dd = defaultdict(list)
dd["frutas"].append("maçã")
dd["frutas"].append("pera")
print(dd["legumes"])   # [] — criado automaticamente

# deque — fila/pilha eficiente O(1) nas extremidades
fila = deque([1, 2, 3], maxlen=5)
fila.appendleft(0)
fila.append(4)
print(fila)   # deque([0, 1, 2, 3, 4], maxlen=5)

# namedtuple — estrutura imutável com nomes
Ponto = namedtuple("Ponto", ["x", "y", "z"])
p = Ponto(1.0, 2.5, 0.0)
print(p.x, p.z)   # 1.0 0.0

# pathlib — caminhos como objetos
base = Path("dados")
for ficheiro in base.glob("*.csv"):
    print(ficheiro.name)

# datetime
hoje = datetime.now()
prazo = hoje + timedelta(days=7)
print(prazo.strftime("%d/%m/%Y"))`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 7. Regex ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Expressões Regulares com re</h2>
        <p style={S.p}>
          O módulo <code>re</code> permite procurar, extrair e substituir padrões em strings.
          Usa-se quase sempre <em>raw strings</em> (<code>r"..."</code>) para evitar conflitos com{' '}
          <code>\n</code>, <code>\t</code>, etc.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Padrão</th>
              <th style={S.th}>Significado</th>
              <th style={S.th}>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}><code>.</code></td><td style={S.td}>Qualquer caractere (exceto newline)</td><td style={S.td}><code>a.c</code> casa "abc", "axc"</td></tr>
            <tr><td style={S.td}><code>*</code></td><td style={S.td}>0 ou mais repetições</td><td style={S.td}><code>ab*</code> casa "a", "ab", "abb"</td></tr>
            <tr><td style={S.td}><code>+</code></td><td style={S.td}>1 ou mais repetições</td><td style={S.td}><code>ab+</code> casa "ab", "abb" mas não "a"</td></tr>
            <tr><td style={S.td}><code>?</code></td><td style={S.td}>0 ou 1 repetição (opcional)</td><td style={S.td}><code>colou?r</code> casa "color" e "colour"</td></tr>
            <tr><td style={S.td}><code>^</code></td><td style={S.td}>Início da string</td><td style={S.td}><code>^Olá</code></td></tr>
            <tr><td style={S.td}><code>$</code></td><td style={S.td}>Fim da string</td><td style={S.td}><code>\.py$</code></td></tr>
            <tr><td style={S.td}><code>[]</code></td><td style={S.td}>Conjunto de caracteres</td><td style={S.td}><code>[aeiou]</code>, <code>[0-9]</code></td></tr>
            <tr><td style={S.td}><code>()</code></td><td style={S.td}>Grupo de captura</td><td style={S.td}><code>(\d+)-(\d+)</code></td></tr>
            <tr><td style={S.td}><code>\d</code></td><td style={S.td}>Dígito [0-9]</td><td style={S.td}><code>\d{4}</code> — 4 dígitos</td></tr>
            <tr><td style={S.td}><code>\w</code></td><td style={S.td}>Letra, dígito ou _ </td><td style={S.td}><code>\w+</code> — palavra</td></tr>
            <tr><td style={S.td}><code>\s</code></td><td style={S.td}>Espaço em branco</td><td style={S.td}><code>\s+</code> — um ou mais espaços</td></tr>
          </tbody>
        </table>
        <div style={S.svgWrap}>
          <SvgRegexMatch />
        </div>
        <div style={S.code}>{`import re

texto = "email: ana@mdsaa.pt, rui@ds.pt"

# re.findall — devolve lista de matches
emails = re.findall(r"[\w.]+@[\w.]+", texto)
print(emails)   # ['ana@mdsaa.pt', 'rui@ds.pt']

# re.search — primeiro match (objeto Match)
m = re.search(r"(\w+)@(\w+)\.(\w+)", texto)
if m:
    print(m.group(0))   # 'ana@mdsaa.pt'
    print(m.group(1))   # 'ana'
    print(m.group(2))   # 'mdsaa'

# re.sub — substituição
limpo = re.sub(r"\s+", " ", "texto   com   espaços")
print(limpo)   # 'texto com espaços'

# re.compile — reutilizar padrão compilado (mais rápido)
padrao = re.compile(r"\d{4}-\d{2}-\d{2}")
datas = padrao.findall("reuniao 2024-01-15 e entrega 2024-02-28")
print(datas)   # ['2024-01-15', '2024-02-28']`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 8. Recursão ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Funções Recursivas</h2>
        <p style={S.p}>
          Uma função recursiva chama-se a si própria. Toda a recursão precisa de um{' '}
          <strong>caso base</strong> (que termina) e um <strong>caso recursivo</strong> (que
          simplifica o problema). Sem caso base, a função corre até atingir o limite de recursão.
        </p>
        <div style={S.code}>{`def factorial(n):
    # Caso base
    if n <= 1:
        return 1
    # Caso recursivo
    return n * factorial(n - 1)

print(factorial(4))   # 24
print(factorial(0))   # 1`}</div>
        <div style={S.svgWrap}>
          <SvgCallStack />
        </div>
        <p style={S.p}>
          Python <strong>não tem</strong> Tail Call Optimisation (TCO). Cada chamada recursiva
          empilha um frame na call stack. O limite padrão é 1000 frames.
        </p>
        <div style={S.code}>{`import sys

print(sys.getrecursionlimit())   # 1000

# Aumentar limite (usar com cautela)
sys.setrecursionlimit(5000)

# Alternativa iterativa — sem risco de stack overflow
def factorial_iter(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result`}</div>
        <div style={S.note}>
          Para recursão profunda (árvores, grafos), prefira a versão iterativa com uma pilha
          explícita (<code>deque</code>) ou o módulo <code>functools.lru_cache</code> para
          programação dinâmica.
        </div>
        <div style={S.code}>{`# Fibonacci recursivo com memoization
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

print([fib(i) for i in range(10)])
# [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 9. Typing ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Type Hints (Tipagem Estática Opcional)</h2>
        <p style={S.p}>
          Desde o Python 3.5, é possível anotar tipos nos parâmetros e retorno das funções. Não
          são aplicados em runtime, mas melhoram a legibilidade, ajudam IDEs (autocompletion,
          refactoring) e permitem verificação estática com <code>mypy</code>.
        </p>
        <div style={S.code}>{`# Anotações básicas
def somar(a: int, b: int) -> int:
    return a + b

def saudacao(nome: str, vezes: int = 1) -> str:
    return (nome + "! ") * vezes

# Python executa sem erro mesmo com tipo errado:
print(somar("3", "4"))   # "34" — sem erro de runtime!`}</div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Sintaxe Python 3.9+</th>
              <th style={S.th}>Sintaxe antiga (3.5-3.8)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Lista de inteiros</td><td style={S.td}><code>list[int]</code></td><td style={S.td}><code>List[int]</code> (from typing)</td></tr>
            <tr><td style={S.td}>Dicionário str para float</td><td style={S.td}><code>dict[str, float]</code></td><td style={S.td}><code>Dict[str, float]</code></td></tr>
            <tr><td style={S.td}>Opcional (None ou T)</td><td style={S.td}><code>T | None</code></td><td style={S.td}><code>Optional[T]</code></td></tr>
            <tr><td style={S.td}>Tuplo fixo</td><td style={S.td}><code>tuple[int, str]</code></td><td style={S.td}><code>Tuple[int, str]</code></td></tr>
            <tr><td style={S.td}>Qualquer tipo</td><td style={S.td}><code>Any</code></td><td style={S.td}><code>Any</code> (from typing)</td></tr>
          </tbody>
        </table>
        <div style={S.code}>{`from typing import Optional, List, Dict

def encontrar(lst: List[int], alvo: int) -> Optional[int]:
    """Devolve o índice de alvo em lst, ou None se não encontrar."""
    for i, v in enumerate(lst):
        if v == alvo:
            return i
    return None

def contagens(texto: str) -> Dict[str, int]:
    return {palavra: texto.count(palavra)
            for palavra in texto.split()}

# Verificação com mypy (linha de comando):
# mypy meu_script.py`}</div>
        <div style={S.note}>
          Em projetos de Data Science, é comum anotar apenas as funções públicas (API de um módulo)
          e deixar o código interno sem anotações para não criar ruído.
        </div>
      </section>


</div>
  );
}
