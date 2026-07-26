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
  svgWrap: { background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 10, padding: '1.25rem', margin: '1.25rem 0', overflowX: 'auto' },
};

/* ── SVG 1: Pure Function Box ── */
function PureFunctionSVG() {
  return (
    <svg width="560" height="170" viewBox="0 0 560 170" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      {/* Input A */}
      <rect x="10" y="55" width="90" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="55" y="76" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">INPUT</text>
      <text x="55" y="93" textAnchor="middle" fontSize="13" fill="var(--text-primary)" fontWeight="600">x = 5</text>

      {/* Arrow 1 */}
      <line x1="100" y1="80" x2="148" y2="80" stroke="#4a9eed" strokeWidth="1.5" />
      <polygon points="148,75 158,80 148,85" fill="#4a9eed" />

      {/* Function box */}
      <rect x="158" y="30" width="144" height="100" rx="10" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
      <text x="230" y="55" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">FUNÇÃO PURA</text>
      <text x="230" y="76" textAnchor="middle" fontSize="14" fill="var(--text-primary)" fontWeight="700">f(x) = x * 2</text>
      <text x="230" y="96" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">sem side effects</text>
      <text x="230" y="112" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">determinística</text>

      {/* Arrow 2 */}
      <line x1="302" y1="80" x2="350" y2="80" stroke="#4a9eed" strokeWidth="1.5" />
      <polygon points="350,75 360,80 350,85" fill="#4a9eed" />

      {/* Output */}
      <rect x="360" y="55" width="90" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="405" y="76" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">OUTPUT</text>
      <text x="405" y="93" textAnchor="middle" fontSize="13" fill="var(--text-primary)" fontWeight="600">10</text>

      {/* Same input label */}
      <text x="55" y="130" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">chamada 1: x=5</text>
      <text x="55" y="145" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">chamada 2: x=5</text>
      <text x="405" y="130" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">resultado 1: 10</text>
      <text x="405" y="145" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">resultado 2: 10</text>

      {/* Always label */}
      <text x="405" y="160" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="600">sempre igual!</text>
    </svg>
  );
}

/* ── SVG 2: Lambda in Pipeline ── */
function LambdaPipelineSVG() {
  const boxes = [
    { x: 10, label: '[1,2,3,4,5]', sub: 'lista original' },
    { x: 160, label: 'lambda x:', sub: 'x * x' },
    { x: 310, label: 'map()', sub: 'aplica lambda' },
    { x: 460, label: '[1,4,9,16,25]', sub: 'resultado' },
  ];
  return (
    <svg width="600" height="110" viewBox="0 0 600 110" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y="25" width="120" height="55" rx="8"
            fill={i === 1 ? 'rgba(74,158,237,0.10)' : 'rgba(74,158,237,0.10)'}
            stroke="#4a9eed" strokeWidth={i === 1 ? 2 : 1.5} />
          <text x={b.x + 60} y="48" textAnchor="middle" fontSize="11" fill="var(--text-primary)" fontWeight="700">{b.label}</text>
          <text x={b.x + 60} y="65" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{b.sub}</text>
          {i < boxes.length - 1 && (
            <>
              <line x1={b.x + 120} y1="52" x2={b.x + 142} y2="52" stroke="#4a9eed" strokeWidth="1.5" />
              <polygon points={`${b.x + 142},47 ${b.x + 150},52 ${b.x + 142},57`} fill="#4a9eed" />
            </>
          )}
        </g>
      ))}
      <text x="290" y="102" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">lambda como argumento de map()</text>
    </svg>
  );
}

/* ── SVG 3: map/filter/reduce pipeline ── */
function MapFilterReduceSVG() {
  return (
    <svg width="630" height="140" viewBox="0 0 630 140" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      {/* Source list */}
      <rect x="5" y="45" width="95" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="52" y="66" textAnchor="middle" fontSize="10" fill="#4a9eed" fontWeight="700">LISTA</text>
      <text x="52" y="82" textAnchor="middle" fontSize="10" fill="var(--text-primary)">[1..10]</text>

      {/* Arrow */}
      <line x1="100" y1="70" x2="130" y2="70" stroke="#4a9eed" strokeWidth="1.5" />
      <polygon points="130,65 140,70 130,75" fill="#4a9eed" />

      {/* map box */}
      <rect x="140" y="30" width="105" height="80" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
      <text x="192" y="55" textAnchor="middle" fontSize="12" fill="#4a9eed" fontWeight="700">map()</text>
      <text x="192" y="72" textAnchor="middle" fontSize="10" fill="var(--text-primary)">transforma</text>
      <text x="192" y="87" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">cada elemento</text>
      <text x="192" y="102" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">x → x**2</text>

      <line x1="245" y1="70" x2="275" y2="70" stroke="#4a9eed" strokeWidth="1.5" />
      <polygon points="275,65 285,70 275,75" fill="#4a9eed" />

      {/* filter box */}
      <rect x="285" y="30" width="105" height="80" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
      <text x="337" y="55" textAnchor="middle" fontSize="12" fill="#4a9eed" fontWeight="700">filter()</text>
      <text x="337" y="72" textAnchor="middle" fontSize="10" fill="var(--text-primary)">selecciona</text>
      <text x="337" y="87" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">predicate True</text>
      <text x="337" y="102" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">x % 2 == 0</text>

      <line x1="390" y1="70" x2="420" y2="70" stroke="#4a9eed" strokeWidth="1.5" />
      <polygon points="420,65 430,70 420,75" fill="#4a9eed" />

      {/* reduce box */}
      <rect x="430" y="30" width="105" height="80" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
      <text x="482" y="55" textAnchor="middle" fontSize="12" fill="#4a9eed" fontWeight="700">reduce()</text>
      <text x="482" y="72" textAnchor="middle" fontSize="10" fill="var(--text-primary)">agrega</text>
      <text x="482" y="87" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">a um valor</text>
      <text x="482" y="102" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">a + b</text>

      <line x1="535" y1="70" x2="565" y2="70" stroke="#4a9eed" strokeWidth="1.5" />
      <polygon points="565,65 575,70 565,75" fill="#4a9eed" />

      {/* Result */}
      <text x="580" y="74" textAnchor="start" fontSize="14" fill="#4a9eed" fontWeight="700">220</text>

      <text x="300" y="128" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">cada passo devolve um iterador lazy — só materializa com list()</text>
    </svg>
  );
}

