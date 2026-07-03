import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Industry40';

const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  card: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.25rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  highlight: { background: `${color}12`, border: `1px solid ${color}30`, borderRadius: 8, padding: '0.9rem 1.1rem', marginTop: '0.8rem', fontSize: '0.93rem', color: 'var(--text-primary)', lineHeight: 1.7 },
  note: { background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 8, padding: '0.8rem 1rem', marginTop: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: '#0f172a', color: '#e2e8f0', borderRadius: 8, padding: '1rem 1.2rem', fontFamily: 'monospace', fontSize: '0.82rem', lineHeight: 1.7, marginTop: '0.75rem', overflowX: 'auto' },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  grid3: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.85rem' },
};

function PurdueThreatSVG() {
  const layers = [
    { color: '#f97316', label: 'L4 — ERP / Corporate IT', threat: 'Ransomware, phishing, APT', y: 22 },
    { color: '#f97316', label: 'L3 — MES / SCADA (Histor.)', threat: 'Credential theft, lateral movement', y: 70 },
    { color: '#f97316', label: 'L2 — HMI / Engineering WS', threat: 'Stuxnet-style, USB drops', y: 118 },
    { color: '#f97316', label: 'L1 — PLC / DCS Controllers', threat: 'TRITON/TRISIS (Safety PLC)', y: 166 },
    { color: '#f97316', label: 'L0 — Field Devices / IIoT', threat: 'Shodan exposure, firmware attacks', y: 214 },
  ];
  return (
    <svg viewBox="0 0 560 282" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="282" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={18} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Purdue Model como Superficie de Ataque OT</text>
      {layers.map((l, i) => {
        const pad = i * 14;
        return (
          <g key={i}>
            <rect x={16+pad} y={l.y} width={284-pad*2} height={36} fill={l.color} rx="4" opacity="0.15" />
            <rect x={16+pad} y={l.y} width={284-pad*2} height={36} fill="none" stroke={l.color} strokeWidth="1.5" rx="4" />
            <text x={16+pad+4} y={l.y+14} fill={l.color} fontSize="10" fontWeight="700">{l.label}</text>
            <rect x={310} y={l.y} width={240} height={36} fill="#ea580c10" rx="4" />
            <text x={316} y={l.y+14} fill="#fb923c" fontSize="9" fontWeight="700">Ameaca principal:</text>
            <text x={316} y={l.y+27} fill="#e2e8f0" fontSize="8.5">{l.threat}</text>
          </g>
        );
      })}
      <text x={280} y={272} textAnchor="middle" fill="#fb923c" fontSize="9">Dragos 2023: 638 ICS vulnerabilidades publicadas. 41% em L2/L3. Tempo medio breach-to-detect em OT: 200 dias.</text>
    </svg>
  );
}

