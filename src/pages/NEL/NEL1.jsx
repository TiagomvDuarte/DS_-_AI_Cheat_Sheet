import React, { useState } from 'react';
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
  },
  tag: {
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
    fontSize: '1.05rem',
    color: 'var(--text-secondary)',
    marginBottom: '3rem',
    lineHeight: 1.7,
  },
  section: { marginBottom: '3.5rem' },
  h2: {
    fontSize: '1.4rem',
    fontWeight: 700,
    color: '#4a9eed',
    borderLeft: '3px solid #4a9eed',
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
  diagram: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--card-border)',
    borderRadius: 12,
    padding: '1.5rem',
    margin: '1.5rem 0',
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
  highlight: {
    background: 'rgba(74,158,237,0.10)',
    border: '1px solid #4a9eed',
    borderRadius: 8,
    padding: '1rem 1.25rem',
    marginBottom: '1.2rem',
  },
  note: {
    background: 'rgba(74,158,237,0.06)',
    borderLeft: '3px solid #4a9eed',
    borderRadius: '0 8px 8px 0',
    padding: '0.75rem 1rem',
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    margin: '1rem 0',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid var(--card-border)',
    margin: '2.5rem 0',
  },
  ul: {
    paddingLeft: '1.4rem',
    color: 'var(--text-primary)',
    lineHeight: 1.9,
    fontSize: '1rem',
  },
  li: { marginBottom: '0.4rem' },
};

const MLParadigmDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p
      style={{
        fontWeight: 700,
        marginBottom: '1.25rem',
        color: 'var(--text-primary)',
      }}
    >
      Paradigma Clássico vs Machine Learning
    </p>
    <svg viewBox="0 0 560 160" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker
          id="arr-ml"
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#4a9eed" />
        </marker>
        <marker
          id="arr-cl"
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#94a3b8" />
        </marker>
      </defs>

      {/* Classic */}
      <text
        x="130"
        y="14"
        textAnchor="middle"
        fill="var(--text-secondary)"
        fontSize="9"
        fontWeight="700"
      >
        MÉTODO CLÁSSICO
      </text>
      {[
        { x: 15, label: 'Problema', color: '#94a3b8' },
        { x: 105, label: 'Algoritmo', color: '#94a3b8' },
        { x: 195, label: 'Programa', color: '#94a3b8' },
      ].map(({ x, label, color }) => (
        <g key={x}>
          <rect
            x={x}
            y={22}
            width={76}
            height={30}
            rx="6"
            fill={`${color}15`}
            stroke={color}
            strokeWidth="1.5"
          />
          <text
            x={x + 38}
            y={41}
            textAnchor="middle"
            fill={color}
            fontSize="9"
            fontWeight="700"
          >
            {label}
          </text>
        </g>
      ))}
      <line
        x1={92}
        y1={37}
        x2={102}
        y2={37}
        stroke="#94a3b8"
        strokeWidth="1.5"
        markerEnd="url(#arr-cl)"
      />
      <line
        x1={182}
        y1={37}
        x2={192}
        y2={37}
        stroke="#94a3b8"
        strokeWidth="1.5"
        markerEnd="url(#arr-cl)"
      />
      <text x={130} y={68} textAnchor="middle" fill="#4a9eed" fontSize="8">
        Falha quando a lógica não é exprimível em regras explícitas
      </text>

      {/* ML */}
      <text
        x="410"
        y="14"
        textAnchor="middle"
        fill="var(--text-secondary)"
        fontSize="9"
        fontWeight="700"
      >
        MACHINE LEARNING
      </text>
      {[
        { x: 295, label: 'Dados (D)', color: '#4a9eed' },
        { x: 385, label: 'Algoritmo\nML', color: '#4a9eed' },
        { x: 475, label: 'Modelo (f)', color: '#4a9eed' },
      ].map(({ x, label, color }) => (
        <g key={x}>
          <rect
            x={x}
            y={22}
            width={76}
            height={30}
            rx="6"
            fill={`${color}15`}
            stroke={color}
            strokeWidth="1.5"
          />
          {label.split('\n').map((l, i) => (
            <text
              key={i}
              x={x + 38}
              y={35 + i * 12}
              textAnchor="middle"
              fill={color}
              fontSize="9"
              fontWeight="700"
            >
              {l}
            </text>
          ))}
        </g>
      ))}
      <line
        x1={372}
        y1={37}
        x2={382}
        y2={37}
        stroke="#4a9eed"
        strokeWidth="1.5"
        markerEnd="url(#arr-ml)"
      />
      <line
        x1={462}
        y1={37}
        x2={472}
        y2={37}
        stroke="#4a9eed"
        strokeWidth="1.5"
        markerEnd="url(#arr-ml)"
      />
      <text x={410} y={68} textAnchor="middle" fill="#4a9eed" fontSize="8">
        O algoritmo aprende o padrão directamente dos exemplos
      </text>

      {/* Examples */}
      <rect
        x="15"
        y="85"
        width="530"
        height="65"
        rx="8"
        fill="var(--bg-primary)"
        stroke="var(--text-secondary)"
        strokeWidth="1"
      />
      <text
        x="280"
        y="100"
        textAnchor="middle"
        fill="var(--text-secondary)"
        fontSize="8.5"
        fontWeight="700"
      >
        PROBLEMAS ONDE O ML É NECESSÁRIO
      </text>
      {[
        { x: 40, label: 'Reconhecimento\nfacial', icon: '' },
        { x: 155, label: 'Diagnóstico\nmédico', icon: '' },
        { x: 270, label: 'Previsão\nde doenças', icon: '' },
        { x: 385, label: 'Design de\nfármacos', icon: '' },
        { x: 490, label: 'Detecção\nde fraude', icon: '' },
      ].map(({ x, label, icon }) => (
        <g key={x}>
          <text x={x} y={118} textAnchor="middle" fontSize="14">
            {icon}
          </text>
          {label.split('\n').map((l, i) => (
            <text
              key={i}
              x={x}
              y={133 + i * 10}
              textAnchor="middle"
              fill="var(--text-secondary)"
              fontSize="7.5"
            >
              {l}
            </text>
          ))}
        </g>
      ))}
    </svg>
  </div>
);

