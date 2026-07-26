import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const color = '#4a9eed';

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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

// SVG 1: Data Sources Taxonomy
function DataSourcesSVG() {
  const boxStyle = (bg) => ({ fill: bg, stroke: color, strokeWidth: 1.5 });
  return (
    <svg viewBox="0 0 800 220" style={{ width: '100%', height: 'auto' }}>
      {/* Center label */}
      <rect x="330" y="90" width="140" height="40" rx="8" fill={color} />
      <text x="400" y="115" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">Data Sources</text>

      {/* APIs */}
      <rect x="17" y="20" width="136" height="36" rx="7" {...boxStyle('rgba(74,158,237,0.12)')} />
      <text x="85" y="43" textAnchor="middle" fill={color} fontSize="12" fontWeight="600">APIs (REST, GraphQL)</text>
      <line x1="150" y1="38" x2="330" y2="100" stroke={color} strokeWidth="1" strokeDasharray="4 3" />

      {/* Web Scraping */}
      <rect x="20" y="80" width="130" height="36" rx="7" {...boxStyle('rgba(74,158,237,0.12)')} />
      <text x="85" y="97" textAnchor="middle" fill={color} fontSize="12" fontWeight="600">Web Scraping</text>
      <text x="85" y="111" textAnchor="middle" fill={color} fontSize="10">(BS4, Selenium)</text>
      <line x1="150" y1="98" x2="330" y2="108" stroke={color} strokeWidth="1" strokeDasharray="4 3" />

      {/* Databases */}
      <rect x="20" y="150" width="130" height="36" rx="7" {...boxStyle('rgba(74,158,237,0.12)')} />
      <text x="85" y="166" textAnchor="middle" fill={color} fontSize="12" fontWeight="600">Databases</text>
      <text x="85" y="180" textAnchor="middle" fill={color} fontSize="10">(SQL, NoSQL)</text>
      <line x1="150" y1="168" x2="330" y2="118" stroke={color} strokeWidth="1" strokeDasharray="4 3" />

      {/* Files */}
      <rect x="650" y="20" width="130" height="36" rx="7" {...boxStyle('rgba(74,158,237,0.12)')} />
      <text x="715" y="36" textAnchor="middle" fill={color} fontSize="12" fontWeight="600">Files</text>
      <text x="715" y="51" textAnchor="middle" fill={color} fontSize="10">(CSV, JSON, Parquet)</text>
      <line x1="650" y1="38" x2="470" y2="100" stroke={color} strokeWidth="1" strokeDasharray="4 3" />

      {/* Streaming */}
      <rect x="650" y="150" width="130" height="36" rx="7" {...boxStyle('rgba(74,158,237,0.12)')} />
      <text x="715" y="166" textAnchor="middle" fill={color} fontSize="12" fontWeight="600">Streaming</text>
      <text x="715" y="181" textAnchor="middle" fill={color} fontSize="10">(Kafka, Pub/Sub)</text>
      <line x1="650" y1="168" x2="470" y2="118" stroke={color} strokeWidth="1" strokeDasharray="4 3" />
    </svg>
  );
}

// SVG 2: HTTP Request/Response Cycle
function HttpCycleSVG() {
  return (
    <svg viewBox="0 0 800 160" style={{ width: '100%', height: 'auto' }}>
      {/* Client */}
      <rect x="20" y="55" width="110" height="50" rx="8" fill="rgba(74,158,237,0.12)" stroke={color} strokeWidth="1.5" />
      <text x="75" y="78" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Client</text>
      <text x="75" y="95" textAnchor="middle" fill={color} fontSize="10">(Python / Browser)</text>

      {/* DNS */}
      <rect x="210" y="55" width="100" height="50" rx="8" fill="rgba(74,158,237,0.08)" stroke={color} strokeWidth="1.5" />
      <text x="260" y="78" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">DNS</text>
      <text x="260" y="95" textAnchor="middle" fill={color} fontSize="10">Resolver</text>

      {/* Server */}
      <rect x="400" y="55" width="110" height="50" rx="8" fill="rgba(74,158,237,0.12)" stroke={color} strokeWidth="1.5" />
      <text x="455" y="78" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Server</text>
      <text x="455" y="95" textAnchor="middle" fill={color} fontSize="10">API / Web</text>

      {/* Database */}
      <rect x="600" y="55" width="110" height="50" rx="8" fill="rgba(74,158,237,0.08)" stroke={color} strokeWidth="1.5" />
      <text x="655" y="78" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Database</text>
      <text x="655" y="95" textAnchor="middle" fill={color} fontSize="10">/ Storage</text>

      {/* Arrows top (request) */}
      <line x1="130" y1="72" x2="210" y2="72" stroke={color} strokeWidth="1.5" />
      <polygon points="210,68 210,76 218,72" fill={color} />
      <line x1="310" y1="72" x2="400" y2="72" stroke={color} strokeWidth="1.5" />
      <polygon points="400,68 400,76 408,72" fill={color} />
      <line x1="510" y1="72" x2="600" y2="72" stroke={color} strokeWidth="1.5" />
      <polygon points="600,68 600,76 608,72" fill={color} />

      {/* Arrows bottom (response) */}
      <line x1="210" y1="92" x2="130" y2="92" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="130,88 130,96 122,92" fill="#94a3b8" />
      <line x1="400" y1="92" x2="310" y2="92" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="310,88 310,96 302,92" fill="#94a3b8" />
      <line x1="600" y1="92" x2="510" y2="92" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="510,88 510,96 502,92" fill="#94a3b8" />

      {/* Labels */}
      <text x="170" y="65" textAnchor="middle" fill={color} fontSize="9">Request</text>
      <text x="355" y="65" textAnchor="middle" fill={color} fontSize="9">Forward</text>
      <text x="555" y="65" textAnchor="middle" fill={color} fontSize="9">Query</text>
      <text x="170" y="110" textAnchor="middle" fill="#94a3b8" fontSize="9">Response</text>
      <text x="355" y="110" textAnchor="middle" fill="#94a3b8" fontSize="9">Response</text>
      <text x="555" y="110" textAnchor="middle" fill="#94a3b8" fontSize="9">Result</text>
    </svg>
  );
}

