import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BlockMath } from 'react-katex';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: '#f97316', borderLeft: '3px solid #f97316', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: '3px solid #f97316', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const CXDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Cycle Crossover (CX) — preservando posições absolutas</p>
    <svg viewBox="0 -20 540 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-cx" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316"/></marker>
      </defs>
      {/* Parents */}
      <text x="10" y="14" fill="var(--text-secondary)" fontSize="8.5" fontWeight="700">PAI 1:</text>
      <text x="10" y="48" fill="var(--text-secondary)" fontSize="8.5" fontWeight="700">PAI 2:</text>
      {[1,2,3,4,5,6,7].map((v, i) => {
        const p1 = [1,2,3,4,5,6,7];
        const p2 = [3,7,4,1,6,2,5];
        const cycle = [0,3,1,6,4,5]; // positions in cycle: 0(1→3→4→1 no wait)
        // cycle 1: pos 0 (p1[0]=1, follow 1→find 1 in p2: pos 3→p1[3]=4→find 4 in p2: pos 2→p1[2]=3→find 3 in p2: pos 0) so cycle = [0,3,2]
        const inCycle = [0,2,3].includes(i);
        return (
          <g key={i}>
            <rect x={65 + i * 65} y={2} width={52} height={20} rx="4"
              fill={inCycle ? '#c2410c15' : 'var(--bg-primary)'}
              stroke={inCycle ? '#f97316' : 'var(--card-border)'} strokeWidth="1.5"/>
            <text x={91 + i * 65} y={15} textAnchor="middle" fill={inCycle ? '#f97316' : 'var(--text-primary)'} fontSize="9" fontWeight="700">{p1[i]}</text>
            <rect x={65 + i * 65} y={35} width={52} height={20} rx="4"
              fill={!inCycle ? '#f9731615' : 'var(--bg-primary)'}
              stroke={!inCycle ? '#f97316' : 'var(--card-border)'} strokeWidth="1.5"/>
            <text x={91 + i * 65} y={48} textAnchor="middle" fill={!inCycle ? '#f97316' : 'var(--text-primary)'} fontSize="9" fontWeight="700">{p2[i]}</text>
          </g>
        );
      })}
      {/* Cycle arrow — above PAI 1 */}
      <path d="M 91,2 Q 91,-8 156,-8 Q 221,-8 221,2" fill="none" stroke="#f97316" strokeWidth="1.2" strokeDasharray="2,2"/>
      <path d="M 221,2 Q 221,-8 286,-8 Q 286,-8 286,2" fill="none" stroke="#f97316" strokeWidth="1.2" strokeDasharray="2,2" markerEnd="url(#arr-cx)"/>
      <rect x="120" y="-16" width="136" height="14" rx="3" fill="var(--bg-secondary)" opacity="0.95"/>
      <text x="188" y="-5" textAnchor="middle" fill="#f97316" fontSize="7.5" fontWeight="700">ciclo: {'{'}pos 0, 2, 3{'}'} → valores {'{'}1,3,4{'}'}</text>

      {/* Children */}
      <text x="10" y="83" fill="var(--text-secondary)" fontSize="8.5" fontWeight="700">FILHO 1:</text>
      <text x="10" y="120" fill="var(--text-secondary)" fontSize="8.5" fontWeight="700">FILHO 2:</text>
      {[0,1,2,3,4,5,6].map((i) => {
        const p1 = [1,2,3,4,5,6,7];
        const p2 = [3,7,4,1,6,2,5];
        const inCycle = [0,2,3].includes(i);
        const c1 = inCycle ? p1[i] : p2[i];
        const c2 = inCycle ? p2[i] : p1[i];
        return (
          <g key={i}>
            <rect x={65 + i * 65} y={70} width={52} height={20} rx="4"
              fill={inCycle ? '#c2410c10' : '#f9731610'}
              stroke={inCycle ? '#f97316' : '#f97316'} strokeWidth="1.5"/>
            <text x={91 + i * 65} y={83} textAnchor="middle" fill={inCycle ? '#f97316' : '#f97316'} fontSize="9" fontWeight="700">{c1}</text>
            <rect x={65 + i * 65} y={108} width={52} height={20} rx="4"
              fill={inCycle ? '#f9731610' : '#c2410c10'}
              stroke={inCycle ? '#f97316' : '#f97316'} strokeWidth="1.5"/>
            <text x={91 + i * 65} y={121} textAnchor="middle" fill={inCycle ? '#f97316' : '#f97316'} fontSize="9" fontWeight="700">{c2}</text>
          </g>
        );
      })}
      <text x="270" y="148" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Cada cidade aparece exactamente uma vez em cada filho — permutação válida garantida</text>
    </svg>
  </div>
);

