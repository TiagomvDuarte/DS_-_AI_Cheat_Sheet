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

export default function JUS1() {
  return (
    <div style={S.page}>
      <Link to="/ai-justice" style={S.back}>← AI & Justice</Link>
      <div style={S.badge}>MÓDULO {modules[0].num}</div>
      <h1 style={S.h1}>MÓDULO {modules[0].title}</h1>
      <p style={S.sub}>MÓDULO {modules[0].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. IA e Decisão Judicial — O Contexto</h2>
        <p style={S.p}>
          Sistemas de inteligência artificial são hoje utilizados em decisões que afectam directamente a liberdade das pessoas: prisão preventiva, custódia de filhos, pedidos de asilo, crédito judicial. Os stakes são máximos — erros algorítmicos traduzem-se em anos perdidos de liberdade ou em famílias separadas.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Tipos de uso principais:</strong> avaliação de risco (pré-julgamento, sentença, liberdade condicional), triagem e priorização de casos, análise documental automatizada e policiamento preditivo.
          </p>
        </div>
        <p style={S.p}>
          Os argumentos a favor destes sistemas centram-se na consistência. Juízes humanos são notoriamente inconsistentes: Danziger et al. (2011) documentaram que a taxa de aprovação de liberdade condicional cai de 65% logo após refeições para cerca de 0% antes delas — um efeito de fadiga de decisão com consequências dramáticas para os arguidos. A IA promete também velocidade, redução de custos e escalabilidade em sistemas judiciais sobrecarregados.
        </p>
        <p style={S.p}>
          Os argumentos contra são igualmente sérios: opacidade dos algoritmos, accountability difusa quando algo corre mal, reprodução e amplificação de bias histórico presente nos dados de treino, impossibilidade prática de contestação por parte dos arguidos, e potenciais violações de due process constitucional.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 700 260" width="100%" style={{ display: 'block' }}>
            {/* Human path */}
            <text x="30" y="30" fill="#fb923c" fontSize="11" fontWeight="600">CAMINHO HUMANO</text>
            <rect x="30" y="45" width="120" height="40" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="90" y="60" fill="#fff" fontSize="10" textAnchor="middle">Caso</text>
            <text x="90" y="74" fill="#fff" fontSize="10" textAnchor="middle">Apresentado</text>
            <line x1="150" y1="65" x2="185" y2="65" stroke="#fb923c" strokeWidth="1.5" markerEnd="url(#arr)" />
            <rect x="185" y="45" width="120" height="40" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="245" y="60" fill="#fff" fontSize="10" textAnchor="middle">Juiz</text>
            <text x="245" y="74" fill="#fff" fontSize="10" textAnchor="middle">Delibera</text>
            <line x1="305" y1="65" x2="340" y2="65" stroke="#fb923c" strokeWidth="1.5" />
            <rect x="340" y="45" width="120" height="40" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="400" y="60" fill="#fff" fontSize="10" textAnchor="middle">Decisão</text>
            <text x="400" y="74" fill="#fff" fontSize="10" textAnchor="middle">Fundamentada</text>
            <line x1="460" y1="65" x2="495" y2="65" stroke="#fb923c" strokeWidth="1.5" />
            <rect x="495" y="45" width="120" height="40" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="555" y="60" fill="#f97316" fontSize="10" textAnchor="middle">Recurso</text>
            <text x="555" y="74" fill="#f97316" fontSize="10" textAnchor="middle">Possível</text>

            {/* Algorithmic path */}
            <text x="30" y="155" fill="#fb923c" fontSize="11" fontWeight="600">CAMINHO ALGORÍTMICO</text>
            <rect x="30" y="170" width="120" height="40" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="90" y="185" fill="#fff" fontSize="10" textAnchor="middle">Caso</text>
            <text x="90" y="199" fill="#fff" fontSize="10" textAnchor="middle">Apresentado</text>
            <line x1="150" y1="190" x2="185" y2="190" stroke="#fb923c" strokeWidth="1.5" />
            <rect x="185" y="170" width="120" height="40" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="245" y="185" fill="#fff" fontSize="10" textAnchor="middle">Algoritmo</text>
            <text x="245" y="199" fill="#f97316" fontSize="10" textAnchor="middle">Caixa Negra</text>
            <line x1="305" y1="190" x2="340" y2="190" stroke="#fb923c" strokeWidth="1.5" />
            <rect x="340" y="170" width="120" height="40" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="400" y="185" fill="#fff" fontSize="10" textAnchor="middle">Score de</text>
            <text x="400" y="199" fill="#fff" fontSize="10" textAnchor="middle">Risco</text>
            <line x1="460" y1="190" x2="495" y2="190" stroke="#fb923c" strokeWidth="1.5" />
            <rect x="495" y="170" width="120" height="40" rx="8" fill="#2d1515" stroke="#f97316" strokeWidth="2" />
            <text x="555" y="185" fill="#f97316" fontSize="10" textAnchor="middle">Accountability</text>
            <text x="555" y="199" fill="#f97316" fontSize="10" textAnchor="middle">GAP ⚠</text>

            <defs>
              <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#fb923c" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Due Process e Direitos Fundamentais</h2>
        <p style={S.p}>
          A 5ª e a 14ª Emendas à Constituição dos EUA garantem o direito a processo justo antes de qualquer privação de liberdade. Isso implica, entre outras garantias, o direito a conhecer e a contestar as provas apresentadas contra o próprio. Os sistemas algorítmicos colocam este princípio sob pressão severa.
        </p>
        <p style={S.p}>
          O caso <strong>Loomis v. Wisconsin (2016)</strong> é paradigmático. Eric Loomis contestou o uso do algoritmo COMPAS na sua sentença, alegando que a impossibilidade de aceder à metodologia proprietária violava o seu direito a processo justo. O Supremo Tribunal do Wisconsin manteve a sentença — o COMPAS tinha sido usado como "um factor entre vários." O tribunal determinou que os juízes podiam consultar o score desde que não lhe atribuíssem peso determinante exclusivo.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Problema fundamental:</strong> algoritmos proprietários ocultam a sua metodologia ao abrigo de trade secrets. Os arguidos não sabem quais variáveis foram usadas, não conseguem verificar erros no seu caso concreto, e não têm meios práticos para contestar o score perante um tribunal.
          </p>
        </div>
        <p style={S.p}>
          Na Europa, o <strong>Art. 22 do GDPR</strong> consagra o direito a não ser sujeito a uma decisão tomada exclusivamente com base em tratamento automatizado que produza efeitos jurídicos significativos, bem como o direito a obter intervenção humana, a exprimir o seu ponto de vista e a contestar a decisão. O <strong>EU AI Act</strong> (2024) reforça estas garantias para sistemas de alto risco usados em contexto judicial.
        </p>
        <p style={S.p}>
          A <strong>presunção de inocência</strong> fica igualmente comprometida: sistemas de risco preditivo julgam com base em características estatísticas de grupos demográficos, não nos actos individuais do arguido. Um score elevado reflecte a trajectória de pessoas "semelhantes", não necessariamente o risco real daquele indivíduo.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Casos Históricos Marcantes</h2>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: '0.4rem' }}><strong>COMPAS — ProPublica (2016, Florida)</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            O algoritmo de avaliação de recidivismo da Northpointe (agora Equivant) foi analisado pela ProPublica numa amostra de 7000 arguidos do condado de Broward. Os resultados revelaram que arguidos negros eram classificados como alto risco cerca de duas vezes mais frequentemente do que brancos quando não reincidiam; os brancos eram classificados como baixo risco duas vezes mais frequentemente do que negros quando efectivamente reincidiam.
          </p>
        </div>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: '0.4rem' }}><strong>SyRI — Países Baixos (2020)</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            O sistema SyRI combinava 17 bases de dados governamentais para detectar fraude em benefícios sociais. O Tribunal de Haia declarou-o ilegal por violação do Art. 8 da CEDH (direito à vida privada) — constituindo o primeiro caso em que um tribunal europeu anulou um sistema de IA governamental com base em direitos humanos.
          </p>
        </div>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: '0.4rem' }}><strong>PredPol — Los Angeles (2020)</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            O sistema de policiamento preditivo usado pelo LAPD foi abandonado em 2020 após investigações da ACLU e do The Guardian revelarem ciclos auto-confirmatórios de over-policing em comunidades negras e hispânicas. Mais patrulhas nestas áreas geravam mais detenções, que alimentavam o algoritmo, que previa mais crime nessas áreas.
          </p>
        </div>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: '0.4rem' }}><strong>Allegheny Family Screening Tool — Pennsylvania</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            A ferramenta de avaliação de risco de abuso infantil do condado de Allegheny foi auditada e revelou disparidades raciais: famílias negras eram mais frequentemente sinalizadas como alto risco, em parte porque famílias pobres (com sobre-representação negra) têm maior contacto com serviços sociais — o que gera mais dados no sistema e scores mais elevados.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Tipos de Sistemas por Fase do Processo</h2>
        <p style={S.p}>
          Os sistemas de IA na justiça criminal não se concentram num único momento — estão distribuídos ao longo de todo o pipeline do processo penal, desde a detenção até ao fim do cumprimento da pena.
        </p>
        <p style={S.p}>
          <strong>Pré-julgamento (bail):</strong> ferramentas como a PSA (Public Safety Assessment) da Arnold Foundation, o ORAS e outras avaliam o risco de fuga e de reincidência para orientar decisões sobre liberdade com ou sem caução. A sua utilização cresceu exponencialmente após movimentos de reforma do sistema de bail nos EUA, que buscavam substituir o bail monetário por avaliações mais "objectivas."
        </p>
        <p style={S.p}>
          <strong>Sentença:</strong> COMPAS, LSI-R e o Ohio Risk Assessment System produzem recomendações de pena e encaminhamento para programas de reabilitação. Alguns estados exigem que juízes os considerem explicitamente; outros usam-nos como apoio à decisão.
        </p>
        <p style={S.p}>
          <strong>Durante a reclusão:</strong> sistemas de classificação de segurança determinam o nível de custódia (mínima, média, máxima) e a afectação a programas educativos e de reabilitação — decisões com impacto directo nas condições de cumprimento da pena e nas possibilidades de reintegração.
        </p>
        <p style={S.p}>
          <strong>Liberdade condicional:</strong> ferramentas como o STATIC-99 (para ofensores sexuais) e instrumentos de avaliação de risco de violência orientam as decisões de concessão de liberdade condicional e as condições impostas ao condenado.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Bem-estar social:</strong> para além da justiça criminal propriamente dita, sistemas de IA são usados na triagem de crianças em risco de abuso e negligência, e na determinação de elegibilidade para prestações sociais — com os mesmos problemas de bias, opacidade e due process.
          </p>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>IA e Decisão Judicial — O Contexto</strong> — sistemas de IA são usados em triagem de casos, avaliação de risco de reincidência, reconhecimento facial em investigação e análise de evidências; o problema central é que decisões algorítmicas afectam liberdade e direitos fundamentais — contexto de máxima responsabilidade e accountability.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Due Process e Direitos Fundamentais</strong> — due process exige que o acusado possa contestar as evidências usadas contra si; sistemas opacos (black boxes) violam este princípio ao negar acesso aos factores que determinaram a decisão; GDPR Artigo 22 e EU AI Act proíbem decisões totalmente automatizadas sem supervisão humana em contextos de alto risco.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Casos Históricos Marcantes</strong> — State v. Loomis (Wisconsin, 2016) confirmou uso de COMPAS em sentencing mas exigiu que não fosse único factor; UK Home Office facial recognition em protestos (2021) levantou questões de vigilância em massa; Idaho v. Payne (2023) debateu admissibilidade de algoritmos de DNA probabilístico.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Tipos de Sistemas por Fase do Processo</strong> — investigação (reconhecimento facial, análise de DNA), pré-julgamento (avaliação de risco de fuga, prisão preventiva), sentencing (COMPAS, PSA), libertação condicional (avaliação de reincidência) e execução da pena — cada fase tem diferentes standards de prova e garantias processuais.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
