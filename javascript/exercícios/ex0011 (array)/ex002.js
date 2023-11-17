let valores = [2, 7, 4, 1, 8, 3]

/* Forma incorreta e trabalhosa
de mostrar os valores:

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5]) */

/* Uma forma melhor de amostragem seria
utilizar a estrutura de repetição "for": 

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

/* Uma maneira ainda mais simplificada
seria utilizar a fórmula abaixo: */

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// for ([variavel relativa ao indice] in [variavel composta])