const PMXDiagram = () => {
  const p1 = [1,2,3,4,5,6,7];
  const p2 = [3,7,4,1,6,2,5];
  const inSeg = (i) => i >= 2 && i <= 4; // segment = positions 2,3,4
  // child1 inherits segment from p2, child2 inherits segment from p1
  const seg1 = [4,1,6]; // p2 segment
  const seg2 = [3,4,5]; // p1 segment
  // resolved values for non-segment positions (computed via PMX mapping)
  const c1Out = { 0: 3, 1: 2, 5: 5, 6: 7 };
  const c2Out = { 0: 1, 1: 7, 5: 2, 6: 6 };
  return (
    <div style={{ ...S.diagram, textAlign: 'center' }}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>PMX (Partially Mapped Crossover) — preservando segmentos contíguos</p>
      <svg viewBox="0 0 540 200" style={{ maxWidth: '100%', height: 'auto' }}>
        {/* Parents */}
        <text x="10" y="14" fill="var(--text-secondary)" fontSize="8.5" fontWeight="700">PAI 1:</text>
        <text x="10" y="48" fill="var(--text-secondary)" fontSize="8.5" fontWeight="700">PAI 2:</text>
        {p1.map((v, i) => (
          <g key={`p-${i}`}>
            <rect x={65 + i * 65} y={2} width={52} height={20} rx="4"
              fill={inSeg(i) ? '#f9731615' : 'var(--bg-primary)'}
              stroke={inSeg(i) ? '#f97316' : 'var(--card-border)'} strokeWidth="1.5"/>
            <text x={91 + i * 65} y={15} textAnchor="middle" fill={inSeg(i) ? '#f97316' : 'var(--text-primary)'} fontSize="9" fontWeight="700">{v}</text>
            <rect x={65 + i * 65} y={35} width={52} height={20} rx="4"
              fill={inSeg(i) ? '#c2410c15' : 'var(--bg-primary)'}
              stroke={inSeg(i) ? '#f97316' : 'var(--card-border)'} strokeWidth="1.5"/>
            <text x={91 + i * 65} y={48} textAnchor="middle" fill={inSeg(i) ? '#f97316' : 'var(--text-primary)'} fontSize="9" fontWeight="700">{p2[i]}</text>
          </g>
        ))}
        {/* Cut markers */}
        <line x1="188" y1="0" x2="188" y2="62" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="3,2"/>
        <line x1="384" y1="0" x2="384" y2="62" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="3,2"/>
        <text x="286" y="68" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">segmento mapeado (posições 2–4)</text>

        {/* Mapping */}
        <text x="286" y="84" textAnchor="middle" fill="var(--text-primary)" fontSize="8.5" fontWeight="700">mapeamento: 3↔4 · 4↔1 · 5↔6</text>

        {/* Children */}
        <text x="10" y="103" fill="var(--text-secondary)" fontSize="8.5" fontWeight="700">FILHO 1:</text>
        <text x="10" y="140" fill="var(--text-secondary)" fontSize="8.5" fontWeight="700">FILHO 2:</text>
        {[0,1,2,3,4,5,6].map((i) => {
          const c1 = inSeg(i) ? seg1[i-2] : c1Out[i];
          const c2 = inSeg(i) ? seg2[i-2] : c2Out[i];
          return (
            <g key={`c-${i}`}>
              <rect x={65 + i * 65} y={90} width={52} height={20} rx="4"
                fill={inSeg(i) ? '#c2410c15' : 'var(--bg-primary)'}
                stroke={inSeg(i) ? '#f97316' : 'var(--card-border)'} strokeWidth="1.5"/>
              <text x={91 + i * 65} y={103} textAnchor="middle" fill={inSeg(i) ? '#f97316' : 'var(--text-primary)'} fontSize="9" fontWeight="700">{c1}</text>
              <rect x={65 + i * 65} y={127} width={52} height={20} rx="4"
                fill={inSeg(i) ? '#f9731615' : 'var(--bg-primary)'}
                stroke={inSeg(i) ? '#f97316' : 'var(--card-border)'} strokeWidth="1.5"/>
              <text x={91 + i * 65} y={140} textAnchor="middle" fill={inSeg(i) ? '#f97316' : 'var(--text-primary)'} fontSize="9" fontWeight="700">{c2}</text>
            </g>
          );
        })}
        <text x="270" y="170" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Filho 1 herda o segmento [4,1,6] do Pai 2; posição 0 queria copiar "1" do Pai 1, mas 1 já está no</text>
        <text x="270" y="182" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">segmento → mapeamento 1↔4↔3 → fica "3". O mesmo processo, ao contrário, gera o Filho 2.</text>
      </svg>
    </div>
  );
};

const FitnessSharingDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Fitness Sharing — partilha de fitness entre indivíduos próximos</p>
    <svg viewBox="0 0 480 250" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Top annotations */}
      <text x="140" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">f(A)=100 → f'(A)≈45.7</text>
      <text x="380" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">f(D)=80 → f'(D)=80 (sem vizinhos)</text>

      {/* Axes */}
      <line x1="30" y1="185" x2="450" y2="185" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <line x1="30" y1="185" x2="30" y2="25" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <text x="14" y="105" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" transform="rotate(-90,14,105)">fitness</text>

      {/* Landscape curves: two peaks */}
      <path d="M 30,175 C 80,175 90,45 150,45 C 210,45 220,175 270,175" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.5)" strokeWidth="1.5"/>
      <path d="M 270,175 C 320,175 330,115 380,115 C 410,115 420,175 450,175" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.5)" strokeWidth="1.5"/>

      {/* Individuals A, B, C clustered on peak 1 */}
      <circle cx="142" cy="53" r="5" fill="#f97316" stroke="white" strokeWidth="1.5"/>
      <text x="142" y="40" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">A</text>
      <circle cx="125" cy="63" r="5" fill="#f97316" stroke="white" strokeWidth="1.5"/>
      <text x="115" y="78" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">B</text>
      <circle cx="160" cy="60" r="5" fill="#f97316" stroke="white" strokeWidth="1.5"/>
      <text x="174" y="75" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">C</text>

      {/* Individual D isolated on peak 2 */}
      <circle cx="380" cy="123" r="5" fill="#f97316" stroke="white" strokeWidth="1.5"/>
      <text x="380" y="110" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">D</text>

      {/* Niche radius sigma around peak 1 */}
      <line x1="105" y1="195" x2="195" y2="195" stroke="#f97316" strokeWidth="1.5"/>
      <line x1="105" y1="190" x2="105" y2="200" stroke="#f97316" strokeWidth="1.5"/>
      <line x1="195" y1="190" x2="195" y2="200" stroke="#f97316" strokeWidth="1.5"/>
      <text x="150" y="212" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">raio de nicho σ</text>

      <text x="340" y="212" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">espaço de pesquisa (genótipo)</text>

      <text x="240" y="234" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">A, B e C partilham o mesmo nicho → fitness dividido entre os três</text>
    </svg>
  </div>
);

const RestrictedMatingDiagram = () => {
  const A = [1,0,1,1,0,1,0];
  const B = [1,0,1,1,0,1,1];
  const C = [0,1,0,1,1,0,0];
  const renderRow = (label, arr, ref, y, color) => (
    <g>
      <text x="10" y={y + 14} fill="var(--text-secondary)" fontSize="9" fontWeight="700">{label}:</text>
      {arr.map((v, i) => {
        const diff = ref && ref[i] !== v;
        return (
          <g key={i}>
            <rect x={55 + i * 40} y={y} width={32} height={24} rx="4"
              fill={diff ? `${color}15` : 'var(--bg-primary)'}
              stroke={diff ? color : 'var(--card-border)'} strokeWidth="1.5"/>
            <text x={71 + i * 40} y={y + 16} textAnchor="middle" fill={diff ? color : 'var(--text-primary)'} fontSize="10" fontWeight="700">{v}</text>
          </g>
        );
      })}
    </g>
  );
  return (
    <div style={{ ...S.diagram, textAlign: 'center' }}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Restricted Mating — "incest prevention" (δ_min = 3)</p>
      <svg viewBox="0 0 470 160" style={{ maxWidth: '100%', height: 'auto' }}>
        {renderRow('A', A, null, 5, '#f97316')}
        {renderRow('B', B, A, 40, '#f97316')}
        {renderRow('C', C, A, 75, '#f97316')}
        <text x="430" y="22" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">d(A,A)=0</text>
        <text x="430" y="57" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">d(A,B)=1 ✗</text>
        <text x="430" y="92" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">d(A,C)=5 ✓</text>
        <text x="235" y="120" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">B é demasiado parecido com A (1 bit) → cruzamento recusado (consanguinidade)</text>
        <text x="235" y="135" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">C é suficientemente diferente de A (5 bits ≥ δ_min) → cruzamento (A, C) aceite</text>
      </svg>
    </div>
  );
};

