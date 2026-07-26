import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Brain, MessageSquare, Eye, Database, BarChart3, Network, PieChart,
  Settings, Zap, ArrowRight, GitBranch, Layers, FlaskConical, Cpu,
  Server, Code2, BookOpen, Calculator,
  ChevronRight, Bot, Cloud, Pickaxe, Scale,
  CircuitBoard, Grid3x3, Binary
} from 'lucide-react';
import { modules as laModules } from '../LinAlg/LinAlg.jsx';
import { modules as calcModules } from '../Calculus/Calculus.jsx';
import { modules as stModules } from '../Statistics/Statistics.jsx';
import { modules as pfdsModules } from '../PfDS/PfDS.jsx';
import { modules as mlModules } from '../ML/ML.jsx';
import { modules as dlModules } from '../DL/DL.jsx';
import { modules as rlModules } from '../RL/RL.jsx';
import { modules as nelModules } from '../NEL/NEL.jsx';
import { modules as cioModules } from '../CIO/CIO.jsx';
import { modules as dmModules } from '../DM/DM.jsx';
import { modules as mlopsModules } from '../MLOps/MLOps.jsx';
import { modules as nlpModules } from '../NLP/NLP.jsx';
import { modules as cvModules } from '../CV/CV.jsx';
import { modules as llmModules } from '../LLM/LLM.jsx';
import { modules as xaiModules } from '../XAI/XAI.jsx';
import { modules as dvModules } from '../DV/DV.jsx';
import { modules as bdaModules } from '../BigDataAnalytics/BigDataAnalytics.jsx';
import { modules as recModules } from '../RecommenderSystems/RecommenderSystems.jsx';
import { modules as cbdModules } from '../CloudBigData/CloudBigData.jsx';
import { modules as bdmModules } from '../BigData/BigDataMgmt.jsx';
import { modules as rdbModules } from '../RelDB/RelDB.jsx';
import { modules as parModules } from '../Parallel/Parallel.jsx';
import { modules as ethModules } from '../AIEthics/AIEthics.jsx';
import { modules as edgeModules } from '../EdgeAI/EdgeAI.jsx';
import { modules as logModules } from '../Logic/Logic.jsx';
import { modules as audModules } from '../SpeechAudio/SpeechAudio.jsx';

const CurveIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M 2 18 C 5 8, 9 5, 12 12 C 15 19, 19 16, 22 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="2" cy="18" r="1.5" fill="currentColor"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    <circle cx="22" cy="6" r="1.5" fill="currentColor"/>
  </svg>
);

const NELIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="5" cy="17" r="2" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="19" cy="17" r="2" stroke="currentColor" strokeWidth="1.8"/>
    <line x1="12" y1="7" x2="6" y2="15.3" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="12" y1="7" x2="18" y2="15.3" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="7" y1="17" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const sections = [
  {
    id: 'fundamentos',
    label: 'Fundamentos',
    color: '#4a9eed',
    description: 'A matemática e programação por baixo de tudo',
    courses: [
      { id: 'linalg',     title: 'Linear Algebra',              subtitle: 'Vectores, matrizes, SVD e eigenvalues — a base do PCA e das redes neuronais.',        icon: Grid3x3,   count: laModules.length,   path: '/linalg' },
      { id: 'calculus',   title: 'Calculus',                    subtitle: 'Derivadas, gradientes, chain rule e integrais — o cálculo do gradient descent.',       icon: Calculator, count: calcModules.length, path: '/calculus' },
      { id: 'statistics', title: 'Statistics', subtitle: 'Distribuições, testes, regressão, inferência causal e séries temporais.',               icon: BarChart3,  count: stModules.length,   path: '/statistics' },
      { id: 'pfds',  title: 'Programming', subtitle: 'Python do zero ao avançado — OOP, FP, Pandas, NumPy e boas práticas.', icon: Code2,    count: pfdsModules.length, path: '/pfds' },
      { id: 'logic',        title: 'Logic',              subtitle: 'Lógica formal, Prolog, ontologias, CSPs, raciocínio probabilístico e neuro-simbólico.',   icon: Binary, count: logModules.length,  path: '/logic' },
    ]
  },
  {
    id: 'ml-classico',
    label: 'Machine Learning',
    color: '#4a9eed',
    description: 'Aprendizagem supervisionada, não-supervisionada, profunda, por reforço e computação evolutiva',
    courses: [
      { id: 'ml',   title: 'Supervised Learning',        subtitle: 'Regressão, classificação, SVM, árvores de decisão, ensembles e avaliação de modelos.', icon: Brain,     count: mlModules.length,    path: '/ml' },
      { id: 'dm',    title: 'Unsupervised Learning', subtitle: 'Clustering, regras de associação, anomaly detection, LDA e Isolation Forest.', icon: Pickaxe, count: dmModules.length,  path: '/dm' },
      { id: 'dl',   title: 'Deep Learning',                  subtitle: 'Backprop, optimizadores, VAEs, GNNs, SSL, Federated Learning e DBNs.',           icon: Network,   count: dlModules.length,    path: '/dl' },
      { id: 'rl',   title: 'Reinforcement Learning',         subtitle: 'MDP, Q-Learning, DQN, Policy Gradient e Actor-Critic.',                         icon: GitBranch, count: rlModules.length,    path: '/rl' },
      { id: 'cio',   title: 'Computational Intelligence for Optimization',    subtitle: 'Hill Climbing, Simulated Annealing, Algoritmos Genéticos e PSO.',                icon: CurveIcon, count: cioModules.length,   path: '/cio' },
      { id: 'nel',   title: 'Neural & Evolutionary Learning', subtitle: 'GP, GSGP, neuroevolução de pesos e topologia, NEAT e HyperNEAT.',               icon: NELIcon,   count: nelModules.length,   path: '/nel' },
    ]
  },
  {
    id: 'visao-linguagem',
    label: 'Visão & Linguagem',
    color: '#4a9eed',
    description: 'Modelos para imagem, texto e áudio',
    courses: [
      { id: 'cv',  title: 'Computer Vision',             subtitle: 'Reconhecimento de imagem, detecção de objectos, segmentação e modelos generativos.',   icon: Eye,           count: cvModules.length,  path: '/cv' },
      { id: 'nlp', title: 'Natural Language Processing', subtitle: 'Text processing, sentiment, transformers e modelos de linguagem.',                      icon: MessageSquare, count: nlpModules.length, path: '/nlp' },
      { id: 'llm', title: 'LLMs & Agents',               subtitle: 'Arquitectura de LLMs, fine-tuning, RAG, prompt engineering e sistemas multi-agente.',  icon: Bot,           count: llmModules.length, path: '/llm' },
      { id: 'speech-audio', title: 'Speech & Audio AI',    subtitle: 'ASR, TTS, síntese de voz, diarização, geração de música e deepfakes de voz.',                              icon: MessageSquare, count: audModules.length, path: '/speech-audio' },
    ]
  },
  {
    id: 'dados-engenharia',
    label: 'Dados & Engenharia',
    color: '#4a9eed',
    description: 'Visualização, análise em escala, sistemas de recomendação e bases de dados',
    courses: [
      { id: 'bigdata-mgmt',      title: 'Big Data Modelling & Management', subtitle: 'CAP theorem, NoSQL, Delta Lake, Medallion Architecture e qualidade de dados.',      icon: Database, count: bdmModules.length, path: '/bigdata-mgmt' },
      { id: 'cloud-bigdata',     title: 'Cloud & Big Data',                subtitle: 'HDFS, MapReduce, Spark, Streaming, Databricks e deployment em AWS/GCP/Azure.',    icon: Cloud,    count: cbdModules.length, path: '/cloud-bigdata' },
      { id: 'dv',                title: 'Data Visualization',  subtitle: 'Matplotlib, Seaborn, Plotly, Altair, storytelling e plataformas de BI.',           icon: PieChart,  count: dvModules.length,  path: '/dv' },
      { id: 'bigdata-analytics', title: 'Big Data Analytics',  subtitle: 'MLlib, Graph Analytics, Airflow, MLflow, dbt e semantic layer.',                   icon: BarChart3, count: bdaModules.length, path: '/bigdata-analytics' },
      { id: 'recommender',       title: 'Recommender Systems', subtitle: 'Collaborative filtering, two-tower models, sistemas híbridos e avaliação em produção.', icon: Zap,   count: recModules.length, path: '/recommender' },
      { id: 'reldb',    title: 'Relational Databases', subtitle: 'SQL avançado, indexação, transacções ACID, normalização e optimização de queries.', icon: Server, count: rdbModules.length, path: '/reldb' },
    ]
  },
  {
    id: 'mlops-producao',
    label: 'MLOps & Sistemas em Produção',
    color: '#4a9eed',
    description: 'Deployment, monitorização e computação eficiente para ML em produção',
    courses: [
      { id: 'mlops', title: 'MLOps',                         subtitle: 'Desenvolvimento, deployment, monitorização de drift e model governance.',         icon: Settings,  count: mlopsModules.length, path: '/mlops' },
      { id: 'parallel', title: 'Parallel & HPC',       subtitle: 'Threads, OpenMP, MPI, GPU computing com CUDA e frameworks distribuídos.',           icon: Cpu,    count: parModules.length, path: '/parallel' },
      { id: 'edge-ai',  title: 'Edge AI & TinyML',     subtitle: 'Inferência no dispositivo, modelos comprimidos, pruning, quantização e IoT.',         icon: CircuitBoard, count: edgeModules.length, path: '/edge-ai' },
    ]
  },
  {
    id: 'etica-governanca',
    label: 'Ética, Governança & Interpretabilidade',
    color: '#4a9eed',
    description: 'Explicabilidade, fairness, regulação e o impacto social da IA',
    courses: [
      { id: 'ai-ethics', title: 'AI Ethics & Governance',   subtitle: 'EU AI Act, bias auditing, fairness, safety & alignment e desinformação.',          icon: Scale,     count: ethModules.length,   path: '/ai-ethics' },
      { id: 'xai', title: 'Explainable AI',              subtitle: 'SHAP, LIME, feature importance, PDPs e responsible AI.',                               icon: FlaskConical,  count: xaiModules.length, path: '/xai' },
    ]
  },
];

