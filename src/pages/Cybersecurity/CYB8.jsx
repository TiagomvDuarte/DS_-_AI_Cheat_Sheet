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

export default function CYB8() {
  const m = modules[7];
  return (
    <div style={S.page}>
      <Link to="/cybersecurity" style={S.back}>← Cybersecurity &amp; AI</Link>
      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. OWASP Top 10 e Vulnerabilidades Web</h2>
        <p style={S.p}>
          OWASP Top 10 (2021) é o guia de referência para riscos em segurança de aplicações web, atualizado com base em dados de centenas de organizações. A01 Broken Access Control subiu para #1 em 2021 (era #5 em 2017) — 94% das aplicações foram testadas para alguma forma de controlo de acesso quebrado. Inclui IDOR (Insecure Direct Object Reference): mudar <code>?user_id=123</code> para <code>?user_id=124</code> e aceder a dados de outro utilizador.
        </p>
        <p style={S.p}>
          A03 Injection continua entre os mais críticos: SQL Injection — o atacante insere SQL numa input não sanitizada — <code>' OR '1'='1</code> bypassa login; <code>'; DROP TABLE users;--</code> destrói dados. XSS (Cross-Site Scripting) injeta JavaScript malicioso em páginas visitadas por outros utilizadores, permitindo roubo de cookies de sessão, redirecionamentos e keyloggers. SSTI (Server-Side Template Injection): <code>&#123;&#123;7*7&#125;&#125;</code> devolvido como 49 revela motor de templates vulnerável.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 780 370" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="360" fill="var(--bg-secondary)" rx="10" />
            {/* Header */}
            <rect x="20" y="12" width="740" height="32" rx="6" fill="#f9731618" />
            <text x="30" y="32" fill="#f97316" fontSize="11" fontWeight="700">RANK</text>
            <text x="90" y="32" fill="#f97316" fontSize="11" fontWeight="700">CATEGORIA</text>
            <text x="440" y="32" fill="#f97316" fontSize="11" fontWeight="700">SEVERIDADE</text>
            <text x="590" y="32" fill="#f97316" fontSize="11" fontWeight="700">EXEMPLO</text>

            {/* Rows */}
            {[
              { rank: 'A01', name: 'Broken Access Control', sev: 95, ex: 'IDOR, escalada de privilégios' },
              { rank: 'A02', name: 'Cryptographic Failures', sev: 82, ex: 'TLS antigo, dados não cifrados' },
              { rank: 'A03', name: 'Injection (SQLi/XSS/SSTI)', sev: 90, ex: "' OR '1'='1, <script>" },
              { rank: 'A04', name: 'Insecure Design', sev: 70, ex: 'Lógica de negócio falha' },
              { rank: 'A05', name: 'Security Misconfiguration', sev: 75, ex: 'Painel admin exposto' },
              { rank: 'A06', name: 'Vulnerable Components', sev: 68, ex: 'Log4Shell, Heartbleed' },
              { rank: 'A07', name: 'Auth Failures', sev: 80, ex: 'Brute-force, sessions fixas' },
              { rank: 'A08', name: 'Data Integrity Failures', sev: 72, ex: 'CI/CD sem verificação' },
              { rank: 'A09', name: 'Logging Failures', sev: 60, ex: 'Sem audit trail' },
              { rank: 'A10', name: 'SSRF', sev: 65, ex: 'Fetch de recursos internos' },
            ].map((row, i) => {
              const y = 52 + i * 30;
              const barW = (row.sev / 100) * 130;
              const rowBg = i % 2 === 0 ? '#ffffff08' : 'transparent';
              return (
                <g key={row.rank}>
                  <rect x="20" y={y - 2} width="740" height="27" rx="4" fill={rowBg} />
                  <text x="30" y={y + 14} fill="#f97316" fontSize="10" fontWeight="700">{row.rank}</text>
                  <text x="90" y={y + 14} fill="#fbbf24" fontSize="10">{row.name}</text>
                  <rect x="440" y={y + 4} width="130" height="10" rx="5" fill="rgba(249,115,22,0.06)" />
                  <rect x="440" y={y + 4} width={barW} height="10" rx="5" fill={row.sev >= 85 ? '#f97316' : row.sev >= 70 ? '#f97316' : '#f97316'} opacity="0.85" />
                  <text x={440 + barW + 6} y={y + 13} fill="#fb923c" fontSize="9">{row.sev}%</text>
                  <text x="590" y={y + 14} fill="#fb923c" fontSize="9">{row.ex}</text>
                </g>
              );
            })}
            <text x="400" y="362" textAnchor="middle" fill="#fb923c" fontSize="9">Fonte: OWASP Top 10 — 2021  |  Severidade baseada em prevalência e impacto</text>
          </svg>
        </div>
        <div style={S.highlight}>
          <strong>IDOR na prática:</strong> Ao mudar <code>GET /api/orders/1001</code> para <code>GET /api/orders/1002</code> sem verificação de autorização, um atacante acede a encomendas de outros utilizadores. Este padrão representa 94% das aplicações testadas no relatório OWASP 2021 — a falha mais comum em APIs e aplicações web modernas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Injecção SQL — Exploração e Defesa</h2>
        <p style={S.p}>
          SQL Injection é uma das vulnerabilidades mais antigas (descoberta em 1998) e ainda figura no topo das listas de CVEs exploradas activamente. O atacante insere código SQL numa input que é concatenada directamente numa query, alterando a lógica da base de dados.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 780 280" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="280" fill="var(--bg-secondary)" rx="10" />

            {/* Left panel — Vulnerable */}
            <rect x="15" y="15" width="365" height="250" rx="8" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.20)" strokeWidth="1" />
            <text x="197" y="38" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">VULNERÁVEL — String Concatenation</text>

            {/* Form box */}
            <rect x="35" y="50" width="325" height="36" rx="6" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="48" y="65" fill="#fb923c" fontSize="9">Username:</text>
            <text x="130" y="65" fill="#fbbf24" fontSize="9" fontWeight="600">' OR '1'='1'--</text>
            <text x="48" y="78" fill="#fb923c" fontSize="8">Input do utilizador (não sanitizada)</text>

            {/* Arrow down */}
            <line x1="197" y1="88" x2="197" y2="108" stroke="#f97316" strokeWidth="1.5" />
            <polygon points="197,112 192,104 202,104" fill="#f97316" />

            {/* Query built */}
            <rect x="35" y="114" width="325" height="52" rx="6" fill="rgba(249,115,22,0.06)" stroke="#ea580c50" strokeWidth="1" />
            <text x="48" y="130" fill="#fb923c" fontSize="8">Query gerada:</text>
            <text x="48" y="145" fill="#fbbf24" fontSize="8.5" fontWeight="600">SELECT * FROM users WHERE</text>
            <text x="48" y="158" fill="#f97316" fontSize="8.5" fontWeight="600">name='' OR '1'='1'--'</text>

            {/* Arrow down */}
            <line x1="197" y1="168" x2="197" y2="186" stroke="#f97316" strokeWidth="1.5" />
            <polygon points="197,190 192,182 202,182" fill="#f97316" />

            {/* Result */}
            <rect x="35" y="192" width="325" height="36" rx="6" fill="rgba(249,115,22,0.12)" stroke="#ea580c50" strokeWidth="1" />
            <text x="197" y="207" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Todos os utilizadores devolvidos!</text>
            <text x="197" y="220" textAnchor="middle" fill="#fb923c" fontSize="8">Bypass de autenticação completo</text>

            {/* Right panel — Secure */}
            <rect x="400" y="15" width="365" height="250" rx="8" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.18)" strokeWidth="1" />
            <text x="582" y="38" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">SEGURO — Parameterized Query</text>

            {/* Form box */}
            <rect x="420" y="50" width="325" height="36" rx="6" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="433" y="65" fill="#fb923c" fontSize="9">Username:</text>
            <text x="515" y="65" fill="#fbbf24" fontSize="9" fontWeight="600">' OR '1'='1'--</text>
            <text x="433" y="78" fill="#fb923c" fontSize="8">Mesmo input malicioso</text>

            {/* Arrow down */}
            <line x1="582" y1="88" x2="582" y2="108" stroke="#f97316" strokeWidth="1.5" />
            <polygon points="582,112 577,104 587,104" fill="#f97316" />

            {/* Prepared statement */}
            <rect x="420" y="114" width="325" height="52" rx="6" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" strokeWidth="1" />
            <text x="433" y="130" fill="#fb923c" fontSize="8">Prepared Statement:</text>
            <text x="433" y="145" fill="#f97316" fontSize="8.5" fontWeight="600">SELECT * FROM users WHERE name = ?</text>
            <text x="433" y="158" fill="#fb923c" fontSize="8">Input tratada como dado, nunca como código</text>

            {/* Arrow down */}
            <line x1="582" y1="168" x2="582" y2="186" stroke="#f97316" strokeWidth="1.5" />
            <polygon points="582,190 577,182 587,182" fill="#f97316" />

            {/* Result */}
            <rect x="420" y="192" width="325" height="36" rx="6" fill="rgba(249,115,22,0.09)" stroke="rgba(249,115,22,0.25)" strokeWidth="1" />
            <text x="582" y="207" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Nenhum utilizador encontrado</text>
            <text x="582" y="220" textAnchor="middle" fill="#fb923c" fontSize="8">Ataque neutralizado — SQL não executado</text>
          </svg>
        </div>
        <p style={S.p}>
          Tipos de SQLi: <strong>In-band</strong> (Classic) — resultado visível na resposta HTTP; <strong>Blind SQLi</strong> — sem resultado directo, inferência por True/False ou tempo de resposta; <strong>Out-of-band</strong> — dados exfiltrados via DNS ou HTTP request secundário. Sqlmap é a ferramenta automática de detecção e exploração — consegue extrair toda a base de dados, ler ficheiros do sistema e executar comandos.
        </p>
        <p style={S.p}>
          Defesa: Prepared Statements / Parameterized Queries são a única defesa efectiva — o input nunca é interpretado como SQL. ORMs (Hibernate, SQLAlchemy, Prisma) protegem automaticamente se usados correctamente. WAF (Web Application Firewall) adiciona uma camada mas não deve ser a única defesa — é bypassável. Stored Procedures também ajudam mas não resolvem completamente.
        </p>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. XSS, CSRF e Clickjacking</h2>
        <p style={S.p}>
          XSS (Cross-Site Scripting) permite ao atacante injectar JavaScript que executa no browser da vítima no contexto do site alvo. Reflected XSS: payload no URL — <code>https://example.com/search?q=&lt;script&gt;alert(1)&lt;/script&gt;</code>. Stored XSS: payload guardado na base de dados (comentários, perfis) — executa para todos os visitantes. DOM-based: manipulação do DOM via JavaScript no cliente sem interacção com o servidor.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 780 300" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="300" fill="var(--bg-secondary)" rx="10" />

            {/* Title */}
            <text x="390" y="22" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">FLUXO DE ATAQUE XSS — STORED</text>

            {/* Attacker */}
            <rect x="20" y="40" width="130" height="60" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f9731640" strokeWidth="1" />
            <text x="85" y="63" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">ATACANTE</text>
            <text x="85" y="78" textAnchor="middle" fill="#fb923c" fontSize="8">Submete comentário</text>
            <text x="85" y="90" textAnchor="middle" fill="#fbbf24" fontSize="7.5">&lt;script&gt;steal()&lt;/script&gt;</text>

            {/* Arrow to DB */}
            <line x1="150" y1="70" x2="220" y2="70" stroke="#f97316" strokeWidth="1.5" />
            <polygon points="224,70 216,65 216,75" fill="#f97316" />
            <text x="187" y="63" textAnchor="middle" fill="#fb923c" fontSize="8">POST /comment</text>

            {/* Database */}
            <rect x="224" y="40" width="130" height="60" rx="8" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="289" y="63" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">BASE DE DADOS</text>
            <text x="289" y="78" textAnchor="middle" fill="#fb923c" fontSize="8">Payload guardado</text>
            <text x="289" y="90" textAnchor="middle" fill="#fbbf24" fontSize="7.5">junto com conteúdo legítimo</text>

            {/* Arrow to victim */}
            <line x1="354" y1="70" x2="424" y2="70" stroke="#fb923c" strokeWidth="1.5" />
            <polygon points="428,70 420,65 420,75" fill="#fb923c" />
            <text x="391" y="63" textAnchor="middle" fill="#fb923c" fontSize="8">GET /page</text>

            {/* Victim browser */}
            <rect x="428" y="40" width="130" height="60" rx="8" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="493" y="63" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">BROWSER VÍTIMA</text>
            <text x="493" y="78" textAnchor="middle" fill="#fb923c" fontSize="8">Recebe HTML com script</text>
            <text x="493" y="90" textAnchor="middle" fill="#f97316" fontSize="8">Script executa!</text>

            {/* Arrow to attacker server */}
            <line x1="558" y1="70" x2="628" y2="70" stroke="#f97316" strokeWidth="1.5" />
            <polygon points="632,70 624,65 624,75" fill="#f97316" />
            <text x="595" y="63" textAnchor="middle" fill="#f97316" fontSize="8">Cookie enviado</text>

            {/* Attacker server */}
            <rect x="632" y="40" width="130" height="60" rx="8" fill="rgba(249,115,22,0.12)" stroke="#ea580c50" strokeWidth="1" />
            <text x="697" y="63" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">SERVIDOR</text>
            <text x="697" y="78" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">ATACANTE</text>
            <text x="697" y="90" textAnchor="middle" fill="#fb923c" fontSize="8">Recebe session cookie</text>

            {/* Three types */}
            <text x="390" y="130" textAnchor="middle" fill="#fb923c" fontSize="9">TIPOS DE XSS</text>
            <line x1="20" y1="138" x2="760" y2="138" stroke="var(--card-border)" strokeWidth="1" />

            {[
              { x: 60, label: 'Reflected', desc: 'Payload no URL', detail: 'Link enviado via phishing', col: '#f97316' },
              { x: 320, label: 'Stored', desc: 'Payload na BD', detail: 'Afecta todos os visitantes', col: '#f97316' },
              { x: 580, label: 'DOM-Based', desc: 'Client-side JS', detail: 'Sem tráfego servidor', col: '#f97316' },
            ].map(t => (
              <g key={t.label}>
                <rect x={t.x - 40} y="148" width="200" height="80" rx="8" fill="rgba(249,115,22,0.06)" stroke={t.col + '40'} strokeWidth="1" />
                <rect x={t.x - 40} y="148" width="200" height="6" rx="4" fill={t.col} opacity="0.7" />
                <text x={t.x + 60} y="170" textAnchor="middle" fill={t.col} fontSize="11" fontWeight="700">{t.label}</text>
                <text x={t.x + 60} y="188" textAnchor="middle" fill="#fbbf24" fontSize="9">{t.desc}</text>
                <text x={t.x + 60} y="203" textAnchor="middle" fill="#fb923c" fontSize="8">{t.detail}</text>
              </g>
            ))}

            {/* Defenses */}
            <text x="390" y="252" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">DEFESAS</text>
            {[
              { x: 80, d: 'CSP Header' },
              { x: 230, d: 'Output Encoding' },
              { x: 390, d: 'HttpOnly Cookies' },
              { x: 550, d: 'Input Validation' },
              { x: 700, d: 'SameSite=Strict' },
            ].map(d => (
              <g key={d.d}>
                <rect x={d.x - 60} y="260" width="120" height="26" rx="6" fill="rgba(249,115,22,0.07)" stroke="rgba(249,115,22,0.18)" strokeWidth="1" />
                <text x={d.x} y="277" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600">{d.d}</text>
              </g>
            ))}
          </svg>
        </div>
        <p style={S.p}>
          CSRF (Cross-Site Request Forgery): o atacante força o browser autenticado da vítima a fazer requests indesejados. Exemplo: link que ao ser clicado executa <code>POST /transfer?amount=1000&amp;to=atacante</code> usando a sessão activa. Defesa: CSRF tokens (valor aleatório por sessão verificado no servidor) e atributo SameSite nos cookies (Lax ou Strict).
        </p>
        <p style={S.p}>
          Clickjacking: embeber o site alvo num iframe transparente — a vítima pensa que clica num botão visível mas está a clicar em algo do site invisível por baixo. Defesa: header <code>X-Frame-Options: DENY</code> ou CSP com <code>frame-ancestors 'none'</code>.
        </p>
        <div style={S.note}>
          HttpOnly cookies impedem o acesso via <code>document.cookie</code> em JavaScript — mesmo que XSS seja explorado, o cookie de sessão não pode ser exfiltrado directamente. Combinado com SameSite=Strict e Secure, reduz drasticamente o impacto de XSS.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Segurança de APIs — REST, GraphQL e OAuth2</h2>
        <p style={S.p}>
          API Security é uma das áreas de mais rápido crescimento em bug bounty e ataques reais — as APIs expõem directamente a lógica de negócio sem a camada de protecção da interface web. BOLA (Broken Object Level Authorization) é o IDOR para APIs: <code>GET /api/orders/12345</code> alterado para <code>GET /api/orders/12346</code> devolve encomenda de outro utilizador.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 780 320" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="320" fill="var(--bg-secondary)" rx="10" />

            {/* REST API Panel */}
            <rect x="15" y="15" width="350" height="180" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f9731630" strokeWidth="1" />
            <text x="190" y="36" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">REST API — Vectores de Ataque</text>

            {[
              { y: 52, method: 'GET', ep: '/api/users/123', attack: 'BOLA/IDOR — mudar ID', col: '#f97316' },
              { y: 78, method: 'POST', ep: '/api/user/update', attack: 'Mass Assignment: role=admin', col: '#f97316' },
              { y: 104, method: 'GET', ep: '/api/admin/users', attack: 'BFLA — acesso sem permissão', col: '#f97316' },
              { y: 130, method: 'POST', ep: '/api/search', attack: 'Rate limit bypass', col: '#f97316' },
              { y: 156, method: 'GET', ep: '/api/export?format=csv', attack: 'SSRF via parâmetro URL', col: '#f97316' },
            ].map(r => (
              <g key={r.ep}>
                <rect x="28" y={r.y - 2} width="50" height="18" rx="4" fill={r.col + '25'} />
                <text x="53" y={r.y + 11} textAnchor="middle" fill={r.col} fontSize="8" fontWeight="700">{r.method}</text>
                <text x="90" y={r.y + 11} fill="#fb923c" fontSize="8.5">{r.ep}</text>
                <text x="90" y={r.y + 23} fill={r.col} fontSize="7.5">→ {r.attack}</text>
              </g>
            ))}

            {/* GraphQL Panel */}
            <rect x="380" y="15" width="385" height="180" rx="8" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.18)" strokeWidth="1" />
            <text x="572" y="36" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">GraphQL — Riscos Específicos</text>

            <rect x="395" y="48" width="355" height="55" rx="6" fill="var(--bg-secondary)" />
            <text x="408" y="64" fill="#fb923c" fontSize="8"># Introspection — expõe todo o schema</text>
            <text x="408" y="78" fill="#f97316" fontSize="8">query &#123; __schema &#123; types &#123; name fields &#123; name &#125; &#125; &#125; &#125;</text>
            <text x="408" y="92" fill="#fb923c" fontSize="8">→ Revela todos os tipos, campos e mutações</text>

            <rect x="395" y="112" width="170" height="50" rx="6" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.20)" strokeWidth="1" />
            <text x="480" y="130" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600">Nested Queries DoS</text>
            <text x="480" y="146" textAnchor="middle" fill="#fb923c" fontSize="8">Sem depth limit</text>
            <text x="480" y="158" textAnchor="middle" fill="#fb923c" fontSize="8">100 níveis de profundidade</text>

            <rect x="575" y="112" width="190" height="50" rx="6" fill="#f59e0b12" stroke="#f59e0b30" strokeWidth="1" />
            <text x="670" y="130" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="600">Batch Query Bypass</text>
            <text x="670" y="146" textAnchor="middle" fill="#fb923c" fontSize="8">Rate limit por query</text>
            <text x="670" y="158" textAnchor="middle" fill="#fb923c" fontSize="8">mas batch executa 1000</text>

            {/* JWT Panel */}
            <rect x="15" y="208" width="350" height="100" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f59e0b30" strokeWidth="1" />
            <text x="190" y="228" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">JWT — Vulnerabilidades Comuns</text>
            {[
              { y: 248, t: 'alg: none', d: 'Assinar sem chave — aceite por libs vulneráveis' },
              { y: 268, t: 'RS256 → HS256', d: 'Algorithm confusion — assinar com chave pública' },
              { y: 288, t: 'Weak Secret', d: 'Brute-force com hashcat ou jwt-cracker' },
            ].map(j => (
              <g key={j.t}>
                <text x="28" y={j.y} fill="#f59e0b" fontSize="9" fontWeight="700">{j.t}</text>
                <text x="110" y={j.y} fill="#fb923c" fontSize="8.5">{j.d}</text>
              </g>
            ))}

            {/* OAuth2 Panel */}
            <rect x="380" y="208" width="385" height="100" rx="8" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.18)" strokeWidth="1" />
            <text x="572" y="228" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">OAuth2 / OIDC — Pitfalls</text>
            {[
              { y: 248, t: 'state param CSRF', d: 'Sem verificação do state → CSRF no fluxo OAuth' },
              { y: 268, t: 'redirect_uri open', d: 'Redireccionar tokens para domínio do atacante' },
              { y: 288, t: 'Implicit Flow', d: 'Token no fragmento URL — leakage via Referer' },
            ].map(o => (
              <g key={o.t}>
                <text x="393" y={o.y} fill="#f97316" fontSize="9" fontWeight="700">{o.t}</text>
                <text x="490" y={o.y} fill="#fb923c" fontSize="8.5">{o.d}</text>
              </g>
            ))}
          </svg>
        </div>
        <p style={S.p}>
          BFLA (Broken Function Level Authorization): utilizador regular invoca <code>DELETE /api/admin/users/1</code> que deveria requerer privilégios de admin. Mass Assignment: API aceita todos os campos JSON incluindo <code>role: "admin"</code> que não deveria ser modificável pelo utilizador — framworks como Ruby on Rails e Express sem validação são vulneráveis.
        </p>
        <div style={S.highlight}>
          <strong>GraphQL em produção:</strong> Desactivar introspection em produção é fundamental — expõe todo o schema da API. Implementar query depth limiting, complexity analysis e rate limiting por operação. Usar persisted queries para permitir apenas queries conhecidas em produção.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Bug Bounty e Metodologia de Pentesting Web</h2>
        <p style={S.p}>
          Bug bounty programs (HackerOne, Bugcrowd, Intigriti) permitem que empresas paguem investigadores por vulnerabilidades reportadas de forma responsável. Médias de payout: XSS reflectido $200-500, SQLi $1k-5k, RCE (Remote Code Execution) $10k-100k+, vulnerabilidades críticas em Meta ou Google até $300k.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 780 300" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="300" fill="var(--bg-secondary)" rx="10" />

            {/* Phase boxes */}
            {[
              {
                x: 10, label: 'RECONHECIMENTO', col: '#f97316',
                items: ['Shodan, BuiltWith', 'Wayback Machine', 'Burp Suite crawl', 'Dir bruteforce', 'Subdomain enum'],
              },
              {
                x: 165, label: 'MAPEAMENTO', col: '#f97316',
                items: ['Sitemap completo', 'API discovery', 'Auth flows', 'Parâmetros', 'JS files review'],
              },
              {
                x: 320, label: 'DESCOBERTA', col: '#f97316',
                items: ['OWASP checklist', 'Fuzzing inputs', 'Source code', 'Config review', 'Auth testing'],
              },
              {
                x: 475, label: 'EXPLORAÇÃO', col: '#f97316',
                items: ['PoC development', 'Chain vulns', 'Impact assess', 'Data exfil test', 'Pivoting'],
              },
              {
                x: 630, label: 'RELATÓRIO', col: '#f97316',
                items: ['CVSS scoring', 'Reproduction', 'Impact desc', 'Remediation', 'Timeline'],
              },
            ].map((phase, i) => (
              <g key={phase.label}>
                <rect x={phase.x} y="15" width="145" height="180" rx="8" fill="rgba(249,115,22,0.06)" stroke={phase.col + '40'} strokeWidth="1" />
                <rect x={phase.x} y="15" width="145" height="8" rx="4" fill={phase.col} opacity="0.8" />
                <text x={phase.x + 72} y="36" textAnchor="middle" fill={phase.col} fontSize="9" fontWeight="700">{i + 1}. {phase.label}</text>
                {phase.items.map((item, j) => (
                  <g key={item}>
                    <circle cx={phase.x + 16} cy={58 + j * 24} r="3" fill={phase.col} opacity="0.7" />
                    <text x={phase.x + 26} y={62 + j * 24} fill="#fb923c" fontSize="8.5">{item}</text>
                  </g>
                ))}
                {i < 4 && (
                  <polygon points={`${phase.x + 148},105 ${phase.x + 160},100 ${phase.x + 160},110`} fill={phase.col} opacity="0.6" />
                )}
              </g>
            ))}

            {/* CVSS Panel */}
            <rect x="10" y="210" width="760" height="78" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f9731630" strokeWidth="1" />
            <text x="390" y="228" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">CVSS v3.1 — Base Score</text>
            {[
              { x: 50, label: 'Critical', range: '9.0-10.0', col: '#f97316' },
              { x: 200, label: 'High', range: '7.0-8.9', col: '#f97316' },
              { x: 350, label: 'Medium', range: '4.0-6.9', col: '#f97316' },
              { x: 500, label: 'Low', range: '0.1-3.9', col: '#f97316' },
              { x: 640, label: 'None', range: '0.0', col: '#fb923c' },
            ].map(s => (
              <g key={s.label}>
                <rect x={s.x} y="240" width="110" height="36" rx="6" fill={s.col + '18'} stroke={s.col + '40'} strokeWidth="1" />
                <text x={s.x + 55} y="256" textAnchor="middle" fill={s.col} fontSize="10" fontWeight="700">{s.label}</text>
                <text x={s.x + 55} y="270" textAnchor="middle" fill="#fb923c" fontSize="8.5">{s.range}</text>
              </g>
            ))}
          </svg>
        </div>
        <p style={S.p}>
          Metodologia PTES (Penetration Testing Execution Standard). Ferramentas essenciais: Burp Suite Pro (proxy, scanner, intruder, repeater — padrão da indústria), OWASP ZAP (open-source), Nuclei (scanner baseado em templates YAML), ffuf e dirsearch (directory e parameter fuzzing), Amass e subfinder (subdomain enumeration).
        </p>
        <p style={S.p}>
          CVSS v3.1: Base Score calculado a partir de Attack Vector, Attack Complexity, Privileges Required, User Interaction, Scope, e impacto na Confidentiality, Integrity e Availability (CIA). Critical = 9.0-10.0, High = 7.0-8.9.
        </p>
        <div style={S.highlight}>
          <strong>Responsible Disclosure:</strong> O prazo de 90 dias estabelecido pelo Google Project Zero é o standard da indústria — se o vendor não corrigir em 90 dias, procede-se à divulgação pública. Este mecanismo cria incentivo para que empresas corrijam rapidamente. Plataformas como HackerOne oferecem coordenação entre investigadores e empresas, com programas públicos e privados.
        </div>
        <div style={S.note}>
          Antes de qualquer teste: verificar sempre o scope do programa bug bounty — testar fora do scope (mesmo que encontre uma vulnerabilidade crítica) pode resultar em acção legal. Nunca testar em produção sem autorização explícita por escrito.
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>OWASP Top 10 e Vulnerabilidades Web</strong> — o OWASP Top 10 lista as vulnerabilidades web mais críticas (broken access control, injections, misconfiguration); é a referência para pentesting web e para priorizar esforços de segurança em desenvolvimento.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Injecção SQL — Exploração e Defesa</strong> — SQL injection insere código SQL malicioso em inputs não sanitizados para manipular queries de base de dados; defesa: queries parametrizadas (prepared statements) e ORMs — nunca concatenação de strings.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>XSS, CSRF e Clickjacking</strong> — XSS injeta scripts no browser da vítima; CSRF força acções autenticadas não intencionais; Clickjacking sobrepõe iframes invisíveis; defesas incluem Content Security Policy, tokens CSRF e X-Frame-Options.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Segurança de APIs — REST, GraphQL e OAuth2</strong> — APIs são superfície de ataque primária; OAuth2/OIDC gerem autorização delegada; riscos específicos incluem broken object-level authorization (BOLA), mass assignment e introspection GraphQL exposta.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Bug Bounty e Metodologia de Pentesting Web</strong> — pentesting web segue fases: reconhecimento, enumeração, exploração, pós-exploração e relatório; Bug Bounty programs (HackerOne, Bugcrowd) pagam investigadores por vulnerabilidades encontradas de forma responsável.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
