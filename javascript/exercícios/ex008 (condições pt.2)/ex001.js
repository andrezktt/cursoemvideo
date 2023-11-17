var idade = 12
console.log(`Você tem ${idade} anos?`)
if (idade < 16) {
    console.log(`Então não precisa votar!`)
}   else if (idade < 18 || idade > 67) {
    console.log(`Então, o voto é opcional!`)
}   else if (idade >= 18) {
    console.log(`Então, o voto é Obrigatório!`)
}