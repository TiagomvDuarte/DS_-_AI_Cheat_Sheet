import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#4a9eed';
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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(74,158,237,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

// === Diagram: Cohort retention curves ===
const CohortCurvesDiagram = () => {
  const w = 480, h = 220, pad = 40;
  const months = [0, 1, 2, 3, 4, 5];
  const xToPx = (m) => pad + (m / 5) * (w - 2 * pad);
  const yToPx = (pct) => h - pad - (pct / 100) * (h - 2 * pad);

  const cohorts = [
    { label: 'Jan', c: '#4a9eed', vals: [100, 65, 48, 38, 32, 28] },
    { label: 'Fev', c: '#38bdf8', vals: [100, 70, 52, 44, 39, null] },
    { label: 'Mar', c: '#bae6fd', vals: [100, 68, 55, 50, null, null] },
  ];

  const makePath = (vals) => {
    let d = '';
    vals.forEach((v, i) => {
      if (v == null) return;
      const x = xToPx(months[i]);
      const y = yToPx(v);
      d += (d === '' ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1) + ' ';
    });
    return d;
  };

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Curvas de Retenção por Cohort</p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%', height: 'auto' }}>
        <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={pad} y1={pad} x2={pad} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <text x={w / 2} y={h - 5} textAnchor="middle" fill="var(--text-secondary)" fontSize="11">Mês desde aquisição →</text>
        <text x="14" y={h / 2} textAnchor="middle" fill="var(--text-secondary)" fontSize="11" transform={`rotate(-90 14 ${h / 2})`}>Retenção (%)</text>
        {months.map(m => (
          <text key={m} x={xToPx(m)} y={h - pad + 16} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">{m}</text>
        ))}
        {[0, 25, 50, 75, 100].map(p => (
          <text key={p} x={pad - 8} y={yToPx(p) + 3} textAnchor="end" fill="var(--text-secondary)" fontSize="9">{p}</text>
        ))}
        {cohorts.map(({ label, c, vals }, ci) => (
          <g key={ci}>
            <path d={makePath(vals)} fill="none" stroke={c} strokeWidth="2.5" />
            {vals.map((v, i) => v != null && <circle key={i} cx={xToPx(months[i])} cy={yToPx(v)} r="3.5" fill={c} />)}
            <text x={w - pad - 5} y={yToPx(vals.filter(v => v != null).slice(-1)[0]) - 6} textAnchor="end" fill={c} fontSize="10" fontWeight="700">{label}</text>
          </g>
        ))}
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Cada linha representa a evolução de um cohort ao longo do tempo. Cohorts mais recentes (Mar) têm menos
        pontos — ainda não atingiram os meses futuros. Comparar as curvas permite responder a perguntas como:
        "a retenção está a melhorar ao longo do tempo (cohorts mais recentes retêm melhor)?" ou "existe um
        "cotovelo" a partir do qual a retenção estabiliza (os clientes que sobrevivem ao mês 2 tendem a
        ficar)?"
      </p>
    </div>
  );
};

// === Diagram: RFM cube ===
const RFMCubeDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>O Cubo RFM — 3 dimensões × 4 quartis = 64 células</p>
    <svg viewBox="0 0 420 260" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* isometric cube — scaled down to fit */}
      <g transform="translate(80,20) scale(0.7)">
        <polygon points="0,80 120,20 240,80 120,140" fill="none" stroke="var(--text-secondary)" strokeWidth="1.4" />
        <polygon points="0,80 120,140 120,260 0,200" fill="none" stroke="var(--text-secondary)" strokeWidth="1.4" />
        <polygon points="120,140 240,80 240,200 120,260" fill="none" stroke="var(--text-secondary)" strokeWidth="1.4" />
        {/* highlight one cell */}
        <rect x="50" y="95" width="22" height="22" fill={`${color}40`} stroke={color} strokeWidth="2" transform="skewX(-20)" />
      </g>
      {/* axes labels outside the scaled group */}
      <text x="80" y="38" fill="#4a9eed" fontSize="11" fontWeight="700">Frequency →</text>
      <text x="220" y="52" fill="#0284c7" fontSize="11" fontWeight="700">Recency →</text>
      <text x="22" y="150" fill="#38bdf8" fontSize="11" fontWeight="700" transform="rotate(-90 22 150)">Monetary →</text>
      <text x="210" y="242" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">cada célula = combinação (R-quartil, F-quartil, M-quartil) → 4×4×4 = 64 segmentos possíveis</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Cada cliente é colocado num quartil (1 a 4) em cada uma das três dimensões — Recency, Frequency,
      Monetary — produzindo um código de três dígitos (ex.: "4-4-4" = melhor quartil nas três dimensões,
      "Champions"). Com 4 quartis por dimensão e 3 dimensões obtemos <InlineMath math="4^3 = 64" /> células
      possíveis, mas na prática agrupam-se várias células adjacentes em segmentos de negócio com nomes
      memoráveis (Champions, Loyal, At Risk, Hibernating, etc.), porque 64 segmentos seria demasiado granular
      para acionar campanhas distintas.
    </p>
  </div>
);

