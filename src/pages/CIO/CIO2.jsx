import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: '#4a9eed', border: '1.5px solid #4a9eed', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: '#4a9eed', borderLeft: '3px solid #4a9eed', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.06)', borderLeft: '3px solid #4a9eed', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const LandscapeDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Fitness Landscape — ler a topografia do problema</p>
    <svg viewBox="0 0 560 160" style={{ maxWidth: '100%', height: 'auto' }}>
      <text x="140" y="12" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">PAISAGEM SUAVE — problema fácil</text>
      <polyline points="10,120 50,100 90,70 130,40 170,60 210,100 270,120" fill="none" stroke="#4a9eed" strokeWidth="2"/>
      <polyline points="10,120 50,100 90,70 130,40 170,60 210,100 270,120 270,140 10,140" fill="rgba(74,158,237,0.10)" stroke="none"/>
      <circle cx={130} cy={40} r={5} fill="#4a9eed" stroke="white" strokeWidth="1.5"/>
      <text x={130} y={30} textAnchor="middle" fill="#4a9eed" fontSize="8">1 ótimo — fácil</text>
      <text x={140} y={152} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">poucos ótimos locais → Hill Climbing funciona bem</text>

      <text x="415" y="12" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">PAISAGEM RUGOSA — problema difícil</text>
      <polyline points="290,120 310,100 330,80 345,95 360,65 375,85 390,55 405,70 420,40 435,60 450,45 465,80 490,70 520,100 550,120" fill="none" stroke="#4a9eed" strokeWidth="2"/>
      <polyline points="290,120 310,100 330,80 345,95 360,65 375,85 390,55 405,70 420,40 435,60 450,45 465,80 490,70 520,100 550,120 550,140 290,140" fill="rgba(74,158,237,0.10)" stroke="none"/>
      <circle cx={360} cy={65} r={4} fill="#4a9eed" stroke="white" strokeWidth="1.5"/>
      <circle cx={390} cy={55} r={4} fill="#4a9eed" stroke="white" strokeWidth="1.5"/>
      <circle cx={420} cy={40} r={5} fill="#4a9eed" stroke="white" strokeWidth="1.5"/>
      <circle cx={450} cy={45} r={4} fill="#4a9eed" stroke="white" strokeWidth="1.5"/>
      <text x={360} y={53} textAnchor="middle" fill="#4a9eed" fontSize="7">local</text>
      <text x={390} y={43} textAnchor="middle" fill="#4a9eed" fontSize="7">local</text>
      <text x={420} y={28} textAnchor="middle" fill="#4a9eed" fontSize="7">global</text>
      <text x={450} y={33} textAnchor="middle" fill="#4a9eed" fontSize="7">local</text>
      <text x={415} y={152} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">muitos ótimos locais → Hill Climbing fica preso facilmente</text>
    </svg>
  </div>
);

