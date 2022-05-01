//Escreva uma função que retorna se o valor informado é par/impar
const parOuImpar = (number) => {
    if (number % 2 === 0) {
    return "Par"
} 
    return "Impar"
}
console.log(parOuImpar(17))

//Escreva uma função que soma dois numeros e retorna a soma entre eles
const sum = (number1, number2) => {
    return number1 + number2
}
console.log(48+64)

//Escreva uma função que retorna um cumprimento
const cumprimento = (nome) => {
    return `Oi ${nome}! Como vai?!`
}
console.log(cumprimento("Camila"))