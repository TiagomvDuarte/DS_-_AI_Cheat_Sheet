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

export default function ETH1() {
  return (
    <div style={S.page}>
      <Link to="/ai-ethics" style={S.back}>← Voltar ao curso</Link>
      <div style={S.badge}>{modules[0].num} — AI ETHICS &amp; GOVERNANCE</div>
      <h1 style={S.h1}>{modules[0].title}</h1>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Stakeholders em IA</h2>
        <p style={S.p}>
          O desenvolvimento e a implantação de sistemas de IA envolvem múltiplos atores com interesses frequentemente divergentes. Compreender o mapa de stakeholders é o primeiro passo para uma análise ética rigorosa.
        </p>
        <p style={S.p}>
          Os principais grupos incluem: <strong>desenvolvedores</strong> (engenheiros e investigadores que constroem os sistemas), <strong>empresas</strong> (organizações que financiam e implantam), <strong>reguladores</strong> (governos e agências que definem regras), <strong>utilizadores finais</strong> (indivíduos que interagem diretamente com o sistema) e <strong>sociedade civil</strong> (comunidades afetadas indiretamente, ONGs, academia).
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Tensão central:</strong> Velocidade de inovação vs. segurança e bem-estar social. Empresas têm incentivos para iterar rapidamente; reguladores e sociedade civil exigem cautela e garantias antes da implantação em larga escala.
          </p>
        </div>
        <p style={S.p}>
          Outras tensões recorrentes: lucro vs. privacidade do utilizador; automatização vs. manutenção de emprego; personalização vs. autonomia do consumidor; eficiência operacional vs. responsabilidade democrática.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 520 320" width="100%" style={{ display: 'block' }}>
            {/* Central node */}
            <ellipse cx="260" cy="160" rx="60" ry="32" fill={C} opacity="0.9" />
            <text x="260" y="155" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">Sistema</text>
            <text x="260" y="170" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">de IA</text>

            {/* Developers - top left */}
            <line x1="206" y1="140" x2="130" y2="80" stroke={C} strokeWidth="1.5" strokeOpacity="0.5" />
            <ellipse cx="100" cy="68" rx="52" ry="24" fill="rgba(74,158,237,0.10)" stroke={C} strokeWidth="1.5" />
            <text x="100" y="63" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">Desenvol-</text>
            <text x="100" y="77" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">vedores</text>

            {/* Empresas - top right */}
            <line x1="314" y1="140" x2="390" y2="80" stroke={C} strokeWidth="1.5" strokeOpacity="0.5" />
            <ellipse cx="420" cy="68" rx="52" ry="24" fill="rgba(74,158,237,0.10)" stroke={C} strokeWidth="1.5" />
            <text x="420" y="63" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">Empresas</text>
            <text x="420" y="77" textAnchor="middle" fill="#94a3b8" fontSize="9">deploy &amp; funding</text>

            {/* Reguladores - left */}
            <line x1="200" y1="160" x2="80" y2="160" stroke={C} strokeWidth="1.5" strokeOpacity="0.5" />
            <ellipse cx="48" cy="160" rx="44" ry="24" fill="rgba(74,158,237,0.10)" stroke={C} strokeWidth="1.5" />
            <text x="48" y="155" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">Regula-</text>
            <text x="48" y="169" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">dores</text>

            {/* Utilizadores - bottom left */}
            <line x1="210" y1="182" x2="130" y2="240" stroke={C} strokeWidth="1.5" strokeOpacity="0.5" />
            <ellipse cx="100" cy="254" rx="52" ry="24" fill="rgba(74,158,237,0.10)" stroke={C} strokeWidth="1.5" />
            <text x="100" y="249" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">Utilizadores</text>
            <text x="100" y="263" textAnchor="middle" fill="#94a3b8" fontSize="9">finais</text>

            {/* Sociedade Civil - bottom right */}
            <line x1="310" y1="182" x2="390" y2="240" stroke={C} strokeWidth="1.5" strokeOpacity="0.5" />
            <ellipse cx="420" cy="254" rx="52" ry="24" fill="rgba(74,158,237,0.10)" stroke={C} strokeWidth="1.5" />
            <text x="420" y="249" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">Sociedade</text>
            <text x="420" y="263" textAnchor="middle" fill="#94a3b8" fontSize="9">Civil</text>

            {/* Reguladores right side */}
            <line x1="320" y1="160" x2="440" y2="160" stroke={C} strokeWidth="1.5" strokeOpacity="0.5" />
            <ellipse cx="472" cy="160" rx="44" ry="24" fill="rgba(74,158,237,0.10)" stroke={C} strokeWidth="1.5" />
            <text x="472" y="155" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">Academia</text>
            <text x="472" y="169" textAnchor="middle" fill="#94a3b8" fontSize="9">&amp; ONGs</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Frameworks Éticos</h2>
        <p style={S.p}>
          A filosofia moral oferece frameworks estabelecidas que permitem analisar sistematicamente dilemas éticos em IA. Cada abordagem ilumina dimensões diferentes do problema.
        </p>
        <p style={S.p}>
          <strong>Utilitarismo</strong> (Bentham, Mill): a ação moralmente correta é aquela que maximiza o bem-estar agregado. Em IA, traduz-se em cost-benefit analysis: um sistema de triagem médica que beneficia 99% pode ser aceite mesmo que prejudique 1%? O problema: pode justificar danos graves a minorias se o benefício agregado for suficientemente grande.
        </p>
        <p style={S.p}>
          <strong>Deontologia Kantiana</strong>: os imperativos categóricos exigem tratar pessoas sempre como fim em si mesmas, nunca apenas como meio. Em IA: direitos de privacidade são invioláveis independentemente do benefício social. Um sistema de vigilância de massa não pode ser justificado pela segurança agregada.
        </p>
        <p style={S.p}>
          <strong>Virtue Ethics</strong> (Aristóteles): o foco está no carácter do agente moral, não apenas nos atos individuais. Em IA: o que importa não é apenas se um sistema específico é ético, mas se a organização que o constrói tem cultura e incentivos que promovem decisões éticas de forma consistente.
        </p>
        <p style={S.p}>
          <strong>Contratualismo de Rawls</strong>: o "véu da ignorância" — princípio segundo o qual devemos desenhar sistemas como se não soubéssemos qual posição ocuparíamos na sociedade. Um sistema de crédito seria aceite se não soubéssemos se seríamos o beneficiário privilegiado ou o grupo excluído?
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 480 260" width="100%" style={{ display: 'block' }}>
            {/* Grid 2x2 */}
            {/* Top-left: Utilitarismo */}
            <rect x="10" y="10" width="220" height="110" rx="8" fill="rgba(74,158,237,0.10)" stroke={C} strokeWidth="1.5" />
            <text x="120" y="38" textAnchor="middle" fill={C} fontSize="12" fontWeight="700">Utilitarismo</text>
            <text x="120" y="58" textAnchor="middle" fill="#94a3b8" fontSize="10">Maximizar bem-estar</text>
            <text x="120" y="74" textAnchor="middle" fill="#94a3b8" fontSize="10">agregado</text>
            <text x="120" y="92" textAnchor="middle" fill="#64748b" fontSize="9">Bentham · Mill</text>
            <text x="120" y="108" textAnchor="middle" fill="#64748b" fontSize="9">→ Cost-benefit analysis</text>

            {/* Top-right: Deontologia */}
            <rect x="250" y="10" width="220" height="110" rx="8" fill="rgba(74,158,237,0.10)" stroke={C} strokeWidth="1.5" />
            <text x="360" y="38" textAnchor="middle" fill={C} fontSize="12" fontWeight="700">Deontologia</text>
            <text x="360" y="58" textAnchor="middle" fill="#94a3b8" fontSize="10">Imperativos categóricos</text>
            <text x="360" y="74" textAnchor="middle" fill="#94a3b8" fontSize="10">Direitos invioláveis</text>
            <text x="360" y="92" textAnchor="middle" fill="#64748b" fontSize="9">Kant</text>
            <text x="360" y="108" textAnchor="middle" fill="#64748b" fontSize="9">→ Privacidade como direito</text>

            {/* Bottom-left: Virtue Ethics */}
            <rect x="10" y="140" width="220" height="110" rx="8" fill="rgba(74,158,237,0.10)" stroke={C} strokeWidth="1.5" />
            <text x="120" y="168" textAnchor="middle" fill={C} fontSize="12" fontWeight="700">Virtue Ethics</text>
            <text x="120" y="188" textAnchor="middle" fill="#94a3b8" fontSize="10">Carácter do agente</text>
            <text x="120" y="204" textAnchor="middle" fill="#94a3b8" fontSize="10">Cultura organizacional</text>
            <text x="120" y="222" textAnchor="middle" fill="#64748b" fontSize="9">Aristóteles</text>
            <text x="120" y="238" textAnchor="middle" fill="#64748b" fontSize="9">→ Ética como prática</text>

            {/* Bottom-right: Contratualismo */}
            <rect x="250" y="140" width="220" height="110" rx="8" fill="rgba(74,158,237,0.10)" stroke={C} strokeWidth="1.5" />
            <text x="360" y="168" textAnchor="middle" fill={C} fontSize="12" fontWeight="700">Contratualismo</text>
            <text x="360" y="188" textAnchor="middle" fill="#94a3b8" fontSize="10">Véu da ignorância</text>
            <text x="360" y="204" textAnchor="middle" fill="#94a3b8" fontSize="10">Equidade estrutural</text>
            <text x="360" y="222" textAnchor="middle" fill="#64748b" fontSize="9">Rawls</text>
            <text x="360" y="238" textAnchor="middle" fill="#64748b" fontSize="9">→ Design imparcial</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Casos Históricos</h2>
        <p style={S.p}>
          O estudo de casos reais é indispensável para ancorar debates éticos abstratos em consequências concretas. Os casos abaixo são marcos na história da ética em IA.
        </p>

        <p style={S.p}>
          <strong>COMPAS (2016)</strong> — O sistema Correctional Offender Management Profiling for Alternative Sanctions era utilizado em tribunais americanos para prever reincidência criminal. A investigação da ProPublica revelou que indivíduos negros eram classificados como alto risco aproximadamente 2× mais frequentemente do que brancos quando não chegavam a reincidir. A empresa Northpointe respondeu argumentando equivalência de calibração: a pontuação prevê corretamente dentro de cada grupo racial. Este caso ilustra o teorema da impossibilidade de fairness: as duas métricas são matematicamente incompatíveis quando as prevalências base diferem.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Dado-chave COMPAS:</strong> Indivíduos negros que não reincidiram foram classificados como alto risco em 44,9% dos casos vs. 23,5% para brancos na mesma situação (ProPublica, 2016).
          </p>
        </div>
        <p style={S.p}>
          <strong>Microsoft Tay (2016)</strong> — Chatbot lançado no Twitter com aprendizagem online em tempo real. Em menos de 16 horas, utilizadores coordenados conseguiram manipular o modelo para produzir discurso racista e misógino. O sistema foi desativado. Lição fundamental: sistemas com aprendizagem em produção sem salvaguardas robustas são vulneráveis a ataques de envenenamento de dados coordenados.
        </p>
        <p style={S.p}>
          <strong>Amazon Recruiting Tool (2018)</strong> — Modelo de machine learning para triagem automática de CVs treinado em 10 anos de dados históricos de contratação, período em que a maioria dos contratados eram homens. O modelo aprendeu a penalizar CVs com palavras como "women's" (ex: "women's chess club") e a desvalorizar formação em faculdades femininas. Descontinuado em 2018 após descoberta interna.
        </p>
        <p style={S.p}>
          <strong>Clearview AI</strong> — Empresa americana construiu uma base de dados de mais de 10 mil milhões de fotografias scraped de redes sociais e internet pública para reconhecimento facial, sem consentimento dos sujeitos. A CNIL (França), ICO (Reino Unido) e Garante (Itália) multaram a empresa e declararam o tratamento ilegal ao abrigo do GDPR. O uso de Clearview foi banido na União Europeia.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Padrão recorrente:</strong> Nestes casos, os danos éticos emergem não de malícia intencional, mas de incentivos institucionais, ausência de processos de revisão ética e falhas no design de sistemas de feedback.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Dilemas de Design</h2>
        <p style={S.p}>
          Além de casos históricos, existem dilemas estruturais que surgem repetidamente no design de sistemas de IA. Não têm solução técnica — exigem escolhas morais explícitas.
        </p>
        <p style={S.p}>
          <strong>Problema do Bonde em Veículos Autónomos</strong> — Quando uma colisão é inevitável, como deve o AV escolher entre sacrificar o passageiro ou atropelar pedestres? O projeto MIT Moral Machine recolheu 39,6 milhões de decisões de 2,3 milhões de participantes em 233 países. Resultado: preferências variam significativamente por cultura — países com alta desigualdade económica tendem a proteger menos idosos; países individualistas tendem a proteger passageiros; países coletivistas tendem a proteger pedestres.
        </p>
        <p style={S.p}>
          <strong>Privacidade vs. Utilidade</strong> — Dados de saúde granulares permitem diagnósticos mais precisos e descoberta de doenças mais cedo, mas expõem informação altamente sensível. O modelo de negócio de muitas plataformas de saúde digital depende da monetização desses dados. Não existe solução técnica: privacy-preserving ML (federated learning, differential privacy) reduz mas não elimina o trade-off.
        </p>
        <p style={S.p}>
          <strong>Transparência vs. Propriedade Intelectual</strong> — Regulações como o GDPR e o EU AI Act exigem explicabilidade de decisões algorítmicas. Empresas argumentam que a explicação detalhada de modelos revela trade secrets e cria vulnerabilidades a ataques adversariais. O resultado é frequentemente explicabilidade superficial que não satisfaz nenhum dos objetivos.
        </p>
        <p style={S.p}>
          <strong>Automação vs. Emprego</strong> — Substituição de trabalho rotineiro por IA gera ganhos de produtividade agregados, mas distribui custos de forma altamente assimétrica: trabalhadores deslocados têm custos de transição elevados enquanto ganhos vão maioritariamente para proprietários de capital.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 480 200" width="100%" style={{ display: 'block' }}>
            {/* Road */}
            <rect x="0" y="90" width="480" height="30" fill="rgba(74,158,237,0.08)" />
            <line x1="0" y1="105" x2="480" y2="105" stroke="rgba(74,158,237,0.3)" strokeWidth="1" strokeDasharray="20,10" />

            {/* Fork */}
            <line x1="200" y1="60" x2="200" y2="90" stroke="#475569" strokeWidth="3" />
            <line x1="200" y1="60" x2="100" y2="20" stroke="#475569" strokeWidth="3" />
            <line x1="200" y1="60" x2="300" y2="20" stroke="#475569" strokeWidth="3" />

            {/* AV car */}
            <rect x="170" y="93" width="60" height="24" rx="4" fill={C} opacity="0.9" />
            <text x="200" y="109" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">AV</text>

            {/* Pedestrians path 1 */}
            <circle cx="100" cy="12" r="8" fill="#4a9eed" opacity="0.8" />
            <circle cx="85" cy="12" r="8" fill="#4a9eed" opacity="0.8" />
            <circle cx="115" cy="12" r="8" fill="#4a9eed" opacity="0.8" />
            <text x="100" y="35" textAnchor="middle" fill="#94a3b8" fontSize="9">3 pedestres</text>

            {/* Passenger path 2 */}
            <circle cx="300" cy="12" r="8" fill="#0284c7" opacity="0.8" />
            <text x="300" y="35" textAnchor="middle" fill="#94a3b8" fontSize="9">1 passageiro</text>

            {/* Question */}
            <text x="240" y="160" textAnchor="middle" fill="#64748b" fontSize="10">Moral Machine: 2.3M participantes · 233 países · sem consenso universal</text>
            <text x="240" y="178" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">→ Variação cultural significativa nas preferências morais</text>
          </svg>
        </div>
      </div>

    </div>
  );
}
