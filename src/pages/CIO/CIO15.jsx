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

const MembershipDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Conjuntos Fuzzy — Funções de Pertença para "Temperatura"</p>
    <svg viewBox="0 0 560 160" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrF" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)"/></marker>
      </defs>

      {/* Axes */}
      <line x1={30} y1={130} x2={510} y2={130} stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrF)"/>
      <line x1={30} y1={130} x2={30} y2={20} stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrF)"/>
      <text x={515} y={133} fill="var(--text-secondary)" fontSize="8">°C</text>
      <text x={18} y={18} fill="var(--text-secondary)" fontSize="8">μ</text>
      <text x={25} y={28} fill="var(--text-secondary)" fontSize="7">1.0</text>
      <text x={25} y={82} fill="var(--text-secondary)" fontSize="7">0.5</text>

      {/* Temperature labels */}
      {[{x:80,l:'0'},{x:180,l:'20'},{x:280,l:'40'},{x:380,l:'60'},{x:480,l:'80'}].map(({x,l})=>(
        <g key={l}>
          <line x1={x} y1={128} x2={x} y2={132} stroke="var(--text-secondary)" strokeWidth="1"/>
          <text x={x} y={142} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{l}</text>
        </g>
      ))}

      {/* Cold membership (blue trapezoid) */}
      <path d="M 30,30 L 130,30 L 230,130" fill="rgba(59,130,246,0.15)" stroke="#f97316" strokeWidth="2"/>
      <text x={100} y={55} fill="#f97316" fontSize="9" fontWeight="700">Frio</text>

      {/* Tepid membership (green triangle) */}
      <path d="M 130,130 L 255,30 L 380,130" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2"/>
      <text x={255} y={25} textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Morno</text>

      {/* Hot membership (red trapezoid) */}
      <path d="M 305,130 L 405,30 L 505,30" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2"/>
      <text x={400} y={55} fill="#f97316" fontSize="9" fontWeight="700">Quente</text>

      {/* Example: T=30°C */}
      <line x1={205} y1={130} x2={205} y2={20} stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3"/>
      <circle cx={205} cy={57} r={4} fill="#f97316"/>
      <circle cx={205} cy={105} r={4} fill="#f97316"/>
      <text x={160} y={45} fill="#f97316" fontSize="8.5" fontWeight="700">T=30°C</text>
      <text x={160} y={55} fill="#f97316" fontSize="7.5">μ_frio=0.5</text>
      <text x={215} y={95} fill="#f97316" fontSize="7.5">μ_morno=0.5</text>
      <text x={215} y={105} fill="var(--text-secondary)" fontSize="7">Pertence simultaneamente</text>
      <text x={215} y={115} fill="var(--text-secondary)" fontSize="7">a Frio e Morno com grau 0.5</text>
    </svg>
  </div>
);

