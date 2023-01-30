/*
        Crie uma função que receba uma string em celsius ou fahrenheit
        e faça a transformação de uma unidade para outra 
                C = (F - 32) * 5/9 
                F = C * 9/5 + 32
*/


var temperatura = {
    graus: 13,
    unidade: "celsius"
}

function celsiusPfahrenheit(num){
    let convertido = num * 9/5 + 32;
    return convertido
    
}

function fahrenheitPcelsius(num){
    let convertido = (num - 32) * 5/9 
    return convertido
    
}

function conversor(objeto){
    let convertido = 0
    if(temperatura.unidade == "celsius"){
        convertido = celsiusPfahrenheit(temperatura.graus)
        console.log(`A temperatura ${temperatura.graus}º está em Celsius e sua conversão para Fahrenheit resulta: ${convertido}ºF`)
    } else{
        if(temperatura.unidade == "fahrenheit"){
            convertido = fahrenheitPcelsius(temperatura.graus)
            console.log(`A temperatura ${temperatura.graus}º está em Fahrenheit e sua conversão para Celsius resulta: ${convertido}ºC`)

        }
    }

}

conversor()
