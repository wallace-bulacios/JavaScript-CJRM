// Métodos Comuns de Strings

//lastIndexOf mostra a última ocorrência de um determinado caractere informado dentro dos ()
const EMAIL = 'laracroft@rogermelo.com.br'

const LAST_INDEXOF_A = EMAIL.lastIndexOf('a')
console.log(LAST_INDEXOF_A)

//metodo slice vai fatiar pegar um pedaço de uma string
const EMAIL_SLICE = EMAIL.slice(4, 9)

console.log(EMAIL_SLICE, EMAIL)


//método replace
const EMAIL_REPLACE = EMAIL.replace('laracroft', 'chun-li')

console.log(EMAIL_REPLACE, EMAIL)


