import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const S = {
  page:    { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back:    { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag:     { display: 'inline-block', background: 'transparent', color: '#4a9eed', border: '1.5px solid #4a9eed', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1:      { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead:    { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2:      { fontSize: '1.4rem', fontWeight: 700, color: '#4a9eed', borderLeft: '3px solid #4a9eed', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3:      { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p:       { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table:   { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th:      { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td:      { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note:    { background: 'rgba(74,158,237,0.06)', borderLeft: '3px solid #4a9eed', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

/* ── Fitness Deceptivo ── */
const DeceptiveFitnessDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
      Fitness Deceptivo — o gradiente aponta na direcção errada
    </p>
    {/* Labirinto */}
    <svg viewBox="0 0 340 210" style={{ maxWidth: '100%', height: 'auto', display: 'block', marginBottom: '1rem' }}>
      <defs>
        <marker id="arr-ns" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#4a9eed"/>
        </marker>
        <marker id="arr-ns2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#4a9eed"/>
        </marker>
      </defs>
      <text x="170" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">LABIRINTO COM FITNESS DECEPTIVO</text>

      {/* Outer walls */}
      <rect x="20" y="22" width="295" height="7" fill="rgba(74,158,237,0.45)" rx="2"/>{/* top */}
      <rect x="20" y="22" width="7"   height="168" fill="rgba(74,158,237,0.45)" rx="2"/>{/* left */}
      <rect x="20" y="183" width="295" height="7" fill="rgba(74,158,237,0.45)" rx="2"/>{/* bottom */}
      <rect x="308" y="22" width="7" height="75" fill="rgba(74,158,237,0.45)" rx="2"/>{/* right-top (stops at y=97) */}
      <rect x="308" y="135" width="7" height="55" fill="rgba(74,158,237,0.45)" rx="2"/>{/* right-bottom (starts at y=135) */}
      {/* EXIT gap: y=97 to y=135 on right wall */}

      {/* Interior T-divider */}
      <rect x="85" y="29" width="7" height="76" fill="rgba(74,158,237,0.45)" rx="2"/>{/* vertical: left wall of upper chamber */}
      <rect x="85" y="98" width="196" height="7" fill="rgba(74,158,237,0.45)" rx="2"/>{/* horizontal: floor of upper chamber */}

      {/* TRAP box (dashed) — inside upper chamber */}
      <rect x="160" y="40" width="60" height="38" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" strokeDasharray="5,3"/>
      <text x="190" y="58" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">TRAP</text>
      <text x="190" y="70" textAnchor="middle" fill="#4a9eed" fontSize="7.5">dead end</text>

      {/* EXIT label at right gap */}
      <rect x="296" y="97" width="36" height="38" rx="4" fill="rgba(74,158,237,0.15)" stroke="#4a9eed" strokeWidth="2"/>
      <text x="314" y="113" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">SAÍDA</text>
      <text x="314" y="125" textAnchor="middle" fill="#4a9eed" fontSize="7">real</text>

      {/* Agent A — lower corridor */}
      <circle cx="50" cy="148" r="11" fill="rgba(74,158,237,0.2)" stroke="#4a9eed" strokeWidth="2"/>
      <text x="50" y="152" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">A</text>

      {/* Dashed path: fitness (wrong) — up left gap into upper chamber → TRAP */}
      <path d="M 50,137 L 50,35 Q 75,32 160,55" fill="none" stroke="#4a9eed" strokeWidth="1.8" strokeDasharray="5,3" markerEnd="url(#arr-ns)"/>
      <text x="22" y="100" fill="#4a9eed" fontSize="7.5" fontWeight="700" transform="rotate(-90,30,90)">fitness ↑ (errado)</text>

      {/* Solid path: novelty — right along lower corridor → EXIT */}
      <path d="M 61,148 L 280,148 L 296,116" fill="none" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#arr-ns2)"/>
      <text x="170" y="170" textAnchor="middle" fill="#4a9eed" fontSize="7.5" fontWeight="700">novidade → explora → encontra saída real</text>
    </svg>

    {/* Comparação */}
    <svg viewBox="0 0 500 175" style={{ maxWidth: '100%', height: 'auto', display: 'block' }}>
      <rect x="10" y="10" width="480" height="158" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <text x="250" y="28" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">COMPARAÇÃO FITNESS vs NOVIDADE</text>
      <line x1="120" y1="35" x2="120" y2="160" stroke="var(--text-secondary)" strokeWidth="1"/>
      <line x1="300" y1="35" x2="300" y2="160" stroke="var(--text-secondary)" strokeWidth="1"/>
      <text x="205" y="46" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Fitness</text>
      <text x="395" y="46" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Novelty Search</text>
      {[
        { y: 70,  label: 'Critério',     f: 'Maximizar f(x)',          n: 'Maximizar novidade ρ(x)' },
        { y: 95,  label: 'Fitness de x', f: 'f(x) = dist. à saída',   n: 'ρ(x) = dist. k vizinhos' },
        { y: 120, label: 'Resultado',    f: 'Preso na armadilha',      n: 'Cobre espaço → encontra saída' },
        { y: 145, label: 'Arquivo',      f: 'Não existe',              n: 'Guarda comportamentos vistos' },
      ].map(({ y, label, f, n }) => (
        <g key={y}>
          <text x="20"  y={y} fill="var(--text-secondary)" fontSize="9" fontWeight="700">{label}</text>
          <text x="130" y={y} fill="#4a9eed" fontSize="9">{f}</text>
          <text x="310" y={y} fill="#4a9eed" fontSize="9">{n}</text>
        </g>
      ))}
    </svg>
  </div>
);

/* ── MAP-Elites Grid ── */
const MAPElitesDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
      MAP-Elites — Grelha de Comportamentos (exemplo: robô bípede)
    </p>
    <svg viewBox="0 0 700 290" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* X axis label */}
      <text x="370" y="16" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">dim. comportamento 1: velocidade (m/s)</text>

      {/* Y axis label — rotated, far left */}
      <text x="12" y="145" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700" transform="rotate(-90 12 145)">dim. 2: % pernas activas</text>

      {/* Grid 5×5 — shifted right to make room for Y label */}
      {Array.from({ length: 5 }, (_, row) =>
        Array.from({ length: 5 }, (_, col) => {
          const x = 80 + col * 110;
          const y = 28 + row * 46;
          const hasElite = !((row === 0 && col === 4) || (row === 4 && col === 0) || (row === 4 && col === 4));
          const fitness = hasElite ? (0.4 + Math.sin(row + col * 0.8) * 0.3 + col * 0.04 + row * 0.02).toFixed(2) : null;
          const color = fitness ? `rgba(74,158,237,${0.1 + parseFloat(fitness) * 0.5})` : 'rgba(100,100,100,0.05)';
          const strokeC = fitness ? '#4a9eed' : 'var(--card-border)';
          return (
            <g key={`${row}-${col}`}>
              <rect x={x} y={y} width={104} height={40} rx="5"
                fill={color} stroke={strokeC} strokeWidth={fitness ? 1.5 : 1}/>
              {fitness
                ? <text x={x + 52} y={y + 25} textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">f={fitness}</text>
                : <text x={x + 52} y={y + 25} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">vazio</text>
              }
            </g>
          );
        })
      )}

      {/* X axis ticks */}
      {['0.5','1.0','1.5','2.0','2.5'].map((v, i) => (
        <text key={v} x={132 + i * 110} y={268} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">{v}</text>
      ))}
      {/* Y axis ticks */}
      {['100%','75%','50%','25%','0%'].map((v, i) => (
        <text key={v} x="74" y={48 + i * 46} textAnchor="end" fill="var(--text-secondary)" fontSize="9">{v}</text>
      ))}

      {/* Highlight best cell */}
      <rect x={80 + 3 * 110} y={28 + 1 * 46} width={104} height={40} rx="5"
        fill="none" stroke="#4a9eed" strokeWidth="2.5"/>
      <text x={80 + 3 * 110 + 52} y={28 + 1 * 46 - 5} textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">melhor deste nicho</text>

      <text x="350" y="284" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">
        Cada célula guarda o melhor indivíduo para aquela combinação de comportamentos
      </text>
    </svg>
  </div>
);

export default function NEL10() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/nel" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>MÓDULO 09</div>
        <h1 style={S.h1}>Quality-Diversity</h1>

        {/* ── 1. Motivação ── */}
        <div style={S.section}>
          <h2 style={S.h2}>1. O Problema do Fitness Deceptivo</h2>
          <p style={S.p}>A maioria dos algoritmos evolutivos assume que o fitness é uma boa bússola — que seguir o gradiente de fitness conduz ao óptimo global. Esta suposição falha em problemas com <strong>fitness deceptivo</strong>: o gradiente aponta na direcção errada, criando armadilhas que os algoritmos guiados por objectivo não conseguem evitar.</p>
          <p style={S.p}>O exemplo canónico é um labirinto com uma câmara próxima da saída marcada: o fitness recompensa "chegar perto da saída aparente", mas a saída real está do lado oposto, acessível apenas por um caminho que passa por zonas de fitness baixo. Qualquer algoritmo que siga o gradiente de fitness fica preso na câmara.</p>

          <DeceptiveFitnessDiagram />

          <p style={S.p}>O fitness deceptivo não é uma curiosidade académica — está omnipresente em robótica adaptativa, design de comportamentos, e qualquer problema onde o caminho para a solução passa por regiões de baixo desempenho intermédio.</p>
        </div>

        <hr style={S.divider} />

        {/* ── 2. Novelty Search ── */}
        <div style={S.section}>
          <h2 style={S.h2}>2. Novelty Search — Explorar em vez de Optimizar</h2>
          <p style={S.p}>O Novelty Search (Lehman & Stanley, 2011) propõe uma solução radical: <strong>ignorar completamente o objectivo</strong>. Em vez de maximizar <InlineMath math="f(x)" />, maximiza-se a <em>novidade</em> do comportamento — quão diferente é este indivíduo de tudo o que já foi visto.</p>

          <h3 style={S.h3}>Definição de Novidade</h3>
          <p style={S.p}>Cada indivíduo é caracterizado pelo seu <strong>vector de comportamento</strong> <InlineMath math="b(x)" /> — uma descrição compacta do que o indivíduo faz (e.g., posição final no labirinto, sequência de movimentos, forças aplicadas). A novidade de x é a distância média aos k vizinhos mais próximos no arquivo de comportamentos já visitados:</p>
          <div style={S.math}>
            <BlockMath math="\rho(x) = \dfrac{1}{k} \sum_{i=1}^{k} \mathrm{dist}(b(x),\, b_i)" />
          </div>
          <p style={S.p}>onde bᵢ são os k comportamentos mais próximos no arquivo. O indivíduo mais diferente de tudo o que já existe tem novidade mais alta — e é este o critério de selecção.</p>

          <h3 style={S.h3}>O Arquivo de Comportamentos</h3>
          <p style={S.p}>O arquivo cresce ao longo da evolução: indivíduos suficientemente novos (<InlineMath math="\rho(x) > \rho_{\min}" />) são adicionados. No final, o arquivo contém uma cobertura densa do espaço de comportamentos — e o objectivo, se existir solução, tende a ser encontrado "por acidente" durante a exploração sistemática.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>EA com Fitness</th><th style={S.th}>Novelty Search</th></tr></thead>
              <tbody>
                {[
                  ['Critério de selecção', 'f(x) — qualidade da solução', 'ρ(x) — diferença comportamental'],
                  ['Convergência', 'Para no óptimo local (armadilha)', 'Continua a explorar sistematicamente'],
                  ['Fitness deceptivo', 'Fatal — fica preso', 'Imune — não usa o objectivo'],
                  ['Arquivo', 'Não existe', 'Acumula todos os comportamentos vistos'],
                  ['Quando falha', 'Sempre que o gradiente é enganador', 'Quando o espaço de comportamentos é trivial ou infinito'],
                ].map(([a, ea, ns]) => (
                  <tr key={a}>
                    <td style={{ ...S.td, fontWeight: 600, color: 'var(--text-primary)' }}>{a}</td>
                    <td style={{ ...S.td, color: '#4a9eed' }}>{ea}</td>
                    <td style={{ ...S.td, color: '#4a9eed' }}>{ns}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>O Novelty Search levanta uma questão filosófica: se nunca olhamos para o objectivo, como o encontramos? A resposta é que a exploração sistemática de comportamentos cobre inevitavelmente o espaço de soluções — incluindo a solução. O objectivo não desaparece; apenas deixa de ser o critério de selecção.</div>
        </div>

        <hr style={S.divider} />

        {/* ── 3. MAP-Elites ── */}
        <div style={S.section}>
          <h2 style={S.h2}>3. MAP-Elites — Iluminar o Espaço de Soluções</h2>
          <p style={S.p}>O Novelty Search maximiza diversidade mas abandona qualidade. O MAP-Elites (Mouret & Clune, 2015) combina os dois: <strong>para cada nicho comportamental, manter o melhor indivíduo possível</strong>. O resultado é um mapa completo de soluções de alta qualidade para cada tipo de comportamento.</p>

          <h3 style={S.h3}>A Grelha de Nichos</h3>
          <p style={S.p}>O espaço de comportamentos é discretizado numa grelha N-dimensional. Cada célula representa uma combinação de características comportamentais (e.g., velocidade × percentagem de pernas activas para um robô). Quando um novo indivíduo é gerado e avaliado, é colocado na célula correspondente ao seu comportamento — mas só substitui o ocupante actual se tiver fitness superior.</p>

          <MAPElitesDiagram />

          <h3 style={S.h3}>Algoritmo MAP-Elites</h3>
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', marginBottom: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: 2, color: 'var(--text-primary)' }}>
            <div style={{ paddingLeft: '1rem' }}>1. Inicializar grelha vazia G[b₁][b₂]…[bₙ]</div>
            <div style={{ paddingLeft: '1rem' }}>2. Gerar população inicial aleatória, avaliar, preencher grelha</div>
            <div style={{ paddingLeft: '1rem' }}>3. <strong>Repetir:</strong></div>
            <div style={{ paddingLeft: '2rem' }}>3.1. Seleccionar indivíduo aleatório x da grelha</div>
            <div style={{ paddingLeft: '2rem' }}>3.2. Gerar x' = mutação(x)</div>
            <div style={{ paddingLeft: '2rem' }}>3.3. Avaliar f(x') e calcular b(x') → célula c</div>
            <div style={{ paddingLeft: '2rem' }}>3.4. Se G[c] vazio ou f(x') &gt; f(G[c]): G[c] ← x'</div>
            <div style={{ paddingLeft: '1rem' }}>4. Retornar grelha completa (o "mapa de elites")</div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Propriedade</th><th style={S.th}>Novelty Search</th><th style={S.th}>MAP-Elites</th></tr></thead>
              <tbody>
                {[
                  ['Objectivo', 'Maximizar novidade', 'Maximizar qualidade em cada nicho'],
                  ['Output', 'Arquivo de comportamentos diversos', 'Grelha: melhor solução por nicho'],
                  ['Qualidade', 'Não garantida', 'Maximizada por célula'],
                  ['Diversidade', 'Maximizada', 'Garantida pela estrutura da grelha'],
                  ['Aplicação típica', 'Escapar de fitness deceptivo', 'Robótica adaptativa, design generativo'],
                  ['Limitação', 'Sem qualidade garantida', 'Granularidade da grelha é crítica'],
                ].map(([p, ns, me]) => (
                  <tr key={p}>
                    <td style={{ ...S.td, fontWeight: 600, color: 'var(--text-primary)' }}>{p}</td>
                    <td style={S.td}>{ns}</td>
                    <td style={{ ...S.td, color: '#4a9eed' }}>{me}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>MAP-Elites é especialmente poderoso em robótica adaptativa: o robô pode seleccionar em tempo real o comportamento mais adequado ao contexto. Com uma perna avariada, consulta a grelha e usa a melhor política para "75% de pernas activas" — sem re-treinar.</div>
        </div>

        <hr style={S.divider} />

        {/* ── 4. QD como paradigma ── */}
        <div style={S.section}>
          <h2 style={S.h2}>4. Quality-Diversity como Paradigma</h2>
          <p style={S.p}>Novelty Search e MAP-Elites são instâncias de um paradigma mais geral chamado <strong>Quality-Diversity (QD)</strong>: encontrar uma colecção de soluções que sejam simultaneamente diversas (em comportamento) e de alta qualidade (em fitness). Não uma solução, mas um repertório.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { title: 'Quando usar QD', color: '#4a9eed', items: ['O problema tem múltiplas soluções válidas com comportamentos distintos', 'Robótica adaptativa — necessidade de fallback comportamental', 'Design generativo — explorar o espaço de designs possíveis', 'O fitness é deceptivo ou tem muitos óptimos locais equivalentes', 'Queremos compreender o espaço de soluções, não apenas a melhor'] },
              { title: 'Quando NÃO usar QD', color: '#4a9eed', items: ['Existe apenas uma solução válida e o fitness é claro', 'O espaço de comportamentos não é definível ou é trivial', 'Recursos computacionais muito limitados (QD requer muitas avaliações)', 'O problema tem estrutura exploitável por gradiente (diferenciável)'] },
            ].map(({ title, color, items }) => (
              <div key={title} style={{ background: 'var(--bg-secondary)', border: `1px solid ${color}30`, borderRadius: 10, padding: '1rem' }}>
                <div style={{ fontWeight: 700, color, marginBottom: '0.6rem', fontSize: '0.9rem' }}>{title}</div>
                {items.map(item => (
                  <div key={item} style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', lineHeight: 1.5 }}>• {item}</div>
                ))}
              </div>
            ))}
          </div>

          <table style={S.table}>
            <thead><tr><th style={S.th}>Algoritmo QD</th><th style={S.th}>Dimensões comportamento</th><th style={S.th}>Estrutura do arquivo</th><th style={S.th}>Caso de uso</th></tr></thead>
            <tbody>
              {[
                ['Novelty Search', '1 (novidade escalar)', 'Lista não estruturada', 'Fitness deceptivo, labirintos'],
                ['MAP-Elites', 'N (grelha N-dim)', 'Grelha — 1 elite por célula', 'Robótica, design, NAS'],
                ['CVT-MAP-Elites', 'N (contínuo)', 'Voronoi — células irregulares', 'Espaços comportamentais contínuos'],
                ['AURORA', 'Aprendido automaticamente', 'Grelha com features latentes', 'Quando o comportamento é desconhecido'],
              ].map(([alg, dim, struct, use]) => (
                <tr key={alg}>
                  <td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>{alg}</td>
                  <td style={S.td}>{dim}</td>
                  <td style={S.td}>{struct}</td>
                  <td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
