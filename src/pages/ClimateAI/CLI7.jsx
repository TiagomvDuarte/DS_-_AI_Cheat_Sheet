import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './ClimateAI';

const color = '#f97316';
const m = modules[6];

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

export default function CLI7() {
  return (
    <div style={S.page}>
      <Link to="/climate-ai" style={S.back}>← Climate AI &amp; Sustainability</Link>

      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* ── SECTION 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Calor Oceânico e Circulação Termohalina</h2>

        <div style={S.diagram}>
          <svg viewBox="0 0 860 310" width="100%" style={{ display: 'block' }}>
            <rect width="860" height="310" fill="var(--bg-secondary)" rx="10" />
            <defs>
              <marker id="amocArr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#f97316" />
              </marker>
            </defs>

            {/* ── Ocean cross-section (x: 15–470) ── */}
            {/* depth bands */}
            <rect x="15" y="38" width="440" height="65"  fill="rgba(251,146,60,0.22)" rx="4" />
            <rect x="15" y="107" width="440" height="80" fill="rgba(249,115,22,0.18)" rx="4" />
            <rect x="15" y="191" width="440" height="95" fill="rgba(249,115,22,0.08)" rx="4" />

            {/* surface current label — ABOVE the warm band */}
            <text x="215" y="30" fill="#fb923c" fontSize="9" textAnchor="middle">Corrente superficial quente → Norte</text>
            {/* surface arrow */}
            <path d="M40,58 Q140,48 260,52 Q360,54 450,56" stroke="#f97316" strokeWidth="2.5" fill="none" markerEnd="url(#amocArr)" />

            {/* warm layer labels — below the arrow */}
            <text x="22" y="78" fill="#fff" fontSize="10" fontWeight="700">Água Quente (0–200 m)</text>
            <text x="22" y="92" fill="#fbbf24" fontSize="8.5">Camada de mistura — absorve calor e CO₂</text>

            {/* thermocline labels */}
            <text x="22" y="125" fill="#fff" fontSize="10" fontWeight="700">Termoclina (200–1000 m)</text>
            <text x="22" y="139" fill="#fbbf24" fontSize="8.5">Gradiente de temperatura abrupto</text>

            {/* sinking arrow — right edge, inside section */}
            <path d="M455,60 Q470,60 470,150 Q470,230 455,250" stroke="#f97316" strokeWidth="2" fill="none" strokeDasharray="5,3" markerEnd="url(#amocArr)" />
            <text x="478" y="210" fill="#fb923c" fontSize="8.5">Afunda</text>
            <text x="478" y="220" fill="#fb923c" fontSize="8.5">(Gronelândia)</text>

            {/* deep layer labels */}
            <text x="22" y="209" fill="#f97316" fontSize="10" fontWeight="700">Água Fria Profunda (1000 m+)</text>
            <text x="22" y="223" fill="#fbbf24" fontSize="8.5">Formada no Atlântico Norte Subpolar — densa e oxigenada</text>

            {/* deep return current */}
            <path d="M455,265 Q300,278 150,272 Q80,268 40,262" stroke="#f97316" strokeWidth="2.5" fill="none" markerEnd="url(#amocArr)" />
            <text x="245" y="302" fill="#fb923c" fontSize="9" textAnchor="middle">Corrente profunda fria → Sul (AMOC)</text>

            {/* axis labels */}
            <text x="18"  y="305" fill="rgba(249,115,22,0.5)" fontSize="8.5">Equador</text>
            <text x="410" y="305" fill="rgba(249,115,22,0.5)" fontSize="8.5">Atlântico Norte</text>

            {/* ── OHC chart (x: 510–850) ── */}
            <rect x="510" y="18" width="335" height="175" fill="var(--bg-secondary)" stroke="rgba(249,115,22,0.3)" strokeWidth="1" rx="6" />
            <text x="677" y="36" fill="#fbbf24" fontSize="10.5" textAnchor="middle" fontWeight="700">Conteúdo de Calor Oceânico 0–700 m</text>
            <text x="677" y="49" fill="#fb923c" fontSize="9" textAnchor="middle">Anomalia (ZJ) — 1955–2023</text>

            <line x1="535" y1="175" x2="840" y2="175" stroke="rgba(249,115,22,0.3)" strokeWidth="1" />
            <line x1="535" y1="63"  x2="535" y2="175" stroke="rgba(249,115,22,0.3)" strokeWidth="1" />

            <polyline points="535,173 558,171 581,168 604,164 627,158 650,151 673,142 696,132 719,121 742,110 765,98 788,86 840,78"
              fill="none" stroke="#f97316" strokeWidth="2.5" />
            <polygon points="535,175 535,173 558,171 581,168 604,164 627,158 650,151 673,142 696,132 719,121 742,110 765,98 788,86 840,78 840,175"
              fill="#f9731618" />

            <text x="531" y="177" fill="rgba(249,115,22,0.5)" fontSize="8" textAnchor="end">0</text>
            <text x="531" y="135" fill="rgba(249,115,22,0.5)" fontSize="8" textAnchor="end">+150</text>
            <text x="531" y="93"  fill="rgba(249,115,22,0.5)" fontSize="8" textAnchor="end">+300</text>
            <text x="535" y="187" fill="rgba(249,115,22,0.5)" fontSize="8">1955</text>
            <text x="775" y="187" fill="rgba(249,115,22,0.5)" fontSize="8">2000</text>
            <text x="830" y="187" fill="rgba(249,115,22,0.5)" fontSize="8">2023</text>

            <text x="677" y="205" fill="#f97316" fontSize="9.5" textAnchor="middle">↑ +10 ZJ/década · +380 ZJ desde 1955</text>

            {/* Argo floats */}
            <text x="677" y="228" fill="#fbbf24" fontSize="10.5" textAnchor="middle" fontWeight="700">Rede Argo — 4 000 flutuadores</text>
            {[0,1,2,3,4,5,6,7].map(i => (
              <g key={i}>
                <circle cx={545 + i * 38} cy={250} r="8" fill="rgba(249,115,22,0.18)" stroke="#f97316" strokeWidth="1.5" />
                <line x1={545 + i * 38} y1={258} x2={545 + i * 38} y2={272} stroke="#f97316" strokeWidth="1" strokeDasharray="2,2" />
              </g>
            ))}
            <text x="677" y="288" fill="#fb923c" fontSize="8.5" textAnchor="middle">Perfis 0–2000 m a cada 10 dias</text>
          </svg>
        </div>

        <p style={S.p}>
          Os oceanos absorvem 90% do excesso de calor do sistema climático desde 1970 — são o maior tampão térmico do planeta. O conteúdo de calor oceânico (OHC), medido em Zettajoules (ZJ), aumentou cerca de 380 ZJ desde 1955, equivalente a 6 bombas atómicas de Hiroshima por segundo.
        </p>
        <p style={S.p}>
          A Rede Argo opera com 4 000 flutuadores que perfilam temperatura e salinidade de 0–2000 m a cada 10 dias — uma revolução na observação oceânica desde 2000. O AMOC (Atlantic Meridional Overturning Circulation) transporta calor para o Atlântico Norte e enfraqueceu 15% desde o século XX (Caesar et al., Nature 2021). Um colapso seria catastrófico: arrefecimento de 5–10°C no NW Europa, alteração dos monções africano e asiático, e subida do nível do mar na costa leste dos EUA.
        </p>
        <div style={S.highlight}>
          <strong>Fingerprint ML:</strong> Redes neurais detectam o sinal de enfraquecimento do AMOC em dados de temperatura oceânica de superfície — identificando o padrão de arrefecimento anómalo no Atlântico Norte subpolar sem necessidade de observações directas de correntes profundas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Nível do Mar — Medição e Projecção</h2>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 340" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="340" fill="var(--bg-secondary)" rx="10" />

            {/* title */}
            <text x="200" y="28" fill="#fbbf24" fontSize="12" textAnchor="middle" fontWeight="700">Componentes da Subida do Nível do Mar</text>

            {/* bar chart — components */}
            {/* bars */}
            <rect x="30" y="50" width="60" height="120" fill="#fb923ccc" rx="4" />
            <text x="60" y="46" fill="#fb923c" fontSize="10" textAnchor="middle" fontWeight="700">40%</text>
            <text x="60" y="182" fill="#fb923c" fontSize="9" textAnchor="middle">Expansão</text>
            <text x="60" y="193" fill="#fb923c" fontSize="9" textAnchor="middle">Térmica</text>

            <rect x="105" y="113" width="60" height="57" fill="#f97316cc" rx="4" />
            <text x="135" y="109" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="700">21%</text>
            <text x="135" y="182" fill="#fb923c" fontSize="9" textAnchor="middle">Gronelândia</text>

            <rect x="180" y="130" width="60" height="40" fill="#f97316cc" rx="4" />
            <text x="210" y="126" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="700">15%</text>
            <text x="210" y="182" fill="#fb923c" fontSize="9" textAnchor="middle">Antárctida</text>

            <rect x="255" y="110" width="60" height="60" fill="#fb923ccc" rx="4" />
            <text x="285" y="106" fill="#fb923c" fontSize="10" textAnchor="middle" fontWeight="700">22%</text>
            <text x="285" y="182" fill="#fb923c" fontSize="9" textAnchor="middle">Glaciares</text>

            <rect x="330" y="163" width="60" height="7" fill="#fb923ccc" rx="2" />
            <text x="360" y="159" fill="#fb923c" fontSize="10" textAnchor="middle" fontWeight="700">2%</text>
            <text x="360" y="182" fill="#fb923c" fontSize="9" textAnchor="middle">Águas</text>
            <text x="360" y="193" fill="#fb923c" fontSize="9" textAnchor="middle">Subterrâneas</text>

            {/* baseline */}
            <line x1="20" y1="170" x2="410" y2="170" stroke="var(--card-border)" strokeWidth="1" />

            {/* ── Altimetry trend (right panel) ── */}
            <text x="560" y="28" fill="#fbbf24" fontSize="12" textAnchor="middle" fontWeight="700">Altimetria por Satélite 1993–2023</text>

            <rect x="430" y="40" width="330" height="180" fill="var(--bg-secondary)" stroke="var(--card-border)" strokeWidth="1" rx="6" />

            {/* axes */}
            <line x1="450" y1="200" x2="750" y2="200" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="450" y1="55" x2="450" y2="200" stroke="var(--card-border)" strokeWidth="1" />

            {/* altimetry rising trend */}
            <polyline
              points="450,198 480,196 510,193 540,189 570,184 600,178 630,171 660,163 690,154 720,144 750,133"
              fill="none" stroke="#f97316" strokeWidth="2.5"
            />
            <polygon
              points="450,200 450,198 480,196 510,193 540,189 570,184 600,178 630,171 660,163 690,154 720,144 750,133 750,200"
              fill="#f9731618"
            />

            {/* acceleration marker */}
            <line x1="650" y1="55" x2="650" y2="200" stroke="#f97316" strokeWidth="1" strokeDasharray="4,3" />
            <text x="655" y="68" fill="#fb923c" fontSize="9">2013</text>
            <text x="655" y="80" fill="#fb923c" fontSize="9">+4.5 mm/a</text>

            {/* labels */}
            <text x="448" y="202" fill="rgba(249,115,22,0.6)" fontSize="9" textAnchor="end">0</text>
            <text x="448" y="155" fill="rgba(249,115,22,0.6)" fontSize="9" textAnchor="end">+50</text>
            <text x="448" y="108" fill="rgba(249,115,22,0.6)" fontSize="9" textAnchor="end">+100</text>
            <text x="452" y="212" fill="rgba(249,115,22,0.6)" fontSize="9">1993</text>
            <text x="735" y="212" fill="rgba(249,115,22,0.6)" fontSize="9">2023</text>
            <text x="600" y="212" fill="rgba(249,115,22,0.6)" fontSize="9">mm</text>

            <text x="560" y="240" fill="#f97316" fontSize="10" textAnchor="middle">Média: +3.6 mm/ano · Aceleração: +4.5 mm/ano (2013–2023)</text>

            {/* hotspot labels */}
            <text x="560" y="260" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="700">Hotspots: Costa E. dos EUA · Ilhas Pacífico · Bangladesh · Países Baixos</text>
            <text x="560" y="275" fill="#fb923c" fontSize="9" textAnchor="middle">AMOC + subsidência = 3–4× média global na costa leste dos EUA</text>
          </svg>
        </div>

        <p style={S.p}>
          O nível do mar global subiu 20 cm desde 1900 — a taxa acelerou de 1.7 mm/ano (1901–1971) para 3.7 mm/ano (2006–2018) (IPCC AR6). As componentes incluem expansão térmica (água quente ocupa mais volume), degelo da Gronelândia e Antárctida, glaciares e extracção de águas subterrâneas.
        </p>
        <p style={S.p}>
          A altimetria por satélite (TOPEX/Poseidon desde 1992, Jason-1/2/3, Sentinel-6) oferece precisão de 3 mm e cobertura global a cada 10 dias. O GRACE-FO mede variações de massa de gelo por gravimetria: a Gronelândia perde 280 Gt/ano, a Antárctida Ocidental 150 Gt/ano. As projecções IPCC AR6 apontam para +0.32–0.62 m (SSP1-2.6) a +0.63–1.01 m (SSP5-8.5) até 2100, podendo atingir 2 m se ocorrer instabilidade da Antárctida Ocidental.
        </p>
        <div style={S.highlight}>
          <strong>ML para projecção local:</strong> Modelos combinam altimetria, marégrafos, dados de subsidência e variáveis socioeconómicas para avaliar risco costeiro específico — identificando populações expostas com resolução de centenas de metros.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Gelo Ártico e Permafrost</h2>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 340" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="340" fill="var(--bg-secondary)" rx="10" />

            {/* ── Sea ice extent graph ── */}
            <text x="200" y="25" fill="#fbbf24" fontSize="12" textAnchor="middle" fontWeight="700">Extensão do Gelo Marinho Ártico — Setembro (1979–2023)</text>

            <rect x="20" y="35" width="380" height="180" fill="var(--bg-secondary)" stroke="var(--card-border)" strokeWidth="1" rx="6" />

            {/* axes */}
            <line x1="45" y1="195" x2="390" y2="195" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="45" y1="45" x2="45" y2="195" stroke="var(--card-border)" strokeWidth="1" />

            {/* sea ice declining trend */}
            <polyline
              points="45,60 70,62 95,65 120,68 145,73 170,79 195,86 220,94 245,103 270,113 295,124 320,137 345,151 370,163 390,172"
              fill="none" stroke="#f97316" strokeWidth="2.5"
            />
            {/* area fill */}
            <polygon
              points="45,195 45,60 70,62 95,65 120,68 145,73 170,79 195,86 220,94 245,103 270,113 295,124 320,137 345,151 370,163 390,172 390,195"
              fill="#f9731618"
            />
            {/* trend line */}
            <line x1="45" y1="62" x2="390" y2="173" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" />

            {/* y labels */}
            <text x="43" y="62" fill="rgba(249,115,22,0.6)" fontSize="9" textAnchor="end">7.0</text>
            <text x="43" y="128" fill="rgba(249,115,22,0.6)" fontSize="9" textAnchor="end">5.5</text>
            <text x="43" y="197" fill="rgba(249,115,22,0.6)" fontSize="9" textAnchor="end">4.0 M km²</text>
            {/* x labels */}
            <text x="45" y="207" fill="rgba(249,115,22,0.6)" fontSize="9">1979</text>
            <text x="360" y="207" fill="rgba(249,115,22,0.6)" fontSize="9">2023</text>

            <text x="200" y="234" fill="#fb923c" fontSize="10" textAnchor="middle">–13%/década · –40% em área · –70% em volume desde 1979</text>

            {/* 2023 record note */}
            <circle cx="390" cy="172" r="4" fill="#f97316" />
            <text x="402" y="168" fill="#fb923c" fontSize="9">Mínimo 2023</text>
            <text x="402" y="178" fill="#fb923c" fontSize="9">4.3 M km²</text>

            {/* ── Permafrost map schematic ── */}
            <text x="590" y="25" fill="#fbbf24" fontSize="12" textAnchor="middle" fontWeight="700">Zonas de Permafrost</text>

            {/* zones legend */}
            <rect x="430" y="40" width="20" height="14" fill="#c2410c" rx="2" />
            <text x="455" y="52" fill="#c2410c" fontSize="10">Contínuo (+90%)</text>

            <rect x="430" y="62" width="20" height="14" fill="#f97316" rx="2" />
            <text x="455" y="74" fill="#f97316" fontSize="10">Descontínuo (50–90%)</text>

            <rect x="430" y="84" width="20" height="14" fill="#fb923c" rx="2" />
            <text x="455" y="96" fill="#fb923c" fontSize="10">Esporádico (10–50%)</text>

            <rect x="430" y="106" width="20" height="14" fill="#fbbf24" rx="2" />
            <text x="455" y="118" fill="#fbbf24" fontSize="10">Isolado (menos de 10%)</text>

            {/* schematic hemisphere */}
            <ellipse cx="590" cy="200" rx="120" ry="60" fill="#fbbf2430" stroke="#fbbf24" strokeWidth="1" />
            <ellipse cx="590" cy="200" rx="90" ry="45" fill="#fb923c50" stroke="#fb923c" strokeWidth="1" />
            <ellipse cx="590" cy="200" rx="60" ry="30" fill="#f97316" stroke="#f97316" strokeWidth="1" />
            <ellipse cx="590" cy="200" rx="30" ry="15" fill="#c2410c" stroke="#ea580c" strokeWidth="1" />
            <text x="590" y="204" fill="var(--bg-secondary)" fontSize="9" textAnchor="middle" fontWeight="700">Ártico</text>

            <text x="590" y="275" fill="#fb923c" fontSize="10" textAnchor="middle">25% do hemisfério Norte · 1.5 Tt de carbono orgânico</text>

            {/* CH4 bubbles */}
            {[0,1,2,3].map(i => (
              <circle key={i} cx={440 + i * 35} cy={292} r="10" fill="#fbbf2440" stroke="#fbbf24" strokeWidth="1.5" />
            ))}
            {[0,1,2,3].map(i => (
              <text key={i} x={440 + i * 35} y={296} fill="#fbbf24" fontSize="8" textAnchor="middle">CH₄</text>
            ))}
            <text x="518" y="316" fill="#fbbf24" fontSize="9" textAnchor="middle">Thaw → emissão de metano (tipping point)</text>
          </svg>
        </div>

        <p style={S.p}>
          O gelo marinho Ártico em setembro reduziu 40% em área e 70% em volume desde 1979 — o Ártico aquece 4x mais rápido que a média global (Arctic Amplification). O albedo feedback é auto-reforçante: gelo branco reflecte 80% da radiação solar, enquanto o oceano exposto absorve 94%.
        </p>
        <p style={S.p}>
          A previsão de gelo com U-Net e ConvLSTM em dados NSIDC (passive microwave) permite prever extensão a 1–6 meses — crítico para navegação na Rota do Ártico (já navegável 2 meses/ano). O permafrost cobre 25% da superfície terrestre do hemisfério Norte e contém 1.5 Teratoneladas de carbono orgânico (2x a quantidade na atmosfera). O thaw slump liberta CH₄ e CO₂ num feedback potencialmente descontrolado.
        </p>
        <div style={S.highlight}>
          <strong>InSAR (Sentinel-1):</strong> Interferometria radar para monitorizar subsidência de permafrost com precisão milimétrica — detecta zonas de risco para infraestruturas (pipelines, estradas, edifícios) no Árctico e sub-Árctico.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Acidificação e Saúde dos Oceanos</h2>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 340" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="340" fill="var(--bg-secondary)" rx="10" />

            {/* ── pH time series ── */}
            <text x="200" y="25" fill="#fbbf24" fontSize="12" textAnchor="middle" fontWeight="700">pH Oceânico — Estação HOTS/Hawaii (1988–2023)</text>

            <rect x="20" y="35" width="360" height="165" fill="var(--bg-secondary)" stroke="var(--card-border)" strokeWidth="1" rx="6" />

            {/* axes */}
            <line x1="45" y1="180" x2="370" y2="180" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="45" y1="45" x2="45" y2="180" stroke="var(--card-border)" strokeWidth="1" />

            {/* pH declining line */}
            <polyline
              points="45,55 75,59 105,64 135,70 165,77 195,84 225,92 255,101 285,111 315,122 345,133 370,142"
              fill="none" stroke="#fb923c" strokeWidth="2.5"
            />
            <polygon
              points="45,180 45,55 75,59 105,64 135,70 165,77 195,84 225,92 255,101 285,111 315,122 345,133 370,142 370,180"
              fill="#fb923c18"
            />

            {/* y labels */}
            <text x="43" y="57" fill="rgba(249,115,22,0.6)" fontSize="9" textAnchor="end">8.11</text>
            <text x="43" y="120" fill="rgba(249,115,22,0.6)" fontSize="9" textAnchor="end">8.07</text>
            <text x="43" y="182" fill="rgba(249,115,22,0.6)" fontSize="9" textAnchor="end">8.03</text>
            {/* x labels */}
            <text x="45" y="192" fill="rgba(249,115,22,0.6)" fontSize="9">1988</text>
            <text x="350" y="192" fill="rgba(249,115,22,0.6)" fontSize="9">2023</text>

            <text x="200" y="210" fill="#fb923c" fontSize="10" textAnchor="middle">–0.1 unidade = +26% mais ácido desde era pré-industrial</text>

            {/* ── Chemistry diagram ── */}
            <text x="200" y="230" fill="#fbbf24" fontSize="11" textAnchor="middle" fontWeight="700">Química da Acidificação</text>
            <text x="200" y="248" fill="#fb923c" fontSize="10" textAnchor="middle">CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻ → reduz CO₃²⁻ → dissolve conchas</text>
            <text x="200" y="265" fill="#fb923c" fontSize="10" textAnchor="middle">Corais dissolvem-se abaixo pH 7.8 · Ostras perdem 25% espessura de concha</text>

            {/* ── Coral bleaching events ── */}
            <text x="590" y="25" fill="#fbbf24" fontSize="12" textAnchor="middle" fontWeight="700">Branqueamentos GBR — Grande Barreira de Coral</text>

            <rect x="420" y="35" width="340" height="220" fill="var(--bg-secondary)" stroke="rgba(249,115,22,0.3)" strokeWidth="1" rx="6" />

            {/* bars background */}
            <rect x="430" y="45" width="320" height="145" fill="rgba(249,115,22,0.06)" rx="4" />

            {/* bleaching event bars */}
            {[
              { year: '1998', x: 455, intensity: 0.6 },
              { year: '2002', x: 500, intensity: 0.5 },
              { year: '2016', x: 565, intensity: 1.0 },
              { year: '2017', x: 610, intensity: 0.8 },
              { year: '2020', x: 665, intensity: 0.85 },
              { year: '2022', x: 715, intensity: 0.9 },
            ].map(ev => (
              <g key={ev.year}>
                <rect x={ev.x - 14} y={55 + (1 - ev.intensity) * 110} width="28" height={ev.intensity * 110} fill={`rgba(249,115,22,${0.35 + ev.intensity * 0.55})`} rx="3" />
                <text x={ev.x} y="202" fill="#fb923c" fontSize="8.5" textAnchor="middle">{ev.year}</text>
              </g>
            ))}

            {/* coral legend — below bars */}
            {[
              { x: 480, icon: '🪸', label: 'Saudável',   col: '#f97316' },
              { x: 590, icon: '🪸', label: 'Stressado',  col: '#f59e0b' },
              { x: 690, icon: '🪸', label: 'Branqueado', col: '#fb923c' },
            ].map(lg => (
              <g key={lg.label}>
                <text x={lg.x} y="220" fill={lg.col} fontSize="16" textAnchor="middle">{lg.icon}</text>
                <text x={lg.x} y="237" fill={lg.col} fontSize="8" textAnchor="middle" fontWeight="600">{lg.label}</text>
              </g>
            ))}

            <text x="590" y="270" fill="#fb923c" fontSize="9.5" textAnchor="middle" fontWeight="700">6 eventos de branqueamento em massa desde 1998</text>
            <text x="590" y="280" fill="#fb923c" fontSize="9" textAnchor="middle">2016 e 2022 — os mais severos registados</text>
          </svg>
        </div>

        <p style={S.p}>
          Os oceanos absorvem 25–30% do CO₂ antropogénico e tornaram-se 26% mais ácidos desde a era pré-industrial (pH 8.21 → 8.04). A química é directa: CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻, e os iões H⁺ adicionais reduzem a disponibilidade de CO₃²⁻ necessário para conchas e esqueletos de calcário.
        </p>
        <p style={S.p}>
          Os corais constroem esqueletos de aragonite — abaixo de pH 7.8 começam a dissolver-se. Ostras e mexilhões perdem 25% da espessura de concha. Os pterópodos (caracóis de mar), base da cadeia alimentar polar, já mostram sinais de dissolução activa. A monitorização acústica com hidrofonos e ML detecta sons de ecossistemas recifais saudáveis versus degradados em tempo real.
        </p>
        <div style={S.highlight}>
          <strong>Allen Coral Atlas:</strong> Mapeamento global de recifes a 5 m/px com imagens Planet Labs e deep learning — permite identificar zonas de branqueamento e degradação em tempo quase real, cobrindo todos os recifes tropicais do planeta.
        </div>
        <div style={S.note}>
          Zonas mortas (hipoxia): ML em dados de temperatura, nutrientes e correntes para prever zonas de baixo oxigénio — já existem mais de 500 zonas mortas costeiras globalmente, expandindo com o aquecimento.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. ML para Oceanografia e Monitorização</h2>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 320" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="320" fill="var(--bg-secondary)" rx="10" />

            {/* title */}
            <text x="390" y="26" fill="#fbbf24" fontSize="12" textAnchor="middle" fontWeight="700">Pipeline de Monitorização Oceânica com ML</text>

            {/* ── Data sources (left column) ── */}
            <text x="80" y="55" fill="#f97316" fontSize="11" textAnchor="middle" fontWeight="700">SATÉLITES</text>
            {[
              { label: 'SST — MODIS/VIIRS', y: 75 },
              { label: 'Altimetria SSH', y: 95 },
              { label: 'Clorofila — VIIRS', y: 115 },
            ].map(s => (
              <g key={s.label}>
                <rect x="20" y={s.y - 12} width="120" height="18" fill="#f9731620" stroke="#f9731640" strokeWidth="1" rx="4" />
                <text x="80" y={s.y} fill="#f97316" fontSize="9" textAnchor="middle">{s.label}</text>
              </g>
            ))}

            <text x="80" y="150" fill="#f97316" fontSize="11" textAnchor="middle" fontWeight="700">IN-SITU</text>
            {[
              { label: 'Argo Floats', y: 170 },
              { label: 'Moorings / Gliders', y: 190 },
              { label: 'Ship Surveys', y: 210 },
            ].map(s => (
              <g key={s.label}>
                <rect x="20" y={s.y - 12} width="120" height="18" fill="#fb923c20" stroke="#fb923c40" strokeWidth="1" rx="4" />
                <text x="80" y={s.y} fill="#fb923c" fontSize="9" textAnchor="middle">{s.label}</text>
              </g>
            ))}

            {/* arrows to ML box */}
            <line x1="140" y1="115" x2="220" y2="150" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr1)" />
            <line x1="140" y1="190" x2="220" y2="170" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr1)" />

            {/* ── ML fusion box ── */}
            <rect x="220" y="120" width="160" height="80" fill="#f9731620" stroke="#f97316" strokeWidth="1.5" rx="8" />
            <text x="300" y="150" fill="#fbbf24" fontSize="11" textAnchor="middle" fontWeight="700">Data Fusion ML</text>
            <text x="300" y="166" fill="#f97316" fontSize="9" textAnchor="middle">Gap-filling · Bias correction</text>
            <text x="300" y="179" fill="#f97316" fontSize="9" textAnchor="middle">CMEMS — Copernicus Marine</text>

            {/* arrow to ocean state */}
            <line x1="380" y1="160" x2="430" y2="160" stroke="#f97316" strokeWidth="2" markerEnd="url(#arr1)" />

            {/* ── Ocean state estimate ── */}
            <rect x="430" y="130" width="130" height="60" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1.5" rx="8" />
            <text x="495" y="158" fill="#fbbf24" fontSize="11" textAnchor="middle" fontWeight="700">Estado</text>
            <text x="495" y="172" fill="#f97316" fontSize="10" textAnchor="middle">Oceânico</text>

            {/* arrows to applications */}
            <line x1="560" y1="148" x2="610" y2="100" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr1)" />
            <line x1="560" y1="155" x2="610" y2="145" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr1)" />
            <line x1="560" y1="162" x2="610" y2="195" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr1)" />
            <line x1="560" y1="170" x2="610" y2="245" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr1)" />

            {/* ── Applications (right) ── */}
            {[
              { label: 'Previsão de Pesca', color: '#f97316', y: 92 },
              { label: 'Rotas de Navegação', color: '#f97316', y: 137 },
              { label: 'Intensidade de Furacões', color: '#f97316', y: 187 },
              { label: 'Carbono Azul', color: '#f97316', y: 237 },
            ].map(app => (
              <g key={app.label}>
                <rect x="610" y={app.y - 14} width="150" height="22" fill={`${app.color}20`} stroke={`${app.color}60`} strokeWidth="1" rx="6" />
                <text x="685" y={app.y} fill={app.color} fontSize="10" textAnchor="middle" fontWeight="600">{app.label}</text>
              </g>
            ))}

            {/* CMEMS badge */}
            <rect x="220" y="230" width="160" height="28" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" rx="6" />
            <text x="300" y="249" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="700">CMEMS — Hub de Dados</text>

            <defs>
              <marker id="arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
              </marker>
            </defs>

            <text x="390" y="295" fill="#fb923c" fontSize="10" textAnchor="middle">SST · SSH · Clorofila · Correntes · Salinidade · Gelo · Biogeoquímica</text>
          </svg>
        </div>

        <p style={S.p}>
          A oceanografia beneficia enormemente do ML para integrar observações heterogéneas e incompletas. A SST (Sea Surface Temperature) combina MODIS/VIIRS com o sistema GHRSST — ML corrige lacunas de nuvens e cria campos contínuos de temperatura superficial. O CMEMS (Copernicus Marine Service) é o hub operacional europeu de análise e previsão oceânica, com produtos de temperatura, salinidade, correntes, nível, gelo e biogeoquímica.
        </p>
        <p style={S.p}>
          A intensidade de furacões depende criticamente do conteúdo de calor oceânico nos primeiros 50 m — ML melhora significativamente a previsão de rapid intensification (RI: +35 nós em 24h). A bio-óptica com MODIS Ocean Color estima concentração de fitoplâncton e produção primária global via ML. O carbono azul (manguezais, pradarias marinhas, sapais) sequestra carbono 5–10x mais rápido que florestas terrestres.
        </p>
        <div style={S.highlight}>
          <strong>Previsão de pesca com ML:</strong> SST + clorofila + correntes + batimetria combinados em modelos preditivos para localizar cardumes de atum, sardinha e outros peixes pelágicos — apoia a gestão sustentável da pesca e reduz consumo de combustível em 20–30% nas frotas pesqueiras.
        </div>
        <div style={S.note}>
          Mapeamento de carbono azul: Sentinel-1 (SAR) + Sentinel-2 (óptico) + deep learning para monitorizar extensão e saúde de ecossistemas costeiros de sequestro de carbono — base para mercados de créditos de carbono azul verificados.
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Calor Oceânico e Circulação Termohalina</strong> — os oceanos absorvem &gt;90% do calor em excesso da Terra; AMOC (circulação termohalina) redistribui calor entre trópicos e polos — o seu enfraquecimento teria impactos dramáticos no clima europeu; Argo floats e satélites monitorizam temperatura e salinidade.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Nível do Mar — Medição e Projecção</strong> — altimetria por satélite (TOPEX, Jason-3, Sentinel-6) mede o nível do mar com precisão de ±1cm; projecções IPCC AR6 apontam para +0.3 a +1.0m em 2100 dependendo do cenário; contribuições do degelo da Antártica têm a maior incerteza.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Gelo Ártico e Permafrost</strong> — extensão de gelo marinho ártico monitorizada por NSIDC com dados AMSR2; derretimento do permafrost liberta metano (potência GHG 80× CO₂ em 20 anos) — um ponto de inflexão (tipping point) que pode acelerar o aquecimento irrevocavelmente.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Acidificação e Saúde dos Oceanos</strong> — absorção de CO₂ reduz o pH oceânico (acidificação); bleaching de corais detectado por Landsat e MODIS com classificação CNN; modelos de distribuição de espécies marinhas prevêem deslocamento de ecossistemas em cenários de aquecimento.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>ML para Oceanografia e Monitorização</strong> — ML analisa dados de Argo, CTD e satélite para caracterizar correntes, estratificação e fertilidade oceânica; modelos de previsão de temperatura do mar (SST) são input para previsão de furacões, pesca e gestão costeira.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
