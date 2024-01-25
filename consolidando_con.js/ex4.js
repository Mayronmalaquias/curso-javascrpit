const {gets, print} = require('./funcoes_auxiliares2');

const N = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;

for (let i = 0; i < N; i++) {
  let numero = parseInt(gets());

  if (numero % 2 === 0 && numero > maiorNumeroPar) {
     maiorNumeroPar = numero;
  } else if (numero % 2 === 1 && numero < menorNumeroImpar) {
      menorNumeroImpar = numero;
    }
  // TODO: Criar a condição e regras para identificar também o "menorNumeroImpar".
}
print("Maior número par: " + maiorNumeroPar)
print('Menor número impar: ' + menorNumeroImpar)
       
// TODO: Imprima as saídas conforme o enunciado deste desafio.