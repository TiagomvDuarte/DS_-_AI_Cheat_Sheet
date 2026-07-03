import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const S = {
  page: { maxWidth: 960, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: '#f97316', borderLeft: '3px solid #f97316', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: '3px solid #f97316', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  ul: { paddingLeft: '1.4rem', color: 'var(--text-primary)', lineHeight: 1.9, fontSize: '1rem' },
  li: { marginBottom: '0.4rem' },
};

const BloatDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Bloat no GSGP — crescimento sem fim</p>
    <svg viewBox="0 0 560 130" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-bl" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316"/></marker>
      </defs>
      {[
        { gen: 'Gen 0', size: 5, x: 30, label: 'T' },
        { gen: 'Gen 1', size: 12, x: 150, label: 'T + ms(R₁−R₂)' },
        { gen: 'Gen 2', size: 22, x: 300, label: 'T + ms(R₁−R₂) + ms(R₃−R₄)' },
        { gen: 'Gen G', size: 40, x: 460, label: 'T + ms·Σᵢ(Rᵢ−Rᵢᵢ)' },
      ].map(({ gen, size, x, label }, i) => (
        <g key={i}>
          <circle cx={x} cy={60} r={size} fill="#ea580c15" stroke="#f97316" strokeWidth="1.5"/>
          <text x={x} y={64} textAnchor="middle" fill="#f97316" fontSize={Math.min(size * 0.7, 9)} fontWeight="700">T{i}</text>
          <text x={x} y={60 + size + 12} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">{gen}</text>
          <text x={x} y={60 + size + 22} textAnchor="middle" fill="var(--text-secondary)" fontSize="6.5">{label}</text>
          {i < 3 && <line x1={x + size + 3} y1={60} x2={[150, 300, 460][i] - [12, 22, 40][i] - 3} y2={60} stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-bl)"/>}
        </g>
      ))}
      <text x="280" y="14" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Tamanho cresce O(G) — após 100 gerações: modelo com milhares de nós</text>
    </svg>
  </div>
);

const MegaTreeEvolutionDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Fluxo Anatómico Detalhado da Árvore: Insuflação e Poda Algébrica (SLIM_GSGP)</p>
    <svg viewBox="0 0 1000 360" style={{ minWidth: '1000px', height: 'auto' }}>
      <defs>
        <marker id="arrow-gray" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)"/></marker>
      </defs>

      {/* ========================================== */}
      {/* PAINEL SUPERIOR: ANATOMIA DOS TERMOS FIXOS */}
      {/* ========================================== */}
      <rect x="10" y="5" width="980" height="110" rx="8" fill="rgba(249,115,22,0.10)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="25" y="24" fill="#f97316" fontSize="11" fontWeight="700">ESTRUTURA DETALHADA DAS SUBÁRVORES FIXAS E IMUTÁVEIS (EXEMPLOS REAIS)</text>

      {/* Árvore Inicial T - REDESENHADA MAIOR */}
      <g transform="translate(30, 35)">
        <rect x="5" y="2" width="130" height="70" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
        <text x="70" y="16" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="800">Árvore Base T</text>
        <circle cx="70" cy="32" r="8" fill="#f97316" /><text x="70" y="36" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">+</text>
        <line x1="64" y1="38" x2="45" y2="54" stroke="var(--text-secondary)" strokeWidth="1.5"/>
        <line x1="76" y1="38" x2="95" y2="54" stroke="var(--text-secondary)" strokeWidth="1.5"/>
        <text x="42" y="66" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="600">x₁</text>
        <text x="100" y="66" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="600">x₂</text>
      </g>

      {/* Subárvore R1 */}
      <g transform="translate(250, 45)">
        <text x="30" y="10" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="700">Subárvore R₁</text>
        <circle cx="30" cy="24" r="8" fill="none" stroke="#f97316" strokeWidth="1.5"/><text x="30" y="27.5" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">sin</text>
        <line x1="30" y1="32" x2="30" y2="46" stroke="#f97316" strokeWidth="1.2"/>
        <text x="30" y="58" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">x₃</text>
      </g>

      {/* Subárvore R2 */}
      <g transform="translate(430, 45)">
        <text x="30" y="10" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="700">Subárvore R₂</text>
        <circle cx="30" cy="24" r="8" fill="none" stroke="#f97316" strokeWidth="1.5"/><text x="30" y="27.5" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">log</text>
        <line x1="30" y1="32" x2="30" y2="46" stroke="#f97316" strokeWidth="1.2"/>
        <text x="30" y="58" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">x₄</text>
      </g>

      {/* Subárvore R3 */}
      <g transform="translate(620, 45)">
        <text x="30" y="10" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="700">Subárvore R₃</text>
        <circle cx="30" cy="24" r="8" fill="none" stroke="#f97316" strokeWidth="1.5"/><text x="30" y="27.5" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">cos</text>
        <line x1="30" y1="32" x2="30" y2="46" stroke="#f97316" strokeWidth="1.2"/>
        <text x="30" y="58" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">x₃</text>
      </g>

      {/* Subárvore R4 */}
      <g transform="translate(810, 45)">
        <text x="30" y="10" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="700">Subárvore R₄</text>
        <circle cx="30" cy="24" r="8" fill="none" stroke="#f97316" strokeWidth="1.5"/><text x="30" y="27.5" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">sqrt</text>
        <line x1="30" y1="32" x2="30" y2="46" stroke="#f97316" strokeWidth="1.2"/>
        <text x="30" y="58" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">x₁</text>
      </g>

      {/* Linha Divisória de Fluxo Cronológico */}
      <line x1="20" y1="135" x2="980" y2="135" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4 4" />
      <text x="500" y="139" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontWeight="700" letterSpacing="0.1em">LINHA DO TEMPO EVOLUTIVA (GERAÇÕES)</text>


      {/* ========================================== */}
      {/* PASSO 1: G0 — MODELO INICIAL T            */}
      {/* ========================================== */}
      <g transform="translate(10, 160)">
        <text x="50" y="15" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="700">1. Inicial (G0)</text>
        <rect x="15" y="40" width="70" height="35" rx="6" fill="none" stroke="#f97316" strokeWidth="2" />
        <text x="50" y="62" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">Árvore T</text>
      </g>

      <line x1="105" y1="210" x2="140" y2="210" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrow-gray)"/>


      {/* ========================================== */}
      {/* PASSO 2: G1 — INFLATE (+) COM R1 E R2    */}
      {/* ========================================== */}
      <g transform="translate(160, 160)">
        <text x="65" y="15" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">2. Inflate + (G1)</text>
        
        <line x1="65" y1="40" x2="30" y2="75" stroke="var(--text-primary)" strokeWidth="1.5" />
        <line x1="65" y1="40" x2="100" y2="75" stroke="#f97316" strokeWidth="1.5" />
        <line x1="100" y1="75" x2="100" y2="110" stroke="#f97316" strokeWidth="1.5" />
        <line x1="100" y1="110" x2="80" y2="140" stroke="#f97316" strokeWidth="1.2" />
        <line x1="100" y1="110" x2="120" y2="140" stroke="#f97316" strokeWidth="1.2" />

        <circle cx="65" cy="40" r="12" fill="#f97316" />
        <text x="65" y="44.5" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">+</text>
        
        <rect x="5" y="75" width="45" height="25" rx="4" fill="var(--bg-secondary)" stroke="var(--text-secondary)" />
        <text x="27.5" y="91" textAnchor="middle" fill="var(--text-secondary)" fontSize="11">T</text>

        <circle cx="100" cy="75" r="10" fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="1.5" />
        <text x="100" y="78" textAnchor="middle" fill="var(--text-primary)" fontSize="10">ms</text>

        <circle cx="100" cy="110" r="10" fill="none" stroke="#f97316" strokeWidth="1.5" />
        <text x="100" y="113.5" textAnchor="middle" fill="#f97316" fontSize="13" fontWeight="700">-</text>

        <rect x="65" y="140" width="28" height="20" rx="3" fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="1.2" />
        <text x="79" y="153" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="600">R₁</text>

        <rect x="107" y="140" width="28" height="20" rx="3" fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="1.2" />
        <text x="121" y="153" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="600">R₂</text>
        
        <text x="65" y="175" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">T + ms·(R₁-R₂)</text>
      </g>

      <line x1="315" y1="210" x2="350" y2="210" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrow-gray)"/>


      {/* ========================================== */}
      {/* PASSO 3: G2 — MODELO INSUFLADO (ESCALA PEQUENA) */}
      {/* ========================================== */}
      <g transform="translate(370, 160)">
        <text x="65" y="15" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">3. Insuflado (G2)</text>
        
        <circle cx="65" cy="35" r="11" fill="#f97316" />
        <text x="65" y="39.5" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">-</text>
        
        <line x1="58" y1="42" x2="35" y2="65" stroke="var(--text-primary)" strokeWidth="1.2" />
        <circle cx="35" cy="65" r="8" fill="#f97316" /><text x="35" y="68" textAnchor="middle" fill="#fff" fontSize="9">+</text>
        <line x1="30" y1="71" x2="15" y2="88" stroke="var(--text-primary)" strokeWidth="1" />
        <text x="15" y="98" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">T</text>
        <line x1="40" y1="71" x2="55" y2="88" stroke="var(--text-primary)" strokeWidth="1" />
        <text x="57" y="98" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">ΔT₁</text>

        <line x1="72" y1="42" x2="95" y2="65" stroke="#f97316" strokeWidth="1.2" />
        <circle cx="95" cy="65" r="7" fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="1.2" /><text x="95" y="67.5" textAnchor="middle" fill="var(--text-primary)" fontSize="8">ms</text>
        <line x1="95" y1="72" x2="95" y2="88" stroke="#f97316" strokeWidth="1.2" />
        <circle cx="95" cy="94" r="7" fill="none" stroke="#f97316" strokeWidth="1.2" /><text x="95" y="96.5" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">-</text>
        
        <line x1="90" y1="100" x2="80" y2="115" stroke="#f97316" strokeWidth="1" />
        <text x="78" y="125" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">R₃</text>
        <line x1="100" y1="100" x2="110" y2="115" stroke="#f97316" strokeWidth="1" />
        <text x="112" y="125" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">R₄</text>

        <text x="65" y="155" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">[Insuflado / Bloat]</text>
      </g>

      <line x1="515" y1="210" x2="550" y2="210" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrow-gray)"/>


      {/* ========================================== */}
      {/* PASSO 4: G3 — DEFLATE MODIFICADO (- R1-R2) */}
      {/* ========================================== */}
      <g transform="translate(570, 160)">
        <text x="110" y="15" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">4. Deflate: Poda e Simplificação Mecânica (G3)</text>
        
        {/* Raiz unificada com o sinal de subtração global */}
        <circle cx="100" cy="45" r="12" fill="#f97316" />
        <text x="100" y="49.5" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">-</text>

        {/* Ramos Ativos Saudáveis */}
        <line x1="92" y1="52" x2="55" y2="85" stroke="var(--text-primary)" strokeWidth="1.5" />
        <rect x="25" y="85" width="55" height="25" rx="4" fill="var(--bg-secondary)" stroke="var(--text-primary)" />
        <text x="52.5" y="101" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="700">Árvore T</text>

        <line x1="108" y1="52" x2="145" y2="85" stroke="#f97316" strokeWidth="1.5" />
        <rect x="120" y="85" width="65" height="25" rx="4" fill="var(--bg-secondary)" stroke="#f97316" />
        <text x="152.5" y="100" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="600">ms · (R₃ - R₄)</text>

        {/* RAMO ELIMINADO - CORRIGIDO PARA SUBTRAÇÃO SIMÉTRICA (ANULAÇÃO) */}
        <g opacity="0.2">
          <line x1="88" y1="50" x2="10" y2="115" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3 3"/>
          <circle cx="10" cy="115" r="8" fill="#f97316" /><text x="10" y="118.5" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">-</text>
          <line x1="10" y1="123" x2="-5" y2="140" stroke="#f97316" strokeWidth="1"/>
          <line x1="10" y1="123" x2="25" y2="140" stroke="#f97316" strokeWidth="1"/>
          <text x="-5" y="150" textAnchor="middle" fill="var(--text-primary)" fontSize="8">R₁</text>
          <text x="25" y="150" textAnchor="middle" fill="var(--text-primary)" fontSize="8">R₂</text>
        </g>
        
        {/* Cruz Vermelha da Tesoura de Poda */}
        <line x1="-20" y1="140" x2="50" y2="105" stroke="#f97316" strokeWidth="3" />
        <line x1="-20" y1="105" x2="50" y2="140" stroke="#f97316" strokeWidth="3" />
        <text x="15" y="165" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="900" letterSpacing="0.05em">PODA: - ms·(R₁-R₂) ANULADO</text>
        
        {/* Seta de Equivalência Semântica */}
        <text x="210" y="95" textAnchor="middle" fill="#f97316" fontSize="16" fontWeight="700">→</text>
        
        {/* Bloco Limpo Compactado Final */}
        <rect x="235" y="80" width="130" height="35" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
        <text x="300" y="101" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Modelo Desinsuflado</text>
        <text x="300" y="130" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="600">T - ms·(R₃ - R₄)</text>
      </g>
    </svg>
  </div>
);

const ArchitectureDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Estrutura de Linha de Montagem de um Indivíduo SLIM</p>
    <svg viewBox="0 0 560 140" style={{ maxWidth: '100%', height: 'auto' }}>
      <line x1="40" y1="70" x2="500" y2="70" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="4 4" />
      <rect x="490" y="50" width="40" height="40" rx="6" fill="#f97316" />
      <text x="510" y="74" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">Σ</text>
      <text x="510" y="105" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Saída Semântica</text>
      {[
        { name: 'Árvore Inicial (T)', op: '+', x: 70, color: '#f97316' },
        { name: 'ms · (R₁ - R₂)', op: '+', x: 180, color: '#f97316' },
        { name: 'ms · (R₃ - R₄)', op: '-', x: 290, color: '#f97316' },
        { name: 'ms · (R₅ - R₆)', op: '+', x: 400, color: '#f97316' }
      ].map((block, i) => (
        <g key={i}>
          <rect x={block.x - 45} y={35} width="90" height="30" rx="4" fill="var(--bg-secondary)" stroke={block.color} strokeWidth="1.5" />
          <text x={block.x} y={53} textAnchor="middle" fill="var(--text-primary)" fontSize="8" fontWeight="600">{block.name}</text>
          <circle cx={block.x} cy={70} r={10} fill={block.color} />
          <text x={block.x} y={73.5} textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">{block.op}</text>
          <line x1={block.x} y1={65} x2={block.x} y2={70} stroke={block.color} strokeWidth="1.5" />
        </g>
      ))}
      <text x="280" y="15" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Os indivíduos são listas lineares de subárvores aleatórias imutáveis mapeadas por operadores algébricos</text>
    </svg>
  </div>
);

const TradeoffDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Evolução do Tamanho do Modelo ao Longo das Gerações</p>
    <svg viewBox="0 0 560 160" style={{ maxWidth: '100%', height: 'auto' }}>
      <line x1="50" y1="130" x2="520" y2="130" stroke="var(--text-primary)" strokeWidth="1.5" />
      <line x1="50" y1="20" x2="50" y2="130" stroke="var(--text-primary)" strokeWidth="1.5" />
      <text x="520" y="145" textAnchor="end" fill="var(--text-secondary)" fontSize="8">Gerações (Tempo)</text>
      <text x="40" y="25" textAnchor="end" fill="var(--text-secondary)" fontSize="8" transform="rotate(-90 40 25)">Tamanho do Genoma</text>
      <path d="M 50 120 L 150 100 L 250 75 L 350 45 L 450 15" fill="none" stroke="#f97316" strokeWidth="2" />
      <text x="455" y="20" fill="#f97316" fontSize="8" fontWeight="700">GSGP (Explosão Sem Fim)</text>
      <path d="M 50 120 Q 120 90 200 95 T 350 70 T 450 60" fill="none" stroke="var(--text-secondary)" stroke="1.5" strokeDasharray="3 3" />
      <text x="455" y="60" fill="var(--text-secondary)" fontSize="8">GP Clássico</text>
      <path d="M 50 120 L 100 110 L 150 100 L 180 115 L 230 105 L 280 95 L 300 110 L 350 102 L 400 92 L 420 110 L 450 103" fill="none" stroke="#f97316" strokeWidth="2" />
      <text x="455" y="105" fill="#f97316" fontSize="8" fontWeight="700">SLIM_GSGP (Estável)</text>
      <circle cx="180" cy="115" r="3" fill="#f97316" />
      <circle cx="300" cy="110" r="3" fill="#f97316" />
      <circle cx="420" cy="110" r="3" fill="#f97316" />
      <text x="300" y="123" textAnchor="middle" fill="#f97316" fontSize="7">Mutações Deflate (Cancelamento)</text>
    </svg>
  </div>
);

