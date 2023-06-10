/**
 * String é igual a texto 
 * Tudo que estiver dentro de '', é considerado uma string, sem exceção
 * ', " e ` também podem ser usados
 */

console.log(typeof 'Olá, eu sou Thiago');
console.log(typeof "Eu sou muito preguiçoso");
console.log(typeof `Mas os estudos estão dificéis`);
//São todas strings, mas com aspas diferentes

console.log(typeof 30); // aqui é um número
console.log(typeof'30'); // aqui é uma string

console.log(typeof Infinity); // aqui é um número
console.log(typeof 'Infinity');// e aqui é uma string