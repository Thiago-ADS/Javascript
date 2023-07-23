/**
 *  Break
 *  Esse comando força a saída de um loop antes que complete todo seu ciclo
 *  É pouco utlizada mas bem útil, com isso podemos parar o loop quando alguma coisa acontecer
 */

let nome = 'Thiago'

for (let i = 0; i < 10; i = i + 1) { // iterando somando

    if (i == 3) {
        nome = 'Allan' //se i for igual a 3, a variável nome vira ''Allan''
    }

    if(i == 5 && nome == 'Allan') {
        console.log('O nome é Allan e chegou em 5, pode parar já.'); 
        break; // Quando i for igual a 5 e o nome for igual a 'Allan', executará o break e o loop acabará antes de chegar em 9.
    }

    console.log(i);

}