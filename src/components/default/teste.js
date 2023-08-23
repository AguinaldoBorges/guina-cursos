const numeros = [1, 2, 3]

const id = 1

let numeros2 = numeros.reduce((acumulador, atual, index, numeros) => {
    if (index === id) {
        numeros[index] = 5
    }
    return numeros
})

console.log(numeros2);