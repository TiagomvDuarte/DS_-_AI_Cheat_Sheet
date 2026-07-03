import React from 'react';
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
  svgBox: { background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.10)', borderRadius: 10, padding: '1rem', margin: '1.2rem 0', overflowX: 'auto' },
};

function GeneratorPipelineSVG() {
  return (
    <svg width="780" height="180" viewBox="0 0 780 180" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <rect x="10" y="20" width="140" height="140" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="80" y="48" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>LIST</text>
      <text x="80" y="66" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">range(1M)</text>
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={i} x={18 + i*15} y="80" width="12" height="12" rx="2" fill={color} opacity="0.7" />
      ))}
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={i+8} x={18 + i*15} y="96" width="12" height="12" rx="2" fill={color} opacity="0.7" />
      ))}
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={i+16} x={18 + i*15} y="112" width="12" height="12" rx="2" fill={color} opacity="0.55" />
      ))}
      <text x="80" y="138" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">~28 MB em mem&#243;ria</text>
      <text x="80" y="148" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">tudo de uma vez</text>

      <text x="200" y="95" textAnchor="middle" fontSize="20" fill="var(--text-secondary)">vs</text>

      <rect x="240" y="20" width="170" height="140" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="325" y="48" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>GENERATOR</text>
      <text x="325" y="66" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">generator expression</text>
      <rect x="300" y="80" width="50" height="22" rx="5" fill={color} opacity="0.8" />
      <text x="325" y="96" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">valor 1</text>
      <text x="325" y="120" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">aguarda next()</text>
      <text x="325" y="135" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">&#8592; apenas ~120 bytes</text>
      <text x="325" y="150" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">lazy: um de cada vez</text>

      <line x1="430" y1="90" x2="460" y2="90" stroke={color} strokeWidth="1.5" strokeDasharray="4,3" />
      <text x="445" y="82" textAnchor="middle" fontSize="9" fill={color}>next()</text>

      <rect x="460" y="60" width="100" height="60" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
      <text x="510" y="84" textAnchor="middle" fontSize="10" fontWeight="600" fill={color}>Pipeline</text>
      <text x="510" y="100" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">filter</text>
      <text x="510" y="113" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">map</text>

      <line x1="560" y1="90" x2="590" y2="90" stroke={color} strokeWidth="1.5" strokeDasharray="4,3" />

      <rect x="590" y="60" width="120" height="60" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
      <text x="650" y="84" textAnchor="middle" fontSize="10" fontWeight="600" fill={color}>Consumidor</text>
      <text x="650" y="100" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">sum() / list()</text>
      <text x="650" y="113" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">for loop</text>

      <text x="390" y="180" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Mem&#243;ria: O(1) vs O(n) &#8212; generators n&#227;o materializam a sequ&#234;ncia</text>
    </svg>
  );
}

function MemoryBarSVG() {
  return (
    <svg width="420" height="130" viewBox="0 0 420 130" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x="10" y="18" fontSize="11" fontWeight="700" fill="var(--text-primary)">Uso de mem&#243;ria: range(1 000 000)</text>
      <rect x="10" y="30" width="340" height="22" rx="4" fill={color} opacity="0.85" />
      <text x="358" y="46" fontSize="10" fill="var(--text-primary)">list: ~28 MB</text>
      <rect x="10" y="62" width="1" height="22" rx="4" fill={color} opacity="0.85" />
      <rect x="10" y="62" width="3" height="22" rx="2" fill={color} />
      <text x="18" y="78" fontSize="10" fill="var(--text-primary)">generator: 120 bytes</text>
      <text x="10" y="115" fontSize="9" fill="var(--text-secondary)">list() materializa todos os inteiros em RAM; generator guarda apenas o estado (valor actual + passo).</text>
    </svg>
  );
}

function ResourceLifecycleSVG() {
  const stages = ['open()', 'use', 'close()'];
  const colors = [color, 'var(--text-secondary)', '#f97316'];
  return (
    <svg width="600" height="140" viewBox="0 0 600 140" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x="300" y="18" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-primary)">Ciclo de vida de recurso com context manager</text>
      {stages.map((s, i) => (
        <g key={s}>
          <rect x={60 + i * 160} y="35" width="110" height="44" rx="8" fill="rgba(249,115,22,0.10)" stroke={i === 2 ? '#f97316' : color} strokeWidth="1.5" />
          <text x={115 + i * 160} y="60" textAnchor="middle" fontSize="12" fontWeight="700" fill={colors[i]}>{s}</text>
          <text x={115 + i * 160} y="74" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">
            {i === 0 ? '__enter__' : i === 1 ? 'bloco with' : '__exit__'}
          </text>
          {i < 2 && <line x1={170 + i * 160} y1="57" x2={220 + i * 160} y2="57" stroke={color} strokeWidth="1.5" markerEnd="url(#arr)" />}
        </g>
      ))}
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
      </defs>
      <rect x="60" y="95" width="480" height="22" rx="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="300" y="110" textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="600">Garantido mesmo em caso de exce&#231;&#227;o &#8212; __exit__ &#233; sempre chamado</text>
    </svg>
  );
}

