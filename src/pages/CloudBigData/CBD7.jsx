import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const color = '#4a9eed';

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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: `${color}14`, border: `1px solid ${color}40`, borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `${color}0f`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const DockerLayersDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Imagem, Layers & Container</p>
    <svg viewBox="0 0 560 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <text x="120" y="16" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Imagem (read-only)</text>
      {[
        ['FROM python:3.11-slim', '#94a3b8'],
        ['RUN pip install -r requirements.txt', '#4a9eed'],
        ['COPY . /app', '#4a9eed'],
        ['CMD ["uvicorn", "main:app"]', '#4a9eed'],
      ].map(([txt, c], i) => (
        <g key={txt}>
          <rect x="20" y={26 + i * 32} width="200" height="26" rx="4" fill={`${c}1f`} stroke={c} strokeWidth="1.2"/>
          <text x="120" y={26 + i * 32 + 17} textAnchor="middle" fill={c} fontSize="8.5" fontFamily="monospace">{txt}</text>
        </g>
      ))}
      <text x="120" y="186" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Cada instrução cria um layer — partilhados e cacheados entre imagens</text>

      <defs>
        <marker id="arr-doc" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" /></marker>
      </defs>
      <line x1="225" y1="100" x2="270" y2="100" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-doc)"/>
      <text x="247" y="92" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">docker run</text>

      <text x="380" y="16" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">Container (em execução)</text>
      <rect x="280" y="26" width="200" height="128" rx="4" fill="rgba(148,163,184,0.06)" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,3"/>
      <text x="380" y="44" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">layers da imagem (read-only)</text>
      <rect x="295" y="55" width="170" height="30" rx="4" fill="rgba(74,158,237,0.12)" stroke="#4a9eed" strokeWidth="1.2"/>
      <text x="380" y="74" textAnchor="middle" fill="#4a9eed" fontSize="8.5">Container layer (read-write)</text>
      <text x="380" y="100" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">— processo isolado a correr</text>
      <text x="380" y="114" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">— filesystem efémero (perde-se</text>
      <text x="380" y="126" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">  ao remover o container)</text>
      <text x="380" y="186" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Várias instâncias podem correr da mesma imagem</text>
    </svg>
  </div>
);

const K8sArchDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Arquitectura de um Cluster Kubernetes</p>
    <svg viewBox="0 0 580 240" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-k8s" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" /></marker>
      </defs>
      {/* Control Plane */}
      <rect x="20" y="15" width="540" height="80" rx="8" fill={`${color}10`} stroke={color} strokeWidth="1.5" strokeDasharray="5,3"/>
      <text x="40" y="32" fill={color} fontSize="11" fontWeight="700">Control Plane</text>
      {[
        ['API Server', 'porta de entrada (kubectl fala aqui)'],
        ['etcd', 'base de dados — estado do cluster'],
        ['Scheduler', 'decide em que Node cada Pod corre'],
        ['Controller Manager', 'reconcilia estado real vs desejado'],
      ].map(([t, d], i) => (
        <g key={t}>
          <rect x={40 + i * 132} y="42" width="120" height="44" rx="5" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1"/>
          <text x={100 + i * 132} y="58" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">{t}</text>
          <text x={100 + i * 132} y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="6.5">{d.length > 28 ? d.slice(0,28)+'…' : d}</text>
        </g>
      ))}

      <line x1="290" y1="95" x2="290" y2="115" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-k8s)"/>

      {/* Worker Nodes */}
      {[20, 215, 410].map((x, i) => (
        <g key={x}>
          <rect x={x} y="120" width="155" height="105" rx="8" fill="rgba(74,158,237,0.06)" stroke="#4a9eed" strokeWidth="1.5"/>
          <text x={x + 77} y="138" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">Worker Node {i + 1}</text>
          <rect x={x + 10} y="146" width="65" height="22" rx="4" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1"/>
          <text x={x + 42} y="160" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">kubelet</text>
          <rect x={x + 80} y="146" width="65" height="22" rx="4" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1"/>
          <text x={x + 112} y="160" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">kube-proxy</text>
          {[0, 1].map(j => (
            <g key={j}>
              <rect x={x + 10 + j * 75} y="174" width="65" height="40" rx="4" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.2"/>
              <text x={x + 42 + j * 75} y="190" textAnchor="middle" fill={color} fontSize="8" fontWeight="700">Pod</text>
              <text x={x + 42 + j * 75} y="202" textAnchor="middle" fill="var(--text-secondary)" fontSize="6.5">container(s)</text>
            </g>
          ))}
        </g>
      ))}
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Tu falas com o API Server (via <code>kubectl</code>); o Scheduler coloca Pods nos Nodes; o kubelet em cada Node garante que os containers desse Pod estão a correr.</p>
  </div>
);

