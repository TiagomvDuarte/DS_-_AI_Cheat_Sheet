import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#f97316';
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
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0' },
};

/* ── SVG: Feature Matrix ── */
function FeatureMatrixSVG() {
  const cols = ['y', 'lag₁', 'lag₂', 'roll₃', 'sin', 'cos'];
  const rows = ['t-5', 't-4', 't-3', 't-2', 't-1', 't'];
  const colColors = ['#f97316', '#f97316', '#f97316', '#f59e0b', '#f97316', '#f97316'];
  const cellW = 90, cellH = 36, offsetX = 55, offsetY = 48;
  const W = offsetX + cols.length * cellW + 10;
  const H = offsetY + rows.length * cellH + 30;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: 700, display: 'block', margin: '0 auto' }}>
      {cols.map((c, ci) => (
        <text key={c} x={offsetX + ci * cellW + cellW / 2} y={34} textAnchor="middle" fontSize="13" fontWeight="700" fill={colColors[ci]}>{c}</text>
      ))}
      {rows.map((r, ri) => (
        <text key={r} x={offsetX - 8} y={offsetY + ri * cellH + cellH / 2 + 4} textAnchor="end" fontSize="12" fill="var(--text-secondary)">{r}</text>
      ))}
      {rows.map((r, ri) =>
        cols.map((c, ci) => {
          const isTarget = ci === 0;
          const val = isTarget ? (0.3 + Math.sin(ri * 1.2) * 0.4).toFixed(2)
            : ci <= 2 ? (0.3 + Math.sin((ri - ci) * 1.2) * 0.4).toFixed(2)
            : ci === 3 ? (0.28 + Math.sin(ri * 1.0) * 0.35).toFixed(2)
            : ci === 4 ? Math.sin(ri * 0.9).toFixed(2)
            : Math.cos(ri * 0.9).toFixed(2);
          const bg = isTarget ? 'rgba(249,115,22,0.10)' : 'rgba(249,115,22,0.07)';
          const border = isTarget ? '#f97316' : '#e5e7eb';
          return (
            <g key={`${r}-${c}`}>
              <rect x={offsetX + ci * cellW} y={offsetY + ri * cellH} width={cellW - 3} height={cellH - 3} rx="4" fill={bg} stroke={border} strokeWidth="1" />
              <text x={offsetX + ci * cellW + cellW / 2 - 1} y={offsetY + ri * cellH + cellH / 2 + 5} textAnchor="middle" fontSize="12" fill={isTarget ? color : 'var(--text-secondary)'}>{val}</text>
            </g>
          );
        })
      )}
      <text x={W / 2} y={H - 6} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Matriz de features — cada linha é um instante temporal</text>
    </svg>
  );
}

/* ── SVG: Walk-Forward Cross-Validation ── */
function WalkForwardSVG() {
  const splits = 5;
  const totalSlots = 10;
  const startX = 40, y0 = 36, rowH = 48, slotW = 56;
  const totalW = startX + totalSlots * slotW + 10;
  const totalH = y0 + splits * rowH + 40;
  return (
    <svg viewBox={`0 0 ${totalW} ${totalH}`} style={{ width: '100%', maxWidth: 720, display: 'block', margin: '0 auto' }}>
      <text x={totalW / 2} y="18" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Walk-Forward Validation (Expanding Window)</text>
      {Array.from({ length: splits }, (_, si) => {
        const trainEnd = si + 4;
        const testSlot = si + 4;
        const rowY = y0 + si * rowH + 10;
        return (
          <g key={si}>
            <text x="22" y={rowY + 16} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">#{si + 1}</text>
            {Array.from({ length: totalSlots }, (_, slot) => {
              const x = startX + slot * slotW;
              const isTrain = slot < trainEnd;
              const isTest = slot === testSlot;
              const fill = isTrain ? '#f97316' : isTest ? '#fdba74' : 'rgba(249,115,22,0.08)';
              const strokeC = isTrain ? '#9d174d' : isTest ? '#f97316' : 'var(--text-secondary)';
              return (
                <rect key={slot} x={x + 2} y={rowY} width={slotW - 4} height={rowH - 10} rx="4" fill={fill} stroke={strokeC} strokeWidth="1" />
              );
            })}
            {si === 0 && (
              <>
                <text x={startX + slotW * 2} y={rowY + (rowH - 10) / 2 + 5} textAnchor="middle" fontSize="11" fill="#fff" fontWeight="700">Treino</text>
                <text x={startX + slotW * 4.5} y={rowY + (rowH - 10) / 2 + 5} textAnchor="middle" fontSize="11" fill={color} fontWeight="700">Teste</text>
              </>
            )}
          </g>
        );
      })}
      {/* Legenda centrada */}
      {(() => {
        const ly = y0 + splits * rowH + 18;
        const lx = totalW / 2 - 140;
        return (
          <g>
            <rect x={lx} y={ly} width={16} height={14} rx="2" fill={color} />
            <text x={lx + 20} y={ly + 11} fontSize="11" fill="var(--text-secondary)">Treino</text>
            <rect x={lx + 80} y={ly} width={16} height={14} rx="2" fill="#fdba74" stroke={color} strokeWidth="1" />
            <text x={lx + 100} y={ly + 11} fontSize="11" fill="var(--text-secondary)">Teste</text>
            <rect x={lx + 155} y={ly} width={16} height={14} rx="2" fill="rgba(249,115,22,0.08)" stroke="var(--text-secondary)" strokeWidth="1" />
            <text x={lx + 175} y={ly + 11} fontSize="11" fill="var(--text-secondary)">Futuro (não visto)</text>
          </g>
        );
      })()}
    </svg>
  );
}

