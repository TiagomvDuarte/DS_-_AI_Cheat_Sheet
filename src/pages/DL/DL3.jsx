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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

// ---- Diagram: SGD vs Momentum zig-zag path on an elongated bowl ----
const SGDMomentumPath = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Trajectórias num vale alongado: SGD vs SGD+Momentum</p>
    <svg viewBox="0 0 540 260" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <radialGradient id="bowl" cx="50%" cy="50%" r="75%">
          <stop offset="0%" stopColor="rgba(249,115,22,0.10)" />
          <stop offset="60%" stopColor="rgba(249,115,22,0.10)" />
          <stop offset="100%" stopColor="rgba(249,115,22,0.10)" />
        </radialGradient>
        <marker id="arrSGD" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
        <marker id="arrMom" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
      </defs>

      {[1, 0.78, 0.56, 0.36, 0.2].map((s, i) => (
        <ellipse key={i} cx="270" cy="140" rx={240 * s} ry={70 * s}
          fill={i === 4 ? 'url(#bowl)' : 'none'}
          stroke="var(--text-secondary)" strokeWidth="1" opacity={0.6} />
      ))}
      <circle cx="270" cy="140" r="4" fill={color} />
      <text x="270" y="125" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">mínimo</text>

      <polyline
        points="60,40 120,210 90,75 145,180 125,95 165,160 150,110 175,150 165,120 185,142 178,128 195,138"
        fill="none" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrSGD)" />
      <text x="60" y="30" fill="#f97316" fontSize="11" fontWeight="700">SGD simples</text>

      <path d="M 380,40 C 360,90 410,130 350,150 C 320,162 330,148 300,148 C 285,148 280,144 273,142"
        fill="none" stroke="#f97316" strokeWidth="2.5" markerEnd="url(#arrMom)" />
      <text x="430" y="30" fill="#f97316" fontSize="11" fontWeight="700">SGD + Momentum</text>

      <text x="270" y="250" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">
        contornos = curvas de nível da função de perda (vale alongado: curvatura alta numa direcção, baixa noutra)
      </text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      No vale alongado, o gradiente aponta quase perpendicularmente às paredes íngremes — por isso o SGD simples
      oscila em zig-zag de parede a parede, avançando muito devagar na direcção do mínimo. O Momentum acumula a
      componente do gradiente que é consistente entre passos (ao longo do vale) e cancela a componente que oscila
      (perpendicular às paredes), produzindo uma trajectória muito mais directa.
    </p>
  </div>
);