const K8sObjectsDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Hierarquia de Objectos — Deployment → ReplicaSet → Pods → Service</p>
    <svg viewBox="0 0 560 230" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-obj" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" /></marker>
      </defs>
      <rect x="180" y="10" width="200" height="36" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="280" y="33" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">Deployment (nginx, replicas: 3)</text>

      <line x1="280" y1="46" x2="280" y2="66" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-obj)"/>
      <text x="340" y="60" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">cria/gere</text>

      <rect x="190" y="68" width="180" height="34" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="280" y="89" textAnchor="middle" fill="#4a9eed" fontSize="10.5" fontWeight="700">ReplicaSet (mantém 3 réplicas)</text>

      <line x1="280" y1="102" x2="280" y2="120" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-obj)"/>
      <text x="340" y="116" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">cria/gere</text>

      {[100, 280, 460].map((x, i) => (
        <g key={x}>
          <rect x={x - 50} y="124" width="100" height="40" rx="6" fill={`${color}1f`} stroke={color} strokeWidth="1.5"/>
          <text x={x} y="142" textAnchor="middle" fill={color} fontSize="9.5" fontWeight="700">Pod {i + 1}</text>
          <text x={x} y="156" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">nginx container</text>
          <line x1={x} y1="164" x2={280} y2="186" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arr-obj)"/>
        </g>
      ))}

      <rect x="180" y="190" width="200" height="34" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="280" y="211" textAnchor="middle" fill="#4a9eed" fontSize="10.5" fontWeight="700">Service (IP estável + load balancing)</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Pods são efémeros (podem morrer e ser recriados com IPs novos) — o Service dá-lhes um ponto de acesso fixo e distribui tráfego entre as réplicas vivas.</p>
  </div>
);

const KubectlExplorer = () => {
  const [tab, setTab] = useState(0);
  const tabs = [
    {
      name: 'Deployment YAML',
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: fraud-api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: fraud-api
  template:
    metadata:
      labels:
        app: fraud-api
    spec:
      containers:
        - name: fraud-api
          image: myregistry/fraud-model:v1.2
          ports:
            - containerPort: 8000
          resources:
            requests: { cpu: "250m", memory: "256Mi" }
            limits:   { cpu: "500m", memory: "512Mi" }`,
      desc: 'Declara o estado desejado: "quero 3 réplicas do container fraud-model:v1.2 a correr". O Controller Manager garante continuamente que isto é verdade — se um Pod morrer, cria outro automaticamente.',
    },
    {
      name: 'Service YAML',
      code: `apiVersion: v1
kind: Service
metadata:
  name: fraud-api-svc
spec:
  selector:
    app: fraud-api
  ports:
    - port: 80
      targetPort: 8000
  type: LoadBalancer`,
      desc: 'Expõe os Pods com label app=fraud-api num único endereço estável. type: LoadBalancer pede à cloud um IP público; ClusterIP (default) só é acessível dentro do cluster; NodePort abre uma porta fixa em cada Node.',
    },
    {
      name: 'kubectl básico',
      code: `# Aplicar configuração
kubectl apply -f deployment.yaml

# Ver Pods, com labels
kubectl get pods -l app=fraud-api

# Logs de um Pod
kubectl logs fraud-api-7d4f9c-x2k9p

# Escalar manualmente
kubectl scale deployment fraud-api --replicas=5

# Rolling update (nova imagem)
kubectl set image deployment/fraud-api \\
  fraud-api=myregistry/fraud-model:v1.3

# Rollback se algo correr mal
kubectl rollout undo deployment/fraud-api`,
      desc: 'O ciclo normal: aplicar config, inspeccionar Pods/logs, escalar conforme a carga, e fazer rolling updates — o Kubernetes substitui Pods antigos por novos gradualmente, sem downtime.',
    },
    {
      name: 'ConfigMap & Secret',
      code: `apiVersion: v1
kind: ConfigMap
metadata:
  name: fraud-api-config
data:
  MODEL_VERSION: "v1.2"
  LOG_LEVEL: "info"
---
apiVersion: v1
kind: Secret
metadata:
  name: fraud-api-secrets
type: Opaque
stringData:
  DB_PASSWORD: "s3cr3t"`,
      desc: 'ConfigMaps guardam configuração não-sensível (variáveis de ambiente, ficheiros de config); Secrets guardam dados sensíveis (passwords, tokens), com acesso restrito e armazenamento separado. Ambos podem ser injectados num Pod como variáveis de ambiente ou volumes.',
    },
  ];
  const t = tabs[tab];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Configuração & Operações Kubernetes</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {tabs.map((tb, i) => (
          <button key={i} onClick={() => setTab(i)} style={{ padding: '0.35rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: tab === i ? color : 'var(--bg-primary)', color: tab === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${tab === i ? color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>
            {tb.name}
          </button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${color}40` }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '1rem' }}>{t.desc}</p>
        <pre style={{ background: `${color}10`, border: `1px solid ${color}30`, borderRadius: 8, padding: '0.75rem 1rem', fontSize: '0.78rem', color, fontFamily: 'monospace', overflowX: 'auto', margin: 0 }}>{t.code}</pre>
      </div>
    </div>
  );
};

