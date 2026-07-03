import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

function IsolationForestSVG() {
  // 40 normal points + 4 anomalies
  const seed = [
    [200,160],[220,145],[215,170],[195,155],[230,150],[205,165],[225,158],[210,162],
    [218,148],[202,172],[212,158],[228,145],[198,168],[222,155],[208,162],[232,150],
    [196,172],[226,158],[204,165],[214,148],[220,162],[200,155],[216,168],[210,150],
    [224,158],[198,162],[230,145],[206,172],[212,158],[218,165],[202,148],[228,162],
    [208,155],[222,168],[196,158],[214,162],[226,148],[204,172],[210,158],[220,165],
  ];
  const anomalies = [[310,95],[100,210],[340,180],[90,90]];

  return (
    <svg viewBox="0 0 420 260" style={{ width: '100%', maxWidth: 420, background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="210" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Isolation Forest — Espaço de Features</text>
      <text x="210" y="32" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">(fluxo pedonal × ruído dB)</text>

      {/* Normal cluster ellipse */}
      <ellipse cx="213" cy="158" rx="60" ry="28" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="1" strokeDasharray="4 3" />

      {seed.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="4" fill={color} fillOpacity="0.6" />
      ))}
      {anomalies.map((p, i) => (
        <g key={i}>
          <circle cx={p[0]} cy={p[1]} r="8" fill="#f97316" fillOpacity="0.2" stroke="#f97316" strokeWidth="2" />
          <circle cx={p[0]} cy={p[1]} r="4" fill="#f97316" />
          <text x={p[0] + 12} y={p[1] + 4} fontSize="8" fill="#f97316" fontWeight="700">anomalia</text>
        </g>
      ))}

      <text x="213" y="240" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Score = 2^(−E[h(x)]/c(n)) · Pontos isolados com poucos cortes têm score → 1</text>
    </svg>
  );
}

