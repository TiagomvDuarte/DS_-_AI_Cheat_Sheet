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

const m = modules[0];

function CIATriadSVG() {
  return (
    <svg viewBox="0 0 700 345" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="345" fill="var(--bg-secondary)" rx="10" />
      {/* Triangle (behind circles) */}
      <polygon points="350,55 120,285 580,285" fill="none" stroke={color} strokeWidth="2" />
      {/* Center label */}
      <text x="350" y="158" textAnchor="middle" fill="var(--text-primary)" fontSize="15" fontWeight="700">CIA Triad</text>
      <text x="350" y="175" textAnchor="middle" fill="#fb923c" fontSize="11">Modelo fundacional desde 1977</text>
      {/* Non-repudiation box */}
      <rect x="280" y="195" width="140" height="38" rx="6" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="1" strokeDasharray="4 2" />
      <text x="350" y="210" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Non-Repudiation</text>
      <text x="350" y="225" textAnchor="middle" fill="#fb923c" fontSize="10">Assinaturas digitais</text>
      {/* Circles on top */}
      {/* Confidentiality */}
      <circle cx="350" cy="55" r="55" fill="var(--bg-secondary)" stroke="none" />
      <circle cx="350" cy="55" r="55" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
      <text x="350" y="46" textAnchor="middle" fill={color} fontSize="13" fontWeight="800">Confiden-</text>
      <text x="350" y="61" textAnchor="middle" fill={color} fontSize="13" fontWeight="800">tialidade</text>
      <text x="350" y="76" textAnchor="middle" fill="#fb923c" fontSize="10">Encrypt. AES-256</text>
      {/* Integrity */}
      <circle cx="120" cy="285" r="55" fill="var(--bg-secondary)" stroke="none" />
      <circle cx="120" cy="285" r="55" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
      <text x="120" y="280" textAnchor="middle" fill={color} fontSize="13" fontWeight="800">Integridade</text>
      <text x="120" y="296" textAnchor="middle" fill="#fb923c" fontSize="10">SHA-256 hash</text>
      {/* Availability */}
      <circle cx="580" cy="285" r="55" fill="var(--bg-secondary)" stroke="none" />
      <circle cx="580" cy="285" r="55" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
      <text x="580" y="278" textAnchor="middle" fill={color} fontSize="13" fontWeight="800">Disponibili-</text>
      <text x="580" y="293" textAnchor="middle" fill={color} fontSize="13" fontWeight="800">dade</text>
      <text x="580" y="308" textAnchor="middle" fill="#fb923c" fontSize="10">99.99% SLA</text>
    </svg>
  );
}

function AttackKillChainSVG() {
  const steps = [
    { label: 'Reconhecimento', sub: ['OSINT', 'Shodan'] },
    { label: 'Armamento', sub: ['Exploit +', 'payload'] },
    { label: 'Entrega', sub: ['Phishing', 'USB'] },
    { label: 'Exploração', sub: ['CVE', '0-day'] },
    { label: 'Instalação', sub: ['Malware', 'backdoor'] },
    { label: 'C2', sub: ['HTTPS', 'beacon'] },
    { label: 'Objectivos', sub: ['Exfiltração', 'ransomware'] },
  ];
  const shades = ['#f97316', '#fb923c', '#f97316', '#ea580c', '#f97316', '#fb923c', '#f59e0b'];
  return (
    <svg viewBox="0 0 700 200" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="200" fill="var(--bg-secondary)" rx="10" />
      {steps.map((s, i) => {
        const x = 10 + i * 97;
        return (
          <g key={i}>
            <rect x={x} y="38" width="88" height="74" rx="6" fill="var(--bg-secondary)" stroke="none" />
            <rect x={x} y="38" width="88" height="74" rx="6" fill={`${shades[i]}18`} stroke={shades[i]} strokeWidth="1.5" />
            <text x={x + 44} y="63" textAnchor="middle" fill={shades[i]} fontSize="9.5" fontWeight="700">{s.label}</text>
            <text x={x + 44} y="78" textAnchor="middle" fill="#fb923c" fontSize="8">{s.sub[0]}</text>
            <text x={x + 44} y="90" textAnchor="middle" fill="#fb923c" fontSize="8">{s.sub[1]}</text>
            {i < steps.length - 1 && (
              <polygon points={`${x+91},72 ${x+98},75 ${x+91},78`} fill={shades[i]} opacity="0.8" />
            )}
          </g>
        );
      })}
      <text x="350" y="158" textAnchor="middle" fill="#fb923c" fontSize="11">Kill Chain (Lockheed Martin, 2011) — quebrar a cadeia em qualquer fase detém o ataque</text>
      <text x="350" y="174" textAnchor="middle" fill="#fb923c" fontSize="9" opacity="0.7">91% dos ataques começam com phishing na fase de Entrega</text>
    </svg>
  );
}

