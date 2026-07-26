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
  note: { background: 'rgba(2,132,199,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

// SVG 1: Without Git vs With Git
function SvgWhyGit() {
  return (
    <svg viewBox="0 0 760 180" style={{ width: '100%', height: 'auto', display: 'block' }}>
      {/* Without Git box */}
      <rect x="20" y="20" width="330" height="145" rx="10" fill="rgba(74,158,237,0.08)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="185" y="45" textAnchor="middle" fontSize="12" fontWeight="700" fill="#4a9eed">Sem Git</text>
      <rect x="35" y="55" width="290" height="24" rx="4" fill="rgba(74,158,237,0.12)" />
      <text x="180" y="71" textAnchor="middle" fontSize="10" fill="var(--text-primary)">{'report_final.xlsx'}</text>
      <rect x="35" y="84" width="290" height="24" rx="4" fill="rgba(74,158,237,0.12)" />
      <text x="180" y="100" textAnchor="middle" fontSize="10" fill="var(--text-primary)">{'report_final_v2.xlsx'}</text>
      <rect x="35" y="113" width="290" height="24" rx="4" fill="rgba(74,158,237,0.12)" />
      <text x="180" y="129" textAnchor="middle" fontSize="10" fill="var(--text-primary)">{'report_final_v3_FINAL2.xlsx'}</text>
      <rect x="35" y="142" width="290" height="17" rx="4" fill="rgba(74,158,237,0.35)" />
      <text x="180" y="154" textAnchor="middle" fontSize="9" fill="var(--text-primary)">{'report_final_v3_FINAL2_USE_THIS.xlsx'}</text>

      {/* With Git box */}
      <rect x="410" y="20" width="330" height="145" rx="10" fill="rgba(74,158,237,0.08)" stroke="#bae6fd" strokeWidth="1.5" />
      <text x="575" y="45" textAnchor="middle" fontSize="12" fontWeight="700" fill="#bae6fd">Com Git</text>
      {[0, 1, 2, 3].map(i => (
        <g key={i}>
          <circle cx="445" cy={65 + i * 28} r="7" fill="#bae6fd" />
          <text x="445" y={65 + i * 28 + 3} textAnchor="middle" fontSize="8" fill="#1c1917" dominantBaseline="middle">{i + 1}</text>
          <rect x="460" y={56 + i * 28} width="260" height="18" rx="4" fill="rgba(186,230,253,0.20)" />
          <text x="590" y={68 + i * 28} textAnchor="middle" fontSize="9" fill="var(--text-primary)">
            {i === 0 ? 'commit a1b2c3 — Análise inicial' : i === 1 ? 'commit d4e5f6 — Adicionar gráficos' : i === 2 ? 'commit g7h8i9 — Corrigir outliers' : 'commit j0k1l2 — Versão final (HEAD)'}
          </text>
        </g>
      ))}
      <line x1="445" y1="72" x2="445" y2="158" stroke="#bae6fd" strokeWidth="1.5" strokeDasharray="3,2" />

      {/* Arrow between */}
      <path d="M355 92 L405 92" stroke={color} strokeWidth="2" fill="none" markerEnd="url(#arrow1)" />
      <defs>
        <marker id="arrow1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
    </svg>
  );
}

// SVG 2: Three-tree architecture
function SvgThreeTree() {
  return (
    <svg viewBox="0 0 760 160" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <marker id="arrowB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      {/* Working Directory */}
      <rect x="20" y="30" width="190" height="100" rx="10" fill="rgba(2,132,199,0.08)" stroke={color} strokeWidth="1.5" />
      <text x="115" y="52" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Working Directory</text>
      <text x="115" y="72" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Ficheiros no disco</text>
      <text x="115" y="90" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">model.py (modificado)</text>
      <text x="115" y="106" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">data.csv (novo)</text>
      <text x="115" y="118" textAnchor="middle" fontSize="8" fill="#4a9eed">git add →</text>

      {/* Staging Area */}
      <rect x="285" y="30" width="190" height="100" rx="10" fill="rgba(2,132,199,0.08)" stroke={color} strokeWidth="1.5" />
      <text x="380" y="52" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Index (Staging)</text>
      <text x="380" y="72" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Preparado para commit</text>
      <text x="380" y="90" textAnchor="middle" fontSize="9" fill="#4a9eed">model.py (staged)</text>
      <text x="380" y="106" textAnchor="middle" fontSize="9" fill="#4a9eed">data.csv (staged)</text>
      <text x="380" y="118" textAnchor="middle" fontSize="8" fill="#4a9eed">git commit →</text>

      {/* Repository */}
      <rect x="550" y="30" width="190" height="100" rx="10" fill="rgba(2,132,199,0.08)" stroke={color} strokeWidth="1.5" />
      <text x="645" y="52" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Repository (.git)</text>
      <text x="645" y="72" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Commits permanentes</text>
      <text x="645" y="90" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">blobs / trees / commits</text>
      <text x="645" y="106" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">SHA-1 hashes</text>

      {/* Arrows */}
      <path d="M215 80 L280 80" stroke={color} strokeWidth="2" fill="none" markerEnd="url(#arrowB)" />
      <path d="M480 80 L545 80" stroke={color} strokeWidth="2" fill="none" markerEnd="url(#arrowB)" />
    </svg>
  );
}

// SVG 3: git status anatomy
function SvgStatus() {
  return (
    <svg viewBox="0 0 760 200" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <text x="40" y="35" fontSize="11" fontFamily="monospace" fill="#6b7280">$ git status</text>
      <text x="40" y="55" fontSize="11" fontFamily="monospace" fill="#e5e7eb">On branch main</text>
      <text x="40" y="73" fontSize="11" fontFamily="monospace" fill="#e5e7eb">Changes to be committed:</text>
      <rect x="36" y="78" width="8" height="8" fill="#4a9eed" rx="1" />
      <text x="50" y="87" fontSize="11" fontFamily="monospace" fill="#4a9eed">  modified: {'   '}analysis.py</text>
      <text x="40" y="107" fontSize="11" fontFamily="monospace" fill="#e5e7eb">Changes not staged for commit:</text>
      <rect x="36" y="112" width="8" height="8" fill="#0284c7" rx="1" />
      <text x="50" y="121" fontSize="11" fontFamily="monospace" fill="#0284c7">  modified: {'   '}notebook.ipynb</text>
      <text x="40" y="141" fontSize="11" fontFamily="monospace" fill="#e5e7eb">Untracked files:</text>
      <rect x="36" y="146" width="8" height="8" fill="#4a9eed" rx="1" />
      <text x="50" y="155" fontSize="11" fontFamily="monospace" fill="#4a9eed">  new file: {'    '}raw_data.csv</text>

      {/* Legend */}
      <rect x="480" y="60" width="12" height="12" fill="#4a9eed" rx="2" />
      <text x="498" y="71" fontSize="10" fill="#9ca3af">Staged (pronto para commit)</text>
      <rect x="480" y="82" width="12" height="12" fill="#0284c7" rx="2" />
      <text x="498" y="93" fontSize="10" fill="#9ca3af">Modified (não staged)</text>
      <rect x="480" y="104" width="12" height="12" fill="#4a9eed" rx="2" />
      <text x="498" y="115" fontSize="10" fill="#9ca3af">Untracked (novo)</text>
    </svg>
  );
}

// SVG 4: Branch as pointer
function SvgBranch() {
  return (
    <svg viewBox="0 0 760 200" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <marker id="arrowC" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#6b7280" />
        </marker>
        <marker id="arrowD" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
        <marker id="arrowE" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
        </marker>
      </defs>
      {/* Commits on main */}
      {[0, 1, 2].map(i => (
        <g key={i}>
          <circle cx={80 + i * 130} cy="110" r="22" fill="rgba(74,158,237,0.25)" stroke={color} strokeWidth="2" />
          <text x={80 + i * 130} y="114" textAnchor="middle" fontSize="9" fill="var(--text-primary)" fontWeight="700">
            {i === 0 ? 'c1a2b3' : i === 1 ? 'd4e5f6' : 'g7h8i9'}
          </text>
        </g>
      ))}
      {/* Arrows between commits */}
      <path d="M102 110 L188 110" stroke={color} strokeWidth="1.5" fill="none" markerEnd="url(#arrowC)" />
      <path d="M232 110 L318 110" stroke={color} strokeWidth="1.5" fill="none" markerEnd="url(#arrowC)" />

      {/* Feature branch commit */}
      <circle cx="470" cy="60" r="22" fill="rgba(74,158,237,0.25)" stroke="#4a9eed" strokeWidth="2" />
      <text x="470" y="64" textAnchor="middle" fontSize="9" fill="var(--text-primary)" fontWeight="700">j0k1l2</text>
      <path d="M352 95 L450 72" stroke="#4a9eed" strokeWidth="1.5" fill="none" markerEnd="url(#arrowE)" />

      {/* main label */}
      <rect x="295" y="140" width="70" height="22" rx="4" fill={color} />
      <text x="330" y="155" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">main</text>
      <path d="M330 140 L340 132" stroke={color} strokeWidth="1.5" fill="none" />

      {/* feature label */}
      <rect x="440" y="12" width="90" height="22" rx="4" fill="#4a9eed" />
      <text x="485" y="26" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">feature/ml</text>
      <path d="M470 40 L470 34" stroke="#4a9eed" strokeWidth="1.5" fill="none" />

      {/* HEAD label */}
      <rect x="580" y="95" width="55" height="22" rx="4" fill="#4a9eed" />
      <text x="607" y="110" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">HEAD</text>
      <path d="M580 106 L360 106" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,2" fill="none" markerEnd="url(#arrowD)" />
    </svg>
  );
}

// SVG 5: Merge vs Rebase
function SvgMergeRebase() {
  return (
    <svg viewBox="0 0 760 220" style={{ width: '100%', height: 'auto', display: 'block' }}>
      {/* Merge side */}
      <text x="185" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>git merge (preserva história)</text>
      {/* main commits */}
      <circle cx="50" cy="80" r="18" fill="rgba(2,132,199,0.2)" stroke={color} strokeWidth="1.5" />
      <text x="50" y="84" textAnchor="middle" fontSize="8" fill={color}>A</text>
      <circle cx="120" cy="80" r="18" fill="rgba(2,132,199,0.2)" stroke={color} strokeWidth="1.5" />
      <text x="120" y="84" textAnchor="middle" fontSize="8" fill={color}>B</text>
      <circle cx="190" cy="80" r="18" fill="rgba(2,132,199,0.2)" stroke={color} strokeWidth="1.5" />
      <text x="190" y="84" textAnchor="middle" fontSize="8" fill={color}>C</text>
      {/* feature commit */}
      <circle cx="155" cy="145" r="18" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="155" y="149" textAnchor="middle" fontSize="8" fill="#4a9eed">F</text>
      {/* merge commit */}
      <circle cx="260" cy="80" r="20" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
      <text x="260" y="84" textAnchor="middle" fontSize="8" fill="#4a9eed" fontWeight="700">M</text>
      <defs>
        <marker id="arrowM" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L5,3 L0,6 Z" fill="#6b7280" />
        </marker>
      </defs>
      <path d="M68 80 L102 80" stroke="#6b7280" strokeWidth="1.2" fill="none" markerEnd="url(#arrowM)" />
      <path d="M138 80 L172 80" stroke="#6b7280" strokeWidth="1.2" fill="none" markerEnd="url(#arrowM)" />
      <path d="M208 80 L240 80" stroke="#6b7280" strokeWidth="1.2" fill="none" markerEnd="url(#arrowM)" />
      <path d="M173 145 L243 95" stroke="#4a9eed" strokeWidth="1.2" fill="none" markerEnd="url(#arrowM)" />
      <path d="M120 98 L140 130" stroke="#4a9eed" strokeWidth="1.2" strokeDasharray="3,2" fill="none" />
      <text x="155" y="195" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Merge commit visível no log</text>

      {/* Rebase side */}
      <text x="565" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>git rebase (história linear)</text>
      {[0, 1, 2, 3, 4].map(i => (
        <g key={i}>
          <circle cx={390 + i * 70} cy="80" r="18"
            fill={i < 3 ? 'rgba(2,132,199,0.2)' : 'rgba(74,158,237,0.10)'}
            stroke={i < 3 ? color : '#4a9eed'} strokeWidth="1.5" />
          <text x={390 + i * 70} y="84" textAnchor="middle" fontSize="8"
            fill={i < 3 ? color : '#4a9eed'}>
            {i === 0 ? 'A' : i === 1 ? 'B' : i === 2 ? 'C' : i === 3 ? "F'" : "G'"}
          </text>
          {i < 4 && (
            <path d={`M${408 + i * 70} 80 L${442 + i * 70} 80`} stroke="#6b7280" strokeWidth="1.2" fill="none" markerEnd="url(#arrowM)" />
          )}
        </g>
      ))}
      <text x="565" y="195" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Commits da feature reescritos sobre main</text>
    </svg>
  );
}

// SVG 6: Conflict markers
function SvgConflict() {
  return (
    <svg viewBox="0 0 760 210" style={{ width: '100%', height: 'auto', display: 'block' }}>
      {/* HEAD section highlight */}
      <rect x="30" y="60" width="540" height="42" rx="4" fill="rgba(74,158,237,0.12)" />
      {/* Merge section highlight */}
      <rect x="30" y="118" width="540" height="42" rx="4" fill="rgba(96,165,250,0.10)" />

      {/* Code lines */}
      <text x="45" y="34" fontSize="11" fontFamily="monospace" fill="#6b7280"># model.py — conflito detetado</text>
      <text x="45" y="52" fontSize="11" fontFamily="monospace" fill="#e5e7eb">def train_model(data):</text>

      <text x="45" y="74" fontSize="11" fontFamily="monospace" fill="#38bdf8">{'<<<<<<< HEAD'}</text>
      <text x="45" y="94" fontSize="11" fontFamily="monospace" fill="#bae6fd">{'    return RandomForest(n_estimators=100)'}</text>

      <text x="45" y="114" fontSize="11" fontFamily="monospace" fill="#94a3b8">{'======='}</text>

      <text x="45" y="132" fontSize="11" fontFamily="monospace" fill="#7dd3fc">{'    return GradientBoosting(n_estimators=200)'}</text>
      <text x="45" y="152" fontSize="11" fontFamily="monospace" fill="#7dd3fc">{'>>>>>>> feature/new-model'}</text>

      {/* Labels on the right */}
      <rect x="585" y="62" width="145" height="38" rx="6" fill="rgba(74,158,237,0.18)" stroke="#4a9eed" strokeWidth="1" />
      <text x="657" y="78" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4a9eed">A tua versão</text>
      <text x="657" y="92" textAnchor="middle" fontSize="9" fill="#38bdf8">(HEAD)</text>

      <rect x="585" y="120" width="145" height="38" rx="6" fill="rgba(96,165,250,0.15)" stroke="#38bdf8" strokeWidth="1" />
      <text x="657" y="136" textAnchor="middle" fontSize="9" fontWeight="700" fill="#7dd3fc">Versão a fazer merge</text>
      <text x="657" y="150" textAnchor="middle" fontSize="9" fill="#7dd3fc">feature/new-model</text>

      {/* Connector lines */}
      <line x1="575" y1="81" x2="585" y2="81" stroke="#4a9eed" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="575" y1="139" x2="585" y2="139" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" />
    </svg>
  );
}

// SVG 7: Remote repositories
function SvgRemote() {
  return (
    <svg viewBox="0 0 760 180" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <marker id="arrowR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
        <marker id="arrowRL" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto">
          <path d="M6,0 L0,3 L6,6 Z" fill={color} />
        </marker>
      </defs>
      {/* Local */}
      <rect x="30" y="50" width="170" height="90" rx="10" fill="rgba(2,132,199,0.08)" stroke={color} strokeWidth="1.5" />
      <text x="115" y="75" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Repo Local</text>
      <text x="115" y="95" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Working Dir</text>
      <text x="115" y="112" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Staging + .git</text>
      <text x="115" y="130" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">origin/main (tracking)</text>

      {/* GitHub */}
      <rect x="295" y="30" width="170" height="120" rx="10" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="380" y="58" textAnchor="middle" fontSize="12" fontWeight="700" fill="#4a9eed">GitHub / GitLab</text>
      <text x="380" y="78" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">origin (remote)</text>
      <text x="380" y="98" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Servidor centralizado</text>
      <text x="380" y="115" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">PRs, Issues, Actions</text>
      <text x="380" y="135" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Backup na cloud</text>

      {/* Other devs */}
      <rect x="560" y="50" width="170" height="90" rx="10" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="645" y="75" textAnchor="middle" fontSize="12" fontWeight="700" fill="#4a9eed">Outros Devs</text>
      <text x="645" y="95" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Repo Local B</text>
      <text x="645" y="112" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Repo Local C</text>
      <text x="645" y="130" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">pull / push</text>

      {/* Arrows */}
      <path d="M203 82 L292 72" stroke={color} strokeWidth="1.8" fill="none" markerEnd="url(#arrowR)" />
      <text x="247" y="68" textAnchor="middle" fontSize="9" fill={color}>push</text>
      <path d="M292 100 L203 108" stroke={color} strokeWidth="1.8" fill="none" markerEnd="url(#arrowR)" />
      <text x="247" y="116" textAnchor="middle" fontSize="9" fill={color}>pull/fetch</text>
      <path d="M558 72 L468 82" stroke="#4a9eed" strokeWidth="1.8" fill="none" markerEnd="url(#arrowR)" />
      <text x="513" y="68" textAnchor="middle" fontSize="9" fill="#4a9eed">push</text>
      <path d="M468 100 L558 108" stroke="#4a9eed" strokeWidth="1.8" fill="none" markerEnd="url(#arrowR)" />
      <text x="513" y="116" textAnchor="middle" fontSize="9" fill="#4a9eed">pull/fetch</text>
    </svg>
  );
}

// SVG 8: Pull Request Flow
function SvgPRFlow() {
  const steps = ['Fork /\nBranch', 'Commits', 'Push', 'Abrir PR', 'Review', 'Merge'];
  const cols = [60, 175, 290, 405, 520, 635];
  return (
    <svg viewBox="0 0 760 120" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <marker id="arrowPR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      {steps.map((label, i) => (
        <g key={i}>
          <circle cx={cols[i]} cy="60" r="28" fill="rgba(2,132,199,0.12)" stroke={color} strokeWidth="1.8" />
          <text x={cols[i]} y={label.includes('\n') ? "55" : "64"} textAnchor="middle" fontSize="9" fontWeight="700" fill={color}>
            {label.split('\n')[0]}
          </text>
          {label.includes('\n') && (
            <text x={cols[i]} y="68" textAnchor="middle" fontSize="9" fontWeight="700" fill={color}>
              {label.split('\n')[1]}
            </text>
          )}
          <text x={cols[i]} y="105" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{i + 1}</text>
          {i < steps.length - 1 && (
            <path d={`M${cols[i] + 30} 60 L${cols[i + 1] - 30} 60`} stroke={color} strokeWidth="1.5" fill="none" markerEnd="url(#arrowPR)" />
          )}
        </g>
      ))}
    </svg>
  );
}

