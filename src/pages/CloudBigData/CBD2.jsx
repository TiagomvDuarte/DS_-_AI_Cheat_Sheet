import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: '#f97316', borderLeft: '3px solid #f97316', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: '3px solid #f97316', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const ServiceStackDiagram = () => {
  const layers = [
    { name: 'Aplicações', },
    { name: 'Dados' },
    { name: 'Runtime' },
    { name: 'Middleware' },
    { name: 'SO' },
    { name: 'Virtualização' },
    { name: 'Servidores' },
    { name: 'Storage' },
    { name: 'Rede' },
  ];
  // número de camadas (a partir de baixo: Rede, Storage, ...) geridas pelo fornecedor
  const managedFrom = { 'On-Premises': 0, IaaS: 4, PaaS: 7, SaaS: 9 };
  const cols = ['On-Premises', 'IaaS', 'PaaS', 'SaaS'];
  const colColor = { 'On-Premises': '#94a3b8', IaaS: '#f97316', PaaS: '#f97316', SaaS: '#f97316' };
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Quem Gere o Quê — On-Premises vs IaaS vs PaaS vs SaaS</p>
      <div style={{ display: 'grid', gridTemplateColumns: '110px repeat(4, 1fr)', gap: '2px', maxWidth: 480, margin: '0 auto' }}>
        <div />
        {cols.map(c => (
          <div key={c} style={{ fontSize: '0.78rem', fontWeight: 700, color: colColor[c], textAlign: 'center', paddingBottom: '0.4rem' }}>{c}</div>
        ))}
        {layers.map((l, i) => (
          <React.Fragment key={l.name}>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '0.5rem', textAlign: 'right' }}>{l.name}</div>
            {cols.map(c => {
              const vendorManaged = i >= (layers.length - managedFrom[c]);
              return (
                <div key={c} style={{
                  height: 22,
                  background: vendorManaged ? `${colColor[c]}30` : 'rgba(148,163,184,0.12)',
                  border: `1px solid ${vendorManaged ? colColor[c] : 'var(--card-border)'}`,
                }} />
              );
            })}
          </React.Fragment>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '0.9rem', fontSize: '0.78rem' }}>
        <span><span style={{ display: 'inline-block', width: 12, height: 12, background: 'rgba(148,163,184,0.12)', border: '1px solid var(--card-border)', verticalAlign: 'middle', marginRight: 4 }} />Geres tu</span>
        <span><span style={{ display: 'inline-block', width: 12, height: 12, background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', verticalAlign: 'middle', marginRight: 4 }} />Gere o fornecedor cloud</span>
      </div>
    </div>
  );
};

const ComputeDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>VMs vs Contentores vs Serverless</p>
    <svg viewBox="0 0 580 200" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* VMs */}
      <text x="95" y="16" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Máquinas Virtuais</text>
      <rect x="20" y="22" width="150" height="20" rx="3" fill="rgba(148,163,184,0.12)" stroke="var(--text-secondary)" strokeWidth="1"/>
      <text x="95" y="36" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Hardware físico</text>
      <rect x="20" y="44" width="150" height="20" rx="3" fill="rgba(148,163,184,0.12)" stroke="var(--text-secondary)" strokeWidth="1"/>
      <text x="95" y="58" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Hypervisor</text>
      {[88, 132].map((y) => (
        <g key={y}>
          <rect x="20" y={y - 22} width="65" height="42" rx="3" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2"/>
          <text x="52" y={y - 8} textAnchor="middle" fill="#f97316" fontSize="7.5">Guest OS</text>
          <text x="52" y={y + 4} textAnchor="middle" fill="var(--text-secondary)" fontSize="7">App + libs</text>
          <rect x="105" y={y - 22} width="65" height="42" rx="3" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2"/>
          <text x="137" y={y - 8} textAnchor="middle" fill="#f97316" fontSize="7.5">Guest OS</text>
          <text x="137" y={y + 4} textAnchor="middle" fill="var(--text-secondary)" fontSize="7">App + libs</text>
        </g>
      ))}
      <text x="95" y="190" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Isolamento forte · boot em minutos</text>

      {/* Containers */}
      <line x1="200" y1="0" x2="200" y2="200" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,3"/>
      <text x="290" y="16" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Contentores</text>
      <rect x="220" y="22" width="150" height="20" rx="3" fill="rgba(148,163,184,0.12)" stroke="var(--text-secondary)" strokeWidth="1"/>
      <text x="295" y="36" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Hardware físico</text>
      <rect x="220" y="44" width="150" height="20" rx="3" fill="rgba(148,163,184,0.12)" stroke="var(--text-secondary)" strokeWidth="1"/>
      <text x="295" y="58" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">SO partilhado (host)</text>
      <rect x="220" y="66" width="150" height="20" rx="3" fill="rgba(148,163,184,0.12)" stroke="var(--text-secondary)" strokeWidth="1"/>
      <text x="295" y="80" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Container runtime (Docker)</text>
      {[100, 142].map((y, i) => (
        <g key={y}>
          <rect x="220" y={y} width="70" height="32" rx="3" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2"/>
          <text x="255" y={y + 20} textAnchor="middle" fill="#f97316" fontSize="8">App {i*2+1}</text>
          <rect x="300" y={y} width="70" height="32" rx="3" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2"/>
          <text x="335" y={y + 20} textAnchor="middle" fill="#f97316" fontSize="8">App {i*2+2}</text>
        </g>
      ))}
      <text x="295" y="190" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Isolamento de processo · boot em segundos</text>

      {/* Serverless */}
      <line x1="400" y1="0" x2="400" y2="200" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,3"/>
      <text x="490" y="16" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Serverless (FaaS)</text>
      <rect x="420" y="22" width="150" height="64" rx="3" fill="rgba(148,163,184,0.12)" stroke="var(--text-secondary)" strokeWidth="1"/>
      <text x="495" y="56" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Infra + SO + runtime</text>
      <text x="495" y="70" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">geridos pelo fornecedor</text>
      {[100, 142].map((y, i) => (
        <rect key={y} x="455" y={y} width="80" height="32" rx="16" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2"/>
      ))}
      <text x="495" y="120" textAnchor="middle" fill="#f97316" fontSize="8">function()</text>
      <text x="495" y="162" textAnchor="middle" fill="#f97316" fontSize="8">function()</text>
      <text x="495" y="190" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Sem gestão de servidor · paga por execução</text>
    </svg>
  </div>
);

const RegionAZDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Regions, Availability Zones &amp; Edge Locations</p>
    <svg viewBox="0 0 560 220" style={{ maxWidth: '100%', height: 'auto' }}>
      <rect x="20" y="20" width="340" height="180" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3"/>
      <text x="190" y="42" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Region (ex: eu-west-1)</text>
      {[ [40, 'AZ-a'], [140, 'AZ-b'], [240, 'AZ-c'] ].map(([x, name]) => (
        <g key={name}>
          <rect x={x} y="60" width="90" height="120" rx="7" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
          <text x={x + 45} y="80" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">{name}</text>
          <rect x={x + 12} y="92" width="66" height="22" rx="4" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1"/>
          <text x={x + 45} y="106" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Datacenter 1</text>
          <rect x={x + 12} y="120" width="66" height="22" rx="4" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1"/>
          <text x={x + 45} y="134" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Datacenter 2</text>
          <text x={x + 45} y="160" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">isolada de falhas</text>
          <text x={x + 45} y="172" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">(energia, rede)</text>
        </g>
      ))}
      <text x="190" y="195" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">AZs ligadas por rede privada de baixa latência</text>

      {/* Edge locations */}
      <text x="460" y="42" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Edge Locations (CDN)</text>
      {[ [400, 70], [490, 70], [400, 130], [490, 130] ].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="70" height="36" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2"/>
          <text x={x + 35} y={y + 22} textAnchor="middle" fill="#f97316" fontSize="8">PoP {i + 1}</text>
        </g>
      ))}
      <text x="460" y="190" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Cache de conteúdo perto do utilizador</text>
    </svg>
  </div>
);

const AutoScalingDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Auto-scaling Horizontal com Load Balancer</p>
    <svg viewBox="0 0 520 195" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-as" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" /></marker>
      </defs>
      {/* Auto-scaling Group container — behind everything */}
      <rect x="290" y="20" width="220" height="155" rx="8" fill="rgba(249,115,22,0.05)" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3"/>
      <text x="400" y="14" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Auto-scaling Group</text>
      <text x="400" y="188" textAnchor="middle" fill="#f97316" fontSize="8">min=1, desired=2, max=5</text>
      {/* Utilizadores */}
      <rect x="10" y="68" width="90" height="40" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="55" y="92" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Utilizadores</text>
      {/* Load Balancer */}
      <line x1="100" y1="88" x2="143" y2="88" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-as)"/>
      <rect x="145" y="68" width="105" height="40" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="197" y="92" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Load Balancer</text>
      {/* Instances inside the group */}
      {[35, 80, 125].map((y, i) => (
        <g key={y}>
          <line x1="250" y1="88" x2="300" y2={y + 20} stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arr-as)"/>
          <rect x="305" y={y} width="185" height="38" rx="6" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="1.5"/>
          <text x="397" y={y + 23} textAnchor="middle" fill="#f97316" fontSize="8.5" fontWeight="700">Instância {i + 1}</text>
        </g>
      ))}
      <text x="255" y="195" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Métricas (CPU, fila, latência) → adiciona/remove instâncias automaticamente</text>
    </svg>
  </div>
);

