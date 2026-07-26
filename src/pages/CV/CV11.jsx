import React from 'react';
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
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(29,78,216,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  card: { background: 'var(--bg-primary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1rem' },
  cardLabel: { fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', display: 'inline-block', padding: '0.15rem 0.6rem', borderRadius: 6, color, background: 'rgba(29,78,216,0.1)' },
};

function CodePanel({ title, code }) {
  return (
    <div style={S.card}>
      {title && <span style={S.cardLabel}>{title}</span>}
      <div style={{ ...S.code, margin: title ? '0.5rem 0 0' : 0 }}>{code}</div>
    </div>
  );
}

export default function CV11() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cv" style={S.back}><ArrowLeft size={16} /> Voltar</Link>

        <div style={S.tag}>MÓDULO 11</div>
        <h1 style={S.h1}>OpenCV — Implementação Prática</h1>

        {/* 1. Introdução */}
        <div style={S.section}>
          <h2 style={S.h2}>1. Introdução ao OpenCV</h2>
          <p style={S.p}>
            A <strong>OpenCV</strong> (Open Source Computer Vision Library) é uma biblioteca open-source
            escrita em C++ com bindings para Python, Java e outras linguagens. Existe desde 1999 e continua
            a ser a ferramenta de referência para processamento de imagem e vídeo "clássico" — leitura/escrita
            de ficheiros, transformações geométricas, filtros, detecção de features, vídeo em tempo real — e
            cada vez mais também serve de "cola" para correr modelos de deep learning através do módulo
            <code>cv2.dnn</code>.
          </p>
          <p style={S.p}>
            A instalação em Python faz-se com <code>pip</code>. Existem várias variantes do pacote:
            <code>opencv-python</code> (módulos principais), <code>opencv-contrib-python</code> (inclui
            módulos extra como SIFT, que esteve patenteado e foi movido para "contrib" durante anos) e
            versões <code>headless</code> (sem dependências de GUI, úteis em servidores/Docker).
          </p>
          <CodePanel code={`# Instalação (terminal)
pip install opencv-python
# ou, para teres acesso a SIFT, trackers extra, etc.
pip install opencv-contrib-python

# Em servidores sem ambiente gráfico (sem cv2.imshow):
pip install opencv-python-headless`} />

          <p style={S.p}>
            A primeira coisa a saber sobre a OpenCV — e a fonte de mais bugs subtis em quem começa — é que
            ela <strong>lê e representa imagens a cores em BGR, não em RGB</strong>. Isto é uma decisão
            histórica (assim eram os formatos de câmaras e codecs quando a biblioteca foi criada nos anos
            90) que se mantém por compatibilidade. Sempre que misturares OpenCV com matplotlib, PIL,
            torchvision ou qualquer biblioteca que assuma RGB, é preciso converter explicitamente com
            <code>cv2.cvtColor</code>.
          </p>
          <CodePanel code={`import cv2
import numpy as np

# Ler uma imagem do disco -> array NumPy (H, W, 3) em BGR, dtype uint8
img = cv2.imread('foto.jpg')
print(img.shape, img.dtype)   # ex: (480, 640, 3) uint8

# Ler como grayscale directamente
img_gray = cv2.imread('foto.jpg', cv2.IMREAD_GRAYSCALE)
print(img_gray.shape)         # (480, 640) -- sem canal de cor

# Mostrar numa janela (bloqueia até premir uma tecla)
cv2.imshow('Imagem', img)
cv2.waitKey(0)
cv2.destroyAllWindows()

# Guardar no disco -- a extensão do ficheiro define o codec
cv2.imwrite('saida.png', img)

# === BGR vs RGB ===
# OpenCV usa BGR por defeito. Para mostrar com matplotlib (que espera RGB):
import matplotlib.pyplot as plt
img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
plt.imshow(img_rgb)
plt.axis('off')
plt.show()

# Se esquecermos a conversão, as cores ficam trocadas
# (vermelho <-> azul) -- erro clássico!`} />
          <div style={S.note}>
            Regra de ouro: <strong>sempre que a imagem "sai" da OpenCV para outra biblioteca</strong>
            (matplotlib, PIL, PyTorch) ou <strong>entra</strong> na OpenCV vinda de outra biblioteca,
            confirma se precisas de <code>cv2.cvtColor(img, cv2.COLOR_BGR2RGB)</code> ou
            <code>cv2.COLOR_RGB2BGR</code>.
          </div>
        </div>

        <hr style={S.divider} />

        {/* 2. Operações básicas */}
        <div style={S.section}>
          <h2 style={S.h2}>2. Operações Básicas: Pixels, Resize, Transformações Afins</h2>
          <p style={S.p}>
            Como visto no Módulo 1, uma imagem é simplesmente um tensor <code>(H, W, C)</code> — em OpenCV/
            NumPy, isso traduz-se directamente em indexação e <em>slicing</em> de arrays. A primeira
            dimensão é a <strong>altura (linhas, eixo y)</strong> e a segunda é a <strong>largura
            (colunas, eixo x)</strong> — outra fonte comum de confusão para quem vem de coordenadas
            (x, y) tradicionais.
          </p>
          <CodePanel code={`import cv2
import numpy as np

img = cv2.imread('foto.jpg')   # shape (H, W, 3), BGR

# Aceder a um pixel (linha=100, coluna=50) -> [B, G, R]
pixel = img[100, 50]
print(pixel)   # ex: [120, 80, 200]

# Alterar um pixel
img[100, 50] = [0, 0, 255]   # vermelho puro em BGR

# Crop -- "recortar" uma região com slicing (y1:y2, x1:x2)
recorte = img[50:200, 100:300]

# Acesso a um único canal (0=B, 1=G, 2=R)
canal_azul = img[:, :, 0]

# Flip horizontal, vertical e ambos
flip_h = cv2.flip(img, 1)    # espelho horizontal
flip_v = cv2.flip(img, 0)    # espelho vertical
flip_hv = cv2.flip(img, -1)  # ambos`} />

          <p style={S.p}>
            O <strong>redimensionamento</strong> é uma das operações mais frequentes — quase todos os
            modelos de deep learning (Módulos 3-9) esperam um input de tamanho fixo. A escolha do método
            de interpolação afecta tanto a qualidade visual como, em pipelines de inferência, a precisão
            do modelo (treinar com uma interpolação e fazer inferência com outra pode introduzir
            distribution shift subtil).
          </p>
          <CodePanel code={`# Redimensionar para um tamanho fixo (largura, altura)
resized = cv2.resize(img, (224, 224))

# Métodos de interpolação:
# - INTER_NEAREST : mais rápido, "blocos" -- usado p/ máscaras de segmentação
# - INTER_LINEAR  : default, bom compromisso (bilinear)
# - INTER_CUBIC   : mais lento, melhor qualidade ao aumentar
# - INTER_AREA    : melhor para reduzir (downsampling), evita aliasing
small = cv2.resize(img, (224, 224), interpolation=cv2.INTER_AREA)
big   = cv2.resize(img, None, fx=2.0, fy=2.0, interpolation=cv2.INTER_CUBIC)

# Manter aspect ratio: redimensionar pela largura, calcular a altura
h, w = img.shape[:2]
new_w = 640
new_h = int(h * (new_w / w))
resized_ratio = cv2.resize(img, (new_w, new_h))`} />

          <p style={S.p}>
            <strong>Transformações afins</strong> (rotação, translação, escala, shear) são representadas
            por uma matriz 2×3 que a OpenCV aplica a cada pixel com <code>cv2.warpAffine</code>. A função
            <code>cv2.getRotationMatrix2D</code> constrói essa matriz a partir de um centro, ângulo e
            factor de escala — útil tanto para visualização como para data augmentation geométrico
            (Módulo 5).
          </p>
          <CodePanel code={`h, w = img.shape[:2]
center = (w // 2, h // 2)

# Matriz de rotação: centro, ângulo (graus, anti-horário), escala
M_rot = cv2.getRotationMatrix2D(center, angle=30, scale=1.0)
rotated = cv2.warpAffine(img, M_rot, (w, h))

# Translação manual: matriz [[1,0,tx],[0,1,ty]]
tx, ty = 50, -30
M_trans = np.float32([[1, 0, tx], [0, 1, ty]])
translated = cv2.warpAffine(img, M_trans, (w, h))

# Combinar rotação + escala + translação numa só chamada:
M_combo = cv2.getRotationMatrix2D(center, angle=15, scale=0.8)
M_combo[:, 2] += [tx, ty]   # adicionar translação à matriz
result = cv2.warpAffine(img, M_combo, (w, h))`} />
          <div style={S.note}>
            Estas mesmas operações — flip, rotação, crop, resize — são exactamente as transformações de
            <strong> data augmentation</strong> discutidas no Módulo 5. A diferença é que, em pipelines de
            treino, normalmente usamos <code>torchvision.transforms</code> ou <code>albumentations</code>,
            que internamente fazem chamadas muito semelhantes a estas.
          </div>
        </div>

        <hr style={S.divider} />

        {/* 3. Espaços de cor e thresholding */}
        <div style={S.section}>
          <h2 style={S.h2}>3. Espaços de Cor e Thresholding</h2>
          <p style={S.p}>
            Para além de RGB/BGR, a OpenCV suporta dezenas de espaços de cor. O <strong>HSV</strong> (Hue,
            Saturation, Value) é particularmente útil porque separa a <em>cor</em> (Hue) da
            <em> intensidade</em> (Value), tornando muito mais fácil segmentar objectos por cor de forma
            robusta a variações de iluminação — algo que em RGB é difícil porque a iluminação afecta os
            três canais simultaneamente.
          </p>
          <CodePanel code={`# Conversões de espaço de cor
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
hsv  = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
rgb  = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

# Segmentar uma cor (ex: objectos vermelhos) em HSV
# H em [0,179], S e V em [0,255] na convenção da OpenCV
lower_red = np.array([0, 120, 70])
upper_red = np.array([10, 255, 255])
mask = cv2.inRange(hsv, lower_red, upper_red)

# Aplicar a máscara à imagem original
red_objects = cv2.bitwise_and(img, img, mask=mask)`} />

          <p style={S.p}>
            O <strong>thresholding</strong> (limiarização) — referido no Módulo 2 como uma das primeiras
            técnicas de segmentação — converte uma imagem em grayscale numa imagem binária, separando
            "primeiro plano" de "fundo" com base na intensidade. A OpenCV oferece thresholding global fixo,
            <strong> adaptativo</strong> (o limiar varia por região, útil com iluminação não uniforme) e o
            método de <strong>Otsu</strong>, que escolhe automaticamente o limiar óptimo a partir do
            histograma da imagem (minimiza a variância intra-classe).
          </p>
          <CodePanel code={`gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Threshold simples: pixels > 127 -> 255 (branco), resto -> 0
ret, binary = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)

# Threshold adaptativo: limiar calculado por vizinhança local
# (bom para imagens com iluminação desigual, ex: documentos digitalizados)
adaptive = cv2.adaptiveThreshold(
    gray, 255,
    cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
    cv2.THRESH_BINARY,
    blockSize=11,   # tamanho da vizinhança (ímpar)
    C=2,            # constante subtraída à média ponderada
)

# Método de Otsu -- escolhe o limiar automaticamente
# (combina-se com THRESH_BINARY via OR; o valor 0 é ignorado)
ret_otsu, otsu = cv2.threshold(
    gray, 0, 255,
    cv2.THRESH_BINARY + cv2.THRESH_OTSU
)
print(f"Limiar escolhido pelo Otsu: {ret_otsu}")

# Boa prática: suavizar antes do Otsu para reduzir ruído
blurred = cv2.GaussianBlur(gray, (5, 5), 0)
ret2, otsu_blur = cv2.threshold(blurred, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)`} />
          <div style={S.note}>
            Liga ao Módulo 2: o thresholding (especialmente Otsu) é frequentemente o primeiro passo de
            pipelines clássicas de pré-processamento — por exemplo, antes de aplicar OCR ou
            <code>cv2.findContours</code> (Secção 5).
          </div>
        </div>

        <hr style={S.divider} />

        {/* 4. Filtragem e morfologia */}
        <div style={S.section}>
          <h2 style={S.h2}>4. Filtragem e Operações Morfológicas</h2>
          <p style={S.p}>
            O Módulo 2 introduziu os filtros de convolução clássicos — blur, sharpen, Sobel, Laplaciano —
            como kernels fixos aplicados manualmente, em contraste com os kernels <em>aprendíveis</em> das
            CNNs (Módulo 3). A OpenCV implementa estes filtros directamente como funções optimizadas, mas
            também permite aplicar <strong>kernels arbitrários</strong> com <code>cv2.filter2D</code>,
            tornando explícita a ligação entre "filtro clássico" e "convolução".
          </p>
          <CodePanel code={`# --- Suavização (blur) ---
gaussian = cv2.GaussianBlur(img, (5, 5), sigmaX=0)   # reduz ruído gaussiano
median   = cv2.medianBlur(img, 5)                     # bom contra "salt & pepper"

# --- Kernel custom com filter2D ---
# Sharpen: realça bordas subtraindo uma versão suavizada
sharpen_kernel = np.array([
    [ 0, -1,  0],
    [-1,  5, -1],
    [ 0, -1,  0],
])
sharpened = cv2.filter2D(img, -1, sharpen_kernel)

# --- Sobel: gradientes em x e y (detecção de bordas direccional) ---
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
sobel_x = cv2.Sobel(gray, cv2.CV_64F, dx=1, dy=0, ksize=3)
sobel_y = cv2.Sobel(gray, cv2.CV_64F, dx=0, dy=1, ksize=3)
sobel_mag = cv2.magnitude(sobel_x, sobel_y)   # magnitude do gradiente

# --- Laplaciano: segunda derivada, realça regiões de mudança rápida ---
laplacian = cv2.Laplacian(gray, cv2.CV_64F, ksize=3)`} />

          <p style={S.p}>
            As <strong>operações morfológicas</strong> tratam a imagem binária (após thresholding) como um
            conjunto de formas, e aplicam um "elemento estruturante" (kernel) para a erodir, dilatar ou
            combinar ambas. São essenciais para limpar ruído, fechar buracos em máscaras de segmentação
            ou separar objectos próximos antes de <code>cv2.findContours</code>.
          </p>
          <CodePanel code={`kernel = np.ones((5, 5), np.uint8)

# Erosão: "encolhe" regiões brancas -- remove ruído pequeno
eroded = cv2.erode(binary, kernel, iterations=1)

# Dilatação: "expande" regiões brancas -- preenche pequenos buracos
dilated = cv2.dilate(binary, kernel, iterations=1)

# morphologyEx combina erosão+dilatação em operações comuns:
opening = cv2.morphologyEx(binary, cv2.MORPH_OPEN, kernel)   # erode -> dilate
                                                               # remove ruído pequeno
closing = cv2.morphologyEx(binary, cv2.MORPH_CLOSE, kernel)  # dilate -> erode
                                                               # fecha buracos pequenos
gradient = cv2.morphologyEx(binary, cv2.MORPH_GRADIENT, kernel)
                                                               # contorno = dilate - erode`} />
          <div style={S.note}>
            Liga ao Módulo 2: estes filtros e operações morfológicas são exemplos directos de
            "processamento clássico de imagem" — não há nada aprendido, são operações determinísticas
            sobre vizinhanças de pixels. Compara com o Sobel/Laplaciano "manuais" da Secção 4 do Módulo 2.
          </div>
        </div>

        <hr style={S.divider} />

        {/* 5. Edges e contornos */}
        <div style={S.section}>
          <h2 style={S.h2}>5. Detecção de Edges e Contornos</h2>
          <p style={S.p}>
            O algoritmo de <strong>Canny</strong> (Módulo 2) combina suavização gaussiana, cálculo de
            gradientes (Sobel), supressão de não-máximos e thresholding por histerese (dois limiares) num
            único pipeline robusto de detecção de bordas. Em OpenCV, isto é uma única chamada de função.
          </p>
          <CodePanel code={`gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
blurred = cv2.GaussianBlur(gray, (5, 5), 0)

# Canny: limiar inferior e superior para a histerese
edges = cv2.Canny(blurred, threshold1=50, threshold2=150)`} />

          <p style={S.p}>
            A partir de uma máscara binária (de threshold ou Canny), <code>cv2.findContours</code> extrai
            as fronteiras de regiões conectadas como listas de pontos. Cada contorno pode depois ser
            analisado: a sua <strong>área</strong> (<code>cv2.contourArea</code>), o seu
            <strong> bounding box</strong> (<code>cv2.boundingRect</code>), perímetro, convex hull, etc.
            Isto é a base de tarefas como contar objectos numa imagem ou isolar regiões de texto antes de
            OCR.
          </p>
          <CodePanel code={`gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
_, binary = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

# RETR_EXTERNAL: só contornos externos (ignora "buracos")
# CHAIN_APPROX_SIMPLE: comprime pontos colineares (poupa memória)
contours, hierarchy = cv2.findContours(
    binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE
)

print(f"Encontrados {len(contours)} contornos")

output = img.copy()
objects_count = 0

for cnt in contours:
    area = cv2.contourArea(cnt)
    if area < 100:          # filtrar ruído/contornos minúsculos
        continue

    objects_count += 1

    # Bounding box: x, y, largura, altura
    x, y, w, h = cv2.boundingRect(cnt)
    cv2.rectangle(output, (x, y), (x + w, y + h), (0, 255, 0), 2)

    # Desenhar o contorno em si
    cv2.drawContours(output, [cnt], -1, (255, 0, 0), 2)

    cv2.putText(output, f"area={int(area)}", (x, y - 10),
                cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 1)

print(f"Total de objectos detectados: {objects_count}")`} />
          <div style={S.note}>
            Casos de uso típicos: <strong>contar objectos</strong> numa esteira industrial (peças, frutos,
            células ao microscópio), <strong>isolar regiões de texto</strong> como pré-processamento de OCR
            (binarizar → encontrar contornos → recortar cada região e passá-la a um modelo OCR), ou
            <strong> medir dimensões</strong> de objectos a partir do bounding box.
          </div>
        </div>

        <hr style={S.divider} />

        {/* 6. Features e keypoints */}
        <div style={S.section}>
          <h2 style={S.h2}>6. Features e Keypoints: ORB, SIFT e Matching</h2>
          <p style={S.p}>
            O Módulo 2 introduziu o <strong>SIFT</strong> (Scale-Invariant Feature Transform) e o conceito
            de descritores locais — pontos-chave invariantes a escala, rotação e (parcialmente) iluminação,
            usados antes das CNNs para tarefas como reconhecimento de objectos, stitching de panoramas e
            SLAM. O <strong>ORB</strong> (Oriented FAST and Rotated BRIEF) é uma alternativa muito mais
            rápida e gratuita (sem patentes), pelo que é frequentemente preferido em aplicações em tempo
            real.
          </p>
          <CodePanel code={`gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# --- ORB: rápido, livre de patentes, bom para tempo real ---
orb = cv2.ORB_create(nfeatures=500)
kp_orb, des_orb = orb.detectAndCompute(gray, None)

# --- SIFT: mais robusto, requer opencv-contrib-python ---
# (desde a versão 4.4 do OpenCV está nos módulos principais)
sift = cv2.SIFT_create()
kp_sift, des_sift = sift.detectAndCompute(gray, None)

print(f"ORB encontrou {len(kp_orb)} keypoints")
print(f"SIFT encontrou {len(kp_sift)} keypoints")

# Visualizar keypoints sobre a imagem
img_kp = cv2.drawKeypoints(
    img, kp_orb, None,
    color=(0, 255, 0),
    flags=cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS,
)`} />

          <p style={S.p}>
            O <strong>feature matching</strong> compara os descritores de duas imagens para encontrar
            correspondências — a base de aplicações como reconhecimento de objectos por template,
            stitching de imagens (panoramas) ou cálculo de homografias para realidade aumentada. A OpenCV
            oferece o <code>BFMatcher</code> (brute-force, simples e exacto) e o
            <code>FlannBasedMatcher</code> (aproximado, muito mais rápido com muitos descritores).
          </p>
          <CodePanel code={`img1 = cv2.imread('objeto.jpg', cv2.IMREAD_GRAYSCALE)
img2 = cv2.imread('cena.jpg', cv2.IMREAD_GRAYSCALE)

orb = cv2.ORB_create(nfeatures=1000)
kp1, des1 = orb.detectAndCompute(img1, None)
kp2, des2 = orb.detectAndCompute(img2, None)

# BFMatcher com distância de Hamming (apropriada para descritores
# binários como ORB/BRIEF). crossCheck=True valida em ambos sentidos.
bf = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True)
matches = bf.match(des1, des2)

# Ordenar por qualidade do match (menor distância = melhor)
matches = sorted(matches, key=lambda m: m.distance)

# Desenhar os 30 melhores matches lado a lado
result = cv2.drawMatches(
    img1, kp1, img2, kp2, matches[:30], None,
    flags=cv2.DrawMatchesFlags_NOT_DRAW_SINGLE_POINTS,
)

# --- Alternativa: FlannBasedMatcher com SIFT (descritores float) ---
sift = cv2.SIFT_create()
kp1s, des1s = sift.detectAndCompute(img1, None)
kp2s, des2s = sift.detectAndCompute(img2, None)

index_params = dict(algorithm=1, trees=5)   # FLANN_INDEX_KDTREE
search_params = dict(checks=50)
flann = cv2.FlannBasedMatcher(index_params, search_params)

knn_matches = flann.knnMatch(des1s, des2s, k=2)

# Ratio test de Lowe: filtra matches ambíguos
good = [m for m, n in knn_matches if m.distance < 0.75 * n.distance]
print(f"Matches bons após ratio test: {len(good)}")`} />
          <div style={S.note}>
            Liga ao Módulo 2: SIFT/ORB são "feature extractors" hand-crafted — comparáveis, em espírito, às
            features que uma CNN aprende automaticamente (Módulo 6-7). Continuam relevantes em tarefas onde
            não há dados de treino suficientes, ou onde precisão geométrica exacta (homografias) é mais
            importante do que robustez semântica.
          </div>
        </div>

        <hr style={S.divider} />

        {/* 7. Faces e cv2.dnn */}
        <div style={S.section}>
          <h2 style={S.h2}>7. Detecção de Faces e o Módulo cv2.dnn</h2>
          <p style={S.p}>
            Antes das CNNs dominarem a detecção de objectos (Módulo 9), o método de referência para
            detecção de faces era o <strong>algoritmo de Viola-Jones</strong>, baseado em
            <strong> Haar cascades</strong> — classificadores em cascata que combinam milhares de features
            simples (diferenças de intensidade entre regiões rectangulares) treinadas com AdaBoost. A
            OpenCV inclui modelos Haar pré-treinados prontos a usar.
          </p>
          <CodePanel code={`# Carregar um classificador Haar pré-treinado
# (ficheiros .xml incluídos na instalação da OpenCV)
face_cascade = cv2.CascadeClassifier(
    cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
)

gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# detectMultiScale procura faces em várias escalas
faces = face_cascade.detectMultiScale(
    gray,
    scaleFactor=1.1,    # quanto a imagem "encolhe" entre escalas
    minNeighbors=5,     # quantas detecções vizinhas confirmam uma face
    minSize=(30, 30),   # tamanho mínimo da face
)

output = img.copy()
for (x, y, w, h) in faces:
    cv2.rectangle(output, (x, y), (x + w, y + h), (0, 255, 0), 2)

print(f"{len(faces)} face(s) detectada(s)")`} />

          <p style={S.p}>
            As Haar cascades são rápidas mas pouco robustas a poses, oclusões e iluminação variável — os
            modelos modernos (Módulo 9: YOLO, Faster R-CNN, DETR) são muito mais precisos. A OpenCV permite
            correr esses modelos <strong>directamente</strong>, sem PyTorch/TensorFlow, através do módulo
            <code>cv2.dnn</code>, que carrega pesos em formatos como ONNX, Caffe ou Darknet e executa
            inferência optimizada em CPU/GPU — útil para deployment leve, sem as dependências pesadas de um
            framework de deep learning completo.
          </p>
          <CodePanel code={`# Carregar um modelo de detecção de objectos em formato ONNX
# (ex: um YOLO exportado, ou um modelo de classificação)
net = cv2.dnn.readNet('modelo.onnx')

# Pré-processar a imagem -> "blob": resize, normalização,
# BGR->RGB opcional, reordenar para NCHW
blob = cv2.dnn.blobFromImage(
    img,
    scalefactor=1 / 255.0,     # normalizar para [0,1]
    size=(640, 640),           # tamanho de input do modelo
    mean=(0, 0, 0),
    swapRB=True,                # converte BGR -> RGB
    crop=False,
)

net.setInput(blob)
outputs = net.forward()         # forward pass -- output bruto do modelo

print(outputs.shape)   # depende da arquitectura (ex: (1, N, 85) para YOLO)

# Para usar GPU (se a OpenCV foi compilada com suporte CUDA):
# net.setPreferableBackend(cv2.dnn.DNN_BACKEND_CUDA)
# net.setPreferableTarget(cv2.dnn.DNN_TARGET_CUDA)`} />
          <div style={S.note}>
            <code>cv2.dnn</code> não treina modelos — apenas executa inferência sobre pesos já treinados
            (tipicamente exportados de PyTorch via ONNX, conforme Módulo 9). É uma opção popular quando se
            quer um binário leve e portátil, sem instalar PyTorch/TensorFlow num dispositivo embebido.
          </div>
        </div>

        <hr style={S.divider} />

        {/* 8. Vídeo e webcam */}
        <div style={S.section}>
          <h2 style={S.h2}>8. Vídeo e Webcam</h2>
          <p style={S.p}>
            <code>cv2.VideoCapture</code> abstrai tanto ficheiros de vídeo como webcams (índice 0 = câmara
            por defeito), permitindo ler frames num loop e aplicar qualquer pipeline de processamento
            "frame a frame" — exactamente as mesmas operações vistas nas secções anteriores, mas em tempo
            real.
          </p>
          <CodePanel code={`cap = cv2.VideoCapture(0)   # 0 = webcam por defeito
                            # ou cv2.VideoCapture('video.mp4') para um ficheiro

if not cap.isOpened():
    raise RuntimeError("Não foi possível abrir a câmara")

while True:
    ret, frame = cap.read()
    if not ret:
        break   # fim do vídeo ou erro de leitura

    # --- Pipeline de processamento por frame ---
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    edges = cv2.Canny(gray, 100, 200)

    cv2.imshow('Original', frame)
    cv2.imshow('Edges', edges)

    # ESC para sair
    if cv2.waitKey(1) & 0xFF == 27:
        break

cap.release()
cv2.destroyAllWindows()`} />

          <p style={S.p}>
            Para gravar o resultado processado num ficheiro, usa-se <code>cv2.VideoWriter</code> com um
            codec (FourCC), framerate e dimensões coincidentes com os frames produzidos.
          </p>
          <CodePanel code={`cap = cv2.VideoCapture('input.mp4')

fps = cap.get(cv2.CAP_PROP_FPS)
w = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
h = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

fourcc = cv2.VideoWriter_fourcc(*'mp4v')
out = cv2.VideoWriter('output.mp4', fourcc, fps, (w, h))

face_cascade = cv2.CascadeClassifier(
    cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Pipeline: detectar faces em cada frame e desenhar bounding boxes
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.1, 5)
    for (x, y, fw, fh) in faces:
        cv2.rectangle(frame, (x, y), (x + fw, y + fh), (0, 255, 0), 2)

    out.write(frame)   # gravar o frame processado

cap.release()
out.release()`} />
          <div style={S.note}>
            Em produção, processar <em>todos</em> os frames com modelos pesados pode não ser viável em
            tempo real — uma estratégia comum é correr a detecção a cada N frames e usar tracking
            (<code>cv2.TrackerCSRT</code>, optical flow) nos frames intermédios.
          </div>
        </div>

        <hr style={S.divider} />

        {/* 9. Integração com PyTorch */}
        <div style={S.section}>
          <h2 style={S.h2}>9. Integração com Deep Learning: OpenCV + PyTorch/torchvision</h2>
          <p style={S.p}>
            Esta secção é a síntese do módulo: uma pipeline completa que usa a OpenCV para
            <strong> ler e visualizar</strong> imagens, e o PyTorch/torchvision (Módulos 6-9) para
            <strong> inferência</strong> com um modelo pré-treinado. É exactamente o tipo de código que
            sustenta aplicações reais — uma câmara de segurança, uma app de classificação, um robot.
          </p>
          <p style={S.p}>
            O ponto crítico é o <strong>pré-processamento</strong>: a OpenCV lê em BGR, formato
            <code>(H, W, C)</code> com valores <code>uint8</code> [0, 255]; o PyTorch espera RGB, formato
            <code>(C, H, W)</code> (CHW), valores float normalizados — tipicamente com a média/desvio-padrão
            do ImageNet, conforme discutido no Módulo 5 (normalização) e Módulo 8 (transfer learning).
          </p>
          <CodePanel code={`import cv2
import torch
import torchvision
from torchvision import transforms
from torchvision.models import resnet18, ResNet18_Weights

# 1. Carregar modelo pré-treinado (Módulo 8: transfer learning)
weights = ResNet18_Weights.IMAGENET1K_V1
model = resnet18(weights=weights)
model.eval()   # modo avaliação -- desliga Dropout/BatchNorm em modo treino

class_names = weights.meta["categories"]   # 1000 classes do ImageNet

# 2. Ler a imagem com OpenCV (BGR, HWC, uint8)
img_bgr = cv2.imread('animal.jpg')

# 3. Pré-processamento: BGR->RGB, resize, normalizar, HWC->CHW, -> tensor
preprocess = transforms.Compose([
    transforms.ToTensor(),                      # HWC uint8 -> CHW float [0,1]
    transforms.Resize((224, 224)),
    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],             # estatísticas do ImageNet
        std=[0.229, 0.224, 0.225],
    ),
])

img_rgb = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2RGB)   # OpenCV -> formato esperado
input_tensor = preprocess(img_rgb)                    # (3, 224, 224)
input_batch = input_tensor.unsqueeze(0)               # (1, 3, 224, 224) -- batch de 1

# 4. Inferência (sem calcular gradientes)
with torch.no_grad():
    output = model(input_batch)                       # (1, 1000) logits
    probs = torch.softmax(output, dim=1)[0]
    top_prob, top_idx = torch.max(probs, dim=0)

label = class_names[top_idx.item()]
confidence = top_prob.item()

# 5. Desenhar o resultado de volta na imagem original com OpenCV
text = f"{label}: {confidence:.1%}"
cv2.putText(
    img_bgr, text, (10, 30),
    cv2.FONT_HERSHEY_SIMPLEX, 1.0, (0, 255, 0), 2,
)
cv2.rectangle(img_bgr, (5, 5), (img_bgr.shape[1] - 5, 45), (0, 255, 0), 2)

cv2.imwrite('resultado.jpg', img_bgr)
print(text)`} />

          <p style={S.p}>
            Um pipeline análogo, mas com um modelo de <strong>detecção</strong> (Módulo 9, ex.
            <code>fasterrcnn_resnet50_fpn</code>), produz várias bounding boxes em vez de uma única
            classe — desenhamos cada uma com <code>cv2.rectangle</code> e <code>cv2.putText</code>:
          </p>
          <CodePanel code={`from torchvision.models.detection import (
    fasterrcnn_resnet50_fpn, FasterRCNN_ResNet50_FPN_Weights
)

weights = FasterRCNN_ResNet50_FPN_Weights.DEFAULT
model = fasterrcnn_resnet50_fpn(weights=weights)
model.eval()
categories = weights.meta["categories"]

img_bgr = cv2.imread('rua.jpg')
img_rgb = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2RGB)

# Faster R-CNN aceita listas de tensores CHW float [0,1] -- sem
# normalização ImageNet manual (o modelo já a inclui internamente)
to_tensor = transforms.ToTensor()
input_tensor = to_tensor(img_rgb)

with torch.no_grad():
    predictions = model([input_tensor])[0]

boxes = predictions['boxes']     # (N, 4) -- x1, y1, x2, y2
labels = predictions['labels']   # (N,)
scores = predictions['scores']   # (N,)

CONF_THRESHOLD = 0.7
for box, label, score in zip(boxes, labels, scores):
    if score < CONF_THRESHOLD:
        continue
    x1, y1, x2, y2 = box.int().tolist()
    class_name = categories[label.item()]

    cv2.rectangle(img_bgr, (x1, y1), (x2, y2), (0, 255, 0), 2)
    cv2.putText(
        img_bgr, f"{class_name} {score:.2f}", (x1, y1 - 8),
        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2,
    )

cv2.imwrite('deteccoes.jpg', img_bgr)`} />
          <div style={S.note}>
            Esta é a pipeline canónica de visão computacional aplicada: <strong>OpenCV para I/O e
            visualização</strong> + <strong>PyTorch/torchvision para o "cérebro"</strong> (modelos das
            secções 6-9 do curso). Combina-se naturalmente com a Secção 8: aplicar este bloco a cada frame
            de vídeo dá um detector de objectos em tempo real.
          </div>
        </div>

        <hr style={S.divider} />

        {/* 10. Cheat sheet */}
        <div style={S.section}>
          <h2 style={S.h2}>10. Cheat Sheet: Funções OpenCV Essenciais</h2>
          <p style={S.p}>
            Uma tabela de referência rápida com as funções mais usadas ao longo deste módulo.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Função</th>
                  <th style={S.th}>O que faz</th>
                  <th style={S.th}>Exemplo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['cv2.imread', 'Lê uma imagem do disco (BGR, uint8)', "img = cv2.imread('foto.jpg')"],
                  ['cv2.imwrite', 'Guarda uma imagem no disco', "cv2.imwrite('out.png', img)"],
                  ['cv2.imshow / waitKey', 'Mostra imagem numa janela', "cv2.imshow('w', img); cv2.waitKey(0)"],
                  ['cv2.cvtColor', 'Converte espaço de cor (BGR↔RGB, HSV, gray)', 'cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)'],
                  ['cv2.resize', 'Redimensiona a imagem', 'cv2.resize(img, (224,224))'],
                  ['cv2.getRotationMatrix2D / warpAffine', 'Rotação/translação/transformação afim', 'M = cv2.getRotationMatrix2D(c, 30, 1.0)'],
                  ['cv2.flip', 'Espelha horizontal/vertical', 'cv2.flip(img, 1)'],
                  ['cv2.threshold / adaptiveThreshold', 'Binarização (fixa, adaptativa, Otsu)', 'cv2.threshold(g,0,255,cv2.THRESH_OTSU)'],
                  ['cv2.GaussianBlur / medianBlur', 'Suavização para reduzir ruído', 'cv2.GaussianBlur(img,(5,5),0)'],
                  ['cv2.Sobel / Laplacian', 'Gradientes / segunda derivada (edges)', 'cv2.Sobel(g, cv2.CV_64F, 1, 0)'],
                  ['cv2.erode / dilate / morphologyEx', 'Operações morfológicas em máscaras binárias', 'cv2.morphologyEx(b, cv2.MORPH_OPEN, k)'],
                  ['cv2.Canny', 'Detecção de bordas (Canny)', 'cv2.Canny(gray, 50, 150)'],
                  ['cv2.findContours / drawContours', 'Extrai e desenha contornos', 'cv2.findContours(b, RETR_EXTERNAL, ...)'],
                  ['cv2.boundingRect / contourArea', 'Bounding box / área de um contorno', 'x,y,w,h = cv2.boundingRect(cnt)'],
                  ['cv2.ORB_create / SIFT_create', 'Detectores de keypoints/descritores', 'kp, des = orb.detectAndCompute(g, None)'],
                  ['cv2.BFMatcher / FlannBasedMatcher', 'Matching de descritores entre imagens', 'bf.match(des1, des2)'],
                  ['cv2.CascadeClassifier', 'Detecção via Haar cascades (ex: faces)', 'face_cascade.detectMultiScale(gray)'],
                  ['cv2.dnn.readNet / blobFromImage', 'Carrega e corre modelos DL (ONNX/Caffe)', "net = cv2.dnn.readNet('m.onnx')"],
                  ['cv2.VideoCapture / VideoWriter', 'Lê/escreve vídeo ou webcam frame a frame', 'cap = cv2.VideoCapture(0)'],
                  ['cv2.rectangle / putText / drawMatches', 'Desenhar boxes, texto e matches numa imagem', 'cv2.rectangle(img,(x,y),(x2,y2),(0,255,0),2)'],
                ].map(([fn, what, ex]) => (
                  <tr key={fn}>
                    <td style={{ ...S.td, fontWeight: 700, color, fontFamily: 'monospace', fontSize: '0.82rem' }}>{fn}</td>
                    <td style={S.td}>{what}</td>
                    <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        </div>
      </div>
      );
}
