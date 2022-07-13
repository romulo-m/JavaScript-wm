require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'  // o freeze não deixa mudar
console.log(MinhaApp.nome)