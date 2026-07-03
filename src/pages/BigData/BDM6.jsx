import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: '#f97316', borderLeft: '3px solid #f97316', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: '3px solid #f97316', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const BlockchainDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Estrutura de Blocos Encadeados — Hashchain</p>
    <svg viewBox="0 0 480 160" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Block 1 - Genesis */}
      <rect x="10" y="30" width="120" height="100" rx="8" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="2" />
      <text x="70" y="52" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="800">Bloco 1</text>
      <text x="70" y="68" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">prev_hash: 0000</text>
      <text x="70" y="82" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">nonce: 29483</text>
      <text x="70" y="96" textAnchor="middle" fill="var(--text-primary)" fontSize="9">Tx: Alice +5 BTC</text>
      <text x="70" y="110" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">hash: 0000a3f...</text>
      <text x="70" y="124" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">timestamp</text>

      {/* Arrow */}
      <line x1="130" y1="80" x2="170" y2="80" stroke="#f97316" strokeWidth="2" markerEnd="url(#ba1)" />
      <defs><marker id="ba1" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f97316" /></marker></defs>

      {/* Block 2 */}
      <rect x="170" y="30" width="120" height="100" rx="8" fill="rgba(251,146,60,0.12)" stroke="#fb923c" strokeWidth="2" />
      <text x="230" y="52" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="800">Bloco 2</text>
      <text x="230" y="68" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">prev_hash: 0000a3f</text>
      <text x="230" y="82" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">nonce: 71920</text>
      <text x="230" y="96" textAnchor="middle" fill="var(--text-primary)" fontSize="9">Tx: Bob +2 BTC</text>
      <text x="230" y="110" textAnchor="middle" fill="#fb923c" fontSize="8" fontWeight="700">hash: 0000c1d...</text>
      <text x="230" y="124" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">timestamp</text>

      {/* Arrow */}
      <line x1="290" y1="80" x2="330" y2="80" stroke="#fb923c" strokeWidth="2" markerEnd="url(#ba2)" />
      <defs><marker id="ba2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#fb923c" /></marker></defs>

      {/* Block 3 */}
      <rect x="330" y="30" width="140" height="100" rx="8" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="2" />
      <text x="400" y="52" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="800">Bloco 3 (actual)</text>
      <text x="400" y="68" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">prev_hash: 0000c1d</text>
      <text x="400" y="82" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">nonce: 45001</text>
      <text x="400" y="96" textAnchor="middle" fill="var(--text-primary)" fontSize="9">Tx: Carol +3 BTC</text>
      <text x="400" y="110" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="700">hash: 0000e8a...</text>
      <text x="400" y="124" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">timestamp</text>

      {/* Labels */}
      <text x="70" y="148" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Genesis Block</text>
      <text x="240" y="148" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Alterar Bloco 1 invalida todos os seguintes</text>
    </svg>
    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Cada bloco contém o hash do bloco anterior — criando uma cadeia onde alterar um bloco antigo invalida todos os blocos seguintes. Não é possível reescrever o histórico sem refazer todo o trabalho computacional subsequente (Proof of Work).</p>
  </div>
);

