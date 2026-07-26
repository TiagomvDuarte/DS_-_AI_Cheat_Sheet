import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './RecommenderSystems';

const C = '#4a9eed';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: C, border: `1.5px solid ${C}`, fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color: C, borderLeft: `3px solid ${C}`, paddingLeft: '0.85rem', marginBottom: '1rem' },
  highlight: { background: `${C}15`, borderLeft: `3px solid ${C}`, padding: '0.85rem 1.1rem', borderRadius: '0 8px 8px 0', marginBottom: '1rem' },
  note: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', padding: '0.85rem 1.1rem', borderRadius: 8, marginBottom: '1rem' },
  p: { color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '0.85rem' },
  diagram: { background: 'var(--bg-secondary)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', overflowX: 'auto' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2rem 0' },
};

export default function REC8() {
  return (
    <div style={S.page}>
      <Link to="/recommender" style={S.back}>← Recommender Systems</Link>
      <div style={S.badge}>MÓDULO {modules[7].num}</div>
      <h1 style={S.h1}>{modules[7].title}</h1>

      <div style={S.section}>
        <h2 style={S.h2}>1. LLMs como Motores de Recomendação</h2>
        <p style={S.p}>
          O paradigma tradicional de RecSys assenta em embeddings especializados aprendidos a partir de dados de interação. Os <strong>LLMs</strong> trazem uma alternativa: usar o conhecimento do mundo pre-treinado para entender preferências descritas em linguagem natural e recomendar sem depender exclusivamente de dados históricos de interação.
        </p>
        <p style={S.p}>
          Em <strong>zero-shot prompting</strong>, instruções do tipo "O utilizador gostou de X, Y, Z. Sugere 5 filmes similares" produzem resultados surpreendentemente competitivos em benchmarks públicos, especialmente em domínios bem representados no pre-treino. Isto é notável porque o modelo nunca foi explicitamente treinado para RecSys.
        </p>
        <div style={S.highlight}>
          <strong>P5</strong> (Pretrain, Personalize, Predict — Geng et al., 2022): framework unificado que formula <em>todas</em> as tarefas de RecSys — rating prediction, retrieval, explanation, sequential recommendation — como problemas seq2seq com T5. Um único modelo com um único formato de texto lida com a diversidade de tarefas. <strong>TALLRec</strong> (Bao et al., 2023) aplica instruction fine-tuning a LLaMA especificamente para recomendação, com prompts do tipo "Given a user's history of liked books: [...]. Would the user like [book]?"
        </div>
        <p style={S.p}>
          A vantagem mais clara dos LLMs é a captura de <strong>conhecimento semântico do mundo</strong>: o modelo sabe que Tarantino e Scorsese têm estilos cinematográficos relacionados sem precisar de dados de co-visualização. Isto é especialmente valioso para cold start e para domínios com poucos dados de interação.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 520 160" width="100%" style={{ display: 'block' }}>
            <text x="260" y="18" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="600">P5 — Framework Unificado de Recomendação com T5</text>
            {/* Input tasks */}
            <rect x="10" y="38" width="105" height="25" rx="5" fill="rgba(74,158,237,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="62" y="55" textAnchor="middle" fill="#94a3b8" fontSize="9">Rating Prediction</text>
            <rect x="10" y="70" width="105" height="25" rx="5" fill="rgba(74,158,237,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="62" y="87" textAnchor="middle" fill="#94a3b8" fontSize="9">Item Retrieval</text>
            <rect x="10" y="102" width="105" height="25" rx="5" fill="rgba(74,158,237,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="62" y="119" textAnchor="middle" fill="#94a3b8" fontSize="9">Explanation</text>
            <rect x="10" y="134" width="105" height="22" rx="5" fill="rgba(74,158,237,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="62" y="149" textAnchor="middle" fill="#94a3b8" fontSize="9">Sequential RecSys</text>
            {/* Unified text format */}
            <rect x="140" y="50" width="115" height="80" rx="8" fill={`${C}15`} stroke={C} strokeWidth="1.5" />
            <text x="197" y="72" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">Formato de Texto</text>
            <text x="197" y="86" textAnchor="middle" fill="#94a3b8" fontSize="8">Unificado</text>
            <text x="197" y="100" textAnchor="middle" fill="#64748b" fontSize="8">"User liked X, Y.</text>
            <text x="197" y="112" textAnchor="middle" fill="#64748b" fontSize="8">Recommend Z?"</text>
            <text x="197" y="124" textAnchor="middle" fill="#64748b" fontSize="8">→ "Yes / No / Item"</text>
            {/* Arrows to unified */}
            <line x1="115" y1="51" x2="140" y2="75" stroke="var(--card-border)" strokeWidth="1" markerEnd="url(#arr8g)" />
            <line x1="115" y1="83" x2="140" y2="88" stroke="var(--card-border)" strokeWidth="1" markerEnd="url(#arr8g)" />
            <line x1="115" y1="115" x2="140" y2="108" stroke="var(--card-border)" strokeWidth="1" markerEnd="url(#arr8g)" />
            <line x1="115" y1="145" x2="140" y2="120" stroke="var(--card-border)" strokeWidth="1" markerEnd="url(#arr8g)" />
            {/* T5 encoder-decoder */}
            <rect x="278" y="50" width="110" height="80" rx="8" fill="rgba(74,158,237,0.06)" stroke="#475569" strokeWidth="1.5" />
            <text x="333" y="80" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="700">T5</text>
            <text x="333" y="96" textAnchor="middle" fill="#94a3b8" fontSize="9">Encoder-Decoder</text>
            <text x="333" y="110" textAnchor="middle" fill="#475569" fontSize="8">fine-tuned em</text>
            <text x="333" y="122" textAnchor="middle" fill="#475569" fontSize="8">todas as tarefas</text>
            <line x1="255" y1="90" x2="278" y2="90" stroke={C} strokeWidth="2" markerEnd="url(#arr8c)" />
            {/* Output */}
            <rect x="410" y="62" width="100" height="56" rx="8" fill={`${C}20`} stroke={C} strokeWidth="2" />
            <text x="460" y="84" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">Output</text>
            <text x="460" y="100" textAnchor="middle" fill="#94a3b8" fontSize="8">rating / lista /</text>
            <text x="460" y="112" textAnchor="middle" fill="#94a3b8" fontSize="8">explicação em texto</text>
            <line x1="388" y1="90" x2="410" y2="90" stroke={C} strokeWidth="2" markerEnd="url(#arr8c)" />
            <defs>
              <marker id="arr8c" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill={C} />
              </marker>
              <marker id="arr8g" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#475569" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Recomendação Conversacional</h2>
        <p style={S.p}>
          Os <strong>Conversational Recommendation Systems (CRS)</strong> operam em modo de diálogo multi-turno: o sistema clarifica progressivamente as preferências do utilizador através de perguntas e recomendações iterativas, em vez de produzir uma lista única a partir de um histórico estático.
        </p>
        <p style={S.p}>
          O pipeline tradicional de CRS é complexo e frágil: NLU para compreender a intenção, um gestor de diálogo para decidir a próxima ação (perguntar, recomendar, clarificar), um módulo de recomendação para gerar candidatos, e NLG para formular a resposta. Cada componente pode falhar e os erros propagam-se ao longo do pipeline.
        </p>
        <div style={S.note}>
          <strong>LLM-based CRS:</strong> um único LLM serve como backbone unificado — compreende linguagem natural, mantém o contexto do diálogo, e gera recomendações e explicações num único modelo. Exemplos reais: <em>Spotify DJ</em> (IA que contextualiza músicas em voz), <em>Amazon Rufus</em> (chatbot de shopping com contexto de compra), <em>Google Shopping com Gemini</em>. Os desafios incluem hallucination de itens inexistentes, manutenção de contexto em diálogos longos, e latência de resposta.
        </div>
        <p style={S.p}>
          Modelos como <strong>UNICORN</strong> e <strong>KGSF</strong> integram knowledge graphs no diálogo para melhorar a explicabilidade e reduzir hallucination — o sistema só pode recomendar entidades que existam no KG, garantindo que os itens sugeridos são reais e que as justificações são factuais.
        </p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. RAG para RecSys</h2>
        <p style={S.p}>
          O <strong>Retrieval-Augmented Generation (RAG)</strong> aplicado a recomendação combina o melhor dos dois mundos: recuperar itens reais do catálogo (evitando hallucination) e usar um LLM para gerar explicações personalizadas ricas. O pipeline é: preferência do utilizador → embedding → ANN search no catálogo → top-K itens como contexto → LLM gera recomendação com explicação.
        </p>
        <p style={S.p}>
          A <strong>indexação do catálogo</strong> usa modelos de embedding de texto (text-embedding-3 da OpenAI, E5, BGE) para converter descrições de itens em vetores, indexados em FAISS ou Pinecone. Quando chega um pedido, o embedding da preferência do utilizador é comparado por similaridade coseno contra todos os itens do catálogo em milissegundos.
        </p>
        <div style={S.highlight}>
          <strong>LLM4Rec</strong> (Xi et al., 2023): usar LLMs para <em>data augmentation</em> — gerar descrições sintéticas de itens com pouco conteúdo textual original, melhorando significativamente o cold start de itens novos. O LLM enriquece os metadados do item, que depois são usados para criar embeddings de melhor qualidade.
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 540 120" width="100%" style={{ display: 'block' }}>
            <text x="270" y="18" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="600">Pipeline RAG para Recomendação Personalizada</text>
            {/* User */}
            <rect x="10" y="42" width="90" height="40" rx="6" fill={`${C}20`} stroke={C} strokeWidth="1.5" />
            <text x="55" y="59" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">Preferência</text>
            <text x="55" y="73" textAnchor="middle" fill="#94a3b8" fontSize="8">do utilizador</text>
            {/* Retriever */}
            <rect x="120" y="42" width="90" height="40" rx="6" fill="rgba(74,158,237,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="165" y="59" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="600">Retriever</text>
            <text x="165" y="73" textAnchor="middle" fill="#475569" fontSize="8">FAISS / Pinecone</text>
            {/* Catalog */}
            <rect x="230" y="42" width="90" height="40" rx="6" fill="rgba(74,158,237,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="275" y="59" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="600">Catálogo</text>
            <text x="275" y="73" textAnchor="middle" fill="#475569" fontSize="8">Top-K itens</text>
            {/* LLM */}
            <rect x="340" y="42" width="80" height="40" rx="6" fill="rgba(74,158,237,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="380" y="62" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="600">LLM</text>
            {/* Output */}
            <rect x="440" y="32" width="90" height="60" rx="6" fill={`${C}20`} stroke={C} strokeWidth="1.5" />
            <text x="485" y="52" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">Recomendação</text>
            <text x="485" y="66" textAnchor="middle" fill="#94a3b8" fontSize="8">personalizada</text>
            <text x="485" y="80" textAnchor="middle" fill="#94a3b8" fontSize="8">com explicação</text>
            {/* Arrows */}
            <line x1="100" y1="62" x2="120" y2="62" stroke={C} strokeWidth="2" markerEnd="url(#arr8r)" />
            <line x1="210" y1="62" x2="230" y2="62" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr8rg)" />
            <line x1="320" y1="62" x2="340" y2="62" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr8rg)" />
            <line x1="420" y1="62" x2="440" y2="62" stroke={C} strokeWidth="2" markerEnd="url(#arr8r)" />
            {/* Label under retriever */}
            <text x="165" y="96" textAnchor="middle" fill="#475569" fontSize="8">embed + ANN search</text>
            <defs>
              <marker id="arr8r" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill={C} />
              </marker>
              <marker id="arr8rg" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#475569" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Desafios e Futuro</h2>
        <p style={S.p}>
          <strong>Latência:</strong> LLMs são demasiado lentos para retrieval em tempo real com milhões de itens. A solução prática é usar embeddings de LLMs calculados offline para indexar o catálogo e o perfil do utilizador, reservando a geração de texto apenas para as explicações — que podem ser produzidas em paralelo ou com ligeiro atraso.
        </p>
        <p style={S.p}>
          <strong>Custo:</strong> a inferência de GPT-4 é 100 a 1000 vezes mais cara do que Collaborative Filtering tradicional. Este custo só se justifica em interações de alto valor (assistente de compras, recomendação de investimentos, concierge personalizado) onde a qualidade e explicabilidade da recomendação têm impacto direto em conversão ou retenção.
        </p>
        <div style={S.note}>
          <strong>Bias e Privacidade:</strong> os LLMs amplificam popularity bias do seu corpus de treino — falam mais de blockbusters e de culturas anglófonas, sub-representando nichos e conteúdos em línguas menos representadas. No plano da privacidade, enviar o histórico do utilizador para APIs externas levanta questões GDPR sérias; modelos on-premise (Llama, Mistral, Gemma) são a alternativa para contextos regulados.
        </div>
        <p style={S.p}>
          <strong>Futuro:</strong> os próximos desenvolvimentos apontam para modelos multimodais capazes de recomendar a partir de imagens e voz, agentes autónomos de shopping que executam tarefas completas (pesquisar, comparar, comprar) em nome do utilizador, e RecSys como camada de personalização universal integrada em todos os pontos de contacto digitais — do motor de busca ao assistente de voz ao feed de conteúdos.
        </p>
      </div>

    </div>
  );
}
