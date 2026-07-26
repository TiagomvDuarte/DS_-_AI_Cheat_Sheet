import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const color = '#4a9eed'

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
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
}

function BenchmarkSVG() {
  const bars = [
    { label: 'FastAPI', value: 95, req: '58 000 req/s' },
    { label: 'Flask', value: 38, req: '22 000 req/s' },
    { label: 'Django REST', value: 22, req: '13 000 req/s' },
  ]
  return (
    <svg viewBox="0 0 520 180" style={{ width: '100%', maxWidth: '100%', display: 'block', margin: '1rem auto' }}>
      <rect width="520" height="180" rx="10" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="260" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Performance: Requests / segundo (async I/O benchmark)</text>
      {bars.map((b, i) => {
        const barW = (b.value / 100) * 340
        const y = 45 + i * 44
        return (
          <g key={b.label}>
            <text x="90" y={y + 15} textAnchor="end" fontSize="11" fontWeight="600" fill="var(--text-primary)">{b.label}</text>
            <rect x="100" y={y} width={barW} height="24" rx="4" fill={i === 0 ? color : 'var(--card-border)'} fillOpacity={i === 0 ? 1 : 0.7} />
            <text x={100 + barW + 8} y={y + 15} fontSize="10" fill="var(--text-secondary)">{b.req}</text>
          </g>
        )
      })}
      <text x="260" y="170" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Valores ilustrativos baseados em benchmarks TechEmpower (async, single core)</text>
    </svg>
  )
}

function RequestCycleSVG() {
  const nodes = [
    { label: 'Client' },
    { label: 'Uvicorn' },
    { label: 'FastAPI\nRouter' },
    { label: 'Handler' },
    { label: 'Response' },
  ]
  const W = 580, bw = 80, gap = (W - nodes.length * bw) / (nodes.length + 1);
  return (
    <svg viewBox={`0 0 ${W} 110`} style={{ width: '100%', maxWidth: '100%', display: 'block', margin: '1rem auto' }}>
      <rect width={W} height="110" rx="10" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x={W/2} y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Ciclo Request-Response</text>
      {nodes.map((n, i) => {
        const nx = gap + i * (bw + gap);
        const nextX = gap + (i + 1) * (bw + gap);
        return (
          <g key={i}>
            <rect x={nx} y="38" width={bw} height="34" rx="6" fill="rgba(74,158,237,0.15)" stroke={color} strokeWidth="1.2" />
            {n.label.split('\n').map((line, li) => (
              <text key={li} x={nx + bw/2} y={52 + li * 13} textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-primary)">{line}</text>
            ))}
            {i < nodes.length - 1 && (
              <line x1={nx + bw} y1="55" x2={nextX - 6} y2="55" stroke={color} strokeWidth="1.5" markerEnd="url(#arr)" />
            )}
          </g>
        );
      })}
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      <text x="270" y="100" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">HTTP/HTTPS → ASGI → routing → lógica de negócio → JSON response</text>
    </svg>
  )
}

function URLAnatomySVG() {
  const parts = [
    { label: 'protocol', value: 'https://', color: '#4a9eed' },
    { label: 'host', value: 'api.exemplo.com', color: '#4a9eed' },
    { label: 'path param', value: '/items/42', color: color },
    { label: 'query string', value: '?skip=0&limit=10', color: '#4a9eed' },
  ]
  let x = 20
  return (
    <svg viewBox="0 0 520 120" style={{ width: '100%', maxWidth: '100%', display: 'block', margin: '1rem auto' }}>
      <rect width="520" height="120" rx="10" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="260" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Anatomia de uma URL</text>
      {parts.map((p, i) => {
        const w = p.value.length * 7.5 + 10
        const cx = x
        x += w + 4
        return (
          <g key={i}>
            <rect x={cx} y="32" width={w} height="24" rx="4" fill={p.color} fillOpacity="0.18" stroke={p.color} strokeWidth="1" />
            <text x={cx + w / 2} y="48" textAnchor="middle" fontSize="10" fontWeight="700" fill={p.color}>{p.value}</text>
            <text x={cx + w / 2} y="72" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{p.label}</text>
            <line x1={cx + w / 2} y1="57" x2={cx + w / 2} y2="64" stroke={p.color} strokeWidth="1" />
          </g>
        )
      })}
      <text x="260" y="105" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">FastAPI extrai e valida cada parte automaticamente usando type hints</text>
    </svg>
  )
}

function PydanticPipelineSVG() {
  const steps = ['Raw JSON\n(string)', 'Pydantic\nParse', 'Type\nCoercion', 'Field\nValidation', 'Python\nObject']
  return (
    <svg viewBox="0 0 540 120" style={{ width: '100%', maxWidth: '100%', display: 'block', margin: '1rem auto' }}>
      <rect width="540" height="120" rx="10" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="270" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Pipeline de Validação Pydantic</text>
      <defs>
        <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      {steps.map((s, i) => {
        const bx = 15 + i * 104
        return (
          <g key={i}>
            <rect x={bx} y="36" width="88" height="36" rx="6" fill={i === 0 ? 'rgba(74,158,237,0.10)' : i === 4 ? 'rgba(74,158,237,0.10)' : 'rgba(74,158,237,0.10)'} stroke={i === 0 ? '#4a9eed' : i === 4 ? '#4a9eed' : color} strokeWidth="1.2" />
            {s.split('\n').map((line, li) => (
              <text key={li} x={bx + 44} y={50 + li * 13} textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-primary)">{line}</text>
            ))}
            {i < steps.length - 1 && (
              <line x1={bx + 88} y1="54" x2={bx + 104} y2="54" stroke={color} strokeWidth="1.5" markerEnd="url(#arr2)" />
            )}
          </g>
        )
      })}
      <text x="270" y="105" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Erros de validação geram automaticamente respostas 422 com detalhe de cada campo</text>
    </svg>
  )
}

function ErrorFlowSVG() {
  return (
    <svg viewBox="0 0 520 195" style={{ width: '100%', maxWidth: '100%', display: 'block', margin: '1rem auto' }}>
      <rect width="520" height="195" rx="10" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="260" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Fluxo de Erros FastAPI</text>
      <defs>
        <marker id="arr3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
        </marker>
        <marker id="arr3g" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
        </marker>
      </defs>
      <rect x="20" y="58" width="100" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="70" y="76" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-primary)">Req. Inválido</text>
      <line x1="120" y1="72" x2="160" y2="72" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr3)" />
      <rect x="160" y="58" width="100" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.2" />
      <text x="210" y="76" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-primary)">Validator</text>
      <line x1="260" y1="72" x2="300" y2="48" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr3g)" />
      <line x1="260" y1="72" x2="300" y2="96" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr3)" />
      <rect x="300" y="34" width="110" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="355" y="52" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-primary)">200/201 OK</text>
      <rect x="300" y="82" width="110" height="28" rx="5" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="355" y="100" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-primary)">422 / 400 / 500</text>
      <rect x="30" y="126" width="460" height="50" rx="6" fill="rgba(74,158,237,0.10)" stroke="rgba(74,158,237,0.10)" strokeWidth="1" />
      <text x="260" y="142" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4a9eed">Structured Error Body (JSON)</text>
      <text x="260" y="158" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{'{"detail": [{"loc": ["body","price"], "msg": "value is not a valid float", "type": "..."}]}'}</text>
    </svg>
  )
}

