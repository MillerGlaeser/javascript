function verificar() {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
         window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/crianca-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/homem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso-m.png')
            }
            } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/crianca-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/mulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. `
        res.appendChild(img)
    }
}