function AttackSurfaceSVG() {
  const stride = [
    ['S','Spoofing','Identidade falsa'],
    ['T','Tampering','Alteração dados'],
    ['R','Repudiation','Negar acções'],
    ['I','Info Disclosure','Fuga de dados'],
    ['D','DoS','Negação serviço'],
    ['E','Elev. Privilege','Escalada privilégios'],
  ];
  return (
    <svg viewBox="0 0 700 290" width="100%" style={{ display: 'block' }}>
      <defs>
        <marker id="arr-surf" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
        </marker>
      </defs>
      <rect width="700" height="290" fill="var(--bg-secondary)" rx="10" />
      {/* Concentric circles */}
      <circle cx="220" cy="148" r="118" fill="none" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <circle cx="220" cy="148" r="80" fill="none" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <circle cx="220" cy="148" r="42" fill="var(--bg-secondary)" stroke={color} strokeWidth="2" />
      <circle cx="220" cy="148" r="42" fill={`${color}20`} stroke={color} strokeWidth="2" />
      <text x="220" y="143" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Crown</text>
      <text x="220" y="157" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Jewels</text>
      {/* Ring labels */}
      <text x="220" y="82" textAnchor="middle" fill="#fb923c" fontSize="9">Sistemas internos</text>
      <text x="220" y="222" textAnchor="middle" fill="#fb923c" fontSize="9">Colaboradores</text>
      <text x="220" y="38" textAnchor="middle" fill="#fb923c" fontSize="9">Web apps • APIs • VPN • Email</text>
      <text x="220" y="258" textAnchor="middle" fill="#fb923c" fontSize="9">IoT • Cloud • Supply chain</text>
      {/* Internet arrow */}
      <line x1="220" y1="27" x2="220" y2="12" stroke={color} strokeWidth="1.5" markerEnd="url(#arr-surf)" />
      <text x="220" y="10" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Internet</text>
      {/* STRIDE — 2 columns of 3 */}
      {stride.map(([l, t, d], i) => {
        const col = i < 3 ? 0 : 1;
        const row = i % 3;
        const bx = 390 + col * 155;
        const by = 28 + row * 82;
        return (
          <g key={i}>
            <rect x={bx} y={by} width={145} height={72} rx="5" fill="var(--bg-secondary)" stroke="none" />
            <rect x={bx} y={by} width={145} height={72} rx="5" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1" opacity="0.6" />
            <text x={bx+14} y={by+24} fill={color} fontSize="16" fontWeight="800">{l}</text>
            <text x={bx+36} y={by+22} fill={color} fontSize="10" fontWeight="700">{t}</text>
            <text x={bx+36} y={by+36} fill="#fb923c" fontSize="8.5">{d}</text>
          </g>
        );
      })}
    </svg>
  );
}

