import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  svgWrap: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1rem', margin: '1.25rem 0', overflowX: 'auto' },
};

/* ── SVG 1: Paradigmas de Programação ─────────────────────────── */
function SvgParadigmas() {
  const bx = { rx: 8, fill: 'rgba(249,115,22,0.10)', stroke: color, strokeWidth: 1.5 };
  const label = { fontSize: 11, fill: color, fontWeight: 700, textAnchor: 'middle' };
  const body  = { fontSize: 10, fill: 'var(--text-primary)', textAnchor: 'middle' };
  const arr   = { stroke: 'rgba(249,115,22,0.5)', strokeWidth: 1.5, fill: 'none', markerEnd: 'url(#arr)' };
  return (
    <svg viewBox="0 0 680 230" width="100%" style={{ display: 'block' }}>
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="rgba(249,115,22,0.6)" />
        </marker>
      </defs>

      {/* Procedural */}
      <rect x="20" y="20" width="180" height="190" rx="10" fill="rgba(249,115,22,0.04)" stroke="rgba(249,115,22,0.3)" strokeWidth={1} />
      <text x="110" y="42" style={label}>PROCEDURAL</text>
      <rect x="50" y="55" width="120" height="28" {...bx} />
      <text x="110" y="73" style={body}>1. ler_dados()</text>
      <line x1="110" y1="83" x2="110" y2="95" style={arr} />
      <rect x="50" y="95" width="120" height="28" {...bx} />
      <text x="110" y="113" style={body}>2. processar()</text>
      <line x1="110" y1="123" x2="110" y2="135" style={arr} />
      <rect x="50" y="135" width="120" height="28" {...bx} />
      <text x="110" y="153" style={body}>3. guardar()</text>
      <line x1="110" y1="163" x2="110" y2="175" style={arr} />
      <rect x="50" y="175" width="120" height="28" {...bx} />
      <text x="110" y="193" style={body}>4. mostrar()</text>
      <text x="110" y="222" style={{ fontSize: 9, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>Top-down, sequencial</text>

      {/* OOP */}
      <rect x="240" y="20" width="200" height="190" rx="10" fill="rgba(249,115,22,0.04)" stroke="rgba(249,115,22,0.3)" strokeWidth={1} />
      <text x="340" y="42" style={label}>OOP</text>
      <rect x="260" y="55" width="80" height="70" rx="6" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth={1.5} />
      <text x="300" y="73" style={{ fontSize: 10, fill: color, fontWeight: 700, textAnchor: 'middle' }}>Produto</text>
      <text x="300" y="88" style={body}>- nome</text>
      <text x="300" y="100" style={body}>- preco</text>
      <text x="300" y="112" style={body}>+ vender()</text>
      <rect x="360" y="55" width="70" height="70" rx="6" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth={1.5} />
      <text x="395" y="73" style={{ fontSize: 10, fill: color, fontWeight: 700, textAnchor: 'middle' }}>Cliente</text>
      <text x="395" y="88" style={body}>- nome</text>
      <text x="395" y="100" style={body}>- email</text>
      <text x="395" y="112" style={body}>+ comprar()</text>
      <line x1="340" y1="125" x2="340" y2="155" stroke="rgba(249,115,22,0.4)" strokeWidth={1} strokeDasharray="4,2" />
      <rect x="270" y="155" width="140" height="40" rx="6" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.4)" strokeWidth={1} />
      <text x="340" y="170" style={body}>Encomenda</text>
      <text x="340" y="185" style={body}>- produto, cliente</text>
      <text x="340" y="222" style={{ fontSize: 9, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>Objetos com estado + comportamento</text>

      {/* Functional */}
      <rect x="470" y="20" width="190" height="190" rx="10" fill="rgba(249,115,22,0.04)" stroke="rgba(249,115,22,0.3)" strokeWidth={1} />
      <text x="565" y="42" style={label}>FUNCIONAL</text>
      <rect x="490" y="55" width="150" height="28" {...bx} />
      <text x="565" y="68" style={body}>dados = [1, 2, 3, 4]</text>
      <text x="565" y="79" style={body}>(imutável)</text>
      <line x1="565" y1="83" x2="565" y2="95" style={arr} />
      <rect x="490" y="95" width="150" height="28" {...bx} />
      <text x="565" y="108" style={body}>map(duplicar, dados)</text>
      <text x="565" y="119" style={body}>(função pura)</text>
      <line x1="565" y1="123" x2="565" y2="135" style={arr} />
      <rect x="490" y="135" width="150" height="28" {...bx} />
      <text x="565" y="148" style={body}>filter(par, dados)</text>
      <text x="565" y="159" style={body}>(sem side effects)</text>
      <line x1="565" y1="163" x2="565" y2="175" style={arr} />
      <rect x="490" y="175" width="150" height="28" {...bx} />
      <text x="565" y="193" style={body}>reduce(somar, dados)</text>
      <text x="565" y="222" style={{ fontSize: 9, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>Funções puras, dados imutáveis</text>
    </svg>
  );
}

/* ── SVG 2: Blueprint → Instâncias ────────────────────────────── */
function SvgBlueprint() {
  const box = { fill: 'rgba(249,115,22,0.10)', stroke: color, strokeWidth: 1.5, rx: 8 };
  const inst = { fill: 'rgba(249,115,22,0.18)', stroke: color, strokeWidth: 1.5, rx: 8 };
  const t = { fontSize: 10, fill: 'var(--text-primary)', textAnchor: 'middle' };
  const h = { fontSize: 11, fill: color, fontWeight: 700, textAnchor: 'middle' };
  return (
    <svg viewBox="0 0 620 210" width="100%" style={{ display: 'block', margin: '0 auto' }}>
      <defs>
        <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
      </defs>
      {/* Blueprint */}
      <rect x="20" y="30" width="160" height="140" {...box} />
      <rect x="20" y="30" width="160" height="28" rx="8" fill={color} />
      <text x="100" y="49" style={{ fontSize: 12, fill: '#fff', fontWeight: 800, textAnchor: 'middle' }}>class Aluno</text>
      <text x="100" y="80" style={h}>BLUEPRINT</text>
      <text x="100" y="98" style={t}>nome: str</text>
      <text x="100" y="112" style={t}>numero: int</text>
      <text x="100" y="126" style={t}>notas: list</text>
      <text x="100" y="144" style={{ ...t, fill: color }}>media() → float</text>
      <text x="100" y="158" style={{ ...t, fill: color }}>adicionar_nota()</text>

      {/* Arrows */}
      <line x1="185" y1="80" x2="248" y2="60" stroke={color} strokeWidth={1.5} fill="none" markerEnd="url(#arr2)" />
      <line x1="185" y1="100" x2="248" y2="130" stroke={color} strokeWidth={1.5} fill="none" markerEnd="url(#arr2)" />

      {/* Instance 1 */}
      <rect x="250" y="20" width="160" height="90" {...inst} />
      <text x="330" y="40" style={{ ...h }}>a1 = Aluno(...)</text>
      <text x="330" y="58" style={t}>nome = "Ana"</text>
      <text x="330" y="72" style={t}>numero = 20241001</text>
      <text x="330" y="86" style={t}>notas = [16, 18]</text>
      <text x="330" y="102" style={{ fontSize: 9, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>instância 1</text>

      {/* Instance 2 */}
      <rect x="250" y="115" width="160" height="90" {...inst} />
      <text x="330" y="135" style={{ ...h }}>a2 = Aluno(...)</text>
      <text x="330" y="153" style={t}>nome = "Bruno"</text>
      <text x="330" y="167" style={t}>numero = 20241002</text>
      <text x="330" y="181" style={t}>notas = [14]</text>
      <text x="330" y="197" style={{ fontSize: 9, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>instância 2</text>

      {/* Shared class attribute */}
      <rect x="440" y="60" width="160" height="55" rx="8" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.4)" strokeWidth={1} strokeDasharray="5,3" />
      <text x="520" y="80" style={{ fontSize: 10, fill: color, fontWeight: 700, textAnchor: 'middle' }}>Atributo de Classe</text>
      <text x="520" y="97" style={{ fontSize: 10, fill: 'var(--text-primary)', textAnchor: 'middle' }}>instituicao = "Nova IMS"</text>
      <text x="520" y="110" style={{ fontSize: 9, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>partilhado por todas as instâncias</text>
      <line x1="410" y1="55" x2="438" y2="75" stroke="rgba(249,115,22,0.4)" strokeWidth={1} strokeDasharray="4,2" fill="none" />
      <line x1="410" y1="155" x2="438" y2="100" stroke="rgba(249,115,22,0.4)" strokeWidth={1} strokeDasharray="4,2" fill="none" />
    </svg>
  );
}

/* ── SVG 3: Encapsulamento ─────────────────────────────────────── */
function SvgEncapsulamento() {
  const t = { fontSize: 10, fill: 'var(--text-primary)', textAnchor: 'start' };
  return (
    <svg viewBox="0 0 580 200" width="100%" style={{ display: 'block' }}>
      {/* Outer public layer */}
      <rect x="20" y="20" width="540" height="160" rx="12" fill="rgba(249,115,22,0.04)" stroke="rgba(249,115,22,0.3)" strokeWidth={1.5} strokeDasharray="6,3" />
      <text x="290" y="14" style={{ fontSize: 10, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>Interface Pública</text>

      {/* Protected layer */}
      <rect x="60" y="45" width="460" height="120" rx="10" fill="rgba(249,115,22,0.07)" stroke="rgba(249,115,22,0.4)" strokeWidth={1.5} strokeDasharray="5,3" />
      <text x="290" y="40" style={{ fontSize: 10, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>_protected (convenção)</text>

      {/* Private core */}
      <rect x="120" y="68" width="340" height="82" rx="8" fill="var(--bg-primary)" stroke={color} strokeWidth={1.5} />
      <text x="290" y="63" style={{ fontSize: 10, fill: color, fontWeight: 700, textAnchor: 'middle' }}>__private (name mangling)</text>
      <text x="140" y="90" style={t}>self.__saldo = 1000</text>
      <text x="140" y="106" style={t}>self.__pin = "1234"</text>
      <text x="140" y="122" style={{ fontSize: 10, fill: color, textAnchor: 'start' }}>@property def saldo(self): return self.__saldo</text>
      <text x="140" y="138" style={{ fontSize: 10, fill: color, textAnchor: 'start' }}>@saldo.setter def saldo(self, v): ...</text>
    </svg>
  );
}

/* ── SVG 4: Herança Tree ───────────────────────────────────────── */
function SvgHeranca() {
  const node = (x, y, label, sub) => (
    <g key={label}>
      <rect x={x - 55} y={y - 18} width={110} height={sub ? 38 : 32} rx={7} fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth={1.5} />
      <text x={x} y={y + (sub ? -2 : 5)} style={{ fontSize: 11, fill: color, fontWeight: 700, textAnchor: 'middle' }}>{label}</text>
      {sub && <text x={x} y={y + 14} style={{ fontSize: 9, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>{sub}</text>}
    </g>
  );
  const line = (x1, y1, x2, y2) => (
    <line key={`${x1}-${y1}-${x2}-${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(249,115,22,0.5)" strokeWidth={1.5} fill="none" />
  );
  return (
    <svg viewBox="0 0 600 270" width="100%" style={{ display: 'block' }}>
      {node(300, 35, 'Animal', 'falar(), mover()')}
      {line(300, 53, 160, 100)}
      {line(300, 53, 440, 100)}
      {node(160, 118, 'Mamífero', 'amamentar()')}
      {node(440, 118, 'Ave', 'voar()')}
      {line(160, 136, 80, 185)}
      {line(160, 136, 240, 185)}
      {line(440, 136, 360, 185)}
      {line(440, 136, 520, 185)}
      {node(80, 203, 'Cão', 'latir()')}
      {node(240, 203, 'Gato', 'miar()')}
      {node(360, 203, 'Águia', 'caçar()')}
      {node(520, 203, 'Pinguim', 'nadar()')}
      <text x="300" y="258" style={{ fontSize: 9, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>Hierarquia de herança — cada subclasse herda e especializa a superclasse</text>
    </svg>
  );
}

/* ── SVG 5: MRO Diamond Problem ────────────────────────────────── */
function SvgMRO() {
  const node = (x, y, label) => (
    <g key={label}>
      <rect x={x - 45} y={y - 16} width={90} height={32} rx={7} fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth={1.5} />
      <text x={x} y={y + 5} style={{ fontSize: 11, fill: color, fontWeight: 700, textAnchor: 'middle' }}>{label}</text>
    </g>
  );
  const line = (x1, y1, x2, y2) => (
    <line key={`${x1}${y1}${x2}${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(249,115,22,0.5)" strokeWidth={1.5} fill="none" />
  );
  return (
    <svg viewBox="0 0 440 255" width="100%" style={{ display: 'block', margin: '0 auto' }}>
      {node(220, 35, 'A')}
      {line(180, 51, 120, 101)}
      {line(260, 51, 320, 101)}
      {node(120, 119, 'B')}
      {node(320, 119, 'C')}
      {line(120, 135, 220, 185)}
      {line(320, 135, 220, 185)}
      {node(220, 203, 'D')}
      <text x="220" y="14" style={{ fontSize: 9, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>object</text>
      <text x="220" y="232" style={{ fontSize: 10, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>MRO: D → B → C → A → object</text>
      <text x="220" y="248" style={{ fontSize: 10, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>C3 Linearization garante ordem consistente</text>
    </svg>
  );
}

/* ── SVG 6: Polimorfismo speak() ───────────────────────────────── */
function SvgPolimorfismo() {
  const box = { rx: 8, fill: 'rgba(249,115,22,0.10)', stroke: color, strokeWidth: 1.5 };
  const t = { fontSize: 10, textAnchor: 'middle', fill: 'var(--text-primary)' };
  return (
    <svg viewBox="0 0 580 180" width="100%" style={{ display: 'block' }}>
      <defs>
        <marker id="arrP" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill={color} />
        </marker>
      </defs>
      {/* Caller */}
      <rect x="20" y="70" width="130" height="40" {...box} />
      <text x="85" y="86" style={{ ...t, fill: color, fontWeight: 700 }}>for a in animais:</text>
      <text x="85" y="100" style={t}>a.falar()</text>
      <line x1="150" y1="90" x2="195" y2="50" stroke={color} strokeWidth={1.5} fill="none" markerEnd="url(#arrP)" />
      <line x1="150" y1="90" x2="195" y2="90" stroke={color} strokeWidth={1.5} fill="none" markerEnd="url(#arrP)" />
      <line x1="150" y1="90" x2="195" y2="130" stroke={color} strokeWidth={1.5} fill="none" markerEnd="url(#arrP)" />
      {/* Dog */}
      <rect x="200" y="20" width="120" height="60" {...box} />
      <text x="260" y="42" style={{ ...t, fill: color, fontWeight: 700 }}>Cão</text>
      <text x="260" y="58" style={t}>falar() → "Au!"</text>
      <text x="260" y="72" style={t}>mover() → correr</text>
      {/* Cat */}
      <rect x="200" y="90" width="120" height="60" {...box} />
      <text x="260" y="112" style={{ ...t, fill: color, fontWeight: 700 }}>Gato</text>
      <text x="260" y="128" style={t}>falar() → "Miau!"</text>
      <text x="260" y="142" style={t}>mover() → saltar</text>
      {/* Bird */}
      <rect x="200" y="160" width="120" height="0" style={{ display: 'none' }} />
      <rect x="200" y="160" width="120" height="0" {...box} />
      <rect x="200" y="158" width="120" height="14" style={{ display: 'none' }} />
      {/* Bird real */}
      <rect x="340" y="55" width="140" height="70" rx="8" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.3)" strokeWidth={1} />
      <text x="410" y="75" style={{ ...t, fill: color, fontWeight: 700 }}>Duck Typing</text>
      <text x="410" y="92" style={{ fontSize: 9, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>"Se tem falar(),</text>
      <text x="410" y="106" style={{ fontSize: 9, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>funciona — tipo real</text>
      <text x="410" y="120" style={{ fontSize: 9, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>não importa"</text>
      {/* Ave box */}
      <rect x="200" y="158" width="120" height="14" style={{ display: 'none' }} />
    </svg>
  );
}

/* ── SVG 7: Composição vs Herança ──────────────────────────────── */
function SvgComposicao() {
  const box = { rx: 8, fill: 'rgba(249,115,22,0.10)', stroke: color, strokeWidth: 1.5 };
  const t = { fontSize: 10, textAnchor: 'middle', fill: 'var(--text-primary)' };
  const h = { fontSize: 11, fontWeight: 700, textAnchor: 'middle', fill: color };
  return (
    <svg viewBox="0 0 620 230" width="100%" style={{ display: 'block' }}>
      {/* Composição */}
      <text x="155" y="18" style={{ ...h, fontSize: 12 }}>HAS-A (Composição)</text>
      <rect x="80" y="30" width="150" height="60" {...box} />
      <text x="155" y="52" style={h}>Carro</text>
      <text x="155" y="68" style={t}>self.motor = Motor()</text>
      <text x="155" y="82" style={t}>self.rodas = Roda()</text>
      <line x1="155" y1="90" x2="155" y2="118" stroke="rgba(249,115,22,0.5)" strokeWidth={2} fill="none" />
      <text x="160" y="108" style={{ fontSize: 9, fill: color }}>tem um</text>
      <rect x="80" y="120" width="150" height="60" {...box} />
      <text x="155" y="142" style={h}>Motor</text>
      <text x="155" y="158" style={t}>cilindros: int</text>
      <text x="155" y="172" style={t}>ligar(), desligar()</text>
      <text x="155" y="205" style={{ fontSize: 9, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>Independentes — substituíveis</text>

      {/* Herança */}
      <text x="465" y="18" style={{ ...h, fontSize: 12 }}>IS-A (Herança)</text>
      <rect x="390" y="30" width="150" height="50" {...box} />
      <text x="465" y="52" style={h}>Carro</text>
      <text x="465" y="66" style={t}>acelerar(), travar()</text>
      <line x1="465" y1="80" x2="465" y2="110" stroke="rgba(249,115,22,0.5)" strokeWidth={2} fill="none" />
      <text x="475" y="100" style={{ fontSize: 9, fill: color }}>é um</text>
      <rect x="390" y="110" width="150" height="60" {...box} />
      <text x="465" y="132" style={h}>CarroElétrico</text>
      <text x="465" y="148" style={t}>bateria: int</text>
      <text x="465" y="162" style={t}>carregar(), alcance()</text>
      <text x="465" y="205" style={{ fontSize: 9, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>Herda tudo — acoplamento forte</text>

      {/* Separator */}
      <line x1="305" y1="15" x2="305" y2="215" stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="5,3" fill="none" />
    </svg>
  );
}

/* ── SVG 8: Design Patterns ────────────────────────────────────── */
function SvgPatterns() {
  const box = { rx: 8, fill: 'rgba(249,115,22,0.10)', stroke: color, strokeWidth: 1.5 };
  const t = { fontSize: 9, fill: 'var(--text-primary)', textAnchor: 'middle' };
  const h = { fontSize: 10, fontWeight: 700, fill: color, textAnchor: 'middle' };
  return (
    <svg viewBox="0 0 620 220" width="100%" style={{ display: 'block' }}>
      {/* Singleton */}
      <rect x="10" y="20" width="180" height="160" rx="10" fill="rgba(249,115,22,0.04)" stroke="rgba(249,115,22,0.3)" strokeWidth={1} />
      <text x="100" y="38" style={{ ...h, fontSize: 11 }}>Singleton</text>
      <rect x="25" y="48" width="150" height="95" {...box} />
      <text x="100" y="66" style={h}>Config</text>
      <text x="100" y="82" style={t}>_instance = None</text>
      <text x="100" y="96" style={t}>@classmethod</text>
      <text x="100" y="110" style={t}>def get(cls):</text>
      <text x="100" y="124" style={t}>if not cls._instance:</text>
      <text x="100" y="138" style={t}>cls._instance = cls()</text>
      <text x="100" y="195" style={{ fontSize: 9, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>Uma só instância global</text>

      {/* Factory */}
      <rect x="215" y="20" width="185" height="160" rx="10" fill="rgba(249,115,22,0.04)" stroke="rgba(249,115,22,0.3)" strokeWidth={1} />
      <text x="307" y="38" style={{ ...h, fontSize: 11 }}>Factory Method</text>
      <rect x="230" y="48" width="155" height="40" {...box} />
      <text x="307" y="66" style={h}>AnimalFactory</text>
      <text x="307" y="82" style={t}>create(tipo) → Animal</text>
      <line x1="307" y1="88" x2="265" y2="116" stroke="rgba(249,115,22,0.5)" strokeWidth={1.5} fill="none" />
      <line x1="307" y1="88" x2="350" y2="116" stroke="rgba(249,115,22,0.5)" strokeWidth={1.5} fill="none" />
      <rect x="228" y="118" width="72" height="32" {...box} />
      <text x="264" y="134" style={t}>Cão()</text>
      <text x="264" y="146" style={t}>tipo=="cao"</text>
      <rect x="308" y="118" width="72" height="32" {...box} />
      <text x="344" y="134" style={t}>Gato()</text>
      <text x="344" y="146" style={t}>tipo=="gato"</text>
      <text x="307" y="195" style={{ fontSize: 9, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>Criar objetos sem especificar classe</text>

      {/* Observer */}
      <rect x="425" y="20" width="185" height="160" rx="10" fill="rgba(249,115,22,0.04)" stroke="rgba(249,115,22,0.3)" strokeWidth={1} />
      <text x="517" y="38" style={{ ...h, fontSize: 11 }}>Observer</text>
      <rect x="445" y="48" width="145" height="40" {...box} />
      <text x="517" y="66" style={h}>EventEmitter</text>
      <text x="517" y="82" style={t}>listeners = []</text>
      <line x1="517" y1="88" x2="473" y2="116" stroke="rgba(249,115,22,0.5)" strokeWidth={1.5} fill="none" />
      <line x1="517" y1="88" x2="517" y2="116" stroke="rgba(249,115,22,0.5)" strokeWidth={1.5} fill="none" />
      <line x1="517" y1="88" x2="562" y2="116" stroke="rgba(249,115,22,0.5)" strokeWidth={1.5} fill="none" />
      <rect x="438" y="118" width="55" height="30" {...box} />
      <text x="465" y="133" style={t}>Logger</text>
      <text x="465" y="145" style={t}>on_event()</text>
      <rect x="498" y="118" width="55" height="30" {...box} />
      <text x="525" y="133" style={t}>Email</text>
      <text x="525" y="145" style={t}>on_event()</text>
      <rect x="559" y="118" width="40" height="30" {...box} />
      <text x="579" y="133" style={t}>SMS</text>
      <text x="579" y="145" style={t}>on()</text>
      <text x="517" y="195" style={{ fontSize: 9, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>Notificar múltiplos ouvintes</text>
    </svg>
  );
}

/* ── SVG 9: UML Shape Hierarchy ────────────────────────────────── */
function SvgUML() {
  const box = { rx: 8, fill: 'rgba(249,115,22,0.10)', stroke: color, strokeWidth: 1.5 };
  const abs = { rx: 8, fill: 'rgba(249,115,22,0.06)', stroke: color, strokeWidth: 1.5, strokeDasharray: '5,3' };
  const t = { fontSize: 9, fill: 'var(--text-primary)', textAnchor: 'middle' };
  const h = { fontSize: 10, fontWeight: 700, fill: color, textAnchor: 'middle' };
  return (
    <svg viewBox="0 0 620 300" width="100%" style={{ display: 'block' }}>
      {/* Shape ABC */}
      <rect x="210" y="10" width="200" height="85" {...abs} />
      <rect x="210" y="10" width="200" height="24" rx="8" fill={color} />
      <text x="310" y="27" style={{ ...h, fontSize: 11, fill: '#fff'}}>Shape (ABC)</text>
      <text x="310" y="46" style={t}>+ cor: str</text>
      <text x="310" y="59" style={{ ...t, fontStyle: 'italic', fill: color }}>+ area() [abstract]</text>
      <text x="310" y="72" style={{ ...t, fontStyle: 'italic', fill: color }}>+ perimeter() [abstract]</text>
      <text x="310" y="85" style={t}>+ __str__(): str</text>

      {/* Lines to children */}
      <line x1="310" y1="95" x2="100" y2="155" stroke="rgba(249,115,22,0.5)" strokeWidth={1.5} fill="none" />
      <line x1="310" y1="95" x2="310" y2="155" stroke="rgba(249,115,22,0.5)" strokeWidth={1.5} fill="none" />
      <line x1="310" y1="95" x2="520" y2="155" stroke="rgba(249,115,22,0.5)" strokeWidth={1.5} fill="none" />

      {/* Circle */}
      <rect x="20" y="157" width="160" height="90" {...box} />
      <rect x="20" y="157" width="160" height="22" rx="8" fill={color} />
      <text x="100" y="173" style={{ ...h, fontSize: 11, fill: '#fff' }}>Circle</text>
      <text x="100" y="196" style={t}>+ radius: float</text>
      <text x="100" y="210" style={t}>+ area() = pi*r^2</text>
      <text x="100" y="224" style={t}>+ perimeter() = 2*pi*r</text>
      <text x="100" y="238" style={t}>+ scale(factor)</text>

      {/* Rectangle */}
      <rect x="230" y="157" width="160" height="90" {...box} />
      <rect x="230" y="157" width="160" height="22" rx="8" fill={color} />
      <text x="310" y="173" style={{ ...h, fontSize: 11, fill: '#fff' }}>Rectangle</text>
      <text x="310" y="196" style={t}>+ w: float, h: float</text>
      <text x="310" y="210" style={t}>+ area() = w*h</text>
      <text x="310" y="224" style={t}>+ perimeter() = 2*(w+h)</text>
      <text x="310" y="238" style={t}>+ is_square(): bool</text>

      {/* Triangle */}
      <rect x="440" y="157" width="160" height="90" {...box} />
      <rect x="440" y="157" width="160" height="22" rx="8" fill={color} />
      <text x="520" y="173" style={{ ...h, fontSize: 11, fill: '#fff' }}>Triangle</text>
      <text x="520" y="196" style={t}>+ a, b, c: float</text>
      <text x="520" y="210" style={t}>+ area() [Heron]</text>
      <text x="520" y="224" style={t}>+ perimeter() = a+b+c</text>
      <text x="520" y="238" style={t}>+ is_equilateral(): bool</text>

      <text x="310" y="285" style={{ fontSize: 9, fill: 'var(--text-secondary)', textAnchor: 'middle' }}>UML — Shape é abstracta; Circle, Rectangle, Triangle implementam area() e perimeter()</text>
    </svg>
  );
}

export default function PfDS4() {
  return (
    <div style={S.page}>
      <Link to="/pfds" style={S.back}><ArrowLeft size={16} /> Voltar a Programming for Data Science</Link>

      <span style={S.tag}>MÓDULO 04</span>
      <h1 style={S.h1}>OOP — Programação Orientada a Objectos</h1>
      <p style={S.lead}>
        A Programação Orientada a Objectos organiza código em classes que encapsulam dados
        (atributos) e comportamento (métodos). É o paradigma dominante em Python para construir
        sistemas complexos e reutilizáveis.
      </p>

      {/* ── 1. Paradigmas ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Paradigmas de Programação</h2>
        <p style={S.p}>
          Existem três grandes paradigmas de programação. O <strong>procedural</strong> descreve
          o programa como uma sequência de passos de cima para baixo. O <strong>orientado a
          objectos</strong> agrupa dados e comportamento em objectos que interagem entre si.
          O <strong>funcional</strong> baseia-se em funções puras sem estado mutável.
          Python suporta os três — boas soluções muitas vezes combinam-nos.
        </p>
        <div style={S.svgWrap}><SvgParadigmas /></div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Paradigma</th>
              <th style={S.th}>Quando usar</th>
              <th style={S.th}>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Procedural</td>
              <td style={S.td}>Scripts simples, sequência linear clara</td>
              <td style={S.td}>ETL de um ficheiro CSV</td>
            </tr>
            <tr>
              <td style={S.td}>OOP</td>
              <td style={S.td}>Sistemas com entidades com estado e ciclo de vida</td>
              <td style={S.td}>Simulador, aplicação web, jogo</td>
            </tr>
            <tr>
              <td style={S.td}>Funcional</td>
              <td style={S.td}>Transformação de dados, pipelines, paralelismo</td>
              <td style={S.td}>Pandas transformations, map/filter/reduce</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Em Data Science usa-se muito o estilo funcional para transformações de dados (Pandas,
          list comprehensions) e OOP para encapsular modelos, pipelines e simuladores.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 2. Classes e Instâncias ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Classes e Instâncias</h2>
        <p style={S.p}>
          Uma <strong>classe</strong> é um blueprint — define a estrutura e comportamento de
          futuros objectos. Uma <strong>instância</strong> é um objecto concreto criado a
          partir desse blueprint. O método especial <code>__init__</code> é o construtor,
          chamado automaticamente ao instanciar. <code>self</code> é uma referência ao
          objecto em criação.
        </p>
        <div style={S.svgWrap}><SvgBlueprint /></div>
        <div style={S.code}>{`class Aluno:
    instituicao = "Nova IMS"      # atributo de classe

    def __init__(self, nome, numero):
        self.nome   = nome        # atributo de instância
        self.numero = numero
        self.notas  = []

    def adicionar_nota(self, nota):
        self.notas.append(nota)

    def media(self):
        return sum(self.notas) / len(self.notas) if self.notas else 0

    def __repr__(self):
        return f"Aluno(nome={self.nome!r}, numero={self.numero})"

    def __str__(self):
        return f"{self.nome} (#{self.numero})"

a1 = Aluno("Ana", 20241001)
a1.adicionar_nota(16)
a1.adicionar_nota(18)
print(a1.media())          # 17.0
print(repr(a1))            # Aluno(nome='Ana', numero=20241001)
print(str(a1))             # Ana (#20241001)
print(Aluno.instituicao)   # Nova IMS`}</div>
        <div style={S.highlight}>
          <strong>__repr__ vs __str__:</strong> use <code>__repr__</code> para representações
          técnicas (debug, REPL) e <code>__str__</code> para mensagens legíveis ao utilizador.
          Quando só se define <code>__repr__</code>, o Python usa-o para ambos os contextos.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 3. Atributos ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Atributos — Instância, Classe, Classmethods e Staticmethods</h2>
        <p style={S.p}>
          <strong>Atributos de instância</strong> são únicos por objecto — definidos em
          <code>__init__</code> via <code>self.x</code>. <strong>Atributos de classe</strong>
          são partilhados por todas as instâncias — definidos ao nível da classe.
          Alterar um atributo de classe afecta todos os objectos que não o tenham sobreposto.
        </p>
        <div style={S.code}>{`class Produto:
    iva = 0.23              # atributo de classe (partilhado)
    _contador = 0           # contador de instâncias

    def __init__(self, nome, preco_base):
        self.nome       = nome         # instância
        self.preco_base = preco_base   # instância
        Produto._contador += 1

    @property
    def preco_final(self):
        return self.preco_base * (1 + Produto.iva)

    @classmethod
    def total_criados(cls):
        """Acede ao estado da classe."""
        return cls._contador

    @staticmethod
    def categoria_preco(preco):
        """Não acede a self nem a cls — pura utilidade."""
        return "caro" if preco > 100 else "barato"

p1 = Produto("Livro", 20)
p2 = Produto("Laptop", 999)
print(p1.preco_final)          # 24.6
print(Produto.total_criados()) # 2
print(Produto.categoria_preco(50))  # barato`}</div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Decorador</th>
              <th style={S.th}>Primeiro parâmetro</th>
              <th style={S.th}>Acesso a</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Método normal</td>
              <td style={S.td}>(nenhum)</td>
              <td style={S.td}><code>self</code></td>
              <td style={S.td}>instância + classe</td>
            </tr>
            <tr>
              <td style={S.td}>Classmethod</td>
              <td style={S.td}><code>@classmethod</code></td>
              <td style={S.td}><code>cls</code></td>
              <td style={S.td}>classe (não instância)</td>
            </tr>
            <tr>
              <td style={S.td}>Staticmethod</td>
              <td style={S.td}><code>@staticmethod</code></td>
              <td style={S.td}>(nenhum)</td>
              <td style={S.td}>nenhum — função namespace'd</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 4. Encapsulamento ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Encapsulamento</h2>
        <p style={S.p}>
          Encapsulamento é o princípio de esconder detalhes de implementação e expor apenas
          uma interface pública controlada. Python usa convenções de nomenclatura (não acesso
          forçado): um <code>_</code> sinaliza "interno", dois <code>__</code> activam
          name mangling (<code>_Classe__attr</code>), dificultando o acesso externo.
        </p>
        <div style={S.svgWrap}><SvgEncapsulamento /></div>
        <div style={S.code}>{`class ContaBancaria:
    def __init__(self, titular, saldo):
        self.titular  = titular      # público
        self._log     = []           # protegido (convenção)
        self.__saldo  = saldo        # privado (name mangling)

    @property
    def saldo(self):                 # getter
        return self.__saldo

    @saldo.setter
    def saldo(self, valor):          # setter com validação
        if valor < 0:
            raise ValueError("Saldo não pode ser negativo")
        self._log.append(f"saldo: {self.__saldo} → {valor}")
        self.__saldo = valor

    def depositar(self, v):
        self.saldo = self.__saldo + v  # usa o setter

c = ContaBancaria("Ana", 1000)
c.depositar(500)
print(c.saldo)        # 1500  (via property)
# c.__saldo           # AttributeError
# c._ContaBancaria__saldo  # funciona mas não se deve`}</div>
        <div style={S.note}>
          O decorator <code>@property</code> transforma um método num atributo virtual — permite
          adicionar validação e lógica sem alterar a interface pública da classe.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 5. Herança ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Herança e MRO</h2>
        <p style={S.p}>
          Herança permite que uma subclasse reutilize e especialize o comportamento de uma
          superclasse. Em Python: <code>class Filho(Pai):</code>. O método <code>super()</code>
          delega para o método da classe acima na hierarquia. Python suporta herança múltipla —
          a ordem de resolução de métodos segue o algoritmo <strong>C3 Linearization (MRO)</strong>.
        </p>
        <div style={S.svgWrap}><SvgHeranca /></div>
        <div style={S.code}>{`class Animal:
    def __init__(self, nome):
        self.nome = nome

    def falar(self):
        return "..."

    def __str__(self):
        return f"{self.__class__.__name__}({self.nome})"

class Mamifero(Animal):
    def amamentar(self):
        return f"{self.nome} amamenta."

class Cao(Mamifero):
    def falar(self):           # override
        return "Au!"

class Gato(Mamifero):
    def falar(self):
        return "Miau!"

c = Cao("Rex")
print(c.falar())               # Au!
print(c.amamentar())           # Rex amamenta.
print(isinstance(c, Animal))  # True
print(issubclass(Cao, Animal)) # True
print(Cao.__mro__)
# (<class 'Cao'>, <class 'Mamifero'>, <class 'Animal'>, <class 'object'>)`}</div>

        <p style={S.p}>
          O <strong>Problema do Diamante</strong> surge quando uma classe herda de duas classes
          que herdam da mesma base. O MRO garante que cada classe seja visitada uma só vez.
        </p>
        <div style={S.svgWrap}><SvgMRO /></div>
        <div style={S.code}>{`class A:
    def metodo(self): return "A"

class B(A):
    def metodo(self): return "B → " + super().metodo()

class C(A):
    def metodo(self): return "C → " + super().metodo()

class D(B, C):
    def metodo(self): return "D → " + super().metodo()

print(D().metodo())   # D → B → C → A
print(D.__mro__)
# D, B, C, A, object — C3 garante esta ordem`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 6. Polimorfismo e Duck Typing ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Polimorfismo e Duck Typing</h2>
        <p style={S.p}>
          <strong>Polimorfismo</strong> significa que o mesmo nome de método funciona em
          objectos de tipos diferentes. Em Python isso manifesta-se através do
          <strong> duck typing</strong>: "se anda como um pato e grasna como um pato, é um pato."
          Não é necessário declarar uma interface — basta o objecto ter o método esperado.
        </p>
        <div style={S.svgWrap}><SvgPolimorfismo /></div>
        <div style={S.code}>{`class Cao:
    def falar(self): return "Au!"

class Gato:
    def falar(self): return "Miau!"

class Peixe:
    def falar(self): return "..."

animais = [Cao(), Gato(), Peixe()]
for a in animais:
    print(a.falar())   # Au! / Miau! / ...
    # o tipo real não importa — só a presença de falar()`}</div>

        <p style={S.p}>
          Para impor contratos mais rigorosos usa-se o módulo <code>abc</code> —
          as <strong>Abstract Base Classes</strong> obrigam as subclasses a implementar métodos.
        </p>
        <div style={S.code}>{`from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self) -> float:
        """Subclasses DEVEM implementar este método."""
        ...

    @abstractmethod
    def perimeter(self) -> float: ...

    def describe(self):
        return f"Área={self.area():.2f}, Perímetro={self.perimeter():.2f}"

class Circle(Shape):
    def __init__(self, r): self.r = r
    def area(self):
        import math; return math.pi * self.r ** 2
    def perimeter(self):
        import math; return 2 * math.pi * self.r

# Shape()       # TypeError: Can't instantiate abstract class
c = Circle(5)
print(c.describe())   # Área=78.54, Perímetro=31.42`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 7. Dunder Methods ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Dunder Methods</h2>
        <p style={S.p}>
          Os métodos <em>dunder</em> (double underscore, ou "magic methods") permitem que
          as classes integrem com a sintaxe e funções built-in do Python —
          <code>len()</code>, operadores aritméticos, comparações, iteração, context managers.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Invocado por</th>
              <th style={S.th}>Uso típico</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}><code>__init__</code></td><td style={S.td}><code>Cls()</code></td><td style={S.td}>Construtor</td></tr>
            <tr><td style={S.td}><code>__str__</code></td><td style={S.td}><code>str(obj)</code>, <code>print()</code></td><td style={S.td}>Representação legível</td></tr>
            <tr><td style={S.td}><code>__repr__</code></td><td style={S.td}><code>repr(obj)</code>, REPL</td><td style={S.td}>Representação técnica / debug</td></tr>
            <tr><td style={S.td}><code>__len__</code></td><td style={S.td}><code>len(obj)</code></td><td style={S.td}>Comprimento</td></tr>
            <tr><td style={S.td}><code>__getitem__</code></td><td style={S.td}><code>obj[i]</code></td><td style={S.td}>Indexação</td></tr>
            <tr><td style={S.td}><code>__iter__</code></td><td style={S.td}><code>for x in obj</code></td><td style={S.td}>Iteração</td></tr>
            <tr><td style={S.td}><code>__add__</code></td><td style={S.td}><code>obj + other</code></td><td style={S.td}>Operador +</td></tr>
            <tr><td style={S.td}><code>__eq__</code></td><td style={S.td}><code>obj == other</code></td><td style={S.td}>Igualdade</td></tr>
            <tr><td style={S.td}><code>__lt__</code></td><td style={S.td}><code>obj {"<"} other</code></td><td style={S.td}>Comparação; habilita sort()</td></tr>
            <tr><td style={S.td}><code>__enter__ / __exit__</code></td><td style={S.td}><code>with obj:</code></td><td style={S.td}>Context manager</td></tr>
            <tr><td style={S.td}><code>__contains__</code></td><td style={S.td}><code>x in obj</code></td><td style={S.td}>Operador in</td></tr>
            <tr><td style={S.td}><code>__call__</code></td><td style={S.td}><code>obj(args)</code></td><td style={S.td}>Objecto chamável como função</td></tr>
          </tbody>
        </table>
        <div style={S.code}>{`class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __lt__(self, other):
        return abs(self) < abs(other)

    def __abs__(self):
        return (self.x**2 + self.y**2) ** 0.5

    def __len__(self):
        return 2   # dimensão

    def __iter__(self):
        yield self.x
        yield self.y

v1 = Vector(1, 2)
v2 = Vector(3, 4)
print(v1 + v2)         # Vector(4, 6)
print(len(v1))         # 2
print(list(v1))        # [1, 2]
print(sorted([v2, v1]))  # [Vector(1, 2), Vector(3, 4)]`}</div>

        <p style={S.p}>
          O <strong>context manager</strong> com <code>__enter__</code> e <code>__exit__</code>
          garante que recursos são libertados mesmo em caso de excepção.
        </p>
        <div style={S.code}>{`class Timer:
    import time as _time

    def __enter__(self):
        import time
        self._start = time.perf_counter()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        self.elapsed = time.perf_counter() - self._start
        print(f"Tempo: {self.elapsed:.4f}s")
        return False   # não suprimir excepções

with Timer():
    total = sum(range(10_000_000))
# Tempo: 0.1234s`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 8. Dataclasses ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Dataclasses</h2>
        <p style={S.p}>
          O decorator <code>@dataclass</code> (Python 3.7+) gera automaticamente
          <code>__init__</code>, <code>__repr__</code> e <code>__eq__</code> a partir das
          anotações de tipo — reduz muito o boilerplate para classes que são principalmente
          contentores de dados.
        </p>
        <div style={S.code}>{`from dataclasses import dataclass, field

@dataclass
class Ponto:
    x: float
    y: float
    z: float = 0.0          # valor por omissão

@dataclass
class Poligono:
    nome: str
    vertices: list = field(default_factory=list)   # lista mutável

    def adicionar(self, p: Ponto):
        self.vertices.append(p)

p1 = Ponto(1.0, 2.0)
p2 = Ponto(1.0, 2.0)
print(p1)           # Ponto(x=1.0, y=2.0, z=0.0)
print(p1 == p2)     # True  — __eq__ gerado`}</div>
        <div style={S.code}>{`# frozen=True → imutável (hash + seguro como chave de dict)
from dataclasses import dataclass

@dataclass(frozen=True)
class RGB:
    r: int
    g: int
    b: int

    def __post_init__(self):
        for ch in (self.r, self.g, self.b):
            if not (0 <= ch <= 255):
                raise ValueError("Canal deve estar entre 0 e 255")

azul = RGB(0, 0, 255)
paleta = {azul: "Azul Royal"}   # hashable porque frozen=True`}</div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Ferramenta</th>
              <th style={S.th}>Mutável</th>
              <th style={S.th}>Métodos custom</th>
              <th style={S.th}>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><code>@dataclass</code></td>
              <td style={S.td}>Sim (por omissão)</td>
              <td style={S.td}>Sim</td>
              <td style={S.td}>Contentores de dados com lógica</td>
            </tr>
            <tr>
              <td style={S.td}><code>namedtuple</code></td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Limitado</td>
              <td style={S.td}>Tuplos nomeados simples</td>
            </tr>
            <tr>
              <td style={S.td}>Classe normal</td>
              <td style={S.td}>Sim</td>
              <td style={S.td}>Total</td>
              <td style={S.td}>Lógica complexa, herança elaborada</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 9. Composição vs Herança ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Composição vs Herança</h2>
        <p style={S.p}>
          O princípio clássico de design é <em>"prefira composição a herança"</em>.
          <strong> Herança</strong> modela relações IS-A (um Cão É-UM Animal).
          <strong> Composição</strong> modela relações HAS-A (um Carro TEM-UM Motor).
          Composição é mais flexível — permite trocar componentes em runtime e evita
          hierarquias frágeis e profundas.
        </p>
        <div style={S.svgWrap}><SvgComposicao /></div>
        <div style={S.code}>{`# Composição — mais flexível
class Motor:
    def __init__(self, cilindros):
        self.cilindros = cilindros
    def ligar(self): return f"Motor {self.cilindros}c ligado"

class Carro:
    def __init__(self, marca, motor: Motor):
        self.marca = marca
        self.motor = motor   # HAS-A

    def arrancar(self):
        return self.motor.ligar()

m = Motor(4)
c = Carro("Toyota", m)
print(c.arrancar())   # Motor 4c ligado
# Podemos substituir o motor sem mudar Carro`}</div>
        <div style={S.code}>{`# Mixin — adicionar comportamento por composição de classes
class JSONMixin:
    def to_json(self):
        import json
        return json.dumps(self.__dict__)

class LogMixin:
    def log(self, msg):
        print(f"[{self.__class__.__name__}] {msg}")

class Utilizador(JSONMixin, LogMixin):
    def __init__(self, nome, email):
        self.nome  = nome
        self.email = email

u = Utilizador("Ana", "ana@ims.pt")
print(u.to_json())    # {"nome": "Ana", "email": "ana@ims.pt"}
u.log("criado")       # [Utilizador] criado`}</div>
        <div style={S.note}>
          Mixins são classes leves que adicionam comportamento específico sem herança profunda.
          Devem ter um propósito único e não instanciar sozinhas.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 10. Design Patterns ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Design Patterns</h2>
        <p style={S.p}>
          Design patterns são soluções reutilizáveis para problemas comuns de design de software.
          Os três mais utilizados em Python são Singleton, Factory Method e Observer.
        </p>
        <div style={S.svgWrap}><SvgPatterns /></div>

        <p style={S.p}><strong>Singleton</strong> — garante que existe apenas uma instância de uma classe.</p>
        <div style={S.code}>{`class Config:
    _instance = None

    def __new__(cls, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.__dict__.update(kwargs)
        return cls._instance

c1 = Config(debug=True, db="postgres://...")
c2 = Config()
print(c1 is c2)     # True — mesma instância
print(c2.debug)     # True`}</div>

        <p style={S.p}><strong>Factory Method</strong> — cria objectos sem especificar a classe concreta.</p>
        <div style={S.code}>{`class Animal:
    def falar(self): ...

class Cao(Animal):
    def falar(self): return "Au!"

class Gato(Animal):
    def falar(self): return "Miau!"

class AnimalFactory:
    _mapa = {"cao": Cao, "gato": Gato}

    @classmethod
    def criar(cls, tipo: str) -> Animal:
        cls_animal = cls._mapa.get(tipo.lower())
        if cls_animal is None:
            raise ValueError(f"Tipo desconhecido: {tipo}")
        return cls_animal()

a = AnimalFactory.criar("gato")
print(a.falar())   # Miau!`}</div>

        <p style={S.p}><strong>Observer</strong> — notifica múltiplos ouvintes quando o estado muda.</p>
        <div style={S.code}>{`from typing import Callable

class EventEmitter:
    def __init__(self):
        self._listeners: list[Callable] = []

    def subscribe(self, fn: Callable):
        self._listeners.append(fn)

    def emit(self, evento: str, dados=None):
        for fn in self._listeners:
            fn(evento, dados)

emitter = EventEmitter()
emitter.subscribe(lambda e, d: print(f"[LOG] {e}: {d}"))
emitter.subscribe(lambda e, d: print(f"[EMAIL] Notificação: {e}"))

emitter.emit("compra", {"produto": "Livro", "valor": 20})
# [LOG] compra: {'produto': 'Livro', 'valor': 20}
# [EMAIL] Notificação: compra`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 11. Síntese ── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Síntese — Hierarquia Shape Completa</h2>
        <p style={S.p}>
          O diagrama abaixo mostra uma hierarquia UML completa: a classe abstracta
          <code>Shape</code> define o contrato; <code>Circle</code>, <code>Rectangle</code> e
          <code>Triangle</code> implementam-no. Cada subclasse adiciona atributos e métodos
          próprios sem alterar a interface.
        </p>
        <div style={S.svgWrap}><SvgUML /></div>
        <div style={S.code}>{`import math
from abc import ABC, abstractmethod
from dataclasses import dataclass

class Shape(ABC):
    def __init__(self, cor="azul"):
        self.cor = cor

    @abstractmethod
    def area(self) -> float: ...

    @abstractmethod
    def perimeter(self) -> float: ...

    def __str__(self):
        return (f"{self.__class__.__name__} | cor={self.cor} | "
                f"área={self.area():.2f} | perímetro={self.perimeter():.2f}")

@dataclass
class Circle(Shape):
    radius: float
    cor: str = "azul"
    def __post_init__(self): super().__init__(self.cor)
    def area(self): return math.pi * self.radius ** 2
    def perimeter(self): return 2 * math.pi * self.radius
    def scale(self, f): return Circle(self.radius * f, self.cor)

@dataclass
class Rectangle(Shape):
    w: float
    h: float
    cor: str = "azul"
    def __post_init__(self): super().__init__(self.cor)
    def area(self): return self.w * self.h
    def perimeter(self): return 2 * (self.w + self.h)
    def is_square(self): return self.w == self.h

@dataclass
class Triangle(Shape):
    a: float; b: float; c: float
    cor: str = "azul"
    def __post_init__(self):
        super().__init__(self.cor)
        if self.a + self.b <= self.c:
            raise ValueError("Triângulo inválido")
    def area(self):
        s = self.perimeter() / 2
        return math.sqrt(s * (s-self.a) * (s-self.b) * (s-self.c))
    def perimeter(self): return self.a + self.b + self.c
    def is_equilateral(self): return self.a == self.b == self.c

shapes: list[Shape] = [Circle(5), Rectangle(4, 6), Triangle(3, 4, 5)]
for s in shapes:
    print(s)
# Circle | cor=azul | área=78.54 | perímetro=31.42
# Rectangle | cor=azul | área=24.00 | perímetro=20.00
# Triangle | cor=azul | área=6.00 | perímetro=12.00`}</div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Conceito</th>
              <th style={S.th}>Procedural</th>
              <th style={S.th}>OOP</th>
              <th style={S.th}>Funcional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Unidade de organização</td>
              <td style={S.td}>Função</td>
              <td style={S.td}>Classe / Objecto</td>
              <td style={S.td}>Função pura</td>
            </tr>
            <tr>
              <td style={S.td}>Estado</td>
              <td style={S.td}>Variáveis globais / parâmetros</td>
              <td style={S.td}>Atributos do objecto</td>
              <td style={S.td}>Dados imutáveis passados explicitamente</td>
            </tr>
            <tr>
              <td style={S.td}>Reutilização</td>
              <td style={S.td}>Chamada de funções</td>
              <td style={S.td}>Herança, composição</td>
              <td style={S.td}>Composição de funções, higher-order</td>
            </tr>
            <tr>
              <td style={S.td}>Testabilidade</td>
              <td style={S.td}>Média (depende de estado global)</td>
              <td style={S.td}>Boa (mocking de objectos)</td>
              <td style={S.td}>Excelente (sem side effects)</td>
            </tr>
            <tr>
              <td style={S.td}>Exemplo Python</td>
              <td style={S.td}>Scripts, automação</td>
              <td style={S.td}>Django, sklearn Estimators</td>
              <td style={S.td}>Pandas pipelines, map/filter</td>
            </tr>
          </tbody>
        </table>

        <div style={S.highlight}>
          <strong>Resumo dos princípios OOP:</strong>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', lineHeight: 2 }}>
            <li><strong>Encapsulamento</strong> — esconder estado interno, expor interface controlada.</li>
            <li><strong>Herança</strong> — reutilizar e especializar; usar <code>super()</code>; cuidado com hierarquias profundas.</li>
            <li><strong>Polimorfismo</strong> — mesmo método, comportamento diferente por classe; duck typing em Python.</li>
            <li><strong>Abstracção</strong> — definir contratos com ABC; ocultar complexidade de implementação.</li>
            <li><strong>Composição</strong> — prefira HAS-A a IS-A quando possível; use Mixins para comportamento transversal.</li>
          </ul>
        </div>
      </section>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>12. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Paradigmas de Programação</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Classes e Instâncias</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Atributos — Instância, Classe, Classmethods e Staticmethods</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Encapsulamento</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Herança e MRO</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Polimorfismo e Duck Typing</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Dunder Methods</strong> — conceito central desta lecture.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
