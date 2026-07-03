import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const S = {
  page: { maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: '#f97316', borderLeft: '3px solid #f97316', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: '3px solid #f97316', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  formula: { background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.10)', borderRadius: 8, padding: '0.75rem 1.25rem', margin: '1rem 0', fontFamily: 'serif', fontSize: '0.95rem', color: '#f97316', textAlign: 'center' },
};

const FSSOperatorsDiagram = () => (
  <div style={{ ...S.diagram }}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', textAlign: 'center' }}>Os 3 Operadores do Fish School Search</p>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
      {[
        {
          name: 'Individual Movement',
          color: '#f97316',
          formula: 'Δxᵢ = rand(-1,1) · step_ind',
          desc: 'Cada peixe move-se uma distância aleatória dentro do raio step_ind. O movimento é aceite se o novo fitness for melhor. Equivale a uma mutação individual hill-climbing.',
          effect: 'Exploração local de cada peixe. step_ind decresce ao longo da optimização.',
        },
        {
          name: 'Feeding Operator',
          color: '#f97316',
          formula: 'W_i(t+1) = W_i(t) + ΔfᵢWmáx / max|Δfⱼ|',
          desc: 'O peso de cada peixe é actualizado proporcionalmente à melhoria de fitness: peixes que melhoraram engordam, peixes que pioraram emagrecem. Representa a alimentação — soluções melhores são recompensadas.',
          effect: 'Os pesos W_i funcionam como memória distribuída da qualidade de cada soluão.',
        },
        {
          name: 'Collective Movement',
          color: '#f97316',
          formula: 'I = Σ(Δxᵢ · Δfᵢ) / Σ|Δfᵢ|',
          desc: 'O cardume move-se colectivamente na direcção média dos movimentos individuais, ponderada pelo ganho de fitness. Peixes que melhoraram mais têm mais influência na direcção colectiva.',
          effect: 'O movimento colectivo converge o cardume para as regiões promissoras do espaço.',
        },
      ].map(({ name, color, icon, formula, desc, effect }) => (
        <div key={name} style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '0.9rem', border: `1px solid ${color}30` }}>
          <div style={{ fontWeight: 700, color, marginBottom: '0.4rem', fontSize: '0.9rem' }}>{icon} {name}</div>
          <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color, background: `${color}10`, borderRadius: 4, padding: '0.3rem 0.5rem', marginBottom: '0.5rem' }}>{formula}</div>
          <p style={{ fontSize: '0.8rem', lineHeight: 1.6, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{desc}</p>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>{effect}</div>
        </div>
      ))}
    </div>
  </div>
);

