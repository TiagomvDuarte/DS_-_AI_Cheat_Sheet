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

export default function JUS5() {
  return (
    <div style={S.page}>
      <Link to="/ai-justice" style={S.back}>← AI & Justice</Link>
      <div style={S.badge}>MÓDULO {modules[4].num}</div>
      <h1 style={S.h1}>MÓDULO {modules[4].title}</h1>
      <p style={S.sub}>MÓDULO {modules[4].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Legal Research com IA</h2>
        <p style={S.p}>
          A transformação da pesquisa jurídica passou por três fases: pesquisa manual em volumes físicos com índices analíticos, bases de dados electrónicas com pesquisa por palavras-chave (LexisNexis desde 1973, Westlaw desde 1975), e agora NLP e modelos de linguagem para análise semântica profunda. A terceira fase está a ocorrer agora.
        </p>
        <p style={S.p}>
          As ferramentas modernas incluem o <strong>Westlaw Edge</strong> (Thomson Reuters) com análise preditiva de casos e identificação automática de jurisprudência contrária; o <strong>Lexis+ AI</strong> com retrieval-augmented generation sobre o corpus de jurisprudência; o <strong>Casetext CARA AI</strong> (adquirido pela Thomson Reuters por $650M em 2023); e o <strong>Harvey AI</strong>, baseado em GPT-4 com fine-tuning jurídico, validado por Allen &amp; Overy e PwC Legal.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.4rem' }}><strong>Risco de alucinação — Caso Mata v. Avianca (2023)</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            O advogado Steven Schwartz submeteu um brief num processo federal em Nova Iorque contendo seis citações de casos jurisprudenciais completamente inexistentes — gerados pelo ChatGPT sem qualquer verificação. O juíz descobriu quando tentou localizar os casos. Schwartz foi multado em $5.000 e sancionado. O caso tornou-se a advertência canónica sobre o uso irresponsável de IA generativa em contexto jurídico.
          </p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 700 170" width="100%" style={{ display: 'block' }}>
            <text x="350" y="18" fill="#fb923c" fontSize="11" fontWeight="600" textAnchor="middle">PIPELINE DE LEGAL RESEARCH COM IA</text>
            {/* Steps */}
            {[
              { x: 20, label: 'Query', sub: 'pergunta jurídica' },
              { x: 155, label: 'Pesquisa', sub: 'semântica (RAG)' },
              { x: 290, label: 'Recuperação', sub: 'de casos' },
              { x: 425, label: 'Análise', sub: 'e síntese' },
              { x: 560, label: 'Memorando', sub: 'gerado por IA' },
            ].map(({ x, label, sub }, i) => (
              <g key={i}>
                <rect x={x} y="35" width="110" height="50" rx="8"
                  fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
                <text x={x + 55} y="57" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="600">{label}</text>
                <text x={x + 55} y="72" fill="#fb923c" fontSize="8" textAnchor="middle">{sub}</text>
                {i < 4 && <line x1={x + 110} y1="60" x2={x + 130} y2="60" stroke="#fb923c" strokeWidth="1.5" markerEnd="url(#larr)" />}
              </g>
            ))}
            {/* Warning */}
            <rect x="430" y="105" width="240" height="40" rx="6" fill="#2d0a0a" stroke="#f97316" strokeWidth="1.5" />
            <text x="550" y="121" fill="#f97316" fontSize="9" textAnchor="middle" fontWeight="700">⚠ RISCO DE ALUCINAÇÃO</text>
            <text x="550" y="135" fill="#f97316" fontSize="8" textAnchor="middle">Verificar TODAS as citações geradas</text>
            <line x1="615" y1="85" x2="615" y2="105" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3,2" />
            <defs>
              <marker id="larr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#fb923c" />
              </marker>
            </defs>
          </svg>
        </div>
        <p style={S.p}>
          Um marco importante: o GPT-4 passou o Uniform Bar Exam dos EUA com resultado no percentil 90+, em 2023. Mas passar um exame não equivale a exercer advocacia com responsabilidade profissional — a diferença está na verificação, no julgamento contextual e na accountability.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Análise de Contratos e Documentos</h2>
        <p style={S.p}>
          A revisão de contratos foi uma das primeiras áreas jurídicas a ver adopção de IA a grande escala, por razões práticas: é um trabalho repetitivo, de alto volume, com padrões reconhecíveis. Ferramentas como <strong>Kira Systems</strong> (agora Litera), <strong>Luminance</strong> e <strong>Ironclad</strong> extraem automaticamente cláusulas críticas, detectam desvios de standards contratuais e geram relatórios de risco.
        </p>
        <p style={S.p}>
          Em processos de M&amp;A (fusões e aquisições), data rooms podem conter 100.000 ou mais documentos. A IA identifica cláusulas de change of control, limitações de responsabilidade, disposições de propriedade intelectual e garantias — em horas em vez de semanas. O Kira reporta precisão superior a 90% na extracção de cláusulas standard, embora a performance degrade em cláusulas não-standard ou mal redigidas.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: '0.4rem' }}><strong>E-discovery e Technology-Assisted Review (TAR)</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Em litígios complexos, as partes podem ser obrigadas a rever milhões de emails e documentos para identificar material relevante. O TAR treina um classificador com a revisão inicial de advogados e aplica-o ao corpus completo. Em <strong>Da Silva Moore v. Publicis Groupe (2012)</strong>, um tribunal federal dos EUA aceitou pela primeira vez o TAR como equivalente à revisão manual — um precedente que abriu caminho à adopção generalizada.
          </p>
        </div>
        <p style={S.p}>
          Para contratos internacionais, modelos multilingues como mBERT e XLM-R permitem análise em múltiplos idiomas. Um contrato redigido em inglês, com aditamentos em alemão e cláusulas de arbitragem em francês, pode ser analisado de forma coerente — algo impraticável com ferramentas de pesquisa por palavras-chave monolingues.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Previsão de Decisões Judiciais</h2>
        <p style={S.p}>
          A previsão computacional de decisões judiciais existe desde os anos 1960, mas atingiu novos patamares de precisão com ML e NLP. <strong>Katz et al. (2017)</strong> desenvolveram um modelo que previu decisões do Supremo Tribunal dos EUA com 70,2% de precisão — superando a precisão média de juristas especializados em SCOTUS (66%). O modelo usava características estruturais dos casos, sem processar o texto dos argumentos jurídicos.
        </p>
        <p style={S.p}>
          Na Europa, <strong>Medvedeva et al. (2020)</strong> aplicaram BERT a decisões do Tribunal Europeu dos Direitos Humanos, alcançando 75% de precisão na previsão de violações da CEDH. O modelo identificou que certas características linguísticas dos factos dados como provados correlacionavam fortemente com o desfecho.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Risco normativo:</strong> se juízes consultam previsões algorítmicas como âncora antes de deliberar — efeito documentado em psicologia cognitiva — os modelos tornam-se self-fulfilling prophecies. A diversidade de raciocínio judicial, essencial para a evolução do direito, é comprometida: casos que deveriam mudar a jurisprudência tornam-se mais difíceis de decidir contra a tendência estatística.
          </p>
        </div>
        <p style={S.p}>
          Em Portugal, o sistema <strong>jurisprudencia.pt</strong> e o motor de pesquisa semântica do Supremo Tribunal de Justiça facilitam a localização de jurisprudência relevante. A IA na tomada de decisão judicial propriamente dita não está, por enquanto, em uso em Portugal — mas o debate regulatório europeu vai inevitavelmente tocar esta questão.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Acesso à Justiça e Democratização</h2>
        <p style={S.p}>
          O "justice gap" é uma crise silenciosa. Nos EUA, 80% dos americanos de baixo rendimento com problemas legais significativos não têm representação legal. No Reino Unido, os cortes de legal aid desde 2012 criaram "advice deserts" — áreas geográficas sem qualquer serviço de apoio jurídico acessível. Esta é a promessa mais sedutora da IA jurídica: democratizar o acesso.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: '0.4rem' }}><strong>DoNotPay — o "robot lawyer"</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Fundado em 2015 por Joshua Browder, o DoNotPay começou por contestar multas de trânsito com chatbots. Expandiu para cancelamento de subscrições, reclamações de voo, e pequenas reclamações. Em 2023, anunciou que ia usar IA para "argumentar" em tribunal via auricular — o que rapidamente resultou em ameaças de processos criminais por exercício ilegal de advocacia, levando ao recuo. O caso ilustra o problema regulatório: onde termina a informação jurídica e começa o conselho legal protegido?
          </p>
        </div>
        <p style={S.p}>
          As <strong>limitações reais</strong> são sérias. A IA não substitui aconselhamento legal personalizado — especialmente em casos com factos complexos, emoções envolvidas (direito de família, imigração), ou quando estão em jogo liberdade ou direitos fundamentais. Os problemas de responsabilidade são não resolvidos: quando uma IA dá conselho errado e alguém perde um processo ou uma casa, quem responde? E existe um risco de aprofundamento da desigualdade: quem não tem acesso tecnológico ou literacia digital fica ainda mais excluído.
        </p>
        <p style={S.p}>
          O <strong>potencial real</strong> está em tarefas específicas: triagem de casos para encaminhar para o serviço adequado (ONG, serviço de mediação, tribunal, advogado pro bono); preparação de documentos standard (contestações simples, pedidos de renegociação de contratos de arrendamento); explicação de direitos em linguagem acessível; e tradução jurídica de alta qualidade para comunidades imigrantes.
        </p>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Legal Research com IA</strong> — LLMs (Harvey AI, CaseText CoCounsel) pesquisam jurisprudência, resumem casos e identificam precedentes relevantes em segundos vs. horas de pesquisa manual; acurácia de citações é o desafio principal — alucinação de casos inexistentes (Mata v. Avianca, 2023) tem consequências disciplinares para advogados.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Análise de Contratos e Documentos</strong> — NLP extrai cláusulas chave (indemnização, limitação de responsabilidade, governing law), detecta cláusulas não-standard e compara contratos vs. templates; Kira, Luminance e Evisort são plataformas especializadas — due diligence de M&A que levava semanas agora demora horas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Previsão de Decisões Judiciais</strong> — modelos de ML treinados em decisões históricas prevêem outcomes processuais com 70–80% de accuracy em domínios específicos (ECHR: Aletras et al., 2016, 79%); usado por litigantes para avaliar probabilidade de sucesso e calibrar estratégia de settlement vs. litígio.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Acesso à Justiça e Democratização</strong> — chatbots jurídicos (DoNotPay, Perplexity Legal) auxiliam cidadãos sem advogado em small claims e procedimentos administrativos; LLMs fine-tuned em direito nacional permitem Q&A sobre direitos em linguagem acessível — reduz a "justice gap" mas levanta questões de UPL (Unauthorized Practice of Law).</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
