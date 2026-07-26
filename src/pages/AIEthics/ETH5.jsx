import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './AIEthics';

const C = '#4a9eed';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    marginBottom: '2rem',
  },
  badge: {
    display: 'inline-block',
    background: 'transparent',
    color: C,
    border: `1.5px solid ${C}`,
    fontSize: '0.72rem',
    fontWeight: 700,
    padding: '0.2rem 0.7rem',
    borderRadius: 20,
    marginBottom: '0.75rem',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
  },
  h1: {
    fontSize: '2rem',
    fontWeight: 800,
    color: 'var(--text-primary)',
    marginBottom: '0.4rem',
  },
  sub: {
    color: 'var(--text-secondary)',
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '2.5rem',
  },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color: C, marginBottom: '1rem' },
  highlight: {
    background: `${C}15`,
    borderLeft: `3px solid ${C}`,
    padding: '0.85rem 1.1rem',
    borderRadius: '0 8px 8px 0',
    marginBottom: '1rem',
  },
  note: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--card-border)',
    padding: '0.85rem 1.1rem',
    borderRadius: 8,
    marginBottom: '1rem',
  },
  p: {
    color: 'var(--text-secondary)',
    lineHeight: 1.75,
    marginBottom: '0.85rem',
  },
  diagram: {
    background: 'var(--bg-secondary)',
    borderRadius: 12,
    padding: '1.5rem',
    marginBottom: '1rem',
    overflowX: 'auto',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid var(--card-border)',
    margin: '2rem 0',
  },
};

