// é primo ou não?

const prompt = require("prompt-sync")()

const numero = parseInt(prompt("Digite um número: "))

let divisores = 0

// for (let i = 1; i <= numero && divisores <= 2; i++) {
//     let ehDivisivel = numero % i === 0
//     if (ehDivisivel) divisores++ 
// }

let i = 1
while (i <= numero && divisores <=2) {
    let ehDivisivel = numero % i === 0
    if (ehDivisivel) divisores++
    i++
}

//verificar se é primo
let ehPrimo = divisores === 2
if (ehPrimo) {
    console.log("É primo")
} else {
    console.log("Não é primo")
}

