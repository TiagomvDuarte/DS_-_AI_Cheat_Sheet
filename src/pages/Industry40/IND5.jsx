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

function SPCChartSVG() {
  const vals = [10.015, 10.022, 10.008, 10.031, 9.998, 10.019, 10.027, 10.011, 10.035, 9.993,
                10.024, 10.016, 10.029, 10.007, 10.021, 10.033, 10.014, 10.028, 10.068, 10.019,
                10.012, 10.026, 9.994, 10.030, 10.018];
  const mean = 10.020, ucl = 10.058, lcl = 9.982;
  const xS = (i) => 42 + i * 19;
  const yS = (v) => 145 - ((v - 9.96) / (10.09 - 9.96)) * 108;
  const path = vals.map((v, i) => `${i===0?'M':'L'}${xS(i)},${yS(v)}`).join(' ');
  return (
    <svg viewBox="0 0 560 195" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="195" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">SPC X-bar Chart — Diametro de Furo (mm), n=25 Amostras</text>
      <line x1="42" y1="145" x2="520" y2="145" stroke="var(--card-border)" strokeWidth="1" />
      <line x1="42" y1="30" x2="42" y2="145" stroke="var(--card-border)" strokeWidth="1" />
      <line x1="42" y1={yS(ucl)} x2="520" y2={yS(ucl)} stroke="#ea580c" strokeDasharray="6,3" strokeWidth="1.5" />
      <line x1="42" y1={yS(mean)} x2="520" y2={yS(mean)} stroke="#fbbf24" strokeDasharray="4,3" strokeWidth="1.5" />
      <line x1="42" y1={yS(lcl)} x2="520" y2={yS(lcl)} stroke="#ea580c" strokeDasharray="6,3" strokeWidth="1.5" />
      <rect x="42" y={yS(ucl)} width="478" height={yS(ucl - (ucl-mean)/3) - yS(ucl)} fill="#ea580c" opacity="0.05" />
      <rect x="42" y={yS(mean + (ucl-mean)/3)} width="478" height={yS(mean) - yS(mean + (ucl-mean)/3)} fill="#fbbf24" opacity="0.05" />
      <text x={525} y={yS(ucl)+4} fill="#ea580c" fontSize="8.5">UCL</text>
      <text x={525} y={yS(mean)+4} fill="#fbbf24" fontSize="8.5">CL</text>
      <text x={525} y={yS(lcl)+4} fill="#ea580c" fontSize="8.5">LCL</text>
      <path d={path} fill="none" stroke="#f97316" strokeWidth="2" />
      {vals.map((v, i) => {
        const ooc = v > ucl || v < lcl;
        return (
          <g key={i}>
            <circle cx={xS(i)} cy={yS(v)} r={ooc ? 6 : 3.5} fill={ooc ? '#ea580c' : '#f97316'} />
            {ooc && <text x={xS(i)} y={yS(v) - 9} textAnchor="middle" fill="#ea580c" fontSize="9" fontWeight="700">OOC</text>}
          </g>
        );
      })}
      <text x={280} y={184} textAnchor="middle" fill="#fb923c" fontSize="9">Amostra 19 OOC: Cpk = 0.82 (abaixo de 1.33). Causa provavel: desgaste de ferramenta de corte apos 450 pecas.</text>
      <text x={280} y={193} textAnchor="middle" fill="#fb923c" fontSize="8.5">Cpk = min[(USL - xbar) / (3*sigma), (xbar - LSL) / (3*sigma)] | Six Sigma: Cpk &gt;= 1.67 (3.4 DPMO)</text>
    </svg>
  );
}

