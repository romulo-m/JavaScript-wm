class MeuArray {
    constructor(...elementos) {
      this.arr = [...elementos];
    }
  
    push(...elementos) {
      this.arr = [...this.arr, ...elementos];
    }
  
    pop() {
      const topo = this.arr.pop();
      return topo;
    }
  
    map(callback) {
      //criando cópia para que arr não possa ser modificado (sem efeitos colaterais)
      const copia = this.arr;
      const result = [];
      for (let elemento of copia) {
        result.push(callback(elemento));
      }
  
      return result;
    }

  
    /*
    insira aqui sua implementação de forEach, filter e reduce


    */
  }
  
  //instanciando objeto MeuArray
  const meuArr = new MeuArray("Olá", "Mundo!");
  //testando implementação do MAP
  const gritando = meuArr.map(el=> el.toUpperCase());
  console.log(gritando);

  meuArr.arr.forEach(elemento => {
      console.log(elemento)
  })

  

