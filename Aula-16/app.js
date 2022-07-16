// Arrays

let heroes = ['Batman', 'Catwoman', 'Iron Man']
console.log(heroes[3-2])

// sobrescrevendo item de array

heroes[2] = 'Spider-Man'
console.log(heroes)

const age = [31, 25, 39, 40]
console.log(age[2])

const randomArray = ['Parker', 'Diana', 19, 18] // não faz muito sentido pois array são usados para armazenar dados que tenham uma relação
console.log(randomArray)

// Métodos de Arrays
    // length retorna a quantidade de itens que tem o array
    console.log(heroes.length)

    // metodo join - retorna uma nova string com todos os itens do array concatenados e separados por virgula,
    const joinHeros = heroes.join()
    console.log(joinHeros)

    //  pode receber um argumento para ser usado como separador por exemplo '|'
    const joinHeroes = heroes.join('|')
    console.log(joinHeroes)

    // metodo indexOf - retorna a primeira ocorrencia do indice informado.
    const age1 = [31, 25, 39, 40, 25]
    const indexOF25 = age1.indexOf(25)
    console.log(indexOF25)

    // metodo concat - usado para concatenar 2 arrays
    const moreHeroes = heroes.concat(['Superman', 'Wolverine'])
    console.log(moreHeroes)

    // metodo push - adiciona conteudo no final do array este metodo altera o valor original do array
    const pushToHeroes = heroes.push('Cyclops', 'Hulk')
    console.log(pushToHeroes, heroes)

    // metodo pop - remove o ultimo iten de um array e remove-o este tambem modifica o array original
    const popHeroes = heroes.pop()
    console.log(popHeroes, heroes)

    
