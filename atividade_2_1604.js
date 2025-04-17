// Criando o array
let numeros = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7];

// Algoritmo de ordenação manual (Bubble Sort)
for (let i = 0; i < numeros.length - 1; i++) {
    for (let j = 0; j < numeros.length - 1 - i; j++) {
        if (numeros[j] > numeros[j + 1]) {
            // Troca os valores
            let temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}

// Exibindo o array ordenado (conforme solicitado na atividade)

console.log("Array ordenado:");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

 // Exibindo o array ordenado utilizando função  (apenas de exemplo utilizando a função)
 console.log (numeros.sort((a, b) => a - b)); // Ordenação crescente