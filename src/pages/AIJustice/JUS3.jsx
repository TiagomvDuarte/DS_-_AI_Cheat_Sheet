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

export default function JUS3() {
  return (
    <div style={S.page}>
      <Link to="/ai-justice" style={S.back}>← AI & Justice</Link>
      <div style={S.badge}>MÓDULO {modules[2].num}</div>
      <h1 style={S.h1}>MÓDULO {modules[2].title}</h1>
      <p style={S.sub}>MÓDULO {modules[2].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Ferramentas de Avaliação de Risco</h2>
        <p style={S.p}>
          As ferramentas actuariais na justiça criminal têm uma história longa. Ernest Burgess desenvolveu as primeiras na década de 1920 para o sistema penitenciário do Illinois, com o objectivo de prever quais os reclusos que beneficiariam de liberdade condicional. A diferença moderna é a escala de dados disponíveis e a sofisticação dos métodos estatísticos e de machine learning.
        </p>
        <p style={S.p}>
          O <strong>COMPAS</strong> (Correctional Offender Management Profiling for Alternative Sanctions) é a ferramenta mais conhecida e mais estudada. Produz 137 perguntas e gera scores de 1 a 10 para risco geral, risco de violência e probabilidade de reincidência. É propriedade da Northpointe (agora Equivant) e é usado em Wisconsin, Florida, e vários outros estados norte-americanos.
        </p>
        <p style={S.p}>
          A <strong>PSA</strong> (Public Safety Assessment) da Arnold Foundation usa apenas 9 variáveis retiradas do registo criminal — sem dados socioeconómicos como emprego, educação ou situação habitacional. É de código aberto e gratuita. Nova Jersey adoptou-a como peça central da reforma do sistema de bail em 2017, eliminando o bail monetário.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 700 220" width="100%" style={{ display: 'block' }}>
            <text x="350" y="22" fill="#fb923c" fontSize="11" fontWeight="600" textAnchor="middle">COMPARAÇÃO DE FERRAMENTAS DE AVALIAÇÃO DE RISCO</text>
            {/* Header */}
            <rect x="20" y="35" width="660" height="28" rx="4" fill="rgba(249,115,22,0.06)" />
            <text x="100" y="53" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle">DIMENSÃO</text>
            <text x="260" y="53" fill={C} fontSize="10" fontWeight="700" textAnchor="middle">COMPAS</text>
            <text x="420" y="53" fill={C} fontSize="10" fontWeight="700" textAnchor="middle">PSA</text>
            <text x="580" y="53" fill={C} fontSize="10" fontWeight="700" textAnchor="middle">LSI-R</text>
            {/* Rows */}
            {[
              ['Variáveis', '137 perguntas', '9 (registo criminal)', '54 itens, entrevista'],
              ['Transparência', 'Proprietário / opaco', 'Código aberto', 'Documentado'],
              ['Custo', 'Comercial', 'Gratuito', 'Licença paga'],
              ['Variáveis socioecon.', 'Sim (proxies raça)', 'Não', 'Sim'],
              ['Validação', 'Limitada / contestada', 'Ampla', 'Internacional'],
            ].map(([dim, c1, c2, c3], i) => (
              <g key={i}>
                <rect x="20" y={68 + i * 28} width="660" height="27" rx="2"
                  fill={i % 2 === 0 ? 'rgba(249,115,22,0.09)' : 'rgba(249,115,22,0.05)'} />
                <text x="100" y={85 + i * 28} fill="#fbbf24" fontSize="9" textAnchor="middle">{dim}</text>
                <text x="260" y={85 + i * 28} fill="#fb923c" fontSize="9" textAnchor="middle">{c1}</text>
                <text x="420" y={85 + i * 28} fill="#fb923c" fontSize="9" textAnchor="middle">{c2}</text>
                <text x="580" y={85 + i * 28} fill="#fb923c" fontSize="9" textAnchor="middle">{c3}</text>
              </g>
            ))}
            <line x1="180" y1="35" x2="180" y2="208" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="340" y1="35" x2="340" y2="208" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="500" y1="35" x2="500" y2="208" stroke="var(--card-border)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. O Caso COMPAS — Análise Detalhada</h2>
        <p style={S.p}>
          Em 2016, a ProPublica (Angwin et al.) publicou uma análise dos resultados do COMPAS para 7.214 arguidos do condado de Broward, Florida. Os resultados tornaram-se o epicentro de um debate académico e político que continua até hoje.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.4rem' }}><strong>Resultados ProPublica:</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Arguidos negros classificados como alto risco que <em>não</em> reincidiram: 44,9%. Arguidos brancos na mesma situação: 23,5%. Arguidos brancos classificados como baixo risco que <em>reincidiram</em>: 47,7%. Arguidos negros na mesma situação: 28%. Os false positive rates são dramaticamente diferentes por raça.
          </p>
        </div>
        <p style={S.p}>
          A Northpointe respondeu com um argumento técnico válido: o COMPAS está <em>calibrado</em>. Isso significa que, entre todos os arguidos que recebem score 7, a probabilidade de reincidência é aproximadamente igual para negros e brancos. Esta propriedade, chamada predictive parity ou calibração, é genuinamente cumprida pelo COMPAS.
        </p>
        <p style={S.p}>
          Alexandra Chouldechova (2017) demonstrou matematicamente que esta não é uma contradição — é uma <strong>impossibilidade provada</strong>. Quando as taxas de prevalência (neste caso, taxas de reincidência) diferem entre grupos — o que acontece nos EUA como consequência de décadas de discriminação no sistema de justiça — é matematicamente impossível satisfazer simultaneamente calibração e paridade de false positive rates. Há sempre um trade-off.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: '0.4rem' }}><strong>Dressel &amp; Farid (2018) — o resultado mais perturbador</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Voluntários humanos sem qualquer treino especializado, a quem foi fornecido apenas um parágrafo descrevendo o arguido, atingiram precisão equivalente à do COMPAS (65% vs. 65,2%). Um modelo de apenas 2 variáveis — idade e número de crimes anteriores — obteve performance similar. O COMPAS, com os seus 137 itens e metodologia proprietária, não demonstra mais valor preditivo do que métodos muito mais simples.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Fairness — Impossibilidade e Trade-offs</h2>
        <p style={S.p}>
          O debate COMPAS cristalizou um problema fundamental da ética algorítmica: existem múltiplas definições de fairness matematicamente incompatíveis entre si. A escolha de qual usar não é uma decisão técnica — é uma decisão de valores com consequências distribucionais.
        </p>
        <p style={S.p}>
          <strong>Demographic Parity:</strong> a taxa de classificação como alto risco deve ser igual entre grupos demográficos. O COMPAS não satisfaz esta propriedade — negros recebem scores mais elevados a taxas mais altas.
        </p>
        <p style={S.p}>
          <strong>Calibração (Predictive Parity):</strong> entre pessoas com o mesmo score, a probabilidade real de reincidência deve ser igual entre grupos. O COMPAS satisfaz esta propriedade — escolha da Northpointe para justificar o sistema.
        </p>
        <p style={S.p}>
          <strong>Equalized Odds:</strong> tanto os false positive rates como os true positive rates devem ser iguais entre grupos. O COMPAS falha nos false positive rates — como a ProPublica documentou.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 680 200" width="100%" style={{ display: 'block' }}>
            <text x="340" y="18" fill="#fb923c" fontSize="11" fontWeight="600" textAnchor="middle">MATRIZES DE CONFUSÃO — COMPAS POR GRUPO RACIAL</text>
            {/* Black defendants matrix */}
            <text x="175" y="38" fill={C} fontSize="10" fontWeight="700" textAnchor="middle">ARGUIDOS NEGROS</text>
            <rect x="75" y="45" width="90" height="35" rx="4" fill="#1a2a1a" stroke="#f97316" strokeWidth="1.5" />
            <text x="120" y="60" fill="#f97316" fontSize="9" textAnchor="middle">VP: Alto risco</text>
            <text x="120" y="72" fill="#f97316" fontSize="9" textAnchor="middle">reincidiu</text>
            <rect x="170" y="45" width="90" height="35" rx="4" fill="#2d0a0a" stroke={C} strokeWidth="2" />
            <text x="215" y="60" fill={C} fontSize="9" textAnchor="middle" fontWeight="700">FP: Alto risco</text>
            <text x="215" y="72" fill={C} fontSize="9" textAnchor="middle">NÃO reincidiu</text>
            <rect x="75" y="85" width="90" height="35" rx="4" fill="#2d0a0a" stroke={C} strokeWidth="1.5" />
            <text x="120" y="100" fill={C} fontSize="9" textAnchor="middle">FN: Baixo risco</text>
            <text x="120" y="112" fill={C} fontSize="9" textAnchor="middle">reincidiu</text>
            <rect x="170" y="85" width="90" height="35" rx="4" fill="#1a2a1a" stroke="#f97316" strokeWidth="1.5" />
            <text x="215" y="100" fill="#f97316" fontSize="9" textAnchor="middle">VN: Baixo risco</text>
            <text x="215" y="112" fill="#f97316" fontSize="9" textAnchor="middle">não reincidiu</text>
            <text x="175" y="138" fill="#f97316" fontSize="9" textAnchor="middle" fontWeight="700">FPR = 44.9%</text>

            {/* White defendants matrix */}
            <text x="500" y="38" fill={C} fontSize="10" fontWeight="700" textAnchor="middle">ARGUIDOS BRANCOS</text>
            <rect x="400" y="45" width="90" height="35" rx="4" fill="#1a2a1a" stroke="#f97316" strokeWidth="1.5" />
            <text x="445" y="60" fill="#f97316" fontSize="9" textAnchor="middle">VP: Alto risco</text>
            <text x="445" y="72" fill="#f97316" fontSize="9" textAnchor="middle">reincidiu</text>
            <rect x="495" y="45" width="90" height="35" rx="4" fill="#2d0a0a" stroke="#f97316" strokeWidth="1.5" />
            <text x="540" y="60" fill="#f97316" fontSize="9" textAnchor="middle">FP: Alto risco</text>
            <text x="540" y="72" fill="#f97316" fontSize="9" textAnchor="middle">NÃO reincidiu</text>
            <rect x="400" y="85" width="90" height="35" rx="4" fill="#2d0a0a" stroke={C} strokeWidth="1.5" />
            <text x="445" y="100" fill={C} fontSize="9" textAnchor="middle">FN: Baixo risco</text>
            <text x="445" y="112" fill={C} fontSize="9" textAnchor="middle">reincidiu</text>
            <rect x="495" y="85" width="90" height="35" rx="4" fill="#1a2a1a" stroke="#f97316" strokeWidth="1.5" />
            <text x="540" y="100" fill="#f97316" fontSize="9" textAnchor="middle">VN: Baixo risco</text>
            <text x="540" y="112" fill="#f97316" fontSize="9" textAnchor="middle">não reincidiu</text>
            <text x="500" y="138" fill="#f97316" fontSize="9" textAnchor="middle" fontWeight="700">FPR = 23.5%</text>

            <text x="340" y="168" fill="#fb923c" fontSize="9" textAnchor="middle">Fonte: ProPublica, Broward County FL, 2016 — FPR quase 2× mais alto para arguidos negros</text>
          </svg>
        </div>
        <p style={S.p}>
          O <strong>Teorema de Impossibilidade</strong> (Kleinberg, Chouldechova, 2016/2017) demonstra que quando a prevalência do resultado difere entre grupos — e nos EUA a taxa de reincidência registada difere por raça, em grande parte como artefacto de discriminação histórica no sistema de justiça — é impossível satisfazer simultaneamente calibração e equalized odds. A escolha de qual métrica priorizar é uma decisão política, não técnica.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Reforma e Alternativas</h2>
        <p style={S.p}>
          A reforma mais radical e documentada ocorreu em <strong>Nova Jersey em 2017</strong>. O estado eliminou o bail monetário e adoptou a PSA com supervisão judicial obrigatória. Os resultados foram significativos: a população prisional pré-julgamento caiu 44% nos primeiros anos, sem aumento detectável de crimes cometidos por arguidos libertos enquanto aguardam julgamento.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: '0.4rem' }}><strong>Kentucky — HB 463 (2011)</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            A legislação do Kentucky mandatou o uso de ferramentas actuariais padronizadas em todo o estado. Os estudos de avaliação revelaram reduções nas disparidades de bail entre grupos raciais, embora persistam debates sobre se as ferramentas introduzem novas formas de bias estrutural.
          </p>
        </div>
        <p style={S.p}>
          A crítica abolicionista, articulada com rigor por Sandra Mayson (2019), vai mais fundo: qualquer ferramenta preditiva perpetua necessariamente as desigualdades do passado. Se o modelo aprende com dados históricos de um sistema racialmente discriminatório, o seu output codifica essa discriminação — independentemente da sofisticação técnica. A pergunta é: "risco de quê, para quem, medido como?"
        </p>
        <p style={S.p}>
          As alternativas propostas incluem: entrevistas estruturadas conduzidas por defensores públicos treinados; programas de diversion pré-julgamento que desviam arguidos de baixo risco para apoio comunitário; e a eliminação completa do bail monetário sem substituição por nenhuma ferramenta de risco — apostando na supervisão individualizada em vez de classificação algorítmica.
        </p>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Ferramentas de Avaliação de Risco</strong> — PSA (Public Safety Assessment), Ohio Risk Assessment System (ORAS) e LSI-R são instrumentos de avaliação de risco usados em bail, sentencing e parole; combinam factores criminais e socioeconómicos em score de risco — calibração e validação são exigidas mas raramente actualizadas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>O Caso COMPAS — Análise Detalhada</strong> — COMPAS (Northpointe) prediz risco de reincidência em 2 anos; ProPublica (2016) demonstrou que a ferramenta classificava erroneamente negros como alto risco 2× mais que brancos; Northpointe contra-argumentou que o modelo era calibrado (igual precisão por grupo) — impossibilidade matemática de Chouldechova (2017).</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Fairness — Impossibilidade e Trade-offs</strong> — Chouldechova (2017) e Kleinberg et al. (2016) provaram matematicamente que calibração (igualdade de probabilidade calibrada) e equalized odds (igualdade de FPR e FNR) são mutuamente exclusivas quando as taxas de base diferem entre grupos — não existe classificador "justo" para todas as definições simultaneamente.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Reforma e Alternativas</strong> — alternativas ao encarceramento pré-julgamento (programas de supervisão comunitária, reminder apps para comparência) mostram resultados equivalentes de comparência a tribunal com menor impacto disruptivo; alguns estados proibiram algoritmos em sentencing (Nova Iorque, 2021) enquanto outros exigem transparência obrigatória.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
