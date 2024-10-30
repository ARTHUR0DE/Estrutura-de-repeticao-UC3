const prompt = require("prompt-sync")()

let frutas = ["maçã", "banana", "laranja", "uva", "melancia", "abacaxi", "manga", "morango", "kiwi", "pera"]

//let verificaçao = prompt("Digite uma fruta: ")

// if (frutas.includes(verificaçao)) {
//     console.log(`${verificaçao} está na lista`)
// } else {
//     console.log(`${verificaçao} não Está na lista`)
// }

const fruta = prompt('Digite uma fruta: ').toLowerCase()

let encontrado = false

for (let i = 0; i < frutas.length; i++) {
    let temFruta = fruta === frutas[i]
    if (temFruta) {
        encontrado = true
        break
    } 
    
}

if (encontrado) {
    console.log(`A fruta ${fruta} está no array.`)
} else {
    console.log(`A fruta ${fruta} não está no array.`)
}