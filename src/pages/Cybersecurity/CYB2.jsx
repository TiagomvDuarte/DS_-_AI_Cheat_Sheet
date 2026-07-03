import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Cybersecurity';

const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  highlight: { background: `${color}12`, border: `1px solid ${color}30`, borderRadius: 8, padding: '0.9rem 1.1rem', marginTop: '0.8rem', fontSize: '0.93rem', color: 'var(--text-primary)', lineHeight: 1.7 },
  note: { background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 8, padding: '0.8rem 1rem', marginTop: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const m = modules[1];

function IDSArchSVG() {
  return (
    <svg viewBox="0 0 700 240" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="240" fill="var(--bg-secondary)" rx="10" />
      {/* Internet */}
      <rect x="10" y="90" width="80" height="40" rx="6" fill="rgba(249,115,22,0.06)" stroke="#64748b" strokeWidth="1.5" />
      <text x="50" y="115" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="600">Internet</text>
      <line x1="90" y1="110" x2="130" y2="110" stroke="#64748b" strokeWidth="1.5" />
      {/* Firewall */}
      <rect x="130" y="85" width="80" height="50" rx="6" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="2" />
      <text x="170" y="113" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Firewall</text>
      <line x1="210" y1="110" x2="260" y2="110" stroke="#64748b" strokeWidth="1.5" />
      {/* TAP/SPAN label */}
      <line x1="280" y1="110" x2="280" y2="60" stroke={color} strokeWidth="1.2" strokeDasharray="4 2" />
      <rect x="220" y="20" width="120" height="42" rx="6" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="1.5" />
      <text x="280" y="38" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">NIDS</text>
      <text x="280" y="52" textAnchor="middle" fill="#94a3b8" fontSize="9">TAP/SPAN — passivo</text>
      {/* IPS inline */}
      <rect x="260" y="85" width="80" height="50" rx="6" fill="#1e1a00" stroke={color} strokeWidth="2" />
      <text x="300" y="107" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">IPS</text>
      <text x="300" y="122" textAnchor="middle" fill="#94a3b8" fontSize="9">inline — bloqueia</text>
      <line x1="340" y1="110" x2="390" y2="110" stroke="#64748b" strokeWidth="1.5" />
      {/* Internal */}
      <rect x="390" y="70" width="100" height="80" rx="6" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1.5" />
      <text x="440" y="100" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600">Servidores</text>
      <text x="440" y="115" textAnchor="middle" fill="#94a3b8" fontSize="9">HIDS (Wazuh)</text>
      <text x="440" y="130" textAnchor="middle" fill="#94a3b8" fontSize="9">file integrity</text>
      {/* Legend */}
      {[['Snort / Suricata', 'Signature-based, 10Gbps+'], ['Zeek (Bro)', 'Protocol analysis, logging'], ['OSSEC / Wazuh', 'HIDS, open-source'], ['Anomaly', 'Baseline deviation — ML']].map(([n, d], i) => (
        <g key={i}>
          <rect x="510" y={30 + i * 45} width="175" height="38" rx="4" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="0.8" strokeOpacity="0.5" />
          <text x="522" y={50 + i * 45} fill={color} fontSize="10" fontWeight="700">{n}</text>
          <text x="522" y={63 + i * 45} fill="#94a3b8" fontSize="9">{d}</text>
        </g>
      ))}
    </svg>
  );
}

function ROCCurveSVG() {
  const models = [
    { name: 'XGBoost', auc: '0.97', col: color, pts: [[0,200],[5,185],[10,175],[20,160],[40,130],[80,100],[200,200]] },
    { name: 'Random Forest', auc: '0.98', col: '#f97316', pts: [] },
    { name: 'LSTM', auc: '0.96', col: '#f97316', pts: [] },
    { name: 'Isolation Forest', auc: '0.94', col: '#f97316', pts: [] },
  ];
  return (
    <svg viewBox="0 0 700 280" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="280" fill="var(--bg-secondary)" rx="10" />
      {/* Axes */}
      <line x1="60" y1="20" x2="60" y2="240" stroke="var(--card-border)" strokeWidth="1.5" />
      <line x1="60" y1="240" x2="360" y2="240" stroke="var(--card-border)" strokeWidth="1.5" />
      {/* Diagonal */}
      <line x1="60" y1="240" x2="360" y2="20" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="4 3" />
      {/* Axis labels */}
      <text x="210" y="262" textAnchor="middle" fill="#fb923c" fontSize="11">FPR (False Positive Rate)</text>
      <text x="22" y="135" textAnchor="middle" fill="#fb923c" fontSize="11" transform="rotate(-90,22,135)">TPR (True Positive Rate)</text>
      {/* AUC curves (approximate arcs) */}
      {[
        { name: 'Random Forest', auc: '0.98', col: '#f97316', d: 'M60,240 Q70,60 200,25 L360,20' },
        { name: 'XGBoost', auc: '0.97', col: '#fb923c', d: 'M60,240 Q75,70 210,30 L360,20' },
        { name: 'LSTM', auc: '0.96', col: '#f59e0b', d: 'M60,240 Q85,80 220,40 L360,20' },
        { name: 'Isolation Forest', auc: '0.94', col: '#fbbf24', d: 'M60,240 Q100,100 240,55 L360,20' },
      ].map((m, i) => (
        <g key={i}>
          <path d={m.d} fill="none" stroke={m.col} strokeWidth="2" />
          <rect x="390" y={30 + i * 48} width="290" height="40" rx="5" fill="rgba(249,115,22,0.06)" stroke={m.col} strokeWidth="1" strokeOpacity="0.5" />
          <rect x="400" y={44 + i * 48} width="12" height="12" rx="2" fill={m.col} />
          <text x="420" y={54 + i * 48} fill="#f8fafc" fontSize="11" fontWeight="600">{m.name}</text>
          <text x="560" y={54 + i * 48} fill={m.col} fontSize="12" fontWeight="800">AUC {m.auc}</text>
        </g>
      ))}
      <text x="210" y="16" textAnchor="middle" fill="#fb923c" fontSize="11">Curva ROC — Detecção de Intrusões</text>
      <circle cx="82" cy="218" r="5" fill={color} opacity="0.9" />
      <text x="90" y="213" fill={color} fontSize="9">Op. Point 0.1% FPR</text>
    </svg>
  );
}

function UEBASvg() {
  const timelineX = 60, timelineW = 340, hours = 24;
  const px = h => timelineX + (h / hours) * timelineW;
  const normalHours = [8,9,10,11,12,13,14,15,16,17,18];
  const anomalyHours = [1,2,3];
  return (
    <svg viewBox="0 0 700 255" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="255" fill="var(--bg-secondary)" rx="10" />
      <text x="350" y="20" textAnchor="middle" fill="#fb923c" fontSize="12" fontWeight="700">UEBA — Linha Base vs Anomalia</text>

      {/* Timeline axis */}
      <line x1={timelineX} y1="110" x2={timelineX+timelineW} y2="110" stroke="var(--card-border)" strokeWidth="1" />
      {[0,6,12,18,24].map(h => (
        <g key={h}>
          <line x1={px(h)} y1="107" x2={px(h)} y2="113" stroke="var(--card-border)" strokeWidth="1" />
          <text x={px(h)} y="122" textAnchor="middle" fill="#fb923c" fontSize="8" opacity="0.7">{String(h).padStart(2,'0')}h</text>
        </g>
      ))}

      {/* Normal row */}
      <text x="50" y="72" textAnchor="end" fill="#fb923c" fontSize="10" opacity="0.7">Normal</text>
      {normalHours.map(h => (
        <rect key={h} x={px(h)} y="55" width={timelineW/hours*0.85} height="20" rx="2" fill="#f97316" opacity="0.45" />
      ))}

      {/* Anomaly row */}
      <text x="50" y="100" textAnchor="end" fill={color} fontSize="10" fontWeight="700">Anomalia</text>
      {anomalyHours.map(h => (
        <rect key={h} x={px(h)} y="83" width={timelineW/hours*0.85} height="20" rx="2" fill={color} opacity="0.9" />
      ))}
      {/* Anomaly marker */}
      <line x1={px(2)} y1="55" x2={px(2)} y2="110" stroke={color} strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
      <text x={px(2)} y="50" textAnchor="middle" fill={color} fontSize="8" fontWeight="700">02h ⚠</text>

      {/* Risk score breakdown */}
      {[['Horário anómalo (02h)', '+30'], ['País desconhecido (ex-BR)', '+50'], ['Volume: 5000 ficheiros', '+40']].map(([l, s], i) => (
        <g key={i}>
          <rect x="440" y={38 + i * 48} width="240" height="38" rx="5" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="1" opacity="0.7" />
          <text x="452" y={62 + i * 48} fill="#f8fafc" fontSize="10">{l}</text>
          <text x="670" y={62 + i * 48} textAnchor="end" fill={color} fontSize="12" fontWeight="800">{s}</text>
        </g>
      ))}
      <rect x="440" y="182" width="240" height="40" rx="5" fill={`${color}20`} stroke={color} strokeWidth="2" />
      <text x="452" y="206" fill="#f8fafc" fontSize="11" fontWeight="700">Risk Score Total</text>
      <text x="670" y="206" textAnchor="end" fill={color} fontSize="16" fontWeight="800">120</text>

      <text x="240" y="240" textAnchor="middle" fill="#fb923c" fontSize="9" opacity="0.8">Threshold = 70 → ALERTA — conta suspensa para revisão</text>
    </svg>
  );
}

function EvasionSVG() {
  const rows = [
    ['Fragmentação IP', '✗', '~', 'Sobrepõe fragmentos'],
    ['Encriptação TLS', '✗', '~', 'JA3 fingerprint'],
    ['Slow scan', '✗', '~', 'Threshold temporal'],
    ['Polimorfismo', '✗', '✓', 'Detecção comportamental'],
    ['Living off Land', '✗', '~', 'UEBA (PowerShell)'],
  ];
  return (
    <svg viewBox="0 0 700 230" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="230" fill="var(--bg-secondary)" rx="10" />
      {['Técnica Evasão', 'Sig. IDS', 'Anomalia', 'Contrameddida'].map((h, i) => (
        <text key={i} x={[20, 250, 350, 450][i]} y="26" fill="#94a3b8" fontSize="11" fontWeight="700">{h}</text>
      ))}
      <line x1="10" y1="32" x2="690" y2="32" stroke="var(--card-border)" strokeWidth="1" />
      {rows.map(([t, sig, ano, ctr], i) => (
        <g key={i}>
          <rect x="10" y={38 + i * 36} width="680" height="32" rx="3" fill={i % 2 === 0 ? 'transparent' : 'rgba(249,115,22,0.06)'} />
          <text x="20" y={58 + i * 36} fill="#f8fafc" fontSize="10">{t}</text>
          <text x="260" y={58 + i * 36} fill={sig === '✓' ? '#f97316' : sig === '~' ? color : '#f97316'} fontSize="13" fontWeight="800">{sig}</text>
          <text x="360" y={58 + i * 36} fill={ano === '✓' ? '#f97316' : ano === '~' ? color : '#f97316'} fontSize="13" fontWeight="800">{ano}</text>
          <text x="450" y={58 + i * 36} fill="#94a3b8" fontSize="10">{ctr}</text>
        </g>
      ))}
      <text x="350" y="220" textAnchor="middle" fill="#64748b" fontSize="10">✓ detecta  ~ detecta parcialmente  ✗ não detecta</text>
    </svg>
  );
}

export default function CYB2() {
  return (
    <div style={S.page}>
      <Link to="/cybersecurity" style={S.back}>← Cybersecurity & AI</Link>
      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. IDS/IPS — Arquitectura e Tipos</h2>
        <p style={S.p}>IDS (Intrusion Detection System) monitoriza passivamente e gera alertas; IPS (Intrusion Prevention System) situa-se inline e pode bloquear tráfego em tempo real. NIDS (Network-based): monitoriza tráfego de rede via TAP ou porta SPAN — Snort (1998, ainda amplamente usado), Suricata (multi-threaded, 10Gbps+), Zeek (análise de protocolo e logging). HIDS (Host-based): monitoriza system calls, integridade de ficheiros e eventos de log — OSSEC, Wazuh (open-source), Tripwire.</p>
        <p style={S.p}>Detecção por assinatura: rápida, baixa taxa de falsos positivos, não detecta 0-days. Detecção por anomalia: detecta ataques novos, taxa de FP elevada, requer período de baseline longo (21+ dias). Os sistemas modernos combinam ambas as abordagens — correlação de assinatura para ameaças conhecidas, ML para anomalias comportamentais.</p>
        <div style={S.diagram}><IDSArchSVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Network Traffic Features para ML</h2>
        <p style={S.p}>Captura de pacotes brutos a 10Gbps é inviável para ML directo — é necessário agregar em flows. NetFlow (Cisco) e IPFIX exportam flows com 5-tuple (IP src/dst, portos src/dst, protocolo) + estatísticas. Features chave para detecção de anomalias: bytes por segundo (alto = candidato a exfiltração de dados), distribuição de tamanho de pacotes (pequenos e uniformes = beacon C2), duração de conexão (muito curta = scan, muito longa = persistência), entropia de portos (scan = portos sequenciais), anomalias geográficas.</p>
        <p style={S.p}>Feature engineering: transformação logarítmica de distribuições assimétricas, one-hot encoding de categoriais (protocolo), estatísticas de janela deslizante para padrões temporais. Datasets de referência: CICIDS-2018, KDD Cup 99, UNSW-NB15. O desafio central é o desequilíbrio de classes — tráfego normal representa 99.99% do volume.</p>
        <div style={S.highlight}>Accuracy é enganadora em datasets desequilibrados: um modelo que classifica sempre como "normal" obtém 99.99% de accuracy. Usar PR-AUC, F1, e volume de alertas como métricas.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Modelos ML para Detecção de Intrusões</h2>
        <p style={S.p}>Random Forest: robusto, feature importances interpretáveis, lida com features mistas, inferência rápida (crítico para tempo real). Isolation Forest: detecção de anomalias não supervisionada, não requer labels, eficiente O(n log n) — ideal para ameaças desconhecidas. LSTM/GRU: captura padrões temporais (e.g., beacon C2 a cada 60s), mas inferência mais lenta. XGBoost: melhor performance em dados tabulares, amplamente usado em produção. Métodos ensemble reduzem significativamente a taxa de FP.</p>
        <div style={S.diagram}><ROCCurveSVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. UEBA — User and Entity Behaviour Analytics</h2>
        <p style={S.p}>UEBA constrói baselines estatísticas do comportamento normal por utilizador/entidade e alerta sobre desvios. O caso de uso principal é detecção de insider threats — segurança perimetral falha para utilizadores autorizados que abusam do acesso. Comportamentos monitorizados: horários e localizações de login, padrões de acesso a dados, utilização de aplicações, reencaminhamento de email, uso de USB, tentativas de escalada de privilégios.</p>
        <p style={S.p}>Técnicas ML: detecção de anomalias em séries temporais (Isolation Forest, autoencoders), análise de peer groups (este utilizador está a comportar-se diferente dos seus pares?), risk scoring com sinais combinados de UEBA + DLP + IAM. Soluções: Microsoft Sentinel, Splunk UBA, Exabeam, Securonix.</p>
        <div style={S.diagram}><UEBASvg /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Evasão de IDS e Técnicas Adversariais</h2>
        <p style={S.p}>Os atacantes evoluem activamente para evadir IDS. Fragmentação: divide payload malicioso em fragmentos IP — o NIDS precisa de remontar (caro, pode ser enganado por fragmentos sobrepostos). Encriptação TLS 1.3 dificulta a inspecção profunda de pacotes — usar metadados TLS (certificado, fingerprint JA3, SNI) em vez de payload. Slow scan (low-and-slow): um porto por hora ao longo de dias — fica abaixo dos limiares por minuto.</p>
        <p style={S.p}>Polimorfismo: malware muta a assinatura em cada infecção — detecção comportamental captura-o. Living off the Land (LotL): usar ferramentas legítimas (PowerShell, WMI, certutil) para fins maliciosos — não há binário malicioso para detectar, requer UEBA. A defesa eficaz combina assinatura, anomalia comportamental e UEBA para cobertura em profundidade.</p>
        <div style={S.diagram}><EvasionSVG /></div>
        <div style={S.note}>Living off the Land é a técnica mais difícil de detectar — APT29 e outros grupos sofisticados usam PowerShell, WMI e BITS exclusivamente para minimizar artefactos em disco.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>IDS/IPS — Arquitectura e Tipos</strong> — sistemas de detecção (IDS) e prevenção (IPS) de intrusões monitorizam tráfego de rede e actividade de sistemas em busca de padrões maliciosos; IDS apenas alerta, IPS bloqueia activamente — ambos usam assinaturas ou anomalias.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Network Traffic Features para ML</strong> — features como duração de sessão, bytes enviados/recebidos, número de pacotes e flags TCP são extraídas de fluxos de rede e usadas como input para modelos ML de detecção de intrusões.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Modelos ML para Detecção de Intrusões</strong> — Random Forests, XGBoost e redes neuronais treinados em datasets como KDD-NSL ou CICIDS detectam ataques com alta precisão; o desafio é o elevado número de falsos positivos em tráfego real.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>UEBA — User and Entity Behaviour Analytics</strong> — analisa padrões comportamentais de utilizadores e sistemas para detectar anomalias como acesso incomum a dados, privilege escalation ou movimentos laterais — tipicamente com autoencoders ou perfis estatísticos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Evasão de IDS e Técnicas Adversariais</strong> — atacantes fragmentam pacotes, usam polimorfismo ou adversarial examples para contornar IDS baseados em ML; defesas incluem ensemble methods, detecção de distribuição shift e modelos adversarialmente robustos.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
