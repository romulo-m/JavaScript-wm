function digitize(n) {
    let inicio = (""+n).split('');
    let reverso = [];
    for (let i = inicio.length - 1; i >= 0; i--) {
      reverso[i] = parseInt(inicio[i]);
    }
    return reverso
  }

  console.log(digitize(1, 2, 3 ))