export default function CBD7() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cloud-bigdata" style={S.back}><ArrowLeft size={16} /> Voltar a Cloud &amp; Big Data</Link>
        <div style={S.tag}>Module 7</div>
        <h1 style={S.h1}>Docker &amp; Kubernetes</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. Docker — Imagens, Containers &amp; Dockerfile</h2>
          <p style={S.p}>Uma <strong>imagem</strong> é um pacote read-only com tudo o que a aplicação precisa para correr: código, runtime, bibliotecas e configuração — construída a partir de um <strong>Dockerfile</strong>, instrução a instrução, em <strong>layers</strong>. Um <strong>container</strong> é uma instância em execução dessa imagem, com uma fina camada de escrita por cima. A mesma imagem pode gerar vários containers, em qualquer máquina com Docker instalado.</p>

          <DockerLayersDiagram />

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Conceito</th><th style={S.th}>O que é</th></tr></thead>
              <tbody>
                {[
                  ['Dockerfile', 'Receita de texto que descreve como construir a imagem — imagem base, dependências, código, comando de arranque.'],
                  ['Imagem', 'Resultado do build: um conjunto de layers read-only, identificado por nome:tag (ex: fraud-model:v1.2). Imutável.'],
                  ['Container', 'Instância em execução de uma imagem — processo isolado com o seu próprio filesystem (layer de escrita), rede e espaço de processos.'],
                  ['Registry', 'Repositório de imagens (Docker Hub, ECR, GCR, ACR) — onde se faz push/pull de imagens entre máquinas.'],
                  ['Volume', 'Mecanismo para persistir dados além do ciclo de vida do container (a layer de escrita do container é efémera).'],
                ].map(([c, d]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 600, color }}>{c}</td><td style={S.td}>{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Layers são cacheados e partilhados entre imagens — se duas imagens partilham as primeiras instruções do Dockerfile (ex: a mesma imagem base), o Docker reutiliza esses layers em vez de os reconstruir. Por isso a ordem das instruções no Dockerfile importa: coloca o que muda menos (imagem base, dependências) no topo, e o que muda mais (código da aplicação) no fim.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Porquê Orquestração? De "docker run" a Clusters</h2>
          <p style={S.p}><code>docker run</code> funciona bem para um container numa máquina. Mas em produção surgem perguntas que o Docker sozinho não responde:</p>
          <ul style={{ paddingLeft: '1.4rem', color: 'var(--text-primary)', lineHeight: 1.9, marginBottom: '1rem' }}>
            <li>Se o container morrer (crash, OOM), <strong>quem o reinicia</strong>?</li>
            <li>Se a carga aumentar, <strong>quem cria mais réplicas</strong> — e em que máquinas há espaço?</li>
            <li>Se uma máquina física falhar, <strong>quem reagenda os containers</strong> para outra máquina?</li>
            <li>Como é que o tráfego chega às réplicas certas, mesmo quando elas mudam de IP?</li>
            <li>Como fazer deploy de uma nova versão <strong>sem downtime</strong>, e reverter se correr mal?</li>
          </ul>
          <p style={S.p}>Um <strong>orquestrador de containers</strong> responde a estas perguntas automaticamente, com base num <strong>estado desejado</strong> que tu declaras (ex: "3 réplicas deste container, sempre"). Kubernetes (frequentemente abreviado <strong>K8s</strong>) tornou-se o standard de facto para isto — open-source, cloud-agnostic, suportado nativamente por AWS (EKS), Google (GKE), Azure (AKS) e qualquer infraestrutura on-premises.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Arquitectura Kubernetes — Control Plane &amp; Worker Nodes</h2>
          <p style={S.p}>Um cluster Kubernetes divide-se em duas partes: o <strong>Control Plane</strong> (o "cérebro" — toma decisões, mas não corre as tuas aplicações) e os <strong>Worker Nodes</strong> (as máquinas onde os teus containers efectivamente correm).</p>

          <K8sArchDiagram />

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Componente</th><th style={S.th}>Onde corre</th><th style={S.th}>Função</th></tr></thead>
              <tbody>
                {[
                  ['API Server', 'Control Plane', 'Único ponto de entrada para todos os comandos (kubectl, dashboards, CI/CD) — valida e regista pedidos no etcd.'],
                  ['etcd', 'Control Plane', 'Base de dados chave-valor distribuída — guarda o estado completo do cluster (que existe, e como deveria estar configurado).'],
                  ['Scheduler', 'Control Plane', 'Decide em que Node cada novo Pod deve correr, com base em recursos disponíveis, afinidades e restrições.'],
                  ['Controller Manager', 'Control Plane', 'Corre os "loops de reconciliação" — compara o estado real com o desejado e age para os aproximar (ex: recriar um Pod morto).'],
                  ['kubelet', 'Worker Node', 'Agente que corre em cada Node — comunica com o API Server e garante que os containers descritos nos Pods atribuídos a este Node estão a correr.'],
                  ['kube-proxy', 'Worker Node', 'Gere as regras de rede do Node, permitindo que os Services encaminhem tráfego para os Pods correctos.'],
                ].map(([c, w, f]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 600, color }}>{c}</td><td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{w}</td><td style={{ ...S.td, fontSize: '0.85rem' }}>{f}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Objectos Fundamentais — Pods, ReplicaSets, Deployments &amp; Services</h2>
          <p style={S.p}>Tudo no Kubernetes é descrito declarativamente através de objectos (normalmente em YAML). Os quatro mais fundamentais formam uma cadeia de responsabilidade, cada um construído sobre o anterior:</p>

          <K8sObjectsDiagram />

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Objecto</th><th style={S.th}>O que representa</th></tr></thead>
              <tbody>
                {[
                  ['Pod', 'A menor unidade implantável — um ou mais containers que partilham rede e storage, sempre agendados juntos no mesmo Node. Normalmente: um container por Pod.'],
                  ['ReplicaSet', 'Garante que um número fixo de réplicas idênticas de um Pod está sempre a correr — recria automaticamente Pods que morram.'],
                  ['Deployment', 'Gere ReplicaSets ao longo do tempo — permite rolling updates (substituir gradualmente Pods antigos por novos) e rollback para uma versão anterior.'],
                  ['Service', 'Dá um endereço de rede estável a um conjunto de Pods (seleccionados por labels) e distribui tráfego entre eles, mesmo que os Pods mudem de IP ou sejam recriados.'],
                ].map(([o, d]) => (
                  <tr key={o}><td style={{ ...S.td, fontWeight: 600, color }}>{o}</td><td style={S.td}>{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Tipos de Service</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Tipo</th><th style={S.th}>Acessível a partir de</th><th style={S.th}>Caso de uso típico</th></tr></thead>
              <tbody>
                {[
                  ['ClusterIP (default)', 'Apenas dentro do cluster', 'Comunicação interna entre serviços (ex: API → base de dados)'],
                  ['NodePort', 'IP de qualquer Node, numa porta fixa', 'Desenvolvimento/teste, ou quando há um load balancer externo na frente'],
                  ['LoadBalancer', 'Internet, via IP público da cloud', 'Expor um serviço directamente — a cloud cria um load balancer gerido'],
                  ['Ingress', 'Internet, via regras de routing HTTP(S)', 'Expor múltiplos serviços num único IP, com routing por path/domínio e TLS'],
                ].map(([t, a, u]) => (
                  <tr key={t}><td style={{ ...S.td, fontWeight: 600, color }}>{t}</td><td style={{ ...S.td, fontSize: '0.85rem' }}>{a}</td><td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{u}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Configuração &amp; Operações — Escalar, Actualizar, Configurar</h2>
          <p style={S.p}>No dia-a-dia, trabalhar com Kubernetes resume-se a escrever ficheiros YAML declarativos e usar <code>kubectl</code> para os aplicar e inspeccionar. Abaixo, os blocos mais comuns: o Deployment e Service de uma API, comandos básicos de operação, e como separar configuração de código com ConfigMaps e Secrets.</p>

          <KubectlExplorer />

          <h3 style={S.h3}>Horizontal Pod Autoscaler (HPA)</h3>
          <p style={S.p}>Tal como o auto-scaling de VMs (ver Módulo 2 — Cloud Computing Fundamentos), o HPA ajusta automaticamente o número de réplicas de um Deployment com base em métricas (CPU, memória, ou métricas customizadas), entre um mínimo e um máximo definidos. A diferença é a unidade: em vez de adicionar/remover VMs, adiciona/remove Pods — muito mais rápido (segundos, não minutos).</p>
        </div>

      </div>
    </div>
  );
}
