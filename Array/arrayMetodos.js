const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //massa quebrou o carro! (remove o ultimo elemento do array)
console.log(pilotos);

pilotos.push('Verstappen') //adiciona um novo item ao final do array
console.log(pilotos);

pilotos.shift() // remove o primeiro item do array
console.log(pilotos);

pilotos.unshift('Hamilton') // adiciona um item no começo
console.log(pilotos);


//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);

//remover
pilotos.splice(3, 1) //massa quebrou de novo :(
console.log(pilotos);

//método slice cria um novo array!!!
const algunsPilotos1 = pilotos.slice(2) // a partir do indice ele pega o resto
console.log(algunsPilotos1);