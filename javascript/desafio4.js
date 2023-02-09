/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];


const numberOfcategories = booksByCategory.length;
console.log(` Numero de categorias da livraria: ${numberOfcategories}`)
let numberOfBooksPerCategory = []
let numberOfAuthors = []

function getNumberOfBooksPerCategory() { 

    for (let i = 0; i < numberOfcategories; i++) {
        numberOfBooksPerCategory.push(booksByCategory[i].books.length)
        
    }
    
    for (let i = 0; i < numberOfcategories; i++){
        console.log(`A categoria ${booksByCategory[i].category} tem ${numberOfBooksPerCategory[i]} livros `)

    }
    
    
    
}

function countAuthors() {
    
    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(numberOfAuthors.indexOf(book.author) == -1){
                numberOfAuthors.push(book.author)
            }
            
        }
}
console.log(`Numero de autores: ${numberOfAuthors.length}`)
}


function getBooksPerAuthor(author){
    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author == author){
                console.log(`O autor ${book.author} tem:  ${book.title}`)
            }
            
        }


}
}


getNumberOfBooksPerCategory()
countAuthors()
getBooksPerAuthor('Augusto Cury')
console.log(__dirname)
console.log(__filename)