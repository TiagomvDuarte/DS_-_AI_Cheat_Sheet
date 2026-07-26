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
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

// === Diagram: Filter vs Wrapper vs Embedded pipelines ===
const PipelinesDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Filter vs. Wrapper vs. Embedded — Fluxos de Dados</p>
    <svg viewBox="0 0 600 290" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrPL" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
        <marker id="arrPL2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
        </marker>
      </defs>

      {/* FILTER row — boxes at x=85,235,390; w=140 each */}
      <text x="8" y="28" fill="#4a9eed" fontSize="12" fontWeight="800">FILTER</text>
      <rect x="85" y="10" width="140" height="32" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="155" y="30" textAnchor="middle" fill="#4a9eed" fontSize="10">Dados (todas features)</text>
      <line x1="225" y1="26" x2="233" y2="26" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrPL)" />
      <rect x="235" y="10" width="140" height="32" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="305" y="30" textAnchor="middle" fill="#4a9eed" fontSize="10">Score estatístico</text>
      <line x1="375" y1="26" x2="383" y2="26" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrPL)" />
      <rect x="385" y="10" width="140" height="32" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="455" y="30" textAnchor="middle" fill="#4a9eed" fontSize="10">Top-k features</text>
      <line x1="455" y1="42" x2="455" y2="60" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrPL)" />
      <rect x="385" y="60" width="140" height="28" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="455" y="78" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">Modelo final</text>

      {/* WRAPPER row */}
      <text x="8" y="128" fill="#4a9eed" fontSize="12" fontWeight="800">WRAPPER</text>
      <rect x="85" y="110" width="140" height="32" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="155" y="130" textAnchor="middle" fill="#4a9eed" fontSize="10">Subset candidato</text>
      <line x1="225" y1="126" x2="233" y2="126" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrPL)" />
      <rect x="235" y="110" width="140" height="32" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="305" y="130" textAnchor="middle" fill="#4a9eed" fontSize="10">Treina + avalia modelo</text>
      <path d="M 305 142 C 305 172, 155 172, 155 142" fill="none" stroke="#4a9eed" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arrPL2)" />
      <text x="230" y="185" textAnchor="middle" fill="#4a9eed" fontSize="9">repete (loop de busca)</text>
      <line x1="375" y1="126" x2="383" y2="126" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrPL)" />
      <rect x="385" y="110" width="140" height="32" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="455" y="130" textAnchor="middle" fill="#4a9eed" fontSize="10">Melhor subset</text>
      <line x1="455" y1="142" x2="455" y2="160" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrPL)" />
      <rect x="385" y="160" width="140" height="28" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="455" y="178" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">Modelo final</text>

      {/* EMBEDDED row */}
      <text x="8" y="232" fill="#4a9eed" fontSize="12" fontWeight="800">EMBEDDED</text>
      <rect x="85" y="214" width="140" height="32" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="155" y="234" textAnchor="middle" fill="#4a9eed" fontSize="10">Dados (todas features)</text>
      <line x1="225" y1="230" x2="233" y2="230" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrPL)" />
      <rect x="235" y="214" width="140" height="32" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="305" y="227" textAnchor="middle" fill="#4a9eed" fontSize="10">Treino com</text>
      <text x="305" y="240" textAnchor="middle" fill="#4a9eed" fontSize="10">regularização (L1/L2)</text>
      <line x1="375" y1="230" x2="383" y2="230" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrPL)" />
      <rect x="385" y="210" width="140" height="40" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="455" y="227" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">Modelo final</text>
      <text x="455" y="241" textAnchor="middle" fill="#4a9eed" fontSize="9">(features já seleccionadas)</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Nos métodos <strong>Filter</strong>, a selecção é feita uma única vez, antes de qualquer modelo, usando
      apenas estatísticas dos dados. Nos métodos <strong>Wrapper</strong>, o modelo é treinado repetidamente
      dentro de um loop de busca, e cada subset de features é avaliado pelo desempenho real do modelo — muito
      mais caro, mas potencialmente mais preciso. Nos métodos <strong>Embedded</strong>, a selecção acontece
      "dentro" do próprio algoritmo de treino — por exemplo, a regularização L1 do LASSO zera coeficientes
      automaticamente enquanto o modelo é ajustado.
    </p>
  </div>
);

