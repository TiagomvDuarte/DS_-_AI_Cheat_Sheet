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
  note: { background: 'rgba(74,158,237,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  svgWrap: { background: 'rgba(74,158,237,0.06)', border: '1px solid rgba(2,132,199,0.25)', borderRadius: 10, padding: '1.25rem', margin: '1.25rem 0', overflowX: 'auto' },
};

function ShortCircuitSVG() {
  return (
    <svg width="100%" viewBox="0 0 640 200" style={{ display: 'block', maxWidth: 640, margin: '0 auto' }}>
      <text x={10} y={20} fontSize={12} fontWeight={700} fill="#4a9eed">Avaliação AND</text>
      <rect x={10} y={30} width={120} height={36} rx={6} fill="rgba(74,158,237,0.15)" stroke="#4a9eed" strokeWidth={1.5} />
      <text x={70} y={52} textAnchor="middle" fontSize={12} fill="var(--text-primary)">A and B</text>
      <line x1={130} y1={48} x2={170} y2={48} stroke="#4a9eed" strokeWidth={1.5} />
      <rect x={170} y={30} width={100} height={36} rx={6} fill="rgba(74,158,237,0.12)" stroke="#888" strokeWidth={1} />
      <text x={220} y={52} textAnchor="middle" fontSize={11} fill="var(--text-primary)">A falso?</text>
      <line x1={270} y1={48} x2={310} y2={48} stroke="#4a9eed" strokeWidth={1.5} />
      <text x={290} y={44} fontSize={10} fill="#888">não</text>
      <rect x={310} y={30} width={100} height={36} rx={6} fill="rgba(74,158,237,0.12)" stroke="#888" strokeWidth={1} />
      <text x={360} y={52} textAnchor="middle" fontSize={11} fill="var(--text-primary)">avalia B</text>
      <line x1={220} y1={66} x2={220} y2={110} stroke="#4a9eed" strokeWidth={1.5} />
      <text x={228} y={90} fontSize={10} fill="#4a9eed">sim</text>
      <rect x={170} y={110} width={100} height={36} rx={6} fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth={1} />
      <text x={220} y={132} textAnchor="middle" fontSize={11} fill="#4a9eed">retorna A (falso)</text>
      <text x={10} y={175} fontSize={12} fontWeight={700} fill="#4a9eed">Avaliação OR</text>
      <rect x={10} y={182} width={110} height={14} rx={3} fill="none" />
      <text x={10} y={194} fontSize={11} fill="var(--text-secondary)">A or B: se A for truthy, B nunca e avaliado — retorna A imediatamente</text>

      <text x={420} y={20} fontSize={12} fontWeight={700} fill="#4a9eed">Valores falsy em Python</text>
      {['False', '0', '0.0', '""', '[]', '{}', 'None'].map((v, i) => (
        <g key={v}>
          <rect x={420} y={28 + i * 22} width={55} height={18} rx={4} fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth={1} />
          <text x={447} y={41 + i * 22} textAnchor="middle" fontSize={11} fill="#4a9eed">{v}</text>
        </g>
      ))}
    </svg>
  );
}

function StringIndexSVG() {
  const chars = ['P', 'y', 't', 'h', 'o', 'n'];
  const n = chars.length;
  const cellW = 52;
  const startX = 20;
  const topY = 50;
  return (
    <svg width="100%" viewBox={`0 0 ${startX * 2 + n * cellW} 160`} style={{ display: 'block', maxWidth: 400, margin: '0 auto' }}>
      <text x={startX} y={18} fontSize={11} fill="#888">Índices positivos</text>
      <text x={startX} y={130} fontSize={11} fill="#4a9eed">Índices negativos</text>
      {chars.map((ch, i) => (
        <g key={i}>
          <rect x={startX + i * cellW} y={topY} width={cellW - 2} height={44} rx={4} fill="rgba(74,158,237,0.12)" stroke="#4a9eed" strokeWidth={1.5} />
          <text x={startX + i * cellW + (cellW - 2) / 2} y={topY + 26} textAnchor="middle" fontSize={18} fontWeight={700} fill="var(--text-primary)">{ch}</text>
          <text x={startX + i * cellW + (cellW - 2) / 2} y={topY - 6} textAnchor="middle" fontSize={11} fill="#888">{i}</text>
          <text x={startX + i * cellW + (cellW - 2) / 2} y={topY + 60} textAnchor="middle" fontSize={11} fill="#4a9eed">{i - n}</text>
        </g>
      ))}
    </svg>
  );
}

function ListMemorySVG() {
  const items = ['42', '"hi"', '3.14', 'True', 'None'];
  const cellW = 70;
  const startX = 20;
  const Y = 50;
  return (
    <svg width="100%" viewBox={`0 0 ${startX * 2 + items.length * cellW + 20} 120`} style={{ display: 'block', maxWidth: 400, margin: '0 auto' }}>
      <text x={startX} y={20} fontSize={11} fill="#888">Lista em memória — cada slot aponta para um objeto Python</text>
      <text x={startX} y={40} fontSize={11} fontWeight={700} fill="#4a9eed">my_list = [42, "hi", 3.14, True, None]</text>
      {items.map((v, i) => (
        <g key={i}>
          <rect x={startX + i * cellW} y={Y} width={cellW - 4} height={38} rx={4} fill="rgba(2,132,199,0.10)" stroke="#4a9eed" strokeWidth={1.5} />
          <text x={startX + i * cellW + (cellW - 4) / 2} y={Y + 22} textAnchor="middle" fontSize={12} fill="var(--text-primary)">{v}</text>
          <text x={startX + i * cellW + (cellW - 4) / 2} y={Y + 52} textAnchor="middle" fontSize={10} fill="#888">[{i}]</text>
          <text x={startX + i * cellW + (cellW - 4) / 2} y={Y + 64} textAnchor="middle" fontSize={10} fill="#4a9eed">[{i - items.length}]</text>
        </g>
      ))}
    </svg>
  );
}

