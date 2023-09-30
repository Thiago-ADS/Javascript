let meuArray = [10, 20, 30]; 
for (let i = 0; i < meuArray.length; i++) {
    console.log(meuArray[i]);
}

/*
Enquanto I for menor que o tamanho do array, adicionará +1, e quanto for o número de I, mostrará
O elemento do array naquela posição, por exemplo, se I for 2, mostrará 30.
*/

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let indice = 0
let limite = 6

while (indice < limite) {
    console.log(n[indice])
    indice++
}

let semPares = [1, 3, 5, 7, 9];
let arr = [10, 11, 12, 13, 14, 15]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        semPares.push(arr[i]);
    }
}
console.log(semPares);

