/** Já estudei variáveis no outro curso mas vamo lá...
 *  Variáveis é quando salvamos valores em variáveis
 * e então podemos criar expressões com as variáveis
 */

let laranjas = 5 // a variável laranjas tem um valor de 5
console.log(laranjas); //5 laranjas
console.log(laranjas * laranjas); //5 laranjas vezes 5 laranjas = 25 laranjas
console.log(`Tem ${laranjas} laranjas na cesta`);

/**
 * Também podemos mudar o valor que foi salvo anteriormente
 * e podemos atribuir vários valores a várias variáveis
 */

console.log(laranjas = laranjas + 1); //Aqui adicionará +1 laranja ao total
let quadrado = 4 
let triangulo = 3  //cada forma receberá um valor
let octagono = 8
console.log(quadrado * (triangulo + octagono)); //valores sendo usados em multiplicação, soma seria 44

let nome = 'Thiago';
console.log(`O meu nome é ${nome}, e o seu?`);

laranjas = 20;
console.log(laranjas);
laranjas = 390219321;
console.log(laranjas);
laranjas = 'Maçã';
console.log(laranjas);
/**Podemos mudar os valores com liberdade, a variável laranja mudou de um número, para outro número para uma string
 * Caso a variável já tenha sido declarada, não precisa botar 'let' antes da variável 
*/