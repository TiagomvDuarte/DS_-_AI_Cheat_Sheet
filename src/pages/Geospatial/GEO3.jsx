import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Geospatial';

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

function EMSpectrumSvg() {
  const bands = [
    { name: 'Coastal', wl: '443nm', idx: 1, color: '#f97316', use: 'Qualidade água' },
    { name: 'Blue', wl: '490nm', idx: 2, color: '#f97316', use: 'Batimetria' },
    { name: 'Green', wl: '560nm', idx: 3, color: '#f97316', use: 'Vegetação pico' },
    { name: 'Red', wl: '665nm', idx: 4, color: '#f97316', use: 'Clorofila abs.' },
    { name: 'Red-Edge', wl: '705nm', idx: 5, color: '#f97316', use: 'Stress vegetal' },
    { name: 'NIR', wl: '842nm', idx: 8, color: '#f97316', use: 'NDVI, biomassa' },
    { name: 'SWIR-1', wl: '1610nm', idx: 11, color: '#f97316', use: 'Humidade solo' },
    { name: 'SWIR-2', wl: '2190nm', idx: 12, color: '#f97316', use: 'Geologia' },
  ];
  return (
    <svg viewBox="0 0 560 175" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="175" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Sentinel-2 — Bandas Espectrais (13 bandas, 10/20/60m)</text>
      {bands.map((b, i) => {
        const x = 12 + i * 67;
        const barH = 50 + i * 7;
        return (
          <g key={i}>
            <rect x={x} y={150 - barH} width="58" height={barH} fill={b.color} rx="4" opacity="0.75" />
            <text x={x + 29} y={148 - barH} textAnchor="middle" fill={b.color} fontSize="8" fontWeight="700">B{b.idx}</text>
            <text x={x + 29} y={162} textAnchor="middle" fill="#fb923c" fontSize="7.5">{b.name}</text>
            <text x={x + 29} y="172" textAnchor="middle" fill="#f97316" fontSize="7">{b.wl}</text>
          </g>
        );
      })}
    </svg>
  );
}

function IndicesSvg() {
  const indices = [
    { name: 'NDVI', formula: '(NIR - Red) / (NIR + Red)', range: '-1 a +1', threshold: '>0.3 = vegetação', color: '#f97316', uso: 'Vegetação, biomassa, saúde plantas' },
    { name: 'NDWI', formula: '(Green - NIR) / (Green + NIR)', range: '-1 a +1', threshold: '>0 = água', color: '#f97316', uso: 'Corpos de água, humidade solo' },
    { name: 'NDBI', formula: '(SWIR - NIR) / (SWIR + NIR)', range: '-1 a +1', threshold: '>0 = edificado', color: '#f97316', uso: 'Área urbana, impermeável' },
    { name: 'NBR', formula: '(NIR - SWIR) / (NIR + SWIR)', range: '-1 a +1', threshold: '<-0.1 = queimado', color: '#f97316', uso: 'Queimadas, severidade incêndio' },
    { name: 'EVI', formula: '2.5*(NIR-R)/(NIR+6R-7.5B+1)', range: '-1 a +1', threshold: '>0.2 = vegetação densa', color: '#f97316', uso: 'NDVI melhorado, menos ruído atm.' },
  ];
  return (
    <svg viewBox="0 0 620 215" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="620" height="215" fill="var(--bg-secondary)" rx="8" />
      <text x="310" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Índices Espectrais — Fórmulas e Aplicações</text>
      {['Índice','Fórmula','Interpretação','Uso'].map((h, i) => {
        const xs = [12, 100, 340, 470];
        return <text key={i} x={xs[i]} y="30" fill="#f97316" fontSize="9" fontWeight="700">{h}</text>;
      })}
      <line x1="8" y1="35" x2="612" y2="35" stroke="var(--card-border)" strokeWidth="1" />
      {indices.map((idx, i) => {
        const y = 40 + i * 32;
        return (
          <g key={i}>
            <rect x="8" y={y} width="604" height="28" fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'transparent'} rx="3" />
            <rect x="8" y={y} width="5" height="28" fill={idx.color} rx="1" />
            <text x="22" y={y + 18} fill={idx.color} fontSize="10" fontWeight="700">{idx.name}</text>
            <text x="100" y={y + 15} fill="#fb923c" fontSize="7.5" fontFamily="monospace">{idx.formula}</text>
            <text x="340" y={y + 15} fill="#fb923c" fontSize="7.5">{idx.threshold}</text>
            <text x="470" y={y + 15} fill="#f97316" fontSize="7.5">{idx.uso}</text>
          </g>
        );
      })}
      <text x="310" y="208" textAnchor="middle" fill="#fb923c" fontSize="8.5">Os índices normalizam entre -1 e +1 usando a fórmula (A-B)/(A+B), tornando-os independentes da iluminação e geometria de aquisição.</text>
    </svg>
  );
}