const FuzzySystemExplorer = () => {
  const [sel, setSel] = useState(0);
  const steps = [
    {
      name: 'Fuzzificação',
      color: '#f97316',
      desc: 'Converter inputs numéricos (crisp) em graus de pertença a conjuntos fuzzy. Para cada variável de entrada, calcula-se μ_A(x) para cada conjunto fuzzy A (e.g., Frio, Morno, Quente). O resultado é um vector de graus de pertença.',
      exemplo: 'Temperatura = 30°C → μ_frio(30)=0.5, μ_morno(30)=0.5, μ_quente(30)=0.0',
    },
    {
      name: 'Inferência',
      color: '#f97316',
      desc: 'Avaliar cada regra fuzzy na base de conhecimento. Regra: "SE temperatura É quente ENTÃO ventoinha É rápida". O antecedente é avaliado (min ou produto dos graus de pertença). O consequente é truncado/escalado pelo grau do antecedente.',
      exemplo: 'SE T é Morno (0.5) ENTÃO V é Média: a função de pertença de "Média" é escalada por 0.5',
    },
    {
      name: 'Agregação',
      color: '#f97316',
      desc: 'Combinar os outputs de todas as regras disparadas. Cada regra contribui com uma porção truncada/escalada da sua função de pertença do output. A agregação é tipicamente o máximo (união fuzzy) das contribuições de todas as regras.',
      exemplo: 'Regra1 contribui 0.3 de Lenta, Regra2 contribui 0.5 de Média → agrega-se por máximo.',
    },
    {
      name: 'Defuzzificação',
      color: '#f97316',
      desc: 'Converter o conjunto fuzzy agregado de output num valor numérico (crisp). O método mais comum é o centróide (centro de gravidade): integrar x·μ(x)dx / ∫μ(x)dx. Alternativas: bisector, MOM (mean of maxima), SOM, LOM.',
      exemplo: 'Área agregada da ventoinha → centróide = 65 RPM. Output final: a ventoinha roda a 65 RPM.',
    },
  ];
  const s = steps[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Pipeline de Inferência Fuzzy (Mamdani)</p>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {steps.map((st, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: sel === i ? st.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? st.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>
            {i + 1}. {st.name}
          </button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${s.color}30` }}>
        <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>{s.desc}</p>
        <div style={{ background: `${s.color}10`, borderRadius: 6, padding: '0.6rem 0.9rem', borderLeft: `3px solid ${s.color}`, fontSize: '0.85rem' }}>
          <strong>Exemplo:</strong> {s.exemplo}
        </div>
      </div>
    </div>
  );
};

export default function CIO15() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cio" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>Module 15</div>
        <h1 style={S.h1}>Sistemas Fuzzy</h1>
        <p style={S.lead}>A lógica fuzzy de Lotfi Zadeh (1965) formaliza o raciocínio humano impreciso: "temperatura alta", "velocidade rápida", "pressão média" são conceitos graduais, não binários. Em vez de pertença clássica (0 ou 1), os conjuntos fuzzy permitem graus de pertença em [0,1]. Um sistema fuzzy codifica conhecimento especialista em regras linguísticas ("SE temperatura É alta ENTÃO ventoinha É rápida") e produz um output numérico preciso por defuzzificação.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. Conjuntos Fuzzy e Funções de Pertença</h2>
          <p style={S.p}>Um conjunto fuzzy A sobre um universo de discurso X é definido por uma função de pertença μ_A: X → [0,1]. μ_A(x) = 1 significa pertença total; μ_A(x) = 0 significa não-pertença; qualquer valor intermédio representa pertença parcial. Um elemento pode pertencer simultaneamente a múltiplos conjuntos fuzzy com graus diferentes.</p>
          <p style={S.p}>As formas mais comuns de funções de pertença são: triangular (3 parâmetros), trapezoidal (4 parâmetros), gaussiana (2 parâmetros: μ, σ), e sigmoidal. A escolha depende do domínio e do conhecimento especialista.</p>
          <MembershipDiagram />

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Operação</th><th style={S.th}>Lógica Clássica</th><th style={S.th}>Lógica Fuzzy (min/max)</th><th style={S.th}>Lógica Fuzzy (produto)</th></tr></thead>
              <tbody>
                {[
                  ['Intersecção (AND)', 'A ∩ B = min(A,B) = {0,1}', 'μ_{A∩B}(x) = min(μ_A(x), μ_B(x))', 'μ_{A∩B}(x) = μ_A(x) · μ_B(x)'],
                  ['União (OR)', 'A ∪ B = max(A,B) = {0,1}', 'μ_{A∪B}(x) = max(μ_A(x), μ_B(x))', 'μ_{A∪B}(x) = μ_A + μ_B − μ_A·μ_B'],
                  ['Complemento (NOT)', 'Ā = 1 − A = {0,1}', 'μ_Ā(x) = 1 − μ_A(x)', '1 − μ_A(x) (igual)'],
                ].map(([op, cl, fmm, fp]) => (
                  <tr key={op}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{op}</td><td style={S.td}>{cl}</td><td style={S.td}>{fmm}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{fp}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Base de Regras Fuzzy</h2>
          <p style={S.p}>Um sistema fuzzy codifica conhecimento especialista numa base de regras linguísticas do tipo SE-ENTÃO. Cada regra relaciona variáveis de entrada (antecedentes) com variáveis de saída (consequentes), usando os conjuntos fuzzy definidos.</p>

          <div style={S.diagram}>
            <p style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Exemplo: Controlador de Ventoinha</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.85rem' }}>
              {[
                { rule: 'SE temperatura É Fria ENTÃO ventoinha É Lenta', cond: 'μ_fria > 0', color: '#f97316' },
                { rule: 'SE temperatura É Morna ENTÃO ventoinha É Média', cond: 'μ_morna > 0', color: '#f97316' },
                { rule: 'SE temperatura É Quente ENTÃO ventoinha É Rápida', cond: 'μ_quente > 0', color: '#f97316' },
                { rule: 'SE temperatura É Quente E humidade É Alta ENTÃO ventoinha É Máxima', cond: 'μ_quente>0 AND μ_alta>0', color: '#f97316' },
              ].map(({ rule, cond, color }) => (
                <div key={rule} style={{ background: 'var(--bg-primary)', borderRadius: 6, padding: '0.6rem 0.8rem', border: `1px solid ${color}30` }}>
                  <div style={{ fontWeight: 600, color, fontSize: '0.82rem', marginBottom: '0.2rem' }}>{rule}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Dispara quando: {cond}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Pipeline de Inferência Fuzzy</h2>
          <FuzzySystemExplorer />

          <h3 style={S.h3}>Mamdani vs Takagi-Sugeno</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>Mamdani</th><th style={S.th}>Takagi-Sugeno (TSK)</th></tr></thead>
              <tbody>
                {[
                  ['Consequente da regra', 'Conjunto fuzzy linguístico ("ventoinha É Rápida")', 'Função linear dos inputs: y = a·x₁ + b·x₂ + c'],
                  ['Defuzzificação', 'Necessária (centróide, bisector, etc.)', 'Não necessária — output é médio ponderado dos valores lineares'],
                  ['Interpretabilidade', 'Alta — regras totalmente linguísticas', 'Menor — consequentes são equações'],
                  ['Eficiência computacional', 'Maior custo (integração numérica)', 'Mais eficiente (média ponderada)'],
                  ['Uso típico', 'Controlo embebido, sistemas de diagnóstico', 'Modelação de sistemas não-lineares, controlo adaptativo'],
                ].map(([a, m, t]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)' }}>{a}</td><td style={{ ...S.td, color: '#f97316' }}>{m}</td><td style={S.td}>{t}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Fuzzy na Inteligência Computacional — Contexto CIFO</h2>
          <p style={S.p}>Na CIFO, os sistemas fuzzy são relevantes em dois contextos: (1) como componente de controlo em sistemas de optimização (e.g., controlar os parâmetros do SA ou do AG com base no progresso da optimização), e (2) como componente de modelação em problemas onde o conhecimento especialista existe mas é impreciso.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aplicação em CI</th><th style={S.th}>Como se usa Fuzzy</th><th style={S.th}>Vantagem</th></tr></thead>
              <tbody>
                {[
                  ['Fuzzy AG', 'Controlar Pc e Pm com base no progresso (diversidade, estagnação)', 'Auto-adaptação de hiperparâmetros sem meta-optimização'],
                  ['Fuzzy SA', 'Controlar T(t) com base na taxa de aceitação de piores soluções', 'Cooling schedule adaptativo — mais eficiente'],
                  ['Classificação Fuzzy', 'Classificar exemplos em múltiplas classes com graus', 'Representação de incerteza e sobreposição de classes'],
                  ['Optimização multi-objectivo', 'Agregar múltiplos objectivos com pesos fuzzy (grau de satisfação)', 'Incorporar preferências linguísticas do decisor'],
                  ['Controlo de robots', '"SE obstaculo É Próximo ENTÃO virar É Forte"', 'Controlo reactivo sem modelo explícito do ambiente'],
                ].map(([a, c, v]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{a}</td><td style={S.td}>{c}</td><td style={{ ...S.td, color: '#f97316', fontSize: '0.83rem' }}>{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Os sistemas fuzzy são especialmente valiosos quando o conhecimento especialista existe mas é difícil de formalizar em regras crisp. Um engenheiro de controlo que diz "quando a temperatura é alta, aumentar a ventoinha" já tem o sistema fuzzy quase todo especificado.</div>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
              <li>Conjuntos fuzzy: μ_A(x) ∈ [0,1]. Um elemento pode pertencer a múltiplos conjuntos simultaneamente com graus diferentes.</li>
              <li>Operações fuzzy (min/max): AND = min(μ_A, μ_B), OR = max(μ_A, μ_B), NOT = 1 − μ_A.</li>
              <li>Pipeline Mamdani: Fuzzificação → Inferência (avaliar regras) → Agregação (união dos outputs) → Defuzzificação (centróide).</li>
              <li>Takagi-Sugeno: consequentes são funções lineares dos inputs — mais eficiente, menos interpretável.</li>
              <li>Em CIFO: fuzzy para controlar hiperparâmetros de AGs/SA adaptativamente, ou para integrar conhecimento especialista impreciso.</li>
              <li>Vantagem principal: interpretabilidade — as regras são linguísticas e podem ser auditadas por especialistas do domínio.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