// SVG 3: Auth Methods
function AuthMethodsSVG() {
  const methods = [
    { x: 40, label: 'API Key', sub: 'Header / Param' },
    { x: 220, label: 'Basic Auth', sub: 'Base64 encoded' },
    { x: 400, label: 'Bearer Token', sub: 'JWT / OAuth' },
    { x: 580, label: 'OAuth 2.0', sub: 'Authorization Code' },
  ];
  return (
    <svg viewBox="0 0 760 120" style={{ width: '100%', height: 'auto' }}>
      {methods.map((m, i) => (
        <g key={i}>
          <rect x={m.x} y="20" width="150" height="70" rx="10" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
          <text x={m.x + 75} y="52" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">{m.label}</text>
          <text x={m.x + 75} y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">{m.sub}</text>
        </g>
      ))}
    </svg>
  );
}

// SVG 4: Rate Limiting Timeline
function RateLimitSVG() {
  return (
    <svg viewBox="0 0 800 140" style={{ width: '100%', height: 'auto' }}>
      {/* Timeline axis */}
      <line x1="40" y1="80" x2="760" y2="80" stroke="var(--text-secondary)" strokeWidth="2" />
      <text x="400" y="130" textAnchor="middle" fill="var(--text-secondary)" fontSize="11">Time</text>

      {/* Normal requests */}
      {[80, 140, 200, 260, 320].map((x, i) => (
        <g key={i}>
          <rect x={x - 14} y="50" width="28" height="30" rx="4" fill={color} fillOpacity="0.8" />
          <text x={x} y="70" textAnchor="middle" fill="#fff" fontSize="9">REQ</text>
          <line x1={x} y1="80" x2={x} y2="90" stroke={color} strokeWidth="1.5" />
          <text x={x} y="105" textAnchor="middle" fill={color} fontSize="9">200</text>
        </g>
      ))}

      {/* 429 hit */}
      <rect x="366" y="45" width="38" height="35" rx="4" fill="#4a9eed" fillOpacity="0.8" />
      <text x="385" y="65" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">429!</text>
      <line x1="385" y1="80" x2="385" y2="90" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="385" y="105" textAnchor="middle" fill="#4a9eed" fontSize="9">Rate Limit</text>

      {/* Backoff gap */}
      <rect x="420" y="55" width="120" height="25" rx="4" fill="rgba(74,158,237,0.06)" stroke={color} strokeWidth="1" strokeDasharray="4 3" />
      <text x="480" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Backoff (wait 2^n s)</text>

      {/* Retry requests */}
      {[560, 640, 720].map((x, i) => (
        <g key={i}>
          <rect x={x - 14} y="50" width="28" height="30" rx="4" fill={color} fillOpacity="0.8" />
          <text x={x} y="70" textAnchor="middle" fill="#fff" fontSize="9">REQ</text>
          <line x1={x} y1="80" x2={x} y2="90" stroke={color} strokeWidth="1.5" />
          <text x={x} y="105" textAnchor="middle" fill={color} fontSize="9">200</text>
        </g>
      ))}

      <text x="480" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Exponential Backoff Strategy</text>
    </svg>
  );
}

// SVG 5: Pagination Comparison
function PaginationSVG() {
  return (
    <svg viewBox="0 0 800 200" style={{ width: '100%', height: 'auto' }}>
      {/* Page-based */}
      <text x="120" y="20" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Page-based</text>
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={40 + i*60} y="35" width="50" height="30" rx="5" fill="rgba(74,158,237,0.12)" stroke={color} strokeWidth="1.2" />
          <text x={65 + i*60} y="55" textAnchor="middle" fill={color} fontSize="11">{`page=${i+1}`}</text>
        </g>
      ))}
      <text x="120" y="90" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">?page=1, ?page=2 ...</text>

      {/* Offset-based */}
      <text x="400" y="20" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Offset-based</text>
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={320 + i*65} y="35" width="58" height="30" rx="5" fill="rgba(74,158,237,0.12)" stroke={color} strokeWidth="1.2" />
          <text x={349 + i*65} y="55" textAnchor="middle" fill={color} fontSize="10">{`offset=${i*20}`}</text>
        </g>
      ))}
      <text x="400" y="90" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">?offset=0&limit=20 ...</text>

      {/* Cursor-based */}
      <text x="680" y="20" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Cursor-based</text>
      {['start', 'abc123', 'xyz789'].map((cur, i) => (
        <g key={i}>
          <rect x={610} y={35 + i*38} width="140" height="28" rx="5" fill="rgba(74,158,237,0.12)" stroke={color} strokeWidth="1.2" />
          <text x={680} y={54 + i*38} textAnchor="middle" fill={color} fontSize="10">{`cursor=${cur}`}</text>
        </g>
      ))}
      <text x="680" y="160" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Next cursor in response</text>

      <line x1="250" y1="10" x2="250" y2="180" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="570" y1="10" x2="570" y2="180" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4 3" />
    </svg>
  );
}

