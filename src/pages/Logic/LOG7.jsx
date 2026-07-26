import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Logic';

const C = '#4a9eed';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: C, border: `1.5px solid ${C}`, fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: C, borderLeft: `3px solid ${C}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  highlight: { background: `${C}15`, borderLeft: `3px solid ${C}`, padding: '0.85rem 1.1rem', borderRadius: '0 8px 8px 0', marginBottom: '1rem' },
  note: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', padding: '0.85rem 1.1rem', borderRadius: 8, marginBottom: '1rem' },
  p: { color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '0.85rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', overflowX: 'auto' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 6, padding: '0.75rem 1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '1rem', overflowX: 'auto', whiteSpace: 'pre' },
};

/* SVG 1: Kautz spectrum */
function SvgKautz() {
  const positions = [
    { pos: 1, label: 'Symbolic\nNeuro',    example: 'Prolog+NN',  color: '#4a9eed' },
    { pos: 2, label: 'Symbolic\n[Neuro]',  example: 'AlphaGo',   color: '#4a9eed' },
    { pos: 3, label: 'Neuro|\nSymbolic',   example: 'DeepProbLog',color: '#4a9eed' },
    { pos: 4, label: 'Neuro:\nSymbolic',   example: 'LNN (IBM)', color: C },
    { pos: 5, label: 'Neuro\n[Symbolic]',  example: 'NeSy nets',  color: '#4a9eed' },
    { pos: 6, label: 'Neuro→\nSymbolic',   example: 'GPT-4',     color: '#4a9eed' },
  ];
  const barW = 70, gap = 16, ox = 30, oy = 30;
  return (
    <svg viewBox="0 0 550 260" style={{ width: '100%', display: 'block' }}>
      <rect width="550" height="260" fill="var(--bg-secondary)" rx="8" />
      <text x="275" y="22" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="700">
        Espectro Kautz 2022 — Sistemas Neuro-Simbólicos
      </text>
      {/* Gradient bar background */}
      <defs>
        <linearGradient id="kspec" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#4a9eed" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <rect x={ox} y={oy + 10} width={(barW + gap) * 6 - gap} height="8" rx="4" fill="url(#kspec)" opacity="0.3" />
      <text x={ox} y={oy + 5} fill="#4a9eed" fontSize="9">← mais simbólico</text>
      <text x={ox + (barW + gap) * 6 - gap} y={oy + 5} textAnchor="end" fill="#4a9eed" fontSize="9">mais neural →</text>
      {positions.map((p, i) => {
        const x = ox + i * (barW + gap);
        const barH = 60 + i * 8;
        const yBar = oy + 30 + (110 - barH);
        return (
          <g key={p.pos}>
            <rect x={x} y={yBar} width={barW} height={barH} rx="5" fill={`${p.color}30`} stroke={p.color} strokeWidth="2" />
            <text x={x + barW / 2} y={yBar - 6} textAnchor="middle" fill={p.color} fontSize="8" fontWeight="700">
              {`P${p.pos}`}
            </text>
            {p.label.split('\n').map((line, li) => (
              <text key={li} x={x + barW / 2} y={yBar + barH + 14 + li * 12} textAnchor="middle" fill="#94a3b8" fontSize="8">{line}</text>
            ))}
            <rect x={x + 4} y={yBar + barH - 24} width={barW - 8} height="20" rx="3" fill="rgba(74,158,237,0.06)" />
            <text x={x + barW / 2} y={yBar + barH - 12} textAnchor="middle" dominantBaseline="middle" fill={p.color} fontSize="7.5">{p.example}</text>
          </g>
        );
      })}
      <text x="275" y="248" textAnchor="middle" fill="#475569" fontSize="10">
        Cada posição difere no modo como componentes neuronais e simbólicos interagem
      </text>
    </svg>
  );
}

/* SVG 2: LNN architecture */
function SvgLNN() {
  const inputs = [
    { id: 'A', label: 'Atom A', x: 60,  y: 60,  val: '0.9' },
    { id: 'B', label: 'Atom B', x: 60,  y: 130, val: '0.7' },
    { id: 'C', label: 'Atom C', x: 60,  y: 200, val: '0.4' },
  ];
  const mid = [
    { id: 'AND1', label: 'AND', x: 210, y: 95,  val: '0.6', color: '#4a9eed', note: 'max(0,a+b−1)' },
    { id: 'NOT1', label: 'NOT', x: 240, y: 200, val: '0.6', color: '#bae6fd', note: '1−a' },
  ];
  const out = [
    { id: 'OR1', label: 'OR', x: 420, y: 147, val: '0.84', color: '#7dd3fc', note: 'min(1,a+b)' },
  ];
  return (
    <svg viewBox="0 0 540 335" style={{ width: '100%', display: 'block' }}>
      <rect width="540" height="335" fill="var(--bg-secondary)" rx="8" />
      <text x="270" y="22" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="700">
        LNN (IBM) — Neurónios Lógicos com Activações Reais ∈ [0,1]
      </text>
      <defs>
        <marker id="arLNN" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill={C} />
        </marker>
        <marker id="arDown" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill="#64748b" />
        </marker>
      </defs>
      {/* Forward arrows */}
      {[{from: inputs[0], to: mid[0]},{from: inputs[1], to: mid[0]},{from: inputs[2], to: mid[1]}].map((e,i) => (
        <line key={`f${i}`} x1={e.from.x + 22} y1={e.from.y} x2={e.to.x - 24} y2={e.to.y}
          stroke={C} strokeWidth="1.5" markerEnd="url(#arLNN)" />
      ))}
      {mid.map(m => (
        <line key={`fo${m.id}`} x1={m.x + 24} y1={m.y} x2={out[0].x - 24} y2={out[0].y}
          stroke={C} strokeWidth="1.5" markerEnd="url(#arLNN)" />
      ))}
      {/* Backward arrows (downward propagation) */}
      {[{from: out[0], to: mid[0]},{from: out[0], to: mid[1]}].map((e,i) => (
        <line key={`b${i}`} x1={e.from.x - 24} y1={e.from.y + 12} x2={e.to.x + 24} y2={e.to.y + 12}
          stroke="#64748b" strokeWidth="1" strokeDasharray="4,3" markerEnd="url(#arDown)" />
      ))}
      {/* Nodes */}
      {inputs.map(n => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="22" fill="rgba(74,158,237,0.06)" stroke={C} strokeWidth="2" />
          <text x={n.x} y={n.y - 5} textAnchor="middle" dominantBaseline="middle" fill={C} fontSize="9" fontWeight="700">{n.label}</text>
          <text x={n.x} y={n.y + 9} textAnchor="middle" dominantBaseline="middle" fill="#7dd3fc" fontSize="9">{n.val}</text>
        </g>
      ))}
      {mid.map(n => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="26" fill="rgba(74,158,237,0.06)" stroke={n.color} strokeWidth="2" />
          <text x={n.x} y={n.y - 8} textAnchor="middle" dominantBaseline="middle" fill={n.color} fontSize="11" fontWeight="800">{n.label}</text>
          <text x={n.x} y={n.y + 6} textAnchor="middle" dominantBaseline="middle" fill="#7dd3fc" fontSize="9">{n.val}</text>
          <text x={n.x - 34} y={n.y} textAnchor="end" dominantBaseline="middle" fill="#64748b" fontSize="7">{n.note}</text>
        </g>
      ))}
      {out.map(n => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="28" fill="rgba(74,158,237,0.06)" stroke={n.color} strokeWidth="2.5" />
          <text x={n.x} y={n.y - 8} textAnchor="middle" dominantBaseline="middle" fill={n.color} fontSize="13" fontWeight="800">{n.label}</text>
          <text x={n.x} y={n.y + 8} textAnchor="middle" dominantBaseline="middle" fill="#7dd3fc" fontSize="10">{n.val}</text>
          <text x={n.x + 36} y={n.y} textAnchor="start" dominantBaseline="middle" fill="#64748b" fontSize="7">{n.note}</text>
        </g>
      ))}
      {/* Labels */}
      <text x="60"  y="258" textAnchor="middle" fill="#64748b" fontSize="9">Factos</text>
      <text x="240" y="258" textAnchor="middle" fill="#64748b" fontSize="9">Conectivos</text>
      <text x="420" y="258" textAnchor="middle" fill="#64748b" fontSize="9">Conclusão</text>
      <text x="270" y="284" textAnchor="middle" fill="#64748b" fontSize="8">⤎ propagação descendente (bound update)</text>
      <text x="270" y="310" textAnchor="middle" fill="#475569" fontSize="10">
        Ascendente: factos → conclusões  |  Descendente: expected → actualiza factos
      </text>
    </svg>
  );
}

/* SVG 3: DeepProbLog pipeline */
function SvgDeepProbLog() {
  const boxes = [
    { id: 'img1', label: 'MNIST\nImagem X', x: 20,  y: 90,  w: 90,  h: 50, color: '#4a9eed' },
    { id: 'img2', label: 'MNIST\nImagem Y', x: 20,  y: 170, w: 90,  h: 50, color: '#4a9eed' },
    { id: 'cnn',  label: 'CNN\nDigit\nClassifier', x: 160, y: 100, w: 90,  h: 80, color: '#4a9eed' },
    { id: 'prob', label: 'ProbLog\nInferência\naddition(X,Y,Z)', x: 310, y: 100, w: 110, h: 80, color: C },
    { id: 'loss', label: 'Loss\nP(Z=sum)', x: 475, y: 120, w: 80,  h: 40, color: '#7dd3fc' },
  ];
  return (
    <svg viewBox="0 0 590 290" style={{ width: '100%', display: 'block' }}>
      <rect width="590" height="290" fill="var(--bg-secondary)" rx="8" />
      <text x="295" y="22" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="700">
        DeepProbLog — Pipeline MNIST Addition
      </text>
      <defs>
        <marker id="arDP" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
        </marker>
        <marker id="arBP" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#bae6fd" />
        </marker>
      </defs>
      {boxes.map(b => (
        <g key={b.id}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="6" fill="rgba(74,158,237,0.06)" stroke={b.color} strokeWidth="2" />
          {b.label.split('\n').map((line, li) => (
            <text key={li} x={b.x + b.w / 2} y={b.y + 18 + li * 14} textAnchor="middle" fill={b.color} fontSize="9" fontWeight="600">{line}</text>
          ))}
        </g>
      ))}
      {/* Forward arrows */}
      <line x1="112" y1="115" x2="157" y2="135" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arDP)" />
      <line x1="112" y1="195" x2="157" y2="155" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arDP)" />
      <line x1="252" y1="140" x2="307" y2="140" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arDP)" />
      <text x="279" y="133" textAnchor="middle" fill="#64748b" fontSize="8">P(D₁),P(D₂)</text>
      <line x1="422" y1="140" x2="472" y2="140" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arDP)" />
      <text x="447" y="133" textAnchor="middle" fill="#64748b" fontSize="8">P(Z=z)</text>
      {/* Backward gradient arrow */}
      <path d="M 475 168 C 440 205, 300 205, 252 165" fill="none" stroke="#bae6fd" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#arBP)" />
      <text x="360" y="215" textAnchor="middle" fill="#bae6fd" fontSize="9">gradiente ∂L/∂θ_CNN flui via inferência ProbLog</text>
      {/* Labels */}
      <text x="295" y="248" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="600">
        addition(X,Y,Z) :- digit(X,D1), digit(Y,D2), Z is D1+D2.
      </text>
      <text x="295" y="264" textAnchor="middle" fill="#64748b" fontSize="9">
        nn(mnist,[X],Digit,[0..9]) — chama CNN de dentro de Prolog
      </text>
      <text x="295" y="278" textAnchor="middle" fill="#475569" fontSize="9">
        Treina com somas correctas sem labels individuais de cada dígito
      </text>
    </svg>
  );
}

/* SVG 4: NN Verification */
function SvgVerification() {
  const layers = [
    { x: 40,  label: 'Input\nε-ball', nodes: [80, 130, 180, 230], color: '#4a9eed' },
    { x: 180, label: 'Layer 1\nReLU',  nodes: [95, 155, 215],     color: '#4a9eed' },
    { x: 310, label: 'Layer 2\nReLU',  nodes: [115, 185],         color: C },
    { x: 430, label: 'Output\nSet',    nodes: [150],               color: '#7dd3fc' },
  ];
  return (
    <svg viewBox="0 0 570 330" style={{ width: '100%', display: 'block' }}>
      <rect width="570" height="330" fill="var(--bg-secondary)" rx="8" />
      <text x="275" y="22" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="700">
        Verificação Formal de NN — Propagação de Reachability
      </text>
      {/* ε-ball input region */}
      <rect x="16" y="52" width="65" height="204" rx="5" fill={`${`#4a9eed`}15`} stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,3" />
      <text x="48" y="44" textAnchor="middle" fill="#4a9eed" fontSize="8">ε-ball</text>
      {/* Output safe region — output space diagram */}
      <rect x="455" y="85" width="100" height="165" rx="5" fill={`#7dd3fc10`} stroke="#7dd3fc" strokeWidth="1.5" strokeDasharray="4,3" />
      <text x="505" y="77" textAnchor="middle" fill="#7dd3fc" fontSize="8">safe region</text>
      {/* Reachable output set inside safe region */}
      <rect x="465" y="105" width="68" height="80" rx="3" fill={`${C}20`} stroke={C} strokeWidth="1.5" />
      <text x="499" y="99" textAnchor="middle" fill={C} fontSize="7">reachable</text>
      <text x="499" y="148" textAnchor="middle" dominantBaseline="middle" fill={C} fontSize="9" fontWeight="700">R(NN)</text>
      {/* Arrow from output node to reachable box */}
      <line x1="444" y1="150" x2="463" y2="150" stroke="#7dd3fc" strokeWidth="1.5" markerEnd="url(#arLNN)" />
      {/* Connections */}
      {layers.slice(0, -1).map((layer, li) => {
        const next = layers[li + 1];
        return layer.nodes.flatMap((ny, ni) =>
          next.nodes.map((my, mi) => (
            <line key={`${li}-${ni}-${mi}`} x1={layer.x + 16} y1={ny} x2={next.x - 16} y2={my}
              stroke="var(--card-border)" strokeWidth="1" />
          ))
        );
      })}
      {/* Nodes */}
      {layers.map((layer, li) =>
        layer.nodes.map((ny, ni) => (
          <g key={`${li}-${ni}`}>
            <circle cx={layer.x} cy={ny} r="14" fill="rgba(74,158,237,0.06)" stroke={layer.color} strokeWidth="2" />
            {li === 0 && <line x1={layer.x - 10} y1={ny} x2={layer.x + 10} y2={ny} stroke={layer.color} strokeWidth="1.5" />}
          </g>
        ))
      )}
      {/* Layer labels */}
      {layers.map(layer => (
        <g key={layer.label}>
          {layer.label.split('\n').map((line, li) => (
            <text key={li} x={layer.x} y={264 + li * 13} textAnchor="middle" fill={layer.color} fontSize="9">{line}</text>
          ))}
        </g>
      ))}
      {/* SMT encoding note */}
      <rect x="100" y="298" width="305" height="22" rx="4" fill={`${C}15`} stroke={`${C}40`} />
      <text x="252" y="311" textAnchor="middle" dominantBaseline="middle" fill={C} fontSize="8">
        ReLU codificado em SMT: z≥0 ∧ z≥Wx+b ∧ (z=0 ∨ z=Wx+b)
      </text>
    </svg>
  );
}