const ConsensusMechanisms = () => {
  const [mech, setMech] = useState(0);
  const mechs = [
    {
      name: 'Proof of Work',
      subtitle: 'Bitcoin, (Ethereum até 2022)',
      cost: 'Eletricidade e hardware de mineração',
      selection: 'Corrida computacional — quem resolve primeiro o puzzle ganha',
      finality: 'Probabilística — 6 confirmações (~1 hora) para ser seguro',
      energy: 'Muito elevado — Bitcoin consome ~175 TWh/ano (comparável à Polónia)',
      decentralization: 'Dominado por grandes mining pools com hardware especializado (ASICs)',
      how: [
        'Mineiros competem para encontrar um nonce tal que hash(bloco + nonce) comece por N zeros.',
        'Cada tentativa é aleatória — requer centenas de biliões de tentativas.',
        'A longest chain rule determina qual a cadeia legítima.',
        'Alterar o passado exige refazer todo o PoW desde o bloco alterado — economicamente inviável.',
      ],
    },
    {
      name: 'Proof of Stake',
      subtitle: 'Ethereum (desde Set. 2022), Cardano, Solana',
      cost: 'Tokens bloqueados como garantia (stake)',
      selection: 'Pseudo-aleatória com probabilidade proporcional ao stake; VRFs garantem privacidade da selecção',
      finality: 'Explícita via Casper FFG — checkpoints declarados finais nunca são revertidos',
      energy: 'Muito baixo — Ethereum reduziu 99.95% ao migrar de PoW para PoS (The Merge)',
      decentralization: 'Delegated PoS pode concentrar poder nos maiores detentores de tokens',
      how: [
        'Validadores bloqueiam ("stake") tokens como garantia de bom comportamento.',
        'Um validador é selecionado pseudo-aleatoriamente para produzir o próximo bloco.',
        'Os restantes validadores votam (attestation) no bloco proposto — votos requerem assinaturas criptográficas.',
        'Slashing: validador apanhado a votar em múltiplas cadeias (double voting) perde parte ou todo o stake.',
      ],
    },
  ];
  const m = mechs[mech];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Mecanismos de Consenso — Proof of Work vs. Proof of Stake</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem' }}>
        {mechs.map((mc, i) => (
          <button key={i} onClick={() => setMech(i)} style={{ padding: '0.4rem 1.2rem', borderRadius: 20, cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem', background: mech === i ? '#f97316' : 'var(--bg-primary)', color: mech === i ? '#000' : 'var(--text-primary)', border: `1.5px solid ${mech === i ? '#f97316' : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{mc.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: '1.5px solid rgba(249,115,22,0.25)' }}>
        <div style={{ color: '#f97316', fontWeight: 700, marginBottom: '0.75rem', fontSize: '0.9rem' }}>{m.subtitle}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
          {[
            ['Mecanismo de custo', m.cost],
            ['Seleção do produtor', m.selection],
            ['Finalidade', m.finality],
            ['Consumo energético', m.energy],
          ].map(([k, v]) => (
            <div key={k} style={{ background: 'rgba(249,115,22,0.06)', borderRadius: 6, padding: '0.5rem 0.75rem' }}>
              <div style={{ fontSize: '0.72rem', color: '#f97316', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.2rem' }}>{k}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: '0.72rem', color: '#f97316', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem' }}>Como funciona</div>
        <ol style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.83rem', lineHeight: 1.8 }}>
          {m.how.map((h, i) => <li key={i}>{h}</li>)}
        </ol>
      </div>
    </div>
  );
};

const TrilemaDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>O Trilema da Blockchain — Só 2 de 3 em Simultâneo</p>
    <svg viewBox="0 0 400 260" style={{ maxWidth: '560px', height: 'auto', display: 'block', margin: '0 auto' }}>
      <polygon points="200,42 48,210 352,210" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" />
      {/* Top circle */}
      <circle cx="200" cy="42" r="40" fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="2" />
      <text x="200" y="37" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="800">Escalabilidade</text>
      <text x="200" y="51" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">tx por segundo</text>
      {/* Bottom-left circle */}
      <circle cx="48" cy="210" r="40" fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="2" />
      <text x="48" y="206" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="800">Segurança</text>
      <text x="48" y="219" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">resist. ataques</text>
      {/* Bottom-right circle */}
      <circle cx="352" cy="210" r="40" fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="2" />
      <text x="352" y="206" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="800">Descentraliz.</text>
      <text x="352" y="219" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">sem ponto controlo</text>
      {/* Center label */}
      <ellipse cx="200" cy="148" rx="52" ry="22" fill="var(--bg-secondary)" stroke="#ea580c" strokeWidth="1.5" />
      <text x="200" y="144" textAnchor="middle" fill="#ea580c" fontSize="9" fontWeight="800">Bitcoin / ETH</text>
      <text x="200" y="157" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">escolhem 2 de 3</text>
      {/* Solana label */}
      <text x="315" y="112" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Solana: Escalab.+Seg.</text>
      <text x="325" y="123" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">(menos descentralizado)</text>
    </svg>
    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Aumentar a escalabilidade tipicamente reduz a descentralização ou a segurança. ZK Rollups e sharding são tentativas de resolver o trilema sem sacrificar nenhum vértice.</p>
  </div>
);

export default function BDM6() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/bigdata-mgmt" style={S.back}><ArrowLeft size={16} /> Voltar a Big Data Mgmt</Link>
        <div style={S.tag}>Module 6</div>
        <h1 style={S.h1}>Blockchain</h1>
        <p style={S.lead}>Uma blockchain é um registo de informação imutável, ordenado e partilhado, mantido por múltiplos participantes sem qualquer autoridade central. Da estrutura de blocos e hashes criptográficos ao Proof of Work, Proof of Stake, Smart Contracts, ZK Rollups e o Trilema da Blockchain.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. O Que É uma Blockchain e Como Funciona</h2>
          <p style={S.p}>Informação é armazenada em <strong>blocos</strong>. Os blocos têm uma ordem. A informação tem uma ordem. Blocos antigos nunca são alterados — nova informação é adicionada em novos blocos. Este mecanismo chama-se <strong>hashchain</strong> e existe desde os anos 90. O que o Bitcoin adicionou foi a distribuição descentralizada.</p>
          <p style={S.p}>Um <strong>hash</strong> é para informação o que uma impressão digital é para uma pessoa. Propriedades críticas de uma função de hash criptográfica: Determinística (mesmo input = mesmo output), Tamanho fixo (qualquer input produz output do mesmo tamanho), Único (dois inputs diferentes produzem outputs diferentes), Unidirecional (impossível reconstruir o input a partir do hash), <strong>Efeito avalanche</strong> (uma pequena mudança no input produz um hash completamente diferente).</p>

          <BlockchainDiagram />

          <h3 style={S.h3}>Proof of Work — Quem Adiciona Blocos?</h3>
          <p style={S.p}>Para adicionar um bloco à cadeia, é necessário encontrar um número (<strong>nonce</strong>) que, combinado com o conteúdo do bloco, produza um hash com características específicas (ex: começar por N zeros). Isto requer tentativas computacionais em massa. A <strong>longest chain rule</strong> determina qual a cadeia legítima: a mais longa representa o maior investimento computacional acumulado.</p>
          <div style={S.note}>
            A segurança da blockchain é económica, não criptográfica em sentido estrito. Atacar a rede custa dinheiro real. Enquanto o custo de ataque superar o benefício esperado, a rede é segura. Alterar o passado exigiria refazer todo o PoW desde o bloco alterado — economicamente inviável.
          </div>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Conceito</th><th style={S.th}>O que garante</th></tr></thead>
              <tbody>
                {[
                  ['Blocos encadeados (hashchain)', 'Ordem imutável da informação'],
                  ['Hash do bloco anterior em cada bloco', 'Impossibilidade de alterar o passado sem invalidar o futuro'],
                  ['Proof of Work / nonce', 'Custo real de produzir um bloco — resistência a spam e fraude'],
                  ['Longest chain rule', 'Consenso descentralizado sobre qual a cadeia válida'],
                  ['Rede distribuída (P2P)', 'Sem ponto único de falha ou controlo'],
                ].map(([c, g]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 600 }}>{c}</td><td style={{ ...S.td, color: '#f97316' }}>{g}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Proof of Stake e Mecanismos de Consenso</h2>
          <p style={S.p}>Proof of Stake é a alternativa ao Proof of Work que não exige trabalho computacional massivo para produzir blocos. A Ethereum migrou para PoS em setembro de 2022 (<strong>The Merge</strong>), reduzindo o consumo energético em mais de 99%. Em vez de mineiros que competem com hardware, os <strong>validadores</strong> bloqueiam ("stake") tokens como garantia de bom comportamento.</p>
          <p style={S.p}>O problema do "Nothing at Stake": no PoW, minerar em dois blocos simultâneos (fork) é proibitivamente caro. No PoS, um validador poderia racionalmente apoiar ambos os lados de um fork. Solução: <strong>slashing</strong> torna este comportamento punível — apoiar dois blocos concorrentes resulta em perda de stake. O custo da desonestidade é real e imediato.</p>

          <ConsensusMechanisms />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Smart Contracts e DeFi</h2>
          <p style={S.p}>Smart contracts são programas auto-executáveis armazenados na blockchain. São o salto da blockchain como registo para a blockchain como plataforma computacional. O código é publicado na blockchain (imutável após publicação); uma transação despoleta a execução; o código executa de forma determinística em todos os nós da rede; o resultado fica registado na blockchain. Ninguém pode parar, censurar ou alterar a execução. O código é a lei.</p>

          <h3 style={S.h3}>DAOs — Organizações Autónomas Descentralizadas</h3>
          <p style={S.p}>Uma DAO é uma organização cujas regras estão codificadas em smart contracts. O DAO Code guarda ETH com segurança, monitoriza tokens de governança e gere o processo de votação. Membros votam em propostas com tokens — alterações de taxas, financiamento de projetos, novas funcionalidades.</p>
          <div style={S.note}>
            Exemplo real — Uniswap: protocolo de troca descentralizada com 10 colaboradores mas volume de transações comparável a exchanges centralizadas com milhares de funcionários. O criador não sabia programar quando fundou o projeto. O código substitui os funcionários.
          </div>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Era</th><th style={S.th}>Característica</th><th style={S.th}>Poder</th><th style={S.th}>Dados</th><th style={S.th}>Exemplos</th></tr></thead>
              <tbody>
                {[
                  ['Web 1.0', 'Read-only, descentralizado', 'Distribuído', 'Controlados pelo utilizador', 'Yahoo, MSN, Google'],
                  ['Web 2.0', 'Participativo, centralizado', 'Concentrado em plataformas', 'Controlados pela plataforma', 'Facebook, AWS, YouTube'],
                  ['Web 3.0', 'Sem intermediários, descentralizado', 'Distribuído (em teoria)', 'Controlados pelo utilizador', 'Ethereum, IPFS, Bitcoin'],
                ].map(([era, car, pod, dad, ex]) => (
                  <tr key={era}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{era}</td><td style={S.td}>{car}</td><td style={S.td}>{pod}</td><td style={S.td}>{dad}</td><td style={S.td}>{ex}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Escalabilidade — ZK Rollups e o Trilema</h2>
          <p style={S.p}>A Ethereum processa cerca de 15{'-'}30 transações por segundo. O Visa processa dezenas de milhares. Resolver esta diferença sem sacrificar segurança ou descentralização é o grande desafio técnico da blockchain — o chamado <strong>Trilema da Blockchain</strong>.</p>

          <TrilemaDiagram />

          <h3 style={S.h3}>ZK Rollups — A Solução Mais Promissora</h3>
          <p style={S.p}>Um ZK Rollup agrupa (roll up) milhares de transações fora da chain principal, executa-as, e envia apenas uma prova compacta para a chain principal. <strong>Zero Knowledge Proof:</strong> uma prova criptográfica que demonstra que uma afirmação é verdadeira sem revelar qualquer informação adicional além da veracidade da afirmação. Analogia: provar que se conhece a combinação de um cofre sem nunca revelar a combinação.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { name: 'ZK Rollups', desc: 'Verificam a validade imediatamente com zk-SNARK. Sem período de contestação. Mais seguro e final. Mais complexo de implementar computacionalmente.' },
              { name: 'Optimistic Rollups', desc: 'Assumem que as transações são válidas e esperam por um período de contestação (7 dias). Mais simples de implementar. Mais lento para finalidade.' },
            ].map(({ name, desc }) => (
              <div key={name} style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: 8, padding: '1rem' }}>
                <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.4rem' }}>{name}</div>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <h3 style={S.h3}>Roadmap da Ethereum (Vitalik Buterin)</h3>
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(249,115,22,0.15)', borderRadius: 10, padding: '1.25rem', fontSize: '0.87rem', lineHeight: 2 }}>
            {[
              { phase: 'The Merge', status: 'concluído', desc: 'Migração de PoW para PoS; retirada de mineradores; -99.95% de energia.' },
              { phase: 'The Surge', status: 'em progresso', desc: 'Objetivo de 100.000 transações por segundo via rollups; EIP-4844 e peerDAS.' },
              { phase: 'The Scourge', status: 'planeado', desc: 'Mitigação de centralização via MEV (Maximal Extractable Value) e liquid staking.' },
              { phase: 'The Verge', status: 'planeado', desc: 'Verificação de blocos simples via SNARKs; Verkle trees para provas mais compactas.' },
              { phase: 'The Purge', status: 'planeado', desc: 'Simplificação do protocolo, eliminação de dívida técnica, expiração de histórico.' },
              { phase: 'The Splurge', status: 'planeado', desc: 'Melhorias gerais ao EVM, account abstraction, deep crypto.' },
            ].map(({ phase, status, desc }) => (
              <div key={phase} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.3rem' }}>
                <span style={{ color: '#f97316', fontWeight: 700, minWidth: '110px', fontSize: '0.85rem' }}>{phase}</span>
                <span style={{ background: status === 'concluído' ? 'rgba(249,115,22,0.15)' : 'rgba(249,115,22,0.06)', border: `1px solid ${status === 'concluído' ? '#f97316' : 'rgba(249,115,22,0.2)'}`, color: '#f97316', fontSize: '0.7rem', fontWeight: 700, padding: '0.05rem 0.5rem', borderRadius: 10, whiteSpace: 'nowrap', alignSelf: 'center' }}>{status}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, lineHeight: 1.9 }}>
              <li style={{ marginBottom: '0.4rem' }}><strong>Hashchain + imutabilidade</strong> — cada bloco contém o hash do anterior; alterar um bloco invalida todos os seguintes; não é possível apagar ou corrigir registos, apenas adicionar; a segurança é económica (custo de ataque), não apenas criptográfica.</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>Proof of Work vs. Proof of Stake</strong> — PoW usa eletricidade como custo (175 TWh/ano para Bitcoin); PoS usa tokens bloqueados como garantia (slashing pune desonestidade); Ethereum migrou em 2022 com redução de 99.95% no consumo energético.</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>Smart contracts e DAOs</strong> — programas imutáveis na blockchain que executam automaticamente quando acionados; DAOs governam organizações via tokens de votação sem hierarquia central; o código substitui intermediários.</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>Trilema da blockchain</strong> — Escalabilidade, Segurança e Descentralização: nenhum sistema consegue optimizar as três simultaneamente; Bitcoin e Ethereum escolhem Segurança + Descentralização; ZK Rollups são a tentativa de escalar sem sacrificar os outros dois.</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>Quando usar blockchain</strong> — contextos de baixa confiança entre partes que precisam de coordenar sem intermediário (pagamentos internacionais, rastreabilidade de cadeias de abastecimento, identidade digital soberana); onde a confiança já existe, uma base de dados tradicional é quase sempre mais eficiente.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
