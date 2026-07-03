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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: '3px solid #f97316', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const TransferDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Transfer Learning — Do que se transfere</p>
    <svg viewBox="0 0 520 130" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr8" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316"/></marker>
      </defs>
      {/* Source model */}
      <text x="100" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5" fontWeight="700">Modelo pré-treinado (ImageNet)</text>
      {[
        { x: 5, w: 45, label: 'Conv\nBlocks', color: '#f97316', frozen: false },
        { x: 55, w: 45, label: 'Conv\nBlocks', color: '#f97316', frozen: false },
        { x: 105, w: 45, label: 'Conv\nBlocks', color: '#f97316', frozen: false },
        { x: 155, w: 35, label: 'GAP', color: '#f97316', frozen: false },
        { x: 195, w: 35, label: 'FC\n1000', color: '#f97316', frozen: false },
      ].map(({ x, w, label, color }, i) => (
        <g key={i}>
          <rect x={x} y={22} width={w-3} height={45} rx="5" fill={`${color}20`} stroke={color} strokeWidth="1.5"/>
          <text x={x+(w-3)/2} y={44} textAnchor="middle" fill={color} fontSize="7" fontWeight="700">{label.split('\n')[0]}</text>
          {label.includes('\n') && <text x={x+(w-3)/2} y={56} textAnchor="middle" fill={color} fontSize="7">{label.split('\n')[1]}</text>}
        </g>
      ))}
      <text x="110" y="80" fill="var(--text-secondary)" fontSize="7">edges → texturas → partes → objectos</text>
      <text x="205" y="94" fill="var(--text-secondary)" fontSize="7">1000 classes</text>

      {/* Arrow down */}
      <line x1="260" y1="50" x2="290" y2="50" stroke="#f97316" strokeWidth="2" markerEnd="url(#arr8)"/>
      <text x="275" y="43" textAnchor="middle" fill="#f97316" fontSize="7.5" fontWeight="700">transferir</text>

      {/* Target model */}
      <text x="420" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5" fontWeight="700">Modelo fine-tuned (nova tarefa)</text>
      {[
        { x: 298, w: 45, label: 'Conv\nBlocks', color: '#f97316', frozen: true },
        { x: 348, w: 45, label: 'Conv\nBlocks', color: '#f97316', frozen: true },
        { x: 398, w: 45, label: 'Conv\nBlocks', color: '#f97316', frozen: false },
        { x: 448, w: 35, label: 'GAP', color: '#f97316', frozen: false },
        { x: 488, w: 28, label: 'FC\nN', color: '#f97316', frozen: false, head: true },
      ].map(({ x, w, label, color, frozen, head }, i) => (
        <g key={i}>
          <rect x={x} y={22} width={w-3} height={45} rx="5"
            fill={head ? color : frozen ? `${color}08` : `${color}20`}
            stroke={color} strokeWidth={frozen ? 1 : 2}
            strokeDasharray={frozen ? '4,2' : undefined}/>
          <text x={x+(w-3)/2} y={44} textAnchor="middle" fill={head ? 'white' : frozen ? 'var(--text-secondary)' : color} fontSize="7" fontWeight="700">{label.split('\n')[0]}</text>
          {label.includes('\n') && <text x={x+(w-3)/2} y={56} textAnchor="middle" fill={head ? 'white' : frozen ? 'var(--text-secondary)' : color} fontSize="7">{label.split('\n')[1]}</text>}
          {frozen && <text x={x+(w-3)/2} y={73} textAnchor="middle" fill="var(--text-secondary)" fontSize="6"> frozen</text>}
        </g>
      ))}
      <text x="502" y="94" fill="#f97316" fontSize="7">N classes</text>

      {/* Legend */}
      <rect x="298" y="105" width="10" height="10" rx="2" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" strokeDasharray="4,2"/>
      <text x="312" y="113" fill="var(--text-secondary)" fontSize="7">Frozen (não actualiza)</text>
      <rect x="390" y="105" width="10" height="10" rx="2" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2"/>
      <text x="404" y="113" fill="var(--text-secondary)" fontSize="7">Fine-tuned</text>
      <rect x="460" y="105" width="10" height="10" rx="2" fill="#f97316" stroke="#f97316" strokeWidth="2"/>
      <text x="474" y="113" fill="var(--text-secondary)" fontSize="7">Novo head</text>
    </svg>
  </div>
);

const SSLDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Contrastive Learning vs. Self-Distillation</p>
    <svg viewBox="0 0 560 192" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrssl" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)"/></marker>
        <marker id="arrsslO" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316"/></marker>
      </defs>

      {/* Titles */}
      <text x="135" y="12" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Contrastive (SimCLR / MoCo)</text>
      <text x="422" y="12" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Self-Distillation (DINO)</text>

      {/* All diagram content shifted down by 12px */}
      <g transform="translate(0,12)">
        <rect x="10" y="24" width="40" height="28" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2"/>
        <text x="30" y="42" textAnchor="middle" fill="#f97316" fontSize="7.5">imagem</text>

        <line x1="50" y1="32" x2="76" y2="42" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arrssl)"/>
        <line x1="50" y1="40" x2="76" y2="62" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arrssl)"/>
        <text x="55" y="28" fill="var(--text-secondary)" fontSize="6.5">aug A</text>
        <text x="55" y="76" fill="var(--text-secondary)" fontSize="6.5">aug B</text>

        <rect x="78" y="30" width="50" height="22" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1"/>
        <text x="103" y="44" textAnchor="middle" fill="#f97316" fontSize="7">encoder f</text>
        <rect x="78" y="58" width="50" height="22" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1"/>
        <text x="103" y="72" textAnchor="middle" fill="#f97316" fontSize="7">encoder f</text>

        <line x1="128" y1="41" x2="148" y2="41" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arrssl)"/>
        <line x1="128" y1="69" x2="148" y2="69" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arrssl)"/>

        <circle cx="158" cy="41" r="9" fill="#f97316" opacity="0.7"/>
        <text x="158" y="44" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="700">z₁</text>
        <circle cx="158" cy="69" r="9" fill="#f97316" opacity="0.7"/>
        <text x="158" y="72" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="700">z₂</text>

        <line x1="158" y1="50" x2="158" y2="60" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrsslO)"/>
        <text x="176" y="57" fill="#f97316" fontSize="7" fontWeight="700">aproximar</text>

        <text x="110" y="98" fill="var(--text-secondary)" fontSize="7" textAnchor="middle">duas augmentations da mesma</text>
        <text x="110" y="109" fill="var(--text-secondary)" fontSize="7" textAnchor="middle">imagem → embeddings próximos</text>

        <text x="110" y="128" fill="#f97316" fontSize="7" fontWeight="700" textAnchor="middle">afastar de negativos (outras imagens):</text>
        {[90, 108, 126].map((x, i) => (
          <circle key={i} cx={x} cy="143" r="7" fill="#f97316" opacity="0.5"/>
        ))}

        <line x1="285" y1="-7" x2="285" y2="170" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,3"/>

        <rect x="300" y="32" width="40" height="28" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2"/>
        <text x="320" y="50" textAnchor="middle" fill="#f97316" fontSize="7.5">imagem</text>

        <line x1="340" y1="38" x2="366" y2="30" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arrssl)"/>
        <line x1="340" y1="50" x2="366" y2="72" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arrssl)"/>
        <text x="324" y="24" fill="var(--text-secondary)" fontSize="6.5">crop global</text>
        <text x="324" y="76" fill="var(--text-secondary)" fontSize="6.5">crop local</text>

        <rect x="368" y="20" width="62" height="22" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2"/>
        <text x="399" y="34" textAnchor="middle" fill="#f97316" fontSize="7" fontWeight="700">teacher (EMA)</text>
        <rect x="368" y="62" width="62" height="22" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1"/>
        <text x="399" y="76" textAnchor="middle" fill="#f97316" fontSize="7">student</text>

        <line x1="430" y1="31" x2="452" y2="31" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arrssl)"/>
        <line x1="430" y1="73" x2="452" y2="73" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arrssl)"/>
        <text x="457" y="35" fill="#f97316" fontSize="7" fontWeight="700">p_t</text>
        <text x="457" y="77" fill="#f97316" fontSize="7" fontWeight="700">p_s</text>

        <line x1="465" y1="39" x2="465" y2="65" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrsslO)"/>
        <text x="482" y="52" fill="#f97316" fontSize="7" fontWeight="700">cross-</text>
        <text x="482" y="62" fill="#f97316" fontSize="7" fontWeight="700">entropy</text>

        <text x="399" y="106" fill="var(--text-secondary)" fontSize="7" textAnchor="middle">student aprende a prever</text>
        <text x="399" y="117" fill="var(--text-secondary)" fontSize="7" textAnchor="middle">a distribuição do teacher</text>
        <text x="399" y="128" fill="var(--text-secondary)" fontSize="7" textAnchor="middle">(sem labels, sem negativos)</text>
        <text x="399" y="144" fill="var(--text-secondary)" fontSize="7" textAnchor="middle">teacher = média móvel (EMA)</text>
        <text x="399" y="155" fill="var(--text-secondary)" fontSize="7" textAnchor="middle">dos pesos do student</text>

        <text x="280" y="180" fill="var(--text-secondary)" fontSize="7.5" textAnchor="middle">Ambos não usam labels — o "supervisor" vem da própria imagem</text>
      </g>
    </svg>
  </div>
);

const PEFTDiagram = () => {
  const [mode, setMode] = useState('lora');
  return (
    <div style={{ ...S.diagram, textAlign: 'center' }}>
      <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>PEFT — Backbone congelado + módulos pequenos treináveis</p>
      <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {[['lora', 'LoRA', '#f97316'], ['adapter', 'Adapters', '#f97316'], ['prompt', 'Visual Prompt Tuning', '#f97316']].map(([k, l, c]) => (
          <button key={k} onClick={() => setMode(k)} style={{ padding: '0.3rem 0.7rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.75rem', background: mode === k ? c : 'var(--bg-primary)', color: mode === k ? '#fff' : 'var(--text-primary)', border: `1.5px solid ${mode === k ? c : 'var(--card-border)'}` }}>{l}</button>
        ))}
      </div>
      <svg viewBox="0 0 520 170" style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="arrpeft" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)"/></marker>
        </defs>
        {/* Frozen ViT blocks */}
        <text x="220" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">ViT pré-treinado — backbone  frozen</text>
        {[60, 160, 260, 360].map((x, i) => (
          <g key={i}>
            <rect x={x} y="24" width="80" height="40" rx="6" fill="rgba(120,120,120,0.08)" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="4,2"/>
            <text x={x+40} y="48" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Transformer Block {i+1}</text>
          </g>
        ))}
        <line x1="20" y1="44" x2="55" y2="44" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrpeft)"/>
        <text x="20" y="38" fill="var(--text-secondary)" fontSize="7">patches</text>
        <line x1="445" y1="44" x2="477" y2="44" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrpeft)"/>
        <rect x="478" y="24" width="36" height="40" rx="6" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
        <text x="496" y="41" textAnchor="middle" fill="white" fontSize="7" fontWeight="700">novo</text>
        <text x="496" y="52" textAnchor="middle" fill="white" fontSize="7" fontWeight="700">head</text>

        {mode === 'lora' && (
          <>
            {[60, 160, 260, 360].map((x, i) => (
              <g key={i}>
                <rect x={x+12} y="90" width="56" height="26" rx="5" fill="rgba(249,115,22,0.18)" stroke="#f97316" strokeWidth="1.5"/>
                <text x={x+40} y="106" textAnchor="middle" fill="#f97316" fontSize="7.5" fontWeight="700">LoRA A·B</text>
                <line x1={x+40} y1="64" x2={x+40} y2="70" stroke="#f97316" strokeWidth="1.2" strokeDasharray="2,2"/>
                <line x1={x+40} y1="90" x2={x+40} y2="64" stroke="#f97316" strokeWidth="1" strokeDasharray="2,2" markerEnd="url(#arrpeft)"/>
              </g>
            ))}
            <text x="260" y="130" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">LoRA decompõe ΔW = B·A (rank r baixo) e soma-se aos pesos Q/K/V/projecções congelados</text>
            <text x="260" y="146" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">apenas A e B são treinados — tipicamente &lt;1% dos parâmetros totais</text>
          </>
        )}
        {mode === 'adapter' && (
          <>
            {[60, 160, 260, 360].map((x, i) => (
              <g key={i}>
                <rect x={x+18} y="76" width="44" height="26" rx="13" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
                <text x={x+40} y="93" textAnchor="middle" fill="#f97316" fontSize="7.5" fontWeight="700">Adapter</text>
                <line x1={x+40} y1="64" x2={x+40} y2="76" stroke="#f97316" strokeWidth="1.2"/>
                <line x1={x+40} y1="102" x2={x+40} y2="115" stroke="#f97316" strokeWidth="1.2" markerEnd="url(#arrpeft)"/>
              </g>
            ))}
            <text x="260" y="135" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Pequenos MLPs "bottleneck" (down-project → não-linearidade → up-project)</text>
            <text x="260" y="150" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">inseridos em série após cada bloco. Apenas estes módulos são treinados.</text>
          </>
        )}
        {mode === 'prompt' && (
          <>
            <rect x="20" y="76" width="120" height="26" rx="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="80" y="93" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">[P₁ P₂ ... Pₖ] tokens aprendíveis</text>
            <line x1="80" y1="76" x2="80" y2="64" stroke="#f97316" strokeWidth="1.2" markerEnd="url(#arrpeft)"/>
            <text x="260" y="135" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Adiciona-se um pequeno conjunto de "prompt tokens" treináveis à sequência de patches de entrada</text>
            <text x="260" y="150" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">(ou a cada camada, em VPT-Deep). O backbone permanece 100% congelado.</text>
          </>
        )}
      </svg>
    </div>
  );
};

const ProtoNetDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Prototypical Networks — classificar por distância a protótipos</p>
    <svg viewBox="0 0 420 200" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* embedding space */}
      <rect x="10" y="10" width="400" height="180" rx="10" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1"/>
      <text x="210" y="26" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">Espaço de embeddings (extraído pelo backbone)</text>

      {/* class A support points */}
      {[[70,70],[95,55],[60,100]].map(([x,y],i) => (
        <circle key={'a'+i} cx={x} cy={y} r="5" fill="#f97316" opacity="0.7"/>
      ))}
      <circle cx="75" cy="75" r="11" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="3,2"/>
      <text x="75" y="78" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">c_A</text>
      <text x="75" y="118" textAnchor="middle" fill="#f97316" fontSize="7.5">protótipo A = média dos 3 support</text>

      {/* class B support points */}
      {[[300,140],[330,160],[290,170]].map(([x,y],i) => (
        <circle key={'b'+i} cx={x} cy={y} r="5" fill="#f97316" opacity="0.7"/>
      ))}
      <circle cx="307" cy="157" r="11" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="3,2"/>
      <text x="307" y="160" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">c_B</text>
      <text x="307" y="183" textAnchor="middle" fill="#f97316" fontSize="7.5">protótipo B = média dos 3 support</text>

      {/* class C support points */}
      {[[330,40],[360,55],[345,75]].map(([x,y],i) => (
        <circle key={'c'+i} cx={x} cy={y} r="5" fill="#f97316" opacity="0.7"/>
      ))}
      <circle cx="345" cy="57" r="11" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="3,2"/>
      <text x="345" y="60" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">c_C</text>

      {/* query point */}
      <rect x="160" y="105" width="11" height="11" fill="#f97316" opacity="0.85" transform="rotate(45 165 110)"/>
      <text x="165" y="135" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">query (não rotulado)</text>
      <line x1="166" y1="111" x2="80" y2="78" stroke="#f97316" strokeWidth="1.2" strokeDasharray="3,2"/>
      <line x1="166" y1="111" x2="302" y2="153" stroke="#f97316" strokeWidth="1.2" strokeDasharray="3,2" opacity="0.5"/>
      <line x1="166" y1="111" x2="345" y2="60" stroke="#f97316" strokeWidth="1.2" strokeDasharray="3,2" opacity="0.5"/>
      <text x="120" y="92" fill="#f97316" fontSize="8" fontWeight="700">d mínima → classifica A</text>
    </svg>
  </div>
);

