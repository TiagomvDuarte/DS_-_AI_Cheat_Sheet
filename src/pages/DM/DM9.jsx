import React, { useState } from 'react';
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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(249,115,22,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0' },
};

// === Diagram: Lloyd's algorithm iterations ===
const LloydDiagram = () => {
  const points = [
    [40, 40], [55, 60], [70, 35], [50, 80],
    [220, 50], [240, 70], [260, 40], [235, 90],
    [130, 180], [150, 200], [170, 170], [145, 215],
  ];
  const iter0 = { c1: [60, 50], c2: [200, 60], c3: [120, 100] };
  const iter1 = { c1: [54, 54], c2: [239, 63], c3: [149, 191] };
  const groups0 = points.map(p => {
    const d1 = Math.hypot(p[0] - iter0.c1[0], p[1] - iter0.c1[1]);
    const d2 = Math.hypot(p[0] - iter0.c2[0], p[1] - iter0.c2[1]);
    const d3 = Math.hypot(p[0] - iter0.c3[0], p[1] - iter0.c3[1]);
    const m = Math.min(d1, d2, d3);
    return m === d1 ? 0 : m === d2 ? 1 : 2;
  });
  const groups1 = points.map(p => {
    const d1 = Math.hypot(p[0] - iter1.c1[0], p[1] - iter1.c1[1]);
    const d2 = Math.hypot(p[0] - iter1.c2[0], p[1] - iter1.c2[1]);
    const d3 = Math.hypot(p[0] - iter1.c3[0], p[1] - iter1.c3[1]);
    const m = Math.min(d1, d2, d3);
    return m === d1 ? 0 : m === d2 ? 1 : 2;
  });
  const cols = ['#f97316', '#f97316', '#f97316'];

  const Panel = ({ title, centroids, groups, showLines }) => (
    <g>
      <text x="0" y="-8" fill="var(--text-primary)" fontSize="11" fontWeight="700">{title}</text>
      <rect x="0" y="0" width="290" height="240" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />
      {showLines && points.map((p, i) => {
        const c = centroids[['c1', 'c2', 'c3'][groups[i]]];
        return <line key={'l' + i} x1={p[0]} y1={p[1]} x2={c[0]} y2={c[1]} stroke={cols[groups[i]]} strokeWidth="0.7" opacity="0.4" />;
      })}
      {points.map((p, i) => (
        <circle key={'p' + i} cx={p[0]} cy={p[1]} r="5" fill={cols[groups[i]]} opacity="0.85" />
      ))}
      {centroids && [iter0.c1, iter0.c2, iter0.c3].map((_, i) => {
        const c = centroids[['c1', 'c2', 'c3'][i]];
        return <path key={'x' + i} d={`M${c[0] - 7} ${c[1] - 7} L${c[0] + 7} ${c[1] + 7} M${c[0] - 7} ${c[1] + 7} L${c[0] + 7} ${c[1] - 7}`} stroke={cols[i]} strokeWidth="3" />;
      })}
    </g>
  );

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Algoritmo de Lloyd — 2 Iterações Completas</p>
      <svg viewBox="0 0 620 270" style={{ maxWidth: '100%', height: 'auto' }}>
        <g transform="translate(10, 25)">
          <Panel title="Passo 1 — Atribuição (k=3, centroides iniciais)" centroids={iter0} groups={groups0} showLines={true} />
        </g>
        <g transform="translate(320, 25)">
          <Panel title="Passo 2 — Após atualização e nova atribuição" centroids={iter1} groups={groups1} showLines={true} />
        </g>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        No <strong>Passo 1</strong>, os três centroides iniciais (✕) foram colocados arbitrariamente. Cada ponto é
        atribuído ao centroide mais próximo (linhas finas mostram a atribuição), formando uma partição inicial em
        regiões tipo <em>Voronoi</em>. No <strong>Passo 2</strong>, cada centroide foi recalculado como a média dos
        pontos do seu cluster — note que os centroides se deslocaram para o "centro de massa" de cada grupo de
        pontos, e a fronteira entre clusters ajustou-se ligeiramente. Repetindo este ciclo, os centroides
        estabilizam (deixam de se mover) tipicamente em poucas iterações.
      </p>
    </div>
  );
};

