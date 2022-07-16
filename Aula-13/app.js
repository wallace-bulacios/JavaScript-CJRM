const postTitle = 'É bolacha ou biscoito'
const postAuthor = 'Matheus Saad'
const postComments = 15

// usando concatenação
const postMessage = 'O post "' + postTitle + '" do ' + postAuthor + ', tem ' + postComments + ' comentários'

console.log(postMessage)

//escape caractere usando \

    console.log('Você manja do filme "As Branquelas"?')
    //ou
    console.log('Você manja do filme \'As Branquelas\'?')
    //ou
    console.log("Você manja do filme 'As Branquelas'?")

// usando templates strings
const postMessages1 = `O post "${postTitle}", do autor ${postAuthor}, tem ${postComments} comentários. `
 
console.log(postMessages1)

// criando templates HTML
const html = `
    <h2>${postTitle}</h2>
    <p>${postAuthor}</p>
    <span>Este post tem ${postComments} comentários</span>
    `
 console.log(html)