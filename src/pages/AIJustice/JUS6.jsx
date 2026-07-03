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

export default function JUS6() {
  return (
    <div style={S.page}>
      <Link to="/ai-justice" style={S.back}>← AI & Justice</Link>
      <div style={S.badge}>MÓDULO {modules[5].num}</div>
      <h1 style={S.h1}>MÓDULO {modules[5].title}</h1>
      <p style={S.sub}>MÓDULO {modules[5].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. EU AI Act na Justiça Criminal</h2>
        <p style={S.p}>
          O EU AI Act (2024) é o primeiro instrumento regulatório vinculativo abrangente sobre inteligência artificial no mundo. Na área da justiça criminal, cria uma classificação hierárquica de risco com consequências regulatórias distintas para cada nível.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 720 295" width="100%" style={{ display: 'block' }}>
            <text x="360" y="20" fill="#f97316" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="1">EU AI ACT — PIRÂMIDE DE RISCO NA JUSTIÇA</text>
            {/* Tier 1 — top: Inaceitável */}
            <polygon points="270,32 450,32 510,108 210,108" fill="rgba(234,88,12,0.20)" stroke="#f97316" strokeWidth="2"/>
            <text x="360" y="56" fill="#fff" fontSize="10" fontWeight="800" textAnchor="middle">RISCO INACEITÁVEL — PROIBIDO</text>
            <text x="360" y="71" fill="#fbbf24" fontSize="8" textAnchor="middle">Vigilância biométrica em massa · FR real-time</text>
            <text x="360" y="85" fill="#fbbf24" fontSize="8" textAnchor="middle">Profiling preditivo puro</text>
            {/* Tier 2 — middle: Alto Risco */}
            <polygon points="210,112 510,112 580,192 140,192" fill="rgba(249,115,22,0.12)" stroke="#fb923c" strokeWidth="2"/>
            <text x="360" y="138" fill="#f97316" fontSize="10" fontWeight="800" textAnchor="middle">ALTO RISCO — Obrigações Rigorosas</text>
            <text x="360" y="155" fill="#fb923c" fontSize="8" textAnchor="middle">Avaliação de recidivismo · Policiamento preditivo · Controlo de fronteiras</text>
            <text x="360" y="171" fill="#fb923c" fontSize="7.5" textAnchor="middle">Conformidade pré-deployment · Supervisão humana · Logging obrigatório</text>
            {/* Tier 3 — bottom: Limitado/Mínimo */}
            <polygon points="140,196 580,196 660,276 60,276" fill="rgba(249,115,22,0.06)" stroke="#f59e0b" strokeWidth="1.5"/>
            <text x="360" y="221" fill="#f97316" fontSize="10" fontWeight="700" textAnchor="middle">RISCO LIMITADO / MÍNIMO</text>
            <text x="360" y="238" fill="#fb923c" fontSize="8" textAnchor="middle">Chatbots jurídicos · Triagem documental · Pesquisa de jurisprudência</text>
            <text x="360" y="254" fill="#fb923c" fontSize="7.5" textAnchor="middle">Obrigação de transparência — informar utilizador da interacção com IA</text>
          </svg>
        </div>
        <p style={S.p}>
          Os <strong>sistemas de alto risco</strong> incluem: avaliação de risco e perfis de suspeitos no âmbito da justiça criminal; sistemas usados em controlo de fronteiras e decisões de asilo; e sistemas de aplicação da lei de forma geral. As obrigações são substanciais: avaliação de conformidade antes de qualquer deployment; documentação técnica completa; registo numa base de dados europeia pública; supervisão humana obrigatória em todas as decisões significativas; e logging de decisões para auditoria posterior.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Proibições absolutas na justiça:</strong> vigilância biométrica em massa em espaços públicos em tempo real; sistemas de policiamento preditivo baseados exclusivamente em profiling (sem critérios individuais concretos); inferência de emoções em contexto de interrogatórios policiais. Multas até €35M ou 7% da faturação global anual.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Auditoria de Algoritmos na Justiça</h2>
        <p style={S.p}>
          Uma auditoria algorítmica na justiça criminal deve cobrir quatro dimensões: os <strong>dados de treino</strong> (são representativos? codificam bias histórico?), a <strong>arquitectura do modelo</strong> (quais features usa, com que pesos?), os <strong>outputs</strong> (existem disparidades sistemáticas por grupo demográfico?), e o <strong>impacto em produção</strong> (o que acontece às pessoas que recebem scores elevados vs. baixos?).
        </p>
        <p style={S.p}>
          O arsenal de ferramentas técnicas inclui: <strong>IBM AI Fairness 360</strong> — biblioteca open-source com 70+ métricas de fairness e algoritmos de mitigação de bias; <strong>Aequitas</strong> (Carnegie Mellon) — focado em auditoria de sistemas de políticas públicas; <strong>Fairlearn</strong> (Microsoft) — integração com scikit-learn; e <strong>SHAP</strong> (Shapley Additive Explanations) — para explicabilidade de decisões individuais.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: '0.4rem' }}><strong>Auditoria independente — organizações watchdog</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            A ProPublica, Upturn, AI Now Institute e Algorithmic Justice League realizam auditorias de sistemas públicos usando pedidos de acesso à informação (FOIA nos EUA, equivalentes na Europa), análise de contratos públicos, e testes adversariais. A metodologia combina análise de dados quando disponíveis com análise legal dos contratos e avaliações de impacto declaradas pelas próprias entidades públicas.
          </p>
        </div>
        <p style={S.p}>
          Os <strong>obstáculos</strong> são estruturais: a Northpointe recusou divulgar o código-fonte do COMPAS ao abrigo de trade secrets, mesmo após ordens judiciais; os dados de outcomes necessários para auditoria (quem reincidiu? quem não reincidiu?) são frequentemente dispersos por múltiplas agências; e o custo de uma auditoria independente séria pode ultrapassar os recursos de ONG e investigadores académicos.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Direito à Explicação e Contestação</h2>
        <p style={S.p}>
          O Art. 22 do GDPR consagra o direito a não ser sujeito a decisão tomada exclusivamente com base em tratamento automatizado que produza efeitos jurídicos significativos, bem como o direito a obter intervenção humana, exprimir o ponto de vista e contestar a decisão. Na prática, este direito encontra uma lacuna fundamental: a diferença entre explicação técnica e explicação jurídica.
        </p>
        <p style={S.p}>
          O SHAP pode dizer que o score de risco de determinada pessoa subiu porque a variável "instabilidade residencial" teve peso elevado. Mas isso não é contestável num tribunal penal. O que o arguido precisa é de uma explicação em termos jurídicos: qual a base legal para usar essa variável? Como foi verificado que é um indicador válido e não discriminatório? Qual o impacto desta variável específica na decisão de detenção?
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Accountability gap:</strong> quando uma decisão algorítmica está errada, onde se contesta? Perante o programador que desenvolveu o sistema? Perante a empresa que o vende? Perante o juiz ou agente policial que o utilizou? Perante o tribunal? A difusão de responsabilidade entre desenvolvedor, vendedor, e utilizador é um dos problemas mais difíceis da governança de IA na justiça.
          </p>
        </div>
        <p style={S.p}>
          A proposta mais promissora são as <strong>counterfactual explanations</strong>: em vez de explicar como o score foi calculado, mostrar o que teria que ser diferente para o score ser diferente. "O seu score seria 4 em vez de 8 se não tivesse historial de detenções antes dos 18 anos." Isto é contestável: o arguido pode demonstrar que as detenções anteriores eram injustas, ou que a correlação com reincidência futura não é válida para o seu caso.
        </p>
        <p style={S.p}>
          Cynthia Rudin et al. propõem uma abordagem diferente: usar modelos intrinsecamente interpretáveis — scorecards lineares, Generalized Additive Models — em vez de caixas negras. A investigação mostra que em muitos contextos de justiça criminal, estes modelos simples têm performance preditiva comparável a algoritmos complexos, com a vantagem de serem completamente transparentes sobre como chegam ao resultado.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Transparência e Participação Comunitária</h2>
        <p style={S.p}>
          A <strong>transparência no procurement</strong> é o primeiro passo. Cidades e estados que compram sistemas de IA devem divulgar os contratos, os dados de performance comprometidos pelo fornecedor, e as avaliações de impacto realizadas antes da adopção. Seattle e Nova Iorque adoptaram legislação de surveillance transparency que exige publicação de inventários de tecnologia de vigilância usada pela polícia.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: '0.4rem' }}><strong>NYC Local Law 49 (2021) — primeiro sistema de auditoria algorítmica de ferramentas de emprego</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            A lei obrigou os empregadores de Nova Iorque a realizar auditorias anuais independentes das suas ferramentas de IA usadas em decisões de contratação, e a publicar os resultados. Embora focada em emprego e não em justiça criminal, é o primeiro exemplo de auditoria algorítmica obrigatória com publicação dos resultados — um modelo que defensores querem expandir à justiça.
          </p>
        </div>
        <p style={S.p}>
          Os <strong>Community Impact Assessments (CIAs)</strong> são o equivalente algorítmico dos Environmental Impact Statements: antes de implementar qualquer sistema de IA de alto risco, as autoridades públicas devem consultar as comunidades que serão mais afectadas, publicar uma avaliação dos impactos esperados em direitos e equidade, e abrir um período de comentário público. A proposta do Algorithmic Impact Statement (AIS) segue esta lógica.
        </p>
        <p style={S.p}>
          O <strong>EU AI Act</strong> exige o registo de todos os sistemas de alto risco numa base de dados pública europeia acessível a qualquer cidadão, jornalista ou investigador. Isto permite verificar quais sistemas estão em uso, por quem, e com que base de conformidade declarada — uma infraestrutura de accountability que não existia antes.
        </p>
        <p style={S.p}>
          A ideia mais radical é a <strong>democracia algorítmica</strong>: não apenas consultar comunidades, mas dar-lhes poder de co-design dos sistemas que as afectam, e direito de veto sobre implementações de tecnologias de vigilância nos seus bairros. Várias cidades nos EUA já experimentaram referendos locais sobre policiamento preditivo e reconhecimento facial — com resultados que mostram que quando as comunidades têm informação real, tendem a optar por mais protecções do que as autoridades propõem.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: '0.4rem' }}><strong>Organizações de watchdog e advocacy</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Electronic Frontier Foundation (EFF), ACLU, AI Now Institute, Upturn, Brennan Center for Justice, e Algorithmic Justice League monitorizam implementações, litigam casos, produzem investigação independente e fazem lobby por regulação. A sua pressão foi determinante para o abandono do PredPol em Los Angeles, para os bans de FR em várias cidades, e para a inclusão de salvaguardas no EU AI Act.
          </p>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>EU AI Act na Justiça Criminal</strong> — EU AI Act classifica sistemas de avaliação de risco de reincidência e policiamento preditivo como alto risco — requerem registo, avaliação de conformidade, explicabilidade e supervisão humana; uso de dados biométricos em tempo real em espaços públicos é proibido (artigo 5) — regulação mais abrangente do mundo.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Auditoria de Algoritmos na Justiça</strong> — auditoria algorítmica avalia fairness, accuracy, robustez e compliance de sistemas de IA judicial; NYC Local Law 144 (2023) exige auditorias de bias para automated employment decisions — primeiro precedente de auditoria obrigatória que pode expandir-se a sistemas judiciais.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Direito à Explicação e Contestação</strong> — GDPR Artigo 22 garante direito a explicação e revisão humana de decisões automatizadas significativas; EU AI Act reforça com obrigação de interpretabilidade para sistemas de alto risco; na prática, LIME e SHAP são usados para gerar explicações post-hoc de modelos opacos em contexto judicial.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Transparência e Participação Comunitária</strong> — transparência algoritmica inclui publicação de modelos, dados de treino, métricas de accuracy e auditorias de bias; participação comunitária no design de sistemas de IA judicial é recomendada pelo ACLU e Algorithmic Justice League para garantir que comunidades afectadas têm voz nas ferramentas que as julgam.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
