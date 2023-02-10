//1:  quando clicar em abrir a janela, o sistema deve excluir a classe invisible 

//2: quando apertar ESC, o sistema deve inserir a classe invisible novamente.

const openModalButton = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

openModalButton.onclick = function(){
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        modalWrapper.classList.add('invisible')
    }
})
    

