/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

var saldoFinal = {
    receitas: [100,200,300,400,500],
    despesas: [100,200,300,400]
}

function fluxoTotal(saldo){
    let totalReceitas = 0 
    let totalDespesas = 0 
    
    

    for(let i = 0; i < saldo.receitas.length; i++){
        totalReceitas += saldo.receitas[i];
    }
    
    for(let i = 0; i < saldo.despesas.length; i++){
        totalDespesas += saldo.despesas[i];
    }
    let total = totalReceitas - totalDespesas
    
    if(total >= 0){
        console.log(`A família tem o saldo Positivo de R$ ${total.toFixed(2)}`)
    } else {
        console.log(`A família tem o saldo Negativo de R$ ${total.toFixed(2)}`)
    }

}

fluxoTotal(saldoFinal)