function AliasingVsSVG() {
  return (
    <svg width="100%" viewBox="0 0 620 160" style={{ display: 'block', maxWidth: 500, margin: '0 auto' }}>
      <text x={10} y={18} fontSize={12} fontWeight={700} fill="#4a9eed">Aliasing (shallow copy pitfall)</text>
      <rect x={10} y={28} width={70} height={28} rx={5} fill="rgba(74,158,237,0.15)" stroke="#4a9eed" strokeWidth={1.5} />
      <text x={45} y={47} textAnchor="middle" fontSize={12} fill="var(--text-primary)">a</text>
      <rect x={10} y={68} width={70} height={28} rx={5} fill="rgba(74,158,237,0.15)" stroke="#4a9eed" strokeWidth={1.5} />
      <text x={45} y={87} textAnchor="middle" fontSize={12} fill="var(--text-primary)">b = a</text>
      <rect x={160} y={42} width={130} height={40} rx={6} fill="rgba(2,132,199,0.08)" stroke="#4a9eed" strokeWidth={1.5} />
      <text x={225} y={66} textAnchor="middle" fontSize={12} fill="var(--text-primary)">[1, 2, 3]</text>
      <line x1={80} y1={42} x2={160} y2={62} stroke="#4a9eed" strokeWidth={1.5} markerEnd="url(#arr)" />
      <line x1={80} y1={82} x2={160} y2={62} stroke="#4a9eed" strokeWidth={1.5} strokeDasharray="5,3" />
      <text x={100} y={100} fontSize={11} fill="#4a9eed">ambos apontam para o mesmo objeto!</text>

      <text x={330} y={18} fontSize={12} fontWeight={700} fill="#4a9eed">Copia independente</text>
      <rect x={330} y={28} width={70} height={28} rx={5} fill="rgba(74,158,237,0.15)" stroke="#4a9eed" strokeWidth={1.5} />
      <text x={365} y={47} textAnchor="middle" fontSize={12} fill="var(--text-primary)">a</text>
      <rect x={330} y={68} width={70} height={28} rx={5} fill="rgba(74,158,237,0.15)" stroke="#4a9eed" strokeWidth={1.5} />
      <text x={365} y={87} textAnchor="middle" fontSize={12} fill="var(--text-primary)">b = a[:]</text>
      <rect x={420} y={26} width={90} height={32} rx={5} fill="rgba(2,132,199,0.08)" stroke="#4a9eed" strokeWidth={1} />
      <text x={465} y={46} textAnchor="middle" fontSize={11} fill="var(--text-primary)">[1, 2, 3]</text>
      <rect x={420} y={66} width={90} height={32} rx={5} fill="rgba(2,132,199,0.08)" stroke="#4a9eed" strokeWidth={1} />
      <text x={465} y={86} textAnchor="middle" fontSize={11} fill="var(--text-primary)">[1, 2, 3]</text>
      <line x1={400} y1={42} x2={420} y2={42} stroke="#4a9eed" strokeWidth={1.5} />
      <line x1={400} y1={82} x2={420} y2={82} stroke="#4a9eed" strokeWidth={1.5} />
      <text x={330} y={120} fontSize={11} fill="#4a9eed">objetos independentes — mutacoes nao se propagam</text>
      <defs>
        <marker id="arr" markerWidth={8} markerHeight={8} refX={4} refY={4} orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#4a9eed" />
        </marker>
      </defs>
    </svg>
  );
}

function HashTableSVG() {
  const keys = ['"nome"', '"idade"', '"curso"'];
  const hashes = ['h=2', 'h=5', 'h=1'];
  const bucketIdx = [2, 5, 1];
  const vals = ['"Ana"', '22', '"MDSAA"'];
  const buckets = Array(7).fill(null);
  buckets[2] = { key: keys[0], val: vals[0] };
  buckets[5] = { key: keys[1], val: vals[1] };
  buckets[1] = { key: keys[2], val: vals[2] };
  return (
    <svg width="100%" viewBox="0 0 620 210" style={{ display: 'block', maxWidth: 500, margin: '0 auto' }}>
      <text x={10} y={18} fontSize={12} fontWeight={700} fill="#4a9eed">Hash Table interna do dict</text>
      {keys.map((k, i) => (
        <g key={k}>
          <rect x={10} y={30 + i * 44} width={90} height={30} rx={5} fill="rgba(74,158,237,0.15)" stroke="#4a9eed" strokeWidth={1.5} />
          <text x={55} y={49 + i * 44} textAnchor="middle" fontSize={11} fill="var(--text-primary)">{k}</text>
          <text x={115} y={55 + i * 44} fontSize={10} fill="#888">{hashes[i]}</text>
          <line x1={100} y1={45 + i * 44} x2={220} y2={34 + bucketIdx[i] * 24} stroke="#888" strokeWidth={1} strokeDasharray="3,2" />
        </g>
      ))}
      <text x={220} y={18} fontSize={11} fill="#888">Buckets</text>
      {buckets.map((b, i) => (
        <g key={i}>
          <rect x={220} y={24 + i * 24} width={50} height={20} rx={3} fill={b ? 'rgba(74,158,237,0.12)' : 'var(--bg-secondary)'} stroke={b ? '#4a9eed' : '#555'} strokeWidth={1} />
          <text x={245} y={38 + i * 24} textAnchor="middle" fontSize={10} fill={b ? 'var(--text-primary)' : '#555'}>{i}</text>
          {b && (
            <>
              <line x1={270} y1={34 + i * 24} x2={305} y2={34 + i * 24} stroke="#4a9eed" strokeWidth={1} />
              <rect x={305} y={24 + i * 24} width={180} height={20} rx={3} fill="rgba(74,158,237,0.08)" stroke="#4a9eed" strokeWidth={1} />
              <text x={395} y={38 + i * 24} textAnchor="middle" fontSize={10} fill="var(--text-primary)">{b.key} : {b.val}</text>
            </>
          )}
        </g>
      ))}
      <text x={10} y={205} fontSize={10} fill="#888">hash(chave) % tamanho_tabela determina o bucket. Colisoes sao resolvidas internamente.</text>
    </svg>
  );
}

function VennSVG() {
  return (
    <svg width="100%" viewBox="0 0 720 200" style={{ display: 'block', maxWidth: 560, margin: '0 auto' }}>
      <text x={10} y={18} fontSize={12} fontWeight={700} fill="#4a9eed">Operacoes de Conjunto</text>
      <circle cx={160} cy={110} r={65} fill="rgba(2,132,199,0.10)" stroke="#4a9eed" strokeWidth={2} />
      <circle cx={240} cy={110} r={65} fill="rgba(59,130,246,0.10)" stroke="#4a9eed" strokeWidth={2} />
      <text x={120} y={85} fontSize={11} fill="#4a9eed" fontWeight={700}>A</text>
      <text x={270} y={85} fontSize={11} fill="#4a9eed" fontWeight={700}>B</text>
      <text x={197} y={115} textAnchor="middle" fontSize={10} fill="var(--text-primary)">A &amp; B</text>
      <text x={120} y={130} textAnchor="middle" fontSize={10} fill="#4a9eed">só A</text>
      <text x={280} y={130} textAnchor="middle" fontSize={10} fill="#4a9eed">só B</text>

      <text x={360} y={40} fontSize={11} fontWeight={700} fill="#4a9eed">Operador</text>
      <text x={450} y={40} fontSize={11} fontWeight={700} fill="#4a9eed">Significado</text>
      {[
        ['A | B', 'Uniao (todos os elementos)'],
        ['A & B', 'Intersecao (elementos comuns)'],
        ['A - B', 'Diferenca (so em A)'],
        ['A ^ B', 'Diferenca simetrica'],
        ['A <= B', 'A e subconjunto de B'],
      ].map(([op, desc], i) => (
        <g key={op}>
          <text x={360} y={58 + i * 22} fontSize={10} fontFamily="monospace" fill="#4a9eed">{op}</text>
          <text x={450} y={58 + i * 22} fontSize={10} fill="var(--text-secondary)">{desc}</text>
        </g>
      ))}
    </svg>
  );
}