/* ── SVG 4: Closure frame diagram ── */
function ClosureSVG() {
  return (
    <svg width="520" height="190" viewBox="0 0 520 190" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      {/* Outer scope */}
      <rect x="10" y="10" width="200" height="160" rx="10" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="6,3" />
      <text x="110" y="30" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">scope: multiplicador()</text>
      <rect x="30" y="45" width="160" height="35" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1" />
      <text x="110" y="61" textAnchor="middle" fontSize="11" fill="var(--text-primary)" fontWeight="600">fator = 2</text>
      <text x="110" y="74" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">variável livre capturada</text>

      {/* Inner scope */}
      <rect x="30" y="100" width="160" height="55" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="110" y="118" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">closure: aplicar()</text>
      <text x="110" y="134" textAnchor="middle" fontSize="11" fill="var(--text-primary)">return numero * fator</text>
      <text x="110" y="148" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">__closure__[0] → fator</text>

      {/* Arrow from inner to outer variable */}
      <line x1="110" y1="100" x2="110" y2="88" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,2" />
      <polygon points="105,88 110,80 115,88" fill="#4a9eed" />

      {/* After return */}
      <rect x="260" y="60" width="240" height="100" rx="10" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="380" y="82" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">após retorno de multiplicador()</text>
      <text x="380" y="100" textAnchor="middle" fontSize="12" fill="var(--text-primary)" fontWeight="600">dobrar = aplicar</text>
      <text x="380" y="118" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">fator ainda acessível via</text>
      <text x="380" y="133" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">dobrar.__closure__[0]</text>
      <text x="380" y="150" textAnchor="middle" fontSize="11" fill="var(--text-primary)">dobrar(5) → 10</text>

      <line x1="210" y1="110" x2="252" y2="110" stroke="#4a9eed" strokeWidth="1.5" />
      <polygon points="252,105 260,110 252,115" fill="#4a9eed" />
    </svg>
  );
}

/* ── SVG 5: Decorator wrapper ── */
function DecoratorSVG() {
  return (
    <svg width="600" height="180" viewBox="0 0 600 180" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      {/* Input */}
      <rect x="5" y="70" width="75" height="40" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="42" y="85" textAnchor="middle" fontSize="10" fill="#4a9eed" fontWeight="700">INPUT</text>
      <text x="42" y="100" textAnchor="middle" fontSize="10" fill="var(--text-primary)">*args</text>

      <line x1="80" y1="90" x2="108" y2="90" stroke="#4a9eed" strokeWidth="1.5" />
      <polygon points="108,85 118,90 108,95" fill="#4a9eed" />

      {/* Wrapper outer */}
      <rect x="118" y="15" width="370" height="150" rx="10" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" strokeDasharray="7,3" />
      <text x="300" y="34" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">wrapper() — camada do decorator</text>

      {/* Pre logic */}
      <rect x="135" y="50" width="90" height="40" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="180" y="68" textAnchor="middle" fontSize="10" fill="var(--text-primary)" fontWeight="600">antes</text>
      <text x="180" y="82" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">logging, timer...</text>

      <line x1="225" y1="70" x2="248" y2="70" stroke="#4a9eed" strokeWidth="1.5" />
      <polygon points="248,65 258,70 248,75" fill="#4a9eed" />

      {/* Original fn */}
      <rect x="258" y="50" width="100" height="40" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
      <text x="308" y="68" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">func()</text>
      <text x="308" y="82" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">função original</text>

      <line x1="358" y1="70" x2="380" y2="70" stroke="#4a9eed" strokeWidth="1.5" />
      <polygon points="380,65 390,70 380,75" fill="#4a9eed" />

      {/* Post logic */}
      <rect x="390" y="50" width="90" height="40" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="435" y="68" textAnchor="middle" fontSize="10" fill="var(--text-primary)" fontWeight="600">depois</text>
      <text x="435" y="82" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">métricas, cache...</text>

      {/* wraps note */}
      <text x="300" y="148" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">@functools.wraps preserva __name__ e __doc__</text>

      {/* Output */}
      <line x1="480" y1="90" x2="495" y2="90" stroke="#4a9eed" strokeWidth="1.5" />
      <polygon points="495,85 505,90 495,95" fill="#4a9eed" />

      <rect x="505" y="70" width="65" height="40" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="537" y="85" textAnchor="middle" fontSize="10" fill="#4a9eed" fontWeight="700">OUTPUT</text>
      <text x="537" y="100" textAnchor="middle" fontSize="10" fill="var(--text-primary)">result</text>
    </svg>
  );
}

