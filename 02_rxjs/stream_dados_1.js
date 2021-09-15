function gerarNumeros(fn) {
  return {
    iniciar(fn) {
      let num = 0;
      const i = setInterval(() => {
        fn(num++);
      }, 1000);

      return {
        parar() {
          clearInterval(i);
        },
      };
    },
  };
}

const temp1 = gerarNumeros();
const exec1 = temp1.iniciar((n) => {
  console.log(`#1: ${n * 2}`);
}, 1000);

const temp2 = gerarNumeros();
const exec2 = temp2.iniciar((n) => {
  console.log(`#2: ${n + 100}`);
}, 2000);

setTimeout(() => {
  exec1.parar();
  exec2.parar();
}, 10000);