function SliceRulerSVG() {
  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const cellW = 44;
  const startX = 10;
  const Y = 55;
  return (
    <svg width="100%" viewBox={`0 0 ${startX * 2 + items.length * cellW + 20} 160`} style={{ display: 'block', maxWidth: 400, margin: '0 auto' }}>
      <text x={startX} y={18} fontSize={11} fill="#888">a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]</text>
      <text x={startX} y={34} fontSize={10} fill="#888">Indices de corte (entre elementos)</text>
      {items.map((v, i) => (
        <g key={i}>
          <rect x={startX + i * cellW} y={Y} width={cellW - 2} height={36} rx={4} fill="rgba(2,132,199,0.10)" stroke="#4a9eed" strokeWidth={1.5} />
          <text x={startX + i * cellW + (cellW - 2) / 2} y={Y + 22} textAnchor="middle" fontSize={13} fontWeight={700} fill="var(--text-primary)">{v}</text>
          <text x={startX + i * cellW} y={Y - 4} textAnchor="middle" fontSize={9} fill="#4a9eed">{i}</text>
        </g>
      ))}
      <text x={startX + items.length * cellW} y={Y - 4} textAnchor="middle" fontSize={9} fill="#4a9eed">{items.length}</text>
      <rect x={startX + 2 * cellW} y={Y} width={3 * cellW - 2} height={36} rx={0} fill="rgba(2,132,199,0.25)" stroke="none" />
      <text x={startX + 2 * cellW + (3 * cellW - 2) / 2} y={Y + 52} textAnchor="middle" fontSize={10} fill="#4a9eed">a[2:5] = [2, 3, 4]</text>
      <text x={startX} y={120} fontSize={10} fill="#888">Passo negativo: a[::-1] inverte toda a lista</text>
      <text x={startX} y={136} fontSize={10} fill="#888">Indices negativos: a[-3:] equivale a a[7:] — ultimos 3 elementos</text>
    </svg>
  );
}

function ComprehensionPipelineSVG() {
  const boxes = [
    { label: 'Iteravel', sub: 'range(10)', x: 10 },
    { label: 'Filtro', sub: 'if x%2==0', x: 160 },
    { label: 'Transformacao', sub: 'x**2', x: 310 },
    { label: 'Nova colecao', sub: '[0,4,16,36,64]', x: 460 },
  ];
  return (
    <svg width="100%" viewBox="0 0 620 100" style={{ display: 'block', maxWidth: 500, margin: '0 auto' }}>
      <text x={10} y={16} fontSize={11} fill="#888">[x**2 for x in range(10) if x % 2 == 0]</text>
      {boxes.map((b, i) => (
        <g key={b.label}>
          <rect x={b.x} y={24} width={130} height={44} rx={6} fill="rgba(74,158,237,0.12)" stroke="#4a9eed" strokeWidth={1.5} />
          <text x={b.x + 65} y={41} textAnchor="middle" fontSize={11} fontWeight={700} fill="#4a9eed">{b.label}</text>
          <text x={b.x + 65} y={57} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">{b.sub}</text>
          {i < boxes.length - 1 && (
            <line x1={b.x + 130} y1={46} x2={b.x + 150} y2={46} stroke="#4a9eed" strokeWidth={1.5} markerEnd="url(#arr2)" />
          )}
        </g>
      ))}
      <defs>
        <marker id="arr2" markerWidth={8} markerHeight={8} refX={4} refY={4} orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#4a9eed" />
        </marker>
      </defs>
    </svg>
  );
}

