/** Estrutura condicional: else if
 * 
 *  Ainda podemos encadear mais condições com o else if
 *  Ou seja, antes de executar um else, ou até mesmo sem ele, podemos verificar mais uma condição
 *  É basicamente um ''Se não'' sendo adicionado
 */

let a = 5;
let b = 3;

if(a + b == 3) {
    console.log('O resultado é 3');
} else if (a == 4) {
    console.log('O valor de a é 4');
} else if (b == 3) {
    console.log('O valor de b é 3');
} else {
    console.log('Não é nenhuma das condições acima!');
}

let nome = 'Allan' //pode trocar por undefined ou por 'Thiago', que irá mudar a condição requerida.

if(nome != undefined && nome == 'Thiago') {
    console.log('O nome está definido e seu nome é Thiago.'); //Se 'nome' não fosse undefined e fosse igual a 'Thiago', executaria esse bloco de código.
} else if (nome != undefined && nome != 'Thiago') {
    console.log('O seu nome está definido porém não é Thiago.'); //Se 'nome' não fosse undefined mas não fosse igual a 'Thiago', executaria esse bloco de código.
} else {
    console.log('Seu nome não  está definido.'); //Se 'nome' fosse undefined, executaria esse bloco de código.
}

if (1 > 2) {
    console.log('teste')
} else if (1 == 1) {
    console.log('testando');
} //Aqui funciona mesmo sem ter um 'else' final, mas é bom usar else como final, p saber qndo acaba certin