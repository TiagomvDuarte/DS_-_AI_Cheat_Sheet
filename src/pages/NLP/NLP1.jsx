import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    marginBottom: '2.5rem',
    transition: 'color 0.2s',
  },
  lectureTag: {
    display: 'inline-block',
    background: 'transparent',
    color: '#4a9eed',
    border: '1.5px solid #4a9eed',
    fontSize: '0.75rem',
    fontWeight: 700,
    padding: '0.25rem 0.75rem',
    borderRadius: 20,
    marginBottom: '0.75rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  h1: {
    fontSize: '2.1rem',
    fontWeight: 800,
    lineHeight: 1.2,
    marginBottom: '0.5rem',
    color: 'var(--text-primary)',
  },
  lead: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    marginBottom: '3rem',
    lineHeight: 1.7,
  },
  section: { marginBottom: '3.5rem' },
  h2: {
    fontSize: '1.4rem',
    fontWeight: 700,
    color: 'var(--accent-color)',
    borderLeft: '3px solid var(--accent-color)',
    paddingLeft: '0.85rem',
    marginBottom: '1.2rem',
  },
  h3: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '0.8rem',
    marginTop: '1.6rem',
  },
  p: {
    fontSize: '1rem',
    color: 'var(--text-primary)',
    lineHeight: 1.8,
    marginBottom: '1rem',
  },
  highlight: {
    background: 'rgba(74,158,237,0.10)',
    border: '1px solid #4a9eed',
    borderRadius: 8,
    padding: '1rem 1.25rem',
    marginBottom: '1.2rem',
  },
  math: {
    background: 'var(--bg-secondary)',
    borderRadius: 10,
    padding: '1.25rem',
    textAlign: 'center',
    margin: '1.5rem 0',
    overflowX: 'auto',
  },
  diagram: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--card-border)',
    borderRadius: 12,
    padding: '1.5rem',
    margin: '1.5rem 0',
    textAlign: 'center',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '0.9rem',
    marginBottom: '1rem',
  },
  th: {
    background: 'var(--bg-secondary)',
    padding: '0.6rem 0.8rem',
    textAlign: 'left',
    fontWeight: 600,
    color: 'var(--text-secondary)',
    borderBottom: '2px solid var(--card-border)',
  },
  td: {
    padding: '0.55rem 0.8rem',
    borderBottom: '1px solid var(--card-border)',
    color: 'var(--text-primary)',
  },
  tag: {
    display: 'inline-block',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--card-border)',
    borderRadius: 6,
    padding: '0.2rem 0.6rem',
    fontSize: '0.8rem',
    fontWeight: 600,
    margin: '0.15rem',
    color: 'var(--text-primary)',
  },
  code: {
    fontFamily: 'monospace',
    background: 'var(--bg-secondary)',
    padding: '0.1rem 0.4rem',
    borderRadius: 4,
    fontSize: '0.88em',
    color: 'var(--accent-color)',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid var(--card-border)',
    margin: '2.5rem 0',
  },
  note: {
    background: 'rgba(56,189,248,0.08)',
    borderLeft: '3px solid var(--accent-color)',
    borderRadius: '0 8px 8px 0',
    padding: '0.75rem 1rem',
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    margin: '1rem 0',
  },
};

const EcosystemDiagram = () => (
  <div style={S.diagram}>
    <svg viewBox="0 0 400 280" style={{ maxWidth: '100%', height: 'auto' }}>
      <ellipse
        cx="200"
        cy="140"
        rx="190"
        ry="130"
        fill="none"
        stroke="#6b7280"
        strokeWidth="1.5"
        strokeDasharray="6,3"
      />
      <text x="50" y="30" fill="var(--text-secondary)" fontSize="11">
        IA
      </text>
      <ellipse
        cx="200"
        cy="155"
        rx="148"
        ry="100"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="1.5"
        strokeDasharray="6,3"
      />
      <text x="68" y="62" fill="#38bdf8" fontSize="11">
        Machine Learning
      </text>
      <ellipse
        cx="200"
        cy="170"
        rx="108"
        ry="72"
        fill="none"
        stroke="#4a9eed"
        strokeWidth="1.5"
        strokeDasharray="6,3"
      />
      <text x="110" y="102" fill="#4a9eed" fontSize="11">
        Deep Learning
      </text>
      <ellipse
        cx="200"
        cy="182"
        rx="72"
        ry="46"
        fill="#4a9eed"
        opacity="0.85"
      />
      <text
        x="200"
        y="178"
        textAnchor="middle"
        fill="white"
        fontSize="13"
        fontWeight="bold"
      >
        NLP
      </text>
      <text
        x="200"
        y="195"
        textAnchor="middle"
        fill="rgba(255,255,255,0.8)"
        fontSize="9"
      >
        intersects ML &amp; DL
      </text>
    </svg>
    <p
      style={{
        fontSize: '0.8rem',
        color: 'var(--text-secondary)',
        marginTop: '0.5rem',
      }}
    >
      NLP no ecossistema da IA
    </p>
  </div>
);