function IfFlowchartSVG() {
  // center x for left column, right column starts at rx
  const cx = 180, rx = 360, bw = 110, bh = 30, th = 32;
  return (
    <svg width="100%" viewBox="0 0 500 342" style={{ display: 'block', maxWidth: 400, margin: '0 auto' }}>
      <text x={cx} y={16} textAnchor="middle" fontSize={12} fontWeight={700} fill="#4a9eed">Fluxo if / elif / else</text>

      {/* inicio */}
      <rect x={cx - 55} y={24} width={bw} height={bh} rx={5} fill="rgba(74,158,237,0.15)" stroke="#4a9eed" strokeWidth={1.5} />
      <text x={cx} y={43} textAnchor="middle" fontSize={11} fill="var(--text-primary)">inicio</text>
      <line x1={cx} y1={54} x2={cx} y2={72} stroke="#4a9eed" strokeWidth={1.5} />

      {/* cond if diamond */}
      <polygon points={`${cx},72 ${cx-35},107 ${cx},142 ${cx+35},107`} fill="rgba(74,158,237,0.15)" stroke="#4a9eed" strokeWidth={1.5} />
      <text x={cx} y={111} textAnchor="middle" fontSize={10} fill="var(--text-primary)">cond if?</text>

      {/* sim → bloco if */}
      <line x1={cx + 35} y1={107} x2={rx - bw/2} y2={107} stroke="#4a9eed" strokeWidth={1.5} markerEnd="url(#arG)" />
      <text x={cx + 55} y={101} fontSize={9} fill="#4a9eed">sim</text>
      <rect x={rx - bw/2} y={92} width={bw} height={bh} rx={5} fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth={1.2} />
      <text x={rx} y={111} textAnchor="middle" fontSize={10} fill="#4a9eed">bloco if</text>

      {/* nao ↓ */}
      <line x1={cx} y1={142} x2={cx} y2={160} stroke="#4a9eed" strokeWidth={1.5} />
      <text x={cx + 6} y={154} fontSize={9} fill="#4a9eed">nao</text>

      {/* cond elif diamond */}
      <polygon points={`${cx},160 ${cx-35},195 ${cx},230 ${cx+35},195`} fill="rgba(74,158,237,0.15)" stroke="#4a9eed" strokeWidth={1.5} />
      <text x={cx} y={199} textAnchor="middle" fontSize={10} fill="var(--text-primary)">cond elif?</text>

      {/* sim → bloco elif */}
      <line x1={cx + 35} y1={195} x2={rx - bw/2} y2={195} stroke="#4a9eed" strokeWidth={1.5} markerEnd="url(#arG)" />
      <text x={cx + 55} y={189} fontSize={9} fill="#4a9eed">sim</text>
      <rect x={rx - bw/2} y={180} width={bw} height={bh} rx={5} fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth={1.2} />
      <text x={rx} y={199} textAnchor="middle" fontSize={10} fill="#4a9eed">bloco elif</text>

      {/* nao ↓ */}
      <line x1={cx} y1={230} x2={cx} y2={248} stroke="#4a9eed" strokeWidth={1.5} />
      <text x={cx + 6} y={242} fontSize={9} fill="#4a9eed">nao</text>

      {/* bloco else */}
      <rect x={cx - 55} y={248} width={bw} height={bh} rx={5} fill="rgba(59,130,246,0.10)" stroke="#4a9eed" strokeWidth={1.2} />
      <text x={cx} y={267} textAnchor="middle" fontSize={10} fill="#4a9eed">bloco else</text>
      <line x1={cx} y1={278} x2={cx} y2={302} stroke="#4a9eed" strokeWidth={1.5} />

      {/* continua */}
      <rect x={cx - 60} y={302} width={120} height={bh} rx={5} fill="rgba(74,158,237,0.15)" stroke="#4a9eed" strokeWidth={1.5} />
      <text x={cx} y={321} textAnchor="middle" fontSize={11} fill="var(--text-primary)">continua</text>

      {/* merge lines from right boxes → continua */}
      <line x1={rx + bw/2} y1={107} x2={450} y2={107} stroke="#4a9eed" strokeWidth={1} />
      <line x1={450} y1={107} x2={450} y2={317} stroke="#4a9eed" strokeWidth={1} />
      <line x1={rx + bw/2} y1={195} x2={450} y2={195} stroke="#4a9eed" strokeWidth={1} />
      <line x1={450} y1={317} x2={cx + 60} y2={317} stroke="#4a9eed" strokeWidth={1} markerEnd="url(#arG)" />

      <defs>
        <marker id="arG" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#4a9eed" />
        </marker>
      </defs>
    </svg>
  );
}

function ForLoopSVG() {
  return (
    <svg width="100%" viewBox="0 0 500 210" style={{ display: 'block', maxWidth: 400, margin: '0 auto' }}>
      <text x={250} y={16} textAnchor="middle" fontSize={12} fontWeight={700} fill="#4a9eed">Modelo de iteracao do for</text>

      {/* Row 1: iteravel → __iter__() → iterator */}
      <rect x={10} y={28} width={130} height={34} rx={6} fill="rgba(74,158,237,0.12)" stroke="#4a9eed" strokeWidth={1.5} />
      <text x={75} y={49} textAnchor="middle" fontSize={11} fill="var(--text-primary)">iteravel (lista, range...)</text>

      <line x1={140} y1={45} x2={168} y2={45} stroke="#4a9eed" strokeWidth={1.5} markerEnd="url(#arY)" />

      <rect x={170} y={28} width={100} height={34} rx={6} fill="rgba(74,158,237,0.15)" stroke="#4a9eed" strokeWidth={1.5} />
      <text x={220} y={49} textAnchor="middle" fontSize={11} fontWeight={700} fill="#4a9eed">__iter__()</text>

      <line x1={270} y1={45} x2={298} y2={45} stroke="#4a9eed" strokeWidth={1.5} markerEnd="url(#arY)" />

      <rect x={300} y={28} width={100} height={34} rx={6} fill="rgba(74,158,237,0.12)" stroke="#4a9eed" strokeWidth={1.5} />
      <text x={350} y={49} textAnchor="middle" fontSize={11} fill="var(--text-primary)">iterator</text>

      {/* iterator → __next__() */}
      <line x1={350} y1={62} x2={350} y2={88} stroke="#4a9eed" strokeWidth={1.5} markerEnd="url(#arY)" />

      <rect x={300} y={90} width={100} height={34} rx={6} fill="rgba(74,158,237,0.12)" stroke="#4a9eed" strokeWidth={1.5} />
      <text x={350} y={111} textAnchor="middle" fontSize={11} fill="var(--text-primary)">__next__()</text>

      {/* __next__() → proximo valor */}
      <line x1={350} y1={124} x2={350} y2={148} stroke="#4a9eed" strokeWidth={1.5} markerEnd="url(#arGr)" />

      <rect x={290} y={150} width={120} height={34} rx={5} fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth={1.5} />
      <text x={350} y={171} textAnchor="middle" fontSize={11} fill="#4a9eed">proximo valor</text>

      {/* loop back: proximo valor → __next__() (left side) */}
      <line x1={290} y1={167} x2={260} y2={167} stroke="#4a9eed" strokeWidth={1.5} />
      <line x1={260} y1={167} x2={260} y2={107} stroke="#4a9eed" strokeWidth={1.5} />
      <line x1={260} y1={107} x2={299} y2={107} stroke="#4a9eed" strokeWidth={1.5} markerEnd="url(#arY)" />
      <text x={238} y={138} textAnchor="middle" fontSize={10} fill="#4a9eed">loop</text>

      {/* StopIteration exit (left of __next__) */}
      <line x1={300} y1={107} x2={180} y2={107} stroke="#4a9eed" strokeWidth={1.5} markerEnd="url(#arR)" />
      <text x={230} y={100} textAnchor="middle" fontSize={9} fill="#4a9eed">StopIteration</text>
      <text x={210} y={120} textAnchor="middle" fontSize={9} fill="#4a9eed">→ loop termina</text>

      <defs>
        <marker id="arY" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#4a9eed" />
        </marker>
        <marker id="arGr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#4a9eed" />
        </marker>
        <marker id="arR" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#4a9eed" />
        </marker>
      </defs>
    </svg>
  );
}

