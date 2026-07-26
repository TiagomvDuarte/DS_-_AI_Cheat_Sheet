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
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

// === Diagram: Train vs Val loss curves diverging (overfitting) ===
const LossCurvesDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Curvas de Aprendizagem — Treino vs Validação</p>
    <svg viewBox="0 0 540 250" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrL" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <line x1="50" y1="180" x2="50" y2="20" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrL)" />
      <line x1="50" y1="180" x2="500" y2="180" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrL)" />
      <text x="40" y="15" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Loss</text>
      <text x="500" y="198" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Épocas</text>

      <path d="M 50 170 C 120 110, 200 70, 280 50 C 360 38, 440 30, 500 25"
        fill="none" stroke="#bae6fd" strokeWidth="2.5" />
      <path d="M 50 175 C 120 115, 200 78, 280 65 C 360 75, 440 105, 500 145"
        fill="none" stroke="#4a9eed" strokeWidth="2.5" />

      <line x1="280" y1="20" x2="280" y2="180" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4,3" />
      <circle cx="280" cy="65" r="5" fill="#0284c7" />
      <text x="280" y="14" textAnchor="middle" fill="#0284c7" fontSize="10" fontWeight="700">ponto óptimo (early stopping)</text>

      <text x="150" y="198" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">underfitting</text>
      <text x="370" y="198" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">overfitting (gap cresce)</text>

      <line x1="170" y1="228" x2="195" y2="228" stroke="#bae6fd" strokeWidth="2.5" />
      <text x="200" y="232" fill="var(--text-secondary)" fontSize="9">treino</text>
      <line x1="280" y1="228" x2="305" y2="228" stroke="#4a9eed" strokeWidth="2.5" />
      <text x="310" y="232" fill="var(--text-secondary)" fontSize="9">validação</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      O loss de treino desce continuamente — o modelo está sempre a memorizar mais. O loss de validação desce
      até um mínimo e depois sobe: a partir desse ponto, o modelo deixa de generalizar e começa a decorar
      ruído específico do conjunto de treino.
    </p>
  </div>
);

// === Diagram: decision boundaries — underfit / good fit / overfit ===
const BoundaryDiagram = () => {
  const points = [[60, 50, '#4a9eed'], [100, 90, '#4a9eed'], [140, 40, '#4a9eed'], [180, 100, '#4a9eed'], [70, 150, '#4a9eed'], [120, 170, '#4a9eed'], [160, 160, '#4a9eed'], [40, 120, '#4a9eed'], [190, 60, '#4a9eed'], [150, 190, '#4a9eed']];
  const renderPoints = (offsetX) => points.map(([x, y, c], i) => (
    <circle key={i} cx={x + offsetX} cy={y} r="4" fill={c} stroke="var(--bg-primary)" strokeWidth="1" />
  ));
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Fronteiras de Decisão: Underfit, Boa Generalização e Overfit</p>
      <svg viewBox="0 0 660 262" style={{ maxWidth: '100%', height: 'auto' }}>
        {/* Underfit */}
        <rect x="10" y="10" width="200" height="200" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" />
        <line x1="20" y1="60" x2="200" y2="120" stroke="#0284c7" strokeWidth="2.5" />
        {renderPoints(20)}
        <text x="110" y="228" textAnchor="middle" fill="#0284c7" fontSize="11" fontWeight="700">Underfitting (alto bias)</text>
        <text x="110" y="246" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Bias: alto · Variância: baixa</text>

        {/* Good fit */}
        <rect x="230" y="10" width="200" height="200" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" />
        <path d="M 250 50 Q 300 90 330 110 Q 370 140 430 150" fill="none" stroke="#4a9eed" strokeWidth="2.5" />
        {renderPoints(240)}
        <text x="330" y="228" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">Boa generalização</text>
        <text x="330" y="246" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Bias: baixo · Variância: baixa</text>

        {/* Overfit */}
        <rect x="450" y="10" width="200" height="200" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" />
        <path d="M 470 55 Q 485 75 478 95 Q 510 100 505 75 Q 540 90 530 115 Q 560 130 550 150 Q 590 145 600 165 Q 615 175 630 160"
          fill="none" stroke="#4a9eed" strokeWidth="2.5" />
        {renderPoints(460)}
        <text x="550" y="228" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">Overfitting (alta variância)</text>
        <text x="550" y="246" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Bias: baixo · Variância: alta</text>
      </svg>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
        Underfitting: a fronteira (linear) é demasiado simples para separar bem as classes. Boa generalização:
        a curva captura o padrão real mas ignora pontos isolados/ruído. Overfitting: a fronteira contorce-se
        para classificar correctamente <em>cada</em> ponto de treino — incluindo outliers — falhando em novos dados.
      </p>
    </div>
  );
};

