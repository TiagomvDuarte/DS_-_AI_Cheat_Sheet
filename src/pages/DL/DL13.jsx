import React from 'react';
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
  note: { background: 'rgba(22,163,74,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' },
  card: { background: 'var(--bg-primary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1rem' },
  cardLabel: { fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', display: 'inline-block', padding: '0.15rem 0.6rem', borderRadius: 6 },
};

const ptLabel = { ...S.cardLabel, color: '#ee4c2c', background: 'rgba(238,76,44,0.1)' };
const tfLabel = { ...S.cardLabel, color: '#ff6f00', background: 'rgba(255,111,0,0.1)' };

function CodePanel({ title, label, code }) {
  return (
    <div style={S.card}>
      <span style={label}>{title}</span>
      <div style={{ ...S.code, margin: '0.5rem 0 0' }}>{code}</div>
    </div>
  );
}

function CompareGrid({ pt, tf }) {
  return (
    <div style={S.grid2}>
      <CodePanel title="PyTorch" label={ptLabel} code={pt} />
      <CodePanel title="TensorFlow / Keras" label={tfLabel} code={tf} />
    </div>
  );
}

export default function DL13() {
  return (
    <div style={S.page}>
      <Link to="/dl" style={S.back}><ArrowLeft size={16} /> Voltar a Deep Learning</Link>

      <div style={S.tag}>Module 13</div>
      <h1 style={S.h1}>TensorFlow &amp; PyTorch</h1>
      <p style={S.lead}>
        Os módulos 1 a 12 construíram a teoria de Deep Learning — neurónios, backpropagation, optimização,
        regularização, autoencoders e VAEs, GNNs, self-supervised learning, modelos multimodais, scaling laws,
        eficiência e federated learning. Este módulo final é onde tudo se junta em <strong>código real</strong>.
        Vamos implementar cada um destes conceitos lado a lado nos dois frameworks dominantes da indústria:
        <strong> PyTorch</strong> (preferido em investigação, define-by-run, API "pythónica") e
        <strong> TensorFlow / Keras</strong> (forte em produção, com a API de alto nível Keras a tornar
        o desenvolvimento muito rápido). O objectivo não é decidir qual é "melhor", mas sim reconhecer os
        mesmos padrões — tensores, autograd, camadas, optimizadores, ciclos de treino — em ambas as sintaxes,
        para que possas ler e escrever código em qualquer um dos dois.
      </p>

      {/* 1. Tensors */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Tensores: o bloco de construção fundamental</h2>
        <p style={S.p}>
          Um <strong>tensor</strong> é um array multidimensional — a generalização de escalares, vectores e matrizes.
          Tanto o PyTorch (<code>torch.Tensor</code>) como o TensorFlow (<code>tf.Tensor</code>) oferecem APIs muito
          semelhantes às do NumPy, com a vantagem de poderem correr em GPU/TPU e suportar diferenciação automática.
        </p>
        <CompareGrid
          pt={`import torch

# Criar tensores
a = torch.tensor([[1., 2.], [3., 4.]])
zeros = torch.zeros(2, 3)
rand = torch.rand(2, 3)              # uniforme [0,1)
arange = torch.arange(0, 10, 2)      # [0,2,4,6,8]

# Forma e tipo
print(a.shape)     # torch.Size([2, 2])
print(a.dtype)     # torch.float32

# Reshape e transposição
b = a.reshape(4)        # [1,2,3,4]
c = a.T                 # transposta

# Multiplicação de matrizes
d = a @ a               # ou torch.matmul(a, a)

# Broadcasting (como NumPy)
e = a + torch.tensor([10., 20.])   # soma cada linha

# GPU
device = 'cuda' if torch.cuda.is_available() else 'cpu'
a_gpu = a.to(device)

# NumPy <-> Tensor
import numpy as np
np_array = a.numpy()                  # tensor -> numpy (CPU)
back = torch.from_numpy(np_array)     # numpy -> tensor`}
          tf={`import tensorflow as tf

# Criar tensores
a = tf.constant([[1., 2.], [3., 4.]])
zeros = tf.zeros((2, 3))
rand = tf.random.uniform((2, 3))     # uniforme [0,1)
arange = tf.range(0, 10, 2)          # [0,2,4,6,8]

# Forma e tipo
print(a.shape)      # (2, 2)
print(a.dtype)      # tf.float32

# Reshape e transposição
b = tf.reshape(a, [4])      # [1,2,3,4]
c = tf.transpose(a)          # transposta

# Multiplicação de matrizes
d = a @ a                    # ou tf.matmul(a, a)

# Broadcasting (como NumPy)
e = a + tf.constant([10., 20.])   # soma cada linha

# GPU (TF coloca em GPU automaticamente se disponível)
with tf.device('/GPU:0'):
    a_gpu = tf.identity(a)

# NumPy <-> Tensor
import numpy as np
np_array = a.numpy()                    # tensor -> numpy
back = tf.convert_to_tensor(np_array)   # numpy -> tensor`}
        />
        <div style={S.note}>
          Em PyTorch, tensores em CPU e arrays NumPy podem partilhar memória (<code>.numpy()</code> /
          <code>from_numpy</code> são "views" sem cópia). Em TensorFlow, <code>tf.constant</code> cria
          tensores imutáveis; para valores que mudam durante o treino (pesos), usa-se <code>tf.Variable</code>.
        </div>
      </div>

      <hr style={S.divider} />

      {/* 2. Autograd vs GradientTape */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Diferenciação Automática: Autograd vs GradientTape</h2>
        <p style={S.p}>
          O Módulo 2 explicou como o backpropagation aplica a regra da cadeia ao longo de um grafo de computação.
          Ambos os frameworks automatizam isto: o PyTorch constrói o grafo dinamicamente sempre que
          <code>requires_grad=True</code>, e expõe os gradientes via <code>.backward()</code> e <code>.grad</code>.
          O TensorFlow usa um gestor de contexto explícito, <code>tf.GradientTape</code>, que "grava" as operações
          a diferenciar.
        </p>
        <CompareGrid
          pt={`import torch

# y = x^2 + 3x, dy/dx = 2x + 3
x = torch.tensor(2.0, requires_grad=True)
y = x**2 + 3*x

y.backward()          # calcula gradientes
print(x.grad)         # tensor(7.)  -> 2*2+3 = 7

# Exemplo com vários parâmetros
w = torch.tensor(1.5, requires_grad=True)
b = torch.tensor(0.5, requires_grad=True)
x_data = torch.tensor(2.0)

pred = w * x_data + b
loss = (pred - 5.0)**2
loss.backward()

print(w.grad, b.grad)

# Limpar gradientes antes da próxima iteração!
w.grad.zero_()
b.grad.zero_()`}
          tf={`import tensorflow as tf

# y = x^2 + 3x, dy/dx = 2x + 3
x = tf.Variable(2.0)

with tf.GradientTape() as tape:
    y = x**2 + 3*x

dy_dx = tape.gradient(y, x)
print(dy_dx)          # tf.Tensor(7.0, ...)

# Exemplo com vários parâmetros
w = tf.Variable(1.5)
b = tf.Variable(0.5)
x_data = tf.constant(2.0)

with tf.GradientTape() as tape:
    pred = w * x_data + b
    loss = (pred - 5.0)**2

grads = tape.gradient(loss, [w, b])
print(grads)          # [dL/dw, dL/db]

# A tape é descartada automaticamente após
# tape.gradient() -- não é preciso "limpar"`}
        />
        <div style={S.note}>
          Truque mental: <code>requires_grad=True</code> + <code>.backward()</code> (PyTorch) ≈
          gravar dentro de <code>with tf.GradientTape() as tape:</code> + <code>tape.gradient()</code> (TF).
          Em ambos, só tensores/variáveis "treináveis" acumulam gradientes.
        </div>
      </div>

      <hr style={S.divider} />

      {/* 3. Building a model */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Construir um Modelo: o MLP</h2>
        <p style={S.p}>
          Vamos definir o mesmo MLP usado conceptualmente desde o Módulo 1: uma camada de entrada,
          uma camada escondida com activação ReLU, e uma camada de saída. Em PyTorch há duas formas
          comuns — subclassar <code>nn.Module</code> (mais flexível) ou usar <code>nn.Sequential</code>
          (mais rápido para arquitecturas lineares). Em Keras, o equivalente é <code>tf.keras.Sequential</code>
          ou a Functional API / subclassing de <code>tf.keras.Model</code>.
        </p>
        <CompareGrid
          pt={`import torch.nn as nn

# --- Opção A: subclassing de nn.Module ---
class MLP(nn.Module):
    def __init__(self, in_dim=784, hidden_dim=128, out_dim=10):
        super().__init__()
        self.fc1 = nn.Linear(in_dim, hidden_dim)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_dim, out_dim)

    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)
        x = self.fc2(x)
        return x   # logits (sem softmax)

model = MLP()

# --- Opção B: nn.Sequential ---
model_seq = nn.Sequential(
    nn.Linear(784, 128),
    nn.ReLU(),
    nn.Linear(128, 10),
)

print(model)
# inspeccionar parâmetros
for name, param in model.named_parameters():
    print(name, param.shape)`}
          tf={`import tensorflow as tf
from tensorflow.keras import layers, Model

# --- Opção A: Sequential ---
model = tf.keras.Sequential([
    layers.Input(shape=(784,)),
    layers.Dense(128, activation='relu'),
    layers.Dense(10),   # logits (sem softmax)
])

# --- Opção B: Functional API ---
inputs = layers.Input(shape=(784,))
x = layers.Dense(128, activation='relu')(inputs)
outputs = layers.Dense(10)(x)
model_func = Model(inputs, outputs)

# --- Opção C: subclassing de tf.keras.Model ---
class MLP(Model):
    def __init__(self, hidden_dim=128, out_dim=10):
        super().__init__()
        self.fc1 = layers.Dense(hidden_dim, activation='relu')
        self.fc2 = layers.Dense(out_dim)

    def call(self, x):
        x = self.fc1(x)
        return self.fc2(x)

model_sub = MLP()
model.summary()`}
        />
      </div>

      <hr style={S.divider} />

      {/* 4. Loss & Optimizers */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Loss Functions &amp; Optimizadores</h2>
        <p style={S.p}>
          O Módulo 3 (Optimização) discutiu como SGD, Momentum, RMSProp e <strong>Adam</strong> ajustam os pesos
          a partir do gradiente da loss. Aqui aplicamos isso na prática: definimos uma função de perda
          (<code>CrossEntropyLoss</code> para classificação, <code>MSE</code> para regressão) e um optimizador
          Adam que vai actualizar os parâmetros do MLP definido acima.
        </p>
        <CompareGrid
          pt={`import torch.nn as nn
import torch.optim as optim

model = MLP()

# Loss para classificação multi-classe
# (espera logits + labels inteiros)
criterion = nn.CrossEntropyLoss()

# Loss para regressão
mse = nn.MSELoss()

# Optimizador Adam (Módulo 3: combina momentum
# + taxa de aprendizagem adaptativa por parâmetro)
optimizer = optim.Adam(
    model.parameters(),
    lr=1e-3,
    betas=(0.9, 0.999),   # decaimento dos momentos
    weight_decay=1e-5,    # regularização L2
)`}
          tf={`from tensorflow.keras import losses, optimizers

model = MLP()

# Loss para classificação multi-classe
# (logits + labels inteiros, from_logits=True
# porque o modelo não tem softmax na saída)
criterion = losses.SparseCategoricalCrossentropy(
    from_logits=True
)

# Loss para regressão
mse = losses.MeanSquaredError()

# Optimizador Adam
optimizer = optimizers.Adam(
    learning_rate=1e-3,
    beta_1=0.9, beta_2=0.999,
    weight_decay=1e-5,   # regularização L2
)`}
        />
      </div>

      <hr style={S.divider} />

      {/* 5. Training loop */}
      <div style={S.section}>
        <h2 style={S.h2}>5. O Ciclo de Treino</h2>
        <p style={S.p}>
          Em PyTorch o ciclo de treino é <strong>manual e explícito</strong>: para cada batch,
          zeramos os gradientes, fazemos o forward pass, calculamos a loss, chamamos
          <code>.backward()</code> e depois <code>optimizer.step()</code>. Em Keras, o método
          <code>.compile()</code> + <code>.fit()</code> encapsula tudo isto — mas mostramos também
          a versão manual com <code>GradientTape</code>, que é equivalente ao loop do PyTorch.
        </p>
        <CompareGrid
          pt={`for epoch in range(num_epochs):
    model.train()
    running_loss = 0.0

    for x_batch, y_batch in train_loader:
        x_batch, y_batch = x_batch.to(device), y_batch.to(device)

        optimizer.zero_grad()           # 1. limpar gradientes
        outputs = model(x_batch)        # 2. forward
        loss = criterion(outputs, y_batch)
        loss.backward()                 # 3. backward (autograd)
        optimizer.step()                # 4. actualizar pesos

        running_loss += loss.item()

    print(f"Epoch {epoch+1}: loss={running_loss/len(train_loader):.4f}")`}
          tf={`# --- Forma simples: compile + fit ---
model.compile(
    optimizer=optimizer,
    loss=criterion,
    metrics=['accuracy'],
)
model.fit(
    train_dataset,
    epochs=num_epochs,
    validation_data=val_dataset,
)

# --- Forma manual: equivalente ao loop do PyTorch ---
for epoch in range(num_epochs):
    running_loss = 0.0
    for x_batch, y_batch in train_dataset:
        with tf.GradientTape() as tape:
            outputs = model(x_batch, training=True)
            loss = criterion(y_batch, outputs)

        grads = tape.gradient(loss, model.trainable_variables)
        optimizer.apply_gradients(zip(grads, model.trainable_variables))
        running_loss += loss.numpy()

    print(f"Epoch {epoch+1}: loss={running_loss:.4f}")`}
        />
        <div style={S.note}>
          <code>model.train()</code> / <code>training=True</code> activam comportamentos específicos
          do treino (Dropout activo, BatchNorm a usar estatísticas do batch). Não esquecer
          <code>model.eval()</code> / <code>training=False</code> na inferência.
        </div>
      </div>

      <hr style={S.divider} />

      {/* 6. Data loading */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Carregamento de Dados</h2>
        <p style={S.p}>
          PyTorch separa os dados em <code>Dataset</code> (define como aceder a um item) e
          <code>DataLoader</code> (faz batching, shuffling, paralelismo). TensorFlow usa a API
          unificada <code>tf.data.Dataset</code>, com operações encadeáveis como <code>.batch()</code>,
          <code>.shuffle()</code> e <code>.prefetch()</code> para pipelines eficientes.
        </p>
        <CompareGrid
          pt={`from torch.utils.data import Dataset, DataLoader

class MyDataset(Dataset):
    def __init__(self, X, y):
        self.X = X
        self.y = y

    def __len__(self):
        return len(self.X)

    def __getitem__(self, idx):
        return self.X[idx], self.y[idx]

train_ds = MyDataset(X_train, y_train)

train_loader = DataLoader(
    train_ds,
    batch_size=64,
    shuffle=True,
    num_workers=4,     # carregamento paralelo
)

for x_batch, y_batch in train_loader:
    pass  # x_batch.shape == (64, 784)`}
          tf={`import tensorflow as tf

train_dataset = tf.data.Dataset.from_tensor_slices(
    (X_train, y_train)
)

train_dataset = (
    train_dataset
    .shuffle(buffer_size=10000)
    .batch(64)
    .prefetch(tf.data.AUTOTUNE)   # sobrepõe I/O e cómputo
)

for x_batch, y_batch in train_dataset:
    pass  # x_batch.shape == (64, 784)`}
        />
      </div>

      <hr style={S.divider} />

      {/* 7. Regularization */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Regularização na Prática: Dropout &amp; BatchNorm</h2>
        <p style={S.p}>
          O Módulo 4 cobriu como Dropout (desligar neurónios aleatoriamente) e Batch Normalization
          (normalizar activações por batch) reduzem overfitting e estabilizam o treino. Adicionamos
          ambos ao MLP da Secção 3.
        </p>
        <CompareGrid
          pt={`class MLPRegularized(nn.Module):
    def __init__(self, in_dim=784, hidden_dim=128, out_dim=10, p=0.3):
        super().__init__()
        self.fc1 = nn.Linear(in_dim, hidden_dim)
        self.bn1 = nn.BatchNorm1d(hidden_dim)
        self.relu = nn.ReLU()
        self.dropout = nn.Dropout(p)
        self.fc2 = nn.Linear(hidden_dim, out_dim)

    def forward(self, x):
        x = self.fc1(x)
        x = self.bn1(x)        # normaliza antes da activação
        x = self.relu(x)
        x = self.dropout(x)    # só activo em model.train()
        x = self.fc2(x)
        return x`}
          tf={`model = tf.keras.Sequential([
    layers.Input(shape=(784,)),
    layers.Dense(128),
    layers.BatchNormalization(),   # normaliza antes da activação
    layers.Activation('relu'),
    layers.Dropout(0.3),           # só activo com training=True
    layers.Dense(10),
])`}
        />
        <div style={S.note}>
          Ordem comum: Linear/Dense → BatchNorm → Activation → Dropout. Em PyTorch, o
          comportamento de <code>BatchNorm1d</code> e <code>Dropout</code> muda automaticamente
          entre <code>model.train()</code> e <code>model.eval()</code>.
        </div>
      </div>

      <hr style={S.divider} />

      {/* 8. CNN */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Exemplo Completo: CNN para Classificação de Imagens</h2>
        <p style={S.p}>
          Uma CNN típica empilha blocos de convolução + pooling para extrair features espaciais,
          seguidos de uma camada <code>Flatten</code> e camadas densas para a classificação final
          — por exemplo, em imagens 28×28 (estilo MNIST/Fashion-MNIST) com 10 classes.
        </p>
        <CompareGrid
          pt={`class CNN(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()
        self.features = nn.Sequential(
            nn.Conv2d(1, 32, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2),                 # 28x28 -> 14x14

            nn.Conv2d(32, 64, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2),                 # 14x14 -> 7x7
        )
        self.classifier = nn.Sequential(
            nn.Flatten(),
            nn.Linear(64 * 7 * 7, 128),
            nn.ReLU(),
            nn.Dropout(0.3),
            nn.Linear(128, num_classes),
        )

    def forward(self, x):
        x = self.features(x)
        return self.classifier(x)

model = CNN().to(device)
optimizer = optim.Adam(model.parameters(), lr=1e-3)
criterion = nn.CrossEntropyLoss()

for x_batch, y_batch in train_loader:
    x_batch, y_batch = x_batch.to(device), y_batch.to(device)
    optimizer.zero_grad()
    loss = criterion(model(x_batch), y_batch)
    loss.backward()
    optimizer.step()`}
          tf={`model = tf.keras.Sequential([
    layers.Input(shape=(28, 28, 1)),

    layers.Conv2D(32, 3, padding='same', activation='relu'),
    layers.MaxPooling2D(2),            # 28x28 -> 14x14

    layers.Conv2D(64, 3, padding='same', activation='relu'),
    layers.MaxPooling2D(2),            # 14x14 -> 7x7

    layers.Flatten(),
    layers.Dense(128, activation='relu'),
    layers.Dropout(0.3),
    layers.Dense(10),                  # logits
])

model.compile(
    optimizer=tf.keras.optimizers.Adam(1e-3),
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
    metrics=['accuracy'],
)

model.fit(train_dataset, epochs=10, validation_data=val_dataset)`}
        />
        <div style={S.note}>
          Nota o layout dos dados: PyTorch usa <strong>NCHW</strong> (batch, canais, altura, largura)
          por omissão, enquanto Keras/TF usa <strong>NHWC</strong> (batch, altura, largura, canais).
        </div>
      </div>

      <hr style={S.divider} />

      {/* 9. Autoencoder */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Autoencoder</h2>
        <p style={S.p}>
          Recordando o Módulo 5: um <strong>autoencoder</strong> aprende a comprimir uma entrada num
          espaço latente de menor dimensão (encoder) e a reconstruí-la (decoder), minimizando o erro
          de reconstrução — útil para compressão, denoising ou pré-treino de representações.
        </p>
        <CompareGrid
          pt={`class Autoencoder(nn.Module):
    def __init__(self, in_dim=784, latent_dim=32):
        super().__init__()
        self.encoder = nn.Sequential(
            nn.Linear(in_dim, 256),
            nn.ReLU(),
            nn.Linear(256, latent_dim),
            nn.ReLU(),
        )
        self.decoder = nn.Sequential(
            nn.Linear(latent_dim, 256),
            nn.ReLU(),
            nn.Linear(256, in_dim),
            nn.Sigmoid(),   # pixels normalizados em [0,1]
        )

    def forward(self, x):
        z = self.encoder(x)
        x_hat = self.decoder(z)
        return x_hat

model = Autoencoder()
criterion = nn.MSELoss()      # erro de reconstrução
optimizer = optim.Adam(model.parameters(), lr=1e-3)

for x_batch, _ in train_loader:   # ignoramos os labels
    x_flat = x_batch.view(x_batch.size(0), -1)
    optimizer.zero_grad()
    x_hat = model(x_flat)
    loss = criterion(x_hat, x_flat)   # reconstruir a própria entrada
    loss.backward()
    optimizer.step()`}
          tf={`latent_dim = 32

encoder = tf.keras.Sequential([
    layers.Input(shape=(784,)),
    layers.Dense(256, activation='relu'),
    layers.Dense(latent_dim, activation='relu'),
])

decoder = tf.keras.Sequential([
    layers.Input(shape=(latent_dim,)),
    layers.Dense(256, activation='relu'),
    layers.Dense(784, activation='sigmoid'),  # pixels em [0,1]
])

autoencoder = tf.keras.Sequential([encoder, decoder])

autoencoder.compile(
    optimizer=tf.keras.optimizers.Adam(1e-3),
    loss='mse',     # erro de reconstrução
)

# x_train usado como input E target -> reconstrução
autoencoder.fit(
    x_train, x_train,
    epochs=20, batch_size=64,
    validation_data=(x_val, x_val),
)

# Aceder apenas ao espaço latente:
z = encoder.predict(x_train)`}
        />
      </div>

      <hr style={S.divider} />

      {/* 10. GPU / Mixed Precision */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Gestão de Dispositivos &amp; Mixed Precision</h2>
        <p style={S.p}>
          Treinar em GPU acelera drasticamente as operações com tensores. A <strong>mixed precision</strong>
          (combinar float16/bfloat16 com float32) reduz o uso de memória e aumenta o throughput em GPUs
          modernas, mantendo a estabilidade numérica onde importa.
        </p>
        <CompareGrid
          pt={`import torch

device = 'cuda' if torch.cuda.is_available() else 'cpu'
model = model.to(device)

# Mixed precision com autocast + GradScaler
scaler = torch.cuda.amp.GradScaler()

for x_batch, y_batch in train_loader:
    x_batch, y_batch = x_batch.to(device), y_batch.to(device)
    optimizer.zero_grad()

    with torch.cuda.amp.autocast():    # ops em float16 onde seguro
        outputs = model(x_batch)
        loss = criterion(outputs, y_batch)

    scaler.scale(loss).backward()      # evita underflow
    scaler.step(optimizer)
    scaler.update()`}
          tf={`import tensorflow as tf

# TF coloca tensores/ops em GPU automaticamente
# se houver uma disponível. Para forçar:
with tf.device('/GPU:0'):
    outputs = model(x_batch)

# Mixed precision: activar globalmente
from tensorflow.keras import mixed_precision
mixed_precision.set_global_policy('mixed_float16')

# A última camada deve manter float32 para estabilidade:
# layers.Dense(10, dtype='float32')

model.compile(optimizer=optimizer, loss=criterion)
model.fit(train_dataset, epochs=10)
# Keras gere o loss-scaling automaticamente`}
        />
        <div style={S.note}>
          Regra prática: usar mixed precision sempre que a GPU suportar Tensor Cores
          (NVIDIA Volta+) — normalmente 1.5x–3x mais rápido com perda de precisão negligenciável.
        </div>
      </div>

      <hr style={S.divider} />

      {/* 11. Save / Load */}
      <div style={S.section}>
        <h2 style={S.h2}>11. Guardar e Carregar Modelos</h2>
        <p style={S.p}>
          PyTorch tipicamente guarda apenas o <code>state_dict</code> (os pesos) — é necessário
          recriar a arquitectura do modelo antes de carregar. Keras pode guardar a arquitectura,
          pesos e até o estado do optimizador num único ficheiro/pasta.
        </p>
        <CompareGrid
          pt={`# Guardar apenas os pesos (recomendado)
torch.save(model.state_dict(), 'model_weights.pth')

# Carregar (é preciso recriar a arquitectura primeiro!)
model = MLP()
model.load_state_dict(torch.load('model_weights.pth'))
model.eval()

# Guardar o modelo inteiro (menos portátil)
torch.save(model, 'model_full.pth')
model = torch.load('model_full.pth')

# Checkpoints com estado do optimizador (para retomar treino)
torch.save({
    'epoch': epoch,
    'model_state_dict': model.state_dict(),
    'optimizer_state_dict': optimizer.state_dict(),
    'loss': loss,
}, 'checkpoint.pth')`}
          tf={`# Guardar o modelo inteiro (arquitectura + pesos + optimizador)
model.save('model.keras')          # formato nativo Keras 3
# ou: model.save('saved_model/')   # SavedModel format

# Carregar -- não é preciso recriar a arquitectura
loaded_model = tf.keras.models.load_model('model.keras')

# Guardar apenas os pesos
model.save_weights('weights.h5')

# Carregar pesos (a arquitectura já tem de existir)
model = MLP()
model.load_weights('weights.h5')

# Checkpoints automáticos durante o treino
checkpoint_cb = tf.keras.callbacks.ModelCheckpoint(
    'checkpoints/epoch_{epoch:02d}.keras',
    save_best_only=True,
)
model.fit(train_dataset, epochs=10, callbacks=[checkpoint_cb])`}
        />
      </div>

      <hr style={S.divider} />

      {/* 12. Cheat sheet */}
      <div style={S.section}>
        <h2 style={S.h2}>12. Cheat Sheet: PyTorch ↔ TensorFlow / Keras</h2>
        <p style={S.p}>
          Uma tabela de referência rápida para traduzir entre os dois frameworks ao escrever ou ler código.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Conceito</th>
              <th style={S.th}>PyTorch</th>
              <th style={S.th}>TensorFlow / Keras</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Criar tensor</td>
              <td style={S.td}><code>torch.tensor([1,2,3])</code></td>
              <td style={S.td}><code>tf.constant([1,2,3])</code></td>
            </tr>
            <tr>
              <td style={S.td}>Variável treinável</td>
              <td style={S.td}><code>torch.tensor(x, requires_grad=True)</code></td>
              <td style={S.td}><code>tf.Variable(x)</code></td>
            </tr>
            <tr>
              <td style={S.td}>Reshape</td>
              <td style={S.td}><code>x.reshape(...)</code> / <code>x.view(...)</code></td>
              <td style={S.td}><code>tf.reshape(x, ...)</code></td>
            </tr>
            <tr>
              <td style={S.td}>Multiplicação de matrizes</td>
              <td style={S.td}><code>x @ y</code> / <code>torch.matmul</code></td>
              <td style={S.td}><code>x @ y</code> / <code>tf.matmul</code></td>
            </tr>
            <tr>
              <td style={S.td}>Mover para GPU</td>
              <td style={S.td}><code>x.to('cuda')</code></td>
              <td style={S.td}><code>with tf.device('/GPU:0'): ...</code></td>
            </tr>
            <tr>
              <td style={S.td}>Tensor → NumPy</td>
              <td style={S.td}><code>x.numpy()</code> (precisa estar em CPU)</td>
              <td style={S.td}><code>x.numpy()</code></td>
            </tr>
            <tr>
              <td style={S.td}>Diferenciação automática</td>
              <td style={S.td}><code>loss.backward()</code> + <code>x.grad</code></td>
              <td style={S.td}><code>tf.GradientTape()</code> + <code>tape.gradient()</code></td>
            </tr>
            <tr>
              <td style={S.td}>Definir modelo</td>
              <td style={S.td}><code>class M(nn.Module)</code> com <code>forward()</code></td>
              <td style={S.td}><code>tf.keras.Sequential</code> / subclass <code>Model</code> com <code>call()</code></td>
            </tr>
            <tr>
              <td style={S.td}>Camada densa</td>
              <td style={S.td}><code>nn.Linear(in, out)</code></td>
              <td style={S.td}><code>layers.Dense(out)</code></td>
            </tr>
            <tr>
              <td style={S.td}>Activação ReLU</td>
              <td style={S.td}><code>nn.ReLU()</code> / <code>F.relu(x)</code></td>
              <td style={S.td}><code>layers.Activation('relu')</code> / <code>activation='relu'</code></td>
            </tr>
            <tr>
              <td style={S.td}>Dropout</td>
              <td style={S.td}><code>nn.Dropout(p)</code></td>
              <td style={S.td}><code>layers.Dropout(rate)</code></td>
            </tr>
            <tr>
              <td style={S.td}>Batch Normalization</td>
              <td style={S.td}><code>nn.BatchNorm1d/2d(num_features)</code></td>
              <td style={S.td}><code>layers.BatchNormalization()</code></td>
            </tr>
            <tr>
              <td style={S.td}>Loss (classificação)</td>
              <td style={S.td}><code>nn.CrossEntropyLoss()</code></td>
              <td style={S.td}><code>SparseCategoricalCrossentropy(from_logits=True)</code></td>
            </tr>
            <tr>
              <td style={S.td}>Optimizador Adam</td>
              <td style={S.td}><code>torch.optim.Adam(params, lr=...)</code></td>
              <td style={S.td}><code>tf.keras.optimizers.Adam(learning_rate=...)</code></td>
            </tr>
            <tr>
              <td style={S.td}>Passo de treino</td>
              <td style={S.td}><code>zero_grad → forward → backward → step</code></td>
              <td style={S.td}><code>model.fit(...)</code> ou <code>GradientTape</code> manual</td>
            </tr>
            <tr>
              <td style={S.td}>Pipeline de dados</td>
              <td style={S.td}><code>Dataset</code> + <code>DataLoader</code></td>
              <td style={S.td}><code>tf.data.Dataset</code> (<code>.batch().shuffle().prefetch()</code>)</td>
            </tr>
            <tr>
              <td style={S.td}>Modo treino/avaliação</td>
              <td style={S.td}><code>model.train()</code> / <code>model.eval()</code></td>
              <td style={S.td}><code>training=True/False</code> em <code>call()</code></td>
            </tr>
            <tr>
              <td style={S.td}>Guardar modelo</td>
              <td style={S.td}><code>torch.save(model.state_dict(), ...)</code></td>
              <td style={S.td}><code>model.save('model.keras')</code></td>
            </tr>
            <tr>
              <td style={S.td}>Carregar modelo</td>
              <td style={S.td}><code>model.load_state_dict(torch.load(...))</code></td>
              <td style={S.td}><code>tf.keras.models.load_model(...)</code></td>
            </tr>
          </tbody>
        </table>
        <div style={S.section}>
          <h2 style={S.h2}>13. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <p style={{ ...S.p, marginBottom: 0 }}>
              <strong>Conclusão do curso:</strong> os 13 módulos cobriram desde o neurónio individual
              até modelos federados e geração de imagens com VAEs/GNNs — e agora tens o vocabulário de
              código necessário, em ambos os frameworks, para implementar qualquer um destes conceitos
              num projecto real.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