function MutabilityIdSVG() {
  return (
    <svg width="100%" viewBox="0 0 580 180" style={{ display: 'block', maxWidth: 460, margin: '0 auto' }}>
      <text x={10} y={18} fontSize={12} fontWeight={700} fill="#4a9eed">is vs == e id()</text>
      <rect x={10} y={28} width={80} height={28} rx={5} fill="rgba(74,158,237,0.12)" stroke="#4a9eed" strokeWidth={1.5} />
      <text x={50} y={46} textAnchor="middle" fontSize={11} fill="var(--text-primary)">a = [1,2]</text>
      <rect x={10} y={68} width={80} height={28} rx={5} fill="rgba(74,158,237,0.12)" stroke="#4a9eed" strokeWidth={1.5} />
      <text x={50} y={86} textAnchor="middle" fontSize={11} fill="var(--text-primary)">b = [1,2]</text>
      <rect x={160} y={44} width={90} height={36} rx={5} fill="rgba(2,132,199,0.08)" stroke="#4a9eed" strokeWidth={1.5} />
      <text x={205} y={66} textAnchor="middle" fontSize={11} fill="var(--text-primary)">[1, 2] id=100</text>
      <rect x={160} y={88} width={90} height={36} rx={5} fill="rgba(2,132,199,0.08)" stroke="#4a9eed" strokeWidth={1.5} />
      <text x={205} y={110} textAnchor="middle" fontSize={11} fill="var(--text-primary)">[1, 2] id=200</text>
      <line x1={90} y1={42} x2={160} y2={62} stroke="#4a9eed" strokeWidth={1.5} />
      <line x1={90} y1={82} x2={160} y2={106} stroke="#4a9eed" strokeWidth={1.5} />
      <text x={10} y={140} fontSize={11} fill="#4a9eed">a == b   -&gt; True  (mesmo valor)</text>
      <text x={10} y={158} fontSize={11} fill="#4a9eed">a is b   -&gt; False (objetos diferentes em memoria)</text>
      <text x={10} y={174} fontSize={10} fill="#888">id(a) = 100  |  id(b) = 200</text>

      <text x={340} y={28} fontSize={11} fontWeight={700} fill="#4a9eed">Imutaveis: reuso de objetos</text>
      <text x={340} y={48} fontSize={10} fill="var(--text-secondary)">a = 256</text>
      <text x={340} y={64} fontSize={10} fill="var(--text-secondary)">b = 256</text>
      <text x={340} y={80} fontSize={10} fill="#4a9eed">a is b -&gt; True  (Python reutiliza -5 a 256)</text>
      <text x={340} y={100} fontSize={10} fill="var(--text-secondary)">a = 1000</text>
      <text x={340} y={116} fontSize={10} fill="var(--text-secondary)">b = 1000</text>
      <text x={340} y={132} fontSize={10} fill="#4a9eed">a is b -&gt; False (inteiros grandes sao novos objetos)</text>
      <text x={340} y={154} fontSize={10} fill="#888">Nao confiar em "is" para comparar valores — usar == sempre</text>
    </svg>
  );
}