function ISA62443ZonesSVG() {
  return (
    <svg viewBox="0 0 560 240" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="240" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">ISA/IEC 62443 — Zonas e Condutos de Seguranca OT</text>

      {/* ── Zona IT ── */}
      <rect x={8} y={24} width={138} height={178} fill="#f97316" rx="6" opacity="0.07" />
      <rect x={8} y={24} width={138} height={178} fill="none" stroke="#f97316" strokeWidth="1.5" rx="6" strokeDasharray="6,3" />
      <text x={77} y={40} textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Zona IT</text>
      <text x={77} y={53} textAnchor="middle" fill="#f97316" fontSize="8.5">(SL-Target 2)</text>
      {['ERP / SAP','Email / AD','WSUS','Antivirus','Patch Mgmt'].map((t,i)=>(
        <text key={i} x={77} y={72 + i*20} textAnchor="middle" fill="#fb923c" fontSize="9">{t}</text>
      ))}

      {/* ── FW1 ── */}
      <rect x={152} y={88} width={22} height={54} fill="#eab308" rx="4" opacity="0.8" />
      <text x={163} y={84} textAnchor="middle" fill="#eab308" fontSize="8" fontWeight="700">FW1</text>
      <line x1={146} y1={115} x2={152} y2={115} stroke="#eab308" strokeWidth="1.5" />
      <line x1={174} y1={115} x2={180} y2={115} stroke="#eab308" strokeWidth="1.5" />

      {/* ── IDMZ ── */}
      <rect x={180} y={68} width={100} height={116} fill="#eab308" rx="6" opacity="0.1" />
      <rect x={180} y={68} width={100} height={116} fill="none" stroke="#eab308" strokeWidth="2" rx="6" />
      <text x={230} y={84} textAnchor="middle" fill="#eab308" fontSize="10" fontWeight="700">IDMZ</text>
      {['Historian Mirror','Data Broker','Jump Server','Reverse Proxy'].map((t,i)=>(
        <text key={i} x={230} y={100 + i*18} textAnchor="middle" fill="#fb923c" fontSize="8.5">{t}</text>
      ))}

      {/* ── FW2 ── */}
      <rect x={286} y={88} width={22} height={54} fill="#eab308" rx="4" opacity="0.8" />
      <text x={297} y={84} textAnchor="middle" fill="#eab308" fontSize="8" fontWeight="700">FW2</text>
      <line x1={280} y1={115} x2={286} y2={115} stroke="#eab308" strokeWidth="1.5" />
      <line x1={308} y1={115} x2={314} y2={115} stroke="#eab308" strokeWidth="1.5" />

      {/* ── Zona OT ── */}
      <rect x={314} y={24} width={238} height={178} fill="#fb923c" rx="6" opacity="0.07" />
      <rect x={314} y={24} width={238} height={178} fill="none" stroke="#fb923c" strokeWidth="1.5" rx="6" strokeDasharray="6,3" />
      <text x={433} y={40} textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">Zona OT</text>
      <text x={433} y={53} textAnchor="middle" fill="#fb923c" fontSize="8.5">(SL-Target 3)</text>

      {/* Sub-zona SCADA */}
      <rect x={322} y={60} width={108} height={90} fill="#f97316" rx="5" opacity="0.1" />
      <rect x={322} y={60} width={108} height={90} fill="none" stroke="#f97316" strokeWidth="1.2" rx="5" />
      <text x={376} y={75} textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Sub-zona SCADA</text>
      {['SCADA Server','HMI / Historian','Engineering WS','Alarm Mgmt'].map((t,i)=>(
        <text key={i} x={376} y={90 + i*15} textAnchor="middle" fill="#fb923c" fontSize="8.5">{t}</text>
      ))}

      {/* Sub-zona PLC */}
      <rect x={438} y={60} width={106} height={90} fill="#f97316" rx="5" opacity="0.1" />
      <rect x={438} y={60} width={106} height={90} fill="none" stroke="#f97316" strokeWidth="1.2" rx="5" />
      <text x={491} y={75} textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Sub-zona PLC</text>
      {['PLC / DCS','Safety PLC (SIL2)','Field Devices','IIoT Sensors'].map((t,i)=>(
        <text key={i} x={491} y={90 + i*15} textAnchor="middle" fill="#fb923c" fontSize="8.5">{t}</text>
      ))}

      {/* Conduto label */}
      <text x={433} y={168} textAnchor="middle" fill="#fb923c" fontSize="8.5" fontWeight="700">Conduto: OPC-UA TLS + data diode</text>
      <text x={433} y={181} textAnchor="middle" fill="#fb923c" fontSize="8">Fluxo unidireccional OT -- IT (L0--L3)</text>

      {/* Security Levels legend */}
      <text x={280} y={220} textAnchor="middle" fill="#fb923c" fontSize="9">SL-1: ataques nao intencionais  |  SL-2: intencional simples  |  SL-3: sofisticado  |  SL-4: estado-nacao</text>
      <text x={280} y={234} textAnchor="middle" fill="#fb923c" fontSize="8.5">ISA/IEC 62443-3-2: avaliacao de risco por zona. Conduto define controlos entre zonas adjacentes.</text>
    </svg>
  );
}