// === Diagram: Dropout network ===
const DropoutDiagram = () => {
  const layer1 = [40, 80, 120, 160];
  const layer2 = [40, 80, 120, 160];
  const droppedTrain = [1, 2];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Dropout — Treino vs Inferência</p>
      <svg viewBox="0 0 520 220" style={{ maxWidth: '100%', height: 'auto' }}>
        <text x="120" y="16" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">Treino (p = 0.5)</text>
        {layer1.map((y, i) => (
          <circle key={`t1-${i}`} cx="60" cy={y + 20} r="12" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
        ))}
        {layer2.map((y, i) => {
          const dropped = droppedTrain.includes(i);
          return (
            <g key={`t2-${i}`}>
              {layer1.map((yy, j) => (
                <line key={j} x1="72" y1={yy + 20} x2="168" y2={y + 20}
                  stroke={dropped ? 'var(--card-border)' : color}
                  strokeWidth={dropped ? 0.5 : 1}
                  strokeDasharray={dropped ? '2,2' : '0'}
                  opacity={dropped ? 0.3 : 0.5} />
              ))}
              <circle cx="180" cy={y + 20} r="12"
                fill={dropped ? 'var(--bg-primary)' : 'rgba(74,158,237,0.10)'}
                stroke={dropped ? 'var(--card-border)' : color}
                strokeWidth="1.5"
                strokeDasharray={dropped ? '3,2' : '0'} />
              {dropped && <text x="180" y={y + 25} textAnchor="middle" fill="var(--text-secondary)" fontSize="14">×</text>}
            </g>
          );
        })}
        <text x="120" y="210" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">2 de 4 neurónios "desligados"</text>

        <line x1="260" y1="0" x2="260" y2="220" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3" />

        <text x="390" y="16" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">Inferência (eval)</text>
        {layer1.map((y, i) => (
          <circle key={`i1-${i}`} cx="320" cy={y + 20} r="12" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
        ))}
        {layer2.map((y, i) => (
          <g key={`i2-${i}`}>
            {layer1.map((yy, j) => (
              <line key={j} x1="332" y1={yy + 20} x2="428" y2={y + 20} stroke={color} strokeWidth="1" opacity="0.5" />
            ))}
            <circle cx="440" cy={y + 20} r="12" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
          </g>
        ))}
        <text x="380" y="210" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">todos os neurónios activos (sem scaling extra)</text>
      </svg>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
        Em cada forward pass de treino, um subconjunto diferente de neurónios é "apagado". A rede nunca pode
        confiar demasiado num único caminho — é forçada a distribuir a informação de forma redundante.
      </p>
    </div>
  );
};

// === Diagram: where BatchNorm sits ===
const BNPositionDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Onde o BatchNorm se insere numa camada</p>
    <svg viewBox="0 0 620 110" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrBN" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      {[
        [62, 'Entrada\nx', 'var(--bg-primary)', 'var(--text-secondary)'],
        [202, 'Linear / Conv\n(W·x + b)', 'rgba(138,180,248,0.15)', '#bae6fd'],
        [342, 'BatchNorm\n(normaliza + γ,β)', 'rgba(74,158,237,0.10)', color],
        [482, 'Activação\n(ReLU)', 'rgba(74,158,237,0.10)', '#4a9eed'],
      ].map(([cx, label, bg, col]) => (
        <g key={label}>
          <rect x={cx - 62} y="25" width="124" height="55" rx="10" fill={bg} stroke={col} strokeWidth="1.2" />
          {label.split('\n').map((line, li) => (
            <text key={li} x={cx} y={48 + li * 16} textAnchor="middle" fill={col} fontSize="11" fontWeight={li === 0 ? 'bold' : '500'}>{line}</text>
          ))}
        </g>
      ))}
      <line x1="124" y1="52" x2="140" y2="52" stroke={color} strokeWidth="1.5" markerEnd="url(#arrBN)" />
      <line x1="264" y1="52" x2="280" y2="52" stroke={color} strokeWidth="1.5" markerEnd="url(#arrBN)" />
      <line x1="404" y1="52" x2="420" y2="52" stroke={color} strokeWidth="1.5" markerEnd="url(#arrBN)" />
      <line x1="544" y1="52" x2="560" y2="52" stroke={color} strokeWidth="1.5" markerEnd="url(#arrBN)" />
      <text x="565" y="56" fill="var(--text-secondary)" fontSize="11">saída</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      A ordem clássica (Ioffe &amp; Szegedy, 2015) é Linear/Conv → BatchNorm → Activação não-linear. O BN
      normaliza a <em>pré-activação</em> antes de ela passar pela não-linearidade.
    </p>
  </div>
);

