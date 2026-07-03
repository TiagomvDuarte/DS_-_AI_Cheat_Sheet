import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Industry40';

const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  card: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.25rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  highlight: { background: `${color}12`, border: `1px solid ${color}30`, borderRadius: 8, padding: '0.9rem 1.1rem', marginTop: '0.8rem', fontSize: '0.93rem', color: 'var(--text-primary)', lineHeight: 1.7 },
  note: { background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 8, padding: '0.8rem 1rem', marginTop: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: '#0f172a', color: '#e2e8f0', borderRadius: 8, padding: '1rem 1.2rem', fontFamily: 'monospace', fontSize: '0.82rem', lineHeight: 1.7, marginTop: '0.75rem', overflowX: 'auto' },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  grid3: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.85rem' },
};

function ScopesEmissionsSVG() {
  const sources = [
    { scope: 'Scope 1', label: 'Emissoes directas', examples: 'Combustao in-situ (caldeiras, frotas), fugas de refrigerante', color: '#f97316', pct: 0.35 },
    { scope: 'Scope 2', label: 'Electricidade comprada', examples: 'Energia da rede electrica, vapor de terceiros', color: '#f97316', pct: 0.25 },
    { scope: 'Scope 3 (upstream)', label: 'Cadeia de fornecimento', examples: 'Materias primas, transporte de entrada, capital goods', color: '#f97316', pct: 0.28 },
    { scope: 'Scope 3 (downstream)', label: 'Uso e fim de vida', examples: 'Uso do produto pelo cliente, reciclagem/descarte', color: '#f97316', pct: 0.12 },
  ];
  return (
    <svg viewBox="0 0 560 215" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="215" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={17} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Scopes de Emissoes — GHG Protocol (WBCSD/WRI 2001)</text>
      {sources.map((s, i) => {
        const y = 28 + i * 44;
        const barW = s.pct * 360;
        return (
          <g key={i}>
            <rect x="8" y={y} width="110" height="36" fill={s.color} rx="4" opacity="0.2" />
            <text x={63} y={y+14} textAnchor="middle" fill={s.color} fontSize="9.5" fontWeight="700">{s.scope}</text>
            <text x={63} y={y+28} textAnchor="middle" fill={s.color} fontSize="8.5">{s.label}</text>
            <rect x={125} y={y+8} width={barW} height={20} fill={s.color} rx="3" opacity="0.7" />
            <text x={130 + barW} y={y+21} fill="#fb923c" fontSize="9">{Math.round(s.pct*100)}% — {s.examples}</text>
          </g>
        );
      })}
      <text x={280} y={210} textAnchor="middle" fill="#fb923c" fontSize="9">CDP 2023: Scope 3 representa 65-95% do footprint total de empresas manufactureiras. Mais dificil de medir e reduzir.</text>
    </svg>
  );
}

function EnergyOptimizationSVG() {
  const W = 560, H = 200;
  const hours = Array.from({length: 24}, (_, i) => i);
  const baseline = [420,380,360,350,345,360,400,480,560,620,650,640,630,620,610,640,680,700,680,640,580,540,500,460];
  const optimized = [420,380,350,340,335,345,380,450,510,560,580,565,555,550,540,565,600,620,600,565,520,490,460,420];
  const xS = (h) => 40 + h * 20.5;
  const yS = (v) => 155 - ((v - 330) / 380) * 110;
  const bPath = baseline.map((v,i)=>`${i===0?'M':'L'}${xS(i)},${yS(v)}`).join(' ');
  const oPath = optimized.map((v,i)=>`${i===0?'M':'L'}${xS(i)},${yS(v)}`).join(' ');
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', borderRadius: 8 }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Optimizacao de Energia — RL (PPO) para HVAC Industrial</text>
      <line x1="40" y1="155" x2="520" y2="155" stroke="var(--card-border)" strokeWidth="1" />
      <line x1="40" y1="35" x2="40" y2="155" stroke="var(--card-border)" strokeWidth="1" />
      <path d={bPath} fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="6,3" />
      <path d={oPath} fill="none" stroke="#f97316" strokeWidth="2.5" />
      {[4,8,12,16,20,24].map(h => (
        <text key={h} x={xS(h-1)} y={168} textAnchor="middle" fill="#fb923c" fontSize="8">{h}h</text>
      ))}
      {[400,500,600,700].map(v => (
        <g key={v}>
          <line x1="40" y1={yS(v)} x2="520" y2={yS(v)} stroke="var(--card-border)" strokeWidth="0.5" />
          <text x={35} y={yS(v)+4} fill="#fb923c" fontSize="8" textAnchor="end">{v}</text>
        </g>
      ))}
      <line x1={330} y1={176} x2={342} y2={176} stroke="#fbbf24" strokeWidth="2" strokeDasharray="6,3" />
      <text x={346} y={179} fill="#fbbf24" fontSize="9">Baseline (kW)</text>
      <line x1={330} y1={188} x2={342} y2={188} stroke="#f97316" strokeWidth="2.5" />
      <text x={346} y={191} fill="#f97316" fontSize="9">RL Optimizado</text>
    </svg>
  );
}

