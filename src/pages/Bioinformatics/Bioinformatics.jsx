import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'bio1', num: '01', title: 'Introdução à Bioinformática', subtitle: 'Sequências biológicas, alinhamento, bases de dados NCBI/UniProt/PDB e algoritmos clássicos', topics: ['Sequências', 'NCBI / UniProt', 'BLAST', 'Alinhamento'], path: '/bioinformatics/lecture1', color: '#f97316' },
  { id: 'bio2', num: '02', title: 'Sequenciamento & Genómica', subtitle: 'NGS, Illumina, Oxford Nanopore, variant calling, GWAS e genómica de populações', topics: ['NGS / Illumina', 'Nanopore', 'Variant Calling', 'GWAS'], path: '/bioinformatics/lecture2', color: '#f97316' },
  { id: 'bio3', num: '03', title: 'ML em Sequências Biológicas', subtitle: 'CNNs em DNA, DNABERT, Nucleotide Transformer, ESM e modelos de linguagem proteica', topics: ['CNNs / DNA', 'DNABERT', 'ESM-2', 'Foundation Models'], path: '/bioinformatics/lecture3', color: '#f97316' },
  { id: 'bio4', num: '04', title: 'Estrutura de Proteínas & AlphaFold', subtitle: 'Protein folding, AlphaFold2/3, RoseTTAFold, drug design e design de proteínas', topics: ['AlphaFold2/3', 'RoseTTAFold', 'Drug Design', 'Protein Design'], path: '/bioinformatics/lecture4', color: '#f97316' },
  { id: 'bio5', num: '05', title: 'Single-cell & Multi-omics', subtitle: 'scRNA-seq, UMAP/PHATE, trajectory inference, integração multi-ómica e Seurat/Scanpy', topics: ['scRNA-seq', 'UMAP / PHATE', 'Trajectory', 'Multi-omics'], path: '/bioinformatics/lecture5', color: '#f97316' },
  { id: 'bio6', num: '06', title: 'Epigenómica & Regulação Génica', subtitle: 'ChIP-seq, ATAC-seq, metilação do DNA, redes de regulação génica e Enformer', topics: ['ChIP-seq', 'ATAC-seq', 'Metilação', 'Enformer / GRN'], path: '/bioinformatics/lecture6', color: '#f97316' },
  { id: 'bio7', num: '07', title: 'Medicina de Precisão & Farmacogenómica', subtitle: 'Medicina personalizada, predição de resposta a fármacos, oncologia computacional e CRISPR', topics: ['Medicina Personalizada', 'Drug Response', 'Oncologia', 'CRISPR / AI'], path: '/bioinformatics/lecture7', color: '#f97316' },
  { id: 'bio8', num: '08', title: 'Proteómica & Metabolómica', subtitle: 'Mass spectrometry, quantificação de proteínas, metabolómica e integração multi-ómica com ML', topics: ['LC-MS/MS', 'MaxQuant / DIA-NN', 'Metabolómica', 'Multi-omics ML'], path: '/bioinformatics/lecture8', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function Bioinformatics() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>BIOINFORMATICS</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Bioinformatics &amp; Computational Biology</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Análise computacional de sequências biológicas, genómica, machine learning aplicado a DNA e proteínas, AlphaFold e integração multi-ômica.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {modules.map(m => (
          <div key={m.id} onClick={() => navigate(m.path)}
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderLeft: `4px solid ${m.color}`, borderRadius: 12, padding: '1.25rem 1.5rem', cursor: 'pointer', transition: 'all 0.2s', display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: '1rem', alignItems: 'center' }}
            onMouseEnter={e => { e.currentTarget.style.background = `${m.color}10`; e.currentTarget.style.transform = 'translateX(4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.transform = 'translateX(0)'; }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: m.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Módulo</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: m.color, lineHeight: 1 }}>{m.num}</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{m.title}</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>{m.subtitle}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>{m.topics.map(t => <span key={t} style={topicStyle(m.color)}>{t}</span>)}</div>
            </div>
            <ArrowRight size={18} color={m.color} />
          </div>
        ))}
      </div>
    </div>
  );
}
