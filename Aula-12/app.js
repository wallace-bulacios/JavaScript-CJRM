// inteiros e decimais
const RADIUS = 10
const PI = 3.14

console.log(RADIUS, PI)

// operadores aritméticos
console.log(10/2)

const REMINDER = 5 % 2 // % resto de uma operação

console.log(REMINDER)

const AREA = PI * RADIUS ** 2

console.log(AREA)

// ordem de operações
    // 1- Parenteses
    // 2 - Espoente ou raizes
    // 3 - multiplicação ou divisão
    // 4 - adição ou sbtração
     
const CRAZY_OPERATION = 5 * (10-3) ** 2

console.log(CRAZY_OPERATION)

// operadores de incremento e decremento
let postLikes = 10

// postLikes = postLikes + 1
postLikes++
console.log(postLikes)

postLikes--
console.log(postLikes)

// operadores addition, subtraction, multiplication, division assignment
// postLikes = postLikes + 10
// postLikes += 10
// postLikes -= 5
// postLikes *= 3
postLikes /= 2

console.log(postLikes)

// NaN - not a number
console.log(7 / 'oi')

//concatenação de String com Number
const likesMessage = 'O post tem ' + postLikes + ' likes.'

console.log(likesMessage)