function DependencyGraphSVG() {
  return (
    <svg viewBox="0 0 500 200" style={{ width: '100%', maxWidth: '100%', display: 'block', margin: '1rem auto' }}>
      <rect width="500" height="200" rx="10" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="250" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Grafo de Dependências FastAPI</text>
      <defs>
        <marker id="arr4" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      <rect x="175" y="34" width="150" height="32" rx="6" fill="rgba(74,158,237,0.15)" stroke={color} strokeWidth="1.5" />
      <text x="250" y="54" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Endpoint /predict</text>
      <line x1="250" y1="66" x2="250" y2="90" stroke={color} strokeWidth="1.5" markerEnd="url(#arr4)" />
      <rect x="175" y="90" width="150" height="30" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.2" />
      <text x="250" y="109" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text-primary)">get_current_user</text>
      <line x1="250" y1="120" x2="140" y2="145" stroke={color} strokeWidth="1.2" markerEnd="url(#arr4)" />
      <line x1="250" y1="120" x2="360" y2="145" stroke={color} strokeWidth="1.2" markerEnd="url(#arr4)" />
      <rect x="60" y="145" width="150" height="30" rx="6" fill="rgba(74,158,237,0.07)" stroke={color} strokeWidth="1" />
      <text x="135" y="164" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-primary)">get_db_session</text>
      <rect x="290" y="145" width="150" height="30" rx="6" fill="rgba(74,158,237,0.07)" stroke={color} strokeWidth="1" />
      <text x="365" y="164" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-primary)">get_settings</text>
      <text x="250" y="192" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">FastAPI resolve e injeta dependências automaticamente em cada request</text>
    </svg>
  )
}

function MLServingSVG() {
  const W = 580, bh = 44, by = 50;
  const defs = [
    { label: 'Model File\n(.pkl / .joblib)', col: '#4a9eed', bw: 110 },
    { label: 'Load on\nStartup (lifespan)', col: color, bw: 120 },
    { label: 'FastAPI\n/predict', col: color, bw: 100 },
    { label: 'JSON\nResponse', col: '#4a9eed', bw: 100 },
  ];
  const totalBW = defs.reduce((s, b) => s + b.bw, 0);
  const gap = (W - 20 - totalBW) / (defs.length - 1);
  let cx = 10;
  const boxes = defs.map(d => { const x = cx; cx += d.bw + gap; return { ...d, x, y: by }; });
  const loadBox = boxes[1];
  return (
    <svg viewBox={`0 0 ${W} 155`} style={{ width: '100%', maxWidth: '100%', display: 'block', margin: '1rem auto' }}>
      <rect width={W} height="155" rx="10" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x={W/2} y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Arquitectura de Serving de ML com FastAPI</text>
      <defs>
        <marker id="arr5" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={b.bw} height={bh} rx="7" fill="none" stroke={b.col} strokeWidth="1.5" />
          {b.label.split('\n').map((l, li) => (
            <text key={li} x={b.x + b.bw/2} y={b.y + 17 + li * 15} textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-primary)">{l}</text>
          ))}
          {i < boxes.length - 1 && (
            <line x1={b.x + b.bw} y1={b.y + bh/2} x2={boxes[i+1].x} y2={boxes[i+1].y + bh/2} stroke={color} strokeWidth="1.5" markerEnd="url(#arr5)" />
          )}
        </g>
      ))}
      <line x1={loadBox.x + loadBox.bw/2} y1={loadBox.y + bh} x2={loadBox.x + loadBox.bw/2} y2={118} stroke={color} strokeWidth="1" strokeDasharray="3,2" />
      <rect x={loadBox.x - 30} y="118" width={loadBox.bw + 60} height="18" rx="4" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="0.8" />
      <text x={loadBox.x + loadBox.bw/2} y="130" textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">modelo em memória partilhado</text>
    </svg>
  )
}

function AsyncVsSyncSVG() {
  return (
    <svg viewBox="0 0 520 200" style={{ width: '100%', maxWidth: '100%', display: 'block', margin: '1rem auto' }}>
      <rect width="520" height="200" rx="10" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="260" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Sync vs Async — Concorrência de Requests</text>
      <text x="130" y="40" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">SYNC (def)</text>
      <text x="390" y="40" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">ASYNC (async def)</text>
      <line x1="260" y1="28" x2="260" y2="195" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4" />
      {[0, 1, 2].map(i => {
        const y = 52 + i * 42
        return (
          <g key={i}>
            <rect x="20" y={y} width="220" height="28" rx="4" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1" />
            <rect x="20" y={y} width={i === 1 ? 120 : 220} height="28" rx="4" fill="rgba(74,158,237,0.10)" />
            <text x="130" y={y + 17} textAnchor="middle" fontSize="9" fill="var(--text-primary)">Thread bloqueada {i + 1}</text>
          </g>
        )
      })}
      {[0, 1, 2].map(i => {
        const y = 52 + i * 42
        const work = [60, 40, 80]
        return (
          <g key={i}>
            <rect x="278" y={y} width="220" height="28" rx="4" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1" />
            <rect x="278" y={y} width={work[i]} height="28" rx="4" fill="rgba(74,158,237,0.35)" />
            <text x="388" y={y + 17} textAnchor="middle" fontSize="9" fill="var(--text-primary)">coroutine {i + 1} (yield ao I/O)</text>
          </g>
        )
      })}
      <text x="130" y="185" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">3 threads bloqueadas sequencialmente</text>
      <text x="390" y="185" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">1 thread, 3 requests concorrentes</text>
    </svg>
  )
}

function JWTFlowSVG() {
  const bw = 130, gap = 20;
  const steps = [
    { label: '1. POST /token\n(user + password)', x: 10 },
    { label: '2. Valida\ncredenciais', x: 10 + bw + gap },
    { label: '3. Emite\nJWT', x: 10 + 2*(bw + gap) },
    { label: '4. Bearer\ntoken', x: 10 + 3*(bw + gap) },
  ]
  const W = 10 + 4*bw + 3*gap + 10;
  return (
    <svg viewBox={`0 0 ${W} 177`} style={{ width: '100%', display: 'block', margin: '1rem auto' }}>
      <rect width={W} height="175" rx="10" fill="var(--bg-secondary)" stroke={`${color}40`} strokeWidth="1" />
      <text x={W/2} y="24" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Fluxo de Autenticação JWT</text>
      <defs>
        <marker id="arr6" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="38" width={bw} height="46" rx="8" fill="rgba(74,158,237,0.12)" stroke={color} strokeWidth="1.5" />
          {s.label.split('\n').map((l, li) => (
            <text key={li} x={s.x + bw/2} y={58 + li * 15} textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-primary)">{l}</text>
          ))}
          {i < steps.length - 1 && (
            <line x1={s.x + bw} y1="61" x2={s.x + bw + gap} y2="61" stroke={color} strokeWidth="1.5" markerEnd="url(#arr6)" />
          )}
        </g>
      ))}
      <rect x="10" y="100" width={W - 20} height="62" rx="8" fill="rgba(74,158,237,0.07)" stroke={color} strokeWidth="1" />
      <text x={W/2} y="118" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>JWT: Header.Payload.Signature</text>
      <text x={W/2} y="135" textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMSIsImV4cCI6MTY5MH0.xXxXxXxX</text>
      <text x={W/2} y="152" textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">Authorization: Bearer {`<token>`} em cada request protegido</text>
    </svg>
  )
}

