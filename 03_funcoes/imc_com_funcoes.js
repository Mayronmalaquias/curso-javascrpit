function calcularImc(peso, altura) {
    return peso / Math.pow(altura,2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'abaixo do peso';
    } else if(imc <= 25) {
        return 'Peso normal';
    } else if(imc <= 30) {
        return 'Acima do peso';
    } else if(imc <= 40) {
        return 'Obeso';
    } else {
        return 'Obsidade grave';
    }
}

// main
(function () {
    const altura = 1.75;
    const peso = 75;
    const imc = calcularImc(peso,altura);
    console.log(classificarImc(imc));
})();

