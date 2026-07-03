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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

function EcosystemWheel() {
  const cx = 290;
  const cy = 270;
  const r = 185;
  const libs = [
    { name: 'NumPy', angle: -90 },
    { name: 'Pandas', angle: -45 },
    { name: 'Matplotlib', angle: 0 },
    { name: 'Scikit-learn', angle: 45 },
    { name: 'SciPy', angle: 90 },
    { name: 'TensorFlow', angle: 135 },
    { name: 'Django', angle: 180 },
    { name: 'FastAPI', angle: 225 },
  ];
  return (
    <svg viewBox="0 0 580 540" style={{ width: '100%', maxWidth: 560, display: 'block', margin: '0 auto' }}>
      {libs.map((lib) => {
        const rad = (lib.angle * Math.PI) / 180;
        const x2 = cx + r * Math.cos(rad);
        const y2 = cy + r * Math.sin(rad);
        const parts = lib.name.split('-');
        return (
          <g key={lib.name}>
            <line x1={cx + 52 * Math.cos(rad)} y1={cy + 52 * Math.sin(rad)} x2={x2 - 38 * Math.cos(rad)} y2={y2 - 38 * Math.sin(rad)} stroke={color} strokeWidth={1.5} strokeDasharray="4 3" opacity={0.5} />
            <circle cx={x2} cy={y2} r={38} fill={color} fillOpacity={0.15} stroke={color} strokeWidth={1.5} />
            {parts.length === 1
              ? <text x={x2} y={y2} textAnchor="middle" dominantBaseline="middle" fontSize={12} fill={color} fontWeight={700}>{lib.name}</text>
              : <>
                  <text x={x2} y={y2 - 7} textAnchor="middle" dominantBaseline="middle" fontSize={11} fill={color} fontWeight={700}>{parts[0]}</text>
                  <text x={x2} y={y2 + 8} textAnchor="middle" dominantBaseline="middle" fontSize={11} fill={color} fontWeight={700}>{parts[1]}</text>
                </>
            }
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={52} fill={color} fillOpacity={0.18} stroke={color} strokeWidth={2.5} />
      <text x={cx} y={cy - 8} textAnchor="middle" fontSize={16} fontWeight={800} fill={color}>Python</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">ecossistema</text>
    </svg>
  );
}

function TIOBEChart() {
  const langs = [
    { name: 'Python', pct: 29.9 },
    { name: 'C', pct: 20.8 },
    { name: 'Java', pct: 18.4 },
    { name: 'JavaScript', pct: 16.2 },
    { name: 'C++', pct: 13.1 },
    { name: 'R', pct: 4.7 },
  ];
  const maxPct = 30;
  const barW = 340;
  return (
    <svg viewBox="0 0 520 200" style={{ width: '100%', maxWidth: 520, display: 'block', margin: '0 auto' }}>
      <text x={10} y={18} fontSize={11} fontWeight={700} fill="var(--text-secondary)">TIOBE Index — Quota de Mercado (%)</text>
      {langs.map((lang, i) => {
        const y = 32 + i * 26;
        const w = (lang.pct / maxPct) * barW;
        const isTop = i === 0;
        return (
          <g key={lang.name}>
            <text x={10} y={y + 13} fontSize={11} fill="var(--text-primary)" fontWeight={isTop ? 700 : 400}>{lang.name}</text>
            <rect x={100} y={y + 2} width={w} height={16} rx={4} fill={isTop ? color : 'var(--card-border)'} fillOpacity={isTop ? 1 : 0.7} />
            <text x={100 + w + 6} y={y + 13} fontSize={10} fill={isTop ? color : 'var(--text-secondary)'} fontWeight={isTop ? 700 : 400}>{lang.pct}{'%'}</text>
          </g>
        );
      })}
    </svg>
  );
}

function MemoryModelSVG() {
  return (
    <svg viewBox="0 0 560 200" style={{ width: '100%', maxWidth: 560, display: 'block', margin: '0 auto' }}>
      <rect x={20} y={60} width={110} height={80} rx={10} fill={color} fillOpacity={0.18} stroke={color} strokeWidth={2} />
      <text x={75} y={96} textAnchor="middle" fontSize={13} fontWeight={800} fill={color}>CPU</text>
      <text x={75} y={114} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">latência ~1 ns</text>

      <rect x={210} y={50} width={130} height={100} rx={10} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={2} />
      <text x={275} y={92} textAnchor="middle" fontSize={13} fontWeight={800} fill="var(--text-primary)">RAM</text>
      <text x={275} y={110} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">volátil · ~100 ns</text>
      <text x={275} y={125} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">8–64 GB típico</text>

      <rect x={420} y={35} width={120} height={130} rx={10} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={2} />
      <text x={480} y={85} textAnchor="middle" fontSize={11} fontWeight={800} fill="var(--text-primary)">SSD / HDD</text>
      <text x={480} y={103} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">persistente</text>
      <text x={480} y={118} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">SSD ~100 µs</text>
      <text x={480} y={133} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">HDD ~10 ms</text>

      <line x1={130} y1={100} x2={210} y2={100} stroke={color} strokeWidth={2} fill="none" />
      <polygon points="204,96 214,100 204,104" fill={color} />
      <text x={170} y={90} textAnchor="middle" fontSize={9} fill={color}>bus</text>

      <line x1={340} y1={100} x2={420} y2={100} stroke="var(--text-secondary)" strokeWidth={2} fill="none" />
      <polygon points="414,96 424,100 414,104" fill="var(--text-secondary)" />
      <text x={380} y={90} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">I/O</text>
    </svg>
  );
}

function NamespaceSVG() {
  return (
    <svg viewBox="0 0 480 200" style={{ width: '100%', maxWidth: 480, display: 'block', margin: '0 auto' }}>
      <rect x={20} y={30} width={160} height={140} rx={10} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={2} />
      <text x={100} y={20} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--text-secondary)">NameSpace</text>
      <text x={60} y={75} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>a</text>
      <rect x={75} y={60} width={80} height={24} rx={5} fill={color} fillOpacity={0.12} stroke={color} strokeWidth={1} />
      <text x={115} y={76} textAnchor="middle" fontSize={11} fill="var(--text-primary)">ref → 0x1a2b</text>
      <text x={60} y={115} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--text-secondary)">b</text>
      <rect x={75} y={100} width={80} height={24} rx={5} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={1} />
      <text x={115} y={116} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">ref → 0x3c4d</text>

      <rect x={280} y={30} width={180} height={140} rx={10} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={2} />
      <text x={370} y={20} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--text-secondary)">Heap (Object Space)</text>
      <rect x={300} y={50} width={140} height={40} rx={8} fill={color} fillOpacity={0.15} stroke={color} strokeWidth={1.5} />
      <text x={370} y={67} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>int : 5</text>
      <text x={370} y={82} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">id: 0x1a2b · type: int</text>
      <rect x={300} y={110} width={140} height={40} rx={8} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={1.5} />
      <text x={370} y={127} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text-primary)">str : 'hello'</text>
      <text x={370} y={142} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">id: 0x3c4d · type: str</text>

      <line x1={155} y1={72} x2={298} y2={70} stroke={color} strokeWidth={1.5} fill="none" />
      <polygon points="292,66 302,70 292,74" fill={color} />
      <line x1={155} y1={112} x2={298} y2={130} stroke="var(--text-secondary)" strokeWidth={1.5} fill="none" />
      <polygon points="292,126 302,130 292,134" fill="var(--text-secondary)" />
    </svg>
  );
}