export default function LOG7() {
  const mod = modules[6];
  return (
    <div style={S.page}>
      <Link to="/logic" style={S.back}>← Logic</Link>
      <div style={S.badge}>MÓDULO {mod.num}</div>
      <h1 style={S.h1}>{mod.title}</h1>

      {/* ── Secção 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Integração Neural-Simbólica — Motivação e Espectro</h2>
        <p style={S.p}>
          Redes neuronais são excepcionais a aprender padrões perceptuais (imagem, texto, áudio) mas requerem grandes
          quantidades de dados e falham em <em>generalização composicional sistemática</em>. Sistemas simbólicos
          (Prolog, DL, planadores) raciocinam com dados escassos e fornecem garantias formais, mas falham na aquisição
          de conhecimento a partir de dados em bruto.
        </p>
        <div style={S.highlight}>
          <strong>SCAN Benchmark</strong> (Lake &amp; Baroni, 2018): modelos treinados em "jump twice" devem generalizar
          para "jump thrice". Seq2seq LSTMs falham completamente (~0% acuidade). Modelos simbólicos ou
          neuro-simbólicos generalizam por definição — o verbo e o advérbio são processados separadamente.<br /><br />
          <strong>Sample complexity:</strong> redes neuronais precisam de muitos exemplos; sistemas simbólicos aprendem de
          poucos mas requerem estrutura correcta. O ideal é combinar: NN para percepção, simbólico para raciocínio.
        </div>
        <p style={S.p}>
          <strong>Espectro Kautz (2022)</strong> organiza sistemas NeSy em 6 posições pela forma como componentes
          neurais e simbólicos interagem: da posição 1 (simbólico usa NN como subroutine — Prolog chama classificador)
          à posição 6 (NN pura que emergentemente faz raciocínio simbólico — GPT-4 com chain-of-thought).
        </p>
        <div style={S.diagram}><SvgKautz /></div>
        <p style={S.p}>
          Sistemas na posição 2 como <em>AlphaGo</em> usam MCTS simbólico com redes de valor e política neurais.
          Posição 3 — <em>DeepProbLog</em> — integra CNN chamável de dentro de Prolog com gradientes que fluem
          pela inferência lógica. Posição 4 — <em>LNN IBM</em> — cada operador lógico é um neurónio.
        </p>
      </div>
      <hr style={S.divider} />

      {/* ── Secção 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Logical Neural Networks (IBM)</h2>
        <p style={S.p}>
          <strong>LNN</strong> (Riegel et al., IBM Research, 2020) é uma arquitectura onde cada nó é simultaneamente
          um neurónio e um operador lógico. Pesos w ∈ [0,∞) são aprendíveis e reflectem a força das premissas.
          Activações a ∈ [0,1] são interpretadas como graus de verdade na lógica de Łukasiewicz:
        </p>
        <div style={S.code}>{`Operadores Łukasiewicz em LNN:
  AND(a, b)  =  max(0,  a + b − 1)      // t-norm
  OR(a, b)   =  min(1,  a + b)          // t-conorma
  NOT(a)     =  1 − a                   // negação forte
  IMPLIES(a,b) = min(1, 1 − a + b)      // residuum

Regra de inferência ascendente (upward pass):
  Se premissa = a e conclusão esperada = e_out:
    α_conclusion = AND(w₁·a₁, w₂·a₂, …)  // acumula evidência
    Output ← clip [lower_bound, upper_bound]

Regra de propagação descendente (downward pass):
  Se conclusão observada = c e AND(a,b) = c:
    lower_bound(a) ← max(0, c − b_upper)
    lower_bound(b) ← max(0, c − a_upper)
    → actualiza bounds das premissas

Treino — Violação de Bounds:
  Loss = Σ max(0, lower_bound − activation)²
       + Σ max(0, activation − upper_bound)²`}</div>
        <div style={S.diagram}><SvgLNN /></div>
        <p style={S.p}>
          A propagação descendente permite raciocínio bidirecional: dado que a conclusão deve ser verdadeira,
          o sistema infere quais premissas têm de ser verdadeiras — analogamente à resolução SLD do Prolog
          mas com valores contínuos e sem backtracking discreto.
        </p>
        <div style={S.note}>
          <strong>Watson NLP + LNN:</strong> IBM integra LNN na pipeline Watson para raciocínio sobre Knowledge Graphs
          com incerteza. Por exemplo, dada a regra "Se empresa X é subsidiária de Y e Y opera em sector Z, então X
          opera em Z" com peso 0.85 (não certo), LNN propaga a incerteza formalmente mantendo bounds exactos.
          Supera redes neurais puras em benchmarks de raciocínio sobre KGs com ruído.
        </div>
      </div>
      <hr style={S.divider} />

      {/* ── Secção 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. DeepProbLog e Gradientes Através da Inferência</h2>
        <p style={S.p}>
          <strong>ProbLog</strong> (De Raedt et al., 2007) estende Prolog com factos probabilísticos:
          "0.7::edge(a,b)." significa que a aresta existe com probabilidade 0.7. A inferência calcula a probabilidade
          de um goal por resolvente SLD ponderada — somatório de probabilidades sobre todas as provas.
        </p>
        <div style={S.code}>{`ProbLog — exemplo Path em Grafo:
  0.7::edge(a,b).     0.5::edge(b,c).
  0.8::edge(a,c).

  path(X,Y) :- edge(X,Y).
  path(X,Y) :- edge(X,Z), path(Z,Y).

  query(path(a,c)).
  → P(path(a,c)) = 1 − (1−0.8)·(1−0.7·0.5) = 0.87

DeepProbLog — integração com redes neuronais:
  nn(mnist_net, [X], Digit, [0,1,2,…,9]) :- true.
  digit(X, D) :- nn(mnist_net, [X], D).

  addition(X, Y, Z) :-
    digit(X, D1), digit(Y, D2), Z is D1+D2.

  query(addition(img1, img2, 14)).
  → resolve via ProbLog usando distribuição P(D1), P(D2) da CNN
  → gradiente flui: ∂L/∂θ_CNN via WMC diferenciável`}</div>
        <div style={S.diagram}><SvgDeepProbLog /></div>
        <p style={S.p}>
          A <em>MNIST Addition</em> treina um classificador MNIST usando apenas a supervisão da soma correcta,
          sem labels individuais por dígito. DeepProbLog atinge ~97% de acuidade na task de adição — comparável
          a treino supervisionado com labels completas — demonstrando que a estrutura lógica act como regularizador implícito.
        </p>
        <div style={S.note}>
          <strong>NeuralLP e DRUM:</strong> aprendem regras FOL diferenciáveis sobre Knowledge Graphs.
          NeuralLP (Yang et al., 2017) representa regras como sequências de operações de álgebra relacional
          diferenciáveis. DRUM (Sadeghian et al., 2019) usa RNNs bidirecionais para parameterizar regras de caminho —
          converge para regras como "irmão(X,Y) ← pai(Z,X) ∧ pai(Z,Y)" sem as especificar manualmente.<br /><br />
          <strong>α-NeSy Framework:</strong> unifica DeepProbLog, LNN e outros sistemas via uma abstracção de
          "inferência neuronalmente aumentada" — o gradiente flui através da inferência usando o Weighted Model Count
          diferenciável (WMC) ou backpropagation através de circuitos aritméticos.
        </div>
      </div>
      <hr style={S.divider} />

      {/* ── Secção 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Verificação Formal de Redes Neuronais</h2>
        <p style={S.p}>
          Redes neuronais em sistemas <em>safety-critical</em> (avião, carro autónomo, medicina) devem satisfazer
          propriedades verificáveis formalmente — não basta testar em benchmarks. Um adversarial example encontrado
          em produção pode ser catastrófico. A verificação formal responde: "para <em>todo</em> input na região X,
          o output está na região Y?"
        </p>
        <div style={S.highlight}>
          <strong>Propriedades verificáveis:</strong><br />
          <em>ε-robustez:</em> ∀x' com ‖x'−x‖_∞ ≤ ε: argmax(NN(x')) = argmax(NN(x)) — resistência a perturbações.<br />
          <em>Monotonia:</em> se feature i aumenta, output j não diminui — relevante em crédito/saúde.<br />
          <em>Fairness:</em> output independente de atributos protegidos (raça, género).<br />
          <em>Output bounds:</em> para inputs no domínio operacional, output ∈ [min, max] — avião mantém altitude.
        </div>
        <p style={S.p}>
          <strong>Codificação SMT de ReLU:</strong> cada neurónio com activação ReLU(z) = max(0, Wx+b) é codificado
          com uma variável auxiliar δ ∈ {'{0,1}'} (activo/inactivo):
        </p>
        <div style={S.code}>{`Codificação Mixed-Integer Linear Programming (MILP) de ReLU:
  Para neurónio j na camada l:
    zⱼˡ = Wⱼˡ · xˡ⁻¹ + bⱼˡ       // pré-activação
    aⱼˡ ≥ 0
    aⱼˡ ≥ zⱼˡ
    aⱼˡ ≤ zⱼˡ − l_j·(1 − δⱼˡ)   // δ=1: activo, aⱼˡ = zⱼˡ
    aⱼˡ ≤ u_j · δⱼˡ               // δ=0: inactivo, aⱼˡ = 0
    δⱼˡ ∈ {0, 1}

Verificação de ε-robustez:
  Minimizar: output_class_k − output_class_j
  Sujeito a: ‖x − x₀‖_∞ ≤ ε  +  codificação MILP acima
  Se mínimo ≥ 0 para todo k!=j: NN é ε-robusto em x₀

Codificação SMT equivalente (z3/dReal):
  (assert (>= z 0))
  (assert (>= z (+ (* w x) b)))
  (assert (or (= z 0) (= z (+ (* w x) b))))`}</div>
        <div style={S.diagram}><SvgVerification /></div>
        <p style={S.p}>
          <strong>Ferramentas principais:</strong> <em>Marabou</em> (Stanford, 2019) usa Simplex modificado com
          splitting em neurónios ReLU. <em>α,β-CROWN</em> (Berkeley, Zhang et al.) usa propagação de bounds
          com multiplicadores Lagrangianos aprendíveis — ganhou VNN-COMP 2021, 2022 e 2023.
          <em>ERAN</em> (ETH Zurich) usa abstract interpretation com zonotopes e DeepPoly.
          <em>Planet</em> e <em>MIPVerify</em> exploram MILP com solvers Gurobi.
        </p>
        <div style={S.note}>
          <strong>Escala actual e futuro:</strong> verificação exacta é NP-completo (mesmo para redes de 1 camada).
          Estado-da-arte verifica redes de ~10k–100k neurónios em minutos (α,β-CROWN); redes de produção com milhões
          de parâmetros permanecem intratáveis. Direcções activas: <em>abstraction-refinement</em> (verifica versão
          abstraída e refina se necessário); <em>verificação composicional</em> (verifica camadas independentemente
          com contratos de interface); <em>certified training</em> (treina NN para ser verificável por construção —
          IBP, CROWN-IBP); <em>probabilistic verification</em> (fornece garantias com alta probabilidade sem
          verificação completa).
        </div>
      </div>
    </div>
  );
}
