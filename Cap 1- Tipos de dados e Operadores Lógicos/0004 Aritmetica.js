/**
 * + é igual a soma normal
 * - é igual subtração
 * / é divisão
 * * é multiplicação
 * % é o resto, NÃO É PORCENTAGEM
 */

 console.log(2 + 3);
 console.log(5 - 2);
 console.log(4 * 4);
 console.log(5 / 3);
 console.log(20 % 2); //Aqui dá zero, pois o menor número possivel seria 20/2, então é 0
 console.log(21 % 2); //Aqui dá um, pois o menor número possivel seria 21/2, que restaria 1
 console.log(30 % 8);

 console.log(typeof(2 + 3));
 console.log(typeof(5 - 2));
 console.log(typeof(4 * 4));
 console.log(typeof(5 / 3));
 console.log(typeof(20 % 2));
 console.log(typeof(21 % 2));
 console.log(typeof(30 % 8));

/**
 * Também podemos usar assim:
 */

 console.log(5 + (2 * 4)); // 5 mais (2 vezes 4)
 console.log(15 / (5 - 8));//15 dividido por (5 menos 8)
 console.log((9 + 12) % 15);//(9 mais 12) resto de 15
 //Os que estão em parênteses, são sempre calculados primeiro