export default function NEL4() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/nel" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>Module 4</div>
        <h1 style={S.h1}>SLIM_GSGP</h1>
        <p style={S.lead}>O GSGP garante convergência para o ótimo global semântico — mas a um custo inaceitável: os modelos crescem linearmente com o número de gerações, tornando-se enormes e ilegíveis. O SLIM_GSGP resolve este problema com uma observação elegante: somar e subtrair são equivalentes no GSM, e ao alternar os sinais pode-se cancelar termos, encolhendo os modelos sem perder qualidade.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. O Problema do Bloat no GSGP</h2>
          <p style={S.p}>Cada aplicação do GSM adiciona um bloco novo ao genoma: T → T + ms·(T_R₁ − T_R₂). Após t gerações, o genoma tem t blocos adicionais — cresce linearmente com o tempo. Para 100 gerações, um modelo inicial de 5 nós pode ter milhares de nós no final. Este fenómeno chama-se bloat e é o problema central do GP em geral, agravado no GSGP pela ausência de qualquer mecanismo de simplificação.</p>
          <p style={S.p}>O impacto é triplo: (1) computacional — avaliar um modelo enorme em todos os exemplos é muito mais lento; (2) de memória — armazenar e manipular árvores gigantes é dispendioso; (3) de interpretabilidade — um modelo com milhares de nós é completamente ilegível para um humano, tornando impossível extrair conhecimento ou verificar a razoabilidade do modelo.</p>

          <BloatDiagram />

          <div style={S.note}>Um modelo que ninguém consegue interpretar não é útil na prática — especialmente em domínios como saúde ou finanças onde a explicabilidade é regulamentarmente exigida. Controlar o tamanho do modelo é tão importante quanto controlar o seu erro.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. A Ideia Central do SLIM</h2>
          <p style={S.p}>A observação que torna o SLIM possível é surpreendentemente simples: no GSM, usar +ΔT ou −ΔT é matematicamente equivalente. Porquê? Porque ΔT = ms·(T_R₁ − T_R₂) é já uma expressão centrada em zero — os sinais + e − produzem perturbações simétricas no espaço semântico. O sinal não altera a geometria da mutação, apenas a direcção.</p>
          <p style={S.p}>Se os dois sinais são equivalentes, podemos alterná-los livremente ao longo das gerações. E se ao adicionar um bloco com sinal negativo esse bloco coincidir com um bloco existente com sinal positivo, os dois cancelam-se algebricamente — e o modelo encolhe em vez de crescer.</p>

          <MegaTreeEvolutionDiagram />

          <h3 style={S.h3}>Estrutura Linear Interna</h3>
          <p style={S.p}>Ao contrário do GP clássico, onde a mutação destrói e reconstrói subárvores inteiras de forma anárquica, o SLIM preserva uma arquitetura linear bem definida. O indivíduo comporta-se como uma "linha de montagem" onde novos blocos semânticos são adicionados ou removidos através de ponteiros estruturais.</p>
          
          <ArchitectureDiagram />

          <h3 style={S.h3}>Inflate e Deflate Mutations</h3>
          <p style={S.p}>O SLIM_GSGP define dois tipos de mutação. A <strong>inflate mutation</strong> funciona adicionando um novo bloco à estrutura (composto por um multiplicador de passo $ms$ e duas subárvores aleatórias imutáveis). A <strong>deflate mutation</strong> é o mecanismo de limpeza: reutiliza um par de blocos já existentes no genoma mas com sinal oposto, forçando a árvore a realizar uma poda e a encolher instantaneamente.</p>
          <p style={S.p}>A estratégia de alternância de sinais segue um padrão fixo ao longo das gerações: +, +, −, +, +, −, ... (ou variantes). O padrão garante que há oportunidades regulares de cancelamento sem tornar a evolução completamente conservadora.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Operação</th><th style={S.th}>Efeito no tamanho</th><th style={S.th}>Efeito no fitness</th><th style={S.th}>Quando ocorre</th></tr></thead>
              <tbody>
                {[
                  ['Inflate (+ΔT)', 'Cresce — adiciona 1 bloco (2 subárvores)', 'Move no espaço semântico (melhora ou mantém)', 'Iterações com sinal +'],
                  ['Inflate (−ΔT)', 'Cresce — adiciona 1 bloco com sinal negativo', 'Move no espaço semântico em direcção oposta', 'Iterações com sinal −'],
                  ['Deflate (cancelamento)', 'Encolhe — remove 2 blocos que se cancelam', 'Neutro — semanticamente equivalente', 'Quando bloco existente coincide com novo (sinal oposto)'],
                  ['Sem mutação (cópia)', 'Mantém — filho = pai', 'Mantém — fitness idêntico ao pai', 'Com probabilidade 1 − p_mutação'],
                ].map(([op, sz, ft, wh]) => (
                  <tr key={op}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{op}</td><td style={S.td}>{sz}</td><td style={S.td}>{ft}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{wh}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Trade-off Tamanho vs Erro</h2>
          <p style={S.p}>O SLIM_GSGP controla o tamanho sem sacrificar a qualidade — mas há um parâmetro central: o passo de mutação ms. Um ms grande produz movimentos semânticos amplos (exploração, possível melhoria rápida, mas possível overshoot) e modelos maiores. Um ms pequeno produz movimentos suaves (refinamento local, convergência mais lenta) e modelos menores.</p>
          <p style={S.p}>Na prática, o SLIM usa uma função de fitness multi-objectivo: minimizar o erro semântico E o tamanho do modelo. Isto é implementado como uma penalização de tamanho no fitness, ou usando métricas como a Normalised Root Mean Squared Error (NRMSE) combinada com o número de nós da árvore.</p>

          <TradeoffDiagram />

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Algoritmo</th><th style={S.th}>Superfície de erro</th><th style={S.th}>Tamanho dos modelos</th><th style={S.th}>Interpretabilidade</th></tr></thead>
              <tbody>
                {[
                  ['GP Clássico', 'Rugosa — ótimos locais', 'Controlável com hoist', 'Moderada (depende da profundidade máx.)'],
                  ['GSGP', 'Unimodal — convergência garantida', 'Cresce O(gerações)', 'Péssima — modelos enormes'],
                  ['SLIM_GSGP', 'Unimodal — convergência garantida', 'Controlado — inflate + deflate', 'Boa — modelos compactos e legíveis'],
                ].map(([alg, surf, size, interp]) => (
                  <tr key={alg}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{alg}</td><td style={S.td}>{surf}</td><td style={S.td}>{size}</td><td style={S.td}>{interp}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={S.ul}>
            <li>Bloat no GSGP: cada GSM adiciona um bloco — após G gerações o modelo tem G blocos. Ilegível e computacionalmente caro.</li>
            <li>Insight chave: +ΔT ≡ −ΔT no GSM porque ΔT é centrado em zero. Alternar sinais não altera a dinâmica semântica.</li>
            <li>Cada bloco adicionado ($\Delta T$) contém na verdade duas subárvores aleatórias imutáveis ($R_1$ e $R_2$).</li>
            <li>Inflate mutation: adiciona bloco com sinal alternado (+/−) inserindo uma nova bifurcação na árvore.</li>
            <li>Deflate mutation: deteta termos redundantes com sinais opostos e corta mecanicamente os ramos da árvore para encolher sem alterar o fitness.</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}