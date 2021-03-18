const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() // remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen') // adiciona no fim do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // adicina no começo do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2,0,'Bottas','Massa') // adiciona 2 elementos a partir da posicao 2
console.log(pilotos)

// remover
pilotos.splice(3,1) // remove 1 elemento a partir da posicao 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array a partir da posicao 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // novo array a partir da posicao 1 até a 3, a ultima posicao nao entra
console.log(algunsPilotos2)