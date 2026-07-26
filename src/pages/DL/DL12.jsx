import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

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
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
};

// === Diagram: RBM bipartite ===
const RBMDiagram = () => {
  const visible = [{ x: 100, y: 50, label: 'v₁' }, { x: 100, y: 130, label: 'v₂' }, { x: 100, y: 210, label: 'v₃' }];
  const hidden = [{ x: 300, y: 90, label: 'h₁' }, { x: 300, y: 170, label: 'h₂' }];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>RBM — grafo bipartido (camada visível ↔ camada oculta)</p>
      <svg viewBox="0 0 400 280" style={{ maxWidth: '100%', height: 'auto' }}>
        {visible.map((v, i) => hidden.map((h, j) => (
          <line key={`${i}-${j}`} x1={v.x} y1={v.y} x2={h.x} y2={h.y} stroke={color} strokeWidth="1.2" opacity="0.5" />
        )))}
        {visible.map((u, i) => (
          <g key={`v${i}`}>
            <circle cx={u.x} cy={u.y} r="22" fill="var(--bg-secondary)" />
            <circle cx={u.x} cy={u.y} r="22" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
            <text x={u.x} y={u.y + 5} textAnchor="middle" fill={color} fontSize="13" fontWeight="700">{u.label}</text>
          </g>
        ))}
        {hidden.map((u, i) => (
          <g key={`h${i}`}>
            <circle cx={u.x} cy={u.y} r="22" fill="var(--bg-secondary)" />
            <circle cx={u.x} cy={u.y} r="22" fill="rgba(2,132,199,0.28)" stroke="#0284c7" strokeWidth="1.5" />
            <text x={u.x} y={u.y + 5} textAnchor="middle" fill="#0284c7" fontSize="13" fontWeight="700">{u.label}</text>
          </g>
        ))}
        <text x="100" y="255" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">camada visível</text>
        <text x="300" y="255" textAnchor="middle" fill="#0284c7" fontSize="11" fontWeight="600">camada oculta</text>
      </svg>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
        Sem ligações v–v nem h–h: só arestas entre camadas. Isso torna a inferência{' '}
        <InlineMath math="p(h|v)" /> e <InlineMath math="p(v|h)" /> exacta e instantânea (uma
        sigmoide), ao contrário da Boltzmann Machine completa, onde é intractável.
      </p>
    </div>
  );
};

export default function DL12() {
  return (
    <div style={S.page}>
      <Link to="/dl" style={S.back}><ArrowLeft size={16} /> Voltar a Deep Learning</Link>

      <div style={S.tag}>MÓDULO 09</div>
      <h1 style={S.h1}>Deep Belief Networks &amp; Boltzmann Machines</h1>

      <section style={S.section}>
        <p style={S.p}>
          Em meados dos anos 2000, empilhar mais do que 2-3 camadas com inicialização aleatória
          quase sempre falhava — sem ReLU, Batch Normalization ou datasets massivos, o gradiente
          desaparecia ao propagar-se para trás. A solução de Hinton et al. (2006) foi pré-treinar
          cada camada isoladamente, de forma não-supervisionada, usando um modelo gerador chamado{' '}
          <strong>Restricted Boltzmann Machine (RBM)</strong>: uma rede de duas camadas (visível e
          oculta) ligadas simetricamente, treinada a "reconstruir" a sua própria entrada. Empilhando
          várias RBMs obtém-se uma <strong>Deep Belief Network (DBN)</strong> — uma inicialização
          muito melhor do que pesos aleatórios, a partir da qual o fine-tuning com backpropagation
          finalmente conseguia convergir.
        </p>

        <RBMDiagram />

        <p style={S.p}>
          O treino usa <strong>Contrastive Divergence</strong>: em vez de calcular exactamente a
          probabilidade do modelo (intractável), aproxima-se comparando estatísticas dos dados
          reais com estatísticas de uma reconstrução obtida em apenas um ou poucos passos de Gibbs
          sampling. O artigo de Hinton &amp; Salakhutdinov (2006, revista <em>Science</em>) é
          frequentemente apontado como o ponto de viragem que reacendeu o interesse em redes
          profundas depois de décadas de cepticismo — abrindo caminho conceptual para o
          ressurgimento que culminaria no AlexNet (2012).
        </p>

        <div style={S.highlight}>
          <strong>Porque caiu em desuso:</strong> o pré-treino greedy resolvia o vanishing gradient
          dando aos pesos um ponto de partida razoável. Assim que ReLU, inicializações calibradas
          (He/Xavier), Batch Normalization e datasets massivos resolveram o problema de origem
          directamente, deixou de ser necessário este atalho caro e lento — hoje é um nicho
          (collaborative filtering esparso, investigação em EBMs), não uma técnica de produção.
        </div>

        <div style={S.note}>
          <strong>Ecos modernos:</strong> a ideia central — moldar uma função de{' '}
          <strong>energia</strong> para que dados reais tenham energia baixa e dados "errados"
          tenham energia alta — sobrevive nos <strong>Energy-Based Models</strong> e, de forma mais
          influente, nos <strong>diffusion models</strong> (Stable Diffusion, DALL-E 2): gerar uma
          imagem é, conceptualmente, "descer" uma paisagem de energia a partir de ruído puro — o
          sucessor directo do Gibbs sampling usado para amostrar de uma Boltzmann Machine, mas
          parametrizado por redes profundas e guiado por gradientes.
        </div>
      </section>
    </div>
  );
}
