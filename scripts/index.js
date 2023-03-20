function autoGrow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}

function createPost(nickname, username, conteudo) {
    let posttext = document.getElementById('post-text')
    let post = document.createElement('article')
    post.className = 'post'

    post.innerHTML = 
        `
        <div class="area-img">
            <img src="imagens/profile.jpg" alt="" class="img">
        </div>
        <div class="post-content-container">
            <div class="post-top">
                <div class="owner-post">
                    <span class="perfil-nickname">${nickname}</span>
                    <span class="perfil-username">@${username}</span>
                </div>
                <button type="button" class="btn3pontinhos">...<span></span></button>
            </div>
            <div id="post-content">
                ${conteudo}
            </div>
            <div class="post-interacoes">
                <button type="button" class="btn-interacao">
                    <span></span>
                    <img src="imagens/comment-icon-32.png" alt="">
                </button>
                <button type="button" class="btn-interacao">
                    <span></span>
                    <img src="imagens/heart-icon-32.png" alt="">
                </button>
            </div>
        </div>
        `
    
    
    return post
}

function postar() {
    let nick
    let user
    let conteudo = document.getElementById('post-text')

    if(conteudo.value != '') {
        let postsArea = document.getElementById('posts')
        let post = createPost("Nick aleatório", "user.aleatorio123", conteudo.value)
        postsArea.appendChild(post)
    }
}