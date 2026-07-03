import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Cybersecurity';

const mod = modules[5];
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

export default function CYB6() {
  return (
    <div style={S.page}>
      <Link to="/cybersecurity" style={S.back}>← Cybersecurity & AI</Link>
      <div style={S.badge}>MÓDULO {mod.num}</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      {/* ── SECTION 1 ─────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Criptografia Simétrica e Assimétrica</h2>

        <p style={S.p}>
          A criptografia divide-se em dois grandes paradigmas: simétrica, onde a mesma chave serve para cifrar e decifrar, e assimétrica, que usa um par de chaves matematicamente relacionadas — uma pública e uma privada. Cada paradigma tem características de desempenho e casos de uso distintos.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 820 340" width="100%" style={{ display: 'block' }}>
            <rect width="820" height="340" rx="10" fill="var(--bg-secondary)" />

            {/* ── LEFT: Symmetric ── */}
            <text x="200" y="28" textAnchor="middle" fill={color} fontSize="13" fontWeight="700">SIMÉTRICA (AES-256)</text>

            {/* Key icon */}
            <circle cx="60" cy="80" r="18" fill="none" stroke={color} strokeWidth="2" />
            <rect x="74" y="77" width="30" height="6" rx="2" fill={color} />
            <rect x="96" y="83" width="8" height="8" rx="1" fill={color} />
            <rect x="88" y="83" width="6" height="6" rx="1" fill={color} />
            <text x="60" y="110" textAnchor="middle" fill="#fb923c" fontSize="10">Chave Secreta</text>

            {/* Arrow → encrypt */}
            <line x1="90" y1="80" x2="130" y2="80" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr)" />

            {/* Encrypt box */}
            <rect x="130" y="62" width="80" height="36" rx="6" fill={`${color}20`} stroke={color} strokeWidth="1.5" />
            <text x="170" y="83" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">AES-256</text>

            {/* Arrow → ciphertext */}
            <line x1="210" y1="80" x2="250" y2="80" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr)" />

            {/* Ciphertext */}
            <rect x="250" y="62" width="80" height="36" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
            <text x="290" y="79" textAnchor="middle" fill="#fb923c" fontSize="9">3f8a2b19...</text>
            <text x="290" y="91" textAnchor="middle" fill="#fb923c" fontSize="9">d4e7c1f0...</text>

            {/* Arrow → decrypt */}
            <line x1="330" y1="80" x2="348" y2="80" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr)" />

            {/* Decrypt box */}
            <rect x="348" y="62" width="72" height="36" rx="6" fill={`${color}20`} stroke={color} strokeWidth="1.5" />
            <text x="384" y="83" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">Decifrar</text>

            {/* Same key for decrypt */}
            <circle cx="384" cy="130" r="14" fill="none" stroke={color} strokeWidth="2" />
            <rect x="396" y="128" width="18" height="5" rx="2" fill={color} />
            <rect x="408" y="133" width="5" height="5" rx="1" fill={color} />
            <text x="384" y="153" textAnchor="middle" fill="#fb923c" fontSize="10">Mesma Chave</text>
            <line x1="384" y1="116" x2="384" y2="98" stroke={color} strokeWidth="1.5" strokeDasharray="4,3" />

            {/* AES rounds block */}
            <rect x="40" y="165" width="340" height="70" rx="8" fill="rgba(249,115,22,0.06)" stroke={`${color}40`} strokeWidth="1" />
            <text x="210" y="183" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">AES-256 — 14 Rondas</text>
            {['SubBytes', 'ShiftRows', 'MixColumns', 'AddRoundKey'].map((r, i) => (
              <g key={r}>
                <rect x={50 + i * 83} y="190" width="74" height="32" rx="5" fill={`${color}15`} stroke={`${color}40`} strokeWidth="1" />
                <text x={87 + i * 83} y="210" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">{r}</text>
              </g>
            ))}

            {/* ── RIGHT: Asymmetric ── */}
            <line x1="430" y1="20" x2="430" y2="320" stroke="var(--card-border)" strokeWidth="1.5" />
            <text x="625" y="28" textAnchor="middle" fill="#f97316" fontSize="13" fontWeight="700">ASSIMÉTRICA (RSA / ECC)</text>

            {/* Alice label */}
            <text x="450" y="52" fill="#fb923c" fontSize="11" fontWeight="600">Alice</text>
            <text x="450" y="67" fill="#fb923c" fontSize="8">cifra com</text>
            <text x="450" y="79" fill="#f97316" fontSize="8" fontWeight="600">chave pública de Bob</text>

            {/* Lock icon */}
            <rect x="450" y="90" width="26" height="20" rx="4" fill="none" stroke="#f97316" strokeWidth="2" />
            <path d="M457 90 Q463 82 469 90" fill="none" stroke="#f97316" strokeWidth="2" />
            <circle cx="463" cy="100" r="3" fill="#f97316" />
            <text x="463" y="122" textAnchor="middle" fill="#f97316" fontSize="8">Pública</text>

            <line x1="476" y1="100" x2="520" y2="100" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr)" />

            {/* Ciphertext box */}
            <rect x="520" y="84" width="90" height="32" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
            <text x="565" y="100" textAnchor="middle" fill="#fb923c" fontSize="9">Ciphertext</text>
            <text x="565" y="112" textAnchor="middle" fill="#fb923c" fontSize="9">RSA-2048</text>

            <line x1="610" y1="100" x2="650" y2="100" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr)" />

            {/* Bob label */}
            <text x="660" y="52" fill="#fb923c" fontSize="11" fontWeight="600">Bob</text>
            <text x="660" y="67" fill="#fb923c" fontSize="8">decifra com</text>
            <text x="660" y="79" fill="#f97316" fontSize="8" fontWeight="600">chave privada</text>

            {/* Key icon (private) */}
            <circle cx="668" cy="105" r="12" fill="none" stroke={color} strokeWidth="2" />
            <rect x="678" y="103" width="22" height="5" rx="2" fill={color} />
            <rect x="692" y="108" width="5" height="5" rx="1" fill={color} />
            <text x="668" y="126" textAnchor="middle" fill={color} fontSize="8">Privada</text>

            {/* Performance bars */}
            <text x="625" y="160" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="600">Desempenho (throughput)</text>
            <rect x="440" y="168" width="368" height="110" rx="8" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />

            <text x="460" y="193" fill="#fb923c" fontSize="10">AES-256</text>
            <rect x="530" y="181" width="220" height="16" rx="4" fill={`${color}20`} />
            <rect x="530" y="181" width="220" height="16" rx="4" fill={color} />
            <text x="758" y="193" fill="#fff" fontSize="9" fontWeight="700">~1 Gbps</text>

            <text x="460" y="220" fill="#fb923c" fontSize="10">RSA-2048</text>
            <rect x="530" y="208" width="220" height="16" rx="4" fill="rgba(249,115,22,0.12)" />
            <rect x="530" y="208" width="2" height="16" rx="1" fill="#f97316" />
            <text x="758" y="220" fill="#fb923c" fontSize="9" fontWeight="700">~1 kbps</text>

            <text x="470" y="256" fill="#fb923c" fontSize="10">ECC P-256</text>
            <rect x="540" y="244" width="200" height="16" rx="4" fill="rgba(249,115,22,0.12)" />
            <rect x="540" y="244" width="40" height="16" rx="4" fill="#f59e0b" />
            <text x="748" y="256" fill="#f59e0b" fontSize="10" fontWeight="700">~50 Mbps</text>

            {/* Defs */}
            <defs>
              <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <p style={S.p}>
          A criptografia simétrica usa a mesma chave para cifrar e decifrar. O AES (Advanced Encryption Standard, 2001) é o padrão global: cifra de bloco de 128 bits, chaves de 128, 192 ou 256 bits. O AES-256 executa 14 rondas de quatro operações — SubBytes (substituição não-linear), ShiftRows (permutação de bytes), MixColumns (difusão), AddRoundKey (XOR com subchave derivada) — e é aprovado pela NSA para informação classificada TOP SECRET.
        </p>
        <p style={S.p}>
          Os modos de operação determinam como blocos sucessivos são processados. CBC (Cipher Block Chaining) encadeia blocos com XOR, requer IV aleatório e não é paralelizável. GCM (Galois/Counter Mode) combina cifra CTR com autenticação Galois — garante confidencialidade e integridade num único passo, sendo o modo mandatório no TLS 1.3. CTR transforma a cifra de bloco num gerador de keystream, paralelizável mas sem autenticação.
        </p>
        <p style={S.p}>
          A criptografia assimétrica usa pares de chaves matematicamente ligadas. RSA (1977) baseia-se na dificuldade de fatorizar inteiros grandes — mínimo 2048 bits hoje, 3072 bits recomendado. ECC (Elliptic Curve Cryptography) oferece segurança equivalente ao RSA-3072 com chaves de apenas 256 bits — mais rápida, menor consumo de memória, ideal para dispositivos IoT, TLS e SSH. A cifra híbrida combina o melhor: assimétrica para trocar uma chave de sessão simétrica efémera, simétrica para cifrar os dados — exatamente o que o TLS faz em cada ligação HTTPS.
        </p>
        <div style={S.highlight}>
          Encriptação híbrida: o cliente gera uma chave de sessão AES-256 aleatória, cifra-a com a chave pública RSA/ECC do servidor (assimétrica) e envia. O servidor decifra com a sua chave privada. Toda a comunicação subsequente usa AES-GCM com a chave de sessão — desempenho de simétrica com distribuição de chaves de assimétrica.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 2 ─────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Funções de Hash e Assinaturas Digitais</h2>

        <p style={S.p}>
          As funções de hash criptográficas transformam uma entrada de tamanho arbitrário num digest de tamanho fixo, de forma determinística, unidirecional e resistente a colisões. São a primitiva base para assinaturas digitais, MACs, derivação de chaves e integridade de dados.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 820 320" width="100%" style={{ display: 'block' }}>
            <rect width="820" height="320" rx="10" fill="var(--bg-secondary)" />

            {/* Hash function diagram */}
            <text x="210" y="28" textAnchor="middle" fill={color} fontSize="13" fontWeight="700">FUNÇÃO DE HASH — EFEITO AVALANCHE</text>

            {/* Input 1 */}
            <rect x="20" y="45" width="100" height="28" rx="5" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
            <text x="70" y="63" textAnchor="middle" fill="#fbbf24" fontSize="11" fontFamily="monospace">"Hello"</text>

            <line x1="120" y1="59" x2="155" y2="59" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr2)" />

            <rect x="155" y="40" width="90" height="38" rx="6" fill={`${color}20`} stroke={color} strokeWidth="1.5" />
            <text x="200" y="61" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">SHA-256</text>
            <text x="200" y="73" textAnchor="middle" fill={`${color}80`} fontSize="8">256 bits</text>

            <line x1="245" y1="59" x2="275" y2="59" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr2)" />

            <rect x="275" y="42" width="140" height="34" rx="5" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
            <text x="345" y="60" textAnchor="middle" fill={color} fontSize="8" fontFamily="monospace">185f8db32...</text>
            <text x="345" y="70" textAnchor="middle" fill={`${color}70`} fontSize="8" fontFamily="monospace">...9d4a8c7f</text>

            {/* Input 2 (1 bit change) */}
            <rect x="20" y="95" width="100" height="28" rx="5" fill="rgba(249,115,22,0.06)" stroke="#ea580c80" strokeWidth="1" />
            <text x="70" y="113" textAnchor="middle" fill="#fbbf24" fontSize="11" fontFamily="monospace">"Hello!"</text>
            <text x="70" y="130" textAnchor="middle" fill="#f97316" fontSize="8">+1 caracter</text>

            <line x1="120" y1="109" x2="155" y2="80" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr2)" />

            <rect x="275" y="92" width="140" height="34" rx="5" fill="rgba(249,115,22,0.06)" stroke="#ea580c50" strokeWidth="1" />
            <text x="345" y="110" textAnchor="middle" fill="#f97316" fontSize="8" fontFamily="monospace">334d016f7...</text>
            <text x="345" y="120" textAnchor="middle" fill="#ea580c90" fontSize="8" fontFamily="monospace">...2b8f3e91</text>

            {/* ~50% annotation below both hash outputs */}
            <line x1="265" y1="140" x2="415" y2="140" stroke="#f97316" strokeWidth="0.8" strokeDasharray="3,2" />
            <line x1="275" y1="76" x2="265" y2="140" stroke="#f97316" strokeWidth="0.8" />
            <line x1="415" y1="126" x2="415" y2="140" stroke="#f97316" strokeWidth="0.8" />
            <text x="345" y="153" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="600">~50% bits diferentes</text>

            {/* Divider */}
            <line x1="440" y1="20" x2="440" y2="310" stroke="var(--card-border)" strokeWidth="1.5" />

            {/* Digital Signature */}
            <text x="630" y="28" textAnchor="middle" fill={color} fontSize="13" fontWeight="700">ASSINATURA DIGITAL</text>

            {/* Sign flow */}
            <text x="455" y="58" fill="#fb923c" fontSize="10">Mensagem</text>
            <rect x="455" y="63" width="80" height="24" rx="4" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
            <text x="495" y="79" textAnchor="middle" fill="#fbbf24" fontSize="10">Documento</text>

            <line x1="535" y1="75" x2="560" y2="75" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr2)" />

            <rect x="560" y="62" width="70" height="26" rx="5" fill={`${color}20`} stroke={color} strokeWidth="1.5" />
            <text x="595" y="78" textAnchor="middle" fill={color} fontSize="10" fontWeight="600">SHA-256</text>

            <line x1="630" y1="75" x2="655" y2="75" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr2)" />

            <rect x="655" y="55" width="60" height="40" rx="5" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="1.5" />
            <text x="685" y="72" textAnchor="middle" fill={color} fontSize="9">Cifrar</text>
            <text x="685" y="84" textAnchor="middle" fill={`${color}80`} fontSize="8">Chave Priv.</text>

            <line x1="715" y1="75" x2="740" y2="75" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr2)" />
            <rect x="740" y="62" width="65" height="26" rx="4" fill={`${color}15`} stroke={`${color}50`} strokeWidth="1" />
            <text x="772" y="78" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Assinatura</text>

            {/* Verify flow */}
            <text x="455" y="130" fill="#fb923c" fontSize="10">Verificação</text>

            <rect x="455" y="138" width="60" height="24" rx="4" fill={`${color}15`} stroke={`${color}50`} strokeWidth="1" />
            <text x="485" y="153" textAnchor="middle" fill={color} fontSize="9">Assinatura</text>

            <rect x="455" y="168" width="60" height="24" rx="4" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
            <text x="485" y="183" textAnchor="middle" fill="#fbbf24" fontSize="9">Documento</text>

            <line x1="515" y1="150" x2="545" y2="165" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr2)" />
            <line x1="515" y1="180" x2="545" y2="175" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr2)" />

            <rect x="545" y="152" width="80" height="30" rx="5" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
            <text x="585" y="168" textAnchor="middle" fill="#fb923c" fontSize="9">Pub Key +</text>
            <text x="585" y="178" textAnchor="middle" fill="#fb923c" fontSize="9">Compare</text>

            <line x1="625" y1="167" x2="655" y2="167" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr2)" />

            <rect x="655" y="152" width="65" height="30" rx="5" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" />
            <text x="687" y="168" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">VÁLIDA</text>
            <text x="687" y="179" textAnchor="middle" fill="#f97316" fontSize="8">✓</text>

            {/* HMAC */}
            <text x="455" y="230" fill={color} fontSize="11" fontWeight="700">HMAC (MAC simétrico)</text>
            <rect x="455" y="238" width="340" height="60" rx="8" fill="rgba(249,115,22,0.06)" stroke={`${color}30`} strokeWidth="1" />
            <rect x="470" y="252" width="65" height="32" rx="4" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
            <text x="502" y="268" textAnchor="middle" fill="#fb923c" fontSize="9">Mensagem</text>
            <text x="502" y="278" textAnchor="middle" fill="#fb923c" fontSize="8">+ Chave</text>
            <line x1="535" y1="268" x2="555" y2="268" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr2)" />
            <rect x="555" y="252" width="65" height="32" rx="4" fill={`${color}20`} stroke={color} strokeWidth="1.5" />
            <text x="587" y="268" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">HMAC</text>
            <text x="587" y="278" textAnchor="middle" fill={`${color}80`} fontSize="8">-SHA256</text>
            <line x1="620" y1="268" x2="640" y2="268" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr2)" />
            <rect x="640" y="252" width="60" height="32" rx="4" fill={`${color}15`} stroke={`${color}40`} strokeWidth="1" />
            <text x="670" y="268" textAnchor="middle" fill={color} fontSize="9">MAC</text>
            <text x="670" y="278" textAnchor="middle" fill={`${color}70`} fontSize="8">32 bytes</text>
            <text x="715" y="260" fill="#fb923c" fontSize="8">JWT</text>
            <text x="715" y="272" fill="#fb923c" fontSize="8">APIs</text>
            <text x="715" y="284" fill="#fb923c" fontSize="8">HS256</text>

            {/* Broken hashes */}
            <rect x="20" y="170" width="400" height="50" rx="8" fill="var(--bg-secondary)" stroke="rgba(249,115,22,0.20)" strokeWidth="1" />
            <text x="30" y="188" fill="#f97316" fontSize="11" fontWeight="600">Algoritmos Quebrados — NÃO USAR para segurança</text>
            <rect x="30" y="196" width="55" height="16" rx="4" fill="rgba(249,115,22,0.20)" stroke="#ea580c50" strokeWidth="1" />
            <text x="57" y="207" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600">MD5</text>
            <rect x="95" y="196" width="65" height="16" rx="4" fill="rgba(249,115,22,0.20)" stroke="#ea580c50" strokeWidth="1" />
            <text x="127" y="207" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600">SHA-1</text>
            <text x="170" y="207" fill="#fb923c" fontSize="9">Colisões demonstradas, deprecados pelo NIST</text>

            {/* SHA families */}
            <rect x="20" y="232" width="400" height="70" rx="8" fill="rgba(249,115,22,0.06)" stroke={`${color}20`} strokeWidth="1" />
            <text x="30" y="250" fill={color} fontSize="11" fontWeight="600">Funções Recomendadas</text>
            {[
              { name: 'SHA-256', bits: '256', use: 'TLS, código, JWT' },
              { name: 'SHA-512', bits: '512', use: 'Alta segurança' },
              { name: 'SHA-3', bits: '256/512', use: 'Backup design' },
            ].map((h, i) => (
              <g key={h.name}>
                <rect x={30 + i * 130} y="258" width="120" height="34" rx="4" fill={`${color}10`} stroke={`${color}30`} strokeWidth="1" />
                <text x={90 + i * 130} y="272" textAnchor="middle" fill={color} fontSize="10" fontWeight="600">{h.name}</text>
                <text x={90 + i * 130} y="283" textAnchor="middle" fill="#fb923c" fontSize="8">{h.bits} bits · {h.use}</text>
              </g>
            ))}

            <defs>
              <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <p style={S.p}>
          As funções de hash criptográficas têm quatro propriedades essenciais: determinismo (mesma entrada produz sempre o mesmo digest), eficiência computacional, resistência à pré-imagem (impossível inverter o hash para encontrar a entrada) e efeito avalanche (uma alteração mínima na entrada muda aproximadamente 50% dos bits do digest). SHA-2 (SHA-256, SHA-512) é o padrão NIST amplamente utilizado. SHA-3/Keccak, baseado em construção sponge, serve de alternativa caso o SHA-2 seja comprometido.
        </p>
        <p style={S.p}>
          As assinaturas digitais fornecem autenticação, integridade e não-repúdio. O processo de assinatura: calcula-se o hash da mensagem, cifra-se o hash com a chave privada do signatário — o resultado é a assinatura. Para verificar: decifra-se a assinatura com a chave pública do signatário, compara-se com o hash da mensagem recalculado independentemente. Se coincidirem, a assinatura é válida. Algoritmos modernos: RSA-PSS (padding probabilístico), ECDSA (usado em Bitcoin e TLS), EdDSA/Ed25519 (mais rápido, sem vulnerabilidade a números aleatórios fracos — preferido em sistemas modernos como SSH, Signal, WireGuard).
        </p>
        <div style={S.highlight}>
          HMAC (Hash-based Message Authentication Code): variante simétrica que combina uma chave secreta partilhada com uma função de hash — garante integridade e autenticação sem necessidade de criptografia assimétrica. Usado em autenticação de APIs REST, JWT com algoritmo HS256 e autenticação de sessões web. O HMAC-SHA256 é standardizado no RFC 2104.
        </div>
        <div style={S.note}>
          MD5 e SHA-1 estão criptograficamente quebrados: colisões práticas foram demonstradas (SHA-1 em 2017 pelo Google SHAttered). Nunca devem ser usados para segurança — apenas para checksums não-críticos onde a velocidade é prioritária.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 3 ─────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. TLS 1.3 — Transport Layer Security</h2>

        <p style={S.p}>
          O TLS (Transport Layer Security) é o protocolo que garante confidencialidade, integridade e autenticação para comunicações em rede. O TLS 1.3 (RFC 8446, 2018) representa uma remodelação significativa — eliminou suites de cifra fracas, tornou o forward secrecy obrigatório e reduziu a latência do handshake para 1-RTT.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 820 390" width="100%" style={{ display: 'block' }}>
            <rect width="820" height="390" rx="10" fill="var(--bg-secondary)" />

            <text x="410" y="26" textAnchor="middle" fill={color} fontSize="13" fontWeight="700">TLS 1.3 HANDSHAKE — 1-RTT vs TLS 1.2 — 2-RTT</text>

            {/* TLS 1.3 column */}
            <text x="200" y="48" textAnchor="middle" fill={color} fontSize="12" fontWeight="600">TLS 1.3</text>
            <line x1="100" y1="55" x2="100" y2="300" stroke={`${color}40`} strokeWidth="1.5" />
            <line x1="300" y1="55" x2="300" y2="300" stroke={`${color}40`} strokeWidth="1.5" />
            <text x="100" y="70" textAnchor="middle" fill="#fb923c" fontSize="10">Cliente</text>
            <text x="300" y="70" textAnchor="middle" fill="#fb923c" fontSize="10">Servidor</text>

            {/* Round 1 → */}
            <line x1="100" y1="92" x2="298" y2="92" stroke={color} strokeWidth="1.5" markerEnd="url(#arrTLS)" />
            <text x="200" y="86" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">ClientHello + key_share</text>
            <text x="200" y="100" textAnchor="middle" fill="#fb923c" fontSize="8">suites suportadas, ECDHE pub key</text>

            {/* Round 1 ← */}
            <line x1="300" y1="145" x2="102" y2="145" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrTLS2)" />
            <text x="200" y="139" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600">ServerHello + key_share</text>
            <text x="200" y="153" textAnchor="middle" fill="#fb923c" fontSize="8">Certificado + Finished (cifrado)</text>

            <text x="58" y="176" fill={color} fontSize="8">Deriva</text>
            <text x="58" y="186" fill={color} fontSize="8">session</text>
            <text x="58" y="196" fill={color} fontSize="8">keys</text>
            <text x="332" y="171" fill="#f97316" fontSize="8">Deriva</text>
            <text x="332" y="181" fill="#f97316" fontSize="8">session</text>
            <text x="332" y="191" fill="#f97316" fontSize="8">keys</text>

            {/* Round 2 → Finished */}
            <line x1="100" y1="218" x2="298" y2="218" stroke={color} strokeWidth="1.5" markerEnd="url(#arrTLS)" />
            <text x="200" y="212" textAnchor="middle" fill={color} fontSize="9">Client Finished</text>

            {/* Application Data */}
            <rect x="60" y="230" width="280" height="26" rx="5" fill={`${color}15`} stroke={`${color}40`} strokeWidth="1" />
            <text x="200" y="247" textAnchor="middle" fill={color} fontSize="10" fontWeight="600">Dados de Aplicação Cifrados (AES-256-GCM)</text>

            <text x="200" y="280" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">1-RTT total</text>

            {/* Divider */}
            <line x1="420" y1="50" x2="420" y2="300" stroke="var(--card-border)" strokeWidth="1.5" />

            {/* TLS 1.2 column */}
            <text x="620" y="48" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="600">TLS 1.2 (deprecado)</text>
            <line x1="520" y1="55" x2="520" y2="300" stroke="rgba(249,115,22,0.20)" strokeWidth="1.5" />
            <line x1="720" y1="55" x2="720" y2="300" stroke="rgba(249,115,22,0.20)" strokeWidth="1.5" />
            <text x="520" y="70" textAnchor="middle" fill="#fb923c" fontSize="10">Cliente</text>
            <text x="720" y="70" textAnchor="middle" fill="#fb923c" fontSize="10">Servidor</text>

            <line x1="520" y1="92" x2="718" y2="92" stroke="#f97316" strokeWidth="1" markerEnd="url(#arrRed)" />
            <text x="620" y="86" textAnchor="middle" fill="#f97316" fontSize="9">ClientHello</text>

            <line x1="720" y1="127" x2="522" y2="127" stroke="#f97316" strokeWidth="1" markerEnd="url(#arrOrange)" />
            <text x="620" y="121" textAnchor="middle" fill="#f97316" fontSize="9">ServerHello + Certificado</text>

            <line x1="520" y1="168" x2="718" y2="168" stroke="#f97316" strokeWidth="1" markerEnd="url(#arrRed)" />
            <text x="620" y="162" textAnchor="middle" fill="#f97316" fontSize="9">ClientKeyExchange + ChangeCipherSpec</text>

            <line x1="720" y1="209" x2="522" y2="209" stroke="#f97316" strokeWidth="1" markerEnd="url(#arrOrange)" />
            <text x="620" y="203" textAnchor="middle" fill="#f97316" fontSize="9">ChangeCipherSpec + Finished</text>

            <rect x="480" y="222" width="280" height="26" rx="5" fill="rgba(249,115,22,0.10)" stroke="#ea580c50" strokeWidth="1" />
            <text x="620" y="239" textAnchor="middle" fill="#f97316" fontSize="10">Dados de Aplicação Cifrados</text>

            <text x="620" y="280" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">2-RTT total (+latência)</text>

            {/* Bottom full-width info boxes */}
            <line x1="20" y1="292" x2="800" y2="292" stroke="var(--card-border)" strokeWidth="1" />

            <rect x="20" y="300" width="390" height="76" rx="6" fill="rgba(249,115,22,0.06)" stroke={`${color}25`} strokeWidth="1" />
            <text x="215" y="317" textAnchor="middle" fill={color} fontSize="10" fontWeight="600">TLS 1.3 — Melhorias</text>
            <text x="30" y="333" fill="#fb923c" fontSize="9">• 0-RTT resumption: envia dados logo no 1.º pacote</text>
            <text x="30" y="348" fill="#fb923c" fontSize="9">• Forward secrecy obrigatório (ECDHE efémero)</text>
            <text x="30" y="363" fill="#fb923c" fontSize="9">• Apenas 5 cipher suites, todas AEAD</text>

            <rect x="420" y="300" width="380" height="76" rx="6" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" strokeWidth="1" />
            <text x="610" y="317" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="600">TLS 1.2 permitia (removido no 1.3):</text>
            <text x="430" y="333" fill="#fb923c" fontSize="9">• RC4, 3DES, MD5, SHA-1</text>
            <text x="610" y="333" fill="#fb923c" fontSize="9">• RSA key exchange (sem FS)</text>
            <text x="430" y="348" fill="#fb923c" fontSize="9">• Renegociação insegura</text>
            <text x="610" y="348" fill="#fb923c" fontSize="9">• Compressão (CRIME attack)</text>

            <defs>
              <marker id="arrTLS" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill={color} />
              </marker>
              <marker id="arrTLS2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
              </marker>
              <marker id="arrRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
              </marker>
              <marker id="arrOrange" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <p style={S.p}>
          O TLS 1.3 reduziu o handshake para 1-RTT (Round-Trip Time), tornando as ligações HTTPS significativamente mais rápidas. O cliente envia logo no primeiro pacote os parâmetros suportados e a sua chave pública efémera (key_share). O servidor responde com a chave pública selecionada, o certificado e o Finished — tudo já cifrado. Ambos derivam independentemente as chaves de sessão através de HKDF, sem que a chave privada do servidor participie na derivação de chaves de dados.
        </p>
        <p style={S.p}>
          O forward secrecy (confidencialidade futura) é obrigatório no TLS 1.3: mesmo que a chave privada do servidor seja comprometida no futuro, as sessões passadas não podem ser decifradas, porque as chaves de sessão foram geradas por troca efémera Diffie-Hellman (ECDHE) e nunca foram persistidas. O TLS 1.3 apenas permite 5 cipher suites, todas com AEAD (Authenticated Encryption with Associated Data): TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256, entre outras.
        </p>
        <p style={S.p}>
          A validação de certificados envolve verificar a cadeia de assinaturas até uma CA raiz de confiança, verificar a revogação (OCSP stapling — o servidor pré-busca a resposta OCSP e inclui-a no handshake, evitando latência adicional) e verificar o hostname via SNI (Server Name Indication). O Certificate Transparency (CT) exige que todos os certificados TLS publicamente confiáveis sejam registados em logs públicos auditáveis — permite detetar emissão não autorizada.
        </p>
        <div style={S.highlight}>
          Cipher suites TLS 1.3 recomendadas: TLS_AES_256_GCM_SHA384 (AES-256 para dados, SHA-384 para integridade) e TLS_CHACHA20_POLY1305_SHA256 (preferido em dispositivos móveis e IoT sem aceleração AES-NI por hardware).
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 4 ─────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. PKI — Public Key Infrastructure</h2>

        <p style={S.p}>
          A PKI cria a infraestrutura de confiança para certificados digitais. Uma Certificate Authority (CA) é uma terceira parte de confiança que atesta a identidade do titular de um certificado, assinando digitalmente o seu certificado com a própria chave privada. Cerca de 100 CAs raiz estão nos trust stores dos principais browsers.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 840 390" width="100%" style={{ display: 'block' }}>
            <rect width="820" height="370" rx="10" fill="var(--bg-secondary)" />

            <text x="410" y="26" textAnchor="middle" fill={color} fontSize="13" fontWeight="700">HIERARQUIA PKI — CADEIA DE CONFIANÇA</text>

            {/* Root CA */}
            <rect x="290" y="38" width="240" height="52" rx="8" fill="#c2410c" stroke={color} strokeWidth="2" />
            <text x="410" y="58" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">Root CA</text>
            <text x="410" y="72" textAnchor="middle" fill="#fff" fontSize="9">Air-gapped · Offline · Cert 20 anos</text>
            <text x="410" y="83" textAnchor="middle" fill="#fff" fontSize="8">~100 roots em browser trust stores</text>

            {/* Lines to intermediate */}
            <line x1="340" y1="90" x2="180" y2="135" stroke={`${color}60`} strokeWidth="1.5" />
            <line x1="410" y1="90" x2="410" y2="135" stroke={`${color}60`} strokeWidth="1.5" />
            <line x1="480" y1="90" x2="640" y2="135" stroke={`${color}60`} strokeWidth="1.5" />

            {/* Intermediate CAs — evenly spaced, width 180 each */}
            {[
              { cx: 180, label: 'Inter CA — TLS',   sub: 'Online · 5 anos' },
              { cx: 410, label: 'Inter CA — Code',  sub: 'Online · 5 anos' },
              { cx: 640, label: 'Inter CA — Email', sub: 'Online · 5 anos' },
            ].map(({ cx, label, sub }) => (
              <g key={label}>
                <rect x={cx - 90} y="135" width="180" height="44" rx="7" fill={`${color}18`} stroke={color} strokeWidth="1.5" />
                <text x={cx} y="155" textAnchor="middle" fill={color} fontSize="10" fontWeight="600">{label}</text>
                <text x={cx} y="170" textAnchor="middle" fill="#fb923c" fontSize="9">{sub}</text>
              </g>
            ))}

            {/* Lines to end entities — cx positions: 82, 246, 410, 574, 738 */}
            <line x1="140" y1="179" x2="82"  y2="220" stroke={`${color}50`} strokeWidth="1.2" />
            <line x1="220" y1="179" x2="246" y2="220" stroke={`${color}50`} strokeWidth="1.2" />
            <line x1="410" y1="179" x2="410" y2="220" stroke={`${color}50`} strokeWidth="1.2" />
            <line x1="590" y1="179" x2="574" y2="220" stroke={`${color}50`} strokeWidth="1.2" />
            <line x1="640" y1="179" x2="738" y2="220" stroke={`${color}50`} strokeWidth="1.2" />

            {/* End-entity certs — 5 boxes, w=152, gap=8, total=5*152+4*8=792, offset=14 */}
            {[
              { cx:  90, label: 'Cert TLS',         sub: '1 ano · DV/OV/EV' },
              { cx: 254, label: "Let's Encrypt",     sub: '90 dias · DV'     },
              { cx: 418, label: 'Code Signing Cert', sub: '1 ano · OV'       },
              { cx: 582, label: 'S/MIME Email Cert', sub: '2 anos · S/MIME'  },
              { cx: 746, label: 'Client Cert',       sub: '1 ano · OV'       },
            ].map(({ cx, label, sub }) => (
              <g key={label}>
                <rect x={cx - 76} y="220" width="152" height="42" rx="6" fill={`${color}12`} stroke={`${color}40`} strokeWidth="1" />
                <text x={cx} y="238" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">{label}</text>
                <text x={cx} y="253" textAnchor="middle" fill="#fb923c" fontSize="8">{sub}</text>
              </g>
            ))}

            {/* Certificate types legend */}
            <rect x="20" y="280" width="780" height="100" rx="8" fill="rgba(249,115,22,0.06)" stroke={`${color}25`} strokeWidth="1" />
            <text x="30" y="298" fill={color} fontSize="10" fontWeight="700">Tipos de Certificado:</text>
            <text x="30" y="314" fill="#fb923c" fontSize="9"><tspan fontWeight="600" fill="#f97316">DV</tspan> — Domain Validation: automatizado, gratuito (Let's Encrypt), emitido em segundos via ACME</text>
            <text x="30" y="330" fill="#fb923c" fontSize="9"><tspan fontWeight="600" fill="#f97316">OV</tspan> — Organization Validation: verificação manual da organização, 1-2 dias</text>
            <text x="30" y="346" fill="#fb923c" fontSize="9"><tspan fontWeight="600" fill="#f97316">EV</tspan> — Extended Validation: vetting extenso, semanas — barra verde (legacy)</text>
            <text x="30" y="362" fill="#fb923c" fontSize="9"><tspan fontWeight="600" fill="#f97316">CT Logs</tspan> — Certificate Transparency: obrigatório desde 2018 (Chrome)</text>
          </svg>
        </div>

        <p style={S.p}>
          As CAs raiz são mantidas offline (air-gapped) para máxima segurança — apenas as CAs intermediárias estão online e emitem certificados de utilizador final. Esta hierarquia limita o impacto de um compromisso: se uma CA intermédia for comprometida, pode ser revogada sem afetar a raiz. A validação de uma cadeia de certificados percorre a hierarquia de baixo para cima, verificando cada assinatura, até atingir uma raiz de confiança.
        </p>
        <p style={S.p}>
          A revogação de certificados pode ser feita por CRL (Certificate Revocation List — lista completa publicada periodicamente, grande, não-real-time) ou OCSP (Online Certificate Status Protocol — consulta em tempo real ao OCSP responder da CA, latência adicional). O OCSP Stapling resolve o problema de latência: o servidor TLS pré-busca a resposta OCSP, assina-a e inclui-a no handshake TLS — sem consultas adicionais pelo cliente.
        </p>
        <div style={S.highlight}>
          Certificate Transparency (CT): desde 2018, todos os certificados TLS emitidos por CAs confiáveis pelo Chrome devem ser registados em pelo menos dois CT logs públicos (Merkle trees auditáveis). Isto permite que qualquer pessoa detete certificados fraudulentos para o seu domínio — por exemplo, o Cert Spotter da SSLMate monitoriza CT logs em tempo real.
        </div>
        <div style={S.note}>
          Let's Encrypt (2015) democratizou o HTTPS: certificados DV gratuitos, automatizados via protocolo ACME, com validade de 90 dias (forçando renovação automática e boa higiene). Hoje emite mais de 3 mil milhões de certificados por ano — representa &gt;80% dos domínios HTTPS ativos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 5 ─────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Criptografia Pós-Quântica</h2>

        <p style={S.p}>
          Os computadores quânticos, quando suficientemente poderosos, ameaçam toda a criptografia assimétrica atual. O algoritmo de Shor (1994) pode fatorizar inteiros grandes em tempo polinomial num computador quântico — tornando RSA e ECC inseguros. O algoritmo de Grover reduz efetivamente para metade o comprimento das chaves simétricas (AES-128 ficaria equivalente a AES-64), mas AES-256 mantém-se seguro.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 820 340" width="100%" style={{ display: 'block' }}>
            <rect width="820" height="340" rx="10" fill="var(--bg-secondary)" />

            <text x="410" y="26" textAnchor="middle" fill={color} fontSize="13" fontWeight="700">CRIPTOGRAFIA PÓS-QUÂNTICA — NIST PQC STANDARDISATION</text>

            {/* Timeline */}
            <line x1="40" y1="75" x2="780" y2="75" stroke="#f97316" strokeWidth="2" />

            {[
              { x: 60, year: '1994', label: "Shor's\nAlgorithm", c: '#f97316' },
              { x: 200, year: '2016', label: 'NIST PQC\nCompetition', c: color },
              { x: 380, year: '2022', label: 'NIST selects\n4 algorithms', c: color },
              { x: 560, year: '2024', label: 'FIPS 203/204\nstandards', c: color },
              { x: 720, year: '2030+', label: 'Harvest now\ndecrypt later', c: '#f97316' },
            ].map(({ x, year, label, c }) => (
              <g key={year}>
                <circle cx={x} cy="75" r="6" fill={c} />
                <text x={x} y="58" textAnchor="middle" fill={c} fontSize="9" fontWeight="700">{year}</text>
                {label.split('\n').map((l, i) => (
                  <text key={i} x={x} y={95 + i * 13} textAnchor="middle" fill="#fb923c" fontSize="8">{l}</text>
                ))}
              </g>
            ))}

            {/* Algorithm table */}
            <text x="410" y="140" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">Algoritmos Selecionados pelo NIST (2022-2024)</text>

            <rect x="20" y="148" width="780" height="22" rx="4" fill={`${color}20`} />
            {['Algoritmo', 'Tipo', 'Base Matemática', 'Chave Pública', 'Uso'].map((h, i) => (
              <text key={h} x={[30, 175, 295, 495, 645][i]} y="163" fill={color} fontSize="10" fontWeight="700">{h}</text>
            ))}

            {[
              ['CRYSTALS-Kyber (ML-KEM)', 'KEM', 'Module-LWE (Lattice)', '1184 bytes (Kyber-768)', 'Key Exchange, TLS'],
              ['CRYSTALS-Dilithium (ML-DSA)', 'Assinatura', 'Module-LWE (Lattice)', '1952 bytes', 'Assinaturas Digitais'],
              ['FALCON', 'Assinatura', 'NTRU Lattice', '897 bytes (FALCON-512)', 'Assinaturas compactas'],
              ['SPHINCS+', 'Assinatura', 'Hash-based', '32 bytes (seed)', 'Backup / diversidade'],
            ].map((row, ri) => (
              <g key={ri}>
                <rect x="20" y={170 + ri * 28} width="780" height="26" rx="3" fill={ri % 2 === 0 ? 'rgba(249,115,22,0.08)' : 'rgba(249,115,22,0.04)'} />
                {row.map((cell, ci) => (
                  <text key={ci} x={[30, 175, 295, 495, 645][ci]} y={186 + ri * 28} fill={ci === 0 ? color : '#fb923c'} fontSize={ci === 0 ? 9 : 8} fontWeight={ci === 0 ? 600 : 400}>{cell}</text>
                ))}
              </g>
            ))}

            {/* Key size comparison — 2 rows */}
            <text x="410" y="285" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="600">Comparação de tamanho de chave pública</text>

            {[
              { label: 'RSA-2048',   size: 256,  bar: 35,  row: 0, col: 0 },
              { label: 'ECC P-256',  size: 64,   bar: 8,   row: 0, col: 1 },
              { label: 'Kyber-768',  size: 1184, bar: 145, row: 1, col: 0 },
              { label: 'Dilithium-3',size: 1952, bar: 240, row: 1, col: 1 },
            ].map(({ label, size, bar, row, col }) => {
              const x = 20 + col * 400;
              const y = 293 + row * 20;
              return (
                <g key={label}>
                  <text x={x} y={y + 8} fill={color} fontSize="9" fontWeight="600">{label}</text>
                  <rect x={x + 80} y={y} width={bar} height="10" rx="3" fill={color} />
                  <text x={x + 80 + bar + 4} y={y + 9} fill="#fb923c" fontSize="8">{size}B</text>
                </g>
              );
            })}
          </svg>
        </div>

        <p style={S.p}>
          O NIST iniciou em 2016 o processo de estandardização de criptografia pós-quântica, recebendo 69 candidatos. Em 2022 selecionou CRYSTALS-Kyber (encapsulamento de chave, baseado em lattice), CRYSTALS-Dilithium e FALCON (assinaturas digitais, lattice) e SPHINCS+ (assinaturas baseadas em hash, mais conservador). Os standards formais FIPS 203 (ML-KEM), FIPS 204 (ML-DSA) e FIPS 205 (SLH-DSA) foram publicados em 2024.
        </p>
        <p style={S.p}>
          A criptografia baseada em lattices fundamenta-se na dificuldade do problema Learning With Errors (LWE) — acredita-se ser resistente a computadores quânticos. As chaves são maiores do que RSA ou ECC (Kyber-768 tem chave pública de 1184 bytes vs 256 bytes para RSA-2048), mas as operações são mais rápidas. SPHINCS+ usa apenas funções de hash como primitivas — a segurança depende apenas das propriedades do hash, não de assunções algébricas novas.
        </p>
        <p style={S.p}>
          A ameaça "harvest now, decrypt later" é imediata: adversários com recursos (estados-nação) estão a recolher e armazenar tráfego cifrado hoje para o decifrar quando tiverem computadores quânticos suficientemente poderosos. Isto é crítico para segredos de longa duração — registos médicos, segredos de estado, propriedade intelectual. O TLS 1.3 já suporta hybrid key exchange (clássico + PQC) em modo experimental.
        </p>
        <div style={S.highlight}>
          Recomendação de migração NIST: organizações devem iniciar inventário de sistemas criptográficos agora (crypto-agility — capacidade de trocar algoritmos sem refazer toda a arquitetura), priorizar proteção de segredos de longa duração e planear migração para ML-KEM e ML-DSA até 2030. RSA e ECC devem ser descontinuados para novos sistemas antes de 2035.
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Criptografia Simétrica e Assimétrica</strong> — simétrica (AES-256) usa a mesma chave para cifrar e decifrar — rápida mas requer partilha segura de chave; assimétrica (RSA, ECC) usa par público/privado — soluciona a distribuição de chaves mas é ordens de grandeza mais lenta.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Funções de Hash e Assinaturas Digitais</strong> — SHA-256 produz um digest de 256 bits determinístico e resistente a colisões; assinaturas digitais combinam hash com criptografia assimétrica para autenticar a origem e integridade de mensagens e software.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>TLS 1.3 — Transport Layer Security</strong> — TLS 1.3 estabelece comunicação cifrada em 1-RTT (vs. 2-RTT no TLS 1.2), removeu cifras inseguras (RC4, 3DES) e usa Perfect Forward Secrecy — é o protocolo que protege HTTPS, SMTP e praticamente toda a internet.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>PKI — Public Key Infrastructure</strong> — PKI é o sistema de certificados digitais (X.509) emitidos por Certificate Authorities que permite verificar a identidade de servidores e utilizadores; a cadeia de confiança vai de Root CA a certificados de entidade final.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Criptografia Pós-Quântica</strong> — algoritmos NIST PQC (CRYSTALS-Kyber para KEM, CRYSTALS-Dilithium para assinaturas) resistem a ataques de computadores quânticos; a migração é urgente para dados que devem permanecer secretos décadas.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
