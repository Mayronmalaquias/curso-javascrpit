const altura = 1.75;
const peso = 75;
const imc = peso / Math.pow(altura,2);
console.log('Seu IMC é ', imc.toFixed(2));

if (imc < 18.5) {
    console.log('abaixo do peso');
} else if(imc <= 25) {
    console.log('Peso normal');
} else if(imc <= 30) {
    console.log ('Acima do peso');
} else if(imc <= 40) {
    console.log ('Obeso');
} else {
    console.log ('Obsidade grave');
}