const ParetoExplorer = () => {
  return (
    <div style={{ ...S.diagram, textAlign: 'center' }}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Dominância de Pareto — trade-off entre objectivos</p>
      <svg viewBox="0 0 420 200" style={{ maxWidth: '100%', height: 'auto' }}>
        {/* Axes */}
        <line x1="50" y1="170" x2="380" y2="170" stroke="var(--text-secondary)" strokeWidth="1.5"/>
        <line x1="50" y1="170" x2="50" y2="20" stroke="var(--text-secondary)" strokeWidth="1.5"/>
        <text x="210" y="192" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Objectivo 1 (minimizar custo)</text>
        <text x="15" y="95" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" transform="rotate(-90,15,95)">Objectivo 2 (minimizar tempo)</text>

        {/* Pareto front */}
        <polyline points="80,50 120,65 160,85 200,110 250,135 310,155" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="none"/>
        <text x="315" y="148" fill="#f97316" fontSize="8" fontWeight="700">frente de Pareto</text>

        {/* Points on front (non-dominated) */}
        {[[80,50],[120,65],[160,85],[200,110],[250,135],[310,155]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r={5} fill="#f97316" stroke="white" strokeWidth="1.5"/>
        ))}

        {/* Dominated points */}
        {[[140,120],[180,140],[230,160],[170,105],[290,90]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r={4} fill="#94a3b8" stroke="white" strokeWidth="1"/>
        ))}
        <text x="150" y="152" fill="var(--text-secondary)" fontSize="7.5">dominados (piores em ≥1 obj.)</text>

        {/* Dominance arrow example */}
        <rect x="200" y="110" width="30" height="30" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="2,2"/>
        <text x="215" y="90" textAnchor="middle" fill="#f97316" fontSize="7">zona dominada</text>
        <text x="215" y="100" textAnchor="middle" fill="#f97316" fontSize="7">por (200,110)</text>
      </svg>
    </div>
  );
};

