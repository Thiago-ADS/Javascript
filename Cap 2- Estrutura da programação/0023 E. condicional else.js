/** Estrutura Condicional: else (se não)
 * 
 *  É normalmente utlizado com o if
 *  Onde, podemos executar um outro bloco de código, caso o requerimento do if não seja atendido
 *  Ou seja, se não executar o bloco if, será executado o bloco else.
 */

let nome = 'Allan';

if(nome == 'Thiago') {
    console.log('Seu nome é Thiago.');
} else {
    console.log('Seu nome não é Thiago');
}


let velocidade = 100;

if(velocidade <= 80) {
    console.log('Não foi multado.');
} else {
    console.log('Será multado');
}

let passaporte = true;

if(passaporte == true) {
    console.log('Pode passar.');
} else {
    console.log('O passaporte é falso!');
}