// ---- Diagram: SGD vs Momentum, theta over 4 steps ----
const SGDMomentumStepsChart = () => {
  const grads = [4, -3, 4, -3];
  const alpha = 0.1, beta = 0.9;

  const thetaSGD = [0];
  let t = 0;
  grads.forEach((g) => { t = t - alpha * g; thetaSGD.push(t); });

  const thetaMom = [0];
  const vs = [];
  let theta = 0, v = 0;
  grads.forEach((g) => { v = beta * v - alpha * g; theta = theta + v; vs.push(v); thetaMom.push(theta); });

  const W = 540, H = 240, padL = 50, padB = 30, padT = 20, padR = 130;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const yMin = Math.min(...thetaSGD, ...thetaMom) - 0.05;
  const yMax = 0.05;

  const toX = (i) => padL + (i / 4) * plotW;
  const toY = (val) => padT + ((yMax - val) / (yMax - yMin)) * plotH;

  const toPath = (data) => data.map((val, i) => `${i === 0 ? 'M' : 'L'} ${toX(i).toFixed(1)},${toY(val).toFixed(1)}`).join(' ');

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
        Evolução de <InlineMath math="\theta" /> ao longo de 4 passos: SGD vs Momentum
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%', height: 'auto' }}>
        <line x1={padL} y1={padT} x2={padL} y2={H - padB} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={padL} y1={toY(0)} x2={W - padR} y2={toY(0)} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,3" />
        <text x={padL - 8} y={toY(0) + 4} textAnchor="end" fill="var(--text-secondary)" fontSize="9">0</text>
        <text x={padL - 8} y={toY(yMin) + 4} textAnchor="end" fill="var(--text-secondary)" fontSize="9">{yMin.toFixed(2)}</text>
        <text x={14} y={(padT + H - padB) / 2} textAnchor="middle" fill="var(--text-secondary)" fontSize="10"
          transform={`rotate(-90 14 ${(padT + H - padB) / 2})`}>valor de θ</text>
        <text x={(padL + W - padR) / 2} y={H - 6} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">passo →</text>

        {[0, 1, 2, 3, 4].map((i) => (
          <text key={i} x={toX(i)} y={H - padB + 14} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">{i}</text>
        ))}

        {grads.map((g, i) => (
          <text key={i} x={(toX(i) + toX(i + 1)) / 2} y={padT - 6} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">
            ∇L={g > 0 ? `+${g}` : g}
          </text>
        ))}

        <path d={toPath(thetaSGD)} fill="none" stroke="#f97316" strokeWidth="2" />
        <path d={toPath(thetaMom)} fill="none" stroke="#f97316" strokeWidth="2.5" />

        {thetaSGD.map((val, i) => (
          <circle key={`sgd-${i}`} cx={toX(i)} cy={toY(val)} r="3" fill="#f97316" />
        ))}
        {thetaMom.map((val, i) => (
          <circle key={`mom-${i}`} cx={toX(i)} cy={toY(val)} r="3" fill="#f97316" />
        ))}

        <text x={toX(4) + 8} y={toY(thetaSGD[4]) + 3} fill="#f97316" fontSize="10" fontWeight="700">
          SGD: θ≈{thetaSGD[4].toFixed(2)}
        </text>
        <text x={toX(4) + 8} y={toY(thetaMom[4]) + 3} fill="#f97316" fontSize="10" fontWeight="700">
          Momentum: θ≈{thetaMom[4].toFixed(2)}
        </text>
      </svg>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Com <InlineMath math="\nabla L = [+4, -3, +4, -3]" />, <InlineMath math="\alpha = 0.1" /> e{' '}
        <InlineMath math="\beta = 0.9" />, partindo de <InlineMath math="\theta_0 = 0" /> e{' '}
        <InlineMath math="v_0 = 0" />: o SGD simples ({thetaSGD.map((v) => v.toFixed(2)).join(' → ')}) fica
        praticamente parado perto de <InlineMath math="\theta \approx -0.1/-0.2" />, porque os passos +4 e −3
        quase se cancelam a cada par. O Momentum ({thetaMom.map((v) => v.toFixed(3)).join(' → ')}) acumula um
        deslocamento líquido consistente porque a "memória" da velocidade <InlineMath math="v" /> preserva a
        tendência média entre passos.
      </p>

      <div style={{ overflowX: 'auto', marginTop: '0.75rem' }}>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Passo</th>
              <th style={S.th}>∇L</th>
              <th style={S.th}>SGD: θ ← θ − α·∇L</th>
              <th style={S.th}>velocity: v ← βv − α∇L</th>
              <th style={S.th}>Momentum: θ ← θ + v</th>
            </tr>
          </thead>
          <tbody>
            {grads.map((g, i) => {
              const ag = alpha * g;
              const sign = ag >= 0 ? '−' : '+';
              const prevV = i === 0 ? 0 : vs[i - 1];
              return (
                <tr key={i}>
                  <td style={S.td}><strong>{i + 1}</strong></td>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>{g > 0 ? `+${g}` : g}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>
                    {thetaSGD[i].toFixed(2)} {sign} {Math.abs(ag).toFixed(2)} = {thetaSGD[i + 1].toFixed(2)}
                  </td>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>
                    v = {beta}·{prevV.toFixed(3)} {sign} {Math.abs(ag).toFixed(2)} = {vs[i].toFixed(3)}
                  </td>
                  <td style={{ ...S.td, fontFamily: 'monospace', color }}>
                    θ = {thetaMom[i].toFixed(3)} + ({vs[i].toFixed(3)}) = {thetaMom[i + 1].toFixed(3)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ---- Diagram: LR schedules over training steps ----
const LRSchedulesDiagram = () => {
  const W = 540, H = 200, padL = 50, padB = 30, padT = 20, padR = 20;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const steps = 100;

  const cosine = Array.from({ length: steps + 1 }, (_, i) => {
    const t = i / steps;
    return 0.5 * (1 + Math.cos(Math.PI * t));
  });
  const warmupCosine = Array.from({ length: steps + 1 }, (_, i) => {
    const t = i / steps;
    if (t < 0.1) return t / 0.1;
    const t2 = (t - 0.1) / 0.9;
    return 0.5 * (1 + Math.cos(Math.PI * t2));
  });
  const oneCycle = Array.from({ length: steps + 1 }, (_, i) => {
    const t = i / steps;
    if (t < 0.4) return t / 0.4;
    const t2 = (t - 0.4) / 0.6;
    return 1 - 0.97 * t2;
  });
  const stepDecay = Array.from({ length: steps + 1 }, (_, i) => {
    const t = i / steps;
    if (t < 0.33) return 1;
    if (t < 0.66) return 0.4;
    return 0.15;
  });

  const toPath = (data) => data.map((v, i) => {
    const x = padL + (i / steps) * plotW;
    const y = padT + (1 - v) * plotH;
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  const series = [
    ['Cosine Annealing', cosine, '#f97316'],
    ['Warmup + Cosine', warmupCosine, '#f97316'],
    ['OneCycleLR', oneCycle, '#f97316'],
    ['Step Decay', stepDecay, '#f97316'],
  ];

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Learning Rate ao longo do treino — schedules comuns</p>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%', height: 'auto' }}>
        <line x1={padL} y1={padT} x2={padL} y2={H - padB} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={padL} y1={H - padB} x2={W - padR} y2={H - padB} stroke="var(--text-secondary)" strokeWidth="1" />
        <text x={padL - 8} y={padT + 4} textAnchor="end" fill="var(--text-secondary)" fontSize="9">lr_max</text>
        <text x={padL - 8} y={H - padB + 4} textAnchor="end" fill="var(--text-secondary)" fontSize="9">0</text>
        <text x={(padL + W - padR) / 2} y={H - 6} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">passos de treino →</text>

        {series.map(([label, data, c]) => (
          <path key={label} d={toPath(data)} fill="none" stroke={c} strokeWidth="2.2" />
        ))}
      </svg>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.4rem', marginTop: '0.75rem', textAlign: 'left' }}>
        {series.map(([label, , c]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <span style={{ width: 18, height: 3, background: c, display: 'inline-block', borderRadius: 2 }} />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

// ---- Diagram: Loss landscape with saddle, sharp/flat minima ----
const LossLandscapeDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Anatomia de uma superfície de perda (corte 1D)</p>
    <svg viewBox="0 0 560 220" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="surfFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(249,115,22,0.10)" />
          <stop offset="100%" stopColor="rgba(249,115,22,0.10)" />
        </linearGradient>
      </defs>
      <path d="M 10,40
               C 50,120 80,160 120,165
               C 150,168 165,120 180,118
               C 195,116 205,160 220,165
               C 235,170 245,168 260,150
               C 290,110 320,170 360,178
               C 410,188 460,182 500,150
               C 520,135 535,110 550,60
               L 550,210 L 10,210 Z" fill="url(#surfFill)" />
      <path d="M 10,40
               C 50,120 80,160 120,165
               C 150,168 165,120 180,118
               C 195,116 205,160 220,165
               C 235,170 245,168 260,150
               C 290,110 320,170 360,178
               C 410,188 460,182 500,150
               C 520,135 535,110 550,60"
        fill="none" stroke={color} strokeWidth="2.5" />

      <circle cx="120" cy="165" r="4" fill="#f59e0b" />
      <text x="120" y="195" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">mínimo local</text>

      <circle cx="180" cy="118" r="4" fill="#f97316" />
      <text x="180" y="100" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">saddle point</text>

      <circle cx="220" cy="165" r="4" fill="#f97316" />
      <text x="220" y="195" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">mínimo agudo</text>

      <circle cx="380" cy="183" r="4" fill="#f97316" />
      <text x="380" y="206" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">mínimo plano (global)</text>

      <text x="280" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Loss</text>
      <text x="540" y="218" textAnchor="end" fill="var(--text-secondary)" fontSize="9">espaço de parâmetros θ</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      O <strong>saddle point</strong> tem gradiente nulo mas é mínimo numa direcção e máximo noutra — em
      altíssima dimensão estes pontos são muito mais frequentes que mínimos verdadeiros, e o ruído do SGD
      ajuda a escapar deles. O <strong>mínimo agudo</strong> tem o mesmo valor de loss que o mínimo plano,
      mas uma pequena perturbação dos pesos (ex. dados de teste ligeiramente diferentes) faz a perda subir
      bruscamente. O <strong>mínimo plano</strong> mantém a perda baixa numa vizinhança larga — por isso
      tende a generalizar melhor.
    </p>
  </div>
);

export default function DL3() {
  return (
    <div style={S.page}>
      <Link to="/dl" style={S.back}><ArrowLeft size={16} /> Voltar a Deep Learning</Link>

      <div style={S.tag}>Module 03</div>
      <h1 style={S.h1}>Optimização &amp; Loss Landscapes</h1>
      <p style={S.lead}>
        Treinar uma rede neuronal é, no fundo, resolver um problema de optimização não-convexo num espaço
        com milhões ou biliões de dimensões. Não há fórmula fechada — apenas algoritmos iterativos que dão
        pequenos passos na direcção que reduz a perda. Neste módulo construímos intuição sobre como esses
        passos são dados (SGD, Momentum, Adam, AdamW), como a "velocidade" desses passos deve mudar ao longo
        do treino (learning rate schedules), e como é, geometricamente, a paisagem que estamos a navegar
        (mínimos planos vs agudos, saddle points, generalização).
      </p>

      {/* === SECTION 1 === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Gradient Descent e SGD com Momentum</h2>
        <p style={S.p}>
          O algoritmo mais simples de optimização é o <strong>Gradient Descent</strong>: em cada passo,
          actualizamos os parâmetros movendo-os na direcção oposta ao gradiente da função de perda, escalado
          por uma <strong>learning rate</strong> <InlineMath math="\alpha" />.
        </p>
        <div style={S.math}>
          <BlockMath math={`\\theta_{t+1} = \\theta_t - \\alpha \\, \\nabla_\\theta L(\\theta_t)`} />
        </div>
        <p style={S.p}>
          Na prática, calcular o gradiente sobre todo o dataset (Batch GD) é demasiado lento. Em vez disso
          usa-se um sub-conjunto — um <strong>mini-batch</strong> — em cada passo. Isto introduz ruído no
          gradiente, mas esse ruído acaba por funcionar como regularizador: impede o optimizador de se fixar
          rigidamente em mínimos muito agudos.
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Variante</th><th style={S.th}>Gradiente calculado sobre</th><th style={S.th}>Características</th></tr>
            </thead>
            <tbody>
              {[
                ['Batch GD', 'Todo o dataset', 'Gradiente exacto e estável, mas extremamente lento e exige todos os dados em memória'],
                ['Mini-batch SGD', '32 a 512 exemplos', 'Equilíbrio entre estabilidade e velocidade — o standard prático'],
                ['Stochastic GD (puro)', '1 exemplo de cada vez', 'Muito ruidoso; útil em teoria mas raramente usado isolado'],
              ].map(([v, g, c]) => (
                <tr key={v}><td style={S.td}><strong>{v}</strong></td><td style={S.td}>{g}</td><td style={S.td}>{c}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>O problema do "vale alongado"</h3>
        <p style={S.p}>
          Em muitas superfícies de perda reais, a curvatura é muito diferente consoante a direcção: numa
          direcção a perda sobe abruptamente (paredes íngremes), na outra sobe muito lentamente (vale comprido
          e estreito). O SGD simples segue o gradiente local, que aponta quase perpendicular ao eixo do vale —
          resultando numa trajectória em zig-zag que avança muito devagar ao longo do vale.
        </p>

        <h3 style={S.h3}>Momentum — adicionar inércia</h3>
        <p style={S.p}>
          O <strong>Momentum</strong> resolve isto mantendo uma "velocidade" <InlineMath math="v" /> — uma
          média móvel exponencial dos gradientes passados. Em vez de seguir cegamente o gradiente actual, o
          parâmetro move-se na direcção da velocidade acumulada:
        </p>
        <div style={S.math}>
          <BlockMath math={`v_{t+1} = \\beta \\, v_t - \\alpha \\, \\nabla_\\theta L(\\theta_t)`} />
          <BlockMath math={`\\theta_{t+1} = \\theta_t + v_{t+1}`} />
        </div>
        <p style={S.p}>
          O hiperparâmetro <InlineMath math="\beta" /> (tipicamente <InlineMath math="0.9" />) controla
          quanto da velocidade anterior é preservada. Componentes do gradiente que mudam de sinal a cada passo
          (as oscilações perpendiculares às paredes do vale) tendem a cancelar-se na média; componentes
          consistentes (ao longo do vale) acumulam-se e aceleram o movimento.
        </p>

        <SGDMomentumPath />

        <h3 style={S.h3}>Exemplo numérico: SGD vs Momentum em 4 passos</h3>
        <p style={S.p}>
          Considere um único parâmetro <InlineMath math="\theta" /> com gradientes observados
          (alternando de sinal, como acontece nas direcções "íngremes" do vale):
          <InlineMath math="\nabla L = [+4, -3, +4, -3]" />, com <InlineMath math="\alpha = 0.1" /> e{' '}
          <InlineMath math="\beta = 0.9" />, partindo de <InlineMath math="\theta_0 = 0" /> e{' '}
          <InlineMath math="v_0 = 0" />.
        </p>

        <SGDMomentumStepsChart />
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2 === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Optimizadores Adaptativos: RMSProp, Adam e AdamW</h2>
        <p style={S.p}>
          Momentum acelera, mas usa a <em>mesma</em> learning rate para todos os parâmetros. Numa rede
          profunda, diferentes pesos têm gradientes de magnitudes muito diferentes — alguns precisam de
          passos maiores, outros de passos minúsculos. Os optimizadores <strong>adaptativos</strong> ajustam
          a learning rate <em>individualmente</em> para cada parâmetro, com base no histórico dos seus
          gradientes.
        </p>

        <h3 style={S.h3}>RMSProp — dar passos maiores onde o gradiente é pequeno</h3>
        <p style={S.p}>
          A ideia do RMSProp é simples: para cada parâmetro, manter uma <strong>média móvel exponencial</strong>{' '}
          do <em>quadrado</em> dos seus gradientes recentes, <InlineMath math="G" />. Esse valor mede o quão
          "ativo" (em magnitude) tem sido o gradiente desse parâmetro — e a learning rate efectiva é dividida
          por <InlineMath math="\sqrt{G}" />:
        </p>
        <div style={S.math}>
          <BlockMath math={`G_t = \\rho \\, G_{t-1} + (1-\\rho)(\\nabla_\\theta L_t)^2 \\qquad \\theta_{t+1} = \\theta_t - \\frac{\\alpha}{\\sqrt{G_t + \\epsilon}} \\, \\nabla_\\theta L_t`} />
        </div>
        <div style={S.note}>
          Intuição: se um parâmetro tem tido gradientes <strong>grandes</strong> recentemente,{' '}
          <InlineMath math="G" /> é grande, <InlineMath math="\sqrt{G}" /> é grande, e o passo
          efectivo (<InlineMath math="\alpha/\sqrt{G}" />) encolhe — evita overshoot. Se tem tido gradientes{' '}
          <strong>pequenos</strong>, <InlineMath math="G" /> é pequeno e o passo cresce — anda mais depressa
          numa direcção "estagnada". Como <InlineMath math="G" /> é uma <em>média móvel</em> (controlada por{' '}
          <InlineMath math="\rho" />, tipicamente <InlineMath math="0.9" />) em vez de uma soma que só cresce,
          o optimizador consegue "esquecer" gradientes antigos e voltar a acelerar se a situação mudar.
        </div>

        <h3 style={S.h3}>Adam — Momentum + RMSProp</h3>
        <p style={S.p}>
          O <strong>Adam</strong> (Adaptive Moment Estimation) combina as duas ideias que já vimos: a{' '}
          <em>direcção</em> do passo vem do Momentum (uma média móvel do gradiente, <InlineMath math="m" />),
          e a <em>escala</em> do passo vem do RMSProp (uma média móvel do gradiente ao quadrado,{' '}
          <InlineMath math="v" />).
        </p>
        <div style={S.math}>
          <BlockMath math={`m_t = \\beta_1 m_{t-1} + (1-\\beta_1)\\nabla_\\theta L_t \\qquad\\qquad v_t = \\beta_2 v_{t-1} + (1-\\beta_2)(\\nabla_\\theta L_t)^2`} />
          <BlockMath math={`\\theta_{t+1} = \\theta_t - \\alpha \\, \\frac{m_t}{\\sqrt{v_t} + \\epsilon}`} />
        </div>
        <div style={S.note}>
          Intuição: <InlineMath math="m" /> diz <strong>para onde</strong> ir (suavizando o ruído entre
          passos, tal como o Momentum), e <InlineMath math="v" /> diz <strong>quão grande</strong> deve ser o
          passo em cada direcção (encolhendo-o onde o gradiente costuma ser grande, tal como o RMSProp). O
          resultado é um passo final <InlineMath math="m/\sqrt{v}" /> que aponta na direcção suavizada mas
          com magnitude normalizada — cada parâmetro "anda" a um ritmo adaptado à sua própria escala de
          gradientes.
        </div>
        <p style={S.p}>
          No início do treino, <InlineMath math="m" /> e <InlineMath math="v" /> estão inicializados a zero e
          são fortemente <em>enviesados para zero</em> — sobretudo nos primeiros passos. O Adam corrige isto
          com <strong>bias correction</strong>, dividindo por <InlineMath math="(1-\beta^t)" />, que é
          próximo de zero quando <InlineMath math="t" /> é pequeno (amplificando a correcção) e tende para 1
          à medida que <InlineMath math="t" /> cresce (correcção desaparece):
        </p>
        <div style={S.math}>
          <BlockMath math={`\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t} \\qquad\\qquad \\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}`} />
          <BlockMath math={`\\theta_{t+1} = \\theta_t - \\alpha \\, \\frac{\\hat{m}_t}{\\sqrt{\\hat{v}_t} + \\epsilon}`} />
        </div>

        <h3 style={S.h3}>Exemplo numérico: bias correction no passo 1</h3>
        <p style={S.p}>
          Suponha <InlineMath math="\beta_1 = 0.9" />, <InlineMath math="\beta_2 = 0.999" /> e que o primeiro
          gradiente observado é <InlineMath math="\nabla L_1 = 2.0" />.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Quantidade</th><th style={S.th}>Sem correcção</th><th style={S.th}>Com bias correction</th><th style={S.th}>Efeito</th></tr>
            </thead>
            <tbody>
              {[
                ['m₁ = 0.9·0 + 0.1·2.0', '0.20', 'm̂₁ = 0.20 / (1−0.9¹) = 0.20/0.1 = 2.00', 'recupera o valor real do gradiente'],
                ['v₁ = 0.999·0 + 0.001·2.0²', '0.004', 'v̂₁ = 0.004 / (1−0.999¹) = 0.004/0.001 = 4.00', 'recupera o gradiente² real'],
              ].map(([q, no, c, e]) => (
                <tr key={q}><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.85rem' }}>{q}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{no}</td><td style={{ ...S.td, fontFamily: 'monospace', color }}>{c}</td><td style={S.td}>{e}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          Sem a correcção, <InlineMath math="m_1=0.20" /> e <InlineMath math="v_1=0.004" /> sub-estimam
          drasticamente o gradiente real (2.0), o que produziria um primeiro passo demasiado pequeno. Com a
          correcção, <InlineMath math="\hat{m}_1=2.00" /> e <InlineMath math="\hat{v}_1=4.00" /> reflectem o
          gradiente observado correctamente — o passo inicial tem a escala certa.
        </p>

        <h3 style={S.h3}>AdamW — desacoplar o weight decay</h3>
        <p style={S.p}>
          No Adam "clássico", a regularização L2 é adicionada directamente ao gradiente antes de entrar nas
          médias móveis <InlineMath math="m" /> e <InlineMath math="v" />. Isto faz com que o weight decay
          seja "engolido" pela normalização adaptativa — parâmetros com gradientes grandes recebem
          <em> menos</em> weight decay, o oposto do que seria desejável.
        </p>
        <p style={S.p}>
          O <strong>AdamW</strong> separa (desacopla) as duas coisas: o weight decay é aplicado directamente
          aos pesos, fora da actualização adaptativa:
        </p>
        <div style={S.math}>
          <BlockMath math={`\\theta_{t+1} = \\theta_t - \\alpha \\, \\frac{\\hat{m}_t}{\\sqrt{\\hat{v}_t}+\\epsilon} - \\alpha \\, \\lambda \\, \\theta_t`} />
        </div>
        <p style={S.p}>
          Esta separação torna o weight decay consistente entre parâmetros, independentemente da escala dos
          seus gradientes — e é a razão pela qual o AdamW se tornou o optimizador por defeito em quase todos
          os Transformers e LLMs modernos.
        </p>

        <h3 style={S.h3}>Comparação de comportamentos</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Optimizador</th><th style={S.th}>O que adapta</th><th style={S.th}>Comportamento típico</th><th style={S.th}>Quando usar</th></tr>
            </thead>
            <tbody>
              {[
                ['SGD', 'Nada — lr fixa global', 'Convergência lenta mas estável; minimiza melhor no fim', 'CNNs com schedules bem afinados'],
                ['SGD + Momentum', 'Direcção (inércia)', 'Acelera em vales, suaviza zig-zag', 'CNNs, treino longo, baseline forte'],
                ['RMSProp', 'Magnitude por parâmetro', 'Bom para gradientes não-estacionários (RNNs)', 'RNNs, problemas com escalas variáveis'],
                ['Adam', 'Direcção + magnitude', 'Convergência rápida, robusto a hiperparâmetros', 'Prototipagem rápida, GANs, modelos pequenos'],
                ['AdamW', 'Direcção + magnitude + weight decay desacoplado', 'Como Adam, mas regularização correcta', 'Transformers, LLMs — escolha por defeito hoje'],
              ].map(([o, a, b, w]) => (
                <tr key={o}><td style={S.td}><strong>{o}</strong></td><td style={S.td}>{a}</td><td style={S.td}>{b}</td><td style={S.td}>{w}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Valores por defeito do Adam/AdamW: <InlineMath math="\beta_1=0.9" />, <InlineMath math="\beta_2=0.999" />,{' '}
          <InlineMath math="\epsilon=10^{-8}" />. Para Transformers grandes, alguns trabalhos usam{' '}
          <InlineMath math="\beta_2=0.95" /> para tornar o optimizador mais reactivo a mudanças recentes do gradiente.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3 === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Learning Rate Schedules</h2>
        <p style={S.p}>
          A learning rate é, provavelmente, o hiperparâmetro mais importante de todos — e uma lr fixa raramente
          é óptima durante todo o treino. No início, queremos passos cautelosos (os pesos estão aleatórios e o
          gradiente pode ser instável); a meio, queremos explorar rapidamente; no fim, queremos passos pequenos
          para "afinar" e convergir para um mínimo estável.
        </p>

        <LRSchedulesDiagram />

        <h3 style={S.h3}>Warmup — porque é crítico em Transformers</h3>
        <p style={S.p}>
          No início do treino, os pesos são aleatórios e as estatísticas internas de Adam (
          <InlineMath math="m" /> e <InlineMath math="v" />) ainda não estabilizaram. Uma learning rate alta
          aplicada imediatamente pode produzir actualizações enormes e instáveis — levando a divergência logo
          nos primeiros passos. O <strong>warmup linear</strong> sobe a lr gradualmente de 0 até{' '}
          <InlineMath math="\alpha_{max}" /> ao longo dos primeiros 1-10% dos passos, dando tempo para que as
          estimativas de Adam estabilizem antes de dar passos grandes.
        </p>

        <h3 style={S.h3}>Cosine Annealing</h3>
        <p style={S.p}>
          Decai a learning rate seguindo uma curva de cosseno — suave, sem quebras abruptas, terminando perto
          de zero (ou de um <InlineMath math="\eta_{min}" /> pequeno):
        </p>
        <div style={S.math}>
          <BlockMath math={`\\alpha_t = \\eta_{min} + \\frac{1}{2}(\\alpha_{max} - \\eta_{min})\\left(1 + \\cos\\left(\\frac{t}{T}\\pi\\right)\\right)`} />
        </div>

        <h3 style={S.h3}>OneCycleLR</h3>
        <p style={S.p}>
          Sobe rapidamente até uma lr <em>muito mais alta</em> que o normal (fase de exploração agressiva),
          depois desce de forma ainda mais agressiva até quase zero (fase de convergência fina). Permite treinos
          bastante mais curtos — é a base da técnica "super-convergence".
        </p>

        <h3 style={S.h3}>Step Decay</h3>
        <p style={S.p}>
          A abordagem mais simples: reduz a lr por um factor fixo (ex. ÷10) a cada N épocas. Funciona bem em
          CNNs clássicas, mas as quebras abruptas podem causar saltos visíveis na curva de loss.
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Schedule</th><th style={S.th}>Forma</th><th style={S.th}>Quando usar</th></tr>
            </thead>
            <tbody>
              {[
                ['Step Decay', 'Patamares — quebra abrupta a cada N épocas', 'CNNs clássicas, treinos longos com checkpoints claros'],
                ['Cosine Annealing', 'Decaimento suave em cosseno até ~0', 'Padrão geral — quase sempre uma boa escolha'],
                ['Warmup + Cosine', 'Sobe linear, depois cosseno', 'Transformers e LLMs — praticamente obrigatório'],
                ['OneCycleLR', 'Sobe rápido a lr alta, desce mais agressivo', 'Treinos curtos, "super-convergence", datasets pequenos/médios'],
              ].map(([s, f, w]) => (
                <tr key={s}><td style={S.td}><strong>{s}</strong></td><td style={S.td}>{f}</td><td style={S.td}>{w}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={S.note}>
          Regra prática para escalar lr com batch size: <InlineMath math="\alpha \propto \text{batch\_size}" />{' '}
          (regra linear). Ao duplicar o batch size, duplica-se também a lr — mas combine sempre com warmup
          mais longo, para evitar instabilidade no arranque.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4 === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Loss Landscapes: Mínimos, Saddle Points e Generalização</h2>
        <p style={S.p}>
          A função de perda de uma rede neuronal vive num espaço com tantas dimensões quanto parâmetros —
          frequentemente milhões ou biliões. É impossível visualizar isto directamente, mas projecções 1D/2D
          (cortando o espaço ao longo de algumas direcções) revelam padrões geométricos importantes que
          ajudam a explicar porque alguns optimizadores funcionam melhor que outros.
        </p>

        <LossLandscapeDiagram />

        <h3 style={S.h3}>Mínimos locais vs. mínimo global</h3>
        <p style={S.p}>
          Um <strong>mínimo local</strong> é um ponto onde a perda é menor que em todos os pontos vizinhos,
          mas existe outro ponto algures no espaço com perda ainda menor (o <strong>mínimo global</strong>).
          Em redes profundas, há uma boa notícia: estudos empíricos mostram que, em alta dimensão, a maioria
          dos mínimos locais têm valores de perda muito próximos do global — "ficar preso" num mau mínimo
          local é, na prática, raro.
        </p>

        <h3 style={S.h3}>Saddle points — o verdadeiro obstáculo</h3>
        <p style={S.p}>
          Um <strong>saddle point</strong> (ponto de sela) tem gradiente zero, mas é um mínimo ao longo de
          algumas direcções e um máximo ao longo de outras — como o centro de uma sela de cavalo. Em alta
          dimensão, a probabilidade de <em>todas</em> as direcções serem simultaneamente "para cima" (mínimo
          verdadeiro) é exponencialmente pequena; por isso saddle points dominam numericamente sobre mínimos.
        </p>
        <p style={S.p}>
          A boa notícia: perto de um saddle point o gradiente é muito pequeno mas não exactamente zero, e o
          ruído do mini-batch SGD (mais o momentum, que mantém o movimento mesmo quando o gradiente
          momentaneamente desaparece) ajudam a "empurrar" o optimizador para fora do saddle, em vez de ficar
          preso indefinidamente.
        </p>

        <h3 style={S.h3}>Mínimos agudos (sharp) vs. mínimos planos (flat)</h3>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>Sharp minimum:</strong> a curvatura da perda é alta — uma pequena perturbação dos pesos
            causa um aumento grande na perda. <strong>Flat minimum:</strong> a curvatura é baixa — a perda
            permanece quase constante numa vizinhança larga à volta do mínimo.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Ambos podem ter exactamente o mesmo valor de perda de treino. A diferença aparece em{' '}
            <strong>generalização</strong>: a distribuição dos dados de teste é uma versão ligeiramente
            "deslocada" da distribuição de treino — equivalente a uma pequena perturbação no espaço de
            parâmetros. Num mínimo agudo, essa perturbação faz a perda de teste subir bruscamente
            (<em>generalization gap</em> grande). Num mínimo plano, a perda de teste mantém-se próxima da
            perda de treino.
          </p>
        </div>

        <h3 style={S.h3}>Batch size, ruído e o tipo de mínimo encontrado</h3>
        <p style={S.p}>
          O tamanho do batch influencia directamente quão "ruidoso" é o gradiente estimado, e isso influencia
          que tipo de mínimo o optimizador tende a encontrar:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Batch size</th><th style={S.th}>Ruído do gradiente</th><th style={S.th}>Tipo de mínimo encontrado</th><th style={S.th}>Generalização típica</th></tr>
            </thead>
            <tbody>
              {[
                ['Pequeno (32–128)', 'Alto', 'Tende para mínimos planos', 'Geralmente melhor'],
                ['Grande (2048+)', 'Baixo', 'Tende para mínimos agudos', 'Pior, salvo correcções (lr scaling, warmup, label smoothing)'],
              ].map(([b, n, m, g]) => (
                <tr key={b}><td style={S.td}><strong>{b}</strong></td><td style={S.td}>{n}</td><td style={S.td}>{m}</td><td style={S.td}>{g}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Esta é uma das razões pelas quais aumentar o batch size para acelerar o treino (mais paralelismo)
          não é "grátis": é necessário compensar com lr proporcionalmente maior e warmup mais longo, para
          tentar recuperar o efeito regularizador que se perde com menos ruído.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5 — DECISION GUIDE === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Guia Prático de Decisão</h2>
        <p style={S.p}>
          Não existe uma combinação universalmente óptima de optimizador + schedule — depende da arquitectura,
          do tamanho do dataset, e dos recursos computacionais disponíveis. A tabela seguinte resume escolhas
          típicas para cenários comuns:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Cenário</th><th style={S.th}>Optimizador</th><th style={S.th}>Schedule</th><th style={S.th}>Notas</th></tr>
            </thead>
            <tbody>
              {[
                ['Treinar um Transformer / LLM de raiz', 'AdamW (β₁=0.9, β₂=0.95–0.999)', 'Warmup linear (1–10%) + Cosine Annealing', 'Gradient clipping a max_norm=1.0 quase sempre necessário'],
                ['Fine-tuning de modelo pré-treinado', 'AdamW com lr baixa (1e-5 a 5e-5)', 'Warmup curto + decaimento linear ou cosseno', 'lr muito menor que no pré-treino para não "esquecer" o que já sabe'],
                ['CNN clássica (visão, dataset médio)', 'SGD + Momentum (β=0.9) ou AdamW', 'Step Decay ou Cosine Annealing', 'SGD+Momentum costuma generalizar ligeiramente melhor com tuning cuidadoso'],
                ['Treino rápido / poucos recursos', 'AdamW ou SGD+Momentum', 'OneCycleLR', '"Super-convergence": menos épocas para o mesmo desempenho'],
                ['Prototipagem / experimentação rápida', 'Adam (defaults)', 'lr constante ou cosseno simples', 'Robusto a hiperparâmetros mal afinados — bom para iterar depressa'],
                ['RNNs / sequências longas', 'RMSProp ou Adam', 'lr baixa e estável, clipping de gradiente', 'Gradientes não-estacionários beneficiam da adaptação por parâmetro'],
              ].map(([s, o, sch, n]) => (
                <tr key={s}><td style={S.td}><strong>{s}</strong></td><td style={S.td}>{o}</td><td style={S.td}>{sch}</td><td style={S.td}>{n}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SYNTHESIS === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Síntese do Módulo</h2>
        <p style={S.p}>
          Optimizar uma rede neuronal é navegar uma paisagem de perda extremamente complexa, usando apenas
          informação local (o gradiente). Momentum adiciona inércia para suavizar trajectórias em vales
          alongados; optimizadores adaptativos como Adam ajustam a escala do passo por parâmetro; schedules
          de learning rate adaptam essa escala ao longo do tempo, conciliando exploração inicial com
          convergência fina no final.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Pontos-chave a reter:</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li>Momentum acumula uma média móvel do gradiente — acelera em vales e suaviza zig-zags</li>
            <li>Adam combina momentum (1º momento) com escala adaptativa (2º momento), com bias correction crítico no início</li>
            <li>AdamW desacopla o weight decay da actualização adaptativa — escolha por defeito para Transformers</li>
            <li>Warmup é essencial em Transformers para estabilizar as estimativas iniciais de Adam</li>
            <li>Saddle points dominam em alta dimensão; o ruído do SGD ajuda a escapar deles</li>
            <li>Mínimos planos generalizam melhor que mínimos agudos — batch size pequeno e mais ruído tendem a favorecê-los</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