function SARSvg() {
  return (
    <svg viewBox="0 0 560 170" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="170" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">SAR — Radar de Abertura Sintética vs Óptico</text>
      {/* SAR side */}
      <rect x="8" y="24" width="262" height="130" fill="#f59e0b" rx="6" opacity="0.07" />
      <rect x="8" y="24" width="262" height="130" fill="none" stroke="#f59e0b" strokeWidth="1.5" rx="6" />
      <text x="139" y="40" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">SAR (Sentinel-1, C-band 5.6cm)</text>
      {[['Funciona com nuvens','#f97316'], ['Dia e noite (activo)','#f97316'], ['Sensível a humidade','#f97316'], ['Detecta deformação mm','#f97316'], ['Polarimetria (VV/VH)','#f97316']].map(([t, c], i) => (
        <g key={i}>
          <circle cx="25" cy={55 + i * 20} r="4" fill={c} opacity="0.8" />
          <text x="35" y={59 + i * 20} fill="#fb923c" fontSize="9">{t}</text>
        </g>
      ))}
      <text x="139" y="148" textAnchor="middle" fill="#f97316" fontSize="8">InSAR: interferometria para medir subsidência e sismos</text>
      {/* Optical side */}
      <rect x="290" y="24" width="262" height="130" fill="#f97316" rx="6" opacity="0.07" />
      <rect x="290" y="24" width="262" height="130" fill="none" stroke="#f97316" strokeWidth="1.5" rx="6" />
      <text x="421" y="40" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Óptico (Sentinel-2, 13 bandas)</text>
      {[['Bloqueado por nuvens','#f97316'], ['Só durante o dia','#f97316'], ['Cor natural interpretável','#f97316'], ['Multi-espectral rico','#f97316'], ['10m resolução (VIS/NIR)','#f97316']].map(([t, c], i) => (
        <g key={i}>
          <circle cx="308" cy={55 + i * 20} r="4" fill={c} opacity="0.8" />
          <text x="318" y={59 + i * 20} fill="#fb923c" fontSize="9">{t}</text>
        </g>
      ))}
      <text x="421" y="148" textAnchor="middle" fill="#f97316" fontSize="8">Fusão SAR+Óptico melhora classificação de uso do solo</text>
    </svg>
  );
}

function ChangeDetectionSvg() {
  return (
    <svg viewBox="0 0 560 115" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="115" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="14" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Change Detection — Métodos de Detecção de Mudanças Temporais</text>
      {[
        { name: 'Image Differencing', desc: 'Subtrair imagem T1 de T2. Simples, sensível a ruído atmosférico.', c: '#f97316', x: 12 },
        { name: 'Ratioing', desc: 'Ratio T2/T1. Reduz efeitos multiplicativos (iluminação variável).', c: '#f97316', x: 200 },
        { name: 'CVA (Change Vector)', desc: 'Magnitude e direcção de mudança no espaço multi-espectral.', c: '#f97316', x: 388 },
      ].map(m => (
        <g key={m.name}>
          <rect x={m.x} y="22" width="168" height="68" fill={m.c} rx="6" opacity="0.08" />
          <rect x={m.x} y="22" width="168" height="68" fill="none" stroke={m.c} strokeWidth="1.5" rx="6" />
          <text x={m.x + 84} y="38" textAnchor="middle" fill={m.c} fontSize="9.5" fontWeight="700">{m.name}</text>
          <foreignObject x={m.x + 8} y="50" width="152" height="38">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ color: '#fb923c', fontSize: '8.5px', lineHeight: 1.55 }}>{m.desc}</div>
          </foreignObject>
        </g>
      ))}
      <text x="280" y="108" textAnchor="middle" fill="#fb923c" fontSize="8">CCDC (LandTrendr/GEE): detecção de quebras em séries temporais Landsat de 40 anos.</text>
    </svg>
  );
}

