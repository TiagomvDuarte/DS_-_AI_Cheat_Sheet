import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#f97316';
const rgb = '249,115,22';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', marginTop: '1.5rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: `2px solid var(--card-border)` },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(${rgb},0.06)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  mathBox: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  svgWrap: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1rem', margin: '1.25rem 0', overflowX: 'auto' },
  caption: { fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '0.4rem', fontStyle: 'italic' },
};

/* ── diagramas SVG ─────────────────────────────────────────────────── */

const diagram = {
  /* 1 — single model vs ensemble sob drift */
  driftComparison: (
    <svg viewBox="0 0 620 200" width="100%" style={{ display: 'block' }}>
      <defs>
        <marker id="arr1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#888" />
        </marker>
      </defs>
      {/* eixos */}
      <line x1="50" y1="160" x2="590" y2="160" stroke="#888" strokeWidth="1.5" markerEnd="url(#arr1)" />
      <line x1="50" y1="20" x2="50" y2="165" stroke="#888" strokeWidth="1.5" />
      <text x="310" y="185" textAnchor="middle" fontSize="11" fill="#888">Instâncias (tempo)</text>
      <text x="20" y="92" textAnchor="middle" fontSize="11" fill="#888" transform="rotate(-90,20,92)">Accuracy</text>
      {/* linha drift */}
      <line x1="300" y1="25" x2="300" y2="160" stroke="#f97316" strokeWidth="1.2" strokeDasharray="5,3" />
      <text x="304" y="38" fontSize="10" fill="#f97316">drift</text>
      {/* modelo único: bom antes, cai após drift */}
      <polyline points="50,55 299,58 300,58 305,110 400,118 500,122 580,125"
        fill="none" stroke="#6b7280" strokeWidth="2" strokeDasharray="6,3" />
      {/* ensemble: mantém performance */}
      <polyline points="50,50 299,52 300,52 310,60 350,54 430,53 530,52 580,52"
        fill="none" stroke={color} strokeWidth="2.5" />
      {/* legendas */}
      <line x1="380" y1="135" x2="405" y2="135" stroke="#6b7280" strokeWidth="2" strokeDasharray="6,3" />
      <text x="410" y="139" fontSize="10" fill="#6b7280">Modelo único</text>
      <line x1="380" y1="148" x2="405" y2="148" stroke={color} strokeWidth="2.5" />
      <text x="410" y="152" fontSize="10" fill={color}>Ensemble</text>
      {/* ticks y */}
      {[{ y: 50, l: '~90%' }, { y: 90, l: '~70%' }, { y: 130, l: '~50%' }].map(({ y, l }) => (
        <g key={y}>
          <line x1="46" y1={y} x2="54" y2={y} stroke="#888" strokeWidth="1" />
          <text x="44" y={y + 4} textAnchor="end" fontSize="9" fill="#888">{l}</text>
        </g>
      ))}
    </svg>
  ),

  /* 2 — OzaBagging: stream → pesos Poisson → K classificadores → voto */
  ozaBagging: (
    <svg viewBox="0 0 620 160" width="100%" style={{ display: 'block' }}>
      {/* stream */}
      <rect x="10" y="60" width="80" height="36" rx="6" fill={`rgba(${rgb},0.12)`} stroke={color} strokeWidth="1.5" />
      <text x="50" y="83" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">Stream</text>
      <line x1="90" y1="78" x2="130" y2="78" stroke="#888" strokeWidth="1.5" markerEnd="url(#arr1)" />

      {/* Poisson box */}
      <rect x="130" y="55" width="110" height="46" rx="6" fill={`rgba(${rgb},0.08)`} stroke={color} strokeWidth="1.5" />
      <text x="185" y="76" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">Poisson(1)</text>
      <text x="185" y="92" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">pesos k₁…kₙ</text>

      {/* setas para classificadores */}
      {[{ cy: 40 }, { cy: 78 }, { cy: 116 }].map(({ cy }, i) => (
        <g key={i}>
          <line x1="240" y1="78" x2="270" y2={cy} stroke="#888" strokeWidth="1.2" />
          <rect x="270" y={cy - 14} width="90" height="28" rx="6"
            fill={`rgba(${rgb},0.07)`} stroke={color} strokeWidth="1.2" />
          <text x="315" y={cy + 4} textAnchor="middle" fontSize="10" fill={color}>HT {i + 1}</text>
        </g>
      ))}
      <text x="258" y="78" fontSize="10" fill="#888">…</text>

      {/* voto */}
      <rect x="390" y="60" width="90" height="36" rx="6" fill={`rgba(${rgb},0.12)`} stroke={color} strokeWidth="1.5" />
      <text x="435" y="83" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">Voto Maj.</text>
      {[{ cy: 40 }, { cy: 78 }, { cy: 116 }].map(({ cy }, i) => (
        <line key={i} x1="360" y1={cy} x2="390" y2="78" stroke="#888" strokeWidth="1.2" />
      ))}

      {/* saída */}
      <line x1="480" y1="78" x2="510" y2="78" stroke="#888" strokeWidth="1.5" markerEnd="url(#arr1)" />
      <rect x="510" y="62" width="90" height="32" rx="6" fill={`rgba(${rgb},0.12)`} stroke={color} strokeWidth="1.5" />
      <text x="555" y="83" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">Classe</text>
    </svg>
  ),

  /* 3 — OzaBoosting: pesos crescendo para instâncias erradas */
  ozaBoosting: (
    <svg viewBox="0 0 620 180" width="100%" style={{ display: 'block' }}>
      {/* eixos */}
      <line x1="50" y1="140" x2="590" y2="140" stroke="#888" strokeWidth="1.2" markerEnd="url(#arr1)" />
      <line x1="50" y1="20" x2="50" y2="145" stroke="#888" strokeWidth="1.2" />
      <text x="320" y="172" textAnchor="middle" fontSize="10" fill="#888">Classificadores (sequência)</text>
      <text x="18" y="85" textAnchor="middle" fontSize="10" fill="#888" transform="rotate(-90,18,85)">Peso λ</text>
      {/* barras classificadores */}
      {[
        { x: 80, h: 40, label: 'h₁', correct: true },
        { x: 160, h: 70, label: 'h₂', correct: false },
        { x: 240, h: 35, label: 'h₃', correct: true },
        { x: 320, h: 95, label: 'h₄', correct: false },
        { x: 400, h: 45, label: 'h₅', correct: true },
        { x: 480, h: 80, label: 'h₆', correct: false },
      ].map(({ x, h, label, correct }) => (
        <g key={x}>
          <rect x={x - 25} y={140 - h} width={50} height={h} rx="3"
            fill={correct ? `rgba(${rgb},0.25)` : '#f97316'} opacity="0.8" />
          <text x={x} y={140 - h - 5} textAnchor="middle" fontSize="10"
            fill={correct ? color : '#f97316'}>{label}</text>
          <text x={x} y="154" textAnchor="middle" fontSize="9"
            fill={correct ? 'var(--text-secondary)' : '#f97316'}>{correct ? 'certo' : 'erro'}</text>
        </g>
      ))}
      {/* legenda */}
      <rect x="430" y="2" width="14" height="14" rx="2" fill={`rgba(${rgb},0.25)`} />
      <text x="450" y="13" fontSize="9" fill={color}>peso normal (acerto)</text>
      <rect x="430" y="22" width="14" height="14" rx="2" fill="#f97316" opacity="0.8" />
      <text x="450" y="33" fontSize="9" fill="#f97316">peso elevado (erro)</text>
    </svg>
  ),

  /* 4 — Poisson(1) vs Poisson(6) + ADWIN monitors */
  leveraging: (
    <svg viewBox="0 0 620 210" width="100%" style={{ display: 'block' }}>
      {/* título esquerda / direita */}
      <text x="110" y="18" textAnchor="middle" fontSize="11" fill="#6b7280" fontWeight="700">Poisson(λ=1)</text>
      <text x="370" y="18" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">Poisson(λ=6)</text>
      {/* eixo k esq */}
      <line x1="30" y1="130" x2="215" y2="130" stroke="#888" strokeWidth="1" />
      <line x1="30" y1="30" x2="30" y2="134" stroke="#888" strokeWidth="1" />
      {/* barras Poisson(1) */}
      {[
        { k: 0, p: 0.368 }, { k: 1, p: 0.368 }, { k: 2, p: 0.184 },
        { k: 3, p: 0.061 }, { k: 4, p: 0.015 }, { k: 5, p: 0.003 },
      ].map(({ k, p }) => {
        const h = Math.round(p * 200);
        const x = 48 + k * 27;
        return (
          <g key={k}>
            <rect x={x} y={130 - h} width={20} height={h} rx="2" fill="#6b7280" opacity="0.6" />
            <text x={x + 10} y="143" textAnchor="middle" fontSize="9" fill="#888">{k}</text>
          </g>
        );
      })}
      {/* eixo k dir */}
      <line x1="260" y1="130" x2="600" y2="130" stroke="#888" strokeWidth="1" />
      <line x1="260" y1="30" x2="260" y2="134" stroke="#888" strokeWidth="1" />
      {/* barras Poisson(6) */}
      {[
        { k: 0, p: 0.002 }, { k: 1, p: 0.015 }, { k: 2, p: 0.045 },
        { k: 3, p: 0.089 }, { k: 4, p: 0.134 }, { k: 5, p: 0.161 },
        { k: 6, p: 0.161 }, { k: 7, p: 0.138 }, { k: 8, p: 0.103 },
        { k: 9, p: 0.069 }, { k: 10, p: 0.041 }, { k: 11, p: 0.022 },
        { k: 12, p: 0.011 },
      ].map(({ k, p }) => {
        const h = Math.round(p * 500);
        const x = 275 + k * 24;
        return (
          <g key={k}>
            <rect x={x} y={130 - h} width={18} height={h} rx="2" fill={color} opacity="0.65" />
            <text x={x + 9} y="143" textAnchor="middle" fontSize="9" fill={color}>{k}</text>
          </g>
        );
      })}
      {/* ADWIN badge */}
      <rect x="260" y="158" width="340" height="40" rx="6" fill={`rgba(${rgb},0.08)`} stroke={color} strokeWidth="1.2" />
      <text x="430" y="175" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">ADWIN por árvore</text>
      <text x="430" y="191" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Detecta degradação individual → substitui árvore</text>
    </svg>
  ),

  /* 5 — ARF: K árvores, uma em warning, background tree */
  arf: (() => {
    const trees = [
      { label: 'HT 1', warn: false },
      { label: 'HT 2', warn: false },
      { label: 'HT 3', warn: true  },
      { label: 'HT 4', warn: false },
      { label: 'HT 5', warn: false },
    ];
    const W = 620, tW = 86, tH = 38, adH = 18, gap = 20;
    const totalTW = trees.length * tW + (trees.length - 1) * gap;
    const startX = (W - totalTW) / 2;
    const tY = 14;
    const voteY = tY + tH + adH + 70;
    const ht3i = 2;
    const ht3cx = startX + ht3i * (tW + gap) + tW / 2;
    const bgBoxY = tY + tH + adH + 12;
    const bgBoxH = 36;
    return (
      <svg viewBox={`0 0 ${W} ${voteY + 54}`} width="100%" style={{ display: 'block' }}>
        <defs>
          <marker id="arfA" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <polygon points="0 0,7 3.5,0 7" fill="var(--text-secondary)" />
          </marker>
          <marker id="arfAO" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <polygon points="0 0,7 3.5,0 7" fill={color} />
          </marker>
        </defs>

        {/* Stream label */}
        <text x={W / 2} y={tY - 5} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">
          ← instâncias do stream recebidas por todas as árvores →
        </text>

        {/* Trees row */}
        {trees.map((t, i) => {
          const tx = startX + i * (tW + gap);
          const cx = tx + tW / 2;
          return (
            <g key={i}>
              {/* Tree box */}
              <rect x={tx} y={tY} width={tW} height={tH} rx="7"
                fill={t.warn ? 'rgba(249,115,22,0.18)' : `rgba(${rgb},0.08)`}
                stroke={t.warn ? '#f97316' : color}
                strokeWidth={t.warn ? 2.2 : 1.5} />
              <text x={cx} y={tY + tH / 2 + 5} textAnchor="middle" fontSize="12" fill={color} fontWeight="700">{t.label}</text>
              {/* ADWIN badge */}
              <rect x={tx + 8} y={tY + tH + 3} width={tW - 16} height={adH} rx="4"
                fill={t.warn ? 'rgba(249,115,22,0.15)' : 'rgba(249,115,22,0.06)'}
                stroke={t.warn ? '#f97316' : 'rgba(249,115,22,0.25)'} strokeWidth="1" />
              <text x={cx} y={tY + tH + adH - 3} textAnchor="middle" fontSize="8"
                fill={t.warn ? '#f97316' : 'var(--text-secondary)'}>
                {t.warn ? 'ADWIN ⚠ aviso' : 'ADWIN ✓'}
              </text>
              {/* Arrow down to Voto Maj — all trees */}
              <line x1={cx} y1={tY + tH + adH + 3} x2={cx} y2={voteY}
                stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arfA)" />
            </g>
          );
        })}

        {/* Background tree — side of HT3 */}
        <line x1={ht3cx + tW / 2 + 2} y1={tY + tH / 2}
              x2={ht3cx + tW / 2 + 5} y2={bgBoxY + bgBoxH / 2 - 17}
          stroke="#f97316" strokeWidth="1.2" strokeDasharray="4,3" />
        <rect x={ht3cx + tW / 2 - 30} y={bgBoxY} width={tW} height={bgBoxH} rx="7"
          fill="rgba(249,115,22,0.07)" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" />
        <text x={ht3cx + tW / 2 - 30 + tW / 2} y={bgBoxY + 14} textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="700">HT 3 (bg)</text>
        <text x={ht3cx + tW / 2 - 30 + tW / 2} y={bgBoxY + 27} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">a crescer…</text>

        {/* Voto Maj box */}
        <rect x={W / 2 - 250} y={voteY} width="500" height="38" rx="7"
          fill={`rgba(${rgb},0.15)`} stroke={color} strokeWidth="1.8" />
        <text x={W / 2} y={voteY + 24} textAnchor="middle" fontSize="13" fill={color} fontWeight="700">Voto Maj.</text>

        {/* Caption */}
        <text x={W / 2} y={voteY + 52} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">
          Quando drift confirmado: HT 3 (bg) substitui HT 3
        </text>
      </svg>
    );
  })(),

  /* 6 — pipeline chunk-based */
  chunkPipeline: (() => {
    const steps = [
      { label: 'Stream',   sub: '' },
      { label: 'Chunk',    sub: 'tamanho W' },
      { label: 'Treinar',  sub: 'novo modelo' },
      { label: 'Avaliar',  sub: 'acc no chunk' },
      { label: 'Ensemble', sub: 'podar piores' },
    ];
    const bw = 100, bh = 40, arrowW = 28, pad = 10;
    const totalW = steps.length * bw + (steps.length - 1) * arrowW + pad * 2;
    return (
      <svg viewBox={`0 0 ${totalW} 120`} width="100%" style={{ display: 'block' }}>
        <defs>
          <marker id="cpArr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <polygon points="0 0, 7 3.5, 0 7" fill="#888" />
          </marker>
        </defs>
        {steps.map(({ label, sub }, i) => {
          const x = pad + i * (bw + arrowW);
          const cx = x + bw / 2;
          return (
            <g key={i}>
              <rect x={x} y="30" width={bw} height={bh} rx="7"
                fill={`rgba(${rgb},0.09)`} stroke={color} strokeWidth="1.5" />
              <text x={cx} y="53" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">{label}</text>
              {sub && <text x={cx} y="65" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{sub}</text>}
              {i < steps.length - 1 && (
                <line x1={x + bw} y1="50" x2={x + bw + arrowW} y2="50"
                  stroke="#888" strokeWidth="1.5" markerEnd="url(#cpArr)" />
              )}
            </g>
          );
        })}
        <text x={totalW / 2} y="108" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">
          SEA: guarda K melhores   |   AWE: pondera por accuracy
        </text>
      </svg>
    );
  })(),

  /* 7 — accuracy over time: VFDT vs OzaBagging vs ARF sob drift súbito */
  benchmark: (
    <svg viewBox="0 0 620 210" width="100%" style={{ display: 'block' }}>
      <defs>
        <marker id="arr2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#888" />
        </marker>
      </defs>
      <line x1="55" y1="170" x2="590" y2="170" stroke="#888" strokeWidth="1.2" markerEnd="url(#arr2)" />
      <line x1="55" y1="20" x2="55" y2="175" stroke="#888" strokeWidth="1.2" />
      <text x="320" y="192" textAnchor="middle" fontSize="11" fill="#888">Instâncias</text>
      <text x="18" y="100" textAnchor="middle" fontSize="11" fill="#888" transform="rotate(-90,18,100)">Accuracy</text>
      {/* drift vertical */}
      <line x1="300" y1="25" x2="300" y2="170" stroke="#f97316" strokeWidth="1.2" strokeDasharray="5,3" />
      <text x="304" y="38" fontSize="9" fill="#f97316">drift</text>
      {/* VFDT: cai muito, recupera lento */}
      <polyline points="55,55 299,58 310,140 370,130 430,125 530,122 580,122"
        fill="none" stroke="#6b7280" strokeWidth="2" strokeDasharray="7,4" />
      {/* OzaBagging: cai menos, recupera médio */}
      <polyline points="55,50 299,52 308,100 350,88 420,75 530,70 580,70"
        fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,3" />
      {/* ARF: cai pouco, recupera rápido */}
      <polyline points="55,46 299,48 305,70 320,58 350,50 420,48 530,47 580,47"
        fill="none" stroke={color} strokeWidth="2.5" />
      {/* ticks y */}
      {[{ y: 47, l: '~90%' }, { y: 90, l: '~70%' }, { y: 130, l: '~50%' }].map(({ y, l }) => (
        <g key={y}>
          <line x1="51" y1={y} x2="59" y2={y} stroke="#888" strokeWidth="1" />
          <text x="49" y={y + 4} textAnchor="end" fontSize="9" fill="#888">{l}</text>
        </g>
      ))}
      {/* legenda */}
      <line x1="390" y1="150" x2="415" y2="150" stroke="#6b7280" strokeWidth="2" strokeDasharray="7,4" />
      <text x="420" y="154" fontSize="9" fill="#6b7280">VFDT</text>
      <line x1="390" y1="162" x2="415" y2="162" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,3" />
      <text x="420" y="166" fontSize="9" fill="#f59e0b">OzaBagging</text>
      <line x1="460" y1="150" x2="485" y2="150" stroke={color} strokeWidth="2.5" />
      <text x="490" y="154" fontSize="9" fill={color}>ARF</text>
    </svg>
  ),
};