/* ── SVG: Feature Importance Bar Chart ── */
function FeatureImportanceSVG() {
  const features = [
    { name: 'lag₁', val: 0.92 },
    { name: 'lag₇', val: 0.78 },
    { name: 'lag₃₀', val: 0.61 },
    { name: 'roll_mean₇', val: 0.45 },
    { name: 'month', val: 0.28 },
    { name: 'is_weekend', val: 0.17 },
  ];
  const maxW = 400, barH = 30, gap = 10, startX = 110, startY = 36;
  const H = startY + features.length * (barH + gap) + 36;
  return (
    <svg viewBox={`0 0 560 ${H}`} style={{ width: '100%', maxWidth: 660, display: 'block', margin: '0 auto' }}>
      <text x="280" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Importância de Features — XGBoost</text>
      {features.map((f, i) => {
        const y = startY + i * (barH + gap);
        const w = f.val * maxW;
        const pct = Math.round(f.val * 100);
        return (
          <g key={f.name}>
            <text x={startX - 8} y={y + barH / 2 + 4} textAnchor="end" fontSize="12" fill="var(--text-primary)">{f.name}</text>
            <rect x={startX} y={y} width={w} height={barH} rx="5" fill={color} opacity={0.85 - i * 0.08} />
            <text x={startX + w + 7} y={y + barH / 2 + 4} fontSize="11" fill="var(--text-secondary)">{pct}%</text>
          </g>
        );
      })}
      <text x="280" y={H - 8} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Importância relativa (ganho normalizado)</text>
    </svg>
  );
}

/* ── SVG: LSTM Cell ── */
function LSTMCellSVG() {
  return (
    <svg viewBox="0 0 540 300" style={{ width: '100%', maxWidth: 700, display: 'block', margin: '0 auto' }}>
      {/* Cell border */}
      <rect x="120" y="40" width="300" height="200" rx="12" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="270" y="28" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Célula LSTM</text>

      {/* Cell state line (top) */}
      <line x1="120" y1="80" x2="420" y2="80" stroke="#f97316" strokeWidth="2" strokeDasharray="4 2" />
      <text x="270" y="72" textAnchor="middle" fontSize="9" fill="#f97316">cₜ — Estado da célula (memória longa)</text>

      {/* Forget gate */}
      <rect x="145" y="110" width="50" height="36" rx="6" fill="rgba(249,115,22,0.22)" stroke="#f97316" strokeWidth="1.5" />
      <text x="170" y="132" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">σ</text>
      <text x="170" y="160" textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">forget</text>

      {/* Input gate */}
      <rect x="215" y="110" width="50" height="36" rx="6" fill="rgba(251,146,60,0.20)" stroke="#fb923c" strokeWidth="1.5" />
      <text x="240" y="132" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fb923c">σ</text>
      <text x="240" y="160" textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">input</text>

      {/* Candidate */}
      <rect x="285" y="110" width="50" height="36" rx="6" fill="rgba(245,158,11,0.20)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="310" y="132" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f59e0b">tanh</text>
      <text x="310" y="160" textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">candidato</text>

      {/* Output gate */}
      <rect x="355" y="110" width="50" height="36" rx="6" fill="rgba(253,186,116,0.20)" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="380" y="132" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fbbf24">σ</text>
      <text x="380" y="160" textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">output</text>

      {/* Inputs: xₜ */}
      <text x="30" y="200" fontSize="10" fontWeight="700" fill="var(--text-secondary)">xₜ</text>
      <line x1="50" y1="196" x2="118" y2="196" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)" />

      {/* Input: hₜ₋₁ */}
      <text x="30" y="220" fontSize="10" fontWeight="700" fill="var(--text-secondary)">hₜ₋₁</text>
      <line x1="60" y1="216" x2="118" y2="216" stroke="var(--text-secondary)" strokeWidth="1.5" />

      {/* Vertical input feed to gates */}
      <line x1="120" y1="206" x2="120" y2="128" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="118" y1="128" x2="145" y2="128" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="195" y1="128" x2="215" y2="128" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="264" y1="128" x2="285" y2="128" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="334" y1="128" x2="355" y2="128" stroke="var(--text-secondary)" strokeWidth="1" />

      {/* Cell state updates (simplified) */}
      <line x1="170" y1="80" x2="170" y2="110" stroke={color} strokeWidth="1.2" />
      <line x1="240" y1="80" x2="240" y2="110" stroke={color} strokeWidth="1.2" />
      <line x1="310" y1="80" x2="310" y2="110" stroke="#f97316" strokeWidth="1.2" />

      {/* Output hₜ */}
      <line x1="463" y1="196" x2="500" y2="196" stroke={color} strokeWidth="1.5" />
      <text x="505" y="200" fontSize="10" fontWeight="700" fill={color}>hₜ</text>

      {/* tanh on output */}
      <rect x="423" y="175" width="40" height="26" rx="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="443" y="191" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">tanh</text>
      <line x1="380" y1="146" x2="380" y2="175" stroke={color} strokeWidth="1" />
      <line x1="380" y1="175" x2="423" y2="188" stroke={color} strokeWidth="1" />

      {/* Arrow marker */}
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      <text x="270" y="290" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">fₜ·cₜ₋₁ + iₜ·c̃ₜ  →  cₜ  ;  hₜ = oₜ·tanh(cₜ)</text>
    </svg>
  );
}

/* ── SVG: Seq2Seq ── */
function Seq2SeqSVG() {
  return (
    <svg viewBox="0 0 520 140" style={{ width: '100%', maxWidth: 680, display: 'block', margin: '0 auto' }}>
      {/* Encoder */}
      <rect x="20" y="40" width="160" height="60" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="100" y="65" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Encoder</text>
      <text x="100" y="82" textAnchor="middle" fontSize="9.5" fill="var(--text-secondary)">processa y₁ … yₜ</text>
      <text x="100" y="96" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">(LSTM/GRU)</text>

      {/* Context vector */}
      <rect x="210" y="52" width="100" height="36" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="260" y="73" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">Contexto</text>
      <line x1="180" y1="70" x2="210" y2="70" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr2)" />

      {/* Decoder */}
      <rect x="340" y="40" width="160" height="60" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="420" y="65" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Decoder</text>
      <text x="420" y="82" textAnchor="middle" fontSize="9.5" fill="var(--text-secondary)">gera ŷₜ₊₁ … ŷₜ₊h</text>
      <text x="420" y="96" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">(teacher forcing)</text>
      <line x1="310" y1="70" x2="340" y2="70" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr2)" />

      {/* Labels */}
      <text x="100" y="120" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Histórico</text>
      <text x="420" y="120" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Horizonte de previsão h</text>

      <defs>
        <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
    </svg>
  );
}