export default function CIO14() {
  const [step, setStep] = useState(0);
  const steps = [
    { label: 'Inicialização', color: '#f97316', content: 'N peixes são colocados aleatoriamente no espaço de pesquisa. Cada peixe tem posição xᵢ ∈ ℝᴰ, peso Wᵢ (inicializado em W_start, e.g. 50), e fitness f(xᵢ). Os parâmetros step_ind e step_vol são definidos: step_ind controla o movimento individual (decresce linearmente); step_vol controla o movimento colectivo instintivo.' },
    { label: 'Individual Movement', color: '#f97316', content: 'Cada peixe tenta mover-se: Δxᵢ = rand(-1,1) · step_ind. Se f(xᵢ + Δxᵢ) > f(xᵢ), o movimento é aceite e Δfᵢ = melhoria. Caso contrário o peixe permanece (Δxᵢ=0, Δfᵢ=0). Mecanismo de hill-climbing individual: cada peixe explora localmente.' },
    { label: 'Feeding', color: '#f97316', content: 'Os pesos são actualizados: Wᵢ(t+1) = Wᵢ(t) + Δfᵢ · Wmáx / max_j|Δfⱼ|. Peixes com Δfᵢ > 0 ficam mais pesados (aumentam influência). Peixes sem melhoria ficam mais leves. W é truncado em [W_min, W_max]. Este operador é análogo ao depósito de feromónas no ACO.' },
    { label: 'Instinctive-Collective', color: '#f97316', content: 'O cardume tem um movimento colectivo instintivo na direcção dos movimentos individuais bem-sucedidos, ponderado pelo ganho de fitness: I = Σ(Δxᵢ · Δfᵢ) / Σ|Δfᵢ|. Cada peixe move-se I. Isto é o equivalente à atracção ao melhor no PSO — mas ponderado pela qualidade de cada movimento individual.' },
    { label: 'Volitive-Collective', color: '#f97316', content: 'O movimento volitive regula o tamanho do cardume com base na evolução do seu peso total: se o peso total aumentou (melhorou), os peixes afastam-se do baricentro (exploração); se diminuiu (piorou), aproximam-se (exploitação). scale · rand(-1,1) · (xᵢ − baricentro). Equilíbrio automático exploração/exploitação.' },
  ];
  const s = steps[step];

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cio" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>Module 14</div>
        <h1 style={S.h1}>Fish School Search</h1>
        <p style={S.lead}>O Fish School Search (FSS) de Bastos-Filho & Lima Neto (2008) imita o comportamento de cardumes de peixes. Ao contrário do PSO (onde cada partícula tem memória individual), os peixes do FSS têm pesos que representam a sua qualidade acumulada. Três operadores — movimento individual (exploração local), feeding (actualização de pesos por fitness), e movimento colectivo (convergência) — criam um equilíbrio automático exploração/exploitação baseado na evolução do peso total do cardume.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. Inspiração Biológica — Cardumes de Peixes</h2>
          <p style={S.p}>Os cardumes de peixes exibem um comportamento colectivo emergente sem liderança central. Cada peixe segue regras locais simples: manter-se próximo dos vizinhos, alinhar a direcção, evitar colisões. O resultado é uma estrutura coesa que navega eficientemente, detecta predadores e explora fontes de alimento.</p>
          <p style={S.p}>O FSS captura três aspectos-chave deste comportamento: exploração individual (cada peixe procura alimento na sua vizinhança), comunicação de qualidade através do peso (peixes que encontram mais alimento ficam "mais gordos" e têm mais influência), e movimentos colectivos que aproximam o cardume de zonas promissoras ou o expandem quando o alimento é escasso.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Os Três Operadores do FSS</h2>
          <FSSOperatorsDiagram />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. O Algoritmo FSS — Ciclo Completo</h2>
          <div style={S.diagram}>
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              {steps.map((st, i) => (
                <button key={i} onClick={() => setStep(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: step === i ? st.color : 'var(--bg-primary)', color: step === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${step === i ? st.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>
                  {i + 1}. {st.label}
                </button>
              ))}
            </div>
            <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${s.color}30`, fontSize: '0.9rem', lineHeight: 1.8 }}>
              <strong style={{ color: s.color }}>{s.label}</strong>
              <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>{s.content}</p>
            </div>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Parâmetros e Ajuste</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Parâmetro</th><th style={S.th}>Descrição</th><th style={S.th}>Valor típico</th><th style={S.th}>Efeito</th></tr></thead>
              <tbody>
                {[
                  ['N', 'Número de peixes', '30 – 100', 'Maior N → mais exploração, mais custo'],
                  ['step_ind_init', 'Raio de movimento individual inicial', '0.1 × amplitude', 'step_ind decresce linearmente até step_ind_final'],
                  ['step_ind_final', 'Raio final (após T iterações)', '0.001 × amplitude', 'Garante refinamento fino no final da optimização'],
                  ['step_vol', 'Amplitude do movimento volitive', '0.01 × amplitude', 'Controla a expansão/contracção do cardume'],
                  ['W_start', 'Peso inicial de cada peixe', '50 (arbitrário)', 'Referência; o que importa é a variação relativa'],
                  ['W_scale', 'Escala de actualização de peso', '0.5 – 2.0', 'Amplitude das mudanças de peso'],
                ].map(([p, d, v, e]) => (
                  <tr key={p}><td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700, color: '#f97316' }}>{p}</td><td style={S.td}>{d}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{v}</td><td style={S.td}>{e}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.note}>A principal inovação do FSS em relação ao PSO é o operador volitive: se o peso total aumenta (cardume está a melhorar), os peixes dispersam-se para explorar mais. Se o peso total diminui, os peixes convergem para o baricentro. É um mecanismo automático de equilíbrio exploração/exploitação sem parâmetros adicionais.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. FSS vs PSO — Diferenças Chave</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>PSO</th><th style={S.th}>FSS</th></tr></thead>
              <tbody>
                {[
                  ['Memória individual', 'Cada partícula guarda o seu best pessoal (pBest)', 'Cada peixe tem peso W proporcional à qualidade acumulada'],
                  ['Memória global', 'gBest — melhor posição de toda a população', 'Baricentro ponderado pelos pesos (centro de gravidade)'],
                  ['Velocidade', 'Cada partícula tem velocidade persistente vᵢ', 'Sem velocidade — movimento baseado em step_ind'],
                  ['Exploração/exploitação', 'Controlado por ω, c₁, c₂ — ajuste manual', 'Controlado automaticamente pelo peso total do cardume'],
                  ['Convergência prematura', 'Frequente se ω é baixo ou c₂ é alto', 'Menos frequente — volitive movement expande quando piora'],
                  ['Parâmetros', '3 críticos (ω, c₁, c₂) + N', '2 principais (step_ind, step_vol) + N'],
                ].map(([a, pso, fss]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)' }}>{a}</td><td style={S.td}>{pso}</td><td style={{ ...S.td, color: '#f97316' }}>{fss}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
              <li><strong>Individual movement</strong>: Δxᵢ = rand(-1,1)·step_ind. Hill-climbing local de cada peixe. step_ind decresce ao longo da optimização.</li>
              <li><strong>Feeding</strong>: Wᵢ ∝ Δfᵢ. Peixes que melhoram engordam. Peso = memória distribuída de qualidade.</li>
              <li><strong>Instinctive-collective</strong>: movimento médio ponderado pelo ganho de fitness → cardume converge para zonas promissoras.</li>
              <li><strong>Volitive-collective</strong>: se peso total aumentou → dispersar (exploração); se diminuiu → convergir (exploitação). Equilíbrio automático.</li>
              <li>Diferença chave vs PSO: o FSS não tem velocidade persistente. O equilíbrio exploração/exploitação é implícito (volitive), não controlado por parâmetros explícitos.</li>
              <li>Bom para: landscapes multimodais, dimensão média, quando convergência prematura é um problema com PSO.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
