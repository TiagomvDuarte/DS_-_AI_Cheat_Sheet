import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Cybersecurity';

const mod = modules[6];
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

export default function CYB7() {
  return (
    <div style={S.page}>
      <Link to="/cybersecurity" style={S.back}>← Cybersecurity & AI</Link>
      <div style={S.badge}>MÓDULO {mod.num}</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      {/* ── SECTION 1 ─────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Zero Trust Architecture</h2>

        <p style={S.p}>
          O modelo Zero Trust, cunhado por John Kindervag na Forrester em 2010, representa uma mudança paradigmática na arquitetura de segurança. O modelo tradicional de perímetro assumia que tudo dentro da rede corporativa era de confiança — uma única brecha (email de phishing, VPN comprometida) dava ao atacante acesso livre a todos os recursos internos. Zero Trust elimina essa premissa.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 820 380" width="100%" style={{ display: 'block' }}>
            <rect width="820" height="380" rx="10" fill="var(--bg-secondary)" />
            <defs>
              <marker id="arrZT" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#f97316" />
              </marker>
              <marker id="arrZTok" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#fb923c" />
              </marker>
            </defs>

            <text x="410" y="26" textAnchor="middle" fill={color} fontSize="13" fontWeight="700">ZERO TRUST vs MODELO DE PERÍMETRO</text>

            {/* ── LEFT: Perimeter model ── */}
            <text x="195" y="48" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">❌ Modelo de Perímetro</text>

            {/* Internet → Firewall → Inside flow */}
            {/* Internet box */}
            <rect x="20" y="62" width="70" height="30" rx="5" fill="rgba(249,115,22,0.06)" stroke="#f9731660" strokeWidth="1" />
            <text x="55" y="81" textAnchor="middle" fill="#fb923c" fontSize="9">Internet</text>

            {/* Arrow into firewall */}
            <line x1="90" y1="77" x2="118" y2="77" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrZT)" />
            <text x="104" y="71" textAnchor="middle" fill="#ea580c" fontSize="8">brecha</text>

            {/* Firewall/VPN perimeter */}
            <rect x="120" y="55" width="255" height="195" rx="10" fill="rgba(249,115,22,0.04)" stroke="#f9731660" strokeWidth="2" strokeDasharray="6,3" />
            <text x="135" y="71" fill="#f97316" fontSize="8" fontWeight="600">Firewall / VPN</text>

            {/* Trusted zone — x=135 to x=360 */}
            <rect x="135" y="78" width="230" height="110" rx="6" fill="rgba(249,115,22,0.09)" stroke="rgba(249,115,22,0.25)" strokeWidth="1" />
            <text x="250" y="94" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600">Rede Interna "Confiável"</text>

            {/* 6 devices in 2 rows — cx: 175, 250, 325 → boxes 137-213, 212-288, 287-363 */}
            {[
              { x: 175, y: 102, label: 'Servidor HR' },
              { x: 250, y: 102, label: 'Base Dados' },
              { x: 325, y: 102, label: 'Servidor Dev' },
              { x: 175, y: 148, label: 'PC Admin' },
              { x: 250, y: 148, label: 'Impressora' },
              { x: 325, y: 148, label: 'IoT Device' },
            ].map(({ x, y, label }) => (
              <g key={label}>
                <rect x={x - 36} y={y} width="72" height="26" rx="4" fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.30)" strokeWidth="1" />
                <text x={x} y={y + 16} textAnchor="middle" fill="#fb923c" fontSize="8">{label}</text>
              </g>
            ))}

            {/* Attacker inside — lateral movement arrows */}
            <rect x="155" y="192" width="185" height="26" rx="5" fill="#c2410c" stroke="#ea580c" strokeWidth="1.5" />
            <text x="248" y="209" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">⚠ Atacante — Acesso Livre a Tudo</text>

            {/* Lateral movement arrows */}
            <line x1="193" y1="178" x2="193" y2="192" stroke="#ea580c" strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#arrZT)" />
            <line x1="248" y1="178" x2="248" y2="192" stroke="#ea580c" strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#arrZT)" />
            <line x1="303" y1="178" x2="303" y2="192" stroke="#ea580c" strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#arrZT)" />

            <text x="248" y="240" textAnchor="middle" fill="#fb923c" fontSize="9">1 brecha = acesso total a todos os recursos</text>

            {/* Principles */}
            <rect x="20" y="260" width="355" height="46" rx="6" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.20)" strokeWidth="1" />
            <text x="30" y="278" fill="#f97316" fontSize="9" fontWeight="700">Princípios ZT:</text>
            <text x="110" y="278" fill="#fb923c" fontSize="9">Never Trust, Always Verify</text>
            <text x="30" y="296" fill="#f97316" fontSize="9" fontWeight="700">Assume Breach</text>
            <text x="110" y="296" fill="#fb923c" fontSize="9">Least Privilege Access (JIT/JEA)</text>

            {/* ── DIVIDER ── */}
            <line x1="405" y1="38" x2="405" y2="365" stroke="var(--card-border)" strokeWidth="1.5" />

            {/* ── RIGHT: Zero Trust ── */}
            <text x="615" y="48" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">✓ Zero Trust Architecture</text>

            {/* User/Request at left */}
            <rect x="420" y="155" width="80" height="50" rx="6" fill="rgba(249,115,22,0.10)" stroke={`${color}50`} strokeWidth="1.5" />
            <text x="460" y="175" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Utilizador</text>
            <text x="460" y="188" textAnchor="middle" fill="#fb923c" fontSize="8">+ Dispositivo</text>
            <text x="460" y="200" textAnchor="middle" fill="#fb923c" fontSize="8">+ Contexto</text>

            {/* Arrow → Policy Engine */}
            <line x1="500" y1="180" x2="538" y2="180" stroke={color} strokeWidth="1.5" markerEnd="url(#arrZTok)" />
            <text x="519" y="173" textAnchor="middle" fill="#fb923c" fontSize="8">pedido</text>

            {/* Policy Engine */}
            <rect x="538" y="140" width="154" height="80" rx="8" fill={`${color}20`} stroke={color} strokeWidth="2" />
            <text x="615" y="163" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Policy Engine</text>
            <text x="615" y="178" textAnchor="middle" fill="#fb923c" fontSize="8">Avalia CADA pedido</text>
            <text x="615" y="192" textAnchor="middle" fill="#fb923c" fontSize="8">Identity · Device · Context</text>
            <text x="615" y="207" textAnchor="middle" fill={color} fontSize="8" fontWeight="600">✓ ALLOW  /  ✗ DENY</text>

            {/* Arrow → Resources */}
            <line x1="692" y1="180" x2="728" y2="180" stroke={color} strokeWidth="1.5" markerEnd="url(#arrZTok)" />
            <text x="710" y="173" textAnchor="middle" fill="#fb923c" fontSize="8">acesso</text>

            {/* Resources column */}
            {[
              { y: 62,  label: 'App CRM' },
              { y: 102, label: 'Base Dados' },
              { y: 142, label: 'Código Fonte' },
              { y: 182, label: 'HR Portal' },
              { y: 222, label: 'Infra AWS' },
            ].map(({ y, label }) => (
              <g key={label}>
                <rect x="728" y={y} width="76" height="28" rx="5" fill="rgba(249,115,22,0.10)" stroke={`${color}40`} strokeWidth="1" />
                <text x="766" y={y + 17} textAnchor="middle" fill={color} fontSize="8">{label}</text>
                {/* individual auth line from Policy Engine */}
                <line x1="692" y1="180" x2="728" y2={y + 14} stroke={`${color}30`} strokeWidth="0.8" strokeDasharray="3,3" />
              </g>
            ))}

            <text x="766" y="272" textAnchor="middle" fill="#fb923c" fontSize="8">cada recurso</text>
            <text x="766" y="283" textAnchor="middle" fill="#fb923c" fontSize="8">autorizado individualmente</text>

            {/* 5 Pillars */}
            <rect x="415" y="315" width="390" height="50" rx="8" fill="rgba(249,115,22,0.06)" stroke={`${color}20`} strokeWidth="1" />
            <text x="610" y="332" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">5 Pilares do Zero Trust</text>
            {['Identidade', 'Dispositivo', 'Rede', 'Aplicação', 'Dados'].map((p, i) => (
              <g key={p}>
                <rect x={422 + i * 75} y="339" width="68" height="20" rx="4" fill={`${color}15`} stroke={`${color}30`} strokeWidth="1" />
                <text x={456 + i * 75} y="353" textAnchor="middle" fill={color} fontSize="8" fontWeight="600">{p}</text>
              </g>
            ))}
          </svg>
        </div>

        <p style={S.p}>
          O modelo Zero Trust assenta em três princípios fundamentais. Verificar explicitamente: autenticar e autorizar sempre com base em todos os pontos de dados disponíveis — identidade, localização, saúde do dispositivo, serviço/workload, classificação de dados, anomalias comportamentais. Usar acesso de menor privilégio: JIT (Just-In-Time) e JEA (Just-Enough-Access) — acesso concedido apenas quando necessário, apenas para o que é necessário. Assumir brecha: minimizar o raio de explosão, segmentar acessos, verificar cifra end-to-end, usar análises para obter visibilidade.
        </p>
        <p style={S.p}>
          O Google BeyondCorp (2011) foi a primeira implementação major de Zero Trust em escala — o Google migrou milhares de colaboradores para fora da VPN. O acesso passou a basear-se no certificado do dispositivo (gerido centralmente) combinado com a identidade do utilizador, independentemente de a ligação vir da rede interna ou da Internet. O resultado: utilizadores comprometidos não têm acesso automático a outros sistemas; o acesso é granular por serviço.
        </p>
        <div style={S.highlight}>
          Segmentação micro-perimetral: em vez de uma rede plana onde qualquer máquina pode comunicar com qualquer outra, Zero Trust impõe que cada comunicação seja autorizada individualmente. Lateral movement — movimento de um sistema comprometido para outros dentro da rede — torna-se extremamente difícil, pois cada pedido deve passar pelo Policy Engine.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 2 ─────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. IAM — Identity and Access Management</h2>

        <p style={S.p}>
          O IAM é a pedra angular do Zero Trust — sem identidade verificada, nenhuma decisão de acesso é possível. O IAM moderno combina autenticação forte (MFA resistente a phishing), autorização granular (RBAC/ABAC) e gestão de acessos privilegiados (PAM).
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 820 380" width="100%" style={{ display: 'block' }}>
            <rect width="820" height="380" rx="10" fill="var(--bg-secondary)" />
            <defs>
              <marker id="arrIAM" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#f97316" />
              </marker>
            </defs>

            <text x="410" y="24" textAnchor="middle" fill={color} fontSize="13" fontWeight="700">ARQUITETURA IAM — AUTENTICAÇÃO E AUTORIZAÇÃO</text>

            {/* ── ROW 1: Auth flow ── */}
            {[
              { x: 10,  w: 122, label: 'Identity Provider', sub: 'Azure AD / Okta\nGoogle Workspace', solid: true },
              { x: 152, w: 122, label: 'MFA',               sub: 'TOTP · FIDO2\nYubiKey · TouchID', solid: false },
              { x: 294, w: 142, label: 'Avaliação Política', sub: 'RBAC: roles → permissões\nABAC: dept + class + hora', solid: false },
              { x: 456, w: 122, label: 'Session Token',     sub: 'JWT / OIDC\nscoped access', solid: false },
              { x: 598, w: 112, label: '✓ Recurso',         sub: 'Acesso\nConcedido', solid: true },
            ].map(({ x, w, label, sub, solid }, i, arr) => (
              <g key={label}>
                <rect x={x} y="38" width={w} height="52" rx="7"
                  fill={solid ? `${color}20` : 'rgba(249,115,22,0.06)'}
                  stroke={solid ? color : `${color}50`}
                  strokeWidth={solid ? 2 : 1.5} />
                <text x={x + w/2} y="58" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">{label}</text>
                {sub.split('\n').map((s, si) => (
                  <text key={si} x={x + w/2} y={71 + si * 12} textAnchor="middle" fill="#fb923c" fontSize="8">{s}</text>
                ))}
                {i < arr.length - 1 && (
                  <line x1={x + w + 1} y1="64" x2={x + w + 19} y2="64" stroke={color} strokeWidth="1.5" markerEnd="url(#arrIAM)" />
                )}
              </g>
            ))}

            {/* ── ROW 2: Protocols ── */}
            <text x="410" y="114" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="600">Protocolos de Federação</text>
            {[
              { cx: 103, label: 'SAML 2.0',  sub: 'SSO enterprise (XML)' },
              { cx: 293, label: 'OAuth 2.0', sub: 'Autorização delegada' },
              { cx: 483, label: 'OIDC',      sub: 'Identidade (OAuth+JWT)' },
              { cx: 673, label: 'SCIM',      sub: 'Provisionamento auto' },
            ].map(({ cx, label, sub }) => (
              <g key={label}>
                <rect x={cx - 85} y="120" width="170" height="38" rx="6" fill={`${color}10`} stroke={`${color}30`} strokeWidth="1" />
                <text x={cx} y="136" textAnchor="middle" fill={color} fontSize="10" fontWeight="600">{label}</text>
                <text x={cx} y="150" textAnchor="middle" fill="#fb923c" fontSize="8">{sub}</text>
              </g>
            ))}

            {/* ── ROW 3: RBAC | ABAC side by side ── */}
            {/* RBAC */}
            <rect x="20" y="175" width="380" height="120" rx="8" fill="rgba(249,115,22,0.06)" stroke={`${color}20`} strokeWidth="1" />
            <text x="210" y="193" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">RBAC — Role-Based Access Control</text>
            {[
              { role: 'Admin',     perms: ['Read','Write','Delete','Config'] },
              { role: 'Developer', perms: ['Read','Write'] },
              { role: 'Viewer',    perms: ['Read'] },
            ].map(({ role, perms }, ri) => (
              <g key={role}>
                <rect x="28" y={200 + ri * 28} width="72" height="22" rx="4" fill={`${color}20`} stroke={color} strokeWidth="1" />
                <text x="64" y={214 + ri * 28} textAnchor="middle" fill={color} fontSize="9" fontWeight="600">{role}</text>
                {perms.map((p, pi) => (
                  <g key={p}>
                    <rect x={112 + pi * 68} y={200 + ri * 28} width="60" height="22" rx="3" fill="rgba(249,115,22,0.04)" stroke="var(--card-border)" strokeWidth="1" />
                    <text x={142 + pi * 68} y={214 + ri * 28} textAnchor="middle" fill="#fb923c" fontSize="8">{p}</text>
                  </g>
                ))}
              </g>
            ))}

            {/* ABAC */}
            <rect x="420" y="175" width="380" height="120" rx="8" fill="rgba(249,115,22,0.06)" stroke={`${color}20`} strokeWidth="1" />
            <text x="610" y="193" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">ABAC — Attribute-Based Access Control</text>
            {[
              { t: 'IF user.dept == "Finance"',             bold: false },
              { t: 'AND resource.class == "Confidential"',  bold: false },
              { t: 'AND time >= 09:00 AND time <= 18:00',   bold: false },
              { t: 'AND device.compliant == true',          bold: false },
              { t: 'THEN PERMIT',                           bold: true  },
            ].map(({ t, bold }, i) => (
              <text key={i} x="432" y={207 + i * 17} fill={bold ? color : '#fb923c'} fontSize="9" fontFamily="monospace" fontWeight={bold ? 700 : 400}>{t}</text>
            ))}

            {/* ── AD Attack paths ── */}
            <rect x="20" y="308" width="780" height="68" rx="8" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.15)" strokeWidth="1" />
            <text x="410" y="326" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">AD Attack Paths (Active Directory)</text>
            {[
              { label: 'Pass-the-Hash',  desc: 'roubar NTLM hash da memória (mimikatz) e autenticar sem password' },
              { label: 'Kerberoasting',  desc: 'pedir TGS para SPN de serviço → crack offline da chave de serviço' },
              { label: 'DCSync',         desc: 'simular DC para replicar todos os hashes do domínio via DRSUAPI' },
            ].map(({ label, desc }, i) => (
              <g key={label}>
                <text x="30" y={341 + i * 14} fill={color} fontSize="8" fontWeight="700">{label}:</text>
                <text x="115" y={341 + i * 14} fill="#fb923c" fontSize="8">{desc}</text>
              </g>
            ))}
          </svg>
        </div>

        <p style={S.p}>
          A autenticação multifator (MFA) reduz o risco de compromisso de conta em 99,9% (dados da Microsoft). Os fatores são: conhecimento (password), posse (TOTP, SMS OTP, hardware token) e inerência (biometria). FIDO2/WebAuthn são o padrão de referência para autenticação resistente a phishing: a chave privada nunca sai do dispositivo, e a resposta ao desafio inclui a origem (origin binding) — impossível de reutilizar noutra origem, eliminando phishing de credenciais.
        </p>
        <p style={S.p}>
          O RBAC (Role-Based Access Control) atribui permissões a roles e os utilizadores a roles — simples de gerir em organizações com estruturas claras. O ABAC (Attribute-Based Access Control) avalia políticas baseadas em atributos do utilizador, recurso, ação e ambiente (hora, localização, estado do dispositivo) — mais granular, adequado para ambientes cloud multi-tenant. O PAM (Privileged Access Management), com soluções como CyberArk e BeyondTrust, faz vault de credenciais privilegiadas, regista sessões de administração e implementa elevação JIT de privilégios.
        </p>
        <div style={S.highlight}>
          MFA resistente a phishing: FIDO2/WebAuthn com chaves de hardware (YubiKey, Titan Key) ou autenticadores de plataforma (Windows Hello, Touch ID, Face ID) são a única forma de MFA verdadeiramente imune a phishing — sem segredo partilhado, sem possibilidade de relay de credenciais em tempo real. A Google eliminou o phishing de contas de colaboradores desde que mandatou YubiKeys em 2017.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 3 ─────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Cloud Security Posture Management (CSPM)</h2>

        <p style={S.p}>
          Oitenta por cento das brechas na cloud são causadas por misconfigurações, não por vulnerabilidades exploradas (Gartner). A velocidade de deployment na cloud — infraestrutura provisionada em segundos via IaC — multiplica a superfície de ataque se os controlos de segurança não acompanharem. O CSPM monitoriza continuamente as configurações da infraestrutura cloud contra benchmarks de segurança.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 820 374" width="100%" style={{ display: 'block' }}>
            <rect width="820" height="400" rx="10" fill="var(--bg-secondary)" />
            <defs>
              <marker id="arrCSPM" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill={color} />
              </marker>
            </defs>

            <text x="410" y="24" textAnchor="middle" fill={color} fontSize="13" fontWeight="700">CSPM — MISCONFIGURATIONS & CLOUD SHARED RESPONSIBILITY</text>

            {/* ── TOP LEFT: Shared Responsibility (x=20 to x=370) ── */}
            <text x="195" y="46" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">Modelo de Responsabilidade Partilhada</text>
            <rect x="20" y="52" width="350" height="155" rx="8" fill="rgba(249,115,22,0.04)" stroke={`${color}20`} strokeWidth="1" />
            {/* Header row */}
            <rect x="28" y="58" width="190" height="22" rx="3" fill={`${color}15`} />
            <text x="123" y="73" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Camada</text>
            <rect x="226" y="58" width="136" height="22" rx="3" fill={`${color}15`} />
            <text x="294" y="73" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Responsável</text>
            {[
              { layer: 'Física / Hypervisor / Rede', resp: 'Cloud Provider', bold: false },
              { layer: 'OS (managed services)',       resp: 'Partilhada',    bold: false },
              { layer: 'Dados / Identidade / Apps',  resp: 'Cliente',       bold: true  },
              { layer: 'Config IAM / S3 Policies',   resp: 'Cliente (100%)',bold: true  },
            ].map(({ layer, resp, bold }, i) => (
              <g key={layer}>
                <rect x="28" y={84 + i * 29} width="190" height="25" rx="3" fill={i%2===0 ? 'rgba(249,115,22,0.06)' : 'rgba(249,115,22,0.03)'} stroke="var(--card-border)" strokeWidth="0.5" />
                <text x="123" y={100 + i * 29} textAnchor="middle" fill="#fb923c" fontSize="8">{layer}</text>
                <rect x="226" y={84 + i * 29} width="136" height="25" rx="3" fill={bold ? `${color}18` : 'rgba(249,115,22,0.06)'} stroke={bold ? `${color}40` : 'var(--card-border)'} strokeWidth={bold ? 1 : 0.5} />
                <text x="294" y={100 + i * 29} textAnchor="middle" fill={bold ? color : '#fb923c'} fontSize="8" fontWeight={bold ? 700 : 400}>{resp}</text>
              </g>
            ))}

            {/* ── TOP RIGHT: Common Misconfigs (3×2 grid, x=390 to x=800) ── */}
            <text x="600" y="46" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">Misconfigurations mais comuns</text>
            {[
              { cx: 455, cy: 58,  label: 'S3 Bucket Público',  sub: 'Capital One: 100M registos' },
              { cx: 595, cy: 58,  label: 'Root sem MFA',        sub: 'Acesso total sem 2FA'       },
              { cx: 735, cy: 58,  label: 'SG 0.0.0.0/0:22',    sub: 'SSH exposto à Internet'     },
              { cx: 455, cy: 120, label: 'EBS Snapshot Public', sub: 'Dados visíveis publicamente'},
              { cx: 595, cy: 120, label: 'AdministratorAccess', sub: 'IAM role over-privileged'  },
              { cx: 735, cy: 120, label: 'IMDSv1 exposto',      sub: 'SSRF → credenciais IAM'    },
            ].map(({ cx, cy, label, sub }) => (
              <g key={label}>
                <rect x={cx - 63} y={cy} width="126" height="44" rx="6" fill="rgba(249,115,22,0.08)" stroke={`${color}40`} strokeWidth="1.5" />
                <text x={cx} y={cy + 17} textAnchor="middle" fill={color} fontSize="8.5" fontWeight="700">{label}</text>
                <text x={cx} y={cy + 32} textAnchor="middle" fill="#fb923c" fontSize="7.5">{sub}</text>
              </g>
            ))}

            {/* ── BOTTOM: CSPM monitoring flow ── */}
            <rect x="20" y="214" width="780" height="145" rx="10" fill="rgba(249,115,22,0.05)" stroke={`${color}25`} strokeWidth="1" />
            <text x="410" y="232" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">CSPM — Fluxo de Monitorização Contínua</text>

            {[
              { x: 98,  label: 'Cloud APIs',  sub: 'AWS / Azure\nGCP Config'  },
              { x: 248, label: 'CSPM Engine', sub: 'Wiz / Orca\nDefender'    },
              { x: 398, label: 'Benchmarks',  sub: 'CIS / NIST\nPCI-DSS'     },
              { x: 548, label: 'Risk Score',  sub: 'CVSS +\nContexto'         },
              { x: 698, label: 'Remediation', sub: 'Ticket / IaC\nAuto-fix'  },
            ].map(({ x, label, sub }, i) => (
              <g key={label}>
                <rect x={x - 68} y="240" width="136" height="52" rx="7" fill={`${color}15`} stroke={`${color}40`} strokeWidth="1.5" />
                <text x={x} y="260" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">{label}</text>
                {sub.split('\n').map((s, si) => (
                  <text key={si} x={x} y={273 + si * 12} textAnchor="middle" fill="#fb923c" fontSize="8">{s}</text>
                ))}
                {i < 4 && <line x1={x + 68} y1="266" x2={x + 82} y2="266" stroke={color} strokeWidth="1.5" markerEnd="url(#arrCSPM)" />}
              </g>
            ))}

            <text x="410" y="308" textAnchor="middle" fill="#fb923c" fontSize="8">Wiz: 62% dos ambientes AWS têm ≥1 storage bucket público · Ferramentas: AWS Security Hub · Microsoft Defender for Cloud · Wiz · Orca (agentless)</text>

            <rect x="30" y="318" width="760" height="36" rx="6" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.15)" strokeWidth="1" />
            <text x="410" y="334" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">⚠ Capital One Breach (2019)</text>
            <text x="410" y="350" textAnchor="middle" fill="#fb923c" fontSize="8">SSRF → metadata EC2 (169.254.169.254) → credenciais IAM com permissões excessivas → exfiltração de 100M registos S3</text>
          </svg>
        </div>

        <p style={S.p}>
          O Modelo de Responsabilidade Partilhada define que o cloud provider é responsável pela segurança da cloud (infraestrutura física, hipervisor, rede de backbone), enquanto o cliente é responsável pela segurança na cloud (dados, identidade, aplicações, configuração de sistemas operativos, políticas IAM). Configurações de S3 bucket, security groups, políticas IAM e encriptação em repouso são responsabilidade total do cliente.
        </p>
        <p style={S.p}>
          O CSPM (Cloud Security Posture Management) monitoriza continuamente as configurações cloud contra benchmarks de segurança como CIS Foundations Benchmark, NIST 800-53, PCI-DSS e GDPR. Checks críticos incluem: buckets S3 públicos, roles IAM com AdministratorAccess, dados em repouso não encriptados, security groups com 0.0.0.0/0 em portas críticas, ausência de MFA na conta root e ausência de CloudTrail logging.
        </p>
        <div style={S.highlight}>
          Brecha Capital One (2019): um servidor na AWS tinha um SSRF (Server-Side Request Forgery). O atacante redirecionou pedidos para o serviço de metadados EC2 (169.254.169.254), obteve credenciais temporárias IAM do role da instância com permissões excessivas e exfiltrou 100 milhões de registos de S3. Lição: least privilege em roles IAM, bloquear acesso ao metadata service via IMDSv2, CSPM para detetar roles sobre-privilegiadas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 4 ─────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. DevSecOps e Segurança de Containers</h2>

        <p style={S.p}>
          O DevSecOps integra segurança ao longo de todo o ciclo de desenvolvimento, em vez de a aplicar como portão final antes do deployment. O princípio shift-left move os testes de segurança para as fases mais precoces — o custo de remediar uma vulnerabilidade multiplica-se por 100x do desenvolvimento para a produção.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 820 290" width="100%" style={{ display: 'block' }}>
            <rect width="820" height="290" rx="10" fill="var(--bg-secondary)" />

            <text x="410" y="26" textAnchor="middle" fill={color} fontSize="13" fontWeight="700">DEVSECOPS PIPELINE — SHIFT LEFT</text>

            {/* Pipeline stages */}
            {[
              { x: 60, label: 'Code', tools: ['SAST', 'Semgrep', 'GitLeaks'], c: color },
              { x: 200, label: 'Build', tools: ['SCA', 'Snyk', 'OWASP Dep'], c: '#f97316' },
              { x: 340, label: 'Container', tools: ['Trivy', 'Clair', 'Grype'], c: '#f97316' },
              { x: 480, label: 'Registry', tools: ['Cosign', 'Sigstore', 'SBOM'], c: '#f97316' },
              { x: 620, label: 'Deploy', tools: ['OPA', 'Gatekeeper', 'PSS'], c: '#f97316' },
              { x: 760, label: 'Runtime', tools: ['Falco', 'CSPM', 'SIEM'], c: '#f97316' },
            ].map(({ x, label, tools, c }, i) => (
              <g key={label}>
                <rect x={x - 55} y="40" width="110" height="115" rx="8" fill={`${c}15`} stroke={`${c}50`} strokeWidth="1.5" />
                <text x={x} y="60" textAnchor="middle" fill={c} fontSize="11" fontWeight="700">{label}</text>
                <line x1={x - 40} y1="67" x2={x + 40} y2="67" stroke={`${c}40`} strokeWidth="1" />
                {tools.map((t, ti) => (
                  <g key={t}>
                    <rect x={x - 44} y={75 + ti * 24} width="88" height="18" rx="4" fill={`${c}10`} stroke={`${c}25`} strokeWidth="1" />
                    <text x={x} y={87 + ti * 24} textAnchor="middle" fill={c} fontSize="8" fontWeight="600">{t}</text>
                  </g>
                ))}
                {i < 5 && <line x1={x + 55} y1="97" x2={x + 85} y2="97" stroke={`${c}60`} strokeWidth="2" markerEnd="url(#arrPipe)" />}
              </g>
            ))}

            {/* Shift left arrow + label */}
            <text x="410" y="166" textAnchor="middle" fill={color} fontSize="10" fontWeight="600">← Shift Left: custo de fix multiplica 100x do Code para Produção</text>
            <line x1="25" y1="178" x2="795" y2="178" stroke={color} strokeWidth="2" strokeDasharray="5,3" markerStart="url(#arrBlueLeft)" />

            {/* Container security */}
            <rect x="20" y="202" width="380" height="80" rx="8" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.12)" strokeWidth="1" />
            <text x="210" y="213" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="600">Segurança de Containers</text>
            {[
              'Base image distroless/Alpine → superfície mínima',
              'USER directive: não correr como root',
              'Filesystem read-only: --read-only flag',
              'Sem --privileged: sem acesso ao host kernel',
            ].map((line, i) => (
              <text key={i} x="30" y={235 + i * 14} fill="#fb923c" fontSize="8">{line}</text>
            ))}

            {/* Kubernetes security */}
            <rect x="420" y="202" width="380" height="80" rx="8" fill="rgba(249,115,22,0.06)" stroke={`${color}20`} strokeWidth="1" />
            <text x="610" y="220" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">Kubernetes Security</text>
            {[
              'RBAC para API server: least privilege em ServiceAccounts',
              'NetworkPolicies: restringir comunicação pod-to-pod',
              'Pod Security Standards: restricted profile',
              'OPA/Gatekeeper: admission control declarativo',
            ].map((line, i) => (
              <text key={i} x="430" y={235 + i * 14} fill="#fb923c" fontSize="8">{line}</text>
            ))}

            <defs>
              <marker id="arrPipe" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
              </marker>
              <marker id="arrBlueLeft" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto">
                <path d="M8,0 L8,6 L0,3 z" fill={color} />
              </marker>
            </defs>
          </svg>
        </div>

        <p style={S.p}>
          O SAST (Static Application Security Testing) analisa o código fonte sem o executar — identifica SQLi, XSS, deserialização insegura, segredos hardcoded. GitLeaks e TruffleHog varrem repositórios em busca de API keys, tokens e credenciais. O SCA (Software Composition Analysis) analisa dependências open-source contra bases de dados CVE — o Log4Shell (CVE-2021-44228, CVSS 10.0) afetou milhões de aplicações Java porque a biblioteca Log4j era uma dependência ubíqua frequentemente não inventariada.
        </p>
        <p style={S.p}>
          A segurança de imagens de container começa com a minimização da base: imagens distroless (apenas o runtime necessário, sem shell, sem pacotes extra) ou Alpine Linux reduzem drasticamente a superfície de ataque. O Dockerfile deve incluir USER para correr sem root, COPY em vez de ADD, e versões pinadas de dependências. A assinatura de imagens com Cosign/Sigstore garante que apenas imagens verificadas são deployadas em produção.
        </p>
        <div style={S.highlight}>
          Supply Chain Security: a framework SLSA (Supply-chain Levels for Software Artefacts, pronunciado "salsa") define níveis de garantia sobre a proveniência de artefactos de software — desde SLSA 1 (proveniência básica) até SLSA 4 (build hermético e auditável). O EU Cyber Resilience Act (2024) exige SBOM (Software Bill of Materials) para produtos com elementos digitais comercializados na UE — inventário completo de todos os componentes open-source e dependências.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 5 ─────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Incident Response em Cloud e Forensics</h2>

        <p style={S.p}>
          A resposta a incidentes em cloud difere fundamentalmente da IR tradicional: sem acesso a hardware físico, infraestrutura efémera (instâncias terminadas perdem evidências), multitenancy e complexidade jurisdicional. As fontes de evidência são logs estruturados e APIs — mas podem ser desativadas ou manipuladas pelo atacante se os controlos não estiverem em lugar.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 820 315" width="100%" style={{ display: 'block' }}>
            <rect width="820" height="315" rx="10" fill="var(--bg-secondary)" />

            <text x="410" y="24" textAnchor="middle" fill={color} fontSize="13" fontWeight="700">CLOUD IR TIMELINE — AWS BREACH SCENARIO</text>

            {/* Timeline */}
            <line x1="40" y1="66" x2="780" y2="66" stroke="#f97316" strokeWidth="2" />

            {[
              { x: 80, label: 'Deteção', sub: 'CloudTrail: 03:17\nAPI calls de IP\ndesconhecido', c: '#f97316', icon: '!' },
              { x: 230, label: 'Contenção', sub: 'Revogar access\nkeys · Isolar VPC\n· Bloquear IP', c: '#f97316', icon: '✕' },
              { x: 400, label: 'Investigação', sub: 'CloudTrail · VPC\nFlow Logs ·\nGuardDuty', c: color, icon: '?' },
              { x: 570, label: 'Erradicação', sub: 'Rodar credentials\n· Patch vector\n· Remove backdoor', c: '#f97316', icon: '✓' },
              { x: 720, label: 'Recuperação', sub: 'Restore clean\n· Post-mortem\n· Lições', c: color, icon: '↑' },
            ].map(({ x, label, sub, c, icon }) => (
              <g key={label}>
                <circle cx={x} cy="70" r="10" fill={c} />
                <text x={x} y="75" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">{icon}</text>
                <text x={x} y="54" textAnchor="middle" fill={c} fontSize="10" fontWeight="700">{label}</text>
                {sub.split('\n').map((s, i) => (
                  <text key={i} x={x} y={88 + i * 13} textAnchor="middle" fill="#fb923c" fontSize="8">{s}</text>
                ))}
              </g>
            ))}

            {/* Evidence sources */}
            <text x="410" y="140" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">Fontes de Evidência na AWS</text>

            {[
              { x: 87,  label: 'CloudTrail',      sub: 'API calls\nWho/What/When/Where\nRetention: 90 dias', c: color },
              { x: 249, label: 'VPC Flow Logs',   sub: 'Network metadata\nSrc/Dst IP, port\nBytes transferidos', c: '#f97316' },
              { x: 410, label: 'GuardDuty',       sub: 'ML threat detection\nCrypto mining · C2\nCredential exfil', c: '#f97316' },
              { x: 571, label: 'CloudWatch',      sub: 'Application logs\nMetrics · Alarms\nLog Insights', c: '#f97316' },
              { x: 733, label: 'Config Snapshots',sub: 'Infra state history\nDrift detection\nCompliance', c: '#f97316' },
            ].map(({ x, label, sub, c }) => (
              <g key={label}>
                <rect x={x - 75} y="150" width="150" height="75" rx="8" fill={`${c}10`} stroke={`${c}40`} strokeWidth="1.5" />
                <text x={x} y="167" textAnchor="middle" fill={c} fontSize="10" fontWeight="700">{label}</text>
                {sub.split('\n').map((s, i) => (
                  <text key={i} x={x} y={180 + i * 13} textAnchor="middle" fill="#fb923c" fontSize="8">{s}</text>
                ))}
              </g>
            ))}

            {/* Key stats */}
            <rect x="20" y="242" width="780" height="60" rx="8" fill="rgba(249,115,22,0.06)" stroke={`${color}20`} strokeWidth="1" />
            <text x="30" y="259" fill={color} fontSize="9" fontWeight="700">Estatísticas IR Cloud (IBM X-Force / Ponemon)</text>
            <text x="30" y="274" fill="#fb923c" fontSize="8">· Mean Time to Detect: 228 dias (média global)</text>
            <text x="300" y="274" fill="#fb923c" fontSize="8">· Mean Time to Contain: +80 dias</text>
            <text x="560" y="274" fill="#f97316" fontSize="8" fontWeight="600">· Custo médio: $4.45M (2023)</text>
            <text x="30" y="290" fill="#fb923c" fontSize="8">· 80% das brechas descobertas por terceiros (parceiro, cliente, imprensa) — não internamente</text>
          </svg>
        </div>

        <p style={S.p}>
          O CloudTrail regista todas as chamadas à API da AWS — quem fez o quê, quando e de onde. É a fonte primária para IR em AWS. Deve ser ativado em todas as regiões, com log file integrity validation, e os logs armazenados num bucket S3 de outra conta (para impedir que um atacante os apague). O VPC Flow Logs registam metadados de tráfego de rede (IP origem/destino, porta, bytes, aceite/rejeitado) — não o conteúdo mas suficiente para detetar exfiltração ou scanning.
        </p>
        <p style={S.p}>
          A contenção em cloud deve ser imediata: revogar credenciais IAM comprometidas (não é possível recuperá-las depois), fazer snapshot da instância EC2 antes de a terminar (para análise forense posterior), usar SCPs (Service Control Policies) para restringir ações na conta afetada. O AWS GuardDuty usa machine learning sobre CloudTrail, DNS e VPC Flow Logs para detetar ameaças: criação de instâncias EC2 para mineração de cripto, exfiltração de credenciais, padrões de API anómalos, comunicação com infraestrutura C2 conhecida.
        </p>
        <p style={S.p}>
          A forensics em cloud requer captura de evidências antes que a infraestrutura efémera seja terminada: snapshot de volumes EBS, dump de memória da instância, captura de logs antes de rotação. A cadeia de custódia deve ser documentada meticulosamente — timestamps imutáveis do CloudTrail são úteis, mas os logs de aplicação no CloudWatch podem ser modificados se o atacante tiver permissões.
        </p>
        <div style={S.highlight}>
          AWS GuardDuty: serviço gerido de deteção de ameaças que analisa continuamente CloudTrail, VPC Flow Logs e consultas DNS. Deteta automaticamente: instâncias EC2 a comunicar com IPs de mineração de cripto, credenciais IAM usadas de localizações anómalas, portscan interno (lateral movement), enumeration de S3 buckets, e acesso a instâncias de EC2 a partir de IPs de Tor. Recomendado activar em todas as contas e regiões, integrado com AWS Security Hub para centralização.
        </div>
        <div style={S.note}>
          Complexidade jurisdicional: quando dados residem em múltiplas regiões AWS, uma brecha pode envolver obrigações legais em múltiplas jurisdições — RGPD na Europa (notificação em 72 horas), CCPA na Califórnia, LGPD no Brasil. A estratégia de data residency (restringir dados a regiões específicas com SCPs) simplifica o compliance mas pode aumentar latência e custo.
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Zero Trust Architecture</strong> — Zero Trust abandona o modelo "confiar na rede interna" e verifica continuamente identidade, dispositivo e contexto de cada pedido; princípios: never trust, always verify, least privilege, assume breach.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>IAM — Identity and Access Management</strong> — IAM controla quem (identidade) pode fazer o quê (permissões) em que recursos; inclui MFA, SSO, RBAC/ABAC e PAM (Privileged Access Management) — ponto de entrada de mais de 80% das violações de dados.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Cloud Security Posture Management (CSPM)</strong> — CSPM detecta automaticamente misconfigurações em ambientes cloud (S3 público, security groups abertos, MFA desactivado) e fornece remediação guiada — ferramentas como Wiz, Prisma Cloud e AWS Security Hub.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>DevSecOps e Segurança de Containers</strong> — integra segurança no pipeline CI/CD: SAST (análise estática), SCA (dependências vulneráveis), scanning de imagens Docker e IaC; Kubernetes requer políticas Network Policy, RBAC e admission controllers.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Incident Response em Cloud e Forensics</strong> — IR em cloud usa logs de CloudTrail/Azure Monitor para reconstituir timelines de ataque; forensics é mais difícil por efemeridade de recursos — snapshot de instâncias e preservação de logs é crítica.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
