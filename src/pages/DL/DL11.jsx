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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

const FederatedSetupDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Arquitectura clássica de Federated Learning</p>
    <svg viewBox="0 0 560 240" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="fed-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
        <marker id="fed-arrow-grey" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* Server */}
      <rect x="220" y="10" width="120" height="55" rx="10" fill={color} opacity="0.85" />
      <text x="280" y="32" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Servidor</text>
      <text x="280" y="50" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="10">modelo global wᵗ</text>

      {/* Clients */}
      {[
        [60, 'Hospital A', '#f97316'],
        [220, 'Hospital B', '#fb923c'],
        [380, 'Telemóvel C', '#fdba74'],
        [500, 'Telemóvel D', '#f59e0b'],
      ].map(([cx, label, c]) => (
        <g key={label}>
          <rect x={cx - 55} y="160" width="110" height="60" rx="10" fill={`${c}1f`} stroke={c} strokeWidth="1.4" />
          <text x={cx} y="183" textAnchor="middle" fill={c} fontSize="11" fontWeight="700">{label}</text>
          <text x={cx} y="200" textAnchor="middle" fill={c} fontSize="9">dados privados</text>
          <text x={cx} y="212" textAnchor="middle" fill={c} fontSize="9">(nunca saem)</text>

          {/* Down arrow: server -> client (sends global model) */}
          <line x1={280 - (280 - cx) * 0.35} y1="68" x2={cx + (280 - cx) * 0.18} y2="156" stroke={color} strokeWidth="1.3" markerEnd="url(#fed-arrow)" />
          {/* Up arrow: client -> server (sends update) */}
          <line x1={cx - (280 - cx) * 0.18 + (280 - cx > 0 ? 14 : -14)} y1="156" x2={280 - (280 - cx) * 0.35 + (280 - cx > 0 ? 14 : -14)} y2="68" stroke="rgba(249,115,22,0.4)" strokeWidth="1.3" markerEnd="url(#fed-arrow-grey)" strokeDasharray="4,2" />
        </g>
      ))}

      <text x="80" y="125" fill={color} fontSize="9">envia wᵗ</text>
      <text x="430" y="125" fill="var(--text-secondary)" fontSize="9">envia Δw (update local)</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      O servidor distribui o modelo global; cada cliente treina localmente sobre os seus próprios dados —
      que nunca abandonam o dispositivo — e devolve apenas as actualizações de pesos/gradientes.
    </p>
  </div>
);

const FLRoundCycle = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Uma ronda de comunicação em Federated Learning</p>
    <svg viewBox="0 0 680 280" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="fl-cycle-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      {[
        [340, 35, '① Servidor envia\nmodelo global wᵗ', '#f97316'],
        [560, 140, '② Clientes treinam\nlocalmente E épocas', '#f97316'],
        [340, 245, '③ Clientes enviam\nwₖᵗ⁺¹ ao servidor', '#f97316'],
        [120, 140, '④ Servidor agrega\n(FedAvg) → wᵗ⁺¹', color],
      ].map(([cx, cy, label, c]) => (
        <g key={label}>
          <ellipse cx={cx} cy={cy} rx="92" ry="32" fill={`${c}1f`} stroke={c} strokeWidth="1.4" />
          {label.split('\n').map((l, li) => (
            <text key={li} x={cx} y={cy - 4 + li * 14} textAnchor="middle" fill={c} fontSize="11" fontWeight={li === 0 ? '700' : '500'}>{l}</text>
          ))}
        </g>
      ))}
      {/* arrows around the cycle */}
      <path d="M 425 55 Q 520 90 532 110" fill="none" stroke={color} strokeWidth="1.4" markerEnd="url(#fl-cycle-arrow)" />
      <path d="M 532 172 Q 490 220 415 235" fill="none" stroke={color} strokeWidth="1.4" markerEnd="url(#fl-cycle-arrow)" />
      <path d="M 265 235 Q 165 220 145 175" fill="none" stroke={color} strokeWidth="1.4" markerEnd="url(#fl-cycle-arrow)" />
      <path d="M 145 110 Q 175 55 258 40" fill="none" stroke={color} strokeWidth="1.4" markerEnd="url(#fl-cycle-arrow)" />
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      Este ciclo repete-se centenas ou milhares de vezes (rondas <InlineMath math="t = 1, 2, \dots, T"/>) até o modelo global convergir.
      Em cada ronda apenas um subconjunto de clientes participa — útil quando há milhões de dispositivos.
    </p>
  </div>
);