function LayeredArchSVG() {
  const layers = [
    { label: 'FastAPI Router', sub: 'endpoints, path params, request validation', col: color },
    { label: 'Service Layer', sub: 'lógica de negócio, orquestração', col: '#4a9eed' },
    { label: 'Repository / ORM (SQLAlchemy)', sub: 'queries, mapeamento objeto-relacional', col: '#4a9eed' },
    { label: 'Database (SQLite dev / PostgreSQL prod)', sub: 'persistência de dados', col: '#4a9eed' },
  ]
  return (
    <svg viewBox="0 0 520 192" style={{ width: '100%', maxWidth: '100%', display: 'block', margin: '1rem auto' }}>
      <rect width="520" height="190" rx="10" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="260" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Arquitectura em Camadas — FastAPI + DB</text>
      <defs>
        <marker id="arr7" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      {layers.map((l, i) => (
        <g key={i}>
          <rect x="40" y={32 + i * 37} width="440" height="30" rx="5" fill="none" stroke={l.col} strokeWidth="1.4" />
          <rect x="40" y={32 + i * 37} width="6" height="30" rx="3" fill={l.col} />
          <text x="60" y={32 + i * 37 + 12} fontSize="10" fontWeight="700" fill={l.col}>{l.label}</text>
          <text x="60" y={32 + i * 37 + 24} fontSize="9" fill="var(--text-secondary)">{l.sub}</text>
          {i < layers.length - 1 && (
            <line x1="260" y1={32 + i * 37 + 30} x2="260" y2={32 + (i + 1) * 37} stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr7)" />
          )}
        </g>
      ))}
    </svg>
  )
}

function TestPyramidSVG() {
  return (
    <svg viewBox="0 0 400 180" style={{ width: '100%', maxWidth: '100%', display: 'block', margin: '1rem auto' }}>
      <rect width="400" height="180" rx="10" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="200" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Pirâmide de Testes para APIs</text>
      <polygon points="200,35 310,130 90,130" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <polygon points="200,60 280,115 120,115" fill="rgba(74,158,237,0.18)" stroke="#4a9eed" strokeWidth="1.5" />
      <polygon points="200,90 260,115 140,115" fill="rgba(74,158,237,0.28)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="200" y="108" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#4a9eed">Unit</text>
      <text x="200" y="82" textAnchor="middle" fontSize="8" fill="#4a9eed">Integration</text>
      <text x="200" y="58" textAnchor="middle" fontSize="8" fill="#4a9eed">E2E</text>
      <text x="320" y="118" fontSize="9" fill="var(--text-secondary)">rápidos, muitos</text>
      <text x="10" y="58" fontSize="9" fill="var(--text-secondary)">lentos, poucos</text>
      <text x="200" y="155" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">TestClient (sync) | httpx AsyncClient (async) | pytest-asyncio</text>
    </svg>
  )
}

function DeployArchSVG() {
  return (
    <svg viewBox="0 0 560 210" style={{ width: '100%', maxWidth: '100%', display: 'block', margin: '1rem auto' }}>
      <rect width="560" height="210" rx="10" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="280" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Arquitectura de Produção FastAPI</text>
      <defs>
        <marker id="arr8" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      <rect x="210" y="32" width="140" height="30" rx="6" fill="rgba(74,158,237,0.15)" stroke={color} strokeWidth="1.5" />
      <text x="280" y="51" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>Load Balancer / Nginx</text>
      <line x1="240" y1="62" x2="160" y2="90" stroke={color} strokeWidth="1.4" markerEnd="url(#arr8)" />
      <line x1="320" y1="62" x2="400" y2="90" stroke={color} strokeWidth="1.4" markerEnd="url(#arr8)" />
      {[{ x: 80 }, { x: 320 }].map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="90" width="160" height="38" rx="6" fill="rgba(74,158,237,0.08)" stroke={color} strokeWidth="1.2" />
          <text x={p.x + 80} y="106" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-primary)">FastAPI Container</text>
          <text x={p.x + 80} y="120" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">gunicorn + uvicorn workers</text>
        </g>
      ))}
      <line x1="160" y1="128" x2="200" y2="155" stroke={color} strokeWidth="1.2" markerEnd="url(#arr8)" />
      <line x1="400" y1="128" x2="360" y2="155" stroke={color} strokeWidth="1.2" markerEnd="url(#arr8)" />
      <rect x="80" y="155" width="160" height="34" rx="6" fill="rgba(74,158,237,0.1)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="160" y="170" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-primary)">PostgreSQL</text>
      <text x="160" y="183" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">persistência principal</text>
      <rect x="310" y="155" width="160" height="34" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="390" y="170" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-primary)">Redis</text>
      <text x="390" y="183" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">cache / rate limiting</text>
      <text x="280" y="205" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">+ Prometheus/Grafana para monitoring e alertas</text>
    </svg>
  )
}

