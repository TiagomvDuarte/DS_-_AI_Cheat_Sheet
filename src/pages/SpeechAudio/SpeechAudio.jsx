import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'aud1', num: '01', title: 'Fundamentos de Audio & Sinal', subtitle: 'Waveforms, espectrogramas, Fourier, Mel filterbanks, MFCC e pré-processamento', topics: ['Waveforms', 'Espectrogramas', 'Mel / MFCC', 'Fourier'], path: '/speech-audio/lecture1', color: '#f97316' },
  { id: 'aud2', num: '02', title: 'Automatic Speech Recognition', subtitle: 'CTC, Whisper, wav2vec 2.0, conformer, beam search e fine-tuning multilíngue', topics: ['Whisper', 'wav2vec 2.0', 'CTC', 'Beam Search'], path: '/speech-audio/lecture2', color: '#f97316' },
  { id: 'aud3', num: '03', title: 'Text-to-Speech & Síntese de Voz', subtitle: 'Tacotron 2, VITS, VALL-E, flow matching, vocoders e prosódia', topics: ['Tacotron 2', 'VITS', 'VALL-E', 'Vocoders'], path: '/speech-audio/lecture3', color: '#f97316' },
  { id: 'aud4', num: '04', title: 'Speaker Recognition & Diarization', subtitle: 'Speaker embeddings, x-vectors, ECAPA-TDNN, pyannote e who-spoke-when', topics: ['x-vectors', 'ECAPA-TDNN', 'pyannote', 'Diarization'], path: '/speech-audio/lecture4', color: '#f97316' },
  { id: 'aud5', num: '05', title: 'Music & Audio Generation', subtitle: 'AudioCraft, MusicGen, AudioLDM, EnCodec, sound effects e diffusion para audio', topics: ['MusicGen', 'AudioLDM', 'EnCodec', 'Diffusion Audio'], path: '/speech-audio/lecture5', color: '#f97316' },
  { id: 'aud6', num: '06', title: 'Audio Classification & Sound Events', subtitle: 'Environmental sound, AudioSet, PANNs, AST, sound event detection e tagging', topics: ['AudioSet', 'PANNs', 'AST', 'Sound Events'], path: '/speech-audio/lecture6', color: '#f97316' },
  { id: 'aud7', num: '07', title: 'Speech Translation & Multilingue', subtitle: 'SeamlessM4T, Whisper multilíngue, S2ST, low-resource ASR e code-switching', topics: ['SeamlessM4T', 'S2ST', 'Low-resource', 'Code-switching'], path: '/speech-audio/lecture7', color: '#f97316' },
  { id: 'aud8', num: '08', title: 'Voice Cloning, Deepfakes & Ética', subtitle: 'Voice cloning com poucos dados, detecção de deepfakes de voz, ASVspoof e regulação', topics: ['Voice Cloning', 'Deepfake Voz', 'ASVspoof', 'Regulação'], path: '/speech-audio/lecture8', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function SpeechAudio() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>SPEECH & AUDIO AI</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Speech & Audio AI</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Processamento de sinal, reconhecimento de fala, síntese de voz, diarização, geração de música, classificação de audio e tradução de fala — da teoria ao deployment de modelos de audio modernos.</p>
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
