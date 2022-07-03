class Armazem {
    constructor() {
      this.arr = [];
    }
  
    add(element) {
      this.arr.push(element);
    }
  }

const armazem = new Armazem()

class Pilha extends Armazem {

    constructor(...arg) {
        super()
        this.arr = arg
    }

    empilha(...elemento) {
        this.arr = this.arr.reverse()
        this.arr.push(...elemento)
        this.arr = this.arr.reverse()
    }

    desempilha() {
        return this.arr.pop()        
    }

}

const pilha = new Pilha(1,2,3,4,5)
pilha.empilha(6)

console.log(pilha)

class Fila extends Armazem {
    constructor(...arg) {
        super()
        this.arr = arg
    }

    chegada(...elemento) {
        return this.arr.push(...elemento)
    }

    partida() {
        return this.arr.shift()
    }
}

const fila = new Fila(12,34,18,15)
console.log(fila.chegada(30))
console.log(fila)
console.log(fila.partida())
console.log(fila)