export default function GEO3() {
  const mod = modules[2];
  return (
    <div style={S.page}>
      <Link to="/geospatial" style={S.back}>← Geospatial Intelligence</Link>
      <div style={S.badge}>MÓDULO 03</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Fundamentos de Remote Sensing</h2>
        <div style={S.diagram}><EMSpectrumSvg /></div>
        <div style={S.highlight}>
          <strong>Remote sensing</strong> (teledetecção) é a aquisição de informação sobre um objecto sem contacto físico — através da energia electromagnética reflectida ou emitida. Os sensores passivos (câmaras, multiespectrais) detectam energia solar reflectida e só funcionam durante o dia com céu limpo. Os sensores activos (radar SAR, LiDAR) emitem a sua própria energia e funcionam independentemente das condições atmosféricas. O <strong>Sentinel-2</strong> do programa Copernicus ESA tem 13 bandas com resolução de 10, 20 e 60 metros e uma revisita de 5 dias.
        </div>
        <p style={S.p}>A <strong>resolução espectral</strong> define quantas bandas e em que comprimentos de onda o sensor opera. A resolução espacial define o tamanho de cada pixel no terreno. A resolução temporal define a frequência de revisita. Existe um trade-off: satélites com alta resolução espacial (Pleiades, 0.5m) têm menos bandas e revisita menos frequente; satélites com alta resolução espectral e temporal (Sentinel-2, MODIS) têm menor resolução espacial.</p>
        <div style={S.note}>Correcção atmosférica: a atmosfera dispersa e absorve energia, criando artefactos. A correcção BOA (Bottom Of Atmosphere) converte reflectância TOA (Top Of Atmosphere) em valores de superfície real. O algoritmo Sen2Cor é o standard para Sentinel-2. Essencial para comparação temporal entre imagens.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Índices Espectrais — NDVI, NDWI e Derivados</h2>
        <div style={S.diagram}><IndicesSvg /></div>
        <div style={S.highlight}>
          O <strong>NDVI (Normalized Difference Vegetation Index)</strong> é o índice mais usado em teledetecção — usa a forte reflectância das plantas no NIR (infravermelho próximo) e a absorção de clorofila no vermelho para quantificar a densidade e saúde da vegetação. Valores NDVI acima de 0.3 indicam vegetação, acima de 0.6 floresta densa ou culturas saudáveis. Valores próximos de 0 correspondem a solo nu, e valores negativos a água ou neve.
        </div>
        <p style={S.p}>O <strong>EVI (Enhanced Vegetation Index)</strong> foi desenvolvido pela NASA para corrigir limitações do NDVI em zonas de vegetação muito densa (saturação) e em regiões com aerossóis atmosféricos elevados. Inclui uma banda azul (B) na fórmula para reduzir ruído atmosférico e um factor de correcção do substrato (L=1). O NDVI tem sensibilidade linear moderada; o EVI é mais sensível em extremos de alta e baixa biomassa.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. SAR — Radar de Abertura Sintética</h2>
        <div style={S.diagram}><SARSvg /></div>
        <div style={S.highlight}>
          O <strong>SAR (Synthetic Aperture Radar)</strong> emite micro-ondas e mede o sinal retro-reflectido — a "abertura sintética" refere-se à técnica de combinar múltiplas leituras enquanto o satélite se move para simular uma antena muito maior, obtendo alta resolução. O Sentinel-1 (C-band, 5.6 cm) tem uma revisita de 6 dias na Europa com resolução de 10m. Funciona com qualquer condição atmosférica e durante a noite — ideal para monitorização de zonas tropicais com cobertura de nuvens permanente.
        </div>
        <p style={S.p}><strong>InSAR (Interferometric SAR)</strong> combina duas imagens SAR do mesmo local tiradas em datas diferentes para medir a deformação da superfície com precisão de milímetros. É usado para monitorizar subsidência urbana, atividade vulcânica, deslizamentos de terra e deformação pós-sísmica. O PS-InSAR (Permanent Scatterers) identifica pontos estáveis na imagem (edifícios, rochas) para medir séries temporais de deformação com precisão inferior a 1 mm/ano.</p>
        <div style={S.note}>Polarimetria SAR: o Sentinel-1 transmite e recebe em polarizações VV (vertical-vertical) e VH (vertical-horizontal). O ratio VH/VV é sensível ao tipo de vegetação e humidade do solo. Índices SAR como RVI (Radar Vegetation Index) monitorizam o crescimento de culturas em tempo quase real.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Change Detection — Detecção de Mudanças</h2>
        <div style={S.diagram}><ChangeDetectionSvg /></div>
        <div style={S.highlight}>
          A <strong>detecção de mudanças</strong> compara imagens do mesmo local em datas diferentes para identificar transformações na cobertura do solo. Os desafios são: variação de iluminação solar (ângulo, estação), variações fenológicas sazonais, diferenças atmosféricas e ruído do sensor. Para comparações válidas, as imagens devem ser geometricamente e radiometricamente normalizadas. O método mais robusto para séries temporais é o <strong>CCDC</strong> (Continuous Change Detection and Classification) implementado no Google Earth Engine.
        </div>
        <p style={S.p}><strong>Google Earth Engine (GEE)</strong> é a plataforma cloud para análise de imagens de satélite em escala planetária. Acesso a 70+ petabytes de dados históricos e atuais — Landsat desde 1972, Sentinel-2 desde 2015, MODIS, SAR, DEM, clima. O processamento ocorre nos servidores da Google (sem download local). Permite calcular NDVI médio para Portugal de 1984 a 2024 em minutos. A API Python permite integração com notebooks e pipelines de ML.</p>
        <div style={S.note}>LandTrendr: algoritmo que ajusta segmentos lineares a séries temporais Landsat, detectando automaticamente quebras bruscas (cortes florestais, incêndios) e tendências graduais (recuperação florestal, seca). Disponível como Earth Engine App e API Python.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Classificação de Imagens de Satélite</h2>
        <div style={S.highlight}>
          A <strong>classificação supervisionada</strong> treina um classificador (Random Forest, SVM, rede neuronal) com amostras de treino rotuladas para cada classe de uso do solo (floresta, urbano, água, agricultura) e aplica-o a toda a imagem. As features incluem todas as bandas espectrais, índices calculados (NDVI, NDWI) e texturas (GLCM). A avaliação usa a matriz de confusão com accuracy, precision, recall por classe e o coeficiente Kappa.
        </div>
        <p style={S.p}>A <strong>classificação não supervisionada</strong> (k-means, ISODATA) agrupa pixels em clusters espectralmente similares sem amostras de treino — o analista interpreta as classes após o agrupamento. Útil para exploração inicial ou quando não há dados de referência. O <strong>Random Forest</strong> é o classificador supervisionado mais usado em GIS remoto por ser robusto a outliers, fornecer importância de features e não requerer normalização dos dados.</p>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Fundamentos de Remote Sensing</strong> — remote sensing captura energia reflectida/emitida pela superfície terrestre via satélite ou UAV; resolução espacial (m/pixel), temporal (revisita em dias) e espectral (número de bandas) são as três dimensões de trade-off entre sensores — Sentinel-2 equilibra todas as três.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Índices Espectrais — NDVI, NDWI e Derivados</strong> — NDVI = (NIR−Red)/(NIR+Red) mede vigor da vegetação (−1 a +1, plantas saudáveis &gt;0.5); NDWI = (Green−NIR)/(Green+NIR) detecta superfícies de água; EVI corrige efeitos atmosféricos — índices são o primeiro passo de qualquer análise de cobertura terrestre.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>SAR — Radar de Abertura Sintética</strong> — SAR (Sentinel-1, TerraSAR-X) emite microondas e mede o eco — penetra nuvens e funciona à noite; sensível a humidade do solo, rugosidade superficial e vegetação; InSAR mede deslocamentos de superfície milimétricos (subsidência, terremotos, vulcões).</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Change Detection — Detecção de Mudanças</strong> — detecção de mudanças compara imagens de datas diferentes para identificar alterações (desflorestação, construção, inundação); métodos: diferença de imagem, rácio, CVA, e CNNs bi-temporais — Global Forest Watch usa este processo para alertas semanais de desflorestação.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Classificação de Imagens de Satélite</strong> — classificação supervisionada (Random Forest, CNN) atribui classes (floresta, urbano, água, agricultura) a cada pixel; LULC (Land Use/Land Cover) global com Sentinel-2 e ML é a base de monitorização ambiental, planeamento urbano e compliance regulatório.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
