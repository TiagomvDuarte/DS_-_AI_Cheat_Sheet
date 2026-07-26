import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const S = {
  page: { maxWidth: 960, margin: '0 auto', padding: '0 1rem 4rem' },
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
    overflowX: 'auto',
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
  code: {
    fontFamily: 'monospace',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--card-border)',
    borderRadius: 8,
    padding: '1rem 1.25rem',
    fontSize: '0.85rem',
    lineHeight: 1.8,
    overflowX: 'auto',
    display: 'block',
    whiteSpace: 'pre',
    marginBottom: '1rem',
  },
};

const EvolutionDiagram = () => {
  const [step, setStep] = useState(0);
  const steps = [
    {
      label: 'Geração 0',
      color: '#4a9eed',
      programs: [
        {
          expr: 'x + 2',
          rmse: '3.21',
          sem: '[3.0, 4.0, 5.0, 6.0, 7.0]',
          note: 'muito simples, alto erro',
        },
        {
          expr: 'sin(x) × 3',
          rmse: '2.84',
          sem: '[2.5, 2.7, 0.4, −2.8, −4.3]',
          note: 'estrutura correcta mas escala errada',
        },
        {
          expr: 'x² − 1',
          rmse: '4.50',
          sem: '[0.0, 3.0, 8.0, 15.0, 24.0]',
          note: 'crescimento quadrático errado',
        },
      ],
      insight:
        'Geração 0: programas aleatórios. Erro elevado. Semânticas muito dispersas. O GSGP vai mover cada programa em direcção ao alvo y = x·sin(x).',
    },
    {
      label: 'Geração 5',
      color: '#4a9eed',
      programs: [
        {
          expr: 'sin(x)·x + 0.3',
          rmse: '0.82',
          sem: '[1.14, 2.18, 0.72, −2.55, −4.32]',
          note: 'GSM convergiu bastante',
        },
        {
          expr: 'x·sin(x)',
          rmse: '0.45',
          sem: '[0.84, 1.82, 0.42, −2.95, −4.79]',
          note: 'perto do alvo!',
        },
        {
          expr: 'sin(x)·x + x/5',
          rmse: '0.61',
          sem: '[1.04, 2.22, 0.90, −2.15, −3.79]',
          note: 'estrutura mais complexa',
        },
      ],
      insight:
        'Geração 5: o GSM moveu os programas em direcção ao alvo. Erro caiu de 3.2 para 0.45. A superfície unimodal garante que cada passo no sentido certo é um progresso.',
    },
    {
      label: 'Geração 20',
      color: '#4a9eed',
      programs: [
        {
          expr: 'x·sin(x)',
          rmse: '0.07',
          sem: '[0.84, 1.82, 0.42, −2.95, −4.79]',
          note: '✓ praticamente perfeito',
        },
        {
          expr: 'sin(x)·x + ε',
          rmse: '0.09',
          sem: '[0.86, 1.84, 0.44, −2.93, −4.77]',
          note: '✓ converge para o mesmo',
        },
        {
          expr: 'x·sin(x+0.01)',
          rmse: '0.08',
          sem: '[0.83, 1.81, 0.43, −2.94, −4.78]',
          note: '✓ semanticamente equivalente',
        },
      ],
      insight:
        'Geração 20: todos os programas convergiram para f(x) = x·sin(x). RMSE < 0.1. A superfície unimodal do espaço semântico garante esta convergência.',
    },
  ];
  const s = steps[step];
  return (
    <div style={S.diagram}>
      <p
        style={{
          fontWeight: 700,
          marginBottom: '0.75rem',
          color: 'var(--text-primary)',
          textAlign: 'center',
        }}
      >
        GSGP a descobrir f(x) = x·sin(x) — evolução ao longo das gerações
      </p>
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '1rem',
          justifyContent: 'center',
        }}
      >
        {steps.map((st, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            style={{
              padding: '0.35rem 0.85rem',
              borderRadius: 20,
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.82rem',
              background: step === i ? st.color : 'var(--bg-primary)',
              color: step === i ? 'white' : 'var(--text-primary)',
              border: `1.5px solid ${step === i ? st.color : 'var(--card-border)'}`,
              transition: 'all 0.2s',
            }}
          >
            {st.label}
          </button>
        ))}
      </div>
      <div
        style={{
          background: 'var(--bg-primary)',
          borderRadius: 10,
          padding: '1rem',
          border: `1.5px solid ${s.color}40`,
        }}
      >
        <div style={{ overflowX: 'auto', marginBottom: '0.75rem' }}>
          <table style={{ ...S.table, marginBottom: 0 }}>
            <thead>
              <tr>
                <th style={S.th}>Expressão descoberta</th>
                <th style={S.th}>RMSE</th>
                <th style={S.th}>Semântica sem(T) ≈</th>
                <th style={S.th}>Observação</th>
              </tr>
            </thead>
            <tbody>
              {s.programs.map((p, i) => (
                <tr key={i}>
                  <td
                    style={{
                      ...S.td,
                      fontFamily: 'monospace',
                      color: s.color,
                      fontWeight: 600,
                    }}
                  >
                    {p.expr}
                  </td>
                  <td
                    style={{
                      ...S.td,
                      fontWeight: 700,
                      color:
                        parseFloat(p.rmse) < 0.5
                          ? '#4a9eed'
                          : parseFloat(p.rmse) < 1.5
                            ? '#4a9eed'
                            : '#4a9eed',
                    }}
                  >
                    {p.rmse}
                  </td>
                  <td
                    style={{
                      ...S.td,
                      fontFamily: 'monospace',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {p.sem}
                  </td>
                  <td style={{ ...S.td, fontSize: '0.82rem' }}>{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          style={{
            background: `${s.color}10`,
            borderRadius: 6,
            padding: '0.6rem 0.9rem',
            borderLeft: `3px solid ${s.color}`,
            fontSize: '0.85rem',
          }}
        >
          <strong>Observação:</strong> {s.insight}
        </div>
      </div>
    </div>
  );
};

const BenchmarkTable = () => (
  <div style={{ overflowX: 'auto' }}>
    <table style={S.table}>
      <thead>
        <tr>
          <th style={S.th}>Benchmark</th>
          <th style={S.th}>Função alvo</th>
          <th style={S.th}>Domínio</th>
          <th style={S.th}>Dificuldade</th>
          <th style={S.th}>GSGP típico (RMSE)</th>
        </tr>
      </thead>
      <tbody>
        {[
          ['Nguyen-1', 'x³ + x² + x', '[−1, 1]', 'Fácil', '< 0.01'],
          ['Nguyen-7', 'ln(x+1) + ln(x²+1)', '[0, 2]', 'Média', '0.02 – 0.05'],
          ['Koza-1', 'x⁴ + x³ + x² + x', '[−1, 1]', 'Média', '< 0.01'],
          [
            'Pagie-1',
            '1/(1+x⁻⁴) + 1/(1+y⁻⁴)',
            '[−5,5]²',
            'Difícil',
            '0.05 – 0.15',
          ],
          [
            'Vladislavleva-1',
            'e^{−x}·x³·cos(x)·sin(x)',
            '[0.1, 5]',
            'Muito difícil',
            '0.10 – 0.40',
          ],
        ].map(([b, f, d, diff, r]) => (
          <tr key={b}>
            <td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>{b}</td>
            <td
              style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.85rem' }}
            >
              {f}
            </td>
            <td
              style={{
                ...S.td,
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
              }}
            >
              {d}
            </td>
            <td style={S.td}>{diff}</td>
            <td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>{r}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ApplicationsExplorer = () => {
  const [sel, setSel] = useState(0);
  const apps = [
    {
      name: 'Bioinformática',
      color: '#4a9eed',
      icon: '',
      desc: 'Descoberta de biomarkers — expressão genética como função de variáveis moleculares.',
      example:
        'GSGP descobre f(gene₁, gene₂, ...) = expressão proteica. Útil porque a fórmula é interpretável por biologistas.',
      advantage:
        'A expressão simbólica descoberta é directamente interpretável — ao contrário de uma rede neuronal.',
      dataset:
        'Gene expression datasets (TCGA, GEO), tipicamente 100–10.000 amostras × 1.000–50.000 genes.',
    },
    {
      name: 'Engenharia Química',
      color: '#4a9eed',
      icon: '',
      desc: 'Modelação de propriedades físico-químicas de compostos a partir de descritores moleculares.',
      example:
        'f(peso_molecular, logP, HBD, HBA, ...) = ponto_de_ebulição. Equações QSPR descobertas automaticamente.',
      advantage:
        'As equações descobertas podem ser analisadas quimicamente, ao contrário de modelos caixa-negra.',
      dataset:
        'Datasets QSAR/QSPR: DeLorean, ESOL, FreeSolv — tipicamente 100–1.000 compostos.',
    },
    {
      name: 'Finanças',
      color: '#4a9eed',
      icon: '',
      desc: 'Descoberta de fórmulas de pricing de opções ou previsão de indicadores financeiros.',
      example:
        'f(S, K, r, σ, T) = preço_opção. GP pode descobrir aproximações da fórmula Black-Scholes.',
      advantage:
        'Modelos interpretáveis — a fórmula pode ser auditada por reguladores. Crítico em finanças.',
      dataset:
        'Dados históricos de opções, series temporais de preços — centenas de milhar de observações.',
    },
    {
      name: 'Física Experimental',
      color: '#4a9eed',
      icon: '',
      desc: 'Descoberta automática de leis físicas a partir de medições experimentais.',
      example:
        'AI Feynman (Udrescu & Tegmark, 2020): descobriu 100 equações do Feynman Symbolic Regression Benchmark.',
      advantage:
        'GP pode descobrir equações simples com precisão elevada — potencial de descoberta científica real.',
      dataset:
        'Feynman SR Benchmark — 100 equações com datasets sintéticos. Pysr e GSGP competem aqui.',
    },
  ];
  const a = apps[sel];
  return (
    <div style={S.diagram}>
      <p
        style={{
          fontWeight: 700,
          marginBottom: '1rem',
          color: 'var(--text-primary)',
        }}
      >
        Aplicações Reais da Regressão Simbólica
      </p>
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '1.25rem',
          flexWrap: 'wrap',
        }}
      >
        {apps.map((ap, i) => (
          <button
            key={i}
            onClick={() => setSel(i)}
            style={{
              padding: '0.4rem 0.9rem',
              borderRadius: 20,
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.82rem',
              background: sel === i ? ap.color : 'var(--bg-primary)',
              color: sel === i ? 'white' : 'var(--text-primary)',
              border: `1.5px solid ${sel === i ? ap.color : 'var(--card-border)'}`,
              transition: 'all 0.2s',
            }}
          >
            {ap.icon} {ap.name}
          </button>
        ))}
      </div>
      <div
        style={{
          background: 'var(--bg-primary)',
          borderRadius: 10,
          padding: '1.25rem',
          border: `1.5px solid ${a.color}30`,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem',
            fontSize: '0.85rem',
          }}
        >
          {[
            { label: 'O que se faz', val: a.desc },
            { label: 'Exemplo concreto', val: a.example },
            { label: 'Vantagem sobre redes neuronais', val: a.advantage },
            { label: 'Dados típicos', val: a.dataset },
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
                  color: a.color,
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem',
                }}
              >
                {label}
              </div>
              <p style={{ fontSize: '0.85rem', margin: 0, lineHeight: 1.7 }}>
                {val}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function NEL3() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/nel" style={S.back}>
          <ArrowLeft size={16} /> Voltar
        </Link>
        <div style={S.tag}>MÓDULO 02</div>
        <h1 style={S.h1}>Regressão Simbólica Aplicada</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. O Problema da Regressão Simbólica</h2>
          <p style={S.p}>
            Dado um conjunto de dados D = &#123;(x₁,y₁), ..., (xₙ,yₙ)&#125;,
            encontrar a expressão matemática f tal que f(xᵢ) ≈ yᵢ para todos os
            exemplos, e que generalize para novos inputs. A especificidade da
            regressão simbólica é que f pode ter qualquer forma — polinómio,
            trigonométrica, exponencial, logarítmica, ou qualquer combinação. O
            algoritmo decide a estrutura e os coeficientes.
          </p>
          <p style={S.p}>
            Este problema pertence à classe dos problemas <em>open-ended</em>: o
            espaço de pesquisa é infinito (todas as expressões matemáticas
            possíveis com o conjunto de funções F e terminais T). O GP e o GSGP
            são os algoritmos de referência para o resolver.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Abordagem</th>
                  <th style={S.th}>Forma assumida</th>
                  <th style={S.th}>Interpretabilidade</th>
                  <th style={S.th}>Flexibilidade</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Regressão Linear',
                    'y = w₁x₁ + w₂x₂ + ... + b',
                    'Alta — equação linear explícita',
                    'Baixa — só captura relações lineares',
                  ],
                  [
                    'Regressão Polinomial',
                    'y = Σ wᵢ xⁱ (grau fixo)',
                    'Média — grau definido a priori',
                    'Média — limitada ao grau escolhido',
                  ],
                  [
                    'Redes Neuronais',
                    'Composição de camadas e activações',
                    'Baixa — caixa negra',
                    'Alta — aproxima qualquer função',
                  ],
                  [
                    'Regressão Simbólica (GP)',
                    'Qualquer expressão do conjunto F ∪ T',
                    'Alta — fórmula explícita',
                    'Alta — espaço de busca ilimitado',
                  ],
                ].map(([a, f, i, fl]) => (
                  <tr key={a}>
                    <td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>
                      {a}
                    </td>
                    <td
                      style={{
                        ...S.td,
                        fontFamily: 'monospace',
                        fontSize: '0.83rem',
                      }}
                    >
                      {f}
                    </td>
                    <td style={S.td}>{i}</td>
                    <td style={S.td}>{fl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>
            A regressão simbólica com GSGP é especialmente poderosa porque a
            superfície unimodal do espaço semântico garante convergência — ao
            contrário do GP clássico que fica preso em ótimos locais do espaço
            genotípico.
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Como o GSGP Resolve a Regressão Simbólica</h2>
          <p style={S.p}>
            A regressão simbólica com GSGP segue o ciclo evolutivo padrão, mas
            com a garantia semântica: cada mutação GSM move o programa na
            direcção do alvo no espaço semântico. O RMSE decresce monotonamente
            com probabilidade 1 se o passo ms for suficientemente pequeno.
          </p>

          <h3 style={S.h3}>Configuração típica</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Parâmetro</th>
                  <th style={S.th}>Valor típico</th>
                  <th style={S.th}>Efeito</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Tamanho da população (N)',
                    '100 – 1.000',
                    'Maior N → mais diversidade, mais custo computacional',
                  ],
                  [
                    'Número de gerações (G)',
                    '100 – 500',
                    'Mais gerações → melhor solução, mas modelos maiores (bloat)',
                  ],
                  [
                    'Passo de mutação (ms)',
                    '0.01 – 0.3',
                    'ms pequeno → passos conservadores; ms grande → saltos arriscados',
                  ],
                  [
                    'Profundidade máxima inicial',
                    '4 – 6',
                    'Controla complexidade dos programas na geração 0',
                  ],
                  [
                    'Conjunto de funções (F)',
                    '{+, −, ×, ÷, sin, cos, exp, log}',
                    'Escolher com base no domínio — mais funções = mais espaço',
                  ],
                  [
                    'Torneio (k)',
                    '5 – 7',
                    'Controla pressão selectiva — k alto → convergência mais rápida',
                  ],
                ].map(([p, v, e]) => (
                  <tr key={p}>
                    <td
                      style={{
                        ...S.td,
                        fontWeight: 600,
                        color: '#4a9eed',
                        fontSize: '0.85rem',
                      }}
                    >
                      {p}
                    </td>
                    <td style={{ ...S.td, fontFamily: 'monospace' }}>{v}</td>
                    <td style={S.td}>{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <EvolutionDiagram />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Benchmarks Standard</h2>
          <p style={S.p}>
            A comunidade de SR usa conjuntos de benchmarks standard para
            comparar algoritmos. Os mais usados são os conjuntos de Nguyen,
            Koza, Pagie e Vladislavleva. O GSGP e o SLIM_GSGP são estado da arte
            em vários destes benchmarks.
          </p>
          <BenchmarkTable />
          <div style={S.note}>
            O GSGP converge rapidamente nos benchmarks fáceis mas pode produzir
            modelos enormes (bloat). O SLIM_GSGP (módulo 4) resolve o bloat
            mantendo a qualidade semântica.
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>
            4. Regressão Simbólica vs Machine Learning Clássico
          </h2>
          <p style={S.p}>
            A regressão simbólica compete com modelos de ML clássicos em tarefas
            onde interpretabilidade é crítica. A sua vantagem principal é
            produzir equações explícitas que podem ser auditadas, analisadas e
            comunicadas a especialistas do domínio.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Critério</th>
                  <th style={S.th}>GSGP (SR)</th>
                  <th style={S.th}>Random Forest</th>
                  <th style={S.th}>XGBoost</th>
                  <th style={S.th}>Rede Neuronal</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Interpretabilidade',
                    'Alta — equação explícita',
                    'Média — feature importance',
                    'Média — feature importance',
                    'Baixa — caixa negra',
                  ],
                  [
                    'Extrapolação',
                    'Boa (depende da expressão)',
                    'Má — não extrapola',
                    'Má — não extrapola',
                    'Variável',
                  ],
                  [
                    'Tempo de treino',
                    'Alto (evolução)',
                    'Rápido',
                    'Rápido',
                    'Médio a alto',
                  ],
                  [
                    'Dados necessários',
                    'Baixo (100–10.000)',
                    'Médio',
                    'Médio',
                    'Alto (10.000+)',
                  ],
                  [
                    'Descoberta científica',
                    'Sim — equações físicas',
                    'Não',
                    'Não',
                    'Não directamente',
                  ],
                ].map(([c, gsgp, rf, xgb, nn]) => (
                  <tr key={c}>
                    <td
                      style={{
                        ...S.td,
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {c}
                    </td>
                    <td style={{ ...S.td, color: '#4a9eed', fontWeight: 600 }}>
                      {gsgp}
                    </td>
                    <td style={S.td}>{rf}</td>
                    <td style={S.td}>{xgb}</td>
                    <td style={S.td}>{nn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