/* ── fórmulas KaTeX ────────────────────────────────────────────────── */

const math = {
  poissonWeight: "k \\sim \\text{Poisson}(1), \\quad w_k \\text{ cópias da instância para o classificador } k",
  boostingLambda: "\\lambda_c = \\lambda_{c-1} \\cdot \\begin{cases} \\dfrac{1}{2 \\epsilon_{c-1}} & \\text{se correto} \\\\ \\dfrac{1}{2(1-\\epsilon_{c-1})} & \\text{se errado} \\end{cases}",
};

/* ── componente principal ──────────────────────────────────────────── */

export default function DSM4() {
  return (
    <div style={S.page}>
      <Link to="/dsm" style={S.back}><ArrowLeft size={16} /> Voltar a Data Stream Mining</Link>

      <div style={S.tag}>MÓDULO 04</div>
      <h1 style={S.h1}>Ensembles para Streams</h1>
      <p style={S.lead}>
        Os métodos de ensemble combinam múltiplos classificadores para obter performance superior à de qualquer
        modelo individual. Em streams com concept drift, os ensembles têm uma vantagem estrutural fundamental:
        diferentes membros cobrem diferentes conceitos, mantêm diversidade e permitem que o conjunto se adapte
        sem reiniciar todo o aprendizado. Este módulo percorre os principais algoritmos de ensemble para streams —
        desde o OzaBagging até à Adaptive Random Forest — analisando os mecanismos de diversidade, de detecção
        de drift e as trade-offs entre velocidade, memória e accuracy.
      </p>

      {/* ── SECÇÃO 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Ensembles em Ambientes Não-Estacionários</h2>
        <p style={S.p}>
          Um modelo único treinado num stream estacionário tende a convergir para o conceito corrente e
          estabilizar. Quando ocorre <strong>concept drift</strong>, o modelo sofre queda de performance imediata
          — e, no caso de drift abrupto, pode demorar centenas ou milhares de instâncias a recuperar, porque
          a informação antiga ainda domina os nós internos da árvore.
        </p>
        <p style={S.p}>
          Os ensembles resistem melhor ao drift por vários mecanismos complementares:
        </p>
        <div style={S.highlight}>
          <strong>Por que os ensembles lidam melhor com drift:</strong>
          <ul style={{ margin: '0.6rem 0 0 1.2rem', lineHeight: 2, fontSize: '0.95rem' }}>
            <li><strong>Diversidade:</strong> diferentes membros veem versões ligeiramente diferentes do
              stream (via reamostragem ou perturbação), pelo que alguns membros adaptam-se mais rapidamente.</li>
            <li><strong>Votação suaviza erros transitórios:</strong> mesmo que um membro se confunda
              momentaneamente após drift, a maioria dos outros pode compensar.</li>
            <li><strong>Substituição selectiva:</strong> em ensembles adaptativos, apenas os membros com
              drift confirmado são substituídos — o restante do ensemble continua válido.</li>
            <li><strong>Árvores background:</strong> podem crescer em paralelo sem interromper o ensemble
              activo, garantindo recuperação rápida após drift.</li>
          </ul>
        </div>
        <h3 style={S.h3}>Duas filosofias: online vs chunk-based</h3>
        <p style={S.p}>
          Os ensembles para streams dividem-se em dois paradigmas principais.
          Os <strong>ensembles online</strong> (OzaBagging, ARF) processam cada instância uma a uma,
          actualizando continuamente cada membro. Os <strong>ensembles chunk-based</strong> (SEA, AWE)
          acumulam um bloco de instâncias, treinam um novo classificador no bloco completo e gerem o
          ensemble substituindo os membros mais fracos. Os primeiros têm latência mais baixa e usam memória
          constante; os segundos são mais fáceis de paralelizar e permitem usar qualquer algoritmo batch.
        </p>
        <div style={S.svgWrap}>
          {diagram.driftComparison}
        </div>
        <p style={S.caption}>
          Accuracy ao longo do tempo: modelo único colapsa no ponto de drift súbito; ensemble mantém
          performance através de diversidade e adaptação distribuída.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. OzaBagging</h2>
        <p style={S.p}>
          O <strong>OzaBagging</strong> (Oza &amp; Russell, 2001) é a adaptação online do Bagging clássico
          (Breiman, 1996). No Bagging batch, para cada membro do ensemble cria-se um conjunto de treino
          por bootstrap: amostragem com reposição de <em>n</em> instâncias de <em>n</em>. Em média, cada
          instância aparece <em>e</em>⁻¹ ≈ 63% das vezes; a distribuição do número de cópias segue
          aproximadamente uma Poisson(1). Esta observação é a chave do OzaBagging.
        </p>
        <div style={S.highlight}>
          <strong>Observação central (Oza &amp; Russell, 2001):</strong><br /><br />
          No bootstrap com <em>n</em> amostras de <em>n</em> exemplos, o número de vezes que cada
          exemplo é amostrado para o conjunto de treino de cada membro segue assimptoticamente uma
          distribuição <strong>Poisson(λ=1)</strong>. Logo, em vez de reter os dados e reamostrar,
          sorteia-se <em>k ~ Poisson(1)</em> para cada par (instância, membro) e treina-se o membro
          <em> k</em> vezes com aquela instância. O efeito estatístico é equivalente ao bootstrap
          sem qualquer armazenamento.
        </div>
        <div style={S.mathBox}>
          <BlockMath math={"k \\sim \\text{Poisson}(1), \\quad w_k \\text{ c\\'{o}pias da inst\\^{a}ncia para o classificador } k"} />
        </div>
        <div style={S.svgWrap}>
          {diagram.ozaBagging}
        </div>
        <p style={S.caption}>
          Cada instância do stream gera pesos k₁…kₙ por Poisson(1); cada Hoeffding Tree é treinada
          de forma independente; a predição final é por votação maioritária.
        </p>
        
        <p style={S.p}>
          O OzaBagging usa tipicamente 10 Árvores de Hoeffding como base learners. A diversidade emerge
          da variância introduzida pelo Poisson — em média 37% das instâncias são ignoradas por cada membro
          em cada ronda, criando visões complementares do stream. O tempo de processamento por instância
          é O(K) onde K é o tamanho do ensemble.
        </p>
        <div style={S.note}>
          <strong>Limitação:</strong> o OzaBagging não possui mecanismo nativo de detecção ou adaptação a
          concept drift. A diversidade introduzida pelo Poisson(1) é relativamente baixa. Para ambientes
          não-estacionários, é necessário combinar com detectores externos (OzaBagging + ADWIN) ou usar
          base learners adaptativos como as HAT.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. OzaBoosting</h2>
        <p style={S.p}>
          O <strong>OzaBoosting</strong> (Oza &amp; Russell, 2001) adapta o AdaBoost a streams. O AdaBoost
          clássico opera sequencialmente: treina um classificador, calcula os seus erros, aumenta o peso das
          instâncias mal classificadas e treina o classificador seguinte com esses pesos amplificados.
          Em streams, não é possível rever as instâncias passadas — é preciso manter um peso acumulado
          por instância e actualizá-lo online.
        </p>
        <div style={S.highlight}>
          <strong>Mecanismo de actualização de pesos (Oza, 2001):</strong><br /><br />
          Cada classificador <em>hc</em> recebe instâncias com um peso λc (implementado via Poisson).
          Após a classificação da instância, o peso para o classificador seguinte é actualizado:
          <ul style={{ margin: '0.6rem 0 0 1.2rem', lineHeight: 2 }}>
            <li>Se <em>hc</em> <strong>acertou</strong>: λc+1 diminui — instâncias "fáceis" têm menos
              peso para o próximo classificador.</li>
            <li>Se <em>hc</em> <strong>errou</strong>: λc+1 aumenta — instâncias difíceis são enfatizadas.</li>
          </ul>
        </div>
        <div style={S.mathBox}>
          <BlockMath math={"\\lambda_c = \\lambda_{c-1} \\cdot \\begin{cases} \\dfrac{1}{2 \\epsilon_{c-1}} & \\text{se correto} \\\\ \\dfrac{1}{2(1-\\epsilon_{c-1})} & \\text{se errado} \\end{cases}"} />
        </div>
        <div style={S.svgWrap}>
          {diagram.ozaBoosting}
        </div>
        <p style={S.caption}>
          Os pesos λ de cada classificador variam consoante os erros do anterior: instâncias mal
          classificadas (barras vermelhas) geram pesos mais elevados para o próximo membro.
        </p>
        <p style={S.p}>
          A implementação online substitui os pesos explícitos pelo sorteio k ~ Poisson(λc) — uma
          aproximação que converte o peso contínuo num número inteiro de cópias de treino, evitando
          qualquer armazenamento de instâncias.
        </p>
        
        <div style={S.note}>
          <strong>Limitação estrutural:</strong> o boosting online introduz correlação entre os membros
          do ensemble — cada membro depende dos erros do anterior. Isto reduz a diversidade e frequentemente
          resulta em performance inferior ao OzaBagging em cenários com drift. O OzaBoosting é apresentado
          aqui pela sua importância histórica e por ser a base teórica do Leveraging Bagging.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Leveraging Bagging</h2>
        <p style={S.p}>
          O <strong>Leveraging Bagging</strong> (Bifet et al., 2010) parte da observação de que o OzaBagging
          com Poisson(1) gera pouca diversidade — a variância entre os membros do ensemble é limitada.
          A solução é aumentar o parâmetro λ para 6, complementado por perturbação de output.
        </p>
        <div style={S.highlight}>
          <strong>Duas melhorias face ao OzaBagging:</strong>
          <ol style={{ margin: '0.6rem 0 0 1.2rem', lineHeight: 2.1 }}>
            <li>
              <strong>Poisson(λ=6) em vez de Poisson(1):</strong> cada instância é usada em média
              6 vezes por membro. A variância da distribuição Poisson(λ) é igual a λ, portanto
              passa de 1 para 6. Membros do ensemble veem versões muito mais distintas do stream,
              gerando maior diversidade e melhor generalização.
            </li>
            <li>
              <strong>Perturbação de output (output code matrix):</strong> com probabilidade p, a
              classe da instância de treino é substituída por uma classe diferente escolhida
              aleatoriamente. Adiciona um ruído controlado que força membros diferentes a aprender
              fronteiras distintas, sem degradar significativamente o ensemble final.
            </li>
            <li>
              <strong>ADWIN por membro:</strong> cada Hoeffding Tree tem o seu próprio detector
              ADWIN. Quando um membro é considerado degradado, é substituído por uma nova árvore.
            </li>
          </ol>
        </div>
        <div style={S.svgWrap}>
          {diagram.leveraging}
        </div>
        <p style={S.caption}>
          Distribuição Poisson(1) (esq., cinzento) vs Poisson(6) (dir., roxo): maior λ aumenta a
          variância entre membros. ADWIN detecta degradação individual de cada árvore.
        </p>
        
        <p style={S.p}>
          O valor λ=6 foi determinado empiricamente por Bifet et al. em vários datasets de benchmark
          do MOA. O Leveraging Bagging supera consistentemente o OzaBagging e é um dos métodos de
          referência para comparação em stream mining, ficando apenas atrás da ARF em datasets com
          drift complexo.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Adaptive Random Forest (ARF)</h2>
        <p style={S.p}>
          A <strong>Adaptive Random Forest (ARF)</strong> (Gomes et al., 2017) é actualmente o estado
          da arte em classificação de streams supervisionada. Combina três ingredientes: subconjuntos
          aleatórios de features por nó (como no Random Forest batch), pesos Poisson de alta variância
          (como no Leveraging Bagging) e um detector ADWIN por árvore com mecanismo de árvore
          background para recuperação rápida de drift.
        </p>

        <h3 style={S.h3}>5.1 Componentes da ARF</h3>
        <div style={S.highlight}>
          <strong>Três mecanismos de diversidade e adaptação:</strong>
          <ol style={{ margin: '0.6rem 0 0 1.2rem', lineHeight: 2.2 }}>
            <li>
              <strong>Random Feature Subsets:</strong> em cada nó de divisão, apenas um subconjunto
              aleatório de k = ⌊√d⌋ features (onde d é o número total de features) é considerado.
              Reduz a correlação entre árvores de forma análoga ao Random Forest clássico.
            </li>
            <li>
              <strong>Poisson(λ) pesos:</strong> cada instância é ponderada por k ~ Poisson(λ),
              simulando bootstrap. O λ por omissão é 6 na implementação do MOA.
            </li>
            <li>
              <strong>ADWIN + background tree:</strong> cada árvore tem o seu ADWIN.
              Quando o ADWIN detecta <em>aviso</em> (warning), uma árvore background começa a
              crescer em paralelo. Quando o ADWIN detecta <em>drift</em>, a árvore background
              substitui a foreground — se a background tiver melhor accuracy.
            </li>
          </ol>
        </div>

        <h3 style={S.h3}>5.2 Mecanismo warning/drift</h3>
        <p style={S.p}>
          O ADWIN usa dois limiares: um de aviso (δw) e um de drift (δd), com δw &gt; δd (menos
          sensível o de aviso). Quando a janela adaptativa detecta degradação acima de δw, lança
          aviso e inicia a árvore background. Quando a degradação ultrapassa δd, o drift é confirmado
          e a background substitui a foreground. Este mecanismo minimiza o tempo de recuperação sem
          gerar falsos positivos excessivos.
        </p>

        <div style={S.svgWrap}>
          {diagram.arf}
        </div>
        <p style={S.caption}>
          Arquitectura ARF: 5 Hoeffding Trees com ADWIN individual. HT 3 em estado de aviso (amarelo)
          com árvore background (verde tracejado) a crescer. Após confirmação de drift, a background
          substitui a foreground.
        </p>

        <h3 style={S.h3}>5.3 Parâmetros da ARF</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Parâmetro</th>
              <th style={S.th}>Valor padrão</th>
              <th style={S.th}>Efeito</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><code>n_estimators</code></td>
              <td style={S.td}>100</td>
              <td style={S.td}>Número de árvores; mais árvores = maior accuracy e memória</td>
            </tr>
            <tr>
              <td style={S.td}><code>λ</code> (lambda)</td>
              <td style={S.td}>6</td>
              <td style={S.td}>Intensidade Poisson; valores maiores aumentam diversidade</td>
            </tr>
            <tr>
              <td style={S.td}><code>drift_detector</code></td>
              <td style={S.td}>ADWIN (δ=0.001)</td>
              <td style={S.td}>Sensibilidade à confirmação de drift; δ menor → mais sensível</td>
            </tr>
            <tr>
              <td style={S.td}><code>warning_detector</code></td>
              <td style={S.td}>ADWIN (δ=0.01)</td>
              <td style={S.td}>Dispara crescimento da background tree; δ maior → menos avisos falsos</td>
            </tr>
            <tr>
              <td style={S.td}><code>max_features</code></td>
              <td style={S.td}>⌊√d⌋</td>
              <td style={S.td}>Features por nó; menor valor → maior diversidade entre árvores</td>
            </tr>
            <tr>
              <td style={S.td}><code>grace_period</code></td>
              <td style={S.td}>50</td>
              <td style={S.td}>Instâncias entre avaliações de divisão nos nós das árvores</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          A ARF é o classificador recomendado para uso geral em streams. Supera os métodos anteriores
          na maioria dos datasets de benchmark do MOA, com boa performance tanto em streams
          estacionários como em cenários com drift abrupto, gradual ou recorrente.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Chunk-Based Ensembles — SEA e AWE</h2>
        <p style={S.p}>
          Os ensembles chunk-based dividem o stream em blocos de tamanho fixo W e, para cada bloco,
          treinam um novo classificador batch que é adicionado ao ensemble. O ensemble é depois
          gerido eliminando os membros mais fracos, mantendo um limite K de classificadores.
          A vantagem principal é a flexibilidade: qualquer algoritmo batch pode ser usado como base
          learner, incluindo SVMs, redes neuronais ou árvores de decisão complexas.
        </p>

        <div style={S.svgWrap}>
          {diagram.chunkPipeline}
        </div>
        <p style={S.caption}>
          Pipeline chunk-based: o stream é dividido em blocos de tamanho W; cada bloco gera um novo
          classificador; este é avaliado e adicionado ao ensemble; os membros com pior accuracy são
          podados para manter o ensemble compacto.
        </p>

        <h3 style={S.h3}>6.1 SEA — Streaming Ensemble Algorithm</h3>
        <p style={S.p}>
          O <strong>SEA</strong> (Street &amp; Kim, 2001) é o algoritmo mais simples da família
          chunk-based. Para cada novo bloco, treina um classificador C3 e avalia todos os classificadores
          no conjunto {"{C1, C2, …, Cn, C3}"}. Os K classificadores com maior accuracy no bloco
          mais recente são mantidos; os restantes são descartados. A predição é por votação maioritária.
        </p>
        <div style={S.highlight}>
          <strong>Algoritmo SEA (simplificado):</strong>
          <ol style={{ margin: '0.6rem 0 0 1.2rem', lineHeight: 2.1 }}>
            <li>Acumular W instâncias no bloco actual.</li>
            <li>Treinar C_new com o bloco actual (qualquer algoritmo batch).</li>
            <li>Avaliar {"{C1, …, Cn, C_new}"} em relação ao bloco actual.</li>
            <li>Manter os K com melhor accuracy; descartar os restantes.</li>
            <li>Predição: votação maioritária dos K membros.</li>
          </ol>
        </div>
        <p style={S.p}>
          O SEA adapta-se ao drift porque os classificadores treinados em conceitos antigos têm
          accuracy baixa no bloco recente e são naturalmente eliminados. O tamanho do bloco W controla
          o trade-off entre velocidade de adaptação e qualidade do modelo individual.
        </p>

        <h3 style={S.h3}>6.2 AWE — Accuracy Weighted Ensemble</h3>
        <p style={S.p}>
          O <strong>AWE</strong> (Wang et al., 2003) melhora o SEA substituindo a votação maioritária
          por votação ponderada pela accuracy no bloco recente. Classificadores treinados num
          conceito próximo do actual recebem peso maior; classificadores desactualizados têm peso
          próximo de zero e contribuem pouco para a predição final.
        </p>
        <div style={S.highlight}>
          <strong>Peso do membro i no AWE:</strong><br /><br />
          O peso wi é proporcional ao MSE do classificador i no bloco mais recente comparado com
          o erro de um classificador aleatório: wi = MSEr − MSEi, onde MSEr é o erro esperado
          de uma predição aleatória. Membros com MSE próximo de MSEr têm peso ≈ 0 e são eliminados.
        </div>
        
        <p style={S.p}>
          O AWE tem melhor performance que o SEA em streams com drift gradual, porque a transição
          de pesos é suave. No entanto, ambos os métodos têm latência de adaptação igual ao tamanho
          do bloco W: um drift ocorrido no início de um bloco só é reflectido no ensemble no final
          do bloco seguinte.
        </p>
        <div style={S.note}>
          O principal defeito dos métodos chunk-based é a latência de adaptação: com blocos de
          tamanho W=1000, pode demorar até 2000 instâncias a adaptar completamente a um drift súbito.
          Para drift frequente ou abrupto, os métodos online (ARF, Leveraging Bagging) são preferíveis.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Comparação e Benchmark</h2>
        <p style={S.p}>
          A tabela seguinte compara os principais algoritmos de ensemble para streams nas dimensões
          mais relevantes para a escolha prática. Os valores de accuracy são típicos em datasets
          de benchmark do MOA com drift moderado; resultados exactos dependem do dataset e configuração.
        </p>

        <h3 style={S.h3}>7.1 Tabela comparativa</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Algoritmo</th>
              <th style={S.th}>Gestão de drift</th>
              <th style={S.th}>Memória</th>
              <th style={S.th}>Velocidade</th>
              <th style={S.th}>Accuracy típica</th>
              <th style={S.th}>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>OzaBagging</strong></td>
              <td style={S.td}>Nenhuma (nativa)</td>
              <td style={S.td}>Baixa</td>
              <td style={S.td}>Alta</td>
              <td style={S.td}>Moderada</td>
              <td style={S.td}>Streams estacionários; baseline simples</td>
            </tr>
            <tr>
              <td style={S.td}><strong>OzaBoosting</strong></td>
              <td style={S.td}>Nenhuma (nativa)</td>
              <td style={S.td}>Baixa</td>
              <td style={S.td}>Alta</td>
              <td style={S.td}>Baixa-Moderada</td>
              <td style={S.td}>Referência histórica; raramente recomendado</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Leveraging Bagging</strong></td>
              <td style={S.td}>ADWIN por árvore</td>
              <td style={S.td}>Baixa</td>
              <td style={S.td}>Alta</td>
              <td style={S.td}>Boa</td>
              <td style={S.td}>Streams com drift moderado; quando ARF é lento</td>
            </tr>
            <tr>
              <td style={{ ...S.td, fontWeight: 700, color }}>ARF</td>
              <td style={S.td}>ADWIN + background tree</td>
              <td style={S.td}>Moderada</td>
              <td style={S.td}>Moderada</td>
              <td style={{ ...S.td, fontWeight: 700, color }}>Muito boa</td>
              <td style={S.td}>Uso geral; recomendado por padrão</td>
            </tr>
            <tr>
              <td style={S.td}><strong>SEA</strong></td>
              <td style={S.td}>Substituição por bloco</td>
              <td style={S.td}>Moderada</td>
              <td style={S.td}>Baixa</td>
              <td style={S.td}>Moderada</td>
              <td style={S.td}>Base learners batch; drift lento</td>
            </tr>
            <tr>
              <td style={S.td}><strong>AWE</strong></td>
              <td style={S.td}>Pesos por accuracy recente</td>
              <td style={S.td}>Moderada</td>
              <td style={S.td}>Baixa</td>
              <td style={S.td}>Boa (drift gradual)</td>
              <td style={S.td}>Drift gradual; quando se pretende suavidade</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>7.2 Recuperação após drift súbito</h3>
        <p style={S.p}>
          O gráfico seguinte ilustra a evolução da accuracy de três abordagens — VFDT (modelo único),
          OzaBagging e ARF — num cenário de drift súbito a meio do stream. O VFDT demora mais a
          recuperar pois tem de actualizar toda a estrutura da árvore. O OzaBagging recupera mais
          rapidamente por diversidade, mas sem mecanismo explícito de drift. A ARF recupera mais
          rapidamente de todos, graças às background trees prontas a substituir os membros degradados.
        </p>
        <div style={S.svgWrap}>
          {diagram.benchmark}
        </div>
        <p style={S.caption}>
          Accuracy ao longo do tempo em cenário de drift súbito: VFDT (cinzento tracejado) colapsa
          e recupera lentamente; OzaBagging (amarelo) recupera a velocidade média; ARF (roxo)
          mantém queda mínima e recupera mais rapidamente.
        </p>

        <div style={S.note}>
          Em datasets do MOA com drift abrupto (e.g. RandomRBFGeneratorDrift), a ARF com 100 árvores
          tipicamente alcança 85-92% de accuracy prequential, contra 75-85% do OzaBagging e
          65-78% do VFDT. Os valores variam significativamente com a velocidade e o tipo de drift.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 8 ── */}
              <h2 style={{ ...S.h2, marginBottom: '1rem' }}>8. Síntese do Módulo</h2>
<div style={{ ...S.highlight, borderRadius: 12, padding: '1.5rem', marginBottom: 0 }}>
        <p style={{ ...S.p, marginBottom: '0.75rem' }}>
          Os ensembles para streams evoluíram em torno de dois eixos: aumentar a diversidade entre
          membros e dotar cada membro de mecanismos de detecção e resposta a drift. A progressão
          histórica reflecte essa dualidade:
        </p>
        <ul style={{ margin: '0.5rem 0 0.75rem 1.2rem', lineHeight: 2, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
          <li>
            <strong>OzaBagging (2001):</strong> bagging online via Poisson(1) — base conceptual,
            sem gestão nativa de drift. Diversidade moderada.
          </li>
          <li>
            <strong>OzaBoosting (2001):</strong> boosting online com actualização de pesos —
            limitado por correlação entre árvores; raramente recomendado hoje.
          </li>
          <li>
            <strong>SEA / AWE (2001–2003):</strong> paradigma chunk-based — flexibilidade nos base
            learners, mas latência de adaptação proporcional ao tamanho do bloco.
          </li>
          <li>
            <strong>Leveraging Bagging (2010):</strong> Poisson(6) + perturbação de output + ADWIN —
            maior diversidade, adaptação explícita, supera OzaBagging consistentemente.
          </li>
          <li>
            <strong>ARF (2017):</strong> random features + Poisson(λ) + ADWIN com background tree —
            estado da arte, uso geral, recomendado por padrão em streams supervisionados.
          </li>
        </ul>
        <p style={{ ...S.p, marginBottom: 0 }}>
          A tendência actual combina múltiplas fontes de diversidade (features, instâncias, parâmetros)
          com detecção explícita de drift por membro e mecanismos de substituição que minimizam a
          interrupção do ensemble activo. O Streaming Random Patches (SRP, 2019) generaliza a ARF
          adicionando subsampling de instâncias, sendo competitivo ou superior em datasets de alta
          dimensionalidade.
        </p>
      </div>
    </div>
  );
}
