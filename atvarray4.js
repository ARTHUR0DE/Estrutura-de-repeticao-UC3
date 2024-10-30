const cores = [ "vermelho", "azul", "verde", "amarelo", "preto"]

let indice = -1

for (let i = 0; i < cores.length; i++) {
    if (cores[i] === "verde") {
        indice = i 
        break
    }
}

console.log(`O indice da cor verde é ${indice}`)