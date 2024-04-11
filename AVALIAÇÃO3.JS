//Calcular a soma dos números de um array

const numeros = [2, 5, 7, 9, 10];
let soma = 0;

for (let i = 0; i < numeros.length; i++){
    soma += numeros[i];
}

alert("a soma do numero é: " + soma)
