/**
 * O javascript pode silenciosamente mudar o resultado de certas operações
 */

console.log(5 * null); // Aqui seria 0
console.log('5' - 3);8 //2 Aqui soma normal
console.log('5' + 1) //51 Aqui concatena
console.log('4' * 3) //12 Aqui multiplica normal
console.log('dois' * 'três')//NaN

console.log(typeof('123' + 5));// Isso seria considerado uma string e o resultado seria 1235
console.log(typeof('30' - 20));//Isso seria considerado um number, e o resultado seria 10
console.log('djasi' * 3); //Um NaN