export default function PfDS2() {
  return (
    <div style={S.page}>
      <Link to="/pfds" style={S.back}><ArrowLeft size={16} /> Voltar a Programming for Data Science</Link>

      <span style={S.tag}>MÓDULO 02</span>
      <h1 style={S.h1}>Data Structures &amp; Control Flow</h1>

      {/* ─── 1. Tipos Primitivos ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Tipos Primitivos</h2>
        <p style={S.p}>
          Em Python tudo é um objeto. Os tipos escalares fundamentais são <code>int</code>,
          <code> float</code>, <code>str</code>, <code>bool</code> e <code>None</code>.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Característica</th>
              <th style={S.th}>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}><code>int</code></td><td style={S.td}>Precisão arbitrária — nunca faz overflow</td><td style={S.td}><code>2 ** 100</code> funciona</td></tr>
            <tr><td style={S.td}><code>float</code></td><td style={S.td}>IEEE-754 64-bit — erros de representação</td><td style={S.td}><code>0.1 + 0.2 != 0.3</code></td></tr>
            <tr><td style={S.td}><code>str</code></td><td style={S.td}>Imutável — operações criam novas strings</td><td style={S.td}><code>"abc"[0] = "x"</code> erro</td></tr>
            <tr><td style={S.td}><code>bool</code></td><td style={S.td}>Subclasse de int: True==1, False==0</td><td style={S.td}><code>True + True == 2</code></td></tr>
            <tr><td style={S.td}><code>None</code></td><td style={S.td}>Singleton — existe apenas um objeto None</td><td style={S.td}><code>x is None</code></td></tr>
          </tbody>
        </table>
        <div style={S.code}>{`# int — precisão ilimitada
fatorial_100 = 1
for i in range(1, 101):
    fatorial_100 *= i
print(fatorial_100)      # 158 dígitos, sem overflow!

# float — caveat IEEE-754
print(0.1 + 0.2)         # 0.30000000000000004
print(0.1 + 0.2 == 0.3)  # False
from decimal import Decimal
print(Decimal('0.1') + Decimal('0.2'))  # 0.3 exacto

# str — imutável
s = "Python"
# s[0] = "J"           # TypeError: 'str' does not support item assignment
s = "J" + s[1:]        # cria nova string: "Jython"

# bool
print(type(True))        # <class 'bool'>
print(isinstance(True, int))  # True
print(True * 5)          # 5

# None
def sem_retorno():
    pass
resultado = sem_retorno()
print(resultado is None) # True`}</div>
        <div style={S.note}>
          Para comparações de igualdade use <code>==</code>. Para verificar <code>None</code> use
          sempre <code>x is None</code> (mais eficiente e idiomático em Python).
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── 2. Operadores ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Operadores</h2>
        <p style={S.p}>
          Python oferece uma família completa de operadores. A precedência segue a tabela abaixo
          (maior precedência = avaliado primeiro). Os operadores lógicos <code>and</code>/<code>or</code>
          usam avaliação em curto-circuito.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Prioridade</th>
              <th style={S.th}>Operador(es)</th>
              <th style={S.th}>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>1 (maior)</td><td style={S.td}><code>**</code></td><td style={S.td}>Exponenciação (direita para esquerda)</td></tr>
            <tr><td style={S.td}>2</td><td style={S.td}><code>+x  -x  ~x</code></td><td style={S.td}>Unários</td></tr>
            <tr><td style={S.td}>3</td><td style={S.td}><code>*  /  //  %</code></td><td style={S.td}>Multiplicação, divisão, divisão inteira, módulo</td></tr>
            <tr><td style={S.td}>4</td><td style={S.td}><code>+  -</code></td><td style={S.td}>Adição, subtração</td></tr>
            <tr><td style={S.td}>5</td><td style={S.td}><code>&lt;&lt;  &gt;&gt;</code></td><td style={S.td}>Deslocamento de bits</td></tr>
            <tr><td style={S.td}>6</td><td style={S.td}><code>&amp;</code></td><td style={S.td}>AND bit a bit</td></tr>
            <tr><td style={S.td}>7</td><td style={S.td}><code>^</code></td><td style={S.td}>XOR bit a bit</td></tr>
            <tr><td style={S.td}>8</td><td style={S.td}><code>|</code></td><td style={S.td}>OR bit a bit</td></tr>
            <tr><td style={S.td}>9</td><td style={S.td}><code>==  !=  &lt;  &gt;  &lt;=  &gt;=  is  in</code></td><td style={S.td}>Comparação, identidade, pertença</td></tr>
            <tr><td style={S.td}>10</td><td style={S.td}><code>not</code></td><td style={S.td}>NOT lógico</td></tr>
            <tr><td style={S.td}>11</td><td style={S.td}><code>and</code></td><td style={S.td}>AND lógico</td></tr>
            <tr><td style={S.td}>12 (menor)</td><td style={S.td}><code>or</code></td><td style={S.td}>OR lógico</td></tr>
          </tbody>
        </table>
        <div style={S.svgWrap}>
          <ShortCircuitSVG />
        </div>
        <div style={S.code}>{`# Aritméticos
print(7 / 2)    # 3.5  — divisão real
print(7 // 2)   # 3    — divisão inteira (floor)
print(7 % 2)    # 1    — módulo
print(2 ** 10)  # 1024 — exponenciação

# Curto-circuito — and
x = None
valor = x and x.strip()   # não lança AttributeError!
# x é falsy → retorna x (None) sem avaliar x.strip()

# Curto-circuito — or
nome = ""
exibir = nome or "Anónimo"   # nome é falsy → retorna "Anónimo"

# Identidade vs igualdade
a = [1, 2, 3]
b = a             # mesmo objeto
c = [1, 2, 3]     # objeto diferente com mesmo valor
print(a == c)     # True  (valores iguais)
print(a is c)     # False (objetos diferentes)
print(a is b)     # True  (mesma referência)

# Pertença
print(3 in [1, 2, 3])          # True
print("py" in "python")        # True
print("Java" not in ["C", "Python"])  # True`}</div>
      </section>

      <hr style={S.divider} />

      {/* ─── 3. Strings em Profundidade ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Strings em Profundidade</h2>
        <p style={S.p}>
          Uma <code>str</code> é uma sequência imutável de pontos de código Unicode. Suporta
          indexação positiva e negativa, slicing e um vasto conjunto de métodos.
        </p>
        <div style={S.svgWrap}>
          <StringIndexSVG />
        </div>
        <div style={S.code}>{`s = "Python"

# Indexação
print(s[0])    # 'P'
print(s[-1])   # 'n'
print(s[2:5])  # 'tho'
print(s[::-1]) # 'nohtyP'

# Imutabilidade
s2 = s.upper()  # cria nova string — s não muda
print(s)        # 'Python'
print(s2)       # 'PYTHON'

# Formatação
nome = "Ana"
nota = 18.5
# f-string (recomendado Python 3.6+)
print(f"{nome} teve {nota:.1f} valores")

# .format()
print("{} teve {:.1f} valores".format(nome, nota))

# % (estilo antigo, ainda usado em logging)
print("%s teve %.1f valores" % (nome, nota))

# Métodos comuns
texto = "  Olá, mundo!  "
print(texto.strip())           # "Olá, mundo!"
print(texto.strip().lower())   # "olá, mundo!"
print("a,b,c".split(","))      # ['a', 'b', 'c']
print("-".join(["a","b","c"])) # "a-b-c"
print("abc".replace("b","X"))  # "aXc"
print("python".find("th"))     # 2  (-1 se não existir)
print("  ".isspace())          # True
print("abc123".isalnum())      # True`}</div>
        <div style={S.note}>
          Strings são hashable (podem ser chaves de dict e elementos de set). Concatenação com
          <code> +</code> em loop é O(n²) — prefira <code>"".join(lista)</code> para construção eficiente.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── 4. Listas ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Listas</h2>
        <p style={S.p}>
          Listas são sequências mutáveis e ordenadas que podem conter elementos de tipos mistos.
          Internamente são arrays dinâmicos de ponteiros para objetos Python.
        </p>
        <div style={S.svgWrap}>
          <ListMemorySVG />
        </div>
        <div style={S.code}>{`# Criação
a = [1, 2, 3]
b = list(range(5))      # [0, 1, 2, 3, 4]
c = [0] * 5             # [0, 0, 0, 0, 0]

# Modificação
a.append(4)             # [1, 2, 3, 4]
a.extend([5, 6])        # [1, 2, 3, 4, 5, 6]
a.insert(0, 99)         # [99, 1, 2, 3, 4, 5, 6]
a.remove(99)            # remove primeira ocorrência
ultimo = a.pop()        # remove e retorna o último
a.pop(0)                # remove e retorna o índice 0

# Pesquisa e info
print(len(a))           # comprimento
print(3 in a)           # True/False
print(a.index(3))       # índice da primeira ocorrência
print(a.count(3))       # número de ocorrências

# Ordenação
nums = [5, 2, 8, 1, 9]
nums.sort()             # in-place
nums.sort(reverse=True) # descendente
sorted_copy = sorted(nums)  # retorna nova lista, nums inalterado

# Slicing (cria cópia)
sub = a[1:4]
invertido = a[::-1]

# Nested lists (matriz 2D)
matriz = [[1,2,3],[4,5,6],[7,8,9]]
print(matriz[1][2])     # 6`}</div>
        <p style={{ ...S.p, fontWeight: 700 }}>Shallow vs Deep Copy</p>
        <div style={S.svgWrap}>
          <AliasingVsSVG />
        </div>
        <div style={S.code}>{`import copy

original = [[1, 2], [3, 4]]

# Aliasing (mesma referência)
alias = original
alias[0].append(99)
print(original)        # [[1, 2, 99], [3, 4]] — modificado!

# Shallow copy — copia a lista externa, não os objetos internos
shallow = original[:]       # ou list(original) ou copy.copy()
shallow[0].append(88)
print(original)        # [[1, 2, 99, 88], [3, 4]] — ainda afetado!

# Deep copy — copia recursivamente todos os objetos
deep = copy.deepcopy(original)
deep[0].append(77)
print(original)        # inalterado`}</div>
      </section>

      <hr style={S.divider} />

      {/* ─── 5. Dicionários ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Dicionários</h2>
        <p style={S.p}>
          Dicionários mapeiam chaves únicas e hashable para valores arbitrários. Implementados
          internamente como hash tables, oferecem acesso O(1) amortizado. Desde Python 3.7
          preservam a ordem de inserção.
        </p>
        <div style={S.svgWrap}>
          <HashTableSVG />
        </div>
        <div style={S.code}>{`# Criação
d = {"nome": "Ana", "idade": 22, "curso": "MDSAA"}
d2 = dict(nome="Zé", idade=25)
d3 = dict([("a", 1), ("b", 2)])  # a partir de pares

# Acesso
print(d["nome"])           # "Ana"  — KeyError se não existir
print(d.get("altura"))     # None   — sem KeyError
print(d.get("altura", 0))  # 0      — valor por omissão

# Modificação
d["idade"] = 23            # atualiza
d["media"] = 17.5          # adiciona
del d["media"]             # remove
popped = d.pop("idade")    # remove e retorna

# Iteração
for k in d:                 # itera chaves
    print(k)
for k, v in d.items():     # pares chave-valor
    print(f"{k}: {v}")
for v in d.values():       # só valores
    print(v)

# Merge (Python 3.9+)
extra = {"pais": "PT"}
merged = d | extra          # novo dict

# Dict comprehension
quadrados = {x: x**2 for x in range(6)}
# {0:0, 1:1, 2:4, 3:9, 4:16, 5:25}

# Inverter chaves e valores
inv = {v: k for k, v in {"a": 1, "b": 2}.items()}
# {1: 'a', 2: 'b'}

# defaultdict
from collections import defaultdict
contagem = defaultdict(int)
for palavra in "the cat sat on the mat".split():
    contagem[palavra] += 1`}</div>
        <div style={S.note}>
          Apenas tipos hashable podem ser chaves: <code>int</code>, <code>float</code>,
          <code> str</code>, <code>tuple</code> (se contiver apenas hashables). Listas e dicts
          não podem ser chaves pois são mutáveis.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── 6. Tuplos e Sets ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Tuplos e Sets</h2>
        <p style={S.p}>
          <strong>Tuplos</strong> são sequências imutáveis — ideais para dados que não devem mudar,
          como coordenadas ou registos. <strong>Sets</strong> são coleções não ordenadas de elementos
          únicos e hashable, otimizadas para operações de conjunto.
        </p>
        <div style={S.code}>{`# Tuplos
t = (1, 2, 3)
t2 = 1, 2, 3         # parênteses opcionais
single = (42,)       # vírgula obrigatória para tuple de 1 elemento
vazio = ()

# Desempacotamento
x, y, z = t
primeiro, *resto = (1, 2, 3, 4, 5)
print(primeiro)      # 1
print(resto)         # [2, 3, 4, 5]

# Tuplos como chaves de dict
ponto = {(0, 0): "origem", (1, 0): "direita"}

# namedtuple
from collections import namedtuple
Ponto = namedtuple("Ponto", ["x", "y"])
p = Ponto(3, 4)
print(p.x, p.y)      # 3 4
print(p[0])          # 3  (ainda indexável)

# Sets
s = {1, 2, 3, 2, 1}   # {1, 2, 3} — duplicados removidos
s.add(4)
s.discard(99)          # não lança erro se não existir
s.remove(1)            # lança KeyError se não existir

A = {1, 2, 3, 4}
B = {3, 4, 5, 6}
print(A | B)           # {1,2,3,4,5,6} — união
print(A & B)           # {3, 4}         — interseção
print(A - B)           # {1, 2}         — diferença
print(A ^ B)           # {1,2,5,6}      — diferença simétrica
print(A <= B)          # False — A subconjunto de B?

# frozenset — set imutável (pode ser chave de dict)
fs = frozenset([1, 2, 3])`}</div>
        <div style={S.svgWrap}>
          <VennSVG />
        </div>
        <div style={S.note}>
          <code>set</code> tem pesquisa O(1) — muito mais rápido que <code>list</code> para
          verificar pertença com <code>in</code> em coleções grandes. Use
          <code> set(lista)</code> para remover duplicados preservando unicidade.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── 7. Slicing ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Slicing</h2>
        <p style={S.p}>
          A sintaxe <code>seq[start:stop:step]</code> extrai subsequências de listas, tuplos,
          strings e arrays NumPy. Nunca lança <code>IndexError</code> — devolve o máximo possível.
          O diagrama mostra os índices de corte (entre elementos).
        </p>
        <div style={S.svgWrap}>
          <SliceRulerSVG />
        </div>
        <div style={S.code}>{`a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Básico
print(a[2:5])     # [2, 3, 4]  — stop é exclusivo
print(a[:3])      # [0, 1, 2]  — do início ao índice 3 (excl.)
print(a[7:])      # [7, 8, 9]  — do índice 7 ao fim
print(a[:])       # cópia rasa da lista completa

# Índices negativos
print(a[-3:])     # [7, 8, 9]  — últimos 3
print(a[:-2])     # [0..7]     — todos excepto os últimos 2

# Passo
print(a[::2])     # [0,2,4,6,8]  — de 2 em 2
print(a[1::2])    # [1,3,5,7,9]  — ímpares
print(a[::-1])    # [9,8,...,0]  — invertido
print(a[8:2:-1])  # [8,7,6,5,4,3] — passo negativo com limites

# Funciona em strings e tuplos
s = "abcdef"
print(s[1:4])     # "bcd"
print(s[::-1])    # "fedcba"

# Slicing como objeto
sl = slice(2, 8, 2)
print(a[sl])      # [2, 4, 6]

# NumPy (para referência)
# import numpy as np
# arr = np.arange(10)
# arr[2:8:2]  → array([2, 4, 6])
# arr[:, 1]   → coluna 1 de matriz 2D`}</div>
      </section>

      <hr style={S.divider} />

      {/* ─── 8. Comprehensions ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Comprehensions</h2>
        <p style={S.p}>
          Comprehensions são expressões concisas que constroem coleções aplicando transformação
          e filtragem a um iterável. Existem variantes para listas, dicts, sets e generators.
        </p>
        <div style={S.svgWrap}>
          <ComprehensionPipelineSVG />
        </div>
        <div style={S.code}>{`# List comprehension
quadrados = [x**2 for x in range(10)]
pares = [x for x in range(20) if x % 2 == 0]
maiusculas = [w.upper() for w in ["ola", "mundo"]]

# Equivalente com for loop
pares_loop = []
for x in range(20):
    if x % 2 == 0:
        pares_loop.append(x)

# Dict comprehension
quadrados_dict = {x: x**2 for x in range(6)}
inv = {v: k for k, v in {"a": 1, "b": 2}.items()}

# Set comprehension
consoantes = {c for c in "programming" if c not in "aeiou"}

# Generator expression — lazy, não cria lista em memória
gen = (x**2 for x in range(10))
print(next(gen))  # 0
print(sum(x**2 for x in range(100)))  # eficiente

# Comprehensions aninhadas
matriz = [[1,2,3],[4,5,6],[7,8,9]]
plana = [elem for linha in matriz for elem in linha]
# [1,2,3,4,5,6,7,8,9]

# Filtro em comprehension aninhada
pares_matriz = [x for linha in matriz for x in linha if x % 2 == 0]
# [2, 4, 6, 8]

# Quando NÃO usar comprehensions
# 1) Lógica muito complexa — prefira for loop com nome de variável
# 2) Efeitos secundários (print, escrita em ficheiro) — use for
# 3) Generator vs list: se só precisar de iterar uma vez, use generator`}</div>
        <div style={S.note}>
          Generators são avaliados preguiçosamente — ideais para datasets grandes.
          <code> sum(x**2 for x in range(10**7))</code> usa memória constante O(1),
          enquanto <code>sum([x**2 for x in range(10**7)])</code> cria uma lista de 10 milhões de elementos.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── 9. Control Flow ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Controlo de Fluxo</h2>
        <p style={S.p}>
          Python oferece <code>if/elif/else</code> para ramificações condicionais e <code>for</code>/<code>while</code>
          para iteração. O fluxograma abaixo ilustra a decisão multi-ramo.
        </p>
        <div style={S.svgWrap}>
          <IfFlowchartSVG />
        </div>
        <div style={S.code}>{`# if / elif / else
nota = 15
if nota >= 18:
    classificacao = "Muito Bom"
elif nota >= 14:
    classificacao = "Bom"
elif nota >= 10:
    classificacao = "Suficiente"
else:
    classificacao = "Reprovado"

# Expressão ternária (uma linha)
resultado = "Aprovado" if nota >= 10 else "Reprovado"

# Condições encadeadas (style Pythónico)
x = 5
print(1 < x < 10)   # True — encadeamento de comparações

# Truthy/Falsy em condicionais
lista = []
if not lista:
    print("lista vazia")  # idiomático em Python`}</div>
        <div style={S.svgWrap}>
          <ForLoopSVG />
        </div>
        <div style={S.code}>{`# for loop com funções úteis
frutas = ["maçã", "pera", "uva"]

# enumerate — índice + valor
for i, fruta in enumerate(frutas, start=1):
    print(f"{i}. {fruta}")

# zip — iterar dois iteráveis em paralelo
nomes = ["Ana", "Zé", "Rui"]
notas = [17, 14, 19]
for nome, nota in zip(nomes, notas):
    print(f"{nome}: {nota}")

# range
for i in range(0, 10, 2):   # 0,2,4,6,8
    print(i)

# for...else — else executa se o loop NÃO terminou com break
for n in [2, 3, 5, 7]:
    if n % 2 == 0 and n != 2:
        print(f"{n} não é primo")
        break
else:
    print("todos primos")

# while com break e continue
contador = 0
while True:
    contador += 1
    if contador % 2 == 0:
        continue      # salta para próxima iteração
    if contador > 9:
        break         # sai do loop
    print(contador)   # imprime 1, 3, 5, 7, 9

# Factorial com while
n = 5
fat = 1
while n > 0:
    fat *= n
    n -= 1
print(fat)    # 120`}</div>
        <div style={S.note}>
          A cláusula <code>else</code> em loops é rara mas poderosa: só executa se o loop
          terminou normalmente (sem <code>break</code>). Útil para pesquisas onde se quer
          saber se o elemento foi encontrado.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── 10. Mutabilidade e Identidade ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Mutabilidade e Identidade</h2>
        <p style={S.p}>
          A distinção entre tipos mutáveis e imutáveis é fundamental para evitar bugs subtis.
          <code> is</code> compara identidade (mesmo endereço em memória), enquanto <code>==</code>
          compara valor.
        </p>
        <div style={S.svgWrap}>
          <MutabilityIdSVG />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Mutável?</th>
              <th style={S.th}>Hashable?</th>
              <th style={S.th}>Nota</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}><code>int, float, bool</code></td><td style={S.td}>Não</td><td style={S.td}>Sim</td><td style={S.td}>Python pode fazer cache de pequenos inteiros</td></tr>
            <tr><td style={S.td}><code>str</code></td><td style={S.td}>Não</td><td style={S.td}>Sim</td><td style={S.td}>String interning em literais</td></tr>
            <tr><td style={S.td}><code>tuple</code></td><td style={S.td}>Não</td><td style={S.td}>Sim (se conteúdo for hashable)</td><td style={S.td}>Pode ser chave de dict</td></tr>
            <tr><td style={S.td}><code>list</code></td><td style={S.td}>Sim</td><td style={S.td}>Não</td><td style={S.td}>Aliasing é fonte comum de bugs</td></tr>
            <tr><td style={S.td}><code>dict</code></td><td style={S.td}>Sim</td><td style={S.td}>Não</td><td style={S.td}>Chaves têm de ser hashable</td></tr>
            <tr><td style={S.td}><code>set</code></td><td style={S.td}>Sim</td><td style={S.td}>Não</td><td style={S.td}>frozenset é imutável e hashable</td></tr>
          </tbody>
        </table>
        <div style={S.code}>{`# id() devolve o identificador único do objeto em memória
a = [1, 2, 3]
b = a
c = [1, 2, 3]

print(id(a), id(b), id(c))
# id(a) == id(b)   — mesma referência
# id(a) != id(c)   — objetos distintos

print(a == c)   # True  — mesmo valor
print(a is c)   # False — objetos diferentes

# Imutáveis — Python pode reutilizar objetos
x = 256
y = 256
print(x is y)   # True  — CPython faz cache de -5 a 256

p = 1000
q = 1000
print(p is q)   # False (geralmente) — fora do intervalo cacheado

# Mutabilidade em funções
def adiciona(lista, elemento):
    lista.append(elemento)   # modifica o objeto original!

minha_lista = [1, 2]
adiciona(minha_lista, 3)
print(minha_lista)           # [1, 2, 3] — modificada fora da função!

# Solução: passar cópia ou usar valor de retorno
def adiciona_seguro(lista, elemento):
    return lista + [elemento]  # cria nova lista`}</div>
        <div style={S.note}>
          Nunca use um objeto mutável (lista, dict) como argumento por omissão de uma função.
          <code> def f(lst=[])</code> partilha a mesma lista entre todas as chamadas.
          Use <code>def f(lst=None): lst = lst if lst is not None else []</code>.
        </div>
      </section>



    </div>
  );
}
