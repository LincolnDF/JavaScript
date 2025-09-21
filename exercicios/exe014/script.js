function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var bom = window.document.getElementById('bom')
    var hora = data.getHours()
    var min = data.getMinutes()
    

    msg.innerHTML = `Agora são ${hora}h ${min}min`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'img/manha.png'
        document.body.style.background = '#C5564E'
        document.body.h1 = bom.innerHTML = ('Bom Dia!')
    } else if (hora >= 12 && hora <= 18) {
        //boa tade
        img.src = 'img/tarde.png'
        document.body.style.background = '#a7d6deff'
        document.body.h1 = bom.innerHTML = ('Boa Tarde!')
    } else {
        // boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#191126'
        document.body.h1 = bom.innerHTML = ('Boa Noite!')
    }
}