function AnomalyAlgorithmsSVG() {
  const algorithms = [
    { name: 'Isolation Forest', precision: 0.91, recall: 0.87, speed: 0.95, interp: 0.75, color: '#f97316', dash: '' },
    { name: 'LSTM Autoencoder', precision: 0.88, recall: 0.92, speed: 0.55, interp: 0.40, color: '#f59e0b', dash: '6 3' },
    { name: 'One-Class SVM', precision: 0.79, recall: 0.74, speed: 0.70, interp: 0.60, color: '#fb923c', dash: '3 3' },
    { name: 'Z-Score threshold', precision: 0.65, recall: 0.88, speed: 0.99, interp: 0.99, color: '#ea580c', dash: '8 3' },
  ];
  const axes = ['Precisão', 'Recall', 'Velocidade', 'Interpretab.'];
  const cx = 150, cy = 125, r = 85;
  const N = axes.length;
  const angle = (i) => (i / N) * 2 * Math.PI - Math.PI / 2;
  const toXY = (val, i) => ({
    x: cx + val * r * Math.cos(angle(i)),
    y: cy + val * r * Math.sin(angle(i)),
  });

  return (
    <svg viewBox="0 0 420 260" style={{ width: '100%', maxWidth: 420, background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="210" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Algoritmos — Radar de Performance</text>

      {[0.25, 0.5, 0.75, 1.0].map(pct => (
        <polygon key={pct} points={Array.from({ length: N }, (_, i) => {
          const p = toXY(pct, i); return `${p.x},${p.y}`;
        }).join(' ')} fill="none" stroke="var(--text-secondary)" strokeWidth="0.7" />
      ))}

      {axes.map((a, i) => {
        const p = toXY(1.15, i);
        return (
          <g key={a}>
            <line x1={cx} y1={cy} x2={toXY(1.05, i).x} y2={toXY(1.05, i).y} stroke="var(--text-secondary)" strokeWidth="1" />
            <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">{a}</text>
          </g>
        );
      })}

      {algorithms.map((alg) => {
        const vals = [alg.precision, alg.recall, alg.speed, alg.interp];
        const pts = vals.map((v, i) => { const xy = toXY(v, i); return `${xy.x},${xy.y}`; }).join(' ');
        return <polygon key={alg.name} points={pts} fill={alg.color} fillOpacity="0.12" stroke={alg.color} strokeWidth="1.5" strokeDasharray={alg.dash} />;
      })}

      {algorithms.map((alg, i) => (
        <g key={alg.name}>
          <line x1="308" y1={33 + i * 48} x2="322" y2={33 + i * 48} stroke={alg.color} strokeWidth="2" strokeDasharray={alg.dash} />
          <text x="325" y={37 + i * 48} fontSize="9" fontWeight="700" fill={alg.color}>{alg.name}</text>
          <text x="325" y={50 + i * 48} fontSize="8" fill="var(--text-secondary)">P:{alg.precision} R:{alg.recall}</text>
        </g>
      ))}
    </svg>
  );
}

function CrowdDensitySVG() {
  const grid = Array.from({ length: 8 }, (_, row) =>
    Array.from({ length: 12 }, (_, col) => {
      const cx = 360, cy = 3.5;
      const dist = Math.sqrt((col - cx / 60) ** 2 + (row - cy) ** 2);
      const val = Math.max(0, 1 - dist / 5 + (Math.sin(col * 1.3 + row) * 0.15));
      return Math.min(1, val);
    })
  );
  const levels = [
    { label: '0–1 p/m²', fill: '#f97316', opacity: 0.20 },
    { label: '1–2 p/m²', fill: '#f97316', opacity: 0.40 },
    { label: '2–3 p/m²', fill: '#fb923c', opacity: 0.65 },
    { label: '3–4 p/m²', fill: '#ea580c', opacity: 0.80 },
    { label: '4–6+ p/m²', fill: '#c2410c', opacity: 1.00 },
  ];
  const toLevel = (v) => levels[Math.min(4, Math.floor(v * 5))];
  const cellW = 44, cellH = 22, startX = 30, startY = 45;

  return (
    <svg viewBox="0 0 720 260" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Densidade de Multidão — Análise em Tempo Real (CCTV + DNN)</text>

      {grid.map((row, ri) =>
        row.map((val, ci) => {
          const lv = toLevel(val);
          return (
            <g key={`${ri}-${ci}`}>
              <rect x={startX + ci * cellW} y={startY + ri * cellH} width={cellW - 1} height={cellH - 1} rx="2"
                fill={lv.fill} fillOpacity={lv.opacity} />
              <text x={startX + ci * cellW + cellW / 2} y={startY + ri * cellH + cellH / 2 + 4}
                textAnchor="middle" fontSize="8" fill="#fff" fontWeight="700">
                {Math.round(val * 6)}p/m²
              </text>
            </g>
          );
        })
      )}

      {/* Legend */}
      {levels.map((lv, i) => (
        <g key={i}>
          <rect x={34 + i * 130} y={226} width={100} height={14} rx="3" fill={lv.fill} fillOpacity={lv.opacity} />
          <text x={84 + i * 130} y={236} textAnchor="middle" fontSize="7.5" fill="#fff" fontWeight="700">
            {lv.label}
          </text>
        </g>
      ))}
      <text x="360" y="254" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">CSRNet (Li et al. 2018): CNN de estimação de densidade — input: frame CCTV · output: density map · MAE ≈ 1.2 pessoas/m²</text>
    </svg>
  );
}

export default function SC4() {
  return (
    <div style={S.page}>
      <Link to="/smart-cities" style={S.back}><ArrowLeft size={16} /> Smart Cities</Link>
      <div style={S.tag}>Module 04</div>
      <h1 style={S.h1}>Segurança & Vigilância Urbana</h1>
      <p style={S.lead}>
        A segurança urbana inteligente combina detecção de anomalias em séries temporais,
        análise de vídeo com visão computacional e comunicação em tempo real entre sistemas.
        Isolation Forest, LSTM Autoencoders e CSRNet são as ferramentas centrais —
        sempre com supervisão humana obrigatória e respeito pelo quadro legal do GDPR e AI Act.
      </p>

      <section style={S.section}>
        <h2 style={S.h2}>1. Detecção de Anomalias — Algoritmos em Detalhe</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <IsolationForestSVG />
          <AnomalyAlgorithmsSVG />
        </div>
        <h3 style={S.h3}>Isolation Forest — teoria e implementação</h3>
        <p style={S.p}>
          Isolation Forest (Liu et al. 2008) isola anomalias particionando o espaço de features
          com cortes aleatórios. Pontos anómalos — afastados do cluster principal — são isolados
          com muito menos cortes que pontos normais. O anomaly score é uma função do caminho médio
          de isolamento: <strong>score = 2^(−E[h(x)]/c(n))</strong>, onde E[h(x)] é o comprimento
          médio de caminho e c(n) a normalização para n amostras.
        </p>
        <div style={S.highlight}>
          <strong>Vantagens para IoT urbano:</strong> (1) não assume distribuição dos dados normais;
          (2) escala linearmente O(n·t·ψ) com n amostras, t árvores e ψ subamostras;
          (3) eficiente em alta dimensão (múltiplos sensores em simultâneo);
          (4) threshold interpretável (score 0–1);
          (5) detecta anomalias globais e locais.
        </div>
        <div style={S.highlight}>
          <strong>LSTM Autoencoder para séries temporais:</strong> treina a reconstruir
          sequências normais (T timesteps × D features). Em inferência, o erro de reconstrução
          MSE(x, x̂) serve como anomaly score — padrões anómalos têm erro alto porque o
          encoder comprimiu a sequência para o espaço latente do comportamento normal.
          Threshold calibrado no percentil 99 do MSE no conjunto de validação.
        </div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Tipo de Anomalia</th><th style={S.th}>Features</th><th style={S.th}>Algoritmo</th><th style={S.th}>Precisão típica</th></tr></thead>
          <tbody>
            {[
              ['Aglomeração inesperada', 'Densidade pessoas/m², som dB', 'CSRNet + Isolation Forest', '89%'],
              ['Ruído excessivo (briga)', 'Espectrograma mel 40×32', 'CNN 1D (EdgeImpulse)', '91%'],
              ['Veículo abandonado', 'Tempo imóvel + Re-ID hash', 'LSTM Autoencoder', '87%'],
              ['Fuga de água na rede', 'Pressão + caudal + vibração', 'Isolation Forest multi-var.', '93%'],
              ['Falha de luminária', 'Corrente consumida + LDR', 'Z-score adaptativo', '99%'],
            ].map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={S.td}>{c}</td>)}</tr>)}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>2. Análise de Multidão com Visão Computacional</h2>
        <CrowdDensitySVG />
        <h3 style={S.h3}>CSRNet, estimação de densidade e privacy-by-design</h3>
        <p style={S.p}>
          A análise de multidão com câmeras CCTV tem duas abordagens: detecção individual
          de pessoas (YOLO, Faster R-CNN — funciona até ~50 pessoas por frame antes de
          oclusão severa) ou estimação de densidade por convolução (CSRNet, MCNN —
          funciona até 10 000+ pessoas por frame).
        </p>
        <div style={S.highlight}>
          <strong>CSRNet</strong> (Congested Scene Recognition Network, Li et al. 2018):
          backbone VGG-16 truncado para extracção de features + frontend dilated com
          convoluções dilatadas (dilation rates 2, 4, 8) para receptive field largo
          sem pooling. Output: density map da mesma dimensão do input onde a integral
          espacial dá o count total. MAE de 3.4 em ShanghaiTech Part B.
        </div>
        <div style={S.highlight}>
          <strong>Privacy-by-design em análise de multidão:</strong> detecção de densidade
          e trajectórias agrupadas (fluxos, não indivíduos) não requer identificação.
          Face blurring automático (DeepPrivacy2, SCRFD + inpainting) aplicado na câmera
          antes de qualquer armazenamento — o frame original nunca sai do edge.
          Análise de silhuetas com OpenPifPaf (estimação de pose) preserva informação
          comportamental sem identificação facial.
        </div>
        <div style={S.highlight}>
          <strong>AI Act da UE (2024) — Artigo 5º:</strong> reconhecimento facial
          biométrico em tempo real em espaços públicos é <strong>proibido</strong>
          como prática de IA de risco inaceitável. Excepções muito restritas:
          busca de vítimas de tráfico humano, prevenção de ataque terrorista iminente
          (com autorização judicial prévia), localização de suspeito de crime grave
          específico (não vigilância em massa).
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>3. Bias em Reconhecimento Facial e Limites Éticos</h2>
        <p style={S.p}>
          Estudos do MIT Media Lab (Buolamwini & Gebru, 2018 — Gender Shades) demonstraram
          taxas de erro em sistemas comerciais de reconhecimento facial que variavam de 0.8%
          (homens brancos) a 34.7% (mulheres negras). Este diferencial de 43× torna estes
          sistemas inaceitáveis em contextos de segurança pública onde erros têm consequências
          legais directas para os cidadãos.
        </p>
        <div style={S.highlight}>
          <strong>Fontes do bias em reconhecimento facial:</strong>
          <br/>• <strong>Dataset bias:</strong> LFW (Labeled Faces in the Wild) tem 77.5% de faces
          masculinas e 83.5% de faces brancas — modelos treinados neste dataset herdam o bias
          <br/>• <strong>Iluminação:</strong> modelos treinados com iluminação controlada falham
          em condições noturnas (relevante para videovigilância)
          <br/>• <strong>Ângulo e oclusão:</strong> câmeras de rua têm ângulos não frontais —
          performance degrada 15–30% vs. frontal
        </div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Nível de IA em CCTV</th><th style={S.th}>GDPR</th><th style={S.th}>AI Act</th><th style={S.th}>Recomendação</th></tr></thead>
          <tbody>
            {[
              ['Contagem de pessoas / densidade', '✓ OK (dados agregados)', '✓ Risco baixo', '✓ Usar sem restrições'],
              ['Tracking de silhuetas anónimas', '✓ OK (não identificável)', '✓ Risco limitado', '✓ Com aviso público'],
              ['Detecção de comportamento (queda)', '⚠ Depende do contexto', '⚠ Risco alto — auditoria', '⚠ DPO + DPIA obrigatório'],
              ['Reconhecimento facial em massa', '✗ Proibido (art. 9º)', '✗ Proibido (art. 5º)', '✗ Não implementar'],
            ].map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={S.td}>{c}</td>)}</tr>)}
          </tbody>
        </table>
        <div style={S.note}>
          Síntese: Isolation Forest e LSTM Autoencoder são as ferramentas principais para
          anomaly detection em sensores urbanos. CSRNet permite análise de multidão sem
          identificação individual. O quadro legal (GDPR + AI Act) é claro: análise comportamental
          agregada é permitida; reconhecimento facial em massa é proibido na UE.
          Privacy-by-design no edge — não armazenar frames identificáveis — é a solução.
        </div>
      </section>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>4. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Detecção de Anomalias — Algoritmos em Detalhe</strong> — Isolation Forest isola anomalias com poucos cortes aleatórios (sem assumir distribuição), enquanto o LSTM Autoencoder usa o erro de reconstrução de sequências normais como score; o threshold é calibrado no percentil 99 do MSE de validação.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Análise de Multidão com Visão Computacional</strong> — CSRNet estima a densidade de pessoas em imagens congestionadas (até 10 000+) sem identificação individual, usando backbone VGG-16 com convoluções dilatadas; o AI Act da UE proíbe reconhecimento facial em massa em espaços públicos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Bias em Reconhecimento Facial e Limites Éticos</strong> — estudos MIT Gender Shades demonstraram erros de 0.8% em homens brancos vs. 34.7% em mulheres negras, resultado de datasets enviesados; o quadro GDPR + AI Act estabelece que análise comportamental agregada é permitida mas reconhecimento biométrico em massa é proibido.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
