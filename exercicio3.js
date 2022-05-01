// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     country: "Brazil",
//     city: "São Paulo",
//     state: "SP",
//     postalCode: "01001001",
//     neigbour: "Centro"
// }
//Dado o objeto acima, extraia os dados pessoas de John e todo restante (endereço) em uma váriavel
//chamada endereço, ao final desse exercício, você deve ter apenas 4 variáveis.

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    country: "Brazil",
    city: "São Paulo",
    state: "SP",
    postalCode: "01001001",
    neigbour: "Centro"
};


const { firstName, lastName, age, ...adress } = person


console.log(firstName, lastName, age, adress)