export default function CIO7() {
  const [sel, setSel] = useState(0);
  const diversityMechs = [
    {
      name: 'Fitness Sharing', color: '#f97316',
      how: 'Modifica a função de fitness para penalizar a presença de muitos indivíduos semelhantes numa região do espaço. A ideia é que os "recursos" de fitness são partilhados entre indivíduos similares: se existem k indivíduos muito parecidos com o melhor, cada um deles recebe apenas 1/k do fitness. Isto "desfavorece" regiões sobrepovoadas e incentiva a manutenção de nichos distintos.',
      formulaTex: [
        "f'(x) = \\dfrac{f(x)}{\\displaystyle\\sum_{j} sh\\big(d(x, x_j)\\big)}",
        "sh(d) = \\begin{cases} 1-\\left(\\dfrac{d}{\\sigma}\\right)^{2}, & d \\le \\sigma \\\\[4pt] 0, & \\text{caso contrário} \\end{cases}",
      ],
      example: 'Exemplo: σ = 2. Indivíduo A tem f(A) = 100 e tem dois vizinhos próximos: B a d=1 (sh = 1−(1/2)² = 0.75) e C a d=1.5 (sh = 1−(1.5/2)² ≈ 0.44). Incluindo A consigo próprio (sh(0)=1), Σsh = 1 + 0.75 + 0.44 = 2.19 → f\'(A) = 100/2.19 ≈ 45.7. Já o indivíduo D, com f(D) = 80 mas sem vizinhos a d ≤ σ, mantém f\'(D) = 80/1 = 80. Apesar do fitness bruto menor, D passa a "valer mais" que A — o algoritmo é empurrado a explorar a zona de D em vez de reforçar ainda mais a zona já povoada de A.',
      pros: 'Mantém diversidade estrutural ao longo de toda a evolução. Pode explorar múltiplos picos simultaneamente (multimodal optimization).',
      cons: 'Requer parâmetro σ (raio de nicho) difícil de calibrar. Custo computacional O(N²) para calcular todas as distâncias.',
      Diagram: FitnessSharingDiagram,
    },
    {
      name: 'Restricted Mating', color: '#f97316',
      how: 'Restringe quais indivíduos podem cruzar: só pares suficientemente similares (ou suficientemente diferentes) têm permissão de se reproduzir. Variante "incest prevention": só se reproduzem pares com similaridade abaixo de um limiar. Variante "assortative mating": só se reproduzem pares similares (preserva especialização).',
      formulaTex: [
        "d(x,y) \\le \\delta_{max} \\;\\text{(similar)} \\quad \\text{ou} \\quad d(x,y) \\ge \\delta_{min} \\;\\text{(diferente)}",
      ],
      example: 'Exemplo de "incest prevention" com δ_min = 3 (distância de Hamming) num genoma binário de 7 bits. O indivíduo A = [1,0,1,1,0,1,0] foi seleccionado para reproduzir. Candidato B = [1,0,1,1,0,1,1] difere de A em apenas 1 bit (d=1 < δ_min) → cruzamento recusado, são "demasiado parentes" e o filho seria quase idêntico aos pais. Candidato C = [0,1,0,1,1,0,0] difere em 5 bits (d=5 ≥ δ_min) → cruzamento aceite. O par (A, C) tem maior probabilidade de gerar descendência numa região nova do espaço de pesquisa.',
      pros: 'Conceptualmente simples. Implementação directa sobre o operador de crossover. Não requer modificação do fitness.',
      cons: 'Pode reduzir demasiado o número de crossovers se o limiar for mal calibrado. Pode criar sub-populações isoladas (especiação excessiva).',
      Diagram: RestrictedMatingDiagram,
    },
  ];
  const m = diversityMechs[sel];

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cio" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>Module 7</div>
        <h1 style={S.h1}>Diversidade & Operadores para Permutações</h1>
        <p style={S.lead}>Dois problemas práticos centrais dos AGs: convergência prematura (perda de diversidade) e representação de problemas de ordenação como o TSP. Os mecanismos de diversidade (fitness sharing, restricted mating) mantêm a população heterogénea. Os operadores CX e PMX garantem filhos válidos para representações por permutação.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. Convergência Prematura — O Grande Problema</h2>
          <p style={S.p}>A convergência prematura é o problema mais comum e mais grave na prática dos AGs: a população converge para uma região estreita do espaço de pesquisa muito antes de encontrar o ótimo global. Tipicamente, um ou alguns indivíduos de alto fitness dominam a reprodução, e após algumas gerações todos os indivíduos da população são descendentes directos desses poucos "super-indivíduos".</p>
          <p style={S.p}>Quando a população converge prematuramente, os operadores de crossover tornam-se ineficazes — cruzar indivíduos muito similares produz filhos quase idênticos aos pais. Apenas a mutação pode criar variação, mas a uma taxa tão baixa que o algoritmo degenera em pesquisa local aleatória a partir de um único ponto.</p>
          <p style={S.p}>O Teorema da Convergência formal é pessimista: com selecção por fitness proporcional e sem mutação, qualquer AG converge com probabilidade 1 para uma população homogénea em tempo finito — independentemente de encontrar o ótimo global ou não. A diversidade tem de ser activamente mantida.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Sintoma</th><th style={S.th}>Diagnóstico</th><th style={S.th}>Solução</th></tr></thead>
              <tbody>
                {[
                  ['Fitness médio ≈ fitness máximo', 'A população convergiu — todos os indivíduos têm fitness similar', 'Reduzir pressão de selecção, aumentar mutação, aplicar mecanismo de diversidade'],
                  ['Desvio padrão do fitness → 0', 'Homogeneidade genética — population collapse', 'Reinicialização parcial, fitness sharing, crowding'],
                  ['Fitness máximo estagna cedo', 'Convergência para ótimo local com perda de diversidade', 'Restricted mating, aumentar N, reduzir pc ou aumentar pm temporariamente'],
                  ['Diversidade genética (Hamming) → 0', 'Todos os genes tomaram o mesmo valor em todas as posições', 'Operador de reinicialização, mutação adaptativamente mais alta'],
                ].map(([s, d, sol]) => (
                  <tr key={s}><td style={{ ...S.td, fontWeight: 600, color: '#f97316', fontSize: '0.85rem' }}>{s}</td><td style={S.td}>{d}</td><td style={{ ...S.td, color: '#f97316', fontSize: '0.85rem' }}>{sol}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Mecanismos de Diversidade</h2>
          <p style={S.p}>Dois mecanismos principais para manter diversidade activa ao longo da evolução: fitness sharing (penaliza regiões sobrepovoadas) e restricted mating (controla quem se pode reproduzir). Cada um actua num ponto diferente do ciclo evolutivo.</p>

          <div style={S.diagram}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              {diversityMechs.map((dm, i) => (
                <button key={i} onClick={() => setSel(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: sel === i ? dm.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? dm.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{dm.name}</button>
              ))}
            </div>
            <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${m.color}30` }}>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{m.how}</p>
              <div style={{ background: `${m.color}10`, borderRadius: 6, padding: '0.75rem', marginBottom: '0.6rem', color: m.color, overflowX: 'auto' }}>
                {m.formulaTex.map((tex, i) => <BlockMath key={i} math={tex} />)}
              </div>
              <div style={{ background: 'var(--bg-secondary)', border: `1px solid ${m.color}30`, borderRadius: 6, padding: '0.6rem 0.8rem', marginBottom: '0.6rem', fontSize: '0.83rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}><strong style={{ color: m.color }}>Exemplo: </strong>{m.example}</div>
              <m.Diagram />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.83rem' }}>
                <div><strong style={{ color: '#f97316' }}>Vantagem:</strong> <span style={{ color: 'var(--text-secondary)' }}>{m.pros}</span></div>
                <div><strong style={{ color: '#f97316' }}>Limitação:</strong> <span style={{ color: 'var(--text-secondary)' }}>{m.cons}</span></div>
              </div>
            </div>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Crossover para Permutações — CX e PMX</h2>
          <p style={S.p}>O crossover binário standard (1-ponto, uniforme) não funciona para permutações: se cruzar dois vectores [1,2,3,4,5] e [3,1,5,2,4] por 1-ponto no meio, o resultado [1,2,5,2,4] viola a restrição de permutação (2 repetido, 3 ausente). Precisamos de operadores que garantam que os filhos são sempre permutações válidas.</p>

          <CXDiagram />

          <h3 style={S.h3}>PMX — Partially Mapped Crossover</h3>
          <p style={S.p}>O PMX é mais simples conceptualmente que o CX. Funciona assim: (1) escolher dois pontos de corte aleatórios; (2) o filho herda o segmento central do pai 2; (3) para cada posição fora do segmento, tentar copiar o gene do pai 1 — se esse gene já está no filho (foi herdado do segmento central do pai 2), usar o mapeamento para encontrar o substituto; (4) qualquer posição ainda vazia é preenchida com o gene correspondente do pai 1.</p>
          <p style={S.p}>A diferença entre CX e PMX: o CX preserva posições absolutas (a cidade X fica na mesma posição de um dos pais), enquanto o PMX preserva segmentos contíguos (um troço de rota é mantido intacto de um dos pais). Para o TSP, o PMX tende a ter melhor performance porque o que importa é a ordem relativa das cidades num segmento de rota, não a posição absoluta de cada cidade.</p>

          <PMXDiagram />

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Operador</th><th style={S.th}>O que preserva</th><th style={S.th}>Como funciona (resumo)</th><th style={S.th}>Quando usar</th></tr></thead>
              <tbody>
                {[
                  ['CX (Cycle Crossover)', 'Posições absolutas de cada elemento', 'Encontra ciclos no mapeamento entre pai 1 e pai 2. Genes do ciclo 1 vêm do pai 1, resto do pai 2.', 'Quando a posição absoluta é importante (ex: assignment problems)'],
                  ['PMX (Partially Mapped)', 'Segmentos contíguos de sub-rota', 'Herda segmento central de pai 2, preenche resto com pai 1 via mapeamento para evitar repetições.', 'TSP e routing — a qualidade de segmentos de rota é o que importa'],
                  ['OX (Order Crossover)', 'Ordem relativa entre elementos', 'Herda segmento de pai 1, preenche resto com pai 2 na ordem em que aparecem (saltando os já presentes).', 'Quando a ordem relativa é mais importante que posições absolutas'],
                ].map(([op, p, h, w]) => (
                  <tr key={op}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{op}</td><td style={S.td}>{p}</td><td style={{ ...S.td, fontSize: '0.85rem' }}>{h}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{w}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Mutação para Permutações</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Operador</th><th style={S.th}>Como funciona</th><th style={S.th}>Perturbação</th></tr></thead>
              <tbody>
                {[
                  ['Swap', 'Escolher aleatoriamente duas posições i e j e trocar os seus elementos.', 'Mínima — troca dois elementos. n(n-1)/2 vizinhos possíveis.'],
                  ['Inversion', 'Escolher duas posições i e j e inverter o segmento entre elas.', 'Média — equivalente ao 2-opt. Resolve cruzamentos de arcos.'],
                  ['Insertion', 'Escolher um elemento e inseri-lo noutra posição aleatória.', 'Pequena a média — desloca um elemento, preserva a ordem dos restantes.'],
                  ['Scramble', 'Escolher um segmento aleatório e baralhar aleatoriamente os seus elementos.', 'Grande — pode destruir estrutura de sub-rota. Útil para diversidade.'],
                ].map(([op, h, p]) => (
                  <tr key={op}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{op}</td><td style={S.td}>{h}</td><td style={{ ...S.td, color: 'var(--text-secondary)' }}>{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Optimização Multi-Objectivo e Dominância de Pareto</h2>
          <p style={S.p}>A maioria dos problemas reais têm múltiplos objectivos em conflito: minimizar custo e maximizar qualidade, minimizar tempo e minimizar uso de recursos. Em problemas mono-objectivo, há uma única solução óptima. Em multi-objectivo, não existe solução que seja a melhor em todos os objectivos — existe um conjunto de soluções de compromisso.</p>
          <p style={S.p}>Uma solução x domina uma solução y (escrito x ≻ y) se x é pelo menos tão boa quanto y em todos os objectivos e estritamente melhor em pelo menos um objectivo. A frente de Pareto é o conjunto de todas as soluções não-dominadas — aquelas para as quais não existe nenhuma outra solução que seja melhor em todos os aspectos simultaneamente.</p>

          <ParetoExplorer />

          <h3 style={S.h3}>NSGA-II — Selecção Multi-Objectivo</h3>
          <p style={S.p}>O algoritmo NSGA-II (Non-Dominated Sorting Genetic Algorithm II) é o método de referência para AGs multi-objectivo. O operador de selecção usa dois critérios: (1) rank de não-dominância — os indivíduos da frente de Pareto têm rank 1, os da segunda frente têm rank 2, etc.; (2) crowding distance — dentro do mesmo rank, preferem-se indivíduos mais "isolados" na frente (maior distância aos vizinhos), mantendo diversidade ao longo da frente de Pareto.</p>
          <p style={S.p}>O resultado é uma população que evolui para cobrir toda a frente de Pareto — não apenas um ponto dela — fornecendo ao decisor um leque completo de soluções de compromisso.</p>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
              <li>Convergência prematura: população homogénea antes de encontrar o ótimo global. Principal falha prática dos AGs.</li>
              <li>Fitness sharing: penaliza regiões sobrepovoadas — recursos de fitness partilhados entre indivíduos similares.</li>
              <li>Restricted mating: restringe crossover a pares similares ou dissimilares conforme o objectivo.</li>
              <li>CX: preserva posições absolutas (ciclos entre pais). PMX: preserva segmentos contíguos (mapeamento entre cortes). OX: preserva ordem relativa. Todos garantem permutações válidas.</li>
              <li>Dominância de Pareto: x domina y se melhor em todos os objectivos e estritamente melhor em pelo menos um. Frente de Pareto = conjunto de não-dominados.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
