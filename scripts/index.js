function autoGrow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}
function createInteracoes() {
    let maxInteracoes = 2
    let postInteracoes = document.createElement('div')
    postInteracoes.className = 'post-interacoes'
        let btnInteracao = [
            document.createElement('button'), 
            document.createElement('button')
        ]
        for(let i = 0; i < maxInteracoes; i++) {
            btnInteracao[i].setAttribute('type', 'button')
            btnInteracao[i].className = 'btn-interacao'
            btnInteracao[i].innerHTML = '<span></span>'
        }
        let img = [
            document.createElement('img'),
            document.createElement('img')
        ]
        img[0].src = 'imagens/comment-icon-32.png'
        img[1].src = 'imagens/heart-icon-32.png'
        btnInteracao[0].appendChild(img[0])
        btnInteracao[1].appendChild(img[1])
    
    for(let i = 0; i < maxInteracoes; i++) {
        postInteracoes.appendChild(btnInteracao[i])
    }

    return postInteracoes
}
function createPost() {
    let post = document.createElement('article')
    post.className = 'post'

        let areaImg = document.createElement('div')
        areaImg.className = 'area-img'
            let img = document.createElement('img')
            img.src = 'imagens/profile.jpg'
            img.className = 'img'
        areaImg.appendChild(img)
    post.appendChild(areaImg)

        let postContentContainer = document.createElement('div')
        postContentContainer.className = 'post-content-container'

            let postTop = document.createElement('div')
            postTop.className = 'post-top'
                let ownerPost = document.createElement('div')
                ownerPost.className = 'owner-post'
                    let nickname = document.createElement('span')
                    nickname.className = 'perfil-nickname'
                    let username = document.createElement('span')
                    username.className = 'perfil-username'
                ownerPost.appendChild(nickname)
                ownerPost.appendChild(username)
                let btn3pontinhos = document.createElement('button')
                btn3pontinhos.setAttribute('type', 'button')
                btn3pontinhos.id = 'btn3pontinhos'
                btn3pontinhos.innerHTML = '...<span></span>'
            postTop.appendChild(ownerPost)
            postTop.appendChild(btn3pontinhos)
        
            let postContent = document.createElement('div')
            postContent.className = 'post-content'
            postTop.appendChild(postContent)
        postContentContainer.appendChild(postTop)
        postContentContainer.appendChild(postContent)

            let postInteracoes = createInteracoes()
        postContentContainer.appendChild(postInteracoes)
    post.appendChild(postContentContainer)

    return post
}

function postar() {
    
}