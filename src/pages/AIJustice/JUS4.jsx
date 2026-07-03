import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './AIJustice';

const C = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: C, border: `1.5px solid ${C}`, fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color: C, marginBottom: '1rem' },
  highlight: { background: `${C}15`, borderLeft: `3px solid ${C}`, padding: '0.85rem 1.1rem', borderRadius: '0 8px 8px 0', marginBottom: '1rem' },
  note: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', padding: '0.85rem 1.1rem', borderRadius: 8, marginBottom: '1rem' },
  p: { color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '0.85rem' },
  diagram: { background: 'var(--bg-secondary)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', overflowX: 'auto' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2rem 0' },
};

export default function JUS4() {
  return (
    <div style={S.page}>
      <Link to="/ai-justice" style={S.back}>← AI & Justice</Link>
      <div style={S.badge}>MÓDULO {modules[3].num}</div>
      <h1 style={S.h1}>MÓDULO {modules[3].title}</h1>
      <p style={S.sub}>MÓDULO {modules[3].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Reconhecimento Facial em Contexto de Lei e Ordem</h2>
        <p style={S.p}>
          O reconhecimento facial policial opera em dois modos fundamentalmente distintos. A identificação <strong>1:1</strong> verifica se uma pessoa é quem afirma ser — compara uma imagem com uma fotografia de referência conhecida. A identificação <strong>1:N</strong> procura um suspeito desconhecido numa base de dados de milhões de fotografias — produz uma lista de candidatos ordenados por similaridade. É o segundo modo que gera os casos de prisão errada.
        </p>
        <p style={S.p}>
          A escala da adoção é impressionante. O FBI mantém a base de dados NGI (Next Generation Identification) com mais de 641 milhões de fotografias, incluindo registos criminais, passaportes, e cartas de condução. O ICE usa reconhecimento facial para identificar imigrantes. A Clearview AI construiu uma base de dados com mais de 30 mil milhões de fotografias raspadas da internet — Facebook, LinkedIn, Venmo, sites de notícias — e vendeu acesso a mais de 600 agências policiais antes de ser proibida na União Europeia e multada em vários países (€20M em Itália, £7,5M no Reino Unido).
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 700 180" width="100%" style={{ display: 'block' }}>
            <text x="350" y="18" fill="#fb923c" fontSize="11" fontWeight="600" textAnchor="middle">PIPELINE DE IDENTIFICAÇÃO 1:N — RECONHECIMENTO FACIAL</text>
            {/* Steps */}
            <rect x="20" y="35" width="100" height="50" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="70" y="55" fill="#fff" fontSize="9" textAnchor="middle">Imagem</text>
            <text x="70" y="67" fill="#fff" fontSize="9" textAnchor="middle">da câmara</text>
            <text x="70" y="79" fill={C} fontSize="8" textAnchor="middle">(probe)</text>

            <line x1="120" y1="60" x2="155" y2="60" stroke="#fb923c" strokeWidth="1.5" markerEnd="url(#jarr)" />

            <rect x="155" y="35" width="110" height="50" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="210" y="55" fill="#fff" fontSize="9" textAnchor="middle">Extracção</text>
            <text x="210" y="67" fill="#fff" fontSize="9" textAnchor="middle">de features</text>
            <text x="210" y="79" fill="#fb923c" fontSize="8" textAnchor="middle">embeddings faciais</text>

            <line x1="265" y1="60" x2="300" y2="60" stroke="#fb923c" strokeWidth="1.5" markerEnd="url(#jarr)" />

            <rect x="300" y="35" width="110" height="50" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="355" y="55" fill="#fff" fontSize="9" textAnchor="middle">Pesquisa</text>
            <text x="355" y="67" fill="#fff" fontSize="9" textAnchor="middle">na base de dados</text>
            <text x="355" y="79" fill="#fb923c" fontSize="8" textAnchor="middle">641M+ fotos (FBI)</text>

            <line x1="410" y1="60" x2="445" y2="60" stroke="#fb923c" strokeWidth="1.5" markerEnd="url(#jarr)" />

            <rect x="445" y="35" width="110" height="50" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="500" y="55" fill="#fff" fontSize="9" textAnchor="middle">Candidatos</text>
            <text x="500" y="67" fill="#fff" fontSize="9" textAnchor="middle">ordenados</text>
            <text x="500" y="79" fill="#fb923c" fontSize="8" textAnchor="middle">por similaridade</text>

            <line x1="555" y1="60" x2="590" y2="60" stroke="#fb923c" strokeWidth="1.5" markerEnd="url(#jarr)" />

            <rect x="590" y="35" width="90" height="50" rx="8" fill="#2d0a0a" stroke="#f97316" strokeWidth="2" />
            <text x="635" y="53" fill="#f97316" fontSize="9" textAnchor="middle" fontWeight="700">Match</text>
            <text x="635" y="65" fill="#f97316" fontSize="9" textAnchor="middle">ERRADO</text>
            <text x="635" y="77" fill="#f97316" fontSize="8" textAnchor="middle">→ prisão</text>

            <text x="350" y="120" fill="#fb923c" fontSize="9" textAnchor="middle">Sem verificação humana adequada, um match errado torna-se mandado de detenção</text>
            <text x="350" y="136" fill="#fb923c" fontSize="8" textAnchor="middle">Robert Williams (2020): primeiro caso público documentado — detido 30h por FR errado em Detroit</text>

            <defs>
              <marker id="jarr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#fb923c" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Bias e Erros de Identificação</h2>
        <p style={S.p}>
          O estudo mais abrangente sobre bias em sistemas de reconhecimento facial é o <strong>NIST Face Recognition Vendor Test (FRVT) de 2019</strong>, que testou 189 algoritmos comerciais. Os resultados foram inequívocos: algoritmos desenvolvidos nos EUA apresentaram false match rates 10 a 100 vezes mais elevados para rostos negros e asiáticos comparativamente a rostos brancos. Mulheres apresentam mais erros do que homens; idosos e crianças apresentam mais erros do que adultos.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.4rem' }}><strong>Gender Shades — Joy Buolamwini, MIT Media Lab (2018)</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Avaliação de sistemas comerciais de classificação de género (Face++, IBM, Microsoft). Taxa de erro para homens brancos: 0,8%. Taxa de erro para mulheres negras: 34,7%. Um diferencial de 43×. Os sistemas foram treinados com datasets predominantemente brancos e masculinos — replicando e amplificando essa distribuição desigual.
          </p>
        </div>
        <p style={S.p}>
          Estes erros têm consequências concretas e documentadas. <strong>Robert Williams</strong> (Detroit, 2020) foi o primeiro caso público de prisão errada por reconhecimento facial. O algoritmo identificou-o erradamente como suspeito de um roubo numa loja. A polícia não verificou adequadamente o match antes de o deter em frente à família. Passou 30 horas em custódia antes de ser libertado.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: '0.4rem' }}><strong>Outros casos documentados em Detroit e New Jersey</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Michael Oliver (Detroit, 2019)</strong> foi preso por FR errado, apesar de ter alibi sólido — o caso não chegou a julgamento apenas após investigação jornalística. <strong>Nijeer Parks (New Jersey, 2019)</strong> ficou detido 10 dias: o match foi errado com um suspeito de roubo a posto de gasolina, mesmo tendo Parks prova de que estava a 30 milhas de distância no momento do crime.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Vigilância em Massa e Espaços Públicos</h2>
        <p style={S.p}>
          A China é o caso mais extremo de implantação de vigilância facial em espaços públicos. Com estimativas de 700 milhões de câmeras em 2022, o sistema "Sharp Eyes" liga câmeras instaladas em ruas, transportes públicos e edifícios a uma plataforma centralizada de reconhecimento facial. Em alguns municípios, está integrado com o sistema de crédito social — o comportamento em espaços públicos afecta scores que determinam acesso a serviços, viagens e emprego.
        </p>
        <p style={S.p}>
          No <strong>Reino Unido</strong>, existem 5 a 6 milhões de câmeras CCTV — aproximadamente uma por cada 10 habitantes. A Metropolitan Police usa Live Facial Recognition (LFR) em eventos desportivos e de entretenimento, com um judicial review em curso sobre a legalidade da prática ao abrigo do Human Rights Act.
        </p>
        <p style={S.p}>
          Nos EUA, a resposta tem sido fragmentada e local. Cidades como San Francisco (2019), Oakland, Cambridge (MA), Boston e Portland proibiram o uso de reconhecimento facial por autoridades públicas. O NYPD desenvolveu o programa DragonFly — drones equipados com reconhecimento facial — sem debate público ou aprovação legislativa.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: '0.4rem' }}><strong>Clearview AI — o caso mais perturbador</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            A Clearview AI construiu a sua base de dados raspando fotos de redes sociais e sites públicos sem consentimento. Foi proibida na União Europeia, multada em Itália (€20M), no Reino Unido (£7,5M) e noutros países. Mas o impacto persiste: os dados já estão na base de dados de centenas de agências policiais que os usaram durante anos.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Regulação e Futuro</h2>
        <p style={S.p}>
          O <strong>EU AI Act (2024)</strong> é o enquadramento regulatório mais abrangente actualmente em vigor. A vigilância biométrica em massa em tempo real em espaços públicos é classificada como "Risco Inaceitável" e está proibida — com três excepções específicas: ameaças terroristas específicas e iminentes, busca de crianças desaparecidas, e perseguição de suspeitos de crimes graves. Cada caso de excepção requer autorização judicial prévia.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Illinois BIPA (Biometric Information Privacy Act, 2008)</strong> — a lei mais forte dos EUA nesta matéria. Exige consentimento explícito antes de qualquer recolha de dados biométricos. É a única lei estadual norte-americana com private right of action — qualquer cidadão pode processar diretamente uma empresa. Multas de $1.000 a $5.000 por violação. A Meta pagou $650 milhões para resolver um processo BIPA sobre o sistema de reconhecimento facial no Facebook.
          </p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 680 190" width="100%" style={{ display: 'block' }}>
            <text x="340" y="18" fill="#fb923c" fontSize="11" fontWeight="600" textAnchor="middle">MAPA REGULATÓRIO — RECONHECIMENTO FACIAL POLICIAL</text>
            {/* EU */}
            <rect x="20" y="35" width="180" height="120" rx="10" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="2" />
            <text x="110" y="55" fill="#f97316" fontSize="10" fontWeight="700" textAnchor="middle">UNIÃO EUROPEIA</text>
            <text x="110" y="72" fill="#f97316" fontSize="9" textAnchor="middle" fontWeight="700">EU AI Act em vigor</text>
            <text x="110" y="87" fill="#fb923c" fontSize="8" textAnchor="middle">FR em tempo real</text>
            <text x="110" y="99" fill="#f97316" fontSize="8" textAnchor="middle" fontWeight="700">PROIBIDO</text>
            <text x="110" y="113" fill="#fb923c" fontSize="8" textAnchor="middle">(excepções com</text>
            <text x="110" y="125" fill="#fb923c" fontSize="8" textAnchor="middle">autorização judicial)</text>
            <text x="110" y="143" fill="#fb923c" fontSize="7" textAnchor="middle">GDPR Art. 9 — dados biométricos</text>

            {/* US */}
            <rect x="250" y="35" width="180" height="120" rx="10" fill="rgba(249,115,22,0.08)" stroke={C} strokeWidth="2" />
            <text x="340" y="55" fill={C} fontSize="10" fontWeight="700" textAnchor="middle">ESTADOS UNIDOS</text>
            <text x="340" y="72" fill={C} fontSize="9" textAnchor="middle" fontWeight="700">Patchwork estadual</text>
            <text x="340" y="87" fill="#fb923c" fontSize="8" textAnchor="middle">SF, Oakland, Cambridge:</text>
            <text x="340" y="99" fill="#f97316" fontSize="8" textAnchor="middle">BANIDO (local)</text>
            <text x="340" y="113" fill="#fb923c" fontSize="8" textAnchor="middle">Illinois BIPA: consentimento</text>
            <text x="340" y="125" fill="#fb923c" fontSize="8" textAnchor="middle">obrigatório</text>
            <text x="340" y="140" fill="#fb923c" fontSize="7" textAnchor="middle">Sem lei federal específica</text>

            {/* China */}
            <rect x="480" y="35" width="180" height="120" rx="10" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="2" />
            <text x="570" y="55" fill="#f97316" fontSize="10" fontWeight="700" textAnchor="middle">CHINA</text>
            <text x="570" y="72" fill="#f97316" fontSize="9" textAnchor="middle" fontWeight="700">Uso generalizado</text>
            <text x="570" y="87" fill="#fb923c" fontSize="8" textAnchor="middle">700M câmeras</text>
            <text x="570" y="99" fill="#fb923c" fontSize="8" textAnchor="middle">Sistema Sharp Eyes</text>
            <text x="570" y="113" fill="#fb923c" fontSize="8" textAnchor="middle">Social credit integrado</text>
            <text x="570" y="127" fill="#fb923c" fontSize="8" textAnchor="middle">Sem limites legais</text>
            <text x="570" y="143" fill="#fb923c" fontSize="7" textAnchor="middle">públicos significativos</text>
          </svg>
        </div>
        <p style={S.p}>
          A ACLU, Access Now e Privacy International têm pressionado por uma moratória global no uso de reconhecimento facial por forças policiais até que existam salvaguardas legais adequadas, mecanismos de responsabilidade, e evidência de que os sistemas podem operar sem discriminação racial sistemática.
        </p>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Reconhecimento Facial em Contexto de Lei e Ordem</strong> — FBI usa NGI (Next Generation Identification) com base de dados de 150M faces; ICE usa reconhecimento facial em condutores de licença; MIT Media Lab (2018) demonstrou que sistemas da IBM, Microsoft e Face++ erravam 35% das vezes para mulheres negras vs. &lt;1% para homens brancos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Bias e Erros de Identificação</strong> — falsos positivos em reconhecimento facial levaram a detenções erradas documentadas: Robert Williams (Detroit, 2020), Michael Oliver (Detroit, 2023) — todos homens negros identificados erroneamente; NIST FRVT confirma que diferenças de accuracy entre demografias persistem nos sistemas comerciais mais recentes.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Vigilância em Massa e Espaços Públicos</strong> — China operacionaliza vigilância em massa com CCTV+facial recognition em 700M câmeras para scoring social e controlo de dissidência; UE EU AI Act proíbe identificação biométrica remota em tempo real em espaços públicos (com excepções de segurança nacional) — divisão regulatória global.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Regulação e Futuro</strong> — EU AI Act (2024) classifica reconhecimento facial em tempo real em espaços públicos como uso proibido (com excepções); NIST AI Risk Management Framework guia empresas; moratoriums municipais (San Francisco, Boston, Portland) precederam regulação federal — tendência de restrição crescente nos EUA e UE.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
