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
  formula: { background: '#1e293b', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem 1rem', marginTop: '0.75rem', fontFamily: 'monospace', fontSize: '0.9rem', color: '#f8fafc', textAlign: 'center' },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  grid3: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.85rem' },
};

function FaultFrequenciesSVG() {
  const C = '#e2e8f0', O = '#f97316', LO = '#fb923c';
  const fs = 11;
  // Frac: renders a fraction centered at cx, vinculum at vy
  const Frac = ({ cx, vy, num, den, fw = '400', fc = C }) => {
    const hw = Math.max(num.length, den.length) * 6 + 4;
    return (
      <g>
        <text x={cx} y={vy - 3} textAnchor="middle" fontFamily="monospace" fontSize={fs} fill={fc} fontWeight={fw}>{num}</text>
        <line x1={cx - hw} y1={vy + 2} x2={cx + hw} y2={vy + 2} stroke={C} strokeWidth="0.9" />
        <text x={cx} y={vy + 14} textAnchor="middle" fontFamily="monospace" fontSize={fs} fill={fc} fontWeight={fw}>{den}</text>
      </g>
    );
  };
  // Sub: inline subscript
  const T = ({ x, y, v, fill = C, fw = '400', sub, sup }) => (
    <g>
      <text x={x} y={y} fontFamily="monospace" fontSize={fs} fill={fill} fontWeight={fw}>{v}</text>
      {sub && <text x={x + v.length * 6.5} y={y + 4} fontFamily="monospace" fontSize="8" fill={fill}>{sub}</text>}
      {sup && <text x={x + v.length * 6.5} y={y - 5} fontFamily="monospace" fontSize="8" fill={fill}>{sup}</text>}
    </g>
  );

  const rowH = 54, rowStart = 44;
  const labels = ['BPFO','BPFI','BSF','FTF','GMF'];
  const descs = [
    'Ball Pass Frequency Outer race — defeito na pista exterior',
    'Ball Pass Frequency Inner race — defeito na pista interior',
    'Ball Spin Frequency — defeito na esfera',
    'Fundamental Train Frequency — defeito na gaiola',
    'Gear Mesh Frequency — defeito de engrenagem',
  ];

  return (
    <svg viewBox="0 0 560 340" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="340" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={17} textAnchor="middle" fill={LO} fontSize="11" fontWeight="700">Frequências de Falha — Rolamentos e Engrenagens</text>
      <text x={280} y={30} textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">n = nº esferas  ·  f<tspan dy="2" fontSize="7">r</tspan><tspan dy="-2"> = freq. rotação (Hz)  ·  d = diâm. esfera  ·  D = diâm. primitivo  ·  α = ângulo contacto</tspan></text>

      {labels.map((name, i) => {
        const y = rowStart + i * rowH;
        const vy = y + rowH / 2 - 4;
        const ty = vy + 4;
        return (
          <g key={i}>
            <rect x="8" y={y + 2} width="80" height={rowH - 4} fill={O} rx="4" fillOpacity="0.18" />
            <rect x="8" y={y + 2} width="80" height={rowH - 4} fill="none" stroke={O} strokeWidth="1" rx="4" />
            <text x={48} y={y + rowH / 2 + 6} textAnchor="middle" fill={O} fontSize="13" fontWeight="800">{name}</text>
            <text x={98} y={y + rowH - 5} fill="var(--text-secondary)" fontSize="8">{descs[i]}</text>
          </g>
        );
      })}

      {/* BPFO: n/2 × f_r × (1 − d/D × cos α) */}
      {(() => { const vy = rowStart + 0 * rowH + rowH / 2 - 4; const ty = vy + 4; return (
        <g>
          <Frac cx={113} vy={vy} num="n" den="2" fc={O} fw="700" />
          <text x={126} y={ty} fontFamily="monospace" fontSize={fs} fill={C}> × f</text>
          <text x={149} y={ty + 4} fontFamily="monospace" fontSize="8" fill={C}>r</text>
          <text x={156} y={ty} fontFamily="monospace" fontSize={fs} fill={C}> × (1 − </text>
          <Frac cx={220} vy={vy} num="d" den="D" fc={O} fw="700" />
          <text x={232} y={ty} fontFamily="monospace" fontSize={fs} fill={C}> × cos α)</text>
        </g>
      ); })()}

      {/* BPFI: n/2 × f_r × (1 + d/D × cos α) */}
      {(() => { const vy = rowStart + 1 * rowH + rowH / 2 - 4; const ty = vy + 4; return (
        <g>
          <Frac cx={113} vy={vy} num="n" den="2" fc={O} fw="700" />
          <text x={126} y={ty} fontFamily="monospace" fontSize={fs} fill={C}> × f</text>
          <text x={149} y={ty + 4} fontFamily="monospace" fontSize="8" fill={C}>r</text>
          <text x={156} y={ty} fontFamily="monospace" fontSize={fs} fill={C}> × (1 + </text>
          <Frac cx={220} vy={vy} num="d" den="D" fc={O} fw="700" />
          <text x={232} y={ty} fontFamily="monospace" fontSize={fs} fill={C}> × cos α)</text>
        </g>
      ); })()}

      {/* BSF: D/(2d) × f_r × [1 − (d/D × cos α)²] */}
      {(() => { const vy = rowStart + 2 * rowH + rowH / 2 - 4; const ty = vy + 4; return (
        <g>
          <Frac cx={115} vy={vy} num="D" den="2d" fc={O} fw="700" />
          <text x={132} y={ty} fontFamily="monospace" fontSize={fs} fill={C}> × f</text>
          <text x={155} y={ty + 4} fontFamily="monospace" fontSize="8" fill={C}>r</text>
          <text x={162} y={ty} fontFamily="monospace" fontSize={fs} fill={C}> × [1 − (</text>
          <Frac cx={232} vy={vy} num="d" den="D" fc={O} fw="700" />
          <text x={244} y={ty} fontFamily="monospace" fontSize={fs} fill={C}> × cos α)</text>
          <text x={306} y={ty - 5} fontFamily="monospace" fontSize="9" fill={C}>2</text>
          <text x={312} y={ty} fontFamily="monospace" fontSize={fs} fill={C}>]</text>
        </g>
      ); })()}

      {/* FTF: f_r/2 × (1 − d/D × cos α) */}
      {(() => { const vy = rowStart + 3 * rowH + rowH / 2 - 4; const ty = vy + 4; return (
        <g>
          <text x={98} y={vy - 3} fontFamily="monospace" fontSize={fs} fill={C}>f</text>
          <text x={105} y={vy} fontFamily="monospace" fontSize="8" fill={C}>r</text>
          <line x1={98} y1={vy + 2} x2={120} y2={vy + 2} stroke={C} strokeWidth="0.9" />
          <text x={104} y={vy + 14} fontFamily="monospace" fontSize={fs} fill={C}>2</text>
          <text x={124} y={ty} fontFamily="monospace" fontSize={fs} fill={C}> × (1 − </text>
          <Frac cx={196} vy={vy} num="d" den="D" fc={O} fw="700" />
          <text x={208} y={ty} fontFamily="monospace" fontSize={fs} fill={C}> × cos α)</text>
        </g>
      ); })()}

      {/* GMF: N_dentes × f_r */}
      {(() => { const vy = rowStart + 4 * rowH + rowH / 2 - 4; const ty = vy + 4; return (
        <g>
          <text x={98} y={ty} fontFamily="monospace" fontSize={fs} fill={O} fontWeight="700">N</text>
          <text x={106} y={ty + 4} fontFamily="monospace" fontSize="8" fill={O}>dentes</text>
          <text x={146} y={ty} fontFamily="monospace" fontSize={fs} fill={C}> × f</text>
          <text x={169} y={ty + 4} fontFamily="monospace" fontSize="8" fill={C}>r</text>
        </g>
      ); })()}

      <text x={280} y={328} textAnchor="middle" fill={LO} fontSize="8.5">Exemplo NU310: f<tspan dy="2" fontSize="7">r</tspan><tspan dy="-2">=25 Hz, n=9, d=7.94 mm, D=38.5 mm, α=0° → BPFO = 104.6 Hz</tspan></text>
    </svg>
  );
}