// SVG 9: GitFlow diagram
function SvgGitFlow() {
  return (
    <svg viewBox="0 0 760 230" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <marker id="arrowGF" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L5,3 L0,6 Z" fill="#6b7280" />
        </marker>
      </defs>
      {/* Branch labels */}
      {[
        { label: 'main', y: 30, color: '#4a9eed' },
        { label: 'hotfix', y: 65, color: '#4a9eed' },
        { label: 'release', y: 100, color: '#4a9eed' },
        { label: 'develop', y: 135, color: '#4a9eed' },
        { label: 'feature', y: 170, color: '#4a9eed' },
      ].map(({ label, y, color: c }) => (
        <g key={label}>
          <rect x="10" y={y - 10} width="65" height="20" rx="4" fill={c} fillOpacity="0.15" />
          <text x="42" y={y + 4} textAnchor="middle" fontSize="9" fontWeight="700" fill={c}>{label}</text>
          <line x1="78" y1={y} x2="740" y2={y} stroke={c} strokeWidth="1.2" strokeDasharray="4,3" />
        </g>
      ))}

      {/* Commit dots */}
      {[
        { x: 110, y: 30, c: '#4a9eed' }, { x: 350, y: 30, c: '#4a9eed' }, { x: 600, y: 30, c: '#4a9eed' }, { x: 720, y: 30, c: '#4a9eed' },
        { x: 200, y: 65, c: '#4a9eed' }, { x: 300, y: 65, c: '#4a9eed' },
        { x: 450, y: 100, c: '#4a9eed' }, { x: 550, y: 100, c: '#4a9eed' },
        { x: 110, y: 135, c: '#4a9eed' }, { x: 250, y: 135, c: '#4a9eed' }, { x: 400, y: 135, c: '#4a9eed' }, { x: 500, y: 135, c: '#4a9eed' }, { x: 620, y: 135, c: '#4a9eed' }, { x: 720, y: 135, c: '#4a9eed' },
        { x: 150, y: 170, c: '#4a9eed' }, { x: 220, y: 170, c: '#4a9eed' },
        { x: 480, y: 170, c: '#4a9eed' }, { x: 560, y: 170, c: '#4a9eed' },
      ].map(({ x, y, c }, i) => (
        <circle key={i} cx={x} cy={y} r="7" fill={c} fillOpacity="0.3" stroke={c} strokeWidth="1.5" />
      ))}

      {/* Merge lines */}
      <path d="M300 65 L350 30" stroke="#6b7280" strokeWidth="1" fill="none" markerEnd="url(#arrowGF)" />
      <path d="M550 100 L600 30" stroke="#6b7280" strokeWidth="1" fill="none" markerEnd="url(#arrowGF)" />
      <path d="M550 100 L620 135" stroke="#6b7280" strokeWidth="1" fill="none" markerEnd="url(#arrowGF)" />
      <path d="M220 170 L250 135" stroke="#6b7280" strokeWidth="1" fill="none" markerEnd="url(#arrowGF)" />
      <path d="M560 170 L620 135" stroke="#6b7280" strokeWidth="1" fill="none" markerEnd="url(#arrowGF)" />
      <path d="M200 65 L250 135" stroke="#6b7280" strokeWidth="1" fill="none" markerEnd="url(#arrowGF)" />

      <text x="380" y="215" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">GitFlow: branches com papéis bem definidos para releases estruturadas</text>
    </svg>
  );
}

