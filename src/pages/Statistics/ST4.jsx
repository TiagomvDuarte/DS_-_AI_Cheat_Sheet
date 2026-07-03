import React, { useState } from 'react';
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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0' },
};

/* ── SVG: Populações e Amostras ── */
function SvgPopulacaoAmostra() {
  return (
    <svg viewBox="0 0 500 200" style={{ width: '100%', maxWidth: 500, display: 'block', margin: '0 auto' }}>
      <defs>
        <marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
      </defs>
      {/* Population ellipse */}
      <ellipse cx="180" cy="100" rx="150" ry="85" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
      <text x="150" y="45" textAnchor="middle" fill={color} fontSize="13" fontWeight="700">População</text>
      <text x="150" y="62" textAnchor="middle" fill="var(--text-secondary)" fontSize="11">(parâmetro θ)</text>
      {/* Sample ellipse */}
      <ellipse cx="195" cy="115" rx="65" ry="45" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" strokeDasharray="5,3" />
      <text x="195" y="109" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Amostra</text>
      <text x="195" y="124" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">(estimador θ̂)</text>
      {/* Amostragem: População → Amostra (right side, going down) */}
      <line x1="340" y1="70" x2="340" y2="115" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowOrange)" />
      <text x="400" y="88" fill="var(--text-secondary)" fontSize="10" textAnchor="middle">Amostragem</text>
      {/* Inferência: Amostra → População (left of arrow, going up) */}
      <line x1="355" y1="130" x2="355" y2="85" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowOrange)" />
      <text x="415" y="118" fill="var(--text-secondary)" fontSize="10" textAnchor="middle">Inferência</text>
    </svg>
  );
}

/* ── SVG: Log-verosimilhança ── */
function SvgLogLikelihood() {
  // Smooth curve points for a parabola-like log-likelihood
  const pts = [];
  for (let i = 0; i <= 60; i++) {
    const x = 40 + i * 5;
    const t = (i - 30) / 15;
    const y = 160 - 100 * Math.exp(-0.5 * t * t);
    pts.push(`${x},${y}`);
  }
  const pathD = 'M' + pts.join(' L');
  return (
    <svg viewBox="0 0 380 200" style={{ width: '100%', maxWidth: 420, display: 'block', margin: '0 auto' }}>
      {/* Axes */}
      <line x1="40" y1="170" x2="360" y2="170" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="40" y1="20" x2="40" y2="170" stroke="var(--text-secondary)" strokeWidth="1.5" />
      {/* Curve */}
      <path d={pathD} fill="none" stroke={color} strokeWidth="2.5" />
      {/* Peak dashed line at x=190 */}
      <line x1="190" y1="55" x2="190" y2="170" stroke={color} strokeWidth="1.5" strokeDasharray="5,3" />
      {/* Peak dot */}
      <circle cx="190" cy="60" r="5" fill={color} />
      <text x="190" y="50" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">θ̂_MLE</text>
      {/* Axis labels */}
      <text x="200" y="188" textAnchor="middle" fill="var(--text-secondary)" fontSize="11">θ</text>
      <text x="25" y="100" fill="var(--text-secondary)" fontSize="11" textAnchor="middle" transform="rotate(-90,25,100)">ℓ(θ)</text>
      {/* Derivative = 0 annotation */}
      <text x="240" y="72" fill="var(--text-secondary)" fontSize="10">dℓ/dθ = 0</text>
    </svg>
  );
}

/* ── SVG: Bullseye 2x2 estimators ── */
function SvgBullseye() {
  const panels = [
    { cx: 95,  cy: 58, label: 'Não viesado', label2: 'Var. baixa', dots: [[-3,2],[2,-4],[0,3],[-2,-2],[4,1],[1,5],[-4,-3],[3,4]] },
    { cx: 285, cy: 58, label: 'Não viesado', label2: 'Var. alta', dots: [[-18,12],[14,-20],[5,22],[-22,-15],[20,8],[10,18],[-15,-18],[18,20]] },
    { cx: 95,  cy: 193, label: 'Viesado', label2: 'Var. baixa', dots: [[12,12],[14,10],[11,14],[13,12],[15,11],[12,13],[14,14],[11,11]] },
    { cx: 285, cy: 193, label: 'Viesado', label2: 'Var. alta', dots: [[15,12],[25,-8],[8,22],[20,18],[-5,28],[30,5],[12,25],[22,-12]] },
  ];
  return (
    <svg viewBox="0 0 380 270" style={{ width: '100%', maxWidth: 700, display: 'block', margin: '0 auto' }}>
      {panels.map((p, i) => (
        <g key={i}>
          {/* Bullseye rings */}
          <circle cx={p.cx} cy={p.cy} r="30" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
          <circle cx={p.cx} cy={p.cy} r="20" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
          <circle cx={p.cx} cy={p.cy} r="10" fill="rgba(249,115,22,0.15)" stroke={color} strokeWidth="1.5" />
          <circle cx={p.cx} cy={p.cy} r="3" fill={color} />
          {/* Dots */}
          {p.dots.map((d, j) => (
            <circle key={j} cx={p.cx + d[0]} cy={p.cy + d[1]} r="3.5" fill={color} fillOpacity="0.75" />
          ))}
          {/* Labels */}
          <text x={p.cx} y={p.cy + 42} textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="700">{p.label}</text>
          <text x={p.cx} y={p.cy + 54} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">{p.label2}</text>
        </g>
      ))}
      {/* Dividers */}
      <line x1="190" y1="10" x2="190" y2="260" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
      <line x1="10" y1="133" x2="370" y2="133" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
    </svg>
  );
}