/* ── SVG 6: lru_cache performance bar chart ── */
function CacheBarSVG() {
  const bars = [
    { label: 'sem cache fib(35)', value: 95, color: '#4a9eed' },
    { label: 'com @lru_cache fib(35)', value: 4, color: '#4a9eed' },
  ];
  const maxVal = 100;
  const barH = 28;
  const gap = 18;
  const leftW = 170;
  const chartW = 320;
  return (
    <svg width="540" height="130" viewBox="0 0 540 130" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x="10" y="18" fontSize="11" fill="var(--text-secondary)" fontWeight="600">Tempo relativo — fib(35)</text>
      {bars.map((b, i) => {
        const y = 32 + i * (barH + gap);
        const w = (b.value / maxVal) * chartW;
        return (
          <g key={i}>
            <text x={leftW - 6} y={y + barH / 2 + 4} textAnchor="end" fontSize="10" fill="var(--text-primary)">{b.label}</text>
            <rect x={leftW} y={y} width={w} height={barH} rx="4" fill={b.color} opacity="0.85" />
            <text x={leftW + w + 6} y={y + barH / 2 + 4} textAnchor="start" fontSize="10" fill="var(--text-primary)" fontWeight="600">{b.value}x</text>
          </g>
        );
      })}
      <text x="270" y="122" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">@lru_cache evita recalcular subproblemas — O(n) em vez de O(2^n)</text>
    </svg>
  );
}

/* ── SVG 7: Itertools lazy pipeline ── */
function ItertoolsSVG() {
  const stages = [
    { label: 'count(1)', sub: 'infinito' },
    { label: 'islice(n)', sub: 'limita' },
    { label: 'filter()', sub: 'predicate' },
    { label: 'map()', sub: 'transforma' },
  ];
  return (
    <svg width="540" height="130" viewBox="0 0 540 130" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x="270" y="16" textAnchor="middle" fontSize="11" fill="var(--text-secondary)" fontWeight="600">Pipeline lazy — nada é calculado até ser consumido</text>
      {stages.map((s, i) => {
        const x = 20 + i * 128;
        return (
          <g key={i}>
            <rect x={x} y="28" width="108" height="60" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
            <text x={x + 54} y="52" textAnchor="middle" fontSize="12" fill="#4a9eed" fontWeight="700">{s.label}</text>
            <text x={x + 54} y="70" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{s.sub}</text>
            {i < stages.length - 1 && (
              <>
                <line x1={x + 108} y1="58" x2={x + 120} y2="58" stroke="#4a9eed" strokeWidth="1.5" />
                <polygon points={`${x + 120},53 ${x + 128},58 ${x + 120},63`} fill="#4a9eed" />
              </>
            )}
          </g>
        );
      })}
      <text x="270" y="112" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">valores só produzidos quando list() / for loop / next() consome o iterador</text>
    </svg>
  );
}

/* ── SVG 8: Generator vs List ── */
function GeneratorSVG() {
  return (
    <svg width="520" height="190" viewBox="0 0 520 190" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      {/* List side */}
      <rect x="10" y="15" width="225" height="155" rx="10" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="122" y="36" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">list — tudo em memória</text>
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={25 + i * 38} y="50" width="30" height="30" rx="4" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1" />
      ))}
      {[0,1,2,3,4].map(i => (
        <text key={i} x={40 + i * 38} y="70" textAnchor="middle" fontSize="11" fill="var(--text-primary)" fontWeight="600">{i * i}</text>
      ))}
      <text x="122" y="105" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">todos os valores criados</text>
      <text x="122" y="120" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">imediatamente</text>
      <text x="122" y="140" textAnchor="middle" fontSize="10" fill="#4a9eed">memória: O(n)</text>
      <text x="122" y="158" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">[x*x for x in range(n)]</text>

      {/* vs */}
      <text x="260" y="100" textAnchor="middle" fontSize="14" fill="var(--text-secondary)" fontWeight="700">vs</text>

      {/* Generator side */}
      <rect x="285" y="15" width="225" height="155" rx="10" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="397" y="36" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">generator — lazy</text>
      <rect x="330" y="50" width="130" height="30" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="395" y="70" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="600">yield x*x</text>
      <text x="397" y="105" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">produz um valor</text>
      <text x="397" y="120" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">de cada vez</text>
      <text x="397" y="140" textAnchor="middle" fontSize="10" fill="#4a9eed">memória: O(1)</text>
      <text x="397" y="158" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">(x*x for x in range(n))</text>
    </svg>
  );
}

/* ── SVG 9: Partial / Currying chain ── */
function CurrySVG() {
  return (
    <svg width="500" height="120" viewBox="0 0 500 120" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x="250" y="16" textAnchor="middle" fontSize="11" fill="var(--text-secondary)" fontWeight="600">Currying — cada chamada fixa um argumento</text>

      <rect x="10" y="30" width="80" height="55" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="50" y="52" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">add(a)</text>
      <text x="50" y="68" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">a=3</text>
      <text x="50" y="82" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">retorna fn</text>

      <line x1="90" y1="57" x2="118" y2="57" stroke="#4a9eed" strokeWidth="1.5" />
      <polygon points="118,52 128,57 118,62" fill="#4a9eed" />

      <rect x="128" y="30" width="90" height="55" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="173" y="52" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">add(3)(b)</text>
      <text x="173" y="68" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">b=4</text>
      <text x="173" y="82" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">retorna fn</text>

      <line x1="218" y1="57" x2="246" y2="57" stroke="#4a9eed" strokeWidth="1.5" />
      <polygon points="246,52 256,57 246,62" fill="#4a9eed" />

      <rect x="256" y="30" width="110" height="55" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
      <text x="311" y="52" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">add(3)(4)(c)</text>
      <text x="311" y="68" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">c=5</text>
      <text x="311" y="82" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">retorna valor</text>

      <line x1="366" y1="57" x2="394" y2="57" stroke="#4a9eed" strokeWidth="1.5" />
      <polygon points="394,52 404,57 394,62" fill="#4a9eed" />

      <rect x="404" y="40" width="80" height="35" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="444" y="63" textAnchor="middle" fontSize="16" fill="#4a9eed" fontWeight="700">12</text>

      <text x="250" y="108" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">partial application: fixa alguns argumentos agora, passa o resto depois</text>
    </svg>
  );
}

