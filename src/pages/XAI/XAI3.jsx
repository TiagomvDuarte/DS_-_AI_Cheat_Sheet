import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#f97316';
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
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  mathBlock: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1.25rem', margin: '1.5rem 0', textAlign: 'center', overflowX: 'auto' },
  svgWrap: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1rem', margin: '1.25rem 0', overflowX: 'auto' },
};

export default function XAI3() {
  return (
    <div style={S.page}>
      <Link to="/xai" style={S.back}><ArrowLeft size={16} /> Voltar a Explainable AI</Link>

      <div style={S.tag}>MÓDULO 03</div>
      <h1 style={S.h1}>LIME — Local Interpretable Model-agnostic Explanations</h1>
      <p style={S.lead}>
        LIME (Ribeiro et al., 2016) é uma das técnicas de XAI mais amplamente utilizadas para explicar predições
        individuais de qualquer modelo caixa-negra. A sua filosofia central é elegante: <em>pensar globalmente,
        explicar localmente</em>. Mesmo que um modelo de aprendizagem automática seja globalmente não-linear e
        opaco, é possível aproximá-lo com um modelo linear simples e interpretável na vizinhança de qualquer
        instância específica que se queira compreender.
      </p>

      {/* ── Secção 1: Intuição ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Intuição do LIME</h2>
        <p style={S.p}>
          Imagine um modelo de classificação com uma fronteira de decisão altamente não-linear — uma rede
          neuronal profunda ou um ensemble de mil árvores. Globalmente, esta fronteira é impossível de
          descrever de forma simples. Contudo, se nos concentrarmos num ponto específico <InlineMath math={"x"} /> e
          olharmos apenas para a sua vizinhança imediata, a fronteira parece quase linear. É exactamente esta
          observação que o LIME explora.
        </p>
        <p style={S.p}>
          O LIME gera amostras perturbadas em torno de <InlineMath math={"x"} />, obtém as predições do modelo
          original para essas amostras, e ajusta um modelo linear simples (o <em>surrogate</em>) ponderado pela
          proximidade a <InlineMath math={"x"} />. O resultado é uma explicação local: um conjunto de features com
          coeficientes que indicam a direcção e magnitude do contributo de cada feature para a predição naquele
          ponto específico.
        </p>
        <div style={S.note}>
          "Think globally, act locally" — a explicação do LIME é válida apenas na vizinhança de <InlineMath math={"x"} />,
          não descreve o comportamento global do modelo.
        </div>

        {/* SVG: scatter 2D com fronteira de decisão ondulada */}
        <div style={S.svgWrap}>
          <svg viewBox="0 0 520 300" width="100%" style={{ display: 'block' }}>
            {/* Fundo */}
            <rect width="520" height="300" fill="none" />
            {/* Regiões de classe (fundo) */}
            <path d="M0,0 Q130,80 200,140 Q270,200 350,160 Q430,120 520,180 L520,0 Z" fill="rgba(249,115,22,0.10)" opacity="0.5" />
            <path d="M0,300 L520,300 L520,180 Q430,120 350,160 Q270,200 200,140 Q130,80 0,0 Z" fill="rgba(249,115,22,0.08)" opacity="0.4" />

            {/* Fronteira de decisão global (ondulada) */}
            <path d="M0,0 Q130,80 200,140 Q270,200 350,160 Q430,120 520,180" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="6,3" />
            <text x="360" y="115" fontSize="11" fill="var(--text-secondary)" fontWeight="600">Fronteira global</text>

            {/* Pontos da classe 0 */}
            <circle cx="60" cy="40" r="5" fill="#f97316" opacity="0.7" />
            <circle cx="110" cy="25" r="5" fill="#f97316" opacity="0.7" />
            <circle cx="170" cy="55" r="5" fill="#f97316" opacity="0.7" />
            <circle cx="230" cy="30" r="5" fill="#f97316" opacity="0.7" />
            <circle cx="310" cy="50" r="5" fill="#f97316" opacity="0.7" />
            <circle cx="400" cy="35" r="5" fill="#f97316" opacity="0.7" />
            <circle cx="460" cy="80" r="5" fill="#f97316" opacity="0.7" />
            <circle cx="80" cy="90" r="5" fill="#f97316" opacity="0.7" />
            <circle cx="150" cy="100" r="5" fill="#f97316" opacity="0.7" />
            <circle cx="490" cy="140" r="5" fill="#f97316" opacity="0.7" />

            {/* Pontos da classe 1 */}
            <circle cx="40" cy="200" r="5" fill="none" stroke="#ea580c" strokeWidth="1.8" opacity="0.9" />
            <circle cx="100" cy="240" r="5" fill="none" stroke="#ea580c" strokeWidth="1.8" opacity="0.9" />
            <circle cx="180" cy="210" r="5" fill="none" stroke="#ea580c" strokeWidth="1.8" opacity="0.9" />
            <circle cx="260" cy="260" r="5" fill="none" stroke="#ea580c" strokeWidth="1.8" opacity="0.9" />
            <circle cx="330" cy="230" r="5" fill="none" stroke="#ea580c" strokeWidth="1.8" opacity="0.9" />
            <circle cx="420" cy="250" r="5" fill="none" stroke="#ea580c" strokeWidth="1.8" opacity="0.9" />
            <circle cx="480" cy="220" r="5" fill="none" stroke="#ea580c" strokeWidth="1.8" opacity="0.9" />
            <circle cx="70" cy="270" r="5" fill="none" stroke="#ea580c" strokeWidth="1.8" opacity="0.9" />
            <circle cx="370" cy="280" r="5" fill="none" stroke="#ea580c" strokeWidth="1.8" opacity="0.9" />
            <circle cx="200" cy="280" r="5" fill="none" stroke="#ea580c" strokeWidth="1.8" opacity="0.9" />

            {/* Vizinhança em torno de x */}
            <circle cx="230" cy="155" r="55" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" />

            {/* Pontos perturbados dentro da vizinhança */}
            <circle cx="200" cy="130" r="5" fill="#f97316" opacity="0.9" />
            <circle cx="255" cy="125" r="5" fill="#f97316" opacity="0.9" />
            <circle cx="265" cy="170" r="5" fill="none" stroke="#ea580c" strokeWidth="1.8" opacity="0.9" />
            <circle cx="210" cy="185" r="5" fill="none" stroke="#ea580c" strokeWidth="1.8" opacity="0.9" />
            <circle cx="245" cy="195" r="5" fill="none" stroke="#ea580c" strokeWidth="1.8" opacity="0.9" />
            <circle cx="190" cy="165" r="5" fill="none" stroke="#ea580c" strokeWidth="1.8" opacity="0.9" />
            <circle cx="240" cy="115" r="5" fill="#f97316" opacity="0.9" />

            {/* Instância a explicar: estrela vermelha */}
            <polygon points="230,140 235,153 249,153 238,161 242,175 230,167 218,175 222,161 211,153 225,153" fill="#f97316" stroke="#c2410c" strokeWidth="1" />
            <text x="254" y="144" fontSize="11" fill="#f97316" fontWeight="700">x (instância)</text>

            {/* Fronteira linear local (surrogate) */}
            <line x1="170" y1="195" x2="295" y2="115" stroke="#f97316" strokeWidth="2.5" strokeDasharray="8,3" />
            <text x="90" y="212" fontSize="11" fill="#f97316" fontWeight="700">Surrogate linear local</text>

            {/* Legenda */}
            <circle cx="15" cy="265" r="5" fill="#f97316" opacity="0.7" />
            <text x="24" y="270" fontSize="10" fill="var(--text-secondary)">Classe 0</text>
            <circle cx="75" cy="265" r="5" fill="none" stroke="#ea580c" strokeWidth="1.8" opacity="0.9" />
            <text x="84" y="270" fontSize="10" fill="var(--text-secondary)">Classe 1</text>
            <circle cx="145" cy="265" r="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x="154" y="270" fontSize="10" fill="var(--text-secondary)">Vizinhança</text>
          </svg>
        </div>

        <p style={S.p}>
          No diagrama acima, a fronteira global (a tracejado cinzento) é complexa e não-linear. A estrela
          laranja representa a instância <InlineMath math={"x"} /> que queremos explicar. O círculo tracejado delimita
          a vizinhança local onde o LIME trabalha. Dentro dessa vizinhança, uma linha simples — o modelo
          surrogate — aproxima bem a fronteira, permitindo uma explicação interpretável.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 2: Algoritmo ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Algoritmo Passo-a-Passo</h2>
        <p style={S.p}>
          O LIME segue cinco passos bem definidos para produzir uma explicação local para qualquer instância
          <InlineMath math={" x"} />:
        </p>

        {/* SVG: Fluxograma de 5 passos */}
        <div style={S.svgWrap}>
          <svg viewBox="0 0 560 100" width="100%" style={{ display: 'block' }}>
            {/* Passo 1 */}
            <rect x="5" y="20" width="90" height="50" rx="7" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="50" y="43" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">① Escolher</text>
            <text x="50" y="57" textAnchor="middle" fontSize="10" fill="var(--text-primary)">instância x</text>

            {/* Seta */}
            <line x1="95" y1="45" x2="113" y2="45" stroke="var(--text-secondary)" strokeWidth="1.5" />
            <polygon points="113,41 121,45 113,49" fill="var(--text-secondary)" />

            {/* Passo 2 */}
            <rect x="121" y="20" width="90" height="50" rx="7" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="166" y="43" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">② Perturbar</text>
            <text x="166" y="57" textAnchor="middle" fontSize="10" fill="var(--text-primary)">amostras z</text>

            {/* Seta */}
            <line x1="211" y1="45" x2="229" y2="45" stroke="var(--text-secondary)" strokeWidth="1.5" />
            <polygon points="229,41 237,45 229,49" fill="var(--text-secondary)" />

            {/* Passo 3 */}
            <rect x="237" y="20" width="90" height="50" rx="7" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="282" y="43" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">③ Obter</text>
            <text x="282" y="57" textAnchor="middle" fontSize="10" fill="var(--text-primary)">predições f(z)</text>

            {/* Seta */}
            <line x1="327" y1="45" x2="345" y2="45" stroke="var(--text-secondary)" strokeWidth="1.5" />
            <polygon points="345,41 353,45 345,49" fill="var(--text-secondary)" />

            {/* Passo 4 */}
            <rect x="353" y="20" width="90" height="50" rx="7" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="398" y="43" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">④ Pesar</text>
            <text x="398" y="57" textAnchor="middle" fontSize="10" fill="var(--text-primary)">por π_x(z)</text>

            {/* Seta */}
            <line x1="443" y1="45" x2="461" y2="45" stroke="var(--text-secondary)" strokeWidth="1.5" />
            <polygon points="461,41 469,45 461,49" fill="var(--text-secondary)" />

            {/* Passo 5 */}
            <rect x="469" y="20" width="86" height="50" rx="7" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
            <text x="512" y="43" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">⑤ Ajustar</text>
            <text x="512" y="57" textAnchor="middle" fontSize="10" fill="var(--text-primary)">surrogate g</text>
          </svg>
        </div>

        <div style={S.highlight}>
          <p style={{ margin: '0 0 0.5rem', fontWeight: 700, color }}>Detalhes de cada passo:</p>
          <ol style={{ margin: 0, paddingLeft: '1.4rem', lineHeight: 2.2, fontSize: '0.95rem' }}>
            <li><strong>Escolher a instância x</strong> — a instância individual cuja predição queremos compreender.</li>
            <li><strong>Gerar amostras perturbadas z</strong> — criar centenas a milhares de variações de x (removendo features, adicionando ruído, ou amostrando da distribuição empírica).</li>
            <li><strong>Obter predições f(z)</strong> — passar cada amostra perturbada pelo modelo caixa-negra original e registar a sua predição. Não é necessário acesso interno ao modelo — apenas às suas entradas e saídas.</li>
            <li><strong>Calcular pesos π_x(z)</strong> — pesar cada amostra em função da sua proximidade a x usando um kernel exponencial. Amostras mais próximas de x recebem maior peso.</li>
            <li><strong>Ajustar o modelo surrogate g</strong> — treinar uma regressão linear ponderada (por exemplo, LASSO) sobre os pares (z, f(z)) com os pesos π_x(z). Os coeficientes do modelo linear constituem a explicação.</li>
          </ol>
        </div>

        <p style={{ ...S.p, fontWeight: 600, marginBottom: '0.4rem' }}>Kernel de proximidade:</p>
        <div style={S.mathBlock}>
          <BlockMath math={"\\pi_x(z) = \\exp\\left(-\\frac{D(x,z)^2}{\\sigma^2}\\right)"} />
        </div>
        <p style={S.p}>
          onde <InlineMath math={"D(x,z)"} /> é a distância entre x e a amostra perturbada z (tipicamente distância
          euclidiana ou coseno), e <InlineMath math={"\\sigma"} /> é o parâmetro de largura do kernel que controla
          o tamanho efectivo da vizinhança. Um <InlineMath math={"\\sigma"} /> pequeno foca a explicação muito
          localmente; um <InlineMath math={"\\sigma"} /> grande torna a explicação mais global.
        </p>

        <p style={{ ...S.p, fontWeight: 600, marginBottom: '0.4rem' }}>Optimização do surrogate:</p>
        <div style={S.mathBlock}>
          <BlockMath math={"\\xi(x) = \\arg\\min_{g \\in G}\\; \\mathcal{L}(f, g, \\pi_x) + \\Omega(g)"} />
        </div>
        <p style={S.p}>
          O objectivo é encontrar o melhor modelo interpretável <InlineMath math={"g \\in G"} /> (família de
          modelos lineares) que minimiza a perda de fidelidade <InlineMath math={"\\mathcal{L}(f, g, \\pi_x)"} />
          — o quão bem g aproxima f na vizinhança de x — penalizada pela complexidade <InlineMath math={"\\Omega(g)"} />
          do surrogate. Na prática, <InlineMath math={"\\Omega(g)"} /> controla o número de features na explicação.
        </p>

        <div style={S.note}>
          A fidelidade local é medida pelo <InlineMath math={"R^2"} /> da regressão ponderada. Um valor elevado
          confirma que o surrogate linear é uma boa aproximação do modelo caixa-negra naquela região.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 3: LIME Tabular ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. LIME Tabular</h2>
        <p style={S.p}>
          Para dados tabulares, o LIME representa cada instância num <em>espaço interpretável</em> binário: cada
          feature é convertida numa variável 0/1 que indica se o valor original está presente (1) ou foi
          substituído por um valor amostrado da distribuição empírica de treino (0). As perturbações são geradas
          ligando e desligando aleatoriamente estas representações binárias.
        </p>
        <p style={S.p}>
          Este processo preserva a escala original para o modelo caixa-negra (que recebe os valores reais) mas
          produz explicações no espaço binário interpretável, onde cada feature tem um coeficiente linear que
          representa o seu contributo local para a predição.
        </p>

        <p style={{ ...S.p, fontWeight: 600, marginBottom: '0.6rem' }}>
          Exemplo: Explicação de uma decisão de crédito
        </p>

        {/* SVG: Bar chart horizontal com contributos positivos e negativos */}
        <div style={S.svgWrap}>
          <svg viewBox="0 0 520 240" width="100%" style={{ display: 'block' }}>
            <text x="260" y="16" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">
              Explicação LIME — Pedido de Crédito (Instância #47)
            </text>
            <text x="260" y="29" textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="600">
              Aprovado (p=0.74)
            </text>

            {/* Linha central (zero) */}
            <line x1="220" y1="36" x2="220" y2="208" stroke="var(--text-secondary)" strokeWidth="1" />

            {/* Feature 1: Historial_Crédito = Bom (+0.23) */}
            <text x="215" y="56" textAnchor="end" fontSize="10" fill="var(--text-primary)">Historial_Crédito = Bom</text>
            <rect x="220" y="42" width="138" height="20" rx="3" fill="#f97316" opacity="0.85" />
            <text x="362" y="56" fontSize="10" fill="#f97316" fontWeight="600"> +0.23</text>

            {/* Feature 2: Dívida_Alta = Sim (-0.18) */}
            <text x="310" y="86" textAnchor="end" fontSize="10" fill="var(--text-primary)">Dívida_Alta = Sim</text>
            <rect x="112" y="72" width="108" height="20" rx="3" fill="#c2410c" opacity="0.85" />
            <text x="108" y="86" textAnchor="end" fontSize="10" fill="#c2410c" fontWeight="600">-0.18</text>

            {/* Feature 3: Idade = 32 (+0.07) */}
            <text x="215" y="116" textAnchor="end" fontSize="10" fill="var(--text-primary)">Idade = 32</text>
            <rect x="220" y="102" width="42" height="20" rx="3" fill="#f97316" opacity="0.75" />
            <text x="266" y="116" fontSize="10" fill="#f97316" fontWeight="600"> +0.07</text>

            {/* Feature 4: Emprego_Estável = Sim (+0.14) */}
            <text x="215" y="146" textAnchor="end" fontSize="10" fill="var(--text-primary)">Emprego_Estável = Sim</text>
            <rect x="220" y="132" width="84" height="20" rx="3" fill="#f97316" opacity="0.80" />
            <text x="308" y="146" fontSize="10" fill="#f97316" fontWeight="600"> +0.14</text>

            {/* Feature 5: Valor_Pedido > 50k (-0.11) */}
            <text x="310" y="176" textAnchor="end" fontSize="10" fill="var(--text-primary)">Valor_Pedido {'>'} 50k</text>
            <rect x="154" y="162" width="66" height="20" rx="3" fill="#c2410c" opacity="0.75" />
            <text x="150" y="176" textAnchor="end" fontSize="10" fill="#c2410c" fontWeight="600">-0.11</text>

            {/* Feature 6: Poupanças > 5k (+0.09) */}
            <text x="215" y="206" textAnchor="end" fontSize="10" fill="var(--text-primary)">Poupanças {'>'} 5k</text>
            <rect x="220" y="192" width="54" height="20" rx="3" fill="#f97316" opacity="0.75" />
            <text x="278" y="206" fontSize="10" fill="#f97316" fontWeight="600"> +0.09</text>

            {/* Legenda */}
            <rect x="300" y="223" width="12" height="12" rx="2" fill="#f97316" opacity="0.85" />
            <text x="316" y="233" fontSize="10" fill="var(--text-secondary)">Favorável</text>
            <rect x="385" y="223" width="12" height="12" rx="2" fill="#c2410c" opacity="0.85" />
            <text x="401" y="233" fontSize="10" fill="var(--text-secondary)">Desfavorável</text>
          </svg>
        </div>

        <p style={S.p}>
          O gráfico mostra que, para este pedido de crédito específico, o historial de crédito positivo e o
          emprego estável contribuem a favor da aprovação, enquanto o elevado nível de dívida e o valor
          elevado do empréstimo pesam contra. O modelo regressão linear surrogate resume estes contributos
          nos coeficientes apresentados.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 4: LIME para Texto ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. LIME para Texto</h2>
        <p style={S.p}>
          Para texto, o espaço interpretável é o conjunto de palavras (ou tokens) presentes na frase. O LIME
          representa cada texto como um vector binário — 1 se a palavra está presente, 0 se foi removida.
          As perturbações consistem em criar versões do texto original com diferentes subconjuntos de palavras
          removidas aleatoriamente.
        </p>
        <p style={S.p}>
          Internamente, o LIME para texto usa uma representação <em>bag-of-words</em>. Para cada perturbação,
          as palavras ausentes são substituídas por um token de máscara (ou simplesmente omitidas), o modelo
          classifica o texto modificado, e o resultado é usado para treinar o surrogate linear sobre as
          representações binárias de palavras.
        </p>
        <p style={S.p}>
          O resultado é uma lista de palavras com pesos positivos (contribuem para a classe prevista) ou
          negativos (contribuem contra). Este tipo de explicação é particularmente útil para auditar
          classificadores de sentimento, detecção de spam ou moderação de conteúdo.
        </p>

        {/* SVG: texto com palavras destacadas */}
        <div style={S.svgWrap}>
          <svg viewBox="0 0 520 240" width="100%" style={{ display: 'block' }}>
            <text x="260" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">
              Classificação de Sentimento — Revisão de Produto
            </text>

            {/* Frase com palavras destacadas */}
            <text x="30" y="56" fontSize="14" fill="var(--text-primary)">"O produto é</text>
            {/* excelente — positivo */}
            <rect x="126" y="40" width="80" height="22" rx="4" fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="1.5" />
            <text x="166" y="56" textAnchor="middle" fontSize="14" fontWeight="700" fill="#f97316">excelente</text>
            <text x="216" y="56" fontSize="14" fill="var(--text-primary)"> mas o</text>
            {/* serviço — negativo */}
            <rect x="264" y="40" width="58" height="22" rx="4" fill="rgba(194,65,12,0.15)" stroke="#c2410c" strokeWidth="1.5" />
            <text x="294" y="56" textAnchor="middle" fontSize="14" fontWeight="700" fill="#c2410c">serviço</text>
            <text x="330" y="56" fontSize="14" fill="var(--text-primary)"> foi</text>
            {/* horrível — negativo */}
            <rect x="355" y="40" width="70" height="22" rx="4" fill="rgba(194,65,12,0.15)" stroke="#c2410c" strokeWidth="1.5" />
            <text x="390" y="56" textAnchor="middle" fontSize="14" fontWeight="700" fill="#c2410c">horrível</text>
            <text x="430" y="56" fontSize="14" fill="var(--text-primary)">"</text>

            {/* Predição */}
            <text x="260" y="85" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">
              Predição: Sentimento Negativo (p = 0.68)
            </text>

            {/* Gráfico de barras — 4 linhas, labels à esquerda, zero a x=200 */}
            <text x="260" y="103" fontSize="11" fontWeight="700" fill="var(--text-primary)" textAnchor="middle">Contributos das palavras:</text>
            <line x1="200" y1="110" x2="200" y2="228" stroke="var(--text-secondary)" strokeWidth="1" />

            {/* Linha 1: excelente +0.27 */}
            <text x="193" y="127" textAnchor="end" fontSize="10" fill="var(--text-primary)">excelente</text>
            <rect x="200" y="115" width="81" height="18" rx="3" fill="#f97316" opacity="0.85" />
            <text x="285" y="127" fontSize="9" fill="#f97316" fontWeight="600"> +0.27</text>

            {/* Linha 2: produto +0.08 */}
            <text x="193" y="153" textAnchor="end" fontSize="10" fill="var(--text-primary)">produto</text>
            <rect x="200" y="141" width="24" height="18" rx="3" fill="#f97316" opacity="0.65" />
            <text x="228" y="153" fontSize="9" fill="#f97316" fontWeight="600"> +0.08</text>

            {/* Linha 3: horrível -0.31 */}
            <text x="243" y="179" textAnchor="end" fontSize="10" fill="var(--text-primary)">horrível</text>
            <rect x="107" y="167" width="93" height="18" rx="3" fill="#c2410c" opacity="0.85" />
            <text x="103" y="179" textAnchor="end" fontSize="9" fill="#c2410c" fontWeight="600">-0.31</text>

            {/* Linha 4: serviço -0.19 */}
            <text x="243" y="205" textAnchor="end" fontSize="10" fill="var(--text-primary)">serviço</text>
            <rect x="143" y="193" width="57" height="18" rx="3" fill="#c2410c" opacity="0.75" />
            <text x="139" y="205" textAnchor="end" fontSize="9" fill="#c2410c" fontWeight="600">-0.19</text>

            {/* Legenda */}
            <rect x="150" y="218" width="12" height="12" rx="2" fill="#f97316" opacity="0.85" />
            <text x="166" y="228" fontSize="10" fill="var(--text-secondary)">Favorável (positivo)</text>
            <rect x="295" y="218" width="12" height="12" rx="2" fill="#c2410c" opacity="0.85" />
            <text x="311" y="228" fontSize="10" fill="var(--text-secondary)">Desfavorável (negativo)</text>
          </svg>
        </div>

        <p style={S.p}>
          Neste exemplo, as palavras "horrível" e "serviço" puxam a predição para sentimento negativo (pesos
          negativos em vermelho), enquanto "excelente" contribui para sentimento positivo (peso positivo em
          verde). A predição final é negativa porque os contributos negativos superam os positivos.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 5: LIME para Imagem ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. LIME para Imagem</h2>
        <p style={S.p}>
          Para imagens, o espaço de features brutas (pixels individuais) é demasiado granular para ser
          interpretável. O LIME agrupa os pixels em <strong>superpixels</strong> — regiões contíguas de pixels
          com cor e textura semelhantes — usando o algoritmo SLIC (Simple Linear Iterative Clustering). Cada
          superpixel constitui uma feature interpretável binária: presente (pixels originais) ou ausente
          (superpixel mascarado com cinzento ou preto).
        </p>
        <p style={S.p}>
          As perturbações consistem em escolher aleatoriamente subconjuntos de superpixels para mascarar.
          Para cada máscara, o modelo de visão computacional classifica a imagem resultante. O surrogate linear
          ajustado sobre estas perturbações indica quais os superpixels que mais contribuem para a predição
          — positivamente (superpixels que, quando presentes, aumentam a probabilidade da classe) ou
          negativamente.
        </p>

        {/* SVG: imagem dividida em superpixels */}
        <div style={S.svgWrap}>
          <svg viewBox="0 0 520 240" width="100%" style={{ display: 'block' }}>
            <text x="260" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">
              LIME para Imagem — Classificação: "Gato" (p=0.89)
            </text>

            {/* Imagem simulada como grid de superpixels irregulares */}
            {/* Linha 1 */}
            <rect x="40" y="28" width="55" height="48" rx="2" fill="var(--card-border)" stroke="var(--text-secondary)" strokeWidth="1" />
            <rect x="95" y="28" width="70" height="48" rx="2" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
            <text x="130" y="56" textAnchor="middle" fontSize="9" fill="#f97316" fontWeight="700">SP2 ★</text>
            <rect x="165" y="28" width="65" height="48" rx="2" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
            <text x="197" y="56" textAnchor="middle" fontSize="9" fill="#f97316" fontWeight="700">SP3 ★</text>
            <rect x="230" y="28" width="55" height="48" rx="2" fill="var(--card-border)" stroke="var(--text-secondary)" strokeWidth="1" />
            <rect x="285" y="28" width="65" height="48" rx="2" fill="var(--card-border)" stroke="var(--text-secondary)" strokeWidth="1" />
            <text x="317" y="56" textAnchor="middle" fontSize="9" fill="var(--text-secondary)" fontWeight="600">SP6</text>
            <rect x="350" y="28" width="80" height="48" rx="2" fill="var(--card-border)" stroke="var(--text-secondary)" strokeWidth="1" />

            {/* Linha 2 */}
            <rect x="40" y="76" width="80" height="55" rx="2" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
            <text x="80" y="107" textAnchor="middle" fontSize="9" fill="#f97316" fontWeight="700">SP8 ★</text>
            <rect x="120" y="76" width="60" height="55" rx="2" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
            <text x="150" y="107" textAnchor="middle" fontSize="9" fill="#f97316" fontWeight="700">SP9 ★</text>
            <rect x="180" y="76" width="75" height="55" rx="2" fill="var(--card-border)" stroke="var(--text-secondary)" strokeWidth="1" />
            <rect x="255" y="76" width="60" height="55" rx="2" fill="var(--card-border)" stroke="var(--text-secondary)" strokeWidth="1" />
            <rect x="315" y="76" width="55" height="55" rx="2" fill="rgba(194,65,12,0.20)" stroke="#c2410c" strokeWidth="2" />
            <text x="342" y="107" textAnchor="middle" fontSize="9" fill="#c2410c" fontWeight="700">SP12 ✗</text>
            <rect x="370" y="76" width="60" height="55" rx="2" fill="var(--card-border)" stroke="var(--text-secondary)" strokeWidth="1" />

            {/* Linha 3 */}
            <rect x="40" y="131" width="65" height="50" rx="2" fill="var(--card-border)" stroke="var(--text-secondary)" strokeWidth="1" />
            <rect x="105" y="131" width="80" height="50" rx="2" fill="var(--card-border)" stroke="var(--text-secondary)" strokeWidth="1" />
            <text x="145" y="159" textAnchor="middle" fontSize="9" fill="var(--text-secondary)" fontWeight="600">SP14</text>
            <rect x="185" y="131" width="70" height="50" rx="2" fill="var(--card-border)" stroke="var(--text-secondary)" strokeWidth="1" />
            <rect x="255" y="131" width="85" height="50" rx="2" fill="var(--card-border)" stroke="var(--text-secondary)" strokeWidth="1" />
            <rect x="340" y="131" width="90" height="50" rx="2" fill="var(--card-border)" stroke="var(--text-secondary)" strokeWidth="1" />

            {/* Legenda */}
            <rect x="40" y="193" width="14" height="14" rx="2" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
            <text x="58" y="204" fontSize="10" fill="var(--text-secondary)">Importante para "Gato" (★)</text>
            <rect x="220" y="193" width="14" height="14" rx="2" fill="rgba(194,65,12,0.20)" stroke="#c2410c" strokeWidth="2" />
            <text x="238" y="204" fontSize="10" fill="var(--text-secondary)">Contributo negativo (✗)</text>
            <rect x="360" y="193" width="14" height="14" rx="2" fill="var(--card-border)" stroke="var(--text-secondary)" strokeWidth="1" />
            <text x="378" y="204" fontSize="10" fill="var(--text-secondary)">Neutro / mascarado</text>

            <text x="260" y="225" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">
              Superpixels destacados a laranja (★) = regiões que mais contribuem para a predição "Gato"
            </text>
          </svg>
        </div>

        <p style={S.p}>
          Os superpixels marcados com ★ e destacados a laranja são as regiões da imagem que, quando presentes,
          aumentam a probabilidade de classificação como "Gato". Tipicamente correspondem às orelhas, olhos
          e contornos do animal. O superpixel marcado com ✗ diminui a probabilidade da classe (pode
          corresponder a fundo ou artefactos).
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 6: SP-LIME ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. SP-LIME — Selecção de Explicações Representativas</h2>
        <p style={S.p}>
          Uma única explicação LIME diz-nos como o modelo se comporta para uma instância específica. Mas
          como obter uma visão geral do comportamento do modelo sem ter de analisar milhares de explicações
          individuais? É para isso que serve o <strong>SP-LIME</strong> (Submodular Pick LIME).
        </p>
        <p style={S.p}>
          O SP-LIME selecciona um subconjunto de <InlineMath math={"B"} /> instâncias cujas explicações juntas
          cobrem o maior número possível de features importantes. A ideia é que um auditor humano que analise
          estas <InlineMath math={"B"} /> explicações ficará com uma compreensão representativa do comportamento
          global do modelo. A selecção é feita por um algoritmo ganancioso (<em>greedy</em>) que maximiza uma
          função de cobertura submodular.
        </p>

        
          <p style={{ margin: '0 0 0.6rem', fontWeight: 700, color }}>Objectivo do SP-LIME:</p>
          <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.8 }}>
            Dado um conjunto de explicações locais (uma por instância), seleccionar <InlineMath math={"B"} /> instâncias
            de forma a que as suas explicações <em>juntas</em> cubram o conjunto mais diverso e representativo
            de features. Útil para auditoria de modelos, detecção de viés sistemático e validação de confiança.
          </p>
        

        {/* SVG: Matriz de cobertura de features */}
        <div style={S.svgWrap}>
          <svg viewBox="0 0 520 220" width="100%" style={{ display: 'block' }}>
            <text x="260" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">
              SP-LIME — Matriz de Cobertura de Features
            </text>

            {/* Cabeçalho features */}
            {['F1','F2','F3','F4','F5','F6','F7'].map((f, i) => (
              <text key={f} x={170 + i * 48} y="38" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-secondary)">{f}</text>
            ))}

            {/* Linha de cabeçalho instâncias */}
            <text x="80" y="38" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-secondary)">Instância</text>
            <text x="135" y="38" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-secondary)">Selec.</text>

            {/* Dados: instâncias x features */}
            {[
              { id: 'i1', sel: true,  cells: [1,0,1,0,1,0,0] },
              { id: 'i2', sel: false, cells: [0,1,0,0,0,1,0] },
              { id: 'i3', sel: true,  cells: [0,1,0,1,0,0,1] },
              { id: 'i4', sel: false, cells: [1,0,0,0,1,0,0] },
              { id: 'i5', sel: false, cells: [0,0,1,1,0,0,0] },
            ].map((row, ri) => {
              const y = 45 + ri * 32;
              const rowFill = row.sel ? 'rgba(249,115,22,0.10)' : 'transparent';
              return (
                <g key={row.id}>
                  <rect x="10" y={y} width="500" height="28" rx="2" fill={rowFill} />
                  <text x="80" y={y + 18} textAnchor="middle" fontSize="10" fill="var(--text-primary)">{row.id}</text>
                  {row.sel && (
                    <text x="135" y={y + 18} textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="700">✓ B={ri === 0 ? 1 : 2}</text>
                  )}
                  {row.cells.map((val, ci) => (
                    <rect
                      key={ci}
                      x={146 + ci * 48}
                      y={y + 4}
                      width="36"
                      height="20"
                      rx="3"
                      fill={val === 1 ? (row.sel ? 'rgba(249,115,22,0.10)' : 'rgba(156,163,175,0.4)') : 'transparent'}
                      stroke={val === 1 ? (row.sel ? '#f97316' : 'var(--text-secondary)') : 'none'}
                      strokeWidth="1"
                    />
                  ))}
                </g>
              );
            })}

            {/* Linha de cobertura total */}
            <text x="10" y="210" fontSize="10" fontWeight="700" fill="#f97316">
              Cobertura (B=2): F1 ✓  F2 ✓  F3 ✓  F4 ✓  F5 ✓  F7 ✓  (6 de 7 features cobertas)
            </text>
          </svg>
        </div>

        <p style={S.p}>
          No exemplo acima, as instâncias i1 e i3 são seleccionadas pelo algoritmo ganancioso porque as suas
          explicações juntas cobrem 6 das 7 features importantes. Um auditor que analise apenas estas duas
          explicações obtém uma visão abrangente do comportamento do modelo.
        </p>

        <div style={S.note}>
          SP-LIME é especialmente útil em contextos regulatórios onde é necessário demonstrar a razoabilidade
          geral de um modelo a um número limitado de revisores humanos, em tempo limitado.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 7: Limitações ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Limitações do LIME</h2>
        <p style={S.p}>
          Apesar da sua popularidade e versatilidade, o LIME tem limitações importantes que devem ser
          consideradas antes de usar as suas explicações para decisões críticas ou comunicações regulatórias.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Limitação</th>
              <th style={S.th}>Impacto</th>
              <th style={S.th}>Mitigação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Instabilidade</strong> — perturbações aleatórias produzem explicações diferentes em execuções sucessivas</td>
              <td style={S.td}>Explicações contraditórias para a mesma instância; dificulta confiança e auditoria</td>
              <td style={S.td}>Aumentar <code>num_samples</code>; fixar semente aleatória; médias de múltiplas execuções; usar SHAP como alternativa</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Sensibilidade ao kernel σ</strong> — a largura da vizinhança é um hiperparâmetro crítico sem selecção automática óptima</td>
              <td style={S.td}>Explanações radicalmente diferentes para σ pequeno vs. grande; não existe valor "correcto"</td>
              <td style={S.td}>Testar múltiplos valores de σ; usar validação por fidelidade local (R²); documentar o valor usado</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Surrogate linear demasiado simples</strong> — em regiões com alta não-linearidade, a regressão linear tem baixa fidelidade</td>
              <td style={S.td}>Explicação imprecisa; o modelo surrogate não reflecte o comportamento real do caixa-negra localmente</td>
              <td style={S.td}>Verificar o R² local; se baixo, reduzir a vizinhança; considerar surrogates não-lineares (árvore de decisão)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Amostras fora da distribuição</strong> — perturbações geradas podem ser irrealistas e não representar dados reais</td>
              <td style={S.td}>Predições de f nas perturbações podem não reflectir o comportamento real do modelo em dados válidos</td>
              <td style={S.td}>Usar condicionamento pela distribuição real; técnicas de perturbação mais cuidadosas; SHAP KernelExplainer com background amostrado</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Custo computacional</strong> — cada explicação requer centenas a milhares de chamadas ao modelo</td>
              <td style={S.td}>Lento para modelos pesados ou explicações em tempo real; impraticável para modelos de inferência lenta</td>
              <td style={S.td}>Reduzir <code>num_samples</code> com atenção ao trade-off qualidade/velocidade; cachear explicações; usar SHAP TreeExplainer para árvores</td>
            </tr>
          </tbody>
        </table>

        {/* SVG: Diagrama de instabilidade */}
        <div style={S.svgWrap}>
          <svg viewBox="0 0 520 140" width="100%" style={{ display: 'block' }}>
            <text x="260" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">
              Instabilidade do LIME — mesma instância, duas execuções
            </text>

            {/* Execução 1 */}
            <text x="130" y="40" textAnchor="middle" fontSize="11" fontWeight="600" fill="#f97316">Execução 1</text>
            {[
              { label: 'Feature A', val: 0.22, pos: true },
              { label: 'Feature B', val: -0.15, pos: false },
              { label: 'Feature C', val: 0.10, pos: true },
            ].map((row, i) => {
              const y = 48 + i * 25;
              const barW = Math.abs(row.val) * 200;
              return (
                <g key={i}>
                  <text x="105" y={y + 13} textAnchor="end" fontSize="9" fill="var(--text-primary)">{row.label}</text>
                  <rect x="110" y={y} width={barW} height="16" rx="2" fill={row.pos ? '#f97316' : '#f97316'} opacity="0.8" />
                  <text x={112 + barW} y={y + 12} fontSize="9" fill={row.pos ? '#f97316' : '#f97316'}>{row.pos ? '+' : ''}{row.val}</text>
                </g>
              );
            })}

            {/* Seta de vs */}
            <text x="260" y="88" textAnchor="middle" fontSize="14" fill="var(--text-secondary)">↔</text>
            <text x="260" y="102" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">instabilidade</text>

            {/* Execução 2 */}
            <text x="400" y="40" textAnchor="middle" fontSize="11" fontWeight="600" fill="#f97316">Execução 2</text>
            {[
              { label: 'Feature A', val: 0.08, pos: true },
              { label: 'Feature C', val: 0.19, pos: true },
              { label: 'Feature D', val: -0.12, pos: false },
            ].map((row, i) => {
              const y = 48 + i * 25;
              const barW = Math.abs(row.val) * 200;
              return (
                <g key={i}>
                  <text x="375" y={y + 13} textAnchor="end" fontSize="9" fill="var(--text-primary)">{row.label}</text>
                  <rect x="380" y={y} width={barW} height="16" rx="2" fill={row.pos ? '#f97316' : '#f97316'} opacity="0.8" />
                  <text x={382 + barW} y={y + 12} fontSize="9" fill={row.pos ? '#f97316' : '#f97316'}>{row.pos ? '+' : ''}{row.val}</text>
                </g>
              );
            })}

            <text x="260" y="130" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">
              Feature A muda de +0.22 para +0.08; Feature D aparece apenas na Execução 2
            </text>
          </svg>
        </div>

        <div style={S.note}>
          Alvarez-Melis &amp; Jaakkola (2018) quantificaram empiricamente a instabilidade do LIME, mostrando
          que explanações para a mesma instância podem variar substancialmente entre execuções. Para aplicações
          críticas (crédito, medicina, recrutamento), esta instabilidade é uma limitação séria. O SHAP oferece
          garantias teóricas de unicidade baseadas em valores de Shapley que o LIME não tem.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 8: Síntese ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Síntese do Módulo</h2>
        <p style={S.p}>
          O LIME é uma técnica poderosa e flexível para explicar predições individuais de qualquer modelo
          caixa-negra. A sua abordagem de approximação local com surrogates lineares é conceptualmente
          elegante e facilmente comunicável a utilizadores não-técnicos. Adapta-se a dados tabulares, texto
          e imagens com apenas pequenas modificações na estratégia de perturbação.
        </p>
      </div>

      <div style={{ ...S.highlight, borderRadius: 10 }}>
        <p style={{ margin: 0, fontWeight: 700, fontSize: '1rem', color, marginBottom: '0.75rem' }}>Pontos-chave do Módulo 03</p>
        <ul style={{ margin: 0, paddingLeft: '1.4rem', lineHeight: 2.1, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
          <li>O LIME explica qualquer modelo caixa-negra <em>localmente</em>, aproximando-o com um modelo linear simples na vizinhança de cada instância.</li>
          <li>O algoritmo gera perturbações, obtém predições do modelo original, pesa-as pela proximidade a x via kernel exponencial, e ajusta um surrogate linear ponderado.</li>
          <li>A optimização minimiza a perda de fidelidade <InlineMath math={"\\mathcal{L}(f,g,\\pi_x)"} /> penalizada pela complexidade <InlineMath math={"\\Omega(g)"} /> do surrogate.</li>
          <li>Para dados tabulares, usa representação binária (feature presente/ausente); para texto, usa bag-of-words com palavras removidas; para imagens, usa superpixels SLIC mascarados.</li>
          <li>O SP-LIME (submodular pick) selecciona B instâncias representativas para auditoria global do modelo, maximizando a cobertura de features.</li>
          <li>As principais limitações são: instabilidade entre execuções, sensibilidade ao hiperparâmetro σ, possível baixa fidelidade local do surrogate linear, e elevado custo computacional.</li>
          <li>É model-agnostic: funciona com qualquer modelo que aceite inputs e produza outputs, sem necessidade de acesso aos pesos internos.</li>
          <li>Amplamente usado em domínios de alto risco — crédito, medicina, recrutamento — para justificar decisões individuais a clientes, auditores e reguladores.</li>
        </ul>
      </div>
    </div>
  );
}
