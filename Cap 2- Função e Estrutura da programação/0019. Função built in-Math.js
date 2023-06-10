/**
 * Função utlizada para expressões/cálculos matemáticos
 * Ela calcula qual é o maior ou o menor número daquele local com valores
 * Essa sim é muito utlizada
 */

let MaiorNumero = Math.max(1,5,2,3);
console.log(MaiorNumero);
let maior = Math.max(51,-82,-300,9,23,43,46.2);
console.log(maior); // Aqui, manda procurar o maior número e mostrar no console

let MenorNumero = Math.min(-9, 20, 3, -5, -2.3, -9.2, 10.7, 91, 0.1);
let Menor = Math.min(30, 123, 39, 594, 27);
console.log(MenorNumero, Menor); //Aqui, procura o menor número e mostra no console

let Arredondar = Math.round(21.4234923432);
let Arredondar2 = Math.round( -938.392131293303331537339432493583458345349);
console.log(Arredondar); //Aqui, arredonda o valor caso seja número decimal
console.log(Arredondar2);

let ArredondarParaCima = Math.ceil(5.1);
console.log(ArredondarParaCima); //Arredonda pra cima, mesmo que seja 5, o resultado sai 6

let ArredondarParaBaixo = Math.floor(42.321311);
console.log(ArredondarParaBaixo); //Aqui não sei direito como funciona mas também tem ele ai
