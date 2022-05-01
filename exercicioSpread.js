//Escreva um objeto e faça uma cópia dele
const itens = {
    category: "Informática",
    product: "Notebook",
    value: 5800,
    processor: "Core I5",
    memory: "256SSD",
    batery: "Lithium",
    so: "Windows 11",
}

const itensCopy = {
    ...itens,
}

console.log('itens', itens)
console.log('itensCopy', itensCopy)

//Usando o exemplo do exercício anterior, altere qualquer chave desse objeto com outro valor
const itens1 = {
    category: "Informática",
    product: "Notebook",
    value: 5800,
    processor: "Core I5",
    memory: "256SSD",
    batery: "Lithium",
    so: "Windows 11",
}

const changeItens = {
    ...itens1,
    value: 6300,
}

console.log('changeItens', changeItens)

//Escreva seu nome e separe-o usando a sintaxe de spread operator em um array
const person = {
    firstName: "Camila",
    lastName: "Sales",
}

var spreadArray = [ ...person.firstName ]

console.log(spreadArray)
