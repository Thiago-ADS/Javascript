/**
 * A \ pode dar um 'escape' na String, permitindo 'Efeitos especiais'
 * Por exemplo, \n pula uma linha
 */

console.log('Essa é uma string \nDe duas linhas');

/**
 * Para inserir aspas em strings, devemos usar o outro tipo de aspa
 */

console.log('Aqui a "aspas" irá funcionar'); //Caso usasse a mesma aspa, não funcionaria

/**
 * O template literals (``) serve para computar os valores também
 */

console.log(`A soma de 2 + 2 é ${2+2}`);//aqui funciona
console.log('A soma de 2 + 2 é ${2+2}');// aqui não funciona, porcausa do aspas errado

/**
 * Também é possivel concatenar strings 
 */

console.log('O' + ' meu' + ' nome' + ' é' +  ' Thiago');