function FFTEnvelopeSVG() {
  const W = 560, H = 205;
  const freqs = [10, 25, 50, 75, 104.6, 150, 209.2, 300, 313.8, 400];
  const labels = ['1x', '2.5x', '5x', '7.5x', 'BPFO', '14x', '2xBPFO', '28x', '3xBPFO', '38x'];
  const norm  = [0.82, 0.28, 0.92, 0.18, 0.12, 0.14, 0.08, 0.10, 0.06, 0.05];
  const fault = [0.82, 0.28, 0.92, 0.18, 0.88, 0.14, 0.72, 0.10, 0.55, 0.05];
  const xS = (f) => 45 + (f / 420) * 490;
  const yS = (a) => 155 - a * 110;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', borderRadius: 8 }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">FFT Spectrum — Normal vs Defeito BPFO em Rolamento NU310</text>
      <line x1="45" y1="155" x2="535" y2="155" stroke="var(--card-border)" strokeWidth="1" />
      <line x1="45" y1="35" x2="45" y2="155" stroke="var(--card-border)" strokeWidth="1" />
      {freqs.map((f, i) => {
        const x = xS(f);
        return (
          <g key={i}>
            <line x1={x - 3} y1={yS(norm[i])} x2={x - 3} y2={155} stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
            <line x1={x + 4} y1={yS(fault[i])} x2={x + 4} y2={155} stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
            <text x={x} y={170} textAnchor="middle" fill={labels[i].includes('BPFO') ? '#f97316' : 'var(--text-secondary)'} fontSize="7.5" fontWeight={labels[i].includes('BPFO') ? '700' : '400'}>{labels[i]}</text>
          </g>
        );
      })}
      <rect x={350} y={24} width={10} height={8} fill="#fbbf24" rx="1" />
      <text x={364} y={32} fill="#fbbf24" fontSize="9">Normal</text>
      <rect x={410} y={24} width={10} height={8} fill="#f97316" rx="1" />
      <text x={424} y={32} fill="#f97316" fontSize="9">Defeito BPFO</text>
      <text x={28} y={40} fill="#fb923c" fontSize="8" textAnchor="middle">g</text>
      <text x={290} y={190} textAnchor="middle" fill="#fb923c" fontSize="9">Frequencia (Hz)</text>
      <text x={280} y={202} textAnchor="middle" fill="#fb923c" fontSize="8.5">Harmonicos de BPFO (104.6 Hz) amplificados. Envelope analysis detecta 3-6 semanas antes da FFT directa.</text>
    </svg>
  );
}