function LCASvg() {
  const phases = [
    { name: 'Extraccao\nMateria Prima', pct: 0.28, color: '#f97316' },
    { name: 'Producao\nde Materiais', pct: 0.22, color: '#f97316' },
    { name: 'Manufatura\n& Assembly', pct: 0.18, color: '#f97316' },
    { name: 'Distrib.\n& Transp.', pct: 0.08, color: '#f97316' },
    { name: 'Uso pelo\nCliente', pct: 0.16, color: '#f97316' },
    { name: 'Fim de\nVida (EoL)', pct: 0.08, color: '#f97316' },
  ];
  const total = 180; // kg CO2e por unidade
  let cumX = 40;
  const barH = 60;
  const barY = 100;
  const segW = 470 / phases.reduce((s, p) => s + p.pct, 0);
  return (
    <svg viewBox="0 0 560 190" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="190" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={17} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">LCA — Life Cycle Assessment (ISO 14040/44) para Produto Industrial</text>
      <text x={280} y={30} textAnchor="middle" fill="#fb923c" fontSize="9">Emissoes por fase (kg CO2e por unidade) — Exemplo: Produto electromecanico 180 kg CO2e</text>
      {phases.map((p, i) => {
        const w = p.pct * segW;
        const x = cumX;
        cumX += w;
        const lines = p.name.split('\n');
        const co2 = Math.round(p.pct * total);
        return (
          <g key={i}>
            <rect x={x} y={barY} width={w - 2} height={barH} fill={p.color} rx="3" opacity="0.8" />
            {lines.map((l, li) => (
              <text key={li} x={x + w/2} y={barY + 14 + li * 12} textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">{l}</text>
            ))}
            <text x={x + w/2} y={barY + 45} textAnchor="middle" fill="#ffffffcc" fontSize="9" fontWeight="700">{co2}kg</text>
            <text x={x + w/2} y={barY + 57} textAnchor="middle" fill="#fff" fontSize="8" opacity="0.75">{Math.round(p.pct*100)}%</text>
          </g>
        );
      })}
      {/* Arrow */}
      <line x1="40" y1="82" x2="510" y2="82" stroke="var(--card-border)" strokeWidth="1" />
      <polygon points="510,78 520,82 510,86" fill="var(--card-border)" />
      <text x={280} y={170} textAnchor="middle" fill="#fb923c" fontSize="9">Cradle-to-gate: extraccao + producao + manufatura. Cradle-to-grave: inclui uso + EoL. Cradle-to-cradle: + reciclagem.</text>
      <text x={280} y={183} textAnchor="middle" fill="#fb923c" fontSize="8.5">Software SimaPro / GaBi / OpenLCA. Base de dados Ecoinvent 3.9 (18000+ processos com dados de emissoes).</text>
    </svg>
  );
}

