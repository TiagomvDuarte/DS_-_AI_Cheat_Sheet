import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './AIJustice';

const C = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: C, border: `1.5px solid ${C}`, fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color: C, marginBottom: '1rem' },
  highlight: { background: `${C}15`, borderLeft: `3px solid ${C}`, padding: '0.85rem 1.1rem', borderRadius: '0 8px 8px 0', marginBottom: '1rem' },
  note: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', padding: '0.85rem 1.1rem', borderRadius: 8, marginBottom: '1rem' },
  p: { color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '0.85rem' },
  diagram: { background: 'var(--bg-secondary)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', overflowX: 'auto' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2rem 0' },
};

export default function JUS2() {
  return (
    <div style={S.page}>
      <Link to="/ai-justice" style={S.back}>← AI & Justice</Link>
      <div style={S.badge}>MÓDULO {modules[1].num}</div>
      <h1 style={S.h1}>MÓDULO {modules[1].title}</h1>
      <p style={S.sub}>MÓDULO {modules[1].subtitle}</p>

      {/* Section 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. O Que é o Policiamento Preditivo</h2>
        <p style={S.p}>
          Policiamento preditivo é o uso de dados históricos de crime, análise estatística e algoritmos para prever onde e quando crimes vão ocorrer, ou quem vai cometê-los. O objectivo declarado é a alocação mais eficiente de recursos policiais — concentrar patrulhas nos locais e momentos de maior risco previsto.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Dois paradigmas distintos:</strong> policiamento preditivo baseado em <em>lugares</em> (place-based — prever hot spots geográficos) e baseado em <em>pessoas</em> (person-based — prever indivíduos de risco). O segundo é significativamente mais controverso do ponto de vista dos direitos civis.
          </p>
        </div>
        <p style={S.p}>
          A história começa antes dos algoritmos modernos. Sherman et al. (1989) demonstraram que 5% das ruas de Minneapolis geravam 50% das chamadas de emergência — o conceito de hot spot policing. O PredPol (2012) foi o primeiro produto comercial amplamente adotado, seguido pelo ShotSpotter, Hunchlab e SAS Crime Analysis.
        </p>
        <p style={S.p}>
          A justificação é a eficiência: com recursos limitados, a polícia deve concentrar-se onde o crime é mais provável. As críticas centrais são que os dados históricos codificam padrões de over-policing passado, que os algoritmos operam como caixas negras sem supervisão pública, e que as comunidades mais afectadas não têm voz nas decisões de deployment.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 760 270" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker id="parr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 Z" fill="#f97316" />
              </marker>
            </defs>

            <text x="380" y="22" textAnchor="middle" fill="#fb923c" fontSize="12" fontWeight="700">MAPA DE HOT SPOTS — ALOCAÇÃO DE PATRULHAS</text>

            {/* ── LEFT: City grid ── */}
            <text x="185" y="42" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="600">Mapa da Cidade (grelha de células)</text>

            {/* Hot spot cells: (col,row) = (1,0), (3,1), (2,2) */}
            {(() => {
              const hotSpots = new Set(['1-0','3-1','2-2']);
              const medSpots = new Set(['0-1','4-0','1-2']);
              return [0,1,2,3,4].map(col => [0,1,2,3].map(row => {
                const key = `${col}-${row}`;
                const isHot = hotSpots.has(key);
                const isMed = medSpots.has(key);
                return (
                  <rect key={key}
                    x={20 + col * 68} y={50 + row * 48}
                    width={63} height={43} rx="5"
                    fill={isHot ? '#c2410c' : isMed ? 'rgba(249,115,22,0.22)' : 'rgba(249,115,22,0.05)'}
                    stroke={isHot ? '#f97316' : isMed ? 'rgba(249,115,22,0.50)' : 'var(--card-border)'}
                    strokeWidth={isHot ? 2 : 1}
                  />
                );
              }));
            })()}

            {/* Hot spot labels inside cells */}
            <text x="120" y="68" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">HOT SPOT</text>
            <text x="120" y="80" textAnchor="middle" fill="#fbbf24" fontSize="7">alto risco</text>

            <text x="256" y="116" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">HOT SPOT</text>
            <text x="256" y="128" textAnchor="middle" fill="#fbbf24" fontSize="7">alto risco</text>

            <text x="188" y="164" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">HOT SPOT</text>
            <text x="188" y="176" textAnchor="middle" fill="#fbbf24" fontSize="7">alto risco</text>

            {/* Legend */}
            <rect x="20" y="250" width="14" height="10" rx="2" fill="#c2410c" />
            <text x="38" y="259" fill="#fb923c" fontSize="8">Alto risco (hot spot)</text>
            <rect x="145" y="250" width="14" height="10" rx="2" fill="rgba(249,115,22,0.22)" stroke="rgba(249,115,22,0.50)" strokeWidth="1" />
            <text x="163" y="259" fill="#fb923c" fontSize="8">Risco médio</text>
            <rect x="245" y="250" width="14" height="10" rx="2" fill="rgba(249,115,22,0.05)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="263" y="259" fill="#fb923c" fontSize="8">Baixo risco</text>

            {/* ── DIVIDER ── */}
            <line x1="370" y1="35" x2="370" y2="245" stroke="var(--card-border)" strokeWidth="1.5" />

            {/* ── RIGHT: Algorithm + Patrol deployment ── */}
            <text x="565" y="42" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="600">Algoritmo → Alocação de Patrulhas</text>

            {/* Algorithm box */}
            <rect x="385" y="55" width="110" height="50" rx="7" fill="rgba(249,115,22,0.10)" stroke={C} strokeWidth="1.5" />
            <text x="440" y="76" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">Algoritmo</text>
            <text x="440" y="90" textAnchor="middle" fill="#fb923c" fontSize="8">PredPol / ShotSpotter</text>
            <text x="440" y="102" textAnchor="middle" fill="#fb923c" fontSize="8">dados históricos</text>

            {/* Arrow → score */}
            <line x1="495" y1="80" x2="525" y2="80" stroke={C} strokeWidth="1.5" markerEnd="url(#parr)" />

            {/* Score box */}
            <rect x="525" y="60" width="90" height="40" rx="6" fill="rgba(249,115,22,0.15)" stroke={C} strokeWidth="1.5" />
            <text x="570" y="78" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">Score</text>
            <text x="570" y="91" textAnchor="middle" fill="#fb923c" fontSize="8">risco por célula</text>

            {/* Arrow → dispatch */}
            <line x1="615" y1="80" x2="645" y2="80" stroke={C} strokeWidth="1.5" markerEnd="url(#parr)" />

            {/* Dispatch box */}
            <rect x="645" y="55" width="100" height="50" rx="7" fill="#c2410c" stroke={C} strokeWidth="1.5" />
            <text x="695" y="75" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">Patrulha</text>
            <text x="695" y="89" textAnchor="middle" fill="#fbbf24" fontSize="8">enviada para</text>
            <text x="695" y="101" textAnchor="middle" fill="#fbbf24" fontSize="8">hot spots</text>

            {/* Feedback loop arrow */}
            <path d="M695,105 Q695,140 570,145 Q445,150 440,115" fill="none" stroke={`${C}60`} strokeWidth="1.2" strokeDasharray="4,3" markerEnd="url(#parr)" />
            <text x="565" y="155" textAnchor="middle" fill="#fb923c" fontSize="8">feedback: mais dados de crime → mais patrulhas → ciclo</text>

            {/* Bias warning */}
            <rect x="385" y="175" width="360" height="50" rx="7" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.30)" strokeWidth="1" strokeDasharray="4,2" />
            <text x="565" y="194" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">⚠ Risco de Feedback Loop Discriminatório</text>
            <text x="565" y="210" textAnchor="middle" fill="#fb923c" fontSize="8">dados históricos refletem over-policing passado → algoritmo replica e amplifica bias</text>
            <text x="565" y="222" textAnchor="middle" fill="#fb923c" fontSize="8">comunidades minoritárias sobrerrepresentadas → mais vigilância → mais registos</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      {/* Section 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. PredPol e Hot Spot Policing</h2>
        <p style={S.p}>
          O PredPol (agora Geolitica) foi desenvolvido por George Mohler e Jeff Brantingham na UCLA, baseando-se em modelos matemáticos de epidemiologia de terramotos. A analogia é directa: tal como os sismos têm réplicas — aftershocks que ocorrem próximos no espaço e no tempo do evento principal — os crimes geram risco adicional numa janela espácio-temporal específica.
        </p>
        <p style={S.p}>
          O modelo ingere dados históricos de crimes (tipo, localização, data/hora) e produz como output caixas de 500 × 500 pés com a probabilidade de ocorrência de crime nas próximas 12 horas. As patrulhas são instruídas a passar por essas caixas durante períodos de 15 minutos — baseado na investigação de Koper (1995), que mostrou que 15 minutos de presença policial minimiza o crime sem habituar os criminosos ao padrão ("Koper Curve").
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: '0.4rem' }}><strong>Evidência científica: resultados mistos</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            O estudo RAND (2016) concluiu que o PredPol tem precisão comparável à de analistas humanos experientes. A meta-análise do National Academies of Sciences (2018) encontrou resultados mistos: alguns estudos mostram reduções de crime, outros não encontram efeito. A dificuldade metodológica é separar o efeito do algoritmo do efeito do simples aumento de patrulhamento.
          </p>
        </div>
        <p style={S.p}>
          Um problema crítico é o <strong>crime displacement</strong>: quando a polícia se concentra numa área, o crime pode simplesmente deslocar-se para áreas adjacentes, sem redução net. Mede-se com o "weighted displacement quotient" — se WDQ &gt; 1, há mais crime a deslocar-se do que a ser prevenido.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. ShotSpotter e Vigilância Acústica</h2>
        <p style={S.p}>
          O ShotSpotter é uma rede de microfones instalados em postes de iluminação e edifícios que detecta e triangula tiros em tempo real. Usado em Chicago, Oakland, Detroit, Nova Iorque, Kansas City e mais de 100 cidades norte-americanas, o sistema alerta automaticamente as patrulhas para a localização precisa de disparos de arma.
        </p>
        <p style={S.p}>
          A sua precisão foi severamente questionada. Uma investigação da Associated Press (2021) e um relatório do MacArthur Justice Center (2021) revelaram que 89% dos alertas do ShotSpotter em Chicago não levaram a qualquer evidência de crime com arma de fogo. Em 86% dos incidentes, não foi encontrado resultado positivo de qualquer tipo — nem bala, nem vítima, nem suspeito.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Caso Adam Toledo (Chicago, 2021):</strong> Um alerta do ShotSpotter levou policias ao local, resultando na morte de Adam Toledo, de 13 anos. Investigação posterior mostrou que um técnico da empresa tinha modificado retroactivamente a classificação do alerta de "sons de pedestres" para "disparo de arma de fogo" após o incidente, sem transparência quanto ao processo.
          </p>
        </div>
        <p style={S.p}>
          O custo do sistema é igualmente polémico. Chicago pagou aproximadamente $95.000 por milha quadrada por ano, totalizando $33 milhões entre 2018 e 2023. Mais de 90% dos sensores estão localizados em bairros maioritariamente negros e hispânicos — o que levanta questões sobre quais comunidades são alvo de vigilância aumentada.
        </p>
      </div>

      <hr style={S.divider} />

      {/* Section 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Feedback Loops e Bias Sistémico</h2>
        <p style={S.p}>
          O problema mais profundo do policiamento preditivo é estrutural: o ciclo auto-confirmatório. O algoritmo prevê crime na área A → mais patrulhas são enviadas para A → mais detenções ocorrem em A → mais dados de crime ficam registados em A → o algoritmo prevê ainda mais crime em A. O bias amplifica-se a cada iteração.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 640 200" width="100%" style={{ display: 'block' }}>
            <text x="320" y="18" fill="#fb923c" fontSize="11" fontWeight="600" textAnchor="middle">CICLO DE FEEDBACK — AMPLIFICAÇÃO DE BIAS</text>
            {/* Circular flow */}
            <ellipse cx="320" cy="110" rx="240" ry="70" fill="none" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="4,3" />
            {/* Nodes */}
            <rect x="40" y="90" width="110" height="36" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="95" y="104" fill="#fff" fontSize="9" textAnchor="middle">Dados históricos</text>
            <text x="95" y="118" fill="#fff" fontSize="9" textAnchor="middle">de crime</text>

            <rect x="200" y="40" width="110" height="36" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="255" y="54" fill="#fff" fontSize="9" textAnchor="middle">Modelo</text>
            <text x="255" y="68" fill="#fff" fontSize="9" textAnchor="middle">Preditivo</text>

            <rect x="430" y="90" width="110" height="36" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="485" y="104" fill="#fff" fontSize="9" textAnchor="middle">Patrulhamento</text>
            <text x="485" y="118" fill="#fff" fontSize="9" textAnchor="middle">intensificado</text>

            <rect x="310" y="148" width="110" height="36" rx="8" fill="#2d0a0a" stroke={C} strokeWidth="2" />
            <text x="365" y="162" fill={C} fontSize="9" textAnchor="middle" fontWeight="700">Mais detenções</text>
            <text x="365" y="176" fill={C} fontSize="9" textAnchor="middle">→ mais dados</text>

            {/* Arrows */}
            <line x1="150" y1="100" x2="195" y2="68" stroke={C} strokeWidth="1.5" markerEnd="url(#farr)" />
            <line x1="310" y1="58" x2="430" y2="98" stroke={C} strokeWidth="1.5" markerEnd="url(#farr)" />
            <line x1="480" y1="126" x2="420" y2="158" stroke={C} strokeWidth="1.5" markerEnd="url(#farr)" />
            <line x1="310" y1="163" x2="155" y2="116" stroke={C} strokeWidth="1.5" markerEnd="url(#farr)" />

            <text x="320" y="110" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="700">BIAS AMPLIFICA</text>
            <text x="320" y="124" fill="#f97316" fontSize="9" textAnchor="middle">a cada iteração</text>

            <defs>
              <marker id="farr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill={C} />
              </marker>
            </defs>
          </svg>
        </div>
        <p style={S.p}>
          A evidência empírica mais forte vem de Lum &amp; Isaac (2016), que aplicaram o algoritmo do PredPol a dados históricos de crimes de droga de Oakland. O resultado: o algoritmo concentrou a atenção policial em bairros negros mesmo quando a taxa de uso de droga era aproximadamente uniforme pela cidade. O bias nos dados de entrada (mais detenções em certas áreas por over-policing histórico) traduzia-se directamente em previsões enviesadas.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: '0.4rem' }}><strong>Soluções propostas</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Auditorias regulares e independentes dos algoritmos; uso de dados de vitimização (inquéritos à população) em vez de dados de detenções como input; comités de supervisão comunitária com poder real; moratórias preventivas. <strong>Santa Cruz, California (2020)</strong> foi a primeira cidade dos EUA a banir legalmente o policiamento preditivo.
          </p>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>O Que é o Policiamento Preditivo</strong> — policiamento preditivo usa ML para prever onde crimes vão ocorrer (place-based: PredPol, ShotSpotter) ou quem vai cometer crimes (person-based: Chicago SSL, LAPD); é controverso por amplificar viés histórico de policiamento discriminatório e criar profecias auto-cumpridas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>PredPol e Hot Spot Policing</strong> — PredPol (Geolitica) prevê zonas de crime usando modelo ETAS (Epidemic-Type Aftershock Sequences) treinado em histórico de crimes; estudo de 2021 (Lum & Isaac) demonstrou que redirecionar policiamento para zonas previstas reproduz e amplifica o viés racial dos dados históricos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>ShotSpotter e Vigilância Acústica</strong> — ShotSpotter detecta tiros por triangulação de sensores acústicos urbanos; múltiplos estudos (AP, VICE) documentaram alertas falsos que levaram a confrontos policiais desnecessários; Chicago gastou $33M sem evidência de redução de crime — caso de estudo de tecnologia de vigilância sem validação científica.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Feedback Loops e Bias Sistémico</strong> — bias de feedback ocorre quando policiamento aumentado em zonas previstas gera mais dados de crime nessas zonas, reforçando as previsões — independentemente da taxa real de crime; este ciclo converte viés histórico em discriminação algorítmica continuamente actualizada e aparentemente objectiva.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
