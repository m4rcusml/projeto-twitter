function autoGrow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}
function createPost() {
    let posttext = document.getElementById('post-text')
    let post = document.createElement('article')
    post.className = 'post'

    post.innerHTML = 
        '<div class="area-img"><img src="imagens/profile.jpg" alt="" class="img"></div><div class="post-content-container"><div class="post-top"><div class="owner-post"><span class="perfil-nickname">Usuário</span><span class="perfil-username">@usuario123</span></div><button type="button" class="btn3pontinhos">...<span></span></button></div><div id="post-content">Carregando...</div><div class="post-interacoes"><button type="button" class="btn-interacao"><span></span><img src="imagens/comment-icon-32.png" alt=""></button><button type="button" class="btn-interacao"><span></span><img src="imagens/heart-icon-32.png" alt=""></button></div></div>'
    
    
    return post
}

function postar() {
    let postsArea = document.getElementById('posts')
    let post = createPost()
    postsArea.appendChild(post)
}