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

export default function ETH2() {
  return (
    <div style={S.page}>
      <Link to="/ai-ethics" style={S.back}>← Voltar ao curso</Link>
      <div style={S.badge}>{modules[1].num} — AI ETHICS &amp; GOVERNANCE</div>
      <h1 style={S.h1}>{modules[1].title}</h1>
      <p style={S.sub}>{modules[1].subtitle}</p>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Tipos de Bias em IA</h2>
        <p style={S.p}>
          Bias em sistemas de IA não é um fenómeno único — manifesta-se em múltiplos pontos do pipeline de desenvolvimento e tem origens distintas que exigem intervenções diferentes.
        </p>
        <p style={S.p}>
          <strong>Bias Histórico:</strong> os dados de treino refletem desigualdades e discriminações passadas que se tornam padrões aprendidos. Exemplo clássico: modelos de crédito treinados em dados históricos que excluíam sistematicamente minorias raciais de acesso a crédito reproduzem essa exclusão de forma algorítmica, mesmo sem variável racial explícita.
        </p>
        <p style={S.p}>
          <strong>Bias de Representação:</strong> grupos sub-representados no dataset recebem qualidade de serviço inferior. O dataset ImageNet contém 79% de faces brancas. O estudo Gender Shades (Buolamwini &amp; Gebru, 2018) demonstrou que o sistema Face++ apresentava taxa de erro de 98,7% para mulheres negras vs. 0,8% para homens brancos — diferença de 97,9 pontos percentuais no mesmo sistema comercial.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Gender Shades (2018):</strong> Face++ — 0,8% erro para homens brancos vs. 98,7% erro para mulheres negras. O mesmo produto comercial. A sub-representação no dataset traduz-se diretamente em exclusão algorítmica.
          </p>
        </div>
        <p style={S.p}>
          <strong>Bias de Medição:</strong> a variável medida (proxy) não captura bem o conceito alvo. "Número de detenções" não é equivalente a "nível de criminalidade" — é mediado por práticas de policiamento que já refletem bias racial. "Notas académicas" não é equivalente a "inteligência" — é mediado por acesso a recursos educativos.
        </p>
        <p style={S.p}>
          <strong>Bias de Agregação:</strong> usar um modelo único para populações heterogéneas ignora diferenças relevantes. Modelos de diagnóstico de diabetes treinados maioritariamente em homens brancos têm desempenho significativamente inferior em mulheres e grupos étnicos diferentes — grupos que apresentam sintomatologia e valores laboratoriais com distribuições distintas.
        </p>
        <p style={S.p}>
          <strong>Feedback Loops:</strong> sistemas preditivos em ambientes dinâmicos podem amplificar bias ao longo do tempo. Sistemas de policiamento preditivo concentram patrulhas em zonas "de risco" → mais detenções nessas zonas → mais dados que confirmam o risco → concentração ainda maior de patrulhas. O sistema confirma as suas próprias previsões sem que o sinal seja validado externamente.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 520 120" width="100%" style={{ display: 'block' }}>
            {[
              { x: 10, label1: 'Recolha', label2: 'Dados', bias1: 'Histórico', bias2: 'Representação' },
              { x: 115, label1: 'Pré-', label2: 'processamento', bias1: 'Medição', bias2: 'Agregação' },
              { x: 220, label1: 'Treino', label2: 'Modelo', bias1: 'Algorítmico', bias2: 'Optimização' },
              { x: 325, label1: 'Deploy', label2: 'Produção', bias1: 'Interação', bias2: 'Utilizador' },
              { x: 430, label1: 'Feedback', label2: 'Loop', bias1: 'Amplificação', bias2: 'Drift' },
            ].map((s, i) => (
              <g key={i}>
                <rect x={s.x} y="10" width="90" height="42" rx="6" fill="rgba(249,115,22,0.08)" stroke={C} strokeWidth="1.5" />
                <text x={s.x + 45} y="28" textAnchor="middle" fill="#f1f5f9" fontSize="9.5" fontWeight="700">{s.label1}</text>
                <text x={s.x + 45} y="42" textAnchor="middle" fill="#f1f5f9" fontSize="9.5" fontWeight="700">{s.label2}</text>
                <text x={s.x + 45} y="66" textAnchor="middle" fill={C} fontSize="8.5" opacity="0.85">{s.bias1}</text>
                <text x={s.x + 45} y="79" textAnchor="middle" fill={C} fontSize="8.5" opacity="0.85">{s.bias2}</text>
                {i < 4 && <path d={`M${s.x + 91} 31 L${s.x + 105} 31`} stroke={C} strokeWidth="1.5" markerEnd="url(#arr2)" />}
              </g>
            ))}
            <path d="M 475 52 Q 475 100 260 100 Q 45 100 45 52" stroke={C} strokeWidth="1" strokeDasharray="5,3" fill="none" opacity="0.5" />
            <text x="260" y="115" textAnchor="middle" fill="#f1f5f9" fontSize="8">loop de amplificação</text>
            <defs>
              <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill={C} />
              </marker>
            </defs>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Métricas de Fairness</h2>
        <p style={S.p}>
          A formalização matemática de "fairness" produziu múltiplas métricas que capturam intuições morais distintas. A escolha entre elas não é técnica — é normativa.
        </p>
        <p style={S.p}>
          <strong>Demographic Parity (Paridade Demográfica):</strong> P(Ŷ=1|A=0) = P(Ŷ=1|A=1). A taxa de resultado positivo deve ser igual entre grupos definidos pelo atributo protegido A. Intuitiva mas problemática: impõe igualdade de outcomes mesmo quando as prevalências base diferem legitimamente.
        </p>
        <p style={S.p}>
          <strong>Equalized Odds:</strong> TPR (True Positive Rate) e FPR (False Positive Rate) iguais entre grupos. Mais restritivo que demographic parity porque exige que os erros do modelo se distribuam igualmente — tanto falsos positivos como falsos negativos. Formulado por Hardt et al. (2016).
        </p>
        <p style={S.p}>
          <strong>Predictive Parity (Calibration):</strong> P(Y=1|Ŷ=1,A=0) = P(Y=1|Ŷ=1,A=1). Quando o modelo prevê positivo, a probabilidade de ser realmente positivo é igual entre grupos. Esta foi a métrica usada pela Northpointe para defender o COMPAS — calibrado dentro de cada grupo racial, mas com FPR muito diferente entre grupos.
        </p>
        <p style={S.p}>
          <strong>Individual Fairness:</strong> pessoas similares (segundo uma métrica de similaridade definida) devem receber tratamentos similares. Proposta por Dwork et al. (2012). Desafio prático: definir a métrica de similaridade requer julgamentos normativos sobre quais atributos são relevantes.
        </p>
        <p style={S.p}>
          <strong>Counterfactual Fairness:</strong> a decisão do modelo seria a mesma se o atributo protegido do indivíduo fosse diferente, mantendo tudo o resto igual? Exige um modelo causal do domínio, o que raramente está disponível na prática.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 500 220" width="100%" style={{ display: 'block' }}>
            <text x="250" y="18" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="700">Demographic Parity vs. Equalized Odds — exemplo numérico</text>

            {/* Group A */}
            <text x="120" y="40" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">Grupo A</text>
            <rect x="60" y="50" width="50" height="40" rx="3" fill="#c2410c" stroke="#f97316" strokeWidth="1" />
            <text x="85" y="66" textAnchor="middle" fill="#fde8d8" fontSize="8" fontWeight="700">TP</text>
            <text x="85" y="82" textAnchor="middle" fill="#fde8d8" fontSize="9">60</text>
            <rect x="115" y="50" width="50" height="40" rx="3" fill="#7f1d1d" stroke="#f97316" strokeWidth="1" />
            <text x="140" y="66" textAnchor="middle" fill="#fca5a5" fontSize="8" fontWeight="700">FP</text>
            <text x="140" y="82" textAnchor="middle" fill="#fca5a5" fontSize="9">10</text>
            <rect x="60" y="95" width="50" height="40" rx="3" fill="#7f1d1d" stroke="#f97316" strokeWidth="1" />
            <text x="85" y="111" textAnchor="middle" fill="#fca5a5" fontSize="8" fontWeight="700">FN</text>
            <text x="85" y="127" textAnchor="middle" fill="#fca5a5" fontSize="9">15</text>
            <rect x="115" y="95" width="50" height="40" rx="3" fill="#c2410c" stroke="#f97316" strokeWidth="1" />
            <text x="140" y="111" textAnchor="middle" fill="#fde8d8" fontSize="8" fontWeight="700">TN</text>
            <text x="140" y="127" textAnchor="middle" fill="#fde8d8" fontSize="9">40</text>
            <text x="120" y="152" textAnchor="middle" fill="#94a3b8" fontSize="8">TPR=0.80  FPR=0.20</text>

            <line x1="250" y1="40" x2="250" y2="200" stroke="rgba(249,115,22,0.3)" strokeWidth="1" strokeDasharray="4,4" />

            {/* Group B */}
            <text x="380" y="40" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">Grupo B</text>
            <rect x="320" y="50" width="50" height="40" rx="3" fill="#c2410c" stroke="#f97316" strokeWidth="1" />
            <text x="345" y="66" textAnchor="middle" fill="#fde8d8" fontSize="8" fontWeight="700">TP</text>
            <text x="345" y="82" textAnchor="middle" fill="#fde8d8" fontSize="9">30</text>
            <rect x="375" y="50" width="50" height="40" rx="3" fill="#7f1d1d" stroke="#f97316" strokeWidth="1" />
            <text x="400" y="66" textAnchor="middle" fill="#fca5a5" fontSize="8" fontWeight="700">FP</text>
            <text x="400" y="82" textAnchor="middle" fill="#fca5a5" fontSize="9">30</text>
            <rect x="320" y="95" width="50" height="40" rx="3" fill="#7f1d1d" stroke="#f97316" strokeWidth="1" />
            <text x="345" y="111" textAnchor="middle" fill="#fca5a5" fontSize="8" fontWeight="700">FN</text>
            <text x="345" y="127" textAnchor="middle" fill="#fca5a5" fontSize="9">10</text>
            <rect x="375" y="95" width="50" height="40" rx="3" fill="#c2410c" stroke="#f97316" strokeWidth="1" />
            <text x="400" y="111" textAnchor="middle" fill="#fde8d8" fontSize="8" fontWeight="700">TN</text>
            <text x="400" y="127" textAnchor="middle" fill="#fde8d8" fontSize="9">55</text>
            <text x="380" y="152" textAnchor="middle" fill="#94a3b8" fontSize="8">TPR=0.75  FPR=0.35</text>

            <text x="120" y="175" textAnchor="middle" fill="#94a3b8" fontSize="8">Positivos: 70/125 = 56%</text>
            <text x="380" y="175" textAnchor="middle" fill="#94a3b8" fontSize="8">Positivos: 60/125 = 48%</text>
            <text x="250" y="208" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">Demographic Parity: NÃO satisfeita · Equalized Odds: NÃO satisfeita (FPR difere)</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Teorema da Impossibilidade</h2>
        <p style={S.p}>
          Um resultado matemático central para a ética em IA: não é possível satisfazer simultaneamente múltiplas definições razoáveis de fairness quando as prevalências base diferem entre grupos.
        </p>
        <p style={S.p}>
          <strong>Kleinberg et al. (2016)</strong> demonstraram que as três seguintes condições são mutuamente incompatíveis (exceto em casos degenerados): (1) calibração — a pontuação reflete probabilidades reais; (2) balance for positive class — entre indivíduos que realmente reincidirão, a pontuação média é igual entre grupos; (3) balance for negative class — entre indivíduos que não reincidirão, a pontuação média é igual entre grupos.
        </p>
        <p style={S.p}>
          <strong>Chouldechova (2017)</strong> demonstrou formalmente a impossibilidade para o COMPAS especificamente: quando a taxa de reincidência difere entre grupos raciais (o que empiricamente acontece — 51% brancos vs. 63% negros no dataset de Broward County), é matematicamente impossível ter simultaneamente FPR e FNR iguais entre grupos E calibração perfeita.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Implicação fundamental:</strong> Toda a escolha de métrica de fairness é uma decisão moral e política, não técnica. Não existe fairness "objetiva". A pergunta "qual erro é mais injusto — falso positivo ou falso negativo?" é uma questão de valores, não de matemática.
          </p>
        </div>
        <p style={S.p}>
          Este resultado tem consequências diretas para regulação: exigir "fairness algorítmica" sem especificar qual métrica é uma exigência vaga que pode ser satisfeita de múltiplas formas contraditórias. Reguladores precisam de especificar explicitamente quais trade-offs são aceitáveis em que contextos.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Leituras essenciais:</strong> Kleinberg, J., Mullainathan, S., &amp; Raghavan, M. (2016). "Inherent Trade-Offs in the Fair Determination of Risk Scores." · Chouldechova, A. (2017). "Fair prediction with disparate impact." · Barocas, S., Hardt, M., &amp; Narayanan, A. — Fairness and Machine Learning (fairmlbook.org, acesso aberto).
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Técnicas de Mitigação</h2>
        <p style={S.p}>
          A mitigação de bias pode ocorrer em três momentos do pipeline: antes do treino (pre-processing), durante o treino (in-processing) e após o treino (post-processing). Cada abordagem tem trade-offs específicos.
        </p>
        <p style={S.p}>
          <strong>Pre-processing:</strong> intervenção nos dados antes do treino. Técnicas incluem resampling (oversampling de grupos minoritários para equilibrar representação), reweighting (atribuir pesos diferentes a amostras), data augmentation (geração de dados sintéticos para grupos sub-representados) e Disparate Impact Remover (Feldman et al., 2015) que transforma features para remover correlação com atributo protegido mantendo distribuição marginal.
        </p>
        <p style={S.p}>
          <strong>In-processing:</strong> modificação do processo de treino. Adversarial debiasing (Zhang et al., 2018): treina simultaneamente um modelo principal e um adversário — o adversário tenta prever o atributo protegido a partir dos outputs do modelo principal; o modelo principal aprende a ser útil enquanto torna o atributo protegido indetectável. Fairness constraints na função de custo penalizam violações de métricas específicas. Reductions approach (Agarwal et al., 2018) reduz o problema de fairness a uma sequência de problemas de classificação com pesos.
        </p>
        <p style={S.p}>
          <strong>Post-processing:</strong> calibração dos outputs depois do treino. Reject Option Classification: amostras próximas do limiar de decisão (alta incerteza) recebem o outcome favorável para o grupo historicamente desfavorecido. Calibrated Equalized Odds (Pleiss et al., 2017): ajusta limiares de decisão por grupo para satisfazer equalized odds com mínima perda de accuracy.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Ferramentas open-source:</strong> IBM AI Fairness 360 (AIF360) — biblioteca Python com 70+ algoritmos de fairness. Google What-If Tool — visualização interativa de fairness em modelos TF. Microsoft Fairlearn — focado em fairness constraints e dashboards. Aequitas — toolkit de auditoria de bias desenvolvido pela University of Chicago.
          </p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 500 180" width="100%" style={{ display: 'block' }}>
            {/* Pre-processing */}
            <rect x="10" y="20" width="145" height="130" rx="8" fill="rgba(249,115,22,0.08)" stroke={C} strokeWidth="1.5" />
            <text x="82" y="42" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">PRE-PROCESSING</text>
            <line x1="20" y1="50" x2="145" y2="50" stroke="rgba(249,115,22,0.3)" strokeWidth="1" />
            <text x="82" y="68" textAnchor="middle" fill="#94a3b8" fontSize="8.5">• Resampling</text>
            <text x="82" y="84" textAnchor="middle" fill="#94a3b8" fontSize="8.5">• Reweighting</text>
            <text x="82" y="100" textAnchor="middle" fill="#94a3b8" fontSize="8.5">• Data Augmentation</text>
            <text x="82" y="116" textAnchor="middle" fill="#94a3b8" fontSize="8.5">• Disparate Impact</text>
            <text x="82" y="130" textAnchor="middle" fill="#94a3b8" fontSize="8.5">  Remover</text>
            <text x="82" y="146" textAnchor="middle" fill="#64748b" fontSize="7.5">AIF360 · Fairlearn</text>

            <path d="M156 85 L178 85" stroke={C} strokeWidth="1.5" markerEnd="url(#arr3)" />

            {/* In-processing */}
            <rect x="180" y="20" width="145" height="130" rx="8" fill="rgba(249,115,22,0.08)" stroke={C} strokeWidth="1.5" />
            <text x="252" y="42" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">IN-PROCESSING</text>
            <line x1="190" y1="50" x2="315" y2="50" stroke="rgba(249,115,22,0.3)" strokeWidth="1" />
            <text x="252" y="68" textAnchor="middle" fill="#94a3b8" fontSize="8.5">• Adversarial Debiasing</text>
            <text x="252" y="84" textAnchor="middle" fill="#94a3b8" fontSize="8.5">• Fairness Constraints</text>
            <text x="252" y="100" textAnchor="middle" fill="#94a3b8" fontSize="8.5">• Reductions Approach</text>
            <text x="252" y="116" textAnchor="middle" fill="#94a3b8" fontSize="8.5">• Regularização</text>
            <text x="252" y="130" textAnchor="middle" fill="#94a3b8" fontSize="8.5">  Fairness</text>
            <text x="252" y="146" textAnchor="middle" fill="#64748b" fontSize="7.5">AIF360 · What-If Tool</text>

            <path d="M326 85 L348 85" stroke={C} strokeWidth="1.5" markerEnd="url(#arr3)" />

            {/* Post-processing */}
            <rect x="350" y="20" width="145" height="130" rx="8" fill="rgba(249,115,22,0.08)" stroke={C} strokeWidth="1.5" />
            <text x="422" y="42" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">POST-PROCESSING</text>
            <line x1="360" y1="50" x2="485" y2="50" stroke="rgba(249,115,22,0.3)" strokeWidth="1" />
            <text x="422" y="68" textAnchor="middle" fill="#94a3b8" fontSize="8.5">• Reject Option Class.</text>
            <text x="422" y="84" textAnchor="middle" fill="#94a3b8" fontSize="8.5">• Calibrated Equalized</text>
            <text x="422" y="100" textAnchor="middle" fill="#94a3b8" fontSize="8.5">  Odds (Pleiss et al.)</text>
            <text x="422" y="116" textAnchor="middle" fill="#94a3b8" fontSize="8.5">• Threshold</text>
            <text x="422" y="130" textAnchor="middle" fill="#94a3b8" fontSize="8.5">  Optimization</text>
            <text x="422" y="146" textAnchor="middle" fill="#64748b" fontSize="7.5">Aequitas · Fairlearn</text>

            <defs>
              <marker id="arr3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill={C} />
              </marker>
            </defs>
          </svg>
        </div>
        <p style={S.p}>
          Nenhuma técnica de mitigação é uma solução completa. Pre-processing pode remover informação preditiva legítima. In-processing pode reduzir accuracy global. Post-processing não endereça o bias na representação dos dados. A abordagem mais robusta combina auditoria de bias em todas as fases com envolvimento de stakeholders afetados na definição da métrica de fairness relevante para o contexto específico.
        </p>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Tipos de Bias em IA</strong> — o enviesamento pode surgir nos dados (sub-representação, histórico discriminatório), no modelo (escolha de features ou função de perda) ou na forma de uso (feedback loops); identificar a origem do bias é essencial para escolher a estratégia de mitigação adequada.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Métricas de Fairness</strong> — métricas como paridade demográfica (taxas iguais entre grupos), igualdade de oportunidade (mesma taxa de verdadeiros positivos) e calibração (probabilidades consistentes entre grupos) quantificam dimensões distintas de equidade que podem ser relevantes conforme o contexto de aplicação.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Teorema da Impossibilidade</strong> — Chouldechova e Kleinberg demonstraram matematicamente que, salvo em condições muito restritas, é impossível satisfazer simultaneamente paridade demográfica, igualdade de oportunidade e calibração; qualquer sistema terá de fazer escolhas explícitas sobre qual dimensão de equidade priorizar.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Técnicas de Mitigação</strong> — as intervenções podem ocorrer antes do treino (re-amostragem ou re-ponderação dos dados), durante o treino (restrições de equidade na função de perda) ou após o treino (ajuste de limiares por grupo); cada abordagem implica trocas entre equidade, precisão e complexidade operacional.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