/* ── SVG: TFT Architecture ── */
function TFTArchSVG() {
  const boxes = [
    { label: 'Static\nMetadata', y: 30, fill: 'rgba(249,115,22,0.10)', stroke: color, textFill: color },
    { label: 'Variable\nSelection', y: 90, fill: 'rgba(249,115,22,0.10)', stroke: color, textFill: color },
    { label: 'LSTM\nEncoder', y: 150, fill: 'rgba(249,115,22,0.10)', stroke: '#f97316', textFill: '#f97316' },
    { label: 'Self-\nAttention', y: 210, fill: 'rgba(249,115,22,0.10)', stroke: '#f97316', textFill: '#f97316' },
    { label: 'Quantile\nOutput', y: 270, fill: 'rgba(249,115,22,0.10)', stroke: color, textFill: color },
  ];
  return (
    <svg viewBox="0 0 260 360" style={{ width: '100%', maxWidth: 400, display: 'block', margin: '0 auto' }}>
      <text x="130" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Arquitectura TFT</text>
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x="55" y={b.y} width="150" height="46" rx="9" fill={b.fill} stroke={b.stroke} strokeWidth="1.4" />
          {b.label.split('\n').map((line, li) => (
            <text key={li} x="130" y={b.y + 20 + li * 16} textAnchor="middle" fontSize="10.5" fontWeight="700" fill={b.textFill}>{line}</text>
          ))}
          {i < boxes.length - 1 && (
            <line x1="130" y1={b.y + 46} x2="130" y2={boxes[i + 1].y} stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr3)" />
          )}
        </g>
      ))}
      <defs>
        <marker id="arr3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
    </svg>
  );
}