export default function PfDS13() {
  return (
    <div style={S.page}>
      <Link to="/pfds" style={S.back}><ArrowLeft size={16} /> Voltar a Programming for Data Science</Link>
      <div style={S.tag}>Module 11</div>
      <h1 style={S.h1}>FastAPI — APIs para Data Science</h1>

      {/* Section 1 */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Porquê FastAPI?</h2>
        <p style={S.p}>
          FastAPI combina a velocidade de frameworks ASGI modernos (Starlette/Uvicorn) com ergonomia de desenvolvimento
          excecional. Ao contrário do Flask, tira partido de type hints Python para validar dados automaticamente, gerar
          documentação interativa e fornecer auto-complete nos IDEs — sem código boilerplate extra.
        </p>
        <BenchmarkSVG />
        <div style={S.highlight}>
          <strong>Vantagens principais:</strong>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem', color: 'var(--text-primary)', lineHeight: 1.8 }}>
            <li><strong>Performance:</strong> comparable a Node.js e Go para workloads I/O-bound</li>
            <li><strong>Docs automáticas:</strong> Swagger UI em /docs e ReDoc em /redoc gerados do código</li>
            <li><strong>Type safety:</strong> Pydantic valida e converte dados automaticamente</li>
            <li><strong>Async-first:</strong> suporte nativo a async def para operações I/O</li>
            <li><strong>Dependency Injection:</strong> sistema elegante para auth, DB, configs</li>
          </ul>
        </div>
        <h3 style={S.h3}>Comparação de Frameworks</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Feature</th>
              <th style={S.th}>FastAPI</th>
              <th style={S.th}>Flask</th>
              <th style={S.th}>Django REST</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Performance (async)', 'Excelente', 'Moderada', 'Moderada'],
              ['Docs automáticas', 'Sim (OpenAPI)', 'Não (manual)', 'Parcial'],
              ['Type hints / Validação', 'Pydantic nativo', 'Manual', 'Serializers'],
              ['Async support', 'Nativo', 'Limitado', 'ASGI recente'],
              ['Curva de aprendizagem', 'Baixa', 'Muito baixa', 'Alta'],
              ['Ecosystem / batteries', 'Crescendo', 'Vasto', 'Muito completo'],
              ['Ideal para', 'APIs, ML serving', 'Prototipagem', 'Projetos Django'],
            ].map(([f, fa, fl, dr]) => (
              <tr key={f}>
                <td style={S.td}><strong>{f}</strong></td>
                <td style={{ ...S.td, color }}>{fa}</td>
                <td style={S.td}>{fl}</td>
                <td style={S.td}>{dr}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Instalação</h3>
        <div style={S.code}>{`# Instalação mínima
pip install fastapi uvicorn

# Extras recomendados para Data Science
pip install fastapi uvicorn[standard] pydantic python-multipart
pip install sqlalchemy asyncpg alembic
pip install python-jose[cryptography] passlib[bcrypt]  # auth
pip install httpx pytest pytest-asyncio                 # testes`}</div>
      </section>

      <hr style={S.divider} />

      {/* Section 2 */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Primeira API</h2>
        <p style={S.p}>
          Uma aplicação FastAPI mínima tem apenas algumas linhas. O decorador <code>@app.get("/")</code> regista um
          endpoint HTTP GET na raiz. O Uvicorn é o servidor ASGI que corre a app.
        </p>
        <div style={S.code}>{`# main.py — aplicação FastAPI mínima
from fastapi import FastAPI

app = FastAPI(
    title="Data Science API",
    description="API para servir modelos e pipelines",
    version="1.0.0",
)

@app.get("/")
def root():
    """Endpoint raiz — útil para verificar que a API está online."""
    return {"message": "Data Science API online", "version": "1.0.0"}

@app.get("/health")
def health_check():
    """Health check — usado por load balancers e orquestradores."""
    return {"status": "healthy", "service": "ds-api"}

# Correr localmente:
# uvicorn main:app --reload --host 0.0.0.0 --port 8000
#
# --reload   → reinicia automaticamente ao guardar ficheiros (dev only)
# --host     → aceita conexões externas (não só localhost)
# --port     → porta onde escuta`}</div>
        <RequestCycleSVG />
        <h3 style={S.h3}>Documentação Automática</h3>
        <p style={S.p}>
          Ao correr a app, o FastAPI gera automaticamente duas interfaces de documentação interativa sem qualquer
          configuração adicional:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>URL</th>
              <th style={S.th}>Interface</th>
              <th style={S.th}>Funcionalidades</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['/docs', 'Swagger UI', 'Testar endpoints, ver schemas, autenticar'],
              ['/redoc', 'ReDoc', 'Documentação legível, boa para partilhar'],
              ['/openapi.json', 'OpenAPI Schema', 'Spec completa em JSON, para gerar clientes'],
            ].map(([url, ui, feat]) => (
              <tr key={url}>
                <td style={{ ...S.td, fontFamily: 'monospace', color }}>{url}</td>
                <td style={S.td}>{ui}</td>
                <td style={S.td}>{feat}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          O padrão de health check (<code>/health</code>) é essencial em produção: Kubernetes, Docker e load balancers
          usam-no para saber se o container está pronto para receber tráfego.
        </div>
      </section>

      <hr style={S.divider} />

      {/* Section 3 */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Path e Query Parameters</h2>
        <p style={S.p}>
          FastAPI extrai automaticamente path parameters (parte do URL) e query parameters (após o ?) usando type hints.
          A validação é feita automaticamente — se o tipo não corresponder, retorna 422.
        </p>
        <URLAnatomySVG />
        <div style={S.code}>{`from fastapi import FastAPI, Query, Path
from typing import Optional
from enum import Enum

app = FastAPI()

class ModelName(str, Enum):
    """Enum para path parameter com valores válidos fixos."""
    random_forest = "random_forest"
    xgboost = "xgboost"
    linear = "linear"

# Path parameter: {item_id} é extraído do URL
@app.get("/items/{item_id}")
def get_item(
    item_id: int = Path(ge=1, description="ID do item (>= 1)"),
):
    return {"item_id": item_id}

# Query parameters: ?skip=0&limit=10&search=texto
@app.get("/items/")
def list_items(
    skip: int = Query(default=0, ge=0, description="Registos a saltar"),
    limit: int = Query(default=10, le=100, description="Máximo de resultados"),
    search: Optional[str] = Query(default=None, min_length=2),
):
    return {"skip": skip, "limit": limit, "search": search}

# Enum path param — FastAPI valida que o valor é um dos permitidos
@app.get("/models/{model_name}/info")
def model_info(model_name: ModelName):
    return {
        "model": model_name.value,
        "description": f"Informação sobre {model_name.value}",
    }

# Múltiplos path params
@app.get("/users/{user_id}/predictions/{pred_id}")
def get_prediction(user_id: int, pred_id: int):
    return {"user_id": user_id, "prediction_id": pred_id}`}</div>
        <h3 style={S.h3}>Validação Automática</h3>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Quando um parâmetro não passa validação, FastAPI retorna automaticamente um <strong>422 Unprocessable Entity</strong> com
            detalhe de cada campo inválido — sem código extra. Exemplo: <code>GET /items/abc</code> quando item_id deve ser int.
          </p>
        </div>
        <div style={S.code}>{`// Resposta 422 automática (JSON)
{
  "detail": [
    {
      "type": "int_parsing",
      "loc": ["path", "item_id"],
      "msg": "Input should be a valid integer, unable to parse string as an integer",
      "input": "abc",
      "url": "https://errors.pydantic.dev/..."
    }
  ]
}`}</div>
      </section>

      <hr style={S.divider} />

      {/* Section 4 */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Pydantic Models e Request Body</h2>
        <p style={S.p}>
          Para receber dados no body de um POST/PUT, define-se uma classe Pydantic que herda de BaseModel. FastAPI
          deserializa o JSON, valida todos os campos e injeta o objeto Python tipado no handler.
        </p>
        <PydanticPipelineSVG />
        <div style={S.code}>{`from fastapi import FastAPI
from pydantic import BaseModel, Field, field_validator, EmailStr
from typing import Optional, List
from datetime import datetime

app = FastAPI()

# --- Modelos aninhados ---
class Address(BaseModel):
    street: str
    city: str
    country: str = "PT"  # valor por defeito

class UserCreate(BaseModel):
    name: str = Field(min_length=2, max_length=100, description="Nome completo")
    email: EmailStr = Field(description="Email válido")
    age: Optional[int] = Field(default=None, ge=0, le=150)
    address: Optional[Address] = None  # modelo aninhado
    tags: List[str] = []              # lista com default

    @field_validator("name")
    @classmethod
    def name_must_not_be_empty(cls, v: str) -> str:
        if not v.strip():
            raise ValueError("Nome não pode ser só espaços")
        return v.strip().title()

class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    created_at: datetime

    model_config = {"from_attributes": True}  # compatível com ORM

# --- Endpoint POST com request body ---
@app.post("/users/", response_model=UserResponse, status_code=201)
def create_user(user: UserCreate):
    # user já é um objeto Python validado
    # Aqui guardaríamos na DB e retornaríamos o registo criado
    return UserResponse(
        id=1,
        name=user.name,
        email=user.email,
        created_at=datetime.utcnow(),
    )

# --- Endpoint PUT: path param + body ---
@app.put("/users/{user_id}", response_model=UserResponse)
def update_user(user_id: int, user: UserCreate):
    return UserResponse(id=user_id, name=user.name,
                        email=user.email, created_at=datetime.utcnow())`}</div>
        <div style={S.note}>
          O <code>response_model</code> no decorador serve dois propósitos: documenta o schema de saída no Swagger e
          filtra automaticamente campos que não devem ser expostos (ex: password hash).
        </div>
      </section>

      <hr style={S.divider} />

      {/* Section 5 */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Validação e Error Handling</h2>
        <p style={S.p}>
          FastAPI fornece HTTPException para erros HTTP manuais e permite registar handlers customizados para
          qualquer tipo de exceção — incluindo os erros de validação Pydantic.
        </p>
        <ErrorFlowSVG />
        <div style={S.code}>{`from fastapi import FastAPI, HTTPException, Request, status
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from pydantic import BaseModel

app = FastAPI()

# --- Exceções HTTP manuais ---
fake_db = {1: {"name": "Alice"}, 2: {"name": "Bob"}}

@app.get("/users/{user_id}")
def get_user(user_id: int):
    if user_id not in fake_db:
        raise HTTPException(
            status_code=404,
            detail=f"Utilizador {user_id} não encontrado",
        )
    return fake_db[user_id]

# --- Handler customizado para erros de validação ---
@app.exception_handler(RequestValidationError)
async def validation_exception_handler(
    request: Request, exc: RequestValidationError
):
    return JSONResponse(
        status_code=422,
        content={
            "error": "Dados de entrada inválidos",
            "details": exc.errors(),
            "body": exc.body,
        },
    )

# --- Handler genérico para erros não esperados ---
@app.exception_handler(Exception)
async def generic_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"error": "Erro interno do servidor", "type": type(exc).__name__},
    )

# --- Exceção customizada com handler ---
class ModelNotLoadedError(Exception):
    def __init__(self, model_name: str):
        self.model_name = model_name

@app.exception_handler(ModelNotLoadedError)
async def model_not_loaded_handler(request: Request, exc: ModelNotLoadedError):
    return JSONResponse(
        status_code=503,
        content={"error": f"Modelo '{exc.model_name}' não está carregado"},
    )`}</div>
        <h3 style={S.h3}>Status Codes mais usados em APIs</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Código</th>
              <th style={S.th}>Significado</th>
              <th style={S.th}>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['200 OK', 'Sucesso', 'GET, PUT com retorno'],
              ['201 Created', 'Criado', 'POST que cria recurso'],
              ['204 No Content', 'Sucesso sem corpo', 'DELETE com sucesso'],
              ['400 Bad Request', 'Pedido inválido', 'Erro de lógica de negócio'],
              ['401 Unauthorized', 'Não autenticado', 'Token ausente ou inválido'],
              ['403 Forbidden', 'Sem permissão', 'Autenticado mas sem acesso'],
              ['404 Not Found', 'Não encontrado', 'Recurso não existe'],
              ['422 Unprocessable', 'Validação falhou', 'Automático pelo Pydantic'],
              ['500 Internal Error', 'Erro do servidor', 'Exceções não tratadas'],
            ].map(([code, meaning, when]) => (
              <tr key={code}>
                <td style={{ ...S.td, fontFamily: 'monospace', color: code.startsWith('2') ? '#4a9eed' : code.startsWith('4') ? '#4a9eed' : '#4a9eed' }}>{code}</td>
                <td style={S.td}>{meaning}</td>
                <td style={S.td}>{when}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* Section 6 */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Dependency Injection</h2>
        <p style={S.p}>
          O sistema de Depends() do FastAPI é um dos seus pontos mais fortes. Permite encapsular lógica reutilizável
          (autenticação, sessões de DB, configurações) e compô-la de forma declarativa nos endpoints.
        </p>
        <DependencyGraphSVG />
        <div style={S.code}>{`from fastapi import FastAPI, Depends, HTTPException, Header
from typing import Annotated, Generator
from functools import lru_cache

app = FastAPI()

# --- Configurações como dependência ---
class Settings:
    db_url: str = "sqlite:///./dev.db"
    secret_key: str = "dev-secret"
    api_key: str = "my-api-key"

@lru_cache
def get_settings() -> Settings:
    return Settings()

# --- Sessão de base de dados como dependência ---
def get_db() -> Generator:
    """Cria sessão, injeta nos handlers, fecha no fim do request."""
    db = {"connection": "active"}  # substituir por SQLAlchemy Session
    try:
        yield db
    finally:
        pass  # db.close()

# --- Autenticação como dependência ---
def get_current_user(
    authorization: str = Header(...),
    settings: Settings = Depends(get_settings),
):
    if not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Token inválido")
    token = authorization.replace("Bearer ", "")
    if token != settings.api_key:
        raise HTTPException(status_code=401, detail="Token expirado")
    return {"user": "authenticated_user"}

# --- Query params comuns como dependência reutilizável ---
class PaginationParams:
    def __init__(self, skip: int = 0, limit: int = 10):
        self.skip = skip
        self.limit = limit

# --- Usar dependências nos endpoints ---
@app.get("/items/")
def list_items(
    pagination: Annotated[PaginationParams, Depends(PaginationParams)],
    db = Depends(get_db),
    user = Depends(get_current_user),
):
    return {
        "items": [],
        "skip": pagination.skip,
        "limit": pagination.limit,
        "requested_by": user,
    }

# --- Override de dependências em testes ---
# app.dependency_overrides[get_db] = lambda: mock_db_session`}</div>
        <div style={S.note}>
          O <code>yield</code> nas dependências permite lógica de cleanup (fechar DB, libertar recursos) que corre
          automaticamente após o request — equivalente a um context manager.
        </div>
      </section>

      <hr style={S.divider} />

      {/* Section 7 */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Servir Modelos de Machine Learning</h2>
        <p style={S.p}>
          Um dos casos de uso mais comuns em Data Science: carregar um modelo sklearn (ou qualquer outro) no startup da
          aplicação e expô-lo via endpoint de predição. O <code>lifespan</code> context manager garante que o modelo
          é carregado uma vez e partilhado por todos os requests.
        </p>
        <MLServingSVG />
        <div style={S.code}>{`from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from contextlib import asynccontextmanager
from typing import List, Optional
import joblib
import numpy as np

# --- Estado global do modelo ---
ml_models = {}

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Carrega modelos no startup, liberta no shutdown."""
    print("A carregar modelos ML...")
    try:
        ml_models["iris"] = joblib.load("models/iris_classifier.pkl")
        ml_models["scaler"] = joblib.load("models/scaler.pkl")
        print("Modelos carregados com sucesso!")
    except FileNotFoundError:
        print("AVISO: Ficheiros de modelo não encontrados (modo demo)")
    yield  # app corre aqui
    ml_models.clear()
    print("Modelos libertados.")

app = FastAPI(title="ML Serving API", lifespan=lifespan)

# --- Schemas Pydantic ---
class PredictRequest(BaseModel):
    features: List[float] = Field(
        ...,
        description="Features de input para o modelo",
        example=[5.1, 3.5, 1.4, 0.2],
    )
    model_name: str = Field(default="iris", description="Nome do modelo a usar")

class PredictResponse(BaseModel):
    prediction: int
    prediction_label: str
    confidence: float
    model_name: str
    model_version: str = "1.0.0"

class BatchPredictRequest(BaseModel):
    instances: List[List[float]] = Field(..., description="Lista de feature vectors")
    model_name: str = "iris"

# --- Endpoint de predição ---
@app.post("/predict", response_model=PredictResponse)
def predict(request: PredictRequest):
    if request.model_name not in ml_models:
        raise HTTPException(
            status_code=404,
            detail=f"Modelo '{request.model_name}' não encontrado. "
                   f"Disponíveis: {list(ml_models.keys())}",
        )
    model = ml_models[request.model_name]
    features = np.array(request.features).reshape(1, -1)
    prediction = int(model.predict(features)[0])
    probas = model.predict_proba(features)[0]
    labels = ["setosa", "versicolor", "virginica"]
    return PredictResponse(
        prediction=prediction,
        prediction_label=labels[prediction],
        confidence=round(float(probas.max()), 4),
        model_name=request.model_name,
    )

# --- Endpoint de batch prediction ---
@app.post("/predict/batch")
def predict_batch(request: BatchPredictRequest):
    if request.model_name not in ml_models:
        raise HTTPException(status_code=404, detail="Modelo não encontrado")
    model = ml_models[request.model_name]
    features = np.array(request.instances)
    predictions = model.predict(features).tolist()
    return {"predictions": predictions, "count": len(predictions)}

# --- Versionamento via path ---
@app.post("/v2/predict", response_model=PredictResponse)
def predict_v2(request: PredictRequest):
    """Versão 2 do endpoint de predição com lógica melhorada."""
    return predict(request)`}</div>
        <div style={S.highlight}>
          <strong>Boas práticas para ML Serving:</strong>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem', color: 'var(--text-primary)', lineHeight: 1.8 }}>
            <li>Carregar o modelo no startup — nunca por request (lento e usa muita memória)</li>
            <li>Validar dimensões das features antes de chamar o modelo</li>
            <li>Retornar confiança/probabilidades além da predição</li>
            <li>Adicionar endpoint <code>/model/info</code> com metadata (versão, features esperadas)</li>
            <li>Versionar endpoints para permitir rollback sem downtime</li>
          </ul>
        </div>
      </section>

      <hr style={S.divider} />

      {/* Section 8 */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Async Endpoints e Background Tasks</h2>
        <p style={S.p}>
          FastAPI suporta tanto <code>def</code> síncrono como <code>async def</code>. A escolha correta tem impacto
          significativo na performance. Para operações I/O (BD, APIs externas) use async; para CPU-bound (ML inference
          com GIL) o sync é frequentemente adequado.
        </p>
        <AsyncVsSyncSVG />
        <div style={S.code}>{`from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel
import asyncio
import httpx

app = FastAPI()

# --- Endpoint async: ideal para I/O (DB, APIs externas) ---
@app.get("/async/external-data")
async def fetch_external_data(url: str):
    """Chama API externa sem bloquear o event loop."""
    async with httpx.AsyncClient() as client:
        response = await client.get(url, timeout=10.0)
        response.raise_for_status()
        return response.json()

# --- Múltiplas chamadas I/O em paralelo ---
@app.get("/async/parallel")
async def parallel_requests():
    async with httpx.AsyncClient() as client:
        tasks = [
            client.get("https://api.github.com/repos/tiangolo/fastapi"),
            client.get("https://api.github.com/repos/pydantic/pydantic"),
        ]
        responses = await asyncio.gather(*tasks)
        return [r.json()["stargazers_count"] for r in responses]

# --- Background Tasks: processar após responder ao cliente ---
class ReportRequest(BaseModel):
    email: str
    dataset_id: int

def generate_report(email: str, dataset_id: int):
    """Corre em background — cliente já recebeu a resposta 202."""
    import time
    time.sleep(5)  # simulação de processamento pesado
    print(f"Relatório para {email} (dataset {dataset_id}) gerado!")

@app.post("/reports/", status_code=202)
def request_report(
    report: ReportRequest,
    background_tasks: BackgroundTasks,
):
    background_tasks.add_task(
        generate_report, report.email, report.dataset_id
    )
    return {
        "message": "Relatório em processamento",
        "email": report.email,
        "status": "queued",
    }

# --- Quando usar cada um ---
# async def → chamadas a DB async, HTTP calls, file I/O async
# def (sync) → sklearn/numpy/pandas (CPU-bound com GIL, ou já optimizado)
# BackgroundTasks → envio de emails, geração de relatórios, logging`}</div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo de Operação</th>
              <th style={S.th}>Recomendação</th>
              <th style={S.th}>Motivo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Query à base de dados', 'async def + await', 'I/O-bound, liberta thread'],
              ['Chamada a API externa', 'async def + httpx', 'I/O-bound, concorrência'],
              ['Leitura de ficheiro grande', 'async def + aiofiles', 'I/O-bound'],
              ['Inferência sklearn/numpy', 'def (sync)', 'CPU-bound, GIL presente'],
              ['Inferência PyTorch GPU', 'def + thread pool', 'GIL liberto com CUDA'],
              ['Envio de email', 'BackgroundTasks', 'Resposta imediata ao cliente'],
            ].map(([op, rec, why]) => (
              <tr key={op}>
                <td style={S.td}>{op}</td>
                <td style={{ ...S.td, color, fontFamily: 'monospace', fontSize: '0.82rem' }}>{rec}</td>
                <td style={S.td}>{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* Section 9 */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Autenticação e Segurança</h2>
        <p style={S.p}>
          FastAPI facilita a implementação de OAuth2 com JWT (JSON Web Tokens), o padrão mais usado em APIs modernas.
          O fluxo completo envolve um endpoint de login que emite tokens e um sistema de dependências que valida
          o token em cada request protegido.
        </p>
        <JWTFlowSVG />
        <div style={S.code}>{`from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime, timedelta
from jose import JWTError, jwt
from passlib.context import CryptContext

SECRET_KEY = "super-secret-key-mudar-em-producao"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

app = FastAPI()

# --- CORS Middleware ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://meu-dashboard.com"],  # em dev: ["*"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Modelos ---
class Token(BaseModel):
    access_token: str
    token_type: str

class User(BaseModel):
    username: str
    email: str | None = None
    disabled: bool = False

# --- Funções JWT ---
def create_access_token(data: dict) -> str:
    payload = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    payload.update({"exp": expire})
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

def verify_password(plain: str, hashed: str) -> bool:
    return pwd_context.verify(plain, hashed)

def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)

# --- Dependência de autenticação ---
async def get_current_user(token: str = Depends(oauth2_scheme)) -> User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Credenciais inválidas",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    return User(username=username, email=f"{username}@example.com")

# --- Endpoint de login ---
@app.post("/token", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    # Em produção: verificar na DB com verify_password
    if form_data.username != "admin" or form_data.password != "secret":
        raise HTTPException(
            status_code=400, detail="Utilizador ou password incorretos"
        )
    token = create_access_token(data={"sub": form_data.username})
    return Token(access_token=token, token_type="bearer")

# --- Endpoint protegido ---
@app.get("/users/me", response_model=User)
async def read_current_user(current_user: User = Depends(get_current_user)):
    return current_user

@app.post("/predict/secure")
async def secure_predict(
    data: dict,
    current_user: User = Depends(get_current_user),
):
    return {"prediction": 42, "requested_by": current_user.username}`}</div>
        <div style={S.note}>
          Para rate limiting, usa-se a biblioteca <code>slowapi</code>:
          <code style={{ display: 'block', marginTop: '0.5rem', background: 'transparent', border: 'none', padding: 0 }}>
            pip install slowapi
          </code>
          Permite limitar requests por IP, utilizador ou API key com um simples decorador.
        </div>
      </section>

      <hr style={S.divider} />

      {/* Section 10 */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Integração com Base de Dados</h2>
        <p style={S.p}>
          FastAPI integra naturalmente com SQLAlchemy — tanto a versão síncrona (para simplicidade) como a async
          (para máxima performance). O padrão de dependency injection torna as sessões de DB limpas e testáveis.
        </p>
        <LayeredArchSVG />
        <div style={S.code}>{`from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.ext.asyncio import (
    AsyncSession, create_async_engine, async_sessionmaker
)
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import String, Float, select
from pydantic import BaseModel
from typing import AsyncGenerator

# --- Setup do engine async ---
DATABASE_URL = "sqlite+aiosqlite:///./dev.db"  # dev
# DATABASE_URL = "postgresql+asyncpg://user:pass@host/db"  # prod

engine = create_async_engine(DATABASE_URL, echo=False)
AsyncSessionLocal = async_sessionmaker(engine, expire_on_commit=False)

# --- Modelos SQLAlchemy ---
class Base(DeclarativeBase):
    pass

class Prediction(Base):
    __tablename__ = "predictions"
    id: Mapped[int] = mapped_column(primary_key=True)
    model_name: Mapped[str] = mapped_column(String(50))
    input_hash: Mapped[str] = mapped_column(String(64))
    result: Mapped[float] = mapped_column(Float)
    confidence: Mapped[float] = mapped_column(Float)

# --- Criar tabelas no startup ---
app = FastAPI()

@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

# --- Dependência de sessão DB ---
async def get_db() -> AsyncGenerator[AsyncSession, None]:
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise

# --- Schemas Pydantic ---
class PredictionOut(BaseModel):
    id: int
    model_name: str
    result: float
    confidence: float
    model_config = {"from_attributes": True}

# --- CRUD endpoints ---
@app.get("/predictions/", response_model=list[PredictionOut])
async def list_predictions(
    skip: int = 0,
    limit: int = 10,
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(
        select(Prediction).offset(skip).limit(limit)
    )
    return result.scalars().all()

@app.get("/predictions/{pred_id}", response_model=PredictionOut)
async def get_prediction(pred_id: int, db: AsyncSession = Depends(get_db)):
    pred = await db.get(Prediction, pred_id)
    if not pred:
        raise HTTPException(status_code=404, detail="Predição não encontrada")
    return pred

@app.delete("/predictions/{pred_id}", status_code=204)
async def delete_prediction(pred_id: int, db: AsyncSession = Depends(get_db)):
    pred = await db.get(Prediction, pred_id)
    if not pred:
        raise HTTPException(status_code=404, detail="Predição não encontrada")
    await db.delete(pred)
    # commit feito automaticamente pela dependência`}</div>
        <div style={S.highlight}>
          <strong>Alembic para migrações de schema:</strong>
          <div style={{ ...S.code, margin: '0.5rem 0 0', fontSize: '0.8rem' }}>{`pip install alembic
alembic init alembic          # inicializa pasta de migrações
alembic revision --autogenerate -m "add predictions table"
alembic upgrade head          # aplica migrações pendentes`}</div>
        </div>
      </section>

      <hr style={S.divider} />

      {/* Section 11 */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Testes</h2>
        <p style={S.p}>
          FastAPI inclui TestClient (baseado em httpx) que permite testar endpoints sem correr um servidor real.
          Para endpoints async, usa-se o AsyncClient com pytest-asyncio. Dependency overrides permitem substituir
          dependências reais por mocks nos testes.
        </p>
        <TestPyramidSVG />
        <div style={S.code}>{`# test_api.py
import pytest
from fastapi.testclient import TestClient
from httpx import AsyncClient, ASGITransport
from main import app, get_db

# --- Mock da dependência de DB ---
def override_get_db():
    fake_db = {"type": "in-memory-mock"}
    yield fake_db

app.dependency_overrides[get_db] = override_get_db

# --- TestClient síncrono (para endpoints sync) ---
client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert "message" in response.json()

def test_health_check():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "healthy"

def test_get_item_not_found():
    response = client.get("/items/9999")
    assert response.status_code == 404
    assert "não encontrado" in response.json()["detail"]

def test_create_user_valid():
    payload = {"name": "Ana Silva", "email": "ana@exemplo.pt"}
    response = client.post("/users/", json=payload)
    assert response.status_code == 201
    data = response.json()
    assert data["name"] == "Ana Silva"
    assert data["email"] == "ana@exemplo.pt"
    assert "id" in data

def test_create_user_invalid_email():
    payload = {"name": "Bob", "email": "not-an-email"}
    response = client.post("/users/", json=payload)
    assert response.status_code == 422

def test_predict_endpoint():
    payload = {"features": [5.1, 3.5, 1.4, 0.2], "model_name": "iris"}
    response = client.post("/predict", json=payload)
    # 200 se modelo carregado, 404 se não existe (modo demo)
    assert response.status_code in (200, 404)

# --- AsyncClient para endpoints async ---
@pytest.mark.asyncio
async def test_async_endpoint():
    async with AsyncClient(
        transport=ASGITransport(app=app), base_url="http://test"
    ) as ac:
        response = await ac.get("/")
        assert response.status_code == 200

# --- Fixture de pytest para reutilizar cliente ---
@pytest.fixture
def auth_client():
    """Cliente com token de autenticação."""
    token_resp = client.post(
        "/token",
        data={"username": "admin", "password": "secret"},
    )
    token = token_resp.json()["access_token"]
    client.headers.update({"Authorization": f"Bearer {token}"})
    return client

def test_protected_endpoint(auth_client):
    response = auth_client.get("/users/me")
    assert response.status_code == 200
    assert response.json()["username"] == "admin"`}</div>
        <div style={S.code}>{`# pytest.ini (ou pyproject.toml [tool.pytest.ini_options])
[pytest]
asyncio_mode = auto
testpaths = tests
filterwarnings = ignore::DeprecationWarning

# Correr testes:
# pytest -v                          # verbose
# pytest --cov=app --cov-report=html # com coverage
# pytest -k "test_predict"           # filtrar por nome`}</div>
      </section>

      <hr style={S.divider} />

      {/* Section 12 */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Deployment em Produção</h2>
        <p style={S.p}>
          Fazer deploy de uma app FastAPI envolve containerização com Docker, configuração de Gunicorn com workers
          Uvicorn para aproveitar múltiplos cores, e opcionalmente um reverse proxy Nginx para SSL e rate limiting.
        </p>
        <DeployArchSVG />
        <h3 style={S.h3}>Dockerfile</h3>
        <div style={S.code}>{`# Dockerfile — multi-stage build para imagem pequena
FROM python:3.11-slim as builder

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir --prefix=/install -r requirements.txt

FROM python:3.11-slim

WORKDIR /app
COPY --from=builder /install /usr/local
COPY . .

# Não correr como root em produção
RUN useradd -m appuser && chown -R appuser /app
USER appuser

EXPOSE 8000

# gunicorn com workers uvicorn para multi-core
CMD ["gunicorn", "main:app",
     "--workers", "4",
     "--worker-class", "uvicorn.workers.UvicornWorker",
     "--bind", "0.0.0.0:8000",
     "--timeout", "120",
     "--access-logfile", "-"]`}</div>
        <h3 style={S.h3}>Docker Compose com Nginx</h3>
        <div style={S.code}>{`# docker-compose.yml
version: "3.9"

services:
  api:
    build: .
    environment:
      - DATABASE_URL=postgresql+asyncpg://user:pass@db:5432/dsapi
      - SECRET_KEY=${'{SECRET_KEY}'}
      - ENVIRONMENT=production
    depends_on:
      db:
        condition: service_healthy
    deploy:
      replicas: 2
      resources:
        limits:
          memory: 512M

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: dsapi
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user"]
      interval: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    command: redis-server --maxmemory 128mb

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./certs:/etc/nginx/certs:ro
    depends_on:
      - api

volumes:
  postgres_data:`}</div>
        <h3 style={S.h3}>Deploy em Cloud (Render / Railway / GCP Cloud Run)</h3>
        <div style={S.code}>{`# render.yaml (Render.com — free tier disponível)
services:
  - type: web
    name: ds-api
    env: python
    buildCommand: pip install -r requirements.txt
    startCommand: uvicorn main:app --host 0.0.0.0 --port $PORT
    envVars:
      - key: DATABASE_URL
        fromDatabase:
          name: ds-db
          property: connectionString
      - key: SECRET_KEY
        generateValue: true

databases:
  - name: ds-db
    plan: free

---
# GCP Cloud Run (um comando depois de build da imagem)
# gcloud run deploy ds-api \
#   --image gcr.io/PROJECT/ds-api \
#   --platform managed \
#   --region europe-west1 \
#   --allow-unauthenticated \
#   --set-env-vars DATABASE_URL=...,SECRET_KEY=...`}</div>
        <h3 style={S.h3}>Variáveis de Ambiente e Configuração</h3>
        <div style={S.code}>{`# config.py — gestão de configuração com Pydantic Settings
from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache

class Settings(BaseSettings):
    app_name: str = "DS API"
    environment: str = "development"
    debug: bool = False
    database_url: str = "sqlite+aiosqlite:///./dev.db"
    secret_key: str = "dev-secret-MUDAR-EM-PRODUCAO"
    access_token_expire_minutes: int = 30
    allowed_origins: list[str] = ["http://localhost:3000"]
    log_level: str = "INFO"

    model_config = SettingsConfigDict(
        env_file=".env",          # lê .env automaticamente
        env_file_encoding="utf-8",
        case_sensitive=False,
    )

@lru_cache
def get_settings() -> Settings:
    return Settings()

# .env (não commitar para o git!)
# DATABASE_URL=postgresql+asyncpg://...
# SECRET_KEY=chave-muito-segura-32-caracteres
# ENVIRONMENT=production
# DEBUG=false`}</div>
        <div style={S.highlight}>
          <strong>Checklist de produção:</strong>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
            <li>Variáveis de ambiente para secrets — nunca hardcoded no código</li>
            <li>HTTPS obrigatório — Nginx com Let's Encrypt ou Cloud Load Balancer</li>
            <li>Health check endpoint (<code>/health</code>) configurado no orquestrador</li>
            <li>Logs estruturados (JSON) para integração com ELK / Cloud Logging</li>
            <li>Migrações de DB (Alembic) no pipeline CI/CD antes de deploy</li>
            <li>Rate limiting e CORS restritivo (<code>allow_origins</code> explícito)</li>
            <li>Múltiplos workers Uvicorn para aproveitar múltiplos cores (gunicorn)</li>
            <li>Readiness probe separada de liveness probe no Kubernetes</li>
          </ul>
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Plataforma</th>
              <th style={S.th}>Custo</th>
              <th style={S.th}>Ideal para</th>
              <th style={S.th}>Notas</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Render.com', 'Free / $7/mês', 'Projetos pessoais, demos', 'Sleep em free tier'],
              ['Railway.app', 'Free trial / uso', 'Startups, MVPs', 'Deploy fácil, bom DX'],
              ['GCP Cloud Run', 'Pay-per-use', 'Produção, escala automática', 'Serverless containers'],
              ['AWS ECS/Fargate', 'Pay-per-use', 'Empresarial', 'Mais controlo, mais complexo'],
              ['Fly.io', 'Free / $1.94/mês', 'Apps globais', 'Deploy perto dos utilizadores'],
            ].map(([p, c, i, n]) => (
              <tr key={p}>
                <td style={{ ...S.td, fontWeight: 600, color }}>{p}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{i}</td>
                <td style={S.td}>{n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ─── SECTION 13 ─── */}
      

    </div>
  )
}
