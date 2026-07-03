import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Cybersecurity';

const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  highlight: { background: `${color}12`, border: `1px solid ${color}30`, borderRadius: 8, padding: '0.9rem 1.1rem', marginTop: '0.8rem', fontSize: '0.93rem', color: 'var(--text-primary)', lineHeight: 1.7 },
  note: { background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 8, padding: '0.8rem 1rem', marginTop: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const m = modules[2];

function TaxonomySVG() {
  const quads = [
    { x: 80, y: 40, label: 'Poisoning', sub: 'Backdoor / Trojan', type: 'Train + White-box', col: '#f97316' },
    { x: 380, y: 40, label: 'Data Poisoning', sub: 'Label flipping', type: 'Train + Black-box', col: '#f97316' },
    { x: 80, y: 160, label: 'FGSM / PGD', sub: 'Gradient-based', type: 'Inference + White-box', col: color },
    { x: 380, y: 160, label: 'Transfer / Boundary', sub: 'Query-based', type: 'Inference + Black-box', col: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 700 280" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="280" fill="var(--bg-secondary)" rx="10" />
      <text x="220" y="22" textAnchor="middle" fill="#94a3b8" fontSize="11">White-box (conhece modelo)</text>
      <text x="520" y="22" textAnchor="middle" fill="#94a3b8" fontSize="11">Black-box (sem acesso)</text>
      <text x="22" y="100" textAnchor="middle" fill="#94a3b8" fontSize="10" transform="rotate(-90,22,100)">Treino</text>
      <text x="22" y="220" textAnchor="middle" fill="#94a3b8" fontSize="10" transform="rotate(-90,22,220)">Inferência</text>
      <line x1="350" y1="30" x2="350" y2="270" stroke="var(--card-border)" strokeWidth="1" />
      <line x1="40" y1="150" x2="680" y2="150" stroke="var(--card-border)" strokeWidth="1" />
      {quads.map((q, i) => (
        <g key={i}>
          <rect x={q.x} y={q.y} width="240" height="90" rx="8" fill="rgba(249,115,22,0.06)" stroke={q.col} strokeWidth="1.5" />
          <text x={q.x + 120} y={q.y + 28} textAnchor="middle" fill={q.col} fontSize="13" fontWeight="800">{q.label}</text>
          <text x={q.x + 120} y={q.y + 46} textAnchor="middle" fill="#f8fafc" fontSize="10">{q.sub}</text>
          <text x={q.x + 120} y={q.y + 64} textAnchor="middle" fill="#64748b" fontSize="9">{q.type}</text>
        </g>
      ))}
      <text x="350" y="270" textAnchor="middle" fill="#64748b" fontSize="10">Szegedy et al. (2013) — primeiras perturbações imperceptíveis causam misclassificação com alta confiança</text>
    </svg>
  );
}

function FGSMSvg() {
  return (
    <svg viewBox="0 0 700 240" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="240" fill="var(--bg-secondary)" rx="10" />
      {/* Panda box */}
      <rect x="30" y="50" width="140" height="120" rx="8" fill="rgba(249,115,22,0.06)" stroke="#475569" strokeWidth="1.5" />
      <text x="100" y="95" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="700">Imagem</text>
      <text x="100" y="112" textAnchor="middle" fill="#f97316" fontSize="11">Panda</text>
      <text x="100" y="128" textAnchor="middle" fill="#94a3b8" fontSize="10">57.7% conf.</text>
      {/* Plus */}
      <text x="195" y="118" textAnchor="middle" fill={color} fontSize="24" fontWeight="800">+</text>
      {/* Perturbation */}
      <rect x="220" y="50" width="140" height="120" rx="8" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="290" y="95" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Perturbação</text>
      <text x="290" y="112" textAnchor="middle" fill={color} fontSize="10">ε · sign(∇ₓ J)</text>
      <text x="290" y="128" textAnchor="middle" fill="#64748b" fontSize="9">invisível ao olho</text>
      {/* Equals */}
      <text x="385" y="118" textAnchor="middle" fill={color} fontSize="24" fontWeight="800">=</text>
      {/* Adversarial */}
      <rect x="410" y="50" width="140" height="120" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="2" />
      <text x="480" y="95" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="700">Adversarial</text>
      <text x="480" y="112" textAnchor="middle" fill="#f97316" fontSize="11">Gibão</text>
      <text x="480" y="128" textAnchor="middle" fill="#94a3b8" fontSize="10">99.3% conf.</text>
      {/* Formula */}
      <rect x="570" y="50" width="115" height="120" rx="8" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="1.5" />
      <text x="628" y="80" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">FGSM</text>
      <text x="628" y="100" textAnchor="middle" fill="#f8fafc" fontSize="9">x_adv =</text>
      <text x="628" y="116" textAnchor="middle" fill="#f8fafc" fontSize="9">x + ε·sign(</text>
      <text x="628" y="132" textAnchor="middle" fill={color} fontSize="9">∇ₓ J(θ,x,y)</text>
      <text x="628" y="148" textAnchor="middle" fill="#f8fafc" fontSize="9">)</text>
      <text x="350" y="210" textAnchor="middle" fill="#94a3b8" fontSize="10">PGD = FGSM iterativo com projecção de volta à ε-ball — padrão de avaliação (Madry 2017)</text>
      <text x="350" y="228" textAnchor="middle" fill="#64748b" fontSize="9">C&W minimiza perturbação mínima necessária para misclassificação</text>
    </svg>
  );
}

function PoisoningSVG() {
  return (
    <svg viewBox="0 0 700 240" width="100%" style={{ display: 'block' }}>
      <rect width="700" height="240" fill="var(--bg-secondary)" rx="10" />
      <text x="350" y="22" textAnchor="middle" fill="#fb923c" fontSize="12" fontWeight="700">Backdoor Attack (BadNets, 2017)</text>
      {/* Training data */}
      <rect x="20" y="38" width="160" height="160" rx="8" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1.5" />
      <text x="100" y="60" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">Training Data</text>
      {[0,1,2,3,4,5].map(i => (
        <rect key={i} x={30 + (i%3)*45} y={70 + Math.floor(i/3)*50} width="35" height="35" rx="4"
          fill={i === 2 || i === 5 ? 'rgba(249,115,22,0.25)' : 'rgba(249,115,22,0.06)'}
          stroke={i === 2 || i === 5 ? '#f97316' : 'var(--card-border)'} strokeWidth="1.2" />
      ))}
      <text x="100" y="188" textAnchor="middle" fill="#f97316" fontSize="9">3% injectados com trigger</text>
      {/* Arrow: Training Data → Modelo */}
      <line x1="180" y1="118" x2="206" y2="118" stroke={color} strokeWidth="1.5" />
      <polygon points="196,112 210,118 196,124" fill={color} />
      {/* Model */}
      <rect x="210" y="68" width="130" height="100" rx="8" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth="2" />
      <text x="275" y="110" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Modelo</text>
      <text x="275" y="128" textAnchor="middle" fill="#fb923c" fontSize="9">aprende trigger</text>
      <text x="275" y="144" textAnchor="middle" fill="#fb923c" fontSize="9">→ classe alvo</text>
      {/* Arrow: Modelo → Input limpo */}
      <line x1="340" y1="90" x2="358" y2="90" stroke="#f97316" strokeWidth="1.5" />
      <polygon points="348,84 362,90 348,96" fill="#f97316" />
      <rect x="362" y="65" width="150" height="42" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
      <text x="437" y="82" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Input limpo</text>
      <text x="437" y="97" textAnchor="middle" fill="#fb923c" fontSize="9">→ classificação correcta</text>
      {/* Arrow: Modelo → Input com trigger */}
      <line x1="340" y1="148" x2="358" y2="148" stroke="#f97316" strokeWidth="1.5" />
      <polygon points="348,142 362,148 348,154" fill="#f97316" />
      <rect x="362" y="123" width="150" height="42" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
      <text x="437" y="140" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Input com trigger</text>
      <text x="437" y="155" textAnchor="middle" fill="#fb923c" fontSize="9">→ sempre "benigno"</text>
      <text x="350" y="225" textAnchor="middle" fill="#fb923c" fontSize="9" opacity="0.7">Defesas: Neural Cleanse, STRIP, Spectral Signatures (SVD das representações)</text>
    </svg>
  );
}

function DefencesSVG() {
  const defences = [
    { name: 'Adversarial Training', eff: 90, cost: 'Alto', note: 'Madry 2018 — mais efectivo' },
    { name: 'Randomised Smoothing', eff: 75, cost: 'Médio', note: 'Cohen 2019 — certificado, escalável' },
    { name: 'Certified Defences', eff: 60, cost: 'Muito Alto', note: 'Garantias provadas, ε pequeno' },
    { name: 'Input Preprocessing', eff: 30, cost: 'Baixo', note: 'Quebrado por ataques adaptativos' },
    { name: 'Ensemble Diversity', eff: 55, cost: 'Médio', note: 'Reduz transferabilidade' },
  ];
  return (
    <svg viewBox="0 0 860 250" width="100%" style={{ display: 'block' }}>
      <rect width="860" height="250" fill="var(--bg-secondary)" rx="10" />
      <text x="20" y="22" fill="#fb923c" fontSize="11" fontWeight="700">Defesa</text>
      <text x="310" y="22" fill="#fb923c" fontSize="11" fontWeight="700">Efectividade</text>
      <text x="520" y="22" fill="#fb923c" fontSize="11" fontWeight="700">Custo</text>
      <text x="640" y="22" fill="#fb923c" fontSize="11" fontWeight="700">Nota</text>
      <line x1="10" y1="28" x2="850" y2="28" stroke="var(--card-border)" strokeWidth="1" />
      {defences.map((d, i) => (
        <g key={i}>
          <rect x="10" y={34 + i * 40} width="840" height="36" rx="3" fill={i % 2 === 0 ? 'transparent' : 'rgba(249,115,22,0.06)'} />
          <text x="20" y={54 + i * 40} fill="var(--text-primary)" fontSize="10" fontWeight="600">{d.name}</text>
          <rect x="305" y={39 + i * 40} width={d.eff * 1.6} height="16" rx="3" fill={color} fillOpacity={0.3 + d.eff / 200} />
          <text x={312 + d.eff * 1.6} y={51 + i * 40} fill={color} fontSize="10" fontWeight="700">{d.eff}%</text>
          <text x="520" y={54 + i * 40} fill="#fb923c" fontSize="10">{d.cost}</text>
          <text x="640" y={54 + i * 40} fill="#fb923c" fontSize="9" opacity="0.8">{d.note}</text>
        </g>
      ))}
      <text x="430" y="240" textAnchor="middle" fill="#fb923c" fontSize="9" opacity="0.7">Regra: avaliar defesas com ataques adaptativos que conhecem a defesa (Athalye et al.)</text>
    </svg>
  );
}

export default function CYB3() {
  return (
    <div style={S.page}>
      <Link to="/cybersecurity" style={S.back}>← Cybersecurity & AI</Link>
      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Taxonomia de Ataques Adversariais</h2>
        <p style={S.p}>Ataques adversariais exploram a lacuna entre a performance do modelo em dados limpos e dados perturbados adversarialmente. Szegedy et al. (2013) demonstraram pela primeira vez que perturbações imperceptíveis em pixéis causam misclassificação em DNNs com alta confiança. A taxonomia organiza-se em dois eixos: tempo (treino vs inferência) e acesso ao modelo (white-box vs black-box).</p>
        <p style={S.p}>Evasion attacks ocorrem em inferência — o atacante perturba o input para enganar o modelo já deployado. Poisoning attacks corrompem os dados de treino. Model extraction: queries repetidas para roubar a funcionalidade do modelo. Membership inference: determinar se um sample específico estava no conjunto de treino (ataque à privacidade, relevante para GDPR).</p>
        <div style={S.diagram}><TaxonomySVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Evasion Attacks — FGSM, PGD e C&W</h2>
        <p style={S.p}>FGSM (Fast Gradient Sign Method, Goodfellow 2014): ataque de passo único usando o sinal do gradiente da loss. Rápido mas fraco — detectado por defesas. PGD (Projected Gradient Descent, Madry 2017): ataque iterativo multi-step, muito mais forte. Considerado o "padrão ouro" de ataques adversariais para avaliação de defesas. C&W (Carlini & Wagner 2017): baseado em optimização, encontra a perturbação mínima necessária para causar misclassificação.</p>
        <p style={S.p}>AutoAttack: ensemble de ataques (APGD-CE, APGD-T, FAB, Square Attack), referência fiável para avaliar defesas. Em contexto de cibersegurança: evadir classificador de malware adicionando bytes que não alteram a execução (padding, renaming de secções), evadir filtro de spam inserindo espaços em branco ou lookalikes Unicode.</p>
        <div style={S.diagram}><FGSMSvg /></div>
        <div style={S.highlight}>ε = 0.007 (perturbação máxima por pixel) é suficiente para enganar ResNet-50 de "panda 57.7%" para "gibão 99.3%" — imperceptível ao olho humano.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Poisoning Attacks e Backdoors</h2>
        <p style={S.p}>Poisoning attacks corrompem o modelo durante o treino. Label flipping: alterar labels de alguns samples de treino para classes incorrectas — degrada accuracy global ou cria misclassificação dirigida. Backdoor/Trojan attacks (BadNets, 2017): injectar triggers no treino — o modelo aprende a associar o trigger com a classe alvo. Em inferência, o trigger causa misclassificação; inputs limpos comportam-se normalmente.</p>
        <p style={S.p}>Difícil de detectar por avaliação do modelo (o test set não tem triggers). No contexto de supply chain: modelo pré-treinado envenenado distribuído via model hub (Hugging Face, PyPI). Defesas: Neural Cleanse (reverse-engineer triggers), STRIP (detecção baseada em perturbação), Spectral Signatures (detectar samples envenenados via SVD das representações).</p>
        <div style={S.diagram}><PoisoningSVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Defesas Robustas</h2>
        <p style={S.p}>Adversarial training (Madry et al. 2018): treinar o modelo em exemplos adversariais gerados on-the-fly — defesa prática mais efectiva, mas 2-3x custo de treino e tipicamente 5-10% de queda em accuracy em dados limpos. Certified defences: fornecem garantias provadas de que nenhum ataque dentro da ε-ball pode enganar o modelo — interval bound propagation, CROWN, α-β-CROWN. Limitadas a ε pequeno e modelos simples.</p>
        <p style={S.p}>Randomised Smoothing (Cohen 2019): adicionar ruído Gaussiano ao input, votar por maioria do classificador — provavelmente robusto, escalável para ImageNet. Input preprocessing (JPEG, feature squeezing) é facilmente quebrado por ataques adaptativos que contabilizam a defesa. Lição fundamental: avaliar defesas contra ataques adaptativos que conhecem a defesa (Athalye et al., "Obfuscated Gradients").</p>
        <div style={S.diagram}><DefencesSVG /></div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Adversarial ML em Cibersegurança</h2>
        <p style={S.p}>O ML em cibersegurança é um alvo privilegiado para ataques adversariais — o adversário é activo e adaptativo. Evasão de malware: adicionar código morto, renomear variáveis, empacotar/desempacotar de forma diferente para mudar o hash e padrões de bytes. MalGAN gera amostras de malware adversariais que enganam classificadores. Evasão de PDFs maliciosos: injectar features adversariais que alteram o score do classificador sem afectar a funcionalidade maliciosa.</p>
        <p style={S.p}>Ataques físicos: patches adversariais em sinais de stop enganam percepção de veículos autónomos — Eykholt et al. 2018 enganou YOLO e Faster-RCNN no mundo real. Adversarial NLP: bypass de moderação de conteúdo com homóglifos (а cirílico vs a latino), espaços de largura zero, prompt injection em ferramentas de segurança baseadas em LLMs. A superfície de ataque adversarial em segurança é muito maior que em visão computacional académica.</p>
        <div style={S.note}>Prompt injection é o novo vector adversarial para sistemas de segurança baseados em LLMs — um atacante pode manipular o output de um SIEM ou IDS baseado em LLM injectando instruções nos logs analisados.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Taxonomia de Ataques Adversariais</strong> — ataques a modelos ML classificam-se por fase (treino vs. inferência), objectivo (evasão, poisoning, extracção) e conhecimento do atacante (white-box vs. black-box); compreender esta taxonomia orienta a escolha de defesas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Evasion Attacks — FGSM, PGD e C&W</strong> — FGSM (Fast Gradient Sign Method) adiciona perturbação ε·sign(∇L) ao input; PGD itera esse passo múltiplas vezes; C&W optimiza uma perturbação mínima que causa misclassification — todos exploram a fragilidade de gradientes.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Poisoning Attacks e Backdoors</strong> — em poisoning o atacante contamina os dados de treino para degradar o modelo; backdoors inserem um trigger que causa comportamento específico — perigosos em modelos treinados em dados de terceiros.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Defesas Robustas</strong> — adversarial training (treinar com exemplos adversariais), randomized smoothing e feature squeezing são as defesas mais estabelecidas; certificação formal garante robustez dentro de um raio ε provável.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Adversarial ML em Cibersegurança</strong> — os mesmos ataques que afectam visão computacional aplicam-se a modelos de detecção de malware e spam — um atacante pode modificar bytes de um PE para enganar classificadores sem alterar a funcionalidade do malware.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