// === Diagram: Apriori lattice with pruning ===
const AprioriLatticeDiagram = () => {
  const level1 = ['{pão}', '{leite}', '{manteiga}', '{cerveja}', '{fraldas}'];
  const level2 = [
    { label: '{pão,leite}', freq: true },
    { label: '{pão,manteiga}', freq: true },
    { label: '{leite,manteiga}', freq: true },
    { label: '{pão,cerveja}', freq: false },
    { label: '{cerveja,fraldas}', freq: true },
    { label: '{leite,fraldas}', freq: false },
  ];
  const level3 = [
    { label: '{pão,leite,manteiga}', freq: true },
    { label: '{pão,leite,cerveja}', freq: false, pruned: true },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Geração e Poda de Candidatos (Apriori)</p>
      <svg viewBox="0 0 600 320" style={{ maxWidth: '100%', height: 'auto' }}>
        <text x="20" y="20" fill="var(--text-secondary)" fontSize="10" fontWeight="700">Nível 1 (1-itemsets)</text>
        {level1.map((label, i) => (
          <g key={label}>
            <rect x={20 + i * 115} y="30" width="105" height="32" rx="6" fill={`${color}15`} stroke={color} strokeWidth="1.5" />
            <text x={20 + i * 115 + 52} y="50" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">{label}</text>
          </g>
        ))}
        <text x="20" y="100" fill="var(--text-secondary)" fontSize="10" fontWeight="700">Nível 2 (candidatos C₂ → L₂ após contagem)</text>
        {level2.map(({ label, freq }, i) => (
          <g key={label}>
            <rect x={20 + i * 96} y="110" width="88" height="40" rx="6"
              fill={freq ? 'rgba(74,158,237,0.08)' : 'rgba(74,158,237,0.04)'}
              stroke={color} strokeWidth="1.5"
              strokeDasharray={freq ? 'none' : '4,3'} />
            <text x={20 + i * 96 + 44} y="128" textAnchor="middle" fill={color} fontSize="8.5" fontWeight="700">{label}</text>
            <text x={20 + i * 96 + 44} y="142" textAnchor="middle" fill={color} fontSize="8" fontStyle="italic">{freq ? 'frequente' : 'infrequente'}</text>
          </g>
        ))}
        <text x="20" y="200" fill="var(--text-secondary)" fontSize="10" fontWeight="700">Nível 3 (candidatos C₃)</text>
        {level3.map(({ label, freq, pruned }, i) => (
          <g key={label}>
            <rect x={20 + i * 200} y="210" width="180" height="40" rx="6"
              fill={freq ? 'rgba(74,158,237,0.08)' : 'rgba(255,255,255,0.04)'}
              stroke={freq ? color : '#9ca3af'} strokeWidth="1.5"
              strokeDasharray={freq ? 'none' : '4,3'} />
            <text x={20 + i * 200 + 90} y="228" textAnchor="middle" fill={freq ? color : '#9ca3af'} fontSize="9" fontWeight="700">{label}</text>
            <text x={20 + i * 200 + 90} y="242" textAnchor="middle" fill={freq ? color : '#9ca3af'} fontSize="8" fontStyle="italic">
              {pruned ? 'podado: contém {pão,cerveja} infrequente' : freq ? 'frequente' : ''}
            </text>
          </g>
        ))}
        <text x="20" y="285" fill="var(--text-secondary)" fontSize="10" fontWeight="700">Propriedade anti-monotónica</text>
        <text x="20" y="305" fill="var(--text-secondary)" fontSize="9.5">
          {'{pão,cerveja} infrequente ⟹ qualquer superset, p.ex. {pão,leite,cerveja}, também é infrequente — nem é gerado/contado.'}
        </text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        O algoritmo avança <strong>nível a nível</strong>: começa pelos 1-itemsets frequentes (<InlineMath math="L_1" />),
        combina-os para gerar candidatos a 2-itemsets (<InlineMath math="C_2" />), conta o seu suporte na base de
        dados para obter <InlineMath math="L_2" />, e assim por diante. Em cada nível, candidatos cujos subconjuntos
        imediatos <strong>não são todos frequentes</strong> são <strong>podados</strong> sem serem avaliados.
      </p>
    </div>
  );
};