// === Diagram: Curse of dimensionality — sparsity growth ===
const CurseDiagram = () => {
  const dims = [1, 2, 3];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Curse of Dimensionality — Esparsidade Cresce com a Dimensão</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        {/* 1D: line with 5 points */}
        <div>
          <svg viewBox="0 0 140 140" width="140" height="140">
            <line x1="15" y1="70" x2="125" y2="70" stroke="var(--text-secondary)" strokeWidth="1.5" />
            {[25, 45, 65, 85, 105].map((x, i) => (
              <circle key={i} cx={x} cy="70" r="4" fill={color} />
            ))}
          </svg>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>1D: 5 pontos cobrem bem a recta</p>
        </div>
        {/* 2D: grid with 5 points scattered */}
        <div>
          <svg viewBox="0 0 140 140" width="140" height="140">
            <rect x="15" y="15" width="110" height="110" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" />
            {[[30, 30], [95, 50], [55, 100], [105, 110], [25, 105]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="4" fill="#0284c7" />
            ))}
          </svg>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>2D: 5 pontos já cobrem mal o quadrado</p>
        </div>
        {/* 3D: cube wireframe with sparse points */}
        <div>
          <svg viewBox="0 0 140 140" width="140" height="140">
            <polygon points="25,30 95,30 110,50 40,50" fill="none" stroke="var(--text-secondary)" strokeWidth="1.2" />
            <polygon points="25,30 25,110 95,110 95,30" fill="none" stroke="var(--text-secondary)" strokeWidth="1.2" />
            <polygon points="40,50 110,50 110,130 40,130" fill="none" stroke="var(--text-secondary)" strokeWidth="1.2" />
            <line x1="25" y1="110" x2="40" y2="130" stroke="var(--text-secondary)" strokeWidth="1.2" />
            <line x1="95" y1="110" x2="110" y2="130" stroke="var(--text-secondary)" strokeWidth="1.2" />
            <line x1="95" y1="30" x2="110" y2="50" stroke="var(--text-secondary)" strokeWidth="1.2" />
            {[[45, 60], [85, 95]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="4" fill="#4a9eed" />
            ))}
          </svg>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>3D: apenas 2 pontos "perdidos" no cubo</p>
        </div>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
        Com o mesmo número de pontos (5), à medida que aumentamos o número de dimensões, o <strong>volume do
        espaço cresce exponencialmente</strong> (<InlineMath math="10^d" /> para uma grelha com 10 divisões por
        eixo), enquanto o número de exemplos permanece constante. Os dados tornam-se cada vez mais
        <strong> esparsos</strong> — qualquer ponto está, em média, longe de todos os outros, o que torna
        noções como "vizinhança" (essenciais em KNN, kernels, etc.) cada vez menos informativas. Reduzir o
        número de features (ou de dimensões) é uma forma directa de combater este efeito.
      </p>
    </div>
  );
};

