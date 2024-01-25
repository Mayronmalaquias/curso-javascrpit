class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        this.imc = this.peso / (this.altura * this.altura);
        return this.imc;
    }

    classificarImc() {
    this.calcularImc()
    if (this.imc < 18.5) {
        return 'abaixo do peso';
    } else if(this.imc <= 25) {
        return 'Peso normal';
    } else if(this.imc <= 30) {
        return 'Acima do peso';
    } else if(this.imc <= 40) {
        return 'Obeso';
    } else {
        return 'Obsidade grave';
    } 
    }
}

const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose);
console.log(`José tem  o imc de: ${jose.calcularImc().toFixed(2)}`);
console.log(jose.classificarImc());
console.log(jose);