/* ── SVG 10: FP vs OOP vs Procedural comparison matrix ── */
function ComparisonSVG() {
  const rows = [
    { dim: 'Estado', fp: 'imutável', oop: 'encapsulado', proc: 'global/local' },
    { dim: 'Testabilidade', fp: 'muito alta', oop: 'média', proc: 'baixa' },
    { dim: 'Legibilidade', fp: 'alta (pipeline)', oop: 'alta (modelo)', proc: 'média' },
    { dim: 'Paralelismo', fp: 'trivial', oop: 'cuidado locks', proc: 'difícil' },
    { dim: 'Python idiom', fp: 'map/filter/gen', oop: 'class/method', proc: 'for/if/while' },
  ];
  const cols = ['Dimensão', 'Funcional', 'OOP', 'Procedural'];
  const colW = [120, 130, 130, 130];
  const totalW = colW.reduce((a, b) => a + b, 0) + 20;
  return (
    <svg width={totalW} height={32 + rows.length * 36 + 20} viewBox={`0 0 ${totalW} ${32 + rows.length * 36 + 20}`} style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      {/* Header */}
      {cols.map((c, ci) => {
        const x = 10 + colW.slice(0, ci).reduce((a, b) => a + b, 0);
        return (
          <g key={ci}>
            <rect x={x} y="8" width={colW[ci] - 4} height="26" rx="4"
              fill={ci === 1 ? 'rgba(74,158,237,0.10)' : 'rgba(74,158,237,0.10)'}
              stroke="#4a9eed" strokeWidth="1" />
            <text x={x + (colW[ci] - 4) / 2} y="26" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">{c}</text>
          </g>
        );
      })}
      {rows.map((r, ri) => {
        const y = 38 + ri * 36;
        const vals = [r.dim, r.fp, r.oop, r.proc];
        return vals.map((v, ci) => {
          const x = 10 + colW.slice(0, ci).reduce((a, b) => a + b, 0);
          return (
            <g key={ci}>
              <rect x={x} y={y} width={colW[ci] - 4} height="28" rx="4"
                fill={ci === 1 ? 'rgba(74,158,237,0.10)' : ri % 2 === 0 ? 'rgba(74,158,237,0.10)' : 'transparent'}
                stroke="rgba(74,158,237,0.10)" strokeWidth="1" />
              <text x={x + (colW[ci] - 4) / 2} y={y + 18} textAnchor="middle" fontSize="10"
                fill={ci === 0 ? '#4a9eed' : 'var(--text-primary)'} fontWeight={ci === 0 ? '600' : '400'}>{v}</text>
            </g>
          );
        });
      })}
    </svg>
  );
}

/* ── SVG 11: Final synthesis pipeline ── */
function SynthesisPipelineSVG() {
  const stages = [
    { label: 'raw data', sub: 'lista bruta', icon: '[ ]' },
    { label: 'map()', sub: 'transforma', icon: 'f(x)' },
    { label: 'filter()', sub: 'selecciona', icon: '?' },
    { label: 'reduce()', sub: 'agrega', icon: '∑' },
    { label: 'resultado', sub: 'valor final', icon: '✓' },
  ];
  return (
    <svg width="580" height="120" viewBox="0 0 580 120" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      {stages.map((s, i) => {
        const x = 10 + i * 112;
        return (
          <g key={i}>
            <rect x={x} y="20" width="100" height="70" rx="8"
              fill={i === 0 || i === 4 ? 'rgba(74,158,237,0.10)' : 'rgba(74,158,237,0.10)'}
              stroke="#4a9eed" strokeWidth={i === 0 || i === 4 ? 1.5 : 2} />
            <text x={x + 50} y="42" textAnchor="middle" fontSize="18" fill="#4a9eed">{s.icon}</text>
            <text x={x + 50} y="62" textAnchor="middle" fontSize="11" fill="var(--text-primary)" fontWeight="700">{s.label}</text>
            <text x={x + 50} y="78" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{s.sub}</text>
            {i < stages.length - 1 && (
              <>
                <line x1={x + 100} y1="55" x2={x + 110} y2="55" stroke="#4a9eed" strokeWidth="1.5" />
                <polygon points={`${x + 110},50 ${x + 120},55 ${x + 110},60`} fill="#4a9eed" />
              </>
            )}
          </g>
        );
      })}
      <text x="290" y="108" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">pipeline de transformação funcional — cada passo é uma função pura</text>
    </svg>
  );
}