function OTAttacksSVG() {
  const attacks = [
    { name: 'Stuxnet (2010)', target: 'Siemens S7 / centrifugadoras Natanz', sector: 'Nuclear', color: '#f97316',
      impact: ['1000+ centrifugadoras destruidas fisicamente', '4 zero-days Windows, rootkit PLC Siemens Step 7'] },
    { name: 'TRITON / TRISIS (2017)', target: 'Schneider Triconex Safety PLC — Aramco Saudi', sector: 'Petroquimica', color: '#f97316',
      impact: ['Bypass de SIS (Safety Instrumented System)', 'Poderia causar explosao da refinaria'] },
    { name: 'Industroyer / CRASHOVER (2016)', target: 'Protocolos IEC 61850, IEC 60870-5-104, DNP3', sector: 'Energia', color: '#f97316',
      impact: ['Blackout 200k casas em Kyiv por 1 hora', 'Primeiro malware com capacidade de controlo directo OT'] },
    { name: 'Colonial Pipeline (2021)', target: 'VPN sem MFA — DarkSide ransomware em IT', sector: 'Oil & Gas', color: '#f97316',
      impact: ['$4.4M resgate pago. 6 dias de shutdown.', '45% do combustivel da costa leste dos EUA afectado'] },
    { name: 'Oldsmar Water (2021)', target: 'TeamViewer publicamente exposto, HMI remoto', sector: 'Agua', color: '#f97316',
      impact: ['NaOH (soda caustica) de 111 para 11100 ppm', 'Operador detectou e reverteu manualmente em 5 min'] },
  ];
  const rowH = 64;
  const svgH = 28 + attacks.length * rowH + 18;
  return (
    <svg viewBox={`0 0 560 ${svgH}`} style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height={svgH} fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Ataques OT de Referencia — Cronologia e Tecnicas</text>
      {attacks.map((a, i) => {
        const y = 24 + i * rowH;
        return (
          <g key={i}>
            <rect x="8" y={y} width="544" height={rowH - 5} fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'transparent'} rx="4" />
            <rect x="8" y={y} width="5" height={rowH - 5} fill={a.color} rx="2" />
            {/* Name */}
            <text x={20} y={y + 15} fill={a.color} fontSize="10.5" fontWeight="700">{a.name}</text>
            {/* Sector badge — top right */}
            <rect x={472} y={y + 5} width={72} height={17} fill={a.color} rx="8" opacity="0.22" />
            <text x={508} y={y + 16} textAnchor="middle" fill={a.color} fontSize="9" fontWeight="700">{a.sector}</text>
            {/* Target */}
            <text x={20} y={y + 29} fill="#fb923c" fontSize="8.5">{a.target}</text>
            {/* Impact lines */}
            <text x={20} y={y + 43} fill="#fb923c" fontSize="8.5">{a.impact[0]}</text>
            <text x={20} y={y + 56} fill="#fb923c" fontSize="8.5">{a.impact[1]}</text>
          </g>
        );
      })}
      <text x={280} y={svgH - 4} textAnchor="middle" fill="#fb923c" fontSize="9">Mandiant M-Trends 2024: 78% dos ataques OT iniciados via comprometimento de IT adjacente.</text>
    </svg>
  );
}

function ZeroTrustOTSVG() {
  const controls = [
    { label: 'Identity & MFA', lines: ['CyberArk PAM, FIDO2 para HMI', 'Session recording obrigatorio'], color: '#f97316' },
    { label: 'Network Segmentacao', lines: ['Micro-segmentacao VLAN/SDN', 'Firewall OT-aware (Claroty, Cisco)'], color: '#f97316' },
    { label: 'Asset Inventory', lines: ['Passive DPI: Nozomi Guardian', 'Dragos Platform — sem injectar pkts'], color: '#f97316' },
    { label: 'Patch & Vuln Mgmt', lines: ['Tenable.ot para CVE scanning', 'Compensating controls em legados'], color: '#f97316' },
    { label: 'SOC OT/IT Unificado', lines: ['Splunk ES + Dragos SOAR', 'Playbooks especificos para ICS'], color: '#f97316' },
    { label: 'Incident Response', lines: ['ICS-CERT playbook, air-gap proc.', 'Backup offline de configs PLC/DCS'], color: '#f97316' },
  ];
  const icons = ['🔐','🔒','📡','🛡','🔍','🚨'];
  return (
    <svg viewBox="0 0 560 215" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="215" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Zero Trust OT — Pilares de Seguranca ICS (NIST SP 800-82 Rev.3)</text>
      {controls.map((c, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = col === 0 ? 8 : 288;
        const y = 24 + row * 60;
        const cardW = 264;
        return (
          <g key={i}>
            <rect x={x} y={y} width={cardW} height={52} fill={c.color} rx="6" opacity="0.1" />
            <rect x={x} y={y} width={cardW} height={52} fill="none" stroke={c.color} strokeWidth="1.5" rx="6" />
            <rect x={x + 6} y={y + 8} width={34} height={34} fill={c.color} rx="4" opacity="0.2" />
            <text x={x + 23} y={y + 30} textAnchor="middle" fill={c.color} fontSize="15">{icons[i]}</text>
            <text x={x + 48} y={y + 17} fill={c.color} fontSize="10" fontWeight="700">{c.label}</text>
            {c.lines.map((l, li) => (
              <text key={li} x={x + 48} y={y + 30 + li * 13} fill="#fb923c" fontSize="8.5">{l}</text>
            ))}
          </g>
        );
      })}
      <text x={280} y={210} textAnchor="middle" fill="#fb923c" fontSize="9">NIST SP 800-82 Rev.3 (2023): ICS security guide — inclui cloud OT, 5G privado e AI/ML para anomaly detection.</text>
    </svg>
  );
}

