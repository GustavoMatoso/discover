/*
        Crie uma função que receba uma string em celsius ou fahrenheit
        e faça a transformação de uma unidade para outra 
                C = (F - 32) * 5/9 
                F = C * 9/5 + 32
*/

// SERÁ CHAMADA NO FINAL UMA STRING CONTENDO UMA TEMPERATURA DO TIPO ex:  20C ou 86F

// identificar se a temperatura esta em celsius ou fahrenheit.
function identificador(temperatura){
    let unidade;
    if(temperatura.toUpperCase().includes('C')){
        unidade = 'CELSIUS'
   } else if(temperatura.toUpperCase().includes('F')){
        unidade = 'FAHRENHEIT'
    }
// Verificador de erros

    if(unidade != 'CELSIUS' && unidade !='FAHRENHEIT'){
        throw new Error('Temperatura invalida, use C ou F após o número')
        
    }

// fluxo ideal: Passo 1: Remover a letra da string e a transformar em um numero.

    const graus = temperatura.toUpperCase().replace("F"," ").replace("C", " ")
  
// Passo 2. Fazer as funcoes conversoras
        let unidadeConvertida; 
        let tempConvertida = 0;
        if(unidade === 'CELSIUS'){
            tempConvertida = graus * 9/5 + 32;
            unidadeConvertida = 'F'
            
        } else if(unidade === 'FAHRENHEIT'){
            tempConvertida = (graus - 32) * 5/9 
            unidadeConvertida = 'C'
            
        }
        
        return (`A temperatura ${temperatura} está em ${unidade} e se for convertida resultará em: ${tempConvertida}º${unidadeConvertida}`)
        
}

try{
    console.log(identificador('32C'))
    console.log(identificador('89.6f'))
    console.log(identificador('22e'))
//após pegar o erro, o sistema é interrompido. 
} catch(error){
    console.log(error.message)
    
}