const LearningTypesExplorer = () => {
  const [sel, setSel] = useState(0);
  const types = [
    {
      name: 'Supervisionado',
      color: '#4a9eed',
      what: 'O algoritmo aprende a partir de um conjunto de pares (entrada, saída correcta). Cada exemplo de treino inclui a resposta esperada — o "professor" guia o aprendizagem corrigindo os erros.',
      when: 'Quando existem dados rotulados: exemplos com a resposta correcta conhecida. É o tipo mais comum em aplicações práticas.',
      tasks:
        'Classificação (saída discreta: spam/não-spam, doente/saudável) e Regressão (saída contínua: preço de casa, toxicidade de composto).',
      examples:
        'Filtros de spam, diagnóstico médico por imagem, previsão de preços, detecção de fraude, tradução automática.',
    },
    {
      name: 'Não Supervisionado',
      color: '#4a9eed',
      what: 'O algoritmo aprende a partir de dados sem rótulos — apenas as entradas, sem respostas correctas. O objectivo é descobrir estrutura, padrões ou agrupamentos nos dados.',
      when: 'Quando não existem rótulos ou são demasiado caros de obter. Útil para exploração inicial de dados e descoberta de padrões desconhecidos.',
      tasks:
        'Clustering (agrupar exemplos similares), redução de dimensionalidade, detecção de anomalias, modelos generativos.',
      examples:
        'Segmentação de clientes, compressão de dados, detecção de outliers, análise de tópicos em texto.',
    },
    {
      name: 'Por Reforço',
      color: '#4a9eed',
      what: 'Um agente aprende a tomar decisões interagindo com um ambiente. Recebe recompensas (positivas ou negativas) pelas suas acções e aprende a maximizar a recompensa acumulada ao longo do tempo.',
      when: 'Quando o problema é sequencial — as decisões têm consequências ao longo do tempo. Não há um conjunto de dados fixo; o agente gera a sua própria experiência.',
      tasks:
        'Controlo de robots, jogos, planeamento, sistemas de recomendação com feedback.',
      examples:
        'AlphaGo, ChatGPT (RLHF), robôs autónomos, condução autónoma, trading algorítmico.',
    },
  ];
  const t = types[sel];
  return (
    <div style={S.diagram}>
      <p
        style={{
          fontWeight: 700,
          marginBottom: '1rem',
          color: 'var(--text-primary)',
        }}
      >
        Tipos de Aprendizagem
      </p>
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '1.25rem',
          flexWrap: 'wrap',
        }}
      >
        {types.map((ty, i) => (
          <button
            key={i}
            onClick={() => setSel(i)}
            style={{
              padding: '0.4rem 0.9rem',
              borderRadius: 20,
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.82rem',
              background: sel === i ? ty.color : 'var(--bg-primary)',
              color: sel === i ? 'white' : 'var(--text-primary)',
              border: `1.5px solid ${sel === i ? ty.color : 'var(--card-border)'}`,
              transition: 'all 0.2s',
            }}
          >
            {ty.name}
          </button>
        ))}
      </div>
      <div
        style={{
          background: 'var(--bg-primary)',
          borderRadius: 10,
          padding: '1.25rem',
          border: `1.5px solid ${t.color}30`,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem',
          }}
        >
          {[
            { label: 'O que é', val: t.what },
            { label: 'Quando usar', val: t.when },
            { label: 'Tipos de tarefas', val: t.tasks },
            { label: 'Exemplos reais', val: t.examples },
          ].map(({ label, val }) => (
            <div
              key={label}
              style={{
                background: 'var(--bg-secondary)',
                borderRadius: 8,
                padding: '0.75rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: t.color,
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem',
                }}
              >
                {label}
              </div>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-primary)',
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                {val}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function NEL1() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/nel" style={S.back}>
          <ArrowLeft size={16} /> Voltar
        </Link>
        <div style={S.tag}>Module 1</div>
        <h1 style={S.h1}>Intro ao Machine Learning</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. Porquê Machine Learning?</h2>
          <p style={S.p}>
            No paradigma computacional clássico, um programador analisa o
            problema, concebe um algoritmo e escreve um programa. Este fluxo
            funciona bem quando a lógica é exprimível em regras explícitas —
            ordenar uma lista, calcular um caminho mínimo, verificar uma senha.
            Mas há uma classe vasta de problemas para os quais nenhum ser humano
            consegue articular o algoritmo completo.
          </p>
          <p style={S.p}>
            Reconhecer um rosto numa fotografia — como? Nenhum programador
            consegue escrever regras explícitas suficientemente robustas para
            todos os ângulos, iluminações, expressões e envelhecimentos. Prever
            se um composto molecular terá toxicidade elevada — como? O espaço de
            moléculas possíveis é astronomicamente grande. O Machine Learning
            responde a estas perguntas com uma abordagem diferente: fornecer
            exemplos e deixar o algoritmo descobrir o padrão.
          </p>

          <MLParadigmDiagram />

          <div style={S.note}>
            A definição clássica de Mitchell (1990): "Um programa aprende a
            partir da experiência E em relação a uma classe de tarefas T e
            medida de desempenho P, se o seu desempenho em T, medido por P,
            melhora com a experiência E."
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Aprender uma Função — Formulação Formal</h2>
          <p style={S.p}>
            Quase todo o Machine Learning pode ser visto como uma tentativa de
            aprender uma função a partir de dados. Dado um dataset D com N
            instâncias e M features, procuramos uma função f que mapeie entradas
            em saídas — que generalize o padrão dos dados de treino para
            exemplos novos.
          </p>
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid rgba(22,163,74,0.25)',
              borderRadius: 8,
              padding: '1rem 1.25rem',
              margin: '1rem 0',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'serif',
                fontSize: '1rem',
                color: '#4a9eed',
                marginBottom: '0.4rem',
              }}
            >
              Dados: D = &#123;(x₁, y₁), (x₂, y₂), ..., (xₙ, yₙ)&#125;
            </div>
            <div
              style={{
                fontFamily: 'serif',
                fontSize: '1rem',
                color: '#4a9eed',
              }}
            >
              Objectivo: encontrar f tal que ∀i: f(xᵢ) ≈ yᵢ — e também para
              novos x
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Termo</th>
                  <th style={S.th}>Definição</th>
                  <th style={S.th}>Exemplo concreto</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Função alvo (φ)',
                    'A função desconhecida que queremos aprender',
                    '"Será que este composto é tóxico?" — desconhecida',
                  ],
                  [
                    'Dataset (D)',
                    'O conjunto de exemplos com que treinamos',
                    '10.000 compostos com toxicidade medida em laboratório',
                  ],
                  [
                    'Feature (atributo)',
                    'Uma variável de entrada — coluna do dataset',
                    'Peso molecular, número de ligações, solubilidade',
                  ],
                  [
                    'Valor alvo (yᵢ)',
                    'A saída esperada para cada instância',
                    'Tóxico (1) ou não-tóxico (0)',
                  ],
                  [
                    'Modelo (f)',
                    'A função aprendida pelo algoritmo de ML',
                    'Uma rede neuronal com os pesos treinados',
                  ],
                  [
                    'Generalização',
                    'Capacidade de f se comportar bem em dados novos',
                    'f classifica correctamente compostos nunca vistos',
                  ],
                ].map(([t, d, e]) => (
                  <tr key={t}>
                    <td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>
                      {t}
                    </td>
                    <td style={S.td}>{d}</td>
                    <td
                      style={{
                        ...S.td,
                        color: 'var(--text-secondary)',
                        fontSize: '0.85rem',
                      }}
                    >
                      {e}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Generalização vs Overfitting</h2>
          <p style={S.p}>
            A generalização é o único critério que importa em ML. Um modelo que
            memoriza os dados de treino sem aprender o padrão subjacente é
            inútil no mundo real — quando encontra um exemplo novo, não sabe o
            que fazer.
          </p>
          <p style={S.p}>
            Overfitting acontece quando o modelo é demasiado complexo para a
            quantidade de dados disponíveis: aprende os exemplos específicos de
            treino, incluindo o ruído aleatório, em vez de aprender o padrão
            geral. Um modelo com overfitting tem erro de treino muito baixo mas
            erro de teste elevado — funciona perfeitamente nos dados conhecidos
            e falha nos novos.
          </p>
          <p style={S.p}>
            Underfitting é o problema oposto: o modelo é demasiado simples para
            capturar o padrão nos dados. Tem erro elevado tanto no treino como
            no teste — não aprendeu nem sequer os exemplos de treino.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Situação</th>
                  <th style={S.th}>Erro de treino</th>
                  <th style={S.th}>Erro de teste</th>
                  <th style={S.th}>Diagnóstico</th>
                  <th style={S.th}>Solução</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Ideal',
                    'Baixo',
                    'Baixo',
                    'Boa generalização',
                    'Manter o modelo actual',
                  ],
                  [
                    'Overfitting',
                    'Muito baixo',
                    'Alto',
                    'Modelo demasiado complexo',
                    'Regularização, mais dados, modelo mais simples',
                  ],
                  [
                    'Underfitting',
                    'Alto',
                    'Alto',
                    'Modelo demasiado simples',
                    'Modelo mais complexo, mais features, menos regularização',
                  ],
                  [
                    'Alta variância',
                    'Baixo',
                    'Variável',
                    'Sensível ao conjunto de treino',
                    'Ensemble methods, cross-validation',
                  ],
                ].map(([s, tr, te, d, sol]) => (
                  <tr key={s}>
                    <td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>
                      {s}
                    </td>
                    <td style={S.td}>{tr}</td>
                    <td style={S.td}>{te}</td>
                    <td style={{ ...S.td, color: 'var(--text-secondary)' }}>
                      {d}
                    </td>
                    <td style={{ ...S.td, fontSize: '0.85rem' }}>{sol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Train/Validation/Test Split — A Solução Prática</h3>
          <p style={S.p}>
            Para medir a generalização honestamente, os dados são divididos em
            três conjuntos independentes. O conjunto de treino é usado para
            ajustar os parâmetros do modelo. O conjunto de validação é usado
            para comparar modelos e ajustar hiperparâmetros — é um "teste
            simulado" que não contamina a avaliação final. O conjunto de teste é
            usado uma única vez, no fim, para estimar o desempenho real em
            produção.
          </p>
          <p style={S.p}>
            A divisão típica é 70/15/15 ou 80/10/10. Em datasets pequenos,
            usa-se k-fold cross-validation: os dados são divididos em k
            partições, e o modelo é treinado k vezes, cada vez usando uma
            partição diferente como validação e as restantes como treino. O erro
            final é a média dos k erros de validação.
          </p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Tipos de Aprendizagem</h2>
          <p style={S.p}>
            A presença ou ausência de valores alvo (rótulos) nos dados de treino
            determina fundamentalmente o tipo de problema de aprendizagem e os
            algoritmos aplicáveis.
          </p>
          <LearningTypesExplorer />
        </div>
      </div>
    </div>
  );
}