const sectionLabelStyle = (color) => ({
  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
  background: `${color}15`, border: `1px solid ${color}40`,
  color, fontSize: '0.72rem', fontWeight: 800,
  padding: '0.2rem 0.7rem', borderRadius: 20,
  letterSpacing: '0.08em', textTransform: 'uppercase',
});

function CourseCard({ course, color, onClick }) {
  const [hovered, setHovered] = useState(false);
  const Icon = course.icon;
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: course.wide ? 'span 2' : undefined,
        background: hovered ? `${color}08` : 'var(--bg-secondary)',
        border: '1px solid var(--card-border)',
        borderTop: `3px solid ${hovered ? color : 'var(--card-border)'}`,
        borderRadius: 12,
        padding: '1.1rem 1.2rem',
        cursor: 'pointer',
        transition: 'all 0.18s ease',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? `0 6px 24px ${color}18` : 'none',
        display: 'flex', flexDirection: 'column', gap: '0.55rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
        <div style={{
          width: 36, height: 36, borderRadius: 9, flexShrink: 0,
          background: hovered ? `${color}20` : `${color}12`,
          border: `1px solid ${color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color, transition: 'all 0.18s',
        }}>
          <Icon size={18} />
        </div>
        <div style={{
          fontSize: '0.7rem', fontWeight: 700, color: hovered ? color : 'var(--text-secondary)',
          background: hovered ? `${color}15` : 'var(--bg-primary)',
          border: `1px solid ${hovered ? color + '30' : 'var(--card-border)'}`,
          padding: '0.15rem 0.55rem', borderRadius: 20, whiteSpace: 'nowrap',
          transition: 'all 0.18s',
        }}>
          {course.count} módulos
        </div>
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.25rem', lineHeight: 1.3 }}>
          {course.title}
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          {course.subtitle}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: 'auto', paddingTop: '0.25rem' }}>
        <span style={{ fontSize: '0.78rem', fontWeight: 600, color: hovered ? color : 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.2rem', transition: 'color 0.18s' }}>
          Explorar <ChevronRight size={14} />
        </span>
      </div>
    </div>
  );
}

const Dashboard = () => {
  const navigate = useNavigate();
  const totalModules = sections.reduce((acc, s) => acc + s.courses.reduce((a, c) => a + c.count, 0), 0);
  const totalCourses = sections.reduce((acc, s) => acc + s.courses.length, 0);

  return (
    <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 1.25rem 5rem' }}>


      {/* Sections */}
      {sections.map((section) => (
        <div key={section.id} style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={sectionLabelStyle(section.color)}>{section.label}</div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{section.description}</span>
            <div style={{ flex: 1, height: 1, background: 'var(--card-border)' }} />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
              {section.courses.length} cursos
            </span>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '0.85rem',
          }}>
            {section.courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                color={section.color}
                onClick={() => navigate(course.path)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
