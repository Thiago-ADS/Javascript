// Esse vai ser feito com o ChatGPT pq eu to precisando ver mais sobre
// Então talvez seja bem mais longa e meio ''fora do lugar'' este código

/*
Array é uma estrutura que armazena de forma ordenada elementos, como strings, numbers objetos ou outros arrays
Cada elemento do array tem um indice começando do zero
Tem 2 formas principais de criar arrays:
*/

let meuArray1 = [1, 2, 3, 4, 5];
//Nesse, usa colchetes

let outroArray = new Array(1, 2, 3, 4, 5); //Construtor `Array()`
//Nesse, usa os parênteses, podendo passar os elementos como argumentos

let meuArray = [10, 20, 30, 40];
//Os elementos do índice do array começa pelo 0
console.log(meuArray[0]); //Saída: 10
console.log(meuArray[1]); //Saída: 20

//Você pode modificar os elementos atribuindo um novo valor ao índice 
meuArray[1] = 50;
console.log(meuArray); //Saída: 10, 50, 30, 40...

console.log(meuArray.length); //Aqui mostra quantos elementos tem no array, que nesse caso, é 4

meuArray.push(20);
console.log(meuArray); //Saída: 10, 50, 30, 40, 20
//Aqui, agnt bota um número no final do array

meuArray.pop();
console.log(meuArray); //Saída: 10, 50, 30, 40
//Deleta o ultimo array

outroArray = [10, 15, 20,];

outroArray.splice(1, 0, 60); //Adiciona o 60 na posição 1
console.log(outroArray); //Saída: 10, 60, 15, 20

outroArray.splice(2, 1); //Remove um elemento na posição 2
console.log(outroArray); //Saída: 10, 60, 20
