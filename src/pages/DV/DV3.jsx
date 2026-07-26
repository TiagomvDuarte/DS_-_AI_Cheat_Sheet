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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(74,158,237,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

/* ── Dados para os gráficos linear vs. log ── */
const anos = [0, 1, 2, 3, 4, 5, 6];
const valores = [1, 3, 10, 32, 100, 316, 1000];

/* Mapeamento linear para pixel: domínio [0,1000] → [30, 190] */
const yLin = v => 190 - (v / 1000) * 160;
/* Mapeamento log para pixel: domínio [log(1),log(1000)] → [30, 190] */
const yLog = v => 190 - (Math.log10(v) / Math.log10(1000)) * 160;
const xPos = i => 40 + i * 70;

const ptLin = valores.map((v, i) => `${xPos(i)},${yLin(v)}`).join(' ');
const ptLog = valores.map((v, i) => `${xPos(i)},${yLog(v)}`).join(' ');

/* ── Paletas de cor para Section 2 ── */
const seqColors  = ['#eff6ff','#dbeafe','#bfdbfe','#93c5fd','#60a5fa','#3b82f6','#2563eb','#1e3a8a'];
const divColors  = ['#c2410c','#ea580c','#fb923c','#fed7aa','#bfdbfe','#60a5fa','#2563eb','#1e3a8a'];
const qualColors = ['#4a9eed','#f97316','#22c55e','#ef4444','#a855f7','#06b6d4','#eab308','#ec4899'];

/* ── Roda de cores: 12 passos de hue ── */
const hueSteps = Array.from({ length: 12 }, (_, i) => i * 30);
const wheelCx = 100, wheelCy = 100, wheelR = 70, dotR = 12;
const hueCircles = hueSteps.map((h, i) => {
  const angle = (i / 12) * 2 * Math.PI - Math.PI / 2;
  return {
    cx: wheelCx + wheelR * Math.cos(angle),
    cy: wheelCy + wheelR * Math.sin(angle),
    fill: `hsl(${h},80%,55%)`,
    label: `${h}°`,
  };
});

/* ── Calendar heatmap ── */
const weeks = 12, days = 7;
const cellW = 36, cellH = 14, gap = 2;
const intensities = Array.from({ length: weeks * days }, (_, i) => {
  const seed = (i * 37 + 13) % 100;
  if (seed < 30) return 0;
  if (seed < 55) return 1;
  if (seed < 75) return 2;
  if (seed < 90) return 3;
  return 4;
});
const heatColors = ['#1e293b','rgba(74,158,237,0.25)','rgba(74,158,237,0.5)','#4a9eed','#0369a1'];

/* ── Distritos Portugal ordenados por intensidade ── */
const distritos = [
  { nome: 'Porto',            v: 1.00 },
  { nome: 'Lisboa',           v: 0.95 },
  { nome: 'Viana do Castelo', v: 0.90 },
  { nome: 'Setúbal',          v: 0.85 },
  { nome: 'Aveiro',           v: 0.80 },
  { nome: 'Braga',            v: 0.70 },
  { nome: 'Coimbra',          v: 0.70 },
  { nome: 'Viseu',            v: 0.60 },
  { nome: 'Faro',             v: 0.60 },
  { nome: 'Vila Real',        v: 0.50 },
  { nome: 'Castelo Branco',   v: 0.50 },
  { nome: 'Évora',            v: 0.45 },
  { nome: 'Guarda',           v: 0.40 },
  { nome: 'Portalegre',       v: 0.35 },
  { nome: 'Bragança',         v: 0.30 },
  { nome: 'Beja',             v: 0.30 },
];
const distColor = v => `rgba(74,158,237,${(0.15 + v * 0.85).toFixed(2)})`;

export default function DV3() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>

        {/* Cabeçalho */}
        <Link to="/dv" style={S.back}><ArrowLeft size={16} /> Voltar para Visualização de Dados</Link>
        <div style={S.tag}>MÓDULO 03</div>
        <h1 style={S.h1}>Escalas, Cores e Percepção Visual</h1>

        {/* ── SECTION 1 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>1. Escalas Lineares vs. Logarítmicas</h2>
          <p style={S.p}>
            Numa escala <strong>linear</strong>, diferenças absolutas iguais ocupam distâncias iguais no eixo:
            a distância de 10 para 20 é a mesma que de 990 para 1000. Numa escala <strong>logarítmica</strong>,
            são as diferenças <em>relativas</em> (razões) que ocupam distâncias iguais: passar de 1 para 10
            ocupa o mesmo espaço que passar de 10 para 100 ou de 100 para 1000.
          </p>
          <p style={S.p}>
            A escala logarítmica é indispensável quando os dados cobrem várias ordens de magnitude — por
            exemplo, PIB per capita (de centenas a dezenas de milhar), população de cidades (de mil a
            milhões) ou crescimento viral (de unidades a milhões de casos). Em escala linear, os valores
            pequenos ficam esmagados junto ao eixo e a variação relevante fica invisível.
          </p>

          {/* SVG: linear vs. log */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              Os mesmos dados [1, 3, 10, 32, 100, 316, 1000] em escala linear (esquerda) e logarítmica (direita)
            </p>
            <svg viewBox="0 0 560 220" style={{ width: '100%', height: 'auto', display: 'block' }}>
              {/* ── Painel Linear ── */}
              <text x="140" y="14" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">Escala Linear</text>
              {/* eixos */}
              <line x1="40" y1="30" x2="40"  y2="195" stroke="var(--text-secondary)" strokeWidth="1"/>
              <line x1="40" y1="195" x2="270" y2="195" stroke="var(--text-secondary)" strokeWidth="1"/>
              {/* linhas de grelha */}
              {[0,250,500,750,1000].map(v => (
                <g key={v}>
                  <line x1="40" y1={yLin(v)} x2="265" y2={yLin(v)} stroke="var(--text-secondary)" strokeWidth="0.5" strokeDasharray="3,3"/>
                  <text x="35" y={yLin(v)+4} textAnchor="end" fontSize="8" fill="var(--text-secondary)">{v}</text>
                </g>
              ))}
              {/* labels eixo x */}
              {anos.map(i => (
                <text key={i} x={xPos(i)} y="206" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{i}</text>
              ))}
              {/* linha de dados */}
              <polyline points={ptLin} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
              {/* pontos */}
              {valores.map((v, i) => (
                <circle key={i} cx={xPos(i)} cy={yLin(v)} r="4" fill={color}/>
              ))}

              {/* ── Painel Log ── */}
              <text x="420" y="14" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">Escala Logarítmica</text>
              <line x1="320" y1="30" x2="320" y2="195" stroke="var(--text-secondary)" strokeWidth="1"/>
              <line x1="320" y1="195" x2="550" y2="195" stroke="var(--text-secondary)" strokeWidth="1"/>
              {[1,10,100,1000].map(v => (
                <g key={v}>
                  <line x1="320" y1={yLog(v)} x2="545" y2={yLog(v)} stroke="var(--text-secondary)" strokeWidth="0.5" strokeDasharray="3,3"/>
                  <text x="315" y={yLog(v)+4} textAnchor="end" fontSize="8" fill="var(--text-secondary)">{v}</text>
                </g>
              ))}
              {anos.map(i => (
                <text key={i} x={320 + i * 37 + 37} y="206" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{i}</text>
              ))}
              {/* linha de dados (log) */}
              <polyline
                points={valores.map((v, i) => `${320 + 40 + i * 37},${yLog(v)}`).join(' ')}
                fill="none" stroke="#4a9eed" strokeWidth="2" strokeLinejoin="round"
              />
              {valores.map((v, i) => (
                <circle key={i} cx={320 + 40 + i * 37} cy={yLog(v)} r="4" fill="#4a9eed"/>
              ))}
            </svg>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
              Em escala linear, a curva exponencial torna-se quase vertical e os primeiros valores ficam ilegíveis.
              Em escala logarítmica, o mesmo conjunto de dados revela uma relação perfeitamente linear.
            </p>
          </div>

          <div style={S.note}>
            Regra prática: usar escala logarítmica sempre que a razão entre o valor máximo e o mínimo
            excede 100. Indicar <em>sempre</em> "escala log" no rótulo do eixo — nunca assumir que o leitor
            o vai deduzir.
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Escala</th>
                  <th style={S.th}>Quando usar</th>
                  <th style={S.th}>Quando evitar</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Linear', 'Comparações directas de magnitude; variação uniforme; audiências gerais.', 'Dados com múltiplas ordens de grandeza — oculta variação nos valores pequenos.'],
                  ['Logarítmica', 'Crescimento exponencial; dados que cobrem 2+ ordens de grandeza; taxas de variação.', 'Valores zero ou negativos (log indefinido); audiências não-técnicas sem explicação prévia.'],
                  ['Raiz quadrada', 'Alternativa suave ao log para distribuições muito assimétricas.', 'Raramente necessária na prática; menos intuitiva que log.'],
                ].map(([e, u, n]) => (
                  <tr key={e}>
                    <td style={{ ...S.td, fontWeight: 700, color }}>{e}</td>
                    <td style={S.td}>{u}</td>
                    <td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── SECTION 2 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>2. Escalas de Cor — Sequential, Diverging, Qualitative</h2>
          <p style={S.p}>
            A paleta de cores não é uma escolha estética — é uma escolha de codificação. Usar a paleta
            errada para o tipo de dados pode criar padrões falsos ou ocultar padrões reais.
            Existem três famílias fundamentais, cada uma adequada a um tipo de dado diferente.
          </p>
          <p style={S.p}>
            As paletas <strong>sequenciais</strong> codificam dados ordenados de baixo para alto usando
            uma progressão de luminância — quanto mais escuro (ou mais saturado), maior o valor.
            As paletas <strong>divergentes</strong> têm dois pólos cromáticos com um ponto neutro central,
            ideal para dados com zero natural (diferença, correlação). As paletas <strong>qualitativas</strong>
            usam matizes distintos para categorias sem ordem implícita.
          </p>

          {/* SVG: 3 filas de rectângulos */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              Os três tipos de paleta de cor
            </p>
            <svg viewBox="0 0 560 180" style={{ width: '100%', height: 'auto', display: 'block' }}>
              {/* Fila 1 — Sequencial */}
              <text x="0" y="22" fontSize="10" fontWeight="700" fill={color}>Sequencial</text>
              <text x="0" y="34" fontSize="8" fill="var(--text-secondary)">dados ordenados, baixo → alto</text>
              {seqColors.map((c, i) => (
                <rect key={i} x={120 + i * 54} y="12" width="50" height="28" rx="3" fill={c} stroke="var(--text-secondary)" strokeWidth="0.5"/>
              ))}

              {/* Fila 2 — Divergente */}
              <text x="0" y="82" fontSize="10" fontWeight="700" fill="#4a9eed">Divergente</text>
              <text x="0" y="94" fontSize="8" fill="var(--text-secondary)">dados com ponto neutro central</text>
              {divColors.map((c, i) => (
                <rect key={i} x={120 + i * 54} y="72" width="50" height="28" rx="3" fill={c} stroke="var(--text-secondary)" strokeWidth="0.5"/>
              ))}

              {/* Fila 3 — Qualitativa */}
              <text x="0" y="142" fontSize="10" fontWeight="700" fill="#4a9eed">Qualitativa</text>
              <text x="0" y="154" fontSize="8" fill="var(--text-secondary)">categorias sem ordem implícita</text>
              {qualColors.map((c, i) => (
                <rect key={i} x={120 + i * 54} y="132" width="50" height="28" rx="3" fill={c} stroke="var(--text-secondary)" strokeWidth="0.5"/>
              ))}
            </svg>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Tipo</th>
                  <th style={S.th}>Exemplos de paleta</th>
                  <th style={S.th}>Caso de uso típico</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Sequencial', 'Blues, Greens, Oranges, Viridis, Plasma', 'Heatmaps, choropleth maps de densidade, intensidade de actividade'],
                  ['Divergente', 'RdBu, coolwarm, RdYlGn, Spectral', 'Diferença face à média, correlações (−1 a +1), variação anual'],
                  ['Qualitativa', 'Set1, Tableau10, tab10, Dark2', 'Séries num line chart, categorias num bar chart, grupos num scatter'],
                ].map(([t, e, c]) => (
                  <tr key={t}>
                    <td style={{ ...S.td, fontWeight: 700, color }}>{t}</td>
                    <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{e}</td>
                    <td style={S.td}>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── SECTION 3 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>3. Teoria da Cor — HSL e Contraste</h2>
          <p style={S.p}>
            O modelo <strong>HSL</strong> — Hue, Saturation, Lightness — descreve a cor em três eixos
            perceptualmente intuitivos. O <em>Hue</em> (matiz) vai de 0° a 360° percorrendo o espectro
            visível: vermelho (0°), amarelo (60°), verde (120°), cião (180°), azul (240°), magenta (300°).
            A <em>Saturation</em> (saturação) vai de 0% (cinzento) a 100% (cor pura).
            A <em>Lightness</em> (luminosidade) vai de 0% (preto) a 100% (branco), com 50% a ser a cor
            mais vívida.
          </p>
          <p style={S.p}>
            O contraste entre texto e fundo é regulado pelas normas <strong>WCAG 2.1</strong>: o rácio
            mínimo é 4,5:1 para texto normal e 3:1 para texto grande (acima de 18pt ou 14pt negrito).
            Um rácio de 21:1 corresponde a preto sobre branco — o máximo possível.
          </p>

          {/* SVG: Roda de cores */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              Roda de cores — Hue 0° a 360° em 12 passos (HSL com S=80%, L=55%)
            </p>
            <svg viewBox="0 0 200 200" style={{ width: 200, height: 200, display: 'block', margin: '0 auto' }}>
              {hueCircles.map(({ cx, cy, fill, label }, i) => (
                <g key={i}>
                  <circle cx={cx} cy={cy} r={dotR} fill={fill}/>
                  <text
                    x={wheelCx + (wheelR + 22) * Math.cos((i / 12) * 2 * Math.PI - Math.PI / 2)}
                    y={wheelCy + (wheelR + 22) * Math.sin((i / 12) * 2 * Math.PI - Math.PI / 2) + 3}
                    textAnchor="middle" fontSize="7" fill="var(--text-secondary)"
                  >{label}</text>
                </g>
              ))}
              <circle cx={wheelCx} cy={wheelCy} r="28" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1"/>
              <text x={wheelCx} y={wheelCy - 4} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">HSL</text>
              <text x={wheelCx} y={wheelCy + 8} textAnchor="middle" fontSize="7" fill="var(--text-secondary)">Hue</text>
            </svg>
          </div>

          {/* SVG: exemplos de contraste */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              Exemplos de contraste — WCAG 2.1
            </p>
            <svg viewBox="0 0 560 110" style={{ width: '100%', height: 'auto', display: 'block' }}>
              {/* Bom contraste 1: preto sobre branco */}
              <rect x="10" y="10" width="120" height="42" rx="6" fill="#ffffff" stroke="#d1d5db" strokeWidth="1"/>
              <text x="70" y="29" textAnchor="middle" fontSize="11" fontWeight="700" fill="#111827">Texto preto</text>
              <text x="70" y="44" textAnchor="middle" fontSize="8" fill="#111827">fundo branco</text>
              <text x="70" y="64" textAnchor="middle" fontSize="8" fill={color} fontWeight="700">✓ Rácio 21:1</text>

              {/* Bom contraste 2: branco sobre verde */}
              <rect x="150" y="10" width="120" height="42" rx="6" fill={color}/>
              <text x="210" y="29" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">Texto branco</text>
              <text x="210" y="44" textAnchor="middle" fontSize="8" fill="#ffffff">fundo azul</text>
              <text x="210" y="64" textAnchor="middle" fontSize="8" fill={color} fontWeight="700">✓ Rácio 4,6:1</text>

              {/* Mau contraste 1: cinza claro sobre cinza */}
              <rect x="290" y="10" width="120" height="42" rx="6" fill="#d1d5db" stroke="#d1d5db" strokeWidth="1"/>
              <text x="350" y="29" textAnchor="middle" fontSize="11" fontWeight="700" fill="#9ca3af">Texto cinza</text>
              <text x="350" y="44" textAnchor="middle" fontSize="8" fill="#9ca3af">fundo cinza</text>
              <text x="350" y="64" textAnchor="middle" fontSize="8" fill="#4a9eed" fontWeight="700">✗ Rácio 1,6:1</text>

              {/* Mau contraste 2: amarelo sobre branco */}
              <rect x="430" y="10" width="120" height="42" rx="6" fill="#ffffff" stroke="#d1d5db" strokeWidth="1"/>
              <text x="490" y="29" textAnchor="middle" fontSize="11" fontWeight="700" fill="#7dd3fc">Texto azul-claro</text>
              <text x="490" y="44" textAnchor="middle" fontSize="8" fill="#7dd3fc">fundo branco</text>
              <text x="490" y="64" textAnchor="middle" fontSize="8" fill="#4a9eed" fontWeight="700">✗ Rácio 1,8:1</text>

              {/* Labels */}
              <text x="140" y="100" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">Bom Contraste</text>
              <text x="420" y="100" textAnchor="middle" fontSize="9" fill="#4a9eed" fontWeight="700">Mau Contraste</text>
              <line x1="280" y1="5" x2="280" y2="105" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3"/>
            </svg>
          </div>

          <div style={S.note}>
            Para verificar o contraste de qualquer combinação de cores, usar o <strong>WebAIM Contrast Checker</strong>
            (webaim.org/resources/contrastchecker) ou o Adobe Color. O Chrome DevTools também indica o rácio
            de contraste ao inspeccionar elementos de texto.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── SECTION 4 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>4. Daltonismo e Acessibilidade</h2>
          <p style={S.p}>
            Cerca de <strong>8% dos homens</strong> e 0,5% das mulheres têm alguma forma de daltonismo.
            A forma mais comum é a <strong>deuteranopia</strong> (também chamada "cegueira ao verde"),
            em que os cones sensíveis ao verde estão ausentes ou disfuncionais. O resultado é que
            vermelho e verde parecem ambos uma tonalidade acastanhada-amarelada indistinguível.
          </p>
          <p style={S.p}>
            A <strong>protanopia</strong> (cegueira ao vermelho) é menos comum mas igualmente problemática.
            A <strong>tritanopia</strong> (cegueira ao azul) é rara. A regra de ouro: nunca usar vermelho
            e verde como a <em>única</em> distinção entre dois elementos. Complementar sempre com forma,
            textura ou posição.
          </p>

          {/* SVG: barras verde/vermelho vs. azul/laranja + hachura */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              Gráfico de barras inacessível (esquerda) vs. acessível (direita)
            </p>
            <svg viewBox="0 0 560 210" style={{ width: '100%', height: 'auto', display: 'block' }}>
              <defs>
                <pattern id="hatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="6" stroke="#4a9eed" strokeWidth="2"/>
                </pattern>
              </defs>

              {/* Títulos */}
              <text x="140" y="14" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">✗ Inacessível</text>
              <text x="140" y="26" textAnchor="middle" fontSize="7.5" fill="var(--text-secondary)">azul claro vs. azul escuro — baixo contraste, difícil de distinguir</text>
              <text x="420" y="14" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>✓ Acessível</text>
              <text x="420" y="26" textAnchor="middle" fontSize="7.5" fill="var(--text-secondary)">azul/laranja + hachura — distinguível por todos</text>

              {/* Barras vermelhas/verdes — baseline em y=175 */}
              {[
                { label: 'Jan', a: 90, b: 60 },
                { label: 'Fev', a: 70, b: 110 },
                { label: 'Mar', a: 120, b: 80 },
                { label: 'Abr', a: 50, b: 95 },
              ].map(({ label, a, b }, i) => (
                <g key={label}>
                  <rect x={30 + i * 60} y={175 - a} width="22" height={a} fill="#60a5fa" rx="2"/>
                  <rect x={54 + i * 60} y={175 - b} width="22" height={b} fill="#3b82f6" rx="2"/>
                  <text x={52 + i * 60} y="188" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{label}</text>
                </g>
              ))}
              <line x1="22" y1="175" x2="270" y2="175" stroke="var(--text-secondary)" strokeWidth="1"/>

              {/* Barras azul/laranja + hachura */}
              {[
                { label: 'Jan', a: 90, b: 60 },
                { label: 'Fev', a: 70, b: 110 },
                { label: 'Mar', a: 120, b: 80 },
                { label: 'Abr', a: 50, b: 95 },
              ].map(({ label, a, b }, i) => (
                <g key={label}>
                  <rect x={305 + i * 60} y={175 - a} width="22" height={a} fill="#4a9eed" rx="2"/>
                  <rect x={329 + i * 60} y={175 - b} width="22" height={b} fill="url(#hatch)" stroke="#4a9eed" strokeWidth="1" rx="2"/>
                  <text x={327 + i * 60} y="188" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{label}</text>
                </g>
              ))}
              <line x1="297" y1="175" x2="545" y2="175" stroke="var(--text-secondary)" strokeWidth="1"/>

              {/* Legendas — abaixo das labels de eixo */}
              <rect x="30" y="196" width="10" height="8" fill="#60a5fa" rx="1"/>
              <text x="44" y="204" fontSize="8" fill="var(--text-secondary)">Série A</text>
              <rect x="90" y="196" width="10" height="8" fill="#3b82f6" rx="1"/>
              <text x="104" y="204" fontSize="8" fill="var(--text-secondary)">Série B</text>

              <rect x="305" y="196" width="10" height="8" fill="#4a9eed" rx="1"/>
              <text x="319" y="204" fontSize="8" fill="var(--text-secondary)">Série A</text>
              <rect x="365" y="196" width="10" height="8" fill="url(#hatch)" stroke="#4a9eed" strokeWidth="1" rx="1"/>
              <text x="379" y="204" fontSize="8" fill="var(--text-secondary)">Série B (hachura)</text>
            </svg>
          </div>

          <div style={S.note}>
            Ferramentas para testar daltonismo: <strong>Coblis</strong> (color-blindness.com/coblis),
            Chrome DevTools → Rendering → "Emulate vision deficiency", Adobe Color → Accessibility.
            A paleta de <strong>Wong (2011)</strong> é uma das mais usadas por ser segura para
            todos os tipos de daltonismo com até 8 categorias.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── SECTION 5 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>5. Escalas de Tamanho e Área</h2>
          <p style={S.p}>
            Um dos erros mais comuns em bubble charts é mapear o <em>valor</em> ao <strong>raio</strong>
            da bolha. O problema: a área visual cresce com o quadrado do raio. Se o valor duplica e o raio
            duplica, a área quadruplica — o leitor percepciona erroneamente uma diferença quatro vezes
            maior do que a real.
          </p>
          <p style={S.p}>
            A solução correcta é mapear o valor à <strong>área</strong> da bolha e derivar o raio a partir
            da área: <code style={{ background: 'var(--bg-secondary)', padding: '0.1rem 0.4rem', borderRadius: 4, fontSize: '0.9rem', fontFamily: 'monospace' }}>r = Math.sqrt(valor / Math.PI)</code>.
            Desta forma, uma bolha com valor 400 tem exactamente quatro vezes a área de uma bolha com valor
            100 — e o leitor percepciona correctamente a proporção.
          </p>

          {/* SVG: bolhas erradas vs. correctas */}
          <div style={S.diagram}>
            <svg viewBox="0 0 560 160" style={{ width: '100%', height: 'auto', display: 'block' }}>
              {/* Versão errada */}
              <text x="140" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">✗ Errado — raio proporcional ao valor</text>
              {[
                { v: 100, r: 10, cx: 55 },
                { v: 200, r: 20, cx: 120 },
                { v: 400, r: 40, cx: 220 },
              ].map(({ v, r, cx }) => (
                <g key={v}>
                  <circle cx={cx} cy={90} r={r} fill="#4a9eed" opacity="0.7"/>
                  <text x={cx} y={90 + r + 12} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{v}</text>
                </g>
              ))}
              <text x="140" y="158" textAnchor="middle" fontSize="8" fill="#4a9eed">400 parece 16× maior que 100 (é apenas 4×)</text>

              {/* Divisória */}
              <line x1="280" y1="10" x2="280" y2="150" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3"/>

              {/* Versão correcta */}
              <text x="420" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>✓ Correcto — área proporcional ao valor</text>
              {[
                { v: 100, r: Math.sqrt(100 / Math.PI), cx: 320 },
                { v: 200, r: Math.sqrt(200 / Math.PI), cx: 390 },
                { v: 400, r: Math.sqrt(400 / Math.PI), cx: 475 },
              ].map(({ v, r, cx }) => (
                <g key={v}>
                  <circle cx={cx} cy={90} r={r} fill={color} opacity="0.7"/>
                  <text x={cx} y={90 + r + 12} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{v}</text>
                </g>
              ))}
              <text x="420" y="158" textAnchor="middle" fontSize="8" fill={color}>400 tem exactamente 4× a área de 100</text>
            </svg>
          </div>

        </div>

        <hr style={S.divider} />

        {/* ── SECTION 6 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>6. Escalas Temporais</h2>
          <p style={S.p}>
            A granularidade temporal deve ser escolhida de acordo com o padrão que se quer revelar.
            Dados diários mostram flutuações de curto prazo mas podem criar ruído excessivo.
            Dados semanais suavizam o ciclo semanal (ex: tráfego web baixo aos fins-de-semana).
            Dados mensais revelam sazonalidade. Dados anuais mostram tendências de longo prazo.
          </p>
          <p style={S.p}>
            É também importante distinguir entre <strong>ano civil</strong> (Janeiro–Dezembro),
            <strong>ano fiscal</strong> (pode começar em Outubro, como nos EUA federais, ou Julho,
            como em muitas empresas portuguesas) e <strong>ano académico</strong> (Setembro–Junho).
            Usar o calendário errado pode tornar invisíveis padrões sazonais óbvios.
          </p>

          {/* SVG: Calendar heatmap */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              Calendar heatmap — estilo GitHub Contributions (7 dias × 12 semanas)
            </p>
            <svg viewBox="0 0 500 148" style={{ width: '100%', height: 'auto', display: 'block' }}>
              {/* Labels dias da semana */}
              {['S','T','Q','Q','S','S','D'].map((d, i) => (
                <text key={i} x="10" y={16 + i * (cellH + gap)} fontSize="7" fill="var(--text-secondary)" textAnchor="middle">{d}</text>
              ))}
              {/* Células */}
              {Array.from({ length: weeks }, (_, w) =>
                Array.from({ length: days }, (_, d) => {
                  const idx = w * days + d;
                  return (
                    <rect
                      key={idx}
                      x={24 + w * (cellW + gap)}
                      y={4 + d * (cellH + gap)}
                      width={cellW}
                      height={cellH}
                      rx="2"
                      fill={heatColors[intensities[idx]]}
                    />
                  );
                })
              )}
              {/* Legenda — abaixo do grid (grid termina em y≈116) */}
              <text x="24" y="140" fontSize="7" fill="var(--text-secondary)">Menos</text>
              {heatColors.map((c, i) => (
                <rect key={i} x={60 + i * 18} y="130" width="14" height="10" rx="2" fill={c}/>
              ))}
              <text x="156" y="140" fontSize="7" fill="var(--text-secondary)">Mais actividade</text>
            </svg>
          </div>

          <div style={S.note}>
            Em visualizações de séries temporais, o eixo X deve sempre mostrar o tempo da esquerda
            para a direita em ordem cronológica. Evitar omitir intervalos sem dados — usar um marcador
            explícito de "sem dados" em vez de ligar pontos sobre um intervalo ausente.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── SECTION 7 ── */}
        <div style={S.section}>
          <h2 style={S.h2}>7. Projecções Cartográficas e Mapas</h2>
          <p style={S.p}>
            Uma projecção cartográfica é uma transformação matemática que converte a superfície
            esférica da Terra num plano bidimensional. Nenhuma projecção consegue preservar
            simultaneamente área, forma, distância e direcção — há sempre uma concessão.
          </p>
          <h3 style={S.h3}>Projecções mais comuns</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Projecção</th>
                  <th style={S.th}>Preserva</th>
                  <th style={S.th}>Distorce</th>
                  <th style={S.th}>Uso típico</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mercator', 'Ângulos (conforme)', 'Área — Gronelândia parece maior que África', 'Navegação, mapas web (Google Maps, OSM)'],
                  ['Equal-Area (Albers, Mollweide)', 'Área', 'Forma (especialmente nas extremidades)', 'Choropleth maps, densidade populacional'],
                  ['Azimuthal Equidistant', 'Distâncias a partir do centro', 'Forma e área fora do centro', 'Mapas centrados num ponto (ex: polo norte)'],
                  ['Robinson', 'Compromisso visual equilibrado', 'Área e forma em menor grau', 'Mapas-múndi de uso geral, atlas'],
                ].map(([p, pr, d, u]) => (
                  <tr key={p}>
                    <td style={{ ...S.td, fontWeight: 700, color }}>{p}</td>
                    <td style={S.td}>{pr}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{d}</td>
                    <td style={{ ...S.td, fontSize: '0.85rem' }}>{u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}>
            Para <strong>choropleth maps</strong> (mapas coropléticos) — em que a cor de cada região
            codifica um valor — é essencial usar uma projecção de área igual. Caso contrário, regiões
            grandes (mas com baixa densidade) dominam visualmente, distorcendo a leitura.
          </p>

          {/* SVG: choropleth como bar chart horizontal ordenado */}
          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              Choropleth — Intensidade por Distrito (Portugal Continental)
            </p>
            <svg viewBox="0 0 560 310" style={{ width: '100%', height: 'auto', display: 'block' }}>
              <text x="280" y="14" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Paleta sequencial laranja — mais escuro = maior intensidade</text>
              {distritos.map(({ nome, v }, i) => {
                const y = 22 + i * 17;
                const bw = v * 340;
                return (
                  <g key={nome}>
                    <text x="112" y={y + 11} textAnchor="end" fontSize="9" fill="var(--text-secondary)">{nome}</text>
                    <rect x="118" y={y} width={bw} height="13" rx="3" fill={distColor(v)} />
                    <text x={118 + bw + 5} y={y + 10} fontSize="9" fill="var(--text-secondary)">{Math.round(v * 100)}%</text>
                  </g>
                );
              })}
              {/* Escala de cores */}
              <defs>
                <linearGradient id="cg" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="rgba(74,158,237,0.15)" />
                  <stop offset="100%" stopColor="rgba(74,158,237,1)" />
                </linearGradient>
              </defs>
              <rect x="118" y="294" width="200" height="8" rx="3" fill="url(#cg)" />
              <text x="118" y="308" fontSize="8" fill="var(--text-secondary)">Baixo</text>
              <text x="318" y="308" textAnchor="end" fontSize="8" fill="var(--text-secondary)">Alto</text>
            </svg>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0, lineHeight: 1.6 }}>
              Em mapas reais, esta mesma escala de cor é aplicada a cada região geográfica. Usar projecção de área igual (Albers ou Lambert).
            </p>
          </div>

          <div style={S.note}>
            Em Portugal e na Europa, a projecção <strong>ETRS89 / PT-TM06</strong> é o sistema de referência
            oficial para cartografia nacional. Para visualizações web, a biblioteca D3.js oferece mais de
            90 projecções através do módulo <code style={{ fontFamily: 'monospace', fontSize: '0.85em' }}>d3-geo-projection</code>.
          </div>
        </div>
</div>
    </div>
  );
}