function ThreatActorSVG() {
  const actors = [
    { name: 'Nation-State APT', mot: 'Espionagem', res: 'Ilimitados', soph: 'Muito Alta', col: '#f97316' },
    { name: 'Cybercriminosos', mot: 'Financeiro', res: 'Altos', soph: 'Alta', col: '#f97316' },
    { name: 'Hacktivistas', mot: 'Ideológico', res: 'Médios', soph: 'Média', col: '#f97316' },
    { name: 'Insider Threats', mot: 'Vários', res: 'Internos', soph: 'Variável', col: '#f97316' },
    { name: 'Script Kiddies', mot: 'Reputação', res: 'Baixos', soph: 'Baixa', col: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 700 260" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="260" fill="var(--bg-secondary)" rx="10" />
      {['Actor', 'Motivação', 'Recursos', 'Sofisticação'].map((h, i) => (
        <text key={i} x={20 + i * 170} y="28" fill="#94a3b8" fontSize="11" fontWeight="700">{h}</text>
      ))}
      <line x1="10" y1="35" x2="690" y2="35" stroke="var(--card-border)" strokeWidth="1" />
      {actors.map((a, i) => (
        <g key={i}>
          <rect x="10" y={42 + i * 40} width="680" height="36" rx="4" fill={i % 2 === 0 ? 'transparent' : 'rgba(249,115,22,0.06)'} />
          <rect x="10" y={42 + i * 40} width="4" height="36" fill={a.col} rx="2" />
          <text x="22" y={64 + i * 40} fill="#f8fafc" fontSize="11" fontWeight="600">{a.name}</text>
          <text x="190" y={64 + i * 40} fill="#94a3b8" fontSize="11">{a.mot}</text>
          <text x="360" y={64 + i * 40} fill="#94a3b8" fontSize="11">{a.res}</text>
          <text x="530" y={64 + i * 40} fill={a.col} fontSize="11" fontWeight="600">{a.soph}</text>
        </g>
      ))}
    </svg>
  );
}

export default function CYB1() {
  return (
    <div style={S.page}>
      <Link to="/cybersecurity" style={S.back}>← Cybersecurity & AI</Link>
      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. CIA Triad e Princípios Fundamentais</h2>
        <p style={S.p}>O CIA Triad é o modelo fundacional da segurança de informação, estabelecido em 1977. Confidencialidade garante que apenas partes autorizadas acedem aos dados — implementada através de encriptação (AES-256), controlo de acesso e classificação de dados. Integridade assegura que os dados não foram alterados sem autorização — verificada com funções de hash SHA-256, assinaturas digitais e controlo de versões. Disponibilidade garante que os sistemas estão acessíveis quando necessário — conseguida com redundância, failover automático, backups e protecção DDoS (SLA 99.99%).</p>
        <p style={S.p}>Um quarto princípio frequentemente adicionado é a Non-Repudiation: impossibilidade de negar ter realizado uma acção. Implementada com assinaturas digitais e audit logs imutáveis. O GDPR mapeia directamente para Confidencialidade; ataques de ransomware atacam a Disponibilidade; injecção SQL compromete a Integridade.</p>
        <div style={S.diagram}><CIATriadSVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. MITRE ATT&amp;CK Framework</h2>
        <p style={S.p}>O MITRE ATT&amp;CK (Adversarial Tactics, Techniques &amp; Common Knowledge) é uma base de conhecimento acessível globalmente sobre comportamento adversarial, baseada em observações do mundo real. Organiza o conhecimento em 14 tácticas, mais de 200 técnicas e mais de 400 sub-técnicas para Enterprise (Windows, macOS, Linux, Cloud, Network, Containers).</p>
        <p style={S.p}>As 14 tácticas cobrem todo o ciclo de um ataque: Reconnaissance, Resource Development, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command &amp; Control, Exfiltration e Impact. As equipas SOC usam o ATT&amp;CK Navigator para identificar lacunas de detecção — quais as técnicas sem cobertura de alertas? As equipas de red team planeiam exercícios com base nos TTPs de grupos APT específicos mapeados no framework.</p>
        <div style={S.highlight}>O ATT&amp;CK é o denominador comum entre blue teams, red teams e threat intelligence — permite comunicação precisa sobre comportamento adversarial sem ambiguidade.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Cyber Kill Chain e Fases de Ataque</h2>
        <p style={S.p}>O Cyber Kill Chain (Lockheed Martin, 2011) modela as 7 fases de um ataque informático. A insight chave para defensores: quebrar a cadeia em qualquer fase detém o ataque — não é necessário detectar em todas as fases. Detecção na fase de Entrega (filtro de email) evita a necessidade de detectar em C2 ou Exfiltração.</p>
        <p style={S.p}>Reconhecimento divide-se em passivo (OSINT, LinkedIn, Shodan, WHOIS) e activo (port scanning, vulnerability scanning — já detectável). Armamento acontece offline — o defensor não tem visibilidade. Entrega: 91% dos ataques começam com phishing. C2: os atacantes usam HTTPS para se misturar com tráfego normal, domain fronting para esconder infraestrutura atrás de CDNs, e DNS over HTTPS para evadir inspecção.</p>
        <div style={S.diagram}><AttackKillChainSVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Superfície de Ataque e Threat Modelling</h2>
        <p style={S.p}>A superfície de ataque é a soma de todos os pontos onde um atacante pode tentar entrar ou extrair dados. A superfície digital inclui aplicações web, APIs, serviços cloud e dispositivos IoT. A superfície humana inclui colaboradores susceptíveis a phishing, vishing e engenharia social. A superfície física inclui USB drops, tailgating e implantes de hardware.</p>
        <p style={S.p}>Threat modelling (STRIDE, PASTA, DREAD) é o processo sistemático de identificar ameaças durante o design do sistema. STRIDE cobre 6 categorias: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege. DREAD quantifica o risco: Damage + Reproducibility + Exploitability + Affected users + Discoverability = score 1-50. O threat modelling durante o design é 100x mais barato que corrigir vulnerabilidades em produção.</p>
        <div style={S.diagram}><AttackSurfaceSVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Tipos de Ameaças e Actores</h2>
        <p style={S.p}>Nation-state APTs (Advanced Persistent Threats) são os adversários mais sofisticados: APT29 (Cozy Bear, Rússia), APT41 (China, espionagem + crime), Lazarus Group (Coreia do Norte, roubo financeiro + ransomware). Dwell time médio de 207 dias antes de detecção. Cybercriminosos são motivados financeiramente e usam RaaS (Ransomware-as-a-Service) — LockBit, BlackCat/ALPHV. Pedido médio de resgate de 1,5M USD em 2023.</p>
        <p style={S.p}>Insider threats: 60% maliciosos (funcionários descontentes, recrutados por competidores), 40% acidentais (erros de configuração, phishing bem-sucedido). Zero-day: vulnerabilidade desconhecida pelo fabricante, vendida no dark web por 100k-2,5M USD (iOS full-chain RCE). Vulnerabilidades em sistemas críticos (infraestrutura energia, saúde) valem ainda mais para actores estatais.</p>
        <div style={S.diagram}><ThreatActorSVG /></div>
        <div style={S.note}>A sofisticação do actor não determina o sucesso — a maioria dos ataques bem-sucedidos exploram configurações erradas e credenciais comprometidas, não 0-days.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>CIA Triad e Princípios Fundamentais</strong> — modelo fundacional da segurança de informação que define Confidencialidade, Integridade e Disponibilidade como os três pilares inegociáveis, a que se acrescenta a Non-Repudiation como quarto princípio implementado através de assinaturas digitais.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>MITRE ATT&amp;CK Framework</strong> — base de conhecimento global sobre comportamento adversarial organizada em 14 tácticas e mais de 200 técnicas, usada por blue teams, red teams e threat intelligence para comunicação precisa e identificação de lacunas de detecção.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Cyber Kill Chain e Fases de Ataque</strong> — modelo de 7 fases (Reconhecimento → Objectivos) da Lockheed Martin que ensina que quebrar a cadeia em qualquer fase detém o ataque; 91% dos ataques começam por phishing na fase de Entrega.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Superfície de Ataque e Threat Modelling</strong> — a superfície de ataque é a soma de todos os pontos de entrada possíveis (digital, humano, físico); o threat modelling com frameworks como STRIDE e DREAD identifica e quantifica ameaças na fase de design, onde a correção é 100× mais barata do que em produção.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Tipos de Ameaças e Actores</strong> — os adversários variam de nation-state APTs com recursos ilimitados e dwell time de 207 dias, a cybercriminosos com RaaS e insider threats, sendo que a maioria dos ataques bem-sucedidos exploram misconfigurações e credenciais comprometidas e não vulnerabilidades zero-day.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
