import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './AIEthics';

const C = '#4a9eed';
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

export default function ETH6() {
  return (
    <div style={S.page}>
      <Link to="/ai-ethics" style={S.back}>← Voltar ao curso</Link>
      <div style={S.badge}>{modules[5].num} — AI ETHICS &amp; GOVERNANCE</div>
      <h1 style={S.h1}>{modules[5].title}</h1>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Automação e o Mercado de Trabalho</h2>
        <p style={S.p}>
          O McKinsey Global Institute (2017) estima que até 375 milhões de trabalhadores — cerca de 14% da força
          laboral global — precisarão de mudar de ocupação até 2030 devido à automação. As tarefas mais expostas
          são a rotina manual (operadores de produção, caixas de banco), o processamento de dados (contabilidade,
          entrada de dados) e o trabalho cognitivo rotineiro como análise básica e triagem documental.
        </p>
        <p style={S.p}>
          O <strong>paradoxo da automação</strong> descreve o fenómeno em que automatizar tarefas rotineiras aumenta
          a exigência cognitiva das tarefas remanescentes — pilotos dependem tanto dos sistemas automáticos que
          as suas competências manuais deterioram, tornando-os mais vulneráveis quando os sistemas falham.
        </p>
        <div style={S.highlight}>
          <strong>Setores mais expostos:</strong> transporte e logística (condutores autónomos), manufatura,
          serviços financeiros back-office, contact centers. <strong>Menos expostos:</strong> trabalho de cuidado
          (enfermagem, psicologia), trabalho criativo, decisão em contextos não estruturados.
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 620 260" width="100%" style={{ display: 'block' }}>
            {/* Title */}
            <text x="310" y="24" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">Risco de Automação por Setor (%)</text>
            {/* Y axis */}
            <line x1="80" y1="40" x2="80" y2="220" stroke="rgba(74,158,237,0.3)" strokeWidth="1" />
            {/* X axis */}
            <line x1="80" y1="220" x2="600" y2="220" stroke="rgba(74,158,237,0.3)" strokeWidth="1" />
            {/* Grid lines */}
            {[20, 40, 60, 80].map((v, i) => {
              const y = 220 - (v / 100) * 170;
              return (
                <g key={v}>
                  <line x1="80" y1={y} x2="600" y2={y} stroke="rgba(74,158,237,0.2)" strokeWidth="1" strokeDasharray="4,4" />
                  <text x="72" y={y + 4} textAnchor="end" fill="#64748b" fontSize="10">{v}%</text>
                </g>
              );
            })}
            {/* Bars */}
            {[
              { label: 'Transporte', value: 79 },
              { label: 'Manufatura', value: 64 },
              { label: 'Fin. Services', value: 43 },
              { label: 'Saúde', value: 29 },
              { label: 'Educação', value: 22 },
            ].map((d, i) => {
              const barW = 72;
              const gap = 20;
              const x = 100 + i * (barW + gap);
              const h = (d.value / 100) * 170;
              const y = 220 - h;
              const opacity = 1 - i * 0.12;
              return (
                <g key={d.label}>
                  <rect x={x} y={y} width={barW} height={h} rx="4" fill={C} opacity={opacity} />
                  <text x={x + barW / 2} y={y - 6} textAnchor="middle" fill={C} fontSize="11" fontWeight="700">{d.value}%</text>
                  <text x={x + barW / 2} y="236" textAnchor="middle" fill="#94a3b8" fontSize="10">{d.label}</text>
                </g>
              );
            })}
          </svg>
        </div>
        <div style={S.note}>
          Estes valores representam a proporção de tarefas automáticas dentro de cada setor, não a eliminação
          total de postos de trabalho. A maioria das ocupações será transformada, não eliminada.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Desigualdade Algorítmica</h2>
        <p style={S.p}>
          A distribuição dos benefícios da automação é profundamente desigual. Os ganhos de produtividade tendem
          a concentrar-se nos proprietários de capital, e não nos trabalhadores deslocados. O <strong>Efeito
          Superstar</strong> — amplificado pela IA — descreve como sistemas algorítmicos aumentam a produtividade
          de trabalhadores já produtivos, aprofundando o fosso com os restantes.
        </p>
        <p style={S.p}>
          O impacto é também geograficamente desequilibrado: os empregos em IA concentram-se em hubs tecnológicos
          (São Francisco, Londres, Pequim), enquanto as regiões industriais mais afetadas pela automação têm
          menos acesso a estas novas oportunidades.
        </p>
        <div style={S.highlight}>
          <strong>Discriminação em plataformas gig:</strong> algoritmos de precificação e alocação de tarefas na
          Uber e Deliveroo mostram bias racial e de género nos rendimentos. Um estudo na Amazon Mechanical Turk
          revelou que mulheres ganham 10,5% menos por tarefa — diferença influenciada pelo design da própria
          plataforma nas preferências de trabalho.
        </div>
        <div style={S.note}>
          A concentração de ganhos económicos em poucos atores tecnológicos sem redistribuição adequada é
          apontada por economistas como um dos principais riscos sociais da transição automatizada.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Propostas de Resposta</h2>
        <p style={S.p}>
          Várias abordagens têm sido avançadas para responder ao impacto da automação no mercado de trabalho,
          desde transferências diretas de rendimento até reformas estruturais do tempo de trabalho.
        </p>
        <div style={S.note}>
          <strong>Universal Basic Income (UBI):</strong> pagamento incondicional a todos os cidadãos.
          Piloto na Finlândia (2017–2018): 2 000 desempregados. Piloto em Stockton, EUA (2019–2021): $500/mês.
          Resultados positivos em bem-estar, emprego parcial e saúde mental.
        </div>
        <div style={S.note}>
          <strong>Robot Tax:</strong> proposta de Bill Gates (2017) — tributar empresas que substituem
          trabalhadores por automação para financiar reconversão profissional. Criticada como potencial freio
          à inovação e de difícil operacionalização fiscal.
        </div>
        <div style={S.note}>
          <strong>Reconversão Profissional (Reskilling):</strong> Amazon Upskilling 2025 ($700M para 100k
          trabalhadores), IBM SkillsBuild, EU Skills Agenda. O desafio é a velocidade: os ciclos de
          reconversão são mais longos do que os ciclos de adoção tecnológica.
        </div>
        <div style={S.highlight}>
          <strong>Redução do Horário de Trabalho:</strong> o piloto islandês (2 500 trabalhadores, 2015–2019)
          demonstrou que a produtividade se manteve com semana de 4 dias. Reino Unido, Portugal e Japão
          realizaram ou estão a realizar experiências similares.
        </div>
        <p style={S.p}>
          A <strong>democracia no local de trabalho</strong> emerge como resposta estrutural: co-gestão,
          cooperativas de dados e sindicatos tecnológicos (OPEIU, SAG-AFTRA em negociações sobre IA generativa)
          visam dar aos trabalhadores voz nas decisões de automação.
        </p>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Impacto Ambiental da IA</h2>
        <p style={S.p}>
          O treino de modelos de grande escala tem um custo energético e hídrico significativo. O GPT-3 consumiu
          aproximadamente 1 287 MWh e emitiu ~552 toneladas de CO₂ — equivalente a 120 carros durante um ano.
          O GPT-4 estima-se em 5 a 50 vezes mais. O treino do Llama-3.1-405B exigiu cerca de 7,7 milhões de
          horas de GPU.
        </p>
        <p style={S.p}>
          O arrefecimento dos datacenters também consome volumes críticos de água: o Google reportou 5,6 mil
          milhões de litros em 2022; a Microsoft utiliza cerca de 6 milhões de litros por dia em alguns centros.
        </p>
        <div style={S.highlight}>
          <strong>Trade-off:</strong> a IA pode reduzir emissões noutros setores — otimização de redes elétricas,
          descoberta de materiais para baterias, previsão climática. O DeepMind reportou uma redução de 40% no
          consumo de arrefecimento dos datacenters da Google através de IA.
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 620 200" width="100%" style={{ display: 'block' }}>
            <text x="310" y="22" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">Custo Energético de Treino vs. Setores de Benefício</text>
            {/* Left: Cost side */}
            <rect x="30" y="40" width="240" height="140" rx="8" fill="rgba(74,158,237,0.08)" stroke="rgba(74,158,237,0.3)" strokeWidth="1" />
            <text x="150" y="62" textAnchor="middle" fill="#7dd3fc" fontSize="11" fontWeight="700">CUSTO ENERGÉTICO</text>
            {[
              { label: 'GPT-3', val: '1 287 MWh / 552t CO₂' },
              { label: 'GPT-4 (est.)', val: '~5–50× GPT-3' },
              { label: 'Llama-3.1-405B', val: '7,7M GPU horas' },
              { label: 'Água (Google 2022)', val: '5,6B litros' },
            ].map((item, i) => (
              <g key={item.label}>
                <text x="44" y={84 + i * 24} fill={C} fontSize="10" fontWeight="600">{item.label}</text>
                <text x="44" y={97 + i * 24} fill="#64748b" fontSize="9">{item.val}</text>
              </g>
            ))}
            {/* Arrow */}
            <line x1="278" y1="110" x2="342" y2="110" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr)" />
            <polygon points="342,106 352,110 342,114" fill="#475569" />
            <text x="310" y="104" textAnchor="middle" fill="#475569" fontSize="9">trade-off</text>
            {/* Right: Benefit side */}
            <rect x="350" y="40" width="240" height="140" rx="8" fill="rgba(74,158,237,0.08)" stroke="rgba(74,158,237,0.3)" strokeWidth="1" />
            <text x="470" y="62" textAnchor="middle" fill="#7dd3fc" fontSize="11" fontWeight="700">BENEFÍCIO POTENCIAL</text>
            {[
              { label: 'Redes Elétricas', val: 'Otimização consumo energético' },
              { label: 'Baterias', val: 'Descoberta de materiais' },
              { label: 'Clima', val: 'Previsão de fenómenos extremos' },
              { label: 'Datacenters', val: '−40% arrefecimento (DeepMind)' },
            ].map((item, i) => (
              <g key={item.label}>
                <text x="364" y={84 + i * 24} fill={C} fontSize="10" fontWeight="600">{item.label}</text>
                <text x="364" y={97 + i * 24} fill="#64748b" fontSize="9">{item.val}</text>
              </g>
            ))}
          </svg>
        </div>
        <div style={S.note}>
          Práticas sustentáveis emergentes incluem: model distillation e quantização (modelos mais pequenos e
          eficientes), datacenters 100% renováveis (Google, Microsoft), e Carbon-Aware Computing — executar
          treino quando a rede elétrica tem mais energia limpa disponível.
        </div>
      </div>

      <hr style={S.divider} />

    </div>
  );
}
