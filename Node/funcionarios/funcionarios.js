const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
import axios from 'axios'

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

// lista de 500 nomes => Mulher, chinesa, com o menor salário?!
function testandoImportacao() {
    axios.get(url).then(response => {
        const funcionarios = response.data
        
    
        const func = funcionarios
            .filter(chineses)
            .filter(mulheres)
            .reduce(menorSalario)
    
        console.log(func)
    })
}

testandoImportacao()