export default function DM7() {
  return (
    <div style={S.page}>
      <Link to="/dm" style={S.back}><ArrowLeft size={16} /> Voltar a Data Mining</Link>
      <div style={S.tag}>MÓDULO 03</div>
      <h1 style={S.h1}>Segmentação e Regras de Associação</h1>

      {/* === SECTION 1: Cohort Analysis === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Cohort Analysis</h2>
        <p style={S.p}>
          A <strong>Cohort Analysis</strong> é uma das técnicas exploratórias mais simples e mais usadas em
          análise de negócio. Em vez de agrupar clientes por similaridade geométrica (como faria um algoritmo
          de clustering), agrupa-os por uma <strong>característica comum partilhada num dado momento</strong> —
          tipicamente, a data em que se tornaram clientes — e depois acompanha-se a evolução de cada grupo ao
          longo do tempo.
        </p>
        <div style={S.highlight}>
          <strong>Cohort:</strong> Grupo de entidades que partilham uma característica num dado momento — ex:
          todos os clientes que fizeram a primeira compra em Janeiro 2024.<br /><br />
          <strong>Objetivo:</strong> Comparar o comportamento de diferentes cohorts ao longo do tempo —
          retenção, receita, engagement, churn rate por cohort.
        </div>
        <p style={S.p}>
          A forma mais comum de visualizar isto é a <strong>matriz de retenção</strong>: cada linha é um
          cohort (definido pelo mês de aquisição), cada coluna é o "mês desde a aquisição" (mês 0, mês 1, mês
          2, ...), e cada célula mostra a percentagem de clientes desse cohort ainda ativos nesse mês.
        </p>
        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Exemplo: Matriz de Retenção por Cohort</p>
          <table style={{ ...S.table, marginBottom: 0, fontFamily: 'monospace', fontSize: '0.82rem' }}>
            <thead>
              <tr>
                <th style={S.th}>Cohort</th>
                {['Mês 0', 'Mês 1', 'Mês 2', 'Mês 3', 'Mês 4', 'Mês 5'].map(m => <th key={m} style={S.th}>{m}</th>)}
              </tr>
            </thead>
            <tbody>
              {[
                ['Jan 2024', '100%', '65%', '48%', '38%', '32%', '28%'],
                ['Fev 2024', '100%', '70%', '52%', '44%', '39%', '—'],
                ['Mar 2024', '100%', '68%', '55%', '50%', '—', '—'],
              ].map(([c, ...vals]) => (
                <tr key={c}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{c}</td>
                  {vals.map((v, i) => <td key={i} style={{ ...S.td, color: v === '—' ? 'var(--text-secondary)' : v === '100%' ? '#4a9eed' : 'var(--text-primary)' }}>{v}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CohortCurvesDiagram />
        <h3 style={S.h3}>Leitura da matriz: o que procurar?</h3>
        <p style={S.p}>
          A matriz de retenção não é apenas uma tabela de números — é um instrumento de diagnóstico. Há três
          padrões que se procuram tipicamente:
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>Tendência entre cohorts:</strong> cohorts mais recentes (Mar 2024) retêm melhor que
            cohorts mais antigos (Jan 2024)? Se sim, isso sugere que mudanças de produto, onboarding ou
            marketing recentes estão a melhorar a retenção.</li>
          <li><strong>"Cotovelo" de estabilização:</strong> a retenção cai rapidamente nos primeiros meses e
            depois estabiliza? Esse ponto de inflexão identifica o momento crítico em que um cliente passa de
            "experimental" para "habitual" — e é o período em que vale mais a pena investir em onboarding.</li>
          <li><strong>Comparação entre tipos de cohort:</strong> embora o exemplo use cohorts temporais
            (mês de aquisição), também é possível definir cohorts por canal de aquisição, plano subscrito, ou
            região — permitindo perguntas como "os clientes adquiridos via redes sociais retêm pior que os
            adquiridos por referral?"</li>
        </ul>
        <div style={S.note}>
          Cohort Analysis é frequentemente o <strong>primeiro passo</strong> antes de qualquer clustering
          algorítmico: ajuda a entender a dinâmica temporal dos dados (ex.: "os clientes mudam de
          comportamento ao longo do ciclo de vida?") — informação que pode depois ser usada como feature de
          entrada para um algoritmo de clustering (ex.: "tempo desde a aquisição" como uma das dimensões).
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Cell-based Segments === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Cell-based Segments (Segmentação por Quartis)</h2>
        <p style={S.p}>
          A segmentação <em>cell-based</em> é a abordagem mais simples a clustering: em vez de deixar um
          algoritmo descobrir grupos a partir da geometria dos dados, definimos <strong>regras explícitas</strong>
          baseadas em divisões estatísticas — tipicamente quartis ou percentis de uma ou mais variáveis. O
          resultado são "células" (combinações de intervalos) que funcionam como segmentos.
        </p>
        <p style={S.p}>
          A vantagem principal desta abordagem é a <strong>interpretabilidade total</strong>: cada segmento tem
          uma definição clara e auditável ("clientes no quartil 4 de Frequency e quartil 4 de Monetary"), o que
          facilita a comunicação com equipas de negócio e a criação de campanhas direcionadas. A desvantagem é
          que as fronteiras são <strong>arbitrárias</strong> — um cliente no percentil 74 e outro no percentil
          76 ficam em segmentos diferentes, apesar de serem quase indistinguíveis.
        </p>
        <div style={S.highlight}>
          <strong>Exemplo RFM (Recency, Frequency, Monetary):</strong><br />
          1. Dividir cada dimensão em quartis (Q1, Q2, Q3, Q4)<br />
          2. Criar segmentos pela combinação de quartis: (R_quartil, F_quartil, M_quartil)<br />
          3. Dar nomes de negócio: "Champions" (alto em tudo), "At Risk" (alta frequência mas baixa recência), etc.
        </div>
        <RFMCubeDiagram />
        <table style={S.table}>
          <thead><tr><th style={S.th}>Segmento RFM</th><th style={S.th}>Perfil</th><th style={S.th}>Ação sugerida</th></tr></thead>
          <tbody>
            {[
              ['Champions', 'Compraram recentemente, compram frequentemente, gastam muito', 'Recompensar, pedir reviews'],
              ['Loyal Customers', 'Compram frequentemente mas não tão recentemente', 'Programa de fidelidade'],
              ['Potential Loyalist', 'Recência e frequência médias-altas, valor médio', 'Ofertas para aumentar frequência'],
              ['At Risk', 'Compraram muito mas há muito tempo', 'Campanha de reactivação urgente'],
              ['Hibernating', 'Baixa recência, frequência e valor', 'Oferta especial ou deixar ir'],
              ['New Customers', 'Recência alta, frequência e valor baixos (poucas compras)', 'Onboarding, segunda compra'],
            ].map(([a, b, c]) => <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={S.td}>{b}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{c}</td></tr>)}
          </tbody>
        </table>
        <div style={S.note}>
          Cell-based segments são um excelente <strong>baseline</strong>: rápidos de implementar, fáceis de
          explicar e auditáveis. Em muitos casos de negócio, são suficientes. Algoritmos de clustering
          (módulos 04–06) tornam-se relevantes quando (a) há mais de 3 dimensões e a "grelha" de células
          cresce exponencialmente, (b) as fronteiras naturais nos dados não coincidem com quartis, ou (c)
          queremos que os grupos emerjam organicamente em vez de serem impostos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Migration Matrix === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Migration Matrix</h2>
        <p style={S.p}>
          Depois de definidos os segmentos (por células RFM, por clustering, ou por qualquer outro critério),
          uma pergunta natural é: <strong>os clientes mudam de segmento ao longo do tempo?</strong> A
          <em> migration matrix</em> (ou matriz de transição) responde a esta pergunta — mostra a
          probabilidade de um cliente que está num segmento no período <InlineMath math="T" /> estar noutro
          segmento (ou no mesmo) no período <InlineMath math="T+1" />.
        </p>
        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Exemplo: Migração entre Segmentos (T → T+1)</p>
          <table style={{ ...S.table, marginBottom: 0, fontSize: '0.82rem' }}>
            <thead>
              <tr><th style={S.th}>De \ Para</th>{['Gold', 'Silver', 'Bronze', 'Churn'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {[
                ['Gold', '70%', '20%', '5%', '5%'],
                ['Silver', '15%', '60%', '15%', '10%'],
                ['Bronze', '5%', '20%', '55%', '20%'],
              ].map(([r, ...vals]) => (
                <tr key={r}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{r}</td>
                  {vals.map((v, i) => <td key={i} style={{ ...S.td, color: i === 0 ? '#4a9eed' : i === 3 ? '#4a9eed' : 'var(--text-primary)' }}>{v}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          A diagonal principal (Gold→Gold = 70%, Silver→Silver = 60%, Bronze→Bronze = 55%) representa a
          <strong> estabilidade</strong> de cada segmento — a percentagem de clientes que permanece no mesmo
          grupo. Valores fora da diagonal representam <strong>fluxos</strong>: por exemplo, 20% dos clientes
          Gold descem para Silver, e 5% para Bronze ou Churn.
        </p>
        <h3 style={S.h3}>Para que serve, na prática?</h3>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>Medir o impacto de campanhas:</strong> se uma campanha de retenção for lançada para
            clientes Gold, comparar a matriz de migração antes e depois da campanha mostra se a taxa
            Gold→Gold aumentou (campanha eficaz) ou se manteve igual.</li>
          <li><strong>Prever churn agregado:</strong> a coluna "Churn" mostra, para cada segmento de origem,
            qual a probabilidade de abandono — útil para estimar receita futura e priorizar segmentos de
            maior risco (Bronze tem 20% de churn vs. 5% para Gold).</li>
          <li><strong>Identificar "degradação silenciosa":</strong> mesmo sem churn explícito, clientes Gold
            que migram para Silver/Bronze são um sinal de alerta precoce — agir nesta transição é mais barato
            do que recuperar um cliente já perdido.</li>
        </ul>
        <div style={S.note}>
          A migration matrix é, na verdade, uma <strong>cadeia de Markov de primeira ordem</strong> sobre os
          segmentos: assume que a probabilidade de transição depende apenas do segmento atual, não do
          histórico completo. Esta simplificação é poderosa (permite projetar a distribuição de clientes por
          segmento em múltiplos períodos futuros, multiplicando a matriz por si mesma), mas é também uma
          assunção — na realidade, um cliente que "já foi" Gold antes pode comportar-se diferentemente de um
          cliente Silver que nunca foi Gold.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: Definições formais (Association Rules) === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Regras de Associação — Definições Formais</h2>
        <p style={S.p}>
          As <strong>association rules</strong> mineram padrões de co-ocorrência numa base de dados
          transacional: um conjunto de <InlineMath math="N" /> transações, cada uma contendo um subconjunto de
          itens de um universo <InlineMath math="I" />. Uma regra de associação tem a forma
          <InlineMath math="\;X \to Y" />, onde <InlineMath math="X" /> (antecedente) e <InlineMath math="Y" />
          (consequente) são itemsets disjuntos.
        </p>
        <div style={S.highlight}>
          <strong>Exemplo:</strong> {'{pão, manteiga}'} → {'{leite}'}<br />
          "Clientes que compram pão e manteiga tendem também a comprar leite."
        </div>
        <p style={S.p}>Três métricas quantificam a relevância de uma regra:</p>
        <div style={S.math}>
          <BlockMath math="\text{Support}(X) = \frac{\text{freq}(X)}{N}" />
        </div>
        <p style={S.p}>
          O suporte de um itemset <InlineMath math="X" /> é a fração de transações que o contêm — mede a sua <strong>popularidade</strong>.
        </p>
        <div style={S.math}>
          <BlockMath math="\text{Confidence}(X \to Y) = \frac{\text{Support}(X \cup Y)}{\text{Support}(X)}" />
        </div>
        <p style={S.p}>
          A confiança é a probabilidade condicional <InlineMath math="P(Y \mid X)" />: entre as transações que
          contêm <InlineMath math="X" />, qual a fração que <strong>também</strong> contém <InlineMath math="Y" />.
          Mede a <strong>força da implicação</strong> — mas por si só não diz se a associação é mais forte do que seria por acaso.
        </p>
        <div style={S.math}>
          <BlockMath math="\text{Lift}(X \to Y) = \frac{\text{Confidence}(X \to Y)}{\text{Support}(Y)}" />
        </div>
        <p style={S.p}>
          O lift compara a confiança observada com a que se esperaria se <InlineMath math="X" /> e
          <InlineMath math="Y" /> fossem <strong>independentes</strong> (caso em que lift = 1).
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Valor de Lift</th><th style={S.th}>Interpretação</th></tr></thead>
            <tbody>
              {[
                ['Lift = 1', 'X e Y são independentes — a co-ocorrência não diz nada além do acaso'],
                ['Lift > 1', 'Associação positiva — comprar X aumenta a probabilidade de comprar Y'],
                ['Lift < 1', 'Associação negativa — comprar X diminui a probabilidade de comprar Y (itens substitutos)'],
              ].map(([k, v]) => (
                <tr key={k}><td style={{ ...S.td, fontWeight: 700, color }}>{k}</td><td style={S.td}>{v}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Apriori === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Algoritmo Apriori</h2>
        <p style={S.p}>
          Com <InlineMath math="m" /> itens existem <InlineMath math="2^m - 1" /> itemsets possíveis — para apenas
          20 itens, mais de um milhão. O <strong>Apriori</strong> explora a <strong>propriedade anti-monotónica</strong>:
        </p>
        <div style={S.highlight}>
          <strong>Princípio Apriori:</strong> Se um itemset <InlineMath math="X" /> é infrequente, então
          <strong> todos os seus supersets</strong> são também infrequentes — e podem ser ignorados.
        </div>
        <AprioriLatticeDiagram />
        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Algoritmo Apriori — passo a passo</p>
          {[
            ['1', 'Gerar C₁', 'Todos os 1-itemsets; conta-se o support e filtra-se → L₁'],
            ['2', 'Gerar Cₖ', 'Combinar pares de itemsets de Lₖ₋₁ que partilham k-2 itens'],
            ['3', 'Pruning', 'Eliminar de Cₖ candidatos cujos subconjuntos k-1 não estejam todos em Lₖ₋₁'],
            ['4', 'Contar support', 'Varrer a base de dados para contar o support de cada candidato'],
            ['5', 'Filtrar', 'Guardar em Lₖ apenas os itemsets com support ≥ min_supp'],
            ['6', 'Repetir', 'Incrementar k; repetir até Lₖ ficar vazio'],
          ].map(([n, t, d]) => (
            <div key={n} style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: color, color: 'white', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.78rem', flexShrink: 0 }}>{n}</div>
              <div><span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.85rem' }}>{t}: </span><span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{d}</span></div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}