export default function PfDS5() {
  return (
    <div style={S.page}>
      <Link to="/pfds" style={S.back}><ArrowLeft size={16} /> Voltar a Programming for Data Science</Link>

      <span style={S.tag}>MÓDULO 06</span>
      <h1 style={S.h1}>Functional Programming em Python</h1>

      {/* ── 1. Princípios ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Princípios da Programação Funcional</h2>
        <p style={S.p}>
          A programação funcional assenta em três pilares: <strong>funções puras</strong>,
          <strong> imutabilidade</strong> e <strong>funções de primeira classe</strong>.
          Uma função pura tem duas propriedades: dado o mesmo input produz sempre o mesmo output
          (determinismo), e não tem side effects — não modifica estado externo, não faz I/O, não
          lança excepções inesperadas.
        </p>
        <div style={S.svgWrap}>
          <PureFunctionSVG />
        </div>
        <div style={S.code}>{`# Impura — side effect (modifica argumento) e resultado não determinístico
import random
dados_globais = []

def adicionar_impuro(lista, valor):
    lista.append(valor)          # altera a lista original!
    dados_globais.append(valor)  # altera estado global!
    return lista

# Pura — cria novo objecto, sem side effects
def adicionar_puro(lista, valor):
    return lista + [valor]       # não altera a original

original = [1, 2, 3]
nova = adicionar_puro(original, 4)
print(original)   # [1, 2, 3]  — inalterado
print(nova)       # [1, 2, 3, 4]`}</div>
        <p style={S.p}>
          A <strong>imutabilidade</strong> significa preferir criar novos objectos em vez de
          modificar os existentes. Python oferece <code>tuple</code>, <code>frozenset</code> e
          tipos imutáveis da biblioteca <code>dataclasses(frozen=True)</code>.
        </p>
        <div style={S.highlight}>
          <strong>Porquê funções puras?</strong> São mais fáceis de testar (sem mocks de estado
          global), paralelizáveis sem locks, e debuggáveis porque o output só depende do input.
          Em pipelines de dados, cada passo de transformação puro garante reproducibilidade.
        </div>
        <p style={S.p}>
          As <strong>funções de primeira classe</strong> em Python significam que funções são
          objectos como qualquer outro: podem ser atribuídas a variáveis, incluídas em listas
          ou dicionários, e passadas como argumentos para outras funções (higher-order functions).
        </p>
        <div style={S.code}>{`def dobrar(x):
    return x * 2

# Atribuir função a variável
f = dobrar
print(f(5))          # 10

# Passar função como argumento (higher-order function)
def aplicar(func, valor):
    return func(valor)

print(aplicar(dobrar, 7))   # 14

# Funções em estruturas de dados
operacoes = {'duplo': dobrar, 'abs': abs, 'str': str}
for nome, op in operacoes.items():
    print(nome, op(-3))   # duplo -6 | abs 3 | str -3`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 2. Lambda ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Lambda — Funções Anónimas</h2>
        <p style={S.p}>
          Uma <code>lambda</code> é uma função anónima definida numa única expressão.
          Sintaxe: <code>lambda parametros: expressao</code>. Não tem nome, não tem
          <code> return</code> explícito, e está limitada a uma expressão (sem blocos,
          sem assignments, sem múltiplas linhas).
        </p>
        <div style={S.svgWrap}>
          <LambdaPipelineSVG />
        </div>
        <div style={S.code}>{`# Sintaxe básica
quadrado = lambda x: x ** 2
print(quadrado(4))   # 16

soma = lambda a, b: a + b
print(soma(3, 5))    # 8

# Uso típico: callback de ordenação
alunos = [("Ana", 17), ("Rui", 15), ("Zé", 19)]
alunos.sort(key=lambda a: a[1])
print(alunos)   # [('Rui', 15), ('Ana', 17), ('Zé', 19)]

# Ordenação multi-critério
pessoas = [("Ana", 25), ("Rui", 25), ("Zé", 30)]
pessoas.sort(key=lambda p: (p[1], p[0]))  # por idade, depois nome

# Uso em sorted (não modifica in-place)
ordenados = sorted(alunos, key=lambda a: a[1], reverse=True)`}</div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Situação</th>
              <th style={S.th}>Usar lambda</th>
              <th style={S.th}>Usar def</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Expressão simples, usada uma vez</td>
              <td style={S.td}>sim</td>
              <td style={S.td}>opcional</td>
            </tr>
            <tr>
              <td style={S.td}>Callback curto (sort, map, filter)</td>
              <td style={S.td}>sim</td>
              <td style={S.td}>se tiver nome útil</td>
            </tr>
            <tr>
              <td style={S.td}>Lógica com condições/loops</td>
              <td style={S.td}>não</td>
              <td style={S.td}>sim</td>
            </tr>
            <tr>
              <td style={S.td}>Função reutilizada múltiplas vezes</td>
              <td style={S.td}>não</td>
              <td style={S.td}>sim</td>
            </tr>
            <tr>
              <td style={S.td}>Precisa de docstring / tipo hints</td>
              <td style={S.td}>não</td>
              <td style={S.td}>sim</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          PEP 8 desaconselha atribuir lambdas a variáveis com <code>=</code> — use <code>def</code>
          nesses casos. Lambdas devem ficar em linha como argumentos, não como definições nomeadas.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 3. map / filter / reduce ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. map(), filter() e reduce()</h2>
        <p style={S.p}>
          Estas três funções são o núcleo histórico da programação funcional e formam o padrão
          MapReduce usado em sistemas distribuídos (Hadoop, Spark). Em Python, <code>map()</code>
          e <code>filter()</code> são built-ins; <code>reduce()</code> está em
          <code> functools</code> desde o Python 3.
        </p>
        <div style={S.svgWrap}>
          <MapFilterReduceSVG />
        </div>
        <div style={S.code}>{`from functools import reduce

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# map — aplica função a cada elemento, retorna iterador lazy
quadrados = list(map(lambda x: x**2, numeros))
print(quadrados)   # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# filter — mantém elementos onde predicate é True
pares = list(filter(lambda x: x % 2 == 0, numeros))
print(pares)       # [2, 4, 6, 8, 10]

# reduce — agrega todos os elementos num único valor
produto = reduce(lambda a, b: a * b, numeros)
print(produto)     # 3628800  (10!)

# Com valor inicial (evita erro em lista vazia)
soma = reduce(lambda a, b: a + b, numeros, 0)
print(soma)        # 55`}</div>
        <p style={S.p}>
          Para muitos casos, list comprehensions são mais legíveis. Veja a equivalência:
        </p>
        <div style={S.code}>{`numeros = range(1, 11)

# map com lambda  →  list comprehension
quadrados_map = list(map(lambda x: x**2, numeros))
quadrados_lc  = [x**2 for x in numeros]            # equivalente

# filter com lambda  →  list comprehension com condição
pares_filter = list(filter(lambda x: x % 2 == 0, numeros))
pares_lc     = [x for x in numeros if x % 2 == 0]  # equivalente

# Combinado: quadrados dos pares
combinado_fp = list(map(lambda x: x**2, filter(lambda x: x % 2 == 0, numeros)))
combinado_lc = [x**2 for x in numeros if x % 2 == 0]  # mais legível`}</div>
        <div style={S.note}>
          <code>map()</code> e <code>filter()</code> retornam iteradores <strong>lazy</strong>
          — nenhum cálculo acontece até materializar com <code>list()</code> ou iterar.
          Isto é eficiente para listas muito grandes. <code>reduce()</code> materializa
          imediatamente porque precisa de acumular o valor.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 4. Closures ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Closures em Profundidade</h2>
        <p style={S.p}>
          Um <strong>closure</strong> é uma função aninhada que captura <em>variáveis livres</em>
          do scope da função exterior, mesmo após essa função ter terminado a execução.
          As variáveis capturadas ficam guardadas em <code>__closure__</code>.
        </p>
        <div style={S.svgWrap}>
          <ClosureSVG />
        </div>
        <div style={S.code}>{`def multiplicador(fator):
    """Factory function — retorna um closure."""
    def aplicar(numero):
        return numero * fator   # 'fator' é variável livre
    return aplicar

dobrar    = multiplicador(2)
triplicar = multiplicador(3)

print(dobrar(5))     # 10
print(triplicar(5))  # 15

# Inspecionar o que foi capturado
print(dobrar.__closure__)             # (<cell at ...>,)
print(dobrar.__closure__[0].cell_contents)  # 2
print(dobrar.__code__.co_freevars)    # ('fator',)`}</div>
        <p style={S.p}>
          Um erro clássico com closures dentro de loops: todas as funções criadas dentro de um
          loop capturam a mesma variável (por referência), não o valor no momento da criação.
        </p>
        <div style={S.code}>{`# BUG: loop closure — todas capturam o i final
funcoes_erradas = []
for i in range(5):
    funcoes_erradas.append(lambda: i)   # captura 'i' por referência

print([f() for f in funcoes_erradas])   # [4, 4, 4, 4, 4]  ← bug!

# FIX 1: argumento com default captura valor no momento
funcoes_certas = []
for i in range(5):
    funcoes_certas.append(lambda i=i: i)  # i=i fixa o valor

print([f() for f in funcoes_certas])    # [0, 1, 2, 3, 4]  ← correcto

# FIX 2: factory function explícita
def make_fn(n):
    return lambda: n

funcoes_factory = [make_fn(i) for i in range(5)]
print([f() for f in funcoes_factory])   # [0, 1, 2, 3, 4]`}</div>
        <div style={S.note}>
          Closures são a base dos decorators. Sempre que escreves um decorator, estás a criar
          um closure: a função <code>wrapper</code> captura <code>func</code> do scope exterior.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 5. Decorators ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Decorators</h2>
        <p style={S.p}>
          Um <strong>decorator</strong> é um padrão que envolve uma função para adicionar
          comportamento extra sem modificar o seu código. A sintaxe <code>@nome</code> é
          açúcar sintático para <code>func = nome(func)</code>.
        </p>
        <div style={S.svgWrap}>
          <DecoratorSVG />
        </div>
        <div style={S.code}>{`import functools
import time

# Decorator básico — medir tempo de execução
def timer(func):
    @functools.wraps(func)   # preserva __name__, __doc__, __annotations__
    def wrapper(*args, **kwargs):
        inicio = time.perf_counter()
        resultado = func(*args, **kwargs)
        fim = time.perf_counter()
        print(f"{func.__name__} executou em {fim - inicio:.6f}s")
        return resultado
    return wrapper

@timer
def computar(n):
    """Soma de 0 a n-1."""
    return sum(range(n))

resultado = computar(1_000_000)
# computar executou em 0.041237s

# Verificar que metadados foram preservados
print(computar.__name__)   # computar  (não wrapper!)
print(computar.__doc__)    # Soma de 0 a n-1.`}</div>
        <p style={S.p}>
          Decorators podem aceitar parâmetros — precisam de um nível extra de aninhamento
          (uma função que retorna o decorator):
        </p>
        <div style={S.code}>{`def repetir(n):
    """Decorator factory — aceita parâmetro n."""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(n):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repetir(3)
def dizer_ola(nome):
    print(f"Olá, {nome}!")

dizer_ola("Ana")   # imprime 3 vezes

# Empilhar decorators (aplicados de baixo para cima)
@timer
@repetir(2)
def saudacao():
    print("Bom dia!")

# equivalente a: saudacao = timer(repetir(2)(saudacao))
saudacao()`}</div>
        <div style={S.note}>
          Sem <code>@functools.wraps(func)</code>, a função decorada perde o seu <code>__name__</code>
          e <code>__doc__</code>, o que quebra introspection, logging e frameworks como pytest.
          É uma boa prática incluí-lo em qualquer decorator que escreves.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 6. Decorators úteis ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Decorators Úteis da Biblioteca Padrão</h2>
        <p style={S.p}>
          Python fornece decorators prontos a usar no módulo <code>functools</code> e em classes
          built-in que cobrem casos de uso muito comuns.
        </p>

        <div style={S.highlight}>
          <strong>@functools.lru_cache</strong> — memoization automática. Guarda resultados de
          chamadas anteriores. Ideal para funções recursivas ou computacionalmente caras com
          inputs repetidos.
        </div>
        <div style={S.svgWrap}>
          <CacheBarSVG />
        </div>
        <div style={S.code}>{`import functools

# Fibonacci sem cache — O(2^n), extremamente lento
def fib_lento(n):
    if n < 2:
        return n
    return fib_lento(n - 1) + fib_lento(n - 2)

# Fibonacci com lru_cache — O(n), muito rápido
@functools.lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(50))          # 12586269025 — instantâneo
print(fib.cache_info()) # CacheInfo(hits=48, misses=51, ...)

# Python 3.9+: @functools.cache (equivalente com maxsize=None)
@functools.cache
def fib2(n):
    if n < 2: return n
    return fib2(n-1) + fib2(n-2)`}</div>

        <div style={S.code}>{`import functools

# @functools.cached_property — propriedade computada uma vez e cacheada
class Circulo:
    def __init__(self, raio):
        self.raio = raio

    @functools.cached_property
    def area(self):
        import math
        print("calculando área...")
        return math.pi * self.raio ** 2

c = Circulo(5)
print(c.area)   # calculando área... → 78.53...
print(c.area)   # 78.53... (sem recalcular)

# @staticmethod — método que não acede a self nem cls
class Matematica:
    @staticmethod
    def somar(a, b):
        return a + b

print(Matematica.somar(3, 4))   # 7

# @classmethod — acede à classe via cls (factory methods)
class Data:
    def __init__(self, ano, mes, dia):
        self.ano, self.mes, self.dia = ano, mes, dia

    @classmethod
    def de_string(cls, s):           # "2024-01-15"
        ano, mes, dia = map(int, s.split('-'))
        return cls(ano, mes, dia)

d = Data.de_string("2024-06-15")

# @property — getter/setter declarativo
class Temperatura:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, valor):
        if valor < -273.15:
            raise ValueError("Abaixo do zero absoluto")
        self._celsius = valor

    @property
    def fahrenheit(self):
        return self._celsius * 9/5 + 32`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 7. Itertools ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Itertools — Ferramentas para Iteradores Lazy</h2>
        <p style={S.p}>
          O módulo <code>itertools</code> fornece um conjunto de funções para criar iteradores
          combinatórios e de transformação. São todos <strong>lazy</strong> — produzem valores
          apenas quando pedidos, permitindo trabalhar com sequências infinitas ou muito grandes
          sem as materializar em memória.
        </p>
        <div style={S.svgWrap}>
          <ItertoolsSVG />
        </div>
        <div style={S.code}>{`import itertools

# Iteradores infinitos
counter = itertools.count(start=1, step=2)       # 1, 3, 5, 7, ...
ciclico = itertools.cycle(['A', 'B', 'C'])        # A, B, C, A, B, C, ...

# islice — limitar um iterador (essencial com infinitos)
primeiros_10 = list(itertools.islice(counter, 10))
print(primeiros_10)   # [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

# chain — concatenar iteráveis
encadeado = list(itertools.chain([1,2], [3,4], [5,6]))
print(encadeado)      # [1, 2, 3, 4, 5, 6]

# product — produto cartesiano (equivalente a nested for loops)
pares = list(itertools.product([1,2], ['a','b']))
print(pares)   # [(1,'a'), (1,'b'), (2,'a'), (2,'b')]

# combinations e permutations
combo = list(itertools.combinations([1,2,3], 2))
print(combo)   # [(1,2), (1,3), (2,3)]

perm = list(itertools.permutations([1,2,3], 2))
print(perm)    # [(1,2), (1,3), (2,1), (2,3), (3,1), (3,2)]

# groupby — agrupar elementos consecutivos por chave
dados = [('A',1), ('A',2), ('B',3), ('B',4), ('C',5)]
for chave, grupo in itertools.groupby(dados, key=lambda x: x[0]):
    print(chave, list(grupo))
# A [('A', 1), ('A', 2)]
# B [('B', 3), ('B', 4)]
# C [('C', 5)]`}</div>
        <div style={S.note}>
          <code>itertools.groupby</code> agrupa elementos <strong>consecutivos</strong> com a
          mesma chave. Para agrupar todos os elementos com a mesma chave independentemente da
          ordem, ordena primeiro: <code>sorted(dados, key=lambda x: x[0])</code>.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 8. Generators ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Generators — Avaliação Lazy com yield</h2>
        <p style={S.p}>
          Um <strong>generator</strong> é uma função que usa <code>yield</code> para produzir
          valores um de cada vez, suspendendo a execução entre chamadas. Em vez de calcular e
          guardar todos os valores em memória, produz cada valor apenas quando pedido.
        </p>
        <div style={S.svgWrap}>
          <GeneratorSVG />
        </div>
        <div style={S.code}>{`# Função normal vs generator
def quadrados_lista(n):
    """Cria lista completa — O(n) memória."""
    return [x * x for x in range(n)]

def quadrados_gen(n):
    """Generator — O(1) memória."""
    for x in range(n):
        yield x * x   # suspende aqui, retoma na próxima chamada

# Usar generator
gen = quadrados_gen(5)
print(next(gen))   # 0
print(next(gen))   # 1
print(next(gen))   # 4

# Iterar com for (chama next() automaticamente)
for q in quadrados_gen(5):
    print(q)       # 0, 1, 4, 9, 16

# Generator expression (como list comprehension mas com parênteses)
gen_expr = (x * x for x in range(1_000_000))  # O(1) memória!
soma = sum(gen_expr)                            # processa sem armazenar

# yield from — delegar para sub-generator
def flatten(nested):
    for item in nested:
        if isinstance(item, list):
            yield from flatten(item)   # recursão com yield from
        else:
            yield item

lista_aninhada = [1, [2, 3], [4, [5, 6]]]
print(list(flatten(lista_aninhada)))   # [1, 2, 3, 4, 5, 6]

# Generator com estado — contar infinitamente
def contador(inicio=0, passo=1):
    n = inicio
    while True:
        yield n
        n += passo

from itertools import islice
primeiros = list(islice(contador(10, 5), 5))
print(primeiros)   # [10, 15, 20, 25, 30]`}</div>
        <div style={S.note}>
          Generators são ideais para processar ficheiros grandes linha a linha, paginar resultados
          de APIs, ou criar pipelines de transformação onde cada passo é lazy. O Python suspende
          a execução em cada <code>yield</code> preservando o estado local (variáveis, posição
          no loop).
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 9. Partial / Currying ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Partial Application e Currying</h2>
        <p style={S.p}>
          <strong>Partial application</strong> cria uma nova função fixando alguns argumentos de
          uma função existente. <strong>Currying</strong> transforma uma função de N argumentos
          numa cadeia de N funções de 1 argumento cada.
        </p>
        <div style={S.svgWrap}>
          <CurrySVG />
        </div>
        <div style={S.code}>{`from functools import partial

# partial — fixar argumentos (partial application)
def potencia(base, expoente):
    return base ** expoente

quadrado = partial(potencia, expoente=2)
cubo     = partial(potencia, expoente=3)

print(quadrado(4))   # 16
print(cubo(3))       # 27

# Partial com função built-in
import json
codificar = partial(json.dumps, indent=2, ensure_ascii=False)
dados = {"nome": "Ana", "curso": "MDSAA"}
print(codificar(dados))

# Partial em pipelines
from functools import partial
multiplicar = lambda x, y: x * y
dobrar = partial(multiplicar, 2)
triplicar = partial(multiplicar, 3)

numeros = [1, 2, 3, 4, 5]
print(list(map(dobrar, numeros)))      # [2, 4, 6, 8, 10]
print(list(map(triplicar, numeros)))   # [3, 6, 9, 12, 15]`}</div>
        <div style={S.code}>{`# Currying manual em Python
def add(a):
    def inner(b):
        return a + b
    return inner

add5 = add(5)
print(add5(3))    # 8
print(add(2)(3))  # 5

# Currying genérico com decorator
def curry(func):
    import inspect
    n = len(inspect.signature(func).parameters)
    def curried(*args):
        if len(args) >= n:
            return func(*args)
        return lambda *more: curried(*(args + more))
    return curried

@curry
def somar3(a, b, c):
    return a + b + c

print(somar3(1)(2)(3))    # 6
print(somar3(1, 2)(3))    # 6
print(somar3(1)(2, 3))    # 6`}</div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Conceito</th>
              <th style={S.th}>O que faz</th>
              <th style={S.th}>Python tool</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Partial Application</td>
              <td style={S.td}>Fixa alguns argumentos, passa o resto depois</td>
              <td style={S.td}><code>functools.partial</code></td>
            </tr>
            <tr>
              <td style={S.td}>Currying</td>
              <td style={S.td}>Transforma f(a,b,c) em f(a)(b)(c)</td>
              <td style={S.td}>manual / decorator</td>
            </tr>
            <tr>
              <td style={S.td}>Composição</td>
              <td style={S.td}>Combina f e g em h(x) = f(g(x))</td>
              <td style={S.td}>lambda / reduce</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 10. FP vs OOP vs Procedural ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Programação Funcional vs OOP vs Procedural</h2>
        <p style={S.p}>
          Python é uma linguagem multi-paradigma — podes usar estilo funcional, orientado a
          objectos ou procedural, e na prática misturas os três. Cada paradigma tem pontos
          fortes em contextos diferentes.
        </p>
        <div style={S.svgWrap}>
          <ComparisonSVG />
        </div>
        <div style={S.code}>{`# O mesmo problema em três estilos

dados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# ── Procedural ──
resultado_proc = 0
for x in dados:
    if x % 2 == 0:
        resultado_proc += x ** 2
print(resultado_proc)   # 220

# ── Funcional ──
from functools import reduce
resultado_fp = reduce(
    lambda acc, x: acc + x,
    filter(lambda x: x % 2 == 0, map(lambda x: x**2, dados))
)
print(resultado_fp)   # 220

# ── OOP ──
class Pipeline:
    def __init__(self, data):
        self._data = list(data)

    def map(self, func):
        return Pipeline(func(x) for x in self._data)

    def filter(self, pred):
        return Pipeline(x for x in self._data if pred(x))

    def reduce(self, func, initial=None):
        from functools import reduce
        return reduce(func, self._data, initial)

resultado_oop = (Pipeline(dados)
                 .map(lambda x: x**2)
                 .filter(lambda x: x % 2 == 0)
                 .reduce(lambda a, b: a + b, 0))
print(resultado_oop)   # 220`}</div>
        <div style={S.highlight}>
          Em ciência de dados, Python usa frequentemente os três estilos: Pandas usa OOP para
          o DataFrame mas expõe <code>.pipe()</code> e <code>.apply()</code> para estilo funcional;
          scikit-learn usa OOP para estimators mas pipelines funcionais para transformações;
          NumPy usa broadcasting funcional puro.
        </div>
      </section>



    </div>
  );
}
