import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './SpeechAudio';

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

export default function AUD7() {
  return (
    <div style={S.page}>
      <Link to="/speech-audio" style={S.back}>← Speech & Audio AI</Link>
      <div style={S.badge}>MÓDULO {modules[0].num}</div>
      <h1 style={S.h1}>{modules[6].title}</h1>
      <p style={S.sub}>{modules[6].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Speech Translation — Fundamentos</h2>
        <p style={S.p}>
          A tradução automática de fala (Speech Translation, ST) converte audio numa língua numa representação textual noutra língua. A abordagem <strong>cascade</strong> encadeia dois sistemas independentes: um ASR que transcreve o audio para texto na língua fonte, seguido de um sistema de Machine Translation que traduz esse texto. Esta arquitectura modular é robusta e beneficia de décadas de desenvolvimento independente em ASR e MT — mas os erros de ASR propagam-se para a tradução, e a latência é a soma das duas componentes.
        </p>
        <p style={S.p}>
          Os modelos <strong>end-to-end</strong> aprendem o mapeamento directo de audio para texto alvo, sem representação intermédia explícita. São mais compactos, permitem optimização conjunta de todos os parâmetros e evitam a propagação de erros — mas o treino é mais difícil porque os dados paralelos (audio, tradução) são muito mais escassos do que dados de ASR ou MT isolados.
        </p>
        <p style={S.p}>
          Os datasets principais são o <strong>MuST-C</strong> (cerca de 180 horas por par de línguas, 14 línguas alvo, baseado em TED Talks), o <strong>CoVoST 2</strong> (2 880 horas, 21 línguas fonte para inglês, derivado do Common Voice) e o <strong>FLEURS</strong> (102 línguas, avaliação multilingue). A qualidade é medida com <strong>BLEU score</strong> (sobreposição de n-gramas com referência humana) e <strong>COMET</strong> (modelo neuronal de avaliação de qualidade de tradução, com correlação mais alta com julgamentos humanos).
        </p>

        {/* SVG: cascade vs E2E comparison */}
        <div style={S.diagram}>
          <svg viewBox="0 0 760 200" width="100%" style={{ display: 'block' }}>
            <text x="20" y="18" fill="#64748b" fontSize="10" fontWeight="700">CASCADE</text>

            <rect x="10" y="28" width="80" height="36" rx="6" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="50" y="50" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">AUDIO</text>

            <polygon points="96,46 112,46 112,42 124,46 112,50 112,46" fill={C} />

            <rect x="130" y="28" width="80" height="36" rx="6" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="170" y="44" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">ASR</text>
            <text x="170" y="57" textAnchor="middle" fill="#94a3b8" fontSize="8">→ texto fonte</text>

            {/* error arrow */}
            <path d="M 170 64 Q 170 80 230 80 Q 290 80 290 64" fill="none" stroke="#f97316" strokeWidth="1.2" strokeDasharray="3,2" />
            <text x="230" y="74" textAnchor="middle" fill="#f97316" fontSize="8">erros propagam-se</text>

            <polygon points="216,46 232,46 232,42 244,46 232,50 232,46" fill={C} />

            <rect x="250" y="28" width="80" height="36" rx="6" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="290" y="44" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">MT</text>
            <text x="290" y="57" textAnchor="middle" fill="#94a3b8" fontSize="8">→ texto alvo</text>

            <polygon points="336,46 352,46 352,42 364,46 352,50 352,46" fill={C} />

            <rect x="370" y="28" width="90" height="36" rx="6" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="415" y="50" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">TRADUÇÃO</text>

            {/* E2E */}
            <text x="20" y="118" fill="#64748b" fontSize="10" fontWeight="700">END-TO-END</text>

            <rect x="10" y="128" width="80" height="36" rx="6" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="50" y="150" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">AUDIO</text>

            <polygon points="96,146 112,146 112,142 124,146 112,150 112,146" fill={C} />

            <rect x="130" y="118" width="200" height="56" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="2" />
            <text x="230" y="142" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">DIRECT MODEL</text>
            <text x="230" y="158" textAnchor="middle" fill="#94a3b8" fontSize="9">SeamlessM4T · Whisper</text>
            <text x="230" y="170" textAnchor="middle" fill="#64748b" fontSize="8">gradientes end-to-end</text>

            <polygon points="336,146 352,146 352,142 364,146 352,150 352,146" fill={C} />

            <rect x="370" y="128" width="90" height="36" rx="6" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="415" y="150" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">TRADUÇÃO</text>

            {/* latency labels */}
            <text x="490" y="50" fill="#94a3b8" fontSize="9">alta latência</text>
            <text x="490" y="62" fill="#94a3b8" fontSize="8">(ASR + MT em série)</text>
            <text x="490" y="150" fill="#94a3b8" fontSize="9">menor latência</text>
            <text x="490" y="162" fill="#94a3b8" fontSize="8">(modelo único)</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. SeamlessM4T — Meta AI</h2>
        <p style={S.p}>
          O <strong>SeamlessM4T</strong> (Meta AI, 2023) é um modelo único capaz de realizar speech-to-text, speech-to-speech, text-to-speech e text-to-text em mais de 100 línguas. O nome sintetiza o objectivo: <em>Massively Multilingual & Multimodal Machine Translation</em> — uma única arquitectura treinada conjuntamente para todos estes tasks.
        </p>
        <p style={S.p}>
          Arquitecturalmente, o SeamlessM4T combina um encoder <strong>w2v-BERT</strong> (para processar audio) com um decoder <strong>mBART</strong> (para gerar texto) e um vocoder neural (para sintetizar fala no output). O ponto central é um espaço semântico partilhado entre modalidades: os embeddings de audio e texto da mesma utterance ficam próximos, o que permite transferência cross-modal eficiente.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>SeamlessStreaming</strong> é a versão otimizada para tradução simultânea em tempo real, com latência inferior a 2 segundos. Usa monotonic attention para traduzir enquanto o speaker ainda fala. O <strong>SeamlessExpressive</strong> vai além do conteúdo semântico e preserva o ritmo, prosódia e estilo de fala do speaker original na língua alvo — crucial para dubbing automático.
          </p>
        </div>
        <p style={S.p}>
          As aplicações práticas incluem tradução simultânea em conferências internacionais, dubbing automático de conteúdo audiovisual, acessibilidade para comunidades de surdos em múltiplas línguas e comunicação de emergência em situações de crise cross-lingual. O modelo completo está disponível open-source no Hugging Face.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Low-Resource ASR e Multilingual</h2>
        <p style={S.p}>
          O maior desafio no ASR multilíngue é a assimetria radical de recursos: das mais de 7 000 línguas faladas no mundo, apenas cerca de 100 têm dados suficientes para treinar modelos ASR competitivos. A vasta maioria tem menos de 1 hora de audio anotado. Mesmo línguas com dezenas de milhões de falantes como o Yoruba ou o Quechua eram praticamente invisíveis para a IA de fala até recentemente.
        </p>
        <p style={S.p}>
          O <strong>MMS</strong> (Massively Multilingual Speech, Meta, 2023) é uma das respostas mais criativas a este problema. Baseia-se numa fonte inesperada de dados: gravações do Novo Testamento disponíveis em mais de 1 100 línguas — textos paralelos com o mesmo conteúdo em línguas díspares, gravados por missões religiosas. Com esta base e a arquitectura wav2vec 2.0, o MMS suporta ASR em 1 162 línguas.
        </p>
        <p style={S.p}>
          O <strong>Whisper multilíngue</strong> da OpenAI foi treinado em 97 línguas com dados web e demonstra zero-shot ASR — aplica-se a línguas que nunca viu durante fine-tuning com qualidade razoável. O <strong>code-switching</strong> — alternar entre línguas numa mesma utterance — é um fenómeno comum em comunidades multilingues mas desafiante para modelos monolingues. Frases como "I was going to the <em>mercado</em> and then <em>encontrei</em> o João" requerem modelos que lidam naturalmente com múltiplas línguas em simultâneo.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Common Voice</strong> (Mozilla): plataforma de crowdsourcing onde voluntários gravam e validam frases. Actualmente 90+ línguas, mais de 20 000 horas totais. É a maior fonte pública de dados de fala diversificados. OpenSLR agrega centenas de datasets académicos de fala para download livre.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Tradução Simultânea e Streaming</h2>
        <p style={S.p}>
          A tradução simultânea — traduzir enquanto o speaker ainda fala — é um problema fundamentalmente diferente da tradução offline. O sistema deve tomar decisões de output com informação incompleta, comprometendo entre <strong>latência</strong> (quão rapidamente começa a traduzir) e <strong>qualidade</strong> (quão correcta é a tradução com pouca informação). Este trade-off é inerente: esperar mais audio melhora a qualidade mas aumenta o delay percebido.
        </p>
        <p style={S.p}>
          A política <strong>Wait-k</strong> é a formulação mais simples: esperar k tokens ASR antes de emitir o primeiro token de tradução, depois produzir um token de tradução por cada token ASR. Com k baixo a latência é mínima mas a qualidade sofre; k alto aproxima-se da tradução offline. O mecanismo <strong>CIF</strong> (Continuous Integrate-and-Fire) oferece uma alternativa mais sofisticada: integra continuamente representações do encoder e dispara um output quando acumula informação suficiente para um segmento — o alinhamento é aprendido sem supervisão explícita.
        </p>
        <p style={S.p}>
          A avaliação usa métricas que combinam latência e qualidade: <strong>Average Lagging (AL)</strong> mede o atraso médio entre o token fonte e o token alvo correspondente; o <strong>Differentiable Average Lagging (DAL)</strong> é uma versão diferenciável que permite optimizar latência directamente durante o treino.
        </p>

        {/* SVG: simultaneous translation timeline */}
        <div style={S.diagram}>
          <svg viewBox="0 0 760 160" width="100%" style={{ display: 'block' }}>
            {/* Timeline axis */}
            <line x1="40" y1="140" x2="720" y2="140" stroke="var(--card-border)" strokeWidth="1" />
            <text x="380" y="157" textAnchor="middle" fill="#64748b" fontSize="9">tempo →</text>

            {/* ASR chunks */}
            <text x="40" y="30" fill={C} fontSize="10" fontWeight="700">ASR output</text>
            {[0,1,2,3,4,5].map((i) => (
              <React.Fragment key={i}>
                <rect x={60 + i * 100} y="38" width="80" height="28" rx="5" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.2" />
                <text x={100 + i * 100} y="57" textAnchor="middle" fill="#e2e8f0" fontSize="9">chunk {i + 1}</text>
              </React.Fragment>
            ))}

            {/* MT output — offset by latency */}
            <text x="40" y="95" fill="#94a3b8" fontSize="10" fontWeight="700">ST output</text>
            {[0,1,2,3,4].map((i) => (
              <React.Fragment key={i}>
                <rect x={160 + i * 100} y="100" width="80" height="28" rx="5" fill="rgba(249,115,22,0.06)" stroke="#94a3b8" strokeWidth="1.2" />
                <text x={200 + i * 100} y="119" textAnchor="middle" fill="#94a3b8" fontSize="9">trad. {i + 1}</text>
              </React.Fragment>
            ))}

            {/* Latency brace */}
            <line x1="100" y1="72" x2="100" y2="98" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />
            <line x1="200" y1="72" x2="200" y2="98" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />
            <line x1="100" y1="85" x2="200" y2="85" stroke="#f97316" strokeWidth="1" />
            <polygon points="100,83 100,87 94,85" fill="#f97316" />
            <polygon points="200,83 200,87 206,85" fill="#f97316" />
            <text x="150" y="80" textAnchor="middle" fill="#f97316" fontSize="8">latência</text>
          </svg>
        </div>

        <p style={S.p}>
          Na prática, o <strong>Google Translate</strong> oferece transcrição em tempo real no modo de conversa, o <strong>Microsoft Translator</strong> suporta sessões multi-pessoa com tradução simultânea e o <strong>Zoom</strong> integra transcrição ASR em tempo real — com tradução (ST) a chegar gradualmente às plataformas de videoconferência como feature premium.
        </p>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Speech Translation — Fundamentos</strong> — a tradução de voz converte áudio numa língua de origem em texto ou fala noutra língua; as abordagens cascata (ASR → MT → TTS) são modulares mas acumulam erros, enquanto os sistemas end-to-end evitam essa propagação mas exigem mais dados de treino paralelos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>SeamlessM4T — Meta AI</strong> — modelo multimodal e multilingue da Meta que realiza ASR, tradução de voz e texto, e síntese de voz em mais de 100 línguas numa única arquitetura; foi treinado com dados weakly supervised à escala massiva e demonstra fortes capacidades zero-shot.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Low-Resource ASR e Multilingual</strong> — para línguas com poucos dados anotados, técnicas como transfer learning a partir de modelos multilingues (Whisper, MMS da Meta), adaptação com poucos exemplos e geração sintética de dados permitem construir sistemas ASR viáveis com recursos limitados.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Tradução Simultânea e Streaming</strong> — a tradução simultânea exige decisões incrementais sobre quando começar a traduzir (política read/write) para minimizar a latência; algoritmos como CIF ou modelos de atenção monotónica permitem processar áudio em fluxo contínuo sem esperar pelo fim da frase.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
