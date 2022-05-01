// Escreva uma condição em que o usuário seja permitido dirigir
//Nesse caso, se o motorista estiver sobrio poderá dirigir
const motorista = "sobrio";

console.log(motorista === "sobrio" ? "Pode dirigir" : motorista === "bebado" ? "Não pode dirigir" : "Não pode dirigir")

//Escreva uma condição em que o usuário possa realizar uma tarefa se ele quiser ou alguem permitir
//Nesse caso, a pessoa quer entrar de qlqr forma, mas só será permitido se for maior de 18 anos
const entradaBalada = 17;
let querer = true;

console.log(entradaBalada >= 18 ? "Permitido" : "Não permitido")
console.log(querer || entradaBalada ? "Eu quero" : "Eu não quero")

//Escreva uma condição em que o usuário escolha a roupa que irá utilizar em várias situações climáticas
//Nesse caso, cada opção dará uma indicação de roupa
const clima = "chuva"

console.log(clima === "frio" ? "Use uma blusa" : clima === "calor" ? "Use uma regata" : clima === "chuva" ? "Use uma capa de chuva" : "Use calça e camiseta")