function ConcurrencyComparisonSVG() {
  const cols = [
    { label: 'Threading', sub: 'I/O-bound', items: ['GIL liberto em I/O', 'Thread pool', 'Simples', 'concurrent.futures'], color: color },
    { label: 'Multiprocessing', sub: 'CPU-bound', items: ['Processos separados', 'Sem GIL', 'Mais mem&#243;ria', 'ProcessPoolExecutor'], color: '#f97316' },
    { label: 'Asyncio', sub: 'Alta concorr&#234;ncia', items: ['Single thread', 'Event loop', 'async/await', 'aiohttp, aiopg'], color: '#f97316' },
  ];
  return (
    <svg width="700" height="220" viewBox="0 0 700 220" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x="350" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">Modelos de Concorr&#234;ncia em Python</text>
      {cols.map((col, ci) => (
        <g key={col.label}>
          <rect x={20 + ci * 225} y="30" width="210" height="175" rx="8" fill="rgba(249,115,22,0.10)" stroke={col.color} strokeWidth="1.5" />
          <rect x={20 + ci * 225} y="30" width="210" height="38" rx="8" fill={col.color} opacity="0.85" />
          <rect x={20 + ci * 225} y="52" width="210" height="16" fill={col.color} opacity="0.85" />
          <text x={125 + ci * 225} y="45" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">{col.label}</text>
          <text x={125 + ci * 225} y="63" textAnchor="middle" fontSize="10" fill="#fff" opacity="0.9">{col.sub}</text>
          {col.items.map((item, ii) => (
            <text key={ii} x={35 + ci * 225} y={97 + ii * 24} fontSize="10" fill="var(--text-primary)" dangerouslySetInnerHTML={{ __html: '&#8226; ' + item }} />
          ))}
        </g>
      ))}
    </svg>
  );
}

function AsyncTimelineSVG() {
  return (
    <svg width="680" height="200" viewBox="0 0 680 200" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x="340" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">S&#237;ncrono vs Ass&#237;ncrono &#8212; 3 pedidos HTTP (cada 1s)</text>
      <text x="10" y="48" fontSize="10" fontWeight="600" fill="var(--text-secondary)">S&#237;ncrono</text>
      <rect x="80" y="36" width="90" height="22" rx="4" fill={color} opacity="0.8" />
      <text x="125" y="52" textAnchor="middle" fontSize="9" fill="#fff">req 1 (1s)</text>
      <rect x="175" y="36" width="90" height="22" rx="4" fill={color} opacity="0.8" />
      <text x="220" y="52" textAnchor="middle" fontSize="9" fill="#fff">req 2 (1s)</text>
      <rect x="270" y="36" width="90" height="22" rx="4" fill={color} opacity="0.8" />
      <text x="315" y="52" textAnchor="middle" fontSize="9" fill="#fff">req 3 (1s)</text>
      <line x1="80" y1="68" x2="360" y2="68" stroke={color} strokeWidth="1" />
      <text x="360" y="64" fontSize="9" fill={color}>~3s total</text>

      <text x="10" y="108" fontSize="10" fontWeight="600" fill="#f97316">Ass&#237;ncrono</text>
      <rect x="80" y="96" width="90" height="22" rx="4" fill="#f97316" opacity="0.7" />
      <text x="125" y="112" textAnchor="middle" fontSize="9" fill="#fff">req 1 (1s)</text>
      <rect x="80" y="96" width="90" height="22" rx="4" fill="none" stroke="#f97316" strokeWidth="1" />
      <rect x="82" y="122" width="90" height="22" rx="4" fill="#f97316" opacity="0.7" />
      <text x="127" y="138" textAnchor="middle" fontSize="9" fill="#fff">req 2 (1s)</text>
      <rect x="84" y="148" width="90" height="22" rx="4" fill="#f97316" opacity="0.7" />
      <text x="129" y="164" textAnchor="middle" fontSize="9" fill="#fff">req 3 (1s)</text>
      <line x1="80" y1="178" x2="178" y2="178" stroke="#f97316" strokeWidth="1" />
      <text x="182" y="174" fontSize="9" fill="#f97316">~1s total (concurrent)</text>

      <text x="340" y="195" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">asyncio.gather() executa coroutines em paralelo no mesmo thread</text>
    </svg>
  );
}

function TypeCheckPipelineSVG() {
  const steps = ['Source .py', 'mypy', 'Erros de tipo', 'Runtime seguro'];
  const stepColors = ['var(--text-secondary)', color, '#f97316', '#f97316'];
  return (
    <svg width="620" height="100" viewBox="0 0 620 100" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x="310" y="18" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-primary)">Pipeline de verifica&#231;&#227;o de tipos</text>
      {steps.map((s, i) => (
        <g key={s}>
          <rect x={20 + i * 148} y="28" width="120" height="40" rx="7" fill="rgba(249,115,22,0.10)" stroke={stepColors[i]} strokeWidth="1.5" />
          <text x={80 + i * 148} y="53" textAnchor="middle" fontSize="10" fontWeight="600" fill={stepColors[i]}>{s}</text>
          {i < steps.length - 1 && (
            <line x1={140 + i * 148} y1="48" x2={165 + i * 148} y2="48" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#a2)" />
          )}
        </g>
      ))}
      <defs>
        <marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)" />
        </marker>
      </defs>
    </svg>
  );
}

function ExceptionHierarchySVG() {
  return (
    <svg width="680" height="230" viewBox="0 0 680 230" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x="340" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">Hierarquia de Exce&#231;&#245;es Python (simplificada)</text>
      <rect x="270" y="28" width="140" height="28" rx="6" fill={color} opacity="0.85" />
      <text x="340" y="47" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">BaseException</text>
      <line x1="340" y1="56" x2="340" y2="72" stroke={color} strokeWidth="1.5" />
      <rect x="260" y="72" width="160" height="28" rx="6" fill={color} opacity="0.65" />
      <text x="340" y="91" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff">Exception</text>
      <line x1="340" y1="100" x2="340" y2="116" stroke={color} strokeWidth="1.5" />
      <line x1="80" y1="116" x2="570" y2="116" stroke={color} strokeWidth="1" />
      {[
        [80, 'ValueError'],
        [210, 'TypeError'],
        [330, 'IOError'],
        [450, 'RuntimeError'],
        [570, 'KeyError'],
      ].map(([x, label]) => (
        <g key={label}>
          <line x1={x} y1="116" x2={x} y2="130" stroke={color} strokeWidth="1" />
          <rect x={x - 55} y="130" width="110" height="26" rx="5" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
          <text x={x} y="148" textAnchor="middle" fontSize="9" fill="var(--text-primary)">{label}</text>
        </g>
      ))}
      <line x1="80" y1="156" x2="80" y2="170" stroke={color} strokeWidth="1" />
      <rect x="10" y="170" width="140" height="26" rx="5" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
      <text x="80" y="188" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">ZeroDivisionError</text>
      <text x="340" y="220" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">SystemExit e KeyboardInterrupt herdam de BaseException (n&#227;o de Exception)</text>
    </svg>
  );
}