// === NCHW cube-style normalization comparison diagram ===
const NormAxesDiagram = () => {
  const Cube = ({ title, cells, hl }) => (
    <div style={{ textAlign: 'center' }}>
      <svg viewBox="0 0 120 120" style={{ width: 110, height: 110 }}>
        {Array.from({ length: 4 }).map((_, r) =>
          Array.from({ length: 4 }).map((_, cidx) => {
            const highlighted = cells(r, cidx);
            return (
              <rect key={`${r}-${cidx}`} x={10 + cidx * 25} y={10 + r * 25} width="22" height="22"
                fill={highlighted ? hl : 'var(--bg-primary)'}
                fillOpacity={highlighted ? 0.55 : 1}
                stroke="var(--text-secondary)" strokeWidth="0.75" />
            );
          })
        )}
      </svg>
      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: hl, marginTop: '0.25rem' }}>{title}</div>
    </div>
  );
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Que eixos cada normalização agrega?</p>
      <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        Grelha: linhas = exemplos do batch (N), colunas = canais (C). As células destacadas indicam o conjunto
        de valores cuja média/variância é calculada em conjunto (cada célula resume também as dimensões espaciais H×W).
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', justifyItems: 'center' }}>
        <Cube title="BatchNorm" hl="#bae6fd" cells={() => true} />
        <Cube title="LayerNorm" hl="#38bdf8" cells={(r) => r === 0} />
        <Cube title="InstanceNorm" hl="#0284c7" cells={(r, c2) => r === 0 && c2 === 0} />
        <Cube title="GroupNorm (G=2)" hl={color} cells={(r, c2) => r === 0 && c2 < 2} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '0.5rem' }}>
        <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', margin: 0 }}>Por <strong>canal</strong>, ao longo de N e H×W — toda a coluna, todas as linhas.</p>
        <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', margin: 0 }}>Por <strong>exemplo</strong>, ao longo de C e H×W — toda a linha.</p>
        <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', margin: 0 }}>Por <strong>exemplo e canal</strong>, só H×W — uma única célula.</p>
        <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', margin: 0 }}>Por <strong>exemplo</strong>, dentro de subgrupos de canais.</p>
      </div>
    </div>
  );
};

// === Weight decay shrinkage diagram ===
const WeightShrinkDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Weight Decay: pesos atraídos para zero</p>
    <svg viewBox="0 0 400 140" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrW" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
        </marker>
        <marker id="arrW2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      <line x1="20" y1="70" x2="380" y2="70" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <circle cx="200" cy="70" r="3" fill="var(--text-secondary)" />
      <text x="200" y="92" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">0</text>

      <circle cx="320" cy="70" r="5" fill="#4a9eed" />
      <text x="320" y="50" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">w* (só perda de dados)</text>
      <line x1="200" y1="70" x2="305" y2="70" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#arrW)" />

      <circle cx="270" cy="70" r="5" fill={color} />
      <text x="270" y="115" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">w final (com weight decay)</text>
      <line x1="320" y1="70" x2="280" y2="70" stroke={color} strokeWidth="2" markerEnd="url(#arrW2)" />
      <text x="300" y="58" textAnchor="middle" fill={color} fontSize="9">−λw</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      Sem regularização, o gradiente da perda empurra w para o óptimo dos dados de treino (w*), que pode ser
      um valor grande/extremo. O termo de weight decay adiciona uma força constante proporcional a w, na
      direcção de zero — o ponto de equilíbrio fica entre w* e a origem.
    </p>
  </div>
);