function RULCurveSVG() {
  const W = 560, H = 200;
  const data = [
    1.0,0.99,0.98,0.98,0.97,0.97,0.96,0.96,0.95,0.95,
    0.94,0.93,0.93,0.92,0.91,0.90,0.89,0.88,0.87,0.86,
    0.84,0.82,0.79,0.75,0.70,0.63,0.54,0.43,0.30,0.15
  ];
  const xS = (i) => 40 + i * 16;
  const yS = (v) => 155 - v * 110;
  const path = data.map((v, i) => `${i===0?'M':'L'}${xS(i)},${yS(v)}`).join(' ');
  const hiPath = data.map((v, i) => `${i===0?'M':'L'}${xS(i)},${yS(Math.min(v + 0.08, 1))}`).join(' ');
  const loPath = data.map((v, i) => `${i===0?'M':'L'}${xS(i)},${yS(Math.max(v - 0.08, 0))}`).join(' ') + ` L${xS(29)},${yS(Math.max(data[29]-0.08,0))}`;
  const pIdx = 22;
  const fIdx = 29;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', borderRadius: 8 }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Curva P-F e Health Index com Intervalo de Confianca 90%</text>
      <line x1="40" y1="155" x2="515" y2="155" stroke="var(--card-border)" strokeWidth="1" />
      <line x1="40" y1="35" x2="40" y2="155" stroke="var(--card-border)" strokeWidth="1" />
      {/* CI band */}
      <path d={`${hiPath} L${xS(29)},${yS(Math.max(data[29]-0.08,0))} ${data.slice().reverse().map((v,i)=>`L${xS(29-i)},${yS(Math.max(v-0.08,0))}`).join(' ')}`} fill="#f97316" opacity="0.12" />
      {/* Threshold */}
      <line x1="40" y1={yS(0.3)} x2="515" y2={yS(0.3)} stroke="#f97316" strokeDasharray="6,3" strokeWidth="1.5" />
      <text x={520} y={yS(0.3)+4} fill="#f97316" fontSize="9">Threshold (HI=0.3)</text>
      {/* Main line */}
      <path d={path} fill="none" stroke="#f97316" strokeWidth="2.5" />
      {/* P and F markers */}
      <line x1={xS(pIdx)} y1="35" x2={xS(pIdx)} y2="155" stroke="#eab308" strokeDasharray="5,3" strokeWidth="1.5" />
      <text x={xS(pIdx)+3} y={50} fill="#eab308" fontSize="9" fontWeight="700">P (deteccao)</text>
      <line x1={xS(fIdx)} y1="35" x2={xS(fIdx)} y2="155" stroke="#f97316" strokeDasharray="5,3" strokeWidth="1.5" />
      <text x={xS(fIdx)+3} y={50} fill="#f97316" fontSize="9" fontWeight="700">F (falha)</text>
      {/* Janela PdM */}
      <rect x={xS(pIdx)} y="55" width={xS(fIdx)-xS(pIdx)} height={85} fill="#eab308" opacity="0.06" />
      <text x={(xS(pIdx)+xS(fIdx))/2} y={100} textAnchor="middle" fill="#eab308" fontSize="9">Janela PdM</text>
      <text x={30} y={45} fill="#fb923c" fontSize="8" textAnchor="middle">HI</text>
      <text x={280} y={193} textAnchor="middle" fill="#fb923c" fontSize="9">Tempo (ciclos/dias)</text>
    </svg>
  );
}

