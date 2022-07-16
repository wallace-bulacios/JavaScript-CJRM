// Strings
console.log('Hello World!!!')

const EMAIL = 'wallace.bulacios@gmail.com'

console.log(EMAIL)

// concatenação de Strings
const FIRSTNAME = 'Wallace'
const LASTNAME = 'Bulacios'

const FULLNAME = FIRSTNAME + ' ' + LASTNAME;

console.log(FULLNAME)

// acessando caracteres
console.log(FULLNAME[2])


// comprimento de uma String
// length - informa o comprimento (tamanho) de uma String
console.log(FULLNAME.length)

// métodos de string
// método é um função que esta associado a um objeto ou tipo de dado obs.: todo método tem que ter () no final
//toUpperCase
console.log(FULLNAME.toUpperCase())

const RESULT = FULLNAME.toLowerCase()

console.log(RESULT, FULLNAME)

const INDEX = EMAIL.indexOf('@')

console.log(INDEX)
