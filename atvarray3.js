

// const numero = [2, 4, 6, 8, 10]

// let multiplicacao = 0

// for (let i = 0; i < numero.length; i++) {
//     multiplicacao * 2
// }
// console.log(`A multiplicação dos elementos é: ${multiplicacao}`);


const numeros = [2, 4, 6, 8, 10];

const novosValores = [];

for (let i = 0; i < numeros.length; i++) {
    novosValores[i] = numeros[i] * 2; 
}
console.log('Novo array:', novosValores);