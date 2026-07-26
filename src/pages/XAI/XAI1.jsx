import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#4a9eed';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

export default function XAI1() {
  return (
    <div style={S.page}>
      <Link to="/xai" style={S.back}><ArrowLeft size={16} /> Voltar a Explainable AI</Link>

      <div style={S.tag}>MÓDULO 01</div>
      <h1 style={S.h1}>Introdução ao XAI</h1>

      {/* ── Secção 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Porquê Explicabilidade?</h2>
        <p style={S.p}>
          Sistemas de aprendizagem automática são hoje utilizados para tomar ou apoiar decisões com consequências directas
          na vida das pessoas: concessão de crédito, selecção de candidatos a emprego, diagnóstico médico, determinação de
          penas judiciais. Quando esses sistemas são caixas-negras opacas, surgem problemas fundamentais de responsabilização,
          equidade e controlo.
        </p>
        <p style={S.p}>
          O caso histórico mais citado é o sistema <strong>COMPAS</strong> (Correctional Offender Management Profiling for
          Alternative Sanctions), usado em tribunais norte-americanos para estimar a probabilidade de reincidência criminal.
          Uma investigação da ProPublica em 2016 mostrou que o modelo rotulava indivíduos negros como de alto risco com o
          dobro da frequência dos brancos, mesmo quando estes acabavam por não reincidir. O sistema nunca tinha sido auditado
          internamente — a sua lógica permanecia completamente opaca.
        </p>

        <div style={S.highlight}>
          <strong>Três domínios críticos onde a falta de explicabilidade causa dano real:</strong>
          <ul style={{ margin: '0.6rem 0 0', paddingLeft: '1.4rem', lineHeight: 2.1 }}>
            <li>
              <strong>Crédito bancário</strong> — um modelo de scoring recusa um empréstimo sem fornecer motivos.
              O cliente não pode contestar, corrigir dados errados nem perceber o que melhorar.
            </li>
            <li>
              <strong>Medicina</strong> — um sistema de triagem hospitalar desprioritiza um doente. Sem explicação,
              o médico não consegue avaliar se a decisão é clinicamente válida ou resulta de um artefacto dos dados de treino.
            </li>
            <li>
              <strong>Justiça criminal</strong> — juízes condicionam sentenças com base em scores opacos de risco,
              transferindo responsabilidade para algoritmos que ninguém compreende nem pode questionar.
            </li>
          </ul>
        </div>

        <p style={S.p}>
          A resposta regulatória foi gradual mas crescente. O <strong>RGPD (Regulamento Geral sobre a Protecção de Dados)</strong>,
          em vigor desde 2018, estabelece no Artigo 22.º o direito de não ficar sujeito a decisões exclusivamente automatizadas
          com efeitos significativos, bem como o direito a obter explicação e a contestar a decisão. Complementarmente,
          o <strong>AI Act da União Europeia</strong> (aprovado em 2024) classifica sistemas de IA em quatro categorias de risco
          e impõe requisitos de transparência e auditabilidade aos sistemas de "alto risco".
        </p>

        {/* SVG: espectro de risco */}
        <div style={S.diagram}>
          <p style={{ margin: '0 0 1rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
            Espectro de Risco — EU AI Act
          </p>
          <svg viewBox="0 0 780 200" width="100%" style={{ display: 'block' }}>
            {/* Coluna Baixo Risco */}
            <rect x="10" y="30" width="230" height="140" rx="10" fill="rgba(74,158,237,0.10)" stroke="#e0f2fe" strokeWidth="1.5" />
            <text x="125" y="60" textAnchor="middle" fontWeight="700" fontSize="13" fill="#0369a1">Risco Limitado</text>
            <text x="125" y="82" textAnchor="middle" fontSize="11" fill="#0369a1">Obrigações de transparência</text>
            <text x="125" y="102" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Recomendação Spotify</text>
            <text x="125" y="120" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Chatbots de apoio</text>
            <text x="125" y="138" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Filtros de spam</text>
            <text x="125" y="158" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Reconhecimento de imagem</text>

            {/* Coluna Alto Risco */}
            <rect x="275" y="30" width="230" height="140" rx="10" fill="rgba(74,158,237,0.10)" stroke="#7dd3fc" strokeWidth="1.5" />
            <text x="390" y="60" textAnchor="middle" fontWeight="700" fontSize="13" fill="#075985">Alto Risco</text>
            <text x="390" y="80" textAnchor="middle" fontSize="11" fill="#075985">Auditabilidade obrigatória</text>
            <text x="390" y="100" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Scoring de crédito</text>
            <text x="390" y="118" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Recrutamento automatizado</text>
            <text x="390" y="136" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Diagnóstico médico</text>
            <text x="390" y="154" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Triagem judicial</text>

            {/* Coluna Risco Inaceitável */}
            <rect x="540" y="30" width="230" height="140" rx="10" fill="rgba(74,158,237,0.10)" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="655" y="60" textAnchor="middle" fontWeight="700" fontSize="13" fill="#075985">Risco Inaceitável</text>
            <text x="655" y="80" textAnchor="middle" fontSize="11" fill="#075985">Proibido pela lei</text>
            <text x="655" y="100" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Pontuação social (social scoring)</text>
            <text x="655" y="118" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Manipulação subliminar</text>
            <text x="655" y="136" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Reconhecimento em tempo real</text>
            <text x="655" y="154" textAnchor="middle" fontSize="11" fill="var(--text-primary)">em espaços públicos</text>

            {/* Seta de gradiente de risco */}
            <defs>
              <marker id="arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)" />
              </marker>
            </defs>
            <line x1="30" y1="185" x2="750" y2="185" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr1)" />
            <text x="30" y="198" fontSize="10" fill="var(--text-secondary)">Risco crescente →</text>
          </svg>
        </div>

        <p style={S.p}>
          O <strong>EU AI Act</strong> introduz ainda o conceito de <em>high-risk AI systems</em> — sistemas utilizados
          em infraestruturas críticas, educação, emprego, serviços essenciais, aplicação da lei, migração e administração
          da justiça. Para estes sistemas, são obrigatórios: documentação técnica detalhada, registos de auditoria
          automáticos, transparência suficiente para que o utilizador possa interpretar as saídas, supervisão humana
          efectiva, e precisão, robustez e cibersegurança adequadas. A XAI é instrumental para cumprir os requisitos
          de transparência e supervisão humana.
        </p>
        <div style={S.note}>
          O RGPD Art. 22.º e o EU AI Act não exigem que um modelo seja interpretável por si mesmo — exigem que seja
          possível fornecer ao utilizador uma explicação significativa. XAI é a disciplina que torna isso possível.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Taxonomia XAI</h2>
        <p style={S.p}>
          O campo XAI organiza-se segundo eixos ortogonais que determinam o âmbito e o momento das explicações.
          A distinção mais fundamental é entre <strong>ante-hoc</strong> (modelos intrinsecamente interpretáveis)
          e <strong>post-hoc</strong> (métodos aplicados a um modelo já treinado), cruzada com a dimensão
          <strong> local</strong> (explica uma predição individual) vs. <strong>global</strong> (explica o comportamento geral do modelo).
        </p>

        {/* SVG: matriz 2x2 */}
        <div style={S.diagram}>
          <p style={{ margin: '0 0 1rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
            Matriz de Taxonomia XAI — Ante-hoc / Post-hoc × Local / Global
          </p>
          <svg viewBox="0 0 700 340" width="100%" style={{ display: 'block' }}>
            {/* Eixos */}
            <line x1="20" y1="170" x2="680" y2="170" stroke="var(--card-border)" strokeWidth="1.5" />
            <line x1="350" y1="20" x2="350" y2="320" stroke="var(--card-border)" strokeWidth="1.5" />

            {/* Rótulos de eixo */}
            <text x="185" y="16" textAnchor="middle" fontWeight="700" fontSize="12" fill="#4a9eed">ANTE-HOC</text>
            <text x="520" y="16" textAnchor="middle" fontWeight="700" fontSize="12" fill="#4a9eed">POST-HOC</text>
            <text x="14" y="100" textAnchor="middle" fontWeight="700" fontSize="12" fill="#4a9eed" transform="rotate(-90, 14, 100)">LOCAL</text>
            <text x="14" y="260" textAnchor="middle" fontWeight="700" fontSize="12" fill="#4a9eed" transform="rotate(-90, 14, 260)">GLOBAL</text>

            {/* Quadrante: Ante-hoc / Local */}
            <rect x="30" y="30" width="300" height="130" rx="8" fill="rgba(74,158,237,0.10)" stroke="rgba(74,158,237,0.10)" strokeWidth="1" />
            <text x="180" y="58" textAnchor="middle" fontWeight="600" fontSize="12" fill="#4a9eed">Ante-hoc · Local</text>
            <text x="180" y="80" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Caminho folha numa árvore de decisão</text>
            <text x="180" y="98" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Regra SE…ENTÃO para uma instância</text>
            <text x="180" y="116" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Coeficiente de regressão local</text>
            <text x="180" y="134" textAnchor="middle" fontSize="10" fill="var(--text-secondary)" fontStyle="italic">Exemplos: Decision Tree leaf path</text>

            {/* Quadrante: Post-hoc / Local */}
            <rect x="360" y="30" width="300" height="130" rx="8" fill="rgba(74,158,237,0.07)" stroke="rgba(74,158,237,0.3)" strokeWidth="1" />
            <text x="510" y="58" textAnchor="middle" fontWeight="600" fontSize="12" fill="#4a9eed">Post-hoc · Local</text>
            <text x="510" y="80" textAnchor="middle" fontSize="11" fill="var(--text-primary)">LIME (aprox. linear local)</text>
            <text x="510" y="98" textAnchor="middle" fontSize="11" fill="var(--text-primary)">SHAP force plot</text>
            <text x="510" y="116" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Counterfactual explanations</text>
            <text x="510" y="134" textAnchor="middle" fontSize="10" fill="var(--text-secondary)" fontStyle="italic">Explicam uma predição individual</text>

            {/* Quadrante: Ante-hoc / Global */}
            <rect x="30" y="185" width="300" height="120" rx="8" fill="rgba(74,158,237,0.07)" stroke="rgba(74,158,237,0.3)" strokeWidth="1" />
            <text x="180" y="210" textAnchor="middle" fontWeight="600" fontSize="12" fill="#0369a1">Ante-hoc · Global</text>
            <text x="180" y="232" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Coeficientes de regressão linear</text>
            <text x="180" y="250" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Estrutura completa da árvore</text>
            <text x="180" y="268" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Funções suaves de um GAM</text>
            <text x="180" y="286" textAnchor="middle" fontSize="10" fill="var(--text-secondary)" fontStyle="italic">Descrevem o modelo inteiro</text>

            {/* Quadrante: Post-hoc / Global */}
            <rect x="360" y="185" width="300" height="120" rx="8" fill="rgba(2,132,199,0.07)" stroke="rgba(2,132,199,0.3)" strokeWidth="1" />
            <text x="510" y="210" textAnchor="middle" fontWeight="600" fontSize="12" fill="#075985">Post-hoc · Global</text>
            <text x="510" y="232" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Partial Dependence Plots (PDP)</text>
            <text x="510" y="250" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Permutation Feature Importance</text>
            <text x="510" y="268" textAnchor="middle" fontSize="11" fill="var(--text-primary)">SHAP summary plot</text>
            <text x="510" y="286" textAnchor="middle" fontSize="10" fill="var(--text-secondary)" fontStyle="italic">Comportamento médio do modelo</text>
          </svg>
        </div>

        <p style={S.p}>
          Uma segunda dimensão importante é a dependência do modelo. Técnicas <strong>model-agnostic</strong> (como LIME e
          SHAP Kernel) funcionam como uma caixa-preta exterior: observam inputs e outputs sem aceder à estrutura interna.
          Técnicas <strong>model-specific</strong> (como TreeSHAP ou Grad-CAM) exploram a arquitectura interna do modelo para
          calcular explicações mais eficientes e frequentemente mais fiéis. Por exemplo, o TreeSHAP calcula valores de
          Shapley exactos para árvores de decisão e ensembles em tempo polinomial, algo impossível para um método
          model-agnostic que apenas observa as predições. O Grad-CAM, por sua vez, usa os gradientes das camadas
          convolucionais para produzir mapas de saliência que destacam as regiões de imagem mais relevantes para
          a classificação — impossível sem acesso à arquitectura da rede.
        </p>
        <div style={S.highlight}>
          <strong>Model-agnostic vs. Model-specific — compromissos principais:</strong>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.4rem', lineHeight: 2 }}>
            <li><strong>Model-agnostic</strong>: flexíveis, funcionam com qualquer modelo, mas mais lentos e aproximados. Aplicam-se a modelos proprietários ou de terceiros sem acesso ao código.</li>
            <li><strong>Model-specific</strong>: mais eficientes e fiéis, mas limitados a arquitecturas concretas. TreeSHAP é O(TLD) para ensembles de árvores; Grad-CAM requer acesso aos gradientes da rede.</li>
          </ul>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Black Box vs. White Box</h2>
        <p style={S.p}>
          A interpretabilidade não é um conceito binário — existe um <strong>contínuo</strong> que vai desde modelos
          completamente transparentes até sistemas praticamente opacos. Esta dimensão está correlacionada (mas não
          perfeitamente) com a capacidade preditiva: modelos mais complexos tendem a ter melhor desempenho, mas à
          custa de interpretabilidade.
        </p>

        {/* SVG: espectro interpretabilidade */}
        <div style={S.diagram}>
          <p style={{ margin: '0 0 1rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
            Espectro de Interpretabilidade vs. Capacidade Preditiva
          </p>
          <svg viewBox="0 0 740 215" width="100%" style={{ display: 'block' }}>
            {/* Gradiente de fundo */}
            <defs>
              <linearGradient id="specGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(74,158,237,0.10)" />
                <stop offset="50%" stopColor="rgba(74,158,237,0.10)" />
                <stop offset="100%" stopColor="rgba(74,158,237,0.10)" />
              </linearGradient>
            </defs>
            <rect x="30" y="40" width="680" height="50" rx="8" fill="url(#specGrad)" />

            {/* Rótulos do espectro */}
            <text x="30" y="32" fontSize="11" fontWeight="700" fill="#0369a1">Totalmente Interpretável</text>
            <text x="620" y="32" fontSize="11" fontWeight="700" fill="#075985">Opaco</text>

            {/* Modelos no espectro */}
            <line x1="80" y1="90" x2="80" y2="120" stroke="var(--text-secondary)" strokeWidth="1.5" />
            <text x="80" y="135" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Regressão</text>
            <text x="80" y="148" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Linear</text>

            <line x1="180" y1="90" x2="180" y2="120" stroke="var(--text-secondary)" strokeWidth="1.5" />
            <text x="180" y="135" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Árvore</text>
            <text x="180" y="148" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">&lt; 5 nós</text>

            <line x1="320" y1="90" x2="320" y2="120" stroke="var(--text-secondary)" strokeWidth="1.5" />
            <text x="320" y="135" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">GAM</text>

            <line x1="460" y1="90" x2="460" y2="120" stroke="var(--text-secondary)" strokeWidth="1.5" />
            <text x="460" y="135" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Random</text>
            <text x="460" y="148" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Forest</text>

            <line x1="570" y1="90" x2="570" y2="120" stroke="var(--text-secondary)" strokeWidth="1.5" />
            <text x="570" y="135" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Ensemble</text>
            <text x="570" y="148" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">1000 árvores</text>

            <line x1="670" y1="90" x2="670" y2="120" stroke="var(--text-secondary)" strokeWidth="1.5" />
            <text x="670" y="135" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Deep NN</text>
            <text x="670" y="148" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">/ LLM</text>

            {/* Setas de tradeoff */}
            <defs>
              <marker id="arrL" markerWidth="7" markerHeight="7" refX="0" refY="3" orient="auto">
                <path d="M7,0 L7,6 L0,3 z" fill="#4a9eed" />
              </marker>
              <marker id="arrR" markerWidth="7" markerHeight="7" refX="7" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#4a9eed" />
              </marker>
            </defs>
            <line x1="200" y1="185" x2="640" y2="185" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrR)" />
            <text x="420" y="200" textAnchor="middle" fontSize="10" fill="#4a9eed">Capacidade preditiva crescente →</text>
            <line x1="600" y1="165" x2="160" y2="165" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrR)" />
            <text x="380" y="160" textAnchor="middle" fontSize="10" fill="#4a9eed">← Interpretabilidade crescente</text>
          </svg>
        </div>

        <p style={S.p}>
          Este <em>trade-off</em> não é absoluto: em muitos problemas reais, modelos mais simples atingem desempenho comparável
          a modelos complexos, especialmente quando os dados são limitados ou o sinal é fraco. A decisão de usar um modelo
          opaco deve ser deliberada e justificada, não o caminho por omissão.
        </p>
        <p style={S.p}>
          É importante distinguir <strong>interpretabilidade</strong> de <strong>explicabilidade</strong>. Um modelo
          é interpretável quando a sua lógica interna pode ser directamente inspeccionada e compreendida (regressão,
          árvore pequena). Um modelo é explicável quando, mesmo sem acesso directo à sua lógica, é possível gerar
          descrições do seu comportamento através de métodos externos. Todos os modelos interpretáveis são explicáveis,
          mas o inverso não é verdadeiro: uma rede neural profunda pode ser explicada (imperfeitamente) via SHAP
          sem ser interpretável.
        </p>
        <p style={S.p}>
          A escolha entre um modelo branco e um modelo opaco deve considerar: (1) qual é a diferença real de
          desempenho no problema concreto; (2) quais os requisitos regulatórios aplicáveis; (3) qual a audiência
          das explicações; (4) qual o custo de uma decisão incorrecta. Em muitos problemas tabulares com dados
          suficientes, um EBM ou um random forest explicado via TreeSHAP atingem desempenho equivalente a redes
          neurais profundas, com muito maior transparência.
        </p>
        <div style={S.note}>
          Cynthia Rudin (Duke) argumenta que em domínios de alto risco deve-se usar sempre o modelo interpretável mais
          performante disponível, em vez de aplicar XAI post-hoc a um modelo opaco — as explicações post-hoc são sempre
          aproximações, nunca a verdade do modelo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Modelos Intrinsecamente Interpretáveis</h2>
        <p style={S.p}>
          Determinados modelos são interpretáveis por design — a explicação está embutida na sua estrutura. Não requerem
          métodos adicionais: basta inspecionar os parâmetros ou a estrutura para compreender como chegaram a uma decisão.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>Tipo de Explicação</th>
              <th style={S.th}>Limitação Principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Regressão Linear</strong></td>
              <td style={S.td}>Coeficientes = efeito marginal de cada feature por unidade</td>
              <td style={S.td}>Assume linearidade; sensível a multicolinearidade</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Regressão Logística</strong></td>
              <td style={S.td}>Log-odds: <InlineMath math={"\\log\\frac{p}{1-p} = \\beta_0 + \\sum_j \\beta_j x_j"} /></td>
              <td style={S.td}>Fronteira de decisão linear; não captura não-linearidades</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Árvore de Decisão</strong></td>
              <td style={S.td}>Caminho raiz → folha = regra de decisão legível</td>
              <td style={S.td}>Instável; desempenho inferior a ensembles com profundidade elevada</td>
            </tr>
            <tr>
              <td style={S.td}><strong>GAM</strong></td>
              <td style={S.td}>Funções suaves por feature, aditivas e visualizáveis</td>
              <td style={S.td}>Não captura interacções de ordem superior sem extensão explícita</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Sistemas de Regras</strong></td>
              <td style={S.td}>Condições SE…ENTÃO directamente legíveis</td>
              <td style={S.td}>Difíceis de optimizar; escalabilidade limitada a espaços pequenos</td>
            </tr>
          </tbody>
        </table>

        <p style={S.p}>
          Os <strong>Generalized Additive Models (GAMs)</strong> representam um equilíbrio particularmente interessante.
          Generalizam a regressão linear ao substituir os termos lineares <InlineMath math={"\\beta_j x_j"} /> por funções
          suaves arbitrárias <InlineMath math={"f_j(x_j)"} />, mantendo a estrutura aditiva que permite interpretar a
          contribuição de cada feature de forma independente:
        </p>

        <div style={S.math}>
          <BlockMath math={"g\\bigl(\\mathbb{E}[y]\\bigr) = \\beta_0 + f_1(x_1) + f_2(x_2) + \\cdots + f_p(x_p)"} />
        </div>

        <p style={S.p}>
          Onde <InlineMath math={"g(\\cdot)"} /> é a função de ligação (identidade para regressão, logit para classificação)
          e cada <InlineMath math={"f_j"} /> é uma spline ou função suave aprendida dos dados.
          Variantes como <strong>GA²M</strong> (GA com interacções de segunda ordem) e o <strong>EBM</strong> (Explainable
          Boosting Machine) da Microsoft InterpretML adicionam termos de interacção pairwise mantendo interpretabilidade visual.
        </p>

        <p style={S.p}>
          A <strong>regressão logística</strong> merece atenção especial em classificação binária. Os coeficientes
          operam na escala de log-odds, pelo que a interpretação directa requer transformação. Para uma feature
          <InlineMath math={"x_j"} />, o coeficiente <InlineMath math={"\\beta_j"} /> representa a variação no
          log-odds por unidade de <InlineMath math={"x_j"} />, mantendo as restantes constantes. Em termos de odds
          ratio: <InlineMath math={"OR_j = e^{\\beta_j}"} />. Um OR de 2 significa que cada unidade adicional
          de <InlineMath math={"x_j"} /> duplica as probabilidades relativas de <InlineMath math={"y=1"} />.
        </p>
        <p style={S.p}>
          As <strong>árvores de decisão</strong> permitem extrair regras de decisão directamente legíveis em linguagem
          natural. O caminho desde a raiz até uma folha constitui uma conjunção de condições: por exemplo,
          "SE rendimento &gt; 30 000 E antiguidade &gt; 2 anos E sem incumprimentos ENTÃO crédito aprovado com
          probabilidade 0,87". Esta forma é directamente auditável por qualquer parte interessada, incluindo o
          próprio cliente. A limitação é que árvores profundas tornam-se rapidamente ilegíveis, e árvores rasas
          sacrificam desempenho.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Fidelidade vs. Interpretabilidade</h2>
        <p style={S.p}>
          Um dos conceitos centrais em XAI é a <strong>fidelidade</strong> de uma explicação: em que medida a explicação
          reflecte fielmente o comportamento real do modelo. Quando se usa um método post-hoc (como LIME) para construir
          um modelo proxy interpretável, esse proxy é sempre uma <em>aproximação</em> do modelo original, nunca uma cópia
          exacta. A diferença entre os dois é a infidelidade.
        </p>

        
          <strong>Formalização da fidelidade local (LIME):</strong>
          <div style={{ margin: '0.75rem 0 0' }}>
            <BlockMath math={"\\xi(x) = \\arg\\min_{g \\in G} \\mathcal{L}(f, g, \\pi_x) + \\Omega(g)"} />
          </div>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            onde <InlineMath math={"f"} /> é o modelo opaco, <InlineMath math={"g"} /> é o modelo interpretável proxy,
            <InlineMath math={"\\pi_x"} /> é uma função de proximidade centrada na instância <InlineMath math={"x"} />,
            e <InlineMath math={"\\Omega(g)"} /> penaliza a complexidade de <InlineMath math={"g"} />.
          </p>
        

        <p style={S.p}>
          A tensão fundamental é que uma explicação mais simples (alta interpretabilidade) é geralmente menos fiel ao
          comportamento real do modelo, enquanto uma explicação mais fiel tende a ser tão complexa quanto o próprio modelo.
          Este trade-off é análogo ao bias-variance tradeoff em aprendizagem supervisionada.
        </p>

        {/* SVG: curva tradeoff fidelidade-interpretabilidade */}
        <div style={S.diagram}>
          <p style={{ margin: '0 0 1rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
            Curva de Tradeoff Fidelidade ↔ Interpretabilidade
          </p>
          <svg viewBox="0 0 500 280" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker id="arrXA" markerWidth="7" markerHeight="7" refX="7" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="var(--text-secondary)" />
              </marker>
              <marker id="arrYA" markerWidth="7" markerHeight="7" refX="7" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="var(--text-secondary)" />
              </marker>
            </defs>
            {/* Eixos */}
            <line x1="60" y1="230" x2="450" y2="230" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrXA)" />
            <line x1="60" y1="230" x2="60" y2="30" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrYA)" />
            <text x="250" y="260" textAnchor="middle" fontSize="12" fill="var(--text-secondary)">Interpretabilidade</text>
            <text x="20" y="130" textAnchor="middle" fontSize="12" fill="var(--text-secondary)" transform="rotate(-90,20,130)">Fidelidade</text>

            {/* Curva de tradeoff */}
            <path
              d="M 80,50 C 120,55 180,80 260,140 S 380,200 440,215"
              fill="none"
              stroke="#4a9eed"
              strokeWidth="2.5"
              strokeDasharray="none"
            />

            {/* Pontos anotados */}
            <circle cx="100" cy="52" r="5" fill="#4a9eed" />
            <text x="108" y="48" fontSize="10" fill="#4a9eed">Modelo opaco</text>
            <text x="138" y="60" fontSize="10" fill="#4a9eed">(alta fidelidade)</text>

            <circle cx="260" cy="140" r="5" fill="#4a9eed" />
            <text x="265" y="126" fontSize="10" fill="#4a9eed">EBM / GAM</text>
            <text x="268" y="138" fontSize="10" fill="#4a9eed">(equilíbrio)</text>

            <circle cx="430" cy="213" r="5" fill="#4a9eed" />
            <text x="370" y="190" fontSize="10" fill="#4a9eed">Regressão linear</text>
            <text x="390" y="200" fontSize="10" fill="#4a9eed">(alta interpretab.)</text>

            {/* Zona ideal */}
            <rect x="200" y="110" width="120" height="60" rx="6" fill="rgba(74,158,237,0.10)" stroke="rgba(74,158,237,0.10)" strokeWidth="1" strokeDasharray="4,2" />
            <text x="230" y="155" textAnchor="middle" fontSize="10" fill="#4a9eed" fontWeight="600">Zona ideal</text>
          </svg>
        </div>

        <p style={S.p}>
          Métricas quantitativas de fidelidade incluem: a diferença entre as predições do modelo proxy e do modelo original
          numa amostra de teste local, o coeficiente de determinação <InlineMath math={"R^2"} /> do proxy relativamente
          às predições do modelo, e testes de simulabilidade humana (um humano consegue prever a saída do modelo usando
          apenas a explicação?).
        </p>
        <p style={S.p}>
          Outras métricas de fidelidade utilizadas na prática incluem:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Métrica</th>
              <th style={S.th}>Definição</th>
              <th style={S.th}>Notas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Fidelidade local</strong></td>
              <td style={S.td}>Concordância entre modelo proxy e modelo real numa vizinhança de <InlineMath math={"x"} /></td>
              <td style={S.td}>Usada por LIME; quanto maior a vizinhança, menor a fidelidade típica</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Simulabilidade</strong></td>
              <td style={S.td}>Um humano consegue prever a saída do modelo usando apenas a explicação?</td>
              <td style={S.td}>Requer avaliação humana; medida em estudos de utilizador</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Monotonia</strong></td>
              <td style={S.td}>A explicação respeita relações monotónicas conhecidas do domínio?</td>
              <td style={S.td}>Violações indicam possível infidelidade ou artefacto</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Completude</strong></td>
              <td style={S.td}>Os valores de Shapley somam ao valor predito menos o valor base</td>
              <td style={S.td}>Propriedade garantida por SHAP; não garantida por LIME</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Uma explicação infiel pode ser mais perigosa que nenhuma explicação: cria uma falsa sensação de compreensão
          e pode levar a decisões incorrectas baseadas numa narrativa que não corresponde ao que o modelo realmente faz.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. XAI no Pipeline de ML</h2>
        <p style={S.p}>
          A explicabilidade não é apenas uma etapa final — integra-se em múltiplos pontos do ciclo de vida de um
          sistema de machine learning, com objectivos distintos em cada fase.
        </p>

        {/* SVG: pipeline com anotações XAI */}
        <div style={S.diagram}>
          <p style={{ margin: '0 0 1rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
            XAI ao Longo do Pipeline de ML
          </p>
          <svg viewBox="0 0 760 320" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker id="pArr" markerWidth="7" markerHeight="7" refX="7" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="var(--text-secondary)" />
              </marker>
            </defs>

            {/* Caixas do pipeline */}
            {[
              { x: 20, label: 'Dados', sub: 'Recolha e\npreparação' },
              { x: 165, label: 'Treino', sub: 'Ajuste do\nmodelo' },
              { x: 310, label: 'Validação', sub: 'Avaliação de\ndesempenho' },
              { x: 455, label: 'Deployment', sub: 'Produção\ne integração' },
              { x: 600, label: 'Monitorização', sub: 'Drift e\nretraining' },
            ].map(({ x, label, sub }) => (
              <g key={x}>
                <rect x={x} y="60" width="120" height="60" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
                <text x={x + 60} y="86" textAnchor="middle" fontWeight="700" fontSize="12" fill={color}>{label}</text>
                <text x={x + 60} y="103" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{sub.split('\n')[0]}</text>
                <text x={x + 60} y="114" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{sub.split('\n')[1]}</text>
              </g>
            ))}

            {/* Setas entre caixas */}
            {[140, 285, 430, 575].map(x => (
              <line key={x} x1={x} y1="90" x2={x + 20} y2="90" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#pArr)" />
            ))}

            {/* Anotações XAI por fase */}
            {[
              { x: 80, y: 150, titulo: 'Exploração', desc: ['Análise de correlações,', 'detecção de leakage,', 'fairness dos dados brutos'] },
              { x: 225, y: 150, titulo: 'Debugging', desc: ['Feature importance,', 'identificação de erros', 'sistemáticos do modelo'] },
              { x: 370, y: 150, titulo: 'Auditoria', desc: ['Fidelidade, fairness,', 'conformidade RGPD,', 'relatórios regulatórios'] },
              { x: 515, y: 150, titulo: 'Compliance', desc: ['Explicações para', 'clientes e reguladores,', 'right to explanation'] },
              { x: 660, y: 150, titulo: 'Vigilância', desc: ['Drift de explicações,', 'detecção de mudança', 'de comportamento'] },
            ].map(({ x, y, titulo, desc }) => (
              <g key={x}>
                <line x1={x} y1="120" x2={x} y2={y} stroke="var(--card-border)" strokeWidth="1" strokeDasharray="3,2" />
                <rect x={x - 55} y={y} width="110" height="80" rx="6" fill="var(--bg-secondary)" stroke="var(--card-border)" strokeWidth="1" />
                <text x={x} y={y + 16} textAnchor="middle" fontWeight="600" fontSize="10" fill={color}>{titulo}</text>
                {desc.map((linha, i) => (
                  <text key={i} x={x} y={y + 30 + i * 14} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{linha}</text>
                ))}
              </g>
            ))}

            {/* Rótulo XAI transversal */}
            <rect x="20" y="240" width="720" height="28" rx="6" fill="rgba(74,158,237,0.10)" stroke="rgba(74,158,237,0.10)" strokeWidth="1" />
            <text x="380" y="258" textAnchor="middle" fontSize="11" fontWeight="600" fill={color}>
              XAI — transversal a todo o ciclo de vida do sistema de ML
            </text>
          </svg>
        </div>

        <p style={S.p}>
          É fundamental reconhecer que a XAI não é uma adição opcional ao final do pipeline — deve ser planeada desde
          o início. A escolha da arquitectura do modelo, das features utilizadas, dos dados de treino e das métricas de
          avaliação afecta directamente que tipos de explicação serão possíveis e quão fiéis serão. Um modelo treinado
          sem cuidado com a explicabilidade pode ser tecnicamente difícil de explicar de forma fidedigna mais tarde.
        </p>
        <p style={S.p}>
          Durante o <strong>desenvolvimento</strong>, a explicabilidade é uma ferramenta de debugging: ajuda a detectar
          correlações espúrias, vazamento de dados do futuro (data leakage) e enviesamentos introduzidos no pré-processamento.
          Na fase de <strong>validação</strong> e aprovação, fornece evidências para auditores e equipas de conformidade
          regulatória. Em <strong>produção</strong>, permite fornecer justificações às partes afectadas e monitorizar se
          o comportamento do modelo se altera ao longo do tempo (concept drift detectado através de mudanças nas explicações).
        </p>

        <div style={S.highlight}>
          <strong>Quando usar cada tipo de explicação no pipeline:</strong>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.4rem', lineHeight: 2 }}>
            <li><strong>Global (desenvolvimento)</strong> — perceber quais features o modelo mais usa; detectar anomalias.</li>
            <li><strong>Local (produção)</strong> — responder a reclamações de clientes; cumprir Art. 22.º RGPD.</li>
            <li><strong>Contrafactual (produção)</strong> — "o que teria de mudar para receber crédito?"; orientação accionável.</li>
            <li><strong>Fairness audit (validação)</strong> — verificar se a decisão depende de atributos protegidos.</li>
          </ul>
        </div>
      </div>
</div>
  );
}
