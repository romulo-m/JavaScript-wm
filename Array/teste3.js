class Curso {
    constructor(frente, duracao){
    this.frente = frente
    this.duracao = duracao
    }
}

const curso = new Curso('dados', '2 meses')

const aluno = {
    nomeAluno: 'Hudson',
    turma: 'T17',
    curso: {...curso}
}

console.log(aluno)

const facilitador = {
    nomeFac: 'Léo',
    frente: 'Tech'
}

const turma = {
    dadosTurma: {...aluno, ...facilitador, ...curso}
}

console.log(turma)