/* ── SVG: Intervalos de Confiança simulados ── */
function SvgICSimulados() {
  const trueParam = 200;
  const intervals = [
    [175, 225], [182, 218], [190, 230], [168, 208], [185, 222],
    [178, 216], [192, 228], [170, 215], [186, 224], [180, 220],
    [176, 219], [188, 226], [195, 232], [183, 221], [172, 212],
    [187, 223], [181, 219], [193, 229], [245, 278], [174, 214],
  ];
  const minV = 155, maxV = 290;
  const scale = (v) => 60 + ((v - minV) / (maxV - minV)) * 280;
  return (
    <svg viewBox="0 0 400 320" style={{ width: '100%', maxWidth: 440, display: 'block', margin: '0 auto' }}>
      {/* True parameter line */}
      <line x1={scale(trueParam)} y1="10" x2={scale(trueParam)} y2="300" stroke={color} strokeWidth="2" strokeDasharray="6,3" />
      <text x={scale(trueParam)} y="8" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">θ verdadeiro</text>
      {intervals.map((iv, i) => {
        const missing = iv[0] > trueParam || iv[1] < trueParam;
        const c = missing ? '#f97316' : 'var(--text-secondary)';
        const y = 20 + i * 14;
        return (
          <g key={i}>
            <line x1={scale(iv[0])} y1={y} x2={scale(iv[1])} y2={y} stroke={c} strokeWidth="2" />
            <circle cx={scale(iv[0])} cy={y} r="2.5" fill={c} />
            <circle cx={scale(iv[1])} cy={y} r="2.5" fill={c} />
            <circle cx={scale((iv[0] + iv[1]) / 2)} cy={y} r="3" fill={c} />
          </g>
        );
      })}
      <text x="200" y="315" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">19 de 20 ICs contêm θ (vermelho = não contém)</text>
    </svg>
  );
}

