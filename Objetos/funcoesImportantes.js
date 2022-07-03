const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa)) 
console.log(Object.entries(pessoa)) // Chave e Valor

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave,valor]) => {     //Recurso destructuring
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', { //definir algumas propriedades
    enumerable: true,  //deixa aparecer na lista
    writable: false,    //não permite alterar
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'  //tentando fazer alteração
console.log(pessoa.dataNascimento) //não vai alterar e pega o valor definido no método


// Object.assign (ES 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)