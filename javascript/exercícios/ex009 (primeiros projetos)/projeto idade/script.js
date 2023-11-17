function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var txtano = document.getElementById(`txtano`)
    var res = document.getElementById(`res`)

    if (txtano.value.length == 0 || Number(txtano.value) > ano) {
    window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    }   else {
        var txtsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(txtano.value)
        var genero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)
        if (txtsex[0].checked) {
            genero = `homem`
            if (idade >= 0 && idade < 15) {
                //criança
                img.setAttribute(`src`, `m-child.png`)
                document.body.style.background=`#edf2fb`
            } else if (idade < 25) {
                //jovem
                img.setAttribute(`src`, `m-young.png`)
                document.body.style.background=`#d7e3fc`
            } else if (idade < 60) {
                //adulto
                img.setAttribute(`src`, `m-adult.png`)
                document.body.style.background=`#c1d3fe`
            } else {
                //idoso
                img.setAttribute(`src`, `m-old.png`)
                document.body.style.background=`#abc4ff`
            }
        } else if (txtsex[1].checked) {
            genero = `mulher`
            if (idade >= 0 && idade < 15) {
                //criança
                img.setAttribute(`src`, `f-child.png`)
                document.body.style.background=`#ffdab9`
            } else if (idade < 25) {
                //jovem
                img.setAttribute(`src`, `f-young.png`)
                document.body.style.background=`#fbc4ab`
            } else if (idade < 60) {
                //adulto
                img.setAttribute(`src`, `f-adult.png`)
                document.body.style.background=`#f8ad9d`
            } else {
                //idoso
                img.setAttribute(`src`, `f-old.png`)
                document.body.style.background=`#f08080`
            }
        }
        res.style.textAlign = `center`
        res.innerHTML = `Detectamos <strong>${genero}</strong> com  <strong>${idade} anos</strong>`
        res.appendChild(img)
        }
    }