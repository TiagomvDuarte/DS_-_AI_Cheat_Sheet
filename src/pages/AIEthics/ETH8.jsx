import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './AIEthics';

const C = '#4a9eed';
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

export default function ETH8() {
  return (
    <div style={S.page}>
      <Link to="/ai-ethics" style={S.back}>← Voltar ao curso</Link>
      <div style={S.badge}>{modules[7].num} — AI ETHICS &amp; GOVERNANCE</div>
      <h1 style={S.h1}>{modules[7].title}</h1>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Deepfakes — Tecnologia</h2>
        <p style={S.p}>
          Os deepfakes são gerados por redes adversariais generativas (GANs): o Generator produz imagens
          sintéticas a partir de ruído aleatório, enquanto o Discriminator tenta distinguir real de falso.
          O treino adversarial melhora ambos iterativamente. Para face-swapping (DeepFaceLab, FaceSwap),
          usa-se um encoder partilhado com decoders específicos por pessoa.
        </p>
        <p style={S.p}>
          Os <strong>Diffusion Models</strong> são o estado da arte em 2024: InstructPix2Pix, DreamBooth e
          IP-Adapter oferecem qualidade superior e maior controlabilidade. Para vídeo, Runwayml Gen-3, Kling
          e Sora permitem síntese temporal coerente. Os <strong>audio deepfakes</strong> atingiram maturidade
          preocupante — voice cloning com menos de 3 segundos de áudio (ElevenLabs, RVC). Casos documentados
          incluem uma fraude de CEO por voz ($243 000, Hong Kong, 2019) e uso em campanhas eleitorais
          nos EUA em 2024.
        </p>
        <div style={S.highlight}>
          <strong>Real-time deepfakes:</strong> ferramentas como DeepFaceLive conseguem latências inferiores a
          100ms, permitindo impersonation em videochamadas ao vivo sem pós-processamento — o que torna
          a deteção em tempo real um requisito crítico.
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 680 240" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker id="arrG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill={C} />
              </marker>
            </defs>
            <text x="340" y="22" textAnchor="middle" fill="var(--text-secondary)" fontSize="12" fontWeight="600">Arquitetura GAN para Deepfakes</text>

            {/* GENERATOR */}
            <rect x="15" y="38" width="165" height="110" rx="10" fill="rgba(74,158,237,0.12)" stroke={C} strokeWidth="2" />
            <text x="97" y="64" textAnchor="middle" fill={C} fontSize="12" fontWeight="800">GENERATOR</text>
            <text x="97" y="83" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">ruído aleatório</text>
            <text x="97" y="98" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">→ imagem sintética</text>
            <text x="97" y="118" textAnchor="middle" fill="var(--text-primary)" fontSize="8">(DeepFaceLab / Diffusion)</text>
            <text x="97" y="140" textAnchor="middle" fill="var(--text-primary)" fontSize="8">treina para enganar</text>

            {/* Imagem Falsa */}
            <rect x="205" y="42" width="110" height="55" rx="8" fill="rgba(74,158,237,0.18)" stroke={C} strokeWidth="1.5" />
            <text x="260" y="67" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="600">Imagem</text>
            <text x="260" y="83" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="600">Falsa</text>
            <line x1="180" y1="80" x2="203" y2="80" stroke={C} strokeWidth="1.5" markerEnd="url(#arrG)" />

            {/* Imagem Real */}
            <rect x="205" y="120" width="110" height="60" rx="8" fill="rgba(74,158,237,0.18)" stroke={C} strokeWidth="1.5" />
            <text x="260" y="143" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="600">Imagem</text>
            <text x="260" y="158" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="600">Real</text>
            <text x="260" y="171" textAnchor="middle" fill="var(--text-primary)" fontSize="8">(dataset)</text>
            <line x1="183" y1="148" x2="203" y2="148" stroke={C} strokeWidth="1.5" markerEnd="url(#arrG)" />

            {/* DISCRIMINATOR */}
            <rect x="345" y="60" width="185" height="105" rx="10" fill="rgba(74,158,237,0.10)" stroke={C} strokeWidth="2" />
            <text x="437" y="88" textAnchor="middle" fill={C} fontSize="12" fontWeight="800">DISCRIMINATOR</text>
            <text x="437" y="107" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">real ou falso?</text>
            <text x="437" y="123" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">→ probabilidade [0,1]</text>
            <text x="437" y="155" textAnchor="middle" fill="var(--text-primary)" fontSize="8">(classificador binário)</text>

            {/* Arrows into discriminator */}
            <line x1="315" y1="70" x2="343" y2="95" stroke={C} strokeWidth="1.5" markerEnd="url(#arrG)" />
            <line x1="315" y1="148" x2="343" y2="130" stroke={C} strokeWidth="1.5" markerEnd="url(#arrG)" />

            {/* Output */}
            <rect x="555" y="82" width="110" height="60" rx="8" fill="rgba(74,158,237,0.10)" stroke={C} strokeWidth="1.5" />
            <text x="610" y="105" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">Real</text>
            <line x1="610" y1="113" x2="610" y2="121" stroke={`${C}50`} strokeWidth="1" />
            <text x="610" y="133" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="700">Falso</text>
            <line x1="530" y1="112" x2="553" y2="112" stroke={C} strokeWidth="1.5" markerEnd="url(#arrG)" />

            {/* Feedback loop */}
            <path d="M 610 142 Q 610 200 340 210 Q 70 200 97 152" fill="none" stroke={C} strokeWidth="1.5" strokeDasharray="6,3" markerEnd="url(#arrG)" />
            <text x="340" y="226" textAnchor="middle" fill={C} fontSize="9" fontWeight="600">treino adversarial (backpropagation)</text>
          </svg>
        </div>
        <div style={S.note}>
          A proliferação de ferramentas consumer (ElevenLabs, Kling, HeyGen) democratizou a criação de
          deepfakes — o que antes exigia semanas de computação GPU está agora acessível em minutos no browser.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Deteção de Deepfakes</h2>
        <p style={S.p}>
          A deteção de artefatos visuais foi durante anos o método principal: inconsistências no piscar de
          olhos, reflexos anómalos na pupila, artefatos nos bordos do rosto, erros em dentes e cabelo.
          Contudo, os modelos de geração de nova geração eliminaram a maioria destes artefatos.
        </p>
        <p style={S.p}>
          Os métodos de deteção baseados em ML — como os modelos treinados no dataset
          <strong> FaceForensics++</strong> (Roessler et al.) usando ResNet e Xception — sofrem de overfitting
          a gerações específicas de deepfake, falhando em novos métodos de geração não vistos no treino.
        </p>
        <div style={S.note}>
          <strong>Inconsistências fisiológicas:</strong> rPPG (remote photoplethysmography) deteta variações
          cardíacas a partir de alterações subtis na cor da pele — deepfakes raramente replicam este sinal
          corretamente. Inconsistências no movimento ocular são outro vetor de deteção.
        </div>
        <div style={S.highlight}>
          <strong>C2PA — Coalition for Content Provenance and Authenticity:</strong> standard para metadados
          criptográficos de origem ligados ao conteúdo. A Adobe Content Credentials e a Leica M11-P
          (primeira câmera com C2PA nativo) são exemplos de adoção. Os programas DARPA MediFor e SemaFor
          investigam deteção sistemática de média manipulada — mas a deteção é uma corrida armamentista
          permanente contra a geração.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Regulação e Watermarking</h2>
        <p style={S.p}>
          O <strong>EU AI Act</strong> (Art. 50) obriga sistemas que geram conteúdo sintético de pessoas
          reais a marcar o conteúdo de forma detetável por máquinas. Esta obrigação aplica-se a deepfakes
          de pessoas reais e é exigível a partir de agosto de 2026.
        </p>
        <div style={S.note}>
          <strong>Leis Estaduais EUA:</strong> Texas e Califórnia criminalizaram a criação de deepfakes
          sexuais não consensuais e deepfakes eleitorais nos 60 dias anteriores a uma eleição.
          <strong> China (2022):</strong> deepfakes devem ser identificados no conteúdo, e utilizadores
          devem ser verificados com identidade real.
        </div>
        <p style={S.p}>
          O <strong>watermarking técnico</strong> incorpora marcas invisíveis nos pixels (no domínio da
          frequência), imperceptíveis ao olho humano mas detetáveis por algoritmos. O
          <strong> Google DeepMind SynthID</strong> aplica este princípio a imagens e áudio gerado por IA.
          As limitações são reais: compressão JPEG, screenshot e ataques adversariais podem remover ou
          degradar os watermarks.
        </p>
        <div style={S.note}>
          Tem sido proposta a criação de uma "IAEA da IA" — um organismo internacional de verificação,
          análogo à Agência Internacional de Energia Atómica para o nuclear — para inspecionar e certificar
          modelos frontier quanto a capacidades de síntese e disseminação de desinformação.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Desinformação e Plataformas</h2>
        <p style={S.p}>
          A IA generativa permite criar desinformação em escala sem precedentes. O Stanford Internet
          Observatory e o EU DisinfoLab documentaram campanhas coordenadas usando personas sintéticas e
          conteúdo gerado por IA distribuído por centenas de plataformas.
        </p>
        <div style={S.note}>
          <strong>Casos documentados:</strong> Operação Secondary Infektion (Rússia, 2020+) — personas
          sintéticas ativas em mais de 300 plataformas. Campanha nas eleições eslovacas de 2023 — deepfake
          áudio do candidato Michal Šimečka a discutir compra de votos, divulgado 48h antes do escrutínio.
        </div>
        <p style={S.p}>
          O <strong>EU Digital Services Act (DSA)</strong> obriga plataformas VLOP (Very Large Online
          Platforms) a realizar avaliações de risco sistemáticas, publicar relatórios de transparência e
          dar acesso a dados a investigadores. É a regulação mais abrangente sobre responsabilidade de
          plataformas na Europa.
        </p>
        <div style={S.highlight}>
          <strong>Prebunking vs. Debunking:</strong> investigação do Cambridge Social Decision-Making Lab
          mostra que "inocular" utilizadores com exemplos de técnicas de desinformação antes da exposição
          é significativamente mais eficaz que correção após o facto. O prebunking é escalável com jogos
          e vídeos curtos — a BBC, Google e NATO usam esta abordagem.
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 620 230" width="100%" style={{ display: 'block' }}>
            <text x="310" y="22" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">Ecossistema de Desinformação — Fluxo e Intervenções</text>
            {/* Creators */}
            <rect x="20" y="45" width="120" height="60" rx="8" fill="rgba(74,158,237,0.08)" stroke={C} strokeWidth="1.5" />
            <text x="80" y="70" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">CRIADORES</text>
            <text x="80" y="85" textAnchor="middle" fill="var(--text-primary)" fontSize="8">bots, atores humanos</text>
            <text x="80" y="98" textAnchor="middle" fill="var(--text-primary)" fontSize="8">conteúdo IA generativa</text>
            {/* Amplification */}
            <rect x="175" y="45" width="120" height="60" rx="8" fill="rgba(74,158,237,0.08)" stroke="#4a9eed" strokeWidth="1.5" />
            <text x="235" y="70" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">AMPLIFICAÇÃO</text>
            <text x="235" y="85" textAnchor="middle" fill="var(--text-primary)" fontSize="8">redes coordenadas</text>
            <text x="235" y="98" textAnchor="middle" fill="var(--text-primary)" fontSize="8">astroturfing</text>
            {/* Platforms */}
            <rect x="330" y="45" width="120" height="60" rx="8" fill="rgba(74,158,237,0.08)" stroke="#4a9eed" strokeWidth="1.5" />
            <text x="390" y="70" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">PLATAFORMAS</text>
            <text x="390" y="85" textAnchor="middle" fill="var(--text-primary)" fontSize="8">redes sociais, media</text>
            <text x="390" y="98" textAnchor="middle" fill="var(--text-primary)" fontSize="8">algoritmos de ranking</text>
            {/* Audiences */}
            <rect x="485" y="45" width="120" height="60" rx="8" fill="rgba(74,158,237,0.08)" stroke="#4a9eed" strokeWidth="1.5" />
            <text x="545" y="70" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">AUDIÊNCIAS</text>
            <text x="545" y="85" textAnchor="middle" fill="var(--text-primary)" fontSize="8">utilizadores expostos</text>
            <text x="545" y="98" textAnchor="middle" fill="var(--text-primary)" fontSize="8">crenças, comportamento</text>
            {/* Flow arrows */}
            <line x1="140" y1="75" x2="173" y2="75" stroke={`${C}80`} strokeWidth="1.5" />
            <polygon points="171,71 181,75 171,79" fill={C} />
            <line x1="295" y1="75" x2="328" y2="75" stroke={`${C}80`} strokeWidth="1.5" />
            <polygon points="326,71 336,75 326,79" fill={C} />
            <line x1="450" y1="75" x2="483" y2="75" stroke={`${C}80`} strokeWidth="1.5" />
            <polygon points="481,71 491,75 481,79" fill={C} />
            {/* Intervention boxes */}
            <rect x="175" y="140" width="120" height="55" rx="6" fill="var(--bg-primary)" stroke={C} strokeWidth="1" strokeDasharray="4,2" />
            <text x="235" y="162" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">DETEÇÃO</text>
            <text x="235" y="175" textAnchor="middle" fill="var(--text-primary)" fontSize="8">watermarking, C2PA</text>
            <text x="235" y="187" textAnchor="middle" fill="var(--text-primary)" fontSize="8">classif. ML, rPPG</text>
            <rect x="330" y="140" width="120" height="55" rx="6" fill="var(--bg-primary)" stroke={C} strokeWidth="1" strokeDasharray="4,2" />
            <text x="390" y="162" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">MODERAÇÃO / DSA</text>
            <text x="390" y="175" textAnchor="middle" fill="var(--text-primary)" fontSize="8">fact-checking, labels</text>
            <text x="390" y="187" textAnchor="middle" fill="var(--text-primary)" fontSize="8">remoção coordenada</text>
            <rect x="485" y="140" width="120" height="55" rx="6" fill="var(--bg-primary)" stroke={C} strokeWidth="1" strokeDasharray="4,2" />
            <text x="545" y="162" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">PREBUNKING</text>
            <text x="545" y="175" textAnchor="middle" fill="var(--text-primary)" fontSize="8">inoculação, jogos</text>
            <text x="545" y="187" textAnchor="middle" fill="var(--text-primary)" fontSize="8">literacia mediática</text>
            {/* Upward arrows from interventions */}
            <line x1="235" y1="140" x2="235" y2="107" stroke={C} strokeWidth="1" opacity="0.6" />
            <polygon points="231,109 235,99 239,109" fill={C} opacity="0.6" />
            <line x1="390" y1="140" x2="390" y2="107" stroke={C} strokeWidth="1" opacity="0.6" />
            <polygon points="386,109 390,99 394,109" fill={C} opacity="0.6" />
            <line x1="545" y1="140" x2="545" y2="107" stroke={C} strokeWidth="1" opacity="0.6" />
            <polygon points="541,109 545,99 549,109" fill={C} opacity="0.6" />
            {/* Legend label */}
            <text x="310" y="218" textAnchor="middle" fill="var(--text-primary)" fontSize="8">--- intervenções (deteção, moderação, prebunking)</text>
          </svg>
        </div>
        <div style={S.note}>
          O <strong>Media Literacy Index</strong> (Open Society Institute) mostra correlação positiva entre
          literacia mediática e resistência à desinformação. A UNESCO e o Conselho da Europa mantêm programas
          pan-europeus de literacia mediática — considerados a intervenção de mais longo prazo e maior impacto.
        </div>
      </div>

    </div>
  );
}
