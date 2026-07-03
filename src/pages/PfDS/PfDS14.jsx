import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const color = '#f97316'

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
}

function ExecutionModelSVG() {
  return (
    <svg width="100%" viewBox="0 0 760 200" style={{ display: 'block', margin: '1.5rem 0' }}>
      <rect x="20" y="60" width="130" height="80" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="85" y="97" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>User Action</text>
      <text x="85" y="114" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">click / input</text>

      <rect x="200" y="60" width="130" height="80" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="265" y="97" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Python Reruns</text>
      <text x="265" y="114" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">top to bottom</text>

      <rect x="380" y="60" width="130" height="80" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="445" y="97" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>New Output</text>
      <text x="445" y="114" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">React re-render</text>

      <rect x="560" y="60" width="130" height="80" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="625" y="97" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Browser UI</text>
      <text x="625" y="114" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">updated state</text>

      <defs>
        <marker id="arrowExec" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
      </defs>
      <line x1="152" y1="100" x2="196" y2="100" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowExec)" />
      <line x1="332" y1="100" x2="376" y2="100" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowExec)" />
      <line x1="512" y1="100" x2="556" y2="100" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowExec)" />
      <path d="M625,142 C625,178 85,178 85,143" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#arrowExec)" />
      <text x="355" y="192" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">loop: cada interação dispara nova execução do script</text>
    </svg>
  )
}

function RenderingPipelineSVG() {
  return (
    <svg width="100%" viewBox="0 0 720 160" style={{ display: 'block', margin: '1.5rem 0' }}>
      <defs>
        <marker id="arrowPipe" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
      </defs>
      <rect x="10" y="50" width="130" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="75" y="77" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Python Objects</text>
      <text x="75" y="94" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">df, fig, str, list</text>

      <line x1="142" y1="80" x2="178" y2="80" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowPipe)" />

      <rect x="180" y="50" width="160" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="260" y="77" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Streamlit Magic</text>
      <text x="260" y="94" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">st.write / st.dataframe</text>

      <line x1="342" y1="80" x2="378" y2="80" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowPipe)" />

      <rect x="380" y="50" width="160" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="460" y="77" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Serialisation</text>
      <text x="460" y="94" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">JSON / Arrow / Protobuf</text>

      <line x1="542" y1="80" x2="578" y2="80" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowPipe)" />

      <rect x="580" y="50" width="130" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="645" y="77" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>React Frontend</text>
      <text x="645" y="94" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">HTML components</text>
    </svg>
  )
}

function WidgetStateSVG() {
  return (
    <svg width="100%" viewBox="0 0 700 220" style={{ display: 'block', margin: '1.5rem 0' }}>
      <defs>
        <marker id="arrowWidget" markerWidth="8" markerHeight="8" refX="8" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
      </defs>
      <ellipse cx="100" cy="100" rx="80" ry="45" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1.5" />
      <text x="100" y="95" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>User</text>
      <text x="100" y="112" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">interacts</text>

      <rect x="240" y="60" width="160" height="80" rx="10" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1.5" />
      <text x="320" y="95" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>session_state</text>
      <text x="320" y="112" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">key: value updated</text>

      <rect x="480" y="60" width="160" height="80" rx="10" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1.5" />
      <text x="560" y="95" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Script Reruns</text>
      <text x="560" y="112" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">reads new value</text>

      <line x1="182" y1="100" x2="238" y2="100" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowWidget)" />
      <line x1="402" y1="100" x2="478" y2="100" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowWidget)" />
      <path d="M560,142 C560,190 100,190 100,148" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#arrowWidget)" />
      <text x="330" y="205" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">novo output renderizado no browser</text>
    </svg>
  )
}

function LayoutGridSVG() {
  return (
    <svg width="100%" viewBox="0 0 700 260" style={{ display: 'block', margin: '1.5rem 0' }}>
      <rect x="10" y="10" width="680" height="240" rx="10" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="350" y="35" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-secondary)">Streamlit App Layout</text>

      <rect x="20" y="45" width="130" height="195" rx="6" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1.5" />
      <text x="85" y="65" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>st.sidebar</text>
      <rect x="30" y="75" width="110" height="18" rx="4" fill="rgba(249,115,22,0.12)" />
      <text x="85" y="88" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">selectbox</text>
      <rect x="30" y="100" width="110" height="18" rx="4" fill="rgba(249,115,22,0.12)" />
      <text x="85" y="113" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">slider</text>
      <rect x="30" y="125" width="110" height="18" rx="4" fill="rgba(249,115,22,0.12)" />
      <text x="85" y="138" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">checkbox</text>

      <rect x="165" y="45" width="515" height="45" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="422" y="73" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-primary)">st.title / st.header</text>

      <rect x="165" y="100" width="245" height="80" rx="6" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1.5" />
      <text x="287" y="125" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-primary)">col1 (ratio 2)</text>
      <text x="287" y="142" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">st.line_chart(df)</text>

      <rect x="420" y="100" width="120" height="80" rx="6" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1.5" />
      <text x="480" y="125" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-primary)">col2 (ratio 1)</text>
      <text x="480" y="142" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">st.metric()</text>

      <rect x="550" y="100" width="130" height="80" rx="6" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1.5" />
      <text x="615" y="125" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-primary)">col3 (ratio 1)</text>
      <text x="615" y="142" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">st.metric()</text>

      <rect x="165" y="192" width="515" height="38" rx="6" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="1" strokeDasharray="5,3" />
      <text x="422" y="215" textAnchor="middle" fontSize="10" fill="var(--text-primary)">st.expander("Ver detalhes")</text>

      <text x="287" y="97" textAnchor="middle" fontSize="9" fill={color}>cols = st.columns([2, 1, 1])</text>
    </svg>
  )
}

function ChartDecisionSVG() {
  return (
    <svg width="100%" viewBox="0 0 720 260" style={{ display: 'block', margin: '1.5rem 0' }}>
      <defs>
        <marker id="arrowChart" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <rect x="280" y="10" width="160" height="40" rx="8" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth="1.5" />
      <text x="360" y="35" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Que dados tens?</text>

      <line x1="360" y1="52" x2="360" y2="80" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrowChart)" />

      <rect x="100" y="82" width="130" height="38" rx="7" fill="rgba(249,115,22,0.07)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="165" y="105" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Série temporal</text>

      <rect x="245" y="82" width="130" height="38" rx="7" fill="rgba(249,115,22,0.07)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="310" y="105" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Distribuição</text>

      <rect x="390" y="82" width="130" height="38" rx="7" fill="rgba(249,115,22,0.07)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="455" y="105" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Comparação</text>

      <rect x="535" y="82" width="130" height="38" rx="7" fill="rgba(249,115,22,0.07)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="600" y="105" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Correlação</text>

      <line x1="360" y1="52" x2="165" y2="82" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrowChart)" />
      <line x1="360" y1="52" x2="310" y2="82" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrowChart)" />
      <line x1="360" y1="52" x2="455" y2="82" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrowChart)" />
      <line x1="360" y1="52" x2="600" y2="82" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrowChart)" />

      <rect x="100" y="160" width="130" height="40" rx="7" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth="1.5" />
      <text x="165" y="184" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>st.line_chart</text>

      <rect x="245" y="160" width="130" height="40" rx="7" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth="1.5" />
      <text x="310" y="178" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>px.histogram</text>
      <text x="310" y="193" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">(plotly)</text>

      <rect x="390" y="160" width="130" height="40" rx="7" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth="1.5" />
      <text x="455" y="184" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>st.bar_chart</text>

      <rect x="535" y="160" width="130" height="40" rx="7" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth="1.5" />
      <text x="600" y="184" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>st.scatter_chart</text>

      <line x1="165" y1="122" x2="165" y2="158" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrowChart)" />
      <line x1="310" y1="122" x2="310" y2="158" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrowChart)" />
      <line x1="455" y1="122" x2="455" y2="158" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrowChart)" />
      <line x1="600" y1="122" x2="600" y2="158" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrowChart)" />
    </svg>
  )
}

