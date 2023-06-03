/**
 * Operadores Lógicos Boolean
 * Para ver a tabela, episódio 26
 * 
 * && = and
 * Para o valor retornar true, os dois 'lados' da comparação devem ser true
 * 
 * || = or
 * Para o valor ser true, só um dos 'lados' precisa ser true
 * 
 * ! = not
 * Nesse caso, inverterá os valores, true vira false 
 */

console.log(true && true); //Aqui é true, pois nenhum é false
console.log(true && false); //Aqui é falso, pois um é false
console.log(false || false); //Aqui é falso, pois nenhum é true
console.log(!true); //Aqui é false, pois inverteu o valor

console.log(5 > 3 && 3 == 2); //false, pois por mais que 5 seja maior que 3, 3 não é igual a 2, e pro and, ambos precisam ser true
console.log(5 > 3 || 3 == 1); //true, pois 5 é maior que 3, por mais que 3 não seja igual a 1, pro or, só um precisa ser true
console.log(3 == 3 && 'Thiago' == 'Thiago'); //true pois ambos são verdadeiros
console.log('Allan' == 'Douglas' || false); //false, pois ambos são false

console.log(!true && true); //false pois um dos valores foi invertido
console.log(!(!true && true)); //true, pois inverteu o valor resultado da operação em parêntese