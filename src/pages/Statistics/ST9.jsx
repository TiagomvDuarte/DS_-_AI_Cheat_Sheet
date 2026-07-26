import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

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
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0' },
};

/* ─── SVG: Grid de painel balanced vs unbalanced ─── */
function PanelGridSVG() {
  const N = 4;
  const T = 5;
  const cellW = 56;
  const cellH = 36;
  const padL = 70;
  const padT = 40;
  const w = padL + T * cellW + 20;
  const h = padT + N * cellH + 20;

  // indivíduo 3 (índice 2) em falta: t=2 e t=4 (índices 1 e 3)
  const missing = new Set(['2-1', '2-3']);

  const individuals = ['i = 1', 'i = 2', 'i = 3', 'i = 4'];
  const periods = ['t=1', 't=2', 't=3', 't=4', 't=5'];

  const fills = [
    'rgba(74,158,237,0.35)',
    'rgba(74,158,237,0.35)',
    'rgba(74,158,237,0.35)',
    'rgba(74,158,237,0.35)',
  ];

  return (
    <svg width={w} height={h} style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}>
      {/* cabeçalhos de colunas */}
      {periods.map((p, j) => (
        <text
          key={j}
          x={padL + j * cellW + cellW / 2}
          y={padT - 10}
          textAnchor="middle"
          fontSize={11}
          fill="var(--text-secondary)"
          fontWeight={600}
        >
          {p}
        </text>
      ))}

      {individuals.map((ind, i) => (
        <React.Fragment key={i}>
          {/* rótulo da linha */}
          <text
            x={padL - 8}
            y={padT + i * cellH + cellH / 2 + 4}
            textAnchor="end"
            fontSize={11}
            fill="var(--text-secondary)"
            fontWeight={600}
          >
            {ind}
          </text>

          {periods.map((_, j) => {
            const key = `${i}-${j}`;
            const isMissing = missing.has(key);
            return (
              <rect
                key={j}
                x={padL + j * cellW + 2}
                y={padT + i * cellH + 2}
                width={cellW - 4}
                height={cellH - 4}
                rx={4}
                fill={isMissing ? 'var(--bg-secondary)' : fills[i]}
                stroke={isMissing ? 'var(--card-border)' : 'none'}
                strokeDasharray={isMissing ? '4 2' : undefined}
                opacity={isMissing ? 0.5 : 1}
              />
            );
          })}
        </React.Fragment>
      ))}

      {/* legenda */}
      <rect x={padL} y={padT + N * cellH + 6} width={14} height={10} rx={2} fill="rgba(74,158,237,0.35)" />
      <text x={padL + 18} y={padT + N * cellH + 15} fontSize={10} fill="var(--text-secondary)">
        Observado
      </text>
      <rect x={padL + 100} y={padT + N * cellH + 6} width={14} height={10} rx={2} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeDasharray="4 2" />
      <text x={padL + 118} y={padT + N * cellH + 15} fontSize={10} fill="var(--text-secondary)">
        Em falta (painel não-balanceado)
      </text>
    </svg>
  );
}