function MLCompareSVG() {
  const models = [
    { name: 'Naive (Last value)', rmse: 31.2, score: 2450, color: '#fb923c' },
    { name: 'IsolationForest', rmse: 18.4, score: 1820, color: '#fb923c' },
    { name: 'Random Forest', rmse: 12.3, score: 980, color: '#f97316' },
    { name: 'LSTM (seq2seq)', rmse: 8.1, score: 620, color: '#f97316' },
    { name: 'XGBoost + stat features', rmse: 9.3, score: 710, color: '#f97316' },
    { name: 'Transformer PdM (2024)', rmse: 6.2, score: 480, color: '#f97316' },
  ];
  const maxRmse = 35;
  return (
    <svg viewBox="0 0 560 220" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="220" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={17} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Modelos ML — NASA C-MAPSS FD001 (RUL prediction, RMSE em ciclos)</text>
      {models.map((m, i) => {
        const y = 28 + i * 30;
        const barW = (m.rmse / maxRmse) * 280;
        return (
          <g key={i}>
            <text x={165} y={y + 16} textAnchor="end" fill={m.color} fontSize="10" fontWeight="700">{m.name}</text>
            <rect x={170} y={y + 4} width={barW} height={18} fill={m.color} rx="3" opacity="0.8" />
            <text x={175 + barW} y={y + 16} fill="#e2e8f0" fontSize="10">RMSE {m.rmse} | NASA Score {m.score}</text>
          </g>
        );
      })}
      <text x={290} y={216} textAnchor="middle" fill="#fb923c" fontSize="9">NASA Score penaliza predicoes tardias (falha iminente nao detectada) mais do que antecipadas </text>
    </svg>
  );
}

