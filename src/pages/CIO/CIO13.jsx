import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const S = {
  page: { maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' },
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
};

const WaggleDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Dança Waggle — Comunicação de Localização da Fonte</p>
    <svg viewBox="0 0 560 160" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrBee" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316"/></marker>
      </defs>

      {/* Colmeia */}
      <rect x="10" y="60" width="60" height="50" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2"/>
      <text x="40" y="82" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Colmeia</text>
      <text x="40" y="95" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">dança</text>
      <text x="40" y="105" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">waggle</text>

      {/* Sun */}
      <circle cx={280} cy={30} r={18} fill="rgba(255,200,0,0.3)" stroke="#f97316" strokeWidth="2"/>
      <text x={280} y={34} textAnchor="middle" fill="#f97316" fontSize="11">☀</text>
      <text x={280} y={55} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Sol</text>

      {/* Food source */}
      <circle cx={480} cy={110} r={18} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2"/>
      <text x={480} y={114} textAnchor="middle" fill="#f97316" fontSize="11">🌸</text>
      <text x={480} y={137} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Fonte de néctar</text>

      {/* Angle */}
      <line x1={40} y1={85} x2={260} y2={32} stroke="#f97316" strokeWidth="1" strokeDasharray="4,3"/>
      <line x1={40} y1={85} x2={462} y2={110} stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrBee)"/>
      <text x={200} y={110} fill="var(--text-secondary)" fontSize="8">ângulo α relativo ao sol = direcção da fonte</text>

      {/* Duration */}
      <rect x="130" y="130" width="200" height="25" rx="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1"/>
      <text x="230" y="146" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">duração da dança ∝ qualidade / distância</text>
    </svg>
  </div>
);