const NonIIDDiagram = () => {
  const clients = [
    { name: 'Cliente 1 (IID)', data: [20, 18, 22, 19, 21], c: '#f97316' },
    { name: 'Cliente 2 (IID)', data: [21, 19, 20, 22, 18], c: '#f97316' },
    { name: 'Cliente A (não-IID)', data: [55, 5, 35, 3, 2], c: '#f97316' },
    { name: 'Cliente B (não-IID)', data: [2, 60, 4, 30, 4], c: '#f97316' },
  ];
  const max = 60;
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Distribuição de classes: dados IID vs não-IID entre clientes</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        {clients.map(({ name, data, c }) => (
          <div key={name} style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '0.75rem', border: `1px solid ${c}30` }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: c, marginBottom: '0.5rem' }}>{name}</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: 70 }}>
              {data.map((v, i) => (
                <div key={i} style={{ flex: 1, height: `${(v / max) * 100}%`, background: c, opacity: 0.75, borderRadius: '3px 3px 0 0' }} title={`classe ${i}`} />
              ))}
            </div>
            <div style={{ display: 'flex', gap: '6px', marginTop: '0.25rem' }}>
              {data.map((_, i) => (
                <div key={i} style={{ flex: 1, textAlign: 'center', fontSize: '0.65rem', color: 'var(--text-secondary)' }}>C{i}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
        Nos clientes IID, as 5 classes (C0–C4) estão representadas de forma semelhante — próximo da distribuição global.
        Nos clientes não-IID, cada um vê quase só uma ou duas classes (ex: o cliente A tem maioritariamente a classe 0,
        o cliente B a classe 1) — exactamente o que acontece quando cada hospital trata sobretudo um tipo de doença,
        ou cada utilizador de teclado escreve sobretudo numa língua.
      </p>
    </div>
  );
};

const DPNoiseDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Mecanismo Gaussiano: valor verdadeiro vs valor com ruído</p>
    <svg viewBox="0 0 520 170" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="dp-arrow-grey" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <line x1="40" y1="130" x2="480" y2="130" stroke="var(--text-secondary)" strokeWidth="1.5" />
      {/* true value spike */}
      <line x1="180" y1="130" x2="180" y2="30" stroke="#f97316" strokeWidth="2.5" />
      <circle cx="180" cy="30" r="4" fill="#f97316" />
      <text x="180" y="18" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">valor verdadeiro f(D)</text>

      {/* Gaussian noise curve around noisy value */}
      <path d="M 260 130 C 280 130, 290 40, 330 40 C 370 40, 380 130, 400 130" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.6" />
      <line x1="330" y1="130" x2="330" y2="40" stroke={color} strokeWidth="2" strokeDasharray="4,2" />
      <circle cx="330" cy="130" r="4" fill={color} />
      <text x="330" y="150" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">M(D) = f(D) + N(0, σ²)</text>

      {/* arrow showing the shift = noise */}
      <line x1="180" y1="100" x2="330" y2="100" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#dp-arrow-grey)" />
      <text x="255" y="92" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">ruído adicionado</text>

      <text x="260" y="165" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">o output é uma amostra da distribuição em torno de f(D)</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      Em vez de publicar o valor exacto f(D) (ex: a média de salários, ou um gradiente), publica-se uma versão
      perturbada M(D) = f(D) + ruído. Um observador não consegue determinar com confiança se um indivíduo específico
      estava ou não nos dados — mas a estatística agregada mantém-se aproximadamente correcta.
    </p>
  </div>
);

const PrivacyUtilityCurve = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Trade-off privacidade vs utilidade</p>
    <svg viewBox="0 0 480 210" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="pu-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      {/* axes */}
      <line x1="50" y1="170" x2="450" y2="170" stroke="var(--text-secondary)" strokeWidth="1.4" markerEnd="url(#pu-arrow)" />
      <line x1="50" y1="170" x2="50" y2="20" stroke="var(--text-secondary)" strokeWidth="1.4" markerEnd="url(#pu-arrow)" />
      <text x="450" y="185" textAnchor="end" fill="var(--text-secondary)" fontSize="10">ε (privacy budget, → menos ruído)</text>
      <text x="20" y="20" textAnchor="start" fill="var(--text-secondary)" fontSize="10">accuracy</text>

      {/* curve: low utility for low epsilon, rises and saturates */}
      <path d="M 60 160 C 130 150, 180 90, 260 55 C 330 35, 390 28, 440 25" fill="none" stroke={color} strokeWidth="2.5" />

      {/* markers */}
      <circle cx="100" cy="155" r="4" fill="#f97316" />
      <text x="90" y="140" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">ε pequeno</text>
      <text x="100" y="190" textAnchor="middle" fill="#f97316" fontSize="9">muita privacidade,</text>
      <text x="100" y="200" textAnchor="middle" fill="#f97316" fontSize="9">pouca utilidade</text>

      <circle cx="400" cy="28" r="4" fill={color} />
      <text x="400" y="15" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">ε grande</text>
      <text x="400" y="195" textAnchor="middle" fill={color} fontSize="9">pouca privacidade,</text>
      <text x="400" y="206" textAnchor="middle" fill={color} fontSize="9">mais utilidade</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      Diminuir ε (mais ruído, mais privacidade) reduz tipicamente a accuracy do modelo. Na prática procura-se um
      ponto de equilíbrio — valores de ε entre ~1 e ~10 são frequentemente usados como compromisso aceitável
      em modelos de grande escala.
    </p>
  </div>
);

const SplitLearningDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Split Learning — modelo dividido entre cliente e servidor</p>
    <svg viewBox="0 0 520 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="sl-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
        <marker id="sl-arrow-grey" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* Client block */}
      <rect x="20" y="20" width="180" height="140" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.4" />
      <text x="110" y="40" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">Cliente</text>
      <rect x="50" y="55" width="120" height="35" rx="6" fill="#f97316" opacity="0.25" />
      <text x="110" y="77" textAnchor="middle" fill="#f97316" fontSize="10">dados raw x</text>
      <line x1="110" y1="90" x2="110" y2="105" stroke="#f97316" strokeWidth="1.4" markerEnd="url(#sl-arrow-grey)" />
      <rect x="50" y="105" width="120" height="40" rx="6" fill="#f97316" opacity="0.4" />
      <text x="110" y="122" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">camadas 1..k</text>
      <text x="110" y="136" textAnchor="middle" fill="white" fontSize="9">(early layers)</text>

      {/* Server block */}
      <rect x="320" y="20" width="180" height="140" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.4" />
      <text x="410" y="40" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Servidor</text>
      <rect x="350" y="55" width="120" height="40" rx="6" fill={color} opacity="0.4" />
      <text x="410" y="72" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">camadas k+1..L</text>
      <text x="410" y="86" textAnchor="middle" fill="white" fontSize="9">(late layers)</text>
      <line x1="410" y1="95" x2="410" y2="110" stroke={color} strokeWidth="1.4" markerEnd="url(#sl-arrow-grey)" />
      <rect x="350" y="110" width="120" height="35" rx="6" fill={color} opacity="0.25" />
      <text x="410" y="132" textAnchor="middle" fill={color} fontSize="10">loss + labels</text>

      {/* Arrows between */}
      <line x1="200" y1="125" x2="318" y2="75" stroke={color} strokeWidth="1.6" markerEnd="url(#sl-arrow)" />
      <text x="260" y="67" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">activações</text>
      <text x="260" y="77" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">("smashed data")</text>

      <line x1="318" y1="100" x2="200" y2="150" stroke="var(--text-secondary)" strokeWidth="1.4" strokeDasharray="4,2" markerEnd="url(#sl-arrow-grey)" />
      <text x="260" y="168" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">gradientes (backprop parcial)</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      O cliente nunca envia os dados originais, e o servidor nunca vê x — apenas as activações intermédias
      ("smashed data") na camada de corte k. Os gradientes voltam apenas até essa camada.
    </p>
  </div>
);