export default function DL4() {
  return (
    <div style={S.page}>
      <Link to="/dl" style={S.back}><ArrowLeft size={16} /> Voltar a Deep Learning</Link>

      <div style={S.tag}>MÓDULO 04</div>
      <h1 style={S.h1}>Regularização &amp; Normalização</h1>

      {/* === SECTION 1: Overfitting vs underfitting === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Overfitting vs Underfitting</h2>
        <p style={S.p}>
          Um modelo de deep learning pode falhar de duas formas opostas. <strong>Underfitting</strong> acontece
          quando o modelo é demasiado simples (ou treinado por pouco tempo) para capturar os padrões nos dados —
          tanto o erro de treino como o de validação ficam altos. <strong>Overfitting</strong> acontece quando o
          modelo é tão flexível que decora exemplos individuais, incluindo o ruído — o erro de treino fica muito
          baixo, mas o erro de validação sobe.
        </p>

        <div style={S.highlight}>
          <strong>Erro total esperado ≈ Bias² + Variância + Ruído irredutível</strong>
          <p style={{ ...S.p, marginBottom: 0, marginTop: '0.5rem' }}>
            <strong>Bias</strong> mede o erro sistemático de um modelo demasiado simples (underfitting).
            <strong> Variância</strong> mede a sensibilidade do modelo a pequenas variações no dataset de treino
            (overfitting). Aumentar a capacidade do modelo tende a reduzir o bias mas aumentar a variância — a
            regularização tenta encontrar o ponto de equilíbrio.
          </p>
        </div>

        <BoundaryDiagram />

        <h3 style={S.h3}>Diagnóstico com curvas de aprendizagem</h3>
        <p style={S.p}>
          A ferramenta de diagnóstico mais usada é traçar o loss de treino e o loss de validação ao longo das
          épocas. O comportamento relativo das duas curvas indica exactamente em que regime o modelo se encontra.
        </p>

        <LossCurvesDiagram />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Padrão observado</th>
              <th style={S.th}>Diagnóstico</th>
              <th style={S.th}>Acção típica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Treino e validação altos, ambos a descer lentamente</td>
              <td style={S.td}>Underfitting (alto bias)</td>
              <td style={S.td}>Aumentar capacidade, treinar mais épocas, reduzir regularização</td>
            </tr>
            <tr>
              <td style={S.td}>Treino baixo, validação alta e a divergir</td>
              <td style={S.td}>Overfitting (alta variância)</td>
              <td style={S.td}>Mais regularização, mais dados, early stopping</td>
            </tr>
            <tr>
              <td style={S.td}>Ambos baixos e próximos</td>
              <td style={S.td}>Boa generalização</td>
              <td style={S.td}>Manter / afinar hiperparâmetros</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          Regra prática: o <em>gap</em> entre o loss de treino e o de validação é o sinal mais directo de
          overfitting. Um gap pequeno e estável é saudável; um gap que cresce continuamente é um alerta.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Dropout === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Dropout</h2>
        <p style={S.p}>
          O Dropout (Srivastava et al., 2014) é uma das técnicas de regularização mais simples e mais usadas em
          deep learning. Durante o treino, cada neurónio de uma camada é "desligado" — a sua saída é forçada a
          zero — independentemente, com probabilidade <InlineMath math="p" /> (tipicamente entre 0.2 e 0.5). Em
          cada forward pass, um subconjunto diferente de neurónios fica activo.
        </p>

        <DropoutDiagram />

        <h3 style={S.h3}>Porque funciona</h3>
        <p style={S.p}>
          Como a rede nunca pode contar com a presença garantida de um neurónio específico, é forçada a
          distribuir a informação por múltiplos caminhos redundantes — em vez de coligações frágeis e altamente
          especializadas a um neurónio em particular. Uma forma intuitiva de pensar nisto: o Dropout treina, em
          efeito, uma <strong>combinação (ensemble) implícita</strong> de muitas sub-redes diferentes, partilhando
          pesos entre si.
        </p>

        <h3 style={S.h3}>Treino vs inferência — Inverted Dropout</h3>
        <p style={S.p}>
          Durante o <strong>treino</strong>, uma fracção <InlineMath math="p" /> dos neurónios é anulada. Isto
          significa que a soma das activações que chega à camada seguinte é, em média,{' '}
          <InlineMath math="(1-p)" /> vezes menor do que seria com todos os neurónios activos. Durante a{' '}
          <strong>inferência</strong>, queremos usar <em>todos</em> os neurónios (sem aleatoriedade), mas isso
          mudaria a escala das activações em relação ao treino.
        </p>
        <p style={S.p}>
          A solução padrão — <strong>Inverted Dropout</strong> — escala as activações sobreviventes durante o
          treino por um factor <InlineMath math="\frac{1}{1-p}" />, de modo a que o valor esperado da soma das
          activações seja igual em treino e em inferência. Assim, na inferência não é necessário fazer nenhum
          ajuste: usam-se todos os neurónios, sem escala extra.
        </p>

        <div style={S.math}>
          <BlockMath math={`\\text{treino: } \\quad \\hat{a}_i = \\frac{m_i \\cdot a_i}{1-p}, \\qquad m_i \\sim \\text{Bernoulli}(1-p)`} />
          <BlockMath math={`\\text{inferência: } \\quad \\hat{a}_i = a_i`} />
        </div>

        <h3 style={S.h3}>Exemplo numérico</h3>
        <p style={S.p}>
          Considere uma camada com 4 activações <InlineMath math="a = [2, 4, 1, 3]" /> e{' '}
          <InlineMath math="p = 0.5" /> (50% de probabilidade de desligar cada neurónio). Suponha que a máscara
          aleatória deste forward pass é <InlineMath math="m = [1, 0, 1, 0]" /> (neurónios 2 e 4 desligados).
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Neurónio</th>
              <th style={S.th}>Activação original</th>
              <th style={S.th}>Máscara <InlineMath math="m_i" /></th>
              <th style={S.th}>Após dropout</th>
              <th style={S.th}>Após escala <InlineMath math="\times \frac{1}{1-p} = \times 2" /></th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>1</td><td style={S.td}>2</td><td style={S.td}>1</td><td style={S.td}>2</td><td style={S.td}><strong>4</strong></td></tr>
            <tr><td style={S.td}>2</td><td style={S.td}>4</td><td style={S.td}>0</td><td style={S.td}>0</td><td style={S.td}><strong>0</strong></td></tr>
            <tr><td style={S.td}>3</td><td style={S.td}>1</td><td style={S.td}>1</td><td style={S.td}>1</td><td style={S.td}><strong>2</strong></td></tr>
            <tr><td style={S.td}>4</td><td style={S.td}>3</td><td style={S.td}>0</td><td style={S.td}>0</td><td style={S.td}><strong>0</strong></td></tr>
          </tbody>
        </table>
        <p style={S.p}>
          Soma original: <InlineMath math="2+4+1+3 = 10" />. Soma após dropout (sem escala):{' '}
          <InlineMath math="2+0+1+0 = 3" />. Soma após inverted dropout: <InlineMath math="4+0+2+0 = 6" />. Em
          expectativa sobre muitas máscaras aleatórias diferentes, a soma escalada aproxima-se de{' '}
          <InlineMath math="10 \times (1-p) \times \frac{1}{1-p} = 10" /> — a mesma escala da rede sem dropout. Na
          inferência, usamos directamente <InlineMath math="a = [2,4,1,3]" /> (soma 10), consistente com o
          comportamento médio do treino.
        </p>

        <h3 style={S.h3}>MC Dropout — Dropout como estimativa de incerteza</h3>
        <p style={S.p}>
          O <strong>MC Dropout</strong> (Monte Carlo Dropout) mantém o Dropout activo mesmo durante a inferência
          e realiza várias passagens (forward passes) com máscaras diferentes para a mesma entrada. A
          variabilidade entre as previsões resultantes serve como estimativa de incerteza epistémica do modelo —
          uma técnica popular de Bayesian Deep Learning, sem custo computacional adicional significativo (basta
          repetir o forward pass).
        </p>

        <div style={S.note}>
          Dropout é menos comum em camadas convolucionais profundas (onde BatchNorm já fornece regularização
          implícita), mas continua amplamente usado em camadas totalmente ligadas e, sob a forma de{' '}
          <em>attention dropout</em>, em Transformers.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: BatchNorm === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Batch Normalization</h2>
        <p style={S.p}>
          O Batch Normalization (Ioffe &amp; Szegedy, 2015) normaliza as activações de uma camada para terem
          média ≈ 0 e variância ≈ 1 <strong>dentro de cada mini-batch</strong>, e depois aplica uma transformação
          linear aprendida. Isto estabiliza a distribuição das entradas de cada camada ao longo do treino,
          permitindo learning rates maiores e convergência mais rápida.
        </p>

        <BNPositionDiagram />

        <h3 style={S.h3}>A fórmula, passo a passo</h3>
        <p style={S.p}>
          Para um mini-batch de <InlineMath math="m" /> exemplos, com activações{' '}
          <InlineMath math="x_1, x_2, \dots, x_m" /> (todos correspondentes ao mesmo neurónio/canal):
        </p>

        <div style={S.math}>
          <BlockMath math={`\\mu_B = \\frac{1}{m}\\sum_{i=1}^{m} x_i \\qquad \\sigma_B^2 = \\frac{1}{m}\\sum_{i=1}^{m} (x_i - \\mu_B)^2`} />
          <BlockMath math={`\\hat{x}_i = \\frac{x_i - \\mu_B}{\\sqrt{\\sigma_B^2 + \\epsilon}} \\qquad y_i = \\gamma \\hat{x}_i + \\beta`} />
        </div>

        <p style={S.p}>
          <InlineMath math="\gamma" /> (escala) e <InlineMath math="\beta" /> (deslocamento) são{' '}
          <strong>parâmetros aprendidos</strong> por backpropagation — um par por canal/neurónio. Permitem à rede
          recuperar (ou ajustar) a distribuição original se a normalização estrita não for óptima para essa
          camada. <InlineMath math="\epsilon" /> é uma pequena constante (~1e-5) para evitar divisão por zero.
        </p>

        <h3 style={S.h3}>Exemplo numérico passo a passo</h3>
        <p style={S.p}>
          Considere um mini-batch com 4 exemplos, e o valor de activação de <em>um</em> neurónio antes do BN para
          cada exemplo: <InlineMath math="x = [2, 4, 4, 6]" />. Suponha <InlineMath math="\gamma = 1" />,{' '}
          <InlineMath math="\beta = 0" /> (inicialização típica) e <InlineMath math="\epsilon \approx 0" />.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Passo</th>
              <th style={S.th}>Cálculo</th>
              <th style={S.th}>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>1. Média do batch</td>
              <td style={S.td}><InlineMath math="\mu_B = (2+4+4+6)/4" /></td>
              <td style={S.td}><strong>4</strong></td>
            </tr>
            <tr>
              <td style={S.td}>2. Variância do batch</td>
              <td style={S.td}><InlineMath math="\sigma_B^2 = \frac{(2-4)^2+(4-4)^2+(4-4)^2+(6-4)^2}{4}" /></td>
              <td style={S.td}><strong>2</strong></td>
            </tr>
            <tr>
              <td style={S.td}>3. Desvio-padrão</td>
              <td style={S.td}><InlineMath math="\sqrt{\sigma_B^2 + \epsilon} \approx \sqrt{2}" /></td>
              <td style={S.td}><strong>≈ 1.414</strong></td>
            </tr>
            <tr>
              <td style={S.td}>4. Normalizar <InlineMath math="x_1=2" /></td>
              <td style={S.td}><InlineMath math="(2-4)/1.414" /></td>
              <td style={S.td}><strong>≈ −1.414</strong></td>
            </tr>
            <tr>
              <td style={S.td}>4. Normalizar <InlineMath math="x_2=x_3=4" /></td>
              <td style={S.td}><InlineMath math="(4-4)/1.414" /></td>
              <td style={S.td}><strong>0</strong></td>
            </tr>
            <tr>
              <td style={S.td}>4. Normalizar <InlineMath math="x_4=6" /></td>
              <td style={S.td}><InlineMath math="(6-4)/1.414" /></td>
              <td style={S.td}><strong>≈ +1.414</strong></td>
            </tr>
            <tr>
              <td style={S.td}>5. Aplicar γ, β</td>
              <td style={S.td}><InlineMath math="y_i = 1 \cdot \hat{x}_i + 0" /></td>
              <td style={S.td}><InlineMath math="[-1.414,\ 0,\ 0,\ 1.414]" /></td>
            </tr>
          </tbody>
        </table>

        <p style={S.p}>
          Resultado: o batch original <InlineMath math="[2,4,4,6]" /> (média 4, variância 2) é transformado em{' '}
          <InlineMath math="[-1.414, 0, 0, 1.414]" />, com média 0 e variância 1 — exactamente a normalização
          desejada. Se <InlineMath math="\gamma" /> e <InlineMath math="\beta" /> fossem aprendidos como, por
          exemplo, <InlineMath math="\gamma=2, \beta=5" />, o resultado final seria{' '}
          <InlineMath math="[5-2.828,\ 5,\ 5,\ 5+2.828]" /> — a rede "desfaz" parcialmente a normalização se isso
          ajudar a minimizar a perda.
        </p>

        <h3 style={S.h3}>Treino vs inferência: running statistics</h3>
        <p style={S.p}>
          Durante o treino, <InlineMath math="\mu_B" /> e <InlineMath math="\sigma_B^2" /> são calculados a
          partir do mini-batch actual. Mas na inferência muitas vezes processamos um único exemplo (ou um batch
          pequeno e arbitrário) — não faz sentido normalizar com as estatísticas desse exemplo. Por isso, durante
          o treino, o BN mantém também médias móveis (<em>running mean</em> e <em>running variance</em>) sobre
          todos os mini-batches vistos. Na inferência, usam-se essas estatísticas acumuladas — fixas — em vez das
          do batch actual.
        </p>

        <div style={S.note}>
          BatchNorm falha (ou degrada-se) com batches muito pequenos (1–4 exemplos): a estimativa de{' '}
          <InlineMath math="\mu_B" /> e <InlineMath math="\sigma_B^2" /> torna-se ruidosa e instável. Nestes
          casos, LayerNorm ou GroupNorm são preferíveis (ver secção seguinte).
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: LayerNorm vs GroupNorm vs BatchNorm vs InstanceNorm === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. LayerNorm, GroupNorm, InstanceNorm — Alternativas ao BatchNorm</h2>
        <p style={S.p}>
          Para um tensor de activações com shape <InlineMath math="(N, C, H, W)" /> — N exemplos no batch, C
          canais, H×W dimensões espaciais — a diferença entre as várias normalizações está em{' '}
          <strong>sobre que eixos</strong> se calcula a média e a variância.
        </p>

        <NormAxesDiagram />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Técnica</th>
              <th style={S.th}>Normaliza sobre</th>
              <th style={S.th}>Depende do batch?</th>
              <th style={S.th}>Melhor para</th>
              <th style={S.th}>Limitação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>BatchNorm</strong></td>
              <td style={S.td}>N, H, W (por canal)</td>
              <td style={S.td}>Sim</td>
              <td style={S.td}>CNNs com batch grande (≥16)</td>
              <td style={S.td}>Falha com batch pequeno; comportamento diferente treino/inferência</td>
            </tr>
            <tr>
              <td style={S.td}><strong>LayerNorm</strong></td>
              <td style={S.td}>C, H, W (por exemplo)</td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Transformers, RNNs, LLMs</td>
              <td style={S.td}>Ignora estatísticas partilhadas entre exemplos</td>
            </tr>
            <tr>
              <td style={S.td}><strong>GroupNorm</strong></td>
              <td style={S.td}>subgrupo de C, H, W</td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Detecção, segmentação, batch=1</td>
              <td style={S.td}>Hiperparâmetro extra: nº de grupos</td>
            </tr>
            <tr>
              <td style={S.td}><strong>InstanceNorm</strong></td>
              <td style={S.td}>H, W (por exemplo, por canal)</td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Style transfer, geração de imagem</td>
              <td style={S.td}>Ignora correlações entre canais</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Casos de uso</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '0.9rem', border: '1px solid rgba(138,180,248,0.3)' }}>
            <div style={{ fontWeight: 700, color: '#bae6fd', marginBottom: '0.3rem' }}>CNNs clássicas (ResNet, VGG)</div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
              BatchNorm: o batch é normalmente grande e as estatísticas por canal através de N, H, W são estáveis
              e informativas.
            </p>
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '0.9rem', border: `1px solid ${color}30` }}>
            <div style={{ fontWeight: 700, color, marginBottom: '0.3rem' }}>Transformers / LLMs</div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
              LayerNorm: sequências têm comprimentos variáveis e o batch pode mudar de tamanho — normalizar por
              exemplo (independente do batch) é mais robusto.
            </p>
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '0.9rem', border: '1px solid rgba(74,158,237,0.10)' }}>
            <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.3rem' }}>Detecção / segmentação</div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
              GroupNorm: imagens de alta resolução forçam batches pequenos (1–2) por limitação de memória — BN
              seria instável; GroupNorm não depende do tamanho do batch.
            </p>
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '0.9rem', border: '1px solid rgba(2,132,199,0.3)' }}>
            <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.3rem' }}>Style transfer</div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
              InstanceNorm: normalizar cada imagem e canal independentemente remove informação de "estilo"
              global (contraste, brilho), permitindo transferi-la separadamente.
            </p>
          </div>
        </div>

        <p style={S.p}>
          Notas sobre casos especiais: com <InlineMath math="G=1" /> grupo, GroupNorm equivale a LayerNorm
          (normaliza todos os canais juntos); com <InlineMath math="G=C" /> grupos (um por canal), GroupNorm
          equivale a InstanceNorm. GroupNorm é, portanto, uma generalização que interpola entre os dois extremos.
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: Weight decay / L2 === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Weight Decay e Regularização L2</h2>
        <p style={S.p}>
          A regularização <strong>L2</strong> adiciona um termo de penalização à função de perda, proporcional à
          soma dos quadrados de todos os pesos da rede:
        </p>

        <div style={S.math}>
          <BlockMath math={`L_{reg}(W) = L(W) + \\frac{\\lambda}{2} \\sum_{i} w_i^2`} />
        </div>

        <p style={S.p}>
          O hiperparâmetro <InlineMath math="\lambda" /> (lambda) controla a força da penalização: quanto maior,
          mais a rede é "punida" por ter pesos com magnitude elevada.
        </p>

        <h3 style={S.h3}>Como afecta o gradiente e a actualização</h3>
        <p style={S.p}>
          Derivando <InlineMath math="L_{reg}" /> em relação a um peso <InlineMath math="w" />, o termo extra
          contribui com <InlineMath math="\lambda w" />:
        </p>

        <div style={S.math}>
          <BlockMath math={`\\frac{\\partial L_{reg}}{\\partial w} = \\frac{\\partial L}{\\partial w} + \\lambda w`} />
        </div>

        <p style={S.p}>
          Substituindo na regra de actualização do gradiente descendente com taxa de aprendizagem{' '}
          <InlineMath math="\eta" />:
        </p>

        <div style={S.math}>
          <BlockMath math={`w \\leftarrow w - \\eta \\left( \\frac{\\partial L}{\\partial w} + \\lambda w \\right) = \\underbrace{(1 - \\eta\\lambda)}_{\\text{factor de "decaimento"}} w - \\eta \\frac{\\partial L}{\\partial w}`} />
        </div>

        <p style={S.p}>
          O termo <InlineMath math="(1-\eta\lambda)" /> é sempre ligeiramente menor que 1 (assumindo{' '}
          <InlineMath math="\eta\lambda > 0" /> pequeno). Em cada passo, antes mesmo de aplicar o gradiente da
          perda, o peso é multiplicado por esse factor — encolhendo-o ligeiramente em direcção a zero. Daí o nome{' '}
          <strong>"weight decay"</strong> (decaimento de peso).
        </p>

        <WeightShrinkDiagram />

        <h3 style={S.h3}>L2 com SGD vs com Adam</h3>
        <p style={S.p}>
          Em SGD puro, adicionar <InlineMath math="\lambda w" /> ao gradiente é matematicamente equivalente a
          multiplicar <InlineMath math="w" /> por <InlineMath math="(1-\eta\lambda)" /> em cada passo — os dois
          termos "weight decay" e "L2 regularization" são intercambiáveis. Em <strong>Adam</strong> (e
          variantes), porém, o gradiente é reescalado adaptativamente por estatísticas acumuladas — isso dilui o
          efeito do termo <InlineMath math="\lambda w" /> de forma inconsistente entre parâmetros. O optimizador{' '}
          <strong>AdamW</strong> resolve isto aplicando o decaimento <em>directamente</em> aos pesos, fora do
          cálculo adaptativo do gradiente — restaurando a equivalência conceptual entre L2 e weight decay.
        </p>

        <div style={S.note}>
          Intuição geométrica: pesos pequenos correspondem a funções mais "suaves" (menos sensíveis a pequenas
          mudanças na entrada). Penalizar pesos grandes é, por isso, uma forma de preferir modelos mais simples —
          consistente com o princípio da navalha de Occam.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Early stopping === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Early Stopping</h2>
        <p style={S.p}>
          O <strong>early stopping</strong> é, na prática, a forma mais simples e mais usada de regularização: em
          vez de treinar até convergência total no conjunto de treino, monitoriza-se o loss de validação e
          interrompe-se o treino quando este deixa de melhorar.
        </p>

        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Early Stopping com "patience"</p>
          <svg viewBox="0 0 540 200" style={{ maxWidth: '100%', height: 'auto' }}>
            <defs>
              <marker id="arrES" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
              </marker>
            </defs>
            <line x1="50" y1="170" x2="500" y2="170" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrES)" />
            <line x1="50" y1="170" x2="50" y2="20" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrES)" />
            <text x="40" y="15" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Loss</text>
            <text x="500" y="190" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Épocas</text>

            <path d="M 50 160 C 130 100, 220 60, 320 35 C 400 22, 460 14, 500 10"
              fill="none" stroke="#bae6fd" strokeWidth="2.5" />
            <path d="M 50 165 C 130 105, 220 70, 290 60 C 340 65, 400 90, 500 135"
              fill="none" stroke="#4a9eed" strokeWidth="2.5" />

            <circle cx="290" cy="60" r="6" fill="#4a9eed" stroke="var(--bg-primary)" strokeWidth="1.5" />
            <line x1="290" y1="20" x2="290" y2="170" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x="290" y="14" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">melhor val loss</text>

            <rect x="290" y="20" width="100" height="150" fill="#0284c7" opacity="0.08" />
            <text x="340" y="185" textAnchor="middle" fill="#0284c7" fontSize="10">janela de "patience"</text>

            <line x1="390" y1="20" x2="390" y2="170" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="2,2" />
            <text x="390" y="14" textAnchor="middle" fill="#0284c7" fontSize="10" fontWeight="700">treino parado aqui</text>

            <line x1="60" y1="195" x2="85" y2="195" stroke="#bae6fd" strokeWidth="2.5" />
            <text x="90" y="199" fill="var(--text-secondary)" fontSize="9">treino</text>
            <line x1="140" y1="195" x2="165" y2="195" stroke="#4a9eed" strokeWidth="2.5" />
            <text x="170" y="199" fill="var(--text-secondary)" fontSize="9">validação</text>
          </svg>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            O modelo é guardado sempre que o loss de validação atinge um novo mínimo. Se o loss de validação não
            melhorar durante <InlineMath math="N" /> épocas consecutivas (a "patience"), o treino pára e
            recupera-se o checkpoint com o melhor loss de validação — não o último.
          </p>
        </div>

        <h3 style={S.h3}>Componentes práticos</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Componente</th>
              <th style={S.th}>Função</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Métrica monitorizada</strong></td>
              <td style={S.td}>Loss de validação (ou métrica relevante: F1, accuracy de validação)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Patience</strong></td>
              <td style={S.td}>Nº de épocas sem melhoria toleradas antes de parar (ex: 5–10)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>min_delta</strong></td>
              <td style={S.td}>Melhoria mínima para contar como "progresso" (evita parar por ruído)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Checkpointing</strong></td>
              <td style={S.td}>Guardar os pesos sempre que se atinge um novo melhor val loss</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Restauração</strong></td>
              <td style={S.td}>No fim, recarregar os pesos do melhor checkpoint, não os finais</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          Early stopping é praticamente "gratuito": não adiciona hiperparâmetros de penalização nem altera a
          arquitectura — apenas exige monitorizar a validação e guardar checkpoints. É quase sempre usado em
          conjunto com outras técnicas de regularização, não como substituto.
        </div>
      </div>
</div>
  );
}
