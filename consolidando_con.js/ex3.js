const{gets, print} = require('./funcoes_auxiliares3')

function calularImposto (valor) {
    if (valor >= 0 && valor <= 1100){
        const valorRecebido = valor * 0.05;
        valor -= valorRecebido
        return valor;
    } else if (valor > 1100 && valor <=2500) {
        const valorRecebido = valor * 0.1;
        valor -= valorRecebido
        return valor;
    } else if (valor > 2500) {
        const valorRecebido = valor * 0.15;
        valor -= valorRecebido;
        return valor;
    }
}

(function (){
    const salarioBruto = gets();
    const salarioImposto = calularImposto(salarioBruto);
    const beneficio = gets();
    const salario = salarioImposto + beneficio;
    print('salario final é: ' + salario);
})()