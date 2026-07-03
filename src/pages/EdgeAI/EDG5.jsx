import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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

const m = modules[4];

export default function EDG5() {
  return (
    <div style={S.page}>
      <Link to="/edge-ai" style={S.back}><ArrowLeft size={16} /> Edge AI</Link>
      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. OTA Updates — Gestão de Modelos em Produção</h2>
        <div style={S.diagram}>
          {/* Row 1: Cloud Backend + Network + A/B Canary */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1rem', marginBottom: '1rem', alignItems: 'start' }}>
            {/* Cloud Backend */}
            <div style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid #f97316', borderRadius: 8, padding: '0.85rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.6rem' }}>CLOUD BACKEND</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {['Model Registry (versioned)', 'OTA Server', 'AWS IoT / Azure / Balena', 'Deployment orchestration', 'Rollback controller'].map(item => (
                  <div key={item} style={{ background: 'rgba(148,163,184,0.08)', border: '1px solid rgba(148,163,184,0.2)', borderRadius: 4, padding: '0.25rem 0.5rem', fontSize: '0.72rem', color: '#f97316', fontFamily: 'monospace' }}>{item}</div>
                ))}
              </div>
            </div>

            {/* Network */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem 0.85rem', textAlign: 'center', alignSelf: 'center' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.4rem' }}>REDE</div>
              {['MQTT', 'HTTPS', 'CoAP'].map(p => <div key={p} style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'monospace' }}>{p}</div>)}
              <div style={{ fontSize: '0.65rem', color: '#64748b', fontFamily: 'monospace', marginTop: '0.25rem' }}>MCU constrained</div>
              <div style={{ color: '#f97316', fontSize: '1rem', margin: '0.4rem 0' }}>⇄</div>
            </div>

            {/* A/B Canary */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.85rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b', fontFamily: 'monospace', marginBottom: '0.65rem' }}>A/B CANARY DEPLOYMENT</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {[
                  { pct: '5%', label: 'Canary — 24-72h monit.', w: 5 },
                  { pct: '25%', label: 'Ring 1 — validação ok', w: 25 },
                  { pct: '50%', label: 'Ring 2 — metricas ok', w: 50 },
                  { pct: '100%', label: 'Producao total', w: 100 },
                ].map(s => (
                  <div key={s.pct} style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 5, padding: '0.3rem 0.6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', width: 38 }}>{s.pct}</span>
                      <span style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: 'monospace' }}>{s.label}</span>
                    </div>
                    <div style={{ background: 'rgba(249,115,22,0.12)', borderRadius: 2, height: 6 }}>
                      <div style={{ width: `${s.w}%`, height: '100%', background: '#f97316', borderRadius: 2 }} />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: 'monospace', marginTop: '0.5rem' }}>Rollback automatico: acc cai 2%+ ou erro aumenta</div>
            </div>
          </div>

          {/* Row 2: Secure Boot Chain */}
          <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.5rem' }}>SECURE BOOT CHAIN</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
              {['Bootloader', 'verifica sig', 'Firmware verificado', 'ML model hash', 'Ed25519 / ECDSA'].map((step, i) => (
                <React.Fragment key={step}>
                  <span style={{ background: 'rgba(148,163,184,0.08)', border: '1px solid rgba(148,163,184,0.2)', borderRadius: 4, padding: '0.2rem 0.55rem', fontSize: '0.72rem', color: '#f97316', fontFamily: 'monospace' }}>{step}</span>
                  {i < 4 && <span style={{ color: '#64748b', fontSize: '0.8rem' }}>›</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'monospace' }}>
            Delta update: model v1.2 → v1.3 = 15KB diff vs 300KB full model (95% reducao de banda)
          </div>
        </div>
        <p style={S.p}>O deployment de modelos em dispositivos edge em campo é um dos maiores desafios operacionais — actualizar firmware e modelos em milhares de dispositivos distribuídos sem downtime nem corrupção. Os protocolos OTA (Over-The-Air) dominantes: MQTT para telemetria e comandos de controlo (baixo overhead, adequado para MCUs); HTTPS para transferência de binários de firmware; CoAP (Constrained Application Protocol) para dispositivos com menos de 64KB de RAM.</p>
        <p style={S.p}>O processo de A/B deployment é crítico: nova versão do modelo é primeiro deployada em 5% da frota (canary deployment), métricas de performance e erro são monitorizadas durante 24-72h, e só com validação positiva se procede ao rollout gradual. O rollback automático é obrigatório: se accuracy cai mais de 2% ou taxa de erro aumenta, a versão anterior é restaurada automaticamente sem intervenção humana. A segurança OTA usa: assinatura criptográfica do binário (Ed25519 ou ECDSA), verificação de hash antes de aplicar, secure boot que verifica cadeia de confiança desde bootloader. O Balena (ex-resin.io) é a plataforma DevOps mais usada para frotas Linux embedded — containers Docker por device, OTA de OS e applicações, monitoring dashboard.</p>
        <div style={S.highlight}>Delta updates (bsdiff/bspatch) reduzem 90%+ o tamanho do update para modelos com pequenas alterações de pesos — crítico em redes com banda limitada ou custo por MB (redes celulares 4G/LTE em IoT industrial).</div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Monitorização de Modelos no Edge</h2>
        <div style={S.diagram}>
          {/* Row 1: Edge Device + Cloud Analytics + Drift Detection */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            {/* Edge Device */}
            <div style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid #f97316', borderRadius: 8, padding: '0.85rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.65rem' }}>EDGE DEVICE</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.6rem' }}>
                {[
                  { label: 'Inference Engine', dim: false },
                  { label: 'Prediction Logger', dim: true },
                  { label: 'Anomaly Detector', dim: false },
                  { label: 'Telemetry Buffer', dim: false },
                ].map(b => (
                  <div key={b.label} style={{ background: `rgba(249,115,22,${b.dim ? '0.04' : '0.12'})`, border: `1px solid ${b.dim ? 'var(--card-border)' : '#f97316'}`, borderRadius: 5, padding: '0.3rem 0.6rem', fontSize: '0.73rem', fontWeight: 700, color: b.dim ? '#64748b' : '#f97316', fontFamily: 'monospace', textAlign: 'center' }}>{b.label}</div>
                ))}
              </div>
              <div style={{ fontSize: '0.68rem', color: '#64748b', fontFamily: 'monospace' }}>ring buffer 1000 amostras</div>
              <div style={{ fontSize: '0.68rem', color: '#64748b', fontFamily: 'monospace' }}>log selectivo: conf abaixo de 0.7</div>
              <div style={{ textAlign: 'center', color: '#f97316', fontSize: '0.8rem', marginTop: '0.4rem' }}>→ MQTT →</div>
            </div>

            {/* Cloud Analytics */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.85rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.65rem' }}>CLOUD ANALYTICS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.6rem' }}>
                {[
                  { label: 'Telemetria Aggregation', dim: true },
                  { label: 'Drift Detection (PSI / KL)', dim: false },
                  { label: 'Performance Dashboard', dim: false },
                  { label: 'Alert System', dim: false },
                ].map(b => (
                  <div key={b.label} style={{ background: `rgba(249,115,22,${b.dim ? '0.04' : '0.10'})`, border: `1px solid ${b.dim ? 'var(--card-border)' : '#f97316'}`, borderRadius: 5, padding: '0.3rem 0.6rem', fontSize: '0.73rem', fontWeight: 700, color: b.dim ? '#64748b' : '#f97316', fontFamily: 'monospace', textAlign: 'center' }}>{b.label}</div>
                ))}
              </div>
              <div style={{ fontSize: '0.68rem', color: '#64748b', fontFamily: 'monospace' }}>latência p50/p95/p99 · acc proxy · CPU/mem</div>
            </div>

            {/* Drift Detection PSI */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.85rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b', fontFamily: 'monospace', marginBottom: '0.5rem' }}>DRIFT DETECTION — PSI</div>
              <svg viewBox="0 0 220 80" style={{ width: '100%', height: 'auto', marginBottom: '0.5rem' }}>
                {[30,50,70,90,60,40,20,10].map((h, i) => (
                  <rect key={`r-${i}`} x={i * 27} y={75 - h * 0.75} width="20" height={h * 0.75} rx="1" fill="rgba(249,115,22,0.4)" stroke="#f97316" strokeWidth="0.8" />
                ))}
                {[10,30,40,70,90,60,30,20].map((h, i) => (
                  <rect key={`c-${i}`} x={i * 27 + 4} y={75 - h * 0.75} width="13" height={h * 0.75} rx="1" fill="rgba(148,163,184,0.4)" stroke="#94a3b8" strokeWidth="0.8" />
                ))}
                <line x1="0" y1="75" x2="220" y2="75" stroke="var(--card-border)" strokeWidth="1" />
              </svg>
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.68rem', color: '#f97316', fontFamily: 'monospace' }}>■ treino (ref.)</span>
                <span style={{ fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'monospace' }}>■ producao actual</span>
              </div>
              <div style={{ fontSize: '0.7rem', color: '#f59e0b', fontFamily: 'monospace', marginBottom: '0.2rem' }}>PSI &gt; 0.2 = drift significativo</div>
              <div style={{ fontSize: '0.68rem', color: '#64748b', fontFamily: 'monospace' }}>ex: camara exterior verao vs inverno</div>
              <div style={{ fontSize: '0.68rem', color: '#64748b', fontFamily: 'monospace' }}>shadow mode: novo modelo em paralelo</div>
            </div>
          </div>

          {/* Bottom note */}
          <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 6, padding: '0.6rem 0.85rem', fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'monospace', lineHeight: 1.6 }}>
            Logging selectivo (MCU conectividade limitada): apenas amostras com confianca abaixo de 0.7 ou resultados inesperados sao enviados para cloud para revisao humana e inclusao no dataset de re-treino — minimiza uso de banda
          </div>
        </div>
        <p style={S.p}>A monitorização de modelos em produção no edge enfrenta constrangimentos únicos: capacidade de logging limitada, conectividade intermitente, e ausência de ground truth em tempo real. O data drift — mudança na distribuição dos dados de entrada em relação aos dados de treino — é a causa mais comum de degradação silenciosa de performance. Para uma câmera de segurança exterior, mudanças de estação (iluminação, ângulo solar) e condições meteorológicas causam deriva nas features de entrada sem que o modelo produza erros óbvios — accuracy degrada gradualmente.</p>
        <p style={S.p}>O Population Stability Index (PSI) compara distribuições de features entre produção e referência de treino — PSI maior que 0.2 indica drift significativo que justifica re-treino. O conceito de shadow mode é fundamental: o modelo novo corre em paralelo com o modelo de produção sem afectar decisões — os dois outputs são comparados para validar o novo modelo antes do switch. Em MCUs com conectividade limitada, o logging selectivo é necessário: apenas amostras de baixa confiança (probabilidade máxima menor que 0.7) ou resultados inesperados são enviados para a cloud para revisão humana e eventual inclusão no dataset de re-treino.</p>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Federated Learning no Edge — Princípios</h2>
        <div style={S.diagram}>
          {/* Row 1: Global Model center + devices grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
            {/* Left devices */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
              {['Device 1','Device 2','Device 3','Device 4'].map(d => (
                <div key={d} style={{ background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 6, padding: '0.4rem 0.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>{d}</div>
                  <div style={{ fontSize: '0.65rem', color: '#64748b', fontFamily: 'monospace' }}>dados locais</div>
                  <div style={{ fontSize: '0.65rem', color: '#64748b', fontFamily: 'monospace' }}>privados</div>
                </div>
              ))}
            </div>
            {/* Global Model center */}
            <div style={{ background: 'rgba(249,115,22,0.08)', border: '2px solid #f97316', borderRadius: 10, padding: '0.9rem 1.2rem', textAlign: 'center', minWidth: 140 }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.3rem' }}>Global Model</div>
              <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'monospace' }}>Cloud Server — FedAvg</div>
              <div style={{ fontSize: '0.65rem', color: '#64748b', fontFamily: 'monospace', marginTop: '0.2rem' }}>agrega actualizacoes</div>
              <div style={{ fontSize: '0.65rem', color: '#64748b', fontFamily: 'monospace' }}>ponderadas</div>
            </div>
            {/* Right devices */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
              {['Device 5','Device 6','Device 7','Device 8'].map(d => (
                <div key={d} style={{ background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 6, padding: '0.4rem 0.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>{d}</div>
                  <div style={{ fontSize: '0.65rem', color: '#64748b', fontFamily: 'monospace' }}>dados locais</div>
                  <div style={{ fontSize: '0.65rem', color: '#64748b', fontFamily: 'monospace' }}>privados</div>
                </div>
              ))}
            </div>
          </div>
          {/* FL Round pipeline */}
          <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem 1rem' }}>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.6rem' }}>FL ROUND:</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              {[
                { n: '1', label: 'Server envia', sub: 'modelo global' },
                { n: '2', label: 'Device treina', sub: 'E epochs local' },
                { n: '3', label: 'Envia delta pesos', sub: 'NAO dados raw' },
                { n: '4', label: 'FedAvg: media', sub: 'ponderada por |D|' },
                { n: '5', label: 'Modelo global', sub: 'actualizado' },
              ].map((step, i) => (
                <React.Fragment key={i}>
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(249,115,22,0.15)', border: '1.5px solid #f97316', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.3rem', fontSize: '0.78rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>{step.n}</div>
                    <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontFamily: 'monospace', lineHeight: 1.4 }}>{step.label}</div>
                    <div style={{ fontSize: '0.65rem', color: '#64748b', fontFamily: 'monospace', lineHeight: 1.4 }}>{step.sub}</div>
                  </div>
                  {i < 4 && <div style={{ color: '#f97316', fontSize: '1rem', flexShrink: 0 }}>›</div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <p style={S.p}>O Federated Learning (McMahan et al., Google, 2017) resolve o problema fundamental de treinar modelos com dados distribuídos e privados — os dados nunca saem dos dispositivos. Cada cliente (dispositivo edge) treina localmente com os seus dados privados e envia apenas as actualizações de pesos (gradientes ou delta de pesos) para o servidor central, que agrega e distribui o modelo actualizado. O FedAvg (Federated Averaging) é o algoritmo base: cada cliente recebe o modelo global, treina por E epochs locais com batch size B, e o servidor calcula a média ponderada dos pesos pelo tamanho do dataset local — convergência demonstrada teóricamente em condições IID e empiricamente em dados reais não-IID.</p>
        <p style={S.p}>O desafio fundamental é o Non-IID data: dados nos dispositivos reais têm distribuições heterogéneas (um utilizador tem maioritariamente selfies, outro tem fotos de animais) — causa instabilidade na convergência do FedAvg. Soluções: FedProx adiciona termo de regularização que penaliza desvio do modelo global; SCAFFOLD corrige deriva de client drift com variáveis de controlo. Aplicações reais: Google Gboard treina modelo de next-word prediction em teclado de telemóveis sem enviar texto digitado; Apple treina Siri e correção ortográfica com FL nos iPhones dos utilizadores.</p>
        <div style={S.highlight}>Privacidade diferencial — adiciona ruído Gaussiano com clipping às actualizações antes de enviar ao servidor: garante que o servidor não consegue inferir dados individuais do dispositivo. Custo: 50MB modelo completo vs 2MB gradientes = 25x menos comunicação.</div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Pipelines de Deployment e CI/CD para Edge</h2>
        <div style={S.diagram}>
          {/* Row 1: steps 1-5 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.5rem' }}>
            {[
              { n: '1', label: 'Code Commit', tool: 'Git + DVC', dim: true },
              { n: '2', label: 'GitHub Actions', tool: 'CI trigger', dim: true },
              { n: '3', label: 'Training Cloud GPU', tool: 'MLflow track', dim: false },
              { n: '4', label: 'Auto Evaluation', tool: 'acc threshold', dim: false },
              { n: '5', label: 'Model Conversion', tool: 'TFLite/ONNX', dim: false },
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div style={{ flex: 1, background: `rgba(249,115,22,${step.dim ? '0.04' : '0.12'})`, border: `1px solid ${step.dim ? 'var(--card-border)' : '#f97316'}`, borderRadius: 7, padding: '0.5rem 0.4rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: step.dim ? '#64748b' : '#f97316', fontFamily: 'monospace', marginBottom: '0.2rem' }}>{step.n}. {step.label}</div>
                  <div style={{ fontSize: '0.63rem', color: '#64748b', fontFamily: 'monospace' }}>{step.tool}</div>
                </div>
                {i < 4 && <div style={{ color: '#f97316', fontSize: '1rem', flexShrink: 0 }}>›</div>}
              </React.Fragment>
            ))}
          </div>
          {/* Row 2: steps 6-10 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.75rem' }}>
            {[
              { n: '6', label: 'HW-in-loop Test', tool: 'QEMU / device' },
              { n: '7', label: 'Model Registry', tool: 'DVC + MLflow' },
              { n: '8', label: 'OTA Staging Fleet', tool: 'Balena/AWS IoT' },
              { n: '9', label: 'Canary Metrics', tool: '24h monitor' },
              { n: '10', label: 'Production Rollout', tool: '100% frota' },
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div style={{ flex: 1, background: 'rgba(249,115,22,0.12)', border: '1px solid #f97316', borderRadius: 7, padding: '0.5rem 0.4rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.2rem' }}>{step.n}. {step.label}</div>
                  <div style={{ fontSize: '0.63rem', color: '#64748b', fontFamily: 'monospace' }}>{step.tool}</div>
                </div>
                {i < 4 && <div style={{ color: '#f97316', fontSize: '1rem', flexShrink: 0 }}>›</div>}
              </React.Fragment>
            ))}
          </div>
          {/* Notes */}
          <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 6, padding: '0.6rem 0.85rem', fontSize: '0.71rem', color: '#94a3b8', fontFamily: 'monospace', lineHeight: 1.7 }}>
            <div>DIFERENCA vs SW CI/CD: testes incluem metricas de modelo (accuracy, F1) alem de testes funcionais | "build" inclui treino</div>
            <div style={{ color: '#64748b' }}>Hardware-in-the-loop: dispositivo fisico ou QEMU ARM no lab de CI executa inferencia real — latencia, memoria, accuracy medidos</div>
            <div style={{ color: '#64748b' }}>Stack tipico industrial: GitHub + DVC + GitHub Actions + MLflow + W&amp;B + Balena ou AWS IoT Greengrass para OTA</div>
          </div>
        </div>
        <p style={S.p}>O CI/CD (Continuous Integration/Continuous Deployment) para Edge AI adapta os princípios de DevOps à realidade de modelos ML em hardware embebido. A diferença crítica em relação a CI/CD de software: os testes de qualidade incluem métricas de modelo (accuracy, F1, AUC) para além de testes funcionais; a "build" inclui treino ou fine-tuning do modelo; e o "deploy" é uma actualização OTA em hardware físico. O DVC (Data Version Control) é o Git para dados e modelos — versiona datasets, pipelines de pré-processamento, e modelos com hashes, permitindo reprodutibilidade total de experimentos.</p>
        <p style={S.p}>O MLflow rastreia experimentos (hiperparâmetros, métricas, artefactos) e serve como model registry com versionamento e staging/production environments. O hardware-in-the-loop testing é o elemento diferenciador: um dispositivo físico (ou simulado com QEMU para ARM) no laboratório de CI executa inferência automaticamente para cada modelo candidato, medindo latência real, consumo de memória, e accuracy em dataset de teste local — garante que métricas de nuvem se traduzem em performance real no alvo.</p>
        <div style={S.note}>O pipeline completo num projecto industrial usa: GitHub para código e DVC para dados; GitHub Actions para CI; MLflow para tracking; Weights and Biases para visualização; Balena ou AWS IoT Greengrass para OTA.</div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Gestão de Frota e Ciclo de Vida Operacional</h2>
        <div style={S.diagram}>
          {/* Row 1: device grid + version distribution */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '0.75rem' }}>
            {/* Fleet grid */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.6rem' }}>FLEET — 200 DISPOSITIVOS</div>
              <svg viewBox="0 0 320 110" style={{ width: '100%', height: 'auto', marginBottom: '0.5rem' }}>
                {Array.from({ length: 10 }).map((_, row) =>
                  Array.from({ length: 20 }).map((_, col) => {
                    const idx = row * 20 + col;
                    const c = idx < 120 ? '#f97316' : idx < 160 ? '#f59e0b' : idx < 185 ? '#ea580c' : '#475569';
                    return <rect key={idx} x={col * 16} y={row * 11} width="14" height="9" rx="2" fill={`${c}50`} stroke={c} strokeWidth="0.6" />;
                  })
                )}
              </svg>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {[['#f97316','saudavel (120)'],['#f59e0b','warning drift (40)'],['#ea580c','erro (25)'],['#475569','offline (15)']].map(([c, label]) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <div style={{ width: 10, height: 10, borderRadius: 2, background: c, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.63rem', color: '#64748b', fontFamily: 'monospace' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Version distribution + device detail */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {/* Device detail */}
              <div style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid #f97316', borderRadius: 7, padding: '0.6rem 0.75rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.3rem' }}>Device ID: edge-042 | Lisboa, Portugal</div>
                <div style={{ fontSize: '0.67rem', color: '#64748b', fontFamily: 'monospace', lineHeight: 1.6 }}>
                  Model: v2.3.1 | Last seen: 5min | Inf/day: 45,231<br/>
                  Lat avg: 12ms | Conf: 0.87 | Uptime: 99.8%<br/>
                  Erros: 0.04% | Conectividade loss: 0.3%
                </div>
              </div>
              {/* Version bars */}
              <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 7, padding: '0.6rem 0.75rem' }}>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.5rem' }}>Distribuicao versoes de modelo em frota:</div>
                {[['v2.3.1','60%','#f97316',60],['v2.3.0','30%','#f59e0b',30],['v2.2.x (legacy)','10%','#94a3b8',10]].map(([v, pct, c, w]) => (
                  <div key={v} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                    <div style={{ width: 52, fontSize: '0.65rem', color: c, fontFamily: 'monospace', flexShrink: 0 }}>{v}</div>
                    <div style={{ flex: 1, background: 'var(--card-border)', borderRadius: 3, height: 10, overflow: 'hidden' }}>
                      <div style={{ width: `${w}%`, height: '100%', background: c, borderRadius: 3 }} />
                    </div>
                    <div style={{ width: 30, fontSize: '0.65rem', color: c, fontFamily: 'monospace', textAlign: 'right', flexShrink: 0 }}>{pct}</div>
                  </div>
                ))}
                <div style={{ fontSize: '0.65rem', color: '#64748b', fontFamily: 'monospace', marginTop: '0.3rem' }}>Egress cloud: -98% vs solucao cloud-only</div>
              </div>
            </div>
          </div>
        </div>
        <p style={S.p}>A gestão de frotas de dispositivos edge em escala industrial — centenas a milhares de dispositivos — exige plataformas de gestão dedicadas. O AWS IoT Greengrass e o Azure IoT Edge são as plataformas cloud mais usadas: permitem deployment de containers (Lambda functions ou Docker) em dispositivos edge, sincronização de configuração, e telemetria centralizada. O AWS IoT Device Shadow mantém o estado desejado e reportado de cada dispositivo — permite orquestrar updates mesmo quando o dispositivo está offline (envia o comando quando reconecta).</p>
        <p style={S.p}>A gestão de versões de modelo em frota usa semver: versão major para mudanças incompatíveis de arquitectura, minor para mudanças de accuracy com mesma API, patch para bug fixes. O conceito de greenfield vs brownfield deployment define a estratégia: em greenfield (dispositivos novos), o modelo mais recente é instalado na fábrica; em brownfield (dispositivos existentes no campo), OTA incremental com rollback é obrigatório. As métricas operacionais de uma frota edge saudável: uptime maior que 99.5%, latência p99 dentro do SLA, menos de 0.1% de inferências com erro, connectivity loss menor que 1% do tempo.</p>
        <div style={S.highlight}>O custo de operação é dominado por banda larga — um sistema de câmera que processa localmente e envia apenas metadata reduz 98% os custos de egress de dados vs solução cloud-only. A diferença entre processar 1080p30 na cloud (70 Mbps continuos) vs enviar apenas bounding boxes e labels (menos de 10 Kbps) é de 7000x na banda consumida.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>OTA Updates — Gestão de Modelos em Produção</strong> — Over-The-Air updates permitem actualizar modelos sem acesso físico ao dispositivo; requerem assinatura criptográfica, rollback automático e staged rollouts para garantir que novas versões não degradam performance em frota.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Monitorização de Modelos no Edge</strong> — deriva de dados (data drift) e degradação de performance (concept drift) afectam modelos em produção; edge AI requer métricas leves (confidence score, distribuição de predições) enviadas periodicamente para cloud.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Federated Learning no Edge — Princípios</strong> — cada dispositivo treina localmente com os seus dados e envia apenas gradientes (ou pesos actualizados) para um servidor central que os agrega; preserva privacidade e reduz bandwidth comparado com enviar dados brutos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Pipelines de Deployment e CI/CD para Edge</strong> — pipeline típico: commit → testes de acurácia → conversão/quantização → benchmark no emulador → deployment OTA; ferramentas como MLflow e DVC gerem versões de modelos; GitHub Actions automatiza o pipeline.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Gestão de Frota e Ciclo de Vida Operacional</strong> — gestão de frotas de milhares de dispositivos requer registo central, monitorização de saúde (temperatura, bateria, erros) e políticas de actualização; AWS IoT, Azure IoT Hub e balena.io são plataformas de referência.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
