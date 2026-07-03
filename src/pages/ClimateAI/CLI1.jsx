import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './ClimateAI';

const m = modules[0];
const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  highlight: { background: `${color}12`, border: `1px solid ${color}30`, borderRadius: 8, padding: '0.9rem 1.1rem', marginTop: '0.8rem', fontSize: '0.93rem', color: 'var(--text-primary)', lineHeight: 1.7 },
  note: { background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 8, padding: '0.8rem 1rem', marginTop: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

export default function CLI1() {
  return (
    <div style={S.page}>
      <Link to="/climate-ai" style={S.back}>← Voltar ao curso</Link>
      <span style={S.badge}>MÓDULO {m.num}</span>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* ── SECTION 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Modelos Climáticos Globais (GCMs)</h2>
        <p style={S.p}>GCMs (General Circulation Models) são representações matemáticas do sistema climático dividido em componentes acoplados: atmosfera (equações de Navier-Stokes discretizadas), oceano (NEMO, MOM6), superfície terrestre (land surface models para vegetação, solo, hidrologia) e gelo marinho. Cada componente troca fluxos de calor, água e momento com os restantes a cada time-step.</p>
        <p style={S.p}>CMIP (Coupled Model Intercomparison Project) coordena experiências entre modelos de diferentes países — CMIP6 (2019) inclui mais de 100 modelos de 49 grupos científicos em todo o mundo. Os cenários SSP (Shared Socioeconomic Pathways) definem futuros alternativos: SSP1-2.6 (sustentabilidade, net-zero 2050), SSP2-4.5 (políticas intermédias), SSP3-7.0 (fragmentação regional), SSP5-8.5 (uso intensivo de combustíveis fósseis).</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 820 320" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <defs>
              <marker id="arr-cli1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
              </marker>
            </defs>
            <rect width="780" height="320" fill="var(--bg-secondary)" rx="10" />

            {/* === LEFT PANEL: Earth cross-section === */}
            <rect x="20" y="20" width="290" height="55" rx="6" fill="var(--bg-secondary)" />
            <rect x="20" y="20" width="290" height="55" rx="6" fill="rgba(249,115,22,0.18)" stroke="#f97316" strokeWidth="1.5" />
            <text x="165" y="40" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">ATMOSFERA</text>
            <text x="165" y="54" textAnchor="middle" fill="#fb923c" fontSize="8.5">Navier-Stokes · 30-90 camadas verticais</text>
            <text x="165" y="67" textAnchor="middle" fill="#fb923c" fontSize="8.5">Resolução: 25-100 km horizontal</text>

            <rect x="20" y="83" width="290" height="34" rx="4" fill="var(--bg-secondary)" />
            <rect x="20" y="83" width="290" height="34" rx="4" fill="rgba(249,115,22,0.10)" stroke="#fb923c" strokeWidth="1.2" />
            <text x="165" y="98" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">SUPERFÍCIE TERRESTRE</text>
            <text x="165" y="111" textAnchor="middle" fill="#fb923c" fontSize="8.5">Vegetação · Solo · Hidrologia</text>

            <rect x="20" y="125" width="290" height="26" rx="4" fill="var(--bg-secondary)" />
            <rect x="20" y="125" width="290" height="26" rx="4" fill="rgba(251,146,60,0.08)" stroke="#fb923c" strokeWidth="1" strokeDasharray="4 2" />
            <text x="165" y="142" textAnchor="middle" fill="#fb923c" fontSize="9.5" fontWeight="700">GELO MARINHO · Sea Ice</text>

            <rect x="20" y="159" width="290" height="55" rx="6" fill="var(--bg-secondary)" />
            <rect x="20" y="159" width="290" height="55" rx="6" fill="rgba(249,115,22,0.08)" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="165" y="179" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">OCEANO</text>
            <text x="165" y="193" textAnchor="middle" fill="#fb923c" fontSize="8.5">NEMO / MOM6 · 50+ camadas</text>
            <text x="165" y="206" textAnchor="middle" fill="#fb923c" fontSize="8.5">Circulação termohalina global</text>

            {/* Coupling arrows */}
            <line x1="373" y1="47" x2="373" y2="81" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-cli1)" />
            <text x="355" y="68" textAnchor="middle" fill="#f97316" fontSize="8">Calor</text>
            <line x1="373" y1="100" x2="373" y2="123" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-cli1)" />
            <text x="355" y="115" textAnchor="middle" fill="#f97316" fontSize="8">Água</text>
            <line x1="373" y1="152" x2="373" y2="175" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-cli1)" />
            <text x="345" y="160" textAnchor="middle" fill="#f97316" fontSize="8">Momento</text>

            {/* Resolution table */}
            <rect x="20" y="228" width="290" height="72" rx="6" fill="rgba(249,115,22,0.05)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="165" y="244" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="700">RESOLUÇÃO POR PROJECTO</text>
            <text x="30" y="260" fill="#fb923c" fontSize="9" opacity="0.6">CMIP5</text>
            <rect x="80" y="251" width="80" height="7" fill="#fb923c" rx="2" opacity="0.3" />
            <text x="166" y="260" fill="#fb923c" fontSize="9" opacity="0.6">100 km</text>
            <text x="30" y="276" fill="#f97316" fontSize="9">CMIP6</text>
            <rect x="80" y="267" width="45" height="7" fill="#f97316" rx="2" opacity="0.7" />
            <text x="130" y="276" fill="#f97316" fontSize="9">25-50 km</text>
            <text x="30" y="292" fill="#fbbf24" fontSize="9">HighResMIP</text>
            <rect x="95" y="283" width="16" height="7" fill="#fbbf24" rx="2" />
            <text x="116" y="292" fill="#fbbf24" fontSize="9">12 km</text>

            {/* === RIGHT PANEL: SSP bar chart === */}
            <g transform="translate(40,0)">
            <text x="560" y="22" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">ANOMALIA TEMP. 2100 (°C vs 1850–1900)</text>

            {/* Baseline y=170, scale: 30px per °C */}
            {[
              { label:'SSP1', sub:'2.6', val:1.8, c:'#fbbf24' },
              { label:'SSP2', sub:'4.5', val:2.7, c:'#fb923c' },
              { label:'SSP3', sub:'7.0', val:3.6, c:'#f97316' },
              { label:'SSP5', sub:'8.5', val:4.4, c:'#ea580c' },
            ].map((s, i) => {
              const bx = 390 + i * 52;
              const bh = Math.round(s.val * 30);
              const by = 170 - bh;
              return (
                <g key={i}>
                  <rect x={bx} y={by} width={36} height={bh} fill={s.c} rx="3" opacity="0.85" />
                  <text x={bx+18} y={by-5} textAnchor="middle" fill={s.c} fontSize="8.5" fontWeight="700">+{s.val}°C</text>
                  <text x={bx+18} y={183} textAnchor="middle" fill={s.c} fontSize="8">{s.label}</text>
                  <text x={bx+18} y={193} textAnchor="middle" fill={s.c} fontSize="7">{s.sub}</text>
                </g>
              );
            })}
            <line x1="375" y1="170" x2="610" y2="170" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="3 3" />
            <text x="372" y="173" textAnchor="end" fill="#fb923c" fontSize="7">0°C</text>
            <line x1="375" y1="110" x2="610" y2="110" stroke="#f97316" strokeWidth="0.8" strokeDasharray="4 2" opacity="0.5" />
            <text x="612" y="113" fill="#f97316" fontSize="7">2°C</text>

            {/* Keeling Curve */}
            <text x="490" y="218" textAnchor="middle" fill="#fb923c" fontSize="9.5" fontWeight="700">CO₂ ATMOSFÉRICO — KEELING CURVE</text>
            <line x1="375" y1="310" x2="610" y2="310" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="375" y1="225" x2="375" y2="310" stroke="var(--card-border)" strokeWidth="1" />
            <text x="372" y="229" textAnchor="end" fill="#fb923c" fontSize="7">425</text>
            <text x="372" y="270" textAnchor="end" fill="#fb923c" fontSize="7">370</text>
            <text x="372" y="310" textAnchor="end" fill="#fb923c" fontSize="7">315</text>
            <text x="377" y="318" fill="#fb923c" fontSize="7">1958</text>
            <text x="593" y="318" fill="#fb923c" fontSize="7">2024</text>
            <polyline
              points="375,310 395,306 410,301 425,296 440,290 455,283 468,275 480,267 492,259 505,251 518,243 530,236 543,230 556,227 569,225 583,224 596,223 609,222"
              fill="none" stroke="#f97316" strokeWidth="2" />
            <text x="611" y="222" fill="#f97316" fontSize="7">423 ppm</text>
            <text x="611" y="312" fill="#fb923c" fontSize="7">315 ppm</text>
            </g>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>Custo computacional:</strong> Os GCMs correm em supercomputadores — ECMWF usa 70.000 cores para previsão operacional. Uma simulação de 100 anos a 25 km de resolução requer cerca de 10 milhões de CPU-horas. Principal limitação: resolução de 25-100 km não capta fenómenos sub-grid (convecção, nuvens, turbulência de montanha).
        </div>
        <div style={S.note}>
          CMIP6 introduziu novos experimentos históricos e de cenário, melhor representação dos aerossóis e ciclo do carbono interactivo. A sensibilidade climática no CMIP6 aumentou para 2.6-5.1°C por duplicação de CO₂, superior ao CMIP5 (2.1-4.7°C), levantando questões sobre qual ensemble usar para planeamento de adaptação.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Neural Emulators e ML para Clima</h2>
        <p style={S.p}>Neural climate emulators substituem ou aceleram componentes custosos dos GCMs. FourCastNet (NVIDIA, 2022) baseia-se em Fourier Neural Operator, treina em ERA5 (reanalysis 1979-2018) e produz previsões globais a 45 km em 45 ms — cerca de 45.000x mais rápido que o ECMWF IFS operacional. GraphCast (Google DeepMind, 2023) usa uma GNN em grafo esférico de 1 milhão de nós e supera o ECMWF em 90% das variáveis a 10 dias.</p>
        <p style={S.p}>Pangu-Weather (Huawei, 2023) implementa um 3D Earth Transformer hierárquico com particular precisão em ciclones tropicais. ClimaX (Microsoft Research) é um foundation model climático pré-treinado em múltiplos datasets com diferentes variáveis, resoluções e timesteps — fine-tuning para downstream tasks com poucos dados.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 300" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="780" height="300" fill="var(--bg-secondary)" rx="10" />

            {/* === LEFT: Traditional GCM === */}
            <text x="170" y="24" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">GCM TRADICIONAL</text>

            {/* Physics box */}
            <rect x="30" y="35" width="280" height="50" fill="#c2410c" rx="6" />
            <text x="170" y="57" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="600">Equações físicas (Navier-Stokes)</text>
            <text x="170" y="73" textAnchor="middle" fill="#fff" fontSize="9" opacity="0.85">Discretizadas em grelha 3D global</text>

            {/* Arrow down */}
            <line x1="170" y1="85" x2="170" y2="110" stroke="rgba(249,115,22,0.3)" strokeWidth="2" markerEnd="url(#arr2)" />

            {/* HPC cluster */}
            <rect x="30" y="110" width="280" height="50" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" rx="6" />
            <text x="170" y="132" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="600">Supercomputador HPC</text>
            <text x="170" y="148" textAnchor="middle" fill="#fb923c" fontSize="9">70.000 cores · 10M CPU-horas / simulação</text>

            {/* Arrow down */}
            <line x1="170" y1="160" x2="170" y2="185" stroke="rgba(249,115,22,0.3)" strokeWidth="2" markerEnd="url(#arr2)" />

            {/* Output */}
            <rect x="50" y="185" width="240" height="40" fill="rgba(249,115,22,0.12)" stroke="#f59e0b" strokeWidth="1.5" rx="6" />
            <text x="170" y="203" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="600">Simulação 100 anos</text>
            <text x="170" y="218" textAnchor="middle" fill="#fb923c" fontSize="9">≈ 6 horas de tempo real</text>

            {/* === DIVIDER === */}
            <line x1="390" y1="20" x2="390" y2="260" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.4" />
            <text x="390" y="14" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">VS</text>

            {/* === RIGHT: Neural Emulator === */}
            <text x="590" y="24" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">NEURAL EMULATOR</text>

            {/* Training data */}
            <rect x="420" y="35" width="330" height="50" fill="#c2410c" rx="6" />
            <text x="585" y="57" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="600">Dados de treino ERA5 (1979-2018)</text>
            <text x="585" y="73" textAnchor="middle" fill="#fff" fontSize="9" opacity="0.85">5.8 TB · 721×1440 grelha · 37 níveis de pressão</text>

            {/* Arrow */}
            <line x1="585" y1="85" x2="585" y2="110" stroke="#f97316" strokeWidth="2" markerEnd="url(#arr3)" />

            {/* NN box */}
            <rect x="420" y="110" width="330" height="50" fill="rgba(249,115,22,0.08)" stroke="#fb923c" strokeWidth="1.2" rx="6" />
            <text x="585" y="130" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="600">Rede Neuronal: FNO / Transformer</text>
            <text x="585" y="148" textAnchor="middle" fill="#fb923c" fontSize="9">FourCastNet · GraphCast · Pangu-Weather · ClimaX</text>

            {/* Arrow */}
            <line x1="585" y1="160" x2="585" y2="185" stroke="#f97316" strokeWidth="2" markerEnd="url(#arr3)" />

            {/* Output */}
            <rect x="450" y="185" width="270" height="40" fill="#c2410c" rx="6" />
            <text x="585" y="203" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="600">Simulação 100 anos</text>
            <text x="585" y="218" textAnchor="middle" fill="#fff" fontSize="9" opacity="0.85">≈ 60 segundos · speedup 10.000-45.000x</text>

            {/* Speedup comparison */}
            <text x="390" y="268" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="700">SPEEDUP RELATIVO</text>
            <rect x="100" y="274" width="30" height="10" fill="rgba(249,115,22,0.08)" rx="2" />
            <text x="136" y="282" fill="rgba(249,115,22,0.6)" fontSize="8">GCM: 1x</text>
            <rect x="230" y="274" width="60" height="10" fill="#f97316" rx="2" opacity="0.7" />
            <text x="296" y="282" fill="#f97316" fontSize="8">GraphCast: 1000x</text>
            <rect x="420" y="274" width="120" height="10" fill="#f97316" rx="2" opacity="0.8" />
            <text x="546" y="282" fill="#f97316" fontSize="8">FourCastNet: 45.000x</text>

            <defs>
              <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="rgba(249,115,22,0.3)" />
              </marker>
              <marker id="arr3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>Limitações dos emuladores:</strong> falta de conservação de energia e massa física; extrapolação para condições fora da distribuição de treino (ex: +4°C de aquecimento) é não garantida; incerteza não calibrada. Investigação activa em physics-informed neural networks (PINNs) e energy-conserving architectures para mitigar estes problemas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Statistical Downscaling e Bias Correction</h2>
        <p style={S.p}>Downscaling resolve a discrepância entre a resolução dos GCMs (25-100 km) e a escala necessária para impactos locais (cidade, bacia hidrográfica, campo agrícola). Statistical downscaling usa relações estatísticas entre variáveis de larga escala (predictores GCM) e observações locais (predictandos). BCSD (Bias-Correction Spatial Disaggregation) é o método clássico: corrige o viés do modelo pela distribuição observada e depois faz disaggregação espacial — padrão em hidrologia nos EUA (programa CMIP Downscaling).</p>
        <p style={S.p}>Deep learning: DeepSD usa CNNs de super-resolução (inspirado em SRCNN para imagens) aplicado a campos de precipitação — capta efeitos orográficos que métodos estatísticos clássicos ignoram. CORDEX é o programa coordenado de downscaling dinâmico regional — modelos RCM (Regional Climate Models) em domínios regionais (Europa, África, Ásia) a 12-50 km de resolução.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 250" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <defs>
              <marker id="arr4" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#f97316" />
              </marker>
              <marker id="arr4b" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#fb923c" />
              </marker>
              <marker id="arr4c" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#f59e0b" />
              </marker>
            </defs>
            <rect width="780" height="250" fill="var(--bg-secondary)" rx="10" />

            {/* GCM Input box — y=25 height=175 to contain all 3 grid rows */}
            <rect x="12" y="25" width="130" height="175" fill="rgba(249,115,22,0.08)" stroke="var(--card-border)" strokeWidth="1" rx="7" />
            <text x="77" y="44" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="700">GCM Output</text>
            <text x="77" y="57" textAnchor="middle" fill="#f97316" fontSize="8">100 km grid</text>
            {[0,1,2,3].map(r => [0,1,2,3].map(c => (
              <rect key={`g${r}${c}`} x={20+c*28} y={68+r*28} width="24" height="22" fill="#f97316" opacity="0.3" stroke="#f97316" strokeWidth="0.5" rx="2" />
            )))}

            {/* Vertical branch line from GCM right edge */}
            <line x1="155" y1="62"  x2="155" y2="200" stroke="var(--card-border)" strokeWidth="1" />

            {/* 3 method boxes stacked — y=25,95,165, height=62 each, gap=8 */}
            {[
              { y: 25,  c: '#f97316', fill: 'rgba(249,115,22,0.15)', title: 'BCSD (Estatístico)', lines: ['1. Correcção quantil mensal','2. Desagregação espacial','3. Preserva distribuição obs.'] },
              { y: 95,  c: '#fb923c', fill: 'rgba(251,146,60,0.10)',  title: 'DeepSD (CNN)',       lines: ['Super-resolução 4-8x','Aprende efeitos orográficos','Input: DEM + GCM precip.'] },
              { y: 165, c: '#f59e0b', fill: 'rgba(245,158,11,0.10)',  title: 'CORDEX (Dinâmico)', lines: ['Modelo RCM regional 12-50km','Europa / África / Ásia','Mais custoso, mais realista'] },
            ].map((m, i) => (
              <g key={i}>
                <line x1="155" y1={m.y+31} x2="173" y2={m.y+31} stroke={m.c} strokeWidth="1" strokeDasharray="3 2" markerEnd={`url(#arr4${i===0?'':i===1?'b':'c'})`} />
                <rect x="175" y={m.y} width="210" height="62" rx="7" fill={m.fill} stroke={m.c} strokeWidth="1.3" />
                <text x="280" y={m.y+16} textAnchor="middle" fill={m.c} fontSize="9.5" fontWeight="700">{m.title}</text>
                {m.lines.map((l, j) => (
                  <text key={j} x="183" y={m.y+30+j*13} fill="#fb923c" fontSize="7.5" opacity="0.9">{l}</text>
                ))}
              </g>
            ))}

            {/* Arrow → High-Res Output (from center of methods, y=112 = center of middle box) */}
            <line x1="385" y1="112" x2="415" y2="112" stroke="#f97316" strokeWidth="2" markerEnd="url(#arr4)" />

            {/* Output box */}
            <rect x="415" y="35" width="175" height="155" rx="8" fill="#c2410c" />
            <text x="502" y="60" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">High-Resolution</text>
            <text x="502" y="76" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">Output</text>
            <text x="502" y="92" textAnchor="middle" fill="#fff" fontSize="8.5" opacity="0.85">1-5 km · capta orografia</text>
            {[0,1,2,3,4,5].map(r => [0,1,2,3,4,5,6,7].map(c => (
              <rect key={`f${r}${c}`} x={422+c*19} y={103+r*12} width="17" height="10" fill="#fff" opacity="0.15" rx="0.5" />
            )))}

            <text x="390" y="238" textAnchor="middle" fill="#fb923c" fontSize="8" opacity="0.7">Downscaling resolve 25-100km → 1-5km para impactos locais</text>
          </svg>
        </div>

        <div style={S.note}>
          Viés de precipitação nos GCMs: sistematicamente subestimam precipitação intensa e extremos. Correcção por quantile mapping ajusta a distribuição do modelo para corresponder à distribuição observada. Atenção: bias correction não corrige erros de padrão espacial ou temporal — apenas corrige a distribuição marginal.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Projecções Regionais e Incerteza</h2>
        <p style={S.p}>A incerteza nas projecções climáticas tem três fontes: variabilidade interna (caos climático natural — dominante a curto prazo, décadas 1-2), incerteza do modelo (diferentes parametrizações físicas — dominante a médio prazo), e incerteza de cenário (dependente de escolhas políticas — dominante após 2060). Ensemble de modelos: executar múltiplos GCMs com pequenas perturbações iniciais gera distribuição de possíveis futuros.</p>
        <p style={S.p}>Detecção e Atribuição: técnicas estatísticas para atribuir eventos extremos à mudança climática — "o calor desta vaga de calor tornou-se X vezes mais provável devido à mudança climática" (World Weather Attribution). Time of emergence: quando o sinal climático emerge da variabilidade natural — temperatura emerge cerca de 2020-2040, precipitação muito mais tarde.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 260" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="780" height="260" fill="var(--bg-secondary)" rx="10" />

            {/* === LEFT: Uncertainty cascade === */}
            <text x="220" y="22" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">CASCATA DE INCERTEZA</text>

            {/* Scenario uncertainty */}
            <rect x="20" y="35" width="400" height="38" fill="#f97316" rx="5" opacity="0.2" />
            <rect x="20" y="35" width="400" height="38" fill="none" stroke="#f97316" strokeWidth="1" rx="5" />
            <text x="30" y="52" fill="#f97316" fontSize="10" fontWeight="700">Incerteza de Cenário</text>
            <text x="30" y="66" fill="#fb923c" fontSize="9">Escolha SSP — dependente de políticas — dominante após 2060</text>

            {/* Model uncertainty */}
            <rect x="20" y="85" width="400" height="38" fill="#f59e0b" rx="5" opacity="0.2" />
            <rect x="20" y="85" width="400" height="38" fill="none" stroke="#f59e0b" strokeWidth="1" rx="5" />
            <text x="30" y="102" fill="#f59e0b" fontSize="10" fontWeight="700">Incerteza do Modelo</text>
            <text x="30" y="116" fill="#fbbf24" fontSize="9">Parametrizações físicas — 100+ GCMs diferentes — dominante 2040-2060</text>

            {/* Internal variability */}
            <rect x="20" y="135" width="400" height="38" fill="#f97316" rx="5" opacity="0.2" />
            <rect x="20" y="135" width="400" height="38" fill="none" stroke="#f97316" strokeWidth="1" rx="5" />
            <text x="30" y="152" fill="#f97316" fontSize="10" fontWeight="700">Variabilidade Interna</text>
            <text x="30" y="166" fill="#fb923c" fontSize="9">Caos climático natural (ENSO, NAO) — dominante décadas 1-2</text>

            {/* Plus signs */}
            <text x="225" y="82" textAnchor="middle" fill="#fb923c" fontSize="14">+</text>
            <text x="225" y="132" textAnchor="middle" fill="#fb923c" fontSize="14">+</text>

            {/* Total envelope */}
            <text x="225" y="196" textAnchor="middle" fill="#fb923c" fontSize="12">=</text>
            <rect x="50" y="205" width="350" height="42" fill="#f97316" rx="5" opacity="0.15" />
            <rect x="50" y="205" width="350" height="42" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="5,3" rx="5" />
            <text x="225" y="223" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Incerteza Total</text>
            <text x="225" y="238" textAnchor="middle" fill="#fb923c" fontSize="9">Envelope amplo — Ensemble multi-modelo (CMIP6)</text>

            {/* === RIGHT: Time of emergence === */}
            <text x="630" y="22" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">TIME OF EMERGENCE</text>

            {/* Axes */}
            <line x1="460" y1="220" x2="760" y2="220" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="460" y1="40" x2="460" y2="220" stroke="var(--card-border)" strokeWidth="1" />
            <text x="455" y="45" textAnchor="end" fill="rgba(249,115,22,0.6)" fontSize="8">+3°C</text>
            <text x="455" y="105" textAnchor="end" fill="rgba(249,115,22,0.6)" fontSize="8">+2°C</text>
            <text x="455" y="165" textAnchor="end" fill="rgba(249,115,22,0.6)" fontSize="8">+1°C</text>
            <text x="455" y="220" textAnchor="end" fill="rgba(249,115,22,0.6)" fontSize="8">0°C</text>
            <text x="462" y="232" fill="rgba(249,115,22,0.6)" fontSize="7">2020</text>
            <text x="570" y="232" fill="rgba(249,115,22,0.6)" fontSize="7">2040</text>
            <text x="680" y="232" fill="rgba(249,115,22,0.6)" fontSize="7">2060</text>
            <text x="745" y="232" fill="rgba(249,115,22,0.6)" fontSize="7">2100</text>

            {/* Variability noise band */}
            <polygon points="460,205 760,195 760,175 460,185" fill="var(--card-border)" opacity="0.4" />

            {/* Temperature signal */}
            <polyline points="460,218 510,215 560,208 610,195 660,178 710,155 760,130" fill="none" stroke="#f97316" strokeWidth="2" />

            {/* Temp emergence point */}
            <circle cx="560" cy="208" r="4" fill="#f97316" />
            <line x1="560" y1="208" x2="560" y2="232" stroke="#f97316" strokeWidth="1" strokeDasharray="2,2" />
            <text x="560" y="242" textAnchor="middle" fill="#f97316" fontSize="8">T emerge ~2035</text>

            {/* Precipitation signal (later) */}
            <polyline points="460,218 510,216 560,214 610,210 660,204 710,194 760,180" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,2" />

            {/* Precip emergence */}
            <circle cx="680" cy="202" r="3" fill="#f97316" />
            <text x="680" y="242" textAnchor="middle" fill="#f97316" fontSize="8">Precip ~2060</text>

            {/* Legend */}
            <line x1="465" y1="250" x2="490" y2="250" stroke="#f97316" strokeWidth="2" />
            <text x="495" y="254" fill="#f97316" fontSize="8">Temperatura</text>
            <line x1="565" y1="250" x2="590" y2="250" stroke="#f97316" strokeWidth="2" strokeDasharray="4,2" />
            <text x="595" y="254" fill="#f97316" fontSize="8">Precipitação</text>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>Ensemble spread para a Europa 2080-2100 (SSP5-8.5):</strong> aquecimento médio de +3.5°C com spread de +2°C a +5°C entre os 30 modelos CMIP6 — concordância alta em que haverá aquecimento, spread significativo na magnitude. Zonas mediterrâneas e árticas têm amplificação adicional (+1-2°C acima da média global).
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. IA para Monitorização Climática</h2>
        <p style={S.p}>Monitorização do sistema climático usa múltiplas fontes de observação integradas com ML. Sentinel-5P (Copernicus) monitoriza gases traço (CO₂, CH₄, NO₂, O₃) com resolução 3.5×5.5 km — detectou emissões de CH₄ de instalações de petróleo e gás negadas por operadores. GRACE-FO mede variações de gravidade para detectar perda de massa de gelo (a Gronelândia perde 280 Gt/ano). Argo é uma rede de 4000 flutuadores oceânicos que perfila temperatura e salinidade até 2000 m de profundidade.</p>
        <p style={S.p}>Detecção de metano: ML em imagens hiperespectrais de GHGSat e MethaneSAT para localizar super-emissores pontuais — responsáveis por cerca de 50% das emissões totais de CH₄ de origem humana. Carbon cycle ML: inversão de dados atmosféricos de CO₂ para inferir fontes e sumidouros — GEOS-Chem integrado com ML para acelerar inversões bayesianas.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 270" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="780" height="270" fill="var(--bg-secondary)" rx="10" />

            {/* Title */}
            <text x="390" y="22" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">PIPELINE DE OBSERVAÇÃO DO SISTEMA CLIMÁTICO</text>

            {/* === Sources (left) === */}
            {/* Sentinel-5P */}
            <rect x="15" y="40" width="130" height="52" fill="#c2410c" rx="6" />
            <text x="80" y="58" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">Sentinel-5P</text>
            <text x="80" y="72" textAnchor="middle" fill="#fff" fontSize="8">CO₂ · CH₄ · NO₂</text>
            <text x="80" y="84" textAnchor="middle" fill="#fbbf24" fontSize="7">3.5×5.5 km / pixel</text>

            {/* Landsat/MODIS */}
            <rect x="15" y="102" width="130" height="52" fill="#ea580c" rx="6" />
            <text x="80" y="120" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">Landsat / MODIS</text>
            <text x="80" y="134" textAnchor="middle" fill="#fff" fontSize="8">Cobertura terrestre</text>
            <text x="80" y="146" textAnchor="middle" fill="#fbbf24" fontSize="7">NDVI · desflorestação</text>

            {/* GRACE-FO */}
            <rect x="15" y="164" width="130" height="52" fill="#c2410c" rx="6" />
            <text x="80" y="182" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">GRACE-FO</text>
            <text x="80" y="196" textAnchor="middle" fill="#fff" fontSize="8">Gravimetria orbital</text>
            <text x="80" y="208" textAnchor="middle" fill="#fbbf24" fontSize="7">Gelo · água subterrânea</text>

            {/* Argo */}
            <rect x="15" y="226" width="130" height="36" fill="#ea580c" rx="6" />
            <text x="80" y="244" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">Argo Floats (4000)</text>
            <text x="80" y="256" textAnchor="middle" fill="#fbbf24" fontSize="7">T · S até 2000m · oceano</text>

            {/* Arrows to fusion */}
            {[66, 128, 190, 244].map((y, i) => (
              <line key={i} x1="145" y1={y} x2="215" y2="155" stroke="var(--card-border)" strokeWidth="1.2" />
            ))}

            {/* Data Fusion box */}
            <rect x="215" y="120" width="140" height="70" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" rx="8" />
            <text x="285" y="145" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Data Fusion</text>
            <text x="285" y="160" textAnchor="middle" fill="#fb923c" fontSize="8">Harmonização</text>
            <text x="285" y="174" textAnchor="middle" fill="#fb923c" fontSize="8">Grid comum · QC</text>

            {/* Arrow to ML */}
            <line x1="355" y1="155" x2="405" y2="155" stroke="#f97316" strokeWidth="2" markerEnd="url(#arr5)" />

            {/* ML Analysis */}
            <rect x="405" y="115" width="150" height="80" fill="#c2410c" rx="8" />
            <text x="480" y="140" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">ML Analysis</text>
            <text x="480" y="156" textAnchor="middle" fill="#fff" fontSize="8">CNN detecção CH₄</text>
            <text x="480" y="170" textAnchor="middle" fill="#fff" fontSize="8">GNN inversão carbono</text>
            <text x="480" y="184" textAnchor="middle" fill="#fff" fontSize="8">Anomaly detection</text>

            {/* Arrow to dashboard */}
            <line x1="555" y1="155" x2="605" y2="155" stroke="#f97316" strokeWidth="2" markerEnd="url(#arr5)" />

            {/* Dashboard indicators */}
            <rect x="605" y="40" width="160" height="220" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" rx="8" />
            <text x="685" y="60" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">INDICADORES CLIMÁTICOS</text>

            <rect x="615" y="70" width="140" height="32" fill="#c2410c" rx="5" />
            <text x="685" y="84" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">CO₂ Atmosférico</text>
            <text x="685" y="97" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="800">423 ppm</text>

            <rect x="615" y="112" width="140" height="32" fill="#ea580c" rx="5" />
            <text x="685" y="126" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">Extensão Gelo Ártico</text>
            <text x="685" y="139" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="800">4.9 M km²</text>

            <rect x="615" y="154" width="140" height="32" fill="#c2410c" rx="5" />
            <text x="685" y="168" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">Anomalia Temp. Global</text>
            <text x="685" y="181" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="800">+1.45°C</text>

            <rect x="615" y="196" width="140" height="32" fill="#ea580c" rx="5" />
            <text x="685" y="210" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">Subida Nível do Mar</text>
            <text x="685" y="223" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="800">+3.6 mm/ano</text>

            <defs>
              <marker id="arr5" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>MethaneSAT (EDF, 2024):</strong> satélite dedicado à monitorização de CH₄ com resolução 100m — ML processa imagens hiperespectrais para localizar super-emissores pontuais em tempo quasi-real. Combinado com TROPOMI (Sentinel-5P), permite cobertura global com verificação independente de inventários nacionais de emissões reportados à UNFCCC.
        </div>
        <div style={S.note}>
          A integração de múltiplas fontes de observação com ML está a transformar o sistema de monitorização global do clima — de observações esparsas e irregulares para campos contínuos e calibrados. Isto é fundamental para a verificação dos compromissos de redução de emissões (NDCs) do Acordo de Paris e para detectar pontos de viragem do sistema climático em tempo real.
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Modelos Climáticos Globais (GCMs)</strong> — GCMs dividem a atmosfera, oceano e superfície terrestre em grelhas de 100km e resolvem equações de Navier-Stokes para simular o clima; são computacionalmente intensivos mas a única ferramenta para projecções centenárias de temperatura e precipitação.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Neural Emulators e ML para Clima</strong> — emuladores neurais (Pangu-Weather, GraphCast, FourCastNet) aprendem a mapear estado atmosférico t→t+Δt 1000× mais rápido que GCMs; GraphCast (DeepMind) bate o ECMWF em previsão de 10 dias — revolução em previsão meteorológica.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Statistical Downscaling e Bias Correction</strong> — GCMs operam a 100km mas aplicações locais requerem resolução de 1–10km; downscaling estatístico (BCSD, ISIMIP) e deep learning (SRGAN climático) aumentam a resolução; bias correction remove erros sistemáticos dos modelos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Projecções Regionais e Incerteza</strong> — projecções climáticas regionais combinam múltiplos GCMs (CMIP6) com cenários de emissões (SSP1-1.9 a SSP5-8.5); quantificação de incerteza via ensemble é essencial para planeamento de adaptação com horizonte de 30–80 anos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>IA para Monitorização Climática</strong> — satélites Sentinel, MODIS e Landsat fornecem observações diárias; modelos de visão classificam cobertura de nuvens, gelo marino e vegetação; detecção de anomalias identifica eventos extremos (fogos, inundações) em tempo quasi-real.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