function DPPdiagramSVG() {
  const left = [
    { label: 'Carbon Footprint', detail: 'kg CO2e por fase (Scope 1/2/3)', color: '#f97316' },
    { label: 'Repairability Score', detail: 'Indice EU — FR mandatorio 2024', color: '#f97316' },
    { label: 'Durability & Warranty', detail: 'Vida util expectavel + garantia', color: '#f97316' },
  ];
  const right = [
    { label: 'Material Composition', detail: 'Minerios criticos, SVHC (REACH)', color: '#f97316' },
    { label: 'Recycled Content', detail: '% materiais reciclados por peso', color: '#f97316' },
    { label: 'Supply Chain Trace', detail: 'Blockchain AAS/Hyperledger', color: '#f97316' },
  ];
  const rowH = 52, startY = 22, cardW = 170;
  const totalH = startY + left.length * rowH + 8;
  const centerX = 280, centerY = startY + (left.length * rowH) / 2;
  const timeline = [
    { year: '2026', label: 'Texteis', color: '#f97316', x: 80 },
    { year: '2027', label: 'Baterias EV', color: '#f97316', x: 190 },
    { year: '2027', label: 'Electronics', color: '#f97316', x: 285 },
    { year: '2028', label: 'Acos/Al', color: '#f97316', x: 390 },
    { year: '2030', label: 'Geral', color: '#f97316', x: 490 },
  ];
  const svgH = totalH + 70;
  return (
    <svg viewBox={`0 0 560 ${svgH}`} style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height={svgH} fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={15} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Digital Product Passport (EU Ecodesign Reg. 2024/1781)</text>

      {/* Central DPP card */}
      <rect x={centerX - 70} y={startY} width={140} height={totalH - startY - 4} fill="#f97316" rx="8" opacity="0.13" />
      <rect x={centerX - 70} y={startY} width={140} height={totalH - startY - 4} fill="none" stroke="#f97316" strokeWidth="2" rx="8" />
      {/* QR squares */}
      {[0,1,2].map(r => [0,1,2].map(c => (
        <rect key={`${r}${c}`} x={centerX - 48 + c * 18} y={startY + 14 + r * 18} width={13} height={13}
          fill="#f97316" rx="2" opacity={(r===1&&c===1)?0.95:0.5} />
      )))}
      <text x={centerX} y={startY + 76} textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">DPP Unique ID</text>
      <text x={centerX} y={startY + 90} textAnchor="middle" fill="#fb923c" fontSize="8.5">ECLASS / GS1 / IRI</text>
      <text x={centerX} y={startY + 104} textAnchor="middle" fill="#fb923c" fontSize="8">QR / NFC / RFID</text>

      {/* Left cards */}
      {left.map((item, i) => {
        const y = startY + i * rowH;
        const midY = y + rowH / 2 - 4;
        return (
          <g key={i}>
            <rect x={8} y={y + 3} width={cardW} height={rowH - 6} fill={item.color} rx="5" opacity="0.1" />
            <rect x={8} y={y + 3} width={cardW} height={rowH - 6} fill="none" stroke={item.color} strokeWidth="1.5" rx="5" />
            <text x={18} y={y + 20} fill={item.color} fontSize="10" fontWeight="700">{item.label}</text>
            <text x={18} y={y + 34} fill="#fb923c" fontSize="8.5">{item.detail}</text>
            <line x1={8 + cardW} y1={midY} x2={centerX - 70} y2={centerY} stroke={item.color} strokeWidth="1" opacity="0.4" strokeDasharray="3,2" />
          </g>
        );
      })}

      {/* Right cards */}
      {right.map((item, i) => {
        const x = 560 - 8 - cardW;
        const y = startY + i * rowH;
        const midY = y + rowH / 2 - 4;
        return (
          <g key={i}>
            <rect x={x} y={y + 3} width={cardW} height={rowH - 6} fill={item.color} rx="5" opacity="0.1" />
            <rect x={x} y={y + 3} width={cardW} height={rowH - 6} fill="none" stroke={item.color} strokeWidth="1.5" rx="5" />
            <text x={x + 10} y={y + 20} fill={item.color} fontSize="10" fontWeight="700">{item.label}</text>
            <text x={x + 10} y={y + 34} fill="#fb923c" fontSize="8.5">{item.detail}</text>
            <line x1={x} y1={midY} x2={centerX + 70} y2={centerY} stroke={item.color} strokeWidth="1" opacity="0.4" strokeDasharray="3,2" />
          </g>
        );
      })}

      {/* Timeline */}
      <line x1="40" y1={totalH + 22} x2="530" y2={totalH + 22} stroke="var(--card-border)" strokeWidth="1.5" />
      {timeline.map((t, i) => (
        <g key={i}>
          <circle cx={t.x} cy={totalH + 22} r={5} fill={t.color} />
          <text x={t.x} y={totalH + 13} textAnchor="middle" fill={t.color} fontSize="8.5" fontWeight="700">{t.year}</text>
          <text x={t.x} y={totalH + 36} textAnchor="middle" fill="#fb923c" fontSize="8">{t.label}</text>
        </g>
      ))}
      <text x={280} y={svgH - 5} textAnchor="middle" fill="#fb923c" fontSize="8.5">Impl.: Asset Administration Shell (IEC 63278) + Submodel "ProductCarbonFootprint" IDTA</text>
    </svg>
  );
}