export default function CIO2() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cio" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>Módulo 2</div>
        <h1 style={S.h1}>Espaço de Pesquisa & Fitness Landscape</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. Problema de Optimização — Definição Formal</h2>
          <p style={S.p}>Um problema de optimização é formalmente definido pelo par (S, f), onde S é o espaço de pesquisa (o conjunto de todas as soluções possíveis) e f é a função de fitness (ou função objectivo) que mapeia cada solução para um valor real. Esta definição minimal é a fundação sobre a qual toda a maquinaria de algoritmos de optimização assenta.</p>
          <p style={S.p}>Formalizar o problema antes de escolher o algoritmo não é burocracia — é a única forma de garantir que se está a resolver o problema certo. Um problema mal definido leva inevitavelmente a soluções erradas, independentemente da sofisticação do algoritmo. A clareza sobre S e f é o trabalho intelectual mais importante do processo.</p>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Componente</th><th style={S.th}>Definição matemática</th><th style={S.th}>O que representa</th><th style={S.th}>Exemplo (TSP)</th></tr></thead>
              <tbody>
                {[
                  ['S (espaço de pesquisa)', 'Conjunto de todas as soluções candidatas possíveis', 'Define o universo de respostas válidas para o problema', 'Todas as permutações possíveis de N cidades'],
                  ['f (função de fitness)', 'f: S → ℝ — mapeia cada solução para um número real', 'Quantifica a qualidade de cada solução candidata', 'Comprimento total da rota: soma das distâncias entre cidades consecutivas'],
                  ['Minimização', '∀y ∈ S: f(x*) ≤ f(y) — encontrar x* que minimiza f', 'Problemas onde menor é melhor', 'Minimizar distância total percorrida no TSP'],
                  ['Maximização', '∀y ∈ S: f(x*) ≥ f(y) — encontrar x* que maximiza f', 'Problemas onde maior é melhor', 'Maximizar o lucro total no Knapsack Problem'],
                  ['Ótimo global x*', 'A solução com melhor valor de f em todo o S', 'A melhor solução possível — o que queremos encontrar', 'A rota mais curta que visita todas as cidades exatamente uma vez'],
                ].map(([c, d, r, e]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{c}</td><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.83rem' }}>{d}</td><td style={S.td}>{r}</td><td style={{ ...S.td, fontSize: '0.83rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>{e}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>O Algoritmo de Optimização e a Vizinhança</h3>
          <p style={S.p}>Um algoritmo de optimização é um método iterativo que, em cada iteração, devolve uma solução pertencente a S. A pesquisa aleatória (amostrar soluções de S uniformemente ao acaso) satisfaz esta definição e serve como baseline. Qualquer algoritmo que não supere a pesquisa aleatória num dado problema não tem valor prático para esse problema.</p>
          <p style={S.p}>A vizinhança N(x) de uma solução x é o conjunto de soluções "próximas" de x — acessíveis num único movimento. A definição de vizinhança é um parâmetro de design crucial: vizinhanças demasiado pequenas limitam a exploração; vizinhanças demasiado grandes tornam cada iteração inviável computacionalmente.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Teorema No Free Lunch</h2>
          <p style={S.p}>O Teorema No Free Lunch (NFL), provado por Wolpert e Macready em 1997, afirma que qualquer par de algoritmos de optimização A₁ e A₂ tem exactamente a mesma performance média calculada sobre todos os problemas de optimização possíveis. Por outras palavras: não existe nenhum algoritmo que seja melhor do que todos os outros em média sobre todos os problemas.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(74,158,237,0.2)', border: '1px solid rgba(74,158,237,0.2)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.5rem' }}>O que o NFL diz</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                <li>Não existe algoritmo universalmente superior</li>
                <li>Qualquer ganho num tipo de problema é compensado por perda noutro</li>
                <li>A pesquisa aleatória tem a mesma performance média que qualquer algoritmo sofisticado</li>
                <li>A escolha do algoritmo deve ser guiada pelo conhecimento do problema específico</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(74,158,237,0.2)', border: '1px solid rgba(74,158,237,0.2)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.5rem' }}>Consequências práticas</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                <li>Não há bala de prata — "melhor algoritmo" é sempre relativo ao problema</li>
                <li>Algoritmos são bons porque exploram a estrutura específica de uma classe de problemas</li>
                <li>A avaliação experimental em instâncias representativas do problema real é obrigatória</li>
                <li>Benchmarks genéricos não predizem performance no problema específico</li>
              </ul>
            </div>
          </div>

          <div style={S.note}>O NFL não invalida a investigação em algoritmos — significa que algoritmos especializados para classes específicas de problemas têm valor imenso. Os AGs são superiores para certos problemas combinatórios precisamente porque exploram estrutura que a pesquisa aleatória ignora.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Fitness Landscape — Ler a Topografia do Problema</h2>
          <p style={S.p}>O fitness landscape é uma representação que transforma um problema abstracto de optimização numa paisagem física concreta. O eixo horizontal representa o espaço de pesquisa S, com pontos adjacentes a representar soluções vizinhas. O eixo vertical representa o valor de fitness f. A topografia resultante revela imediatamente a dificuldade do problema para algoritmos de pesquisa local.</p>
          <p style={S.p}>Antes de escolher o algoritmo, importa perceber a forma do terreno. Uma paisagem suave, com um único pico proeminente, é trivial para Hill Climbing — qualquer ponto de início converge para o ótimo global. Uma paisagem rugosa, com centenas de picos de alturas similares, é um pesadelo — o HC fica preso no primeiro pico que encontra.</p>

          <LandscapeDiagram />

          <h3 style={S.h3}>Ótimo Local — Definição Formal</h3>
          <p style={S.p}>Dado um problema de optimização (S, f) e uma vizinhança N, uma solução x ∈ S é um ótimo local se nenhum vizinho a supera: para todo y ∈ N(x), f(x) ≥ f(y) (maximização) ou f(x) ≤ f(y) (minimização). É a versão local da optimalidade — melhor do que tudo o que se consegue ver, mas potencialmente longe do melhor global.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Conceito de paisagem</th><th style={S.th}>O que significa</th><th style={S.th}>Implicação para algoritmos</th></tr></thead>
              <tbody>
                {[
                  ['Paisagem suave (unimodal)', 'Um único ótimo local que coincide com o global. Gradiente suave e consistente.', 'Hill Climbing funciona perfeitamente. Qualquer ponto de início converge para o ótimo global.'],
                  ['Paisagem rugosa (multimodal)', 'Múltiplos ótimos locais com alturas variadas. Gradiente inconsistente.', 'Hill Climbing fica preso. Necessário SA, AGs, ou outros mecanismos de escape.'],
                  ['Plateau (planície)', 'Região plana onde muitos vizinhos têm o mesmo fitness. Nenhuma direcção é melhor.', 'HC não sabe para onde mover. Necessário random walk ou considerar vizinhança maior.'],
                  ['Bacia de atracção', 'Conjunto de soluções que convergem para o mesmo ótimo local via HC.', 'Define "zonas de influência" dos ótimos. Bacias grandes = ótimo fácil de encontrar.'],
                  ['Rugosidade', 'Medida de variação do fitness entre vizinhos. Alta rugosidade = muitos ótimos locais.', 'Rugosidade elevada prediz dificuldade para pesquisa local. Guia a escolha do algoritmo.'],
                ].map(([c, o, i]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{c}</td><td style={S.td}>{o}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{i}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        

      </div>
    </div>
  );
}
