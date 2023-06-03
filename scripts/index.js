const textoParaPostar = document.querySelector('#post-text')
const botaoParaPostar = document.querySelector('.button-post-action')
const publicacoes = document.querySelector('#publicacoes')
textoParaPostar.rows = 1

textoParaPostar.addEventListener('input', ajustarAltura)

function ajustarAltura() {
  textoParaPostar.style.height = '22px'
  textoParaPostar.style.height = textoParaPostar.scrollHeight + 'px'

  const lineHeight = parseFloat(getComputedStyle(textoParaPostar).lineHeight)
  const marginTop = parseFloat(getComputedStyle(textoParaPostar).marginTop)
  const alturaTotal = textoParaPostar.scrollHeight + marginTop
  const linhas = Math.floor(alturaTotal / lineHeight) + 1

  textoParaPostar.rows = linhas

  if (textoParaPostar.value.trim().length > 0) {
    botaoParaPostar.disabled = false
  } else {
    botaoParaPostar.disabled = true
  }
}

botaoParaPostar.onclick = () => {
  publicarPost(textoParaPostar.value)
  textoParaPostar.value = ''
  ajustarAltura()
}

// const limiteCaracteres = 250

// function verLimiteCaracteres() {}

function publicarPost(texto) {
  const publicacao = document.createElement('div')
  publicacao.classList.add('publicacao') 
  publicacao.innerHTML =
    `
    <img src="imgs/profile-image.jpg" class="profile-image">
    <div class="publi-conteudo">
        <div class="user-info">
            <span class="nickname">ML</span>
            <span class="username">@m4rcusml</span>
        </div>
        <div class="publi-texto">
            ${texto}
        </div>
        <div class="nav-publi">
            <div class="nav-publi-buttons">
                
            </div>
        </div>
    </div>
    `
  publicacoes.insertBefore(publicacao, publicacoes.firstChild)
}