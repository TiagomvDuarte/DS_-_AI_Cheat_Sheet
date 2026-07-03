import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#f97316';
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
  math: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem 1.5rem', margin: '1rem 0', overflowX: 'auto', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
};

// === Diagram: NMF matrix factorization ===
const NMFDiagram = () => {
  const accent = '#f97316';
  const green = '#f97316';
  const purple = '#f97316';
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', textAlign: 'center' }}>
        V ≈ W × H — factorização não-negativa de matrizes
      </p>
      <svg viewBox="0 0 700 220" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}>
        {/* V matrix */}
        <text x="60" y="16" textAnchor="middle" fill={accent} fontSize="13" fontWeight="700">V</text>
        <rect x="10" y="22" width="100" height="145" rx="6" fill={`${accent}12`} stroke={accent} strokeWidth="1.8" />
        <text x="60" y="40" textAnchor="middle" fill={accent} fontSize="9" fontWeight="700">(m × n)</text>
        <text x="60" y="54" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">termos × docs</text>
        {[[0,0,3],[0,1,0],[0,2,1],[1,0,0],[1,1,5],[1,2,2],[2,0,2],[2,1,1],[2,2,0]].map(([row,col,val]) => (
          <text key={`v${row}${col}`} x={28 + col * 30} y={80 + row * 28}
            fill={val > 0 ? accent : 'var(--text-secondary)'} fontSize="12" fontWeight={val > 0 ? '700' : '400'} textAnchor="middle">{val}</text>
        ))}
        <text x="60" y="178" textAnchor="middle" fill={`${accent}99`} fontSize="8" fontStyle="italic">+≥ 0</text>

        {/* = */}
        <text x="114" y="100" fill="var(--text-primary)" fontSize="20" fontWeight="700">=</text>

        {/* W matrix — row labels on the LEFT inside the box */}
        <text x="220" y="16" textAnchor="middle" fill={green} fontSize="13" fontWeight="700">W</text>
        <rect x="130" y="22" width="180" height="145" rx="6" fill={`${green}12`} stroke={green} strokeWidth="1.8" />
        <text x="220" y="40" textAnchor="middle" fill={green} fontSize="9" fontWeight="700">(m × k)</text>
        <text x="220" y="54" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">termos × tópicos</text>
        {/* row labels */}
        {['futebol','receita','golo'].map((label, i) => (
          <text key={label} x="140" y={82 + i * 28} fill="var(--text-secondary)" fontSize="8" fontStyle="italic" dominantBaseline="middle">{label}</text>
        ))}
        {/* column headers */}
        <text x="258" y="70" fill={green} fontSize="9" fontWeight="700" textAnchor="middle">T1</text>
        <text x="292" y="70" fill={green} fontSize="9" fontWeight="700" textAnchor="middle">T2</text>
        {/* values */}
        {[['0.8','0.1'],['0.0','0.9'],['0.6','0.3']].map((row, ri) =>
          row.map((v, ci) => (
            <text key={`w${ri}${ci}`} x={258 + ci * 34} y={82 + ri * 28}
              fill={parseFloat(v) > 0.4 ? green : 'var(--text-secondary)'} fontSize="11" fontWeight={parseFloat(v) > 0.4 ? '700' : '400'} textAnchor="middle" dominantBaseline="middle">{v}</text>
          ))
        )}
        <text x="220" y="178" textAnchor="middle" fill={`${green}99`} fontSize="8" fontStyle="italic">+≥ 0</text>

        {/* × */}
        <text x="316" y="100" fill="var(--text-primary)" fontSize="20" fontWeight="700">×</text>

        {/* H matrix */}
        <text x="410" y="16" textAnchor="middle" fill={purple} fontSize="13" fontWeight="700">H</text>
        <rect x="335" y="55" width="160" height="90" rx="6" fill={`${purple}12`} stroke={purple} strokeWidth="1.8" />
        <text x="415" y="72" textAnchor="middle" fill={purple} fontSize="9" fontWeight="700">(k × n)</text>
        <text x="415" y="85" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">tópicos × docs</text>
        {['D1','D2','D3'].map((d, i) => (
          <text key={d} x={358 + i * 46} y="100" fill={purple} fontSize="9" fontWeight="700" textAnchor="middle">{d}</text>
        ))}
        {[['0.9','0.1','0.7'],['0.1','0.8','0.2']].map((row, ri) =>
          row.map((v, ci) => (
            <text key={`h${ri}${ci}`} x={358 + ci * 46} y={116 + ri * 18}
              fill={parseFloat(v) > 0.5 ? purple : 'var(--text-secondary)'} fontSize="10" fontWeight={parseFloat(v) > 0.5 ? '700' : '400'} textAnchor="middle">{v}</text>
          ))
        )}
        <text x="415" y="157" textAnchor="middle" fill={`${purple}99`} fontSize="8" fontStyle="italic">+≥ 0</text>

        {/* Legend */}
        <rect x="510" y="22" width="185" height="155" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />
        <text x="602" y="40" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="700">Legenda</text>
        <circle cx="524" cy="58" r="4" fill={accent} />
        <text x="534" y="62" fill="var(--text-secondary)" fontSize="8.5">V: doc-term matrix original</text>
        <circle cx="524" cy="78" r="4" fill={green} />
        <text x="534" y="82" fill="var(--text-secondary)" fontSize="8.5">W: dicionário de tópicos</text>
        <text x="534" y="94" fill="var(--text-secondary)" fontSize="8.5">(cada coluna = 1 tópico)</text>
        <circle cx="524" cy="110" r="4" fill={purple} />
        <text x="534" y="114" fill="var(--text-secondary)" fontSize="8.5">H: coeficientes por documento</text>
        <text x="534" y="126" fill="var(--text-secondary)" fontSize="8.5">(mistura de tópicos por doc)</text>
        <text x="602" y="148" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">TODOS +≥ 0</text>
        <text x="602" y="163" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">→ aditividade, interpretabilidade</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
        A restrição de não-negatividade em W e H garante que a reconstrução de V é <em>aditiva</em>: cada
        documento é uma soma com pesos não-negativos das colunas de W (os tópicos). Não há cancelamentos
        — ao contrário de PCA/SVD onde componentes negativos se cancelam mutuamente.
      </p>
    </div>
  );
};

