//
//
//

const prompt = require("prompt-sync")()

// const numero = parseInt(prompt("Digite um número: "))

// let fatorial = 1

// for (let iterator = numero; iterator >= 1; iterator--) {
//     fatorial *= iterator 
// }

// let iterator = numero

// while (iterator >= 1) {
//     fatorial *= iterator
//     iterator--
// }

// let iterator = numero
// do {
//     fatorial *= iterator
//     iterator--
// } while (iterator >=1);

// console.log(`${numero}! = ${fatorial}`)

// explicação fatorial = 1 => iterator = 5 =>

//exemplo do do while

do {
    var resposta = prompt('Eu sou bonito? ').toLowerCase()
} while (resposta !== 'sim')
console.log('obrigado!')