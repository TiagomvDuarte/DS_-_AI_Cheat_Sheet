import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { modules } from './ClimateAI';

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

const m = modules[4];

export default function CLI5() {
  return (
    <div style={S.page}>
      <Link to="/climate-ai" style={S.back}><ArrowLeft size={16} /> Voltar ao curso</Link>
      <span style={S.badge}>MÓDULO {m.num}</span>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* ── SECTION 1 ─────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Frameworks de Reporte — GRI, CSRD e TCFD</h2>
        <p style={S.p}>O panorama de reporte de sustentabilidade convergiu rapidamente após décadas de fragmentação. GRI (Global Reporting Initiative, 1997) tem foco no impacto da empresa no mundo — materialidade de impacto dupla — sendo usado por mais de 10.000 empresas globalmente. O CSRD (Corporate Sustainability Reporting Directive) é obrigatório para 50.000+ empresas europeias a partir de 2024-2026 faseado, usando ESRS (European Sustainability Reporting Standards) cobrindo E (5 tópicos), S (4 tópicos) e G (1 tópico). A dupla materialidade combina impacto financeiro (outside-in) com impacto no mundo (inside-out).</p>
        <p style={S.p}>O TCFD (Task Force on Climate-related Financial Disclosures) assenta em 4 pilares — Governance, Strategy, Risk Management, Metrics e Targets — e tornou-se obrigatório no Reino Unido, Nova Zelândia e Hong Kong. O ISSB (IFRS S1+S2) constitui a baseline global para divulgações de sustentabilidade relacionadas com o investidor, adotado por mais de 20 jurisdições. O CDP envia questionários anuais por investidores (130T USD AUM) a empresas, divulgando pontuação A-F.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 320" style={{ width: '100%', height: 'auto', display: 'block' }}>
            {/* Background */}
            <rect width="780" height="320" fill="var(--bg-secondary)" rx="10" />

            {/* Title */}
            <text x="390" y="28" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="600" letterSpacing="1">LANDSCAPE DE FRAMEWORKS DE REPORTE</text>

            {/* Header row */}
            <rect x="10" y="40" width="140" height="28" fill="rgba(249,115,22,0.06)" rx="3" />
            <rect x="155" y="40" width="140" height="28" fill="rgba(249,115,22,0.06)" rx="3" />
            <rect x="300" y="40" width="140" height="28" fill="rgba(249,115,22,0.06)" rx="3" />
            <rect x="445" y="40" width="155" height="28" fill="rgba(249,115,22,0.06)" rx="3" />
            <rect x="605" y="40" width="165" height="28" fill="rgba(249,115,22,0.06)" rx="3" />
            <text x="80" y="58" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">FRAMEWORK</text>
            <text x="225" y="58" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">ÂMBITO</text>
            <text x="370" y="58" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">GEOGRAFIA</text>
            <text x="522" y="58" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">FOCO</text>
            <text x="687" y="58" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">AUDIÊNCIA</text>

            {/* GRI row — voluntary */}
            <rect x="10" y="74" width="760" height="34" fill="rgba(249,115,22,0.06)" rx="3" />
            <text x="80" y="95" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="600">GRI</text>
            <rect x="175" y="78" width="96" height="20" fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.4)" strokeWidth="1" rx="10" />
            <text x="223" y="92" textAnchor="middle" fill="#fb923c" fontSize="10">Voluntário</text>
            <text x="370" y="95" textAnchor="middle" fill="#fbbf24" fontSize="10">Global</text>
            <text x="522" y="95" textAnchor="middle" fill="#fbbf24" fontSize="10">Impacto duplo</text>
            <text x="687" y="95" textAnchor="middle" fill="#fbbf24" fontSize="10">Stakeholders</text>

            {/* CSRD row — mandatory */}
            <rect x="10" y="114" width="760" height="34" fill="rgba(249,115,22,0.06)" rx="3" />
            <text x="80" y="135" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="600">CSRD/ESRS</text>
            <rect x="175" y="118" width="96" height="20" fill={`${color}30`} rx="10" />
            <rect x="175" y="118" width="96" height="20" fill="none" stroke={color} rx="10" />
            <text x="223" y="132" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Obrigatório</text>
            <text x="370" y="135" textAnchor="middle" fill="#fbbf24" fontSize="10">UE</text>
            <text x="522" y="135" textAnchor="middle" fill="#fbbf24" fontSize="10">Dupla materialidade</text>
            <text x="687" y="135" textAnchor="middle" fill="#fbbf24" fontSize="10">Todos stakeholders</text>

            {/* TCFD row — mandatory */}
            <rect x="10" y="154" width="760" height="34" fill="rgba(249,115,22,0.06)" rx="3" />
            <text x="80" y="175" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="600">TCFD</text>
            <rect x="175" y="158" width="96" height="20" fill={`${color}30`} rx="10" />
            <rect x="175" y="158" width="96" height="20" fill="none" stroke={color} rx="10" />
            <text x="223" y="172" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Obrigatório*</text>
            <text x="370" y="175" textAnchor="middle" fill="#fbbf24" fontSize="10">UK / NZ / HK</text>
            <text x="522" y="175" textAnchor="middle" fill="#fbbf24" fontSize="10">Risco climático</text>
            <text x="687" y="175" textAnchor="middle" fill="#fbbf24" fontSize="10">Investidores</text>

            {/* ISSB row — mandatory */}
            <rect x="10" y="194" width="760" height="34" fill="rgba(249,115,22,0.06)" rx="3" />
            <text x="80" y="215" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="600">ISSB/IFRS S1-S2</text>
            <rect x="175" y="198" width="96" height="20" fill={`${color}30`} rx="10" />
            <rect x="175" y="198" width="96" height="20" fill="none" stroke={color} rx="10" />
            <text x="223" y="212" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Obrigatório*</text>
            <text x="370" y="215" textAnchor="middle" fill="#fbbf24" fontSize="10">Global (20+ países)</text>
            <text x="522" y="215" textAnchor="middle" fill="#fbbf24" fontSize="10">Materialidade financeira</text>
            <text x="687" y="215" textAnchor="middle" fill="#fbbf24" fontSize="10">Investidores</text>

            {/* CDP row — voluntary */}
            <rect x="10" y="234" width="760" height="34" fill="rgba(249,115,22,0.06)" rx="3" />
            <text x="80" y="255" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="600">CDP</text>
            <rect x="175" y="238" width="96" height="20" fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.4)" strokeWidth="1" rx="10" />
            <text x="223" y="252" textAnchor="middle" fill="#fb923c" fontSize="10">Voluntário</text>
            <text x="370" y="255" textAnchor="middle" fill="#fbbf24" fontSize="10">Global</text>
            <text x="522" y="255" textAnchor="middle" fill="#fbbf24" fontSize="10">Clima / Água / Floresta</text>
            <text x="687" y="255" textAnchor="middle" fill="#fbbf24" fontSize="10">Investidores</text>

            {/* Timeline */}
            <line x1="30" y1="298" x2="750" y2="298" stroke="var(--card-border)" strokeWidth="2" />
            {[
              { x: 50, year: '1997', label: 'GRI' },
              { x: 230, year: '2015', label: 'TCFD' },
              { x: 390, year: '2021', label: 'SFDR' },
              { x: 560, year: '2023', label: 'ISSB' },
              { x: 700, year: '2024', label: 'CSRD' },
            ].map(d => (
              <g key={d.year}>
                <circle cx={d.x} cy="298" r="5" fill={color} />
                <text x={d.x} y="313" textAnchor="middle" fill="#fb923c" fontSize="9">{d.year}</text>
                <text x={d.x} y="285" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">{d.label}</text>
              </g>
            ))}
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>Convergência regulatória:</strong> a linha do tempo mostra a aceleração: GRI (1997, voluntário) — TCFD (2015, depois obrigatório) — SFDR (2021, UE) — ISSB baseline global (2023) — CSRD obrigatório (2024). A fragmentação histórica está a ser substituída por uma arquitectura interoperável.
        </div>
        <div style={S.note}>
          * Obrigatório em jurisdições específicas que adoptaram a framework (UK, Nova Zelândia, Hong Kong para TCFD; Austrália, Canadá, Brasil em processo para ISSB S1-S2).
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 2 ─────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. NLP para Análise de Relatórios ESG</h2>
        <p style={S.p}>Relatórios ESG são documentos longos e heterogéneos — o processamento automático é essencial para análise à escala. FinBERT (2019) é um BERT pré-treinado em corpus financeiro, com melhor desempenho que BERT base para textos financeiros e ESG. ESG-BERT foi fine-tuned especificamente em disclosure de sustentabilidade. As principais tarefas NLP para ESG incluem: extracção de informação (quanto CO2 reduziu a empresa, qual o target para 2030, quais as iniciativas sociais), classificação de sentimento para detecção de greenwashing, análise de coerência (os números nos diferentes capítulos são consistentes) e comparação entre anos (o que mudou vs relatório anterior).</p>
        <p style={S.p}>Bloomberg ESG usa NLP em mais de 10.000 relatórios por ano para extrair métricas estruturadas automaticamente. Os principais desafios são o boilerplate language (texto padrão sem substância), a vagueness ("comprometemo-nos a reduzir emissões" sem número) e a falta de padronização entre sectores.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 280" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="760" height="280" fill="var(--bg-secondary)" rx="10" />
            <text x="380" y="24" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="600" letterSpacing="1">PIPELINE NLP PARA RELATÓRIOS ESG</text>

            {/* Stage boxes */}
            {/* PDF */}
            <rect x="15" y="45" width="100" height="50" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="65" y="67" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">Relatório</text>
            <text x="65" y="80" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">PDF/HTML</text>
            <text x="65" y="93" textAnchor="middle" fill="#fb923c" fontSize="8">300+ páginas</text>

            {/* Arrow */}
            <line x1="115" y1="70" x2="140" y2="70" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr)" />

            {/* Text extraction */}
            <rect x="140" y="45" width="110" height="50" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="195" y="67" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">Extracção</text>
            <text x="195" y="80" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">de Texto</text>
            <text x="195" y="93" textAnchor="middle" fill="#fb923c" fontSize="8">OCR + parsing</text>

            {/* Arrow */}
            <line x1="250" y1="70" x2="275" y2="70" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr)" />

            {/* Chunking */}
            <rect x="275" y="45" width="110" height="50" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="330" y="67" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">Chunking</text>
            <text x="330" y="80" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">Semântico</text>
            <text x="330" y="93" textAnchor="middle" fill="#fb923c" fontSize="8">512 tokens</text>

            {/* Arrow */}
            <line x1="385" y1="70" x2="410" y2="70" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr)" />

            {/* Embeddings */}
            <rect x="410" y="45" width="120" height="50" fill={`${color}20`} stroke={color} strokeWidth="1" rx="8" />
            <text x="470" y="63" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Sentence</text>
            <text x="470" y="76" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Embeddings</text>
            <text x="470" y="89" textAnchor="middle" fill="#fb923c" fontSize="8">FinBERT / ESG-BERT</text>

            {/* Arrow down */}
            <line x1="470" y1="95" x2="470" y2="115" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr)" />

            {/* 4 task boxes */}
            <rect x="15" y="120" width="165" height="50" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="97" y="141" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">Classificação de Tópico</text>
            <text x="97" y="156" textAnchor="middle" fill="#fb923c" fontSize="9">E / S / G por secção</text>

            <rect x="195" y="120" width="165" height="50" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="277" y="141" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">Análise de Sentimento</text>
            <text x="277" y="156" textAnchor="middle" fill="#fb923c" fontSize="9">Claims positivos vs negativos</text>

            <rect x="375" y="120" width="165" height="50" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="457" y="141" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">Extracção de Entidades</text>
            <text x="457" y="156" textAnchor="middle" fill="#fb923c" fontSize="9">GHG, targets, políticas</text>

            <rect x="555" y="120" width="185" height="50" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="647" y="141" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">Verificação de Consistência</text>
            <text x="647" y="156" textAnchor="middle" fill="#fb923c" fontSize="9">Targets vs métricas reportadas</text>

            {/* Connecting lines from embeddings */}
            <line x1="470" y1="115" x2="97" y2="120" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr)" />
            <line x1="470" y1="115" x2="277" y2="120" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr)" />
            <line x1="470" y1="115" x2="457" y2="120" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr)" />
            <line x1="470" y1="115" x2="647" y2="120" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr)" />

            {/* Fine-tuning box */}
            <rect x="15" y="195" width="730" height="70" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="380" y="213" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="600" letterSpacing="0.5">BERT FINE-TUNING PARA ESG</text>
            <rect x="30" y="220" width="140" height="34" fill="rgba(249,115,22,0.10)" rx="6" />
            <text x="100" y="238" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="600">BERT Pré-treinado</text>
            <text x="100" y="250" textAnchor="middle" fill="#fb923c" fontSize="8">Wikipedia + Books</text>
            <line x1="170" y1="237" x2="210" y2="237" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr)" />
            <rect x="210" y="220" width="160" height="34" fill="rgba(249,115,22,0.10)" rx="6" />
            <text x="290" y="238" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="600">Fine-tune ESG Corpus</text>
            <text x="290" y="250" textAnchor="middle" fill="#fb923c" fontSize="8">GRI reports + CDP + CSRD docs</text>
            <line x1="370" y1="237" x2="410" y2="237" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr)" />
            <rect x="410" y="220" width="145" height="34" fill={`${color}20`} stroke={color} strokeWidth="1" rx="6" />
            <text x="482" y="238" textAnchor="middle" fill={color} fontSize="10" fontWeight="600">ESG-BERT / FinBERT</text>
            <text x="482" y="250" textAnchor="middle" fill="#fb923c" fontSize="8">Domínio especializado</text>
            <line x1="555" y1="237" x2="595" y2="237" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr)" />
            <rect x="595" y="220" width="135" height="34" fill={`${color}20`} stroke={color} strokeWidth="1" rx="6" />
            <text x="662" y="238" textAnchor="middle" fill={color} fontSize="10" fontWeight="600">Classification Head</text>
            <text x="662" y="250" textAnchor="middle" fill="#fb923c" fontSize="8">Task-specific output</text>

            <defs>
              <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.note}>
          Bloomberg ESG, Clarity AI e MSCI usam variantes deste pipeline em produção para extrair dados estruturados de dezenas de milhares de relatórios por ano, preenchendo automaticamente bases de dados ESG que historicamente requeriam analistas humanos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 3 ─────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Detecção de Greenwashing com ML</h2>
        <p style={S.p}>Greenwashing — comunicação enganosa sobre práticas ambientais — é uma preocupação central para reguladores e investidores. Os principais tipos são: cherry-picking (reportar apenas métricas favoráveis), vagueness (claims sem evidência quantitativa), irrelevance (focar em atributo irrelevante para o impacto principal), false labels (certificações sem credibilidade) e hidden trade-offs. O estudo Calel et al. (2023, Science) demonstrou que 94% dos créditos REDD+ do Verra não representavam reduções reais — greenwashing sistémico em mercados voluntários. A EU Green Claims Directive (proposta 2023) proíbe claims ambientais sem prova verificável, com multas até 4% do volume de negócios.</p>
        <p style={S.p}>ML para detecção: análise de vagueness linguística (sem números, sem metodologia), verificação cruzada com dados reais de emissões (CDP, Eurostat), análise de rede de fornecedores. ClimateBERT foi fine-tuned especificamente para identificar climate washing em documentos corporativos.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 240" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="760" height="240" fill="var(--bg-secondary)" rx="10" />
            <text x="380" y="24" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="600" letterSpacing="1">MODELO DE DETECÇÃO DE GREENWASHING</text>

            {/* Input: claim */}
            <rect x="15" y="40" width="190" height="80" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="110" y="58" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="600">CLAIM DE SUSTENTABILIDADE</text>
            <text x="110" y="74" textAnchor="middle" fill="#fbbf24" fontSize="9" fontStyle="italic">"We are carbon neutral"</text>
            <text x="110" y="88" textAnchor="middle" fill="#fb923c" fontSize="8">Sector: Oil {'&'} Gas</text>
            <text x="110" y="100" textAnchor="middle" fill="#fb923c" fontSize="8">Emissões hist.: +12% (2019-2022)</text>
            <text x="110" y="112" textAnchor="middle" fill="#fb923c" fontSize="8">Metodologia: não divulgada</text>

            {/* Arrow */}
            <line x1="205" y1="80" x2="235" y2="80" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#a2)" />

            {/* Features */}
            <rect x="235" y="40" width="200" height="145" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="335" y="57" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="600">FEATURES DE RISCO</text>
            {[
              { y: 72, label: 'Vagueness score', val: '0.92 ▲', bad: true },
              { y: 90, label: 'Scope 3 incluído?', val: 'Não ▲', bad: true },
              { y: 108, label: 'Auditoria third-party?', val: 'Não ▲', bad: true },
              { y: 126, label: 'Consistência CDP?', val: 'Baixa ▲', bad: true },
              { y: 144, label: 'Metodologia explícita?', val: 'Não ▲', bad: true },
              { y: 162, label: 'Créditos de carbono?', val: 'Sim (detalhes: N/A)', bad: false },
            ].map(f => (
              <g key={f.y}>
                <text x="245" y={f.y} fill="#fb923c" fontSize="9">{f.label}</text>
                <text x="430" y={f.y} textAnchor="end" fill={f.bad ? color : '#fb923c'} fontSize="9" fontWeight={f.bad ? '700' : '400'}>{f.val}</text>
              </g>
            ))}

            {/* Arrow */}
            <line x1="435" y1="112" x2="465" y2="112" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#a2)" />

            {/* Classifier */}
            <rect x="465" y="70" width="130" height="80" fill={`${color}15`} stroke={color} strokeWidth="1" rx="8" />
            <text x="530" y="93" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Gradient</text>
            <text x="530" y="108" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Boosting</text>
            <text x="530" y="123" textAnchor="middle" fill="#fb923c" fontSize="8">XGBoost classifier</text>
            <text x="530" y="138" textAnchor="middle" fill="#fb923c" fontSize="8">treinado em 4.500</text>
            <text x="530" y="148" textAnchor="middle" fill="#fb923c" fontSize="8">claims verificados</text>

            {/* Arrow */}
            <line x1="595" y1="112" x2="625" y2="112" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#a2)" />

            {/* Score */}
            <rect x="625" y="65" width="120" height="90" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="685" y="84" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="600">GREENWASHING RISK</text>
            <text x="685" y="115" textAnchor="middle" fill={color} fontSize="36" fontWeight="900">85</text>
            <text x="685" y="130" textAnchor="middle" fill="#fb923c" fontSize="9">/100</text>
            <rect x="638" y="138" width="94" height="10" fill="var(--card-border)" rx="5" />
            <rect x="638" y="138" width="80" height="10" fill={color} rx="5" />
            <text x="685" y="148" textAnchor="middle" fill={color} fontSize="8" fontWeight="700">ALTO RISCO</text>

            <defs>
              <marker id="a2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>Exemplo real:</strong> o claim "we are carbon neutral" sem metodologia explicada, sem auditoria third-party e com emissões históricas crescentes obtém score de 85/100 no modelo. O modelo identifica a ausência de informação como sinal de risco tão importante quanto a presença de informação contraditória.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 4 ─────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. ESG Ratings e Divergência de Métricas</h2>
        <p style={S.p}>A divergência de ratings ESG é o maior problema de credibilidade do mercado de sustentabilidade. Berg, Koelbel e Rigobon (2022, Review of Finance) demonstraram que a correlação média entre 6 grandes agências de rating ESG é apenas 0.54, versus 0.99 para ratings de crédito. As fontes de divergência são: scope (MSCI inclui controversas como métrica, Sustainalytics não), measurement (como quantificar diversidade de género — % no conselho vs % na força de trabalho total) e weights (para empresa de tecnologia, MSCI pesa E muito menos que S; Refinitiv usa pesos fixos por sector).</p>
        <p style={S.p}>A consequência é "ESG washing" através de escolha de rater (rating shopping). A standardização via ESRS (CSRD) e ISSB deve reduzir divergência ao standardizar o que é reportado — mas não resolve como interpretar os dados. Clarity AI e MSCI usam ML para extrair dados não estruturados e preencher gaps, mas perpetuam viéses se o treino for em dados históricos imprecisos.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 230" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="760" height="230" fill="var(--bg-secondary)" rx="10" />
            <text x="380" y="24" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="600" letterSpacing="1">DIVERGÊNCIA DE RATINGS ESG — MESMA EMPRESA, 5 AGÊNCIAS</text>

            {/* Y axis */}
            <line x1="80" y1="40" x2="80" y2="175" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="80" y1="175" x2="720" y2="175" stroke="var(--card-border)" strokeWidth="1" />

            {/* Y labels */}
            {['Pior', '', '', '', 'Melhor'].map((l, i) => (
              <text key={i} x="70" y={175 - i * 33} textAnchor="end" fill="rgba(249,115,22,0.3)" fontSize="8">{l}</text>
            ))}

            {/* Bars */}
            {[
              { label: 'MSCI', score: 'AAA', pct: 95, x: 130 },
              { label: 'Sustainalytics', score: 'Low 12', pct: 80, x: 260 },
              { label: 'ISS', score: 'B', pct: 55, x: 390 },
              { label: 'Refinitiv', score: '82/100', pct: 72, x: 520 },
              { label: 'S&P Global', score: '58/100', pct: 48, x: 650 },
            ].map(d => {
              const barH = d.pct * 1.3;
              return (
                <g key={d.label}>
                  <rect x={d.x - 40} y={175 - barH} width="80" height={barH} fill={`${color}40`} stroke={color} strokeWidth="1" rx="4" />
                  <text x={d.x} y={175 - barH - 8} textAnchor="middle" fill={color} fontSize="11" fontWeight="700">{d.score}</text>
                  <text x={d.x} y="190" textAnchor="middle" fill="#fb923c" fontSize="9">{d.label}</text>
                </g>
              );
            })}

            {/* Annotation */}
            <rect x="100" y="200" width="560" height="35" fill="rgba(249,115,22,0.06)" rx="6" />
            <text x="380" y="210" textAnchor="middle" fill="#fb923c" fontSize="9">Correlação entre ratings ESG: <tspan fill={color} fontWeight="700">0.54</tspan> — vs correlação de ratings de crédito (Moody's vs S{'&'}P): <tspan fill="#f97316" fontWeight="700">0.99</tspan></text>
            <text x="380" y="223" textAnchor="middle" fill="#fb923c" fontSize="9">Fonte: Berg, Koelbel {'&'} Rigobon (2022) — Review of Finance</text>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>Decomposição da divergência (Berg et al.):</strong> 56% da divergência deve-se a diferenças de scope (o que é medido), 38% a diferenças de measurement (como é medido) e apenas 6% a diferenças de weight (como as categorias são agregadas). Isto significa que standardizar o escopo de divulgação (como faz o CSRD/ISSB) tem o maior impacto potencial na convergência de ratings.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 5 ─────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Relatórios Automatizados e IA Generativa</h2>
        <p style={S.p}>A automação do reporte ESG é uma prioridade crescente com a entrada em vigor do CSRD. A colecta de dados envolve integração com ERP (SAP, Oracle), sistemas de RH, plataformas de gestão de energia (SCADA) e APIs de fornecedores. A qualidade de dados é o principal bottleneck — estimativas frequentemente necessárias para Scope 3 (factores de emissão multiplicados por dados de actividade). IoT para monitorização em tempo real — smart meters, contadores de água, sensores de resíduos — permite dados de emissões quasi em tempo real versus relatórios anuais.</p>
        <p style={S.p}>LLMs para geração de narrativa convertem dados estruturados em texto de relatório CSRD/GRI, reduzindo trabalho manual mas requerendo validação cuidadosa. Assurance digital inclui auditoria automatizada de consistência e XBRL (eXtensible Business Reporting Language) para relatórios estruturados comparáveis por máquina. As principais ferramentas do mercado são Workiva, Watershed, Salesforce Net Zero Cloud e SAP Sustainability.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 260" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="760" height="260" fill="var(--bg-secondary)" rx="10" />
            <text x="380" y="24" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="600" letterSpacing="1">PIPELINE AUTOMATIZADO DE REPORTE ESG</text>

            {/* Data sources */}
            <text x="100" y="48" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="600">FONTES DE DADOS</text>
            {[
              { y: 60, label: 'ERP (energia/água/resíduos)' },
              { y: 80, label: 'RH (diversidade/segurança)' },
              { y: 100, label: 'Supply Chain (emissões)' },
              { y: 120, label: 'IoT Sensors (tempo real)' },
            ].map(d => (
              <g key={d.y}>
                <rect x="15" y={d.y - 11} width="170" height="20" fill="rgba(249,115,22,0.06)" rx="5" />
                <text x="100" y={d.y + 3} textAnchor="middle" fill="#fbbf24" fontSize="9">{d.label}</text>
              </g>
            ))}

            {/* Arrow */}
            <line x1="185" y1="90" x2="215" y2="90" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#a3)" />

            {/* Data Lake */}
            <rect x="215" y="58" width="120" height="64" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="275" y="80" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">Data Lake</text>
            <text x="275" y="95" textAnchor="middle" fill="#fb923c" fontSize="8">Consolidação</text>
            <text x="275" y="108" textAnchor="middle" fill="#fb923c" fontSize="8">Normalização</text>

            {/* Arrow */}
            <line x1="335" y1="90" x2="365" y2="90" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#a3)" />

            {/* ML Validation */}
            <rect x="365" y="58" width="130" height="64" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="430" y="78" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">ML Validation</text>
            <text x="430" y="92" textAnchor="middle" fill="#fb923c" fontSize="8">Anomaly detection</text>
            <text x="430" y="105" textAnchor="middle" fill="#fb923c" fontSize="8">Consistency checks</text>

            {/* Arrow */}
            <line x1="495" y1="90" x2="525" y2="90" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#a3)" />

            {/* LLM */}
            <rect x="525" y="52" width="140" height="76" fill={`${color}15`} stroke={color} strokeWidth="1" rx="8" />
            <text x="595" y="73" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">LLM Report</text>
            <text x="595" y="88" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Generation</text>
            <text x="595" y="102" textAnchor="middle" fill="#fb923c" fontSize="8">Secções CSRD/GRI</text>
            <text x="595" y="115" textAnchor="middle" fill="#fb923c" fontSize="8">a partir de dados estruturados</text>

            {/* Arrow */}
            <line x1="665" y1="90" x2="695" y2="90" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#a3)" />

            {/* Human review */}
            <rect x="695" y="65" width="55" height="50" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="722" y="85" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="700">Human</text>
            <text x="722" y="98" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="700">Review</text>

            {/* Time comparison */}
            <rect x="15" y="150" width="730" height="110" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="380" y="170" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="600">COMPARAÇÃO DE TEMPO: REPORTE TRADICIONAL VS AUTOMATIZADO</text>

            {/* Traditional */}
            <text x="30" y="190" fill="#fb923c" fontSize="9">Tradicional</text>
            <rect x="30" y="195" width="480" height="18" fill="rgba(249,115,22,0.20)" stroke="#f97316" strokeWidth="1" rx="4" />
            <text x="280" y="208" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">6 meses</text>

            {/* Automated */}
            <text x="30" y="228" fill="#fb923c" fontSize="9">Automatizado</text>
            <rect x="30" y="233" width="128" height="18" fill={`${color}60`} rx="4" />
            <text x="94" y="246" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">4 semanas</text>

            <defs>
              <marker id="a3" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.note}>
          A geração automática de relatórios CSRD via LLM não elimina a necessidade de revisão humana — os reguladores europeus exigem assurance de terceiros e a responsabilidade legal recai sobre a empresa. O valor está na redução drástica do esforço manual e na melhoria da consistência dos dados.
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Frameworks de Reporte — GRI, CSRD e TCFD</strong> — GRI (Global Reporting Initiative) é o standard de relatório de sustentabilidade mais usado; CSRD (EU, 2024) torna mandatory o reporte ESG para &gt;50K empresas europeias; TCFD estrutura divulgação de riscos climáticos financeiros.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>NLP para Análise de Relatórios ESG</strong> — LLMs e NLP analisam automaticamente relatórios de sustentabilidade, extraindo métricas (emissões, consumo de água, diversidade) e avaliando alinhamento com taxonomia; reduz de semanas para minutos a análise ESG de carteiras de investimento.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Detecção de Greenwashing com ML</strong> — greenwashing é a discrepância entre afirmações ambientais e práticas reais; ML detecta inconsistências entre relatórios ESG e dados de satélite (emissões, desflorestação), finanças e notícias — CorrectAI e SustainLab são startups neste espaço.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>ESG Ratings e Divergência de Métricas</strong> — ratings ESG de diferentes agências (MSCI, Sustainalytics, ISS) correlacionam apenas 0.5–0.6 entre si — divergência enorme causada por scope, ponderação e fontes de dados diferentes; esta divergência cria oportunidades e riscos para investidores.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Relatórios Automatizados e IA Generativa</strong> — LLMs geram rascunhos de relatórios ESG a partir de dados estruturados e não-estruturados; RAG combina dados internos com standards regulatórios para garantir conformidade; reduz custo de reporte e elimina erros de transcrição manual.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