export default function DM13() {
  return (
    <div style={S.page}>
      <Link to="/dm" style={S.back}><ArrowLeft size={16} /> Voltar a Data Mining</Link>
      <div style={S.tag}>MÓDULO 09</div>
      <h1 style={S.h1}>LDA — Latent Dirichlet Allocation</h1>
      <p style={S.lead}>LDA é um modelo generativo probabilístico que descobre tópicos latentes em coleções de documentos. Cada documento é modelado como uma mistura de tópicos, e cada tópico como uma distribuição sobre palavras — permitindo compreender grandes corpora de texto de forma completamente não supervisionada.</p>

      {/* ── 1. MOTIVAÇÃO ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Motivação — Topic Modelling</h2>
        <p style={S.p}>Imagine um corpus com milhares de artigos de jornal. Queremos perceber automaticamente de que é que cada artigo fala, sem qualquer etiqueta manual. Topic modelling descobre estes temas latentes como distribuições de probabilidade sobre palavras.</p>

        <h3 style={S.h3}>Exemplo concreto — quatro frases, três tópicos</h3>
        <p style={S.p}>Considere as quatro frases seguintes:</p>

        <div style={S.diagram}>
          {[
            { id: 'D1', text: '"O Benfica venceu o clássico com dois golos de grande penalidade."', topic: 'Desporto', topicColor: '#f97316' },
            { id: 'D2', text: '"A receita leva farinha, ovos e manteiga; amassa-se durante dez minutos."', topic: 'Cozinha', topicColor: '#f97316' },
            { id: 'D3', text: '"O novo processador da Apple bate recordes de desempenho em benchmarks."', topic: 'Tecnologia', topicColor: '#f97316' },
            { id: 'D4', text: '"O treinador elogiou a equipa após o treino matinal antes do jogo de amanhã."', topic: 'Desporto', topicColor: '#f97316' },
          ].map(({ id, text, topic, topicColor }) => (
            <div key={id} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--card-border)' }}>
              <span style={{ minWidth: 28, fontWeight: 700, fontFamily: 'monospace', color, fontSize: '0.85rem' }}>{id}</span>
              <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem', flex: 1, lineHeight: 1.6 }}>{text}</span>
              <span style={{ background: topicColor, color: '#fff', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: 12, whiteSpace: 'nowrap', alignSelf: 'center' }}>{topic}</span>
            </div>
          ))}
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '0.75rem 0 0', lineHeight: 1.6 }}>
            LDA vai detectar que D1 e D4 partilham palavras ligadas a desporto (<em>Benfica, golos, treinador, equipa</em>), D2 ao tema culinária (<em>receita, farinha, ovos, manteiga</em>) e D3 à tecnologia (<em>processador, Apple, desempenho, benchmarks</em>). D4 poderia ter uma pequena mistura desporto + gestão organizacional — ilustrando a natureza <em>mista</em> de LDA.
          </p>
        </div>

        
          <strong>Ideia central:</strong> cada documento é representado como uma <em>mistura de tópicos</em> (vetor <InlineMath math="\theta_d \in \Delta^{K-1}" />), e cada tópico como uma distribuição sobre palavras (<InlineMath math="\phi_k \in \Delta^{V-1}" />). LDA descobre estas representações latentes de forma não supervisionada a partir das co-ocorrências de palavras nos documentos.
        

        <table style={S.table}>
          <thead><tr><th style={S.th}>Caso de Uso</th><th style={S.th}>Descrição</th></tr></thead>
          <tbody>
            {[
              ['Análise de notícias', 'Identificar temas dominantes em grandes arquivos jornalísticos ao longo do tempo'],
              ['Reviews de produtos', 'Descobrir aspectos mencionados: qualidade, preço, entrega, atendimento'],
              ['Artigos científicos', 'Mapear áreas de investigação e detetar tendências emergentes'],
              ['Suporte ao cliente', 'Agrupar tickets por tipo de problema sem etiquetas manuais'],
              ['Recomendação de conteúdo', 'Representar documentos e utilizadores no espaço de tópicos para matching'],
            ].map(([a, b]) => <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={S.td}>{b}</td></tr>)}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── 2. MODELO GENERATIVO ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. O Modelo Generativo</h2>
        <p style={S.p}>LDA define um processo generativo fictício que explica como os documentos foram "criados". A inferência inverte este processo para descobrir os parâmetros latentes a partir das palavras observadas.</p>

        <h3 style={S.h3}>Processo generativo passo a passo</h3>
        <div style={S.diagram}>
          {[
            { n: 'G1', t: 'Para cada tópico k = 1…K', d: 'Amostrar distribuição de palavras: φ_k ~ Dirichlet(β)' },
            { n: 'G2', t: 'Para cada documento d = 1…D', d: 'Amostrar distribuição de tópicos: θ_d ~ Dirichlet(α)' },
            { n: 'G3', t: 'Para cada posição n = 1…N_d no documento d', d: '' },
            { n: 'G3a', t: '  Amostrar tópico latente', d: 'z_{d,n} ~ Categorical(θ_d)' },
            { n: 'G3b', t: '  Amostrar palavra observada', d: 'w_{d,n} ~ Categorical(φ_{z_{d,n}})' },
          ].map(({ n, t, d }) => (
            <div key={n} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.55rem', alignItems: 'flex-start' }}>
              <div style={{ background: color, color: 'white', borderRadius: '50%', minWidth: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.72rem', flexShrink: 0 }}>{n}</div>
              <div>
                <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.88rem' }}>{t} </span>
                {d && <span style={{ color: 'var(--text-secondary)', fontFamily: 'monospace', fontSize: '0.82rem' }}> — {d}</span>}
              </div>
            </div>
          ))}
        </div>

        <h3 style={S.h3}>Formulação matemática</h3>
        <div style={S.math}>
          <BlockMath math="\phi_k \sim \text{Dirichlet}(\beta), \quad k=1,\ldots,K" />
        </div>
        <div style={S.math}>
          <BlockMath math="\theta_d \sim \text{Dirichlet}(\alpha), \quad d=1,\ldots,D" />
        </div>
        <div style={S.math}>
          <BlockMath math="z_{d,n} \sim \text{Categorical}(\theta_d), \quad w_{d,n} \sim \text{Categorical}(\phi_{z_{d,n}})" />
        </div>
        <p style={S.p}>A probabilidade conjunta completa factoriza como:</p>
        <div style={S.math}>
          <BlockMath math="p(\mathbf{w},\mathbf{z},\boldsymbol{\theta},\boldsymbol{\phi}\mid\alpha,\beta) = \prod_{k=1}^K p(\phi_k\mid\beta)\prod_{d=1}^D p(\theta_d\mid\alpha)\prod_{n=1}^{N_d} p(z_{d,n}\mid\theta_d)\,p(w_{d,n}\mid\phi_{z_{d,n}})" />
        </div>

        <h3 style={S.h3}>Diagrama de placa (Plate Notation)</h3>
        <div style={S.diagram}>
          <svg viewBox="0 0 520 320" width="100%" style={{ display: 'block', maxWidth: 520, margin: '0 auto' }}>
            {/* Outer plate — D documents */}
            <rect x="60" y="30" width="415" height="260" rx="10" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="6 3" />
            <text x="455" y="48" fontSize="11" fill={color} fontWeight="700">D</text>
            <text x="63" y="48" fontSize="10" fill={color}>documentos</text>

            {/* Inner plate — N words */}
            <rect x="200" y="70" width="145" height="190" rx="8" fill="none" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="4 2" />
            <text x="332" y="86" fontSize="10" fill="var(--text-secondary)">N</text>
            <text x="203" y="86" fontSize="10" fill="var(--text-secondary)">palavras</text>

            {/* α hyperparameter box */}
            <rect x="75" y="110" width="40" height="28" rx="4" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.2" />
            <text x="95" y="129" fontSize="13" textAnchor="middle" fill={color} fontWeight="700">α</text>

            {/* θ_d circle */}
            <circle cx="160" cy="145" r="22" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
            <text x="160" y="150" fontSize="13" textAnchor="middle" fill={color} fontWeight="700">θ_d</text>

            {/* z_{d,n} circle */}
            <circle cx="270" cy="145" r="22" fill="rgba(100,116,139,0.1)" stroke="var(--text-secondary)" strokeWidth="1.5" />
            <text x="270" y="150" fontSize="12" textAnchor="middle" fill="var(--text-secondary)" fontWeight="700">z</text>

            {/* w_{d,n} circle — observed (shaded) */}
            <circle cx="270" cy="220" r="22" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
            <text x="270" y="225" fontSize="13" textAnchor="middle" fill={color} fontWeight="700">w</text>
            <text x="270" y="253" fontSize="9" textAnchor="middle" fill="var(--text-secondary)">(observado)</text>

            {/* φ_k circle */}
            <circle cx="390" cy="145" r="22" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="390" y="150" fontSize="13" textAnchor="middle" fill="#f97316" fontWeight="700">φ_k</text>

            {/* β hyperparameter box */}
            <rect x="435" y="132" width="30" height="26" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
            <text x="450" y="149" fontSize="12" textAnchor="middle" fill="#f97316" fontWeight="700">β</text>

            {/* Arrows */}
            {/* α → θ_d */}
            <line x1="115" y1="124" x2="136" y2="135" stroke={color} strokeWidth="1.4" markerEnd="url(#arr)" />
            {/* θ_d → z */}
            <line x1="183" y1="145" x2="246" y2="145" stroke={color} strokeWidth="1.4" markerEnd="url(#arr)" />
            {/* z → w */}
            <line x1="270" y1="167" x2="270" y2="196" stroke="var(--text-secondary)" strokeWidth="1.4" markerEnd="url(#arr)" />
            {/* φ_k → w */}
            <line x1="372" y1="162" x2="294" y2="207" stroke="#f97316" strokeWidth="1.4" markerEnd="url(#arr)" />
            {/* β → φ_k */}
            <line x1="434" y1="145" x2="413" y2="145" stroke="#f97316" strokeWidth="1.4" markerEnd="url(#arr)" />

            <defs>
              <marker id="arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <polygon points="0 0, 7 3.5, 0 7" fill="var(--text-secondary)" />
              </marker>
            </defs>
          </svg>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.82rem', margin: '0.5rem 0 0' }}>
            Plate notation: nós sombreados = observados (w); placa exterior = D documentos; placa interior = N palavras por documento.
          </p>
        </div>

        
          <strong>Notação resumida:</strong> K tópicos, D documentos, V = tamanho do vocabulário. <InlineMath math="\theta_d \in \mathbb{R}^K" /> (mistura de tópicos por documento), <InlineMath math="\phi_k \in \mathbb{R}^V" /> (distribuição de palavras por tópico), <InlineMath math="z_{d,n} \in \{1,\ldots,K\}" /> (tópico latente por palavra). Apenas <InlineMath math="w_{d,n}" /> é observado.
        
      </div>

      <hr style={S.divider} />

      {/* ── 3. DISTRIBUIÇÃO DE DIRICHLET ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Distribuição de Dirichlet</h2>
        <p style={S.p}>A distribuição de Dirichlet é uma distribuição sobre o simplex de probabilidade — gera vetores de probabilidade <InlineMath math="(p_1, \ldots, p_K)" /> com <InlineMath math="\sum_k p_k = 1,\; p_k \geq 0" />. É a <em>prior conjugada</em> da distribuição Categorical/Multinomial, o que simplifica enormemente a inferência.</p>

        <div style={S.math}>
          <BlockMath math="\text{Dir}(\mathbf{p} \mid \boldsymbol{\alpha}) = \frac{\Gamma\!\left(\sum_k \alpha_k\right)}{\prod_k \Gamma(\alpha_k)} \prod_{k=1}^K p_k^{\,\alpha_k - 1}" />
        </div>

        <h3 style={S.h3}>Papel do parâmetro α</h3>
        <p style={S.p}>O parâmetro de concentração <InlineMath math="\alpha" /> controla a esparsidade das amostras:</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ ...S.highlight, margin: 0 }}>
            <strong style={{ color: '#f97316' }}>α pequeno (ex: 0.1)</strong><br />
            Amostras concentradas perto dos vértices do simplex. Cada documento fica focado em 1-2 tópicos. Tópicos muito distintos e interpretáveis.
          </div>
          <div style={{ ...S.highlight, margin: 0, background: 'rgba(249,115,22,0.08)', borderColor: 'rgba(249,115,22,0.3)' }}>
            <strong style={{ color: '#f97316' }}>α grande (ex: 10)</strong><br />
            Amostras concentradas perto do centro do simplex. Cada documento é mistura uniforme de quase todos os tópicos. Tópicos menos distintos.
          </div>
        </div>

        <h3 style={S.h3}>Visualização no 2-simplex (K = 3)</h3>
        <div style={S.diagram}>
          <svg viewBox="0 0 460 220" width="100%" style={{ display: 'block', maxWidth: 460, margin: '0 auto' }}>
            {/* Left: low-alpha triangle */}
            <g transform="translate(30,10)">
              <polygon points="100,10 10,175 190,175" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
              <text x="100" y="6" textAnchor="middle" fontSize="10" fill={color}>p₁</text>
              <text x="2" y="185" fontSize="10" fill={color}>p₂</text>
              <text x="192" y="185" fontSize="10" fill={color}>p₃</text>
              {/* Near-vertex dots for low alpha */}
              {[
                [100, 20], [16, 165], [184, 165],
                [94, 28], [22, 158], [178, 158],
                [108, 18], [182, 168],
              ].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4" fill="#f97316" opacity="0.8" />)}
              <text x="100" y="195" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">α = 0.1 (esparsas)</text>
            </g>
            {/* Right: high-alpha triangle */}
            <g transform="translate(250,10)">
              <polygon points="100,10 10,175 190,175" fill="rgba(22,163,74,0.05)" stroke="#f97316" strokeWidth="1.5" />
              <text x="100" y="6" textAnchor="middle" fontSize="10" fill="#f97316">p₁</text>
              <text x="2" y="185" fontSize="10" fill="#f97316">p₂</text>
              <text x="192" y="185" fontSize="10" fill="#f97316">p₃</text>
              {/* Near-center dots for high alpha */}
              {[
                [100, 120], [105, 115], [95, 125],
                [102, 110], [98, 118], [108, 122],
                [92, 112], [103, 128], [97, 108],
              ].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4" fill="#f97316" opacity="0.8" />)}
              <text x="100" y="195" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">α = 10 (uniformes)</text>
            </g>
          </svg>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.82rem', margin: '0.5rem 0 0' }}>
            Cada ponto representa uma amostra <InlineMath math="(p_1, p_2, p_3)" /> do simplex. Com α baixo os documentos são dominados por um tópico; com α alto, a mistura é quase uniforme.
          </p>
        </div>

        <div style={S.note}>Valores típicos utilizados na prática: <strong>α = 50/K</strong> (default do Gensim) e <strong>β = 0.01</strong>. A opção <code>alpha='auto'</code> no Gensim aprende α durante o treino via expectation-maximisation assimétrico.</div>
      </div>

      <hr style={S.divider} />

      {/* ── 4. INFERÊNCIA ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Inferência — Gibbs Sampling vs Variational Inference</h2>
        <p style={S.p}>O posterior exacto <InlineMath math="p(\boldsymbol{\theta}, \boldsymbol{\phi}, \mathbf{z} \mid \mathbf{w}, \alpha, \beta)" /> é <strong>intractável</strong> analiticamente: integrar sobre todos os <InlineMath math="\theta_d" />, <InlineMath math="\phi_k" /> e <InlineMath math="z_{d,n}" /> resulta numa soma exponencial em K e N. Usam-se duas famílias de métodos aproximados.</p>

        <h3 style={S.h3}>Collapsed Gibbs Sampling</h3>
        <p style={S.p}>Marginaliza analiticamente <InlineMath math="\theta" /> e <InlineMath math="\phi" />, ficando apenas com as atribuições de tópico <InlineMath math="\mathbf{z}" />. A cada iteração, para cada palavra <InlineMath math="w_{d,n}" />, remove-se a sua atribuição actual e reamostrada segundo:</p>
        <div style={S.math}>
          <BlockMath math="p(z_{d,n}=k \mid \mathbf{z}_{-dn}, \mathbf{w}) \;\propto\; \underbrace{\bigl(n_{d,k}^{-dn} + \alpha\bigr)}_{\text{mistura do doc}} \cdot \underbrace{\frac{n_{k,w}^{-dn} + \beta}{n_{k,\cdot}^{-dn} + V\beta}}_{\text{palavra no tópico}}" />
        </div>
        <p style={S.p}>onde <InlineMath math="n_{d,k}^{-dn}" /> é o número de palavras do documento d atribuídas ao tópico k (excluindo a posição atual), e <InlineMath math="n_{k,w}^{-dn}" /> é o número de vezes que a palavra w foi atribuída ao tópico k no corpus inteiro (excluindo a posição atual). V é o tamanho do vocabulário.</p>

        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Passos do Collapsed Gibbs Sampling</p>
          {[
            ['1', 'Inicializar', 'Atribuir aleatoriamente z_{d,n} ∈ {1…K} a cada palavra. Construir tabelas de contagens n_{d,k} e n_{k,w}.'],
            ['2', 'Para cada palavra w_{d,n}', 'Decrementar n_{d,k} e n_{k,w} com a atribuição atual.'],
            ['3', 'Calcular distribuição', 'Avaliar a fórmula acima para todos os K tópicos; normalizar para obter distribuição.'],
            ['4', 'Amostrar novo z_{d,n}', 'Amostrar k da distribuição calculada no passo 3.'],
            ['5', 'Atualizar contagens', 'Incrementar n_{d,k} e n_{k,w} com o novo tópico amostrado.'],
            ['6', 'Repetir até convergência', 'Tipicamente 500–2000 iterações. Descartar burn-in (~20%). Estimar φ̂_k e θ̂_d a partir das contagens finais.'],
          ].map(({ 0: n, 1: t, 2: d }) => (
            <div key={n} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.6rem', alignItems: 'flex-start' }}>
              <div style={{ background: color, color: 'white', borderRadius: '50%', minWidth: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.72rem', flexShrink: 0 }}>{n}</div>
              <div><span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.88rem' }}>{t}: </span><span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>{d}</span></div>
            </div>
          ))}
        </div>

        <h3 style={S.h3}>Variational Inference</h3>
        <p style={S.p}>Em vez de amostrar, aproxima-se o posterior intractável <InlineMath math="p(\mathbf{z},\boldsymbol{\theta},\boldsymbol{\phi}\mid\mathbf{w})" /> por uma distribuição fatorizada (mean-field):</p>
        <div style={S.math}>
          <BlockMath math="q(\mathbf{z},\boldsymbol{\theta},\boldsymbol{\phi}) = \prod_{k=1}^K q(\phi_k\mid\lambda_k) \prod_{d=1}^D q(\theta_d\mid\gamma_d) \prod_{n=1}^{N_d} q(z_{d,n}\mid\varphi_{d,n})" />
        </div>
        <p style={S.p}>Os parâmetros variacionais <InlineMath math="\lambda, \gamma, \varphi" /> são otimizados maximizando o ELBO (Evidence Lower BOund):</p>
        <div style={S.math}>
          <BlockMath math="\mathcal{L} = \mathbb{E}_q[\log p(\mathbf{w},\mathbf{z},\boldsymbol{\theta},\boldsymbol{\phi})] - \mathbb{E}_q[\log q(\mathbf{z},\boldsymbol{\theta},\boldsymbol{\phi})] \;\leq\; \log p(\mathbf{w})" />
        </div>
        <p style={S.p}>A variante <strong>Online VB</strong> (Hoffman et al., 2010) processa mini-batches do corpus, tornando LDA escalável a corpora de milhões de documentos — é o default do sklearn.</p>

        <h3 style={S.h3}>Comparação entre métodos de inferência</h3>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Critério</th><th style={S.th}>Collapsed Gibbs Sampling</th><th style={S.th}>Variational Inference</th></tr></thead>
          <tbody>
            {[
              ['Tipo', 'MCMC — estocástico', 'Optimização — determinístico'],
              ['Precisão', 'Convergência assimptótica ao posterior exacto', 'Aproximação — pode ficar preso em mínimos locais'],
              ['Velocidade', 'Lento em corpora grandes; cada iteração visita todo o corpus', 'Rápido; Online VB escala a milhões de docs'],
              ['Paralelização', 'Difícil (dependência entre amostras); SparseLDA melhora', 'Fácil — cada mini-batch é independente'],
              ['Implementação', 'Gensim LdaModel (default: Gibbs)', 'sklearn LatentDirichletAllocation (Online VB)'],
              ['Quando usar', 'Corpora pequenos/médios; precisão prioritária', 'Corpora grandes; velocidade e escalabilidade'],
            ].map(([a, b, c]) => <tr key={a}><td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)' }}>{a}</td><td style={S.td}>{b}</td><td style={{ ...S.td, color }}>{c}</td></tr>)}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── 5. ESCOLHA DE K ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Escolha de K — Perplexidade e Coerência</h2>
        <p style={S.p}>Escolher o número de tópicos K é a decisão mais crítica em LDA. Duas métricas complementares guiam esta escolha: perplexidade (qualidade preditiva) e coerência semântica (interpretabilidade).</p>

        <h3 style={S.h3}>Perplexidade</h3>
        <p style={S.p}>Mede a surpresa média do modelo perante palavras de documentos não vistos no treino. Valores mais baixos indicam melhor ajuste:</p>
        <div style={S.math}>
          <BlockMath math="\text{Perplexidade}(\mathcal{D}_\text{test}) = \exp\!\left(-\frac{\sum_{d=1}^{D} \log p(\mathbf{w}_d)}{\sum_{d=1}^{D} N_d}\right)" />
        </div>
        <p style={S.p}>Perplexidade decresce monotonamente com K (mais tópicos = melhor ajuste ao treino), mas não garante que os tópicos sejam interpretáveis por humanos — fenómeno análogo ao overfitting.</p>

        <h3 style={S.h3}>Coerência de tópico (UMass / UCI)</h3>
        <p style={S.p}>Avalia a qualidade semântica de um tópico medindo a co-ocorrência das suas top-M palavras nos documentos de treino:</p>
        <div style={S.math}>
          <BlockMath math="\text{C}_\text{UMass}(t) = \sum_{m=2}^{M} \sum_{l=1}^{m-1} \log \frac{D(w_m, w_l) + \epsilon}{D(w_l)}" />
        </div>
        <p style={S.p}>onde <InlineMath math="D(w_m, w_l)" /> conta documentos que contêm ambas as palavras e <InlineMath math="D(w_l)" /> conta documentos com a palavra <InlineMath math="w_l" />. A métrica UCI usa co-ocorrência em janela de contexto e um corpus externo (Wikipedia). Valores mais altos (menos negativos) indicam maior coerência semântica.</p>

        <h3 style={S.h3}>Trade-off perplexidade vs coerência</h3>
        <div style={S.diagram}>
          <svg viewBox="0 0 440 180" width="100%" style={{ display: 'block', maxWidth: 440, margin: '0 auto' }}>
            {/* Axes */}
            <line x1="50" y1="20" x2="50" y2="155" stroke="var(--text-secondary)" strokeWidth="1.5" />
            <line x1="50" y1="155" x2="415" y2="155" stroke="var(--text-secondary)" strokeWidth="1.5" />
            <text x="225" y="175" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Número de tópicos K →</text>

            {/* Perplexity curve — decreasing */}
            <polyline points="60,40 110,60 160,80 210,100 260,115 310,127 360,135 410,140"
              fill="none" stroke="#f97316" strokeWidth="2" />
            <text x="415" y="138" fontSize="10" fill="#f97316">Perplexidade ↓</text>

            {/* Coherence curve — peaks then drops */}
            <polyline points="60,135 110,110 160,80 210,62 260,70 310,85 360,100 410,118"
              fill="none" stroke="#f97316" strokeWidth="2" />
            <text x="415" y="120" fontSize="10" fill="#f97316">Coerência ↑</text>

            {/* Optimal K marker */}
            <line x1="210" y1="25" x2="210" y2="150" stroke={color} strokeWidth="1.2" strokeDasharray="5 3" />
            <text x="213" y="35" fontSize="10" fill={color} fontWeight="700">K ótimo</text>

            {/* X ticks */}
            {[60, 110, 160, 210, 260, 310, 360, 410].map((x, i) => (
              <g key={i}>
                <line x1={x} y1="155" x2={x} y2="160" stroke="var(--text-secondary)" strokeWidth="1" />
                <text x={x} y="170" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{5 + i * 5}</text>
              </g>
            ))}
          </svg>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.82rem', margin: '0.5rem 0 0' }}>
            A perplexidade decresce com K, mas a coerência tem um pico. O K ótimo maximiza coerência semântica.
          </p>
        </div>

        <div style={S.note}>Na prática, treina-se LDA para K ∈ {'{'} 5, 10, 15, 20, 30, 50 {'}'} e compara-se a coerência média dos tópicos. Inspecionar os top-10 termos de cada tópico manualmente é sempre recomendado — a interpretabilidade humana é o critério final.</div>
      </div>

      <hr style={S.divider} />

      {/* ── 6. LIGAÇÃO A OUTROS MÓDULOS ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Ligação a Outros Módulos</h2>
        <p style={S.p}>LDA tem conexões profundas com outros algoritmos estudados neste curso:</p>

        <div style={S.diagram}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            {[
              {
                title: 'GMM — Módulo 05',
                color: '#f97316',
                body: 'GMM faz clustering soft de pontos no espaço de features contínuas: cada ponto pertence a cada cluster com uma probabilidade. LDA é o análogo para documentos: cada documento pertence a cada tópico com probabilidade θ_d. Ambos usam distribuições de mistura e inferência EM/variacional.',
              },
              {
                title: 'k-Means — Módulo 04',
                color: '#f97316',
                body: 'k-Means é o limite hard-assignment de GMM. Analogamente, a atribuição de um documento a um único tópico dominante (argmax θ_d) seria o análogo hard de LDA. A natureza mista (soft) de LDA é a sua grande vantagem sobre abordagens de clustering hard.',
              },
              {
                title: 'ALS — Módulo 10',
                color: '#f97316',
                body: 'ALS para sistemas de recomendação fatoriza uma matriz utilizador × item em duas matrizes de fatores latentes. LDA fatoriza a matriz documento × palavra em θ (documentos × tópicos) e φ (tópicos × palavras). Ambos são modelos de fatores latentes com objetivos distintos.',
              },
              {
                title: 'SVD / PCA — Módulo 07',
                color: '#f97316',
                body: 'LSA (Latent Semantic Analysis) aplica SVD à matriz TF-IDF. LDA é a alternativa probabilística com prior Dirichlet — produz distribuições interpretáveis em vez de fatores com valores negativos, e modela explicitamente a esparsidade de tópicos por documento.',
              },
            ].map(({ title, color: c, body }) => (
              <div key={title} style={{ background: 'var(--bg-primary)', border: `1px solid ${c}30`, borderLeft: `3px solid ${c}`, borderRadius: 8, padding: '0.9rem' }}>
                <p style={{ fontWeight: 700, color: c, margin: '0 0 0.5rem', fontSize: '0.9rem' }}>{title}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 7. PIPELINE PRÁTICO ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Pipeline Prático</h2>
        <p style={S.p}>LDA é sensível à qualidade do pré-processamento. A pipeline típica inclui:</p>

        <table style={S.table}>
          <thead><tr><th style={S.th}>Etapa</th><th style={S.th}>Operação</th><th style={S.th}>Porquê é importante</th></tr></thead>
          <tbody>
            {[
              ['1. Tokenização', 'Dividir texto em tokens (palavras)', 'Unidade básica do vocabulário LDA'],
              ['2. Lowercase', 'Converter para minúsculas', 'Evita duplicados ("Casa" ≠ "casa")'],
              ['3. Stopwords', 'Remover palavras funcionais (o, de, e, que…)', 'Palavras muito frequentes sem valor semântico dominam os tópicos'],
              ['4. Lemmatização', 'Reduzir ao lema (correu → correr, melhores → bom)', 'Agrupa formas flexionadas; reduz vocabulário'],
              ['5. Filtrar extremos', 'Remover tokens muito raros e muito comuns', 'no_below=5, no_above=0.5 (Gensim defaults)'],
              ['6. Bigrams', 'Detetar expressões: "machine_learning", "nova_iorque"', 'Captura contexto semântico de expressões compostas'],
              ['7. Bag-of-Words', 'Converter cada documento em vetor de contagens', 'Representação que LDA usa (ignora ordem das palavras)'],
            ].map(([a, b, c]) => <tr key={a}><td style={{ ...S.td, fontWeight: 700, color, whiteSpace: 'nowrap' }}>{a}</td><td style={S.td}>{b}</td><td style={S.td}>{c}</td></tr>)}
          </tbody>
        </table>

        <h3 style={S.h3}>Aplicações principais</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginTop: '0.5rem' }}>
          {[
            { icon: '📰', title: 'Organização de documentos', desc: 'Indexação automática de grandes arquivos jornalísticos ou científicos por tema' },
            { icon: '🎯', title: 'Recomendação de conteúdo', desc: 'Representar perfis de utilizador e documentos no espaço de tópicos para matching' },
            { icon: '📊', title: 'Análise de surveys', desc: 'Descobrir temas em respostas abertas de questionários sem codificação manual' },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.85rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{icon}</div>
              <p style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.85rem', margin: '0 0 0.4rem' }}>{title}</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', margin: 0, lineHeight: 1.5 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 8. NMF ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. NMF — Non-negative Matrix Factorization</h2>
        <p style={S.p}>
          LDA é uma abordagem probabilística e bayesiana ao topic modelling. <strong>NMF</strong> é uma
          alternativa algébrica mais simples: dado que as contagens de palavras, pixels de imagem e ratings
          de utilizadores são <em>não-negativos por natureza</em>, a NMF decompõe a matriz de dados em dois
          fatores não-negativos — impondo que a representação seja <strong>aditiva e interpretável</strong>
          sem cancelamentos entre componentes.
        </p>

        <h3 style={S.h3}>Formulação</h3>
        <p style={S.p}>
          Dada uma matriz não-negativa <InlineMath math="V \in \mathbb{R}_{\geq 0}^{m \times n}" />
          (por ex., <InlineMath math="m" /> termos × <InlineMath math="n" /> documentos), NMF procura
          matrizes <InlineMath math="W \in \mathbb{R}_{\geq 0}^{m \times k}" /> e
          <InlineMath math="H \in \mathbb{R}_{\geq 0}^{k \times n}" /> que minimizem a reconstrução:
        </p>
        <div style={S.math}>
          <BlockMath math="\min_{W,H \geq 0} \;\|V - WH\|_F^2 \quad \text{sujeito a } W \geq 0,\; H \geq 0" />
        </div>
        <p style={S.p}>
          A norma de Frobenius <InlineMath math="\|A\|_F = \sqrt{\sum_{ij} A_{ij}^2}" /> mede a diferença
          elemento a elemento entre a matriz original e a sua reconstrução. A restrição de não-negatividade
          força uma <strong>representação de partes</strong> (parts-based): ao contrário de PCA/SVD, onde os
          componentes podem ser negativos e se cancelam mutuamente, em NMF cada componente é uma contribuição
          positiva — um documento é literalmente uma <em>soma</em> de tópicos.
        </p>

        <NMFDiagram />

        <h3 style={S.h3}>Algoritmo de Lee & Seung — Multiplicative Updates</h3>
        <p style={S.p}>
          Lee & Seung (2001) propuseram regras de atualização multiplicativas que garantem que W e H
          permanecem não-negativos em cada iteração:
        </p>
        <div style={S.math}>
          <BlockMath math="H \leftarrow H \odot \frac{W^\top V}{W^\top W H}" />
          <BlockMath math="W \leftarrow W \odot \frac{V H^\top}{W H H^\top}" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="\odot" /> é o produto elemento a elemento (Hadamard). A convergência é
          garantida no sentido de que a função de perda <InlineMath math="\|V - WH\|_F^2" /> é
          não-crescente a cada iteração. Contudo, o problema é <strong>não-convexo</strong> — o algoritmo
          converge apenas para um <em>mínimo local</em>, e diferentes inicializações podem produzir soluções
          diferentes. Na prática usa-se múltiplas inicializações aleatórias e seleciona-se a de menor perda.
        </p>
        <div style={S.note}>
          Uma alternativa às multiplicative updates é o <strong>ALS (Alternating Least Squares)</strong>,
          que alterna entre fixar H e otimizar W, e fixar W e otimizar H — cada subproblema é um least
          squares com restrição de não-negatividade. ALS converge mais rapidamente em muitos casos e é
          o default do sklearn.
        </div>

        <h3 style={S.h3}>Interpretabilidade: tópicos como partes aditivas</h3>
        <p style={S.p}>
          Cada coluna de <InlineMath math="W" /> é um <strong>tópico</strong> — um vetor de pesos
          não-negativos sobre os termos do vocabulário. Cada coluna de <InlineMath math="H" /> diz,
          para um dado documento, <em>quanto de cada tópico</em> ele contém. Como tudo é não-negativo,
          os tópicos são verdadeiramente aditivos: um documento sobre desporto e culinária tem contribuições
          positivas de ambos os tópicos — não há cancelamentos.
        </p>
        <p style={S.p}>
          Este comportamento "parts-based" foi demonstrado por Lee & Seung com decomposição de faces:
          NMF aprende partes do rosto (olhos, nariz, boca) como componentes, enquanto PCA aprende
          "eigenfaces" — combinações lineares com componentes negativos que não são interpretáveis como
          partes físicas.
        </p>

        <h3 style={S.h3}>Aplicações além de text mining</h3>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Domínio</th><th style={S.th}>Matriz V</th><th style={S.th}>W (base)</th><th style={S.th}>H (coeficientes)</th></tr></thead>
          <tbody>
            {[
              ['Text mining', 'termos × documentos', 'distribuição de palavras por tópico', 'mistura de tópicos por documento'],
              ['Imagens de faces', 'pixels × imagens', 'partes faciais (olhos, nariz…)', 'quanto de cada parte por imagem'],
              ['Separação de áudio', 'frequência × tempo (spectrograma)', 'padrões espectrais de fontes', 'ativação temporal de cada fonte'],
              ['Sistemas de recomendação', 'utilizadores × itens (ratings)', 'preferências latentes (géneros)', 'perfil de cada utilizador'],
            ].map(([d, v, w, h]) => (
              <tr key={d}><td style={{ ...S.td, fontWeight: 700, color }}>{d}</td><td style={S.td}>{v}</td><td style={S.td}>{w}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{h}</td></tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Comparação: LDA vs NMF</h3>
        <table style={S.table}>
          <thead><tr><th style={S.th}></th><th style={S.th}>LDA</th><th style={S.th}>NMF</th></tr></thead>
          <tbody>
            {[
              ['Tipo', 'Probabilístico (generativo)', 'Algébrico (optimização)'],
              ['Constraint', 'Distribuições Dirichlet (simplex)', 'Não-negatividade (W ≥ 0, H ≥ 0)'],
              ['Inferência', 'Gibbs Sampling / Variational Inference', 'Multiplicative updates / ALS'],
              ['Interpretação', 'P(tópico|doc), P(palavra|tópico)', 'Coeficientes aditivos (escala livre)'],
              ['Escolha de K', 'Perplexidade + coerência semântica', 'Reconstruction error + interpretabilidade'],
              ['Esparsidade', 'Controlada por α (prior Dirichlet)', 'Emergente; regularização L1 opcional'],
              ['Uso típico', 'Topic modelling em texto', 'Texto, imagens, áudio, ratings'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 700, color: 'var(--text-secondary)' }}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={{ ...S.td, color }}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.note}>
          NMF é equivalente a k-Means quando H é restrito a ter exactamente um valor não-zero por coluna
          (atribuição hard) — o que liga NMF ao clustering partitional visto no Módulo 05. Esta
          equivalência mostra que NMF é uma generalização soft de k-Means para matrizes não-negativas.
        </div>
      </div>

      <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>9. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.4rem"}}><strong>Motivação — Topic Modelling</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>O Modelo Generativo</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Distribuição de Dirichlet</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Inferência — Gibbs Sampling vs Variational Inference</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Escolha de K — Perplexidade e Coerência</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Ligação a Outros Módulos</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Pipeline Prático</strong> — conceito central desta lecture.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