export default function ETH5() {
  return (
    <div style={S.page}>
      <Link to="/ai-ethics" style={S.back}>
        ← Voltar ao curso
      </Link>
      <div style={S.badge}>{modules[4].num} — AI ETHICS &amp; GOVERNANCE</div>
      <h1 style={S.h1}>{modules[4].title}</h1>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Frameworks de Governance</h2>
        <p style={S.p}>
          O{' '}
          <strong>NIST AI Risk Management Framework (AI RMF 1.0, 2023)</strong>{' '}
          organiza a gestão de risco de IA em quatro funções: GOVERN, MAP,
          MEASURE e MANAGE. Embora voluntário, tornou-se amplamente adotado pelo
          setor privado norte-americano e pelas agências federais como
          referência de boas práticas.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 480 200" width="100%" style={{ display: 'block' }}>
            {/* Four boxes in a cycle */}
            {[
              { label: 'GOVERN', x: 60, y: 60, desc: 'Cultura & políticas' },
              { label: 'MAP', x: 270, y: 60, desc: 'Contexto & risco' },
              { label: 'MEASURE', x: 270, y: 130, desc: 'Análise & avaliação' },
              { label: 'MANAGE', x: 60, y: 130, desc: 'Priorizar & tratar' },
            ].map((b, i) => (
              <g key={i}>
                <rect
                  x={b.x}
                  y={b.y}
                  width="140"
                  height="48"
                  rx="8"
                  fill={`${C}15`}
                  stroke={C}
                  strokeWidth="1.8"
                />
                <text
                  x={b.x + 70}
                  y={b.y + 20}
                  textAnchor="middle"
                  fill={C}
                  fontSize="13"
                  fontWeight="800"
                >
                  {b.label}
                </text>
                <text
                  x={b.x + 70}
                  y={b.y + 36}
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="10"
                >
                  {b.desc}
                </text>
              </g>
            ))}
            {/* Arrows forming cycle */}
            {/* GOVERN → MAP */}
            <line
              x1="200"
              y1="84"
              x2="270"
              y2="84"
              stroke={`${C}80`}
              strokeWidth="1.5"
              markerEnd="url(#arrR)"
            />
            {/* MAP → MEASURE */}
            <line
              x1="340"
              y1="108"
              x2="340"
              y2="130"
              stroke={`${C}80`}
              strokeWidth="1.5"
              markerEnd="url(#arrR)"
            />
            {/* MEASURE → MANAGE */}
            <line
              x1="270"
              y1="154"
              x2="200"
              y2="154"
              stroke={`${C}80`}
              strokeWidth="1.5"
              markerEnd="url(#arrR)"
            />
            {/* MANAGE → GOVERN */}
            <line
              x1="130"
              y1="130"
              x2="130"
              y2="108"
              stroke={`${C}80`}
              strokeWidth="1.5"
              markerEnd="url(#arrR)"
            />
            <defs>
              <marker
                id="arrR"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L8,3 z" fill={C} />
              </marker>
            </defs>
          </svg>
        </div>

        <p style={S.p}>
          A <strong>ISO/IEC 42001:2023</strong> é o primeiro standard
          internacional para sistemas de gestão de IA, baseado na estrutura da
          ISO 27001 (segurança da informação) e auditável para certificação. O{' '}
          <strong>Microsoft Responsible AI Standard</strong> define 6 princípios
          — fairness, reliability, privacy, inclusiveness, transparency e
          accountability — com cerca de 30 práticas concretas de implementação.
        </p>
        <p style={S.p}>
          O <strong>Google PAIR Guidebook</strong> complementa estes frameworks
          com práticas centradas no utilizador para equipas de produto que
          desenvolvem sistemas de IA.
        </p>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Model Cards e Datasheets</h2>
        <p style={S.p}>
          Os <strong>Model Cards</strong> (Mitchell et al., Google, 2019) são
          documentos padronizados que acompanham modelos de ML, cobrindo: usos
          pretendidos, usos fora do âmbito, métricas de performance por subgrupo
          demográfico, dados de avaliação e considerações éticas identificadas.
        </p>
        <p style={S.p}>
          Os <strong>Datasheets for Datasets</strong> (Gebru et al., Microsoft,
          2018) documentam conjuntos de dados com informação sobre motivação,
          composição, processo de recolha, pré-processamento, usos recomendados,
          distribuição e manutenção. A adoção tornou-se obrigatória no Hugging
          Face Model Hub e é promovida pelo Google Cloud AI e GitHub.
        </p>
        <div style={S.highlight}>
          <strong>Limitação crítica:</strong> A grande maioria dos model cards e
          datasheets são auto-reportados, sem verificação independente. Existe
          uma tendência documentada para omitir limitações negativas e
          enviesamentos problemáticos, reduzindo a utilidade prática destes
          documentos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Red Teaming e AI Auditing</h2>
        <p style={S.p}>
          O <strong>red teaming</strong> consiste em equipas adversariais que
          tentam sistematicamente encontrar falhas nos sistemas antes do
          deployment. A Anthropic, OpenAI e Google DeepMind utilizam red teams
          internos e externos especializados. Os ataques testados incluem
          jailbreaking, prompt injection, exfiltração de informação de treino,
          manipulação de outputs e bypasses de filtros de conteúdo.
        </p>
        <p style={S.p}>
          O <strong>third-party auditing</strong> independente é realizado por
          organizações como a METR (anteriormente ARC Evals), Apollo Research e
          Alignment Research Center, que avaliam modelos frontier para
          capacidades perigosas antes da sua disponibilização pública. O EU AI
          Act exige que sistemas de alto risco e GPAI com impacto sistémico
          sejam sujeitos a avaliações por terceiros notificados.
        </p>
        <div style={S.note}>
          <strong>Ferramentas de red teaming:</strong> Microsoft PyRIT (Python
          Risk Identification Tool), Garak (scanner de vulnerabilidades para
          LLMs), Promptmap. Estas ferramentas automatizam parte do processo de
          descoberta de falhas, mas não substituem avaliação humana
          especializada.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Responsible AI em Produção</h2>
        <p style={S.p}>
          Os <strong>AI Impact Assessments</strong> devem ser realizados antes
          de qualquer deployment, avaliando o potencial de dano para grupos
          vulneráveis, impactos distributivos e riscos sistémicos. Em produção,
          são essenciais mecanismos de monitorização contínua: detecção de
          concept drift, acompanhamento de métricas de fairness e alertas
          automáticos para desvios de performance.
        </p>
        <p style={S.p}>
          Para decisões de alto risco — crédito, contratação, saúde — o
          princípio de <strong>human-in-the-loop</strong>
          exige revisão humana final antes de cada decisão consequente. O AI Act
          e o Digital Services Act da UE incluem proteções para denunciantes e
          obrigam plataformas a publicar relatórios de transparência.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 580 140" width="100%" style={{ display: 'block' }}>
            {[
              { label: 'Design', icon: '◈', x: 50 },
              { label: 'Build', icon: '', x: 160 },
              { label: 'Deploy', icon: '▶', x: 270 },
              { label: 'Monitor', icon: '◉', x: 380 },
              { label: 'Retire', icon: '', x: 490 },
            ].map((s, i) => (
              <g key={i}>
                <circle
                  cx={s.x + 45}
                  cy="55"
                  r="32"
                  fill={`${C}12`}
                  stroke={C}
                  strokeWidth="1.8"
                />
                <text
                  x={s.x + 45}
                  y="50"
                  textAnchor="middle"
                  fill={C}
                  fontSize="16"
                >
                  {s.icon}
                </text>
                <text
                  x={s.x + 45}
                  y="67"
                  textAnchor="middle"
                  fill={C}
                  fontSize="10"
                  fontWeight="700"
                >
                  {s.label}
                </text>
                {/* checkpoint */}
                <rect
                  x={s.x + 18}
                  y="100"
                  width="55"
                  height="14"
                  rx="4"
                  fill={`${C}20`}
                  stroke={`${C}60`}
                  strokeWidth="1"
                />
                <text
                  x={s.x + 45}
                  y="109"
                  textAnchor="middle"
                  fill={`${C}cc`}
                  fontSize="8"
                >
                  checkpoint
                </text>
                <line
                  x1={s.x + 45}
                  y1="87"
                  x2={s.x + 45}
                  y2="98"
                  stroke={`${C}50`}
                  strokeWidth="1"
                  strokeDasharray="3 2"
                />
                {/* arrow to next */}
                {i < 4 && (
                  <line
                    x1={s.x + 77}
                    y1="55"
                    x2={s.x + 123}
                    y2="55"
                    stroke={`${C}80`}
                    strokeWidth="1.5"
                    markerEnd="url(#arrP)"
                  />
                )}
              </g>
            ))}
            {/* Return arrow from Retire to Design — arc */}
            <path
              d="M554,27 Q558,20 292,18 Q26,16 62,48"
              fill="none"
              stroke={`${C}40`}
              strokeWidth="1.2"
              strokeDasharray="5 3"
              markerEnd="url(#arrP)"
            />
            <defs>
              <marker
                id="arrP"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L8,3 z" fill={C} />
              </marker>
            </defs>
          </svg>
        </div>

        <p style={S.p}>
          Casos históricos de deployment responsável incluem o cancelamento do
          Project Maven pela Google em 2018 após pressão interna de engenheiros,
          a saída da IBM do negócio de reconhecimento facial em 2020 por razões
          éticas, e a pausa da Amazon na venda do sistema Rekognition a
          entidades policiais entre 2020 e 2023.
        </p>
      </div>
    </div>
  );
}