// SVG 10: Commit message anatomy
function SvgCommitMsg() {
  return (
    <svg viewBox="0 0 760 200" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <text x="40" y="35" fontSize="11" fontFamily="monospace" fill="#6b7280">$ git commit</text>
      <rect x="30" y="42" width="440" height="20" rx="3" fill="rgba(74,158,237,0.10)" />
      <text x="40" y="56" fontSize="11" fontFamily="monospace" fill="var(--text-primary)">feat: adicionar validação cruzada ao pipeline de treino</text>
      <text x="480" y="55" fontSize="9" fill="#4a9eed">← 50 chars máx.</text>
      <text x="40" y="80" fontSize="11" fontFamily="monospace" fill="#6b7280">(linha em branco obrigatória)</text>
      <rect x="30" y="90" width="600" height="60" rx="3" fill="rgba(74,158,237,0.08)" />
      <text x="40" y="108" fontSize="11" fontFamily="monospace" fill="#4a9eed">Implementar k-fold cross-validation (k=5) para evitar</text>
      <text x="40" y="124" fontSize="11" fontFamily="monospace" fill="#4a9eed">overfitting. Adicionar métricas de val ao relatório.</text>
      <text x="40" y="140" fontSize="11" fontFamily="monospace" fill="#4a9eed">Closes #42</text>
      <text x="640" y="120" fontSize="9" fill="#4a9eed">← Corpo</text>
      <text x="640" y="135" fontSize="9" fill="#4a9eed">72 chars/linha</text>
    </svg>
  );
}