function StateLifecycleSVG() {
  const W = 780, bw = 118, bh = 70, by = 55;
  const items = ['Inicializa','User Action','Rerun','Lê State','Render'];
  const subs = ['session_state','event fired','script executa','valores persistidos','novo UI'];
  const gap = (W - 20 - items.length * bw) / (items.length - 1);
  const xs = items.map((_, i) => 10 + i * (bw + gap));
  return (
    <svg width="100%" viewBox={`0 0 ${W} 205`} style={{ display: 'block', margin: '1.5rem 0' }}>
      <defs>
        <marker id="arrowState" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
      </defs>
      {items.map((label, i) => (
        <g key={i}>
          <rect x={xs[i]} y={by} width={bw} height={bh} rx="9" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1.5" />
          <text x={xs[i] + bw/2} y={by+26} textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>{label}</text>
          <text x={xs[i] + bw/2} y={by+43} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{subs[i]}</text>
          {i < items.length - 1 && <line x1={xs[i] + bw + 2} y1={by + bh/2} x2={xs[i+1] - 2} y2={by + bh/2} stroke={color} strokeWidth="1.5" markerEnd="url(#arrowState)" />}
        </g>
      ))}
      <path d={`M${xs[4]+bw},${by+bh} Q${xs[4]+bw},155 ${W/2},160 Q${xs[0]},155 ${xs[0]},${by+bh}`} fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="6,3" markerEnd="url(#arrowState)" />
      <text x={W/2} y="188" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">loop contínuo — state sobrevive entre reruns</text>
    </svg>
  );
}

function CachingDecisionSVG() {
  return (
    <svg width="100%" viewBox="0 0 680 230" style={{ display: 'block', margin: '1.5rem 0' }}>
      <defs>
        <marker id="arrowCache" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill={color} />
        </marker>
      </defs>
      <rect x="240" y="10" width="200" height="45" rx="9" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth="1.5" />
      <text x="340" y="38" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Função a cachear?</text>

      <rect x="100" y="92" width="185" height="45" rx="9" fill="rgba(249,115,22,0.08)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="192" y="110" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Retorna dados?</text>
      <text x="192" y="127" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">(DataFrame, JSON, lista)</text>

      <rect x="395" y="92" width="185" height="45" rx="9" fill="rgba(249,115,22,0.08)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="487" y="110" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Recurso partilhado?</text>
      <text x="487" y="127" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">(modelo ML, conexão BD)</text>

      <line x1="340" y1="57" x2="192" y2="92" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowCache)" />
      <line x1="340" y1="57" x2="487" y2="92" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowCache)" />

      <rect x="70" y="175" width="245" height="45" rx="9" fill="rgba(249,115,22,0.15)" stroke={color} strokeWidth="2" />
      <text x="192" y="200" textAnchor="middle" fontSize="13" fontWeight="800" fill={color}>@st.cache_data</text>
      <text x="192" y="215" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">cópia por utilizador, seguro</text>

      <rect x="365" y="175" width="245" height="45" rx="9" fill="rgba(249,115,22,0.15)" stroke={color} strokeWidth="2" />
      <text x="487" y="200" textAnchor="middle" fontSize="13" fontWeight="800" fill={color}>@st.cache_resource</text>
      <text x="487" y="215" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">partilhado entre sessões</text>

      <line x1="192" y1="139" x2="192" y2="173" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowCache)" />
      <line x1="487" y1="139" x2="487" y2="173" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowCache)" />
    </svg>
  )
}

function FilePipelineSVG() {
  return (
    <svg width="100%" viewBox="0 0 700 150" style={{ display: 'block', margin: '1.5rem 0' }}>
      <defs>
        <marker id="arrowFile" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
      </defs>
      {[
        { x: 10, w: 100, label: 'Upload', sub: 'drag & drop' },
        { x: 130, w: 100, label: 'Bytes', sub: 'BytesIO object' },
        { x: 250, w: 130, label: 'Parse', sub: 'pandas / PIL / json' },
        { x: 400, w: 130, label: 'Process', sub: 'filter, transform' },
        { x: 550, w: 130, label: 'Display', sub: 'st.dataframe / st.image' },
      ].map((item, i, arr) => (
        <g key={i}>
          <rect x={item.x} y="40" width={item.w} height="70" rx="9" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1.5" />
          <text x={item.x + item.w / 2} y="70" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>{item.label}</text>
          <text x={item.x + item.w / 2} y="87" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{item.sub}</text>
          {i < arr.length - 1 && (
            <line x1={item.x + item.w + 2} y1="75" x2={arr[i + 1].x - 2} y2="75" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowFile)" />
          )}
        </g>
      ))}
    </svg>
  )
}

function MLAppArchSVG() {
  return (
    <svg width="100%" viewBox="0 0 680 220" style={{ display: 'block', margin: '1.5rem 0' }}>
      <rect x="10" y="10" width="160" height="200" rx="10" fill="rgba(249,115,22,0.07)" stroke={color} strokeWidth="1.5" />
      <text x="90" y="35" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Sidebar Controls</text>
      <rect x="22" y="48" width="136" height="22" rx="5" fill="rgba(249,115,22,0.12)" />
      <text x="90" y="63" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">file_uploader</text>
      <rect x="22" y="76" width="136" height="22" rx="5" fill="rgba(249,115,22,0.12)" />
      <text x="90" y="91" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">model selectbox</text>
      <rect x="22" y="104" width="136" height="22" rx="5" fill="rgba(249,115,22,0.12)" />
      <text x="90" y="119" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">test_size slider</text>
      <rect x="22" y="132" width="136" height="22" rx="5" fill="rgba(249,115,22,0.12)" />
      <text x="90" y="147" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Train button</text>

      <rect x="190" y="10" width="480" height="90" rx="10" fill="rgba(225,29,72,0.05)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="430" y="35" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-secondary)">EDA Area</text>
      <rect x="202" y="45" width="220" height="45" rx="6" fill="rgba(249,115,22,0.08)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="312" y="70" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">df.describe() table</text>
      <rect x="432" y="45" width="226" height="45" rx="6" fill="rgba(249,115,22,0.08)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="545" y="70" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">correlation heatmap</text>

      <rect x="190" y="115" width="480" height="90" rx="10" fill="rgba(225,29,72,0.05)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="430" y="138" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-secondary)">Results Area</text>
      <rect x="202" y="148" width="140" height="45" rx="6" fill="rgba(249,115,22,0.08)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="272" y="175" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">metrics</text>
      <rect x="352" y="148" width="155" height="45" rx="6" fill="rgba(249,115,22,0.08)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="429" y="175" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">feature importance</text>
      <rect x="517" y="148" width="141" height="45" rx="6" fill="rgba(249,115,22,0.08)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="587" y="175" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">predict form</text>
    </svg>
  )
}