/* ── SVG: Largura IC por n ── */
function SvgICWidth() {
  const ns = [10, 30, 100, 500];
  const widths = ns.map(n => (2 * 1.96) / Math.sqrt(n));
  const maxW = widths[0];
  const barH = 32;
  const gap = 14;
  const totalH = ns.length * (barH + gap) + 40;
  return (
    <svg viewBox={`0 0 380 ${totalH}`} style={{ width: '100%', maxWidth: 420, display: 'block', margin: '0 auto' }}>
      <text x="10" y="18" fill="var(--text-secondary)" fontSize="11">Largura do IC 95% (σ=1)</text>
      {ns.map((n, i) => {
        const bw = (widths[i] / maxW) * 260;
        const y = 30 + i * (barH + gap);
        return (
          <g key={n}>
            <text x="38" y={y + barH / 2 + 4} textAnchor="end" fill="var(--text-secondary)" fontSize="11">n={n}</text>
            <rect x="45" y={y} width={bw} height={barH} rx="4" fill={`rgba(249,115,22,0.10)})`} stroke={color} strokeWidth="1" />
            <text x={50 + bw} y={y + barH / 2 + 4} fill="var(--text-primary)" fontSize="10" fontWeight="600">{widths[i].toFixed(3)}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* ── SVG: Bootstrap diagram ── */
function SvgBootstrap() {
  return (
    <svg viewBox="0 0 420 220" style={{ width: '100%', maxWidth: 460, display: 'block', margin: '0 auto' }}>
      {/* Original sample */}
      <rect x="10" y="80" width="90" height="50" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
      <text x="55" y="102" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Amostra</text>
      <text x="55" y="118" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">original n</text>
      {/* Arrow to bootstrap samples */}
      <line x1="100" y1="105" x2="130" y2="105" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="118" y="96" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">B vezes</text>
      {/* 5 bootstrap samples */}
      {[0,1,2,3,4].map(j => {
        const y = 15 + j * 38;
        return (
          <g key={j}>
            <rect x="135" y={y} width="80" height="26" rx="5" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" strokeDasharray="3,2" />
            <text x="175" y={y + 14} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Boot* {j + 1}</text>
            {/* Arrow to estimate */}
            <line x1="215" y1={y + 13} x2="245" y2={y + 13} stroke="var(--text-secondary)" strokeWidth="1" />
            <rect x="248" y={y} width="60" height="26" rx="5" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
            <text x="278" y={y + 14} textAnchor="middle" fill={color} fontSize="9" fontWeight="700">θ̂* {j + 1}</text>
          </g>
        );
      })}
      {/* Percentile CI box */}
      <rect x="318" y="65" width="88" height="80" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
      <text x="362" y="88" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">IC</text>
      <text x="362" y="103" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Percentil</text>
      <text x="362" y="118" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">[P2.5, P97.5]</text>
      <text x="362" y="134" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">das θ̂*</text>
      {/* Arrow from estimates to CI */}
      <line x1="308" y1="105" x2="318" y2="105" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

/* ── Main Component ── */
export default function ST4() {
  const [activeTab, setActiveTab] = useState('z');

  return (
    <div style={S.page}>
      {/* Back link */}
      <Link to="/statistics" style={S.back}>
        <ArrowLeft size={16} />
        Voltar a Statistics
      </Link>

      {/* Header */}
      <div style={S.tag}>MÓDULO 04</div>
      <h1 style={S.h1}>Estimação Pontual &amp; Intervalos de Confiança</h1>
      <p style={S.lead}>
        A inferência estatística consiste em extrair conclusões sobre uma população a partir de uma amostra.
        Neste módulo estudamos como construir estimadores pontuais com boas propriedades (MM, MLE) e como
        quantificar a incerteza através de intervalos de confiança — frequentistas e bootstrap.
      </p>

      {/* ── 1. Populações e Amostras ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Populações e Amostras</h2>
        <p style={S.p}>
          Uma <strong>população</strong> é o conjunto completo de elementos de interesse, caracterizada por
          um <strong>parâmetro</strong> <InlineMath math="\theta" /> (valor fixo, mas geralmente desconhecido). Uma <strong>amostra</strong> é
          um subconjunto observável da população; com ela construímos um <strong>estimador</strong> <InlineMath math="\hat{\theta}" /> — uma
          função dos dados amostrais que aproxima <InlineMath math="\theta" />.
        </p>

        <div style={S.diagram}>
          <SvgPopulacaoAmostra />
        </div>

        <h3 style={S.h3}>Propriedades desejáveis de um estimador</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Definição formal</th>
              <th style={S.th}>Interpretação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Não-viés</strong></td>
              <td style={S.td}><InlineMath math="E[\hat{\theta}] = \theta" /></td>
              <td style={S.td}>Em média, o estimador acerta o valor verdadeiro</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Consistência</strong></td>
              <td style={S.td}><InlineMath math="\hat{\theta} \xrightarrow{p} \theta" /> quando <InlineMath math="n \to \infty" /></td>
              <td style={S.td}>Com mais dados, converge para o valor real</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Eficiência</strong></td>
              <td style={S.td}><InlineMath math="\mathrm{Var}(\hat{\theta}) = 1/I(\theta)" /></td>
              <td style={S.td}>Atinge o limite inferior de variância (Cramér-Rao)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Suficiência</strong></td>
              <td style={S.td}><InlineMath math="T(x)" /> suficiente para <InlineMath math="\theta" /></td>
              <td style={S.td}>Capta toda a informação amostral sobre <InlineMath math="\theta" /></td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          Notação: <InlineMath math="\theta" /> representa o parâmetro populacional (ex. <InlineMath math="\mu, \sigma^2, p" />) e <InlineMath math="\hat{\theta}" /> representa o estimador
          calculado a partir dos dados (ex. <InlineMath math="\bar{x}, s^2, \hat{p}" />).
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 2. Método dos Momentos ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Método dos Momentos (MM)</h2>
        <p style={S.p}>
          O <strong>Método dos Momentos</strong> iguala os momentos populacionais (expressos em termos de <InlineMath math="\theta" />)
          aos momentos amostrais correspondentes. O k-ésimo momento populacional é <InlineMath math="\mu'_k = E[X^k]" />;
          o k-ésimo momento amostral é <InlineMath math="m'_k = \frac{1}{n}\sum x_i^k" />.
        </p>

        <div style={S.highlight}>
          <strong>Princípio:</strong> Para estimar k parâmetros, igualamos os primeiros k momentos populacionais
          aos amostrais e resolvemos o sistema resultante.
        </div>

        <h3 style={S.h3}>Exemplo: Distribuição Normal N(μ, σ²)</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Passo</th>
              <th style={S.th}>Momento populacional</th>
              <th style={S.th}>Momento amostral</th>
              <th style={S.th}>Estimador MM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>1.º momento</td>
              <td style={S.td}><InlineMath math="E[X] = \mu" /></td>
              <td style={S.td}><InlineMath math="m'_1 = \bar{x}" /></td>
              <td style={S.td}><InlineMath math="\hat{\mu}_{MM} = \bar{x}" /></td>
            </tr>
            <tr>
              <td style={S.td}>2.º momento central</td>
              <td style={S.td}><InlineMath math="E[(X-\mu)^2] = \sigma^2" /></td>
              <td style={S.td}><InlineMath math="\frac{1}{n}\sum(x_i - \bar{x})^2" /></td>
              <td style={S.td}><InlineMath math="\hat{\sigma}^2_{MM} = \frac{1}{n}\sum(x_i - \bar{x})^2" /></td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          Note que o estimador MM de σ² divide por n (não por n-1), sendo por isso ligeiramente viesado.
          O estimador não-viesado da variância divide por n-1 e chama-se variância amostral corrigida s².
        </div>

        <h3 style={S.h3}>Exemplo: Distribuição Gama(α, β)</h3>
        <p style={S.p}>
          Para <InlineMath math="\mathrm{Gama}(\alpha, \beta)" />: <InlineMath math="E[X] = \alpha\beta" /> e <InlineMath math="\mathrm{Var}(X) = \alpha\beta^2" />. Igualando aos momentos amostrais <InlineMath math="\bar{x}" /> e <InlineMath math="s^2" />:
        </p>
        <BlockMath math="\hat{\beta}_{MM} = \frac{s^2}{\bar{x}}, \qquad \hat{\alpha}_{MM} = \frac{\bar{x}}{\hat{\beta}_{MM}} = \frac{\bar{x}^2}{s^2}" />
        <p style={S.p}>
          O MM é simples e geralmente produz estimadores consistentes, mas pode não ser eficiente —
          é por isso que surge a Máxima Verosimilhança como alternativa mais rigorosa.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 3. Máxima Verosimilhança ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Máxima Verosimilhança (MLE)</h2>
        <p style={S.p}>
          O <strong>Estimador de Máxima Verosimilhança</strong> (MLE) escolhe o valor de θ que torna os dados
          observados mais prováveis. Define-se a <em>função de verosimilhança</em>:
        </p>
        <BlockMath math="L(\theta \mid x_1,\ldots,x_n) = \prod_{i=1}^{n} f(x_i;\,\theta)" />
        <p style={S.p}>
          Por conveniência numérica, maximizamos a <em>log-verosimilhança</em>:
          <InlineMath math="\ell(\theta) = \log L(\theta) = \sum \log f(x_i;\theta)" />, que tem o mesmo maximizante que <InlineMath math="L(\theta)" />.
        </p>

        <div style={S.diagram}>
          <SvgLogLikelihood />
          <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0.5rem 0 0' }}>
            Curva de log-verosimilhança — o MLE é o pico (derivada = 0)
          </p>
        </div>

        <h3 style={S.h3}>Exemplo: MLE para Bernoulli(p)</h3>
        <p style={S.p}>
          Seja X₁,...,Xₙ iid Bernoulli(p). A log-verosimilhança é:
        </p>
        <BlockMath math="\ell(p) = \left(\sum x_i\right)\log p + \left(n - \sum x_i\right)\log(1-p)" />
        <p style={S.p}>
          Derivando e igualando a zero: <InlineMath math="\frac{d\ell}{dp} = \frac{\sum x_i}{p} - \frac{n - \sum x_i}{1-p} = 0" />
        </p>
        
          <strong><InlineMath math="\hat{p}_{MLE} = \frac{1}{n}\sum x_i = \bar{x}" /></strong> — a proporção amostral de sucessos.
        

        <h3 style={S.h3}>Propriedades do MLE</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Consistência</td>
              <td style={S.td}><InlineMath math="\hat{\theta}_{MLE} \xrightarrow{p} \theta_0" /> (verdadeiro) quando <InlineMath math="n \to \infty" /></td>
            </tr>
            <tr>
              <td style={S.td}>Normalidade assintótica</td>
              <td style={S.td}><InlineMath math="\sqrt{n}(\hat{\theta}_{MLE} - \theta_0) \xrightarrow{d} \mathcal{N}(0,\,1/I(\theta_0))" /></td>
            </tr>
            <tr>
              <td style={S.td}>Eficiência assintótica</td>
              <td style={S.td}>Atinge o bound de Cramér-Rao assintoticamente</td>
            </tr>
            <tr>
              <td style={S.td}>Invariância</td>
              <td style={S.td}>Se <InlineMath math="\hat{\theta}" /> é MLE de <InlineMath math="\theta" />, então <InlineMath math="g(\hat{\theta})" /> é MLE de <InlineMath math="g(\theta)" /></td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          Em modelos complexos onde <InlineMath math="d\ell/d\theta = 0" /> não tem solução fechada, usam-se métodos numéricos
          como gradiente descendente ou o algoritmo EM.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 4. Propriedades dos Estimadores ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Propriedades dos Estimadores</h2>

        <h3 style={S.h3}>Viés e Erro Quadrático Médio</h3>
        <p style={S.p}>
          O <strong>viés</strong> (bias) de um estimador mede o desvio sistemático em relação ao valor verdadeiro:
        </p>
        <BlockMath math="B(\hat{\theta}) = E[\hat{\theta}] - \theta" />
        <p style={S.p}>
          O <strong>Erro Quadrático Médio</strong> (EQM / MSE) combina viés e variância:
        </p>
        <BlockMath math="\mathrm{MSE}(\hat{\theta}) = E[(\hat{\theta} - \theta)^2] = \mathrm{Var}(\hat{\theta}) + [B(\hat{\theta})]^2" />
        <p style={S.p}>
          Esta decomposição mostra o <em>trade-off viés-variância</em>: um estimador com viés pequeno pode ter
          MSE menor do que um estimador não-viesado com variância elevada.
        </p>

        <div style={S.diagram}>
          <SvgBullseye />
          <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0.75rem 0 0' }}>
            Analogia do alvo: cada ponto representa uma estimativa em diferentes amostras
          </p>
        </div>

        <h3 style={S.h3}>Consistência</h3>
        <p style={S.p}>
          Um estimador é <strong>consistente</strong> se converge em probabilidade para θ quando n → ∞:
        </p>
        <BlockMath math="\forall\,\varepsilon > 0:\; P(|\hat{\theta}_n - \theta| > \varepsilon) \to 0 \text{ quando } n \to \infty" />
        <p style={S.p}>
          Condição suficiente: se <InlineMath math="\mathrm{MSE}(\hat{\theta}_n) \to 0" /> quando <InlineMath math="n \to \infty" />, então <InlineMath math="\hat{\theta}_n" /> é consistente.
          A média amostral <InlineMath math="\bar{x}" /> é consistente para <InlineMath math="\mu" /> pela Lei dos Grandes Números.
        </p>

        <h3 style={S.h3}>Exemplos de Viés</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Estimador</th>
              <th style={S.th}>Viés</th>
              <th style={S.th}>Comentário</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="\bar{x}" /> para <InlineMath math="\mu" /></td>
              <td style={S.td}>0 (não-viesado)</td>
              <td style={S.td}>Estimador padrão da média</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\frac{1}{n}\sum(x_i-\bar{x})^2" /> para <InlineMath math="\sigma^2" /></td>
              <td style={S.td}><InlineMath math="-\sigma^2/n" /> (viesado)</td>
              <td style={S.td}>Divide por n em vez de n-1</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="s^2 = \frac{1}{n-1}\sum(x_i-\bar{x})^2" /></td>
              <td style={S.td}>0 (não-viesado)</td>
              <td style={S.td}>Correção de Bessel</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\max(X_1,\ldots,X_n)" /> para <InlineMath math="\theta" /> de <InlineMath math="U(0,\theta)" /></td>
              <td style={S.td}><InlineMath math="-\theta/(n+1)" /> (viesado)</td>
              <td style={S.td}>Subestima sistematicamente</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 5. Cramér-Rao ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Limite de Cramér-Rao</h2>
        <p style={S.p}>
          O <strong>Limite de Cramér-Rao</strong> estabelece um piso para a variância de qualquer estimador
          não-viesado. Define-se a <strong>Informação de Fisher</strong> como:
        </p>
        <BlockMath math="I(\theta) = E\!\left[\left(\frac{d}{d\theta}\log f(X;\theta)\right)^{\!2}\right] = -E\!\left[\frac{d^2}{d\theta^2}\log f(X;\theta)\right]" />
        <p style={S.p}>
          O teorema de Cramér-Rao afirma que para qualquer estimador não-viesado <InlineMath math="\hat{\theta}" />:
        </p>
        <BlockMath math="\mathrm{Var}(\hat{\theta}) \geq \frac{1}{n \cdot I(\theta)}" />

        <h3 style={S.h3}>Eficiência relativa</h3>
        <p style={S.p}>
          A <strong>eficiência</strong> de um estimador não-viesado θ̂ é definida como:
        </p>
        <BlockMath math="e(\hat{\theta}) = \frac{1/(n\cdot I(\theta))}{\mathrm{Var}(\hat{\theta})} \leq 1" />
        <p style={S.p}>
          Um estimador com <InlineMath math="e(\hat{\theta}) = 1" /> diz-se <strong>eficiente</strong> (atinge o bound). O MLE é
          assintoticamente eficiente — para amostras grandes, <InlineMath math="\mathrm{Var}(\hat{\theta}_{MLE}) \approx 1/(n\cdot I(\theta))" />.
        </p>

        <h3 style={S.h3}>UMVUE — Estimador Não-Viesado de Variância Uniformemente Mínima</h3>
        <p style={S.p}>
          Um estimador é <strong>UMVUE</strong> (Uniformly Minimum Variance Unbiased Estimator) se é
          não-viesado e tem variância mínima entre todos os estimadores não-viesados para todos os
          valores de θ. O Teorema de Lehmann-Scheffé garante que uma função de uma estatística
          suficiente e completa é UMVUE.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Distribuição</th>
              <th style={S.th}>Parâmetro</th>
              <th style={S.th}>I(θ)</th>
              <th style={S.th}>UMVUE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="\mathcal{N}(\mu,\sigma^2)" /></td>
              <td style={S.td}><InlineMath math="\mu" /> (<InlineMath math="\sigma^2" /> conhecido)</td>
              <td style={S.td}><InlineMath math="1/\sigma^2" /></td>
              <td style={S.td}><InlineMath math="\bar{x}" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\mathrm{Bernoulli}(p)" /></td>
              <td style={S.td}><InlineMath math="p" /></td>
              <td style={S.td}><InlineMath math="1/(p(1-p))" /></td>
              <td style={S.td}><InlineMath math="\hat{p} = \bar{x}" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\mathrm{Poisson}(\lambda)" /></td>
              <td style={S.td}><InlineMath math="\lambda" /></td>
              <td style={S.td}><InlineMath math="1/\lambda" /></td>
              <td style={S.td}><InlineMath math="\bar{x}" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\mathrm{Exp}(\lambda)" /></td>
              <td style={S.td}><InlineMath math="\lambda" /></td>
              <td style={S.td}><InlineMath math="1/\lambda^2" /></td>
              <td style={S.td}><InlineMath math="1/\bar{x}" /></td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 6. Intervalos de Confiança ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Intervalos de Confiança — Conceito</h2>
        <p style={S.p}>
          Um <strong>Intervalo de Confiança</strong> (IC) de nível (1-α)×100% é um intervalo aleatório
          [L(X), U(X)] construído a partir dos dados tal que:
        </p>
        <BlockMath math="P\!\left(L(X) \leq \theta \leq U(X)\right) = 1 - \alpha" />

        <div style={{ ...S.note, fontSize: '1rem' }}>
          <strong>Interpretação correcta:</strong> "Se repetíssemos este procedimento amostral muitas vezes,
          (1-α)×100% dos intervalos construídos desta forma conteriam o verdadeiro parâmetro θ."
          O parâmetro θ é fixo — é o intervalo que é aleatório.
        </div>

        <div style={S.note}>
          <strong>Interpretação incorrecta (evitar):</strong> "Há 95% de probabilidade de θ estar neste
          intervalo específico." Após observar os dados, o IC ou contém ou não contém θ.
        </div>

        <div style={S.diagram}>
          <SvgICSimulados />
        </div>

        <p style={S.p}>
          O diagrama acima simula 20 amostras independentes e os respectivos ICs de 95%. Como esperado,
          aproximadamente 19 (95%) contêm o verdadeiro parâmetro (linhas cinzentas) e 1 não contém (vermelho).
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 7. IC para a Média ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. IC para a Média</h2>

        {/* Tab selector */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {[
            { key: 'z', label: 'σ Conhecida (Z)' },
            { key: 't', label: 'σ Desconhecida (t)' },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                padding: '0.45rem 1.1rem',
                borderRadius: 20,
                border: `2px solid ${activeTab === tab.key ? color : 'var(--card-border)'}`,
                background: activeTab === tab.key ? `rgba(249,115,22,0.10)` : 'transparent',
                color: activeTab === tab.key ? color : 'var(--text-secondary)',
                fontWeight: activeTab === tab.key ? 700 : 400,
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'z' && (
          <div>
            <p style={S.p}>
              Quando σ é conhecida e n é suficientemente grande (ou a população é normal),
              a estatística de teste segue uma distribuição Normal padrão:
            </p>
            <BlockMath math="\text{IC } (1-\alpha):\quad \bar{x} \pm z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}" />
            <p style={S.p}>
              onde <InlineMath math="z_{\alpha/2}" /> é o quantil da Normal padrão. Para IC de 95%: <InlineMath math="z_{0.025} = 1.96" />.
              Para IC de 99%: <InlineMath math="z_{0.005} = 2.576" />.
            </p>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Nível de confiança</th>
                  <th style={S.th}>α</th>
                  <th style={S.th}><InlineMath math="z_{\alpha/2}" /></th>
                  <th style={S.th}>Largura (σ=1, n=100)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['90%', '0.10', '1.645', '0.329'],
                  ['95%', '0.05', '1.960', '0.392'],
                  ['99%', '0.01', '2.576', '0.515'],
                  ['99.9%', '0.001', '3.291', '0.658'],
                ].map(([conf, a, z, w]) => (
                  <tr key={conf}>
                    <td style={S.td}>{conf}</td>
                    <td style={S.td}>{a}</td>
                    <td style={S.td}>{z}</td>
                    <td style={S.td}>{w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 't' && (
          <div>
            <p style={S.p}>
              Quando σ é desconhecida, substituímos por s (desvio padrão amostral). A estatística
              segue uma distribuição t de Student com n-1 graus de liberdade:
            </p>
            <BlockMath math="\text{IC } (1-\alpha):\quad \bar{x} \pm t_{\alpha/2,\,n-1} \cdot \frac{s}{\sqrt{n}}" />
            <p style={S.p}>
              A distribuição t tem caudas mais pesadas que a Normal, o que produz intervalos mais largos
              — reflectindo a incerteza adicional devido à estimação de <InlineMath math="\sigma" />. Para n grande (<InlineMath math="n > 30" />),
              <InlineMath math="t_{\alpha/2,\,n-1} \approx z_{\alpha/2}" />.
            </p>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>n (graus liberdade = n-1)</th>
                  <th style={S.th}><InlineMath math="t_{0.025,\,n-1}" /> (IC 95%)</th>
                  <th style={S.th}>Comparação com z=1.96</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['5 (gl=4)', '2.776', '+41.6%'],
                  ['10 (gl=9)', '2.262', '+15.4%'],
                  ['20 (gl=19)', '2.093', '+6.8%'],
                  ['30 (gl=29)', '2.045', '+4.3%'],
                  ['100 (gl=99)', '1.984', '+1.2%'],
                  ['∞', '1.960', '—'],
                ].map(([n, t, diff]) => (
                  <tr key={n}>
                    <td style={S.td}>{n}</td>
                    <td style={S.td}>{t}</td>
                    <td style={S.td}>{diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <h3 style={S.h3}>Efeito do tamanho amostral na largura do IC</h3>
        <p style={S.p}>
          A largura do IC 95% é <InlineMath math="2 \times 1.96 \times \sigma/\sqrt{n}" />. Duplicar n reduz a largura por um factor de <InlineMath math="\sqrt{2} \approx 1.41" />.
          Para reduzir a largura a metade, precisamos de 4× mais observações.
        </p>
        <div style={S.diagram}>
          <SvgICWidth />
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 8. IC para Proporção ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. IC para a Proporção</h2>
        <p style={S.p}>
          Para estimar uma proporção p a partir de uma amostra binomial com x sucessos em n tentativas,
          temos <InlineMath math="\hat{p} = x/n" />. Pelo Teorema Central do Limite, para n grande:
        </p>
        <BlockMath math="\text{IC de Wald (95\%):}\quad \hat{p} \pm 1.96\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}" />

        <h3 style={S.h3}>Intervalo de Wilson (recomendado para amostras pequenas)</h3>
        <p style={S.p}>
          O IC de Wald tem cobertura deficiente quando p é próximo de 0 ou 1, ou quando n é pequeno.
          O <strong>Intervalo de Wilson</strong> é preferível:
        </p>
        <BlockMath math="\left[\tilde{p} - z\sqrt{\frac{\tilde{p}(1-\tilde{p})}{\tilde{n}}},\;\; \tilde{p} + z\sqrt{\frac{\tilde{p}(1-\tilde{p})}{\tilde{n}}}\right]" />
          <BlockMath math="\tilde{p} = \frac{x + z^2/2}{n + z^2}, \qquad \tilde{n} = n + z^2" />

        <h3 style={S.h3}>Exemplo: Sondagem com n=1000</h3>
        <p style={S.p}>
          Uma sondagem a 1000 pessoas revela que 480 aprovam determinada medida. Calculamos <InlineMath math="\hat{p} = 0.48" /> e
          construímos o IC de 95%:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Limite inferior</th>
              <th style={S.th}>Limite superior</th>
              <th style={S.th}>Largura</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Wald</td>
              <td style={S.td}>0.449</td>
              <td style={S.td}>0.511</td>
              <td style={S.td}>0.062</td>
            </tr>
            <tr>
              <td style={S.td}>Wilson</td>
              <td style={S.td}>0.449</td>
              <td style={S.td}>0.511</td>
              <td style={S.td}>0.062</td>
            </tr>
          </tbody>
        </table>
        <p style={S.p}>
          Para n=1000 os dois métodos coincidem praticamente. A diferença é relevante para n pequeno
          ou p extremo (ex. p=0.02, n=30).
        </p>

        <h3 style={S.h3}>Dimensionamento amostral</h3>
        <p style={S.p}>
          Para garantir uma margem de erro máxima E com confiança 95%, o tamanho mínimo de amostra é:
        </p>
        <BlockMath math="n \geq \frac{z_{\alpha/2}^2 \cdot p(1-p)}{E^2}" />
        <p style={S.p}>
          Usando <InlineMath math="p = 0.5" /> (caso mais conservador): <InlineMath math="n \geq 1.96^2 \times 0.25 / E^2" />.
          Para <InlineMath math="E = 0.03" /> (margem ±3%): <InlineMath math="n \geq 1068" /> pessoas.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 9. Bootstrap ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Bootstrap — IC Não-Paramétrico</h2>
        <p style={S.p}>
          O <strong>Bootstrap</strong> (Efron, 1979) é um método de reamostrar os próprios dados para
          estimar a distribuição amostral de qualquer estatística, sem assumir uma forma paramétrica.
          É especialmente útil quando não existe fórmula analítica para o IC.
        </p>

        <h3 style={S.h3}>Algoritmo Bootstrap Percentil</h3>
        <div style={S.diagram}>
          <SvgBootstrap />
        </div>

        <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-primary)', lineHeight: 2, fontSize: '1rem' }}>
          <li>Partir da amostra original x = (x₁,...,xₙ)</li>
          <li>Gerar B amostras bootstrap x* por reamostrar com reposição de x</li>
          <li>Calcular o estimador θ̂* em cada amostra bootstrap</li>
          <li>Ordenar as B estimativas: θ̂*(1) ≤ θ̂*(2) ≤ ... ≤ θ̂*(B)</li>
          <li>IC percentil 95%: [θ̂*(⌊0.025B⌋), θ̂*(⌊0.975B⌋)]</li>
        </ol>

        <h3 style={S.h3}>Variantes do Bootstrap</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Percentil</td>
              <td style={S.td}>[Q_{'{2.5%}'}, Q_{'{97.5%}'}] das θ̂*</td>
              <td style={S.td}>Distribuição aproximadamente simétrica</td>
            </tr>
            <tr>
              <td style={S.td}>BCa (bias-corrected)</td>
              <td style={S.td}>Corrige viés e assimetria</td>
              <td style={S.td}>Distribuição assimétrica</td>
            </tr>
            <tr>
              <td style={S.td}>Bootstrap-t</td>
              <td style={S.td}>[θ̂ - t*_{'{0.975}'} · se, θ̂ + t*_{'{0.025}'} · se]</td>
              <td style={S.td}>Melhor cobertura em geral</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          Para resultados fiáveis, recomenda-se B ≥ 1000 (para ICs) ou B ≥ 10000 (para p-values).
          O bootstrap paramétrico assume uma família distribucional mas reamosra a partir do modelo ajustado.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 10. Síntese ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Síntese do Módulo</h2>

        
          <strong>Estimação pontual</strong> fornece um valor único <InlineMath math="\hat{\theta}" /> para <InlineMath math="\theta" />.
          Os principais métodos são o <em>Método dos Momentos</em> (simples, mas menos eficiente)
          e a <em>Máxima Verosimilhança</em> (assintoticamente eficiente e invariante).
        

        
          <strong>Propriedades chave:</strong> viés (<InlineMath math="E[\hat{\theta}]-\theta" />), variância, <InlineMath math="\mathrm{MSE} = \mathrm{Var} + \mathrm{Bias}^2" />.
          O limite de Cramér-Rao estabelece o piso de variância atingível.
          O UMVUE é o estimador não-viesado de menor variância possível.
        

        
          <strong>Intervalos de confiança</strong> quantificam a incerteza. O nível <InlineMath math="(1-\alpha)" />
          é uma propriedade do procedimento, não do intervalo específico observado.
          Para <InlineMath math="\sigma" /> conhecida usa-se Z; para <InlineMath math="\sigma" /> desconhecida usa-se t com <InlineMath math="n-1" /> graus de liberdade.
        

        <div style={S.highlight}>
          <strong>Bootstrap</strong> estende os ICs a qualquer estatística, sem suposições
          distribucionais. O método BCa é preferível ao percentil simples na maioria dos casos.
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Situação</th>
              <th style={S.th}>Estimador</th>
              <th style={S.th}>IC (95%)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Média, σ conhecida', <InlineMath math="\bar{x}" />, <InlineMath math="\bar{x} \pm 1.96\,\sigma/\sqrt{n}" />],
              ['Média, σ desconhecida', <InlineMath math="\bar{x}" />, <InlineMath math="\bar{x} \pm t_{0.025,n-1}\,s/\sqrt{n}" />],
              ['Proporção (n grande)', <InlineMath math="\hat{p} = x/n" />, <InlineMath math="\hat{p} \pm 1.96\sqrt{\hat{p}(1-\hat{p})/n}" />],
              ['Proporção (Wilson)', <InlineMath math="\hat{p}" />, 'Fórmula Wilson'],
              ['Qualquer estatística', <InlineMath math="\hat{\theta}" />, 'Bootstrap BCa'],
            ].map(([sit, est, ic]) => (
              <tr key={sit}>
                <td style={S.td}>{sit}</td>
                <td style={S.td}>{est}</td>
                <td style={S.td}>{ic}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </section>
    </div>
  );
}