// === Diagram: Elbow curve ===
const ElbowDiagram = () => {
  const w = 480, h = 220, pad = 40;
  const ks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sse = [820, 410, 190, 110, 90, 78, 68, 60, 54, 49];
  const xToPx = (k) => pad + ((k - 1) / 9) * (w - 2 * pad);
  const yToPx = (s) => h - pad - (s / 850) * (h - 2 * pad);
  let path = '';
  ks.forEach((k, i) => {
    path += (i === 0 ? 'M' : 'L') + xToPx(k).toFixed(1) + ',' + yToPx(sse[i]).toFixed(1) + ' ';
  });
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Elbow Method — SSE vs. k</p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%', height: 'auto' }}>
        <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={pad} y1={pad} x2={pad} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <text x={w / 2} y={h - 5} textAnchor="middle" fill="var(--text-secondary)" fontSize="11">k (nº de clusters) →</text>
        <text x="14" y={h / 2} textAnchor="middle" fill="var(--text-secondary)" fontSize="11" transform={`rotate(-90 14 ${h / 2})`}>SSE</text>
        <path d={path} fill="none" stroke={color} strokeWidth="2.5" />
        {ks.map((k, i) => <circle key={k} cx={xToPx(k)} cy={yToPx(sse[i])} r="3.5" fill={color} />)}
        <line x1={xToPx(3)} y1={pad} x2={xToPx(3)} y2={h - pad} stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" />
        <text x={xToPx(3)} y={pad - 6} textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">"cotovelo" ≈ k=3</text>
        {ks.map(k => <text key={'k' + k} x={xToPx(k)} y={h - pad + 16} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">{k}</text>)}
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        À medida que k aumenta, o SSE diminui monotonamente (no limite, k=n dá SSE=0). O "cotovelo" é o ponto onde
        a taxa de diminuição abranda drasticamente — neste exemplo, entre k=2 e k=3 o SSE cai de 410 para 190
        (-54%), mas entre k=3 e k=4 cai apenas de 190 para 110 (-42%) e a partir daí os ganhos marginais tornam-se
        pequenos. k=3 é candidato a "bom k" — adicionar mais clusters reduz pouco a variância intra-cluster
        relativamente ao custo de interpretação adicional.
      </p>
    </div>
  );
};

// === Diagram: k-means hard vs GMM soft ===
const HardVsSoftDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Partição Rígida (k-Means) vs. Clusters Elípticos Suaves (GMM)</p>
    <svg viewBox="0 0 620 260" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* k-means panel */}
      <g>
        <text x="150" y="14" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="700">k-Means: fronteiras tipo Voronoi (rígidas)</text>
        <rect x="10" y="25" width="280" height="220" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />
        {/* voronoi-ish dividing lines */}
        <line x1="150" y1="25" x2="150" y2="160" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="3,2" />
        <line x1="150" y1="160" x2="290" y2="245" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="3,2" />
        <line x1="150" y1="160" x2="10" y2="245" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="3,2" />
        {/* points cluster 1 (top-left) */}
        {[[60, 70], [85, 55], [70, 100], [100, 80], [55, 110]].map((p, i) => <circle key={'a' + i} cx={p[0]} cy={p[1]} r="5" fill="#f97316" />)}
        {/* points cluster 2 (top-right) */}
        {[[210, 60], [240, 80], [220, 100], [255, 65], [195, 90]].map((p, i) => <circle key={'b' + i} cx={p[0]} cy={p[1]} r="5" fill="#f97316" />)}
        {/* points cluster 3 (bottom) */}
        {[[100, 200], [140, 220], [180, 200], [120, 230], [165, 215]].map((p, i) => <circle key={'c' + i} cx={p[0]} cy={p[1]} r="5" fill="#f97316" />)}
        <text x="150" y="260" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">cada ponto pertence a exatamente 1 cluster</text>
      </g>
      {/* GMM panel */}
      <g transform="translate(320,0)">
        <text x="150" y="14" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="700">GMM: elipses de covariância (atribuição suave)</text>
        <rect x="10" y="25" width="280" height="220" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />
        <ellipse cx="80" cy="80" rx="55" ry="35" fill="#d9770622" stroke="#f97316" strokeWidth="1.5" transform="rotate(-20 80 80)" />
        <ellipse cx="225" cy="80" rx="45" ry="30" fill="#f9731622" stroke="#f97316" strokeWidth="1.5" transform="rotate(15 225 80)" />
        <ellipse cx="145" cy="210" rx="60" ry="28" fill="#f9731622" stroke="#f97316" strokeWidth="1.5" transform="rotate(5 145 210)" />
        {[[60, 70], [85, 55], [70, 100], [100, 80], [55, 110]].map((p, i) => <circle key={'a' + i} cx={p[0]} cy={p[1]} r="5" fill="#f97316" opacity="0.85" />)}
        {[[210, 60], [240, 80], [220, 100], [255, 65], [195, 90]].map((p, i) => <circle key={'b' + i} cx={p[0]} cy={p[1]} r="5" fill="#f97316" opacity="0.85" />)}
        {[[100, 200], [140, 220], [180, 200], [120, 230], [165, 215]].map((p, i) => <circle key={'c' + i} cx={p[0]} cy={p[1]} r="5" fill="#f97316" opacity="0.85" />)}
        {/* ambiguous point */}
        <circle cx="150" cy="65" r="6" fill="none" stroke="#f97316" strokeWidth="2" />
        <text x="150" y="260" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">cada ponto tem uma probabilidade γ por cluster</text>
      </g>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      No painel da esquerda, o k-Means divide o espaço em regiões poligonais (Voronoi) — cada ponto pertence
      <strong> integralmente</strong> a um único cluster, e as fronteiras são sempre lineares/equidistantes,
      assumindo implicitamente clusters esféricos de tamanho semelhante. No painel da direita, o GMM modela cada
      cluster como uma <strong>elipse</strong> (uma Gaussiana com a sua própria orientação e forma de covariância)
      — o ponto destacado a vermelho, perto da fronteira entre o cluster âmbar e o azul, recebe uma
      <strong> responsabilidade</strong> γ parcial para ambos (ex.: 60% âmbar, 35% azul, 5% verde) em vez de ser
      forçado a escolher um só.
    </p>
  </div>
);