function ExecutionFlowSVG() {
  return (
    <svg viewBox="0 0 560 260" style={{ width: '100%', maxWidth: 560, display: 'block', margin: '0 auto' }}>
      <text x={140} y={18} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>Python</text>
      <text x={420} y={18} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text-secondary)">C / Compilado</text>

      <rect x={20} y={28} width={240} height={30} rx={6} fill={color} fillOpacity={0.12} stroke={color} strokeWidth={1.5} />
      <text x={140} y={48} textAnchor="middle" fontSize={11} fill="var(--text-primary)">Código Fonte (.py)</text>

      <line x1={140} y1={58} x2={140} y2={80} stroke={color} strokeWidth={1.5} fill="none" />
      <polygon points="136,74 140,84 144,74" fill={color} />
      <rect x={20} y={84} width={240} height={30} rx={6} fill={color} fillOpacity={0.08} stroke={color} strokeWidth={1} />
      <text x={140} y={104} textAnchor="middle" fontSize={11} fill="var(--text-primary)">CPython Bytecode (.pyc)</text>

      <line x1={140} y1={114} x2={140} y2={136} stroke={color} strokeWidth={1.5} fill="none" />
      <polygon points="136,130 140,140 144,130" fill={color} />
      <rect x={20} y={140} width={240} height={30} rx={6} fill={color} fillOpacity={0.08} stroke={color} strokeWidth={1} />
      <text x={140} y={160} textAnchor="middle" fontSize={11} fill="var(--text-primary)">PVM (Python Virtual Machine)</text>

      <line x1={140} y1={170} x2={140} y2={192} stroke={color} strokeWidth={1.5} fill="none" />
      <polygon points="136,186 140,196 144,186" fill={color} />
      <rect x={20} y={196} width={240} height={30} rx={6} fill={color} fillOpacity={0.18} stroke={color} strokeWidth={2} />
      <text x={140} y={216} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>Output</text>

      <rect x={300} y={28} width={240} height={30} rx={6} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={1.5} />
      <text x={420} y={48} textAnchor="middle" fontSize={11} fill="var(--text-primary)">Código Fonte (.c)</text>

      <line x1={420} y1={58} x2={420} y2={80} stroke="var(--text-secondary)" strokeWidth={1.5} fill="none" />
      <polygon points="416,74 420,84 424,74" fill="var(--text-secondary)" />
      <rect x={300} y={84} width={240} height={30} rx={6} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={1} />
      <text x={420} y={104} textAnchor="middle" fontSize={11} fill="var(--text-primary)">Compilador (gcc/clang)</text>

      <line x1={420} y1={114} x2={420} y2={136} stroke="var(--text-secondary)" strokeWidth={1.5} fill="none" />
      <polygon points="416,130 420,140 424,130" fill="var(--text-secondary)" />
      <rect x={300} y={140} width={240} height={30} rx={6} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={1} />
      <text x={420} y={160} textAnchor="middle" fontSize={11} fill="var(--text-primary)">Código Máquina (binário nativo)</text>

      <line x1={420} y1={170} x2={420} y2={192} stroke="var(--text-secondary)" strokeWidth={1.5} fill="none" />
      <polygon points="416,186 420,196 424,186" fill="var(--text-secondary)" />
      <rect x={300} y={196} width={240} height={30} rx={6} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={2} />
      <text x={420} y={216} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text-secondary)">Output</text>

      <text x={140} y={255} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Portável, iteração rápida</text>
      <text x={420} y={255} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Muito rápido, dep. de arquitetura</text>
    </svg>
  );
}

function JupyterCellsSVG() {
  const cells = [
    { type: 'Code', content: 'import pandas as pd', out: null },
    { type: 'Code', content: 'df = pd.read_csv("data.csv")', out: null },
    { type: 'Code', content: 'df.head()', out: '[output table]' },
    { type: 'Markdown', content: '## Análise Exploratória', out: null },
  ];
  return (
    <svg viewBox="0 0 500 310" style={{ width: '100%', maxWidth: 500, display: 'block', margin: '0 auto' }}>
      <rect x={390} y={20} width={100} height={260} rx={10} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={1.5} />
      <text x={440} y={40} textAnchor="middle" fontSize={10} fontWeight={700} fill="var(--text-secondary)">Kernel</text>
      <circle cx={440} cy={60} r={8} fill="#f97316" />
      <text x={440} y={64} textAnchor="middle" fontSize={8} fill="#fff">ON</text>
      <text x={440} y={90} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">Python 3</text>
      <text x={440} y={105} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">IPython</text>
      <text x={440} y={200} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">RAM</text>
      <rect x={415} y={210} width={50} height={30} rx={4} fill={color} fillOpacity={0.2} stroke={color} strokeWidth={1} />
      <text x={440} y={230} textAnchor="middle" fontSize={8} fill={color}>namespace</text>

      {cells.map((cell, i) => {
        const y = 20 + i * 68;
        const isCode = cell.type === 'Code';
        return (
          <g key={i}>
            <rect x={10} y={y} width={360} height={cell.out ? 56 : 44} rx={6}
              fill={isCode ? 'var(--bg-secondary)' : 'rgba(249,115,22,0.05)'}
              stroke={isCode ? 'var(--card-border)' : color}
              strokeWidth={1.5} />
            <rect x={10} y={y} width={46} height={isCode ? (cell.out ? 56 : 44) : 20} rx={6}
              fill={isCode ? color : color} fillOpacity={0.15} />
            <text x={33} y={y + 16} textAnchor="middle" fontSize={9} fontWeight={700} fill={color}>{cell.type}</text>
            <text x={68} y={y + 18} fontSize={10} fontFamily="monospace" fill="var(--text-primary)">{cell.content}</text>
            {cell.out && (
              <text x={68} y={y + 38} fontSize={9} fontFamily="monospace" fill={color}>{cell.out}</text>
            )}
            <line x1={375} y1={y + 22} x2={390} y2={y + 22} stroke={color} strokeWidth={1} strokeDasharray="3 2" fill="none" />
            <polygon points={`385,${y + 19} 393,${y + 22} 385,${y + 25}`} fill={color} fillOpacity={0.4} />
          </g>
        );
      })}
    </svg>
  );
}