const CostExplorer = () => {
  const [sel, setSel] = useState(0);
  const models = [
    {
      name: 'On-Demand', color: '#f97316',
      desc: 'Pagas por segundo/hora de utilização, sem compromisso. Preço mais alto por unidade, mas zero risco — paras quando quiseres e o custo pára contigo.',
      uso: 'Cargas de trabalho imprevisíveis, picos pontuais, desenvolvimento e testes, primeiras fases de um projecto onde o uso ainda não é previsível.',
    },
    {
      name: 'Reserved / Committed', color: '#f97316',
      desc: 'Compromete-te a usar um recurso durante 1-3 anos em troca de descontos significativos (até 60-70% face a on-demand). O compromisso é financeiro, não físico — não reservas hardware específico.',
      uso: 'Cargas de trabalho estáveis e previsíveis: bases de dados de produção, serviços core que correm 24/7 sem interrupção.',
    },
    {
      name: 'Spot / Preemptible', color: '#f97316',
      desc: 'Usa capacidade não utilizada do datacenter com descontos de 60-90%. O fornecedor pode retomar a máquina a qualquer momento (com aviso curto, segundos a minutos) se precisar da capacidade para clientes on-demand/reserved.',
      uso: 'Jobs batch tolerantes a interrupção, processamento Spark distribuído (perder 1 nó não perde o job todo), treino de ML com checkpointing, renderização.',
    },
    {
      name: 'Free Tier / Pay-as-you-go', color: '#f97316',
      desc: 'Camada gratuita com limites (ex: X horas/mês de uma VM pequena, X GB de storage). Pay-as-you-go significa que só pagas pelo que efectivamente consomes, sem mínimos nem reservas — base de tudo o resto.',
      uso: 'Aprendizagem, prototipagem, side-projects, e serviços serverless onde o custo é proporcional ao número de execuções/requests.',
    },
  ];
  const m = models[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Modelos de Preço na Cloud</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {models.map((mo, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: sel === i ? mo.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? mo.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{mo.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${m.color}40` }}>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.6rem' }}>{m.desc}</p>
        <div style={{ fontSize: '0.83rem' }}><strong style={{ color: m.color }}>Usar quando:</strong> <span style={{ color: 'var(--text-secondary)' }}>{m.uso}</span></div>
      </div>
    </div>
  );
};

export default function CBD2() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cloud-bigdata" style={S.back}><ArrowLeft size={16} /> Voltar a Cloud &amp; Big Data</Link>
        <div style={S.tag}>Module 2</div>
        <h1 style={S.h1}>Cloud Computing — Fundamentos</h1>
        <p style={S.lead}>Os conceitos que estão por trás de qualquer fornecedor cloud (AWS, Azure, GCP ou outro): modelos de serviço (IaaS/PaaS/SaaS/FaaS) e de implementação, os blocos básicos de computação, armazenamento e rede, como a elasticidade e o auto-scaling funcionam, o modelo de responsabilidade partilhada, e como os modelos de preço transformam custo fixo em custo variável.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. Modelos de Serviço — IaaS, PaaS, SaaS, FaaS</h2>
          <p style={S.p}>A diferença fundamental entre os modelos de serviço cloud é onde se traça a linha entre "o que tu geres" e "o que o fornecedor gere". Quanto mais subes na pilha — de Infrastructure para Platform para Software — mais responsabilidades passam para o fornecedor, em troca de menos controlo e flexibilidade.</p>

          <ServiceStackDiagram />

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Modelo</th><th style={S.th}>O que recebes</th><th style={S.th}>Geres tu</th><th style={S.th}>Exemplo genérico</th></tr></thead>
              <tbody>
                {[
                  ['IaaS — Infrastructure as a Service', 'Máquinas virtuais, storage e rede prontos a usar', 'SO, runtime, middleware, dados e aplicação', 'Máquina virtual genérica numa cloud pública'],
                  ['PaaS — Platform as a Service', 'Ambiente de execução completo (runtime + middleware + SO geridos)', 'Apenas o código da aplicação e os dados', 'Plataforma gerida para correr e escalar uma aplicação web'],
                  ['SaaS — Software as a Service', 'Aplicação completa, pronta a usar via browser/API', 'Apenas configuração, utilizadores e dados introduzidos', 'Email corporativo, CRM, ferramentas de produtividade'],
                  ['FaaS — Function as a Service', 'Execução de funções individuais sob pedido, sem servidores geridos por ti', 'Apenas a função (código) e os triggers que a invocam', 'Função que corre em resposta a um evento (upload de ficheiro, request HTTP)'],
                ].map(([m, r, g, e]) => (
                  <tr key={m}><td style={{ ...S.td, fontWeight: 600, color: '#f97316', fontSize: '0.85rem' }}>{m}</td><td style={S.td}>{r}</td><td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{g}</td><td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{e}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>O FaaS/Serverless não é "mais um andar acima do SaaS" — é uma forma diferente de consumir compute (ver Secção 3). O que o caracteriza é a unidade de cobrança e gestão ser a função, não o servidor.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Modelos de Implementação — Public, Private, Hybrid, Multi-Cloud</h2>
          <p style={S.p}>Para além de "o quê" (IaaS/PaaS/SaaS), há a questão de "onde": em que infraestrutura física a cloud corre, e quem tem acesso a ela. Esta decisão é normalmente guiada por custo, controlo, compliance e latência.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Modelo</th><th style={S.th}>Definição</th><th style={S.th}>Vantagem principal</th><th style={S.th}>Desvantagem principal</th></tr></thead>
              <tbody>
                {[
                  ['Public Cloud', 'Infraestrutura partilhada, propriedade de um fornecedor cloud, acessível pela Internet a qualquer cliente', 'Custo mais baixo (economia de escala), zero manutenção física, elasticidade quase ilimitada', 'Menos controlo sobre localização física dos dados; multi-tenancy'],
                  ['Private Cloud', 'Infraestrutura dedicada a uma única organização — on-premises ou alojada por terceiros', 'Controlo total, isolamento, mais fácil cumprir requisitos regulatórios estritos', 'Custo de capital elevado, sem economia de escala, capacidade fixa'],
                  ['Hybrid Cloud', 'Combina infraestrutura privada com pública, com integração entre ambas', 'Mantém dados sensíveis on-premises e usa a public cloud para picos de carga (cloud bursting)', 'Complexidade de rede, segurança e gestão acrescida'],
                  ['Multi-Cloud', 'Usa serviços de mais do que um fornecedor cloud público em simultâneo', 'Evita vendor lock-in, permite escolher o melhor serviço de cada fornecedor, redundância', 'Maior complexidade operacional, custos de transferência de dados entre clouds'],
                ].map(([m, d, v, dv]) => (
                  <tr key={m}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{m}</td><td style={S.td}>{d}</td><td style={{ ...S.td, color: '#f97316', fontSize: '0.85rem' }}>{v}</td><td style={{ ...S.td, color: '#f97316', fontSize: '0.85rem' }}>{dv}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}><strong>Tenant:</strong> Um tenant é um cliente (organização ou utilizador) que partilha a mesma instância de um sistema cloud, com os seus dados e configuração isolados logicamente dos restantes. Em <strong>multi-tenancy</strong> (típico da Public Cloud e do SaaS), um único conjunto de servidores e uma única instância da aplicação serve muitos clientes em simultâneo — o fornecedor reparte o custo do hardware por todos, o que torna o serviço mais barato, mas significa que a tua carga corre ao lado da de outros clientes (isolada por virtualização/contentores). Em <strong>single-tenant</strong> (típico da Private Cloud), és o único cliente naquela infraestrutura — mais caro, mas elimina qualquer partilha de recursos com terceiros, o que algumas regulações exigem.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Computação — VMs, Contentores e Serverless</h2>
          <p style={S.p}>Estas três formas de "correr código na cloud" diferem na unidade de isolamento, no tempo de arranque, na densidade (quantas unidades cabem por máquina física) e em quem gere o quê por baixo. Não são mutuamente exclusivas — uma arquitectura típica usa as três em conjunto.</p>

          <ComputeDiagram />

          <p style={S.p}><strong style={{ color: '#f97316' }}>Máquinas Virtuais</strong> — um servidor físico corre um <em>Hypervisor</em> (VMware, KVM, Hyper-V), que particiona a máquina em várias VMs isoladas. Cada VM tem o seu próprio <em>Guest OS</em> completo, mais a app e as suas bibliotecas. Como cada VM carrega um SO inteiro, são pesadas — arrancam em minutos e cabem poucas por máquina física. Em troca, o isolamento é muito forte: uma VM é, na prática, um computador à parte.</p>
          <p style={S.p}><strong style={{ color: '#f97316' }}>Contentores</strong> — todos os contentores de um host partilham o mesmo kernel do SO (não há Guest OS por contentor). Um <em>container runtime</em> (Docker, containerd) embala cada app apenas com as suas dependências, sem SO próprio. Resultado: arrancam em segundos e cabem dezenas no mesmo hardware onde caberiam poucas VMs. O isolamento é ao nível do processo (namespaces/cgroups) — mais fraco que uma VM, mas suficiente para a maioria dos casos.</p>
          <p style={S.p}><strong style={{ color: '#f97316' }}>Serverless (FaaS)</strong> — o fornecedor gere tudo abaixo da função: infraestrutura, SO, runtime, scaling e patches. Tu escreves apenas uma <code>function()</code> que corre em resposta a um evento (request HTTP, upload de ficheiro, mensagem numa fila, agendamento). Não há servidor sempre ligado: arranca sob pedido (daí o atraso de "cold start"), executa, e desliga. Pagas por invocação/tempo de execução, não por capacidade parada.</p>
          <p style={S.p}>A tendência da esquerda para a direita é trocar <em>controlo e isolamento</em> por <em>menos esforço operacional, arranque mais rápido e faturação mais granular</em>. Uma arquitectura real combina frequentemente as três — ex: bases de dados core em VMs, serviços de aplicação em contentores (Kubernetes), e lógica de ligação orientada a eventos em funções serverless.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Característica</th><th style={S.th}>Máquinas Virtuais</th><th style={S.th}>Contentores</th><th style={S.th}>Serverless (FaaS)</th></tr></thead>
              <tbody>
                {[
                  ['Unidade de isolamento', 'SO completo (kernel próprio)', 'Processo isolado, kernel partilhado', 'Função individual'],
                  ['Tempo de arranque', 'Minutos', 'Segundos', 'Milissegundos a segundos (cold start)'],
                  ['Densidade', 'Baixa — cada VM tem overhead de SO completo', 'Alta — dezenas de contentores por host', 'Muito alta — gerida pelo fornecedor'],
                  ['Quem gere o SO', 'Tu (dentro da VM)', 'Tu (imagem do contentor), host gerido pela cloud', 'Fornecedor cloud'],
                  ['Modelo de custo', 'Por tempo de VM ligada', 'Por tempo de VM/cluster subjacente', 'Por execução + tempo de execução'],
                ].map(([c, vm, ct, fa]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 600 }}>{c}</td><td style={{ ...S.td, fontSize: '0.85rem', color: '#f97316' }}>{vm}</td><td style={{ ...S.td, fontSize: '0.85rem', color: '#f97316' }}>{ct}</td><td style={{ ...S.td, fontSize: '0.85rem', color: '#f97316' }}>{fa}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Armazenamento — Object, Block e File Storage</h2>
          <p style={S.p}>Tal como na computação, há três formas fundamentais de armazenar dados na cloud, cada uma desenhada para um padrão de acesso diferente. Escolher a errada não é apenas uma questão de custo — pode tornar uma aplicação inviável (ex: tentar montar object storage como disco de uma base de dados).</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Tipo</th><th style={S.th}>Como se acede</th><th style={S.th}>Características</th><th style={S.th}>Casos de uso</th></tr></thead>
              <tbody>
                {[
                  ['Object Storage', 'API HTTP (GET/PUT) sobre objectos identificados por chave, organizados em "buckets"', 'Escalabilidade praticamente ilimitada, muito barato, sem hierarquia real de pastas, sem suporte a edição parcial de ficheiros', 'Backups, data lakes, ficheiros estáticos, imagens/vídeos, logs'],
                  ['Block Storage', 'Disco virtual que se associa a uma VM — comporta-se como um disco rígido', 'Baixa latência, suporta sistemas de ficheiros tradicionais e bases de dados, ligado a uma única VM de cada vez (tipicamente)', 'Discos de VMs, bases de dados, qualquer workload que precise de IOPS altos'],
                  ['File Storage', 'Sistema de ficheiros partilhado acedido via protocolo de rede (NFS/SMB) por múltiplas VMs', 'Hierarquia de pastas tradicional, partilhável entre várias máquinas em simultâneo', 'Diretórios home partilhados, ficheiros de configuração partilhados entre instâncias, content management'],
                ].map(([t, a, c, u]) => (
                  <tr key={t}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{t}</td><td style={{ ...S.td, fontSize: '0.85rem' }}>{a}</td><td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{c}</td><td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{u}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Os formatos de tabela do Lakehouse são construídos sobre object storage: adicionam uma camada de metadados e transacções a algo que, por si só, não tem noção de "tabela".</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Networking — Regions, Availability Zones &amp; CDN</h2>
          <p style={S.p}>A geografia da cloud é organizada hierarquicamente. Uma Region é uma área geográfica (ex: "Europa Ocidental") que contém várias Availability Zones (AZs) — datacenters fisicamente separados (alimentação, refrigeração e rede independentes), mas ligados entre si por rede privada de baixa latência.</p>
          <p style={S.p}>Esta separação existe para permitir alta disponibilidade: distribuir uma aplicação por 2-3 AZs significa que a falha de um datacenter inteiro (incêndio, corte de energia) não derruba o serviço. As Edge Locations / Points of Presence (PoPs) são um terceiro nível — muitos mais pontos espalhados pelo mundo, usados por CDNs para colocar cópias de conteúdo perto do utilizador final, reduzindo latência.</p>

          <RegionAZDiagram />

          <h3 style={S.h3}>Conceitos de Rede Virtual</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Conceito</th><th style={S.th}>Definição</th></tr></thead>
              <tbody>
                {[
                  ['VPC (Virtual Private Cloud)', 'Rede virtual isolada dentro da cloud do fornecedor, onde defines o teu próprio espaço de endereçamento IP, sub-redes, routing e regras de firewall.'],
                  ['Subnet pública vs privada', 'Subnets públicas têm rota directa para a Internet (ex: load balancers); subnets privadas não — usadas para bases de dados e serviços internos, acedidos apenas de dentro da VPC.'],
                  ['Load Balancer', 'Distribui tráfego de entrada por múltiplas instâncias, fazendo health-checks e removendo automaticamente instâncias que falham.'],
                  ['CDN (Content Delivery Network)', 'Rede de servidores cache distribuídos geograficamente que servem conteúdo (estático ou dinâmico) a partir do PoP mais próximo do utilizador.'],
                ].map(([c, d]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{c}</td><td style={S.td}>{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>6. Elasticidade, Auto-scaling e Modelos de Custo</h2>
          <p style={S.p}>Elasticidade é a capacidade de um sistema ajustar automaticamente os recursos que usa à carga real, em ambas as direcções — crescer quando a procura aumenta, e reduzir (não só parar de crescer) quando diminui. É isto que distingue elasticidade de simples escalabilidade: um sistema pode ser escalável (consegue crescer) sem ser elástico (não encolhe sozinho, desperdiçando recursos pagos).</p>
          <p style={S.p}>Tal como no Big Data (Módulo 1), a escala pode ser vertical (mais CPU/RAM na mesma máquina — limitada e normalmente requer reiniciar) ou horizontal (mais máquinas — praticamente ilimitada, mas requer que a aplicação seja stateless ou partilhe estado externamente).</p>

          <AutoScalingDiagram />

          <h3 style={S.h3}>Modelos de Custo — De CapEx para OpEx</h3>
          <p style={S.p}>A mudança fundamental de paradigma trazida pela cloud não é técnica — é financeira. Em vez de comprar hardware antecipadamente (CapEx — Capital Expenditure, custo fixo e elevado, pago antes de saber se será suficiente ou excessivo), passa-se a pagar pelo uso real à medida que ocorre (OpEx — Operational Expenditure, custo variável que acompanha a procura).</p>

          <CostExplorer />
        </div>

        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>7. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.4rem"}}><strong>Modelos de Serviço</strong> — IaaS/PaaS/SaaS/FaaS diferem em quanto da pilha é gerido pelo fornecedor — mais gestão do fornecedor = menos controlo, mais conveniência; FaaS paga por execução sem gestão de servidores.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Modelos de Implementação</strong> — Public Cloud escala sem CAPEX; Private Cloud mantém controlo e compliance; Hybrid combina ambos; Multi-Cloud evita vendor lock-in — decisões guiadas por custo, controlo e regulamentação.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Computação</strong> — VMs (isolamento forte, boot lento), contentores (isolamento de processo, rápidos) e serverless (sem gestão de servidor, paga por execução) coexistem na mesma arquitectura; escolher bem reduz custo e latência.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Armazenamento</strong> — Object Storage para dados não estruturados (durável, barato); Block Storage para bases de dados (rápido, baixa latência); File Storage para acesso partilhado — escolher mal pode tornar uma aplicação inviável.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Networking</strong> — Regions garantem soberania de dados; Availability Zones isolam falhas físicas dentro de uma Region — distribuir por AZs é a base da alta disponibilidade; CDNs reduzem latência com edge locations.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Elasticidade e Custo</strong> — elasticidade = escalar para cima E para baixo automaticamente; o modelo de preço (on-demand, reserved, spot) deve corresponder ao padrão de carga — spot/preemptible dá 60-90% de desconto para workloads tolerantes a interrupção.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
