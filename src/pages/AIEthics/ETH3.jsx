import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './AIEthics';

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

export default function ETH3() {
  return (
    <div style={S.page}>
      <Link to="/ai-ethics" style={S.back}>← Voltar ao curso</Link>
      <div style={S.badge}>{modules[2].num} — AI ETHICS &amp; GOVERNANCE</div>
      <h1 style={S.h1}>{modules[2].title}</h1>
      <p style={S.sub}>{modules[2].subtitle}</p>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. EU AI Act — Visão Geral</h2>
        <p style={S.p}>
          O EU AI Act foi aprovado pelo Parlamento Europeu em março de 2024 e entrou em vigor em agosto de 2024,
          tornando-se o primeiro framework regulatório abrangente de inteligência artificial do mundo.
          A sua abordagem é baseada em risco: classifica sistemas de IA por nível de risco e aplica
          requisitos proporcionais a cada categoria.
        </p>
        <p style={S.p}>
          O âmbito de aplicação é amplo — cobre todos os sistemas de IA colocados no mercado da União Europeia
          ou utilizados em território europeu, independentemente da origem geográfica do fornecedor.
          Empresas fora da UE que ofereçam serviços de IA a utilizadores europeus ficam igualmente sujeitas ao regulamento.
        </p>
        <div style={S.highlight}>
          <strong>Abordagem Risk-Based:</strong> Em vez de regular a tecnologia em abstrato, o AI Act regula
          os <em>usos</em> da IA conforme o potencial de dano. Um mesmo modelo base pode ser de alto risco
          num contexto (recrutamento) e de risco mínimo noutro (recomendação de música).
        </div>

        <div style={S.diagram}>
          <svg viewBox="0 0 600 320" width="100%" style={{ display: 'block' }}>
            {/* Unacceptable — top */}
            <polygon points="300,20 195,105 405,105" fill="rgba(249,115,22,0.25)" stroke="#f97316" strokeWidth="1.5" />
            <text x="300" y="63" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">INACEITÁVEL</text>
            <text x="300" y="82" textAnchor="middle" fill="var(--text-primary)" fontSize="7">Proibido — até €35M ou 7% faturação</text>

            {/* High Risk */}
            <polygon points="195,105 130,188 470,188 405,105" fill="rgba(249,115,22,0.18)" stroke="#f97316" strokeWidth="1.5" />
            <text x="300" y="148" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">ALTO RISCO</text>
            <text x="300" y="166" textAnchor="middle" fill="var(--text-primary)" fontSize="9">Conformidade obrigatória · Documentação · Supervisão humana</text>

            {/* Limited Risk */}
            <polygon points="130,188 65,270 535,270 470,188" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="1.5" />
            <text x="300" y="231" textAnchor="middle" fill={C} fontSize="12" fontWeight="700">RISCO LIMITADO</text>
            <text x="300" y="249" textAnchor="middle" fill="var(--text-primary)" fontSize="10">Transparência obrigatória · Chatbots · Deep Fakes</text>

            {/* Minimal Risk — base */}
            <polygon points="65,270 20,308 580,308 535,270" fill="rgba(249,115,22,0.07)" stroke="#f97316" strokeWidth="1.5" />
            <text x="300" y="293" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">RISCO MÍNIMO</text>
            <text x="300" y="306" textAnchor="middle" fill="var(--text-primary)" fontSize="10">Sem requisitos especiais · Filtros de spam · Recomendação</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Tiers de Risco</h2>
        <p style={S.p}>
          <strong style={{ color: '#f97316' }}>Risco Inaceitável (Proibido):</strong> Inclui vigilância biométrica em massa em espaços
          públicos por autoridades, social scoring por governos, manipulação subliminal, exploração de vulnerabilidades
          de grupos protegidos e sistemas de inferência de emoções em contexto laboral ou educativo.
          As sanções chegam a €35 milhões ou 7% da faturação global anual.
        </p>
        <p style={S.p}>
          <strong style={{ color: '#f97316' }}>Alto Risco (Anexo III):</strong> Abrange infraestrutura crítica, sistemas de recrutamento,
          avaliação de crédito, decisões de migração e asilo, admissão académica, identificação biométrica remota,
          aplicação da lei preditiva e decisões judiciais assistidas por IA. Estes sistemas requerem avaliação
          de conformidade, documentação técnica, registo na base de dados europeia e supervisão humana efetiva.
        </p>
        <p style={S.p}>
          <strong style={{ color: C }}>Risco Limitado:</strong> Chatbots e sistemas de geração de conteúdo devem ser identificados
          claramente como IA perante os utilizadores. Deep fakes devem ser rotulados de forma visível.
        </p>
        <p style={S.p}>
          <strong style={{ color: '#f97316' }}>Risco Mínimo:</strong> Sistemas de recomendação de conteúdo e filtros de spam não estão
          sujeitos a requisitos especiais, embora boas práticas éticas continuem recomendadas.
        </p>
        <div style={S.note}>
          <strong>Modelos de IA de Uso Geral (GPAI):</strong> Modelos com capacidade sistémica — definida como
          mais de 10²⁵ FLOP de computação de treino — têm requisitos adicionais: transparência sobre dados
          de treino, avaliação adversarial (red teaming) e incident reporting obrigatório.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Conformidade e Certificação</h2>
        <p style={S.p}>
          Os sistemas de alto risco devem obter <strong>marcação CE</strong> antes de serem colocados no mercado europeu.
          Este processo envolve os <strong>Notified Bodies</strong> — organismos de avaliação de conformidade acreditados
          pelos estados membros para auditar e certificar sistemas de IA.
        </p>
        <p style={S.p}>
          A <strong>AI Office</strong> é o novo organismo da Comissão Europeia criado especificamente para supervisionar
          os modelos GPAI e coordenar a implementação do AI Act a nível europeu, complementando a ação dos
          reguladores nacionais competentes.
        </p>
        <p style={S.p}>
          Os estados membros devem estabelecer <strong>Regulatory Sandboxes</strong> — ambientes de teste controlado
          onde empresas inovadoras podem desenvolver e validar sistemas de IA sob supervisão regulatória,
          sem estarem imediatamente sujeitas a todos os requisitos do regulamento.
        </p>
        <div style={S.note}>
          <strong>Calendário de implementação:</strong> As proibições de risco inaceitável aplicaram-se 6 meses
          após entrada em vigor. Obrigações para GPAI a 12 meses. Obrigações para sistemas de alto risco
          a 24–36 meses, conforme a categoria específica.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Comparação Internacional</h2>
        <p style={S.p}>
          <strong>Estados Unidos:</strong> O Executive Order on AI de outubro de 2023 adota uma abordagem
          predominantemente voluntária para o setor privado, estabelecendo obrigações específicas apenas
          para agências federais. Não existe legislação federal horizontal equivalente ao AI Act.
        </p>
        <p style={S.p}>
          <strong>China:</strong> Regulamentos sectoriais específicos — sobre algoritmos de recomendação (2022),
          deep fakes (2022) e IA generativa (2023) — focam no controlo de conteúdo e na segurança nacional,
          refletindo prioridades regulatórias distintas das europeias.
        </p>
        <p style={S.p}>
          <strong>Reino Unido:</strong> Na sequência do Brexit, adotou uma abordagem "pro-innovation" descentralizada:
          os reguladores sectoriais existentes (FCA, ICO, CMA) aplicam princípios de IA aos seus domínios,
          sem nova legislação horizontal de IA a nível nacional.
        </p>
        <p style={S.p}>
          <strong>Brasil:</strong> O Projeto de Lei 2338/2023 encontra-se em discussão no Senado e inspira-se
          explicitamente no modelo europeu do AI Act, podendo tornar-se o primeiro framework regulatório
          abrangente de IA da América Latina.
        </p>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>EU AI Act — Visão Geral</strong> — o Regulamento Europeu de Inteligência Artificial, aprovado em 2024, é o primeiro quadro legal abrangente para a IA a nível mundial; adota uma abordagem baseada no risco e estabelece obrigações proporcionais para fornecedores e utilizadores de sistemas de IA no mercado europeu.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Tiers de Risco</strong> — o AI Act classifica os sistemas em quatro níveis: risco inaceitável (proibidos, ex.: pontuação social pelo Estado), alto risco (ex.: IA em recrutamento, crédito ou medicina, sujeitos a requisitos rigorosos), risco limitado (obrigações de transparência) e risco mínimo (sem restrições específicas).</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Conformidade e Certificação</strong> — os sistemas de alto risco devem passar por avaliações de conformidade, manter documentação técnica detalhada, garantir supervisão humana e registar-se numa base de dados da UE; a não conformidade pode implicar coimas até 35 milhões de euros ou 7% do volume de negócios global.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Comparação Internacional</strong> — enquanto a UE opta por regulação vinculativa ex-ante, os EUA privilegiam orientações voluntárias e supervisão sectorial, e a China tem regulamentação específica por domínio (recomendações algorítmicas, deep synthesis); esta fragmentação cria desafios de conformidade para empresas que operam globalmente.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