export default function ST16() {
  const [activeTab, setActiveTab] = useState('xgboost');

  const tabStyle = (id) => ({
    padding: '0.45rem 1rem',
    borderRadius: 20,
    border: `1px solid ${activeTab === id ? color : 'var(--card-border)'}`,
    background: activeTab === id ? color : 'transparent',
    color: activeTab === id ? '#fff' : 'var(--text-secondary)',
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontWeight: 600,
    transition: 'all 0.15s',
  });

  const codeSnippets = {
    xgboost: `import pandas as pd
import numpy as np
from xgboost import XGBRegressor
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler

def make_lag_features(df, target='y', lags=[1, 7, 14, 30]):
    for lag in lags:
        df[f'lag_{lag}'] = df[target].shift(lag)
    df['roll_mean_7']  = df[target].shift(1).rolling(7).mean()
    df['roll_std_7']   = df[target].shift(1).rolling(7).std()
    df['month']        = df.index.month
    df['dayofweek']    = df.index.dayofweek
    df['is_weekend']   = (df['dayofweek'] >= 5).astype(int)
    return df.dropna()

df = make_lag_features(df)
features = [c for c in df.columns if c != 'y']

model = XGBRegressor(
    n_estimators=500,
    max_depth=6,
    learning_rate=0.05,
    subsample=0.8,
    colsample_bytree=0.8,
    early_stopping_rounds=50,
)
model.fit(X_train, y_train,
          eval_set=[(X_val, y_val)],
          verbose=False)`,
    lstm: `import numpy as np
from tensorflow import keras
from tensorflow.keras import layers

def create_sequences(data, seq_len=60, horizon=1):
    X, y = [], []
    for i in range(len(data) - seq_len - horizon + 1):
        X.append(data[i:i+seq_len])
        y.append(data[i+seq_len:i+seq_len+horizon])
    return np.array(X), np.array(y)

X_train, y_train = create_sequences(train_scaled, seq_len=60)

model = keras.Sequential([
    layers.LSTM(128, return_sequences=True,
                input_shape=(60, 1)),
    layers.Dropout(0.2),
    layers.LSTM(64, return_sequences=False),
    layers.Dropout(0.2),
    layers.Dense(32, activation='relu'),
    layers.Dense(1),
])
model.compile(optimizer='adam', loss='mse')
model.fit(X_train, y_train,
          epochs=50, batch_size=32,
          validation_split=0.1,
          callbacks=[keras.callbacks.EarlyStopping(
              patience=10, restore_best_weights=True)])`,
    prophet: `from prophet import Prophet
import pandas as pd

# Prophet espera colunas 'ds' e 'y'
df_prophet = df.rename(columns={'date': 'ds', 'value': 'y'})

model = Prophet(
    seasonality_mode='multiplicative',
    yearly_seasonality=True,
    weekly_seasonality=True,
    daily_seasonality=False,
    changepoint_prior_scale=0.05,  # controla flexibilidade da tendência
)
# Adicionar sazonalidade personalizada (mensal)
model.add_seasonality(name='monthly',
                      period=30.5,
                      fourier_order=5)
model.fit(df_prophet)

future = model.make_future_dataframe(periods=90)
forecast = model.predict(future)
# forecast contém: yhat, yhat_lower, yhat_upper`,
    statsforecast: `from statsforecast import StatsForecast
from statsforecast.models import AutoARIMA, AutoETS, Theta

# StatsForecast: ARIMA automático em escala
models = [
    AutoARIMA(season_length=12),
    AutoETS(season_length=12),
    Theta(season_length=12),
]

sf = StatsForecast(models=models,
                   freq='M',
                   n_jobs=-1)  # paraleliza sobre séries
sf.fit(df_long)  # formato: unique_id, ds, y

forecasts = sf.predict(h=12, level=[80, 95])
# Suporta milhares de séries em segundos`,
  };

  return (
    <div style={S.page}>
      <Link to="/statistics" style={S.back}>
        <ArrowLeft size={16} /> Voltar a Statistics
      </Link>

      <span style={S.tag}>MÓDULO 16</span>
      <h1 style={S.h1}>ML para Séries Temporais</h1>
      <p style={S.lead}>
        Os métodos de machine learning oferecem uma alternativa poderosa aos modelos clássicos como ARIMA, capturando não-linearidades complexas e interações entre variáveis. Este módulo explora as principais arquitecturas — de árvores de decisão a Transformers — e as técnicas de engenharia de features, validação e avaliação específicas para dados temporais.
      </p>

      {/* 1. ML vs Clássicos */}
      <section style={S.section}>
        <h2 style={S.h2}>1. ML vs. Métodos Clássicos</h2>
        <p style={S.p}>
          Os métodos clássicos como ARIMA, ETS e UCM assentam em pressupostos explícitos sobre a estrutura da série (estacionaridade, linearidade, distribuição dos erros). São interpretáveis, eficientes com poucos dados e bem estudados teoricamente.
        </p>
        <p style={S.p}>
          O machine learning adopta uma abordagem orientada pelos dados: aprende padrões directamente das observações sem especificar a forma funcional do modelo. Captura não-linearidades, interacções de alta ordem e efeitos de múltiplas variáveis exógenas, mas requer mais dados e maior cuidado na validação.
        </p>
        <div style={S.highlight}>
          <strong>Desafio fundamental:</strong> os dados de séries temporais violam a premissa i.i.d. (independentes e identicamente distribuídos) do ML clássico. A dependência temporal exige estratégias de validação e feature engineering específicas para evitar <em>data leakage</em>.
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Critério</th>
              <th style={S.th}>ARIMA</th>
              <th style={S.th}>XGBoost</th>
              <th style={S.th}>LSTM</th>
              <th style={S.th}>TFT</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Interpretabilidade', 'Alta', 'Média', 'Baixa', 'Média-Alta'],
              ['Necessidade de dados', 'Baixa', 'Média', 'Alta', 'Muito alta'],
              ['Sazonalidade múltipla', 'Limitada', 'Via features', 'Implícita', 'Explícita'],
              ['Variáveis exógenas', 'ARIMAX (limitado)', 'Nativa', 'Nativa', 'Nativa'],
              ['Escalabilidade', 'Baixa', 'Alta', 'Média', 'Média'],
              ['Incerteza probabilística', 'Sim (param.)', 'Não nativa', 'MC Dropout', 'Quantis'],
              ['Ajuste automático', 'Auto-ARIMA', 'Fácil tuning', 'Complexo', 'Complexo'],
            ].map(([crit, ...vals]) => (
              <tr key={crit}>
                <td style={{ ...S.td, fontWeight: 600 }}>{crit}</td>
                {vals.map((v, i) => <td key={i} style={S.td}>{v}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* 2. Feature Engineering */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Feature Engineering para Séries Temporais</h2>
        <p style={S.p}>
          Para aplicar algoritmos de ML "tabulares" (XGBoost, Random Forest, redes densas) a séries temporais, é necessário transformar a sequência num conjunto de features. Esta transformação converte o problema de previsão num problema de regressão supervisionada.
        </p>

        <h3 style={S.h3}>Features de Desfasamento (Lags)</h3>
        <p style={S.p}>
          As features de lag capturam a autocorrelação da série. O valor em <em>t-k</em> torna-se uma variável preditora:
        </p>
        <div style={S.diagram}>
          <BlockMath math="y_{t-1},\; y_{t-2},\; \ldots,\; y_{t-p} \;\longrightarrow\; \text{features numéricas independentes}" />
        </div>
        <p style={S.p}>
          A escolha dos lags deve ser informada pelo ACF/PACF. Para dados diários com sazonalidade semanal, lags 1, 7 e 14 são tipicamente informativos.
        </p>

        <h3 style={S.h3}>Estatísticas em Janela Deslizante (Rolling)</h3>
        <p style={S.p}>
          Suavizam o ruído e capturam tendências locais: média, desvio-padrão, mínimo e máximo sobre janelas de tamanho w. Importante: calcular sempre com <code>shift(1)</code> para evitar leakage — a janela não deve incluir o instante presente.
        </p>

        <h3 style={S.h3}>Features de Calendário</h3>
        <p style={S.p}>
          Codificam a posição temporal: hora do dia, dia da semana, mês, trimestre, <em>is_weekend</em>, feriados. Para variáveis cíclicas (hora, mês), usar codificação sinusoidal: sin(2πk/K) e cos(2πk/K) preserva a continuidade cíclica.
        </p>

        <h3 style={S.h3}>Features de Fourier para Sazonalidade</h3>
        <div style={S.diagram}>
          <BlockMath math="\sin\!\left(\frac{2\pi k t}{m}\right) \quad \text{e} \quad \cos\!\left(\frac{2\pi k t}{m}\right), \qquad k = 1, \ldots, K, \quad \text{período } m" />
        </div>
        <p style={S.p}>
          K pares de Fourier aproximam qualquer padrão sazonal periódico. K maior = mais flexibilidade, risco de sobreajustamento.
        </p>

        <div style={S.diagram}>
          <FeatureMatrixSVG />
        </div>
        <div style={S.note}>
          Atenção ao <strong>target leakage</strong>: nunca usar valores futuros de variáveis que não seriam conhecidos no momento da previsão. Sempre que calcular rolling features, usar <code>.shift(1)</code> antes de <code>.rolling(w)</code>.
        </div>
      </section>

      <hr style={S.divider} />

      {/* 3. Cross-Validation Temporal */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Cross-Validation Temporal</h2>
        <p style={S.p}>
          A validação cruzada aleatória (k-fold) é <strong>proibida</strong> em séries temporais: embaralhar os dados destrói a ordem temporal, permitindo que informação futura entre no treino (leakage temporal). O modelo aprenderia padrões impossíveis de usar em produção.
        </p>

        <h3 style={S.h3}>Walk-Forward Validation (Expanding Window)</h3>
        <p style={S.p}>
          Simula o processo real de previsão: treinar nos dados disponíveis até ao instante t, testar em t+1 (ou num horizonte h), avançar e repetir. A janela de treino <em>expande</em> progressivamente.
        </p>
        <div style={S.diagram}>
          <WalkForwardSVG />
        </div>

        <h3 style={S.h3}>Sliding Window Validation</h3>
        <p style={S.p}>
          Variante com janela de treino <em>fixa</em> (sliding): remove dados antigos à medida que avança. Útil quando a relação entre features e target muda ao longo do tempo (concept drift).
        </p>

        <div style={S.highlight}>
          <strong>Regra de ouro:</strong> o conjunto de teste de cada fold deve ter o mesmo horizonte que a previsão em produção. Se o objectivo é prever 7 dias à frente, cada fold testa 7 dias consecutivos.
        </div>

        <h3 style={S.h3}>Gap entre Treino e Teste</h3>
        <p style={S.p}>
          Quando as features de lag têm profundidade p, deve existir um gap de pelo menos p instantes entre o fim do treino e o início do teste para garantir que as features do conjunto de teste não dependem do alvo de treino imediato.
        </p>
      </section>

      <hr style={S.divider} />

      {/* 4. XGBoost */}
      <section style={S.section}>
        <h2 style={S.h2}>4. XGBoost para Séries Temporais</h2>
        <p style={S.p}>
          O XGBoost (eXtreme Gradient Boosting) aplica gradient boosting sobre árvores de decisão. Cada nova árvore corrige os erros residuais das anteriores, minimizando iterativamente a função de perda:
        </p>
        <div style={S.diagram}>
          <BlockMath math="\mathcal{L} = \sum_i \ell(y_i, \hat{y}_i) + \sum_k \Omega(f_k)" />
          <BlockMath math="\text{onde } \Omega(f) = \gamma T + \tfrac{1}{2}\lambda \|w\|^2 \quad \text{(regularização: n.º folhas + pesos)}" />
        </div>
        <p style={S.p}>
          Para séries temporais, o XGBoost opera sobre a matriz de features (lags, rolling stats, calendário). Não modela explicitamente a sequência — a ordem temporal é capturada implicitamente pelas features de lag.
        </p>

        <h3 style={S.h3}>Hiperparâmetros Principais</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Parâmetro</th>
              <th style={S.th}>Descrição</th>
              <th style={S.th}>Valor típico</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['n_estimators', 'Número de árvores (boosting rounds)', '200 – 2000'],
              ['max_depth', 'Profundidade máxima de cada árvore', '3 – 8'],
              ['learning_rate (η)', 'Taxa de aprendizagem; reduzir com mais árvores', '0.01 – 0.3'],
              ['subsample', 'Fracção de amostras por árvore', '0.6 – 1.0'],
              ['colsample_bytree', 'Fracção de features por árvore', '0.5 – 1.0'],
              ['min_child_weight', 'Peso mínimo numa folha; controla overfitting', '1 – 10'],
            ].map(([p, d, v]) => (
              <tr key={p}>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>{p}</td>
                <td style={S.td}>{d}</td>
                <td style={{ ...S.td, color }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.diagram}>
          <FeatureImportanceSVG />
        </div>
        <div style={S.note}>
          Usar <strong>early stopping</strong> com um conjunto de validação temporal separado para evitar overfitting. O número óptimo de árvores é determinado automaticamente.
        </div>
      </section>

      <hr style={S.divider} />

      {/* 5. Random Forest */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Random Forest para Séries Temporais</h2>
        <p style={S.p}>
          O Random Forest é um ensemble de árvores de decisão treinadas com bootstrap (bagging) e selecção aleatória de features em cada split. As previsões são a média das árvores individuais, reduzindo a variância sem aumentar o bias.
        </p>
        <p style={S.p}>
          O erro Out-of-Bag (OOB) — calculado nas amostras não usadas no bootstrap de cada árvore — oferece uma estimativa de validação interna sem necessidade de conjunto de validação separado. Útil para datasets pequenos.
        </p>
        <p style={S.p}>
          A importância de features por permutação mede quanto o erro aumenta quando os valores de uma feature são baralhados aleatoriamente. É mais fiável que a importância por impureza (Gini) para features com alta cardinalidade ou correlacionadas.
        </p>

        <h3 style={S.h3}>Random Forest vs. XGBoost — Quando Usar Cada Um?</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Situação</th>
              <th style={S.th}>Random Forest</th>
              <th style={S.th}>XGBoost</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Dataset pequeno (&lt; 5 000 obs.)', 'Preferível (OOB)', 'Pode overfittar'],
              ['Dataset grande (&gt; 50 000 obs.)', 'Aceitável', 'Geralmente melhor'],
              ['Muitas features irrelevantes', 'Robusto', 'Precisa de tuning'],
              ['Rapidez de treino', 'Paralelizável', 'Sequencial (boosting)'],
              ['Ajuste de hiperparâmetros', 'Poucos parâmetros críticos', 'Mais sensível'],
              ['Previsão de extremos', 'Limitado', 'Melhor com pinball loss'],
            ].map(([s, rf, xgb]) => (
              <tr key={s}>
                <td style={S.td} dangerouslySetInnerHTML={{ __html: s }} />
                <td style={S.td}>{rf}</td>
                <td style={S.td}>{xgb}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* 6. LSTM */}
      <section style={S.section}>
        <h2 style={S.h2}>6. LSTM — Long Short-Term Memory</h2>
        <p style={S.p}>
          As redes LSTM, propostas por Hochreiter &amp; Schmidhuber (1997), resolvem o problema do desaparecimento do gradiente das RNNs vanilla, que dificulta a aprendizagem de dependências de longo prazo. O mecanismo de gates controla selectivamente o fluxo de informação.
        </p>

        <h3 style={S.h3}>Arquitectura de Gates</h3>
        
          <strong>Forget gate</strong> — <InlineMath math="f_t = \sigma(W_f \cdot [h_{t-1}, x_t] + b_f)" />: decide que informação descartar do estado da célula.<br /><br />
          <strong>Input gate</strong> — <InlineMath math="i_t = \sigma(W_i \cdot [h_{t-1}, x_t] + b_i)" />: decide que nova informação armazenar.<br /><br />
          <strong>Candidato</strong> — <InlineMath math="\tilde{c}_t = \tanh(W_c \cdot [h_{t-1}, x_t] + b_c)" />: cria vector de novos valores candidatos.<br /><br />
          <strong>Output gate</strong> — <InlineMath math="o_t = \sigma(W_o \cdot [h_{t-1}, x_t] + b_o)" />: decide que parte do estado expor como saída.
        
        <p style={S.p}>
          Actualização do estado da célula: <InlineMath math="c_t = f_t \odot c_{t-1} + i_t \odot \tilde{c}_t" /><br />
          Estado oculto: <InlineMath math="h_t = o_t \odot \tanh(c_t)" />
        </p>

        <div style={S.diagram}>
          <LSTMCellSVG />
        </div>

        <h3 style={S.h3}>LSTM para Previsão</h3>
        <p style={S.p}>
          Em previsão univariada, a série é dividida em sequências de comprimento L (janela de contexto) e o modelo aprende a prever h passos à frente. Múltiplas camadas LSTM (stacked LSTM) aumentam a capacidade de abstracção.
        </p>
        <div style={S.note}>
          Normalizar os dados antes de treinar (MinMaxScaler ou StandardScaler) e desnormalizar as previsões. A LSTM é sensível à escala dos inputs.
        </div>
      </section>

      <hr style={S.divider} />

      {/* 7. GRU */}
      <section style={S.section}>
        <h2 style={S.h2}>7. GRU — Gated Recurrent Unit</h2>
        <p style={S.p}>
          A GRU (Cho et al., 2014) é uma simplificação da LSTM com apenas dois gates, mantendo desempenho comparável em muitas tarefas com menos parâmetros e treino mais rápido.
        </p>

        <h3 style={S.h3}>Equações da GRU</h3>
        <div style={S.diagram}>
          <BlockMath math="r_t = \sigma(W_r \cdot [h_{t-1}, x_t])" />
          <BlockMath math="z_t = \sigma(W_z \cdot [h_{t-1}, x_t])" />
          <BlockMath math="\tilde{h}_t = \tanh(W \cdot [r_t \odot h_{t-1},\; x_t])" />
          <BlockMath math="h_t = (1 - z_t) \odot h_{t-1} + z_t \odot \tilde{h}_t" />
        </div>
        <p style={S.p}>
          O <strong>reset gate</strong> controla quanto do estado anterior é usado para calcular o candidato. O <strong>update gate</strong> funciona como uma interpolação entre o estado anterior e o novo candidato — semelhante à combinação do forget gate e input gate da LSTM numa só operação.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Aspecto</th>
              <th style={S.th}>LSTM</th>
              <th style={S.th}>GRU</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Nº de gates', '3 (forget, input, output)', '2 (reset, update)'],
              ['Estado interno', 'cₜ + hₜ (separados)', 'hₜ (único)'],
              ['Parâmetros', 'Mais', 'Menos (~25%)'],
              ['Velocidade de treino', 'Mais lento', 'Mais rápido'],
              ['Desempenho em TS', 'Tipicamente melhor em séries longas', 'Competitivo em séries curtas'],
            ].map(([a, l, g]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 600 }}>{a}</td>
                <td style={S.td}>{l}</td>
                <td style={S.td}>{g}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* 8. Seq2Seq */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Seq2Seq e Encoder-Decoder</h2>
        <p style={S.p}>
          A arquitectura Encoder-Decoder, popularizada pela tradução automática, é especialmente adequada para <strong>previsão multi-step</strong> (horizonte h &gt; 1). Em vez de prever apenas o próximo passo, gera uma sequência completa de h previsões.
        </p>

        <div style={S.diagram}>
          <Seq2SeqSVG />
        </div>

        <h3 style={S.h3}>Encoder</h3>
        <p style={S.p}>
          Processa a sequência histórica y₁, ..., yₜ e comprime a informação relevante num vector de contexto (o estado oculto final da LSTM/GRU). Captura padrões, tendências e sazonalidades presentes no histórico.
        </p>

        <h3 style={S.h3}>Decoder</h3>
        <p style={S.p}>
          Recebe o vector de contexto e gera os h passos futuros ŷₜ₊₁, ..., ŷₜ₊h auto-regressivamente. Em cada passo, a previsão anterior serve como input para o próximo.
        </p>

        <h3 style={S.h3}>Teacher Forcing</h3>
        <p style={S.p}>
          Durante o treino, em vez de usar a previsão do passo anterior como input do decoder, usa-se o valor real yₜ. Acelera a convergência mas pode criar uma discrepância entre treino e inferência (exposure bias). O <em>scheduled sampling</em> mitiga este problema misturando gradualmente previsões e valores reais.
        </p>
        <div style={S.note}>
          A atenção (Bahdanau et al., 2015) generaliza o encoder-decoder: em vez de um único vector de contexto, o decoder pode "consultar" todos os estados do encoder via pesos de atenção aprendidos.
        </div>
      </section>

      <hr style={S.divider} />

      {/* 9. TFT */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Temporal Fusion Transformer (TFT)</h2>
        <p style={S.p}>
          Proposto por Lim et al. (2021), o TFT é um modelo de atenção multi-cabeça especializado para previsão probabilística de séries temporais com múltiplas covariáveis. Combina um encoder LSTM com mecanismos de atenção e redes de selecção de variáveis.
        </p>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 240px' }}>
            <div style={S.diagram}>
              <TFTArchSVG />
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <h3 style={{ ...S.h3, marginTop: 0 }}>Componentes Principais</h3>
            <p style={S.p}>
              <strong>Variable Selection Networks:</strong> aprendem a ponderar automaticamente a relevância de cada feature para cada horizonte de previsão. Permitem identificar quais covariáveis são mais informativas.
            </p>
            <p style={S.p}>
              <strong>Static Covariate Encoders:</strong> processam metadados estáticos (ID da série, localização, categoria) e injectam essa informação em todas as camadas.
            </p>
            <p style={S.p}>
              <strong>Multi-Head Attention:</strong> captura dependências de longo alcance e identifica os passos históricos mais relevantes para cada previsão futura — os pesos de atenção são directamente interpretáveis.
            </p>
            <p style={S.p}>
              <strong>Quantile Output:</strong> produz previsões probabilísticas em múltiplos quantis (10%, 50%, 90%), permitindo intervalos de confiança calibrados.
            </p>
          </div>
        </div>

        <div style={S.highlight}>
          O TFT distingue três tipos de inputs: <strong>covariáveis passadas observadas</strong> (ex: vendas históricas), <strong>inputs futuros conhecidos</strong> (ex: feriados planeados, promoções agendadas) e <strong>metadados estáticos</strong> (ex: categoria do produto). Esta distinção melhora substancialmente a qualidade das previsões.
        </div>
      </section>

      <hr style={S.divider} />

      {/* 10. N-BEATS & N-HiTS */}
      <section style={S.section}>
        <h2 style={S.h2}>10. N-BEATS e N-HiTS</h2>
        <p style={S.p}>
          N-BEATS (Oreshkin et al., 2020) e N-HiTS (Challu et al., 2022) são arquitecturas de deep learning <em>puramente baseadas em MLP</em> — sem convoluções, sem recorrência, sem atenção. Alcançaram resultados state-of-the-art nas competições M4 e M5.
        </p>

        <h3 style={S.h3}>N-BEATS</h3>
        <p style={S.p}>
          Usa uma pilha de blocos residuais com <strong>ligações residuais backward e forward</strong>. Cada bloco recebe a série de input, produz uma previsão parcial (forward) e subtrai a sua estimativa do input para o próximo bloco (backward residual). A decomposição interpretável usa bases explícitas de tendência (polinómica) e sazonalidade (Fourier):
        </p>
        <div style={S.diagram}>
          <BlockMath math="T(t) = \sum_i \theta_{b,i} \cdot t^i \qquad \text{(bloco de tendência polinomial)}" />
          <BlockMath math="S(t) = \sum_k \!\left[a_k \sin\!\left(\frac{2\pi k t}{m}\right) + b_k \cos\!\left(\frac{2\pi k t}{m}\right)\right] \qquad \text{(bloco de sazonalidade)}" />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'center' }}>Pilha genérica: usa bases aprendidas (sem restrições)</p>
        </div>

        <h3 style={S.h3}>N-HiTS</h3>
        <p style={S.p}>
          Extensão para horizontes longos. Usa <strong>interpolação hierárquica</strong>: diferentes blocos operam em diferentes escalas temporais (amostragem multi-rate), e as previsões de baixa frequência são interpoladas para a resolução final. Reduz drasticamente o número de parâmetros mantendo qualidade superior em horizontes H &gt; 48.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>Ponto forte</th>
              <th style={S.th}>Limitação</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['N-BEATS', 'Interpretável, excelente em M4', 'Horizonte curto a médio'],
              ['N-HiTS', 'Horizontes muito longos, eficiente', 'Mais recente, menos testado'],
              ['TFT', 'Covariáveis múltiplas, probabilístico', 'Complexo, lento para treinar'],
              ['LSTM', 'Flexível, amplamente suportado', 'Precisa de feature engineering ou Seq2Seq'],
            ].map(([m, p, l]) => (
              <tr key={m}>
                <td style={{ ...S.td, fontWeight: 600, color }}>{m}</td>
                <td style={S.td}>{p}</td>
                <td style={S.td}>{l}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* 11. Prophet */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Prophet (Meta)</h2>
        <p style={S.p}>
          Prophet (Taylor &amp; Letham, 2018) é uma biblioteca desenvolvida pela Meta que modela explicitamente a estrutura da série como soma de componentes:
        </p>
        <div style={S.diagram}>
          <BlockMath math="y(t) = g(t) + s(t) + h(t) + \varepsilon_t" />
          <table style={{ fontSize: '0.92rem', color: 'var(--text-primary)', margin: '0.5rem auto', lineHeight: 2 }}>
            <tbody>
              <tr><td style={{ paddingRight: '1rem' }}><InlineMath math="g(t)" /></td><td>tendência: piecewise linear ou crescimento logístico</td></tr>
              <tr><td><InlineMath math="s(t)" /></td><td>sazonalidade: série de Fourier com período e ordem K ajustáveis</td></tr>
              <tr><td><InlineMath math="h(t)" /></td><td>efeitos de feriados: dummies com janela de influência configurável</td></tr>
              <tr><td><InlineMath math="\varepsilon_t" /></td><td>ruído iid <InlineMath math="\sim \mathcal{N}(0,\,\sigma^2)" /></td></tr>
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>Tendência com Changepoints</h3>
        <p style={S.p}>
          A tendência piecewise linear detecta automaticamente pontos de mudança de taxa de crescimento. O parâmetro <code>changepoint_prior_scale</code> controla a flexibilidade: valores elevados permitem mais changepoints (risco de overfitting), valores baixos forçam tendências mais suaves.
        </p>

        <h3 style={S.h3}>Vantagens do Prophet</h3>
        <div style={S.highlight}>
          Extremamente fácil de usar: aceita dados com valores em falta, outliers e sazonalidades múltiplas. O utilizador pode incorporar conhecimento de domínio (datas de feriados, eventos especiais) directamente. Produz intervalos de incerteza (via Monte Carlo sobre os parâmetros da tendência).
        </div>

        <h3 style={S.h3}>Limitações</h3>
        <p style={S.p}>
          Não modela autocorrelação residual — os resíduos não são explorados. Pode ter dificuldade com séries de alta frequência (intraday) ou padrões muito irregulares. A incerteza nos changepoints futuros não é propagada correctamente para os intervalos de previsão.
        </p>
      </section>

      <hr style={S.divider} />

      {/* 12. Avaliação */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Avaliação e Benchmarks</h2>
        <p style={S.p}>
          A avaliação de modelos de séries temporais exige métricas adequadas e comparação com <em>benchmarks naïf</em>. Um modelo "sofisticado" que não supera a previsão naïf (yₜ = yₜ₋₁) deve ser rejeitado.
        </p>

        <h3 style={S.h3}>Métricas Principais</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Métrica</th>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Propriedade</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['MAE', <InlineMath math="\text{mean}(|y_t - \hat{y}_t|)" />, 'Interpretável, robusto a outliers'],
              ['RMSE', <InlineMath math="\sqrt{\text{mean}((y_t - \hat{y}_t)^2)}" />, 'Penaliza erros grandes'],
              ['MAPE', <InlineMath math="\text{mean}(|e_t / y_t|) \times 100" />, 'Percentual; indefinido para yₜ=0'],
              ['sMAPE', <InlineMath math="\frac{200 \cdot |y_t - \hat{y}_t|}{|y_t| + |\hat{y}_t|}" />, 'Simétrico; menos instável que MAPE'],
              ['MASE', <InlineMath math="\text{MAE} \,/\, \text{MAE}_{\text{naïf}}" />, 'Independente da escala; usa naïf sazonal'],
              ['Pinball Loss', <InlineMath math="\sum (\tau \cdot e_t^+ + (1-\tau) \cdot e_t^-)" />, 'Para previsão probabilística por quantil τ'],
            ].map(([m, f, p]) => (
              <tr key={m}>
                <td style={{ ...S.td, fontWeight: 600, color }}>{m}</td>
                <td style={{ ...S.td, fontSize: '0.9rem' }}>{f}</td>
                <td style={S.td}>{p}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Competição M4 — Resultados Seleccionados</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Posição</th>
              <th style={S.th}>Método</th>
              <th style={S.th}>OWA (sMAPE + MASE)</th>
              <th style={S.th}>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1º', 'ES-RNN (Smyl)', '0.821', 'Híbrido DL + ETS'],
              ['2º', 'FFORMA (Montero-Manso)', '0.838', 'Ensemble de métodos'],
              ['3º', 'N-BEATS', '0.847', 'Deep Learning (MLP)'],
              ['Ref.', 'Naïf sazonal', '1.000', 'Benchmark base'],
              ['Ref.', 'ETS automático', '0.932', 'Clássico'],
              ['Ref.', 'ARIMA automático', '0.974', 'Clássico'],
            ].map(([pos, met, owa, tip]) => (
              <tr key={pos + met}>
                <td style={{ ...S.td, fontWeight: 600 }}>{pos}</td>
                <td style={S.td}>{met}</td>
                <td style={{ ...S.td, color }}>{owa}</td>
                <td style={S.td}>{tip}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          <InlineMath math="\text{OWA} = 0.5 \times \left(\frac{\text{sMAPE}}{\text{sMAPE}_{\text{naïf}}} + \frac{\text{MASE}}{\text{MASE}_{\text{naïf}}}\right)" /> — Valores abaixo de 1.0 superam o naïf sazonal.
        </div>
      </section>

      <hr style={S.divider} />

      {/* 14. Síntese */}
      <section style={S.section}>
        <h2 style={S.h2}>14. Síntese do Módulo</h2>
        <p style={S.p}>
          O machine learning para séries temporais não substitui o conhecimento estatístico clássico — complementa-o. A escolha do modelo deve ser guiada pela quantidade de dados disponíveis, a necessidade de interpretabilidade, a presença de covariáveis exógenas e o horizonte de previsão.
        </p>

        <div style={S.highlight}>
          <strong>Decisão prática — guia de selecção de modelo:</strong>
          <br /><br />
          <strong>Poucos dados (&lt; 200 obs.), univariado:</strong> ARIMA/ETS/Prophet<br />
          <strong>Dados médios, covariáveis, interpretabilidade:</strong> XGBoost com lags + Prophet<br />
          <strong>Grandes volumes, padrões complexos:</strong> N-BEATS ou N-HiTS<br />
          <strong>Múltiplas covariáveis, previsão probabilística:</strong> TFT<br />
          <strong>Sequências longas, contexto temporal profundo:</strong> LSTM/GRU Seq2Seq<br />
          <strong>Milhares de séries em paralelo:</strong> StatsForecast (AutoARIMA/AutoETS)
        </div>

        <h3 style={S.h3}>Princípios Transversais</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Princípio</th>
              <th style={S.th}>Aplicação</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Nunca baralhar dados temporais', 'Walk-forward CV, splits cronológicos'],
              ['Começar simples', 'Benchmark naïf → ETS/ARIMA → ML → DL'],
              ['Feature engineering cuidadoso', 'Shift(1) antes de rolling, lags baseados em ACF'],
              ['Validação honesta', 'Mesmo horizonte em treino e teste, gap de lags'],
              ['Comparar com naïf', 'MASE > 1 → o modelo é pior que o naïf'],
              ['Incerteza importa', 'Previsão por intervalos sempre que possível'],
              ['Monitorizar em produção', 'Concept drift, re-treino periódico'],
            ].map(([p, a]) => (
              <tr key={p}>
                <td style={{ ...S.td, fontWeight: 600 }}>{p}</td>
                <td style={S.td}>{a}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.note}>
          O campo evolui rapidamente: modelos de fundação para séries temporais (TimesFM, Chronos, Moirai) estão a emergir, oferecendo previsão zero-shot sem treino específico por série. Acompanhar os benchmarks M5, LTSF-Linear e Monash é essencial para avaliar o estado da arte.
        </div>
      </section>
    </div>
  );
}
