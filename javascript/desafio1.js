/* Desafio:
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F*/

let notasNumericas = [90, 67,34,22]

function converterNotas(notas){
    let notasConvertidas = []
        for(let i = 0; i < notas.length; i++){
            if(notas[i] < 60){
                notasConvertidas.push("F")
            } else if(notas[i] >= 60 && notas[i] <= 69){
                notasConvertidas.push("D")
            } else if(notas[i] >= 70 && notas[i] <= 79){
                notasConvertidas.push("C")
            } else if(notas[i] >= 70 && notas[i] <= 79){
                notasConvertidas.push("C")
            } else if(notas[i] >= 80 && notas[i] <= 89){
                notasConvertidas.push("B")
            } else if(notas[i] >= 90){
                notasConvertidas.push("A")
            }

            }
console.log(`Suas notas: ${notasNumericas} foram convertidas em: ${notasConvertidas}`)
}

converterNotas(notasNumericas)