export default function IND7() {
  const mod = modules[6];
  return (
    <div style={S.page}>
      <Link to="/industry40" style={S.back}>← Industry 4.0</Link>
      <div style={S.badge}>MÓDULO 07</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. GHG Protocol — Scopes de Emissoes</h2>
        <div style={S.diagram}><ScopesEmissionsSVG /></div>
        <div style={S.highlight}>
          O <strong>GHG Protocol</strong> (WBCSD/WRI 2001) e o standard de referencia para contabilizacao de emissoes de gases de efeito de estufa. <strong>Scope 1</strong>: emissoes directas — combustao de gas natural em caldeiras industriais, viaturas da empresa, fugas de HFCs em sistemas de refrigeracao. <strong>Scope 2</strong>: electricidade comprada — pode ser reduzido a zero com PPAs (Power Purchase Agreements) de energias renovaveis ou certificados GO (Garantias de Origem). <strong>Scope 3</strong>: emissoes da cadeia de valor — as mais significativas para industria manufactureira (65-95% do total), mas as mais dificeis de medir e controlar.
        </div>
        <div style={S.note}>
          <strong>Regulamentacao EU 2024</strong>: CSRD (Corporate Sustainability Reporting Directive) obriga empresas europeias com &gt;500 colaboradores a reportar scope 1, 2, e 3 auditados externamente a partir de 2025 (grandes empresas) e 2026 (PME cotadas). O relatorio deve seguir ESRS (European Sustainability Reporting Standards) — comparavel a IFRS mas para ESG.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. ISO 50001 — Gestao de Energia Industrial</h2>
        <div style={S.grid2}>
          <div>
            <div style={{ fontWeight: 700, color, marginBottom: '0.5rem', fontSize: '0.95rem' }}>Ciclo PDCA de Energia</div>
            <p style={S.p}>
              <strong>ISO 50001:2018</strong> segue o ciclo Plan-Do-Check-Act: Plan (identificar SEUs — Significant Energy Users, baseline EnPI), Do (implementar accoes de melhoria), Check (monitorizar KPIs vs baseline), Act (rever objectivos). <strong>EnPI</strong> (Energy Performance Indicator): kWh/unidade produzida, kWh/ton de vapor, kWh/m2 de espaco climatizado. Baseline corrigida para factores de influencia (temperatura exterior, nivel de producao, mix de produtos).
            </p>
          </div>
          <div>
            <div style={{ fontWeight: 700, color, marginBottom: '0.5rem', fontSize: '0.95rem' }}>IIoT para Submetering</div>
            <p style={S.p}>
              Submetering com sensores de energia IIoT (Schneider PowerTag, Siemens SENTRON) a nivel de equipamento permite atribuir consumo por linha, maquina, e produto. Tipicamente encontra 15-25% de consumo "fantasma" (standby de equipamentos, fugas de ar comprimido). <strong>EMIS</strong> (Energy Management Information System): plataforma que agrega submetering, clima, producao, e identifica desvios vs baseline em tempo real — alertas automaticos quando SEU excede envelope normal.
            </p>
          </div>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. RL para Optimizacao de Energia — HVAC Industrial</h2>
        <div style={S.diagram}><EnergyOptimizationSVG /></div>
        <div style={S.highlight}>
          <strong>PPO (Proximal Policy Optimization)</strong> e o algoritmo de RL preferido para optimizacao de HVAC: state space continuo (temperatura, humidade, ocupacao, preco de energia, hora do dia), action space continuo (setpoints de temperatura, caudal de ar, velocidade de ventiladores). Constraints: temperatura de conforto entre 20-24C, humidade 40-60%, qualidade do ar CO2 &lt;1000 ppm. Google DeepMind aplicou em data centers: -40% energia de arrefecimento mantendo todos os constraints. Em fabrica: -18 a -31% dependendo do perfil de producao.
        </div>
        <div style={S.note}>
          <strong>Digital Twin de edificio</strong> (EnergyPlus, TRNSYS) e usado para pre-treinar o agente RL em simulacao antes de deploy em producao (sim-to-real transfer). O gemeo digital e calibrado com dados historicos de consumo e temperatura — erro de calibracao tipico: &lt;5% em consumo anual. O modelo aprende o comportamento termico do edificio e as preferencias dos ocupantes sem necessitar de modelos fisicos expliciticos.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. LCA — Life Cycle Assessment (ISO 14040/44)</h2>
        <div style={S.diagram}><LCASvg /></div>
        <div style={S.highlight}>
          <strong>LCA (ISO 14040/44)</strong> e a metodologia para quantificar impactos ambientais ao longo do ciclo de vida completo de um produto. Fases: (1) Goal and Scope Definition — unidade funcional, fronteiras do sistema; (2) Life Cycle Inventory (LCI) — colheita de dados de emissoes e consumos; (3) Life Cycle Impact Assessment (LCIA) — categorias de impacto: GWP (Global Warming Potential em kg CO2e), AP (Acidification Potential), EP (Eutrophication), ODP, ADPE; (4) Interpretation. Software: <strong>SimaPro</strong>, <strong>OpenLCA</strong> (open-source), <strong>GaBi</strong>. Base de dados: Ecoinvent 3.9 (18000+ processos com dados primarios de emissoes).
        </div>
        <div style={S.note}>
          <strong>Hotspot analysis</strong>: identificar os processos com maior contribuicao para o impacto total. Tipicamente em products electromecanicos: materias primas (aluminio primario: 11 kg CO2e/kg; aco: 1.8 kg CO2e/kg; cobre: 3.2 kg CO2e/kg) e electricidade de uso dominam o footprint. Estrategias de reducao: substituicao de aluminio primario por reciclado (95% menos energia), switch para electricidade renovavel, extensao da vida util do produto (+25% vida util = -20% impacto anualizado).
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Digital Product Passport (DPP) — EU Ecodesign 2024</h2>
        <div style={S.diagram}><DPPdiagramSVG /></div>
        <div style={S.highlight}>
          O <strong>Digital Product Passport</strong> (EU Ecodesign Regulation 2024/1781) vai ser obrigatorio para categorias de produto especificas ate 2030. O DPP e acessivel via QR code, RFID, ou NFC, e contem: carbon footprint por fase de ciclo de vida, composicao de materiais (incluindo minerios criticos e substancias SVHC do REACH), indice de reparabilidade (metodo de calculo harmonizado EU), conteudo reciclado por material, e rastreabilidade da cadeia de fornecimento. Tecnicamente implementado como AAS (Asset Administration Shell) com Submodel "CarbonFootprint" e "ProductCarbonFootprint" da IDTA.
        </div>
        <div style={S.note}>
          <strong>Indice de Reparabilidade (FR Decret 2021)</strong>: obrigatorio em Franca desde 2021 para smartphones, TVs, e electrodomesticos. Escala 1-10 baseada em: facilidade de desmontagem, disponibilidade de pecas sobressalentes, preco de pecas vs produto novo, existencia de documentacao tecnica, politica de actualizacoes de software. Paises que devem seguir: toda EU ate 2027 via Right-to-Repair Directive (aprovada Parlamento Europeu 2024).
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. Benchmarks Green Manufacturing</h2>
        <div style={S.grid3}>
          {[
            { title: 'Johnson & Johnson — ISO 50001', stat: '-40% energia 2025', detail: 'SG 2025: -40% energia vs 2010 em todas as fabricas. 100% electricidade renovavel desde 2020 via PPAs. EMIS global.' },
            { title: 'BASF — LCA em Quimica', stat: '-25% CO2 por ton prod', detail: 'LCA de 45000 produtos com Ecoinvent. Carbon Management: preco interno de CO2 a 100 EUR/ton para decisions de investimento.' },
            { title: 'Google DeepMind HVAC', stat: '-40% energia arrec.', detail: 'RL (DQN) em data centers Google: -40% arrefecimento mantendo constraints de temperatura. 3M EUR poupados/data center/ano.' },
            { title: 'BMW Leipzig — Solar', stat: '100% energia verde', detail: '4800 paineis solares no telhado. PPA eolica offshore. Carbon neutral desde 2021 em scope 1+2. Scope 3 objetivo 2030.' },
            { title: 'Renault — Economia Circular', stat: '80% componentes recup.', detail: 'Fabrica Flins (Seine-et-Oise): 80% de componentes de carros usados recuperados. Valor gerado superior a veiculo novo.' },
            { title: 'Maersk — Metanol Verde', stat: 'Net zero 2040', detail: 'Primeiro navio container a metanol verde (Maersk Pioner, 2023). -86% CO2 vs fuel convencional. 25 navios encomendados.' },
          ].map((b, i) => (
            <div key={i} style={{ ...S.card, borderLeft: `3px solid ${color}` }}>
              <div style={{ fontWeight: 700, color, marginBottom: '0.25rem', fontSize: '0.85rem' }}>{b.title}</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{b.stat}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{b.detail}</div>
            </div>
          ))}
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>7. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>GHG Protocol — Scopes de Emissoes</strong> — o GHG Protocol Corporate Standard define como empresas medem e reportam emissões; Scope 1 (directas), Scope 2 (energia comprada), Scope 3 (cadeia de valor) — Scope 3 representa &gt;70% das emissões de empresas manufactureiras mas é a mais difícil de medir.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>ISO 50001 — Gestao de Energia Industrial</strong> — ISO 50001 define um sistema de gestão de energia (SGE) baseado em PDCA; EnPI (Energy Performance Indicator) e EnB (Energy Baseline) monitorizam melhoria contínua; certificação ISO 50001 é pré-requisito para incentivos fiscais de eficiência energética em vários países.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>RL para Optimizacao de Energia — HVAC Industrial</strong> — RL aprende políticas de controlo de HVAC industrial que minimizam consumo energético dentro de restrições de temperatura e produção; DeepMind reduziu o consumo dos datacenters Google em 40%; aplicações industriais mostram 15–25% de poupança vs. controlo PID convencional.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>LCA — Life Cycle Assessment (ISO 14040/44)</strong> — LCA quantifica impacto ambiental de um produto ao longo de todo o ciclo de vida (extracção → produção → uso → fim de vida); inventário de ciclo de vida (LCI) com ML e bases de dados Ecoinvent permite LCA automatizado e mais preciso para eco-design.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Digital Product Passport (DPP) — EU Ecodesign 2024</strong> — o DPP (Regulamento UE 2024/1781) exige que produtos tenham um passaporte digital com dados de carbono, materiais, reparabilidade e fim de vida; blockchain garante imutabilidade e rastreabilidade ao longo da cadeia de valor — obrigatório para baterias EV e têxteis a partir de 2026.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Implementacao: Carbon Footprint Tracking + EnPI Monitor</strong> — pipeline: dados de consumo (electricidade, gás, combustível) → factores de emissão (IPCC, AIB) → cálculo de Scope 1/2 em tempo real → dashboard de intensidade de carbono por produto → integração com ISO 50001 EnPI — implementável com Python + Grafana em &lt;2 semanas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Benchmarks Green Manufacturing</strong> — Science-Based Targets (SBTi) definem trajectórias de redução alinhadas com 1.5°C; Race to Zero exige Net-Zero antes de 2050; EcoVadis e CDP são plataformas de rating de sustentabilidade usadas em procurement — score CDP &gt;B é threshold de excelência.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