// === Diagram: L1 (diamond) vs L2 (circle) constraint regions ===
const RegularizationGeometryDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Geometria da Regularização — L1 (LASSO) vs. L2 (Ridge)</p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
      <div>
        <svg viewBox="0 0 160 160" width="160" height="160">
          <line x1="15" y1="80" x2="145" y2="80" stroke="var(--text-secondary)" strokeWidth="1" />
          <line x1="80" y1="15" x2="80" y2="145" stroke="var(--text-secondary)" strokeWidth="1" />
          <text x="148" y="84" fontSize="9" fill="var(--text-secondary)">β₁</text>
          <text x="84" y="14" fontSize="9" fill="var(--text-secondary)">β₂</text>
          {/* L1 diamond */}
          <polygon points="80,30 130,80 80,130 30,80" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
          {/* elliptical contours of loss, off-center, intersecting a corner */}
          {[1, 2, 3].map((s, i) => (
            <ellipse key={i} cx="110" cy="55" rx={20 + s * 14} ry={14 + s * 9} fill="none" stroke={color} strokeWidth="1" opacity={0.5} />
          ))}
          <circle cx="80" cy="30" r="4" fill="#4a9eed" />
          <text x="80" y="22" textAnchor="middle" fontSize="8" fill="#4a9eed" fontWeight="700">solução (β₁=0)</text>
        </svg>
        <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4a9eed', margin: 0 }}>L1 — região em diamante</p>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0 }}>vértices nos eixos → coeficientes exactamente 0</p>
      </div>
      <div>
        <svg viewBox="0 0 160 160" width="160" height="160">
          <line x1="15" y1="80" x2="145" y2="80" stroke="var(--text-secondary)" strokeWidth="1" />
          <line x1="80" y1="15" x2="80" y2="145" stroke="var(--text-secondary)" strokeWidth="1" />
          <text x="148" y="84" fontSize="9" fill="var(--text-secondary)">β₁</text>
          <text x="84" y="14" fontSize="9" fill="var(--text-secondary)">β₂</text>
          {/* L2 circle */}
          <circle cx="80" cy="80" r="50" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
          {[1, 2, 3].map((s, i) => (
            <ellipse key={i} cx="110" cy="55" rx={20 + s * 14} ry={14 + s * 9} fill="none" stroke={color} strokeWidth="1" opacity={0.5} />
          ))}
          <circle cx="100" cy="48" r="4" fill="#4a9eed" />
          <text x="100" y="40" textAnchor="middle" fontSize="8" fill="#4a9eed" fontWeight="700">solução (β≠0)</text>
        </svg>
        <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4a9eed', margin: 0 }}>L2 — região circular</p>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0 }}>fronteira suave → coeficientes pequenos, raramente 0</p>
      </div>
    </div>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
      A solução óptima de um problema regularizado é o ponto onde os <strong>contornos elípticos da função de
      perda</strong> (em ciano, representando combinações de coeficientes com o mesmo erro) tocam pela primeira
      vez a <strong>região de restrição</strong> definida pela penalização. A região L1 (diamante) tem
      <strong> vértices alinhados com os eixos</strong> — é nesses vértices que a intersecção tende a ocorrer,
      forçando alguns coeficientes a ficarem exactamente em <InlineMath math="0" /> (selecção de features). A
      região L2 (círculo) não tem vértices — a intersecção tipicamente ocorre num ponto onde todos os
      coeficientes são pequenos mas diferentes de zero (shrinkage, sem selecção explícita).
    </p>
  </div>
);

// === Diagram: Wrapper search tree (forward/backward) ===
const WrapperSearchDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Forward Selection vs. Backward Elimination vs. RFE</p>
    <svg viewBox="0 0 560 170" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrWS" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      {/* Forward */}
      <text x="10" y="20" fill="#4a9eed" fontSize="11" fontWeight="800">Forward</text>
      {['{}', '{x₂}', '{x₂,x₅}', '{x₂,x₅,x₁}'].map((label, i) => (
        <g key={i}>
          <rect x={10 + i * 135} y="30" width="120" height="28" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
          <text x={70 + i * 135} y="48" textAnchor="middle" fill="#4a9eed" fontSize="11" fontFamily="monospace">{label}</text>
          {i < 3 && <line x1={130 + i * 135} y1="44" x2={145 + i * 135} y2="44" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrWS)" />}
        </g>
      ))}
      {/* Backward */}
      <text x="10" y="85" fill="#4a9eed" fontSize="11" fontWeight="800">Backward</text>
      {['{x₁..x₅}', '{x₁,x₂,x₃,x₅}', '{x₁,x₂,x₅}', '{x₂,x₅}'].map((label, i) => (
        <g key={i}>
          <rect x={10 + i * 135} y="95" width="120" height="28" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
          <text x={70 + i * 135} y="113" textAnchor="middle" fill="#4a9eed" fontSize="11" fontFamily="monospace">{label}</text>
          {i < 3 && <line x1={130 + i * 135} y1="109" x2={145 + i * 135} y2="109" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrWS)" />}
        </g>
      ))}
      <text x="10" y="150" fill="var(--text-secondary)" fontSize="10">
        RFE = Backward Elimination usando a importância/peso atribuído pelo próprio modelo para escolher quem remover em cada passo
      </text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Em <strong>Forward Selection</strong> começamos com o conjunto vazio e, em cada passo, adicionamos a
      feature que mais melhora o desempenho do modelo (treinado e avaliado de novo a cada tentativa). Em
      <strong> Backward Elimination</strong> fazemos o inverso: começamos com todas as features e removemos,
      em cada passo, a que menos contribui. <strong>RFE (Recursive Feature Elimination)</strong> é uma forma
      eficiente de backward elimination: treina o modelo uma vez, usa os coeficientes/importâncias para
      ordenar as features, remove a menos importante, e repete — evitando reavaliar todas as combinações
      possíveis.
    </p>
  </div>
);

