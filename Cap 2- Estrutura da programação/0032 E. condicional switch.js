/**
 *  Condicional switch
 *  É basicamente varios ifs, quando se precisa de vários ifs, podemos usar o switch/case
 *  Podemos sair do case com break e inserir uma expressão padrão caso nenhum valor seja correspondido
 *  Não é muito usado, muitos optam por usar vários ifs
 */

let nome = 'Allan';

switch(nome) {
    case 'Thiago':
      console.log('O seu nome é Thiago')
      break;
    case 'Allan':
      console.log('O seu nome é Allan')
      break;
    default:
      console.log('o nome não foi encontrado.');
      break
}