function MultiPageSVG() {
  return (
    <svg width="100%" viewBox="0 0 680 230" style={{ display: 'block', margin: '1.5rem 0' }}>
      <defs>
        <marker id="arrowPage" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill={color} />
        </marker>
      </defs>
      <rect x="10" y="80" width="130" height="70" rx="9" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth="2" />
      <text x="75" y="108" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>app.py</text>
      <text x="75" y="125" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">entry point</text>
      <text x="75" y="140" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">st.navigation()</text>

      <rect x="220" y="10" width="160" height="200" rx="9" fill="rgba(225,29,72,0.06)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="300" y="35" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-secondary)">pages/</text>
      {['1_Home.py', '2_EDA.py', '3_Model.py', '4_Predict.py'].map((name, i) => (
        <g key={i}>
          <rect x="232" y={50 + i * 40} width="136" height="28" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
          <text x="300" y={68 + i * 40} textAnchor="middle" fontSize="10" fill={color}>{name}</text>
        </g>
      ))}

      <line x1="142" y1="115" x2="218" y2="115" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowPage)" />

      <rect x="460" y="20" width="200" height="190" rx="9" fill="rgba(225,29,72,0.06)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="560" y="45" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-secondary)">Sidebar Nav</text>
      {['Home', 'EDA', 'Model', 'Predict'].map((name, i) => (
        <g key={i}>
          <rect x="472" y={58 + i * 36} width="176" height="26" rx="5" fill={i === 0 ? 'rgba(225,29,72,0.2)' : 'rgba(249,115,22,0.07)'} stroke={i === 0 ? color : 'var(--card-border)'} strokeWidth="1" />
          <text x="560" y={75 + i * 36} textAnchor="middle" fontSize="10" fill={i === 0 ? color : 'var(--text-secondary)'}>{name}</text>
        </g>
      ))}

      <line x1="382" y1="115" x2="458" y2="115" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowPage)" />
    </svg>
  )
}

function DeploymentSVG() {
  return (
    <svg width="100%" viewBox="0 0 680 260" style={{ display: 'block', margin: '1.5rem 0' }}>
      <text x="340" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-secondary)">Custo vs Controlo — Opções de Deploy</text>

      <line x1="40" y1="220" x2="640" y2="220" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="340" y="245" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Controlo / Flexibilidade</text>
      <text x="340" y="258" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">baixo -------- alto</text>

      <line x1="40" y1="30" x2="40" y2="220" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="25" y="125" textAnchor="middle" fontSize="10" fill="var(--text-secondary)" transform="rotate(-90 25 125)">Custo</text>

      {[
        { x: 80, y: 190, label: 'Community Cloud', sub: 'Grátis', color: '#f97316' },
        { x: 240, y: 155, label: 'Railway / Render', sub: '~$5/mês', color: '#f97316' },
        { x: 430, y: 110, label: 'Docker + VPS', sub: '~$10-20/mês', color: '#f97316' },
        { x: 580, y: 65, label: 'GCP Cloud Run', sub: 'pay-per-use', color: color },
      ].map((item, i) => (
        <g key={i}>
          <circle cx={item.x} cy={item.y} r="18" fill={item.color} fillOpacity="0.2" stroke={item.color} strokeWidth="2" />
          <text x={item.x} y={item.y + 4} textAnchor="middle" fontSize="10" fontWeight="700" fill={item.color}>{i + 1}</text>
          <text x={item.x} y={item.y + 30} textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-primary)">{item.label}</text>
          <text x={item.x} y={item.y + 43} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{item.sub}</text>
        </g>
      ))}

      <text x="50" y="215" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">$0</text>
      <text x="50" y="40" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">$$$</text>
    </svg>
  )
}