export default function NLP1() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/nlp" style={S.back}>
          <ArrowLeft size={16} /> Voltar
        </Link>
        <div style={S.lectureTag}>MÓDULO 1</div>
        <h1 style={S.h1}>
          Introdução ao NLP, Desafios da Linguagem Natural, Pipeline e
          Pré-processamento
        </h1>

        {/* === SECTION 1 === */}
        <div style={S.section}>
          <h2 style={S.h2}>1. O que é NLP?</h2>
          <p style={S.p}>
            Natural Language Processing (NLP) é uma área da ciência da
            computação e da inteligência artificial que se ocupa da interação
            entre computadores e humanos em linguagem natural. O objetivo final
            é permitir que os computadores entendam a linguagem tão bem quanto
            nós — ou melhor.
          </p>

          <EcosystemDiagram />

          <p style={S.p}>
            NLP intersecta Machine Learning e Deep Learning, mas não é exclusivo
            de nenhum. Pode usar métodos clássicos (regex, KNN) e redes
            neuronais profundas (BERT, GPT). Os três termos{' '}
            <em>Text Analytics</em>, <em>Text Mining</em> e <em>NLP</em> são
            frequentemente usados de forma intercambiável — para efeitos
            práticos, todos se referem a técnicas computacionais para extrair
            conhecimento a partir de texto.
          </p>

          <h3 style={S.h3}>Aplicações em todo o lado</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '0.8rem',
              marginBottom: '1.5rem',
            }}
          >
            {[
              ['', 'Tradução Automática', 'Google Translate, DeepL'],
              ['', 'Chatbots & Diálogo', 'Assistentes virtuais, suporte'],
              ['', 'Motores de Busca', 'Google Search, Bing'],
              ['⌨', 'Teclados Preditivos', 'Sugestões ao escrever'],
              ['', 'Análise de Sentimento', 'Reviews, redes sociais'],
              ['', 'Extração de Info.', 'NER, relações, eventos'],
            ].map(([icon, title, sub]) => (
              <div
                key={title}
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--card-border)',
                  borderRadius: 10,
                  padding: '0.9rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>
                  {icon}
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    marginBottom: '0.25rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 2 === */}
        <div style={S.section}>
          <h2 style={S.h2}>2. Os 3 Grandes Desafios da Linguagem Natural</h2>
          <p style={S.p}>
            A linguagem humana é ambígua, variável e está em constante mudança.
            Cada desafio motiva técnicas específicas que veremos ao longo do
            curso.
          </p>

          <h3 style={S.h3}>Desafio 1 — Variabilidade</h3>
          <p style={S.p}>
            O mesmo significado pode ser expresso de formas completamente
            diferentes. Para um computador, as frases abaixo são entidades
            distintas; para um humano, são equivalentes:
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '1.2rem',
            }}
          >
            {[
              [
                '"The president greets the press"',
                '"Trump speaks to the media"',
              ],
              [
                '"He has tons of stuff to throw away"',
                '"He needs to get rid of a lot of junk"',
              ],
            ].map(([a, b], i) => (
              <React.Fragment key={i}>
                <div
                  style={{
                    background: 'var(--bg-secondary)',
                    borderRadius: 8,
                    padding: '0.75rem',
                    fontStyle: 'italic',
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {a}
                </div>
                <div
                  style={{
                    background: 'var(--bg-secondary)',
                    borderRadius: 8,
                    padding: '0.75rem',
                    fontStyle: 'italic',
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {b}
                </div>
              </React.Fragment>
            ))}
          </div>

          <h3 style={S.h3}>Desafio 2 — Ambiguidade</h3>
          <p style={S.p}>
            A mesma frase pode ter significados completamente diferentes
            consoante o contexto.{' '}
            <em>"Tonight has been amazing, we should have dinner again."</em> —
            convite a repetir o jantar? Ou comentário sobre a noite? A única
            forma de resolver é através do contexto. Sem contexto, o computador
            não consegue desambiguar com segurança.
          </p>

          <h3 style={S.h3}>Desafio 3 — Generalização (OOD e OOV)</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '1rem',
            }}
          >
            <div style={{ ...S.highlight }}>
              <strong>Out-of-Domain (OOD)</strong>
              <p
                style={{
                  fontSize: '0.88rem',
                  marginBottom: 0,
                  marginTop: '0.4rem',
                  color: 'var(--text-secondary)',
                }}
              >
                Modelo treinado em notícias, usado em relatórios médicos. O
                domínio mudou — o vocabulário e os padrões são diferentes.
              </p>
            </div>
            <div style={{ ...S.highlight }}>
              <strong>Out-of-Vocabulary (OOV)</strong>
              <p
                style={{
                  fontSize: '0.88rem',
                  marginBottom: 0,
                  marginTop: '0.4rem',
                  color: 'var(--text-secondary)',
                }}
              >
                Neologismos, termos técnicos, nomes próprios raros. O modelo
                nunca viu a palavra durante o treino.
              </p>
            </div>
          </div>
          <div style={S.note}>
            {' '}
            A palavra <em>pollution</em> em inglês, <em>pollution</em> em
            francês, <em>polución</em> em espanhol e{' '}
            <em>Umweltverschmutzung</em> em alemão são tratadas como entidades
            completamente distintas por um modelo monolingue.
          </div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 3 === */}
        <div style={S.section}>
          <h2 style={S.h2}>3. O Pipeline de NLP</h2>
          <p style={S.p}>Todo o problema de NLP segue o mesmo esquema base:</p>

          <div style={S.diagram}>
            <svg
              viewBox="0 0 540 90"
              style={{ maxWidth: '100%', height: 'auto' }}
            >
              {[
                ['Corpus', 20, 100],
                ['Feature\nEngineering', 170, 160],
                ['Task', 410, 110],
              ].map(([label, cx, w], i) => (
                <g key={i}>
                  <rect
                    x={cx}
                    y="20"
                    width={w}
                    height="50"
                    rx="10"
                    fill="var(--accent-color)"
                    opacity={0.85 - i * 0.15}
                  />
                  {label.split('\n').map((line, li, arr) => (
                    <text
                      key={li}
                      x={cx + w / 2}
                      y={arr.length > 1 ? 42 + li * 16 : 50}
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      {line}
                    </text>
                  ))}
                </g>
              ))}
              <text
                x="145"
                y="50"
                textAnchor="middle"
                fill="var(--accent-color)"
                fontSize="20"
              >
                →
              </text>
              <text
                x="370"
                y="50"
                textAnchor="middle"
                fill="var(--accent-color)"
                fontSize="20"
              >
                →
              </text>
            </svg>
          </div>

          <h3 style={S.h3}>O Corpus e a Divisão do Dataset</h3>
          <p style={S.p}>
            Um corpus é uma coleção de texto organizada em datasets. A primeira
            decisão ao trabalhar com um corpus é a sua divisão. Fazer isso antes
            de qualquer pré-processamento evita <strong>data leakage</strong> —
            um dos erros mais silenciosos em NLP.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <div style={S.highlight}>
              <strong>Corpus pequeno</strong> (&lt;10k amostras)
              <div
                style={{
                  fontFamily: 'monospace',
                  marginTop: '0.5rem',
                  fontSize: '0.9rem',
                }}
              >
                80% Train / 10% Val / 10% Test
              </div>
            </div>
            <div style={S.highlight}>
              <strong>Corpus grande</strong>
              <div
                style={{
                  fontFamily: 'monospace',
                  marginTop: '0.5rem',
                  fontSize: '0.9rem',
                }}
              >
                Aumentar % de treino + K-fold CV
              </div>
            </div>
          </div>

          <div style={S.note}>
            {' '}
            Com o corpus dividido, o próximo passo é transformar texto em algo
            que um modelo consiga processar — números. Isso passa por{' '}
            <strong>limpar e normalizar o texto</strong> (pré-processamento) e
            depois representá-lo como vetores (Bag-of-Words). É o que veremos em
            detalhe na próxima lecture.
          </div>
        </div>
      </div>
    </div>
  );
}
