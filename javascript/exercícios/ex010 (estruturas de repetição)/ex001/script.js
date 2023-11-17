function contar() {
    let inicio = document.getElementById(`txtinicio`)
    let fim = document.getElementById(`txtfim`)
    let passo = document.getElementById(`txtpasso`)
    let resultado = document.getElementById(`resultado`)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = `Não foi possível realizar a contagem!`
        window.alert(`[ERRO] Por favor, insira os dados!`)
    } else {
        resultado.innerHTML = `Contando: <br/>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert(`Por favor, insira um intervalo válido para a contagem!`)
        }
        if (i < f) { 
            // CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{27A1}`
        }
        } else {
            // CONTAGEM DECRESCENTE
            for(let c = i; c >= f; c -= p) {
                resultado.innerHTML = `${c} \u{27A1}`
            }
        }
        resultado.innerHTML += `${f}\u{1F3C1}`
    }
}