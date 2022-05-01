// escreva uma função (arrow function) que irá receber os parâmetros cpf, 
//data de nascimento e cep (todos em string)
//e sem formatação, formate-os com regex e exiba no console


const client = (cpf, bornDate, cep) => {

    const regexCpf = /([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})$/gmi
    const cpfFormatted = cpf.replace(regexCpf, '$1.$2.$3-$4');
    const regexBornDate = /([0-9]{2})([0-9]{2})([0-9]{4})$/gmi
    const bornDateFormatted = bornDate.replace(regexBornDate, '$1/$2/$3')
    const regexCep = /([0-9]{2})([0-9]{3})([0-9]{3})$/gmi
    const cepFormatted = cep.replace(regexCep, '$1.$2-$3')

return {
    cpf: cpfFormatted,
    bornDate: bornDateFormatted,
    cep: cepFormatted
}

}

console.log(client('32165498756', '23012000', '18705010'))