// SVG 6: HTML DOM Tree
function DomTreeSVG() {
  return (
    <svg viewBox="0 0 700 220" style={{ width: '100%', height: 'auto' }}>
      {/* html */}
      <rect x="310" y="10" width="80" height="30" rx="6" fill={color} />
      <text x="350" y="30" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">html</text>

      {/* head */}
      <rect x="170" y="70" width="80" height="30" rx="6" fill="rgba(74,158,237,0.20)" stroke={color} strokeWidth="1.5" />
      <text x="210" y="90" textAnchor="middle" fill={color} fontSize="12" fontWeight="600">head</text>
      <line x1="350" y1="40" x2="210" y2="70" stroke={color} strokeWidth="1.5" />

      {/* body */}
      <rect x="450" y="70" width="80" height="30" rx="6" fill="rgba(74,158,237,0.20)" stroke={color} strokeWidth="1.5" />
      <text x="490" y="90" textAnchor="middle" fill={color} fontSize="12" fontWeight="600">body</text>
      <line x1="350" y1="40" x2="490" y2="70" stroke={color} strokeWidth="1.5" />

      {/* title */}
      <rect x="100" y="135" width="80" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x="140" y="153" textAnchor="middle" fill={color} fontSize="11">title</text>
      <line x1="210" y1="100" x2="140" y2="135" stroke={color} strokeWidth="1" />

      {/* meta */}
      <rect x="200" y="135" width="80" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x="240" y="153" textAnchor="middle" fill={color} fontSize="11">meta</text>
      <line x1="210" y1="100" x2="240" y2="135" stroke={color} strokeWidth="1" />

      {/* div */}
      <rect x="400" y="135" width="80" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x="440" y="153" textAnchor="middle" fill={color} fontSize="11">div</text>
      <line x1="490" y1="100" x2="440" y2="135" stroke={color} strokeWidth="1" />

      {/* nav */}
      <rect x="510" y="135" width="80" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x="550" y="153" textAnchor="middle" fill={color} fontSize="11">nav</text>
      <line x1="490" y1="100" x2="550" y2="135" stroke={color} strokeWidth="1" />

      {/* p */}
      <rect x="350" y="190" width="60" height="25" rx="4" fill="rgba(74,158,237,0.08)" stroke={color} strokeWidth="1" />
      <text x="380" y="207" textAnchor="middle" fill={color} fontSize="10">p</text>
      <line x1="440" y1="163" x2="380" y2="190" stroke={color} strokeWidth="1" />

      {/* a */}
      <rect x="430" y="190" width="60" height="25" rx="4" fill="rgba(74,158,237,0.08)" stroke={color} strokeWidth="1" />
      <text x="460" y="207" textAnchor="middle" fill={color} fontSize="10">a</text>
      <line x1="440" y1="163" x2="460" y2="190" stroke={color} strokeWidth="1" />
    </svg>
  );
}

// SVG 7: Scrapy Architecture
function ScrapyArchSVG() {
  const boxes = [
    { x: 10, y: 70, w: 110, label: 'Scrapy Engine', sub: 'Orchestrator' },
    { x: 170, y: 10, w: 110, label: 'Scheduler', sub: 'Request Queue' },
    { x: 170, y: 130, w: 110, label: 'Downloader', sub: 'HTTP Fetcher' },
    { x: 360, y: 70, w: 110, label: 'Spider', sub: 'parse() logic' },
    { x: 540, y: 30, w: 120, label: 'Item Pipeline', sub: 'Clean / Store' },
    { x: 540, y: 110, w: 120, label: 'Downloader MW', sub: 'Middleware' },
  ];
  return (
    <svg viewBox="0 0 700 200" style={{ width: '100%', height: 'auto' }}>
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={b.w} height={50} rx="8" fill="rgba(74,158,237,0.12)" stroke={color} strokeWidth="1.5" />
          <text x={b.x + b.w/2} y={b.y + 22} textAnchor="middle" fill={color} fontSize="11" fontWeight="700">{b.label}</text>
          <text x={b.x + b.w/2} y={b.y + 38} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">{b.sub}</text>
        </g>
      ))}
      {/* Arrows */}
      <line x1="120" y1="90" x2="170" y2="42" stroke={color} strokeWidth="1.5" />
      <line x1="120" y1="100" x2="170" y2="152" stroke={color} strokeWidth="1.5" />
      <line x1="280" y1="155" x2="360" y2="100" stroke={color} strokeWidth="1.5" />
      <line x1="470" y1="90" x2="540" y2="58" stroke={color} strokeWidth="1.5" />
      <line x1="470" y1="100" x2="540" y2="130" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

// SVG 8: Selenium / Browser Pipeline
function SeleniumSVG() {
  const steps = ['Python Script', 'WebDriver', 'ChromeDriver', 'Headless Browser', 'Rendered DOM'];
  return (
    <svg viewBox="0 0 800 100" style={{ width: '100%', height: 'auto' }}>
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={20 + i*155} y="25" width="130" height="45" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
          <text x={85 + i*155} y="52" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">{s}</text>
          {i < steps.length - 1 && (
            <>
              <line x1={150 + i*155} y1="47" x2={170 + i*155} y2="47" stroke={color} strokeWidth="1.5" />
              <polygon points={`${170 + i*155},43 ${170 + i*155},51 ${178 + i*155},47`} fill={color} />
            </>
          )}
        </g>
      ))}
    </svg>
  );
}

// SVG 9: Data Pipeline
function DataPipelineSVG() {
  const stages = [
    { label: 'API / Scraper', sub: 'Acquisition' },
    { label: 'Raw Storage', sub: 'JSON / CSV' },
    { label: 'Cleaning', sub: 'pandas / regex' },
    { label: 'Structured DB', sub: 'SQLite / Parquet' },
    { label: 'Analysis', sub: 'Notebooks / BI' },
  ];
  return (
    <svg viewBox="0 0 800 110" style={{ width: '100%', height: 'auto' }}>
      {stages.map((st, i) => (
        <g key={i}>
          <rect x={10 + i*158} y="20" width="138" height="60" rx="9" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
          <text x={79 + i*158} y="48" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">{st.label}</text>
          <text x={79 + i*158} y="66" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">{st.sub}</text>
          {i < stages.length - 1 && (
            <>
              <line x1={148 + i*158} y1="50" x2={162 + i*158} y2="50" stroke={color} strokeWidth="2" />
              <polygon points={`${162 + i*158},46 ${162 + i*158},54 ${170 + i*158},50`} fill={color} />
            </>
          )}
        </g>
      ))}
    </svg>
  );
}

