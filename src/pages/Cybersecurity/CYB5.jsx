import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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

const mod = modules[4];

export default function CYB5() {
  return (
    <div style={S.page}>
      <Link to="/cybersecurity" style={S.back}><ArrowLeft size={16} /> Voltar ao curso</Link>
      <span style={S.badge}>MÓDULO {mod.num}</span>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. SIEM — Arquitectura e Funcionamento</h2>
        <p style={S.p}>O SIEM (Security Information and Event Management) agrega logs de toda a infraestrutura — firewalls, endpoints, servidores, cloud e identidade — normaliza-os num esquema comum e aplica regras de correlação para detectar ameaças. A normalização é crítica: um log de firewall Cisco tem estrutura completamente diferente de um Windows Event Log. Formatos comuns: CEF (Common Event Format), LEEF (Log Event Extended Format) e ECS (Elastic Common Schema).</p>
        <p style={S.p}>As regras de correlação codificam padrões de ataque conhecidos — "se falha de login do mesmo IP mais de 10 vezes em 5 minutos, gerar alerta de brute force". Uma biblioteca SIEM madura contém 500 ou mais regras de detecção pré-construídas. Os líderes de mercado são Splunk Enterprise Security (mais implementado em enterprise), Microsoft Sentinel (cloud-native, integrado no Azure), IBM QRadar e Elastic SIEM. O volume de dados é massivo — entre 100 GB e 10 TB de logs por dia — e a correlação reduz-os a centenas de alertas accionáveis por dia. As métricas-chave são MTTD (Mean Time to Detect), MTTA (Mean Time to Acknowledge) e MTTR (Mean Time to Respond), com alvo de MTTD inferior a uma hora.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 290" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="290" fill="var(--bg-secondary)" rx="10" />

            <text x="390" y="25" textAnchor="middle" fill="#fb923c" fontSize="12" fontWeight="700">ARQUITECTURA SIEM — FLUXO DE DADOS</text>

            {/* Log sources column */}
            <text x="80" y="50" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="600">FONTES DE LOG</text>
            {[
              { label: 'Firewall', color: '#f97316' },
              { label: 'Endpoints', color: '#f97316' },
              { label: 'Servidores', color: '#f97316' },
              { label: 'Cloud', color: '#f97316' },
              { label: 'Identidade', color: '#f97316' },
            ].map((src, i) => (
              <g key={i}>
                <rect x="20" y={58 + i * 44} width="120" height="32" rx="6"
                  fill={`${src.color}18`} stroke={`${src.color}60`} strokeWidth="1" />
                <text x="80" y={78 + i * 44} textAnchor="middle" fill={src.color} fontSize="10" fontWeight="600">{src.label}</text>
                <line x1="140" y1={74 + i * 44} x2="185" y2={74 + i * 44} stroke={`${src.color}60`} strokeWidth="1" strokeDasharray="4,2" markerEnd="url(#arrSrc)" />
              </g>
            ))}

            {/* Collection agents */}
            <rect x="185" y="58" width="110" height="218" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="240" y="80" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">AGENTES</text>
            <text x="240" y="96" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">COLECTA</text>
            <rect x="197" y="108" width="86" height="22" rx="4" fill="#ea580c20" />
            <text x="240" y="122" textAnchor="middle" fill="#fb923c" fontSize="8">syslog UDP/TCP</text>
            <rect x="197" y="136" width="86" height="22" rx="4" fill="#ea580c20" />
            <text x="240" y="150" textAnchor="middle" fill="#fb923c" fontSize="8">Windows WMI</text>
            <rect x="197" y="164" width="86" height="22" rx="4" fill="#ea580c20" />
            <text x="240" y="178" textAnchor="middle" fill="#fb923c" fontSize="8">API cloud pull</text>
            <rect x="197" y="192" width="86" height="22" rx="4" fill="#ea580c20" />
            <text x="240" y="206" textAnchor="middle" fill="#fb923c" fontSize="8">agente endpoint</text>
            <text x="240" y="240" textAnchor="middle" fill="#fb923c" fontSize="8">100GB–10TB/dia</text>
            <text x="240" y="254" textAnchor="middle" fill="#fb923c" fontSize="8">ingestão contínua</text>

            {/* Arrow to normalization */}
            <line x1="295" y1="167" x2="320" y2="167" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrCyan)" />

            {/* Normalization */}
            <rect x="320" y="100" width="120" height="134" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="380" y="122" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">NORMALIZAÇÃO</text>
            <rect x="332" y="132" width="96" height="20" rx="4" fill="#ea580c20" />
            <text x="380" y="145" textAnchor="middle" fill="#fb923c" fontSize="8">CEF format</text>
            <rect x="332" y="158" width="96" height="20" rx="4" fill="#ea580c20" />
            <text x="380" y="171" textAnchor="middle" fill="#fb923c" fontSize="8">LEEF format</text>
            <rect x="332" y="184" width="96" height="20" rx="4" fill="#ea580c20" />
            <text x="380" y="197" textAnchor="middle" fill="#fb923c" fontSize="8">ECS schema</text>
            <text x="380" y="224" textAnchor="middle" fill="#fb923c" fontSize="8">parsing + enrichment</text>

            {/* Arrow to SIEM engine */}
            <line x1="440" y1="167" x2="465" y2="167" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrCyan)" />

            {/* SIEM engine */}
            <rect x="465" y="58" width="140" height="218" rx="8" fill="rgba(249,115,22,0.18)" stroke="#f97316" strokeWidth="2" />
            <text x="535" y="80" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">SIEM ENGINE</text>
            <rect x="477" y="92" width="116" height="24" rx="5" fill="rgba(249,115,22,0.18)" />
            <text x="535" y="107" textAnchor="middle" fill="#cffafe" fontSize="9" fontWeight="600">regras correlação 500+</text>
            <rect x="477" y="122" width="116" height="24" rx="5" fill="rgba(249,115,22,0.18)" />
            <text x="535" y="137" textAnchor="middle" fill="#cffafe" fontSize="9">ML anomaly detection</text>
            <rect x="477" y="152" width="116" height="24" rx="5" fill="rgba(249,115,22,0.18)" />
            <text x="535" y="167" textAnchor="middle" fill="#cffafe" fontSize="9">threat intelligence IoCs</text>
            <rect x="477" y="182" width="116" height="24" rx="5" fill="rgba(249,115,22,0.18)" />
            <text x="535" y="197" textAnchor="middle" fill="#cffafe" fontSize="9">UEBA comportamental</text>
            <text x="535" y="230" textAnchor="middle" fill="#fb923c" fontSize="8">Splunk / Sentinel</text>
            <text x="535" y="244" textAnchor="middle" fill="#fb923c" fontSize="8">QRadar / Elastic</text>
            <text x="535" y="260" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">→ 100s alertas/dia</text>

            {/* Arrow to dashboard */}
            <line x1="605" y1="167" x2="630" y2="167" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrCyan)" />

            {/* SOC dashboard */}
            <rect x="630" y="88" width="130" height="158" rx="8" fill="#c2410c" stroke="#f97316" strokeWidth="1.5" />
            <text x="695" y="110" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">SOC ANALYST</text>
            <text x="695" y="126" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">DASHBOARD</text>
            <rect x="642" y="136" width="106" height="20" rx="4" fill="rgba(249,115,22,0.15)" />
            <text x="695" y="149" textAnchor="middle" fill="#fb923c" fontSize="8">alertas por prioridade</text>
            <rect x="642" y="162" width="106" height="20" rx="4" fill="rgba(249,115,22,0.15)" />
            <text x="695" y="175" textAnchor="middle" fill="#fb923c" fontSize="8">MTTD / MTTA / MTTR</text>
            <rect x="642" y="188" width="106" height="20" rx="4" fill="rgba(249,115,22,0.15)" />
            <text x="695" y="201" textAnchor="middle" fill="#fb923c" fontSize="8">threat intel integrado</text>
            <rect x="642" y="214" width="106" height="20" rx="4" fill="rgba(249,115,22,0.15)" />
            <text x="695" y="227" textAnchor="middle" fill="#fb923c" fontSize="8">timeline de incidentes</text>

            <defs>
              <marker id="arrSrc" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#fb923c" />
              </marker>
              <marker id="arrCyan" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.highlight}>
          A correlação é o coração do SIEM: um único evento de "login falhado" não é um alerta; dez falhas do mesmo IP em cinco minutos são um alerta de brute force. Sem correlação, o volume de logs é ingerível — com ela, reduz-se a um conjunto accionável de incidentes priorizados. O MTTD alvo de menos de uma hora contrasta com a média da indústria de 207 dias (IBM X-Force 2023) para detecção de brechas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. SOAR — Automação e Playbooks</h2>
        <p style={S.p}>O SOAR (Security Orchestration, Automation and Response) automatiza tarefas repetitivas de análise usando playbooks — procedimentos de resposta a incidentes codificados em fluxos de trabalho. Tarefas típicas automatizáveis incluem: lookup de reputação IP/URL/hash no VirusTotal, WHOIS e passive DNS, verificação de conta em Active Directory, isolamento de endpoint via API EDR, e criação de ticket no ServiceNow ou Jira.</p>
        <p style={S.p}>O ROI da automação é substancial: triagem de phishing que consome 45 minutos de um analista reduz para 2 minutos com SOAR mais enriquecimento automático. As plataformas líderes são Palo Alto XSOAR, Splunk SOAR (antigo Phantom), Microsoft Sentinel Playbooks (Azure Logic Apps) e Tines. O problema de alert fatigue é crítico — analistas de SOC ignoram 44% dos alertas de segurança devido ao volume, tornando SOAR com triagem ML essencial para operações eficazes.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 330" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="310" fill="var(--bg-secondary)" rx="10" />

            <text x="390" y="25" textAnchor="middle" fill="#fb923c" fontSize="12" fontWeight="700">PLAYBOOK SOAR — RESPOSTA A PHISHING</text>

            {/* Start: alert triggered */}
            <rect x="300" y="38" width="180" height="36" rx="18" fill="rgba(249,115,22,0.18)" stroke="#f97316" strokeWidth="1.5" />
            <text x="390" y="60" textAnchor="middle" fill="#cffafe" fontSize="11" fontWeight="700">alerta SIEM disparado</text>

            <line x1="390" y1="74" x2="390" y2="96" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrSOAR)" />

            {/* Auto-enrich */}
            <rect x="240" y="96" width="300" height="68" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="390" y="115" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">AUTO-ENRIQUECIMENTO</text>
            <rect x="252" y="122" width="80" height="20" rx="4" fill="rgba(164, 84, 9, 0.14)" />
            <text x="292" y="135" textAnchor="middle" fill="#fb923c" fontSize="8">VirusTotal lookup</text>
            <rect x="340" y="122" width="80" height="20" rx="4" fill="rgba(164, 84, 9, 0.14)" />
            <text x="380" y="135" textAnchor="middle" fill="#fb923c" fontSize="8">domain age / WHOIS</text>
            <rect x="428" y="122" width="100" height="20" rx="4" fill="rgba(164, 84, 9, 0.14)" />
            <text x="478" y="135" textAnchor="middle" fill="#fb923c" fontSize="8">email header analysis</text>

            <line x1="390" y1="164" x2="390" y2="186" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrSOAR)" />

            {/* Decision diamond */}
            <polygon points="390,186 480,218 390,250 300,218" fill="rgba(249,115,22,0.10)" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="390" y="213" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">score</text>
            <text x="390" y="228" textAnchor="middle" fill="#fbbf24" fontSize="9">malicioso &gt; 7?</text>

            {/* Yes branch */}
            <line x1="480" y1="218" x2="560" y2="218" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrRed)" />
            <text x="520" y="212" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">SIM</text>
            <rect x="560" y="185" width="200" height="120" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="660" y="206" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">RESPOSTA AUTOMÁTICA</text>
            <rect x="572" y="214" width="176" height="18" rx="4" fill="rgba(249,115,22,0.20)" />
            <text x="660" y="226" textAnchor="middle" fill="#fb923c" fontSize="8">bloquear domínio sender no proxy</text>
            <rect x="572" y="238" width="176" height="18" rx="4" fill="rgba(249,115,22,0.20)" />
            <text x="660" y="250" textAnchor="middle" fill="#fb923c" fontSize="8">quarentena do email</text>
            <rect x="572" y="262" width="176" height="18" rx="4" fill="rgba(249,115,22,0.20)" />
            <text x="660" y="274" textAnchor="middle" fill="#fb923c" fontSize="8">notificar utilizador + gestor</text>
            <rect x="572" y="286" width="176" height="14" rx="4" fill="rgba(249,115,22,0.20)" />
            <text x="660" y="296" textAnchor="middle" fill="#fb923c" fontSize="8">ticket ServiceNow / Jira automático</text>

            {/* No branch */}
            <line x1="300" y1="218" x2="220" y2="218" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrGreen)" />
            <text x="260" y="212" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">NÃO</text>
            <rect x="50" y="195" width="170" height="46" rx="8" fill="#c2410c" stroke="#f97316" strokeWidth="1" />
            <text x="135" y="214" textAnchor="middle" fill="#efefef" fontSize="9">fechar alerta automaticamente</text>
            <text x="135" y="230" textAnchor="middle" fill="#efefef" fontSize="9">log para auditoria</text>

            {/* Integration icons row */}
            <text x="390" y="320" textAnchor="middle" fill="#f97316" fontSize="9">integrações: VirusTotal · Shodan · CrowdStrike EDR · Okta IAM · ServiceNow · Jira · PaloAlto XSOAR · Splunk SOAR</text>

            <defs>
              <marker id="arrSOAR" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
              <marker id="arrRed" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
              <marker id="arrGreen" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.note}>
          O Palo Alto XSOAR tem mais de 700 integrações nativas e permite definir playbooks em interface visual ou YAML. A Microsoft integra playbooks directamente no Sentinel via Azure Logic Apps, fechando o ciclo SIEM-SOAR numa plataforma unificada — reduzindo a latência entre detecção e resposta de horas para segundos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Cyber Threat Intelligence</h2>
        <p style={S.p}>CTI (Cyber Threat Intelligence) é conhecimento baseado em evidências sobre ameaças: quem está a atacar, o que procura, como opera e que indicadores procurar. Divide-se em quatro tipos: Estratégico (nível de gestão, contexto geopolítico, ameaças ao sector), Operacional (campanhas activas, perfis de actores de ameaça), Táctico (TTPs específicas para detecção) e Técnico (IoCs: IPs, domínios, hashes de malware).</p>
        <p style={S.p}>STIX e TAXII são os standards abertos de partilha: STIX (Structured Threat Information eXpression) define o formato dos dados de ameaça; TAXII (Trusted Automated eXchange of Intelligence Information) define o protocolo de transporte. Fontes de CTI incluem feeds comerciais (Recorded Future, Mandiant), OSINT (VirusTotal, Shodan, AlienVault OTX) e ISACs (sector-specific sharing). O modelo Diamond correlaciona Adversário, Capacidade, Infraestrutura e Vítima para perfilar actores de ameaça. O APT29 (Cozy Bear) usa o backdoor SUNBURST, malware WellMess, e visa governos, defesa e saúde.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 820 320" width="100%" style={{ display: 'block' }}>
            <rect width="820" height="320" fill="var(--bg-secondary)" rx="10" />

            <text x="185" y="25" textAnchor="middle" fill="#fb923c" fontSize="12" fontWeight="700">PIRÂMIDE DA DOR (David Bianco)</text>
            <text x="610" y="25" textAnchor="middle" fill="#fb923c" fontSize="12" fontWeight="700">DIAMOND MODEL</text>

            {/* Pyramid of Pain */}
            {[
              { label: 'TTPs',             sub: 'difícil de mudar',     width: 220, y: 45,  solid: true  },
              { label: 'Ferramentas',      sub: 'difícil de mudar',     width: 190, y: 88,  solid: true  },
              { label: 'Artefactos Host',  sub: 'desafiante',           width: 160, y: 131, solid: true  },
              { label: 'Artefactos Rede',  sub: 'incómodo',             width: 130, y: 174, solid: false },
              { label: 'Nomes de Domínio', sub: 'simples',              width: 130, y: 217, solid: false },
              { label: 'Endereços IP',     sub: 'fácil de mudar',       width: 130, y: 260, solid: false },
            ].map((tier, i) => {
              const cx = 185;
              const x = cx - tier.width / 2;
              const op = 0.12 + (5 - i) * 0.06;
              const bgColor = tier.solid ? `rgba(249,115,22,${op.toFixed(2)})` : 'rgba(249,115,22,0.08)';
              const labelColor = tier.solid ? '#fff' : '#f97316';
              const subColor = tier.solid ? 'rgba(255,255,255,0.85)' : '#fb923c';
              return (
                <g key={i}>
                  <rect x={x} y={tier.y} width={tier.width} height={35} rx="4"
                    fill={bgColor} stroke="#f97316" strokeOpacity={tier.solid ? 0.6 : 0.4} strokeWidth="1" />
                  <text x={cx} y={tier.y + 15} textAnchor="middle" fill={labelColor} fontSize="10" fontWeight="700">{tier.label}</text>
                  <text x={cx} y={tier.y + 28} textAnchor="middle" fill={subColor} fontSize="8">{tier.sub}</text>
                </g>
              );
            })}
            <text x="185" y="308" textAnchor="middle" fill="#fb923c" fontSize="8.5" opacity="0.8">quanto mais alto, mais impacto para o adversário se o defensor usar este IoC</text>

            {/* Divider */}
            <line x1="390" y1="35" x2="390" y2="305" stroke="var(--card-border)" strokeWidth="2" />

            {/* Diamond — centre at cx=610, cy=150, radius=90 */}
            {/* cx=610: top=610,60  right=700,150  bottom=610,240  left=520,150 */}
            <polygon points="610,60 700,150 610,240 520,150" fill="none" stroke="#f97316" strokeWidth="1" opacity="0.5" />

            {/* Adversary — top */}
            <rect x="560" y="35" width="100" height="38" rx="6" fill="rgba(249,115,22,0.20)" stroke="#f97316" strokeWidth="1.5" />
            <text x="610" y="53" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">ADVERSÁRIO</text>
            <text x="610" y="67" textAnchor="middle" fill="#fb923c" fontSize="8">APT29, Cozy Bear</text>

            {/* Infrastructure — right */}
            <rect x="705" y="120" width="108" height="58" rx="6" fill="rgba(249,115,22,0.12)" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="759" y="139" textAnchor="middle" fill="#f59e0b" fontSize="9.5" fontWeight="700">INFRAESTRUTURA</text>
            <text x="759" y="153" textAnchor="middle" fill="#fbbf24" fontSize="8">C2 servers, VPS</text>
            <text x="759" y="166" textAnchor="middle" fill="#fbbf24" fontSize="8">domínios alugados</text>

            {/* Victim — bottom */}
            <rect x="560" y="220" width="100" height="38" rx="6" fill="rgba(249,115,22,0.18)" stroke="#f97316" strokeWidth="1.5" />
            <text x="610" y="238" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">VÍTIMA</text>
            <text x="610" y="252" textAnchor="middle" fill="#fb923c" fontSize="8">Gov / Defesa / Saúde</text>

            {/* Capability — left */}
            <rect x="408" y="120" width="108" height="58" rx="6" fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="1.5" />
            <text x="462" y="139" textAnchor="middle" fill="#f97316" fontSize="9.5" fontWeight="700">CAPACIDADE</text>
            <text x="462" y="153" textAnchor="middle" fill="#fb923c" fontSize="8">SUNBURST</text>
            <text x="462" y="166" textAnchor="middle" fill="#fb923c" fontSize="8">WellMess</text>

            {/* Diamond lines */}
            <line x1="610" y1="73"  x2="700" y2="135" stroke="#f97316" strokeOpacity="0.3" strokeWidth="1" />
            <line x1="700" y1="165" x2="610" y2="220" stroke="#f97316" strokeOpacity="0.3" strokeWidth="1" />
            <line x1="610" y1="73"  x2="520" y2="135" stroke="#f97316" strokeOpacity="0.3" strokeWidth="1" />
            <line x1="520" y1="165" x2="610" y2="220" stroke="#f97316" strokeOpacity="0.3" strokeWidth="1" />

            {/* STIX/TAXII */}
            <rect x="415" y="284" width="390" height="26" rx="6" fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.25)" strokeWidth="1" />
            <text x="610" y="301" textAnchor="middle" fill="#fb923c" fontSize="9">partilha via STIX / TAXII · ISACs · AlienVault OTX</text>
          </svg>
        </div>

        <div style={S.highlight}>
          A pirâmide da dor de David Bianco ordena os indicadores pela dificuldade que o atacante tem em mudá-los quando o defensor os usa. Hashes de malware são triviais de mudar (um byte); TTPs como "uso de PowerShell com comandos codificados em base64 por processos não-administrativos" são muito mais difíceis de alterar sem mudar todo o método de ataque. A CTI táctica que alimenta regras de detecção baseadas em TTPs é a mais duradoura e eficaz.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Threat Hunting e ML no SOC</h2>
        <p style={S.p}>Threat hunting é proactivo — analistas procuram ameaças escondidas antes de alertas dispararem. O processo começa com uma hipótese baseada em CTI: "o APT29 usa PowerShell com comandos codificados em base64 executados por processos não-administrativos" (MITRE ATT&CK T1059.001). O analista consulta o SIEM e o EDR com queries específicas, filtra anomalias e falsos positivos, e documenta os resultados como novas regras de detecção.</p>
        <p style={S.p}>ML no SOC resolve o problema de alert fatigue a várias camadas: UEBA (User and Entity Behaviour Analytics) detecta insider threats por desvio do comportamento basal do utilizador; NLP com BERT fine-tuned classifica emails de phishing com precisão superior a regras estáticas; graph ML detecta movimentos laterais por padrões de acesso anómalos no grafo do Active Directory. A Google usa ML para reduzir alertas de segurança em 50% antes da revisão por analista.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 320" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="320" fill="var(--bg-secondary)" rx="10" />

            <text x="390" y="25" textAnchor="middle" fill="#fb923c" fontSize="12" fontWeight="700">CICLO DE THREAT HUNTING</text>

            {/* Circle layout: 4 phases */}
            {/* Phase 1: Hypothesis */}
            <rect x="270" y="40" width="220" height="68" rx="10" fill="rgba(249,115,22,0.18)" stroke="#f97316" strokeWidth="2" />
            <text x="380" y="62" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">1. CRIAR HIPÓTESE</text>
            <text x="380" y="78" textAnchor="middle" fill="#fb923c" fontSize="9">baseada em CTI: APT29 usa PowerShell</text>
            <text x="380" y="92" textAnchor="middle" fill="#fb923c" fontSize="9">com comandos base64 (T1059.001)</text>

            {/* Arrow 1 → 2 */}
            <line x1="490" y1="74" x2="640" y2="120" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrHunt)" />

            {/* Phase 2: Hunt */}
            <rect x="580" y="120" width="185" height="80" rx="10" fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="2" />
            <text x="672" y="143" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">2. CAÇAR</text>
            <text x="672" y="159" textAnchor="middle" fill="#fb923c" fontSize="9">query SIEM / EDR:</text>
            <text x="672" y="173" textAnchor="middle" fill="#fb923c" fontSize="9">PowerShell base64 por não-admins</text>
            <text x="672" y="187" textAnchor="middle" fill="#fb923c" fontSize="9">fora do horário laboral</text>

            {/* Arrow 2 → 3 */}
            <line x1="640" y1="210" x2="490" y2="268" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrHunt2)" />

            {/* Phase 3: Identify */}
            <rect x="270" y="240" width="220" height="68" rx="10" fill="rgba(249,115,22,0.12)" stroke="#f59e0b" strokeWidth="2" />
            <text x="380" y="263" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">3. IDENTIFICAR</text>
            <text x="380" y="279" textAnchor="middle" fill="#fbbf24" fontSize="9">filtrar anomalias e falsos positivos</text>
            <text x="380" y="293" textAnchor="middle" fill="#fbbf24" fontSize="9">confirmar actividade maliciosa</text>

            {/* Arrow 3 → 4 */}
            <line x1="270" y1="274" x2="130" y2="200" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrHunt3)" />

            {/* Phase 4: Document */}
            <rect x="20" y="120" width="195" height="80" rx="10" fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="2" />
            <text x="117" y="143" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">4. DOCUMENTAR</text>
            <text x="117" y="159" textAnchor="middle" fill="#fb923c" fontSize="9">nova regra de detecção SIEM</text>
            <text x="117" y="173" textAnchor="middle" fill="#fb923c" fontSize="9">actualizar runbook de IR</text>
            <text x="117" y="187" textAnchor="middle" fill="#fb923c" fontSize="9">partilhar IoC na CTI feed</text>

            {/* Arrow 4 → 1 (loop) */}
            <line x1="130" y1="120" x2="270" y2="74" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrHunt4)" />

            {/* Center label */}
            <circle cx="380" cy="172" r="42" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.18)" strokeWidth="1" strokeDasharray="4,3" />
            <text x="380" y="167" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">HUNT</text>
            <text x="380" y="181" textAnchor="middle" fill="#fb923c" fontSize="9">CYCLE</text>

            {/* ML annotation */}
            <rect x="20" y="220" width="195" height="60" rx="6" fill="rgba(249,115,22,0.06)" />
            <text x="117" y="236" textAnchor="middle" fill="#f97316" fontSize="8">ML no hunting:</text>
            <text x="117" y="250" textAnchor="middle" fill="#f97316" fontSize="8">UEBA · BERT phishing · graph ML</text>
            <text x="117" y="264" textAnchor="middle" fill="#f97316" fontSize="8">lateral movement AD graph</text>

            <defs>
              <marker id="arrHunt" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
              <marker id="arrHunt2" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
              <marker id="arrHunt3" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f59e0b" />
              </marker>
              <marker id="arrHunt4" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.note}>
          O threat hunting transforma o SOC de reactivo em proactivo. Cada hunt bem-sucedido produz uma nova regra de detecção automática, reduzindo progressivamente o trabalho manual em incidentes futuros semelhantes. UEBA com ML detecta insider threats dias ou semanas antes de um analista notar o comportamento anómalo manualmente.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Incident Response e SOC Metrics</h2>
        <p style={S.p}>O ciclo de vida de resposta a incidentes do NIST SP 800-61 define a abordagem estruturada para tratar incidentes de segurança. Preparação inclui plano de IR, runbooks, exercícios de tabletop e deployment de EDR. Detecção significa um alerta SIEM dispara e o analista faz triagem de severidade (P1 crítico a P4 informativo). Contenção implica isolar hosts afectados via EDR, bloquear IPs e domínios maliciosos, e desactivar contas comprometidas. Eradicação remove malware, corrige a vulnerabilidade explorada e faz reset de credenciais. Recuperação restaura de backups limpos e monitoriza re-infecção. Lições aprendidas produz RCA (Root Cause Analysis) e actualiza regras de detecção e runbooks.</p>
        <p style={S.p}>Os níveis de maturidade do SOC (SOC-CMM) vão de Nível 1 reactivo e ad-hoc até Nível 5 proactivo, orientado a inteligência e totalmente automatizado. As métricas-chave incluem dwell time (média da indústria de 207 dias segundo o IBM X-Force 2023, com alvo abaixo de 1 hora), MTTD, MTTR, rácio alerta-para-ticket e taxa de falsos positivos com alvo inferior a 10%.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 300" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="300" fill="var(--bg-secondary)" rx="10" />

            <text x="390" y="22" textAnchor="middle" fill="#fb923c" fontSize="12" fontWeight="700">CICLO IR — NIST SP 800-61</text>

            {/* 6 phases in two rows of 3 */}
            {[
              { num: '01', title: 'PREPARAÇÃO', tools: 'IR plan · runbooks · tabletop', color: '#f97316', x: 20, y: 38 },
              { num: '02', title: 'DETECÇÃO', tools: 'SIEM alert · triagem P1–P4', color: '#f97316', x: 275, y: 38 },
              { num: '03', title: 'CONTENÇÃO', tools: 'EDR isolamento · block IPs', color: '#f97316', x: 530, y: 38 },
              { num: '04', title: 'ERADICAÇÃO', tools: 'remover malware · patch CVE', color: '#f97316', x: 20, y: 158 },
              { num: '05', title: 'RECUPERAÇÃO', tools: 'restore backup · monitorizar', color: '#f97316', x: 275, y: 158 },
              { num: '06', title: 'PÓS-INCIDENTE', tools: 'RCA · update rules · report', color: '#f97316', x: 530, y: 158 },
            ].map((phase) => (
              <g key={phase.num}>
                <rect x={phase.x} y={phase.y} width={230} height={96} rx="8"
                  fill={`${phase.color}15`} stroke={`${phase.color}60`} strokeWidth="1.5" />
                <text x={phase.x + 12} y={phase.y + 20} fill={phase.color} fontSize="10" fontWeight="800">{phase.num}</text>
                <text x={phase.x + 115} y={phase.y + 20} textAnchor="middle" fill={phase.color} fontSize="11" fontWeight="700">{phase.title}</text>
                <text x={phase.x + 115} y={phase.y + 50} textAnchor="middle" fill="#fb923c" fontSize="9">{phase.tools.split(' · ')[0]}</text>
                <text x={phase.x + 115} y={phase.y + 65} textAnchor="middle" fill="#fb923c" fontSize="9">{phase.tools.split(' · ')[1] || ''}</text>
                {phase.tools.split(' · ')[2] && (
                  <text x={phase.x + 115} y={phase.y + 80} textAnchor="middle" fill="#fb923c" fontSize="9">{phase.tools.split(' · ')[2]}</text>
                )}
              </g>
            ))}

            {/* Arrows row 1 */}
            <line x1="250" y1="86" x2="275" y2="86" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrIR)" />
            <line x1="505" y1="86" x2="530" y2="86" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrIR2)" />

            {/* Down arrow from row1 to row2 */}
            <line x1="644" y1="134" x2="644" y2="158" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrIR3)" />

            {/* Arrows row 2 (right to left) */}
            <line x1="505" y1="206" x2="530" y2="206" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrIR4)" strokeDasharray="none" />
            <line x1="505" y1="206" x2="275" y2="206" stroke="#f97316" strokeWidth="0" />
            <line x1="505" y1="206" x2="505" y2="206" stroke="#f97316" strokeWidth="1.5" />
            <line x1="250" y1="206" x2="275" y2="206" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrIR5)" />

            {/* Dwell time metrics */}
            <rect x="20" y="268" width="360" height="24" rx="6" fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.20)" strokeWidth="1" />
            <text x="200" y="283" textAnchor="middle" fill="#fb923c" fontSize="9">Dwell time médio indústria: 207 dias (IBM X-Force 2023) — alvo: &lt; 1 hora</text>

            <rect x="400" y="268" width="360" height="24" rx="6" fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.18)" strokeWidth="1" />
            <text x="580" y="283" textAnchor="middle" fill="#fb923c" fontSize="9">FPR alvo &lt; 10% · SOC-CMM L1 reactivo → L5 totalmente automatizado</text>

            <defs>
              <marker id="arrIR" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
              <marker id="arrIR2" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
              <marker id="arrIR3" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f59e0b" />
              </marker>
              <marker id="arrIR4" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
              <marker id="arrIR5" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.highlight}>
          O SOC moderno não pode operar sem automação. Com volumes de 100 GB a 10 TB de logs diários e centenas de alertas, o analista humano sem SOAR e ML passa todo o tempo em triagem de falsos positivos. A combinação SIEM-SOAR-CTI-ML fecha o ciclo detecção-resposta e permite que os analistas se concentrem em hunting proactivo e investigação de incidentes complexos — trabalho de alto valor que a automação ainda não consegue substituir.
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>SIEM — Arquitectura e Funcionamento</strong> — SIEM (Security Information and Event Management) agrega logs de toda a infraestrutura, correlaciona eventos em tempo real e gera alertas; é o hub central do SOC, com Splunk e Microsoft Sentinel como líderes de mercado.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>SOAR — Automação e Playbooks</strong> — SOAR (Security Orchestration, Automation and Response) executa playbooks automatizados em resposta a alertas do SIEM — isolando hosts, bloqueando IPs ou abrindo tickets — reduzindo o MTTR de horas para minutos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Cyber Threat Intelligence</strong> — CTI sistematiza conhecimento sobre adversários (TTPs, IOCs, infra) usando frameworks como MITRE ATT&CK; feeds de inteligência enriquecem alertas do SIEM com contexto sobre ameaças conhecidas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Threat Hunting e ML no SOC</strong> — threat hunting é a busca proactiva de ameaças que evitaram detecção automática; ML identifica clusters de comportamento anómalo em logs volumosos que analistas humanos não conseguiriam examinar manualmente.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Incident Response e SOC Metrics</strong> — o processo IR segue fases: preparação, detecção, contenção, erradicação e lições aprendidas; métricas chave incluem MTTD (tempo para detectar) e MTTR (tempo para remediar).</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