export default function IND6() {
  const mod = modules[5];
  return (
    <div style={S.page}>
      <Link to="/industry40" style={S.back}>← Industry 4.0</Link>
      <div style={S.badge}>MÓDULO 06</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. OT como Superficie de Ataque — O Problema IT/OT Convergence</h2>
        <div style={S.diagram}><PurdueThreatSVG /></div>
        <div style={S.highlight}>
          A convergencia IT/OT Industry 4.0 e o maior amplificador de risco em ciberseguranca industrial: sistemas OT que antes eram "air-gapped" ficam agora conectados a cloud, MES remotos, e VPN de fornecedores. <strong>Dragos 2023</strong>: 638 vulnerabilidades ICS publicadas — 41% em L2/L3 (o nivel de supervisao/controlo mais critico). Tempo medio de deteccao de breach em OT: <strong>200 dias</strong> vs 21 dias em IT. Razao: ausencia de logging, EDR, e SIEM em ambientes OT.
        </div>
        <div style={S.note}>
          Diferenca fundamental IT vs OT security: em IT, a tríade CIA (Confidentiality, Integrity, Availability) tem Confidentiality como prioridade. Em OT, a prioridade e invertida: <strong>Availability primeiro</strong> (uma paragem de linha custa 10k-100k EUR/hora), depois Integrity (integridade dos parametros de processo), e Confidentiality por ultimo. Patching em OT e complexo: PLCs nao podem ser actualizados durante producao — janelas de manutencao planeadas, anuais ou semestrais.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Ataques OT de Referencia — Anatomia e Impacto</h2>
        <div style={S.diagram}><OTAttacksSVG /></div>
        <div style={S.highlight}>
          <strong>TRITON/TRISIS (2017)</strong> e o ataque mais sofisticado da historia OT: o malware comprometeu Safety Instrumented Systems (SIS) Schneider Triconex, tentando desativar protecoes de seguranca fisica (emergency shutdowns). Se bem-sucedido, poderia causar explosao da refinaria Saudi Aramco. Requeria conhecimento profundo do protocolo TriStation (proprietario, reverse-engineered pelos atacantes). Atribuido a TEMP.Veles (Russia CNIIHM). <strong>Colonial Pipeline</strong>: nao foi ataque OT directo — ransomware em IT causou shutdown preventivo do OT por receio de propagacao.
        </div>
        <div style={S.note}>
          <strong>Stuxnet (2010)</strong>: primeiro cyberweapon com impacto fisico confirmado. 4 zero-days Windows, rootkit PLC Siemens Step 7, manipulacao de frequencias de conversores Vacon/Fararo Paya entre 2 Hz e 1410 Hz para degradar centrifugadoras de enriquecimento de uranio. Spread via USB. Estudado extensivamente no SANS ICS curriculo e Langner Communications (analise tecnica definitiva 2011).
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. ISA/IEC 62443 — Zonas, Condutos e Security Levels</h2>
        <div style={S.diagram}><ISA62443ZonesSVG /></div>
        <div style={S.highlight}>
          <strong>ISA/IEC 62443</strong> e o standard de referencia para ciberseguranca de IACS (Industrial Automation and Control Systems). Conceitos centrais: <strong>Zone</strong> (agrupamento logico de activos com requisitos de seguranca similares), <strong>Conduit</strong> (canal de comunicacao entre zonas com controlos definidos), <strong>Security Level (SL)</strong>: SL1 (protege contra ataques nao intencionais), SL2 (ataques intencionais simples), SL3 (ataques sofisticados), SL4 (estado-nacao). A IDMZ (Industrial DMZ) com dois firewalls unidireccionais e a arquitectura recomendada para separar L2/L3 de L4.
        </div>
        <div style={S.note}>
          <strong>Data Diode</strong> (Waterfall Security, Owl Cyber Defense): dispositivo hardware que permite fluxo de dados apenas numa direcao (OT para IT). Fisica da seguranca: TX apenas, sem RX — impossivel de comprometer por software. Usado em sectores criticos (nuclear, refinarias) onde nenhum dado deve fluir de IT para OT. Latencia adicional: 1-50 ms. Limitacoes: nao suporta protocolos bi-direcionais (OPC-UA pub/sub) sem proxy dedicado.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Zero Trust OT — Arquitectura de Seguranca Moderna</h2>
        <div style={S.diagram}><ZeroTrustOTSVG /></div>
        <div style={S.highlight}>
          <strong>Zero Trust</strong> em OT: "nunca confiar, sempre verificar" — cada acesso a um PLC ou HMI requer autenticacao explicita, mesmo dentro da zona OT. Implementacao pratica: <strong>PAM</strong> (Privileged Access Management, CyberArk) para acesso remoto de engenheiros com MFA + session recording; <strong>passive asset discovery</strong> (Nozomi Guardian, Claroty CTD) para inventario continuo sem perturbar comunicacoes OT; <strong>micro-segmentacao</strong> com firewalls OT-aware que entendem protocolos Modbus, OPC-UA, PROFINET.
        </div>
        <div style={S.note}>
          <strong>NIST SP 800-82 Rev.3</strong> (2023): guia de referencia actualizado para ICS security, substituindo a versao 2011 que era anterior a Industria 4.0. Inclui nowas seccoes sobre cloud OT, 5G privado, e AI/ML para anomaly detection em trafego OT. Inclui mappings para IEC 62443, NERC CIP (energia electrica), e TSA directives (oleodutos).
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. OT Network Monitoring e Anomaly Detection</h2>
        <div style={S.grid2}>
          <div>
            <div style={{ fontWeight: 700, color, marginBottom: '0.5rem', fontSize: '0.95rem' }}>Passive Deep Packet Inspection</div>
            <p style={S.p}>
              Plataformas como <strong>Nozomi Networks Guardian</strong> e <strong>Dragos Platform</strong> monitorizam trafego OT de forma passiva (sem injectar pacotes — risco zero de disrupcao). Analisam protocolos industriais: Modbus, EtherNet/IP, PROFINET, BACnet, IEC 60870-5-104, DNP3. Criam baseline de comunicacoes normais e alertam em comportamentos anomalos: novo dispositivo em rede, comunicacao incomum entre PLCs, leitura de parametros nao habitual.
            </p>
          </div>
          <div>
            <div style={{ fontWeight: 700, color, marginBottom: '0.5rem', fontSize: '0.95rem' }}>ML para OT Anomaly Detection</div>
            <p style={S.p}>
              <strong>Graph Neural Networks</strong> para modelar topologia de rede OT e detectar mudancas estruturais (novo no adicionado, rota de comunicacao alterada). <strong>LSTM Autoencoder</strong> para detectar anomalias em series temporais de variaveis de processo (pressao, temperatura, caudal) — valores fora do envelope normal podem indicar ataque ou falha fisica. Taxa de falsos positivos critica em OT: alertas em excesso levam operadores a ignorar todos.
            </p>
          </div>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. Benchmarks e Regulamentacao OT Security</h2>
        <div style={S.grid3}>
          {[
            { title: 'Claroty / Nozomi Adoption', stat: '60% top fabricantes', detail: 'Das 500 maiores empresas industriais, 60% usam plataformas de visibilidade OT. +200% crescimento YoY 2022-2024.' },
            { title: 'Colonial Pipeline Cost', stat: '$4.4M ransom + $30M', detail: '$4.4M pago ao DarkSide. Custos totais estimados em $30M (shutdown + IR + remediation + reputacao).' },
            { title: 'EU NIS2 Directive (2024)', stat: 'Obrigatorio energia/agua', detail: 'Directiva NIS2 obriga sectores criticos (energia, agua, transporte) a reportar incidentes OT em 72h e auditar seguranca anualmente.' },
            { title: 'NERC CIP (energia EUA)', stat: '14 standards CIP', detail: 'Critical Infrastructure Protection: 14 normas para seguranca de redes electricas (CIP-002 a CIP-014). Multas ate $1M/dia.' },
            { title: 'Siemens ProductCERT', stat: '200+ CVEs/ano', detail: 'Siemens publica ~200 advisories de seguranca OT/ano para PLC S7, SCADA WinCC, Simatic. PSIRT dedicado.' },
            { title: 'Dragos Year-in-Review', stat: '20 adversary groups', detail: 'Dragos 2023: 20 grupos APT com capacidades ICS conhecidas. VOLTZITE, ELECTRUM, KAMACITE activos em 2023.' },
          ].map((b, i) => (
            <div key={i} style={{ ...S.card, borderLeft: `3px solid ${color}` }}>
              <div style={{ fontWeight: 700, color, marginBottom: '0.25rem', fontSize: '0.85rem' }}>{b.title}</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{b.stat}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{b.detail}</div>
            </div>
          ))}
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>7. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>OT como Superficie de Ataque — O Problema IT/OT Convergence</strong> — a convergência IT/OT expõe sistemas SCADA e PLCs (desenhados sem segurança) à internet; um ataque OT pode parar uma fábrica, contaminar água ou bloquear energia — o ataque ao oleoduto Colonial Pipeline (2021) causou $4.4M de prejuízo e escassez de combustível.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Ataques OT de Referencia — Anatomia e Impacto</strong> — Stuxnet (2010) destruiu centrifugadoras nucleares iranianas manipulando PLCs Siemens; TRITON (2017) atacou sistemas de segurança (SIS) de uma petroquímica para forçar uma explosão; Industroyer derrubou a rede eléctrica ucraniana — casos de estudo de ataque OT sofisticado.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>ISA/IEC 62443 — Zonas, Condutos e Security Levels</strong> — ISA/IEC 62443 divide a rede OT em zonas (grupos de activos com requisitos de segurança similares) e condutos (canais de comunicação entre zonas); Security Levels SL1–SL4 definem requisitos crescentes de protecção — standard de facto para segurança industrial.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Zero Trust OT — Arquitectura de Seguranca Moderna</strong> — Zero Trust OT aplica micro-segmentação a redes industriais: cada dispositivo e fluxo de dados é autenticado e autorizado individualmente; industrial DMZ com data diodes e proxies unidireccionais separa fisicamente IT de OT — substitui o modelo de perimétrico tradicional.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>OT Network Monitoring e Anomaly Detection</strong> — passive network monitoring (Claroty, Dragos, Nozomi) identifica activos OT sem perturbação; ML detecta anomalias em tráfego Modbus, DNP3 e OPC-UA que indiquem comportamento incomum — detecção de movimentos laterais e comandos não autorizados a PLCs.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Implementacao: OT Asset Discovery + Anomaly Detection</strong> — pipeline: span port do switch industrial → passive capture → parsing de protocolos OT → fingerprinting de activos → baseline de comunicações → detecção de novas ligações ou padrões incomuns por Isolation Forest — latência de detecção &lt;60s em redes de 1000 activos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Benchmarks e Regulamentacao OT Security</strong> — NERC CIP (energia) e NIS2 (EU, 2024) são regulamentações obrigatórias para infraestrutura crítica; CISA ICS-CERT publica advisories de vulnerabilidades OT; custo médio de um incidente OT em 2023 foi $3.2M (IBM Cost of Data Breach Report).</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
