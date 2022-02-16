function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >= 5 && hora < 12) {
        //BOM DIA 
        img.src = 'img/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'img/tarde.png'
        document.body.style.background = '#b9846f'
     } else {
         //BOA NOITE
        img.src = 'img/noite.png'
        document.body.style.background = '#515154'
        }
    }
        