// === Diagram: covariance types ===
const CovarianceTypesDiagram = () => {
  const types = [
    { name: 'spherical', rx: 40, ry: 40, rot: 0, desc: 'Todas as variâncias iguais, sem correlação — círculos' },
    { name: 'diagonal', rx: 55, ry: 30, rot: 0, desc: 'Variâncias diferentes por eixo, sem correlação — elipses alinhadas aos eixos' },
    { name: 'tied', rx: 50, ry: 32, rot: 25, desc: 'Todos os clusters partilham a mesma matriz de covariância (mesma forma/orientação)' },
    { name: 'full', rx: 55, ry: 28, rot: 25, desc: 'Cada cluster tem a sua própria matriz de covariância completa — máxima flexibilidade' },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Tipos de Matriz de Covariância em GMM</p>
      <svg viewBox="0 0 600 180" style={{ maxWidth: '100%', height: 'auto' }}>
        {types.map((t, i) => {
          const x = 75 + i * 150;
          return (
            <g key={t.name}>
              <rect x={x - 70} y="5" width="140" height="130" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />
              <text x={x} y="22" textAnchor="middle" fill={color} fontSize="11" fontWeight="700" fontFamily="monospace">{t.name}</text>
              {t.name === 'tied' ? (
                <>
                  <ellipse cx={x - 12} cy="75" rx={t.rx * 0.6} ry={t.ry * 0.6} fill="#d9770622" stroke="#f97316" strokeWidth="1.5" transform={`rotate(${t.rot} ${x - 12} 75)`} />
                  <ellipse cx={x + 18} cy="75" rx={t.rx * 0.6} ry={t.ry * 0.6} fill="#f9731622" stroke="#f97316" strokeWidth="1.5" transform={`rotate(${t.rot} ${x + 18} 75)`} />
                </>
              ) : (
                <ellipse cx={x} cy="75" rx={t.rx * 0.6} ry={t.ry * 0.6} fill="#d9770622" stroke="#f97316" strokeWidth="1.5" transform={`rotate(${t.rot} ${x} 75)`} />
              )}
            </g>
          );
        })}
      </svg>
      <table style={S.table}>
        <thead><tr><th style={S.th}>Tipo</th><th style={S.th}>Forma</th><th style={S.th}>Nº de parâmetros (por cluster, d dims)</th></tr></thead>
        <tbody>
          {[
            ['spherical', 'Círculos (variância igual em todas as direções)', '1'],
            ['diagonal', 'Elipses alinhadas com os eixos', 'd'],
            ['tied', 'Mesma forma/orientação para todos os clusters', 'd(d+1)/2 (partilhado)'],
            ['full', 'Elipses com qualquer orientação, forma própria por cluster', 'd(d+1)/2'],
          ].map(([n, d, p]) => (
            <tr key={n}><td style={{ ...S.td, fontWeight: 700, color, fontFamily: 'monospace', fontSize: '0.85rem' }}>{n}</td><td style={S.td}>{d}</td><td style={S.td}>{p}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function DM9() {
  return (
    <div style={S.page}>
      <Link to="/dm" style={S.back}><ArrowLeft size={16} /> Voltar a Data Mining</Link>
      <div style={S.tag}>MÓDULO 05</div>
      <h1 style={S.h1}>k-Means, Variantes e Modelos de Mistura Gaussiana (GMM)</h1>
      <p style={S.lead}>
        k-Means é o algoritmo de clustering mais usado — simples, eficiente e escalável. Particiona n observações
        em k clusters minimizando a variância intra-cluster (SSE). Mas a sua simplicidade tem um preço: assume
        clusters esféricos, de tamanho semelhante, e atribui cada ponto rigidamente a um único cluster. Neste
        módulo aprofundamos o algoritmo, a inicialização (k-means++), os critérios de avaliação (Elbow,
        Silhouette, Davies-Bouldin), a variante k-medoids (robusta a outliers), e introduzimos os
        <strong> Modelos de Mistura Gaussiana (GMM)</strong> — uma generalização probabilística que permite
        clusters elípticos e atribuições suaves (soft assignment), treinados via o algoritmo
        <strong> Expectation-Maximization (EM)</strong>.
      </p>

      {/* === SECTION 1: k-Means algorithm === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Algoritmo k-Means (Algoritmo de Lloyd)</h2>
        <p style={S.p}>
          O k-Means é um algoritmo iterativo que alterna entre dois passos simples até convergir: atribuir cada
          ponto ao centroide mais próximo, e recalcular cada centroide como a média dos pontos atribuídos a ele.
          Esta versão clássica é conhecida como <strong>algoritmo de Lloyd</strong>.
        </p>
        <div style={S.diagram}>
          {[
            ['1', 'Inicializar', 'Escolher k centroides (aleatoriamente ou k-means++)'],
            ['2', 'Atribuir', 'Cada ponto vai para o cluster do centroide mais próximo'],
            ['3', 'Atualizar', 'Recalcular cada centroide como média dos pontos do cluster'],
            ['4', 'Convergência?', 'Se os centroides não mudaram (ou mudaram menos que ε): parar'],
            ['5', 'Iterar', 'Voltar ao passo 2 se não convergiu'],
          ].map(([n, t, d]) => (
            <div key={n} style={{ display: 'flex', gap: '1rem', marginBottom: '0.6rem', alignItems: 'flex-start' }}>
              <div style={{ background: color, color: 'white', borderRadius: '50%', width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>{n}</div>
              <div><span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.88rem' }}>{t}: </span><span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{d}</span></div>
            </div>
          ))}
        </div>
        
          <strong>Objetivo:</strong> Minimizar SSE (Sum of Squared Errors)
          <div style={S.math}><BlockMath math="J = \sum_{k=1}^{K} \sum_{x_i \in C_k} \|x_i - \mu_k\|^2" /></div>
          k-Means garante convergência (o SSE nunca aumenta de iteração para iteração) mas pode ficar em mínimos
          locais — é uma heurística, não uma solução global ótima.
        
        <LloydDiagram />
        <p style={S.p}>
          Cada um dos dois passos pode ser visto como uma fase de otimização: o passo de <strong>atribuição</strong>
          minimiza o SSE em relação às atribuições (mantendo os centroides fixos) — é exatamente o
          particionamento de Voronoi induzido pelos centroides atuais. O passo de <strong>atualização</strong>
          minimiza o SSE em relação aos centroides (mantendo as atribuições fixas) — e a média aritmética é,
          precisamente, o ponto que minimiza a soma dos quadrados das distâncias a um conjunto de pontos. Como
          cada passo nunca aumenta o SSE, e o SSE é limitado inferiormente por zero, o algoritmo converge
          garantidamente — mas para um <em>mínimo local</em>, que depende da inicialização.
        </p>
        <div style={S.note}>
          <strong>Complexidade:</strong> O(n · k · d · i), onde n é o nº de pontos, k o nº de clusters, d a
          dimensionalidade, e i o nº de iterações até convergência — extremamente eficiente, o que explica a
          popularidade do k-means mesmo em datasets muito grandes.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: k-means++ === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Problema da Inicialização e k-Means++</h2>
        <p style={S.p}>
          A solução final do k-Means depende fortemente da inicialização — centroides iniciais mal escolhidos
          (por exemplo, dois centroides muito próximos um do outro) levam a mínimos locais maus, onde um cluster
          "verdadeiro" pode ficar dividido entre dois centroides ou dois clusters distintos podem ficar fundidos
          num só.
        </p>
        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>k-Means++ — Inicialização Inteligente</p>
          {[
            ['1', 'Escolher o 1º centroide aleatoriamente (uniformemente entre os pontos)'],
            ['2', 'Para cada ponto x, calcular D(x) = distância ao centroide mais próximo já escolhido'],
            ['3', 'Escolher o próximo centroide com probabilidade proporcional a D(x)²'],
            ['4', 'Repetir passos 2-3 até ter k centroides'],
            ['5', 'Continuar com o algoritmo k-Means normal'],
          ].map(([n, d]) => (
            <div key={n} style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem', alignItems: 'center' }}>
              <div style={{ background: color, color: 'white', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.78rem', flexShrink: 0 }}>{n}</div>
              <span style={{ color: 'var(--text-primary)', fontSize: '0.88rem' }}>{d}</span>
            </div>
          ))}
        </div>
        <p style={S.p}>
          A ideia central é que pontos <strong>longe</strong> dos centroides já escolhidos são mais propensos a
          pertencer a um cluster ainda não "representado" — por isso recebem maior probabilidade de serem
          escolhidos como próximo centroide, mas não com certeza absoluta (o que evitaria escolher sempre o
          ponto mais extremo/outlier).
        </p>
        <h3 style={S.h3}>Exemplo Numérico</h3>
        <p style={S.p}>
          Considere 4 pontos em 1D: A=1, B=2, C=8, D=9. Suponha que o k-means++ escolheu A=1 como primeiro
          centroide. Calculamos D(x)² para cada ponto:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Ponto</th><th style={S.th}>D(x) = |x - 1|</th><th style={S.th}>D(x)²</th><th style={S.th}>Probabilidade</th></tr></thead>
            <tbody>
              {[
                ['A = 1', '0', '0', '0%'],
                ['B = 2', '1', '1', '1/146 ≈ 0.7%'],
                ['C = 8', '7', '49', '49/146 ≈ 33.6%'],
                ['D = 9', '8', '64', '64/146 ≈ 43.8%'],
              ].map(([p, d, d2, pr]) => (
                <tr key={p}><td style={{ ...S.td, fontWeight: 700 }}>{p}</td><td style={S.td}>{d}</td><td style={S.td}>{d2}</td><td style={{ ...S.td, color, fontWeight: 600 }}>{pr}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          (Nota: a soma de D(x)² inclui também o próprio A=0, e B=1, C=49, D=64, totalizando 114 — usando 114 como
          denominador as probabilidades seriam B≈0.9%, C≈43%, D≈56%. O essencial é que <strong>D e C, os pontos
          mais distantes de A, têm probabilidades muito mais altas</strong> de serem escolhidos como segundo
          centroide — favorecendo a descoberta dos dois clusters reais {`{A,B}`} e {`{C,D}`}, em vez de, por
          exemplo, escolher B (que ficaria muito perto de A e desperdiçaria um centroide).
        </p>
        <div style={S.note}>k-Means++ tem garantia teórica de O(log k) vezes o SSE ótimo esperado — muito melhor que a inicialização puramente aleatória. É o padrão em sklearn (<code>init='k-means++'</code>) e na maioria das implementações modernas, geralmente combinado com múltiplas reinicializações (<code>n_init</code>).</div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Choosing k === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Escolha de k</h2>
        <p style={S.p}>
          k-Means exige que o número de clusters k seja definido <em>a priori</em> — mas raramente sabemos esse
          valor. Vários critérios, internos (sem labels verdadeiros) ajudam a escolher k de forma sistemática.
        </p>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Método</th><th style={S.th}>Como funciona</th><th style={S.th}>Limitação</th></tr></thead>
          <tbody>
            {[
              ['Elbow Method', 'Plotar SSE vs. k; procurar o "cotovelo" (ponto de inflexão)', 'Subjetivo; cotovelo pode não ser claro'],
              ['Silhouette Score', 'Mede coesão intra-cluster vs. separação inter-cluster ∈ [-1,1]', 'Computacionalmente O(n²)'],
              ['Davies-Bouldin Index', 'Rácio de dispersão intra-cluster / separação inter-cluster', 'Menor é melhor; assume clusters convexos'],
              ['Gap Statistic', 'Compara SSE com SSE de dados uniformes aleatórios', 'Mais robusto mas computacionalmente pesado'],
            ].map(([a, b, c]) => <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={S.td}>{b}</td><td style={{ ...S.td, color: '#f97316', fontSize: '0.85rem' }}>{c}</td></tr>)}
          </tbody>
        </table>
        <ElbowDiagram />

        <h3 style={S.h3}>Silhouette Coefficient</h3>
        <p style={S.p}>
          Para cada ponto i, o coeficiente de silhueta combina duas distâncias médias: a(i) (coesão — distância
          média aos outros pontos do <strong>mesmo</strong> cluster) e b(i) (separação — distância média ao
          cluster vizinho mais próximo, ou seja, o menor entre as médias de distância aos pontos de cada outro
          cluster).
        </p>
        <div style={S.math}>
          <BlockMath math="s(i) = \frac{b(i) - a(i)}{\max\big(a(i), b(i)\big)}" />
        </div>
        <p style={S.p}>
          s(i) ∈ [-1, 1]. Um valor próximo de <strong>+1</strong> significa que o ponto está muito mais próximo do
          seu próprio cluster do que de qualquer outro (bem agrupado); próximo de <strong>0</strong> significa que
          o ponto está na fronteira entre dois clusters; próximo de <strong>-1</strong> significa que o ponto
          provavelmente foi atribuído ao cluster errado. O Silhouette Score global é a média de s(i) sobre todos
          os pontos, e calcula-se para diferentes valores de k, escolhendo o k que maximiza a média.
        </p>

        <h3 style={S.h3}>Davies-Bouldin Index</h3>
        <p style={S.p}>
          O Davies-Bouldin Index (DBI) compara, para cada par de clusters i e j, a soma das suas dispersões
          internas com a distância entre os seus centroides:
        </p>
        <div style={S.math}>
          <BlockMath math="DB = \frac{1}{K} \sum_{i=1}^{K} \max_{j \neq i} \left( \frac{\sigma_i + \sigma_j}{d(\mu_i, \mu_j)} \right)" />
        </div>
        <p style={S.p}>
          onde σ<sub>i</sub> é a dispersão média do cluster i (distância média dos pontos ao centroide μ<sub>i</sub>)
          e d(μ<sub>i</sub>, μ<sub>j</sub>) é a distância entre os centroides dos clusters i e j. Para cada cluster,
          tomamos o "pior caso" (o vizinho j que maximiza o rácio — ou seja, o vizinho mais problemático), e depois
          fazemos a média sobre todos os clusters. <strong>Quanto menor o DBI, melhor</strong> — clusters compactos
          (σ pequeno) e bem separados (d grande) minimizam o rácio.
        </p>
        <div style={S.highlight}>
          <strong>Resumo prático:</strong> Elbow é rápido e visual mas subjetivo; Silhouette é mais rigoroso mas
          caro em datasets grandes (O(n²)); Davies-Bouldin é rápido de calcular (não precisa de todas as distâncias
          par-a-par) e útil para comparar várias execuções automaticamente. Na prática, usa-se uma combinação —
          nenhum destes índices é perfeito, especialmente se os clusters reais não forem convexos/esféricos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: k-medoids === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. k-Medoids e o Algoritmo PAM</h2>
        <p style={S.p}>
          O k-Means usa a <strong>média</strong> dos pontos do cluster como centroide — mas a média é muito
          sensível a outliers (um único ponto extremo pode deslocar significativamente o centroide) e só faz
          sentido para espaços onde a média está bem definida (ex.: espaços vetoriais com distância Euclidiana).
          O <strong>k-medoids</strong> resolve ambos os problemas: em vez de calcular uma média, escolhe como
          centro de cada cluster um <strong>medoid</strong> — uma observação <em>real</em> do dataset que
          minimiza a soma das distâncias aos outros pontos do cluster.
        </p>
        <h3 style={S.h3}>PAM — Partitioning Around Medoids</h3>
        <p style={S.p}>
          O algoritmo clássico para k-medoids é o <strong>PAM</strong> (Partitioning Around Medoids), que tem duas
          fases:
        </p>
        <div style={S.diagram}>
          {[
            ['1', 'BUILD', 'Selecionar k medoids iniciais de forma greedy: escolher iterativamente o ponto que mais reduz o custo total se for adicionado como medoid'],
            ['2', 'SWAP', 'Para cada medoid m e cada ponto não-medoid o, testar a troca m ↔ o; se a troca reduzir o custo total (soma das distâncias aos medoids mais próximos), efetuá-la'],
            ['3', 'Repetir', 'Repetir o passo SWAP até nenhuma troca reduzir o custo (convergência)'],
          ].map(([n, t, d]) => (
            <div key={n} style={{ display: 'flex', gap: '1rem', marginBottom: '0.6rem', alignItems: 'flex-start' }}>
              <div style={{ background: color, color: 'white', borderRadius: '50%', width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>{n}</div>
              <div><span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.88rem' }}>{t}: </span><span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{d}</span></div>
            </div>
          ))}
        </div>
        <p style={S.p}>
          Cada avaliação de troca no PAM exige recalcular o custo de atribuição de todos os pontos — isto torna o
          PAM <InlineMath math="O(k(n-k)^2)" /> por iteração, muito mais caro que o k-Means. Variantes como
          <strong> CLARA</strong> (aplica PAM a amostras) e <strong>CLARANS</strong> (busca aleatória sobre o
          espaço de soluções) tornam o k-medoids viável para datasets maiores.
        </p>
        <h3 style={S.h3}>Quando preferir k-medoids a k-means?</h3>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Cenário</th><th style={S.th}>Porquê k-medoids</th></tr></thead>
          <tbody>
            {[
              ['Distâncias não-Euclidianas (ex.: distância de Manhattan, Gower para dados mistos, distância de edição entre strings)', 'A média não está bem definida nestes espaços — k-means requer espaço vetorial Euclidiano para que a "média" minimize o SSE; medoids funcionam com qualquer métrica de distância'],
              ['Dados com outliers significativos', 'Medoids são observações reais, robustas a outliers extremos — um outlier não "arrasta" o centro como acontece com a média'],
              ['Interpretabilidade', 'O centro de cada cluster é um exemplo real e interpretável (ex.: "o cliente típico deste segmento é o cliente #4231"), não um ponto sintético'],
              ['Dados categóricos ou mistos', 'Combinado com métricas de distância apropriadas (ex.: Gower), k-medoids lida naturalmente com features não numéricas'],
            ].map(([a, b]) => <tr key={a}><td style={{ ...S.td, fontWeight: 600 }}>{a}</td><td style={{ ...S.td, color, fontSize: '0.88rem' }}>{b}</td></tr>)}
          </tbody>
        </table>
        <div style={S.note}>
          Trade-off: k-medoids é mais robusto e mais flexível em termos de métrica de distância, mas
          computacionalmente muito mais caro que k-means. Para datasets grandes e Euclidianos sem outliers
          severos, k-means (ou variantes escaláveis como Mini-Batch k-Means) continua a ser preferível.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: Limitations and motivation for GMM === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Limitações do k-Means e a Motivação para GMM</h2>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Limitação do k-Means</th><th style={S.th}>Variante / Solução</th></tr></thead>
          <tbody>
            {[
              ['Sensível a outliers (usa médias)', 'k-medoids (PAM): usa as observações reais como centros'],
              ['Assume clusters esféricos e de tamanho/densidade semelhante', 'GMM (Gaussian Mixture Models): clusters elipsoidais, com formas e densidades diferentes'],
              ['Atribuição rígida (hard assignment) — um ponto pertence a 100% de um cluster ou 0%', 'GMM: atribuição suave (soft assignment) via probabilidades posteriores'],
              ['Requer k a priori', 'DBSCAN, HDBSCAN: número de clusters determinado automaticamente'],
              ['Mínimos locais', 'k-Means++, múltiplas reinicializações, k-Means||'],
              ['Não funciona bem com clusters de formas irregulares ou alongadas', 'GMM (até certo ponto, via covariância), DBSCAN, Spectral Clustering'],
            ].map(([a, b]) => <tr key={a}><td style={{ ...S.td, color: '#f97316', fontSize: '0.85rem' }}>{a}</td><td style={{ ...S.td, color, fontWeight: 600 }}>{b}</td></tr>)}
          </tbody>
        </table>
        <p style={S.p}>
          Duas limitações do k-means destacam-se como motivação central para os <strong>Modelos de Mistura
          Gaussiana</strong>: (1) a assunção implícita de que todos os clusters são <strong>esféricos</strong> e
          de tamanho/variância semelhante — porque a distância Euclidiana ao centroide trata todas as direções
          igualmente; e (2) a <strong>atribuição rígida</strong> — cada ponto pertence inteiramente a um único
          cluster, mesmo que esteja quase equidistante de dois centroides, perdendo informação sobre a incerteza
          dessa atribuição.
        </p>
        <HardVsSoftDiagram />
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: GMM generative model === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. O Modelo Generativo: Mistura de Gaussianas</h2>
        <p style={S.p}>
          Um <strong>Gaussian Mixture Model (GMM)</strong> assume que os dados foram gerados por um processo em
          duas etapas: primeiro, escolhe-se aleatoriamente um "componente" k (um cluster) com probabilidade
          π<sub>k</sub> (o <strong>peso de mistura</strong>, ou <em>mixing weight</em>); depois, gera-se uma
          observação x a partir da distribuição Gaussiana desse componente, N(μ<sub>k</sub>, Σ<sub>k</sub>), com
          média μ<sub>k</sub> e matriz de covariância Σ<sub>k</sub>.
        </p>
        <div style={S.math}>
          <BlockMath math="p(x) = \sum_{k=1}^{K} \pi_k \, \mathcal{N}(x \mid \mu_k, \Sigma_k), \qquad \sum_{k=1}^{K} \pi_k = 1, \quad \pi_k \geq 0" />
        </div>
        <p style={S.p}>
          onde a densidade Gaussiana multivariada é:
        </p>
        <div style={S.math}>
          <BlockMath math="\mathcal{N}(x \mid \mu_k, \Sigma_k) = \frac{1}{(2\pi)^{d/2} |\Sigma_k|^{1/2}} \exp\left( -\frac{1}{2} (x-\mu_k)^T \Sigma_k^{-1} (x-\mu_k) \right)" />
        </div>
        <p style={S.p}>
          A densidade total p(x) é, portanto, uma <strong>combinação convexa</strong> (soma ponderada com pesos
          que somam 1) de K densidades Gaussianas — cada uma "responsável" por uma região do espaço de features. O
          k-means pode ser visto como um <strong>caso especial</strong> de GMM: se forçarmos todas as
          covariâncias Σ<sub>k</sub> a serem iguais a uma matriz esférica εI e fizermos ε → 0, o passo E do EM
          (descrito a seguir) reduz-se à atribuição rígida ao componente mais próximo, e o passo M reduz-se ao
          cálculo da média — exatamente o algoritmo de Lloyd.
        </p>
        <div style={S.note}>
          A diferença essencial: enquanto o k-means atribui pontos a clusters de forma <strong>determinística</strong>
          (com base na distância ao centroide), o GMM atribui pontos de forma <strong>probabilística</strong> — cada
          ponto tem uma probabilidade (responsabilidade) de pertencer a cada cluster, refletindo a incerteza
          inerente quando os clusters se sobrepõem.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 7: EM algorithm === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Treino: o Algoritmo Expectation-Maximization (EM)</h2>
        <p style={S.p}>
          Tal como no k-means, não existe solução analítica direta para os parâmetros {`{π_k, μ_k, Σ_k}`} que
          maximizam a verosimilhança (likelihood) dos dados — porque não sabemos a priori a que componente cada
          ponto pertence. O algoritmo <strong>EM</strong> resolve isto iterativamente, alternando entre estimar
          "soft labels" (E-step) e atualizar os parâmetros com base nessas estimativas (M-step) — exatamente o
          mesmo espírito do ciclo atribuição/atualização do k-means, mas em versão probabilística.
        </p>
        <h3 style={S.h3}>E-step (Expectation) — calcular as responsabilidades</h3>
        <p style={S.p}>
          Para cada ponto x<sub>n</sub> e cada componente k, calcula-se a <strong>responsabilidade</strong>
          γ(z<sub>nk</sub>) — a probabilidade posterior (via regra de Bayes) de que x<sub>n</sub> tenha sido gerado
          pelo componente k, dados os parâmetros atuais:
        </p>
        <div style={S.math}>
          <BlockMath math="\gamma(z_{nk}) = \frac{\pi_k \, \mathcal{N}(x_n \mid \mu_k, \Sigma_k)}{\sum_{j=1}^{K} \pi_j \, \mathcal{N}(x_n \mid \mu_j, \Sigma_j)}" />
        </div>
        <p style={S.p}>
          Note que γ(z<sub>nk</sub>) ∈ [0,1] e Σ<sub>k</sub> γ(z<sub>nk</sub>) = 1 para cada ponto — é exatamente
          a "atribuição suave" mencionada acima: o numerador é a densidade conjunta (mistura × Gaussiana) do
          ponto pertencer ao componente k, e o denominador normaliza pela densidade total p(x<sub>n</sub>).
        </p>
        <h3 style={S.h3}>M-step (Maximization) — atualizar os parâmetros</h3>
        <p style={S.p}>
          Com as responsabilidades fixas, recalculam-se os parâmetros de cada componente como
          <strong> estatísticas ponderadas</strong>, onde o peso de cada ponto n para o componente k é
          γ(z<sub>nk</sub>). Define-se N<sub>k</sub> = Σ<sub>n</sub> γ(z<sub>nk</sub>) (o "tamanho efetivo" do
          componente k):
        </p>
        <div style={S.math}>
          <BlockMath math="\mu_k^{\text{novo}} = \frac{1}{N_k} \sum_{n=1}^{N} \gamma(z_{nk}) \, x_n" />
        </div>
        <div style={S.math}>
          <BlockMath math="\Sigma_k^{\text{novo}} = \frac{1}{N_k} \sum_{n=1}^{N} \gamma(z_{nk}) \, (x_n - \mu_k^{\text{novo}})(x_n - \mu_k^{\text{novo}})^T" />
        </div>
        <div style={S.math}>
          <BlockMath math="\pi_k^{\text{novo}} = \frac{N_k}{N}" />
        </div>
        <p style={S.p}>
          Compare com k-means: lá, μ<sub>k</sub> era a média <strong>simples</strong> dos pontos atribuídos
          rigidamente ao cluster k (peso 0 ou 1). Aqui, μ<sub>k</sub> é a média <strong>ponderada</strong> de
          <em> todos</em> os pontos, com pesos γ(z<sub>nk</sub>) ∈ [0,1] — pontos que "pertencem mais" ao
          componente k (γ alto) contribuem mais para a sua média e covariância.
        </p>
        <div style={S.diagram}>
          {[
            ['1', 'Inicializar', 'Escolher valores iniciais para π_k, μ_k, Σ_k (ex.: a partir de um k-means rápido)'],
            ['2', 'E-step', 'Calcular γ(z_nk) para todos os pontos e componentes, usando os parâmetros atuais'],
            ['3', 'M-step', 'Recalcular π_k, μ_k, Σ_k como estatísticas ponderadas por γ(z_nk)'],
            ['4', 'Avaliar convergência', 'Calcular a log-likelihood dos dados; parar se a melhoria for menor que ε'],
            ['5', 'Iterar', 'Voltar ao passo 2 se não convergiu'],
          ].map(([n, t, d]) => (
            <div key={n} style={{ display: 'flex', gap: '1rem', marginBottom: '0.6rem', alignItems: 'flex-start' }}>
              <div style={{ background: color, color: 'white', borderRadius: '50%', width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>{n}</div>
              <div><span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.88rem' }}>{t}: </span><span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{d}</span></div>
            </div>
          ))}
        </div>
        <p style={S.p}>
          A quantidade monitorizada para convergência é a <strong>log-likelihood</strong> dos dados sob o modelo
          atual:
        </p>
        <div style={S.math}>
          <BlockMath math="\ln p(X \mid \pi, \mu, \Sigma) = \sum_{n=1}^{N} \ln \left( \sum_{k=1}^{K} \pi_k \, \mathcal{N}(x_n \mid \mu_k, \Sigma_k) \right)" />
        </div>
        <div style={S.highlight}>
          <strong>Garantia teórica do EM:</strong> a cada iteração (E-step seguido de M-step), a log-likelihood
          dos dados <strong>nunca diminui</strong> — é monotonicamente não-decrescente, e converge para um
          máximo (local ou global) da função de verosimilhança. Tal como o k-means, o EM pode ficar num
          <strong> máximo local</strong> — por isso, na prática, executa-se com várias inicializações diferentes
          (frequentemente, inicializando μ<sub>k</sub> a partir de um k-means rápido) e escolhe-se a que dá a
          melhor log-likelihood final.
        </div>
        <div style={S.note}>
          Após a convergência, cada ponto pode ser "duramente" atribuído ao cluster com maior responsabilidade
          (<InlineMath math="\arg\max_k \gamma(z_{nk})" />) se for necessária uma partição rígida — mas a
          informação probabilística completa (γ(z<sub>nk</sub>) para todos os k) é frequentemente mais útil,
          por exemplo para detetar pontos "ambíguos" (com responsabilidades próximas entre dois ou mais clusters).
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 8: Covariance types === */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Tipos de Matriz de Covariância: Flexibilidade vs. Overfitting</h2>
        <p style={S.p}>
          A matriz de covariância Σ<sub>k</sub> de cada componente controla a <strong>forma, tamanho e
          orientação</strong> da elipse de densidade desse cluster. Quanto mais geral a forma de Σ<sub>k</sub>
          permitida, mais flexível o modelo — mas também mais parâmetros a estimar, com maior risco de
          overfitting (especialmente com poucos pontos por cluster ou alta dimensionalidade).
        </p>
        <CovarianceTypesDiagram />
        <p style={S.p}>
          <strong>spherical</strong> é o mais restritivo (equivalente, em forma, ao k-means com distância
          Euclidiana): cada cluster é um círculo (ou hiperesfera em d dimensões), com a mesma variância em todas
          as direções. <strong>diagonal</strong> permite variâncias diferentes por feature, mas assume que as
          features são não-correlacionadas dentro de cada cluster — elipses alinhadas com os eixos.
          <strong> tied</strong> permite uma forma elíptica geral (com correlações), mas força
          <strong> todos os clusters a partilharem a mesma forma e orientação</strong> — útil quando se espera
          que os clusters tenham "tamanhos e formas semelhantes" mas centrados em sítios diferentes.
          <strong> full</strong> é o mais flexível: cada cluster tem a sua própria matriz de covariância completa,
          permitindo elipses de qualquer forma e orientação, diferentes para cada cluster — mas requer estimar
          d(d+1)/2 parâmetros <em>por cluster</em>, o que pode ser problemático com poucos dados.
        </p>
        <div style={S.note}>
          Regra prática: comece com <code>full</code> se houver dados suficientes (regra informal: pelo menos
          algumas dezenas de pontos por parâmetro de covariância, por cluster). Se o modelo não convergir de
          forma estável, ou os clusters forem pequenos, experimente <code>diagonal</code> ou <code>tied</code> —
          reduzem drasticamente o número de parâmetros ao custo de assunções mais fortes sobre a forma dos
          clusters.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 9: Model selection BIC/AIC === */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Seleção do Número de Componentes: BIC e AIC</h2>
        <p style={S.p}>
          Tal como o k-means precisa de um k pré-definido, o GMM precisa de um número de componentes K. Mas como
          o GMM é um modelo probabilístico, podemos usar critérios baseados em <strong>verosimilhança penalizada
          pela complexidade do modelo</strong> — o <strong>BIC</strong> (Bayesian Information Criterion) e o
          <strong> AIC</strong> (Akaike Information Criterion):
        </p>
        <div style={S.math}>
          <BlockMath math="BIC = -2 \ln \hat{L} + p \ln N" />
        </div>
        <div style={S.math}>
          <BlockMath math="AIC = -2 \ln \hat{L} + 2p" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="\hat{L}" /> é a log-likelihood máxima alcançada pelo modelo (após EM convergir),
          p é o número total de parâmetros livres do modelo (depende de K e do tipo de covariância escolhido), e
          N é o número de observações. <strong>Em ambos os casos, menor é melhor</strong> — o primeiro termo
          recompensa modelos que explicam melhor os dados (maior <InlineMath math="\hat{L}" />), enquanto o
          segundo termo <strong>penaliza</strong> modelos com mais parâmetros, evitando que escolhamos sempre o K
          maior possível (que sempre aumenta <InlineMath math="\hat{L}" />, tal como aumentar k sempre reduz o
          SSE no k-means).
        </p>
        <p style={S.p}>
          A diferença entre BIC e AIC está na força da penalização: o BIC penaliza mais fortemente modelos
          complexos quando N é grande (o termo p·ln(N) cresce com N), tendendo a escolher modelos mais
          parsimoniosos; o AIC usa uma penalização fixa (2p), tendendo a favorecer modelos um pouco mais
          complexos. Na prática, calcula-se BIC (ou AIC) para vários valores de K e escolhe-se o K que minimiza o
          critério — analogamente a plotar SSE vs. k no Elbow Method, mas aqui procura-se um <strong>mínimo</strong>,
          não um cotovelo.
        </p>
        <div style={S.highlight}>
          <strong>BIC/AIC vs. Elbow/Silhouette:</strong> Elbow e Silhouette são heurísticas baseadas em distâncias
          geométricas (SSE, distâncias intra/inter-cluster) e aplicam-se a qualquer algoritmo de clustering
          baseado em distância (k-means, k-medoids). BIC e AIC são fundamentados na teoria de inferência
          estatística (verosimilhança) e aplicam-se a <strong>qualquer modelo probabilístico</strong> — não só
          GMM. Para GMM, BIC é geralmente o critério preferido por ter uma justificação teórica mais sólida
          (aproxima a evidência do modelo, no sentido Bayesiano) e por penalizar mais a complexidade, reduzindo o
          risco de overfitting com covariâncias <code>full</code>.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 10: Comparison table === */}
      <div style={S.section}>
        <h2 style={S.h2}>10. k-Means vs. GMM vs. Clustering Hierárquico</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Critério</th><th style={S.th}>k-Means</th><th style={S.th}>GMM</th><th style={S.th}>Hierárquico (ex.: linkage)</th></tr>
            </thead>
            <tbody>
              {[
                ['Assunção sobre forma dos clusters', 'Esféricos, tamanho/densidade semelhante', 'Elípticos (depende do tipo de Σ); pode capturar orientações diferentes', 'Nenhuma assunção explícita de forma — depende da métrica e do linkage'],
                ['Tipo de atribuição', 'Rígida (hard) — 1 cluster por ponto', 'Suave (soft) — probabilidade por cluster, pode converter para hard', 'Rígida, mas hierárquica (clusters dentro de clusters)'],
                ['Nº de clusters', 'k fixo a priori (Elbow, Silhouette, DBI)', 'K fixo a priori (BIC, AIC) — ou pode ser estimado com modelos Bayesianos (Dirichlet Process GMM)', 'Não precisa de ser fixado a priori — corta-se o dendrograma ao nível desejado'],
                ['Escalabilidade', 'O(nkdi) — muito eficiente, escala bem para grandes datasets', 'Mais caro que k-means (estimar e inverter Σ_k por iteração); covariância full é cara em alta dimensão', 'O(n²) ou O(n² log n) em geral — caro para datasets grandes'],
                ['Sensibilidade a outliers', 'Alta (médias são sensíveis)', 'Moderada (mas outliers podem distorcer Σ_k)', 'Alta para alguns linkages (ex.: single linkage)'],
                ['Quando usar', 'Datasets grandes, clusters aproximadamente esféricos, necessidade de velocidade', 'Clusters com formas/tamanhos diferentes, necessidade de incerteza/probabilidades, dados que parecem gerados por processo Gaussiano', 'Datasets pequenos/médios, quando a estrutura hierárquica (multi-escala) é relevante, ou não se sabe k antecipadamente'],
              ].map(([crit, km, gmm, h]) => (
                <tr key={crit}>
                  <td style={{ ...S.td, fontWeight: 700 }}>{crit}</td>
                  <td style={{ ...S.td, fontSize: '0.85rem' }}>{km}</td>
                  <td style={{ ...S.td, fontSize: '0.85rem', color }}>{gmm}</td>
                  <td style={{ ...S.td, fontSize: '0.85rem' }}>{h}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* === SYNTHESIS === */}
      
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>11. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.4rem"}}><strong>Algoritmo k-Means (Algoritmo de Lloyd)</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Problema da Inicialização e k-Means++</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Escolha de k</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>k-Medoids e o Algoritmo PAM</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Limitações do k-Means e a Motivação para GMM</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>O Modelo Generativo: Mistura de Gaussianas</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Treino: o Algoritmo Expectation-Maximization (EM)</strong> — conceito central desta lecture.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
