import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './EdgeAI';

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

const m = modules[9];

export default function EDG10() {
  return (
    <div style={S.page}>
      <Link to="/edge-ai" style={S.back}>← Edge AI &amp; TinyML</Link>
      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* Secção 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Threat Model para Edge AI</h2>
        <p style={S.p}>
          O threat model de Edge AI é mais complexo que ML em cloud porque os dispositivos estão
          fora do perímetro de segurança controlado — em campo, fisicamente acessíveis a adversários.
          Os activos em risco são distintos: modelos de ML representam propriedade intelectual
          valiosa (anos de treino e dados proprietários); dados de sensores podem conter informação
          privada ou operacional crítica; decisões de inferência controlam sistemas físicos
          (válvulas industriais, freios de veículos).
        </p>
        <p style={S.p}>
          O STRIDE framework identifica seis categorias de ameaça aplicáveis ao Edge AI: Spoofing
          (injectar dados de sensores falsos para manipular inferências); Tampering (modificar pesos
          do modelo em memória FLASH para degradar performance ou implantar backdoors); Information
          Disclosure (extrair o modelo do dispositivo via JTAG, UART debug, ou análise de firmware);
          Denial of Service (sobrecarregar o CPU/NPU com inputs adversariais que maximizam
          computação); Elevation of Privilege (usar vulnerabilidade no ML runtime para escapar
          do sandbox).
        </p>
        <div style={S.diagram}>
          {/* Row 1: Attack vectors | Edge Device | Asset targets */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '0.75rem', alignItems: 'center', marginBottom: '0.65rem' }}>
            {/* Left: attack vectors */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {[
                { lbl: 'Acesso Físico', lines: ['JTAG / fault injection', 'side-channel'] },
                { lbl: 'Rede', lines: ['MITM / replay', 'OTA malicioso'] },
                { lbl: 'Supply Chain', lines: ['firmware backdoor', 'modelo comprometido'] },
              ].map(({ lbl, lines }) => (
                <div key={lbl} style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(148,163,184,0.2)', borderRadius: 6, padding: '0.35rem 0.6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>{lbl}</div>
                  <div style={{ textAlign: 'right' }}>
                    {lines.map(l => <div key={l} style={{ fontSize: '0.58rem', color: '#64748b', fontFamily: 'monospace' }}>{l}</div>)}
                  </div>
                </div>
              ))}
            </div>

            {/* Center: Edge Device */}
            <div style={{ background: 'rgba(249,115,22,0.12)', border: '2px solid #f97316', borderRadius: 10, padding: '0.8rem 1.1rem', textAlign: 'center', flexShrink: 0 }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.2rem' }}>Edge Device</div>
              <div style={{ fontSize: '0.6rem', color: '#94a3b8', fontFamily: 'monospace' }}>modelo ML + dados + controlo</div>
            </div>

            {/* Right: asset targets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {[
                { lbl: 'Pesos do Modelo', sub: 'roubo de IP' },
                { lbl: 'Dados de Sensores', sub: 'privacidade' },
                { lbl: 'Resultados Inferência', sub: 'manipulação' },
              ].map(({ lbl, sub }) => (
                <div key={lbl} style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 6, padding: '0.35rem 0.6rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 600, color: '#f97316', fontFamily: 'monospace' }}>{lbl}</div>
                  <div style={{ fontSize: '0.58rem', color: '#64748b', fontFamily: 'monospace' }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: STRIDE table */}
          <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.55rem 0.8rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.4rem', textAlign: 'center' }}>STRIDE — Ameaças Edge AI</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.4rem' }}>
              {[
                { s: 'Spoofing', d: 'dados de sensores falsos' },
                { s: 'Tampering', d: 'modificar pesos em FLASH' },
                { s: 'Info Disclosure', d: 'extracção do modelo' },
                { s: 'Denial of Service', d: 'inputs adversariais exaustivos' },
                { s: 'Elevation of Privilege', d: 'escape de sandbox ML runtime' },
              ].map(({ s, d }) => (
                <div key={s} style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: 6, padding: '0.35rem 0.4rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.15rem' }}>{s}</div>
                  <div style={{ fontSize: '0.57rem', color: '#94a3b8', fontFamily: 'monospace', lineHeight: 1.4 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={S.highlight}>
          Os atacantes em Edge AI têm perfis distintos: script kiddies (oportunistas, baixo custo),
          competidores (roubo de IP — modelos proprietários treinados em dados internos), e
          actores estado-nação (infra-estrutura crítica — power grids, veículos autónomos,
          equipamento médico).
        </div>
      </div>

      <hr style={S.divider} />

      {/* Secção 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Model Extraction e Protecção de IP</h2>
        <p style={S.p}>
          O model extraction attack (Tramèr et al., 2016) reconstrói um modelo funcional apenas
          observando inputs e outputs — sem acesso aos pesos. Em dispositivos edge com API de
          inferência exposta, o adversário submete sistematicamente queries (inputs aleatórios,
          inputs da fronteira de decisão, adversarial inputs) e treina um modelo substituto nas
          (input, output) pairs recolhidas. Com 10k-100k queries, um substituto atinge tipicamente
          85-95% da accuracy do modelo original.
        </p>
        <p style={S.p}>
          Protecções: truncar outputs para top-1 classe apenas (remove informação de soft labels
          que facilita a distillation); rate limiting de queries por cliente/IP; watermarking de
          modelos (Uchida et al., 2017) embebe um padrão secreto nos pesos que sobrevive à
          extracção — verifica a autoria do modelo extraído; model obfuscation com transformações
          equivalentes que tornam engenharia reversa mais custosa. Para modelos de alto valor
          (médico, industrial crítico), o deployment em TEE é a única solução robusta — os
          pesos nunca aparecem em plaintext na memória principal.
        </p>
        <div style={S.diagram}>
          {/* Row 1: Attack pipeline */}
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'monospace', marginBottom: '0.6rem', textAlign: 'center' }}>Ataque de Model Extraction</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.65rem' }}>
            {[
              { lbl: 'Adversário', sub: '10k-100k queries', active: false },
              { lbl: 'Modelo Alvo', sub: '(black-box API)', active: true },
              { lbl: 'Pares (in, out)', sub: 'dataset sintético', active: false },
              { lbl: 'Modelo Substituto', sub: '85-95% accuracy', active: false },
            ].map(({ lbl, sub, active }, i) => (
              <React.Fragment key={lbl}>
                <div style={{ flex: 1, background: active ? 'rgba(249,115,22,0.12)' : 'rgba(249,115,22,0.06)', border: active ? '1px solid rgba(249,115,22,0.5)' : '1px solid rgba(148,163,184,0.2)', borderRadius: 7, padding: '0.45rem 0.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.15rem' }}>{lbl}</div>
                  <div style={{ fontSize: '0.58rem', color: '#64748b', fontFamily: 'monospace' }}>{sub}</div>
                </div>
                {i === 0 && <div style={{ fontSize: '0.6rem', color: '#64748b', fontFamily: 'monospace', flexShrink: 0, textAlign: 'center' }}>inputs<br/>→</div>}
                {i === 1 && <div style={{ fontSize: '0.6rem', color: '#64748b', fontFamily: 'monospace', flexShrink: 0, textAlign: 'center' }}>outputs<br/>→</div>}
                {i === 2 && <div style={{ fontSize: '0.8rem', color: '#475569', flexShrink: 0 }}>→</div>}
              </React.Fragment>
            ))}
          </div>

          {/* Row 2: Defenses */}
          <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.6rem 0.8rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.45rem', textAlign: 'center' }}>Defesas contra Model Extraction</div>
            {[
              { d: 'Truncar output (top-1 apenas)', eff: 'Médio', c: '#f97316' },
              { d: 'Rate limiting por cliente/IP', eff: 'Médio', c: '#f97316' },
              { d: 'Watermarking nos pesos', eff: 'Detectivo', c: '#f97316' },
              { d: 'Model obfuscation', eff: 'Baixo', c: '#64748b' },
              { d: 'TEE (Trusted Execution Env)', eff: 'Alto', c: '#f97316' },
            ].map(({ d, eff, c }) => (
              <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <div style={{ flex: 1, background: `rgba(${c === '#64748b' ? '100,116,139' : '249,115,22'},0.06)`, border: `1px solid rgba(${c === '#64748b' ? '100,116,139' : '249,115,22'},0.15)`, borderRadius: 4, padding: '0.25rem 0.6rem' }}>
                  <span style={{ fontSize: '0.63rem', color: 'var(--text-primary)', fontFamily: 'monospace' }}>{d}</span>
                </div>
                <div style={{ background: `rgba(${c === '#64748b' ? '100,116,139' : '249,115,22'},0.15)`, border: `1px solid rgba(${c === '#64748b' ? '100,116,139' : '249,115,22'},0.35)`, borderRadius: 4, padding: '0.2rem 0.6rem', minWidth: 72, textAlign: 'center' }}>
                  <span style={{ fontSize: '0.63rem', fontWeight: 700, color: c, fontFamily: 'monospace' }}>{eff}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={S.note}>
          O watermarking de modelos é a única defesa que transforma uma extracção bem-sucedida em
          evidência legal — o padrão secreto embebido nos pesos é verificável e sobrevive à
          distillation para um modelo substituto, permitindo provar autoria em tribunal.
        </div>
      </div>

      <hr style={S.divider} />

      {/* Secção 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Ataques Adversariais em Edge</h2>
        <p style={S.p}>
          Os ataques adversariais em edge têm consequências físicas — um veículo autónomo que
          misclassifica um sinal de Stop como Speed Limit pode ser fatal. Os ataques físicos
          (patches impressos, adesivos, laser) são o vector real: Eykholt et al. (2018) mostrou
          que patches físicos em sinais de Stop enganam YOLOv2 com 100% de taxa de sucesso a
          distâncias de condução realistas.
        </p>
        <p style={S.p}>
          O Edge AI amplifica a superfície de ataque por ter sensores fisicamente acessíveis —
          lidar spoofing (reflectores retroreflectivos enganam LIDAR de veículos autónomos),
          camera blinding (LED infravermelho satura sensor), microphone injection (comandos
          ultrassónicos inaudíveis para humanos que controlam voice assistants). Defesas mais
          efectivas: adversarial training (incluir exemplos adversariais no treino — +20-30%
          de compute, melhora robustez 40-60% mas não elimina vulnerabilidade); randomized
          smoothing fornece garantias de robustez certificadas dentro de bola L2 de raio r —
          único método com provas formais.
        </p>
        <div style={S.diagram}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'monospace', marginBottom: '0.6rem', textAlign: 'center' }}>Ataques Adversariais em Sistemas Edge</div>

          {/* Row 1: Stop sign demo + Physical attacks */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '0.65rem' }}>
            {/* Left: perturbation equation — SVG for precise layout */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.6rem' }}>
              <svg width="100%" viewBox="0 0 320 120" style={{ display: 'block' }}>
                {/* Clean STOP sign */}
                <polygon points="72,18 108,18 126,36 126,72 108,90 72,90 54,72 54,36" fill="#f97316" />
                <text x="90" y="60" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="13" fontWeight="800">STOP</text>
                <text x="90" y="102" textAnchor="middle" fill="#94a3b8" fontSize="8">Input limpo</text>
                <text x="90" y="113" textAnchor="middle" fill="#f97316" fontSize="8">Modelo: STOP ✓</text>

                {/* + */}
                <text x="148" y="58" textAnchor="middle" fill="#f97316" fontSize="18" fontWeight="300">+</text>

                {/* Perturbation box */}
                <rect x="162" y="22" width="66" height="62" rx="5" fill="rgba(249,115,22,0.06)" stroke="rgba(148,163,184,0.3)" strokeWidth="1" strokeDasharray="4 2" />
                <text x="195" y="44" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">Perturbação</text>
                <text x="195" y="57" textAnchor="middle" fill="#64748b" fontSize="7.5">delta L-inf</text>
                <text x="195" y="69" textAnchor="middle" fill="#64748b" fontSize="7.5">{"< 8/255"}</text>
                <text x="195" y="102" textAnchor="middle" fill="#64748b" fontSize="8">imperceptível</text>

                {/* = */}
                <text x="244" y="58" textAnchor="middle" fill="#64748b" fontSize="18" fontWeight="300">=</text>

                {/* Adversarial STOP sign */}
                <polygon points="282,18 308,18 320,30 320,62 308,74 282,74 270,62 270,30" fill="#f97316" />
                <rect x="270" y="30" width="50" height="14" fill="rgba(0,0,0,0.6)" />
                <text x="295" y="40" textAnchor="middle" fill="#fbbf24" fontSize="6.5" fontWeight="700">patch adversarial</text>
                <text x="295" y="62" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="10" fontWeight="800">STOP</text>
                <text x="295" y="88" textAnchor="middle" fill="#94a3b8" fontSize="8">Input adversarial</text>
                <text x="295" y="99" textAnchor="middle" fill="#f97316" fontSize="8">Modelo: 45km/h ✗</text>
              </svg>
            </div>

            {/* Right: physical attacks */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.6rem' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.45rem', textAlign: 'center' }}>Ataques Físicos em Edge</div>
              {[
                { a: 'LIDAR Spoofing', d: 'reflectores retroreflectivos' },
                { a: 'Camera Blinding', d: 'LED infravermelho' },
                { a: 'Mic Injection', d: 'comandos ultrassónicos' },
                { a: 'GPS Spoofing', d: 'sinal GPS falso' },
              ].map(({ a, d }) => (
                <div key={a} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(148,163,184,0.15)', borderRadius: 5, padding: '0.28rem 0.5rem', marginBottom: '0.28rem' }}>
                  <span style={{ fontSize: '0.63rem', fontWeight: 600, color: '#f97316', fontFamily: 'monospace' }}>{a}</span>
                  <span style={{ fontSize: '0.58rem', color: '#64748b', fontFamily: 'monospace' }}>{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Defenses table */}
          <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.6rem 0.8rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.45rem', textAlign: 'center' }}>Defesas Comparadas</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.35rem' }}>
              {[
                { d: 'Adversarial Training', custo: '+25% compute treino', efic: '40-60% melhoria robustez' },
                { d: 'Randomized Smoothing', custo: '+inference overhead', efic: 'Garantias certificadas (L2 bola raio r)' },
                { d: 'Input Validation (OOD detection)', custo: 'modelo extra leve', efic: 'Detecta inputs fora distribuição' },
                { d: 'Feature Squeezing', custo: 'pré-processamento leve', efic: 'Remove perturbações de alta frequência' },
              ].map(({ d, custo, efic }) => (
                <div key={d} style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.18)', borderRadius: 6, padding: '0.35rem 0.5rem' }}>
                  <div style={{ fontSize: '0.63rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.12rem' }}>{d}</div>
                  <div style={{ fontSize: '0.58rem', color: '#64748b', fontFamily: 'monospace', marginBottom: '0.08rem' }}>{custo}</div>
                  <div style={{ fontSize: '0.58rem', color: '#94a3b8', fontFamily: 'monospace' }}>{efic}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={S.highlight}>
          O randomized smoothing (Cohen et al., 2019) é o único método com garantias de robustez
          formais e verificáveis — certifica que para qualquer input dentro de uma bola L2 de raio r
          à volta do input limpo, a classificação não muda. Prático para sistemas de certificação
          regulatória (ISO 26262 automotive, IEC 61508 safety).
        </div>
      </div>

      <hr style={S.divider} />

      {/* Secção 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. TrustZone, TEE e Secure Boot</h2>
        <p style={S.p}>
          O ARM TrustZone é o mecanismo de hardware dominante para isolamento de segurança em
          processadores ARM (Cortex-A e Cortex-M33+) — divide a execução entre Normal World
          (sistema operativo principal, aplicações) e Secure World (TEE, Trusted Execution
          Environment). O OP-TEE (Open Portable Trusted Execution Environment) é a implementação
          open-source de TEE mais usada em Linux embedded — Trusted Applications correm no Secure
          World com acesso a chaves criptográficas, dados biométricos, e podem executar inferência
          de ML isolada do mundo normal.
        </p>
        <p style={S.p}>
          Para protecção de modelos: os pesos são armazenados encriptados em FLASH, desencriptados
          apenas dentro do TEE (secure world) durante a inferência — o Normal World nunca tem
          acesso aos pesos em plaintext, tornando model extraction extremamente difícil mesmo com
          acesso físico. O Secure Boot implementa uma cadeia de confiança: o ROM bootloader é
          imutável (hardware), verifica assinatura criptográfica do primeiro bootloader, que
          verifica o seguinte, até ao kernel Linux e ao próprio modelo ML — qualquer modificação
          quebra a cadeia e impede o boot.
        </p>
        <div style={S.diagram}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'monospace', marginBottom: '0.6rem', textAlign: 'center' }}>ARM TrustZone — Arquitectura TEE</div>

          {/* Row 1: Normal World | SMC | Secure World */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '0.5rem', alignItems: 'stretch', marginBottom: '0.65rem' }}>
            {/* Normal World */}
            <div style={{ background: 'rgba(249,115,22,0.05)', border: '1.5px solid var(--card-border)', borderRadius: 8, padding: '0.6rem' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', textAlign: 'center', marginBottom: '0.4rem' }}>Normal World</div>
              {['Linux OS / Android', 'ML Runtime (llama.cpp)', 'Aplicações de utilizador', 'Resultados de inferência'].map(t => (
                <div key={t} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 4, padding: '0.25rem 0.5rem', marginBottom: '0.25rem', fontSize: '0.62rem', color: '#64748b', fontFamily: 'monospace', textAlign: 'center' }}>{t}</div>
              ))}
              <div style={{ fontSize: '0.58rem', color: '#64748b', fontFamily: 'monospace', textAlign: 'center', marginTop: '0.2rem' }}>Não-confiável (untrusted)</div>
            </div>

            {/* SMC bridge */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-secondary)', border: '1px solid rgba(249,115,22,0.4)', borderRadius: 7, padding: '0.5rem 0.6rem', gap: '0.1rem' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>SMC</div>
              <div style={{ fontSize: '0.55rem', color: '#64748b', fontFamily: 'monospace' }}>Secure</div>
              <div style={{ fontSize: '0.55rem', color: '#64748b', fontFamily: 'monospace' }}>Monitor</div>
            </div>

            {/* Secure World */}
            <div style={{ background: 'rgba(249,115,22,0.08)', border: '1.5px solid #f97316', borderRadius: 8, padding: '0.6rem' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', textAlign: 'center', marginBottom: '0.4rem' }}>Secure World (TEE)</div>
              {['OP-TEE OS', 'Chaves criptográficas (AES-256, Ed25519)', 'Pesos do modelo (plaintext)', 'Inferência segura isolada'].map(t => (
                <div key={t} style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 4, padding: '0.25rem 0.5rem', marginBottom: '0.25rem', fontSize: '0.62rem', color: 'var(--text-primary)', fontFamily: 'monospace', textAlign: 'center' }}>{t}</div>
              ))}
              <div style={{ fontSize: '0.58rem', color: '#f97316', fontFamily: 'monospace', textAlign: 'center', marginTop: '0.2rem' }}>Confiável (trusted)</div>
            </div>
          </div>

          {/* Row 2: Secure Boot chain */}
          <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.55rem 0.7rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.4rem', textAlign: 'center' }}>Cadeia de Secure Boot</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              {[
                { lines: ['ROM', 'Bootloader', '(imutável)'], root: true },
                { lines: ['BL1', '(assinado)'], root: false },
                { lines: ['BL2 +', 'OP-TEE', '(assinado)'], root: false },
                { lines: ['Linux', 'Kernel', '(assinado)'], root: false },
                { lines: ['Modelo ML', '(hash', 'verificado)'], root: false },
                { lines: ['Launch', '✓'], root: false },
              ].map(({ lines, root }, i) => (
                <React.Fragment key={i}>
                  <div style={{ flex: 1, background: root ? 'rgba(30,41,59,0.7)' : 'rgba(249,115,22,0.1)', border: root ? '1px solid rgba(71,85,105,0.4)' : '1px solid #f97316', borderRadius: 6, padding: '0.3rem 0.2rem', textAlign: 'center' }}>
                    {lines.map(l => <div key={l} style={{ fontSize: '0.58rem', color: root ? '#64748b' : 'var(--text-primary)', fontFamily: 'monospace', lineHeight: 1.4 }}>{l}</div>)}
                  </div>
                  {i < 5 && <div style={{ color: '#f97316', fontSize: '0.8rem', flexShrink: 0 }}>›</div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div style={S.note}>
          O TZASC (TrustZone Address Space Controller) partições o DRAM fisicamente — o Secure
          World tem regiões de memória inacessíveis ao Normal World mesmo via DMA attacks. O TZPC
          controla o acesso de periféricos (câmera, microfone, sensores biométricos) ao Secure World.
        </div>
      </div>

      <hr style={S.divider} />

      {/* Secção 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Defesas Práticas e Security by Design</h2>
        <p style={S.p}>
          A segurança em Edge AI deve ser integrada desde o início do design (Security by Design)
          — adicioná-la depois é mais custosa e menos efectiva. O hardware security foundation
          começa com o Secure Element (SE) ou TPM (Trusted Platform Module): chips dedicados
          imutáveis para armazenamento de chaves criptográficas e operações criptográficas —
          mais seguros que software mesmo com acesso físico ao dispositivo. Em produção, os
          fuses JTAG são queimados (hardware one-time programmable) para desactivar a interface
          de debug que permite acesso completo à memória.
        </p>
        <p style={S.p}>
          As actualizações OTA são o vector de ataque mais crítico em escala — assinatura Ed25519
          ou ECDSA p-256 de todos os pacotes, verificação antes de aplicar, anti-rollback counter
          em eFuses impede downgrade para versões vulneráveis. A segurança da inferência inclui:
          validação de input (modelos de detecção de out-of-distribution ou anomaly scoring para
          rejeitar inputs suspeitos); rate limiting (máximo de N queries por segundo/cliente);
          logging de inferências de alta confiança para auditoria. O modelo de ameaça deve ser
          documentado como parte do processo de certificação (IEC 62443 para industrial,
          ISO/SAE 21434 para automotive, ETSI EN 303 645 para IoT consumer).
        </p>
        <div style={S.diagram}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'monospace', marginBottom: '0.6rem', textAlign: 'center' }}>Security Hardening — Checklist Produção Edge AI</div>

          {/* 2x2 layer grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.6rem' }}>
            {[
              { layer: '1. Hardware', items: ['Secure Element / TPM para chaves', 'TrustZone activado', 'JTAG fuses queimados em produção'] },
              { layer: '3. Modelo', items: ['Encriptado em repouso (AES-256)', 'Desencriptação apenas em TEE', 'Watermark + rate limiting output'] },
              { layer: '2. Firmware', items: ['Secure Boot com cadeia de certificados', 'OTA assinado Ed25519', 'Anti-rollback counter em eFuses'] },
              { layer: '4. Runtime', items: ['Input validation (anomaly score)', 'Output sanitization', 'Limites CPU/memória/tempo por inferência'] },
            ].map(({ layer, items }) => (
              <div key={layer} style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.25)', borderRadius: 8, padding: '0.55rem 0.7rem' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.35rem' }}>{layer}</div>
                {items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.22rem' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#f97316', opacity: 0.7, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.62rem', color: '#94a3b8', fontFamily: 'monospace' }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Certification standards */}
          <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.5rem 0.7rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.4rem', textAlign: 'center' }}>Normas de Certificação</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.4rem' }}>
              {[
                { norm: 'IEC 62443', scope: 'Industrial / SCADA' },
                { norm: 'ISO/SAE 21434', scope: 'Automotive' },
                { norm: 'ETSI EN 303 645', scope: 'IoT Consumer' },
                { norm: 'IEC 62443-4-2', scope: 'Componentes edge' },
              ].map(({ norm, scope }) => (
                <div key={norm} style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.25)', borderRadius: 6, padding: '0.35rem 0.4rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.1rem' }}>{norm}</div>
                  <div style={{ fontSize: '0.58rem', color: '#64748b', fontFamily: 'monospace' }}>{scope}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={S.highlight}>
          Security by Design reduz o custo de remediação em 30x comparado com security-as-afterthought
          (NIST estima $15 por bug em design vs $450 em produção). Para dispositivos IoT com lifecycle
          de 10+ anos, o plano de gestão de vulnerabilidades e actualizações OTA é tão importante
          quanto a segurança inicial — ETSI EN 303 645 exige plano de divulgação de vulnerabilidades
          como requisito de certificação.
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Threat Model para Edge AI</strong> — ameaças específicas ao edge: physical access ao dispositivo, side-channel attacks via consumo energético, model extraction por inferência repetida e adversarial inputs físicos (autocolantes, óculos) para enganar visão artificial.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Model Extraction e Protecção de IP</strong> — model extraction reconstrói um modelo equivalente consultando a API de inferência repetidamente; defesas incluem prediction throttling, output perturbation e watermarking de pesos — crítico para proteger IP em modelos no edge.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Ataques Adversariais em Edge</strong> — perturbações físicas (impressas em papel, projectadas por laser) enganam câmeras e LiDAR de sistemas embebidos; a latência limitada no edge dificulta defesas que requerem múltiplas passagens do modelo.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>TrustZone, TEE e Secure Boot</strong> — ARM TrustZone cria um Trusted Execution Environment isolado do SO normal; Secure Boot garante que apenas firmware assinado arranca; juntos protegem pesos de modelos e dados de inferência contra acesso físico.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Defesas Práticas e Security by Design</strong> — encriptação de modelos em repouso e em trânsito, rate limiting de inferência, anomaly detection sobre padrões de query e attestation remota são as defesas práticas recomendadas para edge AI em produção.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
