const questions = ["Qual seu nome?", "Qual sua profissão?", "Quantos anos você tem?", "O que você quer aprender?"];

const answers = [];

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " -> ")
}
ask()
process.stdin.on('data', (data) => {
    answers.push(data.toString().trim())
    if (questions.length > answers.length) {
        ask(answers.length)
    } else {
        process.exit()
    };
});

process.on('exit', () => {
    console.log(`
        Bacana cara!

       Seu nome é ${answers[0]}

       Sua profissão é ${answers[1]}

       Você tem ${answers[2]} anos

       O que você quer aprender é: ${answers[3]}
       
       Tchau, até mais!!
    
    `)
})