/* ─── SVG: Fixed Effects — linhas paralelas antes e depois da transformação within ─── */
function FixedEffectsSVG() {
  const w = 560;
  const h = 200;
  const padL = 50;
  const padR = 20;
  const padT = 20;
  const padB = 30;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  // 3 indivíduos, intercepts diferentes, mesma slope
  const T = 5;
  const slope = 18; // px por período
  const intercepts = [120, 75, 35]; // y0 em px a partir do topo
  const colorsLine = ['#4a9eed', '#4a9eed', '#4a9eed'];

  const pts = (i) =>
    Array.from({ length: T }, (_, t) => {
      const x = padL + (t / (T - 1)) * plotW;
      const y = padT + intercepts[i] - t * slope;
      return `${x},${y}`;
    }).join(' ');

  // After within: centrar em y=plotH/2
  const mean = (i) => {
    const vals = Array.from({ length: T }, (_, t) => intercepts[i] - t * slope);
    return vals.reduce((a, b) => a + b, 0) / T;
  };

  const ptsWithin = (i) => {
    const m = mean(i);
    return Array.from({ length: T }, (_, t) => {
      const x = padL + (t / (T - 1)) * plotW;
      const y = padT + plotH / 2 + (intercepts[i] - t * slope - m);
      return `${x},${y}`;
    }).join(' ');
  };

  const labels = ['i=1', 'i=2', 'i=3'];

  return (
    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      {/* Antes */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
          Dados brutos (intercepts diferentes)
        </div>
        <svg width={w / 2} height={h} style={{ display: 'block' }}>
          {/* eixos */}
          <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="var(--text-secondary)" strokeWidth={1} />
          <line x1={padL} y1={padT + plotH} x2={padL + plotW / 2 - 10} y2={padT + plotH} stroke="var(--text-secondary)" strokeWidth={1} />
          {[0, 1, 2].map((i) => (
            <polyline
              key={i}
              points={Array.from({ length: T }, (_, t) => {
                const x = padL + (t / (T - 1)) * ((plotW / 2) - 10);
                const y = padT + intercepts[i] - t * slope;
                return `${x},${y}`;
              }).join(' ')}
              fill="none"
              stroke={colorsLine[i]}
              strokeWidth={2}
              strokeLinejoin="round"
            />
          ))}
          {[0, 1, 2].map((i) => {
            const x = padL + ((plotW / 2) - 10);
            const y = padT + intercepts[i] - (T - 1) * slope;
            return (
              <text key={i} x={x + 4} y={y + 4} fontSize={10} fill={colorsLine[i]} fontWeight={700}>
                {labels[i]}
              </text>
            );
          })}
          <text x={padL + ((plotW / 2) - 10) / 2} y={h - 4} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">
            Tempo
          </text>
        </svg>
      </div>

      {/* Seta */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
        <svg width="48" height="32">
          <line x1="4" y1="16" x2="38" y2="16" stroke={color} strokeWidth="2.5" />
          <polygon points="34,10 44,16 34,22" fill={color} />
        </svg>
        <span style={{ fontSize: '0.7rem', color, fontWeight: 700, textAlign: 'center', lineHeight: 1.3 }}>within<br/>transf.</span>
      </div>

      {/* Depois */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
          Após transformação within (intercept = 0)
        </div>
        <svg width={w / 2} height={h} style={{ display: 'block' }}>
          <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="var(--text-secondary)" strokeWidth={1} />
          <line x1={padL} y1={padT + plotH / 2} x2={padL + (plotW / 2) - 10} y2={padT + plotH / 2} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="4 2" />
          <line x1={padL} y1={padT + plotH} x2={padL + (plotW / 2) - 10} y2={padT + plotH} stroke="var(--text-secondary)" strokeWidth={1} />
          {[0, 1, 2].map((i) => {
            const m = mean(i);
            return (
              <polyline
                key={i}
                points={Array.from({ length: T }, (_, t) => {
                  const x = padL + (t / (T - 1)) * ((plotW / 2) - 10);
                  const y = padT + plotH / 2 + (intercepts[i] - t * slope - m);
                  return `${x},${y}`;
                }).join(' ')}
                fill="none"
                stroke={colorsLine[i]}
                strokeWidth={2}
                strokeLinejoin="round"
              />
            );
          })}
          <text x={padL + ((plotW / 2) - 10) / 2} y={h - 4} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">
            Tempo
          </text>
        </svg>
      </div>
    </div>
  );
}

/* ─── SVG: Fluxograma de Hausman ─── */
function HausmanFlowSVG() {
  const w = 420;
  const h = 220;

  return (
    <svg width={w} height={h} style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}>
      {/* Start */}
      <rect x={145} y={10} width={130} height={36} rx={18} fill={color} />
      <text x={210} y={32} textAnchor="middle" fontSize={12} fill="#fff" fontWeight={700}>
        Teste de Hausman
      </text>

      {/* Arrow down */}
      <line x1={210} y1={46} x2={210} y2={72} stroke={color} strokeWidth={2} />
      <polygon points="205,68 215,68 210,76" fill={color} />

      {/* Decision */}
      <polygon points="210,76 310,110 210,144 110,110" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={1.5} />
      <text x={210} y={105} textAnchor="middle" fontSize={11} fill={color} fontWeight={700}>
        p-value
      </text>
      <text x={210} y={120} textAnchor="middle" fontSize={11} fill={color} fontWeight={700}>
        {'< 0.05?'}
      </text>

      {/* Sim -> FE */}
      <line x1={310} y1={110} x2={370} y2={110} stroke={color} strokeWidth={2} />
      <polygon points="366,105 376,110 366,115" fill={color} />
      <text x={335} y={104} textAnchor="middle" fontSize={10} fill={color} fontWeight={600}>
        Sim
      </text>
      <rect x={376} y={90} width={38} height={40} rx={8} fill={color} />
      <text x={395} y={108} textAnchor="middle" fontSize={12} fill="#fff" fontWeight={800}>
        FE
      </text>
      <text x={395} y={122} textAnchor="middle" fontSize={9} fill="#fff">
        (Within)
      </text>

      {/* Não -> RE */}
      <line x1={110} y1={110} x2={50} y2={110} stroke="var(--text-secondary)" strokeWidth={2} />
      <polygon points="54,105 44,110 54,115" fill="var(--text-secondary)" />
      <text x={83} y={104} textAnchor="middle" fontSize={10} fill="var(--text-secondary)" fontWeight={600}>
        Não
      </text>
      <rect x={6} y={90} width={38} height={40} rx={8} fill="var(--bg-secondary)" stroke="var(--text-secondary)" />
      <text x={25} y={108} textAnchor="middle" fontSize={12} fill="var(--text-primary)" fontWeight={800}>
        RE
      </text>
      <text x={25} y={122} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">
        (GLS)
      </text>

      {/* Legenda baixo */}
      <text x={210} y={175} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">
        FE: efeitos fixos consistentes mesmo com correlação alpha-X
      </text>
      <text x={210} y={190} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">
        RE: mais eficiente se alpha_i independente de X
      </text>
    </svg>
  );
}

/* ─── Componente principal ─── */
export default function ST9() {
  return (
    <div style={S.page}>
      {/* Voltar */}
      <Link to="/statistics" style={S.back}>
        <ArrowLeft size={16} />
        Voltar a Statistics
      </Link>

      {/* Cabeçalho */}
      <div style={S.tag}>MÓDULO 09</div>
      <h1 style={S.h1}>Dados em Painel</h1>

      <hr style={S.divider} />

      {/* ── Secção 1: Estrutura ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Estrutura dos Dados em Painel</h2>
        <p style={S.p}>
          Uma observação e indexada por dois subindices: <strong>i</strong> (indivíduo, empresa, país, etc.) e{' '}
          <strong>t</strong> (período). A variável dependente escreve-se y<sub>it</sub>, e as variáveis explicativas
          X<sub>it</sub>. O índice i vai de 1 a N e o índice t de 1 a T, pelo que o painel completo tem N × T
          observações.
        </p>
        
          <strong>Notação:</strong> <InlineMath math="y_{it}" /> — resultado do indivíduo i no período t &nbsp;|&nbsp; <InlineMath math="X_{it}" />{' '}
          — vector de regressores &nbsp;|&nbsp; <InlineMath math="\alpha_i" /> — heterogeneidade individual não observada
        

        <h3 style={S.h3}>Painel Balanceado vs Não Balanceado</h3>
        <p style={S.p}>
          Um <strong>painel balanceado</strong> tem exatamente T observações para cada indivíduo. Quando alguns períodos
          estão em falta para alguns indivíduos, temos um <strong>painel não balanceado</strong> (unbalanced). A maioria
          dos estimadores funciona com ambos, mas requer cuidados extra na estimação da variância.
        </p>

        <div style={S.diagram}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '1rem', textAlign: 'center' }}>
            Exemplo: N = 4 indivíduos, T = 5 períodos (i=3 com 2 obs. em falta)
          </div>
          <PanelGridSVG />
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Definição</th>
              <th style={S.th}>Implicação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Balanceado</td>
              <td style={S.td}>N × T observações completas</td>
              <td style={S.td}>Estimação mais simples; matrizes regulares</td>
            </tr>
            <tr>
              <td style={S.td}>Não balanceado</td>
              <td style={S.td}>Alguns (i, t) em falta</td>
              <td style={S.td}>Verificar mecanismo de missingness; usar plm com na.action</td>
            </tr>
            <tr>
              <td style={S.td}>Painel curto</td>
              <td style={S.td}>N grande, T pequeno</td>
              <td style={S.td}>Nickell bias em FE dinâmico; privilegiar GMM</td>
            </tr>
            <tr>
              <td style={S.td}>Painel longo</td>
              <td style={S.td}>T grande (T ~ N ou T &gt; N)</td>
              <td style={S.td}>Preocupações com Não estacionariedade e cointegração</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ── Secção 2: Vantagens ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Vantagens do Painel</h2>
        <p style={S.p}>
          A principal vantagem dos dados em painel face a um simples corte transversal (cross-section) ou a uma série
          temporal é a capacidade de <strong>controlar a heterogeneidade individual não observada</strong>. Cada
          indivíduo carrega características próprias — talento, cultura organizacional, localização geográfica — que Não
          variam (ou variam pouco) ao longo do tempo e que Não conseguimos medir diretamente.
        </p>

        
          <strong>Modelo geral:</strong>
          <BlockMath math="y_{it} = \alpha_i + \beta X_{it} + \varepsilon_{it}" />
          Onde <InlineMath math="\alpha_i" /> é o efeito específico do indivíduo i (Não observado) e <InlineMath math="\varepsilon_{it}" /> e o
          erro idiossincrático.
        

        <h3 style={S.h3}>Resumo das Vantagens</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Vantagem</th>
              <th style={S.th}>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Controlo de heterogeneidade</td>
              <td style={S.td}>Elimina o viés de variáveis omitidas que Não variam no tempo</td>
            </tr>
            <tr>
              <td style={S.td}>Mais observações</td>
              <td style={S.td}>N × T &gt; N; maior poder estatístico para detetar efeitos</td>
            </tr>
            <tr>
              <td style={S.td}>Dinâmicas</td>
              <td style={S.td}>Permite estudar ajustamentos ao longo do tempo para o mesmo indivíduo</td>
            </tr>
            <tr>
              <td style={S.td}>Identificação mais rica</td>
              <td style={S.td}>Separa variação within (temporal) de variação between (transversal)</td>
            </tr>
            <tr>
              <td style={S.td}>Causalidade</td>
              <td style={S.td}>Menor confundimento quando alfa_i e a principal fonte de endogeneidade</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Mesmo com dados em painel, endogeneidade por variáveis omitidas que variam no tempo persiste e requer
          instrumentos ou outras estratégias de identificação.
        </div>
      </section>

      {/* ── Secção 3: Pooled OLS ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Pooled OLS</h2>
        <p style={S.p}>
          O <strong>Pooled OLS</strong> ignora completamente a estrutura de painel: empilha todas as N × T observações
          e aplica OLS convencional. E equivalente a assumir que Não existe heterogeneidade individual, ou seja,{' '}
          &alpha;<sub>i</sub> = &alpha; para todo o i.
        </p>

        
          <strong>Estimador:</strong>
          <BlockMath math="\hat{\beta}_{POLS} = (X'X)^{-1}X'y \quad \text{(todos os } (i,t) \text{ empilhados)}" />
        

        <h3 style={S.h3}>Quando o Pooled OLS e Valido</h3>
        <p style={S.p}>
          O Pooled OLS produz estimativas consistentes apenas se &alpha;<sub>i</sub> e independente de X<sub>it</sub>.
          Se houver correlação — o caso mais comum em económica aplicada — o estimador e <strong>inconsistente</strong>{' '}
          (viés de variável omitida).
        </p>

        <h3 style={S.h3}>Cluster-Robust Standard Errors</h3>
        <p style={S.p}>
          Mesmo que o Pooled OLS seja consistente, os erros-padrão convencionais são inválidos porque os erros de
          observações do mesmo indivíduo estão correlacionados (autocorrelação intragrupo). E necessário usar{' '}
          <strong>erros-padrão robustos com cluster ao nível do indivíduo</strong>.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Situação</th>
              <th style={S.th}>Pooled OLS</th>
              <th style={S.th}>Recomendação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>alpha_i Não correlacionado com X</td>
              <td style={S.td}>Consistente</td>
              <td style={S.td}>Usar com cluster-SE; RE e mais eficiente</td>
            </tr>
            <tr>
              <td style={S.td}>alpha_i correlacionado com X</td>
              <td style={S.td}>Inconsistente</td>
              <td style={S.td}>Usar FE (within estimator)</td>
            </tr>
            <tr>
              <td style={S.td}>Painel muito curto (T=2)</td>
              <td style={S.td}>Potencialmente útil</td>
              <td style={S.td}>Considerar first-difference ou FE</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ── Secção 4: Fixed Effects ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Fixed Effects (Within Estimator)</h2>
        <p style={S.p}>
          O estimador de <strong>efeitos fixos</strong> (FE) elimina &alpha;<sub>i</sub> subtraindo a média temporal de
          cada indivíduo a todas as variáveis. A transformação <em>within</em> e:
        </p>

        <BlockMath math="\ddot{y}_{it} = y_{it} - \bar{y}_i" />
          <BlockMath math="\ddot{X}_{it} = X_{it} - \bar{X}_i" />
          <BlockMath math="\ddot{y}_{it} = \beta\,\ddot{X}_{it} + (\varepsilon_{it} - \bar{\varepsilon}_i)" />

        <p style={S.p}>
          Após a transformação, &alpha;<sub>i</sub> desaparece completamente. O estimador FE usa apenas a{' '}
          <strong>variação within</strong> — variação de cada indivíduo relativamente a si próprio ao longo do tempo.
          Variáveis que Não variam no tempo (e.g. sexo, país de origem) são eliminadas pela transformação e Não podem
          ser estimadas.
        </p>

        <div style={S.diagram}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '1rem', textAlign: 'center' }}>
            Fixed Effects: intercepts diferentes, slope comum — transformação within alinha as séries
          </div>
          <FixedEffectsSVG />
        </div>

        <h3 style={S.h3}>Propriedades do Estimador FE</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Detalhe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Consistência</td>
              <td style={S.td}>Consistente mesmo com correlação arbitrária entre alpha_i e X_it</td>
            </tr>
            <tr>
              <td style={S.td}>Eficiência</td>
              <td style={S.td}>Perde graus de liberdade (N parametros alpha estimados implicitamente)</td>
            </tr>
            <tr>
              <td style={S.td}>Variação usada</td>
              <td style={S.td}>Apenas variação temporal within-individual</td>
            </tr>
            <tr>
              <td style={S.td}>Variáveis time-invariant</td>
              <td style={S.td}>Não identificadas (colineares com alpha_i)</td>
            </tr>
            <tr>
              <td style={S.td}>Graus de liberdade</td>
              <td style={S.td}>NT - N - K (perde N por eliminar alpha_i)</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          O teste F para efeitos fixos (pFtest em R) testa H0: todos alpha_i iguais. Se rejeitarmos H0, o FE e
          preferível ao Pooled OLS.
        </div>
      </section>

      {/* ── Secção 5: Between ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Between Estimator</h2>
        <p style={S.p}>
          O <strong>estimador between</strong> trabalha exclusivamente com as médias individuais — colapsa o painel numa
          única cross-section de N observações e aplica OLS sobre as médias:
        </p>

        
          <BlockMath math="\bar{y}_i = \alpha_i + \beta\bar{X}_i + \bar{\varepsilon}_i" />
          Onde <InlineMath math="\bar{y}_i" /> e a média de y para o indivíduo i ao longo de todos os períodos.
        

        <p style={S.p}>
          O estimador between captura apenas a <strong>variação cross-sectional</strong> entre indivíduos. E
          inconsistente quando &alpha;<sub>i</sub> está correlacionado com X<sub>it</sub>, precisamente porque Não
          elimina &alpha;<sub>i</sub>. No entanto, e útil em situações onde a variação between e a relevante (e.g.,
          diferenças estruturais entre países que Não mudam ao longo do tempo) e quando se sabe que RE e consistente.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Estimador</th>
              <th style={S.th}>Variação usada</th>
              <th style={S.th}>Consistência</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Within (FE)</td>
              <td style={S.td}>Variação temporal (within)</td>
              <td style={S.td}>Sempre (sob strict exogeneidade)</td>
            </tr>
            <tr>
              <td style={S.td}>Between</td>
              <td style={S.td}>Variação cross-sectional (between)</td>
              <td style={S.td}>Só se alpha_i Não correlacionado com X</td>
            </tr>
            <tr>
              <td style={S.td}>Random Effects</td>
              <td style={S.td}>Combinação ponderada de within e between</td>
              <td style={S.td}>Só se alpha_i Não correlacionado com X</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ── Secção 6: Random Effects ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Random Effects (RE)</h2>
        <p style={S.p}>
          O modelo de <strong>efeitos aleatórios</strong> trata &alpha;<sub>i</sub> como uma variável aleatória Não
          correlacionada com os regressores:
        </p>

        <BlockMath math="\alpha_i \sim \mathrm{iid}(0,\,\sigma^2_\alpha)" />
          <BlockMath math="\mathrm{Cov}(\alpha_i, X_{it}) = 0" />
          <BlockMath math="y_{it} = \mu + \beta X_{it} + \alpha_i + \varepsilon_{it}" />

        <p style={S.p}>
          O estimador RE e um <strong>GLS (Generalized Least Squares)</strong> que usa a estrutura de correlação dos
          erros compostos u<sub>it</sub> = &alpha;<sub>i</sub> + &epsilon;<sub>it</sub>. E equivalente a uma média
          ponderada do estimador within e do estimador between:
        </p>

        
          <BlockMath math="\hat{\beta}_{RE} = \theta\,\hat{\beta}_{Within} + (1-\theta)\,\hat{\beta}_{Between}" />
          Onde <InlineMath math="\theta" /> depende do rácio de variâncias <InlineMath math="\sigma^2_\varepsilon / (\sigma^2_\varepsilon + T\sigma^2_\alpha)" />
        

        <h3 style={S.h3}>Quando Usar RE</h3>
        <p style={S.p}>
          O RE e <strong>mais eficiente</strong> que o FE quando a hipótese de Não correlação se verifica, porque
          utiliza tanto a variação within como a between. Além disso, permite estimar o efeito de variáveis
          time-invariant. Contudo, se a hipótese falhar, o estimador e <strong>inconsistente</strong>.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Critério</th>
              <th style={S.th}>FE</th>
              <th style={S.th}>RE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Consistência com Cov(alpha, X) != 0</td>
              <td style={{ ...S.td, color: '#4a9eed', fontWeight: 700 }}>Sim</td>
              <td style={{ ...S.td, color: '#4a9eed', fontWeight: 700 }}>Não</td>
            </tr>
            <tr>
              <td style={S.td}>Eficiência quando Cov(alpha, X) = 0</td>
              <td style={S.td}>Menos eficiente</td>
              <td style={{ ...S.td, color: '#4a9eed', fontWeight: 700 }}>Mais eficiente</td>
            </tr>
            <tr>
              <td style={S.td}>Variáveis time-invariant</td>
              <td style={{ ...S.td, color: '#4a9eed' }}>Não estimáveis</td>
              <td style={{ ...S.td, color: '#4a9eed' }}>Estimáveis</td>
            </tr>
            <tr>
              <td style={S.td}>Interpretação de alpha_i</td>
              <td style={S.td}>Parametros fixos desconhecidos</td>
              <td style={S.td}>Realizações de v.a. com distribuição conhecida</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ── Secção 7: Hausman ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Teste de Hausman</h2>
        <p style={S.p}>
          O <strong>teste de Hausman</strong> compara formalmente os estimadores FE e RE. Sob H<sub>0</sub> (RE
          consistente), ambos convergem para o mesmo valor; sob H<sub>1</sub>, só o FE e consistente.
        </p>

        
          <strong>Estatística de Hausman:</strong>
          <BlockMath math="H = (\hat{\beta}_{FE} - \hat{\beta}_{RE})'\left[\mathrm{Var}(\hat{\beta}_{FE}) - \mathrm{Var}(\hat{\beta}_{RE})\right]^{-1}(\hat{\beta}_{FE} - \hat{\beta}_{RE})" />
          <BlockMath math="H \sim \chi^2(K) \text{ sob } H_0" />
        

        <div style={S.diagram}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '1rem', textAlign: 'center' }}>
            Fluxograma de decisão: FE vs RE com base no teste de Hausman
          </div>
          <HausmanFlowSVG />
        </div>

        <div style={S.note}>
          O teste de Hausman pode ser robusto a heteroscedasticidade e autocorrelação usando a versão bootstrap ou com
          a estatística de Wooldridge. Em R: phtest(fe_model, re_model).
        </div>

        <h3 style={S.h3}>Interpretação Prática</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Resultado</th>
              <th style={S.th}>Inferência</th>
              <th style={S.th}>Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>p {'<'} 0.05</td>
              <td style={S.td}>FE e RE diferem significativamente</td>
              <td style={S.td}>Usar FE; RE e inconsistente</td>
            </tr>
            <tr>
              <td style={S.td}>p &gt; 0.05</td>
              <td style={S.td}>Sem diferença estatisticamente significativa</td>
              <td style={S.td}>RE e preferível (mais eficiente)</td>
            </tr>
            <tr>
              <td style={S.td}>Diferença de sinal</td>
              <td style={S.td}>Problema grave de endogeneidade</td>
              <td style={S.td}>Investigar variável instrumental</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ── Secção 8: Two-Way FE ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Two-Way Fixed Effects</h2>
        <p style={S.p}>
          O modelo de <strong>efeitos fixos a duas vias</strong> adiciona dummies temporais &lambda;<sub>t</sub> para
          controlar choques agregados comuns a todos os indivíduos no mesmo período (e.g. crises financeiras, mudanças
          legislativas, sazonalidade):
        </p>

        <BlockMath math="y_{it} = \alpha_i + \lambda_t + \beta X_{it} + \varepsilon_{it}" />

        <p style={S.p}>
          O efeito fixo individual &alpha;<sub>i</sub> controla heterogeneidade Não observada constante no tempo, e o
          efeito fixo temporal &lambda;<sub>t</sub> controla choques comuns Não observados que variam no tempo mas são
          idênticos para todos os indivíduos.
        </p>

        <h3 style={S.h3}>First Difference como Alternativa</h3>
        <p style={S.p}>
          Para paineis com apenas T = 2 períodos, o estimador de <strong>primeiras diferenças</strong> e equivalente ao
          FE within. Para T &gt; 2, os dois estimadores diferem e as suas eficiências relativas dependem da estrutura
          de autocorrelação dos erros:
        </p>

        <BlockMath math="\Delta y_{it} = y_{it} - y_{it-1}" />
          <BlockMath math="\Delta y_{it} = \beta\,\Delta X_{it} + \Delta\varepsilon_{it}" />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Característica</th>
              <th style={S.th}>Within (FE)</th>
              <th style={S.th}>First Difference</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Elimina alpha_i</td>
              <td style={S.td}>Sim (por demeaning)</td>
              <td style={S.td}>Sim (por diferenciação)</td>
            </tr>
            <tr>
              <td style={S.td}>Equivalência</td>
              <td style={S.td}>Idêntico ao FD para T=2</td>
              <td style={S.td}>Idêntico ao FE para T=2</td>
            </tr>
            <tr>
              <td style={S.td}>Eficiência com epsilon iid</td>
              <td style={{ ...S.td, fontWeight: 700 }}>FE mais eficiente</td>
              <td style={S.td}>Menos eficiente</td>
            </tr>
            <tr>
              <td style={S.td}>Eficiência com random walk</td>
              <td style={S.td}>Menos eficiente</td>
              <td style={{ ...S.td, fontWeight: 700 }}>FD mais eficiente</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ── Secção 9: Painel Dinâmico ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Painel Dinâmico</h2>
        <p style={S.p}>
          Quando a variável dependente desfasada y<sub>it-1</sub> e incluída como regressor, temos um{' '}
          <strong>modelo de painel dinâmico</strong>:
        </p>

        <BlockMath math="y_{it} = \rho\,y_{it-1} + \beta X_{it} + \alpha_i + \varepsilon_{it}" />

        <h3 style={S.h3}>Viés de Nickell</h3>
        <p style={S.p}>
          O estimador FE e inconsistente em paineis dinâmicos quando T e pequeno — o chamado <strong>viés de Nickell</strong>.
          A transformação within cria correlação entre o regressor desfasado demeaned e o erro demeaned:
        </p>

        
          <BlockMath math="\text{Viés}(FE) = -\frac{\rho + 1}{T - 1} + O(1/T^2)" />
          O viés desaparece quando <InlineMath math="T \to \infty" />, mas e grave para T pequeno (e.g. T = 3, 4, 5).
        

        <h3 style={S.h3}>Estimador Arellano-Bond (GMM-Diff)</h3>
        <p style={S.p}>
          Arellano e Bond (1991) propõem um estimador GMM que diferencia a equação para eliminar &alpha;<sub>i</sub> e
          usa níveis desfasados como instrumentos para os regressores em primeiras diferenças:
        </p>

        
          <BlockMath math="\Delta y_{it} = \rho\,\Delta y_{it-1} + \beta\,\Delta X_{it} + \Delta\varepsilon_{it}" />
          Instrumentos: <InlineMath math="y_{is}" /> para <InlineMath math="s \leq t-2" /> (e <InlineMath math="X_{is}" /> analogamente)
        

        <h3 style={S.h3}>System GMM (Blundell-Bond)</h3>
        <p style={S.p}>
          Blundell e Bond (1998) expandem o conjunto de instrumentos incluindo equações em níveis com instrumentos em
          diferenças. O <strong>System GMM</strong> e mais eficiente que o Difference GMM, especialmente quando os
          regressores são altamente persistentes.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Estimador</th>
              <th style={S.th}>Equação</th>
              <th style={S.th}>Instrumentos</th>
              <th style={S.th}>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>FE (within)</td>
              <td style={S.td}>Níveis demeaned</td>
              <td style={S.td}>—</td>
              <td style={S.td}>T grande; sem dinâmica</td>
            </tr>
            <tr>
              <td style={S.td}>AB (Diff-GMM)</td>
              <td style={S.td}>Primeiras diferenças</td>
              <td style={S.td}>Níveis desfasados</td>
              <td style={S.td}>T pequeno; painel dinâmico</td>
            </tr>
            <tr>
              <td style={S.td}>BB (System GMM)</td>
              <td style={S.td}>Diferenças + níveis</td>
              <td style={S.td}>Níveis e diferenças desfasadas</td>
              <td style={S.td}>Regressores persistentes</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          Testes de especificação no GMM: teste de Sargan/Hansen (sobreidentificação) e teste de Arellano-Bond para
          autocorrelação de segunda ordem (AR(2)) nos resíduos em diferenças.
        </div>
      </section>

      {/* ── Secção 10: Cluster-Robust e Driscoll-Kraay ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Cluster-Robust e Driscoll-Kraay Standard Errors</h2>
        <p style={S.p}>
          Em dados em painel, os erros Não são iid: observações do mesmo indivíduo ao longo do tempo estão
          correlacionadas (<strong>autocorrelação intracluster</strong>). Os erros-padrão convencionais
          subestimam a incerteza real.
        </p>

        <h3 style={S.h3}>Cluster-Robust Standard Errors</h3>
        <p style={S.p}>
          Os erros cluster-robust (Liang e Zeger, 1986) agrupam os erros ao nível do indivíduo (ou outra unidade de
          cluster) e são robustos a qualquer padrão de heteroscedasticidade e autocorrelação dentro do cluster:
        </p>

        
          <BlockMath math="\hat{V}_{\text{cluster}} = (X'X)^{-1}\hat{B}(X'X)^{-1}" />
          <BlockMath math="\hat{B} = \sum_i X_i'\hat{e}_i\hat{e}_i'X_i" />
          Onde <InlineMath math="\hat{e}_i" /> e o vector de resíduos do indivíduo i.
        

        <h3 style={S.h3}>Driscoll-Kraay Standard Errors</h3>
        <p style={S.p}>
          Os erros de <strong>Driscoll-Kraay</strong> (1998) estendem os cluster-robust para lidar adicionalmente com{' '}
          <strong>dependência cross-sectional</strong> — quando o erro de um indivíduo e correlacionado com o erro de
          outros indivíduos no mesmo período (e.g. choques espaciais, factores comuns):
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo de SE</th>
              <th style={S.th}>Corrige autocorrelação within</th>
              <th style={S.th}>Corrige dependência cross-sectional</th>
              <th style={S.th}>Pacote R</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>OLS convencional</td>
              <td style={{ ...S.td, color: '#4a9eed' }}>Não</td>
              <td style={{ ...S.td, color: '#4a9eed' }}>Não</td>
              <td style={S.td}>—</td>
            </tr>
            <tr>
              <td style={S.td}>Cluster (indivíduo)</td>
              <td style={{ ...S.td, color: '#4a9eed' }}>Sim</td>
              <td style={{ ...S.td, color: '#4a9eed' }}>Não</td>
              <td style={S.td}>plm::vcovHC, lmtest::coeftest</td>
            </tr>
            <tr>
              <td style={S.td}>Driscoll-Kraay</td>
              <td style={{ ...S.td, color: '#4a9eed' }}>Sim</td>
              <td style={{ ...S.td, color: '#4a9eed' }}>Sim</td>
              <td style={S.td}>plm::vcovSCC</td>
            </tr>
            <tr>
              <td style={S.td}>Two-way cluster</td>
              <td style={{ ...S.td, color: '#4a9eed' }}>Sim (i e t)</td>
              <td style={S.td}>Parcialmente</td>
              <td style={S.td}>multiwayvcov</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          A regra prática: se N e grande relative a T, cluster-robust ao nível do indivíduo e suficiente. Se existirem
          choques comuns (e.g. painel de países com factores globais), Driscoll-Kraay e preferível.
        </div>
      </section>

    </div>
  );
}
