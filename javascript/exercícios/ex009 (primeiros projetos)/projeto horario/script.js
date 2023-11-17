function carregar() {
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`img`)
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora} horas</strong>`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = `imagens/manha.jpg`
        document.body.style.background = `#BF9E75`
    }   else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = `imagens/tarde.jpg`
        document.body.style.background = `#B27C60`
    }   else {
        //BOA NOITE!
        img.src = `imagens/noite.jpg`
        document.body.style.background = `#012340`
    }   
}