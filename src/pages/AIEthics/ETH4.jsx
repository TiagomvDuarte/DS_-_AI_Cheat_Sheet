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

export default function ETH4() {
  return (
    <div style={S.page}>
      <Link to="/ai-ethics" style={S.back}>← Voltar ao curso</Link>
      <div style={S.badge}>{modules[3].num} — AI ETHICS &amp; GOVERNANCE</div>
      <h1 style={S.h1}>{modules[3].title}</h1>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. GDPR e Proteção de Dados</h2>
        <p style={S.p}>
          O Regulamento Geral de Proteção de Dados (GDPR), em vigor desde maio de 2018, tornou-se o
          framework europeu de referência global em matéria de privacidade. A sua influência estende-se
          muito além da UE, tendo inspirado legislação em dezenas de países e estabelecido um padrão
          de facto para empresas que operam globalmente.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 520 300" width="100%" style={{ display: 'block' }}>
            {/* Center circle */}
            <circle cx="260" cy="150" r="42" fill="rgba(74,158,237,0.25)" stroke={C} strokeWidth="2" />
            <text x="260" y="145" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="800">7 PRINCÍPIOS</text>
            <text x="260" y="161" textAnchor="middle" fill={C} fontSize="9">GDPR</text>

            {/* Principle nodes */}
            {[
              { label: 'Legalidade &', label2: 'Transparência', cx: 260, cy: 40 },
              { label: 'Limitação de', label2: 'Finalidade', cx: 400, cy: 80 },
              { label: 'Minimização', label2: 'de Dados', cx: 450, cy: 190 },
              { label: 'Exatidão', label2: '', cx: 370, cy: 270 },
              { label: 'Limitação de', label2: 'Conservação', cx: 150, cy: 270 },
              { label: 'Integridade &', label2: 'Confidencial.', cx: 68, cy: 190 },
              { label: 'Responsabi-', label2: 'lização', cx: 118, cy: 80 },
            ].map((p, i) => {
              const dx = p.cx - 260, dy = p.cy - 150;
              const dist = Math.sqrt(dx * dx + dy * dy);
              const x1 = 260 + dx / dist * 42, y1 = 150 + dy / dist * 42;
              const x2 = p.cx - dx / dist * 30, y2 = p.cy - dy / dist * 30;
              return (
                <g key={i}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={`${C}60`} strokeWidth="1.2" />
                  <circle cx={p.cx} cy={p.cy} r="30" fill="rgba(74,158,237,0.20)" stroke={C} strokeWidth="1.5" />
                  <text x={p.cx} y={p.label2 ? p.cy - 4 : p.cy + 4} textAnchor="middle" fill="var(--text-primary)" fontSize="8" fontWeight="600">{p.label}</text>
                  {p.label2 && <text x={p.cx} y={p.cy + 10} textAnchor="middle" fill="var(--text-primary)" fontSize="8" fontWeight="600">{p.label2}</text>}
                </g>
              );
            })}
          </svg>
        </div>

        <p style={S.p}>
          Os sete princípios do GDPR são: legalidade, lealdade e transparência; limitação de finalidade;
          minimização de dados; exatidão; limitação de conservação; integridade e confidencialidade; e responsabilização.
        </p>
        <p style={S.p}>
          As bases legais para tratamento de dados incluem: consentimento, execução de contrato, obrigação legal,
          defesa de interesses vitais, tarefa de interesse público e interesses legítimos do responsável pelo tratamento.
        </p>
        <div style={S.highlight}>
          <strong>Artigo 22 — Decisões automatizadas:</strong> Os titulares têm o direito de não ficarem sujeitos
          a decisões tomadas exclusivamente com base em tratamento automatizado, incluindo a definição de perfis,
          que produzam efeitos na sua esfera jurídica. Este artigo inclui o direito a obter explicação sobre
          a lógica subjacente ao sistema.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Privacidade Diferencial</h2>
        <p style={S.p}>
          A privacidade diferencial (Dwork et al., 2006) oferece uma garantia matemática formal: um mecanismo
          M é (ε,δ)-diferencial privado se para qualquer par de datasets D e D' que diferem numa única entrada,
          e para qualquer conjunto de outputs S, se verifica:
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 620 240" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker id="arr4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill={C} />
              </marker>
              <marker id="arr4d" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill={`${C}80`} />
              </marker>
            </defs>

            {/* Dataset D */}
            <rect x="15" y="30" width="125" height="85" rx="8" fill="rgba(74,158,237,0.09)" stroke={C} strokeWidth="1.5" />
            <text x="77" y="58" textAnchor="middle" fill={C} fontSize="13" fontWeight="700">Dataset D</text>
            <text x="77" y="78" textAnchor="middle" fill="#94a3b8" fontSize="10">registo r₁</text>
            <text x="77" y="93" textAnchor="middle" fill="#94a3b8" fontSize="10">registo r₂</text>
            <text x="77" y="108" textAnchor="middle" fill="#94a3b8" fontSize="10">...</text>

            {/* Dataset D' */}
            <rect x="15" y="135" width="125" height="50" rx="8" fill="rgba(74,158,237,0.06)" stroke={`${C}60`} strokeWidth="1.2" strokeDasharray="5 3" />
            <text x="77" y="158" textAnchor="middle" fill={`${C}cc`} fontSize="11" fontWeight="600">Dataset D'</text>
            <text x="77" y="176" textAnchor="middle" fill="#64748b" fontSize="9">(difere em 1 entrada)</text>

            {/* Arrows to mechanism */}
            <line x1="140" y1="72" x2="218" y2="105" stroke={`${C}80`} strokeWidth="1.5" markerEnd="url(#arr4)" />
            <line x1="140" y1="160" x2="218" y2="130" stroke={`${C}50`} strokeWidth="1.2" strokeDasharray="5 3" markerEnd="url(#arr4d)" />

            {/* Mechanism box */}
            <rect x="218" y="82" width="135" height="70" rx="8" fill="rgba(74,158,237,0.10)" stroke={C} strokeWidth="2" />
            <text x="285" y="108" textAnchor="middle" fill={C} fontSize="12" fontWeight="700">Mecanismo M</text>
            <text x="285" y="126" textAnchor="middle" fill="#94a3b8" fontSize="9">+ ruído calibrado</text>
            <text x="285" y="141" textAnchor="middle" fill="#94a3b8" fontSize="9">N(0, σ²)</text>

            {/* Arrows to outputs */}
            <line x1="353" y1="105" x2="418" y2="72" stroke={`${C}80`} strokeWidth="1.5" markerEnd="url(#arr4)" />
            <line x1="353" y1="135" x2="418" y2="168" stroke={`${C}50`} strokeWidth="1.2" strokeDasharray="5 3" markerEnd="url(#arr4d)" />

            {/* Output D */}
            <rect x="418" y="42" width="185" height="55" rx="8" fill="rgba(74,158,237,0.09)" stroke={C} strokeWidth="1.5" />
            <text x="510" y="67" textAnchor="middle" fill={C} fontSize="11" fontWeight="700">P[M(D) ∈ S]</text>
            <text x="510" y="86" textAnchor="middle" fill="#94a3b8" fontSize="9">distribuição de output</text>

            {/* Output D' */}
            <rect x="418" y="140" width="185" height="55" rx="8" fill="rgba(74,158,237,0.06)" stroke={`${C}60`} strokeWidth="1.2" strokeDasharray="5 3" />
            <text x="510" y="165" textAnchor="middle" fill={`${C}cc`} fontSize="11" fontWeight="600">P[M(D') ∈ S]</text>
            <text x="510" y="184" textAnchor="middle" fill="#64748b" fontSize="9">≤ eᵋ × P[M(D) ∈ S] + δ</text>
          </svg>
        </div>
        <p style={S.p}>
          O parâmetro <strong>ε (epsilon)</strong> representa o privacy budget: ε=0 corresponde a privacidade
          perfeita (outputs idênticos para D e D'), enquanto ε→∞ equivale a ausência de proteção. Na prática,
          valores entre 0.1 e 10 são tipicamente utilizados. O parâmetro <strong>δ (delta)</strong> representa
          a probabilidade de falha da garantia, geralmente negligenciável (10⁻⁵ a 10⁻⁸).
        </p>
        <p style={S.p}>
          O <strong>Mecanismo Gaussiano</strong> adiciona ruído N(0, σ²) onde σ = sensitivity × √(2ln(1.25/δ)) / ε.
          Aplicações reais incluem o Google RAPPOR (Chrome), telemetria Apple (iOS), o US Census Bureau em 2020
          e o DP-SGD para treino de modelos ML com privacidade (TensorFlow Privacy, Opacus/PyTorch).
        </p>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Surveillance Capitalism</h2>
        <p style={S.p}>
          Shoshana Zuboff, em "The Age of Surveillance Capitalism" (2019), descreve o modelo económico
          emergente onde dados comportamentais são extraídos em larga escala, processados por sistemas
          de IA e vendidos como "behavioral futures" — previsões sobre comportamento futuro comercializadas
          a anunciantes e outros compradores.
        </p>
        <div style={S.note}>
          <strong>Ciclo de extração:</strong> experiência humana → dados comportamentais → behavioral surplus
          → prediction products → behavioral futures markets. O utilizador é simultaneamente matéria-prima
          e consumidor do produto.
        </div>
        <p style={S.p}>
          Exemplos paradigmáticos incluem o Google AdSense, o Facebook pixel de rastreamento, sistemas
          de scoring social e reconhecimento facial em contextos de retalho. A Clearview AI construiu
          uma base de dados com mais de 3 mil milhões de fotografias scrapeadas de redes sociais,
          disponibilizando serviços de reconhecimento facial a entidades policiais.
        </p>
        <p style={S.p}>
          A investigação de Joy Buolamwini (MIT Media Lab) documentou erros de reconhecimento facial
          de 35% para mulheres negras, comparados com 0.3% para homens brancos — revelando como vieses
          de dados de treino se traduzem em discriminação algorítmica com impacto real.
        </p>
        <p style={S.p}>
          Os contra-movimentos incluem banimentos municipais (San Francisco, Boston), enforcement ativo
          do GDPR na Europa e campanhas internacionais por moratórias sobre tecnologia de reconhecimento facial.
        </p>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Anonimização e Pseudonimização</h2>
        <p style={S.p}>
          O GDPR (Art. 4) distingue <strong>pseudonimização</strong> — substituição de identificadores
          diretos por pseudónimos, mantendo o estatuto de dado pessoal — de <strong>anonimização verdadeira</strong>,
          onde os dados deixam de permitir re-identificação e saem do âmbito do regulamento.
          Na prática, a anonimização verdadeira é extremamente difícil de alcançar.
        </p>
        <p style={S.p}>
          Ataques de re-identificação bem documentados incluem: o dataset Netflix Prize (Narayanan &amp; Shmatikoff, 2008),
          onde 99% dos utilizadores foram re-identificados com apenas 2 ratings e uma data aproximada;
          os logs de pesquisa da AOL (2006), onde padrões de pesquisa permitiram identificar utilizadores
          concretos; e dados hospitalares do Massachusetts, re-identificados cruzando com registos
          eleitorais públicos.
        </p>
        <p style={S.p}>
          <strong>k-Anonimidade</strong> garante que cada registo é indistinguível de pelo menos k-1 outros
          registos. Contudo, é vulnerável a ataques de homogeneidade quando os atributos sensíveis são
          uniformes dentro do grupo. A <strong>l-Diversidade</strong> e a <strong>t-Closeness</strong>
          são extensões que mitigam estas limitações.
        </p>
        <div style={S.note}>
          <strong>Federated Learning como alternativa:</strong> Os dados permanecem no dispositivo do utilizador
          e apenas os gradientes do modelo são partilhados com o servidor central, reduzindo substancialmente
          a exposição de dados pessoais sem sacrificar a capacidade de treino coletivo do modelo.
        </div>
      </div>

    </div>
  );
}
