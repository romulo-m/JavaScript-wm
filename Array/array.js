console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Jose') // adiciona um novo elemento no array

console.log(aprovados.length) //tamanho

aprovados.sort() // mistura os itens do array
console.log(aprovados)

delete aprovados[1] // excluir um elemento do array (vira undefined)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(2, 1, 'elemento1', 'elemento2') // => (a partir de um indice, exclui, adiciona) > parametros do método splice
console.log(aprovados)