const BeeAlgorithmSteps = () => {
  const [step, setStep] = useState(0);
  const steps = [
    { label: 'Scout bees', color: '#f97316', content: 'Um subconjunto de abelhas (scout bees) é enviado para explorar sítios aleatórios no espaço de pesquisa. Cada scout regressa à colmeia e avalia a qualidade do sítio visitado (fitness da solução). Inicia a população inicial de soluções candidatas.' },
    { label: 'Waggle dance', color: '#f97316', content: 'As scouts com maior qualidade executam a dança waggle. A intensidade da dança (duração, vigor) é proporcional à qualidade do sítio. As abelhas observadoras (onlooker bees) na colmeia observam as danças e decidem que sítio visitar.' },
    { label: 'Selecção do sítio', color: '#f97316', content: 'As onlooker bees seleccionam sítios com probabilidade proporcional à qualidade da dança. Os m melhores sítios (elite) recrutam mais abelhas (e_b foragers). Os próximos melhores (m−n, non-elite) recebem menos abelhas (b_b foragers). Os restantes são abandonados.' },
    { label: 'Pesquisa local', color: '#f97316', content: 'As forager bees enviadas para cada sítio fazem pesquisa local em torno do sítio: visitam vizinhos dentro de um raio ngh. O melhor vizinho encontrado substitui o sítio actual. Isto equivale a hill-climbing local em cada sítio seleccionado.' },
    { label: 'Substituição scouts', color: '#f97316', content: 'Se um sítio não melhorou após limit avaliações (stagnation), a sua abelha scout é re-inicializada aleatoriamente (nova exploração global). Mecanismo que equilibra exploração e exploitação.' },
  ];
  const s = steps[step];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>O Algoritmo das Abelhas — Ciclo Completo</p>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {steps.map((st, i) => (
          <button key={i} onClick={() => setStep(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: step === i ? st.color : 'var(--bg-primary)', color: step === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${step === i ? st.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>
            {i + 1}. {st.label}
          </button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${s.color}30`, fontSize: '0.9rem', lineHeight: 1.8 }}>
        <strong style={{ color: s.color }}>{s.label}</strong>
        <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>{s.content}</p>
      </div>
    </div>
  );
};

export default function CIO13() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cio" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>Module 13</div>
        <h1 style={S.h1}>Bee Algorithm</h1>
        <p style={S.lead}>O Bee Algorithm (BA) de Pham et al. (2005) imita o comportamento de forrageio das abelhas melíferas. As abelhas exploram o espaço de soluções, comunicam a qualidade dos sítios encontrados através da dança waggle, e recrutam outras abelhas proporcionalmente à qualidade — equilibrando exploração global (scout bees) com exploitação local (forager bees em torno dos melhores sítios).</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. Inspiração Biológica — Forrageio das Abelhas</h2>
          <p style={S.p}>As abelhas melíferas desenvolveram um sistema de comunicação extraordinariamente eficiente para explorar fontes de néctar. Uma abelha scout que encontra uma boa fonte regressa à colmeia e executa a <strong>dança waggle</strong>: um movimento em figura de oito cujo ângulo em relação ao sol indica a direcção da fonte, e cuja duração indica a qualidade (combinação de distância e néctar disponível). As observadoras seleccionam qual scout seguir com probabilidade proporcional à qualidade da dança.</p>
          <p style={S.p}>O resultado é um sistema de alocação adaptativa: sítios de alta qualidade recebem mais abelhas (exploitação), enquanto scouts novas continuam a explorar o espaço (exploração). Quando uma fonte se esgota, as abelhas a ela alocadas tornam-se scouts novamente.</p>
          <WaggleDiagram />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. O Algoritmo — Parâmetros e Ciclo</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Parâmetro</th><th style={S.th}>Significado</th><th style={S.th}>Valor típico</th></tr></thead>
              <tbody>
                {[
                  ['n', 'Número total de abelhas / tamanho de população de sítios', '10 – 50'],
                  ['m', 'Número de sítios seleccionados para pesquisa local', 'n/2 – 2n/3'],
                  ['e', 'Número de elite sites (os melhores m)', '2 – 5'],
                  ['e_b', 'Foragers enviadas para cada elite site', '5 – 15'],
                  ['b_b', 'Foragers enviadas para sítios não-elite (m−e)', '2 – 5'],
                  ['ngh', 'Raio de pesquisa local (neighbourhood size)', 'Problema-específico; decresce ao longo da optimização'],
                  ['limit', 'Iterações sem melhoria antes de re-inicializar um sítio', '5 – 20'],
                ].map(([p, m, v]) => (
                  <tr key={p}><td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700, color: '#f97316' }}>{p}</td><td style={S.td}>{m}</td><td style={{ ...S.td, color: 'var(--text-secondary)' }}>{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <BeeAlgorithmSteps />
          <div style={S.note}>O BA combina uma pesquisa global por abelhas scout com pesquisa local (hill-climbing) em torno dos melhores sítios. É conceptualmente similar ao Simulated Annealing com múltiplos agentes em paralelo — mas com alocação adaptativa de recursos.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Variantes do Bee Algorithm</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Variante</th><th style={S.th}>Diferença principal</th><th style={S.th}>Vantagem</th></tr></thead>
              <tbody>
                {[
                  ['BA standard (Pham 2005)', 'Base: scouts + foragers + pesquisa local', 'Simples; fácil de implementar e ajustar'],
                  ['Artificial Bee Colony (ABC, Karaboga 2005)', 'Três tipos: employed, onlooker, scout. Employed bees exploram os sítios; onlookers seleccionam por roleta; scouts re-inicializam após stagnation', 'Muito popular; bom para problemas contínuos; convergência rápida'],
                  ['Enhanced Bee Algorithm', 'Raio ngh adaptativo (decresce com o número de iterações)', 'Melhor equilíbrio exploração/exploitação; evita convergência prematura'],
                  ['VBAS (Virtual Bee Algorithm)', 'Sem divisão explícita de papéis; toda a população usa a dança waggle', 'Mais simples; adequado para problemas discretos'],
                ].map(([v, d, a]) => (
                  <tr key={v}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{v}</td><td style={S.td}>{d}</td><td style={{ ...S.td, color: '#f97316', fontSize: '0.83rem' }}>{a}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Quando Usar o Bee Algorithm</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Situação</th><th style={S.th}>BA/ABC</th><th style={S.th}>Alternativa</th></tr></thead>
              <tbody>
                {[
                  ['Landscape multimodal com muitos óptimos locais', 'Excelente — múltiplos sítios em paralelo evitam convergência prematura', 'PSO pode ficar preso; SA precisa de muitas avaliações'],
                  ['Problema combinatório discreto', 'Bom — pesquisa local adaptada ao domínio', 'ACO pode ser mais eficiente com feromónas'],
                  ['Optimização contínua de baixa dimensão (D&lt;30)', 'Muito bom — ABC é competitivo com DE', 'CMA-ES mais eficiente em dimensão muito baixa'],
                  ['Alta dimensão (D&gt;100)', 'Degradação significativa', 'DE, CMA-ES, ou PSO com inércia adaptativa'],
                  ['Recursos computacionais limitados', 'Bom — poucos parâmetros, fácil de ajustar', 'SA mais simples ainda; menos parâmetros'],
                ].map(([s, ba, alt]) => (
                  <tr key={s}><td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{s}</td><td style={{ ...S.td, color: '#f97316' }}>{ba}</td><td style={{ ...S.td, fontSize: '0.83rem' }}>{alt}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
              <li>Inspiração: dança waggle — ângulo indica direcção, duração indica qualidade. As observadoras seguem scouts com probabilidade ∝ qualidade.</li>
              <li>Estrutura: n scout bees → m melhores sítios seleccionados → e elite sites (e_b foragers) + m−e non-elite (b_b foragers) + pesquisa local (hill-climbing) em cada sítio.</li>
              <li>Exploração/exploitação: scouts exploram globalmente; foragers exploitam localmente; re-inicialização após stagnation (limit iterações sem melhoria).</li>
              <li>ABC (Karaboga): variante mais popular — employed + onlooker + scout bees. Convergência rápida em problemas contínuos.</li>
              <li>Ideal para: landscapes multimodais, baixa a média dimensão, quando pesquisa local é possível no domínio do problema.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