export default function PfDS14() {
  return (
    <div style={S.page}>
      <Link to="/pfds" style={S.back}><ArrowLeft size={16} /> Voltar a Programming for Data Science</Link>

      <div style={S.tag}>Module 14</div>
      <h1 style={S.h1}>Streamlit — Data Apps em Python</h1>
      <p style={S.lead}>
        Streamlit transforma scripts Python em aplicações web interativas em minutos, sem necessitar de HTML, CSS ou JavaScript.
        Ideal para prototipagem rápida, dashboards analíticos e demos de modelos de Machine Learning.
      </p>

      {/* ── SECTION 1 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. O que é Streamlit</h2>
        <p style={S.p}>
          Streamlit é uma framework open-source que converte scripts Python puros em web apps interativas. O modelo de execução é simples:
          cada vez que o utilizador interage com um widget, o script é reexecutado de cima para baixo e o novo output é renderizado no browser.
          Não há callbacks explícitos, state machines complexas nem separação frontend/backend — tudo fica num único ficheiro .py.
        </p>

        <ExecutionModelSVG />

        <h3 style={S.h3}>Instalação e primeiro run</h3>
        <div style={S.code}>{`# Instalar Streamlit
pip install streamlit

# Verificar instalação
streamlit --version

# Criar app mínima — hello.py
import streamlit as st
st.title("Olá, Streamlit!")
st.write("A minha primeira data app.")

# Lançar no browser (abre em localhost:8501)
streamlit run hello.py

# Com hot-reload automático ao guardar o ficheiro`}</div>

        <h3 style={S.h3}>Streamlit vs outras frameworks</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Critério</th>
              <th style={S.th}>Streamlit</th>
              <th style={S.th}>Dash</th>
              <th style={S.th}>Gradio</th>
              <th style={S.th}>Panel</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Curva de aprendizagem', 'Muito baixa', 'Média', 'Baixa', 'Média-alta'],
              ['Flexibilidade layout', 'Média', 'Alta', 'Baixa', 'Alta'],
              ['Foco em ML/AI', 'Alto', 'Médio', 'Muito alto', 'Médio'],
              ['Comunidade', 'Muito grande', 'Grande', 'Crescente', 'Média'],
              ['Deploy grátis', 'Community Cloud', 'Heroku/Railway', 'Hugging Face', 'Hugging Face'],
              ['Customização CSS', 'Limitada', 'Total', 'Limitada', 'Total'],
            ].map(([crit, ...vals], i) => (
              <tr key={i} style={i % 2 === 0 ? { background: 'var(--bg-secondary)' } : {}}>
                <td style={{ ...S.td, fontWeight: 600 }}>{crit}</td>
                {vals.map((v, j) => <td key={j} style={S.td}>{v}</td>)}
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.note}>
          <strong>Nota:</strong> Para prototipagem rápida e demos de ML, Streamlit é a escolha mais produtiva. Para dashboards com
          requisitos de layout muito específicos, Dash ou Panel oferecem mais controlo.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 2 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Elementos de Texto e Dados</h2>
        <p style={S.p}>
          Streamlit oferece uma hierarquia de elementos de texto — desde títulos a markdown — e funções especializadas
          para apresentar DataFrames, tabelas e métricas. A função <code>st.write()</code> é o canivete suíço: detecta automaticamente
          o tipo do objecto e renderiza-o adequadamente.
        </p>

        <RenderingPipelineSVG />

        <div style={S.code}>{`import streamlit as st
import pandas as pd

# Hierarquia de títulos
st.title("Título Principal")          # <h1>
st.header("Secção")                   # <h2>
st.subheader("Sub-secção")            # <h3>

# Texto e Markdown
st.write("Texto simples ou **markdown** com suporte a $LaTeX$")
st.markdown("## Heading em markdown")
st.markdown(":red[texto vermelho] e :blue[azul]")  # color tags

# Blocos de código com syntax highlight
st.code("""
def greet(name):
    return f"Olá, {name}!"
""", language="python")

# st.write() detecta o tipo automaticamente
df = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})
st.write(df)          # renderiza como tabela interactiva
st.write({"key": 1})  # JSON expandível
st.write(3.14)        # número

# DataFrames e tabelas
st.dataframe(df, use_container_width=True)  # interactivo (sort, filter)
st.table(df)                                # estático (não ordenável)

# Métricas com delta
st.metric(label="Accuracy", value="94.2%", delta="+1.3%")
st.metric(label="Loss",     value="0.082",  delta="-0.01", delta_color="inverse")

# Magic commands — só escrever a variável!
df  # equivale a st.write(df)
"# Heading magic"  # equivale a st.markdown("# Heading magic")`}</div>

        <div style={S.highlight}>
          <strong>Magic commands:</strong> qualquer variável ou string literal escrita sozinha numa linha é automaticamente
          passada a <code>st.write()</code>. Útil para exploração rápida mas pode causar confusão em código de produção.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 3 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Widgets de Input</h2>
        <p style={S.p}>
          Os widgets são os blocos de interatividade do Streamlit. Cada widget devolve o seu valor actual
          directamente como return value da função — sem event handlers. O Streamlit guarda o estado em
          <code> st.session_state</code> entre reruns.
        </p>

        <WidgetStateSVG />

        <div style={S.code}>{`import streamlit as st

# Slider — devolve int ou float
idade = st.slider("Idade", min_value=0, max_value=100, value=25, step=1)

# Range slider
intervalo = st.slider("Intervalo de datas", 2000, 2024, (2010, 2020))

# Selectbox — dropdown
pais = st.selectbox("País", ["Portugal", "Brasil", "Angola", "Moçambique"])

# Multiselect — checkbox múltiplo
features = st.multiselect(
    "Features para o modelo",
    options=["idade", "salário", "educação", "experiência"],
    default=["idade", "salário"]
)

# Text inputs
nome   = st.text_input("Nome", placeholder="Escreve o teu nome")
bio    = st.text_area("Biografia", height=150)
numero = st.number_input("Valor", min_value=0.0, max_value=1.0, step=0.01)

# Boolean widgets
debug    = st.checkbox("Activar modo debug", value=False)
genero   = st.radio("Género", ["Masculino", "Feminino", "Outro"])
data     = st.date_input("Data de nascimento")
hora     = st.time_input("Hora preferida")
cor      = st.color_picker("Cor do gráfico", "#f97316")

# Botão — devolve True apenas no ciclo do clique
if st.button("Calcular", type="primary"):
    st.success(f"Processado para {nome}, {idade} anos!")

# ── Forms — agrupam widgets e só disparam rerun no submit ──
with st.form("formulario_dados"):
    st.subheader("Formulário de Registo")
    col1, col2 = st.columns(2)
    with col1:
        nome_form   = st.text_input("Nome")
        email_form  = st.text_input("Email")
    with col2:
        nivel_form  = st.selectbox("Nível", ["Júnior", "Sénior", "Lead"])
        salario_form = st.number_input("Salário", min_value=0)

    submitted = st.form_submit_button("Registar")
    if submitted:
        st.write(f"Registado: {nome_form} ({nivel_form}) — {salario_form}€")

# Widget key e session_state
if 'contador' not in st.session_state:
    st.session_state.contador = 0

st.number_input("Valor", key="meu_numero")  # acede via st.session_state.meu_numero`}</div>

        <div style={S.note}>
          Usa <code>st.form()</code> quando tens vários inputs relacionados e não queres um rerun por cada alteração —
          o script só recorre quando o utilizador carrega no botão de submit.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 4 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Layouts</h2>
        <p style={S.p}>
          Streamlit suporta layouts multi-coluna, tabs, expanders, sidebar e containers. A combinação destas primitivas
          permite criar interfaces complexas mantendo a simplicidade do código.
        </p>

        <LayoutGridSVG />

        <div style={S.code}>{`import streamlit as st

# ── Colunas ──
col1, col2, col3 = st.columns([2, 1, 1])  # rácio 2:1:1
with col1:
    st.line_chart(dados)
with col2:
    st.metric("MAE", "0.032", "-0.005")
with col3:
    st.metric("R²",  "0.94",  "+0.02")

# Colunas iguais
a, b = st.columns(2)
a.write("Coluna esquerda")
b.write("Coluna direita")

# Colunas aninhadas (dentro de uma coluna)
left, right = st.columns(2)
with left:
    sub_l, sub_r = st.columns(2)
    sub_l.metric("X", "10")
    sub_r.metric("Y", "20")

# ── Tabs ──
tab_eda, tab_modelo, tab_predict = st.tabs(["EDA", "Modelo", "Predict"])
with tab_eda:
    st.dataframe(df.describe())
with tab_modelo:
    st.write("Parâmetros do modelo...")
with tab_predict:
    st.write("Formulário de predição...")

# ── Expander ──
with st.expander("Ver dados raw"):
    st.dataframe(df)
    st.code(df.to_csv(index=False))

# ── Sidebar ──
with st.sidebar:
    st.title("Controlos")
    modelo = st.selectbox("Algoritmo", ["RF", "XGB", "SVM"])
    n_iter = st.slider("Iterações", 10, 500, 100)
    st.divider()
    st.info("Versão 1.0.0")

# Alternativa: prefixo st.sidebar.widget()
n = st.sidebar.number_input("N amostras", 100, 10000, 1000)

# ── Container e Empty ──
placeholder = st.empty()  # reserva espaço para updates futuros
container   = st.container()

with container:
    st.write("Conteúdo dentro do container")

# Actualizar placeholder (ex: progress em loop)
import time
bar = st.progress(0)
for i in range(101):
    bar.progress(i)
    time.sleep(0.01)

# Spacing
st.divider()
st.write("")  # linha em branco`}</div>

        <div style={S.highlight}>
          <strong>Dica de layout:</strong> A sidebar é ideal para controlos globais (filtros, parâmetros do modelo).
          Usa <code>st.columns()</code> para organizar o conteúdo principal. As tabs separam vistas distintas sem
          ocupar espaço vertical desnecessário.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 5 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Visualizações</h2>
        <p style={S.p}>
          Streamlit tem charts nativos baseados em Vega-Altair para casos simples, e suporta as principais bibliotecas
          de visualização Python — Plotly, Matplotlib, Altair, Bokeh e Vega-Lite — com um único comando.
        </p>

        <ChartDecisionSVG />

        <div style={S.code}>{`import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
import matplotlib.pyplot as plt

# Dados de exemplo
np.random.seed(42)
df = pd.DataFrame({
    'data':    pd.date_range('2023-01-01', periods=100, freq='D'),
    'vendas':  np.cumsum(np.random.randn(100)) + 100,
    'lucro':   np.cumsum(np.random.randn(100)) + 50,
    'regiao':  np.random.choice(['Norte', 'Sul', 'Centro'], 100),
})

# ── Charts nativos (simples, rápidos) ──
st.line_chart(df.set_index('data')[['vendas', 'lucro']])
st.bar_chart(df.groupby('regiao')['vendas'].sum())
st.area_chart(df.set_index('data')['vendas'])
st.scatter_chart(df, x='vendas', y='lucro', color='regiao')

# ── Plotly (interactivo, mais controlo) ──
fig = px.line(
    df, x='data', y=['vendas', 'lucro'],
    title='Evolução Temporal',
    template='plotly_dark',
    color_discrete_map={'vendas': '#f97316', 'lucro': '#f97316'}
)
fig.update_layout(hovermode='x unified', legend_title='Métrica')
st.plotly_chart(fig, use_container_width=True)

# Plotly com múltiplos traces
fig2 = go.Figure()
fig2.add_trace(go.Scatter(x=df['data'], y=df['vendas'],
                           mode='lines', name='Vendas', line=dict(color='#f97316')))
fig2.add_trace(go.Bar(x=df['data'], y=df['lucro'],
                       name='Lucro', marker_color='rgba(249,115,22,0.30)'))
st.plotly_chart(fig2, use_container_width=True)

# ── Matplotlib ──
fig3, ax = plt.subplots(figsize=(10, 4))
ax.hist(df['vendas'], bins=30, color='#f97316', alpha=0.7, edgecolor='white')
ax.set_xlabel('Vendas')
ax.set_ylabel('Frequência')
ax.set_title('Distribuição de Vendas')
st.pyplot(fig3)
plt.close(fig3)  # importante: evitar memory leaks

# ── Altair ──
import altair as alt
chart = alt.Chart(df).mark_circle().encode(
    x='vendas:Q', y='lucro:Q', color='regiao:N',
    tooltip=['data:T', 'vendas:Q', 'lucro:Q', 'regiao:N']
).interactive()
st.altair_chart(chart, use_container_width=True)

# Tema personalizado no config.toml (ver secção 12)
# [theme]
# primaryColor = "#f97316"
# backgroundColor = "#0e1117"`}</div>

        <div style={S.note}>
          Prefere <code>st.plotly_chart(fig, use_container_width=True)</code> para gráficos responsivos. Sempre fecha
          figuras Matplotlib com <code>plt.close(fig)</code> para evitar acumulação de memória em reruns.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 6 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Session State e Reactivity</h2>
        <p style={S.p}>
          Por defeito, todos os valores de variáveis são perdidos em cada rerun. O <code>st.session_state</code> é um
          dicionário persistente por sessão de browser que permite guardar estado entre reruns. É essencial para
          contadores, multi-step forms, autenticação e qualquer lógica que dependa de acções anteriores.
        </p>

        <StateLifecycleSVG />

        <div style={S.code}>{`import streamlit as st

# ── Inicialização segura (evita reset em cada rerun) ──
if 'contador' not in st.session_state:
    st.session_state.contador = 0

if 'historico' not in st.session_state:
    st.session_state.historico = []

if 'autenticado' not in st.session_state:
    st.session_state.autenticado = False

# Leitura e escrita
st.session_state.contador += 1          # incrementar
valor = st.session_state.get('chave', 'default')  # leitura segura

# ── Contador com botões ──
st.header("Contador")
col1, col2, col3 = st.columns(3)
if col1.button("➕ Incrementar"):
    st.session_state.contador += 1
if col2.button("➖ Decrementar"):
    st.session_state.contador -= 1
if col3.button("🔄 Reset"):
    st.session_state.contador = 0
st.metric("Valor actual", st.session_state.contador)

# ── on_change callback ──
def ao_mudar_slider():
    valor = st.session_state.meu_slider
    st.session_state.historico.append(valor)

st.slider("Valor", 0, 100, key="meu_slider", on_change=ao_mudar_slider)
st.write("Histórico:", st.session_state.historico)

# ── Multi-step form com state ──
if 'passo' not in st.session_state:
    st.session_state.passo = 1
if 'dados_form' not in st.session_state:
    st.session_state.dados_form = {}

st.progress(st.session_state.passo / 3)

if st.session_state.passo == 1:
    st.subheader("Passo 1: Dados Pessoais")
    nome = st.text_input("Nome")
    if st.button("Seguinte") and nome:
        st.session_state.dados_form['nome'] = nome
        st.session_state.passo = 2
        st.rerun()  # força rerun imediato

elif st.session_state.passo == 2:
    st.subheader("Passo 2: Preferências")
    tema = st.radio("Tema preferido", ["Claro", "Escuro"])
    col_back, col_next = st.columns(2)
    if col_back.button("Anterior"):
        st.session_state.passo = 1
        st.rerun()
    if col_next.button("Seguinte"):
        st.session_state.dados_form['tema'] = tema
        st.session_state.passo = 3
        st.rerun()

elif st.session_state.passo == 3:
    st.subheader("Passo 3: Confirmação")
    st.json(st.session_state.dados_form)
    if st.button("Submeter"):
        st.success("Registado com sucesso!")
        st.session_state.passo = 1
        st.session_state.dados_form = {}
        st.rerun()`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 7 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Caching</h2>
        <p style={S.p}>
          Sem caching, cada rerun reexecuta todo o código — incluindo leituras de ficheiros, queries a bases de dados e
          carregamentos de modelos ML. O Streamlit oferece dois decoradores de cache com semânticas diferentes.
        </p>

        <CachingDecisionSVG />

        <div style={S.code}>{`import streamlit as st
import pandas as pd
import time

# ── @st.cache_data ── para dados (DataFrames, JSON, listas)
# Cada sessão recebe a sua CÓPIA — thread-safe
@st.cache_data
def carregar_csv(caminho: str) -> pd.DataFrame:
    time.sleep(2)  # simula leitura lenta
    return pd.read_csv(caminho)

@st.cache_data(ttl=3600)  # expira após 1 hora
def fetch_dados_api(url: str) -> dict:
    import requests
    return requests.get(url).json()

@st.cache_data(ttl="1d")  # expira após 1 dia
def carregar_parquet(path: str) -> pd.DataFrame:
    return pd.read_parquet(path)

# Uso
df = carregar_csv("dados/vendas.csv")  # cached na 1ª run
st.dataframe(df)

# ── @st.cache_resource ── para recursos partilhados (modelos ML, conexões)
# MESMA instância para todos os utilizadores — não copiar!
@st.cache_resource
def carregar_modelo():
    from sklearn.ensemble import RandomForestClassifier
    import joblib
    return joblib.load("modelo.pkl")

@st.cache_resource
def get_db_connection():
    import sqlite3
    return sqlite3.connect("dados.db", check_same_thread=False)

@st.cache_resource
def carregar_bert():
    from transformers import pipeline
    return pipeline("sentiment-analysis")  # ~500 MB — só carrega 1x

modelo = carregar_modelo()
conn   = get_db_connection()

# ── Limpar cache manualmente ──
if st.button("Limpar cache"):
    carregar_csv.clear()          # só esta função
    st.cache_data.clear()         # todo o cache_data
    st.cache_resource.clear()     # todo o cache_resource

# ── hash_funcs para tipos custom ──
@st.cache_data(hash_funcs={pd.DataFrame: lambda df: df.shape})
def processar(df: pd.DataFrame) -> pd.DataFrame:
    return df.groupby('categoria').sum()

# ── Impacto de performance ──
# Sem cache: 2-5s por rerun | Com cache: &lt;50ms
with st.spinner("A carregar dados..."):
    df = carregar_csv("grandes_dados.csv")
st.success(f"Carregados {len(df):,} registos")`}</div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Aspecto</th>
              <th style={S.th}>@st.cache_data</th>
              <th style={S.th}>@st.cache_resource</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Retorna', 'Dados (DataFrames, dicts, listas)', 'Recursos (modelos, conexões)'],
              ['Por sessão', 'Cópia independente', 'Partilhado entre todas as sessões'],
              ['Thread safety', 'Sim (deep copy)', 'Responsabilidade do programador'],
              ['Serialização', 'pickle', 'Sem serialização'],
              ['Use case típico', 'read_csv, chamadas API, queries BD', 'joblib.load, DB connections, Transformers'],
            ].map(([a, b, c], i) => (
              <tr key={i} style={i % 2 === 0 ? { background: 'var(--bg-secondary)' } : {}}>
                <td style={{ ...S.td, fontWeight: 600 }}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 8 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Carregamento de Ficheiros e Data Upload</h2>
        <p style={S.p}>
          O widget <code>st.file_uploader()</code> permite aos utilizadores carregar ficheiros directamente no browser.
          O objecto retornado é um <code>UploadedFile</code> compatível com a interface de <code>BytesIO</code>,
          podendo ser passado directamente ao Pandas, PIL ou qualquer parser de ficheiros.
        </p>

        <FilePipelineSVG />

        <div style={S.code}>{`import streamlit as st
import pandas as pd
from PIL import Image
import json

# ── Upload simples ──
ficheiro = st.file_uploader(
    "Carrega um ficheiro CSV",
    type=["csv"],
    help="Tamanho máximo: 200 MB por defeito"
)

if ficheiro is not None:
    df = pd.read_csv(ficheiro)
    st.write(f"Ficheiro: {ficheiro.name} — {len(df):,} linhas, {df.shape[1]} colunas")
    st.dataframe(df.head(10))

# ── Múltiplos tipos de ficheiro ──
upload = st.file_uploader(
    "CSV, Excel ou JSON",
    type=["csv", "xlsx", "xls", "json"],
    accept_multiple_files=False
)

if upload:
    ext = upload.name.split('.')[-1].lower()
    if ext == 'csv':
        df = pd.read_csv(upload)
    elif ext in ('xlsx', 'xls'):
        df = pd.read_excel(upload)
    elif ext == 'json':
        dados = json.load(upload)
        df = pd.DataFrame(dados)
    st.dataframe(df)

# ── Múltiplos ficheiros ──
ficheiros = st.file_uploader(
    "Carrega vários CSVs para concatenar",
    type="csv",
    accept_multiple_files=True
)
if ficheiros:
    dfs = [pd.read_csv(f) for f in ficheiros]
    df_total = pd.concat(dfs, ignore_index=True)
    st.write(f"Total: {len(df_total):,} linhas de {len(ficheiros)} ficheiros")
    st.dataframe(df_total)

# ── Upload de imagens ──
img_file = st.file_uploader("Carrega uma imagem", type=["png", "jpg", "jpeg", "webp"])
if img_file:
    img = Image.open(img_file)
    col1, col2 = st.columns(2)
    with col1:
        st.image(img, caption="Original", use_container_width=True)
    with col2:
        img_gray = img.convert('L')
        st.image(img_gray, caption="Grayscale", use_container_width=True)
    st.write(f"Dimensões: {img.size[0]}x{img.size[1]} px — Modo: {img.mode}")

# ── Download button ──
csv_bytes = df_total.to_csv(index=False).encode('utf-8')
st.download_button(
    label="Descarregar resultado como CSV",
    data=csv_bytes,
    file_name="resultado.csv",
    mime="text/csv"
)

# Excel download
import io
buffer = io.BytesIO()
with pd.ExcelWriter(buffer, engine='openpyxl') as writer:
    df_total.to_excel(writer, index=False)
st.download_button(
    label="Descarregar como Excel",
    data=buffer.getvalue(),
    file_name="resultado.xlsx",
    mime="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
)

# ── Guardar upload no disco (se necessário) ──
import os
if upload:
    save_path = os.path.join("uploads", upload.name)
    os.makedirs("uploads", exist_ok=True)
    with open(save_path, "wb") as f:
        f.write(upload.getbuffer())
    st.success(f"Guardado em {save_path}")`}</div>

        <div style={S.note}>
          O limite de upload por defeito é 200 MB. Para aumentar, adiciona ao <code>.streamlit/config.toml</code>:
          <code> [server] maxUploadSize = 1000</code> (em MB). Em produção, considera validar o tipo real do ficheiro
          com <code>python-magic</code> para segurança.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 9 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. ML Demo App Completa</h2>
        <p style={S.p}>
          Uma app de Machine Learning típica combina upload de dados, EDA, treino de modelos e predição numa interface
          coerente. Aqui está um template completo que podes adaptar ao teu caso de uso.
        </p>

        <MLAppArchSVG />

        <div style={S.code}>{`import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.preprocessing import LabelEncoder

st.set_page_config(page_title="ML Demo", page_icon="🤖", layout="wide")
st.title("Plataforma de ML Interactiva")

# ── Sidebar — controlos globais ──
with st.sidebar:
    st.header("Configuração")
    ficheiro = st.file_uploader("Dataset (CSV)", type="csv")
    st.divider()

    algoritmo = st.selectbox(
        "Algoritmo",
        ["Random Forest", "Gradient Boosting", "SVM"]
    )
    test_size = st.slider("Proporção de teste", 0.1, 0.4, 0.2, 0.05)
    random_state = st.number_input("Random state", 0, 999, 42)
    st.divider()
    st.caption("v1.0 — Streamlit ML Demo")

if ficheiro is None:
    st.info("Carrega um ficheiro CSV para começar. Sugestão: iris.csv ou titanic.csv")
    st.stop()

# ── Carregar dados ──
@st.cache_data
def carregar(f):
    return pd.read_csv(f)

df = carregar(ficheiro)
col_alvo = st.sidebar.selectbox("Coluna alvo (y)", df.columns.tolist())

# ── Tabs principais ──
tab1, tab2, tab3, tab4 = st.tabs(["EDA", "Treino", "Resultados", "Predict"])

with tab1:
    st.subheader("Análise Exploratória")
    col_a, col_b = st.columns(2)
    with col_a:
        st.write(f"**Shape:** {df.shape[0]} linhas x {df.shape[1]} colunas")
        st.dataframe(df.head())
        st.dataframe(df.describe())
    with col_b:
        st.write("**Nulos por coluna:**")
        nulos = df.isnull().sum().reset_index()
        nulos.columns = ['Coluna', 'Nulos']
        st.dataframe(nulos)

        # Distribuição do alvo
        fig_dist = px.histogram(df, x=col_alvo, color=col_alvo,
                                 title=f"Distribuição: {col_alvo}",
                                 color_discrete_sequence=px.colors.qualitative.Set2)
        st.plotly_chart(fig_dist, use_container_width=True)

    # Correlação — apenas colunas numéricas
    num_cols = df.select_dtypes(include=np.number).columns.tolist()
    if len(num_cols) > 1:
        corr = df[num_cols].corr()
        fig_corr = px.imshow(corr, text_auto=True, aspect="auto",
                              title="Matriz de Correlação",
                              color_continuous_scale="RdBu_r")
        st.plotly_chart(fig_corr, use_container_width=True)

with tab2:
    st.subheader("Configurar e Treinar Modelo")

    # Selecção de features
    features_disponiveis = [c for c in df.columns if c != col_alvo]
    features_sel = st.multiselect("Features (X)", features_disponiveis, default=features_disponiveis)

    if not features_sel:
        st.warning("Selecciona pelo menos uma feature.")
        st.stop()

    # Preparar dados
    X = df[features_sel].select_dtypes(include=np.number).dropna()
    y = df.loc[X.index, col_alvo]

    le = LabelEncoder()
    y_enc = le.fit_transform(y)

    X_train, X_test, y_train, y_test = train_test_split(
        X, y_enc, test_size=test_size, random_state=random_state, stratify=y_enc
    )

    st.write(f"Treino: {len(X_train)} amostras | Teste: {len(X_test)} amostras")

    if st.button("Treinar Modelo", type="primary"):
        with st.spinner(f"A treinar {algoritmo}..."):
            if algoritmo == "Random Forest":
                modelo = RandomForestClassifier(n_estimators=100, random_state=random_state)
            elif algoritmo == "Gradient Boosting":
                modelo = GradientBoostingClassifier(random_state=random_state)
            else:
                modelo = SVC(probability=True, random_state=random_state)

            modelo.fit(X_train, y_train)
            st.session_state['modelo']    = modelo
            st.session_state['X_test']    = X_test
            st.session_state['y_test']    = y_test
            st.session_state['le']        = le
            st.session_state['features']  = features_sel
            st.session_state['X_cols']    = X.columns.tolist()
        st.success("Modelo treinado! Vai ao separador Resultados.")

with tab3:
    if 'modelo' not in st.session_state:
        st.info("Treina o modelo no separador anterior.")
    else:
        modelo = st.session_state['modelo']
        X_test = st.session_state['X_test']
        y_test = st.session_state['y_test']
        le     = st.session_state['le']

        y_pred = modelo.predict(X_test)
        acc    = accuracy_score(y_test, y_pred)

        m1, m2, m3 = st.columns(3)
        m1.metric("Accuracy",  f"{acc:.3f}")
        m2.metric("Amostras teste", len(y_test))
        m3.metric("Classes",   len(le.classes_))

        # Relatório de classificação
        report = classification_report(y_test, y_pred, target_names=le.classes_, output_dict=True)
        df_report = pd.DataFrame(report).T
        st.dataframe(df_report.style.format("{:.3f}"))

        # Confusion matrix
        cm = confusion_matrix(y_test, y_pred)
        fig_cm = px.imshow(cm, text_auto=True, x=le.classes_, y=le.classes_,
                            labels=dict(x="Previsto", y="Real"),
                            title="Confusion Matrix", color_continuous_scale="Reds")
        st.plotly_chart(fig_cm, use_container_width=True)

        # Feature importance (se disponível)
        if hasattr(modelo, 'feature_importances_'):
            fi = pd.DataFrame({
                'Feature': st.session_state['X_cols'],
                'Importância': modelo.feature_importances_
            }).sort_values('Importância', ascending=True)
            fig_fi = px.bar(fi, x='Importância', y='Feature', orientation='h',
                             title="Feature Importance", color='Importância',
                             color_continuous_scale='Reds')
            st.plotly_chart(fig_fi, use_container_width=True)

with tab4:
    if 'modelo' not in st.session_state:
        st.info("Treina o modelo primeiro.")
    else:
        st.subheader("Predict em Novo Input")
        X_cols = st.session_state['X_cols']
        novo = {}
        cols_pred = st.columns(min(len(X_cols), 3))
        for i, col in enumerate(X_cols):
            with cols_pred[i % 3]:
                novo[col] = st.number_input(col, value=0.0, key=f"pred_{col}")

        if st.button("Prever", type="primary"):
            X_novo = pd.DataFrame([novo])
            pred   = st.session_state['modelo'].predict(X_novo)
            proba  = st.session_state['modelo'].predict_proba(X_novo)
            classe = st.session_state['le'].inverse_transform(pred)[0]

            st.success(f"Classe prevista: **{classe}**")
            prob_df = pd.DataFrame({
                'Classe': st.session_state['le'].classes_,
                'Probabilidade': proba[0]
            })
            fig_prob = px.bar(prob_df, x='Classe', y='Probabilidade',
                               color='Probabilidade', color_continuous_scale='Reds')
            st.plotly_chart(fig_prob, use_container_width=True)`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 10 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Streamlit Components e Extras</h2>
        <p style={S.p}>
          O ecossistema de componentes da comunidade extende o Streamlit com tabelas interativas, mapas, webcam, animações
          e muito mais. Podes também criar os teus próprios componentes com HTML/JS.
        </p>

        <div style={S.code}>{`# Instalar componentes da comunidade
pip install streamlit-aggrid streamlit-folium streamlit-extras
pip install streamlit-lottie streamlit-authenticator

import streamlit as st

# ── AG Grid — tabela Excel-like com sort, filter, edit ──
from st_aggrid import AgGrid, GridOptionsBuilder

df = pd.read_csv("dados.csv")
gb = GridOptionsBuilder.from_dataframe(df)
gb.configure_pagination(paginationAutoPageSize=True)
gb.configure_side_bar()
gb.configure_selection('multiple', use_checkbox=True)
gb.configure_default_column(editable=True, groupable=True)
gridOptions = gb.build()

response = AgGrid(
    df,
    gridOptions=gridOptions,
    enable_enterprise_modules=True,
    height=400,
    theme='streamlit'
)
selected = response['selected_rows']

# ── Folium — mapas interactivos ──
import folium
from streamlit_folium import st_folium

mapa = folium.Map(location=[38.7, -9.1], zoom_start=7)
folium.Marker([38.7, -9.1], popup="Lisboa", icon=folium.Icon(color='red')).add_to(mapa)
folium.Marker([41.1, -8.6], popup="Porto",  icon=folium.Icon(color='blue')).add_to(mapa)
resultado_mapa = st_folium(mapa, width=700, height=400)

# ── Lottie — animações JSON ──
from streamlit_lottie import st_lottie
import requests

def load_lottie_url(url):
    r = requests.get(url)
    if r.status_code != 200:
        return None
    return r.json()

lottie_anim = load_lottie_url("https://assets5.lottiefiles.com/packages/lf20_jcikwtux.json")
st_lottie(lottie_anim, speed=1, height=200, key="anim")

# ── HTML/JS customizado ──
import streamlit.components.v1 as components

# HTML embed
components.html("""
<div style="background: linear-gradient(135deg, #f97316, #f97316);
            padding: 20px; border-radius: 12px; color: white; text-align: center;">
    <h2>Custom HTML Component</h2>
    <p>Podes usar qualquer HTML, CSS ou JavaScript aqui.</p>
</div>
""", height=150)

# iframe embed
components.iframe("https://www.openstreetmap.org/export/embed.html", height=400)

# ── Download com streamlit-extras ──
from streamlit_extras.add_vertical_space import add_vertical_space
from streamlit_extras.metric_cards import style_metric_cards
from streamlit_extras.colored_header import colored_header

colored_header(label="Dashboard", description="Análise de vendas", color_name="red-70")
add_vertical_space(2)
col1, col2, col3 = st.columns(3)
col1.metric("Vendas", "12,543", "+8%")
col2.metric("Clientes", "1,203",  "+12%")
col3.metric("NPS", "72",          "+3")
style_metric_cards(background_color="#1a1a1a", border_left_color="#f97316")

# ── streamlit-webrtc — webcam e streaming ──
# from streamlit_webrtc import webrtc_streamer
# webrtc_streamer(key="webcam")  # requer AV processador para transformar frames`}</div>

        <div style={S.highlight}>
          <strong>Galeria de componentes:</strong> Em <code>streamlit.io/components</code> encontras mais de 200
          componentes da comunidade, incluindo tabelas, editores de código, diagramas, players de vídeo e muito mais.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 11 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Multi-page Apps</h2>
        <p style={S.p}>
          Apps com múltiplas páginas são suportadas nativamente: basta criar uma pasta <code>pages/</code> com
          ficheiros Python numerados. O Streamlit gera automaticamente a navegação na sidebar. Para controlo total,
          usa <code>st.navigation()</code> no <code>app.py</code>.
        </p>

        <MultiPageSVG />

        <div style={S.code}>{`# Estrutura de ficheiros
my_app/
├── app.py                  # entry point
├── pages/
│   ├── 1_Home.py
│   ├── 2_EDA.py
│   ├── 3_Modelo.py
│   └── 4_Predict.py
├── .streamlit/
│   ├── config.toml
│   └── secrets.toml
└── requirements.txt

# ── app.py — entry point com controlo total ──
import streamlit as st

st.set_page_config(
    page_title="Data Science App",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="expanded",
    menu_items={
        'Get Help': 'https://docs.streamlit.io',
        'About': '# Data Science App v1.0'
    }
)

# Definir páginas programaticamente (Streamlit 1.36+)
paginas = {
    "Principal": [
        st.Page("pages/1_Home.py",    title="Home",    icon="🏠"),
        st.Page("pages/2_EDA.py",     title="EDA",     icon="📊"),
    ],
    "Modelo": [
        st.Page("pages/3_Modelo.py",  title="Treino",  icon="🤖"),
        st.Page("pages/4_Predict.py", title="Predict", icon="🎯"),
    ],
}
pg = st.navigation(paginas)
pg.run()

# ── 1_Home.py ──
import streamlit as st

# Aceder a state partilhado entre páginas
if 'dados' not in st.session_state:
    st.session_state.dados = None

st.title("Home")
ficheiro = st.file_uploader("Dataset CSV")
if ficheiro:
    import pandas as pd
    st.session_state.dados = pd.read_csv(ficheiro)
    st.success(f"Dataset carregado: {st.session_state.dados.shape}")

# ── 2_EDA.py — usa state da página anterior ──
import streamlit as st

if st.session_state.get('dados') is None:
    st.warning("Carrega um dataset na página Home.")
    st.page_link("pages/1_Home.py", label="Ir para Home", icon="🏠")
    st.stop()

df = st.session_state.dados
st.title("Análise Exploratória")
st.dataframe(df.describe())

# st.page_link — links de navegação inline
st.page_link("pages/3_Modelo.py", label="Próximo: Treinar modelo", icon="➡️")

# ── .streamlit/secrets.toml — credenciais NUNCA em código ──
# [database]
# host = "localhost"
# port = 5432
# password = "secret_password"
#
# [api]
# openai_key = "sk-..."

# Aceder aos secrets
import streamlit as st
db_host = st.secrets["database"]["host"]
api_key = st.secrets["api"]["openai_key"]

# Em Streamlit Community Cloud, define secrets na interface web`}</div>

        <div style={S.note}>
          Prefixar os ficheiros com números (ex: <code>1_Home.py</code>) controla a ordem na sidebar. O underscore
          após o número é substituído por espaço no menu. Emojis no nome do ficheiro aparecem como ícones.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 12 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Deploy e Produção</h2>
        <p style={S.p}>
          Após desenvolver a app localmente, o deploy pode ser feito em várias plataformas — desde a Streamlit
          Community Cloud gratuita até ambientes Cloud enterprise com Docker. Cada opção tem trade-offs de custo,
          controlo e escalabilidade.
        </p>

        <DeploymentSVG />

        <h3 style={S.h3}>requirements.txt e configuração</h3>
        <div style={S.code}>{`# requirements.txt — versões fixas para reproducibilidade
streamlit==1.36.0
pandas==2.2.2
numpy==1.26.4
plotly==5.22.0
scikit-learn==1.5.0
pillow==10.3.0
openpyxl==3.1.2
requests==2.32.3

# Gerar automaticamente do ambiente actual
pip freeze > requirements.txt

# ── .streamlit/config.toml ──
[server]
port = 8501
address = "0.0.0.0"
maxUploadSize = 500       # MB
enableCORS = false
enableXsrfProtection = true

[browser]
gatherUsageStats = false

[theme]
primaryColor    = "#f97316"
backgroundColor = "#0e1117"
secondaryBackgroundColor = "#1a1a1a"
textColor       = "#fafafa"
font            = "sans serif"

[logger]
level = "warning"`}</div>

        <h3 style={S.h3}>Dockerfile para Streamlit</h3>
        <div style={S.code}>{`# Dockerfile
FROM python:3.11-slim

WORKDIR /app

# Dependências do sistema
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Código da aplicação
COPY . .

# Porta do Streamlit
EXPOSE 8501

# Healthcheck
HEALTHCHECK CMD curl --fail http://localhost:8501/_stcore/health

# Lançar app
ENTRYPOINT ["streamlit", "run", "app.py", \
            "--server.port=8501", \
            "--server.address=0.0.0.0", \
            "--server.headless=true"]

# Build e run local
# docker build -t minha-app .
# docker run -p 8501:8501 minha-app

# docker-compose.yml para desenvolvimento
# version: '3.8'
# services:
#   app:
#     build: .
#     ports:
#       - "8501:8501"
#     volumes:
#       - .:/app         # hot-reload
#     environment:
#       - PYTHONUNBUFFERED=1`}</div>

        <h3 style={S.h3}>Autenticação e segurança</h3>
        <div style={S.code}>{`# pip install streamlit-authenticator
import streamlit as st
import streamlit_authenticator as stauth
import yaml
from yaml.loader import SafeLoader

# config.yaml com credenciais (hasheadas com bcrypt)
# credentials:
#   usernames:
#     admin:
#       name: Administrador
#       password: $2b$12$...  # bcrypt hash
#       email: admin@exemplo.pt
# cookie:
#   name: minha_app_cookie
#   key: chave_secreta_aleatoria
#   expiry_days: 30

with open('config.yaml') as f:
    config = yaml.load(f, Loader=SafeLoader)

authenticator = stauth.Authenticate(
    config['credentials'],
    config['cookie']['name'],
    config['cookie']['key'],
    config['cookie']['expiry_days']
)

name, auth_status, username = authenticator.login('Login', 'main')

if auth_status == False:
    st.error("Username/password incorrectos")
elif auth_status is None:
    st.warning("Introduz as tuas credenciais")
else:
    authenticator.logout('Logout', 'sidebar')
    st.sidebar.write(f"Bem-vindo, {name}!")
    # App principal aqui...
    st.title("App protegida")`}</div>

        <h3 style={S.h3}>Dicas de performance em produção</h3>
        <div style={S.code}>{`import streamlit as st

# 1. Cache agressivo para dados imutáveis
@st.cache_data(ttl="24h")
def carregar_dados_historicos():
    return pd.read_parquet("s3://bucket/dados.parquet")

# 2. Cache de modelos com cache_resource
@st.cache_resource
def get_modelo():
    return joblib.load("modelo_grande.pkl")

# 3. Usar st.fragment para re-render parcial (Streamlit 1.37+)
@st.fragment
def grafico_interactivo():
    # Só esta função reruns quando o utilizador interage
    filtro = st.selectbox("Filtro", opcoes)
    st.plotly_chart(gerar_grafico(filtro))

grafico_interactivo()

# 4. Lazy loading com st.spinner
with st.spinner("A carregar..."):
    df = carregar_dados_historicos()

# 5. Paginação para grandes DataFrames
pagina = st.number_input("Página", 1, (len(df) // 50) + 1, 1)
inicio = (pagina - 1) * 50
st.dataframe(df.iloc[inicio:inicio + 50])

# 6. Usar connection nativa do Streamlit (1.28+)
conn = st.connection("postgresql", type="sql")
df = conn.query("SELECT * FROM vendas LIMIT 1000", ttl="10m")

# 7. Monitorização com Streamlit Community Cloud
# Ver logs em: share.streamlit.io → app → Manage app → Logs`}</div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Plataforma</th>
              <th style={S.th}>Custo</th>
              <th style={S.th}>Setup</th>
              <th style={S.th}>Escalabilidade</th>
              <th style={S.th}>Ideal para</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Streamlit Community Cloud', 'Grátis', '5 min', 'Baixa', 'Demos, portfólio'],
              ['Railway', '~$5/mês', '15 min', 'Média', 'Apps de uso moderado'],
              ['Render', '~$7/mês', '15 min', 'Média', 'Apps com BD integrada'],
              ['Docker + VPS (Hetzner)', '~$5-20/mês', '1-2h', 'Alta (manual)', 'Controlo total'],
              ['GCP Cloud Run', 'Pay-per-use', '2-4h', 'Automática', 'Picos de tráfego'],
              ['AWS ECS / Fargate', 'Pay-per-use', '4-8h', 'Automática', 'Enterprise'],
            ].map(([plat, custo, setup, escala, ideal], i) => (
              <tr key={i} style={i % 2 === 0 ? { background: 'var(--bg-secondary)' } : {}}>
                <td style={{ ...S.td, fontWeight: 600 }}>{plat}</td>
                <td style={S.td}>{custo}</td>
                <td style={S.td}>{setup}</td>
                <td style={S.td}>{escala}</td>
                <td style={S.td}>{ideal}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.highlight}>
          <strong>Recomendação de início:</strong> Começa sempre com Streamlit Community Cloud — conectas o repositório
          GitHub, defines os secrets na interface e tens a app online em minutos, com HTTPS incluído. Só migra para
          opções pagas quando precisares de mais recursos ou privacidade total.
        </div>

        <div style={S.note}>
          Para apps em produção, activa sempre <code>enableXsrfProtection = true</code> no config.toml, usa
          <code> st.secrets</code> para credenciais (nunca hardcode), e considera adicionar
          autenticação com <code>streamlit-authenticator</code> se os dados forem sensíveis.
        </div>
      </section>

        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>13. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>O que é Streamlit</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Elementos de Texto e Dados</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Widgets de Input</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Layouts</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Visualizações</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Session State e Reactivity</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Caching</strong> — conceito central desta lecture.</li>
            </ul>
          </div>
        </div>
    </div>
  )
}