// SVG 11: Daily workflow
function SvgDailyWorkflow() {
  const steps = [
    { label: 'git pull\norigin main', color: '#4a9eed' },
    { label: 'git checkout\n-b feature/x', color: '#4a9eed' },
    { label: 'Editar\nficheiros', color: '#4a9eed' },
    { label: 'git add\ngit commit', color: color },
    { label: 'git push\norigin', color: '#4a9eed' },
    { label: 'Abrir\nPull Request', color: '#4a9eed' },
  ];
  return (
    <svg viewBox="0 0 760 140" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <marker id="arrowDW" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#6b7280" />
        </marker>
      </defs>
      {steps.map((s, i) => {
        const x = 50 + i * 115;
        return (
          <g key={i}>
            <rect x={x - 42} y="30" width="84" height="60" rx="10"
              fill={s.color + '20'} stroke={s.color} strokeWidth="1.8" />
            <text x={x} y={s.label.includes('\n') ? "57" : "64"} textAnchor="middle" fontSize="9" fontWeight="700" fill={s.color}>
              {s.label.split('\n')[0]}
            </text>
            {s.label.includes('\n') && (
              <text x={x} y="72" textAnchor="middle" fontSize="9" fontWeight="700" fill={s.color}>
                {s.label.split('\n')[1]}
              </text>
            )}
            {i < steps.length - 1 && (
              <path d={`M${x + 44} 60 L${x + 71} 60`} stroke="#6b7280" strokeWidth="1.5" fill="none" markerEnd="url(#arrowDW)" />
            )}
          </g>
        );
      })}
    </svg>
  );
}