export default function CV8() {
  const [strategy, setStrategy] = useState(0);
  const strategies = [
    {
      name: 'Feature Extraction', color: '#f97316',
      when: 'Dataset pequeno (<1000 imagens), domínio semelhante ao de pré-treino (fotografias naturais).',
      what: 'Congelar todo o backbone. Apenas treinar uma nova camada FC no topo. O backbone actua como extractor de features fixo.',
      lr: 'Apenas para o novo head: 1e-3 a 1e-2.',
      risk: 'Baixo — poucos parâmetros a treinar, impossível fazer overfitting ao backbone.',
      note: 'Pode-se usar os features do backbone directamente com SVM ou regressão logística sem qualquer fine-tuning.',
    },
    {
      name: 'Fine-tuning Parcial', color: '#f97316',
      when: 'Dataset médio (1K-50K imagens), domínio semelhante ou ligeiramente diferente.',
      what: 'Congelar as primeiras camadas (features genéricas: edges, texturas). Fine-tune das últimas camadas conv + novo head. As camadas iniciais já aprenderam features universais que provavelmente são úteis.',
      lr: 'Backbone descongelado: 1e-5 a 1e-4. Novo head: 1e-3.',
      risk: 'Moderado — cuidado com catastrofic forgetting se LR for demasiado alta.',
      note: 'Regra geral: as primeiras camadas aprendem features genéricas (universais), as últimas aprendem features específicas do domínio de pré-treino.',
    },
    {
      name: 'Fine-tuning Total', color: '#f97316',
      when: 'Dataset grande (50K+ imagens) ou domínio muito diferente do de pré-treino (ex: imagens médicas vs. fotografias).',
      what: 'Descongelar todo o backbone e treinar end-to-end com LR muito baixa. O pré-treino apenas fornece uma boa inicialização de pesos.',
      lr: 'Backbone: 1e-5. Head: 1e-4. Ou usar LR discriminativa (LR menor nas primeiras camadas).',
      risk: 'Catastrofic forgetting se LR for alta. Overfitting se dataset for pequeno.',
      note: 'Learning rate scheduling com warmup é essencial. Iniciar com feature extraction por algumas épocas antes de descongelar tudo é uma boa prática.',
    },
    {
      name: 'Domain Adaptation', color: '#f97316',
      when: 'Distribuição dos dados de destino muito diferente da fonte (ex: estilo artístico, radiografias, satélite).',
      what: 'Técnicas especializadas: adversarial domain adaptation (treinar para que features sejam indistinguíveis entre domínios), CORAL (alinhar estatísticas de segunda ordem), ou pré-treino domain-specific antes do fine-tuning.',
      lr: 'Depende da abordagem.',
      risk: 'Complexo. Requer cuidado no design do pipeline.',
      note: 'Para imagens médicas: modelos pré-treinados em ImageNet transferem surpreendentemente bem mesmo com diferença de domínio grande. As features de baixo nível (edges, texturas) são universais.',
    },
  ];
  const s = strategies[strategy];

  const [peftStrat, setPeftStrat] = useState(0);
  const peftStrategies = [
    {
      name: 'LoRA (Low-Rank Adaptation)', color: '#f97316',
      idea: 'Em vez de actualizar a matriz de pesos W de cada projecção (Q, K, V, ou MLP), congela-se W e aprende-se uma actualização de baixa-rank ΔW = B·A, onde B e A são matrizes finas (rank r, tipicamente 4-16). O output passa a ser W·x + B·A·x.',
      params: 'Tipicamente 0.1% a 1% dos parâmetros totais do modelo.',
      pros: 'Treino rápido, pouca memória (não há gradientes para W), múltiplos "LoRAs" podem ser trocados ao mesmo backbone para diferentes tarefas, e podem ser fundidos com W no final sem custo extra na inferência.',
    },
    {
      name: 'Adapters', color: '#f97316',
      idea: 'Inserem-se pequenos módulos MLP "bottleneck" (down-projection → não-linearidade → up-projection) em série dentro de cada bloco transformer. Apenas estes adapters são treinados; o resto fica congelado.',
      params: 'Tipicamente 1-5% dos parâmetros totais.',
      pros: 'Modular — diferentes adapters por tarefa. Ligeira sobrecarga na latência de inferência (camadas extra em série, ao contrário de LoRA que pode ser fundido).',
    },
    {
      name: 'Visual Prompt Tuning (VPT)', color: '#f97316',
      idea: 'Adicionam-se alguns "prompt tokens" aprendíveis à sequência de patch embeddings de entrada do ViT (VPT-Shallow: só na primeira camada; VPT-Deep: em todas as camadas). O backbone fica 100% congelado — só os prompts e o head são treinados.',
      params: 'Tipicamente <1% dos parâmetros totais (apenas alguns milhares de valores).',
      pros: 'Extremamente leve, sem alterar a arquitectura interna. Funciona surpreendentemente bem em ViTs grandes pré-treinados em datasets massivos.',
    },
  ];
  const p = peftStrategies[peftStrat];

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cv" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>MÓDULO 8</div>
        <h1 style={S.h1}>Transfer Learning & Fine-tuning</h1>
        <p style={S.lead}>Treinar uma CNN ou ViT do zero em datasets pequenos quase nunca funciona bem — há poucos dados para aprender milhões (ou biliões) de parâmetros. Transfer learning reutiliza representações aprendidas em datasets grandes (ImageNet, LAION, vídeos não rotulados) para novas tarefas, reduzindo drasticamente o número de exemplos e o custo computacional necessários.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. O que se Transfere e Porquê Funciona</h2>
          <p style={S.p}>Uma CNN pré-treinada em ImageNet aprendeu uma hierarquia de features: as primeiras camadas detectam edges e cores (universalmente úteis), as camadas intermédias detectam texturas e padrões (úteis na maioria dos domínios), e as últimas camadas detectam partes de objectos e conceitos específicos de ImageNet (menos transferíveis para domínios diferentes).</p>
          <p style={S.p}>Esta hierarquia é a razão pela qual o transfer learning funciona tão bem: mesmo que a tarefa seja diferente (e.g., classificar células de cancro), as features de baixo e médio nível são universalmente úteis. Apenas as camadas superiores precisam de ser adaptadas ao novo domínio.</p>

          <TransferDiagram />

          <h3 style={S.h3}>Os Três Factores que Determinam a Estratégia</h3>
          <p style={S.p}>Antes de escolher uma estratégia de fine-tuning, há três perguntas a fazer: (1) <strong>quão grande é o dataset alvo?</strong> — datasets pequenos não suportam treinar muitos parâmetros sem overfitting; (2) <strong>quão semelhante é o domínio alvo ao domínio de pré-treino?</strong> — domínios muito diferentes (e.g., imagens médicas, satélite, microscopia) podem precisar de adaptar mais camadas, mesmo features de baixo nível; (3) <strong>qual a arquitectura e a escala do modelo?</strong> — ViTs gigantes (centenas de milhões a biliões de parâmetros) tornam o fine-tuning total caro ou impossível em hardware comum, favorecendo PEFT (secção 4).</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Cenário</th><th style={S.th}>Dataset alvo</th><th style={S.th}>Similaridade ao domínio fonte</th><th style={S.th}>Estratégia recomendada</th></tr></thead>
              <tbody>
                {[
                  ['Classificação de produtos e-commerce', 'Pequeno-médio', 'Alta (fotografias naturais)', 'Feature extraction ou fine-tuning parcial'],
                  ['Detecção de defeitos industriais', 'Pequeno', 'Média (texturas específicas)', 'Fine-tuning parcial das últimas camadas'],
                  ['Diagnóstico em imagens médicas (raio-X, MRI)', 'Médio-grande', 'Baixa (estatísticas de imagem muito diferentes)', 'Fine-tuning total com LR muito baixa, ou pré-treino domain-specific'],
                  ['Adaptar um ViT-Large/Huge a uma nova tarefa', 'Qualquer', 'Qualquer', 'PEFT (LoRA, adapters, visual prompts) — secção 4'],
                  ['Reconhecimento de espécies raras (poucos exemplos por classe)', 'Muito pequeno (&lt;10/classe)', 'Variável', 'Few-shot / zero-shot — secção 5'],
                ].map(([c, ds, sim, rec]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 600 }}>{c}</td><td style={S.td}>{ds}</td><td style={S.td}>{sim}</td><td style={{ ...S.td, color: '#f97316', fontWeight: 600, fontSize: '0.85rem' }}>{rec}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}> Regra prática histórica de Yosinski et al. (2014): features das primeiras 1-2 camadas de uma CNN são quase intercambiáveis entre tarefas muito diferentes (e.g., ImageNet → imagens médicas). A "transferibilidade" decai gradualmente à medida que se sobe na hierarquia, com uma queda mais acentuada perto das camadas finais, específicas da tarefa de origem.</div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Estratégias de Fine-tuning</h2>
          <p style={S.p}>Existem quatro abordagens principais para adaptar um modelo pré-treinado, que diferem em quantos parâmetros se actualizam, com que learning rate, e quando faz sentido usar cada uma. Explora abaixo cada estratégia:</p>
          <div style={S.diagram}>
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              {strategies.map((st, i) => (
                <button key={i} onClick={() => setStrategy(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: strategy === i ? st.color : 'var(--bg-primary)', color: strategy === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${strategy === i ? st.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{st.name}</button>
              ))}
            </div>
            <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${s.color}30` }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.85rem' }}>
                <div><strong style={{ color: '#f97316' }}>Quando usar:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.7, color: 'var(--text-primary)' }} dangerouslySetInnerHTML={{__html: s.when}}/></div>
                <div><strong style={{ color: s.color }}>O que fazer:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.7, color: 'var(--text-primary)' }}>{s.what}</p></div>
                <div><strong style={{ color: '#f97316' }}>Learning rate:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.7, color: 'var(--text-primary)' }}>{s.lr}</p></div>
                <div><strong style={{ color: '#f97316' }}>Risco principal:</strong><p style={{ marginTop: '0.3rem', lineHeight: 1.7, color: 'var(--text-primary)' }}>{s.risk}</p></div>
              </div>
              <div style={{ marginTop: '0.75rem', background: 'var(--bg-secondary)', borderRadius: 6, padding: '0.75rem', fontSize: '0.83rem', color: 'var(--text-secondary)' }}>
                 {s.note}
              </div>
            </div>
          </div>

          <h3 style={S.h3}>Learning Rate Discriminativa e Warmup</h3>
          <p style={S.p}>Quando se descongela o backbone, usar a mesma learning rate em todas as camadas é arriscado: as camadas finais (mais específicas da tarefa) precisam de actualizações maiores que as primeiras (features genéricas, já quase óptimas). A <strong>learning rate discriminativa</strong> aplica taxas crescentes da entrada para a saída — por exemplo, multiplicando a LR base por um factor 2.6 a cada grupo de camadas (técnica popularizada pela biblioteca fastai). Adicionalmente, um curto período de <strong>warmup</strong> (LR a crescer linearmente desde ~0 nos primeiros passos) evita que gradientes iniciais grandes destruam os pesos pré-treinados antes do optimizador "assentar".</p>

          <h3 style={S.h3}>Gradual Unfreezing</h3>
          <p style={S.p}>Uma técnica simples e eficaz: começar por treinar apenas o novo head com o backbone totalmente congelado durante algumas épocas; depois descongelar o último bloco e continuar o treino com LR baixa; repetir progressivamente até descongelar todo o modelo (ou parar quando a validação deixar de melhorar). Isto evita que gradientes ruidosos do head recém-inicializado se propaguem e destruam features úteis do backbone logo no início do treino.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Pré-treino Auto-Supervisionado para Visão</h2>
          <p style={S.p}>A maior parte das imagens no mundo não tem labels. O pré-treino auto-supervisionado (<em>self-supervised learning</em>, SSL) cria uma "tarefa pretexto" a partir dos próprios dados — sem anotação humana — que força o modelo a aprender representações úteis. Os dois paradigmas dominantes para visão são <strong>contrastive learning</strong> (SimCLR, MoCo) e <strong>self-distillation</strong> (DINO, DINOv2).</p>

          <SSLDiagram />

          <h3 style={S.h3}>Contrastive Learning: SimCLR e MoCo</h3>
          <p style={S.p}>A ideia central: gerar duas "vistas" (augmentations) diferentes da mesma imagem (crop aleatório, color jitter, blur, flip). Estas duas vistas devem produzir embeddings semelhantes ("par positivo"), enquanto vistas de imagens diferentes devem produzir embeddings afastados ("pares negativos"). A loss típica (InfoNCE / NT-Xent) maximiza a similaridade dos positivos relativamente a todos os negativos no batch.</p>
          <p style={S.p}><strong>SimCLR</strong> precisa de batches muito grandes (milhares de imagens) para ter negativos suficientes. <strong>MoCo</strong> resolve isto mantendo uma <em>memory queue</em> (fila) de embeddings de batches anteriores, calculados por um encoder "momentum" (uma média móvel exponencial — EMA — dos pesos do encoder principal), permitindo muitos negativos sem precisar de batches enormes.</p>

          <h3 style={S.h3}>Self-Distillation: DINO e DINOv2</h3>
          <p style={S.p}>O DINO (self-<strong>di</strong>stillation with <strong>no</strong> labels) elimina a necessidade de negativos. Há um modelo <em>student</em> e um modelo <em>teacher</em> com a mesma arquitectura; o teacher é uma EMA dos pesos do student (nunca recebe gradientes directos). O student vê crops locais (pequenos) da imagem, o teacher vê crops globais (grandes); o student é treinado para que a sua distribuição de saída (após softmax com temperatura) corresponda à do teacher — uma forma de auto-distilação.</p>
          <p style={S.p}>Um resultado notável do DINO: os attention maps do ViT treinado emergem espontaneamente como mapas de segmentação de objectos, sem qualquer supervisão de segmentação. O <strong>DINOv2</strong> escala isto para um dataset curado de 142M imagens (LVD-142M), produzindo backbones cujos features funcionam directamente (sem fine-tuning, com k-NN ou linear probing) em tarefas de classificação, segmentação, e estimação de profundidade.</p>

          <h3 style={S.h3}>Porque é que SSL Transfere Melhor para Tarefas Densas</h3>
          <p style={S.p}>Modelos supervisionados (treinados para classificação ImageNet) são optimizados para extrair a informação <em>suficiente para distinguir 1000 classes</em> — frequentemente isto significa colapsar muita informação espacial e textural irrelevante para a classe, mas que pode ser crucial para tarefas densas como segmentação semântica, detecção de objectos pequenos, ou estimação de profundidade. Modelos auto-supervisionados, ao não terem este "funil" para um conjunto fixo de classes, tendem a preservar representações mais ricas e espacialmente granulares — daí o desempenho frequentemente superior do DINOv2 como backbone congelado para tarefas densas, mesmo comparado a backbones supervisionados maiores.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Método</th><th style={S.th}>Paradigma</th><th style={S.th}>Necessita negativos?</th><th style={S.th}>Ponto forte</th></tr></thead>
              <tbody>
                {[
                  ['SimCLR', 'Contrastive', 'Sim (batch grande)', 'Conceptualmente simples, fundação do campo'],
                  ['MoCo (v2/v3)', 'Contrastive + momentum encoder', 'Sim (memory queue)', 'Não precisa de batches gigantes'],
                  ['DINO', 'Self-distillation', 'Não', 'Attention maps = segmentação emergente'],
                  ['DINOv2', 'Self-distillation, escala industrial', 'Não', 'Features densos state-of-the-art para transfer'],
                  ['MAE (Masked Autoencoder)', 'Reconstrução de patches mascarados', 'Não', 'Pré-treino muito eficiente em compute'],
                ].map(([m, par, neg, str]) => (
                  <tr key={m}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{m}</td><td style={S.td}>{par}</td><td style={S.td}>{neg}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{str}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}> Na prática, a escolha entre um backbone supervisionado (ImageNet-21K) e um auto-supervisionado (DINOv2) depende da tarefa downstream: para classificação de imagem inteira, ambos competem de perto; para tarefas densas (segmentação, profundidade, correspondência de pontos), DINOv2 tende a ganhar claramente, especialmente em regime de "frozen backbone + linear/decoder leve".</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Parameter-Efficient Fine-Tuning (PEFT) para Visão</h2>
          <p style={S.p}>Modelos como ViT-Huge, CLIP ou DINOv2-giant têm centenas de milhões a biliões de parâmetros. Fazer fine-tuning total exige guardar gradientes e estados do optimizador para todos esses parâmetros — caro em memória GPU, lento, e com alto risco de overfitting/catastrophic forgetting em datasets pequenos. As técnicas <strong>PEFT</strong> congelam quase todo o modelo e introduzem um pequeno número de parâmetros novos, treináveis, que adaptam o comportamento do modelo à nova tarefa.</p>

          <PEFTDiagram />

          <h3 style={S.h3}>Três Famílias de PEFT</h3>
          <div style={S.diagram}>
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              {peftStrategies.map((st, i) => (
                <button key={i} onClick={() => setPeftStrat(i)} style={{ padding: '0.35rem 0.75rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: peftStrat === i ? st.color : 'var(--bg-primary)', color: peftStrat === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${peftStrat === i ? st.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{st.name}</button>
              ))}
            </div>
            <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${p.color}30` }}>
              <p style={{ marginBottom: '0.6rem', lineHeight: 1.7, color: 'var(--text-primary)', fontSize: '0.9rem' }}><strong style={{ color: p.color }}>Ideia:</strong> {p.idea}</p>
              <p style={{ marginBottom: '0.6rem', lineHeight: 1.7, color: 'var(--text-primary)', fontSize: '0.9rem' }}><strong style={{ color: '#f97316' }}>Parâmetros treináveis:</strong> {p.params}</p>
              <div style={{ background: 'var(--bg-secondary)', borderRadius: 6, padding: '0.75rem', fontSize: '0.83rem', color: 'var(--text-secondary)' }}> {p.pros}</div>
            </div>
          </div>

          <h3 style={S.h3}>Porque é que PEFT Funciona Tão Bem</h3>
          <p style={S.p}>A hipótese subjacente a estas técnicas é que a "diferença" entre o que um modelo grande pré-treinado já sabe e o que precisa de saber para uma nova tarefa específica vive num subespaço de muito baixa dimensão (<em>low intrinsic dimensionality</em>). Por isso, não é preciso re-treinar biliões de parâmetros — basta aprender uma pequena correcção direccionada. Isto explica porque LoRA com rank r=4 ou r=8 já consegue, em muitos casos, igualar o desempenho do fine-tuning total.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Técnica</th><th style={S.th}>% Parâmetros treináveis</th><th style={S.th}>Overhead na inferência</th><th style={S.th}>Multi-tarefa (trocar adaptação)</th></tr></thead>
              <tbody>
                {[
                  ['Fine-tuning total', '100%', 'Nenhum', 'Não — precisa de cópia completa por tarefa'],
                  ['LoRA', '0.1% – 1%', 'Nenhum (pode fundir-se com W)', 'Sim — trocar A,B é leve'],
                  ['Adapters', '1% – 5%', 'Pequeno (camadas extra em série)', 'Sim'],
                  ['Visual Prompt Tuning', '&lt;1%', 'Mínimo (mais alguns tokens na sequência)', 'Sim — trocar prompts é trivial'],
                  ['Linear probing (só head)', '&lt;0.1%', 'Nenhum', 'Sim, mas menor capacidade de adaptação'],
                ].map(([t, pct, ov, multi]) => (
                  <tr key={t}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{t}</td><td style={S.td}>{pct}</td><td style={S.td}>{ov}</td><td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{multi}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}> PEFT não é apenas sobre poupar memória — também é uma forma de regularização implícita. Ao restringir drasticamente o número de graus de liberdade, reduz-se o risco de overfitting em datasets pequenos e preserva-se o conhecimento geral do modelo pré-treinado, mitigando catastrophic forgetting (secção 6).</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Few-Shot e Zero-Shot Learning</h2>
          <p style={S.p}>E se não houver dados suficientes para fazer fine-tuning de todo? Quando se têm apenas alguns exemplos por classe (<em>few-shot</em>) ou nenhum exemplo rotulado (<em>zero-shot</em>), recorre-se a abordagens baseadas em similaridade no espaço de embeddings em vez de actualizar pesos do modelo.</p>

          <h3 style={S.h3}>Prototypical Networks (Few-Shot)</h3>
          <p style={S.p}>A ideia: um backbone (pré-treinado, frequentemente congelado) extrai embeddings de um pequeno conjunto de "support examples" rotulados por classe. Calcula-se o <strong>protótipo</strong> de cada classe como a média dos embeddings dos seus exemplos de suporte. Para classificar uma nova imagem ("query"), extrai-se o seu embedding e atribui-se à classe cujo protótipo está mais próximo (distância Euclidiana ou cosseno).</p>

          <ProtoNetDiagram />

          <p style={S.p}>Esta abordagem é "N-way K-shot": N classes, K exemplos por classe no conjunto de suporte. Não há gradientes calculados na hora de classificar — toda a "aprendizagem" reduz-se a calcular médias e distâncias. Frequentemente, o backbone foi treinado especificamente com um objectivo <em>meta-learning</em> (treinado em muitas tarefas de N-way K-shot simuladas), o que o torna particularmente bom a produzir embeddings onde esta heurística de distância funciona bem.</p>

          <h3 style={S.h3}>CLIP — Zero-Shot via Similaridade Texto-Imagem</h3>
          <p style={S.p}>O CLIP (Contrastive Language-Image Pre-training) foi treinado em ~400M pares (imagem, legenda) da web, aprendendo um espaço de embeddings partilhado onde imagens e textos semanticamente relacionados ficam próximos. Para classificação zero-shot: constrói-se um prompt de texto para cada classe candidata (e.g., "a photo of a {`{classe}`}"), calcula-se o embedding de texto de cada um, calcula-se o embedding da imagem, e escolhe-se a classe cujo embedding de texto tem maior similaridade cosseno com o embedding da imagem — sem qualquer treino adicional.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Abordagem</th><th style={S.th}>Dados necessários</th><th style={S.th}>Requer treino/fine-tuning?</th><th style={S.th}>Quando usar</th></tr></thead>
              <tbody>
                {[
                  ['Prototypical Networks', 'Poucos exemplos rotulados por classe (K-shot)', 'Não (backbone pré-treinado/meta-treinado)', 'Classes raras com 1-20 exemplos disponíveis'],
                  ['CLIP zero-shot', 'Zero exemplos — só nomes/descrições das classes', 'Não', 'Prototipagem rápida, classes abertas/dinâmicas'],
                  ['CLIP linear probe', 'Algumas centenas a milhares de exemplos', 'Sim, mas só um classificador linear sobre features CLIP congelados', 'Quando há algum dado e se quer mais precisão que zero-shot'],
                  ['Fine-tuning / PEFT', 'Centenas a milhares+ de exemplos', 'Sim', 'Quando há dados suficientes e a tarefa é específica/recorrente'],
                ].map(([ab, dados, treino, quando]) => (
                  <tr key={ab}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{ab}</td><td style={S.td}>{dados}</td><td style={S.td}>{treino}</td><td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{quando}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}> Uma estratégia híbrida muito comum na prática: usar CLIP zero-shot como baseline imediato, recolher dados rotulados ao longo do tempo enquanto o sistema está em produção, e migrar gradualmente para linear probing → PEFT → fine-tuning total à medida que o dataset cresce.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>6. Catastrophic Forgetting e Continual Learning</h2>
          <p style={S.p}>Ao fazer fine-tuning de um modelo numa nova tarefa, os pesos ajustam-se para minimizar a loss da nova tarefa — mas isso pode destruir representações que eram importantes para o conhecimento original (ou para tarefas anteriores). Este fenómeno chama-se <strong>catastrophic forgetting</strong>: o desempenho na tarefa/distribuição original degrada-se drasticamente, por vezes de forma abrupta.</p>

          <p style={S.p}>Isto é especialmente relevante em dois cenários: (1) <strong>fine-tuning agressivo</strong> (LR alta, fine-tuning total) num dataset pequeno e muito diferente do pré-treino, que pode "apagar" capacidades gerais úteis do modelo base; e (2) <strong>continual / lifelong learning</strong>, onde um modelo precisa de aprender uma sequência de tarefas novas ao longo do tempo (e.g., adicionar novas classes a um classificador em produção) sem ter acesso aos dados das tarefas anteriores e sem esquecer o que já sabia.</p>

          <h3 style={S.h3}>Estratégias de Mitigação</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Estratégia</th><th style={S.th}>Como funciona</th><th style={S.th}>Limitação principal</th></tr></thead>
              <tbody>
                {[
                  ['Replay / rehearsal', 'Manter (ou gerar) uma pequena amostra de exemplos das tarefas/dados antigos e intercalá-los durante o treino na nova tarefa, para "relembrar" o modelo.', 'Requer guardar (ou gerar sinteticamente) dados antigos — pode não ser viável por privacidade/armazenamento.'],
                  ['EWC (Elastic Weight Consolidation)', 'Identifica os parâmetros mais "importantes" para tarefas anteriores (via aproximação da matriz de Fisher) e adiciona uma penalização que resiste a alterá-los, deixando os parâmetros menos importantes livres para se adaptarem.', 'A estimativa de importância pode ser cara e imprecisa para modelos muito grandes.'],
                  ['Arquitecturas modulares / PEFT por tarefa', 'Cada tarefa nova ganha o seu próprio módulo pequeno (LoRA, adapter) sobre um backbone congelado partilhado — o backbone nunca muda, logo nunca esquece.', 'O número de módulos cresce com o número de tarefas; é preciso saber qual módulo activar em inferência.'],
                  ['LR muito baixa + poucas épocas', 'Limitar a magnitude da actualização de pesos durante o fine-tuning, mantendo o modelo "perto" da inicialização pré-treinada.', 'Compromisso — pode limitar também o desempenho na nova tarefa.'],
                  ['Distillation a partir do modelo original', 'Durante o fine-tuning, adicionar uma loss extra que força as previsões do novo modelo a permanecerem próximas das do modelo original em dados gerais.', 'Custo computacional extra (precisa correr o modelo original em paralelo).'],
                ].map(([nm, how, lim]) => (
                  <tr key={nm}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{nm}</td><td style={{ ...S.td, fontSize: '0.85rem' }}>{how}</td><td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{lim}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}> A ligação a PEFT é directa: como LoRA/adapters/visual prompts deixam o backbone intocado, são uma das formas mais simples e eficazes de evitar catastrophic forgetting — o "conhecimento geral" do modelo está sempre preservado nos pesos congelados, e cada tarefa vive no seu pequeno módulo adicional.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>7. Modelos de Referência para Fine-tuning</h2>
          <p style={S.p}>A escolha do modelo base (backbone) condiciona fortemente o resultado do transfer learning. A tabela seguinte resume as opções mais comuns em 2025 e para que cenários são mais adequadas.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Modelo</th><th style={S.th}>Pré-treino</th><th style={S.th}>Pontos fortes</th><th style={S.th}>Melhor para</th></tr></thead>
              <tbody>
                {[
                  ['ResNet-50/101', 'ImageNet-1K', 'Estável, bem compreendido, excelente ponto de partida', 'Baseline, datasets médios, produção'],
                  ['EfficientNet-B0 a B4', 'ImageNet-1K', 'Pareto-optimal accuracy/eficiência, muito bom com poucos dados', 'Mobile, datasets pequenos, embedded'],
                  ['ViT-B/16 (DeiT)', 'ImageNet-21K', 'Excelente com muitos dados, attention maps interpretáveis', 'Datasets grandes, análise de atenção'],
                  ['CLIP (ViT)', 'Web (400M pares imagem-texto)', 'Zero-shot extraordinário, robustez a distribuição', 'Zero-shot, few-shot, retrieval'],
                  ['DINOv2', 'LVD-142M (sem labels)', 'Features densos excelentes para tasks densas (segmentação, profundidade)', 'Segmentação, profundidade, matching'],
                  ['SAM (Segment Anything)', 'SA-1B (1B máscaras)', 'Segmentação promptable zero-shot, generaliza a objectos não vistos', 'Segmentação interactiva, anotação automática'],
                ].map(([m, p, s, b]) => (
                  <tr key={m}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{m}</td><td style={S.td}>{p}</td><td style={S.td}>{s}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{b}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>8. Checklist Prático de Fine-Tuning</h2>
          <p style={S.p}>Ao iniciar um projecto real de fine-tuning de um modelo de visão, há uma sequência de decisões que vale a pena percorrer sistematicamente. Esta checklist resume essas decisões na ordem em que normalmente surgem.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>#</th><th style={S.th}>Decisão</th><th style={S.th}>Como decidir</th></tr></thead>
              <tbody>
                {[
                  ['1', 'Escolher o modelo base', 'Tarefa de classificação geral → ResNet/EfficientNet/ViT supervisionado. Tarefa densa (segmentação, profundidade, matching) → considerar DINOv2. Classes dinâmicas/abertas ou pouquíssimos dados → CLIP. Modelo enorme (ViT-L/H) → planear desde já usar PEFT.'],
                  ['2', 'Avaliar o tamanho do dataset', '&lt;100 imagens/classe → few-shot/zero-shot ou PEFT muito leve (visual prompts/linear probe). 100-1000/classe → fine-tuning parcial ou LoRA. &gt;1000/classe e domínio diferente → considerar fine-tuning total.'],
                  ['3', 'Avaliar a similaridade de domínio', 'Domínio próximo de fotografias naturais → congelar mais camadas. Domínio muito distinto (médico, satélite, microscópio) → descongelar mais, ou considerar pré-treino intermédio no domínio (se houver dados não rotulados disponíveis).'],
                  ['4', 'Escolher a estratégia de congelamento', 'Começar conservador (feature extraction ou PEFT) e só descongelar mais camadas se a validação estagnar. Usar gradual unfreezing em vez de descongelar tudo de uma vez.'],
                  ['5', 'Definir learning rate(s)', 'Novo head: LR alta (1e-3 a 1e-2). Backbone (se descongelado): LR baixa (1e-5 a 1e-4), idealmente com LR discriminativa por grupo de camadas e warmup nos primeiros passos.'],
                  ['6', 'Desenhar a augmentation', 'Deve reflectir a variabilidade real esperada em produção (iluminação, ângulo, oclusão) sem destruir informação relevante para a tarefa (cuidado com flips/cores em tarefas onde a orientação ou a cor são discriminativas, e.g. sinais de trânsito, doenças de pele).'],
                  ['7', 'Planear a validação', 'Split de validação representativo da distribuição real (não apenas aleatório do mesmo lote de recolha). Monitorizar não só a métrica da nova tarefa, mas também (se possível) o desempenho num conjunto "geral" para detectar catastrophic forgetting.'],
                  ['8', 'Decidir critério de paragem', 'Early stopping com base na loss/métrica de validação. Para fine-tuning total, parar assim que a validação parar de melhorar — treinar mais tempo só aumenta o risco de overfitting/forgetting.'],
                  ['9', 'Considerar continual learning', 'Se o modelo vai receber novas classes/dados ao longo do tempo, planear desde já uma estratégia (PEFT modular por versão, replay buffer, ou EWC) em vez de re-treinar do zero a cada actualização.'],
                ].map(([n, dec, how]) => (
                  <tr key={n}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{n}</td><td style={{ ...S.td, fontWeight: 600 }}>{dec}</td><td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{how}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}> Em caso de dúvida: comece sempre pela abordagem mais simples e barata (zero-shot CLIP ou linear probing sobre um backbone congelado) para estabelecer um baseline rapidamente. Só invista em fine-tuning mais profundo (PEFT → fine-tuning parcial → fine-tuning total) se o baseline não for suficiente e houver dados que justifiquem o investimento adicional.</div>
        </div>

        
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>9. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
            <li>Porquê funciona: features de baixo nível (edges, texturas) são universais. Só as features de alto nível são específicas do domínio.</li>
            <li>Feature extraction: backbone frozen, só treinar novo head. Para datasets pequenos (&lt;1K imagens).</li>
            <li>Fine-tuning parcial: descongelar últimas camadas conv + head. LR discriminativa (menor nas primeiras camadas), warmup, gradual unfreezing.</li>
            <li>Fine-tuning total: backbone + head com LR muito baixa (1e-5). Para datasets grandes ou domínios muito diferentes.</li>
            <li>Pré-treino auto-supervisionado (SimCLR/MoCo via contrastive, DINO/DINOv2 via self-distillation) produz backbones que muitas vezes transferem melhor que supervisionados para tarefas densas.</li>
            <li>PEFT (LoRA, adapters, visual prompts) adapta modelos enormes treinando &lt;1% dos parâmetros — mais barato, multi-tarefa, e protege contra catastrophic forgetting.</li>
            <li>Few-shot (prototypical networks) e zero-shot (CLIP) evitam fine-tuning quando há pouquíssimos ou nenhuns dados rotulados.</li>
            <li>Catastrophic forgetting: fine-tuning agressivo apaga conhecimento prévio. Mitigar com replay, EWC, arquitecturas modulares/PEFT, ou distillation.</li>
            <li>Checklist prático: começar simples (zero-shot/linear probe), escalar gradualmente conforme dados disponíveis e necessidade de desempenho.</li>
          </ul>
          </div>
        </div>
        </div>
      </div>
      );
}