// SVG 10: Decision Flowchart
function DecisionFlowSVG() {
  return (
    <svg viewBox="0 0 800 320" style={{ width: '100%', height: 'auto' }}>
      {/* Start */}
      <rect x="300" y="10" width="200" height="38" rx="19" fill={color} />
      <text x="400" y="34" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">Where is my data?</text>

      {/* Q1: API available? */}
      <polygon points="400,68 480,100 400,132 320,100" fill="rgba(74,158,237,0.15)" stroke={color} strokeWidth="1.5" />
      <text x="400" y="97" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">API</text>
      <text x="400" y="113" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">available?</text>
      <line x1="400" y1="48" x2="400" y2="68" stroke={color} strokeWidth="1.5" />

      {/* Yes → requests/httpx */}
      <line x1="480" y1="100" x2="560" y2="100" stroke={color} strokeWidth="1.5" />
      <text x="518" y="94" textAnchor="middle" fill={color} fontSize="10">Yes</text>
      <rect x="560" y="80" width="130" height="38" rx="7" fill="rgba(74,158,237,0.20)" stroke={color} strokeWidth="1.5" />
      <text x="625" y="104" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">requests / httpx</text>

      {/* No → Q2 Scraping allowed? */}
      <line x1="400" y1="132" x2="400" y2="165" stroke={color} strokeWidth="1.5" />
      <text x="410" y="155" fill={color} fontSize="10">No</text>
      <polygon points="400,165 480,197 400,229 320,197" fill="rgba(74,158,237,0.15)" stroke={color} strokeWidth="1.5" />
      <text x="400" y="194" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">Scraping</text>
      <text x="400" y="210" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">allowed?</text>

      {/* No → stop */}
      <line x1="320" y1="197" x2="200" y2="197" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="260" y="190" textAnchor="middle" fill="#4a9eed" fontSize="10">No</text>
      <rect x="100" y="177" width="100" height="38" rx="7" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="150" y="201" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="600">Stop / Alt</text>

      {/* Yes → Q3 Static/Dynamic? */}
      <line x1="400" y1="229" x2="400" y2="262" stroke={color} strokeWidth="1.5" />
      <text x="410" y="252" fill={color} fontSize="10">Yes</text>
      <polygon points="400,262 480,285 400,308 320,285" fill="rgba(74,158,237,0.15)" stroke={color} strokeWidth="1.5" />
      <text x="400" y="282" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">JS-rendered</text>
      <text x="400" y="298" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">page?</text>

      {/* Static → BS4 */}
      <line x1="320" y1="285" x2="220" y2="285" stroke={color} strokeWidth="1.5" />
      <text x="270" y="279" textAnchor="middle" fill={color} fontSize="10">No</text>
      <rect x="110" y="267" width="110" height="36" rx="7" fill="rgba(74,158,237,0.20)" stroke={color} strokeWidth="1.5" />
      <text x="165" y="290" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">BeautifulSoup</text>

      {/* Dynamic → Selenium */}
      <line x1="480" y1="285" x2="580" y2="285" stroke={color} strokeWidth="1.5" />
      <text x="529" y="279" textAnchor="middle" fill={color} fontSize="10">Yes</text>
      <rect x="580" y="267" width="130" height="36" rx="7" fill="rgba(74,158,237,0.20)" stroke={color} strokeWidth="1.5" />
      <text x="645" y="290" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">Selenium / Playwright</text>
    </svg>
  );
}

