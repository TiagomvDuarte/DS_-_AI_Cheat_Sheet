import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './GraphTheory';

const C = '#f97316';
const S = {
  page:{maxWidth:860,margin:'0 auto',padding:'0 1rem 4rem'},
  back:{display:'flex',alignItems:'center',gap:'0.5rem',color:'var(--text-secondary)',textDecoration:'none',fontSize:'0.9rem',marginBottom:'2rem'},
  badge:{display:'inline-block',background:C,color:'#fff',fontSize:'0.72rem',fontWeight:700,padding:'0.2rem 0.7rem',borderRadius:20,marginBottom:'0.75rem',letterSpacing:'0.06em',textTransform:'uppercase'},
  h1:{fontSize:'2rem',fontWeight:800,color:'var(--text-primary)',marginBottom:'0.4rem'},
  sub:{color:'var(--text-secondary)',fontSize:'1rem',lineHeight:1.6,marginBottom:'2.5rem'},
  section:{marginBottom:'2.5rem'},
  h2:{fontSize:'1.4rem',fontWeight:700,color:C,borderLeft:`3px solid ${C}`,paddingLeft:'0.85rem',marginBottom:'1.2rem'},
  highlight:{background:`${C}15`,borderLeft:`3px solid ${C}`,padding:'0.85rem 1.1rem',borderRadius:'0 8px 8px 0',marginBottom:'1rem'},
  note:{background:'var(--bg-secondary)',border:'1px solid var(--card-border)',padding:'0.85rem 1.1rem',borderRadius:8,marginBottom:'1rem'},
  p:{color:'var(--text-secondary)',lineHeight:1.75,marginBottom:'0.85rem'},
  diagram:{background:'#0f172a',borderRadius:12,padding:'1.5rem',marginBottom:'1rem',overflowX:'auto'},
  divider:{border:'none',borderTop:'1px solid var(--card-border)',margin:'2rem 0'},
};