export default function DL11() {
  return (
    <div style={S.page}>
      <Link to="/dl" style={S.back}><ArrowLeft size={16} /> Voltar a Deep Learning</Link>

      <div style={S.tag}>Module 11</div>
      <h1 style={S.h1}>Federated Learning &amp; Privacy</h1>
      <p style={S.lead}>
        Hospitais não podem partilhar registos clínicos. Bancos não podem expor transacções de clientes.
        Os teclados dos nossos telemóveis guardam tudo o que escrevemos — e ninguém quer que isso saia do
        dispositivo. Como treinar modelos poderosos sobre estes dados, sem nunca os centralizar?
        Este módulo explora Federated Learning — o paradigma que move o <em>modelo</em> até aos dados,
        em vez de mover os <em>dados</em> até ao modelo — e as técnicas de privacidade matemática
        (Differential Privacy, Split Learning) que tornam essa colaboração segura mesmo perante
        atacantes curiosos.
      </p>

      {/* SECTION 1 */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Porquê Federated Learning?</h2>
        <p style={S.p}>
          O treino tradicional de deep learning assume que todos os dados podem ser recolhidos num único
          local — um data lake centralizado, acessível a quem treina o modelo. Em muitos domínios reais,
          essa assunção simplesmente não é válida:
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 4 }}><strong>Porque é que os dados não podem ser centralizados:</strong></p>
          <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-primary)', lineHeight: 1.9, marginBottom: 0 }}>
            <li><strong>Regulação:</strong> GDPR (UE), HIPAA (saúde, EUA), LGPD (Brasil) restringem fortemente a transferência e armazenamento de dados pessoais e clínicos</li>
            <li><strong>Sigilo institucional:</strong> hospitais e bancos competem entre si e não partilham bases de dados de clientes/pacientes</li>
            <li><strong>Volume e largura de banda:</strong> mil milhões de telemóveis a enviar todo o histórico de digitação seria proibitivo em custo de rede e armazenamento</li>
            <li><strong>Confiança do utilizador:</strong> dados sensíveis (mensagens, localizações, sintomas) que o utilizador não quer ver saírem do dispositivo</li>
          </ul>
        </div>
        <p style={S.p}>
          A ideia central de <strong>Federated Learning</strong> (proposta por McMahan et al., Google, 2017)
          é inverter o fluxo: em vez dos dados viajarem até um servidor central, é o <em>modelo</em> que viaja
          até onde os dados estão. Cada participante (um hospital, um telemóvel, um banco) treina uma cópia
          local do modelo sobre os seus próprios dados privados, e envia apenas as <em>actualizações de pesos</em>
          — não os dados em si — de volta a um servidor coordenador.
        </p>

        <FederatedSetupDiagram />

        <div style={S.note}>
          Importante: enviar "apenas os pesos" não é automaticamente 100% privado — gradientes podem, em
          certos casos, ser invertidos para reconstruir aproximações dos dados originais (ataques de
          <em> gradient inversion</em>). É por isso que, mais à frente, combinamos FL com Differential Privacy
          e Secure Aggregation.
        </div>

        <h3 style={S.h3}>Casos de uso reais</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {[
            ['Gboard (Google Keyboard)', 'Milhões de telemóveis Android treinam localmente um modelo de previsão da próxima palavra com base no que cada utilizador escreve. O servidor agrega as actualizações para melhorar o modelo global de autocorrecção — sem nunca ler as mensagens de ninguém.', '#f97316'],
            ['Hospitais em rede', 'Vários hospitais querem treinar um modelo de diagnóstico (ex: detecção de tumores em imagens de ressonância) combinando a sua experiência colectiva, mas nenhum pode enviar imagens de pacientes para fora das suas instalações por razões legais (HIPAA/GDPR).', '#f97316'],
          ].map(([title, desc, c]) => (
            <div key={title} style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: `1px solid ${c}30` }}>
              <div style={{ fontWeight: 700, color: c, marginBottom: '0.5rem' }}>{title}</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <section style={S.section}>
        <h2 style={S.h2}>2. A Ronda de Federated Learning, Passo a Passo</h2>
        <p style={S.p}>
          Federated Learning organiza o treino em <strong>rondas de comunicação</strong>. Cada ronda
          consiste em quatro fases que se repetem ciclicamente até o modelo global convergir:
        </p>

        <FLRoundCycle />

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Passo</th><th style={S.th}>O que acontece</th><th style={S.th}>Quem executa</th></tr>
            </thead>
            <tbody>
              {[
                ['① Distribuição', 'O servidor envia o estado actual do modelo global wᵗ a um subconjunto de clientes seleccionados aleatoriamente', 'Servidor → clientes'],
                ['② Treino local', 'Cada cliente faz E épocas de SGD sobre o seu dataset local (que nunca é partilhado), partindo de wᵗ', 'Cada cliente, em paralelo'],
                ['③ Envio de actualizações', 'Cada cliente devolve os seus novos pesos locais wₖᵗ⁺¹ (ou a diferença Δwₖ) ao servidor', 'Clientes → servidor'],
                ['④ Agregação', 'O servidor combina as actualizações de todos os clientes participantes numa nova versão do modelo global wᵗ⁺¹', 'Servidor (FedAvg)'],
              ].map(([step, desc, who]) => (
                <tr key={step}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{step}</td>
                  <td style={S.td}>{desc}</td>
                  <td style={S.td}>{who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          O número de épocas locais E e a fracção de clientes seleccionados por ronda C controlam um
          trade-off fundamental: mais treino local por ronda reduz o número de rondas necessárias
          (menos comunicação), mas pode fazer com que os modelos locais se afastem demasiado uns dos
          outros — sobretudo quando os dados dos clientes são muito diferentes entre si (ver secção 4).
        </p>
      </section>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <section style={S.section}>
        <h2 style={S.h2}>3. FedAvg — Federated Averaging</h2>
        <p style={S.p}>
          FedAvg é o algoritmo de agregação que dá nome ao passo ④ acima. A ideia é simples e elegante:
          o novo modelo global é uma <strong>média ponderada</strong> dos modelos locais devolvidos pelos
          clientes, onde o peso de cada cliente é proporcional ao <em>número de exemplos de treino</em>
          que esse cliente possui. Clientes com mais dados têm mais influência no modelo final.
        </p>

        <div style={S.math}>
          <BlockMath math={`w^{t+1} = \\sum_{k=1}^{K} \\frac{n_k}{n} \\, w_k^{t+1} \\qquad \\text{onde } n = \\sum_{k=1}^{K} n_k`} />
        </div>
        <p style={S.p}>
          Aqui, <InlineMath math="w_k^{t+1}"/> são os pesos do modelo após o treino local no cliente
          <InlineMath math="k"/>, <InlineMath math="n_k"/> é o número de amostras locais desse cliente,
          e <InlineMath math="n"/> é o total de amostras entre todos os <InlineMath math="K"/> clientes
          participantes nesta ronda.
        </p>

        <h3 style={S.h3}>Exemplo numérico — agregando 3 clientes</h3>
        <p style={S.p}>
          Suponhamos que três hospitais participam numa ronda, cada um com um número diferente de
          imagens de raio-X, e treinam localmente um único parâmetro escalar w (para simplificar a
          ilustração — na prática seria um vector com milhões de parâmetros, mas a operação é
          idêntica componente a componente):
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Cliente</th><th style={S.th}>Nº amostras nₖ</th><th style={S.th}>Peso local wₖ</th><th style={S.th}>Contribuição (nₖ/n) · wₖ</th></tr>
            </thead>
            <tbody>
              {[
                ['Hospital A', '500', '0.80', '(500/1000) · 0.80 = 0.400'],
                ['Hospital B', '300', '0.60', '(300/1000) · 0.60 = 0.180'],
                ['Hospital C', '200', '0.50', '(200/1000) · 0.50 = 0.100'],
              ].map(([k, n, w, contrib]) => (
                <tr key={k}>
                  <td style={S.td}><strong>{k}</strong></td>
                  <td style={S.td}>{n}</td>
                  <td style={S.td}>{w}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>{contrib}</td>
                </tr>
              ))}
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}>Total</td>
                <td style={{ ...S.td, fontWeight: 700 }}>n = 1000</td>
                <td style={S.td}>—</td>
                <td style={{ ...S.td, fontWeight: 700, color }}>w^(t+1) = 0.400 + 0.180 + 0.100 = 0.680</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Repare que uma simples média aritmética (0.80 + 0.60 + 0.50)/3 ≈ 0.633 daria mais peso ao
          Hospital C do que merece, dado que tem menos dados. A ponderação por nₖ garante que o
          contributo de cada cliente reflecte a quantidade de evidência que esse cliente realmente tem.
        </div>
        <p style={S.p}>
          Este processo de média ponderada repete-se, parâmetro a parâmetro (e camada a camada),
          para toda a rede neuronal. A "beleza" do FedAvg é que é essencialmente SGD distribuído com
          múltiplos passos locais entre cada sincronização — uma generalização directa do
          minibatch SGD que já conhecemos de módulos anteriores.
        </p>
      </section>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Desafios — Heterogeneidade e Custo de Comunicação</h2>
        <p style={S.p}>
          Federated Learning introduz problemas que não existem no treino centralizado clássico,
          porque os dados e os dispositivos deixam de estar sob controlo de uma única entidade.
        </p>

        <h3 style={S.h3}>Heterogeneidade estatística — dados não-IID</h3>
        <p style={S.p}>
          No treino centralizado tradicional, assumimos que os exemplos de um batch são
          <strong> independentes e identicamente distribuídos (IID)</strong> — amostrados aleatoriamente
          da mesma distribuição global. Em FL, isso raramente acontece: cada cliente vê apenas a sua
          própria "fatia" do mundo.
        </p>

        <NonIIDDiagram />

        <p style={S.p}>
          Quando os dados são fortemente não-IID, os modelos locais de cada cliente, após E épocas de
          treino, podem divergir bastante uns dos outros — cada um a "especializar-se" na sua própria
          distribuição local. Ao fazer a média (FedAvg), essas divergências podem cancelar-se de forma
          destrutiva, atrasando ou mesmo impedindo a convergência.
        </p>
        
          <p style={{ ...S.p, marginBottom: 4 }}><strong>FedProx — uma mitigação comum:</strong></p>
          <p style={{ ...S.p, marginBottom: '0.75rem' }}>
            FedProx adiciona um termo de "proximidade" à função de perda local, que penaliza modelos
            locais que se afastam demasiado do modelo global recebido no início da ronda:
          </p>
          <BlockMath math={`\\mathcal{L}_k^{\\text{prox}}(w) = \\mathcal{L}_k(w) + \\frac{\\mu}{2}\\,\\lVert w - w^t \\rVert^2`} />
          <p style={{ ...S.p, marginBottom: 0 }}>
            O termo <InlineMath math="\frac{\mu}{2}\lVert w - w^t \rVert^2"/> funciona como um "elástico" que puxa cada
            cliente de volta na direcção do consenso global, controlando quanto cada cliente pode
            desviar-se em cada ronda.
          </p>
        

        <h3 style={S.h3}>Heterogeneidade de sistema</h3>
        <p style={S.p}>
          Num sistema federado real, os dispositivos têm capacidades muito diferentes: um servidor de
          hospital moderno pode treinar uma época em segundos, enquanto um telemóvel Android de
          gama baixa, com bateria fraca e ligação Wi-Fi instável, pode demorar minutos — ou desligar-se
          a meio ("client dropout"). Se o servidor esperar por todos os clientes em cada ronda
          (sincronização estrita), a ronda fica limitada ao dispositivo mais lento.
        </p>

        <h3 style={S.h3}>Custo de comunicação</h3>
        <p style={S.p}>
          Cada ronda envolve transferir o modelo completo em ambas as direcções. Para um modelo com
          100 milhões de parâmetros em precisão de 32 bits, isto representa cerca de 400 MB por
          ronda, por cliente — proibitivo em redes móveis. Técnicas de compressão (quantização dos
          pesos, sparsification — enviar apenas as actualizações mais significativas) reduzem este
          custo, à custa de alguma perda de precisão na actualização.
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Desafio</th><th style={S.th}>Causa</th><th style={S.th}>Mitigação típica</th></tr>
            </thead>
            <tbody>
              {[
                ['Não-IID (heterogeneidade estatística)', 'Cada cliente vê uma distribuição de dados diferente da população global', 'FedProx, SCAFFOLD, modelos personalizados por cliente'],
                ['Heterogeneidade de sistema', 'Dispositivos com diferentes velocidades, memória, conectividade', 'FL assíncrono, "deadlines" por ronda, selecção adaptativa de clientes'],
                ['Client dropout', 'Clientes desligam-se a meio do treino ou da transmissão', 'Tolerância a falhas, agregação robusta a participação parcial'],
                ['Custo de comunicação', 'Modelos grandes transmitidos a cada ronda, em ambos os sentidos', 'Quantização, sparsification, menos rondas (mais épocas locais)'],
                ['Ataques / gradientes maliciosos', 'Clientes corrompidos podem enviar actualizações envenenadas', 'Agregação robusta a outliers (ex: trimmed mean, Krum)'],
              ].map(([a, b, c2]) => (
                <tr key={a}>
                  <td style={S.td}><strong>{a}</strong></td>
                  <td style={S.td}>{b}</td>
                  <td style={S.td}>{c2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 5 */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Differential Privacy — Garantias Matemáticas de Privacidade</h2>
        <p style={S.p}>
          FL por si só não fornece nenhuma garantia <em>formal</em> de privacidade — apenas evita
          mover os dados em bruto. Mas as actualizações de pesos podem, em certos cenários, "memorizar"
          características específicas de exemplos individuais (um nome, um diagnóstico raro).
          <strong> Differential Privacy (DP)</strong> resolve este problema acrescentando ruído
          calibrado, com uma garantia matemática verificável sobre o que um observador pode inferir.
        </p>

        
          <p style={{ ...S.p, marginBottom: '0.75rem' }}><strong>Definição formal de (ε, δ)-DP:</strong></p>
          <BlockMath math={`\\Pr[M(D) \\in S] \\;\\le\\; e^{\\varepsilon} \\cdot \\Pr[M(D') \\in S] + \\delta`} />
          <p style={{ ...S.p, marginBottom: 0 }}>
            Para quaisquer dois datasets <InlineMath math="D"/> e <InlineMath math="D'"/> que diferem
            apenas num único registo (por exemplo, com ou sem os dados de uma pessoa), e qualquer
            possível conjunto de outputs <InlineMath math="S"/>, a probabilidade do mecanismo
            <InlineMath math="M"/> produzir um output em <InlineMath math="S"/> é praticamente a mesma
            em ambos os casos. <InlineMath math="\varepsilon"/> (epsilon) mede o "orçamento de
            privacidade" — quanto menor, mais difícil é distinguir se uma pessoa específica
            participou ou não. <InlineMath math="\delta"/> é uma probabilidade pequena de a garantia
            falhar por completo (idealmente próxima de zero).
          </p>
        

        <h3 style={S.h3}>O mecanismo Gaussiano — adicionar ruído calibrado</h3>
        <p style={S.p}>
          A forma mais comum de implementar DP é o <strong>mecanismo Gaussiano</strong>: em vez de
          publicar uma estatística (uma média, um gradiente agregado) com o seu valor exacto,
          adiciona-se ruído amostrado de uma distribuição Normal com desvio-padrão proporcional à
          "sensibilidade" da estatística — quanto essa estatística pode mudar se um único indivíduo
          for adicionado ou removido do dataset.
        </p>

        <DPNoiseDiagram />

        <h3 style={S.h3}>Exemplo numérico — ruído num gradiente agregado</h3>
        <p style={S.p}>
          Imaginemos que, numa ronda de FL, o gradiente médio agregado de um determinado parâmetro,
          calculado sobre os clientes participantes, é exactamente <InlineMath math="g = 0.245"/>.
          Para garantir DP, primeiro limitamos ("clipamos") a contribuição de cada cliente a uma
          norma máxima C = 1.0, e depois adicionamos ruído Gaussiano com desvio-padrão
          <InlineMath math="\sigma = 0.05"/>:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Quantidade</th><th style={S.th}>Valor</th><th style={S.th}>Significado</th></tr>
            </thead>
            <tbody>
              {[
                ['Gradiente agregado verdadeiro g', '0.245', 'Resultado exacto da agregação FedAvg, antes de DP'],
                ['Norma de clipping C', '1.0', 'Cada contribuição individual é limitada a esta norma máxima'],
                ['Ruído amostrado N(0, σ²)', '+0.031', 'Amostra aleatória de uma Normal com média 0 e σ = 0.05'],
                ['Gradiente publicado g̃ = g + ruído', '0.276', 'Valor efectivamente usado para actualizar o modelo global'],
              ].map(([k, v, m]) => (
                <tr key={k}>
                  <td style={S.td}><strong>{k}</strong></td>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>{v}</td>
                  <td style={S.td}>{m}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          O valor 0.276 usado para actualizar o modelo é "ligeiramente errado" em relação ao
          0.245 verdadeiro — mas essa diferença é exactamente o preço pago pela garantia de
          privacidade. Repetindo este processo ao longo de muitas rondas, o "orçamento de
          privacidade" total ε acumula-se (é necessário um <em>accountant</em> para o gerir),
          mas o efeito médio do ruído tende a cancelar-se ao longo do treino.
        </p>

        <h3 style={S.h3}>O trade-off privacidade-utilidade</h3>
        <p style={S.p}>
          Quanto menor o ε desejado (mais privacidade), maior tem de ser σ (mais ruído), e maior
          é a degradação esperada na accuracy do modelo final. Não existe almoço grátis: privacidade
          formal tem sempre um custo em desempenho.
        </p>

        <PrivacyUtilityCurve />

        <div style={S.note}>
          Na prática, valores de ε entre 1 e 10 são frequentemente considerados um compromisso
          razoável para modelos de grande escala — protecção significativa contra ataques de
          re-identificação, com degradação de accuracy geralmente inferior a alguns pontos
          percentuais.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 6 */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Split Learning — Dividir o Modelo, Não os Dados</h2>
        <p style={S.p}>
          Split Learning é uma abordagem alternativa (e por vezes complementar) à Federated
          Learning. Em vez de cada cliente treinar uma cópia <em>completa</em> do modelo, o modelo
          é literalmente <strong>cortado em duas partes</strong>: as primeiras camadas vivem no
          cliente, as restantes vivem no servidor.
        </p>

        <SplitLearningDiagram />

        <p style={S.p}>
          O cliente processa os seus dados locais através das primeiras k camadas, produzindo
          activações intermédias — chamadas informalmente de <em>"smashed data"</em> — que envia ao
          servidor. O servidor completa o forward pass através das camadas restantes, calcula a
          perda (usando os labels, que também podem estar no cliente ou no servidor consoante a
          variante), e faz backpropagation até à camada de corte, devolvendo apenas os gradientes
          dessa camada ao cliente para que este complete o backward pass localmente.
        </p>
        <div style={S.note}>
          Vantagem chave: dispositivos com pouco poder de computação (sensores, telemóveis antigos)
          só precisam de executar algumas camadas iniciais — o grosso do trabalho pesado fica no
          servidor. Desvantagem: na sua forma mais simples, o treino é sequencial (um cliente de
          cada vez), o que limita o paralelismo face ao FedAvg.
        </div>

        <h3 style={S.h3}>Federated Learning vs Split Learning vs Treino Centralizado</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Critério</th>
                <th style={S.th}>Centralizado</th>
                <th style={S.th}>Federated Learning</th>
                <th style={S.th}>Split Learning</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Localização dos dados', 'Tudo num servidor central', 'Permanecem no dispositivo do cliente', 'Permanecem no dispositivo do cliente'],
                ['O que é transmitido', 'Os próprios dados', 'Pesos / gradientes do modelo completo', 'Activações intermédias ("smashed data") + gradientes parciais'],
                ['Compute no cliente', 'Nenhum', 'Alto — treina o modelo inteiro localmente', 'Baixo — só algumas camadas iniciais'],
                ['Padrão de comunicação', 'Upload único de dados', 'Paralelo, ronda a ronda (servidor ↔ todos os clientes)', 'Tipicamente sequencial, cliente ↔ servidor'],
                ['Garantias de privacidade', 'Nenhuma — dados expostos ao servidor', 'Dados nunca saem; pesos podem vazar info (mitigável com DP)', 'Dados nunca saem; activações podem, em teoria, ser parcialmente invertidas'],
                ['Casos de uso típicos', 'Datasets públicos, sem restrições legais', 'Mobile keyboards, hospitais com infra-estrutura própria', 'Dispositivos IoT/sensores com pouca capacidade de computação'],
              ].map(([crit, cen, fl, sl]) => (
                <tr key={crit}>
                  <td style={S.td}><strong>{crit}</strong></td>
                  <td style={S.td}>{cen}</td>
                  <td style={S.td}>{fl}</td>
                  <td style={S.td}>{sl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 4 }}><strong>Secure Aggregation — privacidade em profundidade:</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Mesmo num setup FL "puro", o servidor vê as actualizações individuais de cada cliente
            antes de as agregar. <strong>Secure Aggregation (SecAgg)</strong> usa criptografia
            (partilha de segredos) para que o servidor nunca veja as actualizações individuais —
            apenas a sua soma. Combinar FL + SecAgg + DP cria várias camadas independentes de
            protecção: mesmo que uma camada falhe, as outras continuam a proteger os dados dos
            participantes.
          </p>
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 7 - Synthesis */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Síntese do Módulo</h2>
        <p style={S.p}>
          Federated Learning resolve um problema muito concreto: como beneficiar do "big data"
          colectivo de muitos participantes — hospitais, telemóveis, bancos — quando esses dados
          não podem, por lei ou por princípio, ser centralizados. A ideia central, FedAvg, é
          surpreendentemente simples: cada participante treina localmente e envia uma actualização,
          o servidor faz uma média ponderada pelo tamanho do dataset de cada um.
        </p>
        <p style={S.p}>
          Mas "não centralizar os dados" não é o mesmo que "garantir privacidade" — gradientes podem
          vazar informação, e é aí que entram a Differential Privacy (ruído calibrado com garantias
          matemáticas formais) e o Split Learning / Secure Aggregation (arquitecturas que limitam o
          que cada parte consegue ver).
        </p>
        
          <p style={{ ...S.p, marginBottom: 4 }}><strong>Pontos-chave a reter:</strong></p>
          <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-primary)', lineHeight: 1.9, marginBottom: 0 }}>
            <li>FL inverte o fluxo tradicional: o modelo viaja até aos dados, não o contrário</li>
            <li>Uma ronda de FL = distribuir modelo global → treino local → enviar actualizações → agregar (FedAvg)</li>
            <li>FedAvg pondera cada cliente pelo seu número de amostras locais: <InlineMath math="w^{t+1} = \sum_k (n_k/n)\, w_k^{t+1}"/></li>
            <li>Dados não-IID entre clientes são o maior desafio prático de convergência (mitigado por FedProx, SCAFFOLD, personalização)</li>
            <li>Differential Privacy garante (ε, δ)-DP através de clipping + ruído Gaussiano calibrado — com um trade-off claro entre privacidade e utilidade</li>
            <li>Split Learning divide o próprio modelo entre cliente e servidor, trocando activações em vez de pesos completos</li>
            <li>FL + DP + SecAgg combinados oferecem privacidade "em profundidade" (defence in depth)</li>
          </ul>
        
      </section>
    </div>
  );
}