export default function PfDS12() {
  return (
    <div style={S.page}>
      <Link to="/pfds" style={S.back}><ArrowLeft size={16} /> Voltar a Programming for Data Science</Link>

      <span style={S.tag}>MÓDULO 10</span>
      <h1 style={S.h1}>APIs, Web Scraping {'&'} Aquisição de Dados em Python</h1>

      {/* ─── SECTION 1 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Fontes de Dados para Data Science</h2>
        <p style={S.p}>
          Os dados chegam de fontes muito distintas. Conhecer as características de cada uma permite escolher a ferramenta certa e antecipar problemas de latência, formato e legalidade.
        </p>
        <div style={S.diagram}>
          <DataSourcesSVG />
        </div>
        <h3 style={S.h3}>Quando usar cada fonte</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Fonte</th>
              <th style={S.th}>Quando usar</th>
              <th style={S.th}>Limitações</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['API REST/GraphQL', 'Dados estruturados com endpoint oficial', 'Rate limits, autenticação, custos'],
              ['Web Scraping', 'Sem API disponível, dados públicos visíveis', 'ToS, estrutura HTML muda, JS dinâmico'],
              ['Base de dados', 'Acesso direto ao sistema interno', 'Requer credenciais, schema fixo'],
              ['Ficheiros (CSV/Parquet)', 'Exports de sistemas, datasets públicos', 'Snapshot no tempo, sem tempo real'],
              ['Streaming (Kafka)', 'Dados contínuos, IoT, eventos', 'Infraestrutura complexa, latência'],
            ].map(([f, w, l], i) => (
              <tr key={i}>
                <td style={S.td}><strong>{f}</strong></td>
                <td style={S.td}>{w}</td>
                <td style={S.td}>{l}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          <strong>Legal {'&'} Ética:</strong> Verifique sempre o ficheiro <code>robots.txt</code> e os Termos de Serviço antes de fazer scraping. Dados pessoais estão sujeitos ao RGPD. APIs públicas podem proibir uso comercial.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── SECTION 2 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. HTTP e o Protocolo REST</h2>
        <p style={S.p}>
          O HTTP é o protocolo base da web. Cada chamada a uma API segue o ciclo request/response: o cliente resolve o nome DNS, estabelece ligação TCP (e TLS), envia o pedido e aguarda a resposta.
        </p>
        <div style={S.diagram}>
          <HttpCycleSVG />
        </div>
        <h3 style={S.h3}>Métodos HTTP</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Uso</th>
              <th style={S.th}>Idempotente?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['GET', 'Obter recurso — não altera estado', 'Sim'],
              ['POST', 'Criar recurso / enviar dados', 'Não'],
              ['PUT', 'Substituir recurso completo', 'Sim'],
              ['PATCH', 'Atualizar parcialmente', 'Não (geralmente)'],
              ['DELETE', 'Eliminar recurso', 'Sim'],
            ].map(([m, u, id], i) => (
              <tr key={i}>
                <td style={S.td}><code>{m}</code></td>
                <td style={S.td}>{u}</td>
                <td style={S.td}>{id}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Códigos de Estado</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Classe</th>
              <th style={S.th}>Exemplos</th>
              <th style={S.th}>Significado</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['2xx', '200 OK, 201 Created, 204 No Content', 'Sucesso'],
              ['3xx', '301 Moved, 302 Found, 304 Not Modified', 'Redirecionamento'],
              ['4xx', '400 Bad Request, 401 Unauth, 403 Forbidden, 404 Not Found, 429 Too Many Requests', 'Erro do cliente'],
              ['5xx', '500 Internal Server Error, 502 Bad Gateway, 503 Unavailable', 'Erro do servidor'],
            ].map(([c, e, s], i) => (
              <tr key={i}>
                <td style={S.td}><strong>{c}</strong></td>
                <td style={S.td}><code style={{ fontSize: '0.8rem' }}>{e}</code></td>
                <td style={S.td}>{s}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Headers importantes: <code>Content-Type</code>, <code>Authorization</code>, <code>Accept</code>, <code>User-Agent</code>, <code>X-RateLimit-Remaining</code>. O body é geralmente JSON ou form-encoded.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── SECTION 3 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. requests — HTTP em Python</h2>
        <p style={S.p}>
          A biblioteca <code>requests</code> é o standard de facto para HTTP em Python. Abstrai detalhes de TCP/TLS e fornece uma API simples e expressiva.
        </p>
        <h3 style={S.h3}>GET com parâmetros</h3>
        <div style={S.code}>{`import requests

params = {'q': 'climate change', 'lang': 'en', 'page': 1}
response = requests.get('https://api.example.com/search', params=params, timeout=10)

# Verificar status (lança HTTPError se 4xx/5xx)
response.raise_for_status()

# Aceder ao conteúdo
data = response.json()        # dict / list
text = response.text          # str
raw  = response.content       # bytes
headers = response.headers    # dict-like
status  = response.status_code  # int`}</div>
        <h3 style={S.h3}>POST com JSON body</h3>
        <div style={S.code}>{`payload = {'username': 'alice', 'score': 42}
headers = {'Content-Type': 'application/json'}

resp = requests.post(
    'https://api.example.com/users',
    json=payload,          # serializa automaticamente + define Content-Type
    headers=headers,
    timeout=15
)
resp.raise_for_status()
print(resp.json())`}</div>
        <h3 style={S.h3}>Session — reutilização de ligação</h3>
        <div style={S.code}>{`with requests.Session() as s:
    s.headers.update({'Authorization': 'Bearer TOKEN'})
    s.headers.update({'User-Agent': 'MyApp/1.0'})

    r1 = s.get('https://api.example.com/users')
    r2 = s.get('https://api.example.com/posts')
    # A ligação TCP é reutilizada — mais rápido!`}</div>
        <div style={S.highlight}>
          <strong>Boas práticas:</strong> Defina sempre <code>timeout</code> (evita bloquear indefinidamente). Use <code>Session</code> para múltiplas chamadas ao mesmo host. Use <code>raise_for_status()</code> logo após o pedido.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── SECTION 4 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Autenticação em APIs</h2>
        <p style={S.p}>
          APIs modernas utilizam vários mecanismos de autenticação. Escolher o correto e implementá-lo de forma segura (sem expor credenciais no código) é crítico.
        </p>
        <div style={S.diagram}>
          <AuthMethodsSVG />
        </div>
        <h3 style={S.h3}>API Key (header ou query param)</h3>
        <div style={S.code}>{`import requests
import os
from dotenv import load_dotenv

load_dotenv()  # carrega .env
API_KEY = os.getenv('MY_API_KEY')  # NUNCA hardcode

# Via header
r = requests.get('https://api.example.com/data',
                 headers={'X-API-Key': API_KEY})

# Via query param
r = requests.get('https://api.example.com/data',
                 params={'apikey': API_KEY})`}</div>
        <h3 style={S.h3}>Basic Auth</h3>
        <div style={S.code}>{`from requests.auth import HTTPBasicAuth

r = requests.get('https://api.example.com/secure',
                 auth=HTTPBasicAuth('user', 'password'))
# Equivalente: auth=('user', 'password')`}</div>
        <h3 style={S.h3}>Bearer Token (JWT)</h3>
        <div style={S.code}>{`token = os.getenv('BEARER_TOKEN')
headers = {'Authorization': f'Bearer {token}'}
r = requests.get('https://api.example.com/me', headers=headers)`}</div>
        <h3 style={S.h3}>OAuth 2.0 — Client Credentials</h3>
        <div style={S.code}>{`# Passo 1: obter access token
resp = requests.post('https://auth.example.com/oauth/token', data={
    'grant_type': 'client_credentials',
    'client_id': os.getenv('CLIENT_ID'),
    'client_secret': os.getenv('CLIENT_SECRET'),
})
token = resp.json()['access_token']

# Passo 2: usar o token
r = requests.get('https://api.example.com/data',
                 headers={'Authorization': f'Bearer {token}'})`}</div>
        <div style={S.note}>
          Ficheiro <code>.env</code>: adicione ao <code>.gitignore</code> imediatamente. Nunca commite credenciais. Use variáveis de ambiente em produção (CI/CD secrets, AWS Secrets Manager, etc.).
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── SECTION 5 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Rate Limiting e Boas Práticas</h2>
        <p style={S.p}>
          APIs impõem limites de chamadas por segundo/minuto/dia. Ultrapassar esses limites retorna um <code>429 Too Many Requests</code>. A resposta correta é esperar e retentar com backoff exponencial.
        </p>
        <div style={S.diagram}>
          <RateLimitSVG />
        </div>
        <h3 style={S.h3}>Backoff exponencial manual</h3>
        <div style={S.code}>{`import time
import requests

def fetch_with_backoff(url, max_retries=5):
    for attempt in range(max_retries):
        resp = requests.get(url, timeout=10)
        if resp.status_code == 429:
            wait = 2 ** attempt  # 1, 2, 4, 8, 16 segundos
            print(f'Rate limited. Aguardar {wait}s...')
            time.sleep(wait)
            continue
        resp.raise_for_status()
        return resp.json()
    raise RuntimeError('Max retries exceeded')`}</div>
        <h3 style={S.h3}>tenacity — retries declarativos</h3>
        <div style={S.code}>{`from tenacity import retry, wait_exponential, stop_after_attempt, retry_if_exception_type

@retry(
    wait=wait_exponential(multiplier=1, min=2, max=60),
    stop=stop_after_attempt(6),
    retry=retry_if_exception_type(requests.exceptions.HTTPError)
)
def fetch_data(url):
    r = requests.get(url, timeout=10)
    r.raise_for_status()
    return r.json()`}</div>
        <h3 style={S.h3}>Caching de respostas</h3>
        <div style={S.code}>{`import requests_cache

requests_cache.install_cache('api_cache', expire_after=3600)  # 1h
# Todas as chamadas são agora cacheadas automaticamente
r = requests.get('https://api.example.com/data')
print(r.from_cache)  # True se veio do cache`}</div>
        <div style={S.highlight}>
          <strong>Regra de ouro:</strong> Leia o header <code>X-RateLimit-Remaining</code> e <code>Retry-After</code> para saber quanto esperar. Verifique <code>robots.txt</code> e respeite <code>Crawl-delay</code>.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── SECTION 6 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Paginação e APIs Grandes</h2>
        <p style={S.p}>
          APIs raramente retornam todos os dados de uma vez. A paginação é o mecanismo para iterar por grandes conjuntos de resultados. Existem três estratégias principais.
        </p>
        <div style={S.diagram}>
          <PaginationSVG />
        </div>
        <h3 style={S.h3}>Padrão while loop — page-based</h3>
        <div style={S.code}>{`results = []
page = 1

while True:
    r = requests.get('https://api.example.com/items',
                     params={'page': page, 'per_page': 100},
                     headers={'Authorization': f'Bearer {token}'})
    r.raise_for_status()
    data = r.json()

    if not data['items']:
        break  # sem mais páginas

    results.extend(data['items'])
    page += 1
    time.sleep(0.5)  # respeitar rate limit

print(f'Total: {len(results)} items')`}</div>
        <h3 style={S.h3}>Cursor-based pagination</h3>
        <div style={S.code}>{`cursor = None
all_posts = []

while True:
    params = {'limit': 100}
    if cursor:
        params['cursor'] = cursor

    r = requests.get('https://api.example.com/posts', params=params)
    data = r.json()
    all_posts.extend(data['results'])

    cursor = data.get('next_cursor')
    if not cursor:
        break`}</div>
        <h3 style={S.h3}>Pedidos paralelos com ThreadPoolExecutor</h3>
        <div style={S.code}>{`from concurrent.futures import ThreadPoolExecutor, as_completed

def fetch_page(page):
    r = requests.get('https://api.example.com/data',
                     params={'page': page, 'per_page': 50})
    return r.json()['items']

# Buscar 10 páginas em paralelo
with ThreadPoolExecutor(max_workers=5) as executor:
    futures = {executor.submit(fetch_page, p): p for p in range(1, 11)}
    all_items = []
    for future in as_completed(futures):
        all_items.extend(future.result())`}</div>
        <div style={S.note}>
          Cuidado com paralelismo excessivo — pode violar rate limits. Use <code>max_workers</code> conservador e adicione <code>time.sleep()</code> entre lotes.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── SECTION 7 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Web Scraping com BeautifulSoup</h2>
        <p style={S.p}>
          Quando não existe API, o scraping permite extrair dados diretamente do HTML. A biblioteca <code>BeautifulSoup4</code> simplifica a navegação na árvore DOM.
        </p>
        <div style={S.diagram}>
          <DomTreeSVG />
        </div>
        <h3 style={S.h3}>Setup e parsing básico</h3>
        <div style={S.code}>{`pip install requests beautifulsoup4 lxml`}</div>
        <div style={S.code}>{`import requests
from bs4 import BeautifulSoup

r = requests.get('https://example.com/articles',
                 headers={'User-Agent': 'Mozilla/5.0'})
r.raise_for_status()

soup = BeautifulSoup(r.content, 'lxml')  # lxml é mais rápido que html.parser`}</div>
        <h3 style={S.h3}>Seletores e extração</h3>
        <div style={S.code}>{`# find() — primeiro elemento
title = soup.find('h1').get_text(strip=True)

# find_all() — lista de elementos
paragraphs = soup.find_all('p', class_='article-body')
texts = [p.get_text(strip=True) for p in paragraphs]

# CSS selectors com select()
links = soup.select('div.content a[href^="https"]')
hrefs = [a['href'] for a in links]

# Atributos
img = soup.find('img', {'alt': True})
src = img.get('src')

# Navegar na árvore
first_div = soup.find('div')
children = list(first_div.children)
parent = first_div.parent`}</div>
        <h3 style={S.h3}>Exemplo completo — extrair tabela</h3>
        <div style={S.code}>{`import pandas as pd

table = soup.find('table', {'id': 'data-table'})
headers = [th.get_text(strip=True) for th in table.find_all('th')]
rows = []
for tr in table.find_all('tr')[1:]:
    cells = [td.get_text(strip=True) for td in tr.find_all('td')]
    if cells:
        rows.append(cells)

df = pd.DataFrame(rows, columns=headers)
print(df.head())`}</div>
        <div style={S.highlight}>
          Use <code>r.content</code> (bytes) em vez de <code>r.text</code> e deixe o BeautifulSoup lidar com o encoding automaticamente, evitando problemas com UTF-8/ISO-8859.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── SECTION 8 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Scrapy — Scraping em Escala</h2>
        <p style={S.p}>
          Para projetos de scraping de grande escala, o Scrapy oferece uma framework completa com scheduler, downloader, middlewares e pipelines, permitindo scraping assíncrono e eficiente.
        </p>
        <div style={S.diagram}>
          <ScrapyArchSVG />
        </div>
        <h3 style={S.h3}>Estrutura de um Spider</h3>
        <div style={S.code}>{`import scrapy

class ArticleSpider(scrapy.Spider):
    name = 'articles'
    start_urls = ['https://example.com/articles']

    def parse(self, response):
        # Extrair links de artigos
        for link in response.css('a.article-link::attr(href)').getall():
            yield response.follow(link, self.parse_article)

        # Próxima página
        next_page = response.css('a.next::attr(href)').get()
        if next_page:
            yield response.follow(next_page, self.parse)

    def parse_article(self, response):
        yield {
            'title': response.css('h1::text').get(),
            'body': ' '.join(response.css('p::text').getall()),
            'url': response.url,
            'date': response.css('time::attr(datetime)').get(),
        }`}</div>
        <h3 style={S.h3}>Settings importantes (settings.py)</h3>
        <div style={S.code}>{`# settings.py
BOT_NAME = 'mybot'
DOWNLOAD_DELAY = 1.5          # segundos entre pedidos
CONCURRENT_REQUESTS = 8       # pedidos paralelos
CONCURRENT_REQUESTS_PER_DOMAIN = 2

USER_AGENT = 'MyBot/1.0 (+https://mysite.com/bot)'
ROBOTSTXT_OBEY = True         # respeitar robots.txt

ITEM_PIPELINES = {
    'myproject.pipelines.CleanPipeline': 300,
    'myproject.pipelines.SQLitePipeline': 400,
}

FEEDS = {'output.jsonl': {'format': 'jsonlines'}}  # exportar`}</div>
        <h3 style={S.h3}>Pipeline de limpeza</h3>
        <div style={S.code}>{`class CleanPipeline:
    def process_item(self, item, spider):
        item['title'] = item['title'].strip() if item.get('title') else ''
        item['body'] = ' '.join(item.get('body', '').split())
        return item`}</div>
        <div style={S.note}>
          Executar: <code>scrapy crawl articles -o output.json</code>. O Scrapy usa Twisted para I/O assíncrono, sendo muito mais eficiente que loops síncronos com requests.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── SECTION 9 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Selenium — JavaScript e SPAs</h2>
        <p style={S.p}>
          BeautifulSoup e Scrapy apenas conseguem processar HTML estático enviado pelo servidor. Single Page Applications (SPAs) como React ou Vue geram conteúdo dinamicamente via JavaScript. Nesses casos, precisamos de um browser real.
        </p>
        <div style={S.diagram}>
          <SeleniumSVG />
        </div>
        <h3 style={S.h3}>Setup e uso básico</h3>
        <div style={S.code}>{`from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

options = Options()
options.add_argument('--headless')       # sem janela gráfica
options.add_argument('--no-sandbox')
options.add_argument('--disable-gpu')

driver = webdriver.Chrome(options=options)

try:
    driver.get('https://example.com/dynamic')

    # Esperar elemento aparecer (até 10s)
    wait = WebDriverWait(driver, timeout=10)
    element = wait.until(
        EC.presence_of_element_located((By.CSS_SELECTOR, 'div.data-table'))
    )

    # Interagir
    btn = driver.find_element(By.ID, 'load-more')
    btn.click()

    # Preencher formulário
    field = driver.find_element(By.NAME, 'search')
    field.send_keys('python data science')
    field.submit()

    # Extrair texto
    items = driver.find_elements(By.CSS_SELECTOR, 'li.result')
    data = [item.text for item in items]

finally:
    driver.quit()`}</div>
        <h3 style={S.h3}>Playwright — alternativa moderna</h3>
        <div style={S.code}>{`from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('https://example.com/spa')

    # Esperar network idle (SPA carregada)
    page.wait_for_load_state('networkidle')

    # Extrair conteúdo
    items = page.query_selector_all('.product-card')
    data = [{'name': el.query_selector('h2').inner_text(),
             'price': el.query_selector('.price').inner_text()} for el in items]

    browser.close()`}</div>
        <div style={S.highlight}>
          <strong>Selenium vs Playwright:</strong> Playwright é mais moderno, mais rápido, suporta múltiplos browsers nativamente e tem melhor gestão de waits. Para novos projetos, prefira Playwright.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── SECTION 10 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. APIs Populares para Data Science</h2>
        <p style={S.p}>
          Várias APIs públicas fornecem dados valiosos para projetos de data science. Cada uma tem as suas especificidades de autenticação, paginação e rate limits.
        </p>
        <h3 style={S.h3}>Alpha Vantage — Dados Financeiros</h3>
        <div style={S.code}>{`# pip install alpha-vantage
import requests

API_KEY = os.getenv('ALPHA_VANTAGE_KEY')
url = 'https://www.alphavantage.co/query'

params = {
    'function': 'TIME_SERIES_DAILY',
    'symbol': 'AAPL',
    'outputsize': 'compact',
    'apikey': API_KEY
}
r = requests.get(url, params=params)
data = r.json()['Time Series (Daily)']`}</div>
        <h3 style={S.h3}>OpenWeatherMap</h3>
        <div style={S.code}>{`API_KEY = os.getenv('OWM_KEY')
city = 'Lisbon'
r = requests.get(
    'https://api.openweathermap.org/data/2.5/weather',
    params={'q': city, 'appid': API_KEY, 'units': 'metric'}
)
weather = r.json()
print(weather['main']['temp'], weather['weather'][0]['description'])`}</div>
        <h3 style={S.h3}>Wikipedia API (sem auth)</h3>
        <div style={S.code}>{`r = requests.get('https://en.wikipedia.org/api/rest_v1/page/summary/Python_(programming_language)')
data = r.json()
print(data['title'], data['extract'][:300])`}</div>
        <h3 style={S.h3}>World Bank API</h3>
        <div style={S.code}>{`# GDP per capita — sem autenticação necessária
r = requests.get(
    'https://api.worldbank.org/v2/country/PT/indicator/NY.GDP.PCAP.CD',
    params={'format': 'json', 'per_page': 10, 'mrv': 5}
)
_, records = r.json()
for rec in records:
    print(rec['date'], rec['value'])`}</div>
        <h3 style={S.h3}>Eurostat API</h3>
        <div style={S.code}>{`# Dataset: população por país
r = requests.get(
    'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/demo_pjan',
    params={'format': 'JSON', 'geo': 'PT', 'time': '2023', 'sex': 'T', 'age': 'TOTAL'}
)
data = r.json()
values = data['value']
print(values)`}</div>
        <div style={S.note}>
          Twitter/X API v2 requer autenticação OAuth 2.0 e tem endpoints para tweets recentes (<code>/tweets/search/recent</code>), perfis (<code>/users</code>) e timelines. Use a biblioteca oficial <code>tweepy</code> para simplificar.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── SECTION 11 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Armazenamento e Pipelines de Dados</h2>
        <p style={S.p}>
          Após adquirir os dados, é necessário armazená-los de forma organizada, limpa e consultável. Um pipeline bem estruturado separa claramente as fases de aquisição, limpeza e armazenamento.
        </p>
        <div style={S.diagram}>
          <DataPipelineSVG />
        </div>
        <h3 style={S.h3}>SQLite para armazenamento local</h3>
        <div style={S.code}>{`import sqlite3
import pandas as pd

# Criar / ligar à base de dados
conn = sqlite3.connect('data/articles.db')

# Criar tabela
conn.execute('''
    CREATE TABLE IF NOT EXISTS articles (
        id      INTEGER PRIMARY KEY AUTOINCREMENT,
        title   TEXT NOT NULL,
        url     TEXT UNIQUE,
        body    TEXT,
        scraped_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
''')

# Inserir dados (ON CONFLICT para upsert)
for item in scraped_items:
    conn.execute(
        'INSERT OR IGNORE INTO articles (title, url, body) VALUES (?,?,?)',
        (item['title'], item['url'], item['body'])
    )
conn.commit()

# Ler para pandas
df = pd.read_sql('SELECT * FROM articles ORDER BY scraped_at DESC', conn)
conn.close()`}</div>
        <h3 style={S.h3}>Guardar em Parquet (colunar, eficiente)</h3>
        <div style={S.code}>{`df.to_parquet('data/articles.parquet', index=False, compression='snappy')

# Ler de volta
df = pd.read_parquet('data/articles.parquet')

# Filtros eficientes (lê apenas colunas necessárias)
df_titles = pd.read_parquet('data/articles.parquet', columns=['title', 'url'])`}</div>
        <h3 style={S.h3}>Carregamento incremental</h3>
        <div style={S.code}>{`# Obter data do último registo
last_date = pd.read_sql(
    "SELECT MAX(scraped_at) as last FROM articles", conn
).iloc[0]['last']

# Buscar apenas dados novos
params = {'since': last_date, 'limit': 500}
new_data = fetch_api('https://api.example.com/items', params)`}</div>
        <h3 style={S.h3}>Agendar com schedule</h3>
        <div style={S.code}>{`import schedule
import time

def job():
    print('A correr pipeline de aquisição...')
    data = fetch_all_pages('https://api.example.com/news')
    save_to_db(data)

schedule.every(6).hours.do(job)
schedule.every().day.at('08:00').do(job)

while True:
    schedule.run_pending()
    time.sleep(60)`}</div>
        <div style={S.highlight}>
          Em produção, use <strong>cron</strong> (Linux/Mac) ou <strong>Task Scheduler</strong> (Windows) em vez do módulo <code>schedule</code>, que requer um processo Python sempre em execução.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── SECTION 12 ─── */}
      

    </div>
  );
}
