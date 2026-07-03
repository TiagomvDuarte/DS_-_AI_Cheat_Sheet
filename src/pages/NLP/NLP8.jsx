import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  lectureTag: { display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-color)', borderLeft: '3px solid var(--accent-color)', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  code: { fontFamily: 'monospace', background: 'var(--bg-secondary)', padding: '0.1rem 0.4rem', borderRadius: 4, fontSize: '0.88em', color: 'var(--accent-color)' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: '3px solid var(--accent-color)', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
};

const TemperatureDemo = () => {
  const [temp, setTemp] = useState(1.0);
  const baseLogits = [3.2, 1.8, 1.1, 0.7, 0.3, 0.2];
  const words = ['car', 'truck', 'vehicle', 'bus', 'train', 'bicycle'];

  const softmax = (logits, T) => {
    const scaled = logits.map(l => Math.exp(l / T));
    const sum = scaled.reduce((a, b) => a + b, 0);
    return scaled.map(s => s / sum);
  };

  const probs = softmax(baseLogits, temp);
  const maxIdx = probs.indexOf(Math.max(...probs));

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Demo: Temperature e Distribuição de Probabilidade</p>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginRight: '0.75rem' }}>Temperature T = <strong style={{ color: 'var(--accent-color)' }}>{temp.toFixed(1)}</strong></label>
        <input type="range" min="0.1" max="3.0" step="0.1" value={temp}
          onChange={e => setTemp(parseFloat(e.target.value))}
          style={{ width: 200, accentColor: 'var(--accent-color)' }} />
      </div>
      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontStyle: 'italic' }}>
        {temp < 0.5 ? ' Muito determinístico — output previsível' : temp < 1.2 ? ' Comportamento padrão' : ' Muito criativo — output variado'}
      </div>
      <div style={{ maxWidth: 380, margin: '0 auto' }}>
        {words.map((word, i) => (
          <div key={word} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
            <span style={{ width: 60, textAlign: 'right', fontSize: '0.85rem', fontWeight: i === maxIdx ? 700 : 400, color: i === maxIdx ? 'var(--accent-color)' : 'var(--text-primary)' }}>{word}</span>
            <div style={{ flex: 1, height: 18, background: 'var(--bg-primary)', borderRadius: 9, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${probs[i] * 100}%`, background: i === maxIdx ? 'var(--accent-color)' : 'rgba(249,115,22,0.35)', borderRadius: 9, transition: 'width 0.3s' }} />
            </div>
            <span style={{ width: 44, fontSize: '0.8rem', fontFamily: 'monospace', color: i === maxIdx ? 'var(--accent-color)' : 'var(--text-secondary)', fontWeight: i === maxIdx ? 700 : 400 }}>{(probs[i] * 100).toFixed(1)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const RAGDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Pipeline RAG — Retrieval-Augmented Generation</p>
    <svg viewBox="0 0 640 160" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arra" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--accent-color)" />
        </marker>
      </defs>

      {/* Steps */}
      {[
        [65, 'Questão\ndo utilizador', 'rgba(249,115,22,0.08)', '#f97316'],
        [235, '① Retrieval\n(busca semântica)', 'rgba(249,115,22,0.15)', '#f97316'],
        [405, '② Augment\n(enriquecer prompt)', 'rgba(245,158,11,0.15)', '#f59e0b'],
        [575, '③ Generate\n(LLM responde)', 'rgba(249,115,22,0.12)', '#fb923c'],
      ].map(([cx, label, bg, col]) => (
        <g key={label}>
          <rect x={cx - 65} y="40" width="130" height="60" rx="10" fill={bg} stroke={col} strokeWidth="1.5" />
          {label.split('\n').map((line, li) => (
            <text key={li} x={cx} y={64 + li * 16} textAnchor="middle" fill={col} fontSize="11" fontWeight={li === 0 ? 'bold' : '500'}>{line}</text>
          ))}
        </g>
      ))}

      {/* Arrows */}
      <line x1="131" y1="70" x2="168" y2="70" stroke="var(--accent-color)" strokeWidth="1.5" markerEnd="url(#arra)" />
      <line x1="301" y1="70" x2="338" y2="70" stroke="var(--accent-color)" strokeWidth="1.5" markerEnd="url(#arra)" />
      <line x1="471" y1="70" x2="508" y2="70" stroke="var(--accent-color)" strokeWidth="1.5" markerEnd="url(#arra)" />

      {/* Vector DB */}
      <ellipse cx="235" cy="138" rx="55" ry="16" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="235" y="142" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Vector DB</text>
      <line x1="235" y1="101" x2="235" y2="123" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,2" />

      {/* Chunks in augment */}
      <text x="405" y="118" textAnchor="middle" fill="#f59e0b" fontSize="8">[chunk₁][chunk₂] + questão</text>
    </svg>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginTop: '1rem', textAlign: 'left' }}>
      {[
        ['① Retrieval', 'A questão é convertida em embedding e compara-se com os embeddings dos documentos na base vectorial. Recuperam-se os chunks mais similares.', 'var(--accent-color)'],
        ['② Augment', 'Os chunks recuperados são inseridos no prompt antes da questão. O LLM recebe contexto adicional baseado em dados reais.', '#f97316'],
        ['③ Generate', 'O LLM responde com base no prompt enriquecido. A resposta está ancorada em informação real — menos alucinações.', '#f97316'],
      ].map(([title, desc, color]) => (
        <div key={title} style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '0.75rem', border: `1px solid ${color}30` }}>
          <div style={{ fontWeight: 700, fontSize: '0.82rem', color, marginBottom: '0.3rem' }}>{title}</div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const AgentDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Anatomia de um LLM Agent</p>
    <svg viewBox="0 0 500 260" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrb" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* Central LLM */}
      <ellipse cx="250" cy="130" rx="55" ry="40" fill="var(--accent-color)" opacity="0.8" />
      <text x="250" y="126" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">LLM</text>
      <text x="250" y="142" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9">"cérebro"</text>

      {/* Memória */}
      <rect x="20" y="50" width="110" height="60" rx="10" fill="rgba(251,146,60,0.15)" stroke="#fb923c" strokeWidth="1.5" />
      <text x="75" y="76" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Memória</text>
      <text x="75" y="92" textAnchor="middle" fill="#fb923c" fontSize="9">curto prazo</text>
      <text x="75" y="104" textAnchor="middle" fill="#fb923c" fontSize="9">(context window)</text>
      <line x1="130" y1="80" x2="194" y2="110" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#arrb)" />

      {/* Ferramentas */}
      <rect x="370" y="50" width="110" height="60" rx="10" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="425" y="76" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">Ferramentas</text>
      <text x="425" y="92" textAnchor="middle" fill="#f59e0b" fontSize="9">APIs, código</text>
      <text x="425" y="104" textAnchor="middle" fill="#f59e0b" fontSize="9">busca, RAG</text>
      <line x1="370" y1="80" x2="308" y2="110" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#arrb)" />

      {/* Planeamento */}
      <rect x="170" y="8" width="160" height="50" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="250" y="30" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Planeamento</text>
      <text x="250" y="46" textAnchor="middle" fill="#f97316" fontSize="9">ReAct, Chain-of-Thought</text>
      <line x1="250" y1="58" x2="250" y2="89" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#arrb)" />

      {/* Ambiente */}
      <rect x="155" y="200" width="190" height="46" rx="10" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="250" y="220" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="600">Ambiente</text>
      <text x="250" y="236" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">percepciona / actua</text>
      <line x1="250" y1="200" x2="250" y2="172" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#arrb)" />
    </svg>
  </div>
);

const ReactCycle = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>ReAct — Reason + Act (ciclo do agente)</p>
    <svg viewBox="0 0 520 120" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrc" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--accent-color)" />
        </marker>
      </defs>
      {[['Thought', 90, '#fb923c', 'Raciocínio\ninterno'], ['Action', 260, '#f97316', 'Chamar\nferramenta'], ['Observation', 430, '#f97316', 'Resultado\nda ferramenta']].map(([label, cx, color, sub]) => (
        <g key={label}>
          <ellipse cx={cx} cy="60" rx="72" ry="36" fill={color} opacity="0.12" stroke={color} strokeWidth="1.5" />
          <text x={cx} y="54" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">{label}</text>
          {sub.split('\n').map((s, si) => (
            <text key={si} x={cx} y={68 + si * 13} textAnchor="middle" fill={color} fontSize="9" opacity="0.8">{s}</text>
          ))}
        </g>
      ))}
      <line x1="163" y1="60" x2="188" y2="60" stroke="var(--accent-color)" strokeWidth="1.5" markerEnd="url(#arrc)" />
      <line x1="332" y1="60" x2="357" y2="60" stroke="var(--accent-color)" strokeWidth="1.5" markerEnd="url(#arrc)" />
      {/* Loop back */}
      <path d="M 502 60 Q 520 10 260 10 Q 0 10 18 60" fill="none" stroke="var(--accent-color)" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#arrc)" />
      <text x="260" y="8" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">próximo ciclo ou resposta final</text>
    </svg>
    <div style={{ marginTop: '1rem', textAlign: 'left' }}>
      <p style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Exemplo: "Qual o preço do MacBook Pro em EUR?"</p>
      <div style={{ overflowX: 'auto' }}>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Ciclo</th><th style={S.th}>Thought</th><th style={S.th}>Action + Observation</th></tr></thead>
          <tbody>
            {[
              ['1', '"Preciso de pesquisar o preço"', 'Google["price MacBook Pro"] → "$1,299"'],
              ['2', '"Preciso de calcular a conversão"', 'Calculator[1299×0.85] → 1104.15'],
              ['Final', '—', 'Resposta: "Um MacBook Pro custaria €1104.15"'],
            ].map(([c, t, a]) => (
              <tr key={c}><td style={{ ...S.td, fontWeight: 700, color: 'var(--accent-color)' }}>{c}</td><td style={{ ...S.td, fontStyle: 'italic', color: 'var(--text-secondary)' }}>{t}</td><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.85rem' }}>{a}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default function NLP8() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/nlp" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.lectureTag}>MÓDULO 8</div>
        <h1 style={S.h1}>Generative Models & Agentic AI</h1>
        <p style={S.lead}>Do GPT-1 (117M) ao GPT-3 (175B), à era dos SLMs eficientes. Como funciona a geração de texto, como controlar o LLM, e como construir agentes que actuam no mundo.</p>

        {/* === SECTION 1 === */}
        <div style={S.section}>
          <h2 style={S.h2}>1. Evolução dos Modelos Generativos</h2>
          <p style={S.p}>Os LLMs cresceram exponencialmente desde 2017 — mas a partir de 2023 o foco mudou para eficiência. Dois ecossistemas paralelos emergiram.</p>

          <div style={S.diagram}>
            <svg viewBox="0 0 560 140" style={{ maxWidth: '100%', height: 'auto' }}>
              <defs>
                <marker id="arrd" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="var(--accent-color)" />
                </marker>
              </defs>
              {/* Timeline */}
              <line x1="30" y1="100" x2="530" y2="100" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrd)" />
              {[
                [60, 100, 'GPT-1\n117M', '#fb923c'],
                [180, 85, 'GPT-2\n1.5B', '#fb923c'],
                [330, 40, 'GPT-3\n175B', '#f97316'],
                [440, 65, 'GPT-4\n???', '#f97316'],
                [500, 80, 'SLMs\nPhi,Gemma', '#f97316'],
              ].map(([cx, cy, label, color]) => (
                <g key={label}>
                  <circle cx={cx} cy={cy} r={cy < 60 ? 10 : 7} fill={color} opacity="0.7" />
                  <line x1={cx} y1={cy + (cy < 60 ? 10 : 7)} x2={cx} y2="100" stroke={color} strokeWidth="1" strokeDasharray="3,2" />
                  {label.split('\n').map((l, li) => (
                    <text key={li} x={cx} y={cy - 14 - li * 12} textAnchor="middle" fill={color} fontSize="9" fontWeight="600">{l}</text>
                  ))}
                </g>
              ))}
              {/* Arrow showing growth stopped */}
              <text x="380" y="52" textAnchor="middle" fill="#f97316" fontSize="8">↑ crescimento parou</text>
              <text x="30" y="120" fill="var(--text-secondary)" fontSize="9">2018</text>
              <text x="500" y="120" fill="var(--text-secondary)" fontSize="9">2025</text>
            </svg>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Com GPT-4 o crescimento exponencial de parâmetros travou. Em 2024 emergem os SLMs (Phi-3, Gemma 2B, Qwen2.5) — menores, mais eficientes, executáveis localmente.</p>
          </div>

          <h3 style={S.h3}>Proprietário vs. Open-Source</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Característica</th><th style={S.th}>Proprietário</th><th style={S.th}>Open-source / Open-weight</th></tr></thead>
              <tbody>
                {[
                  ['Acesso', 'Via API', 'Download directo'],
                  ['Código/pesos', 'Ocultos', 'Públicos'],
                  ['Controlo', 'Nenhum', 'Total'],
                  ['Custo operacional', 'Pay-per-token', 'Hardware próprio'],
                  ['Exemplos', 'GPT-4, Gemini, Claude', 'LLaMA, Mistral, Mixtral'],
                ].map(([f, p, o]) => (
                  <tr key={f}><td style={S.td}><strong>{f}</strong></td><td style={S.td}>{p}</td><td style={S.td}>{o}</td></tr>
                ))}
              </tbody>
            </table>
          </div>


        </div>

        <hr style={S.divider} />

        {/* === SECTION 2 === */}
        <div style={S.section}>
          <h2 style={S.h2}>2. Configuração do Modelo: Temperature, top_p, top_k</h2>
          <p style={S.p}>A cada passo, o LLM calcula uma distribuição de probabilidade sobre todo o vocabulário. O token gerado é amostrado dessa distribuição. Três parâmetros controlam essa aleatoriedade:</p>

          <div style={S.math}>
            <BlockMath math={`P(x_i) = \\frac{e^{x_i}}{\\sum_{j=1}^{|V|} e^{x_j}} \\xrightarrow{\\text{temperatura T}} P(x_i | T) = \\frac{e^{x_i/T}}{\\sum_{j=1}^{|V|} e^{x_j/T}}`} />
          </div>

          <TemperatureDemo />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              ['Temperature', 'Controla a nitidez da distribuição. T→0: determinístico. T=1: padrão. T→∞: uniforme (aleatório).', [['Tradução/e-mail', '0.1–0.3'], ['Q&A factual', '0.2–0.5'], ['Geração criativa', '0.8–1.2'], ['Brainstorming', '1.0–1.5']]],
              ['top_p (nucleus)', 'Fixa a probabilidade acumulada. Considera apenas os tokens cujas probabilidades somam p. Adaptativo — o corte ajusta-se à forma da distribuição.', [['Focado', '≈ 0.3'], ['Equilibrado', '≈ 0.7'], ['Variado', '≈ 0.95'], ['Max variação', '1.0']]],
              ['top_k', 'Limita a amostragem exactamente aos k tokens mais prováveis. Simples mas menos adaptativo — o corte é fixo independentemente da distribuição.', [['Muito focado', 'k=1'], ['Focado', 'k=10'], ['Standard', 'k=50'], ['Aberto', 'k=100']]],
            ].map(([title, desc, values]) => (
              <div key={title} style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: '1px solid var(--card-border)' }}>
                <div style={{ fontWeight: 700, color: 'var(--accent-color)', marginBottom: '0.5rem' }}>{title}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: 1.6 }}>{desc}</p>
                {values.map(([label, val]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>{label}</span>
                    <span style={{ fontFamily: 'monospace', color: 'var(--text-primary)', fontWeight: 600 }}>{val}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 3 === */}
        <div style={S.section}>
          <h2 style={S.h2}>3. Prompt Engineering</h2>
          <p style={S.p}>O prompt é a única interface que o utilizador tem com o LLM. Saber construí-lo determina a qualidade do output — sem tocar nos pesos do modelo.</p>

          <h3 style={S.h3}>Zero-shot, One-shot e Few-shot</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              ['Zero-shot', '0 exemplos', 'Só instrução. O modelo generaliza a partir do pré-treino.', 'Tarefas simples, modelos grandes', '#fb923c'],
              ['One-shot', '1 exemplo', 'Instrução + 1 exemplo rotulado. Reduz ambiguidade da tarefa.', 'Quando o formato é não-óbvio', '#f97316'],
              ['Few-shot', '2+ exemplos', 'Melhor desempenho, especialmente em tarefas novas.', 'Tarefas específicas, modelos menores', '#f97316'],
            ].map(([title, shots, desc, when, color]) => (
              <div key={title} style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: `1px solid ${color}30` }}>
                <div style={{ fontWeight: 700, color, marginBottom: '0.25rem' }}>{title}</div>
                <div style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{shots}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{desc}</p>
                <div style={{ fontSize: '0.78rem', color, fontWeight: 600 }}> {when}</div>
              </div>
            ))}
          </div>

          <h3 style={S.h3}>Os 6 Componentes de um Prompt Avançado</h3>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', border: '1px solid var(--card-border)', fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: 2.2 }}>
            {[
              ['Persona', '"You are an expert in large language models."', '#fb923c'],
              ['Instrução', '"Summarize the key findings of the paper."', 'var(--accent-color)'],
              ['Contexto', '"The summary should help researchers quickly understand..."', '#fb923c'],
              ['Formato', '"Create a bullet-point summary followed by a paragraph."', '#f97316'],
              ['Audiência', '"For busy researchers who need to grasp LLM trends."', '#f97316'],
              ['Tom', '"The tone should be professional and clear."', '#f97316'],
            ].map(([comp, val, color]) => (
              <div key={comp} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '0.75rem', padding: '0.1rem 0' }}>
                <span style={{ color, fontWeight: 700 }}>{comp}:</span>
                <span style={{ color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{val}</span>
              </div>
            ))}
          </div>

          <h3 style={S.h3}>System Prompt</h3>
          <p style={S.p}>Um conjunto de instruções ocultas enviadas ao modelo antes de qualquer interacção. Define persona, tom e limites para toda a sessão. O mesmo modelo + mesma pergunta → comportamentos completamente distintos:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              ['System: "You are a patient teacher."', 'User: What is machine learning?\n\nAI: Machine learning is a way for computers to learn from data, like teaching a dog...', 'var(--accent-color)'],
              ['System: "You are a strict reviewer."', 'User: What is machine learning?\n\nAI: ML is a subset of AI. Your question is too broad. Do you want types or math?', '#f97316'],
            ].map(([sys, conv, color]) => (
              <div key={sys} style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '0.9rem', border: `1px solid ${color}30` }}>
                <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', color, fontWeight: 600, marginBottom: '0.5rem' }}>{sys}</div>
                <div style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: 'var(--text-secondary)', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{conv}</div>
              </div>
            ))}
          </div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 4 === */}
        <div style={S.section}>
          <h2 style={S.h2}>4. Context Window e Memória</h2>
          <p style={S.p}>Os LLMs são <strong>stateless</strong>: sem intervenção externa, esquecem tudo entre chamadas. O context window define o máximo de tokens que o modelo processa em simultâneo.</p>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Modelo</th><th style={S.th}>Ano</th><th style={S.th}>Context Window</th></tr></thead>
              <tbody>
                {[['GPT-3', '2020', '4.096 tokens'], ['GPT-4', '2023', '8k / 32k tokens'], ['Claude 3', '2024', '200k tokens'], ['Gemini 2.5', '2025', '1M tokens']].map(([m, y, c]) => (
                  <tr key={m}><td style={S.td}><strong>{m}</strong></td><td style={S.td}>{y}</td><td style={{ ...S.td, fontFamily: 'monospace', color: 'var(--accent-color)', fontWeight: 600 }}>{c}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Estratégias de Memória</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={S.highlight}>
              <strong>Conversation Buffer Memory</strong>
              <p style={{ fontSize: '0.88rem', margin: '0.4rem 0 0', color: 'var(--text-secondary)' }}>O histórico completo é concatenado ao prompt em cada chamada. Simples mas cresce indefinidamente — eventualmente excede o context window.</p>
            </div>
            <div style={{ ...S.highlight, borderColor: '#f97316', background: 'rgba(249,115,22,0.10)' }}>
              <strong style={{ color: '#f97316' }}>Conversation Summary Memory</strong>
              <p style={{ fontSize: '0.88rem', margin: '0.4rem 0 0', color: 'var(--text-secondary)' }}>Um LLM auxiliar resume o histórico. O prompt recebe apenas o resumo comprimido + nova mensagem. Escala para conversas longas.</p>
            </div>
          </div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 5 === */}
        <div style={S.section}>
          <h2 style={S.h2}>5. RAG — Retrieval-Augmented Generation</h2>
          <p style={S.p}>Os LLMs não sabem o que aconteceu depois do seu treino, nem têm acesso a dados privados. RAG resolve isto: em vez de retreinar o modelo, augmenta o prompt com informação relevante recuperada em tempo real.</p>

          <RAGDiagram />

          <h3 style={S.h3}>Indexação: Chunking e Embeddings</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Estratégia</th><th style={S.th}>Unidade</th><th style={S.th}>Vantagem / Desvantagem</th></tr></thead>
              <tbody>
                {[
                  ['Sentence chunks', 'Frase', 'Granular; pode perder contexto inter-frases'],
                  ['Paragraph chunks', 'Parágrafo', 'Bom equilíbrio; tamanhos variáveis'],
                  ['Overlapping window', 'Janela com sobreposição', 'Preserva contexto de fronteiras; mais redundância'],
                ].map(([s, u, d]) => (
                  <tr key={s}><td style={S.td}><strong>{s}</strong></td><td style={S.td}>{u}</td><td style={S.td}>{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Busca Semântica: Dense, Keyword e Hybrid</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              ['Dense Search', 'Embeddings', 'Semântica, lenta', 'var(--accent-color)'],
              ['Keyword Search', 'TF-IDF / BM25', 'Exacta, rápida, sem semântica', '#f97316'],
              ['Hybrid Search ', 'Combinação', 'Melhor dos dois mundos', '#f97316'],
            ].map(([title, method, desc, color]) => (
              <div key={title} style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '0.9rem', border: `1px solid ${color}30` }}>
                <div style={{ fontWeight: 700, color, marginBottom: '0.3rem', fontSize: '0.9rem' }}>{title}</div>
                <div style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>{method}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={S.math}>
            <BlockMath math={`\\text{score}_{hybrid} = \\alpha \\cdot \\text{score}_{dense} + (1-\\alpha) \\cdot \\text{score}_{keyword}`} />
          </div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 6 === */}
        <div style={S.section}>
          <h2 style={S.h2}>6. Agentic AI</h2>
          <p style={S.p}>Um LLM standalone apenas prevê o próximo token. Os AI Agents envolvem o LLM com memória, ferramentas e capacidade de planeamento — tornando-o capaz de agir autonomamente.</p>

          <div style={S.note}> Aritmética complexa, acesso à internet, execução de código — um LLM não consegue fazer nada disto directamente. Exemplo: 8×9×2×3/1.34 pedido a um LLM pode devolver 320, 319, 311 — todos errados. O modelo escolhe o token mais plausível, não o resultado correcto.</div>

          <AgentDiagram />

          <h3 style={S.h3}>Tool Calling — Como Funciona</h3>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: 2 }}>
            {[
              ['1. LLM gera a chamada:', 'get_weather(city="Amsterdam")', 'var(--accent-color)'],
              ['2. Runtime executa:', '{"temperature_c": 14, "condition": "Cloudy"}', '#f97316'],
              ['3. LLM retoma a geração:', '"It\'s currently 14°C and cloudy."', '#f97316'],
            ].map(([step, val, color]) => (
              <div key={step} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '0.75rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>{step}</span>
                <span style={{ color }}>{val}</span>
              </div>
            ))}
          </div>

          <ReactCycle />

          <h3 style={S.h3}>Reasoning LLMs</h3>
          <p style={S.p}>Modelos como o1, DeepSeek-R1 e Gemini Flash Thinking adicionam uma camada extra: antes de responder, o modelo explora internamente múltiplas cadeias de raciocínio (chain-of-thought), selecciona a melhor e só então gera a resposta final. Isto é <strong>test-time computation</strong>:</p>
          <div style={S.math}>
            <BlockMath math={`\\text{Questão} \\longrightarrow \\underbrace{t_1 \\to t_2 \\to \\cdots \\to t_n}_{\\text{thought process (interno)}} \\longrightarrow \\text{Resposta}`} />
          </div>

          <h3 style={S.h3}>Multi-Agent Systems (MAS)</h3>
          <p style={S.p}>Quando uma tarefa é demasiado complexa para um único agente, usa-se um sistema multi-agente. Um agente Supervisor recebe a tarefa e delega subtarefas a agentes especializados:</p>
          <div style={S.diagram}>
            <svg viewBox="0 0 500 160" style={{ maxWidth: '100%', height: 'auto' }}>
              <defs>
                <marker id="arre" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
                </marker>
              </defs>
              {/* Supervisor */}
              <rect x="175" y="10" width="150" height="40" rx="8" fill="var(--accent-color)" opacity="0.7" />
              <text x="250" y="34" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Supervisor Agent</text>
              {/* Sub-agents */}
              {[['Coding\nPython', 60, '#fb923c'], ['Search\nGoogle', 250, '#f97316'], ['Slack\nMessage', 440, '#f97316']].map(([label, cx, color]) => (
                <g key={label}>
                  <line x1="250" y1="50" x2={cx} y2="98" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arre)" />
                  <rect x={cx - 52} y="100" width="104" height="40" rx="8" fill={color} opacity="0.12" stroke={color} strokeWidth="1.2" />
                  {label.split('\n').map((l, li) => (
                    <text key={li} x={cx} y={115 + li * 14} textAnchor="middle" fill={color} fontSize="10" fontWeight="600">{l}</text>
                  ))}
                </g>
              ))}
            </svg>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Frameworks populares: CrewAI e AutoGen (ambos usam o modelo Supervisor).</p>
          </div>
        </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>7. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Evolução dos Modelos Generativos</strong> — de GPT-1 (117M) a GPT-4 e Llama3, os LLMs cresceram em parâmetros, dados e RLHF; o scaling law de Chinchilla mostrou que dados e parâmetros devem co-escalar para máxima eficiência.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Configuração do Modelo: Temperature, top_p, top_k</strong> — temperature controla a aleatoriedade da distribuição de saída; top_p (nucleus sampling) e top_k limitam o vocabulário a considerar — juntos determinam o equilíbrio entre criatividade e coerência do texto gerado.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Prompt Engineering</strong> — a arte de construir prompts que guiam o LLM para a resposta desejada; técnicas como few-shot, chain-of-thought e role prompting melhoram dramaticamente a qualidade sem alterar os pesos do modelo.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Context Window e Memória</strong> — os LLMs só "lembram" o que está na janela de contexto (4K a 1M tokens); para conversas longas ou documentos extensos, são necessárias estratégias de compressão, RAG ou memória externa.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>RAG — Retrieval-Augmented Generation</strong> — combina recuperação de documentos relevantes (via vector search) com geração por LLM, reduzindo alucinações e permitindo conhecimento actualizado sem re-treinar o modelo — padrão dominante em produção.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Agentic AI</strong> — LLMs que chamam ferramentas (APIs, código, pesquisa) e executam planos multi-passo de forma autónoma; frameworks como LangChain e AutoGen implementam loops agente–acção–observação–reflexão.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
