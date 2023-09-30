 /** Estrutura condicional: if (se)
  *  O programa vai executar um bloco de código SE algo acontecer
  *  Onde algo é a condição imposta por um statement, que resultar em um boolean (true or false)
  */

let idade = 20;

if (idade > 18) {
    console.log ('Você é de maior.'); 
} //Se idade for maior que 18, executar o comando imposto.

if (idade == 18) {
    console.log('Você virou de maior este ano.'); 
} //Nesse caso, a idade não é 18, então não irá executar o comando.

//** Também podemos botar mais condições necessárias para ser true */

let nome = 'Thiago';
let idade2 = 16;
let passaporte = true;

if((nome == 'Thiago' && idade2 > 10) || passaporte == true); {
    console.log('Liberado!');
}