function PHMFrameworkSVG() {
  const steps = [
    { label: 'Data\nAcquisition', sub: '10 kHz accel\nTemperatura, I', color: '#f97316' },
    { label: 'Signal\nProcessing', sub: 'FFT, Envelope\nWavelet DWT', color: '#f97316' },
    { label: 'Feature\nExtraction', sub: 'RMS, Kurtosis\nBPFO power', color: '#f97316' },
    { label: 'Health\nIndex', sub: 'Fusion multi-\nsensor HI [0,1]', color: '#f97316' },
    { label: 'RUL\nPrediction', sub: 'LSTM / Transf.\nCI 90%', color: '#f97316' },
    { label: 'Decision\n& Action', sub: 'Alert, Schedule\nMaintenance', color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 130" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="130" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={15} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">PHM Framework (ISO 13374) — Da Aquisicao a Decisao</text>
      {steps.map((s, i) => {
        const x = 10 + i * 90;
        const lines = s.label.split('\n');
        const subLines = s.sub.split('\n');
        return (
          <g key={i}>
            <rect x={x + 2} y={22} width={80} height={72} fill={s.color} rx="6" opacity="0.14" />
            <rect x={x + 2} y={22} width={80} height={72} fill="none" stroke={s.color} strokeWidth="1.5" rx="6" />
            {lines.map((l, li) => (
              <text key={li} x={x + 42} y={42 + li * 13} textAnchor="middle" fill={s.color} fontSize="10" fontWeight="700">{l}</text>
            ))}
            {subLines.map((l, li) => (
              <text key={li} x={x + 42} y={70 + li * 12} textAnchor="middle" fill="#fb923c" fontSize="8.5">{l}</text>
            ))}
            {i < steps.length - 1 && (
              <text x={x + 87} y={60} fill="#fb923c" fontSize="16">&#8594;</text>
            )}
          </g>
        );
      })}
      <text x={280} y={122} textAnchor="middle" fill="#fb923c" fontSize="9">ISO 13374: Data Acquisition (DA) -- Signal Processing (SP) -- Condition Monitoring (CM) -- Health Assessment (HA) -- Prognostics (P) -- Advisory (A)</text>
    </svg>
  );
}

export default function IND2() {
  const mod = modules[1];
  return (
    <div style={S.page}>
      <Link to="/industry40" style={S.back}>← Industry 4.0</Link>
      <div style={S.badge}>MÓDULO 02</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Frequencias de Falha — Rolamentos e Engrenagens</h2>
        <div style={S.diagram}><FaultFrequenciesSVG /></div>
        <div style={S.highlight}>
          Cada modo de falha em rolamento tem uma frequencia assinatura derivada da geometria: <strong>BPFO</strong> ocorre quando uma esfera defeituosa passa pela pista exterior — gera impulsos a essa frequencia. Com 9 esferas, f_r=25 Hz, BPFO=104.6 Hz. A deteccao e feita no espectro de envelope (demodulacao de amplitude) que amplifica a assinatura 15-20 dB acima do ruido vs FFT directa.
        </div>
        <div style={S.note}>
          <strong>ISO 10816-3</strong> define zonas de severidade por velocidade RMS (mm/s): Zona A (&lt;2.3, novo/bom), B (2.3-4.5, operacao longa aceitavel), C (4.5-7.1, operacao temporaria), D (&gt;7.1, vibracoes destrutivas). O <strong>kurtosis</strong> (momento estatistico de 4a ordem) detecta impactos periodicos antes de aparecerem no RMS: valor tipico em operacao normal = 3; defeito inicial = 5-8; defeito avancado = 15-30.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Analise FFT e Envelope Analysis</h2>
        <div style={S.diagram}><FFTEnvelopeSVG /></div>
        <div style={S.highlight}>
          <strong>Envelope Analysis</strong> (Demodulacao de Amplitude): 1) Filtro passa-banda em torno da frequencia de ressonancia estrutural do rolamento (~2-10 kHz, identificada por bump test); 2) Rectificacao do sinal filtrado (|x(t)|); 3) Filtro passa-baixo; 4) FFT do envelope resultante. Os harmonicos de BPFO aparecem com SNR 15-20 dB superior vs FFT directa. Detecta defeitos 3-6 semanas antes da FFT.
        </div>
        <div style={S.note}>
          <strong>Wavelet Packet Decomposition</strong> (WPD) e superior ao envelope em sinais nao-estacionarios (velocidade variavel). Decompoe o sinal em sub-bandas de resolucao tempo-frequencia adaptativa usando familias de wavelets (Daubechies db4, Symlet sym8). A energia de cada sub-banda e uma feature para ML. Especialmente util em turbinas eolicas com variacao continua de RPM.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Health Index e Curva P-F — RUL Estimation</h2>
        <div style={S.diagram}><RULCurveSVG /></div>
        <div style={S.highlight}>
          O <strong>Health Index (HI)</strong> e um escalar normalizado [0, 1] que funde multiplos sensores (vibracao, temperatura, corrente, acustica) numa unica metrica de saude. Fusao tipica: HI = w1*RMS_norm + w2*Kurt_norm + w3*T_norm, com pesos treinados por regressao ou redes neurais. A <strong>Curva P-F</strong> define: P (ponto de deteccao da falha potencial) e F (falha funcional). A janela P-F determina a janela disponivel para planear manutencao. Rolamentos: janela tipica de 1-9 semanas; motores: 4-16 semanas.
        </div>
        <div style={S.note}>
          <strong>RUL = E[T_fail - t_now | HI(t_now)]</strong>. Modelos probabilisticos: Processos de Wiener (degradacao linear com ruido gaussiano) e Processos Gamma (degradacao monotona crescente). Redes neurais: LSTM seq2seq com saida de distribuicao (mu, sigma) em vez de ponto unico — fornece intervalo de confianca para planear janela de manutencao com margem de seguranca.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. PHM Framework — Da Aquisicao a Decisao (ISO 13374)</h2>
        <div style={S.diagram}><PHMFrameworkSVG /></div>
        <div style={S.highlight}>
          <strong>ISO 13374</strong> define 6 blocos funcionais para sistemas de condition monitoring. O bloco de Prognostics (P) distingue PdM de CM simples: enquanto CM deteta anomalias presentes, Prognostics estima RUL futuro com incerteza quantificada. A saida do Advisory (A) deve incluir: RUL estimado, intervalo de confianca, accao recomendada (substituir agora, monitorizar mais, ou adiar), e custo estimado de cada opcao.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Comparacao de Modelos ML — NASA C-MAPSS</h2>
        <div style={S.diagram}><MLCompareSVG /></div>
        <div style={S.highlight}>
          <strong>NASA C-MAPSS</strong> (Commercial Modular Aero-Propulsion System Simulation) simula degradacao de motores turbofan. FD001: 100 motores de treino, 100 de teste, 1 condicao de operacao, 1 modo de falha. Features: 21 sensores (temperatura, pressao, velocidade). <strong>Transformer PdM</strong> (2024) usa atencion multi-head com janela de 30 ciclos e positional encoding temporal — supera LSTM em 23% de RMSE gracias a captura de dependencias de longo alcance.
        </div>
        <div style={S.note}>
          <strong>NASA Score assimetrico</strong>: para predicoes antecipadas (RUL_pred &gt; RUL_real): score = exp(RUL_pred/13) - 1; para predicoes tardias (RUL_pred &lt; RUL_real): score = exp(-RUL_pred/10) - 1. Penaliza 2.6x mais deixar o motor degradar sem deteccao do que fazer manutencao desnecessaria. Simula custo real industrial.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. Benchmarks e Casos Reais</h2>
        <div style={S.grid3}>
          {[
            { title: 'SKF Remote Monitoring', stat: '97% precisao', detail: '1M+ sensores globais. Alert 3.2 semanas antes de falha media. SaaS: $15/sensor/mes. ROI tipico 8:1.' },
            { title: 'Bosch Stuttgart — Motores', stat: '-40% manutencao', detail: 'ML em 3000 motores. BPFO envelope alerting. Zero paragens nao planeadas em linha critica em 2023.' },
            { title: 'Airbus A320 Landing Gear', stat: 'RMSE 8.3 ciclos', detail: 'LSTM sensor fusion (vibracao + pressao + temperatura). Certificado EASA para MOC. 1200 aeronaves monitoradas.' },
            { title: 'ArcelorMittal Laminagem', stat: '-31% downtime', detail: 'FFT envelope em rolos de laminagem 2.5 MW. Kurtosis alerting evitou 2 quebras catastroficas/ano.' },
            { title: 'Siemens Wind Turbines', stat: '-28% O&M cost', detail: 'WPD + LSTM em 5000 turbinas offshore. RUL de caixa de velocidades com 6 semanas de antecipacao.' },
            { title: 'GE Aviation LEAP Engine', stat: 'RUL 50 ciclos prec.', detail: 'Transformer PdM em 21 sensores por motor. Scheduling de MRO optimizado reduz AOG (Aircraft on Ground) 22%.' },
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
                            <li style={{marginBottom:"0.4rem"}}><strong>Frequencias de Falha — Rolamentos e Engrenagens</strong> — defeitos em rolamentos geram frequências características (BPFI, BPFO, BSF) calculáveis a partir da geometria; engrenagens geram GMF (gear mesh frequency); análise espectral detecta estes padrões décadas antes da falha catastrófica.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Analise FFT e Envelope Analysis</strong> — FFT transforma sinal de vibração do tempo para frequência, revelando harmónicos de falha; Envelope Analysis (demodulação de amplitude) é mais sensível a defeitos incipientes em rolamentos onde a FFT falha por baixa energia espectral.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Health Index e Curva P-F — RUL Estimation</strong> — a curva P-F define o intervalo entre detecção potencial (P) e falha funcional (F) — janela para manutenção preditiva; Health Index comprime múltiplas features numa métrica 0–1 de degradação; RUL (Remaining Useful Life) é previsto por LSTMs ou modelos de sobrevivência.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>PHM Framework — Da Aquisicao a Decisao (ISO 13374)</strong> — ISO 13374 estrutura PHM em 6 etapas: aquisição, manipulação, detecção de estado, avaliação de saúde, prognóstico e recomendação; garante que dados brutos de sensores se transformam em decisões de manutenção accionáveis.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Comparacao de Modelos ML — NASA C-MAPSS</strong> — C-MAPSS (Commercial Modular Aero-Propulsion System Simulation) é o benchmark de referência para RUL de motores de avião; LSTMs, Transformers e CNNs superam XGBoost em cenários com múltiplos modos de degradação e condições operacionais variáveis.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Pipeline Completo: Vibration PHM com Wavelet + LSTM</strong> — pipeline: sinal de vibração → CWT (Continuous Wavelet Transform) para representação tempo-frequência → CNN para extracção de features → LSTM para modelar degradação temporal → saída: Health Index e RUL com intervalo de confiança.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Benchmarks e Casos Reais</strong> — Siemens e GE implementaram PHM em turbinas eólicas reduzindo custos de manutenção em 25–30%; Rolls-Royce usa PHM em motores de avião com contrato Power-by-the-Hour; ROI típico de PHM industrial é 3–5× o investimento em 2 anos.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
