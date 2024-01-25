class Carro {
    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    valorPercurso (Km, precoCombustivel) {
        const valorPercurso = (Km / this.gastoMedio) * precoCombustivel
        console.log(`valor gasto no percurso é de ${valorPercurso}`)
    }
}

const vitara = new Carro('Vitara', 'branco', 12);
vitara.valorPercurso(70, 5);
console.log(vitara)

