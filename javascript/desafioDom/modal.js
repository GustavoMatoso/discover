//1:  quando clicar em abrir a janela, o sistema deve excluir a classe invisible 

//2: quando apertar ESC, o sistema deve inserir a classe invisible novamente.

const abrir = document.querySelector('openModal');

abrir.addEventListener('click', () => {abrir.classList.remove('bg-purple-700')});