function DirectoryTreeSVG() {
  const items = [
    { label: '/', depth: 0, isDir: true },
    { label: 'home/', depth: 1, isDir: true },
    { label: 'user/', depth: 2, isDir: true },
    { label: 'projeto/', depth: 3, isDir: true },
    { label: 'data.csv', depth: 4, isDir: false },
    { label: 'notebook.ipynb', depth: 4, isDir: false },
    { label: 'src/', depth: 4, isDir: true },
    { label: 'main.py', depth: 5, isDir: false },
    { label: 'utils.py', depth: 5, isDir: false },
    { label: 'etc/', depth: 1, isDir: true },
    { label: 'usr/', depth: 1, isDir: true },
  ];
  return (
    <svg viewBox="0 0 400 300" style={{ width: '100%', maxWidth: 400, display: 'block', margin: '0 auto' }}>
      {items.map((item, i) => {
        const x = 20 + item.depth * 28;
        const y = 24 + i * 24;
        return (
          <g key={i}>
            {item.depth > 0 && (
              <line x1={x - 14} y1={y - 12} x2={x - 14} y2={y + 4} stroke="var(--text-secondary)" strokeWidth={1.5} fill="none" />
            )}
            {item.depth > 0 && (
              <line x1={x - 14} y1={y + 4} x2={x + 2} y2={y + 4} stroke="var(--text-secondary)" strokeWidth={1.5} fill="none" />
            )}
            <text x={x + 6} y={y + 8} fontSize={12} fontFamily="monospace"
              fill={item.isDir ? color : 'var(--text-primary)'}
              fontWeight={item.isDir ? 700 : 400}>
              {item.isDir ? '📁 ' : '📄 '}{item.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function ErrorTypesSVG() {
  const panels = [
    { title: 'SyntaxError', subtitle: 'Parse time', color2: '#f97316', example: 'print "hello"', desc: 'Detectado antes\nde executar' },
    { title: 'RuntimeError', subtitle: 'Execution time', color2: '#f97316', example: '1 / 0', desc: 'Traceback durante\na execução' },
    { title: 'SemanticError', subtitle: 'Logic error', color2: '#f97316', example: 'if x > 0:', desc: 'Corre sem erros\nmas resultado errado' },
  ];
  return (
    <svg viewBox="0 0 540 190" style={{ width: '100%', maxWidth: 540, display: 'block', margin: '0 auto' }}>
      {panels.map((p, i) => {
        const x = 14 + i * 176;
        return (
          <g key={p.title}>
            <rect x={x} y={10} width={162} height={170} rx={10} fill="var(--bg-secondary)" stroke={p.color2} strokeWidth={2} />
            <rect x={x} y={10} width={162} height={36} rx={10} fill={p.color2} fillOpacity={0.2} />
            <text x={x + 81} y={30} textAnchor="middle" fontSize={12} fontWeight={800} fill={p.color2}>{p.title}</text>
            <text x={x + 81} y={44} textAnchor="middle" fontSize={9} fill={p.color2}>{p.subtitle}</text>
            <rect x={x + 10} y={58} width={142} height={38} rx={6} fill={p.color2} fillOpacity={0.08} stroke={p.color2} strokeWidth={1} />
            <text x={x + 81} y={74} textAnchor="middle" fontSize={10} fontFamily="monospace" fill={p.color2}>{p.example}</text>
            <text x={x + 81} y={88} textAnchor="middle" fontSize={9} fontFamily="monospace" fill="var(--text-secondary)">↑ exemplo</text>
            {p.desc.split('\n').map((line, j) => (
              <text key={j} x={x + 81} y={118 + j * 18} textAnchor="middle" fontSize={10} fill="var(--text-primary)">{line}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

function VenvDiagramSVG() {
  return (
    <svg viewBox="0 0 540 240" style={{ width: '100%', maxWidth: 540, display: 'block', margin: '0 auto' }}>
      <rect x={10} y={10} width={240} height={210} rx={12} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={2} />
      <text x={130} y={32} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--text-secondary)">Sistema (global)</text>
      <rect x={25} y={44} width={210} height={36} rx={7} fill="var(--text-secondary)" fillOpacity={0.4} />
      <text x={130} y={68} textAnchor="middle" fontSize={11} fill="var(--text-primary)">Python 3.11</text>
      <rect x={25} y={90} width={210} height={28} rx={7} fill="var(--text-secondary)" fillOpacity={0.4} />
      <text x={130} y={108} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">numpy 1.23 (global)</text>
      <rect x={25} y={124} width={210} height={28} rx={7} fill="var(--text-secondary)" fillOpacity={0.4} />
      <text x={130} y={142} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">pandas 1.4 (global)</text>

      <rect x={290} y={10} width={240} height={210} rx={12} fill="rgba(249,115,22,0.05)" stroke={color} strokeWidth={2} />
      <text x={410} y={32} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>venv (isolado)</text>
      <rect x={305} y={44} width={210} height={36} rx={7} fill={color} fillOpacity={0.12} stroke={color} strokeWidth={1} />
      <text x={410} y={68} textAnchor="middle" fontSize={11} fill={color}>Python 3.11 (cópia)</text>
      <rect x={305} y={90} width={210} height={28} rx={7} fill={color} fillOpacity={0.08} />
      <text x={410} y={108} textAnchor="middle" fontSize={10} fill="var(--text-primary)">numpy 2.0 (venv)</text>
      <rect x={305} y={124} width={210} height={28} rx={7} fill={color} fillOpacity={0.08} />
      <text x={410} y={142} textAnchor="middle" fontSize={10} fill="var(--text-primary)">scikit-learn 1.4</text>
      <rect x={305} y={158} width={210} height={28} rx={7} fill={color} fillOpacity={0.08} />
      <text x={410} y={176} textAnchor="middle" fontSize={10} fill="var(--text-primary)">fastapi 0.111</text>
      <text x={410} y={208} textAnchor="middle" fontSize={9} fill={color}>pip install → apenas aqui</text>

      <line x1={250} y1={120} x2={290} y2={120} stroke={color} strokeWidth={1.5} strokeDasharray="5 3" fill="none" />
      <text x={270} y={113} textAnchor="middle" fontSize={9} fill={color}>isolado</text>
    </svg>
  );
}

export default function PfDS1() {
  return (
    <div style={S.page}>
      <Link to="/pfds" style={S.back}><ArrowLeft size={16} /> Voltar a Programming for Data Science</Link>

      <span style={S.tag}>MÓDULO 01</span>
      <h1 style={S.h1}>Python Foundations</h1>
      <p style={S.lead}>
        Uma introdução ao ecossistema Python — porque é a linguagem de eleição em Data Science,
        como o computador executa programas, as ferramentas essenciais do ambiente de trabalho
        e os alicerces conceptuais que tornam Python única.
      </p>

      {/* ── 1. PORQUÊ PYTHON ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Porquê Python?</h2>
        <p style={S.p}>
          Python foi criado por <strong>Guido van Rossum</strong> em 1989, lançado publicamente em 1991,
          e o nome vem do grupo de comédia britânico <em>Monty Python</em> — não da serpente.
          Guido queria uma linguagem que priorizasse a legibilidade do código e reduzisse o custo
          cognitivo de aprender a programar. Esse objetivo está explícito no <em>Zen of Python</em>:
          "Readability counts."
        </p>
        <p style={S.p}>
          Hoje, Python é sistematicamente classificado como a linguagem mais popular do mundo
          no índice TIOBE, no Stack Overflow Developer Survey e no GitHub. Em Data Science,
          ocupa uma posição quase hegemónica graças a três fatores: <strong>legibilidade</strong>,
          <strong> ecossistema</strong> e <strong>comunidade</strong>.
        </p>

        <h3 style={S.h3}>Ecossistema Python para Data Science</h3>
        <div style={S.diagram}>
          <EcosystemWheel />
        </div>

        <div style={S.highlight}>
          <strong>Legibilidade</strong> — a sintaxe aproxima-se do inglês corrente; a indentação
          obrigatória força estrutura visual consistente. Um programador experiente em Java consegue
          ler Python mesmo sem o ter aprendido.
        </div>
        <div style={S.highlight}>
          <strong>Ecossistema</strong> — o PyPI (Python Package Index) tem mais de 500 000 pacotes.
          NumPy e SciPy cobrem computação numérica; Pandas cobre manipulação de dados tabulares;
          Matplotlib e Seaborn cobrem visualização; Scikit-learn cobre machine learning clássico;
          TensorFlow e PyTorch cobrem deep learning; Django e FastAPI cobrem desenvolvimento web.
        </div>
        <div style={S.highlight}>
          <strong>Comunidade</strong> — uma das maiores comunidades open-source do mundo. A PyCon
          realiza-se em dezenas de países. Stack Overflow mostra Python como uma das linguagens
          com mais perguntas e respostas ativas.
        </div>

        <h3 style={S.h3}>TIOBE Index — Popularidade Relativa</h3>
        <div style={S.diagram}>
          <TIOBEChart />
        </div>
        <div style={S.note}>
          Os valores TIOBE são estimativas baseadas em pesquisas nos motores de busca. Python
          ultrapassou Java em 2022 e consolidou-se no topo. R, apesar de ser popular em estatística
          académica, tem uma quota muito menor que Python no uso geral.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 2. COMO O COMPUTADOR FUNCIONA ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Como o Computador Funciona</h2>
        <p style={S.p}>
          Para escrever programas eficientes — e sobretudo para perceber por que razão um programa
          é lento ou consome muita memória — é fundamental compreender o hardware que o executa.
          Um computador tem três componentes principais que interagem continuamente.
        </p>

        <h3 style={S.h3}>Hierarquia de Memória</h3>
        <div style={S.diagram}>
          <MemoryModelSVG />
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Componente</th>
              <th style={S.th}>Função</th>
              <th style={S.th}>Latência</th>
              <th style={S.th}>Persistência</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>CPU</strong></td>
              <td style={S.td}>Executa instruções aritméticas e lógicas. Contém registos (memória ultra-rápida) e cache L1/L2/L3.</td>
              <td style={S.td}>~1 ns</td>
              <td style={S.td}>Volátil</td>
            </tr>
            <tr>
              <td style={S.td}><strong>RAM</strong></td>
              <td style={S.td}>Armazena programas em execução e os seus dados. Todo o código Python e variáveis vivem aqui.</td>
              <td style={S.td}>~100 ns</td>
              <td style={S.td}>Volátil</td>
            </tr>
            <tr>
              <td style={S.td}><strong>SSD</strong></td>
              <td style={S.td}>Armazenamento persistente baseado em flash. Guarda ficheiros, bases de dados, notebooks.</td>
              <td style={S.td}>~100 µs</td>
              <td style={S.td}>Persistente</td>
            </tr>
            <tr>
              <td style={S.td}><strong>HDD</strong></td>
              <td style={S.td}>Armazenamento magnético de grande capacidade. Mais lento que SSD mas mais barato por GB.</td>
              <td style={S.td}>~10 ms</td>
              <td style={S.td}>Persistente</td>
            </tr>
          </tbody>
        </table>

        <p style={S.p}>
          A diferença de latência importa em Data Science: ler um ficheiro CSV de 1 GB do disco
          pode demorar segundos; o mesmo DataFrame em memória RAM é acedido em microssegundos.
          É por isso que Pandas carrega os dados para a RAM antes de os processar.
        </p>

        <h3 style={S.h3}>NameSpace e Object Space em Python</h3>
        <p style={S.p}>
          Quando escreves <code>a = 5</code>, Python não guarda o valor 5 diretamente na variável.
          Em vez disso, cria um <strong>objeto</strong> do tipo <code>int</code> com valor 5 no heap
          (Object Space) e regista na tabela de nomes (NameSpace) que o nome <code>a</code> aponta
          para esse objeto. Isto explica comportamentos como:
        </p>
        <div style={S.diagram}>
          <NamespaceSVG />
        </div>
        <div style={S.code}>{`a = 5
b = a        # b aponta para o MESMO objeto 5
print(id(a) == id(b))  # True

a = 10       # a passa a apontar para um novo objeto 10
print(b)     # b continua a ser 5 — não mudou!`}</div>
        <div style={S.note}>
          Tudo em Python é um objeto — números, strings, listas, funções e até módulos e classes
          são instâncias com identidade única (id), tipo e valor. A função <code>id(x)</code>
          devolve o endereço de memória do objeto.
        </div>
        <p style={S.p}>
          A informação é armazenada em binário (base 2). O <strong>bit</strong> é a unidade mínima
          (0 ou 1); 8 bits formam 1 <strong>byte</strong>. Um inteiro de 64 bits ocupa 8 bytes;
          em Python, um objeto <code>int</code> ocupa tipicamente 28 bytes porque inclui metadados
          (tipo, referência, contagem de referências para garbage collection).
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 3. INTERPRETADO VS COMPILADO ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Interpretado vs Compilado</h2>
        <p style={S.p}>
          Existem duas grandes abordagens para transformar código fonte em instruções que a CPU
          consegue executar. Compreender a diferença ajuda a perceber as escolhas de design do Python
          e quando outras linguagens são mais adequadas.
        </p>

        <div style={S.diagram}>
          <ExecutionFlowSVG />
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Aspeto</th>
              <th style={S.th}>Interpretado (Python)</th>
              <th style={S.th}>Compilado (C / C++)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Execução</td>
              <td style={S.td}>Linha a linha pelo interpretador em runtime</td>
              <td style={S.td}>Compilado para binário nativo antes da execução</td>
            </tr>
            <tr>
              <td style={S.td}>Velocidade</td>
              <td style={S.td}>10–100x mais lento que C nativo</td>
              <td style={S.td}>Máximo desempenho — acesso direto ao hardware</td>
            </tr>
            <tr>
              <td style={S.td}>Portabilidade</td>
              <td style={S.td}>Corre em qualquer SO com Python instalado</td>
              <td style={S.td}>Binário dependente da arquitetura (x86, ARM…)</td>
            </tr>
            <tr>
              <td style={S.td}>Ciclo de desenvolvimento</td>
              <td style={S.td}>Iteração rápida, REPL interativo</td>
              <td style={S.td}>Ciclo compilar → linkar → executar</td>
            </tr>
            <tr>
              <td style={S.td}>Deteção de erros</td>
              <td style={S.td}>Erros de tipo detetados em runtime</td>
              <td style={S.td}>Muitos erros detetados em compile time</td>
            </tr>
            <tr>
              <td style={S.td}>Uso típico</td>
              <td style={S.td}>Data Science, scripting, web, automação</td>
              <td style={S.td}>Sistemas operativos, jogos, drivers, embedded</td>
            </tr>
          </tbody>
        </table>

        <div style={S.code}>{`# Python — 1 linha, legível
print("Hello, World!")

// C — requires includes, main function, explicit types
#include <stdio.h>
int main() {
    printf("Hello, World!\\n");
    return 0;
}`}</div>

        <div style={S.note}>
          Em Data Science, a lentidão do Python raramente é um problema real porque as operações
          pesadas (NumPy, Pandas, TensorFlow) são implementadas em C/Fortran sob o capô.
          Python funciona como "cola" que orquestra bibliotecas compiladas de alto desempenho.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 4. BYTECODE E CPYTHON ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Bytecode e CPython</h2>
        <p style={S.p}>
          Python não é puramente interpretado linha a linha. O processo real tem um passo
          intermédio crucial: a compilação para <strong>bytecode</strong>.
        </p>

        <h3 style={S.h3}>Como funciona o CPython</h3>
        <p style={S.p}>
          O <strong>CPython</strong> é a implementação de referência do Python, escrita em C.
          Quando executas um ficheiro <code>.py</code>, o CPython faz duas coisas:
        </p>
        <div style={S.highlight}>
          <strong>1. Compilação para bytecode</strong> — o código fonte é parseado e transformado
          numa representação intermédia chamada bytecode, armazenada em ficheiros <code>.pyc</code>
          dentro da pasta <code>__pycache__/</code>. O bytecode é independente do sistema operativo.
        </div>
        <div style={S.highlight}>
          <strong>2. Execução pelo PVM</strong> — a Python Virtual Machine (PVM) lê e interpreta
          o bytecode instrução a instrução. O PVM é um loop em C que mapeia cada instrução bytecode
          para operações nativas da CPU.
        </div>
        <div style={S.code}>{`# Ver o bytecode de uma função
import dis

def soma(a, b):
    return a + b

dis.dis(soma)
#   2           0 LOAD_FAST                0 (a)
#               2 LOAD_FAST                1 (b)
#               4 BINARY_ADD
#               6 RETURN_VALUE`}</div>

        <h3 style={S.h3}>Ficheiros .pyc e __pycache__</h3>
        <p style={S.p}>
          Na primeira execução de um módulo, o CPython guarda o bytecode compilado em
          <code> __pycache__/modulo.cpython-311.pyc</code>. Nas execuções seguintes, se o ficheiro
          <code> .py</code> não mudou (verificado pelo timestamp), o bytecode é reutilizado,
          acelerando o arranque.
        </p>

        <h3 style={S.h3}>Por que o PyPy é mais rápido?</h3>
        <p style={S.p}>
          O <strong>PyPy</strong> é uma implementação alternativa de Python com um compilador
          <strong> JIT (Just-In-Time)</strong>. Em vez de interpretar o bytecode instrução a instrução,
          o PyPy analisa os padrões de execução em tempo real e compila partes do código para
          código máquina nativo durante a execução. Resultado: PyPy pode ser 5–10x mais rápido
          que CPython em código Python puro. A desvantagem: compatibilidade imperfeita com
          extensões C (como NumPy) e startup mais lento.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Implementação</th>
              <th style={S.th}>Estratégia</th>
              <th style={S.th}>Velocidade</th>
              <th style={S.th}>Compatibilidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>CPython</td>
              <td style={S.td}>Bytecode + PVM</td>
              <td style={S.td}>Referência (1x)</td>
              <td style={S.td}>Total</td>
            </tr>
            <tr>
              <td style={S.td}>PyPy</td>
              <td style={S.td}>JIT compilation</td>
              <td style={S.td}>5–10x mais rápido</td>
              <td style={S.td}>Parcial (C extensions)</td>
            </tr>
            <tr>
              <td style={S.td}>Cython</td>
              <td style={S.td}>Compila Python → C</td>
              <td style={S.td}>Similar a C</td>
              <td style={S.td}>Total (com anotações)</td>
            </tr>
            <tr>
              <td style={S.td}>Numba</td>
              <td style={S.td}>JIT para NumPy</td>
              <td style={S.td}>Similar a C/Fortran</td>
              <td style={S.td}>Subconjunto de Python</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 5. IPYTHON MAGIC COMMANDS ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. IPython e Magic Commands</h2>
        <p style={S.p}>
          O <strong>IPython</strong> (Interactive Python) é um shell Python avançado que fornece
          autocompletar com Tab, historial de comandos, instrospección de objetos e os
          <strong> magic commands</strong> — comandos especiais prefixados com <code>%</code>
          (line magic) ou <code>%%</code> (cell magic). O Jupyter Notebook é construído sobre o
          IPython e usa os mesmos magic commands.
        </p>

        <h3 style={S.h3}>Modelo de Células do Jupyter</h3>
        <div style={S.diagram}>
          <JupyterCellsSVG />
        </div>
        <p style={S.p}>
          Cada célula pode ser do tipo <strong>Code</strong> (Python executável) ou
          <strong> Markdown</strong> (texto formatado, equações LaTeX, imagens). O kernel Python
          mantém o namespace partilhado entre todas as células — uma variável definida numa célula
          fica disponível nas seguintes.
        </p>

        <h3 style={S.h3}>Magic Commands Essenciais</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Comando</th>
              <th style={S.th}>Descrição</th>
              <th style={S.th}>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><code>%timeit</code></td>
              <td style={S.td}>Mede o tempo de execução de uma expressão (média de múltiplas corridas)</td>
              <td style={S.td}><code>%timeit sorted(range(1000))</code></td>
            </tr>
            <tr>
              <td style={S.td}><code>%%timeit</code></td>
              <td style={S.td}>Mede o tempo de execução de toda uma célula</td>
              <td style={S.td}>Primeira linha da célula</td>
            </tr>
            <tr>
              <td style={S.td}><code>%run</code></td>
              <td style={S.td}>Executa um ficheiro .py no namespace atual do IPython</td>
              <td style={S.td}><code>%run script.py</code></td>
            </tr>
            <tr>
              <td style={S.td}><code>%who</code></td>
              <td style={S.td}>Lista os nomes de variáveis definidos no namespace atual</td>
              <td style={S.td}><code>%who</code></td>
            </tr>
            <tr>
              <td style={S.td}><code>%whos</code></td>
              <td style={S.td}>Versão detalhada de %who com tipo e valor de cada variável</td>
              <td style={S.td}><code>%whos</code></td>
            </tr>
            <tr>
              <td style={S.td}><code>%history</code></td>
              <td style={S.td}>Mostra o historial de comandos da sessão</td>
              <td style={S.td}><code>%history -n 1-20</code></td>
            </tr>
            <tr>
              <td style={S.td}><code>%matplotlib inline</code></td>
              <td style={S.td}>Faz com que os gráficos Matplotlib apareçam inline no notebook</td>
              <td style={S.td}>Colocar no início do notebook</td>
            </tr>
            <tr>
              <td style={S.td}><code>%reset</code></td>
              <td style={S.td}>Limpa o namespace atual (apaga todas as variáveis)</td>
              <td style={S.td}><code>%reset -f</code></td>
            </tr>
            <tr>
              <td style={S.td}><code>!comando</code></td>
              <td style={S.td}>Executa um comando shell diretamente do IPython/Jupyter</td>
              <td style={S.td}><code>!ls -la</code> ou <code>!pip list</code></td>
            </tr>
            <tr>
              <td style={S.td}><code>%pwd</code></td>
              <td style={S.td}>Mostra o diretório de trabalho atual</td>
              <td style={S.td}><code>%pwd</code></td>
            </tr>
            <tr>
              <td style={S.td}><code>%cd</code></td>
              <td style={S.td}>Muda o diretório de trabalho (persiste na sessão)</td>
              <td style={S.td}><code>%cd ~/Documents</code></td>
            </tr>
          </tbody>
        </table>

        <div style={S.code}>{`# Exemplo típico no início de um notebook de Data Science
%matplotlib inline

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Ver quanto tempo demora a criar um array grande
%timeit np.zeros((1000, 1000))
# 1.23 ms ± 12.1 µs per loop (mean ± std. dev. of 7 runs, 1000 loops each)

# Ver todas as variáveis atuais com detalhes
%whos
# Variable   Type       Data/Info
# df         DataFrame  ...
# x          ndarray    1000x1000: 1000000 elems...`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 6. SHELL E FILESYSTEM ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Shell e Sistema de Ficheiros</h2>
        <p style={S.p}>
          O terminal (shell) é a interface de linha de comandos que permite interagir diretamente
          com o sistema operativo. Em Data Science, usamos o terminal para gerir projetos, instalar
          pacotes, correr scripts e navegar no sistema de ficheiros. Dominar os comandos básicos
          é uma competência fundamental.
        </p>

        <h3 style={S.h3}>Estrutura em Árvore do Sistema de Ficheiros</h3>
        <div style={S.diagram}>
          <DirectoryTreeSVG />
        </div>

        <p style={S.p}>
          O sistema de ficheiros organiza-se em <strong>árvore</strong>: o diretório raiz
          (<code>/</code> em Unix/macOS, <code>C:\</code> em Windows) contém subdirectórios
          que por sua vez contêm ficheiros e outros subdirectórios. Um <strong>path absoluto</strong>
          começa na raiz (<code>/home/user/projeto</code>); um <strong>path relativo</strong>
          parte do diretório atual (<code>./src/main.py</code>).
        </p>

        <h3 style={S.h3}>Comandos Shell Essenciais</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Comando</th>
              <th style={S.th}>Descrição</th>
              <th style={S.th}>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><code>pwd</code></td>
              <td style={S.td}>Mostra o diretório atual (Print Working Directory)</td>
              <td style={S.td}><code>pwd</code> → <code>/home/user</code></td>
            </tr>
            <tr>
              <td style={S.td}><code>ls</code></td>
              <td style={S.td}>Lista o conteúdo do diretório</td>
              <td style={S.td}><code>ls -la</code> (com detalhes e ocultos)</td>
            </tr>
            <tr>
              <td style={S.td}><code>cd</code></td>
              <td style={S.td}>Muda de diretório</td>
              <td style={S.td}><code>cd projeto/src</code> ou <code>cd ..</code></td>
            </tr>
            <tr>
              <td style={S.td}><code>mkdir</code></td>
              <td style={S.td}>Cria um novo diretório</td>
              <td style={S.td}><code>mkdir -p dados/raw</code></td>
            </tr>
            <tr>
              <td style={S.td}><code>cp</code></td>
              <td style={S.td}>Copia ficheiros ou diretórios</td>
              <td style={S.td}><code>cp dados.csv backup/</code></td>
            </tr>
            <tr>
              <td style={S.td}><code>mv</code></td>
              <td style={S.td}>Move ou renomeia ficheiros</td>
              <td style={S.td}><code>mv old.py new.py</code></td>
            </tr>
            <tr>
              <td style={S.td}><code>rm</code></td>
              <td style={S.td}>Remove ficheiros (irreversível!)</td>
              <td style={S.td}><code>rm -rf pasta/</code></td>
            </tr>
            <tr>
              <td style={S.td}><code>cat</code></td>
              <td style={S.td}>Mostra o conteúdo de um ficheiro</td>
              <td style={S.td}><code>cat requirements.txt</code></td>
            </tr>
            <tr>
              <td style={S.td}><code>grep</code></td>
              <td style={S.td}>Pesquisa padrões de texto em ficheiros</td>
              <td style={S.td}><code>grep "import" *.py</code></td>
            </tr>
            <tr>
              <td style={S.td}><code>|</code> (pipe)</td>
              <td style={S.td}>Encadeia a saída de um comando na entrada do seguinte</td>
              <td style={S.td}><code>ls | grep .csv</code></td>
            </tr>
            <tr>
              <td style={S.td}><code>{'>'}</code> (redirect)</td>
              <td style={S.td}>Redireciona a saída para um ficheiro (sobrescreve)</td>
              <td style={S.td}><code>{'ls > lista.txt'}</code></td>
            </tr>
            <tr>
              <td style={S.td}><code>{'>>'}</code> (append)</td>
              <td style={S.td}>Acrescenta a saída a um ficheiro</td>
              <td style={S.td}><code>{'echo "linha" >> log.txt'}</code></td>
            </tr>
          </tbody>
        </table>

        <div style={S.code}>{`# Fluxo típico: criar estrutura de projeto
$ mkdir -p meu_projeto/{dados,notebooks,src,resultados}
$ cd meu_projeto
$ pwd
/home/user/meu_projeto

$ ls
dados/  notebooks/  resultados/  src/

# Correr um script Python e guardar o output
$ python src/analise.py > resultados/output.txt 2>&1

# Encontrar todos os ficheiros .csv na pasta dados
$ find dados/ -name "*.csv"

# Contar linhas num ficheiro
$ wc -l dados/clientes.csv
1247 dados/clientes.csv`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 7. TIPOS DE ERRO ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Tipos de Erro em Python</h2>
        <p style={S.p}>
          Todos os programadores cometem erros — a questão é saber identificá-los rapidamente.
          Em Python, os erros dividem-se em três categorias fundamentais, cada uma com
          características e estratégias de correção distintas.
        </p>

        <div style={S.diagram}>
          <ErrorTypesSVG />
        </div>

        <h3 style={S.h3}>1. SyntaxError — Erro de Sintaxe</h3>
        <p style={S.p}>
          Ocorre quando o código viola as regras gramaticais do Python. O interpretador
          deteta-o antes de executar qualquer linha — durante a fase de <em>parsing</em>.
          O Python indica a linha exata onde encontrou o problema.
        </p>
        <div style={S.code}>{`# SyntaxError: falta parênteses (Python 2 → Python 3)
print "Hello"
# SyntaxError: Missing parentheses in call to 'print'

# SyntaxError: falta dois pontos no if
if x > 0
    print(x)
# SyntaxError: expected ':'

# SyntaxError: aspas não fechadas
nome = "Alice
# SyntaxError: EOL while scanning string literal`}</div>

        <h3 style={S.h3}>2. RuntimeError — Erro em Execução</h3>
        <p style={S.p}>
          O código é sintaticamente correto mas falha durante a execução. O Python gera
          um <strong>traceback</strong> que mostra a pilha de chamadas e o tipo de exceção.
          Compreender o traceback é a competência mais importante em debugging.
        </p>
        <div style={S.code}>{`# ZeroDivisionError
resultado = 10 / 0
# ZeroDivisionError: division by zero

# NameError — variável não definida
print(y)
# NameError: name 'y' is not defined

# TypeError — operação com tipos incompatíveis
"2" + 2
# TypeError: can only concatenate str (not "int") to str

# IndexError — índice fora dos limites
lista = [1, 2, 3]
lista[5]
# IndexError: list index out of range

# KeyError — chave inexistente num dicionário
d = {"a": 1}
d["b"]
# KeyError: 'b'`}</div>

        <h3 style={S.h3}>3. SemanticError — Erro Semântico</h3>
        <p style={S.p}>
          O mais traiçoeiro: o programa corre sem qualquer erro mas produz resultados incorretos.
          O código é sintática e tecnicamente válido — a lógica é que está errada. Estes erros
          exigem testes com casos conhecidos para ser detetados.
        </p>
        <div style={S.code}>{`# Calcular média — erro de precedência
def media(a, b):
    return a + b / 2    # ERRADO: só divide b por 2

# Correto: return (a + b) / 2

# Lógica invertida numa condição
def is_adulto(idade):
    if idade < 18:      # ERRADO: deveria ser >=
        return True

# Índice off-by-one
notas = [8, 9, 7, 10]
for i in range(len(notas) - 1):   # Perde o último elemento!
    print(notas[i])`}</div>

        <div style={S.note}>
          Estratégia de debugging: (1) lê atentamente o traceback de baixo para cima; (2) usa
          <code> print()</code> para inspecionar valores intermédios; (3) testa com casos simples
          onde já sabes a resposta correta; (4) usa o debugger do Jupyter (<code>%debug</code>
          depois de uma exceção) para inspecionar o estado no momento do erro.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 8. ZEN DO PYTHON ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. O Zen do Python</h2>
        <p style={S.p}>
          O <strong>Zen of Python</strong> (PEP 20, autoria de Tim Peters) é um conjunto de 19
          princípios filosóficos que guiam o design da linguagem e o estilo de código Pythónico.
          Podes aceder a ele diretamente no Python:
        </p>
        <div style={S.code}>{`import this`}</div>

        <p style={S.p}>Alguns dos princípios mais relevantes para Data Science:</p>

        <div style={S.highlight}>
          <strong>"Beautiful is better than ugly."</strong>
          <br />
          Código limpo e legível tem mais valor que código denso e "inteligente". A clareza deve
          ser o objetivo principal.
        </div>
        <div style={S.highlight}>
          <strong>"Explicit is better than implicit."</strong>
          <br />
          Prefere código onde as intenções são evidentes. Evita "magia" que esconde o que acontece.
          Exemplo: não depender de conversões de tipo implícitas.
        </div>
        <div style={S.highlight}>
          <strong>"Simple is better than complex."</strong>
          <br />
          Se uma solução simples resolve o problema, não a compliques. Em análise de dados,
          uma lista comprehension legível bate um one-liner impenetrável.
        </div>
        <div style={S.highlight}>
          <strong>"Readability counts."</strong>
          <br />
          O código é lido muito mais vezes do que escrito. Um notebook que tu (ou um colega)
          consegue perceber em 6 meses tem muito mais valor científico.
        </div>
        <div style={S.highlight}>
          <strong>"Errors should never pass silently."</strong>
          <br />
          Não ignores exceções com <code>except: pass</code>. Trata ou propaga os erros de forma
          explícita para que possam ser diagnosticados.
        </div>
        <div style={S.highlight}>
          <strong>"There should be one — and preferably only one — obvious way to do it."</strong>
          <br />
          Python prefere um idioma padrão para cada tarefa. Loops <code>for</code> sobre iteráveis,
          list comprehensions, context managers (<code>with</code>) — cada um tem o seu lugar.
        </div>

        <div style={S.code}>{`# Pythónico: claro, idiomático
nomes = ["alice", "bob", "charlie"]
nomes_maiusculos = [n.capitalize() for n in nomes]

# Não-Pythónico: verbose, imperativo
nomes_maiusculos = []
for i in range(len(nomes)):
    nomes_maiusculos.append(nomes[i].capitalize())`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 9. VIRTUAL ENVIRONMENTS ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Ambientes Virtuais</h2>
        <p style={S.p}>
          Um <strong>ambiente virtual (venv)</strong> é uma instalação Python isolada que tem
          os seus próprios pacotes, independentes do Python do sistema e de outros projetos.
          É uma boa prática criar um venv para cada projeto para garantir reprodutibilidade e
          evitar conflitos de versões.
        </p>

        <div style={S.diagram}>
          <VenvDiagramSVG />
        </div>

        <h3 style={S.h3}>Porquê usar ambientes virtuais?</h3>
        <p style={S.p}>
          Imagina que o Projeto A usa <code>numpy==1.23</code> e o Projeto B requer
          <code> numpy==2.0</code>. Sem venvs, só podes ter uma versão instalada globalmente.
          Com venvs, cada projeto tem a sua instalação independente.
        </p>

        <div style={S.code}>{`# Criar e ativar um ambiente virtual
$ python -m venv venv_projeto
$ source venv_projeto/bin/activate    # macOS/Linux
$ venv_projeto\\Scripts\\activate        # Windows

# O prompt muda para indicar o venv ativo:
(venv_projeto) $

# Instalar pacotes APENAS neste ambiente
(venv_projeto) $ pip install pandas matplotlib scikit-learn

# Ver pacotes instalados
(venv_projeto) $ pip list

# Guardar dependências para reprodutibilidade
(venv_projeto) $ pip freeze > requirements.txt

# Reproduzir o ambiente noutro computador
$ python -m venv venv_novo
$ source venv_novo/bin/activate
$ pip install -r requirements.txt

# Desativar o ambiente virtual
(venv_projeto) $ deactivate`}</div>

        <h3 style={S.h3}>Conda vs venv</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Aspeto</th>
              <th style={S.th}>venv + pip</th>
              <th style={S.th}>Conda</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Gestor de pacotes</td>
              <td style={S.td}>pip (PyPI)</td>
              <td style={S.td}>conda (Anaconda repo) + pip</td>
            </tr>
            <tr>
              <td style={S.td}>Pacotes não-Python</td>
              <td style={S.td}>Requer instalação separada</td>
              <td style={S.td}>Gere dependências C/Fortran automaticamente</td>
            </tr>
            <tr>
              <td style={S.td}>Velocidade</td>
              <td style={S.td}>Mais rápido em projetos pequenos</td>
              <td style={S.td}>Mais lento mas resolve mais dependências</td>
            </tr>
            <tr>
              <td style={S.td}>Uso recomendado</td>
              <td style={S.td}>Projetos web, scripts gerais</td>
              <td style={S.td}>Data Science, ML (NumPy, TensorFlow, CUDA)</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          Com Anaconda, usa <code>conda create -n nome_env python=3.11</code> e
          <code> conda activate nome_env</code>. O Anaconda Navigator oferece uma interface gráfica
          para gerir ambientes e lançar o Jupyter Notebook.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 10. SÍNTESE ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Síntese do Módulo</h2>
        <p style={S.p}>
          Este módulo estabeleceu os alicerces conceptuais sobre os quais todo o trabalho em
          Python e Data Science assenta. Eis os pontos-chave:
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Conceito</th>
              <th style={S.th}>Ideia Central</th>
              <th style={S.th}>Relevância Prática</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Python como escolha</strong></td>
              <td style={S.td}>Legibilidade + ecossistema + comunidade</td>
              <td style={S.td}>A linguagem certa para o trabalho certo</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Hierarquia de memória</strong></td>
              <td style={S.td}>CPU (1 ns) → RAM (100 ns) → SSD (100 µs) → HDD (10 ms)</td>
              <td style={S.td}>Perceber performance e por que Pandas carrega para RAM</td>
            </tr>
            <tr>
              <td style={S.td}><strong>NameSpace / ObjectSpace</strong></td>
              <td style={S.td}>Variáveis são referências para objetos no heap</td>
              <td style={S.td}>Evitar bugs com atribuição e mutabilidade</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Interpretado vs Compilado</strong></td>
              <td style={S.td}>Python usa bytecode + PVM; C compila para nativo</td>
              <td style={S.td}>Python é lento mas usa C por baixo (NumPy)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>CPython e Bytecode</strong></td>
              <td style={S.td}>Dois passos: compilar para .pyc + PVM executa</td>
              <td style={S.td}>PyPy/Cython para código Python puro intensivo</td>
            </tr>
            <tr>
              <td style={S.td}><strong>IPython Magic Commands</strong></td>
              <td style={S.td}>%timeit, %run, %whos, %matplotlib inline</td>
              <td style={S.td}>Fluxo de trabalho mais produtivo em Jupyter</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Shell e Filesystem</strong></td>
              <td style={S.td}>Árvore de diretórios, ls/cd/mkdir/grep/pipe</td>
              <td style={S.td}>Gestão de projetos e automação de tarefas</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Tipos de Erro</strong></td>
              <td style={S.td}>Syntax (parse) → Runtime (execução) → Semantic (lógica)</td>
              <td style={S.td}>Ler tracebacks é a competência central de debugging</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Zen do Python</strong></td>
              <td style={S.td}>Explícito, simples, legível, um único idioma</td>
              <td style={S.td}>Escrever código que outros conseguem manter</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Ambientes Virtuais</strong></td>
              <td style={S.td}>Isolamento de dependências por projeto</td>
              <td style={S.td}>Reprodutibilidade científica e colaboração</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
