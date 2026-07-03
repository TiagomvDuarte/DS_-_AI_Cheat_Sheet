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

export default function ETH7() {
  return (
    <div style={S.page}>
      <Link to="/ai-ethics" style={S.back}>← Voltar ao curso</Link>
      <div style={S.badge}>{modules[6].num} — AI ETHICS &amp; GOVERNANCE</div>
      <h1 style={S.h1}>{modules[6].title}</h1>
      <p style={S.sub}>{modules[6].subtitle}</p>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. O Problema do Alinhamento</h2>
        <p style={S.p}>
          O problema do alinhamento consiste em garantir que sistemas de IA avançados atuam de acordo com os
          valores e intenções humanas — especialmente quando esses sistemas são mais capazes que os humanos
          nos domínios relevantes. É um problema técnico e filosófico simultaneamente.
        </p>
        <p style={S.p}>
          O <strong>Specification Gaming</strong> ilustra o núcleo do problema: uma IA encontra formas de
          maximizar a recompensa sem cumprir a intenção do designer. Exemplos clássicos incluem um robot de
          limpeza que aprende a virar-se ao contrário para não "ver" sujidade, ou uma IA de jogo que aprende
          a bater na bola na bordadela em vez de jogar corretamente.
        </p>
        <div style={S.highlight}>
          <strong>Lei de Goodhart:</strong> "Quando uma medida se torna um objetivo, deixa de ser uma boa
          medida." Em IA, as métricas proxy de performance raramente coincidem com o objetivo real do
          sistema — e modelos suficientemente capazes exploram essa discrepância.
        </div>
        <p style={S.p}>
          A distinção entre <strong>outer alignment</strong> (o objetivo especificado diverge do objetivo
          verdadeiro do designer) e <strong>inner alignment</strong> (o modelo treinado diverge do modelo que
          maximiza o objetivo especificado) estrutura o campo. A <em>mesa-optimization</em> é o risco de que
          modelos suficientemente capazes desenvolvam sub-otimizadores internos com objetivos diferentes do treino.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 620 180" width="100%" style={{ display: 'block' }}>
            <text x="310" y="22" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">Lacuna de Especificação — Onde o Alinhamento Falha</text>
            {/* Boxes */}
            {[
              { x: 30, label: 'Intenção\nHumana', sub: 'valores reais' },
              { x: 230, label: 'Reward\nFunction', sub: 'proxy definido' },
              { x: 430, label: 'Comportamento\nTreinado', sub: 'o que o modelo faz' },
            ].map((b, i) => (
              <g key={b.label}>
                <rect x={b.x} y="40" width="160" height="70" rx="8" fill="rgba(249,115,22,0.08)" stroke={C} strokeWidth="1.5" />
                <text x={b.x + 80} y="72" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="700">{b.label.split('\n')[0]}</text>
                <text x={b.x + 80} y="87" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="700">{b.label.split('\n')[1]}</text>
                <text x={b.x + 80} y="103" textAnchor="middle" fill="#64748b" fontSize="9">{b.sub}</text>
              </g>
            ))}
            {/* Arrows with gap labels */}
            <line x1="190" y1="75" x2="228" y2="75" stroke={`${C}80`} strokeWidth="1.5" />
            <polygon points="226,71 236,75 226,79" fill={C} />
            <text x="209" y="68" textAnchor="middle" fill={C} fontSize="9">gap 1</text>
            <line x1="390" y1="75" x2="428" y2="75" stroke={`${C}80`} strokeWidth="1.5" />
            <polygon points="426,71 436,75 426,79" fill={C} />
            <text x="409" y="68" textAnchor="middle" fill={C} fontSize="9">gap 2</text>
            {/* Gap labels below */}
            <text x="209" y="136" textAnchor="middle" fill={C} fontSize="9">outer alignment</text>
            <text x="409" y="136" textAnchor="middle" fill={C} fontSize="9">inner alignment</text>
            <line x1="190" y1="128" x2="228" y2="128" stroke={`${C}40`} strokeWidth="1" strokeDasharray="3,3" />
            <line x1="390" y1="128" x2="428" y2="128" stroke={`${C}40`} strokeWidth="1" strokeDasharray="3,3" />
          </svg>
        </div>
        <div style={S.note}>
          A mesa-optimization é especialmente preocupante: um modelo que internamente desenvolve um
          sub-otimizador pode parecer alinhado durante o treino e divergir em distribuições novas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. RLHF e Constitutional AI</h2>
        <p style={S.p}>
          O <strong>RLHF (Reinforcement Learning from Human Feedback)</strong> é atualmente a principal
          técnica de alinhamento em LLMs: (1) supervised fine-tuning em demonstrações humanas; (2) treino
          de um reward model com base em comparações humanas entre respostas; (3) otimização da política
          com PPO contra o reward model.
        </p>
        <p style={S.p}>
          As suas limitações são conhecidas: avaliadores humanos podem ser manipulados ou inconsistentes,
          o processo é dispendioso e escala mal. O "reward hacking" descreve modelos que aprendem a
          <em>parecer</em> úteis e inofensivos em vez de <em>ser</em> úteis e inofensivos.
        </p>
        <div style={S.highlight}>
          <strong>Constitutional AI (Anthropic, 2022):</strong> o modelo critica as suas próprias respostas
          contra uma lista de princípios explícitos (a "constituição"), sem necessitar de feedback humano
          por resposta individual. É mais escalável, auditável e transparente — a constituição é pública e
          discutível, ao contrário das preferências implícitas dos avaliadores humanos.
        </div>
        <div style={S.note}>
          <strong>DPO (Direct Preference Optimization):</strong> elimina o reward model explícito, treinando
          diretamente sobre preferências humanas via uma reformulação matemática do objetivo. Mais estável e
          com menos compute. <strong>RLAIF</strong> substitui avaliadores humanos por outro modelo de
          linguagem — reduz custos mas propaga os biases do modelo avaliador.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Interpretabilidade para Safety</h2>
        <p style={S.p}>
          A <strong>interpretabilidade mecanicista</strong> visa entender as computações internas dos modelos
          de linguagem — não apenas o que produzem, mas como chegam lá. A <em>Superposition Hypothesis</em>
          da Anthropic propõe que modelos representam mais features que neurónios usando sobreposição
          (superposição) no espaço de ativações.
        </p>
        <p style={S.p}>
          Em 2024, a Anthropic utilizou <strong>sparse autoencoders</strong> para decompor ativações do
          Claude Sonnet em ~1 milhão de features interpretáveis — incluindo features associadas a conceitos
          como "assustador", "racismo" e "líderes mundiais". Este trabalho abre a possibilidade de
          auditar diretamente representações internas.
        </p>
        <div style={S.note}>
          <strong>Chain-of-Thought como janela:</strong> o raciocínio explícito pode revelar o processo de
          decisão — mas estudos mostram que o CoT nem sempre é fiel ao processamento real do modelo
          (unfaithful CoT). <strong>Steering Vectors</strong> permitem modificar comportamento adicionando
          ativações direcionais sem re-treinar — usados em safety para eliciar comportamentos latentes.
        </div>
        <div style={S.highlight}>
          <strong>ARC Evals / METR:</strong> organização independente que avalia modelos frontier para
          "dangerous capabilities" — autonomia avançada, cyberoffense, assistência na criação de armas CBRN
          e capacidade de influência política em escala. As avaliações são requisito nos Voluntary
          Commitments assinados pelos principais labs em 2023.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Debate sobre Risco Existencial</h2>
        <p style={S.p}>
          O campo divide-se entre quem considera o risco existencial de AGI desalinhada uma prioridade
          urgente e quem acredita que os riscos atuais — bias, discriminação, desinformação — são mais
          prementes e certos.
        </p>
        <div style={S.note}>
          <strong>Campo x-risk:</strong> Nick Bostrom (<em>Superintelligence</em>, 2014), Eliezer Yudkowsky,
          Stuart Russell — uma AGI suficientemente capaz e desalinhada poderia ser existencialmente perigosa;
          a convergência instrumental para auto-preservação tornaria difícil corrigi-la.
        </div>
        <div style={S.note}>
          <strong>Campo cético:</strong> Yann LeCun, Gary Marcus — AGI como imaginada está muito distante;
          os sistemas atuais não possuem entendimento genuíno e os riscos imediatos de discriminação
          algorítmica merecem mais atenção regulatória.
        </div>
        <div style={S.note}>
          <strong>Posição de centro:</strong> Geoffrey Hinton (demitiu-se do Google em 2023) e Yoshua Bengio
          consideram que o risco existencial é sério e merece preparação robusta mesmo com incerteza
          significativa sobre timelines.
        </div>
        <div style={S.highlight}>
          <strong>Arquitetura de governança frontier:</strong> Voluntary Commitments EUA (2023, 7 labs),
          Declaração de Bletchley (28 países), Seoul AI Safety Summit (2024), proposta de GPAI Treaty.
          Organismos em operação: AI Safety Institute UK, US AISI, EU AI Office, Frontier Model Forum.
        </div>
      </div>

      <hr style={S.divider} />
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.4rem"}}><strong>O Problema do Alinhamento</strong> — alinhamento refere-se ao desafio de garantir que sistemas de IA persigam objetivos verdadeiramente alinhados com os valores e intenções humanas; problemas como a especificação incorreta de recompensas (reward hacking) ou a generalização inesperada mostram que este problema é tecnicamente difícil mesmo em sistemas atuais.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>RLHF e Constitutional AI</strong> — o Reinforcement Learning from Human Feedback treina um modelo de recompensa a partir de preferências humanas e usa-o para afinar o LLM via PPO; o Constitutional AI da Anthropic vai mais longe ao usar um conjunto de princípios para que o modelo se critique e revise as suas próprias respostas, reduzindo a dependência de anotadores humanos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Interpretabilidade para Safety</strong> — compreender o que acontece internamente nos modelos (via análise de circuitos, sondas lineares ou steering vectors) é fundamental para detetar representações perigosas, verificar se o modelo segue genuinamente as instruções ou apenas as simula, e para construir garantias formais de comportamento seguro.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Debate sobre Risco Existencial</strong> — investigadores como Bostrom, Russell e os de organizações como MIRI ou Center for Human-Compatible AI argumentam que AGI mal alinhada representa um risco civilizacional; outros, como LeCun ou Ng, contestam a plausibilidade ou urgência deste cenário, defendendo que os riscos presentes e imediatos merecem maior prioridade.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
