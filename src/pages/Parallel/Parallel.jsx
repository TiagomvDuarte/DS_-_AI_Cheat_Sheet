import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'par1', num: '01', title: 'Fundamentos de Computação Paralela',    subtitle: 'Amdahl, Gustafson, Roofline Model, Flynn Taxonomy e Speedup',       topics: ['Lei de Amdahl — limite teórico do speedup', 'Lei de Gustafson — weak scaling', 'Roofline Model — compute vs. memory bound', 'Taxonomia de Flynn: SISD, SIMD, MISD, MIMD'], path: '/parallel/lecture1', color: '#f97316' },
  { id: 'par2', num: '02', title: 'Arquitecturas de Memória & Cache',       subtitle: 'Hierarquia de Cache, NUMA, Coerência e False Sharing',              topics: ['Hierarquia de memória: L1/L2/L3/RAM', 'Protocolo MESI — coerência de cache', 'NUMA — Non-Uniform Memory Access', 'False sharing e padding de cache lines'], path: '/parallel/lecture2', color: '#f97316' },
  { id: 'par3', num: '03', title: 'Threads, Processos & Python Paralelo',   subtitle: 'GIL, threading, multiprocessing, asyncio e Sincronização',          topics: ['Python GIL — causa e consequências', 'threading vs multiprocessing — quando usar', 'asyncio — concorrência I/O-bound', 'Race conditions, locks, semáforos, deadlock'], path: '/parallel/lecture3', color: '#f97316' },
  { id: 'par4', num: '04', title: 'OpenMP',                                 subtitle: 'Fork-Join, Pragmas, Reduction, Tasks e Scheduling',                  topics: ['Modelo fork-join — regiões paralelas', '#pragma omp parallel for, sections, tasks', 'Reduction clause — somas e produtos paralelos', 'Scheduling: static, dynamic, guided'], path: '/parallel/lecture4', color: '#f97316' },
  { id: 'par5', num: '05', title: 'MPI — Message Passing Interface',        subtitle: 'Memória Distribuída, Send/Recv, Colectivas e Topologias',            topics: ['MPI_Send/Recv — comunicação ponto-a-ponto', 'MPI_Bcast, MPI_Scatter, MPI_Gather, MPI_Reduce', 'Topologias virtuais — cartesianas e grafos', 'MPI+OpenMP — paralelismo híbrido'], path: '/parallel/lecture5', color: '#f97316' },
  { id: 'par6', num: '06', title: 'GPU Computing & CUDA',                   subtitle: 'SIMT, Kernels, Hierarquia de Memória e Optimização',                 topics: ['CPU vs GPU — throughput vs latency', 'CUDA: grids, blocos e threads', 'Memória: global, shared, registers, constant', 'Warp divergence, memory coalescing, occupancy'], path: '/parallel/lecture6', color: '#f97316' },
  { id: 'par7', num: '07', title: 'Vectorização & Numba',                   subtitle: 'SIMD, AVX, NumPy Vectorization, Numba JIT e CuPy',                  topics: ['SIMD — AVX2/AVX-512, instrução por vector', 'NumPy vectorization vs. Python loops', 'Numba @jit, @njit e @cuda.jit', 'CuPy — NumPy na GPU'], path: '/parallel/lecture7', color: '#f97316' },
  { id: 'par8', num: '08', title: 'Profiling & Frameworks Modernos',        subtitle: 'Roofline em Prática, perf, nsight, Dask, Ray e Spark',               topics: ['Profiling: cProfile, line_profiler, perf', 'NVIDIA Nsight — profiling de kernels CUDA', 'Dask, Ray e Spark — guia de decisão', 'Bottleneck identification e tuning workflow'], path: '/parallel/lecture8', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function Parallel() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>PARALLEL & HPC</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Parallel & High Performance Computing</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Da Lei de Amdahl ao CUDA — arquitecturas de memória, threads, OpenMP, MPI, GPU computing, vectorização com Numba e profiling sistemático. Como identificar bottlenecks e paralelizar código para máximo desempenho.</p>
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
