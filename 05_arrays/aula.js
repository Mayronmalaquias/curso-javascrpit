const alunos = ['João', 'Victor', 'Marina']
console.log(alunos)
alunos.push('renan')
alunos.push(10)
console.log(alunos)
alunos.pop()
alunos.shift()
console.log(alunos)

const notas = [];
notas.push(5)
notas.push(5)
notas.push(5)
notas.push(5)
notas.push(5)
notas.push(5)
console.log(notas.length)
let soma = 0
for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
}

const media = soma / notas.length
console.log(media)

const nome = 'Vitor johansen Guerra'

for (let i = 0; i < nome.length; i++){
    console.log(nome[i])
}