export default function GTH8() {
  return (
    <div style={S.page}>
      <Link to="/graph-theory" style={S.back}>← Graph Theory & Network Science</Link>
      <div style={S.badge}>{modules[7].num} — GRAPH THEORY & NETWORK SCIENCE</div>
      <h1 style={S.h1}>Aplicações de Network Science</h1>
      <p style={S.sub}>Redes sociais, redes biológicas (PPI, metabólicas), epidemiologia em grafos e infraestruturas críticas — como a teoria de redes transforma a compreensão de sistemas complexos do mundo real.</p>

      {/* 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Redes Sociais</h2>
        <p style={S.p}>As <strong>redes sociais</strong> modelam-se como grafos dirigidos (Twitter: seguidores) ou não-dirigidos (Facebook: amizades). <strong>Homofilia</strong>: nós similares (idade, interesses, localização) tendem a ligar-se — "birds of a feather flock together". A homofilia é mensurável pelo coeficiente de assortatividade de Newman. Os <strong>strong ties</strong> (Granovetter, 1973) são laços fortes — amigos próximos, interacções frequentes; os <strong>weak ties</strong> são laços fracos — conhecidos, pontes estruturais entre comunidades. A hipótese de Granovetter: weak ties são criticamente importantes para difusão de informação e mobilidade no mercado de trabalho — novas oportunidades chegam por conhecidos, não amigos próximos.</p>
        <p style={S.p}><strong>Triadic closure</strong>: se A-B e A-C são amigos, a aresta B-C tende a formar-se ao longo do tempo — mecanismo que gera clustering elevado. <strong>Structural holes</strong> (Burt, 2004): um broker que liga comunidades desconexas tem vantagem de informação e controlo — acede a informação diversa e pode arbitrar entre grupos. O capital social do broker é superior ao de nós dentro de comunidades densas. Six degrees of separation no Facebook: 3.57 em 2016 (Backstrom et al.) vs 4.57 em 2008 — a rede ficou mais densa. <strong>Influencer identification</strong>: k-shell decomposition (remover iterativamente nós de grau ≤ k até estabilização) identifica o núcleo da rede — os maiores spreaders de informação.</p>
        <div style={S.highlight}>
          <p style={{...S.p, marginBottom:0}}><strong>Câmaras de eco e polarização:</strong> Homofilia + algoritmos de recomendação criam filtros de bolha. Utilizadores expõem-se principalmente a opiniões concordantes. Mensuração: modularidade da rede de partilha política. Intervenção: exposição aleatória a conteúdo cross-partisan reduz polarização afectiva mas pode aumentar polarização de atitudes (Bail et al., Science 2018).</p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 660 195" width="100%" style={{display:'block'}}>
            <text x="330" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Rede Social — Weak Ties entre Comunidades, Broker com Structural Hole</text>
            {/* Community 1 — edges first */}
            <ellipse cx="160" cy="105" rx="110" ry="70" fill="#fb923c10" stroke={C} strokeWidth="1.2" strokeDasharray="4,3"/>
            <line x1="120" y1="80" x2="170" y2="65" stroke={C} strokeWidth="1.5"/>
            <line x1="170" y1="65" x2="200" y2="100" stroke={C} strokeWidth="1.5"/>
            <line x1="200" y1="100" x2="150" y2="130" stroke={C} strokeWidth="1.5"/>
            <line x1="150" y1="130" x2="110" y2="120" stroke={C} strokeWidth="1.5"/>
            <line x1="110" y1="120" x2="120" y2="80" stroke={C} strokeWidth="1.5"/>
            <line x1="120" y1="80" x2="150" y2="130" stroke={C} strokeWidth="1.5"/>
            {/* Weak ties — before broker node */}
            <line x1="212" y1="100" x2="314" y2="105" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,3"/>
            <line x1="346" y1="105" x2="448" y2="100" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,3"/>
            <text x="263" y="92" fill="#f59e0b" fontSize="9">weak tie</text>
            <text x="397" y="92" fill="#f59e0b" fontSize="9">weak tie</text>
            {/* Community 2 — edges first */}
            <ellipse cx="500" cy="105" rx="110" ry="70" fill="#f9731610" stroke="#f97316" strokeWidth="1.2" strokeDasharray="4,3"/>
            <line x1="460" y1="80" x2="510" y2="65" stroke="#f97316" strokeWidth="1.5"/>
            <line x1="510" y1="65" x2="540" y2="100" stroke="#f97316" strokeWidth="1.5"/>
            <line x1="540" y1="100" x2="510" y2="135" stroke="#f97316" strokeWidth="1.5"/>
            <line x1="510" y1="135" x2="460" y2="130" stroke="#f97316" strokeWidth="1.5"/>
            <line x1="460" y1="130" x2="460" y2="80" stroke="#f97316" strokeWidth="1.5"/>
            {/* Nodes on top */}
            <circle cx="120" cy="80" r="12" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.8"/>
            <text x="120" y="84" fill="#e2e8f0" fontSize="9" textAnchor="middle">A</text>
            <circle cx="170" cy="65" r="12" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.8"/>
            <text x="170" y="69" fill="#e2e8f0" fontSize="9" textAnchor="middle">B</text>
            <circle cx="200" cy="100" r="12" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.8"/>
            <text x="200" y="104" fill="#e2e8f0" fontSize="9" textAnchor="middle">C</text>
            <circle cx="150" cy="130" r="12" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.8"/>
            <text x="150" y="134" fill="#e2e8f0" fontSize="9" textAnchor="middle">D</text>
            <circle cx="110" cy="120" r="12" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.8"/>
            <text x="110" y="124" fill="#e2e8f0" fontSize="9" textAnchor="middle">E</text>
            <circle cx="460" cy="80" r="12" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.8"/>
            <text x="460" y="84" fill="#e2e8f0" fontSize="9" textAnchor="middle">F</text>
            <circle cx="510" cy="65" r="12" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.8"/>
            <text x="510" y="69" fill="#e2e8f0" fontSize="9" textAnchor="middle">G</text>
            <circle cx="540" cy="100" r="12" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.8"/>
            <text x="540" y="104" fill="#e2e8f0" fontSize="9" textAnchor="middle">H</text>
            <circle cx="510" cy="135" r="12" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.8"/>
            <text x="510" y="139" fill="#e2e8f0" fontSize="9" textAnchor="middle">I</text>
            <circle cx="460" cy="130" r="12" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.8"/>
            <text x="460" y="134" fill="#e2e8f0" fontSize="9" textAnchor="middle">J</text>
            {/* Broker on top of everything */}
            <circle cx="330" cy="105" r="16" fill={`${C}40`} stroke={C} strokeWidth="2.5"/>
            <text x="330" y="102" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">B</text>
            <text x="330" y="113" fill={C} fontSize="8" textAnchor="middle">broker</text>
            <text x="160" y="188" fill={C} fontSize="9" textAnchor="middle">Comunidade 1</text>
            <text x="500" y="188" fill="#f97316" fontSize="9" textAnchor="middle">Comunidade 2</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Redes Biológicas</h2>
        <p style={S.p}>As <strong>redes de interacção proteína-proteína</strong> (PPI) são grafos onde os nós são proteínas e as arestas representam interacções físicas (binding, co-complexo, co-regulação). A base de dados <strong>STRING</strong> contém 67.6M proteínas e 3.1B interacções (evidência experimental, co-expressão, literatura). A <strong>hub-lethality rule</strong> (Jeong et al., Nature 2001) observa que proteínas hub (alto grau) são essenciais — a remoção das top-20% por grau letal em levedura em 62% dos casos, vs. 21% para proteínas aleatórias. Isto reflecte a scale-free da rede PPI (γ ≈ 2.4).</p>
        <p style={S.p}><strong>Redes metabólicas</strong> modelam reacções bioquímicas: nós são metabolitos (moléculas) e arestas são reacções enzimáticas. São naturalmente hipergrafos (uma reacção consume múltiplos metabolitos e produz múltiplos produtos). A análise de flux balance analysis (FBA) optimiza fluxos numa rede metabólica com restrições estequiométricas e de capacidade enzimática — usada em bioengenharia para maximizar produção de etanol, insulina, etc.</p>
        <p style={S.p}><strong>Gene Regulatory Networks</strong> (GRN): grafos dirigidos onde nós são genes e arestas representam regulação transcricional (o gene A activa ou reprime o gene B). <strong>Network medicine</strong> (Barabási et al., 2011): doenças não são causadas por genes isolados mas por módulos — subgrafos de genes interrelacionados na PPI. Genes de doença tendem a estar próximos na PPI. Implicação: identificar o módulo de doença permite encontrar novos alvos terapêuticos e reposicionar fármacos existentes.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Drug target identification:</strong> Proteínas com alta betweenness centrality na PPI são candidatos a alvos farmacológicos — controlam fluxo de sinalização. Contudo, hubs essenciais têm alta toxicidade se inibidos. A estratégia óptima visa proteínas com alta betweenness no módulo de doença mas baixa no restante da rede — alvos disease-specific. Aprovação de um novo fármaco oncológico aumenta ~15% se o alvo está no módulo de doença.</p>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Epidemiologia em Redes</h2>
        <p style={S.p}>Os <strong>modelos compartimentais</strong> clássicos dividem a população em estados: <strong>SIR</strong> (Susceptible → Infected → Recovered, sem reinfecção), <strong>SIS</strong> (sem imunidade, endémico), <strong>SEIR</strong> (com período de exposição/incubação). Em grafos, cada nó tem um estado e a infecção propaga-se pelas arestas com taxa β; recuperação com taxa γ. O <strong>R₀ = β/γ</strong> é a taxa reprodutiva básica — número médio de infecções secundárias de um caso primário. R₀ &gt; 1 → epidemia; R₀ &lt; 1 → extinção.</p>
        <p style={S.p}>Em redes <strong>scale-free heterogéneas</strong>, o limiar de epidemia satisfaz β_c = ⟨k⟩ / ⟨k²⟩ → 0 para distribuições de grau em lei de potência com γ ≤ 3 (Pastor-Satorras & Vespignani, 2001) — mesmo uma infecção com taxa de transmissão muito baixa se torna endémica. Isto explica a persistência de vírus de computador na Internet. <strong>Vacinação aleatória</strong> é ineficaz em scale-free networks: requer imunidade de grupo em quase 100% da população. <strong>Vacinação de hubs</strong> (targeted vaccination) é dramaticamente mais eficiente — imunizar os k mais conectados para pequeno k pode eliminar a epidemia.</p>
        <p style={S.p}><strong>COVID-19 e modelos de rede:</strong> Modelos de agente baseados em grafos de contacto simularam a propagação por comunidades, padrões de mobilidade, e a eficácia de intervenções NPIs (máscaras, lockdowns, rastreio de contactos). Contact tracing em grafos: identificar vizinhos de casos confirmados para quarentena — trade-off entre eficácia epidemiológica e privacidade. Aplicações: COVID Alert Portugal, NHS COVID-19 (UK).</p>
        <div style={S.diagram}>
          <svg viewBox="0 0 660 190" width="100%" style={{display:'block'}}>
            <text x="330" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">SIR em Grafo — Propagação a partir de Nó Infectado Inicial (S=azul, I=vermelho, R=verde)</text>
            {/* edges first, then nodes on top */}
            <line x1="60" y1="75" x2="100" y2="60" stroke="#475569" strokeWidth="1.2"/>
            <line x1="100" y1="60" x2="130" y2="90" stroke="#475569" strokeWidth="1.2"/>
            <line x1="130" y1="90" x2="80" y2="110" stroke="#475569" strokeWidth="1.2"/>
            <line x1="60" y1="75" x2="80" y2="110" stroke="#475569" strokeWidth="1.2"/>
            <line x1="210" y1="75" x2="250" y2="60" stroke="#475569" strokeWidth="1.2"/>
            <line x1="250" y1="60" x2="280" y2="90" stroke="#475569" strokeWidth="1.2"/>
            <line x1="280" y1="90" x2="230" y2="110" stroke="#475569" strokeWidth="1.2"/>
            <line x1="210" y1="75" x2="230" y2="110" stroke="#475569" strokeWidth="1.2"/>
            <line x1="360" y1="75" x2="400" y2="60" stroke="#475569" strokeWidth="1.2"/>
            <line x1="400" y1="60" x2="430" y2="90" stroke="#475569" strokeWidth="1.2"/>
            <line x1="430" y1="90" x2="380" y2="110" stroke="#475569" strokeWidth="1.2"/>
            <line x1="360" y1="75" x2="380" y2="110" stroke="#475569" strokeWidth="1.2"/>
            <line x1="515" y1="75" x2="555" y2="60" stroke="#475569" strokeWidth="1.2"/>
            <line x1="555" y1="60" x2="585" y2="90" stroke="#475569" strokeWidth="1.2"/>
            <line x1="585" y1="90" x2="535" y2="110" stroke="#475569" strokeWidth="1.2"/>
            <line x1="515" y1="75" x2="535" y2="110" stroke="#475569" strokeWidth="1.2"/>
            {/* t=0 */}
            <text x="90" y="38" fill="#94a3b8" fontSize="10" textAnchor="middle">t=0</text>
            <circle cx="60" cy="75" r="11" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
            <circle cx="100" cy="60" r="11" fill={C} stroke="#f9a8d4" strokeWidth="2"/>
            <circle cx="130" cy="90" r="11" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
            <circle cx="80" cy="110" r="11" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
            {/* Arrow */}
            <text x="175" y="90" fill="#94a3b8" fontSize="18" textAnchor="middle">→</text>
            {/* t=1 */}
            <text x="240" y="38" fill="#94a3b8" fontSize="10" textAnchor="middle">t=1</text>
            <circle cx="210" cy="75" r="11" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
            <circle cx="250" cy="60" r="11" fill="#f97316" stroke="#6ee7b7" strokeWidth="2"/>
            <circle cx="280" cy="90" r="11" fill={C} stroke="#f9a8d4" strokeWidth="2"/>
            <circle cx="230" cy="110" r="11" fill={C} stroke="#f9a8d4" strokeWidth="2"/>
            {/* Arrow */}
            <text x="325" y="90" fill="#94a3b8" fontSize="18" textAnchor="middle">→</text>
            {/* t=2 */}
            <text x="390" y="38" fill="#94a3b8" fontSize="10" textAnchor="middle">t=2</text>
            <circle cx="360" cy="75" r="11" fill={C} stroke="#f9a8d4" strokeWidth="2"/>
            <circle cx="400" cy="60" r="11" fill="#f97316" stroke="#6ee7b7" strokeWidth="2"/>
            <circle cx="430" cy="90" r="11" fill="#f97316" stroke="#6ee7b7" strokeWidth="2"/>
            <circle cx="380" cy="110" r="11" fill="#f97316" stroke="#6ee7b7" strokeWidth="2"/>
            {/* Arrow */}
            <text x="475" y="90" fill="#94a3b8" fontSize="18" textAnchor="middle">→</text>
            {/* t=3 */}
            <text x="545" y="38" fill="#94a3b8" fontSize="10" textAnchor="middle">t=3</text>
            <circle cx="515" cy="75" r="11" fill="#f97316" stroke="#6ee7b7" strokeWidth="2"/>
            <circle cx="555" cy="60" r="11" fill="#f97316" stroke="#6ee7b7" strokeWidth="2"/>
            <circle cx="585" cy="90" r="11" fill="#f97316" stroke="#6ee7b7" strokeWidth="2"/>
            <circle cx="535" cy="110" r="11" fill="#f97316" stroke="#6ee7b7" strokeWidth="2"/>
            {/* Legend */}
            <circle cx="180" cy="160" r="7" fill="#f97316" stroke="#f97316" strokeWidth="1.2"/>
            <text x="193" y="164" fill="#94a3b8" fontSize="9">Susceptível (S)</text>
            <circle cx="300" cy="160" r="7" fill={C} stroke="#f9a8d4" strokeWidth="1.5"/>
            <text x="313" y="164" fill="#94a3b8" fontSize="9">Infectado (I)</text>
            <circle cx="410" cy="160" r="7" fill="#f97316" stroke="#6ee7b7" strokeWidth="1.5"/>
            <text x="423" y="164" fill="#94a3b8" fontSize="9">Recuperado (R)</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Infraestruturas Críticas e Redes Financeiras</h2>
        <p style={S.p}><strong>Power grids</strong> são grafos de transmissão eléctrica: nós = geradores, subestações, cargas; arestas = linhas de transmissão com capacidade máxima. As redes eléctricas não são scale-free (topologia mais próxima de small-world com γ alto) — uma vulnerabilidade diferente: <em>cascading failures</em>. Quando uma linha falha, o fluxo redistribui-se para as restantes; se alguma excede capacidade, falha também, desencadeando um cascade. O <strong>apagão do Nordeste americano de 2003</strong> começou com um erro de software que falhou em alertar operadores sobre linhas sobrecarregadas em Ohio; em 8 minutos, 50 milhões de pessoas ficaram sem electricidade em 8 estados dos EUA e Canadá.</p>
        <p style={S.p}><strong>Internet a nível AS</strong>: o grafo de Autonomous Systems (≈70k nós) tem estrutura scale-free (γ ≈ 2.1). Protocolo BGP para routing entre ASes. Ataques DDoS a grandes ISPs como ataques direcionados a hubs. O ataque à Dyn DNS em 2016 (via botnet Mirai de dispositivos IoT) derrubou Twitter, Netflix, Amazon e centenas de serviços — ao atingir um nó crítico de infraestrutura DNS.</p>
        <p style={S.p}><strong>Redes financeiras:</strong> bancos como nós, exposição interbancária como arestas pesadas. O risco sistémico emerge de nós <em>too-interconnected-to-fail</em>: bancos com alta betweenness na rede de exposições podem desencadear cascades de default. A crise financeira de 2008 e a crise da dívida soberana de 2010-2012 foram modeladas como cascades em redes de contágio financeiro. Regulação pós-crise: capital buffers para bancos sistemicamente importantes (SIBs), stress tests com simulação de cascades, clearing obrigatório de derivados por contraparte central (reduz rede interbancária a topologia estrela — menos interconnected).</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Modelação de cascades:</strong> Threshold model (Watts, 2002): cada nó falha se a fracção de vizinhos falhados excede um threshold φ. Cascade global ocorre se existe um caminho de falhas conectado. A vulnerabilidade global depende da heterogeneidade dos thresholds e da estrutura da rede — redes com poucos hubs têm maior risco de cascade global mesmo com threshold médio alto.</p>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.5rem"}}><strong>Redes sociais</strong>: análise de homofilia, força de laços fracos (Granovetter), triadic closure e detecção de influenciadores via centralidade.</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Redes biológicas</strong>: redes de interação proteína-proteína (PPI), redes metabólicas e redes génicas — topologia scale-free com hubs essenciais.</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Epidemiologia em redes</strong>: modelos SIR/SIS em grafos — R₀ depende da estrutura de rede; vacinação de hubs é exponencialmente mais eficaz.</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Infraestruturas críticas</strong>: redes eléctricas, de água e de transporte — identificação de nós críticos via betweenness e análise de cascata de falhas.</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Redes financeiras</strong>: risco sistémico, contágio inter-bancário e detecção de comunidades para supervisão regulatória.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