function OEEBreakdownSVG() {
  const bars = [
    { label: 'Disponibilidade', pct: 0.88, loss: '12% downtime (breakdowns 7%, changeover 5%)', color: '#f97316' },
    { label: 'Performance', pct: 0.91, loss: '9% speed loss (micro-stops 5%, speed reduction 4%)', color: '#f97316' },
    { label: 'Qualidade', pct: 0.967, loss: '3.3% scrap + rework', color: '#f97316' },
    { label: 'OEE = D*P*Q', pct: 0.775, loss: '= 88% * 91% * 96.7% = 77.5%', color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 185" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="185" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={17} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">OEE = Disponibilidade x Performance x Qualidade</text>
      {/* World class reference */}
      <line x1={135 + 0.85 * 310} y1="20" x2={135 + 0.85 * 310} y2="165" stroke="#eab308" strokeDasharray="5,3" strokeWidth="1.5" />
      <text x={135 + 0.85 * 310 + 3} y={28} fill="#eab308" fontSize="8.5">World Class 85%</text>
      {bars.map((b, i) => {
        const y = 26 + i * 35;
        const barW = b.pct * 310;
        return (
          <g key={i}>
            <text x={130} y={y + 18} textAnchor="end" fill={b.color} fontSize="10" fontWeight="700">{b.label}</text>
            <rect x={135} y={y + 5} width={barW} height={20} fill={b.color} rx="3" opacity={i===3?1:0.75} />
            <text x={140 + barW} y={y + 18} fill={i===3?b.color:'#fb923c'} fontSize="9" fontWeight={i===3?'700':'400'}>{Math.round(b.pct*100)}% — {b.loss}</text>
          </g>
        );
      })}
      <text x={280} y={180} textAnchor="middle" fill="#fb923c" fontSize="9">MTBF = Uptime / N_falhas | MTTR = Downtime / N_reparacoes | Availability = MTBF / (MTBF + MTTR)</text>
    </svg>
  );
}

function FMEASvg() {
  const rows = [
    { comp: 'Fuso de eixo', mode: 'Fratura por fadiga', effect: 'Linha para', S: 9, O: 3, D: 4, riskAction: 'Inspecao PT 1000h' },
    { comp: 'Vedante hidraulico', mode: 'Fuga de oleo', effect: 'Contaminacao', S: 6, O: 6, D: 5, riskAction: 'Substituicao preventiva' },
    { comp: 'Sensor pressao', mode: 'Deriva de leitura', effect: 'Produto fora esp.', S: 7, O: 4, D: 3, riskAction: 'Calibracao mensal' },
    { comp: 'Rolamento principal', mode: 'Spalling pista ext.', effect: 'Vibracao excessiva', S: 8, O: 5, D: 2, riskAction: 'PdM BPFO alerting' },
  ];
  const hdrs = ['Componente', 'Modo Falha', 'Efeito', 'S', 'O', 'D', 'RPN', 'Accao'];
  const xs = [8, 118, 218, 310, 330, 350, 374, 410];
  return (
    <svg viewBox="0 0 560 215" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="215" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={17} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">FMEA — Failure Mode and Effects Analysis (AIAG-VDA 2019)</text>
      <text x={280} y={28} textAnchor="middle" fill="#fb923c" fontSize="9">S=Severidade (1-10), O=Ocorrencia (1-10), D=Deteccao (1-10), RPN = S*O*D</text>
      {hdrs.map((h, i) => <text key={i} x={xs[i]+2} y={42} fill="#fb923c" fontSize="9" fontWeight="700">{h}</text>)}
      <line x1="6" y1="47" x2="554" y2="47" stroke="var(--card-border)" strokeWidth="1" />
      {rows.map((r, ri) => {
        const y = 49 + ri * 38;
        const rpn = r.S * r.O * r.D;
        const rpnColor = rpn >= 200 ? '#f97316' : rpn >= 100 ? '#f97316' : '#f97316';
        const vals = [r.comp, r.mode, r.effect, r.S, r.O, r.D, rpn, r.riskAction];
        return (
          <g key={ri}>
            <rect x="6" y={y+1} width="548" height="34" fill={ri%2===0?'rgba(249,115,22,0.06)':'transparent'} rx="3" />
            {vals.map((v, ci) => (
              <text key={ci} x={xs[ci]+4} y={y+20} fill={ci===6?rpnColor:ci===0?'#f97316':'#e2e8f0'} fontSize={ci===6?'11':'9'} fontWeight={ci===6||ci===0?'700':'400'}>{v}</text>
            ))}
          </g>
        );
      })}
      <text x={280} y={210} textAnchor="middle" fill="#fb923c" fontSize="9">AIAG-VDA 2019: RPN substituido por AP (Action Priority) High/Medium/Low em funcao de S, O, D independentemente</text>
    </svg>
  );
}

function MESFlowSVG() {
  const layers = [
    { label: 'ERP — SAP S/4HANA', sub: 'Ordens producao, PLM, financas, compras', color: '#f97316', pad: 0 },
    { label: 'MES — ISA-95 Level 3 (Opcenter / FactoryTalk)', sub: 'Scheduling, WIP, OEE, SPC, rastreabilidade, qualidade', color: '#f97316', pad: 14 },
    { label: 'SCADA / DCS — Level 2', sub: 'Supervisao de processo, alarmes, historian (OSIsoft PI)', color: '#f97316', pad: 28 },
    { label: 'PLC / Safety PLC — Level 1', sub: 'Logica de sequencia, malhas PID, SIL 2/3, EtherCAT', color: '#f97316', pad: 42 },
    { label: 'Field Devices — Level 0', sub: 'Sensores IIoT, atuadores, OPC-UA endpoints, TSN', color: '#f97316', pad: 56 },
  ];
  return (
    <svg viewBox="0 0 560 265" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="255" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={17} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">MES / ISA-95 — Digital Thread da Ordem ao Produto Fisico</text>
      {layers.map((l, i) => {
        const y = 24 + i * 44;
        return (
          <g key={i}>
            <rect x={16+l.pad} y={y} width={528-l.pad*2} height={38} fill={l.color} rx="5" opacity="0.14" />
            <rect x={16+l.pad} y={y} width={528-l.pad*2} height={38} fill="none" stroke={l.color} strokeWidth="1.5" rx="5" />
            <text x={280} y={y+15} textAnchor="middle" fill={l.color} fontSize="11.5" fontWeight="700">{l.label}</text>
            <text x={280} y={y+29} textAnchor="middle" fill="#fb923c" fontSize="9.5">{l.sub}</text>
          </g>
        );
      })}
      <text x={280} y={258} textAnchor="middle" fill="#fb923c" fontSize="9">B2MML (XML) ou REST/OPC-UA para interface MES-ERP. ISA-88 (batch control) + ISA-95 (enterprise integration)</text>
    </svg>
  );
}

function AdditiveMfgSVG() {
  const processes = [
    { name: 'FDM/FFF', mat: 'PLA,ABS,PEEK,ULTEM', res: '100-300 um', speed: 'Medio', apps: 'Fixtures, jigs', color: '#f97316' },
    { name: 'SLA/DLP', mat: 'Resina fotopolimero', res: '25-100 um', speed: 'Lento', apps: 'Prototipos, dental', color: '#f97316' },
    { name: 'SLS/MJF', mat: 'PA12, PA11, TPU', res: '80-150 um', speed: 'Rapido', apps: 'Pecas funcionais', color: '#f97316' },
    { name: 'DMLS/SLM', mat: 'Ti-6Al-4V, IN718, SS316L', res: '20-60 um', speed: 'Lento', apps: 'Aerospace, medico', color: '#f97316' },
    { name: 'DED/WAAM', mat: 'Ti, Al, Ni, acos', res: '500-2000 um', speed: 'Muito rapido', apps: 'Grandes estruturas', color: '#f97316' },
  ];
  const hdrs = ['Processo', 'Material', 'Resolucao', 'Velocidade', 'Aplicacoes'];
  const xs = [8, 100, 228, 318, 392];
  return (
    <svg viewBox="0 0 560 225" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="215" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={17} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Additive Manufacturing — Processos, Materiais e Aplicacoes</text>
      {hdrs.map((h, i) => <text key={i} x={xs[i]+3} y={32} fill="#fb923c" fontSize="10" fontWeight="700">{h}</text>)}
      <line x1="6" y1="37" x2="554" y2="37" stroke="var(--card-border)" strokeWidth="1" />
      {processes.map((p, ri) => {
        const y = 39 + ri * 34;
        const vals = [p.name, p.mat, p.res, p.speed, p.apps];
        return (
          <g key={ri}>
            <rect x="6" y={y+1} width="548" height="30" fill={ri%2===0?'rgba(249,115,22,0.06)':'transparent'} rx="3" />
            {vals.map((v, ci) => (
              <text key={ci} x={xs[ci]+5} y={y+20} fill={ci===0?p.color:'#e2e8f0'} fontSize={ci===0?'10.5':'9.5'} fontWeight={ci===0?'700':'400'}>{v}</text>
            ))}
          </g>
        );
      })}
      <text x={280} y={218} textAnchor="middle" fill="#fb923c" fontSize="9">DMLS: densidade &gt;99.5%, propriedades equiparadas ao forjado. DfAM: geometrias impossíveis por maquinagem convencional.</text>
    </svg>
  );
}

export default function IND5() {
  const mod = modules[4];
  return (
    <div style={S.page}>
      <Link to="/industry40" style={S.back}>← Industry 4.0</Link>
      <div style={S.badge}>MÓDULO 05</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. MES e ISA-95 — O Sistema Nervoso da Fabrica</h2>
        <div style={S.diagram}><MESFlowSVG /></div>
        <div style={S.highlight}>
          <strong>MES</strong> (Manufacturing Execution System) implementa os 11 modulos ISA-95: Resource Management, Definition Management, Detailed Scheduling, Dispatching, Document Control, Data Collection, Performance Analysis, Traceability, Quality Control, Process Management, Maintenance Management. O <strong>Digital Thread</strong> liga cada peca ao seu genealogy completo: design (PLM) + processo real (MES) + inspecao (SPC/CMM) + manutencao de campo (MRO). Um defeito de campo rastreado em horas vs semanas em fabrica sem Digital Thread.
        </div>
        <div style={S.note}>
          <strong>ISA-88</strong> (ANSI/ISA-88.01, batch control) define a hierarquia de controlo de processo batch: Enterprise -- Site -- Area -- Process Cell -- Unit -- Equipment Module -- Control Module. Complementar ao ISA-95: ISA-88 foca-se em controlo de receitas e batch production; ISA-95 foca-se na interface com ERP. Em farmaceutica, ISA-88 e mandatorio para compliance FDA 21 CFR Part 11 e GMP.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. SPC — Statistical Process Control em Tempo Real</h2>
        <div style={S.diagram}><SPCChartSVG /></div>
        <div style={S.highlight}>
          <strong>Carta X-bar/R (Shewhart 1924)</strong>: UCL/LCL = X_double_bar +/- A2 * R_bar, onde A2 e constante tabelada (n=5: A2=0.577). Sigma estimado: sigma_hat = R_bar / d2 (d2=2.326 para n=5). <strong>Cpk = min[(USL - xbar)/(3*sigma), (xbar - LSL)/(3*sigma)]</strong>. <strong>Regras de Nelson</strong> (1984) definem 8 padrees de OOC alem de pontos individuais fora dos limites: e.g. 8 pontos consecutivos do mesmo lado da CL (drift de processo), 6 pontos consecutivos crescentes/decrescentes (tendencia), 14 pontos alternando up/down (mistura de populacoes).
        </div>
        <div style={S.note}>
          <strong>CUSUM</strong> (Cumulative Sum) e <strong>EWMA</strong> (Exponentially Weighted Moving Average) detectam desvios de processo menores (+/- 0.5-1.5 sigma) mais rapidamente do que X-bar/R. CUSUM: C[i]+ = max(0, C[i-1]+ + (x[i] - mu0 - k)); alarme quando C[i]+ &gt; h (threshold). EWMA: z[i] = lambda*x[i] + (1-lambda)*z[i-1]; tipicamente lambda=0.2, L=3 (limites de controlo). Escolher CUSUM/EWMA quando processo tem drift gradual (desgaste de ferramenta, deriva de calibracao).
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. OEE — Overall Equipment Effectiveness e TPM</h2>
        <div style={S.diagram}><OEEBreakdownSVG /></div>
        <div style={S.highlight}>
          <strong>OEE = Disponibilidade x Performance x Qualidade</strong>. Calculo real: Disponibilidade = Tempo_productivo / Tempo_planeado; Performance = (Unidades_produzidas * Cycle_time_ideal) / Tempo_productivo; Qualidade = Unidades_boas / Unidades_produzidas. <strong>TEEP</strong> (Total Effective Equipment Performance) = OEE * Utilizacao_planeada — mede a eficiencia contra tempo total calendario (24/7). MTBF = Tempo_operacao_total / N_falhas; MTTR = Tempo_parado_total / N_reparacoes; Availability = MTBF / (MTBF + MTTR).
        </div>
        <div style={S.note}>
          <strong>TPM</strong> (Total Productive Maintenance, JIPMInstitute): 8 pilares: Autonomous Maintenance (operadores fazem inspecao diaria e lubrificacao), Planned Maintenance (PM baseado em MTBF), Focused Improvement (Kaizen grupos em perdas OEE), Early Equipment Management (design para zero-manutencao), Quality Maintenance (poka-yoke e SPC), Training, Safety Health Environment, Administrative TPM. Toyota Manufacturing kyoshou: OEE medio 92%, downtime nao planeado &lt;0.5%/mes.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. FMEA — Analise de Modos de Falha e Efeitos</h2>
        <div style={S.diagram}><FMEASvg /></div>
        <div style={S.highlight}>
          <strong>FMEA AIAG-VDA 2019</strong> substitui RPN pelo <strong>AP (Action Priority)</strong>: H (High) = accao imediata; M (Medium) = accao planeada; L (Low) = acompanhar. A logica e baseada em Severidade primeiro: se S=9-10, automaticamente H independente de O e D. <strong>DFMEA</strong> (Design FMEA) analisa modos de falha no design do produto; <strong>PFMEA</strong> (Process FMEA) analisa o processo de manufactura. Devem ser actualizados iterativamente durante o desenvolvimento (loop APQP — Advanced Product Quality Planning).
        </div>
        <div style={S.note}>
          <strong>Fault Tree Analysis (FTA)</strong> e o dual do FMEA: enquanto FMEA parte dos componentes para os efeitos (bottom-up), FTA parte do evento de topo (falha do sistema) e decompoe em causas (top-down). FTA usa AND/OR gates e permite calcular probabilidade de falha do sistema dado probabilidades de falha de componentes. Obrigatorio em aerospace (ARP4761) e nuclear.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Additive Manufacturing — DfAM e Parametros Criticos</h2>
        <div style={S.diagram}><AdditiveMfgSVG /></div>
        <div style={S.highlight}>
          <strong>DMLS/SLM Ti-6Al-4V</strong>: Energy Density = P / (v * h * t) [J/mm3], onde P=potencia laser (W), v=velocidade scan (mm/s), h=hatch spacing (mm), t=espessura camada (mm). Janela de processo: ED = 55-65 J/mm3. Abaixo: porosidade por lack-of-fusion (&gt;1%); acima: porosidade por keyhole e evaporacao de material. <strong>DfAM</strong> (Design for Additive Manufacturing): topologia optimizada (metodo SIMP: minimizar compliance dado volume), refrigeracao conformal (conforming cooling channels em moldes de injeccao — reducao de ciclo de 15-30%), estruturas lattice (BCC, FCC, Gyroid TPMS para peso/resistencia).
        </div>
        <div style={S.note}>
          <strong>WAAM</strong> (Wire Arc Additive Manufacturing) usa arco electrico para depositar arame metalico — taxa de deposicao 5-10 kg/h vs 0.1-0.3 kg/h do SLM. Indicado para estruturas grandes (fuselagem, propulsores navais). Precisao inferior (&gt;1mm) — requer maquinagem de acabamento. GKN Aerospace usa WAAM para nervuras de asa em Ti-6Al-4V: reducao de buy-to-fly ratio de 15:1 para 2:1 (vs maquinagem de bloco solido).
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. Benchmarks Digital Manufacturing</h2>
        <div style={S.grid3}>
          {[
            { title: 'GE Aviation — SLM Nozzles', stat: '+25% eficiencia', detail: 'LEAP fuel nozzle: 20 pecas fundidas -> 1 por DMLS. Peso -25%. 100k+ pecas/ano. Cost per nozzle -30%.' },
            { title: 'Bosch Stuttgart — SPC', stat: 'Cpk medio 1.89', detail: 'SPC em 3000 linhas com MES Opcenter. CUSUM em tempo real para desvios de <0.5 sigma. 450 OOCs/dia tratados.' },
            { title: 'Tesla Shanghai — OEE', stat: 'OEE 92%', detail: 'MES customizado com ML scheduling. Changeover <90min. 750k veiculos/ano. TPM autonomo por linha.' },
            { title: 'Airbus A350 Digital Thread', stat: '100% rastreabilidade', detail: 'Genealogy de cada rebite e peca. PLM Teamcenter + MES + MRO. Time-to-detect campo: horas vs semanas.' },
            { title: 'Rolls-Royce WAAM Blisks', stat: '-60% desperdicio', detail: 'Buy-to-fly ratio de 15:1 para 2.5:1 em discos de turbina Ti-6Al-4V. WAAM + maquinagem de acabamento CNC 5-eixos.' },
            { title: 'J&J Janssen Pharma', stat: '99.97% yield', detail: 'MES Opcenter com ISA-88 + ISA-95. FMEA AIAG-VDA em todos os processos criticos. FDA inspection ready at all times.' },
          ].map((b, i) => (
            <div key={i} style={{ ...S.card, borderLeft: `3px solid ${color}` }}>
              <div style={{ fontWeight: 700, color, marginBottom: '0.25rem', fontSize: '0.85rem' }}>{b.title}</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{b.stat}</div>
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
                            <li style={{marginBottom:"0.4rem"}}><strong>MES e ISA-95 — O Sistema Nervoso da Fabrica</strong> — MES (Manufacturing Execution System) conecta ERP com chão de fábrica, rastreando ordens de produção, materiais, qualidade e equipamento em tempo real; ISA-95 define o modelo de dados standard para integração MES-ERP — MESA International cataloga 11 funções core de MES.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>SPC — Statistical Process Control em Tempo Real</strong> — Cartas de controlo Shewhart (X̄-R, X̄-S) e CUSUM detectam desvios do processo; Western Electric Rules identificam padrões de instabilidade; implementação em tempo real com streaming data (Kafka + Flink) permite reacção em &lt;30s vs. horas no modelo tradicional.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>OEE — Overall Equipment Effectiveness e TPM</strong> — OEE = Disponibilidade × Performance × Qualidade; benchmark world-class é 85%; TPM (Total Productive Maintenance) estrutura manutenção preventiva e autónoma para maximizar OEE; IA prediz componentes de OEE em tempo real identificando oportunidades de melhoria.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>FMEA — Analise de Modos de Falha e Efeitos</strong> — FMEA identifica sistematicamente modos de falha potenciais, os seus efeitos e causas; RPN (Risk Priority Number) = Severity × Occurrence × Detection prioriza acções preventivas; DFMEA cobre design, PFMEA cobre processo de produção.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Additive Manufacturing — DfAM e Parametros Criticos</strong> — DfAM (Design for Additive Manufacturing) explora liberdade geométrica (lattices, topologia optimizada) impossível em subtractive manufacturing; parâmetros críticos: layer height, infill density, support structures e orientação de construção afectam resistência mecânica e acabamento.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Implementacao: SPC + OEE Engine em Python</strong> — pipeline: dados SCADA em Kafka → consumer Python → cálculo de OEE em janela deslizante de turno → cartas de controlo com alertas → dashboard Grafana → registo de eventos de não-qualidade em MES — arquitetura event-driven com latência &lt;5s.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Benchmarks Digital Manufacturing</strong> — Lighthouse Factories do WEF identificam as ~130 fábricas mais avançadas em Industry 4.0 globalmente; KPIs de referência: OEE &gt;85%, first-pass yield &gt;99%, lead time redução &gt;30%, custo de qualidade &lt;0.5% de vendas.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
