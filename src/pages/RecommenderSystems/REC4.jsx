import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './RecommenderSystems';

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

export default function REC4() {
  return (
    <div style={S.page}>
      <Link to="/recommender" style={S.back}>← Recommender Systems</Link>
      <div style={S.badge}>MÓDULO {modules[3].num}</div>
      <h1 style={S.h1}>{modules[3].title}</h1>
      <p style={S.sub}>{modules[3].subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Neural Collaborative Filtering</h2>
        <p style={S.p}>
          <strong>NCF</strong> (He et al., 2017): substitui o produto interno de MF por um MLP para modelar interações utilizador-item não-lineares. A premissa é que relações complexas de preferência não são capturadas por simples produto interno.
        </p>
        <p style={S.p}>
          <strong>Arquitectura:</strong> embedding de utilizador + embedding de item → concatenar → camadas MLP → sigmoid output (probabilidade de interação positiva).
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>NeuMF:</strong> combina GMF (produto elemento-a-elemento dos embeddings → output linear) e MLP num único modelo. Output final: sigmoid(concat(GMF_out, MLP_out) → linear). Treino: binary cross-entropy com negative sampling — 1 positivo + K negativos por amostra (K=4 típico).
          </p>
        </div>
        <p style={S.p}>
          <strong>GMF (Generalized Matrix Factorization):</strong> versão neural do MF clássico — produto elemento-a-elemento dos embeddings seguido de output linear. Mais expressivo que MF mas menos que MLP puro.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 680 260" style={{ width: '100%', height: 'auto' }}>
            <rect width="680" height="260" fill="var(--bg-secondary)" />
            <text x="340" y="20" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">NeuMF — Arquitectura Neural Collaborative Filtering</text>
            {/* Input nodes */}
            <circle cx="100" cy="90" r="22" fill={`${C}25`} stroke={C} strokeWidth="2" />
            <text x="100" y="94" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">User</text>
            <circle cx="100" cy="170" r="22" fill={`${C}25`} stroke={C} strokeWidth="2" />
            <text x="100" y="174" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">Item</text>
            {/* GMF embeddings */}
            <rect x="170" y="52" width="75" height="30" rx={6} fill="rgba(249,115,22,0.06)" stroke={`${C}70`} strokeWidth="1.5" />
            <text x="207" y="71" textAnchor="middle" fill={`${C}cc`} fontSize="10">Emb GMF</text>
            <rect x="170" y="130" width="75" height="30" rx={6} fill="rgba(249,115,22,0.06)" stroke={`${C}70`} strokeWidth="1.5" />
            <text x="207" y="149" textAnchor="middle" fill={`${C}cc`} fontSize="10">Emb GMF</text>
            <line x1="122" y1="90" x2="170" y2="67" stroke={`${C}80`} strokeWidth="1.5" />
            <line x1="122" y1="170" x2="170" y2="145" stroke={`${C}80`} strokeWidth="1.5" />
            {/* GMF merge */}
            <rect x="285" y="85" width="70" height="34" rx={6} fill={`${C}20`} stroke={C} strokeWidth="1.5" />
            <text x="320" y="100" textAnchor="middle" fill={C} fontSize="10" fontWeight="600">⊙ GMF</text>
            <text x="320" y="112" textAnchor="middle" fill="#64748b" fontSize="9">elem-wise</text>
            <line x1="245" y1="67" x2="285" y2="96" stroke={`${C}70`} strokeWidth="1" />
            <line x1="245" y1="145" x2="285" y2="107" stroke={`${C}70`} strokeWidth="1" />
            {/* MLP embeddings */}
            <rect x="170" y="185" width="75" height="30" rx={6} fill="rgba(249,115,22,0.06)" stroke={`${C}50`} strokeWidth="1.5" />
            <text x="207" y="204" textAnchor="middle" fill={`${C}aa`} fontSize="10">Emb MLP</text>
            <rect x="170" y="220" width="75" height="30" rx={6} fill="rgba(249,115,22,0.06)" stroke={`${C}50`} strokeWidth="1.5" />
            <text x="207" y="239" textAnchor="middle" fill={`${C}aa`} fontSize="10">Emb MLP</text>
            <line x1="122" y1="98" x2="170" y2="198" stroke={`${C}50`} strokeWidth="1" strokeDasharray="3,2" />
            <line x1="122" y1="162" x2="170" y2="228" stroke={`${C}50`} strokeWidth="1" strokeDasharray="3,2" />
            {/* MLP block */}
            <rect x="285" y="190" width="70" height="55" rx={6} fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="320" y="210" textAnchor="middle" fill={C} fontSize="10" fontWeight="600">MLP</text>
            <text x="320" y="226" textAnchor="middle" fill="#64748b" fontSize="9">layers</text>
            <text x="320" y="239" textAnchor="middle" fill="#64748b" fontSize="9">ReLU</text>
            <line x1="245" y1="200" x2="285" y2="212" stroke={`${C}60`} strokeWidth="1" />
            <line x1="245" y1="235" x2="285" y2="223" stroke={`${C}60`} strokeWidth="1" />
            {/* Concat + output */}
            <rect x="400" y="138" width="80" height="36" rx={6} fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1.5" />
            <text x="440" y="160" textAnchor="middle" fill="#cbd5e1" fontSize="10">concat</text>
            <line x1="355" y1="102" x2="400" y2="152" stroke={`${C}80`} strokeWidth="1.5" />
            <line x1="355" y1="218" x2="400" y2="162" stroke={`${C}70`} strokeWidth="1.5" />
            <circle cx="570" cy="156" r="24" fill={`${C}25`} stroke={C} strokeWidth="2" />
            <text x="570" y="152" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">σ</text>
            <text x="570" y="166" textAnchor="middle" fill="#94a3b8" fontSize="9">output</text>
            <line x1="480" y1="156" x2="546" y2="156" stroke={C} strokeWidth="1.5" />
            <polygon points="542,151 554,156 542,161" fill={C} />
            <text x="570" y="196" textAnchor="middle" fill="#64748b" fontSize="9">P(interação)</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Modelos Sequenciais</h2>
        <p style={S.p}>
          <strong>Motivação:</strong> a ordem das interações importa — "utilizador viu filme de ação → vai querer outro filme de ação agora." Modelos sequenciais capturam dinâmica temporal de preferências, indo além do perfil estático.
        </p>
        <p style={S.p}>
          <strong>GRU4Rec</strong> (Hidasi et al., 2015): primeira aplicação de RNN a session-based recommendation. Input: sequência de itens de uma sessão; output: próximo item. Treino com session-parallel mini-batches.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>SASRec</strong> (Kang & McAuley, 2018): Self-Attention Sequential Recommendation. Aplica transformers a sequências de itens — capta dependências de longa distância sem os problemas de vanishing gradient das RNNs. Mais eficiente e preciso que GRU4Rec em sequências longas.
          </p>
        </div>
        <p style={S.p}>
          <strong>BERT4Rec</strong> (Sun et al., 2019): treino bidirecional com masked item prediction — mascara itens aleatórios na sequência e treina para os prever (como BERT para texto). Estado da arte em vários benchmarks de sequential recommendation.
        </p>
        <p style={S.p}>
          <strong>Session-based vs. long-term:</strong> sessões curtas (e-commerce, streaming de vídeo) requerem modelos focados nos últimos 5–10 itens; histórico longo (redes sociais, música) beneficia de transformers que capturam preferências de meses ou anos.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 680 175" style={{ width: '100%', height: 'auto' }}>
            <rect width="680" height="175" fill="var(--bg-secondary)" />
            <text x="340" y="20" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">SASRec — Self-Attention sobre Sequência de Itens</text>
            {/* Item sequence */}
            {['Item 1', 'Item 2', 'Item 3', 'Item 4', '?'].map((label, i) => (
              <g key={i}>
                <rect x={30 + i * 110} y={40} width={85} height={36} rx={6}
                  fill={i === 4 ? `${C}25` : 'rgba(249,115,22,0.08)'}
                  stroke={i === 4 ? C : `${C}60`}
                  strokeWidth={i === 4 ? 2 : 1.2} />
                <text x={72 + i * 110} y={62} textAnchor="middle"
                  fill={i === 4 ? C : '#e2e8f0'} fontSize="11" fontWeight={i === 4 ? '700' : '500'}>
                  {label}
                </text>
                {i < 4 && <>
                  <line x1={115 + i * 110} y1={58} x2={136 + i * 110} y2={58} stroke={`${C}80`} strokeWidth="1.5" />
                  <polygon points={`${132+i*110},54 ${140+i*110},58 ${132+i*110},62`} fill={`${C}80`} />
                </>}
              </g>
            ))}
            {/* Self-attention arrows (simplified) */}
            <text x="340" y="100" textAnchor="middle" fill={C} fontSize="11" fontWeight="600">Self-Attention</text>
            <path d="M72,76 Q200,115 332,76" fill="none" stroke={`${C}40`} strokeWidth="1" strokeDasharray="3,2" />
            <path d="M182,76 Q260,110 332,76" fill="none" stroke={`${C}60`} strokeWidth="1" strokeDasharray="3,2" />
            <path d="M292,76 Q310,105 332,76" fill="none" stroke={`${C}80`} strokeWidth="1.5" />
            <polygon points="332,76 328,82 336,82" fill={`${C}80`} />
            {/* Output */}
            <text x="610" y="63" textAnchor="start" fill="#94a3b8" fontSize="11">Próximo item</text>
            <text x="610" y="80" textAnchor="start" fill={C} fontSize="11" fontWeight="600">predição</text>
            <line x1="515" y1="71" x2="604" y2="71" stroke={C} strokeWidth="1.5" />
            <polygon points="600,66 612,71 600,76" fill={C} />
            <text x="340" y="145" textAnchor="middle" fill="#64748b" fontSize="10">Cada item atende a todos os itens anteriores — dependências de longa distância</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Two-Tower Models</h2>
        <p style={S.p}>
          Arquitectura dominante em produção para retrieval em larga escala em Google, Meta e Pinterest. A ideia central é separar a computação do utilizador e do item em duas torres independentes, permitindo pré-computar embeddings de itens offline.
        </p>
        <p style={S.p}>
          <strong>Torre do utilizador:</strong> features do utilizador (histórico, demografia, contexto) → MLP → vetor u de dimensão d. <strong>Torre do item:</strong> features do item (conteúdo, metadados, estatísticas) → MLP → vetor i de dimensão d.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Score:</strong> produto interno u · i (ou cosine similarity). Em serving, os embeddings de todos os itens são pré-computados e indexados em FAISS/ScaNN. Para recomendar a um utilizador, apenas o vetor u precisa de ser calculado em tempo real — depois ANN search sobre o índice de itens.
          </p>
        </div>
        <p style={S.p}>
          <strong>Treino:</strong> in-batch negative sampling — outros itens do batch corrente são usados como negativos. Eficiente: não requer amostrar negativos explicitamente. <strong>Hard negative mining:</strong> negativos difíceis (itens populares não clicados pelo utilizador) melhoram a qualidade dos embeddings de forma significativa.
        </p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Autoencoders e VAEs para RecSys</h2>
        <p style={S.p}>
          <strong>AutoRec</strong> (Sedhain et al., 2015): autoencoder que reconstrói o vetor de ratings de um utilizador ou item. A representação latente comprimida captura preferências. Treina apenas sobre ratings observados (como Funk SVD).
        </p>
        <p style={S.p}>
          <strong>CDAE (Collaborative Denoising Autoencoder):</strong> adiciona ruído de dropout ao input de ratings → modelo aprende a reconstruir versão limpa, tornando-se mais robusto e com melhor capacidade de generalização para itens não vistos.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Mult-VAE</strong> (Liang et al., 2018): variational autoencoder para collaborative filtering com distribuição latente Gaussiana. Regularização via KL divergence força o espaço latente a ser suave. Estado da arte em top-N recommendation em vários benchmarks. VAEs produzem recomendações mais diversas pela incerteza modelada explicitamente.
          </p>
        </div>
        <p style={S.p}>
          <strong>Vantagem dos VAEs:</strong> a incerteza é modelada explicitamente — o encoder produz μ e σ, e o vetor latente z é amostrado de N(μ, σ²). Isto permite recomendações mais diversas e exploração natural do espaço de preferências.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 680 190" style={{ width: '100%', height: 'auto' }}>
            <rect width="680" height="190" fill="var(--bg-secondary)" />
            <text x="340" y="20" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">Mult-VAE para Collaborative Filtering</text>
            {/* Input */}
            <rect x="20" y="55" width="85" height="80" rx={6} fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="62" y="78" textAnchor="middle" fill={C} fontSize="10" fontWeight="600">Ratings</text>
            <text x="62" y="96" textAnchor="middle" fill="#94a3b8" fontSize="10">vetor do</text>
            <text x="62" y="111" textAnchor="middle" fill="#94a3b8" fontSize="10">utilizador</text>
            <text x="62" y="126" textAnchor="middle" fill="#475569" fontSize="9">esparso</text>
            {/* Encoder */}
            <rect x="135" y="45" width="90" height="100" rx={6} fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="180" y="70" textAnchor="middle" fill={C} fontSize="10" fontWeight="600">Encoder</text>
            <text x="180" y="88" textAnchor="middle" fill="#94a3b8" fontSize="10">MLP</text>
            <line x1="105" y1="95" x2="135" y2="95" stroke={C} strokeWidth="1.5" />
            <polygon points="135,90 147,95 135,100" fill={C} />
            {/* Latent */}
            <rect x="258" y="50" width="85" height="90" rx={6} fill={`${C}20`} stroke={C} strokeWidth="2" />
            <text x="300" y="75" textAnchor="middle" fill={C} fontSize="11" fontWeight="700">μ, σ</text>
            <text x="300" y="93" textAnchor="middle" fill="#94a3b8" fontSize="10">z ~ N(μ,σ²)</text>
            <text x="300" y="110" textAnchor="middle" fill="#94a3b8" fontSize="9">reparametrize</text>
            <text x="300" y="125" textAnchor="middle" fill="#94a3b8" fontSize="9">KL divergence</text>
            <line x1="225" y1="95" x2="258" y2="95" stroke={C} strokeWidth="1.5" />
            <polygon points="258,90 270,95 258,100" fill={C} />
            {/* Decoder */}
            <rect x="378" y="45" width="90" height="100" rx={6} fill="rgba(249,115,22,0.06)" stroke={`${C}`} strokeWidth="1.5" />
            <text x="423" y="70" textAnchor="middle" fill={`${C}`} fontSize="10" fontWeight="600">Decoder</text>
            <text x="423" y="88" textAnchor="middle" fill="#94a3b8" fontSize="10">MLP</text>
            <line x1="343" y1="95" x2="378" y2="95" stroke={`${C}`} strokeWidth="1.5" />
            <polygon points="378,90 390,95 378,100" fill={`${C}`} />
            {/* Output */}
            <rect x="502" y="55" width="85" height="80" rx={6} fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="544" y="78" textAnchor="middle" fill={C} fontSize="10" fontWeight="600">Ratings</text>
            <text x="544" y="96" textAnchor="middle" fill="#94a3b8" fontSize="10">reconstru-</text>
            <text x="544" y="111" textAnchor="middle" fill="#94a3b8" fontSize="10">ídos</text>
            <line x1="468" y1="95" x2="502" y2="95" stroke={`${C}`} strokeWidth="1.5" />
            <polygon points="502,90 514,95 502,100" fill={`${C}`} />
            {/* Loss labels */}
            <text x="340" y="165" textAnchor="middle" fill="#94a3b8" fontSize="10">Loss = Recon. Loss (multinomial log-likelihood) + β × KL(q(z|x) ‖ p(z))</text>
          </svg>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Neural Collaborative Filtering</strong> — substitui o produto interno de MF por uma rede neuronal profunda que aprende interacções não-lineares entre embeddings de utilizadores e itens, melhorando a capacidade expressiva sobre MF clássico.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Modelos Sequenciais</strong> — SASRec e BERT4Rec usam atenção sobre o histórico de interacções para capturar padrões temporais — "o utilizador viu A, B, C → vai gostar de D"; superam MF em plataformas com forte sequencialidade (streaming, e-commerce).</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Two-Tower Models</strong> — arquitectura com torre do utilizador e torre do item que geram embeddings independentes optimizados para ANN retrieval; é o padrão industrial (YouTube, Pinterest) por permitir pré-computar embeddings de itens offline.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Autoencoders e VAEs para RecSys</strong> — autoencoders aprendem representações compactas do histórico de interacções e reconstroem ratings em falta; VAEs adicionam regularização probabilística melhorando generalização e diversidade das recomendações.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