export default function ML3() {
  return (
    <div style={S.page}>
      <Link to="/ml" style={S.back}><ArrowLeft size={16} /> Voltar a Machine Learning</Link>

      <div style={S.tag}>Module 03</div>
      <h1 style={S.h1}>Seleção de Features</h1>
      <p style={S.lead}>
        Em muitos problemas reais, temos dezenas, centenas ou milhares de variáveis candidatas — mas nem
        todas são úteis para prever o target. Algumas são redundantes (correlacionadas entre si), outras são
        puro ruído, e outras introduzem complexidade desnecessária que prejudica a generalização do modelo.
        Neste módulo vamos explorar três grandes famílias de técnicas de <strong>selecção de features</strong>:
        métodos <strong>Filter</strong> (estatísticas independentes do modelo), <strong>Wrapper</strong> (busca
        guiada pelo desempenho do modelo) e <strong>Embedded</strong> (selecção integrada no próprio treino,
        como o LASSO). Vamos também ver, em detalhe, o problema da <strong>curse of dimensionality</strong> e
        uma abordagem complementar — a <strong>redução de dimensionalidade</strong> via PCA — antes de
        terminar com uma tabela de decisão prática.
      </p>

      {/* === SECTION 1: Porquê === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Porquê Fazer Selecção de Features?</h2>
        <p style={S.p}>
          À primeira vista, parece que "mais informação é sempre melhor" — porque não dar ao modelo todas as
          variáveis disponíveis e deixá-lo decidir o que é importante? Na prática, há várias razões fortes
          para reduzir deliberadamente o número de features:
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>5 razões para seleccionar features:</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li><strong>Interpretabilidade</strong> — modelos com menos variáveis são mais fáceis de explicar a stakeholders</li>
            <li><strong>Velocidade de treino e inferência</strong> — menos colunas significa menos computação</li>
            <li><strong>Melhor generalização</strong> — menos parâmetros para ajustar reduz o risco de overfitting</li>
            <li><strong>Redundância</strong> — features altamente correlacionadas entre si não trazem informação extra</li>
            <li><strong>Curse of dimensionality</strong> — em alta dimensão, os dados tornam-se esparsos e as distâncias perdem significado</li>
          </ul>
        </div>
        <PipelinesDiagram />
        <p style={S.p}>
          As três famílias diferem principalmente em <strong>quando</strong> e <strong>como</strong> usam o
          modelo final no processo de selecção. Vamos explorá-las uma a uma, começando pelos métodos Filter.
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Filter — correlações === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Métodos Filter — Correlações</h2>
        <p style={S.p}>
          Os métodos Filter avaliam cada feature <strong>individualmente</strong>, usando uma métrica
          estatística que mede a relação entre essa feature e o target — sem treinar nenhum modelo
          preditivo. São rápidos, escaláveis e independentes do algoritmo que será usado depois.
        </p>

        <h3 style={S.h3}>Correlação de Pearson</h3>
        <p style={S.p}>
          A correlação de Pearson mede a <strong>relação linear</strong> entre duas variáveis contínuas,
          variando entre <InlineMath math="-1" /> (relação linear negativa perfeita) e <InlineMath math="+1" /> (relação
          linear positiva perfeita), passando por <InlineMath math="0" /> (sem relação linear):
        </p>
        <div style={S.math}>
          <BlockMath math="r_{XY} = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n}(x_i - \bar{x})^2 \cdot \sum_{i=1}^{n}(y_i - \bar{y})^2}}" />
        </div>

        <h3 style={S.h3}>Spearman e Kendall — Correlações de Rank</h3>
        <p style={S.p}>
          A correlação de Pearson só capta relações <strong>lineares</strong>. Se a relação entre
          <InlineMath math="X" /> e <InlineMath math="Y" /> for, por exemplo, exponencial ou logarítmica (mas
          ainda <em>monótona</em> — sempre crescente ou sempre decrescente), Pearson pode subestimar a
          associação. As correlações de <strong>rank</strong> resolvem este problema ao trabalhar não com os
          valores brutos, mas com as suas <strong>posições ordenadas (ranks)</strong>.
        </p>
        <div style={S.math}>
          <BlockMath math="r_s = 1 - \frac{6 \sum_{i=1}^{n} d_i^2}{n(n^2 - 1)} \qquad \text{onde } d_i = \text{rank}(x_i) - \text{rank}(y_i)" />
        </div>
        <p style={S.p}>
          A correlação de <strong>Kendall</strong> (<InlineMath math="\tau" />) usa uma abordagem diferente,
          baseada em pares concordantes (a ordem relativa de <InlineMath math="X" /> e <InlineMath math="Y" /> coincide)
          e discordantes (a ordem é invertida):
        </p>
        <div style={S.math}>
          <BlockMath math="\tau = \frac{N_c - N_d}{\frac{1}{2}n(n-1)}" />
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Método</th><th style={S.th}>Capta</th><th style={S.th}>Quando usar</th><th style={S.th}>Notas</th></tr></thead>
            <tbody>
              {[
                ['Pearson', 'Relações lineares', 'Variáveis contínuas, ~normais, sem outliers fortes', 'Mais sensível a outliers'],
                ['Spearman', 'Relações monótonas (lineares ou não)', 'Dados ordinais, presença de outliers', 'Baseado em ranks; empates reduzem precisão'],
                ['Kendall τ', 'Concordância de pares ordenados', 'Amostras pequenas, variáveis ordinais', 'Mais robusto que Spearman para n pequeno; valores tipicamente menores'],
              ].map(([m, c, w, n2]) => (
                <tr key={m}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{m}</td>
                  <td style={S.td}>{c}</td>
                  <td style={S.td}>{w}</td>
                  <td style={S.td}>{n2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Filter — ANOVA, Chi-Squared, MI === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Métodos Filter — ANOVA, Chi-Quadrado e Informação Mútua</h2>
        <p style={S.p}>
          As correlações da secção anterior aplicam-se a pares de variáveis <strong>contínuas</strong>. Mas
          frequentemente o target é <strong>categórico</strong> (classificação) ou a própria feature é
          categórica. Para estes casos, usamos outras três famílias de testes: ANOVA F, Chi-Quadrado e
          Informação Mútua.
        </p>

        <h3 style={S.h3}>ANOVA F — Feature Contínua, Target Categórico</h3>
        <p style={S.p}>
          O teste ANOVA (Analysis of Variance) compara a <strong>variância entre grupos</strong> (definidos
          pelas classes do target) com a <strong>variância dentro de cada grupo</strong>. Se uma feature
          discrimina bem as classes, espera-se que as suas médias variem muito entre classes (variância
          inter-grupo alta) e pouco dentro de cada classe (variância intra-grupo baixa):
        </p>
        <div style={S.math}>
          <BlockMath math="F = \frac{MS_{\text{entre}}}{MS_{\text{dentro}}} = \frac{\sum_{j=1}^{k} n_j(\bar{x}_j - \bar{x})^2 / (k-1)}{\sum_{j=1}^{k}\sum_{i=1}^{n_j}(x_{ij} - \bar{x}_j)^2 / (N-k)}" />
        </div>
        <p style={S.p}>
          Um valor de <InlineMath math="F" /> elevado (com p-value baixo) indica que a feature tem médias
          significativamente diferentes entre as classes do target — sinal de que é informativa para a
          classificação.
        </p>

        <h3 style={S.h3}>Chi-Quadrado (χ²) — Feature Categórica, Target Categórico</h3>
        <p style={S.p}>
          Quando ambas as variáveis são categóricas, usamos o teste de independência <InlineMath math="\chi^2" />,
          que compara as <strong>frequências observadas</strong> numa tabela de contingência com as
          <strong> frequências esperadas</strong> sob a hipótese de independência:
        </p>
        <div style={S.math}>
          <BlockMath math="\chi^2 = \sum_{i=1}^{r}\sum_{j=1}^{c} \frac{(O_{ij} - E_{ij})^2}{E_{ij}} \qquad E_{ij} = \frac{(\text{total linha}_i)(\text{total coluna}_j)}{N}" />
        </div>

        <h3 style={S.h3}>Informação Mútua (Mutual Information)</h3>
        <p style={S.p}>
          A Informação Mútua mede quanta <strong>incerteza sobre Y é reduzida</strong> ao conhecermos
          <InlineMath math="X" />. É zero se e só se <InlineMath math="X" /> e <InlineMath math="Y" /> forem
          completamente independentes, e captura <strong>qualquer tipo de dependência</strong> — linear ou
          não:
        </p>
        <div style={S.math}>
          <BlockMath math="I(X;Y) = \sum_{x \in X}\sum_{y \in Y} p(x,y) \cdot \log_2\left(\frac{p(x,y)}{p(x)\,p(y)}\right)" />
        </div>


        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Método</th><th style={S.th}>Tipo de feature / target</th><th style={S.th}>Mede</th><th style={S.th}>Limitação principal</th></tr></thead>
            <tbody>
              {[
                ['ANOVA F', 'Contínua / Categórico', 'Diferença de médias entre classes', 'Assume normalidade e variâncias iguais'],
                ['Chi-Quadrado', 'Categórico / Categórico', 'Desvio das frequências observadas vs. esperadas', 'Requer contagens esperadas não muito pequenas'],
                ['Informação Mútua', 'Qualquer / Qualquer (discreto)', 'Redução geral de incerteza (qualquer dependência)', 'Difícil estimar com variáveis contínuas; não indica direcção'],
              ].map(([m, t, me, l]) => (
                <tr key={m}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{m}</td>
                  <td style={S.td}>{t}</td>
                  <td style={S.td}>{me}</td>
                  <td style={S.td}>{l}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Os métodos Filter têm uma limitação importante: avaliam cada feature <strong>isoladamente</strong>.
          Duas features individualmente "fracas" podem, em combinação, ser muito informativas (e vice-versa,
          duas features fortes podem ser totalmente redundantes entre si). Para captar estas interacções,
          precisamos de métodos que avaliem <strong>subconjuntos</strong> de features — os métodos Wrapper.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: Wrapper === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Métodos Wrapper</h2>
        <p style={S.p}>
          Os métodos Wrapper "envolvem" (wrap) um modelo de machine learning dentro de um algoritmo de busca:
          em cada passo, um subconjunto de features é usado para treinar e avaliar o modelo (normalmente via
          validação cruzada), e o desempenho real do modelo guia a busca pelo subconjunto seguinte.
        </p>
        <WrapperSearchDiagram />

        <h3 style={S.h3}>Forward Selection</h3>
        <p style={S.p}>
          Começa com o conjunto de features vazio. Em cada iteração, testa adicionar cada uma das features
          restantes (uma a uma), treina o modelo, e mantém permanentemente a feature que produziu a maior
          melhoria de desempenho. Repete até que adicionar mais features deixe de melhorar (significativamente)
          o desempenho, ou até atingir um número máximo de features.
        </p>

        <h3 style={S.h3}>Backward Elimination</h3>
        <p style={S.p}>
          Começa com <strong>todas</strong> as features. Em cada iteração, remove temporariamente cada
          feature (uma a uma), re-treina o modelo, e elimina permanentemente a feature cuja remoção
          <strong> menos prejudica</strong> (ou até melhora) o desempenho. Repete até que remover mais
          features comece a prejudicar significativamente o desempenho.
        </p>

        <h3 style={S.h3}>Recursive Feature Elimination (RFE)</h3>
        <p style={S.p}>
          RFE é uma variante eficiente da eliminação backward: em vez de re-treinar o modelo testando a
          remoção de <em>cada</em> feature individualmente (o que seria <InlineMath math="O(n)" /> treinos por
          iteração), treina o modelo <strong>uma única vez</strong>, usa os coeficientes (em modelos lineares)
          ou as importâncias (em árvores) para identificar a feature menos relevante, remove-a, e repete o
          processo com o conjunto reduzido — até atingir o número desejado de features.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Método</th><th style={S.th}>Estratégia</th><th style={S.th}>Custo computacional</th><th style={S.th}>Risco principal</th></tr></thead>
            <tbody>
              {[
                ['Forward Selection', 'Adiciona a melhor feature a cada passo', 'O(n²) treinos no pior caso', 'Pode ficar "preso" em óptimos locais; não reconsidera escolhas anteriores'],
                ['Backward Elimination', 'Remove a pior feature a cada passo', 'O(n²) treinos no pior caso', 'Caro quando n é muito grande (parte de todas as features)'],
                ['RFE', 'Remove com base em importância/coeficientes do modelo', 'O(n) treinos (muito mais barato)', 'Depende da qualidade das importâncias do modelo base'],
              ].map(([m, e, c, r]) => (
                <tr key={m}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{m}</td>
                  <td style={S.td}>{e}</td>
                  <td style={S.td}>{c}</td>
                  <td style={S.td}>{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Os métodos Wrapper tendem a produzir os melhores subsets <strong>para um modelo específico</strong>,
          porque optimizam directamente a métrica que interessa. O preço é o custo computacional: cada
          avaliação de subset requer treinar (e validar) o modelo de novo, o que se torna impraticável com
          muitas features ou modelos lentos a treinar.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: Embedded — LASSO, Ridge, Elastic Net === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Métodos Embedded — LASSO, Ridge e Elastic Net</h2>
        <p style={S.p}>
          Os métodos Embedded incorporam a selecção de features <strong>directamente no processo de treino</strong>,
          tipicamente através de termos de <strong>regularização</strong> adicionados à função de perda. O
          modelo é treinado apenas uma vez (ou poucas vezes, para escolher hiperparâmetros), e a selecção
          "emerge" naturalmente dos coeficientes aprendidos.
        </p>
        <p style={S.p}>
          Considere a função de perda de uma regressão linear (erro quadrático médio), com dois termos de
          penalização adicionados:
        </p>
        <div style={S.math}>
          <BlockMath math="L_{\text{Ridge}}(\beta) = \underbrace{\sum_{i=1}^{n}(y_i - \hat{y}_i)^2}_{\text{erro}} + \lambda \sum_{j=1}^{p} \beta_j^2 \qquad \text{(L2 — Ridge)}" />
          <BlockMath math="L_{\text{LASSO}}(\beta) = \sum_{i=1}^{n}(y_i - \hat{y}_i)^2 + \lambda \sum_{j=1}^{p} |\beta_j| \qquad \text{(L1 — LASSO)}" />
          <BlockMath math="L_{\text{ElasticNet}}(\beta) = \sum_{i=1}^{n}(y_i - \hat{y}_i)^2 + \lambda \left[ \alpha \sum_{j=1}^{p}|\beta_j| + (1-\alpha)\sum_{j=1}^{p}\beta_j^2 \right]" />
        </div>
        <p style={S.p}>
          O hiperparâmetro <InlineMath math="\lambda" /> controla a <strong>força</strong> da regularização
          (<InlineMath math="\lambda = 0" /> = sem regularização; <InlineMath math="\lambda" /> grande = pesos
          fortemente penalizados). No Elastic Net, <InlineMath math="\alpha \in [0,1]" /> controla a mistura
          entre L1 e L2 (<InlineMath math="\alpha=1" /> = LASSO puro, <InlineMath math="\alpha=0" /> = Ridge puro).
        </p>

        <RegularizationGeometryDiagram />

        <h3 style={S.h3}>Porque é que o LASSO Zera Coeficientes (e o Ridge Não)?</h3>
        <p style={S.p}>
          A intuição geométrica do diagrama acima é a chave: minimizar a função de perda regularizada é
          equivalente a encontrar o ponto de menor erro <strong>dentro</strong> de uma região permitida para os
          coeficientes — um diamante para L1, um círculo para L2. Como o diamante tem <strong>vértices
          exactamente sobre os eixos</strong> (onde um ou mais coeficientes são zero), é geometricamente muito
          provável que a solução óptima caia num desses vértices — eliminando essas features do modelo. O
          círculo, por não ter vértices, raramente toca os eixos exactamente — os coeficientes ficam pequenos,
          mas não exactamente zero.
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Método</th><th style={S.th}>Penalização</th><th style={S.th}>Efeito nos coeficientes</th><th style={S.th}>Quando usar</th></tr></thead>
            <tbody>
              {[
                ['LASSO (L1)', 'Σ|βⱼ|', 'Zera coeficientes — selecção automática', 'Muitas features irrelevantes; queremos um modelo esparso/interpretável'],
                ['Ridge (L2)', 'Σβⱼ²', 'Encolhe (shrinkage) sem zerar', 'Multicolinearidade alta; queremos manter todas as features mas estabilizar'],
                ['Elastic Net', 'α·Σ|βⱼ| + (1−α)·Σβⱼ²', 'Combina selecção (L1) com estabilidade (L2)', 'Muitas features correlacionadas entre si E queremos selecção'],
              ].map(([m, pen, ef, w]) => (
                <tr key={m}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{m}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>{pen}</td>
                  <td style={S.td}>{ef}</td>
                  <td style={S.td}>{w}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Uma limitação conhecida do LASSO: quando há um grupo de features fortemente correlacionadas entre
          si, o LASSO tende a escolher <strong>arbitrariamente apenas uma</strong> delas e zerar as restantes —
          o que pode ser indesejável se todas forem teoricamente relevantes. O Elastic Net mitiga este
          comportamento ao adicionar o termo L2, que tende a distribuir o peso entre features correlacionadas
          em vez de escolher apenas uma.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Curse of Dimensionality === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Curse of Dimensionality</h2>
        <p style={S.p}>
          A "maldição da dimensionalidade" descreve um conjunto de fenómenos contra-intuitivos que ocorrem
          quando o número de dimensões (features) cresce. O problema central é que, para manter a mesma
          <strong> densidade</strong> de amostras por unidade de volume, o número de exemplos necessários
          cresce <strong>exponencialmente</strong> com o número de dimensões.
        </p>
        <CurseDiagram />
        <p style={S.p}>
          Consequências práticas da curse of dimensionality:
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li>Métodos baseados em distância (KNN, clustering) tornam-se menos eficazes — em alta dimensão, as distâncias entre quaisquer dois pontos tendem a convergir, tornando "vizinhança" pouco informativa</li>
          <li>O risco de overfitting aumenta — com muitas features e relativamente poucos exemplos, o modelo pode "memorizar" padrões espúrios em vez de aprender relações genuínas</li>
          <li>O custo computacional e de armazenamento cresce linearmente (ou pior) com o número de features</li>
        </ul>
        <p style={S.p}>
          A selecção de features (secções 1-5) é uma resposta directa a este problema: ao remover features
          irrelevantes ou redundantes, reduzimos directamente o número de dimensões. Mas existe outra
          abordagem, complementar, que não <em>elimina</em> features individuais — em vez disso,
          <strong> combina-as</strong> em novas variáveis que concentram a informação mais relevante: a
          redução de dimensionalidade.
        </p>
      </div>
    </div>
  );
}