function PackageStructureSVG() {
  const items = [
    { indent: 0, label: 'my-package/', isDir: true },
    { indent: 1, label: 'src/', isDir: true },
    { indent: 2, label: 'my_package/', isDir: true },
    { indent: 3, label: '__init__.py', isDir: false },
    { indent: 3, label: 'core.py', isDir: false },
    { indent: 3, label: 'utils.py', isDir: false },
    { indent: 1, label: 'tests/', isDir: true },
    { indent: 2, label: 'test_core.py', isDir: false },
    { indent: 1, label: 'pyproject.toml', isDir: false },
    { indent: 1, label: 'README.md', isDir: false },
  ];
  return (
    <svg width="380" height="220" viewBox="0 0 380 220" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x="10" y="18" fontSize="11" fontWeight="700" fill="var(--text-primary)">Estrutura src layout (recomendada)</text>
      {items.map((item, i) => (
        <g key={i}>
          <text x={16 + item.indent * 20} y={38 + i * 18} fontSize="11" fontFamily="monospace" fill={item.isDir ? color : 'var(--text-primary)'} fontWeight={item.isDir ? '700' : '400'}>
            {item.isDir ? '\u{1F4C1} ' : '\u{1F4C4} '}{item.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function SemanticVersionSVG() {
  return (
    <svg width="460" height="100" viewBox="0 0 460 110" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x="230" y="18" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-primary)">Versionamento Sem&#226;ntico &#8212; MAJOR.MINOR.PATCH</text>
      {[
        [50, '2', 'MAJOR', 'breaking change'],
        [180, '4', 'MINOR', 'nova feature'],
        [310, '1', 'PATCH', 'bug fix'],
      ].map(([x, ver, label, desc]) => (
        <g key={label}>
          <circle cx={x} cy="60" r="26" fill={color} opacity="0.85" />
          <text x={x} y="65" textAnchor="middle" fontSize="18" fontWeight="800" fill="#fff">{ver}</text>
          <text x={x} y="96" textAnchor="middle" fontSize="9" fontWeight="600" fill={color}>{label}</text>
          <text x={x} y="106" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{desc}</text>
          {x < 310 && <text x={x + 65} y="64" textAnchor="middle" fontSize="18" fill="var(--text-secondary)">.</text>}
        </g>
      ))}
    </svg>
  );
}

function TDDCycleSVG() {
  const phases = [
    { x: 160, y: 90, r: 44, label: 'RED', sub: 'escrever teste\nque falha', fill: '#f97316' },
    { x: 340, y: 165, r: 44, label: 'GREEN', sub: 'fazer passar\no teste', fill: '#f97316' },
    { x: 160, y: 240, r: 44, label: 'REFACTOR', sub: 'melhorar\no código', fill: color },
  ];
  return (
    <svg width="500" height="310" viewBox="0 0 500 310" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x="250" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">Ciclo TDD: Red → Green → Refactor</text>
      {phases.map((ph) => (
        <g key={ph.label}>
          <circle cx={ph.x} cy={ph.y} r={ph.r} fill={ph.fill} opacity="0.85" />
          <text x={ph.x} y={ph.y - 6} textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff">{ph.label}</text>
          {ph.sub.split('\n').map((line, li) => (
            <text key={li} x={ph.x} y={ph.y + 10 + li * 14} textAnchor="middle" fontSize="9" fill="#fff" opacity="0.9">{line}</text>
          ))}
        </g>
      ))}
      <path d="M195,115 Q290,90 315,135" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#ra)" />
      <path d="M315,193 Q280,250 200,250" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#ga)" />
      <path d="M120,235 Q80,165 130,110" fill="none" stroke={color} strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#aa)" />
      <defs>
        <marker id="ra" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f97316" /></marker>
        <marker id="ga" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f97316" /></marker>
        <marker id="aa" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill={color} /></marker>
      </defs>
    </svg>
  );
}

function FlameGraphSVG() {
  const frames = [
    { x: 10, w: 500, y: 160, label: 'main()' },
    { x: 10, w: 320, y: 136, label: 'process_data()' },
    { x: 10, w: 200, y: 112, label: 'load_csv()' },
    { x: 215, w: 115, y: 112, label: 'transform()' },
    { x: 10, w: 120, y: 88, label: 'pd.read_csv()' },
    { x: 215, w: 60, y: 88, label: 'apply()' },
    { x: 330, w: 140, y: 136, label: 'save_results()' },
    { x: 330, w: 80, y: 112, label: 'to_parquet()' },
  ];
  return (
    <svg width="560" height="200" viewBox="0 0 560 200" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x="280" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-primary)">Flame Graph simplificado (cProfile output)</text>
      {frames.map((f, i) => {
        const opacity = 0.5 + (160 - f.y) / 160 * 0.5;
        return (
          <g key={i}>
            <rect x={f.x} y={f.y} width={f.w} height="20" rx="2" fill={color} opacity={opacity} stroke="#fff" strokeWidth="0.5" />
            {f.w > 50 && (
              <text x={f.x + f.w / 2} y={f.y + 14} textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">{f.label}</text>
            )}
          </g>
        );
      })}
      <text x="10" y="195" fontSize="9" fill="var(--text-secondary)">Blocos mais largos = mais tempo de CPU. Profundidade = call stack.</text>
    </svg>
  );
}

function CIPipelineSVG() {
  const steps = ['black', 'isort', 'flake8', 'mypy', 'pytest', 'deploy'];
  const stepColors = [color, color, color, '#f97316', '#f97316', '#f97316'];
  return (
    <svg width="660" height="100" viewBox="0 0 660 100" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x="330" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-primary)">Pipeline CI/CD com ferramentas de qualidade</text>
      {steps.map((s, i) => (
        <g key={s}>
          <rect x={10 + i * 107} y="26" width="90" height="36" rx="7" fill="rgba(249,115,22,0.10)" stroke={stepColors[i]} strokeWidth="1.5" />
          <text x={55 + i * 107} y="49" textAnchor="middle" fontSize="11" fontWeight="600" fill={stepColors[i]}>{s}</text>
          {i < steps.length - 1 && (
            <line x1={100 + i * 107} y1="44" x2={112 + i * 107} y2="44" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#ci)" />
          )}
        </g>
      ))}
      <defs>
        <marker id="ci" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <text x="330" y="90" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Executado automaticamente em cada push &#8212; falha bloqueia o merge</text>
    </svg>
  );
}

function LearningPathSVG() {
  const milestones = [
    { label: 'Iniciante', items: 'syntax, loops,\nfunctions, lists', color: '#f97316' },
    { label: 'Intermédio', items: 'OOP, decorators,\ntype hints, testing', color: color },
    { label: 'Avançado', items: 'async, meta-\nprogramming, perf', color: '#f97316' },
    { label: 'Expert', items: 'C extensions,\npackaging, CI/CD', color: '#f97316' },
  ];
  return (
    <svg width="700" height="150" viewBox="0 0 700 150" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x="350" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">Learning Path Python</text>
      <line x1="60" y1="70" x2="650" y2="70" stroke="var(--text-secondary)" strokeWidth="2" />
      {milestones.map((m, i) => (
        <g key={m.label}>
          <circle cx={60 + i * 196} cy="70" r="18" fill={m.color} opacity="0.85" />
          <text x={60 + i * 196} y="75" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff">{i + 1}</text>
          <text x={60 + i * 196} y="100" textAnchor="middle" fontSize="10" fontWeight="700" fill={m.color}>{m.label}</text>
          {m.items.split('\n').map((line, li) => (
            <text key={li} x={60 + i * 196} y={116 + li * 14} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{line}</text>
          ))}
        </g>
      ))}
    </svg>
  );
}

export default function PfDS10() {
  return (
    <div style={S.page}>
      <Link to="/pfds" style={S.back}><ArrowLeft size={16} /> Voltar a Programming for Data Science</Link>

      <div style={S.tag}>MÓDULO 10</div>
      <h1 style={S.h1}>Python Avan&#231;ado &amp; Boas Pr&#225;ticas</h1>
      <p style={S.lead}>
        Este m&#243;dulo cobre funcionalidades avan&#231;adas de Python: generators, context managers,
        concorr&#234;ncia, asyncio, type hints, tratamento de erros, metaprograma&#231;&#227;o,
        packaging, testing, performance e boas pr&#225;ticas de c&#243;digo.
      </p>

      {/* 1. Generators e Iterators */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Generators e Iterators</h2>
        <p style={S.p}>
          Um <strong>iterator</strong> &#233; qualquer objeto que implemente o protocolo
          {' '}
          <code>__iter__</code> + <code>__next__</code>. Um <strong>generator</strong> &#233; uma
          fun&#231;&#227;o que usa <code>yield</code> para produzir valores de forma lazy &#8212;
          o estado &#233; preservado entre chamadas a <code>next()</code>.
        </p>
        <div style={S.svgBox}>
          <GeneratorPipelineSVG />
        </div>
        <div style={S.svgBox}>
          <MemoryBarSVG />
        </div>
        <div style={S.code}>{`# Iterator protocol manual
class CountUp:
    def __init__(self, start, stop):
        self.current = start
        self.stop = stop

    def __iter__(self):
        return self

    def __next__(self):
        if self.current >= self.stop:
            raise StopIteration
        val = self.current
        self.current += 1
        return val

# Generator function
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# Generator expression (lazy)
squares = (x**2 for x in range(1_000_000))
total = sum(squares)  # nunca cria lista de 1M elementos

# yield from — delegar a sub-generator
def chain(*iterables):
    for it in iterables:
        yield from it

list(chain([1, 2], [3, 4]))  # [1, 2, 3, 4]`}</div>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>range(1M)</strong> ocupa ~28 bytes como generator; list(range(1M)) ocupa ~28 MB.
            Use generators para pipelines de dados grandes que n&#227;o cabem em mem&#243;ria.
          </p>
        </div>
        <div style={S.note}>
          <code>itertools</code>: chain, islice, product, combinations, groupby &#8212;
          ferramentas de itera&#231;&#227;o eficientes da stdlib.
        </div>
      </div>

      <hr style={S.divider} />

      {/* 2. Context Managers */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Context Managers</h2>
        <p style={S.p}>
          O bloco <code>with</code> garante que recursos s&#227;o libertados mesmo quando ocorrem
          exce&#231;&#245;es. Qualquer classe com <code>__enter__</code> e <code>__exit__</code>
          pode ser usada como context manager.
        </p>
        <div style={S.svgBox}>
          <ResourceLifecycleSVG />
        </div>
        <div style={S.code}>{`# Protocolo __enter__ / __exit__
class Timer:
    import time
    def __enter__(self):
        import time
        self._start = time.perf_counter()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        self.elapsed = time.perf_counter() - self._start
        print(f"Elapsed: {self.elapsed:.4f}s")
        return False  # nao suprimir excecoes

with Timer() as t:
    result = sum(range(1_000_000))
print(t.elapsed)

# contextlib.contextmanager — forma mais simples
from contextlib import contextmanager

@contextmanager
def temp_dir():
    import tempfile, shutil, os
    d = tempfile.mkdtemp()
    try:
        yield d  # ponto de suspensao = corpo do with
    finally:
        shutil.rmtree(d)  # sempre executado

with temp_dir() as d:
    open(f"{d}/test.txt", "w").write("hello")
# directorio removido aqui

# contextlib.suppress — suprimir excecoes especificas
from contextlib import suppress
with suppress(FileNotFoundError):
    os.remove("nao_existe.txt")  # sem erro`}</div>
        <div style={S.note}>
          <code>contextlib.ExitStack</code> permite gerir um n&#250;mero din&#226;mico de context managers
          dentro de um &#250;nico bloco <code>with</code>.
        </div>
      </div>

      <hr style={S.divider} />

      {/* 3. Concorrencia */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Concorr&#234;ncia &#8212; Threading vs Multiprocessing vs Asyncio</h2>
        <p style={S.p}>
          O <strong>GIL</strong> (Global Interpreter Lock) do CPython impede execu&#231;&#227;o
          paralela de bytecode Python em threads. Para I/O-bound o GIL &#233; libertado; para
          CPU-bound &#233; necess&#225;rio usar processos separados.
        </p>
        <div style={S.svgBox}>
          <ConcurrencyComparisonSVG />
        </div>
        <div style={S.code}>{`# Threading — I/O-bound (requests, file I/O)
from concurrent.futures import ThreadPoolExecutor
import urllib.request

def fetch(url):
    with urllib.request.urlopen(url) as r:
        return len(r.read())

urls = ["https://example.com"] * 10
with ThreadPoolExecutor(max_workers=5) as ex:
    sizes = list(ex.map(fetch, urls))

# Multiprocessing — CPU-bound
from concurrent.futures import ProcessPoolExecutor

def heavy(n):
    return sum(i*i for i in range(n))

with ProcessPoolExecutor() as ex:
    results = list(ex.map(heavy, [10_000_000]*4))

# Quando usar cada um:
# threading   -> muitas operacoes I/O concorrentes (simples)
# asyncio     -> muitissimas conexoes (alta escala)
# multiprocess-> calculos numericos intensivos (sem GIL)`}</div>
      </div>

      <hr style={S.divider} />

      {/* 4. Asyncio */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Asyncio em Detalhe</h2>
        <p style={S.p}>
          <code>asyncio</code> usa um event loop single-thread para gerir coroutines. Em vez de
          bloquear a thread durante I/O, suspende a coroutine com <code>await</code> e executa
          outra enquanto aguarda.
        </p>
        <div style={S.svgBox}>
          <AsyncTimelineSVG />
        </div>
        <div style={S.code}>{`import asyncio
import aiohttp

# async def define uma coroutine
async def fetch(session, url):
    async with session.get(url) as resp:
        return await resp.text()

# asyncio.gather — executa coroutines concorrentemente
async def main():
    urls = [
        "https://api.example.com/data/1",
        "https://api.example.com/data/2",
        "https://api.example.com/data/3",
    ]
    async with aiohttp.ClientSession() as session:
        # 3 pedidos em paralelo -> ~1x latencia (nao 3x)
        results = await asyncio.gather(
            *[fetch(session, u) for u in urls]
        )
    return results

asyncio.run(main())

# asyncio.create_task — iniciar sem esperar imediatamente
async def producer():
    for i in range(5):
        await asyncio.sleep(0.1)
        yield i

# Timeout
async def with_timeout():
    try:
        result = await asyncio.wait_for(
            asyncio.sleep(2), timeout=1.0
        )
    except asyncio.TimeoutError:
        print("Timed out!")`}</div>
        <div style={S.note}>
          Use <code>asyncio</code> para servidores web (FastAPI, aiohttp), clientes HTTP de alta
          escala ou processamento de streams. N&#227;o acelera c&#243;digo CPU-bound.
        </div>
      </div>

      <hr style={S.divider} />

      {/* 5. Type Hints Avancados */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Type Hints Avan&#231;ados</h2>
        <p style={S.p}>
          Python 3.5+ suporta anota&#231;&#245;es de tipo. N&#227;o s&#227;o verificadas em runtime,
          mas ferramentas como <code>mypy</code> e IDEs detectam erros antes de executar o c&#243;digo.
        </p>
        <div style={S.svgBox}>
          <TypeCheckPipelineSVG />
        </div>
        <div style={S.code}>{`from typing import (
    Optional, Union, List, Dict, Tuple,
    Callable, TypeVar, Generic, Protocol, overload
)

# Basicos
def greet(name: str) -> str:
    return f"Hello, {name}!"

# Optional — pode ser None
def find_user(uid: int) -> Optional[str]:
    return {1: "Alice"}.get(uid)

# Union (Python 3.10+: int | float | None)
def stringify(val: Union[int, float, str]) -> str:
    return str(val)

# TypeVar e Generic
T = TypeVar("T")

class Stack(Generic[T]):
    def __init__(self) -> None:
        self._items: List[T] = []

    def push(self, item: T) -> None:
        self._items.append(item)

    def pop(self) -> T:
        return self._items.pop()

# Protocol — duck typing estrutural
class Drawable(Protocol):
    def draw(self) -> None: ...

def render(obj: Drawable) -> None:
    obj.draw()  # qualquer objecto com .draw() serve

# @overload — varias assinaturas
@overload
def process(x: int) -> int: ...
@overload
def process(x: str) -> str: ...
def process(x):
    return x * 2 if isinstance(x, int) else x.upper()

# Verificar: mypy --strict script.py`}</div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Significado</th>
              <th style={S.th}>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Optional[T]', 'T ou None', 'Optional[str]'],
              ['Union[T1,T2]', 'T1 ou T2', 'Union[int, float]'],
              ['List[T]', 'lista de T', 'List[float]'],
              ['Dict[K,V]', 'dicionario', 'Dict[str, int]'],
              ['Tuple[T,...]', 'tuplo', 'Tuple[int, str]'],
              ['Callable[[A],R]', 'funcao', 'Callable[[int],bool]'],
              ['TypeVar', 'tipo generico', "T = TypeVar('T')"],
              ['Protocol', 'duck typing', 'class Sized(Protocol)'],
            ].map(([t, m, ex]) => (
              <tr key={t}>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{t}</td>
                <td style={S.td}>{m}</td>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{ex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* 6. Error Handling */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Error Handling Robusto</h2>
        <p style={S.p}>
          Python usa exce&#231;&#245;es para sinalizar erros. O bloco
          {' '}<code>try/except/else/finally</code> permite tratamento granular.
          Exce&#231;&#245;es custom d&#227;o contexto ao dom&#237;nio da aplica&#231;&#227;o.
        </p>
        <div style={S.svgBox}>
          <ExceptionHierarchySVG />
        </div>
        <div style={S.code}>{`# try / except / else / finally
def safe_divide(a: float, b: float) -> float:
    try:
        result = a / b
    except ZeroDivisionError:
        raise ValueError("Divisor cannot be zero") from None
    except TypeError as e:
        raise TypeError(f"Expected numbers") from e
    else:
        # so corre se nao houve excepcao
        return result
    finally:
        # corre sempre (cleanup)
        print("Done")

# Excecoes customizadas
class DataValidationError(Exception):
    """Raised when input data fails validation."""
    def __init__(self, field: str, message: str):
        self.field = field
        super().__init__(f"[{field}] {message}")

raise DataValidationError("age", "must be positive")

# Re-raise com contexto
try:
    int("abc")
except ValueError as e:
    raise RuntimeError("Config parsing failed") from e

# Logging vs print
import logging
logging.basicConfig(level=logging.WARNING)
logger = logging.getLogger(__name__)

try:
    risky_operation()
except Exception:
    logger.exception("Unexpected error")  # stack trace automatico

# contextlib.suppress
from contextlib import suppress
with suppress(FileNotFoundError):
    os.remove("may_not_exist.tmp")`}</div>
        <div style={S.note}>
          Use <code>logging.exception()</code> dentro de blocos except &#8212; captura o stack trace
          automaticamente. N&#227;o use <code>print()</code> para erros em produ&#231;&#227;o.
        </div>
      </div>

      <hr style={S.divider} />

      {/* 7. Metaprogramacao */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Metaprograma&#231;&#227;o</h2>
        <p style={S.p}>
          Metaprograma&#231;&#227;o permite que c&#243;digo inspect e modifique outros c&#243;digos em runtime.
          Python expoe hooks como <code>__getattr__</code>, descriptors, metaclasses e
          {' '}<code>__init_subclass__</code>.
        </p>
        <div style={S.code}>{`# __getattr__ / __setattr__ / __getattribute__
class DotDict:
    def __init__(self, data):
        object.__setattr__(self, '_data', data)

    def __getattr__(self, name):
        try:
            return self._data[name]
        except KeyError:
            raise AttributeError(name)

    def __setattr__(self, name, value):
        self._data[name] = value

d = DotDict({"x": 1, "y": 2})
print(d.x)   # 1
d.z = 3

# Descriptor protocol
class Validated:
    def __set_name__(self, owner, name):
        self.name = name

    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        return obj.__dict__.get(self.name)

    def __set__(self, obj, value):
        if not isinstance(value, int) or value < 0:
            raise ValueError(f"{self.name} must be non-negative int")
        obj.__dict__[self.name] = value

class Person:
    age = Validated()

p = Person()
p.age = 25  # OK
p.age = -1  # ValueError

# Metaclasse
class SingletonMeta(type):
    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Config(metaclass=SingletonMeta):
    pass

# __init_subclass__ — hook em subclasses
class Plugin:
    _registry = {}
    def __init_subclass__(cls, name=None, **kwargs):
        super().__init_subclass__(**kwargs)
        Plugin._registry[name or cls.__name__] = cls

class CSVPlugin(Plugin, name="csv"):
    pass`}</div>
        <div style={S.note}>
          Metaclasses e descriptors s&#227;o usados em ORMs (SQLAlchemy), frameworks web (Django models)
          e ferramentas como <code>dataclasses</code>. Use com parcim&#243;nia &#8212; o c&#243;digo
          simples &#233; prefer&#237;vel.
        </div>
      </div>

      <hr style={S.divider} />

      {/* 8. Packaging */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Packaging e Distribui&#231;&#227;o</h2>
        <p style={S.p}>
          O <code>pyproject.toml</code> (PEP 517/518) &#233; o standard moderno para metadados,
          depend&#234;ncias e configura&#231;&#227;o de ferramentas. A estrutura <em>src layout</em>
          evita importar c&#243;digo n&#227;o instalado acidentalmente.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={S.svgBox}>
            <PackageStructureSVG />
          </div>
          <div style={S.svgBox}>
            <SemanticVersionSVG />
          </div>
        </div>
        <div style={S.code}>{`# pyproject.toml (modern standard)
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "my-ds-package"
version = "1.0.0"
description = "Data Science utilities"
readme = "README.md"
requires-python = ">=3.10"
dependencies = [
    "numpy>=1.24",
    "pandas>=2.0",
]

[project.optional-dependencies]
dev = ["pytest", "mypy", "ruff", "twine"]

[tool.ruff]
line-length = 88
select = ["E", "F", "I"]

[tool.mypy]
strict = true

# Comandos
# pip install -e .          instalar em modo editable
# python -m build           criar .whl e .tar.gz
# twine upload dist/*       publicar no PyPI

# Ambientes virtuais
# python -m venv .venv      stdlib
# conda create -n myenv     Anaconda
# poetry new myproject      Poetry (mais automatizado)`}</div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Ferramenta</th>
              <th style={S.th}>Prop&#243;sito</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['pip install -e .', 'Instalar em modo editable (desenvolvimento)'],
              ['python -m build', 'Construir distribuicao (.whl + .tar.gz)'],
              ['mypy src/', 'Verificacao estatica de tipos'],
              ['ruff check .', 'Linting rapido (substitui flake8 + isort)'],
              ['pytest tests/', 'Correr testes unitarios'],
              ['twine upload dist/*', 'Publicar no PyPI'],
            ].map(([cmd, desc]) => (
              <tr key={cmd}>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{cmd}</td>
                <td style={S.td}>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* 9. Testing */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Testing</h2>
        <p style={S.p}>
          <code>pytest</code> &#233; o framework de testes mais popular em Python. Suporta
          descoberta autom&#225;tica, fixtures, parametrize e marks. TDD (Test-Driven Development)
          usa o ciclo Red &#8594; Green &#8594; Refactor.
        </p>
        <div style={S.svgBox}>
          <TDDCycleSVG />
        </div>
        <div style={S.code}>{`# pytest: test_math.py
import pytest
from mypackage.math_utils import add, divide

# Teste basico
def test_add():
    assert add(2, 3) == 5

# Parametrize — varios casos num teste
@pytest.mark.parametrize("a,b,expected", [
    (1, 2, 3),
    (-1, 1, 0),
    (0, 0, 0),
])
def test_add_param(a, b, expected):
    assert add(a, b) == expected

# Fixtures — setup/teardown reutilizavel
@pytest.fixture
def sample_data():
    return [1.0, 2.0, 3.0, 4.0, 5.0]

def test_mean(sample_data):
    assert sum(sample_data) / len(sample_data) == 3.0

# Testar excecoes
def test_divide_by_zero():
    with pytest.raises(ValueError, match="zero"):
        divide(10, 0)

# Mocking
from unittest.mock import patch, MagicMock

def test_fetch_user():
    with patch("mypackage.api.requests.get") as mock_get:
        mock_get.return_value.json.return_value = {"id": 1, "name": "Alice"}
        result = fetch_user(1)
    assert result["name"] == "Alice"
    mock_get.assert_called_once()

# Coverage: pytest --cov=src --cov-report=html
# Property-based testing
from hypothesis import given, strategies as st

@given(st.lists(st.floats(allow_nan=False, allow_infinity=False), min_size=1))
def test_mean_in_range(data):
    m = sum(data) / len(data)
    assert min(data) <= m <= max(data)`}</div>
        <div style={S.note}>
          Corre <code>pytest --cov=src --cov-report=term-missing</code> para ver que linhas
          n&#227;o est&#227;o cobertas por testes. Objectivo: {'>'} 80% de coverage.
        </div>
      </div>

      <hr style={S.divider} />

      {/* 10. Performance e Profiling */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Performance e Profiling</h2>
        <p style={S.p}>
          <em>Premature optimization is the root of all evil</em> (Knuth). Primeiro medir com
          profiling, depois optimizar apenas os hot spots. Ferramentas: <code>cProfile</code>,
          <code>line_profiler</code>, <code>memory_profiler</code>.
        </p>
        <div style={S.svgBox}>
          <FlameGraphSVG />
        </div>
        <div style={S.code}>{`# cProfile — profiling de funcoes
import cProfile
import pstats

with cProfile.Profile() as pr:
    result = my_heavy_function()

stats = pstats.Stats(pr)
stats.sort_stats("cumulative")
stats.print_stats(10)  # top 10 funcoes

# timeit — benchmark preciso
import timeit
t = timeit.timeit("sum(range(1000))", number=10_000)
print(f"10k runs: {t:.3f}s")

# line_profiler (pip install line-profiler)
# @profile decorator, correr: kernprof -l -v script.py

# memory_profiler (pip install memory-profiler)
# @profile decorator, correr: python -m memory_profiler script.py

# Numba — JIT para calculos numericos
from numba import jit
import numpy as np

@jit(nopython=True)
def numba_sum(arr):
    total = 0.0
    for x in arr:
        total += x
    return total

arr = np.random.rand(1_000_000)
numba_sum(arr)  # compila na 1a chamada, muito mais rapido depois

# Cython — compilar para C
# Em .pyx:
# def cython_sum(double[:] arr):
#     cdef double total = 0
#     for x in arr:
#         total += x
#     return total`}</div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>T&#233;cnica</th>
              <th style={S.th}>Ganho tipico</th>
              <th style={S.th}>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['NumPy vectorization', '10-100x vs Python puro', 'arrays numericos'],
              ['Numba @jit', '100-1000x', 'loops numericos intensivos'],
              ['Cython', '50-500x', 'hot loops com tipos C'],
              ['lru_cache', 'proporcional a repeticoes', 'funcoes puras com argumentos repetidos'],
              ['asyncio', 'escala I/O', 'muitas operacoes I/O concorrentes'],
              ['multiprocessing', 'N nucleos', 'CPU-bound sem GIL'],
            ].map(([t, g, w]) => (
              <tr key={t}>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{t}</td>
                <td style={S.td}>{g}</td>
                <td style={S.td}>{w}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* 11. Boas Praticas */}
      <div style={S.section}>
        <h2 style={S.h2}>11. Boas Pr&#225;ticas &#8212; PEP 8 e Beyond</h2>
        <p style={S.p}>
          PEP 8 define o style guide oficial do Python. Ferramentas autom&#225;ticas como
          {' '}<code>black</code> formatam o c&#243;digo, <code>isort</code> ordena imports,
          <code>flake8</code>/<code>ruff</code> detectam problemas de estilo e <code>mypy</code>
          verifica tipos.
        </p>
        <div style={S.svgBox}>
          <CIPipelineSVG />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Conven&#231;&#227;o</th>
              <th style={S.th}>Uso</th>
              <th style={S.th}>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['snake_case', 'variables, funcoes, modulos', 'user_name, get_data()'],
              ['PascalCase', 'classes', 'DataProcessor, UserModel'],
              ['UPPER_CASE', 'constantes', 'MAX_RETRIES, DEFAULT_TIMEOUT'],
              ['_privado', 'atributo privado (convencao)', '_internal_state'],
              ['__dunder__', 'metodos especiais', '__init__, __repr__'],
              ['_leading', 'modulo-privado (nao exportado)', '_helper_function'],
            ].map(([conv, uso, ex]) => (
              <tr key={conv}>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{conv}</td>
                <td style={S.td}>{uso}</td>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{ex}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.code}>{`# black — formatador opinionado (88 caracteres)
# pip install black
# black src/ tests/

# isort — ordenar imports
# pip install isort
# isort src/

# ruff — linting ultra-rapido (substitui flake8 + isort)
# pip install ruff
# ruff check .
# ruff format .

# mypy — verificacao de tipos
# pip install mypy
# mypy --strict src/

# pre-commit — executar automaticamente antes de cada commit
# .pre-commit-config.yaml:
# repos:
#   - repo: https://github.com/psf/black
#     hooks: [{id: black}]
#   - repo: https://github.com/astral-sh/ruff-pre-commit
#     hooks: [{id: ruff}]`}</div>
        <div style={S.highlight}>
          <p style={S.p}><strong>Code Review Checklist:</strong></p>
          <p style={S.p}>&#10003; Funcoes com uma responsabilidade clara (SRP)</p>
          <p style={S.p}>&#10003; Nomes descritivos (sem x, temp, data gen&#233;ricos)</p>
          <p style={S.p}>&#10003; Type hints em todas as fun&#231;&#245;es p&#250;blicas</p>
          <p style={S.p}>&#10003; Testes para casos normais, edge cases e erros</p>
          <p style={S.p}>&#10003; Sem c&#243;digo morto (unused imports, variables)</p>
          <p style={{ ...S.p, marginBottom: 0 }}>&#10003; Docstring em m&#243;dulos, classes e fun&#231;&#245;es p&#250;blicas</p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* 12. Sintese */}
      <div style={S.section}>
        <h2 style={S.h2}>12. S&#237;ntese do Módulo</h2>
        <div style={S.svgBox}>
          <LearningPathSVG />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>T&#243;pico</th>
              <th style={S.th}>Quando usar</th>
              <th style={S.th}>Alternativa simples</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Generators', 'dados grandes, streaming', 'list comprehension'],
              ['Context managers', 'recursos que precisam de cleanup', 'try/finally manual'],
              ['Threading', 'I/O concorrente simples', 'sequencial se pouco I/O'],
              ['Asyncio', 'alta concorrencia I/O (1000+)', 'threading para poucos'],
              ['Multiprocessing', 'CPU-bound paralelo', 'numpy vectorization'],
              ['Type hints + mypy', 'codebases grandes, APIs publicas', 'comentarios de tipo'],
              ['Metaclasses', 'frameworks, ORMs', 'decorators de classe'],
              ['Profiling', 'antes de qualquer optimizacao', 'timeit para micro-bench'],
              ['pytest', 'sempre', 'unittest (mais verbose)'],
              ['pyproject.toml', 'qualquer pacote distribuivel', 'setup.py (legacy)'],
            ].map(([t, w, a]) => (
              <tr key={t}>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{t}</td>
                <td style={S.td}>{w}</td>
                <td style={S.td}>{a}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.highlight}>
          <p style={S.p}><strong>Generators:</strong> lazy, mem&#243;ria O(1), ideal para pipelines de dados.</p>
          <p style={S.p}><strong>Context managers:</strong> garantia de cleanup; usar contextlib.contextmanager.</p>
          <p style={S.p}><strong>Asyncio:</strong> event loop single-thread para alta concorr&#234;ncia I/O.</p>
          <p style={S.p}><strong>Type hints:</strong> Optional, Union, Generic, Protocol; verificar com mypy.</p>
          <p style={S.p}><strong>Error handling:</strong> exce&#231;&#245;es custom, logging, raise from, suppress.</p>
          <p style={S.p}><strong>Metaprograma&#231;&#227;o:</strong> descriptors e metaclasses para frameworks.</p>
          <p style={S.p}><strong>Packaging:</strong> pyproject.toml + src layout + twine para PyPI.</p>
          <p style={S.p}><strong>Testing:</strong> pytest, fixtures, parametrize, mock, hypothesis, coverage.</p>
          <p style={S.p}><strong>Performance:</strong> medir primeiro (cProfile), depois Numba/Cython se necess&#225;rio.</p>
          <p style={{ ...S.p, marginBottom: 0 }}><strong>Boas pr&#225;ticas:</strong> black + ruff + mypy no CI; nomes descritivos; SRP.</p>
        </div>
      </div>
        </div>
  );
}