export default function PfDS11() {
  return (
    <div style={S.page}>
      <Link to="/pfds" style={S.back}><ArrowLeft size={16} /> Voltar a Programming for Data Science</Link>

      <span style={S.tag}>MÓDULO 09</span>
      <h1 style={S.h1}>Git & Version Control para Data Scientists</h1>

      {/* Section 1 */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Porquê Git?</h2>
        <p style={S.p}>
          Sem controlo de versões, o resultado típico é uma pasta com ficheiros chamados
          {' "'}report_final_v3_FINAL2_USE_THIS.xlsx{'"'}. Esta abordagem artesanal falha quando há colaboração,
          quando precisamos de reverter mudanças, ou quando queremos perceber o que mudou e porquê.
        </p>
        <div style={S.diagram}>
          <SvgWhyGit />
        </div>
        <p style={S.p}>
          Git resolve este problema com três propriedades fundamentais:
        </p>
        <div style={S.highlight}>
          <strong style={{ color: color }}>Snapshots, não diffs.</strong>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Ao contrário de sistemas mais antigos (SVN, CVS), o Git guarda uma fotografia completa do projeto a cada commit,
            não apenas as diferenças linha a linha. Isto torna as operações de branch e merge muito mais eficientes.
            Ficheiros não modificados são referenciados por ponteiro, não copiados.
          </p>
        </div>
        <div style={S.highlight}>
          <strong style={{ color: color }}>Distribuído.</strong>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Cada clone é um repositório completo com toda a história. Podes trabalhar offline, criar branches locais
            e fazer commits sem acesso à internet. O servidor central (GitHub, GitLab) é apenas mais um nó — conveniente,
            não obrigatório para o funcionamento diário.
          </p>
        </div>
        <div style={S.highlight}>
          <strong style={{ color: color }}>Integridade por design.</strong>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Cada objeto no Git é identificado pelo seu hash SHA-1. Qualquer alteração a um ficheiro muda o hash.
            É impossível alterar histórico sem que o Git detete a inconsistência. Isto garante auditabilidade total.
          </p>
        </div>
        <p style={S.p}>
          Para data science, Git permite ainda rastrear qual código gerou qual modelo, reproduzir experimentos de meses atrás,
          e colaborar em notebooks sem destruir o trabalho dos colegas.
        </p>
      </section>

      <hr style={S.divider} />

      {/* Section 2 */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Como o Git Funciona Internamente</h2>
        <p style={S.p}>
          O Git organiza o trabalho em três áreas distintas — a arquitetura das três árvores.
          Compreender estas áreas é a chave para nunca ficar perdido com os comandos:
        </p>
        <div style={S.diagram}>
          <SvgThreeTree />
        </div>
        <h3 style={S.h3}>Os Quatro Tipos de Objetos</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Objeto</th>
              <th style={S.th}>Descrição</th>
              <th style={S.th}>Analogia</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['blob', 'Conteúdo de um ficheiro (sem nome)', 'Ficheiro comprimido'],
              ['tree', 'Lista de blobs + sub-trees (diretório)', 'Pasta'],
              ['commit', 'Snapshot + metadata + ponteiro para parent', 'Foto + legenda'],
              ['tag', 'Ponteiro com nome para um commit específico', 'Post-it numa foto'],
            ].map(([obj, desc, anal]) => (
              <tr key={obj}>
                <td style={{ ...S.td, fontFamily: 'monospace', color: color }}>{obj}</td>
                <td style={S.td}>{desc}</td>
                <td style={S.td}>{anal}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          Quando fazes {' '}
          <code style={{ background: 'var(--bg-secondary)', padding: '0.1rem 0.4rem', borderRadius: 4, fontFamily: 'monospace', fontSize: '0.85rem' }}>
            git commit
          </code>
          {', o Git cria um objeto blob para cada ficheiro modificado, agrupa-os numa tree, e cria um objeto commit que aponta para essa tree e para o commit anterior (parent). O SHA-1 de cada objeto é calculado a partir do seu conteúdo — duas árvores idênticas têm o mesmo hash.'}
        </p>
        <div style={S.note}>
          O SHA-1 é um hash de 40 caracteres hexadecimais (ex: a1b2c3d4...). Podes usar apenas os primeiros 7 caracteres
          na maioria dos comandos Git — são suficientemente únicos na prática.
        </div>
      </section>

      <hr style={S.divider} />

      {/* Section 3 */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Configuração Inicial</h2>
        <p style={S.p}>
          Antes de usar o Git, precisas de te identificar. Esta informação aparece em cada commit que fizeres:
        </p>
        <div style={S.code}>{`git config --global user.name "Ana Silva"
git config --global user.email "ana@example.com"
git config --global core.editor "code --wait"   # VS Code
git config --global init.defaultBranch main`}</div>

        <p style={S.p}>
          Estas configurações ficam guardadas em <code style={{ fontFamily: 'monospace', background: 'var(--bg-secondary)', padding: '0.1rem 0.4rem', borderRadius: 4 }}>~/.gitconfig</code>.
          Podes ter configurações por projeto (sem <code style={{ fontFamily: 'monospace', background: 'var(--bg-secondary)', padding: '0.1rem 0.4rem', borderRadius: 4 }}>--global</code>) que sobrepõem as globais.
        </p>

        <h3 style={S.h3}>Iniciar ou Clonar um Repositório</h3>
        <div style={S.code}>{`# Criar novo repositório no diretório atual
git init meu-projeto
cd meu-projeto

# Clonar repositório existente
git clone https://github.com/utilizador/repo.git
git clone git@github.com:utilizador/repo.git   # via SSH (recomendado)`}</div>

        <h3 style={S.h3}>Anatomia do git status</h3>
        <div style={S.diagram}>
          <SvgStatus />
        </div>
        <p style={S.p}>
          Os ficheiros transitam entre estados: <strong>untracked</strong> (novo, Git não conhece),
          <strong> modified</strong> (alterado mas não staged), <strong>staged</strong> (pronto para commit),
          e <strong>committed</strong> (guardado no repositório). O <code style={{ fontFamily: 'monospace', background: 'var(--bg-secondary)', padding: '0.1rem 0.4rem', borderRadius: 4 }}>git status</code> mostra sempre o estado atual destas transições.
        </p>
      </section>

      <hr style={S.divider} />

      {/* Section 4 */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Comandos Fundamentais</h2>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Comando</th>
              <th style={S.th}>O que faz</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['git init', 'Inicializa repositório Git no diretório atual'],
              ['git clone <url>', 'Copia repositório remoto para local'],
              ['git status', 'Mostra estado da working directory e staging area'],
              ['git add <ficheiro>', 'Adiciona ficheiro(s) à staging area'],
              ['git add .', 'Adiciona todos os ficheiros modificados'],
              ['git commit -m "msg"', 'Cria commit com mensagem inline'],
              ['git log', 'Mostra histórico de commits'],
              ['git log --oneline --graph --decorate', 'Log compacto com visualização de branches'],
              ['git diff', 'Diferenças entre working dir e staging'],
              ['git diff --staged', 'Diferenças entre staging e último commit'],
              ['git diff HEAD', 'Todas as diferenças desde último commit'],
              ['git show <hash>', 'Mostra detalhes de um commit específico'],
              ['git commit --amend', 'Edita o último commit (mensagem ou conteúdo)'],
            ].map(([cmd, desc]) => (
              <tr key={cmd}>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem', color: color }}>{cmd}</td>
                <td style={S.td}>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Exemplos Práticos</h3>
        <div style={S.code}>{`# Workflow básico
git status
git add src/model.py
git add -p                    # adicionar por hunk (interativo)
git commit -m "feat: modelo de regressão logística"

# Ver histórico bonito
git log --oneline --graph --decorate --all

# Comparar com branch main
git diff main...HEAD

# Ver o que está staged
git diff --staged`}</div>

        <div style={S.note}>
          <strong>Atenção com --amend:</strong> só deves alterar o último commit se ainda não fizeste push.
          Reescrever commits já partilhados com outros desenvolvedores causa conflitos sérios.
        </div>

        <h3 style={S.h3}>Desfazer Mudanças</h3>
        <div style={S.code}>{`# Retirar ficheiro da staging area (mantém as alterações)
git restore --staged ficheiro.py

# Descartar alterações no working directory
git restore ficheiro.py

# Criar commit que desfaz um commit anterior (seguro)
git revert a1b2c3d

# Mover HEAD para trás (CUIDADO: destrói histórico)
git reset --hard HEAD~1`}</div>
      </section>

      <hr style={S.divider} />

      {/* Section 5 */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Branches</h2>
        <p style={S.p}>
          Uma branch no Git é simplesmente um ponteiro leve (ficheiro com 41 bytes) que aponta para um commit.
          Criar uma branch é praticamente instantâneo e grátis — usa-as liberalmente.
        </p>
        <div style={S.diagram}>
          <SvgBranch />
        </div>
        <h3 style={S.h3}>Comandos de Branch</h3>
        <div style={S.code}>{`# Listar branches
git branch
git branch -a            # incluir remotas

# Criar e mudar para nova branch
git checkout -b feature/nova-analise
git switch -c feature/nova-analise   # sintaxe moderna

# Mudar de branch
git checkout main
git switch main

# Apagar branch (local)
git branch -d feature/nova-analise   # seguro (apenas se merged)
git branch -D feature/nova-analise   # forçado`}</div>

        <h3 style={S.h3}>Merge vs Rebase</h3>
        <div style={S.diagram}>
          <SvgMergeRebase />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Aspeto</th>
              <th style={S.th}>git merge</th>
              <th style={S.th}>git rebase</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['História', 'Preservada exatamente', 'Reescrita (commits novos)'],
              ['Resultado', 'Merge commit visível', 'Linha temporal linear'],
              ['Uso ideal', 'Integrar features em main', 'Atualizar feature com main'],
              ['Conflitos', 'Uma vez no merge', 'Pode repetir por commit'],
              ['Regra de ouro', 'Seguro sempre', 'Nunca em commits partilhados'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 600 }}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>git stash — Guardar Trabalho Temporariamente</h3>
        <div style={S.code}>{`# Guardar trabalho em progresso
git stash push -m "análise exploratória a meio"

# Listar stashes
git stash list

# Recuperar o mais recente
git stash pop

# Recuperar stash específico
git stash apply stash@{2}`}</div>
        <p style={S.p}>
          O stash é essencial quando precisas de mudar de branch rapidamente mas tens trabalho não terminado
          que ainda não queres commitar. Guarda o estado da working directory e da staging area num "bolso" temporário.
        </p>
      </section>

      <hr style={S.divider} />

      {/* Section 6 */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Merge e Resolução de Conflitos</h2>
        <p style={S.p}>
          Conflitos ocorrem quando dois branches modificam a mesma linha do mesmo ficheiro de formas diferentes.
          O Git não sabe qual versão é "certa" e pede a tua decisão.
        </p>
        <div style={S.diagram}>
          <SvgConflict />
        </div>
        <h3 style={S.h3}>Processo de Resolução Passo-a-Passo</h3>
        <div style={S.code}>{`# 1. Tentar fazer merge
git merge feature/new-model

# 2. Ver ficheiros com conflitos
git status

# 3. Editar os ficheiros — escolher/combinar as versões
# Remover os marcadores <<<<, ====, >>>>
# Guardar a versão final desejada

# 4. Marcar como resolvido
git add src/model.py

# 5. Completar o merge
git commit
# (mensagem de merge é gerada automaticamente)

# Abortar merge se necessário
git merge --abort`}</div>

        <h3 style={S.h3}>Fast-Forward vs 3-Way Merge</h3>
        <p style={S.p}>
          Quando a branch a integrar está diretamente à frente de main (sem commits divergentes),
          o Git faz um <strong>fast-forward</strong>: simplesmente move o ponteiro main para o commit mais recente,
          sem criar um merge commit. Para forçar sempre um merge commit (útil para rastreabilidade):
        </p>
        <div style={S.code}>{`git merge --no-ff feature/analise`}</div>
        <p style={S.p}>
          O <strong>3-way merge</strong> é usado quando há commits divergentes nos dois branches.
          O Git encontra o ancestral comum, compara ambos com ele, e combina as mudanças automaticamente onde não há conflito.
        </p>
        <div style={S.note}>
          <strong>Boas práticas para evitar conflitos:</strong> faz merge/rebase frequente com main,
          divide responsabilidades por ficheiro entre elementos da equipa, e mantém commits pequenos e focados.
        </div>
      </section>

      <hr style={S.divider} />

      {/* Section 7 */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Repositórios Remotos</h2>
        <div style={S.diagram}>
          <SvgRemote />
        </div>
        <div style={S.code}>{`# Adicionar remote
git remote add origin https://github.com/user/repo.git
git remote -v              # ver remotes configurados

# Enviar para remote (primeira vez)
git push -u origin main

# Push normal
git push

# Buscar alterações sem integrar
git fetch origin

# Buscar e integrar
git pull                   # = git fetch + git merge
git pull --rebase          # = git fetch + git rebase`}</div>

        <h3 style={S.h3}>origin/main vs main</h3>
        <p style={S.p}>
          <strong>main</strong> é o teu branch local. <strong>origin/main</strong> é o tracking branch —
          uma referência local ao estado do branch main no servidor remoto na última vez que comunicaste com ele.
          Após um {' '}
          <code style={{ fontFamily: 'monospace', background: 'var(--bg-secondary)', padding: '0.1rem 0.3rem', borderRadius: 4 }}>git fetch</code>,
          {' '}origin/main está atualizado mas main local ainda não. O {' '}
          <code style={{ fontFamily: 'monospace', background: 'var(--bg-secondary)', padding: '0.1rem 0.3rem', borderRadius: 4 }}>git pull</code>
          {' '}faz as duas coisas de seguida.
        </p>
        <div style={S.code}>{`# Ver diferença entre local e remote
git log main..origin/main      # commits no remote que não tens local
git log origin/main..main      # commits locais que não enviaste

# Seguir branch remoto
git checkout --track origin/feature/x`}</div>
      </section>

      <hr style={S.divider} />

      {/* Section 8 */}
      <section style={S.section}>
        <h2 style={S.h2}>8. GitHub Workflow</h2>
        <p style={S.p}>
          O Pull Request (PR) é o mecanismo central de colaboração no GitHub/GitLab.
          Permite propor mudanças, receber feedback e integrar código de forma controlada e auditável.
        </p>
        <div style={S.diagram}>
          <SvgPRFlow />
        </div>
        <h3 style={S.h3}>Criar um Pull Request</h3>
        <div style={S.code}>{`# 1. Criar branch a partir de main atualizado
git switch main
git pull
git switch -c feature/validacao-cruzada

# 2. Fazer commits
git add src/validation.py
git commit -m "feat: implementar k-fold cross-validation"

# 3. Push da branch
git push -u origin feature/validacao-cruzada

# 4. No GitHub: abrir PR via interface web
# Title: "feat: k-fold cross-validation no pipeline"
# Body: descrição, screenshots, como testar

# 5. Após aprovação: merge no GitHub
# 6. Limpar branch local
git switch main
git pull
git branch -d feature/validacao-cruzada`}</div>

        <h3 style={S.h3}>Code Review — Boas Práticas</h3>
        <div style={S.highlight}>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
            <li>PRs pequenos e focados (idealmente menos de 400 linhas alteradas)</li>
            <li>Descreve o contexto, não apenas o que mudou</li>
            <li>Inclui prints/outputs relevantes para mudanças em ML</li>
            <li>Review o teu próprio PR antes de pedir revisão</li>
            <li>Feedback construtivo: foca no código, não na pessoa</li>
            <li>Usa {'"'}nit:{'"'} para sugestões menores não bloqueantes</li>
            <li>Branches protegidos: requer aprovação antes de merge em main</li>
          </ul>
        </div>
      </section>

      <hr style={S.divider} />

      {/* Section 9 */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Git para Data Science</h2>
        <h3 style={S.h3}>.gitignore — O que Não Versionar</h3>
        <p style={S.p}>
          Em projetos de data science, muitos ficheiros não devem ir para o repositório:
          dados brutos grandes, modelos treinados, ficheiros temporários de notebooks, credenciais.
        </p>
        <div style={S.code}>{`# .gitignore típico para Data Science

# Dados
data/raw/
data/processed/
*.csv
*.parquet
*.feather

# Modelos e outputs grandes
models/
*.pkl
*.joblib
*.h5
*.onnx

# Python
__pycache__/
*.py[cod]
.venv/
venv/
*.egg-info/

# Jupyter
.ipynb_checkpoints/
*.ipynb   # ou versionar apenas notebooks limpos

# Credenciais (NUNCA commitar)
.env
secrets.json
*.pem

# OS
.DS_Store
Thumbs.db`}</div>

        <h3 style={S.h3}>Git LFS — Large File Storage</h3>
        <p style={S.p}>
          Para ficheiros grandes que precisas de versionar (datasets de referência, modelos base), usa Git LFS.
          Em vez de guardar o conteúdo no repositório Git, guarda apenas um ponteiro e o ficheiro fica num servidor LFS.
        </p>
        <div style={S.code}>{`# Instalar Git LFS
git lfs install

# Rastrear tipos de ficheiros
git lfs track "*.pkl"
git lfs track "data/reference/*.csv"

# O ficheiro .gitattributes é criado automaticamente — commitá-lo!
git add .gitattributes
git commit -m "chore: configurar Git LFS para modelos e dados"

# Verificar ficheiros rastreados
git lfs ls-files`}</div>

        <h3 style={S.h3}>DVC — Data Version Control</h3>
        <p style={S.p}>
          Para projetos mais complexos, DVC (dvc.org) é uma camada por cima do Git especificamente
          para ML: versiona datasets e modelos em storage externo (S3, GCS, Azure), rastreia pipelines
          de treino, e permite reproduzir experimentos com um comando.
        </p>
        <div style={S.code}>{`# Conceito básico do DVC
dvc init
dvc add data/train.csv          # cria data/train.csv.dvc
git add data/train.csv.dvc
git commit -m "data: dataset de treino v1"

dvc push                         # envia dados para remote storage
dvc pull                         # recupera dados`}</div>

        <h3 style={S.h3}>Reprodutibilidade em ML com Git</h3>
        <div style={S.highlight}>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
            <li>Commita o ficheiro de dependências (<code style={{ fontFamily: 'monospace' }}>requirements.txt</code> com versões fixas)</li>
            <li>Guarda a seed de aleatoriedade nos params do experimento</li>
            <li>Usa tags Git para marcar versões de modelos: <code style={{ fontFamily: 'monospace' }}>git tag v1.2-model-rf</code></li>
            <li>Regista o hash do commit nos logs do modelo (MLflow, W&B)</li>
            <li>Mantém notebooks limpos antes de commitar (outputs cleared)</li>
          </ul>
        </div>
        <div style={S.code}>{`# Fixar dependências reproduzíveis
pip freeze > requirements.txt
# ou com poetry/conda — preservar ficheiro de lock

# Tag de versão de modelo
git tag -a v2.1.0-xgboost -m "XGBoost com tuning bayesiano, AUC=0.94"
git push origin v2.1.0-xgboost`}</div>
      </section>

      <hr style={S.divider} />

      {/* Section 10 */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Commits e Mensagens</h2>
        <p style={S.p}>
          Uma boa mensagem de commit é uma forma de comunicação com o teu eu futuro e com os teus colegas.
          O standard <strong>Conventional Commits</strong> traz estrutura e permite automatizar changelogs.
        </p>
        <div style={S.diagram}>
          <SvgCommitMsg />
        </div>
        <h3 style={S.h3}>Conventional Commits</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Prefixo</th>
              <th style={S.th}>Quando usar</th>
              <th style={S.th}>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['feat:', 'Nova funcionalidade', 'feat: adicionar modelo ensemble'],
              ['fix:', 'Correção de bug', 'fix: corrigir divisão por zero no scaler'],
              ['docs:', 'Documentação', 'docs: atualizar README com exemplos'],
              ['refactor:', 'Refactorização sem mudança de behavior', 'refactor: extrair função de pré-processamento'],
              ['test:', 'Adicionar ou corrigir testes', 'test: cobertura do pipeline de dados'],
              ['chore:', 'Tarefas de manutenção', 'chore: atualizar dependências'],
              ['perf:', 'Melhoria de performance', 'perf: vectorizar loop de features'],
              ['style:', 'Formatação (sem lógica)', 'style: aplicar black formatter'],
            ].map(([prefix, when, ex]) => (
              <tr key={prefix}>
                <td style={{ ...S.td, fontFamily: 'monospace', color: color, fontWeight: 700 }}>{prefix}</td>
                <td style={S.td}>{when}</td>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.8rem' }}>{ex}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Commits Atómicos</h3>
        <p style={S.p}>
          Um commit deve representar uma única mudança lógica e coesa. Evita commits com mensagens como
          {' "'}várias alterações{'"'} ou {' "'}WIP{'"'} no histórico final.
          Se fizeste muitas mudanças, usa {' '}
          <code style={{ fontFamily: 'monospace', background: 'var(--bg-secondary)', padding: '0.1rem 0.4rem', borderRadius: 4 }}>git add -p</code>
          {' '}para commitar por hunks individuais.
        </p>

        <h3 style={S.h3}>git bisect — Encontrar o Bug</h3>
        <div style={S.code}>{`# Iniciar bisect
git bisect start
git bisect bad                    # versão atual tem o bug
git bisect good v1.0.0            # esta versão estava ok

# Git faz checkout de commits intermédios
# Testas e dizes se tem bug ou não
git bisect bad
git bisect good

# Git encontra automaticamente o commit que introduziu o bug
# Terminar
git bisect reset`}</div>
      </section>

      <hr style={S.divider} />

      {/* Section 11 */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Workflows Avançados</h2>
        <h3 style={S.h3}>GitFlow</h3>
        <p style={S.p}>
          GitFlow é um modelo de branching formal com papéis bem definidos para cada tipo de branch.
          É útil para projetos com releases planeadas e equipas grandes.
        </p>
        <div style={S.diagram}>
          <SvgGitFlow />
        </div>
        <p style={S.p}>
          <strong>main</strong> — código em produção (tags de versão). <strong>develop</strong> — integração contínua.
          <strong> feature/*</strong> — desenvolvimento de funcionalidades. <strong>release/*</strong> — preparação de release.
          <strong> hotfix/*</strong> — correções urgentes em produção.
        </p>
        <p style={S.p}>
          Para a maioria dos projetos de data science, o <strong>GitHub Flow</strong> (mais simples) é suficiente:
          apenas main + feature branches com PRs.
        </p>

        <h3 style={S.h3}>Cherry-pick, Revert e Reset</h3>
        <div style={S.code}>{`# Aplicar um commit específico de outro branch
git cherry-pick a1b2c3d

# Desfazer um commit criando um novo commit (seguro)
git revert HEAD
git revert a1b2c3d

# Mover HEAD (CUIDADO com --hard em commits partilhados)
git reset HEAD~1          # --mixed: mantém alterações no working dir
git reset --soft HEAD~1   # mantém na staging area também
git reset --hard HEAD~1   # descarta TUDO (perigoso!)`}</div>

        <h3 style={S.h3}>Rebase Interativo</h3>
        <p style={S.p}>
          O rebase interativo permite reorganizar, juntar, dividir ou editar commits antes de partilhar.
          É uma ferramenta poderosa para manter um histórico limpo.
        </p>
        <div style={S.code}>{`# Rebase interativo dos últimos 3 commits
git rebase -i HEAD~3

# No editor aparecem os commits com opções:
# pick   — manter como está
# reword — alterar mensagem
# edit   — pausar para alterar commit
# squash — juntar com o commit anterior
# fixup  — juntar, descartar mensagem
# drop   — eliminar commit

# Exemplo: juntar 3 commits WIP num único commit limpo
# pick a1b2c3 feat: estrutura base do modelo
# squash d4e5f6 wip: adicionar validação
# squash g7h8i9 wip: corrigir bug
# -> resultado: 1 commit com mensagem editada`}</div>

        <div style={S.note}>
          Nunca faças rebase interativo de commits que já enviaste para um remote partilhado.
          Isso reescreve os SHAs e causa conflitos para todos os colaboradores.
        </div>
      </section>

      <hr style={S.divider} />

      {/* Section 12 */}
      

    </div>
  );
}
